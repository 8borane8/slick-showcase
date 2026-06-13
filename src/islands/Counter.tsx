import { useSignal } from "@preact/signals";
import { IslandShell } from "../components/IslandShell.tsx";

interface Props {
	start: number;
	label?: string;
	codeHtml: string;
}

export default function Counter({ start, label = "Counter", codeHtml }: Props) {
	const count = useSignal(start);

	return (
		<IslandShell
			name="Counter"
			title={label}
			class="counter-demo"
			codeHtml={codeHtml}
			desc={
				<>
					Server sent <strong>{start}</strong> as the initial prop. Only this island loads JavaScript.
				</>
			}
		>
			<div class="counter-controls">
				<button type="button" class="counter-btn" onClick={() => count.value--} aria-label="Decrease">−</button>
				<span class="counter-value">{count}</span>
				<button type="button" class="counter-btn" onClick={() => count.value++} aria-label="Increase">+</button>
			</div>
		</IslandShell>
	);
}
