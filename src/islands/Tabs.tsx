import { useSignal } from "@preact/signals";
import { IslandShell } from "../components/IslandShell.tsx";

const TABS = ["Overview", "API", "Examples"] as const;

interface Props {
	codeHtml: string;
}

export default function Tabs({ codeHtml }: Props) {
	const active = useSignal<(typeof TABS)[number]>("Overview");

	return (
		<IslandShell
			name="Tabs"
			title="Tabs"
			class="tabs-demo"
			codeHtml={codeHtml}
			desc="Switch panels without re-rendering the full page."
		>
			<div class="tabs-list" role="tablist">
				{TABS.map((tab) => (
					<button
						type="button"
						key={tab}
						role="tab"
						class={`tab-btn ${active.value === tab ? "tab-btn-active" : ""}`}
						aria-selected={active.value === tab}
						onClick={() => (active.value = tab)}
					>
						{tab}
					</button>
				))}
			</div>
			<div class="tab-panel" role="tabpanel">
				{active.value === "Overview" && (
					<p>Islands are Preact components rendered on the server and hydrated on the client.</p>
				)}
				{active.value === "API" && (
					<p>
						Export a default function from <code>islands/*.tsx</code>. Use it in any page body.
					</p>
				)}
				{active.value === "Examples" && <p>You're looking at one. Each island ships its own bundle.</p>}
			</div>
		</IslandShell>
	);
}
