import { a as createAstro, b as createComponent, r as renderTemplate, d as renderComponent } from '../chunks/astro/server_BhqBo4YN.mjs';
import { $ as $$Common, p as paths } from '../chunks/common_CINXoX2i.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("https://linklyposintegrations.github.io/posfaq/");
const prerender = true;
async function getStaticPaths() {
  return paths;
}
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "CommonPage", $$Common, { "route": Astro2.props })}`;
}, "C:/Users/Lakshan.Perera/dev/faq/node_modules/.pnpm/@astrojs+starlight@0.31.1_a_939efdf0f4785c67f0f6a50b88f22789/node_modules/@astrojs/starlight/routes/static/index.astro", undefined);

const $$file = "C:/Users/Lakshan.Perera/dev/faq/node_modules/.pnpm/@astrojs+starlight@0.31.1_a_939efdf0f4785c67f0f6a50b88f22789/node_modules/@astrojs/starlight/routes/static/index.astro";
const $$url = undefined;

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	getStaticPaths,
	prerender,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
