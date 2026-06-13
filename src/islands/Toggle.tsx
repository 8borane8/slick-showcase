import { useSignal } from "@preact/signals";
import { IslandShell } from "../components/IslandShell.tsx";

interface Props {
	codeHtml: string;
}

export default function Toggle({ codeHtml }: Props) {
	const on = useSignal(false);

	return (
		<IslandShell
			name="Toggle"
			title="Toggle"
			class="toggle-demo"
			codeHtml={codeHtml}
			desc={
				<>
					Boolean state with <code>@preact/signals</code>.
				</>
			}
		>
			<div class="toggle-row">
				<button
					type="button"
					class={`toggle ${on.value ? "toggle-on" : ""}`}
					onClick={() => (on.value = !on.value)}
					aria-pressed={on.value}
				>
					<span class="toggle-thumb" />
				</button>
				<span class="island-status">{on.value ? "Enabled" : "Disabled"}</span>
			</div>
		</IslandShell>
	);
}
