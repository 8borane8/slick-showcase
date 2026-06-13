import { toHtml } from "./shiki.ts";

const SAMPLES = {
	server: {
		lang: "typescript",
		code: `import { Slick } from "@webtools/slick-server";

const app = new Slick(import.meta.dirname!, {
  port: 5000,
  client: true, // @webtools/slick-client
  sharedLibs: ["chart.js"],
});

await app.start();`,
	},
	projectLayout: {
		lang: "text",
		code: `my-app/
├── server.ts                 # entry point
├── deno.json                 # imports + jsx config
│
├── pages/                    # routes (required)
│   ├── index.tsx             # url: "/"
│   └── about.tsx             # url: "/about"
│
├── templates/                # shells (required)
│   └── app.tsx               # layout with #app
│
├── islands/                  # interactive (optional)
│   ├── Counter.tsx
│   └── Toggle.tsx
│
└── static/                   # public assets (required)
    ├── favicon.svg
    ├── styles/
    │   ├── reset.css
    │   └── app.css
    └── scripts/
        └── app.ts`,
	},
	templateApp: {
		lang: "tsx",
		code: `export default {
  name: "app",
  favicon: "/favicon.svg",
  styles: ["/styles/reset.css", "/styles/app.css"],
  scripts: ["/scripts/app.ts"],
  body: (
    <>
      <header>…</header>
      <main id="app">{/* page injected */}</main>
    </>
  ),
} satisfies Template;`,
	},
	pageIndex: {
		lang: "tsx",
		code: `export default {
  url: "/",
  template: "app",
  title: "Home",
  styles: ["/styles/pages/index.css"],
  body: <h1>Hello, Slick.</h1>,
  scripts: [], head: null,
  onpost: null, onrequest: null,
} satisfies Page;`,
	},
	pagesDemo: {
		lang: "tsx",
		code: `import Counter from "../islands/Counter.tsx";
import Toggle from "../islands/Toggle.tsx";

export default {
  url: "/demo",
  template: "app",
  body: (
    <>
      <Counter start={0} codeHtml={src.Counter} />
      <Toggle codeHtml={src.Toggle} />
    </>
  ),
  // …
};`,
	},
	ssrFetch: {
		lang: "tsx",
		code: `import type { Page } from "@webtools/slick-server";

export default {
  url: "/weather",
  template: "app",
  title: "Weather",

  body: async () => {
    const res = await fetch("https://api.example.com/weather/paris");
    const weather = await res.json();

    return (
      <article>
        <h1>{weather.city}</h1>
        <p class="temp">{weather.temp}°C</p>
        <p>{weather.condition}</p>
        <p>Humidity: {weather.humidity}%</p>
      </article>
    );
  },

  styles: [],
  scripts: [],
  head: null,
  onpost: null,
  onrequest: null,
} satisfies Page;`,
	},
} as const;

export type CodeSampleKey = keyof typeof SAMPLES;

let html: Partial<Record<CodeSampleKey, string>> = {};

export function initCodeSamples(): void {
	const next: Partial<Record<CodeSampleKey, string>> = {};
	for (const key of Object.keys(SAMPLES) as CodeSampleKey[]) {
		const { code, lang } = SAMPLES[key];
		next[key] = toHtml(code, lang);
	}
	html = next;
}

export function getCodeSample(key: CodeSampleKey): string {
	return html[key] ?? "";
}
