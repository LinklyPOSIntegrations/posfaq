import { a as createComponent, b as createAstro, r as renderComponent, d as renderTemplate } from '../chunks/astro/server_wPAoJWlo.mjs';
import { $ as $$Common, p as paths } from '../chunks/common_Cr51UzEU.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const prerender = true;
async function getStaticPaths() {
  return paths;
}
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "CommonPage", $$Common, { "route": Astro2.props })}`;
}, "C:/Users/Lakshan.Perera/dev/faq/node_modules/.pnpm/@astrojs+starlight@0.31.1_a_1bd22ea96378332f8e7b1d7b6138ee31/node_modules/@astrojs/starlight/routes/static/index.astro", void 0);

const $$file = "C:/Users/Lakshan.Perera/dev/faq/node_modules/.pnpm/@astrojs+starlight@0.31.1_a_1bd22ea96378332f8e7b1d7b6138ee31/node_modules/@astrojs/starlight/routes/static/index.astro";
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
