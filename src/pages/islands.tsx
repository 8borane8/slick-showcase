import type { Page } from "@webtools/slick-server";
import type { ComponentChildren } from "preact";
import { getCodeSample } from "../utils/code-samples.ts";
import { getIslandSources } from "../utils/island-sources.ts";
import Accordion from "../islands/Accordion.tsx";
import Counter from "../islands/Counter.tsx";
import LikeButton from "../islands/LikeButton.tsx";
import LiveSearch from "../islands/LiveSearch.tsx";
import Tabs from "../islands/Tabs.tsx";
import Toggle from "../islands/Toggle.tsx";
import { CodeBlock, PageFooter } from "../components/ui.tsx";

const src = getIslandSources();

const DEMOS: { wide?: boolean; node: ComponentChildren }[] = [
	{ node: <Counter start={0} label="Counter" codeHtml={src.Counter} /> },
	{ node: <Toggle codeHtml={src.Toggle} /> },
	{ node: <LikeButton initial={24} codeHtml={src.LikeButton} /> },
	{ node: <Tabs codeHtml={src.Tabs} /> },
	{ wide: true, node: <Accordion codeHtml={src.Accordion} /> },
	{ wide: true, node: <LiveSearch codeHtml={src.LiveSearch} /> },
];

export default {
	url: "/islands",
	template: "app",
	title: "Islands · Slick",

	styles: [],
	scripts: [],

	head: (
		<>
			<meta
				name="description"
				content="Interactive island examples for Slick. Counter, tabs, toggle, accordion, and more."
			/>
			<meta property="og:title" content="Slick Islands" />
		</>
	),

	body: (
		<>
			<section class="page-hero">
				<div class="container">
					<span class="section-label">Islands</span>
					<h1>Interactivity, scoped and server-first.</h1>
					<p>
						Each block below is a separate Preact island: rendered on the server, hydrated on the client,
						bundled individually. The rest of this page is plain HTML.
					</p>
				</div>
			</section>

			<section class="section section--end">
				<div class="container">
					<div class="grid-2 islands-layout">
						{DEMOS.map(({ wide, node }, i) => (
							<div key={i} class={`card island-card${wide ? " island-card-wide" : ""}`}>
								{node}
							</div>
						))}
					</div>

					<div class="note">
						Import any island in a page body. Slick tags it with <code>data-slick-island</code>{" "}
						during SSR and hydrates it automatically. Props must be JSON-serializable.
					</div>

					<div style="margin-top: 32px;">
						<CodeBlock filename="pages/demo.tsx" html={getCodeSample("pagesDemo")} />
					</div>

					<PageFooter
						text="Want to know why Slick exists?"
						href="/about"
						label="Read the story →"
					/>
				</div>
			</section>
		</>
	),

	onpost: null,
	onrequest: null,
} satisfies Page;
