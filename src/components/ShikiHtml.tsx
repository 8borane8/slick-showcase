interface ShikiHtmlProps {
	html: string;
	class?: string;
}

export function ShikiHtml({ html, class: className = "shiki-html" }: ShikiHtmlProps) {
	return <div class={className} dangerouslySetInnerHTML={{ __html: html }} />;
}
