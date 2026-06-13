import { createHighlighter, type Highlighter } from "shiki";

export const SHIKI_THEME = "github-dark-default";

const LANGS = ["tsx", "typescript", "json", "shell", "text"] as const;

let highlighter: Highlighter | null = null;

export async function initShiki(): Promise<void> {
	highlighter?.dispose();
	highlighter = await createHighlighter({
		themes: [SHIKI_THEME],
		langs: [...LANGS],
	});
}

export function toHtml(code: string, lang: string): string {
	if (!highlighter) throw new Error("Shiki not initialized. Call initShiki() first.");
	return highlighter.codeToHtml(code, { lang, theme: SHIKI_THEME });
}

export function disposeShiki(): void {
	highlighter?.dispose();
	highlighter = null;
}
