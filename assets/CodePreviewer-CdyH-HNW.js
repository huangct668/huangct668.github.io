import{d as G,V as h,a2 as Dn,u as F,W as b,_ as n,F as O,a4 as H,$ as D,k as f,f as S,a0 as an,q as nn,a9 as dn,G as P,e as Tn,U as fn,a1 as E,a5 as rn,aa as Ln,c as xn,w as qn,n as jn,A as Sn,a8 as Wn,a3 as z,r as yn,o as $n,b as Pn,j as Un,ab as Bn,ac as Yn,a7 as Xn,z as Vn}from"./vendor-vue-n6x0MXoC.js";import{F as V,P as Rn,N as zn,T as An,n as vn,d as Jn}from"./FlowDesignerTest-CVT-husl.js";import{_ as U}from"./index-82OMxN3c.js";import{Q as Kn,R as Qn,V as ne,W as ee,Z as re,X as te,Y as oe,_ as se,$ as le,a0 as ie,a1 as ae,a2 as de,a3 as ce,a4 as pe,a5 as ge,a6 as fe,a7 as me,a8 as ue,a9 as K}from"./vendor-antd-DQF42uR_.js";import{G as J,H as he,r as In}from"./vendor-x6-B0tTI3Tl.js";const be=G({__name:"demo1",setup(T){function v(a){const c=a.getGraph(),l=c.addNode({id:"node1",shape:"rect",x:100,y:100,width:120,height:60,label:"节点 1",attrs:{body:{fill:"#5F95FF",stroke:"#2563EB",strokeWidth:2},label:{fill:"#ffffff",fontSize:14,fontWeight:"bold"}}}),g=c.addNode({id:"node2",shape:"circle",x:300,y:100,width:80,height:80,label:"节点 2",attrs:{body:{fill:"#10B981",stroke:"#059669",strokeWidth:2},label:{fill:"#ffffff",fontSize:14,fontWeight:"bold"}}}),x=c.addNode({id:"node3",shape:"ellipse",x:500,y:100,width:100,height:60,label:"节点 3",attrs:{body:{fill:"#F59E0B",stroke:"#D97706",strokeWidth:2},label:{fill:"#ffffff",fontSize:14,fontWeight:"bold"}}}),s=c.addNode({id:"node4",shape:"polygon",x:300,y:250,width:100,height:100,label:"节点 4",attrs:{body:{fill:"#EF4444",stroke:"#DC2626",strokeWidth:2,refPoints:"0,10 10,0 20,10 10,20"},label:{fill:"#ffffff",fontSize:14,fontWeight:"bold"}}});c.addEdge({id:"edge1",shape:"flow-edge",source:l,target:g,labels:["连线 1"]}),c.addEdge({id:"edge2",shape:"flow-edge",source:g,target:x,labels:["连线 2"]}),c.addEdge({id:"edge3",shape:"flow-edge",source:g,target:s,labels:["连线 3"]}),c.addEdge({id:"edge4",shape:"flow-edge",source:s,target:x,labels:["连线 4"]}),c.centerContent(),console.log("[Demo1] Graph 实例已获取，已添加 4 个节点和 4 条连线")}return(a,c)=>(h(),Dn(F(V),{onReady:v}))}}),ve=`<template>\r
  <FlowDesignerLayout @ready="handleReady" />\r
</template>\r
\r
<script setup lang="ts">\r
import { ref } from 'vue'\r
import { FlowDesignerLayout }  from '@quick-code/x6-flow-designer'\r
import type { FlowDesigner } from '@quick-code/x6-flow-designer'\r
/**\r
 * ready 回调：获取 graph 实例并添加原生节点和连线\r
 */\r
function handleReady(designer: FlowDesigner) {\r
  // 获取 X6 Graph 实例\r
  const graph = designer.getGraph()\r
  // 添加节点 1：矩形节点\r
  const node1 = graph.addNode({\r
    id: 'node1',\r
    shape: 'rect', // X6 内置的矩形节点\r
    x: 100,\r
    y: 100,\r
    width: 120,\r
    height: 60,\r
    label: '节点 1',\r
    attrs: {\r
      body: {\r
        fill: '#5F95FF',\r
        stroke: '#2563EB',\r
        strokeWidth: 2,\r
      },\r
      label: {\r
        fill: '#ffffff',\r
        fontSize: 14,\r
        fontWeight: 'bold',\r
      },\r
    },\r
  })\r
\r
  // 添加节点 2：圆形节点\r
  const node2 = graph.addNode({\r
    id: 'node2',\r
    shape: 'circle', // X6 内置的圆形节点\r
    x: 300,\r
    y: 100,\r
    width: 80,\r
    height: 80,\r
    label: '节点 2',\r
    attrs: {\r
      body: {\r
        fill: '#10B981',\r
        stroke: '#059669',\r
        strokeWidth: 2,\r
      },\r
      label: {\r
        fill: '#ffffff',\r
        fontSize: 14,\r
        fontWeight: 'bold',\r
      },\r
    },\r
  })\r
\r
  // 添加节点 3：椭圆节点\r
  const node3 = graph.addNode({\r
    id: 'node3',\r
    shape: 'ellipse', // X6 内置的椭圆节点\r
    x: 500,\r
    y: 100,\r
    width: 100,\r
    height: 60,\r
    label: '节点 3',\r
    attrs: {\r
      body: {\r
        fill: '#F59E0B',\r
        stroke: '#D97706',\r
        strokeWidth: 2,\r
      },\r
      label: {\r
        fill: '#ffffff',\r
        fontSize: 14,\r
        fontWeight: 'bold',\r
      },\r
    },\r
  })\r
\r
  // 添加节点 4：菱形节点\r
  const node4 = graph.addNode({\r
    id: 'node4',\r
    shape: 'polygon', // X6 内置的多边形节点（菱形）\r
    x: 300,\r
    y: 250,\r
    width: 100,\r
    height: 100,\r
    label: '节点 4',\r
    attrs: {\r
      body: {\r
        fill: '#EF4444',\r
        stroke: '#DC2626',\r
        strokeWidth: 2,\r
        refPoints: '0,10 10,0 20,10 10,20', // 菱形的四个顶点\r
      },\r
      label: {\r
        fill: '#ffffff',\r
        fontSize: 14,\r
        fontWeight: 'bold',\r
      },\r
    },\r
  })\r
\r
  // 添加连线 1：node1 -> node2（使用 flow-edge）\r
  graph.addEdge({\r
    id: 'edge1',\r
    shape: 'flow-edge', // 使用自定义连线类型\r
    source: node1,\r
    target: node2,\r
    labels: ['连线 1'], // 简化的 label 写法\r
  })\r
\r
  // 添加连线 2：node2 -> node3（使用 flow-edge）\r
  graph.addEdge({\r
    id: 'edge2',\r
    shape: 'flow-edge', // 使用自定义连线类型\r
    source: node2,\r
    target: node3,\r
    labels: ['连线 2'], // 简化的 label 写法\r
  })\r
\r
  // 添加连线 3：node2 -> node4（使用 flow-edge）\r
  graph.addEdge({\r
    id: 'edge3',\r
    shape: 'flow-edge', // 使用自定义连线类型\r
    source: node2,\r
    target: node4,\r
    labels: ['连线 3'], // 简化的 label 写法\r
  })\r
\r
  // 添加连线 4：node4 -> node3（使用 flow-edge）\r
  graph.addEdge({\r
    id: 'edge4',\r
    shape: 'flow-edge', // 使用自定义连线类型\r
    source: node4,\r
    target: node3,\r
    labels: ['连线 4'], // 简化的 label 写法\r
  })\r
\r
  // 调整视图，使所有节点居中显示\r
  graph.centerContent()\r
\r
  console.log('[Demo1] Graph 实例已获取，已添加 4 个节点和 4 条连线')\r
}\r
<\/script>\r
\r
<style scoped>\r
\r
</style>\r
`,_e={class:"demo-ready"},xe={class:"demo-ready__log"},ye={class:"demo-ready__log-content"},ke={class:"demo-ready__canvas"},we=G({__name:"demo-ready",setup(T){const v=S([]);function a(g){const x=new Date().toLocaleTimeString();v.value.push(`[${x}] ${g}`)}function c(){v.value=[]}function l(g,x){a("✅ ready 事件触发"),a(`📦 designer 实例ID: ${g.id}`),a(`📊 graph 节点数: ${x.getNodes().length}`),a(`🔗 graph 连线数: ${x.getEdges().length}`);const s=x.addNode({shape:"rect",x:100,y:100,width:100,height:60,label:"节点1",attrs:{body:{fill:"#5F95FF",stroke:"#2563EB",strokeWidth:2},label:{fill:"#ffffff",fontSize:14,fontWeight:"bold"}}}),o=x.addNode({shape:"rect",x:300,y:100,width:100,height:60,label:"节点2",attrs:{body:{fill:"#10B981",stroke:"#059669",strokeWidth:2},label:{fill:"#ffffff",fontSize:14,fontWeight:"bold"}}});x.addEdge({shape:"flow-edge",source:s,target:o,labels:["连接"]}),a("✨ 已添加 2 个节点和 1 条连线"),x.centerContent(),a("🎯 已居中显示内容"),a(`🔧 designer.getMode(): ${g.getMode()}`),a(`🔐 designer.can('canDrag'): ${g.can("canDrag")}`)}return(g,x)=>(h(),b("div",_e,[n("div",xe,[n("div",{class:"demo-ready__log-header"},[x[0]||(x[0]=n("h4",null,"事件日志",-1)),n("button",{class:"demo-ready__clear-btn",onClick:c,title:"清除日志"}," 清除 ")]),n("div",ye,[(h(!0),b(O,null,H(v.value,(s,o)=>(h(),b("div",{key:o,class:"demo-ready__log-item"},D(s),1))),128))])]),n("div",ke,[f(F(V),{onReady:l})])]))}}),Se=U(we,[["__scopeId","data-v-bc80d804"]]),Ne=`<template>\r
  <div class="demo-ready">\r
    <!-- 事件日志面板 -->\r
    <div class="demo-ready__log">\r
      <div class="demo-ready__log-header">\r
        <h4>事件日志</h4>\r
        <button class="demo-ready__clear-btn" @click="clearLogs" title="清除日志">\r
          清除\r
        </button>\r
      </div>\r
      <div class="demo-ready__log-content">\r
        <div v-for="(log, index) in logs" :key="index" class="demo-ready__log-item">\r
          {{ log }}\r
        </div>\r
      </div>\r
    </div>\r
\r
    <!-- 画布容器 -->\r
    <div class="demo-ready__canvas">\r
      <FlowDesignerLayout @ready="handleReady" />\r
    </div>\r
  </div>\r
</template>\r
\r
<script setup lang="ts">\r
import { ref } from 'vue'\r
import { FlowDesignerLayout }  from '@quick-code/x6-flow-designer'\r
import type { FlowDesigner } from '@quick-code/x6-flow-designer'\r
import type { Graph } from '@antv/x6'\r
\r
const logs = ref<string[]>([])\r
\r
function addLog(message: string) {\r
  const timestamp = new Date().toLocaleTimeString()\r
  logs.value.push(\`[\${timestamp}] \${message}\`)\r
}\r
\r
function clearLogs() {\r
  logs.value = []\r
}\r
\r
/**\r
 * @ready 事件处理函数\r
 * 参数：{ designer, graph } - FlowDesigner 实例和 X6 Graph 实例\r
 */\r
function handleReady(designer:FlowDesigner, graph: Graph) {\r
  addLog('✅ ready 事件触发')\r
  addLog(\`📦 designer 实例ID: \${designer.id}\`)\r
  addLog(\`📊 graph 节点数: \${graph.getNodes().length}\`)\r
  addLog(\`🔗 graph 连线数: \${graph.getEdges().length}\`)\r
\r
  // 演示：添加几个节点\r
  const node1 = graph.addNode({\r
    shape: 'rect',\r
    x: 100,\r
    y: 100,\r
    width: 100,\r
    height: 60,\r
    label: '节点1',\r
    attrs: {\r
      body: {\r
        fill: '#5F95FF',\r
        stroke: '#2563EB',\r
        strokeWidth: 2,\r
      },\r
      label: {\r
        fill: '#ffffff',\r
        fontSize: 14,\r
        fontWeight: 'bold',\r
      },\r
    },\r
  })\r
\r
  const node2 = graph.addNode({\r
    shape: 'rect',\r
    x: 300,\r
    y: 100,\r
    width: 100,\r
    height: 60,\r
    label: '节点2',\r
    attrs: {\r
      body: {\r
        fill: '#10B981',\r
        stroke: '#059669',\r
        strokeWidth: 2,\r
      },\r
      label: {\r
        fill: '#ffffff',\r
        fontSize: 14,\r
        fontWeight: 'bold',\r
      },\r
    },\r
  })\r
\r
  graph.addEdge({\r
    shape: 'flow-edge',\r
    source: node1,\r
    target: node2,\r
    labels: ['连接'],\r
  })\r
\r
  addLog('✨ 已添加 2 个节点和 1 条连线')\r
\r
  // 演示：调用 designer 方法\r
  graph.centerContent()\r
  addLog('🎯 已居中显示内容')\r
\r
  // 额外信息：演示 designer 的其他 API\r
  addLog(\`🔧 designer.getMode(): \${designer.getMode()}\`)\r
  addLog(\`🔐 designer.can('canDrag'): \${designer.can('canDrag')}\`)\r
}\r
<\/script>\r
\r
<style scoped>\r
.demo-ready {\r
  display: flex;\r
  height: 100%; /* 修改：从固定高度改为 100%，支持全屏 */\r
  min-height: 400px; /* 添加：最小高度，非全屏时保持合理尺寸 */\r
  gap: 16px;\r
}\r
\r
.demo-ready__log {\r
  width: 300px;\r
  border: 1px solid #e8e8e8;\r
  border-radius: 8px;\r
  padding: 16px;\r
  background: #fafafa;\r
  overflow: hidden;\r
  display: flex;\r
  flex-direction: column;\r
}\r
\r
.demo-ready__log-header {\r
  display: flex;\r
  justify-content: space-between;\r
  align-items: center;\r
  margin-bottom: 12px;\r
}\r
\r
.demo-ready__log h4 {\r
  margin: 0;\r
  font-size: 14px;\r
  color: #1a1a2e;\r
  font-weight: 600;\r
}\r
\r
.demo-ready__clear-btn {\r
  padding: 2px 8px;\r
  font-size: 12px;\r
  color: #666;\r
  background: #fff;\r
  border: 1px solid #d9d9d9;\r
  border-radius: 4px;\r
  cursor: pointer;\r
  transition: all 0.2s;\r
  user-select: none;\r
}\r
\r
.demo-ready__clear-btn:hover {\r
  color: #1890ff;\r
  border-color: #1890ff;\r
}\r
\r
.demo-ready__log-content {\r
  flex: 1;\r
  overflow-y: auto;\r
  font-size: 12px;\r
  line-height: 1.8;\r
}\r
\r
.demo-ready__log-item {\r
  padding: 4px 0;\r
  color: #555;\r
  font-family: 'Monaco', 'Menlo', 'Consolas', monospace;\r
  border-bottom: 1px solid #f0f0f0;\r
}\r
\r
.demo-ready__log-item:last-child {\r
  border-bottom: none;\r
}\r
\r
.demo-ready__canvas {\r
  flex: 1;\r
  border: 1px solid #e8e8e8;\r
  border-radius: 8px;\r
  overflow: hidden;\r
  background: #fff;\r
}\r
</style>\r
`,Ce={class:"demo-mode-change"},De={class:"demo-mode-change__log"},$e={class:"demo-mode-change__log-content"},Ee={class:"demo-mode-change__canvas"},Fe={class:"demo-mode-change__controls"},Le=["onClick"],Te=G({__name:"demo-mode-change",setup(T){const v=S([]),a=S("design"),c=S(),l=[{value:"design",label:"✏️ 设计模式"},{value:"readonly",label:"👁 只读模式"},{value:"preview",label:"📺 预览模式"}];function g(e){const i=new Date().toLocaleTimeString();v.value.push(`[${i}] ${e}`)}function x(){v.value=[]}function s(e,i){c.value=e,g("✅ 画布初始化完成"),g(`🔧 当前模式: ${e.getMode()}`),i.addNode({shape:"rect",x:150,y:100,width:100,height:60,label:"节点1",attrs:{body:{fill:"#5F95FF",stroke:"#2563EB"},label:{fill:"#fff"}}}),i.centerContent()}function o(e){if(g("🔄 @mode-change 事件触发"),g(`📌 新模式: ${e}`),c.value){const i=c.value.getCapabilities();g(`🔐 canDrag: ${i.canDrag}`),g(`🔐 canDelete: ${i.canDelete}`),g(`🔐 canConnect: ${i.canConnect}`)}}function t(e){g(`👆 切换到 ${e} 模式`),a.value=e}return(e,i)=>(h(),b("div",Ce,[n("div",De,[n("div",{class:"demo-mode-change__log-header"},[i[0]||(i[0]=n("h4",null,"事件日志",-1)),n("button",{class:"demo-mode-change__clear-btn",onClick:x,title:"清除日志"}," 清除 ")]),n("div",$e,[(h(!0),b(O,null,H(v.value,(r,p)=>(h(),b("div",{key:p,class:"demo-mode-change__log-item"},D(r),1))),128))])]),n("div",Ee,[n("div",Fe,[(h(),b(O,null,H(l,r=>n("button",{key:r.value,class:an(["demo-mode-change__btn",{"demo-mode-change__btn--active":a.value===r.value}]),onClick:p=>t(r.value)},D(r.label),11,Le)),64))]),f(F(V),{mode:a.value,onModeChange:o,onReady:s},null,8,["mode"])])]))}}),Re=U(Te,[["__scopeId","data-v-fd5094da"]]),ze=`\uFEFF<template>\r
  <div class="demo-mode-change">\r
    <!-- 事件日志面板 -->\r
    <div class="demo-mode-change__log">\r
      <div class="demo-mode-change__log-header">\r
        <h4>事件日志</h4>\r
        <button class="demo-mode-change__clear-btn" @click="clearLogs" title="清除日志">\r
          清除\r
        </button>\r
      </div>\r
      <div class="demo-mode-change__log-content">\r
        <div v-for="(log, index) in logs" :key="index" class="demo-mode-change__log-item">\r
          {{ log }}\r
        </div>\r
      </div>\r
    </div>\r
\r
    <!-- 画布容器 -->\r
    <div class="demo-mode-change__canvas">\r
      <!-- 模式切换按钮 -->\r
      <div class="demo-mode-change__controls">\r
        <button\r
          v-for="mode in modes"\r
          :key="mode.value"\r
          class="demo-mode-change__btn"\r
          :class="{ 'demo-mode-change__btn--active': currentMode === mode.value }"\r
          @click="changeMode(mode.value)"\r
        >\r
          {{ mode.label }}\r
        </button>\r
      </div>\r
\r
      <FlowDesignerLayout\r
        :mode="currentMode"\r
        @mode-change="handleModeChange"\r
        @ready="handleReady"\r
      />\r
    </div>\r
  </div>\r
</template>\r
\r
<script setup lang="ts">\r
import { ref } from 'vue'\r
import { FlowDesignerLayout }  from '@quick-code/x6-flow-designer'\r
import type { FlowDesigner } from '@quick-code/x6-flow-designer'\r
import type { Graph } from '@antv/x6'\r
\r
const logs = ref<string[]>([])\r
const currentMode = ref<'design' | 'readonly' | 'preview'>('design')\r
const designerRef = ref<FlowDesigner>()\r
\r
const modes = [\r
  { value: 'design', label: '✏️ 设计模式' },\r
  { value: 'readonly', label: '👁 只读模式' },\r
  { value: 'preview', label: '📺 预览模式' },\r
]\r
\r
function addLog(message: string) {\r
  const timestamp = new Date().toLocaleTimeString()\r
  logs.value.push(\`[\${timestamp}] \${message}\`)\r
}\r
\r
function clearLogs() {\r
  logs.value = []\r
}\r
\r
function handleReady(designer, graph) {\r
  designerRef.value = designer\r
  addLog('✅ 画布初始化完成')\r
  addLog(\`🔧 当前模式: \${designer.getMode()}\`)\r
\r
  // 添加初始节点\r
  graph.addNode({\r
    shape: 'rect',\r
    x: 150,\r
    y: 100,\r
    width: 100,\r
    height: 60,\r
    label: '节点1',\r
    attrs: {\r
      body: { fill: '#5F95FF', stroke: '#2563EB' },\r
      label: { fill: '#fff' },\r
    },\r
  })\r
\r
  graph.centerContent()\r
}\r
\r
/**\r
 * @mode-change 事件处理函数\r
 * 参数：mode - 新的模式名称\r
 */\r
function handleModeChange(mode: string) {\r
  addLog(\`🔄 @mode-change 事件触发\`)\r
  addLog(\`📌 新模式: \${mode}\`)\r
\r
  if (designerRef.value) {\r
    const caps = designerRef.value.getCapabilities()\r
    addLog(\`🔐 canDrag: \${caps.canDrag}\`)\r
    addLog(\`🔐 canDelete: \${caps.canDelete}\`)\r
    addLog(\`🔐 canConnect: \${caps.canConnect}\`)\r
  }\r
}\r
\r
function changeMode(mode: 'design' | 'readonly' | 'preview') {\r
  addLog(\`👆 切换到 \${mode} 模式\`)\r
  currentMode.value = mode\r
}\r
<\/script>\r
\r
<style scoped>\r
.demo-mode-change {\r
  display: flex;\r
  height: 100%; /* 修改：从固定高度改为 100%，支持全屏 */\r
  min-height: 400px; /* 添加：最小高度，非全屏时保持合理尺寸 */\r
  gap: 16px;\r
}\r
\r
.demo-mode-change__log {\r
  width: 300px;\r
  border: 1px solid #e8e8e8;\r
  border-radius: 8px;\r
  padding: 16px;\r
  background: #fafafa;\r
  overflow: hidden;\r
  display: flex;\r
  flex-direction: column;\r
}\r
\r
.demo-mode-change__log-header {\r
  display: flex;\r
  justify-content: space-between;\r
  align-items: center;\r
  margin-bottom: 12px;\r
}\r
\r
.demo-mode-change__log h4 {\r
  margin: 0;\r
  font-size: 14px;\r
  color: #1a1a2e;\r
  font-weight: 600;\r
}\r
\r
.demo-mode-change__clear-btn {\r
  padding: 2px 8px;\r
  font-size: 12px;\r
  color: #666;\r
  background: #fff;\r
  border: 1px solid #d9d9d9;\r
  border-radius: 4px;\r
  cursor: pointer;\r
  transition: all 0.2s;\r
  user-select: none;\r
}\r
\r
.demo-mode-change__clear-btn:hover {\r
  color: #1890ff;\r
  border-color: #1890ff;\r
}\r
\r
.demo-mode-change__log-content {\r
  flex: 1;\r
  overflow-y: auto;\r
  font-size: 12px;\r
  line-height: 1.8;\r
}\r
\r
.demo-mode-change__log-item {\r
  padding: 4px 0;\r
  color: #555;\r
  font-family: 'Monaco', 'Menlo', 'Consolas', monospace;\r
  border-bottom: 1px solid #f0f0f0;\r
}\r
\r
.demo-mode-change__log-item:last-child {\r
  border-bottom: none;\r
}\r
\r
.demo-mode-change__canvas {\r
  flex: 1;\r
  border: 1px solid #e8e8e8;\r
  border-radius: 8px;\r
  overflow: hidden;\r
  background: #fff;\r
  display: flex;\r
  flex-direction: column;\r
}\r
\r
.demo-mode-change__controls {\r
  display: flex;\r
  gap: 8px;\r
  padding: 12px;\r
  background: #fff;\r
  border-bottom: 1px solid #e8e8e8;\r
}\r
\r
.demo-mode-change__btn {\r
  padding: 6px 16px;\r
  font-size: 13px;\r
  color: #666;\r
  background: #fff;\r
  border: 1px solid #d9d9d9;\r
  border-radius: 4px;\r
  cursor: pointer;\r
  transition: all 0.2s;\r
}\r
\r
.demo-mode-change__btn:hover {\r
  color: #1677ff;\r
  border-color: #1677ff;\r
}\r
\r
.demo-mode-change__btn--active {\r
  color: #fff;\r
  background: #1677ff;\r
  border-color: #1677ff;\r
}\r
</style>\r
`,Ae={class:"demo-selection"},Me={class:"demo-selection__log"},We={class:"demo-selection__log-content"},Ie={class:"demo-selection__canvas"},Pe=G({__name:"demo-selection-change",setup(T){const v=S([]);function a(x){const s=new Date().toLocaleTimeString();v.value.push(`[${s}] ${x}`)}function c(){v.value=[]}function l(x,s){a("✅ 画布初始化完成");const o=s.addNode({id:"node1",shape:"rect",x:100,y:80,width:100,height:60,label:"节点1",attrs:{body:{fill:"#5F95FF",stroke:"#2563EB"},label:{fill:"#fff"}}}),t=s.addNode({id:"node2",shape:"rect",x:250,y:80,width:100,height:60,label:"节点2",attrs:{body:{fill:"#10B981",stroke:"#059669"},label:{fill:"#fff"}}}),e=s.addNode({id:"node3",shape:"rect",x:100,y:180,width:100,height:60,label:"节点3",attrs:{body:{fill:"#F59E0B",stroke:"#D97706"},label:{fill:"#fff"}}}),i=s.addNode({id:"node4",shape:"rect",x:250,y:180,width:100,height:60,label:"节点4",attrs:{body:{fill:"#EF4444",stroke:"#DC2626"},label:{fill:"#fff"}}});s.addEdge({shape:"flow-edge",source:o,target:t,labels:["连线1"]}),s.addEdge({shape:"flow-edge",source:e,target:i,labels:["连线2"]}),a("📦 已添加 4 个节点和 2 条连线"),s.centerContent()}function g(x){a("🔄 @selection-change 事件触发"),a(`📊 选中数量: ${x.length}`),x.length===0?a("❌ 已清空选区"):x.forEach((s,o)=>{const t=s.isNode()?"节点":"连线";a(`  ${o+1}. ${t} ID: ${s.id}`)})}return(x,s)=>(h(),b("div",Ae,[n("div",Me,[n("div",{class:"demo-selection__log-header"},[s[0]||(s[0]=n("h4",null,"事件日志",-1)),n("button",{class:"demo-selection__clear-btn",onClick:c,title:"清除日志"}," 清除 ")]),n("div",We,[(h(!0),b(O,null,H(v.value,(o,t)=>(h(),b("div",{key:t,class:"demo-selection__log-item"},D(o),1))),128))])]),n("div",Ie,[s[1]||(s[1]=n("div",{class:"demo-selection__tip"}," 💡 点击或框选节点，观察选区变化事件 ",-1)),f(F(V),{onSelectionChange:g,onReady:l})])]))}}),Ge=U(Pe,[["__scopeId","data-v-7fb6643e"]]),Oe=`\uFEFF<template>\r
  <div class="demo-selection">\r
    <!-- 事件日志面板 -->\r
    <div class="demo-selection__log">\r
      <div class="demo-selection__log-header">\r
        <h4>事件日志</h4>\r
        <button class="demo-selection__clear-btn" @click="clearLogs" title="清除日志">\r
          清除\r
        </button>\r
      </div>\r
      <div class="demo-selection__log-content">\r
        <div v-for="(log, index) in logs" :key="index" class="demo-selection__log-item">\r
          {{ log }}\r
        </div>\r
      </div>\r
    </div>\r
\r
    <!-- 画布容器 -->\r
    <div class="demo-selection__canvas">\r
      <div class="demo-selection__tip">\r
        💡 点击或框选节点，观察选区变化事件\r
      </div>\r
      <FlowDesignerLayout @selection-change="handleSelectionChange" @ready="handleReady" />\r
    </div>\r
  </div>\r
</template>\r
\r
<script setup lang="ts">\r
import { ref } from 'vue'\r
import { FlowDesignerLayout }  from '@quick-code/x6-flow-designer'\r
//import FlowDesignerLayout   from '@/components/FlowDesigner/FlowDesignerLayout.vue'\r
import type { FlowDesigner } from '@quick-code/x6-flow-designer'\r
import type { Graph } from '@antv/x6'\r
\r
const logs = ref<string[]>([])\r
\r
function addLog(message: string) {\r
  const timestamp = new Date().toLocaleTimeString()\r
  logs.value.push(\`[\${timestamp}] \${message}\`)\r
}\r
\r
function clearLogs() {\r
  logs.value = []\r
}\r
\r
function handleReady(designer, graph) {\r
  addLog('✅ 画布初始化完成')\r
\r
  // 添加多个节点供选择\r
  const node1 = graph.addNode({\r
    id: 'node1',\r
    shape: 'rect',\r
    x: 100,\r
    y: 80,\r
    width: 100,\r
    height: 60,\r
    label: '节点1',\r
    attrs: {\r
      body: { fill: '#5F95FF', stroke: '#2563EB' },\r
      label: { fill: '#fff' },\r
    },\r
  })\r
\r
  const node2 = graph.addNode({\r
    id: 'node2',\r
    shape: 'rect',\r
    x: 250,\r
    y: 80,\r
    width: 100,\r
    height: 60,\r
    label: '节点2',\r
    attrs: {\r
      body: { fill: '#10B981', stroke: '#059669' },\r
      label: { fill: '#fff' },\r
    },\r
  })\r
\r
  const node3 = graph.addNode({\r
    id: 'node3',\r
    shape: 'rect',\r
    x: 100,\r
    y: 180,\r
    width: 100,\r
    height: 60,\r
    label: '节点3',\r
    attrs: {\r
      body: { fill: '#F59E0B', stroke: '#D97706' },\r
      label: { fill: '#fff' },\r
    },\r
  })\r
\r
  const node4 = graph.addNode({\r
    id: 'node4',\r
    shape: 'rect',\r
    x: 250,\r
    y: 180,\r
    width: 100,\r
    height: 60,\r
    label: '节点4',\r
    attrs: {\r
      body: { fill: '#EF4444', stroke: '#DC2626' },\r
      label: { fill: '#fff' },\r
    },\r
  })\r
\r
  // 添加连线\r
  graph.addEdge({\r
    shape: 'flow-edge',\r
    source: node1,\r
    target: node2,\r
    labels: ['连线1'],\r
  })\r
\r
  graph.addEdge({\r
    shape: 'flow-edge',\r
    source: node3,\r
    target: node4,\r
    labels: ['连线2'],\r
  })\r
\r
  addLog('📦 已添加 4 个节点和 2 条连线')\r
  graph.centerContent()\r
}\r
\r
/**\r
 * @selection-change 事件处理函数\r
 * 参数：cells - 当前选中的单元格数组\r
 */\r
function handleSelectionChange(cells: Array<{ id: string; isNode: () => boolean }>) {\r
  addLog(\`🔄 @selection-change 事件触发\`)\r
  addLog(\`📊 选中数量: \${cells.length}\`)\r
\r
  if (cells.length === 0) {\r
    addLog('❌ 已清空选区')\r
  } else {\r
    cells.forEach((cell, index) => {\r
      const type = cell.isNode() ? '节点' : '连线'\r
      addLog(\`  \${index + 1}. \${type} ID: \${cell.id}\`)\r
    })\r
  }\r
}\r
<\/script>\r
\r
<style scoped>\r
.demo-selection {\r
  display: flex;\r
  height: 100%; /* 修改：从固定高度改为 100%，支持全屏 */\r
  min-height: 400px; /* 添加：最小高度，非全屏时保持合理尺寸 */\r
  gap: 16px;\r
}\r
\r
.demo-selection__log {\r
  width: 300px;\r
  border: 1px solid #e8e8e8;\r
  border-radius: 8px;\r
  padding: 16px;\r
  background: #fafafa;\r
  overflow: hidden;\r
  display: flex;\r
  flex-direction: column;\r
}\r
\r
.demo-selection__log-header {\r
  display: flex;\r
  justify-content: space-between;\r
  align-items: center;\r
  margin-bottom: 12px;\r
}\r
\r
.demo-selection__log h4 {\r
  margin: 0;\r
  font-size: 14px;\r
  color: #1a1a2e;\r
  font-weight: 600;\r
}\r
\r
.demo-selection__clear-btn {\r
  padding: 2px 8px;\r
  font-size: 12px;\r
  color: #666;\r
  background: #fff;\r
  border: 1px solid #d9d9d9;\r
  border-radius: 4px;\r
  cursor: pointer;\r
  transition: all 0.2s;\r
  user-select: none;\r
}\r
\r
.demo-selection__clear-btn:hover {\r
  color: #1890ff;\r
  border-color: #1890ff;\r
}\r
\r
.demo-selection__log-content {\r
  flex: 1;\r
  overflow-y: auto;\r
  font-size: 12px;\r
  line-height: 1.8;\r
}\r
\r
.demo-selection__log-item {\r
  padding: 4px 0;\r
  color: #555;\r
  font-family: 'Monaco', 'Menlo', 'Consolas', monospace;\r
  border-bottom: 1px solid #f0f0f0;\r
}\r
\r
.demo-selection__log-item:last-child {\r
  border-bottom: none;\r
}\r
\r
.demo-selection__canvas {\r
  flex: 1;\r
  border: 1px solid #e8e8e8;\r
  border-radius: 8px;\r
  overflow: hidden;\r
  background: #fff;\r
  display: flex;\r
  flex-direction: column;\r
}\r
\r
.demo-selection__tip {\r
  padding: 10px 16px;\r
  background: #e6f7ff;\r
  border-bottom: 1px solid #91d5ff;\r
  font-size: 13px;\r
  color: #0050b3;\r
}\r
</style>\r
`,He={class:"demo-node-lifecycle"},Be={class:"demo-node-lifecycle__log"},Ve={class:"demo-node-lifecycle__log-content"},Ue={class:"demo-node-lifecycle__canvas"},Ze={class:"demo-node-lifecycle__controls"},qe={class:"demo-node-lifecycle__checkbox"},je={class:"demo-node-lifecycle__checkbox"},Ye={class:"demo-node-lifecycle__checkbox"},Xe={class:"demo-node-lifecycle__checkbox"},Je=G({__name:"demo-node-lifecycle",setup(T){const v=S([]),a=S(),c=S(),l=S(!0),g=S(!0),x=S(!0),s=S(!0);let o=0;function t(C){const L=new Date().toLocaleTimeString();v.value.push(`[${L}] ${C}`)}function e(){v.value=[]}function i(C,L){console.log("designerdesignerdesignerdesignerdesigner::",L,C),a.value=L,c.value=C,t("✅ 画布初始化完成"),t('💡 点击"添加节点"或"删除选中节点"观察事件')}function r(C){return t("🔵 beforeNodeAdd 触发"),t(`  节点ID: ${C.node.id}`),t(`  来源: ${C.source}`),t(`  允许添加: ${l.value}`),l.value?(t("✅ 允许添加节点"),!0):(t("❌ 节点添加被阻止"),!1)}function p(C){t("🟢 afterNodeAdd 触发"),t(`  节点ID: ${C.nodeId}`),t("  节点已成功添加到画布")}function m(C){return t("🟡 beforeNodeRemove 触发"),t(`  节点ID: ${C.nodeId}`),t(`  来源: ${C.source}`),t(`  允许删除: ${g.value}`),g.value?(t("✅ 允许删除节点"),!0):(t("❌ 节点删除被阻止"),!1)}function u(C){t("🔴 afterNodeRemove 触发"),t(`  节点ID: ${C.nodeId}`),t("  节点已从画布中移除")}function N(C){return t("🔵 beforeNodeHover 触发"),t(`  节点ID: ${C.node.id}`),t(`  当前状态: ${C.currentState}`),t(`  允许悬停: ${x.value}`),x.value?(t("✅ 允许节点悬停"),!0):(t("❌ 节点悬停被阻止"),!1)}function k(C){t("🟢 afterNodeHover 触发"),t(`  节点ID: ${C.node.id}`),t(`  状态已改变: ${C.stateChanged}`)}function d(C){return t("🟡 beforeNodeSelect 触发"),t(`  节点ID: ${C.node.id}`),t(`  当前状态: ${C.currentState}`),t(`  允许选择: ${s.value}`),s.value?(t("✅ 允许节点选择"),!0):(t("❌ 节点选择被阻止"),!1)}function _(C){t("🟠 afterNodeSelect 触发"),t(`  节点ID: ${C.node.id}`),t("  节点已被选中")}function $(){if(!a.value||!c.value)return;o++;const C=[{fill:"#5F95FF",stroke:"#2563EB"},{fill:"#10B981",stroke:"#059669"},{fill:"#F59E0B",stroke:"#D97706"},{fill:"#EF4444",stroke:"#DC2626"}],L=C[o%C.length],M=100+o%3*120,on=100+Math.floor(o/3)*100;t('👆 用户点击"添加节点"');const cn=a.value.createNode({shape:"rect",x:M,y:on,width:100,height:60,label:`节点${o}`,attrs:{body:{fill:L.fill,stroke:L.stroke},label:{fill:"#fff"}}});c.value.addCell(cn)}function A(){if(!c.value)return;const L=a.value.getSelectedCells().filter(M=>M.isNode());if(L.length===0){t("⚠️ 未选中任何节点");return}t('👆 用户点击"删除选中节点"'),L.forEach(M=>{c.value.removeCell(M)})}return(C,L)=>(h(),b("div",He,[n("div",Be,[n("div",{class:"demo-node-lifecycle__log-header"},[L[4]||(L[4]=n("h4",null,"事件日志",-1)),n("button",{class:"demo-node-lifecycle__clear-btn",onClick:e,title:"清除日志"}," 清除 ")]),n("div",Ve,[(h(!0),b(O,null,H(v.value,(M,on)=>(h(),b("div",{key:on,class:"demo-node-lifecycle__log-item"},D(M),1))),128))])]),n("div",Ue,[n("div",Ze,[n("button",{class:"demo-node-lifecycle__btn",onClick:$}," ➕ 添加节点 "),n("button",{class:"demo-node-lifecycle__btn",onClick:A}," ➖ 删除选中节点 "),n("label",qe,[nn(n("input",{type:"checkbox","onUpdate:modelValue":L[0]||(L[0]=M=>l.value=M)},null,512),[[dn,l.value]]),L[5]||(L[5]=P(" 允许添加 ",-1))]),n("label",je,[nn(n("input",{type:"checkbox","onUpdate:modelValue":L[1]||(L[1]=M=>g.value=M)},null,512),[[dn,g.value]]),L[6]||(L[6]=P(" 允许删除 ",-1))]),n("label",Ye,[nn(n("input",{type:"checkbox","onUpdate:modelValue":L[2]||(L[2]=M=>x.value=M)},null,512),[[dn,x.value]]),L[7]||(L[7]=P(" 允许悬停 ",-1))]),n("label",Xe,[nn(n("input",{type:"checkbox","onUpdate:modelValue":L[3]||(L[3]=M=>s.value=M)},null,512),[[dn,s.value]]),L[8]||(L[8]=P(" 允许选择 ",-1))])]),f(F(V),{onReady:i,"before-node-add":r,"after-node-add":p,"before-node-remove":m,"after-node-remove":u,"before-node-hover":N,"after-node-hover":k,"before-node-select":d,"after-node-select":_})])]))}}),Ke=U(Je,[["__scopeId","data-v-a93deed4"]]),Qe=`<template>\r
  <div class="demo-node-lifecycle">\r
    <!-- 事件日志面板 -->\r
    <div class="demo-node-lifecycle__log">\r
      <div class="demo-node-lifecycle__log-header">\r
        <h4>事件日志</h4>\r
        <button class="demo-node-lifecycle__clear-btn" @click="clearLogs" title="清除日志">\r
          清除\r
        </button>\r
      </div>\r
      <div class="demo-node-lifecycle__log-content">\r
        <div v-for="(log, index) in logs" :key="index" class="demo-node-lifecycle__log-item">\r
          {{ log }}\r
        </div>\r
      </div>\r
    </div>\r
\r
    <!-- 画布容器 -->\r
    <div class="demo-node-lifecycle__canvas">\r
      <div class="demo-node-lifecycle__controls">\r
        <button class="demo-node-lifecycle__btn" @click="addNode">\r
          ➕ 添加节点\r
        </button>\r
        <button class="demo-node-lifecycle__btn" @click="removeSelectedNode">\r
          ➖ 删除选中节点\r
        </button>\r
        <label class="demo-node-lifecycle__checkbox">\r
          <input type="checkbox" v-model="allowAdd" />\r
          允许添加\r
        </label>\r
        <label class="demo-node-lifecycle__checkbox">\r
          <input type="checkbox" v-model="allowRemove" />\r
          允许删除\r
        </label>\r
        <label class="demo-node-lifecycle__checkbox">\r
          <input type="checkbox" v-model="allowHover" />\r
          允许悬停\r
        </label>\r
        <label class="demo-node-lifecycle__checkbox">\r
          <input type="checkbox" v-model="allowSelect" />\r
          允许选择\r
        </label>\r
      </div>\r
      <FlowDesignerLayout\r
        @ready="handleReady"\r
        :before-node-add="handleBeforeNodeAdd"\r
        :after-node-add="handleAfterNodeAdd"\r
        :before-node-remove="handleBeforeNodeRemove"\r
        :after-node-remove="handleAfterNodeRemove"\r
        :before-node-hover="handleBeforeNodeHover"\r
        :after-node-hover="handleAfterNodeHover"\r
        :before-node-select="handleBeforeNodeSelect"\r
        :after-node-select="handleAfterNodeSelect"\r
      />\r
    </div>\r
  </div>\r
</template>\r
\r
<script setup lang="ts">\r
import { ref } from 'vue'\r
import { FlowDesignerLayout }  from '@quick-code/x6-flow-designer'\r
//import FlowDesignerLayout   from '@/components/FlowDesigner/FlowDesignerLayout.vue'\r
import type { FlowDesigner } from '@quick-code/x6-flow-designer'\r
import type { Graph } from '@antv/x6'\r
import type {\r
  BeforeNodeAddEvent,\r
  AfterNodeAddEvent,\r
  BeforeNodeRemoveEvent,\r
  AfterNodeRemoveEvent,\r
  BeforeNodeHoverEvent,\r
  AfterNodeHoverEvent,\r
  BeforeNodeSelectEvent,\r
  AfterNodeSelectEvent\r
} from '@/components/FlowDesigner/types/events'\r
\r
const logs = ref<string[]>([])\r
const graphRef = ref<Graph>()\r
const Designer = ref<FlowDesigner>()\r
const allowAdd = ref(true)\r
const allowRemove = ref(true)\r
const allowHover = ref(true)\r
const allowSelect = ref(true)\r
let nodeCounter = 0\r
\r
function addLog(message: string) {\r
  const timestamp = new Date().toLocaleTimeString()\r
  logs.value.push(\`[\${timestamp}] \${message}\`)\r
}\r
\r
function clearLogs() {\r
  logs.value = []\r
}\r
\r
function handleReady(designer, graph) {\r
  console.log('designerdesignerdesignerdesignerdesigner::', graph,designer);\r
  graphRef.value = graph\r
  Designer.value = designer\r
  addLog('✅ 画布初始化完成')\r
  addLog('💡 点击"添加节点"或"删除选中节点"观察事件')\r
}\r
\r
/**\r
 * :before-node-add 钩子函数\r
 * 返回 false 可阻止节点添加\r
 */\r
function handleBeforeNodeAdd(event: BeforeNodeAddEvent): boolean {\r
  addLog(\`🔵 beforeNodeAdd 触发\`)\r
  addLog(\`  节点ID: \${event.node.id}\`)\r
  addLog(\`  来源: \${event.source}\`)\r
  addLog(\`  允许添加: \${allowAdd.value}\`)\r
\r
  if (!allowAdd.value) {\r
    addLog(\`❌ 节点添加被阻止\`)\r
    return false // 返回 false 阻止操作\r
  }\r
\r
  addLog(\`✅ 允许添加节点\`)\r
  return true // 返回 true 允许操作\r
}\r
\r
/**\r
 * :after-node-add 钩子函数\r
 */\r
function handleAfterNodeAdd(event: AfterNodeAddEvent): void {\r
  addLog(\`🟢 afterNodeAdd 触发\`)\r
  addLog(\`  节点ID: \${event.nodeId}\`)\r
  addLog(\`  节点已成功添加到画布\`)\r
}\r
\r
/**\r
 * :before-node-remove 钩子函数\r
 * 返回 false 可阻止节点删除\r
 */\r
function handleBeforeNodeRemove(event: BeforeNodeRemoveEvent): boolean {\r
  addLog(\`🟡 beforeNodeRemove 触发\`)\r
  addLog(\`  节点ID: \${event.nodeId}\`)\r
  addLog(\`  来源: \${event.source}\`)\r
  addLog(\`  允许删除: \${allowRemove.value}\`)\r
\r
  if (!allowRemove.value) {\r
    addLog(\`❌ 节点删除被阻止\`)\r
    return false // 返回 false 阻止操作\r
  }\r
\r
  addLog(\`✅ 允许删除节点\`)\r
  return true // 返回 true 允许操作\r
}\r
\r
/**\r
 * :after-node-remove 钩子函数\r
 */\r
function handleAfterNodeRemove(event: AfterNodeRemoveEvent): void {\r
  addLog(\`🔴 afterNodeRemove 触发\`)\r
  addLog(\`  节点ID: \${event.nodeId}\`)\r
  addLog(\`  节点已从画布中移除\`)\r
}\r
\r
/**\r
 * :before-node-hover 钩子函数\r
 * 返回 false 可阻止节点悬停效果\r
 */\r
function handleBeforeNodeHover(event: BeforeNodeHoverEvent): boolean {\r
  addLog(\`🔵 beforeNodeHover 触发\`)\r
  addLog(\`  节点ID: \${event.node.id}\`)\r
  addLog(\`  当前状态: \${event.currentState}\`)\r
  addLog(\`  允许悬停: \${allowHover.value}\`)\r
\r
  if (!allowHover.value) {\r
    addLog(\`❌ 节点悬停被阻止\`)\r
    return false // 返回 false 阻止悬停效果\r
  }\r
\r
  addLog(\`✅ 允许节点悬停\`)\r
  return true // 返回 true 允许悬停\r
}\r
\r
/**\r
 * :after-node-hover 钩子函数\r
 */\r
function handleAfterNodeHover(event: AfterNodeHoverEvent): void {\r
  addLog(\`🟢 afterNodeHover 触发\`)\r
  addLog(\`  节点ID: \${event.node.id}\`)\r
  addLog(\`  状态已改变: \${event.stateChanged}\`)\r
}\r
\r
/**\r
 * :before-node-select 钩子函数\r
 * 返回 false 可阻止节点选择\r
 */\r
function handleBeforeNodeSelect(event: BeforeNodeSelectEvent): boolean {\r
  addLog(\`🟡 beforeNodeSelect 触发\`)\r
  addLog(\`  节点ID: \${event.node.id}\`)\r
  addLog(\`  当前状态: \${event.currentState}\`)\r
  addLog(\`  允许选择: \${allowSelect.value}\`)\r
\r
  if (!allowSelect.value) {\r
    addLog(\`❌ 节点选择被阻止\`)\r
    return false // 返回 false 阻止选择\r
  }\r
\r
  addLog(\`✅ 允许节点选择\`)\r
  return true // 返回 true 允许选择\r
}\r
\r
/**\r
 * :after-node-select 钩子函数\r
 */\r
function handleAfterNodeSelect(event: AfterNodeSelectEvent): void {\r
  addLog(\`🟠 afterNodeSelect 触发\`)\r
  addLog(\`  节点ID: \${event.node.id}\`)\r
  addLog(\`  节点已被选中\`)\r
}\r
\r
function addNode() {\r
  if (!graphRef.value || !Designer.value) return\r
\r
  nodeCounter++\r
  const colors = [\r
    { fill: '#5F95FF', stroke: '#2563EB' },\r
    { fill: '#10B981', stroke: '#059669' },\r
    { fill: '#F59E0B', stroke: '#D97706' },\r
    { fill: '#EF4444', stroke: '#DC2626' },\r
  ]\r
\r
  const color = colors[nodeCounter % colors.length]\r
  const x = 100 + (nodeCounter % 3) * 120\r
  const y = 100 + Math.floor(nodeCounter / 3) * 100\r
\r
  addLog(\`👆 用户点击"添加节点"\`)\r
\r
  // 使用 designer.addCell 方法\r
  const node = graphRef.value.createNode({\r
    shape: 'rect',\r
    x,\r
    y,\r
    width: 100,\r
    height: 60,\r
    label: \`节点\${nodeCounter}\`,\r
    attrs: {\r
      body: { fill: color.fill, stroke: color.stroke },\r
      label: { fill: '#fff' },\r
    },\r
  })\r
\r
  Designer.value.addCell(node)\r
}\r
\r
function removeSelectedNode() {\r
  if (!Designer.value) return\r
\r
  const selectedCells = graphRef.value.getSelectedCells()\r
  const selectedNodes = selectedCells.filter(cell => cell.isNode())\r
\r
  if (selectedNodes.length === 0) {\r
    addLog('⚠️ 未选中任何节点')\r
    return\r
  }\r
\r
  addLog(\`👆 用户点击"删除选中节点"\`)\r
  selectedNodes.forEach(node => {\r
    Designer.value.removeCell(node)\r
  })\r
}\r
<\/script>\r
\r
<style scoped>\r
.demo-node-lifecycle {\r
  display: flex;\r
  height: 100%; /* 修改：从固定高度改为 100%，支持全屏 */\r
  min-height: 450px; /* 添加：最小高度，非全屏时保持合理尺寸 */\r
  gap: 16px;\r
}\r
\r
.demo-node-lifecycle__log {\r
  width: 320px;\r
  border: 1px solid #e8e8e8;\r
  border-radius: 8px;\r
  padding: 16px;\r
  background: #fafafa;\r
  overflow: hidden;\r
  display: flex;\r
  flex-direction: column;\r
}\r
\r
.demo-node-lifecycle__log-header {\r
  display: flex;\r
  justify-content: space-between;\r
  align-items: center;\r
  margin-bottom: 12px;\r
}\r
\r
.demo-node-lifecycle__log h4 {\r
  margin: 0;\r
  font-size: 14px;\r
  color: #1a1a2e;\r
  font-weight: 600;\r
}\r
\r
.demo-node-lifecycle__clear-btn {\r
  padding: 2px 8px;\r
  font-size: 12px;\r
  color: #666;\r
  background: #fff;\r
  border: 1px solid #d9d9d9;\r
  border-radius: 4px;\r
  cursor: pointer;\r
  transition: all 0.2s;\r
  user-select: none;\r
}\r
\r
.demo-node-lifecycle__clear-btn:hover {\r
  color: #1890ff;\r
  border-color: #1890ff;\r
}\r
\r
.demo-node-lifecycle__log-content {\r
  flex: 1;\r
  overflow-y: auto;\r
  font-size: 12px;\r
  line-height: 1.8;\r
}\r
\r
.demo-node-lifecycle__log-item {\r
  padding: 4px 0;\r
  color: #555;\r
  font-family: 'Monaco', 'Menlo', 'Consolas', monospace;\r
  border-bottom: 1px solid #f0f0f0;\r
}\r
\r
.demo-node-lifecycle__log-item:last-child {\r
  border-bottom: none;\r
}\r
\r
.demo-node-lifecycle__canvas {\r
  flex: 1;\r
  border: 1px solid #e8e8e8;\r
  border-radius: 8px;\r
  overflow: hidden;\r
  background: #fff;\r
  display: flex;\r
  flex-direction: column;\r
}\r
\r
.demo-node-lifecycle__controls {\r
  display: flex;\r
  gap: 12px;\r
  align-items: center;\r
  padding: 12px;\r
  background: #fff;\r
  border-bottom: 1px solid #e8e8e8;\r
}\r
\r
.demo-node-lifecycle__btn {\r
  padding: 6px 16px;\r
  font-size: 13px;\r
  color: #fff;\r
  background: #1677ff;\r
  border: none;\r
  border-radius: 4px;\r
  cursor: pointer;\r
  transition: all 0.2s;\r
}\r
\r
.demo-node-lifecycle__btn:hover {\r
  background: #0958d9;\r
}\r
\r
.demo-node-lifecycle__checkbox {\r
  display: flex;\r
  align-items: center;\r
  gap: 6px;\r
  font-size: 13px;\r
  color: #666;\r
  cursor: pointer;\r
}\r
\r
.demo-node-lifecycle__checkbox input {\r
  cursor: pointer;\r
}\r
</style>\r
`,nr={class:"demo-edge-lifecycle"},er={class:"demo-edge-lifecycle__log"},rr={class:"demo-edge-lifecycle__log-content"},tr={class:"demo-edge-lifecycle__canvas"},or={class:"demo-edge-lifecycle__controls"},sr={class:"demo-edge-lifecycle__checkbox"},lr={class:"demo-edge-lifecycle__checkbox"},ir={class:"demo-edge-lifecycle__checkbox"},ar={class:"demo-edge-lifecycle__checkbox"},dr=G({__name:"demo-edge-lifecycle",setup(T){const v=S([]),a=S(!0),c=S(!0),l=S(!0),g=S(!0),x=S();function s(d){const _=new Date().toLocaleTimeString();v.value.push(`[${_}] ${d}`)}function o(){v.value=[]}function t(d,_){x.value=d,s("✅ 画布初始化完成");const $={groups:{top:{position:"top",attrs:{circle:{r:4,magnet:!0,stroke:"#5F95FF",strokeWidth:1,fill:"#fff",style:{visibility:"hidden"}}}},right:{position:"right",attrs:{circle:{r:4,magnet:!0,stroke:"#5F95FF",strokeWidth:1,fill:"#fff",style:{visibility:"hidden"}}}},bottom:{position:"bottom",attrs:{circle:{r:4,magnet:!0,stroke:"#5F95FF",strokeWidth:1,fill:"#fff",style:{visibility:"hidden"}}}},left:{position:"left",attrs:{circle:{r:4,magnet:!0,stroke:"#5F95FF",strokeWidth:1,fill:"#fff",style:{visibility:"hidden"}}}}},items:[{id:"port-top",group:"top"},{id:"port-right",group:"right"},{id:"port-bottom",group:"bottom"},{id:"port-left",group:"left"}]},A=_.createNode({id:"node1",shape:"rect",x:100,y:100,width:100,height:60,label:"节点1",ports:$,attrs:{body:{fill:"#5F95FF",stroke:"#2563EB"},label:{fill:"#fff"}}});d.addCell(A);const C=_.createNode({id:"node2",shape:"rect",x:300,y:100,width:100,height:60,label:"节点2",ports:$,attrs:{body:{fill:"#10B981",stroke:"#059669"},label:{fill:"#fff"}}});d.addCell(C);const L=_.createNode({id:"node3",shape:"rect",x:100,y:220,width:100,height:60,label:"节点3",ports:$,attrs:{body:{fill:"#F59E0B",stroke:"#D97706"},label:{fill:"#fff"}}});d.addCell(L);const M=_.createNode({id:"node4",shape:"rect",x:300,y:220,width:100,height:60,label:"节点4",ports:$,attrs:{body:{fill:"#EF4444",stroke:"#DC2626"},label:{fill:"#fff"}}});d.addCell(M),s("📦 已添加 4 个带连接桩的节点"),s("💡 拖拽节点边缘的圆点来创建连线"),_.centerContent()}function e(d){var _,$;return s("🔵 beforeEdgeAdd 触发"),s(`  源节点: ${(_=d.sourceCell)==null?void 0:_.id}`),s(`  目标节点: ${($=d.targetCell)==null?void 0:$.id}`),s(`  允许创建: ${a.value}`),a.value?(s("✅ 允许创建连线"),!0):(s("❌ 连线创建被阻止"),!1)}function i(d){s("🟢 afterEdgeAdd 触发"),s(`  连线ID: ${d.edgeId}`),s("  连线已成功添加到画布")}function r(d){return s("🟡 beforeEdgeRemove 触发"),s(`  连线ID: ${d.edgeId}`),s(`  来源: ${d.source}`),s(`  允许删除: ${c.value}`),c.value?(s("✅ 允许删除连线"),!0):(s("❌ 连线删除被阻止"),!1)}function p(d){s("🔴 afterEdgeRemove 触发"),s(`  连线ID: ${d.edgeId}`),s("  连线已从画布中移除")}function m(d){return s("🔵 beforeEdgeHover 触发"),s(`  连线ID: ${d.edge.id}`),s(`  当前状态: ${d.currentState}`),s(`  允许悬停: ${l.value}`),l.value?(s("✅ 允许连线悬停"),!0):(s("❌ 连线悬停被阻止"),!1)}function u(d){s("🟢 afterEdgeHover 触发"),s(`  连线ID: ${d.edge.id}`),s(`  状态已改变: ${d.stateChanged}`)}function N(d){return s("🟡 beforeEdgeSelect 触发"),s(`  连线ID: ${d.edge.id}`),s(`  当前状态: ${d.currentState}`),s(`  允许选择: ${g.value}`),g.value?(s("✅ 允许连线选择"),!0):(s("❌ 连线选择被阻止"),!1)}function k(d){s("🟠 afterEdgeSelect 触发"),s(`  连线ID: ${d.edge.id}`),s("  连线已被选中")}return(d,_)=>(h(),b("div",nr,[n("div",er,[n("div",{class:"demo-edge-lifecycle__log-header"},[_[4]||(_[4]=n("h4",null,"事件日志",-1)),n("button",{class:"demo-edge-lifecycle__clear-btn",onClick:o,title:"清除日志"}," 清除 ")]),n("div",rr,[(h(!0),b(O,null,H(v.value,($,A)=>(h(),b("div",{key:A,class:"demo-edge-lifecycle__log-item"},D($),1))),128))])]),n("div",tr,[_[9]||(_[9]=n("div",{class:"demo-edge-lifecycle__tip"}," 💡 鼠标悬停到节点上会显示连接桩，拖拽连接桩来创建连线。选中连线后按 Delete 或 Backspace 删除。 ",-1)),n("div",or,[n("label",sr,[nn(n("input",{type:"checkbox","onUpdate:modelValue":_[0]||(_[0]=$=>a.value=$)},null,512),[[dn,a.value]]),_[5]||(_[5]=P(" 允许创建连线 ",-1))]),n("label",lr,[nn(n("input",{type:"checkbox","onUpdate:modelValue":_[1]||(_[1]=$=>c.value=$)},null,512),[[dn,c.value]]),_[6]||(_[6]=P(" 允许删除连线 ",-1))]),n("label",ir,[nn(n("input",{type:"checkbox","onUpdate:modelValue":_[2]||(_[2]=$=>l.value=$)},null,512),[[dn,l.value]]),_[7]||(_[7]=P(" 允许悬停连线 ",-1))]),n("label",ar,[nn(n("input",{type:"checkbox","onUpdate:modelValue":_[3]||(_[3]=$=>g.value=$)},null,512),[[dn,g.value]]),_[8]||(_[8]=P(" 允许选择连线 ",-1))])]),f(V,{onReady:t,"before-edge-add":e,"after-edge-add":i,"before-edge-remove":r,"after-edge-remove":p,"before-edge-hover":m,"after-edge-hover":u,"before-edge-select":N,"after-edge-select":k})])]))}}),cr=U(dr,[["__scopeId","data-v-0ae18f41"]]),pr=`<template>\r
  <div class="demo-edge-lifecycle">\r
    <!-- 事件日志面板 -->\r
    <div class="demo-edge-lifecycle__log">\r
      <div class="demo-edge-lifecycle__log-header">\r
        <h4>事件日志</h4>\r
        <button class="demo-edge-lifecycle__clear-btn" @click="clearLogs" title="清除日志">\r
          清除\r
        </button>\r
      </div>\r
      <div class="demo-edge-lifecycle__log-content">\r
        <div v-for="(log, index) in logs" :key="index" class="demo-edge-lifecycle__log-item">\r
          {{ log }}\r
        </div>\r
      </div>\r
    </div>\r
\r
    <!-- 画布容器 -->\r
    <div class="demo-edge-lifecycle__canvas">\r
      <div class="demo-edge-lifecycle__tip">\r
        💡 鼠标悬停到节点上会显示连接桩，拖拽连接桩来创建连线。选中连线后按 Delete 或 Backspace 删除。\r
      </div>\r
      <div class="demo-edge-lifecycle__controls">\r
        <label class="demo-edge-lifecycle__checkbox">\r
          <input type="checkbox" v-model="allowAdd" />\r
          允许创建连线\r
        </label>\r
        <label class="demo-edge-lifecycle__checkbox">\r
          <input type="checkbox" v-model="allowRemove" />\r
          允许删除连线\r
        </label>\r
        <label class="demo-edge-lifecycle__checkbox">\r
          <input type="checkbox" v-model="allowHover" />\r
          允许悬停连线\r
        </label>\r
        <label class="demo-edge-lifecycle__checkbox">\r
          <input type="checkbox" v-model="allowSelect" />\r
          允许选择连线\r
        </label>\r
      </div>\r
      <FlowDesignerLayout\r
        @ready="handleReady"\r
        :before-edge-add="handleBeforeEdgeAdd"\r
        :after-edge-add="handleAfterEdgeAdd"\r
        :before-edge-remove="handleBeforeEdgeRemove"\r
        :after-edge-remove="handleAfterEdgeRemove"\r
        :before-edge-hover="handleBeforeEdgeHover"\r
        :after-edge-hover="handleAfterEdgeHover"\r
        :before-edge-select="handleBeforeEdgeSelect"\r
        :after-edge-select="handleAfterEdgeSelect"\r
      />\r
    </div>\r
  </div>\r
</template>\r
\r
<script setup lang="ts">\r
import { ref } from 'vue'\r
import  FlowDesignerLayout   from '@/components/FlowDesigner/FlowDesignerLayout.vue'\r
import type { FlowDesigner } from '@quick-code/x6-flow-designer'\r
import type { Graph } from '@antv/x6'\r
import type {\r
  BeforeEdgeAddEvent,\r
  AfterEdgeAddEvent,\r
  BeforeEdgeRemoveEvent,\r
  AfterEdgeRemoveEvent,\r
  BeforeEdgeHoverEvent,\r
  AfterEdgeHoverEvent,\r
  BeforeEdgeSelectEvent,\r
  AfterEdgeSelectEvent\r
} from '@/components/FlowDesigner/types/events'\r
\r
const logs = ref<string[]>([])\r
const allowAdd = ref(true)\r
const allowRemove = ref(true)\r
const allowHover = ref(true)\r
const allowSelect = ref(true)\r
const designerRef = ref<FlowDesigner>()\r
\r
function addLog(message: string) {\r
  const timestamp = new Date().toLocaleTimeString()\r
  logs.value.push(\`[\${timestamp}] \${message}\`)\r
}\r
\r
function clearLogs() {\r
  logs.value = []\r
}\r
\r
function handleReady(designer: FlowDesigner, graph: Graph) {\r
  designerRef.value = designer\r
  addLog('✅ 画布初始化完成')\r
\r
  // 定义连接桩配置\r
  const ports = {\r
    groups: {\r
      top: {\r
        position: 'top',\r
        attrs: {\r
          circle: {\r
            r: 4,\r
            magnet: true,\r
            stroke: '#5F95FF',\r
            strokeWidth: 1,\r
            fill: '#fff',\r
            style: {\r
              visibility: 'hidden',\r
            },\r
          },\r
        },\r
      },\r
      right: {\r
        position: 'right',\r
        attrs: {\r
          circle: {\r
            r: 4,\r
            magnet: true,\r
            stroke: '#5F95FF',\r
            strokeWidth: 1,\r
            fill: '#fff',\r
            style: {\r
              visibility: 'hidden',\r
            },\r
          },\r
        },\r
      },\r
      bottom: {\r
        position: 'bottom',\r
        attrs: {\r
          circle: {\r
            r: 4,\r
            magnet: true,\r
            stroke: '#5F95FF',\r
            strokeWidth: 1,\r
            fill: '#fff',\r
            style: {\r
              visibility: 'hidden',\r
            },\r
          },\r
        },\r
      },\r
      left: {\r
        position: 'left',\r
        attrs: {\r
          circle: {\r
            r: 4,\r
            magnet: true,\r
            stroke: '#5F95FF',\r
            strokeWidth: 1,\r
            fill: '#fff',\r
            style: {\r
              visibility: 'hidden',\r
            },\r
          },\r
        },\r
      },\r
    },\r
    items: [\r
      { id: 'port-top', group: 'top' },\r
      { id: 'port-right', group: 'right' },\r
      { id: 'port-bottom', group: 'bottom' },\r
      { id: 'port-left', group: 'left' },\r
    ],\r
  }\r
\r
  // 使用 designer.addCell 添加带连接桩的节点\r
  const node1 = graph.createNode({\r
    id: 'node1',\r
    shape: 'rect',\r
    x: 100,\r
    y: 100,\r
    width: 100,\r
    height: 60,\r
    label: '节点1',\r
    ports,\r
    attrs: {\r
      body: { fill: '#5F95FF', stroke: '#2563EB' },\r
      label: { fill: '#fff' },\r
    },\r
  })\r
  designer.addCell(node1)\r
\r
  const node2 = graph.createNode({\r
    id: 'node2',\r
    shape: 'rect',\r
    x: 300,\r
    y: 100,\r
    width: 100,\r
    height: 60,\r
    label: '节点2',\r
    ports,\r
    attrs: {\r
      body: { fill: '#10B981', stroke: '#059669' },\r
      label: { fill: '#fff' },\r
    },\r
  })\r
  designer.addCell(node2)\r
\r
  const node3 = graph.createNode({\r
    id: 'node3',\r
    shape: 'rect',\r
    x: 100,\r
    y: 220,\r
    width: 100,\r
    height: 60,\r
    label: '节点3',\r
    ports,\r
    attrs: {\r
      body: { fill: '#F59E0B', stroke: '#D97706' },\r
      label: { fill: '#fff' },\r
    },\r
  })\r
  designer.addCell(node3)\r
\r
  const node4 = graph.createNode({\r
    id: 'node4',\r
    shape: 'rect',\r
    x: 300,\r
    y: 220,\r
    width: 100,\r
    height: 60,\r
    label: '节点4',\r
    ports,\r
    attrs: {\r
      body: { fill: '#EF4444', stroke: '#DC2626' },\r
      label: { fill: '#fff' },\r
    },\r
  })\r
  designer.addCell(node4)\r
\r
  addLog('📦 已添加 4 个带连接桩的节点')\r
  addLog('💡 拖拽节点边缘的圆点来创建连线')\r
  graph.centerContent()\r
}\r
\r
/**\r
 * :before-edge-add 钩子函数\r
 * 返回 false 可阻止连线创建\r
 */\r
function handleBeforeEdgeAdd(event: BeforeEdgeAddEvent): boolean {\r
  addLog(\`🔵 beforeEdgeAdd 触发\`)\r
  addLog(\`  源节点: \${event.sourceCell?.id}\`)\r
  addLog(\`  目标节点: \${event.targetCell?.id}\`)\r
  addLog(\`  允许创建: \${allowAdd.value}\`)\r
\r
  if (!allowAdd.value) {\r
    addLog(\`❌ 连线创建被阻止\`)\r
    return false // 返回 false 阻止操作\r
  }\r
\r
  addLog(\`✅ 允许创建连线\`)\r
  return true // 返回 true 允许操作\r
}\r
\r
/**\r
 * :after-edge-add 钩子函数\r
 */\r
function handleAfterEdgeAdd(event: AfterEdgeAddEvent): void {\r
  addLog(\`🟢 afterEdgeAdd 触发\`)\r
  addLog(\`  连线ID: \${event.edgeId}\`)\r
  addLog(\`  连线已成功添加到画布\`)\r
}\r
\r
/**\r
 * :before-edge-remove 钩子函数\r
 * 返回 false 可阻止连线删除\r
 */\r
function handleBeforeEdgeRemove(event: BeforeEdgeRemoveEvent): boolean {\r
  addLog(\`🟡 beforeEdgeRemove 触发\`)\r
  addLog(\`  连线ID: \${event.edgeId}\`)\r
  addLog(\`  来源: \${event.source}\`)\r
  addLog(\`  允许删除: \${allowRemove.value}\`)\r
\r
  if (!allowRemove.value) {\r
    addLog(\`❌ 连线删除被阻止\`)\r
    return false // 返回 false 阻止操作\r
  }\r
\r
  addLog(\`✅ 允许删除连线\`)\r
  return true // 返回 true 允许操作\r
}\r
\r
/**\r
 * :after-edge-remove 钩子函数\r
 */\r
function handleAfterEdgeRemove(event: AfterEdgeRemoveEvent): void {\r
  addLog(\`🔴 afterEdgeRemove 触发\`)\r
  addLog(\`  连线ID: \${event.edgeId}\`)\r
  addLog(\`  连线已从画布中移除\`)\r
}\r
\r
/**\r
 * :before-edge-hover 钩子函数\r
 * 返回 false 可阻止连线悬停效果\r
 */\r
function handleBeforeEdgeHover(event: BeforeEdgeHoverEvent): boolean {\r
  addLog(\`🔵 beforeEdgeHover 触发\`)\r
  addLog(\`  连线ID: \${event.edge.id}\`)\r
  addLog(\`  当前状态: \${event.currentState}\`)\r
  addLog(\`  允许悬停: \${allowHover.value}\`)\r
\r
  if (!allowHover.value) {\r
    addLog(\`❌ 连线悬停被阻止\`)\r
    return false // 返回 false 阻止悬停效果\r
  }\r
\r
  addLog(\`✅ 允许连线悬停\`)\r
  return true // 返回 true 允许悬停\r
}\r
\r
/**\r
 * :after-edge-hover 钩子函数\r
 */\r
function handleAfterEdgeHover(event: AfterEdgeHoverEvent): void {\r
  addLog(\`🟢 afterEdgeHover 触发\`)\r
  addLog(\`  连线ID: \${event.edge.id}\`)\r
  addLog(\`  状态已改变: \${event.stateChanged}\`)\r
}\r
\r
/**\r
 * :before-edge-select 钩子函数\r
 * 返回 false 可阻止连线选择\r
 */\r
function handleBeforeEdgeSelect(event: BeforeEdgeSelectEvent): boolean {\r
  addLog(\`🟡 beforeEdgeSelect 触发\`)\r
  addLog(\`  连线ID: \${event.edge.id}\`)\r
  addLog(\`  当前状态: \${event.currentState}\`)\r
  addLog(\`  允许选择: \${allowSelect.value}\`)\r
\r
  if (!allowSelect.value) {\r
    addLog(\`❌ 连线选择被阻止\`)\r
    return false // 返回 false 阻止选择\r
  }\r
\r
  addLog(\`✅ 允许连线选择\`)\r
  return true // 返回 true 允许选择\r
}\r
\r
/**\r
 * :after-edge-select 钩子函数\r
 */\r
function handleAfterEdgeSelect(event: AfterEdgeSelectEvent): void {\r
  addLog(\`🟠 afterEdgeSelect 触发\`)\r
  addLog(\`  连线ID: \${event.edge.id}\`)\r
  addLog(\`  连线已被选中\`)\r
}\r
<\/script>\r
\r
<style scoped>\r
.demo-edge-lifecycle {\r
  display: flex;\r
  height: 100%; /* 修改：从固定高度改为 100%，支持全屏 */\r
  min-height: 450px; /* 添加：最小高度，非全屏时保持合理尺寸 */\r
  gap: 16px;\r
}\r
\r
.demo-edge-lifecycle__log {\r
  width: 320px;\r
  border: 1px solid #e8e8e8;\r
  border-radius: 8px;\r
  padding: 16px;\r
  background: #fafafa;\r
  overflow: hidden;\r
  display: flex;\r
  flex-direction: column;\r
}\r
\r
.demo-edge-lifecycle__log-header {\r
  display: flex;\r
  justify-content: space-between;\r
  align-items: center;\r
  margin-bottom: 12px;\r
}\r
\r
.demo-edge-lifecycle__log h4 {\r
  margin: 0;\r
  font-size: 14px;\r
  color: #1a1a2e;\r
  font-weight: 600;\r
}\r
\r
.demo-edge-lifecycle__clear-btn {\r
  padding: 2px 8px;\r
  font-size: 12px;\r
  color: #666;\r
  background: #fff;\r
  border: 1px solid #d9d9d9;\r
  border-radius: 4px;\r
  cursor: pointer;\r
  transition: all 0.2s;\r
  user-select: none;\r
}\r
\r
.demo-edge-lifecycle__clear-btn:hover {\r
  color: #1890ff;\r
  border-color: #1890ff;\r
}\r
\r
.demo-edge-lifecycle__log-content {\r
  flex: 1;\r
  overflow-y: auto;\r
  font-size: 12px;\r
  line-height: 1.8;\r
}\r
\r
.demo-edge-lifecycle__log-item {\r
  padding: 4px 0;\r
  color: #555;\r
  font-family: 'Monaco', 'Menlo', 'Consolas', monospace;\r
  border-bottom: 1px solid #f0f0f0;\r
}\r
\r
.demo-edge-lifecycle__log-item:last-child {\r
  border-bottom: none;\r
}\r
\r
.demo-edge-lifecycle__canvas {\r
  flex: 1;\r
  border: 1px solid #e8e8e8;\r
  border-radius: 8px;\r
  overflow: hidden;\r
  background: #fff;\r
  display: flex;\r
  flex-direction: column;\r
}\r
\r
.demo-edge-lifecycle__tip {\r
  padding: 10px 16px;\r
  background: #e6f7ff;\r
  border-bottom: 1px solid #91d5ff;\r
  font-size: 13px;\r
  color: #0050b3;\r
}\r
\r
.demo-edge-lifecycle__controls {\r
  display: flex;\r
  gap: 16px;\r
  align-items: center;\r
  padding: 10px 16px;\r
  background: #fff;\r
  border-bottom: 1px solid #e8e8e8;\r
}\r
\r
.demo-edge-lifecycle__checkbox {\r
  display: flex;\r
  align-items: center;\r
  gap: 6px;\r
  font-size: 13px;\r
  color: #666;\r
  cursor: pointer;\r
}\r
\r
.demo-edge-lifecycle__checkbox input {\r
  cursor: pointer;\r
}\r
\r
/* 连接桩样式 - 鼠标悬停时显示 */\r
:deep(.x6-node:hover .x6-port-body) {\r
  visibility: visible !important;\r
}\r
\r
:deep(.x6-port-body) {\r
  transition: all 0.2s;\r
}\r
\r
:deep(.x6-node:hover .x6-port-body circle) {\r
  stroke: #1677ff;\r
  stroke-width: 2;\r
  fill: #fff;\r
}\r
</style>\r
`,gr={class:"demo-data-loaded"},fr={class:"demo-data-loaded__log"},mr={class:"demo-data-loaded__log-content"},ur={class:"demo-data-loaded__canvas"},hr=G({__name:"demo-data-loaded",setup(T){const v=S([]),a=S(),c={meta:{name:"示例流程",version:"1.0.0"},nodes:[{id:"start",shape:"rect",x:100,y:100,width:100,height:60,data:{label:"开始"},attrs:{body:{fill:"#10B981",stroke:"#059669"},label:{text:"开始",fill:"#fff"}}},{id:"process1",shape:"rect",x:250,y:100,width:100,height:60,data:{label:"处理1"},attrs:{body:{fill:"#5F95FF",stroke:"#2563EB"},label:{text:"处理1",fill:"#fff"}}},{id:"process2",shape:"rect",x:400,y:100,width:100,height:60,data:{label:"处理2"},attrs:{body:{fill:"#F59E0B",stroke:"#D97706"},label:{text:"处理2",fill:"#fff"}}},{id:"end",shape:"rect",x:250,y:220,width:100,height:60,data:{label:"结束"},attrs:{body:{fill:"#EF4444",stroke:"#DC2626"},label:{text:"结束",fill:"#fff"}}}],edges:[{id:"edge1",shape:"flow-edge",source:{cell:"start"},target:{cell:"process1"},data:{label:"步骤1"},labels:["步骤1"]},{id:"edge2",shape:"flow-edge",source:{cell:"process1"},target:{cell:"process2"},data:{label:"步骤2"},labels:["步骤2"]},{id:"edge3",shape:"flow-edge",source:{cell:"process2"},target:{cell:"end"},data:{label:"步骤3"},labels:["步骤3"]}],viewport:{tx:0,ty:0,scale:1}};function l(e){const i=new Date().toLocaleTimeString();v.value.push(`[${i}] ${e}`)}function g(){v.value=[]}function x(e,i){a.value=e,l("✅ 画布初始化完成"),l('💡 点击"加载示例数据"按钮')}function s(e){var p,m,u,N;l("🟢 afterDataLoaded 钩子触发");const i=((m=(p=e.cells)==null?void 0:p.filter(k=>k.shape))==null?void 0:m.length)||0,r=((N=(u=e.cells)==null?void 0:u.filter(k=>k.source))==null?void 0:N.length)||0;if(l(`📊 节点数量: ${i}`),l(`🔗 连线数量: ${r}`),l("✅ 数据加载完成，画布已渲染"),a.value){const k=a.value.getGraph();setTimeout(()=>{k.centerContent(),l("🎯 已自动居中显示")},100)}}function o(){if(!a.value){l("⚠️ 画布尚未初始化");return}l('👆 用户点击"加载示例数据"'),l("📥 调用 designer.load()..."),a.value.load(c)}function t(){if(!a.value)return;l('👆 用户点击"清空画布"'),a.value.getGraph().clearCells(),l("🗑 画布已清空")}return(e,i)=>(h(),b("div",gr,[n("div",fr,[n("div",{class:"demo-data-loaded__log-header"},[i[0]||(i[0]=n("h4",null,"事件日志",-1)),n("button",{class:"demo-data-loaded__clear-btn",onClick:g,title:"清除日志"}," 清除 ")]),n("div",mr,[(h(!0),b(O,null,H(v.value,(r,p)=>(h(),b("div",{key:p,class:"demo-data-loaded__log-item"},D(r),1))),128))])]),n("div",ur,[n("div",{class:"demo-data-loaded__controls"},[n("button",{class:"demo-data-loaded__btn",onClick:o}," 📥 加载示例数据 "),n("button",{class:"demo-data-loaded__btn",onClick:t}," 🗑 清空画布 ")]),f(F(V),{onReady:x,"after-data-loaded":s})])]))}}),br=U(hr,[["__scopeId","data-v-7f863772"]]),vr=`<template>\r
  <div class="demo-data-loaded">\r
    <!-- 事件日志面板 -->\r
    <div class="demo-data-loaded__log">\r
      <div class="demo-data-loaded__log-header">\r
        <h4>事件日志</h4>\r
        <button class="demo-data-loaded__clear-btn" @click="clearLogs" title="清除日志">\r
          清除\r
        </button>\r
      </div>\r
      <div class="demo-data-loaded__log-content">\r
        <div v-for="(log, index) in logs" :key="index" class="demo-data-loaded__log-item">\r
          {{ log }}\r
        </div>\r
      </div>\r
    </div>\r
\r
    <!-- 画布容器 -->\r
    <div class="demo-data-loaded__canvas">\r
      <div class="demo-data-loaded__controls">\r
        <button class="demo-data-loaded__btn" @click="loadData">\r
          📥 加载示例数据\r
        </button>\r
        <button class="demo-data-loaded__btn" @click="clearCanvas">\r
          🗑 清空画布\r
        </button>\r
      </div>\r
      <FlowDesignerLayout\r
        @ready="handleReady"\r
        :after-data-loaded="handleAfterDataLoaded"\r
      />\r
    </div>\r
  </div>\r
</template>\r
\r
<script setup lang="ts">\r
import { ref } from 'vue'\r
import { FlowDesignerLayout }  from '@quick-code/x6-flow-designer'\r
import type { FlowDesigner } from '@quick-code/x6-flow-designer'\r
import type { Graph } from '@antv/x6'\r
import type { FlowData } from '@/components/FlowDesigner/types'\r
\r
const logs = ref<string[]>([])\r
const designerRef = ref<FlowDesigner>()\r
\r
// 示例流程数据\r
const sampleData = {\r
  meta: {\r
    name: '示例流程',\r
    version: '1.0.0',\r
  },\r
  nodes: [\r
    {\r
      id: 'start',\r
      shape: 'rect',\r
      x: 100,\r
      y: 100,\r
      width: 100,\r
      height: 60,\r
      data: { label: '开始' },\r
      attrs: {\r
        body: { fill: '#10B981', stroke: '#059669' },\r
        label: { text: '开始', fill: '#fff' },\r
      },\r
    },\r
    {\r
      id: 'process1',\r
      shape: 'rect',\r
      x: 250,\r
      y: 100,\r
      width: 100,\r
      height: 60,\r
      data: { label: '处理1' },\r
      attrs: {\r
        body: { fill: '#5F95FF', stroke: '#2563EB' },\r
        label: { text: '处理1', fill: '#fff' },\r
      },\r
    },\r
    {\r
      id: 'process2',\r
      shape: 'rect',\r
      x: 400,\r
      y: 100,\r
      width: 100,\r
      height: 60,\r
      data: { label: '处理2' },\r
      attrs: {\r
        body: { fill: '#F59E0B', stroke: '#D97706' },\r
        label: { text: '处理2', fill: '#fff' },\r
      },\r
    },\r
    {\r
      id: 'end',\r
      shape: 'rect',\r
      x: 250,\r
      y: 220,\r
      width: 100,\r
      height: 60,\r
      data: { label: '结束' },\r
      attrs: {\r
        body: { fill: '#EF4444', stroke: '#DC2626' },\r
        label: { text: '结束', fill: '#fff' },\r
      },\r
    },\r
  ],\r
  edges: [\r
    {\r
      id: 'edge1',\r
      shape: 'flow-edge',\r
      source: { cell: 'start' },\r
      target: { cell: 'process1' },\r
      data: { label: '步骤1' },\r
      labels: ['步骤1'],\r
    },\r
    {\r
      id: 'edge2',\r
      shape: 'flow-edge',\r
      source: { cell: 'process1' },\r
      target: { cell: 'process2' },\r
      data: { label: '步骤2' },\r
      labels: ['步骤2'],\r
    },\r
    {\r
      id: 'edge3',\r
      shape: 'flow-edge',\r
      source: { cell: 'process2' },\r
      target: { cell: 'end' },\r
      data: { label: '步骤3' },\r
      labels: ['步骤3'],\r
    },\r
  ],\r
  viewport: {\r
    tx: 0,\r
    ty: 0,\r
    scale: 1,\r
  },\r
}\r
\r
function addLog(message: string) {\r
  const timestamp = new Date().toLocaleTimeString()\r
  logs.value.push(\`[\${timestamp}] \${message}\`)\r
}\r
\r
function clearLogs() {\r
  logs.value = []\r
}\r
\r
function handleReady(designer, graph) {\r
  designerRef.value = designer\r
  addLog('✅ 画布初始化完成')\r
  addLog('💡 点击"加载示例数据"按钮')\r
}\r
\r
/**\r
 * :after-data-loaded 钩子函数\r
 * 在 designer.load() 完成后触发\r
 */\r
function handleAfterDataLoaded(data: FlowData): void {\r
  addLog(\`🟢 afterDataLoaded 钩子触发\`)\r
  const nodeCount = data.cells?.filter((c: any) => c.shape)?.length || 0\r
  const edgeCount = data.cells?.filter((c: any) => c.source)?.length || 0\r
  addLog(\`📊 节点数量: \${nodeCount}\`)\r
  addLog(\`🔗 连线数量: \${edgeCount}\`)\r
  addLog(\`✅ 数据加载完成，画布已渲染\`)\r
\r
  // 演示：可以在数据加载后执行额外操作\r
  if (designerRef.value) {\r
    const graph = designerRef.value.getGraph()\r
    setTimeout(() => {\r
      graph.centerContent()\r
      addLog(\`🎯 已自动居中显示\`)\r
    }, 100)\r
  }\r
}\r
\r
function loadData() {\r
  if (!designerRef.value) {\r
    addLog('⚠️ 画布尚未初始化')\r
    return\r
  }\r
\r
  addLog(\`👆 用户点击"加载示例数据"\`)\r
  addLog(\`📥 调用 designer.load()...\`)\r
\r
  // 加载数据\r
  designerRef.value.load(sampleData)\r
}\r
\r
function clearCanvas() {\r
  if (!designerRef.value) return\r
\r
  addLog(\`👆 用户点击"清空画布"\`)\r
  const graph = designerRef.value.getGraph()\r
  graph.clearCells()\r
  addLog(\`🗑 画布已清空\`)\r
}\r
<\/script>\r
\r
<style scoped>\r
.demo-data-loaded {\r
  display: flex;\r
  height: 100%; /* 修改：从固定高度改为 100%，支持全屏 */\r
  min-height: 400px; /* 添加：最小高度，非全屏时保持合理尺寸 */\r
  gap: 16px;\r
}\r
\r
.demo-data-loaded__log {\r
  width: 320px;\r
  border: 1px solid #e8e8e8;\r
  border-radius: 8px;\r
  padding: 16px;\r
  background: #fafafa;\r
  overflow: hidden;\r
  display: flex;\r
  flex-direction: column;\r
}\r
\r
.demo-data-loaded__log-header {\r
  display: flex;\r
  justify-content: space-between;\r
  align-items: center;\r
  margin-bottom: 12px;\r
}\r
\r
.demo-data-loaded__log h4 {\r
  margin: 0;\r
  font-size: 14px;\r
  color: #1a1a2e;\r
  font-weight: 600;\r
}\r
\r
.demo-data-loaded__clear-btn {\r
  padding: 2px 8px;\r
  font-size: 12px;\r
  color: #666;\r
  background: #fff;\r
  border: 1px solid #d9d9d9;\r
  border-radius: 4px;\r
  cursor: pointer;\r
  transition: all 0.2s;\r
  user-select: none;\r
}\r
\r
.demo-data-loaded__clear-btn:hover {\r
  color: #1890ff;\r
  border-color: #1890ff;\r
}\r
\r
.demo-data-loaded__log-content {\r
  flex: 1;\r
  overflow-y: auto;\r
  font-size: 12px;\r
  line-height: 1.8;\r
}\r
\r
.demo-data-loaded__log-item {\r
  padding: 4px 0;\r
  color: #555;\r
  font-family: 'Monaco', 'Menlo', 'Consolas', monospace;\r
  border-bottom: 1px solid #f0f0f0;\r
}\r
\r
.demo-data-loaded__log-item:last-child {\r
  border-bottom: none;\r
}\r
\r
.demo-data-loaded__canvas {\r
  flex: 1;\r
  border: 1px solid #e8e8e8;\r
  border-radius: 8px;\r
  overflow: hidden;\r
  background: #fff;\r
  display: flex;\r
  flex-direction: column;\r
}\r
\r
.demo-data-loaded__controls {\r
  display: flex;\r
  gap: 12px;\r
  padding: 12px;\r
  background: #fff;\r
  border-bottom: 1px solid #e8e8e8;\r
}\r
\r
.demo-data-loaded__btn {\r
  padding: 6px 16px;\r
  font-size: 13px;\r
  color: #fff;\r
  background: #1677ff;\r
  border: none;\r
  border-radius: 4px;\r
  cursor: pointer;\r
  transition: all 0.2s;\r
}\r
\r
.demo-data-loaded__btn:hover {\r
  background: #0958d9;\r
}\r
</style>\r
`,_r={class:"toolbar"},xr={class:"toolbar__left"},yr=G({__name:"Toolbar",props:{zoomPercent:{},hasSelection:{type:Boolean},canPaste:{type:Boolean},canGroup:{type:Boolean},canUngroup:{type:Boolean},canUndo:{type:Boolean},canRedo:{type:Boolean},designerMode:{}},emits:["undo","redo","zoomIn","zoomOut","zoomTo","fitView","resetView","copy","paste","toFront","toBack","align-left","align-right","align-top","align-bottom","group","ungroup","export","import","publish","new","save","openSettings","modeChange"],setup(T,{emit:v}){const a=Tn("capabilities"),c=v,l=S(null);function g(x){var o;const s=(o=x.target.files)==null?void 0:o[0];s&&(c("import",s),x.target.value="")}return(x,s)=>{const o=fn("a-button"),t=fn("a-tooltip"),e=fn("a-divider"),i=fn("a-select-option"),r=fn("a-select"),p=fn("a-space");return h(),b("div",_r,[n("div",xr,[f(p,{size:4,align:"center"},{default:E(()=>[f(t,{title:"导入 JSON"},{default:E(()=>[f(o,{size:"small",disabled:!F(a).canImport,onClick:s[0]||(s[0]=()=>{var m;return(m=l.value)==null?void 0:m.click()})},{icon:E(()=>[f(F(Kn))]),_:1},8,["disabled"])]),_:1}),f(t,{title:"导出 JSON"},{default:E(()=>[f(o,{size:"small",disabled:!F(a).canExport,onClick:s[1]||(s[1]=m=>c("export"))},{icon:E(()=>[f(F(Qn))]),_:1},8,["disabled"])]),_:1}),f(e,{type:"vertical",style:{margin:"0 2px"}}),f(t,{title:"撤销 (Ctrl+Z)"},{default:E(()=>[f(o,{size:"small",disabled:!F(a).canUndo||!T.canUndo,onClick:s[2]||(s[2]=m=>c("undo"))},{icon:E(()=>[f(F(ne))]),_:1},8,["disabled"])]),_:1}),f(t,{title:"重做 (Ctrl+Y)"},{default:E(()=>[f(o,{size:"small",disabled:!F(a).canRedo||!T.canRedo,onClick:s[3]||(s[3]=m=>c("redo"))},{icon:E(()=>[f(F(ee))]),_:1},8,["disabled"])]),_:1}),f(e,{type:"vertical",style:{margin:"0 2px"}}),f(t,{title:"缩小 (Ctrl+-)"},{default:E(()=>[f(o,{size:"small",disabled:T.zoomPercent<=20,onClick:s[4]||(s[4]=m=>c("zoomOut"))},{icon:E(()=>[f(F(re))]),_:1},8,["disabled"])]),_:1}),f(r,{value:T.zoomPercent,size:"small",style:{width:"76px"},onChange:s[5]||(s[5]=m=>c("zoomTo",m))},{default:E(()=>[f(i,{value:25},{default:E(()=>[...s[19]||(s[19]=[P("25%",-1)])]),_:1}),f(i,{value:50},{default:E(()=>[...s[20]||(s[20]=[P("50%",-1)])]),_:1}),f(i,{value:75},{default:E(()=>[...s[21]||(s[21]=[P("75%",-1)])]),_:1}),f(i,{value:100},{default:E(()=>[...s[22]||(s[22]=[P("100%",-1)])]),_:1}),f(i,{value:125},{default:E(()=>[...s[23]||(s[23]=[P("125%",-1)])]),_:1}),f(i,{value:150},{default:E(()=>[...s[24]||(s[24]=[P("150%",-1)])]),_:1}),f(i,{value:200},{default:E(()=>[...s[25]||(s[25]=[P("200%",-1)])]),_:1})]),_:1},8,["value"]),f(t,{title:"放大 (Ctrl+=)"},{default:E(()=>[f(o,{size:"small",disabled:T.zoomPercent>=500,onClick:s[6]||(s[6]=m=>c("zoomIn"))},{icon:E(()=>[f(F(te))]),_:1},8,["disabled"])]),_:1}),f(t,{title:"适应窗口 (Ctrl+0)"},{default:E(()=>[f(o,{size:"small",disabled:!F(a).canFitView,onClick:s[7]||(s[7]=m=>c("fitView"))},{icon:E(()=>[f(F(oe))]),_:1},8,["disabled"])]),_:1}),f(t,{title:"重置视图 (Ctrl+Shift+H)"},{default:E(()=>[f(o,{size:"small",disabled:!F(a).canResetView,onClick:s[8]||(s[8]=m=>c("resetView"))},{icon:E(()=>[f(F(se))]),_:1},8,["disabled"])]),_:1}),f(e,{type:"vertical",style:{margin:"0 2px"}}),f(t,{title:"层级前置"},{default:E(()=>[f(o,{size:"small",disabled:!F(a).canToFront||!T.hasSelection,onClick:s[9]||(s[9]=m=>c("toFront"))},{icon:E(()=>[f(F(le))]),_:1},8,["disabled"])]),_:1}),f(t,{title:"层级后置"},{default:E(()=>[f(o,{size:"small",disabled:!F(a).canToBack||!T.hasSelection,onClick:s[10]||(s[10]=m=>c("toBack"))},{icon:E(()=>[f(F(ie))]),_:1},8,["disabled"])]),_:1}),f(e,{type:"vertical",style:{margin:"0 2px"}}),f(t,{title:"左对齐 (Ctrl+Shift+L)"},{default:E(()=>[f(o,{size:"small",disabled:!F(a).canAlign||!F(a).canAlignLeft||!T.canGroup,onClick:s[11]||(s[11]=m=>c("align-left"))},{icon:E(()=>[f(F(ae))]),_:1},8,["disabled"])]),_:1}),f(t,{title:"右对齐 (Ctrl+Shift+R)"},{default:E(()=>[f(o,{size:"small",disabled:!F(a).canAlign||!F(a).canAlignRight||!T.canGroup,onClick:s[12]||(s[12]=m=>c("align-right"))},{icon:E(()=>[f(F(de))]),_:1},8,["disabled"])]),_:1}),f(t,{title:"上对齐 (Ctrl+Shift+T)"},{default:E(()=>[f(o,{size:"small",disabled:!F(a).canAlign||!F(a).canAlignTop||!T.canGroup,onClick:s[13]||(s[13]=m=>c("align-top"))},{icon:E(()=>[f(F(ce))]),_:1},8,["disabled"])]),_:1}),f(t,{title:"下对齐 (Ctrl+Shift+B)"},{default:E(()=>[f(o,{size:"small",disabled:!F(a).canAlign||!F(a).canAlignBottom||!T.canGroup,onClick:s[14]||(s[14]=m=>c("align-bottom"))},{icon:E(()=>[f(F(pe))]),_:1},8,["disabled"])]),_:1}),f(e,{type:"vertical",style:{margin:"0 2px"}}),f(t,{title:"复制选中节点 (Ctrl+C)"},{default:E(()=>[f(o,{size:"small",disabled:!F(a).canCopy||!T.hasSelection,onClick:s[15]||(s[15]=m=>c("copy"))},{icon:E(()=>[f(F(ge))]),default:E(()=>[s[26]||(s[26]=P(" 复制 ",-1))]),_:1},8,["disabled"])]),_:1}),f(t,{title:"粘贴节点 (Ctrl+V)"},{default:E(()=>[f(o,{size:"small",disabled:!F(a).canPaste||!T.canPaste,onClick:s[16]||(s[16]=m=>c("paste"))},{icon:E(()=>[f(F(fe))]),default:E(()=>[s[27]||(s[27]=P(" 粘贴 ",-1))]),_:1},8,["disabled"])]),_:1}),f(e,{type:"vertical",style:{margin:"0 2px"}}),f(t,{title:"成组 (Ctrl+G)"},{default:E(()=>[f(o,{size:"small",disabled:!F(a).canGroup||!T.canGroup,onClick:s[17]||(s[17]=m=>c("group"))},{icon:E(()=>[f(F(me))]),default:E(()=>[s[28]||(s[28]=P(" 成组 ",-1))]),_:1},8,["disabled"])]),_:1}),f(t,{title:"解组 (Ctrl+Shift+G)"},{default:E(()=>[f(o,{size:"small",disabled:!F(a).canGroup||!T.canUngroup,onClick:s[18]||(s[18]=m=>c("ungroup"))},{icon:E(()=>[f(F(ue))]),default:E(()=>[s[29]||(s[29]=P(" 解组 ",-1))]),_:1},8,["disabled"])]),_:1})]),_:1})]),n("input",{ref_key:"fileInputRef",ref:l,type:"file",accept:".json",style:{display:"none"},onChange:g},null,544)])}}}),kr=U(yr,[["__scopeId","data-v-d2762e1c"]]),wr={class:"demo-slot-toolbar"},Sr={class:"demo-slot-toolbar__log"},Nr={class:"demo-slot-toolbar__log-content"},Cr={class:"demo-slot-toolbar__canvas"},Dr=G({__name:"demo-slot-toolbar",setup(T){const v=S([]);function a(g){const x=new Date().toLocaleTimeString();v.value.push(`[${x}] ${g}`)}function c(){v.value=[]}function l(g,x){a("✅ 画布初始化完成"),a("🎨 自定义工具栏已渲染");const s=x.createNode({shape:"rect",x:30,y:30,width:100,height:60,label:"节点1",attrs:{body:{fill:"#5F95FF",stroke:"#2563EB",strokeWidth:2,rx:6,ry:6},label:{fill:"#fff",fontSize:14,fontWeight:500}}});g.addCell(s),a("➕ 添加节点1");const o=x.createNode({shape:"rect",x:130,y:130,width:100,height:60,label:"节点2  ",attrs:{body:{fill:"#fc01b4",stroke:"#7c0073",strokeWidth:2,rx:6,ry:6},label:{fill:"#fff",fontSize:14,fontWeight:500}}});g.addCell(o),a("➕ 添加节点2")}return(g,x)=>(h(),b("div",wr,[n("div",Sr,[n("div",{class:"demo-slot-toolbar__log-header"},[x[0]||(x[0]=n("h4",null,"事件日志",-1)),n("button",{class:"demo-slot-toolbar__clear-btn",onClick:c,title:"清除日志"}," 清除 ")]),n("div",Nr,[(h(!0),b(O,null,H(v.value,(s,o)=>(h(),b("div",{key:o,class:"demo-slot-toolbar__log-item"},D(s),1))),128))])]),n("div",Cr,[f(F(V),{mode:"design",onReady:l},{toolbar:E(s=>[f(kr,{"zoom-percent":s.zoomPercent,"has-selection":s.hasSelection,"can-paste":s.canPaste,"can-group":s.canGroup,"can-ungroup":s.canUngroup,"can-undo":s.canUndo,"can-redo":s.canRedo,"designer-mode":s.currentMode,onUndo:s.onUndo,onRedo:s.onRedo,onZoomIn:s.onZoomIn,onZoomOut:s.onZoomOut,onZoomTo:s.onZoomTo,onFitView:s.onFitView,onResetView:s.onResetView,onCopy:s.onCopy,onPaste:s.onPaste,onToFront:s.onToFront,onToBack:s.onToBack,onAlignLeft:s.onAlignLeft,onAlignRight:s.onAlignRight,onAlignTop:s.onAlignTop,onAlignBottom:s.onAlignBottom,onGroup:s.onGroup,onUngroup:s.onUngroup,onExport:s.onExport,onImport:s.onImport,onOpenSettings:s.onOpenSettings,onModeChange:s.onModeChange},null,8,["zoom-percent","has-selection","can-paste","can-group","can-ungroup","can-undo","can-redo","designer-mode","onUndo","onRedo","onZoomIn","onZoomOut","onZoomTo","onFitView","onResetView","onCopy","onPaste","onToFront","onToBack","onAlignLeft","onAlignRight","onAlignTop","onAlignBottom","onGroup","onUngroup","onExport","onImport","onOpenSettings","onModeChange"])]),_:1})])]))}}),$r=U(Dr,[["__scopeId","data-v-e0097e30"]]),Er=`\uFEFF<template>\r
  <div class="demo-slot-toolbar">\r
    <!-- 事件日志面板 -->\r
    <div class="demo-slot-toolbar__log">\r
      <div class="demo-slot-toolbar__log-header">\r
        <h4>事件日志</h4>\r
        <button class="demo-slot-toolbar__clear-btn" @click="clearLogs" title="清除日志">\r
          清除\r
        </button>\r
      </div>\r
      <div class="demo-slot-toolbar__log-content">\r
        <div v-for="(log, index) in logs" :key="index" class="demo-slot-toolbar__log-item">\r
          {{ log }}\r
        </div>\r
      </div>\r
    </div>\r
\r
    <!-- 画布容器 -->\r
    <div class="demo-slot-toolbar__canvas">\r
      <FlowDesignerLayout\r
        mode="design"\r
        @ready="handleReady"\r
      >\r
        <!-- 顶部工具栏 -->\r
        <template #toolbar="scope">\r
          <Toolbar\r
              :zoom-percent="scope.zoomPercent"\r
              :has-selection="scope.hasSelection"\r
              :can-paste="scope.canPaste"\r
              :can-group="scope.canGroup"\r
              :can-ungroup="scope.canUngroup"\r
              :can-undo="scope.canUndo"\r
              :can-redo="scope.canRedo"\r
              :designer-mode="scope.currentMode"\r
              @undo="scope.onUndo"\r
              @redo="scope.onRedo"\r
              @zoom-in="scope.onZoomIn"\r
              @zoom-out="scope.onZoomOut"\r
              @zoom-to="scope.onZoomTo"\r
              @fit-view="scope.onFitView"\r
              @reset-view="scope.onResetView"\r
              @copy="scope.onCopy"\r
              @paste="scope.onPaste"\r
              @to-front="scope.onToFront"\r
              @to-back="scope.onToBack"\r
              @align-left="scope.onAlignLeft"\r
              @align-right="scope.onAlignRight"\r
              @align-top="scope.onAlignTop"\r
              @align-bottom="scope.onAlignBottom"\r
              @group="scope.onGroup"\r
              @ungroup="scope.onUngroup"\r
              @export="scope.onExport"\r
              @import="scope.onImport"\r
              @open-settings="scope.onOpenSettings"\r
              @mode-change="scope.onModeChange"\r
          />\r
        </template>\r
      </FlowDesignerLayout>\r
    </div>\r
  </div>\r
</template>\r
\r
<script setup lang="ts">\r
import { ref } from 'vue'\r
import { FlowDesignerLayout }  from '@quick-code/x6-flow-designer'\r
import type { FlowDesigner } from '@quick-code/x6-flow-designer'\r
import type { Graph } from '@antv/x6'\r
import Toolbar from './components/Toolbar.vue'\r
\r
const logs = ref<string[]>([])\r
\r
function addLog(message: string) {\r
  const timestamp = new Date().toLocaleTimeString()\r
  logs.value.push(\`[\${timestamp}] \${message}\`)\r
}\r
\r
function clearLogs() {\r
  logs.value = []\r
}\r
\r
function getModeLabel(mode: string): string {\r
  const labels: Record<string, string> = {\r
    design: '✏️ 设计',\r
    readonly: '👁 只读',\r
    preview: '📺 预览',\r
  }\r
  return labels[mode] || mode\r
}\r
\r
function handleReady(designer: FlowDesigner, graph: Graph) {\r
  addLog('✅ 画布初始化完成')\r
  addLog('🎨 自定义工具栏已渲染')\r
\r
  // 添加初始节点\r
  const node1 = graph.createNode({\r
    shape: 'rect',\r
    x: 30,\r
    y: 30,\r
    width: 100,\r
    height: 60,\r
    label: \`节点1\`,\r
    attrs: {\r
      body: {\r
        fill: '#5F95FF',\r
        stroke: '#2563EB',\r
        strokeWidth: 2,\r
        rx: 6,\r
        ry: 6,\r
      },\r
      label: {\r
        fill: '#fff',\r
        fontSize: 14,\r
        fontWeight: 500,\r
      },\r
    },\r
  });\r
  designer.addCell(node1)\r
  addLog(\`➕ 添加节点1\`);\r
\r
  const node2 = graph.createNode({\r
    shape: 'rect',\r
    x: 130,\r
    y: 130,\r
    width: 100,\r
    height: 60,\r
    label: \`节点2  \`,\r
    attrs: {\r
      body: {\r
        fill: '#fc01b4',\r
        stroke: '#7c0073',\r
        strokeWidth: 2,\r
        rx: 6,\r
        ry: 6,\r
      },\r
      label: {\r
        fill: '#fff',\r
        fontSize: 14,\r
        fontWeight: 500,\r
      },\r
    },\r
  });\r
  designer.addCell(node2)\r
  addLog(\`➕ 添加节点2\`);\r
\r
\r
\r
  //graph.centerContent()\r
}\r
\r
function handleUndo(undoFn: () => void) {\r
  addLog('↶ 执行撤销操作')\r
  undoFn()\r
}\r
\r
function handleRedo(redoFn: () => void) {\r
  addLog('↷ 执行重做操作')\r
  redoFn()\r
}\r
\r
function handleZoomIn(zoomInFn: () => void) {\r
  addLog('🔍 放大画布')\r
  zoomInFn()\r
}\r
\r
function handleZoomOut(zoomOutFn: () => void) {\r
  addLog('🔍 缩小画布')\r
  zoomOutFn()\r
}\r
\r
function handleZoomToFit(zoomToFitFn: () => void) {\r
  addLog('⊡ 适应画布')\r
  zoomToFitFn()\r
}\r
<\/script>\r
\r
<style scoped>\r
.demo-slot-toolbar {\r
  display: flex;\r
  height: 100%;\r
  min-height: 450px;\r
  gap: 16px;\r
}\r
\r
.demo-slot-toolbar__log {\r
  width: 280px;\r
  border: 1px solid #e8e8e8;\r
  border-radius: 8px;\r
  padding: 16px;\r
  background: #fafafa;\r
  overflow: hidden;\r
  display: flex;\r
  flex-direction: column;\r
}\r
\r
.demo-slot-toolbar__log-header {\r
  display: flex;\r
  justify-content: space-between;\r
  align-items: center;\r
  margin-bottom: 12px;\r
}\r
\r
.demo-slot-toolbar__log h4 {\r
  margin: 0;\r
  font-size: 14px;\r
  color: #1a1a2e;\r
  font-weight: 600;\r
}\r
\r
.demo-slot-toolbar__clear-btn {\r
  padding: 2px 8px;\r
  font-size: 12px;\r
  color: #666;\r
  background: #fff;\r
  border: 1px solid #d9d9d9;\r
  border-radius: 4px;\r
  cursor: pointer;\r
  transition: all 0.2s;\r
  user-select: none;\r
}\r
\r
.demo-slot-toolbar__clear-btn:hover {\r
  color: #1890ff;\r
  border-color: #1890ff;\r
}\r
\r
.demo-slot-toolbar__log-content {\r
  flex: 1;\r
  overflow-y: auto;\r
  font-size: 12px;\r
  line-height: 1.8;\r
}\r
\r
.demo-slot-toolbar__log-item {\r
  padding: 4px 0;\r
  color: #555;\r
  font-family: 'Monaco', 'Menlo', 'Consolas', monospace;\r
  border-bottom: 1px solid #f0f0f0;\r
}\r
\r
.demo-slot-toolbar__log-item:last-child {\r
  border-bottom: none;\r
}\r
\r
.demo-slot-toolbar__canvas {\r
  flex: 1;\r
  border: 1px solid #e8e8e8;\r
  border-radius: 8px;\r
  overflow: hidden;\r
  background: #fff;\r
}\r
\r
/* ==================== 自定义工具栏样式 ==================== */\r
.custom-toolbar {\r
  display: flex;\r
  align-items: center;\r
  gap: 12px;\r
  padding: 8px 16px;\r
  background: linear-gradient(to bottom, #ffffff, #f9fafb);\r
  border-bottom: 1px solid #e8e8e8;\r
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.04);\r
}\r
\r
.custom-toolbar__section {\r
  display: flex;\r
  align-items: center;\r
  gap: 8px;\r
}\r
\r
.custom-toolbar__divider {\r
  width: 1px;\r
  height: 20px;\r
  background: #e8e8e8;\r
}\r
\r
.custom-toolbar__label {\r
  font-size: 13px;\r
  color: #666;\r
  font-weight: 500;\r
}\r
\r
.custom-toolbar__badge {\r
  padding: 3px 10px;\r
  border-radius: 12px;\r
  font-size: 12px;\r
  font-weight: 500;\r
  background: #f0f0f0;\r
  color: #555;\r
}\r
\r
.custom-toolbar__badge--design {\r
  background: #e6f7ff;\r
  color: #1677ff;\r
}\r
\r
.custom-toolbar__badge--readonly {\r
  background: #fff7e6;\r
  color: #fa8c16;\r
}\r
\r
.custom-toolbar__badge--preview {\r
  background: #f6ffed;\r
  color: #52c41a;\r
}\r
\r
.custom-toolbar__btn {\r
  display: flex;\r
  align-items: center;\r
  gap: 4px;\r
  padding: 5px 12px;\r
  font-size: 13px;\r
  color: #555;\r
  background: #fff;\r
  border: 1px solid #d9d9d9;\r
  border-radius: 4px;\r
  cursor: pointer;\r
  transition: all 0.2s;\r
  font-weight: 500;\r
  user-select: none;\r
}\r
\r
.custom-toolbar__btn:hover:not(:disabled) {\r
  color: #1677ff;\r
  border-color: #1677ff;\r
  background: #f0f7ff;\r
}\r
\r
.custom-toolbar__btn:active:not(:disabled) {\r
  transform: translateY(1px);\r
}\r
\r
.custom-toolbar__btn:disabled {\r
  color: #bbb;\r
  border-color: #e8e8e8;\r
  background: #f5f5f5;\r
  cursor: not-allowed;\r
  opacity: 0.6;\r
}\r
\r
.custom-toolbar__btn--icon {\r
  padding: 5px 10px;\r
  min-width: 32px;\r
  justify-content: center;\r
}\r
\r
.custom-toolbar__icon {\r
  font-size: 16px;\r
  line-height: 1;\r
  font-weight: bold;\r
}\r
\r
.custom-toolbar__zoom-display {\r
  min-width: 50px;\r
  text-align: center;\r
  font-size: 13px;\r
  font-weight: 600;\r
  color: #1677ff;\r
  padding: 4px 8px;\r
  border-radius: 4px;\r
  background: #f0f7ff;\r
  cursor: pointer;\r
  user-select: none;\r
  transition: all 0.2s;\r
}\r
\r
.custom-toolbar__zoom-display:hover {\r
  background: #e6f0ff;\r
}\r
</style>\r
`,Fr=`<template>\r
  <div class="toolbar">\r
\r
    <!-- 中：操作按钮组 -->\r
    <div class="toolbar__left">\r
      <a-space :size="4" align="center">\r
        <a-tooltip title="导入 JSON">\r
          <a-button size="small" :disabled="!capabilities.canImport" @click="() => fileInputRef?.click()">\r
            <template #icon><ImportOutlined /></template>\r
          </a-button>\r
        </a-tooltip>\r
        <a-tooltip title="导出 JSON">\r
          <a-button size="small" :disabled="!capabilities.canExport" @click="emit('export')">\r
            <template #icon><ExportOutlined /></template>\r
          </a-button>\r
        </a-tooltip>\r
\r
        <a-divider type="vertical" style="margin: 0 2px" />\r
\r
        <!-- 撤销/重做 -->\r
        <a-tooltip title="撤销 (Ctrl+Z)">\r
          <a-button size="small" :disabled="!capabilities.canUndo || !canUndo" @click="emit('undo')">\r
            <template #icon><UndoOutlined /></template>\r
          </a-button>\r
        </a-tooltip>\r
        <a-tooltip title="重做 (Ctrl+Y)">\r
          <a-button size="small" :disabled="!capabilities.canRedo || !canRedo" @click="emit('redo')">\r
            <template #icon><RedoOutlined /></template>\r
          </a-button>\r
        </a-tooltip>\r
\r
        <a-divider type="vertical" style="margin: 0 2px" />\r
\r
        <!-- ✅ 缩放操作组 -->\r
        <a-tooltip title="缩小 (Ctrl+-)">\r
          <a-button size="small" :disabled="zoomPercent <= 20" @click="emit('zoomOut')">\r
            <template #icon><ZoomOutOutlined /></template>\r
          </a-button>\r
        </a-tooltip>\r
\r
                        <a-select\r
          :value="zoomPercent"\r
          size="small"\r
          style="width: 76px"\r
          @change="(v: number) => emit('zoomTo', v)"\r
        >\r
          <a-select-option :value="25">25%</a-select-option>\r
          <a-select-option :value="50">50%</a-select-option>\r
          <a-select-option :value="75">75%</a-select-option>\r
          <a-select-option :value="100">100%</a-select-option>\r
          <a-select-option :value="125">125%</a-select-option>\r
          <a-select-option :value="150">150%</a-select-option>\r
          <a-select-option :value="200">200%</a-select-option>\r
        </a-select>\r
\r
\r
        <a-tooltip title="放大 (Ctrl+=)">\r
          <a-button size="small" :disabled="zoomPercent >= 500" @click="emit('zoomIn')">\r
            <template #icon><ZoomInOutlined /></template>\r
          </a-button>\r
        </a-tooltip>\r
        <a-tooltip title="适应窗口 (Ctrl+0)">\r
          <a-button size="small" :disabled="!capabilities.canFitView" @click="emit('fitView')">\r
            <template #icon><CompressOutlined /></template>\r
          </a-button>\r
        </a-tooltip>\r
        <a-tooltip title="重置视图 (Ctrl+Shift+H)">\r
          <a-button size="small" :disabled="!capabilities.canResetView" @click="emit('resetView')">\r
            <template #icon><FullscreenExitOutlined /></template>\r
          </a-button>\r
        </a-tooltip>\r
\r
        <a-divider type="vertical" style="margin: 0 2px" />\r
\r
        <!-- 层级调整 -->\r
        <a-tooltip title="层级前置">\r
          <a-button size="small" :disabled="!capabilities.canToFront || !hasSelection" @click="emit('toFront')">\r
            <template #icon><VerticalAlignTopOutlined /></template>\r
          </a-button>\r
        </a-tooltip>\r
        <a-tooltip title="层级后置">\r
          <a-button size="small" :disabled="!capabilities.canToBack || !hasSelection" @click="emit('toBack')">\r
            <template #icon><VerticalAlignBottomOutlined /></template>\r
          </a-button>\r
        </a-tooltip>\r
\r
        <a-divider type="vertical" style="margin: 0 2px" />\r
\r
                <!-- ✅ 对齐按钮组 -->\r
        <a-tooltip title="左对齐 (Ctrl+Shift+L)">\r
          <a-button\r
            size="small"\r
            :disabled="!capabilities.canAlign || !capabilities.canAlignLeft || !canGroup"\r
            @click="emit('align-left')"\r
          >\r
            <template #icon><AlignLeftOutlined /></template>\r
          </a-button>\r
        </a-tooltip>\r
\r
        <a-tooltip title="右对齐 (Ctrl+Shift+R)">\r
          <a-button\r
            size="small"\r
            :disabled="!capabilities.canAlign || !capabilities.canAlignRight || !canGroup"\r
            @click="emit('align-right')"\r
          >\r
            <template #icon><AlignRightOutlined /></template>\r
          </a-button>\r
        </a-tooltip>\r
\r
        <a-tooltip title="上对齐 (Ctrl+Shift+T)">\r
          <a-button\r
            size="small"\r
            :disabled="!capabilities.canAlign || !capabilities.canAlignTop || !canGroup"\r
            @click="emit('align-top')"\r
          >\r
            <template #icon><BorderTopOutlined /></template>\r
          </a-button>\r
        </a-tooltip>\r
\r
        <a-tooltip title="下对齐 (Ctrl+Shift+B)">\r
          <a-button\r
            size="small"\r
            :disabled="!capabilities.canAlign || !capabilities.canAlignBottom || !canGroup"\r
            @click="emit('align-bottom')"\r
          >\r
            <template #icon><BorderBottomOutlined /></template>\r
          </a-button>\r
        </a-tooltip>\r
\r
        <a-divider type="vertical" style="margin: 0 2px" />\r
\r
        <!-- 复制/粘贴 -->\r
        <a-tooltip title="复制选中节点 (Ctrl+C)">\r
          <a-button size="small" :disabled="!capabilities.canCopy || !hasSelection" @click="emit('copy')">\r
            <template #icon><CopyOutlined /></template>\r
            复制\r
          </a-button>\r
        </a-tooltip>\r
        <a-tooltip title="粘贴节点 (Ctrl+V)">\r
          <a-button size="small" :disabled="!capabilities.canPaste || !canPaste" @click="emit('paste')">\r
            <template #icon><SnippetsOutlined /></template>\r
            粘贴\r
          </a-button>\r
        </a-tooltip>\r
\r
        <a-divider type="vertical" style="margin: 0 2px" />\r
\r
        <!-- 成组/解组 -->\r
        <a-tooltip title="成组 (Ctrl+G)">\r
          <a-button size="small" :disabled="!capabilities.canGroup || !canGroup" @click="emit('group')">\r
            <template #icon><GroupOutlined /></template>\r
            成组\r
          </a-button>\r
        </a-tooltip>\r
        <a-tooltip title="解组 (Ctrl+Shift+G)">\r
          <a-button size="small" :disabled="!capabilities.canGroup || !canUngroup" @click="emit('ungroup')">\r
            <template #icon><UngroupOutlined /></template>\r
            解组\r
          </a-button>\r
        </a-tooltip>\r
      </a-space>\r
    </div>\r
\r
    <!-- 隐藏文件 input -->\r
    <input\r
      ref="fileInputRef"\r
      type="file"\r
      accept=".json"\r
      style="display: none"\r
      @change="handleFileChange"\r
    />\r
  </div>\r
</template>\r
\r
<script setup lang="ts">\r
import { ref, inject, computed, type ComputedRef } from 'vue'\r
import { Modal } from 'ant-design-vue'\r
import type { DesignerMode } from './types/flow.types'\r
import {\r
  FileTextOutlined, FileAddOutlined, SaveOutlined,\r
  ImportOutlined, ExportOutlined,\r
  UndoOutlined, RedoOutlined,\r
  ZoomInOutlined, ZoomOutOutlined,\r
  CompressOutlined, FullscreenExitOutlined,\r
    CopyOutlined, SnippetsOutlined,\r
  VerticalAlignTopOutlined, VerticalAlignBottomOutlined,\r
  AlignLeftOutlined, AlignRightOutlined,\r
  BorderTopOutlined, BorderBottomOutlined,\r
  GroupOutlined, UngroupOutlined,\r
  RocketOutlined,\r
  SettingOutlined,\r
} from '@ant-design/icons-vue'\r
import type { ModeCapabilities } from './types/flow.types'\r
\r
const props = defineProps<{\r
  zoomPercent: number\r
  hasSelection: boolean\r
  canPaste: boolean\r
  canGroup: boolean\r
  canUngroup: boolean\r
    canUndo?: boolean\r
  canRedo?: boolean\r
  designerMode?: DesignerMode\r
}>()\r
\r
// ── 注入权限 ──────────────────────────────────────────────────────────────────\r
const capabilities = inject<ComputedRef<ModeCapabilities>>('capabilities')!\r
\r
const emit = defineEmits<{\r
  (e: 'undo'): void\r
  (e: 'redo'): void\r
  (e: 'zoomIn'): void\r
  (e: 'zoomOut'): void\r
  (e: 'zoomTo', percent: number): void\r
  (e: 'fitView'): void\r
  (e: 'resetView'): void\r
    (e: 'copy'): void\r
  (e: 'paste'): void\r
  (e: 'toFront'): void\r
  (e: 'toBack'): void\r
  (e: 'align-left'): void\r
  (e: 'align-right'): void\r
  (e: 'align-top'): void\r
  (e: 'align-bottom'): void\r
  (e: 'group'): void\r
  (e: 'ungroup'): void\r
  (e: 'export'): void\r
  (e: 'import', file: File): void\r
  (e: 'publish'): void\r
  (e: 'new'): void\r
  (e: 'save'): void\r
    (e: 'openSettings'): void\r
  (e: 'modeChange', mode: DesignerMode): void\r
}>()\r
\r
\r
const fileInputRef = ref<HTMLInputElement | null>(null)\r
\r
function handleSave() { emit('save') }\r
\r
function handleFileChange(e: Event) {\r
  const file = (e.target as HTMLInputElement).files?.[0]\r
  if (file) {\r
    emit('import', file)\r
    ;(e.target as HTMLInputElement).value = ''\r
  }\r
}\r
<\/script>\r
\r
<style scoped>\r
.toolbar {\r
  display: flex; align-items: center;\r
  justify-content: space-between;\r
  height: 52px; padding: 0 16px;\r
  background: #fff;\r
  border-bottom: 1px solid #f0f0f0;\r
  box-shadow: 0 1px 4px rgba(0,0,0,.06);\r
  flex-shrink: 0;\r
  max-width: 100%;\r
  overflow: auto;\r
}\r
.toolbar__left  { display: flex; align-items: center; flex-shrink: 0; }\r
.toolbar__center{ flex: 1; display: flex; justify-content: center; }\r
.toolbar__right { flex-shrink: 0; }\r
</style>\r
\r
`,Lr={class:"demo-slot-palette"},Tr={class:"demo-slot-palette__log"},Rr={class:"demo-slot-palette__log-content"},zr={class:"demo-slot-palette__canvas"},Ar={class:"custom-palette"},Mr={class:"custom-palette__section"},Wr=["onMousedown"],Ir={class:"custom-palette__item-info"},Pr={class:"custom-palette__item-label"},Gr={class:"custom-palette__item-hint"},Or=G({__name:"demo-slot-palette",setup(T){const v=S([]),a=S([{type:"custom-circle",label:"圆形节点",icon:"⚪",hint:"用于流程开始/结束",color:"#5F95FF",width:80,height:80},{type:"custom-diamond",label:"菱形节点",icon:"◆",hint:"用于条件判断",color:"#47C769",width:100,height:80}]);function c(o){const t=new Date().toLocaleTimeString();v.value.push(`[${t}] ${o}`)}function l(){v.value=[]}function g(o){c("🔧 beforeGraphInit: 开始注册自定义节点"),J.registerNode("custom-circle",{inherit:"circle",width:80,height:80,attrs:{body:{fill:"#5F95FF",stroke:"#2563EB",strokeWidth:2},label:{fill:"#fff",fontSize:14,fontWeight:500}},ports:{groups:{top:{position:"top",attrs:{circle:{r:4,magnet:!0,stroke:"#2563EB",strokeWidth:1,fill:"#fff"}}},bottom:{position:"bottom",attrs:{circle:{r:4,magnet:!0,stroke:"#2563EB",strokeWidth:1,fill:"#fff"}}}},items:[{group:"top",id:"port-top"},{group:"bottom",id:"port-bottom"}]}},!0),c("✅ 已注册节点: custom-circle (圆形)"),J.registerNode("custom-diamond",{inherit:"polygon",width:100,height:80,attrs:{body:{fill:"#47C769",stroke:"#27AE60",strokeWidth:2,refPoints:"0,10 10,0 20,10 10,20"},label:{fill:"#fff",fontSize:13,fontWeight:500,textWrap:{width:-20,height:-20,ellipsis:!0}}},ports:{groups:{top:{position:{name:"top"},attrs:{circle:{r:4,magnet:!0,stroke:"#27AE60",strokeWidth:1,fill:"#fff"}}},right:{position:{name:"right"},attrs:{circle:{r:4,magnet:!0,stroke:"#27AE60",strokeWidth:1,fill:"#fff"}}},bottom:{position:{name:"bottom"},attrs:{circle:{r:4,magnet:!0,stroke:"#27AE60",strokeWidth:1,fill:"#fff"}}},left:{position:{name:"left"},attrs:{circle:{r:4,magnet:!0,stroke:"#27AE60",strokeWidth:1,fill:"#fff"}}}},items:[{group:"top",id:"port-top"},{group:"right",id:"port-right"},{group:"bottom",id:"port-bottom"},{group:"left",id:"port-left"}]}},!0),c("✅ 已注册节点: custom-diamond (菱形)"),c("🎉 所有自定义节点注册完成")}function x(o,t){c("✅ 画布初始化完成"),c("🎨 自定义节点面板已渲染"),c("💡 提示: 点击左侧节点拖拽到画布")}function s(o,t,e){c(`🎯 开始拖拽: ${t.label}`),e(o,{shape:t.type,label:t.label,width:t.width,height:t.height,data:{label:t.label,nodeInfo:{icon:t.icon,hint:t.hint,color:t.color}}})}return(o,t)=>(h(),b("div",Lr,[n("div",Tr,[n("div",{class:"demo-slot-palette__log-header"},[t[0]||(t[0]=n("h4",null,"事件日志",-1)),n("button",{class:"demo-slot-palette__clear-btn",onClick:l,title:"清除日志"}," 清除 ")]),n("div",Rr,[(h(!0),b(O,null,H(v.value,(e,i)=>(h(),b("div",{key:i,class:"demo-slot-palette__log-item"},D(e),1))),128))])]),n("div",zr,[f(F(V),{mode:"design","before-graph-init":g,onReady:x},{palette:E(({onStartDrag:e})=>[n("div",Ar,[t[2]||(t[2]=n("div",{class:"custom-palette__header"},[n("h3",{class:"custom-palette__title"},"自定义节点"),n("span",{class:"custom-palette__desc"},"拖拽到画布")],-1)),n("div",Mr,[t[1]||(t[1]=n("div",{class:"custom-palette__section-title"},"基础节点",-1)),(h(!0),b(O,null,H(a.value,i=>(h(),b("div",{key:i.type,class:"custom-palette__item",onMousedown:r=>s(r,i,e)},[n("div",{class:"custom-palette__item-icon",style:rn({background:i.color})},D(i.icon),5),n("div",Ir,[n("div",Pr,D(i.label),1),n("div",Gr,D(i.hint),1)])],40,Wr))),128))])])]),_:1})])]))}}),Hr=U(Or,[["__scopeId","data-v-6a0ce3b0"]]),Br=`\uFEFF<template>\r
  <div class="demo-slot-palette">\r
    <!-- 事件日志面板 -->\r
    <div class="demo-slot-palette__log">\r
      <div class="demo-slot-palette__log-header">\r
        <h4>事件日志</h4>\r
        <button class="demo-slot-palette__clear-btn" @click="clearLogs" title="清除日志">\r
          清除\r
        </button>\r
      </div>\r
      <div class="demo-slot-palette__log-content">\r
        <div v-for="(log, index) in logs" :key="index" class="demo-slot-palette__log-item">\r
          {{ log }}\r
        </div>\r
      </div>\r
    </div>\r
\r
    <!-- 画布容器 -->\r
    <div class="demo-slot-palette__canvas">\r
      <FlowDesignerLayout\r
        mode="design"\r
        :before-graph-init="handleBeforeGraphInit"\r
        @ready="handleReady"\r
      >\r
        <!-- 自定义节点面板插槽 -->\r
        <template #palette="{ onStartDrag }">\r
          <div class="custom-palette">\r
            <div class="custom-palette__header">\r
              <h3 class="custom-palette__title">自定义节点</h3>\r
              <span class="custom-palette__desc">拖拽到画布</span>\r
            </div>\r
\r
            <div class="custom-palette__section">\r
              <div class="custom-palette__section-title">基础节点</div>\r
              <div\r
                v-for="nodeType in customNodeTypes"\r
                :key="nodeType.type"\r
                class="custom-palette__item"\r
                @mousedown="(e) => handleStartDrag(e, nodeType, onStartDrag)"\r
              >\r
                <div class="custom-palette__item-icon" :style="{ background: nodeType.color }">\r
                  {{ nodeType.icon }}\r
                </div>\r
                <div class="custom-palette__item-info">\r
                  <div class="custom-palette__item-label">{{ nodeType.label }}</div>\r
                  <div class="custom-palette__item-hint">{{ nodeType.hint }}</div>\r
                </div>\r
              </div>\r
            </div>\r
          </div>\r
        </template>\r
      </FlowDesignerLayout>\r
    </div>\r
  </div>\r
</template>\r
\r
<script setup lang="ts">\r
import { ref } from 'vue'\r
import { FlowDesignerLayout }  from '@quick-code/x6-flow-designer'\r
import type { FlowDesigner, FlowDesignerOptions } from '@quick-code/x6-flow-designer'\r
import { Graph } from '@antv/x6'\r
\r
const logs = ref<string[]>([])\r
const customNodeTypes = ref([\r
  {\r
    type: 'custom-circle',\r
    label: '圆形节点',\r
    icon: '⚪',\r
    hint: '用于流程开始/结束',\r
    color: '#5F95FF',\r
    width: 80,\r
    height: 80,\r
  },\r
  {\r
    type: 'custom-diamond',\r
    label: '菱形节点',\r
    icon: '◆',\r
    hint: '用于条件判断',\r
    color: '#47C769',\r
    width: 100,\r
    height: 80,\r
  },\r
])\r
\r
function addLog(message: string) {\r
  const timestamp = new Date().toLocaleTimeString()\r
  logs.value.push(\`[\${timestamp}] \${message}\`)\r
}\r
\r
function clearLogs() {\r
  logs.value = []\r
}\r
\r
/**\r
 * Graph 初始化前钩子：注册自定义 X6 原生节点\r
 */\r
function handleBeforeGraphInit(options: FlowDesignerOptions) {\r
  addLog('🔧 beforeGraphInit: 开始注册自定义节点')\r
\r
  // 注册第 1 个节点：圆形节点\r
  Graph.registerNode(\r
    'custom-circle',\r
    {\r
      inherit: 'circle',\r
      width: 80,\r
      height: 80,\r
      attrs: {\r
        body: {\r
          fill: '#5F95FF',\r
          stroke: '#2563EB',\r
          strokeWidth: 2,\r
        },\r
        label: {\r
          fill: '#fff',\r
          fontSize: 14,\r
          fontWeight: 500,\r
        },\r
      },\r
      ports: {\r
        groups: {\r
          top: {\r
            position: 'top',\r
            attrs: {\r
              circle: {\r
                r: 4,\r
                magnet: true,\r
                stroke: '#2563EB',\r
                strokeWidth: 1,\r
                fill: '#fff',\r
              },\r
            },\r
          },\r
          bottom: {\r
            position: 'bottom',\r
            attrs: {\r
              circle: {\r
                r: 4,\r
                magnet: true,\r
                stroke: '#2563EB',\r
                strokeWidth: 1,\r
                fill: '#fff',\r
              },\r
            },\r
          },\r
        },\r
        items: [\r
          { group: 'top', id: 'port-top' },\r
          { group: 'bottom', id: 'port-bottom' },\r
        ],\r
      },\r
    },\r
    true // 覆盖已存在的同名节点\r
  )\r
\r
  addLog('✅ 已注册节点: custom-circle (圆形)')\r
\r
  // 注册第 2 个节点：菱形节点\r
  Graph.registerNode(\r
    'custom-diamond',\r
    {\r
      inherit: 'polygon',\r
      width: 100,\r
      height: 80,\r
      attrs: {\r
        body: {\r
          fill: '#47C769',\r
          stroke: '#27AE60',\r
          strokeWidth: 2,\r
          refPoints: '0,10 10,0 20,10 10,20',\r
        },\r
        label: {\r
          fill: '#fff',\r
          fontSize: 13,\r
          fontWeight: 500,\r
          textWrap: {\r
            width: -20,\r
            height: -20,\r
            ellipsis: true,\r
          },\r
        },\r
      },\r
      ports: {\r
        groups: {\r
          top: {\r
            position: { name: 'top' },\r
            attrs: {\r
              circle: {\r
                r: 4,\r
                magnet: true,\r
                stroke: '#27AE60',\r
                strokeWidth: 1,\r
                fill: '#fff',\r
              },\r
            },\r
          },\r
          right: {\r
            position: { name: 'right' },\r
            attrs: {\r
              circle: {\r
                r: 4,\r
                magnet: true,\r
                stroke: '#27AE60',\r
                strokeWidth: 1,\r
                fill: '#fff',\r
              },\r
            },\r
          },\r
          bottom: {\r
            position: { name: 'bottom' },\r
            attrs: {\r
              circle: {\r
                r: 4,\r
                magnet: true,\r
                stroke: '#27AE60',\r
                strokeWidth: 1,\r
                fill: '#fff',\r
              },\r
            },\r
          },\r
          left: {\r
            position: { name: 'left' },\r
            attrs: {\r
              circle: {\r
                r: 4,\r
                magnet: true,\r
                stroke: '#27AE60',\r
                strokeWidth: 1,\r
                fill: '#fff',\r
              },\r
            },\r
          },\r
        },\r
        items: [\r
          { group: 'top', id: 'port-top' },\r
          { group: 'right', id: 'port-right' },\r
          { group: 'bottom', id: 'port-bottom' },\r
          { group: 'left', id: 'port-left' },\r
        ],\r
      },\r
    },\r
    true\r
  )\r
\r
  addLog('✅ 已注册节点: custom-diamond (菱形)')\r
  addLog('🎉 所有自定义节点注册完成')\r
}\r
\r
function handleReady(designer: FlowDesigner, graph: Graph) {\r
  addLog('✅ 画布初始化完成')\r
  addLog('🎨 自定义节点面板已渲染')\r
  addLog('💡 提示: 点击左侧节点拖拽到画布')\r
}\r
\r
function handleStartDrag(e: MouseEvent, nodeType: any, onStartDrag: any) {\r
  addLog(\`🎯 开始拖拽: \${nodeType.label}\`)\r
\r
  // 使用 palette 插槽提供的 onStartDrag 函数\r
  // 参数：(event, nodeConfig)\r
  // nodeConfig 是完整的 X6 Node.Metadata 对象\r
  onStartDrag(e, {\r
    shape: nodeType.type,\r
    label: nodeType.label,\r
    width: nodeType.width,\r
    height: nodeType.height,\r
    data: {\r
      label: nodeType.label,\r
      // 其他业务数据\r
      nodeInfo: {\r
        icon: nodeType.icon,\r
        hint: nodeType.hint,\r
        color: nodeType.color,\r
      }\r
    }\r
  })\r
}\r
<\/script>\r
\r
<style scoped>\r
.demo-slot-palette {\r
  display: flex;\r
  height: 100%;\r
  min-height: 500px;\r
  gap: 16px;\r
}\r
\r
.demo-slot-palette__log {\r
  width: 280px;\r
  border: 1px solid #e8e8e8;\r
  border-radius: 8px;\r
  padding: 16px;\r
  background: #fafafa;\r
  overflow: hidden;\r
  display: flex;\r
  flex-direction: column;\r
}\r
\r
.demo-slot-palette__log-header {\r
  display: flex;\r
  justify-content: space-between;\r
  align-items: center;\r
  margin-bottom: 12px;\r
}\r
\r
.demo-slot-palette__log h4 {\r
  margin: 0;\r
  font-size: 14px;\r
  color: #1a1a2e;\r
  font-weight: 600;\r
}\r
\r
.demo-slot-palette__clear-btn {\r
  padding: 2px 8px;\r
  font-size: 12px;\r
  color: #666;\r
  background: #fff;\r
  border: 1px solid #d9d9d9;\r
  border-radius: 4px;\r
  cursor: pointer;\r
  transition: all 0.2s;\r
  user-select: none;\r
}\r
\r
.demo-slot-palette__clear-btn:hover {\r
  color: #1890ff;\r
  border-color: #1890ff;\r
}\r
\r
.demo-slot-palette__log-content {\r
  flex: 1;\r
  overflow-y: auto;\r
  font-size: 12px;\r
  line-height: 1.8;\r
}\r
\r
.demo-slot-palette__log-item {\r
  padding: 4px 0;\r
  color: #555;\r
  font-family: 'Monaco', 'Menlo', 'Consolas', monospace;\r
  border-bottom: 1px solid #f0f0f0;\r
}\r
\r
.demo-slot-palette__log-item:last-child {\r
  border-bottom: none;\r
}\r
\r
.demo-slot-palette__canvas {\r
  flex: 1;\r
  border: 1px solid #e8e8e8;\r
  border-radius: 8px;\r
  overflow: hidden;\r
  background: #fff;\r
}\r
\r
/* ==================== 自定义节点面板样式 ==================== */\r
.custom-palette {\r
  display: flex;\r
  flex-direction: column;\r
  height: 100%;\r
  background: linear-gradient(to bottom, #f9fafb, #ffffff);\r
  border-right: 1px solid #e8e8e8;\r
  width: 180px;\r
}\r
\r
.custom-palette__header {\r
  padding: 16px;\r
  border-bottom: 2px solid #e8e8e8;\r
  background: #fff;\r
}\r
\r
.custom-palette__title {\r
  margin: 0 0 4px 0;\r
  font-size: 16px;\r
  font-weight: 600;\r
  color: #1a1a2e;\r
}\r
\r
.custom-palette__desc {\r
  font-size: 12px;\r
  color: #999;\r
}\r
\r
.custom-palette__section {\r
  padding: 12px;\r
}\r
\r
.custom-palette__section-title {\r
  font-size: 11px;\r
  font-weight: 600;\r
  color: #999;\r
  text-transform: uppercase;\r
  letter-spacing: 0.06em;\r
  margin-bottom: 8px;\r
  padding: 0 4px;\r
}\r
\r
.custom-palette__item {\r
  display: flex;\r
  align-items: center;\r
  gap: 12px;\r
  padding: 10px;\r
  margin-bottom: 8px;\r
  background: #fff;\r
  border: 1px solid #e8e8e8;\r
  border-radius: 6px;\r
  cursor: move;\r
  transition: all 0.2s;\r
  user-select: none;\r
}\r
\r
.custom-palette__item:hover {\r
  border-color: #1677ff;\r
  box-shadow: 0 2px 8px rgba(22, 119, 255, 0.15);\r
  transform: translateY(-1px);\r
}\r
\r
.custom-palette__item:active {\r
  transform: translateY(0);\r
  box-shadow: 0 1px 4px rgba(22, 119, 255, 0.2);\r
}\r
\r
.custom-palette__item-icon {\r
  width: 36px;\r
  height: 36px;\r
  display: flex;\r
  align-items: center;\r
  justify-content: center;\r
  border-radius: 6px;\r
  font-size: 18px;\r
  flex-shrink: 0;\r
}\r
\r
.custom-palette__item-info {\r
  flex: 1;\r
  min-width: 0;\r
}\r
\r
.custom-palette__item-label {\r
  font-size: 13px;\r
  font-weight: 500;\r
  color: #333;\r
  margin-bottom: 2px;\r
}\r
\r
.custom-palette__item-hint {\r
  font-size: 11px;\r
  color: #999;\r
  white-space: nowrap;\r
  overflow: hidden;\r
  text-overflow: ellipsis;\r
}\r
</style>\r
`,Vr={class:"demo-slot-properties"},Ur={class:"demo-slot-properties__log"},Zr={class:"demo-slot-properties__log-content"},qr={class:"demo-slot-properties__canvas"},jr=["title"],Yr={class:"custom-properties__toggle-icon"},Xr={class:"custom-properties__content"},Jr={class:"custom-properties__header"},Kr={class:"custom-properties__title"},Qr={class:"custom-properties__desc"},nt={key:0,class:"custom-properties__form"},et={class:"custom-properties__section"},rt={class:"custom-properties__field"},tt={class:"custom-properties__field"},ot={class:"custom-properties__label"},st={class:"custom-properties__field"},lt={class:"custom-properties__label"},it={class:"custom-properties__field"},at={class:"custom-properties__section"},dt={class:"custom-properties__info"},ct={class:"custom-properties__info-item"},pt={class:"custom-properties__info-value"},gt={class:"custom-properties__info-item"},ft={class:"custom-properties__info-value"},mt={class:"custom-properties__info-item"},ut={class:"custom-properties__info-value"},ht={key:1,class:"custom-properties__form"},bt={class:"custom-properties__section"},vt={class:"custom-properties__field"},_t=["value"],xt={class:"custom-properties__field"},yt=["value"],kt={class:"custom-properties__section"},wt={class:"custom-properties__field"},St=["value"],Nt={class:"custom-properties__field-row"},Ct={class:"custom-properties__field"},Dt=["value"],$t={class:"custom-properties__field"},Et=["value"],Ft={class:"custom-properties__section"},Lt={class:"custom-properties__field"},Tt=["value"],Rt={class:"custom-properties__field"},zt=["value"],At={class:"custom-properties__field"},Mt=["value"],Wt={key:2,class:"custom-properties__form"},It={class:"custom-properties__section"},Pt={class:"custom-properties__field"},Gt=["value"],Ot={class:"custom-properties__field"},Ht=["value"],Bt={class:"custom-properties__field"},Vt=["value"],Ut={class:"custom-properties__section"},Zt={class:"custom-properties__field"},qt=["value"],jt={class:"custom-properties__field"},Yt=["value"],Xt={class:"custom-properties__section"},Jt={class:"custom-properties__field"},Kt=["value"],Qt={class:"custom-properties__field"},no=["value"],eo={class:"custom-properties__field"},ro={class:"custom-properties__label"},to=["checked"],oo={key:3,class:"custom-properties__empty"},so=G({__name:"demo-slot-properties",setup(T){const v=S([]),a=S(null),c=S(null),l=S("canvas"),g=S(!1);let x=null,s=null;const o=S({name:"流程设计画布",grid:!0,snapline:!0,backgroundColor:"#ffffff"}),t=S({nodeCount:0,edgeCount:0,zoom:100}),e=xn(()=>{switch(l.value){case"node":return"节点属性";case"edge":return"连线属性";case"canvas":return"画布配置";default:return"属性编辑"}}),i=xn(()=>{switch(l.value){case"node":return"编辑节点属性";case"edge":return"编辑连线属性";case"canvas":return"配置画布设置";default:return"请选择元素"}});function r(R){const y=new Date().toLocaleTimeString();v.value.push(`[${y}] ${R}`)}function p(){v.value=[]}function m(){g.value=!g.value,r(g.value?"◀ 收起属性面板":"▶ 展开属性面板")}function u(R){r("🔧 初始化自定义节点..."),J.registerNode("custom-circle",{inherit:"circle",width:100,height:100,attrs:{body:{fill:"#5F95FF",stroke:"#2563EB",strokeWidth:2},label:{fill:"#fff",fontSize:14,fontWeight:500}}},!0),J.registerNode("custom-rect",{inherit:"rect",width:140,height:70,attrs:{body:{fill:"#47C769",stroke:"#27AE60",strokeWidth:2,rx:8,ry:8},label:{fill:"#fff",fontSize:14,fontWeight:500}}},!0),r("✅ 节点注册完成")}function N(R,y){x=R,s=y,r("✅ 画布初始化完成"),r("🎨 自定义属性面板已渲染");const en=y.addNode({shape:"custom-circle",x:100,y:100,label:"开始",data:{description:"流程开始节点",owner:"张三",priority:"high"}}),gn=y.addNode({shape:"custom-rect",x:300,y:100,label:"处理",data:{description:"执行业务处理",owner:"李四",priority:"medium"}}),En=y.addNode({shape:"custom-circle",x:500,y:100,label:"结束",data:{description:"流程结束",owner:"王五",priority:"low"}});y.addEdge({source:en,target:gn,shape:"flow-edge",labels:[{attrs:{text:{text:"通过"}}}],data:{lineType:"normal",condition:'status === "approved"',description:"审批通过后的流转",isDefault:!1}}),y.addEdge({source:gn,target:En,shape:"flow-edge",labels:[{attrs:{text:{text:"完成"}}}],data:{lineType:"normal",condition:"",description:"处理完成后结束",isDefault:!0}}),r("➕ 添加了 3 个节点和 2 条连线"),r("💡 提示: 点击节点、连线或空白区域"),y.centerContent(),d(),y.on("node:added",d),y.on("node:removed",d),y.on("edge:added",d),y.on("edge:removed",d),y.on("scale",({sx:kn})=>{t.value.zoom=Math.round(kn*100)})}function k(R){R.length===0?(a.value=null,c.value=null,l.value="canvas",r("📌 显示画布配置")):R.length===1?R[0].isNode()?(a.value=R[0],c.value=null,l.value="node",r(`📌 选中节点: ${a.value.label||a.value.id}`)):R[0].isEdge()&&(a.value=null,c.value=R[0],l.value="edge",r(`📌 选中连线: ${c.value.id}`)):(a.value=null,c.value=null,l.value="none",r(`📌 选中 ${R.length} 个元素`))}function d(){s&&(t.value.nodeCount=s.getNodes().length,t.value.edgeCount=s.getEdges().length)}function _(){r(`⚙️ 更新画布配置: ${o.value.name}`)}function $(R){var y;return a.value&&((y=a.value.getData())==null?void 0:y[R])||""}function A(R){a.value&&(a.value.setAttrByPath("label/text",R),a.value.prop("label",R),r(`✏️ 更新节点名称: ${R}`))}function C(R,y){if(!a.value)return;const en=a.value.getSize(),gn={width:R==="width"?y:en.width,height:R==="height"?y:en.height};a.value.setSize(gn),r(`📏 更新节点尺寸: ${R} = ${y}`)}function L(R,y){if(!a.value)return;const en=a.value.getData()||{};a.value.setData({...en,[R]:y}),r(`💾 更新节点属性: ${R}`)}function M(){if(!a.value||!s)return;const R=a.value.label||a.value.id;s.removeNode(a.value),r(`🗑️ 删除节点: ${R}`)}function on(){var y,en;if(!c.value)return"";const R=c.value.getLabels();return R&&R.length>0&&((en=(y=R[0].attrs)==null?void 0:y.text)==null?void 0:en.text)||""}function cn(){if(!c.value)return"";const R=c.value.getSourceNode();return(R==null?void 0:R.label)||(R==null?void 0:R.id)||""}function Cn(){if(!c.value)return"";const R=c.value.getTargetNode();return(R==null?void 0:R.label)||(R==null?void 0:R.id)||""}function _n(R){var y;return c.value&&((y=c.value.getData())==null?void 0:y[R])||""}function Mn(R){c.value&&(x==null||x.updateEdgeLabelText(c.value,R),r(`✏️ 更新连线标签: ${R}`))}function Q(R,y){if(!c.value)return;const en=c.value.getData()||{};c.value.setData({...en,[R]:y}),r(`💾 更新连线属性: ${R}`)}function ln(){!c.value||!s||(s.removeEdge(c.value),r("🗑️ 删除连线"))}return(R,y)=>(h(),b("div",Vr,[n("div",Ur,[n("div",{class:"demo-slot-properties__log-header"},[y[15]||(y[15]=n("h4",null,"事件日志",-1)),n("button",{class:"demo-slot-properties__clear-btn",onClick:p,title:"清除日志"}," 清除 ")]),n("div",Zr,[(h(!0),b(O,null,H(v.value,(en,gn)=>(h(),b("div",{key:gn,class:"demo-slot-properties__log-item"},D(en),1))),128))])]),n("div",qr,[f(F(V),{mode:"design","before-graph-init":u,onReady:N,onSelectionChange:k},{properties:E(({designer:en,graph:gn,selectedCells:En,currentMode:kn,capabilities:Gn})=>{var Fn,W;return[n("div",{class:an(["custom-properties",{"custom-properties--collapsed":g.value}])},[n("button",{class:"custom-properties__toggle",onClick:m,title:g.value?"展开属性面板":"收起属性面板"},[n("span",Yr,D(g.value?"◀":"▶"),1)],8,jr),n("div",Xr,[n("div",Jr,[n("h3",Kr,D(e.value),1),n("span",Qr,D(i.value),1)]),l.value==="canvas"?(h(),b("div",nt,[n("div",et,[y[20]||(y[20]=n("div",{class:"custom-properties__section-title"},"画布设置",-1)),n("div",rt,[y[16]||(y[16]=n("label",{class:"custom-properties__label"},"画布名称",-1)),nn(n("input",{type:"text",class:"custom-properties__input","onUpdate:modelValue":y[0]||(y[0]=w=>o.value.name=w),onInput:_,placeholder:"请输入画布名称"},null,544),[[Ln,o.value.name]])]),n("div",tt,[n("label",ot,[nn(n("input",{type:"checkbox",class:"custom-properties__checkbox","onUpdate:modelValue":y[1]||(y[1]=w=>o.value.grid=w),onChange:_},null,544),[[dn,o.value.grid]]),y[17]||(y[17]=P(" 显示网格 ",-1))])]),n("div",st,[n("label",lt,[nn(n("input",{type:"checkbox",class:"custom-properties__checkbox","onUpdate:modelValue":y[2]||(y[2]=w=>o.value.snapline=w),onChange:_},null,544),[[dn,o.value.snapline]]),y[18]||(y[18]=P(" 显示对齐线 ",-1))])]),n("div",it,[y[19]||(y[19]=n("label",{class:"custom-properties__label"},"背景颜色",-1)),nn(n("input",{type:"color",class:"custom-properties__color","onUpdate:modelValue":y[3]||(y[3]=w=>o.value.backgroundColor=w),onInput:_},null,544),[[Ln,o.value.backgroundColor]])])]),n("div",at,[y[24]||(y[24]=n("div",{class:"custom-properties__section-title"},"画布信息",-1)),n("div",dt,[n("div",ct,[y[21]||(y[21]=n("span",{class:"custom-properties__info-label"},"节点数量:",-1)),n("span",pt,D(t.value.nodeCount),1)]),n("div",gt,[y[22]||(y[22]=n("span",{class:"custom-properties__info-label"},"连线数量:",-1)),n("span",ft,D(t.value.edgeCount),1)]),n("div",mt,[y[23]||(y[23]=n("span",{class:"custom-properties__info-label"},"缩放比例:",-1)),n("span",ut,D(t.value.zoom)+"%",1)])])])])):l.value==="node"?(h(),b("div",ht,[n("div",bt,[y[27]||(y[27]=n("div",{class:"custom-properties__section-title"},"节点信息",-1)),n("div",vt,[y[25]||(y[25]=n("label",{class:"custom-properties__label"},"节点 ID",-1)),n("input",{type:"text",class:"custom-properties__input",value:a.value.id,disabled:""},null,8,_t)]),n("div",xt,[y[26]||(y[26]=n("label",{class:"custom-properties__label"},"节点类型",-1)),n("input",{type:"text",class:"custom-properties__input",value:a.value.shape,disabled:""},null,8,yt)])]),n("div",kt,[y[31]||(y[31]=n("div",{class:"custom-properties__section-title"},"基础属性",-1)),n("div",wt,[y[28]||(y[28]=n("label",{class:"custom-properties__label"},"节点名称 *",-1)),n("input",{type:"text",class:"custom-properties__input",value:a.value.label,onInput:y[4]||(y[4]=w=>A(w.target.value)),placeholder:"请输入节点名称"},null,40,St)]),n("div",Nt,[n("div",Ct,[y[29]||(y[29]=n("label",{class:"custom-properties__label"},"宽度",-1)),n("input",{type:"number",class:"custom-properties__input",value:((Fn=a.value.size)==null?void 0:Fn.width)||0,onInput:y[5]||(y[5]=w=>C("width",Number(w.target.value))),min:"50",max:"500"},null,40,Dt)]),n("div",$t,[y[30]||(y[30]=n("label",{class:"custom-properties__label"},"高度",-1)),n("input",{type:"number",class:"custom-properties__input",value:((W=a.value.size)==null?void 0:W.height)||0,onInput:y[6]||(y[6]=w=>C("height",Number(w.target.value))),min:"30",max:"500"},null,40,Et)])])]),n("div",Ft,[y[36]||(y[36]=n("div",{class:"custom-properties__section-title"},"业务属性",-1)),n("div",Lt,[y[32]||(y[32]=n("label",{class:"custom-properties__label"},"描述",-1)),n("textarea",{class:"custom-properties__textarea",value:$("description"),onInput:y[7]||(y[7]=w=>L("description",w.target.value)),placeholder:"请输入节点描述",rows:"3"},null,40,Tt)]),n("div",Rt,[y[33]||(y[33]=n("label",{class:"custom-properties__label"},"负责人",-1)),n("input",{type:"text",class:"custom-properties__input",value:$("owner"),onInput:y[8]||(y[8]=w=>L("owner",w.target.value)),placeholder:"请输入负责人"},null,40,zt)]),n("div",At,[y[35]||(y[35]=n("label",{class:"custom-properties__label"},"优先级",-1)),n("select",{class:"custom-properties__select",value:$("priority"),onChange:y[9]||(y[9]=w=>L("priority",w.target.value))},[...y[34]||(y[34]=[n("option",{value:""},"请选择",-1),n("option",{value:"high"},"高",-1),n("option",{value:"medium"},"中",-1),n("option",{value:"low"},"低",-1)])],40,Mt)])]),n("div",{class:"custom-properties__actions"},[n("button",{class:"custom-properties__btn custom-properties__btn--danger",onClick:M}," 删除节点 ")])])):l.value==="edge"?(h(),b("div",Wt,[n("div",It,[y[40]||(y[40]=n("div",{class:"custom-properties__section-title"},"连线信息",-1)),n("div",Pt,[y[37]||(y[37]=n("label",{class:"custom-properties__label"},"连线 ID",-1)),n("input",{type:"text",class:"custom-properties__input",value:c.value.id,disabled:""},null,8,Gt)]),n("div",Ot,[y[38]||(y[38]=n("label",{class:"custom-properties__label"},"源节点",-1)),n("input",{type:"text",class:"custom-properties__input",value:cn(),disabled:""},null,8,Ht)]),n("div",Bt,[y[39]||(y[39]=n("label",{class:"custom-properties__label"},"目标节点",-1)),n("input",{type:"text",class:"custom-properties__input",value:Cn(),disabled:""},null,8,Vt)])]),n("div",Ut,[y[44]||(y[44]=n("div",{class:"custom-properties__section-title"},"基础属性",-1)),n("div",Zt,[y[41]||(y[41]=n("label",{class:"custom-properties__label"},"连线标签",-1)),n("input",{type:"text",class:"custom-properties__input",value:on(),onInput:y[10]||(y[10]=w=>Mn(w.target.value)),placeholder:"请输入连线标签"},null,40,qt)]),n("div",jt,[y[43]||(y[43]=n("label",{class:"custom-properties__label"},"连线类型",-1)),n("select",{class:"custom-properties__select",value:_n("lineType"),onChange:y[11]||(y[11]=w=>Q("lineType",w.target.value))},[...y[42]||(y[42]=[n("option",{value:"normal"},"直线",-1),n("option",{value:"smooth"},"平滑曲线",-1),n("option",{value:"rounded"},"圆角折线",-1)])],40,Yt)])]),n("div",Xt,[y[48]||(y[48]=n("div",{class:"custom-properties__section-title"},"业务属性",-1)),n("div",Jt,[y[45]||(y[45]=n("label",{class:"custom-properties__label"},"条件表达式",-1)),n("input",{type:"text",class:"custom-properties__input",value:_n("condition"),onInput:y[12]||(y[12]=w=>Q("condition",w.target.value)),placeholder:"例如: status === 'approved'"},null,40,Kt)]),n("div",Qt,[y[46]||(y[46]=n("label",{class:"custom-properties__label"},"描述",-1)),n("textarea",{class:"custom-properties__textarea",value:_n("description"),onInput:y[13]||(y[13]=w=>Q("description",w.target.value)),placeholder:"请输入连线描述",rows:"2"},null,40,no)]),n("div",eo,[n("label",ro,[n("input",{type:"checkbox",class:"custom-properties__checkbox",checked:_n("isDefault"),onChange:y[14]||(y[14]=w=>Q("isDefault",w.target.checked))},null,40,to),y[47]||(y[47]=P(" 默认路径 ",-1))])])]),n("div",{class:"custom-properties__actions"},[n("button",{class:"custom-properties__btn custom-properties__btn--danger",onClick:ln}," 删除连线 ")])])):(h(),b("div",oo,[...y[49]||(y[49]=[n("div",{class:"custom-properties__empty-icon"},"📝",-1),n("p",null,"请选择画布元素",-1),n("p",{class:"custom-properties__empty-hint"},"点击节点或连线进行编辑",-1)])]))])],2)]}),_:1})])]))}}),lo=U(so,[["__scopeId","data-v-169a1855"]]),io=`<template>\r
  <div class="demo-slot-properties">\r
    <!-- 事件日志面板 -->\r
    <div class="demo-slot-properties__log">\r
      <div class="demo-slot-properties__log-header">\r
        <h4>事件日志</h4>\r
        <button class="demo-slot-properties__clear-btn" @click="clearLogs" title="清除日志">\r
          清除\r
        </button>\r
      </div>\r
      <div class="demo-slot-properties__log-content">\r
        <div v-for="(log, index) in logs" :key="index" class="demo-slot-properties__log-item">\r
          {{ log }}\r
        </div>\r
      </div>\r
    </div>\r
\r
    <!-- 画布容器 -->\r
    <div class="demo-slot-properties__canvas">\r
      <FlowDesignerLayout\r
        mode="design"\r
        :before-graph-init="handleBeforeGraphInit"\r
        @ready="handleReady"\r
        @selection-change="handleSelectionChange"\r
      >\r
        <!-- 自定义属性面板插槽 -->\r
        <template #properties="{ designer, graph, selectedCells, currentMode, capabilities }">\r
          <!--selectedCells 获取选中的元素-->\r
          <div class="custom-properties" :class="{ 'custom-properties--collapsed': isCollapsed }">\r
            <!-- 收起/展开按钮 -->\r
            <button\r
              class="custom-properties__toggle"\r
              @click="togglePanel"\r
              :title="isCollapsed ? '展开属性面板' : '收起属性面板'"\r
            >\r
              <span class="custom-properties__toggle-icon">\r
                {{ isCollapsed ? '◀' : '▶' }}\r
              </span>\r
            </button>\r
\r
            <!-- 面板内容 -->\r
            <div class="custom-properties__content">\r
              <!-- 头部 -->\r
              <div class="custom-properties__header">\r
                <h3 class="custom-properties__title">\r
                  {{ panelTitle }}\r
                </h3>\r
                <span class="custom-properties__desc">\r
                  {{ panelDesc }}\r
                </span>\r
              </div>\r
\r
            <!-- 画布配置 -->\r
            <div v-if="selectionType === 'canvas'" class="custom-properties__form">\r
              <div class="custom-properties__section">\r
                <div class="custom-properties__section-title">画布设置</div>\r
\r
                <div class="custom-properties__field">\r
                  <label class="custom-properties__label">画布名称</label>\r
                  <input\r
                    type="text"\r
                    class="custom-properties__input"\r
                    v-model="canvasConfig.name"\r
                    @input="updateCanvasConfig"\r
                    placeholder="请输入画布名称"\r
                  />\r
                </div>\r
\r
                <div class="custom-properties__field">\r
                  <label class="custom-properties__label">\r
                    <input\r
                      type="checkbox"\r
                      class="custom-properties__checkbox"\r
                      v-model="canvasConfig.grid"\r
                      @change="updateCanvasConfig"\r
                    />\r
                    显示网格\r
                  </label>\r
                </div>\r
\r
                <div class="custom-properties__field">\r
                  <label class="custom-properties__label">\r
                    <input\r
                      type="checkbox"\r
                      class="custom-properties__checkbox"\r
                      v-model="canvasConfig.snapline"\r
                      @change="updateCanvasConfig"\r
                    />\r
                    显示对齐线\r
                  </label>\r
                </div>\r
\r
                <div class="custom-properties__field">\r
                  <label class="custom-properties__label">背景颜色</label>\r
                  <input\r
                    type="color"\r
                    class="custom-properties__color"\r
                    v-model="canvasConfig.backgroundColor"\r
                    @input="updateCanvasConfig"\r
                  />\r
                </div>\r
              </div>\r
\r
              <div class="custom-properties__section">\r
                <div class="custom-properties__section-title">画布信息</div>\r
                <div class="custom-properties__info">\r
                  <div class="custom-properties__info-item">\r
                    <span class="custom-properties__info-label">节点数量:</span>\r
                    <span class="custom-properties__info-value">{{ canvasStats.nodeCount }}</span>\r
                  </div>\r
                  <div class="custom-properties__info-item">\r
                    <span class="custom-properties__info-label">连线数量:</span>\r
                    <span class="custom-properties__info-value">{{ canvasStats.edgeCount }}</span>\r
                  </div>\r
                  <div class="custom-properties__info-item">\r
                    <span class="custom-properties__info-label">缩放比例:</span>\r
                    <span class="custom-properties__info-value">{{ canvasStats.zoom }}%</span>\r
                  </div>\r
                </div>\r
              </div>\r
            </div>\r
\r
            <!-- 节点属性 -->\r
            <div v-else-if="selectionType === 'node'" class="custom-properties__form">\r
              <div class="custom-properties__section">\r
                <div class="custom-properties__section-title">节点信息</div>\r
                <div class="custom-properties__field">\r
                  <label class="custom-properties__label">节点 ID</label>\r
                  <input\r
                    type="text"\r
                    class="custom-properties__input"\r
                    :value="selectedNode.id"\r
                    disabled\r
                  />\r
                </div>\r
                <div class="custom-properties__field">\r
                  <label class="custom-properties__label">节点类型</label>\r
                  <input\r
                    type="text"\r
                    class="custom-properties__input"\r
                    :value="selectedNode.shape"\r
                    disabled\r
                  />\r
                </div>\r
              </div>\r
\r
              <div class="custom-properties__section">\r
                <div class="custom-properties__section-title">基础属性</div>\r
\r
                <div class="custom-properties__field">\r
                  <label class="custom-properties__label">节点名称 *</label>\r
                  <input\r
                    type="text"\r
                    class="custom-properties__input"\r
                    :value="selectedNode.label"\r
                    @input="updateNodeLabel($event.target.value)"\r
                    placeholder="请输入节点名称"\r
                  />\r
                </div>\r
\r
                <div class="custom-properties__field-row">\r
                  <div class="custom-properties__field">\r
                    <label class="custom-properties__label">宽度</label>\r
                    <input\r
                      type="number"\r
                      class="custom-properties__input"\r
                      :value="selectedNode.size?.width || 0"\r
                      @input="updateNodeSize('width', Number($event.target.value))"\r
                      min="50"\r
                      max="500"\r
                    />\r
                  </div>\r
                  <div class="custom-properties__field">\r
                    <label class="custom-properties__label">高度</label>\r
                    <input\r
                      type="number"\r
                      class="custom-properties__input"\r
                      :value="selectedNode.size?.height || 0"\r
                      @input="updateNodeSize('height', Number($event.target.value))"\r
                      min="30"\r
                      max="500"\r
                    />\r
                  </div>\r
                </div>\r
              </div>\r
\r
              <div class="custom-properties__section">\r
                <div class="custom-properties__section-title">业务属性</div>\r
\r
                <div class="custom-properties__field">\r
                  <label class="custom-properties__label">描述</label>\r
                  <textarea\r
                    class="custom-properties__textarea"\r
                    :value="getNodeData('description')"\r
                    @input="updateNodeData('description', $event.target.value)"\r
                    placeholder="请输入节点描述"\r
                    rows="3"\r
                  />\r
                </div>\r
\r
                <div class="custom-properties__field">\r
                  <label class="custom-properties__label">负责人</label>\r
                  <input\r
                    type="text"\r
                    class="custom-properties__input"\r
                    :value="getNodeData('owner')"\r
                    @input="updateNodeData('owner', $event.target.value)"\r
                    placeholder="请输入负责人"\r
                  />\r
                </div>\r
\r
                <div class="custom-properties__field">\r
                  <label class="custom-properties__label">优先级</label>\r
                  <select\r
                    class="custom-properties__select"\r
                    :value="getNodeData('priority')"\r
                    @change="updateNodeData('priority', $event.target.value)"\r
                  >\r
                    <option value="">请选择</option>\r
                    <option value="high">高</option>\r
                    <option value="medium">中</option>\r
                    <option value="low">低</option>\r
                  </select>\r
                </div>\r
              </div>\r
\r
              <div class="custom-properties__actions">\r
                <button\r
                  class="custom-properties__btn custom-properties__btn--danger"\r
                  @click="deleteNode"\r
                >\r
                  删除节点\r
                </button>\r
              </div>\r
            </div>\r
\r
            <!-- 连线属性 -->\r
            <div v-else-if="selectionType === 'edge'" class="custom-properties__form">\r
              <div class="custom-properties__section">\r
                <div class="custom-properties__section-title">连线信息</div>\r
                <div class="custom-properties__field">\r
                  <label class="custom-properties__label">连线 ID</label>\r
                  <input\r
                    type="text"\r
                    class="custom-properties__input"\r
                    :value="selectedEdge.id"\r
                    disabled\r
                  />\r
                </div>\r
                <div class="custom-properties__field">\r
                  <label class="custom-properties__label">源节点</label>\r
                  <input\r
                    type="text"\r
                    class="custom-properties__input"\r
                    :value="getEdgeSourceLabel()"\r
                    disabled\r
                  />\r
                </div>\r
                <div class="custom-properties__field">\r
                  <label class="custom-properties__label">目标节点</label>\r
                  <input\r
                    type="text"\r
                    class="custom-properties__input"\r
                    :value="getEdgeTargetLabel()"\r
                    disabled\r
                  />\r
                </div>\r
              </div>\r
\r
              <div class="custom-properties__section">\r
                <div class="custom-properties__section-title">基础属性</div>\r
\r
                <div class="custom-properties__field">\r
                  <label class="custom-properties__label">连线标签</label>\r
                  <input\r
                    type="text"\r
                    class="custom-properties__input"\r
                    :value="getEdgeLabel()"\r
                    @input="updateEdgeLabel($event.target.value)"\r
                    placeholder="请输入连线标签"\r
                  />\r
                </div>\r
\r
                <div class="custom-properties__field">\r
                  <label class="custom-properties__label">连线类型</label>\r
                  <select\r
                    class="custom-properties__select"\r
                    :value="getEdgeData('lineType')"\r
                    @change="updateEdgeData('lineType', $event.target.value)"\r
                  >\r
                    <option value="normal">直线</option>\r
                    <option value="smooth">平滑曲线</option>\r
                    <option value="rounded">圆角折线</option>\r
                  </select>\r
                </div>\r
              </div>\r
\r
              <div class="custom-properties__section">\r
                <div class="custom-properties__section-title">业务属性</div>\r
\r
                <div class="custom-properties__field">\r
                  <label class="custom-properties__label">条件表达式</label>\r
                  <input\r
                    type="text"\r
                    class="custom-properties__input"\r
                    :value="getEdgeData('condition')"\r
                    @input="updateEdgeData('condition', $event.target.value)"\r
                    placeholder="例如: status === 'approved'"\r
                  />\r
                </div>\r
\r
                <div class="custom-properties__field">\r
                  <label class="custom-properties__label">描述</label>\r
                  <textarea\r
                    class="custom-properties__textarea"\r
                    :value="getEdgeData('description')"\r
                    @input="updateEdgeData('description', $event.target.value)"\r
                    placeholder="请输入连线描述"\r
                    rows="2"\r
                  />\r
                </div>\r
\r
                <div class="custom-properties__field">\r
                  <label class="custom-properties__label">\r
                    <input\r
                      type="checkbox"\r
                      class="custom-properties__checkbox"\r
                      :checked="getEdgeData('isDefault')"\r
                      @change="updateEdgeData('isDefault', $event.target.checked)"\r
                    />\r
                    默认路径\r
                  </label>\r
                </div>\r
              </div>\r
\r
              <div class="custom-properties__actions">\r
                <button\r
                  class="custom-properties__btn custom-properties__btn--danger"\r
                  @click="deleteEdge"\r
                >\r
                  删除连线\r
                </button>\r
              </div>\r
            </div>\r
\r
            <!-- 空状态 -->\r
            <div v-else class="custom-properties__empty">\r
              <div class="custom-properties__empty-icon">📝</div>\r
              <p>请选择画布元素</p>\r
              <p class="custom-properties__empty-hint">点击节点或连线进行编辑</p>\r
            </div>\r
            </div><!-- custom-properties__content 结束 -->\r
          </div>\r
        </template>\r
      </FlowDesignerLayout>\r
    </div>\r
  </div>\r
</template>\r
\r
<script setup lang="ts">\r
import { ref, computed } from 'vue'\r
import { FlowDesignerLayout }  from '@quick-code/x6-flow-designer'\r
import type { FlowDesigner, FlowDesignerOptions } from '@quick-code/x6-flow-designer'\r
import { Graph, Node, Edge } from '@antv/x6'\r
\r
const logs = ref<string[]>([])\r
const selectedNode = ref<Node | null>(null)\r
const selectedEdge = ref<Edge | null>(null)\r
const selectionType = ref<'none' | 'node' | 'edge' | 'canvas'>('canvas')\r
const isCollapsed = ref(false)\r
\r
let designerInstance: FlowDesigner | null = null\r
let graphInstance: Graph | null = null\r
\r
// 画布配置\r
const canvasConfig = ref({\r
  name: '流程设计画布',\r
  grid: true,\r
  snapline: true,\r
  backgroundColor: '#ffffff',\r
})\r
\r
// 画布统计信息\r
const canvasStats = ref({\r
  nodeCount: 0,\r
  edgeCount: 0,\r
  zoom: 100,\r
})\r
\r
// 面板标题和描述\r
const panelTitle = computed(() => {\r
  switch (selectionType.value) {\r
    case 'node': return '节点属性'\r
    case 'edge': return '连线属性'\r
    case 'canvas': return '画布配置'\r
    default: return '属性编辑'\r
  }\r
})\r
\r
const panelDesc = computed(() => {\r
  switch (selectionType.value) {\r
    case 'node': return '编辑节点属性'\r
    case 'edge': return '编辑连线属性'\r
    case 'canvas': return '配置画布设置'\r
    default: return '请选择元素'\r
  }\r
})\r
\r
function addLog(message: string) {\r
  const timestamp = new Date().toLocaleTimeString()\r
  logs.value.push(\`[\${timestamp}] \${message}\`)\r
}\r
\r
function clearLogs() {\r
  logs.value = []\r
}\r
\r
function togglePanel() {\r
  isCollapsed.value = !isCollapsed.value\r
  addLog(isCollapsed.value ? '◀ 收起属性面板' : '▶ 展开属性面板')\r
}\r
\r
function handleBeforeGraphInit(options: FlowDesignerOptions) {\r
  addLog('🔧 初始化自定义节点...')\r
\r
  Graph.registerNode('custom-circle', {\r
    inherit: 'circle',\r
    width: 100,\r
    height: 100,\r
    attrs: {\r
      body: {\r
        fill: '#5F95FF',\r
        stroke: '#2563EB',\r
        strokeWidth: 2,\r
      },\r
      label: {\r
        fill: '#fff',\r
        fontSize: 14,\r
        fontWeight: 500,\r
      },\r
    },\r
  }, true)\r
\r
  Graph.registerNode('custom-rect', {\r
    inherit: 'rect',\r
    width: 140,\r
    height: 70,\r
    attrs: {\r
      body: {\r
        fill: '#47C769',\r
        stroke: '#27AE60',\r
        strokeWidth: 2,\r
        rx: 8,\r
        ry: 8,\r
      },\r
      label: {\r
        fill: '#fff',\r
        fontSize: 14,\r
        fontWeight: 500,\r
      },\r
    },\r
  }, true)\r
\r
  addLog('✅ 节点注册完成')\r
}\r
\r
function handleReady(designer: FlowDesigner, graph: Graph) {\r
  designerInstance = designer\r
  graphInstance = graph\r
\r
  addLog('✅ 画布初始化完成')\r
  addLog('🎨 自定义属性面板已渲染')\r
\r
  // 添加初始节点\r
  const node1 = graph.addNode({\r
    shape: 'custom-circle',\r
    x: 100,\r
    y: 100,\r
    label: '开始',\r
    data: {\r
      description: '流程开始节点',\r
      owner: '张三',\r
      priority: 'high',\r
    },\r
  })\r
\r
  const node2 = graph.addNode({\r
    shape: 'custom-rect',\r
    x: 300,\r
    y: 100,\r
    label: '处理',\r
    data: {\r
      description: '执行业务处理',\r
      owner: '李四',\r
      priority: 'medium',\r
    },\r
  })\r
\r
  const node3 = graph.addNode({\r
    shape: 'custom-circle',\r
    x: 500,\r
    y: 100,\r
    label: '结束',\r
    data: {\r
      description: '流程结束',\r
      owner: '王五',\r
      priority: 'low',\r
    },\r
  })\r
\r
  // 添加连线\r
  graph.addEdge({\r
    source: node1,\r
    target: node2,\r
    shape: 'flow-edge',\r
    labels: [{ attrs: { text: { text: '通过' } } }],\r
    data: {\r
      lineType: 'normal',\r
      condition: 'status === "approved"',\r
      description: '审批通过后的流转',\r
      isDefault: false,\r
    },\r
  })\r
\r
  graph.addEdge({\r
    source: node2,\r
    target: node3,\r
    shape: 'flow-edge',\r
    labels: [{ attrs: { text: { text: '完成' } } }],\r
    data: {\r
      lineType: 'normal',\r
      condition: '',\r
      description: '处理完成后结束',\r
      isDefault: true,\r
    },\r
  })\r
\r
  addLog('➕ 添加了 3 个节点和 2 条连线')\r
  addLog('💡 提示: 点击节点、连线或空白区域')\r
\r
  graph.centerContent()\r
  updateCanvasStats()\r
\r
  // 监听画布变化\r
  graph.on('node:added', updateCanvasStats)\r
  graph.on('node:removed', updateCanvasStats)\r
  graph.on('edge:added', updateCanvasStats)\r
  graph.on('edge:removed', updateCanvasStats)\r
  graph.on('scale', ({ sx }) => {\r
    canvasStats.value.zoom = Math.round(sx * 100)\r
  })\r
}\r
\r
function handleSelectionChange(cells: any[]) {\r
  if (cells.length === 0) {\r
    // 未选中任何元素，显示画布配置\r
    selectedNode.value = null\r
    selectedEdge.value = null\r
    selectionType.value = 'canvas'\r
    addLog('📌 显示画布配置')\r
  } else if (cells.length === 1) {\r
    if (cells[0].isNode()) {\r
      // 选中节点\r
      selectedNode.value = cells[0] as Node\r
      selectedEdge.value = null\r
      selectionType.value = 'node'\r
      addLog(\`📌 选中节点: \${selectedNode.value.label || selectedNode.value.id}\`)\r
    } else if (cells[0].isEdge()) {\r
      // 选中连线\r
      selectedNode.value = null\r
      selectedEdge.value = cells[0] as Edge\r
      selectionType.value = 'edge'\r
      addLog(\`📌 选中连线: \${selectedEdge.value.id}\`)\r
    }\r
  } else {\r
    // 多选\r
    selectedNode.value = null\r
    selectedEdge.value = null\r
    selectionType.value = 'none'\r
    addLog(\`📌 选中 \${cells.length} 个元素\`)\r
  }\r
}\r
\r
function updateCanvasStats() {\r
  if (!graphInstance) return\r
  canvasStats.value.nodeCount = graphInstance.getNodes().length\r
  canvasStats.value.edgeCount = graphInstance.getEdges().length\r
}\r
\r
function updateCanvasConfig() {\r
  addLog(\`⚙️ 更新画布配置: \${canvasConfig.value.name}\`)\r
}\r
\r
// ==================== 节点操作 ====================\r
\r
function getNodeData(key: string): any {\r
  if (!selectedNode.value) return ''\r
  return selectedNode.value.getData()?.[key] || ''\r
}\r
\r
function updateNodeLabel(newLabel: string) {\r
  if (!selectedNode.value) return\r
  selectedNode.value.setAttrByPath('label/text', newLabel)\r
  selectedNode.value.prop('label', newLabel)\r
  addLog(\`✏️ 更新节点名称: \${newLabel}\`)\r
}\r
\r
function updateNodeSize(dimension: 'width' | 'height', value: number) {\r
  if (!selectedNode.value) return\r
  const currentSize = selectedNode.value.getSize()\r
  const newSize = {\r
    width: dimension === 'width' ? value : currentSize.width,\r
    height: dimension === 'height' ? value : currentSize.height,\r
  }\r
  selectedNode.value.setSize(newSize)\r
  addLog(\`📏 更新节点尺寸: \${dimension} = \${value}\`)\r
}\r
\r
function updateNodeData(key: string, value: any) {\r
  if (!selectedNode.value) return\r
  const currentData = selectedNode.value.getData() || {}\r
  selectedNode.value.setData({\r
    ...currentData,\r
    [key]: value,\r
  })\r
  addLog(\`💾 更新节点属性: \${key}\`)\r
}\r
\r
function deleteNode() {\r
  if (!selectedNode.value || !graphInstance) return\r
  const nodeLabel = selectedNode.value.label || selectedNode.value.id\r
  graphInstance.removeNode(selectedNode.value)\r
  addLog(\`🗑️ 删除节点: \${nodeLabel}\`)\r
}\r
\r
// ==================== 连线操作 ====================\r
\r
function getEdgeLabel(): string {\r
  if (!selectedEdge.value) return ''\r
  const labels = selectedEdge.value.getLabels()\r
  if (labels && labels.length > 0) {\r
    return labels[0].attrs?.text?.text || ''\r
  }\r
  return ''\r
}\r
\r
function getEdgeSourceLabel(): string {\r
  if (!selectedEdge.value) return ''\r
  const sourceNode = selectedEdge.value.getSourceNode()\r
  return sourceNode?.label || sourceNode?.id || ''\r
}\r
\r
function getEdgeTargetLabel(): string {\r
  if (!selectedEdge.value) return ''\r
  const targetNode = selectedEdge.value.getTargetNode()\r
  return targetNode?.label || targetNode?.id || ''\r
}\r
\r
function getEdgeData(key: string): any {\r
  if (!selectedEdge.value) return ''\r
  return selectedEdge.value.getData()?.[key] || ''\r
}\r
\r
function updateEdgeLabel(newLabel: string) {\r
  if (!selectedEdge.value) return\r
  designerInstance?.updateEdgeLabelText(selectedEdge.value, newLabel)\r
\r
  addLog(\`✏️ 更新连线标签: \${newLabel}\`)\r
}\r
\r
function updateEdgeData(key: string, value: any) {\r
  if (!selectedEdge.value) return\r
  const currentData = selectedEdge.value.getData() || {}\r
  selectedEdge.value.setData({\r
    ...currentData,\r
    [key]: value,\r
  })\r
  addLog(\`💾 更新连线属性: \${key}\`)\r
}\r
\r
function deleteEdge() {\r
  if (!selectedEdge.value || !graphInstance) return\r
  graphInstance.removeEdge(selectedEdge.value)\r
  addLog('🗑️ 删除连线')\r
}\r
<\/script>\r
\r
<style scoped>\r
.demo-slot-properties {\r
  display: flex;\r
  height: 100%;\r
  min-height: 600px;\r
  gap: 16px;\r
}\r
\r
.demo-slot-properties__log {\r
  width: 280px;\r
  border: 1px solid #e8e8e8;\r
  border-radius: 8px;\r
  padding: 16px;\r
  background: #fafafa;\r
  overflow: hidden;\r
  display: flex;\r
  flex-direction: column;\r
}\r
\r
.demo-slot-properties__log-header {\r
  display: flex;\r
  justify-content: space-between;\r
  align-items: center;\r
  margin-bottom: 12px;\r
}\r
\r
.demo-slot-properties__log h4 {\r
  margin: 0;\r
  font-size: 14px;\r
  color: #1a1a2e;\r
  font-weight: 600;\r
}\r
\r
.demo-slot-properties__clear-btn {\r
  padding: 2px 8px;\r
  font-size: 12px;\r
  color: #666;\r
  background: #fff;\r
  border: 1px solid #d9d9d9;\r
  border-radius: 4px;\r
  cursor: pointer;\r
  transition: all 0.2s;\r
  user-select: none;\r
}\r
\r
.demo-slot-properties__clear-btn:hover {\r
  color: #1890ff;\r
  border-color: #1890ff;\r
}\r
\r
.demo-slot-properties__log-content {\r
  flex: 1;\r
  overflow-y: auto;\r
  font-size: 12px;\r
  line-height: 1.8;\r
}\r
\r
.demo-slot-properties__log-item {\r
  padding: 4px 0;\r
  color: #555;\r
  font-family: 'Monaco', 'Menlo', 'Consolas', monospace;\r
  border-bottom: 1px solid #f0f0f0;\r
}\r
\r
.demo-slot-properties__log-item:last-child {\r
  border-bottom: none;\r
}\r
\r
.demo-slot-properties__canvas {\r
  flex: 1;\r
  border: 1px solid #e8e8e8;\r
  border-radius: 8px;\r
  overflow: hidden;\r
  background: #fff;\r
}\r
\r
/* ==================== 自定义属性面板样式 ==================== */\r
.custom-properties {\r
  position: relative;\r
  display: flex;\r
  flex-direction: column;\r
  height: 100%;\r
  width: 260px;\r
  background: #f9fafb;\r
  border-left: 1px solid #e8e8e8;\r
  transition: width 0.3s ease;\r
  overflow: visible !important;\r
}\r
\r
.custom-properties--collapsed {\r
  width: 0px;\r
  min-width: 0px;\r
  background: transparent;\r
  border-left: none;\r
}\r
\r
.custom-properties--collapsed .custom-properties__content {\r
  display: none;\r
}\r
\r
.custom-properties__toggle {\r
  position: absolute;\r
  left: 0;\r
  top: 50%;\r
  transform: translateY(-50%);\r
  width: 40px;\r
  height: 80px;\r
  background: #fff;\r
  border: 1px solid #e8e8e8;\r
  border-radius: 8px;\r
  cursor: pointer;\r
  display: flex;\r
  align-items: center;\r
  justify-content: center;\r
  transition: all 0.2s;\r
  z-index: 100;\r
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);\r
  flex-shrink: 0;\r
}\r
\r
.custom-properties--collapsed .custom-properties__toggle {\r
  left: 0;\r
  border-radius: 8px 0 0 8px;\r
  border-right: none;\r
}\r
\r
.custom-properties__toggle:hover {\r
  background: #f0f7ff;\r
  border-color: #1677ff;\r
}\r
\r
.custom-properties__toggle-icon {\r
  font-size: 16px;\r
  color: #666;\r
  transition: color 0.2s;\r
  font-weight: bold;\r
}\r
\r
.custom-properties__toggle:hover .custom-properties__toggle-icon {\r
  color: #1677ff;\r
}\r
\r
.custom-properties__content {\r
  display: flex;\r
  flex-direction: column;\r
  height: 100%;\r
  width: 100%;\r
  margin-left: 0;\r
  transition: margin-left 0.3s ease;\r
}\r
\r
.custom-properties--collapsed {\r
  width: 0;\r
  margin-right: 40px;\r
  overflow: hidden;\r
}\r
\r
.custom-properties__toggle {\r
  position: absolute;\r
  left: -20px;\r
  top: 50%;\r
  transform: translateY(-50%);\r
  width: 40px;\r
  height: 80px;\r
  background: #fff;\r
  border: 1px solid #e8e8e8;\r
  border-right: none;\r
  border-radius: 8px 0 0 8px;\r
  cursor: pointer;\r
  display: flex;\r
  align-items: center;\r
  justify-content: center;\r
  transition: all 0.2s;\r
  z-index: 10;\r
  box-shadow: -2px 0 4px rgba(0, 0, 0, 0.05);\r
}\r
\r
.custom-properties__toggle:hover {\r
  background: #f0f7ff;\r
  border-color: #1677ff;\r
}\r
\r
.custom-properties__toggle-icon {\r
  font-size: 16px;\r
  color: #666;\r
  transition: color 0.2s;\r
}\r
\r
.custom-properties__toggle:hover .custom-properties__toggle-icon {\r
  color: #1677ff;\r
}\r
\r
.custom-properties__content {\r
  display: flex;\r
  flex-direction: column;\r
  height: 100%;\r
  width: 100%;\r
}\r
\r
.custom-properties__header {\r
  padding: 16px;\r
  border-bottom: 2px solid #e8e8e8;\r
  background: #fff;\r
}\r
\r
.custom-properties__title {\r
  margin: 0 0 4px 0;\r
  font-size: 16px;\r
  font-weight: 600;\r
  color: #1a1a2e;\r
}\r
\r
.custom-properties__desc {\r
  font-size: 12px;\r
  color: #999;\r
}\r
\r
.custom-properties__empty {\r
  flex: 1;\r
  display: flex;\r
  flex-direction: column;\r
  align-items: center;\r
  justify-content: center;\r
  padding: 40px 20px;\r
  text-align: center;\r
  color: #999;\r
}\r
\r
.custom-properties__empty-icon {\r
  font-size: 48px;\r
  margin-bottom: 16px;\r
  opacity: 0.5;\r
}\r
\r
.custom-properties__empty p {\r
  margin: 4px 0;\r
  font-size: 14px;\r
}\r
\r
.custom-properties__empty-hint {\r
  font-size: 12px;\r
  color: #bbb;\r
}\r
\r
.custom-properties__form {\r
  flex: 1;\r
  overflow-y: auto;\r
  padding: 16px;\r
}\r
\r
.custom-properties__section {\r
  margin-bottom: 16px;\r
  background: #fff;\r
  border-radius: 8px;\r
  padding: 16px;\r
  border: 1px solid #e8e8e8;\r
}\r
\r
.custom-properties__section-title {\r
  font-size: 13px;\r
  font-weight: 600;\r
  color: #1a1a2e;\r
  margin-bottom: 12px;\r
  padding-bottom: 8px;\r
  border-bottom: 1px solid #f0f0f0;\r
}\r
\r
.custom-properties__field {\r
  margin-bottom: 12px;\r
}\r
\r
.custom-properties__field:last-child {\r
  margin-bottom: 0;\r
}\r
\r
.custom-properties__field-row {\r
  display: flex;\r
  gap: 12px;\r
}\r
\r
.custom-properties__field-row .custom-properties__field {\r
  flex: 1;\r
}\r
\r
.custom-properties__label {\r
  display: block;\r
  font-size: 13px;\r
  color: #555;\r
  margin-bottom: 6px;\r
  font-weight: 500;\r
}\r
\r
.custom-properties__input,\r
.custom-properties__select,\r
.custom-properties__textarea {\r
  width: 100%;\r
  padding: 8px 12px;\r
  font-size: 13px;\r
  border: 1px solid #d9d9d9;\r
  border-radius: 4px;\r
  transition: all 0.2s;\r
  background: #fff;\r
  color: #333;\r
  font-family: inherit;\r
}\r
\r
.custom-properties__input:focus,\r
.custom-properties__select:focus,\r
.custom-properties__textarea:focus {\r
  outline: none;\r
  border-color: #1677ff;\r
  box-shadow: 0 0 0 2px rgba(22, 119, 255, 0.1);\r
}\r
\r
.custom-properties__input:disabled {\r
  background: #f5f5f5;\r
  color: #999;\r
  cursor: not-allowed;\r
}\r
\r
.custom-properties__textarea {\r
  resize: vertical;\r
  min-height: 60px;\r
  line-height: 1.5;\r
}\r
\r
.custom-properties__checkbox {\r
  margin-right: 6px;\r
  cursor: pointer;\r
}\r
\r
.custom-properties__color {\r
  width: 100%;\r
  height: 40px;\r
  border: 1px solid #d9d9d9;\r
  border-radius: 4px;\r
  cursor: pointer;\r
}\r
\r
.custom-properties__info {\r
  display: flex;\r
  flex-direction: column;\r
  gap: 8px;\r
}\r
\r
.custom-properties__info-item {\r
  display: flex;\r
  justify-content: space-between;\r
  align-items: center;\r
  padding: 8px;\r
  background: #f9fafb;\r
  border-radius: 4px;\r
}\r
\r
.custom-properties__info-label {\r
  font-size: 13px;\r
  color: #666;\r
}\r
\r
.custom-properties__info-value {\r
  font-size: 14px;\r
  font-weight: 600;\r
  color: #1677ff;\r
}\r
\r
.custom-properties__actions {\r
  margin-top: 16px;\r
}\r
\r
.custom-properties__btn {\r
  width: 100%;\r
  padding: 8px 16px;\r
  font-size: 13px;\r
  font-weight: 500;\r
  border-radius: 4px;\r
  border: none;\r
  cursor: pointer;\r
  transition: all 0.2s;\r
}\r
\r
.custom-properties__btn--danger {\r
  background: #ff4d4f;\r
  color: #fff;\r
}\r
\r
.custom-properties__btn--danger:hover {\r
  background: #ff7875;\r
}\r
\r
.custom-properties__btn--danger:active {\r
  background: #d9363e;\r
}\r
</style>\r
`,ao={class:"demo-slot-searchbox"},co={class:"demo-slot-searchbox__log"},po={class:"demo-slot-searchbox__log-content"},go={class:"demo-slot-searchbox__canvas"},fo={class:"compact-search-box__filter-bar"},mo=["onClick","title"],uo={class:"compact-search-box__input-wrapper"},ho=["onUpdate:modelValue","onKeydown"],bo={class:"compact-search-box__controls"},vo={key:0,class:"compact-search-box__counter"},_o={key:1,class:"compact-search-box__counter"},xo=["disabled","onClick"],yo=["disabled","onClick"],ko=["onClick"],wo={key:0,class:"compact-search-box__dropdown"},So=["onClick"],No={class:"compact-search-box__result-info"},Co={class:"compact-search-box__result-label"},Do={class:"compact-search-box__result-meta"},$o={class:"compact-search-box__result-type"},Eo={class:"compact-search-box__result-id"},Fo={key:1,class:"compact-search-box__empty"},Lo=G({__name:"demo-slot-searchbox",setup(T){const v=S([]),a=S(),c=S("all"),l=[{value:"all",label:"全部",description:"搜索所有节点（默认行为）"},{value:"rect",label:"矩形",description:"仅搜索 rect 类型的节点"},{value:"circle",label:"圆形",description:"仅搜索 circle 类型的节点"},{value:"ellipse",label:"椭圆",description:"仅搜索 ellipse 类型的节点"}];function g(i){const r=new Date().toLocaleTimeString();v.value.push(`[${r}] ${i}`)}function x(){v.value=[]}function s(i,r){c.value=i,i==="all"?(r(null),g("🔍 已切换到【全部】模式"),g("   → 输入关键词即可搜索所有节点")):(r((u,N)=>{var A;if(u.shape!==i)return!1;if(!N)return!0;const k=N.toLowerCase(),d=u.getProp("label")||u.label;if(d&&String(d).toLowerCase().includes(k))return!0;const _=(A=u.getData())==null?void 0:A.label;if(_&&String(_).toLowerCase().includes(k))return!0;const $=u.id;return!!($&&$.toLowerCase().includes(k))}),g(`🔍 已切换到【${{rect:"矩形",circle:"圆形",ellipse:"椭圆"}[i]||i}】模式`),g(`   → 仅搜索 ${i} 类型的节点`))}function o(i,r){g("✅ 画布初始化完成");const p=[{shape:"rect",x:100,y:100,width:100,height:60,label:"开始节点"},{shape:"rect",x:300,y:100,width:100,height:60,label:"处理数据"},{shape:"circle",x:500,y:130,width:80,height:80,label:"验证结果"},{shape:"ellipse",x:100,y:250,width:120,height:60,label:"发送通知"},{shape:"rect",x:300,y:250,width:100,height:60,label:"结束节点"},{shape:"circle",x:500,y:280,width:80,height:80,label:"备份数据"}];p.forEach(m=>{r.addNode(m)}),g(`🎨 已添加 ${p.length} 个测试节点`),g("   → 3个矩形(rect) + 2个圆形(circle) + 1个椭圆(ellipse)"),g("💡 提示: 按 Ctrl+F 打开搜索框"),g("💡 测试步骤:"),g('   1. 输入"节点"关键词'),g("   2. 点击不同过滤按钮观察结果变化"),g('   3. "矩形"模式只显示3个rect节点'),g('   4. "圆形"模式只显示2个circle节点')}function t(i){return i.shape||"unknown"}function e(i){return`ID: ${(i.id||"").substring(0,8)}`}return qn(()=>a.value,i=>{i&&jn(()=>{i.focus()})}),(i,r)=>(h(),b("div",ao,[n("div",co,[n("div",{class:"demo-slot-searchbox__log-header"},[r[1]||(r[1]=n("h4",null,"事件日志",-1)),n("button",{class:"demo-slot-searchbox__clear-btn",onClick:x,title:"清除日志"}," 清除 ")]),n("div",po,[(h(!0),b(O,null,H(v.value,(p,m)=>(h(),b("div",{key:m,class:"demo-slot-searchbox__log-item"},D(p),1))),128))])]),n("div",go,[f(F(V),{mode:"design",onReady:o},{"search-box":E(({keyword:p,results:m,currentIndex:u,total:N,next:k,prev:d,close:_,selectByIndex:$,getNodeLabel:A,setFilter:C})=>[n("div",{class:"compact-search-box",onClick:r[0]||(r[0]=Sn(()=>{},["stop"]))},[n("div",fo,[r[2]||(r[2]=n("span",{class:"compact-search-box__filter-label"},"过滤模式:",-1)),(h(),b(O,null,H(l,L=>n("button",{key:L.value,class:an(["compact-search-box__filter-btn",{"compact-search-box__filter-btn--active":c.value===L.value}]),onClick:M=>s(L.value,C),title:L.description},D(L.label),11,mo)),64))]),n("div",uo,[nn(n("input",{ref_key:"searchInputRef",ref:a,"onUpdate:modelValue":L=>p.value=L,class:"compact-search-box__input",type:"text",placeholder:"搜索节点...",onKeydown:[Wn(_,["esc"]),Wn(Sn(k,["exact"]),["enter"]),Wn(Sn(d,["shift"]),["enter"])]},null,40,ho),[[Ln,p.value]]),n("div",bo,[N.value>0?(h(),b("span",vo,D(u.value+1)+" / "+D(N.value),1)):p.value&&N.value===0?(h(),b("span",_o," 0 / 0 ")):z("",!0),n("button",{class:"compact-search-box__nav-btn",disabled:N.value===0,onClick:d,title:"上一个 (Shift+Enter)"}," ↑ ",8,xo),n("button",{class:"compact-search-box__nav-btn",disabled:N.value===0,onClick:k,title:"下一个 (Enter)"}," ↓ ",8,yo),n("button",{class:"compact-search-box__close-btn",onClick:_,title:"关闭 (ESC)"}," ✕ ",8,ko)])]),m.value.length>0?(h(),b("div",wo,[(h(!0),b(O,null,H(m.value,(L,M)=>(h(),b("div",{key:L.id,class:an(["compact-search-box__result-item",{"compact-search-box__result-item--active":M===u.value}]),onClick:on=>{$(M),g(`📍 已选中: ${A(L)}`)}},[r[3]||(r[3]=n("div",{class:"compact-search-box__result-icon"},"📍",-1)),n("div",No,[n("div",Co,D(A(L)),1),n("div",Do,[n("span",$o,D(t(L)),1),n("span",Eo,D(e(L)),1)])]),r[4]||(r[4]=n("div",{class:"compact-search-box__result-arrow"},"→",-1))],10,So))),128))])):p.value?(h(),b("div",Fo," 未找到匹配的节点 ")):z("",!0)])]),_:1})])]))}}),To=U(Lo,[["__scopeId","data-v-dfcfb212"]]),Ro=`<template>\r
  <div class="demo-slot-searchbox">\r
    <!-- 事件日志面板 -->\r
    <div class="demo-slot-searchbox__log">\r
      <div class="demo-slot-searchbox__log-header">\r
        <h4>事件日志</h4>\r
        <button class="demo-slot-searchbox__clear-btn" @click="clearLogs" title="清除日志">\r
          清除\r
        </button>\r
      </div>\r
      <div class="demo-slot-searchbox__log-content">\r
        <div v-for="(log, index) in logs" :key="index" class="demo-slot-searchbox__log-item">\r
          {{ log }}\r
        </div>\r
      </div>\r
    </div>\r
\r
    <!-- 画布容器 -->\r
    <div class="demo-slot-searchbox__canvas">\r
      <FlowDesignerLayout\r
        mode="design"\r
        @ready="handleReady"\r
      >\r
        <!-- 自定义搜索框插槽 -->\r
        <template #search-box="{ keyword, results, currentIndex, total, next, prev, close, selectByIndex, getNodeLabel: getLabel, setFilter }">\r
          <div class="compact-search-box" @click.stop>\r
            <!-- 过滤器选择器 -->\r
            <div class="compact-search-box__filter-bar">\r
              <span class="compact-search-box__filter-label">过滤模式:</span>\r
              <button\r
                v-for="filter in filterOptions"\r
                :key="filter.value"\r
                class="compact-search-box__filter-btn"\r
                :class="{ 'compact-search-box__filter-btn--active': activeFilter === filter.value }"\r
                @click="handleFilterChange(filter.value, setFilter)"\r
                :title="filter.description"\r
              >\r
                {{ filter.label }}\r
              </button>\r
            </div>\r
\r
            <!-- 输入框和控制按钮 -->\r
            <div class="compact-search-box__input-wrapper">\r
              <input\r
                ref="searchInputRef"\r
                v-model="keyword.value"\r
                class="compact-search-box__input"\r
                type="text"\r
                placeholder="搜索节点..."\r
                @keydown.esc="close"\r
                @keydown.enter.exact="next"\r
                @keydown.enter.shift="prev"\r
              />\r
\r
              <!-- 结果计数和导航按钮 -->\r
              <div class="compact-search-box__controls">\r
                <span v-if="total.value > 0" class="compact-search-box__counter">\r
                  {{ currentIndex.value + 1 }} / {{ total.value }}\r
                </span>\r
                <span v-else-if="keyword.value && total.value === 0" class="compact-search-box__counter">\r
                  0 / 0\r
                </span>\r
\r
                <button\r
                  class="compact-search-box__nav-btn"\r
                  :disabled="total.value === 0"\r
                  @click="prev"\r
                  title="上一个 (Shift+Enter)"\r
                >\r
                  ↑\r
                </button>\r
                <button\r
                  class="compact-search-box__nav-btn"\r
                  :disabled="total.value === 0"\r
                  @click="next"\r
                  title="下一个 (Enter)"\r
                >\r
                  ↓\r
                </button>\r
                <button\r
                  class="compact-search-box__close-btn"\r
                  @click="close"\r
                  title="关闭 (ESC)"\r
                >\r
                  ✕\r
                </button>\r
              </div>\r
            </div>\r
\r
            <!-- 搜索结果下拉列表 -->\r
            <div v-if="results.value.length > 0" class="compact-search-box__dropdown">\r
              <div\r
                v-for="(result, index) in results.value"\r
                :key="result.id"\r
                class="compact-search-box__result-item"\r
                :class="{ 'compact-search-box__result-item--active': index === currentIndex.value }"\r
                @click="selectByIndex(index); addLog(\`📍 已选中: \${getLabel(result)}\`)"\r
              >\r
                <div class="compact-search-box__result-icon">📍</div>\r
                <div class="compact-search-box__result-info">\r
                  <div class="compact-search-box__result-label">\r
                    {{ getLabel(result) }}\r
                  </div>\r
                  <div class="compact-search-box__result-meta">\r
                    <span class="compact-search-box__result-type">{{ getNodeShape(result) }}</span>\r
                    <span class="compact-search-box__result-id">{{ getNodeId(result) }}</span>\r
                  </div>\r
                </div>\r
                <div class="compact-search-box__result-arrow">→</div>\r
              </div>\r
            </div>\r
\r
            <!-- 空状态提示 -->\r
            <div v-else-if="keyword.value" class="compact-search-box__empty">\r
              未找到匹配的节点\r
            </div>\r
          </div>\r
        </template>\r
      </FlowDesignerLayout>\r
    </div>\r
  </div>\r
</template>\r
\r
<script setup lang="ts">\r
import { ref, watch, nextTick } from 'vue'\r
import { FlowDesignerLayout }  from '@quick-code/x6-flow-designer'\r
import type { FlowDesigner, FlowDesignerOptions } from '@quick-code/x6-flow-designer'\r
import type { Graph, Node } from '@antv/x6'\r
\r
const logs = ref<string[]>([])\r
const searchInputRef = ref<HTMLInputElement>()\r
let designerInstance: FlowDesigner | null = null\r
let graphInstance: Graph | null = null\r
\r
// 过滤器选项\r
const activeFilter = ref<string>('all')\r
const filterOptions = [\r
  {\r
    value: 'all',\r
    label: '全部',\r
    description: '搜索所有节点（默认行为）'\r
  },\r
  {\r
    value: 'rect',\r
    label: '矩形',\r
    description: '仅搜索 rect 类型的节点'\r
  },\r
  {\r
    value: 'circle',\r
    label: '圆形',\r
    description: '仅搜索 circle 类型的节点'\r
  },\r
  {\r
    value: 'ellipse',\r
    label: '椭圆',\r
    description: '仅搜索 ellipse 类型的节点'\r
  },\r
]\r
\r
function addLog(message: string) {\r
  const timestamp = new Date().toLocaleTimeString()\r
  logs.value.push(\`[\${timestamp}] \${message}\`)\r
}\r
\r
function clearLogs() {\r
  logs.value = []\r
}\r
\r
/**\r
 * 处理过滤器切换\r
 * @param filterValue 过滤器类型\r
 * @param setFilter 来自插槽的 setFilter 方法\r
 */\r
function handleFilterChange(filterValue: string, setFilter: (fn) => void) {\r
  activeFilter.value = filterValue\r
\r
  if (filterValue === 'all') {\r
    // 恢复默认过滤器\r
    setFilter(null)\r
    addLog('🔍 已切换到【全部】模式')\r
    addLog('   → 输入关键词即可搜索所有节点')\r
  } else {\r
    // 设置自定义过滤器：仅搜索指定 shape 类型的节点\r
    const customFilter = (node: Node, keyword: string) => {\r
      // 首先检查节点类型\r
      if (node.shape !== filterValue) {\r
        return false\r
      }\r
\r
      // 然后检查关键词匹配\r
      if (!keyword) return true\r
\r
      const lowerKeyword = keyword.toLowerCase()\r
\r
      // 获取节点标签（与 getNodeLabel 逻辑保持一致）\r
      const propLabel = node.getProp('label') || node.label\r
      if (propLabel && String(propLabel).toLowerCase().includes(lowerKeyword)) {\r
        return true\r
      }\r
\r
      const dataLabel = node.getData()?.label\r
      if (dataLabel && String(dataLabel).toLowerCase().includes(lowerKeyword)) {\r
        return true\r
      }\r
\r
      const nodeId = node.id\r
      if (nodeId && nodeId.toLowerCase().includes(lowerKeyword)) {\r
        return true\r
      }\r
\r
      return false\r
    }\r
\r
    setFilter(customFilter)\r
    const shapeMap: Record<string, string> = {\r
      'rect': '矩形',\r
      'circle': '圆形',\r
      'ellipse': '椭圆'\r
    }\r
    addLog(\`🔍 已切换到【\${shapeMap[filterValue] || filterValue}】模式\`)\r
    addLog(\`   → 仅搜索 \${filterValue} 类型的节点\`)\r
  }\r
}\r
\r
function handleReady(designer: FlowDesigner, graph: Graph) {\r
  designerInstance = designer\r
  graphInstance = graph\r
  addLog('✅ 画布初始化完成')\r
\r
  // 添加不同类型的测试节点\r
  const testNodes = [\r
    { shape: 'rect', x: 100, y: 100, width: 100, height: 60, label: '开始节点'},\r
    { shape: 'rect', x: 300, y: 100, width: 100, height: 60, label: '处理数据'},\r
    { shape: 'circle', x: 500, y: 130, width: 80, height: 80, label: '验证结果'},\r
    { shape: 'ellipse', x: 100, y: 250, width: 120, height: 60, label: '发送通知'},\r
    { shape: 'rect', x: 300, y: 250, width: 100, height: 60, label: '结束节点'},\r
    { shape: 'circle', x: 500, y: 280, width: 80, height: 80, label: '备份数据'},\r
  ]\r
\r
  testNodes.forEach(node => {\r
    graph.addNode(node)\r
  })\r
\r
  addLog(\`🎨 已添加 \${testNodes.length} 个测试节点\`)\r
  addLog('   → 3个矩形(rect) + 2个圆形(circle) + 1个椭圆(ellipse)')\r
  addLog('💡 提示: 按 Ctrl+F 打开搜索框')\r
  addLog('💡 测试步骤:')\r
  addLog('   1. 输入"节点"关键词')\r
  addLog('   2. 点击不同过滤按钮观察结果变化')\r
  addLog('   3. "矩形"模式只显示3个rect节点')\r
  addLog('   4. "圆形"模式只显示2个circle节点')\r
}\r
\r
/**\r
 * 获取节点类型\r
 */\r
function getNodeShape(node: any): string {\r
  return node.shape || 'unknown'\r
}\r
\r
/**\r
 * 获取节点 ID（前 8 位）\r
 */\r
function getNodeId(node: any): string {\r
  const id = node.id || ''\r
  return \`ID: \${id.substring(0, 8)}\`\r
}\r
\r
/**\r
 * 监听搜索框显示状态，自动聚焦输入框\r
 */\r
watch(() => searchInputRef.value, (input) => {\r
  if (input) {\r
    nextTick(() => {\r
      input.focus()\r
    })\r
  }\r
})\r
<\/script>\r
\r
\r
<style scoped>\r
.demo-slot-searchbox {\r
  display: flex;\r
  height: 100%;\r
  min-height: 500px;\r
  gap: 16px;\r
}\r
\r
.demo-slot-searchbox__log {\r
  width: 280px;\r
  border: 1px solid #e8e8e8;\r
  border-radius: 8px;\r
  padding: 16px;\r
  background: #fafafa;\r
  overflow: hidden;\r
  display: flex;\r
  flex-direction: column;\r
}\r
\r
.demo-slot-searchbox__log-header {\r
  display: flex;\r
  justify-content: space-between;\r
  align-items: center;\r
  margin-bottom: 12px;\r
}\r
\r
.demo-slot-searchbox__log h4 {\r
  margin: 0;\r
  font-size: 14px;\r
  color: #1a1a2e;\r
  font-weight: 600;\r
}\r
\r
.demo-slot-searchbox__clear-btn {\r
  padding: 2px 8px;\r
  font-size: 12px;\r
  color: #666;\r
  background: #fff;\r
  border: 1px solid #d9d9d9;\r
  border-radius: 4px;\r
  cursor: pointer;\r
  transition: all 0.2s;\r
  user-select: none;\r
}\r
\r
.demo-slot-searchbox__clear-btn:hover {\r
  color: #1890ff;\r
  border-color: #1890ff;\r
}\r
\r
.demo-slot-searchbox__log-content {\r
  flex: 1;\r
  overflow-y: auto;\r
  font-size: 12px;\r
  line-height: 1.8;\r
}\r
\r
.demo-slot-searchbox__log-item {\r
  padding: 4px 0;\r
  color: #555;\r
  font-family: 'Monaco', 'Menlo', 'Consolas', monospace;\r
  border-bottom: 1px solid #f0f0f0;\r
}\r
\r
.demo-slot-searchbox__log-item:last-child {\r
  border-bottom: none;\r
}\r
\r
.demo-slot-searchbox__canvas {\r
  flex: 1;\r
  border: 1px solid #e8e8e8;\r
  border-radius: 8px;\r
  overflow: hidden;\r
  background: #fff;\r
  position: relative;\r
}\r
\r
/* ==================== 紧凑型搜索框样式（右上角） ==================== */\r
.compact-search-box {\r
  position: absolute;\r
  top: 16px;\r
  right: 16px;\r
  width: 400px;\r
  background: #ffffff;\r
  border-radius: 8px;\r
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);\r
  z-index: 1000;\r
  max-height: calc(100vh - 80px);\r
  display: flex;\r
  flex-direction: column;\r
}\r
\r
/* 过滤器栏 */\r
.compact-search-box__filter-bar {\r
  display: flex;\r
  align-items: center;\r
  gap: 6px;\r
  padding: 8px 12px;\r
  border-bottom: 1px solid #f0f0f0;\r
  background: #fafafa;\r
  border-radius: 8px 8px 0 0;\r
  flex-shrink: 0;\r
}\r
\r
.compact-search-box__filter-label {\r
  font-size: 12px;\r
  color: #8c8c8c;\r
  font-weight: 500;\r
  user-select: none;\r
  flex-shrink: 0;\r
}\r
\r
.compact-search-box__filter-btn {\r
  padding: 3px 10px;\r
  font-size: 12px;\r
  color: #595959;\r
  background: #fff;\r
  border: 1px solid #d9d9d9;\r
  border-radius: 4px;\r
  cursor: pointer;\r
  transition: all 0.2s;\r
  user-select: none;\r
  flex-shrink: 0;\r
}\r
\r
.compact-search-box__filter-btn:hover {\r
  color: #1677ff;\r
  border-color: #1677ff;\r
  background: #f5f5f5;\r
}\r
\r
.compact-search-box__filter-btn--active {\r
  color: #fff;\r
  background: #1677ff;\r
  border-color: #1677ff;\r
  font-weight: 500;\r
}\r
\r
.compact-search-box__filter-btn--active:hover {\r
  background: #4096ff;\r
  border-color: #4096ff;\r
}\r
\r
.compact-search-box__input-wrapper {\r
  display: flex;\r
  align-items: center;\r
  gap: 8px;\r
  padding: 8px 12px;\r
  border-bottom: 1px solid #f0f0f0;\r
  flex-shrink: 0;\r
}\r
\r
.compact-search-box__input {\r
  flex: 1;\r
  min-width: 0;\r
  padding: 6px 10px;\r
  font-size: 13px;\r
  border: 1px solid #d9d9d9;\r
  border-radius: 4px;\r
  outline: none;\r
  transition: all 0.2s;\r
  background: #fafafa;\r
}\r
\r
.compact-search-box__input:focus {\r
  border-color: #1677ff;\r
  background: #fff;\r
  box-shadow: 0 0 0 2px rgba(22, 119, 255, 0.1);\r
}\r
\r
.compact-search-box__input::placeholder {\r
  color: #bfbfbf;\r
}\r
\r
.compact-search-box__controls {\r
  display: flex;\r
  align-items: center;\r
  gap: 4px;\r
  flex-shrink: 0;\r
}\r
\r
.compact-search-box__counter {\r
  font-size: 12px;\r
  color: #8c8c8c;\r
  font-family: 'Monaco', 'Menlo', 'Consolas', monospace;\r
  min-width: 42px;\r
  text-align: center;\r
  user-select: none;\r
}\r
\r
.compact-search-box__nav-btn,\r
.compact-search-box__close-btn {\r
  width: 24px;\r
  height: 24px;\r
  display: flex;\r
  align-items: center;\r
  justify-content: center;\r
  background: transparent;\r
  border: 1px solid #d9d9d9;\r
  border-radius: 4px;\r
  cursor: pointer;\r
  font-size: 14px;\r
  color: #595959;\r
  transition: all 0.2s;\r
  padding: 0;\r
  flex-shrink: 0;\r
}\r
\r
.compact-search-box__nav-btn:hover:not(:disabled),\r
.compact-search-box__close-btn:hover {\r
  background: #f5f5f5;\r
  border-color: #1677ff;\r
  color: #1677ff;\r
}\r
\r
.compact-search-box__nav-btn:active:not(:disabled),\r
.compact-search-box__close-btn:active {\r
  background: #e6f7ff;\r
}\r
\r
.compact-search-box__nav-btn:disabled {\r
  opacity: 0.4;\r
  cursor: not-allowed;\r
}\r
\r
.compact-search-box__close-btn {\r
  border-color: #ff4d4f;\r
  color: #ff4d4f;\r
}\r
\r
.compact-search-box__close-btn:hover {\r
  background: #fff1f0;\r
  border-color: #ff4d4f;\r
  color: #ff4d4f;\r
}\r
\r
/* 下拉列表 */\r
.compact-search-box__dropdown {\r
  max-height: 300px;\r
  overflow-y: auto;\r
  flex: 1;\r
}\r
\r
.compact-search-box__result-item {\r
  display: flex;\r
  align-items: center;\r
  gap: 10px;\r
  padding: 8px 12px;\r
  cursor: pointer;\r
  transition: all 0.2s;\r
  border-left: 3px solid transparent;\r
}\r
\r
.compact-search-box__result-item:hover {\r
  background: #f5f5f5;\r
}\r
\r
.compact-search-box__result-item--active {\r
  background: #e6f7ff;\r
  border-left-color: #1677ff;\r
}\r
\r
.compact-search-box__result-icon {\r
  font-size: 16px;\r
  flex-shrink: 0;\r
}\r
\r
.compact-search-box__result-info {\r
  flex: 1;\r
  min-width: 0;\r
}\r
\r
.compact-search-box__result-label {\r
  font-size: 13px;\r
  font-weight: 500;\r
  color: #262626;\r
  margin-bottom: 2px;\r
  overflow: hidden;\r
  text-overflow: ellipsis;\r
  white-space: nowrap;\r
}\r
\r
.compact-search-box__result-meta {\r
  display: flex;\r
  gap: 8px;\r
  font-size: 11px;\r
  color: #8c8c8c;\r
}\r
\r
.compact-search-box__result-type {\r
  padding: 1px 4px;\r
  background: #f0f0f0;\r
  border-radius: 3px;\r
  font-family: 'Monaco', 'Menlo', 'Consolas', monospace;\r
}\r
\r
.compact-search-box__result-id {\r
  font-family: 'Monaco', 'Menlo', 'Consolas', monospace;\r
}\r
\r
.compact-search-box__result-arrow {\r
  font-size: 14px;\r
  color: #1677ff;\r
  opacity: 0;\r
  transition: opacity 0.2s;\r
  flex-shrink: 0;\r
}\r
\r
.compact-search-box__result-item:hover .compact-search-box__result-arrow {\r
  opacity: 1;\r
}\r
\r
.compact-search-box__result-item--active .compact-search-box__result-arrow {\r
  opacity: 1;\r
}\r
\r
/* 空状态 */\r
.compact-search-box__empty {\r
  padding: 24px 12px;\r
  text-align: center;\r
  color: #8c8c8c;\r
  font-size: 13px;\r
}\r
</style>\r
`,zo={class:"demo-slot-canvas-menu"},Ao={class:"demo-slot-canvas-menu__log"},Mo={class:"demo-slot-canvas-menu__log-content"},Wo={class:"demo-slot-canvas-menu__canvas"},Io=["onClick"],Po={key:1,class:"canvas-context-menu__divider"},Go=["onClick"],Oo=["onClick"],Ho={key:4,class:"canvas-context-menu__divider"},Bo=["onClick"],Vo=["onClick"],Uo=["onClick"],Zo=["onClick"],qo={key:9,class:"canvas-context-menu__divider"},jo=["onClick"],Yo=["onClick"],Xo=["onClick"],Jo={key:13,class:"canvas-context-menu__divider"},Ko=["onClick"],Qo=G({__name:"demo-slot-canvasMenu",setup(T){const v=S([]);function a(t){const e=new Date().toLocaleTimeString();v.value.push(`[${e}] ${t}`),setTimeout(()=>{const i=document.querySelector(".demo-slot-canvas-menu__log-content");i&&(i.scrollTop=i.scrollHeight)},0)}function c(){v.value=[]}function l(t){a("🔧 初始化自定义节点样式..."),J.registerNode("custom-circle",{inherit:"circle",width:100,height:100,attrs:{body:{fill:"#5F95FF",stroke:"#2563EB",strokeWidth:2},label:{fill:"#fff",fontSize:14,fontWeight:500}}},!0),J.registerNode("custom-rect",{inherit:"rect",width:140,height:70,attrs:{body:{fill:"#47C769",stroke:"#27AE60",strokeWidth:2,rx:8,ry:8},label:{fill:"#fff",fontSize:14,fontWeight:500}}},!0),a("✅ 节点样式注册完成")}function g(t,e){a(`🖱️ 菜单点击: ${x(t)}`),e(t)}function x(t){return{selectAll:"全选节点",undo:"撤销",redo:"重做",zoomIn:"放大",zoomOut:"缩小",fitView:"适应窗口",resetView:"重置视图",paste:"粘贴",import:"导入 JSON",export:"导出 JSON",clear:"清空画布"}[t]||t}function s(t,e){a("✅ 画布初始化完成"),o(e),a("💡 提示: 在画布空白处点击右键打开菜单")}function o(t){const e=t.addNode({shape:"custom-circle",x:100,y:100,label:"开始",data:{description:"流程开始节点",owner:"张三",priority:"high"}}),i=t.addNode({shape:"custom-rect",x:300,y:100,label:"处理",data:{description:"执行业务处理",owner:"李四",priority:"medium"}}),r=t.addNode({shape:"custom-circle",x:500,y:100,label:"结束",data:{description:"流程结束",owner:"王五",priority:"low"}});t.addEdge({source:e,target:i,shape:"flow-edge",labels:[{attrs:{text:{text:"通过"}}}],data:{lineType:"normal",condition:'status === "approved"',description:"审批通过后的流转",isDefault:!1}}),t.addEdge({source:i,target:r,shape:"flow-edge",labels:[{attrs:{text:{text:"完成"}}}],data:{lineType:"normal",condition:"",description:"处理完成后结束",isDefault:!0}})}return(t,e)=>(h(),b("div",zo,[n("div",Ao,[n("div",{class:"demo-slot-canvas-menu__log-header"},[e[1]||(e[1]=n("h4",null,"事件日志",-1)),n("button",{class:"demo-slot-canvas-menu__clear-btn",onClick:c,title:"清除日志"}," 清除 ")]),n("div",Mo,[(h(!0),b(O,null,H(v.value,(i,r)=>(h(),b("div",{key:r,class:"demo-slot-canvas-menu__log-item"},D(i),1))),128))])]),n("div",Wo,[f(F(V),{mode:"design","before-graph-init":l,onReady:s},{"canvas-menu":E(({capabilities:i,onSelect:r})=>[n("div",{class:"canvas-context-menu",onClick:e[0]||(e[0]=Sn(()=>{},["stop"]))},[e[13]||(e[13]=n("div",{class:"canvas-context-menu__header"},[n("span",{class:"canvas-context-menu__title"},"画布菜单")],-1)),i.canSelectAll&&i.canMultipleSelect?(h(),b("div",{key:0,class:"canvas-context-menu__item",onClick:p=>g("selectAll",r)},[...e[2]||(e[2]=[n("span",{class:"canvas-context-menu__icon"},"☑",-1),n("span",{class:"canvas-context-menu__text"},"全选节点",-1),n("span",{class:"canvas-context-menu__shortcut"},"Ctrl+A",-1)])],8,Io)):z("",!0),i.canSelectAll&&i.canMultipleSelect&&(i.canUndo||i.canRedo)?(h(),b("div",Po)):z("",!0),i.canUndo?(h(),b("div",{key:2,class:"canvas-context-menu__item",onClick:p=>g("undo",r)},[...e[3]||(e[3]=[n("span",{class:"canvas-context-menu__icon"},"↶",-1),n("span",{class:"canvas-context-menu__text"},"撤销",-1),n("span",{class:"canvas-context-menu__shortcut"},"Ctrl+Z",-1)])],8,Go)):z("",!0),i.canRedo?(h(),b("div",{key:3,class:"canvas-context-menu__item",onClick:p=>g("redo",r)},[...e[4]||(e[4]=[n("span",{class:"canvas-context-menu__icon"},"↷",-1),n("span",{class:"canvas-context-menu__text"},"重做",-1),n("span",{class:"canvas-context-menu__shortcut"},"Ctrl+Y",-1)])],8,Oo)):z("",!0),(i.canUndo||i.canRedo)&&(i.canZoom||i.canFitView)?(h(),b("div",Ho)):z("",!0),i.canZoom?(h(),b("div",{key:5,class:"canvas-context-menu__item",onClick:p=>g("zoomIn",r)},[...e[5]||(e[5]=[n("span",{class:"canvas-context-menu__icon"},"🔍+",-1),n("span",{class:"canvas-context-menu__text"},"放大",-1),n("span",{class:"canvas-context-menu__shortcut"},"Ctrl+=",-1)])],8,Bo)):z("",!0),i.canZoom?(h(),b("div",{key:6,class:"canvas-context-menu__item",onClick:p=>g("zoomOut",r)},[...e[6]||(e[6]=[n("span",{class:"canvas-context-menu__icon"},"🔍-",-1),n("span",{class:"canvas-context-menu__text"},"缩小",-1),n("span",{class:"canvas-context-menu__shortcut"},"Ctrl+-",-1)])],8,Vo)):z("",!0),i.canFitView?(h(),b("div",{key:7,class:"canvas-context-menu__item",onClick:p=>g("fitView",r)},[...e[7]||(e[7]=[n("span",{class:"canvas-context-menu__icon"},"⛶",-1),n("span",{class:"canvas-context-menu__text"},"适应窗口",-1),n("span",{class:"canvas-context-menu__shortcut"},"Ctrl+0",-1)])],8,Uo)):z("",!0),i.canResetView?(h(),b("div",{key:8,class:"canvas-context-menu__item",onClick:p=>g("resetView",r)},[...e[8]||(e[8]=[n("span",{class:"canvas-context-menu__icon"},"⌖",-1),n("span",{class:"canvas-context-menu__text"},"重置视图",-1),n("span",{class:"canvas-context-menu__shortcut"},"Ctrl+Shift+H",-1)])],8,Zo)):z("",!0),(i.canZoom||i.canFitView)&&(i.canImport||i.canExport)?(h(),b("div",qo)):z("",!0),i.canPaste?(h(),b("div",{key:10,class:"canvas-context-menu__item",onClick:p=>g("paste",r)},[...e[9]||(e[9]=[n("span",{class:"canvas-context-menu__icon"},"📋",-1),n("span",{class:"canvas-context-menu__text"},"粘贴",-1),n("span",{class:"canvas-context-menu__shortcut"},"Ctrl+V",-1)])],8,jo)):z("",!0),i.canImport?(h(),b("div",{key:11,class:"canvas-context-menu__item",onClick:p=>g("import",r)},[...e[10]||(e[10]=[n("span",{class:"canvas-context-menu__icon"},"📥",-1),n("span",{class:"canvas-context-menu__text"},"导入 JSON",-1)])],8,Yo)):z("",!0),i.canExport?(h(),b("div",{key:12,class:"canvas-context-menu__item",onClick:p=>g("export",r)},[...e[11]||(e[11]=[n("span",{class:"canvas-context-menu__icon"},"📤",-1),n("span",{class:"canvas-context-menu__text"},"导出 JSON",-1)])],8,Xo)):z("",!0),(i.canImport||i.canExport)&&i.canDelete?(h(),b("div",Jo)):z("",!0),i.canDelete?(h(),b("div",{key:14,class:"canvas-context-menu__item canvas-context-menu__item--danger",onClick:p=>g("clear",r)},[...e[12]||(e[12]=[n("span",{class:"canvas-context-menu__icon"},"🗑",-1),n("span",{class:"canvas-context-menu__text"},"清空画布",-1)])],8,Ko)):z("",!0)])]),_:1})])]))}}),ns=U(Qo,[["__scopeId","data-v-57f05e5e"]]),es=`\uFEFF<template>\r
  <div class="demo-slot-canvas-menu">\r
    <!-- 事件日志面板 -->\r
    <div class="demo-slot-canvas-menu__log">\r
      <div class="demo-slot-canvas-menu__log-header">\r
        <h4>事件日志</h4>\r
        <button class="demo-slot-canvas-menu__clear-btn" @click="clearLogs" title="清除日志">\r
          清除\r
        </button>\r
      </div>\r
      <div class="demo-slot-canvas-menu__log-content">\r
        <div v-for="(log, index) in logs" :key="index" class="demo-slot-canvas-menu__log-item">\r
          {{ log }}\r
        </div>\r
      </div>\r
    </div>\r
\r
    <!-- 画布容器 -->\r
    <div class="demo-slot-canvas-menu__canvas">\r
      <FlowDesignerLayout\r
        mode="design"\r
        :before-graph-init="handleBeforeGraphInit"\r
        @ready="handleReady"\r
      >\r
        <!-- 自定义画布右键菜单插槽 -->\r
        <template #canvas-menu="{ capabilities, onSelect }">\r
          <div class="canvas-context-menu" @click.stop>\r
            <div class="canvas-context-menu__header">\r
              <span class="canvas-context-menu__title">画布菜单</span>\r
            </div>\r
\r
            <!-- 全选 -->\r
            <div\r
              v-if="capabilities.canSelectAll && capabilities.canMultipleSelect"\r
              class="canvas-context-menu__item"\r
              @click="handleMenuClick('selectAll', onSelect)"\r
            >\r
              <span class="canvas-context-menu__icon">☑</span>\r
              <span class="canvas-context-menu__text">全选节点</span>\r
              <span class="canvas-context-menu__shortcut">Ctrl+A</span>\r
            </div>\r
\r
            <!-- 分隔线 -->\r
            <div\r
              v-if="(capabilities.canSelectAll && capabilities.canMultipleSelect) && (capabilities.canUndo || capabilities.canRedo)"\r
              class="canvas-context-menu__divider"\r
            />\r
\r
            <!-- 撤销/重做 -->\r
            <div\r
              v-if="capabilities.canUndo"\r
              class="canvas-context-menu__item"\r
              @click="handleMenuClick('undo', onSelect)"\r
            >\r
              <span class="canvas-context-menu__icon">↶</span>\r
              <span class="canvas-context-menu__text">撤销</span>\r
              <span class="canvas-context-menu__shortcut">Ctrl+Z</span>\r
            </div>\r
            <div\r
              v-if="capabilities.canRedo"\r
              class="canvas-context-menu__item"\r
              @click="handleMenuClick('redo', onSelect)"\r
            >\r
              <span class="canvas-context-menu__icon">↷</span>\r
              <span class="canvas-context-menu__text">重做</span>\r
              <span class="canvas-context-menu__shortcut">Ctrl+Y</span>\r
            </div>\r
\r
            <!-- 分隔线 -->\r
            <div\r
              v-if="(capabilities.canUndo || capabilities.canRedo) && (capabilities.canZoom || capabilities.canFitView)"\r
              class="canvas-context-menu__divider"\r
            />\r
\r
            <!-- 视图操作 -->\r
            <div\r
              v-if="capabilities.canZoom"\r
              class="canvas-context-menu__item"\r
              @click="handleMenuClick('zoomIn', onSelect)"\r
            >\r
              <span class="canvas-context-menu__icon">🔍+</span>\r
              <span class="canvas-context-menu__text">放大</span>\r
              <span class="canvas-context-menu__shortcut">Ctrl+=</span>\r
            </div>\r
            <div\r
              v-if="capabilities.canZoom"\r
              class="canvas-context-menu__item"\r
              @click="handleMenuClick('zoomOut', onSelect)"\r
            >\r
              <span class="canvas-context-menu__icon">🔍-</span>\r
              <span class="canvas-context-menu__text">缩小</span>\r
              <span class="canvas-context-menu__shortcut">Ctrl+-</span>\r
            </div>\r
            <div\r
              v-if="capabilities.canFitView"\r
              class="canvas-context-menu__item"\r
              @click="handleMenuClick('fitView', onSelect)"\r
            >\r
              <span class="canvas-context-menu__icon">⛶</span>\r
              <span class="canvas-context-menu__text">适应窗口</span>\r
              <span class="canvas-context-menu__shortcut">Ctrl+0</span>\r
            </div>\r
            <div\r
              v-if="capabilities.canResetView"\r
              class="canvas-context-menu__item"\r
              @click="handleMenuClick('resetView', onSelect)"\r
            >\r
              <span class="canvas-context-menu__icon">⌖</span>\r
              <span class="canvas-context-menu__text">重置视图</span>\r
              <span class="canvas-context-menu__shortcut">Ctrl+Shift+H</span>\r
            </div>\r
\r
            <!-- 分隔线 -->\r
            <div\r
              v-if="(capabilities.canZoom || capabilities.canFitView) && (capabilities.canImport || capabilities.canExport)"\r
              class="canvas-context-menu__divider"\r
            />\r
\r
            <!-- 导入导出 -->\r
            <div\r
              v-if="capabilities.canPaste"\r
              class="canvas-context-menu__item"\r
              @click="handleMenuClick('paste', onSelect)"\r
            >\r
              <span class="canvas-context-menu__icon">📋</span>\r
              <span class="canvas-context-menu__text">粘贴</span>\r
              <span class="canvas-context-menu__shortcut">Ctrl+V</span>\r
            </div>\r
            <div\r
              v-if="capabilities.canImport"\r
              class="canvas-context-menu__item"\r
              @click="handleMenuClick('import', onSelect)"\r
            >\r
              <span class="canvas-context-menu__icon">📥</span>\r
              <span class="canvas-context-menu__text">导入 JSON</span>\r
            </div>\r
            <div\r
              v-if="capabilities.canExport"\r
              class="canvas-context-menu__item"\r
              @click="handleMenuClick('export', onSelect)"\r
            >\r
              <span class="canvas-context-menu__icon">📤</span>\r
              <span class="canvas-context-menu__text">导出 JSON</span>\r
            </div>\r
\r
            <!-- 分隔线 -->\r
            <div\r
              v-if="(capabilities.canImport || capabilities.canExport) && capabilities.canDelete"\r
              class="canvas-context-menu__divider"\r
            />\r
\r
            <!-- 危险操作 -->\r
            <div\r
              v-if="capabilities.canDelete"\r
              class="canvas-context-menu__item canvas-context-menu__item--danger"\r
              @click="handleMenuClick('clear', onSelect)"\r
            >\r
              <span class="canvas-context-menu__icon">🗑</span>\r
              <span class="canvas-context-menu__text">清空画布</span>\r
            </div>\r
          </div>\r
        </template>\r
      </FlowDesignerLayout>\r
    </div>\r
  </div>\r
</template>\r
\r
<script setup lang="ts">\r
import { ref } from 'vue'\r
import { FlowDesignerLayout }  from '@quick-code/x6-flow-designer'\r
import type { FlowDesigner } from '@quick-code/x6-flow-designer'\r
import { Graph } from '@antv/x6'\r
\r
const logs = ref<string[]>([])\r
let designerInstance: FlowDesigner | null = null\r
let graphInstance: Graph | null = null\r
\r
function addLog(message: string) {\r
  const timestamp = new Date().toLocaleTimeString()\r
  logs.value.push(\`[\${timestamp}] \${message}\`)\r
  // 自动滚动到底部\r
  setTimeout(() => {\r
    const logContent = document.querySelector('.demo-slot-canvas-menu__log-content')\r
    if (logContent) {\r
      logContent.scrollTop = logContent.scrollHeight\r
    }\r
  }, 0)\r
}\r
\r
function clearLogs() {\r
  logs.value = []\r
}\r
\r
/**\r
 * Graph 初始化前注册自定义节点\r
 */\r
function handleBeforeGraphInit(options: FlowDesignerOptions) {\r
  addLog('🔧 初始化自定义节点样式...')\r
\r
  // 注册自定义节点：蓝色圆形\r
  Graph.registerNode('custom-circle', {\r
    inherit: 'circle',\r
    width: 100,\r
    height: 100,\r
    attrs: {\r
      body: {\r
        fill: '#5F95FF',\r
        stroke: '#2563EB',\r
        strokeWidth: 2,\r
      },\r
      label: {\r
        fill: '#fff',\r
        fontSize: 14,\r
        fontWeight: 500,\r
      },\r
    },\r
  }, true)\r
\r
  Graph.registerNode('custom-rect', {\r
    inherit: 'rect',\r
    width: 140,\r
    height: 70,\r
    attrs: {\r
      body: {\r
        fill: '#47C769',\r
        stroke: '#27AE60',\r
        strokeWidth: 2,\r
        rx: 8,\r
        ry: 8,\r
      },\r
      label: {\r
        fill: '#fff',\r
        fontSize: 14,\r
        fontWeight: 500,\r
      },\r
    },\r
  }, true)\r
\r
  addLog('✅ 节点样式注册完成')\r
}\r
\r
/**\r
 * 处理菜单项点击\r
 * @param action 操作类型\r
 * @param onSelect 插槽提供的 onSelect 方法\r
 */\r
function handleMenuClick(action: string, onSelect: (action: string) => void) {\r
  addLog(\`🖱️ 菜单点击: \${getActionName(action)}\`)\r
  onSelect(action)\r
}\r
\r
/**\r
 * 获取操作名称（用于日志显示）\r
 */\r
function getActionName(action: string): string {\r
  const actionMap: Record<string, string> = {\r
    'selectAll': '全选节点',\r
    'undo': '撤销',\r
    'redo': '重做',\r
    'zoomIn': '放大',\r
    'zoomOut': '缩小',\r
    'fitView': '适应窗口',\r
    'resetView': '重置视图',\r
    'paste': '粘贴',\r
    'import': '导入 JSON',\r
    'export': '导出 JSON',\r
    'clear': '清空画布',\r
  }\r
  return actionMap[action] || action\r
}\r
\r
function handleReady(designer: FlowDesigner, graph: Graph) {\r
  designerInstance = designer\r
  graphInstance = graph\r
  addLog('✅ 画布初始化完成')\r
\r
  // 初始化测试数据\r
  initTestData(graph)\r
  addLog('💡 提示: 在画布空白处点击右键打开菜单')\r
}\r
function initTestData(graph) {\r
\r
  // 添加初始节点\r
  const node1 = graph.addNode({\r
    shape: 'custom-circle',\r
    x: 100,\r
    y: 100,\r
    label: '开始',\r
    data: {\r
      description: '流程开始节点',\r
      owner: '张三',\r
      priority: 'high',\r
    },\r
  })\r
\r
  const node2 = graph.addNode({\r
    shape: 'custom-rect',\r
    x: 300,\r
    y: 100,\r
    label: '处理',\r
    data: {\r
      description: '执行业务处理',\r
      owner: '李四',\r
      priority: 'medium',\r
    },\r
  })\r
\r
  const node3 = graph.addNode({\r
    shape: 'custom-circle',\r
    x: 500,\r
    y: 100,\r
    label: '结束',\r
    data: {\r
      description: '流程结束',\r
      owner: '王五',\r
      priority: 'low',\r
    },\r
  })\r
\r
  // 添加连线\r
  graph.addEdge({\r
    source: node1,\r
    target: node2,\r
    shape: 'flow-edge',\r
    labels: [{ attrs: { text: { text: '通过' } } }],\r
    data: {\r
      lineType: 'normal',\r
      condition: 'status === "approved"',\r
      description: '审批通过后的流转',\r
      isDefault: false,\r
    },\r
  })\r
\r
  graph.addEdge({\r
    source: node2,\r
    target: node3,\r
    shape: 'flow-edge',\r
    labels: [{ attrs: { text: { text: '完成' } } }],\r
    data: {\r
      lineType: 'normal',\r
      condition: '',\r
      description: '处理完成后结束',\r
      isDefault: true,\r
    },\r
  })\r
}\r
<\/script>\r
\r
<style scoped>\r
.demo-slot-canvas-menu {\r
  display: flex;\r
  height: 100%;\r
  min-height: 500px;\r
  gap: 16px;\r
}\r
\r
.demo-slot-canvas-menu__log {\r
  width: 320px;\r
  border: 1px solid #e8e8e8;\r
  border-radius: 8px;\r
  padding: 16px;\r
  background: #fafafa;\r
  overflow: hidden;\r
  display: flex;\r
  flex-direction: column;\r
}\r
\r
.demo-slot-canvas-menu__log-header {\r
  display: flex;\r
  justify-content: space-between;\r
  align-items: center;\r
  margin-bottom: 12px;\r
}\r
\r
.demo-slot-canvas-menu__log h4 {\r
  margin: 0;\r
  font-size: 14px;\r
  color: #1a1a2e;\r
  font-weight: 600;\r
}\r
\r
.demo-slot-canvas-menu__clear-btn {\r
  padding: 2px 8px;\r
  font-size: 12px;\r
  color: #666;\r
  background: #fff;\r
  border: 1px solid #d9d9d9;\r
  border-radius: 4px;\r
  cursor: pointer;\r
  transition: all 0.2s;\r
  user-select: none;\r
}\r
\r
.demo-slot-canvas-menu__clear-btn:hover {\r
  color: #1890ff;\r
  border-color: #1890ff;\r
}\r
\r
.demo-slot-canvas-menu__log-content {\r
  flex: 1;\r
  overflow-y: auto;\r
  font-size: 12px;\r
  line-height: 1.8;\r
}\r
\r
.demo-slot-canvas-menu__log-item {\r
  padding: 4px 0;\r
  color: #555;\r
  font-family: 'Monaco', 'Menlo', 'Consolas', monospace;\r
  border-bottom: 1px solid #f0f0f0;\r
}\r
\r
.demo-slot-canvas-menu__log-item:last-child {\r
  border-bottom: none;\r
}\r
\r
.demo-slot-canvas-menu__canvas {\r
  flex: 1;\r
  border: 1px solid #e8e8e8;\r
  border-radius: 8px;\r
  overflow: hidden;\r
  background: #fff;\r
  position: relative;\r
}\r
\r
/* ==================== 画布右键菜单样式 ==================== */\r
.canvas-context-menu {\r
  background: #ffffff;\r
  border-radius: 8px;\r
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);\r
  min-width: 220px;\r
  overflow: hidden;\r
  user-select: none;\r
}\r
\r
.canvas-context-menu__header {\r
  padding: 10px 16px;\r
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);\r
  border-bottom: 1px solid #f0f0f0;\r
}\r
\r
.canvas-context-menu__title {\r
  font-size: 13px;\r
  font-weight: 600;\r
  color: #ffffff;\r
  display: flex;\r
  align-items: center;\r
  gap: 6px;\r
}\r
\r
.canvas-context-menu__item {\r
  display: flex;\r
  align-items: center;\r
  gap: 10px;\r
  padding: 10px 16px;\r
  cursor: pointer;\r
  transition: all 0.2s;\r
  position: relative;\r
}\r
\r
.canvas-context-menu__item:hover {\r
  background: #f5f7fa;\r
}\r
\r
.canvas-context-menu__item:active {\r
  background: #e8ecf1;\r
}\r
\r
.canvas-context-menu__item--danger {\r
  color: #ff4d4f;\r
}\r
\r
.canvas-context-menu__item--danger:hover {\r
  background: #fff1f0;\r
}\r
\r
.canvas-context-menu__icon {\r
  font-size: 16px;\r
  width: 20px;\r
  display: flex;\r
  align-items: center;\r
  justify-content: center;\r
  flex-shrink: 0;\r
}\r
\r
.canvas-context-menu__text {\r
  flex: 1;\r
  font-size: 13px;\r
  color: inherit;\r
}\r
\r
.canvas-context-menu__shortcut {\r
  font-size: 11px;\r
  color: #8c8c8c;\r
  background: #f5f5f5;\r
  padding: 2px 6px;\r
  border-radius: 3px;\r
  font-family: 'Monaco', 'Menlo', 'Consolas', monospace;\r
  flex-shrink: 0;\r
}\r
\r
.canvas-context-menu__divider {\r
  height: 1px;\r
  background: #f0f0f0;\r
  margin: 4px 0;\r
}\r
\r
/* 自定义滚动条 */\r
.demo-slot-canvas-menu__log-content::-webkit-scrollbar {\r
  width: 6px;\r
}\r
\r
.demo-slot-canvas-menu__log-content::-webkit-scrollbar-track {\r
  background: #f0f0f0;\r
  border-radius: 3px;\r
}\r
\r
.demo-slot-canvas-menu__log-content::-webkit-scrollbar-thumb {\r
  background: #bfbfbf;\r
  border-radius: 3px;\r
}\r
\r
.demo-slot-canvas-menu__log-content::-webkit-scrollbar-thumb:hover {\r
  background: #999;\r
}\r
</style>\r
`,rs={class:"demo-slot-node-menu"},ts={class:"demo-slot-node-menu__log"},os={class:"demo-slot-node-menu__log-content"},ss={class:"demo-slot-node-menu__canvas"},ls={class:"node-context-menu__header"},is={class:"node-context-menu__title"},as={class:"node-context-menu__info"},ds={class:"node-context-menu__info-item"},cs={class:"node-context-menu__info-value"},ps={class:"node-context-menu__info-item"},gs={class:"node-context-menu__info-value"},fs={key:0,class:"node-context-menu__info-item"},ms={class:"node-context-menu__info-value"},us=["onClick"],hs=["onClick"],bs={key:2,class:"node-context-menu__divider"},vs=["onClick"],_s=["onClick"],xs={key:5,class:"node-context-menu__divider"},ys=["onClick"],ks=["onClick"],ws={key:8,class:"node-context-menu__divider"},Ss=["onClick"],Ns=["onClick"],Cs={key:11,class:"node-context-menu__divider"},Ds=["onClick"],$s=G({__name:"demo-slot-nodeMenu",setup(T){const v=S([]);function a(p){const m=new Date().toLocaleTimeString();v.value.push(`[${m}] ${p}`),setTimeout(()=>{const u=document.querySelector(".demo-slot-node-menu__log-content");u&&(u.scrollTop=u.scrollHeight)},0)}function c(){v.value=[]}function l(p){a("🔧 初始化自定义节点样式..."),J.registerNode("custom-circle",{inherit:"circle",width:100,height:100,attrs:{body:{fill:"#5F95FF",stroke:"#2563EB",strokeWidth:2},label:{fill:"#fff",fontSize:14,fontWeight:500}}},!0),J.registerNode("custom-rect",{inherit:"rect",width:140,height:70,attrs:{body:{fill:"#47C769",stroke:"#27AE60",strokeWidth:2,rx:8,ry:8},label:{fill:"#fff",fontSize:14,fontWeight:500}}},!0),J.registerNode("custom-warning",{inherit:"rect",width:140,height:70,attrs:{body:{fill:"#FFA940",stroke:"#FA8C16",strokeWidth:2,rx:8,ry:8},label:{fill:"#fff",fontSize:14,fontWeight:600}}},!0),a("✅ 节点样式注册完成")}function g(p){const m=p.getProp("label");if(m)return String(m);const u=p.getData();return u!=null&&u.label?u.label:p.id.substring(0,8)+"..."}function x(p,m,u){return u?"多选节点菜单":m?"组节点菜单":"节点菜单"}function s(p,m,u){a(`🖱️ 节点菜单: ${e(p)} - ${g(m)}`),u(p)}function o(p,m){m.centerCell(p,{padding:100,animation:{duration:300,easing:"ease-in-out"}}),a(`🎯 居中显示节点: ${g(p)}`)}function t(p,m){const u=m.getConnectedEdges(p);u.forEach(N=>{N.attr("line/stroke","#FF4D4F"),N.attr("line/strokeWidth",3),setTimeout(()=>{N.attr("line/stroke","#8c9bb5"),N.attr("line/strokeWidth",1.5)},3e3)}),a(`🔗 高亮连线: ${u.length} 条相关连线（3秒后恢复）`)}function e(p){return{group:"成组",ungroup:"解组",copy:"复制节点",paste:"粘贴节点",toFront:"层级前置",toBack:"层级后置",delete:"删除节点"}[p]||p}function i(p,m){a("✅ 画布初始化完成"),r(m),a("✅ 节点初始化完成，请右键节点菜单测试")}function r(p){const m=p.addNode({shape:"custom-circle",x:100,y:100,label:"开始",data:{description:"流程开始节点",owner:"张三",priority:"high"}}),u=p.addNode({shape:"custom-rect",x:300,y:100,label:"处理",data:{description:"执行业务处理",owner:"李四",priority:"medium"}}),N=p.addNode({shape:"custom-circle",x:500,y:100,label:"结束",data:{description:"流程结束",owner:"王五",priority:"low"}});p.addEdge({source:m,target:u,shape:"flow-edge",labels:[{attrs:{text:{text:"通过"}}}],data:{lineType:"normal",condition:'status === "approved"',description:"审批通过后的流转",isDefault:!1}}),p.addEdge({source:u,target:N,shape:"flow-edge",labels:[{attrs:{text:{text:"完成"}}}],data:{lineType:"normal",condition:"",description:"处理完成后结束",isDefault:!0}})}return(p,m)=>(h(),b("div",rs,[n("div",ts,[n("div",{class:"demo-slot-node-menu__log-header"},[m[1]||(m[1]=n("h4",null,"事件日志",-1)),n("button",{class:"demo-slot-node-menu__clear-btn",onClick:c,title:"清除日志"}," 清除 ")]),n("div",os,[(h(!0),b(O,null,H(v.value,(u,N)=>(h(),b("div",{key:N,class:"demo-slot-node-menu__log-item"},D(u),1))),128))])]),n("div",ss,[f(F(V),{mode:"design","before-graph-init":l,onReady:i},{"node-menu":E(({node:u,isGroup:N,isMultiSelect:k,capabilities:d,designer:_,graph:$,onSelect:A})=>[n("div",{class:"node-context-menu",onClick:m[0]||(m[0]=Sn(()=>{},["stop"]))},[n("div",ls,[n("span",is,D(x(u,N,k)),1)]),n("div",as,[n("div",ds,[m[2]||(m[2]=n("span",{class:"node-context-menu__info-label"},"节点名称:",-1)),n("span",cs,D(g(u)),1)]),n("div",ps,[m[3]||(m[3]=n("span",{class:"node-context-menu__info-label"},"节点类型:",-1)),n("span",gs,D(u.shape),1)]),k?(h(),b("div",fs,[m[4]||(m[4]=n("span",{class:"node-context-menu__info-label"},"选中数量:",-1)),n("span",ms,D(($==null?void 0:$.getSelectedCells().length)||0)+" 个",1)])):z("",!0)]),m[14]||(m[14]=n("div",{class:"node-context-menu__divider"},null,-1)),k&&d.canGroup?(h(),b("div",{key:0,class:"node-context-menu__item",onClick:C=>s("group",u,A)},[...m[5]||(m[5]=[n("span",{class:"node-context-menu__icon"},"📦",-1),n("span",{class:"node-context-menu__text"},"成组",-1),n("span",{class:"node-context-menu__shortcut"},"Ctrl+G",-1)])],8,us)):z("",!0),N&&d.canGroup?(h(),b("div",{key:1,class:"node-context-menu__item",onClick:C=>s("ungroup",u,A)},[...m[6]||(m[6]=[n("span",{class:"node-context-menu__icon"},"📂",-1),n("span",{class:"node-context-menu__text"},"解组",-1),n("span",{class:"node-context-menu__shortcut"},"Ctrl+Shift+G",-1)])],8,hs)):z("",!0),(k||N)&&d.canGroup&&(d.canCopy||d.canPaste)?(h(),b("div",bs)):z("",!0),d.canCopy?(h(),b("div",{key:3,class:"node-context-menu__item",onClick:C=>s("copy",u,A)},[...m[7]||(m[7]=[n("span",{class:"node-context-menu__icon"},"📄",-1),n("span",{class:"node-context-menu__text"},"复制节点",-1),n("span",{class:"node-context-menu__shortcut"},"Ctrl+C",-1)])],8,vs)):z("",!0),d.canPaste?(h(),b("div",{key:4,class:"node-context-menu__item",onClick:C=>s("paste",u,A)},[...m[8]||(m[8]=[n("span",{class:"node-context-menu__icon"},"📋",-1),n("span",{class:"node-context-menu__text"},"粘贴节点",-1),n("span",{class:"node-context-menu__shortcut"},"Ctrl+V",-1)])],8,_s)):z("",!0),(d.canCopy||d.canPaste)&&(d.canToFront||d.canToBack)?(h(),b("div",xs)):z("",!0),d.canToFront?(h(),b("div",{key:6,class:"node-context-menu__item",onClick:C=>s("toFront",u,A)},[...m[9]||(m[9]=[n("span",{class:"node-context-menu__icon"},"⬆️",-1),n("span",{class:"node-context-menu__text"},"层级前置",-1)])],8,ys)):z("",!0),d.canToBack?(h(),b("div",{key:7,class:"node-context-menu__item",onClick:C=>s("toBack",u,A)},[...m[10]||(m[10]=[n("span",{class:"node-context-menu__icon"},"⬇️",-1),n("span",{class:"node-context-menu__text"},"层级后置",-1)])],8,ks)):z("",!0),(d.canToFront||d.canToBack)&&$?(h(),b("div",ws)):z("",!0),$&&_?(h(),b("div",{key:9,class:"node-context-menu__item",onClick:C=>o(u,$)},[...m[11]||(m[11]=[n("span",{class:"node-context-menu__icon"},"🎯",-1),n("span",{class:"node-context-menu__text"},"居中显示",-1)])],8,Ss)):z("",!0),$?(h(),b("div",{key:10,class:"node-context-menu__item",onClick:C=>t(u,$)},[...m[12]||(m[12]=[n("span",{class:"node-context-menu__icon"},"🔗",-1),n("span",{class:"node-context-menu__text"},"高亮连线",-1)])],8,Ns)):z("",!0),d.canDelete?(h(),b("div",Cs)):z("",!0),d.canDelete?(h(),b("div",{key:12,class:"node-context-menu__item node-context-menu__item--danger",onClick:C=>s("delete",u,A)},[...m[13]||(m[13]=[n("span",{class:"node-context-menu__icon"},"🗑",-1),n("span",{class:"node-context-menu__text"},"删除节点",-1),n("span",{class:"node-context-menu__shortcut"},"Delete",-1)])],8,Ds)):z("",!0)])]),_:1})])]))}}),Es=U($s,[["__scopeId","data-v-24461e4f"]]),Fs=`\uFEFF<template>\r
  <div class="demo-slot-node-menu">\r
    <!-- 事件日志面板 -->\r
    <div class="demo-slot-node-menu__log">\r
      <div class="demo-slot-node-menu__log-header">\r
        <h4>事件日志</h4>\r
        <button class="demo-slot-node-menu__clear-btn" @click="clearLogs" title="清除日志">\r
          清除\r
        </button>\r
      </div>\r
      <div class="demo-slot-node-menu__log-content">\r
        <div v-for="(log, index) in logs" :key="index" class="demo-slot-node-menu__log-item">\r
          {{ log }}\r
        </div>\r
      </div>\r
    </div>\r
\r
    <!-- 画布容器 -->\r
    <div class="demo-slot-node-menu__canvas">\r
      <FlowDesignerLayout\r
        mode="design"\r
        :before-graph-init="handleBeforeGraphInit"\r
        @ready="handleReady"\r
      >\r
        <!-- 自定义节点右键菜单插槽 -->\r
        <template #node-menu="{ node, isGroup, isMultiSelect, capabilities, designer, graph, onSelect }">\r
          <div class="node-context-menu" @click.stop>\r
            <div class="node-context-menu__header">\r
              <span class="node-context-menu__title">\r
                {{ getNodeTitle(node, isGroup, isMultiSelect) }}\r
              </span>\r
            </div>\r
\r
            <!-- 节点信息显示 -->\r
            <div class="node-context-menu__info">\r
              <div class="node-context-menu__info-item">\r
                <span class="node-context-menu__info-label">节点名称:</span>\r
                <span class="node-context-menu__info-value">{{ getNodeLabel(node) }}</span>\r
              </div>\r
              <div class="node-context-menu__info-item">\r
                <span class="node-context-menu__info-label">节点类型:</span>\r
                <span class="node-context-menu__info-value">{{ node.shape }}</span>\r
              </div>\r
              <div v-if="isMultiSelect" class="node-context-menu__info-item">\r
                <span class="node-context-menu__info-label">选中数量:</span>\r
                <span class="node-context-menu__info-value">{{ graph?.getSelectedCells().length || 0 }} 个</span>\r
              </div>\r
            </div>\r
\r
            <div class="node-context-menu__divider" />\r
\r
            <!-- 成组/解组 -->\r
            <div\r
              v-if="isMultiSelect && capabilities.canGroup"\r
              class="node-context-menu__item"\r
              @click="handleMenuClick('group', node, onSelect)"\r
            >\r
              <span class="node-context-menu__icon">📦</span>\r
              <span class="node-context-menu__text">成组</span>\r
              <span class="node-context-menu__shortcut">Ctrl+G</span>\r
            </div>\r
            <div\r
              v-if="isGroup && capabilities.canGroup"\r
              class="node-context-menu__item"\r
              @click="handleMenuClick('ungroup', node, onSelect)"\r
            >\r
              <span class="node-context-menu__icon">📂</span>\r
              <span class="node-context-menu__text">解组</span>\r
              <span class="node-context-menu__shortcut">Ctrl+Shift+G</span>\r
            </div>\r
\r
            <!-- 分隔线 -->\r
            <div\r
              v-if="((isMultiSelect || isGroup) && capabilities.canGroup) && (capabilities.canCopy || capabilities.canPaste)"\r
              class="node-context-menu__divider"\r
            />\r
\r
            <!-- 复制粘贴 -->\r
            <div\r
              v-if="capabilities.canCopy"\r
              class="node-context-menu__item"\r
              @click="handleMenuClick('copy', node, onSelect)"\r
            >\r
              <span class="node-context-menu__icon">📄</span>\r
              <span class="node-context-menu__text">复制节点</span>\r
              <span class="node-context-menu__shortcut">Ctrl+C</span>\r
            </div>\r
            <div\r
              v-if="capabilities.canPaste"\r
              class="node-context-menu__item"\r
              @click="handleMenuClick('paste', node, onSelect)"\r
            >\r
              <span class="node-context-menu__icon">📋</span>\r
              <span class="node-context-menu__text">粘贴节点</span>\r
              <span class="node-context-menu__shortcut">Ctrl+V</span>\r
            </div>\r
\r
            <!-- 分隔线 -->\r
            <div\r
              v-if="(capabilities.canCopy || capabilities.canPaste) && (capabilities.canToFront || capabilities.canToBack)"\r
              class="node-context-menu__divider"\r
            />\r
\r
            <!-- 层级操作 -->\r
            <div\r
              v-if="capabilities.canToFront"\r
              class="node-context-menu__item"\r
              @click="handleMenuClick('toFront', node, onSelect)"\r
            >\r
              <span class="node-context-menu__icon">⬆️</span>\r
              <span class="node-context-menu__text">层级前置</span>\r
            </div>\r
            <div\r
              v-if="capabilities.canToBack"\r
              class="node-context-menu__item"\r
              @click="handleMenuClick('toBack', node, onSelect)"\r
            >\r
              <span class="node-context-menu__icon">⬇️</span>\r
              <span class="node-context-menu__text">层级后置</span>\r
            </div>\r
\r
            <!-- 分隔线 -->\r
            <div\r
              v-if="(capabilities.canToFront || capabilities.canToBack) && graph"\r
              class="node-context-menu__divider"\r
            />\r
\r
            <!-- 自定义操作（使用 designer 和 graph） -->\r
            <div\r
              v-if="graph && designer"\r
              class="node-context-menu__item"\r
              @click="handleCenterNode(node, graph)"\r
            >\r
              <span class="node-context-menu__icon">🎯</span>\r
              <span class="node-context-menu__text">居中显示</span>\r
            </div>\r
            <div\r
              v-if="graph"\r
              class="node-context-menu__item"\r
              @click="handleHighlightConnections(node, graph)"\r
            >\r
              <span class="node-context-menu__icon">🔗</span>\r
              <span class="node-context-menu__text">高亮连线</span>\r
            </div>\r
\r
            <!-- 分隔线 -->\r
            <div\r
              v-if="capabilities.canDelete"\r
              class="node-context-menu__divider"\r
            />\r
\r
            <!-- 删除 -->\r
            <div\r
              v-if="capabilities.canDelete"\r
              class="node-context-menu__item node-context-menu__item--danger"\r
              @click="handleMenuClick('delete', node, onSelect)"\r
            >\r
              <span class="node-context-menu__icon">🗑</span>\r
              <span class="node-context-menu__text">删除节点</span>\r
              <span class="node-context-menu__shortcut">Delete</span>\r
            </div>\r
          </div>\r
        </template>\r
      </FlowDesignerLayout>\r
    </div>\r
  </div>\r
</template>\r
\r
<script setup lang="ts">\r
import { ref } from 'vue'\r
import { FlowDesignerLayout }  from '@quick-code/x6-flow-designer'\r
import type { FlowDesigner, FlowDesignerOptions } from '@quick-code/x6-flow-designer'\r
import { Graph, Node } from '@antv/x6'\r
\r
const logs = ref<string[]>([])\r
let designerInstance: FlowDesigner | null = null\r
let graphInstance: Graph | null = null\r
\r
function addLog(message: string) {\r
  const timestamp = new Date().toLocaleTimeString()\r
  logs.value.push(\`[\${timestamp}] \${message}\`)\r
  // 自动滚动到底部\r
  setTimeout(() => {\r
    const logContent = document.querySelector('.demo-slot-node-menu__log-content')\r
    if (logContent) {\r
      logContent.scrollTop = logContent.scrollHeight\r
    }\r
  }, 0)\r
}\r
\r
function clearLogs() {\r
  logs.value = []\r
}\r
\r
/**\r
 * Graph 初始化前注册自定义节点\r
 */\r
function handleBeforeGraphInit(options: FlowDesignerOptions) {\r
  addLog('🔧 初始化自定义节点样式...')\r
\r
  // 注册自定义圆形节点\r
  Graph.registerNode('custom-circle', {\r
    inherit: 'circle',\r
    width: 100,\r
    height: 100,\r
    attrs: {\r
      body: {\r
        fill: '#5F95FF',\r
        stroke: '#2563EB',\r
        strokeWidth: 2,\r
      },\r
      label: {\r
        fill: '#fff',\r
        fontSize: 14,\r
        fontWeight: 500,\r
      },\r
    },\r
  }, true)\r
\r
  // 注册自定义矩形节点\r
  Graph.registerNode('custom-rect', {\r
    inherit: 'rect',\r
    width: 140,\r
    height: 70,\r
    attrs: {\r
      body: {\r
        fill: '#47C769',\r
        stroke: '#27AE60',\r
        strokeWidth: 2,\r
        rx: 8,\r
        ry: 8,\r
      },\r
      label: {\r
        fill: '#fff',\r
        fontSize: 14,\r
        fontWeight: 500,\r
      },\r
    },\r
  }, true)\r
\r
  // 注册自定义警告节点\r
  Graph.registerNode('custom-warning', {\r
    inherit: 'rect',\r
    width: 140,\r
    height: 70,\r
    attrs: {\r
      body: {\r
        fill: '#FFA940',\r
        stroke: '#FA8C16',\r
        strokeWidth: 2,\r
        rx: 8,\r
        ry: 8,\r
      },\r
      label: {\r
        fill: '#fff',\r
        fontSize: 14,\r
        fontWeight: 600,\r
      },\r
    },\r
  }, true)\r
\r
  addLog('✅ 节点样式注册完成')\r
}\r
\r
/**\r
 * 获取节点标签\r
 */\r
function getNodeLabel(node: Node): string {\r
  const propLabel = node.getProp('label')\r
  if (propLabel) return String(propLabel)\r
\r
  const data = node.getData()\r
  if (data?.label) return data.label\r
\r
  return node.id.substring(0, 8) + '...'\r
}\r
\r
/**\r
 * 获取节点菜单标题\r
 */\r
function getNodeTitle(node: Node, isGroup: boolean, isMultiSelect: boolean): string {\r
  if (isMultiSelect) return '多选节点菜单'\r
  if (isGroup) return '组节点菜单'\r
  return '节点菜单'\r
}\r
\r
/**\r
 * 处理菜单项点击\r
 */\r
function handleMenuClick(action: string, node: Node, onSelect: (action: string) => void) {\r
  addLog(\`🖱️ 节点菜单: \${getActionName(action)} - \${getNodeLabel(node)}\`)\r
  onSelect(action)\r
}\r
\r
/**\r
 * 居中显示节点（自定义操作，使用 graph）\r
 */\r
function handleCenterNode(node: Node, graph: Graph) {\r
  graph.centerCell(node, {\r
    padding: 100,\r
    animation: {\r
      duration: 300,\r
      easing: 'ease-in-out'\r
    }\r
  })\r
  addLog(\`🎯 居中显示节点: \${getNodeLabel(node)}\`)\r
}\r
\r
/**\r
 * 高亮节点的所有连线（自定义操作，使用 graph）\r
 */\r
function handleHighlightConnections(node: Node, graph: Graph) {\r
  // 获取所有相关连线\r
  const edges = graph.getConnectedEdges(node)\r
\r
  // 高亮连线\r
  edges.forEach(edge => {\r
    edge.attr('line/stroke', '#FF4D4F')\r
    edge.attr('line/strokeWidth', 3)\r
\r
    // 3秒后恢复\r
    setTimeout(() => {\r
      edge.attr('line/stroke', '#8c9bb5')\r
      edge.attr('line/strokeWidth', 1.5)\r
    }, 3000)\r
  })\r
\r
  addLog(\`🔗 高亮连线: \${edges.length} 条相关连线（3秒后恢复）\`)\r
}\r
\r
/**\r
 * 获取操作名称（用于日志显示）\r
 */\r
function getActionName(action: string): string {\r
  const actionMap: Record<string, string> = {\r
    'group': '成组',\r
    'ungroup': '解组',\r
    'copy': '复制节点',\r
    'paste': '粘贴节点',\r
    'toFront': '层级前置',\r
    'toBack': '层级后置',\r
    'delete': '删除节点',\r
  }\r
  return actionMap[action] || action\r
}\r
\r
function handleReady(designer: FlowDesigner, graph: Graph) {\r
  designerInstance = designer\r
  graphInstance = graph\r
  addLog('✅ 画布初始化完成')\r
\r
  // 初始化测试数据\r
  initTestData(graph)\r
  addLog('✅ 节点初始化完成，请右键节点菜单测试')\r
}\r
function initTestData(graph) {\r
\r
  // 添加初始节点\r
  const node1 = graph.addNode({\r
    shape: 'custom-circle',\r
    x: 100,\r
    y: 100,\r
    label: '开始',\r
    data: {\r
      description: '流程开始节点',\r
      owner: '张三',\r
      priority: 'high',\r
    },\r
  })\r
\r
  const node2 = graph.addNode({\r
    shape: 'custom-rect',\r
    x: 300,\r
    y: 100,\r
    label: '处理',\r
    data: {\r
      description: '执行业务处理',\r
      owner: '李四',\r
      priority: 'medium',\r
    },\r
  })\r
\r
  const node3 = graph.addNode({\r
    shape: 'custom-circle',\r
    x: 500,\r
    y: 100,\r
    label: '结束',\r
    data: {\r
      description: '流程结束',\r
      owner: '王五',\r
      priority: 'low',\r
    },\r
  })\r
\r
  // 添加连线\r
  graph.addEdge({\r
    source: node1,\r
    target: node2,\r
    shape: 'flow-edge',\r
    labels: [{ attrs: { text: { text: '通过' } } }],\r
    data: {\r
      lineType: 'normal',\r
      condition: 'status === "approved"',\r
      description: '审批通过后的流转',\r
      isDefault: false,\r
    },\r
  })\r
\r
  graph.addEdge({\r
    source: node2,\r
    target: node3,\r
    shape: 'flow-edge',\r
    labels: [{ attrs: { text: { text: '完成' } } }],\r
    data: {\r
      lineType: 'normal',\r
      condition: '',\r
      description: '处理完成后结束',\r
      isDefault: true,\r
    },\r
  })\r
}\r
<\/script>\r
\r
<style scoped>\r
.demo-slot-node-menu {\r
  display: flex;\r
  height: 100%;\r
  min-height: 500px;\r
  gap: 16px;\r
}\r
\r
.demo-slot-node-menu__log {\r
  width: 320px;\r
  border: 1px solid #e8e8e8;\r
  border-radius: 8px;\r
  padding: 16px;\r
  background: #fafafa;\r
  overflow: hidden;\r
  display: flex;\r
  flex-direction: column;\r
}\r
\r
.demo-slot-node-menu__log-header {\r
  display: flex;\r
  justify-content: space-between;\r
  align-items: center;\r
  margin-bottom: 12px;\r
}\r
\r
.demo-slot-node-menu__log h4 {\r
  margin: 0;\r
  font-size: 14px;\r
  color: #1a1a2e;\r
  font-weight: 600;\r
}\r
\r
.demo-slot-node-menu__clear-btn {\r
  padding: 2px 8px;\r
  font-size: 12px;\r
  color: #666;\r
  background: #fff;\r
  border: 1px solid #d9d9d9;\r
  border-radius: 4px;\r
  cursor: pointer;\r
  transition: all 0.2s;\r
  user-select: none;\r
}\r
\r
.demo-slot-node-menu__clear-btn:hover {\r
  color: #1890ff;\r
  border-color: #1890ff;\r
}\r
\r
.demo-slot-node-menu__log-content {\r
  flex: 1;\r
  overflow-y: auto;\r
  font-size: 12px;\r
  line-height: 1.8;\r
}\r
\r
.demo-slot-node-menu__log-item {\r
  padding: 4px 0;\r
  color: #555;\r
  font-family: 'Monaco', 'Menlo', 'Consolas', monospace;\r
  border-bottom: 1px solid #f0f0f0;\r
}\r
\r
.demo-slot-node-menu__log-item:last-child {\r
  border-bottom: none;\r
}\r
\r
.demo-slot-node-menu__canvas {\r
  flex: 1;\r
  border: 1px solid #e8e8e8;\r
  border-radius: 8px;\r
  overflow: hidden;\r
  background: #fff;\r
  position: relative;\r
}\r
\r
/* ==================== 节点右键菜单样式 ==================== */\r
.node-context-menu {\r
  background: #ffffff;\r
  border-radius: 8px;\r
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);\r
  min-width: 240px;\r
  overflow: hidden;\r
  user-select: none;\r
}\r
\r
.node-context-menu__header {\r
  padding: 10px 16px;\r
  background: linear-gradient(135deg, #FF6B6B 0%, #FF8E53 100%);\r
  border-bottom: 1px solid #f0f0f0;\r
}\r
\r
.node-context-menu__title {\r
  font-size: 13px;\r
  font-weight: 600;\r
  color: #ffffff;\r
  display: flex;\r
  align-items: center;\r
  gap: 6px;\r
}\r
\r
.node-context-menu__info {\r
  padding: 8px 16px;\r
  background: #f9fafb;\r
}\r
\r
.node-context-menu__info-item {\r
  display: flex;\r
  justify-content: space-between;\r
  align-items: center;\r
  padding: 4px 0;\r
  font-size: 12px;\r
}\r
\r
.node-context-menu__info-label {\r
  color: #8c8c8c;\r
  flex-shrink: 0;\r
  margin-right: 12px;\r
}\r
\r
.node-context-menu__info-value {\r
  color: #262626;\r
  font-weight: 500;\r
  text-align: right;\r
  overflow: hidden;\r
  text-overflow: ellipsis;\r
  white-space: nowrap;\r
}\r
\r
.node-context-menu__item {\r
  display: flex;\r
  align-items: center;\r
  gap: 10px;\r
  padding: 10px 16px;\r
  cursor: pointer;\r
  transition: all 0.2s;\r
  position: relative;\r
}\r
\r
.node-context-menu__item:hover {\r
  background: #f5f7fa;\r
}\r
\r
.node-context-menu__item:active {\r
  background: #e8ecf1;\r
}\r
\r
.node-context-menu__item--danger {\r
  color: #ff4d4f;\r
}\r
\r
.node-context-menu__item--danger:hover {\r
  background: #fff1f0;\r
}\r
\r
.node-context-menu__icon {\r
  font-size: 16px;\r
  width: 20px;\r
  display: flex;\r
  align-items: center;\r
  justify-content: center;\r
  flex-shrink: 0;\r
}\r
\r
.node-context-menu__text {\r
  flex: 1;\r
  font-size: 13px;\r
  color: inherit;\r
}\r
\r
.node-context-menu__shortcut {\r
  font-size: 11px;\r
  color: #8c8c8c;\r
  background: #f5f5f5;\r
  padding: 2px 6px;\r
  border-radius: 3px;\r
  font-family: 'Monaco', 'Menlo', 'Consolas', monospace;\r
  flex-shrink: 0;\r
}\r
\r
.node-context-menu__divider {\r
  height: 1px;\r
  background: #f0f0f0;\r
  margin: 4px 0;\r
}\r
\r
/* 自定义滚动条 */\r
.demo-slot-node-menu__log-content::-webkit-scrollbar {\r
  width: 6px;\r
}\r
\r
.demo-slot-node-menu__log-content::-webkit-scrollbar-track {\r
  background: #f0f0f0;\r
  border-radius: 3px;\r
}\r
\r
.demo-slot-node-menu__log-content::-webkit-scrollbar-thumb {\r
  background: #bfbfbf;\r
  border-radius: 3px;\r
}\r
\r
.demo-slot-node-menu__log-content::-webkit-scrollbar-thumb:hover {\r
  background: #999;\r
}\r
</style>\r
`,Ls={class:"demo-slot-edge-menu"},Ts={class:"demo-slot-edge-menu__log"},Rs={class:"demo-slot-edge-menu__log-content"},zs={class:"demo-slot-edge-menu__canvas"},As={class:"edge-context-menu__info"},Ms={class:"edge-context-menu__info-item"},Ws={class:"edge-context-menu__info-value"},Is={class:"edge-context-menu__info-item"},Ps={class:"edge-context-menu__info-value"},Gs={class:"edge-context-menu__info-item"},Os={class:"edge-context-menu__info-value"},Hs={class:"edge-context-menu__info-item"},Bs={class:"edge-context-menu__info-value"},Vs=["onClick"],Us=["onClick"],Zs=["onClick"],qs=["onClick"],js=["onClick"],Ys=["onClick"],Xs=["onClick"],Js={key:0,class:"edge-context-menu__divider"},Ks=["onClick"],Qs=["onClick"],nl=["onClick"],el={key:4,class:"edge-context-menu__divider"},rl=["onClick"],tl=G({__name:"demo-slot-edgeMenu",setup(T){const v=S([]);function a(k){const d=new Date().toLocaleTimeString();v.value.push(`[${d}] ${k}`),setTimeout(()=>{const _=document.querySelector(".demo-slot-edge-menu__log-content");_&&(_.scrollTop=_.scrollHeight)},0)}function c(){v.value=[]}function l(k){a("🔧 初始化自定义节点样式..."),J.registerNode("custom-circle",{inherit:"circle",width:100,height:100,attrs:{body:{fill:"#5F95FF",stroke:"#2563EB",strokeWidth:2},label:{fill:"#fff",fontSize:14,fontWeight:500}}},!0),J.registerNode("custom-rect",{inherit:"rect",width:140,height:70,attrs:{body:{fill:"#47C769",stroke:"#27AE60",strokeWidth:2,rx:8,ry:8},label:{fill:"#fff",fontSize:14,fontWeight:500}}},!0)}function g(k){var _,$;const d=k.getLabels();return d&&d.length>0&&(($=(_=d[0].attrs)==null?void 0:_.text)==null?void 0:$.text)||"无标签"}function x(k){const d=k.getSourceNode();if(d){const _=d.getProp("label");return _?String(_):d.id.substring(0,8)+"..."}return"未知"}function s(k){const d=k.getTargetNode();if(d){const _=d.getProp("label");return _?String(_):d.id.substring(0,8)+"..."}return"未知"}function o(k,d,_){a(`🖱️ 连线菜单: 删除连线 - ${g(d)}`),_(k)}function t(k,d){const _=g(k),$=prompt("请输入新的标签:",_==="无标签"?"":_);$!==null&&d&&(d.updateEdgeLabelText(k,$),a(`✏️ 编辑标签: ${_} → ${$}`))}function e(k,d){const _={normal:{name:"normal"},smooth:{name:"smooth"},rounded:{name:"rounded",args:{radius:10}}};k.setConnector(_[d]),a(`━ 样式修改: ${{normal:"直线",smooth:"平滑曲线",rounded:"圆角折线"}[d]} - ${g(k)}`)}function i(k,d,_){k.attr("line/stroke",d),k.attr("line/strokeWidth",2),a(`● 颜色修改: ${_} - ${g(k)}`)}function r(k,d){d.centerCell(k,{padding:100,animation:{duration:300,easing:"ease-in-out"}}),a(`🎯 居中显示连线: ${g(k)}`)}function p(k,d){const _=k.getSourceNode(),$=k.getTargetNode(),A=k.attr("line/stroke")||"#8c9bb5",C=k.attr("line/strokeWidth")||1.5;k.attr("line/stroke","#FF4D4F"),k.attr("line/strokeWidth",3),_&&(_.attr("body/stroke","#FF4D4F"),_.attr("body/strokeWidth",3)),$&&($.attr("body/stroke","#FF4D4F"),$.attr("body/strokeWidth",3)),a(`✨ 高亮路径: ${x(k)} → ${s(k)}`),setTimeout(()=>{k.attr("line/stroke",A),k.attr("line/strokeWidth",C),_&&(_.attr("body/stroke","#27AE60"),_.attr("body/strokeWidth",2)),$&&($.attr("body/stroke","#27AE60"),$.attr("body/strokeWidth",2)),a("⏰ 高亮已恢复")},3e3)}function m(k,d){const _=k.getSource(),$=k.getTarget();k.getLabels(),k.setSource($),k.setTarget(_),a(`🔄 反转连线: ${x(k)} ⇄ ${s(k)}`)}function u(k,d){d=k.getGraph(),a("FlowDesigner 初始化完成"),a("✨ 将鼠标悬停在节点上查看自定义 Tooltip"),N(d)}function N(k){const d=k.addNode({shape:"custom-circle",x:100,y:100,label:"开始",data:{description:"流程开始节点",owner:"张三",priority:"high"}}),_=k.addNode({shape:"custom-rect",x:300,y:100,label:"处理",data:{description:"执行业务处理",owner:"李四",priority:"medium"}}),$=k.addNode({shape:"custom-circle",x:500,y:100,label:"结束",data:{description:"流程结束",owner:"王五",priority:"low"}});k.addEdge({source:d,target:_,shape:"flow-edge",labels:[{attrs:{text:{text:"通过"}}}],data:{lineType:"normal",condition:'status === "approved"',description:"审批通过后的流转",isDefault:!1}}),k.addEdge({source:_,target:$,shape:"flow-edge",labels:[{attrs:{text:{text:"完成"}}}],data:{lineType:"normal",condition:"",description:"处理完成后结束",isDefault:!0}})}return(k,d)=>(h(),b("div",Ls,[n("div",Ts,[n("div",{class:"demo-slot-edge-menu__log-header"},[d[1]||(d[1]=n("h4",null,"事件日志",-1)),n("button",{class:"demo-slot-edge-menu__clear-btn",onClick:c,title:"清除日志"}," 清除 ")]),n("div",Rs,[(h(!0),b(O,null,H(v.value,(_,$)=>(h(),b("div",{key:$,class:"demo-slot-edge-menu__log-item"},D(_),1))),128))])]),n("div",zs,[f(F(V),{mode:"design","before-graph-init":l,onReady:u},{"edge-menu":E(({edge:_,capabilities:$,designer:A,graph:C,onSelect:L})=>[n("div",{class:"edge-context-menu",onClick:d[0]||(d[0]=Sn(()=>{},["stop"]))},[d[17]||(d[17]=n("div",{class:"edge-context-menu__header"},[n("span",{class:"edge-context-menu__title"},"连线菜单")],-1)),n("div",As,[n("div",Ms,[d[2]||(d[2]=n("span",{class:"edge-context-menu__info-label"},"连线标签:",-1)),n("span",Ws,D(g(_)),1)]),n("div",Is,[d[3]||(d[3]=n("span",{class:"edge-context-menu__info-label"},"源节点:",-1)),n("span",Ps,D(x(_)),1)]),n("div",Gs,[d[4]||(d[4]=n("span",{class:"edge-context-menu__info-label"},"目标节点:",-1)),n("span",Os,D(s(_)),1)]),n("div",Hs,[d[5]||(d[5]=n("span",{class:"edge-context-menu__info-label"},"连线类型:",-1)),n("span",Bs,D(_.shape),1)])]),d[18]||(d[18]=n("div",{class:"edge-context-menu__divider"},null,-1)),n("div",{class:"edge-context-menu__item",onClick:M=>t(_,A)},[...d[6]||(d[6]=[n("span",{class:"edge-context-menu__icon"},"✏️",-1),n("span",{class:"edge-context-menu__text"},"编辑标签",-1)])],8,Vs),d[19]||(d[19]=n("div",{class:"edge-context-menu__divider"},null,-1)),n("div",{class:"edge-context-menu__item",onClick:M=>e(_,"normal")},[...d[7]||(d[7]=[n("span",{class:"edge-context-menu__icon"},"━",-1),n("span",{class:"edge-context-menu__text"},"直线样式",-1)])],8,Us),n("div",{class:"edge-context-menu__item",onClick:M=>e(_,"smooth")},[...d[8]||(d[8]=[n("span",{class:"edge-context-menu__icon"},"〰️",-1),n("span",{class:"edge-context-menu__text"},"平滑曲线",-1)])],8,Zs),n("div",{class:"edge-context-menu__item",onClick:M=>e(_,"rounded")},[...d[9]||(d[9]=[n("span",{class:"edge-context-menu__icon"},"⌝",-1),n("span",{class:"edge-context-menu__text"},"圆角折线",-1)])],8,qs),d[20]||(d[20]=n("div",{class:"edge-context-menu__divider"},null,-1)),n("div",{class:"edge-context-menu__item",onClick:M=>i(_,"#1890ff","蓝色")},[...d[10]||(d[10]=[n("span",{class:"edge-context-menu__icon",style:{color:"#1890ff"}},"●",-1),n("span",{class:"edge-context-menu__text"},"蓝色连线",-1)])],8,js),n("div",{class:"edge-context-menu__item",onClick:M=>i(_,"#52c41a","绿色")},[...d[11]||(d[11]=[n("span",{class:"edge-context-menu__icon",style:{color:"#52c41a"}},"●",-1),n("span",{class:"edge-context-menu__text"},"绿色连线",-1)])],8,Ys),n("div",{class:"edge-context-menu__item",onClick:M=>i(_,"#ff4d4f","红色")},[...d[12]||(d[12]=[n("span",{class:"edge-context-menu__icon",style:{color:"#ff4d4f"}},"●",-1),n("span",{class:"edge-context-menu__text"},"红色连线",-1)])],8,Xs),C?(h(),b("div",Js)):z("",!0),C?(h(),b("div",{key:1,class:"edge-context-menu__item",onClick:M=>r(_,C)},[...d[13]||(d[13]=[n("span",{class:"edge-context-menu__icon"},"🎯",-1),n("span",{class:"edge-context-menu__text"},"居中显示",-1)])],8,Ks)):z("",!0),C?(h(),b("div",{key:2,class:"edge-context-menu__item",onClick:M=>p(_,C)},[...d[14]||(d[14]=[n("span",{class:"edge-context-menu__icon"},"✨",-1),n("span",{class:"edge-context-menu__text"},"高亮路径",-1)])],8,Qs)):z("",!0),C?(h(),b("div",{key:3,class:"edge-context-menu__item",onClick:M=>m(_,C)},[...d[15]||(d[15]=[n("span",{class:"edge-context-menu__icon"},"🔄",-1),n("span",{class:"edge-context-menu__text"},"反转连线",-1)])],8,nl)):z("",!0),$.canDelete?(h(),b("div",el)):z("",!0),$.canDelete?(h(),b("div",{key:5,class:"edge-context-menu__item edge-context-menu__item--danger",onClick:M=>o("delete",_,L)},[...d[16]||(d[16]=[n("span",{class:"edge-context-menu__icon"},"🗑",-1),n("span",{class:"edge-context-menu__text"},"删除连线",-1),n("span",{class:"edge-context-menu__shortcut"},"Delete",-1)])],8,rl)):z("",!0)])]),_:1})])]))}}),ol=U(tl,[["__scopeId","data-v-8b7c70a6"]]),sl=`\uFEFF<template>\r
  <div class="demo-slot-edge-menu">\r
    <!-- 事件日志面板 -->\r
    <div class="demo-slot-edge-menu__log">\r
      <div class="demo-slot-edge-menu__log-header">\r
        <h4>事件日志</h4>\r
        <button class="demo-slot-edge-menu__clear-btn" @click="clearLogs" title="清除日志">\r
          清除\r
        </button>\r
      </div>\r
      <div class="demo-slot-edge-menu__log-content">\r
        <div v-for="(log, index) in logs" :key="index" class="demo-slot-edge-menu__log-item">\r
          {{ log }}\r
        </div>\r
      </div>\r
    </div>\r
\r
    <!-- 画布容器 -->\r
    <div class="demo-slot-edge-menu__canvas">\r
      <FlowDesignerLayout\r
        mode="design"\r
        :before-graph-init="handleBeforeGraphInit"\r
        @ready="handleReady"\r
      >\r
        <!-- 自定义连线右键菜单插槽 -->\r
        <template #edge-menu="{ edge, capabilities, designer, graph, onSelect }">\r
          <div class="edge-context-menu" @click.stop>\r
            <div class="edge-context-menu__header">\r
              <span class="edge-context-menu__title">连线菜单</span>\r
            </div>\r
\r
            <!-- 连线信息显示 -->\r
            <div class="edge-context-menu__info">\r
              <div class="edge-context-menu__info-item">\r
                <span class="edge-context-menu__info-label">连线标签:</span>\r
                <span class="edge-context-menu__info-value">{{ getEdgeLabel(edge) }}</span>\r
              </div>\r
              <div class="edge-context-menu__info-item">\r
                <span class="edge-context-menu__info-label">源节点:</span>\r
                <span class="edge-context-menu__info-value">{{ getEdgeSourceLabel(edge) }}</span>\r
              </div>\r
              <div class="edge-context-menu__info-item">\r
                <span class="edge-context-menu__info-label">目标节点:</span>\r
                <span class="edge-context-menu__info-value">{{ getEdgeTargetLabel(edge) }}</span>\r
              </div>\r
              <div class="edge-context-menu__info-item">\r
                <span class="edge-context-menu__info-label">连线类型:</span>\r
                <span class="edge-context-menu__info-value">{{ edge.shape }}</span>\r
              </div>\r
            </div>\r
\r
            <div class="edge-context-menu__divider" />\r
\r
            <!-- 编辑标签 -->\r
            <div\r
              class="edge-context-menu__item"\r
              @click="handleEditLabel(edge, designer)"\r
            >\r
              <span class="edge-context-menu__icon">✏️</span>\r
              <span class="edge-context-menu__text">编辑标签</span>\r
            </div>\r
\r
            <!-- 分隔线 -->\r
            <div class="edge-context-menu__divider" />\r
\r
            <!-- 样式操作（使用 edge 直接修改） -->\r
            <div\r
              class="edge-context-menu__item"\r
              @click="handleChangeStyle(edge, 'normal')"\r
            >\r
              <span class="edge-context-menu__icon">━</span>\r
              <span class="edge-context-menu__text">直线样式</span>\r
            </div>\r
            <div\r
              class="edge-context-menu__item"\r
              @click="handleChangeStyle(edge, 'smooth')"\r
            >\r
              <span class="edge-context-menu__icon">〰️</span>\r
              <span class="edge-context-menu__text">平滑曲线</span>\r
            </div>\r
            <div\r
              class="edge-context-menu__item"\r
              @click="handleChangeStyle(edge, 'rounded')"\r
            >\r
              <span class="edge-context-menu__icon">⌝</span>\r
              <span class="edge-context-menu__text">圆角折线</span>\r
            </div>\r
\r
            <!-- 分隔线 -->\r
            <div class="edge-context-menu__divider" />\r
\r
            <!-- 颜色操作 -->\r
            <div\r
              class="edge-context-menu__item"\r
              @click="handleChangeColor(edge, '#1890ff', '蓝色')"\r
            >\r
              <span class="edge-context-menu__icon" style="color: #1890ff;">●</span>\r
              <span class="edge-context-menu__text">蓝色连线</span>\r
            </div>\r
            <div\r
              class="edge-context-menu__item"\r
              @click="handleChangeColor(edge, '#52c41a', '绿色')"\r
            >\r
              <span class="edge-context-menu__icon" style="color: #52c41a;">●</span>\r
              <span class="edge-context-menu__text">绿色连线</span>\r
            </div>\r
            <div\r
              class="edge-context-menu__item"\r
              @click="handleChangeColor(edge, '#ff4d4f', '红色')"\r
            >\r
              <span class="edge-context-menu__icon" style="color: #ff4d4f;">●</span>\r
              <span class="edge-context-menu__text">红色连线</span>\r
            </div>\r
\r
            <!-- 分隔线 -->\r
            <div v-if="graph" class="edge-context-menu__divider" />\r
\r
            <!-- 自定义操作（使用 graph） -->\r
            <div\r
              v-if="graph"\r
              class="edge-context-menu__item"\r
              @click="handleCenterEdge(edge, graph)"\r
            >\r
              <span class="edge-context-menu__icon">🎯</span>\r
              <span class="edge-context-menu__text">居中显示</span>\r
            </div>\r
            <div\r
              v-if="graph"\r
              class="edge-context-menu__item"\r
              @click="handleHighlightPath(edge, graph)"\r
            >\r
              <span class="edge-context-menu__icon">✨</span>\r
              <span class="edge-context-menu__text">高亮路径</span>\r
            </div>\r
            <div\r
              v-if="graph"\r
              class="edge-context-menu__item"\r
              @click="handleReverseEdge(edge, graph)"\r
            >\r
              <span class="edge-context-menu__icon">🔄</span>\r
              <span class="edge-context-menu__text">反转连线</span>\r
            </div>\r
\r
            <!-- 分隔线 -->\r
            <div\r
              v-if="capabilities.canDelete"\r
              class="edge-context-menu__divider"\r
            />\r
\r
            <!-- 删除 -->\r
            <div\r
              v-if="capabilities.canDelete"\r
              class="edge-context-menu__item edge-context-menu__item--danger"\r
              @click="handleMenuClick('delete', edge, onSelect)"\r
            >\r
              <span class="edge-context-menu__icon">🗑</span>\r
              <span class="edge-context-menu__text">删除连线</span>\r
              <span class="edge-context-menu__shortcut">Delete</span>\r
            </div>\r
          </div>\r
        </template>\r
      </FlowDesignerLayout>\r
    </div>\r
  </div>\r
</template>\r
\r
<script setup lang="ts">\r
import { ref } from 'vue'\r
import { FlowDesignerLayout }  from '@quick-code/x6-flow-designer'\r
import type { FlowDesigner, FlowDesignerOptions } from '@quick-code/x6-flow-designer'\r
import { Graph, Edge } from '@antv/x6'\r
\r
const logs = ref<string[]>([])\r
let designerInstance: FlowDesigner | null = null\r
let graphInstance: Graph | null = null\r
\r
function addLog(message: string) {\r
  const timestamp = new Date().toLocaleTimeString()\r
  logs.value.push(\`[\${timestamp}] \${message}\`)\r
  // 自动滚动到底部\r
  setTimeout(() => {\r
    const logContent = document.querySelector('.demo-slot-edge-menu__log-content')\r
    if (logContent) {\r
      logContent.scrollTop = logContent.scrollHeight\r
    }\r
  }, 0)\r
}\r
\r
function clearLogs() {\r
  logs.value = []\r
}\r
\r
/**\r
 * Graph 初始化前注册自定义节点\r
 */\r
function handleBeforeGraphInit(options: FlowDesignerOptions) {\r
  addLog('🔧 初始化自定义节点样式...')\r
\r
  // 注册自定义节点：蓝色圆形\r
  Graph.registerNode('custom-circle', {\r
    inherit: 'circle',\r
    width: 100,\r
    height: 100,\r
    attrs: {\r
      body: {\r
        fill: '#5F95FF',\r
        stroke: '#2563EB',\r
        strokeWidth: 2,\r
      },\r
      label: {\r
        fill: '#fff',\r
        fontSize: 14,\r
        fontWeight: 500,\r
      },\r
    },\r
  }, true)\r
\r
  Graph.registerNode('custom-rect', {\r
    inherit: 'rect',\r
    width: 140,\r
    height: 70,\r
    attrs: {\r
      body: {\r
        fill: '#47C769',\r
        stroke: '#27AE60',\r
        strokeWidth: 2,\r
        rx: 8,\r
        ry: 8,\r
      },\r
      label: {\r
        fill: '#fff',\r
        fontSize: 14,\r
        fontWeight: 500,\r
      },\r
    },\r
  }, true)\r
}\r
\r
/**\r
 * 获取连线标签\r
 */\r
function getEdgeLabel(edge: Edge): string {\r
  const labels = edge.getLabels()\r
  if (labels && labels.length > 0) {\r
    return labels[0].attrs?.text?.text || '无标签'\r
  }\r
  return '无标签'\r
}\r
\r
/**\r
 * 获取源节点标签\r
 */\r
function getEdgeSourceLabel(edge: Edge): string {\r
  const sourceNode = edge.getSourceNode()\r
  if (sourceNode) {\r
    const label = sourceNode.getProp('label')\r
    return label ? String(label) : sourceNode.id.substring(0, 8) + '...'\r
  }\r
  return '未知'\r
}\r
\r
/**\r
 * 获取目标节点标签\r
 */\r
function getEdgeTargetLabel(edge: Edge): string {\r
  const targetNode = edge.getTargetNode()\r
  if (targetNode) {\r
    const label = targetNode.getProp('label')\r
    return label ? String(label) : targetNode.id.substring(0, 8) + '...'\r
  }\r
  return '未知'\r
}\r
\r
/**\r
 * 处理菜单项点击\r
 */\r
function handleMenuClick(action: string, edge: Edge, onSelect: (action: string) => void) {\r
  addLog(\`🖱️ 连线菜单: 删除连线 - \${getEdgeLabel(edge)}\`)\r
  onSelect(action)\r
}\r
\r
/**\r
 * 编辑标签（使用 designer）\r
 */\r
function handleEditLabel(edge: Edge, designer: FlowDesigner | null) {\r
  const currentLabel = getEdgeLabel(edge)\r
  const newLabel = prompt('请输入新的标签:', currentLabel === '无标签' ? '' : currentLabel)\r
\r
  if (newLabel !== null && designer) {\r
    designer.updateEdgeLabelText(edge, newLabel)\r
    addLog(\`✏️ 编辑标签: \${currentLabel} → \${newLabel}\`)\r
  }\r
}\r
\r
/**\r
 * 修改连线样式\r
 */\r
function handleChangeStyle(edge: Edge, connectorType: 'normal' | 'smooth' | 'rounded') {\r
  const connectorMap = {\r
    'normal': { name: 'normal' },\r
    'smooth': { name: 'smooth' },\r
    'rounded': { name: 'rounded', args: { radius: 10 } }\r
  }\r
\r
  edge.setConnector(connectorMap[connectorType])\r
\r
  const styleNameMap = {\r
    'normal': '直线',\r
    'smooth': '平滑曲线',\r
    'rounded': '圆角折线'\r
  }\r
\r
  addLog(\`━ 样式修改: \${styleNameMap[connectorType]} - \${getEdgeLabel(edge)}\`)\r
}\r
\r
/**\r
 * 修改连线颜色\r
 */\r
function handleChangeColor(edge: Edge, color: string, colorName: string) {\r
  edge.attr('line/stroke', color)\r
  edge.attr('line/strokeWidth', 2)\r
\r
  addLog(\`● 颜色修改: \${colorName} - \${getEdgeLabel(edge)}\`)\r
}\r
\r
/**\r
 * 居中显示连线（使用 graph）\r
 */\r
function handleCenterEdge(edge: Edge, graph: Graph) {\r
  graph.centerCell(edge, {\r
    padding: 100,\r
    animation: {\r
      duration: 300,\r
      easing: 'ease-in-out'\r
    }\r
  })\r
\r
  addLog(\`🎯 居中显示连线: \${getEdgeLabel(edge)}\`)\r
}\r
\r
/**\r
 * 高亮路径：源节点 → 连线 → 目标节点（使用 graph）\r
 */\r
function handleHighlightPath(edge: Edge, graph: Graph) {\r
  const sourceNode = edge.getSourceNode()\r
  const targetNode = edge.getTargetNode()\r
\r
  // 保存原始样式\r
  const edgeOriginalStroke = edge.attr('line/stroke') || '#8c9bb5'\r
  const edgeOriginalWidth = edge.attr('line/strokeWidth') || 1.5\r
\r
  // 高亮连线\r
  edge.attr('line/stroke', '#FF4D4F')\r
  edge.attr('line/strokeWidth', 3)\r
\r
  // 高亮源节点和目标节点\r
  if (sourceNode) {\r
    sourceNode.attr('body/stroke', '#FF4D4F')\r
    sourceNode.attr('body/strokeWidth', 3)\r
  }\r
  if (targetNode) {\r
    targetNode.attr('body/stroke', '#FF4D4F')\r
    targetNode.attr('body/strokeWidth', 3)\r
  }\r
\r
  addLog(\`✨ 高亮路径: \${getEdgeSourceLabel(edge)} → \${getEdgeTargetLabel(edge)}\`)\r
\r
  // 3秒后恢复\r
  setTimeout(() => {\r
    edge.attr('line/stroke', edgeOriginalStroke)\r
    edge.attr('line/strokeWidth', edgeOriginalWidth)\r
\r
    if (sourceNode) {\r
      sourceNode.attr('body/stroke', '#27AE60')\r
      sourceNode.attr('body/strokeWidth', 2)\r
    }\r
    if (targetNode) {\r
      targetNode.attr('body/stroke', '#27AE60')\r
      targetNode.attr('body/strokeWidth', 2)\r
    }\r
\r
    addLog(\`⏰ 高亮已恢复\`)\r
  }, 3000)\r
}\r
\r
/**\r
 * 反转连线方向（使用 graph）\r
 */\r
function handleReverseEdge(edge: Edge, graph: Graph) {\r
  const source = edge.getSource()\r
  const target = edge.getTarget()\r
  const labels = edge.getLabels()\r
\r
  // 交换源和目标\r
  edge.setSource(target)\r
  edge.setTarget(source)\r
\r
  addLog(\`🔄 反转连线: \${getEdgeSourceLabel(edge)} ⇄ \${getEdgeTargetLabel(edge)}\`)\r
}\r
\r
function handleReady(designer: FlowDesigner, graph: Graph) {\r
\r
  graph = designer.getGraph()\r
\r
  addLog('FlowDesigner 初始化完成')\r
  addLog('✨ 将鼠标悬停在节点上查看自定义 Tooltip')\r
\r
  // 初始化测试数据\r
  initTestData(graph)\r
}\r
\r
function initTestData(graph) {\r
\r
  // 添加初始节点\r
  const node1 = graph.addNode({\r
    shape: 'custom-circle',\r
    x: 100,\r
    y: 100,\r
    label: '开始',\r
    data: {\r
      description: '流程开始节点',\r
      owner: '张三',\r
      priority: 'high',\r
    },\r
  })\r
\r
  const node2 = graph.addNode({\r
    shape: 'custom-rect',\r
    x: 300,\r
    y: 100,\r
    label: '处理',\r
    data: {\r
      description: '执行业务处理',\r
      owner: '李四',\r
      priority: 'medium',\r
    },\r
  })\r
\r
  const node3 = graph.addNode({\r
    shape: 'custom-circle',\r
    x: 500,\r
    y: 100,\r
    label: '结束',\r
    data: {\r
      description: '流程结束',\r
      owner: '王五',\r
      priority: 'low',\r
    },\r
  })\r
\r
  // 添加连线\r
  graph.addEdge({\r
    source: node1,\r
    target: node2,\r
    shape: 'flow-edge',\r
    labels: [{ attrs: { text: { text: '通过' } } }],\r
    data: {\r
      lineType: 'normal',\r
      condition: 'status === "approved"',\r
      description: '审批通过后的流转',\r
      isDefault: false,\r
    },\r
  })\r
\r
  graph.addEdge({\r
    source: node2,\r
    target: node3,\r
    shape: 'flow-edge',\r
    labels: [{ attrs: { text: { text: '完成' } } }],\r
    data: {\r
      lineType: 'normal',\r
      condition: '',\r
      description: '处理完成后结束',\r
      isDefault: true,\r
    },\r
  })\r
}\r
<\/script>\r
\r
<style scoped>\r
.demo-slot-edge-menu {\r
  display: flex;\r
  height: 100%;\r
  min-height: 500px;\r
  gap: 16px;\r
}\r
\r
.demo-slot-edge-menu__log {\r
  width: 320px;\r
  border: 1px solid #e8e8e8;\r
  border-radius: 8px;\r
  padding: 16px;\r
  background: #fafafa;\r
  overflow: hidden;\r
  display: flex;\r
  flex-direction: column;\r
}\r
\r
.demo-slot-edge-menu__log-header {\r
  display: flex;\r
  justify-content: space-between;\r
  align-items: center;\r
  margin-bottom: 12px;\r
}\r
\r
.demo-slot-edge-menu__log h4 {\r
  margin: 0;\r
  font-size: 14px;\r
  color: #1a1a2e;\r
  font-weight: 600;\r
}\r
\r
.demo-slot-edge-menu__clear-btn {\r
  padding: 2px 8px;\r
  font-size: 12px;\r
  color: #666;\r
  background: #fff;\r
  border: 1px solid #d9d9d9;\r
  border-radius: 4px;\r
  cursor: pointer;\r
  transition: all 0.2s;\r
  user-select: none;\r
}\r
\r
.demo-slot-edge-menu__clear-btn:hover {\r
  color: #1890ff;\r
  border-color: #1890ff;\r
}\r
\r
.demo-slot-edge-menu__log-content {\r
  flex: 1;\r
  overflow-y: auto;\r
  font-size: 12px;\r
  line-height: 1.8;\r
}\r
\r
.demo-slot-edge-menu__log-item {\r
  padding: 4px 0;\r
  color: #555;\r
  font-family: 'Monaco', 'Menlo', 'Consolas', monospace;\r
  border-bottom: 1px solid #f0f0f0;\r
}\r
\r
.demo-slot-edge-menu__log-item:last-child {\r
  border-bottom: none;\r
}\r
\r
.demo-slot-edge-menu__canvas {\r
  flex: 1;\r
  border: 1px solid #e8e8e8;\r
  border-radius: 8px;\r
  overflow: hidden;\r
  background: #fff;\r
  position: relative;\r
}\r
\r
/* ==================== 连线右键菜单样式 ==================== */\r
.edge-context-menu {\r
  background: #ffffff;\r
  border-radius: 8px;\r
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);\r
  min-width: 220px;\r
  overflow: hidden;\r
  user-select: none;\r
}\r
\r
.edge-context-menu__header {\r
  padding: 10px 16px;\r
  background: linear-gradient(135deg, #36D1DC 0%, #5B86E5 100%);\r
  border-bottom: 1px solid #f0f0f0;\r
}\r
\r
.edge-context-menu__title {\r
  font-size: 13px;\r
  font-weight: 600;\r
  color: #ffffff;\r
  display: flex;\r
  align-items: center;\r
  gap: 6px;\r
}\r
\r
.edge-context-menu__info {\r
  padding: 8px 16px;\r
  background: #f9fafb;\r
}\r
\r
.edge-context-menu__info-item {\r
  display: flex;\r
  justify-content: space-between;\r
  align-items: center;\r
  padding: 4px 0;\r
  font-size: 12px;\r
}\r
\r
.edge-context-menu__info-label {\r
  color: #8c8c8c;\r
  flex-shrink: 0;\r
  margin-right: 12px;\r
}\r
\r
.edge-context-menu__info-value {\r
  color: #262626;\r
  font-weight: 500;\r
  text-align: right;\r
  overflow: hidden;\r
  text-overflow: ellipsis;\r
  white-space: nowrap;\r
}\r
\r
.edge-context-menu__item {\r
  display: flex;\r
  align-items: center;\r
  gap: 10px;\r
  padding: 10px 16px;\r
  cursor: pointer;\r
  transition: all 0.2s;\r
  position: relative;\r
}\r
\r
.edge-context-menu__item:hover {\r
  background: #f5f7fa;\r
}\r
\r
.edge-context-menu__item:active {\r
  background: #e8ecf1;\r
}\r
\r
.edge-context-menu__item--danger {\r
  color: #ff4d4f;\r
}\r
\r
.edge-context-menu__item--danger:hover {\r
  background: #fff1f0;\r
}\r
\r
.edge-context-menu__icon {\r
  font-size: 16px;\r
  width: 20px;\r
  display: flex;\r
  align-items: center;\r
  justify-content: center;\r
  flex-shrink: 0;\r
}\r
\r
.edge-context-menu__text {\r
  flex: 1;\r
  font-size: 13px;\r
  color: inherit;\r
}\r
\r
.edge-context-menu__shortcut {\r
  font-size: 11px;\r
  color: #8c8c8c;\r
  background: #f5f5f5;\r
  padding: 2px 6px;\r
  border-radius: 3px;\r
  font-family: 'Monaco', 'Menlo', 'Consolas', monospace;\r
  flex-shrink: 0;\r
}\r
\r
.edge-context-menu__divider {\r
  height: 1px;\r
  background: #f0f0f0;\r
  margin: 4px 0;\r
}\r
\r
/* 自定义滚动条 */\r
.demo-slot-edge-menu__log-content::-webkit-scrollbar {\r
  width: 6px;\r
}\r
\r
.demo-slot-edge-menu__log-content::-webkit-scrollbar-track {\r
  background: #f0f0f0;\r
  border-radius: 3px;\r
}\r
\r
.demo-slot-edge-menu__log-content::-webkit-scrollbar-thumb {\r
  background: #bfbfbf;\r
  border-radius: 3px;\r
}\r
\r
.demo-slot-edge-menu__log-content::-webkit-scrollbar-thumb:hover {\r
  background: #999;\r
}\r
</style>\r
`,ll={class:"demo-slot-node-tooltip"},il={class:"demo-slot-node-tooltip__log"},al={class:"demo-slot-node-tooltip__log-content"},dl={key:0,class:"demo-slot-node-tooltip__log-empty"},cl={class:"demo-slot-node-tooltip__canvas"},pl={class:"my-node-tooltip",style:{color:"black"}},gl=G({__name:"demo-slot-nodeTooltip",setup(T){const v=S([]);let a=null,c=null;const l=yn({design:{showToolbar:!1,showNodePalette:!1,showPropertiesPanel:!1,showContextMenu:!1,canNodeTooltip:!0,canHoverNode:!0}});function g(e){const i=new Date().toLocaleTimeString("zh-CN",{hour12:!1});v.value.push(`[${i}] ${e}`),setTimeout(()=>{const r=document.querySelector(".demo-slot-node-tooltip__log-content");r&&(r.scrollTop=r.scrollHeight)},10)}function x(){v.value=[],g("日志已清除")}function s(e){a=e,c=a.getGraph(),g("FlowDesigner 初始化完成"),g("✨ 将鼠标悬停在节点上查看自定义 Tooltip"),o(c)}function o(e){if(!a)return;const i=e.addNode({shape:"custom-circle",x:100,y:100,label:"开始",data:{description:"流程开始节点",owner:"张三",priority:"high"}}),r=e.addNode({shape:"custom-rect",x:300,y:100,label:"处理",data:{description:"执行业务处理",owner:"李四",priority:"medium"}}),p=e.addNode({shape:"custom-circle",x:500,y:100,label:"结束",data:{description:"流程结束",owner:"王五",priority:"low"}});e.addEdge({source:i,target:r,shape:"flow-edge",labels:[{attrs:{text:{text:"通过"}}}],data:{lineType:"normal",condition:'status === "approved"',description:"审批通过后的流转",isDefault:!1}}),e.addEdge({source:r,target:p,shape:"flow-edge",labels:[{attrs:{text:{text:"完成"}}}],data:{lineType:"normal",condition:"",description:"处理完成后结束",isDefault:!0}})}function t({Graph:e}){e.registerNode("custom-circle",{inherit:"circle",width:100,height:100,attrs:{body:{fill:"#5F95FF",stroke:"#2563EB",strokeWidth:2},label:{fill:"#fff",fontSize:14,fontWeight:500}}},!0),e.registerNode("custom-rect",{inherit:"rect",width:140,height:70,attrs:{body:{fill:"#47C769",stroke:"#27AE60",strokeWidth:2,rx:8,ry:8},label:{fill:"#fff",fontSize:14,fontWeight:500}}},!0)}return(e,i)=>(h(),b("div",ll,[n("div",il,[n("div",{class:"demo-slot-node-tooltip__log-header"},[i[0]||(i[0]=n("h4",null,"事件日志",-1)),n("button",{class:"demo-slot-node-tooltip__clear-btn",onClick:x,title:"清除日志"}," 清除 ")]),n("div",al,[(h(!0),b(O,null,H(v.value,(r,p)=>(h(),b("div",{key:p,class:"demo-slot-node-tooltip__log-item"},D(r),1))),128)),v.value.length===0?(h(),b("div",dl," 将鼠标悬停在节点上以查看自定义 Tooltip ")):z("",!0)])]),n("div",cl,[f(F(V),{mode:"design","permission-config":l,"before-graph-init":t,onReady:s},{"node-tooltip":E(({node:r,data:p})=>[n("div",pl," node-tooltip插槽:"+D(p==null?void 0:p.label)+"--"+D(r.shape),1)]),_:1},8,["permission-config"])])]))}}),fl=U(gl,[["__scopeId","data-v-cee2df7a"]]),ml=`\uFEFF<template>\r
  <div class="demo-slot-node-tooltip">\r
    <!-- 事件日志面板 -->\r
    <div class="demo-slot-node-tooltip__log">\r
      <div class="demo-slot-node-tooltip__log-header">\r
        <h4>事件日志</h4>\r
        <button class="demo-slot-node-tooltip__clear-btn" @click="clearLogs" title="清除日志">\r
          清除\r
        </button>\r
      </div>\r
      <div class="demo-slot-node-tooltip__log-content">\r
        <div v-for="(log, index) in logs" :key="index" class="demo-slot-node-tooltip__log-item">\r
          {{ log }}\r
        </div>\r
        <div v-if="logs.length === 0" class="demo-slot-node-tooltip__log-empty">\r
          将鼠标悬停在节点上以查看自定义 Tooltip\r
        </div>\r
      </div>\r
    </div>\r
\r
    <!-- 画布容器 -->\r
    <div class="demo-slot-node-tooltip__canvas">\r
      <FlowDesignerLayout\r
        mode="design"\r
        :permission-config="permissionConfig"\r
        :before-graph-init="handleBeforeGraphInit"\r
        @ready="handleReady"\r
      >\r
        <!-- 自定义节点 Tooltip 插槽 -->\r
            <template #node-tooltip="{ node, data }">\r
              <div class="my-node-tooltip" style="color: black">\r
                node-tooltip插槽:{{ data?.label }}--{{node.shape}}\r
              </div>\r
            </template>\r
      </FlowDesignerLayout>\r
    </div>\r
  </div>\r
</template>\r
\r
<script setup lang="ts">\r
import { ref, reactive } from 'vue'\r
import { FlowDesignerLayout }  from '@quick-code/x6-flow-designer'\r
import type { FlowDesigner, FlowDesignerOptions } from '@quick-code/x6-flow-designer'\r
import type { Graph, Node } from '@antv/x6'\r
\r
// ============================================================================\r
// 状态管理\r
// ============================================================================\r
\r
const logs = ref<string[]>([])\r
let designer: FlowDesigner | null = null\r
let graph: Graph | null = null\r
\r
// 权限配置 - 启用 Node Tooltip\r
const permissionConfig = reactive({\r
  design: {\r
    showToolbar: false,\r
    showNodePalette: false,\r
    showPropertiesPanel: false,\r
    showContextMenu: false,\r
    canNodeTooltip: true, // 启用节点 Tooltip\r
    canHoverNode: true,   // 启用节点悬停\r
  },\r
})\r
\r
// ============================================================================\r
// 工具函数\r
// ============================================================================\r
\r
/**\r
 * 获取节点图标\r
 */\r
function getNodeIcon(shape: string): string {\r
  const iconMap: Record<string, string> = {\r
    'custom-circle-blue': '🔵',\r
    'custom-rect-green': '🟩',\r
    'custom-warning-orange': '⚠️',\r
    'rect': '▭',\r
    'circle': '●',\r
  }\r
  return iconMap[shape] || '📦'\r
}\r
\r
/**\r
 * 获取节点类型名称\r
 */\r
function getNodeTypeName(shape: string): string {\r
  const nameMap: Record<string, string> = {\r
    'custom-circle-blue': '蓝色圆形',\r
    'custom-rect-green': '绿色矩形',\r
    'custom-warning-orange': '橙色警告',\r
    'rect': '矩形',\r
    'circle': '圆形',\r
  }\r
  return nameMap[shape] || shape\r
}\r
\r
/**\r
 * 获取出边数量\r
 */\r
function getOutgoingEdgesCount(node: Node): number {\r
  if (!graph) return 0\r
  return graph.getOutgoingEdges(node)?.length || 0\r
}\r
\r
/**\r
 * 获取入边数量\r
 */\r
function getIncomingEdgesCount(node: Node): number {\r
  if (!graph) return 0\r
  return graph.getIncomingEdges(node)?.length || 0\r
}\r
\r
/**\r
 * 添加日志\r
 */\r
function addLog(message: string) {\r
  const timestamp = new Date().toLocaleTimeString('zh-CN', { hour12: false })\r
  logs.value.push(\`[\${timestamp}] \${message}\`)\r
\r
  // 自动滚动到底部\r
  setTimeout(() => {\r
    const logContent = document.querySelector('.demo-slot-node-tooltip__log-content')\r
    if (logContent) {\r
      logContent.scrollTop = logContent.scrollHeight\r
    }\r
  }, 10)\r
}\r
\r
/**\r
 * 清除日志\r
 */\r
function clearLogs() {\r
  logs.value = []\r
  addLog('日志已清除')\r
}\r
\r
// ============================================================================\r
// 事件处理\r
// ============================================================================\r
\r
/**\r
 * Tooltip 显示时触发\r
 */\r
function handleTooltipShow(node: Node, data: any) {\r
  const label = data?.label || node.id.substring(0, 8)\r
  const shape = getNodeTypeName(node.shape)\r
  addLog(\`显示节点 Tooltip: \${label} (\${shape})\`)\r
}\r
\r
/**\r
 * FlowDesigner 准备完成\r
 */\r
function handleReady(designerInstance: FlowDesigner) {\r
  designer = designerInstance\r
  graph = designer.getGraph()\r
\r
  addLog('FlowDesigner 初始化完成')\r
  addLog('✨ 将鼠标悬停在节点上查看自定义 Tooltip')\r
\r
  // 初始化测试数据\r
  initTestData(graph)\r
}\r
\r
/**\r
 * 初始化测试数据\r
 */\r
function initTestData(graph) {\r
  if (!designer) return\r
\r
  // 添加初始节点\r
  const node1 = graph.addNode({\r
    shape: 'custom-circle',\r
    x: 100,\r
    y: 100,\r
    label: '开始',\r
    data: {\r
      description: '流程开始节点',\r
      owner: '张三',\r
      priority: 'high',\r
    },\r
  })\r
\r
  const node2 = graph.addNode({\r
    shape: 'custom-rect',\r
    x: 300,\r
    y: 100,\r
    label: '处理',\r
    data: {\r
      description: '执行业务处理',\r
      owner: '李四',\r
      priority: 'medium',\r
    },\r
  })\r
\r
  const node3 = graph.addNode({\r
    shape: 'custom-circle',\r
    x: 500,\r
    y: 100,\r
    label: '结束',\r
    data: {\r
      description: '流程结束',\r
      owner: '王五',\r
      priority: 'low',\r
    },\r
  })\r
\r
  // 添加连线\r
  graph.addEdge({\r
    source: node1,\r
    target: node2,\r
    shape: 'flow-edge',\r
    labels: [{ attrs: { text: { text: '通过' } } }],\r
    data: {\r
      lineType: 'normal',\r
      condition: 'status === "approved"',\r
      description: '审批通过后的流转',\r
      isDefault: false,\r
    },\r
  })\r
\r
  graph.addEdge({\r
    source: node2,\r
    target: node3,\r
    shape: 'flow-edge',\r
    labels: [{ attrs: { text: { text: '完成' } } }],\r
    data: {\r
      lineType: 'normal',\r
      condition: '',\r
      description: '处理完成后结束',\r
      isDefault: true,\r
    },\r
  })\r
}\r
\r
/**\r
 * Graph 初始化前的配置（注册自定义节点样式）\r
 */\r
function handleBeforeGraphInit({Graph}) {\r
  // 注册自定义节点：蓝色圆形\r
  Graph.registerNode('custom-circle', {\r
    inherit: 'circle',\r
    width: 100,\r
    height: 100,\r
    attrs: {\r
      body: {\r
        fill: '#5F95FF',\r
        stroke: '#2563EB',\r
        strokeWidth: 2,\r
      },\r
      label: {\r
        fill: '#fff',\r
        fontSize: 14,\r
        fontWeight: 500,\r
      },\r
    },\r
  }, true)\r
\r
  Graph.registerNode('custom-rect', {\r
    inherit: 'rect',\r
    width: 140,\r
    height: 70,\r
    attrs: {\r
      body: {\r
        fill: '#47C769',\r
        stroke: '#27AE60',\r
        strokeWidth: 2,\r
        rx: 8,\r
        ry: 8,\r
      },\r
      label: {\r
        fill: '#fff',\r
        fontSize: 14,\r
        fontWeight: 500,\r
      },\r
    },\r
  }, true)\r
}\r
<\/script>\r
\r
<style scoped>\r
/* ═══════════════════════════════════════════════════════════════════════════\r
   容器布局\r
   ═══════════════════════════════════════════════════════════════════════════ */\r
.demo-slot-node-tooltip {\r
  display: flex;\r
  height: 500px;\r
  background: #f5f6fa;\r
  border-radius: 8px;\r
  overflow: hidden;\r
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);\r
}\r
\r
/* ═══════════════════════════════════════════════════════════════════════════\r
   事件日志面板\r
   ═══════════════════════════════════════════════════════════════════════════ */\r
.demo-slot-node-tooltip__log {\r
  width: 320px;\r
  display: flex;\r
  flex-direction: column;\r
  padding: 16px;\r
  background: #fafafa;\r
  overflow: hidden;\r
  border-right: 1px solid #e8e8e8;\r
}\r
\r
.demo-slot-node-tooltip__log-header {\r
  display: flex;\r
  justify-content: space-between;\r
  align-items: center;\r
  margin-bottom: 12px;\r
}\r
\r
.demo-slot-node-tooltip__log-header h4 {\r
  margin: 0;\r
  font-size: 14px;\r
  color: #1a1a2e;\r
  font-weight: 600;\r
}\r
\r
.demo-slot-node-tooltip__clear-btn {\r
  padding: 2px 8px;\r
  font-size: 12px;\r
  color: #666;\r
  background: #fff;\r
  border: 1px solid #d9d9d9;\r
  border-radius: 4px;\r
  cursor: pointer;\r
  transition: all 0.2s;\r
  user-select: none;\r
}\r
\r
.demo-slot-node-tooltip__clear-btn:hover {\r
  color: #1890ff;\r
  border-color: #1890ff;\r
}\r
\r
.demo-slot-node-tooltip__log-content {\r
  flex: 1;\r
  overflow-y: auto;\r
  font-size: 12px;\r
  line-height: 1.8;\r
}\r
\r
.demo-slot-node-tooltip__log-item {\r
  padding: 4px 0;\r
  color: #555;\r
  font-family: 'Monaco', 'Menlo', 'Consolas', monospace;\r
  border-bottom: 1px solid #f0f0f0;\r
}\r
\r
.demo-slot-node-tooltip__log-empty {\r
  padding: 20px;\r
  text-align: center;\r
  color: #999;\r
  font-size: 13px;\r
  line-height: 1.6;\r
}\r
\r
/* ═══════════════════════════════════════════════════════════════════════════\r
   画布容器\r
   ═══════════════════════════════════════════════════════════════════════════ */\r
.demo-slot-node-tooltip__canvas {\r
  flex: 1;\r
  position: relative;\r
  background: #ffffff;\r
  overflow: hidden;\r
}\r
\r
/* ═══════════════════════════════════════════════════════════════════════════\r
   自定义节点 Tooltip 样式\r
   ═══════════════════════════════════════════════════════════════════════════ */\r
.my-node-tooltip {\r
  background: #fff;\r
  border: 1px solid #e8e8e8;\r
  border-radius: 4px;\r
  padding: 8px;\r
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);\r
}\r
</style>\r
`,ul={class:"demo-slot-edge-tooltip"},hl={class:"demo-slot-edge-tooltip__log"},bl={class:"demo-slot-edge-tooltip__log-content"},vl={key:0,class:"demo-slot-edge-tooltip__log-empty"},_l={class:"demo-slot-edge-tooltip__canvas"},xl={class:"my-edge-tooltip"},yl=G({__name:"demo-slot-edgeTooltip",setup(T){const v=S([]);let a=null,c=null;const l=yn({design:{showToolbar:!1,showNodePalette:!1,showPropertiesPanel:!1,showContextMenu:!1,canEdgeTooltip:!0,canHoverEdge:!0}});function g(e){const i=new Date().toLocaleTimeString("zh-CN",{hour12:!1});v.value.push(`[${i}] ${e}`),setTimeout(()=>{const r=document.querySelector(".demo-slot-edge-tooltip__log-content");r&&(r.scrollTop=r.scrollHeight)},10)}function x(){v.value=[],g("日志已清除")}function s(e){a=e,c=a.getGraph(),g("FlowDesigner 初始化完成"),g("✨ 将鼠标悬停在连线上查看自定义 Tooltip"),o(c)}function o(e){if(!a)return;const i=e.addNode({shape:"custom-circle",x:100,y:100,label:"开始",data:{description:"流程开始节点",owner:"张三",priority:"high"}}),r=e.addNode({shape:"custom-rect",x:300,y:100,label:"处理",data:{description:"执行业务处理",owner:"李四",priority:"medium"}}),p=e.addNode({shape:"custom-circle",x:500,y:100,label:"结束",data:{description:"流程结束",owner:"王五",priority:"low"}});e.addEdge({source:i,target:r,shape:"flow-edge",labels:[{attrs:{text:{text:"通过"}}}],data:{lineType:"normal",condition:'status === "approved"',description:"审批通过后的流转",isDefault:!1}}),e.addEdge({source:r,target:p,shape:"flow-edge",labels:[{attrs:{text:{text:"完成"}}}],data:{lineType:"normal",condition:"",description:"处理完成后结束",isDefault:!0}})}function t({Graph:e}){e.registerNode("custom-circle",{inherit:"circle",width:100,height:100,attrs:{body:{fill:"#5F95FF",stroke:"#2563EB",strokeWidth:2},label:{fill:"#fff",fontSize:14,fontWeight:500}}},!0),e.registerNode("custom-rect",{inherit:"rect",width:140,height:70,attrs:{body:{fill:"#47C769",stroke:"#27AE60",strokeWidth:2,rx:8,ry:8},label:{fill:"#fff",fontSize:14,fontWeight:500}}},!0)}return(e,i)=>(h(),b("div",ul,[n("div",hl,[n("div",{class:"demo-slot-edge-tooltip__log-header"},[i[0]||(i[0]=n("h4",null,"事件日志",-1)),n("button",{class:"demo-slot-edge-tooltip__clear-btn",onClick:x,title:"清除日志"}," 清除 ")]),n("div",bl,[(h(!0),b(O,null,H(v.value,(r,p)=>(h(),b("div",{key:p,class:"demo-slot-edge-tooltip__log-item"},D(r),1))),128)),v.value.length===0?(h(),b("div",vl," 将鼠标悬停在连线上以查看自定义 Tooltip ")):z("",!0)])]),n("div",_l,[f(F(V),{mode:"design","permission-config":l,"before-graph-init":t,onReady:s},{"edge-tooltip":E(({edge:r,data:p})=>[n("div",xl," edge-tooltip插槽:"+D(p==null?void 0:p.label),1)]),_:1},8,["permission-config"])])]))}}),kl=U(yl,[["__scopeId","data-v-2238c6c0"]]),wl=`\uFEFF<template>\r
  <div class="demo-slot-edge-tooltip">\r
    <!-- 事件日志面板 -->\r
    <div class="demo-slot-edge-tooltip__log">\r
      <div class="demo-slot-edge-tooltip__log-header">\r
        <h4>事件日志</h4>\r
        <button class="demo-slot-edge-tooltip__clear-btn" @click="clearLogs" title="清除日志">\r
          清除\r
        </button>\r
      </div>\r
      <div class="demo-slot-edge-tooltip__log-content">\r
        <div v-for="(log, index) in logs" :key="index" class="demo-slot-edge-tooltip__log-item">\r
          {{ log }}\r
        </div>\r
        <div v-if="logs.length === 0" class="demo-slot-edge-tooltip__log-empty">\r
          将鼠标悬停在连线上以查看自定义 Tooltip\r
        </div>\r
      </div>\r
    </div>\r
\r
    <!-- 画布容器 -->\r
    <div class="demo-slot-edge-tooltip__canvas">\r
      <FlowDesignerLayout\r
        mode="design"\r
        :permission-config="permissionConfig"\r
        :before-graph-init="handleBeforeGraphInit"\r
        @ready="handleReady"\r
      >\r
            <template #edge-tooltip="{ edge, data }">\r
              <div class="my-edge-tooltip">\r
                edge-tooltip插槽:{{ data?.label }}\r
              </div>\r
            </template>\r
      </FlowDesignerLayout>\r
    </div>\r
  </div>\r
</template>\r
\r
<script setup lang="ts">\r
import { ref, reactive } from 'vue'\r
import { FlowDesignerLayout }  from '@quick-code/x6-flow-designer'\r
import type { FlowDesigner } from '@quick-code/x6-flow-designer'\r
import type { Graph, Edge, Node } from '@antv/x6'\r
import {FlowDesignerOptions} from "@/components/FlowDesigner/core/FlowDesigner";\r
\r
// ============================================================================\r
// 状态管理\r
// ============================================================================\r
\r
const logs = ref<string[]>([])\r
let designer: FlowDesigner | null = null\r
let graph: Graph | null = null\r
\r
// 权限配置 - 启用 Edge Tooltip\r
const permissionConfig = reactive({\r
  design: {\r
    showToolbar: false,\r
    showNodePalette: false,\r
    showPropertiesPanel: false,\r
    showContextMenu: false,\r
    canEdgeTooltip: true, // 启用连线 Tooltip\r
    canHoverEdge: true,   // 启用连线悬停\r
  },\r
})\r
\r
// ============================================================================\r
// 工具函数\r
// ============================================================================\r
\r
/**\r
 * 获取连线图标\r
 */\r
function getEdgeIcon(connectorName?: string): string {\r
  const iconMap: Record<string, string> = {\r
    'smooth': '〜',\r
    'rounded': '⌒',\r
    'normal': '—',\r
  }\r
  return iconMap[connectorName || ''] || '→'\r
}\r
\r
/**\r
 * 获取连接器名称\r
 */\r
function getConnectorName(connectorName?: string): string {\r
  const nameMap: Record<string, string> = {\r
    'smooth': '平滑曲线',\r
    'rounded': '圆角折线',\r
    'normal': '直线',\r
  }\r
  return nameMap[connectorName || ''] || connectorName || '默认'\r
}\r
\r
/**\r
 * 获取节点标签\r
 */\r
function getNodeLabel(node: Node | null): string {\r
  if (!node) return '未知节点'\r
  const label = node.getProp('label') || node.getData()?.label\r
  return label || node.id.substring(0, 8)\r
}\r
\r
/**\r
 * 添加日志\r
 */\r
function addLog(message: string) {\r
  const timestamp = new Date().toLocaleTimeString('zh-CN', { hour12: false })\r
  logs.value.push(\`[\${timestamp}] \${message}\`)\r
\r
  // 自动滚动到底部\r
  setTimeout(() => {\r
    const logContent = document.querySelector('.demo-slot-edge-tooltip__log-content')\r
    if (logContent) {\r
      logContent.scrollTop = logContent.scrollHeight\r
    }\r
  }, 10)\r
}\r
\r
/**\r
 * 清除日志\r
 */\r
function clearLogs() {\r
  logs.value = []\r
  addLog('日志已清除')\r
}\r
\r
// ============================================================================\r
// 事件处理\r
// ============================================================================\r
\r
/**\r
 * Tooltip 显示时触发\r
 */\r
function handleTooltipShow(edge: Edge, data: any) {\r
  const label = data?.label || '连接线'\r
  const sourceLabel = getNodeLabel(edge.getSourceNode())\r
  const targetLabel = getNodeLabel(edge.getTargetNode())\r
  addLog(\`显示连线 Tooltip: \${label} (\${sourceLabel} → \${targetLabel})\`)\r
}\r
\r
/**\r
 * FlowDesigner 准备完成\r
 */\r
function handleReady(designerInstance: FlowDesigner) {\r
  designer = designerInstance\r
  graph = designer.getGraph()\r
\r
  addLog('FlowDesigner 初始化完成')\r
  addLog('✨ 将鼠标悬停在连线上查看自定义 Tooltip')\r
\r
  // 初始化测试数据\r
  initTestData(graph)\r
}\r
\r
/**\r
 * 初始化测试数据\r
 */\r
function initTestData(graph) {\r
  if (!designer) return\r
\r
  // 添加初始节点\r
  const node1 = graph.addNode({\r
    shape: 'custom-circle',\r
    x: 100,\r
    y: 100,\r
    label: '开始',\r
    data: {\r
      description: '流程开始节点',\r
      owner: '张三',\r
      priority: 'high',\r
    },\r
  })\r
\r
  const node2 = graph.addNode({\r
    shape: 'custom-rect',\r
    x: 300,\r
    y: 100,\r
    label: '处理',\r
    data: {\r
      description: '执行业务处理',\r
      owner: '李四',\r
      priority: 'medium',\r
    },\r
  })\r
\r
  const node3 = graph.addNode({\r
    shape: 'custom-circle',\r
    x: 500,\r
    y: 100,\r
    label: '结束',\r
    data: {\r
      description: '流程结束',\r
      owner: '王五',\r
      priority: 'low',\r
    },\r
  })\r
\r
  // 添加连线\r
  graph.addEdge({\r
    source: node1,\r
    target: node2,\r
    shape: 'flow-edge',\r
    labels: [{ attrs: { text: { text: '通过' } } }],\r
    data: {\r
      lineType: 'normal',\r
      condition: 'status === "approved"',\r
      description: '审批通过后的流转',\r
      isDefault: false,\r
    },\r
  })\r
\r
  graph.addEdge({\r
    source: node2,\r
    target: node3,\r
    shape: 'flow-edge',\r
    labels: [{ attrs: { text: { text: '完成' } } }],\r
    data: {\r
      lineType: 'normal',\r
      condition: '',\r
      description: '处理完成后结束',\r
      isDefault: true,\r
    },\r
  })\r
}\r
\r
/**\r
 * Graph 初始化前的配置（注册自定义节点样式）\r
 */\r
function handleBeforeGraphInit({Graph}) {\r
  // 注册自定义节点：蓝色圆形\r
  Graph.registerNode('custom-circle', {\r
    inherit: 'circle',\r
    width: 100,\r
    height: 100,\r
    attrs: {\r
      body: {\r
        fill: '#5F95FF',\r
        stroke: '#2563EB',\r
        strokeWidth: 2,\r
      },\r
      label: {\r
        fill: '#fff',\r
        fontSize: 14,\r
        fontWeight: 500,\r
      },\r
    },\r
  }, true)\r
\r
  Graph.registerNode('custom-rect', {\r
    inherit: 'rect',\r
    width: 140,\r
    height: 70,\r
    attrs: {\r
      body: {\r
        fill: '#47C769',\r
        stroke: '#27AE60',\r
        strokeWidth: 2,\r
        rx: 8,\r
        ry: 8,\r
      },\r
      label: {\r
        fill: '#fff',\r
        fontSize: 14,\r
        fontWeight: 500,\r
      },\r
    },\r
  }, true)\r
}\r
<\/script>\r
\r
<style scoped>\r
/* ═══════════════════════════════════════════════════════════════════════════\r
   容器布局\r
   ═══════════════════════════════════════════════════════════════════════════ */\r
.demo-slot-edge-tooltip {\r
  display: flex;\r
  height: 500px;\r
  background: #f5f6fa;\r
  border-radius: 8px;\r
  overflow: hidden;\r
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);\r
}\r
\r
/* ═══════════════════════════════════════════════════════════════════════════\r
   事件日志面板\r
   ═══════════════════════════════════════════════════════════════════════════ */\r
.demo-slot-edge-tooltip__log {\r
  width: 320px;\r
  display: flex;\r
  flex-direction: column;\r
  padding: 16px;\r
  background: #fafafa;\r
  overflow: hidden;\r
  border-right: 1px solid #e8e8e8;\r
}\r
\r
.demo-slot-edge-tooltip__log-header {\r
  display: flex;\r
  justify-content: space-between;\r
  align-items: center;\r
  margin-bottom: 12px;\r
}\r
\r
.demo-slot-edge-tooltip__log-header h4 {\r
  margin: 0;\r
  font-size: 14px;\r
  color: #1a1a2e;\r
  font-weight: 600;\r
}\r
\r
.demo-slot-edge-tooltip__clear-btn {\r
  padding: 2px 8px;\r
  font-size: 12px;\r
  color: #666;\r
  background: #fff;\r
  border: 1px solid #d9d9d9;\r
  border-radius: 4px;\r
  cursor: pointer;\r
  transition: all 0.2s;\r
  user-select: none;\r
}\r
\r
.demo-slot-edge-tooltip__clear-btn:hover {\r
  color: #1890ff;\r
  border-color: #1890ff;\r
}\r
\r
.demo-slot-edge-tooltip__log-content {\r
  flex: 1;\r
  overflow-y: auto;\r
  font-size: 12px;\r
  line-height: 1.8;\r
}\r
\r
.demo-slot-edge-tooltip__log-item {\r
  padding: 4px 0;\r
  color: #555;\r
  font-family: 'Monaco', 'Menlo', 'Consolas', monospace;\r
  border-bottom: 1px solid #f0f0f0;\r
}\r
\r
.demo-slot-edge-tooltip__log-empty {\r
  padding: 20px;\r
  text-align: center;\r
  color: #999;\r
  font-size: 13px;\r
  line-height: 1.6;\r
}\r
\r
/* ═══════════════════════════════════════════════════════════════════════════\r
   画布容器\r
   ═══════════════════════════════════════════════════════════════════════════ */\r
.demo-slot-edge-tooltip__canvas {\r
  flex: 1;\r
  position: relative;\r
  background: #ffffff;\r
  overflow: hidden;\r
}\r
\r
/* ═══════════════════════════════════════════════════════════════════════════\r
   自定义连线 Tooltip 样式\r
   ═══════════════════════════════════════════════════════════════════════════ */\r
.my-edge-tooltip {\r
  background: #fff;\r
  border: 1px solid #e8e8e8;\r
  border-radius: 4px;\r
  padding: 8px;\r
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);\r
}\r
</style>\r
`,Sl={class:"demo-slot-edge-tooltip"},Nl={class:"demo-slot-edge-tooltip__log"},Cl={class:"demo-slot-edge-tooltip__log-content"},Dl={key:0,class:"demo-slot-edge-tooltip__log-empty"},$l={class:"demo-slot-edge-tooltip__canvas"},El={class:"custom-edge-label__text"},Fl=G({__name:"demo-slot-edgeLabel",setup(T){const v=S([]);let a=null,c=null;const l=yn({design:{showToolbar:!1,showNodePalette:!1,showPropertiesPanel:!1,showContextMenu:!1,canEdgeTooltip:!0,canHoverEdge:!0}});function g(e){const i=new Date().toLocaleTimeString("zh-CN",{hour12:!1});v.value.push(`[${i}] ${e}`),setTimeout(()=>{const r=document.querySelector(".demo-slot-edge-tooltip__log-content");r&&(r.scrollTop=r.scrollHeight)},10)}function x(){v.value=[],g("日志已清除")}function s(e){a=e,c=a.getGraph(),g("FlowDesigner 初始化完成"),g("✨ 将鼠标悬停在连线上查看自定义 Tooltip"),o(c)}function o(e){if(!a)return;const i=e.addNode({shape:"custom-circle",x:100,y:100,label:"开始",data:{description:"流程开始节点",owner:"张三",priority:"high"}}),r=e.addNode({shape:"custom-rect",x:300,y:100,label:"处理",data:{description:"执行业务处理",owner:"李四",priority:"medium"}}),p=e.addNode({shape:"custom-circle",x:500,y:100,label:"结束",data:{description:"流程结束",owner:"王五",priority:"low"}});e.addEdge({source:i,target:r,shape:"flow-edge",labels:[{attrs:{text:{text:"通过"}}}],data:{lineType:"normal",condition:'status === "approved"',description:"审批通过后的流转",isDefault:!1}}),e.addEdge({source:r,target:p,shape:"flow-edge",labels:[{attrs:{text:{text:"完成"}}}],data:{lineType:"normal",condition:"",description:"处理完成后结束",isDefault:!0}})}function t({Graph:e}){e.registerNode("custom-circle",{inherit:"circle",width:100,height:100,attrs:{body:{fill:"#5F95FF",stroke:"#2563EB",strokeWidth:2},label:{fill:"#fff",fontSize:14,fontWeight:500}}},!0),e.registerNode("custom-rect",{inherit:"rect",width:140,height:70,attrs:{body:{fill:"#47C769",stroke:"#27AE60",strokeWidth:2,rx:8,ry:8},label:{fill:"#fff",fontSize:14,fontWeight:500}}},!0)}return(e,i)=>{const r=fn("TagOutlined");return h(),b("div",Sl,[n("div",Nl,[n("div",{class:"demo-slot-edge-tooltip__log-header"},[i[0]||(i[0]=n("h4",null,"事件日志",-1)),n("button",{class:"demo-slot-edge-tooltip__clear-btn",onClick:x,title:"清除日志"}," 清除 ")]),n("div",Cl,[(h(!0),b(O,null,H(v.value,(p,m)=>(h(),b("div",{key:m,class:"demo-slot-edge-tooltip__log-item"},D(p),1))),128)),v.value.length===0?(h(),b("div",Dl," 将鼠标悬停在连线上以查看自定义 Tooltip ")):z("",!0)])]),n("div",$l,[f(F(V),{mode:"design","permission-config":l,"before-graph-init":t,onReady:s},{"edge-label":E(({edge:p,data:m})=>[n("div",{class:an(["custom-edge-label",{"custom-edge-label-selected":p.getProp("_state")==="hover"||p.getProp("_state")==="selected"}])},[f(r,{class:"custom-edge-label__icon"}),n("span",El,D(p.getProp("_state"))+"-"+D(m==null?void 0:m.label),1)],2)]),_:1},8,["permission-config"])])])}}}),Ll=U(Fl,[["__scopeId","data-v-40d17d61"]]),Tl=`\uFEFF<template>\r
  <div class="demo-slot-edge-tooltip">\r
    <!-- 事件日志面板 -->\r
    <div class="demo-slot-edge-tooltip__log">\r
      <div class="demo-slot-edge-tooltip__log-header">\r
        <h4>事件日志</h4>\r
        <button class="demo-slot-edge-tooltip__clear-btn" @click="clearLogs" title="清除日志">\r
          清除\r
        </button>\r
      </div>\r
      <div class="demo-slot-edge-tooltip__log-content">\r
        <div v-for="(log, index) in logs" :key="index" class="demo-slot-edge-tooltip__log-item">\r
          {{ log }}\r
        </div>\r
        <div v-if="logs.length === 0" class="demo-slot-edge-tooltip__log-empty">\r
          将鼠标悬停在连线上以查看自定义 Tooltip\r
        </div>\r
      </div>\r
    </div>\r
\r
    <!-- 画布容器 -->\r
    <div class="demo-slot-edge-tooltip__canvas">\r
      <FlowDesignerLayout\r
        mode="design"\r
        :permission-config="permissionConfig"\r
        :before-graph-init="handleBeforeGraphInit"\r
        @ready="handleReady"\r
      >\r
          <template #edge-label="{ edge, data }">\r
            <div class="custom-edge-label" :class="{ 'custom-edge-label-selected': (edge.getProp('_state') === 'hover' || edge.getProp('_state') === 'selected') }">\r
              <TagOutlined class="custom-edge-label__icon" />\r
              <span class="custom-edge-label__text">{{ edge.getProp('_state') }}-{{ (data as any)?.label }}</span>\r
            </div>\r
          </template>\r
      </FlowDesignerLayout>\r
    </div>\r
  </div>\r
</template>\r
\r
<script setup lang="ts">\r
import { ref, reactive } from 'vue'\r
import { FlowDesignerLayout }  from '@quick-code/x6-flow-designer'\r
import type { FlowDesigner, FlowDesignerOptions } from '@quick-code/x6-flow-designer'\r
import type { Graph, Edge, Node } from '@antv/x6'\r
\r
// ============================================================================\r
// 状态管理\r
// ============================================================================\r
\r
const logs = ref<string[]>([])\r
let designer: FlowDesigner | null = null\r
let graph: Graph | null = null\r
\r
// 权限配置 - 启用 Edge Tooltip\r
const permissionConfig = reactive({\r
  design: {\r
    showToolbar: false,\r
    showNodePalette: false,\r
    showPropertiesPanel: false,\r
    showContextMenu: false,\r
    canEdgeTooltip: true, // 启用连线 Tooltip\r
    canHoverEdge: true,   // 启用连线悬停\r
  },\r
})\r
\r
// ============================================================================\r
// 工具函数\r
// ============================================================================\r
\r
/**\r
 * 获取连线图标\r
 */\r
function getEdgeIcon(connectorName?: string): string {\r
  const iconMap: Record<string, string> = {\r
    'smooth': '〜',\r
    'rounded': '⌒',\r
    'normal': '—',\r
  }\r
  return iconMap[connectorName || ''] || '→'\r
}\r
\r
/**\r
 * 获取连接器名称\r
 */\r
function getConnectorName(connectorName?: string): string {\r
  const nameMap: Record<string, string> = {\r
    'smooth': '平滑曲线',\r
    'rounded': '圆角折线',\r
    'normal': '直线',\r
  }\r
  return nameMap[connectorName || ''] || connectorName || '默认'\r
}\r
\r
/**\r
 * 获取节点标签\r
 */\r
function getNodeLabel(node: Node | null): string {\r
  if (!node) return '未知节点'\r
  const label = node.getProp('label') || node.getData()?.label\r
  return label || node.id.substring(0, 8)\r
}\r
\r
/**\r
 * 添加日志\r
 */\r
function addLog(message: string) {\r
  const timestamp = new Date().toLocaleTimeString('zh-CN', { hour12: false })\r
  logs.value.push(\`[\${timestamp}] \${message}\`)\r
\r
  // 自动滚动到底部\r
  setTimeout(() => {\r
    const logContent = document.querySelector('.demo-slot-edge-tooltip__log-content')\r
    if (logContent) {\r
      logContent.scrollTop = logContent.scrollHeight\r
    }\r
  }, 10)\r
}\r
\r
/**\r
 * 清除日志\r
 */\r
function clearLogs() {\r
  logs.value = []\r
  addLog('日志已清除')\r
}\r
\r
// ============================================================================\r
// 事件处理\r
// ============================================================================\r
\r
/**\r
 * Tooltip 显示时触发\r
 */\r
function handleTooltipShow(edge: Edge, data: any) {\r
  const label = data?.label || '连接线'\r
  const sourceLabel = getNodeLabel(edge.getSourceNode())\r
  const targetLabel = getNodeLabel(edge.getTargetNode())\r
  addLog(\`显示连线 Tooltip: \${label} (\${sourceLabel} → \${targetLabel})\`)\r
}\r
\r
/**\r
 * FlowDesigner 准备完成\r
 */\r
function handleReady(designerInstance: FlowDesigner) {\r
  designer = designerInstance\r
  graph = designer.getGraph()\r
\r
  addLog('FlowDesigner 初始化完成')\r
  addLog('✨ 将鼠标悬停在连线上查看自定义 Tooltip')\r
\r
  // 初始化测试数据\r
  initTestData(graph)\r
}\r
\r
/**\r
 * 初始化测试数据\r
 */\r
function initTestData(graph) {\r
  if (!designer) return\r
\r
  // 添加初始节点\r
  const node1 = graph.addNode({\r
    shape: 'custom-circle',\r
    x: 100,\r
    y: 100,\r
    label: '开始',\r
    data: {\r
      description: '流程开始节点',\r
      owner: '张三',\r
      priority: 'high',\r
    },\r
  })\r
\r
  const node2 = graph.addNode({\r
    shape: 'custom-rect',\r
    x: 300,\r
    y: 100,\r
    label: '处理',\r
    data: {\r
      description: '执行业务处理',\r
      owner: '李四',\r
      priority: 'medium',\r
    },\r
  })\r
\r
  const node3 = graph.addNode({\r
    shape: 'custom-circle',\r
    x: 500,\r
    y: 100,\r
    label: '结束',\r
    data: {\r
      description: '流程结束',\r
      owner: '王五',\r
      priority: 'low',\r
    },\r
  })\r
\r
  // 添加连线\r
  graph.addEdge({\r
    source: node1,\r
    target: node2,\r
    shape: 'flow-edge',\r
    labels: [{ attrs: { text: { text: '通过' } } }],\r
    data: {\r
      lineType: 'normal',\r
      condition: 'status === "approved"',\r
      description: '审批通过后的流转',\r
      isDefault: false,\r
    },\r
  })\r
\r
  graph.addEdge({\r
    source: node2,\r
    target: node3,\r
    shape: 'flow-edge',\r
    labels: [{ attrs: { text: { text: '完成' } } }],\r
    data: {\r
      lineType: 'normal',\r
      condition: '',\r
      description: '处理完成后结束',\r
      isDefault: true,\r
    },\r
  })\r
}\r
\r
/**\r
 * Graph 初始化前的配置（注册自定义节点样式）\r
 */\r
function handleBeforeGraphInit({Graph}) {\r
  // 注册自定义节点：蓝色圆形\r
  Graph.registerNode('custom-circle', {\r
    inherit: 'circle',\r
    width: 100,\r
    height: 100,\r
    attrs: {\r
      body: {\r
        fill: '#5F95FF',\r
        stroke: '#2563EB',\r
        strokeWidth: 2,\r
      },\r
      label: {\r
        fill: '#fff',\r
        fontSize: 14,\r
        fontWeight: 500,\r
      },\r
    },\r
  }, true)\r
\r
  Graph.registerNode('custom-rect', {\r
    inherit: 'rect',\r
    width: 140,\r
    height: 70,\r
    attrs: {\r
      body: {\r
        fill: '#47C769',\r
        stroke: '#27AE60',\r
        strokeWidth: 2,\r
        rx: 8,\r
        ry: 8,\r
      },\r
      label: {\r
        fill: '#fff',\r
        fontSize: 14,\r
        fontWeight: 500,\r
      },\r
    },\r
  }, true)\r
}\r
<\/script>\r
\r
<style scoped>\r
/* ═══════════════════════════════════════════════════════════════════════════\r
   容器布局\r
   ═══════════════════════════════════════════════════════════════════════════ */\r
.demo-slot-edge-tooltip {\r
  display: flex;\r
  height: 500px;\r
  background: #f5f6fa;\r
  border-radius: 8px;\r
  overflow: hidden;\r
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);\r
}\r
\r
/* ═══════════════════════════════════════════════════════════════════════════\r
   事件日志面板\r
   ═══════════════════════════════════════════════════════════════════════════ */\r
.demo-slot-edge-tooltip__log {\r
  width: 320px;\r
  display: flex;\r
  flex-direction: column;\r
  padding: 16px;\r
  background: #fafafa;\r
  overflow: hidden;\r
  border-right: 1px solid #e8e8e8;\r
}\r
\r
.demo-slot-edge-tooltip__log-header {\r
  display: flex;\r
  justify-content: space-between;\r
  align-items: center;\r
  margin-bottom: 12px;\r
}\r
\r
.demo-slot-edge-tooltip__log-header h4 {\r
  margin: 0;\r
  font-size: 14px;\r
  color: #1a1a2e;\r
  font-weight: 600;\r
}\r
\r
.demo-slot-edge-tooltip__clear-btn {\r
  padding: 2px 8px;\r
  font-size: 12px;\r
  color: #666;\r
  background: #fff;\r
  border: 1px solid #d9d9d9;\r
  border-radius: 4px;\r
  cursor: pointer;\r
  transition: all 0.2s;\r
  user-select: none;\r
}\r
\r
.demo-slot-edge-tooltip__clear-btn:hover {\r
  color: #1890ff;\r
  border-color: #1890ff;\r
}\r
\r
.demo-slot-edge-tooltip__log-content {\r
  flex: 1;\r
  overflow-y: auto;\r
  font-size: 12px;\r
  line-height: 1.8;\r
}\r
\r
.demo-slot-edge-tooltip__log-item {\r
  padding: 4px 0;\r
  color: #555;\r
  font-family: 'Monaco', 'Menlo', 'Consolas', monospace;\r
  border-bottom: 1px solid #f0f0f0;\r
}\r
\r
.demo-slot-edge-tooltip__log-empty {\r
  padding: 20px;\r
  text-align: center;\r
  color: #999;\r
  font-size: 13px;\r
  line-height: 1.6;\r
}\r
\r
/* ═══════════════════════════════════════════════════════════════════════════\r
   画布容器\r
   ═══════════════════════════════════════════════════════════════════════════ */\r
.demo-slot-edge-tooltip__canvas {\r
  flex: 1;\r
  position: relative;\r
  background: #ffffff;\r
  overflow: hidden;\r
}\r
\r
/* 【测试】自定义连线标签 */\r
.custom-edge-label {\r
  display: inline-flex;\r
  align-items: center;\r
  gap: 4px;\r
  padding: 2px 8px;\r
  background: #fff;\r
  border: 1px solid #cce3f9;\r
  border-radius: 3px;\r
  font-size: 12px;\r
  color: #999999;\r
  white-space: nowrap;\r
  box-shadow: 0 1px 4px rgba(22, 119, 255, 0.2);\r
  pointer-events: none;\r
  font-weight: 500;\r
  filter: drop-shadow(0 1px 2px rgba(0, 0, 0, 0.1));\r
}\r
.custom-edge-label-selected {\r
  color: #1677ff;\r
  border: 1px solid #1677ff;\r
}\r
\r
.custom-edge-label__icon {\r
  font-size: 11px;\r
  flex-shrink: 0;\r
}\r
\r
.custom-edge-label__text {\r
  max-width: 80px;\r
  overflow: hidden;\r
  text-overflow: ellipsis;\r
}\r
</style>\r
`,Rl={class:"demo-slot-palette"},zl={class:"demo-slot-palette__log"},Al={class:"demo-slot-palette__log-content"},Ml={class:"demo-slot-palette__canvas"},Wl={class:"custom-palette"},Il={class:"custom-palette__section"},Pl=["onMousedown"],Gl={class:"custom-palette__item-info"},Ol={class:"custom-palette__item-label"},Hl={class:"custom-palette__item-hint"},Bl={class:"cvn-task__body"},Vl={class:"cvn-task__title"},Ul={class:"cvn-task__owner"},Zl={class:"cvn-notice","data-cvn-root":""},ql={class:"cvn-notice__body"},jl={class:"cvn-notice__title"},Yl={class:"cvn-notice__desc"},Xl=G({__name:"demo-slot-node",setup(T){const v=S(null),a=S(null),c=S("canvas");function l(r){r.length===0?(v.value=null,a.value=null,c.value="canvas",s("📌 显示画布配置")):r.length===1?r[0].isNode()?(v.value=r[0],a.value=null,c.value="node",s(`📌 选中节点: ${v.value.label||v.value.id}`)):r[0].isEdge()&&(v.value=null,a.value=r[0],c.value="edge",s(`📌 选中连线: ${a.value.id}`)):(v.value=null,a.value=null,c.value="none",s(`📌 选中 ${r.length} 个元素`))}const g=S([]),x=S([{type:"custom-nodetype1",label:"自定义任务",icon:"📋",hint:"用于任务处理",color:"#fa8c16",width:160,height:80,data:{owner:"测试1",detailPannelInfo:{clazz:"123333"}}},{type:"custom-nodetype2",label:"自定义通知",icon:"🔔",hint:"用于消息通知",color:"#52c41a",width:140,height:70,data:{owner:"测试222"}}]);function s(r){const p=new Date().toLocaleTimeString();g.value.push(`[${p}] ${r}`)}function o(){g.value=[]}function t(r){s("🔧 beforeGraphInit: 开始注册自定义节点")}function e(r,p){s("✅ 画布初始化完成"),s("🎨 自定义节点面板已渲染"),s("💡 提示: 点击左侧节点拖拽到画布")}function i(r,p,m){s(`🎯 开始拖拽: ${p.label}`),console.log("nodeTypenodeTypenodeTypenodeTypenodeType::",p),m(r,{shape:"common-vue-node",label:p.label,width:p.width,height:p.height,"node-type":p.type,data:{nodeType:p.type,...p.data}})}return(r,p)=>(h(),b("div",Rl,[n("div",zl,[n("div",{class:"demo-slot-palette__log-header"},[p[0]||(p[0]=n("h4",null,"事件日志",-1)),n("button",{class:"demo-slot-palette__clear-btn",onClick:o,title:"清除日志"}," 清除 ")]),n("div",Al,[(h(!0),b(O,null,H(g.value,(m,u)=>(h(),b("div",{key:u,class:"demo-slot-palette__log-item"},D(m),1))),128))])]),n("div",Ml,[f(F(V),{mode:"design","before-graph-init":t,onReady:e,onSelectionChange:l},{palette:E(({onStartDrag:m})=>[n("div",Wl,[p[2]||(p[2]=n("div",{class:"custom-palette__header"},[n("h3",{class:"custom-palette__title"},"自定义节点"),n("span",{class:"custom-palette__desc"},"拖拽到画布")],-1)),n("div",Il,[p[1]||(p[1]=n("div",{class:"custom-palette__section-title"},"基础节点",-1)),(h(!0),b(O,null,H(x.value,u=>(h(),b("div",{key:u.type,class:"custom-palette__item",onMousedown:N=>i(N,u,m)},[n("div",{class:"custom-palette__item-icon",style:rn({background:u.color})},D(u.icon),5),n("div",Gl,[n("div",Ol,D(u.label),1),n("div",Hl,D(u.hint),1)])],40,Pl))),128))])])]),"node-custom-nodetype1":E(({node:m,graph:u,data:N,label:k,state:d})=>{var _;return[n("div",{class:an(["cvn-task",{"cvn-task--selected":(m==null?void 0:m.id)==((_=v.value)==null?void 0:_.id)}]),"data-cvn-root":""},[p[3]||(p[3]=n("div",{class:"cvn-task__bar"},null,-1)),n("div",Bl,[n("div",Vl,D(k||"自定义vue插槽节点1"),1),n("div",Ul,"负责人："+D(N.owner||"未指定")+" state: "+D(d),1)])],2)]}),"node-custom-nodetype2":E(({node:m,graph:u,data:N,state:k})=>[n("div",Zl,[p[4]||(p[4]=n("div",{class:"cvn-notice__icon"},"🔔",-1)),n("div",ql,[n("div",jl,D(N.label||"自定义vue插槽节点2"),1),n("div",Yl,"通知类型节点 state: "+D(k),1)])])]),_:1})])]))}}),Jl=U(Xl,[["__scopeId","data-v-ab8ba508"]]),Kl=`<template>\r
  <div class="demo-slot-palette">\r
    <!-- 事件日志面板 -->\r
    <div class="demo-slot-palette__log">\r
      <div class="demo-slot-palette__log-header">\r
        <h4>事件日志</h4>\r
        <button class="demo-slot-palette__clear-btn" @click="clearLogs" title="清除日志">\r
          清除\r
        </button>\r
      </div>\r
      <div class="demo-slot-palette__log-content">\r
        <div v-for="(log, index) in logs" :key="index" class="demo-slot-palette__log-item">\r
          {{ log }}\r
        </div>\r
      </div>\r
    </div>\r
\r
    <!-- 画布容器 -->\r
    <div class="demo-slot-palette__canvas">\r
      <FlowDesignerLayout\r
        mode="design"\r
        :before-graph-init="handleBeforeGraphInit"\r
        @ready="handleReady"\r
        @selection-change="handleSelectionChange"\r
      >\r
        <!-- 自定义节点面板插槽 -->\r
        <template #palette="{ onStartDrag }">\r
          <div class="custom-palette">\r
            <div class="custom-palette__header">\r
              <h3 class="custom-palette__title">自定义节点</h3>\r
              <span class="custom-palette__desc">拖拽到画布</span>\r
            </div>\r
\r
            <div class="custom-palette__section">\r
              <div class="custom-palette__section-title">基础节点</div>\r
              <div\r
                v-for="nodeType in customNodeTypes"\r
                :key="nodeType.type"\r
                class="custom-palette__item"\r
                @mousedown="(e) => handleStartDrag(e, nodeType, onStartDrag)"\r
              >\r
                <div class="custom-palette__item-icon" :style="{ background: nodeType.color }">\r
                  {{ nodeType.icon }}\r
                </div>\r
                <div class="custom-palette__item-info">\r
                  <div class="custom-palette__item-label">{{ nodeType.label }}</div>\r
                  <div class="custom-palette__item-hint">{{ nodeType.hint }}</div>\r
                </div>\r
              </div>\r
            </div>\r
          </div>\r
        </template>\r
\r
        <!-- node-type="custom-nodetype1" 的节点内容 -->\r
        <template #node-custom-nodetype1="{ node, graph, data, label, state }">\r
          <div class="cvn-task" data-cvn-root :class="{ 'cvn-task--selected': node?.id == selectedNode?.id }">\r
            <div class="cvn-task__bar" />\r
            <div class="cvn-task__body">\r
              <!-- ✅ 新方式：使用响应式 label、data 和 state -->\r
              <div class="cvn-task__title">{{ label || '自定义vue插槽节点1' }}</div>\r
              <div class="cvn-task__owner">负责人：{{ data.owner || '未指定' }} state: {{ state }}</div>\r
            </div>\r
          </div>\r
        </template>\r
\r
        <!-- node-type="custom-nodetype2" 的节点内容 -->\r
        <template #node-custom-nodetype2="{ node, graph, data, state }">\r
          <div class="cvn-notice" data-cvn-root>\r
            <div class="cvn-notice__icon">🔔</div>\r
            <div class="cvn-notice__body">\r
              <!-- ✅ 新方式：使用响应式 data 和 state -->\r
              <div class="cvn-notice__title">{{ data.label || '自定义vue插槽节点2' }}</div>\r
              <div class="cvn-notice__desc">通知类型节点 state: {{ state }}</div>\r
            </div>\r
          </div>\r
        </template>\r
      </FlowDesignerLayout>\r
    </div>\r
  </div>\r
</template>\r
\r
<script setup lang="ts">\r
import { ref } from 'vue'\r
//import FlowDesignerLayout   from '@/components/FlowDesigner/FlowDesignerLayout.vue'\r
import { FlowDesignerLayout }  from '@quick-code/x6-flow-designer'\r
import type { FlowDesigner, FlowDesignerOptions } from '@quick-code/x6-flow-designer'\r
import {Edge, Graph, Node} from '@antv/x6'\r
\r
const selectedNode = ref<Node | null>(null)\r
const selectedEdge = ref<Edge | null>(null)\r
const selectionType = ref<'none' | 'node' | 'edge' | 'canvas'>('canvas')\r
\r
function handleSelectionChange(cells: any[]) {\r
  if (cells.length === 0) {\r
    // 未选中任何元素，显示画布配置\r
    selectedNode.value = null\r
    selectedEdge.value = null\r
    selectionType.value = 'canvas'\r
    addLog('📌 显示画布配置')\r
  } else if (cells.length === 1) {\r
    if (cells[0].isNode()) {\r
      // 选中节点\r
      selectedNode.value = cells[0] as Node\r
      selectedEdge.value = null\r
      selectionType.value = 'node'\r
      addLog(\`📌 选中节点: \${selectedNode.value.label || selectedNode.value.id}\`)\r
    } else if (cells[0].isEdge()) {\r
      // 选中连线\r
      selectedNode.value = null\r
      selectedEdge.value = cells[0] as Edge\r
      selectionType.value = 'edge'\r
      addLog(\`📌 选中连线: \${selectedEdge.value.id}\`)\r
    }\r
  } else {\r
    // 多选\r
    selectedNode.value = null\r
    selectedEdge.value = null\r
    selectionType.value = 'none'\r
    addLog(\`📌 选中 \${cells.length} 个元素\`)\r
  }\r
}\r
\r
const logs = ref<string[]>([])\r
const customNodeTypes = ref([\r
  {\r
    type: 'custom-nodetype1',\r
    label: '自定义任务',\r
    icon: '📋',\r
    hint: '用于任务处理',\r
    color: '#fa8c16',\r
    width: 160,\r
    height: 80,\r
    data: {\r
      owner: '测试1',\r
      detailPannelInfo: {\r
        clazz:'123333'\r
      }\r
    }\r
  },\r
  {\r
    type: 'custom-nodetype2',\r
    label: '自定义通知',\r
    icon: '🔔',\r
    hint: '用于消息通知',\r
    color: '#52c41a',\r
    width: 140,\r
    height: 70,\r
    data: {\r
      owner: '测试222'\r
    }\r
  },\r
])\r
\r
function addLog(message: string) {\r
  const timestamp = new Date().toLocaleTimeString()\r
  logs.value.push(\`[\${timestamp}] \${message}\`)\r
}\r
\r
function clearLogs() {\r
  logs.value = []\r
}\r
\r
/**\r
 * Graph 初始化前钩子：注册自定义 X6 原生节点\r
 */\r
function handleBeforeGraphInit(options: FlowDesignerOptions) {\r
  addLog('🔧 beforeGraphInit: 开始注册自定义节点')\r
\r
\r
}\r
\r
function handleReady(designer: FlowDesigner, graph: Graph) {\r
\r
  addLog('✅ 画布初始化完成')\r
  addLog('🎨 自定义节点面板已渲染')\r
  addLog('💡 提示: 点击左侧节点拖拽到画布')\r
}\r
\r
function handleStartDrag(e: MouseEvent, nodeType: any, onStartDrag: any) {\r
  addLog(\`🎯 开始拖拽: \${nodeType.label}\`)\r
  console.log('nodeTypenodeTypenodeTypenodeTypenodeType::', nodeType);\r
  // 使用 palette 插槽提供的 onStartDrag 函数\r
  // 参数：(event, nodeConfig)\r
  // nodeConfig 是 X6 Node 的配置对象，包含所有节点属性\r
  onStartDrag(e, {\r
    shape: 'common-vue-node',   // X6 节点类型\r
    label: nodeType.label,      // 节点标签（顶级属性）\r
    width: nodeType.width,      // 节点宽度（顶级属性）\r
    height: nodeType.height,    // 节点高度（顶级属性）\r
    'node-type': nodeType.type,\r
    data: {\r
      nodeType: nodeType.type,  // Vue 插槽名称，对应 <template #node-xxx>\r
      ...nodeType.data,         // 展开所有业务数据（owner 等）\r
    }\r
  })\r
}\r
<\/script>\r
\r
<style scoped>\r
.demo-slot-palette {\r
  display: flex;\r
  height: 100%;\r
  min-height: 500px;\r
  gap: 16px;\r
}\r
\r
.demo-slot-palette__log {\r
  width: 280px;\r
  border: 1px solid #e8e8e8;\r
  border-radius: 8px;\r
  padding: 16px;\r
  background: #fafafa;\r
  overflow: hidden;\r
  display: flex;\r
  flex-direction: column;\r
}\r
\r
.demo-slot-palette__log-header {\r
  display: flex;\r
  justify-content: space-between;\r
  align-items: center;\r
  margin-bottom: 12px;\r
}\r
\r
.demo-slot-palette__log h4 {\r
  margin: 0;\r
  font-size: 14px;\r
  color: #1a1a2e;\r
  font-weight: 600;\r
}\r
\r
.demo-slot-palette__clear-btn {\r
  padding: 2px 8px;\r
  font-size: 12px;\r
  color: #666;\r
  background: #fff;\r
  border: 1px solid #d9d9d9;\r
  border-radius: 4px;\r
  cursor: pointer;\r
  transition: all 0.2s;\r
  user-select: none;\r
}\r
\r
.demo-slot-palette__clear-btn:hover {\r
  color: #1890ff;\r
  border-color: #1890ff;\r
}\r
\r
.demo-slot-palette__log-content {\r
  flex: 1;\r
  overflow-y: auto;\r
  font-size: 12px;\r
  line-height: 1.8;\r
}\r
\r
.demo-slot-palette__log-item {\r
  padding: 4px 0;\r
  color: #555;\r
  font-family: 'Monaco', 'Menlo', 'Consolas', monospace;\r
  border-bottom: 1px solid #f0f0f0;\r
}\r
\r
.demo-slot-palette__log-item:last-child {\r
  border-bottom: none;\r
}\r
\r
.demo-slot-palette__canvas {\r
  flex: 1;\r
  border: 1px solid #e8e8e8;\r
  border-radius: 8px;\r
  overflow: hidden;\r
  background: #fff;\r
}\r
\r
/* ==================== 自定义节点面板样式 ==================== */\r
.custom-palette {\r
  display: flex;\r
  flex-direction: column;\r
  height: 100%;\r
  background: linear-gradient(to bottom, #f9fafb, #ffffff);\r
  border-right: 1px solid #e8e8e8;\r
  width: 180px;\r
}\r
\r
.custom-palette__header {\r
  padding: 16px;\r
  border-bottom: 2px solid #e8e8e8;\r
  background: #fff;\r
}\r
\r
.custom-palette__title {\r
  margin: 0 0 4px 0;\r
  font-size: 16px;\r
  font-weight: 600;\r
  color: #1a1a2e;\r
}\r
\r
.custom-palette__desc {\r
  font-size: 12px;\r
  color: #999;\r
}\r
\r
.custom-palette__section {\r
  padding: 12px;\r
}\r
\r
.custom-palette__section-title {\r
  font-size: 11px;\r
  font-weight: 600;\r
  color: #999;\r
  text-transform: uppercase;\r
  letter-spacing: 0.06em;\r
  margin-bottom: 8px;\r
  padding: 0 4px;\r
}\r
\r
.custom-palette__item {\r
  display: flex;\r
  align-items: center;\r
  gap: 12px;\r
  padding: 10px;\r
  margin-bottom: 8px;\r
  background: #fff;\r
  border: 1px solid #e8e8e8;\r
  border-radius: 6px;\r
  cursor: move;\r
  transition: all 0.2s;\r
  user-select: none;\r
}\r
\r
.custom-palette__item:hover {\r
  border-color: #1677ff;\r
  box-shadow: 0 2px 8px rgba(22, 119, 255, 0.15);\r
  transform: translateY(-1px);\r
}\r
\r
.custom-palette__item:active {\r
  transform: translateY(0);\r
  box-shadow: 0 1px 4px rgba(22, 119, 255, 0.2);\r
}\r
\r
.custom-palette__item-icon {\r
  width: 36px;\r
  height: 36px;\r
  display: flex;\r
  align-items: center;\r
  justify-content: center;\r
  border-radius: 6px;\r
  font-size: 18px;\r
  flex-shrink: 0;\r
}\r
\r
.custom-palette__item-info {\r
  flex: 1;\r
  min-width: 0;\r
}\r
\r
.custom-palette__item-label {\r
  font-size: 13px;\r
  font-weight: 500;\r
  color: #333;\r
  margin-bottom: 2px;\r
}\r
\r
.custom-palette__item-hint {\r
  font-size: 11px;\r
  color: #999;\r
  white-space: nowrap;\r
  overflow: hidden;\r
  text-overflow: ellipsis;\r
}\r
\r
/* ==================== 自定义节点样式 ==================== */\r
/* 任务节点样式 */\r
.cvn-task {\r
  display: flex;\r
  flex-direction: column;\r
  min-width: 260px;\r
  background: #fff;\r
  border: 1.5px solid #e8e8e8;\r
  border-radius: 8px;\r
  overflow: hidden;\r
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);\r
  user-select: none;\r
  transition: border-color 0.2s, box-shadow 0.2s;\r
}\r
\r
.cvn-task:hover {\r
  border-color: #ffa940;\r
}\r
\r
.cvn-task--selected {\r
  border: 3px solid #fa8c16;\r
  box-shadow: 0 0 0 3px rgba(250, 140, 22, 0.15);\r
}\r
\r
.cvn-task__bar {\r
  height: 4px;\r
  flex-shrink: 0;\r
  background: linear-gradient(90deg, #fa8c16 0%, #ffc069 100%);\r
}\r
\r
.cvn-task__body {\r
  padding: 10px 14px;\r
}\r
\r
.cvn-task__title {\r
  font-size: 13px;\r
  font-weight: 600;\r
  color: #262626;\r
}\r
\r
.cvn-task__owner {\r
  font-size: 11px;\r
  color: #8c8c8c;\r
  margin-top: 4px;\r
}\r
\r
/* 通知节点样式 */\r
.cvn-notice {\r
  display: flex;\r
  align-items: center;\r
  gap: 10px;\r
  min-width: 140px;\r
  padding: 10px 14px;\r
  background: #fff;\r
  border: 1.5px solid #e8e8e8;\r
  border-radius: 8px;\r
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);\r
  user-select: none;\r
  transition: border-color 0.2s, box-shadow 0.2s;\r
}\r
\r
.cvn-notice:hover {\r
  border-color: #73d13d;\r
}\r
\r
.cvn-notice--selected {\r
  border: 2px solid #52c41a;\r
  box-shadow: 0 0 0 3px rgba(82, 196, 26, 0.15);\r
}\r
\r
.cvn-notice__icon {\r
  font-size: 24px;\r
  flex-shrink: 0;\r
}\r
\r
.cvn-notice__body {\r
  flex: 1;\r
  min-width: 0;\r
}\r
\r
.cvn-notice__title {\r
  font-size: 13px;\r
  font-weight: 600;\r
  color: #262626;\r
  margin-bottom: 2px;\r
}\r
\r
.cvn-notice__desc {\r
  font-size: 11px;\r
  color: #8c8c8c;\r
}\r
</style>\r
`,Ql={class:"demo-permission-layout"},ni={class:"permission-panel"},ei={class:"permission-panel__content"},ri={class:"permission-group"},ti={class:"permission-list"},oi={class:"permission-item"},si={class:"permission-item"},li={class:"permission-item"},ii={class:"permission-item"},ai={class:"permission-item"},di={class:"permission-item"},ci={class:"permission-group"},pi={class:"permission-list"},gi={class:"permission-item"},fi={class:"permission-item"},mi={class:"permission-item"},ui={class:"permission-item"},hi={class:"permission-item"},bi={class:"permission-item"},vi={class:"permission-item"},_i={class:"permission-item"},xi={class:"permission-item"},yi={class:"permission-group"},ki={class:"permission-list"},wi={class:"permission-item"},Si={class:"permission-item"},Ni={class:"permission-item"},Ci={class:"permission-item"},Di={class:"permission-item"},$i={class:"permission-group"},Ei={class:"permission-list"},Fi={class:"permission-item"},Li={class:"permission-item"},Ti={class:"permission-item"},Ri={class:"permission-item"},zi={class:"permission-group"},Ai={class:"permission-list"},Mi={class:"permission-item"},Wi={class:"permission-item"},Ii={class:"permission-group"},Pi={class:"permission-list"},Gi={class:"permission-item"},Oi={class:"permission-item"},Hi={class:"permission-group"},Bi={class:"permission-list"},Vi={class:"permission-item"},Ui={class:"permission-item"},Zi={class:"permission-item"},qi={class:"permission-item"},ji={class:"permission-group"},Yi={class:"permission-list"},Xi={class:"permission-item"},Ji={class:"permission-item"},Ki={class:"permission-item"},Qi={class:"permission-item"},na={class:"designer-container"},ea=G({__name:"demo-permission-01",setup(T,{expose:v}){const a=S(null),c=S("design"),l=yn({design:{showToolbar:!0,showNodePalette:!0,showPropertiesPanel:!0,showContextMenu:!0,showMinimap:!0,showSearch:!0,canDrag:!0,canConnect:!0,canDelete:!0,canCopy:!0,canPaste:!0,canGroup:!0,canToFront:!0,canToBack:!0,canAddNode:!0,canMultipleSelect:!0,canSelectAll:!0,canAlign:!0,canAlignLeft:!0,canAlignRight:!0,canAlignTop:!0,canAlignBottom:!0,canImport:!0,canExport:!0,canUndo:!0,canRedo:!0,canZoom:!0,canPan:!0,canFitView:!0,canResetView:!0,canHoverNode:!0,canHoverEdge:!0,canSelectNode:!0,canSelectEdge:!0,canNodeTooltip:!0,canEdgeTooltip:!0}});function g(s){if(vn)try{s.load(vn)}catch{K.error("加载失败")}}function x(s){K.success(`已切换至${{design:"设计",readonly:"只读",preview:"预览"}[s]}模式`),c.value=s}return v({layoutRef:a}),(s,o)=>{const t=fn("a-checkbox");return h(),b("div",Ql,[n("div",ni,[o[80]||(o[80]=n("div",{class:"permission-panel__header"},[n("h3",{class:"permission-panel__title"},"权限配置"),n("span",{class:"permission-panel__mode"},"Design 模式")],-1)),n("div",ei,[n("div",ri,[o[42]||(o[42]=n("h4",{class:"permission-group__title"},"🎨 界面显示",-1)),n("div",ti,[n("label",oi,[f(t,{checked:l.design.showToolbar,"onUpdate:checked":o[0]||(o[0]=e=>l.design.showToolbar=e)},null,8,["checked"]),o[36]||(o[36]=n("span",{class:"permission-item__label"},"显示工具栏",-1))]),n("label",si,[f(t,{checked:l.design.showNodePalette,"onUpdate:checked":o[1]||(o[1]=e=>l.design.showNodePalette=e)},null,8,["checked"]),o[37]||(o[37]=n("span",{class:"permission-item__label"},"显示节点面板",-1))]),n("label",li,[f(t,{checked:l.design.showPropertiesPanel,"onUpdate:checked":o[2]||(o[2]=e=>l.design.showPropertiesPanel=e)},null,8,["checked"]),o[38]||(o[38]=n("span",{class:"permission-item__label"},"显示属性面板",-1))]),n("label",ii,[f(t,{checked:l.design.showContextMenu,"onUpdate:checked":o[3]||(o[3]=e=>l.design.showContextMenu=e)},null,8,["checked"]),o[39]||(o[39]=n("span",{class:"permission-item__label"},"显示右键菜单",-1))]),n("label",ai,[f(t,{checked:l.design.showMinimap,"onUpdate:checked":o[4]||(o[4]=e=>l.design.showMinimap=e)},null,8,["checked"]),o[40]||(o[40]=n("span",{class:"permission-item__label"},"显示小地图",-1))]),n("label",di,[f(t,{checked:l.design.showSearch,"onUpdate:checked":o[5]||(o[5]=e=>l.design.showSearch=e)},null,8,["checked"]),o[41]||(o[41]=n("span",{class:"permission-item__label"},"显示搜索框",-1))])])]),n("div",ci,[o[52]||(o[52]=n("h4",{class:"permission-group__title"},"✏️ 编辑操作",-1)),n("div",pi,[n("label",gi,[f(t,{checked:l.design.canAddNode,"onUpdate:checked":o[6]||(o[6]=e=>l.design.canAddNode=e)},null,8,["checked"]),o[43]||(o[43]=n("span",{class:"permission-item__label"},"添加节点",-1))]),n("label",fi,[f(t,{checked:l.design.canDrag,"onUpdate:checked":o[7]||(o[7]=e=>l.design.canDrag=e)},null,8,["checked"]),o[44]||(o[44]=n("span",{class:"permission-item__label"},"拖动节点",-1))]),n("label",mi,[f(t,{checked:l.design.canConnect,"onUpdate:checked":o[8]||(o[8]=e=>l.design.canConnect=e)},null,8,["checked"]),o[45]||(o[45]=n("span",{class:"permission-item__label"},"创建连线",-1))]),n("label",ui,[f(t,{checked:l.design.canDelete,"onUpdate:checked":o[9]||(o[9]=e=>l.design.canDelete=e)},null,8,["checked"]),o[46]||(o[46]=n("span",{class:"permission-item__label"},"删除元素",-1))]),n("label",hi,[f(t,{checked:l.design.canCopy,"onUpdate:checked":o[10]||(o[10]=e=>l.design.canCopy=e)},null,8,["checked"]),o[47]||(o[47]=n("span",{class:"permission-item__label"},"复制",-1))]),n("label",bi,[f(t,{checked:l.design.canPaste,"onUpdate:checked":o[11]||(o[11]=e=>l.design.canPaste=e)},null,8,["checked"]),o[48]||(o[48]=n("span",{class:"permission-item__label"},"粘贴",-1))]),n("label",vi,[f(t,{checked:l.design.canGroup,"onUpdate:checked":o[12]||(o[12]=e=>l.design.canGroup=e)},null,8,["checked"]),o[49]||(o[49]=n("span",{class:"permission-item__label"},"节点成组",-1))]),n("label",_i,[f(t,{checked:l.design.canToFront,"onUpdate:checked":o[13]||(o[13]=e=>l.design.canToFront=e)},null,8,["checked"]),o[50]||(o[50]=n("span",{class:"permission-item__label"},"层级前置",-1))]),n("label",xi,[f(t,{checked:l.design.canToBack,"onUpdate:checked":o[14]||(o[14]=e=>l.design.canToBack=e)},null,8,["checked"]),o[51]||(o[51]=n("span",{class:"permission-item__label"},"层级后置",-1))])])]),n("div",yi,[o[58]||(o[58]=n("h4",{class:"permission-group__title"},"📐 对齐操作",-1)),n("div",ki,[n("label",wi,[f(t,{checked:l.design.canAlign,"onUpdate:checked":o[15]||(o[15]=e=>l.design.canAlign=e)},null,8,["checked"]),o[53]||(o[53]=n("span",{class:"permission-item__label"},"对齐总开关",-1))]),n("label",Si,[f(t,{checked:l.design.canAlignLeft,"onUpdate:checked":o[16]||(o[16]=e=>l.design.canAlignLeft=e)},null,8,["checked"]),o[54]||(o[54]=n("span",{class:"permission-item__label"},"左对齐",-1))]),n("label",Ni,[f(t,{checked:l.design.canAlignRight,"onUpdate:checked":o[17]||(o[17]=e=>l.design.canAlignRight=e)},null,8,["checked"]),o[55]||(o[55]=n("span",{class:"permission-item__label"},"右对齐",-1))]),n("label",Ci,[f(t,{checked:l.design.canAlignTop,"onUpdate:checked":o[18]||(o[18]=e=>l.design.canAlignTop=e)},null,8,["checked"]),o[56]||(o[56]=n("span",{class:"permission-item__label"},"上对齐",-1))]),n("label",Di,[f(t,{checked:l.design.canAlignBottom,"onUpdate:checked":o[19]||(o[19]=e=>l.design.canAlignBottom=e)},null,8,["checked"]),o[57]||(o[57]=n("span",{class:"permission-item__label"},"下对齐",-1))])])]),n("div",$i,[o[63]||(o[63]=n("h4",{class:"permission-group__title"},"🎯 选择操作",-1)),n("div",Ei,[n("label",Fi,[f(t,{checked:l.design.canSelectNode,"onUpdate:checked":o[20]||(o[20]=e=>l.design.canSelectNode=e)},null,8,["checked"]),o[59]||(o[59]=n("span",{class:"permission-item__label"},"选中节点",-1))]),n("label",Li,[f(t,{checked:l.design.canSelectEdge,"onUpdate:checked":o[21]||(o[21]=e=>l.design.canSelectEdge=e)},null,8,["checked"]),o[60]||(o[60]=n("span",{class:"permission-item__label"},"选中连线",-1))]),n("label",Ti,[f(t,{checked:l.design.canMultipleSelect,"onUpdate:checked":o[22]||(o[22]=e=>l.design.canMultipleSelect=e)},null,8,["checked"]),o[61]||(o[61]=n("span",{class:"permission-item__label"},"多选/框选",-1))]),n("label",Ri,[f(t,{checked:l.design.canSelectAll,"onUpdate:checked":o[23]||(o[23]=e=>l.design.canSelectAll=e)},null,8,["checked"]),o[62]||(o[62]=n("span",{class:"permission-item__label"},"全选",-1))])])]),n("div",zi,[o[66]||(o[66]=n("h4",{class:"permission-group__title"},"📦 导入导出",-1)),n("div",Ai,[n("label",Mi,[f(t,{checked:l.design.canImport,"onUpdate:checked":o[24]||(o[24]=e=>l.design.canImport=e)},null,8,["checked"]),o[64]||(o[64]=n("span",{class:"permission-item__label"},"导入数据",-1))]),n("label",Wi,[f(t,{checked:l.design.canExport,"onUpdate:checked":o[25]||(o[25]=e=>l.design.canExport=e)},null,8,["checked"]),o[65]||(o[65]=n("span",{class:"permission-item__label"},"导出数据",-1))])])]),n("div",Ii,[o[69]||(o[69]=n("h4",{class:"permission-group__title"},"⏱️ 历史操作",-1)),n("div",Pi,[n("label",Gi,[f(t,{checked:l.design.canUndo,"onUpdate:checked":o[26]||(o[26]=e=>l.design.canUndo=e)},null,8,["checked"]),o[67]||(o[67]=n("span",{class:"permission-item__label"},"撤销",-1))]),n("label",Oi,[f(t,{checked:l.design.canRedo,"onUpdate:checked":o[27]||(o[27]=e=>l.design.canRedo=e)},null,8,["checked"]),o[68]||(o[68]=n("span",{class:"permission-item__label"},"重做",-1))])])]),n("div",Hi,[o[74]||(o[74]=n("h4",{class:"permission-group__title"},"👁️ 视图操作",-1)),n("div",Bi,[n("label",Vi,[f(t,{checked:l.design.canZoom,"onUpdate:checked":o[28]||(o[28]=e=>l.design.canZoom=e)},null,8,["checked"]),o[70]||(o[70]=n("span",{class:"permission-item__label"},"缩放画布",-1))]),n("label",Ui,[f(t,{checked:l.design.canPan,"onUpdate:checked":o[29]||(o[29]=e=>l.design.canPan=e)},null,8,["checked"]),o[71]||(o[71]=n("span",{class:"permission-item__label"},"拖拽画布",-1))]),n("label",Zi,[f(t,{checked:l.design.canFitView,"onUpdate:checked":o[30]||(o[30]=e=>l.design.canFitView=e)},null,8,["checked"]),o[72]||(o[72]=n("span",{class:"permission-item__label"},"适应窗口",-1))]),n("label",qi,[f(t,{checked:l.design.canResetView,"onUpdate:checked":o[31]||(o[31]=e=>l.design.canResetView=e)},null,8,["checked"]),o[73]||(o[73]=n("span",{class:"permission-item__label"},"重置视图",-1))])])]),n("div",ji,[o[79]||(o[79]=n("h4",{class:"permission-group__title"},"💬 交互反馈",-1)),n("div",Yi,[n("label",Xi,[f(t,{checked:l.design.canHoverNode,"onUpdate:checked":o[32]||(o[32]=e=>l.design.canHoverNode=e)},null,8,["checked"]),o[75]||(o[75]=n("span",{class:"permission-item__label"},"节点 Hover 高亮",-1))]),n("label",Ji,[f(t,{checked:l.design.canHoverEdge,"onUpdate:checked":o[33]||(o[33]=e=>l.design.canHoverEdge=e)},null,8,["checked"]),o[76]||(o[76]=n("span",{class:"permission-item__label"},"连线 Hover 高亮",-1))]),n("label",Ki,[f(t,{checked:l.design.canNodeTooltip,"onUpdate:checked":o[34]||(o[34]=e=>l.design.canNodeTooltip=e)},null,8,["checked"]),o[77]||(o[77]=n("span",{class:"permission-item__label"},"节点 Tooltip",-1))]),n("label",Qi,[f(t,{checked:l.design.canEdgeTooltip,"onUpdate:checked":o[35]||(o[35]=e=>l.design.canEdgeTooltip=e)},null,8,["checked"]),o[78]||(o[78]=n("span",{class:"permission-item__label"},"连线 Tooltip",-1))])])])])]),n("div",na,[f(F(V),{class:"flow-designer-test",ref_key:"layoutRef",ref:a,mode:c.value,"permission-config":l,onReady:g,onModeChange:x},{toolbar:E(e=>[f(An,{"zoom-percent":e.zoomPercent,"has-selection":e.hasSelection,"can-paste":e.canPaste,"can-group":e.canGroup,"can-ungroup":e.canUngroup,"can-undo":e.canUndo,"can-redo":e.canRedo,"designer-mode":e.currentMode,onUndo:e.onUndo,onRedo:e.onRedo,onZoomIn:e.onZoomIn,onZoomOut:e.onZoomOut,onZoomTo:e.onZoomTo,onFitView:e.onFitView,onResetView:e.onResetView,onCopy:e.onCopy,onPaste:e.onPaste,onToFront:e.onToFront,onToBack:e.onToBack,onAlignLeft:e.onAlignLeft,onAlignRight:e.onAlignRight,onAlignTop:e.onAlignTop,onAlignBottom:e.onAlignBottom,onGroup:e.onGroup,onUngroup:e.onUngroup,onExport:e.onExport,onImport:e.onImport,onOpenSettings:e.onOpenSettings,onModeChange:e.onModeChange},null,8,["zoom-percent","has-selection","can-paste","can-group","can-ungroup","can-undo","can-redo","designer-mode","onUndo","onRedo","onZoomIn","onZoomOut","onZoomTo","onFitView","onResetView","onCopy","onPaste","onToFront","onToBack","onAlignLeft","onAlignRight","onAlignTop","onAlignBottom","onGroup","onUngroup","onExport","onImport","onOpenSettings","onModeChange"])]),palette:E(e=>[f(zn,{onStartDrag:e.onStartDrag},null,8,["onStartDrag"])]),properties:E(()=>[f(Rn)]),_:1},8,["mode","permission-config"])])])}}}),ra=U(ea,[["__scopeId","data-v-e0cb525a"]]),ta=`\uFEFF<template>\r
  <div class="demo-permission-layout">\r
    <!-- 左侧权限配置面板 -->\r
    <div class="permission-panel">\r
      <div class="permission-panel__header">\r
        <h3 class="permission-panel__title">权限配置</h3>\r
        <span class="permission-panel__mode">Design 模式</span>\r
      </div>\r
\r
      <div class="permission-panel__content">\r
        <!-- UI 显示权限 -->\r
        <div class="permission-group">\r
          <h4 class="permission-group__title">🎨 界面显示</h4>\r
          <div class="permission-list">\r
            <label class="permission-item">\r
              <a-checkbox v-model:checked="permissionConfig.design.showToolbar" />\r
              <span class="permission-item__label">显示工具栏</span>\r
            </label>\r
            <label class="permission-item">\r
              <a-checkbox v-model:checked="permissionConfig.design.showNodePalette" />\r
              <span class="permission-item__label">显示节点面板</span>\r
            </label>\r
            <label class="permission-item">\r
              <a-checkbox v-model:checked="permissionConfig.design.showPropertiesPanel" />\r
              <span class="permission-item__label">显示属性面板</span>\r
            </label>\r
            <label class="permission-item">\r
              <a-checkbox v-model:checked="permissionConfig.design.showContextMenu" />\r
              <span class="permission-item__label">显示右键菜单</span>\r
            </label>\r
            <label class="permission-item">\r
              <a-checkbox v-model:checked="permissionConfig.design.showMinimap" />\r
              <span class="permission-item__label">显示小地图</span>\r
            </label>\r
            <label class="permission-item">\r
              <a-checkbox v-model:checked="permissionConfig.design.showSearch" />\r
              <span class="permission-item__label">显示搜索框</span>\r
            </label>\r
          </div>\r
        </div>\r
\r
        <!-- 编辑操作权限 -->\r
        <div class="permission-group">\r
          <h4 class="permission-group__title">✏️ 编辑操作</h4>\r
          <div class="permission-list">\r
            <label class="permission-item">\r
              <a-checkbox v-model:checked="permissionConfig.design.canAddNode" />\r
              <span class="permission-item__label">添加节点</span>\r
            </label>\r
            <label class="permission-item">\r
              <a-checkbox v-model:checked="permissionConfig.design.canDrag" />\r
              <span class="permission-item__label">拖动节点</span>\r
            </label>\r
            <label class="permission-item">\r
              <a-checkbox v-model:checked="permissionConfig.design.canConnect" />\r
              <span class="permission-item__label">创建连线</span>\r
            </label>\r
            <label class="permission-item">\r
              <a-checkbox v-model:checked="permissionConfig.design.canDelete" />\r
              <span class="permission-item__label">删除元素</span>\r
            </label>\r
            <label class="permission-item">\r
              <a-checkbox v-model:checked="permissionConfig.design.canCopy" />\r
              <span class="permission-item__label">复制</span>\r
            </label>\r
            <label class="permission-item">\r
              <a-checkbox v-model:checked="permissionConfig.design.canPaste" />\r
              <span class="permission-item__label">粘贴</span>\r
            </label>\r
            <label class="permission-item">\r
              <a-checkbox v-model:checked="permissionConfig.design.canGroup" />\r
              <span class="permission-item__label">节点成组</span>\r
            </label>\r
            <label class="permission-item">\r
              <a-checkbox v-model:checked="permissionConfig.design.canToFront" />\r
              <span class="permission-item__label">层级前置</span>\r
            </label>\r
            <label class="permission-item">\r
              <a-checkbox v-model:checked="permissionConfig.design.canToBack" />\r
              <span class="permission-item__label">层级后置</span>\r
            </label>\r
          </div>\r
        </div>\r
\r
        <!-- 对齐操作权限 -->\r
        <div class="permission-group">\r
          <h4 class="permission-group__title">📐 对齐操作</h4>\r
          <div class="permission-list">\r
            <label class="permission-item">\r
              <a-checkbox v-model:checked="permissionConfig.design.canAlign" />\r
              <span class="permission-item__label">对齐总开关</span>\r
            </label>\r
            <label class="permission-item">\r
              <a-checkbox v-model:checked="permissionConfig.design.canAlignLeft" />\r
              <span class="permission-item__label">左对齐</span>\r
            </label>\r
            <label class="permission-item">\r
              <a-checkbox v-model:checked="permissionConfig.design.canAlignRight" />\r
              <span class="permission-item__label">右对齐</span>\r
            </label>\r
            <label class="permission-item">\r
              <a-checkbox v-model:checked="permissionConfig.design.canAlignTop" />\r
              <span class="permission-item__label">上对齐</span>\r
            </label>\r
            <label class="permission-item">\r
              <a-checkbox v-model:checked="permissionConfig.design.canAlignBottom" />\r
              <span class="permission-item__label">下对齐</span>\r
            </label>\r
          </div>\r
        </div>\r
\r
        <!-- 选择操作权限 -->\r
        <div class="permission-group">\r
          <h4 class="permission-group__title">🎯 选择操作</h4>\r
          <div class="permission-list">\r
            <label class="permission-item">\r
              <a-checkbox v-model:checked="permissionConfig.design.canSelectNode" />\r
              <span class="permission-item__label">选中节点</span>\r
            </label>\r
            <label class="permission-item">\r
              <a-checkbox v-model:checked="permissionConfig.design.canSelectEdge" />\r
              <span class="permission-item__label">选中连线</span>\r
            </label>\r
            <label class="permission-item">\r
              <a-checkbox v-model:checked="permissionConfig.design.canMultipleSelect" />\r
              <span class="permission-item__label">多选/框选</span>\r
            </label>\r
            <label class="permission-item">\r
              <a-checkbox v-model:checked="permissionConfig.design.canSelectAll" />\r
              <span class="permission-item__label">全选</span>\r
            </label>\r
          </div>\r
        </div>\r
\r
        <!-- 导入导出权限 -->\r
        <div class="permission-group">\r
          <h4 class="permission-group__title">📦 导入导出</h4>\r
          <div class="permission-list">\r
            <label class="permission-item">\r
              <a-checkbox v-model:checked="permissionConfig.design.canImport" />\r
              <span class="permission-item__label">导入数据</span>\r
            </label>\r
            <label class="permission-item">\r
              <a-checkbox v-model:checked="permissionConfig.design.canExport" />\r
              <span class="permission-item__label">导出数据</span>\r
            </label>\r
          </div>\r
        </div>\r
\r
        <!-- 历史操作权限 -->\r
        <div class="permission-group">\r
          <h4 class="permission-group__title">⏱️ 历史操作</h4>\r
          <div class="permission-list">\r
            <label class="permission-item">\r
              <a-checkbox v-model:checked="permissionConfig.design.canUndo" />\r
              <span class="permission-item__label">撤销</span>\r
            </label>\r
            <label class="permission-item">\r
              <a-checkbox v-model:checked="permissionConfig.design.canRedo" />\r
              <span class="permission-item__label">重做</span>\r
            </label>\r
          </div>\r
        </div>\r
\r
        <!-- 视图操作权限 -->\r
        <div class="permission-group">\r
          <h4 class="permission-group__title">👁️ 视图操作</h4>\r
          <div class="permission-list">\r
            <label class="permission-item">\r
              <a-checkbox v-model:checked="permissionConfig.design.canZoom" />\r
              <span class="permission-item__label">缩放画布</span>\r
            </label>\r
            <label class="permission-item">\r
              <a-checkbox v-model:checked="permissionConfig.design.canPan" />\r
              <span class="permission-item__label">拖拽画布</span>\r
            </label>\r
            <label class="permission-item">\r
              <a-checkbox v-model:checked="permissionConfig.design.canFitView" />\r
              <span class="permission-item__label">适应窗口</span>\r
            </label>\r
            <label class="permission-item">\r
              <a-checkbox v-model:checked="permissionConfig.design.canResetView" />\r
              <span class="permission-item__label">重置视图</span>\r
            </label>\r
          </div>\r
        </div>\r
\r
        <!-- 交互反馈权限 -->\r
        <div class="permission-group">\r
          <h4 class="permission-group__title">💬 交互反馈</h4>\r
          <div class="permission-list">\r
            <label class="permission-item">\r
              <a-checkbox v-model:checked="permissionConfig.design.canHoverNode" />\r
              <span class="permission-item__label">节点 Hover 高亮</span>\r
            </label>\r
            <label class="permission-item">\r
              <a-checkbox v-model:checked="permissionConfig.design.canHoverEdge" />\r
              <span class="permission-item__label">连线 Hover 高亮</span>\r
            </label>\r
            <label class="permission-item">\r
              <a-checkbox v-model:checked="permissionConfig.design.canNodeTooltip" />\r
              <span class="permission-item__label">节点 Tooltip</span>\r
            </label>\r
            <label class="permission-item">\r
              <a-checkbox v-model:checked="permissionConfig.design.canEdgeTooltip" />\r
              <span class="permission-item__label">连线 Tooltip</span>\r
            </label>\r
          </div>\r
        </div>\r
      </div>\r
    </div>\r
\r
    <!-- 右侧流程设计器 -->\r
    <div class="designer-container">\r
      <FlowDesignerLayout\r
        class="flow-designer-test"\r
        ref="layoutRef"\r
        :mode="currentMode"\r
        :permission-config="permissionConfig"\r
        @ready="handleReady"\r
        @mode-change="handleModeChange"\r
      >\r
        <!-- 顶部工具栏 -->\r
        <template #toolbar="scope">\r
          <Toolbar\r
            :zoom-percent="scope.zoomPercent"\r
            :has-selection="scope.hasSelection"\r
            :can-paste="scope.canPaste"\r
            :can-group="scope.canGroup"\r
            :can-ungroup="scope.canUngroup"\r
            :can-undo="scope.canUndo"\r
            :can-redo="scope.canRedo"\r
            :designer-mode="scope.currentMode"\r
            @undo="scope.onUndo"\r
            @redo="scope.onRedo"\r
            @zoom-in="scope.onZoomIn"\r
            @zoom-out="scope.onZoomOut"\r
            @zoom-to="scope.onZoomTo"\r
            @fit-view="scope.onFitView"\r
            @reset-view="scope.onResetView"\r
            @copy="scope.onCopy"\r
            @paste="scope.onPaste"\r
            @to-front="scope.onToFront"\r
            @to-back="scope.onToBack"\r
            @align-left="scope.onAlignLeft"\r
            @align-right="scope.onAlignRight"\r
            @align-top="scope.onAlignTop"\r
            @align-bottom="scope.onAlignBottom"\r
            @group="scope.onGroup"\r
            @ungroup="scope.onUngroup"\r
            @export="scope.onExport"\r
            @import="scope.onImport"\r
            @open-settings="scope.onOpenSettings"\r
            @mode-change="scope.onModeChange"\r
          />\r
        </template>\r
\r
        <!-- 左侧节点面板 -->\r
        <template #palette="scope">\r
          <NodePalette @start-drag="scope.onStartDrag" />\r
        </template>\r
\r
        <!-- 右侧属性面板 -->\r
        <template #properties>\r
          <PropertiesPanel />\r
        </template>\r
\r
      </FlowDesignerLayout>\r
\r
      <!-- 模式选择器（固定在右上角） -->\r
<!--      <ModeSelection-->\r
<!--        :designer="designer"-->\r
<!--        @mode-change="handleModeChangeFromSelector"-->\r
<!--      />-->\r
    </div>\r
  </div>\r
</template>\r
\r
<script setup lang="ts">\r
import { ref, reactive, computed } from 'vue'\r
import { message } from 'ant-design-vue'\r
import { FlowDesignerLayout }  from '@quick-code/x6-flow-designer'\r
import type { FlowDesigner } from '@quick-code/x6-flow-designer'\r
import Toolbar from '@/views/Toolbar.vue'\r
import NodePalette from '@/views/NodePalette.vue'\r
import PropertiesPanel from '@/views/PropertiesPanel.vue'\r
import ModeSelection from '@/views/ModeSelection.vue'\r
\r
import node30 from '/testfile/node-30.json'\r
\r
\r
const layoutRef = ref<InstanceType<typeof FlowDesignerLayout> | null>(null)\r
// 测试用：搜索框插槽内的 input 引用（用于自动聚焦）\r
const searchInputRef = ref<HTMLInputElement | null>(null);\r
\r
// ─── Designer 实例（从 layoutRef 中提取，传递给 ModeSelection）──────────────\r
const designer = computed(() => layoutRef.value?.designer || null)\r
\r
// ─── 当前模式状态 ─────────────────────────────────────────────────────────────\r
const currentMode = ref('design')\r
\r
// ─── 权限配置（简化版：只配置需要覆盖默认值的权限）────────────────────────────\r
/**\r
 * 用户权限配置\r
 *\r
 * 说明：\r
 * 1. 只需配置需要覆盖默认值的权限项\r
 * 2. 未配置的权限项会自动使用 defaultPermissionConfig.ts 中的默认值\r
 * 3. 扩展模式会自动继承 design 模式的配置\r
 * 4. Designer 类内部会自动合并默认配置\r
 *\r
 * 默认值规则：\r
 * - design 模式：所有权限默认开启（true）\r
 * - readonly 模式：禁用编辑权限，保留查看权限\r
 * - preview 模式：最小化界面，只保留基本查看\r
 */\r
const permissionConfig = reactive({\r
  // ─── 设计模式 ───\r
  design: {\r
    // UI 显示\r
    showToolbar: true,\r
    showNodePalette: true,\r
    showPropertiesPanel: true,\r
    showContextMenu: true,\r
    showMinimap: true,\r
    showSearch: true,\r
\r
    // 编辑能力\r
    canDrag: true,\r
    canConnect: true,\r
    canDelete: true,\r
    canCopy: true,\r
    canPaste: true,\r
    canGroup: true,\r
    canToFront: true,\r
    canToBack: true,\r
    canAddNode: true,\r
\r
    // 选择能力\r
    canMultipleSelect: true,\r
    canSelectAll: true,\r
\r
    // 对齐能力\r
    canAlign: true,\r
    canAlignLeft: true,\r
    canAlignRight: true,\r
    canAlignTop: true,\r
    canAlignBottom: true,\r
\r
    // 操作能力\r
    canImport: true,\r
    canExport: true,\r
    canUndo: true,\r
    canRedo: true,\r
\r
    // 视图能力\r
    canZoom: true,\r
    canPan: true,\r
    canFitView: true,\r
    canResetView: true,\r
\r
    // 交互反馈能力\r
    canHoverNode: true,\r
    canHoverEdge: true,\r
    canSelectNode: true,\r
    canSelectEdge: true,\r
    canNodeTooltip: true,\r
    canEdgeTooltip: true,\r
  }\r
})\r
\r
\r
// ─── ready 回调：拿到 designer 实例后加载本地数据 ─────────────────────────────\r
function handleReady(designer: FlowDesigner) {\r
  // ─── 加载测试数据 ──────────────────────────────────────────────────────\r
  if (node30) {\r
    try {\r
      designer.load(node30)\r
      //message.success('加载成功！')\r
    } catch {\r
      message.error('加载失败')\r
    }\r
  }\r
}\r
\r
\r
// ─── mode-change 事件 ─────────────────────────────────────────────────────────\r
function handleModeChange(mode) {\r
  message.success(\`已切换至\${{ design: '设计', readonly: '只读', preview: '预览' }[mode]}模式\`)\r
  currentMode.value = mode\r
}\r
\r
// ─── 从 ModeSelection 组件触发的模式切换 ─────────────────────────────────────\r
function handleModeChangeFromSelector(mode) {\r
  // 🎯 调用 designer.setMode() 更新 designer 内部状态\r
  if (designer.value) {\r
    console.log('[FlowDesignerTest] 调用 designer.setMode()', mode)\r
    designer.value.setMode(mode)\r
  } else {\r
    console.warn('[FlowDesignerTest] designer 实例不存在，无法切换模式')\r
  }\r
\r
  // 更新本地状态（保持同步）\r
  currentMode.value = mode\r
\r
  //message.success(\`已切换至\${{ design: '设计', readonly: '只读', preview: '预览' }[mode]}模式\`)\r
}\r
\r
defineExpose({ layoutRef })\r
<\/script>\r
\r
<style scoped>\r
/* ==================== 布局容器 ==================== */\r
.demo-permission-layout {\r
  display: flex;\r
  width: 100%;\r
  height: 100%;\r
  gap: 0;\r
  background: #f5f5f5;\r
}\r
\r
/* ==================== 左侧权限配置面板 ==================== */\r
.permission-panel {\r
  width: 210px;\r
  background: #fff;\r
  border-right: 1px solid #e8e8e8;\r
  display: flex;\r
  flex-direction: column;\r
  overflow: hidden;\r
}\r
\r
.permission-panel__header {\r
  padding: 16px;\r
  border-bottom: 1px solid #e8e8e8;\r
  background: #fafafa;\r
}\r
\r
.permission-panel__title {\r
  font-size: 16px;\r
  font-weight: 600;\r
  color: #1a1a2e;\r
  margin: 0 0 4px 0;\r
}\r
\r
.permission-panel__mode {\r
  display: inline-block;\r
  padding: 2px 8px;\r
  background: #e6f7ff;\r
  color: #1677ff;\r
  border-radius: 4px;\r
  font-size: 12px;\r
  font-weight: 500;\r
}\r
\r
.permission-panel__content {\r
  flex: 1;\r
  overflow-y: auto;\r
  padding: 16px;\r
}\r
\r
/* ==================== 权限分组 ==================== */\r
.permission-group {\r
  margin-bottom: 20px;\r
}\r
\r
.permission-group:last-child {\r
  margin-bottom: 0;\r
}\r
\r
.permission-group__title {\r
  font-size: 14px;\r
  font-weight: 600;\r
  color: #333;\r
  margin: 0 0 12px 0;\r
  padding-bottom: 8px;\r
  border-bottom: 2px solid #e8e8e8;\r
}\r
\r
/* ==================== 权限列表 ==================== */\r
.permission-list {\r
  display: flex;\r
  flex-direction: column;\r
  gap: 8px;\r
}\r
\r
.permission-item {\r
  display: flex;\r
  align-items: center;\r
  gap: 8px;\r
  padding: 6px 8px;\r
  border-radius: 4px;\r
  cursor: pointer;\r
  transition: background 0.2s;\r
  user-select: none;\r
}\r
\r
.permission-item:hover {\r
  background: #f5f5f5;\r
}\r
\r
.permission-item__label {\r
  font-size: 13px;\r
  color: #555;\r
  flex: 1;\r
}\r
\r
/* ==================== 右侧设计器容器 ==================== */\r
.designer-container {\r
  flex: 1;\r
  position: relative;\r
  overflow: hidden;\r
}\r
\r
.flow-designer-test {\r
  width: 100%;\r
  height: 100%;\r
}\r
\r
/* ==================== 滚动条样式 ==================== */\r
.permission-panel__content::-webkit-scrollbar {\r
  width: 6px;\r
}\r
\r
.permission-panel__content::-webkit-scrollbar-track {\r
  background: #f1f1f1;\r
}\r
\r
.permission-panel__content::-webkit-scrollbar-thumb {\r
  background: #c1c1c1;\r
  border-radius: 3px;\r
}\r
\r
.permission-panel__content::-webkit-scrollbar-thumb:hover {\r
  background: #a8a8a8;\r
}\r
\r
/* ── 测试用自定义右键菜单样式 ────────────────────────────────────────────── */\r
.custom-ctx-menu {\r
  background: #fff;\r
  border: 1px solid #e8e8e8;\r
  border-radius: 6px;\r
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.12);\r
  padding: 4px 0;\r
  min-width: 180px;\r
  user-select: none;\r
}\r
\r
.custom-ctx-menu__item {\r
  padding: 7px 16px;\r
  font-size: 13px;\r
  color: #262626;\r
  cursor: pointer;\r
  transition: background 0.15s;\r
  display: flex;\r
  align-items: center;\r
  gap: 8px;\r
}\r
\r
.custom-ctx-menu__item:hover {\r
  background: #f5f5f5;\r
}\r
\r
.custom-ctx-menu__item--danger {\r
  color: #f5222d;\r
}\r
\r
.custom-ctx-menu__icon {\r
  font-size: 14px;\r
  flex-shrink: 0;\r
}\r
\r
.custom-ctx-menu__divider {\r
  height: 1px;\r
  background: #f0f0f0;\r
  margin: 4px 0;\r
}\r
\r
/* ── 测试用自定义搜索框样式 ──────────────────────────────────────────────── */\r
.custom-search-box {\r
  position: absolute;\r
  top: 3px;\r
  right: 6px;\r
  z-index: 1000;\r
  display: flex;\r
  align-items: center;\r
  gap: 6px;\r
  padding: 6px 10px;\r
  background: #fff;\r
  border-radius: 6px;\r
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);\r
  min-width: 280px;\r
}\r
\r
.custom-search-box__icon {\r
  color: #8c9bb5;\r
  font-size: 14px;\r
  flex-shrink: 0;\r
}\r
\r
.custom-search-box__input {\r
  flex: 1;\r
  border: 1px solid #d9d9d9;\r
  border-radius: 4px;\r
  padding: 2px 8px;\r
  font-size: 13px;\r
  outline: none;\r
  min-width: 140px;\r
}\r
\r
.custom-search-box__input:focus {\r
  border-color: #1890ff;\r
  box-shadow: 0 0 0 2px rgba(24, 144, 255, 0.2);\r
}\r
\r
.custom-search-box__count {\r
  font-size: 12px;\r
  color: #8c9bb5;\r
  white-space: nowrap;\r
  user-select: none;\r
  min-width: 40px;\r
  text-align: center;\r
}\r
\r
.custom-search-box__btn {\r
  border: 1px solid #d9d9d9;\r
  background: #fff;\r
  border-radius: 4px;\r
  padding: 2px 8px;\r
  cursor: pointer;\r
  font-size: 12px;\r
  line-height: 1.5;\r
  transition: all 0.15s;\r
}p\r
\r
.custom-search-box__btn:hover:not(:disabled) {\r
  border-color: #1890ff;\r
  color: #1890ff;\r
}\r
\r
.custom-search-box__btn:disabled {\r
  color: #bfbfbf;\r
  cursor: not-allowed;\r
}\r
.my-node-tooltip {\r
  background: #fff;\r
  border: 1px solid #e8e8e8;\r
  border-radius: 4px;\r
  padding: 8px;\r
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);\r
}\r
.my-edge-tooltip {\r
  background: #fff;\r
  border: 1px solid #e8e8e8;\r
  border-radius: 4px;\r
  padding: 8px;\r
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);\r
}\r
.abc {\r
  fill: red\r
}\r
\r
/* 【测试】自定义连线标签 */\r
.custom-edge-label {\r
  display: inline-flex;\r
  align-items: center;\r
  gap: 4px;\r
  padding: 2px 8px;\r
  background: #fff;\r
  border: 1px solid #cce3f9;\r
  border-radius: 3px;\r
  font-size: 12px;\r
  color: #999999;\r
  white-space: nowrap;\r
  box-shadow: 0 1px 4px rgba(22, 119, 255, 0.2);\r
  pointer-events: none;\r
  font-weight: 500;\r
  filter: drop-shadow(0 1px 2px rgba(0, 0, 0, 0.1));\r
}\r
.custom-edge-label-selected {\r
  color: #1677ff;\r
  border: 1px solid #1677ff;\r
}\r
\r
.custom-edge-label__icon {\r
  font-size: 11px;\r
  flex-shrink: 0;\r
}\r
\r
.custom-edge-label__text {\r
  max-width: 80px;\r
  overflow: hidden;\r
  text-overflow: ellipsis;\r
}\r
</style>\r
`,oa={class:"demo-permission-layout"},sa={class:"designer-container"},la=G({__name:"demo-permission-readonly",setup(T,{expose:v}){const a=S(null),c=S("readonly"),l=yn({design:{},readonly:{showToolbar:!1,showNodePalette:!1,canAddNode:!1,canDrag:!1,canConnect:!1,canDelete:!1,canSelectEdge:!1}});function g(s){if(vn)try{s.load(vn)}catch{K.error("加载失败")}}function x(s){K.success(`已切换至${{design:"设计",readonly:"只读",preview:"预览"}[s]}模式`),c.value=s}return v({layoutRef:a}),(s,o)=>(h(),b("div",oa,[n("div",sa,[f(F(V),{class:"flow-designer-test",ref_key:"layoutRef",ref:a,mode:c.value,"permission-config":l,onReady:g,onModeChange:x},{toolbar:E(t=>[f(An,{"zoom-percent":t.zoomPercent,"has-selection":t.hasSelection,"can-paste":t.canPaste,"can-group":t.canGroup,"can-ungroup":t.canUngroup,"can-undo":t.canUndo,"can-redo":t.canRedo,"designer-mode":t.currentMode,onUndo:t.onUndo,onRedo:t.onRedo,onZoomIn:t.onZoomIn,onZoomOut:t.onZoomOut,onZoomTo:t.onZoomTo,onFitView:t.onFitView,onResetView:t.onResetView,onCopy:t.onCopy,onPaste:t.onPaste,onToFront:t.onToFront,onToBack:t.onToBack,onAlignLeft:t.onAlignLeft,onAlignRight:t.onAlignRight,onAlignTop:t.onAlignTop,onAlignBottom:t.onAlignBottom,onGroup:t.onGroup,onUngroup:t.onUngroup,onExport:t.onExport,onImport:t.onImport,onOpenSettings:t.onOpenSettings,onModeChange:t.onModeChange},null,8,["zoom-percent","has-selection","can-paste","can-group","can-ungroup","can-undo","can-redo","designer-mode","onUndo","onRedo","onZoomIn","onZoomOut","onZoomTo","onFitView","onResetView","onCopy","onPaste","onToFront","onToBack","onAlignLeft","onAlignRight","onAlignTop","onAlignBottom","onGroup","onUngroup","onExport","onImport","onOpenSettings","onModeChange"])]),palette:E(t=>[f(zn,{onStartDrag:t.onStartDrag},null,8,["onStartDrag"])]),properties:E(()=>[f(Rn)]),_:1},8,["mode","permission-config"])])]))}}),ia=U(la,[["__scopeId","data-v-048b843f"]]),aa=`\uFEFF<template>\r
  <div class="demo-permission-layout">\r
\r
\r
    <!-- 右侧流程设计器 -->\r
    <div class="designer-container">\r
      <FlowDesignerLayout\r
        class="flow-designer-test"\r
        ref="layoutRef"\r
        :mode="currentMode"\r
        :permission-config="permissionConfig"\r
        @ready="handleReady"\r
        @mode-change="handleModeChange"\r
      >\r
        <!-- 顶部工具栏 -->\r
        <template #toolbar="scope">\r
          <Toolbar\r
            :zoom-percent="scope.zoomPercent"\r
            :has-selection="scope.hasSelection"\r
            :can-paste="scope.canPaste"\r
            :can-group="scope.canGroup"\r
            :can-ungroup="scope.canUngroup"\r
            :can-undo="scope.canUndo"\r
            :can-redo="scope.canRedo"\r
            :designer-mode="scope.currentMode"\r
            @undo="scope.onUndo"\r
            @redo="scope.onRedo"\r
            @zoom-in="scope.onZoomIn"\r
            @zoom-out="scope.onZoomOut"\r
            @zoom-to="scope.onZoomTo"\r
            @fit-view="scope.onFitView"\r
            @reset-view="scope.onResetView"\r
            @copy="scope.onCopy"\r
            @paste="scope.onPaste"\r
            @to-front="scope.onToFront"\r
            @to-back="scope.onToBack"\r
            @align-left="scope.onAlignLeft"\r
            @align-right="scope.onAlignRight"\r
            @align-top="scope.onAlignTop"\r
            @align-bottom="scope.onAlignBottom"\r
            @group="scope.onGroup"\r
            @ungroup="scope.onUngroup"\r
            @export="scope.onExport"\r
            @import="scope.onImport"\r
            @open-settings="scope.onOpenSettings"\r
            @mode-change="scope.onModeChange"\r
          />\r
        </template>\r
\r
        <!-- 左侧节点面板 -->\r
        <template #palette="scope">\r
          <NodePalette @start-drag="scope.onStartDrag" />\r
        </template>\r
\r
        <!-- 右侧属性面板 -->\r
        <template #properties>\r
          <PropertiesPanel />\r
        </template>\r
\r
      </FlowDesignerLayout>\r
\r
      <!-- 模式选择器（固定在右上角） -->\r
<!--      <ModeSelection-->\r
<!--        :designer="designer"-->\r
<!--        @mode-change="handleModeChangeFromSelector"-->\r
<!--      />-->\r
    </div>\r
  </div>\r
</template>\r
\r
<script setup lang="ts">\r
import { ref, reactive, computed } from 'vue'\r
import { message } from 'ant-design-vue'\r
import { FlowDesignerLayout }  from '@quick-code/x6-flow-designer'\r
import type { FlowDesigner } from '@quick-code/x6-flow-designer'\r
import Toolbar from '@/views/Toolbar.vue'\r
import NodePalette from '@/views/NodePalette.vue'\r
import PropertiesPanel from '@/views/PropertiesPanel.vue'\r
import ModeSelection from '@/views/ModeSelection.vue'\r
\r
import node30 from '/testfile/node-30.json'\r
\r
\r
const layoutRef = ref<InstanceType<typeof FlowDesignerLayout> | null>(null)\r
// 测试用：搜索框插槽内的 input 引用（用于自动聚焦）\r
const searchInputRef = ref<HTMLInputElement | null>(null);\r
\r
// ─── Designer 实例（从 layoutRef 中提取，传递给 ModeSelection）──────────────\r
const designer = computed(() => layoutRef.value?.designer || null)\r
\r
// ─── 当前模式状态 ─────────────────────────────────────────────────────────────\r
const currentMode = ref('readonly')\r
\r
// ─── 权限配置（简化版：只配置需要覆盖默认值的权限）────────────────────────────\r
/**\r
 * 用户权限配置\r
 *\r
 * 说明：\r
 * 1. 只需配置需要覆盖默认值的权限项\r
 * 2. 未配置的权限项会自动使用 defaultPermissionConfig.ts 中的默认值\r
 * 3. 扩展模式会自动继承 design 模式的配置\r
 * 4. Designer 类内部会自动合并默认配置\r
 *\r
 * 默认值规则：\r
 * - design 模式：所有权限默认开启（true）\r
 * - readonly 模式：禁用编辑权限，保留查看权限\r
 * - preview 模式：最小化界面，只保留基本查看\r
 */\r
const permissionConfig = reactive({\r
  // ─── 设计模式 ───\r
  design: {\r
    // 不配置任何权限，则全部默认为true\r
  },\r
  readonly: {\r
    showToolbar: false,\r
    showNodePalette: false,\r
    canAddNode: false,\r
    canDrag: false,\r
    canConnect: false,\r
    canDelete: false,\r
    canSelectEdge: false\r
  }\r
})\r
\r
\r
// ─── ready 回调：拿到 designer 实例后加载本地数据 ─────────────────────────────\r
function handleReady(designer: FlowDesigner) {\r
  // ─── 加载测试数据 ──────────────────────────────────────────────────────\r
  if (node30) {\r
    try {\r
      designer.load(node30)\r
      //message.success('加载成功！')\r
    } catch {\r
      message.error('加载失败')\r
    }\r
  }\r
}\r
\r
\r
// ─── mode-change 事件 ─────────────────────────────────────────────────────────\r
function handleModeChange(mode) {\r
  message.success(\`已切换至\${{ design: '设计', readonly: '只读', preview: '预览' }[mode]}模式\`)\r
  currentMode.value = mode\r
}\r
\r
// ─── 从 ModeSelection 组件触发的模式切换 ─────────────────────────────────────\r
function handleModeChangeFromSelector(mode) {\r
  // 🎯 调用 designer.setMode() 更新 designer 内部状态\r
  if (designer.value) {\r
    console.log('[FlowDesignerTest] 调用 designer.setMode()', mode)\r
    designer.value.setMode(mode)\r
  } else {\r
    console.warn('[FlowDesignerTest] designer 实例不存在，无法切换模式')\r
  }\r
\r
  // 更新本地状态（保持同步）\r
  currentMode.value = mode\r
\r
  //message.success(\`已切换至\${{ design: '设计', readonly: '只读', preview: '预览' }[mode]}模式\`)\r
}\r
\r
defineExpose({ layoutRef })\r
<\/script>\r
\r
<style scoped>\r
/* ==================== 布局容器 ==================== */\r
.demo-permission-layout {\r
  display: flex;\r
  width: 100%;\r
  height: 100%;\r
  gap: 0;\r
  background: #f5f5f5;\r
}\r
\r
/* ==================== 左侧权限配置面板 ==================== */\r
.permission-panel {\r
  width: 180px;\r
  background: #fff;\r
  border-right: 1px solid #e8e8e8;\r
  display: flex;\r
  flex-direction: column;\r
  overflow: hidden;\r
}\r
\r
.permission-panel__header {\r
  padding: 16px;\r
  border-bottom: 1px solid #e8e8e8;\r
  background: #fafafa;\r
}\r
\r
.permission-panel__title {\r
  font-size: 16px;\r
  font-weight: 600;\r
  color: #1a1a2e;\r
  margin: 0 0 4px 0;\r
}\r
\r
.permission-panel__mode {\r
  display: inline-block;\r
  padding: 2px 8px;\r
  background: #e6f7ff;\r
  color: #1677ff;\r
  border-radius: 4px;\r
  font-size: 12px;\r
  font-weight: 500;\r
}\r
\r
.permission-panel__content {\r
  flex: 1;\r
  overflow-y: auto;\r
  padding: 16px;\r
}\r
\r
/* ==================== 权限分组 ==================== */\r
.permission-group {\r
  margin-bottom: 20px;\r
}\r
\r
.permission-group:last-child {\r
  margin-bottom: 0;\r
}\r
\r
.permission-group__title {\r
  font-size: 14px;\r
  font-weight: 600;\r
  color: #333;\r
  margin: 0 0 12px 0;\r
  padding-bottom: 8px;\r
  border-bottom: 2px solid #e8e8e8;\r
}\r
\r
/* ==================== 权限列表 ==================== */\r
.permission-list {\r
  display: flex;\r
  flex-direction: column;\r
  gap: 8px;\r
}\r
\r
.permission-item {\r
  display: flex;\r
  align-items: center;\r
  gap: 8px;\r
  padding: 6px 8px;\r
  border-radius: 4px;\r
  cursor: pointer;\r
  transition: background 0.2s;\r
  user-select: none;\r
}\r
\r
.permission-item:hover {\r
  background: #f5f5f5;\r
}\r
\r
.permission-item__label {\r
  font-size: 13px;\r
  color: #555;\r
  flex: 1;\r
}\r
\r
/* ==================== 右侧设计器容器 ==================== */\r
.designer-container {\r
  flex: 1;\r
  position: relative;\r
  overflow: hidden;\r
}\r
\r
.flow-designer-test {\r
  width: 100%;\r
  height: 100%;\r
}\r
\r
/* ==================== 滚动条样式 ==================== */\r
.permission-panel__content::-webkit-scrollbar {\r
  width: 6px;\r
}\r
\r
.permission-panel__content::-webkit-scrollbar-track {\r
  background: #f1f1f1;\r
}\r
\r
.permission-panel__content::-webkit-scrollbar-thumb {\r
  background: #c1c1c1;\r
  border-radius: 3px;\r
}\r
\r
.permission-panel__content::-webkit-scrollbar-thumb:hover {\r
  background: #a8a8a8;\r
}\r
\r
/* ── 测试用自定义右键菜单样式 ────────────────────────────────────────────── */\r
.custom-ctx-menu {\r
  background: #fff;\r
  border: 1px solid #e8e8e8;\r
  border-radius: 6px;\r
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.12);\r
  padding: 4px 0;\r
  min-width: 180px;\r
  user-select: none;\r
}\r
\r
.custom-ctx-menu__item {\r
  padding: 7px 16px;\r
  font-size: 13px;\r
  color: #262626;\r
  cursor: pointer;\r
  transition: background 0.15s;\r
  display: flex;\r
  align-items: center;\r
  gap: 8px;\r
}\r
\r
.custom-ctx-menu__item:hover {\r
  background: #f5f5f5;\r
}\r
\r
.custom-ctx-menu__item--danger {\r
  color: #f5222d;\r
}\r
\r
.custom-ctx-menu__icon {\r
  font-size: 14px;\r
  flex-shrink: 0;\r
}\r
\r
.custom-ctx-menu__divider {\r
  height: 1px;\r
  background: #f0f0f0;\r
  margin: 4px 0;\r
}\r
\r
/* ── 测试用自定义搜索框样式 ──────────────────────────────────────────────── */\r
.custom-search-box {\r
  position: absolute;\r
  top: 3px;\r
  right: 6px;\r
  z-index: 1000;\r
  display: flex;\r
  align-items: center;\r
  gap: 6px;\r
  padding: 6px 10px;\r
  background: #fff;\r
  border-radius: 6px;\r
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);\r
  min-width: 280px;\r
}\r
\r
.custom-search-box__icon {\r
  color: #8c9bb5;\r
  font-size: 14px;\r
  flex-shrink: 0;\r
}\r
\r
.custom-search-box__input {\r
  flex: 1;\r
  border: 1px solid #d9d9d9;\r
  border-radius: 4px;\r
  padding: 2px 8px;\r
  font-size: 13px;\r
  outline: none;\r
  min-width: 140px;\r
}\r
\r
.custom-search-box__input:focus {\r
  border-color: #1890ff;\r
  box-shadow: 0 0 0 2px rgba(24, 144, 255, 0.2);\r
}\r
\r
.custom-search-box__count {\r
  font-size: 12px;\r
  color: #8c9bb5;\r
  white-space: nowrap;\r
  user-select: none;\r
  min-width: 40px;\r
  text-align: center;\r
}\r
\r
.custom-search-box__btn {\r
  border: 1px solid #d9d9d9;\r
  background: #fff;\r
  border-radius: 4px;\r
  padding: 2px 8px;\r
  cursor: pointer;\r
  font-size: 12px;\r
  line-height: 1.5;\r
  transition: all 0.15s;\r
}p\r
\r
.custom-search-box__btn:hover:not(:disabled) {\r
  border-color: #1890ff;\r
  color: #1890ff;\r
}\r
\r
.custom-search-box__btn:disabled {\r
  color: #bfbfbf;\r
  cursor: not-allowed;\r
}\r
.my-node-tooltip {\r
  background: #fff;\r
  border: 1px solid #e8e8e8;\r
  border-radius: 4px;\r
  padding: 8px;\r
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);\r
}\r
.my-edge-tooltip {\r
  background: #fff;\r
  border: 1px solid #e8e8e8;\r
  border-radius: 4px;\r
  padding: 8px;\r
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);\r
}\r
.abc {\r
  fill: red\r
}\r
\r
/* 【测试】自定义连线标签 */\r
.custom-edge-label {\r
  display: inline-flex;\r
  align-items: center;\r
  gap: 4px;\r
  padding: 2px 8px;\r
  background: #fff;\r
  border: 1px solid #cce3f9;\r
  border-radius: 3px;\r
  font-size: 12px;\r
  color: #999999;\r
  white-space: nowrap;\r
  box-shadow: 0 1px 4px rgba(22, 119, 255, 0.2);\r
  pointer-events: none;\r
  font-weight: 500;\r
  filter: drop-shadow(0 1px 2px rgba(0, 0, 0, 0.1));\r
}\r
.custom-edge-label-selected {\r
  color: #1677ff;\r
  border: 1px solid #1677ff;\r
}\r
\r
.custom-edge-label__icon {\r
  font-size: 11px;\r
  flex-shrink: 0;\r
}\r
\r
.custom-edge-label__text {\r
  max-width: 80px;\r
  overflow: hidden;\r
  text-overflow: ellipsis;\r
}\r
</style>\r
`,da={class:"demo-permission-layout"},ca={class:"designer-container"},pa=G({__name:"demo-permission-preview",setup(T,{expose:v}){const a=S(null),c=S("preview"),l=yn({design:{},readonly:{},preview:{showToolbar:!1,showNodePalette:!1,showPropertiesPanel:!1,showContextMenu:!1,showMinimap:!0,canDrag:!1,canConnect:!1,canDelete:!1,canCopy:!1,canPaste:!1,canGroup:!1,canToFront:!1,canToBack:!1,canAddNode:!1,canMultipleSelect:!1,canSelectAll:!1,canAlign:!1,canAlignLeft:!1,canAlignRight:!1,canAlignTop:!1,canAlignBottom:!1,canImport:!1,canExport:!1,canUndo:!1,canRedo:!1,canZoom:!0,canPan:!0,canFitView:!0,canResetView:!0,canHoverNode:!1,canHoverEdge:!1,canSelectNode:!1,canSelectEdge:!1,canNodeTooltip:!1,canEdgeTooltip:!1}});function g(s){if(vn)try{s.load(vn)}catch{K.error("加载失败")}}function x(s){K.success(`已切换至${{design:"设计",readonly:"只读",preview:"预览"}[s]}模式`),c.value=s}return v({layoutRef:a}),(s,o)=>(h(),b("div",da,[n("div",ca,[f(F(V),{class:"flow-designer-test",ref_key:"layoutRef",ref:a,mode:c.value,"permission-config":l,onReady:g,onModeChange:x},{toolbar:E(t=>[f(An,{"zoom-percent":t.zoomPercent,"has-selection":t.hasSelection,"can-paste":t.canPaste,"can-group":t.canGroup,"can-ungroup":t.canUngroup,"can-undo":t.canUndo,"can-redo":t.canRedo,"designer-mode":t.currentMode,onUndo:t.onUndo,onRedo:t.onRedo,onZoomIn:t.onZoomIn,onZoomOut:t.onZoomOut,onZoomTo:t.onZoomTo,onFitView:t.onFitView,onResetView:t.onResetView,onCopy:t.onCopy,onPaste:t.onPaste,onToFront:t.onToFront,onToBack:t.onToBack,onAlignLeft:t.onAlignLeft,onAlignRight:t.onAlignRight,onAlignTop:t.onAlignTop,onAlignBottom:t.onAlignBottom,onGroup:t.onGroup,onUngroup:t.onUngroup,onExport:t.onExport,onImport:t.onImport,onOpenSettings:t.onOpenSettings,onModeChange:t.onModeChange},null,8,["zoom-percent","has-selection","can-paste","can-group","can-ungroup","can-undo","can-redo","designer-mode","onUndo","onRedo","onZoomIn","onZoomOut","onZoomTo","onFitView","onResetView","onCopy","onPaste","onToFront","onToBack","onAlignLeft","onAlignRight","onAlignTop","onAlignBottom","onGroup","onUngroup","onExport","onImport","onOpenSettings","onModeChange"])]),palette:E(t=>[f(zn,{onStartDrag:t.onStartDrag},null,8,["onStartDrag"])]),properties:E(()=>[f(Rn)]),_:1},8,["mode","permission-config"])])]))}}),ga=U(pa,[["__scopeId","data-v-25ba95d6"]]),fa=`\uFEFF<template>\r
  <div class="demo-permission-layout">\r
\r
\r
    <!-- 右侧流程设计器 -->\r
    <div class="designer-container">\r
      <FlowDesignerLayout\r
        class="flow-designer-test"\r
        ref="layoutRef"\r
        :mode="currentMode"\r
        :permission-config="permissionConfig"\r
        @ready="handleReady"\r
        @mode-change="handleModeChange"\r
      >\r
        <!-- 顶部工具栏 -->\r
        <template #toolbar="scope">\r
          <Toolbar\r
            :zoom-percent="scope.zoomPercent"\r
            :has-selection="scope.hasSelection"\r
            :can-paste="scope.canPaste"\r
            :can-group="scope.canGroup"\r
            :can-ungroup="scope.canUngroup"\r
            :can-undo="scope.canUndo"\r
            :can-redo="scope.canRedo"\r
            :designer-mode="scope.currentMode"\r
            @undo="scope.onUndo"\r
            @redo="scope.onRedo"\r
            @zoom-in="scope.onZoomIn"\r
            @zoom-out="scope.onZoomOut"\r
            @zoom-to="scope.onZoomTo"\r
            @fit-view="scope.onFitView"\r
            @reset-view="scope.onResetView"\r
            @copy="scope.onCopy"\r
            @paste="scope.onPaste"\r
            @to-front="scope.onToFront"\r
            @to-back="scope.onToBack"\r
            @align-left="scope.onAlignLeft"\r
            @align-right="scope.onAlignRight"\r
            @align-top="scope.onAlignTop"\r
            @align-bottom="scope.onAlignBottom"\r
            @group="scope.onGroup"\r
            @ungroup="scope.onUngroup"\r
            @export="scope.onExport"\r
            @import="scope.onImport"\r
            @open-settings="scope.onOpenSettings"\r
            @mode-change="scope.onModeChange"\r
          />\r
        </template>\r
\r
        <!-- 左侧节点面板 -->\r
        <template #palette="scope">\r
          <NodePalette @start-drag="scope.onStartDrag" />\r
        </template>\r
\r
        <!-- 右侧属性面板 -->\r
        <template #properties>\r
          <PropertiesPanel />\r
        </template>\r
\r
      </FlowDesignerLayout>\r
\r
      <!-- 模式选择器（固定在右上角） -->\r
<!--      <ModeSelection-->\r
<!--        :designer="designer"-->\r
<!--        @mode-change="handleModeChangeFromSelector"-->\r
<!--      />-->\r
    </div>\r
  </div>\r
</template>\r
\r
<script setup lang="ts">\r
import { ref, reactive, computed } from 'vue'\r
import { message } from 'ant-design-vue'\r
import { FlowDesignerLayout }  from '@quick-code/x6-flow-designer'\r
import type { FlowDesigner } from '@quick-code/x6-flow-designer'\r
import Toolbar from '@/views/Toolbar.vue'\r
import NodePalette from '@/views/NodePalette.vue'\r
import PropertiesPanel from '@/views/PropertiesPanel.vue'\r
import ModeSelection from '@/views/ModeSelection.vue'\r
\r
import node30 from '/testfile/node-30.json'\r
\r
\r
const layoutRef = ref<InstanceType<typeof FlowDesignerLayout> | null>(null)\r
// 测试用：搜索框插槽内的 input 引用（用于自动聚焦）\r
const searchInputRef = ref<HTMLInputElement | null>(null);\r
\r
// ─── Designer 实例（从 layoutRef 中提取，传递给 ModeSelection）──────────────\r
const designer = computed(() => layoutRef.value?.designer || null)\r
\r
// ─── 当前模式状态 ─────────────────────────────────────────────────────────────\r
const currentMode = ref('preview')\r
\r
// ─── 权限配置（简化版：只配置需要覆盖默认值的权限）────────────────────────────\r
/**\r
 * 用户权限配置\r
 *\r
 * 说明：\r
 * 1. 只需配置需要覆盖默认值的权限项\r
 * 2. 未配置的权限项会自动使用 defaultPermissionConfig.ts 中的默认值\r
 * 3. 扩展模式会自动继承 design 模式的配置\r
 * 4. Designer 类内部会自动合并默认配置\r
 *\r
 * 默认值规则：\r
 * - design 模式：所有权限默认开启（true）\r
 * - readonly 模式：禁用编辑权限，保留查看权限\r
 * - preview 模式：最小化界面，只保留基本查看\r
 */\r
const permissionConfig = reactive({\r
  // ─── 设计模式 ───\r
  design: {\r
    // 不配置任何权限，则全部默认为true\r
  },\r
  readonly: {\r
    // 不配置任何权限，则全部默认为true\r
  },\r
  preview: {\r
    // UI 显示\r
    showToolbar: false,\r
    showNodePalette: false,\r
    showPropertiesPanel: false,\r
    showContextMenu: false,\r
    showMinimap: true,\r
\r
    // 编辑能力\r
    canDrag: false,\r
    canConnect: false,\r
    canDelete: false,\r
    canCopy: false,\r
    canPaste: false,\r
    canGroup: false,\r
    canToFront: false,\r
    canToBack: false,\r
    canAddNode: false,\r
\r
    // 选择能力\r
    canMultipleSelect: false,\r
    canSelectAll: false,\r
\r
    // 对齐能力\r
    canAlign: false,\r
    canAlignLeft: false,\r
    canAlignRight: false,\r
    canAlignTop: false,\r
    canAlignBottom: false,\r
\r
    // 操作能力\r
    canImport: false,\r
    canExport: false,\r
    canUndo: false,\r
    canRedo: false,\r
\r
    // 视图能力\r
    canZoom: true,\r
    canPan: true,\r
    canFitView: true,\r
    canResetView: true,\r
\r
    // 交互反馈能力\r
    canHoverNode: false,\r
    canHoverEdge: false,\r
    canSelectNode: false,\r
    canSelectEdge: false,\r
    canNodeTooltip: false,\r
    canEdgeTooltip: false,\r
  }\r
})\r
\r
\r
// ─── ready 回调：拿到 designer 实例后加载本地数据 ─────────────────────────────\r
function handleReady(designer: FlowDesigner) {\r
  // ─── 加载测试数据 ──────────────────────────────────────────────────────\r
  if (node30) {\r
    try {\r
      designer.load(node30)\r
      //message.success('加载成功！')\r
    } catch {\r
      message.error('加载失败')\r
    }\r
  }\r
}\r
\r
\r
// ─── mode-change 事件 ─────────────────────────────────────────────────────────\r
function handleModeChange(mode) {\r
  message.success(\`已切换至\${{ design: '设计', readonly: '只读', preview: '预览' }[mode]}模式\`)\r
  currentMode.value = mode\r
}\r
\r
// ─── 从 ModeSelection 组件触发的模式切换 ─────────────────────────────────────\r
function handleModeChangeFromSelector(mode) {\r
  // 🎯 调用 designer.setMode() 更新 designer 内部状态\r
  if (designer.value) {\r
    console.log('[FlowDesignerTest] 调用 designer.setMode()', mode)\r
    designer.value.setMode(mode)\r
  } else {\r
    console.warn('[FlowDesignerTest] designer 实例不存在，无法切换模式')\r
  }\r
\r
  // 更新本地状态（保持同步）\r
  currentMode.value = mode\r
\r
  //message.success(\`已切换至\${{ design: '设计', readonly: '只读', preview: '预览' }[mode]}模式\`)\r
}\r
\r
defineExpose({ layoutRef })\r
<\/script>\r
\r
<style scoped>\r
/* ==================== 布局容器 ==================== */\r
.demo-permission-layout {\r
  display: flex;\r
  width: 100%;\r
  height: 100%;\r
  gap: 0;\r
  background: #f5f5f5;\r
}\r
\r
/* ==================== 左侧权限配置面板 ==================== */\r
.permission-panel {\r
  width: 180px;\r
  background: #fff;\r
  border-right: 1px solid #e8e8e8;\r
  display: flex;\r
  flex-direction: column;\r
  overflow: hidden;\r
}\r
\r
.permission-panel__header {\r
  padding: 16px;\r
  border-bottom: 1px solid #e8e8e8;\r
  background: #fafafa;\r
}\r
\r
.permission-panel__title {\r
  font-size: 16px;\r
  font-weight: 600;\r
  color: #1a1a2e;\r
  margin: 0 0 4px 0;\r
}\r
\r
.permission-panel__mode {\r
  display: inline-block;\r
  padding: 2px 8px;\r
  background: #e6f7ff;\r
  color: #1677ff;\r
  border-radius: 4px;\r
  font-size: 12px;\r
  font-weight: 500;\r
}\r
\r
.permission-panel__content {\r
  flex: 1;\r
  overflow-y: auto;\r
  padding: 16px;\r
}\r
\r
/* ==================== 权限分组 ==================== */\r
.permission-group {\r
  margin-bottom: 20px;\r
}\r
\r
.permission-group:last-child {\r
  margin-bottom: 0;\r
}\r
\r
.permission-group__title {\r
  font-size: 14px;\r
  font-weight: 600;\r
  color: #333;\r
  margin: 0 0 12px 0;\r
  padding-bottom: 8px;\r
  border-bottom: 2px solid #e8e8e8;\r
}\r
\r
/* ==================== 权限列表 ==================== */\r
.permission-list {\r
  display: flex;\r
  flex-direction: column;\r
  gap: 8px;\r
}\r
\r
.permission-item {\r
  display: flex;\r
  align-items: center;\r
  gap: 8px;\r
  padding: 6px 8px;\r
  border-radius: 4px;\r
  cursor: pointer;\r
  transition: background 0.2s;\r
  user-select: none;\r
}\r
\r
.permission-item:hover {\r
  background: #f5f5f5;\r
}\r
\r
.permission-item__label {\r
  font-size: 13px;\r
  color: #555;\r
  flex: 1;\r
}\r
\r
/* ==================== 右侧设计器容器 ==================== */\r
.designer-container {\r
  flex: 1;\r
  position: relative;\r
  overflow: hidden;\r
}\r
\r
.flow-designer-test {\r
  width: 100%;\r
  height: 100%;\r
}\r
\r
/* ==================== 滚动条样式 ==================== */\r
.permission-panel__content::-webkit-scrollbar {\r
  width: 6px;\r
}\r
\r
.permission-panel__content::-webkit-scrollbar-track {\r
  background: #f1f1f1;\r
}\r
\r
.permission-panel__content::-webkit-scrollbar-thumb {\r
  background: #c1c1c1;\r
  border-radius: 3px;\r
}\r
\r
.permission-panel__content::-webkit-scrollbar-thumb:hover {\r
  background: #a8a8a8;\r
}\r
\r
/* ── 测试用自定义右键菜单样式 ────────────────────────────────────────────── */\r
.custom-ctx-menu {\r
  background: #fff;\r
  border: 1px solid #e8e8e8;\r
  border-radius: 6px;\r
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.12);\r
  padding: 4px 0;\r
  min-width: 180px;\r
  user-select: none;\r
}\r
\r
.custom-ctx-menu__item {\r
  padding: 7px 16px;\r
  font-size: 13px;\r
  color: #262626;\r
  cursor: pointer;\r
  transition: background 0.15s;\r
  display: flex;\r
  align-items: center;\r
  gap: 8px;\r
}\r
\r
.custom-ctx-menu__item:hover {\r
  background: #f5f5f5;\r
}\r
\r
.custom-ctx-menu__item--danger {\r
  color: #f5222d;\r
}\r
\r
.custom-ctx-menu__icon {\r
  font-size: 14px;\r
  flex-shrink: 0;\r
}\r
\r
.custom-ctx-menu__divider {\r
  height: 1px;\r
  background: #f0f0f0;\r
  margin: 4px 0;\r
}\r
\r
/* ── 测试用自定义搜索框样式 ──────────────────────────────────────────────── */\r
.custom-search-box {\r
  position: absolute;\r
  top: 3px;\r
  right: 6px;\r
  z-index: 1000;\r
  display: flex;\r
  align-items: center;\r
  gap: 6px;\r
  padding: 6px 10px;\r
  background: #fff;\r
  border-radius: 6px;\r
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);\r
  min-width: 280px;\r
}\r
\r
.custom-search-box__icon {\r
  color: #8c9bb5;\r
  font-size: 14px;\r
  flex-shrink: 0;\r
}\r
\r
.custom-search-box__input {\r
  flex: 1;\r
  border: 1px solid #d9d9d9;\r
  border-radius: 4px;\r
  padding: 2px 8px;\r
  font-size: 13px;\r
  outline: none;\r
  min-width: 140px;\r
}\r
\r
.custom-search-box__input:focus {\r
  border-color: #1890ff;\r
  box-shadow: 0 0 0 2px rgba(24, 144, 255, 0.2);\r
}\r
\r
.custom-search-box__count {\r
  font-size: 12px;\r
  color: #8c9bb5;\r
  white-space: nowrap;\r
  user-select: none;\r
  min-width: 40px;\r
  text-align: center;\r
}\r
\r
.custom-search-box__btn {\r
  border: 1px solid #d9d9d9;\r
  background: #fff;\r
  border-radius: 4px;\r
  padding: 2px 8px;\r
  cursor: pointer;\r
  font-size: 12px;\r
  line-height: 1.5;\r
  transition: all 0.15s;\r
}p\r
\r
.custom-search-box__btn:hover:not(:disabled) {\r
  border-color: #1890ff;\r
  color: #1890ff;\r
}\r
\r
.custom-search-box__btn:disabled {\r
  color: #bfbfbf;\r
  cursor: not-allowed;\r
}\r
.my-node-tooltip {\r
  background: #fff;\r
  border: 1px solid #e8e8e8;\r
  border-radius: 4px;\r
  padding: 8px;\r
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);\r
}\r
.my-edge-tooltip {\r
  background: #fff;\r
  border: 1px solid #e8e8e8;\r
  border-radius: 4px;\r
  padding: 8px;\r
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);\r
}\r
.abc {\r
  fill: red\r
}\r
\r
/* 【测试】自定义连线标签 */\r
.custom-edge-label {\r
  display: inline-flex;\r
  align-items: center;\r
  gap: 4px;\r
  padding: 2px 8px;\r
  background: #fff;\r
  border: 1px solid #cce3f9;\r
  border-radius: 3px;\r
  font-size: 12px;\r
  color: #999999;\r
  white-space: nowrap;\r
  box-shadow: 0 1px 4px rgba(22, 119, 255, 0.2);\r
  pointer-events: none;\r
  font-weight: 500;\r
  filter: drop-shadow(0 1px 2px rgba(0, 0, 0, 0.1));\r
}\r
.custom-edge-label-selected {\r
  color: #1677ff;\r
  border: 1px solid #1677ff;\r
}\r
\r
.custom-edge-label__icon {\r
  font-size: 11px;\r
  flex-shrink: 0;\r
}\r
\r
.custom-edge-label__text {\r
  max-width: 80px;\r
  overflow: hidden;\r
  text-overflow: ellipsis;\r
}\r
</style>\r
`,ma={class:"demo-permission-layout"},ua={class:"permission-panel"},ha={class:"permission-panel__content"},ba={class:"permission-group"},va={class:"permission-list"},_a={class:"permission-item"},xa={class:"permission-item"},ya={class:"permission-item"},ka={class:"permission-item"},wa={class:"permission-item"},Sa={class:"permission-group"},Na={class:"permission-list"},Ca={class:"permission-item"},Da={class:"permission-item"},$a={class:"permission-item"},Ea={class:"permission-item"},Fa={class:"permission-item"},La={class:"permission-item"},Ta={class:"permission-item"},Ra={class:"permission-item"},za={class:"permission-item"},Aa={class:"permission-group"},Ma={class:"permission-list"},Wa={class:"permission-item"},Ia={class:"permission-item"},Pa={class:"permission-item"},Ga={class:"permission-item"},Oa={class:"permission-item"},Ha={class:"permission-group"},Ba={class:"permission-list"},Va={class:"permission-item"},Ua={class:"permission-item"},Za={class:"permission-item"},qa={class:"permission-item"},ja={class:"permission-group"},Ya={class:"permission-list"},Xa={class:"permission-item"},Ja={class:"permission-item"},Ka={class:"permission-group"},Qa={class:"permission-list"},nd={class:"permission-item"},ed={class:"permission-item"},rd={class:"permission-group"},td={class:"permission-list"},od={class:"permission-item"},sd={class:"permission-item"},ld={class:"permission-item"},id={class:"permission-item"},ad={class:"permission-group"},dd={class:"permission-list"},cd={class:"permission-item"},pd={class:"permission-item"},gd={class:"permission-item"},fd={class:"permission-item"},md={class:"designer-container"},ud=G({__name:"demo-permission-getPermission",setup(T,{expose:v}){const a=S(null),c=S("design"),l=yn({design:{showToolbar:!0,showNodePalette:!0,showPropertiesPanel:!0,showContextMenu:!0,showMinimap:!0,canDrag:!0,canConnect:!0,canDelete:!0,canCopy:!0,canPaste:!0,canGroup:!0,canToFront:!0,canToBack:!0,canAddNode:!0,canMultipleSelect:!0,canSelectAll:!0,canAlign:!0,canAlignLeft:!0,canAlignRight:!0,canAlignTop:!0,canAlignBottom:!0,canImport:!0,canExport:!0,canUndo:!0,canRedo:!0,canZoom:!0,canPan:!0,canFitView:!0,canResetView:!0,canHoverNode:!0,canHoverEdge:!0,canSelectNode:!0,canSelectEdge:!0,canNodeTooltip:!0,canEdgeTooltip:!0}}),g=S("admin"),x=t=>{const e={canSelectNode:!0,canZoom:!0,canPan:!0};return g.value==="admin"?{...e,canAddNode:!1,canDrag:!0,canDelete:!0}:g.value==="editor"?{...e,canAddNode:!0,canDrag:!0,canDelete:!1}:{...e,canAddNode:!1,canDrag:!1}};function s(t){if(vn)try{t.load(vn)}catch{K.error("加载失败")}}function o(t){K.success(`已切换至${{design:"设计",readonly:"只读",preview:"预览"}[t]}模式`),c.value=t}return v({layoutRef:a}),(t,e)=>{const i=fn("a-checkbox");return h(),b("div",ma,[n("div",ua,[e[78]||(e[78]=n("div",{class:"permission-panel__header"},[n("h3",{class:"permission-panel__title"},"权限配置"),n("span",{class:"permission-panel__mode"},"Design 模式"),n("span",{class:"permission-panel__mode",style:{color:"red"}},"此处即使配置了design权限也会完全失效，因为使用了getPermissions 函数完全接管权限计算")],-1)),n("div",ha,[n("div",ba,[e[40]||(e[40]=n("h4",{class:"permission-group__title"},"🎨 界面显示",-1)),n("div",va,[n("label",_a,[f(i,{checked:l.design.showToolbar,"onUpdate:checked":e[0]||(e[0]=r=>l.design.showToolbar=r)},null,8,["checked"]),e[35]||(e[35]=n("span",{class:"permission-item__label"},"显示工具栏",-1))]),n("label",xa,[f(i,{checked:l.design.showNodePalette,"onUpdate:checked":e[1]||(e[1]=r=>l.design.showNodePalette=r)},null,8,["checked"]),e[36]||(e[36]=n("span",{class:"permission-item__label"},"显示节点面板",-1))]),n("label",ya,[f(i,{checked:l.design.showPropertiesPanel,"onUpdate:checked":e[2]||(e[2]=r=>l.design.showPropertiesPanel=r)},null,8,["checked"]),e[37]||(e[37]=n("span",{class:"permission-item__label"},"显示属性面板",-1))]),n("label",ka,[f(i,{checked:l.design.showContextMenu,"onUpdate:checked":e[3]||(e[3]=r=>l.design.showContextMenu=r)},null,8,["checked"]),e[38]||(e[38]=n("span",{class:"permission-item__label"},"显示右键菜单",-1))]),n("label",wa,[f(i,{checked:l.design.showMinimap,"onUpdate:checked":e[4]||(e[4]=r=>l.design.showMinimap=r)},null,8,["checked"]),e[39]||(e[39]=n("span",{class:"permission-item__label"},"显示小地图",-1))])])]),n("div",Sa,[e[50]||(e[50]=n("h4",{class:"permission-group__title"},"✏️ 编辑操作",-1)),n("div",Na,[n("label",Ca,[f(i,{checked:l.design.canAddNode,"onUpdate:checked":e[5]||(e[5]=r=>l.design.canAddNode=r)},null,8,["checked"]),e[41]||(e[41]=n("span",{class:"permission-item__label"},"添加节点",-1))]),n("label",Da,[f(i,{checked:l.design.canDrag,"onUpdate:checked":e[6]||(e[6]=r=>l.design.canDrag=r)},null,8,["checked"]),e[42]||(e[42]=n("span",{class:"permission-item__label"},"拖动节点",-1))]),n("label",$a,[f(i,{checked:l.design.canConnect,"onUpdate:checked":e[7]||(e[7]=r=>l.design.canConnect=r)},null,8,["checked"]),e[43]||(e[43]=n("span",{class:"permission-item__label"},"创建连线",-1))]),n("label",Ea,[f(i,{checked:l.design.canDelete,"onUpdate:checked":e[8]||(e[8]=r=>l.design.canDelete=r)},null,8,["checked"]),e[44]||(e[44]=n("span",{class:"permission-item__label"},"删除元素",-1))]),n("label",Fa,[f(i,{checked:l.design.canCopy,"onUpdate:checked":e[9]||(e[9]=r=>l.design.canCopy=r)},null,8,["checked"]),e[45]||(e[45]=n("span",{class:"permission-item__label"},"复制",-1))]),n("label",La,[f(i,{checked:l.design.canPaste,"onUpdate:checked":e[10]||(e[10]=r=>l.design.canPaste=r)},null,8,["checked"]),e[46]||(e[46]=n("span",{class:"permission-item__label"},"粘贴",-1))]),n("label",Ta,[f(i,{checked:l.design.canGroup,"onUpdate:checked":e[11]||(e[11]=r=>l.design.canGroup=r)},null,8,["checked"]),e[47]||(e[47]=n("span",{class:"permission-item__label"},"节点成组",-1))]),n("label",Ra,[f(i,{checked:l.design.canToFront,"onUpdate:checked":e[12]||(e[12]=r=>l.design.canToFront=r)},null,8,["checked"]),e[48]||(e[48]=n("span",{class:"permission-item__label"},"层级前置",-1))]),n("label",za,[f(i,{checked:l.design.canToBack,"onUpdate:checked":e[13]||(e[13]=r=>l.design.canToBack=r)},null,8,["checked"]),e[49]||(e[49]=n("span",{class:"permission-item__label"},"层级后置",-1))])])]),n("div",Aa,[e[56]||(e[56]=n("h4",{class:"permission-group__title"},"📐 对齐操作",-1)),n("div",Ma,[n("label",Wa,[f(i,{checked:l.design.canAlign,"onUpdate:checked":e[14]||(e[14]=r=>l.design.canAlign=r)},null,8,["checked"]),e[51]||(e[51]=n("span",{class:"permission-item__label"},"对齐总开关",-1))]),n("label",Ia,[f(i,{checked:l.design.canAlignLeft,"onUpdate:checked":e[15]||(e[15]=r=>l.design.canAlignLeft=r)},null,8,["checked"]),e[52]||(e[52]=n("span",{class:"permission-item__label"},"左对齐",-1))]),n("label",Pa,[f(i,{checked:l.design.canAlignRight,"onUpdate:checked":e[16]||(e[16]=r=>l.design.canAlignRight=r)},null,8,["checked"]),e[53]||(e[53]=n("span",{class:"permission-item__label"},"右对齐",-1))]),n("label",Ga,[f(i,{checked:l.design.canAlignTop,"onUpdate:checked":e[17]||(e[17]=r=>l.design.canAlignTop=r)},null,8,["checked"]),e[54]||(e[54]=n("span",{class:"permission-item__label"},"上对齐",-1))]),n("label",Oa,[f(i,{checked:l.design.canAlignBottom,"onUpdate:checked":e[18]||(e[18]=r=>l.design.canAlignBottom=r)},null,8,["checked"]),e[55]||(e[55]=n("span",{class:"permission-item__label"},"下对齐",-1))])])]),n("div",Ha,[e[61]||(e[61]=n("h4",{class:"permission-group__title"},"🎯 选择操作",-1)),n("div",Ba,[n("label",Va,[f(i,{checked:l.design.canSelectNode,"onUpdate:checked":e[19]||(e[19]=r=>l.design.canSelectNode=r)},null,8,["checked"]),e[57]||(e[57]=n("span",{class:"permission-item__label"},"选中节点",-1))]),n("label",Ua,[f(i,{checked:l.design.canSelectEdge,"onUpdate:checked":e[20]||(e[20]=r=>l.design.canSelectEdge=r)},null,8,["checked"]),e[58]||(e[58]=n("span",{class:"permission-item__label"},"选中连线",-1))]),n("label",Za,[f(i,{checked:l.design.canMultipleSelect,"onUpdate:checked":e[21]||(e[21]=r=>l.design.canMultipleSelect=r)},null,8,["checked"]),e[59]||(e[59]=n("span",{class:"permission-item__label"},"多选/框选",-1))]),n("label",qa,[f(i,{checked:l.design.canSelectAll,"onUpdate:checked":e[22]||(e[22]=r=>l.design.canSelectAll=r)},null,8,["checked"]),e[60]||(e[60]=n("span",{class:"permission-item__label"},"全选",-1))])])]),n("div",ja,[e[64]||(e[64]=n("h4",{class:"permission-group__title"},"📦 导入导出",-1)),n("div",Ya,[n("label",Xa,[f(i,{checked:l.design.canImport,"onUpdate:checked":e[23]||(e[23]=r=>l.design.canImport=r)},null,8,["checked"]),e[62]||(e[62]=n("span",{class:"permission-item__label"},"导入数据",-1))]),n("label",Ja,[f(i,{checked:l.design.canExport,"onUpdate:checked":e[24]||(e[24]=r=>l.design.canExport=r)},null,8,["checked"]),e[63]||(e[63]=n("span",{class:"permission-item__label"},"导出数据",-1))])])]),n("div",Ka,[e[67]||(e[67]=n("h4",{class:"permission-group__title"},"⏱️ 历史操作",-1)),n("div",Qa,[n("label",nd,[f(i,{checked:l.design.canUndo,"onUpdate:checked":e[25]||(e[25]=r=>l.design.canUndo=r)},null,8,["checked"]),e[65]||(e[65]=n("span",{class:"permission-item__label"},"撤销",-1))]),n("label",ed,[f(i,{checked:l.design.canRedo,"onUpdate:checked":e[26]||(e[26]=r=>l.design.canRedo=r)},null,8,["checked"]),e[66]||(e[66]=n("span",{class:"permission-item__label"},"重做",-1))])])]),n("div",rd,[e[72]||(e[72]=n("h4",{class:"permission-group__title"},"👁️ 视图操作",-1)),n("div",td,[n("label",od,[f(i,{checked:l.design.canZoom,"onUpdate:checked":e[27]||(e[27]=r=>l.design.canZoom=r)},null,8,["checked"]),e[68]||(e[68]=n("span",{class:"permission-item__label"},"缩放画布",-1))]),n("label",sd,[f(i,{checked:l.design.canPan,"onUpdate:checked":e[28]||(e[28]=r=>l.design.canPan=r)},null,8,["checked"]),e[69]||(e[69]=n("span",{class:"permission-item__label"},"拖拽画布",-1))]),n("label",ld,[f(i,{checked:l.design.canFitView,"onUpdate:checked":e[29]||(e[29]=r=>l.design.canFitView=r)},null,8,["checked"]),e[70]||(e[70]=n("span",{class:"permission-item__label"},"适应窗口",-1))]),n("label",id,[f(i,{checked:l.design.canResetView,"onUpdate:checked":e[30]||(e[30]=r=>l.design.canResetView=r)},null,8,["checked"]),e[71]||(e[71]=n("span",{class:"permission-item__label"},"重置视图",-1))])])]),n("div",ad,[e[77]||(e[77]=n("h4",{class:"permission-group__title"},"💬 交互反馈",-1)),n("div",dd,[n("label",cd,[f(i,{checked:l.design.canHoverNode,"onUpdate:checked":e[31]||(e[31]=r=>l.design.canHoverNode=r)},null,8,["checked"]),e[73]||(e[73]=n("span",{class:"permission-item__label"},"节点 Hover 高亮",-1))]),n("label",pd,[f(i,{checked:l.design.canHoverEdge,"onUpdate:checked":e[32]||(e[32]=r=>l.design.canHoverEdge=r)},null,8,["checked"]),e[74]||(e[74]=n("span",{class:"permission-item__label"},"连线 Hover 高亮",-1))]),n("label",gd,[f(i,{checked:l.design.canNodeTooltip,"onUpdate:checked":e[33]||(e[33]=r=>l.design.canNodeTooltip=r)},null,8,["checked"]),e[75]||(e[75]=n("span",{class:"permission-item__label"},"节点 Tooltip",-1))]),n("label",fd,[f(i,{checked:l.design.canEdgeTooltip,"onUpdate:checked":e[34]||(e[34]=r=>l.design.canEdgeTooltip=r)},null,8,["checked"]),e[76]||(e[76]=n("span",{class:"permission-item__label"},"连线 Tooltip",-1))])])])])]),n("div",md,[f(F(V),{class:"flow-designer-test",ref_key:"layoutRef",ref:a,mode:c.value,"permission-config":l,getPermissions:x,onReady:s,onModeChange:o},{toolbar:E(r=>[f(An,{"zoom-percent":r.zoomPercent,"has-selection":r.hasSelection,"can-paste":r.canPaste,"can-group":r.canGroup,"can-ungroup":r.canUngroup,"can-undo":r.canUndo,"can-redo":r.canRedo,"designer-mode":r.currentMode,onUndo:r.onUndo,onRedo:r.onRedo,onZoomIn:r.onZoomIn,onZoomOut:r.onZoomOut,onZoomTo:r.onZoomTo,onFitView:r.onFitView,onResetView:r.onResetView,onCopy:r.onCopy,onPaste:r.onPaste,onToFront:r.onToFront,onToBack:r.onToBack,onAlignLeft:r.onAlignLeft,onAlignRight:r.onAlignRight,onAlignTop:r.onAlignTop,onAlignBottom:r.onAlignBottom,onGroup:r.onGroup,onUngroup:r.onUngroup,onExport:r.onExport,onImport:r.onImport,onOpenSettings:r.onOpenSettings,onModeChange:r.onModeChange},null,8,["zoom-percent","has-selection","can-paste","can-group","can-ungroup","can-undo","can-redo","designer-mode","onUndo","onRedo","onZoomIn","onZoomOut","onZoomTo","onFitView","onResetView","onCopy","onPaste","onToFront","onToBack","onAlignLeft","onAlignRight","onAlignTop","onAlignBottom","onGroup","onUngroup","onExport","onImport","onOpenSettings","onModeChange"])]),palette:E(r=>[f(zn,{onStartDrag:r.onStartDrag},null,8,["onStartDrag"])]),properties:E(()=>[f(Rn)]),_:1},8,["mode","permission-config"])])])}}}),hd=U(ud,[["__scopeId","data-v-32ae1fb8"]]),bd=`\uFEFF<template>\r
  <div class="demo-permission-layout">\r
    <!-- 左侧权限配置面板 -->\r
    <div class="permission-panel">\r
      <div class="permission-panel__header">\r
        <h3 class="permission-panel__title">权限配置</h3>\r
        <span class="permission-panel__mode">Design 模式</span>\r
        <span class="permission-panel__mode" style="color: red">此处即使配置了design权限也会完全失效，因为使用了getPermissions 函数完全接管权限计算</span>\r
      </div>\r
\r
      <div class="permission-panel__content">\r
        <!-- UI 显示权限 -->\r
        <div class="permission-group">\r
          <h4 class="permission-group__title">🎨 界面显示</h4>\r
          <div class="permission-list">\r
            <label class="permission-item">\r
              <a-checkbox v-model:checked="permissionConfig.design.showToolbar" />\r
              <span class="permission-item__label">显示工具栏</span>\r
            </label>\r
            <label class="permission-item">\r
              <a-checkbox v-model:checked="permissionConfig.design.showNodePalette" />\r
              <span class="permission-item__label">显示节点面板</span>\r
            </label>\r
            <label class="permission-item">\r
              <a-checkbox v-model:checked="permissionConfig.design.showPropertiesPanel" />\r
              <span class="permission-item__label">显示属性面板</span>\r
            </label>\r
            <label class="permission-item">\r
              <a-checkbox v-model:checked="permissionConfig.design.showContextMenu" />\r
              <span class="permission-item__label">显示右键菜单</span>\r
            </label>\r
            <label class="permission-item">\r
              <a-checkbox v-model:checked="permissionConfig.design.showMinimap" />\r
              <span class="permission-item__label">显示小地图</span>\r
            </label>\r
          </div>\r
        </div>\r
\r
        <!-- 编辑操作权限 -->\r
        <div class="permission-group">\r
          <h4 class="permission-group__title">✏️ 编辑操作</h4>\r
          <div class="permission-list">\r
            <label class="permission-item">\r
              <a-checkbox v-model:checked="permissionConfig.design.canAddNode" />\r
              <span class="permission-item__label">添加节点</span>\r
            </label>\r
            <label class="permission-item">\r
              <a-checkbox v-model:checked="permissionConfig.design.canDrag" />\r
              <span class="permission-item__label">拖动节点</span>\r
            </label>\r
            <label class="permission-item">\r
              <a-checkbox v-model:checked="permissionConfig.design.canConnect" />\r
              <span class="permission-item__label">创建连线</span>\r
            </label>\r
            <label class="permission-item">\r
              <a-checkbox v-model:checked="permissionConfig.design.canDelete" />\r
              <span class="permission-item__label">删除元素</span>\r
            </label>\r
            <label class="permission-item">\r
              <a-checkbox v-model:checked="permissionConfig.design.canCopy" />\r
              <span class="permission-item__label">复制</span>\r
            </label>\r
            <label class="permission-item">\r
              <a-checkbox v-model:checked="permissionConfig.design.canPaste" />\r
              <span class="permission-item__label">粘贴</span>\r
            </label>\r
            <label class="permission-item">\r
              <a-checkbox v-model:checked="permissionConfig.design.canGroup" />\r
              <span class="permission-item__label">节点成组</span>\r
            </label>\r
            <label class="permission-item">\r
              <a-checkbox v-model:checked="permissionConfig.design.canToFront" />\r
              <span class="permission-item__label">层级前置</span>\r
            </label>\r
            <label class="permission-item">\r
              <a-checkbox v-model:checked="permissionConfig.design.canToBack" />\r
              <span class="permission-item__label">层级后置</span>\r
            </label>\r
          </div>\r
        </div>\r
\r
        <!-- 对齐操作权限 -->\r
        <div class="permission-group">\r
          <h4 class="permission-group__title">📐 对齐操作</h4>\r
          <div class="permission-list">\r
            <label class="permission-item">\r
              <a-checkbox v-model:checked="permissionConfig.design.canAlign" />\r
              <span class="permission-item__label">对齐总开关</span>\r
            </label>\r
            <label class="permission-item">\r
              <a-checkbox v-model:checked="permissionConfig.design.canAlignLeft" />\r
              <span class="permission-item__label">左对齐</span>\r
            </label>\r
            <label class="permission-item">\r
              <a-checkbox v-model:checked="permissionConfig.design.canAlignRight" />\r
              <span class="permission-item__label">右对齐</span>\r
            </label>\r
            <label class="permission-item">\r
              <a-checkbox v-model:checked="permissionConfig.design.canAlignTop" />\r
              <span class="permission-item__label">上对齐</span>\r
            </label>\r
            <label class="permission-item">\r
              <a-checkbox v-model:checked="permissionConfig.design.canAlignBottom" />\r
              <span class="permission-item__label">下对齐</span>\r
            </label>\r
          </div>\r
        </div>\r
\r
        <!-- 选择操作权限 -->\r
        <div class="permission-group">\r
          <h4 class="permission-group__title">🎯 选择操作</h4>\r
          <div class="permission-list">\r
            <label class="permission-item">\r
              <a-checkbox v-model:checked="permissionConfig.design.canSelectNode" />\r
              <span class="permission-item__label">选中节点</span>\r
            </label>\r
            <label class="permission-item">\r
              <a-checkbox v-model:checked="permissionConfig.design.canSelectEdge" />\r
              <span class="permission-item__label">选中连线</span>\r
            </label>\r
            <label class="permission-item">\r
              <a-checkbox v-model:checked="permissionConfig.design.canMultipleSelect" />\r
              <span class="permission-item__label">多选/框选</span>\r
            </label>\r
            <label class="permission-item">\r
              <a-checkbox v-model:checked="permissionConfig.design.canSelectAll" />\r
              <span class="permission-item__label">全选</span>\r
            </label>\r
          </div>\r
        </div>\r
\r
        <!-- 导入导出权限 -->\r
        <div class="permission-group">\r
          <h4 class="permission-group__title">📦 导入导出</h4>\r
          <div class="permission-list">\r
            <label class="permission-item">\r
              <a-checkbox v-model:checked="permissionConfig.design.canImport" />\r
              <span class="permission-item__label">导入数据</span>\r
            </label>\r
            <label class="permission-item">\r
              <a-checkbox v-model:checked="permissionConfig.design.canExport" />\r
              <span class="permission-item__label">导出数据</span>\r
            </label>\r
          </div>\r
        </div>\r
\r
        <!-- 历史操作权限 -->\r
        <div class="permission-group">\r
          <h4 class="permission-group__title">⏱️ 历史操作</h4>\r
          <div class="permission-list">\r
            <label class="permission-item">\r
              <a-checkbox v-model:checked="permissionConfig.design.canUndo" />\r
              <span class="permission-item__label">撤销</span>\r
            </label>\r
            <label class="permission-item">\r
              <a-checkbox v-model:checked="permissionConfig.design.canRedo" />\r
              <span class="permission-item__label">重做</span>\r
            </label>\r
          </div>\r
        </div>\r
\r
        <!-- 视图操作权限 -->\r
        <div class="permission-group">\r
          <h4 class="permission-group__title">👁️ 视图操作</h4>\r
          <div class="permission-list">\r
            <label class="permission-item">\r
              <a-checkbox v-model:checked="permissionConfig.design.canZoom" />\r
              <span class="permission-item__label">缩放画布</span>\r
            </label>\r
            <label class="permission-item">\r
              <a-checkbox v-model:checked="permissionConfig.design.canPan" />\r
              <span class="permission-item__label">拖拽画布</span>\r
            </label>\r
            <label class="permission-item">\r
              <a-checkbox v-model:checked="permissionConfig.design.canFitView" />\r
              <span class="permission-item__label">适应窗口</span>\r
            </label>\r
            <label class="permission-item">\r
              <a-checkbox v-model:checked="permissionConfig.design.canResetView" />\r
              <span class="permission-item__label">重置视图</span>\r
            </label>\r
          </div>\r
        </div>\r
\r
        <!-- 交互反馈权限 -->\r
        <div class="permission-group">\r
          <h4 class="permission-group__title">💬 交互反馈</h4>\r
          <div class="permission-list">\r
            <label class="permission-item">\r
              <a-checkbox v-model:checked="permissionConfig.design.canHoverNode" />\r
              <span class="permission-item__label">节点 Hover 高亮</span>\r
            </label>\r
            <label class="permission-item">\r
              <a-checkbox v-model:checked="permissionConfig.design.canHoverEdge" />\r
              <span class="permission-item__label">连线 Hover 高亮</span>\r
            </label>\r
            <label class="permission-item">\r
              <a-checkbox v-model:checked="permissionConfig.design.canNodeTooltip" />\r
              <span class="permission-item__label">节点 Tooltip</span>\r
            </label>\r
            <label class="permission-item">\r
              <a-checkbox v-model:checked="permissionConfig.design.canEdgeTooltip" />\r
              <span class="permission-item__label">连线 Tooltip</span>\r
            </label>\r
          </div>\r
        </div>\r
      </div>\r
    </div>\r
\r
    <!-- 右侧流程设计器 -->\r
    <div class="designer-container">\r
      <FlowDesignerLayout\r
        class="flow-designer-test"\r
        ref="layoutRef"\r
        :mode="currentMode"\r
        :permission-config="permissionConfig"\r
        :getPermissions="getPermissionsByRole"\r
        @ready="handleReady"\r
        @mode-change="handleModeChange"\r
      >\r
        <!-- 顶部工具栏 -->\r
        <template #toolbar="scope">\r
          <Toolbar\r
            :zoom-percent="scope.zoomPercent"\r
            :has-selection="scope.hasSelection"\r
            :can-paste="scope.canPaste"\r
            :can-group="scope.canGroup"\r
            :can-ungroup="scope.canUngroup"\r
            :can-undo="scope.canUndo"\r
            :can-redo="scope.canRedo"\r
            :designer-mode="scope.currentMode"\r
            @undo="scope.onUndo"\r
            @redo="scope.onRedo"\r
            @zoom-in="scope.onZoomIn"\r
            @zoom-out="scope.onZoomOut"\r
            @zoom-to="scope.onZoomTo"\r
            @fit-view="scope.onFitView"\r
            @reset-view="scope.onResetView"\r
            @copy="scope.onCopy"\r
            @paste="scope.onPaste"\r
            @to-front="scope.onToFront"\r
            @to-back="scope.onToBack"\r
            @align-left="scope.onAlignLeft"\r
            @align-right="scope.onAlignRight"\r
            @align-top="scope.onAlignTop"\r
            @align-bottom="scope.onAlignBottom"\r
            @group="scope.onGroup"\r
            @ungroup="scope.onUngroup"\r
            @export="scope.onExport"\r
            @import="scope.onImport"\r
            @open-settings="scope.onOpenSettings"\r
            @mode-change="scope.onModeChange"\r
          />\r
        </template>\r
\r
        <!-- 左侧节点面板 -->\r
        <template #palette="scope">\r
          <NodePalette @start-drag="scope.onStartDrag" />\r
        </template>\r
\r
        <!-- 右侧属性面板 -->\r
        <template #properties>\r
          <PropertiesPanel />\r
        </template>\r
\r
      </FlowDesignerLayout>\r
\r
      <!-- 模式选择器（固定在右上角） -->\r
<!--      <ModeSelection-->\r
<!--        :designer="designer"-->\r
<!--        @mode-change="handleModeChangeFromSelector"-->\r
<!--      />-->\r
    </div>\r
  </div>\r
</template>\r
\r
<script setup lang="ts">\r
import { ref, reactive, computed } from 'vue'\r
import { message } from 'ant-design-vue'\r
import { FlowDesignerLayout }  from '@quick-code/x6-flow-designer'\r
import type { FlowDesigner } from '@quick-code/x6-flow-designer'\r
import Toolbar from '@/views/Toolbar.vue'\r
import NodePalette from '@/views/NodePalette.vue'\r
import PropertiesPanel from '@/views/PropertiesPanel.vue'\r
import ModeSelection from '@/views/ModeSelection.vue'\r
\r
import node30 from '/testfile/node-30.json'\r
\r
\r
const layoutRef = ref<InstanceType<typeof FlowDesignerLayout> | null>(null)\r
// 测试用：搜索框插槽内的 input 引用（用于自动聚焦）\r
const searchInputRef = ref<HTMLInputElement | null>(null);\r
\r
// ─── Designer 实例（从 layoutRef 中提取，传递给 ModeSelection）──────────────\r
const designer = computed(() => layoutRef.value?.designer || null)\r
\r
// ─── 当前模式状态 ─────────────────────────────────────────────────────────────\r
const currentMode = ref('design')\r
\r
// ─── 权限配置（简化版：只配置需要覆盖默认值的权限）────────────────────────────\r
/**\r
 * 用户权限配置\r
 *\r
 * 说明：\r
 * 1. 只需配置需要覆盖默认值的权限项\r
 * 2. 未配置的权限项会自动使用 defaultPermissionConfig.ts 中的默认值\r
 * 3. 扩展模式会自动继承 design 模式的配置\r
 * 4. Designer 类内部会自动合并默认配置\r
 *\r
 * 默认值规则：\r
 * - design 模式：所有权限默认开启（true）\r
 * - readonly 模式：禁用编辑权限，保留查看权限\r
 * - preview 模式：最小化界面，只保留基本查看\r
 */\r
const permissionConfig = reactive({\r
  // ─── 设计模式 ───\r
  design: {\r
    // UI 显示\r
    showToolbar: true,\r
    showNodePalette: true,\r
    showPropertiesPanel: true,\r
    showContextMenu: true,\r
    showMinimap: true,\r
\r
    // 编辑能力\r
    canDrag: true,\r
    canConnect: true,\r
    canDelete: true,\r
    canCopy: true,\r
    canPaste: true,\r
    canGroup: true,\r
    canToFront: true,\r
    canToBack: true,\r
    canAddNode: true,\r
\r
    // 选择能力\r
    canMultipleSelect: true,\r
    canSelectAll: true,\r
\r
    // 对齐能力\r
    canAlign: true,\r
    canAlignLeft: true,\r
    canAlignRight: true,\r
    canAlignTop: true,\r
    canAlignBottom: true,\r
\r
    // 操作能力\r
    canImport: true,\r
    canExport: true,\r
    canUndo: true,\r
    canRedo: true,\r
\r
    // 视图能力\r
    canZoom: true,\r
    canPan: true,\r
    canFitView: true,\r
    canResetView: true,\r
\r
    // 交互反馈能力\r
    canHoverNode: true,\r
    canHoverEdge: true,\r
    canSelectNode: true,\r
    canSelectEdge: true,\r
    canNodeTooltip: true,\r
    canEdgeTooltip: true,\r
  }\r
})\r
const userRole = ref('admin')\r
//注意：通过getPermissions函数完全接管权限，permissionConfig参数配置的权限将会失效，所有权限默认都为false, 需要对应的权限必须显式地置为true\r
const getPermissionsByRole = (mode) => {\r
  const base = {\r
    canSelectNode: true,\r
    canZoom: true,\r
    canPan: true\r
  }\r
\r
  if (userRole.value === 'admin') {\r
    return { ...base, canAddNode: false, canDrag: true, canDelete: true }\r
  }\r
\r
  if (userRole.value === 'editor') {\r
    return { ...base, canAddNode: true, canDrag: true, canDelete: false }\r
  }\r
\r
  return { ...base, canAddNode: false, canDrag: false }\r
}\r
\r
\r
// ─── ready 回调：拿到 designer 实例后加载本地数据 ─────────────────────────────\r
function handleReady(designer: FlowDesigner) {\r
  // ─── 加载测试数据 ──────────────────────────────────────────────────────\r
  if (node30) {\r
    try {\r
      designer.load(node30)\r
      //message.success('加载成功！')\r
    } catch {\r
      message.error('加载失败')\r
    }\r
  }\r
}\r
\r
\r
// ─── mode-change 事件 ─────────────────────────────────────────────────────────\r
function handleModeChange(mode) {\r
  message.success(\`已切换至\${{ design: '设计', readonly: '只读', preview: '预览' }[mode]}模式\`)\r
  currentMode.value = mode\r
}\r
\r
// ─── 从 ModeSelection 组件触发的模式切换 ─────────────────────────────────────\r
function handleModeChangeFromSelector(mode) {\r
  // 🎯 调用 designer.setMode() 更新 designer 内部状态\r
  if (designer.value) {\r
    console.log('[FlowDesignerTest] 调用 designer.setMode()', mode)\r
    designer.value.setMode(mode)\r
  } else {\r
    console.warn('[FlowDesignerTest] designer 实例不存在，无法切换模式')\r
  }\r
\r
  // 更新本地状态（保持同步）\r
  currentMode.value = mode\r
\r
  //message.success(\`已切换至\${{ design: '设计', readonly: '只读', preview: '预览' }[mode]}模式\`)\r
}\r
\r
defineExpose({ layoutRef })\r
<\/script>\r
\r
<style scoped>\r
/* ==================== 布局容器 ==================== */\r
.demo-permission-layout {\r
  display: flex;\r
  width: 100%;\r
  height: 100%;\r
  gap: 0;\r
  background: #f5f5f5;\r
}\r
\r
/* ==================== 左侧权限配置面板 ==================== */\r
.permission-panel {\r
  width: 180px;\r
  background: #fff;\r
  border-right: 1px solid #e8e8e8;\r
  display: flex;\r
  flex-direction: column;\r
  overflow: hidden;\r
}\r
\r
.permission-panel__header {\r
  padding: 16px;\r
  border-bottom: 1px solid #e8e8e8;\r
  background: #fafafa;\r
}\r
\r
.permission-panel__title {\r
  font-size: 16px;\r
  font-weight: 600;\r
  color: #1a1a2e;\r
  margin: 0 0 4px 0;\r
}\r
\r
.permission-panel__mode {\r
  display: inline-block;\r
  padding: 2px 8px;\r
  background: #e6f7ff;\r
  color: #1677ff;\r
  border-radius: 4px;\r
  font-size: 12px;\r
  font-weight: 500;\r
}\r
\r
.permission-panel__content {\r
  flex: 1;\r
  overflow-y: auto;\r
  padding: 16px;\r
}\r
\r
/* ==================== 权限分组 ==================== */\r
.permission-group {\r
  margin-bottom: 20px;\r
}\r
\r
.permission-group:last-child {\r
  margin-bottom: 0;\r
}\r
\r
.permission-group__title {\r
  font-size: 14px;\r
  font-weight: 600;\r
  color: #333;\r
  margin: 0 0 12px 0;\r
  padding-bottom: 8px;\r
  border-bottom: 2px solid #e8e8e8;\r
}\r
\r
/* ==================== 权限列表 ==================== */\r
.permission-list {\r
  display: flex;\r
  flex-direction: column;\r
  gap: 8px;\r
}\r
\r
.permission-item {\r
  display: flex;\r
  align-items: center;\r
  gap: 8px;\r
  padding: 6px 8px;\r
  border-radius: 4px;\r
  cursor: pointer;\r
  transition: background 0.2s;\r
  user-select: none;\r
}\r
\r
.permission-item:hover {\r
  background: #f5f5f5;\r
}\r
\r
.permission-item__label {\r
  font-size: 13px;\r
  color: #555;\r
  flex: 1;\r
}\r
\r
/* ==================== 右侧设计器容器 ==================== */\r
.designer-container {\r
  flex: 1;\r
  position: relative;\r
  overflow: hidden;\r
}\r
\r
.flow-designer-test {\r
  width: 100%;\r
  height: 100%;\r
}\r
\r
/* ==================== 滚动条样式 ==================== */\r
.permission-panel__content::-webkit-scrollbar {\r
  width: 6px;\r
}\r
\r
.permission-panel__content::-webkit-scrollbar-track {\r
  background: #f1f1f1;\r
}\r
\r
.permission-panel__content::-webkit-scrollbar-thumb {\r
  background: #c1c1c1;\r
  border-radius: 3px;\r
}\r
\r
.permission-panel__content::-webkit-scrollbar-thumb:hover {\r
  background: #a8a8a8;\r
}\r
\r
/* ── 测试用自定义右键菜单样式 ────────────────────────────────────────────── */\r
.custom-ctx-menu {\r
  background: #fff;\r
  border: 1px solid #e8e8e8;\r
  border-radius: 6px;\r
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.12);\r
  padding: 4px 0;\r
  min-width: 180px;\r
  user-select: none;\r
}\r
\r
.custom-ctx-menu__item {\r
  padding: 7px 16px;\r
  font-size: 13px;\r
  color: #262626;\r
  cursor: pointer;\r
  transition: background 0.15s;\r
  display: flex;\r
  align-items: center;\r
  gap: 8px;\r
}\r
\r
.custom-ctx-menu__item:hover {\r
  background: #f5f5f5;\r
}\r
\r
.custom-ctx-menu__item--danger {\r
  color: #f5222d;\r
}\r
\r
.custom-ctx-menu__icon {\r
  font-size: 14px;\r
  flex-shrink: 0;\r
}\r
\r
.custom-ctx-menu__divider {\r
  height: 1px;\r
  background: #f0f0f0;\r
  margin: 4px 0;\r
}\r
\r
/* ── 测试用自定义搜索框样式 ──────────────────────────────────────────────── */\r
.custom-search-box {\r
  position: absolute;\r
  top: 3px;\r
  right: 6px;\r
  z-index: 1000;\r
  display: flex;\r
  align-items: center;\r
  gap: 6px;\r
  padding: 6px 10px;\r
  background: #fff;\r
  border-radius: 6px;\r
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);\r
  min-width: 280px;\r
}\r
\r
.custom-search-box__icon {\r
  color: #8c9bb5;\r
  font-size: 14px;\r
  flex-shrink: 0;\r
}\r
\r
.custom-search-box__input {\r
  flex: 1;\r
  border: 1px solid #d9d9d9;\r
  border-radius: 4px;\r
  padding: 2px 8px;\r
  font-size: 13px;\r
  outline: none;\r
  min-width: 140px;\r
}\r
\r
.custom-search-box__input:focus {\r
  border-color: #1890ff;\r
  box-shadow: 0 0 0 2px rgba(24, 144, 255, 0.2);\r
}\r
\r
.custom-search-box__count {\r
  font-size: 12px;\r
  color: #8c9bb5;\r
  white-space: nowrap;\r
  user-select: none;\r
  min-width: 40px;\r
  text-align: center;\r
}\r
\r
.custom-search-box__btn {\r
  border: 1px solid #d9d9d9;\r
  background: #fff;\r
  border-radius: 4px;\r
  padding: 2px 8px;\r
  cursor: pointer;\r
  font-size: 12px;\r
  line-height: 1.5;\r
  transition: all 0.15s;\r
}p\r
\r
.custom-search-box__btn:hover:not(:disabled) {\r
  border-color: #1890ff;\r
  color: #1890ff;\r
}\r
\r
.custom-search-box__btn:disabled {\r
  color: #bfbfbf;\r
  cursor: not-allowed;\r
}\r
.my-node-tooltip {\r
  background: #fff;\r
  border: 1px solid #e8e8e8;\r
  border-radius: 4px;\r
  padding: 8px;\r
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);\r
}\r
.my-edge-tooltip {\r
  background: #fff;\r
  border: 1px solid #e8e8e8;\r
  border-radius: 4px;\r
  padding: 8px;\r
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);\r
}\r
.abc {\r
  fill: red\r
}\r
\r
/* 【测试】自定义连线标签 */\r
.custom-edge-label {\r
  display: inline-flex;\r
  align-items: center;\r
  gap: 4px;\r
  padding: 2px 8px;\r
  background: #fff;\r
  border: 1px solid #cce3f9;\r
  border-radius: 3px;\r
  font-size: 12px;\r
  color: #999999;\r
  white-space: nowrap;\r
  box-shadow: 0 1px 4px rgba(22, 119, 255, 0.2);\r
  pointer-events: none;\r
  font-weight: 500;\r
  filter: drop-shadow(0 1px 2px rgba(0, 0, 0, 0.1));\r
}\r
.custom-edge-label-selected {\r
  color: #1677ff;\r
  border: 1px solid #1677ff;\r
}\r
\r
.custom-edge-label__icon {\r
  font-size: 11px;\r
  flex-shrink: 0;\r
}\r
\r
.custom-edge-label__text {\r
  max-width: 80px;\r
  overflow: hidden;\r
  text-overflow: ellipsis;\r
}\r
</style>\r
`,vd=`<template>\r
\r
    <FlowDesignerLayout\r
        class="flow-designer-test"\r
        ref="layoutRef"\r
        :mode="currentMode"\r
        :permission-config="permissionConfig"\r
        @ready="handleReady"\r
        @save="handleSave"\r
        @error="handleError"\r
        @mode-change="handleModeChange"\r
        :before-node-add="handleBeforeNodeAdd"\r
        :after-node-add="handleAfterNodeAdd"\r
        :before-node-remove="handleBeforeNodeRemove"\r
        :before-edge-add="handleBeforeEdgeAdd"\r
        :after-edge-add="handleAfterEdgeAdd"\r
        :before-edge-remove="handleBeforeEdgeRemove"\r
        :after-edge-remove="handleAfterEdgeRemove"\r
        :after-data-loaded="handleAfterDataLoaded"\r
        :before-node-select="handleBeforeNodeSelect"\r
        :before-edge-select="handleBeforeEdgeSelect"\r
        :before-edge-hover="handleBeforeEdgeHover"\r
        :canvasConfig="{ //此处画布配置，格式参考defaultConfig.ts, 传入后会与defaultConfig.ts进行merge, 传入的优先级会更高覆盖掉defaultConfig\r
      grid: {\r
        //type: 'mesh'\r
      },\r
      tooltip: {\r
        //offsetX: -10,  // 向左偏移 15px\r
        //offsetY: -10,  // 向上偏移 10px\r
      },\r
      // highlight: {\r
      //   nodeHoverOutEdgeFlow: {\r
      //     disableWhenNodeCountExceeds: 50\r
      //   }\r
      // }\r
    }"\r
    >\r
      <!-- 顶部工具栏 -->\r
      <template #toolbar="scope">\r
        <Toolbar\r
            :zoom-percent="scope.zoomPercent"\r
            :has-selection="scope.hasSelection"\r
            :can-paste="scope.canPaste"\r
            :can-group="scope.canGroup"\r
            :can-ungroup="scope.canUngroup"\r
            :can-undo="scope.canUndo"\r
            :can-redo="scope.canRedo"\r
            :designer-mode="scope.currentMode"\r
            @undo="scope.onUndo"\r
            @redo="scope.onRedo"\r
            @zoom-in="scope.onZoomIn"\r
            @zoom-out="scope.onZoomOut"\r
            @zoom-to="scope.onZoomTo"\r
            @fit-view="scope.onFitView"\r
            @reset-view="scope.onResetView"\r
            @copy="scope.onCopy"\r
            @paste="scope.onPaste"\r
            @to-front="scope.onToFront"\r
            @to-back="scope.onToBack"\r
            @align-left="scope.onAlignLeft"\r
            @align-right="scope.onAlignRight"\r
            @align-top="scope.onAlignTop"\r
            @align-bottom="scope.onAlignBottom"\r
            @group="scope.onGroup"\r
            @ungroup="scope.onUngroup"\r
            @export="scope.onExport"\r
            @import="scope.onImport"\r
            @open-settings="scope.onOpenSettings"\r
            @mode-change="scope.onModeChange"\r
        />\r
      </template>\r
\r
      <!-- 左侧节点面板 -->\r
      <template #palette="scope">\r
        <NodePalette @start-drag="scope.onStartDrag" />\r
      </template>\r
\r
      <!-- 右侧属性面板 -->\r
      <template #properties>\r
        <PropertiesPanel />\r
      </template>\r
\r
      <!-- 【测试】节点搜索框：纯插槽，完全自定义 UI -->\r
      <template #search-box="{ keyword, total, currentIndex, next, prev, reset, close }">\r
        <div class="custom-search-box">\r
          <SearchOutlined class="custom-search-box__icon" />\r
          <input\r
              ref="searchInputRef"\r
              v-model="keyword.value"\r
              class="custom-search-box__input"\r
              placeholder="搜索节点名称或ID..."\r
              @keyup.enter="next"\r
              @keyup.esc="close"\r
              @keydown.shift.enter.prevent="prev"\r
          />\r
          <span class="custom-search-box__count">\r
          {{ total.value > 0 ? \`\${currentIndex.value + 1} / \${total.value}\` : '0 / 0' }}\r
        </span>\r
          <button class="custom-search-box__btn" :disabled="total === 0" @click="prev" title="上一个 (Shift+Enter)">↑</button>\r
          <button class="custom-search-box__btn" :disabled="total === 0" @click="next" title="下一个 (Enter)">↓</button>\r
          <button class="custom-search-box__btn" @click="close" title="关闭 (Esc)">✕</button>\r
        </div>\r
      </template>\r
\r
      <!-- 【测试】画布右键菜单：纯插槽，通过 capabilities 判断权限 -->\r
      <template #canvas-menu="{ capabilities, onSelect }">\r
        <div class="custom-ctx-menu">\r
          <div v-if="capabilities.canSelectAll && capabilities.canMultipleSelect" class="custom-ctx-menu__item" @click="onSelect('selectAll')">\r
            <SelectOutlined class="custom-ctx-menu__icon" /><span>全选节点 (Ctrl+A)</span>\r
          </div>\r
          <template v-if="capabilities.canUndo || capabilities.canRedo">\r
            <div v-if="capabilities.canSelectAll && capabilities.canMultipleSelect" class="custom-ctx-menu__divider" />\r
            <div v-if="capabilities.canUndo" class="custom-ctx-menu__item" @click="onSelect('undo')">\r
              <UndoOutlined class="custom-ctx-menu__icon" /><span>撤销 (Ctrl+Z)</span>\r
            </div>\r
            <div v-if="capabilities.canRedo" class="custom-ctx-menu__item" @click="onSelect('redo')">\r
              <RedoOutlined class="custom-ctx-menu__icon" /><span>重做 (Ctrl+Y)</span>\r
            </div>\r
          </template>\r
          <template v-if="capabilities.canZoom || capabilities.canFitView">\r
            <div class="custom-ctx-menu__divider" />\r
            <div v-if="capabilities.canZoom" class="custom-ctx-menu__item" @click="onSelect('zoomIn')">\r
              <ZoomInOutlined class="custom-ctx-menu__icon" /><span>放大 (Ctrl+=)</span>\r
            </div>\r
            <div v-if="capabilities.canZoom" class="custom-ctx-menu__item" @click="onSelect('zoomOut')">\r
              <ZoomOutOutlined class="custom-ctx-menu__icon" /><span>缩小 (Ctrl+-)</span>\r
            </div>\r
            <div v-if="capabilities.canFitView" class="custom-ctx-menu__item" @click="onSelect('fitView')">\r
              <CompressOutlined class="custom-ctx-menu__icon" /><span>适应窗口 (Ctrl+0)</span>\r
            </div>\r
            <div v-if="capabilities.canResetView" class="custom-ctx-menu__item" @click="onSelect('resetView')">\r
              <FullscreenExitOutlined class="custom-ctx-menu__icon" /><span>重置视图</span>\r
            </div>\r
          </template>\r
          <template v-if="capabilities.canImport || capabilities.canExport">\r
            <div class="custom-ctx-menu__divider" />\r
            <div v-if="capabilities.canImport" class="custom-ctx-menu__item" @click="onSelect('import')">\r
              <ImportOutlined class="custom-ctx-menu__icon" /><span>导入 JSON</span>\r
            </div>\r
            <div v-if="capabilities.canExport" class="custom-ctx-menu__item" @click="onSelect('export')">\r
              <ExportOutlined class="custom-ctx-menu__icon" /><span>导出 JSON</span>\r
            </div>\r
          </template>\r
          <template v-if="capabilities.canDelete">\r
            <div class="custom-ctx-menu__divider" />\r
            <div class="custom-ctx-menu__item custom-ctx-menu__item--danger" @click="onSelect('clear')">\r
              <ClearOutlined class="custom-ctx-menu__icon" /><span>清空画布</span>\r
            </div>\r
          </template>\r
        </div>\r
      </template>\r
\r
      <!-- 【测试】节点右键菜单：纯插槽，通过 capabilities + isGroup/isMultiSelect 判断 -->\r
      <template #node-menu="{ isGroup, isMultiSelect, capabilities, onSelect }">\r
        <div class="custom-ctx-menu">\r
          <div v-if="isMultiSelect && capabilities.canGroup" class="custom-ctx-menu__item" @click="onSelect('group')">\r
            <GroupOutlined class="custom-ctx-menu__icon" /><span>成组 (Ctrl+G)</span>\r
          </div>\r
          <div v-if="isGroup && capabilities.canGroup" class="custom-ctx-menu__item" @click="onSelect('ungroup')">\r
            <UngroupOutlined class="custom-ctx-menu__icon" /><span>解组 (Ctrl+Shift+G)</span>\r
          </div>\r
          <div v-if="(isMultiSelect || isGroup) && capabilities.canGroup" class="custom-ctx-menu__divider" />\r
          <div v-if="capabilities.canCopy" class="custom-ctx-menu__item" @click="onSelect('copy')">\r
            <CopyOutlined class="custom-ctx-menu__icon" /><span>复制节点 (Ctrl+C)</span>\r
          </div>\r
          <div v-if="capabilities.canPaste" class="custom-ctx-menu__item" @click="onSelect('paste')">\r
            <SnippetsOutlined class="custom-ctx-menu__icon" /><span>粘贴节点 (Ctrl+V)</span>\r
          </div>\r
          <div v-if="capabilities.canCopy || capabilities.canPaste" class="custom-ctx-menu__divider" />\r
          <div v-if="capabilities.canToFront" class="custom-ctx-menu__item" @click="onSelect('toFront')">\r
            <VerticalAlignTopOutlined class="custom-ctx-menu__icon" /><span>层级前置</span>\r
          </div>\r
          <div v-if="capabilities.canToBack" class="custom-ctx-menu__item" @click="onSelect('toBack')">\r
            <VerticalAlignBottomOutlined class="custom-ctx-menu__icon" /><span>层级后置</span>\r
          </div>\r
          <div v-if="capabilities.canToFront || capabilities.canToBack" class="custom-ctx-menu__divider" />\r
          <div v-if="capabilities.canDelete" class="custom-ctx-menu__item custom-ctx-menu__item--danger" @click="onSelect('delete')">\r
            <DeleteOutlined class="custom-ctx-menu__icon" /><span>删除节点 (Delete)</span>\r
          </div>\r
        </div>\r
      </template>\r
\r
      <!-- 【测试】连线右键菜单：纯插槽 -->\r
      <template #edge-menu="{ capabilities, onSelect }">\r
        <div class="custom-ctx-menu">\r
          <div v-if="capabilities.canDelete" class="custom-ctx-menu__item custom-ctx-menu__item--danger" @click="onSelect('delete')">\r
            <DisconnectOutlined class="custom-ctx-menu__icon" /><span>删除连线 (Delete)</span>\r
          </div>\r
        </div>\r
      </template>\r
\r
      <!-- 节点 Tooltip -->\r
      <!--    <template #node-tooltip="{ node, data }">-->\r
      <!--      <div class="my-node-tooltip" style="color: black">-->\r
      <!--        node-tooltip插槽:{{ data?.label }}&#45;&#45;{{node.shape}}-->\r
      <!--      </div>-->\r
      <!--    </template>-->\r
\r
      <!-- 连线 Tooltip -->\r
      <!--    <template #edge-tooltip="{ edge, data }">-->\r
      <!--      <div class="my-edge-tooltip">-->\r
      <!--        edge-tooltip插槽:{{ data?.label }}-->\r
      <!--      </div>-->\r
      <!--    </template>-->\r
\r
      <!-- 【测试】edge-label 插槽：自定义连线标签 -->\r
      <!--    <template #edge-label="{ edge, data }">-->\r
      <!--      <div class="custom-edge-label" :class="{ 'custom-edge-label-selected': (data.state == 'hover' || data.state == 'selected') }">-->\r
      <!--        <TagOutlined class="custom-edge-label__icon" />-->\r
      <!--        <span class="custom-edge-label__text">{{data.state}}-{{ (data as any)?.label }}</span>-->\r
      <!--      </div>-->\r
      <!--    </template>-->\r
\r
      <!--\r
        ════════════════════════════════════════════════════════════════\r
        【common-vue-node】插槽定义区域\r
        ────────────────────────────────────────────────────────────────\r
        约定：<template #node-<type>> 即可定义对应 node-type 的节点内容。\r
        scope 包含：\r
          - node      : X6 Node 实例（读写数据、监听事件）\r
          - nodeType  : 当前 node-type 字符串\r
        ════════════════════════════════════════════════════════════════\r
      -->\r
\r
      <!-- node-type="custom-task" 的节点内容 -->\r
      <template #node-custom-task="{ node, graph }">\r
        <CommonNodeTask :node="node" :graph="graph" />\r
      </template>\r
\r
      <!-- node-type="custom-notice" 的节点内容 -->\r
      <template #node-custom-notice="{ node, graph }">\r
        <CommonNodeNotice :node="node" :graph="graph" />\r
      </template>\r
    </FlowDesignerLayout>\r
\r
    <!-- 模式选择器（固定在右上角） -->\r
    <ModeSelection\r
        :designer="designer"\r
        @mode-change="handleModeChangeFromSelector"\r
    />\r
\r
\r
</template>\r
\r
<script setup lang="ts">\r
import { ref, reactive, computed } from 'vue'\r
import { message } from 'ant-design-vue'\r
import {\r
  SelectOutlined, SearchOutlined, UndoOutlined, RedoOutlined, ZoomInOutlined, ZoomOutOutlined,\r
  CompressOutlined, FullscreenExitOutlined, ImportOutlined, ExportOutlined, ClearOutlined,\r
  GroupOutlined, UngroupOutlined, CopyOutlined, SnippetsOutlined,\r
  VerticalAlignTopOutlined, VerticalAlignBottomOutlined, DeleteOutlined,\r
  DisconnectOutlined,\r
  TagOutlined,\r
} from '@ant-design/icons-vue'\r
import { FlowDesigner } from '../components/FlowDesigner/core'\r
import FlowDesignerLayout from '../components/FlowDesigner/FlowDesignerLayout.vue'\r
import Toolbar from './Toolbar.vue'\r
import NodePalette from './NodePalette.vue'\r
import PropertiesPanel from './PropertiesPanel.vue'\r
import ModeSelection from './ModeSelection.vue'\r
import type { FlowData, DesignerMode } from './types/flow.types'\r
import type {\r
  BeforeNodeAddEvent,\r
  AfterNodeAddEvent,\r
  BeforeNodeRemoveEvent,\r
  BeforeEdgeAddEvent,\r
  AfterEdgeAddEvent,\r
  BeforeEdgeRemoveEvent,\r
  AfterEdgeRemoveEvent,\r
} from '../components/FlowDesigner/types/events'\r
import node30 from '/testfile/node-30.json'\r
\r
// ─── common-vue-node 子节点组件\r
import CommonNodeTask   from './nodes/CommonNodeTask.vue'\r
import CommonNodeNotice from './nodes/CommonNodeNotice.vue'\r
import {\r
  BeforeEdgeHoverEvent,\r
  BeforeEdgeSelectEvent,\r
  BeforeNodeSelectEvent\r
} from "../components/FlowDesigner/types/events";\r
\r
const layoutRef = ref<InstanceType<typeof FlowDesignerLayout> | null>(null)\r
// 测试用：搜索框插槽内的 input 引用（用于自动聚焦）\r
const searchInputRef = ref<HTMLInputElement | null>(null);\r
\r
// ─── Designer 实例（从 layoutRef 中提取，传递给 ModeSelection）──────────────\r
const designer = computed(() => layoutRef.value?.designer || null)\r
\r
// ─── 当前模式状态 ─────────────────────────────────────────────────────────────\r
const currentMode = ref<DesignerMode>('design')\r
\r
// ─── 权限配置（简化版：只配置需要覆盖默认值的权限）────────────────────────────\r
/**\r
 * 用户权限配置\r
 *\r
 * 说明：\r
 * 1. 只需配置需要覆盖默认值的权限项\r
 * 2. 未配置的权限项会自动使用 defaultPermissionConfig.ts 中的默认值\r
 * 3. 扩展模式会自动继承 design 模式的配置\r
 * 4. Designer 类内部会自动合并默认配置\r
 *\r
 * 默认值规则：\r
 * - design 模式：所有权限默认开启（true）\r
 * - readonly 模式：禁用编辑权限，保留查看权限\r
 * - preview 模式：最小化界面，只保留基本查看\r
 */\r
const permissionConfig = reactive({\r
  // ─── 设计模式 ───\r
  // 保持默认配置即可，如需修改可以覆盖\r
  design: {\r
    // UI 显示\r
    showToolbar: true,\r
    showNodePalette: true,\r
    showPropertiesPanel: true,\r
    showContextMenu: true,\r
    showMinimap: true,\r
    showSearch: true,\r
\r
    // 编辑能力\r
    canDrag: true,\r
    canConnect: true,\r
    canDelete: true,\r
    canCopy: true,\r
    canPaste: true,\r
    canGroup: true,\r
    canToFront: true,\r
    canToBack: true,\r
    canAddNode: true,\r
    canTransform: false,\r
\r
    // 选择能力\r
    canMultipleSelect: true,\r
    canSelectAll: true,\r
\r
    // 对齐能力\r
    canAlign: true,\r
    canAlignLeft: true,\r
    canAlignRight: true,\r
    canAlignTop: true,\r
    canAlignBottom: true,\r
\r
    // 操作能力\r
    canImport: true,\r
    canExport: true,\r
    canUndo: true,\r
    canRedo: true,\r
\r
    // 视图能力\r
    canZoom: true,\r
    canPan: true,\r
    canFitView: true,\r
    canResetView: true,\r
\r
    // 交互反馈能力\r
    canHoverNode: true,\r
    canHoverEdge: true,\r
    canSelectNode: true,\r
    canSelectEdge: true,\r
    canSelectCanvas: true,\r
    canNodeTooltip: true,\r
    canEdgeTooltip: true,\r
\r
    //自定义扩展权限\r
    aaa: true,\r
    bbb: true\r
  },\r
\r
  // ─── 只读模式 ───\r
  // 只需配置与默认值不同的权限\r
  readonly: {\r
    // UI 显示\r
    showToolbar: true,\r
    showNodePalette: true,\r
    showPropertiesPanel: true,\r
    showContextMenu: true,\r
    showMinimap: true,\r
\r
    // 编辑能力\r
    canDrag: false,\r
    canConnect: false,\r
    canDelete: false,\r
    canCopy: false,\r
    canPaste: false,\r
    canGroup: false,\r
    canToFront: false,\r
    canToBack: false,\r
    canAddNode: false,\r
\r
    // 选择能力\r
    canMultipleSelect: false,\r
    canSelectAll: false,\r
\r
    // 对齐能力\r
    canAlign: false,\r
    canAlignLeft: false,\r
    canAlignRight: false,\r
    canAlignTop: false,\r
    canAlignBottom: false,\r
\r
    // 操作能力\r
    canImport: false,\r
    canExport: false,\r
    canUndo: false,\r
    canRedo: false,\r
\r
    // 视图能力\r
    canZoom: true,\r
    canPan: true,\r
    canFitView: true,\r
    canResetView: true,\r
\r
    // 交互反馈能力\r
    canHoverNode: false,\r
    canHoverEdge: false,\r
    canSelectNode: false,\r
    canSelectEdge: false,\r
    canNodeTooltip: false,\r
    canEdgeTooltip: false,\r
  },\r
\r
  // ─── 预览模式 ───\r
  // 默认已经最小化界面，如需调整可以覆盖\r
  preview: {\r
    // UI 显示\r
    showToolbar: false,\r
    showNodePalette: false,\r
    showPropertiesPanel: false,\r
    showContextMenu: false,\r
    showMinimap: true,\r
\r
    // 编辑能力\r
    canDrag: false,\r
    canConnect: false,\r
    canDelete: false,\r
    canCopy: false,\r
    canPaste: false,\r
    canGroup: false,\r
    canToFront: false,\r
    canToBack: false,\r
    canAddNode: false,\r
\r
    // 选择能力\r
    canMultipleSelect: false,\r
    canSelectAll: false,\r
\r
    // 对齐能力\r
    canAlign: false,\r
    canAlignLeft: false,\r
    canAlignRight: false,\r
    canAlignTop: false,\r
    canAlignBottom: false,\r
\r
    // 操作能力\r
    canImport: false,\r
    canExport: false,\r
    canUndo: false,\r
    canRedo: false,\r
\r
    // 视图能力\r
    canZoom: true,\r
    canPan: true,\r
    canFitView: true,\r
    canResetView: true,\r
\r
    // 交互反馈能力\r
    canHoverNode: false,\r
    canHoverEdge: false,\r
    canSelectNode: false,\r
    canSelectEdge: false,\r
    canNodeTooltip: false,\r
    canEdgeTooltip: false,\r
  },\r
\r
  // ─── 扩展模式示例（可选）───\r
  // 添加自定义模式，未配置的权限会自动继承 design 模式\r
  customMode: {\r
    showToolbar: false,\r
    showNodePalette: false,\r
    showPropertiesPanel: false,\r
    showContextMenu: false,\r
    showMinimap: false,\r
\r
    aaa: false,\r
    bbb: false\r
  }\r
})\r
\r
// 测试用：10秒后动态禁用 Node Tooltip\r
// 注意：不需要手动调用 updatePermissions(),FlowDesignerLayout 内部会自动监听 permissionConfig 的变化\r
// setTimeout(()=>{\r
//   console.log('[FlowDesignerTest] 10秒后禁用 Node Tooltip')\r
//   permissionConfig.design.canNodeTooltip = false\r
//   console.log('[FlowDesignerTest] permissionConfig.design.canNodeTooltip =', permissionConfig.design.canNodeTooltip)\r
// },10*1000)\r
\r
// 测试用：10秒后动态隐藏 Minimap\r
// 注意：不需要手动调用 updatePermissions()，FlowDesignerLayout 内部会自动监听 permissionConfig 的变化\r
// setTimeout(() => {\r
//   console.log('[FlowDesignerTest] 10秒后隐藏 Minimap')\r
//   permissionConfig.design.showMinimap = false\r
//   console.log('[FlowDesignerTest] permissionConfig.design.showMinimap =', permissionConfig.design.showMinimap)\r
// }, 10 * 1000)\r
\r
\r
// ─── ready 回调：拿到 designer 实例后加载本地数据 ─────────────────────────────\r
function handleReady(designer: FlowDesigner) {\r
  // ─── 示例1：重写边的 hover 状态颜色为紫色 ─────────────────────────────────\r
  // 使用 registerEdgeStateHandler  registerNodeStateHandler，方法可以自定义或重写边/节点的状态样式\r
  // designer.registerEdgeStateHandler('hover', {\r
  //   apply: (edge, ctx) => {\r
  //     // 自定义 hover 状态：紫色高亮\r
  //     edge.attr('line/stroke', '#9c27b0')  // 紫色\r
  //     edge.attr('line/strokeWidth', 3)      // 更粗的线条\r
  //   }\r
  // }, true)  // override=true 表示覆盖内置的 hover 状态处理器\r
  //\r
  // console.log('[Ready] 已注册自定义边 hover 状态处理器（紫色）')\r
\r
  // ─── 示例2：注册新的边自定义状态（如 warning、error 等）────────────────\r
  // designer.registerEdgeStateHandler('warning', {\r
  //   apply: (edge, ctx) => {\r
  //     edge.attr('line/stroke', '#ff9800')  // 橙色\r
  //     edge.attr('line/strokeWidth', 2)\r
  //     edge.attr('line/strokeDasharray', '5 5')  // 虚线\r
  //   }\r
  // })\r
\r
  // ─── 加载测试数据 ──────────────────────────────────────────────────────\r
  if (node30) {\r
    try {\r
      designer.load(node30)\r
      message.success('加载成功！')\r
    } catch {\r
      message.error('加载失败')\r
    }\r
  }\r
}\r
\r
// ─── save 事件：持久化到 localStorage ────────────────────────────────────────\r
function handleSave(data: FlowData) {\r
  message.success('保存成功！')\r
  localStorage.setItem('flow-designer-test', JSON.stringify(data))\r
}\r
\r
// ─── error 事件 ───────────────────────────────────────────────────────────────\r
function handleError(error: Error) {\r
  message.error(\`错误: \${error.message}\`)\r
}\r
\r
// ─── mode-change 事件 ─────────────────────────────────────────────────────────\r
function handleModeChange(mode: DesignerMode) {\r
  message.success(\`已切换至\${{ design: '设计', readonly: '只读', preview: '预览' }[mode]}模式\`)\r
  currentMode.value = mode\r
}\r
\r
// ─── 从 ModeSelection 组件触发的模式切换 ─────────────────────────────────────\r
function handleModeChangeFromSelector(mode: DesignerMode) {\r
  // 🎯 调用 designer.setMode() 更新 designer 内部状态\r
  if (designer.value) {\r
    console.log('[FlowDesignerTest] 调用 designer.setMode()', mode)\r
    designer.value.setMode(mode)\r
  } else {\r
    console.warn('[FlowDesignerTest] designer 实例不存在，无法切换模式')\r
  }\r
\r
  // 更新本地状态（保持同步）\r
  currentMode.value = mode\r
\r
  //message.success(\`已切换至\${{ design: '设计', readonly: '只读', preview: '预览' }[mode]}模式\`)\r
}\r
\r
// ─── 节点添加前拦截器 ──────────────────────────────────────────────────────────\r
/**\r
 * 节点添加前拦截示例：\r
 * 1. 验证节点类型是否允许添加\r
 * 2. 检查节点数量限制\r
 * 3. 可修改节点属性（如位置、样式）\r
 * 4. 调用 preventDefault() 阻止添加\r
 */\r
function handleBeforeNodeAdd(event: BeforeNodeAddEvent): boolean {\r
  const { node, source } = event\r
  const nodeData = node.getData()\r
\r
  console.log('[Before Node Add]', {\r
    nodeId: node.id,\r
    nodeType: nodeData?.type,\r
    source,\r
    position: node.getPosition(),\r
  })\r
  // 示例1：限制 start-node 类型节点只能添加一个\r
  if (node.shape === 'start-node') {\r
    const designer = layoutRef.value?.designer\r
    if (designer) {\r
      const graph = designer.getGraph()\r
      const existingStartNodes = graph.getNodes().filter(n => {\r
        return n?.shape === 'start-node'\r
      })\r
\r
      if (existingStartNodes.length > 0) {\r
        message.warning('开始节点只能添加一个！')\r
        return false // 返回 false 阻止添加\r
      }\r
    }\r
  }\r
\r
  // 示例2：自动吸附到网格（20px）\r
  const pos = node.getPosition()\r
  const snappedX = Math.round(pos.x / 20) * 20\r
  const snappedY = Math.round(pos.y / 20) * 20\r
  if (pos.x !== snappedX || pos.y !== snappedY) {\r
    // ✅ 使用 silent: true 避免触发 change:position 事件\r
    // beforeNodeAdd 是预处理阶段,修改应该是静默的,不应产生独立的历史记录\r
    node.setPosition({ x: snappedX, y: snappedY }, { silent: true })\r
    console.log('[Before Node Add] 位置已吸附到网格:', { x: snappedX, y: snappedY })\r
  }\r
\r
  // 示例3：根据来源添加自定义标记\r
  if (source === 'paste') {\r
    const currentData = node.getData() || {}\r
    // ✅ 使用 silent: true 避免触发 change:data 事件\r
    node.setData({\r
      ...currentData,\r
      _pastedAt: Date.now(),\r
    }, { silent: true })\r
    console.log('[Before Node Add] 已标记粘贴时间')\r
  }\r
\r
  return true // 返回 true 允许添加\r
}\r
\r
// ─── 节点添加后回调 ────────────────────────────────────────────────────────────\r
/**\r
 * 节点添加后通知示例：\r
 * 1. 记录操作日志\r
 * 2. 更新统计数据\r
 * 3. 同步到外部系统\r
 */\r
function handleAfterNodeAdd(event: AfterNodeAddEvent) {\r
  const { nodeId, source, success, timestamp } = event\r
\r
  if (success) {\r
    console.log('[After Node Add] 节点添加成功', {\r
      nodeId,\r
      source,\r
      timestamp: new Date(timestamp).toLocaleTimeString(),\r
    })\r
\r
    // ── common-vue-node：从 data.nodeType 读取类型并写入 node prop ──────────\r
    // NodePalette 拖入时在 data 里携带了 nodeType 字段，这里转存到 X6 prop\r
    const graph = layoutRef.value?.designer?.getGraph()\r
    const node = graph?.getCellById(nodeId)\r
    if (node?.isNode() && node.shape === 'common-vue-node') {\r
      const nodeType = node.getData()?.nodeType\r
      if (nodeType) {\r
        node.setProp('node-type', nodeType)\r
      }\r
    }\r
\r
    // 示例：显示通知（仅非撤销/重做操作）\r
    if (source !== 'undo' && source !== 'redo') {\r
      message.success(\`节点已添加（来源: \${source}）\`, 2)\r
    }\r
  } else {\r
    console.error('[After Node Add] 节点添加失败', event.error)\r
  }\r
}\r
\r
/**\r
 * 节点删除前拦截示例：\r
 * 1. 禁止删除特定类型的节点（如结束节点）\r
 * 2. 删除前确认\r
 * 3. 根据来源显示不同提示\r
 */\r
function handleBeforeNodeRemove(event: BeforeNodeRemoveEvent): boolean {\r
  const { node, source } = event\r
\r
  console.log('[Before Node Remove]', {\r
    nodeId: node.id,\r
    nodeShape: node.shape,\r
    source,\r
  })\r
\r
  // 示例1：禁止删除结束节点\r
  if (node.shape === 'end-node') {\r
    message.warning('结束节点不能删除！')\r
    return false // 返回 false 阻止删除\r
  }\r
\r
  // 示例2：开始节点删除前确认\r
  if (node.shape === 'start-node' && source === 'keyboard') {\r
    // 注意：这里只是演示，实际生产环境中不建议在拦截器中使用同步 confirm\r
    // 应该使用 Modal.confirm 等异步确认方式\r
    message.info(\`正在删除开始节点（来源: \${source}）\`)\r
  }\r
\r
  // 示例3：批量删除时的提示\r
  if (source === 'clear') {\r
    console.log('[Before Node Remove] 画布清空操作，节点将被删除:', node.id)\r
  }\r
\r
  return true // 返回 true 允许删除\r
}\r
\r
// ─── 连线创建前拦截器 ──────────────────────────────────────────────────────────\r
/**\r
 * 连线创建前拦截示例（在 validateConnection 阶段触发）：\r
 * sourceCell/targetCell 均已知，可做完整的双端规则校验\r
 * 调用 preventDefault() 阻止连线创建\r
 */\r
function handleBeforeEdgeAdd(event: BeforeEdgeAddEvent): boolean {\r
  const { sourceCell, targetCell, sourceMagnet, targetMagnet } = event\r
\r
  console.log('[Before Edge Add] validateConnection 阶段拦截', {\r
    sourceCellId: sourceCell.id,\r
    sourceCellShape: (sourceCell as any).shape,\r
    targetCellId: targetCell.id,\r
    targetCellShape: (targetCell as any).shape,\r
  });\r
\r
  // 基础规则验证\r
  // const srcGroup = sourceMagnet?.getAttribute('port-group') ?? ''\r
  // const tgtGroup = targetMagnet?.getAttribute('port-group') ?? ''\r
  // const validSrc = ['out', 'right', 'bottom', 'left'].includes(srcGroup)\r
  // if (!validSrc || !sourceMagnet) return false;\r
  // if (tgtGroup !== 'in' || !targetMagnet) return false;\r
  // if ((targetCell as any)?.shape === 'start-node') return false;\r
  // if ((sourceCell as any)?.shape === 'end-node') return false;\r
  // if (sourceCell === targetCell) return false;\r
\r
  const designer = layoutRef.value?.designer\r
  if (!designer) return true\r
\r
  const graph = designer.getGraph()\r
\r
  // 示例1：禁止特定节点类型互连（条件节点 → 开始节点）\r
  if ((sourceCell as any).shape === 'condition-node' && (targetCell as any).shape === 'start-node') {\r
    message.warning('条件节点不能连接到开始节点！')\r
    return false // 返回 false 阻止连接\r
  }\r
\r
  // 示例2：限制单个节点最多3条出度\r
  const sourceEdges = graph.getConnectedEdges(sourceCell, { outgoing: true })\r
  if (sourceEdges.length >= 3) {\r
    message.warning('单个节点最多只能连接3条出线！')\r
    return false\r
  }\r
\r
  // 示例3：限制单个节点最多2条入度\r
  const targetEdges = graph.getConnectedEdges(targetCell, { incoming: true })\r
  if (targetEdges.length >= 2) {\r
    message.warning('单个节点最多只能接收2条入线！')\r
    return false\r
  }\r
\r
  // 示例4：检测双向连线（A→B 后禁止 B→A）\r
  const hasReverse = graph.getEdges().some(e => {\r
    return e.getSourceCell()?.id === targetCell.id && e.getTargetCell()?.id === sourceCell.id\r
  })\r
  if (hasReverse) {\r
    message.warning('不允许创建双向连线！')\r
    return false\r
  }\r
\r
  console.log('[Before Edge Add] 验证通过，允许创建连线')\r
  return true // 返回 true 允许连接\r
}\r
\r
// ─── 连线添加后回调 ────────────────────────────────────────────────────────────\r
/**\r
 * 连线添加后通知示例：\r
 * 1. 记录连线日志\r
 * 2. 更新流程统计\r
 * 3. 同步到外部系统\r
 */\r
function handleAfterEdgeAdd(event: AfterEdgeAddEvent) {\r
  const { edgeId, sourceNodeId, targetNodeId, sourceAction, success, timestamp } = event\r
\r
  if (success) {\r
    console.log('[After Edge Add] 连线创建成功', {\r
      edgeId,\r
      sourceNodeId,\r
      targetNodeId,\r
      sourceAction,\r
      timestamp: new Date(timestamp).toLocaleTimeString(),\r
    })\r
\r
    // 示例：显示通知（仅非撤销/重做操作）\r
    if (sourceAction !== 'undo' && sourceAction !== 'redo') {\r
      message.success(\`连线已创建（来源: \${sourceAction}）\`, 2)\r
    }\r
  } else {\r
    console.error('[After Edge Add] 连线创建失败', event.error)\r
    message.error('连线创建失败！')\r
  }\r
}\r
\r
// ─── 连线删除前拦截器 ──────────────────────────────────────────────────────────\r
/**\r
 * 连线删除前拦截示例：\r
 * 1. 禁止删除特定连线（如关键路径上的连线）\r
 * 2. 根据来源显示不同提示\r
 * 3. 调用 preventDefault() 阻止删除\r
 */\r
function handleBeforeEdgeRemove(event: BeforeEdgeRemoveEvent): boolean {\r
  const { edge, edgeId, sourceNodeId, targetNodeId, source } = event\r
\r
  console.log('[Before Edge Remove]', {\r
    edgeId,\r
    sourceNodeId,\r
    targetNodeId,\r
    source,\r
  })\r
\r
  // 示例1：禁止删除带有 locked 标记的连线\r
  const edgeData = edge.getData()\r
  if (edgeData?.locked) {\r
    message.warning('该连线已被锁定，不允许删除！')\r
    return false // 返回 false 阻止删除\r
  }\r
\r
  // 示例2：清空画布时记录日志，不阻止\r
  if (source === 'clear') {\r
    console.log('[Before Edge Remove] 画布清空操作，连线将被删除:', edgeId)\r
  }\r
\r
  return true // 返回 true 允许删除\r
}\r
\r
// ─── 连线删除后回调 ────────────────────────────────────────────────────────────\r
/**\r
 * 连线删除后通知示例：\r
 * 1. 记录删除日志\r
 * 2. 同步到外部系统\r
 */\r
function handleAfterEdgeRemove(event: AfterEdgeRemoveEvent) {\r
  const { edgeId, sourceNodeId, targetNodeId, source } = event\r
\r
  console.log('[After Edge Remove] 连线已删除', {\r
    edgeId,\r
    sourceNodeId,\r
    targetNodeId,\r
    source,\r
  })\r
\r
  // 示例：显示通知（仅非撤销/重做操作）\r
  if (source !== 'undo' && source !== 'redo') {\r
    message.info(\`连线已删除（来源: \${source}）\`, 2)\r
  }\r
}\r
\r
// ─── 数据加载完成事件 ─────────────────────────────────────────────────────────\r
/**\r
 * afterDataLoaded：数据加载完成后，居中显示顶层起始节点（入度为 0 的节点）\r
 */\r
function handleAfterDataLoaded(data: FlowData) {\r
  console.log('[After Data Loaded] 画布数据加载完成，cells 数:', data.cells?.length ?? 0)\r
  const designer = layoutRef.value?.designer\r
  if (!designer) return\r
  // 获取顶层起始节点（入度为 0）\r
  const rootNodes = designer.getRootNodes()\r
  if (rootNodes.length > 0) {\r
    //layoutRef.value?.centerNode(rootNodes[0].id)\r
    //console.log('[After Data Loaded] 已居中显示顶层节点:', rootNodes[0].id)\r
  } else {\r
    console.log('[After Data Loaded] 未找到顶层节点')\r
  }\r
}\r
\r
\r
/**\r
 * :before-node-select 钩子函数\r
 * 返回 false 可阻止节点选择\r
 */\r
function handleBeforeNodeSelect(event: BeforeNodeSelectEvent): boolean {\r
  return true\r
  if (true) {\r
    console.log(\`❌ 节点选择被阻止\`)\r
    return false // 返回 false 阻止选择\r
  }\r
  console.log(\`✅ 允许节点选择\`)\r
  return true // 返回 true 允许选择\r
}\r
\r
/**\r
 * :before-edge-select 钩子函数\r
 * 返回 false 可阻止连线选择\r
 */\r
function handleBeforeEdgeSelect(event: BeforeEdgeSelectEvent): boolean {\r
  return true\r
  if (true) {\r
    return false // 返回 false 阻止选择\r
  }\r
  return true // 返回 true 允许选择\r
}\r
\r
\r
/**\r
 * :before-edge-hover 钩子函数\r
 * 返回 false 可阻止连线悬停效果\r
 */\r
function handleBeforeEdgeHover(event: BeforeEdgeHoverEvent): boolean {\r
  return true\r
  if (false) {\r
    return false // 返回 false 阻止悬停效果\r
  }\r
  return true // 返回 true 允许悬停\r
}\r
\r
defineExpose({ layoutRef })\r
<\/script>\r
\r
<style scoped>\r
.flow-designer-test {\r
  width: 100%;\r
  height: 100%;\r
}\r
\r
/* ── 测试用自定义右键菜单样式 ────────────────────────────────────────────── */\r
.custom-ctx-menu {\r
  background: #fff;\r
  border: 1px solid #e8e8e8;\r
  border-radius: 6px;\r
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.12);\r
  padding: 4px 0;\r
  min-width: 180px;\r
  user-select: none;\r
}\r
\r
.custom-ctx-menu__item {\r
  padding: 7px 16px;\r
  font-size: 13px;\r
  color: #262626;\r
  cursor: pointer;\r
  transition: background 0.15s;\r
  display: flex;\r
  align-items: center;\r
  gap: 8px;\r
}\r
\r
.custom-ctx-menu__item:hover {\r
  background: #f5f5f5;\r
}\r
\r
.custom-ctx-menu__item--danger {\r
  color: #f5222d;\r
}\r
\r
.custom-ctx-menu__icon {\r
  font-size: 14px;\r
  flex-shrink: 0;\r
}\r
\r
.custom-ctx-menu__divider {\r
  height: 1px;\r
  background: #f0f0f0;\r
  margin: 4px 0;\r
}\r
\r
/* ── 测试用自定义搜索框样式 ──────────────────────────────────────────────── */\r
.custom-search-box {\r
  position: absolute;\r
  top: 3px;\r
  right: 6px;\r
  z-index: 1000;\r
  display: flex;\r
  align-items: center;\r
  gap: 6px;\r
  padding: 6px 10px;\r
  background: #fff;\r
  border-radius: 6px;\r
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);\r
  min-width: 280px;\r
}\r
\r
.custom-search-box__icon {\r
  color: #8c9bb5;\r
  font-size: 14px;\r
  flex-shrink: 0;\r
}\r
\r
.custom-search-box__input {\r
  flex: 1;\r
  border: 1px solid #d9d9d9;\r
  border-radius: 4px;\r
  padding: 2px 8px;\r
  font-size: 13px;\r
  outline: none;\r
  min-width: 140px;\r
}\r
\r
.custom-search-box__input:focus {\r
  border-color: #1890ff;\r
  box-shadow: 0 0 0 2px rgba(24, 144, 255, 0.2);\r
}\r
\r
.custom-search-box__count {\r
  font-size: 12px;\r
  color: #8c9bb5;\r
  white-space: nowrap;\r
  user-select: none;\r
  min-width: 40px;\r
  text-align: center;\r
}\r
\r
.custom-search-box__btn {\r
  border: 1px solid #d9d9d9;\r
  background: #fff;\r
  border-radius: 4px;\r
  padding: 2px 8px;\r
  cursor: pointer;\r
  font-size: 12px;\r
  line-height: 1.5;\r
  transition: all 0.15s;\r
}p\r
\r
.custom-search-box__btn:hover:not(:disabled) {\r
  border-color: #1890ff;\r
  color: #1890ff;\r
}\r
\r
.custom-search-box__btn:disabled {\r
  color: #bfbfbf;\r
  cursor: not-allowed;\r
}\r
.my-node-tooltip {\r
  background: #fff;\r
  border: 1px solid #e8e8e8;\r
  border-radius: 4px;\r
  padding: 8px;\r
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);\r
}\r
.my-edge-tooltip {\r
  background: #fff;\r
  border: 1px solid #e8e8e8;\r
  border-radius: 4px;\r
  padding: 8px;\r
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);\r
}\r
.abc {\r
  fill: red\r
}\r
\r
/* 【测试】自定义连线标签 */\r
.custom-edge-label {\r
  display: inline-flex;\r
  align-items: center;\r
  gap: 4px;\r
  padding: 2px 8px;\r
  background: #fff;\r
  border: 1px solid #cce3f9;\r
  border-radius: 3px;\r
  font-size: 12px;\r
  color: #999999;\r
  white-space: nowrap;\r
  box-shadow: 0 1px 4px rgba(22, 119, 255, 0.2);\r
  pointer-events: none;\r
  font-weight: 500;\r
  filter: drop-shadow(0 1px 2px rgba(0, 0, 0, 0.1));\r
}\r
.custom-edge-label-selected {\r
  color: #1677ff;\r
  border: 1px solid #1677ff;\r
}\r
\r
.custom-edge-label__icon {\r
  font-size: 11px;\r
  flex-shrink: 0;\r
}\r
\r
.custom-edge-label__text {\r
  max-width: 80px;\r
  overflow: hidden;\r
  text-overflow: ellipsis;\r
}\r
</style>\r
`,mn="data:image/svg+xml,%3csvg%20t='1763452238349'%20class='icon'%20viewBox='0%200%201024%201024'%20version='1.1'%20xmlns='http://www.w3.org/2000/svg'%20p-id='6179'%20width='20'%20height='20'%3e%3cpath%20d='M510.9%2060.7c-245.6%200-446.7%20199.8-446.7%20446.7C64.2%20753%20263.9%20954%20510.8%20954s446.6-199.7%20446.6-446.6c0.1-245.6-199.6-446.7-446.5-446.7zM692%20525.9l-272.1%20157c-10.7%206.2-24-1.5-24-13.9V354.9c0-12.3%2013.3-20%2024-13.9L692%20498.1c10.6%206.2%2010.6%2021.6%200%2027.8z'%20p-id='6180'%20fill='%2348c02a'%3e%3c/path%3e%3c/svg%3e",un="data:image/svg+xml,%3csvg%20t='1763452238349'%20class='icon'%20viewBox='0%200%201024%201024'%20version='1.1'%20xmlns='http://www.w3.org/2000/svg'%20p-id='6179'%20width='20'%20height='20'%3e%3cpath%20d='M510.9%2060.7c-245.6%200-446.7%20199.8-446.7%20446.7C64.2%20753%20263.9%20954%20510.8%20954s446.6-199.7%20446.6-446.6c0.1-245.6-199.6-446.7-446.5-446.7zM692%20525.9l-272.1%20157c-10.7%206.2-24-1.5-24-13.9V354.9c0-12.3%2013.3-20%2024-13.9L692%20498.1c10.6%206.2%2010.6%2021.6%200%2027.8z'%20p-id='6180'%20fill='%23ffffff'%3e%3c/path%3e%3c/svg%3e",hn="data:image/svg+xml,%3csvg%20t='1763519234071'%20class='icon'%20viewBox='0%200%201024%201024'%20version='1.1'%20xmlns='http://www.w3.org/2000/svg'%20p-id='10223'%20width='20'%20height='20'%3e%3cpath%20d='M422.399%20601.6V493.323c-79.111-34.622-134.4-113.655-134.4-205.323%200-123.711%20100.54-224%20224-224%20123.711%200%20224%20100.545%20224%20224%200%2091.814-55.379%20170.725-134.4%20205.313V601.6h201.472c61.925%200%20112.128%2049.716%20112.128%20112.003V825.6H108.801V713.598c0-61.855%2050.444-111.998%20112.126-111.998h201.472zM153.601%20870.4h716.793V960H153.6v-89.6z'%20fill='%231d78f4'%20p-id='10224'%3e%3c/path%3e%3c/svg%3e",bn="data:image/svg+xml,%3csvg%20t='1763519234071'%20class='icon'%20viewBox='0%200%201024%201024'%20version='1.1'%20xmlns='http://www.w3.org/2000/svg'%20p-id='10223'%20width='20'%20height='20'%3e%3cpath%20d='M422.399%20601.6V493.323c-79.111-34.622-134.4-113.655-134.4-205.323%200-123.711%20100.54-224%20224-224%20123.711%200%20224%20100.545%20224%20224%200%2091.814-55.379%20170.725-134.4%20205.313V601.6h201.472c61.925%200%20112.128%2049.716%20112.128%20112.003V825.6H108.801V713.598c0-61.855%2050.444-111.998%20112.126-111.998h201.472zM153.601%20870.4h716.793V960H153.6v-89.6z'%20fill='%23ffffff'%20p-id='10224'%3e%3c/path%3e%3c/svg%3e",Nn="data:image/svg+xml,%3csvg%20t='1763453071611'%20class='icon'%20viewBox='0%200%201024%201024'%20version='1.1'%20xmlns='http://www.w3.org/2000/svg'%20p-id='8941'%20width='20'%20height='20'%3e%3cpath%20d='M658.944%2075.776c26.9312%200%2048.64%2023.296%2048.64%2052.0192v207.872c0%2028.672-21.7088%2051.9168-48.64%2051.9168h-97.28v84.48h255.3856c59.1872%200%20107.6736%2050.2272%20109.4144%20113.4592v100.864h24.3712a47.104%2047.104%200%200%201%2034.4064%2015.2064c9.1136%209.728%2014.2336%2022.9888%2014.2336%2036.7616v155.904c0%2028.672-21.76%2051.968-48.64%2051.968h-145.92c-26.88%200-48.64-23.296-48.64-51.968V738.304c0-28.672%2021.76-51.968%2048.64-51.968h24.32v-97.4336a12.6976%2012.6976%200%200%200-10.752-12.9024l-1.4336-0.1024h-255.3344v110.4384h24.32a47.104%2047.104%200%200%201%2034.4064%2015.2064c9.1136%209.728%2014.2336%2022.9888%2014.2336%2036.7616v155.904c0%2028.672-21.76%2051.968-48.64%2051.968h-145.92c-26.88%200-48.64-23.296-48.64-51.968V738.304c0-28.672%2021.76-51.968%2048.64-51.968h24.32V576H209.0496a12.4928%2012.4928%200%200%200-12.032%2011.4688l-0.1024%201.536v97.4336h24.32a47.104%2047.104%200%200%201%2034.4064%2015.2064c9.1136%209.728%2014.2336%2022.9888%2014.2336%2036.7616v155.904c0%2028.672-21.76%2051.968-48.64%2051.968H75.264c-26.88%200-48.64-23.296-48.64-51.968V738.304c0-28.672%2021.76-51.968%2048.64-51.968h24.32v-97.4336c0-63.232%2047.0528-114.9952%20106.1888-116.8384l3.2256-0.1024h255.3856L464.384%20387.584l-97.28%200.0512c-26.8288%200-48.64-23.2448-48.64-51.968v-207.872c0-28.672%2021.8112-51.9168%2048.64-51.9168h291.84z'%20p-id='8942'%20fill='%23ffa100'%3e%3c/path%3e%3c/svg%3e",Zn="data:image/svg+xml,%3csvg%20t='1763453071611'%20class='icon'%20viewBox='0%200%201024%201024'%20version='1.1'%20xmlns='http://www.w3.org/2000/svg'%20p-id='8941'%20width='20'%20height='20'%3e%3cpath%20d='M658.944%2075.776c26.9312%200%2048.64%2023.296%2048.64%2052.0192v207.872c0%2028.672-21.7088%2051.9168-48.64%2051.9168h-97.28v84.48h255.3856c59.1872%200%20107.6736%2050.2272%20109.4144%20113.4592v100.864h24.3712a47.104%2047.104%200%200%201%2034.4064%2015.2064c9.1136%209.728%2014.2336%2022.9888%2014.2336%2036.7616v155.904c0%2028.672-21.76%2051.968-48.64%2051.968h-145.92c-26.88%200-48.64-23.296-48.64-51.968V738.304c0-28.672%2021.76-51.968%2048.64-51.968h24.32v-97.4336a12.6976%2012.6976%200%200%200-10.752-12.9024l-1.4336-0.1024h-255.3344v110.4384h24.32a47.104%2047.104%200%200%201%2034.4064%2015.2064c9.1136%209.728%2014.2336%2022.9888%2014.2336%2036.7616v155.904c0%2028.672-21.76%2051.968-48.64%2051.968h-145.92c-26.88%200-48.64-23.296-48.64-51.968V738.304c0-28.672%2021.76-51.968%2048.64-51.968h24.32V576H209.0496a12.4928%2012.4928%200%200%200-12.032%2011.4688l-0.1024%201.536v97.4336h24.32a47.104%2047.104%200%200%201%2034.4064%2015.2064c9.1136%209.728%2014.2336%2022.9888%2014.2336%2036.7616v155.904c0%2028.672-21.76%2051.968-48.64%2051.968H75.264c-26.88%200-48.64-23.296-48.64-51.968V738.304c0-28.672%2021.76-51.968%2048.64-51.968h24.32v-97.4336c0-63.232%2047.0528-114.9952%20106.1888-116.8384l3.2256-0.1024h255.3856L464.384%20387.584l-97.28%200.0512c-26.8288%200-48.64-23.2448-48.64-51.968v-207.872c0-28.672%2021.8112-51.9168%2048.64-51.9168h291.84z'%20p-id='8942'%20fill='%23ffffff'%3e%3c/path%3e%3c/svg%3e",_d={class:"demo-node-svg"},xd={class:"demo-node-svg__log"},yd={class:"demo-node-svg__log-content"},kd={class:"demo-node-svg__canvas"},wd={class:"custom-palette"},Sd={class:"custom-palette__section"},Nd=["onMousedown"],Cd={class:"custom-palette__item-icon"},Dd=["src"],$d={class:"custom-palette__item-info"},Ed=["onMousedown"],Fd={class:"custom-palette__item-icon"},Ld=["src"],Td=G({__name:"demo-node-svg",setup(T){const v=S([]),a=[{type:"svg-start-node",label:"开始节点",classNamePerfix:"x6",width:120,height:38,rectStroke:"#95d375",rectStrokeWidth:1,rectFill:"#edf8e7",icon:mn,iconHover:un,textFill:"#81cb5c"},{type:"svg-approval-node",label:"审批节点",classNamePerfix:"x6",width:120,height:38,rectStroke:"#83b3f7",rectStrokeWidth:1,rectFill:"#e6eeff",icon:hn,iconHover:bn,textFill:"#5d9df7"}],c={groups:{top:{position:"top",attrs:{circle:{r:4,magnet:!0,stroke:"#5F95FF",strokeWidth:1,fill:"#fff",style:{visibility:"hidden"}},label:{position:"top"},text:{text:"",fill:"#ff5800"}}},right:{position:"right",attrs:{circle:{r:4,magnet:!0,stroke:"#5F95FF",strokeWidth:1,fill:"#fff",style:{visibility:"hidden"}},label:{position:"right"},text:{text:"",fill:"#ff5800"}}},bottom:{position:"bottom",attrs:{circle:{r:4,magnet:!0,stroke:"#5F95FF",strokeWidth:1,fill:"#fff",style:{visibility:"hidden"}},label:{position:"bottom"},text:{text:"",fill:"#ff5800"}}},left:{position:"left",attrs:{circle:{r:4,magnet:!0,stroke:"#5F95FF",strokeWidth:1,fill:"#fff",style:{visibility:"hidden"}},label:{position:"left"},text:{text:"",fill:"#ff5800"}}}},items:[{group:"top",label:{position:"top"}},{group:"right",label:{position:"right"}},{group:"bottom",label:{position:"bottom"}},{group:"left",label:{position:"left"}}]};function l(t){const e=new Date().toLocaleTimeString();v.value.push(`[${e}] ${t}`)}function g(){v.value=[]}function x(t){l("🔧 beforeGraphInit: 开始注册 SVG 节点"),a.forEach(e=>{J.registerNode(e.type,{inherit:"rect",width:e.width,height:e.height,markup:[{tagName:"rect",selector:"body",className:e.classNamePerfix+"-"+e.type+"-body"},{tagName:"image",selector:"icon",className:e.classNamePerfix+"-"+e.type+"-image"},{tagName:"image",selector:"iconHover",className:e.classNamePerfix+"-"+e.type+"-imageHover"},{tagName:"text",selector:"label",className:e.classNamePerfix+"-"+e.type+"-label"}],attrs:{body:{stroke:e.rectStroke,strokeWidth:e.rectStrokeWidth,fill:e.rectFill,rx:10,ry:10},icon:{"xlink:href":e.icon,width:20,height:20,x:12,y:8},iconHover:{"xlink:href":e.iconHover,width:20,height:20,x:12,y:8,display:"none"},text:{fontSize:12,fill:e.textFill}},ports:{...c}},!0),l(`✅ 已注册节点: ${e.type} (${e.label})`)}),J.registerNode("svg-condition-node",{inherit:"polygon",width:132,height:72,markup:[{tagName:"polygon",selector:"body",className:"x6-svg-condition-node-body"},{tagName:"text",selector:"label",className:"x6-svg-condition-node-label"},{tagName:"image",selector:"icon",className:"x6-svg-condition-node-image"},{tagName:"image",selector:"iconHover",className:"x6-svg-condition-node-imageHover"}],attrs:{body:{strokeWidth:1,stroke:"#fdc059",fill:"#ffeed1",refPoints:"0,20 20,0 40,20 20,40"},text:{fontSize:12,fill:"#ffb02a",y:8},icon:{"xlink:href":Nn,width:20,height:20,x:56,y:8},iconHover:{"xlink:href":Zn,width:20,height:20,x:56,y:8,display:"none"}},ports:{...c,items:[{group:"top"},{group:"bottom"}]}},!0),l("🎉 所有 SVG 节点注册完成")}function s(t,e){l("✅ 画布初始化完成"),l("💡 提示: 悬停查看 hover 效果，点击切换 selected 状态"),setTimeout(()=>{e.addNode({shape:"svg-start-node",x:100,y:100,label:"开始节点"}),l("📦 已添加 3 个示例节点"),l("🎨 试试悬停和点击节点吧！")},100)}function o(t,e,i){l(`🎯 开始拖拽: ${e.label}`),i(t,{shape:e.type,label:e.label,width:e.width,height:e.height,data:{label:e.label,nodeInfo:{hint:e.hint,color:e.color}}})}return(t,e)=>(h(),b("div",_d,[n("div",xd,[n("div",{class:"demo-node-svg__log-header"},[e[0]||(e[0]=n("h4",null,"事件日志",-1)),n("button",{class:"demo-node-svg__clear-btn",onClick:g,title:"清除日志"}," 清除 ")]),n("div",yd,[(h(!0),b(O,null,H(v.value,(i,r)=>(h(),b("div",{key:r,class:"demo-node-svg__log-item"},D(i),1))),128))])]),n("div",kd,[f(F(V),{mode:"design","before-graph-init":x,onReady:s},{palette:E(({onStartDrag:i})=>[n("div",wd,[e[3]||(e[3]=n("div",{class:"custom-palette__header"},[n("h3",{class:"custom-palette__title"},"SVG 节点"),n("span",{class:"custom-palette__desc"},"三种状态切换")],-1)),n("div",Sd,[e[2]||(e[2]=n("div",{class:"custom-palette__section-title"},"带图标的节点",-1)),(h(),b(O,null,H(a,r=>n("div",{key:r.type,class:"custom-palette__item",onMousedown:p=>o(p,r,i),style:rn({background:r.rectFill,borderColor:r.rectStroke})},[n("div",Cd,[n("img",{src:r.icon},null,8,Dd)]),n("div",$d,[n("div",{class:"custom-palette__item-label",style:rn({color:r.textFill})},D(r.label),5)])],44,Nd)),64)),n("div",{key:"svg-condition-node",class:"custom-palette__item",onMousedown:r=>o(r,{type:"svg-condition-node",label:"条件分支",width:132,height:72},i),style:{background:"#ffeed1",borderColor:"#fdc059"}},[n("div",Fd,[n("img",{src:F(Nn)},null,8,Ld)]),e[1]||(e[1]=n("div",{class:"custom-palette__item-info"},[n("div",{class:"custom-palette__item-label",style:{color:"#ffb02a"}},"条件分支")],-1))],40,Ed)]),e[4]||(e[4]=n("div",{class:"custom-palette__tips"},[n("div",{class:"tips-title"},"💡 交互说明"),n("ul",{class:"tips-list"},[n("li",null,[n("strong",null,"Default:"),P(" 白底 + 彩色图标")]),n("li",null,[n("strong",null,"Hover:"),P(" 淡色背景")]),n("li",null,[n("strong",null,"Selected:"),P(" 彩底 + 白色图标")])])],-1))])]),_:1})])]))}}),Rd=U(Td,[["__scopeId","data-v-aac2b010"]]),zd=`<template>\r
  <div class="demo-node-svg">\r
    <!-- 事件日志面板 -->\r
    <div class="demo-node-svg__log">\r
      <div class="demo-node-svg__log-header">\r
        <h4>事件日志</h4>\r
        <button class="demo-node-svg__clear-btn" @click="clearLogs" title="清除日志">\r
          清除\r
        </button>\r
      </div>\r
      <div class="demo-node-svg__log-content">\r
        <div v-for="(log, index) in logs" :key="index" class="demo-node-svg__log-item">\r
          {{ log }}\r
        </div>\r
      </div>\r
    </div>\r
\r
    <!-- 画布容器 -->\r
    <div class="demo-node-svg__canvas">\r
      <FlowDesignerLayout\r
        mode="design"\r
        :before-graph-init="handleBeforeGraphInit"\r
        @ready="handleReady"\r
      >\r
        <!-- 自定义节点面板插槽 -->\r
        <template #palette="{ onStartDrag }">\r
          <div class="custom-palette">\r
            <div class="custom-palette__header">\r
              <h3 class="custom-palette__title">SVG 节点</h3>\r
              <span class="custom-palette__desc">三种状态切换</span>\r
            </div>\r
\r
            <div class="custom-palette__section">\r
              <div class="custom-palette__section-title">带图标的节点</div>\r
              <div\r
                v-for="nodeType in nodeTypesConfig"\r
                :key="nodeType.type"\r
                class="custom-palette__item"\r
                @mousedown="(e) => handleStartDrag(e, nodeType, onStartDrag)"\r
                :style="{ background: nodeType.rectFill, borderColor: nodeType.rectStroke}"\r
              >\r
                <div class="custom-palette__item-icon" >\r
                  <img :src="nodeType.icon" />\r
                </div>\r
                <div class="custom-palette__item-info">\r
                  <div class="custom-palette__item-label" :style="{ color: nodeType.textFill}">{{ nodeType.label }}</div>\r
                </div>\r
              </div>\r
\r
              <div\r
                  key="svg-condition-node"\r
                  class="custom-palette__item"\r
                  @mousedown="(e) => handleStartDrag(e, {\r
                    type:'svg-condition-node',\r
                    label:'条件分支',\r
                    width: 132,\r
                    height: 72,\r
                    }, onStartDrag)"\r
                  :style="{ background: '#ffeed1', borderColor: '#fdc059'}"\r
              >\r
                <div class="custom-palette__item-icon" >\r
                  <img :src="conditionSvg" />\r
                </div>\r
                <div class="custom-palette__item-info">\r
                  <div class="custom-palette__item-label" :style="{ color: '#ffb02a'}">条件分支</div>\r
                </div>\r
              </div>\r
\r
            </div>\r
\r
            <div class="custom-palette__tips">\r
              <div class="tips-title">💡 交互说明</div>\r
              <ul class="tips-list">\r
                <li><strong>Default:</strong> 白底 + 彩色图标</li>\r
                <li><strong>Hover:</strong> 淡色背景</li>\r
                <li><strong>Selected:</strong> 彩底 + 白色图标</li>\r
              </ul>\r
            </div>\r
          </div>\r
        </template>\r
      </FlowDesignerLayout>\r
    </div>\r
  </div>\r
</template>\r
\r
<script setup lang="ts">\r
import { ref } from 'vue'\r
import { FlowDesignerLayout }  from '@quick-code/x6-flow-designer'\r
import type { FlowDesigner } from '@quick-code/x6-flow-designer'\r
import { Graph, Node } from '@antv/x6'\r
\r
\r
import startSvg from "./icons/start.svg";\r
import startHover from "./icons/start-hover.svg";\r
\r
import approvalSvg from "./icons/approval.svg";\r
import approvalHoverSvg from "./icons/approval-hover.svg";\r
\r
import conditionSvg from "./icons/condition.svg";\r
import conditionHoverSvg from "./icons/condition-hover.svg";\r
\r
const logs = ref<string[]>([])\r
\r
// 节点类型配置（包含颜色和 iconPath）\r
interface NodeTypeConfig {\r
  type: string\r
  label: string\r
  hint: string\r
  color: string\r
  hoverColor: string\r
  iconPath: string\r
  width: number\r
  height: number\r
}\r
\r
const nodeTypesConfig: any[] = [\r
  {\r
    type: 'svg-start-node',\r
    label: '开始节点',\r
    classNamePerfix: 'x6',\r
    width: 120,\r
    height: 38,\r
    rectStroke: '#95d375',\r
    rectStrokeWidth: 1,\r
    rectFill: '#edf8e7',\r
    icon: startSvg,\r
    iconHover: startHover,\r
    textFill: '#81cb5c'\r
  },\r
  {\r
    type: 'svg-approval-node',\r
    label: '审批节点',\r
    classNamePerfix: 'x6',\r
    width: 120,\r
    height: 38,\r
    rectStroke: '#83b3f7',\r
    rectStrokeWidth: 1,\r
    rectFill: '#e6eeff',\r
    icon: approvalSvg,\r
    iconHover: approvalHoverSvg,\r
    textFill: '#5d9df7'\r
  },\r
]\r
\r
const Ports = {\r
  groups: {\r
    top: {\r
      position: 'top',\r
      attrs: {\r
        circle: {\r
          r: 4,\r
          magnet: true,\r
          stroke: '#5F95FF',\r
          strokeWidth: 1,\r
          fill: '#fff',\r
          style: {\r
            visibility: 'hidden',\r
          },\r
        },\r
        label: {\r
          position: 'top',\r
        },\r
        text: {\r
          text: '',\r
          fill: '#ff5800',\r
        },\r
      },\r
    },\r
    right: {\r
      position: 'right',\r
      attrs: {\r
        circle: {\r
          r: 4,\r
          magnet: true,\r
          stroke: '#5F95FF',\r
          strokeWidth: 1,\r
          fill: '#fff',\r
          style: {\r
            visibility: 'hidden',\r
          },\r
        },\r
        label: {\r
          position: 'right',\r
        },\r
        text: {\r
          text: '',\r
          fill: '#ff5800',\r
        },\r
      },\r
    },\r
    bottom: {\r
      position: 'bottom',\r
      attrs: {\r
        circle: {\r
          r: 4,\r
          magnet: true,\r
          stroke: '#5F95FF',\r
          strokeWidth: 1,\r
          fill: '#fff',\r
          style: {\r
            visibility: 'hidden',\r
          },\r
        },\r
        label: {\r
          position: 'bottom',\r
        },\r
        text: {\r
          text: '',\r
          fill: '#ff5800',\r
        },\r
      },\r
    },\r
    left: {\r
      position: 'left',\r
      attrs: {\r
        circle: {\r
          r: 4,\r
          magnet: true,\r
          stroke: '#5F95FF',\r
          strokeWidth: 1,\r
          fill: '#fff',\r
          style: {\r
            visibility: 'hidden',\r
          },\r
        },\r
        label: {\r
          position: 'left',\r
        },\r
        text: {\r
          text: '',\r
          fill: '#ff5800',\r
        },\r
      },\r
    },\r
  },\r
  items: [\r
    {\r
      group: 'top',\r
      label: {\r
        position : 'top'\r
      }\r
    },\r
    {\r
      group: 'right',\r
      label: {\r
        position : 'right'\r
      }\r
    },\r
    {\r
      group: 'bottom',\r
      label: {\r
        position : 'bottom'\r
      }\r
    },\r
    {\r
      group: 'left',\r
      label: {\r
        position : 'left'\r
      }\r
    },\r
  ],\r
}\r
\r
\r
// 手动跟踪节点的选中状态（因为 X6 的 selection 可能有默认行为）\r
const selectedNodesMap = new Map<string, boolean>()\r
\r
function addLog(message: string) {\r
  const timestamp = new Date().toLocaleTimeString()\r
  logs.value.push(\`[\${timestamp}] \${message}\`)\r
}\r
\r
function clearLogs() {\r
  logs.value = []\r
}\r
\r
\r
\r
/**\r
 * Graph 初始化前钩子：注册带 SVG icon 的自定义节点\r
 */\r
function handleBeforeGraphInit(options: FlowDesignerOptions) {\r
  addLog('🔧 beforeGraphInit: 开始注册 SVG 节点')\r
\r
  // 遍历配置，注册所有节点\r
  nodeTypesConfig.forEach((config) => {\r
    Graph.registerNode(\r
        config.type,\r
        {\r
          inherit: 'rect',\r
          width: config.width,\r
          height: config.height,\r
          markup: [\r
            {\r
              tagName: 'rect', // 标签名称\r
              selector: 'body', // 选择器\r
              className: config.classNamePerfix + '-' + config.type + '-' + 'body'\r
            },\r
            {\r
              tagName: 'image',\r
              selector: 'icon',\r
              className: config.classNamePerfix + '-' + config.type + '-' + 'image'\r
            },\r
            {\r
              tagName: 'image',\r
              selector: 'iconHover',\r
              className: config.classNamePerfix + '-' + config.type + '-' + 'imageHover'\r
            },\r
            {\r
              tagName: 'text',\r
              selector: 'label',\r
              className: config.classNamePerfix + '-' + config.type + '-' + 'label'\r
            },\r
          ],\r
          attrs: {\r
            body: {\r
              stroke: config.rectStroke,\r
              strokeWidth: config.rectStrokeWidth,\r
              fill: config.rectFill,\r
              rx: 10,\r
              ry: 10,\r
            },\r
            icon: {\r
              'xlink:href': config.icon,\r
              width: 20,\r
              height: 20,\r
              x: 12,\r
              y: 8,\r
            },\r
            iconHover: {\r
              'xlink:href': config.iconHover,\r
              width: 20,\r
              height: 20,\r
              x: 12,\r
              y: 8,\r
              display: 'none'\r
            },\r
            text: {\r
              fontSize: 12,\r
              fill: config.textFill,\r
            },\r
          },\r
          ports: { ...Ports },\r
        },\r
        true,\r
    );\r
\r
    addLog(\`✅ 已注册节点: \${config.type} (\${config.label})\`)\r
  })  // ✅ 修复：forEach 的回调函数结束\r
\r
  Graph.registerNode(\r
      //'custom-polygon',\r
      'svg-condition-node',\r
      {\r
        inherit: 'polygon',\r
        width: 132,\r
        height: 72,\r
        markup: [\r
          {\r
            tagName: 'polygon', // 标签名称\r
            selector: 'body', // 选择器\r
            className: 'x6-svg-condition-node-body'\r
          },\r
          {\r
            tagName: 'text',\r
            selector: 'label',\r
            className: 'x6-svg-condition-node-label'\r
          },\r
          {\r
            tagName: 'image',\r
            selector: 'icon',\r
            className: 'x6-svg-condition-node-image'\r
          },\r
          {\r
            tagName: 'image',\r
            selector: 'iconHover',\r
            className: 'x6-svg-condition-node-imageHover'\r
          },\r
        ],\r
        attrs: {\r
          body: {\r
            strokeWidth: 1,\r
            stroke: '#fdc059',\r
            fill: '#ffeed1',\r
            refPoints: '0,20 20,0 40,20 20,40',\r
          },\r
          text: {\r
            fontSize: 12,\r
            fill: '#ffb02a',\r
            y:8\r
          },\r
          icon: {\r
            'xlink:href': conditionSvg,\r
            width: 20,\r
            height: 20,\r
            x: 56,\r
            y: 8,\r
          },\r
          iconHover: {\r
            'xlink:href': conditionHoverSvg,\r
            width: 20,\r
            height: 20,\r
            x: 56,\r
            y: 8,\r
            display: 'none'\r
          },\r
        },\r
        ports: {\r
          ...Ports,\r
          items: [\r
            {\r
              group: 'top',\r
            },\r
            {\r
              group: 'bottom',\r
            },\r
          ],\r
        },\r
      },\r
      true,\r
  );\r
\r
  addLog('🎉 所有 SVG 节点注册完成')\r
}\r
\r
function handleReady(designer: FlowDesigner, graph: Graph) {\r
  addLog('✅ 画布初始化完成')\r
  addLog('💡 提示: 悬停查看 hover 效果，点击切换 selected 状态')\r
\r
\r
  // ─── 添加示例节点 ───────────────────────────────────────────────────\r
  setTimeout(() => {\r
    graph.addNode({\r
      shape: 'svg-start-node',\r
      x: 100,\r
      y: 100,\r
      label: '开始节点',\r
    })\r
\r
    addLog('📦 已添加 3 个示例节点')\r
    addLog('🎨 试试悬停和点击节点吧！')\r
  }, 100)\r
}\r
\r
function handleStartDrag(e: MouseEvent, nodeType: NodeTypeConfig, onStartDrag: any) {\r
  addLog(\`🎯 开始拖拽: \${nodeType.label}\`)\r
\r
  onStartDrag(e, {\r
    shape: nodeType.type,\r
    label: nodeType.label,\r
    width: nodeType.width,\r
    height: nodeType.height,\r
    data: {\r
      label: nodeType.label,\r
      nodeInfo: {\r
        hint: nodeType.hint,\r
        color: nodeType.color,\r
      }\r
    }\r
  })\r
}\r
<\/script>\r
\r
<style scoped>\r
.demo-node-svg {\r
  display: flex;\r
  height: 100%;\r
  min-height: 600px;\r
  gap: 16px;\r
}\r
\r
.demo-node-svg__log {\r
  width: 280px;\r
  border: 1px solid #e8e8e8;\r
  border-radius: 8px;\r
  padding: 16px;\r
  background: #fafafa;\r
  overflow: hidden;\r
  display: flex;\r
  flex-direction: column;\r
}\r
\r
.demo-node-svg__log-header {\r
  display: flex;\r
  justify-content: space-between;\r
  align-items: center;\r
  margin-bottom: 12px;\r
}\r
\r
.demo-node-svg__log h4 {\r
  margin: 0;\r
  font-size: 14px;\r
  color: #1a1a2e;\r
  font-weight: 600;\r
}\r
\r
.demo-node-svg__clear-btn {\r
  padding: 2px 8px;\r
  font-size: 12px;\r
  color: #666;\r
  background: #fff;\r
  border: 1px solid #d9d9d9;\r
  border-radius: 4px;\r
  cursor: pointer;\r
  transition: all 0.2s;\r
  user-select: none;\r
}\r
\r
.demo-node-svg__clear-btn:hover {\r
  color: #1890ff;\r
  border-color: #1890ff;\r
}\r
\r
.demo-node-svg__log-content {\r
  flex: 1;\r
  overflow-y: auto;\r
  font-size: 12px;\r
  line-height: 1.8;\r
}\r
\r
.demo-node-svg__log-item {\r
  padding: 4px 0;\r
  color: #555;\r
  font-family: 'Monaco', 'Menlo', 'Consolas', monospace;\r
  border-bottom: 1px solid #f0f0f0;\r
}\r
\r
.demo-node-svg__log-item:last-child {\r
  border-bottom: none;\r
}\r
\r
.demo-node-svg__canvas {\r
  flex: 1;\r
  border: 1px solid #e8e8e8;\r
  border-radius: 8px;\r
  overflow: hidden;\r
  background: #fff;\r
}\r
\r
/* ==================== 自定义节点面板样式 ==================== */\r
.custom-palette {\r
  display: flex;\r
  flex-direction: column;\r
  height: 100%;\r
  background: linear-gradient(to bottom, #f9fafb, #ffffff);\r
  border-right: 1px solid #e8e8e8;\r
  width: 200px;\r
}\r
\r
.custom-palette__header {\r
  padding: 16px;\r
  border-bottom: 2px solid #e8e8e8;\r
  background: #fff;\r
}\r
\r
.custom-palette__title {\r
  margin: 0 0 4px 0;\r
  font-size: 16px;\r
  font-weight: 600;\r
  color: #1a1a2e;\r
}\r
\r
.custom-palette__desc {\r
  font-size: 12px;\r
  color: #999;\r
}\r
\r
.custom-palette__section {\r
  padding: 12px;\r
}\r
\r
.custom-palette__section-title {\r
  font-size: 11px;\r
  font-weight: 600;\r
  color: #999;\r
  text-transform: uppercase;\r
  letter-spacing: 0.06em;\r
  margin-bottom: 8px;\r
  padding: 0 4px;\r
}\r
\r
.custom-palette__item {\r
  display: flex;\r
  align-items: center;\r
  gap: 12px;\r
  padding: 10px;\r
  margin-bottom: 8px;\r
  background: #fff;\r
  border: 1px solid #e8e8e8;\r
  border-radius: 12px;\r
  cursor: move;\r
  transition: all 0.2s;\r
  user-select: none;\r
  width: 160px;\r
  height: 50px;\r
}\r
\r
.custom-palette__item:hover {\r
  border-color: #1677ff;\r
  box-shadow: 0 2px 8px rgba(22, 119, 255, 0.15);\r
  transform: translateY(-1px);\r
}\r
\r
.custom-palette__item:active {\r
  transform: translateY(0);\r
  box-shadow: 0 1px 4px rgba(22, 119, 255, 0.2);\r
}\r
\r
.custom-palette__item-icon {\r
  width: 36px;\r
  height: 36px;\r
  display: flex;\r
  align-items: center;\r
  justify-content: center;\r
  border-radius: 6px;\r
  flex-shrink: 0;\r
}\r
\r
.custom-palette__item-info {\r
  flex: 1;\r
  min-width: 0;\r
}\r
\r
.custom-palette__item-label {\r
  font-size: 13px;\r
  font-weight: 500;\r
  color: #333;\r
  margin-bottom: 2px;\r
}\r
\r
.custom-palette__item-hint {\r
  font-size: 11px;\r
  color: #999;\r
  white-space: nowrap;\r
  overflow: hidden;\r
  text-overflow: ellipsis;\r
}\r
\r
/* ==================== 交互说明 ==================== */\r
.custom-palette__tips {\r
  margin-top: auto;\r
  padding: 12px;\r
  background: #fff9e6;\r
  border-top: 1px solid #ffe58f;\r
}\r
\r
.tips-title {\r
  font-size: 12px;\r
  font-weight: 600;\r
  color: #d48806;\r
  margin-bottom: 8px;\r
}\r
\r
.tips-list {\r
  margin: 0;\r
  padding-left: 16px;\r
  font-size: 11px;\r
  line-height: 1.8;\r
  color: #8c8c8c;\r
}\r
\r
.tips-list li {\r
  margin-bottom: 4px;\r
}\r
\r
.tips-list strong {\r
  color: #595959;\r
}\r
\r
</style>\r
\r
\r
<!--如果需要简单控制节点样式，需要将此节点样式暴露到全局,适当增加前缀以防止污染-->\r
<style>\r
.x6-svg-start-node-body:hover{\r
  stroke-width: 2px;\r
  fill: #caf1c1;\r
}\r
.x6-node-selected .x6-svg-start-node-body{\r
  stroke: #48c02a;\r
  stroke-width: 2px;\r
  fill: #8fd16f\r
}\r
.x6-node-selected .x6-svg-start-node-image {\r
  display: none;\r
}\r
.x6-node-selected .x6-svg-start-node-imageHover {\r
  display: block;\r
}\r
.x6-node-selected .x6-svg-start-node-label {\r
  fill: #ffffff\r
}\r
\r
.x6-node-selected .x6-svg-approval-node-body{\r
  stroke: #003eca;\r
  stroke-width: 2px;\r
  fill: #1d78f4\r
}\r
.x6-node-selected .x6-svg-approval-node-image {\r
  display: none;\r
}\r
\r
.x6-node-selected .x6-svg-approval-node-imageHover {\r
  display: block;\r
}\r
.x6-node-selected .x6-svg-approval-node-label {\r
  fill: #ffffff\r
}\r
\r
.x6-node-selected .x6-svg-condition-node-body{\r
  stroke: #ffa100;\r
  stroke-width: 2px;\r
  fill: #fdc059\r
}\r
.x6-node-selected .x6-svg-condition-node-image {\r
  display: none;\r
}\r
\r
.x6-node-selected .x6-svg-condition-node-imageHover {\r
  display: block;\r
}\r
.x6-node-selected .x6-svg-condition-node-label {\r
  fill: #ffffff\r
}\r
\r
</style>\r
`,Ad={class:"demo-node-svg"},Md={class:"demo-node-svg__log"},Wd={class:"demo-node-svg__log-content"},Id={class:"demo-node-svg__canvas"},Pd={class:"custom-palette"},Gd={class:"custom-palette__section"},Od=["onMousedown"],Hd={class:"custom-palette__item-icon"},Bd=["src"],Vd={class:"custom-palette__item-info"},Ud=G({__name:"demo-node-html",setup(T){const v=S([]),a=[{type:"html-start-node",label:"开始节点",classNamePerfix:"x6",width:120,height:38,rectStroke:"#95d375",rectStrokeWidth:1,rectFill:"#edf8e7",icon:mn,iconHover:un,textFill:"#81cb5c"},{type:"html-approval-node",label:"审批节点",classNamePerfix:"x6",width:120,height:38,rectStroke:"#83b3f7",rectStrokeWidth:1,rectFill:"#e6eeff",icon:hn,iconHover:bn,textFill:"#5d9df7"}];function c(o){const t=new Date().toLocaleTimeString();v.value.push(`[${t}] ${o}`)}function l(){v.value=[]}function g(o){c("🔧 beforeGraphInit: 开始注册 SVG 节点"),a.forEach(t=>{he.register({shape:t.type,width:t.width,height:t.height,effect:["data","_state"],html(e){const i=e.getProp("label");console.log("dddddddddddd::",i);const r=e.getProp("_state")||"default",p=document.createElement("div");p.className=`x6-${t.type}`;const m=r==="selected"?"node-card--selected":"",u=r==="selected"?`<img src="${t.iconHover}" />`:`<img src="${t.icon}" />`;return p.innerHTML=`
        <div class="node-card ${m}">
          <div class="body">
            ${u}
            <div class="info">
              <div class="name">${e.getProp("label")||"HTML 节点"}</div>
            </div>
          </div>
        </div>
      `,p},ports:{groups:{top:{position:"top",attrs:{circle:{r:6,magnet:!0,stroke:"#722ed1",strokeWidth:2,fill:"#fff",style:{visibility:"hidden"}}}},right:{position:"right",attrs:{circle:{r:6,magnet:!0,stroke:"#722ed1",strokeWidth:2,fill:"#fff",style:{visibility:"hidden"}}}},bottom:{position:"bottom",attrs:{circle:{r:6,magnet:!0,stroke:"#722ed1",strokeWidth:2,fill:"#fff",style:{visibility:"hidden"}}}},left:{position:"left",attrs:{circle:{r:6,magnet:!0,stroke:"#722ed1",strokeWidth:2,fill:"#fff",style:{visibility:"hidden"}}}}},items:[{group:"top",id:"port-top"},{group:"right",id:"port-right"},{group:"bottom",id:"port-bottom"},{group:"left",id:"port-left"}]}}),c(`✅ 已注册节点: ${t.type} (${t.label})`)}),c("🎉 所有 SVG 节点注册完成")}function x(o,t){c("✅ 画布初始化完成"),c("💡 提示: 悬停查看 hover 效果，点击切换 selected 状态"),setTimeout(()=>{const e=t.createNode({shape:"html-start-node",x:120,y:100,label:"开始节点"});t.addNode(e),o.setNodeState(e,"default"),console.log("nodenodenodenodenodenode::",e),c("📦 已添加 2 个示例节点"),c("🎨 试试点击节点切换状态吧！")},100)}function s(o,t,e){c(`🎯 开始拖拽: ${t.label}`),e(o,{shape:t.type,label:t.label,width:t.width,height:t.height,data:{label:t.label,nodeInfo:{hint:t.hint,color:t.color}}})}return(o,t)=>(h(),b("div",Ad,[n("div",Md,[n("div",{class:"demo-node-svg__log-header"},[t[0]||(t[0]=n("h4",null,"事件日志",-1)),n("button",{class:"demo-node-svg__clear-btn",onClick:l,title:"清除日志"}," 清除 ")]),n("div",Wd,[(h(!0),b(O,null,H(v.value,(e,i)=>(h(),b("div",{key:i,class:"demo-node-svg__log-item"},D(e),1))),128))])]),n("div",Id,[f(F(V),{mode:"design","before-graph-init":g,onReady:x},{palette:E(({onStartDrag:e})=>[n("div",Pd,[t[2]||(t[2]=n("div",{class:"custom-palette__header"},[n("h3",{class:"custom-palette__title"},"HTML 节点"),n("span",{class:"custom-palette__desc"})],-1)),n("div",Gd,[t[1]||(t[1]=n("div",{class:"custom-palette__section-title"},"带图标的节点",-1)),(h(),b(O,null,H(a,i=>n("div",{key:i.type,class:"custom-palette__item",onMousedown:r=>s(r,i,e),style:rn({background:i.rectFill,borderColor:i.rectStroke})},[n("div",Hd,[n("img",{src:i.icon},null,8,Bd)]),n("div",Vd,[n("div",{class:"custom-palette__item-label",style:rn({color:i.textFill})},D(i.label),5)])],44,Od)),64))]),t[3]||(t[3]=n("div",{class:"custom-palette__tips"},[n("div",{class:"tips-title"},"💡 交互说明"),n("ul",{class:"tips-list"},[n("li",null,[n("strong",null,"Default:"),P(" 白底 + 彩色图标")]),n("li",null,[n("strong",null,"Hover:"),P(" 淡色背景")]),n("li",null,[n("strong",null,"Selected:"),P(" 彩底 + 白色图标")])])],-1))])]),_:1})])]))}}),Zd=U(Ud,[["__scopeId","data-v-b7c7a4ad"]]),qd=`<template>\r
  <div class="demo-node-svg">\r
    <!-- 事件日志面板 -->\r
    <div class="demo-node-svg__log">\r
      <div class="demo-node-svg__log-header">\r
        <h4>事件日志</h4>\r
        <button class="demo-node-svg__clear-btn" @click="clearLogs" title="清除日志">\r
          清除\r
        </button>\r
      </div>\r
      <div class="demo-node-svg__log-content">\r
        <div v-for="(log, index) in logs" :key="index" class="demo-node-svg__log-item">\r
          {{ log }}\r
        </div>\r
      </div>\r
    </div>\r
\r
    <!-- 画布容器 -->\r
    <div class="demo-node-svg__canvas">\r
      <FlowDesignerLayout\r
        mode="design"\r
        :before-graph-init="handleBeforeGraphInit"\r
        @ready="handleReady"\r
      >\r
        <!-- 自定义节点面板插槽 -->\r
        <template #palette="{ onStartDrag }">\r
          <div class="custom-palette">\r
            <div class="custom-palette__header">\r
              <h3 class="custom-palette__title">HTML 节点</h3>\r
              <span class="custom-palette__desc"></span>\r
            </div>\r
\r
            <div class="custom-palette__section">\r
              <div class="custom-palette__section-title">带图标的节点</div>\r
              <div\r
                v-for="nodeType in nodeTypesConfig"\r
                :key="nodeType.type"\r
                class="custom-palette__item"\r
                @mousedown="(e) => handleStartDrag(e, nodeType, onStartDrag)"\r
                :style="{ background: nodeType.rectFill, borderColor: nodeType.rectStroke}"\r
              >\r
                <div class="custom-palette__item-icon" >\r
                  <img :src="nodeType.icon" />\r
                </div>\r
                <div class="custom-palette__item-info">\r
                  <div class="custom-palette__item-label" :style="{ color: nodeType.textFill}">{{ nodeType.label }}</div>\r
                </div>\r
              </div>\r
\r
            </div>\r
\r
            <div class="custom-palette__tips">\r
              <div class="tips-title">💡 交互说明</div>\r
              <ul class="tips-list">\r
                <li><strong>Default:</strong> 白底 + 彩色图标</li>\r
                <li><strong>Hover:</strong> 淡色背景</li>\r
                <li><strong>Selected:</strong> 彩底 + 白色图标</li>\r
              </ul>\r
            </div>\r
          </div>\r
        </template>\r
      </FlowDesignerLayout>\r
    </div>\r
  </div>\r
</template>\r
\r
<script setup lang="ts">\r
import { ref } from 'vue'\r
import { FlowDesignerLayout }  from '@quick-code/x6-flow-designer'\r
import type { FlowDesigner } from '@quick-code/x6-flow-designer'\r
import { Graph, Node, Shape } from '@antv/x6'\r
\r
\r
import startSvg from "./icons/start.svg";\r
import startHover from "./icons/start-hover.svg";\r
\r
import approvalSvg from "./icons/approval.svg";\r
import approvalHoverSvg from "./icons/approval-hover.svg";\r
\r
import conditionSvg from "./icons/condition.svg";\r
import conditionHoverSvg from "./icons/condition-hover.svg";\r
\r
const logs = ref<string[]>([])\r
\r
// 节点类型配置（包含颜色和 iconPath）\r
interface NodeTypeConfig {\r
  type: string\r
  label: string\r
  hint: string\r
  color: string\r
  hoverColor: string\r
  iconPath: string\r
  width: number\r
  height: number\r
}\r
\r
const nodeTypesConfig: any[] = [\r
  {\r
    type: 'html-start-node',\r
    label: '开始节点',\r
    classNamePerfix: 'x6',\r
    width: 120,\r
    height: 38,\r
    rectStroke: '#95d375',\r
    rectStrokeWidth: 1,\r
    rectFill: '#edf8e7',\r
    icon: startSvg,\r
    iconHover: startHover,\r
    textFill: '#81cb5c'\r
  },\r
  {\r
    type: 'html-approval-node',\r
    label: '审批节点',\r
    classNamePerfix: 'x6',\r
    width: 120,\r
    height: 38,\r
    rectStroke: '#83b3f7',\r
    rectStrokeWidth: 1,\r
    rectFill: '#e6eeff',\r
    icon: approvalSvg,\r
    iconHover: approvalHoverSvg,\r
    textFill: '#5d9df7'\r
  },\r
]\r
\r
const Ports = {\r
  groups: {\r
    top: {\r
      position: 'top',\r
      attrs: {\r
        circle: {\r
          r: 4,\r
          magnet: true,\r
          stroke: '#5F95FF',\r
          strokeWidth: 1,\r
          fill: '#fff',\r
          style: {\r
            visibility: 'hidden',\r
          },\r
        },\r
        label: {\r
          position: 'top',\r
        },\r
        text: {\r
          text: '',\r
          fill: '#ff5800',\r
        },\r
      },\r
    },\r
    right: {\r
      position: 'right',\r
      attrs: {\r
        circle: {\r
          r: 4,\r
          magnet: true,\r
          stroke: '#5F95FF',\r
          strokeWidth: 1,\r
          fill: '#fff',\r
          style: {\r
            visibility: 'hidden',\r
          },\r
        },\r
        label: {\r
          position: 'right',\r
        },\r
        text: {\r
          text: '',\r
          fill: '#ff5800',\r
        },\r
      },\r
    },\r
    bottom: {\r
      position: 'bottom',\r
      attrs: {\r
        circle: {\r
          r: 4,\r
          magnet: true,\r
          stroke: '#5F95FF',\r
          strokeWidth: 1,\r
          fill: '#fff',\r
          style: {\r
            visibility: 'hidden',\r
          },\r
        },\r
        label: {\r
          position: 'bottom',\r
        },\r
        text: {\r
          text: '',\r
          fill: '#ff5800',\r
        },\r
      },\r
    },\r
    left: {\r
      position: 'left',\r
      attrs: {\r
        circle: {\r
          r: 4,\r
          magnet: true,\r
          stroke: '#5F95FF',\r
          strokeWidth: 1,\r
          fill: '#fff',\r
          style: {\r
            visibility: 'hidden',\r
          },\r
        },\r
        label: {\r
          position: 'left',\r
        },\r
        text: {\r
          text: '',\r
          fill: '#ff5800',\r
        },\r
      },\r
    },\r
  },\r
  items: [\r
    {\r
      group: 'top',\r
      label: {\r
        position : 'top'\r
      }\r
    },\r
    {\r
      group: 'right',\r
      label: {\r
        position : 'right'\r
      }\r
    },\r
    {\r
      group: 'bottom',\r
      label: {\r
        position : 'bottom'\r
      }\r
    },\r
    {\r
      group: 'left',\r
      label: {\r
        position : 'left'\r
      }\r
    },\r
  ],\r
}\r
\r
function addLog(message: string) {\r
  const timestamp = new Date().toLocaleTimeString()\r
  logs.value.push(\`[\${timestamp}] \${message}\`)\r
}\r
\r
function clearLogs() {\r
  logs.value = []\r
}\r
\r
\r
/**\r
 * Graph 初始化前钩子：注册带 SVG icon 的自定义节点\r
 */\r
function handleBeforeGraphInit(options: FlowDesignerOptions) {\r
  addLog('🔧 beforeGraphInit: 开始注册 SVG 节点')\r
\r
  // 遍历配置，注册所有节点\r
  nodeTypesConfig.forEach((config) => {\r
    Shape.HTML.register({\r
      shape: config.type,\r
      width: config.width,\r
      height: config.height,\r
      // 注意：状态现在存储在 prop 而非 data 中\r
      // HTML 节点需要配合状态处理器使用，通过 setAttrs() 更新样式\r
      effect: ['data','_state'],  // 保留 data 监听，用于业务数据变化\r
      html(node) {\r
        const dd = node.getProp('label');\r
        console.log('dddddddddddd::', dd);\r
\r
        // 从 prop 读取状态（而不是从 data 读取）\r
        const state = node.getProp('_state') || 'default'\r
        const container = document.createElement('div');\r
        container.className = \`x6-\${config.type}\`;\r
        // 根据状态应用不同的 class\r
        const stateClass = state === 'selected' ? 'node-card--selected' : ''\r
        const imgStr = state === 'selected' ? \`<img src="\${config.iconHover}" />\`:\`<img src="\${config.icon}" />\`\r
\r
        container.innerHTML = \`\r
        <div class="node-card \${stateClass}">\r
          <div class="body">\r
            \${imgStr}\r
            <div class="info">\r
              <div class="name">\${node.getProp('label') || 'HTML 节点'}</div>\r
            </div>\r
          </div>\r
        </div>\r
      \`\r
        return container\r
      },\r
      ports: {\r
        groups: {\r
          top:    { position: 'top',    attrs: { circle: { r: 6, magnet: true, stroke: '#722ed1', strokeWidth: 2, fill: '#fff', style: { visibility: 'hidden' } } } },\r
          right:  { position: 'right',  attrs: { circle: { r: 6, magnet: true, stroke: '#722ed1', strokeWidth: 2, fill: '#fff', style: { visibility: 'hidden' } } } },\r
          bottom: { position: 'bottom', attrs: { circle: { r: 6, magnet: true, stroke: '#722ed1', strokeWidth: 2, fill: '#fff', style: { visibility: 'hidden' } } } },\r
          left:   { position: 'left',   attrs: { circle: { r: 6, magnet: true, stroke: '#722ed1', strokeWidth: 2, fill: '#fff', style: { visibility: 'hidden' } } } },\r
        },\r
        items: [\r
          { group: 'top',    id: 'port-top'    },\r
          { group: 'right',  id: 'port-right'  },\r
          { group: 'bottom', id: 'port-bottom' },\r
          { group: 'left',   id: 'port-left'   },\r
        ],\r
      },\r
    })\r
\r
    addLog(\`✅ 已注册节点: \${config.type} (\${config.label})\`)\r
  })  // ✅ 修复：forEach 的回调函数结束\r
\r
\r
\r
  addLog('🎉 所有 SVG 节点注册完成')\r
}\r
\r
function handleReady(designer: FlowDesigner, graph: Graph) {\r
  addLog('✅ 画布初始化完成')\r
  addLog('💡 提示: 悬停查看 hover 效果，点击切换 selected 状态')\r
\r
\r
  // ─── 添加示例节点 ───────────────────────────────────────────────────\r
  setTimeout(() => {\r
    const node = graph.createNode({\r
      shape: 'html-start-node',\r
      x: 120,\r
      y: 100,\r
      label: '开始节点',\r
    });\r
    graph.addNode(node);\r
    // 设置初始状态（通过状态管理器，而不是 data）\r
    designer.setNodeState(node, 'default')\r
    console.log('nodenodenodenodenodenode::', node);\r
    addLog('📦 已添加 2 个示例节点')\r
    addLog('🎨 试试点击节点切换状态吧！')\r
  }, 100)\r
}\r
\r
function handleStartDrag(e: MouseEvent, nodeType: NodeTypeConfig, onStartDrag: any) {\r
  addLog(\`🎯 开始拖拽: \${nodeType.label}\`)\r
\r
  onStartDrag(e, {\r
    shape: nodeType.type,\r
    label: nodeType.label,\r
    width: nodeType.width,\r
    height: nodeType.height,\r
    data: {\r
      label: nodeType.label,\r
      nodeInfo: {\r
        hint: nodeType.hint,\r
        color: nodeType.color,\r
      }\r
    }\r
  })\r
}\r
<\/script>\r
\r
<style scoped>\r
.demo-node-svg {\r
  display: flex;\r
  height: 100%;\r
  min-height: 600px;\r
  gap: 16px;\r
}\r
\r
.demo-node-svg__log {\r
  width: 280px;\r
  border: 1px solid #e8e8e8;\r
  border-radius: 8px;\r
  padding: 16px;\r
  background: #fafafa;\r
  overflow: hidden;\r
  display: flex;\r
  flex-direction: column;\r
}\r
\r
.demo-node-svg__log-header {\r
  display: flex;\r
  justify-content: space-between;\r
  align-items: center;\r
  margin-bottom: 12px;\r
}\r
\r
.demo-node-svg__log h4 {\r
  margin: 0;\r
  font-size: 14px;\r
  color: #1a1a2e;\r
  font-weight: 600;\r
}\r
\r
.demo-node-svg__clear-btn {\r
  padding: 2px 8px;\r
  font-size: 12px;\r
  color: #666;\r
  background: #fff;\r
  border: 1px solid #d9d9d9;\r
  border-radius: 4px;\r
  cursor: pointer;\r
  transition: all 0.2s;\r
  user-select: none;\r
}\r
\r
.demo-node-svg__clear-btn:hover {\r
  color: #1890ff;\r
  border-color: #1890ff;\r
}\r
\r
.demo-node-svg__log-content {\r
  flex: 1;\r
  overflow-y: auto;\r
  font-size: 12px;\r
  line-height: 1.8;\r
}\r
\r
.demo-node-svg__log-item {\r
  padding: 4px 0;\r
  color: #555;\r
  font-family: 'Monaco', 'Menlo', 'Consolas', monospace;\r
  border-bottom: 1px solid #f0f0f0;\r
}\r
\r
.demo-node-svg__log-item:last-child {\r
  border-bottom: none;\r
}\r
\r
.demo-node-svg__canvas {\r
  flex: 1;\r
  border: 1px solid #e8e8e8;\r
  border-radius: 8px;\r
  overflow: hidden;\r
  background: #fff;\r
}\r
\r
/* ==================== 自定义节点面板样式 ==================== */\r
.custom-palette {\r
  display: flex;\r
  flex-direction: column;\r
  height: 100%;\r
  background: linear-gradient(to bottom, #f9fafb, #ffffff);\r
  border-right: 1px solid #e8e8e8;\r
  width: 200px;\r
}\r
\r
.custom-palette__header {\r
  padding: 16px;\r
  border-bottom: 2px solid #e8e8e8;\r
  background: #fff;\r
}\r
\r
.custom-palette__title {\r
  margin: 0 0 4px 0;\r
  font-size: 16px;\r
  font-weight: 600;\r
  color: #1a1a2e;\r
}\r
\r
.custom-palette__desc {\r
  font-size: 12px;\r
  color: #999;\r
}\r
\r
.custom-palette__section {\r
  padding: 12px;\r
}\r
\r
.custom-palette__section-title {\r
  font-size: 11px;\r
  font-weight: 600;\r
  color: #999;\r
  text-transform: uppercase;\r
  letter-spacing: 0.06em;\r
  margin-bottom: 8px;\r
  padding: 0 4px;\r
}\r
\r
.custom-palette__item {\r
  display: flex;\r
  align-items: center;\r
  gap: 12px;\r
  padding: 10px;\r
  margin-bottom: 8px;\r
  background: #fff;\r
  border: 1px solid #e8e8e8;\r
  border-radius: 12px;\r
  cursor: move;\r
  transition: all 0.2s;\r
  user-select: none;\r
  width: 160px;\r
  height: 50px;\r
}\r
\r
.custom-palette__item:hover {\r
  border-color: #1677ff;\r
  box-shadow: 0 2px 8px rgba(22, 119, 255, 0.15);\r
  transform: translateY(-1px);\r
}\r
\r
.custom-palette__item:active {\r
  transform: translateY(0);\r
  box-shadow: 0 1px 4px rgba(22, 119, 255, 0.2);\r
}\r
\r
.custom-palette__item-icon {\r
  width: 36px;\r
  height: 36px;\r
  display: flex;\r
  align-items: center;\r
  justify-content: center;\r
  border-radius: 6px;\r
  flex-shrink: 0;\r
}\r
\r
.custom-palette__item-info {\r
  flex: 1;\r
  min-width: 0;\r
}\r
\r
.custom-palette__item-label {\r
  font-size: 13px;\r
  font-weight: 500;\r
  color: #333;\r
  margin-bottom: 2px;\r
}\r
\r
.custom-palette__item-hint {\r
  font-size: 11px;\r
  color: #999;\r
  white-space: nowrap;\r
  overflow: hidden;\r
  text-overflow: ellipsis;\r
}\r
\r
/* ==================== 交互说明 ==================== */\r
.custom-palette__tips {\r
  margin-top: auto;\r
  padding: 12px;\r
  background: #fff9e6;\r
  border-top: 1px solid #ffe58f;\r
}\r
\r
.tips-title {\r
  font-size: 12px;\r
  font-weight: 600;\r
  color: #d48806;\r
  margin-bottom: 8px;\r
}\r
\r
.tips-list {\r
  margin: 0;\r
  padding-left: 16px;\r
  font-size: 11px;\r
  line-height: 1.8;\r
  color: #8c8c8c;\r
}\r
\r
.tips-list li {\r
  margin-bottom: 4px;\r
}\r
\r
.tips-list strong {\r
  color: #595959;\r
}\r
\r
</style>\r
\r
\r
<!--如果需要简单控制节点样式，需要将此节点样式暴露到全局,适当增加前缀以防止污染-->\r
<style>\r
/* HTML 卡片节点样式 */\r
.x6-html-start-node {\r
  width: 120px;\r
  height: 38px;\r
  /* ✅ 方案A：显式设置 pointer-events，确保能接收鼠标事件 */\r
  -pointer-events: auto !important;\r
}\r
\r
/* ✅ 确保所有子元素都能接收事件 */\r
.x6-html-start-node * {\r
  -pointer-events: auto;\r
}\r
\r
.x6-html-start-node .node-card {\r
  width: 100%;\r
  height: 100%;\r
  background: #edf8e7;\r
  border: 1px solid #95d375;\r
  border-radius: 8px;\r
  overflow: hidden;\r
  box-shadow: 0 2px 8px rgba(0,0,0,.08);\r
  display: flex;\r
  flex-direction: column;\r
  user-select: none;\r
  transition: box-shadow 0.2s, border-color 0.2s;\r
  /* ✅ 显式设置 pointer-events */\r
  -pointer-events: auto;\r
}\r
\r
.x6-html-start-node .node-card:hover {\r
  border: 2px solid #95d375;\r
  box-shadow: 0 4px 12px rgba(0,0,0,.12);\r
}\r
\r
.x6-html-start-node .body {\r
  display: flex;\r
  align-items: center;\r
  padding: 8px 12px;\r
  gap: 8px;\r
}\r
\r
.x6-html-start-node img {\r
  width: 20px;\r
  height: 20px;\r
  flex-shrink: 0;\r
}\r
\r
.x6-html-start-node .info {\r
  overflow: hidden;\r
  flex: 1;\r
}\r
\r
.x6-html-start-node .name {\r
  font-size: 13px;\r
  font-weight: 400;\r
  color: #81cb5c;\r
  white-space: nowrap;\r
  overflow: hidden;\r
  text-overflow: ellipsis;\r
}\r
\r
/* ✅ Selected 状态样式 */\r
.x6-html-start-node .node-card--selected {\r
  border: 2px solid #48c02a !important;\r
  box-shadow: 0 0 0 3px rgba(114,46,209,0.15), 0 2px 8px rgba(0,0,0,.08) !important;\r
  background: #8fd16f !important;\r
}\r
.x6-html-start-node .node-card--selected .name {\r
  color: white;\r
}\r
\r
\r
\r
.x6-html-approval-node {\r
  width: 120px;\r
  height: 38px;\r
  /* ✅ 方案A：显式设置 pointer-events，确保能接收鼠标事件 */\r
  -pointer-events: auto !important;\r
}\r
\r
/* ✅ 确保所有子元素都能接收事件 */\r
.x6-html-approval-node * {\r
  -pointer-events: auto;\r
}\r
\r
.x6-html-approval-node .node-card {\r
  width: 100%;\r
  height: 100%;\r
  background: #e6eeff;\r
  border: 1px solid #83b3f7;\r
  border-radius: 8px;\r
  overflow: hidden;\r
  box-shadow: 0 2px 8px rgba(0,0,0,.08);\r
  display: flex;\r
  flex-direction: column;\r
  user-select: none;\r
  transition: box-shadow 0.2s, border-color 0.2s;\r
  /* ✅ 显式设置 pointer-events */\r
  -pointer-events: auto;\r
}\r
\r
.x6-html-approval-node .node-card:hover {\r
  border: 2px solid #83b3f7;\r
  box-shadow: 0 4px 12px rgba(0,0,0,.12);\r
}\r
\r
.x6-html-approval-node .body {\r
  display: flex;\r
  align-items: center;\r
  padding: 8px 12px;\r
  gap: 8px;\r
}\r
\r
.x6-html-approval-node img {\r
  width: 20px;\r
  height: 20px;\r
  flex-shrink: 0;\r
}\r
\r
.x6-html-approval-node .info {\r
  overflow: hidden;\r
  flex: 1;\r
}\r
\r
.x6-html-approval-node .name {\r
  font-size: 13px;\r
  font-weight: 400;\r
  color: #5d9df7;\r
  white-space: nowrap;\r
  overflow: hidden;\r
  text-overflow: ellipsis;\r
}\r
\r
/* ✅ Selected 状态样式 */\r
.x6-html-approval-node .node-card--selected {\r
  border: 2px solid #003eca !important;\r
  box-shadow: 0 0 0 3px rgba(114,46,209,0.15), 0 2px 8px rgba(0,0,0,.08) !important;\r
  background: #1d78f4 !important;\r
}\r
.x6-html-approval-node .node-card--selected .name {\r
  color: white;\r
}\r
\r
\r
</style>\r
`,jd={style:{width:"100%",height:"100%"}},Yd={class:"body"},Xd=["src"],Jd=["src"],Kd={class:"info"},Qd={class:"name"},nc=G({__name:"StartNode",props:{node:{}},setup(T){const v=T,a=Tn("getGraph"),c=S(v.node.getData()??{}),l=S(!1),g=S(""),x=()=>{c.value=v.node.getData()??{},g.value=v.node.getProp("label")};return $n(()=>{v.node.on("change:data",x);const s=a==null?void 0:a();s&&(s.on("cell:selected",({cell:o})=>{o.id===v.node.id&&(l.value=!0)}),s.on("cell:unselected",({cell:o})=>{o.id===v.node.id&&(l.value=!1)}))}),Pn(()=>{v.node.off("change:data",x)}),(s,o)=>(h(),b("div",jd,[n("div",{class:an(["node-start",{"node-start--selected":l.value}])},[n("div",Yd,[l.value?z("",!0):(h(),b("img",{key:0,src:F(mn)},null,8,Xd)),l.value?(h(),b("img",{key:1,src:F(un)},null,8,Jd)):z("",!0),n("div",Kd,[n("div",Qd,D(g.value||"开始"),1)])])],2)]))}}),ec=U(nc,[["__scopeId","data-v-c183cbc0"]]),rc={class:"body"},tc=["src"],oc=["src"],sc={class:"info"},lc={class:"name"},ic=G({__name:"ApproverNode",props:{node:{}},setup(T){const v=T,a=Tn("getGraph"),c=S(v.node.getData()??{}),l=S(!1),g=S(""),x=()=>{c.value=v.node.getData()??{},g.value=v.node.getProp("label")};return $n(()=>{v.node.on("change:data",x);const s=a==null?void 0:a();s&&(s.on("cell:selected",({cell:o})=>{o.id===v.node.id&&(l.value=!0)}),s.on("cell:unselected",({cell:o})=>{o.id===v.node.id&&(l.value=!1)}))}),Pn(()=>{v.node.off("change:data",x)}),(s,o)=>(h(),b("div",{class:an(["node-approval",{"node-approval--selected":l.value}])},[n("div",rc,[l.value?z("",!0):(h(),b("img",{key:0,src:F(hn)},null,8,tc)),l.value?(h(),b("img",{key:1,src:F(bn)},null,8,oc)):z("",!0),n("div",sc,[n("div",lc,D(g.value||"审批人节点"),1)])])],2))}}),ac=U(ic,[["__scopeId","data-v-8153fca3"]]),dc={class:"demo-node-svg"},cc={class:"demo-node-svg__log"},pc={class:"demo-node-svg__log-content"},gc={class:"demo-node-svg__canvas"},fc={class:"custom-palette"},mc={class:"custom-palette__section"},uc=["onMousedown"],hc={class:"custom-palette__item-icon"},bc=["src"],vc={class:"custom-palette__item-info"},_c=G({__name:"demo-node-vue",setup(T){const v=S([]),a=[{type:"vue-start-node",label:"开始节点",classNamePerfix:"x6",width:120,height:38,rectStroke:"#95d375",rectStrokeWidth:1,rectFill:"#edf8e7",icon:mn,iconHover:un,textFill:"#81cb5c"},{type:"vue-approval-node",label:"审批节点",classNamePerfix:"x6",width:120,height:38,rectStroke:"#83b3f7",rectStrokeWidth:1,rectFill:"#e6eeff",icon:hn,iconHover:bn,textFill:"#5d9df7"}],c={groups:{top:{position:"top",attrs:{circle:{r:4,magnet:!0,stroke:"#5F95FF",strokeWidth:1,fill:"#fff",style:{visibility:"hidden"}},label:{position:"top"},text:{text:"",fill:"#ff5800"}}},right:{position:"right",attrs:{circle:{r:4,magnet:!0,stroke:"#5F95FF",strokeWidth:1,fill:"#fff",style:{visibility:"hidden"}},label:{position:"right"},text:{text:"",fill:"#ff5800"}}},bottom:{position:"bottom",attrs:{circle:{r:4,magnet:!0,stroke:"#5F95FF",strokeWidth:1,fill:"#fff",style:{visibility:"hidden"}},label:{position:"bottom"},text:{text:"",fill:"#ff5800"}}},left:{position:"left",attrs:{circle:{r:4,magnet:!0,stroke:"#5F95FF",strokeWidth:1,fill:"#fff",style:{visibility:"hidden"}},label:{position:"left"},text:{text:"",fill:"#ff5800"}}}},items:[{group:"top",label:{position:"top"}},{group:"right",label:{position:"right"}},{group:"bottom",label:{position:"bottom"}},{group:"left",label:{position:"left"}}]};function l(t){const e=new Date().toLocaleTimeString();v.value.push(`[${e}] ${t}`)}function g(){v.value=[]}function x(t){l("🔧 beforeGraphInit: 开始注册 SVG 节点"),In({shape:"vue-start-node",width:120,height:38,component:ec,ports:{...c}}),In({shape:"vue-approval-node",width:120,height:38,component:ac,ports:{...c}}),l("🎉 所有 SVG 节点注册完成")}function s(t,e){l("✅ 画布初始化完成"),l("💡 提示: 悬停查看 hover 效果，点击切换 selected 状态"),setTimeout(()=>{e.addNode({shape:"vue-start-node",x:100,y:100,label:"开始节点"}),l("📦 已添加 3 个示例节点"),l("🎨 试试悬停和点击节点吧！")},100)}function o(t,e,i){l(`🎯 开始拖拽: ${e.label}`),i(t,{shape:e.type,label:e.label,width:e.width,height:e.height,data:{label:e.label,nodeInfo:{hint:e.hint,color:e.color}}})}return(t,e)=>(h(),b("div",dc,[n("div",cc,[n("div",{class:"demo-node-svg__log-header"},[e[0]||(e[0]=n("h4",null,"事件日志",-1)),n("button",{class:"demo-node-svg__clear-btn",onClick:g,title:"清除日志"}," 清除 ")]),n("div",pc,[(h(!0),b(O,null,H(v.value,(i,r)=>(h(),b("div",{key:r,class:"demo-node-svg__log-item"},D(i),1))),128))])]),n("div",gc,[f(F(V),{mode:"design","before-graph-init":x,onReady:s},{palette:E(({onStartDrag:i})=>[n("div",fc,[e[2]||(e[2]=n("div",{class:"custom-palette__header"},[n("h3",{class:"custom-palette__title"},"VUE 节点"),n("span",{class:"custom-palette__desc"},"三种状态切换")],-1)),n("div",mc,[e[1]||(e[1]=n("div",{class:"custom-palette__section-title"},"带图标的节点",-1)),(h(),b(O,null,H(a,r=>n("div",{key:r.type,class:"custom-palette__item",onMousedown:p=>o(p,r,i),style:rn({background:r.rectFill,borderColor:r.rectStroke})},[n("div",hc,[n("img",{src:r.icon},null,8,bc)]),n("div",vc,[n("div",{class:"custom-palette__item-label",style:rn({color:r.textFill})},D(r.label),5)])],44,uc)),64))]),e[3]||(e[3]=n("div",{class:"custom-palette__tips"},[n("div",{class:"tips-title"},"💡 交互说明"),n("ul",{class:"tips-list"},[n("li",null,[n("strong",null,"Default:"),P(" 白底 + 彩色图标")]),n("li",null,[n("strong",null,"Hover:"),P(" 淡色背景")]),n("li",null,[n("strong",null,"Selected:"),P(" 彩底 + 白色图标")])])],-1))])]),_:1})])]))}}),xc=U(_c,[["__scopeId","data-v-1a5f2e0b"]]),yc=`<template>\r
  <div class="demo-node-svg">\r
    <!-- 事件日志面板 -->\r
    <div class="demo-node-svg__log">\r
      <div class="demo-node-svg__log-header">\r
        <h4>事件日志</h4>\r
        <button class="demo-node-svg__clear-btn" @click="clearLogs" title="清除日志">\r
          清除\r
        </button>\r
      </div>\r
      <div class="demo-node-svg__log-content">\r
        <div v-for="(log, index) in logs" :key="index" class="demo-node-svg__log-item">\r
          {{ log }}\r
        </div>\r
      </div>\r
    </div>\r
\r
    <!-- 画布容器 -->\r
    <div class="demo-node-svg__canvas">\r
      <FlowDesignerLayout\r
        mode="design"\r
        :before-graph-init="handleBeforeGraphInit"\r
        @ready="handleReady"\r
      >\r
        <!-- 自定义节点面板插槽 -->\r
        <template #palette="{ onStartDrag }">\r
          <div class="custom-palette">\r
            <div class="custom-palette__header">\r
              <h3 class="custom-palette__title">VUE 节点</h3>\r
              <span class="custom-palette__desc">三种状态切换</span>\r
            </div>\r
\r
            <div class="custom-palette__section">\r
              <div class="custom-palette__section-title">带图标的节点</div>\r
              <div\r
                v-for="nodeType in nodeTypesConfig"\r
                :key="nodeType.type"\r
                class="custom-palette__item"\r
                @mousedown="(e) => handleStartDrag(e, nodeType, onStartDrag)"\r
                :style="{ background: nodeType.rectFill, borderColor: nodeType.rectStroke}"\r
              >\r
                <div class="custom-palette__item-icon" >\r
                  <img :src="nodeType.icon" />\r
                </div>\r
                <div class="custom-palette__item-info">\r
                  <div class="custom-palette__item-label" :style="{ color: nodeType.textFill}">{{ nodeType.label }}</div>\r
                </div>\r
              </div>\r
\r
            </div>\r
\r
            <div class="custom-palette__tips">\r
              <div class="tips-title">💡 交互说明</div>\r
              <ul class="tips-list">\r
                <li><strong>Default:</strong> 白底 + 彩色图标</li>\r
                <li><strong>Hover:</strong> 淡色背景</li>\r
                <li><strong>Selected:</strong> 彩底 + 白色图标</li>\r
              </ul>\r
            </div>\r
          </div>\r
        </template>\r
      </FlowDesignerLayout>\r
    </div>\r
  </div>\r
</template>\r
\r
<script setup lang="ts">\r
import { ref } from 'vue'\r
import { FlowDesignerLayout }  from '@quick-code/x6-flow-designer'\r
import type { FlowDesigner, FlowDesignerOptions } from '@quick-code/x6-flow-designer'\r
import { Graph, Node } from '@antv/x6'\r
import StartNode from './components/StartNode.vue'\r
import ApproverNode from './components/ApproverNode.vue'\r
\r
\r
import startSvg from "./icons/start.svg";\r
import startHover from "./icons/start-hover.svg";\r
\r
import approvalSvg from "./icons/approval.svg";\r
import approvalHoverSvg from "./icons/approval-hover.svg";\r
import {register} from "@antv/x6-vue-shape";\r
\r
\r
\r
const logs = ref<string[]>([])\r
\r
// 节点类型配置（包含颜色和 iconPath）\r
interface NodeTypeConfig {\r
  type: string\r
  label: string\r
  hint: string\r
  color: string\r
  hoverColor: string\r
  iconPath: string\r
  width: number\r
  height: number\r
}\r
\r
const nodeTypesConfig: any[] = [\r
  {\r
    type: 'vue-start-node',\r
    label: '开始节点',\r
    classNamePerfix: 'x6',\r
    width: 120,\r
    height: 38,\r
    rectStroke: '#95d375',\r
    rectStrokeWidth: 1,\r
    rectFill: '#edf8e7',\r
    icon: startSvg,\r
    iconHover: startHover,\r
    textFill: '#81cb5c'\r
  },\r
  {\r
    type: 'vue-approval-node',\r
    label: '审批节点',\r
    classNamePerfix: 'x6',\r
    width: 120,\r
    height: 38,\r
    rectStroke: '#83b3f7',\r
    rectStrokeWidth: 1,\r
    rectFill: '#e6eeff',\r
    icon: approvalSvg,\r
    iconHover: approvalHoverSvg,\r
    textFill: '#5d9df7'\r
  },\r
]\r
\r
const Ports = {\r
  groups: {\r
    top: {\r
      position: 'top',\r
      attrs: {\r
        circle: {\r
          r: 4,\r
          magnet: true,\r
          stroke: '#5F95FF',\r
          strokeWidth: 1,\r
          fill: '#fff',\r
          style: {\r
            visibility: 'hidden',\r
          },\r
        },\r
        label: {\r
          position: 'top',\r
        },\r
        text: {\r
          text: '',\r
          fill: '#ff5800',\r
        },\r
      },\r
    },\r
    right: {\r
      position: 'right',\r
      attrs: {\r
        circle: {\r
          r: 4,\r
          magnet: true,\r
          stroke: '#5F95FF',\r
          strokeWidth: 1,\r
          fill: '#fff',\r
          style: {\r
            visibility: 'hidden',\r
          },\r
        },\r
        label: {\r
          position: 'right',\r
        },\r
        text: {\r
          text: '',\r
          fill: '#ff5800',\r
        },\r
      },\r
    },\r
    bottom: {\r
      position: 'bottom',\r
      attrs: {\r
        circle: {\r
          r: 4,\r
          magnet: true,\r
          stroke: '#5F95FF',\r
          strokeWidth: 1,\r
          fill: '#fff',\r
          style: {\r
            visibility: 'hidden',\r
          },\r
        },\r
        label: {\r
          position: 'bottom',\r
        },\r
        text: {\r
          text: '',\r
          fill: '#ff5800',\r
        },\r
      },\r
    },\r
    left: {\r
      position: 'left',\r
      attrs: {\r
        circle: {\r
          r: 4,\r
          magnet: true,\r
          stroke: '#5F95FF',\r
          strokeWidth: 1,\r
          fill: '#fff',\r
          style: {\r
            visibility: 'hidden',\r
          },\r
        },\r
        label: {\r
          position: 'left',\r
        },\r
        text: {\r
          text: '',\r
          fill: '#ff5800',\r
        },\r
      },\r
    },\r
  },\r
  items: [\r
    {\r
      group: 'top',\r
      label: {\r
        position : 'top'\r
      }\r
    },\r
    {\r
      group: 'right',\r
      label: {\r
        position : 'right'\r
      }\r
    },\r
    {\r
      group: 'bottom',\r
      label: {\r
        position : 'bottom'\r
      }\r
    },\r
    {\r
      group: 'left',\r
      label: {\r
        position : 'left'\r
      }\r
    },\r
  ],\r
}\r
\r
\r
// 手动跟踪节点的选中状态（因为 X6 的 selection 可能有默认行为）\r
const selectedNodesMap = new Map<string, boolean>()\r
\r
function addLog(message: string) {\r
  const timestamp = new Date().toLocaleTimeString()\r
  logs.value.push(\`[\${timestamp}] \${message}\`)\r
}\r
\r
function clearLogs() {\r
  logs.value = []\r
}\r
\r
\r
\r
/**\r
 * Graph 初始化前钩子：注册带 SVG icon 的自定义节点\r
 */\r
function handleBeforeGraphInit(options: FlowDesignerOptions) {\r
  addLog('🔧 beforeGraphInit: 开始注册 SVG 节点')\r
\r
  register({\r
    shape: 'vue-start-node',\r
    width: 120, height: 38,\r
    component: StartNode,\r
    ports: { ...Ports },\r
  })\r
\r
  register({\r
    shape: 'vue-approval-node',\r
    width: 120, height: 38,\r
    component: ApproverNode,\r
    ports: { ...Ports },\r
  })\r
\r
  addLog('🎉 所有 SVG 节点注册完成')\r
}\r
\r
function handleReady(designer: FlowDesigner, graph: Graph) {\r
  addLog('✅ 画布初始化完成')\r
  addLog('💡 提示: 悬停查看 hover 效果，点击切换 selected 状态')\r
\r
\r
  // ─── 添加示例节点 ───────────────────────────────────────────────────\r
  setTimeout(() => {\r
    graph.addNode({\r
      shape: 'vue-start-node',\r
      x: 100,\r
      y: 100,\r
      label: '开始节点',\r
    })\r
\r
    addLog('📦 已添加 3 个示例节点')\r
    addLog('🎨 试试悬停和点击节点吧！')\r
  }, 100)\r
}\r
\r
function handleStartDrag(e: MouseEvent, nodeType: NodeTypeConfig, onStartDrag: any) {\r
  addLog(\`🎯 开始拖拽: \${nodeType.label}\`)\r
\r
  onStartDrag(e, {\r
    shape: nodeType.type,\r
    label: nodeType.label,\r
    width: nodeType.width,\r
    height: nodeType.height,\r
    data: {\r
      label: nodeType.label,\r
      nodeInfo: {\r
        hint: nodeType.hint,\r
        color: nodeType.color,\r
      }\r
    }\r
  })\r
}\r
<\/script>\r
\r
<style scoped>\r
.demo-node-svg {\r
  display: flex;\r
  height: 100%;\r
  min-height: 600px;\r
  gap: 16px;\r
}\r
\r
.demo-node-svg__log {\r
  width: 280px;\r
  border: 1px solid #e8e8e8;\r
  border-radius: 8px;\r
  padding: 16px;\r
  background: #fafafa;\r
  overflow: hidden;\r
  display: flex;\r
  flex-direction: column;\r
}\r
\r
.demo-node-svg__log-header {\r
  display: flex;\r
  justify-content: space-between;\r
  align-items: center;\r
  margin-bottom: 12px;\r
}\r
\r
.demo-node-svg__log h4 {\r
  margin: 0;\r
  font-size: 14px;\r
  color: #1a1a2e;\r
  font-weight: 600;\r
}\r
\r
.demo-node-svg__clear-btn {\r
  padding: 2px 8px;\r
  font-size: 12px;\r
  color: #666;\r
  background: #fff;\r
  border: 1px solid #d9d9d9;\r
  border-radius: 4px;\r
  cursor: pointer;\r
  transition: all 0.2s;\r
  user-select: none;\r
}\r
\r
.demo-node-svg__clear-btn:hover {\r
  color: #1890ff;\r
  border-color: #1890ff;\r
}\r
\r
.demo-node-svg__log-content {\r
  flex: 1;\r
  overflow-y: auto;\r
  font-size: 12px;\r
  line-height: 1.8;\r
}\r
\r
.demo-node-svg__log-item {\r
  padding: 4px 0;\r
  color: #555;\r
  font-family: 'Monaco', 'Menlo', 'Consolas', monospace;\r
  border-bottom: 1px solid #f0f0f0;\r
}\r
\r
.demo-node-svg__log-item:last-child {\r
  border-bottom: none;\r
}\r
\r
.demo-node-svg__canvas {\r
  flex: 1;\r
  border: 1px solid #e8e8e8;\r
  border-radius: 8px;\r
  overflow: hidden;\r
  background: #fff;\r
}\r
\r
/* ==================== 自定义节点面板样式 ==================== */\r
.custom-palette {\r
  display: flex;\r
  flex-direction: column;\r
  height: 100%;\r
  background: linear-gradient(to bottom, #f9fafb, #ffffff);\r
  border-right: 1px solid #e8e8e8;\r
  width: 200px;\r
}\r
\r
.custom-palette__header {\r
  padding: 16px;\r
  border-bottom: 2px solid #e8e8e8;\r
  background: #fff;\r
}\r
\r
.custom-palette__title {\r
  margin: 0 0 4px 0;\r
  font-size: 16px;\r
  font-weight: 600;\r
  color: #1a1a2e;\r
}\r
\r
.custom-palette__desc {\r
  font-size: 12px;\r
  color: #999;\r
}\r
\r
.custom-palette__section {\r
  padding: 12px;\r
}\r
\r
.custom-palette__section-title {\r
  font-size: 11px;\r
  font-weight: 600;\r
  color: #999;\r
  text-transform: uppercase;\r
  letter-spacing: 0.06em;\r
  margin-bottom: 8px;\r
  padding: 0 4px;\r
}\r
\r
.custom-palette__item {\r
  display: flex;\r
  align-items: center;\r
  gap: 12px;\r
  padding: 10px;\r
  margin-bottom: 8px;\r
  background: #fff;\r
  border: 1px solid #e8e8e8;\r
  border-radius: 12px;\r
  cursor: move;\r
  transition: all 0.2s;\r
  user-select: none;\r
  width: 160px;\r
  height: 50px;\r
}\r
\r
.custom-palette__item:hover {\r
  border-color: #1677ff;\r
  box-shadow: 0 2px 8px rgba(22, 119, 255, 0.15);\r
  transform: translateY(-1px);\r
}\r
\r
.custom-palette__item:active {\r
  transform: translateY(0);\r
  box-shadow: 0 1px 4px rgba(22, 119, 255, 0.2);\r
}\r
\r
.custom-palette__item-icon {\r
  width: 36px;\r
  height: 36px;\r
  display: flex;\r
  align-items: center;\r
  justify-content: center;\r
  border-radius: 6px;\r
  flex-shrink: 0;\r
}\r
\r
.custom-palette__item-info {\r
  flex: 1;\r
  min-width: 0;\r
}\r
\r
.custom-palette__item-label {\r
  font-size: 13px;\r
  font-weight: 500;\r
  color: #333;\r
  margin-bottom: 2px;\r
}\r
\r
.custom-palette__item-hint {\r
  font-size: 11px;\r
  color: #999;\r
  white-space: nowrap;\r
  overflow: hidden;\r
  text-overflow: ellipsis;\r
}\r
\r
/* ==================== 交互说明 ==================== */\r
.custom-palette__tips {\r
  margin-top: auto;\r
  padding: 12px;\r
  background: #fff9e6;\r
  border-top: 1px solid #ffe58f;\r
}\r
\r
.tips-title {\r
  font-size: 12px;\r
  font-weight: 600;\r
  color: #d48806;\r
  margin-bottom: 8px;\r
}\r
\r
.tips-list {\r
  margin: 0;\r
  padding-left: 16px;\r
  font-size: 11px;\r
  line-height: 1.8;\r
  color: #8c8c8c;\r
}\r
\r
.tips-list li {\r
  margin-bottom: 4px;\r
}\r
\r
.tips-list strong {\r
  color: #595959;\r
}\r
\r
</style>\r
\r
\r
<!--如果需要简单控制节点样式，需要将此节点样式暴露到全局,适当增加前缀以防止污染-->\r
<style>\r
.x6-svg-start-node-body:hover{\r
  stroke-width: 2px;\r
  fill: #caf1c1;\r
}\r
.x6-node-selected .x6-svg-start-node-body{\r
  stroke: #48c02a;\r
  stroke-width: 2px;\r
  fill: #8fd16f\r
}\r
.x6-node-selected .x6-svg-start-node-image {\r
  display: none;\r
}\r
.x6-node-selected .x6-svg-start-node-imageHover {\r
  display: block;\r
}\r
.x6-node-selected .x6-svg-start-node-label {\r
  fill: #ffffff\r
}\r
\r
.x6-node-selected .x6-svg-approval-node-body{\r
  stroke: #003eca;\r
  stroke-width: 2px;\r
  fill: #1d78f4\r
}\r
.x6-node-selected .x6-svg-approval-node-image {\r
  display: none;\r
}\r
\r
.x6-node-selected .x6-svg-approval-node-imageHover {\r
  display: block;\r
}\r
.x6-node-selected .x6-svg-approval-node-label {\r
  fill: #ffffff\r
}\r
\r
.x6-node-selected .x6-svg-condition-node-body{\r
  stroke: #ffa100;\r
  stroke-width: 2px;\r
  fill: #fdc059\r
}\r
.x6-node-selected .x6-svg-condition-node-image {\r
  display: none;\r
}\r
\r
.x6-node-selected .x6-svg-condition-node-imageHover {\r
  display: block;\r
}\r
.x6-node-selected .x6-svg-condition-node-label {\r
  fill: #ffffff\r
}\r
\r
</style>\r
`,kc=`<template>\r
  <div style="width: 100%;height: 100%">\r
    <div class="node-start" :class="{ 'node-start--selected': isSelected }">\r
      <div class="body">\r
        <img v-if="!isSelected" :src="startSvg" />\r
        <img v-if="isSelected" :src="startSvgHover" />\r
        <div class="info">\r
          <div class="name">{{ label || '开始' }}</div>\r
        </div>\r
      </div>\r
    </div>\r
  </div>\r
</template>\r
\r
<script setup lang="ts">\r
import { ref, onMounted, onUnmounted, inject } from 'vue'\r
import type { Node, Graph } from '@antv/x6'\r
import type { FlowNodeData } from '../types/flow.types'\r
import startSvg from '../icons/start.svg';\r
import startSvgHover from '../icons/start-hover.svg';\r
\r
const props     = defineProps<{ node: Node }>()\r
const getGraph  = inject<() => Graph>('getGraph')\r
\r
const nodeData   = ref<FlowNodeData>(props.node.getData() ?? {})\r
const isSelected = ref(false)\r
const label = ref('')\r
\r
const updateNodeData = () => {\r
  nodeData.value = props.node.getData() ?? {}\r
\r
  label.value = props.node.getProp('label');\r
}\r
\r
onMounted(() => {\r
  props.node.on('change:data', updateNodeData)\r
  const graph = getGraph?.()\r
  if (graph) {\r
    graph.on('cell:selected',   ({ cell }) => { if (cell.id === props.node.id) isSelected.value = true  })\r
    graph.on('cell:unselected', ({ cell }) => { if (cell.id === props.node.id) isSelected.value = false })\r
  }\r
})\r
\r
onUnmounted(() => {\r
  props.node.off('change:data', updateNodeData)\r
})\r
<\/script>\r
\r
<style scoped>\r
.node-start {\r
  width: 100%;\r
  height: 100%;\r
  background: #fff;\r
  border: 1px solid #52c41a;\r
  border-radius: 8px; overflow: hidden;\r
  box-shadow: 0 2px 8px rgba(0,0,0,.08);\r
  display: flex; flex-direction: column;\r
  user-select: none;\r
  background: #edf8e7;\r
  transition: box-shadow 0.2s, border-color 0.2s;\r
}\r
.node-start:hover {\r
  border: 2px solid #52c41a;\r
  -background: #f1f5f1;\r
}\r
.node-start--selected {\r
  border: 2px solid #52c41a;\r
  background: #8fd16f;\r
  box-shadow: 0 0 0 3px rgba(245,34,45,0.15), 0 2px 8px rgba(0,0,0,.08);\r
}\r
.node-start--selected .name{\r
  color: white;\r
}\r
.body { flex: 1; display: flex; align-items: center; padding: 0 12px; gap: 10px; }\r
.icon { font-size: 16px; color: #52c41a; }\r
.info { overflow: hidden; flex: 1; }\r
.name { font-size: 13px; color: #81cb5c; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; font-weight: 390}\r
</style>\r
`,wc=`<template>\r
  <div class="node-approval" :class="{ 'node-approval--selected': isSelected }">\r
    <div class="body">\r
      <img v-if="!isSelected" :src="approvalSvg" />\r
      <img v-if="isSelected" :src="approvalSvgHover" />\r
      <div class="info">\r
        <div class="name">{{ label || '审批人节点' }}</div>\r
      </div>\r
    </div>\r
  </div>\r
</template>\r
\r
<script setup lang="ts">\r
import { ref, onMounted, onUnmounted, computed, inject } from 'vue'\r
import type { Node, Graph } from '@antv/x6'\r
import type { FlowNodeData } from '../types/flow.types'\r
import approvalSvg from '../icons/approval.svg';\r
import approvalSvgHover from '../icons/approval-hover.svg';\r
\r
const props     = defineProps<{ node: Node }>()\r
const getGraph  = inject<() => Graph>('getGraph')\r
\r
const nodeData   = ref<FlowNodeData>(props.node.getData() ?? {})\r
const isSelected = ref(false)\r
const label = ref('')\r
\r
const updateNodeData = () => {\r
  nodeData.value = props.node.getData() ?? {}\r
  label.value = props.node.getProp('label');\r
}\r
\r
onMounted(() => {\r
  props.node.on('change:data', updateNodeData)\r
  const graph = getGraph?.()\r
  if (graph) {\r
    graph.on('cell:selected',   ({ cell }) => { if (cell.id === props.node.id) isSelected.value = true  })\r
    graph.on('cell:unselected', ({ cell }) => { if (cell.id === props.node.id) isSelected.value = false })\r
  }\r
})\r
\r
onUnmounted(() => {\r
  props.node.off('change:data', updateNodeData)\r
})\r
\r
const approverText = computed(() => {\r
  if (nodeData.value.approverType === 'superior') return '发起人上级'\r
  if (nodeData.value.approverType === 'deptHead') return '部门负责人'\r
  if (nodeData.value.approverType === 'role') return nodeData.value.roles?.join('、') || '未配置角色'\r
  return nodeData.value.approvers?.join('、') || '未配置审批人'\r
})\r
<\/script>\r
\r
<style scoped>\r
.node-approval {\r
  width: 100%;\r
  height: 100%;\r
  background: #e6eeff;\r
  border: 1px solid #83b3f7;\r
  border-radius: 8px; overflow: hidden;\r
  box-shadow: 0 2px 8px rgba(0,0,0,.08);\r
  display: flex; flex-direction: column;\r
  user-select: none;\r
  transition: box-shadow 0.2s, border-color 0.2s;\r
}\r
.node-approval:hover {\r
  border: 2px solid #83b3f7;\r
  -background: #f1f5f1;\r
}\r
.node-approval--selected {\r
  border: 2px solid #003eca;\r
  background: #1d78f4;\r
  box-shadow: 0 0 0 3px rgba(245,34,45,0.15), 0 2px 8px rgba(0,0,0,.08);\r
}\r
.node-approval--selected .name{\r
  color: white;\r
}\r
.body { flex: 1; display: flex; align-items: center; padding: 0 12px; gap: 10px; }\r
.info { overflow: hidden; flex: 1; }\r
.name { font-size: 13px; color: #5d9df7; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; font-weight: 390}\r
</style>\r
`,Sc={class:"demo-node-svg"},Nc={class:"demo-node-svg__log"},Cc={class:"demo-node-svg__log-content"},Dc={class:"demo-node-svg__canvas"},$c={class:"custom-palette"},Ec={class:"custom-palette__section"},Fc=["onMousedown"],Lc={class:"custom-palette__item-icon"},Tc=["src"],Rc={class:"custom-palette__item-info"},zc={style:{width:"100%",height:"100%"},"data-cvn-root":""},Ac={class:"body"},Mc=["src"],Wc=["src"],Ic={class:"info"},Pc={class:"name"},Gc={style:{width:"100%",height:"100%"},"data-cvn-root":""},Oc={class:"body"},Hc=["src"],Bc=["src"],Vc={class:"info"},Uc={class:"name"},Zc=G({__name:"demo-node-designer",setup(T){const v=S([]),a=[{type:"slot-startNode",label:"开始节点",classNamePerfix:"x6",width:120,height:38,rectStroke:"#95d375",rectStrokeWidth:1,rectFill:"#edf8e7",icon:mn,iconHover:un,textFill:"#81cb5c"},{type:"slot-approvalNode",label:"审批节点",classNamePerfix:"x6",width:120,height:38,rectStroke:"#83b3f7",rectStrokeWidth:1,rectFill:"#e6eeff",icon:hn,iconHover:bn,textFill:"#5d9df7"}];function c(o){const t=new Date().toLocaleTimeString();v.value.push(`[${t}] ${o}`)}function l(){v.value=[]}function g(o){c("🔧 beforeGraphInit: 开始注册 SVG 节点"),c("🎉 所有 插槽 节点注册完成")}function x(o,t){c("✅ 画布初始化完成"),c("💡 提示: 悬停查看 hover 效果，点击切换 selected 状态"),setTimeout(()=>{t.addNode({shape:"common-vue-node","node-type":"slot-startNode",x:120,y:38,label:"开始节点",data:{}}),c("📦 已添加 2 个示例节点（测试响应式 data）"),c("🎨 试试悬停和点击节点吧！")},100)}function s(o,t,e){c(`🎯 开始拖拽: ${t.label}`),e(o,{shape:"common-vue-node",label:t.label,width:t.width,height:t.height,"node-type":t.type,data:{}})}return(o,t)=>(h(),b("div",Sc,[n("div",Nc,[n("div",{class:"demo-node-svg__log-header"},[t[0]||(t[0]=n("h4",null,"事件日志",-1)),n("button",{class:"demo-node-svg__clear-btn",onClick:l,title:"清除日志"}," 清除 ")]),n("div",Cc,[(h(!0),b(O,null,H(v.value,(e,i)=>(h(),b("div",{key:i,class:"demo-node-svg__log-item"},D(e),1))),128))])]),n("div",Dc,[f(F(V),{mode:"design","before-graph-init":g,onReady:x},{palette:E(({onStartDrag:e})=>[n("div",$c,[t[2]||(t[2]=n("div",{class:"custom-palette__header"},[n("h3",{class:"custom-palette__title"},"插槽 节点"),n("span",{class:"custom-palette__desc"})],-1)),n("div",Ec,[t[1]||(t[1]=n("div",{class:"custom-palette__section-title"},"带图标的节点",-1)),(h(),b(O,null,H(a,i=>n("div",{key:i.type,class:"custom-palette__item",onMousedown:r=>s(r,i,e),style:rn({background:i.rectFill,borderColor:i.rectStroke})},[n("div",Lc,[n("img",{src:i.icon},null,8,Tc)]),n("div",Rc,[n("div",{class:"custom-palette__item-label",style:rn({color:i.textFill})},D(i.label),5)])],44,Fc)),64))]),t[3]||(t[3]=n("div",{class:"custom-palette__tips"},[n("div",{class:"tips-title"},"💡 交互说明"),n("ul",{class:"tips-list"},[n("li",null,[n("strong",null,"Default:"),P(" 白底 + 彩色图标")]),n("li",null,[n("strong",null,"Hover:"),P(" 淡色背景")]),n("li",null,[n("strong",null,"Selected:"),P(" 彩底 + 白色图标")])])],-1))])]),"node-slot-startNode":E(({node:e,graph:i,data:r,label:p,state:m})=>[n("div",zc,[n("div",{class:an(["node-start",{"node-start--selected":m.value==="selected"}])},[n("div",Ac,[m.value!=="selected"?(h(),b("img",{key:0,src:F(mn)},null,8,Mc)):z("",!0),m.value==="selected"?(h(),b("img",{key:1,src:F(un)},null,8,Wc)):z("",!0),n("div",Ic,[n("div",Pc,D(p||"开始"),1)])])],2)])]),"node-slot-approvalNode":E(({node:e,graph:i,data:r,label:p,state:m})=>[n("div",Gc,[n("div",{class:an(["node-approval",{"node-approval--selected":m==="selected"}])},[n("div",Oc,[m!=="selected"?(h(),b("img",{key:0,src:F(hn)},null,8,Hc)):z("",!0),m==="selected"?(h(),b("img",{key:1,src:F(bn)},null,8,Bc)):z("",!0),n("div",Vc,[n("div",Uc,D(p||"开始"),1)])])],2)])]),_:1})])]))}}),qc=U(Zc,[["__scopeId","data-v-ed495e91"]]),jc=`<template>\r
  <div class="demo-node-svg">\r
    <!-- 事件日志面板 -->\r
    <div class="demo-node-svg__log">\r
      <div class="demo-node-svg__log-header">\r
        <h4>事件日志</h4>\r
        <button class="demo-node-svg__clear-btn" @click="clearLogs" title="清除日志">\r
          清除\r
        </button>\r
      </div>\r
      <div class="demo-node-svg__log-content">\r
        <div v-for="(log, index) in logs" :key="index" class="demo-node-svg__log-item">\r
          {{ log }}\r
        </div>\r
      </div>\r
    </div>\r
\r
    <!-- 画布容器 -->\r
    <div class="demo-node-svg__canvas">\r
      <FlowDesignerLayout\r
        mode="design"\r
        :before-graph-init="handleBeforeGraphInit"\r
        @ready="handleReady"\r
      >\r
        <!-- 自定义节点面板插槽 -->\r
        <template #palette="{ onStartDrag }">\r
          <div class="custom-palette">\r
            <div class="custom-palette__header">\r
              <h3 class="custom-palette__title">插槽 节点</h3>\r
              <span class="custom-palette__desc"></span>\r
            </div>\r
\r
            <div class="custom-palette__section">\r
              <div class="custom-palette__section-title">带图标的节点</div>\r
              <div\r
                v-for="nodeType in nodeTypesConfig"\r
                :key="nodeType.type"\r
                class="custom-palette__item"\r
                @mousedown="(e) => handleStartDrag(e, nodeType, onStartDrag)"\r
                :style="{ background: nodeType.rectFill, borderColor: nodeType.rectStroke}"\r
              >\r
                <div class="custom-palette__item-icon" >\r
                  <img :src="nodeType.icon" />\r
                </div>\r
                <div class="custom-palette__item-info">\r
                  <div class="custom-palette__item-label" :style="{ color: nodeType.textFill}">{{ nodeType.label }}</div>\r
                </div>\r
              </div>\r
\r
            </div>\r
\r
            <div class="custom-palette__tips">\r
              <div class="tips-title">💡 交互说明</div>\r
              <ul class="tips-list">\r
                <li><strong>Default:</strong> 白底 + 彩色图标</li>\r
                <li><strong>Hover:</strong> 淡色背景</li>\r
                <li><strong>Selected:</strong> 彩底 + 白色图标</li>\r
              </ul>\r
            </div>\r
          </div>\r
        </template>\r
\r
        <!-- node-type="slot-startNode" 的节点内容 -->\r
        <template #node-slot-startNode="{ node, graph, data, label, state }">\r
          <div style="width: 100%;height: 100%" data-cvn-root>\r
            <div class="node-start" :class="{ 'node-start--selected': state.value === 'selected' }">\r
              <div class="body">\r
                <img v-if="state.value !== 'selected'" :src="startSvg" />\r
                <img v-if="state.value === 'selected'" :src="startSvgHover" />\r
                <div class="info">\r
                  <div class="name">{{ label || '开始' }}</div>\r
                </div>\r
              </div>\r
            </div>\r
          </div>\r
\r
        </template>\r
\r
        <!-- node-type="slot-approvalNode" 的节点内容 -->\r
        <template #node-slot-approvalNode="{ node, graph, data, label, state }">\r
          <div style="width: 100%;height: 100%" data-cvn-root>\r
            <div class="node-approval" :class="{ 'node-approval--selected': state === 'selected' }">\r
              <div class="body">\r
                <img v-if="state !== 'selected'" :src="approvalSvg" />\r
                <img v-if="state === 'selected'" :src="approvalHoverSvg" />\r
                <div class="info">\r
                  <div class="name">{{ label || '开始' }}</div>\r
                </div>\r
              </div>\r
            </div>\r
          </div>\r
        </template>\r
\r
      </FlowDesignerLayout>\r
    </div>\r
  </div>\r
</template>\r
\r
<script setup lang="ts">\r
import { ref } from 'vue'\r
import { FlowDesignerLayout }  from '@quick-code/x6-flow-designer'\r
import type { FlowDesigner } from '@quick-code/x6-flow-designer'\r
import { Graph, Node } from '@antv/x6'\r
import StartNode from './components/StartNode.vue'\r
import ApproverNode from './components/ApproverNode.vue'\r
\r
\r
import startSvg from "./icons/start.svg";\r
import startSvgHover from "./icons/start-hover.svg";\r
\r
import approvalSvg from "./icons/approval.svg";\r
import approvalHoverSvg from "./icons/approval-hover.svg";\r
import {register} from "@antv/x6-vue-shape";\r
\r
\r
\r
const logs = ref<string[]>([])\r
\r
// 节点类型配置（包含颜色和 iconPath）\r
interface NodeTypeConfig {\r
  type: string\r
  label: string\r
  hint: string\r
  color: string\r
  hoverColor: string\r
  iconPath: string\r
  width: number\r
  height: number\r
}\r
\r
const nodeTypesConfig: any[] = [\r
  {\r
    type: 'slot-startNode',\r
    label: '开始节点',\r
    classNamePerfix: 'x6',\r
    width: 120,\r
    height: 38,\r
    rectStroke: '#95d375',\r
    rectStrokeWidth: 1,\r
    rectFill: '#edf8e7',\r
    icon: startSvg,\r
    iconHover: startSvgHover,\r
    textFill: '#81cb5c'\r
  },\r
  {\r
    type: 'slot-approvalNode',\r
    label: '审批节点',\r
    classNamePerfix: 'x6',\r
    width: 120,\r
    height: 38,\r
    rectStroke: '#83b3f7',\r
    rectStrokeWidth: 1,\r
    rectFill: '#e6eeff',\r
    icon: approvalSvg,\r
    iconHover: approvalHoverSvg,\r
    textFill: '#5d9df7'\r
  },\r
]\r
\r
const Ports = {\r
  groups: {\r
    top: {\r
      position: 'top',\r
      attrs: {\r
        circle: {\r
          r: 4,\r
          magnet: true,\r
          stroke: '#5F95FF',\r
          strokeWidth: 1,\r
          fill: '#fff',\r
          style: {\r
            visibility: 'hidden',\r
          },\r
        },\r
        label: {\r
          position: 'top',\r
        },\r
        text: {\r
          text: '',\r
          fill: '#ff5800',\r
        },\r
      },\r
    },\r
    right: {\r
      position: 'right',\r
      attrs: {\r
        circle: {\r
          r: 4,\r
          magnet: true,\r
          stroke: '#5F95FF',\r
          strokeWidth: 1,\r
          fill: '#fff',\r
          style: {\r
            visibility: 'hidden',\r
          },\r
        },\r
        label: {\r
          position: 'right',\r
        },\r
        text: {\r
          text: '',\r
          fill: '#ff5800',\r
        },\r
      },\r
    },\r
    bottom: {\r
      position: 'bottom',\r
      attrs: {\r
        circle: {\r
          r: 4,\r
          magnet: true,\r
          stroke: '#5F95FF',\r
          strokeWidth: 1,\r
          fill: '#fff',\r
          style: {\r
            visibility: 'hidden',\r
          },\r
        },\r
        label: {\r
          position: 'bottom',\r
        },\r
        text: {\r
          text: '',\r
          fill: '#ff5800',\r
        },\r
      },\r
    },\r
    left: {\r
      position: 'left',\r
      attrs: {\r
        circle: {\r
          r: 4,\r
          magnet: true,\r
          stroke: '#5F95FF',\r
          strokeWidth: 1,\r
          fill: '#fff',\r
          style: {\r
            visibility: 'hidden',\r
          },\r
        },\r
        label: {\r
          position: 'left',\r
        },\r
        text: {\r
          text: '',\r
          fill: '#ff5800',\r
        },\r
      },\r
    },\r
  },\r
  items: [\r
    {\r
      group: 'top',\r
      label: {\r
        position : 'top'\r
      }\r
    },\r
    {\r
      group: 'right',\r
      label: {\r
        position : 'right'\r
      }\r
    },\r
    {\r
      group: 'bottom',\r
      label: {\r
        position : 'bottom'\r
      }\r
    },\r
    {\r
      group: 'left',\r
      label: {\r
        position : 'left'\r
      }\r
    },\r
  ],\r
}\r
\r
\r
// 手动跟踪节点的选中状态（因为 X6 的 selection 可能有默认行为）\r
const selectedNodesMap = new Map<string, boolean>()\r
\r
function addLog(message: string) {\r
  const timestamp = new Date().toLocaleTimeString()\r
  logs.value.push(\`[\${timestamp}] \${message}\`)\r
}\r
\r
function clearLogs() {\r
  logs.value = []\r
}\r
/**\r
 * Graph 初始化前钩子：注册带 SVG icon 的自定义节点\r
 */\r
function handleBeforeGraphInit(options: FlowDesignerOptions) {\r
  addLog('🔧 beforeGraphInit: 开始注册 SVG 节点')\r
\r
\r
\r
  addLog('🎉 所有 插槽 节点注册完成')\r
}\r
\r
function handleReady(designer: FlowDesigner, graph: Graph) {\r
  addLog('✅ 画布初始化完成')\r
  addLog('💡 提示: 悬停查看 hover 效果，点击切换 selected 状态')\r
\r
\r
  // ─── 添加示例节点 ───────────────────────────────────────────────────\r
  setTimeout(() => {\r
    // 方式1：使用 data.nodeType（依赖 CommonVueNode 的 fallback 机制）\r
    const node1 = graph.addNode({\r
      shape: 'common-vue-node',\r
      'node-type': 'slot-startNode', // Vue 插槽名称，对应 <template #node-xxx>\r
      x: 120,\r
      y: 38,\r
      label: '开始节点',\r
      data: {}\r
    })\r
\r
    // 方式2：使用顶层 'node-type' 属性（推荐，更明确）\r
    // const node2 = graph.addNode({\r
    //   shape: 'common-vue-node',\r
    //   'node-type': 'slot-approvalNode',\r
    //   x: 120,\r
    //   y: 38,\r
    //   label: '审批节点 (测试响应式)',\r
    //   data: {}\r
    // })\r
\r
    addLog('📦 已添加 2 个示例节点（测试响应式 data）')\r
    addLog('🎨 试试悬停和点击节点吧！')\r
\r
  }, 100)\r
}\r
\r
function handleStartDrag(e: MouseEvent, nodeType: NodeTypeConfig, onStartDrag: any) {\r
  addLog(\`🎯 开始拖拽: \${nodeType.label}\`)\r
\r
  onStartDrag(e, {\r
    shape: 'common-vue-node',\r
    label: nodeType.label,\r
    width: nodeType.width,\r
    height: nodeType.height,\r
    'node-type': nodeType.type, // Vue 插槽名称，对应 <template #node-xxx>\r
    data: {\r
      //nodeType: nodeType.type,\r
    }\r
  })\r
}\r
<\/script>\r
\r
<style scoped>\r
.demo-node-svg {\r
  display: flex;\r
  height: 100%;\r
  min-height: 600px;\r
  gap: 16px;\r
}\r
\r
.demo-node-svg__log {\r
  width: 280px;\r
  border: 1px solid #e8e8e8;\r
  border-radius: 8px;\r
  padding: 16px;\r
  background: #fafafa;\r
  overflow: hidden;\r
  display: flex;\r
  flex-direction: column;\r
}\r
\r
.demo-node-svg__log-header {\r
  display: flex;\r
  justify-content: space-between;\r
  align-items: center;\r
  margin-bottom: 12px;\r
}\r
\r
.demo-node-svg__log h4 {\r
  margin: 0;\r
  font-size: 14px;\r
  color: #1a1a2e;\r
  font-weight: 600;\r
}\r
\r
.demo-node-svg__clear-btn {\r
  padding: 2px 8px;\r
  font-size: 12px;\r
  color: #666;\r
  background: #fff;\r
  border: 1px solid #d9d9d9;\r
  border-radius: 4px;\r
  cursor: pointer;\r
  transition: all 0.2s;\r
  user-select: none;\r
}\r
\r
.demo-node-svg__clear-btn:hover {\r
  color: #1890ff;\r
  border-color: #1890ff;\r
}\r
\r
.demo-node-svg__log-content {\r
  flex: 1;\r
  overflow-y: auto;\r
  font-size: 12px;\r
  line-height: 1.8;\r
}\r
\r
.demo-node-svg__log-item {\r
  padding: 4px 0;\r
  color: #555;\r
  font-family: 'Monaco', 'Menlo', 'Consolas', monospace;\r
  border-bottom: 1px solid #f0f0f0;\r
}\r
\r
.demo-node-svg__log-item:last-child {\r
  border-bottom: none;\r
}\r
\r
.demo-node-svg__canvas {\r
  flex: 1;\r
  border: 1px solid #e8e8e8;\r
  border-radius: 8px;\r
  overflow: hidden;\r
  background: #fff;\r
}\r
\r
/* ==================== 自定义节点面板样式 ==================== */\r
.custom-palette {\r
  display: flex;\r
  flex-direction: column;\r
  height: 100%;\r
  background: linear-gradient(to bottom, #f9fafb, #ffffff);\r
  border-right: 1px solid #e8e8e8;\r
  width: 200px;\r
}\r
\r
.custom-palette__header {\r
  padding: 16px;\r
  border-bottom: 2px solid #e8e8e8;\r
  background: #fff;\r
}\r
\r
.custom-palette__title {\r
  margin: 0 0 4px 0;\r
  font-size: 16px;\r
  font-weight: 600;\r
  color: #1a1a2e;\r
}\r
\r
.custom-palette__desc {\r
  font-size: 12px;\r
  color: #999;\r
}\r
\r
.custom-palette__section {\r
  padding: 12px;\r
}\r
\r
.custom-palette__section-title {\r
  font-size: 11px;\r
  font-weight: 600;\r
  color: #999;\r
  text-transform: uppercase;\r
  letter-spacing: 0.06em;\r
  margin-bottom: 8px;\r
  padding: 0 4px;\r
}\r
\r
.custom-palette__item {\r
  display: flex;\r
  align-items: center;\r
  gap: 12px;\r
  padding: 10px;\r
  margin-bottom: 8px;\r
  background: #fff;\r
  border: 1px solid #e8e8e8;\r
  border-radius: 12px;\r
  cursor: move;\r
  transition: all 0.2s;\r
  user-select: none;\r
  width: 160px;\r
  height: 50px;\r
}\r
\r
.custom-palette__item:hover {\r
  border-color: #1677ff;\r
  box-shadow: 0 2px 8px rgba(22, 119, 255, 0.15);\r
  transform: translateY(-1px);\r
}\r
\r
.custom-palette__item:active {\r
  transform: translateY(0);\r
  box-shadow: 0 1px 4px rgba(22, 119, 255, 0.2);\r
}\r
\r
.custom-palette__item-icon {\r
  width: 36px;\r
  height: 36px;\r
  display: flex;\r
  align-items: center;\r
  justify-content: center;\r
  border-radius: 6px;\r
  flex-shrink: 0;\r
}\r
\r
.custom-palette__item-info {\r
  flex: 1;\r
  min-width: 0;\r
}\r
\r
.custom-palette__item-label {\r
  font-size: 13px;\r
  font-weight: 500;\r
  color: #333;\r
  margin-bottom: 2px;\r
}\r
\r
.custom-palette__item-hint {\r
  font-size: 11px;\r
  color: #999;\r
  white-space: nowrap;\r
  overflow: hidden;\r
  text-overflow: ellipsis;\r
}\r
\r
/* ==================== 交互说明 ==================== */\r
.custom-palette__tips {\r
  margin-top: auto;\r
  padding: 12px;\r
  background: #fff9e6;\r
  border-top: 1px solid #ffe58f;\r
}\r
\r
.tips-title {\r
  font-size: 12px;\r
  font-weight: 600;\r
  color: #d48806;\r
  margin-bottom: 8px;\r
}\r
\r
.tips-list {\r
  margin: 0;\r
  padding-left: 16px;\r
  font-size: 11px;\r
  line-height: 1.8;\r
  color: #8c8c8c;\r
}\r
\r
.tips-list li {\r
  margin-bottom: 4px;\r
}\r
\r
.tips-list strong {\r
  color: #595959;\r
}\r
\r
\r
/* ==================== 自定义节点样式 ==================== */\r
.node-start {\r
  width: 120px;\r
  height: 38px;\r
  background: #fff;\r
  border: 1px solid #52c41a;\r
  border-radius: 8px; overflow: hidden;\r
  box-shadow: 0 2px 8px rgba(0,0,0,.08);\r
  display: flex; flex-direction: column;\r
  user-select: none;\r
  background: #edf8e7;\r
  transition: box-shadow 0.2s, border-color 0.2s;\r
}\r
.node-start:hover {\r
  border: 2px solid #52c41a;\r
  -background: #f1f5f1;\r
}\r
\r
.node-start .body { flex: 1; display: flex; align-items: center; padding: 0 12px; gap: 10px; }\r
.node-start .icon { font-size: 16px; color: #52c41a; }\r
.node-start .info { overflow: hidden; flex: 1; }\r
.node-start .name { font-size: 13px; color: #81cb5c; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; font-weight: 390}\r
\r
.node-start--selected {\r
  border: 2px solid #52c41a;\r
  background: #8fd16f;\r
  box-shadow: 0 0 0 3px rgba(245,34,45,0.15), 0 2px 8px rgba(0,0,0,.08);\r
}\r
.node-start--selected .name{\r
  color: white;\r
}\r
\r
\r
\r
.node-approval {\r
  width: 120px;\r
  height: 38px;\r
  background: #e6eeff;\r
  border: 1px solid #83b3f7;\r
  border-radius: 8px; overflow: hidden;\r
  box-shadow: 0 2px 8px rgba(0,0,0,.08);\r
  display: flex; flex-direction: column;\r
  user-select: none;\r
  transition: box-shadow 0.2s, border-color 0.2s;\r
}\r
.node-approval:hover {\r
  border: 2px solid #83b3f7;\r
  -background: #f1f5f1;\r
}\r
\r
.node-approval .body { flex: 1; display: flex; align-items: center; padding: 0 12px; gap: 10px; }\r
.node-approval .info { overflow: hidden; flex: 1; }\r
.node-approval .name { font-size: 13px; color: #5d9df7; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; font-weight: 390}\r
\r
.node-approval--selected {\r
  border: 2px solid #003eca;\r
  background: #1d78f4;\r
  box-shadow: 0 0 0 3px rgba(245,34,45,0.15), 0 2px 8px rgba(0,0,0,.08);\r
}\r
.node-approval--selected .name{\r
  color: white;\r
}\r
\r
</style>\r
\r
`,Yc={class:"demo-node-svg"},Xc={class:"demo-node-svg__log"},Jc={class:"demo-node-svg__log-content"},Kc={class:"demo-node-svg__canvas"},Qc={class:"custom-palette"},np={class:"custom-palette__section"},ep=["onMousedown"],rp={class:"custom-palette__item-icon"},tp=["src"],op={class:"custom-palette__item-info"},sp=["onMousedown"],lp={class:"custom-palette__item-icon"},ip=["src"],ap=G({__name:"demo-edge-svg",setup(T){const v=S([]),a=[{type:"svg-start-node",label:"开始节点",classNamePerfix:"x6",width:120,height:38,rectStroke:"#95d375",rectStrokeWidth:1,rectFill:"#edf8e7",icon:mn,iconHover:un,textFill:"#81cb5c"},{type:"svg-approval-node",label:"审批节点",classNamePerfix:"x6",width:120,height:38,rectStroke:"#83b3f7",rectStrokeWidth:1,rectFill:"#e6eeff",icon:hn,iconHover:bn,textFill:"#5d9df7"}],c={groups:{top:{position:"top",attrs:{circle:{r:4,magnet:!0,stroke:"#5F95FF",strokeWidth:1,fill:"#fff",style:{visibility:"hidden"}},label:{position:"top"},text:{text:"",fill:"#ff5800"}}},right:{position:"right",attrs:{circle:{r:4,magnet:!0,stroke:"#5F95FF",strokeWidth:1,fill:"#fff",style:{visibility:"hidden"}},label:{position:"right"},text:{text:"",fill:"#ff5800"}}},bottom:{position:"bottom",attrs:{circle:{r:4,magnet:!0,stroke:"#5F95FF",strokeWidth:1,fill:"#fff",style:{visibility:"hidden"}},label:{position:"bottom"},text:{text:"",fill:"#ff5800"}}},left:{position:"left",attrs:{circle:{r:4,magnet:!0,stroke:"#5F95FF",strokeWidth:1,fill:"#fff",style:{visibility:"hidden"}},label:{position:"left"},text:{text:"",fill:"#ff5800"}}}},items:[{id:"port-top",group:"top",label:{position:"top"}},{id:"port-right",group:"right",label:{position:"right"}},{id:"port-bottom",group:"bottom",label:{position:"bottom"}},{id:"port-left",group:"left",label:{position:"left"}}]};function l(t){const e=new Date().toLocaleTimeString();v.value.push(`[${e}] ${t}`)}function g(){v.value=[]}function x(t){l("🔧 beforeGraphInit: 开始注册 SVG 节点"),a.forEach(e=>{J.registerNode(e.type,{inherit:"rect",width:e.width,height:e.height,markup:[{tagName:"rect",selector:"body",className:e.classNamePerfix+"-"+e.type+"-body"},{tagName:"image",selector:"icon",className:e.classNamePerfix+"-"+e.type+"-image"},{tagName:"image",selector:"iconHover",className:e.classNamePerfix+"-"+e.type+"-imageHover"},{tagName:"text",selector:"label",className:e.classNamePerfix+"-"+e.type+"-label"}],attrs:{body:{stroke:e.rectStroke,strokeWidth:e.rectStrokeWidth,fill:e.rectFill,rx:10,ry:10},icon:{"xlink:href":e.icon,width:20,height:20,x:12,y:8},iconHover:{"xlink:href":e.iconHover,width:20,height:20,x:12,y:8,display:"none"},text:{fontSize:12,fill:e.textFill}},ports:{...c}},!0),l(`✅ 已注册节点: ${e.type} (${e.label})`)}),J.registerNode("svg-condition-node",{inherit:"polygon",width:132,height:72,markup:[{tagName:"polygon",selector:"body",className:"x6-svg-condition-node-body"},{tagName:"text",selector:"label",className:"x6-svg-condition-node-label"},{tagName:"image",selector:"icon",className:"x6-svg-condition-node-image"},{tagName:"image",selector:"iconHover",className:"x6-svg-condition-node-imageHover"}],attrs:{body:{strokeWidth:1,stroke:"#fdc059",fill:"#ffeed1",refPoints:"0,20 20,0 40,20 20,40"},text:{fontSize:12,fill:"#ffb02a",y:8},icon:{"xlink:href":Nn,width:20,height:20,x:56,y:8},iconHover:{"xlink:href":Zn,width:20,height:20,x:56,y:8,display:"none"}},ports:{...c,items:[{group:"top"},{group:"bottom"}]}},!0),l("🎉 所有 SVG 节点注册完成"),l("🔧 开始注册自定义边"),J.registerEdge("gradient-flow-edge",{inherit:"edge",attrs:{line:{stroke:"#1890ff",strokeWidth:3,targetMarker:{name:"block",width:12,height:8},strokeDasharray:5,style:{animation:"ant-line 30s infinite linear"}}}},!0),J.registerEdge("rainbow-edge",{inherit:"edge",attrs:{line:{stroke:{type:"linearGradient",stops:[{offset:"0%",color:"#667eea"},{offset:"50%",color:"#764ba2"},{offset:"100%",color:"#f093fb"}]},strokeWidth:4,targetMarker:{name:"classic",fill:"#f093fb",stroke:"#f093fb"}}}},!0),J.registerEdge("glow-edge",{inherit:"edge",attrs:{line:{stroke:"#52c41a",strokeWidth:3,targetMarker:{name:"block",fill:"#52c41a",stroke:"#52c41a",width:10,height:8},filter:{name:"dropShadow",args:{dx:0,dy:0,blur:8,color:"#52c41a"}}}}},!0),J.registerEdge("thick-arrow-edge",{inherit:"edge",attrs:{line:{stroke:"#ff4d4f",strokeWidth:5,targetMarker:{name:"block",fill:"#ff4d4f",stroke:"#ff4d4f",width:16,height:12}}}},!0),l("✨ 自定义边注册完成")}function s(t,e){l("✅ 画布初始化完成"),l("💡 提示: 悬停查看 hover 效果，点击切换 selected 状态"),setTimeout(()=>{e.addNode({shape:"svg-start-node",x:100,y:80,label:"开始",id:"node-1"}),e.addNode({shape:"svg-approval-node",x:300,y:80,label:"审批",id:"node-2"}),e.addNode({shape:"svg-start-node",x:100,y:200,label:"节点A",id:"node-3"}),e.addNode({shape:"svg-approval-node",x:300,y:200,label:"节点B",id:"node-4"}),e.addNode({shape:"svg-start-node",x:100,y:320,label:"任务1",id:"node-5"}),e.addNode({shape:"svg-approval-node",x:300,y:320,label:"任务2",id:"node-6"}),e.addNode({shape:"svg-start-node",x:100,y:440,label:"步骤X",id:"node-7"}),e.addNode({shape:"svg-approval-node",x:300,y:440,label:"步骤Y",id:"node-8"}),setTimeout(()=>{e.addEdge({shape:"gradient-flow-edge",source:{cell:"node-1",port:"port-right"},target:{cell:"node-2",port:"port-left"},label:"流动边",attrs:{line:{stroke:"#1890ff"}}}),l("➡️ 添加流动边（蚂蚁线动画）"),e.addEdge({shape:"rainbow-edge",source:{cell:"node-3",port:"port-right"},target:{cell:"node-4",port:"port-left"},label:"渐变边"}),l("🌈 添加渐变色边"),e.addEdge({shape:"glow-edge",source:{cell:"node-5",port:"port-right"},target:{cell:"node-6",port:"port-left"},label:"发光边"}),l("✨ 添加发光边"),e.addEdge({shape:"thick-arrow-edge",source:{cell:"node-7",port:"port-right"},target:{cell:"node-8",port:"port-left"},label:"粗箭头"}),l("🎯 添加粗箭头边"),l("📦 已添加 8 个节点和 4 种自定义边"),l("🎨 试试悬停和点击边吧！")},300)},100)}function o(t,e,i){l(`🎯 开始拖拽: ${e.label}`),i(t,{shape:e.type,label:e.label,width:e.width,height:e.height,data:{label:e.label,nodeInfo:{hint:e.hint,color:e.color}}})}return(t,e)=>(h(),b("div",Yc,[n("div",Xc,[n("div",{class:"demo-node-svg__log-header"},[e[0]||(e[0]=n("h4",null,"事件日志",-1)),n("button",{class:"demo-node-svg__clear-btn",onClick:g,title:"清除日志"}," 清除 ")]),n("div",Jc,[(h(!0),b(O,null,H(v.value,(i,r)=>(h(),b("div",{key:r,class:"demo-node-svg__log-item"},D(i),1))),128))])]),n("div",Kc,[f(F(V),{mode:"design","before-graph-init":x,onReady:s},{palette:E(({onStartDrag:i})=>[n("div",Qc,[e[3]||(e[3]=n("div",{class:"custom-palette__header"},[n("h3",{class:"custom-palette__title"},"SVG 节点"),n("span",{class:"custom-palette__desc"},"三种状态切换")],-1)),n("div",np,[e[2]||(e[2]=n("div",{class:"custom-palette__section-title"},"带图标的节点",-1)),(h(),b(O,null,H(a,r=>n("div",{key:r.type,class:"custom-palette__item",onMousedown:p=>o(p,r,i),style:rn({background:r.rectFill,borderColor:r.rectStroke})},[n("div",rp,[n("img",{src:r.icon},null,8,tp)]),n("div",op,[n("div",{class:"custom-palette__item-label",style:rn({color:r.textFill})},D(r.label),5)])],44,ep)),64)),n("div",{key:"svg-condition-node",class:"custom-palette__item",onMousedown:r=>o(r,{type:"svg-condition-node",label:"条件分支",width:132,height:72},i),style:{background:"#ffeed1",borderColor:"#fdc059"}},[n("div",lp,[n("img",{src:F(Nn)},null,8,ip)]),e[1]||(e[1]=n("div",{class:"custom-palette__item-info"},[n("div",{class:"custom-palette__item-label",style:{color:"#ffb02a"}},"条件分支")],-1))],40,sp)]),e[4]||(e[4]=n("div",{class:"custom-palette__tips"},[n("div",{class:"tips-title"},"💡 交互说明"),n("ul",{class:"tips-list"},[n("li",null,[n("strong",null,"Default:"),P(" 白底 + 彩色图标")]),n("li",null,[n("strong",null,"Hover:"),P(" 淡色背景")]),n("li",null,[n("strong",null,"Selected:"),P(" 彩底 + 白色图标")])])],-1))])]),_:1})])]))}}),dp=U(ap,[["__scopeId","data-v-f54e612e"]]),cp=`<template>\r
  <div class="demo-node-svg">\r
    <!-- 事件日志面板 -->\r
    <div class="demo-node-svg__log">\r
      <div class="demo-node-svg__log-header">\r
        <h4>事件日志</h4>\r
        <button class="demo-node-svg__clear-btn" @click="clearLogs" title="清除日志">\r
          清除\r
        </button>\r
      </div>\r
      <div class="demo-node-svg__log-content">\r
        <div v-for="(log, index) in logs" :key="index" class="demo-node-svg__log-item">\r
          {{ log }}\r
        </div>\r
      </div>\r
    </div>\r
\r
    <!-- 画布容器 -->\r
    <div class="demo-node-svg__canvas">\r
      <FlowDesignerLayout\r
        mode="design"\r
        :before-graph-init="handleBeforeGraphInit"\r
        @ready="handleReady"\r
      >\r
        <!-- 自定义节点面板插槽 -->\r
        <template #palette="{ onStartDrag }">\r
          <div class="custom-palette">\r
            <div class="custom-palette__header">\r
              <h3 class="custom-palette__title">SVG 节点</h3>\r
              <span class="custom-palette__desc">三种状态切换</span>\r
            </div>\r
\r
            <div class="custom-palette__section">\r
              <div class="custom-palette__section-title">带图标的节点</div>\r
              <div\r
                v-for="nodeType in nodeTypesConfig"\r
                :key="nodeType.type"\r
                class="custom-palette__item"\r
                @mousedown="(e) => handleStartDrag(e, nodeType, onStartDrag)"\r
                :style="{ background: nodeType.rectFill, borderColor: nodeType.rectStroke}"\r
              >\r
                <div class="custom-palette__item-icon" >\r
                  <img :src="nodeType.icon" />\r
                </div>\r
                <div class="custom-palette__item-info">\r
                  <div class="custom-palette__item-label" :style="{ color: nodeType.textFill}">{{ nodeType.label }}</div>\r
                </div>\r
              </div>\r
\r
              <div\r
                  key="svg-condition-node"\r
                  class="custom-palette__item"\r
                  @mousedown="(e) => handleStartDrag(e, {\r
                    type:'svg-condition-node',\r
                    label:'条件分支',\r
                    width: 132,\r
                    height: 72,\r
                    }, onStartDrag)"\r
                  :style="{ background: '#ffeed1', borderColor: '#fdc059'}"\r
              >\r
                <div class="custom-palette__item-icon" >\r
                  <img :src="conditionSvg" />\r
                </div>\r
                <div class="custom-palette__item-info">\r
                  <div class="custom-palette__item-label" :style="{ color: '#ffb02a'}">条件分支</div>\r
                </div>\r
              </div>\r
\r
            </div>\r
\r
            <div class="custom-palette__tips">\r
              <div class="tips-title">💡 交互说明</div>\r
              <ul class="tips-list">\r
                <li><strong>Default:</strong> 白底 + 彩色图标</li>\r
                <li><strong>Hover:</strong> 淡色背景</li>\r
                <li><strong>Selected:</strong> 彩底 + 白色图标</li>\r
              </ul>\r
            </div>\r
          </div>\r
        </template>\r
      </FlowDesignerLayout>\r
    </div>\r
  </div>\r
</template>\r
\r
<script setup lang="ts">\r
import { ref } from 'vue'\r
import { FlowDesignerLayout }  from '@quick-code/x6-flow-designer'\r
import type { FlowDesigner } from '@quick-code/x6-flow-designer'\r
import { Graph, Node } from '@antv/x6'\r
\r
\r
import startSvg from "./icons/start.svg";\r
import startHover from "./icons/start-hover.svg";\r
\r
import approvalSvg from "./icons/approval.svg";\r
import approvalHoverSvg from "./icons/approval-hover.svg";\r
\r
import conditionSvg from "./icons/condition.svg";\r
import conditionHoverSvg from "./icons/condition-hover.svg";\r
\r
const logs = ref<string[]>([])\r
\r
// 节点类型配置（包含颜色和 iconPath）\r
interface NodeTypeConfig {\r
  type: string\r
  label: string\r
  hint: string\r
  color: string\r
  hoverColor: string\r
  iconPath: string\r
  width: number\r
  height: number\r
}\r
\r
const nodeTypesConfig: any[] = [\r
  {\r
    type: 'svg-start-node',\r
    label: '开始节点',\r
    classNamePerfix: 'x6',\r
    width: 120,\r
    height: 38,\r
    rectStroke: '#95d375',\r
    rectStrokeWidth: 1,\r
    rectFill: '#edf8e7',\r
    icon: startSvg,\r
    iconHover: startHover,\r
    textFill: '#81cb5c'\r
  },\r
  {\r
    type: 'svg-approval-node',\r
    label: '审批节点',\r
    classNamePerfix: 'x6',\r
    width: 120,\r
    height: 38,\r
    rectStroke: '#83b3f7',\r
    rectStrokeWidth: 1,\r
    rectFill: '#e6eeff',\r
    icon: approvalSvg,\r
    iconHover: approvalHoverSvg,\r
    textFill: '#5d9df7'\r
  },\r
]\r
\r
const Ports = {\r
  groups: {\r
    top: {\r
      position: 'top',\r
      attrs: {\r
        circle: {\r
          r: 4,\r
          magnet: true,\r
          stroke: '#5F95FF',\r
          strokeWidth: 1,\r
          fill: '#fff',\r
          style: {\r
            visibility: 'hidden',\r
          },\r
        },\r
        label: {\r
          position: 'top',\r
        },\r
        text: {\r
          text: '',\r
          fill: '#ff5800',\r
        },\r
      },\r
    },\r
    right: {\r
      position: 'right',\r
      attrs: {\r
        circle: {\r
          r: 4,\r
          magnet: true,\r
          stroke: '#5F95FF',\r
          strokeWidth: 1,\r
          fill: '#fff',\r
          style: {\r
            visibility: 'hidden',\r
          },\r
        },\r
        label: {\r
          position: 'right',\r
        },\r
        text: {\r
          text: '',\r
          fill: '#ff5800',\r
        },\r
      },\r
    },\r
    bottom: {\r
      position: 'bottom',\r
      attrs: {\r
        circle: {\r
          r: 4,\r
          magnet: true,\r
          stroke: '#5F95FF',\r
          strokeWidth: 1,\r
          fill: '#fff',\r
          style: {\r
            visibility: 'hidden',\r
          },\r
        },\r
        label: {\r
          position: 'bottom',\r
        },\r
        text: {\r
          text: '',\r
          fill: '#ff5800',\r
        },\r
      },\r
    },\r
    left: {\r
      position: 'left',\r
      attrs: {\r
        circle: {\r
          r: 4,\r
          magnet: true,\r
          stroke: '#5F95FF',\r
          strokeWidth: 1,\r
          fill: '#fff',\r
          style: {\r
            visibility: 'hidden',\r
          },\r
        },\r
        label: {\r
          position: 'left',\r
        },\r
        text: {\r
          text: '',\r
          fill: '#ff5800',\r
        },\r
      },\r
    },\r
  },\r
  items: [\r
    {\r
      id: 'port-top',\r
      group: 'top',\r
      label: {\r
        position : 'top'\r
      }\r
    },\r
    {\r
      id: 'port-right',\r
      group: 'right',\r
      label: {\r
        position : 'right'\r
      }\r
    },\r
    {\r
      id: 'port-bottom',\r
      group: 'bottom',\r
      label: {\r
        position : 'bottom'\r
      }\r
    },\r
    {\r
      id: 'port-left',\r
      group: 'left',\r
      label: {\r
        position : 'left'\r
      }\r
    },\r
  ],\r
}\r
\r
\r
// 手动跟踪节点的选中状态（因为 X6 的 selection 可能有默认行为）\r
const selectedNodesMap = new Map<string, boolean>()\r
\r
function addLog(message: string) {\r
  const timestamp = new Date().toLocaleTimeString()\r
  logs.value.push(\`[\${timestamp}] \${message}\`)\r
}\r
\r
function clearLogs() {\r
  logs.value = []\r
}\r
\r
\r
\r
/**\r
 * Graph 初始化前钩子：注册带 SVG icon 的自定义节点\r
 */\r
function handleBeforeGraphInit(options: FlowDesignerOptions) {\r
  addLog('🔧 beforeGraphInit: 开始注册 SVG 节点')\r
\r
  // 遍历配置，注册所有节点\r
  nodeTypesConfig.forEach((config) => {\r
    Graph.registerNode(\r
        config.type,\r
        {\r
          inherit: 'rect',\r
          width: config.width,\r
          height: config.height,\r
          markup: [\r
            {\r
              tagName: 'rect', // 标签名称\r
              selector: 'body', // 选择器\r
              className: config.classNamePerfix + '-' + config.type + '-' + 'body'\r
            },\r
            {\r
              tagName: 'image',\r
              selector: 'icon',\r
              className: config.classNamePerfix + '-' + config.type + '-' + 'image'\r
            },\r
            {\r
              tagName: 'image',\r
              selector: 'iconHover',\r
              className: config.classNamePerfix + '-' + config.type + '-' + 'imageHover'\r
            },\r
            {\r
              tagName: 'text',\r
              selector: 'label',\r
              className: config.classNamePerfix + '-' + config.type + '-' + 'label'\r
            },\r
          ],\r
          attrs: {\r
            body: {\r
              stroke: config.rectStroke,\r
              strokeWidth: config.rectStrokeWidth,\r
              fill: config.rectFill,\r
              rx: 10,\r
              ry: 10,\r
            },\r
            icon: {\r
              'xlink:href': config.icon,\r
              width: 20,\r
              height: 20,\r
              x: 12,\r
              y: 8,\r
            },\r
            iconHover: {\r
              'xlink:href': config.iconHover,\r
              width: 20,\r
              height: 20,\r
              x: 12,\r
              y: 8,\r
              display: 'none'\r
            },\r
            text: {\r
              fontSize: 12,\r
              fill: config.textFill,\r
            },\r
          },\r
          ports: { ...Ports },\r
        },\r
        true,\r
    );\r
\r
    addLog(\`✅ 已注册节点: \${config.type} (\${config.label})\`)\r
  })  // ✅ 修复：forEach 的回调函数结束\r
\r
  Graph.registerNode(\r
      //'custom-polygon',\r
      'svg-condition-node',\r
      {\r
        inherit: 'polygon',\r
        width: 132,\r
        height: 72,\r
        markup: [\r
          {\r
            tagName: 'polygon', // 标签名称\r
            selector: 'body', // 选择器\r
            className: 'x6-svg-condition-node-body'\r
          },\r
          {\r
            tagName: 'text',\r
            selector: 'label',\r
            className: 'x6-svg-condition-node-label'\r
          },\r
          {\r
            tagName: 'image',\r
            selector: 'icon',\r
            className: 'x6-svg-condition-node-image'\r
          },\r
          {\r
            tagName: 'image',\r
            selector: 'iconHover',\r
            className: 'x6-svg-condition-node-imageHover'\r
          },\r
        ],\r
        attrs: {\r
          body: {\r
            strokeWidth: 1,\r
            stroke: '#fdc059',\r
            fill: '#ffeed1',\r
            refPoints: '0,20 20,0 40,20 20,40',\r
          },\r
          text: {\r
            fontSize: 12,\r
            fill: '#ffb02a',\r
            y:8\r
          },\r
          icon: {\r
            'xlink:href': conditionSvg,\r
            width: 20,\r
            height: 20,\r
            x: 56,\r
            y: 8,\r
          },\r
          iconHover: {\r
            'xlink:href': conditionHoverSvg,\r
            width: 20,\r
            height: 20,\r
            x: 56,\r
            y: 8,\r
            display: 'none'\r
          },\r
        },\r
        ports: {\r
          ...Ports,\r
          items: [\r
            {\r
              group: 'top',\r
            },\r
            {\r
              group: 'bottom',\r
            },\r
          ],\r
        },\r
      },\r
      true,\r
  );\r
\r
  addLog('🎉 所有 SVG 节点注册完成')\r
\r
  // ─── 注册自定义边：渐变流动边 ────────────────────────────────────────────\r
  addLog('🔧 开始注册自定义边')\r
\r
  Graph.registerEdge(\r
    'gradient-flow-edge',\r
    {\r
      inherit: 'edge',\r
      attrs: {\r
        line: {\r
          stroke: '#1890ff',\r
          strokeWidth: 3,\r
          targetMarker: {\r
            name: 'block',\r
            width: 12,\r
            height: 8,\r
          },\r
          strokeDasharray: 5,\r
          style: {\r
            animation: 'ant-line 30s infinite linear',\r
          },\r
        },\r
      },\r
    },\r
    true\r
  )\r
\r
  // 注册渐变色边\r
  Graph.registerEdge(\r
    'rainbow-edge',\r
    {\r
      inherit: 'edge',\r
      attrs: {\r
        line: {\r
          stroke: {\r
            type: 'linearGradient',\r
            stops: [\r
              { offset: '0%', color: '#667eea' },\r
              { offset: '50%', color: '#764ba2' },\r
              { offset: '100%', color: '#f093fb' },\r
            ],\r
          },\r
          strokeWidth: 4,\r
          targetMarker: {\r
            name: 'classic',\r
            fill: '#f093fb',\r
            stroke: '#f093fb',\r
          },\r
        },\r
      },\r
    },\r
    true\r
  )\r
\r
  // 注册发光边\r
  Graph.registerEdge(\r
    'glow-edge',\r
    {\r
      inherit: 'edge',\r
      attrs: {\r
        line: {\r
          stroke: '#52c41a',\r
          strokeWidth: 3,\r
          targetMarker: {\r
            name: 'block',\r
            fill: '#52c41a',\r
            stroke: '#52c41a',\r
            width: 10,\r
            height: 8,\r
          },\r
          filter: {\r
            name: 'dropShadow',\r
            args: {\r
              dx: 0,\r
              dy: 0,\r
              blur: 8,\r
              color: '#52c41a',\r
            },\r
          },\r
        },\r
      },\r
    },\r
    true\r
  )\r
\r
  // 注册粗箭头边\r
  Graph.registerEdge(\r
    'thick-arrow-edge',\r
    {\r
      inherit: 'edge',\r
      attrs: {\r
        line: {\r
          stroke: '#ff4d4f',\r
          strokeWidth: 5,\r
          targetMarker: {\r
            name: 'block',\r
            fill: '#ff4d4f',\r
            stroke: '#ff4d4f',\r
            width: 16,\r
            height: 12,\r
          },\r
        },\r
      },\r
    },\r
    true\r
  )\r
\r
  addLog('✨ 自定义边注册完成')\r
}\r
\r
function handleReady(designer: FlowDesigner, graph: Graph) {\r
  addLog('✅ 画布初始化完成')\r
  addLog('💡 提示: 悬停查看 hover 效果，点击切换 selected 状态')\r
\r
\r
  // ─── 添加示例节点和边 ───────────────────────────────────────────────────\r
  setTimeout(() => {\r
    // 第一行：流动边\r
    const node1 = graph.addNode({\r
      shape: 'svg-start-node',\r
      x: 100,\r
      y: 80,\r
      label: '开始',\r
      id: 'node-1',\r
    })\r
\r
    const node2 = graph.addNode({\r
      shape: 'svg-approval-node',\r
      x: 300,\r
      y: 80,\r
      label: '审批',\r
      id: 'node-2',\r
    })\r
\r
    // 第二行：渐变色边\r
    const node3 = graph.addNode({\r
      shape: 'svg-start-node',\r
      x: 100,\r
      y: 200,\r
      label: '节点A',\r
      id: 'node-3',\r
    })\r
\r
    const node4 = graph.addNode({\r
      shape: 'svg-approval-node',\r
      x: 300,\r
      y: 200,\r
      label: '节点B',\r
      id: 'node-4',\r
    })\r
\r
    // 第三行：发光边\r
    const node5 = graph.addNode({\r
      shape: 'svg-start-node',\r
      x: 100,\r
      y: 320,\r
      label: '任务1',\r
      id: 'node-5',\r
    })\r
\r
    const node6 = graph.addNode({\r
      shape: 'svg-approval-node',\r
      x: 300,\r
      y: 320,\r
      label: '任务2',\r
      id: 'node-6',\r
    })\r
\r
    // 第四行：粗箭头边\r
    const node7 = graph.addNode({\r
      shape: 'svg-start-node',\r
      x: 100,\r
      y: 440,\r
      label: '步骤X',\r
      id: 'node-7',\r
    })\r
\r
    const node8 = graph.addNode({\r
      shape: 'svg-approval-node',\r
      x: 300,\r
      y: 440,\r
      label: '步骤Y',\r
      id: 'node-8',\r
    })\r
\r
    // 添加自定义边\r
    setTimeout(() => {\r
      // 1. 流动边（蚂蚁线）- 从右侧端口到左侧端口\r
      graph.addEdge({\r
        shape: 'gradient-flow-edge',\r
        source: {\r
          cell: 'node-1',\r
          port: 'port-right',  // 从 node-1 的右侧端口出发\r
        },\r
        target: {\r
          cell: 'node-2',\r
          port: 'port-left',   // 连接到 node-2 的左侧端口\r
        },\r
        label: '流动边',\r
        attrs: {\r
          line: {\r
            stroke: '#1890ff',\r
          },\r
        },\r
      })\r
      addLog('➡️ 添加流动边（蚂蚁线动画）')\r
\r
      // 2. 渐变色边 - 从右侧端口到左侧端口\r
      graph.addEdge({\r
        shape: 'rainbow-edge',\r
        source: {\r
          cell: 'node-3',\r
          port: 'port-right',\r
        },\r
        target: {\r
          cell: 'node-4',\r
          port: 'port-left',\r
        },\r
        label: '渐变边',\r
      })\r
      addLog('🌈 添加渐变色边')\r
\r
      // 3. 发光边 - 从右侧端口到左侧端口\r
      graph.addEdge({\r
        shape: 'glow-edge',\r
        source: {\r
          cell: 'node-5',\r
          port: 'port-right',\r
        },\r
        target: {\r
          cell: 'node-6',\r
          port: 'port-left',\r
        },\r
        label: '发光边',\r
      })\r
      addLog('✨ 添加发光边')\r
\r
      // 4. 粗箭头边 - 从右侧端口到左侧端口\r
      graph.addEdge({\r
        shape: 'thick-arrow-edge',\r
        source: {\r
          cell: 'node-7',\r
          port: 'port-right',\r
        },\r
        target: {\r
          cell: 'node-8',\r
          port: 'port-left',\r
        },\r
        label: '粗箭头',\r
      })\r
      addLog('🎯 添加粗箭头边')\r
\r
      addLog('📦 已添加 8 个节点和 4 种自定义边')\r
      addLog('🎨 试试悬停和点击边吧！')\r
    }, 300)\r
  }, 100)\r
}\r
\r
function handleStartDrag(e: MouseEvent, nodeType: NodeTypeConfig, onStartDrag: any) {\r
  addLog(\`🎯 开始拖拽: \${nodeType.label}\`)\r
\r
  onStartDrag(e, {\r
    shape: nodeType.type,\r
    label: nodeType.label,\r
    width: nodeType.width,\r
    height: nodeType.height,\r
    data: {\r
      label: nodeType.label,\r
      nodeInfo: {\r
        hint: nodeType.hint,\r
        color: nodeType.color,\r
      }\r
    }\r
  })\r
}\r
<\/script>\r
\r
<style scoped>\r
.demo-node-svg {\r
  display: flex;\r
  height: 100%;\r
  min-height: 600px;\r
  gap: 16px;\r
}\r
\r
.demo-node-svg__log {\r
  width: 280px;\r
  border: 1px solid #e8e8e8;\r
  border-radius: 8px;\r
  padding: 16px;\r
  background: #fafafa;\r
  overflow: hidden;\r
  display: flex;\r
  flex-direction: column;\r
}\r
\r
.demo-node-svg__log-header {\r
  display: flex;\r
  justify-content: space-between;\r
  align-items: center;\r
  margin-bottom: 12px;\r
}\r
\r
.demo-node-svg__log h4 {\r
  margin: 0;\r
  font-size: 14px;\r
  color: #1a1a2e;\r
  font-weight: 600;\r
}\r
\r
.demo-node-svg__clear-btn {\r
  padding: 2px 8px;\r
  font-size: 12px;\r
  color: #666;\r
  background: #fff;\r
  border: 1px solid #d9d9d9;\r
  border-radius: 4px;\r
  cursor: pointer;\r
  transition: all 0.2s;\r
  user-select: none;\r
}\r
\r
.demo-node-svg__clear-btn:hover {\r
  color: #1890ff;\r
  border-color: #1890ff;\r
}\r
\r
.demo-node-svg__log-content {\r
  flex: 1;\r
  overflow-y: auto;\r
  font-size: 12px;\r
  line-height: 1.8;\r
}\r
\r
.demo-node-svg__log-item {\r
  padding: 4px 0;\r
  color: #555;\r
  font-family: 'Monaco', 'Menlo', 'Consolas', monospace;\r
  border-bottom: 1px solid #f0f0f0;\r
}\r
\r
.demo-node-svg__log-item:last-child {\r
  border-bottom: none;\r
}\r
\r
.demo-node-svg__canvas {\r
  flex: 1;\r
  border: 1px solid #e8e8e8;\r
  border-radius: 8px;\r
  overflow: hidden;\r
  background: #fff;\r
}\r
\r
/* ==================== 自定义节点面板样式 ==================== */\r
.custom-palette {\r
  display: flex;\r
  flex-direction: column;\r
  height: 100%;\r
  background: linear-gradient(to bottom, #f9fafb, #ffffff);\r
  border-right: 1px solid #e8e8e8;\r
  width: 200px;\r
}\r
\r
.custom-palette__header {\r
  padding: 16px;\r
  border-bottom: 2px solid #e8e8e8;\r
  background: #fff;\r
}\r
\r
.custom-palette__title {\r
  margin: 0 0 4px 0;\r
  font-size: 16px;\r
  font-weight: 600;\r
  color: #1a1a2e;\r
}\r
\r
.custom-palette__desc {\r
  font-size: 12px;\r
  color: #999;\r
}\r
\r
.custom-palette__section {\r
  padding: 12px;\r
}\r
\r
.custom-palette__section-title {\r
  font-size: 11px;\r
  font-weight: 600;\r
  color: #999;\r
  text-transform: uppercase;\r
  letter-spacing: 0.06em;\r
  margin-bottom: 8px;\r
  padding: 0 4px;\r
}\r
\r
.custom-palette__item {\r
  display: flex;\r
  align-items: center;\r
  gap: 12px;\r
  padding: 10px;\r
  margin-bottom: 8px;\r
  background: #fff;\r
  border: 1px solid #e8e8e8;\r
  border-radius: 12px;\r
  cursor: move;\r
  transition: all 0.2s;\r
  user-select: none;\r
  width: 160px;\r
  height: 50px;\r
}\r
\r
.custom-palette__item:hover {\r
  border-color: #1677ff;\r
  box-shadow: 0 2px 8px rgba(22, 119, 255, 0.15);\r
  transform: translateY(-1px);\r
}\r
\r
.custom-palette__item:active {\r
  transform: translateY(0);\r
  box-shadow: 0 1px 4px rgba(22, 119, 255, 0.2);\r
}\r
\r
.custom-palette__item-icon {\r
  width: 36px;\r
  height: 36px;\r
  display: flex;\r
  align-items: center;\r
  justify-content: center;\r
  border-radius: 6px;\r
  flex-shrink: 0;\r
}\r
\r
.custom-palette__item-info {\r
  flex: 1;\r
  min-width: 0;\r
}\r
\r
.custom-palette__item-label {\r
  font-size: 13px;\r
  font-weight: 500;\r
  color: #333;\r
  margin-bottom: 2px;\r
}\r
\r
.custom-palette__item-hint {\r
  font-size: 11px;\r
  color: #999;\r
  white-space: nowrap;\r
  overflow: hidden;\r
  text-overflow: ellipsis;\r
}\r
\r
/* ==================== 交互说明 ==================== */\r
.custom-palette__tips {\r
  margin-top: auto;\r
  padding: 12px;\r
  background: #fff9e6;\r
  border-top: 1px solid #ffe58f;\r
}\r
\r
.tips-title {\r
  font-size: 12px;\r
  font-weight: 600;\r
  color: #d48806;\r
  margin-bottom: 8px;\r
}\r
\r
.tips-list {\r
  margin: 0;\r
  padding-left: 16px;\r
  font-size: 11px;\r
  line-height: 1.8;\r
  color: #8c8c8c;\r
}\r
\r
.tips-list li {\r
  margin-bottom: 4px;\r
}\r
\r
.tips-list strong {\r
  color: #595959;\r
}\r
\r
</style>\r
\r
\r
<!--如果需要简单控制节点样式，需要将此节点样式暴露到全局,适当增加前缀以防止污染-->\r
<style>\r
.x6-svg-start-node-body:hover{\r
  stroke-width: 2px;\r
  fill: #caf1c1;\r
}\r
.x6-node-selected .x6-svg-start-node-body{\r
  stroke: #48c02a;\r
  stroke-width: 2px;\r
  fill: #8fd16f\r
}\r
.x6-node-selected .x6-svg-start-node-image {\r
  display: none;\r
}\r
.x6-node-selected .x6-svg-start-node-imageHover {\r
  display: block;\r
}\r
.x6-node-selected .x6-svg-start-node-label {\r
  fill: #ffffff\r
}\r
\r
.x6-node-selected .x6-svg-approval-node-body{\r
  stroke: #003eca;\r
  stroke-width: 2px;\r
  fill: #1d78f4\r
}\r
.x6-node-selected .x6-svg-approval-node-image {\r
  display: none;\r
}\r
\r
.x6-node-selected .x6-svg-approval-node-imageHover {\r
  display: block;\r
}\r
.x6-node-selected .x6-svg-approval-node-label {\r
  fill: #ffffff\r
}\r
\r
.x6-node-selected .x6-svg-condition-node-body{\r
  stroke: #ffa100;\r
  stroke-width: 2px;\r
  fill: #fdc059\r
}\r
.x6-node-selected .x6-svg-condition-node-image {\r
  display: none;\r
}\r
\r
.x6-node-selected .x6-svg-condition-node-imageHover {\r
  display: block;\r
}\r
.x6-node-selected .x6-svg-condition-node-label {\r
  fill: #ffffff\r
}\r
\r
/* ─── 自定义边动画 ──────────────────────────────────────────────── */\r
\r
/* 流动边动画（蚂蚁线） */\r
@keyframes ant-line {\r
  to {\r
    stroke-dashoffset: -1000;\r
  }\r
}\r
\r
/* 边的悬停效果 */\r
.x6-edge:hover .x6-edge-path {\r
  stroke-width: 4;\r
  filter: drop-shadow(0 0 8px currentColor);\r
}\r
\r
/* 边的选中效果 */\r
.x6-edge-selected .x6-edge-path {\r
  stroke-width: 5;\r
  filter: drop-shadow(0 0 12px currentColor);\r
}\r
\r
</style>\r
`;var wn=(T=>(T.UNDO="undo",T.REDO="redo",T.REDO_ALT="redoAlt",T.COPY="copy",T.PASTE="paste",T.DELETE="delete",T.DELETE_ALT="deleteAlt",T.SELECT_ALL="selectAll",T.GROUP="group",T.UNGROUP="ungroup",T.ZOOM_IN="zoomIn",T.ZOOM_OUT="zoomOut",T.FIT_VIEW="fitView",T.RESET_VIEW="resetView",T.SAVE="save",T.SEARCH="search",T))(wn||{});const pp=G({__name:"demo-shortcut-keymap",setup(T){const v={keyMap:{[wn.COPY]:"ctrl+e",[wn.PASTE]:"ctrl+shift+v",[wn.SAVE]:null,[wn.DELETE]:null,[wn.DELETE_ALT]:null}};let a=null;function c(g){const x=g.getGraph(),s=x.addNode({id:"node1",shape:"rect",x:100,y:100,width:120,height:60,label:"节点 1",attrs:{body:{fill:"#5F95FF",stroke:"#2563EB",strokeWidth:2},label:{fill:"#ffffff",fontSize:14,fontWeight:"bold"}}}),o=x.addNode({id:"node2",shape:"circle",x:300,y:100,width:80,height:80,label:"节点 2",attrs:{body:{fill:"#10B981",stroke:"#059669",strokeWidth:2},label:{fill:"#ffffff",fontSize:14,fontWeight:"bold"}}}),t=x.addNode({id:"node3",shape:"ellipse",x:500,y:100,width:100,height:60,label:"节点 3",attrs:{body:{fill:"#F59E0B",stroke:"#D97706",strokeWidth:2},label:{fill:"#ffffff",fontSize:14,fontWeight:"bold"}}});x.addEdge({shape:"flow-edge",source:s,target:o,labels:["连线 1"]}),x.addEdge({shape:"flow-edge",source:o,target:t,labels:["连线 2"]}),x.centerContent(),a=()=>{var i;const e=(i=x.clipboard)==null?void 0:i.cells;e&&e.length>0&&K.success(`已复制 ${e.length} 个元素（使用 Ctrl+E）`)},x.on("clipboard:changed",a),console.log("[Demo] 快捷键映射示例已加载"),K.info("快捷键已重新映射：Ctrl+E=复制, Ctrl+Shift+V=粘贴")}function l(g){console.log("[Demo] 保存数据：",g),K.success("保存成功！")}return Un(()=>{console.log("[Demo] 组件卸载，事件监听器将由 FlowDesigner.destroy() 自动清理")}),(g,x)=>(h(),Dn(F(V),{shortcuts:v,onReady:c,onSave:l}))}}),gp=`<template>\r
  <FlowDesignerLayout\r
    :shortcuts="shortcutConfig"\r
    @ready="handleReady"\r
    @save="handleSave"\r
  />\r
</template>\r
\r
<script setup lang="ts">\r
import { ref, onBeforeUnmount } from 'vue'\r
import { message } from 'ant-design-vue'\r
import { FlowDesignerLayout }  from '@quick-code/x6-flow-designer'\r
import type { FlowDesigner } from '@quick-code/x6-flow-designer'\r
import { ShortcutAction } from '../../../../views/types/flow.types'\r
\r
/**\r
 * 快捷键配置：使用 keyMap 重新映射内置操作\r
 */\r
const shortcutConfig = {\r
  keyMap: {\r
    [ShortcutAction.COPY]: 'ctrl+e',         // 复制改为 Ctrl+E\r
    [ShortcutAction.PASTE]: 'ctrl+shift+v',  // 粘贴改为 Ctrl+Shift+V\r
    [ShortcutAction.SAVE]: null,             // 禁用保存快捷键（原为 Ctrl+S）\r
    [ShortcutAction.DELETE]: null,           // 禁用删除快捷键（Delete 键）\r
    [ShortcutAction.DELETE_ALT]: null,       // 禁用删除快捷键（Backspace 键）\r
  }\r
}\r
\r
// 保存事件监听器的引用，用于清理\r
let clipboardChangeHandler: (() => void) | null = null\r
\r
/**\r
 * ready 回调：初始化画布内容\r
 */\r
function handleReady(designer: FlowDesigner) {\r
  const graph = designer.getGraph()\r
\r
  // 添加节点 1\r
  const node1 = graph.addNode({\r
    id: 'node1',\r
    shape: 'rect',\r
    x: 100,\r
    y: 100,\r
    width: 120,\r
    height: 60,\r
    label: '节点 1',\r
    attrs: {\r
      body: {\r
        fill: '#5F95FF',\r
        stroke: '#2563EB',\r
        strokeWidth: 2,\r
      },\r
      label: {\r
        fill: '#ffffff',\r
        fontSize: 14,\r
        fontWeight: 'bold',\r
      },\r
    },\r
  })\r
\r
  // 添加节点 2\r
  const node2 = graph.addNode({\r
    id: 'node2',\r
    shape: 'circle',\r
    x: 300,\r
    y: 100,\r
    width: 80,\r
    height: 80,\r
    label: '节点 2',\r
    attrs: {\r
      body: {\r
        fill: '#10B981',\r
        stroke: '#059669',\r
        strokeWidth: 2,\r
      },\r
      label: {\r
        fill: '#ffffff',\r
        fontSize: 14,\r
        fontWeight: 'bold',\r
      },\r
    },\r
  })\r
\r
  // 添加节点 3\r
  const node3 = graph.addNode({\r
    id: 'node3',\r
    shape: 'ellipse',\r
    x: 500,\r
    y: 100,\r
    width: 100,\r
    height: 60,\r
    label: '节点 3',\r
    attrs: {\r
      body: {\r
        fill: '#F59E0B',\r
        stroke: '#D97706',\r
        strokeWidth: 2,\r
      },\r
      label: {\r
        fill: '#ffffff',\r
        fontSize: 14,\r
        fontWeight: 'bold',\r
      },\r
    },\r
  })\r
\r
  // 添加连线\r
  graph.addEdge({\r
    shape: 'flow-edge',\r
    source: node1,\r
    target: node2,\r
    labels: ['连线 1'],\r
  })\r
\r
  graph.addEdge({\r
    shape: 'flow-edge',\r
    source: node2,\r
    target: node3,\r
    labels: ['连线 2'],\r
  })\r
\r
  // 居中显示\r
  graph.centerContent()\r
\r
  // 监听复制事件，显示提示\r
  clipboardChangeHandler = () => {\r
    // 防御性检查：确保 clipboard 和 cells 存在\r
    const cells = graph.clipboard?.cells\r
    if (cells && cells.length > 0) {\r
      message.success(\`已复制 \${cells.length} 个元素（使用 Ctrl+E）\`)\r
    }\r
  }\r
\r
  graph.on('clipboard:changed', clipboardChangeHandler)\r
\r
  console.log('[Demo] 快捷键映射示例已加载')\r
  message.info('快捷键已重新映射：Ctrl+E=复制, Ctrl+Shift+V=粘贴')\r
}\r
\r
/**\r
 * 保存回调（不会被触发，因为保存快捷键已禁用）\r
 */\r
function handleSave(data: any) {\r
  console.log('[Demo] 保存数据：', data)\r
  message.success('保存成功！')\r
}\r
\r
/**\r
 * 组件卸载时清理事件监听器\r
 */\r
onBeforeUnmount(() => {\r
  // 注意：这里无法直接访问 graph，因为 graph 是在 handleReady 中创建的\r
  // 需要通过其他方式清理，或者在 FlowDesignerLayout 层面处理\r
  console.log('[Demo] 组件卸载，事件监听器将由 FlowDesigner.destroy() 自动清理')\r
})\r
<\/script>\r
`,fp=G({__name:"demo-node-state",setup(T){function v(a){const c=a.getGraph();a.registerNodeStateHandler("hover",{apply(r){r.setAttrs({body:{stroke:"#8c8c8c",strokeWidth:2,strokeDasharray:"4 4"},label:{fill:"#595959"}})},cleanup(r){r.setAttrs({body:{strokeDasharray:""}})}}),a.registerNodeStateHandlerForType("rect","default",{apply(r){r.setAttrs({body:{stroke:"#3b82f6",strokeWidth:2,fill:"#dbeafe"},label:{fill:"#1e40af",fontWeight:"normal"}})}}),a.registerNodeStateHandlerForType("rect","hover",{apply(r){r.setAttrs({body:{stroke:"#8b5cf6",strokeWidth:3,fill:"#ede9fe",filter:{name:"dropShadow",args:{dx:0,dy:2,blur:6,color:"rgba(139,92,246,0.4)"}}},label:{fill:"#5b21b6",fontWeight:"bold"}})},cleanup(r){r.setAttrs({body:{filter:null}})}}),a.registerNodeStateHandlerForType("rect","selected",{apply(r){r.setAttrs({body:{stroke:"#06b6d4",strokeWidth:4,fill:"#cffafe",filter:{name:"dropShadow",args:{dx:0,dy:0,blur:8,color:"rgba(6,182,212,0.6)"}}},label:{fill:"#164e63",fontWeight:"bold",fontSize:14}})},cleanup(r){r.setAttrs({body:{filter:null}})}}),a.registerNodeStateHandlerForType("rect","error",{apply(r){r.setAttrs({body:{stroke:"#ef4444",strokeWidth:4,fill:"#fee2e2",filter:{name:"dropShadow",args:{dx:0,dy:2,blur:8,color:"rgba(239,68,68,0.5)"}}},label:{fill:"#991b1b",fontWeight:"bold"}});const p=r.getData()||{};r.setData({...p,hasError:!0,errorMessage:"节点验证失败"})},cleanup(r){r.setAttrs({body:{filter:null}});const p=r.getData()||{};r.setData({...p,hasError:!1,errorMessage:void 0})}}),a.registerNodeStateHandlerForType("circle","default",{apply(r){r.setAttrs({body:{stroke:"#10b981",strokeWidth:2,fill:"#d1fae5"},label:{fill:"#065f46",fontWeight:"normal"}})}}),a.registerNodeStateHandlerForType("circle","hover",{apply(r){r.setAttrs({body:{stroke:"#047857",strokeWidth:3,fill:"#a7f3d0",filter:{name:"dropShadow",args:{dx:0,dy:2,blur:6,color:"rgba(16,185,129,0.4)"}}},label:{fill:"#064e3b",fontWeight:"bold"}})},cleanup(r){r.setAttrs({body:{filter:null}})}}),a.registerNodeStateHandlerForType("circle","selected",{apply(r){r.setAttrs({body:{stroke:"#f59e0b",strokeWidth:4,fill:"#fef3c7",filter:{name:"dropShadow",args:{dx:0,dy:0,blur:8,color:"rgba(245,158,11,0.5)"}}},label:{fill:"#92400e",fontWeight:"bold"}})},cleanup(r){r.setAttrs({body:{filter:null}})}}),a.registerNodeStateHandlers("ellipse",{default:{apply(r){r.setAttrs({body:{stroke:"#f97316",strokeWidth:2,fill:"#ffedd5"},label:{fill:"#9a3412",fontWeight:"normal"}})}},hover:{apply(r){r.setAttrs({body:{stroke:"#c2410c",strokeWidth:3,fill:"#fed7aa",strokeDasharray:"8 4",filter:{name:"dropShadow",args:{dx:0,dy:2,blur:6,color:"rgba(249,115,22,0.4)"}}},label:{fill:"#7c2d12",fontWeight:"bold"}})},cleanup(r){r.setAttrs({body:{filter:null,strokeDasharray:""}})}},error:{apply(r){r.setAttrs({body:{stroke:"#eab308",strokeWidth:4,fill:"#fefce8",strokeDasharray:"6 3",filter:{name:"dropShadow",args:{dx:0,dy:2,blur:6,color:"rgba(234,179,8,0.5)"}}},label:{fill:"#854d0e",fontWeight:"bold"}})},cleanup(r){r.setAttrs({body:{filter:null,strokeDasharray:""}})}}});const l=c.addNode({id:"rect-1",shape:"rect",x:80,y:80,width:150,height:70,label:"矩形 - 悬停试试",attrs:{label:{fontSize:13}}});a.setNodeState(l,"default");const g=c.addNode({id:"rect-2",shape:"rect",x:290,y:80,width:150,height:70,label:"矩形 - 点击选中",attrs:{label:{fontSize:13}}});a.setNodeState(g,"default");const x=c.addNode({id:"circle-1",shape:"circle",x:80,y:220,width:90,height:90,label:"圆形",attrs:{label:{fontSize:13}}});a.setNodeState(x,"default");const s=c.addNode({id:"circle-2",shape:"circle",x:240,y:220,width:90,height:90,label:"圆形",attrs:{label:{fontSize:13}}});a.setNodeState(s,"default");const o=c.addNode({id:"ellipse-1",shape:"ellipse",x:500,y:80,width:160,height:80,label:"椭圆 - 双击 error",attrs:{label:{fontSize:13}}});a.setNodeState(o,"default");const t=c.addNode({id:"ellipse-2",shape:"ellipse",x:500,y:220,width:160,height:80,label:"椭圆 - 无 selected",attrs:{label:{fontSize:13}}});a.setNodeState(t,"default"),c.addEdge({id:"edge1",shape:"flow-edge",source:l,target:g,labels:["流程1"]}),c.addEdge({id:"edge2",shape:"flow-edge",source:g,target:o,labels:["流程2"]}),c.addEdge({id:"edge3",shape:"flow-edge",source:l,target:x,labels:["流程3"]}),c.addEdge({id:"edge4",shape:"flow-edge",source:x,target:s,labels:["流程4"]}),c.addEdge({id:"edge5",shape:"flow-edge",source:o,target:t,labels:["流程5"]}),c.centerContent();const e={rect:["default","hover","selected"],circle:["default","hover","selected"],ellipse:["default","hover"]},i=new Map;c.on("node:click",({node:r})=>{const p=r.shape,m=e[p]||["default"],u=((i.get(r.id)??0)+1)%m.length;i.set(r.id,u);const N=m[u];a.setNodeState(r,N),K.info(`[${p}] ${r.id} → ${N}`)}),c.on("node:dblclick",({node:r})=>{const p=r.shape;if((r.getProp("_state")||"default")==="error"){a.setNodeState(r,"default"),i.set(r.id,0),K.success(`[${p}] ${r.id} 已恢复 default`);return}a.getNodeStateHandlerForType(p,"error")?(a.setNodeState(r,"error"),K.warning(`[${p}] ${r.id} → error（双击恢复）`)):K.info(`[${p}] 未注册 error 状态，无法设置`)}),console.log("[Demo] 按节点类型注册不同状态处理器示例已加载"),K.success("rect/circle/ellipse 各有专属状态，单击循环，双击切换 error")}return(a,c)=>(h(),Dn(V,{onReady:v}))}}),mp=`<template>\r
  <FlowDesignerLayout\r
    @ready="handleReady"\r
  />\r
</template>\r
\r
<script setup lang="ts">\r
import { message } from 'ant-design-vue'\r
//import { FlowDesignerLayout }  from '@quick-code/x6-flow-designer'\r
import FlowDesignerLayout from '@/components/FlowDesigner/FlowDesignerLayout.vue'\r
import type { FlowDesigner } from '@quick-code/x6-flow-designer'\r
import type { Node } from '@antv/x6'\r
\r
/**\r
 * ready 回调：为不同节点类型注册不同的状态处理器\r
 *\r
 * 优先级规则：\r
 *   1. 先查找 node.shape 对应的类型专属处理器\r
 *   2. 找不到时降级到全局处理器\r
 */\r
function handleReady(designer: FlowDesigner) {\r
  const graph = designer.getGraph()\r
\r
  // ========== 全局处理器（兜底，所有未单独注册的 shape 使用）==========\r
\r
  designer.registerNodeStateHandler('hover', {\r
    apply(node) {\r
      node.setAttrs({\r
        body: {\r
          stroke: '#8c8c8c',\r
          strokeWidth: 2,\r
          strokeDasharray: '4 4',\r
        },\r
        label: { fill: '#595959' }\r
      })\r
    },\r
    cleanup(node) {\r
      node.setAttrs({\r
        body: { strokeDasharray: '' }\r
      })\r
    }\r
  })\r
\r
  // ========== rect 类型：蓝紫色系 ==========\r
\r
  designer.registerNodeStateHandlerForType('rect', 'default', {\r
    apply(node) {\r
      node.setAttrs({\r
        body: { stroke: '#3b82f6', strokeWidth: 2, fill: '#dbeafe' },\r
        label: { fill: '#1e40af', fontWeight: 'normal' }\r
      })\r
    }\r
  })\r
\r
  designer.registerNodeStateHandlerForType('rect', 'hover', {\r
    apply(node) {\r
      node.setAttrs({\r
        body: {\r
          stroke: '#8b5cf6', strokeWidth: 3, fill: '#ede9fe',\r
          filter: { name: 'dropShadow', args: { dx: 0, dy: 2, blur: 6, color: 'rgba(139,92,246,0.4)' } }\r
        },\r
        label: { fill: '#5b21b6', fontWeight: 'bold' }\r
      })\r
    },\r
    cleanup(node) {\r
      node.setAttrs({ body: { filter: null } })\r
    }\r
  })\r
\r
  designer.registerNodeStateHandlerForType('rect', 'selected', {\r
    apply(node) {\r
      node.setAttrs({\r
        body: {\r
          stroke: '#06b6d4', strokeWidth: 4, fill: '#cffafe',\r
          filter: { name: 'dropShadow', args: { dx: 0, dy: 0, blur: 8, color: 'rgba(6,182,212,0.6)' } }\r
        },\r
        label: { fill: '#164e63', fontWeight: 'bold', fontSize: 14 }\r
      })\r
    },\r
    cleanup(node) {\r
      node.setAttrs({ body: { filter: null } })\r
    }\r
  })\r
\r
  designer.registerNodeStateHandlerForType('rect', 'error', {\r
    apply(node) {\r
      node.setAttrs({\r
        body: {\r
          stroke: '#ef4444', strokeWidth: 4, fill: '#fee2e2',\r
          filter: { name: 'dropShadow', args: { dx: 0, dy: 2, blur: 8, color: 'rgba(239,68,68,0.5)' } }\r
        },\r
        label: { fill: '#991b1b', fontWeight: 'bold' }\r
      })\r
      const data = node.getData() || {}\r
      node.setData({ ...data, hasError: true, errorMessage: '节点验证失败' })\r
    },\r
    cleanup(node) {\r
      node.setAttrs({ body: { filter: null } })\r
      const data = node.getData() || {}\r
      node.setData({ ...data, hasError: false, errorMessage: undefined })\r
    }\r
  })\r
\r
  // ========== circle 类型：绿色系 ==========\r
\r
  designer.registerNodeStateHandlerForType('circle', 'default', {\r
    apply(node) {\r
      node.setAttrs({\r
        body: { stroke: '#10b981', strokeWidth: 2, fill: '#d1fae5' },\r
        label: { fill: '#065f46', fontWeight: 'normal' }\r
      })\r
    }\r
  })\r
\r
  designer.registerNodeStateHandlerForType('circle', 'hover', {\r
    apply(node) {\r
      node.setAttrs({\r
        body: {\r
          stroke: '#047857', strokeWidth: 3, fill: '#a7f3d0',\r
          filter: { name: 'dropShadow', args: { dx: 0, dy: 2, blur: 6, color: 'rgba(16,185,129,0.4)' } }\r
        },\r
        label: { fill: '#064e3b', fontWeight: 'bold' }\r
      })\r
    },\r
    cleanup(node) {\r
      node.setAttrs({ body: { filter: null } })\r
    }\r
  })\r
\r
  designer.registerNodeStateHandlerForType('circle', 'selected', {\r
    apply(node) {\r
      node.setAttrs({\r
        body: {\r
          stroke: '#f59e0b', strokeWidth: 4, fill: '#fef3c7',\r
          filter: { name: 'dropShadow', args: { dx: 0, dy: 0, blur: 8, color: 'rgba(245,158,11,0.5)' } }\r
        },\r
        label: { fill: '#92400e', fontWeight: 'bold' }\r
      })\r
    },\r
    cleanup(node) {\r
      node.setAttrs({ body: { filter: null } })\r
    }\r
  })\r
\r
  // circle 不注册 error → 使用全局兜底（无专属 error，双击时提示）\r
\r
  // ========== ellipse 类型：橙色系 ==========\r
\r
  // ellipse 不注册 selected → 悬停时悬停样式，选中时降级到全局 hover 处理器\r
  // 体现：类型专属 > 全局兜底 的优先级\r
\r
  designer.registerNodeStateHandlers('ellipse', {\r
    default: {\r
      apply(node) {\r
        node.setAttrs({\r
          body: { stroke: '#f97316', strokeWidth: 2, fill: '#ffedd5' },\r
          label: { fill: '#9a3412', fontWeight: 'normal' }\r
        })\r
      }\r
    },\r
    hover: {\r
      apply(node) {\r
        node.setAttrs({\r
          body: {\r
            stroke: '#c2410c', strokeWidth: 3, fill: '#fed7aa',\r
            strokeDasharray: '8 4',\r
            filter: { name: 'dropShadow', args: { dx: 0, dy: 2, blur: 6, color: 'rgba(249,115,22,0.4)' } }\r
          },\r
          label: { fill: '#7c2d12', fontWeight: 'bold' }\r
        })\r
      },\r
      cleanup(node) {\r
        node.setAttrs({ body: { filter: null, strokeDasharray: '' } })\r
      }\r
    },\r
    error: {\r
      apply(node) {\r
        node.setAttrs({\r
          body: {\r
            stroke: '#eab308', strokeWidth: 4, fill: '#fefce8',\r
            strokeDasharray: '6 3',\r
            filter: { name: 'dropShadow', args: { dx: 0, dy: 2, blur: 6, color: 'rgba(234,179,8,0.5)' } }\r
          },\r
          label: { fill: '#854d0e', fontWeight: 'bold' }\r
        })\r
      },\r
      cleanup(node) {\r
        node.setAttrs({ body: { filter: null, strokeDasharray: '' } })\r
      }\r
    }\r
  })\r
\r
  // ========== 创建演示节点 ==========\r
\r
  // rect 节点 × 2\r
  const node1 = graph.addNode({\r
    id: 'rect-1', shape: 'rect',\r
    x: 80, y: 80, width: 150, height: 70,\r
    label: '矩形 - 悬停试试',\r
    attrs: { label: { fontSize: 13 } }\r
  })\r
  designer.setNodeState(node1, 'default')\r
\r
  const node2 = graph.addNode({\r
    id: 'rect-2', shape: 'rect',\r
    x: 290, y: 80, width: 150, height: 70,\r
    label: '矩形 - 点击选中',\r
    attrs: { label: { fontSize: 13 } }\r
  })\r
  designer.setNodeState(node2, 'default')\r
\r
  // circle 节点 × 2\r
  const node3 = graph.addNode({\r
    id: 'circle-1', shape: 'circle',\r
    x: 80, y: 220, width: 90, height: 90,\r
    label: '圆形',\r
    attrs: { label: { fontSize: 13 } }\r
  })\r
  designer.setNodeState(node3, 'default')\r
\r
  const node4 = graph.addNode({\r
    id: 'circle-2', shape: 'circle',\r
    x: 240, y: 220, width: 90, height: 90,\r
    label: '圆形',\r
    attrs: { label: { fontSize: 13 } }\r
  })\r
  designer.setNodeState(node4, 'default')\r
\r
  // ellipse 节点 × 2\r
  const node5 = graph.addNode({\r
    id: 'ellipse-1', shape: 'ellipse',\r
    x: 500, y: 80, width: 160, height: 80,\r
    label: '椭圆 - 双击 error',\r
    attrs: { label: { fontSize: 13 } }\r
  })\r
  designer.setNodeState(node5, 'default')\r
\r
  const node6 = graph.addNode({\r
    id: 'ellipse-2', shape: 'ellipse',\r
    x: 500, y: 220, width: 160, height: 80,\r
    label: '椭圆 - 无 selected',\r
    attrs: { label: { fontSize: 13 } }\r
  })\r
  designer.setNodeState(node6, 'default')\r
\r
  // ========== 添加连线 ==========\r
\r
  graph.addEdge({ id: 'edge1', shape: 'flow-edge', source: node1, target: node2, labels: ['流程1'] })\r
  graph.addEdge({ id: 'edge2', shape: 'flow-edge', source: node2, target: node5, labels: ['流程2'] })\r
  graph.addEdge({ id: 'edge3', shape: 'flow-edge', source: node1, target: node3, labels: ['流程3'] })\r
  graph.addEdge({ id: 'edge4', shape: 'flow-edge', source: node3, target: node4, labels: ['流程4'] })\r
  graph.addEdge({ id: 'edge5', shape: 'flow-edge', source: node5, target: node6, labels: ['流程5'] })\r
\r
  graph.centerContent()\r
\r
  // ========== 交互：单击循环状态，双击切换 error ==========\r
\r
  const stateCycle: Record<string, string[]> = {\r
    rect:    ['default', 'hover', 'selected'],\r
    circle:  ['default', 'hover', 'selected'],\r
    ellipse: ['default', 'hover'],  // ellipse 没有注册 selected，点击只循环 default/hover\r
  }\r
  const currentIndex = new Map<string, number>()\r
\r
  graph.on('node:click', ({ node }) => {\r
    const shape = node.shape as string\r
    const cycle = stateCycle[shape] || ['default']\r
    const idx = ((currentIndex.get(node.id) ?? 0) + 1) % cycle.length\r
    currentIndex.set(node.id, idx)\r
    const nextState = cycle[idx]\r
    designer.setNodeState(node, nextState)\r
    message.info(\`[\${shape}] \${node.id} → \${nextState}\`)\r
  })\r
\r
  graph.on('node:dblclick', ({ node }) => {\r
    const shape = node.shape as string\r
    const currentState = node.getProp('_state') || 'default'\r
\r
    if (currentState === 'error') {\r
      designer.setNodeState(node, 'default')\r
      currentIndex.set(node.id, 0)\r
      message.success(\`[\${shape}] \${node.id} 已恢复 default\`)\r
      return\r
    }\r
\r
    // 检查该类型是否注册了 error 处理器\r
    const hasError = designer.getNodeStateHandlerForType(shape, 'error')\r
    if (hasError) {\r
      designer.setNodeState(node, 'error')\r
      message.warning(\`[\${shape}] \${node.id} → error（双击恢复）\`)\r
    } else {\r
      message.info(\`[\${shape}] 未注册 error 状态，无法设置\`)\r
    }\r
  })\r
\r
  console.log('[Demo] 按节点类型注册不同状态处理器示例已加载')\r
  message.success('rect/circle/ellipse 各有专属状态，单击循环，双击切换 error')\r
}\r
<\/script>\r
`,up=G({__name:"demo-edge-state",setup(T){function v(a){const c=a.getGraph();a.registerEdgeStateHandler("default",{apply(d){d.setAttrs({line:{stroke:"#9333ea",strokeWidth:2}}),d.setLabelAt(0,{attrs:{label:{fill:"#6b21a8",text:"默认样式"},rect:{fill:"#f3e8ff",stroke:"#9333ea",strokeWidth:2}}})}}),a.registerEdgeStateHandler("hover",{apply(d){d.setAttrs({line:{stroke:"#8c8c8c",strokeWidth:3,strokeDasharray:"4 4"}}),d.setLabelAt(0,{attrs:{label:{fill:"#595959",text:"悬停效果"},rect:{fill:"#f0f0f0",stroke:"#8c8c8c",strokeWidth:2}}})},cleanup(d){d.setAttrs({line:{strokeDasharray:""}})}}),a.registerEdgeStateHandler("selected",{apply(d){d.setAttrs({line:{stroke:"#06b6d4",strokeWidth:3}}),d.setLabelAt(0,{attrs:{label:{fill:"#164e63",text:"已选中",fontWeight:"bold",fontSize:14},rect:{fill:"#cffafe",stroke:"#06b6d4",strokeWidth:3}}})}}),a.registerEdgeStateHandlerForType("flow-edge","default",{apply(d){d.setAttrs({line:{stroke:"#3b82f6",strokeWidth:2}}),d.setLabelAt(0,{attrs:{label:{fill:"#1e40af",text:"流程线-默认"},rect:{fill:"#dbeafe",stroke:"#3b82f6",strokeWidth:2}}})}}),a.registerEdgeStateHandlerForType("flow-edge","hover",{apply(d){d.setAttrs({line:{stroke:"#8b5cf6",strokeWidth:4,filter:{name:"dropShadow",args:{dx:0,dy:2,blur:6,color:"rgba(139, 92, 246, 0.4)"}}}}),d.setLabelAt(0,{attrs:{label:{fill:"#5b21b6",text:"流程线-悬停",fontWeight:"bold"},rect:{fill:"#ede9fe",stroke:"#8b5cf6",strokeWidth:3}}})},cleanup(d){d.setAttrs({line:{filter:null}})}}),a.registerEdgeStateHandlerForType("flow-edge","selected",{apply(d){d.setAttrs({line:{stroke:"#06b6d4",strokeWidth:4,filter:{name:"dropShadow",args:{dx:0,dy:0,blur:8,color:"rgba(6, 182, 212, 0.6)"}}}}),d.setLabelAt(0,{attrs:{label:{fill:"#164e63",text:"流程线-选中",fontWeight:"bold",fontSize:14},rect:{fill:"#cffafe",stroke:"#06b6d4",strokeWidth:4}}})},cleanup(d){d.setAttrs({line:{filter:null}})}}),a.registerEdgeStateHandlerForType("flow-edge","flowing",{apply(d){d.setAttrs({line:{stroke:"#ec4899",strokeWidth:3,strokeDasharray:"10,5",style:{animation:"fd-flow 1s linear infinite"}}}),d.setLabelAt(0,{attrs:{label:{fill:"#831843",text:"流程线-流动中",fontStyle:"italic"},rect:{fill:"#fce7f3",stroke:"#ec4899",strokeWidth:2}}})},cleanup(d){d.setAttrs({line:{strokeDasharray:0,style:{animation:"none"}}})}}),a.registerEdgeStateHandlerForType("flow-edge","flowing",{apply(d){d.setAttrs({line:{stroke:"#ec4899",strokeWidth:3,strokeDasharray:"10,5",style:{animation:"fd-flow 1s linear infinite"}}}),d.setLabelAt(0,{attrs:{label:{fill:"#831843",text:"流程线-流动中",fontStyle:"italic"},rect:{fill:"#fce7f3",stroke:"#ec4899",strokeWidth:2}}})},cleanup(d){d.setAttrs({line:{strokeDasharray:0,style:{animation:"none"}}})}}),a.registerEdgeStateHandlerForType("flow-edge","dimmed",{apply(d){d.setAttrs({line:{stroke:"#4b5563",strokeWidth:1,opacity:.3,filter:{name:"blur",args:{stdDeviation:1}}}}),d.setLabelAt(0,{attrs:{label:{fill:"#6b7280",text:"已弱化",fontStyle:"italic",fontSize:11},rect:{fill:"#f3f4f6",stroke:"#9ca3af",strokeWidth:1,opacity:.5}}})},cleanup(d){d.setAttrs({line:{opacity:1,filter:null}})}}),a.registerEdgeStateHandlerForType("edge","hover",{apply(d){d.setAttrs({line:{stroke:"#047857",strokeWidth:4,filter:{name:"dropShadow",args:{dx:0,dy:2,blur:6,color:"rgba(16, 185, 129, 0.4)"}}}}),d.setLabelAt(0,{attrs:{label:{fill:"#064e3b",text:"标准线-悬停",fontWeight:"bold"},rect:{fill:"#a7f3d0",stroke:"#047857",strokeWidth:3}}})},cleanup(d){d.setAttrs({line:{filter:null}})}}),a.registerEdgeStateHandlerForType("edge","selected",{apply(d){d.setAttrs({line:{stroke:"#f59e0b",strokeWidth:4,filter:{name:"dropShadow",args:{dx:0,dy:0,blur:8,color:"rgba(245, 158, 11, 0.5)"}}}}),d.setLabelAt(0,{attrs:{label:{fill:"#92400e",text:"标准线-选中",fontWeight:"bold",fontSize:14},rect:{fill:"#fef3c7",stroke:"#f59e0b",strokeWidth:4}}})},cleanup(d){d.setAttrs({line:{filter:null}})}});const l=c.addNode({id:"start",shape:"rect",x:80,y:120,width:100,height:60,label:"开始",attrs:{body:{stroke:"#5b8ff9",strokeWidth:2,fill:"#e6f4ff"},label:{fill:"#003a8c",fontSize:14}}}),g=c.addNode({id:"node1",shape:"rect",x:280,y:40,width:100,height:60,label:"任务 A",attrs:{label:{fontSize:14}}}),x=c.addNode({id:"node2",shape:"rect",x:280,y:140,width:100,height:60,label:"任务 B",attrs:{label:{fontSize:14}}}),s=c.addNode({id:"node3",shape:"rect",x:480,y:40,width:100,height:60,label:"任务 C",attrs:{label:{fontSize:14}}}),o=c.addNode({id:"node4",shape:"rect",x:480,y:140,width:100,height:60,label:"任务 D",attrs:{label:{fontSize:14}}}),t=c.addNode({id:"end",shape:"rect",x:680,y:120,width:100,height:60,label:"结束",attrs:{body:{stroke:"#5b8ff9",strokeWidth:2,fill:"#e6f4ff"},label:{fill:"#003a8c",fontSize:14}}}),e=c.addEdge({id:"edge1",shape:"flow-edge",source:l,target:g,labels:["流程线"]});a.setEdgeState(e,"default");const i=c.addEdge({id:"edge2",shape:"flow-edge",source:g,target:s,labels:["流程线"]});a.setEdgeState(i,"default");const r=c.addEdge({id:"edge3",shape:"edge",source:l,target:x,labels:["标准线"]});a.setEdgeState(r,"default");const p=c.addEdge({id:"edge4",shape:"edge",source:x,target:o,labels:["标准线"]});a.setEdgeState(p,"default");const m=c.addEdge({id:"edge5",shape:"flow-edge",source:s,target:t,labels:["流程线"]});a.setEdgeState(m,"default");const u=c.addEdge({id:"edge6",shape:"edge",source:o,target:t,labels:["标准线"]});a.setEdgeState(u,"default"),c.centerContent();const N={"flow-edge":["default","hover","selected","flowing"],edge:["default","hover","selected"]},k=new Map;c.on("edge:click",({edge:d})=>{const _=d.shape,$=N[_]||["default"],A=((k.get(d.id)??0)+1)%$.length;k.set(d.id,A);const C=$[A];a.setEdgeState(d,C),K.info(`[${_}] ${d.id} → ${C}`)}),c.on("edge:dblclick",({edge:d})=>{const _=d.shape;if((d.getProp("_state")||"default")==="flowing"){a.setEdgeState(d,"default"),k.set(d.id,0),K.success(`[${_}] ${d.id} 已恢复 default`);return}a.getEdgeStateHandlerForType(_,"flowing")?(a.setEdgeState(d,"flowing"),K.warning(`[${_}] ${d.id} → flowing（双击恢复）`)):K.info(`[${_}] 未注册 flowing 状态，无法设置`)}),console.log("[Demo] 按连线类型注册不同状态处理器示例已加载"),K.success("flow-edge/edge 各有专属状态，单击循环，双击切换 flowing")}return(a,c)=>(h(),Dn(V,{onReady:v}))}}),hp=`<template>\r
  <FlowDesignerLayout\r
      @ready="handleReady"\r
  />\r
</template>\r
\r
<script setup lang="ts">\r
import { message } from 'ant-design-vue'\r
//import { FlowDesignerLayout }  from '@quick-code/x6-flow-designer'\r
import FlowDesignerLayout from '@/components/FlowDesigner/FlowDesignerLayout.vue'\r
import type { FlowDesigner } from '@quick-code/x6-flow-designer'\r
import type { Edge } from '@antv/x6'\r
\r
/**\r
 * ready 回调：为不同连线类型注册不同的状态处理器\r
 *\r
 * 优先级规则：\r
 *   1. 先查找 edge.shape 对应的类型专属处理器\r
 *   2. 找不到时降级到全局处理器\r
 */\r
function handleReady(designer: FlowDesigner) {\r
  const graph = designer.getGraph()\r
\r
  // ========== 全局处理器（兜底，所有未单独注册的 shape 使用）==========\r
\r
  designer.registerEdgeStateHandler('default', {\r
    apply(edge) {\r
      edge.setAttrs({\r
        line: {\r
          stroke: '#9333ea',\r
          strokeWidth: 2,\r
        }\r
      })\r
      edge.setLabelAt(0, {\r
        attrs: {\r
          label: {\r
            fill: '#6b21a8',\r
            text: '默认样式',\r
          },\r
          rect: {\r
            fill: '#f3e8ff',\r
            stroke: '#9333ea',\r
            strokeWidth: 2,\r
          }\r
        }\r
      })\r
    }\r
  })\r
\r
  designer.registerEdgeStateHandler('hover', {\r
    apply(edge) {\r
      edge.setAttrs({\r
        line: {\r
          stroke: '#8c8c8c',\r
          strokeWidth: 3,\r
          strokeDasharray: '4 4',\r
        }\r
      })\r
      edge.setLabelAt(0, {\r
        attrs: {\r
          label: {\r
            fill: '#595959',\r
            text: '悬停效果',\r
          },\r
          rect: {\r
            fill: '#f0f0f0',\r
            stroke: '#8c8c8c',\r
            strokeWidth: 2,\r
          }\r
        }\r
      })\r
    },\r
    cleanup(edge) {\r
      edge.setAttrs({\r
        line: {\r
          strokeDasharray: ''\r
        }\r
      })\r
    }\r
  })\r
\r
  designer.registerEdgeStateHandler('selected', {\r
    apply(edge) {\r
      edge.setAttrs({\r
        line: {\r
          stroke: '#06b6d4',\r
          strokeWidth: 3,\r
        }\r
      })\r
      edge.setLabelAt(0, {\r
        attrs: {\r
          label: {\r
            fill: '#164e63',\r
            text: '已选中',\r
            fontWeight: 'bold',\r
            fontSize: 14,\r
          },\r
          rect: {\r
            fill: '#cffafe',\r
            stroke: '#06b6d4',\r
            strokeWidth: 3,\r
          }\r
        }\r
      })\r
    }\r
  })\r
\r
  // ========== flow-edge 类型：蓝色系（流程线）==========\r
\r
  designer.registerEdgeStateHandlerForType('flow-edge', 'default', {\r
    apply(edge) {\r
      edge.setAttrs({\r
        line: {\r
          stroke: '#3b82f6',\r
          strokeWidth: 2,\r
        }\r
      })\r
      edge.setLabelAt(0, {\r
        attrs: {\r
          label: {\r
            fill: '#1e40af',\r
            text: '流程线-默认',\r
          },\r
          rect: {\r
            fill: '#dbeafe',\r
            stroke: '#3b82f6',\r
            strokeWidth: 2,\r
          }\r
        }\r
      })\r
    }\r
  })\r
\r
  designer.registerEdgeStateHandlerForType('flow-edge', 'hover', {\r
    apply(edge) {\r
      edge.setAttrs({\r
        line: {\r
          stroke: '#8b5cf6',\r
          strokeWidth: 4,\r
          filter: {\r
            name: 'dropShadow',\r
            args: { dx: 0, dy: 2, blur: 6, color: 'rgba(139, 92, 246, 0.4)' }\r
          }\r
        }\r
      })\r
      edge.setLabelAt(0, {\r
        attrs: {\r
          label: {\r
            fill: '#5b21b6',\r
            text: '流程线-悬停',\r
            fontWeight: 'bold',\r
          },\r
          rect: {\r
            fill: '#ede9fe',\r
            stroke: '#8b5cf6',\r
            strokeWidth: 3,\r
          }\r
        }\r
      })\r
    },\r
    cleanup(edge) {\r
      edge.setAttrs({\r
        line: {\r
          filter: null\r
        }\r
      })\r
    }\r
  })\r
\r
  designer.registerEdgeStateHandlerForType('flow-edge', 'selected', {\r
    apply(edge) {\r
      edge.setAttrs({\r
        line: {\r
          stroke: '#06b6d4',\r
          strokeWidth: 4,\r
          filter: {\r
            name: 'dropShadow',\r
            args: { dx: 0, dy: 0, blur: 8, color: 'rgba(6, 182, 212, 0.6)' }\r
          }\r
        }\r
      })\r
      edge.setLabelAt(0, {\r
        attrs: {\r
          label: {\r
            fill: '#164e63',\r
            text: '流程线-选中',\r
            fontWeight: 'bold',\r
            fontSize: 14,\r
          },\r
          rect: {\r
            fill: '#cffafe',\r
            stroke: '#06b6d4',\r
            strokeWidth: 4,\r
          }\r
        }\r
      })\r
    },\r
    cleanup(edge) {\r
      edge.setAttrs({\r
        line: {\r
          filter: null\r
        }\r
      })\r
    }\r
  })\r
\r
  designer.registerEdgeStateHandlerForType('flow-edge', 'flowing', {\r
    apply(edge) {\r
      edge.setAttrs({\r
        line: {\r
          stroke: '#ec4899',\r
          strokeWidth: 3,\r
          strokeDasharray: '10,5',\r
          style: {\r
            animation: 'fd-flow 1s linear infinite'\r
          }\r
        }\r
      })\r
      edge.setLabelAt(0, {\r
        attrs: {\r
          label: {\r
            fill: '#831843',\r
            text: '流程线-流动中',\r
            fontStyle: 'italic',\r
          },\r
          rect: {\r
            fill: '#fce7f3',\r
            stroke: '#ec4899',\r
            strokeWidth: 2,\r
          }\r
        }\r
      })\r
    },\r
    cleanup(edge) {\r
      edge.setAttrs({\r
        line: {\r
          strokeDasharray: 0,\r
          style: {\r
            animation: 'none'\r
          }\r
        }\r
      })\r
    }\r
  })\r
\r
  designer.registerEdgeStateHandlerForType('flow-edge', 'flowing', {\r
    apply(edge) {\r
      edge.setAttrs({\r
        line: {\r
          stroke: '#ec4899',\r
          strokeWidth: 3,\r
          strokeDasharray: '10,5',\r
          style: {\r
            animation: 'fd-flow 1s linear infinite'\r
          }\r
        }\r
      })\r
      edge.setLabelAt(0, {\r
        attrs: {\r
          label: {\r
            fill: '#831843',\r
            text: '流程线-流动中',\r
            fontStyle: 'italic',\r
          },\r
          rect: {\r
            fill: '#fce7f3',\r
            stroke: '#ec4899',\r
            strokeWidth: 2,\r
          }\r
        }\r
      })\r
    },\r
    cleanup(edge) {\r
      edge.setAttrs({\r
        line: {\r
          strokeDasharray: 0,\r
          style: {\r
            animation: 'none'\r
          }\r
        }\r
      })\r
    }\r
  })\r
\r
  designer.registerEdgeStateHandlerForType('flow-edge', 'dimmed', {\r
    apply(edge) {\r
      edge.setAttrs({\r
        line: {\r
          stroke: '#4b5563',\r
          strokeWidth: 1,\r
          opacity: 0.3,\r
          filter: {\r
            name: 'blur',\r
            args: { stdDeviation: 1 }\r
          }\r
        }\r
      })\r
      edge.setLabelAt(0, {\r
        attrs: {\r
          label: {\r
            fill: '#6b7280',\r
            text: '已弱化',\r
            fontStyle: 'italic',\r
            fontSize: 11,\r
          },\r
          rect: {\r
            fill: '#f3f4f6',\r
            stroke: '#9ca3af',\r
            strokeWidth: 1,\r
            opacity: 0.5,\r
          }\r
        }\r
      })\r
    },\r
    cleanup(edge) {\r
      edge.setAttrs({\r
        line: {\r
          opacity: 1,\r
          filter: null\r
        }\r
      })\r
    }\r
  })\r
\r
  // ========== edge 类型：绿色系（标准连线）==========\r
  // 使用内置的 'edge' 类型作为第二种连线类型示例\r
  designer.registerEdgeStateHandlerForType('edge', 'hover', {\r
    apply(edge) {\r
      edge.setAttrs({\r
        line: {\r
          stroke: '#047857',\r
          strokeWidth: 4,\r
          filter: {\r
            name: 'dropShadow',\r
            args: { dx: 0, dy: 2, blur: 6, color: 'rgba(16, 185, 129, 0.4)' }\r
          }\r
        }\r
      })\r
      edge.setLabelAt(0, {\r
        attrs: {\r
          label: {\r
            fill: '#064e3b',\r
            text: '标准线-悬停',\r
            fontWeight: 'bold',\r
          },\r
          rect: {\r
            fill: '#a7f3d0',\r
            stroke: '#047857',\r
            strokeWidth: 3,\r
          }\r
        }\r
      })\r
    },\r
    cleanup(edge) {\r
      edge.setAttrs({\r
        line: {\r
          filter: null\r
        }\r
      })\r
    }\r
  })\r
\r
  designer.registerEdgeStateHandlerForType('edge', 'selected', {\r
    apply(edge) {\r
      edge.setAttrs({\r
        line: {\r
          stroke: '#f59e0b',\r
          strokeWidth: 4,\r
          filter: {\r
            name: 'dropShadow',\r
            args: { dx: 0, dy: 0, blur: 8, color: 'rgba(245, 158, 11, 0.5)' }\r
          }\r
        }\r
      })\r
      edge.setLabelAt(0, {\r
        attrs: {\r
          label: {\r
            fill: '#92400e',\r
            text: '标准线-选中',\r
            fontWeight: 'bold',\r
            fontSize: 14,\r
          },\r
          rect: {\r
            fill: '#fef3c7',\r
            stroke: '#f59e0b',\r
            strokeWidth: 4,\r
          }\r
        }\r
      })\r
    },\r
    cleanup(edge) {\r
      edge.setAttrs({\r
        line: {\r
          filter: null\r
        }\r
      })\r
    }\r
  })\r
\r
  // edge 不注册 flowing → 使用全局兜底（无专属 flowing）\r
\r
  // ========== 批量注册：为所有未单独注册的连线提供全局样式 ==========\r
  // 使用 registerEdgeStateHandlers 批量注册多个状态\r
\r
  // ========== 创建演示节点 ==========\r
\r
  const startNode = graph.addNode({\r
    id: 'start',\r
    shape: 'rect',\r
    x: 80,\r
    y: 120,\r
    width: 100,\r
    height: 60,\r
    label: '开始',\r
    attrs: {\r
      body: {\r
        stroke: '#5b8ff9',\r
        strokeWidth: 2,\r
        fill: '#e6f4ff',\r
      },\r
      label: {\r
        fill: '#003a8c',\r
        fontSize: 14,\r
      },\r
    },\r
  })\r
\r
  const node1 = graph.addNode({\r
    id: 'node1',\r
    shape: 'rect',\r
    x: 280,\r
    y: 40,\r
    width: 100,\r
    height: 60,\r
    label: '任务 A',\r
    attrs: {\r
      label: {\r
        fontSize: 14,\r
      },\r
    },\r
  })\r
\r
  const node2 = graph.addNode({\r
    id: 'node2',\r
    shape: 'rect',\r
    x: 280,\r
    y: 140,\r
    width: 100,\r
    height: 60,\r
    label: '任务 B',\r
    attrs: {\r
      label: {\r
        fontSize: 14,\r
      },\r
    },\r
  })\r
\r
  const node3 = graph.addNode({\r
    id: 'node3',\r
    shape: 'rect',\r
    x: 480,\r
    y: 40,\r
    width: 100,\r
    height: 60,\r
    label: '任务 C',\r
    attrs: {\r
      label: {\r
        fontSize: 14,\r
      },\r
    },\r
  })\r
\r
  const node4 = graph.addNode({\r
    id: 'node4',\r
    shape: 'rect',\r
    x: 480,\r
    y: 140,\r
    width: 100,\r
    height: 60,\r
    label: '任务 D',\r
    attrs: {\r
      label: {\r
        fontSize: 14,\r
      },\r
    },\r
  })\r
\r
  const endNode = graph.addNode({\r
    id: 'end',\r
    shape: 'rect',\r
    x: 680,\r
    y: 120,\r
    width: 100,\r
    height: 60,\r
    label: '结束',\r
    attrs: {\r
      body: {\r
        stroke: '#5b8ff9',\r
        strokeWidth: 2,\r
        fill: '#e6f4ff',\r
      },\r
      label: {\r
        fill: '#003a8c',\r
        fontSize: 14,\r
      },\r
    },\r
  })\r
\r
  // ========== 创建演示连线（展示不同类型的状态）==========\r
\r
  // flow-edge 类型连线 × 2\r
  const edge1 = graph.addEdge({\r
    id: 'edge1',\r
    shape: 'flow-edge',\r
    source: startNode,\r
    target: node1,\r
    labels: ['流程线'],\r
  })\r
  designer.setEdgeState(edge1, 'default')\r
\r
  const edge2 = graph.addEdge({\r
    id: 'edge2',\r
    shape: 'flow-edge',\r
    source: node1,\r
    target: node3,\r
    labels: ['流程线'],\r
  })\r
  designer.setEdgeState(edge2, 'default')\r
\r
  // edge 类型连线 × 2（内置标准连线）\r
  const edge3 = graph.addEdge({\r
    id: 'edge3',\r
    shape: 'edge',  // 使用内置的 'edge' 类型\r
    source: startNode,\r
    target: node2,\r
    labels: ['标准线'],\r
  })\r
  designer.setEdgeState(edge3, 'default')\r
\r
  const edge4 = graph.addEdge({\r
    id: 'edge4',\r
    shape: 'edge',\r
    source: node2,\r
    target: node4,\r
    labels: ['标准线'],\r
  })\r
  designer.setEdgeState(edge4, 'default')\r
\r
  const edge5 = graph.addEdge({\r
    id: 'edge5',\r
    shape: 'flow-edge',\r
    source: node3,\r
    target: endNode,\r
    labels: ['流程线'],\r
  })\r
  designer.setEdgeState(edge5, 'default')\r
\r
  const edge6 = graph.addEdge({\r
    id: 'edge6',\r
    shape: 'edge',\r
    source: node4,\r
    target: endNode,\r
    labels: ['标准线'],\r
  })\r
  designer.setEdgeState(edge6, 'default')\r
\r
  // 居中显示\r
  graph.centerContent()\r
\r
  // ========== 交互：点击连线切换状态，双击切换到 flowing（仅 flow-edge 支持）==========\r
\r
  const stateCycle: Record<string, string[]> = {\r
    'flow-edge': ['default', 'hover', 'selected', 'flowing'],\r
    'edge': ['default', 'hover', 'selected'],  // edge 没有 flowing\r
  }\r
  const currentIndex = new Map<string, number>()\r
\r
  graph.on('edge:click', ({ edge }) => {\r
    const shape = edge.shape as string\r
    const cycle = stateCycle[shape] || ['default']\r
    const idx = ((currentIndex.get(edge.id) ?? 0) + 1) % cycle.length\r
    currentIndex.set(edge.id, idx)\r
    const nextState = cycle[idx]\r
    designer.setEdgeState(edge, nextState)\r
    message.info(\`[\${shape}] \${edge.id} → \${nextState}\`)\r
  })\r
\r
  graph.on('edge:dblclick', ({ edge }) => {\r
    const shape = edge.shape as string\r
    const currentState = edge.getProp('_state') || 'default'\r
\r
    if (currentState === 'flowing') {\r
      designer.setEdgeState(edge, 'default')\r
      currentIndex.set(edge.id, 0)\r
      message.success(\`[\${shape}] \${edge.id} 已恢复 default\`)\r
      return\r
    }\r
\r
    // 检查该类型是否注册了 flowing 处理器\r
    const hasFlowing = designer.getEdgeStateHandlerForType(shape, 'flowing')\r
    if (hasFlowing) {\r
      designer.setEdgeState(edge, 'flowing')\r
      message.warning(\`[\${shape}] \${edge.id} → flowing（双击恢复）\`)\r
    } else {\r
      message.info(\`[\${shape}] 未注册 flowing 状态，无法设置\`)\r
    }\r
  })\r
\r
  console.log('[Demo] 按连线类型注册不同状态处理器示例已加载')\r
  message.success('flow-edge/edge 各有专属状态，单击循环，双击切换 flowing')\r
}\r
<\/script>\r
`,bp={style:{width:"100%",height:"100%"}},vp={class:"body"},_p={class:"info"},xp={class:"name"},yp=G({__name:"vueNode1",props:{node:{}},setup(T){const v=T,a=Tn("getGraph"),c=S(!1),l=S(""),g=()=>{l.value=v.node.getProp("label")};return $n(()=>{g(),v.node.on("change:data",g),v.node.on("change:label",g);const x=a==null?void 0:a();x&&(x.on("cell:selected",({cell:s})=>{s.id===v.node.id&&(c.value=!0)}),x.on("cell:unselected",({cell:s})=>{s.id===v.node.id&&(c.value=!1)}))}),Pn(()=>{v.node.off("change:data",g),v.node.off("change:label",g)}),(x,s)=>(h(),b("div",bp,[n("div",{class:an(["vue-node1",{"vue-node1--selected":c.value}])},[n("div",vp,[n("div",_p,[n("div",xp,D(l.value||"开始"),1)])])],2)]))}}),kp=U(yp,[["__scopeId","data-v-683ccd01"]]),wp={class:"demo-performance"},Sp={class:"demo-performance__panel"},Np={class:"demo-performance__panel-content"},Cp={class:"demo-performance__config-item"},Dp={class:"demo-performance__input-group"},$p=["disabled"],Ep={class:"demo-performance__config-item"},Fp={class:"demo-performance__config-item"},Lp={class:"demo-performance__config-item"},Tp={class:"demo-performance__checkbox"},Rp={class:"demo-performance__config-item"},zp={class:"demo-performance__checkbox"},Ap=["disabled"],Mp={class:"demo-performance__config-item"},Wp={class:"demo-performance__checkbox"},Ip={class:"demo-performance__metrics"},Pp={class:"demo-performance__metric-item"},Gp={class:"demo-performance__metric-value"},Op={class:"demo-performance__metric-item"},Hp={class:"demo-performance__metric-value"},Bp={key:0,class:"demo-performance__metric-item"},Vp={class:"demo-performance__metric-value"},Up={class:"demo-performance__metric-item"},Zp={class:"demo-performance__metric-value"},qp={class:"demo-performance__metric-item"},jp={class:"demo-performance__metric-value"},Yp={class:"demo-performance__metric-item"},Xp={class:"demo-performance__metric-value"},Jp={class:"demo-performance__metric-item"},Kp={class:"demo-performance__metric-value"},Qp={key:1,class:"demo-performance__metric-item"},ng={class:"demo-performance__metric-value performance-dragging"},eg={class:"demo-performance__canvas"},rg={class:"cvn-task__body"},tg={class:"cvn-task__title"},og={class:"cvn-task__owner"},sg=G({__name:"demo-performance",setup(T){$n(()=>{In({shape:"vue-node-1",component:kp,width:120,height:60}),console.log("[自定义节点] vue-node-1 已注册")});const v=S(),a=S(),c=S(),l=S(200),g=S("grid"),x=S("rect"),s=S(!0),o=S(!0),t=S(!0),e=S(!1),i=S(0),r=S(0),p=S(0),m=S(0),u=S(0),N=S(0),k=S(0),d=S(0),_=S(""),$=S({});function A(){const W=["#1890ff","#52c41a","#faad14","#f5222d","#722ed1","#13c2c2","#eb2f96","#fa8c16","#a0d911","#2f54eb","#fa541c","#9254de","#fadb14","#096dd9","#f759ab"];return W[Math.floor(Math.random()*W.length)]}function C(W,w,I){if(I==="grid"){const Z=Math.ceil(Math.sqrt(w)),X=Math.floor(W/Z);return{x:50+W%Z*200,y:50+X*120}}else if(I==="circular"){const Z=Math.min(w*15,800),X=W/w*Math.PI*2;return{x:1e3+Z*Math.cos(X),y:800+Z*Math.sin(X)}}else return{x:Math.random()*3e3+100,y:Math.random()*2e3+100}}async function L(){if(!c.value||e.value)return;e.value=!0;const W=performance.now();try{const w=c.value;ln.value!==null&&(clearTimeout(ln.value),ln.value=null,console.log("[性能优化] 取消待执行的恢复定时器")),R.length=0,Q.value=!1,_.value="",w.off("node:added"),w.off("edge:added"),console.log("[清空画布] 清空前节点数:",w.getNodes().length,"连线数:",w.getEdges().length),w.clearCells(),await new Promise(tn=>requestAnimationFrame(()=>requestAnimationFrame(tn))),console.log("[清空画布] 清空后节点数:",w.getNodes().length,"连线数:",w.getEdges().length),i.value=0,r.value=0,p.value=0,m.value=0,u.value=0,N.value=0,k.value=0,d.value=0;const I=performance.now(),Z=[];for(let tn=0;tn<l.value;tn++){const Y=C(tn,l.value,g.value),B=A();let q={id:`node-${tn}`,x:Y.x,y:Y.y,label:`节点 ${tn+1}`,data:{index:tn,color:B}};x.value==="rect"?(q.shape="rect",q.width=120,q.height=60,q.attrs={body:{fill:B,stroke:B,strokeWidth:2,rx:6,ry:6},label:{fill:"#fff",fontSize:12,fontWeight:"bold"}}):x.value==="circle"?(q.shape="circle",q.width=80,q.height=80,q.attrs={body:{fill:B,stroke:B,strokeWidth:2},label:{fill:"#fff",fontSize:12,fontWeight:"bold"}}):x.value==="common-vue-node"?(q.shape="common-vue-node",q["node-type"]="custom-nodetype1",q.width=120,q.height=60,q.attrs={body:{fill:B,stroke:B,strokeWidth:2},label:{fill:"#fff",fontSize:12,fontWeight:"bold"}}):x.value==="vue-node-1"&&(q.shape="vue-node-1",q.width=120,q.height=60,q.data={...q.data,status:"运行中"}),Z.push(q)}let X=0,j=0;const sn=Z.length,pn=()=>{j===0&&(X=performance.now(),console.log("[渲染统计] 开始渲染节点，总数:",sn)),j++,j===sn&&(console.log("[渲染统计] 所有节点已添加到 graph，等待 DOM 渲染完成..."),w.off("node:added",pn),requestAnimationFrame(()=>{requestAnimationFrame(()=>{const tn=performance.now()-X;console.log("[渲染统计] 节点 DOM 渲染完成，耗时:",tn.toFixed(2),"ms"),p.value=Math.round(tn),!s.value||l.value<=1?(m.value=0,u.value=p.value,r.value=p.value,on(w,W)):M(w,W,X)})}))};w.on("node:added",pn),w.addNodes(Z),i.value=Math.round(performance.now()-I)}finally{e.value=!1}}function M(W,w,I){const Z=performance.now();console.log("[渲染统计] 节点渲染完成，开始生成连线数据...");const X=[];for(let B=0;B<l.value-1;B++){const q={id:`edge-${B}`,source:`node-${B}`,target:`node-${B+1}`,router:{name:"metro",args:{padding:20}},connector:{name:"rounded",args:{radius:8}},attrs:{line:{stroke:"#8c8c8c",strokeWidth:1,targetMarker:{name:"classic",size:6}}}};o.value&&(q.labels=[`连线 ${B+1}`]),X.push(q)}const j=Math.min(Math.floor(l.value*.2),100);for(let B=0;B<j;B++){const q=Math.floor(Math.random()*l.value),On=Math.floor(Math.random()*l.value);if(q!==On){const Hn={id:`edge-extra-${B}`,source:`node-${q}`,target:`node-${On}`,router:{name:"metro",args:{padding:20}},connector:{name:"rounded",args:{radius:8}},attrs:{line:{stroke:"#d9d9d9",strokeWidth:1,strokeDasharray:"5,5",targetMarker:{name:"classic",size:5}}}};o.value&&(Hn.labels=[`额外 ${B+1}`]),X.push(Hn)}}console.log(`[渲染统计] 连线数据生成完成，耗时: ${Math.round(performance.now()-Z)}ms，连线总数: ${X.length}`);let sn=0;const pn=X.length;let tn=0;const Y=()=>{tn===0&&(sn=performance.now(),console.log("[渲染统计] 开始渲染连线，总数:",pn)),tn++,tn===pn&&(console.log("[渲染统计] 所有连线已添加到 graph，等待 DOM 渲染完成..."),W.off("edge:added",Y),requestAnimationFrame(()=>{requestAnimationFrame(()=>{const B=performance.now()-sn;console.log("[渲染统计] 连线 DOM 渲染完成，耗时:",B.toFixed(2),"ms"),m.value=Math.round(B);const q=performance.now()-I;u.value=Math.round(q),r.value=u.value,console.log("[渲染统计] 渲染总耗时:",q.toFixed(2),"ms"),console.log("[渲染统计] 验证：节点渲染 + 连线渲染 =",p.value,"+",m.value,"=",p.value+m.value,"ms"),on(W,w)})}))};W.on("edge:added",Y),W.addEdges(X)}function on(W,w){k.value=W.getNodes().length,d.value=W.getEdges().length,N.value=Math.round(performance.now()-w),console.log("[渲染统计] ========== 性能统计 =========="),console.log("[渲染统计] 数据生成耗时:",i.value,"ms"),console.log("[渲染统计] 节点渲染耗时:",p.value,"ms"),console.log("[渲染统计] 连线渲染耗时:",m.value,"ms"),console.log("[渲染统计] 渲染总耗时:",u.value,"ms"),console.log("[渲染统计] 总耗时:",N.value,"ms"),console.log("[渲染统计] 节点数:",k.value),console.log("[渲染统计] 连线数:",d.value),console.log("[渲染统计] ================================"),setTimeout(()=>{W.zoomToFit({padding:20,maxScale:1})},100)}function cn(){if(!c.value)return;const W=c.value,w=W.getEdges();s.value?L():(w.forEach(I=>W.removeEdge(I)),d.value=0)}function Cn(){if(!c.value)return;c.value.getEdges().forEach((I,Z)=>{o.value?I.setLabels([{attrs:{label:{text:`连线 ${Z+1}`,fontSize:10,fill:"#595959"},rect:{fill:"#ffffff",stroke:"#d9d9d9",strokeWidth:1,rx:3,ry:3}}}]):I.setLabels([])})}function _n(){c.value&&(ln.value&&(clearTimeout(ln.value),ln.value=null),c.value.clearCells(),Q.value=!1,R.length=0,_.value="",k.value=0,d.value=0,i.value=0,r.value=0,p.value=0,m.value=0,u.value=0,N.value=0,console.log("[clearCanvas] 画布已清空，状态已重置"))}function Mn(){c.value&&c.value.zoomToFit({padding:20,maxScale:1})}const Q=S(!1),ln=S(null),R=[];let y=!1;const en={LIGHT:10,MEDIUM:20,HEAVY:100};function gn(W){return W<=en.LIGHT?"switchRouter":(W<=en.MEDIUM,"removeAffectedEdges")}function En(){if(console.log("[DEBUG] startDragOptimization 被调用"),console.log("[DEBUG] graphRef.value:",!!c.value,"isDragging.value:",Q.value,"enableDragOptimization.value:",t.value),!c.value||Q.value||!t.value){console.warn("[DEBUG] 提前返回，原因:",{noGraph:!c.value,alreadyDragging:Q.value,optimizationDisabled:!t.value});return}const W=performance.now();Q.value=!0;const w=c.value,I=w.getSelectedCells();console.log("[DEBUG] 从 Selection 获取的选中 cells:",I.length);const Z=I.filter(Y=>Y.isNode());if(console.log("[DEBUG] 过滤后的移动节点数:",Z.length),Z.length===0){console.warn("[性能优化] 没有找到选中的节点"),Q.value=!1;return}console.log(`[性能优化] 开始拖动优化，移动节点数: ${Z.length}`);const X=new Set;Z.forEach(Y=>{const B=w.getConnectedEdges(Y);console.log(`[DEBUG] 节点 ${Y.id} 的连接边数:`,B.length),B.forEach(q=>X.add(q))});const j=Array.from(X),sn=w.getEdges().length;console.log(`[性能优化] 受影响的边: ${j.length} / ${sn} (${(j.length/sn*100).toFixed(1)}%)`);const pn=gn(j.length);if(console.log("[性能优化] 选择策略:",pn,"阈值配置:",en),R.length=0,pn==="removeAllEdges"){console.log("[性能优化] 策略: 移除所有边（极端情况）"),_.value=`已移除所有连线 (${sn})`;const Y=w.getEdges();Y.forEach(B=>{R.push({id:B.id,source:B.getSourceCellId(),target:B.getTargetCellId(),router:B.getRouter(),connector:B.getConnector(),labels:B.getLabels(),attrs:B.getAttrs(),zIndex:B.getZIndex(),shape:B.shape})}),w.removeCells(Y),console.log("[性能优化] 已移除",R.length,"条边")}else pn==="removeAffectedEdges"?(console.log("[性能优化] 策略: 只移除受影响的边（局部优化）⭐"),_.value=`已移除相关连线 (${j.length}/${sn})`,j.forEach(Y=>{R.push({id:Y.id,source:Y.getSourceCellId(),target:Y.getTargetCellId(),router:Y.getRouter(),connector:Y.getConnector(),labels:Y.getLabels(),attrs:Y.getAttrs(),zIndex:Y.getZIndex(),shape:Y.shape})}),w.removeCells(j),console.log("[性能优化] 已移除",R.length,"条受影响的边")):(console.log("[性能优化] 策略: 切换受影响边的路由为 normal"),_.value=`已简化路由 (${j.length} 条边)`,j.forEach(Y=>{R.push({id:Y.id,originalRouter:Y.getRouter()}),Y.setRouter({name:"normal"})}),console.log("[性能优化] 已简化",j.length,"条边的路由"));const tn=performance.now()-W;console.log(`[性能优化] 优化应用完成，耗时: ${tn.toFixed(2)}ms`)}function kn(){!c.value||!Q.value||(y=!1,ln.value!==null&&clearTimeout(ln.value),ln.value=window.setTimeout(()=>{try{const W=performance.now();Q.value=!1;const w=c.value;if(!w){console.log("[endDragOptimization] Graph 已销毁，跳过恢复"),R.length=0,_.value="";return}if(R.length>0){const I=R[0];if(I.source&&I.target){console.log("[性能优化] 恢复被移除的边，数量:",R.length),w.addEdges(R);const Z=performance.now()-W;console.log(`[性能优化] 已恢复 ${R.length} 条边，耗时: ${Z.toFixed(2)}ms`),R.length=0,ln.value=null,_.value="";return}else if(I.originalRouter){console.log("[性能优化] 恢复受影响边的路由，数量:",R.length);let Z=0;R.forEach(j=>{const sn=w.getCellById(j.id);sn&&sn.isEdge()&&(sn.setRouter(j.originalRouter),Z++)});const X=performance.now()-W;console.log(`[性能优化] 已恢复 ${Z} 条边的路由，耗时: ${X.toFixed(2)}ms`),R.length=0,ln.value=null,_.value="";return}}console.log("[endDragOptimization] 无需恢复"),ln.value=null,_.value=""}catch(W){console.error("[endDragOptimization] 恢复配置时出错:",W),R.length=0,ln.value=null,_.value="",Q.value=!1}},150))}function Gn(W){let w=0,I=!1,Z=!1;const X=5;W.on("node:mousedown",({node:j})=>{I=!0,Z=!1,w=0,y=!1,console.log("[拖动优化] 开始按下节点:",j.id,"重置标志")}),W.on("node:change:position",({node:j})=>{Z=!0,console.log("[DEBUG] node:change:position 触发, node:",j.id,"dragStartDistance:",w,"hasTriggeredOptimization:",y,"isDragging:",Q.value,"isMouseDown:",I),!y&&!Q.value&&(w++,console.log("[DEBUG] dragStartDistance 递增到:",w,"DRAG_THRESHOLD:",X),w>X&&(y=!0,console.log("[拖动优化] 触发优化，dragStartDistance:",w),En()))}),W.on("node:moved",({node:j})=>{console.log("[拖动优化] 节点移动结束:",j.id),setTimeout(()=>{Q.value&&!I&&(console.log("[拖动优化] 所有节点停止移动，准备恢复"),kn())},50)}),W.on("blank:mouseup",()=>{console.log("[拖动优化] blank mouseup"),I=!1,Q.value&&Z&&(Z=!1,kn())}),W.on("node:mouseup",({node:j})=>{console.log("[拖动优化] 节点 mouseup:",j.id),I=!1,setTimeout(()=>{Q.value&&Z&&(console.log("[拖动优化] mouseup 后检查：准备恢复"),Z=!1,kn())},50)}),console.log("[性能优化] 拖动优化监听器已设置")}function Fn(W,w){a.value=W,c.value=w,Gn(w),L()}return(W,w)=>(h(),b("div",wp,[n("div",Sp,[w[25]||(w[25]=n("div",{class:"demo-performance__panel-header"},[n("h4",null,"性能测试配置")],-1)),n("div",Np,[n("div",Cp,[w[6]||(w[6]=n("label",{class:"demo-performance__label"},"节点数量",-1)),n("div",Dp,[nn(n("input",{type:"number","onUpdate:modelValue":w[0]||(w[0]=I=>l.value=I),min:10,max:2e3,class:"demo-performance__input"},null,512),[[Ln,l.value,void 0,{number:!0}]]),n("button",{class:"demo-performance__btn demo-performance__btn--primary",onClick:L,disabled:e.value},D(e.value?"生成中...":"重新生成"),9,$p)]),w[7]||(w[7]=n("div",{class:"demo-performance__hint"}," 建议范围：10-2000 个节点 ",-1))]),n("div",Ep,[w[9]||(w[9]=n("label",{class:"demo-performance__label"},"布局方式",-1)),nn(n("select",{"onUpdate:modelValue":w[1]||(w[1]=I=>g.value=I),class:"demo-performance__select"},[...w[8]||(w[8]=[n("option",{value:"grid"},"网格布局",-1),n("option",{value:"circular"},"环形布局",-1),n("option",{value:"random"},"随机布局",-1)])],512),[[Bn,g.value]])]),n("div",Fp,[w[11]||(w[11]=n("label",{class:"demo-performance__label"},"节点类型",-1)),nn(n("select",{"onUpdate:modelValue":w[2]||(w[2]=I=>x.value=I),class:"demo-performance__select"},[...w[10]||(w[10]=[n("option",{value:"rect"},"矩形节点 (rect)",-1),n("option",{value:"circle"},"圆形节点 (circle)",-1),n("option",{value:"common-vue-node"},"Vue 插槽节点",-1),n("option",{value:"vue-node-1"},"Vue 注册节点 🚀",-1)])],512),[[Bn,x.value]])]),n("div",Lp,[n("label",Tp,[nn(n("input",{type:"checkbox","onUpdate:modelValue":w[3]||(w[3]=I=>s.value=I),onChange:cn},null,544),[[dn,s.value]]),w[12]||(w[12]=P(" 显示连线 ",-1))])]),n("div",Rp,[n("label",zp,[nn(n("input",{type:"checkbox","onUpdate:modelValue":w[4]||(w[4]=I=>o.value=I),disabled:!s.value,onChange:Cn},null,40,Ap),[[dn,o.value]]),w[13]||(w[13]=P(" 显示连线标签 ",-1))])]),n("div",Mp,[n("label",Wp,[nn(n("input",{type:"checkbox","onUpdate:modelValue":w[5]||(w[5]=I=>t.value=I),checked:""},null,512),[[dn,t.value]]),w[14]||(w[14]=P(" 启用拖动优化 ",-1))]),w[15]||(w[15]=n("div",{class:"demo-performance__hint",style:{"margin-top":"4px"}}," 拖动节点时自动简化连线渲染 ",-1))]),n("div",Ip,[w[24]||(w[24]=n("h5",{class:"demo-performance__metrics-title"},"性能指标",-1)),n("div",Pp,[w[16]||(w[16]=n("span",{class:"demo-performance__metric-label"},"数据生成耗时：",-1)),n("span",Gp,D(i.value)+"ms",1)]),n("div",Op,[w[17]||(w[17]=n("span",{class:"demo-performance__metric-label"},"节点渲染耗时：",-1)),n("span",Hp,D(p.value)+"ms",1)]),s.value&&d.value>0?(h(),b("div",Bp,[w[18]||(w[18]=n("span",{class:"demo-performance__metric-label"},"连线渲染耗时：",-1)),n("span",Vp,D(m.value)+"ms",1)])):z("",!0),n("div",Up,[w[19]||(w[19]=n("span",{class:"demo-performance__metric-label"},"渲染总耗时：",-1)),n("span",Zp,D(u.value)+"ms",1)]),n("div",qp,[w[20]||(w[20]=n("span",{class:"demo-performance__metric-label"},"总耗时：",-1)),n("span",jp,D(N.value)+"ms",1)]),n("div",Yp,[w[21]||(w[21]=n("span",{class:"demo-performance__metric-label"},"当前节点数：",-1)),n("span",Xp,D(k.value),1)]),n("div",Jp,[w[22]||(w[22]=n("span",{class:"demo-performance__metric-label"},"当前连线数：",-1)),n("span",Kp,D(d.value),1)]),Q.value?(h(),b("div",Qp,[w[23]||(w[23]=n("span",{class:"demo-performance__metric-label"},"🔴 拖动中：",-1)),n("span",ng,D(_.value),1)])):z("",!0)]),n("div",{class:"demo-performance__actions"},[n("button",{class:"demo-performance__btn demo-performance__btn--secondary",onClick:_n}," 清空画布 "),n("button",{class:"demo-performance__btn demo-performance__btn--secondary",onClick:Mn}," 适应画布 ")])])]),n("div",eg,[w[27]||(w[27]=n("div",{class:"demo-performance__tip"}," 💡 性能测试 Demo - 测试大量节点的渲染性能。拖动优化已启用，拖动节点时会自动简化连线渲染。 ",-1)),f(F(V),{ref_key:"layoutRef",ref:v,onReady:Fn,"canvas-config":$.value},{"node-custom-nodetype1":E(({node:I,graph:Z,data:X,label:j,state:sn})=>{var pn;return[n("div",{class:an(["cvn-task",{"cvn-task--selected":(I==null?void 0:I.id)==((pn=W.selectedNode)==null?void 0:pn.id)}]),"data-cvn-root":""},[w[26]||(w[26]=n("div",{class:"cvn-task__bar"},null,-1)),n("div",rg,[n("div",tg,D(j||"自定义vue插槽节点1"),1),n("div",og,"负责人："+D(X.owner||"未指定")+" state: "+D(sn),1)])],2)]}),_:1},8,["canvas-config"])])]))}}),lg=U(sg,[["__scopeId","data-v-5b92938e"]]),ig=`<template>\r
  <div class="demo-performance">\r
    <!-- 配置面板 -->\r
    <div class="demo-performance__panel">\r
      <div class="demo-performance__panel-header">\r
        <h4>性能测试配置</h4>\r
      </div>\r
      <div class="demo-performance__panel-content">\r
        <!-- 节点数量配置 -->\r
        <div class="demo-performance__config-item">\r
          <label class="demo-performance__label">节点数量</label>\r
          <div class="demo-performance__input-group">\r
            <input\r
              type="number"\r
              v-model.number="nodeCount"\r
              :min="10"\r
              :max="2000"\r
              class="demo-performance__input"\r
            />\r
            <button\r
              class="demo-performance__btn demo-performance__btn--primary"\r
              @click="generateNodes"\r
              :disabled="isGenerating"\r
            >\r
              {{ isGenerating ? '生成中...' : '重新生成' }}\r
            </button>\r
          </div>\r
          <div class="demo-performance__hint">\r
            建议范围：10-2000 个节点\r
          </div>\r
        </div>\r
\r
        <!-- 布局方式 -->\r
        <div class="demo-performance__config-item">\r
          <label class="demo-performance__label">布局方式</label>\r
          <select v-model="layoutType" class="demo-performance__select">\r
            <option value="grid">网格布局</option>\r
            <option value="circular">环形布局</option>\r
            <option value="random">随机布局</option>\r
          </select>\r
        </div>\r
\r
        <!-- 节点类型选择 -->\r
        <div class="demo-performance__config-item">\r
          <label class="demo-performance__label">节点类型</label>\r
          <select v-model="nodeType" class="demo-performance__select">\r
            <option value="rect">矩形节点 (rect)</option>\r
            <option value="circle">圆形节点 (circle)</option>\r
            <option value="common-vue-node">Vue 插槽节点</option>\r
            <option value="vue-node-1">Vue 注册节点 🚀</option>\r
          </select>\r
        </div>\r
\r
        <!-- 连线配置 -->\r
        <div class="demo-performance__config-item">\r
          <label class="demo-performance__checkbox">\r
            <input type="checkbox" v-model="showEdges" @change="toggleEdges" />\r
            显示连线\r
          </label>\r
        </div>\r
\r
        <!-- 连线标签配置 -->\r
        <div class="demo-performance__config-item">\r
          <label class="demo-performance__checkbox">\r
            <input type="checkbox" v-model="showEdgeLabels" :disabled="!showEdges" @change="toggleEdgeLabels" />\r
            显示连线标签\r
          </label>\r
        </div>\r
\r
        <!-- 拖动优化配置 -->\r
        <div class="demo-performance__config-item">\r
          <label class="demo-performance__checkbox">\r
            <input type="checkbox" v-model="enableDragOptimization" checked />\r
            启用拖动优化\r
          </label>\r
          <div class="demo-performance__hint" style="margin-top: 4px;">\r
            拖动节点时自动简化连线渲染\r
          </div>\r
        </div>\r
\r
        <!-- 性能指标 -->\r
        <div class="demo-performance__metrics">\r
          <h5 class="demo-performance__metrics-title">性能指标</h5>\r
          <div class="demo-performance__metric-item">\r
            <span class="demo-performance__metric-label">数据生成耗时：</span>\r
            <span class="demo-performance__metric-value">{{ generateTime }}ms</span>\r
          </div>\r
          <div class="demo-performance__metric-item">\r
            <span class="demo-performance__metric-label">节点渲染耗时：</span>\r
            <span class="demo-performance__metric-value">{{ nodeRenderTime }}ms</span>\r
          </div>\r
          <div class="demo-performance__metric-item" v-if="showEdges && currentEdgeCount > 0">\r
            <span class="demo-performance__metric-label">连线渲染耗时：</span>\r
            <span class="demo-performance__metric-value">{{ edgeRenderTime }}ms</span>\r
          </div>\r
          <div class="demo-performance__metric-item">\r
            <span class="demo-performance__metric-label">渲染总耗时：</span>\r
            <span class="demo-performance__metric-value">{{ totalRenderTime }}ms</span>\r
          </div>\r
          <div class="demo-performance__metric-item">\r
            <span class="demo-performance__metric-label">总耗时：</span>\r
            <span class="demo-performance__metric-value">{{ totalTime }}ms</span>\r
          </div>\r
          <div class="demo-performance__metric-item">\r
            <span class="demo-performance__metric-label">当前节点数：</span>\r
            <span class="demo-performance__metric-value">{{ currentNodeCount }}</span>\r
          </div>\r
          <div class="demo-performance__metric-item">\r
            <span class="demo-performance__metric-label">当前连线数：</span>\r
            <span class="demo-performance__metric-value">{{ currentEdgeCount }}</span>\r
          </div>\r
          <div class="demo-performance__metric-item" v-if="isDragging">\r
            <span class="demo-performance__metric-label">🔴 拖动中：</span>\r
            <span class="demo-performance__metric-value performance-dragging">{{ dragOptimizationStatus }}</span>\r
          </div>\r
        </div>\r
\r
        <!-- 操作按钮 -->\r
        <div class="demo-performance__actions">\r
          <button\r
            class="demo-performance__btn demo-performance__btn--secondary"\r
            @click="clearCanvas"\r
          >\r
            清空画布\r
          </button>\r
          <button\r
            class="demo-performance__btn demo-performance__btn--secondary"\r
            @click="fitView"\r
          >\r
            适应画布\r
          </button>\r
        </div>\r
      </div>\r
    </div>\r
\r
    <!-- 画布容器 -->\r
    <div class="demo-performance__canvas">\r
      <div class="demo-performance__tip">\r
        💡 性能测试 Demo - 测试大量节点的渲染性能。拖动优化已启用，拖动节点时会自动简化连线渲染。\r
      </div>\r
      <FlowDesignerLayout\r
        ref="layoutRef"\r
        @ready="handleReady"\r
        :canvas-config="canvasConfig"\r
      >\r
        <template #node-custom-nodetype1="{ node, graph, data, label, state }">\r
          <div class="cvn-task" data-cvn-root :class="{ 'cvn-task--selected': node?.id == selectedNode?.id }">\r
            <div class="cvn-task__bar" />\r
            <div class="cvn-task__body">\r
              <!-- ✅ 新方式：使用响应式 label、data 和 state -->\r
              <div class="cvn-task__title">{{ label || '自定义vue插槽节点1' }}</div>\r
              <div class="cvn-task__owner">负责人：{{ data.owner || '未指定' }} state: {{ state }}</div>\r
            </div>\r
          </div>\r
        </template>\r
      </FlowDesignerLayout>\r
    </div>\r
  </div>\r
</template>\r
\r
<script setup lang="ts">\r
import { ref, computed, onMounted } from 'vue'\r
import { FlowDesignerLayout }  from '@quick-code/x6-flow-designer'\r
import type { FlowDesigner } from '@quick-code/x6-flow-designer'\r
import type { Graph } from '@antv/x6'\r
import { register } from '@antv/x6-vue-shape'\r
import VueNode1 from './components/vueNode1.vue'\r
\r
// 注册自定义 Vue 节点\r
onMounted(() => {\r
  register({\r
    shape: 'vue-node-1',\r
    component: VueNode1,\r
    width: 120,\r
    height: 60,\r
  })\r
  console.log('[自定义节点] vue-node-1 已注册')\r
})\r
\r
const layoutRef = ref()\r
const designerRef = ref<FlowDesigner>()\r
const graphRef = ref<Graph>()\r
\r
// 配置项\r
const nodeCount = ref(200)\r
const layoutType = ref<'grid' | 'circular' | 'random'>('grid')\r
const nodeType = ref<'rect' | 'circle' | 'common-vue-node' | 'vue-node-1'>('rect')\r
const showEdges = ref(true)\r
const showEdgeLabels = ref(true)\r
const enableDragOptimization = ref(true)\r
const isGenerating = ref(false)\r
\r
// 性能指标\r
const generateTime = ref(0)\r
const renderTime = ref(0)\r
const nodeRenderTime = ref(0)  // 节点渲染时长\r
const edgeRenderTime = ref(0)  // 连线渲染时长\r
const totalRenderTime = ref(0) // 渲染总时长（节点+连线）\r
const totalTime = ref(0)\r
const currentNodeCount = ref(0)\r
const currentEdgeCount = ref(0)\r
const dragOptimizationStatus = ref('')\r
\r
// 画布配置\r
const canvasConfig = ref({\r
})\r
\r
// 生成随机颜色\r
function getRandomColor(): string {\r
  const colors = [\r
    '#1890ff', '#52c41a', '#faad14', '#f5222d', '#722ed1',\r
    '#13c2c2', '#eb2f96', '#fa8c16', '#a0d911', '#2f54eb',\r
    '#fa541c', '#9254de', '#fadb14', '#096dd9', '#f759ab',\r
  ]\r
  return colors[Math.floor(Math.random() * colors.length)]\r
}\r
\r
// 计算节点位置\r
function calculateNodePosition(index: number, total: number, type: 'grid' | 'circular' | 'random') {\r
  if (type === 'grid') {\r
    const cols = Math.ceil(Math.sqrt(total))\r
    const row = Math.floor(index / cols)\r
    const col = index % cols\r
    return {\r
      x: 50 + col * 200,\r
      y: 50 + row * 120,\r
    }\r
  } else if (type === 'circular') {\r
    const radius = Math.min(total * 15, 800)\r
    const angle = (index / total) * Math.PI * 2\r
    return {\r
      x: 1000 + radius * Math.cos(angle),\r
      y: 800 + radius * Math.sin(angle),\r
    }\r
  } else {\r
    // random\r
    return {\r
      x: Math.random() * 3000 + 100,\r
      y: Math.random() * 2000 + 100,\r
    }\r
  }\r
}\r
\r
// 生成节点\r
async function generateNodes() {\r
  if (!graphRef.value || isGenerating.value) return\r
\r
  isGenerating.value = true\r
  const startTime = performance.now()\r
\r
  try {\r
    const graph = graphRef.value\r
\r
    // 🔴 修复：清空画布前先取消拖动优化和所有事件监听器\r
    if (dragTimer.value !== null) {\r
      clearTimeout(dragTimer.value)\r
      dragTimer.value = null\r
      console.log('[性能优化] 取消待执行的恢复定时器')\r
    }\r
    removedEdges.length = 0\r
    isDragging.value = false\r
    dragOptimizationStatus.value = ''\r
\r
    // 🔴 修复：移除可能残留的事件监听器，避免竞态条件\r
    graph.off('node:added')\r
    graph.off('edge:added')\r
\r
    // 🔴 修复：强制清空画布，确保没有残留节点\r
    console.log('[清空画布] 清空前节点数:', graph.getNodes().length, '连线数:', graph.getEdges().length)\r
    graph.clearCells()\r
    \r
    // 等待清空操作完成（使用 RAF 确保 DOM 更新完成）\r
    await new Promise(resolve => requestAnimationFrame(() => requestAnimationFrame(resolve)))\r
    console.log('[清空画布] 清空后节点数:', graph.getNodes().length, '连线数:', graph.getEdges().length)\r
\r
    // 🔴 修复：重置性能指标，避免显示旧数据\r
    generateTime.value = 0\r
    renderTime.value = 0\r
    nodeRenderTime.value = 0\r
    edgeRenderTime.value = 0\r
    totalRenderTime.value = 0\r
    totalTime.value = 0\r
    currentNodeCount.value = 0\r
    currentEdgeCount.value = 0\r
\r
    const generateStartTime = performance.now()\r
\r
    // 生成节点数据\r
    const nodes = []\r
    for (let i = 0; i < nodeCount.value; i++) {\r
      const pos = calculateNodePosition(i, nodeCount.value, layoutType.value)\r
      const color = getRandomColor()\r
\r
      let nodeData: any = {\r
        id: \`node-\${i}\`,\r
        x: pos.x,\r
        y: pos.y,\r
        label: \`节点 \${i + 1}\`,\r
        data: {\r
          index: i,\r
          color: color,\r
        },\r
      }\r
\r
      // 根据节点类型设置不同的 shape 和属性\r
      if (nodeType.value === 'rect') {\r
        nodeData.shape = 'rect'\r
        nodeData.width = 120\r
        nodeData.height = 60\r
        nodeData.attrs = {\r
          body: {\r
            fill: color,\r
            stroke: color,\r
            strokeWidth: 2,\r
            rx: 6,\r
            ry: 6,\r
          },\r
          label: {\r
            fill: '#fff',\r
            fontSize: 12,\r
            fontWeight: 'bold',\r
          },\r
        }\r
      } else if (nodeType.value === 'circle') {\r
        nodeData.shape = 'circle'\r
        nodeData.width = 80\r
        nodeData.height = 80\r
        nodeData.attrs = {\r
          body: {\r
            fill: color,\r
            stroke: color,\r
            strokeWidth: 2,\r
          },\r
          label: {\r
            fill: '#fff',\r
            fontSize: 12,\r
            fontWeight: 'bold',\r
          },\r
        }\r
      } else if (nodeType.value === 'common-vue-node') {\r
        nodeData.shape = 'common-vue-node'\r
        nodeData['node-type'] = 'custom-nodetype1'\r
        nodeData.width = 120\r
        nodeData.height = 60\r
        nodeData.attrs = {\r
          body: {\r
            fill: color,\r
            stroke: color,\r
            strokeWidth: 2,\r
          },\r
          label: {\r
            fill: '#fff',\r
            fontSize: 12,\r
            fontWeight: 'bold',\r
          },\r
        }\r
      } else if (nodeType.value === 'vue-node-1') {\r
        nodeData.shape = 'vue-node-1'\r
        nodeData.width = 120\r
        nodeData.height = 60\r
        nodeData.data = {\r
          ...nodeData.data,\r
          status: '运行中',\r
        }\r
      }\r
\r
      nodes.push(nodeData)\r
    }\r
\r
    // 批量添加节点（使用事件监听统计真实渲染耗时）\r
    let renderStartTime = 0\r
    let nodesRendered = 0\r
    const totalNodes = nodes.length\r
\r
    // 监听节点渲染完成\r
    const nodeAddedHandler = () => {\r
      if (nodesRendered === 0) {\r
        renderStartTime = performance.now()\r
        console.log('[渲染统计] 开始渲染节点，总数:', totalNodes)\r
      }\r
      nodesRendered++\r
\r
      if (nodesRendered === totalNodes) {\r
        console.log('[渲染统计] 所有节点已添加到 graph，等待 DOM 渲染完成...')\r
        // 移除监听器\r
        graph.off('node:added', nodeAddedHandler)\r
\r
        // 等待浏览器完成渲染（使用双 RAF 确保渲染完成）\r
        requestAnimationFrame(() => {\r
          requestAnimationFrame(() => {\r
            const nodeRenderDuration = performance.now() - renderStartTime\r
            console.log('[渲染统计] 节点 DOM 渲染完成，耗时:', nodeRenderDuration.toFixed(2), 'ms')\r
\r
            // 记录节点渲染时长\r
            nodeRenderTime.value = Math.round(nodeRenderDuration)\r
\r
            // 如果没有边，直接设置渲染时间\r
            if (!showEdges.value || nodeCount.value <= 1) {\r
              edgeRenderTime.value = 0\r
              totalRenderTime.value = nodeRenderTime.value\r
              renderTime.value = nodeRenderTime.value\r
              updateFinalStats(graph, startTime)\r
            } else {\r
              // ✅ 节点渲染完成后，开始添加连线\r
              addEdgesToGraph(graph, startTime, renderStartTime)\r
            }\r
          })\r
        })\r
      }\r
    }\r
\r
    graph.on('node:added', nodeAddedHandler)\r
    graph.addNodes(nodes)\r
\r
    generateTime.value = Math.round(performance.now() - generateStartTime)\r
\r
  } finally {\r
    isGenerating.value = false\r
  }\r
}\r
\r
// 添加连线到画布（在节点渲染完成后调用）\r
function addEdgesToGraph(graph: Graph, startTime: number, renderStartTime: number) {\r
  const edgeStartTime = performance.now()\r
  console.log('[渲染统计] 节点渲染完成，开始生成连线数据...')\r
\r
  const edges = []\r
\r
  // 主连线（链式连接）\r
  for (let i = 0; i < nodeCount.value - 1; i++) {\r
    const edgeData: any = {\r
      id: \`edge-\${i}\`,\r
      source: \`node-\${i}\`,\r
      target: \`node-\${i + 1}\`,\r
      router: { name: 'metro', args: { padding: 20 } },\r
      connector: { name: 'rounded', args: { radius: 8 } },\r
      attrs: {\r
        line: {\r
          stroke: '#8c8c8c',\r
          strokeWidth: 1,\r
          targetMarker: {\r
            name: 'classic',\r
            size: 6,\r
          },\r
        },\r
      },\r
    }\r
\r
    // 如果启用了标签显示，添加 labels\r
    if (showEdgeLabels.value) {\r
      edgeData.labels = [\`连线 \${i + 1}\`]\r
    }\r
\r
    edges.push(edgeData)\r
  }\r
\r
  // 额外添加一些随机连线以增加复杂度\r
  const extraEdgeCount = Math.min(Math.floor(nodeCount.value * 0.2), 100)\r
  for (let i = 0; i < extraEdgeCount; i++) {\r
    const sourceIndex = Math.floor(Math.random() * nodeCount.value)\r
    const targetIndex = Math.floor(Math.random() * nodeCount.value)\r
\r
    if (sourceIndex !== targetIndex) {\r
      const edgeData: any = {\r
        id: \`edge-extra-\${i}\`,\r
        source: \`node-\${sourceIndex}\`,\r
        target: \`node-\${targetIndex}\`,\r
        router: { name: 'metro', args: { padding: 20 } },\r
        connector: { name: 'rounded', args: { radius: 8 } },\r
        attrs: {\r
          line: {\r
            stroke: '#d9d9d9',\r
            strokeWidth: 1,\r
            strokeDasharray: '5,5',\r
            targetMarker: {\r
              name: 'classic',\r
              size: 5,\r
            },\r
          },\r
        },\r
      }\r
\r
      // 如果启用了标签显示，添加 labels\r
      if (showEdgeLabels.value) {\r
        edgeData.labels = [\`额外 \${i + 1}\`]\r
      }\r
\r
      edges.push(edgeData)\r
    }\r
  }\r
\r
  console.log(\`[渲染统计] 连线数据生成完成，耗时: \${Math.round(performance.now() - edgeStartTime)}ms，连线总数: \${edges.length}\`)\r
\r
  // 批量添加连线（监听边渲染完成）\r
  let edgeRenderStartTime = 0\r
  const totalEdges = edges.length\r
  let localEdgesRendered = 0\r
\r
  const edgeAddedHandler = () => {\r
    if (localEdgesRendered === 0) {\r
      edgeRenderStartTime = performance.now()\r
      console.log('[渲染统计] 开始渲染连线，总数:', totalEdges)\r
    }\r
    localEdgesRendered++\r
\r
    if (localEdgesRendered === totalEdges) {\r
      console.log('[渲染统计] 所有连线已添加到 graph，等待 DOM 渲染完成...')\r
      // 移除监听器\r
      graph.off('edge:added', edgeAddedHandler)\r
\r
      // 等待浏览器完成渲染\r
      requestAnimationFrame(() => {\r
        requestAnimationFrame(() => {\r
          const edgeRenderDuration = performance.now() - edgeRenderStartTime\r
          console.log('[渲染统计] 连线 DOM 渲染完成，耗时:', edgeRenderDuration.toFixed(2), 'ms')\r
\r
          // 记录连线渲染时长\r
          edgeRenderTime.value = Math.round(edgeRenderDuration)\r
\r
          // 计算渲染总时长（从节点开始到连线结束）\r
          const totalRenderDuration = performance.now() - renderStartTime\r
          totalRenderTime.value = Math.round(totalRenderDuration)\r
          renderTime.value = totalRenderTime.value // 保持兼容性\r
\r
          console.log('[渲染统计] 渲染总耗时:', totalRenderDuration.toFixed(2), 'ms')\r
          console.log('[渲染统计] 验证：节点渲染 + 连线渲染 =', nodeRenderTime.value, '+', edgeRenderTime.value, '=', nodeRenderTime.value + edgeRenderTime.value, 'ms')\r
\r
          updateFinalStats(graph, startTime)\r
        })\r
      })\r
    }\r
  }\r
\r
  graph.on('edge:added', edgeAddedHandler)\r
  graph.addEdges(edges)\r
}\r
\r
// 更新最终统计信息（抽取为独立函数，避免重复代码）\r
function updateFinalStats(graph: Graph, startTime: number) {\r
  // 更新统计\r
  currentNodeCount.value = graph.getNodes().length\r
  currentEdgeCount.value = graph.getEdges().length\r
\r
  totalTime.value = Math.round(performance.now() - startTime)\r
\r
  console.log('[渲染统计] ========== 性能统计 ==========')\r
  console.log('[渲染统计] 数据生成耗时:', generateTime.value, 'ms')\r
  console.log('[渲染统计] 节点渲染耗时:', nodeRenderTime.value, 'ms')\r
  console.log('[渲染统计] 连线渲染耗时:', edgeRenderTime.value, 'ms')\r
  console.log('[渲染统计] 渲染总耗时:', totalRenderTime.value, 'ms')\r
  console.log('[渲染统计] 总耗时:', totalTime.value, 'ms')\r
  console.log('[渲染统计] 节点数:', currentNodeCount.value)\r
  console.log('[渲染统计] 连线数:', currentEdgeCount.value)\r
  console.log('[渲染统计] ================================')\r
\r
  // 自动适应画布\r
  setTimeout(() => {\r
    graph.zoomToFit({ padding: 20, maxScale: 1 })\r
  }, 100)\r
}\r
\r
// 切换连线显示\r
function toggleEdges() {\r
  if (!graphRef.value) return\r
\r
  const graph = graphRef.value\r
  const edges = graph.getEdges()\r
\r
  if (showEdges.value) {\r
    // 重新生成节点和连线\r
    generateNodes()\r
  } else {\r
    // 删除所有连线\r
    edges.forEach(edge => graph.removeEdge(edge))\r
    currentEdgeCount.value = 0\r
  }\r
}\r
\r
// 切换连线标签显示\r
function toggleEdgeLabels() {\r
  if (!graphRef.value) return\r
\r
  const graph = graphRef.value\r
  const edges = graph.getEdges()\r
\r
  edges.forEach((edge, index) => {\r
    if (showEdgeLabels.value) {\r
      edge.setLabels([{\r
        attrs: {\r
          label: {\r
            text: \`连线 \${index + 1}\`,\r
            fontSize: 10,\r
            fill: '#595959',\r
          },\r
          rect: {\r
            fill: '#ffffff',\r
            stroke: '#d9d9d9',\r
            strokeWidth: 1,\r
            rx: 3,\r
            ry: 3,\r
          },\r
        },\r
      }])\r
    } else {\r
      edge.setLabels([])\r
    }\r
  })\r
}\r
\r
// 清空画布\r
function clearCanvas() {\r
  if (!graphRef.value) return\r
\r
  // 取消拖动定时器，防止竞态条件\r
  if (dragTimer.value) {\r
    clearTimeout(dragTimer.value)\r
    dragTimer.value = null\r
  }\r
\r
  // 清空画布\r
  graphRef.value.clearCells()\r
\r
  // 重置拖动优化状态\r
  isDragging.value = false\r
  removedEdges.length = 0\r
  dragOptimizationStatus.value = ''\r
\r
  // 重置性能指标\r
  currentNodeCount.value = 0\r
  currentEdgeCount.value = 0\r
  generateTime.value = 0\r
  renderTime.value = 0\r
  nodeRenderTime.value = 0\r
  edgeRenderTime.value = 0\r
  totalRenderTime.value = 0\r
  totalTime.value = 0\r
\r
  console.log('[clearCanvas] 画布已清空，状态已重置')\r
}\r
\r
// 适应画布\r
function fitView() {\r
  if (!graphRef.value) return\r
  graphRef.value.zoomToFit({ padding: 20, maxScale: 1 })\r
}\r
\r
// ==================== 拖动优化相关 ====================\r
\r
// 拖动优化状态\r
const isDragging = ref(false)\r
const dragTimer = ref<number | null>(null)\r
const removedEdges: any[] = [] // 存储被临时移除的边数据\r
let hasTriggeredOptimization = false // 标记本次拖动是否已触发优化\r
\r
// 边数量阈值配置（基于受影响的边数量）\r
const AFFECTED_EDGE_THRESHOLDS = {\r
  LIGHT: 10,    // 少量受影响的边：切换路由\r
  MEDIUM: 20,   // 中等受影响的边：局部移除\r
  HEAVY: 100,   // 大量受影响的边：全量移除（兜底）\r
}\r
\r
// 获取优化策略（基于受影响的边数量）\r
function getOptimizationStrategy(affectedEdgeCount: number): 'switchRouter' | 'removeAffectedEdges' | 'removeAllEdges' {\r
  if (affectedEdgeCount <= AFFECTED_EDGE_THRESHOLDS.LIGHT) {\r
    return 'switchRouter'\r
  } else if (affectedEdgeCount <= AFFECTED_EDGE_THRESHOLDS.MEDIUM) {\r
    return 'removeAffectedEdges'\r
  } else {\r
    return 'removeAffectedEdges'\r
  }\r
}\r
\r
// 开始拖动优化\r
function startDragOptimization() {\r
  console.log('[DEBUG] startDragOptimization 被调用')\r
  console.log('[DEBUG] graphRef.value:', !!graphRef.value, 'isDragging.value:', isDragging.value, 'enableDragOptimization.value:', enableDragOptimization.value)\r
\r
  if (!graphRef.value || isDragging.value || !enableDragOptimization.value) {\r
    console.warn('[DEBUG] 提前返回，原因:', {\r
      noGraph: !graphRef.value,\r
      alreadyDragging: isDragging.value,\r
      optimizationDisabled: !enableDragOptimization.value\r
    })\r
    return\r
  }\r
\r
  const startTime = performance.now()\r
  isDragging.value = true\r
  const graph = graphRef.value\r
\r
  // ✅ 直接从 Selection 插件获取选中的节点（单一数据源，状态准确）\r
  const selectedCells = graph.getSelectedCells()\r
  console.log('[DEBUG] 从 Selection 获取的选中 cells:', selectedCells.length)\r
\r
  const movingNodes = selectedCells.filter(cell => cell.isNode())\r
  console.log('[DEBUG] 过滤后的移动节点数:', movingNodes.length)\r
\r
  if (movingNodes.length === 0) {\r
    console.warn('[性能优化] 没有找到选中的节点')\r
    isDragging.value = false\r
    return\r
  }\r
\r
  console.log(\`[性能优化] 开始拖动优化，移动节点数: \${movingNodes.length}\`)\r
\r
  // 获取受影响的边（连接到移动节点的边）\r
  const affectedEdgesSet = new Set<any>()\r
  movingNodes.forEach(node => {\r
    const connectedEdges = graph.getConnectedEdges(node)\r
    console.log(\`[DEBUG] 节点 \${node.id} 的连接边数:\`, connectedEdges.length)\r
    connectedEdges.forEach(edge => affectedEdgesSet.add(edge))\r
  })\r
\r
  const affectedEdges = Array.from(affectedEdgesSet)\r
  const totalEdges = graph.getEdges().length\r
\r
  console.log(\`[性能优化] 受影响的边: \${affectedEdges.length} / \${totalEdges} (\${((affectedEdges.length / totalEdges) * 100).toFixed(1)}%)\`)\r
\r
  // 根据受影响的边数量选择策略\r
  const strategy = getOptimizationStrategy(affectedEdges.length)\r
  console.log('[性能优化] 选择策略:', strategy, '阈值配置:', AFFECTED_EDGE_THRESHOLDS)\r
\r
  // 清空之前的数据\r
  removedEdges.length = 0\r
\r
  // 应用优化策略\r
  if (strategy === 'removeAllEdges') {\r
    // 策略 3: 移除所有边（兜底方案，用于极端情况）\r
    console.log('[性能优化] 策略: 移除所有边（极端情况）')\r
    dragOptimizationStatus.value = \`已移除所有连线 (\${totalEdges})\`\r
\r
    const allEdges = graph.getEdges()\r
    allEdges.forEach(edge => {\r
      removedEdges.push({\r
        id: edge.id,\r
        source: edge.getSourceCellId(),\r
        target: edge.getTargetCellId(),\r
        router: edge.getRouter(),\r
        connector: edge.getConnector(),\r
        labels: edge.getLabels(),\r
        attrs: edge.getAttrs(),\r
        zIndex: edge.getZIndex(),\r
        shape: edge.shape,\r
      })\r
    })\r
    graph.removeCells(allEdges)\r
    console.log('[性能优化] 已移除', removedEdges.length, '条边')\r
  } else if (strategy === 'removeAffectedEdges') {\r
    // 策略 2: 只移除受影响的边（推荐方案）⭐⭐⭐\r
    console.log('[性能优化] 策略: 只移除受影响的边（局部优化）⭐')\r
    dragOptimizationStatus.value = \`已移除相关连线 (\${affectedEdges.length}/\${totalEdges})\`\r
\r
    affectedEdges.forEach(edge => {\r
      removedEdges.push({\r
        id: edge.id,\r
        source: edge.getSourceCellId(),\r
        target: edge.getTargetCellId(),\r
        router: edge.getRouter(),\r
        connector: edge.getConnector(),\r
        labels: edge.getLabels(),\r
        attrs: edge.getAttrs(),\r
        zIndex: edge.getZIndex(),\r
        shape: edge.shape,\r
      })\r
    })\r
    graph.removeCells(affectedEdges)\r
    console.log('[性能优化] 已移除', removedEdges.length, '条受影响的边')\r
  } else {\r
    // 策略 1: 只切换路由（最轻量）\r
    console.log('[性能优化] 策略: 切换受影响边的路由为 normal')\r
    dragOptimizationStatus.value = \`已简化路由 (\${affectedEdges.length} 条边)\`\r
\r
    affectedEdges.forEach(edge => {\r
      removedEdges.push({\r
        id: edge.id,\r
        originalRouter: edge.getRouter(),\r
      })\r
      edge.setRouter({ name: 'normal' })\r
    })\r
    console.log('[性能优化] 已简化', affectedEdges.length, '条边的路由')\r
  }\r
\r
  const elapsed = performance.now() - startTime\r
  console.log(\`[性能优化] 优化应用完成，耗时: \${elapsed.toFixed(2)}ms\`)\r
}\r
\r
// 结束拖动优化\r
function endDragOptimization() {\r
  if (!graphRef.value || !isDragging.value) return\r
\r
  // ✅ 重置优化标志\r
  hasTriggeredOptimization = false\r
\r
  // 延迟恢复，避免连续拖动时频繁切换\r
  if (dragTimer.value !== null) {\r
    clearTimeout(dragTimer.value)\r
  }\r
\r
  dragTimer.value = window.setTimeout(() => {\r
    try {\r
      const startTime = performance.now()\r
      isDragging.value = false\r
\r
      const graph = graphRef.value\r
      if (!graph) {\r
        console.log('[endDragOptimization] Graph 已销毁，跳过恢复')\r
        removedEdges.length = 0\r
        dragOptimizationStatus.value = ''\r
        return\r
      }\r
\r
      // 判断策略：检查 removedEdges 中的数据结构\r
      if (removedEdges.length > 0) {\r
        const firstEdge = removedEdges[0]\r
\r
        if (firstEdge.source && firstEdge.target) {\r
          // 策略 2 或 3: 边被移除了，需要重新添加\r
          console.log('[性能优化] 恢复被移除的边，数量:', removedEdges.length)\r
\r
          // 批量添加回边\r
          graph.addEdges(removedEdges)\r
\r
          const elapsed = performance.now() - startTime\r
          console.log(\`[性能优化] 已恢复 \${removedEdges.length} 条边，耗时: \${elapsed.toFixed(2)}ms\`)\r
\r
          removedEdges.length = 0\r
          dragTimer.value = null\r
          dragOptimizationStatus.value = ''\r
          return\r
        } else if (firstEdge.originalRouter) {\r
          // 策略 1: 只切换了路由，需要恢复路由\r
          console.log('[性能优化] 恢复受影响边的路由，数量:', removedEdges.length)\r
\r
          let restoredCount = 0\r
          removedEdges.forEach(edgeData => {\r
            const edge = graph.getCellById(edgeData.id)\r
            if (edge && edge.isEdge()) {\r
              edge.setRouter(edgeData.originalRouter)\r
              restoredCount++\r
            }\r
          })\r
\r
          const elapsed = performance.now() - startTime\r
          console.log(\`[性能优化] 已恢复 \${restoredCount} 条边的路由，耗时: \${elapsed.toFixed(2)}ms\`)\r
\r
          removedEdges.length = 0\r
          dragTimer.value = null\r
          dragOptimizationStatus.value = ''\r
          return\r
        }\r
      }\r
\r
      // 没有需要恢复的内容\r
      console.log('[endDragOptimization] 无需恢复')\r
      dragTimer.value = null\r
      dragOptimizationStatus.value = ''\r
\r
    } catch (error) {\r
      console.error('[endDragOptimization] 恢复配置时出错:', error)\r
      // 出错时也要清理状态\r
      removedEdges.length = 0\r
      dragTimer.value = null\r
      dragOptimizationStatus.value = ''\r
      isDragging.value = false\r
    }\r
  }, 150) // 延迟 150ms 恢复\r
}\r
\r
// 设置拖动优化监听器\r
function setupDragOptimization(graph: Graph) {\r
  let dragStartDistance = 0\r
  let isMouseDown = false\r
  let isDraggingNodes = false\r
  const DRAG_THRESHOLD = 5 // 拖动距离阈值（像素）\r
\r
  // 监听节点移动开始\r
  graph.on('node:mousedown', ({ node }) => {\r
    isMouseDown = true\r
    isDraggingNodes = false\r
    // ✅ 重置计数器和标志\r
    dragStartDistance = 0\r
    hasTriggeredOptimization = false\r
    console.log('[拖动优化] 开始按下节点:', node.id, '重置标志')\r
  })\r
\r
  // 监听节点移动中\r
  graph.on('node:change:position', ({ node }) => {\r
    isDraggingNodes = true\r
    console.log('[DEBUG] node:change:position 触发, node:', node.id, 'dragStartDistance:', dragStartDistance, 'hasTriggeredOptimization:', hasTriggeredOptimization, 'isDragging:', isDragging.value, 'isMouseDown:', isMouseDown)\r
\r
    // ✅ 只在本次拖动中触发一次优化（移除 isMouseDown 检查，因为框选后直接拖动不会触发 mousedown）\r
    if (!hasTriggeredOptimization && !isDragging.value) {\r
      dragStartDistance++\r
      console.log('[DEBUG] dragStartDistance 递增到:', dragStartDistance, 'DRAG_THRESHOLD:', DRAG_THRESHOLD)\r
      if (dragStartDistance > DRAG_THRESHOLD) {\r
        hasTriggeredOptimization = true\r
        console.log('[拖动优化] 触发优化，dragStartDistance:', dragStartDistance)\r
        startDragOptimization()\r
      }\r
    }\r
  })\r
\r
  // 监听节点移动结束\r
  graph.on('node:moved', ({ node }) => {\r
    console.log('[拖动优化] 节点移动结束:', node.id)\r
\r
    // 延迟检查，确保所有节点都停止移动\r
    setTimeout(() => {\r
      if (isDragging.value && !isMouseDown) {\r
        console.log('[拖动优化] 所有节点停止移动，准备恢复')\r
        endDragOptimization()\r
      }\r
    }, 50)\r
  })\r
\r
  // 监听全局 mouseup（主要机制）\r
  graph.on('blank:mouseup', () => {\r
    console.log('[拖动优化] blank mouseup')\r
    isMouseDown = false\r
    if (isDragging.value && isDraggingNodes) {\r
      isDraggingNodes = false\r
      endDragOptimization()\r
    }\r
  })\r
\r
  // 监听节点 mouseup\r
  graph.on('node:mouseup', ({ node }) => {\r
    console.log('[拖动优化] 节点 mouseup:', node.id)\r
    isMouseDown = false\r
\r
    // 延迟检查，确保所有拖动都已结束\r
    setTimeout(() => {\r
      if (isDragging.value && isDraggingNodes) {\r
        console.log('[拖动优化] mouseup 后检查：准备恢复')\r
        isDraggingNodes = false\r
        endDragOptimization()\r
      }\r
    }, 50)\r
  })\r
\r
  console.log('[性能优化] 拖动优化监听器已设置')\r
}\r
\r
// 画布就绪\r
function handleReady(designer: FlowDesigner, graph: Graph) {\r
  designerRef.value = designer\r
  graphRef.value = graph\r
\r
  // 设置拖动优化\r
  setupDragOptimization(graph)\r
\r
  // 默认生成 200 个节点\r
  generateNodes()\r
}\r
<\/script>\r
\r
<style scoped>\r
.demo-performance {\r
  display: flex;\r
  width: 100%;\r
  height: 100%;\r
  background: #f5f5f5;\r
  border-radius: 8px;\r
  overflow: hidden;\r
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);\r
}\r
\r
/* ==================== 配置面板 ==================== */\r
.demo-performance__panel {\r
  width: 320px;\r
  background: #fff;\r
  border-right: 1px solid #e8e8e8;\r
  display: flex;\r
  flex-direction: column;\r
}\r
\r
.demo-performance__panel-header {\r
  padding: 16px 20px;\r
  border-bottom: 1px solid #e8e8e8;\r
  background: linear-gradient(180deg, #fafafa 0%, #f5f5f5 100%);\r
}\r
\r
.demo-performance__panel-header h4 {\r
  margin: 0;\r
  font-size: 16px;\r
  font-weight: 600;\r
  color: #1a1a2e;\r
}\r
\r
.demo-performance__panel-content {\r
  flex: 1;\r
  padding: 20px;\r
  overflow-y: auto;\r
}\r
\r
/* ==================== 配置项 ==================== */\r
.demo-performance__config-item {\r
  margin-bottom: 20px;\r
}\r
\r
.demo-performance__label {\r
  display: block;\r
  font-size: 13px;\r
  font-weight: 500;\r
  color: #333;\r
  margin-bottom: 8px;\r
}\r
\r
.demo-performance__input-group {\r
  display: flex;\r
  gap: 8px;\r
}\r
\r
.demo-performance__input {\r
  flex: 1;\r
  padding: 8px 12px;\r
  border: 1px solid #d9d9d9;\r
  border-radius: 4px;\r
  font-size: 14px;\r
  transition: all 0.3s;\r
}\r
\r
.demo-performance__input:focus {\r
  outline: none;\r
  border-color: #1890ff;\r
  box-shadow: 0 0 0 2px rgba(24, 144, 255, 0.1);\r
}\r
\r
.demo-performance__select {\r
  width: 100%;\r
  padding: 8px 12px;\r
  border: 1px solid #d9d9d9;\r
  border-radius: 4px;\r
  font-size: 14px;\r
  background: #fff;\r
  cursor: pointer;\r
  transition: all 0.3s;\r
}\r
\r
.demo-performance__select:focus {\r
  outline: none;\r
  border-color: #1890ff;\r
  box-shadow: 0 0 0 2px rgba(24, 144, 255, 0.1);\r
}\r
\r
.demo-performance__hint {\r
  margin-top: 6px;\r
  font-size: 12px;\r
  color: #8c8c8c;\r
}\r
\r
.demo-performance__checkbox {\r
  display: flex;\r
  align-items: center;\r
  font-size: 13px;\r
  color: #333;\r
  cursor: pointer;\r
  user-select: none;\r
}\r
\r
.demo-performance__checkbox input[type="checkbox"] {\r
  margin-right: 8px;\r
  cursor: pointer;\r
}\r
\r
.demo-performance__checkbox input[type="checkbox"]:disabled {\r
  cursor: not-allowed;\r
}\r
\r
/* ==================== 按钮 ==================== */\r
.demo-performance__btn {\r
  padding: 8px 16px;\r
  border: 1px solid #d9d9d9;\r
  border-radius: 4px;\r
  font-size: 13px;\r
  font-weight: 500;\r
  cursor: pointer;\r
  transition: all 0.3s;\r
  background: #fff;\r
  color: #333;\r
}\r
\r
.demo-performance__btn:hover {\r
  border-color: #1890ff;\r
  color: #1890ff;\r
}\r
\r
.demo-performance__btn:disabled {\r
  cursor: not-allowed;\r
  opacity: 0.6;\r
}\r
\r
.demo-performance__btn--primary {\r
  background: #1890ff;\r
  border-color: #1890ff;\r
  color: #fff;\r
}\r
\r
.demo-performance__btn--primary:hover:not(:disabled) {\r
  background: #40a9ff;\r
  border-color: #40a9ff;\r
}\r
\r
.demo-performance__btn--secondary {\r
  width: 100%;\r
  margin-bottom: 8px;\r
}\r
\r
/* ==================== 性能指标 ==================== */\r
.demo-performance__metrics {\r
  padding: 16px;\r
  background: #f9fafb;\r
  border: 1px solid #e8e8e8;\r
  border-radius: 6px;\r
  margin-bottom: 20px;\r
}\r
\r
.demo-performance__metrics-title {\r
  margin: 0 0 12px 0;\r
  font-size: 14px;\r
  font-weight: 600;\r
  color: #333;\r
}\r
\r
.demo-performance__metric-item {\r
  display: flex;\r
  justify-content: space-between;\r
  align-items: center;\r
  padding: 6px 0;\r
  font-size: 13px;\r
}\r
\r
.demo-performance__metric-label {\r
  color: #666;\r
}\r
\r
.demo-performance__metric-value {\r
  font-weight: 600;\r
  color: #1890ff;\r
  font-family: 'Courier New', monospace;\r
}\r
\r
.demo-performance__metric-value.performance-dragging {\r
  color: #ff4d4f;\r
  animation: pulse 1.5s ease-in-out infinite;\r
}\r
\r
@keyframes pulse {\r
  0%, 100% {\r
    opacity: 1;\r
  }\r
  50% {\r
    opacity: 0.6;\r
  }\r
}\r
\r
/* ==================== 操作按钮区 ==================== */\r
.demo-performance__actions {\r
  margin-top: 20px;\r
  padding-top: 20px;\r
  border-top: 1px solid #e8e8e8;\r
}\r
\r
/* ==================== 画布容器 ==================== */\r
.demo-performance__canvas {\r
  flex: 1;\r
  display: flex;\r
  flex-direction: column;\r
  background: #fff;\r
  position: relative;\r
}\r
\r
.demo-performance__tip {\r
  padding: 12px 16px;\r
  background: #e6f4ff;\r
  border-bottom: 1px solid #91caff;\r
  color: #0958d9;\r
  font-size: 13px;\r
  line-height: 1.6;\r
}\r
\r
/* ==================== 自定义节点样式 ==================== */\r
/* 任务节点样式 */\r
.cvn-task {\r
  display: flex;\r
  flex-direction: column;\r
  width: 160px;\r
  background: #fff;\r
  border: 1.5px solid #e8e8e8;\r
  border-radius: 8px;\r
  overflow: hidden;\r
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);\r
  user-select: none;\r
  transition: border-color 0.2s, box-shadow 0.2s;\r
}\r
\r
.cvn-task:hover {\r
  border-color: #ffa940;\r
}\r
\r
.cvn-task--selected {\r
  border: 3px solid #fa8c16;\r
  box-shadow: 0 0 0 3px rgba(250, 140, 22, 0.15);\r
}\r
\r
.cvn-task__bar {\r
  height: 4px;\r
  flex-shrink: 0;\r
  background: linear-gradient(90deg, #fa8c16 0%, #ffc069 100%);\r
}\r
\r
.cvn-task__body {\r
  padding: 10px 14px;\r
}\r
\r
.cvn-task__title {\r
  font-size: 13px;\r
  font-weight: 600;\r
  color: #262626;\r
}\r
\r
.cvn-task__owner {\r
  font-size: 11px;\r
  color: #8c8c8c;\r
  margin-top: 4px;\r
}\r
</style>\r
`,ag={style:{display:"flex","flex-direction":"column",gap:"12px"}},dg=G({__name:"demo-state-renderers",setup(T){const v=S(!0),a=S(!0),c=S(!0),l={default:t=>({apply:e=>{e.setAttrs({body:{stroke:"#3b82f6",strokeWidth:2,fill:"#dbeafe"},label:{fill:"#1e40af",fontWeight:"normal"}})}}),hover:t=>({apply:e=>{e.setAttrs({body:{stroke:"#8b5cf6",strokeWidth:3,fill:"#ede9fe",filter:{name:"dropShadow",args:{dx:0,dy:2,blur:6,color:"rgba(139, 92, 246, 0.4)"}}},label:{fill:"#5b21b6",fontWeight:"bold"}})},cleanup:e=>{e.setAttrs({body:{filter:null}})}}),selected:t=>({apply:e=>{e.setAttrs({body:{stroke:"#06b6d4",strokeWidth:4,fill:"#cffafe",filter:{name:"dropShadow",args:{dx:0,dy:0,blur:8,color:"rgba(6, 182, 212, 0.6)"}}},label:{fill:"#164e63",fontWeight:"bold"}})},cleanup:e=>{e.setAttrs({body:{filter:null}})}}),error:t=>({apply:e=>{e.setAttrs({body:{stroke:"#ef4444",strokeWidth:3,fill:"#fee2e2",strokeDasharray:"5, 5",filter:{name:"dropShadow",args:{dx:0,dy:2,blur:4,color:"rgba(239, 68, 68, 0.5)"}}},label:{fill:"#991b1b",fontWeight:"bold"}})},cleanup:e=>{e.setAttrs({body:{strokeDasharray:"",filter:null}})}})},g={default:t=>({apply:e=>{var r,p;e.attr({line:{stroke:"#9333ea",strokeWidth:2,strokeDasharray:""}}),console.log("hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh::",e.getLabels());const i=e.getLabels();if(i&&i.length>0){const m=i[0];e.setLabelAt(0,{...m,attrs:{label:{fill:"#6b21a8",text:((p=(r=m.attrs)==null?void 0:r.label)==null?void 0:p.text)||"",fillOpacity:1},body:{fill:"#f3e8ff",stroke:"#9333ea",strokeWidth:2,fillOpacity:1,strokeOpacity:1}}})}}}),hover:t=>({apply:e=>{var r,p,m,u;e.attr({line:{stroke:"#0c9157",strokeWidth:3}});const i=e.getLabels();if(i&&i.length>0){const N=i[0];console.log("originalLabeloriginalLabel::",(p=(r=N.attrs)==null?void 0:r.label)==null?void 0:p.text),e.setLabelAt(0,{...N,attrs:{label:{fill:"#0c9157",text:((u=(m=N.attrs)==null?void 0:m.label)==null?void 0:u.text)||"",fillOpacity:1},body:{fill:"#a4e7e0",stroke:"#0c9157",strokeWidth:2,fillOpacity:1,strokeOpacity:1}}})}}}),selected:t=>({apply:e=>{var r,p;e.attr({line:{stroke:"#06b6d4",strokeWidth:4}});const i=e.getLabels();if(i&&i.length>0){const m=i[0];e.setLabelAt(0,{...m,attrs:{label:{fill:"#06b6d4",text:((p=(r=m.attrs)==null?void 0:r.label)==null?void 0:p.text)||"",fillOpacity:1},body:{fill:"#d3f5fc",stroke:"#06b6d4",strokeWidth:2,fillOpacity:1,strokeOpacity:1}}})}}}),flowing:t=>({apply:e=>{var r,p;e.attr({line:{stroke:"#10b981",strokeWidth:3,strokeDasharray:"10,5",style:{animation:"fd-flow 1s linear infinite"}}});const i=e.getLabels();if(i&&i.length>0){const m=i[0];console.log("originalLabeloriginalLabeloriginalLabel",m),e.setLabelAt(0,{...m,attrs:{label:{fill:"#065f46",text:((p=(r=m.attrs)==null?void 0:r.label)==null?void 0:p.text)||"",fontStyle:"italic",fillOpacity:1},body:{fill:"#d1fae5",stroke:"#10b981",strokeWidth:2,fillOpacity:1,strokeOpacity:1}}})}},cleanup:e=>{e.setAttrs({line:{strokeDasharray:"",style:{animation:"none"}}})}})},x=xn(()=>{if(!v.value&&!c.value)return;const t={};return v.value&&(t.default=l.default,t.hover=l.hover,t.selected=l.selected),c.value&&(t.error=l.error),t}),s=xn(()=>{if(a.value)return g});function o(t){const e=t.getGraph(),i=e.addNode({x:100,y:100,width:120,height:60,label:"节点 1",shape:"rect",attrs:{}});t.setNodeState(i,"default");const r=e.addNode({x:300,y:100,width:120,height:60,label:"节点 2",shape:"rect",attrs:{}});t.setNodeState(r,"default");const p=e.addNode({x:200,y:220,width:120,height:60,label:"节点 3",shape:"rect",attrs:{}});t.setNodeState(p,"default");const m=e.addEdge({source:i,target:r,shape:"flow-edge",labels:["连接1"]});t.setEdgeState(m,"default");const u=e.addEdge({source:i,target:p,shape:"flow-edge",labels:["连接2"]});t.setEdgeState(u,"default");const N=e.addEdge({source:r,target:p,shape:"flow-edge",labels:["连接3"]});t.setEdgeState(N,"default"),K.success("✨ 状态渲染器演示已加载！悬停/点击节点和连线查看效果")}return(t,e)=>(h(),b("div",ag,[f(F(V),{"node-state-renderers":x.value,"edge-state-renderers":s.value,onReady:o,style:{height:"400px",border:"1px solid #e8e8e8","border-radius":"6px"}},null,8,["node-state-renderers","edge-state-renderers"])]))}}),cg=`<template>\r
  <div style="display: flex; flex-direction: column; gap: 12px;">\r
\r
\r
    <!-- FlowDesigner -->\r
    <FlowDesignerLayout\r
      :node-state-renderers="computedNodeRenderers"\r
      :edge-state-renderers="computedEdgeRenderers"\r
      @ready="handleReady"\r
      style="height: 400px; border: 1px solid #e8e8e8; border-radius: 6px;"\r
    />\r
  </div>\r
</template>\r
\r
<script setup lang="ts">\r
import { ref, computed } from 'vue'\r
import { message } from 'ant-design-vue'\r
import { FlowDesignerLayout }  from '@quick-code/x6-flow-designer'\r
import type { FlowDesigner } from '@quick-code/x6-flow-designer'\r
import type { NodeStateRendererMap, EdgeStateRendererMap } from '@/components/FlowDesigner/types/render'\r
import type { Node, Edge } from '@antv/x6'\r
\r
const useCustomNodeStyles = ref(true)\r
const useCustomEdgeStyles = ref(true)\r
const addErrorState = ref(true)\r
\r
let designerInstance: FlowDesigner | null = null\r
\r
// ─────────────────────────────────────────────────────────────────\r
// 自定义节点状态渲染器\r
// ─────────────────────────────────────────────────────────────────\r
const customNodeRenderers: NodeStateRendererMap = {\r
  // 覆盖内置 default 状态\r
  default: (node: Node) => ({\r
    apply: (cell) => {\r
      cell.setAttrs({\r
        body: {\r
          stroke: '#3b82f6',\r
          strokeWidth: 2,\r
          fill: '#dbeafe',\r
        },\r
        label: {\r
          fill: '#1e40af',\r
          fontWeight: 'normal',\r
        }\r
      })\r
    }\r
  }),\r
\r
  // 覆盖内置 hover 状态\r
  hover: (node: Node) => ({\r
    apply: (cell) => {\r
      cell.setAttrs({\r
        body: {\r
          stroke: '#8b5cf6',\r
          strokeWidth: 3,\r
          fill: '#ede9fe',\r
          filter: {\r
            name: 'dropShadow',\r
            args: { dx: 0, dy: 2, blur: 6, color: 'rgba(139, 92, 246, 0.4)' }\r
          }\r
        },\r
        label: {\r
          fill: '#5b21b6',\r
          fontWeight: 'bold',\r
        }\r
      })\r
    },\r
    cleanup: (cell) => {\r
      cell.setAttrs({\r
        body: {\r
          filter: null\r
        }\r
      })\r
    }\r
  }),\r
\r
  // 覆盖内置 selected 状态\r
  selected: (node: Node) => ({\r
    apply: (cell) => {\r
      cell.setAttrs({\r
        body: {\r
          stroke: '#06b6d4',\r
          strokeWidth: 4,\r
          fill: '#cffafe',\r
          filter: {\r
            name: 'dropShadow',\r
            args: { dx: 0, dy: 0, blur: 8, color: 'rgba(6, 182, 212, 0.6)' }\r
          }\r
        },\r
        label: {\r
          fill: '#164e63',\r
          fontWeight: 'bold',\r
        }\r
      })\r
    },\r
    cleanup: (cell) => {\r
      cell.setAttrs({\r
        body: {\r
          filter: null\r
        }\r
      })\r
    }\r
  }),\r
\r
  // 新增自定义 error 状态\r
  error: (node: Node) => ({\r
    apply: (cell) => {\r
      cell.setAttrs({\r
        body: {\r
          stroke: '#ef4444',\r
          strokeWidth: 3,\r
          fill: '#fee2e2',\r
          strokeDasharray: '5, 5',\r
          filter: {\r
            name: 'dropShadow',\r
            args: { dx: 0, dy: 2, blur: 4, color: 'rgba(239, 68, 68, 0.5)' }\r
          }\r
        },\r
        label: {\r
          fill: '#991b1b',\r
          fontWeight: 'bold',\r
        }\r
      })\r
    },\r
    cleanup: (cell) => {\r
      cell.setAttrs({\r
        body: {\r
          strokeDasharray: '',\r
          filter: null\r
        }\r
      })\r
    }\r
  })\r
}\r
\r
// ─────────────────────────────────────────────────────────────────\r
// 自定义连线状态渲染器\r
// ─────────────────────────────────────────────────────────────────\r
const customEdgeRenderers: EdgeStateRendererMap = {\r
  // 覆盖内置 default 状态\r
  default: (edge: Edge) => ({\r
    apply: (cell) => {\r
      cell.attr({\r
        line: {\r
          stroke: '#9333ea',\r
          strokeWidth: 2,\r
          strokeDasharray: '',\r
        },\r
      });\r
      console.log('hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh::', cell.getLabels());\r
      const labelsOrigin = cell.getLabels()\r
      if (labelsOrigin && labelsOrigin.length > 0) {\r
        const originalLabel = labelsOrigin[0]\r
        // 创建新的 label 对象（必须是新对象才能触发 X6 重新渲染）\r
        cell.setLabelAt(0, {\r
          ...originalLabel,\r
          attrs: {\r
            label: {\r
              fill: '#6b21a8',\r
              text: originalLabel.attrs?.label?.text || '',\r
              fillOpacity: 1,  // 明确恢复文本透明度\r
            },\r
            body: {\r
              fill: '#f3e8ff',\r
              stroke: '#9333ea',\r
              strokeWidth: 2,\r
              fillOpacity: 1,     // 明确恢复背景透明度\r
              strokeOpacity: 1,   // 明确恢复边框透明度\r
            }\r
          }\r
        })\r
      }\r
    }\r
  }),\r
\r
  // 覆盖内置 hover 状态\r
  hover: (edge: Edge) => ({\r
    apply: (cell) => {\r
      cell.attr({\r
        line: {\r
          stroke: '#0c9157',\r
          strokeWidth: 3,\r
        }\r
      })\r
      const labelsOrigin = cell.getLabels()\r
      if (labelsOrigin && labelsOrigin.length > 0) {\r
        const originalLabel = labelsOrigin[0]\r
        console.log('originalLabeloriginalLabel::', originalLabel.attrs?.label?.text);\r
        // 创建新的 label 对象\r
        cell.setLabelAt(0, {\r
          ...originalLabel,\r
          attrs: {\r
            label: {\r
              fill: '#0c9157',\r
              text: originalLabel.attrs?.label?.text || '',\r
              fillOpacity: 1,  // 恢复文本透明度\r
            },\r
            body: {\r
              fill: '#a4e7e0',\r
              stroke: '#0c9157',\r
              strokeWidth: 2,\r
              fillOpacity: 1,     // 恢复背景透明度\r
              strokeOpacity: 1,   // 恢复边框透明度\r
            }\r
          }\r
        })\r
      }\r
    }\r
  }),\r
\r
  // 覆盖内置 selected 状态\r
  selected: (edge: Edge) => ({\r
    apply: (cell) => {\r
      cell.attr({\r
        line: {\r
          stroke: '#06b6d4',\r
          strokeWidth: 4,\r
        }\r
      })\r
      const labelsOrigin = cell.getLabels()\r
      if (labelsOrigin && labelsOrigin.length > 0) {\r
        const originalLabel = labelsOrigin[0]\r
        // 创建新的 label 对象\r
        cell.setLabelAt(0, {\r
          ...originalLabel,\r
          attrs: {\r
            label: {\r
              fill: '#06b6d4',\r
              text: originalLabel.attrs?.label?.text || '',\r
              fillOpacity: 1,  // 恢复文本透明度\r
            },\r
            body: {\r
              fill: '#d3f5fc',\r
              stroke: '#06b6d4',\r
              strokeWidth: 2,\r
              fillOpacity: 1,     // 恢复背景透明度\r
              strokeOpacity: 1,   // 恢复边框透明度\r
            }\r
          }\r
        })\r
      }\r
    }\r
  }),\r
\r
  // 覆盖内置 flowing 状态：绿色流动动画\r
  flowing: (edge: Edge) => ({\r
    apply: (cell) => {\r
      cell.attr({\r
        line: {\r
          stroke: '#10b981',         // 绿色\r
          strokeWidth: 3,\r
          strokeDasharray: '10,5',   // 虚线样式\r
          style: {\r
            animation: 'fd-flow 1s linear infinite'  // CSS 流动动画\r
          }\r
        }\r
      })\r
      const labelsOrigin = cell.getLabels()\r
      if (labelsOrigin && labelsOrigin.length > 0) {\r
        const originalLabel = labelsOrigin[0]\r
        console.log('originalLabeloriginalLabeloriginalLabel', originalLabel);\r
        cell.setLabelAt(0, {\r
          ...originalLabel,\r
          attrs: {\r
            label: {\r
              fill: '#065f46',\r
              text: originalLabel.attrs?.label?.text || '',  // 保持原有文字\r
              fontStyle: 'italic',\r
              fillOpacity: 1,\r
            },\r
            body: {\r
              fill: '#d1fae5',\r
              stroke: '#10b981',\r
              strokeWidth: 2,\r
              fillOpacity: 1,\r
              strokeOpacity: 1,\r
            }\r
          }\r
        })\r
      }\r
    },\r
    cleanup: (cell) => {\r
      // 清除流动动画\r
      cell.setAttrs({\r
        line: {\r
          strokeDasharray: '',\r
          style: {\r
            animation: 'none'\r
          }\r
        }\r
      })\r
    }\r
  }),\r
}\r
\r
// ─────────────────────────────────────────────────────────────────\r
// 根据开关动态计算要使用的渲染器\r
// ─────────────────────────────────────────────────────────────────\r
const computedNodeRenderers = computed<NodeStateRendererMap | undefined>(() => {\r
  if (!useCustomNodeStyles.value && !addErrorState.value) {\r
    return undefined // 使用内置样式\r
  }\r
\r
  const renderers: NodeStateRendererMap = {}\r
\r
  if (useCustomNodeStyles.value) {\r
    renderers.default = customNodeRenderers.default\r
    renderers.hover = customNodeRenderers.hover\r
    renderers.selected = customNodeRenderers.selected\r
  }\r
\r
  if (addErrorState.value) {\r
    renderers.error = customNodeRenderers.error\r
  }\r
\r
  return renderers\r
})\r
\r
const computedEdgeRenderers = computed<EdgeStateRendererMap | undefined>(() => {\r
  if (!useCustomEdgeStyles.value) {\r
    return undefined // 使用内置样式\r
  }\r
\r
  return customEdgeRenderers\r
})\r
\r
// ─────────────────────────────────────────────────────────────────\r
// Ready 回调：初始化画布数据\r
// ─────────────────────────────────────────────────────────────────\r
function handleReady(designer) {\r
  designerInstance = designer\r
  const graph = designer.getGraph()\r
\r
  // 添加示例节点\r
  const node1 = graph.addNode({\r
    x: 100,\r
    y: 100,\r
    width: 120,\r
    height: 60,\r
    label: '节点 1',\r
    shape: 'rect',\r
    attrs: {},\r
  });\r
  designer.setNodeState(node1, 'default')\r
\r
  const node2 = graph.addNode({\r
    x: 300,\r
    y: 100,\r
    width: 120,\r
    height: 60,\r
    label: '节点 2',\r
    shape: 'rect',\r
    attrs: {},\r
  })\r
  designer.setNodeState(node2, 'default')\r
\r
  const node3 = graph.addNode({\r
    x: 200,\r
    y: 220,\r
    width: 120,\r
    height: 60,\r
    label: '节点 3',\r
    shape: 'rect',\r
    attrs: {},\r
  })\r
  designer.setNodeState(node3, 'default')\r
\r
  // 添加连线\r
  const edge1 = graph.addEdge({\r
    source: node1,\r
    target: node2,\r
    shape: 'flow-edge',\r
    labels: ['连接1'],\r
  })\r
  designer.setEdgeState(edge1, 'default')\r
\r
  const edge2 = graph.addEdge({\r
    source: node1,\r
    target: node3,\r
    shape: 'flow-edge',\r
    labels: ['连接2'],\r
  })\r
  designer.setEdgeState(edge2, 'default')\r
\r
  const edge3 = graph.addEdge({\r
    source: node2,\r
    target: node3,\r
    shape: 'flow-edge',\r
    labels: ['连接3'],\r
  })\r
  designer.setEdgeState(edge3, 'default')\r
\r
  message.success('✨ 状态渲染器演示已加载！悬停/点击节点和连线查看效果')\r
}\r
\r
// ─────────────────────────────────────────────────────────────────\r
// 触发自定义 error 状态\r
// ─────────────────────────────────────────────────────────────────\r
function triggerErrorState() {\r
  if (!designerInstance) return\r
\r
  const graph = designerInstance.getGraph()\r
  const nodes = graph.getNodes()\r
\r
  if (nodes.length > 0) {\r
    const firstNode = nodes[0]\r
\r
    // 调用 setNodeState 切换到 error 状态\r
    designerInstance.setNodeState(firstNode, 'error')\r
\r
    message.warning('节点 1 已切换到 error 状态（3 秒后恢复）')\r
\r
    // 3 秒后恢复到 default 状态\r
    setTimeout(() => {\r
      if (designerInstance) {\r
        designerInstance.setNodeState(firstNode, 'default')\r
        message.info('节点 1 已恢复到 default 状态')\r
      }\r
    }, 3000)\r
  }\r
}\r
<\/script>\r
`,pg={class:"demo-node-svg"},gg={class:"demo-node-svg__log"},fg={class:"demo-node-svg__log-content"},mg={class:"demo-node-svg__canvas"},ug={class:"custom-palette"},hg={class:"custom-palette__section"},bg=["onMousedown"],vg={class:"custom-palette__item-icon"},_g=["src"],xg={class:"custom-palette__item-info"},yg=["onMousedown"],kg={class:"custom-palette__item-icon"},wg=["src"],Sg=G({__name:"demo-state-svgNode",setup(T){const v=S([]),a=S(null),c=[{type:"svg-start-node",label:"开始节点",classNamePerfix:"x6",width:120,height:38,rectStroke:"#95d375",rectStrokeWidth:1,rectFill:"#edf8e7",icon:mn,iconHover:un,textFill:"#81cb5c"},{type:"svg-approval-node",label:"审批节点",classNamePerfix:"x6",width:120,height:38,rectStroke:"#83b3f7",rectStrokeWidth:1,rectFill:"#e6eeff",icon:hn,iconHover:bn,textFill:"#5d9df7"}],l={groups:{top:{position:"top",attrs:{circle:{r:4,magnet:!0,stroke:"#5F95FF",strokeWidth:1,fill:"#fff",style:{visibility:"hidden"}},label:{position:"top"},text:{text:"",fill:"#ff5800"}}},right:{position:"right",attrs:{circle:{r:4,magnet:!0,stroke:"#5F95FF",strokeWidth:1,fill:"#fff",style:{visibility:"hidden"}},label:{position:"right"},text:{text:"",fill:"#ff5800"}}},bottom:{position:"bottom",attrs:{circle:{r:4,magnet:!0,stroke:"#5F95FF",strokeWidth:1,fill:"#fff",style:{visibility:"hidden"}},label:{position:"bottom"},text:{text:"",fill:"#ff5800"}}},left:{position:"left",attrs:{circle:{r:4,magnet:!0,stroke:"#5F95FF",strokeWidth:1,fill:"#fff",style:{visibility:"hidden"}},label:{position:"left"},text:{text:"",fill:"#ff5800"}}}},items:[{group:"top",label:{position:"top"}},{group:"right",label:{position:"right"}},{group:"bottom",label:{position:"bottom"}},{group:"left",label:{position:"left"}}]};function g(m){const u=new Date().toLocaleTimeString();v.value.push(`[${u}] ${m}`)}function x(){v.value=[]}function s(m){g("🔧 beforeGraphInit: 开始注册 SVG 节点"),c.forEach(u=>{J.registerNode(u.type,{inherit:"rect",width:u.width,height:u.height,markup:[{tagName:"rect",selector:"body"},{tagName:"path",selector:"icon"},{tagName:"text",selector:"label"}],attrs:{body:{stroke:u.rectStroke,strokeWidth:u.rectStrokeWidth,fill:u.rectFill,rx:10,ry:10},icon:{fill:u.type=="svg-start-node"?"#48c02a":"#1d78f4",d:u.type=="svg-start-node"?"M510.9 60.7c-245.6 0-446.7 199.8-446.7 446.7C64.2 753 263.9 954 510.8 954s446.6-199.7 446.6-446.6c0.1-245.6-199.6-446.7-446.5-446.7zM692 525.9l-272.1 157c-10.7 6.2-24-1.5-24-13.9V354.9c0-12.3 13.3-20 24-13.9L692 498.1c10.6 6.2 10.6 21.6 0 27.8z":"M422.399 601.6V493.323c-79.111-34.622-134.4-113.655-134.4-205.323 0-123.711 100.54-224 224-224 123.711 0 224 100.545 224 224 0 91.814-55.379 170.725-134.4 205.313V601.6h201.472c61.925 0 112.128 49.716 112.128 112.003V825.6H108.801V713.598c0-61.855 50.444-111.998 112.126-111.998h201.472zM153.601 870.4h716.793V960H153.6v-89.6z",transform:"translate(12, 9) scale(0.02)"},text:{fontSize:12,fill:u.textFill}},ports:{...l}},!0),g(`✅ 已注册节点: ${u.type} (${u.label})`)}),J.registerNode("svg-condition-node",{inherit:"polygon",width:132,height:72,markup:[{tagName:"polygon",selector:"body"},{tagName:"path",selector:"icon"},{tagName:"text",selector:"label"}],attrs:{body:{strokeWidth:1,stroke:"#fdc059",fill:"#ffeed1",refPoints:"0,20 20,0 40,20 20,40"},icon:{fill:"#ffb02a",d:"M658.944 75.776c26.9312 0 48.64 23.296 48.64 52.0192v207.872c0 28.672-21.7088 51.9168-48.64 51.9168h-97.28v84.48h255.3856c59.1872 0 107.6736 50.2272 109.4144 113.4592v100.864h24.3712a47.104 47.104 0 0 1 34.4064 15.2064c9.1136 9.728 14.2336 22.9888 14.2336 36.7616v155.904c0 28.672-21.76 51.968-48.64 51.968h-145.92c-26.88 0-48.64-23.296-48.64-51.968V738.304c0-28.672 21.76-51.968 48.64-51.968h24.32v-97.4336a12.6976 12.6976 0 0 0-10.752-12.9024l-1.4336-0.1024h-255.3344v110.4384h24.32a47.104 47.104 0 0 1 34.4064 15.2064c9.1136 9.728 14.2336 22.9888 14.2336 36.7616v155.904c0 28.672-21.76 51.968-48.64 51.968h-145.92c-26.88 0-48.64-23.296-48.64-51.968V738.304c0-28.672 21.76-51.968 48.64-51.968h24.32V576H209.0496a12.4928 12.4928 0 0 0-12.032 11.4688l-0.1024 1.536v97.4336h24.32a47.104 47.104 0 0 1 34.4064 15.2064c9.1136 9.728 14.2336 22.9888 14.2336 36.7616v155.904c0 28.672-21.76 51.968-48.64 51.968H75.264c-26.88 0-48.64-23.296-48.64-51.968V738.304c0-28.672 21.76-51.968 48.64-51.968h24.32v-97.4336c0-63.232 47.0528-114.9952 106.1888-116.8384l3.2256-0.1024h255.3856L464.384 387.584l-97.28 0.0512c-26.8288 0-48.64-23.2448-48.64-51.968v-207.872c0-28.672 21.8112-51.9168 48.64-51.9168h291.84z",transform:"translate(54, 9) scale(0.02)"},text:{fontSize:12,fill:"#ffb02a",y:8}},ports:{...l,items:[{group:"top"},{group:"bottom"}]}},!0),g("🎉 所有 SVG 节点注册完成")}function o(m,u){a.value=m,g("✅ 画布初始化完成"),g("💡 提示: 悬停查看 hover 效果，点击切换 selected 状态"),setTimeout(()=>{var _,$,A,C,L,M;const N=u.addNode({shape:"svg-start-node",x:100,y:100,label:"开始节点"}),k=u.addNode({shape:"svg-approval-node",x:300,y:100,label:"审批节点"}),d=u.addNode({shape:"svg-condition-node",x:200,y:250,label:"条件分支"});u.addEdge({source:{cell:N,port:(_=N.getPortAt(1))==null?void 0:_.id},target:{cell:k,port:($=k.getPortAt(3))==null?void 0:$.id},shape:"flow-edge",labels:["连接1"]}),u.addEdge({source:{cell:k,port:(A=k.getPortAt(2))==null?void 0:A.id},target:{cell:d,port:(C=d.getPortAt(0))==null?void 0:C.id},shape:"flow-edge",labels:["连接2"]}),u.addEdge({source:{cell:N,port:(L=N.getPortAt(2))==null?void 0:L.id},target:{cell:d,port:(M=d.getPortAt(1))==null?void 0:M.id},shape:"flow-edge",labels:["连接3"]}),g("📦 已添加 3 个示例节点和 3 条连线"),g("🎨 试试悬停和点击节点/连线吧！")},100)}function t(m,u,N){g(`🎯 开始拖拽: ${u.label}`),N(m,{shape:u.type,label:u.label,width:u.width,height:u.height,data:{nodeInfo:{hint:u.hint,color:u.color}}})}const e={"svg-start-node":{default:{body:{stroke:"#95d375",strokeWidth:2,fill:"#edf8e7"},label:{fill:"#81cb5c",fontWeight:"normal"},icon:{fill:"#48c02a",opacity:1}},hover:{body:{stroke:"#8b5cf6",strokeWidth:3,fill:"#ede9fe",filter:{name:"dropShadow",args:{dx:0,dy:2,blur:6,color:"rgba(139, 92, 246, 0.4)"}}},label:{fill:"#5b21b6",fontWeight:"bold"},icon:{opacity:1,fill:"#8b5cf6"}},selected:{body:{stroke:"#06b6d4",strokeWidth:4,fill:"#cffafe",filter:{name:"dropShadow",args:{dx:0,dy:0,blur:8,color:"rgba(6, 182, 212, 0.6)"}}},label:{fill:"#0e7490",fontWeight:"bold"},icon:{fill:"#06b6d4",opacity:1}},error:{body:{stroke:"#ef4444",strokeWidth:4,fill:"#fee2e2",filter:{name:"dropShadow",args:{dx:0,dy:0,blur:8,color:"rgba(239, 68, 68, 0.6)"}}},label:{fill:"#991b1b",fontWeight:"bold"},icon:{fill:"#ef4444",opacity:1}}},"svg-approval-node":{default:{body:{stroke:"#83b3f7",strokeWidth:2,fill:"#e6eeff"},label:{fill:"#5d9df7",fontWeight:"normal"},icon:{fill:"#1d78f4",opacity:1}},hover:{body:{stroke:"#fdc059",strokeWidth:3,fill:"#ffeed1",filter:{name:"dropShadow",args:{dx:0,dy:2,blur:6,color:"rgba(226,236,152,0.4)"}}},label:{fill:"#ffa100"},icon:{fill:"#ffa100",opacity:1}},selected:{body:{stroke:"#2563eb",strokeWidth:4,fill:"#bfdbfe",filter:{name:"dropShadow",args:{dx:0,dy:0,blur:8,color:"rgba(37, 99, 235, 0.6)"}}},label:{fill:"#1e40af",fontWeight:"bold"},icon:{fill:"#1d78f4",opacity:1}}},"svg-condition-node":{default:{body:{stroke:"#fdc059",strokeWidth:2,fill:"#ffeed1"},text:{fill:"#ffb02a",fontWeight:"normal"},icon:{fill:"#ffa100"}},hover:{body:{stroke:"#15c71e",strokeWidth:3,fill:"#e1f3e4",filter:{name:"dropShadow",args:{dx:0,dy:2,blur:6,color:"rgba(220,241,218,0.4)"}}},text:{fill:"#15c71e",fontWeight:"bold"},icon:{fill:"#15c71e"}},selected:{body:{stroke:"#d97706",strokeWidth:4,fill:"#fde68a",filter:{name:"dropShadow",args:{dx:0,dy:0,blur:8,color:"rgba(217, 119, 6, 0.6)"}}},text:{fill:"#92400e",fontWeight:"bold"},icon:{fill:"#92400e"}}}};function i(m){const u={};return Object.entries(m).forEach(([N,k])=>{u[N]={},Object.entries(k).forEach(([d,_])=>{u[N][d]={apply:($,A)=>{$.setAttrs(_)},cleanup:$=>{$.setAttrs({body:{filter:null,strokeDasharray:""}})}}})}),u}const r=i(e),p={default:m=>({apply:u=>{var k,d;g(`🔗 连线 [${u.id.slice(0,8)}...] → default 状态`),u.attr({line:{stroke:"#9333ea",strokeWidth:2,strokeDasharray:""}});const N=u.getLabels();if(console.log("originalLabeloriginalLabel::",JSON.stringify(N)),N&&N.length>0){const _=N[0];u.setLabelAt(0,{..._,attrs:{label:{fill:"#6b21a8",text:((d=(k=_.attrs)==null?void 0:k.label)==null?void 0:d.text)||"",fillOpacity:1},body:{fill:"#f3e8ff",stroke:"#9333ea",strokeWidth:1,fillOpacity:1,strokeOpacity:1}}})}}}),hover:m=>({apply:u=>{var k,d;g(`🔗 连线 [${u.id.slice(0,8)}...] → hover 状态`),u.attr({line:{stroke:"#10b981",strokeWidth:3}});const N=u.getLabels();if(N&&N.length>0){const _=N[0];console.log("originalLabeloriginalLabel::",JSON.stringify(_)),u.setLabelAt(0,{..._,attrs:{label:{fill:"#065f46",text:((d=(k=_.attrs)==null?void 0:k.label)==null?void 0:d.text)||"",fillOpacity:1},body:{fill:"#d1fae5",stroke:"#10b981",strokeWidth:2,fillOpacity:1,strokeOpacity:1}}})}}}),selected:m=>({apply:u=>{var k,d;g(`🔗 连线 [${u.id.slice(0,8)}...] → selected 状态`),u.attr({line:{stroke:"#06b6d4",strokeWidth:4}});const N=u.getLabels();if(N&&N.length>0){const _=N[0];u.setLabelAt(0,{..._,attrs:{label:{fill:"#0e7490",text:((d=(k=_.attrs)==null?void 0:k.label)==null?void 0:d.text)||"",fontWeight:"bold",fillOpacity:1},body:{fill:"#cffafe",stroke:"#06b6d4",strokeWidth:2,fillOpacity:1,strokeOpacity:1}}})}}}),flowing:m=>({apply:u=>{var k,d;g(`🔗 连线 [${u.id.slice(0,8)}...] → flowing 状态（流动动画）`),u.attr({line:{stroke:"#e7581a",strokeWidth:3,strokeDasharray:"10,5",style:{animation:"fd-flow 1s linear infinite"}}});const N=u.getLabels();if(N&&N.length>0){const _=N[0];u.setLabelAt(0,{..._,attrs:{label:{fill:"#e7581a",text:((d=(k=_.attrs)==null?void 0:k.label)==null?void 0:d.text)||"",fontStyle:"italic",fillOpacity:1},body:{fill:"#efd9cf",stroke:"#e7581a",strokeWidth:2,fillOpacity:1,strokeOpacity:1}}})}},cleanup:u=>{u.attr({line:{strokeDasharray:"",style:{animation:"none"}}})}}),dimmed:m=>({apply:u=>{var k,d;u.attr({line:{strokeOpacity:.66}});const N=u.getLabels();if(N&&N.length>0){const _=N[0];u.setLabelAt(0,{..._,attrs:{label:{fillOpacity:.66,text:((d=(k=_==null?void 0:_.attrs)==null?void 0:k.label)==null?void 0:d.text)??""},body:{fillOpacity:.66,strokeOpacity:.66}}})}},cleanup:u=>{u.attr({line:{strokeOpacity:1}})}})};return(m,u)=>(h(),b("div",pg,[n("div",gg,[n("div",{class:"demo-node-svg__log-header"},[u[0]||(u[0]=n("h4",null,"事件日志",-1)),n("button",{class:"demo-node-svg__clear-btn",onClick:x,title:"清除日志"}," 清除 ")]),n("div",fg,[(h(!0),b(O,null,H(v.value,(N,k)=>(h(),b("div",{key:k,class:"demo-node-svg__log-item"},D(N),1))),128))])]),n("div",mg,[f(F(V),{mode:"design","before-graph-init":s,"node-state-renderers":F(r),"edge-state-renderers":p,onReady:o},{palette:E(({onStartDrag:N})=>[n("div",ug,[u[3]||(u[3]=n("div",{class:"custom-palette__header"},[n("h3",{class:"custom-palette__title"},"SVG 节点"),n("span",{class:"custom-palette__desc"},"三种状态切换")],-1)),n("div",hg,[u[2]||(u[2]=n("div",{class:"custom-palette__section-title"},"带图标的节点",-1)),(h(),b(O,null,H(c,k=>n("div",{key:k.type,class:"custom-palette__item",onMousedown:d=>t(d,k,N),style:rn({background:k.rectFill,borderColor:k.rectStroke})},[n("div",vg,[n("img",{src:k.icon},null,8,_g)]),n("div",xg,[n("div",{class:"custom-palette__item-label",style:rn({color:k.textFill})},D(k.label),5)])],44,bg)),64)),n("div",{key:"svg-condition-node",class:"custom-palette__item",onMousedown:k=>t(k,{type:"svg-condition-node",label:"条件分支",width:132,height:72},N),style:{background:"#ffeed1",borderColor:"#fdc059"}},[n("div",kg,[n("img",{src:F(Nn)},null,8,wg)]),u[1]||(u[1]=n("div",{class:"custom-palette__item-info"},[n("div",{class:"custom-palette__item-label",style:{color:"#ffb02a"}},"条件分支")],-1))],40,yg)]),u[4]||(u[4]=n("div",{class:"custom-palette__tips"},[n("div",{class:"tips-title"},"💡 状态说明"),n("ul",{class:"tips-list",style:{"margin-bottom":"60px"}},[n("li",null,[n("strong",null,"节点状态：")]),n("li",null,"根据不同的节点类型，设置不同的状态的样式"),n("li",null,[n("strong",null,"连线状态：")]),n("li",null,"根据不同的连线类型，设置不同的连线状态的样式")])],-1))])]),_:1},8,["node-state-renderers"])])]))}}),Ng=U(Sg,[["__scopeId","data-v-691107e3"]]),Cg=`<template>\r
  <div class="demo-node-svg">\r
    <!-- 事件日志面板 -->\r
    <div class="demo-node-svg__log">\r
      <div class="demo-node-svg__log-header">\r
        <h4>事件日志</h4>\r
        <button class="demo-node-svg__clear-btn" @click="clearLogs" title="清除日志">\r
          清除\r
        </button>\r
      </div>\r
      <div class="demo-node-svg__log-content">\r
        <div v-for="(log, index) in logs" :key="index" class="demo-node-svg__log-item">\r
          {{ log }}\r
        </div>\r
      </div>\r
    </div>\r
\r
    <!-- 画布容器 -->\r
    <div class="demo-node-svg__canvas">\r
      <FlowDesignerLayout\r
        mode="design"\r
        :before-graph-init="handleBeforeGraphInit"\r
        :node-state-renderers="nodeStateRenderers"\r
        :edge-state-renderers="edgeStateRenderers"\r
        @ready="handleReady"\r
      >\r
        <!-- 自定义节点面板插槽 -->\r
        <template #palette="{ onStartDrag }">\r
          <div class="custom-palette">\r
            <div class="custom-palette__header">\r
              <h3 class="custom-palette__title">SVG 节点</h3>\r
              <span class="custom-palette__desc">三种状态切换</span>\r
            </div>\r
\r
            <div class="custom-palette__section">\r
              <div class="custom-palette__section-title">带图标的节点</div>\r
              <div\r
                v-for="nodeType in nodeTypesConfig"\r
                :key="nodeType.type"\r
                class="custom-palette__item"\r
                @mousedown="(e) => handleStartDrag(e, nodeType, onStartDrag)"\r
                :style="{ background: nodeType.rectFill, borderColor: nodeType.rectStroke}"\r
              >\r
                <div class="custom-palette__item-icon" >\r
                  <img :src="nodeType.icon" />\r
                </div>\r
                <div class="custom-palette__item-info">\r
                  <div class="custom-palette__item-label" :style="{ color: nodeType.textFill}">{{ nodeType.label }}</div>\r
                </div>\r
              </div>\r
\r
              <div\r
                  key="svg-condition-node"\r
                  class="custom-palette__item"\r
                  @mousedown="(e) => handleStartDrag(e, {\r
                    type:'svg-condition-node',\r
                    label:'条件分支',\r
                    width: 132,\r
                    height: 72,\r
                    }, onStartDrag)"\r
                  :style="{ background: '#ffeed1', borderColor: '#fdc059'}"\r
              >\r
                <div class="custom-palette__item-icon" >\r
                  <img :src="conditionSvg" />\r
                </div>\r
                <div class="custom-palette__item-info">\r
                  <div class="custom-palette__item-label" :style="{ color: '#ffb02a'}">条件分支</div>\r
                </div>\r
              </div>\r
\r
            </div>\r
\r
            <div class="custom-palette__tips">\r
              <div class="tips-title">💡 状态说明</div>\r
              <ul class="tips-list" style="margin-bottom: 60px;">\r
                <li><strong>节点状态：</strong></li>\r
                <li>根据不同的节点类型，设置不同的状态的样式</li>\r
\r
                <li><strong>连线状态：</strong></li>\r
                <li>根据不同的连线类型，设置不同的连线状态的样式</li>\r
              </ul>\r
            </div>\r
          </div>\r
        </template>\r
      </FlowDesignerLayout>\r
    </div>\r
  </div>\r
</template>\r
\r
<script setup lang="ts">\r
import {computed, ref} from 'vue'\r
import { FlowDesignerLayout }  from '@quick-code/x6-flow-designer'\r
import type { FlowDesigner } from '@quick-code/x6-flow-designer'\r
import type { PortStateRenderers, EdgeStateRendererMap } from '@/components/FlowDesigner/types/render'\r
import { Graph, Node, Edge } from '@antv/x6'\r
\r
\r
import startSvg from "./icons/start.svg";\r
import startHover from "./icons/start-hover.svg";\r
\r
import approvalSvg from "./icons/approval.svg";\r
import approvalHoverSvg from "./icons/approval-hover.svg";\r
\r
import conditionSvg from "./icons/condition.svg";\r
import conditionHoverSvg from "./icons/condition-hover.svg";\r
\r
const logs = ref<string[]>([])\r
// FlowDesigner 实例引用\r
const flowDesigner = ref<FlowDesigner | null>(null)\r
\r
// 节点类型配置（包含颜色和 iconPath）\r
interface NodeTypeConfig {\r
  type: string\r
  label: string\r
  hint: string\r
  color: string\r
  hoverColor: string\r
  iconPath: string\r
  width: number\r
  height: number\r
}\r
\r
const nodeTypesConfig: any[] = [\r
  {\r
    type: 'svg-start-node',\r
    label: '开始节点',\r
    classNamePerfix: 'x6',\r
    width: 120,\r
    height: 38,\r
    rectStroke: '#95d375',\r
    rectStrokeWidth: 1,\r
    rectFill: '#edf8e7',\r
    icon: startSvg,\r
    iconHover: startHover,\r
    textFill: '#81cb5c'\r
  },\r
  {\r
    type: 'svg-approval-node',\r
    label: '审批节点',\r
    classNamePerfix: 'x6',\r
    width: 120,\r
    height: 38,\r
    rectStroke: '#83b3f7',\r
    rectStrokeWidth: 1,\r
    rectFill: '#e6eeff',\r
    icon: approvalSvg,\r
    iconHover: approvalHoverSvg,\r
    textFill: '#5d9df7'\r
  },\r
]\r
\r
const Ports = {\r
  groups: {\r
    top: {\r
      position: 'top',\r
      attrs: {\r
        circle: {\r
          r: 4,\r
          magnet: true,\r
          stroke: '#5F95FF',\r
          strokeWidth: 1,\r
          fill: '#fff',\r
          style: {\r
            visibility: 'hidden',\r
          },\r
        },\r
        label: {\r
          position: 'top',\r
        },\r
        text: {\r
          text: '',\r
          fill: '#ff5800',\r
        },\r
      },\r
    },\r
    right: {\r
      position: 'right',\r
      attrs: {\r
        circle: {\r
          r: 4,\r
          magnet: true,\r
          stroke: '#5F95FF',\r
          strokeWidth: 1,\r
          fill: '#fff',\r
          style: {\r
            visibility: 'hidden',\r
          },\r
        },\r
        label: {\r
          position: 'right',\r
        },\r
        text: {\r
          text: '',\r
          fill: '#ff5800',\r
        },\r
      },\r
    },\r
    bottom: {\r
      position: 'bottom',\r
      attrs: {\r
        circle: {\r
          r: 4,\r
          magnet: true,\r
          stroke: '#5F95FF',\r
          strokeWidth: 1,\r
          fill: '#fff',\r
          style: {\r
            visibility: 'hidden',\r
          },\r
        },\r
        label: {\r
          position: 'bottom',\r
        },\r
        text: {\r
          text: '',\r
          fill: '#ff5800',\r
        },\r
      },\r
    },\r
    left: {\r
      position: 'left',\r
      attrs: {\r
        circle: {\r
          r: 4,\r
          magnet: true,\r
          stroke: '#5F95FF',\r
          strokeWidth: 1,\r
          fill: '#fff',\r
          style: {\r
            visibility: 'hidden',\r
          },\r
        },\r
        label: {\r
          position: 'left',\r
        },\r
        text: {\r
          text: '',\r
          fill: '#ff5800',\r
        },\r
      },\r
    },\r
  },\r
  items: [\r
    {\r
      group: 'top',\r
      label: {\r
        position : 'top'\r
      }\r
    },\r
    {\r
      group: 'right',\r
      label: {\r
        position : 'right'\r
      }\r
    },\r
    {\r
      group: 'bottom',\r
      label: {\r
        position : 'bottom'\r
      }\r
    },\r
    {\r
      group: 'left',\r
      label: {\r
        position : 'left'\r
      }\r
    },\r
  ],\r
}\r
\r
\r
// 手动跟踪节点的选中状态（因为 X6 的 selection 可能有默认行为）\r
const selectedNodesMap = new Map<string, boolean>()\r
\r
function addLog(message: string) {\r
  const timestamp = new Date().toLocaleTimeString()\r
  logs.value.push(\`[\${timestamp}] \${message}\`)\r
}\r
\r
function clearLogs() {\r
  logs.value = []\r
}\r
\r
\r
\r
/**\r
 * Graph 初始化前钩子：注册带 SVG icon 的自定义节点\r
 */\r
function handleBeforeGraphInit(options: FlowDesignerOptions) {\r
  addLog('🔧 beforeGraphInit: 开始注册 SVG 节点')\r
\r
  // 遍历配置，注册所有节点\r
  nodeTypesConfig.forEach((config) => {\r
    Graph.registerNode(\r
        config.type,\r
        {\r
          inherit: 'rect',\r
          width: config.width,\r
          height: config.height,\r
          markup: [\r
            {\r
              tagName: 'rect', // 标签名称\r
              selector: 'body', // 选择器\r
            },\r
            {\r
              tagName: 'path', // 标签名称\r
              selector: 'icon', // 选择器\r
            },\r
            {\r
              tagName: 'text',\r
              selector: 'label',\r
            },\r
          ],\r
          attrs: {\r
            body: {\r
              stroke: config.rectStroke,\r
              strokeWidth: config.rectStrokeWidth,\r
              fill: config.rectFill,\r
              rx: 10,\r
              ry: 10,\r
            },\r
            icon: {\r
              fill: config.type == 'svg-start-node'?'#48c02a':'#1d78f4',\r
              d:config.type == 'svg-start-node'?\r
                  'M510.9 60.7c-245.6 0-446.7 199.8-446.7 446.7C64.2 753 263.9 954 510.8 954s446.6-199.7 446.6-446.6c0.1-245.6-199.6-446.7-446.5-446.7zM692 525.9l-272.1 157c-10.7 6.2-24-1.5-24-13.9V354.9c0-12.3 13.3-20 24-13.9L692 498.1c10.6 6.2 10.6 21.6 0 27.8z':'M422.399 601.6V493.323c-79.111-34.622-134.4-113.655-134.4-205.323 0-123.711 100.54-224 224-224 123.711 0 224 100.545 224 224 0 91.814-55.379 170.725-134.4 205.313V601.6h201.472c61.925 0 112.128 49.716 112.128 112.003V825.6H108.801V713.598c0-61.855 50.444-111.998 112.126-111.998h201.472zM153.601 870.4h716.793V960H153.6v-89.6z',\r
              transform: 'translate(12, 9) scale(0.02)'\r
            },\r
            text: {\r
              fontSize: 12,\r
              fill: config.textFill,\r
            },\r
          },\r
          ports: { ...Ports },\r
        },\r
        true,\r
    );\r
\r
    addLog(\`✅ 已注册节点: \${config.type} (\${config.label})\`)\r
  })  // ✅ 修复：forEach 的回调函数结束\r
\r
  Graph.registerNode(\r
      //'custom-polygon',\r
      'svg-condition-node',\r
      {\r
        inherit: 'polygon',\r
        width: 132,\r
        height: 72,\r
        markup: [\r
          {\r
            tagName: 'polygon', // 标签名称\r
            selector: 'body', // 选择器\r
          },\r
          {\r
            tagName: 'path',\r
            selector: 'icon',\r
          },\r
          {\r
            tagName: 'text',\r
            selector: 'label',\r
          },\r
        ],\r
        attrs: {\r
          body: {\r
            strokeWidth: 1,\r
            stroke: '#fdc059',\r
            fill: '#ffeed1',\r
            refPoints: '0,20 20,0 40,20 20,40',\r
          },\r
          icon: {\r
            fill: '#ffb02a',\r
            d: 'M658.944 75.776c26.9312 0 48.64 23.296 48.64 52.0192v207.872c0 28.672-21.7088 51.9168-48.64 51.9168h-97.28v84.48h255.3856c59.1872 0 107.6736 50.2272 109.4144 113.4592v100.864h24.3712a47.104 47.104 0 0 1 34.4064 15.2064c9.1136 9.728 14.2336 22.9888 14.2336 36.7616v155.904c0 28.672-21.76 51.968-48.64 51.968h-145.92c-26.88 0-48.64-23.296-48.64-51.968V738.304c0-28.672 21.76-51.968 48.64-51.968h24.32v-97.4336a12.6976 12.6976 0 0 0-10.752-12.9024l-1.4336-0.1024h-255.3344v110.4384h24.32a47.104 47.104 0 0 1 34.4064 15.2064c9.1136 9.728 14.2336 22.9888 14.2336 36.7616v155.904c0 28.672-21.76 51.968-48.64 51.968h-145.92c-26.88 0-48.64-23.296-48.64-51.968V738.304c0-28.672 21.76-51.968 48.64-51.968h24.32V576H209.0496a12.4928 12.4928 0 0 0-12.032 11.4688l-0.1024 1.536v97.4336h24.32a47.104 47.104 0 0 1 34.4064 15.2064c9.1136 9.728 14.2336 22.9888 14.2336 36.7616v155.904c0 28.672-21.76 51.968-48.64 51.968H75.264c-26.88 0-48.64-23.296-48.64-51.968V738.304c0-28.672 21.76-51.968 48.64-51.968h24.32v-97.4336c0-63.232 47.0528-114.9952 106.1888-116.8384l3.2256-0.1024h255.3856L464.384 387.584l-97.28 0.0512c-26.8288 0-48.64-23.2448-48.64-51.968v-207.872c0-28.672 21.8112-51.9168 48.64-51.9168h291.84z',\r
            transform: 'translate(54, 9) scale(0.02)'\r
          },\r
          text: {\r
            fontSize: 12,\r
            fill: '#ffb02a',\r
            y:8\r
          },\r
        },\r
        ports: {\r
          ...Ports,\r
          items: [\r
            {\r
              group: 'top',\r
            },\r
            {\r
              group: 'bottom',\r
            },\r
          ],\r
        },\r
      },\r
      true,\r
  );\r
\r
  addLog('🎉 所有 SVG 节点注册完成')\r
}\r
\r
function handleReady(designer: FlowDesigner, graph: Graph) {\r
  // 保存 designer 实例\r
  flowDesigner.value = designer\r
\r
  addLog('✅ 画布初始化完成')\r
  addLog('💡 提示: 悬停查看 hover 效果，点击切换 selected 状态')\r
\r
\r
  // ─── 添加示例节点 ───────────────────────────────────────────────────\r
  setTimeout(() => {\r
    const node1 = graph.addNode({\r
      shape: 'svg-start-node',\r
      x: 100,\r
      y: 100,\r
      label: '开始节点',\r
    })\r
\r
    const node2 = graph.addNode({\r
      shape: 'svg-approval-node',\r
      x: 300,\r
      y: 100,\r
      label: '审批节点',\r
    })\r
\r
    const node3 = graph.addNode({\r
      shape: 'svg-condition-node',\r
      x: 200,\r
      y: 250,\r
      label: '条件分支',\r
    })\r
\r
    // ─── 添加连线示例 ───────────────────────────────────────────────────\r
    // 连接1：node1 的右侧锚点 → node2 的左侧锚点\r
    graph.addEdge({\r
      source: { cell: node1, port: node1.getPortAt(1)?.id },  // right port (索引 1)\r
      target: { cell: node2, port: node2.getPortAt(3)?.id },  // left port (索引 3)\r
      shape: 'flow-edge',\r
      labels: ['连接1'],\r
    })\r
\r
    // 连接2：node2 的下侧锚点 → node3 的上侧锚点\r
    graph.addEdge({\r
      source: { cell: node2, port: node2.getPortAt(2)?.id },  // bottom port (索引 2)\r
      target: { cell: node3, port: node3.getPortAt(0)?.id },  // top port (索引 0)\r
      shape: 'flow-edge',\r
      labels: ['连接2'],\r
    })\r
\r
    // 连接3：node1 的下侧锚点 → node3 的左侧锚点\r
    graph.addEdge({\r
      source: { cell: node1, port: node1.getPortAt(2)?.id },  // bottom port (索引 2)\r
      target: { cell: node3, port: node3.getPortAt(1)?.id },  // right port (索引 1)\r
      shape: 'flow-edge',\r
      labels: ['连接3'],\r
    })\r
\r
    addLog('📦 已添加 3 个示例节点和 3 条连线')\r
    addLog('🎨 试试悬停和点击节点/连线吧！')\r
  }, 100)\r
}\r
\r
// ─── portStateRenderers 钩子 ─────────────────────────────────────────────────\r
\r
/** portState 对应的中文描述 */\r
const portStateLabels: Record<string, string> = {\r
  'default':     '默认（锚点隐藏/恢复）',\r
  'node-hover':  '节点悬停（空心锚点显示）',\r
  'port-hover':  '锚点悬停（实心高亮）',\r
  'connecting':  '连线中（所有锚点可连）',\r
  'selected':    '节点选中（锚点显示）',\r
}\r
\r
\r
function handleStartDrag(e: MouseEvent, nodeType: NodeTypeConfig, onStartDrag: any) {\r
  addLog(\`🎯 开始拖拽: \${nodeType.label}\`)\r
\r
  onStartDrag(e, {\r
    shape: nodeType.type,\r
    label: nodeType.label,\r
    width: nodeType.width,\r
    height: nodeType.height,\r
    data: {\r
      nodeInfo: {\r
        hint: nodeType.hint,\r
        color: nodeType.color,\r
      }\r
    }\r
  })\r
}\r
\r
// ════════════════════════════════════════════════════════════════════════════\r
// 方案B（新）：按节点类型分组的配置 - 集中管理所有节点类型的状态样式\r
// ════════════════════════════════════════════════════════════════════════════\r
\r
/**\r
 * 节点状态样式配置表\r
 *\r
 * 结构：nodeStylesConfig[节点类型][状态名] = 样式对象\r
 *\r
 * 支持的状态：\r
 * - default: 默认状态\r
 * - hover: 鼠标悬停状态\r
 * - selected: 选中状态\r
 * - error: 错误状态（自定义）\r
 */\r
const nodeStylesConfig: Record<string, Record<string, any>> = {\r
  // ─────────────────────────────────────────────────────────────────\r
  // 开始节点 (svg-start-node)\r
  // ─────────────────────────────────────────────────────────────────\r
  'svg-start-node': {\r
    default: {\r
      body: {\r
        stroke: '#95d375',\r
        strokeWidth: 2,\r
        fill: '#edf8e7',\r
      },\r
      label: {\r
        fill: '#81cb5c',\r
        fontWeight: 'normal',\r
      },\r
      icon: {\r
        fill:'#48c02a',\r
        opacity: 1\r
      },\r
    },\r
    hover: {\r
      body: {\r
        stroke: '#8b5cf6',\r
        strokeWidth: 3,\r
        fill: '#ede9fe',\r
        filter: {\r
          name: 'dropShadow',\r
          args: { dx: 0, dy: 2, blur: 6, color: 'rgba(139, 92, 246, 0.4)' }\r
        }\r
      },\r
      label: {\r
        fill: '#5b21b6',\r
        fontWeight: 'bold',\r
      },\r
      icon: {\r
        opacity: 1,\r
        fill:'#8b5cf6',\r
      },\r
    },\r
    selected: {\r
      body: {\r
        stroke: '#06b6d4',\r
        strokeWidth: 4,\r
        fill: '#cffafe',\r
        filter: {\r
          name: 'dropShadow',\r
          args: { dx: 0, dy: 0, blur: 8, color: 'rgba(6, 182, 212, 0.6)' }\r
        }\r
      },\r
      label: {\r
        fill: '#0e7490',\r
        fontWeight: 'bold',\r
      },\r
      icon: {\r
        fill: '#06b6d4',\r
        opacity: 1\r
      },\r
    },\r
    error: {\r
      body: {\r
        stroke: '#ef4444',\r
        strokeWidth: 4,\r
        fill: '#fee2e2',\r
        filter: {\r
          name: 'dropShadow',\r
          args: { dx: 0, dy: 0, blur: 8, color: 'rgba(239, 68, 68, 0.6)' }\r
        }\r
      },\r
      label: {\r
        fill: '#991b1b',\r
        fontWeight: 'bold',\r
      },\r
      icon: {\r
        fill: '#ef4444',\r
        opacity: 1\r
      },\r
    }\r
  },\r
\r
  // ─────────────────────────────────────────────────────────────────\r
  // 审批节点 (svg-approval-node)\r
  // ─────────────────────────────────────────────────────────────────\r
  'svg-approval-node': {\r
    default: {\r
      body: {\r
        stroke: '#83b3f7',\r
        strokeWidth: 2,\r
        fill: '#e6eeff',\r
      },\r
      label: {\r
        fill: '#5d9df7',\r
        fontWeight: 'normal',\r
      },\r
      icon: {\r
        fill:'#1d78f4',\r
        opacity: 1\r
      },\r
    },\r
    hover: {\r
      body: {\r
        stroke: '#fdc059',\r
        strokeWidth: 3,\r
        fill: '#ffeed1',\r
        filter: {\r
          name: 'dropShadow',\r
          args: { dx: 0, dy: 2, blur: 6, color: 'rgba(226,236,152,0.4)' }\r
        }\r
      },\r
      label: {fill: '#ffa100'},\r
      icon: {fill: '#ffa100',opacity: 1},\r
    },\r
    selected: {\r
      body: {\r
        stroke: '#2563eb',\r
        strokeWidth: 4,\r
        fill: '#bfdbfe',\r
        filter: {\r
          name: 'dropShadow',\r
          args: { dx: 0, dy: 0, blur: 8, color: 'rgba(37, 99, 235, 0.6)' }\r
        }\r
      },\r
      label: {\r
        fill: '#1e40af',\r
        fontWeight: 'bold',\r
      },\r
      icon: {\r
        fill: '#1d78f4',\r
        opacity: 1\r
      },\r
    },\r
    // ✅ 审批节点没有 error 状态，不定义即可\r
  },\r
\r
  // ─────────────────────────────────────────────────────────────────\r
  // 条件节点 (svg-condition-node)\r
  // ─────────────────────────────────────────────────────────────────\r
  'svg-condition-node': {\r
    default: {\r
      body: {\r
        stroke: '#fdc059',\r
        strokeWidth: 2,\r
        fill: '#ffeed1',\r
      },\r
      text: {\r
        fill: '#ffb02a',\r
        fontWeight: 'normal',\r
      },\r
      icon: {\r
        fill:'#ffa100',\r
      },\r
    },\r
    hover: {\r
      body: {\r
        stroke: '#15c71e',\r
        strokeWidth: 3,\r
        fill: '#e1f3e4',\r
        filter: {\r
          name: 'dropShadow',\r
          args: { dx: 0, dy: 2, blur: 6, color: 'rgba(220,241,218,0.4)' }\r
        }\r
      },\r
      text: {\r
        fill: '#15c71e',\r
        fontWeight: 'bold',\r
      },\r
      icon: {\r
        fill:'#15c71e',\r
      },\r
    },\r
    selected: {\r
      body: {\r
        stroke: '#d97706',\r
        strokeWidth: 4,\r
        fill: '#fde68a',\r
        filter: {\r
          name: 'dropShadow',\r
          args: { dx: 0, dy: 0, blur: 8, color: 'rgba(217, 119, 6, 0.6)' }\r
        }\r
      },\r
      text: {\r
        fill: '#92400e',\r
        fontWeight: 'bold',\r
      },\r
      icon: {\r
        fill:'#92400e',\r
      },\r
    }\r
  }\r
}\r
\r
// ════════════════════════════════════════════════════════════════════════════\r
// 工厂函数：根据样式配置生成状态渲染器\r
// ════════════════════════════════════════════════════════════════════════════\r
\r
/**\r
 * 根据节点类型的样式配置生成状态渲染器\r
 * @param nodeType 节点类型\r
 * @param stylesConfig 样式配置对象\r
 * @returns 状态渲染器映射表\r
 */\r
function createNodeStateRenderersFromConfig(stylesConfig: typeof nodeStylesConfig) {\r
  const renderers: any = {}\r
\r
  Object.entries(stylesConfig).forEach(([nodeType, states]) => {\r
    renderers[nodeType] = {}\r
\r
    Object.entries(states).forEach(([stateName, styles]) => {\r
      renderers[nodeType][stateName] = {\r
        apply: (cell: Node, designer?: FlowDesigner) => {\r
          // 样式应用\r
          cell.setAttrs(styles)\r
        },\r
        cleanup: (cell: Node) => {\r
          // 根据节点类型清理其他临时效果\r
          cell.setAttrs({\r
            body: {\r
              filter: null,\r
              strokeDasharray: ''\r
            }\r
          })\r
        }\r
      }\r
    })\r
  })\r
\r
  return renderers\r
}\r
\r
// ════════════════════════════════════════════════════════════════════════════\r
// 生成最终的 nodeStateRenderers（一行代码）\r
// ════════════════════════════════════════════════════════════════════════════\r
\r
const nodeStateRenderers = createNodeStateRenderersFromConfig(nodeStylesConfig)\r
\r
// ════════════════════════════════════════════════════════════════════════════\r
// 连线状态渲染器（edgeStateRenderers）\r
// ════════════════════════════════════════════════════════════════════════════\r
\r
/**\r
 * 连线状态渲染器配置\r
 *\r
 * 支持覆盖内置状态和添加自定义状态：\r
 * - 内置状态：default, hover, selected, flowing, dimmed\r
 * - 自定义状态：可以添加任意自定义状态（如 processing, error 等）\r
 *\r
 * 使用场景：\r
 * 1. 统一连线视觉风格（覆盖 default）\r
 * 2. 自定义交互反馈（覆盖 hover/selected）\r
 * 3. 表示业务状态（新增 processing/error/warning 等）\r
 */\r
const edgeStateRenderers: EdgeStateRendererMap = {\r
  // ─────────────────────────────────────────────────────────────────\r
  // 覆盖内置状态：default - 默认状态\r
  // ─────────────────────────────────────────────────────────────────\r
  default: (edge: Edge) => ({\r
    apply: (cell) => {\r
      addLog(\`🔗 连线 [\${cell.id.slice(0, 8)}...] → default 状态\`)\r
\r
      cell.attr({\r
        line: {\r
          stroke: '#9333ea',          // 紫色连线\r
          strokeWidth: 2,\r
          strokeDasharray: '',\r
        },\r
      })\r
\r
      // 更新标签样式\r
      const labels = cell.getLabels()\r
      console.log('originalLabeloriginalLabel::', JSON.stringify(labels));\r
      if (labels && labels.length > 0) {\r
        const originalLabel = labels[0]\r
        cell.setLabelAt(0, {\r
          ...originalLabel,\r
          attrs: {\r
            label: {\r
              fill: '#6b21a8',\r
              text: originalLabel.attrs?.label?.text || '',\r
              fillOpacity: 1,\r
            },\r
            body: {\r
              fill: '#f3e8ff',\r
              stroke: '#9333ea',\r
              strokeWidth: 1,\r
              fillOpacity: 1,\r
              strokeOpacity: 1,\r
            }\r
          }\r
        })\r
      }\r
    }\r
  }),\r
\r
  // ─────────────────────────────────────────────────────────────────\r
  // 覆盖内置状态：hover - 鼠标悬停\r
  // ─────────────────────────────────────────────────────────────────\r
  hover: (edge: Edge) => ({\r
    apply: (cell) => {\r
      addLog(\`🔗 连线 [\${cell.id.slice(0, 8)}...] → hover 状态\`)\r
\r
      cell.attr({\r
        line: {\r
          stroke: '#10b981',         // 绿色高亮\r
          strokeWidth: 3,\r
        }\r
      })\r
\r
      const labels = cell.getLabels()\r
      if (labels && labels.length > 0) {\r
        const originalLabel = labels[0]\r
        console.log('originalLabeloriginalLabel::', JSON.stringify(originalLabel));\r
        cell.setLabelAt(0, {\r
          ...originalLabel,\r
          attrs: {\r
            label: {\r
              fill: '#065f46',\r
              text: originalLabel.attrs?.label?.text || '',\r
              fillOpacity: 1,\r
            },\r
            body: {\r
              fill: '#d1fae5',\r
              stroke: '#10b981',\r
              strokeWidth: 2,\r
              fillOpacity: 1,\r
              strokeOpacity: 1,\r
            }\r
          }\r
        })\r
      }\r
    }\r
  }),\r
\r
  // ─────────────────────────────────────────────────────────────────\r
  // 覆盖内置状态：selected - 选中状态\r
  // ─────────────────────────────────────────────────────────────────\r
  selected: (edge: Edge) => ({\r
    apply: (cell) => {\r
      addLog(\`🔗 连线 [\${cell.id.slice(0, 8)}...] → selected 状态\`)\r
\r
      cell.attr({\r
        line: {\r
          stroke: '#06b6d4',         // 青色选中\r
          strokeWidth: 4,\r
        }\r
      })\r
\r
      const labels = cell.getLabels()\r
      if (labels && labels.length > 0) {\r
        const originalLabel = labels[0]\r
        cell.setLabelAt(0, {\r
          ...originalLabel,\r
          attrs: {\r
            label: {\r
              fill: '#0e7490',\r
              text: originalLabel.attrs?.label?.text || '',\r
              fontWeight: 'bold',\r
              fillOpacity: 1,\r
            },\r
            body: {\r
              fill: '#cffafe',\r
              stroke: '#06b6d4',\r
              strokeWidth: 2,\r
              fillOpacity: 1,\r
              strokeOpacity: 1,\r
            }\r
          }\r
        })\r
      }\r
    }\r
  }),\r
\r
  // ─────────────────────────────────────────────────────────────────\r
  // 覆盖内置状态：flowing - 流动动画（数据流转）\r
  // ─────────────────────────────────────────────────────────────────\r
  flowing: (edge: Edge) => ({\r
    apply: (cell) => {\r
      addLog(\`🔗 连线 [\${cell.id.slice(0, 8)}...] → flowing 状态（流动动画）\`)\r
\r
      cell.attr({\r
        line: {\r
          stroke: '#e7581a',         // 绿色流动\r
          strokeWidth: 3,\r
          strokeDasharray: '10,5',   // 虚线样式\r
          style: {\r
            animation: 'fd-flow 1s linear infinite'  // CSS 动画\r
          }\r
        }\r
      })\r
\r
      const labels = cell.getLabels()\r
      if (labels && labels.length > 0) {\r
        const originalLabel = labels[0]\r
        cell.setLabelAt(0, {\r
          ...originalLabel,\r
          attrs: {\r
            label: {\r
              fill: '#e7581a',\r
              text: originalLabel.attrs?.label?.text || '',\r
              fontStyle: 'italic',\r
              fillOpacity: 1,\r
            },\r
            body: {\r
              fill: '#efd9cf',\r
              stroke: '#e7581a',\r
              strokeWidth: 2,\r
              fillOpacity: 1,\r
              strokeOpacity: 1,\r
            }\r
          }\r
        })\r
      }\r
    },\r
    cleanup: (cell) => {\r
      // 清除动画\r
      cell.attr({\r
        line: {\r
          strokeDasharray: '',\r
          style: { animation: 'none' }\r
        }\r
      })\r
    }\r
  }),\r
\r
  // ─────────────────────────────────────────────────────────────────\r
  // 覆盖内置状态：dimmed - 半透明状态（其他元素高亮时）\r
  // ─────────────────────────────────────────────────────────────────\r
  dimmed: (edge: Edge) => ({\r
    apply: (cell) => {\r
      cell.attr({\r
        line: {\r
          strokeOpacity: 0.66,        // 降低不透明度\r
        }\r
      })\r
\r
      const labels = cell.getLabels()\r
      if (labels && labels.length > 0) {\r
        const originalLabel = labels[0];\r
        cell.setLabelAt(0, {\r
          ...originalLabel,\r
          attrs: {\r
            label: {\r
              fillOpacity: 0.66,\r
              text: originalLabel?.attrs?.label?.text??''\r
            },\r
            body: {\r
              fillOpacity: 0.66,\r
              strokeOpacity: 0.66,\r
            }\r
          }\r
        })\r
      }\r
    },\r
    cleanup: (cell) => {\r
      // 恢复不透明度\r
      cell.attr({\r
        line: {\r
          strokeOpacity: 1,\r
        }\r
      })\r
    }\r
  }),\r
}\r
\r
\r
<\/script>\r
\r
\r
<style scoped>\r
.demo-node-svg {\r
  display: flex;\r
  height: 100%;\r
  min-height: 600px;\r
  gap: 16px;\r
}\r
\r
.demo-node-svg__log {\r
  width: 280px;\r
  border: 1px solid #e8e8e8;\r
  border-radius: 8px;\r
  padding: 16px;\r
  background: #fafafa;\r
  overflow: hidden;\r
  display: flex;\r
  flex-direction: column;\r
}\r
\r
.demo-node-svg__log-header {\r
  display: flex;\r
  justify-content: space-between;\r
  align-items: center;\r
  margin-bottom: 12px;\r
}\r
\r
.demo-node-svg__log h4 {\r
  margin: 0;\r
  font-size: 14px;\r
  color: #1a1a2e;\r
  font-weight: 600;\r
}\r
\r
.demo-node-svg__clear-btn {\r
  padding: 2px 8px;\r
  font-size: 12px;\r
  color: #666;\r
  background: #fff;\r
  border: 1px solid #d9d9d9;\r
  border-radius: 4px;\r
  cursor: pointer;\r
  transition: all 0.2s;\r
  user-select: none;\r
}\r
\r
.demo-node-svg__clear-btn:hover {\r
  color: #1890ff;\r
  border-color: #1890ff;\r
}\r
\r
.demo-node-svg__log-content {\r
  flex: 1;\r
  overflow-y: auto;\r
  font-size: 12px;\r
  line-height: 1.8;\r
}\r
\r
.demo-node-svg__log-item {\r
  padding: 4px 0;\r
  color: #555;\r
  font-family: 'Monaco', 'Menlo', 'Consolas', monospace;\r
  border-bottom: 1px solid #f0f0f0;\r
}\r
\r
.demo-node-svg__log-item:last-child {\r
  border-bottom: none;\r
}\r
\r
.demo-node-svg__canvas {\r
  flex: 1;\r
  border: 1px solid #e8e8e8;\r
  border-radius: 8px;\r
  overflow: hidden;\r
  background: #fff;\r
}\r
\r
/* ==================== 自定义节点面板样式 ==================== */\r
.custom-palette {\r
  display: flex;\r
  flex-direction: column;\r
  height: 100%;\r
  background: linear-gradient(to bottom, #f9fafb, #ffffff);\r
  border-right: 1px solid #e8e8e8;\r
  width: 200px;\r
}\r
\r
.custom-palette__header {\r
  padding: 16px;\r
  border-bottom: 2px solid #e8e8e8;\r
  background: #fff;\r
}\r
\r
.custom-palette__title {\r
  margin: 0 0 4px 0;\r
  font-size: 16px;\r
  font-weight: 600;\r
  color: #1a1a2e;\r
}\r
\r
.custom-palette__desc {\r
  font-size: 12px;\r
  color: #999;\r
}\r
\r
.custom-palette__section {\r
  padding: 12px;\r
}\r
\r
.custom-palette__section-title {\r
  font-size: 11px;\r
  font-weight: 600;\r
  color: #999;\r
  text-transform: uppercase;\r
  letter-spacing: 0.06em;\r
  margin-bottom: 8px;\r
  padding: 0 4px;\r
}\r
\r
.custom-palette__item {\r
  display: flex;\r
  align-items: center;\r
  gap: 12px;\r
  padding: 10px;\r
  margin-bottom: 8px;\r
  background: #fff;\r
  border: 1px solid #e8e8e8;\r
  border-radius: 12px;\r
  cursor: move;\r
  transition: all 0.2s;\r
  user-select: none;\r
  width: 160px;\r
  height: 50px;\r
}\r
\r
.custom-palette__item:hover {\r
  border-color: #1677ff;\r
  box-shadow: 0 2px 8px rgba(22, 119, 255, 0.15);\r
  transform: translateY(-1px);\r
}\r
\r
.custom-palette__item:active {\r
  transform: translateY(0);\r
  box-shadow: 0 1px 4px rgba(22, 119, 255, 0.2);\r
}\r
\r
.custom-palette__item-icon {\r
  width: 36px;\r
  height: 36px;\r
  display: flex;\r
  align-items: center;\r
  justify-content: center;\r
  border-radius: 6px;\r
  flex-shrink: 0;\r
}\r
\r
.custom-palette__item-info {\r
  flex: 1;\r
  min-width: 0;\r
}\r
\r
.custom-palette__item-label {\r
  font-size: 13px;\r
  font-weight: 500;\r
  color: #333;\r
  margin-bottom: 2px;\r
}\r
\r
.custom-palette__item-hint {\r
  font-size: 11px;\r
  color: #999;\r
  white-space: nowrap;\r
  overflow: hidden;\r
  text-overflow: ellipsis;\r
}\r
\r
/* ==================== 交互说明 ==================== */\r
.custom-palette__tips {\r
  margin-top: auto;\r
  padding: 12px;\r
  background: #fff9e6;\r
  border-top: 1px solid #ffe58f;\r
}\r
\r
.tips-title {\r
  font-size: 12px;\r
  font-weight: 600;\r
  color: #d48806;\r
  margin-bottom: 8px;\r
}\r
\r
.tips-list {\r
  margin: 0;\r
  padding-left: 16px;\r
  font-size: 11px;\r
  line-height: 1.8;\r
  color: #8c8c8c;\r
}\r
\r
.tips-list li {\r
  margin-bottom: 4px;\r
}\r
\r
.tips-list strong {\r
  color: #595959;\r
}\r
\r
</style>\r
\r
\r
<!--如果需要简单控制节点样式，需要将此节点样式暴露到全局,适当增加前缀以防止污染-->\r
<style>\r
\r
\r
</style>\r
`,Dg={class:"demo-tooltip-renderer"},$g={class:"demo-tooltip-renderer__controls"},Eg={class:"control-section"},Fg={class:"log-content"},Lg={key:0,class:"log-empty"},Tg={class:"demo-tooltip-renderer__canvas"},Rg=G({__name:"demo-tooltip-renderer",setup(T){const v=S([]);function a(x,s){var t,e,i,r,p,m,u,N,k,d;const o=new Date().toLocaleTimeString();if(x.isNode()){const _=x,$=_.label||(s==null?void 0:s.label)||"";if(_.shape==="rect"&&$.includes("开始"))return c(`[${o}] 🚫 隐藏开始节点 Tooltip`),!1;if((s==null?void 0:s.status)==="error")return c(`[${o}] 🔴 错误节点 Tooltip (红色样式): ${$}`),"tooltip-error";if((s==null?void 0:s.status)==="warning")return c(`[${o}] 🟡 警告节点 Tooltip (黄色样式): ${$}`),"tooltip-warning";if((s==null?void 0:s.status)==="success")return c(`[${o}] 🟢 成功节点 Tooltip (绿色样式): ${$}`),"tooltip-success";c(`[${o}] ℹ️ 默认节点 Tooltip: ${$}`);return}if(x.isEdge()){const _=x,$=_.getLabels(),A=((i=(e=(t=$[0])==null?void 0:t.attrs)==null?void 0:e.text)==null?void 0:i.text)||((m=(p=(r=$[0])==null?void 0:r.attrs)==null?void 0:p.label)==null?void 0:m.text)||"";if(A.includes("错误"))return c(`[${o}] 🔴 错误连线 Tooltip (红色): ${A}`),"tooltip-edge-error";if(A.includes("警告"))return c(`[${o}] 🟡 警告连线 Tooltip (黄色): ${A}`),"tooltip-edge-warning";const C=_.getSourceNode(),L=_.getTargetNode();if(((u=C==null?void 0:C.getData())==null?void 0:u.status)==="error"||((N=L==null?void 0:L.getData())==null?void 0:N.status)==="error")return c(`[${o}] ⚠️ 连接到错误节点的连线 (橙色): ${A}`),"tooltip-edge-from-error";if(((k=C==null?void 0:C.getData())==null?void 0:k.status)==="success"||((d=L==null?void 0:L.getData())==null?void 0:d.status)==="success")return c(`[${o}] ✅ 连接到成功节点的连线 (绿色): ${A}`),"tooltip-edge-from-success";c(`[${o}] ℹ️ 默认连线 Tooltip: ${A}`);return}}function c(x){v.value.push(x),v.value.length>20&&v.value.shift()}function l(){v.value=[]}function g(x,s){const o=s.addNode({x:100,y:100,width:120,height:60,label:"开始节点",shape:"rect",data:{status:"normal"},attrs:{body:{fill:"#e6f7ff",stroke:"#1890ff",strokeWidth:2},label:{fill:"#1890ff",fontWeight:"bold"}}}),t=s.addNode({x:300,y:100,width:120,height:60,label:"处理节点",shape:"rect",data:{status:"success"},attrs:{body:{fill:"#f6ffed",stroke:"#52c41a",strokeWidth:2},label:{fill:"#389e0d",fontWeight:"bold"}}}),e=s.addNode({x:100,y:220,width:120,height:60,label:"警告节点",shape:"rect",data:{status:"warning"},attrs:{body:{fill:"#fffbe6",stroke:"#faad14",strokeWidth:2},label:{fill:"#d48806",fontWeight:"bold"}}}),i=s.addNode({x:300,y:220,width:120,height:60,label:"错误节点",shape:"rect",data:{status:"error"},attrs:{body:{fill:"#fff1f0",stroke:"#ff4d4f",strokeWidth:2},label:{fill:"#cf1322",fontWeight:"bold"}}});s.addEdge({source:o,target:t,shape:"flow-edge",labels:[{attrs:{text:{text:"正常流程"}}}]}),s.addEdge({source:o,target:e,shape:"flow-edge",labels:[{attrs:{text:{text:"警告分支"}}}]}),s.addEdge({source:t,target:i,shape:"flow-edge",labels:[{attrs:{text:{text:"错误处理"}}}]}),c("✅ 画布初始化完成"),c("💡 悬停节点或连线查看不同的 Tooltip 效果"),c("💡 连线 tooltip 会根据文本内容或连接的节点状态自动设置样式")}return(x,s)=>(h(),b("div",Dg,[n("div",$g,[s[1]||(s[1]=Yn('<div class="control-section" data-v-1ffd4635><h4 data-v-1ffd4635>💡 功能说明</h4><div class="description" data-v-1ffd4635><p data-v-1ffd4635>通过 <code data-v-1ffd4635>tooltipRenderer</code> 钩子统一控制节点和连线 Tooltip：</p><ul data-v-1ffd4635><li data-v-1ffd4635><strong data-v-1ffd4635>蓝色开始节点</strong>：隐藏 Tooltip</li><li data-v-1ffd4635><strong data-v-1ffd4635>绿色处理节点</strong>：绿色 Tooltip</li><li data-v-1ffd4635><strong data-v-1ffd4635>黄色警告节点</strong>：黄色 Tooltip</li><li data-v-1ffd4635><strong data-v-1ffd4635>红色错误节点</strong>：红色 Tooltip</li><li data-v-1ffd4635><strong data-v-1ffd4635>连线 Tooltip</strong>：根据 label 文本或连接节点自动设置样式</li></ul></div></div>',1)),n("div",Eg,[s[0]||(s[0]=n("h4",null,"事件日志",-1)),n("button",{class:"clear-btn",onClick:l},"清除日志"),n("div",Fg,[(h(!0),b(O,null,H(v.value,(o,t)=>(h(),b("div",{key:t,class:"log-item"},D(o),1))),128)),v.value.length===0?(h(),b("div",Lg," 悬停节点或连线查看 Tooltip 控制效果 ")):z("",!0)])])]),n("div",Tg,[f(V,{mode:"design","tooltip-renderer":a,onReady:g})])]))}}),zg=U(Rg,[["__scopeId","data-v-1ffd4635"]]),Ag=`<template>
  <div class="demo-tooltip-renderer">
    <!-- 控制面板 -->
    <div class="demo-tooltip-renderer__controls">
      <div class="control-section">
        <h4>💡 功能说明</h4>
        <div class="description">
          <p>通过 <code>tooltipRenderer</code> 钩子统一控制节点和连线 Tooltip：</p>
          <ul>
            <li><strong>蓝色开始节点</strong>：隐藏 Tooltip</li>
            <li><strong>绿色处理节点</strong>：绿色 Tooltip</li>
            <li><strong>黄色警告节点</strong>：黄色 Tooltip</li>
            <li><strong>红色错误节点</strong>：红色 Tooltip</li>
            <li><strong>连线 Tooltip</strong>：根据 label 文本或连接节点自动设置样式</li>
          </ul>
        </div>
      </div>



      <div class="control-section">
        <h4>事件日志</h4>
        <button class="clear-btn" @click="clearLogs">清除日志</button>
        <div class="log-content">
          <div v-for="(log, index) in logs" :key="index" class="log-item">
            {{ log }}
          </div>
          <div v-if="logs.length === 0" class="log-empty">
            悬停节点或连线查看 Tooltip 控制效果
          </div>
        </div>
      </div>
    </div>

    <!-- 画布容器 -->
    <div class="demo-tooltip-renderer__canvas">
      <FlowDesignerLayout
        mode="design"
        :tooltip-renderer="handleTooltipRenderer"
        @ready="handleReady"
      >
<!--        <template #node-tooltip="{ node, data }">-->
<!--          <div class="my-node-tooltip" style="color: black">-->
<!--            node-tooltip插槽:{{ data?.label }}&#45;&#45;{{node.shape}}-->
<!--          </div>-->
<!--        </template>-->
      </FlowDesignerLayout>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
//import { FlowDesignerLayout } from '@quick-code/x6-flow-designer'
import FlowDesignerLayout from '@/components/FlowDesigner/FlowDesignerLayout.vue'
import type { FlowDesigner } from '@quick-code/x6-flow-designer'
import type { Graph, Node, Edge } from '@antv/x6'

// ============================================================================
// 状态管理
// ============================================================================

const logs = ref<string[]>([])

let designer: FlowDesigner | null = null

// ============================================================================
// 统一的 Tooltip 渲染器钩子（支持节点和连线）
// ============================================================================

/**
 * 统一的 Tooltip 渲染控制钩子
 *
 * 同时处理节点和连线的 tooltip 显示和样式
 *
 * @param cell - 当前元素（Node 或 Edge）
 * @param data - 元素的业务数据
 * @returns
 *   - false: 不显示 tooltip
 *   - string: 自定义 className
 *   - undefined/true: 使用默认行为
 */
function handleTooltipRenderer(cell: Node | Edge, data: any): boolean | string | undefined {
  const timestamp = new Date().toLocaleTimeString()

  // ═══════════════════════════════════════════════════════════════
  // 处理节点 Tooltip
  // ═══════════════════════════════════════════════════════════════
  if (cell.isNode()) {
    const node = cell as Node
    const label = node.label || data?.label || ''

    // 场景1：根据节点类型隐藏 tooltip
    if (node.shape === 'rect' && label.includes('开始')) {
      addLog(\`[\${timestamp}] 🚫 隐藏开始节点 Tooltip\`)
      return false  // 不显示 tooltip
    }

    // 场景2：根据节点数据状态添加自定义样式
    if (data?.status === 'error') {
      addLog(\`[\${timestamp}] 🔴 错误节点 Tooltip (红色样式): \${label}\`)
      return 'tooltip-error'  // 返回自定义 className
    }

    if (data?.status === 'warning') {
      addLog(\`[\${timestamp}] 🟡 警告节点 Tooltip (黄色样式): \${label}\`)
      return 'tooltip-warning'
    }

    if (data?.status === 'success') {
      addLog(\`[\${timestamp}] 🟢 成功节点 Tooltip (绿色样式): \${label}\`)
      return 'tooltip-success'
    }

    // 场景3：默认行为
    addLog(\`[\${timestamp}] ℹ️ 默认节点 Tooltip: \${label}\`)
    return undefined
  }

  // ═══════════════════════════════════════════════════════════════
  // 处理连线 Tooltip
  // ═══════════════════════════════════════════════════════════════
  if (cell.isEdge()) {
    const edge = cell as Edge
    const labels = edge.getLabels()
    const labelText = labels[0]?.attrs?.text?.text ||
                     labels[0]?.attrs?.label?.text || ''

    // 场景1：根据 label 文本内容添加样式
    if (labelText.includes('错误')) {
      addLog(\`[\${timestamp}] 🔴 错误连线 Tooltip (红色): \${labelText}\`)
      return 'tooltip-edge-error'
    }

    if (labelText.includes('警告')) {
      addLog(\`[\${timestamp}] 🟡 警告连线 Tooltip (黄色): \${labelText}\`)
      return 'tooltip-edge-warning'
    }

    // 场景2：根据连接的节点状态决定样式
    const sourceNode = edge.getSourceNode()
    const targetNode = edge.getTargetNode()

    if (sourceNode?.getData()?.status === 'error' ||
        targetNode?.getData()?.status === 'error') {
      addLog(\`[\${timestamp}] ⚠️ 连接到错误节点的连线 (橙色): \${labelText}\`)
      return 'tooltip-edge-from-error'
    }

    if (sourceNode?.getData()?.status === 'success' ||
        targetNode?.getData()?.status === 'success') {
      addLog(\`[\${timestamp}] ✅ 连接到成功节点的连线 (绿色): \${labelText}\`)
      return 'tooltip-edge-from-success'
    }

    // 场景3：默认行为
    addLog(\`[\${timestamp}] ℹ️ 默认连线 Tooltip: \${labelText}\`)
    return undefined
  }

  return undefined
}

// ============================================================================
// 工具函数
// ============================================================================

function addLog(message: string) {
  logs.value.push(message)
  // 限制日志数量
  if (logs.value.length > 20) {
    logs.value.shift()
  }
}

function clearLogs() {
  logs.value = []
}

// ============================================================================
// 生命周期钩子
// ============================================================================

function handleReady(des: FlowDesigner, graph: Graph) {
  designer = des

  // 添加示例节点
  const node1 = graph.addNode({
    x: 100,
    y: 100,
    width: 120,
    height: 60,
    label: '开始节点',
    shape: 'rect',
    data: { status: 'normal' },
    attrs: {
      body: {
        fill: '#e6f7ff',       // 浅蓝色背景
        stroke: '#1890ff',     // 蓝色边框
        strokeWidth: 2,
      },
      label: {
        fill: '#1890ff',       // 蓝色文字
        fontWeight: 'bold',
      }
    }
  })

  const node2 = graph.addNode({
    x: 300,
    y: 100,
    width: 120,
    height: 60,
    label: '处理节点',
    shape: 'rect',
    data: { status: 'success' },
    attrs: {
      body: {
        fill: '#f6ffed',       // 浅绿色背景
        stroke: '#52c41a',     // 绿色边框
        strokeWidth: 2,
      },
      label: {
        fill: '#389e0d',       // 深绿色文字
        fontWeight: 'bold',
      }
    }
  })

  const node3 = graph.addNode({
    x: 100,
    y: 220,
    width: 120,
    height: 60,
    label: '警告节点',
    shape: 'rect',
    data: { status: 'warning' },
    attrs: {
      body: {
        fill: '#fffbe6',       // 浅黄色背景
        stroke: '#faad14',     // 橙黄色边框
        strokeWidth: 2,
      },
      label: {
        fill: '#d48806',       // 深黄色文字
        fontWeight: 'bold',
      }
    }
  })

  const node4 = graph.addNode({
    x: 300,
    y: 220,
    width: 120,
    height: 60,
    label: '错误节点',
    shape: 'rect',
    data: { status: 'error' },
    attrs: {
      body: {
        fill: '#fff1f0',       // 浅红色背景
        stroke: '#ff4d4f',     // 红色边框
        strokeWidth: 2,
      },
      label: {
        fill: '#cf1322',       // 深红色文字
        fontWeight: 'bold',
      }
    }
  })

  // 添加连线（使用完整的 label 配置，确保 attrs.text.text 存在）
  graph.addEdge({
    source: node1,
    target: node2,
    shape: 'flow-edge',
    labels: [{
      attrs: {
        text: {
          text: '正常流程'  // ✅ 使用 attrs.text.text 路径
        }
      }
    }],
  })

  graph.addEdge({
    source: node1,
    target: node3,
    shape: 'flow-edge',
    labels: [{
      attrs: {
        text: {
          text: '警告分支'
        }
      }
    }],
  })

  graph.addEdge({
    source: node2,
    target: node4,
    shape: 'flow-edge',
    labels: [{
      attrs: {
        text: {
          text: '错误处理'
        }
      }
    }],
  })

  addLog('✅ 画布初始化完成')
  addLog('💡 悬停节点或连线查看不同的 Tooltip 效果')
  addLog('💡 连线 tooltip 会根据文本内容或连接的节点状态自动设置样式')
}
<\/script>

<style scoped>
.demo-tooltip-renderer {
  display: flex;
  height: 100%;
  min-height: 600px;
  gap: 16px;
}

.demo-tooltip-renderer__controls {
  width: 280px;
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.control-section {
  border: 1px solid #e8e8e8;
  border-radius: 8px;
  padding: 16px;
  background: #fafafa;
}

.control-section h4 {
  margin: 0 0 12px 0;
  font-size: 14px;
  color: #1a1a2e;
  font-weight: 600;
}

.description {
  font-size: 12px;
  line-height: 1.6;
  color: #666;
}

.description p {
  margin: 0 0 8px 0;
}

.description code {
  padding: 2px 6px;
  background: #f0f0f0;
  border-radius: 3px;
  font-family: 'Monaco', 'Menlo', 'Consolas', monospace;
  font-size: 11px;
  color: #d73a49;
}

.description ul {
  margin: 0;
  padding-left: 20px;
}

.description li {
  margin-bottom: 4px;
}

.description strong {
  color: #333;
  font-weight: 600;
}

.control-row {
  margin-bottom: 8px;
}

.control-row label {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 13px;
  color: #333;
  cursor: pointer;
  user-select: none;
}

.control-row input[type="checkbox"] {
  cursor: pointer;
}

.clear-btn {
  width: 100%;
  padding: 6px 12px;
  margin-bottom: 12px;
  font-size: 12px;
  color: #666;
  background: #fff;
  border: 1px solid #d9d9d9;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.2s;
  user-select: none;
}

.clear-btn:hover {
  color: #1890ff;
  border-color: #1890ff;
}

.log-content {
  max-height: 400px;
  overflow-y: auto;
  font-size: 12px;
  line-height: 1.8;
}

.log-item {
  padding: 4px 0;
  color: #555;
  font-family: 'Monaco', 'Menlo', 'Consolas', monospace;
  border-bottom: 1px solid #f0f0f0;
}

.log-item:last-child {
  border-bottom: none;
}

.log-empty {
  padding: 20px;
  text-align: center;
  color: #999;
  font-size: 12px;
}

.demo-tooltip-renderer__canvas {
  flex: 1;
  border: 1px solid #e8e8e8;
  border-radius: 8px;
  overflow: hidden;
  background: #fff;
}
</style>

<style>
/* 全局样式：自定义 Tooltip 样式类 */

/* ═══════════════ 节点 Tooltip 样式 ═══════════════ */

/* 错误状态 Tooltip - 红色主题 */
.tooltip-error.fdl-tooltip {
  background: #fff1f0 !important;
  border: 2px solid #ff4d4f !important;
  box-shadow: 0 4px 12px rgba(255, 77, 79, 0.3) !important;
}

.tooltip-error.fdl-tooltip [data-role="tooltip-content"] {
  color: #cf1322 !important;
  font-weight: 600;
}

.tooltip-error .fdl-tooltip__arrow {
  border-top-color: #ff4d4f !important;
}

/* 警告状态 Tooltip - 黄色主题 */
.tooltip-warning.fdl-tooltip {
  background: #fffbe6 !important;
  border: 2px solid #faad14 !important;
  box-shadow: 0 4px 12px rgba(250, 173, 20, 0.3) !important;
}

.tooltip-warning.fdl-tooltip [data-role="tooltip-content"] {
  color: #d48806 !important;
  font-weight: 600;
}

.tooltip-warning .fdl-tooltip__arrow {
  border-top-color: #faad14 !important;
}

/* 成功状态 Tooltip - 绿色主题 */
.tooltip-success.fdl-tooltip {
  background: #f6ffed !important;
  border: 2px solid #52c41a !important;
  box-shadow: 0 4px 12px rgba(82, 196, 26, 0.3) !important;
}

.tooltip-success.fdl-tooltip [data-role="tooltip-content"] {
  color: #389e0d !important;
  font-weight: 600;
}

.tooltip-success .fdl-tooltip__arrow {
  border-top-color: #52c41a !important;
}

/* ═══════════════ 连线 Tooltip 样式 ═══════════════ */

/* 错误连线 Tooltip - 深红色主题 */
.tooltip-edge-error.fdl-tooltip {
  background: #fff1f0 !important;
  border: 2px solid #ff4d4f !important;
  box-shadow: 0 4px 12px rgba(255, 77, 79, 0.3) !important;
}

.tooltip-edge-error.fdl-tooltip [data-role="tooltip-content"] {
  color: #cf1322 !important;
  font-weight: 600;
}

.tooltip-edge-error .fdl-tooltip__arrow {
  border-top-color: #ff4d4f !important;
}

/* 警告连线 Tooltip - 橙黄色主题 */
.tooltip-edge-warning.fdl-tooltip {
  background: #fffbe6 !important;
  border: 2px solid #faad14 !important;
  box-shadow: 0 4px 12px rgba(250, 173, 20, 0.3) !important;
}

.tooltip-edge-warning.fdl-tooltip [data-role="tooltip-content"] {
  color: #d48806 !important;
  font-weight: 600;
}

.tooltip-edge-warning .fdl-tooltip__arrow {
  border-top-color: #faad14 !important;
}

/* 连接到错误节点的连线 - 橙色主题 */
.tooltip-edge-from-error.fdl-tooltip {
  background: #fff7e6 !important;
  border: 2px solid #fa8c16 !important;
  box-shadow: 0 4px 12px rgba(250, 140, 22, 0.3) !important;
}

.tooltip-edge-from-error.fdl-tooltip [data-role="tooltip-content"] {
  color: #d46b08 !important;
  font-weight: 600;
}

.tooltip-edge-from-error .fdl-tooltip__arrow {
  border-top-color: #fa8c16 !important;
}

/* 连接到成功节点的连线 - 绿色主题 */
.tooltip-edge-from-success.fdl-tooltip {
  background: #f6ffed !important;
  border: 2px solid #52c41a !important;
  box-shadow: 0 4px 12px rgba(82, 196, 26, 0.3) !important;
}

.tooltip-edge-from-success.fdl-tooltip [data-role="tooltip-content"] {
  color: #389e0d !important;
  font-weight: 600;
}

.tooltip-edge-from-success .fdl-tooltip__arrow {
  border-top-color: #52c41a !important;
}

.my-node-tooltip {
  background: #fff;
  border: 1px solid #e8e8e8;
  border-radius: 4px;
  padding: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
}
</style>
`,Mg={class:"demo-node-svg"},Wg={class:"demo-node-svg__log"},Ig={class:"demo-node-svg__log-content"},Pg={class:"demo-node-svg__canvas"},Gg={class:"custom-palette"},Og={class:"custom-palette__section"},Hg=["onMousedown"],Bg={class:"custom-palette__item-icon"},Vg=["src"],Ug={class:"custom-palette__item-info"},Zg=["onMousedown"],qg={class:"custom-palette__item-icon"},jg=["src"],Yg=G({__name:"demo-state-port-renderers",setup(T){const v=S([]),a=S(null),c=[{type:"svg-start-node",label:"开始节点",classNamePerfix:"x6",width:120,height:38,rectStroke:"#95d375",rectStrokeWidth:1,rectFill:"#edf8e7",icon:mn,iconHover:un,textFill:"#81cb5c"},{type:"svg-approval-node",label:"审批节点",classNamePerfix:"x6",width:120,height:38,rectStroke:"#83b3f7",rectStrokeWidth:1,rectFill:"#e6eeff",icon:hn,iconHover:bn,textFill:"#5d9df7"}],l={groups:{top:{position:"top",attrs:{circle:{r:4,magnet:!0,stroke:"#5F95FF",strokeWidth:1,fill:"#fff",style:{visibility:"hidden"}},label:{position:"top"},text:{text:"",fill:"#ff5800"}}},right:{position:"right",attrs:{circle:{r:4,magnet:!0,stroke:"#5F95FF",strokeWidth:1,fill:"#fff",style:{visibility:"hidden"}},label:{position:"right"},text:{text:"",fill:"#ff5800"}}},bottom:{position:"bottom",attrs:{circle:{r:4,magnet:!0,stroke:"#5F95FF",strokeWidth:1,fill:"#fff",style:{visibility:"hidden"}},label:{position:"bottom"},text:{text:"",fill:"#ff5800"}}},left:{position:"left",attrs:{circle:{r:4,magnet:!0,stroke:"#5F95FF",strokeWidth:1,fill:"#fff",style:{visibility:"hidden"}},label:{position:"left"},text:{text:"",fill:"#ff5800"}}}},items:[{group:"top",label:{position:"top"}},{group:"right",label:{position:"right"}},{group:"bottom",label:{position:"bottom"}},{group:"left",label:{position:"left"}}]};function g(r){const p=new Date().toLocaleTimeString();v.value.push(`[${p}] ${r}`)}function x(){v.value=[]}function s(r){g("🔧 beforeGraphInit: 开始注册 SVG 节点"),c.forEach(p=>{J.registerNode(p.type,{inherit:"rect",width:p.width,height:p.height,markup:[{tagName:"rect",selector:"body"},{tagName:"path",selector:"icon"},{tagName:"text",selector:"label"}],attrs:{body:{stroke:p.rectStroke,strokeWidth:p.rectStrokeWidth,fill:p.rectFill,rx:10,ry:10},icon:{fill:p.type=="svg-start-node"?"#48c02a":"#1d78f4",d:p.type=="svg-start-node"?"M510.9 60.7c-245.6 0-446.7 199.8-446.7 446.7C64.2 753 263.9 954 510.8 954s446.6-199.7 446.6-446.6c0.1-245.6-199.6-446.7-446.5-446.7zM692 525.9l-272.1 157c-10.7 6.2-24-1.5-24-13.9V354.9c0-12.3 13.3-20 24-13.9L692 498.1c10.6 6.2 10.6 21.6 0 27.8z":"M422.399 601.6V493.323c-79.111-34.622-134.4-113.655-134.4-205.323 0-123.711 100.54-224 224-224 123.711 0 224 100.545 224 224 0 91.814-55.379 170.725-134.4 205.313V601.6h201.472c61.925 0 112.128 49.716 112.128 112.003V825.6H108.801V713.598c0-61.855 50.444-111.998 112.126-111.998h201.472zM153.601 870.4h716.793V960H153.6v-89.6z",transform:"translate(12, 9) scale(0.02)"},text:{fontSize:12,fill:p.textFill}},ports:{...l}},!0),g(`✅ 已注册节点: ${p.type} (${p.label})`)}),J.registerNode("svg-condition-node",{inherit:"polygon",width:132,height:72,markup:[{tagName:"polygon",selector:"body"},{tagName:"path",selector:"icon"},{tagName:"text",selector:"label"}],attrs:{body:{strokeWidth:1,stroke:"#fdc059",fill:"#ffeed1",refPoints:"0,20 20,0 40,20 20,40"},icon:{fill:"#ffb02a",d:"M658.944 75.776c26.9312 0 48.64 23.296 48.64 52.0192v207.872c0 28.672-21.7088 51.9168-48.64 51.9168h-97.28v84.48h255.3856c59.1872 0 107.6736 50.2272 109.4144 113.4592v100.864h24.3712a47.104 47.104 0 0 1 34.4064 15.2064c9.1136 9.728 14.2336 22.9888 14.2336 36.7616v155.904c0 28.672-21.76 51.968-48.64 51.968h-145.92c-26.88 0-48.64-23.296-48.64-51.968V738.304c0-28.672 21.76-51.968 48.64-51.968h24.32v-97.4336a12.6976 12.6976 0 0 0-10.752-12.9024l-1.4336-0.1024h-255.3344v110.4384h24.32a47.104 47.104 0 0 1 34.4064 15.2064c9.1136 9.728 14.2336 22.9888 14.2336 36.7616v155.904c0 28.672-21.76 51.968-48.64 51.968h-145.92c-26.88 0-48.64-23.296-48.64-51.968V738.304c0-28.672 21.76-51.968 48.64-51.968h24.32V576H209.0496a12.4928 12.4928 0 0 0-12.032 11.4688l-0.1024 1.536v97.4336h24.32a47.104 47.104 0 0 1 34.4064 15.2064c9.1136 9.728 14.2336 22.9888 14.2336 36.7616v155.904c0 28.672-21.76 51.968-48.64 51.968H75.264c-26.88 0-48.64-23.296-48.64-51.968V738.304c0-28.672 21.76-51.968 48.64-51.968h24.32v-97.4336c0-63.232 47.0528-114.9952 106.1888-116.8384l3.2256-0.1024h255.3856L464.384 387.584l-97.28 0.0512c-26.8288 0-48.64-23.2448-48.64-51.968v-207.872c0-28.672 21.8112-51.9168 48.64-51.9168h291.84z",transform:"translate(54, 9) scale(0.02)"},text:{fontSize:12,fill:"#ffb02a",y:8}},ports:{...l,items:[{group:"top"},{group:"bottom"}]}},!0),g("🎉 所有 SVG 节点注册完成")}function o(r,p){a.value=r,g("✅ 画布初始化完成"),g("💡 提示: 悬停查看 hover 效果，点击切换 selected 状态"),setTimeout(()=>{var k,d,_,$,A,C;const m=p.addNode({shape:"svg-start-node",x:100,y:100,label:"开始节点"}),u=p.addNode({shape:"svg-approval-node",x:300,y:100,label:"审批节点"}),N=p.addNode({shape:"svg-condition-node",x:200,y:250,label:"条件分支"});p.addEdge({source:{cell:m,port:(k=m.getPortAt(1))==null?void 0:k.id},target:{cell:u,port:(d=u.getPortAt(3))==null?void 0:d.id},shape:"flow-edge",labels:["连接1"]}),p.addEdge({source:{cell:u,port:(_=u.getPortAt(2))==null?void 0:_.id},target:{cell:N,port:($=N.getPortAt(0))==null?void 0:$.id},shape:"flow-edge",labels:["连接2"]}),p.addEdge({source:{cell:m,port:(A=m.getPortAt(2))==null?void 0:A.id},target:{cell:N,port:(C=N.getPortAt(1))==null?void 0:C.id},shape:"flow-edge",labels:["连接3"]}),g("📦 已添加 3 个示例节点和 3 条连线"),g("🎨 试试悬停和点击节点/连线吧！")},100)}const t={default:"默认（锚点隐藏/恢复）","node-hover":"节点悬停（空心锚点显示）","port-hover":"锚点悬停（实心高亮）",connecting:"连线中（所有锚点可连）",selected:"节点选中（锚点显示）"},e=(r,p)=>{const m=t[p]??p;switch(g(`🔌 portStateRenderers → [${p}] ${m}`),p){case"default":return{fill:"#ffffff",stroke:"#5F95FF",size:8,strokeWidth:1.5};case"node-hover":return{fill:"#ffffff",stroke:"#71ea63",size:8,strokeWidth:1.5};case"port-hover":return{fill:"#168034",stroke:"#168034",size:8,strokeWidth:2};case"connecting":return{fill:"#ff03f2",stroke:"#8f1589",size:8,strokeWidth:2};case"selected":return{fill:"#ffffff",stroke:"#fa8c16",size:8,strokeWidth:2};default:return}};function i(r,p,m){g(`🎯 开始拖拽: ${p.label}`),m(r,{shape:p.type,label:p.label,width:p.width,height:p.height,data:{nodeInfo:{hint:p.hint,color:p.color}}})}return(r,p)=>(h(),b("div",Mg,[n("div",Wg,[n("div",{class:"demo-node-svg__log-header"},[p[0]||(p[0]=n("h4",null,"事件日志",-1)),n("button",{class:"demo-node-svg__clear-btn",onClick:x,title:"清除日志"}," 清除 ")]),n("div",Ig,[(h(!0),b(O,null,H(v.value,(m,u)=>(h(),b("div",{key:u,class:"demo-node-svg__log-item"},D(m),1))),128))])]),n("div",Pg,[f(F(V),{mode:"design","before-graph-init":s,"port-state-renderers":e,onReady:o},{palette:E(({onStartDrag:m})=>[n("div",Gg,[p[3]||(p[3]=n("div",{class:"custom-palette__header"},[n("h3",{class:"custom-palette__title"},"SVG 节点"),n("span",{class:"custom-palette__desc"},"三种状态切换")],-1)),n("div",Og,[p[2]||(p[2]=n("div",{class:"custom-palette__section-title"},"带图标的节点",-1)),(h(),b(O,null,H(c,u=>n("div",{key:u.type,class:"custom-palette__item",onMousedown:N=>i(N,u,m),style:rn({background:u.rectFill,borderColor:u.rectStroke})},[n("div",Bg,[n("img",{src:u.icon},null,8,Vg)]),n("div",Ug,[n("div",{class:"custom-palette__item-label",style:rn({color:u.textFill})},D(u.label),5)])],44,Hg)),64)),n("div",{key:"svg-condition-node",class:"custom-palette__item",onMousedown:u=>i(u,{type:"svg-condition-node",label:"条件分支",width:132,height:72},m),style:{background:"#ffeed1",borderColor:"#fdc059"}},[n("div",qg,[n("img",{src:F(Nn)},null,8,jg)]),p[1]||(p[1]=n("div",{class:"custom-palette__item-info"},[n("div",{class:"custom-palette__item-label",style:{color:"#ffb02a"}},"条件分支")],-1))],40,Zg)]),p[4]||(p[4]=n("div",{class:"custom-palette__tips"},[n("div",{class:"tips-title"},"💡 状态说明"),n("ul",{class:"tips-list",style:{"margin-bottom":"90px"}},[n("li",null,[n("strong",null,"锚点状态：")]),n("li",null,"· default: 锚点隐藏"),n("li",null,"· node-hover: 悬停节点，绿边"),n("li",null,"· port-hover: 悬停锚点，绿色实心"),n("li",null,"· connecting: 拖线中，粉色空心"),n("li",null,"· selected: 节点选中，橙色空心"),n("li",null,[n("strong",null,"有需要的话，你可以根据不同的节点类型，结合不同的状态类型，返回不同的锚点样式")])])],-1))])]),_:1})])]))}}),Xg=U(Yg,[["__scopeId","data-v-ebbf89db"]]),Jg=`<template>\r
  <div class="demo-node-svg">\r
    <!-- 事件日志面板 -->\r
    <div class="demo-node-svg__log">\r
      <div class="demo-node-svg__log-header">\r
        <h4>事件日志</h4>\r
        <button class="demo-node-svg__clear-btn" @click="clearLogs" title="清除日志">\r
          清除\r
        </button>\r
      </div>\r
      <div class="demo-node-svg__log-content">\r
        <div v-for="(log, index) in logs" :key="index" class="demo-node-svg__log-item">\r
          {{ log }}\r
        </div>\r
      </div>\r
    </div>\r
\r
    <!-- 画布容器 -->\r
    <div class="demo-node-svg__canvas">\r
      <FlowDesignerLayout\r
        mode="design"\r
        :before-graph-init="handleBeforeGraphInit"\r
        :port-state-renderers="handlePortStateRenderers"\r
        @ready="handleReady"\r
      >\r
        <!-- 自定义节点面板插槽 -->\r
        <template #palette="{ onStartDrag }">\r
          <div class="custom-palette">\r
            <div class="custom-palette__header">\r
              <h3 class="custom-palette__title">SVG 节点</h3>\r
              <span class="custom-palette__desc">三种状态切换</span>\r
            </div>\r
\r
            <div class="custom-palette__section">\r
              <div class="custom-palette__section-title">带图标的节点</div>\r
              <div\r
                v-for="nodeType in nodeTypesConfig"\r
                :key="nodeType.type"\r
                class="custom-palette__item"\r
                @mousedown="(e) => handleStartDrag(e, nodeType, onStartDrag)"\r
                :style="{ background: nodeType.rectFill, borderColor: nodeType.rectStroke}"\r
              >\r
                <div class="custom-palette__item-icon" >\r
                  <img :src="nodeType.icon" />\r
                </div>\r
                <div class="custom-palette__item-info">\r
                  <div class="custom-palette__item-label" :style="{ color: nodeType.textFill}">{{ nodeType.label }}</div>\r
                </div>\r
              </div>\r
\r
              <div\r
                  key="svg-condition-node"\r
                  class="custom-palette__item"\r
                  @mousedown="(e) => handleStartDrag(e, {\r
                    type:'svg-condition-node',\r
                    label:'条件分支',\r
                    width: 132,\r
                    height: 72,\r
                    }, onStartDrag)"\r
                  :style="{ background: '#ffeed1', borderColor: '#fdc059'}"\r
              >\r
                <div class="custom-palette__item-icon" >\r
                  <img :src="conditionSvg" />\r
                </div>\r
                <div class="custom-palette__item-info">\r
                  <div class="custom-palette__item-label" :style="{ color: '#ffb02a'}">条件分支</div>\r
                </div>\r
              </div>\r
\r
            </div>\r
\r
            <div class="custom-palette__tips">\r
              <div class="tips-title">💡 状态说明</div>\r
              <ul class="tips-list" style="margin-bottom: 90px">\r
                <li><strong>锚点状态：</strong></li>\r
                <li>· default: 锚点隐藏</li>\r
                <li>· node-hover: 悬停节点，绿边</li>\r
                <li>· port-hover: 悬停锚点，绿色实心</li>\r
                <li>· connecting: 拖线中，粉色空心</li>\r
                <li>· selected: 节点选中，橙色空心</li>\r
\r
                <li><strong>有需要的话，你可以根据不同的节点类型，结合不同的状态类型，返回不同的锚点样式</strong></li>\r
              </ul>\r
            </div>\r
          </div>\r
        </template>\r
      </FlowDesignerLayout>\r
    </div>\r
  </div>\r
</template>\r
\r
<script setup lang="ts">\r
import {computed, ref} from 'vue'\r
import { FlowDesignerLayout }  from '@quick-code/x6-flow-designer'\r
import type { FlowDesigner } from '@quick-code/x6-flow-designer'\r
import type { PortStateRenderers, EdgeStateRendererMap } from '@/components/FlowDesigner/types/render'\r
import { Graph, Node, Edge } from '@antv/x6'\r
\r
\r
import startSvg from "./icons/start.svg";\r
import startHover from "./icons/start-hover.svg";\r
\r
import approvalSvg from "./icons/approval.svg";\r
import approvalHoverSvg from "./icons/approval-hover.svg";\r
\r
import conditionSvg from "./icons/condition.svg";\r
import conditionHoverSvg from "./icons/condition-hover.svg";\r
\r
const logs = ref<string[]>([])\r
// FlowDesigner 实例引用\r
const flowDesigner = ref<FlowDesigner | null>(null)\r
\r
// 节点类型配置（包含颜色和 iconPath）\r
interface NodeTypeConfig {\r
  type: string\r
  label: string\r
  hint: string\r
  color: string\r
  hoverColor: string\r
  iconPath: string\r
  width: number\r
  height: number\r
}\r
\r
const nodeTypesConfig: any[] = [\r
  {\r
    type: 'svg-start-node',\r
    label: '开始节点',\r
    classNamePerfix: 'x6',\r
    width: 120,\r
    height: 38,\r
    rectStroke: '#95d375',\r
    rectStrokeWidth: 1,\r
    rectFill: '#edf8e7',\r
    icon: startSvg,\r
    iconHover: startHover,\r
    textFill: '#81cb5c'\r
  },\r
  {\r
    type: 'svg-approval-node',\r
    label: '审批节点',\r
    classNamePerfix: 'x6',\r
    width: 120,\r
    height: 38,\r
    rectStroke: '#83b3f7',\r
    rectStrokeWidth: 1,\r
    rectFill: '#e6eeff',\r
    icon: approvalSvg,\r
    iconHover: approvalHoverSvg,\r
    textFill: '#5d9df7'\r
  },\r
]\r
\r
const Ports = {\r
  groups: {\r
    top: {\r
      position: 'top',\r
      attrs: {\r
        circle: {\r
          r: 4,\r
          magnet: true,\r
          stroke: '#5F95FF',\r
          strokeWidth: 1,\r
          fill: '#fff',\r
          style: {\r
            visibility: 'hidden',\r
          },\r
        },\r
        label: {\r
          position: 'top',\r
        },\r
        text: {\r
          text: '',\r
          fill: '#ff5800',\r
        },\r
      },\r
    },\r
    right: {\r
      position: 'right',\r
      attrs: {\r
        circle: {\r
          r: 4,\r
          magnet: true,\r
          stroke: '#5F95FF',\r
          strokeWidth: 1,\r
          fill: '#fff',\r
          style: {\r
            visibility: 'hidden',\r
          },\r
        },\r
        label: {\r
          position: 'right',\r
        },\r
        text: {\r
          text: '',\r
          fill: '#ff5800',\r
        },\r
      },\r
    },\r
    bottom: {\r
      position: 'bottom',\r
      attrs: {\r
        circle: {\r
          r: 4,\r
          magnet: true,\r
          stroke: '#5F95FF',\r
          strokeWidth: 1,\r
          fill: '#fff',\r
          style: {\r
            visibility: 'hidden',\r
          },\r
        },\r
        label: {\r
          position: 'bottom',\r
        },\r
        text: {\r
          text: '',\r
          fill: '#ff5800',\r
        },\r
      },\r
    },\r
    left: {\r
      position: 'left',\r
      attrs: {\r
        circle: {\r
          r: 4,\r
          magnet: true,\r
          stroke: '#5F95FF',\r
          strokeWidth: 1,\r
          fill: '#fff',\r
          style: {\r
            visibility: 'hidden',\r
          },\r
        },\r
        label: {\r
          position: 'left',\r
        },\r
        text: {\r
          text: '',\r
          fill: '#ff5800',\r
        },\r
      },\r
    },\r
  },\r
  items: [\r
    {\r
      group: 'top',\r
      label: {\r
        position : 'top'\r
      }\r
    },\r
    {\r
      group: 'right',\r
      label: {\r
        position : 'right'\r
      }\r
    },\r
    {\r
      group: 'bottom',\r
      label: {\r
        position : 'bottom'\r
      }\r
    },\r
    {\r
      group: 'left',\r
      label: {\r
        position : 'left'\r
      }\r
    },\r
  ],\r
}\r
\r
\r
// 手动跟踪节点的选中状态（因为 X6 的 selection 可能有默认行为）\r
const selectedNodesMap = new Map<string, boolean>()\r
\r
function addLog(message: string) {\r
  const timestamp = new Date().toLocaleTimeString()\r
  logs.value.push(\`[\${timestamp}] \${message}\`)\r
}\r
\r
function clearLogs() {\r
  logs.value = []\r
}\r
\r
\r
\r
/**\r
 * Graph 初始化前钩子：注册带 SVG icon 的自定义节点\r
 */\r
function handleBeforeGraphInit(options: FlowDesignerOptions) {\r
  addLog('🔧 beforeGraphInit: 开始注册 SVG 节点')\r
\r
  // 遍历配置，注册所有节点\r
  nodeTypesConfig.forEach((config) => {\r
    Graph.registerNode(\r
        config.type,\r
        {\r
          inherit: 'rect',\r
          width: config.width,\r
          height: config.height,\r
          markup: [\r
            {\r
              tagName: 'rect', // 标签名称\r
              selector: 'body', // 选择器\r
            },\r
            {\r
              tagName: 'path', // 标签名称\r
              selector: 'icon', // 选择器\r
            },\r
            {\r
              tagName: 'text',\r
              selector: 'label',\r
            },\r
          ],\r
          attrs: {\r
            body: {\r
              stroke: config.rectStroke,\r
              strokeWidth: config.rectStrokeWidth,\r
              fill: config.rectFill,\r
              rx: 10,\r
              ry: 10,\r
            },\r
            icon: {\r
              fill: config.type == 'svg-start-node'?'#48c02a':'#1d78f4',\r
              d:config.type == 'svg-start-node'?\r
                  'M510.9 60.7c-245.6 0-446.7 199.8-446.7 446.7C64.2 753 263.9 954 510.8 954s446.6-199.7 446.6-446.6c0.1-245.6-199.6-446.7-446.5-446.7zM692 525.9l-272.1 157c-10.7 6.2-24-1.5-24-13.9V354.9c0-12.3 13.3-20 24-13.9L692 498.1c10.6 6.2 10.6 21.6 0 27.8z':'M422.399 601.6V493.323c-79.111-34.622-134.4-113.655-134.4-205.323 0-123.711 100.54-224 224-224 123.711 0 224 100.545 224 224 0 91.814-55.379 170.725-134.4 205.313V601.6h201.472c61.925 0 112.128 49.716 112.128 112.003V825.6H108.801V713.598c0-61.855 50.444-111.998 112.126-111.998h201.472zM153.601 870.4h716.793V960H153.6v-89.6z',\r
              transform: 'translate(12, 9) scale(0.02)'\r
            },\r
            text: {\r
              fontSize: 12,\r
              fill: config.textFill,\r
            },\r
          },\r
          ports: { ...Ports },\r
        },\r
        true,\r
    );\r
\r
    addLog(\`✅ 已注册节点: \${config.type} (\${config.label})\`)\r
  })  // ✅ 修复：forEach 的回调函数结束\r
\r
  Graph.registerNode(\r
      //'custom-polygon',\r
      'svg-condition-node',\r
      {\r
        inherit: 'polygon',\r
        width: 132,\r
        height: 72,\r
        markup: [\r
          {\r
            tagName: 'polygon', // 标签名称\r
            selector: 'body', // 选择器\r
          },\r
          {\r
            tagName: 'path',\r
            selector: 'icon',\r
          },\r
          {\r
            tagName: 'text',\r
            selector: 'label',\r
          },\r
        ],\r
        attrs: {\r
          body: {\r
            strokeWidth: 1,\r
            stroke: '#fdc059',\r
            fill: '#ffeed1',\r
            refPoints: '0,20 20,0 40,20 20,40',\r
          },\r
          icon: {\r
            fill: '#ffb02a',\r
            d: 'M658.944 75.776c26.9312 0 48.64 23.296 48.64 52.0192v207.872c0 28.672-21.7088 51.9168-48.64 51.9168h-97.28v84.48h255.3856c59.1872 0 107.6736 50.2272 109.4144 113.4592v100.864h24.3712a47.104 47.104 0 0 1 34.4064 15.2064c9.1136 9.728 14.2336 22.9888 14.2336 36.7616v155.904c0 28.672-21.76 51.968-48.64 51.968h-145.92c-26.88 0-48.64-23.296-48.64-51.968V738.304c0-28.672 21.76-51.968 48.64-51.968h24.32v-97.4336a12.6976 12.6976 0 0 0-10.752-12.9024l-1.4336-0.1024h-255.3344v110.4384h24.32a47.104 47.104 0 0 1 34.4064 15.2064c9.1136 9.728 14.2336 22.9888 14.2336 36.7616v155.904c0 28.672-21.76 51.968-48.64 51.968h-145.92c-26.88 0-48.64-23.296-48.64-51.968V738.304c0-28.672 21.76-51.968 48.64-51.968h24.32V576H209.0496a12.4928 12.4928 0 0 0-12.032 11.4688l-0.1024 1.536v97.4336h24.32a47.104 47.104 0 0 1 34.4064 15.2064c9.1136 9.728 14.2336 22.9888 14.2336 36.7616v155.904c0 28.672-21.76 51.968-48.64 51.968H75.264c-26.88 0-48.64-23.296-48.64-51.968V738.304c0-28.672 21.76-51.968 48.64-51.968h24.32v-97.4336c0-63.232 47.0528-114.9952 106.1888-116.8384l3.2256-0.1024h255.3856L464.384 387.584l-97.28 0.0512c-26.8288 0-48.64-23.2448-48.64-51.968v-207.872c0-28.672 21.8112-51.9168 48.64-51.9168h291.84z',\r
            transform: 'translate(54, 9) scale(0.02)'\r
          },\r
          text: {\r
            fontSize: 12,\r
            fill: '#ffb02a',\r
            y:8\r
          },\r
        },\r
        ports: {\r
          ...Ports,\r
          items: [\r
            {\r
              group: 'top',\r
            },\r
            {\r
              group: 'bottom',\r
            },\r
          ],\r
        },\r
      },\r
      true,\r
  );\r
\r
  addLog('🎉 所有 SVG 节点注册完成')\r
}\r
\r
function handleReady(designer: FlowDesigner, graph: Graph) {\r
  // 保存 designer 实例\r
  flowDesigner.value = designer\r
\r
  addLog('✅ 画布初始化完成')\r
  addLog('💡 提示: 悬停查看 hover 效果，点击切换 selected 状态')\r
\r
\r
  // ─── 添加示例节点 ───────────────────────────────────────────────────\r
  setTimeout(() => {\r
    const node1 = graph.addNode({\r
      shape: 'svg-start-node',\r
      x: 100,\r
      y: 100,\r
      label: '开始节点',\r
    })\r
\r
    const node2 = graph.addNode({\r
      shape: 'svg-approval-node',\r
      x: 300,\r
      y: 100,\r
      label: '审批节点',\r
    })\r
\r
    const node3 = graph.addNode({\r
      shape: 'svg-condition-node',\r
      x: 200,\r
      y: 250,\r
      label: '条件分支',\r
    })\r
\r
    // ─── 添加连线示例 ───────────────────────────────────────────────────\r
    // 连接1：node1 的右侧锚点 → node2 的左侧锚点\r
    graph.addEdge({\r
      source: { cell: node1, port: node1.getPortAt(1)?.id },  // right port (索引 1)\r
      target: { cell: node2, port: node2.getPortAt(3)?.id },  // left port (索引 3)\r
      shape: 'flow-edge',\r
      labels: ['连接1'],\r
    })\r
\r
    // 连接2：node2 的下侧锚点 → node3 的上侧锚点\r
    graph.addEdge({\r
      source: { cell: node2, port: node2.getPortAt(2)?.id },  // bottom port (索引 2)\r
      target: { cell: node3, port: node3.getPortAt(0)?.id },  // top port (索引 0)\r
      shape: 'flow-edge',\r
      labels: ['连接2'],\r
    })\r
\r
    // 连接3：node1 的下侧锚点 → node3 的左侧锚点\r
    graph.addEdge({\r
      source: { cell: node1, port: node1.getPortAt(2)?.id },  // bottom port (索引 2)\r
      target: { cell: node3, port: node3.getPortAt(1)?.id },  // right port (索引 1)\r
      shape: 'flow-edge',\r
      labels: ['连接3'],\r
    })\r
\r
    addLog('📦 已添加 3 个示例节点和 3 条连线')\r
    addLog('🎨 试试悬停和点击节点/连线吧！')\r
  }, 100)\r
}\r
\r
// ─── portStateRenderers 钩子 ─────────────────────────────────────────────────\r
\r
/** portState 对应的中文描述 */\r
const portStateLabels: Record<string, string> = {\r
  'default':     '默认（锚点隐藏/恢复）',\r
  'node-hover':  '节点悬停（空心锚点显示）',\r
  'port-hover':  '锚点悬停（实心高亮）',\r
  'connecting':  '连线中（所有锚点可连）',\r
  'selected':    '节点选中（锚点显示）',\r
}\r
\r
const handlePortStateRenderers: PortStateRenderers = (node, portState) => {\r
  const label = portStateLabels[portState] ?? portState\r
  addLog(\`🔌 portStateRenderers → [\${portState}] \${label}\`)\r
\r
  switch (portState) {\r
    // default：恢复框架默认样式，返回 undefined 即可\r
    case 'default':\r
      return { fill: '#ffffff', stroke: '#5F95FF', size: 8, strokeWidth: 1.5 }\r
\r
    // node-hover：节点悬停，锚点空心显示，蓝边白底\r
    case 'node-hover':\r
      return { fill: '#ffffff', stroke: '#71ea63', size: 8, strokeWidth: 1.5 }\r
\r
    // port-hover：鼠标移到锚点上，蓝色实心放大\r
    case 'port-hover':\r
      return { fill: '#168034', stroke: '#168034', size: 8, strokeWidth: 2 }\r
\r
    // connecting：拖出连线时，绿色空心提示所有节点可连\r
    case 'connecting':\r
      return { fill: '#ff03f2', stroke: '#8f1589', size: 8, strokeWidth: 2 }\r
\r
    // selected：节点选中，橙色空心锚点\r
    case 'selected':\r
      return { fill: '#ffffff', stroke: '#fa8c16', size: 8, strokeWidth: 2 }\r
\r
    default:\r
      return undefined\r
  }\r
}\r
\r
function handleStartDrag(e: MouseEvent, nodeType: NodeTypeConfig, onStartDrag: any) {\r
  addLog(\`🎯 开始拖拽: \${nodeType.label}\`)\r
\r
  onStartDrag(e, {\r
    shape: nodeType.type,\r
    label: nodeType.label,\r
    width: nodeType.width,\r
    height: nodeType.height,\r
    data: {\r
      nodeInfo: {\r
        hint: nodeType.hint,\r
        color: nodeType.color,\r
      }\r
    }\r
  })\r
}\r
\r
\r
<\/script>\r
\r
\r
<style scoped>\r
.demo-node-svg {\r
  display: flex;\r
  height: 100%;\r
  min-height: 600px;\r
  gap: 16px;\r
}\r
\r
.demo-node-svg__log {\r
  width: 280px;\r
  border: 1px solid #e8e8e8;\r
  border-radius: 8px;\r
  padding: 16px;\r
  background: #fafafa;\r
  overflow: hidden;\r
  display: flex;\r
  flex-direction: column;\r
}\r
\r
.demo-node-svg__log-header {\r
  display: flex;\r
  justify-content: space-between;\r
  align-items: center;\r
  margin-bottom: 12px;\r
}\r
\r
.demo-node-svg__log h4 {\r
  margin: 0;\r
  font-size: 14px;\r
  color: #1a1a2e;\r
  font-weight: 600;\r
}\r
\r
.demo-node-svg__clear-btn {\r
  padding: 2px 8px;\r
  font-size: 12px;\r
  color: #666;\r
  background: #fff;\r
  border: 1px solid #d9d9d9;\r
  border-radius: 4px;\r
  cursor: pointer;\r
  transition: all 0.2s;\r
  user-select: none;\r
}\r
\r
.demo-node-svg__clear-btn:hover {\r
  color: #1890ff;\r
  border-color: #1890ff;\r
}\r
\r
.demo-node-svg__log-content {\r
  flex: 1;\r
  overflow-y: auto;\r
  font-size: 12px;\r
  line-height: 1.8;\r
}\r
\r
.demo-node-svg__log-item {\r
  padding: 4px 0;\r
  color: #555;\r
  font-family: 'Monaco', 'Menlo', 'Consolas', monospace;\r
  border-bottom: 1px solid #f0f0f0;\r
}\r
\r
.demo-node-svg__log-item:last-child {\r
  border-bottom: none;\r
}\r
\r
.demo-node-svg__canvas {\r
  flex: 1;\r
  border: 1px solid #e8e8e8;\r
  border-radius: 8px;\r
  overflow: hidden;\r
  background: #fff;\r
}\r
\r
/* ==================== 自定义节点面板样式 ==================== */\r
.custom-palette {\r
  display: flex;\r
  flex-direction: column;\r
  height: 100%;\r
  background: linear-gradient(to bottom, #f9fafb, #ffffff);\r
  border-right: 1px solid #e8e8e8;\r
  width: 200px;\r
}\r
\r
.custom-palette__header {\r
  padding: 16px;\r
  border-bottom: 2px solid #e8e8e8;\r
  background: #fff;\r
}\r
\r
.custom-palette__title {\r
  margin: 0 0 4px 0;\r
  font-size: 16px;\r
  font-weight: 600;\r
  color: #1a1a2e;\r
}\r
\r
.custom-palette__desc {\r
  font-size: 12px;\r
  color: #999;\r
}\r
\r
.custom-palette__section {\r
  padding: 12px;\r
}\r
\r
.custom-palette__section-title {\r
  font-size: 11px;\r
  font-weight: 600;\r
  color: #999;\r
  text-transform: uppercase;\r
  letter-spacing: 0.06em;\r
  margin-bottom: 8px;\r
  padding: 0 4px;\r
}\r
\r
.custom-palette__item {\r
  display: flex;\r
  align-items: center;\r
  gap: 12px;\r
  padding: 10px;\r
  margin-bottom: 8px;\r
  background: #fff;\r
  border: 1px solid #e8e8e8;\r
  border-radius: 12px;\r
  cursor: move;\r
  transition: all 0.2s;\r
  user-select: none;\r
  width: 160px;\r
  height: 50px;\r
}\r
\r
.custom-palette__item:hover {\r
  border-color: #1677ff;\r
  box-shadow: 0 2px 8px rgba(22, 119, 255, 0.15);\r
  transform: translateY(-1px);\r
}\r
\r
.custom-palette__item:active {\r
  transform: translateY(0);\r
  box-shadow: 0 1px 4px rgba(22, 119, 255, 0.2);\r
}\r
\r
.custom-palette__item-icon {\r
  width: 36px;\r
  height: 36px;\r
  display: flex;\r
  align-items: center;\r
  justify-content: center;\r
  border-radius: 6px;\r
  flex-shrink: 0;\r
}\r
\r
.custom-palette__item-info {\r
  flex: 1;\r
  min-width: 0;\r
}\r
\r
.custom-palette__item-label {\r
  font-size: 13px;\r
  font-weight: 500;\r
  color: #333;\r
  margin-bottom: 2px;\r
}\r
\r
.custom-palette__item-hint {\r
  font-size: 11px;\r
  color: #999;\r
  white-space: nowrap;\r
  overflow: hidden;\r
  text-overflow: ellipsis;\r
}\r
\r
/* ==================== 交互说明 ==================== */\r
.custom-palette__tips {\r
  margin-top: auto;\r
  padding: 12px;\r
  background: #fff9e6;\r
  border-top: 1px solid #ffe58f;\r
}\r
\r
.tips-title {\r
  font-size: 12px;\r
  font-weight: 600;\r
  color: #d48806;\r
  margin-bottom: 8px;\r
}\r
\r
.tips-list {\r
  margin: 0;\r
  padding-left: 16px;\r
  font-size: 11px;\r
  line-height: 1.8;\r
  color: #8c8c8c;\r
}\r
\r
.tips-list li {\r
  margin-bottom: 4px;\r
}\r
\r
.tips-list strong {\r
  color: #595959;\r
}\r
\r
</style>\r
\r
\r
<!--如果需要简单控制节点样式，需要将此节点样式暴露到全局,适当增加前缀以防止污染-->\r
<style>\r
\r
\r
</style>\r
`,Kg={class:"code-previewer__right"},Qg={class:"code-previewer__preview-toolbar"},nf=["title"],ef={class:"code-previewer__preview-content"},rf={key:1,class:"code-previewer__preview-empty"},tf={class:"code-previewer__toolbar"},of={class:"code-previewer__tabs"},sf=["onClick"],lf={class:"code-previewer__actions"},af={class:"code-previewer__code"},df=G({__name:"CodePreviewer",props:{demoName:{},code:{},codeSnippets:{},demoComponent:{},defaultActiveTab:{default:0},defaultLeftWidth:{default:"20%"}},setup(T){const v={demoSimple:{component:be,code:ve},"demo-ready":{component:Se,code:Ne},"demo-mode-change":{component:Re,code:ze},"demo-selection-change":{component:Ge,code:Oe},"demo-node-lifecycle":{component:Ke,code:Qe},"demo-edge-lifecycle":{component:cr,code:pr},"demo-data-loaded":{component:br,code:vr},"demo-slot-toolbar":{component:$r,code:[{label:"index.vue",language:"vue",code:Er},{label:"Toolbar.vue",language:"vue",code:Fr}]},"demo-slot-pattle":{component:Hr,code:[{label:"index.vue",language:"vue",code:Br}]},"demo-slot-properties":{component:lo,code:io},"demo-slot-searchbox":{component:To,code:Ro},"demo-slot-canvasMenu":{component:ns,code:es},"demo-slot-nodeMenu":{component:Es,code:Fs},"demo-slot-edgeMenu":{component:ol,code:sl},"demo-slot-nodeTooltip":{component:fl,code:ml},"demo-slot-edgeTooltip":{component:kl,code:wl},"demo-slot-edgeLabel":{component:Ll,code:Tl},"demo-slot-node":{component:Jl,code:Kl},"demo-permission-design":{component:ra,code:ta},"demo-permission-readonly":{component:ia,code:aa},"demo-permission-preview":{component:ga,code:fa},"demo-permission-getPermission":{component:hd,code:bd},"demo-permission-all":{component:Jn,code:vd},"demo-node-svg":{component:Rd,code:zd},"demo-node-html":{component:Zd,code:qd},"demo-node-vue":{component:xc,code:[{label:"index.vue",language:"vue",code:yc},{label:"StartNode.vue",language:"vue",code:kc},{label:"ApproverNode.vue",language:"vue",code:wc}]},"demo-node-designer":{component:qc,code:jc},"demo-edge-svg":{component:dp,code:cp},"demo-shortcut-keymap":{component:pp,code:gp},"demo-node-state":{component:fp,code:mp},"demo-edge-state":{component:up,code:hp},"demo-performance":{component:lg,code:ig},"demo-state-renderers":{component:dg,code:cg},"demo-state-svgNode":{component:Ng,code:Cg},"demo-tooltip-renderer":{component:zg,code:Ag},"demo-port-renderer":{component:Xg,code:Jg}},a=T,c=S(a.defaultActiveTab),l=S(!0),g=S(!0),x=S(!1),s=S("复制"),o=S(),t=S(),e=S(a.defaultLeftWidth),i=S(!1),r=xn(()=>{if(a.demoName&&v[a.demoName]){const C=v[a.demoName].code;return Array.isArray(C)?C:[{label:"Vue",language:"vue",code:C}]}return a.code?Array.isArray(a.code)?a.code:[{label:"Code",language:"vue",code:a.code}]:a.codeSnippets||[]}),p=xn(()=>a.demoName&&v[a.demoName]?v[a.demoName].component:a.demoComponent),m=xn(()=>{const C=r.value[c.value];if(!C)return"";const L=typeof C.code=="string"?C.code:String(C.code||"");return u(L)});function u(C){if(typeof C!="string")return console.error("addLineNumbers: code must be a string, received:",typeof C,C),String(C||"");const L=C.split(`
`),M=L.length,on=String(M).length;return L.map((cn,Cn)=>`${String(Cn+1).padStart(on," ")}  ${cn}`).join(`
`)}async function N(){const C=r.value[c.value];if(C)try{await navigator.clipboard.writeText(C.code),s.value="已复制",setTimeout(()=>{s.value="复制"},2e3)}catch(L){console.error("复制失败:",L),s.value="复制失败",setTimeout(()=>{s.value="复制"},2e3)}}function k(){g.value=!g.value}function d(){x.value=!x.value}function _(C){i.value=!0,C.preventDefault()}function $(C){if(!i.value)return;const L=t.value;if(!L)return;const M=L.getBoundingClientRect(),cn=(M.right-C.clientX)/M.width*100;cn>=20&&cn<=80&&(e.value=`${cn}%`)}function A(){i.value=!1}return $n(()=>{document.addEventListener("mousemove",$),document.addEventListener("mouseup",A)}),Un(()=>{document.removeEventListener("mousemove",$),document.removeEventListener("mouseup",A)}),(C,L)=>(h(),b("div",{class:an(["code-previewer",{"code-previewer--fullscreen":x.value}]),ref_key:"previewerRef",ref:t},[n("div",Kg,[n("div",Qg,[L[0]||(L[0]=n("span",{class:"code-previewer__preview-title"},"效果预览",-1)),n("button",{class:"code-previewer__btn",title:x.value?"退出全屏":"全屏预览",onClick:d},D(x.value?"退出全屏":"全屏"),9,nf)]),n("div",ef,[p.value?(h(),Dn(Xn(p.value),{key:0})):(h(),b("div",rf," 暂无预览内容 "))]),g.value?z("",!0):(h(),b("button",{key:0,class:"code-previewer__expand-btn",title:"展开代码",onClick:k},[...L[1]||(L[1]=[n("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"currentColor"},[n("path",{d:"M10 2L4 8l6 6V2z"})],-1)])]))]),n("div",{class:"code-previewer__divider-wrapper",style:rn({width:g.value?"4px":"0"})},[nn(n("div",{class:"code-previewer__divider",onMousedown:_},null,544),[[Vn,g.value]])],4),nn(n("div",{class:"code-previewer__left",style:rn({width:g.value?e.value:"0"})},[n("div",tf,[n("div",of,[(h(!0),b(O,null,H(r.value,(M,on)=>(h(),b("div",{key:on,class:an(["code-previewer__tab",{"code-previewer__tab--active":c.value===on}]),onClick:cn=>c.value=on},D(M.label),11,sf))),128))]),n("div",lf,[n("button",{class:"code-previewer__btn",title:"收起代码",onClick:k}," 收起 "),n("button",{class:"code-previewer__btn",title:"复制代码",onClick:N},D(s.value),1)])]),n("div",{class:an(["code-previewer__code-wrapper",{"code-previewer__code-wrapper--collapsed":!l.value}])},[n("pre",af,[n("code",{class:"code-previewer__code-content",ref_key:"codeRef",ref:o},D(m.value),513)])],2)],4),[[Vn,g.value]])],2))}}),uf=U(df,[["__scopeId","data-v-11637268"]]);export{uf as C};
//# sourceMappingURL=CodePreviewer-CdyH-HNW.js.map
