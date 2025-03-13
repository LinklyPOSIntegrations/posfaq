import { a as createAstro, b as createComponent, r as renderTemplate, d as renderComponent } from '../chunks/astro/server_BhqBo4YN.mjs';
import { s as starlightConfig, B as BuiltInDefaultLocale, g as getEntry, a as getCollectionPathFromRoot, p as project } from '../chunks/translations_CQ4sgs2U.mjs';
import { n as normalizeCollectionEntry, $ as $$Common } from '../chunks/common_Dz_K18Zs.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("https://linklyposintegrations.github.io/pos.faq/");
const prerender = true;
const $$404 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$404;
  const { lang = BuiltInDefaultLocale.lang, dir = BuiltInDefaultLocale.dir } = starlightConfig.defaultLocale || {};
  let locale = starlightConfig.defaultLocale?.locale;
  if (locale === "root") locale = undefined;
  const entryMeta = { dir, lang, locale };
  const fallbackEntry = {
    slug: "404",
    id: "404",
    body: "",
    collection: "docs",
    data: {
      title: "404",
      template: "splash",
      editUrl: false,
      head: [],
      hero: { tagline: Astro2.locals.t("404.text"), actions: [] },
      pagefind: false,
      sidebar: { hidden: false, attrs: {} },
      draft: false
    },
    filePath: `${getCollectionPathFromRoot("docs", project)}/404.md`
  };
  const userEntry = await getEntry("docs", "404");
  const entry = userEntry ? normalizeCollectionEntry(userEntry) : fallbackEntry;
  const route = { ...entryMeta, entryMeta, entry, id: entry.id, slug: entry.slug };
  return renderTemplate`${renderComponent($$result, "CommonPage", $$Common, { "route": route })}`;
}, "C:/Users/Lakshan.Perera/dev/faq/node_modules/.pnpm/@astrojs+starlight@0.31.1_a_939efdf0f4785c67f0f6a50b88f22789/node_modules/@astrojs/starlight/routes/static/404.astro", undefined);

const $$file = "C:/Users/Lakshan.Perera/dev/faq/node_modules/.pnpm/@astrojs+starlight@0.31.1_a_939efdf0f4785c67f0f6a50b88f22789/node_modules/@astrojs/starlight/routes/static/404.astro";
const $$url = undefined;

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$404,
	file: $$file,
	prerender,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
