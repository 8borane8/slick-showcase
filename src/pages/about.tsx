import type { Page } from "@webtools/slick-server";

export default {
	url: "/about",
	template: "app",
	title: "About · Slick",

	styles: ["/styles/pages/about.css"],
	scripts: [],

	head: (
		<>
			<meta
				name="description"
				content="Why Slick was built, the vision behind it, and the principles that guide the project."
			/>
			<meta property="og:title" content="About Slick" />
		</>
	),

	body: (
		<>
			<section class="page-hero page-hero--about">
				<div class="container">
					<span class="section-label">About</span>
					<h1>Built because the stack got in the way.</h1>
					<p>
						Slick started as a practical answer to a recurring problem: I wanted modern SSR, targeted
						interactivity, and fast delivery, without signing up for an entire toolchain every time I spun
						up a project.
					</p>
				</div>
			</section>

			<section class="section section--end about-content">
				<div class="container">
					<div class="grid-2 grid-2--about about-grid">
						<div class="about-block">
							<h2>The frustration</h2>
							<p>
								Web tooling has never been more capable, but also never heavier. Bundlers, plugins,
								config files copied from repo to repo, frameworks that demand you learn their entire
								worldview before you write a route. The overhead adds up fast.
							</p>
							<p>
								For apps that need server rendering, good SEO, and interactivity in specific places, the
								usual trade-off is brutal: either absorb the weight of a full meta-framework, or give up
								on a polished developer experience.
							</p>
							<p>
								Deno changed the equation. Native TypeScript, built-in tooling, a secure runtime, a
								modern module system. The platform was ready for something leaner.
							</p>
						</div>

						<div class="about-block">
							<h2>The goal</h2>
							<p>
								Slick is my attempt to answer a simple question:{" "}
								<em>what if a web framework felt like writing a server.ts file?</em>
							</p>
							<p>
								No mandatory build step. No config duplication. No opaque runtime magic. Just clear
								folder conventions, Web Standards underneath, and Preact for rendering when HTML needs
								to be generated on the server.
							</p>
							<p>
								@webtools/slick-server handles SSR, assets, and routing. @webtools/slick-client adds
								optional SPA navigation. Islands handle interactivity where it matters. esbuild handles
								assets without you thinking about it.
							</p>
						</div>
					</div>

					<div class="about-block">
						<h2>Principles</h2>
						<div class="values-list">
							<div class="card value-item">
								<span class="value-num">01</span>
								<div>
									<h3>Web Standards first</h3>
									<p>
										Request, Response, fetch, ES modules. Slick builds on platform APIs via
										@webtools/expressapi instead of inventing parallel abstractions.
									</p>
								</div>
							</div>
							<div class="card value-item">
								<span class="value-num">02</span>
								<div>
									<h3>JavaScript earns its bytes</h3>
									<p>
										Pages ship as HTML. Client bundles are scoped to islands. Performance and
										accessibility are defaults, not add-ons.
									</p>
								</div>
							</div>
							<div class="card value-item">
								<span class="value-num">03</span>
								<div>
									<h3>Conventions over configuration</h3>
									<p>
										pages/, templates/, static/. That is the contract. Your folder structure is the
										config file.
									</p>
								</div>
							</div>
							<div class="card value-item">
								<span class="value-num">04</span>
								<div>
									<h3>Progressive enhancement</h3>
									<p>
										SPA navigation is opt-in via slick-client. Forms work without JS. Interactivity
										layers on top; it never replaces the baseline.
									</p>
								</div>
							</div>
							<div class="card value-item">
								<span class="value-num">05</span>
								<div>
									<h3>Library, not platform</h3>
									<p>
										Bring your npm packages into islands, deploy wherever Deno runs, and keep
										ownership of your stack. Slick should get out of your way.
									</p>
								</div>
							</div>
						</div>
					</div>

					<div class="grid-2 grid-2--about about-grid">
						<div class="about-block">
							<h2>This site</h2>
							<p>
								You're reading a Slick app right now. Every page is server-rendered, navigation uses
								slick-client in SPA mode, and the interactive blocks are hydrated islands.
							</p>
							<p>
								No separate build pipeline. CSS and TypeScript in static/ compile on demand. Browse the
								{" "}
								<a href="/islands" style="color: var(--accent-light);">islands page</a>{" "}
								for live examples.
							</p>
						</div>

						<div class="about-block">
							<h2>Where it's headed</h2>
							<div class="timeline">
								<div class="timeline-item">
									<h3>Now · v0.6</h3>
									<p>
										SSR, islands, on-the-fly asset compilation, SPA client, shared vendor bundles,
										dynamic rendering, and per-page middleware.
									</p>
								</div>
								<div class="timeline-item">
									<h3>Next</h3>
									<p>
										Sharper DX, richer docs, performance tuning, and feedback from anyone building
										on Deno.
									</p>
								</div>
								<div class="timeline-item">
									<h3>Long term</h3>
									<p>
										Stay small and predictable. Slick won't try to be everything. It aims to do one
										job well: serve modern web apps with minimal friction.
									</p>
								</div>
							</div>
						</div>
					</div>

					<div class="quote-block">
						<blockquote>
							"A good framework disappears into the standards it stands on. You shouldn't have to learn
							Slick. Just Deno, HTML, and the parts you choose to hydrate."
						</blockquote>
						<cite>project ethos</cite>
					</div>
				</div>
			</section>
		</>
	),

	onpost: null,
	onrequest: null,
} satisfies Page;
