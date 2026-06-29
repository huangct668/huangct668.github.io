var ae=(H,G,w)=>new Promise((x,E)=>{var v=p=>{try{n(w.next(p))}catch(o){E(o)}},k=p=>{try{n(w.throw(p))}catch(o){E(o)}},n=p=>p.done?x(p.value):Promise.resolve(p.value).then(v,k);n((w=w.apply(H,G)).next())});import{d as de,w as V,j as $e,U as A,V as h,a2 as S,a0 as le,a1 as i,_ as e,$ as f,a5 as oe,k as a,u as y,a7 as X,W as M,a8 as se,a3 as J,f as u,c as D,n as ie,G as t,F as K,a4 as U,a6 as De}from"./vendor-vue-CcUl2GYw.js";import{G as ze}from"./GuideLayout-H9bcrZVr.js";import{C as z}from"./CodePreviewer-LFdLbxsj.js";import{K as ce,L as Ae,N as Ge,O as Te,H as Me,G as Ne}from"./vendor-antd-DIDkb4Re.js";import{_ as ue}from"./index-CvD_JlXn.js";import"./vendor-x6-B1j_dvdW.js";import"./FlowDesignerTest-DVMGZs2n.js";const Fe={class:"code-drawer__header"},He={class:"code-drawer__header-left"},Oe={class:"code-drawer__title"},Re={class:"code-drawer__header-actions"},We={class:"code-drawer__font-size-label"},Pe={key:0,class:"code-drawer__search-bar"},Be={class:"code-drawer__search-count"},Ie={class:"code-drawer__pre"},je=["innerHTML"],Ve=10,Xe=24,Ke=de({__name:"CodeDrawer",props:{visible:{type:Boolean,default:!1},code:{default:""},language:{default:"text"},title:{default:"代码示例"},width:{default:600},showLineNumbers:{type:Boolean,default:!0}},emits:["update:visible","close"],setup(H,{expose:G,emit:w}){const x=H,E=w,v=u(!1),k=u(""),n=u("text"),p=u("代码示例"),o=u(600),g=u(!1),L=u(!0),C=u("idle"),$=u(!1),m=u(""),d=u([]),b=u(0),Y=u(),q=u(),_=u(13),pe=u(.8),Z=D(()=>k.value||x.code||""),O=D(()=>n.value||x.language||"text"),P=D(()=>{try{const r=O.value.toLowerCase(),c=Z.value;if(r==="json"){const l=JSON.parse(c);return JSON.stringify(l,null,2)}return c}catch(r){return Z.value}}),fe=D(()=>{const c=P.value.split(`
`),l=c.length,s=String(l).length;return c.map((N,T)=>{const F=String(T+1).padStart(s," "),R=ve(N,x.language),W=be(R,T);return x.showLineNumbers?`<span class="code-line"><span class="line-number">${F}</span><span class="line-content">${W}</span></span>`:`<span class="code-line"><span class="line-content">${W}</span></span>`}).join(`
`)}),he=D(()=>({vue:"Vue",typescript:"TypeScript",ts:"TypeScript",javascript:"JavaScript",js:"JavaScript",json:"JSON",html:"HTML",css:"CSS",scss:"SCSS",less:"Less",text:"Text"})[O.value.toLowerCase()]||O.value.toUpperCase()),ge=D(()=>({vue:"#42b883",typescript:"#3178c6",ts:"#3178c6",javascript:"#f7df1e",js:"#f7df1e",json:"#292929",html:"#e34c26",css:"#264de4",scss:"#c6538c",less:"#1d365d"})[O.value.toLowerCase()]||"#999999"),me=D(()=>C.value==="success"?"已复制":C.value==="error"?"复制失败":"复制代码");function ve(r,c){const l=c.toLowerCase();let s=Q(r);return l==="json"?s=s.replace(/"([^"]+)":/g,'<span class="hl-key">"$1"</span>:').replace(/: "([^"]*)"/g,': <span class="hl-string">"$1"</span>').replace(/: (\d+\.?\d*)/g,': <span class="hl-number">$1</span>').replace(/: (true|false)/g,': <span class="hl-boolean">$1</span>').replace(/: (null)/g,': <span class="hl-null">$1</span>'):l==="vue"||l==="html"?s=s.replace(/(&lt;\/?)([\w-]+)/g,'$1<span class="hl-tag">$2</span>').replace(/([\w-]+)=/g,'<span class="hl-attr">$1</span>=').replace(/="([^"]*)"/g,'="<span class="hl-string">$1</span>"'):l==="typescript"||l==="ts"||l==="javascript"||l==="js"?s=s.replace(/\b(const|let|var|function|return|if|else|for|while|class|interface|type|import|export|from|default|async|await)\b/g,'<span class="hl-keyword">$1</span>').replace(/'([^']*)'/g,`'<span class="hl-string">$1</span>'`).replace(/"([^"]*)"/g,'"<span class="hl-string">$1</span>"').replace(/\/\/(.*)/g,'<span class="hl-comment">//$1</span>'):(l==="css"||l==="scss"||l==="less")&&(s=s.replace(/([.#]?[\w-]+)\s*\{/g,'<span class="hl-selector">$1</span> {').replace(/([\w-]+):/g,'<span class="hl-attr">$1</span>:').replace(/: ([^;]+);/g,': <span class="hl-value">$1</span>;')),s}function Q(r){const c={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"};return r.replace(/[&<>"']/g,l=>c[l])}function be(r,c){if(!m.value||d.value.length===0)return r;const s=d.value[b.value]===c,N=Q(m.value),T=new RegExp(N,"gi");return r.replace(T,F=>`<mark class="${s?"search-match search-match--current":"search-match"}">${F}</mark>`)}function _e(){return ae(this,null,function*(){try{yield navigator.clipboard.writeText(P.value),C.value="success",setTimeout(()=>{C.value="idle"},2e3)}catch(r){console.error("复制失败:",r),C.value="error",setTimeout(()=>{C.value="idle"},2e3)}})}function B(){v.value=!1,E("update:visible",!1),E("close"),g.value=!1,$.value=!1,m.value="",d.value=[]}function ye(r){try{return JSON.parse(r),"json"}catch(c){}return r.includes("<template>")&&r.includes("<script")?"vue":r.trim().startsWith("<!DOCTYPE")||r.trim().startsWith("<html")?"html":/^\s*[\w-]+\s*\{[\s\S]*\}\s*$/.test(r)?"css":/\b(interface|type|enum|namespace)\b/.test(r)?"typescript":/\b(const|let|var|function|class|import|export)\b/.test(r)?"javascript":"text"}function we(r){k.value=r.code,r.language?n.value=r.language:(n.value=ye(r.code),console.log("[CodeDrawer] 自动检测语言:",n.value)),p.value=r.title||"代码示例",o.value=r.width||600,v.value=!0}function xe(){v.value=!1,B()}function Ce(){g.value=!g.value}function ke(){L.value=!L.value}function ee(){_.value<Xe&&(_.value+=1)}function ne(){_.value>Ve&&(_.value-=1)}function Se(){_.value=13}function I(r){(r.ctrlKey||r.metaKey)&&(r.key==="+"||r.key==="=")&&(r.preventDefault(),ee()),(r.ctrlKey||r.metaKey)&&r.key==="-"&&(r.preventDefault(),ne()),(r.ctrlKey||r.metaKey)&&r.key==="0"&&(r.preventDefault(),Se())}function re(){$.value=!$.value,$.value?ie(()=>{var r;(r=Y.value)==null||r.focus()}):(m.value="",d.value=[])}function Ee(){if(!m.value){d.value=[];return}const r=P.value.split(`
`),c=[];r.forEach((l,s)=>{l.toLowerCase().includes(m.value.toLowerCase())&&c.push(s)}),d.value=c,b.value=0,c.length>0&&j(c[0])}function te(){d.value.length!==0&&(b.value=(b.value+1)%d.value.length,j(d.value[b.value]))}function Le(){d.value.length!==0&&(b.value=b.value===0?d.value.length-1:b.value-1,j(d.value[b.value]))}function j(r){ie(()=>{const c=q.value;if(!c)return;const s=c.querySelectorAll(".code-line")[r];s&&s.scrollIntoView({behavior:"smooth",block:"center"})})}return V(m,()=>{Ee()}),V(()=>x.visible,r=>{v.value=r||!1,r||(g.value=!1,L.value=!0,$.value=!1,m.value="",d.value=[],C.value="idle")}),V(v,r=>{r?document.addEventListener("keydown",I):(document.removeEventListener("keydown",I),g.value=!1,L.value=!0,$.value=!1,m.value="",d.value=[],C.value="idle",_.value=13,setTimeout(()=>{k.value="",n.value="text",p.value="代码示例"},300))}),$e(()=>{document.removeEventListener("keydown",I)}),G({openDrawer:we,closeDrawer:xe}),(r,c)=>{const l=A("a-button"),s=A("a-tooltip"),N=A("a-divider"),T=A("a-input"),F=A("a-button-group"),R=A("a-drawer");return h(),S(R,{open:v.value,width:g.value?"100%":o.value,class:le({"code-drawer--fullscreen":g.value}),placement:"right",closable:!1,bodyStyle:{padding:0,height:"100%",display:"flex",flexDirection:"column"},onClose:B},{default:i(()=>[e("div",Fe,[e("div",He,[e("span",Oe,f(p.value),1),e("span",{class:"code-drawer__language-tag",style:oe({background:ge.value})},f(he.value),5)]),e("div",Re,[a(s,{title:"搜索代码 (Ctrl+F)"},{default:i(()=>[a(l,{type:"text",size:"small",onClick:re},{icon:i(()=>[a(y(ce))]),_:1})]),_:1}),a(s,{title:"缩小字体 (Ctrl+-)"},{default:i(()=>[a(l,{type:"text",size:"small",onClick:ne,disabled:_.value<=10},{icon:i(()=>[a(y(Ae))]),_:1},8,["disabled"])]),_:1}),e("span",We,f(_.value)+"px",1),a(s,{title:"增大字体 (Ctrl++)"},{default:i(()=>[a(l,{type:"text",size:"small",onClick:ee,disabled:_.value>=24},{icon:i(()=>[a(y(Ge))]),_:1},8,["disabled"])]),_:1}),a(N,{type:"vertical",style:{margin:"0 4px"}}),a(s,{title:L.value?"折叠代码":"展开代码"},{default:i(()=>[a(l,{type:"text",size:"small",onClick:ke},{icon:i(()=>[(h(),S(X(L.value?"ShrinkOutlined":"ArrowsAltOutlined")))]),_:1})]),_:1},8,["title"]),a(s,{title:g.value?"退出全屏":"全屏查看"},{default:i(()=>[a(l,{type:"text",size:"small",onClick:Ce},{icon:i(()=>[(h(),S(X(g.value?"FullscreenExitOutlined":"FullscreenOutlined")))]),_:1})]),_:1},8,["title"]),a(s,{title:me.value},{default:i(()=>[a(l,{type:"text",size:"small",onClick:_e},{icon:i(()=>[(h(),S(X(C.value==="success"?"CheckOutlined":"CopyOutlined")))]),_:1})]),_:1},8,["title"]),a(s,{title:"关闭 (ESC)"},{default:i(()=>[a(l,{type:"text",size:"small",onClick:B},{icon:i(()=>[a(y(Te))]),_:1})]),_:1})])]),$.value?(h(),M("div",Pe,[a(T,{ref_key:"searchInputRef",ref:Y,value:m.value,"onUpdate:value":c[0]||(c[0]=W=>m.value=W),placeholder:"搜索代码...",size:"small",onKeyup:[se(te,["enter"]),se(re,["esc"])]},{prefix:i(()=>[a(y(ce))]),suffix:i(()=>[e("span",Be,f(d.value.length>0?`${b.value+1}/${d.value.length}`:"0/0"),1)]),_:1},8,["value"]),a(F,{size:"small"},{default:i(()=>[a(l,{onClick:Le,disabled:d.value.length===0},{default:i(()=>[a(y(Me))]),_:1},8,["disabled"]),a(l,{onClick:te,disabled:d.value.length===0},{default:i(()=>[a(y(Ne))]),_:1},8,["disabled"])]),_:1})])):J("",!0),e("div",{class:le(["code-drawer__content",{"code-drawer__content--collapsed":!L.value}])},[e("pre",Ie,[e("code",{ref_key:"codeRef",ref:q,class:"code-drawer__code",style:oe({fontSize:`${_.value}px`,lineHeight:pe.value}),innerHTML:fe.value},null,12,je)])],2)]),_:1},8,["open","width","class"])}}}),Ue=ue(Ke,[["__scopeId","data-v-59fc6667"]]),Je=`import type { CanvasConfig } from '../../../views/types/flow.types'\r
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
      strokeColor: '#52c41a',\r
      //fillColor: '#0000fc',\r
      fillColor: '#0000fc',\r
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
`,Ye=`//组件内部默认内置3种模式design|readonly|preview，通过传入重置某种模式的权限\r
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
`,qe={class:"ch-section"},Ze={class:"ch-demo-frame",style:{height:"380px"}},Qe={class:"ch-section"},en={class:"ch-table-wrap"},nn={class:"ch-table"},rn={class:"ch-type"},tn={key:2},an={class:"ch-section"},ln={class:"ch-table-wrap"},on={class:"ch-table"},sn={class:"ch-type"},cn={key:1,class:"ch-api-link",href:"https://x6.antv.antgroup.com/api/graph/graph",target:"_blank"},dn=["innerHTML"],un={class:"ch-section"},pn={class:"ch-table-wrap"},fn={class:"ch-table"},hn={class:"ch-type"},gn={class:"ch-type"},mn={class:"ch-section"},vn={class:"ch-demo-frame"},bn={class:"ch-section"},_n={class:"ch-demo-frame"},yn={class:"ch-section"},wn={class:"ch-demo-frame"},xn={class:"ch-section"},Cn={class:"ch-demo-frame"},kn={class:"ch-section"},Sn={class:"ch-demo-frame"},En={class:"ch-section"},Ln={class:"ch-demo-frame"},$n=de({__name:"02-basic-usage",setup(H){const G=u();function w(k){var n;(n=G.value)==null||n.openDrawer({code:k,title:"Vue 组件示例",width:700})}const x=[{name:"mode",type:"string",default:"'design'",desc:"初始模式，支持 design / readonly / preview 及自定义模式名"},{name:"canvasConfig",type:"Partial<CanvasConfig>",default:"undefined",desc:"画布配置，与默认配置深度合并"},{name:"permissionConfig",type:"PermissionConfigMap",default:"undefined",desc:"多模式权限配置映射表"}],E=[{name:"@ready",arg:"FlowDesigner,Graph",desc:"画布初始化完成， <br />返回 FlowDesigner 实例, <br />Graph实例参考(https://x6.antv.antgroup.com/api/graph/graph)"},{name:"@mode-change",arg:"DesignerMode",desc:"模式切换时"},{name:"@selection-change",arg:"Cell[]",desc:"选区变化时触发，返回当前选中的节点/连线数组"}],v=[{name:":before-node-add",arg:"BeforeNodeAddEvent",return:"boolean | Promise<boolean>",desc:"节点添加前钩子，返回 false 阻止添加"},{name:":after-node-add",arg:"AfterNodeAddEvent",return:"void",desc:"节点添加后钩子"},{name:":before-node-remove",arg:"BeforeNodeRemoveEvent",return:"boolean | Promise<boolean>",desc:"节点删除前钩子，返回 false 阻止删除"},{name:":after-node-remove",arg:"AfterNodeRemoveEvent",return:"void",desc:"节点删除后钩子"},{name:":before-edge-add",arg:"BeforeEdgeAddEvent",return:"boolean | Promise<boolean>",desc:"连线创建前钩子，返回 false 阻止连接"},{name:":after-edge-add",arg:"AfterEdgeAddEvent",return:"void",desc:"连线创建后钩子"},{name:":before-edge-remove",arg:"BeforeEdgeRemoveEvent",return:"boolean | Promise<boolean>",desc:"连线删除前钩子，返回 false 阻止删除"},{name:":after-edge-remove",arg:"AfterEdgeRemoveEvent",return:"void",desc:"连线删除后钩子"},{name:":after-data-loaded",arg:"FlowData",return:"void",desc:"数据加载完成后钩子"}];return(k,n)=>{const p=A("a-button");return h(),S(ze,null,{default:i(()=>[n[31]||(n[31]=e("div",{class:"ch-header"},[e("span",{class:"ch-header__num"},"第 2 章"),e("h1",{class:"ch-header__title"},"基础使用"),e("p",{class:"ch-header__desc"},"最小化运行示例、完整 Props / Emits 说明，以及可交互的三模式演示。"),e("p",{class:"ch-text",style:{"margin-top":"10px"}},[t(" 安装依赖："),e("code",null,"npm install @quick-code/x6-flow-designer"),e("br"),t(" 引入组件："),e("code",null,"import { FlowDesignerLayout } from '@quick-code/x6-flow-designer'")])],-1)),e("section",qe,[n[2]||(n[2]=e("h2",{class:"ch-section__title"},"2.1 最小化运行",-1)),n[3]||(n[3]=e("p",{class:"ch-text"},[t("只需将 "),e("code",null,"FlowDesignerLayout"),t(" 放入有明确宽高的父容器，指定 "),e("code",null,"mode"),t(" 即可：")],-1)),e("div",Ze,[a(z,{"demo-name":"demoSimple"})]),n[4]||(n[4]=e("div",{class:"ch-callout ch-callout--warning"},[t(" ⚠️ "),e("strong",null,"注意"),t("：父容器必须有明确的宽高，画布会填满父容器空间。推荐 "),e("code",null,"height: 100vh"),t(" 或绝对定位布局。 ")],-1))]),e("section",Qe,[n[8]||(n[8]=e("h2",{class:"ch-section__title"},"2.2 Props 一览",-1)),e("div",en,[e("table",nn,[n[7]||(n[7]=e("thead",null,[e("tr",null,[e("th",null,"Prop"),e("th",null,"类型"),e("th",null,"默认值"),e("th",null,"说明")])],-1)),e("tbody",null,[(h(),M(K,null,U(x,o=>e("tr",{key:o.name},[e("td",null,[e("code",null,f(o.name),1)]),e("td",null,[e("code",rn,f(o.type),1)]),e("td",null,[o.name=="canvasConfig"?(h(),S(p,{key:0,type:"link",onClick:n[0]||(n[0]=g=>w(y(Je)))},{default:i(()=>[...n[5]||(n[5]=[t("具体参考",-1)])]),_:1})):o.name=="permissionConfig"?(h(),S(p,{key:1,type:"link",onClick:n[1]||(n[1]=g=>w(y(Ye)))},{default:i(()=>[...n[6]||(n[6]=[t("具体参考",-1)])]),_:1})):(h(),M("code",tn,f(o.default),1))]),e("td",null,f(o.desc),1)])),64))])])])]),e("section",an,[n[11]||(n[11]=e("h2",{class:"ch-section__title"},"2.3 Emits 一览",-1)),e("div",ln,[e("table",on,[n[10]||(n[10]=e("thead",null,[e("tr",null,[e("th",null,"事件名"),e("th",null,"参数类型"),e("th",null,"说明")])],-1)),e("tbody",null,[(h(),M(K,null,U(E,o=>e("tr",{key:o.name},[e("td",null,[e("code",null,f(o.name),1)]),e("td",null,[e("code",sn,f(o.arg),1),o.arg=="FlowDesigner,Graph"?(h(),S(y(De),{key:0,to:"/guide/flowdesigner-api",class:"ch-api-link"},{default:i(()=>[...n[9]||(n[9]=[t("FlowDesigner参考",-1)])]),_:1})):J("",!0),o.arg=="FlowDesigner,Graph"?(h(),M("a",cn,"Graph参考")):J("",!0)]),e("td",{innerHTML:o.desc},null,8,dn)])),64))])])])]),e("section",un,[n[13]||(n[13]=e("h2",{class:"ch-section__title"},"2.4 生命周期钩子一览",-1)),n[14]||(n[14]=e("p",{class:"ch-text"},[t(" 通过 Props 传递钩子函数，在关键操作节点触发回调。"),e("code",null,"before-*"),t(" 钩子返回 "),e("code",null,"false"),t(" 可阻止操作。 ")],-1)),e("div",pn,[e("table",fn,[n[12]||(n[12]=e("thead",null,[e("tr",null,[e("th",null,"钩子名称"),e("th",null,"参数类型"),e("th",null,"返回值"),e("th",null,"说明")])],-1)),e("tbody",null,[(h(),M(K,null,U(v,o=>e("tr",{key:o.name},[e("td",null,[e("code",null,f(o.name),1)]),e("td",null,[e("code",hn,f(o.arg),1)]),e("td",null,[e("code",gn,f(o.return),1)]),e("td",null,f(o.desc),1)])),64))])])]),n[15]||(n[15]=e("div",{class:"ch-callout ch-callout--info"},[t(" 💡 "),e("strong",null,"提示"),t("：钩子函数通过 Props 传递（如 "),e("code",null,':before-node-add="handleBeforeNodeAdd"'),t("）， 而不是通过事件监听（"),e("code",null,"@before-node-add"),t("）。Before 钩子返回 "),e("code",null,"false"),t(" 会阻止操作，返回 "),e("code",null,"true"),t(" 或 "),e("code",null,"undefined"),t(" 允许操作。 ")],-1))]),e("section",mn,[n[16]||(n[16]=e("h2",{class:"ch-section__title"},"2.5 @ready 事件演示",-1)),n[17]||(n[17]=e("p",{class:"ch-text"},[e("code",null,"@ready"),t(" 事件在画布初始化完成后触发，返回 "),e("code",null,"{ designer, graph }"),t(" 对象。 "),e("code",null,"designer"),t(" 是 FlowDesigner 实例，提供画布管理、状态管理等高层 API； "),e("code",null,"graph"),t(" 是 X6 Graph 实例，可直接调用 X6 原生 API 进行底层操作。 ")],-1)),e("div",vn,[a(z,{"demo-name":"demo-ready"})]),n[18]||(n[18]=e("div",{class:"ch-callout ch-callout--info"},[t(" 💡 "),e("strong",null,"提示"),t("：左侧日志面板实时显示事件触发过程。打开浏览器控制台，输入 "),e("code",null,"designer"),t(" 或 "),e("code",null,"graph"),t(" 可查看完整 API。 ")],-1))]),e("section",bn,[n[19]||(n[19]=e("h2",{class:"ch-section__title"},"2.6 @mode-change 事件演示",-1)),n[20]||(n[20]=e("p",{class:"ch-text"},[e("code",null,"@mode-change"),t(" 事件在模式切换时触发，返回新的模式名称。 可用于响应模式变化，执行相应的 UI 更新或权限检查。 ")],-1)),e("div",_n,[a(z,{"demo-name":"demo-mode-change"})])]),e("section",yn,[n[21]||(n[21]=e("h2",{class:"ch-section__title"},"2.7 @selection-change 事件演示",-1)),n[22]||(n[22]=e("p",{class:"ch-text"},[e("code",null,"@selection-change"),t(" 事件在选区变化时触发，返回当前选中的节点/连线数组。 支持单选、多选、框选等多种选择方式。 ")],-1)),e("div",wn,[a(z,{"demo-name":"demo-selection-change"})])]),e("section",xn,[n[23]||(n[23]=e("h2",{class:"ch-section__title"},"2.8 节点生命周期钩子演示",-1)),n[24]||(n[24]=e("p",{class:"ch-text"},[t(" 节点生命周期包含 4 个钩子函数： "),e("code",null,":before-node-add"),t("、"),e("code",null,":after-node-add"),t("、 "),e("code",null,":before-node-remove"),t("、"),e("code",null,":after-node-remove"),t("。 "),e("code",null,"before-*"),t(" 钩子返回 "),e("code",null,"false"),t(" 可阻止操作。 ")],-1)),e("div",Cn,[a(z,{"demo-name":"demo-node-lifecycle"})]),n[25]||(n[25]=e("div",{class:"ch-callout ch-callout--warning"},[t(" ⚠️ "),e("strong",null,"注意"),t('：取消"允许添加"或"允许删除"的勾选，相应操作将被 '),e("code",null,"before-*"),t(" 钩子拦截。 ")],-1))]),e("section",kn,[n[26]||(n[26]=e("h2",{class:"ch-section__title"},"2.9 连线生命周期钩子演示",-1)),n[27]||(n[27]=e("p",{class:"ch-text"},[t(" 连线生命周期包含 4 个钩子函数： "),e("code",null,":before-edge-add"),t("、"),e("code",null,":after-edge-add"),t("、 "),e("code",null,":before-edge-remove"),t("、"),e("code",null,":after-edge-remove"),t("。 可用于连接验证、权限检查等场景。 ")],-1)),e("div",Sn,[a(z,{"demo-name":"demo-edge-lifecycle"})]),n[28]||(n[28]=e("div",{class:"ch-callout ch-callout--info"},[t(" 💡 "),e("strong",null,"提示"),t("：从一个节点的锚点拖拽到另一个节点的锚点来创建连线。选中连线后按 Delete 或 Backspace 删除。 ")],-1))]),e("section",En,[n[29]||(n[29]=e("h2",{class:"ch-section__title"},"2.10 数据加载钩子演示",-1)),n[30]||(n[30]=e("p",{class:"ch-text"},[e("code",null,":after-data-loaded"),t(" 钩子在调用 "),e("code",null,"designer.load()"),t(" 完成后触发。 可用于数据加载后的额外处理，如居中显示、缩放适配等。 ")],-1)),e("div",Ln,[a(z,{"demo-name":"demo-data-loaded"})])]),n[32]||(n[32]=e("section",{class:"ch-section"},[e("h2",{class:"ch-section__title"},"2.11 本章小结"),e("div",{class:"ch-summary"},[e("div",{class:"ch-summary__item"},"✅ 父容器需设定宽高，画布自动填满"),e("div",{class:"ch-summary__item"},[t("✅ "),e("code",null,"mode"),t(" 控制内置权限预设（design / readonly / preview）")]),e("div",{class:"ch-summary__item"},[t("✅ 通过 "),e("code",null,"@ready"),t(" 事件获取 FlowDesigner 实例进行编程式操作")]),e("div",{class:"ch-summary__item"},"✅ 下一章将详细讲解插槽系统")])],-1)),a(Ue,{ref_key:"codeDrawerRef",ref:G},null,512)]),_:1})}}}),Hn=ue($n,[["__scopeId","data-v-74d11ad7"]]);export{Hn as default};
//# sourceMappingURL=02-basic-usage-CZrXWjXV.js.map
