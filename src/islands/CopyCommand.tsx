import { useSignal } from "@preact/signals";

interface Props {
	command: string;
}

export default function CopyCommand({ command }: Props) {
	const status = useSignal<"idle" | "copied" | "failed">("idle");

	async function copy() {
		try {
			await navigator.clipboard.writeText(command);
			status.value = "copied";
		} catch {
			status.value = "failed";
		}

		globalThis.setTimeout(() => {
			status.value = "idle";
		}, 2000);
	}

	const label = status.value === "copied" ? "Copied!" : status.value === "failed" ? "Failed" : "Copy";

	return (
		<div class="hero-cmd">
			<span class="hero-cmd-prompt" aria-hidden="true">$</span>
			<code class="hero-cmd-text">{command}</code>
			<button
				type="button"
				class={`hero-cmd-copy ${status.value === "copied" ? "is-copied" : ""}`}
				onClick={copy}
				aria-label="Copy command"
			>
				{label}
			</button>
		</div>
	);
}
