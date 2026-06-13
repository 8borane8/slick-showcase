import type { Page } from "@webtools/slick-server";
import { getCodeSample } from "../utils/code-samples.ts";
import { CodeBlock, Ticker } from "../components/ui.tsx";
import { getIslandSources } from "../utils/island-sources.ts";
import Counter from "../islands/Counter.tsx";
import CopyCommand from "../islands/CopyCommand.tsx";

const src = getIslandSources();
const INIT_CMD = "deno run -Ar jsr:@webtools/init";

const weather = {
	city: "Paris",
	temp: 22,
	condition: "Sunny",
	humidity: 41,
};

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

	body: () => (
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
							<a href="#get-started" class="btn btn-primary">
								Get started
							</a>
							<CopyCommand command={INIT_CMD} />
						</div>

						<div class="hero-meta">
							<span>No build step</span>
							<span>MIT licensed</span>
							<span>Preact SSR</span>
						</div>
					</div>

					<div class="hero-terminal sticky-panel">
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
					<span class="section-label">SSR first</span>
					<h2 class="section-title">Fetch on the server. Ship HTML, not a loading spinner.</h2>
					<p class="section-desc">
						<code>body</code>{" "}
						accepts an async function: Slick awaits your data, renders Preact to HTML, and the browser
						receives a complete page. No client-side waterfall.
					</p>

					<div class="grid-2 grid-2--wide ssr-demo-layout">
						<CodeBlock filename="pages/weather.tsx" html={getCodeSample("ssrFetch")} />

						<div class="sticky-panel">
							<div class="ssr-preview">
								<div class="demo-label">Server-rendered output</div>
								<article class="ssr-preview-card">
									<h3>{weather.city}</h3>
									<p class="ssr-preview-temp">{weather.temp}°C</p>
									<p class="ssr-preview-condition">{weather.condition}</p>
									<dl class="ssr-preview-meta">
										<div>
											<dt>Humidity</dt>
											<dd>{weather.humidity}%</dd>
										</div>
										<div>
											<dt>Source</dt>
											<dd>api.example.com/weather/paris</dd>
										</div>
									</dl>
								</article>
							</div>

							<p class="ssr-rendered-at">
								<span class="ssr-rendered-at-dot" aria-hidden="true" />
								Server-rendered at{" "}
								<time datetime={new Date().toISOString()}>{new Date().toISOString()}</time>
							</p>
						</div>
					</div>
				</div>
			</section>

			<section class="section">
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

			<section class="section section-alt">
				<div class="container">
					<span class="section-label">Live demo</span>
					<h2 class="section-title">This site runs on Slick.</h2>
					<p class="section-desc">
						The counter below is an island: interactive on the client, rendered on the server. Everything
						else on this page is plain HTML.
					</p>

					<div class="grid-2 grid-2--wide demo-layout">
						<div class="demo-spotlight sticky-panel">
							<div class="demo-label">Hydrated island</div>
							<Counter start={7} label="Request counter" codeHtml={src.Counter} />
						</div>

						<CodeBlock filename="islands/Counter.tsx" html={src.Counter} />
					</div>
				</div>
			</section>

			<section class="section">
				<div class="container">
					<span class="section-label">Quick start</span>
					<h2 class="section-title">What you get out of the box.</h2>
					<p class="section-desc">
						<a
							href="https://github.com/8borane8/webtools-init"
							target="_blank"
							rel="noopener noreferrer"
							style="color: var(--accent-light);"
						>
							Webtools Init
						</a>{" "}
						scaffolds a ready-to-run Slick app with pages, templates, islands, and static assets wired up
						from the start.
					</p>

					<p class="quickstart-sub">Generated project layout:</p>

					<CodeBlock filename="project layout" html={getCodeSample("projectLayout")} />

					<div class="grid-2 quickstart-grid">
						<CodeBlock filename="templates/app.tsx" html={getCodeSample("templateApp")} />
						<CodeBlock filename="pages/index.tsx" html={getCodeSample("pageIndex")} />
					</div>
				</div>
			</section>

			<section id="get-started" class="cta-section section--end">
				<div class="container">
					<div class="cta-card">
						<span class="section-label">Get started</span>
						<h2 class="cta-title">Start your next project in seconds.</h2>
						<p class="cta-desc">
							Webtools Init walks you through setup, whether you want a frontend-only app or a full-stack
							monorepo with ExpressAPI, database, and mailer. No install, runs straight from JSR.
						</p>

						<CopyCommand command={INIT_CMD} />

						<div class="cta-actions">
							<a
								href="https://github.com/8borane8/webtools-init"
								target="_blank"
								rel="noopener noreferrer"
								class="btn btn-ghost"
							>
								View on GitHub →
							</a>
							<a href="/islands" class="btn btn-ghost">
								Explore islands →
							</a>
						</div>
					</div>
				</div>
			</section>
		</>
	),

	onpost: null,
	onrequest: null,
} satisfies Page;
