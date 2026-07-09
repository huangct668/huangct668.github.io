import{d as de,w as I,j as Te,U as T,V as f,a2 as w,a0 as ae,a1 as s,_ as e,$ as p,a5 as oe,k as a,u as b,a7 as X,W as D,a8 as le,a3 as K,f as u,c as S,n as se,G as r,F as j,a4 as U,a6 as Le}from"./vendor-vue-n6x0MXoC.js";import{G as Ae}from"./GuideLayout-BBYPgXvz.js";import{C as E}from"./CodePreviewer-CSmmXEkt.js";import{K as ie,L as $e,N as De,O as Me,H as Ne,G as ze}from"./vendor-antd-DQF42uR_.js";import{_ as ce}from"./index-DRL8JF9X.js";import"./FlowDesignerTest-L4DF5qyz.js";import"./vendor-x6-B0tTI3Tl.js";const Ge={class:"code-drawer__header"},He={class:"code-drawer__header-left"},Re={class:"code-drawer__title"},Fe={class:"code-drawer__header-actions"},Oe={class:"code-drawer__font-size-label"},Pe={key:0,class:"code-drawer__search-bar"},We={class:"code-drawer__search-count"},Be={class:"code-drawer__pre"},Ve=["innerHTML"],Ie=10,Xe=24,je=de({__name:"CodeDrawer",props:{visible:{type:Boolean,default:!1},code:{default:""},language:{default:"text"},title:{default:"代码示例"},width:{default:600},showLineNumbers:{type:Boolean,default:!0}},emits:["update:visible","close"],setup(J,{expose:z,emit:G}){const x=J,H=G,y=u(!1),L=u(""),n=u("text"),A=u("代码示例"),i=u(600),g=u(!1),C=u(!0),_=u("idle"),k=u(!1),h=u(""),c=u([]),m=u(0),Y=u(),q=u(),v=u(13),ue=u(.8),Z=S(()=>L.value||x.code||""),R=S(()=>n.value||x.language||"text"),P=S(()=>{try{const t=R.value.toLowerCase(),d=Z.value;if(t==="json"){const o=JSON.parse(d);return JSON.stringify(o,null,2)}return d}catch{return Z.value}}),pe=S(()=>{const d=P.value.split(`
`),o=d.length,l=String(o).length;return d.map((M,$)=>{const N=String($+1).padStart(l," "),F=me(M,x.language),O=ve(F,$);return x.showLineNumbers?`<span class="code-line"><span class="line-number">${N}</span><span class="line-content">${O}</span></span>`:`<span class="code-line"><span class="line-content">${O}</span></span>`}).join(`
`)}),fe=S(()=>({vue:"Vue",typescript:"TypeScript",ts:"TypeScript",javascript:"JavaScript",js:"JavaScript",json:"JSON",html:"HTML",css:"CSS",scss:"SCSS",less:"Less",text:"Text"})[R.value.toLowerCase()]||R.value.toUpperCase()),ge=S(()=>({vue:"#42b883",typescript:"#3178c6",ts:"#3178c6",javascript:"#f7df1e",js:"#f7df1e",json:"#292929",html:"#e34c26",css:"#264de4",scss:"#c6538c",less:"#1d365d"})[R.value.toLowerCase()]||"#999999"),he=S(()=>_.value==="success"?"已复制":_.value==="error"?"复制失败":"复制代码");function me(t,d){const o=d.toLowerCase();let l=Q(t);return o==="json"?l=l.replace(/"([^"]+)":/g,'<span class="hl-key">"$1"</span>:').replace(/: "([^"]*)"/g,': <span class="hl-string">"$1"</span>').replace(/: (\d+\.?\d*)/g,': <span class="hl-number">$1</span>').replace(/: (true|false)/g,': <span class="hl-boolean">$1</span>').replace(/: (null)/g,': <span class="hl-null">$1</span>'):o==="vue"||o==="html"?l=l.replace(/(&lt;\/?)([\w-]+)/g,'$1<span class="hl-tag">$2</span>').replace(/([\w-]+)=/g,'<span class="hl-attr">$1</span>=').replace(/="([^"]*)"/g,'="<span class="hl-string">$1</span>"'):o==="typescript"||o==="ts"||o==="javascript"||o==="js"?l=l.replace(/\b(const|let|var|function|return|if|else|for|while|class|interface|type|import|export|from|default|async|await)\b/g,'<span class="hl-keyword">$1</span>').replace(/'([^']*)'/g,`'<span class="hl-string">$1</span>'`).replace(/"([^"]*)"/g,'"<span class="hl-string">$1</span>"').replace(/\/\/(.*)/g,'<span class="hl-comment">//$1</span>'):(o==="css"||o==="scss"||o==="less")&&(l=l.replace(/([.#]?[\w-]+)\s*\{/g,'<span class="hl-selector">$1</span> {').replace(/([\w-]+):/g,'<span class="hl-attr">$1</span>:').replace(/: ([^;]+);/g,': <span class="hl-value">$1</span>;')),l}function Q(t){const d={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"};return t.replace(/[&<>"']/g,o=>d[o])}function ve(t,d){if(!h.value||c.value.length===0)return t;const l=c.value[m.value]===d,M=Q(h.value),$=new RegExp(M,"gi");return t.replace($,N=>`<mark class="${l?"search-match search-match--current":"search-match"}">${N}</mark>`)}async function be(){try{await navigator.clipboard.writeText(P.value),_.value="success",setTimeout(()=>{_.value="idle"},2e3)}catch(t){console.error("复制失败:",t),_.value="error",setTimeout(()=>{_.value="idle"},2e3)}}function W(){y.value=!1,H("update:visible",!1),H("close"),g.value=!1,k.value=!1,h.value="",c.value=[]}function _e(t){try{return JSON.parse(t),"json"}catch{}return t.includes("<template>")&&t.includes("<script")?"vue":t.trim().startsWith("<!DOCTYPE")||t.trim().startsWith("<html")?"html":/^\s*[\w-]+\s*\{[\s\S]*\}\s*$/.test(t)?"css":/\b(interface|type|enum|namespace)\b/.test(t)?"typescript":/\b(const|let|var|function|class|import|export)\b/.test(t)?"javascript":"text"}function ye(t){L.value=t.code,t.language?n.value=t.language:(n.value=_e(t.code),console.log("[CodeDrawer] 自动检测语言:",n.value)),A.value=t.title||"代码示例",i.value=t.width||600,y.value=!0}function we(){y.value=!1,W()}function xe(){g.value=!g.value}function Ce(){C.value=!C.value}function ee(){v.value<Xe&&(v.value+=1)}function ne(){v.value>Ie&&(v.value-=1)}function ke(){v.value=13}function B(t){(t.ctrlKey||t.metaKey)&&(t.key==="+"||t.key==="=")&&(t.preventDefault(),ee()),(t.ctrlKey||t.metaKey)&&t.key==="-"&&(t.preventDefault(),ne()),(t.ctrlKey||t.metaKey)&&t.key==="0"&&(t.preventDefault(),ke())}function re(){k.value=!k.value,k.value?se(()=>{var t;(t=Y.value)==null||t.focus()}):(h.value="",c.value=[])}function Se(){if(!h.value){c.value=[];return}const t=P.value.split(`
`),d=[];t.forEach((o,l)=>{o.toLowerCase().includes(h.value.toLowerCase())&&d.push(l)}),c.value=d,m.value=0,d.length>0&&V(d[0])}function te(){c.value.length!==0&&(m.value=(m.value+1)%c.value.length,V(c.value[m.value]))}function Ee(){c.value.length!==0&&(m.value=m.value===0?c.value.length-1:m.value-1,V(c.value[m.value]))}function V(t){se(()=>{const d=q.value;if(!d)return;const l=d.querySelectorAll(".code-line")[t];l&&l.scrollIntoView({behavior:"smooth",block:"center"})})}return I(h,()=>{Se()}),I(()=>x.visible,t=>{y.value=t||!1,t||(g.value=!1,C.value=!0,k.value=!1,h.value="",c.value=[],_.value="idle")}),I(y,t=>{t?document.addEventListener("keydown",B):(document.removeEventListener("keydown",B),g.value=!1,C.value=!0,k.value=!1,h.value="",c.value=[],_.value="idle",v.value=13,setTimeout(()=>{L.value="",n.value="text",A.value="代码示例"},300))}),Te(()=>{document.removeEventListener("keydown",B)}),z({openDrawer:ye,closeDrawer:we}),(t,d)=>{const o=T("a-button"),l=T("a-tooltip"),M=T("a-divider"),$=T("a-input"),N=T("a-button-group"),F=T("a-drawer");return f(),w(F,{open:y.value,width:g.value?"100%":i.value,class:ae({"code-drawer--fullscreen":g.value}),placement:"right",closable:!1,bodyStyle:{padding:0,height:"100%",display:"flex",flexDirection:"column"},onClose:W},{default:s(()=>[e("div",Ge,[e("div",He,[e("span",Re,p(A.value),1),e("span",{class:"code-drawer__language-tag",style:oe({background:ge.value})},p(fe.value),5)]),e("div",Fe,[a(l,{title:"搜索代码 (Ctrl+F)"},{default:s(()=>[a(o,{type:"text",size:"small",onClick:re},{icon:s(()=>[a(b(ie))]),_:1})]),_:1}),a(l,{title:"缩小字体 (Ctrl+-)"},{default:s(()=>[a(o,{type:"text",size:"small",onClick:ne,disabled:v.value<=10},{icon:s(()=>[a(b($e))]),_:1},8,["disabled"])]),_:1}),e("span",Oe,p(v.value)+"px",1),a(l,{title:"增大字体 (Ctrl++)"},{default:s(()=>[a(o,{type:"text",size:"small",onClick:ee,disabled:v.value>=24},{icon:s(()=>[a(b(De))]),_:1},8,["disabled"])]),_:1}),a(M,{type:"vertical",style:{margin:"0 4px"}}),a(l,{title:C.value?"折叠代码":"展开代码"},{default:s(()=>[a(o,{type:"text",size:"small",onClick:Ce},{icon:s(()=>[(f(),w(X(C.value?"ShrinkOutlined":"ArrowsAltOutlined")))]),_:1})]),_:1},8,["title"]),a(l,{title:g.value?"退出全屏":"全屏查看"},{default:s(()=>[a(o,{type:"text",size:"small",onClick:xe},{icon:s(()=>[(f(),w(X(g.value?"FullscreenExitOutlined":"FullscreenOutlined")))]),_:1})]),_:1},8,["title"]),a(l,{title:he.value},{default:s(()=>[a(o,{type:"text",size:"small",onClick:be},{icon:s(()=>[(f(),w(X(_.value==="success"?"CheckOutlined":"CopyOutlined")))]),_:1})]),_:1},8,["title"]),a(l,{title:"关闭 (ESC)"},{default:s(()=>[a(o,{type:"text",size:"small",onClick:W},{icon:s(()=>[a(b(Me))]),_:1})]),_:1})])]),k.value?(f(),D("div",Pe,[a($,{ref_key:"searchInputRef",ref:Y,value:h.value,"onUpdate:value":d[0]||(d[0]=O=>h.value=O),placeholder:"搜索代码...",size:"small",onKeyup:[le(te,["enter"]),le(re,["esc"])]},{prefix:s(()=>[a(b(ie))]),suffix:s(()=>[e("span",We,p(c.value.length>0?`${m.value+1}/${c.value.length}`:"0/0"),1)]),_:1},8,["value"]),a(N,{size:"small"},{default:s(()=>[a(o,{onClick:Ee,disabled:c.value.length===0},{default:s(()=>[a(b(Ne))]),_:1},8,["disabled"]),a(o,{onClick:te,disabled:c.value.length===0},{default:s(()=>[a(b(ze))]),_:1},8,["disabled"])]),_:1})])):K("",!0),e("div",{class:ae(["code-drawer__content",{"code-drawer__content--collapsed":!C.value}])},[e("pre",Be,[e("code",{ref_key:"codeRef",ref:q,class:"code-drawer__code",style:oe({fontSize:`${v.value}px`,lineHeight:ue.value}),innerHTML:pe.value},null,12,Ve)])],2)]),_:1},8,["open","width","class"])}}}),Ue=ce(je,[["__scopeId","data-v-59fc6667"]]),Ke=`import type { CanvasConfig } from '../../../views/types/flow.types'\r
\r
/**\r
 * 默认画布配置\r
 * 对应 X6 Graph 初始化选项，所有字段均可通过 FlowDesignerLayout 的 canvasConfig prop 覆盖。\r
 * 参考：https://x6.antv.antgroup.com/api/graph/graph\r
 */\r
export const DEFAULT_CANVAS_CONFIG: CanvasConfig = {\r
\r
  // ─── 网格配置 ─────────────────────────────────────────────────────────────\r
  // 对应 X6 Graph 选项：grid\r
  // 参考：https://x6.antv.antgroup.com/api/graph/grid\r
  grid: {\r
    /** 是否显示网格。对应 grid.visible */\r
    visible: true,\r
    /**\r
     * 网格类型。对应 grid.type\r
     * - 'dot'  : 点状网格（默认）\r
     * - 'mesh' : 线状网格\r
     */\r
    type: 'dot',\r
    /** 网格单元尺寸（px），节点拖拽会按此值对齐（需开启 snapToGrid）。对应 grid.size */\r
    size: 20,\r
    /** 网格点/线的颜色。对应 grid.args[0].color */\r
    color: '#6b6b6b',\r
    /** 网格点/线的粗细（px）。对应 grid.args[0].thickness */\r
    thickness: 2,\r
  },\r
\r
  // ─── 对齐配置 ─────────────────────────────────────────────────────────────\r
  // 对应 X6 插件：Snapline / graph.snapGrid\r
  // 参考：https://x6.antv.antgroup.com/api/graph/snapline\r
  align: {\r
    /**\r
     * 是否启用对齐线（Snapline）。\r
     * 拖拽节点时显示辅助对齐线，帮助节点与其他节点对齐。\r
     * 对应 Graph.use(Snapline, { enabled: true })\r
     */\r
    snaplineEnabled: true,\r
    /**\r
     * 是否将节点移动强制吸附到网格。\r
     * true: 节点只能落在网格整数格点上；false: 自由移动。\r
     * 对应 Graph 构造项 snapGrid: { size }\r
     */\r
    snapToGrid: false,\r
    /**\r
     * 对齐吸附半径（px）。\r
     * 节点拖拽时，距对齐线/网格在此范围内时自动吸附。\r
     * 对应 Snapline 插件的 tolerance 选项\r
     */\r
    snapRadius: 20,\r
  },\r
\r
  // ─── 连线配置 ─────────────────────────────────────────────────────────────\r
  // 对应 X6 Graph 构造项：connecting\r
  // 参考：https://x6.antv.antgroup.com/api/graph/connecting\r
  connection: {\r
    /**\r
     * 路由算法，决定连线走向。对应 connecting.router\r
     * - 'manhattan' : 直角折线（自动绕障）\r
     * - 'metro'     : 地铁风格直角折线\r
     * - 'orth'      : 正交折线（不绕障）\r
     */\r
    router: 'metro',\r
    /**\r
     * 连接器类型，决定连线端点及弯角样式。对应 connecting.connector\r
     * - 'rounded'  : 圆角折线\r
     * - 'smooth'   : 平滑曲线（贝塞尔）\r
     * - 'normal'   : 直线段无特殊处理\r
     * - 'jumpover' : 交叉处绘制跳线弧（需 connector 支持）\r
     * 注意：'jumpover' 是 X6 内置 connector 名称，用于连线交叉跳过效果\r
     */\r
    connector: 'rounded',\r
    /**\r
     * 是否允许连接到画布空白处（不连到任何节点/端口）。对应 connecting.allowBlank\r
     * false: 连线必须连到有效节点，否则回弹取消\r
     */\r
    allowBlank: false,\r
    /**\r
     * 是否允许创建自环连线（起点和终点是同一节点）。对应 connecting.allowLoop\r
     * false: 禁止节点自身连接自身\r
     */\r
    allowLoop: false,\r
    /**\r
     * 是否允许两个节点之间存在多条连线。对应 connecting.allowMulti\r
     * false: 同一对节点只能有一条连线\r
     */\r
    allowMulti: false,\r
    /** 连线描边宽度（px）。对应 edge 默认样式 attrs/line/strokeWidth */\r
    strokeWidth: 2,\r
    /** 连线描边颜色。对应 edge 默认样式 attrs/line/stroke（default 状态灰色） */\r
    strokeColor: '#b0b8c4',\r
    /**\r
     * 连线交互层宽度（px）。\r
     * 用于增大连线的 hover/click 判定范围，视觉上不可见。\r
     * 对应 edge 默认样式 attrs/line/strokeWidth（用于交互检测）\r
     * 推荐值：15-30，越大越容易触发 hover\r
     */\r
    interactionWidth: 20,\r
    // 连线标签样式，在 GraphInitializer 中映射为 edge defaultLabel attrs\r
    label: {\r
      /** 标签背景色（SVG foreignObject 容器背景）*/\r
      backgroundColor: '#ffffff',\r
      /** 标签边框颜色（浅蓝色） */\r
      borderColor: '#cccccc',\r
      /** 标签边框宽度（px）*/\r
      borderWidth: 1,\r
      /** 标签文字颜色 */\r
      textColor: '#999999',\r
      /** 标签字号（px）*/\r
      fontSize: 12,\r
      /** 标签字重（CSS font-weight）*/\r
      fontWeight: 500,\r
      /**\r
       * 标签在连线上的位置比例，取值范围 0～1。\r
       * 0: 起点，0.5: 中点，1: 终点。对应 label.position.distance\r
       */\r
      position: 0.5,\r
      /** 标签内边距（px），paddingX/paddingY 未设置时的 fallback */\r
      padding: 4,\r
      /** 左右内边距（px），优先级高于 padding */\r
      paddingX: 6,\r
      /** 上下内边距（px），优先级高于 padding。设置较小值以补偿 SVG text bbox 含字体行距 */\r
      paddingY: 2,\r
      /** 背景矩形垂直方向微调（px），正值向下，用于补偿 SVG text baseline 上下不对称（ascender > descender） */\r
      offsetY: 1,\r
      /** 标签背景圆角（px）*/\r
      borderRadius: 4,\r
      /**\r
       * SVG 文字水平锚点。对应 label text-anchor 属性\r
       * - 'start'  : 左对齐\r
       * - 'middle' : 居中（默认）\r
       * - 'end'    : 右对齐\r
       */\r
      textAnchor: 'middle',\r
      /**\r
       * SVG 文字垂直锚点。对应 label dominant-baseline 等效属性\r
       * - 'top'    : 顶部对齐\r
       * - 'middle' : 垂直居中（默认）\r
       * - 'bottom' : 底部对齐\r
       */\r
      textVerticalAnchor: 'middle',\r
      /**\r
       * 标签鼠标事件穿透。对应 CSS pointer-events\r
       * 'none': 标签不捕获鼠标事件，点击穿透到连线本身\r
       */\r
      pointerEvents: 'auto',\r
    },\r
  },\r
\r
  // ─── 交互配置 ─────────────────────────────────────────────────────────────\r
  // 参考：https://x6.antv.antgroup.com/api/graph/panning\r
  //       https://x6.antv.antgroup.com/api/graph/mousewheel\r
  //       https://x6.antv.antgroup.com/api/graph/selection\r
  interaction: {\r
    /**\r
     * 是否开启画布拖拽平移（按住空格或右键拖拽）。\r
     * 对应 Graph 构造项 panning: { enabled: true }\r
     */\r
    panning: false,\r
    /**\r
     * 是否开启鼠标滚轮缩放画布。\r
     * 对应 Graph 构造项 mousewheel: { enabled: true }\r
     */\r
    mousewheel: false,\r
    /**\r
     * 是否开启框选（Rubberband）。\r
     * 鼠标在画布空白区域拖拽，绘制矩形框选中范围内的所有节点/边。\r
     * 对应 Graph.use(Selection, { rubberband: true })\r
     */\r
    rubberband: true,\r
    /**\r
     * 是否允许多选（按住 Ctrl/Cmd 点击追加选中）。\r
     * 对应 Selection 插件 multiple 选项\r
     */\r
    multipleSelection: true,\r
    /**\r
     * 是否允许拖拽移动节点。\r
     * 对应 graph.options.interacting 中 nodeMovable 设为 true\r
     */\r
    movable: true,\r
    /**\r
     * 是否允许拖拽调整节点大小（显示 resize handle）。\r
     * 对应 Graph.use(Transform, { resizing: { enabled: true } })\r
     * 当前设为 false，节点尺寸固定\r
     */\r
    resizable: true,\r
  },\r
\r
  // ─── 高亮配置 ─────────────────────────────────────────────────────────────\r
  // 高亮效果通过 X6 高亮器（Highlighter）实现，在 GraphInitializer 中注册。\r
  // 参考：https://x6.antv.antgroup.com/api/registry/highlighter\r
  highlight: {\r
    // 节点悬停高亮\r
    nodeHover: {\r
      /** 是否在节点悬停时高亮 */\r
      enabled: false,\r
      /** 高亮描边颜色 */\r
      strokeColor: '#1677ff',\r
      /** 高亮描边宽度（px）*/\r
      strokeWidth: 2,\r
      /** 是否附加阴影效果 */\r
      shadow: true,\r
    },\r
    // 节点选中高亮（当前由各节点组件自身 CSS 处理，此项保留供扩展）\r
    nodeSelected: {\r
      /** 是否在节点选中时通过高亮器添加外框 */\r
      enabled: false,\r
      strokeColor: '#1677ff',\r
      strokeWidth: 2.5,\r
      shadow: true,\r
    },\r
    // 连线悬停高亮\r
    edgeHover: {\r
      /** 是否在连线悬停时高亮 */\r
      enabled: true,\r
      strokeColor: '#1677ff',\r
      textColor: '#1677ff',\r
      strokeWidth: 2,\r
    },\r
    // 连线悬停重叠优化（hover 时降低重叠连线的透明度，高密度连线场景提升可读性）\r
    edgeHoverOverlap: {\r
      /** 是否启用重叠连线透明度优化 */\r
      enabled: true,\r
      /** 重叠连线的目标透明度（0-1） */\r
      opacity: 0.36,\r
      /** 透明度过渡动画时长（ms） */\r
      transitionDuration: 150,\r
      /** 当连线数量超过此值时自动禁用该功能（性能保护），0 或 undefined 表示不限制 */\r
      disableWhenEdgeCountExceeds: 100,\r
    },\r
    // 连线选中高亮（由 X6 Selection 插件自动触发）\r
    edgeSelected: {\r
      /** 是否在连线选中时高亮 */\r
      enabled: true,\r
      strokeColor: '#1677ff',\r
      textColor: '#1677ff',\r
      strokeWidth: 2,\r
    },\r
    // 端口默认样式（静止状态，节点注册时使用）\r
    portDefault: {\r
      /** 端口填充颜色 */\r
      fill: '#ffffff',\r
      /** 端口描边颜色 */\r
      stroke: '#1677ff',\r
      /** 端口圆半径（px）*/\r
      size: 4,\r
      /** 端口描边宽度（px）*/\r
      strokeWidth: 2,\r
    },\r
    // 端口悬停高亮（鼠标悬停在端口上时）\r
    portHover: {\r
      /** 是否在端口悬停时高亮 */\r
      enabled: true,\r
      /** 端口高亮描边颜色 */\r
      strokeColor: '#1677ff',\r
      /** 端口高亮填充颜色 */\r
      fillColor: '#1677ff',\r
      /** 端口描边宽度 */\r
      strokeWidth: 2,\r
      /** 端口高亮时的圆半径（px）*/\r
      size: 4,\r
    },\r
    // 磁铁吸附高亮（连线终点靠近端口、准备连接时）\r
    magnetAdsorbed: {\r
      /** 是否在磁铁吸附时高亮目标端口 */\r
      enabled: true,\r
      strokeColor: '#1677ff',\r
      strokeWidth: 6,\r
    },\r
    // 可用磁铁高亮（开始绘制连线时，标记所有可连接的端口）\r
    magnetAvailable: {\r
      /** 是否高亮显示当前可连接的端口 */\r
      enabled: true,\r
      /** 可连接端口的高亮颜色（绿色表示可用） #ff4d4f*/\r
      strokeColor: '#8c8c8c',\r
      //fillColor: '#0000fc',\r
      fillColor: '#8c8c8c',\r
      strokeWidth: 2,\r
    },\r
    // 节点悉停时出线流动高亮\r
    nodeHoverOutEdgeFlow: {\r
      /** 是否开启：鼠标悉停节点时，出线变为蓝色流动线 */\r
      enabled: true,\r
      /** 流动线颜色 */\r
      strokeColor: '#1677ff',\r
      /** 流动线宽度（px）*/\r
      strokeWidth: 2,\r
      /** 流动动画周期（s），值越小流动越快 */\r
      duration: 0.6,\r
      /** 当节点数量超过此值时自动禁用该功能（性能保护），0 或 undefined 表示不限制 */\r
      disableWhenNodeCountExceeds: 500,\r
      /** 当单个节点的出线数量超过此值时不启用流动动画（性能保护），0 或 undefined 表示不限制 */\r
      disableWhenOutEdgeCountExceeds: 10,\r
    },\r
  },\r
\r
  // ─── 背景配置 ─────────────────────────────────────────────────────────────\r
  // 对应 X6 Graph 构造项：background\r
  // 参考：https://x6.antv.antgroup.com/api/graph/background\r
  background: {\r
    /** 画布背景颜色。对应 background.color */\r
    color: '#f5f5f5',\r
    // image?   : 背景图片 URL，对应 background.image\r
    // repeat?  : 背景图片平铺方式，'repeat' | 'no-repeat' | 'watermark'\r
    // opacity? : 背景图片透明度，取值 0～1\r
  },\r
\r
  // ─── 小地图配置 ────────────────────────────────────────────────────────────\r
  // 对应 X6 插件：MiniMap\r
  // 参考：https://x6.antv.antgroup.com/api/graph/minimap\r
  minimap: {\r
    /** 是否启用小地图。对应 MiniMap 插件 enabled */\r
    enabled: true,\r
    /** 小地图容器宽度（px）*/\r
    width: 180,\r
    /** 小地图容器高度（px）*/\r
    height: 120,\r
    /** 小地图内边距（px），防止内容紧贴边缘 */\r
    padding: 10,\r
  },\r
\r
  // ─── 历史记录（撤销/重做）配置 ────────────────────────────────────────────\r
  // 对应 X6 插件：History\r
  // 参考：https://x6.antv.antgroup.com/api/graph/history\r
  history: {\r
    /** 是否启用历史记录（撤销/重做）。对应 History 插件 enabled */\r
    enabled: true,\r
    /**\r
     * 历史栈最大条数。超出后自动丢弃最旧的记录。\r
     * 对应 History 插件 stackSize 选项\r
     */\r
    stackSize: 100,\r
    /**\r
     * 是否忽略节点/边「添加」操作，不计入历史。\r
     * 对应 History 插件 ignoreAdd 选项\r
     */\r
    ignoreAdd: false,\r
    /**\r
     * 是否忽略节点/边「删除」操作，不计入历史。\r
     * 对应 History 插件 ignoreRemove 选项\r
     */\r
    ignoreRemove: false,\r
    /**\r
     * 是否忽略节点/边「属性变更」操作，不计入历史。\r
     * 对应 History 插件 ignoreChange 选项\r
     * ⚠️ 必须为 false，由 beforeAddCommand 白名单精确控制入栈内容\r
     * 若设为 true，连线端点(source/target)的 change 也会被屏蔽，导致 redo 后位置错误\r
     */\r
    ignoreChange: false,\r
  },\r
\r
  // ─── Tooltip 配置 ─────────────────────────────────────────────────────────\r
  // Tooltip 悬停提示样式配置\r
  tooltip: {\r
    /** 字体大小（px）*/\r
    fontSize: 13,\r
    /** 字体粗细 */\r
    fontWeight: 'bold' as const,\r
    /** 文字颜色 */\r
    color: '#ffffff',\r
    /** 背景颜色（带透明度的黑色）*/\r
    backgroundColor: 'rgba(0, 0, 0, 0.75)',\r
    /** 内边距 */\r
    padding: '6px 12px',\r
    /** 圆角（px）*/\r
    borderRadius: 4,\r
    /** 阴影 */\r
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.25)',\r
    /** 是否显示箭头 */\r
    arrowEnabled: true,\r
    /** 箭头颜色（与背景色一致）*/\r
    arrowColor: 'rgba(0, 0, 0, 0.75)',\r
    /** 箭头高度（px）*/\r
    arrowSize: 8,\r
    /** z-index 层级 */\r
    zIndex: 9999,\r
    /** 最大宽度（undefined 表示不限制）*/\r
    maxWidth: undefined,\r
    /** 文本换行方式（nowrap 保持单行）*/\r
    whiteSpace: 'nowrap' as const,\r
    /** 水平偏移量（px），正值向右，负值向左 */\r
    offsetX: 0,\r
    /** 垂直偏移量（px），正值向下，负值向上 */\r
    offsetY: 0,\r
  },\r
}\r
`,Je=`//组件内部默认内置3种模式design|readonly|preview，通过传入重置某种模式的权限\r
//也可以自定于扩展自己的模式 {design: {....}, myMode: {showToolbar: true,.....}}\r
{\r
  "design": {  //模式名称\r
    {\r
      // UI 显示\r
      /** 是否允许显示顶部工具栏 */\r
      showToolbar: true\r
      /** 是否允许显示左侧节点栏 */\r
      showNodePalette: true,\r
      /** 是否允许显示右侧属性栏 */\r
      showPropertiesPanel: true,\r
      /** 是否允许显示右键菜单 */\r
      showContextMenu: true,\r
      /** 是否允许显示节点 tooltip */\r
      canNodeTooltip: true,\r
      /** 是否允许显示连线 tooltip */\r
      canEdgeTooltip: true,\r
      /** 是否显示小地图（minimap） */\r
      showMinimap: true,\r
\r
      // 编辑能力\r
      /** 是否允许拖拽节点 */\r
      canDrag: true,\r
      /** 是否允许创建连线 */\r
      canConnect: true,\r
      /** 是否允许删除元素节点&连线 */\r
      canDelete: true,\r
      /** 是否允许复制节点 */\r
      canCopy: true,\r
      /** 是否允许粘贴节点 */\r
      canPaste: true,\r
      /** 是否允许节点成组功能 */\r
      canGroup: true,\r
      /** 节点/连线层级前置 */\r
      canToFront: true,\r
      /** 节点/连线层级后置 */\r
      canToBack: true,\r
\r
      // 选择能力\r
      /** 控制多选（multiple）和框选（rubberband） */\r
      canMultipleSelect: true,\r
      /** 与 canMultipleSelect 共同控制全选（Ctrl+A / 右键全选） */\r
      canSelectAll: true,\r
\r
      // 对齐能力\r
      canAlign: true,       // 总开关\r
      canAlignLeft: true,   // 左对齐\r
      canAlignRight: true,  // 右对齐\r
      canAlignTop: true,    // 上对齐\r
      canAlignBottom: true, // 下对齐\r
\r
      // 操作能力\r
      canImport: true,     // 导入\r
      canExport: true,     // 导出\r
      canUndo: true,       // 撤销\r
      canRedo: true,       // 重做\r
\r
      // 视图能力\r
      canZoom: true,       // 放大缩小\r
      canPan: true,        // 拖动画布\r
      canFitView: true,    // 适应画布\r
      canResetView: true,  // 重置视图\r
\r
      // 交互反馈能力\r
      /** 是否允许节点 hover 样式变化（高亮、tooltip、流动动画等） */\r
      canHoverNode: true,\r
      /** 是否允许连线 hover 样式变化（高亮、tooltip 等） */\r
      canHoverEdge: true,\r
      /** 是否允许选中节点 */\r
      canSelectNode: true,\r
      /** 是否允许选中连线 */\r
      canSelectEdge: true\r
    }\r
  },\r
  readonly: {},\r
  preview: {}\r
}\r
`,Ye={class:"ch-section"},qe={class:"ch-demo-frame",style:{height:"380px"}},Ze={class:"ch-section"},Qe={class:"ch-table-wrap"},en={class:"ch-table"},nn={class:"ch-type"},rn={key:2},tn={class:"ch-section"},an={class:"ch-table-wrap"},on={class:"ch-table"},ln={class:"ch-type"},sn={key:1,class:"ch-api-link",href:"https://x6.antv.antgroup.com/api/graph/graph",target:"_blank"},dn=["innerHTML"],cn={class:"ch-section"},un={class:"ch-table-wrap"},pn={class:"ch-table"},fn={class:"ch-type"},gn={class:"ch-type"},hn={class:"ch-section"},mn={class:"ch-demo-frame"},vn={class:"ch-section"},bn={class:"ch-demo-frame"},_n={class:"ch-section"},yn={class:"ch-demo-frame"},wn={class:"ch-section"},xn={class:"ch-demo-frame"},Cn={class:"ch-section"},kn={class:"ch-demo-frame"},Sn={class:"ch-section"},En={class:"ch-demo-frame"},Tn=de({__name:"02-basic-usage",setup(J){const z=u();function G(L){var n;(n=z.value)==null||n.openDrawer({code:L,title:"Vue 组件示例",width:700})}const x=[{name:"mode",type:"string",default:"'design'",desc:"初始模式，支持 design / readonly / preview 及自定义模式名"},{name:"canvasConfig",type:"Partial<CanvasConfig>",default:"undefined",desc:"画布配置，与默认配置深度合并"},{name:"permissionConfig",type:"PermissionConfigMap",default:"undefined",desc:"多模式权限配置映射表"}],H=[{name:"@ready",arg:"FlowDesigner,Graph",desc:"画布初始化完成， <br />返回 FlowDesigner 实例, <br />Graph实例参考(https://x6.antv.antgroup.com/api/graph/graph)"},{name:"@mode-change",arg:"DesignerMode",desc:"模式切换时"},{name:"@selection-change",arg:"Cell[]",desc:"选区变化时触发，返回当前选中的节点/连线数组"}],y=[{name:":before-node-add",arg:"BeforeNodeAddEvent",return:"boolean | Promise<boolean>",desc:"节点添加前钩子，返回 false 阻止添加"},{name:":after-node-add",arg:"AfterNodeAddEvent",return:"void",desc:"节点添加后钩子"},{name:":before-node-remove",arg:"BeforeNodeRemoveEvent",return:"boolean | Promise<boolean>",desc:"节点删除前钩子，返回 false 阻止删除"},{name:":after-node-remove",arg:"AfterNodeRemoveEvent",return:"void",desc:"节点删除后钩子"},{name:":before-edge-add",arg:"BeforeEdgeAddEvent",return:"boolean | Promise<boolean>",desc:"连线创建前钩子，返回 false 阻止连接"},{name:":after-edge-add",arg:"AfterEdgeAddEvent",return:"void",desc:"连线创建后钩子"},{name:":before-edge-remove",arg:"BeforeEdgeRemoveEvent",return:"boolean | Promise<boolean>",desc:"连线删除前钩子，返回 false 阻止删除"},{name:":after-edge-remove",arg:"AfterEdgeRemoveEvent",return:"void",desc:"连线删除后钩子"},{name:":before-node-hover",arg:"BeforeNodeHoverEvent",return:"boolean",desc:"节点鼠标悬停前钩子，返回 false 阻止 hover"},{name:":after-node-hover",arg:"AfterNodeHoverEvent",return:"void",desc:"节点鼠标悬停后钩子"},{name:":before-node-select",arg:"BeforeNodeSelectEvent",return:"boolean",desc:"节点点击选择前钩子，返回 false 阻止选择"},{name:":after-node-select",arg:"AfterNodeSelectEvent",return:"void",desc:"节点点击选择后钩子"},{name:":before-edge-hover",arg:"BeforeEdgeHoverEvent",return:"boolean",desc:"连线鼠标悬停前钩子，返回 false 阻止 hover"},{name:":after-edge-hover",arg:"AfterEdgeHoverEvent",return:"void",desc:"连线鼠标悬停后钩子"},{name:":before-edge-select",arg:"BeforeEdgeSelectEvent",return:"boolean",desc:"连线点击选择前钩子，返回 false 阻止选择"},{name:":after-edge-select",arg:"AfterEdgeSelectEvent",return:"void",desc:"连线点击选择后钩子"},{name:":node-state-renderers",arg:"NodeStateRendererMap",return:"—",desc:"节点状态渲染器映射表，支持覆盖内置状态和添加自定义状态"},{name:":edge-state-renderers",arg:"EdgeStateRendererMap",return:"—",desc:"连线状态渲染器映射表，支持覆盖内置状态和添加自定义状态"},{name:":port-state-renderers",arg:"PortStateRendererMap",return:"—",desc:"锚点状态渲染器映射表，支持覆盖内置状态和添加自定义状态"},{name:":tooltip-renderer",arg:"TooltipRendererMap",return:"—",desc:"节点/连线Tooltip渲染器映射表，支持覆盖内置样式"},{name:":after-data-loaded",arg:"[cells: CellProperties[]]",return:"void",desc:"X6 标准格式：包含所有节点和连线的完整属性"}];return(L,n)=>{const A=T("a-button");return f(),w(Ae,null,{default:s(()=>[n[31]||(n[31]=e("div",{class:"ch-header"},[e("span",{class:"ch-header__num"},"第 2 章"),e("h1",{class:"ch-header__title"},"基础使用"),e("p",{class:"ch-header__desc"},"最小化运行示例、完整 Props / Emits 说明，以及可交互的三模式演示。"),e("p",{class:"ch-text",style:{"margin-top":"10px"}},[r(" 安装依赖："),e("code",null,"npm install @quick-code/x6-flow-designer"),e("br"),r(" 引入组件："),e("code",null,"import { FlowDesignerLayout } from '@quick-code/x6-flow-designer'")])],-1)),n[32]||(n[32]=e("p",{style:{"font-size":"12px",color:"red"}},"如需要用到自定义VUE节点，则需要做以下操作，或者参考：https://x6.antv.antgroup.com/tutorial/intermediate/vue",-1)),n[33]||(n[33]=e("div",{class:"ch-code-block"},[e("pre",null,[e("code",{class:"language-typescript"},`//main.ts里增加
import { getTeleport } from '@antv/x6-vue-shape'
const TeleportComp = getTeleport()
if (TeleportComp) {
  app.component('X6VueTeleport', TeleportComp)
}

//App.vue里增加
<template>
  <X6VueTeleport />
  <RouterView />
</template>

`)])],-1)),e("section",Ye,[n[2]||(n[2]=e("h2",{class:"ch-section__title"},"2.1 最小化运行",-1)),n[3]||(n[3]=e("p",{class:"ch-text"},[r("只需将 "),e("code",null,"FlowDesignerLayout"),r(" 放入有明确宽高的父容器，指定 "),e("code",null,"mode"),r(" 即可：")],-1)),e("div",qe,[a(E,{"demo-name":"demoSimple"})]),n[4]||(n[4]=e("div",{class:"ch-callout ch-callout--warning"},[r(" ⚠️ "),e("strong",null,"注意"),r("：父容器必须有明确的宽高，画布会填满父容器空间。推荐 "),e("code",null,"height: 100vh"),r(" 或绝对定位布局。 ")],-1))]),e("section",Ze,[n[8]||(n[8]=e("h2",{class:"ch-section__title"},"2.2 Props 一览",-1)),e("div",Qe,[e("table",en,[n[7]||(n[7]=e("thead",null,[e("tr",null,[e("th",null,"Prop"),e("th",null,"类型"),e("th",null,"默认值"),e("th",null,"说明")])],-1)),e("tbody",null,[(f(),D(j,null,U(x,i=>e("tr",{key:i.name},[e("td",null,[e("code",null,p(i.name),1)]),e("td",null,[e("code",nn,p(i.type),1)]),e("td",null,[i.name=="canvasConfig"?(f(),w(A,{key:0,type:"link",onClick:n[0]||(n[0]=g=>G(b(Ke)))},{default:s(()=>[...n[5]||(n[5]=[r("具体参考",-1)])]),_:1})):i.name=="permissionConfig"?(f(),w(A,{key:1,type:"link",onClick:n[1]||(n[1]=g=>G(b(Je)))},{default:s(()=>[...n[6]||(n[6]=[r("具体参考",-1)])]),_:1})):(f(),D("code",rn,p(i.default),1))]),e("td",null,p(i.desc),1)])),64))])])])]),e("section",tn,[n[11]||(n[11]=e("h2",{class:"ch-section__title"},"2.3 Emits 一览",-1)),e("div",an,[e("table",on,[n[10]||(n[10]=e("thead",null,[e("tr",null,[e("th",null,"事件名"),e("th",null,"参数类型"),e("th",null,"说明")])],-1)),e("tbody",null,[(f(),D(j,null,U(H,i=>e("tr",{key:i.name},[e("td",null,[e("code",null,p(i.name),1)]),e("td",null,[e("code",ln,p(i.arg),1),i.arg=="FlowDesigner,Graph"?(f(),w(b(Le),{key:0,to:"/guide/flowdesigner-api",class:"ch-api-link"},{default:s(()=>[...n[9]||(n[9]=[r("FlowDesigner参考",-1)])]),_:1})):K("",!0),i.arg=="FlowDesigner,Graph"?(f(),D("a",sn,"Graph参考")):K("",!0)]),e("td",{innerHTML:i.desc},null,8,dn)])),64))])])])]),e("section",cn,[n[13]||(n[13]=e("h2",{class:"ch-section__title"},"2.4 生命周期钩子一览",-1)),n[14]||(n[14]=e("p",{class:"ch-text"},[r(" 通过 Props 传递钩子函数，在关键操作节点触发回调。"),e("code",null,"before-*"),r(" 钩子返回 "),e("code",null,"false"),r(" 可阻止操作。 ")],-1)),e("div",un,[e("table",pn,[n[12]||(n[12]=e("thead",null,[e("tr",null,[e("th",null,"钩子名称"),e("th",null,"参数类型"),e("th",null,"返回值"),e("th",null,"说明")])],-1)),e("tbody",null,[(f(),D(j,null,U(y,i=>e("tr",{key:i.name},[e("td",null,[e("code",null,p(i.name),1)]),e("td",null,[e("code",fn,p(i.arg),1)]),e("td",null,[e("code",gn,p(i.return),1)]),e("td",null,p(i.desc),1)])),64))])])]),n[15]||(n[15]=e("div",{class:"ch-callout ch-callout--info"},[r(" 💡 "),e("strong",null,"提示"),r("：钩子函数通过 Props 传递（如 "),e("code",null,':before-node-add="handleBeforeNodeAdd"'),r("）， 而不是通过事件监听（"),e("code",null,"@before-node-add"),r("）。Before 钩子返回 "),e("code",null,"false"),r(" 会阻止操作，返回 "),e("code",null,"true"),r(" 或 "),e("code",null,"undefined"),r(" 允许操作。 ")],-1))]),e("section",hn,[n[16]||(n[16]=e("h2",{class:"ch-section__title"},"2.5 @ready 事件演示",-1)),n[17]||(n[17]=e("p",{class:"ch-text"},[e("code",null,"@ready"),r(" 事件在画布初始化完成后触发，返回 "),e("code",null,"{ designer, graph }"),r(" 对象。 "),e("code",null,"designer"),r(" 是 FlowDesigner 实例，提供画布管理、状态管理等高层 API； "),e("code",null,"graph"),r(" 是 X6 Graph 实例，可直接调用 X6 原生 API 进行底层操作。 ")],-1)),e("div",mn,[a(E,{"demo-name":"demo-ready"})]),n[18]||(n[18]=e("div",{class:"ch-callout ch-callout--info"},[r(" 💡 "),e("strong",null,"提示"),r("：左侧日志面板实时显示事件触发过程。打开浏览器控制台，输入 "),e("code",null,"designer"),r(" 或 "),e("code",null,"graph"),r(" 可查看完整 API。 ")],-1))]),e("section",vn,[n[19]||(n[19]=e("h2",{class:"ch-section__title"},"2.6 @mode-change 事件演示",-1)),n[20]||(n[20]=e("p",{class:"ch-text"},[e("code",null,"@mode-change"),r(" 事件在模式切换时触发，返回新的模式名称。 可用于响应模式变化，执行相应的 UI 更新或权限检查。 ")],-1)),e("div",bn,[a(E,{"demo-name":"demo-mode-change"})])]),e("section",_n,[n[21]||(n[21]=e("h2",{class:"ch-section__title"},"2.7 @selection-change 事件演示",-1)),n[22]||(n[22]=e("p",{class:"ch-text"},[e("code",null,"@selection-change"),r(" 事件在选区变化时触发，返回当前选中的节点/连线数组。 支持单选、多选、框选等多种选择方式。 ")],-1)),e("div",yn,[a(E,{"demo-name":"demo-selection-change"})])]),e("section",wn,[n[23]||(n[23]=e("h2",{class:"ch-section__title"},"2.8 节点生命周期钩子演示",-1)),n[24]||(n[24]=e("p",{class:"ch-text"},[r(" 节点生命周期包含 8 个钩子函数： "),e("code",null,":before-node-add"),r("、"),e("code",null,":after-node-add"),r("、 "),e("code",null,":before-node-remove"),r("、"),e("code",null,":after-node-remove"),r("。 "),e("code",null,":before-node-hover"),r("、"),e("code",null,":after-node-hover"),r("。 "),e("code",null,":before-node-select"),r("、"),e("code",null,":after-node-select"),r("。 "),e("code",null,"before-*"),r(" 钩子返回 "),e("code",null,"false"),r(" 可阻止操作。 ")],-1)),e("div",xn,[a(E,{"demo-name":"demo-node-lifecycle"})]),n[25]||(n[25]=e("div",{class:"ch-callout ch-callout--warning"},[r(" ⚠️ "),e("strong",null,"注意"),r('：取消"允许添加"或"允许删除"的勾选，相应操作将被 '),e("code",null,"before-*"),r(" 钩子拦截。 ")],-1))]),e("section",Cn,[n[26]||(n[26]=e("h2",{class:"ch-section__title"},"2.9 连线生命周期钩子演示",-1)),n[27]||(n[27]=e("p",{class:"ch-text"},[r(" 连线生命周期包含 4 个钩子函数： "),e("code",null,":before-edge-add"),r("、"),e("code",null,":after-edge-add"),r("、 "),e("code",null,":before-edge-remove"),r("、"),e("code",null,":after-edge-remove"),r("。 可用于连接验证、权限检查等场景。 ")],-1)),e("div",kn,[a(E,{"demo-name":"demo-edge-lifecycle"})]),n[28]||(n[28]=e("div",{class:"ch-callout ch-callout--info"},[r(" 💡 "),e("strong",null,"提示"),r("：从一个节点的锚点拖拽到另一个节点的锚点来创建连线。选中连线后按 Delete 或 Backspace 删除。 ")],-1))]),e("section",Sn,[n[29]||(n[29]=e("h2",{class:"ch-section__title"},"2.10 数据加载钩子演示",-1)),n[30]||(n[30]=e("p",{class:"ch-text"},[e("code",null,":after-data-loaded"),r(" 钩子在调用 "),e("code",null,"designer.load()"),r(" 完成后触发。 可用于数据加载后的额外处理，如居中显示、缩放适配等。 ")],-1)),e("div",En,[a(E,{"demo-name":"demo-data-loaded"})])]),n[34]||(n[34]=e("section",{class:"ch-section"},[e("h2",{class:"ch-section__title"},"2.11 本章小结"),e("div",{class:"ch-summary"},[e("div",{class:"ch-summary__item"},"✅ 父容器需设定宽高，画布自动填满"),e("div",{class:"ch-summary__item"},[r("✅ "),e("code",null,"mode"),r(" 控制内置权限预设（design / readonly / preview）")]),e("div",{class:"ch-summary__item"},[r("✅ 通过 "),e("code",null,"@ready"),r(" 事件获取 FlowDesigner 实例进行编程式操作")]),e("div",{class:"ch-summary__item"},"✅ 下一章将详细讲解插槽系统")])],-1)),a(Ue,{ref_key:"codeDrawerRef",ref:z},null,512)]),_:1})}}}),Gn=ce(Tn,[["__scopeId","data-v-6ff0f0fe"]]);export{Gn as default};
//# sourceMappingURL=02-basic-usage-CwJs9znZ.js.map
