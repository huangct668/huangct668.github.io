import{d as c,V as p,a2 as r,a1 as i,_ as s,A as o,G as l,$ as t}from"./vendor-vue-n6x0MXoC.js";import{G as u}from"./GuideLayout-BIMqwKL5.js";import{_ as g}from"./index-82OMxN3c.js";import"./vendor-antd-DQF42uR_.js";import"./vendor-x6-B0tTI3Tl.js";const m={class:"ch-toc"},v={class:"ch-toc__list"},y={id:"inject-keys",class:"ch-section"},f={class:"param-card"},b={class:"param-card__body"},k={class:"ch-code-block"},C=c({__name:"09-advanced",setup(w){function n(e){const a=document.getElementById(e);a==null||a.scrollIntoView({behavior:"smooth",block:"start"})}return(e,a)=>(p(),r(u,null,{default:i(()=>[a[134]||(a[134]=s("div",{class:"ch-header"},[s("span",{class:"ch-header__num"},"第 9 章"),s("h1",{class:"ch-header__title"},"进阶技巧"),s("p",{class:"ch-header__desc"}," 深入了解 FlowDesignerLayout 的 Provide/Inject 机制、ref API 访问、自定义插槽开发等高级特性。 ")],-1)),s("nav",m,[a[4]||(a[4]=s("h3",{class:"ch-toc__title"},"目录",-1)),s("ul",v,[s("li",null,[s("a",{href:"#provide-inject",onClick:a[0]||(a[0]=o(d=>n("provide-inject"),["prevent"]))},"Provide/Inject 数据注入")]),s("li",null,[s("a",{href:"#inject-keys",onClick:a[1]||(a[1]=o(d=>n("inject-keys"),["prevent"]))},"注入参数详解")]),s("li",null,[s("a",{href:"#slot-scope",onClick:a[2]||(a[2]=o(d=>n("slot-scope"),["prevent"]))},"Slot Scope 使用模式")]),s("li",null,[s("a",{href:"#best-practices",onClick:a[3]||(a[3]=o(d=>n("best-practices"),["prevent"]))},"最佳实践")])])]),a[135]||(a[135]=s("section",{id:"provide-inject",class:"ch-section"},[s("h2",{class:"ch-section__title"},"9.1 Provide/Inject 数据注入"),s("p",{class:"ch-text"},[l(" FlowDesignerLayout 通过 Vue 3 的 "),s("code",null,"provide/inject"),l(" 机制向子组件提供了 "),s("strong",null,"8 个核心数据"),l("， 让你可以在自定义组件中访问设计器的实例、权限配置、画布状态等信息。 ")]),s("div",{class:"provide-overview-table"},[s("table",null,[s("thead",null,[s("tr",null,[s("th",null,"参数名称"),s("th",null,"类型"),s("th",null,"用途概述")])]),s("tbody",null,[s("tr",null,[s("td",null,[s("code",null,"designer")]),s("td",null,"ComputedRef<FlowDesigner | null>"),s("td",null,"FlowDesigner 核心实例，提供所有核心 API")]),s("tr",null,[s("td",null,[s("code",null,"graph")]),s("td",null,"ComputedRef<Graph | null>"),s("td",null,"X6 Graph 实例，操作画布和单元格")]),s("tr",null,[s("td",null,[s("code",null,"designerMode")]),s("td",null,"Ref<DesignerMode>"),s("td",null,"当前设计器模式（design/readonly/preview）")]),s("tr",null,[s("td",null,[s("code",null,"capabilities")]),s("td",null,"ComputedRef<ModeCapabilities | null>"),s("td",null,"当前模式的权限配置，控制各项操作权限")]),s("tr",null,[s("td",null,[s("code",null,"selectedCells")]),s("td",null,"Ref<SelectedCell[]>"),s("td",null,"当前选中的单元格列表")]),s("tr",null,[s("td",null,[s("code",null,"canvasConfig")]),s("td",null,"Ref<CanvasConfig | null>"),s("td",null,"画布配置对象，包含网格、背景、连线等配置")]),s("tr",null,[s("td",null,[s("code",null,"updateCanvasConfig")]),s("td",null,"Function"),s("td",null,"更新画布配置的方法")]),s("tr",null,[s("td",null,[s("code",null,"flowDesigner")]),s("td",null,"Ref<FlowDesigner | undefined>"),s("td",null,"FlowDesigner 实例的响应式引用")])])])]),s("div",{class:"ch-callout ch-callout--info"},[s("strong",null,"💡 两种使用方式："),s("ul",null,[s("li",null,[s("strong",null,"方式一：Slot Scope"),l(" - 推荐用于自定义插槽内容，数据通过 slot props 传递")]),s("li",null,[s("strong",null,"方式二：Direct Inject"),l(" - 用于内置核心组件，通过 inject() 获取数据")])])])],-1)),s("section",y,[a[125]||(a[125]=s("h2",{class:"ch-section__title"},"9.2 注入参数详解",-1)),a[126]||(a[126]=s("p",{class:"ch-text"},"以下是 FlowDesignerLayout 提供的 8 个注入参数及其详细说明：",-1)),a[127]||(a[127]=s("div",{class:"param-card"},[s("div",{class:"param-card__header"},[s("h3",{class:"param-card__title"},[s("span",{class:"param-key"},"designer"),s("span",{class:"param-type"},"ComputedRef<FlowDesigner | null>")])]),s("div",{class:"param-card__body"},[s("p",{class:"param-desc"}," FlowDesigner 核心实例，提供设计器的所有核心 API 方法。通过 slot props 或 inject 获取。 "),s("div",{class:"param-usage"},[s("h4",null,"主要方法："),s("ul",null,[s("li",null,[s("code",null,"getGraph()"),l(" - 获取 X6 Graph 实例")]),s("li",null,[s("code",null,"getMeta()"),l(" / "),s("code",null,"setMeta()"),l(" - 获取/设置流程元数据")]),s("li",null,[s("code",null,"save()"),l(" / "),s("code",null,"load()"),l(" - 保存/加载流程数据")]),s("li",null,[s("code",null,"undo()"),l(" / "),s("code",null,"redo()"),l(" - 撤销/重做操作")]),s("li",null,[s("code",null,"groupSelectedNodes()"),l(" - 将选中节点成组")]),s("li",null,[s("code",null,"ungroupSelected()"),l(" - 解散选中的分组")]),s("li",null,[s("code",null,"updateCanvasConfig()"),l(" - 更新画布配置")]),s("li",null,[s("code",null,"setMode()"),l(" - 切换设计器模式")]),s("li",null,[s("code",null,"zoom()"),l(" / "),s("code",null,"zoomTo()"),l(" - 缩放画布")]),s("li",null,[s("code",null,"export()"),l(" - 导出流程（JSON/PNG/SVG）")])])]),s("div",{class:"ch-code-block"},[s("div",{class:"code-header"},"使用示例：通过 Slot Scope 使用"),s("pre",null,[s("code",null,[s("span",{class:"code-tag"},"<template>"),l(`
  `),s("span",{class:"code-tag"},"<FlowDesignerLayout"),l(),s("span",{class:"code-attr"},"v-model:mode"),l("="),s("span",{class:"code-string"},'"mode"'),s("span",{class:"code-tag"},">"),l(`
    `),s("span",{class:"code-tag"},"<template"),l(),s("span",{class:"code-attr"},"#toolbar"),l("="),s("span",{class:"code-string"},'"{ designer }"'),s("span",{class:"code-tag"},">"),l(`
      `),s("span",{class:"code-tag"},"<a-button"),l(),s("span",{class:"code-attr"},"@click"),l("="),s("span",{class:"code-string"},'"handleSave(designer)"'),s("span",{class:"code-tag"},">"),l(`
        保存
      `),s("span",{class:"code-tag"},"</a-button>"),l(`
      `),s("span",{class:"code-tag"},"<a-button"),l(),s("span",{class:"code-attr"},"@click"),l("="),s("span",{class:"code-string"},'"designer?.undo()"'),s("span",{class:"code-tag"},">"),l(`
        撤销
      `),s("span",{class:"code-tag"},"</a-button>"),l(`
    `),s("span",{class:"code-tag"},"</template>"),l(`
  `),s("span",{class:"code-tag"},"</FlowDesignerLayout>"),l(`
`),s("span",{class:"code-tag"},"</template>"),l(`

`),s("span",{class:"code-tag"},"<script"),l(),s("span",{class:"code-attr"},"setup"),l(),s("span",{class:"code-attr"},"lang"),l("="),s("span",{class:"code-string"},'"ts"'),s("span",{class:"code-tag"},">"),l(`
`),s("span",{class:"code-keyword"},"import"),l(" type { FlowDesigner } from "),s("span",{class:"code-string"},"'@/components/FlowDesigner'"),l(`

`),s("span",{class:"code-keyword"},"function"),l(),s("span",{class:"code-function"},"handleSave"),l("(designer: FlowDesigner | "),s("span",{class:"code-keyword"},"null"),l(`) {
  `),s("span",{class:"code-keyword"},"if"),l(" (!designer) "),s("span",{class:"code-keyword"},"return"),l(`
  designer.save()
}
`),s("span",{class:"code-tag"},"<\/script>")])])]),s("div",{class:"ch-code-block"},[s("div",{class:"code-header"},"使用示例：在自定义组件中通过 inject 使用"),s("pre",null,[s("code",null,[s("span",{class:"code-comment"},"// CustomToolbar.vue"),l(`
`),s("span",{class:"code-tag"},"<script"),l(),s("span",{class:"code-attr"},"setup"),l(),s("span",{class:"code-attr"},"lang"),l("="),s("span",{class:"code-string"},'"ts"'),s("span",{class:"code-tag"},">"),l(`
`),s("span",{class:"code-keyword"},"import"),l(" { inject, computed } from "),s("span",{class:"code-string"},"'vue'"),l(`
`),s("span",{class:"code-keyword"},"import"),l(" type { ComputedRef } from "),s("span",{class:"code-string"},"'vue'"),l(`
`),s("span",{class:"code-keyword"},"import"),l(" type { FlowDesigner } from "),s("span",{class:"code-string"},"'@/components/FlowDesigner'"),l(`

`),s("span",{class:"code-keyword"},"const"),l(" designer = inject<ComputedRef<FlowDesigner | "),s("span",{class:"code-keyword"},"null"),l(">>("),s("span",{class:"code-string"},"'designer'"),l(`)

`),s("span",{class:"code-keyword"},"const"),l(),s("span",{class:"code-function"},"handleGroup"),l(` = () => {
  `),s("span",{class:"code-keyword"},"if"),l(" (!designer?.value) "),s("span",{class:"code-keyword"},"return"),l(`
  designer.value.groupSelectedNodes()
}

`),s("span",{class:"code-keyword"},"const"),l(),s("span",{class:"code-function"},"handleExport"),l(` = () => {
  `),s("span",{class:"code-keyword"},"if"),l(" (!designer?.value) "),s("span",{class:"code-keyword"},"return"),l(`
  `),s("span",{class:"code-keyword"},"const"),l(" data = designer.value.export("),s("span",{class:"code-string"},"'json'"),l(`)
  console.log(`),s("span",{class:"code-string"},"'导出数据：'"),l(`, data)
}
`),s("span",{class:"code-tag"},"<\/script>")])])])])],-1)),s("div",f,[a[124]||(a[124]=s("div",{class:"param-card__header"},[s("h3",{class:"param-card__title"},[s("span",{class:"param-key"},"graph"),s("span",{class:"param-type"},"ComputedRef<Graph | null>")])],-1)),s("div",b,[a[121]||(a[121]=s("p",{class:"param-desc"}," X6 Graph 实例，可直接调用 AntV X6 的所有 API 进行底层操作。 ",-1)),a[122]||(a[122]=s("div",{class:"param-usage"},[s("h4",null,"常用方法："),s("ul",null,[s("li",null,[s("code",null,"getCellById(id)"),l(" - 根据 ID 获取节点/边")]),s("li",null,[s("code",null,"getNodes()"),l(" - 获取所有节点")]),s("li",null,[s("code",null,"getEdges()"),l(" - 获取所有边")]),s("li",null,[s("code",null,"addNode()"),l(" - 添加节点")]),s("li",null,[s("code",null,"removeCell()"),l(" - 删除单元格")]),s("li",null,[s("code",null,"zoom()"),l(" - 缩放画布")])])],-1)),a[123]||(a[123]=s("div",{class:"ch-code-block"},[s("div",{class:"code-header"},"使用示例：通过 Slot Scope 使用"),s("pre",null,[s("code",null,[s("span",{class:"code-tag"},"<template"),l(),s("span",{class:"code-attr"},"#properties"),l("="),s("span",{class:"code-string"},'"{ graph, selectedCells }"'),s("span",{class:"code-tag"},">"),l(`
  `),s("span",{class:"code-tag"},"<div"),l(),s("span",{class:"code-attr"},"v-if"),l("="),s("span",{class:"code-string"},'"selectedCells[0]"'),s("span",{class:"code-tag"},">"),l(`
    `),s("span",{class:"code-tag"},"<a-button"),l(),s("span",{class:"code-attr"},"@click"),l("="),s("span",{class:"code-string"},'"handleGetNeighbors(graph, selectedCells[0].id)"'),s("span",{class:"code-tag"},">"),l(`
      查看邻居节点
    `),s("span",{class:"code-tag"},"</a-button>"),l(`
  `),s("span",{class:"code-tag"},"</div>"),l(`
`),s("span",{class:"code-tag"},"</template>"),l(`

`),s("span",{class:"code-tag"},"<script"),l(),s("span",{class:"code-attr"},"setup"),l(),s("span",{class:"code-attr"},"lang"),l("="),s("span",{class:"code-string"},'"ts"'),s("span",{class:"code-tag"},">"),l(`
`),s("span",{class:"code-keyword"},"import"),l(" type { Graph } from "),s("span",{class:"code-string"},"'@antv/x6'"),l(`

`),s("span",{class:"code-keyword"},"function"),l(),s("span",{class:"code-function"},"handleGetNeighbors"),l("(graph: Graph | "),s("span",{class:"code-keyword"},"null"),l(`, nodeId: string) {
  `),s("span",{class:"code-keyword"},"if"),l(" (!graph) "),s("span",{class:"code-keyword"},"return"),l(`
  `),s("span",{class:"code-keyword"},"const"),l(` node = graph.getCellById(nodeId)
  `),s("span",{class:"code-keyword"},"if"),l(" (!node) "),s("span",{class:"code-keyword"},"return"),l(`
  `),s("span",{class:"code-keyword"},"const"),l(` neighbors = graph.getNeighbors(node)
  console.log(`),s("span",{class:"code-string"},"'邻居节点：'"),l(`, neighbors)
}
`),s("span",{class:"code-tag"},"<\/script>")])])],-1)),s("div",k,[a[120]||(a[120]=s("div",{class:"code-header"},"使用示例：在自定义组件中通过 inject 使用",-1)),s("pre",null,[s("code",null,[a[5]||(a[5]=s("span",{class:"code-comment"},"// CustomNodeInfo.vue",-1)),a[6]||(a[6]=l(`
`,-1)),a[7]||(a[7]=s("span",{class:"code-tag"},"<template>",-1)),a[8]||(a[8]=l(`
  `,-1)),a[9]||(a[9]=s("span",{class:"code-tag"},"<div",-1)),a[10]||(a[10]=l()),a[11]||(a[11]=s("span",{class:"code-attr"},"class",-1)),a[12]||(a[12]=l("=",-1)),a[13]||(a[13]=s("span",{class:"code-string"},'"node-info"',-1)),a[14]||(a[14]=s("span",{class:"code-tag"},">",-1)),a[15]||(a[15]=l(`
    `,-1)),a[16]||(a[16]=s("span",{class:"code-tag"},"<h4>",-1)),a[17]||(a[17]=l("画布信息",-1)),a[18]||(a[18]=s("span",{class:"code-tag"},"</h4>",-1)),a[19]||(a[19]=l(`
    `,-1)),a[20]||(a[20]=s("span",{class:"code-tag"},"<p>",-1)),l("节点数量: "+t(e.nodeCount),1),a[21]||(a[21]=s("span",{class:"code-tag"},"</p>",-1)),a[22]||(a[22]=l(`
    `,-1)),a[23]||(a[23]=s("span",{class:"code-tag"},"<p>",-1)),l("连线数量: "+t(e.edgeCount),1),a[24]||(a[24]=s("span",{class:"code-tag"},"</p>",-1)),a[25]||(a[25]=l(`
    `,-1)),a[26]||(a[26]=s("span",{class:"code-tag"},"<a-button",-1)),a[27]||(a[27]=l()),a[28]||(a[28]=s("span",{class:"code-attr"},"@click",-1)),a[29]||(a[29]=l("=",-1)),a[30]||(a[30]=s("span",{class:"code-string"},'"handleZoomIn"',-1)),a[31]||(a[31]=s("span",{class:"code-tag"},">",-1)),a[32]||(a[32]=l("放大",-1)),a[33]||(a[33]=s("span",{class:"code-tag"},"</a-button>",-1)),a[34]||(a[34]=l(`
    `,-1)),a[35]||(a[35]=s("span",{class:"code-tag"},"<a-button",-1)),a[36]||(a[36]=l()),a[37]||(a[37]=s("span",{class:"code-attr"},"@click",-1)),a[38]||(a[38]=l("=",-1)),a[39]||(a[39]=s("span",{class:"code-string"},'"handleZoomOut"',-1)),a[40]||(a[40]=s("span",{class:"code-tag"},">",-1)),a[41]||(a[41]=l("缩小",-1)),a[42]||(a[42]=s("span",{class:"code-tag"},"</a-button>",-1)),a[43]||(a[43]=l(`
  `,-1)),a[44]||(a[44]=s("span",{class:"code-tag"},"</div>",-1)),a[45]||(a[45]=l(`
`,-1)),a[46]||(a[46]=s("span",{class:"code-tag"},"</template>",-1)),a[47]||(a[47]=l(`

`,-1)),a[48]||(a[48]=s("span",{class:"code-tag"},"<script",-1)),a[49]||(a[49]=l()),a[50]||(a[50]=s("span",{class:"code-attr"},"setup",-1)),a[51]||(a[51]=l()),a[52]||(a[52]=s("span",{class:"code-attr"},"lang",-1)),a[53]||(a[53]=l("=",-1)),a[54]||(a[54]=s("span",{class:"code-string"},'"ts"',-1)),a[55]||(a[55]=s("span",{class:"code-tag"},">",-1)),a[56]||(a[56]=l(`
`,-1)),a[57]||(a[57]=s("span",{class:"code-keyword"},"import",-1)),a[58]||(a[58]=l(" { inject, computed } from ",-1)),a[59]||(a[59]=s("span",{class:"code-string"},"'vue'",-1)),a[60]||(a[60]=l(`
`,-1)),a[61]||(a[61]=s("span",{class:"code-keyword"},"import",-1)),a[62]||(a[62]=l(" type { ComputedRef } from ",-1)),a[63]||(a[63]=s("span",{class:"code-string"},"'vue'",-1)),a[64]||(a[64]=l(`
`,-1)),a[65]||(a[65]=s("span",{class:"code-keyword"},"import",-1)),a[66]||(a[66]=l(" type { Graph } from ",-1)),a[67]||(a[67]=s("span",{class:"code-string"},"'@antv/x6'",-1)),a[68]||(a[68]=l(`

`,-1)),a[69]||(a[69]=s("span",{class:"code-comment"},"// 注入 graph 实例",-1)),a[70]||(a[70]=l(`
`,-1)),a[71]||(a[71]=s("span",{class:"code-keyword"},"const",-1)),a[72]||(a[72]=l(" graph = inject<ComputedRef<Graph | ",-1)),a[73]||(a[73]=s("span",{class:"code-keyword"},"null",-1)),a[74]||(a[74]=l(">>(",-1)),a[75]||(a[75]=s("span",{class:"code-string"},"'graph'",-1)),a[76]||(a[76]=l(`)

`,-1)),a[77]||(a[77]=s("span",{class:"code-comment"},"// 计算节点和边的数量",-1)),a[78]||(a[78]=l(`
`,-1)),a[79]||(a[79]=s("span",{class:"code-keyword"},"const",-1)),a[80]||(a[80]=l(` nodeCount = computed(() => {
  `,-1)),a[81]||(a[81]=s("span",{class:"code-keyword"},"return",-1)),a[82]||(a[82]=l(" graph?.value?.getNodes().length ?? ",-1)),a[83]||(a[83]=s("span",{class:"code-number"},"0",-1)),a[84]||(a[84]=l(`
})

`,-1)),a[85]||(a[85]=s("span",{class:"code-keyword"},"const",-1)),a[86]||(a[86]=l(` edgeCount = computed(() => {
  `,-1)),a[87]||(a[87]=s("span",{class:"code-keyword"},"return",-1)),a[88]||(a[88]=l(" graph?.value?.getEdges().length ?? ",-1)),a[89]||(a[89]=s("span",{class:"code-number"},"0",-1)),a[90]||(a[90]=l(`
})

`,-1)),a[91]||(a[91]=s("span",{class:"code-comment"},"// 放大画布",-1)),a[92]||(a[92]=l(`
`,-1)),a[93]||(a[93]=s("span",{class:"code-keyword"},"const",-1)),a[94]||(a[94]=l()),a[95]||(a[95]=s("span",{class:"code-function"},"handleZoomIn",-1)),a[96]||(a[96]=l(` = () => {
  `,-1)),a[97]||(a[97]=s("span",{class:"code-keyword"},"if",-1)),a[98]||(a[98]=l(" (!graph?.value) ",-1)),a[99]||(a[99]=s("span",{class:"code-keyword"},"return",-1)),a[100]||(a[100]=l(`
  `,-1)),a[101]||(a[101]=s("span",{class:"code-keyword"},"const",-1)),a[102]||(a[102]=l(` currentZoom = graph.value.zoom()
  graph.value.zoom(currentZoom + `,-1)),a[103]||(a[103]=s("span",{class:"code-number"},"0.1",-1)),a[104]||(a[104]=l(`)
}

`,-1)),a[105]||(a[105]=s("span",{class:"code-comment"},"// 缩小画布",-1)),a[106]||(a[106]=l(`
`,-1)),a[107]||(a[107]=s("span",{class:"code-keyword"},"const",-1)),a[108]||(a[108]=l()),a[109]||(a[109]=s("span",{class:"code-function"},"handleZoomOut",-1)),a[110]||(a[110]=l(` = () => {
  `,-1)),a[111]||(a[111]=s("span",{class:"code-keyword"},"if",-1)),a[112]||(a[112]=l(" (!graph?.value) ",-1)),a[113]||(a[113]=s("span",{class:"code-keyword"},"return",-1)),a[114]||(a[114]=l(`
  `,-1)),a[115]||(a[115]=s("span",{class:"code-keyword"},"const",-1)),a[116]||(a[116]=l(` currentZoom = graph.value.zoom()
  graph.value.zoom(currentZoom - `,-1)),a[117]||(a[117]=s("span",{class:"code-number"},"0.1",-1)),a[118]||(a[118]=l(`)
}
`,-1)),a[119]||(a[119]=s("span",{class:"code-tag"},"<\/script>",-1))])])])])]),a[128]||(a[128]=s("div",{class:"param-card"},[s("div",{class:"param-card__header"},[s("h3",{class:"param-card__title"},[s("span",{class:"param-key"},"designerMode"),s("span",{class:"param-type"},"Ref<DesignerMode>")])]),s("div",{class:"param-card__body"},[s("p",{class:"param-desc"},[l(" 当前设计器模式，可能的值："),s("code",null,"'design'"),l(" | "),s("code",null,"'readonly'"),l(" | "),s("code",null,"'preview'"),l(" | 自定义模式。 ")]),s("div",{class:"ch-code-block"},[s("div",{class:"code-header"},"使用示例"),s("pre",null,[s("code",null,[s("span",{class:"code-tag"},"<template"),l(),s("span",{class:"code-attr"},"#properties"),l("="),s("span",{class:"code-string"},'"{ designerMode }"'),s("span",{class:"code-tag"},">"),l(`
  `),s("span",{class:"code-tag"},"<a-form"),l(),s("span",{class:"code-attr"},":disabled"),l("="),s("span",{class:"code-string"},`"designerMode !== 'design'"`),s("span",{class:"code-tag"},">"),l(`
    `),s("span",{class:"code-tag"},"<a-form-item"),l(),s("span",{class:"code-attr"},"label"),l("="),s("span",{class:"code-string"},'"节点名称"'),s("span",{class:"code-tag"},">"),l(`
      `),s("span",{class:"code-tag"},"<a-input"),l(),s("span",{class:"code-attr"},"v-model"),l("="),s("span",{class:"code-string"},'"nodeName"'),l(),s("span",{class:"code-tag"},"/>"),l(`
    `),s("span",{class:"code-tag"},"</a-form-item>"),l(`
  `),s("span",{class:"code-tag"},"</a-form>"),l(`
  
  `),s("span",{class:"code-tag"},"<div"),l(),s("span",{class:"code-attr"},"v-if"),l("="),s("span",{class:"code-string"},`"designerMode === 'readonly'"`),l(),s("span",{class:"code-attr"},"class"),l("="),s("span",{class:"code-string"},'"readonly-tip"'),s("span",{class:"code-tag"},">"),l(`
    当前为只读模式，无法编辑
  `),s("span",{class:"code-tag"},"</div>"),l(`
`),s("span",{class:"code-tag"},"</template>")])])])])],-1)),a[129]||(a[129]=s("div",{class:"param-card"},[s("div",{class:"param-card__header"},[s("h3",{class:"param-card__title"},[s("span",{class:"param-key"},"capabilities"),s("span",{class:"param-type"},"ComputedRef<ModeCapabilities>")])]),s("div",{class:"param-card__body"},[s("p",{class:"param-desc"}," 当前模式的权限配置对象，包含 38 个细粒度权限字段。 "),s("div",{class:"param-usage"},[s("h4",null,"常用权限字段："),s("ul",null,[s("li",null,[s("code",null,"canDrag"),l(" - 是否可拖拽节点")]),s("li",null,[s("code",null,"canDelete"),l(" - 是否可删除")]),s("li",null,[s("code",null,"canCopy"),l(" / "),s("code",null,"canPaste"),l(" - 复制粘贴权限")]),s("li",null,[s("code",null,"canUndo"),l(" / "),s("code",null,"canRedo"),l(" - 撤销重做权限")]),s("li",null,[s("code",null,"showToolbar"),l(" / "),s("code",null,"showNodePalette"),l(" - UI 显示权限")]),s("li",null,"更多权限请参考第 5 章权限系统")])]),s("div",{class:"ch-code-block"},[s("div",{class:"code-header"},"使用示例"),s("pre",null,[s("code",null,[s("span",{class:"code-tag"},"<template"),l(),s("span",{class:"code-attr"},"#toolbar"),l("="),s("span",{class:"code-string"},'"{ capabilities, graph, selectedCells }"'),s("span",{class:"code-tag"},">"),l(`
  `),s("span",{class:"code-tag"},"<a-space>"),l(`
    `),s("span",{class:"code-tag"},"<a-button"),l(`
      `),s("span",{class:"code-attr"},":disabled"),l("="),s("span",{class:"code-string"},'"!capabilities.canDelete || selectedCells.length === 0"'),l(`
      `),s("span",{class:"code-attr"},"@click"),l("="),s("span",{class:"code-string"},'"handleDelete(graph, selectedCells)"'),l(`
    `),s("span",{class:"code-tag"},">"),l(`
      删除
    `),s("span",{class:"code-tag"},"</a-button>"),l(`
    
    `),s("span",{class:"code-tag"},"<a-button"),l(`
      `),s("span",{class:"code-attr"},":disabled"),l("="),s("span",{class:"code-string"},'"!capabilities.canGroup"'),l(`
      `),s("span",{class:"code-attr"},"@click"),l("="),s("span",{class:"code-string"},'"designer?.groupSelectedNodes()"'),l(`
    `),s("span",{class:"code-tag"},">"),l(`
      成组
    `),s("span",{class:"code-tag"},"</a-button>"),l(`
    
    `),s("span",{class:"code-tag"},"<a-button"),l(`
      `),s("span",{class:"code-attr"},":disabled"),l("="),s("span",{class:"code-string"},'"!capabilities.canUndo"'),l(`
      `),s("span",{class:"code-attr"},"@click"),l("="),s("span",{class:"code-string"},'"designer?.undo()"'),l(`
    `),s("span",{class:"code-tag"},">"),l(`
      撤销
    `),s("span",{class:"code-tag"},"</a-button>"),l(`
  `),s("span",{class:"code-tag"},"</a-space>"),l(`
`),s("span",{class:"code-tag"},"</template>"),l(`

`),s("span",{class:"code-tag"},"<script"),l(),s("span",{class:"code-attr"},"setup"),l(),s("span",{class:"code-attr"},"lang"),l("="),s("span",{class:"code-string"},'"ts"'),s("span",{class:"code-tag"},">"),l(`
`),s("span",{class:"code-keyword"},"function"),l(),s("span",{class:"code-function"},"handleDelete"),l(`(graph, selectedCells) {
  `),s("span",{class:"code-keyword"},"if"),l(" (!graph || selectedCells.length === "),s("span",{class:"code-number"},"0"),l(") "),s("span",{class:"code-keyword"},"return"),l(`
  selectedCells.forEach(`),s("span",{class:"code-function"},"cell"),l(` => {
    `),s("span",{class:"code-keyword"},"const"),l(` cellInstance = graph.getCellById(cell.id)
    `),s("span",{class:"code-keyword"},"if"),l(` (cellInstance) graph.removeCell(cellInstance)
  })
}
`),s("span",{class:"code-tag"},"<\/script>")])])])])],-1)),a[130]||(a[130]=s("div",{class:"param-card"},[s("div",{class:"param-card__header"},[s("h3",{class:"param-card__title"},[s("span",{class:"param-key"},"selectedCells"),s("span",{class:"param-type"},"Ref<SelectedCell[]>")])]),s("div",{class:"param-card__body"},[s("p",{class:"param-desc"},[l(" 当前选中的单元格列表，每个元素包含 "),s("code",null,"id"),l("、"),s("code",null,"type"),l("（'node' | 'edge'）、"),s("code",null,"shape"),l("。 ")]),s("div",{class:"ch-code-block"},[s("div",{class:"code-header"},"使用示例"),s("pre",null,[s("code",null,[s("span",{class:"code-tag"},"<template"),l(),s("span",{class:"code-attr"},"#properties"),l("="),s("span",{class:"code-string"},'"{ selectedCells, graph }"'),s("span",{class:"code-tag"},">"),l(`
  `),s("span",{class:"code-tag"},"<div"),l(),s("span",{class:"code-attr"},"v-if"),l("="),s("span",{class:"code-string"},'"selectedCells.length === 0"'),s("span",{class:"code-tag"},">"),l(`
    未选中任何元素
  `),s("span",{class:"code-tag"},"</div>"),l(`
  
  `),s("span",{class:"code-tag"},"<div"),l(),s("span",{class:"code-attr"},"v-else-if"),l("="),s("span",{class:"code-string"},'"selectedCells.length === 1"'),s("span",{class:"code-tag"},">"),l(`
    `),s("span",{class:"code-tag"},"<h4>"),l("{{ selectedCells[0].type === 'node' ? '节点' : '连线' }}属性"),s("span",{class:"code-tag"},"</h4>"),l(`
    `),s("span",{class:"code-tag"},"<p>"),l("ID: {{ selectedCells[0].id }}"),s("span",{class:"code-tag"},"</p>"),l(`
    `),s("span",{class:"code-tag"},"<p>"),l("类型: {{ selectedCells[0].shape }}"),s("span",{class:"code-tag"},"</p>"),l(`
  `),s("span",{class:"code-tag"},"</div>"),l(`
  
  `),s("span",{class:"code-tag"},"<div"),l(),s("span",{class:"code-attr"},"v-else"),s("span",{class:"code-tag"},">"),l(`
    已选中 {{ selectedCells.length }} 个元素
  `),s("span",{class:"code-tag"},"</div>"),l(`
`),s("span",{class:"code-tag"},"</template>")])])])])],-1)),a[131]||(a[131]=s("div",{class:"param-card"},[s("div",{class:"param-card__header"},[s("h3",{class:"param-card__title"},[s("span",{class:"param-key"},"canvasConfig"),s("span",{class:"param-type"},"Ref<CanvasConfig | null>")])]),s("div",{class:"param-card__body"},[s("p",{class:"param-desc"}," 画布配置对象，包含网格、背景、连线、小地图等所有配置项。 "),s("div",{class:"param-usage"},[s("h4",null,"配置结构："),s("ul",null,[s("li",null,[s("code",null,"grid"),l(" - 网格配置（enabled、size、color）")]),s("li",null,[s("code",null,"background"),l(" - 背景配置（color、image）")]),s("li",null,[s("code",null,"minimap"),l(" - 小地图配置（enabled、width、height）")]),s("li",null,[s("code",null,"connection"),l(" - 连线配置（router、connector）")]),s("li",null,[s("code",null,"tooltip"),l(" - 提示框配置（fontSize、color、backgroundColor）")])])]),s("div",{class:"ch-callout ch-callout--warning"},[s("strong",null,"⚠️ 注意："),l(" 直接修改 canvasConfig 不会生效，需要配合 "),s("code",null,"updateCanvasConfig"),l(" 方法使用。 ")])])],-1)),a[132]||(a[132]=s("div",{class:"param-card"},[s("div",{class:"param-card__header"},[s("h3",{class:"param-card__title"},[s("span",{class:"param-key"},"updateCanvasConfig"),s("span",{class:"param-type"},"(patch: Partial<CanvasConfig>) => void")])]),s("div",{class:"param-card__body"},[s("p",{class:"param-desc"}," 更新画布配置的方法，支持部分更新（Partial 类型）。 "),s("div",{class:"ch-code-block"},[s("div",{class:"code-header"},"使用示例"),s("pre",null,[s("code",null,[s("span",{class:"code-tag"},"<template"),l(),s("span",{class:"code-attr"},"#properties"),l("="),s("span",{class:"code-string"},'"{ canvasConfig, updateCanvasConfig }"'),s("span",{class:"code-tag"},">"),l(`
  `),s("span",{class:"code-tag"},"<a-form>"),l(`
    `),s("span",{class:"code-tag"},"<a-form-item"),l(),s("span",{class:"code-attr"},"label"),l("="),s("span",{class:"code-string"},'"显示网格"'),s("span",{class:"code-tag"},">"),l(`
      `),s("span",{class:"code-tag"},"<a-switch"),l(`
        `),s("span",{class:"code-attr"},":checked"),l("="),s("span",{class:"code-string"},'"canvasConfig?.grid?.enabled"'),l(`
        `),s("span",{class:"code-attr"},"@change"),l("="),s("span",{class:"code-string"},`"(val) => updateCanvasConfig({ 
          grid: { ...canvasConfig.grid, enabled: val } 
        })"`),l(`
      `),s("span",{class:"code-tag"},"/>"),l(`
    `),s("span",{class:"code-tag"},"</a-form-item>"),l(`
    
    `),s("span",{class:"code-tag"},"<a-form-item"),l(),s("span",{class:"code-attr"},"label"),l("="),s("span",{class:"code-string"},'"网格大小"'),s("span",{class:"code-tag"},">"),l(`
      `),s("span",{class:"code-tag"},"<a-input-number"),l(`
        `),s("span",{class:"code-attr"},":value"),l("="),s("span",{class:"code-string"},'"canvasConfig?.grid?.size"'),l(`
        `),s("span",{class:"code-attr"},"@change"),l("="),s("span",{class:"code-string"},`"(val) => updateCanvasConfig({ 
          grid: { ...canvasConfig.grid, size: val } 
        })"`),l(`
      `),s("span",{class:"code-tag"},"/>"),l(`
    `),s("span",{class:"code-tag"},"</a-form-item>"),l(`
  `),s("span",{class:"code-tag"},"</a-form>"),l(`
`),s("span",{class:"code-tag"},"</template>")])])])])],-1)),a[133]||(a[133]=s("div",{class:"param-card"},[s("div",{class:"param-card__header"},[s("h3",{class:"param-card__title"},[s("span",{class:"param-key"},"flowDesigner"),s("span",{class:"param-type"},"Ref<FlowDesigner | null>")])]),s("div",{class:"param-card__body"},[s("p",{class:"param-desc"},[l(" FlowDesigner 的响应式引用，与 "),s("code",null,"designer"),l(" 的区别在于类型（Ref vs ComputedRef）。 ")]),s("div",{class:"ch-callout ch-callout--info"},[s("strong",null,"💡 何时使用："),s("ul",null,[s("li",null,[l("需要在 watchEffect 中追踪 designer 变化时使用 "),s("code",null,"flowDesigner")]),s("li",null,[l("一般场景使用 "),s("code",null,"designer"),l(" 即可")])])])])],-1))]),a[136]||(a[136]=s("section",{id:"slot-scope",class:"ch-section"},[s("h2",{class:"ch-section__title"},"9.3 Slot Scope 使用模式"),s("p",{class:"ch-text"}," 推荐在自定义插槽中使用 Slot Scope 方式获取数据，无需 inject，更加直观和类型安全。 "),s("div",{class:"scope-table"},[s("h3",null,"可用的 Slot Scopes"),s("table",null,[s("thead",null,[s("tr",null,[s("th",null,"插槽名称"),s("th",null,"可用参数"),s("th",null,"用途")])]),s("tbody",null,[s("tr",null,[s("td",null,[s("code",null,"#toolbar")]),s("td",null,"designer, graph, capabilities, zoomPercent, hasSelection, canUndo, canRedo, onUndo, onRedo, onZoomIn, ..."),s("td",null,"自定义工具栏")]),s("tr",null,[s("td",null,[s("code",null,"#palette")]),s("td",null,"designer, graph, capabilities, currentMode, onStartDrag"),s("td",null,"自定义节点面板")]),s("tr",null,[s("td",null,[s("code",null,"#properties")]),s("td",null,"designer, graph, selectedCells, capabilities, currentMode"),s("td",null,"自定义属性面板")]),s("tr",null,[s("td",null,[s("code",null,"#node-tooltip")]),s("td",null,"node, data, designer, graph"),s("td",null,"自定义节点 Tooltip")]),s("tr",null,[s("td",null,[s("code",null,"#edge-tooltip")]),s("td",null,"edge, data, designer, graph"),s("td",null,"自定义连线 Tooltip")])])])]),s("div",{class:"ch-callout ch-callout--success"},[s("strong",null,"✅ 推荐模式："),s("ul",null,[s("li",null,[s("strong",null,"外部自定义组件"),l(" → 使用 Slot Scope（通过 slot props 获取数据）")]),s("li",null,[s("strong",null,"内部核心组件"),l(" → 使用 Direct Inject（通过 inject() 获取数据）")])])])],-1)),a[137]||(a[137]=s("section",{id:"best-practices",class:"ch-section"},[s("h2",{class:"ch-section__title"},"9.4 最佳实践"),s("div",{class:"practice-card"},[s("h3",{class:"practice-card__title"},"🎯 实践 1：权限检查优先"),s("div",{class:"practice-card__content"},[s("div",{class:"practice-example"},[s("div",{class:"practice-example__good"},[s("div",{class:"practice-example__label"},"✅ 正确"),s("div",{class:"ch-code-block"},[s("pre",null,[s("code",null,[s("span",{class:"code-comment"},"// 先检查权限再执行操作"),l(`
`),s("span",{class:"code-keyword"},"if"),l(` (capabilities.value?.canGroup) {
  designer.value?.groupSelectedNodes()
}`)])])])]),s("div",{class:"practice-example__bad"},[s("div",{class:"practice-example__label"},"❌ 错误"),s("div",{class:"ch-code-block"},[s("pre",null,[s("code",null,[s("span",{class:"code-comment"},"// 不检查权限直接执行"),l(`
designer.value?.groupSelectedNodes()`)])])])])])])]),s("div",{class:"practice-card"},[s("h3",{class:"practice-card__title"},"🛡️ 实践 2：空值安全"),s("div",{class:"practice-card__content"},[s("div",{class:"practice-example"},[s("div",{class:"practice-example__good"},[s("div",{class:"practice-example__label"},"✅ 正确"),s("div",{class:"ch-code-block"},[s("pre",null,[s("code",null,[s("span",{class:"code-comment"},"// 使用可选链和空值判断"),l(`
`),s("span",{class:"code-keyword"},"const"),l(` node = graph.value?.getCellById(nodeId)
`),s("span",{class:"code-keyword"},"if"),l(` (node?.isNode()) {
  `),s("span",{class:"code-comment"},"// 操作节点"),l(`
}`)])])])]),s("div",{class:"practice-example__bad"},[s("div",{class:"practice-example__label"},"❌ 错误"),s("div",{class:"ch-code-block"},[s("pre",null,[s("code",null,[s("span",{class:"code-comment"},"// 不判断直接访问，可能报错"),l(`
`),s("span",{class:"code-keyword"},"const"),l(" node = graph.value.getCellById(nodeId)")])])])])])])]),s("div",{class:"practice-card"},[s("h3",{class:"practice-card__title"},"⚡ 实践 3：响应式追踪"),s("div",{class:"practice-card__content"},[s("div",{class:"practice-example"},[s("div",{class:"practice-example__good"},[s("div",{class:"practice-example__label"},"✅ 正确"),s("div",{class:"ch-code-block"},[s("pre",null,[s("code",null,[s("span",{class:"code-comment"},"// 使用 computed 追踪变化"),l(`
`),s("span",{class:"code-keyword"},"const"),l(" selectedNode = "),s("span",{class:"code-function"},"computed"),l(`(() => {
  `),s("span",{class:"code-keyword"},"if"),l(" (!selectedCells.value["),s("span",{class:"code-number"},"0"),l("]) "),s("span",{class:"code-keyword"},"return"),l(),s("span",{class:"code-keyword"},"null"),l(`
  `),s("span",{class:"code-keyword"},"return"),l(" graph.value?.getCellById(selectedCells.value["),s("span",{class:"code-number"},"0"),l(`].id)
})`)])])])]),s("div",{class:"practice-example__bad"},[s("div",{class:"practice-example__label"},"❌ 错误"),s("div",{class:"ch-code-block"},[s("pre",null,[s("code",null,[s("span",{class:"code-comment"},"// 直接赋值，不会响应变化"),l(`
`),s("span",{class:"code-keyword"},"const"),l(" selectedNode = graph.value?.getCellById(selectedCells.value["),s("span",{class:"code-number"},"0"),l("]?.id)")])])])])])])]),s("div",{class:"practice-card"},[s("h3",{class:"practice-card__title"},"🎨 实践 4：优先使用 Slot Scope"),s("div",{class:"practice-card__content"},[s("div",{class:"practice-example"},[s("div",{class:"practice-example__good"},[s("div",{class:"practice-example__label"},"✅ 推荐"),s("div",{class:"ch-code-block"},[s("pre",null,[s("code",null,[s("span",{class:"code-comment"},"<!-- 外部自定义组件使用 slot scope -->"),l(`
`),s("span",{class:"code-tag"},"<FlowDesignerLayout>"),l(`
  `),s("span",{class:"code-tag"},"<template"),l(),s("span",{class:"code-attr"},"#toolbar"),l("="),s("span",{class:"code-string"},'"{ onCopy, capabilities }"'),s("span",{class:"code-tag"},">"),l(`
    `),s("span",{class:"code-tag"},"<button"),l(` 
      `),s("span",{class:"code-attr"},":disabled"),l("="),s("span",{class:"code-string"},'"!capabilities.canCopy"'),l(` 
      `),s("span",{class:"code-attr"},"@click"),l("="),s("span",{class:"code-string"},'"onCopy"'),l(`
    `),s("span",{class:"code-tag"},">"),l(`
      复制
    `),s("span",{class:"code-tag"},"</button>"),l(`
  `),s("span",{class:"code-tag"},"</template>"),l(`
`),s("span",{class:"code-tag"},"</FlowDesignerLayout>")])])])]),s("div",{class:"practice-example__bad"},[s("div",{class:"practice-example__label"},"⚠️ 不推荐"),s("div",{class:"ch-code-block"},[s("pre",null,[s("code",null,[s("span",{class:"code-comment"},"// 外部组件使用 inject，增加耦合度"),l(`
`),s("span",{class:"code-keyword"},"const"),l(" capabilities = "),s("span",{class:"code-function"},"inject"),l("("),s("span",{class:"code-string"},"'capabilities'"),l(`)
`),s("span",{class:"code-keyword"},"const"),l(" designer = "),s("span",{class:"code-function"},"inject"),l("("),s("span",{class:"code-string"},"'designer'"),l(")")])])])])])])])],-1)),a[138]||(a[138]=s("section",{class:"ch-section"},[s("h2",{class:"ch-section__title"},"数据流向图"),s("div",{class:"flow-diagram"},[s("pre",null,`FlowDesignerLayout (Provider)
    │
    ├─ provide('designer')
    ├─ provide('graph')
    ├─ provide('designerMode')
    ├─ provide('capabilities')
    ├─ provide('selectedCells')
    ├─ provide('canvasConfig')
    ├─ provide('updateCanvasConfig')
    └─ provide('flowDesigner')
            │
            ├──────────────────────────────┐
            │                              │
    Internal Components          Slot Scopes
            │                              │
    ┌───────┴────────┐          ┌──────────┴─────────┐
    │                │          │                    │
ContextMenus   PropertiesPanel  toolbar/palette   Custom
  (inject)       (inject)       (slot props)      Components
                                                  (slot props)
        `)])],-1)),a[139]||(a[139]=s("section",{class:"ch-section"},[s("h2",{class:"ch-section__title"},"总结"),s("div",{class:"ch-callout ch-callout--info"},[s("strong",null,"📚 关键要点："),s("ul",null,[s("li",null,[l("FlowDesignerLayout 提供 "),s("strong",null,"8 个核心注入参数"),l("，覆盖设计器的所有核心数据")]),s("li",null,[s("strong",null,"Slot Scope"),l(" 是推荐的使用方式，无需 inject，更直观和类型安全")]),s("li",null,[l("使用前务必进行 "),s("strong",null,"权限检查"),l(" 和 "),s("strong",null,"空值判断")]),s("li",null,[l("使用 "),s("strong",null,"computed"),l(" 确保响应式追踪")]),s("li",null,[l("通过 "),s("code",null,"updateCanvasConfig"),l(" 更新配置，直接修改 "),s("code",null,"canvasConfig"),l(" 不会生效")])])])],-1))]),_:1}))}}),F=g(C,[["__scopeId","data-v-94e2d5d1"]]);export{F as default};
//# sourceMappingURL=09-advanced-BGjp-qxX.js.map
