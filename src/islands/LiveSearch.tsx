import { useSignal } from "@preact/signals";
import { IslandShell } from "../components/IslandShell.tsx";

interface Props {
	codeHtml: string;
}

export default function LiveSearch({ codeHtml }: Props) {
	const query = useSignal("");
	const items = ["Counter", "Toggle", "Tabs", "Accordion", "Like button", "Live search"];

	const filtered = items.filter((item) => item.toLowerCase().includes(query.value.toLowerCase()));

	return (
		<IslandShell
			name="LiveSearch"
			title="Live search"
			class="search-demo"
			codeHtml={codeHtml}
			desc="Controlled input with instant filtering. Still zero JS outside this box."
		>
			<input
				type="search"
				class="search-input"
				placeholder="Filter islands…"
				value={query.value}
				onInput={(e) => (query.value = (e.target as HTMLInputElement).value)}
			/>
			<ul class="search-results">
				{filtered.length > 0
					? filtered.map((item) => <li key={item}>{item}</li>)
					: <li class="search-empty">No matches</li>}
			</ul>
		</IslandShell>
	);
}
