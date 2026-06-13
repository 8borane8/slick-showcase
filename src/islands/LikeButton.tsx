import { useSignal } from "@preact/signals";
import { IslandShell } from "../components/IslandShell.tsx";

interface Props {
	initial?: number;
	codeHtml: string;
}

export default function LikeButton({ initial = 12, codeHtml }: Props) {
	const likes = useSignal(initial);
	const liked = useSignal(false);

	return (
		<IslandShell
			name="LikeButton"
			title="Like button"
			class="like-demo"
			codeHtml={codeHtml}
			desc="Two signals, one island. Props are serialized from the server."
		>
			<button
				type="button"
				class={`like-btn ${liked.value ? "like-btn-active" : ""}`}
				onClick={() => {
					liked.value = !liked.value;
					likes.value += liked.value ? 1 : -1;
				}}
			>
				{liked.value ? "♥" : "♡"} {likes}
			</button>
		</IslandShell>
	);
}
