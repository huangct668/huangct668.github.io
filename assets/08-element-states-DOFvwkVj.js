import{d as p,o as u,V as v,a2 as b,a1 as g,_ as e,A as o,G as t,k as d,f as m}from"./vendor-vue-n6x0MXoC.js";import{G as f}from"./GuideLayout-BIMqwKL5.js";import{C as r}from"./CodePreviewer-CdyH-HNW.js";import{_ as y}from"./index-82OMxN3c.js";import"./FlowDesignerTest-CVT-husl.js";import"./vendor-x6-B0tTI3Tl.js";import"./vendor-antd-DQF42uR_.js";const h={class:"ch-toc"},w={class:"ch-toc__list"},x={class:"ch-toc__item"},S={class:"ch-toc__item"},N={class:"ch-toc__item"},k={class:"ch-toc__item"},E={class:"ch-toc__item"},R={class:"ch-toc__item"},C={class:"ch-toc__item"},P={id:"node-state-handler",class:"ch-section"},D={id:"edge-state-handler",class:"ch-section"},H={id:"hook-state-handler",class:"ch-section"},z={id:"port-state-renderer",class:"ch-section"},A={id:"tooltip-renderer",class:"ch-section"},M=p({__name:"08-element-states",setup(T){const i=m(null);u(()=>{i.value=document.querySelector(".guide-content");const n=window.location.hash;if(n){const l=n.slice(1);setTimeout(()=>a(l),100)}});function a(n){const l=document.getElementById(n),s=i.value;if(!l||!s){console.warn(`Section or container not found: ${n}`);return}const c=s.getBoundingClientRect(),_=l.getBoundingClientRect().top-c.top+s.scrollTop-20;s.scrollTo({top:_,behavior:"smooth"}),history.replaceState(null,"",`#${n}`)}return(n,l)=>(v(),b(f,null,{default:g(()=>[l[85]||(l[85]=e("div",{class:"ch-header"},[e("span",{class:"ch-header__num"},"第 8 章"),e("h1",{class:"ch-header__title"},"元素状态管理"),e("p",{class:"ch-header__desc"}," 学习如何使用状态处理器自定义节点和连线在不同状态下的样式和行为。 ")],-1)),e("nav",h,[l[7]||(l[7]=e("h3",{class:"ch-toc__title"},"本章目录",-1)),e("ul",w,[e("li",x,[e("a",{href:"#overview",onClick:l[0]||(l[0]=o(s=>a("overview"),["prevent"]))},"8.1 概述")]),e("li",S,[e("a",{href:"#node-state-handler",onClick:l[1]||(l[1]=o(s=>a("node-state-handler"),["prevent"]))},"8.2 节点状态处理器")]),e("li",N,[e("a",{href:"#edge-state-handler",onClick:l[2]||(l[2]=o(s=>a("edge-state-handler"),["prevent"]))},"8.3 连线状态处理器")]),e("li",k,[e("a",{href:"#hook-state-handler",onClick:l[3]||(l[3]=o(s=>a("hook-state-handler"),["prevent"]))},"8.4 钩子函数处理节点/连线状态")]),e("li",E,[e("a",{href:"#port-state-renderer",onClick:l[4]||(l[4]=o(s=>a("port-state-renderer"),["prevent"]))},"8.5 锚点状态渲染器")]),e("li",R,[e("a",{href:"#tooltip-renderer",onClick:l[5]||(l[5]=o(s=>a("tooltip-renderer"),["prevent"]))},"8.6 Tooltip 渲染控制器")]),e("li",C,[e("a",{href:"#api-reference",onClick:l[6]||(l[6]=o(s=>a("api-reference"),["prevent"]))},"8.7 相关 API")])])]),l[86]||(l[86]=e("section",{id:"overview",class:"ch-section"},[e("h2",{class:"ch-section__title"},"8.1 概述"),e("p",{class:"ch-text"},[t(" FlowDesigner 提供了强大的"),e("strong",null,"状态管理系统"),t("，允许你自定义节点和连线在不同状态下的表现。 系统采用"),e("strong",null,"策略模式"),t("，通过注册状态处理器（State Handler）来实现状态的样式和行为定制。 ")]),e("div",{class:"feature-grid"},[e("div",{class:"feature-card"},[e("div",{class:"feature-card__icon"},"🎯"),e("h4",{class:"feature-card__title"},"内置状态"),e("p",{class:"feature-card__desc"},"支持 default、hover、selected、dragging 等常见状态")]),e("div",{class:"feature-card"},[e("div",{class:"feature-card__icon"},"🔌"),e("h4",{class:"feature-card__title"},"可扩展"),e("p",{class:"feature-card__desc"},"支持注册自定义状态处理器，实现任意状态效果")]),e("div",{class:"feature-card"},[e("div",{class:"feature-card__icon"},"🎨"),e("h4",{class:"feature-card__title"},"灵活控制"),e("p",{class:"feature-card__desc"},"完全控制节点/连线的样式、动画、交互行为")])])],-1)),e("section",P,[l[8]||(l[8]=e("h2",{class:"ch-section__title"},"8.2 节点状态处理器",-1)),l[9]||(l[9]=e("p",{class:"ch-section__desc"},[t(" 使用 "),e("code",null,"keyMap"),t(" 可以重新映射内置操作的快捷键，无需重写逻辑。所有权限检查和内部实现自动继承。 ")],-1)),l[10]||(l[10]=e("div",{class:"ch-callout ch-callout--tip"},[e("div",{class:"ch-callout__icon"},"💡"),e("div",{class:"ch-callout__content"},[e("p",{class:"ch-callout__title"},"状态处理器使用建议"),e("ul",{class:"ch-callout__list"},[e("li",null,[e("strong",null,"保持幂等性"),t("：多次应用同一状态应该产生相同效果")]),e("li",null,[e("strong",null,"实现 cleanup"),t("：确保状态切换时正确清理旧状态的副作用")]),e("li",null,[e("strong",null,"避免副作用"),t("：不要在状态处理器中修改 graph 的全局配置")]),e("li",null,[e("strong",null,"性能优化"),t("：避免在状态处理器中执行耗时操作")])])])],-1)),l[11]||(l[11]=e("h3",{class:"ch-subsection__title"},"节点内置状态",-1)),l[12]||(l[12]=e("p",{style:{color:"red","font-size":"13px"}},"注意: 内置交互如下",-1)),l[13]||(l[13]=e("p",{style:{color:"red","font-size":"13px"}},`内置交互为标识符"_state"保存在node或者edge对象里，内部通过node.getProp('_state')获取，node.setProp('_state')保存`,-1)),l[14]||(l[14]=e("p",{style:{color:"red","font-size":"13px"}},"点击画布时(受权限管控)，将所有node,edge置为default状态;",-1)),l[15]||(l[15]=e("p",{style:{color:"red","font-size":"13px"}},"点击节点时(受权限管控)，将其他所有连线和节点状态置为：default，将点击节点状态置为:selected;",-1)),l[16]||(l[16]=e("p",{style:{color:"red","font-size":"13px"}},"点击连线时(受权限管控)，将其他所有连线和节点状态置为：default，将点击连线状态置为:selected;",-1)),l[17]||(l[17]=e("p",{style:{color:"red","font-size":"13px"}},"hover节点时(受权限管控)，将目标节点状态置为hover，移出节点时，将节点状态还原",-1)),l[18]||(l[18]=e("p",{style:{color:"red","font-size":"13px"}},"注意: FlowDesignerLayout.vue默认内置以下3个状态，3个状态的默认样式请参考基础使用里的：canvasConfig",-1)),l[19]||(l[19]=e("div",{class:"state-table"},[e("div",{class:"state-table__row state-table__header"},[e("div",{class:"state-table__cell"},"状态名称"),e("div",{class:"state-table__cell"},"触发时机"),e("div",{class:"state-table__cell"},"默认效果")]),e("div",{class:"state-table__row"},[e("div",{class:"state-table__cell"},[e("code",null,"default")]),e("div",{class:"state-table__cell"},"节点初始状态"),e("div",{class:"state-table__cell"},"默认样式，隐藏锚点")]),e("div",{class:"state-table__row"},[e("div",{class:"state-table__cell"},[e("code",null,"hover")]),e("div",{class:"state-table__cell"},"鼠标悬停"),e("div",{class:"state-table__cell"},"显示锚点，应用悬停高亮")]),e("div",{class:"state-table__row"},[e("div",{class:"state-table__cell"},[e("code",null,"selected")]),e("div",{class:"state-table__cell"},"节点被选中"),e("div",{class:"state-table__cell"},"显示选中框和锚点")])],-1)),d(r,{"demo-name":"demo-node-state"}),l[20]||(l[20]=e("p",{class:"ch-text"},[t(" 使用 "),e("code",null,"registerNodeStateHandler()"),t(" 注册自定义节点状态处理器。 ")],-1)),l[21]||(l[21]=e("h3",{class:"ch-subsection__title"},"API 签名",-1)),l[22]||(l[22]=e("div",{class:"ch-code-block"},[e("pre",null,[e("code",{class:"language-typescript"},`designer.registerNodeStateHandler(
  stateName: string,           // 状态名称（如 'custom-error'）
  handler: NodeStateHandler,   // 状态处理器对象
  override?: boolean          // 是否覆盖已有处理器（默认 true）
)

// NodeStateHandler 接口
interface NodeStateHandler {
  apply(node: Node, context: NodeStateContext): void    // 应用状态
  cleanup?(node: Node, context: NodeStateContext): void // 清理状态（可选）
}

// 上下文对象
interface NodeStateContext {
  config: CanvasConfig      // 画布配置
  graph: Graph              // Graph 实例
  manager: NodeStateManager // 状态管理器实例
  canConnect: boolean       // 是否允许连线
}`)])],-1)),l[23]||(l[23]=e("h3",{class:"ch-subsection__title"},"示例：自定义错误状态",-1)),l[24]||(l[24]=e("p",{class:"ch-text"},[t(" 以下示例注册一个 "),e("code",null,"error"),t(" 状态，使节点显示红色边框和错误图标。 ")],-1)),l[25]||(l[25]=e("div",{class:"ch-code-block"},[e("pre",null,[e("code",{class:"language-typescript"},`// 在 @ready 回调中注册
function handleReady(designer: FlowDesigner) {
  // 注册自定义错误状态
  designer.registerNodeStateHandler('error', {
    apply(node, context) {
      // 设置红色边框
      node.setAttrs({
        body: {
          stroke: '#ef4444',
          strokeWidth: 3,
        }
      })

      // 设置节点数据（用于显示错误图标）
      node.setData({
        ...node.getData(),
        hasError: true
      })
    },
    cleanup(node, context) {
      // 恢复默认样式
      node.setAttrs({
        body: {
          stroke: '#d9d9d9',
          strokeWidth: 1,
        }
      })

      // 清除错误标记
      node.setData({
        ...node.getData(),
        hasError: false
      })
    }
  })

  // 使用：设置节点为错误状态
  const node = graph.getCellById('node1')
  node.setData({ state: 'error' })
}`)])],-1))]),e("section",D,[l[26]||(l[26]=e("h2",{class:"ch-section__title"},"8.3 连线状态处理器",-1)),l[27]||(l[27]=e("p",{class:"ch-text"},[t(" 使用 "),e("code",null,"registerEdgeStateHandler()"),t(" 注册自定义连线状态处理器。 ")],-1)),l[28]||(l[28]=e("p",{style:{color:"red","font-size":"13px"}},`注意: 内置交互为标识符"_state"保存在node或者edge对象里，内部通过node.getProp('_state')获取，node.setProp('_state')保存`,-1)),l[29]||(l[29]=e("p",{style:{color:"red","font-size":"13px"}},"点击画布时(受权限管控)，将所有node,edge置为default状态;(受权限管控)",-1)),l[30]||(l[30]=e("p",{style:{color:"red","font-size":"13px"}},"点击节点时(受权限管控)，将其他所有连线和节点状态置为：default，将点击节点状态置为:selected;",-1)),l[31]||(l[31]=e("p",{style:{color:"red","font-size":"13px"}},"点击连线时(受权限管控)，将其他所有连线和节点状态置为：default，将点击连线状态置为:selected;",-1)),l[32]||(l[32]=e("p",{style:{color:"red","font-size":"13px"}},"鼠标移动上连线时(受权限管控)，将目标节点状态置为hover，移出连线时，将连线状态还原",-1)),l[33]||(l[33]=e("p",{style:{color:"red","font-size":"13px"}},"鼠标移动上连线时(受权限管控)，将所有出线的状态置为：flowing,移出时将所有出线状态还原",-1)),l[34]||(l[34]=e("p",{style:{color:"red","font-size":"13px"}},"注意: FlowDesignerLayout.vue默认内置以下5个连线状态，5个状态的默认样式请参考基础使用里的：canvasConfig",-1)),l[35]||(l[35]=e("div",{class:"ch-callout ch-callout--tip"},[e("div",{class:"ch-callout__icon"},"💡"),e("div",{class:"ch-callout__content"},[e("p",{class:"ch-callout__title"},"状态处理器使用建议"),e("ul",{class:"ch-callout__list"},[e("li",null,[e("strong",null,"保持幂等性"),t("：多次应用同一状态应该产生相同效果")]),e("li",null,[e("strong",null,"实现 cleanup"),t("：确保状态切换时正确清理旧状态的副作用")]),e("li",null,[e("strong",null,"避免副作用"),t("：不要在状态处理器中修改 graph 的全局配置")]),e("li",null,[e("strong",null,"性能优化"),t("：避免在状态处理器中执行耗时操作")])])])],-1)),l[36]||(l[36]=e("h3",{class:"ch-subsection__title"},"连线内置状态",-1)),l[37]||(l[37]=e("div",{class:"state-table"},[e("div",{class:"state-table__row state-table__header"},[e("div",{class:"state-table__cell"},"状态名称"),e("div",{class:"state-table__cell"},"触发时机"),e("div",{class:"state-table__cell"},"默认效果")]),e("div",{class:"state-table__row"},[e("div",{class:"state-table__cell"},[e("code",null,"default")]),e("div",{class:"state-table__cell"},"连线初始状态"),e("div",{class:"state-table__cell"},"默认样式（灰色细线）")]),e("div",{class:"state-table__row"},[e("div",{class:"state-table__cell"},[e("code",null,"hover")]),e("div",{class:"state-table__cell"},"鼠标悬停连线"),e("div",{class:"state-table__cell"},"蓝色加粗显示")]),e("div",{class:"state-table__row"},[e("div",{class:"state-table__cell"},[e("code",null,"selected")]),e("div",{class:"state-table__cell"},"连线被选中"),e("div",{class:"state-table__cell"},"蓝色加粗高亮，显示控制点")]),e("div",{class:"state-table__row"},[e("div",{class:"state-table__cell"},[e("code",null,"flowing")]),e("div",{class:"state-table__cell"},"节点 hover 时的出线效果"),e("div",{class:"state-table__cell"},"虚线流动动画（自动触发）")]),e("div",{class:"state-table__row"},[e("div",{class:"state-table__cell"},[e("code",null,"dimmed")]),e("div",{class:"state-table__cell"},"边重叠时弱化其他边"),e("div",{class:"state-table__cell"},"降低透明度（保持原状态样式）")])],-1)),d(r,{"demo-name":"demo-edge-state"}),l[38]||(l[38]=e("p",{class:"ch-text"},[t(" 使用 "),e("code",null,"registerEdgeStateHandler()"),t(" 注册自定义连线状态处理器。 ")],-1)),l[39]||(l[39]=e("h3",{class:"ch-subsection__title"},"API 签名",-1)),l[40]||(l[40]=e("div",{class:"ch-code-block"},[e("pre",null,[e("code",{class:"language-typescript"},`designer.registerEdgeStateHandler(
  stateName: string,           // 状态名称（如 'custom-active'）
  handler: EdgeStateHandler,   // 状态处理器对象
  override?: boolean          // 是否覆盖已有处理器（默认 true）
)

// EdgeStateHandler 接口
interface EdgeStateHandler {
  apply(edge: Edge, context: EdgeStateContext): void    // 应用状态
  cleanup?(edge: Edge, context: EdgeStateContext): void // 清理状态（可选）
}

// 上下文对象
interface EdgeStateContext {
  config: CanvasConfig      // 画布配置
  graph: Graph              // Graph 实例
  manager: EdgeStateManager // 状态管理器实例
}`)])],-1)),l[41]||(l[41]=e("h3",{class:"ch-subsection__title"},"示例：自定义激活状态",-1)),l[42]||(l[42]=e("p",{class:"ch-text"},[t(" 以下示例注册一个 "),e("code",null,"active"),t(" 状态，使连线显示绿色加粗样式。 ")],-1)),l[43]||(l[43]=e("div",{class:"ch-code-block"},[e("pre",null,[e("code",{class:"language-typescript"},`// 在 @ready 回调中注册
function handleReady(designer: FlowDesigner) {
  // 注册自定义激活状态
  designer.registerEdgeStateHandler('active', {
    apply(edge, context) {
      // 设置绿色加粗样式
      edge.setAttrs({
        line: {
          stroke: '#10b981',
          strokeWidth: 3,
          strokeDasharray: '5 5',
        }
      })
    },
    cleanup(edge, context) {
      // 恢复默认样式
      edge.setAttrs({
        line: {
          stroke: '#8f959e',
          strokeWidth: 1,
          strokeDasharray: 'none',
        }
      })
    }
  })

  // 使用：设置连线为激活状态
  const edge = graph.getCellById('edge1')
  edge.setData({ state: 'active' })
}`)])],-1))]),e("section",H,[l[44]||(l[44]=e("h2",{class:"ch-section__title"},"8.4 钩子函数处理节点/连线状态",-1)),l[45]||(l[45]=e("p",{class:"ch-text"},[t(" 除了使用 "),e("code",null,"designer.registerNodeStateHandler()"),t(" 和 "),e("code",null,"designer.registerEdgeStateHandler()"),t(" 在 "),e("code",null,"@ready"),t(" 回调中注册状态处理器外， FlowDesigner 还提供了"),e("strong",null,"更便捷的 Props 钩子方式"),t("来自定义状态渲染器，无需手动调用注册方法。 ")],-1)),l[46]||(l[46]=e("div",{class:"ch-callout ch-callout--tip"},[e("div",{class:"ch-callout__icon"},"🎯"),e("div",{class:"ch-callout__content"},[e("p",{class:"ch-callout__title"},"钩子函数的优势"),e("ul",{class:"ch-callout__list"},[e("li",null,[e("strong",null,"声明式配置"),t("：通过 Props 传递，更符合 Vue 组件的使用习惯")]),e("li",null,[e("strong",null,"响应式更新"),t("：支持动态修改状态渲染器，自动重新注册")]),e("li",null,[e("strong",null,"类型安全"),t("：完整的 TypeScript 类型定义和智能提示")]),e("li",null,[e("strong",null,"统一管理"),t("：与其他 Props 配置放在一起，便于维护")])])])],-1)),d(r,{"demo-name":"demo-state-renderers"}),l[47]||(l[47]=e("h3",{class:"ch-subsection__title"},"更全面的edge-state-renderers / node-state-renderers示例",-1)),d(r,{"demo-name":"demo-state-svgNode"}),l[48]||(l[48]=e("h3",{class:"ch-subsection__title"},"节点状态渲染器 Props",-1)),l[49]||(l[49]=e("p",{class:"ch-text"},[t(" 使用 "),e("code",null,":node-state-renderers"),t(" Props 传递节点状态渲染器映射表。 ")],-1)),l[50]||(l[50]=e("div",{class:"ch-code-block"},[e("pre",null,[e("code",{class:"language-typescript"},`// Props 类型定义
interface NodeStateRendererMap {
  [stateName: string]: NodeStateRenderer
}

// 状态渲染器工厂函数
type NodeStateRenderer = (node: Node) => {
  apply: (cell: Node) => void      // 应用状态的函数
  cleanup?: (cell: Node) => void   // 清理状态的函数（可选）
}

// 使用示例
<FlowDesignerLayout
  :node-state-renderers="nodeRenderers"
  @ready="handleReady"
/>`)])],-1)),l[51]||(l[51]=e("h3",{class:"ch-subsection__title"},"连线状态渲染器 Props",-1)),l[52]||(l[52]=e("p",{class:"ch-text"},[t(" 使用 "),e("code",null,":edge-state-renderers"),t(" Props 传递连线状态渲染器映射表。 ")],-1)),l[53]||(l[53]=e("div",{class:"ch-code-block"},[e("pre",null,[e("code",{class:"language-typescript"},`// Props 类型定义
interface EdgeStateRendererMap {
  [stateName: string]: EdgeStateRenderer
}

// 状态渲染器工厂函数
type EdgeStateRenderer = (edge: Edge) => {
  apply: (cell: Edge) => void      // 应用状态的函数
  cleanup?: (cell: Edge) => void   // 清理状态的函数（可选）
}

// 使用示例
<FlowDesignerLayout
  :edge-state-renderers="edgeRenderers"
  @ready="handleReady"
/>`)])],-1)),l[54]||(l[54]=e("h3",{class:"ch-subsection__title"},"完整示例：动态状态渲染器",-1)),l[55]||(l[55]=e("p",{class:"ch-text"}," 以下示例展示如何使用 Props 方式定义可动态切换的状态渲染器： ",-1)),l[56]||(l[56]=e("div",{class:"ch-code-block"},[e("pre",null,[e("code",{class:"language-typescript"},`import { ref, computed } from 'vue'
import type { NodeStateRendererMap, EdgeStateRendererMap } from '@/types/render'
import type { Node, Edge } from '@antv/x6'

// 定义开关状态
const useCustomStyles = ref(true)

// 定义自定义节点状态渲染器
const customNodeRenderers: NodeStateRendererMap = {
  // 覆盖内置 hover 状态
  hover: (node: Node) => ({
    apply: (cell) => {
      cell.setAttrs({
        body: {
          stroke: '#8b5cf6',
          strokeWidth: 3,
          fill: '#ede9fe',
        }
      })
    }
  }),

  // 新增自定义 error 状态
  error: (node: Node) => ({
    apply: (cell) => {
      cell.setAttrs({
        body: {
          stroke: '#ef4444',
          strokeWidth: 3,
          strokeDasharray: '5,5'
        }
      })
    },
    cleanup: (cell) => {
      cell.setAttrs({
        body: {
          strokeDasharray: ''
        }
      })
    }
  })
}

// 定义自定义连线状态渲染器
const customEdgeRenderers: EdgeStateRendererMap = {
  // 覆盖内置 flowing 状态
  flowing: (edge: Edge) => ({
    apply: (cell) => {
      cell.attr({
        line: {
          stroke: '#10b981',
          strokeWidth: 3,
          strokeDasharray: '10,5',
          style: {
            animation: 'fd-flow 1s linear infinite'
          }
        }
      })
    },
    cleanup: (cell) => {
      cell.setAttrs({
        line: {
          strokeDasharray: '',
          style: { animation: 'none' }
        }
      })
    }
  })
}

// 使用 computed 实现动态切换
const computedNodeRenderers = computed(() => {
  return useCustomStyles.value ? customNodeRenderers : undefined
})

const computedEdgeRenderers = computed(() => {
  return useCustomStyles.value ? customEdgeRenderers : undefined
})`)])],-1)),l[57]||(l[57]=e("div",{class:"ch-code-block"},[e("pre",null,[e("code",{class:"language-vue"},`<template>
  <div>
    <!-- 开关控制 -->
    <label>
      <input type="checkbox" v-model="useCustomStyles" />
      使用自定义状态样式
    </label>

    <!-- FlowDesigner 组件 -->
    <FlowDesignerLayout
      :node-state-renderers="computedNodeRenderers"
      :edge-state-renderers="computedEdgeRenderers"
      @ready="handleReady"
    />
  </div>
</template>`)])],-1)),l[58]||(l[58]=e("div",{class:"ch-callout ch-callout--info"},[e("div",{class:"ch-callout__icon"},"ℹ️"),e("div",{class:"ch-callout__content"},[e("p",{class:"ch-callout__title"},"渲染器函数调用时机"),e("ul",{class:"ch-callout__list"},[e("li",null,[e("strong",null,"工厂函数"),t("：当状态需要应用时调用，传入 node/edge 实例，返回 { apply, cleanup } 对象")]),e("li",null,[e("strong",null,"apply 函数"),t("：立即执行，用于设置状态样式")]),e("li",null,[e("strong",null,"cleanup 函数"),t("：当状态切换时自动调用（如果定义了），用于清理副作用")]),e("li",null,[e("strong",null,"响应式更新"),t("：当 Props 变化时（如 computed 返回值改变），会自动重新注册所有状态处理器")])])])],-1)),l[59]||(l[59]=e("h3",{class:"ch-subsection__title"},"参数说明",-1)),l[60]||(l[60]=e("h4",{style:{"font-size":"16px","font-weight":"600",color:"#333",margin:"16px 0 8px"}},"NodeStateRenderer 参数",-1)),l[61]||(l[61]=e("div",{class:"param-table"},[e("div",{class:"param-table__row param-table__header"},[e("div",{class:"param-table__cell"},"参数名"),e("div",{class:"param-table__cell"},"类型"),e("div",{class:"param-table__cell"},"说明")]),e("div",{class:"param-table__row"},[e("div",{class:"param-table__cell"},[e("code",null,"node")]),e("div",{class:"param-table__cell"},[e("code",null,"Node")]),e("div",{class:"param-table__cell"},"X6 节点实例，可读取节点数据、ID、位置等信息")])],-1)),l[62]||(l[62]=e("h4",{style:{"font-size":"16px","font-weight":"600",color:"#333",margin:"16px 0 8px"}},"返回对象属性",-1)),l[63]||(l[63]=e("div",{class:"param-table"},[e("div",{class:"param-table__row param-table__header"},[e("div",{class:"param-table__cell"},"属性名"),e("div",{class:"param-table__cell"},"类型"),e("div",{class:"param-table__cell"},"说明")]),e("div",{class:"param-table__row"},[e("div",{class:"param-table__cell"},[e("code",null,"apply")]),e("div",{class:"param-table__cell"},[e("code",null,"(cell: Node) => void")]),e("div",{class:"param-table__cell"},"必需。应用状态样式的函数，接收节点实例")]),e("div",{class:"param-table__row"},[e("div",{class:"param-table__cell"},[e("code",null,"cleanup")]),e("div",{class:"param-table__cell"},[e("code",null,"(cell: Node) => void")]),e("div",{class:"param-table__cell"},"可选。清理状态的函数，用于移除动画、定时器等副作用")])],-1)),l[64]||(l[64]=e("h4",{style:{"font-size":"16px","font-weight":"600",color:"#333",margin:"16px 0 8px"}},"EdgeStateRenderer 参数",-1)),l[65]||(l[65]=e("div",{class:"param-table"},[e("div",{class:"param-table__row param-table__header"},[e("div",{class:"param-table__cell"},"参数名"),e("div",{class:"param-table__cell"},"类型"),e("div",{class:"param-table__cell"},"说明")]),e("div",{class:"param-table__row"},[e("div",{class:"param-table__cell"},[e("code",null,"edge")]),e("div",{class:"param-table__cell"},[e("code",null,"Edge")]),e("div",{class:"param-table__cell"},"X6 连线实例，可读取连线数据、源节点、目标节点等信息")])],-1)),l[66]||(l[66]=e("h4",{style:{"font-size":"16px","font-weight":"600",color:"#333",margin:"16px 0 8px"}},"返回对象属性",-1)),l[67]||(l[67]=e("div",{class:"param-table"},[e("div",{class:"param-table__row param-table__header"},[e("div",{class:"param-table__cell"},"属性名"),e("div",{class:"param-table__cell"},"类型"),e("div",{class:"param-table__cell"},"说明")]),e("div",{class:"param-table__row"},[e("div",{class:"param-table__cell"},[e("code",null,"apply")]),e("div",{class:"param-table__cell"},[e("code",null,"(cell: Edge) => void")]),e("div",{class:"param-table__cell"},"必需。应用状态样式的函数，接收连线实例")]),e("div",{class:"param-table__row"},[e("div",{class:"param-table__cell"},[e("code",null,"cleanup")]),e("div",{class:"param-table__cell"},[e("code",null,"(cell: Edge) => void")]),e("div",{class:"param-table__cell"},"可选。清理状态的函数，用于移除动画、定时器等副作用")])],-1)),l[68]||(l[68]=e("h3",{class:"ch-subsection__title"},"注意事项",-1)),l[69]||(l[69]=e("div",{class:"ch-callout ch-callout--warning"},[e("div",{class:"ch-callout__icon"},"⚠️"),e("div",{class:"ch-callout__content"},[e("p",{class:"ch-callout__title"},"重要提示"),e("ul",{class:"ch-callout__list"},[e("li",null,[e("strong",null,"Label 透明度问题"),t("：当覆盖连线状态时，如果需要恢复 label 透明度，必须显式设置 "),e("code",null,"fillOpacity: 1"),t(" 和 "),e("code",null,"strokeOpacity: 1")]),e("li",null,[e("strong",null,"创建新对象"),t("：修改 label 时应使用展开运算符创建新对象（"),e("code",null,"...originalLabel"),t("），否则 X6 不会检测到变化")]),e("li",null,[e("strong",null,"覆盖内置状态"),t("：覆盖 "),e("code",null,"default"),t("、"),e("code",null,"hover"),t("、"),e("code",null,"selected"),t(" 等内置状态时，需要自行处理所有样式逻辑")])])])],-1))]),e("section",z,[l[70]||(l[70]=e("h2",{class:"ch-section__title"},"8.5 锚点状态渲染器 (portStateRenderers)",-1)),l[71]||(l[71]=e("p",{class:"ch-text"},[t(" 使用 "),e("code",null,":port-state-renderers"),t(" Props 可以在锚点样式即将被设置前进行拦截和自定义， 实现不同状态下的锚点样式定制。 ")],-1)),l[72]||(l[72]=e("div",{class:"ch-callout ch-callout--tip"},[e("div",{class:"ch-callout__icon"},"🎯"),e("div",{class:"ch-callout__content"},[e("p",{class:"ch-callout__title"},"锚点状态渲染器的特点"),e("ul",{class:"ch-callout__list"},[e("li",null,[e("strong",null,"精确控制"),t("：可以针对特定节点类型、特定状态定制锚点样式")]),e("li",null,[e("strong",null,"即时生效"),t("：返回的样式对象会立即应用到锚点上")]),e("li",null,[e("strong",null,"类型安全"),t("：完整的 TypeScript 类型定义，包含所有锚点样式属性")]),e("li",null,[e("strong",null,"灵活覆盖"),t("：只需返回要覆盖的属性，未返回的属性保持默认值")])])])],-1)),l[73]||(l[73]=e("h3",{class:"ch-subsection__title"},"锚点状态枚举",-1)),l[74]||(l[74]=e("div",{class:"state-table"},[e("div",{class:"state-table__row state-table__header"},[e("div",{class:"state-table__cell"},"状态名称"),e("div",{class:"state-table__cell"},"触发时机"),e("div",{class:"state-table__cell"},"默认效果")]),e("div",{class:"state-table__row"},[e("div",{class:"state-table__cell"},[e("code",null,"default")]),e("div",{class:"state-table__cell"},"节点不活跃时"),e("div",{class:"state-table__cell"},"锚点隐藏")]),e("div",{class:"state-table__row"},[e("div",{class:"state-table__cell"},[e("code",null,"node-hover")]),e("div",{class:"state-table__cell"},"鼠标悬停在节点上"),e("div",{class:"state-table__cell"},"锚点显示（空心圆）")]),e("div",{class:"state-table__row"},[e("div",{class:"state-table__cell"},[e("code",null,"port-hover")]),e("div",{class:"state-table__cell"},"鼠标悬停在锚点上"),e("div",{class:"state-table__cell"},"锚点高亮（实心圆）")]),e("div",{class:"state-table__row"},[e("div",{class:"state-table__cell"},[e("code",null,"connecting")]),e("div",{class:"state-table__cell"},"拖出连线时"),e("div",{class:"state-table__cell"},"所有节点锚点显示（提示可连接）")]),e("div",{class:"state-table__row"},[e("div",{class:"state-table__cell"},[e("code",null,"selected")]),e("div",{class:"state-table__cell"},"节点被选中时"),e("div",{class:"state-table__cell"},"锚点显示（与 node-hover 样式一致）")])],-1)),l[75]||(l[75]=e("h3",{class:"ch-subsection__title"},"完整示例",-1)),l[76]||(l[76]=e("p",{class:"ch-text"}," 以下示例展示如何根据节点类型和锚点状态自定义锚点样式： ",-1)),d(r,{"demo-name":"demo-port-renderer"})]),e("section",A,[l[77]||(l[77]=e("h2",{class:"ch-section__title"},"8.6 Tooltip 渲染控制器 (nodeTooltipRenderer)",-1)),l[78]||(l[78]=e("p",{class:"ch-text"},[t(" 使用 "),e("code",null,":node-tooltip-renderer"),t(" Props 可以在权限判断之后、显示 tooltip 之前进行控制， 实现精确的 tooltip 显示逻辑和样式定制。 ")],-1)),l[79]||(l[79]=e("div",{class:"ch-callout ch-callout--tip"},[e("div",{class:"ch-callout__icon"},"🎨"),e("div",{class:"ch-callout__content"},[e("p",{class:"ch-callout__title"},"Tooltip 渲染控制器的优势"),e("ul",{class:"ch-callout__list"},[e("li",null,[e("strong",null,"显示控制"),t("：可以根据节点类型、状态、数据等条件动态控制是否显示 tooltip")]),e("li",null,[e("strong",null,"样式定制"),t("：通过返回自定义 className，实现不同主题的 tooltip 样式")]),e("li",null,[e("strong",null,"业务集成"),t("：可以结合业务数据（如节点状态、错误信息等）动态调整 tooltip")]),e("li",null,[e("strong",null,"性能友好"),t("：利用 Vue 的响应式系统和 computed 缓存，性能优异")])])])],-1)),l[80]||(l[80]=e("h3",{class:"ch-subsection__title"},"返回值说明",-1)),l[81]||(l[81]=e("div",{class:"state-table"},[e("div",{class:"state-table__row state-table__header"},[e("div",{class:"state-table__cell"},"返回值"),e("div",{class:"state-table__cell"},"类型"),e("div",{class:"state-table__cell"},"效果说明")]),e("div",{class:"state-table__row"},[e("div",{class:"state-table__cell"},[e("code",null,"false")]),e("div",{class:"state-table__cell"},[e("code",null,"boolean")]),e("div",{class:"state-table__cell"},"不显示 tooltip（完全隐藏）")]),e("div",{class:"state-table__row"},[e("div",{class:"state-table__cell"},[e("code",null,"'className'")]),e("div",{class:"state-table__cell"},[e("code",null,"string")]),e("div",{class:"state-table__cell"},"添加自定义 className，用于通过 CSS 自定义样式")]),e("div",{class:"state-table__row"},[e("div",{class:"state-table__cell"},[e("code",null,"undefined")]),e("div",{class:"state-table__cell"},[e("code",null,"undefined")]),e("div",{class:"state-table__cell"},"使用默认行为（显示默认样式的 tooltip）")]),e("div",{class:"state-table__row"},[e("div",{class:"state-table__cell"},[e("code",null,"true")]),e("div",{class:"state-table__cell"},[e("code",null,"boolean")]),e("div",{class:"state-table__cell"},"使用默认行为（与 undefined 效果相同）")])],-1)),l[82]||(l[82]=e("h3",{class:"ch-subsection__title"},"完整示例",-1)),l[83]||(l[83]=e("p",{class:"ch-text"}," 以下示例展示如何根据节点状态动态控制 tooltip 的显示和样式，包括： ",-1)),l[84]||(l[84]=e("ul",{class:"ch-callout__list"},[e("li",null,"根据节点类型隐藏特定节点的 tooltip"),e("li",null,"根据节点状态（成功、警告、错误）应用不同的 tooltip 颜色主题"),e("li",null,"通过开关动态控制 tooltip 的显示/隐藏"),e("li",null,"实时查看事件日志，了解钩子函数的执行情况")],-1)),d(r,{"demo-name":"demo-tooltip-renderer"})]),l[87]||(l[87]=e("section",{id:"api-reference",class:"ch-section"},[e("h2",{class:"ch-section__title"},"8.7 相关 API"),e("h3",{class:"ch-subsection__title"},"节点状态 API"),e("div",{class:"api-table"},[e("div",{class:"api-table__row"},[e("div",{class:"api-table__method"},[e("code",null,"designer.registerNodeStateHandler(name, handler, override?)")]),e("div",{class:"api-table__desc"},"注册节点状态处理器")]),e("div",{class:"api-table__row"},[e("div",{class:"api-table__method"},[e("code",null,"designer.unregisterNodeStateHandler(name)")]),e("div",{class:"api-table__desc"},"注销节点状态处理器")]),e("div",{class:"api-table__row"},[e("div",{class:"api-table__method"},[e("code",null,"designer.getRegisteredNodeStates()")]),e("div",{class:"api-table__desc"},"获取所有已注册的节点状态名称")])]),e("h3",{class:"ch-subsection__title"},"连线状态 API"),e("div",{class:"api-table"},[e("div",{class:"api-table__row"},[e("div",{class:"api-table__method"},[e("code",null,"designer.registerEdgeStateHandler(name, handler, override?)")]),e("div",{class:"api-table__desc"},"注册连线状态处理器")]),e("div",{class:"api-table__row"},[e("div",{class:"api-table__method"},[e("code",null,"designer.unregisterEdgeStateHandler(name)")]),e("div",{class:"api-table__desc"},"注销连线状态处理器")]),e("div",{class:"api-table__row"},[e("div",{class:"api-table__method"},[e("code",null,"designer.getRegisteredEdgeStates()")]),e("div",{class:"api-table__desc"},"获取所有已注册的连线状态名称")])])],-1))]),_:1}))}}),X=y(M,[["__scopeId","data-v-99e8178a"]]);export{X as default};
//# sourceMappingURL=08-element-states-DOFvwkVj.js.map
