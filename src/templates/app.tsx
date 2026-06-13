import type { Template } from "@webtools/slick-server";

export default {
	name: "app",
	favicon: "/favicon.svg",

	styles: ["/styles/reset.css", "/styles/app.css", "/styles/islands.css"],
	scripts: ["/scripts/app.ts"],

	head: (
		<>
			<meta
				name="description"
				content="Slick is a small, ultrafast Deno web framework built on Web Standards. SSR, islands, zero-config assets."
			/>
			<meta name="theme-color" content="#14b8a6" />
			<link rel="preconnect" href="https://fonts.googleapis.com" />
			<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
			<link
				href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500&family=Sora:wght@400;500;600;700&display=swap"
				rel="stylesheet"
			/>
		</>
	),

	body: (
		<>
			<header class="site-header">
				<div class="header-inner">
					<a href="/" class="logo">
						<img src="/favicon.svg" alt="Slick logo" class="logo-icon" width="28" height="28" />
						Slick
					</a>

					<nav class="site-nav">
						<a href="/" class="nav-home">
							<span class="nav-link-text">Home</span>
						</a>
						<a href="/islands" class="nav-islands">
							<span class="nav-link-text">Islands</span>
						</a>
						<a href="/about" class="nav-about">
							<span class="nav-link-text">About</span>
						</a>
					</nav>

					<div class="header-actions">
						<a
							href="https://github.com/8borane8/webtools-slick-server"
							target="_blank"
							rel="noopener noreferrer"
							class="btn btn-ghost btn-sm"
						>
							GitHub
						</a>
						<a
							href="https://github.com/8borane8/webtools-slick-server#quick-start"
							target="_blank"
							rel="noopener noreferrer"
							class="btn btn-primary btn-sm"
						>
							Get started
						</a>
					</div>
				</div>
			</header>

			<main id="app" />

			<footer class="site-footer">
				<div class="footer-inner">
					<p class="footer-made">Made with ❤️</p>
				</div>
			</footer>
		</>
	),

	onrequest: null,
} satisfies Template;
