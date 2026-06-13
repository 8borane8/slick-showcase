import { Slick } from "@webtools/slick-client";

function setActiveNav() {
	const path = globalThis.location.pathname;
	document.querySelector(".nav-home")?.classList.toggle("active", path === "/");
	document.querySelector(".nav-islands")?.classList.toggle("active", path === "/islands");
	document.querySelector(".nav-about")?.classList.toggle("active", path === "/about");
}

setActiveNav();
Slick.addOnloadListener(setActiveNav);
