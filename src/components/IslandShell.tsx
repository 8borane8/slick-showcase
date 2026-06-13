import type { ComponentChildren } from "preact";
import { useSignal } from "@preact/signals";
import { useEffect } from "preact/hooks";
import { ShikiHtml } from "./ShikiHtml.tsx";

interface IslandShellProps {
	name: string;
	title: string;
	desc: ComponentChildren;
	codeHtml: string;
	class?: string;
	children: ComponentChildren;
}

export function IslandShell({ name, title, desc, codeHtml, class: className, children }: IslandShellProps) {
	return (
		<div class={`island-demo${className ? ` ${className}` : ""}`}>
			<div class="island-demo-top">
				<h4>{title}</h4>
				<CodePopup filename={`islands/${name}.tsx`} codeHtml={codeHtml} />
			</div>
			<p class="island-demo-desc">{desc}</p>
			{children}
		</div>
	);
}

interface CodePopupProps {
	filename: string;
	codeHtml: string;
}

function CodePopup({ filename, codeHtml }: CodePopupProps) {
	const open = useSignal(false);

	useEffect(() => {
		if (!open.value) return;
		const onKey = (e: KeyboardEvent) => {
			if (e.key === "Escape") open.value = false;
		};
		document.addEventListener("keydown", onKey);
		document.body.style.overflow = "hidden";
		return () => {
			document.removeEventListener("keydown", onKey);
			document.body.style.overflow = "";
		};
	}, [open.value]);

	return (
		<>
			<button type="button" class="btn-code" onClick={() => (open.value = true)}>
				View code
			</button>
			{open.value && (
				<div class="code-modal-overlay" onClick={() => (open.value = false)} role="presentation">
					<div
						class="code-window code-modal"
						role="dialog"
						aria-modal="true"
						aria-label={`Source: ${filename}`}
						onClick={(e) => e.stopPropagation()}
					>
						<div class="code-bar code-bar-split">
							<span class="code-filename">{filename}</span>
							<button
								type="button"
								class="code-close"
								onClick={() => (open.value = false)}
								aria-label="Close"
							>
								×
							</button>
						</div>
						<ShikiHtml html={codeHtml} class="code-body shiki-html" />
					</div>
				</div>
			)}
		</>
	);
}
