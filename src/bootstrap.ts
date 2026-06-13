import { initCodeSamples } from "./utils/code-samples.ts";
import { initIslandSources } from "./utils/island-sources.ts";
import { initShiki } from "./utils/shiki.ts";

export async function initApp(root: string): Promise<void> {
	await initShiki();
	await initIslandSources(root);
	initCodeSamples();
}
