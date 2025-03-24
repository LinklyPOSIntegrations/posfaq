const lang = Object.freeze(JSON.parse("{\"displayName\":\"AppleScript\",\"fileTypes\":[\"applescript\",\"scpt\",\"script editor\"],\"firstLineMatch\":\"^#!.*(osascript)\",\"name\":\"applescript\",\"patterns\":[{\"include\":\"#blocks\"},{\"include\":\"#inline\"}],\"repository\":{\"attributes.considering-ignoring\":{\"patterns\":[{\"match\":\",\",\"name\":\"punctuation.separator.array.attributes.applescript\"},{\"match\":\"\\\\b(and)\\\\b\",\"name\":\"keyword.control.attributes.and.applescript\"},{\"match\":\"\\\\b(?i:case|diacriticals|hyphens|numeric\\\\s+strings|punctuation|white\\\\s+space)\\\\b\",\"name\":\"constant.other.attributes.text.applescript\"},{\"match\":\"\\\\b(?i:application\\\\s+responses)\\\\b\",\"name\":\"constant.other.attributes.application.applescript\"}]},\"blocks\":{\"patterns\":[{\"begin\":\"^\\\\s*(script)\\\\s+(\\\\w+)\",\"beginCaptures\":{\"1\":{\"name\":\"keyword.control.script.applescript\"},\"2\":{\"name\":\"entity.name.type.script-object.applescript\"}},\"end\":\"^\\\\s*(end(?:\\\\s+script)?)(?=\\\\s*(--.*?)?$)\",\"endCaptures\":{\"1\":{\"name\":\"keyword.control.script.applescript\"}},\"name\":\"meta.block.script.applescript\",\"patterns\":[{\"include\":\"$self\"}]},{\"begin\":\"^\\\\s*(to|on)\\\\s+(\\\\w+)(\\\\()((?:[\\\\s,:\\\\{\\\\}]*(?:\\\\w+)?)*)(\\\\))\",\"beginCaptures\":{\"1\":{\"name\":\"keyword.control.function.applescript\"},\"2\":{\"name\":\"entity.name.function.handler.applescript\"},\"3\":{\"name\":\"punctuation.definition.parameters.begin.applescript\"},\"4\":{\"name\":\"variable.parameter.handler.applescript\"},\"5\":{\"name\":\"punctuation.definition.parameters.end.applescript\"}},\"comment\":\"\\n\\t\\t\\t\\t\\t\\tThis is not a very well-designed rule.  For now,\\n\\t\\t\\t\\t\\t\\twe can leave it like this though, as it sorta works.\\n\\t\\t\\t\\t\\t\",\"end\":\"^\\\\s*(end)(?:\\\\s+(\\\\2))?(?=\\\\s*(--.*?)?$)\",\"endCaptures\":{\"1\":{\"name\":\"keyword.control.function.applescript\"}},\"name\":\"meta.function.positional.applescript\",\"patterns\":[{\"include\":\"$self\"}]},{\"begin\":\"^\\\\s*(to|on)\\\\s+(\\\\w+)(?:\\\\s+(of|in)\\\\s+(\\\\w+))?(?=\\\\s+(above|against|apart\\\\s+from|around|aside\\\\s+from|at|below|beneath|beside|between|by|for|from|instead\\\\s+of|into|on|onto|out\\\\s+of|over|thru|under)\\\\b)\",\"beginCaptures\":{\"1\":{\"name\":\"keyword.control.function.applescript\"},\"2\":{\"name\":\"entity.name.function.handler.applescript\"},\"3\":{\"name\":\"keyword.control.function.applescript\"},\"4\":{\"name\":\"variable.parameter.handler.direct.applescript\"}},\"comment\":\"TODO: match `given` parameters\",\"end\":\"^\\\\s*(end)(?:\\\\s+(\\\\2))?(?=\\\\s*(--.*?)?$)\",\"endCaptures\":{\"1\":{\"name\":\"keyword.control.function.applescript\"}},\"name\":\"meta.function.prepositional.applescript\",\"patterns\":[{\"captures\":{\"1\":{\"name\":\"keyword.control.preposition.applescript\"},\"2\":{\"name\":\"variable.parameter.handler.applescript\"}},\"match\":\"\\\\b(?i:above|against|apart\\\\s+from|around|aside\\\\s+from|at|below|beneath|beside|between|by|for|from|instead\\\\s+of|into|on|onto|out\\\\s+of|over|thru|under)\\\\s+(\\\\w+)\\\\b\"},{\"include\":\"$self\"}]},{\"begin\":\"^\\\\s*(to|on)\\\\s+(\\\\w+)(?=\\\\s*(--.*?)?$)\",\"beginCaptures\":{\"1\":{\"name\":\"keyword.control.function.applescript\"},\"2\":{\"name\":\"entity.name.function.handler.applescript\"}},\"end\":\"^\\\\s*(end)(?:\\\\s+(\\\\2))?(?=\\\\s*(--.*?)?$)\",\"endCaptures\":{\"1\":{\"name\":\"keyword.control.function.applescript\"}},\"name\":\"meta.function.parameterless.applescript\",\"patterns\":[{\"include\":\"$self\"}]},{\"include\":\"#blocks.tell\"},{\"include\":\"#blocks.repeat\"},{\"include\":\"#blocks.statement\"},{\"include\":\"#blocks.other\"}]},\"blocks.other\":{\"patterns\":[{\"begin\":\"^\\\\s*(considering)\\\\b\",\"end\":\"^\\\\s*(end(?:\\\\s+considering)?)(?=\\\\s*(--.*?)?$)\",\"name\":\"meta.block.considering.applescript\",\"patterns\":[{\"begin\":\"(?<=considering)\",\"end\":\"(?<!¬)$\",\"name\":\"meta.array.attributes.considering.applescript\",\"patterns\":[{\"include\":\"#attributes.considering-ignoring\"}]},{\"begin\":\"(?<=ignoring)\",\"end\":\"(?<!¬)$\",\"name\":\"meta.array.attributes.ignoring.applescript\",\"patterns\":[{\"include\":\"#attributes.considering-ignoring\"}]},{\"match\":\"\\\\b(but)\\\\b\",\"name\":\"keyword.control.but.applescript\"},{\"include\":\"$self\"}]},{\"begin\":\"^\\\\s*(ignoring)\\\\b\",\"end\":\"^\\\\s*(end(?:\\\\s+ignoring)?)(?=\\\\s*(--.*?)?$)\",\"name\":\"meta.block.ignoring.applescript\",\"patterns\":[{\"begin\":\"(?<=considering)\",\"end\":\"(?<!¬)$\",\"name\":\"meta.array.attributes.considering.applescript\",\"patterns\":[{\"include\":\"#attributes.considering-ignoring\"}]},{\"begin\":\"(?<=ignoring)\",\"end\":\"(?<!¬)$\",\"name\":\"meta.array.attributes.ignoring.applescript\",\"patterns\":[{\"include\":\"#attributes.considering-ignoring\"}]},{\"match\":\"\\\\b(but)\\\\b\",\"name\":\"keyword.control.but.applescript\"},{\"include\":\"$self\"}]},{\"begin\":\"^\\\\s*(if)\\\\b\",\"beginCaptures\":{\"1\":{\"name\":\"keyword.control.if.applescript\"}},\"end\":\"^\\\\s*(end(?:\\\\s+if)?)(?=\\\\s*(--.*?)?$)\",\"endCaptures\":{\"1\":{\"name\":\"keyword.control.end.applescript\"}},\"name\":\"meta.block.if.applescript\",\"patterns\":[{\"match\":\"\\\\b(then)\\\\b\",\"name\":\"keyword.control.then.applescript\"},{\"match\":\"\\\\b(else\\\\s+if)\\\\b\",\"name\":\"keyword.control.else-if.applescript\"},{\"match\":\"\\\\b(else)\\\\b\",\"name\":\"keyword.control.else.applescript\"},{\"include\":\"$self\"}]},{\"begin\":\"^\\\\s*(try)\\\\b\",\"beginCaptures\":{\"1\":{\"name\":\"keyword.control.try.applescript\"}},\"end\":\"^\\\\s*(end(?:\\\\s+(try|error))?)(?=\\\\s*(--.*?)?$)\",\"endCaptures\":{\"1\":{\"name\":\"keyword.control.end.applescript\"}},\"name\":\"meta.block.try.applescript\",\"patterns\":[{\"begin\":\"^\\\\s*(on\\\\s+error)\\\\b\",\"beginCaptures\":{\"1\":{\"name\":\"keyword.control.exception.on-error.applescript\"}},\"end\":\"(?<!¬)$\",\"name\":\"meta.property.error.applescript\",\"patterns\":[{\"match\":\"\\\\b(?i:number|partial|from|to)\\\\b\",\"name\":\"keyword.control.exception.modifier.applescript\"},{\"include\":\"#inline\"}]},{\"include\":\"$self\"}]},{\"begin\":\"^\\\\s*(using\\\\s+terms\\\\s+from)\\\\b\",\"beginCaptures\":{\"1\":{\"name\":\"keyword.control.terms.applescript\"}},\"end\":\"^\\\\s*(end(?:\\\\s+using\\\\s+terms\\\\s+from)?)(?=\\\\s*(--.*?)?$)\",\"endCaptures\":{\"1\":{\"name\":\"keyword.control.end.applescript\"}},\"name\":\"meta.block.terms.applescript\",\"patterns\":[{\"include\":\"$self\"}]},{\"begin\":\"^\\\\s*(with\\\\s+timeout(\\\\s+of)?)\\\\b\",\"beginCaptures\":{\"1\":{\"name\":\"keyword.control.timeout.applescript\"}},\"end\":\"^\\\\s*(end(?:\\\\s+timeout)?)(?=\\\\s*(--.*?)?$)\",\"endCaptures\":{\"1\":{\"name\":\"keyword.control.end.applescript\"}},\"name\":\"meta.block.timeout.applescript\",\"patterns\":[{\"include\":\"$self\"}]},{\"begin\":\"^\\\\s*(with\\\\s+transaction(\\\\s+of)?)\\\\b\",\"beginCaptures\":{\"1\":{\"name\":\"keyword.control.transaction.applescript\"}},\"end\":\"^\\\\s*(end(?:\\\\s+transaction)?)(?=\\\\s*(--.*?)?$)\",\"endCaptures\":{\"1\":{\"name\":\"keyword.control.end.applescript\"}},\"name\":\"meta.block.transaction.applescript\",\"patterns\":[{\"include\":\"$self\"}]}]},\"blocks.repeat\":{\"patterns\":[{\"begin\":\"^\\\\s*(repeat)\\\\s+(until)\\\\b\",\"beginCaptures\":{\"1\":{\"name\":\"keyword.control.repeat.applescript\"},\"2\":{\"name\":\"keyword.control.until.applescript\"}},\"end\":\"^\\\\s*(end(?:\\\\s+repeat)?)(?=\\\\s*(--.*?)?$)\",\"endCaptures\":{\"1\":{\"name\":\"keyword.control.end.applescript\"}},\"name\":\"meta.block.repeat.until.applescript\",\"patterns\":[{\"include\":\"$self\"}]},{\"begin\":\"^\\\\s*(repeat)\\\\s+(while)\\\\b\",\"beginCaptures\":{\"1\":{\"name\":\"keyword.control.repeat.applescript\"},\"2\":{\"name\":\"keyword.control.while.applescript\"}},\"end\":\"^\\\\s*(end(?:\\\\s+repeat)?)(?=\\\\s*(--.*?)?$)\",\"endCaptures\":{\"1\":{\"name\":\"keyword.control.end.applescript\"}},\"name\":\"meta.block.repeat.while.applescript\",\"patterns\":[{\"include\":\"$self\"}]},{\"begin\":\"^\\\\s*(repeat)\\\\s+(with)\\\\s+(\\\\w+)\\\\b\",\"beginCaptures\":{\"1\":{\"name\":\"keyword.control.repeat.applescript\"},\"2\":{\"name\":\"keyword.control.until.applescript\"},\"3\":{\"name\":\"variable.parameter.loop.applescript\"}},\"end\":\"^\\\\s*(end(?:\\\\s+repeat)?)(?=\\\\s*(--.*?)?$)\",\"endCaptures\":{\"1\":{\"name\":\"keyword.control.end.applescript\"}},\"name\":\"meta.block.repeat.with.applescript\",\"patterns\":[{\"match\":\"\\\\b(from|to|by)\\\\b\",\"name\":\"keyword.control.modifier.range.applescript\"},{\"match\":\"\\\\b(in)\\\\b\",\"name\":\"keyword.control.modifier.list.applescript\"},{\"include\":\"$self\"}]},{\"begin\":\"^\\\\s*(repeat)\\\\b(?=\\\\s*(--.*?)?$)\",\"beginCaptures\":{\"1\":{\"name\":\"keyword.control.repeat.applescript\"}},\"end\":\"^\\\\s*(end(?:\\\\s+repeat)?)(?=\\\\s*(--.*?)?$)\",\"endCaptures\":{\"1\":{\"name\":\"keyword.control.end.applescript\"}},\"name\":\"meta.block.repeat.forever.applescript\",\"patterns\":[{\"include\":\"$self\"}]},{\"begin\":\"^\\\\s*(repeat)\\\\b\",\"beginCaptures\":{\"1\":{\"name\":\"keyword.control.repeat.applescript\"}},\"end\":\"^\\\\s*(end(?:\\\\s+repeat)?)(?=\\\\s*(--.*?)?$)\",\"endCaptures\":{\"1\":{\"name\":\"keyword.control.end.applescript\"}},\"name\":\"meta.block.repeat.times.applescript\",\"patterns\":[{\"match\":\"\\\\b(times)\\\\b\",\"name\":\"keyword.control.times.applescript\"},{\"include\":\"$self\"}]}]},\"blocks.statement\":{\"patterns\":[{\"begin\":\"\\\\b(prop(?:erty)?)\\\\s+(\\\\w+)\\\\b\",\"beginCaptures\":{\"1\":{\"name\":\"keyword.control.def.property.applescript\"},\"2\":{\"name\":\"variable.other.property.applescript\"}},\"end\":\"(?<!¬)$\",\"name\":\"meta.statement.property.applescript\",\"patterns\":[{\"match\":\":\",\"name\":\"punctuation.separator.key-value.property.applescript\"},{\"include\":\"#inline\"}]},{\"begin\":\"\\\\b(set)\\\\s+(\\\\w+)\\\\s+(to)\\\\b\",\"beginCaptures\":{\"1\":{\"name\":\"keyword.control.def.set.applescript\"},\"2\":{\"name\":\"variable.other.readwrite.set.applescript\"},\"3\":{\"name\":\"keyword.control.def.set.applescript\"}},\"end\":\"(?<!¬)$\",\"name\":\"meta.statement.set.applescript\",\"patterns\":[{\"include\":\"#inline\"}]},{\"begin\":\"\\\\b(local)\\\\b\",\"beginCaptures\":{\"1\":{\"name\":\"keyword.control.def.local.applescript\"}},\"end\":\"(?<!¬)$\",\"name\":\"meta.statement.local.applescript\",\"patterns\":[{\"match\":\",\",\"name\":\"punctuation.separator.variables.local.applescript\"},{\"match\":\"\\\\b\\\\w+\",\"name\":\"variable.other.readwrite.local.applescript\"},{\"include\":\"#inline\"}]},{\"begin\":\"\\\\b(global)\\\\b\",\"beginCaptures\":{\"1\":{\"name\":\"keyword.control.def.global.applescript\"}},\"end\":\"(?<!¬)$\",\"name\":\"meta.statement.global.applescript\",\"patterns\":[{\"match\":\",\",\"name\":\"punctuation.separator.variables.global.applescript\"},{\"match\":\"\\\\b\\\\w+\",\"name\":\"variable.other.readwrite.global.applescript\"},{\"include\":\"#inline\"}]},{\"begin\":\"\\\\b(error)\\\\b\",\"beginCaptures\":{\"1\":{\"name\":\"keyword.control.exception.error.applescript\"}},\"end\":\"(?<!¬)$\",\"name\":\"meta.statement.error.applescript\",\"patterns\":[{\"match\":\"\\\\b(number|partial|from|to)\\\\b\",\"name\":\"keyword.control.exception.modifier.applescript\"},{\"include\":\"#inline\"}]},{\"begin\":\"\\\\b(if)\\\\b(?=.*\\\\bthen\\\\b(?!\\\\s*(--.*?)?$))\",\"beginCaptures\":{\"1\":{\"name\":\"keyword.control.if.applescript\"}},\"end\":\"(?<!¬)$\",\"name\":\"meta.statement.if-then.applescript\",\"patterns\":[{\"include\":\"#inline\"}]}]},\"blocks.tell\":{\"patterns\":[{\"begin\":\"^\\\\s*(tell)\\\\s+(?=app(lication)?\\\\s+\\\"(?i:textmate)\\\")(?!.*\\\\bto(?!\\\\s+tell)\\\\b)\",\"captures\":{\"1\":{\"name\":\"keyword.control.tell.applescript\"}},\"comment\":\"tell Textmate\",\"end\":\"^\\\\s*(end(?:\\\\s+tell)?)(?=\\\\s*(--.*?)?$)\",\"name\":\"meta.block.tell.application.textmate.applescript\",\"patterns\":[{\"include\":\"#textmate\"},{\"include\":\"#standard-suite\"},{\"include\":\"$self\"}]},{\"begin\":\"^\\\\s*(tell)\\\\s+(?=app(lication)?\\\\s+\\\"(?i:finder)\\\")(?!.*\\\\bto(?!\\\\s+tell)\\\\b)\",\"captures\":{\"1\":{\"name\":\"keyword.control.tell.applescript\"}},\"comment\":\"tell Finder\",\"end\":\"^\\\\s*(end(?:\\\\s+tell)?)(?=\\\\s*(--.*?)?$)\",\"name\":\"meta.block.tell.application.finder.applescript\",\"patterns\":[{\"include\":\"#finder\"},{\"include\":\"#standard-suite\"},{\"include\":\"$self\"}]},{\"begin\":\"^\\\\s*(tell)\\\\s+(?=app(lication)?\\\\s+\\\"(?i:system events)\\\")(?!.*\\\\bto(?!\\\\s+tell)\\\\b)\",\"captures\":{\"1\":{\"name\":\"keyword.control.tell.applescript\"}},\"comment\":\"tell System Events\",\"end\":\"^\\\\s*(end(?:\\\\s+tell)?)(?=\\\\s*(--.*?)?$)\",\"name\":\"meta.block.tell.application.system-events.applescript\",\"patterns\":[{\"include\":\"#system-events\"},{\"include\":\"#standard-suite\"},{\"include\":\"$self\"}]},{\"begin\":\"^\\\\s*(tell)\\\\s+(?=app(lication)?\\\\s+\\\"(?i:itunes)\\\")(?!.*\\\\bto(?!\\\\s+tell)\\\\b)\",\"captures\":{\"1\":{\"name\":\"keyword.control.tell.applescript\"}},\"comment\":\"tell iTunes\",\"end\":\"^\\\\s*(end(?:\\\\s+tell)?)(?=\\\\s*(--.*?)?$)\",\"name\":\"meta.block.tell.application.itunes.applescript\",\"patterns\":[{\"include\":\"#itunes\"},{\"include\":\"#standard-suite\"},{\"include\":\"$self\"}]},{\"begin\":\"^\\\\s*(tell)\\\\s+(?=app(lication)?\\\\s+process\\\\b)(?!.*\\\\bto(?!\\\\s+tell)\\\\b)\",\"captures\":{\"1\":{\"name\":\"keyword.control.tell.applescript\"}},\"comment\":\"tell generic application process\",\"end\":\"^\\\\s*(end(?:\\\\s+tell)?)(?=\\\\s*(--.*?)?$)\",\"name\":\"meta.block.tell.application-process.generic.applescript\",\"patterns\":[{\"include\":\"#standard-suite\"},{\"include\":\"$self\"}]},{\"begin\":\"^\\\\s*(tell)\\\\s+(?=app(lication)?\\\\b)(?!.*\\\\bto(?!\\\\s+tell)\\\\b)\",\"captures\":{\"1\":{\"name\":\"keyword.control.tell.applescript\"}},\"comment\":\"tell generic application\",\"end\":\"^\\\\s*(end(?:\\\\s+tell)?)(?=\\\\s*(--.*?)?$)\",\"name\":\"meta.block.tell.application.generic.applescript\",\"patterns\":[{\"include\":\"#standard-suite\"},{\"include\":\"$self\"}]},{\"begin\":\"^\\\\s*(tell)\\\\s+(?!.*\\\\bto(?!\\\\s+tell)\\\\b)\",\"captures\":{\"1\":{\"name\":\"keyword.control.tell.applescript\"}},\"comment\":\"generic tell block\",\"end\":\"^\\\\s*(end(?:\\\\s+tell)?)(?=\\\\s*(--.*?)?$)\",\"name\":\"meta.block.tell.generic.applescript\",\"patterns\":[{\"include\":\"$self\"}]},{\"begin\":\"^\\\\s*(tell)\\\\s+(?=.*\\\\bto\\\\b)\",\"captures\":{\"1\":{\"name\":\"keyword.control.tell.applescript\"}},\"comment\":\"tell … to statement\",\"end\":\"(?<!¬)$\",\"name\":\"meta.block.tell.generic.applescript\",\"patterns\":[{\"include\":\"$self\"}]}]},\"built-in\":{\"patterns\":[{\"include\":\"#built-in.constant\"},{\"include\":\"#built-in.keyword\"},{\"include\":\"#built-in.support\"},{\"include\":\"#built-in.punctuation\"}]},\"built-in.constant\":{\"patterns\":[{\"comment\":\"yes/no can’t always be used as booleans, e.g. in an if() expression. But they work e.g. for boolean arguments.\",\"match\":\"\\\\b(?i:true|false|yes|no)\\\\b\",\"name\":\"constant.language.boolean.applescript\"},{\"match\":\"\\\\b(?i:null|missing\\\\s+value)\\\\b\",\"name\":\"constant.language.null.applescript\"},{\"match\":\"-?\\\\b\\\\d+((\\\\.(\\\\d+\\\\b)?)?(?i:e\\\\+?\\\\d*\\\\b)?|\\\\b)\",\"name\":\"constant.numeric.applescript\"},{\"match\":\"\\\\b(?i:space|tab|return|linefeed|quote)\\\\b\",\"name\":\"constant.other.text.applescript\"},{\"match\":\"\\\\b(?i:all\\\\s+(caps|lowercase)|bold|condensed|expanded|hidden|italic|outline|plain|shadow|small\\\\s+caps|strikethrough|(sub|super)script|underline)\\\\b\",\"name\":\"constant.other.styles.applescript\"},{\"match\":\"\\\\b(?i:Jan(uary)?|Feb(ruary)?|Mar(ch)?|Apr(il)?|May|Jun(e)?|Jul(y)?|Aug(ust)?|Sep(tember)?|Oct(ober)?|Nov(ember)?|Dec(ember)?)\\\\b\",\"name\":\"constant.other.time.month.applescript\"},{\"match\":\"\\\\b(?i:Mon(day)?|Tue(sday)?|Wed(nesday)?|Thu(rsday)?|Fri(day)?|Sat(urday)?|Sun(day)?)\\\\b\",\"name\":\"constant.other.time.weekday.applescript\"},{\"match\":\"\\\\b(?i:AppleScript|pi|result|version|current\\\\s+application|its?|m[ey])\\\\b\",\"name\":\"constant.other.miscellaneous.applescript\"},{\"match\":\"\\\\b(?i:text\\\\s+item\\\\s+delimiters|print\\\\s+(length|depth))\\\\b\",\"name\":\"variable.language.applescript\"}]},\"built-in.keyword\":{\"patterns\":[{\"match\":\"(&|\\\\*|\\\\+|-|/|÷|\\\\^)\",\"name\":\"keyword.operator.arithmetic.applescript\"},{\"match\":\"(=|≠|>|<|≥|>=|≤|<=)\",\"name\":\"keyword.operator.comparison.applescript\"},{\"match\":\"(?ix)\\\\b\\n\\t\\t\\t\\t\\t\\t(and|or|div|mod|as|not\\n\\t\\t\\t\\t\\t\\t|(a\\\\s+)?(ref(\\\\s+to)?|reference\\\\s+to)\\n\\t\\t\\t\\t\\t\\t|equal(s|\\\\s+to)|contains?|comes\\\\s+(after|before)|(start|begin|end)s?\\\\s+with\\n\\t\\t\\t\\t\\t\\t)\\n\\t\\t\\t\\t\\t\\\\b\",\"name\":\"keyword.operator.word.applescript\"},{\"comment\":\"In double quotes so we can use a single quote in the keywords.\",\"match\":\"(?ix)\\\\b\\n\\t\\t\\t\\t\\t\\t(is(n't|\\\\s+not)?(\\\\s+(equal(\\\\s+to)?|(less|greater)\\\\s+than(\\\\s+or\\\\s+equal(\\\\s+to)?)?|in|contained\\\\s+by))?\\n\\t\\t\\t\\t\\t\\t|does(n't|\\\\s+not)\\\\s+(equal|come\\\\s+(before|after)|contain)\\n\\t\\t\\t\\t\\t\\t)\\n\\t\\t\\t\\t\\t\\\\b\",\"name\":\"keyword.operator.word.applescript\"},{\"match\":\"\\\\b(?i:some|every|whose|where|that|id|index|\\\\d+(st|nd|rd|th)|first|second|third|fourth|fifth|sixth|seventh|eighth|ninth|tenth|last|front|back|middle|named|beginning|end|from|to|thr(u|ough)|before|(front|back|beginning|end)\\\\s+of|after|behind|in\\\\s+(front|back|beginning|end)\\\\s+of)\\\\b\",\"name\":\"keyword.operator.reference.applescript\"},{\"match\":\"\\\\b(?i:continue|return|exit(\\\\s+repeat)?)\\\\b\",\"name\":\"keyword.control.loop.applescript\"},{\"match\":\"\\\\b(?i:about|above|after|against|and|apart\\\\s+from|around|as|aside\\\\s+from|at|back|before|beginning|behind|below|beneath|beside|between|but|by|considering|contain|contains|contains|copy|div|does|eighth|else|end|equal|equals|error|every|false|fifth|first|for|fourth|from|front|get|given|global|if|ignoring|in|instead\\\\s+of|into|is|it|its|last|local|me|middle|mod|my|ninth|not|of|on|onto|or|out\\\\s+of|over|prop|property|put|ref|reference|repeat|returning|script|second|set|seventh|since|sixth|some|tell|tenth|that|the|then|third|through|thru|timeout|times|to|transaction|true|try|until|where|while|whose|with|without)\\\\b\",\"name\":\"keyword.other.applescript\"}]},\"built-in.punctuation\":{\"patterns\":[{\"match\":\"¬\",\"name\":\"punctuation.separator.continuation.line.applescript\"},{\"comment\":\"the : in property assignments\",\"match\":\":\",\"name\":\"punctuation.separator.key-value.property.applescript\"},{\"comment\":\"the parentheses in groups\",\"match\":\"[()]\",\"name\":\"punctuation.section.group.applescript\"}]},\"built-in.support\":{\"patterns\":[{\"match\":\"\\\\b(?i:POSIX\\\\s+path|frontmost|id|name|running|version|days?|weekdays?|months?|years?|time|date\\\\s+string|time\\\\s+string|length|rest|reverse|items?|contents|quoted\\\\s+form|characters?|paragraphs?|words?)\\\\b\",\"name\":\"support.function.built-in.property.applescript\"},{\"match\":\"\\\\b(?i:activate|log|clipboard\\\\s+info|set\\\\s+the\\\\s+clipboard\\\\s+to|the\\\\s+clipboard|info\\\\s+for|list\\\\s+(disks|folder)|mount\\\\s+volume|path\\\\s+to(\\\\s+resource)?|close\\\\s+access|get\\\\s+eof|open\\\\s+for\\\\s+access|read|set\\\\s+eof|write|open\\\\s+location|current\\\\s+date|do\\\\s+shell\\\\s+script|get\\\\s+volume\\\\s+settings|random\\\\s+number|round|set\\\\s+volume|system\\\\s+(attribute|info)|time\\\\s+to\\\\s+GMT|load\\\\s+script|run\\\\s+script|scripting\\\\s+components|store\\\\s+script|copy|count|get|launch|run|set|ASCII\\\\s+(character|number)|localized\\\\s+string|offset|summarize|beep|choose\\\\s+(application|color|file(\\\\s+name)?|folder|from\\\\s+list|remote\\\\s+application|URL)|delay|display\\\\s+(alert|dialog)|say)\\\\b\",\"name\":\"support.function.built-in.command.applescript\"},{\"match\":\"\\\\b(?i:get|run)\\\\b\",\"name\":\"support.function.built-in.applescript\"},{\"match\":\"\\\\b(?i:anything|data|text|upper\\\\s+case|propert(y|ies))\\\\b\",\"name\":\"support.class.built-in.applescript\"},{\"match\":\"\\\\b(?i:alias|class)(es)?\\\\b\",\"name\":\"support.class.built-in.applescript\"},{\"match\":\"\\\\b(?i:app(lication)?|boolean|character|constant|date|event|file(\\\\s+specification)?|handler|integer|item|keystroke|linked\\\\s+list|list|machine|number|picture|preposition|POSIX\\\\s+file|real|record|reference(\\\\s+form)?|RGB\\\\s+color|script|sound|text\\\\s+item|type\\\\s+class|vector|writing\\\\s+code(\\\\s+info)?|zone|((international|styled(\\\\s+(Clipboard|Unicode))?|Unicode)\\\\s+)?text|((C|encoded|Pascal)\\\\s+)?string)s?\\\\b\",\"name\":\"support.class.built-in.applescript\"},{\"match\":\"(?ix)\\\\b\\n\\t\\t\\t\\t\\t\\t(\\t(cubic\\\\s+(centi)?|square\\\\s+(kilo)?|centi|kilo)met(er|re)s\\n\\t\\t\\t\\t\\t\\t|\\tsquare\\\\s+(yards|feet|miles)|cubic\\\\s+(yards|feet|inches)|miles|inches\\n\\t\\t\\t\\t\\t\\t|\\tlit(re|er)s|gallons|quarts\\n\\t\\t\\t\\t\\t\\t|\\t(kilo)?grams|ounces|pounds\\n\\t\\t\\t\\t\\t\\t|\\tdegrees\\\\s+(Celsius|Fahrenheit|Kelvin)\\n\\t\\t\\t\\t\\t\\t)\\n\\t\\t\\t\\t\\t\\\\b\",\"name\":\"support.class.built-in.unit.applescript\"},{\"match\":\"\\\\b(?i:seconds|minutes|hours|days)\\\\b\",\"name\":\"support.class.built-in.time.applescript\"}]},\"comments\":{\"patterns\":[{\"begin\":\"^\\\\s*(#!)\",\"captures\":{\"1\":{\"name\":\"punctuation.definition.comment.applescript\"}},\"end\":\"\\\\n\",\"name\":\"comment.line.number-sign.applescript\"},{\"begin\":\"(^[ \\\\t]+)?(?=#)\",\"beginCaptures\":{\"1\":{\"name\":\"punctuation.whitespace.comment.leading.applescript\"}},\"end\":\"(?!\\\\G)\",\"patterns\":[{\"begin\":\"#\",\"beginCaptures\":{\"0\":{\"name\":\"punctuation.definition.comment.applescript\"}},\"end\":\"\\\\n\",\"name\":\"comment.line.number-sign.applescript\"}]},{\"begin\":\"(^[ \\\\t]+)?(?=--)\",\"beginCaptures\":{\"1\":{\"name\":\"punctuation.whitespace.comment.leading.applescript\"}},\"end\":\"(?!\\\\G)\",\"patterns\":[{\"begin\":\"--\",\"beginCaptures\":{\"0\":{\"name\":\"punctuation.definition.comment.applescript\"}},\"end\":\"\\\\n\",\"name\":\"comment.line.double-dash.applescript\"}]},{\"begin\":\"\\\\(\\\\*\",\"captures\":{\"0\":{\"name\":\"punctuation.definition.comment.applescript\"}},\"end\":\"\\\\*\\\\)\",\"name\":\"comment.block.applescript\",\"patterns\":[{\"include\":\"#comments.nested\"}]}]},\"comments.nested\":{\"patterns\":[{\"begin\":\"\\\\(\\\\*\",\"beginCaptures\":{\"0\":{\"name\":\"punctuation.definition.comment.begin.applescript\"}},\"end\":\"\\\\*\\\\)\",\"endCaptures\":{\"0\":{\"name\":\"punctuation.definition.comment.end.applescript\"}},\"name\":\"comment.block.applescript\",\"patterns\":[{\"include\":\"#comments.nested\"}]}]},\"data-structures\":{\"patterns\":[{\"begin\":\"\\\\{\",\"beginCaptures\":{\"0\":{\"name\":\"punctuation.definition.array.begin.applescript\"}},\"comment\":\"We cannot necessarily distinguish \\\"records\\\" from \\\"arrays\\\", and so this could be either.\",\"end\":\"\\\\}\",\"endCaptures\":{\"0\":{\"name\":\"punctuation.definition.array.end.applescript\"}},\"name\":\"meta.array.applescript\",\"patterns\":[{\"captures\":{\"1\":{\"name\":\"constant.other.key.applescript\"},\"2\":{\"name\":\"meta.identifier.applescript\"},\"3\":{\"name\":\"punctuation.definition.identifier.applescript\"},\"4\":{\"name\":\"punctuation.definition.identifier.applescript\"},\"5\":{\"name\":\"punctuation.separator.key-value.applescript\"}},\"match\":\"(\\\\w+|((\\\\|)[^|\\\\n]*(\\\\|)))\\\\s*(:)\"},{\"match\":\":\",\"name\":\"punctuation.separator.key-value.applescript\"},{\"match\":\",\",\"name\":\"punctuation.separator.array.applescript\"},{\"include\":\"#inline\"}]},{\"begin\":\"(?:(?<=application )|(?<=app ))(\\\")\",\"captures\":{\"1\":{\"name\":\"punctuation.definition.string.applescript\"}},\"end\":\"(\\\")\",\"name\":\"string.quoted.double.application-name.applescript\",\"patterns\":[{\"match\":\"\\\\\\\\.\",\"name\":\"constant.character.escape.applescript\"}]},{\"begin\":\"(\\\")\",\"captures\":{\"1\":{\"name\":\"punctuation.definition.string.applescript\"}},\"end\":\"(\\\")\",\"name\":\"string.quoted.double.applescript\",\"patterns\":[{\"match\":\"\\\\\\\\.\",\"name\":\"constant.character.escape.applescript\"}]},{\"captures\":{\"1\":{\"name\":\"punctuation.definition.identifier.applescript\"},\"2\":{\"name\":\"punctuation.definition.identifier.applescript\"}},\"match\":\"(\\\\|)[^|\\\\n]*(\\\\|)\",\"name\":\"meta.identifier.applescript\"},{\"captures\":{\"1\":{\"name\":\"punctuation.definition.data.applescript\"},\"2\":{\"name\":\"support.class.built-in.applescript\"},\"3\":{\"name\":\"storage.type.utxt.applescript\"},\"4\":{\"name\":\"string.unquoted.data.applescript\"},\"5\":{\"name\":\"punctuation.definition.data.applescript\"},\"6\":{\"name\":\"keyword.operator.applescript\"},\"7\":{\"name\":\"support.class.built-in.applescript\"}},\"match\":\"(«)(data) (utxt|utf8)([[:xdigit:]]*)(»)(?:\\\\s+(as)\\\\s+(?i:Unicode\\\\s+text))?\",\"name\":\"constant.other.data.utxt.applescript\"},{\"begin\":\"(«)(\\\\w+)\\\\b(?=\\\\s)\",\"beginCaptures\":{\"1\":{\"name\":\"punctuation.definition.data.applescript\"},\"2\":{\"name\":\"support.class.built-in.applescript\"}},\"end\":\"(»)\",\"endCaptures\":{\"1\":{\"name\":\"punctuation.definition.data.applescript\"}},\"name\":\"constant.other.data.raw.applescript\"},{\"captures\":{\"1\":{\"name\":\"punctuation.definition.data.applescript\"},\"2\":{\"name\":\"punctuation.definition.data.applescript\"}},\"match\":\"(«)[^»]*(»)\",\"name\":\"invalid.illegal.data.applescript\"}]},\"finder\":{\"patterns\":[{\"match\":\"\\\\b(item|container|(computer|disk|trash)-object|disk|folder|((alias|application|document|internet location) )?file|clipping|package)s?\\\\b\",\"name\":\"support.class.finder.items.applescript\"},{\"match\":\"\\\\b((Finder|desktop|information|preferences|clipping) )windows?\\\\b\",\"name\":\"support.class.finder.window-classes.applescript\"},{\"match\":\"\\\\b(preferences|(icon|column|list) view options|(label|column|alias list)s?)\\\\b\",\"name\":\"support.class.finder.type-definitions.applescript\"},{\"match\":\"\\\\b(copy|find|sort|clean up|eject|empty( trash)|erase|reveal|update)\\\\b\",\"name\":\"support.function.finder.items.applescript\"},{\"match\":\"\\\\b(insertion location|product version|startup disk|desktop|trash|home|computer container|finder preferences)\\\\b\",\"name\":\"support.constant.finder.applescript\"},{\"match\":\"\\\\b(visible)\\\\b\",\"name\":\"support.variable.finder.applescript\"}]},\"inline\":{\"patterns\":[{\"include\":\"#comments\"},{\"include\":\"#data-structures\"},{\"include\":\"#built-in\"},{\"include\":\"#standardadditions\"}]},\"itunes\":{\"patterns\":[{\"match\":\"\\\\b(artwork|application|encoder|EQ preset|item|source|visual|(EQ |browser )?window|((audio CD|device|shared|URL|file) )?track|playlist window|((audio CD|device|radio tuner|library|folder|user) )?playlist)s?\\\\b\",\"name\":\"support.class.itunes.applescript\"},{\"match\":\"\\\\b(add|back track|convert|fast forward|(next|previous) track|pause|play(pause)?|refresh|resume|rewind|search|stop|update|eject|subscribe|update(Podcast|AllPodcasts)|download)\\\\b\",\"name\":\"support.function.itunes.applescript\"},{\"match\":\"\\\\b(current (playlist|stream (title|URL)|track)|player state)\\\\b\",\"name\":\"support.constant.itunes.applescript\"},{\"match\":\"\\\\b(current (encoder|EQ preset|visual)|EQ enabled|fixed indexing|full screen|mute|player position|sound volume|visuals enabled|visual size)\\\\b\",\"name\":\"support.variable.itunes.applescript\"}]},\"standard-suite\":{\"patterns\":[{\"match\":\"\\\\b(colors?|documents?|items?|windows?)\\\\b\",\"name\":\"support.class.standard-suite.applescript\"},{\"match\":\"\\\\b(close|count|delete|duplicate|exists|make|move|open|print|quit|save|activate|select|data size)\\\\b\",\"name\":\"support.function.standard-suite.applescript\"},{\"match\":\"\\\\b(name|frontmost|version)\\\\b\",\"name\":\"support.constant.standard-suite.applescript\"},{\"match\":\"\\\\b(selection)\\\\b\",\"name\":\"support.variable.standard-suite.applescript\"},{\"match\":\"\\\\b(attachments?|attribute runs?|characters?|paragraphs?|texts?|words?)\\\\b\",\"name\":\"support.class.text-suite.applescript\"}]},\"standardadditions\":{\"patterns\":[{\"match\":\"\\\\b((alert|dialog) reply)\\\\b\",\"name\":\"support.class.standardadditions.user-interaction.applescript\"},{\"match\":\"\\\\b(file information)\\\\b\",\"name\":\"support.class.standardadditions.file.applescript\"},{\"match\":\"\\\\b(POSIX files?|system information|volume settings)\\\\b\",\"name\":\"support.class.standardadditions.miscellaneous.applescript\"},{\"match\":\"\\\\b(URLs?|internet address(es)?|web pages?|FTP items?)\\\\b\",\"name\":\"support.class.standardadditions.internet.applescript\"},{\"match\":\"\\\\b(info for|list (disks|folder)|mount volume|path to( resource)?)\\\\b\",\"name\":\"support.function.standardadditions.file.applescript\"},{\"match\":\"\\\\b(beep|choose (application|color|file( name)?|folder|from list|remote application|URL)|delay|display (alert|dialog)|say)\\\\b\",\"name\":\"support.function.standardadditions.user-interaction.applescript\"},{\"match\":\"\\\\b(ASCII (character|number)|localized string|offset|summarize)\\\\b\",\"name\":\"support.function.standardadditions.string.applescript\"},{\"match\":\"\\\\b(set the clipboard to|the clipboard|clipboard info)\\\\b\",\"name\":\"support.function.standardadditions.clipboard.applescript\"},{\"match\":\"\\\\b(open for access|close access|read|write|get eof|set eof)\\\\b\",\"name\":\"support.function.standardadditions.file-i-o.applescript\"},{\"match\":\"\\\\b((load|store|run) script|scripting components)\\\\b\",\"name\":\"support.function.standardadditions.scripting.applescript\"},{\"match\":\"\\\\b(current date|do shell script|get volume settings|random number|round|set volume|system attribute|system info|time to GMT)\\\\b\",\"name\":\"support.function.standardadditions.miscellaneous.applescript\"},{\"match\":\"\\\\b(opening folder|(closing|moving) folder window for|adding folder items to|removing folder items from)\\\\b\",\"name\":\"support.function.standardadditions.folder-actions.applescript\"},{\"match\":\"\\\\b(open location|handle CGI request)\\\\b\",\"name\":\"support.function.standardadditions.internet.applescript\"}]},\"system-events\":{\"patterns\":[{\"match\":\"\\\\b(audio (data|file))\\\\b\",\"name\":\"support.class.system-events.audio-file.applescript\"},{\"match\":\"\\\\b(alias(es)?|(Classic|local|network|system|user) domain objects?|disk( item)?s?|domains?|file( package)?s?|folders?|items?)\\\\b\",\"name\":\"support.class.system-events.disk-folder-file.applescript\"},{\"match\":\"\\\\b(delete|open|move)\\\\b\",\"name\":\"support.function.system-events.disk-folder-file.applescript\"},{\"match\":\"\\\\b(folder actions?|scripts?)\\\\b\",\"name\":\"support.class.system-events.folder-actions.applescript\"},{\"match\":\"\\\\b(attach action to|attached scripts|edit action of|remove action from)\\\\b\",\"name\":\"support.function.system-events.folder-actions.applescript\"},{\"match\":\"\\\\b(movie data|movie file)\\\\b\",\"name\":\"support.class.system-events.movie-file.applescript\"},{\"match\":\"\\\\b(log out|restart|shut down|sleep)\\\\b\",\"name\":\"support.function.system-events.power.applescript\"},{\"match\":\"\\\\b(((application |desk accessory )?process|(check|combo )?box)(es)?|(action|attribute|browser|(busy|progress|relevance) indicator|color well|column|drawer|group|grow area|image|incrementor|list|menu( bar)?( item)?|(menu |pop up |radio )?button|outline|(radio|tab|splitter) group|row|scroll (area|bar)|sheet|slider|splitter|static text|table|text (area|field)|tool bar|UI element|window)s?)\\\\b\",\"name\":\"support.class.system-events.processes.applescript\"},{\"match\":\"\\\\b(click|key code|keystroke|perform|select)\\\\b\",\"name\":\"support.function.system-events.processes.applescript\"},{\"match\":\"\\\\b(property list (file|item))\\\\b\",\"name\":\"support.class.system-events.property-list.applescript\"},{\"match\":\"\\\\b(annotation|QuickTime (data|file)|track)s?\\\\b\",\"name\":\"support.class.system-events.quicktime-file.applescript\"},{\"match\":\"\\\\b((abort|begin|end) transaction)\\\\b\",\"name\":\"support.function.system-events.system-events.applescript\"},{\"match\":\"\\\\b(XML (attribute|data|element|file)s?)\\\\b\",\"name\":\"support.class.system-events.xml.applescript\"},{\"match\":\"\\\\b(print settings|users?|login items?)\\\\b\",\"name\":\"support.class.sytem-events.other.applescript\"}]},\"textmate\":{\"patterns\":[{\"match\":\"\\\\b(print settings)\\\\b\",\"name\":\"support.class.textmate.applescript\"},{\"match\":\"\\\\b(get url|insert|reload bundles)\\\\b\",\"name\":\"support.function.textmate.applescript\"}]}},\"scopeName\":\"source.applescript\"}"));

const applescript = [
lang
];

export { applescript as default };
