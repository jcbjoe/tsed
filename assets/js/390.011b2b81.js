(window.webpackJsonp=window.webpackJsonp||[]).push([[390],{701:function(t,s,e){"use strict";e.r(s);var a=e(1),r=Object(a.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"registerresolverservice"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#registerresolverservice"}},[t._v("#")]),t._v(" registerResolverService "),e("Badge",{attrs:{text:"Function",type:"function"}})],1),t._v(" "),e("section",{staticClass:"symbol-info"},[e("table",{staticClass:"is-full-width"},[e("tbody",[e("tr",[e("th",[t._v("Module")]),e("td",[e("div",{staticClass:"lang-typescript"},[e("span",{staticClass:"token keyword"},[t._v("import")]),t._v(" { registerResolverService } "),e("span",{staticClass:"token keyword"},[t._v("from")]),t._v(" "),e("span",{staticClass:"token string"},[t._v('"@tsed/graphql"')])])])]),e("tr",[e("th",[t._v("Source")]),e("td",[e("a",{attrs:{href:"https://github.com/TypedProject/tsed/blob/v5.42.1/packages/graphql/src/registries/ResolverServiceRegistry.ts#L0-L0"}},[t._v("/packages/graphql/src/registries/ResolverServiceRegistry.ts")])])])])])]),t._v(" "),e("h2",{attrs:{id:"overview"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#overview"}},[t._v("#")]),t._v(" Overview")]),t._v(" "),e("div",{staticClass:"language-typescript"},[e("pre",{pre:!0,attrs:{class:"language-typescript"}},[e("code",{pre:!0,attrs:{class:"typescript-lang "}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" registerResolverService"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("provider"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("any")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" instance?"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("any")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" => "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")])])])]),t._v(" "),e("h2",{attrs:{id:"description"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#description"}},[t._v("#")]),t._v(" Description")]),t._v(" "),e("div",{pre:!0},[e("p",[t._v("Add a new service in the "),e("code",[t._v("ProviderRegistry")]),t._v(". This service will be built when "),e("code",[t._v("InjectorService")]),t._v(" will be loaded.")]),t._v(" "),e("h4",{pre:!0,attrs:{id:"example"}},[e("a",{pre:!0,attrs:{class:"header-anchor",href:"#example"}},[t._v("#")]),t._v(" Example")]),t._v(" "),e("div",{pre:!0,attrs:{class:"language-typescript line-numbers-mode"}},[e("pre",{pre:!0,attrs:{"v-pre":"",class:"language-typescript"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("registerResolverService"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" InjectorService"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"@tsed/graphql"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("MyFooService")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("constructor")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("getFoo")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"test"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("registerResolverService")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("provide"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" MyFooService"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// or")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("registerResolverService")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("MyFooService"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" injector "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("InjectorService")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\ninjector"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("load")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" myFooService "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" injector"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("get")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("MyFooService"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("MyFooService"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nmyFooService"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("getFoo")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// test")]),t._v("\n")])]),t._v(" "),e("div",{pre:!0,attrs:{class:"line-numbers-wrapper"}},[e("span",{pre:!0,attrs:{class:"line-number"}},[t._v("1")]),e("br"),e("span",{pre:!0,attrs:{class:"line-number"}},[t._v("2")]),e("br"),e("span",{pre:!0,attrs:{class:"line-number"}},[t._v("3")]),e("br"),e("span",{pre:!0,attrs:{class:"line-number"}},[t._v("4")]),e("br"),e("span",{pre:!0,attrs:{class:"line-number"}},[t._v("5")]),e("br"),e("span",{pre:!0,attrs:{class:"line-number"}},[t._v("6")]),e("br"),e("span",{pre:!0,attrs:{class:"line-number"}},[t._v("7")]),e("br"),e("span",{pre:!0,attrs:{class:"line-number"}},[t._v("8")]),e("br"),e("span",{pre:!0,attrs:{class:"line-number"}},[t._v("9")]),e("br"),e("span",{pre:!0,attrs:{class:"line-number"}},[t._v("10")]),e("br"),e("span",{pre:!0,attrs:{class:"line-number"}},[t._v("11")]),e("br"),e("span",{pre:!0,attrs:{class:"line-number"}},[t._v("12")]),e("br"),e("span",{pre:!0,attrs:{class:"line-number"}},[t._v("13")]),e("br"),e("span",{pre:!0,attrs:{class:"line-number"}},[t._v("14")]),e("br"),e("span",{pre:!0,attrs:{class:"line-number"}},[t._v("15")]),e("br"),e("span",{pre:!0,attrs:{class:"line-number"}},[t._v("16")]),e("br"),e("span",{pre:!0,attrs:{class:"line-number"}},[t._v("17")]),e("br"),e("span",{pre:!0,attrs:{class:"line-number"}},[t._v("18")]),e("br")])])])])}),[],!1,null,null,null);s.default=r.exports}}]);