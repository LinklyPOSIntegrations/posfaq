import { c as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_wPAoJWlo.mjs';

const frontmatter = {
  "title": "Welcome to the POS FAQ",
  "description": "Get started building your docs site with Starlight.",
  "template": "splash",
  "hero": {
    "tagline": "Lets begin!",
    "image": {
      "file": "../../assets/linkly.jpg"
    },
    "actions": [{
      "text": "FAQ",
      "link": "/guides/gettingstarted/",
      "icon": "right-arrow"
    }, {
      "text": "Quick Links",
      "link": "/guides/downloads/",
      "icon": "right-arrow"
    }]
  }
};
function getHeadings() {
  return [];
}
function _createMdxContent(props) {
  return createVNode(Fragment, {});
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = props.components || ({});
  return MDXLayout ? createVNode(MDXLayout, {
    ...props,
    children: createVNode(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent();
}

const url = "src/content/docs/index.mdx";
const file = "C:/Users/Lakshan.Perera/dev/faq/src/content/docs/index.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "C:/Users/Lakshan.Perera/dev/faq/src/content/docs/index.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
