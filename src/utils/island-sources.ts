import { toHtml } from "./shiki.ts";

const ISLANDS_DIR = "islands";

export type IslandSources = Record<string, string>;

let cache: IslandSources = {};

export async function initIslandSources(root: string): Promise<void> {
	const dir = `${root.replace(/[/\\]+$/, "")}/${ISLANDS_DIR}`;
	const sources: IslandSources = {};

	for await (const entry of Deno.readDir(dir)) {
		if (!entry.isFile || !entry.name.endsWith(".tsx")) continue;
		const island = entry.name.slice(0, -4);
		const raw = await Deno.readTextFile(`${dir}/${entry.name}`);
		sources[island] = toHtml(raw, "tsx");
	}

	cache = sources;
}

export function getIslandSources(): Readonly<IslandSources> {
	return cache;
}

export function getIslandHtml(island: string): string {
	return cache[island] ?? "";
}
