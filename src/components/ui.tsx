// deno-lint-ignore-file jsx-key
import type { ComponentChildren } from "preact";
import { ShikiHtml } from "./ShikiHtml.tsx";

interface CodeBlockProps {
	filename: string;
	html: string;
}

export function CodeBlock({ filename, html }: CodeBlockProps) {
	return (
		<div class="code-window">
			<div class="code-bar">
				<span class="code-dot" />
				<span class="code-dot" />
				<span class="code-dot" />
				<span class="code-filename">{filename}</span>
			</div>
			<ShikiHtml html={html} class="code-body shiki-html" />
		</div>
	);
}

interface PageFooterProps {
	href: string;
	label: string;
	text?: string;
	children?: ComponentChildren;
}

export function PageFooter({ text, href, label, children }: PageFooterProps) {
	return (
		<div class="page-footer">
			{children ?? <p class="page-footer-text">{text}</p>}
			<a href={href} class="btn btn-ghost">{label}</a>
		</div>
	);
}

const TICKER = [
	"Server-side rendering",
	"Islands architecture",
	"esbuild pipeline",
	"SPA navigation",
	"Preact + Signals",
	"TypeScript native",
	"Import maps",
	"Vendor dedup",
];

export function Ticker() {
	const items = [...TICKER, ...TICKER];
	return (
		<div class="ticker">
			<div class="ticker-track">
				{items.map((item) => <span class="ticker-item">{item}</span>)}
			</div>
		</div>
	);
}
