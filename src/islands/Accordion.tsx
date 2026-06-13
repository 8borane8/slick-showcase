import { useSignal } from "@preact/signals";
import { IslandShell } from "../components/IslandShell.tsx";

const ITEMS = [
	{
		id: "a",
		title: "What is an island?",
		body: "A Preact component that Slick renders on the server and hydrates on the client.",
	},
	{
		id: "b",
		title: "Do I register them?",
		body: "No. Drop a component in islands/ and import it in a page. Slick handles the rest.",
	},
	{
		id: "c",
		title: "Can I use npm packages?",
		body: "Yes. Add them to sharedLibs and import them inside your island.",
	},
];

interface Props {
	codeHtml: string;
}

export default function Accordion({ codeHtml }: Props) {
	const open = useSignal<string | null>("a");

	return (
		<IslandShell
			name="Accordion"
			title="Accordion"
			class="accordion-demo"
			codeHtml={codeHtml}
			desc="Local UI state stays inside the island boundary."
		>
			<div class="accordion-list">
				{ITEMS.map((item) => (
					<div key={item.id} class={`accordion-item ${open.value === item.id ? "accordion-open" : ""}`}>
						<button
							type="button"
							class="accordion-trigger"
							onClick={() => (open.value = open.value === item.id ? null : item.id)}
							aria-expanded={open.value === item.id}
						>
							{item.title}
							<span class="accordion-chevron">{open.value === item.id ? "−" : "+"}</span>
						</button>
						{open.value === item.id && <div class="accordion-body">{item.body}</div>}
					</div>
				))}
			</div>
		</IslandShell>
	);
}
