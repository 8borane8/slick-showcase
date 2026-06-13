import type { Page } from "@webtools/slick-server";
import { getCodeSample } from "../utils/code-samples.ts";
import { CodeBlock, PageFooter, Ticker } from "../components/ui.tsx";
import { getIslandSources } from "../utils/island-sources.ts";
import Counter from "../islands/Counter.tsx";

const src = getIslandSources();

export default {
	url: "/",
	template: "app",
	title: "Slick · Ultrafast Deno web framework",

	styles: ["/styles/pages/index.css"],
	scripts: [],

	head: (
		<>
			<meta property="og:title" content="Slick" />
			<meta
				property="og:description"
				content="A small, ultrafast web framework for Deno. SSR by default, islands when you need them."
			/>
		</>
	),

	body: (
		<>
			<section class="hero">
				<div class="container hero-grid">
					<div>
						<div class="hero-eyebrow">
							<strong>@webtools/slick-server</strong> + <strong>@webtools/slick-client</strong>
						</div>

						<h1>Ship HTML first. Hydrate only what moves.</h1>

						<p class="hero-lead">
							Slick is a Deno-native web stack with server rendering, selective hydration, and a
							zero-config asset pipeline. No ceremony, no meta-framework weight.
						</p>

						<div class="hero-actions">
							<a
								href="https://github.com/8borane8/webtools-slick-server#quick-start"
								target="_blank"
								rel="noopener noreferrer"
								class="btn btn-primary"
							>
								Get started
							</a>
							<a href="/islands" class="btn btn-ghost">
								See islands
							</a>
						</div>

						<div class="hero-meta">
							<span>No build step</span>
							<span>MIT licensed</span>
							<span>Preact SSR</span>
						</div>
					</div>

					<div class="hero-terminal">
						<CodeBlock filename="server.ts" html={getCodeSample("server")} />
					</div>
				</div>
			</section>

			<Ticker />

			<section class="section">
				<div class="container">
					<div class="bento-header">
						<span class="section-label">Capabilities</span>
						<h2 class="section-title">Everything you need to serve the web. Nothing you don't.</h2>
					</div>

					<div class="bento">
						<article class="card bento-a">
							<h3>Ultrafast by design</h3>
							<p>
								Built on @webtools/expressapi and Deno's native HTTP stack. Minimal runtime overhead,
								tiny config surface, predictable folder conventions.
							</p>
							<span class="tag">Performance</span>
						</article>
						<article class="card bento-b">
							<h3>SSR out of the box</h3>
							<p>
								Every route renders to HTML with Preact on the server. Fast first paint, solid SEO.
								Client JS stays off the wire unless you opt in.
							</p>
							<span class="tag">Rendering</span>
						</article>
						<article class="card bento-c">
							<h3>Type-safe</h3>
							<p>First-class TypeScript and JSX across pages, templates, and islands.</p>
							<span class="tag">DX</span>
						</article>
						<article class="card bento-d">
							<h3>Islands</h3>
							<p>
								Drop a Preact component in your page. Slick tags it during SSR and hydrates it on the
								client. No manual registration.
							</p>
							<span class="tag">Interactivity</span>
						</article>
						<article class="card bento-e">
							<h3>Asset pipeline</h3>
							<p>
								CSS, JS, and TS under static/ are transpiled and minified on the fly with esbuild, then
								cached in memory.
							</p>
							<span class="tag">Tooling</span>
						</article>
						<article class="card bento-f">
							<h3>SPA mode</h3>
							<p>
								Optional client navigation via @webtools/slick-client. First load stays SSR; later
								navigations patch the DOM without a full reload.
							</p>
							<span class="tag">Navigation</span>
						</article>
					</div>
				</div>
			</section>

			<section class="section section-alt">
				<div class="container">
					<span class="section-label">Request flow</span>
					<h2 class="section-title">Four steps. No magic strings.</h2>
					<p class="section-desc">
						Templates, pages, and islands follow a strict convention. Slick wires them together at startup.
					</p>

					<div class="pipeline">
						<div class="pipeline-step">
							<div class="step-num">1</div>
							<h3>HTTP request</h3>
							<p>GET hits a registered page route or a static asset under static/.</p>
						</div>
						<div class="pipeline-step">
							<div class="step-num">2</div>
							<h3>Template + page</h3>
							<p>The page body is injected into the template shell at #app.</p>
						</div>
						<div class="pipeline-step">
							<div class="step-num">3</div>
							<h3>SSR</h3>
							<p>Preact renders the full document to HTML on the server.</p>
						</div>
						<div class="pipeline-step">
							<div class="step-num">4</div>
							<h3>Hydrate islands</h3>
							<p>Tagged components load their bundles and hydrate in place via import maps.</p>
						</div>
					</div>
				</div>
			</section>

			<section class="section">
				<div class="container">
					<span class="section-label">Live demo</span>
					<h2 class="section-title">This site runs on Slick.</h2>
					<p class="section-desc">
						The counter below is an island: interactive on the client, rendered on the server. Everything
						else on this page is plain HTML.
					</p>

					<div class="grid-2 grid-2--wide demo-layout">
						<div class="demo-spotlight">
							<div class="demo-label">Hydrated island</div>
							<Counter start={7} label="Request counter" codeHtml={src.Counter} />
						</div>

						<CodeBlock filename="islands/Counter.tsx" html={src.Counter} />
					</div>
				</div>
			</section>

			<section class="section section-alt section--end">
				<div class="container">
					<span class="section-label">Quick start</span>
					<h2 class="section-title">A real project layout.</h2>
					<p class="section-desc" style="margin-bottom: 32px;">
						Three required folders, one server file, and optional islands. Your structure is the config.
					</p>

					<CodeBlock filename="project layout" html={getCodeSample("projectLayout")} />

					<div class="grid-2 quickstart-grid">
						<CodeBlock filename="templates/app.tsx" html={getCodeSample("templateApp")} />
						<CodeBlock filename="pages/index.tsx" html={getCodeSample("pageIndex")} />
					</div>

					<PageFooter href="/islands" label="Explore islands →">
						<div class="install-cmd">
							<span class="prompt">$</span>
							<code>deno add jsr:@webtools/slick-server jsr:@webtools/slick-client</code>
						</div>
					</PageFooter>
				</div>
			</section>
		</>
	),

	onpost: null,
	onrequest: null,
} satisfies Page;
