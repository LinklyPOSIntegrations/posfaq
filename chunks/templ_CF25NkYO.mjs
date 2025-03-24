import go from './go_CkLx2nJd.mjs';
import javascript from './javascript_uYmK3bS1.mjs';
import css from './css_CNg45hmX.mjs';

const lang = Object.freeze(JSON.parse("{\"displayName\":\"Templ\",\"name\":\"templ\",\"patterns\":[{\"include\":\"#script-template\"},{\"include\":\"#css-template\"},{\"include\":\"#html-template\"},{\"include\":\"source.go\"}],\"repository\":{\"block-element\":{\"begin\":\"(</?)((?i:address|blockquote|dd|div|section|article|aside|header|footer|nav|menu|dl|dt|fieldset|form|frame|frameset|h1|h2|h3|h4|h5|h6|iframe|noframes|object|ol|p|ul|applet|center|dir|hr|pre)(?=\\\\s|\\\\\\\\|>))\",\"beginCaptures\":{\"1\":{\"name\":\"punctuation.definition.tag.begin.html\"},\"2\":{\"name\":\"entity.name.tag.block.any.html\"}},\"end\":\"(>)\",\"endCaptures\":{\"1\":{\"name\":\"punctuation.definition.tag.end.html\"}},\"name\":\"meta.tag.block.any.html\",\"patterns\":[{\"include\":\"#tag-stuff\"}]},\"call-expression\":{\"begin\":\"({\\\\!)\\\\s+\",\"beginCaptures\":{\"0\":{\"name\":\"start.call-expression.templ\"},\"1\":{\"name\":\"punctuation.brace.open\"}},\"end\":\"(})\",\"endCaptures\":{\"0\":{\"name\":\"end.call-expression.templ\"},\"1\":{\"name\":\"punctuation.brace.close\"}},\"name\":\"call-expression.templ\",\"patterns\":[{\"include\":\"source.go\"}]},\"case-expression\":{\"begin\":\"^\\\\s*case .+?:$\",\"captures\":{\"0\":{\"name\":\"case.switch.html-template.templ\",\"patterns\":[{\"include\":\"source.go\"}]}},\"end\":\"(^\\\\s*case .+?:$)|(^\\\\s*default:$)|(\\\\s*$)\",\"patterns\":[{\"include\":\"#template-node\"}]},\"close-element\":{\"begin\":\"(</?)([a-zA-Z0-9:\\\\-]+)\",\"beginCaptures\":{\"1\":{\"name\":\"punctuation.definition.tag.begin.html\"},\"2\":{\"name\":\"entity.name.tag.other.html\"}},\"end\":\"(>)\",\"endCaptures\":{\"1\":{\"name\":\"punctuation.definition.tag.end.html\"}},\"name\":\"meta.tag.other.html\",\"patterns\":[{\"include\":\"#tag-stuff\"}]},\"css-template\":{\"begin\":\"^(css) ([A-z_][A-z_0-9]*\\\\()\",\"beginCaptures\":{\"1\":{\"name\":\"keyword.control.go\"},\"2\":{\"patterns\":[{\"include\":\"source.go\"}]}},\"end\":\"(?<=^}$)\",\"name\":\"css-template.templ\",\"patterns\":[{\"begin\":\"(?<=\\\\()\",\"end\":\"(\\\\))\",\"endCaptures\":{\"1\":{\"name\":\"punctuation.definition.end.bracket.round.go\"}},\"name\":\"params.css-template.templ\",\"patterns\":[{\"include\":\"source.go\"}]},{\"begin\":\"(?<=\\\\)) ({)$\",\"beginCaptures\":{\"1\":{\"name\":\"punctuation.definition.begin.bracket.curly.go\"}},\"end\":\"^(})$\",\"endCaptures\":{\"1\":{\"name\":\"punctuation.definition.end.bracket.curly.go\"}},\"name\":\"block.css-template.templ\",\"patterns\":[{\"begin\":\"\\\\s*((?:-(?:webkit|moz|o|ms|khtml)-)?(?:zoom|z-index|y|x|writing-mode|wrap|wrap-through|wrap-inside|wrap-flow|wrap-before|wrap-after|word-wrap|word-spacing|word-break|word|will-change|width|widows|white-space-collapse|white-space|white|weight|volume|voice-volume|voice-stress|voice-rate|voice-pitch-range|voice-pitch|voice-family|voice-duration|voice-balance|voice|visibility|vertical-align|vector-effect|variant|user-zoom|user-select|up|unicode-(bidi|range)|trim|translate|transition-timing-function|transition-property|transition-duration|transition-delay|transition|transform-style|transform-origin|transform-box|transform|touch-action|top-width|top-style|top-right-radius|top-left-radius|top-color|top|timing-function|text-wrap|text-underline-position|text-transform|text-spacing|text-space-trim|text-space-collapse|text-size-adjust|text-shadow|text-replace|text-rendering|text-overflow|text-outline|text-orientation|text-justify|text-indent|text-height|text-emphasis-style|text-emphasis-skip|text-emphasis-position|text-emphasis-color|text-emphasis|text-decoration-style|text-decoration-stroke|text-decoration-skip|text-decoration-line|text-decoration-fill|text-decoration-color|text-decoration|text-combine-upright|text-anchor|text-align-last|text-align-all|text-align|text|target-position|target-new|target-name|target|table-layout|tab-size|system|symbols|suffix|style-type|style-position|style-image|style|stroke-width|stroke-opacity|stroke-miterlimit|stroke-linejoin|stroke-linecap|stroke-dashoffset|stroke-dasharray|stroke|string-set|stretch|stress|stop-opacity|stop-color|stacking-strategy|stacking-shift|stacking-ruby|stacking|src|speed|speech-rate|speech|speak-punctuation|speak-numeral|speak-header|speak-as|speak|span|spacing|space-collapse|space|solid-opacity|solid-color|sizing|size-adjust|size|shape-rendering|shape-padding|shape-outside|shape-margin|shape-inside|shape-image-threshold|shadow|scroll-snap-type|scroll-snap-points-y|scroll-snap-points-x|scroll-snap-destination|scroll-snap-coordinate|scroll-behavior|scale|ry|rx|respond-to|rule-width|rule-style|rule-color|rule|ruby-span|ruby-position|ruby-overhang|ruby-merge|ruby-align|ruby|rows|rotation-point|rotation|rotate|role|right-width|right-style|right-color|right|richness|rest-before|rest-after|rest|resource|resolution|resize|reset|replace|repeat|rendering-intent|region-fragment|rate|range|radius|r|quotes|punctuation-trim|punctuation|property|profile|presentation-level|presentation|prefix|position|pointer-events|point|play-state|play-during|play-count|pitch-range|pitch|phonemes|perspective-origin|perspective|pause-before|pause-after|pause|page-policy|page-break-inside|page-break-before|page-break-after|page|padding-top|padding-right|padding-left|padding-inline-start|padding-inline-end|padding-bottom|padding-block-start|padding-block-end|padding|pad|pack|overhang|overflow-y|overflow-x|overflow-wrap|overflow-style|overflow-inline|overflow-block|overflow|outline-width|outline-style|outline-offset|outline-color|outline|orphans|origin|orientation|orient|ordinal-group|order|opacity|offset-start|offset-inline-start|offset-inline-end|offset-end|offset-block-start|offset-block-end|offset-before|offset-after|offset|object-position|object-fit|numeral|new|negative|nav-up|nav-right|nav-left|nav-index|nav-down|nav|name|move-to|motion-rotation|motion-path|motion-offset|motion|model|mix-blend-mode|min-zoom|min-width|min-inline-size|min-height|min-block-size|min|max-zoom|max-width|max-lines|max-inline-size|max-height|max-block-size|max|mask-type|mask-size|mask-repeat|mask-position|mask-origin|mask-mode|mask-image|mask-composite|mask-clip|mask-border-width|mask-border-source|mask-border-slice|mask-border-repeat|mask-border-outset|mask-border-mode|mask-border|mask|marquee-style|marquee-speed|marquee-play-count|marquee-loop|marquee-direction|marquee|marks|marker-start|marker-side|marker-mid|marker-end|marker|margin-top|margin-right|margin-left|margin-inline-start|margin-inline-end|margin-bottom|margin-block-start|margin-block-end|margin|list-style-type|list-style-position|list-style-image|list-style|list|lines|line-stacking-strategy|line-stacking-shift|line-stacking-ruby|line-stacking|line-snap|line-height|line-grid|line-break|line|lighting-color|level|letter-spacing|length|left-width|left-style|left-color|left|label|kerning|justify-self|justify-items|justify-content|justify|iteration-count|isolation|inline-size|inline-box-align|initial-value|initial-size|initial-letter-wrap|initial-letter-align|initial-letter|initial-before-align|initial-before-adjust|initial-after-align|initial-after-adjust|index|indent|increment|image-rendering|image-resolution|image-orientation|image|icon|hyphens|hyphenate-limit-zone|hyphenate-limit-lines|hyphenate-limit-last|hyphenate-limit-chars|hyphenate-character|hyphenate|height|header|hanging-punctuation|grid-template-rows|grid-template-columns|grid-template-areas|grid-template|grid-row-start|grid-row-gap|grid-row-end|grid-row|grid-rows|grid-gap|grid-column-start|grid-column-gap|grid-column-end|grid-column|grid-columns|grid-auto-rows|grid-auto-flow|grid-auto-columns|grid-area|grid|glyph-orientation-vertical|glyph-orientation-horizontal|gap|font-weight|font-variant-position|font-variant-numeric|font-variant-ligatures|font-variant-east-asian|font-variant-caps|font-variant-alternates|font-variant|font-synthesis|font-style|font-stretch|font-size-adjust|font-size|font-language-override|font-kerning|font-feature-settings|font-family|font|flow-into|flow-from|flow|flood-opacity|flood-color|float-offset|float|flex-wrap|flex-shrink|flex-grow|flex-group|flex-flow|flex-direction|flex-basis|flex|fit-position|fit|filter|fill-rule|fill-opacity|fill|family|fallback|enable-background|empty-cells|emphasis|elevation|duration|drop-initial-value|drop-initial-size|drop-initial-before-align|drop-initial-before-adjust|drop-initial-after-align|drop-initial-after-adjust|drop|down|dominant-baseline|display-role|display-model|display|direction|delay|decoration-break|decoration|cy|cx|cursor|cue-before|cue-after|cue|crop|counter-set|counter-reset|counter-increment|counter|count|corner-shape|corners|continue|content|contain|columns|column-width|column-span|column-rule-width|column-rule-style|column-rule-color|column-rule|column-gap|column-fill|column-count|column-break-before|column-break-after|column|color-rendering|color-profile|color-interpolation-filters|color-interpolation|color-adjust|color|collapse|clip-rule|clip-path|clip|clear|character|caret-shape|caret-color|caret|caption-side|buffered-rendering|break-inside|break-before|break-after|break|box-suppress|box-snap|box-sizing|box-shadow|box-pack|box-orient|box-ordinal-group|box-lines|box-flex-group|box-flex|box-direction|box-decoration-break|box-align|box|bottom-width|bottom-style|bottom-right-radius|bottom-left-radius|bottom-color|bottom|border-width|border-top-width|border-top-style|border-top-right-radius|border-top-left-radius|border-top-color|border-top|border-style|border-spacing|border-right-width|border-right-style|border-right-color|border-right|border-radius|border-limit|border-length|border-left-width|border-left-style|border-left-color|border-left|border-inline-start-width|border-inline-start-style|border-inline-start-color|border-inline-start|border-inline-end-width|border-inline-end-style|border-inline-end-color|border-inline-end|border-image-width|border-image-transform|border-image-source|border-image-slice|border-image-repeat|border-image-outset|border-image|border-color|border-collapse|border-clip-top|border-clip-right|border-clip-left|border-clip-bottom|border-clip|border-bottom-width|border-bottom-style|border-bottom-right-radius|border-bottom-left-radius|border-bottom-color|border-bottom|border-block-start-width|border-block-start-style|border-block-start-color|border-block-start|border-block-end-width|border-block-end-style|border-block-end-color|border-block-end|border|bookmark-target|bookmark-level|bookmark-label|bookmark|block-size|binding|bidi|before|baseline-shift|baseline|balance|background-size|background-repeat|background-position-y|background-position-x|background-position-inline|background-position-block|background-position|background-origin|background-image|background-color|background-clip|background-blend-mode|background-attachment|background|backface-visibility|backdrop-filter|azimuth|attachment|appearance|animation-timing-function|animation-play-state|animation-name|animation-iteration-count|animation-fill-mode|animation-duration|animation-direction|animation-delay|animation|alt|all|alignment-baseline|alignment-adjust|alignment|align-last|align-self|align-items|align-content|align|after|adjust|additive-symbols)):\\\\s+\",\"beginCaptures\":{\"1\":{\"name\":\"support.type.property-name.css\"}},\"end\":\"(?<=;$)\",\"name\":\"property.css-template.templ\",\"patterns\":[{\"begin\":\"({)\",\"beginCaptures\":{\"1\":{\"name\":\"punctuation.definition.begin.bracket.curly.go\"}},\"end\":\"(})(;)$\",\"endCaptures\":{\"1\":{\"name\":\"punctuation.definition.end.bracket.curly.go\"},\"2\":{\"name\":\"punctuation.terminator.rule.css\"}},\"name\":\"expression.property.css-template.templ\",\"patterns\":[{\"include\":\"source.go\"}]},{\"captures\":{\"1\":{\"name\":\"support.type.property-value.css\"},\"2\":{\"name\":\"punctuation.terminator.rule.css\"}},\"match\":\"(.*)(;)$\",\"name\":\"constant.property.css-template.templ\"}]}]}]},\"default-expression\":{\"begin\":\"^\\\\s*default:$\",\"captures\":{\"0\":{\"name\":\"default.switch.html-template.templ\",\"patterns\":[{\"include\":\"source.go\"}]}},\"end\":\"(^\\\\s*case .+?:$)|(^\\\\s*default:$)|(\\\\s*$)\",\"patterns\":[{\"include\":\"#template-node\"}]},\"element\":{\"begin\":\"(<)([a-zA-Z0-9:\\\\-]++)(?=[^>]*></\\\\2>)\",\"beginCaptures\":{\"1\":{\"name\":\"punctuation.definition.tag.html\"},\"2\":{\"name\":\"entity.name.tag.html\"}},\"end\":\"(>(<)/)(\\\\2)(>)\",\"endCaptures\":{\"1\":{\"name\":\"punctuation.definition.tag.html\"},\"2\":{\"name\":\"meta.scope.between-tag-pair.html\"},\"3\":{\"name\":\"entity.name.tag.html\"},\"4\":{\"name\":\"punctuation.definition.tag.html\"}},\"name\":\"meta.tag.any.html\",\"patterns\":[{\"include\":\"#tag-stuff\"}]},\"else-expression\":{\"begin\":\"\\\\s+(else)\\\\s+({)\\\\s*$\",\"beginCaptures\":{\"1\":{\"name\":\"keyword.control.go\"},\"2\":{\"name\":\"punctuation.definition.begin.bracket.curly.go\"}},\"end\":\"^\\\\s*(})$\",\"endCaptures\":{\"1\":{\"name\":\"punctuation.definition.end.bracket.curly.go\"}},\"name\":\"else.html-template.templ\",\"patterns\":[{\"include\":\"#template-node\"}]},\"else-if-expression\":{\"begin\":\"\\\\s(else if)\\\\s\",\"beginCaptures\":{\"1\":{\"name\":\"keyword.control.go\"}},\"end\":\"(?<=})\",\"name\":\"else-if.html-template.templ\",\"patterns\":[{\"begin\":\"(?<=if\\\\s)\",\"end\":\"({)$\",\"endCaptures\":{\"1\":{\"name\":\"punctuation.definition.begin.bracket.curly.go\"}},\"name\":\"expression.else-if.html-template.templ\",\"patterns\":[{\"include\":\"source.go\"}]},{\"begin\":\"(?<={)$\",\"end\":\"^\\\\s*(})\",\"endCaptures\":{\"1\":{\"name\":\"punctuation.definition.end.bracket.curly.go\"}},\"name\":\"block.else-if.html-template.templ\",\"patterns\":[{\"include\":\"#template-node\"}]}]},\"entities\":{\"patterns\":[{\"captures\":{\"1\":{\"name\":\"punctuation.definition.entity.html\"},\"3\":{\"name\":\"punctuation.definition.entity.html\"}},\"match\":\"(&)([a-zA-Z0-9]+|#[0-9]+|#[xX][0-9a-fA-F]+)(;)\",\"name\":\"constant.character.entity.html\"},{\"match\":\"&\",\"name\":\"invalid.illegal.bad-ampersand.html\"}]},\"for-expression\":{\"begin\":\"^\\\\s*for .+{\",\"captures\":{\"0\":{\"name\":\"meta.embedded.block.go\",\"patterns\":[{\"include\":\"source.go\"}]}},\"end\":\"\\\\s*}\\\\s*\\n\",\"name\":\"for.html-template.templ\",\"patterns\":[{\"include\":\"#template-node\"}]},\"go-comment-block\":{\"begin\":\"(\\\\/\\\\*)\",\"beginCaptures\":{\"1\":{\"name\":\"punctuation.definition.comment.go\"}},\"end\":\"(\\\\*\\\\/)\",\"endCaptures\":{\"1\":{\"name\":\"punctuation.definition.comment.go\"}},\"name\":\"comment.block.go\"},\"go-comment-double-slash\":{\"begin\":\"(\\\\/\\\\/)\",\"beginCaptures\":{\"1\":{\"name\":\"punctuation.definition.comment.go\"}},\"end\":\"(?:\\\\n|$)\",\"name\":\"comment.line.double-slash.go\"},\"html-comment\":{\"begin\":\"<!--\",\"beginCaptures\":{\"0\":{\"name\":\"punctuation.definition.comment.html\"}},\"end\":\"-->\",\"endCaptures\":{\"0\":{\"name\":\"punctuation.definition.comment.html\"}},\"name\":\"comment.block.html\"},\"html-template\":{\"begin\":\"^(templ) ((?:\\\\([A-z_][A-z_0-9]* \\\\*?[A-z_][A-z_0-9]*\\\\) )?[A-z_][A-z_0-9]*(\\\\(|\\\\[))\",\"beginCaptures\":{\"1\":{\"name\":\"keyword.control.go\"},\"2\":{\"patterns\":[{\"include\":\"source.go\"}]}},\"end\":\"(?<=^}$)\",\"name\":\"html-template.templ\",\"patterns\":[{\"begin\":\"(?<=\\\\()\",\"end\":\"(\\\\))\",\"endCaptures\":{\"1\":{\"name\":\"punctuation.definition.end.bracket.round.go\"}},\"name\":\"params.html-template.templ\",\"patterns\":[{\"include\":\"source.go\"}]},{\"begin\":\"(?<=\\\\[)\",\"end\":\"(\\\\])\",\"endCaptures\":{\"1\":{\"name\":\"punctuation.definition.end.bracket.square.go\"}},\"name\":\"type-params.html-template.templ\",\"patterns\":[{\"include\":\"source.go\"}]},{\"begin\":\"(?<=\\\\)) ({)$\",\"beginCaptures\":{\"1\":{\"name\":\"punctuation.definition.begin.bracket.curly.go\"}},\"end\":\"^(})$\",\"endCaptures\":{\"1\":{\"name\":\"punctuation.definition.end.bracket.curly.go\"}},\"name\":\"block.html-template.templ\",\"patterns\":[{\"include\":\"#template-node\"}]}]},\"if-expression\":{\"begin\":\"^\\\\s*(if)\\\\s\",\"beginCaptures\":{\"1\":{\"name\":\"keyword.control.go\"}},\"end\":\"(?<=})\",\"name\":\"if.html-template.templ\",\"patterns\":[{\"begin\":\"(?<=if\\\\s)\",\"end\":\"({)$\",\"endCaptures\":{\"1\":{\"name\":\"punctuation.definition.begin.bracket.curly.go\"}},\"name\":\"expression.if.html-template.templ\",\"patterns\":[{\"include\":\"source.go\"}]},{\"begin\":\"(?<={)$\",\"end\":\"^\\\\s*(})\",\"endCaptures\":{\"1\":{\"name\":\"punctuation.definition.end.bracket.curly.go\"}},\"name\":\"block.if.html-template.templ\",\"patterns\":[{\"include\":\"#template-node\"}]}]},\"import-expression\":{\"patterns\":[{\"begin\":\"(@)((?:[A-z_][A-z_0-9]*\\\\.)?[A-z_][A-z_0-9]*(?:\\\\(|{|$))\",\"beginCaptures\":{\"1\":{\"name\":\"keyword.control.go\"},\"2\":{\"patterns\":[{\"include\":\"source.go\"}]}},\"end\":\"(?<=\\\\))$|(?<=})$|(?<=$)\",\"name\":\"import-expression.templ\",\"patterns\":[{\"begin\":\"(?<=[A-z_0-9]{)\",\"end\":\"\\\\s*(})(\\\\.[A-z_][A-z_0-9]*\\\\()\",\"endCaptures\":{\"1\":{\"name\":\"punctuation.definition.end.bracket.curly.go\"},\"2\":{\"patterns\":[{\"include\":\"source.go\"}]}},\"name\":\"struct-method.import-expression.templ\",\"patterns\":[{\"include\":\"source.go\"}]},{\"begin\":\"(?<=\\\\()\",\"end\":\"(\\\\))\",\"endCaptures\":{\"1\":{\"name\":\"punctuation.definition.end.bracket.round.go\"}},\"name\":\"params.import-expression.templ\",\"patterns\":[{\"include\":\"source.go\"}]},{\"begin\":\"(?<=\\\\))\\\\s({)$\",\"beginCaptures\":{\"1\":{\"name\":\"punctuation.brace.open\"}},\"end\":\"^\\\\s*(})$\",\"endCaptures\":{\"1\":{\"name\":\"punctuation.brace.close\"}},\"name\":\"children.import-expression.templ\",\"patterns\":[{\"include\":\"#template-node\"}]}]}]},\"inline-element\":{\"begin\":\"(</?)((?i:a|abbr|acronym|area|b|base|basefont|bdo|big|br|button|caption|cite|code|col|colgroup|del|dfn|em|font|head|html|i|img|input|ins|isindex|kbd|label|legend|li|link|map|meta|noscript|optgroup|option|param|q|s|samp|script|select|small|span|strike|strong|style|sub|sup|table|tbody|td|textarea|tfoot|th|thead|title|tr|tt|u|var)(?=\\\\s|\\\\\\\\|>))\",\"beginCaptures\":{\"1\":{\"name\":\"punctuation.definition.tag.begin.html\"},\"2\":{\"name\":\"entity.name.tag.inline.any.html\"}},\"end\":\"((?: ?/)?>)\",\"endCaptures\":{\"1\":{\"name\":\"punctuation.definition.tag.end.html\"}},\"name\":\"meta.tag.inline.any.html\",\"patterns\":[{\"include\":\"#tag-stuff\"}]},\"raw-go\":{\"begin\":\"{{\",\"beginCaptures\":{\"0\":{\"name\":\"start.raw-go.templ\"},\"1\":{\"name\":\"punctuation.brace.open\"}},\"end\":\"}}\",\"endCaptures\":{\"0\":{\"name\":\"end.raw-go.templ\"},\"1\":{\"name\":\"punctuation.brace.open\"}},\"name\":\"raw-go.templ\",\"patterns\":[{\"include\":\"source.go\"}]},\"script-element\":{\"begin\":\"(<)(script)([^>]*)(>)\",\"beginCaptures\":{\"1\":{\"name\":\"punctuation.definition.tag.html\"},\"2\":{\"name\":\"entity.name.tag.html\"},\"3\":{\"patterns\":[{\"include\":\"#tag-stuff\"}]},\"4\":{\"name\":\"punctuation.definition.tag.html\"}},\"end\":\"</script>\",\"endCaptures\":{\"0\":{\"patterns\":[{\"include\":\"#close-element\"}]}},\"name\":\"meta.tag.script.html\",\"patterns\":[{\"include\":\"source.js\"}]},\"script-template\":{\"begin\":\"^(script) ([A-z_][A-z_0-9]*\\\\()\",\"beginCaptures\":{\"1\":{\"name\":\"keyword.control.go\"},\"2\":{\"patterns\":[{\"include\":\"source.go\"}]}},\"end\":\"(?<=^}$)\",\"name\":\"script-template.templ\",\"patterns\":[{\"begin\":\"(?<=\\\\()\",\"end\":\"(\\\\))\",\"endCaptures\":{\"1\":{\"name\":\"punctuation.definition.end.bracket.round.go\"}},\"name\":\"params.script-template.templ\",\"patterns\":[{\"include\":\"source.go\"}]},{\"begin\":\"(?<=\\\\)) ({)$\",\"beginCaptures\":{\"1\":{\"name\":\"punctuation.definition.begin.bracket.curly.go\"}},\"end\":\"^(})$\",\"endCaptures\":{\"1\":{\"name\":\"punctuation.definition.end.bracket.curly.go\"}},\"name\":\"block.script-template.templ\",\"patterns\":[{\"include\":\"source.js\"}]}]},\"sgml\":{\"begin\":\"<!\",\"captures\":{\"0\":{\"name\":\"punctuation.definition.tag.html\"}},\"end\":\">\",\"name\":\"meta.tag.sgml.html\",\"patterns\":[{\"begin\":\"(?i:DOCTYPE)\",\"captures\":{\"1\":{\"name\":\"entity.name.tag.doctype.html\"}},\"end\":\"(?=>)\",\"name\":\"meta.tag.sgml.doctype.html\",\"patterns\":[{\"match\":\"\\\"[^\\\">]*\\\"\",\"name\":\"string.quoted.double.doctype.identifiers-and-DTDs.html\"}]},{\"begin\":\"\\\\[CDATA\\\\[\",\"end\":\"]](?=>)\",\"name\":\"constant.other.inline-data.html\"},{\"match\":\"(\\\\s*)(?!--|>)\\\\S(\\\\s*)\",\"name\":\"invalid.illegal.bad-comments-or-CDATA.html\"}]},\"string-double-quoted\":{\"begin\":\"\\\"\",\"beginCaptures\":{\"0\":{\"name\":\"punctuation.definition.string.begin.html\"}},\"end\":\"\\\"\",\"endCaptures\":{\"0\":{\"name\":\"punctuation.definition.string.end.html\"}},\"name\":\"string.quoted.double.html\",\"patterns\":[{\"include\":\"#entities\"}]},\"string-expression\":{\"begin\":\"{\\\\s+\",\"beginCaptures\":{\"0\":{\"name\":\"start.string-expression.templ\"}},\"end\":\"}\",\"endCaptures\":{\"0\":{\"name\":\"end.string-expression.templ\"}},\"name\":\"expression.html-template.templ\",\"patterns\":[{\"include\":\"source.go\"}]},\"style-element\":{\"begin\":\"(<)(style)([^>]*)(>)\",\"beginCaptures\":{\"1\":{\"name\":\"punctuation.definition.tag.html\"},\"2\":{\"name\":\"entity.name.tag.html\"},\"3\":{\"patterns\":[{\"include\":\"#tag-stuff\"}]},\"4\":{\"name\":\"punctuation.definition.tag.html\"}},\"end\":\"</style>\",\"endCaptures\":{\"0\":{\"patterns\":[{\"include\":\"#close-element\"}]}},\"name\":\"meta.tag.style.html\",\"patterns\":[{\"include\":\"source.css\"}]},\"switch-expression\":{\"begin\":\"^\\\\s*switch .+?{$\",\"captures\":{\"0\":{\"name\":\"meta.embedded.block.go\",\"patterns\":[{\"include\":\"source.go\"}]}},\"end\":\"^\\\\s*}$\",\"name\":\"switch.html-template.templ\",\"patterns\":[{\"include\":\"#template-node\"},{\"include\":\"#case-expression\"},{\"include\":\"#default-expression\"}]},\"tag-else-attribute\":{\"begin\":\"\\\\s(else)\\\\s({)$\",\"beginCaptures\":{\"1\":{\"name\":\"keyword.control.go\"},\"2\":{\"name\":\"punctuation.brace.open\"}},\"end\":\"^\\\\s*(})$\",\"endCaptures\":{\"1\":{\"name\":\"punctuation.brace.close\"}},\"name\":\"else.attribute.html\",\"patterns\":[{\"include\":\"#tag-stuff\"}]},\"tag-else-if-attribute\":{\"begin\":\"\\\\s(else if)\\\\s\",\"beginCaptures\":{\"1\":{\"name\":\"keyword.control.go\"}},\"end\":\"(?<=})\",\"name\":\"else-if.attribute.html\",\"patterns\":[{\"begin\":\"(?<=if\\\\s)\",\"end\":\"({)$\",\"endCaptures\":{\"1\":{\"name\":\"punctuation.brace.open\"}},\"name\":\"expression.else-if.attribute.html\",\"patterns\":[{\"include\":\"source.go\"}]},{\"begin\":\"(?<={)$\",\"end\":\"^\\\\s*(})\",\"endCaptures\":{\"1\":{\"name\":\"punctuation.brace.close\"}},\"name\":\"block.else-if.attribute.html\",\"patterns\":[{\"include\":\"#tag-stuff\"}]}]},\"tag-generic-attribute\":{\"match\":\"(?<=[^=])\\\\b([a-zA-Z0-9:-]+)\",\"name\":\"entity.other.attribute-name.html\"},\"tag-id-attribute\":{\"begin\":\"\\\\b(id)\\\\b\\\\s*(=)\",\"captures\":{\"1\":{\"name\":\"entity.other.attribute-name.id.html\"},\"2\":{\"name\":\"punctuation.separator.key-value.html\"}},\"end\":\"(?!\\\\G)(?<='|\\\"|[^\\\\s<>/])\",\"name\":\"meta.attribute-with-value.id.html\",\"patterns\":[{\"begin\":\"\\\"\",\"beginCaptures\":{\"0\":{\"name\":\"punctuation.definition.string.begin.html\"}},\"contentName\":\"meta.toc-list.id.html\",\"end\":\"\\\"\",\"endCaptures\":{\"0\":{\"name\":\"punctuation.definition.string.end.html\"}},\"name\":\"string.quoted.double.html\",\"patterns\":[{\"include\":\"#entities\"}]},{\"begin\":\"'\",\"beginCaptures\":{\"0\":{\"name\":\"punctuation.definition.string.begin.html\"}},\"contentName\":\"meta.toc-list.id.html\",\"end\":\"'\",\"endCaptures\":{\"0\":{\"name\":\"punctuation.definition.string.end.html\"}},\"name\":\"string.quoted.single.html\",\"patterns\":[{\"include\":\"#entities\"}]},{\"captures\":{\"0\":{\"name\":\"meta.toc-list.id.html\"}},\"match\":\"(?<==)(?:[^\\\\s{}<>/'\\\"]|/(?!>))+\",\"name\":\"string.unquoted.html\"}]},\"tag-if-attribute\":{\"begin\":\"^\\\\s*(if)\\\\s\",\"beginCaptures\":{\"1\":{\"name\":\"keyword.control.go\"}},\"end\":\"(?<=})\",\"name\":\"if.attribute.html\",\"patterns\":[{\"begin\":\"(?<=if\\\\s)\",\"end\":\"({)$\",\"endCaptures\":{\"1\":{\"name\":\"punctuation.brace.open\"}},\"name\":\"expression.if.attribute.html\",\"patterns\":[{\"include\":\"source.go\"}]},{\"begin\":\"(?<={)$\",\"end\":\"^\\\\s*(})\",\"endCaptures\":{\"1\":{\"name\":\"punctuation.brace.close\"}},\"name\":\"block.if.attribute.html\",\"patterns\":[{\"include\":\"#tag-stuff\"}]}]},\"tag-stuff\":{\"patterns\":[{\"include\":\"#tag-id-attribute\"},{\"include\":\"#tag-generic-attribute\"},{\"include\":\"#string-double-quoted\"},{\"include\":\"#string-expression\"},{\"include\":\"#tag-if-attribute\"},{\"include\":\"#tag-else-if-attribute\"},{\"include\":\"#tag-else-attribute\"}]},\"template-node\":{\"patterns\":[{\"include\":\"#string-expression\"},{\"include\":\"#call-expression\"},{\"include\":\"#import-expression\"},{\"include\":\"#script-element\"},{\"include\":\"#style-element\"},{\"include\":\"#element\"},{\"include\":\"#html-comment\"},{\"include\":\"#go-comment-block\"},{\"include\":\"#go-comment-double-slash\"},{\"include\":\"#sgml\"},{\"include\":\"#block-element\"},{\"include\":\"#inline-element\"},{\"include\":\"#close-element\"},{\"include\":\"#else-if-expression\"},{\"include\":\"#if-expression\"},{\"include\":\"#else-expression\"},{\"include\":\"#for-expression\"},{\"include\":\"#switch-expression\"},{\"include\":\"#raw-go\"}]}},\"scopeName\":\"source.templ\",\"embeddedLangs\":[\"go\",\"javascript\",\"css\"]}"));

const templ = [
...go,
...javascript,
...css,
lang
];

export { templ as default };
