import{G as n}from"./GuideLayout-CQwLNe0V.js";import{C as s}from"./CodePreviewer-r_DN729B.js";import{d,V as o,a2 as r,a1 as i,_ as e,G as l,k as a}from"./vendor-vue-jNIXm5rS.js";import{_ as c}from"./index-Ns59gi1n.js";import"./FlowDesignerTest-ApZN45Qd.js";import"./vendor-x6-DeEwnSOW.js";import"./vendor-antd-BTexbT_2.js";const _={class:"ch-section"},p={class:"ch-section"},u=d({__name:"08-element-states",setup(v){return(g,t)=>(o(),r(n,null,{default:i(()=>[t[36]||(t[36]=e("div",{class:"ch-header"},[e("span",{class:"ch-header__num"},"第 8 章"),e("h1",{class:"ch-header__title"},"元素状态管理"),e("p",{class:"ch-header__desc"}," 学习如何使用状态处理器自定义节点和连线在不同状态下的样式和行为。 ")],-1)),t[37]||(t[37]=e("section",{class:"ch-section"},[e("h2",{class:"ch-section__title"},"8.1 概述"),e("p",{class:"ch-text"},[l(" FlowDesigner 提供了强大的"),e("strong",null,"状态管理系统"),l("，允许你自定义节点和连线在不同状态下的表现。 系统采用"),e("strong",null,"策略模式"),l("，通过注册状态处理器（State Handler）来实现状态的样式和行为定制。 ")]),e("div",{class:"feature-grid"},[e("div",{class:"feature-card"},[e("div",{class:"feature-card__icon"},"🎯"),e("h4",{class:"feature-card__title"},"内置状态"),e("p",{class:"feature-card__desc"},"支持 default、hover、selected、dragging 等常见状态")]),e("div",{class:"feature-card"},[e("div",{class:"feature-card__icon"},"🔌"),e("h4",{class:"feature-card__title"},"可扩展"),e("p",{class:"feature-card__desc"},"支持注册自定义状态处理器，实现任意状态效果")]),e("div",{class:"feature-card"},[e("div",{class:"feature-card__icon"},"🎨"),e("h4",{class:"feature-card__title"},"灵活控制"),e("p",{class:"feature-card__desc"},"完全控制节点/连线的样式、动画、交互行为")])])],-1)),e("section",_,[t[0]||(t[0]=e("h2",{class:"ch-section__title"},"8.2 节点状态处理器",-1)),t[1]||(t[1]=e("p",{class:"ch-section__desc"},[l(" 使用 "),e("code",null,"keyMap"),l(" 可以重新映射内置操作的快捷键，无需重写逻辑。所有权限检查和内部实现自动继承。 ")],-1)),t[2]||(t[2]=e("div",{class:"ch-callout ch-callout--tip"},[e("div",{class:"ch-callout__icon"},"💡"),e("div",{class:"ch-callout__content"},[e("p",{class:"ch-callout__title"},"状态处理器使用建议"),e("ul",{class:"ch-callout__list"},[e("li",null,[e("strong",null,"保持幂等性"),l("：多次应用同一状态应该产生相同效果")]),e("li",null,[e("strong",null,"实现 cleanup"),l("：确保状态切换时正确清理旧状态的副作用")]),e("li",null,[e("strong",null,"避免副作用"),l("：不要在状态处理器中修改 graph 的全局配置")]),e("li",null,[e("strong",null,"性能优化"),l("：避免在状态处理器中执行耗时操作")])])])],-1)),t[3]||(t[3]=e("h3",{class:"ch-subsection__title"},"节点内置状态",-1)),t[4]||(t[4]=e("p",{style:{color:"red","font-size":"13px"}},"注意: 内置交互如下",-1)),t[5]||(t[5]=e("p",{style:{color:"red","font-size":"13px"}},`内置交互为标识符"_state"保存在node或者edge对象里，内部通过node.getProp('_state')获取，node.setProp('_state')保存`,-1)),t[6]||(t[6]=e("p",{style:{color:"red","font-size":"13px"}},"点击画布时(受权限管控)，将所有node,edge置为default状态;",-1)),t[7]||(t[7]=e("p",{style:{color:"red","font-size":"13px"}},"点击节点时(受权限管控)，将其他所有连线和节点状态置为：default，将点击节点状态置为:selected;",-1)),t[8]||(t[8]=e("p",{style:{color:"red","font-size":"13px"}},"点击连线时(受权限管控)，将其他所有连线和节点状态置为：default，将点击连线状态置为:selected;",-1)),t[9]||(t[9]=e("p",{style:{color:"red","font-size":"13px"}},"hover节点时(受权限管控)，将目标节点状态置为hover，移出节点时，将节点状态还原",-1)),t[10]||(t[10]=e("p",{style:{color:"red","font-size":"13px"}},"注意: FlowDesignerLayout.vue默认内置以下3个状态，3个状态的默认样式请参考基础使用里的：canvasConfig",-1)),t[11]||(t[11]=e("div",{class:"state-table"},[e("div",{class:"state-table__row state-table__header"},[e("div",{class:"state-table__cell"},"状态名称"),e("div",{class:"state-table__cell"},"触发时机"),e("div",{class:"state-table__cell"},"默认效果")]),e("div",{class:"state-table__row"},[e("div",{class:"state-table__cell"},[e("code",null,"default")]),e("div",{class:"state-table__cell"},"节点初始状态"),e("div",{class:"state-table__cell"},"默认样式，隐藏锚点")]),e("div",{class:"state-table__row"},[e("div",{class:"state-table__cell"},[e("code",null,"hover")]),e("div",{class:"state-table__cell"},"鼠标悬停"),e("div",{class:"state-table__cell"},"显示锚点，应用悬停高亮")]),e("div",{class:"state-table__row"},[e("div",{class:"state-table__cell"},[e("code",null,"selected")]),e("div",{class:"state-table__cell"},"节点被选中"),e("div",{class:"state-table__cell"},"显示选中框和锚点")])],-1)),a(s,{"demo-name":"demo-node-state"}),t[12]||(t[12]=e("p",{class:"ch-text"},[l(" 使用 "),e("code",null,"registerNodeStateHandler()"),l(" 注册自定义节点状态处理器。 ")],-1)),t[13]||(t[13]=e("h3",{class:"ch-subsection__title"},"API 签名",-1)),t[14]||(t[14]=e("div",{class:"ch-code-block"},[e("pre",null,[e("code",{class:"language-typescript"},`designer.registerNodeStateHandler(
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
}`)])],-1)),t[15]||(t[15]=e("h3",{class:"ch-subsection__title"},"示例：自定义错误状态",-1)),t[16]||(t[16]=e("p",{class:"ch-text"},[l(" 以下示例注册一个 "),e("code",null,"error"),l(" 状态，使节点显示红色边框和错误图标。 ")],-1)),t[17]||(t[17]=e("div",{class:"ch-code-block"},[e("pre",null,[e("code",{class:"language-typescript"},`// 在 @ready 回调中注册
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
}`)])],-1))]),e("section",p,[t[18]||(t[18]=e("h2",{class:"ch-section__title"},"8.3 连线状态处理器",-1)),t[19]||(t[19]=e("p",{class:"ch-text"},[l(" 使用 "),e("code",null,"registerEdgeStateHandler()"),l(" 注册自定义连线状态处理器。 ")],-1)),t[20]||(t[20]=e("p",{style:{color:"red","font-size":"13px"}},`注意: 内置交互为标识符"_state"保存在node或者edge对象里，内部通过node.getProp('_state')获取，node.setProp('_state')保存`,-1)),t[21]||(t[21]=e("p",{style:{color:"red","font-size":"13px"}},"点击画布时(受权限管控)，将所有node,edge置为default状态;(受权限管控)",-1)),t[22]||(t[22]=e("p",{style:{color:"red","font-size":"13px"}},"点击节点时(受权限管控)，将其他所有连线和节点状态置为：default，将点击节点状态置为:selected;",-1)),t[23]||(t[23]=e("p",{style:{color:"red","font-size":"13px"}},"点击连线时(受权限管控)，将其他所有连线和节点状态置为：default，将点击连线状态置为:selected;",-1)),t[24]||(t[24]=e("p",{style:{color:"red","font-size":"13px"}},"鼠标移动上连线时(受权限管控)，将目标节点状态置为hover，移出连线时，将连线状态还原",-1)),t[25]||(t[25]=e("p",{style:{color:"red","font-size":"13px"}},"鼠标移动上连线时(受权限管控)，将所有出线的状态置为：flowing,移出时将所有出线状态还原",-1)),t[26]||(t[26]=e("p",{style:{color:"red","font-size":"13px"}},"注意: FlowDesignerLayout.vue默认内置以下5个连线状态，5个状态的默认样式请参考基础使用里的：canvasConfig",-1)),t[27]||(t[27]=e("div",{class:"ch-callout ch-callout--tip"},[e("div",{class:"ch-callout__icon"},"💡"),e("div",{class:"ch-callout__content"},[e("p",{class:"ch-callout__title"},"状态处理器使用建议"),e("ul",{class:"ch-callout__list"},[e("li",null,[e("strong",null,"保持幂等性"),l("：多次应用同一状态应该产生相同效果")]),e("li",null,[e("strong",null,"实现 cleanup"),l("：确保状态切换时正确清理旧状态的副作用")]),e("li",null,[e("strong",null,"避免副作用"),l("：不要在状态处理器中修改 graph 的全局配置")]),e("li",null,[e("strong",null,"性能优化"),l("：避免在状态处理器中执行耗时操作")])])])],-1)),t[28]||(t[28]=e("h3",{class:"ch-subsection__title"},"连线内置状态",-1)),t[29]||(t[29]=e("div",{class:"state-table"},[e("div",{class:"state-table__row state-table__header"},[e("div",{class:"state-table__cell"},"状态名称"),e("div",{class:"state-table__cell"},"触发时机"),e("div",{class:"state-table__cell"},"默认效果")]),e("div",{class:"state-table__row"},[e("div",{class:"state-table__cell"},[e("code",null,"default")]),e("div",{class:"state-table__cell"},"连线初始状态"),e("div",{class:"state-table__cell"},"默认样式（灰色细线）")]),e("div",{class:"state-table__row"},[e("div",{class:"state-table__cell"},[e("code",null,"hover")]),e("div",{class:"state-table__cell"},"鼠标悬停连线"),e("div",{class:"state-table__cell"},"蓝色加粗显示")]),e("div",{class:"state-table__row"},[e("div",{class:"state-table__cell"},[e("code",null,"selected")]),e("div",{class:"state-table__cell"},"连线被选中"),e("div",{class:"state-table__cell"},"蓝色加粗高亮，显示控制点")]),e("div",{class:"state-table__row"},[e("div",{class:"state-table__cell"},[e("code",null,"flowing")]),e("div",{class:"state-table__cell"},"节点 hover 时的出线效果"),e("div",{class:"state-table__cell"},"虚线流动动画（自动触发）")]),e("div",{class:"state-table__row"},[e("div",{class:"state-table__cell"},[e("code",null,"dimmed")]),e("div",{class:"state-table__cell"},"边重叠时弱化其他边"),e("div",{class:"state-table__cell"},"降低透明度（保持原状态样式）")])],-1)),a(s,{"demo-name":"demo-edge-state"}),t[30]||(t[30]=e("p",{class:"ch-text"},[l(" 使用 "),e("code",null,"registerEdgeStateHandler()"),l(" 注册自定义连线状态处理器。 ")],-1)),t[31]||(t[31]=e("h3",{class:"ch-subsection__title"},"API 签名",-1)),t[32]||(t[32]=e("div",{class:"ch-code-block"},[e("pre",null,[e("code",{class:"language-typescript"},`designer.registerEdgeStateHandler(
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
}`)])],-1)),t[33]||(t[33]=e("h3",{class:"ch-subsection__title"},"示例：自定义激活状态",-1)),t[34]||(t[34]=e("p",{class:"ch-text"},[l(" 以下示例注册一个 "),e("code",null,"active"),l(" 状态，使连线显示绿色加粗样式。 ")],-1)),t[35]||(t[35]=e("div",{class:"ch-code-block"},[e("pre",null,[e("code",{class:"language-typescript"},`// 在 @ready 回调中注册
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
}`)])],-1))]),t[38]||(t[38]=e("section",{class:"ch-section"},[e("h2",{class:"ch-section__title"},"8.7 相关 API"),e("h3",{class:"ch-subsection__title"},"节点状态 API"),e("div",{class:"api-table"},[e("div",{class:"api-table__row"},[e("div",{class:"api-table__method"},[e("code",null,"registerNodeStateHandler(name, handler, override?)")]),e("div",{class:"api-table__desc"},"注册节点状态处理器")]),e("div",{class:"api-table__row"},[e("div",{class:"api-table__method"},[e("code",null,"unregisterNodeStateHandler(name)")]),e("div",{class:"api-table__desc"},"注销节点状态处理器")]),e("div",{class:"api-table__row"},[e("div",{class:"api-table__method"},[e("code",null,"getRegisteredNodeStates()")]),e("div",{class:"api-table__desc"},"获取所有已注册的节点状态名称")])]),e("h3",{class:"ch-subsection__title"},"连线状态 API"),e("div",{class:"api-table"},[e("div",{class:"api-table__row"},[e("div",{class:"api-table__method"},[e("code",null,"registerEdgeStateHandler(name, handler, override?)")]),e("div",{class:"api-table__desc"},"注册连线状态处理器")]),e("div",{class:"api-table__row"},[e("div",{class:"api-table__method"},[e("code",null,"unregisterEdgeStateHandler(name)")]),e("div",{class:"api-table__desc"},"注销连线状态处理器")]),e("div",{class:"api-table__row"},[e("div",{class:"api-table__method"},[e("code",null,"getRegisteredEdgeStates()")]),e("div",{class:"api-table__desc"},"获取所有已注册的连线状态名称")])])],-1))]),_:1}))}}),w=c(u,[["__scopeId","data-v-b1ebf67f"]]);export{w as default};
//# sourceMappingURL=08-element-states-bVxk8QeZ.js.map
