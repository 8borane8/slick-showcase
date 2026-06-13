import { initApp } from "./bootstrap.ts";
import { Slick } from "@webtools/slick-server";

const root = import.meta.dirname!;

await initApp(root);

const app = new Slick(root, {
	env: {
		APP_NAME: "Slick",
		APP_VERSION: "0.6.11",
	},
	port: Number(Deno.env.get("PORT") ?? 5000),
	client: true,
	noCache: Deno.args.includes("--no-cache"),
});

await app.start();
