const lang = Object.freeze(JSON.parse("{\"displayName\":\"Scheme\",\"fileTypes\":[\"scm\",\"ss\",\"sch\",\"rkt\"],\"name\":\"scheme\",\"patterns\":[{\"include\":\"#comment\"},{\"include\":\"#block-comment\"},{\"include\":\"#sexp\"},{\"include\":\"#string\"},{\"include\":\"#language-functions\"},{\"include\":\"#quote\"},{\"include\":\"#illegal\"}],\"repository\":{\"block-comment\":{\"begin\":\"\\\\#\\\\|\",\"contentName\":\"comment\",\"end\":\"\\\\|\\\\#\",\"name\":\"comment\",\"patterns\":[{\"include\":\"#block-comment\",\"name\":\"comment\"}]},\"comment\":{\"begin\":\"(^[ \\\\t]+)?(?=;)\",\"beginCaptures\":{\"1\":{\"name\":\"punctuation.whitespace.comment.leading.scheme\"}},\"end\":\"(?!\\\\G)\",\"patterns\":[{\"begin\":\";\",\"beginCaptures\":{\"0\":{\"name\":\"punctuation.definition.comment.scheme\"}},\"end\":\"\\\\n\",\"name\":\"comment.line.semicolon.scheme\"}]},\"constants\":{\"patterns\":[{\"match\":\"#[t|f]\",\"name\":\"constant.language.boolean.scheme\"},{\"match\":\"(?<=[\\\\(\\\\s])((#e|#i)?[0-9]+(\\\\.[0-9]+)?|(#x)[0-9a-fA-F]+|(#o)[0-7]+|(#b)[01]+)(?=[\\\\s;()'\\\",\\\\[\\\\]])\",\"name\":\"constant.numeric.scheme\"}]},\"illegal\":{\"match\":\"[()\\\\[\\\\]]\",\"name\":\"invalid.illegal.parenthesis.scheme\"},\"language-functions\":{\"patterns\":[{\"match\":\"(?<=(\\\\s|\\\\(|\\\\[))(do|or|and|else|quasiquote|begin|if|case|set!|cond|let|unquote|define|let\\\\*|unquote-splicing|delay|letrec)(?=(\\\\s|\\\\())\",\"name\":\"keyword.control.scheme\"},{\"comment\":\"\\n\\t\\t\\t\\t\\t\\tThese functions run a test, and return a boolean\\n\\t\\t\\t\\t\\t\\tanswer.\\n\\t\\t\\t\\t\\t\",\"match\":\"(?<=(\\\\s|\\\\())(char-alphabetic|char-lower-case|char-numeric|char-ready|char-upper-case|char-whitespace|(?:char|string)(?:-ci)?(?:=|<=?|>=?)|atom|boolean|bound-identifier=|char|complex|identifier|integer|symbol|free-identifier=|inexact|eof-object|exact|list|(?:input|output)-port|pair|real|rational|zero|vector|negative|odd|null|string|eq|equal|eqv|even|number|positive|procedure)(\\\\?)(?=(\\\\s|\\\\())\",\"name\":\"support.function.boolean-test.scheme\"},{\"comment\":\"\\n\\t\\t\\t\\t\\t\\tThese functions change one type into another.\\n\\t\\t\\t\\t\\t\",\"match\":\"(?<=(\\\\s|\\\\())(char->integer|exact->inexact|inexact->exact|integer->char|symbol->string|list->vector|list->string|identifier->symbol|vector->list|string->list|string->number|string->symbol|number->string)(?=(\\\\s|\\\\())\",\"name\":\"support.function.convert-type.scheme\"},{\"comment\":\"\\n\\t\\t\\t\\t\\t\\tThese functions are potentially dangerous because\\n\\t\\t\\t\\t\\t\\tthey have side-effects which could affect other\\n\\t\\t\\t\\t\\t\\tparts of the program.\\n\\t\\t\\t\\t\\t\",\"match\":\"(?<=(\\\\s|\\\\())(set-(?:car|cdr)|(?:vector|string)-(?:fill|set))(!)(?=(\\\\s|\\\\())\",\"name\":\"support.function.with-side-effects.scheme\"},{\"comment\":\"\\n\\t\\t\\t\\t\\t\\t+, -, *, /, =, >, etc. \\n\\t\\t\\t\\t\\t\",\"match\":\"(?<=(\\\\s|\\\\())(>=?|<=?|=|[*/+-])(?=(\\\\s|\\\\())\",\"name\":\"keyword.operator.arithmetic.scheme\"},{\"match\":\"(?<=(\\\\s|\\\\())(append|apply|approximate|call-with-current-continuation|call/cc|catch|construct-identifier|define-syntax|display|foo|for-each|force|format|cd|gen-counter|gen-loser|generate-identifier|last-pair|length|let-syntax|letrec-syntax|list|list-ref|list-tail|load|log|macro|magnitude|map|map-streams|max|member|memq|memv|min|newline|nil|not|peek-char|rationalize|read|read-char|return|reverse|sequence|substring|syntax|syntax-rules|transcript-off|transcript-on|truncate|unwrap-syntax|values-list|write|write-char|cons|c(a|d){1,4}r|abs|acos|angle|asin|assoc|assq|assv|atan|ceiling|cos|floor|round|sin|sqrt|tan|(?:real|imag)-part|numerator|denominatormodulo|exp|expt|remainder|quotient|lcm|call-with-(?:input|output)-file|(?:close|current)-(?:input|output)-port|with-(?:input|output)-from-file|open-(?:input|output)-file|char-(?:downcase|upcase|ready)|make-(?:polar|promise|rectangular|string|vector)string(?:-(?:append|copy|length|ref))?|vector(?:-length|-ref))(?=(\\\\s|\\\\())\",\"name\":\"support.function.general.scheme\"}]},\"quote\":{\"comment\":\"\\n\\t\\t\\t\\tWe need to be able to quote any kind of item, which creates\\n\\t\\t\\t\\ta tiny bit of complexity in our grammar.  It is hopefully\\n\\t\\t\\t\\tnot overwhelming complexity.\\n\\t\\t\\t\\t\\n\\t\\t\\t\\tNote: the first two matches are special cases.  quoted\\n\\t\\t\\t\\tsymbols, and quoted empty lists are considered constant.other\\n\\t\\t\\t\\t\\n\\t\\t\\t\",\"patterns\":[{\"captures\":{\"1\":{\"name\":\"punctuation.section.quoted.symbol.scheme\"}},\"match\":\"(')\\\\s*([[:alnum:]][[:alnum:]!$%&*+-./:<=>?@^_~]*)\",\"name\":\"constant.other.symbol.scheme\"},{\"captures\":{\"1\":{\"name\":\"punctuation.section.quoted.empty-list.scheme\"},\"2\":{\"name\":\"meta.expression.scheme\"},\"3\":{\"name\":\"punctuation.section.expression.begin.scheme\"},\"4\":{\"name\":\"punctuation.section.expression.end.scheme\"}},\"match\":\"(')\\\\s*((\\\\()\\\\s*(\\\\)))\",\"name\":\"constant.other.empty-list.schem\"},{\"begin\":\"(')\\\\s*\",\"beginCaptures\":{\"1\":{\"name\":\"punctuation.section.quoted.scheme\"}},\"comment\":\"quoted double-quoted string or s-expression\",\"end\":\"(?=[\\\\s()])|(?<=\\\\n)\",\"name\":\"string.other.quoted-object.scheme\",\"patterns\":[{\"include\":\"#quoted\"}]}]},\"quote-sexp\":{\"begin\":\"(?<=\\\\()\\\\s*(quote)\\\\s+\",\"beginCaptures\":{\"1\":{\"name\":\"keyword.control.quote.scheme\"}},\"comment\":\"\\n\\t\\t\\t\\tSomething quoted with (quote «thing»).  In this case «thing»\\n\\t\\t\\t\\twill not be evaluated, so we are considering it a string.\\n\\t\\t\\t\",\"contentName\":\"string.other.quote.scheme\",\"end\":\"(?=[\\\\s)])|(?<=\\\\n)\",\"patterns\":[{\"include\":\"#quoted\"}]},\"quoted\":{\"patterns\":[{\"include\":\"#string\"},{\"begin\":\"(\\\\()\",\"beginCaptures\":{\"1\":{\"name\":\"punctuation.section.expression.begin.scheme\"}},\"end\":\"(\\\\))\",\"endCaptures\":{\"1\":{\"name\":\"punctuation.section.expression.end.scheme\"}},\"name\":\"meta.expression.scheme\",\"patterns\":[{\"include\":\"#quoted\"}]},{\"include\":\"#quote\"},{\"include\":\"#illegal\"}]},\"sexp\":{\"begin\":\"(\\\\()\",\"beginCaptures\":{\"1\":{\"name\":\"punctuation.section.expression.begin.scheme\"}},\"end\":\"(\\\\))(\\\\n)?\",\"endCaptures\":{\"1\":{\"name\":\"punctuation.section.expression.end.scheme\"},\"2\":{\"name\":\"meta.after-expression.scheme\"}},\"name\":\"meta.expression.scheme\",\"patterns\":[{\"include\":\"#comment\"},{\"begin\":\"(?<=\\\\()(define)\\\\s+(\\\\()([[:alnum:]][[:alnum:]!$%&*+-./:<=>?@^_~]*)((\\\\s+([[:alnum:]][[:alnum:]!$%&*+-./:<=>?@^_~]*|[._]))*)\\\\s*(\\\\))\",\"captures\":{\"1\":{\"name\":\"keyword.control.scheme\"},\"2\":{\"name\":\"punctuation.definition.function.scheme\"},\"3\":{\"name\":\"entity.name.function.scheme\"},\"4\":{\"name\":\"variable.parameter.function.scheme\"},\"7\":{\"name\":\"punctuation.definition.function.scheme\"}},\"end\":\"(?=\\\\))\",\"name\":\"meta.declaration.procedure.scheme\",\"patterns\":[{\"include\":\"#comment\"},{\"include\":\"#sexp\"},{\"include\":\"#illegal\"}]},{\"begin\":\"(?<=\\\\()(lambda)\\\\s+(\\\\()((?:([[:alnum:]][[:alnum:]!$%&*+-./:<=>?@^_~]*|[._])\\\\s+)*(?:([[:alnum:]][[:alnum:]!$%&*+-./:<=>?@^_~]*|[._]))?)(\\\\))\",\"captures\":{\"1\":{\"name\":\"keyword.control.scheme\"},\"2\":{\"name\":\"punctuation.definition.variable.scheme\"},\"3\":{\"name\":\"variable.parameter.scheme\"},\"6\":{\"name\":\"punctuation.definition.variable.scheme\"}},\"comment\":\"\\n\\t\\t\\t\\t\\t\\tNot sure this one is quite correct.  That \\\\s* is\\n\\t\\t\\t\\t\\t\\tparticularly troubling\\n\\t\\t\\t\\t\\t\",\"end\":\"(?=\\\\))\",\"name\":\"meta.declaration.procedure.scheme\",\"patterns\":[{\"include\":\"#comment\"},{\"include\":\"#sexp\"},{\"include\":\"#illegal\"}]},{\"begin\":\"(?<=\\\\()(define)\\\\s([[:alnum:]][[:alnum:]!$%&*+-./:<=>?@^_~]*)\\\\s*.*?\",\"captures\":{\"1\":{\"name\":\"keyword.control.scheme\"},\"2\":{\"name\":\"variable.other.scheme\"}},\"end\":\"(?=\\\\))\",\"name\":\"meta.declaration.variable.scheme\",\"patterns\":[{\"include\":\"#comment\"},{\"include\":\"#sexp\"},{\"include\":\"#illegal\"}]},{\"include\":\"#quote-sexp\"},{\"include\":\"#quote\"},{\"include\":\"#language-functions\"},{\"include\":\"#string\"},{\"include\":\"#constants\"},{\"match\":\"(?<=[\\\\(\\\\s])(#\\\\\\\\)(space|newline|tab)(?=[\\\\s\\\\)])\",\"name\":\"constant.character.named.scheme\"},{\"match\":\"(?<=[\\\\(\\\\s])(#\\\\\\\\)x[0-9A-F]{2,4}(?=[\\\\s\\\\)])\",\"name\":\"constant.character.hex-literal.scheme\"},{\"match\":\"(?<=[\\\\(\\\\s])(#\\\\\\\\).(?=[\\\\s\\\\)])\",\"name\":\"constant.character.escape.scheme\"},{\"comment\":\"\\n\\t\\t\\t\\t\\t\\tthe . in (a . b) which conses together two elements\\n\\t\\t\\t\\t\\t\\ta and b. (a b c) == (a . (b . (c . nil)))\\n\\t\\t\\t\\t\\t\",\"match\":\"(?<=[ ()])\\\\.(?=[ ()])\",\"name\":\"punctuation.separator.cons.scheme\"},{\"include\":\"#sexp\"},{\"include\":\"#illegal\"}]},\"string\":{\"begin\":\"(\\\")\",\"beginCaptures\":{\"1\":{\"name\":\"punctuation.definition.string.begin.scheme\"}},\"end\":\"(\\\")\",\"endCaptures\":{\"1\":{\"name\":\"punctuation.definition.string.end.scheme\"}},\"name\":\"string.quoted.double.scheme\",\"patterns\":[{\"match\":\"\\\\\\\\.\",\"name\":\"constant.character.escape.scheme\"}]}},\"scopeName\":\"source.scheme\"}"));

const scheme = [
lang
];

export { scheme as default };
