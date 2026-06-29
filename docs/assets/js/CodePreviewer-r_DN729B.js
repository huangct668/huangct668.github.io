var Kn=Object.defineProperty,Qn=Object.defineProperties;var ne=Object.getOwnPropertyDescriptors;var Zn=Object.getOwnPropertySymbols;var ee=Object.prototype.hasOwnProperty,re=Object.prototype.propertyIsEnumerable;var jn=(C,m,a)=>m in C?Kn(C,m,{enumerable:!0,configurable:!0,writable:!0,value:a}):C[m]=a,rn=(C,m)=>{for(var a in m||(m={}))ee.call(m,a)&&jn(C,a,m[a]);if(Zn)for(var a of Zn(m))re.call(m,a)&&jn(C,a,m[a]);return C},pn=(C,m)=>Qn(C,ne(m));var Gn=(C,m,a)=>new Promise((d,s)=>{var p=r=>{try{l(a.next(r))}catch(o){s(o)}},v=r=>{try{l(a.throw(r))}catch(o){s(o)}},l=r=>r.done?d(r.value):Promise.resolve(r.value).then(p,v);l((a=a.apply(C,m)).next())});import{d as P,V as u,a2 as Fn,W as f,_ as n,F as B,a4 as W,$ as D,k as c,f as w,a0 as sn,q as nn,a9 as fn,G as I,e as zn,U as un,a1 as N,u as R,a5 as an,aa as Ln,c as Nn,w as oe,n as te,A as Cn,a8 as Bn,a3 as E,r as wn,o as $n,b as On,j as Xn,ab as Yn,a7 as se,z as qn}from"./vendor-vue-jNIXm5rS.js";import{F as U,P as Mn,N as An,T as In,n as hn,d as le}from"./FlowDesignerTest-ApZN45Qd.js";import{_ as O}from"./index-Ns59gi1n.js";import{Q as ie,R as ae,V as de,W as ce,Z as pe,X as ge,Y as me,_ as ue,$ as fe,a0 as he,a1 as _e,a2 as ve,a3 as be,a4 as xe,a5 as ye,a6 as we,a7 as ke,a8 as De,a9 as ln}from"./vendor-antd-BTexbT_2.js";import{G as K,H as Ce,r as Wn}from"./vendor-x6-DeEwnSOW.js";const Se=P({__name:"demo1",setup(C){function m(a){const d=a.getGraph(),s=d.addNode({id:"node1",shape:"rect",x:100,y:100,width:120,height:60,label:"节点 1",attrs:{body:{fill:"#5F95FF",stroke:"#2563EB",strokeWidth:2},label:{fill:"#ffffff",fontSize:14,fontWeight:"bold"}}}),p=d.addNode({id:"node2",shape:"circle",x:300,y:100,width:80,height:80,label:"节点 2",attrs:{body:{fill:"#10B981",stroke:"#059669",strokeWidth:2},label:{fill:"#ffffff",fontSize:14,fontWeight:"bold"}}}),v=d.addNode({id:"node3",shape:"ellipse",x:500,y:100,width:100,height:60,label:"节点 3",attrs:{body:{fill:"#F59E0B",stroke:"#D97706",strokeWidth:2},label:{fill:"#ffffff",fontSize:14,fontWeight:"bold"}}}),l=d.addNode({id:"node4",shape:"polygon",x:300,y:250,width:100,height:100,label:"节点 4",attrs:{body:{fill:"#EF4444",stroke:"#DC2626",strokeWidth:2,refPoints:"0,10 10,0 20,10 10,20"},label:{fill:"#ffffff",fontSize:14,fontWeight:"bold"}}});d.addEdge({id:"edge1",shape:"flow-edge",source:s,target:p,labels:["连线 1"]}),d.addEdge({id:"edge2",shape:"flow-edge",source:p,target:v,labels:["连线 2"]}),d.addEdge({id:"edge3",shape:"flow-edge",source:p,target:l,labels:["连线 3"]}),d.addEdge({id:"edge4",shape:"flow-edge",source:l,target:v,labels:["连线 4"]}),d.centerContent(),console.log("[Demo1] Graph 实例已获取，已添加 4 个节点和 4 条连线")}return(a,d)=>(u(),Fn(U,{onReady:m}))}}),Ne=`<template>\r
  <FlowDesignerLayout @ready="handleReady" />\r
</template>\r
\r
<script setup lang="ts">\r
import { ref } from 'vue'\r
import FlowDesignerLayout from '../../../../components/FlowDesigner/FlowDesignerLayout.vue'\r
import type { FlowDesigner } from '../../../../components/FlowDesigner/core'\r
\r
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
`,Fe={class:"demo-ready"},$e={class:"demo-ready__log"},Ee={class:"demo-ready__log-content"},Te={class:"demo-ready__canvas"},Le=P({__name:"demo-ready",setup(C){const m=w([]);function a(p){const v=new Date().toLocaleTimeString();m.value.push(`[${v}] ${p}`)}function d(){m.value=[]}function s(p,v){a("✅ ready 事件触发"),a(`📦 designer 实例ID: ${p.id}`),a(`📊 graph 节点数: ${v.getNodes().length}`),a(`🔗 graph 连线数: ${v.getEdges().length}`);const l=v.addNode({shape:"rect",x:100,y:100,width:100,height:60,label:"节点1",attrs:{body:{fill:"#5F95FF",stroke:"#2563EB",strokeWidth:2},label:{fill:"#ffffff",fontSize:14,fontWeight:"bold"}}}),r=v.addNode({shape:"rect",x:300,y:100,width:100,height:60,label:"节点2",attrs:{body:{fill:"#10B981",stroke:"#059669",strokeWidth:2},label:{fill:"#ffffff",fontSize:14,fontWeight:"bold"}}});v.addEdge({shape:"flow-edge",source:l,target:r,labels:["连接"]}),a("✨ 已添加 2 个节点和 1 条连线"),v.centerContent(),a("🎯 已居中显示内容"),a(`🔧 designer.getMode(): ${p.getMode()}`),a(`🔐 designer.can('canDrag'): ${p.can("canDrag")}`)}return(p,v)=>(u(),f("div",Fe,[n("div",$e,[n("div",{class:"demo-ready__log-header"},[v[0]||(v[0]=n("h4",null,"事件日志",-1)),n("button",{class:"demo-ready__clear-btn",onClick:d,title:"清除日志"}," 清除 ")]),n("div",Ee,[(u(!0),f(B,null,W(m.value,(l,r)=>(u(),f("div",{key:r,class:"demo-ready__log-item"},D(l),1))),128))])]),n("div",Te,[c(U,{onReady:s})])]))}}),Re=O(Le,[["__scopeId","data-v-54861139"]]),ze=`<template>\r
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
import FlowDesignerLayout from '@/components/FlowDesigner/FlowDesignerLayout.vue'\r
import type { FlowDesigner } from '@/components/FlowDesigner/core'\r
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
`,Me={class:"demo-mode-change"},Ae={class:"demo-mode-change__log"},Ie={class:"demo-mode-change__log-content"},Pe={class:"demo-mode-change__canvas"},Ge={class:"demo-mode-change__controls"},Be=["onClick"],We=P({__name:"demo-mode-change",setup(C){const m=w([]),a=w("design"),d=w(),s=[{value:"design",label:"✏️ 设计模式"},{value:"readonly",label:"👁 只读模式"},{value:"preview",label:"📺 预览模式"}];function p(e){const i=new Date().toLocaleTimeString();m.value.push(`[${i}] ${e}`)}function v(){m.value=[]}function l(e,i){d.value=e,p("✅ 画布初始化完成"),p(`🔧 当前模式: ${e.getMode()}`),i.addNode({shape:"rect",x:150,y:100,width:100,height:60,label:"节点1",attrs:{body:{fill:"#5F95FF",stroke:"#2563EB"},label:{fill:"#fff"}}}),i.centerContent()}function r(e){if(p("🔄 @mode-change 事件触发"),p(`📌 新模式: ${e}`),d.value){const i=d.value.getCapabilities();p(`🔐 canDrag: ${i.canDrag}`),p(`🔐 canDelete: ${i.canDelete}`),p(`🔐 canConnect: ${i.canConnect}`)}}function o(e){p(`👆 切换到 ${e} 模式`),a.value=e}return(e,i)=>(u(),f("div",Me,[n("div",Ae,[n("div",{class:"demo-mode-change__log-header"},[i[0]||(i[0]=n("h4",null,"事件日志",-1)),n("button",{class:"demo-mode-change__clear-btn",onClick:v,title:"清除日志"}," 清除 ")]),n("div",Ie,[(u(!0),f(B,null,W(m.value,(t,g)=>(u(),f("div",{key:g,class:"demo-mode-change__log-item"},D(t),1))),128))])]),n("div",Pe,[n("div",Ge,[(u(),f(B,null,W(s,t=>n("button",{key:t.value,class:sn(["demo-mode-change__btn",{"demo-mode-change__btn--active":a.value===t.value}]),onClick:g=>o(t.value)},D(t.label),11,Be)),64))]),c(U,{mode:a.value,onModeChange:r,onReady:l},null,8,["mode"])])]))}}),Oe=O(We,[["__scopeId","data-v-db22c931"]]),He=`<template>\r
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
import FlowDesignerLayout from '@/components/FlowDesigner/FlowDesignerLayout.vue'\r
import type { FlowDesigner } from '@/components/FlowDesigner/core'\r
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
`,Ue={class:"demo-selection"},Ve={class:"demo-selection__log"},Ze={class:"demo-selection__log-content"},je={class:"demo-selection__canvas"},Ye=P({__name:"demo-selection-change",setup(C){const m=w([]);function a(v){const l=new Date().toLocaleTimeString();m.value.push(`[${l}] ${v}`)}function d(){m.value=[]}function s(v,l){a("✅ 画布初始化完成");const r=l.addNode({id:"node1",shape:"rect",x:100,y:80,width:100,height:60,label:"节点1",attrs:{body:{fill:"#5F95FF",stroke:"#2563EB"},label:{fill:"#fff"}}}),o=l.addNode({id:"node2",shape:"rect",x:250,y:80,width:100,height:60,label:"节点2",attrs:{body:{fill:"#10B981",stroke:"#059669"},label:{fill:"#fff"}}}),e=l.addNode({id:"node3",shape:"rect",x:100,y:180,width:100,height:60,label:"节点3",attrs:{body:{fill:"#F59E0B",stroke:"#D97706"},label:{fill:"#fff"}}}),i=l.addNode({id:"node4",shape:"rect",x:250,y:180,width:100,height:60,label:"节点4",attrs:{body:{fill:"#EF4444",stroke:"#DC2626"},label:{fill:"#fff"}}});l.addEdge({shape:"flow-edge",source:r,target:o,labels:["连线1"]}),l.addEdge({shape:"flow-edge",source:e,target:i,labels:["连线2"]}),a("📦 已添加 4 个节点和 2 条连线"),l.centerContent()}function p(v){a("🔄 @selection-change 事件触发"),a(`📊 选中数量: ${v.length}`),v.length===0?a("❌ 已清空选区"):v.forEach((l,r)=>{const o=l.isNode()?"节点":"连线";a(`  ${r+1}. ${o} ID: ${l.id}`)})}return(v,l)=>(u(),f("div",Ue,[n("div",Ve,[n("div",{class:"demo-selection__log-header"},[l[0]||(l[0]=n("h4",null,"事件日志",-1)),n("button",{class:"demo-selection__clear-btn",onClick:d,title:"清除日志"}," 清除 ")]),n("div",Ze,[(u(!0),f(B,null,W(m.value,(r,o)=>(u(),f("div",{key:o,class:"demo-selection__log-item"},D(r),1))),128))])]),n("div",je,[l[1]||(l[1]=n("div",{class:"demo-selection__tip"}," 💡 点击或框选节点，观察选区变化事件 ",-1)),c(U,{onSelectionChange:p,onReady:s})])]))}}),qe=O(Ye,[["__scopeId","data-v-f3135b88"]]),Xe=`<template>\r
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
import FlowDesignerLayout from '@/components/FlowDesigner/FlowDesignerLayout.vue'\r
import type { FlowDesigner } from '@/components/FlowDesigner/core'\r
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
`,Je={class:"demo-node-lifecycle"},Ke={class:"demo-node-lifecycle__log"},Qe={class:"demo-node-lifecycle__log-content"},nr={class:"demo-node-lifecycle__canvas"},er={class:"demo-node-lifecycle__controls"},rr={class:"demo-node-lifecycle__checkbox"},or={class:"demo-node-lifecycle__checkbox"},tr=P({__name:"demo-node-lifecycle",setup(C){const m=w([]),a=w(),d=w(),s=w(!0),p=w(!0);let v=0;function l(S){const y=new Date().toLocaleTimeString();m.value.push(`[${y}] ${S}`)}function r(){m.value=[]}function o(S,y){console.log("designerdesignerdesignerdesignerdesigner::",y,S),a.value=y,d.value=S,l("✅ 画布初始化完成"),l('💡 点击"添加节点"或"删除选中节点"观察事件')}function e(S){return l("🔵 beforeNodeAdd 触发"),l(`  节点ID: ${S.node.id}`),l(`  来源: ${S.source}`),l(`  允许添加: ${s.value}`),s.value?(l("✅ 允许添加节点"),!0):(l("❌ 节点添加被阻止"),!1)}function i(S){l("🟢 afterNodeAdd 触发"),l(`  节点ID: ${S.nodeId}`),l("  节点已成功添加到画布")}function t(S){return l("🟡 beforeNodeRemove 触发"),l(`  节点ID: ${S.nodeId}`),l(`  来源: ${S.source}`),l(`  允许删除: ${p.value}`),p.value?(l("✅ 允许删除节点"),!0):(l("❌ 节点删除被阻止"),!1)}function g(S){l("🔴 afterNodeRemove 触发"),l(`  节点ID: ${S.nodeId}`),l("  节点已从画布中移除")}function h(){if(!a.value||!d.value)return;v++;const S=[{fill:"#5F95FF",stroke:"#2563EB"},{fill:"#10B981",stroke:"#059669"},{fill:"#F59E0B",stroke:"#D97706"},{fill:"#EF4444",stroke:"#DC2626"}],y=S[v%S.length],b=100+v%3*120,k=100+Math.floor(v/3)*100;l('👆 用户点击"添加节点"');const T=a.value.createNode({shape:"rect",x:b,y:k,width:100,height:60,label:`节点${v}`,attrs:{body:{fill:y.fill,stroke:y.stroke},label:{fill:"#fff"}}});d.value.addCell(T)}function F(){if(!d.value)return;const y=a.value.getSelectedCells().filter(b=>b.isNode());if(y.length===0){l("⚠️ 未选中任何节点");return}l('👆 用户点击"删除选中节点"'),y.forEach(b=>{d.value.removeCell(b)})}return(S,y)=>(u(),f("div",Je,[n("div",Ke,[n("div",{class:"demo-node-lifecycle__log-header"},[y[2]||(y[2]=n("h4",null,"事件日志",-1)),n("button",{class:"demo-node-lifecycle__clear-btn",onClick:r,title:"清除日志"}," 清除 ")]),n("div",Qe,[(u(!0),f(B,null,W(m.value,(b,k)=>(u(),f("div",{key:k,class:"demo-node-lifecycle__log-item"},D(b),1))),128))])]),n("div",nr,[n("div",er,[n("button",{class:"demo-node-lifecycle__btn",onClick:h}," ➕ 添加节点 "),n("button",{class:"demo-node-lifecycle__btn",onClick:F}," ➖ 删除选中节点 "),n("label",rr,[nn(n("input",{type:"checkbox","onUpdate:modelValue":y[0]||(y[0]=b=>s.value=b)},null,512),[[fn,s.value]]),y[3]||(y[3]=I(" 允许添加 ",-1))]),n("label",or,[nn(n("input",{type:"checkbox","onUpdate:modelValue":y[1]||(y[1]=b=>p.value=b)},null,512),[[fn,p.value]]),y[4]||(y[4]=I(" 允许删除 ",-1))])]),c(U,{onReady:o,"before-node-add":e,"after-node-add":i,"before-node-remove":t,"after-node-remove":g})])]))}}),sr=O(tr,[["__scopeId","data-v-254324d5"]]),lr=`<template>\r
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
      </div>\r
      <FlowDesignerLayout\r
        @ready="handleReady"\r
        :before-node-add="handleBeforeNodeAdd"\r
        :after-node-add="handleAfterNodeAdd"\r
        :before-node-remove="handleBeforeNodeRemove"\r
        :after-node-remove="handleAfterNodeRemove"\r
      />\r
    </div>\r
  </div>\r
</template>\r
\r
<script setup lang="ts">\r
import { ref } from 'vue'\r
import FlowDesignerLayout from '@/components/FlowDesigner/FlowDesignerLayout.vue'\r
import type { FlowDesigner } from '@/components/FlowDesigner/core'\r
import type { Graph } from '@antv/x6'\r
import type { \r
  BeforeNodeAddEvent,\r
  AfterNodeAddEvent,\r
  BeforeNodeRemoveEvent,\r
  AfterNodeRemoveEvent\r
} from '@/components/FlowDesigner/types/events'\r
\r
const logs = ref<string[]>([])\r
const graphRef = ref<Graph>()\r
const Designer = ref<FlowDesigner>()\r
const allowAdd = ref(true)\r
const allowRemove = ref(true)\r
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
`,ir={class:"demo-edge-lifecycle"},ar={class:"demo-edge-lifecycle__log"},dr={class:"demo-edge-lifecycle__log-content"},cr={class:"demo-edge-lifecycle__canvas"},pr={class:"demo-edge-lifecycle__controls"},gr={class:"demo-edge-lifecycle__checkbox"},mr={class:"demo-edge-lifecycle__checkbox"},ur=P({__name:"demo-edge-lifecycle",setup(C){const m=w([]),a=w(!0),d=w(!0),s=w();function p(t){const g=new Date().toLocaleTimeString();m.value.push(`[${g}] ${t}`)}function v(){m.value=[]}function l(t,g){s.value=t,p("✅ 画布初始化完成");const h={groups:{top:{position:"top",attrs:{circle:{r:4,magnet:!0,stroke:"#5F95FF",strokeWidth:1,fill:"#fff",style:{visibility:"hidden"}}}},right:{position:"right",attrs:{circle:{r:4,magnet:!0,stroke:"#5F95FF",strokeWidth:1,fill:"#fff",style:{visibility:"hidden"}}}},bottom:{position:"bottom",attrs:{circle:{r:4,magnet:!0,stroke:"#5F95FF",strokeWidth:1,fill:"#fff",style:{visibility:"hidden"}}}},left:{position:"left",attrs:{circle:{r:4,magnet:!0,stroke:"#5F95FF",strokeWidth:1,fill:"#fff",style:{visibility:"hidden"}}}}},items:[{id:"port-top",group:"top"},{id:"port-right",group:"right"},{id:"port-bottom",group:"bottom"},{id:"port-left",group:"left"}]},F=g.createNode({id:"node1",shape:"rect",x:100,y:100,width:100,height:60,label:"节点1",ports:h,attrs:{body:{fill:"#5F95FF",stroke:"#2563EB"},label:{fill:"#fff"}}});t.addCell(F);const S=g.createNode({id:"node2",shape:"rect",x:300,y:100,width:100,height:60,label:"节点2",ports:h,attrs:{body:{fill:"#10B981",stroke:"#059669"},label:{fill:"#fff"}}});t.addCell(S);const y=g.createNode({id:"node3",shape:"rect",x:100,y:220,width:100,height:60,label:"节点3",ports:h,attrs:{body:{fill:"#F59E0B",stroke:"#D97706"},label:{fill:"#fff"}}});t.addCell(y);const b=g.createNode({id:"node4",shape:"rect",x:300,y:220,width:100,height:60,label:"节点4",ports:h,attrs:{body:{fill:"#EF4444",stroke:"#DC2626"},label:{fill:"#fff"}}});t.addCell(b),p("📦 已添加 4 个带连接桩的节点"),p("💡 拖拽节点边缘的圆点来创建连线"),g.centerContent()}function r(t){var g,h;return p("🔵 beforeEdgeAdd 触发"),p(`  源节点: ${(g=t.sourceCell)==null?void 0:g.id}`),p(`  目标节点: ${(h=t.targetCell)==null?void 0:h.id}`),p(`  允许创建: ${a.value}`),a.value?(p("✅ 允许创建连线"),!0):(p("❌ 连线创建被阻止"),!1)}function o(t){p("🟢 afterEdgeAdd 触发"),p(`  连线ID: ${t.edgeId}`),p("  连线已成功添加到画布")}function e(t){return p("🟡 beforeEdgeRemove 触发"),p(`  连线ID: ${t.edgeId}`),p(`  来源: ${t.source}`),p(`  允许删除: ${d.value}`),d.value?(p("✅ 允许删除连线"),!0):(p("❌ 连线删除被阻止"),!1)}function i(t){p("🔴 afterEdgeRemove 触发"),p(`  连线ID: ${t.edgeId}`),p("  连线已从画布中移除")}return(t,g)=>(u(),f("div",ir,[n("div",ar,[n("div",{class:"demo-edge-lifecycle__log-header"},[g[2]||(g[2]=n("h4",null,"事件日志",-1)),n("button",{class:"demo-edge-lifecycle__clear-btn",onClick:v,title:"清除日志"}," 清除 ")]),n("div",dr,[(u(!0),f(B,null,W(m.value,(h,F)=>(u(),f("div",{key:F,class:"demo-edge-lifecycle__log-item"},D(h),1))),128))])]),n("div",cr,[g[5]||(g[5]=n("div",{class:"demo-edge-lifecycle__tip"}," 💡 鼠标悬停到节点上会显示连接桩，拖拽连接桩来创建连线。选中连线后按 Delete 或 Backspace 删除。 ",-1)),n("div",pr,[n("label",gr,[nn(n("input",{type:"checkbox","onUpdate:modelValue":g[0]||(g[0]=h=>a.value=h)},null,512),[[fn,a.value]]),g[3]||(g[3]=I(" 允许创建连线 ",-1))]),n("label",mr,[nn(n("input",{type:"checkbox","onUpdate:modelValue":g[1]||(g[1]=h=>d.value=h)},null,512),[[fn,d.value]]),g[4]||(g[4]=I(" 允许删除连线 ",-1))])]),c(U,{onReady:l,"before-edge-add":r,"after-edge-add":o,"before-edge-remove":e,"after-edge-remove":i})])]))}}),fr=O(ur,[["__scopeId","data-v-8ff18a73"]]),hr=`<template>\r
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
      </div>\r
      <FlowDesignerLayout\r
        @ready="handleReady"\r
        :before-edge-add="handleBeforeEdgeAdd"\r
        :after-edge-add="handleAfterEdgeAdd"\r
        :before-edge-remove="handleBeforeEdgeRemove"\r
        :after-edge-remove="handleAfterEdgeRemove"\r
      />\r
    </div>\r
  </div>\r
</template>\r
\r
<script setup lang="ts">\r
import { ref } from 'vue'\r
import FlowDesignerLayout from '@/components/FlowDesigner/FlowDesignerLayout.vue'\r
import type { FlowDesigner } from '@/components/FlowDesigner/core'\r
import type { Graph } from '@antv/x6'\r
import type {\r
  BeforeEdgeAddEvent,\r
  AfterEdgeAddEvent,\r
  BeforeEdgeRemoveEvent,\r
  AfterEdgeRemoveEvent\r
} from '@/components/FlowDesigner/types/events'\r
\r
const logs = ref<string[]>([])\r
const allowAdd = ref(true)\r
const allowRemove = ref(true)\r
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
`,_r={class:"demo-data-loaded"},vr={class:"demo-data-loaded__log"},br={class:"demo-data-loaded__log-content"},xr={class:"demo-data-loaded__canvas"},yr=P({__name:"demo-data-loaded",setup(C){const m=w([]),a=w(),d={meta:{name:"示例流程",version:"1.0.0"},nodes:[{id:"start",shape:"rect",x:100,y:100,width:100,height:60,data:{label:"开始"},attrs:{body:{fill:"#10B981",stroke:"#059669"},label:{text:"开始",fill:"#fff"}}},{id:"process1",shape:"rect",x:250,y:100,width:100,height:60,data:{label:"处理1"},attrs:{body:{fill:"#5F95FF",stroke:"#2563EB"},label:{text:"处理1",fill:"#fff"}}},{id:"process2",shape:"rect",x:400,y:100,width:100,height:60,data:{label:"处理2"},attrs:{body:{fill:"#F59E0B",stroke:"#D97706"},label:{text:"处理2",fill:"#fff"}}},{id:"end",shape:"rect",x:250,y:220,width:100,height:60,data:{label:"结束"},attrs:{body:{fill:"#EF4444",stroke:"#DC2626"},label:{text:"结束",fill:"#fff"}}}],edges:[{id:"edge1",shape:"flow-edge",source:{cell:"start"},target:{cell:"process1"},data:{label:"步骤1"},labels:["步骤1"]},{id:"edge2",shape:"flow-edge",source:{cell:"process1"},target:{cell:"process2"},data:{label:"步骤2"},labels:["步骤2"]},{id:"edge3",shape:"flow-edge",source:{cell:"process2"},target:{cell:"end"},data:{label:"步骤3"},labels:["步骤3"]}],viewport:{tx:0,ty:0,scale:1}};function s(e){const i=new Date().toLocaleTimeString();m.value.push(`[${i}] ${e}`)}function p(){m.value=[]}function v(e,i){a.value=e,s("✅ 画布初始化完成"),s('💡 点击"加载示例数据"按钮')}function l(e){var i,t,g;if(s("🟢 afterDataLoaded 钩子触发"),s(`📦 流程名称: ${((i=e.meta)==null?void 0:i.name)||"未命名"}`),s(`📊 节点数量: ${((t=e.nodes)==null?void 0:t.length)||0}`),s(`🔗 连线数量: ${((g=e.edges)==null?void 0:g.length)||0}`),s("✅ 数据加载完成，画布已渲染"),a.value){const h=a.value.getGraph();setTimeout(()=>{h.centerContent(),s("🎯 已自动居中显示")},100)}}function r(){if(!a.value){s("⚠️ 画布尚未初始化");return}s('👆 用户点击"加载示例数据"'),s("📥 调用 designer.load()..."),a.value.load(d)}function o(){if(!a.value)return;s('👆 用户点击"清空画布"'),a.value.getGraph().clearCells(),s("🗑 画布已清空")}return(e,i)=>(u(),f("div",_r,[n("div",vr,[n("div",{class:"demo-data-loaded__log-header"},[i[0]||(i[0]=n("h4",null,"事件日志",-1)),n("button",{class:"demo-data-loaded__clear-btn",onClick:p,title:"清除日志"}," 清除 ")]),n("div",br,[(u(!0),f(B,null,W(m.value,(t,g)=>(u(),f("div",{key:g,class:"demo-data-loaded__log-item"},D(t),1))),128))])]),n("div",xr,[n("div",{class:"demo-data-loaded__controls"},[n("button",{class:"demo-data-loaded__btn",onClick:r}," 📥 加载示例数据 "),n("button",{class:"demo-data-loaded__btn",onClick:o}," 🗑 清空画布 ")]),c(U,{onReady:v,"after-data-loaded":l})])]))}}),wr=O(yr,[["__scopeId","data-v-17b5836d"]]),kr=`<template>\r
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
import FlowDesignerLayout from '@/components/FlowDesigner/FlowDesignerLayout.vue'\r
import type { FlowDesigner } from '@/components/FlowDesigner/core'\r
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
  addLog(\`📦 流程名称: \${data.meta?.name || '未命名'}\`)\r
  addLog(\`📊 节点数量: \${data.nodes?.length || 0}\`)\r
  addLog(\`🔗 连线数量: \${data.edges?.length || 0}\`)\r
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
`,Dr={class:"toolbar"},Cr={class:"toolbar__left"},Sr=P({__name:"Toolbar",props:{zoomPercent:{},hasSelection:{type:Boolean},canPaste:{type:Boolean},canGroup:{type:Boolean},canUngroup:{type:Boolean},canUndo:{type:Boolean},canRedo:{type:Boolean},designerMode:{}},emits:["undo","redo","zoomIn","zoomOut","zoomTo","fitView","resetView","copy","paste","toFront","toBack","align-left","align-right","align-top","align-bottom","group","ungroup","export","import","publish","new","save","openSettings","modeChange"],setup(C,{emit:m}){const a=zn("capabilities"),d=m,s=w(null);function p(v){var r;const l=(r=v.target.files)==null?void 0:r[0];l&&(d("import",l),v.target.value="")}return(v,l)=>{const r=un("a-button"),o=un("a-tooltip"),e=un("a-divider"),i=un("a-select-option"),t=un("a-select"),g=un("a-space");return u(),f("div",Dr,[n("div",Cr,[c(g,{size:4,align:"center"},{default:N(()=>[c(o,{title:"导入 JSON"},{default:N(()=>[c(r,{size:"small",disabled:!R(a).canImport,onClick:l[0]||(l[0]=()=>{var h;return(h=s.value)==null?void 0:h.click()})},{icon:N(()=>[c(R(ie))]),_:1},8,["disabled"])]),_:1}),c(o,{title:"导出 JSON"},{default:N(()=>[c(r,{size:"small",disabled:!R(a).canExport,onClick:l[1]||(l[1]=h=>d("export"))},{icon:N(()=>[c(R(ae))]),_:1},8,["disabled"])]),_:1}),c(e,{type:"vertical",style:{margin:"0 2px"}}),c(o,{title:"撤销 (Ctrl+Z)"},{default:N(()=>[c(r,{size:"small",disabled:!R(a).canUndo||!C.canUndo,onClick:l[2]||(l[2]=h=>d("undo"))},{icon:N(()=>[c(R(de))]),_:1},8,["disabled"])]),_:1}),c(o,{title:"重做 (Ctrl+Y)"},{default:N(()=>[c(r,{size:"small",disabled:!R(a).canRedo||!C.canRedo,onClick:l[3]||(l[3]=h=>d("redo"))},{icon:N(()=>[c(R(ce))]),_:1},8,["disabled"])]),_:1}),c(e,{type:"vertical",style:{margin:"0 2px"}}),c(o,{title:"缩小 (Ctrl+-)"},{default:N(()=>[c(r,{size:"small",disabled:C.zoomPercent<=20,onClick:l[4]||(l[4]=h=>d("zoomOut"))},{icon:N(()=>[c(R(pe))]),_:1},8,["disabled"])]),_:1}),c(t,{value:C.zoomPercent,size:"small",style:{width:"76px"},onChange:l[5]||(l[5]=h=>d("zoomTo",h))},{default:N(()=>[c(i,{value:25},{default:N(()=>[...l[19]||(l[19]=[I("25%",-1)])]),_:1}),c(i,{value:50},{default:N(()=>[...l[20]||(l[20]=[I("50%",-1)])]),_:1}),c(i,{value:75},{default:N(()=>[...l[21]||(l[21]=[I("75%",-1)])]),_:1}),c(i,{value:100},{default:N(()=>[...l[22]||(l[22]=[I("100%",-1)])]),_:1}),c(i,{value:125},{default:N(()=>[...l[23]||(l[23]=[I("125%",-1)])]),_:1}),c(i,{value:150},{default:N(()=>[...l[24]||(l[24]=[I("150%",-1)])]),_:1}),c(i,{value:200},{default:N(()=>[...l[25]||(l[25]=[I("200%",-1)])]),_:1})]),_:1},8,["value"]),c(o,{title:"放大 (Ctrl+=)"},{default:N(()=>[c(r,{size:"small",disabled:C.zoomPercent>=500,onClick:l[6]||(l[6]=h=>d("zoomIn"))},{icon:N(()=>[c(R(ge))]),_:1},8,["disabled"])]),_:1}),c(o,{title:"适应窗口 (Ctrl+0)"},{default:N(()=>[c(r,{size:"small",disabled:!R(a).canFitView,onClick:l[7]||(l[7]=h=>d("fitView"))},{icon:N(()=>[c(R(me))]),_:1},8,["disabled"])]),_:1}),c(o,{title:"重置视图 (Ctrl+Shift+H)"},{default:N(()=>[c(r,{size:"small",disabled:!R(a).canResetView,onClick:l[8]||(l[8]=h=>d("resetView"))},{icon:N(()=>[c(R(ue))]),_:1},8,["disabled"])]),_:1}),c(e,{type:"vertical",style:{margin:"0 2px"}}),c(o,{title:"层级前置"},{default:N(()=>[c(r,{size:"small",disabled:!R(a).canToFront||!C.hasSelection,onClick:l[9]||(l[9]=h=>d("toFront"))},{icon:N(()=>[c(R(fe))]),_:1},8,["disabled"])]),_:1}),c(o,{title:"层级后置"},{default:N(()=>[c(r,{size:"small",disabled:!R(a).canToBack||!C.hasSelection,onClick:l[10]||(l[10]=h=>d("toBack"))},{icon:N(()=>[c(R(he))]),_:1},8,["disabled"])]),_:1}),c(e,{type:"vertical",style:{margin:"0 2px"}}),c(o,{title:"左对齐 (Ctrl+Shift+L)"},{default:N(()=>[c(r,{size:"small",disabled:!R(a).canAlign||!R(a).canAlignLeft||!C.canGroup,onClick:l[11]||(l[11]=h=>d("align-left"))},{icon:N(()=>[c(R(_e))]),_:1},8,["disabled"])]),_:1}),c(o,{title:"右对齐 (Ctrl+Shift+R)"},{default:N(()=>[c(r,{size:"small",disabled:!R(a).canAlign||!R(a).canAlignRight||!C.canGroup,onClick:l[12]||(l[12]=h=>d("align-right"))},{icon:N(()=>[c(R(ve))]),_:1},8,["disabled"])]),_:1}),c(o,{title:"上对齐 (Ctrl+Shift+T)"},{default:N(()=>[c(r,{size:"small",disabled:!R(a).canAlign||!R(a).canAlignTop||!C.canGroup,onClick:l[13]||(l[13]=h=>d("align-top"))},{icon:N(()=>[c(R(be))]),_:1},8,["disabled"])]),_:1}),c(o,{title:"下对齐 (Ctrl+Shift+B)"},{default:N(()=>[c(r,{size:"small",disabled:!R(a).canAlign||!R(a).canAlignBottom||!C.canGroup,onClick:l[14]||(l[14]=h=>d("align-bottom"))},{icon:N(()=>[c(R(xe))]),_:1},8,["disabled"])]),_:1}),c(e,{type:"vertical",style:{margin:"0 2px"}}),c(o,{title:"复制选中节点 (Ctrl+C)"},{default:N(()=>[c(r,{size:"small",disabled:!R(a).canCopy||!C.hasSelection,onClick:l[15]||(l[15]=h=>d("copy"))},{icon:N(()=>[c(R(ye))]),default:N(()=>[l[26]||(l[26]=I(" 复制 ",-1))]),_:1},8,["disabled"])]),_:1}),c(o,{title:"粘贴节点 (Ctrl+V)"},{default:N(()=>[c(r,{size:"small",disabled:!R(a).canPaste||!C.canPaste,onClick:l[16]||(l[16]=h=>d("paste"))},{icon:N(()=>[c(R(we))]),default:N(()=>[l[27]||(l[27]=I(" 粘贴 ",-1))]),_:1},8,["disabled"])]),_:1}),c(e,{type:"vertical",style:{margin:"0 2px"}}),c(o,{title:"成组 (Ctrl+G)"},{default:N(()=>[c(r,{size:"small",disabled:!R(a).canGroup||!C.canGroup,onClick:l[17]||(l[17]=h=>d("group"))},{icon:N(()=>[c(R(ke))]),default:N(()=>[l[28]||(l[28]=I(" 成组 ",-1))]),_:1},8,["disabled"])]),_:1}),c(o,{title:"解组 (Ctrl+Shift+G)"},{default:N(()=>[c(r,{size:"small",disabled:!R(a).canGroup||!C.canUngroup,onClick:l[18]||(l[18]=h=>d("ungroup"))},{icon:N(()=>[c(R(De))]),default:N(()=>[l[29]||(l[29]=I(" 解组 ",-1))]),_:1},8,["disabled"])]),_:1})]),_:1})]),n("input",{ref_key:"fileInputRef",ref:s,type:"file",accept:".json",style:{display:"none"},onChange:p},null,544)])}}}),Nr=O(Sr,[["__scopeId","data-v-d2762e1c"]]),Fr={class:"demo-slot-toolbar"},$r={class:"demo-slot-toolbar__log"},Er={class:"demo-slot-toolbar__log-content"},Tr={class:"demo-slot-toolbar__canvas"},Lr=P({__name:"demo-slot-toolbar",setup(C){const m=w([]);function a(p){const v=new Date().toLocaleTimeString();m.value.push(`[${v}] ${p}`)}function d(){m.value=[]}function s(p,v){a("✅ 画布初始化完成"),a("🎨 自定义工具栏已渲染");const l=v.createNode({shape:"rect",x:30,y:30,width:100,height:60,label:"节点1",attrs:{body:{fill:"#5F95FF",stroke:"#2563EB",strokeWidth:2,rx:6,ry:6},label:{fill:"#fff",fontSize:14,fontWeight:500}}});p.addCell(l),a("➕ 添加节点1");const r=v.createNode({shape:"rect",x:130,y:130,width:100,height:60,label:"节点2  ",attrs:{body:{fill:"#fc01b4",stroke:"#7c0073",strokeWidth:2,rx:6,ry:6},label:{fill:"#fff",fontSize:14,fontWeight:500}}});p.addCell(r),a("➕ 添加节点2")}return(p,v)=>(u(),f("div",Fr,[n("div",$r,[n("div",{class:"demo-slot-toolbar__log-header"},[v[0]||(v[0]=n("h4",null,"事件日志",-1)),n("button",{class:"demo-slot-toolbar__clear-btn",onClick:d,title:"清除日志"}," 清除 ")]),n("div",Er,[(u(!0),f(B,null,W(m.value,(l,r)=>(u(),f("div",{key:r,class:"demo-slot-toolbar__log-item"},D(l),1))),128))])]),n("div",Tr,[c(U,{mode:"design",onReady:s},{toolbar:N(l=>[c(Nr,{"zoom-percent":l.zoomPercent,"has-selection":l.hasSelection,"can-paste":l.canPaste,"can-group":l.canGroup,"can-ungroup":l.canUngroup,"can-undo":l.canUndo,"can-redo":l.canRedo,"designer-mode":l.currentMode,onUndo:l.onUndo,onRedo:l.onRedo,onZoomIn:l.onZoomIn,onZoomOut:l.onZoomOut,onZoomTo:l.onZoomTo,onFitView:l.onFitView,onResetView:l.onResetView,onCopy:l.onCopy,onPaste:l.onPaste,onToFront:l.onToFront,onToBack:l.onToBack,onAlignLeft:l.onAlignLeft,onAlignRight:l.onAlignRight,onAlignTop:l.onAlignTop,onAlignBottom:l.onAlignBottom,onGroup:l.onGroup,onUngroup:l.onUngroup,onExport:l.onExport,onImport:l.onImport,onOpenSettings:l.onOpenSettings,onModeChange:l.onModeChange},null,8,["zoom-percent","has-selection","can-paste","can-group","can-ungroup","can-undo","can-redo","designer-mode","onUndo","onRedo","onZoomIn","onZoomOut","onZoomTo","onFitView","onResetView","onCopy","onPaste","onToFront","onToBack","onAlignLeft","onAlignRight","onAlignTop","onAlignBottom","onGroup","onUngroup","onExport","onImport","onOpenSettings","onModeChange"])]),_:1})])]))}}),Rr=O(Lr,[["__scopeId","data-v-ca499486"]]),zr=`<template>\r
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
import FlowDesignerLayout from '@/components/FlowDesigner/FlowDesignerLayout.vue'\r
import type { FlowDesigner } from '@/components/FlowDesigner/core'\r
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
`,Mr=`<template>\r
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
`,Ar={class:"demo-slot-palette"},Ir={class:"demo-slot-palette__log"},Pr={class:"demo-slot-palette__log-content"},Gr={class:"demo-slot-palette__canvas"},Br={class:"custom-palette"},Wr={class:"custom-palette__section"},Or=["onMousedown"],Hr={class:"custom-palette__item-info"},Ur={class:"custom-palette__item-label"},Vr={class:"custom-palette__item-hint"},Zr=P({__name:"demo-slot-palette",setup(C){const m=w([]),a=w([{type:"custom-circle",label:"圆形节点",icon:"⚪",hint:"用于流程开始/结束",color:"#5F95FF",width:80,height:80},{type:"custom-diamond",label:"菱形节点",icon:"◆",hint:"用于条件判断",color:"#47C769",width:100,height:80}]);function d(r){const o=new Date().toLocaleTimeString();m.value.push(`[${o}] ${r}`)}function s(){m.value=[]}function p(r){d("🔧 beforeGraphInit: 开始注册自定义节点"),K.registerNode("custom-circle",{inherit:"circle",width:80,height:80,attrs:{body:{fill:"#5F95FF",stroke:"#2563EB",strokeWidth:2},label:{fill:"#fff",fontSize:14,fontWeight:500}},ports:{groups:{top:{position:"top",attrs:{circle:{r:4,magnet:!0,stroke:"#2563EB",strokeWidth:1,fill:"#fff"}}},bottom:{position:"bottom",attrs:{circle:{r:4,magnet:!0,stroke:"#2563EB",strokeWidth:1,fill:"#fff"}}}},items:[{group:"top",id:"port-top"},{group:"bottom",id:"port-bottom"}]}},!0),d("✅ 已注册节点: custom-circle (圆形)"),K.registerNode("custom-diamond",{inherit:"polygon",width:100,height:80,attrs:{body:{fill:"#47C769",stroke:"#27AE60",strokeWidth:2,refPoints:"0,10 10,0 20,10 10,20"},label:{fill:"#fff",fontSize:13,fontWeight:500,textWrap:{width:-20,height:-20,ellipsis:!0}}},ports:{groups:{top:{position:{name:"top"},attrs:{circle:{r:4,magnet:!0,stroke:"#27AE60",strokeWidth:1,fill:"#fff"}}},right:{position:{name:"right"},attrs:{circle:{r:4,magnet:!0,stroke:"#27AE60",strokeWidth:1,fill:"#fff"}}},bottom:{position:{name:"bottom"},attrs:{circle:{r:4,magnet:!0,stroke:"#27AE60",strokeWidth:1,fill:"#fff"}}},left:{position:{name:"left"},attrs:{circle:{r:4,magnet:!0,stroke:"#27AE60",strokeWidth:1,fill:"#fff"}}}},items:[{group:"top",id:"port-top"},{group:"right",id:"port-right"},{group:"bottom",id:"port-bottom"},{group:"left",id:"port-left"}]}},!0),d("✅ 已注册节点: custom-diamond (菱形)"),d("🎉 所有自定义节点注册完成")}function v(r,o){d("✅ 画布初始化完成"),d("🎨 自定义节点面板已渲染"),d("💡 提示: 点击左侧节点拖拽到画布")}function l(r,o,e){d(`🎯 开始拖拽: ${o.label}`),e(r,{shape:o.type,label:o.label,width:o.width,height:o.height,data:{label:o.label,nodeInfo:{icon:o.icon,hint:o.hint,color:o.color}}})}return(r,o)=>(u(),f("div",Ar,[n("div",Ir,[n("div",{class:"demo-slot-palette__log-header"},[o[0]||(o[0]=n("h4",null,"事件日志",-1)),n("button",{class:"demo-slot-palette__clear-btn",onClick:s,title:"清除日志"}," 清除 ")]),n("div",Pr,[(u(!0),f(B,null,W(m.value,(e,i)=>(u(),f("div",{key:i,class:"demo-slot-palette__log-item"},D(e),1))),128))])]),n("div",Gr,[c(U,{mode:"design","before-graph-init":p,onReady:v},{palette:N(({onStartDrag:e})=>[n("div",Br,[o[2]||(o[2]=n("div",{class:"custom-palette__header"},[n("h3",{class:"custom-palette__title"},"自定义节点"),n("span",{class:"custom-palette__desc"},"拖拽到画布")],-1)),n("div",Wr,[o[1]||(o[1]=n("div",{class:"custom-palette__section-title"},"基础节点",-1)),(u(!0),f(B,null,W(a.value,i=>(u(),f("div",{key:i.type,class:"custom-palette__item",onMousedown:t=>l(t,i,e)},[n("div",{class:"custom-palette__item-icon",style:an({background:i.color})},D(i.icon),5),n("div",Hr,[n("div",Ur,D(i.label),1),n("div",Vr,D(i.hint),1)])],40,Or))),128))])])]),_:1})])]))}}),jr=O(Zr,[["__scopeId","data-v-b5e38d6f"]]),Yr=`<template>\r
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
import FlowDesignerLayout from '@/components/FlowDesigner/FlowDesignerLayout.vue'\r
import type { FlowDesigner, FlowDesignerOptions } from '@/components/FlowDesigner/core'\r
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
`,qr={class:"demo-slot-properties"},Xr={class:"demo-slot-properties__log"},Jr={class:"demo-slot-properties__log-content"},Kr={class:"demo-slot-properties__canvas"},Qr=["title"],no={class:"custom-properties__toggle-icon"},eo={class:"custom-properties__content"},ro={class:"custom-properties__header"},oo={class:"custom-properties__title"},to={class:"custom-properties__desc"},so={key:0,class:"custom-properties__form"},lo={class:"custom-properties__section"},io={class:"custom-properties__field"},ao={class:"custom-properties__field"},co={class:"custom-properties__label"},po={class:"custom-properties__field"},go={class:"custom-properties__label"},mo={class:"custom-properties__field"},uo={class:"custom-properties__section"},fo={class:"custom-properties__info"},ho={class:"custom-properties__info-item"},_o={class:"custom-properties__info-value"},vo={class:"custom-properties__info-item"},bo={class:"custom-properties__info-value"},xo={class:"custom-properties__info-item"},yo={class:"custom-properties__info-value"},wo={key:1,class:"custom-properties__form"},ko={class:"custom-properties__section"},Do={class:"custom-properties__field"},Co=["value"],So={class:"custom-properties__field"},No=["value"],Fo={class:"custom-properties__section"},$o={class:"custom-properties__field"},Eo=["value"],To={class:"custom-properties__field-row"},Lo={class:"custom-properties__field"},Ro=["value"],zo={class:"custom-properties__field"},Mo=["value"],Ao={class:"custom-properties__section"},Io={class:"custom-properties__field"},Po=["value"],Go={class:"custom-properties__field"},Bo=["value"],Wo={class:"custom-properties__field"},Oo=["value"],Ho={key:2,class:"custom-properties__form"},Uo={class:"custom-properties__section"},Vo={class:"custom-properties__field"},Zo=["value"],jo={class:"custom-properties__field"},Yo=["value"],qo={class:"custom-properties__field"},Xo=["value"],Jo={class:"custom-properties__section"},Ko={class:"custom-properties__field"},Qo=["value"],nt={class:"custom-properties__field"},et=["value"],rt={class:"custom-properties__section"},ot={class:"custom-properties__field"},tt=["value"],st={class:"custom-properties__field"},lt=["value"],it={class:"custom-properties__field"},at={class:"custom-properties__label"},dt=["checked"],ct={key:3,class:"custom-properties__empty"},pt=P({__name:"demo-slot-properties",setup(C){const m=w([]),a=w(null),d=w(null),s=w("canvas"),p=w(!1);let v=null,l=null;const r=w({name:"流程设计画布",grid:!0,snapline:!0,backgroundColor:"#ffffff"}),o=w({nodeCount:0,edgeCount:0,zoom:100}),e=Nn(()=>{switch(s.value){case"node":return"节点属性";case"edge":return"连线属性";case"canvas":return"画布配置";default:return"属性编辑"}}),i=Nn(()=>{switch(s.value){case"node":return"编辑节点属性";case"edge":return"编辑连线属性";case"canvas":return"配置画布设置";default:return"请选择元素"}});function t($){const _=new Date().toLocaleTimeString();m.value.push(`[${_}] ${$}`)}function g(){m.value=[]}function h(){p.value=!p.value,t(p.value?"◀ 收起属性面板":"▶ 展开属性面板")}function F($){t("🔧 初始化自定义节点..."),K.registerNode("custom-circle",{inherit:"circle",width:100,height:100,attrs:{body:{fill:"#5F95FF",stroke:"#2563EB",strokeWidth:2},label:{fill:"#fff",fontSize:14,fontWeight:500}}},!0),K.registerNode("custom-rect",{inherit:"rect",width:140,height:70,attrs:{body:{fill:"#47C769",stroke:"#27AE60",strokeWidth:2,rx:8,ry:8},label:{fill:"#fff",fontSize:14,fontWeight:500}}},!0),t("✅ 节点注册完成")}function S($,_){v=$,l=_,t("✅ 画布初始化完成"),t("🎨 自定义属性面板已渲染");const Q=_.addNode({shape:"custom-circle",x:100,y:100,label:"开始",data:{description:"流程开始节点",owner:"张三",priority:"high"}}),mn=_.addNode({shape:"custom-rect",x:300,y:100,label:"处理",data:{description:"执行业务处理",owner:"李四",priority:"medium"}}),En=_.addNode({shape:"custom-circle",x:500,y:100,label:"结束",data:{description:"流程结束",owner:"王五",priority:"low"}});_.addEdge({source:Q,target:mn,shape:"flow-edge",labels:[{attrs:{text:{text:"通过"}}}],data:{lineType:"normal",condition:'status === "approved"',description:"审批通过后的流转",isDefault:!1}}),_.addEdge({source:mn,target:En,shape:"flow-edge",labels:[{attrs:{text:{text:"完成"}}}],data:{lineType:"normal",condition:"",description:"处理完成后结束",isDefault:!0}}),t("➕ 添加了 3 个节点和 2 条连线"),t("💡 提示: 点击节点、连线或空白区域"),_.centerContent(),b(),_.on("node:added",b),_.on("node:removed",b),_.on("edge:added",b),_.on("edge:removed",b),_.on("scale",({sx:kn})=>{o.value.zoom=Math.round(kn*100)})}function y($){$.length===0?(a.value=null,d.value=null,s.value="canvas",t("📌 显示画布配置")):$.length===1?$[0].isNode()?(a.value=$[0],d.value=null,s.value="node",t(`📌 选中节点: ${a.value.label||a.value.id}`)):$[0].isEdge()&&(a.value=null,d.value=$[0],s.value="edge",t(`📌 选中连线: ${d.value.id}`)):(a.value=null,d.value=null,s.value="none",t(`📌 选中 ${$.length} 个元素`))}function b(){l&&(o.value.nodeCount=l.getNodes().length,o.value.edgeCount=l.getEdges().length)}function k(){t(`⚙️ 更新画布配置: ${r.value.name}`)}function T($){var _;return a.value&&((_=a.value.getData())==null?void 0:_[$])||""}function q($){a.value&&(a.value.setAttrByPath("label/text",$),a.value.prop("label",$),t(`✏️ 更新节点名称: ${$}`))}function L($,_){if(!a.value)return;const Q=a.value.getSize(),mn={width:$==="width"?_:Q.width,height:$==="height"?_:Q.height};a.value.setSize(mn),t(`📏 更新节点尺寸: ${$} = ${_}`)}function A($,_){if(!a.value)return;const Q=a.value.getData()||{};a.value.setData(pn(rn({},Q),{[$]:_})),t(`💾 更新节点属性: ${$}`)}function Y(){if(!a.value||!l)return;const $=a.value.label||a.value.id;l.removeNode(a.value),t(`🗑️ 删除节点: ${$}`)}function dn(){var _,Q;if(!d.value)return"";const $=d.value.getLabels();return $&&$.length>0&&((Q=(_=$[0].attrs)==null?void 0:_.text)==null?void 0:Q.text)||""}function gn(){if(!d.value)return"";const $=d.value.getSourceNode();return($==null?void 0:$.label)||($==null?void 0:$.id)||""}function Sn(){if(!d.value)return"";const $=d.value.getTargetNode();return($==null?void 0:$.label)||($==null?void 0:$.id)||""}function _n($){var _;return d.value&&((_=d.value.getData())==null?void 0:_[$])||""}function Pn($){d.value&&(v==null||v.updateEdgeLabelText(d.value,$),t(`✏️ 更新连线标签: ${$}`))}function J($,_){if(!d.value)return;const Q=d.value.getData()||{};d.value.setData(pn(rn({},Q),{[$]:_})),t(`💾 更新连线属性: ${$}`)}function on(){!d.value||!l||(l.removeEdge(d.value),t("🗑️ 删除连线"))}return($,_)=>(u(),f("div",qr,[n("div",Xr,[n("div",{class:"demo-slot-properties__log-header"},[_[15]||(_[15]=n("h4",null,"事件日志",-1)),n("button",{class:"demo-slot-properties__clear-btn",onClick:g,title:"清除日志"}," 清除 ")]),n("div",Jr,[(u(!0),f(B,null,W(m.value,(Q,mn)=>(u(),f("div",{key:mn,class:"demo-slot-properties__log-item"},D(Q),1))),128))])]),n("div",Kr,[c(U,{mode:"design","before-graph-init":F,onReady:S,onSelectionChange:y},{properties:N(({designer:Q,graph:mn,selectedCells:En,currentMode:kn,capabilities:Hn})=>{var Tn,z;return[n("div",{class:sn(["custom-properties",{"custom-properties--collapsed":p.value}])},[n("button",{class:"custom-properties__toggle",onClick:h,title:p.value?"展开属性面板":"收起属性面板"},[n("span",no,D(p.value?"◀":"▶"),1)],8,Qr),n("div",eo,[n("div",ro,[n("h3",oo,D(e.value),1),n("span",to,D(i.value),1)]),s.value==="canvas"?(u(),f("div",so,[n("div",lo,[_[20]||(_[20]=n("div",{class:"custom-properties__section-title"},"画布设置",-1)),n("div",io,[_[16]||(_[16]=n("label",{class:"custom-properties__label"},"画布名称",-1)),nn(n("input",{type:"text",class:"custom-properties__input","onUpdate:modelValue":_[0]||(_[0]=x=>r.value.name=x),onInput:k,placeholder:"请输入画布名称"},null,544),[[Ln,r.value.name]])]),n("div",ao,[n("label",co,[nn(n("input",{type:"checkbox",class:"custom-properties__checkbox","onUpdate:modelValue":_[1]||(_[1]=x=>r.value.grid=x),onChange:k},null,544),[[fn,r.value.grid]]),_[17]||(_[17]=I(" 显示网格 ",-1))])]),n("div",po,[n("label",go,[nn(n("input",{type:"checkbox",class:"custom-properties__checkbox","onUpdate:modelValue":_[2]||(_[2]=x=>r.value.snapline=x),onChange:k},null,544),[[fn,r.value.snapline]]),_[18]||(_[18]=I(" 显示对齐线 ",-1))])]),n("div",mo,[_[19]||(_[19]=n("label",{class:"custom-properties__label"},"背景颜色",-1)),nn(n("input",{type:"color",class:"custom-properties__color","onUpdate:modelValue":_[3]||(_[3]=x=>r.value.backgroundColor=x),onInput:k},null,544),[[Ln,r.value.backgroundColor]])])]),n("div",uo,[_[24]||(_[24]=n("div",{class:"custom-properties__section-title"},"画布信息",-1)),n("div",fo,[n("div",ho,[_[21]||(_[21]=n("span",{class:"custom-properties__info-label"},"节点数量:",-1)),n("span",_o,D(o.value.nodeCount),1)]),n("div",vo,[_[22]||(_[22]=n("span",{class:"custom-properties__info-label"},"连线数量:",-1)),n("span",bo,D(o.value.edgeCount),1)]),n("div",xo,[_[23]||(_[23]=n("span",{class:"custom-properties__info-label"},"缩放比例:",-1)),n("span",yo,D(o.value.zoom)+"%",1)])])])])):s.value==="node"?(u(),f("div",wo,[n("div",ko,[_[27]||(_[27]=n("div",{class:"custom-properties__section-title"},"节点信息",-1)),n("div",Do,[_[25]||(_[25]=n("label",{class:"custom-properties__label"},"节点 ID",-1)),n("input",{type:"text",class:"custom-properties__input",value:a.value.id,disabled:""},null,8,Co)]),n("div",So,[_[26]||(_[26]=n("label",{class:"custom-properties__label"},"节点类型",-1)),n("input",{type:"text",class:"custom-properties__input",value:a.value.shape,disabled:""},null,8,No)])]),n("div",Fo,[_[31]||(_[31]=n("div",{class:"custom-properties__section-title"},"基础属性",-1)),n("div",$o,[_[28]||(_[28]=n("label",{class:"custom-properties__label"},"节点名称 *",-1)),n("input",{type:"text",class:"custom-properties__input",value:a.value.label,onInput:_[4]||(_[4]=x=>q(x.target.value)),placeholder:"请输入节点名称"},null,40,Eo)]),n("div",To,[n("div",Lo,[_[29]||(_[29]=n("label",{class:"custom-properties__label"},"宽度",-1)),n("input",{type:"number",class:"custom-properties__input",value:((Tn=a.value.size)==null?void 0:Tn.width)||0,onInput:_[5]||(_[5]=x=>L("width",Number(x.target.value))),min:"50",max:"500"},null,40,Ro)]),n("div",zo,[_[30]||(_[30]=n("label",{class:"custom-properties__label"},"高度",-1)),n("input",{type:"number",class:"custom-properties__input",value:((z=a.value.size)==null?void 0:z.height)||0,onInput:_[6]||(_[6]=x=>L("height",Number(x.target.value))),min:"30",max:"500"},null,40,Mo)])])]),n("div",Ao,[_[36]||(_[36]=n("div",{class:"custom-properties__section-title"},"业务属性",-1)),n("div",Io,[_[32]||(_[32]=n("label",{class:"custom-properties__label"},"描述",-1)),n("textarea",{class:"custom-properties__textarea",value:T("description"),onInput:_[7]||(_[7]=x=>A("description",x.target.value)),placeholder:"请输入节点描述",rows:"3"},null,40,Po)]),n("div",Go,[_[33]||(_[33]=n("label",{class:"custom-properties__label"},"负责人",-1)),n("input",{type:"text",class:"custom-properties__input",value:T("owner"),onInput:_[8]||(_[8]=x=>A("owner",x.target.value)),placeholder:"请输入负责人"},null,40,Bo)]),n("div",Wo,[_[35]||(_[35]=n("label",{class:"custom-properties__label"},"优先级",-1)),n("select",{class:"custom-properties__select",value:T("priority"),onChange:_[9]||(_[9]=x=>A("priority",x.target.value))},[..._[34]||(_[34]=[n("option",{value:""},"请选择",-1),n("option",{value:"high"},"高",-1),n("option",{value:"medium"},"中",-1),n("option",{value:"low"},"低",-1)])],40,Oo)])]),n("div",{class:"custom-properties__actions"},[n("button",{class:"custom-properties__btn custom-properties__btn--danger",onClick:Y}," 删除节点 ")])])):s.value==="edge"?(u(),f("div",Ho,[n("div",Uo,[_[40]||(_[40]=n("div",{class:"custom-properties__section-title"},"连线信息",-1)),n("div",Vo,[_[37]||(_[37]=n("label",{class:"custom-properties__label"},"连线 ID",-1)),n("input",{type:"text",class:"custom-properties__input",value:d.value.id,disabled:""},null,8,Zo)]),n("div",jo,[_[38]||(_[38]=n("label",{class:"custom-properties__label"},"源节点",-1)),n("input",{type:"text",class:"custom-properties__input",value:gn(),disabled:""},null,8,Yo)]),n("div",qo,[_[39]||(_[39]=n("label",{class:"custom-properties__label"},"目标节点",-1)),n("input",{type:"text",class:"custom-properties__input",value:Sn(),disabled:""},null,8,Xo)])]),n("div",Jo,[_[44]||(_[44]=n("div",{class:"custom-properties__section-title"},"基础属性",-1)),n("div",Ko,[_[41]||(_[41]=n("label",{class:"custom-properties__label"},"连线标签",-1)),n("input",{type:"text",class:"custom-properties__input",value:dn(),onInput:_[10]||(_[10]=x=>Pn(x.target.value)),placeholder:"请输入连线标签"},null,40,Qo)]),n("div",nt,[_[43]||(_[43]=n("label",{class:"custom-properties__label"},"连线类型",-1)),n("select",{class:"custom-properties__select",value:_n("lineType"),onChange:_[11]||(_[11]=x=>J("lineType",x.target.value))},[..._[42]||(_[42]=[n("option",{value:"normal"},"直线",-1),n("option",{value:"smooth"},"平滑曲线",-1),n("option",{value:"rounded"},"圆角折线",-1)])],40,et)])]),n("div",rt,[_[48]||(_[48]=n("div",{class:"custom-properties__section-title"},"业务属性",-1)),n("div",ot,[_[45]||(_[45]=n("label",{class:"custom-properties__label"},"条件表达式",-1)),n("input",{type:"text",class:"custom-properties__input",value:_n("condition"),onInput:_[12]||(_[12]=x=>J("condition",x.target.value)),placeholder:"例如: status === 'approved'"},null,40,tt)]),n("div",st,[_[46]||(_[46]=n("label",{class:"custom-properties__label"},"描述",-1)),n("textarea",{class:"custom-properties__textarea",value:_n("description"),onInput:_[13]||(_[13]=x=>J("description",x.target.value)),placeholder:"请输入连线描述",rows:"2"},null,40,lt)]),n("div",it,[n("label",at,[n("input",{type:"checkbox",class:"custom-properties__checkbox",checked:_n("isDefault"),onChange:_[14]||(_[14]=x=>J("isDefault",x.target.checked))},null,40,dt),_[47]||(_[47]=I(" 默认路径 ",-1))])])]),n("div",{class:"custom-properties__actions"},[n("button",{class:"custom-properties__btn custom-properties__btn--danger",onClick:on}," 删除连线 ")])])):(u(),f("div",ct,[..._[49]||(_[49]=[n("div",{class:"custom-properties__empty-icon"},"📝",-1),n("p",null,"请选择画布元素",-1),n("p",{class:"custom-properties__empty-hint"},"点击节点或连线进行编辑",-1)])]))])],2)]}),_:1})])]))}}),gt=O(pt,[["__scopeId","data-v-23f4e51d"]]),mt=`<template>\r
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
import FlowDesignerLayout from '@/components/FlowDesigner/FlowDesignerLayout.vue'\r
import type { FlowDesigner, FlowDesignerOptions } from '@/components/FlowDesigner/core'\r
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
`,ut={class:"demo-slot-searchbox"},ft={class:"demo-slot-searchbox__log"},ht={class:"demo-slot-searchbox__log-content"},_t={class:"demo-slot-searchbox__canvas"},vt={class:"compact-search-box__filter-bar"},bt=["onClick","title"],xt={class:"compact-search-box__input-wrapper"},yt=["onUpdate:modelValue","onKeydown"],wt={class:"compact-search-box__controls"},kt={key:0,class:"compact-search-box__counter"},Dt={key:1,class:"compact-search-box__counter"},Ct=["disabled","onClick"],St=["disabled","onClick"],Nt=["onClick"],Ft={key:0,class:"compact-search-box__dropdown"},$t=["onClick"],Et={class:"compact-search-box__result-info"},Tt={class:"compact-search-box__result-label"},Lt={class:"compact-search-box__result-meta"},Rt={class:"compact-search-box__result-type"},zt={class:"compact-search-box__result-id"},Mt={key:1,class:"compact-search-box__empty"},At=P({__name:"demo-slot-searchbox",setup(C){const m=w([]),a=w(),d=w("all"),s=[{value:"all",label:"全部",description:"搜索所有节点（默认行为）"},{value:"rect",label:"矩形",description:"仅搜索 rect 类型的节点"},{value:"circle",label:"圆形",description:"仅搜索 circle 类型的节点"},{value:"ellipse",label:"椭圆",description:"仅搜索 ellipse 类型的节点"}];function p(i){const t=new Date().toLocaleTimeString();m.value.push(`[${t}] ${i}`)}function v(){m.value=[]}function l(i,t){d.value=i,i==="all"?(t(null),p("🔍 已切换到【全部】模式"),p("   → 输入关键词即可搜索所有节点")):(t((F,S)=>{var q;if(F.shape!==i)return!1;if(!S)return!0;const y=S.toLowerCase(),b=F.getProp("label")||F.label;if(b&&String(b).toLowerCase().includes(y))return!0;const k=(q=F.getData())==null?void 0:q.label;if(k&&String(k).toLowerCase().includes(y))return!0;const T=F.id;return!!(T&&T.toLowerCase().includes(y))}),p(`🔍 已切换到【${{rect:"矩形",circle:"圆形",ellipse:"椭圆"}[i]||i}】模式`),p(`   → 仅搜索 ${i} 类型的节点`))}function r(i,t){p("✅ 画布初始化完成");const g=[{shape:"rect",x:100,y:100,width:100,height:60,label:"开始节点"},{shape:"rect",x:300,y:100,width:100,height:60,label:"处理数据"},{shape:"circle",x:500,y:130,width:80,height:80,label:"验证结果"},{shape:"ellipse",x:100,y:250,width:120,height:60,label:"发送通知"},{shape:"rect",x:300,y:250,width:100,height:60,label:"结束节点"},{shape:"circle",x:500,y:280,width:80,height:80,label:"备份数据"}];g.forEach(h=>{t.addNode(h)}),p(`🎨 已添加 ${g.length} 个测试节点`),p("   → 3个矩形(rect) + 2个圆形(circle) + 1个椭圆(ellipse)"),p("💡 提示: 按 Ctrl+F 打开搜索框"),p("💡 测试步骤:"),p('   1. 输入"节点"关键词'),p("   2. 点击不同过滤按钮观察结果变化"),p('   3. "矩形"模式只显示3个rect节点'),p('   4. "圆形"模式只显示2个circle节点')}function o(i){return i.shape||"unknown"}function e(i){return`ID: ${(i.id||"").substring(0,8)}`}return oe(()=>a.value,i=>{i&&te(()=>{i.focus()})}),(i,t)=>(u(),f("div",ut,[n("div",ft,[n("div",{class:"demo-slot-searchbox__log-header"},[t[1]||(t[1]=n("h4",null,"事件日志",-1)),n("button",{class:"demo-slot-searchbox__clear-btn",onClick:v,title:"清除日志"}," 清除 ")]),n("div",ht,[(u(!0),f(B,null,W(m.value,(g,h)=>(u(),f("div",{key:h,class:"demo-slot-searchbox__log-item"},D(g),1))),128))])]),n("div",_t,[c(U,{mode:"design",onReady:r},{"search-box":N(({keyword:g,results:h,currentIndex:F,total:S,next:y,prev:b,close:k,selectByIndex:T,getNodeLabel:q,setFilter:L})=>[n("div",{class:"compact-search-box",onClick:t[0]||(t[0]=Cn(()=>{},["stop"]))},[n("div",vt,[t[2]||(t[2]=n("span",{class:"compact-search-box__filter-label"},"过滤模式:",-1)),(u(),f(B,null,W(s,A=>n("button",{key:A.value,class:sn(["compact-search-box__filter-btn",{"compact-search-box__filter-btn--active":d.value===A.value}]),onClick:Y=>l(A.value,L),title:A.description},D(A.label),11,bt)),64))]),n("div",xt,[nn(n("input",{ref_key:"searchInputRef",ref:a,"onUpdate:modelValue":A=>g.value=A,class:"compact-search-box__input",type:"text",placeholder:"搜索节点...",onKeydown:[Bn(k,["esc"]),Bn(Cn(y,["exact"]),["enter"]),Bn(Cn(b,["shift"]),["enter"])]},null,40,yt),[[Ln,g.value]]),n("div",wt,[S.value>0?(u(),f("span",kt,D(F.value+1)+" / "+D(S.value),1)):g.value&&S.value===0?(u(),f("span",Dt," 0 / 0 ")):E("",!0),n("button",{class:"compact-search-box__nav-btn",disabled:S.value===0,onClick:b,title:"上一个 (Shift+Enter)"}," ↑ ",8,Ct),n("button",{class:"compact-search-box__nav-btn",disabled:S.value===0,onClick:y,title:"下一个 (Enter)"}," ↓ ",8,St),n("button",{class:"compact-search-box__close-btn",onClick:k,title:"关闭 (ESC)"}," ✕ ",8,Nt)])]),h.value.length>0?(u(),f("div",Ft,[(u(!0),f(B,null,W(h.value,(A,Y)=>(u(),f("div",{key:A.id,class:sn(["compact-search-box__result-item",{"compact-search-box__result-item--active":Y===F.value}]),onClick:dn=>{T(Y),p(`📍 已选中: ${q(A)}`)}},[t[3]||(t[3]=n("div",{class:"compact-search-box__result-icon"},"📍",-1)),n("div",Et,[n("div",Tt,D(q(A)),1),n("div",Lt,[n("span",Rt,D(o(A)),1),n("span",zt,D(e(A)),1)])]),t[4]||(t[4]=n("div",{class:"compact-search-box__result-arrow"},"→",-1))],10,$t))),128))])):g.value?(u(),f("div",Mt," 未找到匹配的节点 ")):E("",!0)])]),_:1})])]))}}),It=O(At,[["__scopeId","data-v-aa37b2f6"]]),Pt=`<template>\r
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
import FlowDesignerLayout from '@/components/FlowDesigner/FlowDesignerLayout.vue'\r
import type { FlowDesigner } from '@/components/FlowDesigner/core'\r
import type { Graph, Node } from '@antv/x6'\r
import type { NodeFilterFn } from '@/components/FlowDesigner/composables/useNodeSearch'\r
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
function handleFilterChange(filterValue: string, setFilter: (fn: NodeFilterFn | null) => void) {\r
  activeFilter.value = filterValue\r
\r
  if (filterValue === 'all') {\r
    // 恢复默认过滤器\r
    setFilter(null)\r
    addLog('🔍 已切换到【全部】模式')\r
    addLog('   → 输入关键词即可搜索所有节点')\r
  } else {\r
    // 设置自定义过滤器：仅搜索指定 shape 类型的节点\r
    const customFilter: NodeFilterFn = (node: Node, keyword: string) => {\r
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
`,Gt={class:"demo-slot-canvas-menu"},Bt={class:"demo-slot-canvas-menu__log"},Wt={class:"demo-slot-canvas-menu__log-content"},Ot={class:"demo-slot-canvas-menu__canvas"},Ht=["onClick"],Ut={key:1,class:"canvas-context-menu__divider"},Vt=["onClick"],Zt=["onClick"],jt={key:4,class:"canvas-context-menu__divider"},Yt=["onClick"],qt=["onClick"],Xt=["onClick"],Jt=["onClick"],Kt={key:9,class:"canvas-context-menu__divider"},Qt=["onClick"],ns=["onClick"],es=["onClick"],rs={key:13,class:"canvas-context-menu__divider"},os=["onClick"],ts=P({__name:"demo-slot-canvasMenu",setup(C){const m=w([]);function a(o){const e=new Date().toLocaleTimeString();m.value.push(`[${e}] ${o}`),setTimeout(()=>{const i=document.querySelector(".demo-slot-canvas-menu__log-content");i&&(i.scrollTop=i.scrollHeight)},0)}function d(){m.value=[]}function s(o){a("🔧 初始化自定义节点样式..."),K.registerNode("custom-circle",{inherit:"circle",width:100,height:100,attrs:{body:{fill:"#5F95FF",stroke:"#2563EB",strokeWidth:2},label:{fill:"#fff",fontSize:14,fontWeight:500}}},!0),K.registerNode("custom-rect",{inherit:"rect",width:140,height:70,attrs:{body:{fill:"#47C769",stroke:"#27AE60",strokeWidth:2,rx:8,ry:8},label:{fill:"#fff",fontSize:14,fontWeight:500}}},!0),a("✅ 节点样式注册完成")}function p(o,e){a(`🖱️ 菜单点击: ${v(o)}`),e(o)}function v(o){return{selectAll:"全选节点",undo:"撤销",redo:"重做",zoomIn:"放大",zoomOut:"缩小",fitView:"适应窗口",resetView:"重置视图",paste:"粘贴",import:"导入 JSON",export:"导出 JSON",clear:"清空画布"}[o]||o}function l(o,e){a("✅ 画布初始化完成"),r(e),a("💡 提示: 在画布空白处点击右键打开菜单")}function r(o){const e=o.addNode({shape:"custom-circle",x:100,y:100,label:"开始",data:{description:"流程开始节点",owner:"张三",priority:"high"}}),i=o.addNode({shape:"custom-rect",x:300,y:100,label:"处理",data:{description:"执行业务处理",owner:"李四",priority:"medium"}}),t=o.addNode({shape:"custom-circle",x:500,y:100,label:"结束",data:{description:"流程结束",owner:"王五",priority:"low"}});o.addEdge({source:e,target:i,shape:"flow-edge",labels:[{attrs:{text:{text:"通过"}}}],data:{lineType:"normal",condition:'status === "approved"',description:"审批通过后的流转",isDefault:!1}}),o.addEdge({source:i,target:t,shape:"flow-edge",labels:[{attrs:{text:{text:"完成"}}}],data:{lineType:"normal",condition:"",description:"处理完成后结束",isDefault:!0}})}return(o,e)=>(u(),f("div",Gt,[n("div",Bt,[n("div",{class:"demo-slot-canvas-menu__log-header"},[e[1]||(e[1]=n("h4",null,"事件日志",-1)),n("button",{class:"demo-slot-canvas-menu__clear-btn",onClick:d,title:"清除日志"}," 清除 ")]),n("div",Wt,[(u(!0),f(B,null,W(m.value,(i,t)=>(u(),f("div",{key:t,class:"demo-slot-canvas-menu__log-item"},D(i),1))),128))])]),n("div",Ot,[c(U,{mode:"design","before-graph-init":s,onReady:l},{"canvas-menu":N(({capabilities:i,onSelect:t})=>[n("div",{class:"canvas-context-menu",onClick:e[0]||(e[0]=Cn(()=>{},["stop"]))},[e[13]||(e[13]=n("div",{class:"canvas-context-menu__header"},[n("span",{class:"canvas-context-menu__title"},"画布菜单")],-1)),i.canSelectAll&&i.canMultipleSelect?(u(),f("div",{key:0,class:"canvas-context-menu__item",onClick:g=>p("selectAll",t)},[...e[2]||(e[2]=[n("span",{class:"canvas-context-menu__icon"},"☑",-1),n("span",{class:"canvas-context-menu__text"},"全选节点",-1),n("span",{class:"canvas-context-menu__shortcut"},"Ctrl+A",-1)])],8,Ht)):E("",!0),i.canSelectAll&&i.canMultipleSelect&&(i.canUndo||i.canRedo)?(u(),f("div",Ut)):E("",!0),i.canUndo?(u(),f("div",{key:2,class:"canvas-context-menu__item",onClick:g=>p("undo",t)},[...e[3]||(e[3]=[n("span",{class:"canvas-context-menu__icon"},"↶",-1),n("span",{class:"canvas-context-menu__text"},"撤销",-1),n("span",{class:"canvas-context-menu__shortcut"},"Ctrl+Z",-1)])],8,Vt)):E("",!0),i.canRedo?(u(),f("div",{key:3,class:"canvas-context-menu__item",onClick:g=>p("redo",t)},[...e[4]||(e[4]=[n("span",{class:"canvas-context-menu__icon"},"↷",-1),n("span",{class:"canvas-context-menu__text"},"重做",-1),n("span",{class:"canvas-context-menu__shortcut"},"Ctrl+Y",-1)])],8,Zt)):E("",!0),(i.canUndo||i.canRedo)&&(i.canZoom||i.canFitView)?(u(),f("div",jt)):E("",!0),i.canZoom?(u(),f("div",{key:5,class:"canvas-context-menu__item",onClick:g=>p("zoomIn",t)},[...e[5]||(e[5]=[n("span",{class:"canvas-context-menu__icon"},"🔍+",-1),n("span",{class:"canvas-context-menu__text"},"放大",-1),n("span",{class:"canvas-context-menu__shortcut"},"Ctrl+=",-1)])],8,Yt)):E("",!0),i.canZoom?(u(),f("div",{key:6,class:"canvas-context-menu__item",onClick:g=>p("zoomOut",t)},[...e[6]||(e[6]=[n("span",{class:"canvas-context-menu__icon"},"🔍-",-1),n("span",{class:"canvas-context-menu__text"},"缩小",-1),n("span",{class:"canvas-context-menu__shortcut"},"Ctrl+-",-1)])],8,qt)):E("",!0),i.canFitView?(u(),f("div",{key:7,class:"canvas-context-menu__item",onClick:g=>p("fitView",t)},[...e[7]||(e[7]=[n("span",{class:"canvas-context-menu__icon"},"⛶",-1),n("span",{class:"canvas-context-menu__text"},"适应窗口",-1),n("span",{class:"canvas-context-menu__shortcut"},"Ctrl+0",-1)])],8,Xt)):E("",!0),i.canResetView?(u(),f("div",{key:8,class:"canvas-context-menu__item",onClick:g=>p("resetView",t)},[...e[8]||(e[8]=[n("span",{class:"canvas-context-menu__icon"},"⌖",-1),n("span",{class:"canvas-context-menu__text"},"重置视图",-1),n("span",{class:"canvas-context-menu__shortcut"},"Ctrl+Shift+H",-1)])],8,Jt)):E("",!0),(i.canZoom||i.canFitView)&&(i.canImport||i.canExport)?(u(),f("div",Kt)):E("",!0),i.canPaste?(u(),f("div",{key:10,class:"canvas-context-menu__item",onClick:g=>p("paste",t)},[...e[9]||(e[9]=[n("span",{class:"canvas-context-menu__icon"},"📋",-1),n("span",{class:"canvas-context-menu__text"},"粘贴",-1),n("span",{class:"canvas-context-menu__shortcut"},"Ctrl+V",-1)])],8,Qt)):E("",!0),i.canImport?(u(),f("div",{key:11,class:"canvas-context-menu__item",onClick:g=>p("import",t)},[...e[10]||(e[10]=[n("span",{class:"canvas-context-menu__icon"},"📥",-1),n("span",{class:"canvas-context-menu__text"},"导入 JSON",-1)])],8,ns)):E("",!0),i.canExport?(u(),f("div",{key:12,class:"canvas-context-menu__item",onClick:g=>p("export",t)},[...e[11]||(e[11]=[n("span",{class:"canvas-context-menu__icon"},"📤",-1),n("span",{class:"canvas-context-menu__text"},"导出 JSON",-1)])],8,es)):E("",!0),(i.canImport||i.canExport)&&i.canDelete?(u(),f("div",rs)):E("",!0),i.canDelete?(u(),f("div",{key:14,class:"canvas-context-menu__item canvas-context-menu__item--danger",onClick:g=>p("clear",t)},[...e[12]||(e[12]=[n("span",{class:"canvas-context-menu__icon"},"🗑",-1),n("span",{class:"canvas-context-menu__text"},"清空画布",-1)])],8,os)):E("",!0)])]),_:1})])]))}}),ss=O(ts,[["__scopeId","data-v-2bee8b35"]]),ls=`<template>\r
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
import FlowDesignerLayout from '@/components/FlowDesigner/FlowDesignerLayout.vue'\r
import type { FlowDesigner, FlowDesignerOptions } from '@/components/FlowDesigner/core'\r
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
`,is={class:"demo-slot-node-menu"},as={class:"demo-slot-node-menu__log"},ds={class:"demo-slot-node-menu__log-content"},cs={class:"demo-slot-node-menu__canvas"},ps={class:"node-context-menu__header"},gs={class:"node-context-menu__title"},ms={class:"node-context-menu__info"},us={class:"node-context-menu__info-item"},fs={class:"node-context-menu__info-value"},hs={class:"node-context-menu__info-item"},_s={class:"node-context-menu__info-value"},vs={key:0,class:"node-context-menu__info-item"},bs={class:"node-context-menu__info-value"},xs=["onClick"],ys=["onClick"],ws={key:2,class:"node-context-menu__divider"},ks=["onClick"],Ds=["onClick"],Cs={key:5,class:"node-context-menu__divider"},Ss=["onClick"],Ns=["onClick"],Fs={key:8,class:"node-context-menu__divider"},$s=["onClick"],Es=["onClick"],Ts={key:11,class:"node-context-menu__divider"},Ls=["onClick"],Rs=P({__name:"demo-slot-nodeMenu",setup(C){const m=w([]);function a(g){const h=new Date().toLocaleTimeString();m.value.push(`[${h}] ${g}`),setTimeout(()=>{const F=document.querySelector(".demo-slot-node-menu__log-content");F&&(F.scrollTop=F.scrollHeight)},0)}function d(){m.value=[]}function s(g){a("🔧 初始化自定义节点样式..."),K.registerNode("custom-circle",{inherit:"circle",width:100,height:100,attrs:{body:{fill:"#5F95FF",stroke:"#2563EB",strokeWidth:2},label:{fill:"#fff",fontSize:14,fontWeight:500}}},!0),K.registerNode("custom-rect",{inherit:"rect",width:140,height:70,attrs:{body:{fill:"#47C769",stroke:"#27AE60",strokeWidth:2,rx:8,ry:8},label:{fill:"#fff",fontSize:14,fontWeight:500}}},!0),K.registerNode("custom-warning",{inherit:"rect",width:140,height:70,attrs:{body:{fill:"#FFA940",stroke:"#FA8C16",strokeWidth:2,rx:8,ry:8},label:{fill:"#fff",fontSize:14,fontWeight:600}}},!0),a("✅ 节点样式注册完成")}function p(g){const h=g.getProp("label");if(h)return String(h);const F=g.getData();return F!=null&&F.label?F.label:g.id.substring(0,8)+"..."}function v(g,h,F){return F?"多选节点菜单":h?"组节点菜单":"节点菜单"}function l(g,h,F){a(`🖱️ 节点菜单: ${e(g)} - ${p(h)}`),F(g)}function r(g,h){h.centerCell(g,{padding:100,animation:{duration:300,easing:"ease-in-out"}}),a(`🎯 居中显示节点: ${p(g)}`)}function o(g,h){const F=h.getConnectedEdges(g);F.forEach(S=>{S.attr("line/stroke","#FF4D4F"),S.attr("line/strokeWidth",3),setTimeout(()=>{S.attr("line/stroke","#8c9bb5"),S.attr("line/strokeWidth",1.5)},3e3)}),a(`🔗 高亮连线: ${F.length} 条相关连线（3秒后恢复）`)}function e(g){return{group:"成组",ungroup:"解组",copy:"复制节点",paste:"粘贴节点",toFront:"层级前置",toBack:"层级后置",delete:"删除节点"}[g]||g}function i(g,h){a("✅ 画布初始化完成"),t(h),a("✅ 节点初始化完成，请右键节点菜单测试")}function t(g){const h=g.addNode({shape:"custom-circle",x:100,y:100,label:"开始",data:{description:"流程开始节点",owner:"张三",priority:"high"}}),F=g.addNode({shape:"custom-rect",x:300,y:100,label:"处理",data:{description:"执行业务处理",owner:"李四",priority:"medium"}}),S=g.addNode({shape:"custom-circle",x:500,y:100,label:"结束",data:{description:"流程结束",owner:"王五",priority:"low"}});g.addEdge({source:h,target:F,shape:"flow-edge",labels:[{attrs:{text:{text:"通过"}}}],data:{lineType:"normal",condition:'status === "approved"',description:"审批通过后的流转",isDefault:!1}}),g.addEdge({source:F,target:S,shape:"flow-edge",labels:[{attrs:{text:{text:"完成"}}}],data:{lineType:"normal",condition:"",description:"处理完成后结束",isDefault:!0}})}return(g,h)=>(u(),f("div",is,[n("div",as,[n("div",{class:"demo-slot-node-menu__log-header"},[h[1]||(h[1]=n("h4",null,"事件日志",-1)),n("button",{class:"demo-slot-node-menu__clear-btn",onClick:d,title:"清除日志"}," 清除 ")]),n("div",ds,[(u(!0),f(B,null,W(m.value,(F,S)=>(u(),f("div",{key:S,class:"demo-slot-node-menu__log-item"},D(F),1))),128))])]),n("div",cs,[c(U,{mode:"design","before-graph-init":s,onReady:i},{"node-menu":N(({node:F,isGroup:S,isMultiSelect:y,capabilities:b,designer:k,graph:T,onSelect:q})=>[n("div",{class:"node-context-menu",onClick:h[0]||(h[0]=Cn(()=>{},["stop"]))},[n("div",ps,[n("span",gs,D(v(F,S,y)),1)]),n("div",ms,[n("div",us,[h[2]||(h[2]=n("span",{class:"node-context-menu__info-label"},"节点名称:",-1)),n("span",fs,D(p(F)),1)]),n("div",hs,[h[3]||(h[3]=n("span",{class:"node-context-menu__info-label"},"节点类型:",-1)),n("span",_s,D(F.shape),1)]),y?(u(),f("div",vs,[h[4]||(h[4]=n("span",{class:"node-context-menu__info-label"},"选中数量:",-1)),n("span",bs,D((T==null?void 0:T.getSelectedCells().length)||0)+" 个",1)])):E("",!0)]),h[14]||(h[14]=n("div",{class:"node-context-menu__divider"},null,-1)),y&&b.canGroup?(u(),f("div",{key:0,class:"node-context-menu__item",onClick:L=>l("group",F,q)},[...h[5]||(h[5]=[n("span",{class:"node-context-menu__icon"},"📦",-1),n("span",{class:"node-context-menu__text"},"成组",-1),n("span",{class:"node-context-menu__shortcut"},"Ctrl+G",-1)])],8,xs)):E("",!0),S&&b.canGroup?(u(),f("div",{key:1,class:"node-context-menu__item",onClick:L=>l("ungroup",F,q)},[...h[6]||(h[6]=[n("span",{class:"node-context-menu__icon"},"📂",-1),n("span",{class:"node-context-menu__text"},"解组",-1),n("span",{class:"node-context-menu__shortcut"},"Ctrl+Shift+G",-1)])],8,ys)):E("",!0),(y||S)&&b.canGroup&&(b.canCopy||b.canPaste)?(u(),f("div",ws)):E("",!0),b.canCopy?(u(),f("div",{key:3,class:"node-context-menu__item",onClick:L=>l("copy",F,q)},[...h[7]||(h[7]=[n("span",{class:"node-context-menu__icon"},"📄",-1),n("span",{class:"node-context-menu__text"},"复制节点",-1),n("span",{class:"node-context-menu__shortcut"},"Ctrl+C",-1)])],8,ks)):E("",!0),b.canPaste?(u(),f("div",{key:4,class:"node-context-menu__item",onClick:L=>l("paste",F,q)},[...h[8]||(h[8]=[n("span",{class:"node-context-menu__icon"},"📋",-1),n("span",{class:"node-context-menu__text"},"粘贴节点",-1),n("span",{class:"node-context-menu__shortcut"},"Ctrl+V",-1)])],8,Ds)):E("",!0),(b.canCopy||b.canPaste)&&(b.canToFront||b.canToBack)?(u(),f("div",Cs)):E("",!0),b.canToFront?(u(),f("div",{key:6,class:"node-context-menu__item",onClick:L=>l("toFront",F,q)},[...h[9]||(h[9]=[n("span",{class:"node-context-menu__icon"},"⬆️",-1),n("span",{class:"node-context-menu__text"},"层级前置",-1)])],8,Ss)):E("",!0),b.canToBack?(u(),f("div",{key:7,class:"node-context-menu__item",onClick:L=>l("toBack",F,q)},[...h[10]||(h[10]=[n("span",{class:"node-context-menu__icon"},"⬇️",-1),n("span",{class:"node-context-menu__text"},"层级后置",-1)])],8,Ns)):E("",!0),(b.canToFront||b.canToBack)&&T?(u(),f("div",Fs)):E("",!0),T&&k?(u(),f("div",{key:9,class:"node-context-menu__item",onClick:L=>r(F,T)},[...h[11]||(h[11]=[n("span",{class:"node-context-menu__icon"},"🎯",-1),n("span",{class:"node-context-menu__text"},"居中显示",-1)])],8,$s)):E("",!0),T?(u(),f("div",{key:10,class:"node-context-menu__item",onClick:L=>o(F,T)},[...h[12]||(h[12]=[n("span",{class:"node-context-menu__icon"},"🔗",-1),n("span",{class:"node-context-menu__text"},"高亮连线",-1)])],8,Es)):E("",!0),b.canDelete?(u(),f("div",Ts)):E("",!0),b.canDelete?(u(),f("div",{key:12,class:"node-context-menu__item node-context-menu__item--danger",onClick:L=>l("delete",F,q)},[...h[13]||(h[13]=[n("span",{class:"node-context-menu__icon"},"🗑",-1),n("span",{class:"node-context-menu__text"},"删除节点",-1),n("span",{class:"node-context-menu__shortcut"},"Delete",-1)])],8,Ls)):E("",!0)])]),_:1})])]))}}),zs=O(Rs,[["__scopeId","data-v-a8bf47b7"]]),Ms=`<template>\r
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
import FlowDesignerLayout from '@/components/FlowDesigner/FlowDesignerLayout.vue'\r
import type { FlowDesigner, FlowDesignerOptions } from '@/components/FlowDesigner/core'\r
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
`,As={class:"demo-slot-edge-menu"},Is={class:"demo-slot-edge-menu__log"},Ps={class:"demo-slot-edge-menu__log-content"},Gs={class:"demo-slot-edge-menu__canvas"},Bs={class:"edge-context-menu__info"},Ws={class:"edge-context-menu__info-item"},Os={class:"edge-context-menu__info-value"},Hs={class:"edge-context-menu__info-item"},Us={class:"edge-context-menu__info-value"},Vs={class:"edge-context-menu__info-item"},Zs={class:"edge-context-menu__info-value"},js={class:"edge-context-menu__info-item"},Ys={class:"edge-context-menu__info-value"},qs=["onClick"],Xs=["onClick"],Js=["onClick"],Ks=["onClick"],Qs=["onClick"],nl=["onClick"],el=["onClick"],rl={key:0,class:"edge-context-menu__divider"},ol=["onClick"],tl=["onClick"],sl=["onClick"],ll={key:4,class:"edge-context-menu__divider"},il=["onClick"],al=P({__name:"demo-slot-edgeMenu",setup(C){const m=w([]);function a(y){const b=new Date().toLocaleTimeString();m.value.push(`[${b}] ${y}`),setTimeout(()=>{const k=document.querySelector(".demo-slot-edge-menu__log-content");k&&(k.scrollTop=k.scrollHeight)},0)}function d(){m.value=[]}function s(y){a("🔧 初始化自定义节点样式..."),K.registerNode("custom-circle",{inherit:"circle",width:100,height:100,attrs:{body:{fill:"#5F95FF",stroke:"#2563EB",strokeWidth:2},label:{fill:"#fff",fontSize:14,fontWeight:500}}},!0),K.registerNode("custom-rect",{inherit:"rect",width:140,height:70,attrs:{body:{fill:"#47C769",stroke:"#27AE60",strokeWidth:2,rx:8,ry:8},label:{fill:"#fff",fontSize:14,fontWeight:500}}},!0)}function p(y){var k,T;const b=y.getLabels();return b&&b.length>0&&((T=(k=b[0].attrs)==null?void 0:k.text)==null?void 0:T.text)||"无标签"}function v(y){const b=y.getSourceNode();if(b){const k=b.getProp("label");return k?String(k):b.id.substring(0,8)+"..."}return"未知"}function l(y){const b=y.getTargetNode();if(b){const k=b.getProp("label");return k?String(k):b.id.substring(0,8)+"..."}return"未知"}function r(y,b,k){a(`🖱️ 连线菜单: 删除连线 - ${p(b)}`),k(y)}function o(y,b){const k=p(y),T=prompt("请输入新的标签:",k==="无标签"?"":k);T!==null&&b&&(b.updateEdgeLabelText(y,T),a(`✏️ 编辑标签: ${k} → ${T}`))}function e(y,b){const k={normal:{name:"normal"},smooth:{name:"smooth"},rounded:{name:"rounded",args:{radius:10}}};y.setConnector(k[b]),a(`━ 样式修改: ${{normal:"直线",smooth:"平滑曲线",rounded:"圆角折线"}[b]} - ${p(y)}`)}function i(y,b,k){y.attr("line/stroke",b),y.attr("line/strokeWidth",2),a(`● 颜色修改: ${k} - ${p(y)}`)}function t(y,b){b.centerCell(y,{padding:100,animation:{duration:300,easing:"ease-in-out"}}),a(`🎯 居中显示连线: ${p(y)}`)}function g(y,b){const k=y.getSourceNode(),T=y.getTargetNode(),q=y.attr("line/stroke")||"#8c9bb5",L=y.attr("line/strokeWidth")||1.5;y.attr("line/stroke","#FF4D4F"),y.attr("line/strokeWidth",3),k&&(k.attr("body/stroke","#FF4D4F"),k.attr("body/strokeWidth",3)),T&&(T.attr("body/stroke","#FF4D4F"),T.attr("body/strokeWidth",3)),a(`✨ 高亮路径: ${v(y)} → ${l(y)}`),setTimeout(()=>{y.attr("line/stroke",q),y.attr("line/strokeWidth",L),k&&(k.attr("body/stroke","#27AE60"),k.attr("body/strokeWidth",2)),T&&(T.attr("body/stroke","#27AE60"),T.attr("body/strokeWidth",2)),a("⏰ 高亮已恢复")},3e3)}function h(y,b){const k=y.getSource(),T=y.getTarget();y.getLabels(),y.setSource(T),y.setTarget(k),a(`🔄 反转连线: ${v(y)} ⇄ ${l(y)}`)}function F(y,b){b=y.getGraph(),a("FlowDesigner 初始化完成"),a("✨ 将鼠标悬停在节点上查看自定义 Tooltip"),S(b)}function S(y){const b=y.addNode({shape:"custom-circle",x:100,y:100,label:"开始",data:{description:"流程开始节点",owner:"张三",priority:"high"}}),k=y.addNode({shape:"custom-rect",x:300,y:100,label:"处理",data:{description:"执行业务处理",owner:"李四",priority:"medium"}}),T=y.addNode({shape:"custom-circle",x:500,y:100,label:"结束",data:{description:"流程结束",owner:"王五",priority:"low"}});y.addEdge({source:b,target:k,shape:"flow-edge",labels:[{attrs:{text:{text:"通过"}}}],data:{lineType:"normal",condition:'status === "approved"',description:"审批通过后的流转",isDefault:!1}}),y.addEdge({source:k,target:T,shape:"flow-edge",labels:[{attrs:{text:{text:"完成"}}}],data:{lineType:"normal",condition:"",description:"处理完成后结束",isDefault:!0}})}return(y,b)=>(u(),f("div",As,[n("div",Is,[n("div",{class:"demo-slot-edge-menu__log-header"},[b[1]||(b[1]=n("h4",null,"事件日志",-1)),n("button",{class:"demo-slot-edge-menu__clear-btn",onClick:d,title:"清除日志"}," 清除 ")]),n("div",Ps,[(u(!0),f(B,null,W(m.value,(k,T)=>(u(),f("div",{key:T,class:"demo-slot-edge-menu__log-item"},D(k),1))),128))])]),n("div",Gs,[c(U,{mode:"design","before-graph-init":s,onReady:F},{"edge-menu":N(({edge:k,capabilities:T,designer:q,graph:L,onSelect:A})=>[n("div",{class:"edge-context-menu",onClick:b[0]||(b[0]=Cn(()=>{},["stop"]))},[b[17]||(b[17]=n("div",{class:"edge-context-menu__header"},[n("span",{class:"edge-context-menu__title"},"连线菜单")],-1)),n("div",Bs,[n("div",Ws,[b[2]||(b[2]=n("span",{class:"edge-context-menu__info-label"},"连线标签:",-1)),n("span",Os,D(p(k)),1)]),n("div",Hs,[b[3]||(b[3]=n("span",{class:"edge-context-menu__info-label"},"源节点:",-1)),n("span",Us,D(v(k)),1)]),n("div",Vs,[b[4]||(b[4]=n("span",{class:"edge-context-menu__info-label"},"目标节点:",-1)),n("span",Zs,D(l(k)),1)]),n("div",js,[b[5]||(b[5]=n("span",{class:"edge-context-menu__info-label"},"连线类型:",-1)),n("span",Ys,D(k.shape),1)])]),b[18]||(b[18]=n("div",{class:"edge-context-menu__divider"},null,-1)),n("div",{class:"edge-context-menu__item",onClick:Y=>o(k,q)},[...b[6]||(b[6]=[n("span",{class:"edge-context-menu__icon"},"✏️",-1),n("span",{class:"edge-context-menu__text"},"编辑标签",-1)])],8,qs),b[19]||(b[19]=n("div",{class:"edge-context-menu__divider"},null,-1)),n("div",{class:"edge-context-menu__item",onClick:Y=>e(k,"normal")},[...b[7]||(b[7]=[n("span",{class:"edge-context-menu__icon"},"━",-1),n("span",{class:"edge-context-menu__text"},"直线样式",-1)])],8,Xs),n("div",{class:"edge-context-menu__item",onClick:Y=>e(k,"smooth")},[...b[8]||(b[8]=[n("span",{class:"edge-context-menu__icon"},"〰️",-1),n("span",{class:"edge-context-menu__text"},"平滑曲线",-1)])],8,Js),n("div",{class:"edge-context-menu__item",onClick:Y=>e(k,"rounded")},[...b[9]||(b[9]=[n("span",{class:"edge-context-menu__icon"},"⌝",-1),n("span",{class:"edge-context-menu__text"},"圆角折线",-1)])],8,Ks),b[20]||(b[20]=n("div",{class:"edge-context-menu__divider"},null,-1)),n("div",{class:"edge-context-menu__item",onClick:Y=>i(k,"#1890ff","蓝色")},[...b[10]||(b[10]=[n("span",{class:"edge-context-menu__icon",style:{color:"#1890ff"}},"●",-1),n("span",{class:"edge-context-menu__text"},"蓝色连线",-1)])],8,Qs),n("div",{class:"edge-context-menu__item",onClick:Y=>i(k,"#52c41a","绿色")},[...b[11]||(b[11]=[n("span",{class:"edge-context-menu__icon",style:{color:"#52c41a"}},"●",-1),n("span",{class:"edge-context-menu__text"},"绿色连线",-1)])],8,nl),n("div",{class:"edge-context-menu__item",onClick:Y=>i(k,"#ff4d4f","红色")},[...b[12]||(b[12]=[n("span",{class:"edge-context-menu__icon",style:{color:"#ff4d4f"}},"●",-1),n("span",{class:"edge-context-menu__text"},"红色连线",-1)])],8,el),L?(u(),f("div",rl)):E("",!0),L?(u(),f("div",{key:1,class:"edge-context-menu__item",onClick:Y=>t(k,L)},[...b[13]||(b[13]=[n("span",{class:"edge-context-menu__icon"},"🎯",-1),n("span",{class:"edge-context-menu__text"},"居中显示",-1)])],8,ol)):E("",!0),L?(u(),f("div",{key:2,class:"edge-context-menu__item",onClick:Y=>g(k,L)},[...b[14]||(b[14]=[n("span",{class:"edge-context-menu__icon"},"✨",-1),n("span",{class:"edge-context-menu__text"},"高亮路径",-1)])],8,tl)):E("",!0),L?(u(),f("div",{key:3,class:"edge-context-menu__item",onClick:Y=>h(k,L)},[...b[15]||(b[15]=[n("span",{class:"edge-context-menu__icon"},"🔄",-1),n("span",{class:"edge-context-menu__text"},"反转连线",-1)])],8,sl)):E("",!0),T.canDelete?(u(),f("div",ll)):E("",!0),T.canDelete?(u(),f("div",{key:5,class:"edge-context-menu__item edge-context-menu__item--danger",onClick:Y=>r("delete",k,A)},[...b[16]||(b[16]=[n("span",{class:"edge-context-menu__icon"},"🗑",-1),n("span",{class:"edge-context-menu__text"},"删除连线",-1),n("span",{class:"edge-context-menu__shortcut"},"Delete",-1)])],8,il)):E("",!0)])]),_:1})])]))}}),dl=O(al,[["__scopeId","data-v-5b81f879"]]),cl=`<template>\r
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
import FlowDesignerLayout from '@/components/FlowDesigner/FlowDesignerLayout.vue'\r
import type { FlowDesigner, FlowDesignerOptions } from '@/components/FlowDesigner/core'\r
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
`,pl={class:"demo-slot-node-tooltip"},gl={class:"demo-slot-node-tooltip__log"},ml={class:"demo-slot-node-tooltip__log-content"},ul={key:0,class:"demo-slot-node-tooltip__log-empty"},fl={class:"demo-slot-node-tooltip__canvas"},hl={class:"my-node-tooltip",style:{color:"black"}},_l=P({__name:"demo-slot-nodeTooltip",setup(C){const m=w([]);let a=null,d=null;const s=wn({design:{showToolbar:!1,showNodePalette:!1,showPropertiesPanel:!1,showContextMenu:!1,canNodeTooltip:!0,canHoverNode:!0}});function p(e){const i=new Date().toLocaleTimeString("zh-CN",{hour12:!1});m.value.push(`[${i}] ${e}`),setTimeout(()=>{const t=document.querySelector(".demo-slot-node-tooltip__log-content");t&&(t.scrollTop=t.scrollHeight)},10)}function v(){m.value=[],p("日志已清除")}function l(e){a=e,d=a.getGraph(),p("FlowDesigner 初始化完成"),p("✨ 将鼠标悬停在节点上查看自定义 Tooltip"),r(d)}function r(e){if(!a)return;const i=e.addNode({shape:"custom-circle",x:100,y:100,label:"开始",data:{description:"流程开始节点",owner:"张三",priority:"high"}}),t=e.addNode({shape:"custom-rect",x:300,y:100,label:"处理",data:{description:"执行业务处理",owner:"李四",priority:"medium"}}),g=e.addNode({shape:"custom-circle",x:500,y:100,label:"结束",data:{description:"流程结束",owner:"王五",priority:"low"}});e.addEdge({source:i,target:t,shape:"flow-edge",labels:[{attrs:{text:{text:"通过"}}}],data:{lineType:"normal",condition:'status === "approved"',description:"审批通过后的流转",isDefault:!1}}),e.addEdge({source:t,target:g,shape:"flow-edge",labels:[{attrs:{text:{text:"完成"}}}],data:{lineType:"normal",condition:"",description:"处理完成后结束",isDefault:!0}})}function o({Graph:e}){e.registerNode("custom-circle",{inherit:"circle",width:100,height:100,attrs:{body:{fill:"#5F95FF",stroke:"#2563EB",strokeWidth:2},label:{fill:"#fff",fontSize:14,fontWeight:500}}},!0),e.registerNode("custom-rect",{inherit:"rect",width:140,height:70,attrs:{body:{fill:"#47C769",stroke:"#27AE60",strokeWidth:2,rx:8,ry:8},label:{fill:"#fff",fontSize:14,fontWeight:500}}},!0)}return(e,i)=>(u(),f("div",pl,[n("div",gl,[n("div",{class:"demo-slot-node-tooltip__log-header"},[i[0]||(i[0]=n("h4",null,"事件日志",-1)),n("button",{class:"demo-slot-node-tooltip__clear-btn",onClick:v,title:"清除日志"}," 清除 ")]),n("div",ml,[(u(!0),f(B,null,W(m.value,(t,g)=>(u(),f("div",{key:g,class:"demo-slot-node-tooltip__log-item"},D(t),1))),128)),m.value.length===0?(u(),f("div",ul," 将鼠标悬停在节点上以查看自定义 Tooltip ")):E("",!0)])]),n("div",fl,[c(U,{mode:"design","permission-config":s,"before-graph-init":o,onReady:l},{"node-tooltip":N(({node:t,data:g})=>[n("div",hl," node-tooltip插槽:"+D(g==null?void 0:g.label)+"--"+D(t.shape),1)]),_:1},8,["permission-config"])])]))}}),vl=O(_l,[["__scopeId","data-v-cfcafbd5"]]),bl=`<template>\r
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
import FlowDesignerLayout from '@/components/FlowDesigner/FlowDesignerLayout.vue'\r
import type { FlowDesigner } from '@/components/FlowDesigner/core/FlowDesigner'\r
import type { Graph, Node } from '@antv/x6'\r
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
`,xl={class:"demo-slot-edge-tooltip"},yl={class:"demo-slot-edge-tooltip__log"},wl={class:"demo-slot-edge-tooltip__log-content"},kl={key:0,class:"demo-slot-edge-tooltip__log-empty"},Dl={class:"demo-slot-edge-tooltip__canvas"},Cl={class:"my-edge-tooltip"},Sl=P({__name:"demo-slot-edgeTooltip",setup(C){const m=w([]);let a=null,d=null;const s=wn({design:{showToolbar:!1,showNodePalette:!1,showPropertiesPanel:!1,showContextMenu:!1,canEdgeTooltip:!0,canHoverEdge:!0}});function p(e){const i=new Date().toLocaleTimeString("zh-CN",{hour12:!1});m.value.push(`[${i}] ${e}`),setTimeout(()=>{const t=document.querySelector(".demo-slot-edge-tooltip__log-content");t&&(t.scrollTop=t.scrollHeight)},10)}function v(){m.value=[],p("日志已清除")}function l(e){a=e,d=a.getGraph(),p("FlowDesigner 初始化完成"),p("✨ 将鼠标悬停在连线上查看自定义 Tooltip"),r(d)}function r(e){if(!a)return;const i=e.addNode({shape:"custom-circle",x:100,y:100,label:"开始",data:{description:"流程开始节点",owner:"张三",priority:"high"}}),t=e.addNode({shape:"custom-rect",x:300,y:100,label:"处理",data:{description:"执行业务处理",owner:"李四",priority:"medium"}}),g=e.addNode({shape:"custom-circle",x:500,y:100,label:"结束",data:{description:"流程结束",owner:"王五",priority:"low"}});e.addEdge({source:i,target:t,shape:"flow-edge",labels:[{attrs:{text:{text:"通过"}}}],data:{lineType:"normal",condition:'status === "approved"',description:"审批通过后的流转",isDefault:!1}}),e.addEdge({source:t,target:g,shape:"flow-edge",labels:[{attrs:{text:{text:"完成"}}}],data:{lineType:"normal",condition:"",description:"处理完成后结束",isDefault:!0}})}function o({Graph:e}){e.registerNode("custom-circle",{inherit:"circle",width:100,height:100,attrs:{body:{fill:"#5F95FF",stroke:"#2563EB",strokeWidth:2},label:{fill:"#fff",fontSize:14,fontWeight:500}}},!0),e.registerNode("custom-rect",{inherit:"rect",width:140,height:70,attrs:{body:{fill:"#47C769",stroke:"#27AE60",strokeWidth:2,rx:8,ry:8},label:{fill:"#fff",fontSize:14,fontWeight:500}}},!0)}return(e,i)=>(u(),f("div",xl,[n("div",yl,[n("div",{class:"demo-slot-edge-tooltip__log-header"},[i[0]||(i[0]=n("h4",null,"事件日志",-1)),n("button",{class:"demo-slot-edge-tooltip__clear-btn",onClick:v,title:"清除日志"}," 清除 ")]),n("div",wl,[(u(!0),f(B,null,W(m.value,(t,g)=>(u(),f("div",{key:g,class:"demo-slot-edge-tooltip__log-item"},D(t),1))),128)),m.value.length===0?(u(),f("div",kl," 将鼠标悬停在连线上以查看自定义 Tooltip ")):E("",!0)])]),n("div",Dl,[c(U,{mode:"design","permission-config":s,"before-graph-init":o,onReady:l},{"edge-tooltip":N(({edge:t,data:g})=>[n("div",Cl," edge-tooltip插槽:"+D(g==null?void 0:g.label),1)]),_:1},8,["permission-config"])])]))}}),Nl=O(Sl,[["__scopeId","data-v-dbef45b5"]]),Fl=`<template>\r
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
import FlowDesignerLayout from '@/components/FlowDesigner/FlowDesignerLayout.vue'\r
\r
import type { FlowDesigner } from '@/components/FlowDesigner/core/FlowDesigner'\r
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
`,$l={class:"demo-slot-edge-tooltip"},El={class:"demo-slot-edge-tooltip__log"},Tl={class:"demo-slot-edge-tooltip__log-content"},Ll={key:0,class:"demo-slot-edge-tooltip__log-empty"},Rl={class:"demo-slot-edge-tooltip__canvas"},zl={class:"custom-edge-label__text"},Ml=P({__name:"demo-slot-edgeLabel",setup(C){const m=w([]);let a=null,d=null;const s=wn({design:{showToolbar:!1,showNodePalette:!1,showPropertiesPanel:!1,showContextMenu:!1,canEdgeTooltip:!0,canHoverEdge:!0}});function p(e){const i=new Date().toLocaleTimeString("zh-CN",{hour12:!1});m.value.push(`[${i}] ${e}`),setTimeout(()=>{const t=document.querySelector(".demo-slot-edge-tooltip__log-content");t&&(t.scrollTop=t.scrollHeight)},10)}function v(){m.value=[],p("日志已清除")}function l(e){a=e,d=a.getGraph(),p("FlowDesigner 初始化完成"),p("✨ 将鼠标悬停在连线上查看自定义 Tooltip"),r(d)}function r(e){if(!a)return;const i=e.addNode({shape:"custom-circle",x:100,y:100,label:"开始",data:{description:"流程开始节点",owner:"张三",priority:"high"}}),t=e.addNode({shape:"custom-rect",x:300,y:100,label:"处理",data:{description:"执行业务处理",owner:"李四",priority:"medium"}}),g=e.addNode({shape:"custom-circle",x:500,y:100,label:"结束",data:{description:"流程结束",owner:"王五",priority:"low"}});e.addEdge({source:i,target:t,shape:"flow-edge",labels:[{attrs:{text:{text:"通过"}}}],data:{lineType:"normal",condition:'status === "approved"',description:"审批通过后的流转",isDefault:!1}}),e.addEdge({source:t,target:g,shape:"flow-edge",labels:[{attrs:{text:{text:"完成"}}}],data:{lineType:"normal",condition:"",description:"处理完成后结束",isDefault:!0}})}function o({Graph:e}){e.registerNode("custom-circle",{inherit:"circle",width:100,height:100,attrs:{body:{fill:"#5F95FF",stroke:"#2563EB",strokeWidth:2},label:{fill:"#fff",fontSize:14,fontWeight:500}}},!0),e.registerNode("custom-rect",{inherit:"rect",width:140,height:70,attrs:{body:{fill:"#47C769",stroke:"#27AE60",strokeWidth:2,rx:8,ry:8},label:{fill:"#fff",fontSize:14,fontWeight:500}}},!0)}return(e,i)=>{const t=un("TagOutlined");return u(),f("div",$l,[n("div",El,[n("div",{class:"demo-slot-edge-tooltip__log-header"},[i[0]||(i[0]=n("h4",null,"事件日志",-1)),n("button",{class:"demo-slot-edge-tooltip__clear-btn",onClick:v,title:"清除日志"}," 清除 ")]),n("div",Tl,[(u(!0),f(B,null,W(m.value,(g,h)=>(u(),f("div",{key:h,class:"demo-slot-edge-tooltip__log-item"},D(g),1))),128)),m.value.length===0?(u(),f("div",Ll," 将鼠标悬停在连线上以查看自定义 Tooltip ")):E("",!0)])]),n("div",Rl,[c(U,{mode:"design","permission-config":s,"before-graph-init":o,onReady:l},{"edge-label":N(({edge:g,data:h})=>[n("div",{class:sn(["custom-edge-label",{"custom-edge-label-selected":g.getProp("_state")==="hover"||g.getProp("_state")==="selected"}])},[c(t,{class:"custom-edge-label__icon"}),n("span",zl,D(g.getProp("_state"))+"-"+D(h==null?void 0:h.label),1)],2)]),_:1},8,["permission-config"])])])}}}),Al=O(Ml,[["__scopeId","data-v-df6bcb0a"]]),Il=`<template>\r
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
import FlowDesignerLayout from '@/components/FlowDesigner/FlowDesignerLayout.vue'\r
\r
import type { FlowDesigner } from '@/components/FlowDesigner/core/FlowDesigner'\r
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
`,Pl={class:"demo-slot-palette"},Gl={class:"demo-slot-palette__log"},Bl={class:"demo-slot-palette__log-content"},Wl={class:"demo-slot-palette__canvas"},Ol={class:"custom-palette"},Hl={class:"custom-palette__section"},Ul=["onMousedown"],Vl={class:"custom-palette__item-info"},Zl={class:"custom-palette__item-label"},jl={class:"custom-palette__item-hint"},Yl={class:"cvn-task__body"},ql={class:"cvn-task__title"},Xl={class:"cvn-task__owner"},Jl={class:"cvn-notice","data-cvn-root":""},Kl={class:"cvn-notice__body"},Ql={class:"cvn-notice__title"},ni={class:"cvn-notice__desc"},ei=P({__name:"demo-slot-node",setup(C){const m=w(null),a=w(null),d=w("canvas");function s(t){t.length===0?(m.value=null,a.value=null,d.value="canvas",l("📌 显示画布配置")):t.length===1?t[0].isNode()?(m.value=t[0],a.value=null,d.value="node",l(`📌 选中节点: ${m.value.label||m.value.id}`)):t[0].isEdge()&&(m.value=null,a.value=t[0],d.value="edge",l(`📌 选中连线: ${a.value.id}`)):(m.value=null,a.value=null,d.value="none",l(`📌 选中 ${t.length} 个元素`))}const p=w([]),v=w([{type:"custom-nodetype1",label:"自定义任务",icon:"📋",hint:"用于任务处理",color:"#fa8c16",width:160,height:80,data:{owner:"测试1",detailPannelInfo:{clazz:"123333"}}},{type:"custom-nodetype2",label:"自定义通知",icon:"🔔",hint:"用于消息通知",color:"#52c41a",width:140,height:70,data:{owner:"测试222"}}]);function l(t){const g=new Date().toLocaleTimeString();p.value.push(`[${g}] ${t}`)}function r(){p.value=[]}function o(t){l("🔧 beforeGraphInit: 开始注册自定义节点")}function e(t,g){l("✅ 画布初始化完成"),l("🎨 自定义节点面板已渲染"),l("💡 提示: 点击左侧节点拖拽到画布")}function i(t,g,h){l(`🎯 开始拖拽: ${g.label}`),h(t,{shape:"common-vue-node",label:g.label,width:g.width,height:g.height,data:rn({nodeType:g.type},g.data)})}return(t,g)=>(u(),f("div",Pl,[n("div",Gl,[n("div",{class:"demo-slot-palette__log-header"},[g[0]||(g[0]=n("h4",null,"事件日志",-1)),n("button",{class:"demo-slot-palette__clear-btn",onClick:r,title:"清除日志"}," 清除 ")]),n("div",Bl,[(u(!0),f(B,null,W(p.value,(h,F)=>(u(),f("div",{key:F,class:"demo-slot-palette__log-item"},D(h),1))),128))])]),n("div",Wl,[c(U,{mode:"design","before-graph-init":o,onReady:e,onSelectionChange:s},{palette:N(({onStartDrag:h})=>[n("div",Ol,[g[2]||(g[2]=n("div",{class:"custom-palette__header"},[n("h3",{class:"custom-palette__title"},"自定义节点"),n("span",{class:"custom-palette__desc"},"拖拽到画布")],-1)),n("div",Hl,[g[1]||(g[1]=n("div",{class:"custom-palette__section-title"},"基础节点",-1)),(u(!0),f(B,null,W(v.value,F=>(u(),f("div",{key:F.type,class:"custom-palette__item",onMousedown:S=>i(S,F,h)},[n("div",{class:"custom-palette__item-icon",style:an({background:F.color})},D(F.icon),5),n("div",Vl,[n("div",Zl,D(F.label),1),n("div",jl,D(F.hint),1)])],40,Ul))),128))])])]),"node-custom-nodetype1":N(({node:h,graph:F,data:S,label:y,state:b})=>{var k;return[n("div",{class:sn(["cvn-task",{"cvn-task--selected":(h==null?void 0:h.id)==((k=m.value)==null?void 0:k.id)}]),"data-cvn-root":""},[g[3]||(g[3]=n("div",{class:"cvn-task__bar"},null,-1)),n("div",Yl,[n("div",ql,D(y||"自定义vue插槽节点1"),1),n("div",Xl,"负责人："+D(S.owner||"未指定")+" state: "+D(b),1)])],2)]}),"node-custom-nodetype2":N(({node:h,graph:F,data:S,state:y})=>[n("div",Jl,[g[4]||(g[4]=n("div",{class:"cvn-notice__icon"},"🔔",-1)),n("div",Kl,[n("div",Ql,D(S.label||"自定义vue插槽节点2"),1),n("div",ni,"通知类型节点 state: "+D(y),1)])])]),_:1})])]))}}),ri=O(ei,[["__scopeId","data-v-70481d34"]]),oi=`<template>\r
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
import FlowDesignerLayout from '@/components/FlowDesigner/FlowDesignerLayout.vue'\r
import type { FlowDesigner, FlowDesignerOptions } from '@/components/FlowDesigner/core'\r
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
\r
  // 使用 palette 插槽提供的 onStartDrag 函数\r
  // 参数：(event, nodeConfig)\r
  // nodeConfig 是 X6 Node 的配置对象，包含所有节点属性\r
  onStartDrag(e, {\r
    shape: 'common-vue-node',   // X6 节点类型\r
    label: nodeType.label,      // 节点标签（顶级属性）\r
    width: nodeType.width,      // 节点宽度（顶级属性）\r
    height: nodeType.height,    // 节点高度（顶级属性）\r
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
`,ti={class:"demo-permission-layout"},si={class:"permission-panel"},li={class:"permission-panel__content"},ii={class:"permission-group"},ai={class:"permission-list"},di={class:"permission-item"},ci={class:"permission-item"},pi={class:"permission-item"},gi={class:"permission-item"},mi={class:"permission-item"},ui={class:"permission-item"},fi={class:"permission-group"},hi={class:"permission-list"},_i={class:"permission-item"},vi={class:"permission-item"},bi={class:"permission-item"},xi={class:"permission-item"},yi={class:"permission-item"},wi={class:"permission-item"},ki={class:"permission-item"},Di={class:"permission-item"},Ci={class:"permission-item"},Si={class:"permission-group"},Ni={class:"permission-list"},Fi={class:"permission-item"},$i={class:"permission-item"},Ei={class:"permission-item"},Ti={class:"permission-item"},Li={class:"permission-item"},Ri={class:"permission-group"},zi={class:"permission-list"},Mi={class:"permission-item"},Ai={class:"permission-item"},Ii={class:"permission-item"},Pi={class:"permission-item"},Gi={class:"permission-group"},Bi={class:"permission-list"},Wi={class:"permission-item"},Oi={class:"permission-item"},Hi={class:"permission-group"},Ui={class:"permission-list"},Vi={class:"permission-item"},Zi={class:"permission-item"},ji={class:"permission-group"},Yi={class:"permission-list"},qi={class:"permission-item"},Xi={class:"permission-item"},Ji={class:"permission-item"},Ki={class:"permission-item"},Qi={class:"permission-group"},na={class:"permission-list"},ea={class:"permission-item"},ra={class:"permission-item"},oa={class:"permission-item"},ta={class:"permission-item"},sa={class:"designer-container"},la=P({__name:"demo-permission-01",setup(C,{expose:m}){const a=w(null),d=w("design"),s=wn({design:{showToolbar:!0,showNodePalette:!0,showPropertiesPanel:!0,showContextMenu:!0,showMinimap:!0,showSearch:!0,canDrag:!0,canConnect:!0,canDelete:!0,canCopy:!0,canPaste:!0,canGroup:!0,canToFront:!0,canToBack:!0,canAddNode:!0,canMultipleSelect:!0,canSelectAll:!0,canAlign:!0,canAlignLeft:!0,canAlignRight:!0,canAlignTop:!0,canAlignBottom:!0,canImport:!0,canExport:!0,canUndo:!0,canRedo:!0,canZoom:!0,canPan:!0,canFitView:!0,canResetView:!0,canHoverNode:!0,canHoverEdge:!0,canSelectNode:!0,canSelectEdge:!0,canNodeTooltip:!0,canEdgeTooltip:!0}});function p(l){if(hn)try{l.load(hn)}catch(r){ln.error("加载失败")}}function v(l){ln.success(`已切换至${{design:"设计",readonly:"只读",preview:"预览"}[l]}模式`),d.value=l}return m({layoutRef:a}),(l,r)=>{const o=un("a-checkbox");return u(),f("div",ti,[n("div",si,[r[80]||(r[80]=n("div",{class:"permission-panel__header"},[n("h3",{class:"permission-panel__title"},"权限配置"),n("span",{class:"permission-panel__mode"},"Design 模式")],-1)),n("div",li,[n("div",ii,[r[42]||(r[42]=n("h4",{class:"permission-group__title"},"🎨 界面显示",-1)),n("div",ai,[n("label",di,[c(o,{checked:s.design.showToolbar,"onUpdate:checked":r[0]||(r[0]=e=>s.design.showToolbar=e)},null,8,["checked"]),r[36]||(r[36]=n("span",{class:"permission-item__label"},"显示工具栏",-1))]),n("label",ci,[c(o,{checked:s.design.showNodePalette,"onUpdate:checked":r[1]||(r[1]=e=>s.design.showNodePalette=e)},null,8,["checked"]),r[37]||(r[37]=n("span",{class:"permission-item__label"},"显示节点面板",-1))]),n("label",pi,[c(o,{checked:s.design.showPropertiesPanel,"onUpdate:checked":r[2]||(r[2]=e=>s.design.showPropertiesPanel=e)},null,8,["checked"]),r[38]||(r[38]=n("span",{class:"permission-item__label"},"显示属性面板",-1))]),n("label",gi,[c(o,{checked:s.design.showContextMenu,"onUpdate:checked":r[3]||(r[3]=e=>s.design.showContextMenu=e)},null,8,["checked"]),r[39]||(r[39]=n("span",{class:"permission-item__label"},"显示右键菜单",-1))]),n("label",mi,[c(o,{checked:s.design.showMinimap,"onUpdate:checked":r[4]||(r[4]=e=>s.design.showMinimap=e)},null,8,["checked"]),r[40]||(r[40]=n("span",{class:"permission-item__label"},"显示小地图",-1))]),n("label",ui,[c(o,{checked:s.design.showSearch,"onUpdate:checked":r[5]||(r[5]=e=>s.design.showSearch=e)},null,8,["checked"]),r[41]||(r[41]=n("span",{class:"permission-item__label"},"显示搜索框",-1))])])]),n("div",fi,[r[52]||(r[52]=n("h4",{class:"permission-group__title"},"✏️ 编辑操作",-1)),n("div",hi,[n("label",_i,[c(o,{checked:s.design.canAddNode,"onUpdate:checked":r[6]||(r[6]=e=>s.design.canAddNode=e)},null,8,["checked"]),r[43]||(r[43]=n("span",{class:"permission-item__label"},"添加节点",-1))]),n("label",vi,[c(o,{checked:s.design.canDrag,"onUpdate:checked":r[7]||(r[7]=e=>s.design.canDrag=e)},null,8,["checked"]),r[44]||(r[44]=n("span",{class:"permission-item__label"},"拖动节点",-1))]),n("label",bi,[c(o,{checked:s.design.canConnect,"onUpdate:checked":r[8]||(r[8]=e=>s.design.canConnect=e)},null,8,["checked"]),r[45]||(r[45]=n("span",{class:"permission-item__label"},"创建连线",-1))]),n("label",xi,[c(o,{checked:s.design.canDelete,"onUpdate:checked":r[9]||(r[9]=e=>s.design.canDelete=e)},null,8,["checked"]),r[46]||(r[46]=n("span",{class:"permission-item__label"},"删除元素",-1))]),n("label",yi,[c(o,{checked:s.design.canCopy,"onUpdate:checked":r[10]||(r[10]=e=>s.design.canCopy=e)},null,8,["checked"]),r[47]||(r[47]=n("span",{class:"permission-item__label"},"复制",-1))]),n("label",wi,[c(o,{checked:s.design.canPaste,"onUpdate:checked":r[11]||(r[11]=e=>s.design.canPaste=e)},null,8,["checked"]),r[48]||(r[48]=n("span",{class:"permission-item__label"},"粘贴",-1))]),n("label",ki,[c(o,{checked:s.design.canGroup,"onUpdate:checked":r[12]||(r[12]=e=>s.design.canGroup=e)},null,8,["checked"]),r[49]||(r[49]=n("span",{class:"permission-item__label"},"节点成组",-1))]),n("label",Di,[c(o,{checked:s.design.canToFront,"onUpdate:checked":r[13]||(r[13]=e=>s.design.canToFront=e)},null,8,["checked"]),r[50]||(r[50]=n("span",{class:"permission-item__label"},"层级前置",-1))]),n("label",Ci,[c(o,{checked:s.design.canToBack,"onUpdate:checked":r[14]||(r[14]=e=>s.design.canToBack=e)},null,8,["checked"]),r[51]||(r[51]=n("span",{class:"permission-item__label"},"层级后置",-1))])])]),n("div",Si,[r[58]||(r[58]=n("h4",{class:"permission-group__title"},"📐 对齐操作",-1)),n("div",Ni,[n("label",Fi,[c(o,{checked:s.design.canAlign,"onUpdate:checked":r[15]||(r[15]=e=>s.design.canAlign=e)},null,8,["checked"]),r[53]||(r[53]=n("span",{class:"permission-item__label"},"对齐总开关",-1))]),n("label",$i,[c(o,{checked:s.design.canAlignLeft,"onUpdate:checked":r[16]||(r[16]=e=>s.design.canAlignLeft=e)},null,8,["checked"]),r[54]||(r[54]=n("span",{class:"permission-item__label"},"左对齐",-1))]),n("label",Ei,[c(o,{checked:s.design.canAlignRight,"onUpdate:checked":r[17]||(r[17]=e=>s.design.canAlignRight=e)},null,8,["checked"]),r[55]||(r[55]=n("span",{class:"permission-item__label"},"右对齐",-1))]),n("label",Ti,[c(o,{checked:s.design.canAlignTop,"onUpdate:checked":r[18]||(r[18]=e=>s.design.canAlignTop=e)},null,8,["checked"]),r[56]||(r[56]=n("span",{class:"permission-item__label"},"上对齐",-1))]),n("label",Li,[c(o,{checked:s.design.canAlignBottom,"onUpdate:checked":r[19]||(r[19]=e=>s.design.canAlignBottom=e)},null,8,["checked"]),r[57]||(r[57]=n("span",{class:"permission-item__label"},"下对齐",-1))])])]),n("div",Ri,[r[63]||(r[63]=n("h4",{class:"permission-group__title"},"🎯 选择操作",-1)),n("div",zi,[n("label",Mi,[c(o,{checked:s.design.canSelectNode,"onUpdate:checked":r[20]||(r[20]=e=>s.design.canSelectNode=e)},null,8,["checked"]),r[59]||(r[59]=n("span",{class:"permission-item__label"},"选中节点",-1))]),n("label",Ai,[c(o,{checked:s.design.canSelectEdge,"onUpdate:checked":r[21]||(r[21]=e=>s.design.canSelectEdge=e)},null,8,["checked"]),r[60]||(r[60]=n("span",{class:"permission-item__label"},"选中连线",-1))]),n("label",Ii,[c(o,{checked:s.design.canMultipleSelect,"onUpdate:checked":r[22]||(r[22]=e=>s.design.canMultipleSelect=e)},null,8,["checked"]),r[61]||(r[61]=n("span",{class:"permission-item__label"},"多选/框选",-1))]),n("label",Pi,[c(o,{checked:s.design.canSelectAll,"onUpdate:checked":r[23]||(r[23]=e=>s.design.canSelectAll=e)},null,8,["checked"]),r[62]||(r[62]=n("span",{class:"permission-item__label"},"全选",-1))])])]),n("div",Gi,[r[66]||(r[66]=n("h4",{class:"permission-group__title"},"📦 导入导出",-1)),n("div",Bi,[n("label",Wi,[c(o,{checked:s.design.canImport,"onUpdate:checked":r[24]||(r[24]=e=>s.design.canImport=e)},null,8,["checked"]),r[64]||(r[64]=n("span",{class:"permission-item__label"},"导入数据",-1))]),n("label",Oi,[c(o,{checked:s.design.canExport,"onUpdate:checked":r[25]||(r[25]=e=>s.design.canExport=e)},null,8,["checked"]),r[65]||(r[65]=n("span",{class:"permission-item__label"},"导出数据",-1))])])]),n("div",Hi,[r[69]||(r[69]=n("h4",{class:"permission-group__title"},"⏱️ 历史操作",-1)),n("div",Ui,[n("label",Vi,[c(o,{checked:s.design.canUndo,"onUpdate:checked":r[26]||(r[26]=e=>s.design.canUndo=e)},null,8,["checked"]),r[67]||(r[67]=n("span",{class:"permission-item__label"},"撤销",-1))]),n("label",Zi,[c(o,{checked:s.design.canRedo,"onUpdate:checked":r[27]||(r[27]=e=>s.design.canRedo=e)},null,8,["checked"]),r[68]||(r[68]=n("span",{class:"permission-item__label"},"重做",-1))])])]),n("div",ji,[r[74]||(r[74]=n("h4",{class:"permission-group__title"},"👁️ 视图操作",-1)),n("div",Yi,[n("label",qi,[c(o,{checked:s.design.canZoom,"onUpdate:checked":r[28]||(r[28]=e=>s.design.canZoom=e)},null,8,["checked"]),r[70]||(r[70]=n("span",{class:"permission-item__label"},"缩放画布",-1))]),n("label",Xi,[c(o,{checked:s.design.canPan,"onUpdate:checked":r[29]||(r[29]=e=>s.design.canPan=e)},null,8,["checked"]),r[71]||(r[71]=n("span",{class:"permission-item__label"},"拖拽画布",-1))]),n("label",Ji,[c(o,{checked:s.design.canFitView,"onUpdate:checked":r[30]||(r[30]=e=>s.design.canFitView=e)},null,8,["checked"]),r[72]||(r[72]=n("span",{class:"permission-item__label"},"适应窗口",-1))]),n("label",Ki,[c(o,{checked:s.design.canResetView,"onUpdate:checked":r[31]||(r[31]=e=>s.design.canResetView=e)},null,8,["checked"]),r[73]||(r[73]=n("span",{class:"permission-item__label"},"重置视图",-1))])])]),n("div",Qi,[r[79]||(r[79]=n("h4",{class:"permission-group__title"},"💬 交互反馈",-1)),n("div",na,[n("label",ea,[c(o,{checked:s.design.canHoverNode,"onUpdate:checked":r[32]||(r[32]=e=>s.design.canHoverNode=e)},null,8,["checked"]),r[75]||(r[75]=n("span",{class:"permission-item__label"},"节点 Hover 高亮",-1))]),n("label",ra,[c(o,{checked:s.design.canHoverEdge,"onUpdate:checked":r[33]||(r[33]=e=>s.design.canHoverEdge=e)},null,8,["checked"]),r[76]||(r[76]=n("span",{class:"permission-item__label"},"连线 Hover 高亮",-1))]),n("label",oa,[c(o,{checked:s.design.canNodeTooltip,"onUpdate:checked":r[34]||(r[34]=e=>s.design.canNodeTooltip=e)},null,8,["checked"]),r[77]||(r[77]=n("span",{class:"permission-item__label"},"节点 Tooltip",-1))]),n("label",ta,[c(o,{checked:s.design.canEdgeTooltip,"onUpdate:checked":r[35]||(r[35]=e=>s.design.canEdgeTooltip=e)},null,8,["checked"]),r[78]||(r[78]=n("span",{class:"permission-item__label"},"连线 Tooltip",-1))])])])])]),n("div",sa,[c(U,{class:"flow-designer-test",ref_key:"layoutRef",ref:a,mode:d.value,"permission-config":s,onReady:p,onModeChange:v},{toolbar:N(e=>[c(In,{"zoom-percent":e.zoomPercent,"has-selection":e.hasSelection,"can-paste":e.canPaste,"can-group":e.canGroup,"can-ungroup":e.canUngroup,"can-undo":e.canUndo,"can-redo":e.canRedo,"designer-mode":e.currentMode,onUndo:e.onUndo,onRedo:e.onRedo,onZoomIn:e.onZoomIn,onZoomOut:e.onZoomOut,onZoomTo:e.onZoomTo,onFitView:e.onFitView,onResetView:e.onResetView,onCopy:e.onCopy,onPaste:e.onPaste,onToFront:e.onToFront,onToBack:e.onToBack,onAlignLeft:e.onAlignLeft,onAlignRight:e.onAlignRight,onAlignTop:e.onAlignTop,onAlignBottom:e.onAlignBottom,onGroup:e.onGroup,onUngroup:e.onUngroup,onExport:e.onExport,onImport:e.onImport,onOpenSettings:e.onOpenSettings,onModeChange:e.onModeChange},null,8,["zoom-percent","has-selection","can-paste","can-group","can-ungroup","can-undo","can-redo","designer-mode","onUndo","onRedo","onZoomIn","onZoomOut","onZoomTo","onFitView","onResetView","onCopy","onPaste","onToFront","onToBack","onAlignLeft","onAlignRight","onAlignTop","onAlignBottom","onGroup","onUngroup","onExport","onImport","onOpenSettings","onModeChange"])]),palette:N(e=>[c(An,{onStartDrag:e.onStartDrag},null,8,["onStartDrag"])]),properties:N(()=>[c(Mn)]),_:1},8,["mode","permission-config"])])])}}}),ia=O(la,[["__scopeId","data-v-54e83f1b"]]),aa=`<template>\r
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
import { FlowDesigner } from '@/components/FlowDesigner/core'\r
import FlowDesignerLayout from '@/components/FlowDesigner/FlowDesignerLayout.vue'\r
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
`,da={class:"demo-permission-layout"},ca={class:"designer-container"},pa=P({__name:"demo-permission-readonly",setup(C,{expose:m}){const a=w(null),d=w("readonly"),s=wn({design:{},readonly:{showToolbar:!1,showNodePalette:!1,canAddNode:!1,canDrag:!1,canConnect:!1,canDelete:!1,canSelectEdge:!1}});function p(l){if(hn)try{l.load(hn)}catch(r){ln.error("加载失败")}}function v(l){ln.success(`已切换至${{design:"设计",readonly:"只读",preview:"预览"}[l]}模式`),d.value=l}return m({layoutRef:a}),(l,r)=>(u(),f("div",da,[n("div",ca,[c(U,{class:"flow-designer-test",ref_key:"layoutRef",ref:a,mode:d.value,"permission-config":s,onReady:p,onModeChange:v},{toolbar:N(o=>[c(In,{"zoom-percent":o.zoomPercent,"has-selection":o.hasSelection,"can-paste":o.canPaste,"can-group":o.canGroup,"can-ungroup":o.canUngroup,"can-undo":o.canUndo,"can-redo":o.canRedo,"designer-mode":o.currentMode,onUndo:o.onUndo,onRedo:o.onRedo,onZoomIn:o.onZoomIn,onZoomOut:o.onZoomOut,onZoomTo:o.onZoomTo,onFitView:o.onFitView,onResetView:o.onResetView,onCopy:o.onCopy,onPaste:o.onPaste,onToFront:o.onToFront,onToBack:o.onToBack,onAlignLeft:o.onAlignLeft,onAlignRight:o.onAlignRight,onAlignTop:o.onAlignTop,onAlignBottom:o.onAlignBottom,onGroup:o.onGroup,onUngroup:o.onUngroup,onExport:o.onExport,onImport:o.onImport,onOpenSettings:o.onOpenSettings,onModeChange:o.onModeChange},null,8,["zoom-percent","has-selection","can-paste","can-group","can-ungroup","can-undo","can-redo","designer-mode","onUndo","onRedo","onZoomIn","onZoomOut","onZoomTo","onFitView","onResetView","onCopy","onPaste","onToFront","onToBack","onAlignLeft","onAlignRight","onAlignTop","onAlignBottom","onGroup","onUngroup","onExport","onImport","onOpenSettings","onModeChange"])]),palette:N(o=>[c(An,{onStartDrag:o.onStartDrag},null,8,["onStartDrag"])]),properties:N(()=>[c(Mn)]),_:1},8,["mode","permission-config"])])]))}}),ga=O(pa,[["__scopeId","data-v-df893009"]]),ma=`<template>\r
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
import { FlowDesigner } from '@/components/FlowDesigner/core'\r
import FlowDesignerLayout from '@/components/FlowDesigner/FlowDesignerLayout.vue'\r
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
`,ua={class:"demo-permission-layout"},fa={class:"designer-container"},ha=P({__name:"demo-permission-preview",setup(C,{expose:m}){const a=w(null),d=w("preview"),s=wn({design:{},readonly:{},preview:{showToolbar:!1,showNodePalette:!1,showPropertiesPanel:!1,showContextMenu:!1,showMinimap:!0,canDrag:!1,canConnect:!1,canDelete:!1,canCopy:!1,canPaste:!1,canGroup:!1,canToFront:!1,canToBack:!1,canAddNode:!1,canMultipleSelect:!1,canSelectAll:!1,canAlign:!1,canAlignLeft:!1,canAlignRight:!1,canAlignTop:!1,canAlignBottom:!1,canImport:!1,canExport:!1,canUndo:!1,canRedo:!1,canZoom:!0,canPan:!0,canFitView:!0,canResetView:!0,canHoverNode:!1,canHoverEdge:!1,canSelectNode:!1,canSelectEdge:!1,canNodeTooltip:!1,canEdgeTooltip:!1}});function p(l){if(hn)try{l.load(hn)}catch(r){ln.error("加载失败")}}function v(l){ln.success(`已切换至${{design:"设计",readonly:"只读",preview:"预览"}[l]}模式`),d.value=l}return m({layoutRef:a}),(l,r)=>(u(),f("div",ua,[n("div",fa,[c(U,{class:"flow-designer-test",ref_key:"layoutRef",ref:a,mode:d.value,"permission-config":s,onReady:p,onModeChange:v},{toolbar:N(o=>[c(In,{"zoom-percent":o.zoomPercent,"has-selection":o.hasSelection,"can-paste":o.canPaste,"can-group":o.canGroup,"can-ungroup":o.canUngroup,"can-undo":o.canUndo,"can-redo":o.canRedo,"designer-mode":o.currentMode,onUndo:o.onUndo,onRedo:o.onRedo,onZoomIn:o.onZoomIn,onZoomOut:o.onZoomOut,onZoomTo:o.onZoomTo,onFitView:o.onFitView,onResetView:o.onResetView,onCopy:o.onCopy,onPaste:o.onPaste,onToFront:o.onToFront,onToBack:o.onToBack,onAlignLeft:o.onAlignLeft,onAlignRight:o.onAlignRight,onAlignTop:o.onAlignTop,onAlignBottom:o.onAlignBottom,onGroup:o.onGroup,onUngroup:o.onUngroup,onExport:o.onExport,onImport:o.onImport,onOpenSettings:o.onOpenSettings,onModeChange:o.onModeChange},null,8,["zoom-percent","has-selection","can-paste","can-group","can-ungroup","can-undo","can-redo","designer-mode","onUndo","onRedo","onZoomIn","onZoomOut","onZoomTo","onFitView","onResetView","onCopy","onPaste","onToFront","onToBack","onAlignLeft","onAlignRight","onAlignTop","onAlignBottom","onGroup","onUngroup","onExport","onImport","onOpenSettings","onModeChange"])]),palette:N(o=>[c(An,{onStartDrag:o.onStartDrag},null,8,["onStartDrag"])]),properties:N(()=>[c(Mn)]),_:1},8,["mode","permission-config"])])]))}}),_a=O(ha,[["__scopeId","data-v-a7f065c5"]]),va=`<template>\r
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
import { FlowDesigner } from '@/components/FlowDesigner/core'\r
import FlowDesignerLayout from '@/components/FlowDesigner/FlowDesignerLayout.vue'\r
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
`,ba={class:"demo-permission-layout"},xa={class:"permission-panel"},ya={class:"permission-panel__content"},wa={class:"permission-group"},ka={class:"permission-list"},Da={class:"permission-item"},Ca={class:"permission-item"},Sa={class:"permission-item"},Na={class:"permission-item"},Fa={class:"permission-item"},$a={class:"permission-group"},Ea={class:"permission-list"},Ta={class:"permission-item"},La={class:"permission-item"},Ra={class:"permission-item"},za={class:"permission-item"},Ma={class:"permission-item"},Aa={class:"permission-item"},Ia={class:"permission-item"},Pa={class:"permission-item"},Ga={class:"permission-item"},Ba={class:"permission-group"},Wa={class:"permission-list"},Oa={class:"permission-item"},Ha={class:"permission-item"},Ua={class:"permission-item"},Va={class:"permission-item"},Za={class:"permission-item"},ja={class:"permission-group"},Ya={class:"permission-list"},qa={class:"permission-item"},Xa={class:"permission-item"},Ja={class:"permission-item"},Ka={class:"permission-item"},Qa={class:"permission-group"},nd={class:"permission-list"},ed={class:"permission-item"},rd={class:"permission-item"},od={class:"permission-group"},td={class:"permission-list"},sd={class:"permission-item"},ld={class:"permission-item"},id={class:"permission-group"},ad={class:"permission-list"},dd={class:"permission-item"},cd={class:"permission-item"},pd={class:"permission-item"},gd={class:"permission-item"},md={class:"permission-group"},ud={class:"permission-list"},fd={class:"permission-item"},hd={class:"permission-item"},_d={class:"permission-item"},vd={class:"permission-item"},bd={class:"designer-container"},xd=P({__name:"demo-permission-getPermission",setup(C,{expose:m}){const a=w(null),d=w("design"),s=wn({design:{showToolbar:!0,showNodePalette:!0,showPropertiesPanel:!0,showContextMenu:!0,showMinimap:!0,canDrag:!0,canConnect:!0,canDelete:!0,canCopy:!0,canPaste:!0,canGroup:!0,canToFront:!0,canToBack:!0,canAddNode:!0,canMultipleSelect:!0,canSelectAll:!0,canAlign:!0,canAlignLeft:!0,canAlignRight:!0,canAlignTop:!0,canAlignBottom:!0,canImport:!0,canExport:!0,canUndo:!0,canRedo:!0,canZoom:!0,canPan:!0,canFitView:!0,canResetView:!0,canHoverNode:!0,canHoverEdge:!0,canSelectNode:!0,canSelectEdge:!0,canNodeTooltip:!0,canEdgeTooltip:!0}}),p=w("admin"),v=o=>{const e={canSelectNode:!0,canZoom:!0,canPan:!0};return p.value==="admin"?pn(rn({},e),{canAddNode:!1,canDrag:!0,canDelete:!0}):p.value==="editor"?pn(rn({},e),{canAddNode:!0,canDrag:!0,canDelete:!1}):pn(rn({},e),{canAddNode:!1,canDrag:!1})};function l(o){if(hn)try{o.load(hn)}catch(e){ln.error("加载失败")}}function r(o){ln.success(`已切换至${{design:"设计",readonly:"只读",preview:"预览"}[o]}模式`),d.value=o}return m({layoutRef:a}),(o,e)=>{const i=un("a-checkbox");return u(),f("div",ba,[n("div",xa,[e[78]||(e[78]=n("div",{class:"permission-panel__header"},[n("h3",{class:"permission-panel__title"},"权限配置"),n("span",{class:"permission-panel__mode"},"Design 模式"),n("span",{class:"permission-panel__mode",style:{color:"red"}},"此处即使配置了design权限也会完全失效，因为使用了getPermissions 函数完全接管权限计算")],-1)),n("div",ya,[n("div",wa,[e[40]||(e[40]=n("h4",{class:"permission-group__title"},"🎨 界面显示",-1)),n("div",ka,[n("label",Da,[c(i,{checked:s.design.showToolbar,"onUpdate:checked":e[0]||(e[0]=t=>s.design.showToolbar=t)},null,8,["checked"]),e[35]||(e[35]=n("span",{class:"permission-item__label"},"显示工具栏",-1))]),n("label",Ca,[c(i,{checked:s.design.showNodePalette,"onUpdate:checked":e[1]||(e[1]=t=>s.design.showNodePalette=t)},null,8,["checked"]),e[36]||(e[36]=n("span",{class:"permission-item__label"},"显示节点面板",-1))]),n("label",Sa,[c(i,{checked:s.design.showPropertiesPanel,"onUpdate:checked":e[2]||(e[2]=t=>s.design.showPropertiesPanel=t)},null,8,["checked"]),e[37]||(e[37]=n("span",{class:"permission-item__label"},"显示属性面板",-1))]),n("label",Na,[c(i,{checked:s.design.showContextMenu,"onUpdate:checked":e[3]||(e[3]=t=>s.design.showContextMenu=t)},null,8,["checked"]),e[38]||(e[38]=n("span",{class:"permission-item__label"},"显示右键菜单",-1))]),n("label",Fa,[c(i,{checked:s.design.showMinimap,"onUpdate:checked":e[4]||(e[4]=t=>s.design.showMinimap=t)},null,8,["checked"]),e[39]||(e[39]=n("span",{class:"permission-item__label"},"显示小地图",-1))])])]),n("div",$a,[e[50]||(e[50]=n("h4",{class:"permission-group__title"},"✏️ 编辑操作",-1)),n("div",Ea,[n("label",Ta,[c(i,{checked:s.design.canAddNode,"onUpdate:checked":e[5]||(e[5]=t=>s.design.canAddNode=t)},null,8,["checked"]),e[41]||(e[41]=n("span",{class:"permission-item__label"},"添加节点",-1))]),n("label",La,[c(i,{checked:s.design.canDrag,"onUpdate:checked":e[6]||(e[6]=t=>s.design.canDrag=t)},null,8,["checked"]),e[42]||(e[42]=n("span",{class:"permission-item__label"},"拖动节点",-1))]),n("label",Ra,[c(i,{checked:s.design.canConnect,"onUpdate:checked":e[7]||(e[7]=t=>s.design.canConnect=t)},null,8,["checked"]),e[43]||(e[43]=n("span",{class:"permission-item__label"},"创建连线",-1))]),n("label",za,[c(i,{checked:s.design.canDelete,"onUpdate:checked":e[8]||(e[8]=t=>s.design.canDelete=t)},null,8,["checked"]),e[44]||(e[44]=n("span",{class:"permission-item__label"},"删除元素",-1))]),n("label",Ma,[c(i,{checked:s.design.canCopy,"onUpdate:checked":e[9]||(e[9]=t=>s.design.canCopy=t)},null,8,["checked"]),e[45]||(e[45]=n("span",{class:"permission-item__label"},"复制",-1))]),n("label",Aa,[c(i,{checked:s.design.canPaste,"onUpdate:checked":e[10]||(e[10]=t=>s.design.canPaste=t)},null,8,["checked"]),e[46]||(e[46]=n("span",{class:"permission-item__label"},"粘贴",-1))]),n("label",Ia,[c(i,{checked:s.design.canGroup,"onUpdate:checked":e[11]||(e[11]=t=>s.design.canGroup=t)},null,8,["checked"]),e[47]||(e[47]=n("span",{class:"permission-item__label"},"节点成组",-1))]),n("label",Pa,[c(i,{checked:s.design.canToFront,"onUpdate:checked":e[12]||(e[12]=t=>s.design.canToFront=t)},null,8,["checked"]),e[48]||(e[48]=n("span",{class:"permission-item__label"},"层级前置",-1))]),n("label",Ga,[c(i,{checked:s.design.canToBack,"onUpdate:checked":e[13]||(e[13]=t=>s.design.canToBack=t)},null,8,["checked"]),e[49]||(e[49]=n("span",{class:"permission-item__label"},"层级后置",-1))])])]),n("div",Ba,[e[56]||(e[56]=n("h4",{class:"permission-group__title"},"📐 对齐操作",-1)),n("div",Wa,[n("label",Oa,[c(i,{checked:s.design.canAlign,"onUpdate:checked":e[14]||(e[14]=t=>s.design.canAlign=t)},null,8,["checked"]),e[51]||(e[51]=n("span",{class:"permission-item__label"},"对齐总开关",-1))]),n("label",Ha,[c(i,{checked:s.design.canAlignLeft,"onUpdate:checked":e[15]||(e[15]=t=>s.design.canAlignLeft=t)},null,8,["checked"]),e[52]||(e[52]=n("span",{class:"permission-item__label"},"左对齐",-1))]),n("label",Ua,[c(i,{checked:s.design.canAlignRight,"onUpdate:checked":e[16]||(e[16]=t=>s.design.canAlignRight=t)},null,8,["checked"]),e[53]||(e[53]=n("span",{class:"permission-item__label"},"右对齐",-1))]),n("label",Va,[c(i,{checked:s.design.canAlignTop,"onUpdate:checked":e[17]||(e[17]=t=>s.design.canAlignTop=t)},null,8,["checked"]),e[54]||(e[54]=n("span",{class:"permission-item__label"},"上对齐",-1))]),n("label",Za,[c(i,{checked:s.design.canAlignBottom,"onUpdate:checked":e[18]||(e[18]=t=>s.design.canAlignBottom=t)},null,8,["checked"]),e[55]||(e[55]=n("span",{class:"permission-item__label"},"下对齐",-1))])])]),n("div",ja,[e[61]||(e[61]=n("h4",{class:"permission-group__title"},"🎯 选择操作",-1)),n("div",Ya,[n("label",qa,[c(i,{checked:s.design.canSelectNode,"onUpdate:checked":e[19]||(e[19]=t=>s.design.canSelectNode=t)},null,8,["checked"]),e[57]||(e[57]=n("span",{class:"permission-item__label"},"选中节点",-1))]),n("label",Xa,[c(i,{checked:s.design.canSelectEdge,"onUpdate:checked":e[20]||(e[20]=t=>s.design.canSelectEdge=t)},null,8,["checked"]),e[58]||(e[58]=n("span",{class:"permission-item__label"},"选中连线",-1))]),n("label",Ja,[c(i,{checked:s.design.canMultipleSelect,"onUpdate:checked":e[21]||(e[21]=t=>s.design.canMultipleSelect=t)},null,8,["checked"]),e[59]||(e[59]=n("span",{class:"permission-item__label"},"多选/框选",-1))]),n("label",Ka,[c(i,{checked:s.design.canSelectAll,"onUpdate:checked":e[22]||(e[22]=t=>s.design.canSelectAll=t)},null,8,["checked"]),e[60]||(e[60]=n("span",{class:"permission-item__label"},"全选",-1))])])]),n("div",Qa,[e[64]||(e[64]=n("h4",{class:"permission-group__title"},"📦 导入导出",-1)),n("div",nd,[n("label",ed,[c(i,{checked:s.design.canImport,"onUpdate:checked":e[23]||(e[23]=t=>s.design.canImport=t)},null,8,["checked"]),e[62]||(e[62]=n("span",{class:"permission-item__label"},"导入数据",-1))]),n("label",rd,[c(i,{checked:s.design.canExport,"onUpdate:checked":e[24]||(e[24]=t=>s.design.canExport=t)},null,8,["checked"]),e[63]||(e[63]=n("span",{class:"permission-item__label"},"导出数据",-1))])])]),n("div",od,[e[67]||(e[67]=n("h4",{class:"permission-group__title"},"⏱️ 历史操作",-1)),n("div",td,[n("label",sd,[c(i,{checked:s.design.canUndo,"onUpdate:checked":e[25]||(e[25]=t=>s.design.canUndo=t)},null,8,["checked"]),e[65]||(e[65]=n("span",{class:"permission-item__label"},"撤销",-1))]),n("label",ld,[c(i,{checked:s.design.canRedo,"onUpdate:checked":e[26]||(e[26]=t=>s.design.canRedo=t)},null,8,["checked"]),e[66]||(e[66]=n("span",{class:"permission-item__label"},"重做",-1))])])]),n("div",id,[e[72]||(e[72]=n("h4",{class:"permission-group__title"},"👁️ 视图操作",-1)),n("div",ad,[n("label",dd,[c(i,{checked:s.design.canZoom,"onUpdate:checked":e[27]||(e[27]=t=>s.design.canZoom=t)},null,8,["checked"]),e[68]||(e[68]=n("span",{class:"permission-item__label"},"缩放画布",-1))]),n("label",cd,[c(i,{checked:s.design.canPan,"onUpdate:checked":e[28]||(e[28]=t=>s.design.canPan=t)},null,8,["checked"]),e[69]||(e[69]=n("span",{class:"permission-item__label"},"拖拽画布",-1))]),n("label",pd,[c(i,{checked:s.design.canFitView,"onUpdate:checked":e[29]||(e[29]=t=>s.design.canFitView=t)},null,8,["checked"]),e[70]||(e[70]=n("span",{class:"permission-item__label"},"适应窗口",-1))]),n("label",gd,[c(i,{checked:s.design.canResetView,"onUpdate:checked":e[30]||(e[30]=t=>s.design.canResetView=t)},null,8,["checked"]),e[71]||(e[71]=n("span",{class:"permission-item__label"},"重置视图",-1))])])]),n("div",md,[e[77]||(e[77]=n("h4",{class:"permission-group__title"},"💬 交互反馈",-1)),n("div",ud,[n("label",fd,[c(i,{checked:s.design.canHoverNode,"onUpdate:checked":e[31]||(e[31]=t=>s.design.canHoverNode=t)},null,8,["checked"]),e[73]||(e[73]=n("span",{class:"permission-item__label"},"节点 Hover 高亮",-1))]),n("label",hd,[c(i,{checked:s.design.canHoverEdge,"onUpdate:checked":e[32]||(e[32]=t=>s.design.canHoverEdge=t)},null,8,["checked"]),e[74]||(e[74]=n("span",{class:"permission-item__label"},"连线 Hover 高亮",-1))]),n("label",_d,[c(i,{checked:s.design.canNodeTooltip,"onUpdate:checked":e[33]||(e[33]=t=>s.design.canNodeTooltip=t)},null,8,["checked"]),e[75]||(e[75]=n("span",{class:"permission-item__label"},"节点 Tooltip",-1))]),n("label",vd,[c(i,{checked:s.design.canEdgeTooltip,"onUpdate:checked":e[34]||(e[34]=t=>s.design.canEdgeTooltip=t)},null,8,["checked"]),e[76]||(e[76]=n("span",{class:"permission-item__label"},"连线 Tooltip",-1))])])])])]),n("div",bd,[c(U,{class:"flow-designer-test",ref_key:"layoutRef",ref:a,mode:d.value,"permission-config":s,getPermissions:v,onReady:l,onModeChange:r},{toolbar:N(t=>[c(In,{"zoom-percent":t.zoomPercent,"has-selection":t.hasSelection,"can-paste":t.canPaste,"can-group":t.canGroup,"can-ungroup":t.canUngroup,"can-undo":t.canUndo,"can-redo":t.canRedo,"designer-mode":t.currentMode,onUndo:t.onUndo,onRedo:t.onRedo,onZoomIn:t.onZoomIn,onZoomOut:t.onZoomOut,onZoomTo:t.onZoomTo,onFitView:t.onFitView,onResetView:t.onResetView,onCopy:t.onCopy,onPaste:t.onPaste,onToFront:t.onToFront,onToBack:t.onToBack,onAlignLeft:t.onAlignLeft,onAlignRight:t.onAlignRight,onAlignTop:t.onAlignTop,onAlignBottom:t.onAlignBottom,onGroup:t.onGroup,onUngroup:t.onUngroup,onExport:t.onExport,onImport:t.onImport,onOpenSettings:t.onOpenSettings,onModeChange:t.onModeChange},null,8,["zoom-percent","has-selection","can-paste","can-group","can-ungroup","can-undo","can-redo","designer-mode","onUndo","onRedo","onZoomIn","onZoomOut","onZoomTo","onFitView","onResetView","onCopy","onPaste","onToFront","onToBack","onAlignLeft","onAlignRight","onAlignTop","onAlignBottom","onGroup","onUngroup","onExport","onImport","onOpenSettings","onModeChange"])]),palette:N(t=>[c(An,{onStartDrag:t.onStartDrag},null,8,["onStartDrag"])]),properties:N(()=>[c(Mn)]),_:1},8,["mode","permission-config"])])])}}}),yd=O(xd,[["__scopeId","data-v-1fce2291"]]),wd=`<template>\r
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
import { FlowDesigner } from '@/components/FlowDesigner/core'\r
import FlowDesignerLayout from '@/components/FlowDesigner/FlowDesignerLayout.vue'\r
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
`,kd=`<template>\r
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
    canTransform: true,\r
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
  console.log('[After Data Loaded] 画布数据加载完成，节点数:', data.nodes?.length ?? 0)\r
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
`,vn="data:image/svg+xml,%3csvg%20t='1763452238349'%20class='icon'%20viewBox='0%200%201024%201024'%20version='1.1'%20xmlns='http://www.w3.org/2000/svg'%20p-id='6179'%20width='20'%20height='20'%3e%3cpath%20d='M510.9%2060.7c-245.6%200-446.7%20199.8-446.7%20446.7C64.2%20753%20263.9%20954%20510.8%20954s446.6-199.7%20446.6-446.6c0.1-245.6-199.6-446.7-446.5-446.7zM692%20525.9l-272.1%20157c-10.7%206.2-24-1.5-24-13.9V354.9c0-12.3%2013.3-20%2024-13.9L692%20498.1c10.6%206.2%2010.6%2021.6%200%2027.8z'%20p-id='6180'%20fill='%2348c02a'%3e%3c/path%3e%3c/svg%3e",bn="data:image/svg+xml,%3csvg%20t='1763452238349'%20class='icon'%20viewBox='0%200%201024%201024'%20version='1.1'%20xmlns='http://www.w3.org/2000/svg'%20p-id='6179'%20width='20'%20height='20'%3e%3cpath%20d='M510.9%2060.7c-245.6%200-446.7%20199.8-446.7%20446.7C64.2%20753%20263.9%20954%20510.8%20954s446.6-199.7%20446.6-446.6c0.1-245.6-199.6-446.7-446.5-446.7zM692%20525.9l-272.1%20157c-10.7%206.2-24-1.5-24-13.9V354.9c0-12.3%2013.3-20%2024-13.9L692%20498.1c10.6%206.2%2010.6%2021.6%200%2027.8z'%20p-id='6180'%20fill='%23ffffff'%3e%3c/path%3e%3c/svg%3e",xn="data:image/svg+xml,%3csvg%20t='1763519234071'%20class='icon'%20viewBox='0%200%201024%201024'%20version='1.1'%20xmlns='http://www.w3.org/2000/svg'%20p-id='10223'%20width='20'%20height='20'%3e%3cpath%20d='M422.399%20601.6V493.323c-79.111-34.622-134.4-113.655-134.4-205.323%200-123.711%20100.54-224%20224-224%20123.711%200%20224%20100.545%20224%20224%200%2091.814-55.379%20170.725-134.4%20205.313V601.6h201.472c61.925%200%20112.128%2049.716%20112.128%20112.003V825.6H108.801V713.598c0-61.855%2050.444-111.998%20112.126-111.998h201.472zM153.601%20870.4h716.793V960H153.6v-89.6z'%20fill='%231d78f4'%20p-id='10224'%3e%3c/path%3e%3c/svg%3e",yn="data:image/svg+xml,%3csvg%20t='1763519234071'%20class='icon'%20viewBox='0%200%201024%201024'%20version='1.1'%20xmlns='http://www.w3.org/2000/svg'%20p-id='10223'%20width='20'%20height='20'%3e%3cpath%20d='M422.399%20601.6V493.323c-79.111-34.622-134.4-113.655-134.4-205.323%200-123.711%20100.54-224%20224-224%20123.711%200%20224%20100.545%20224%20224%200%2091.814-55.379%20170.725-134.4%20205.313V601.6h201.472c61.925%200%20112.128%2049.716%20112.128%20112.003V825.6H108.801V713.598c0-61.855%2050.444-111.998%20112.126-111.998h201.472zM153.601%20870.4h716.793V960H153.6v-89.6z'%20fill='%23ffffff'%20p-id='10224'%3e%3c/path%3e%3c/svg%3e",Rn="data:image/svg+xml,%3csvg%20t='1763453071611'%20class='icon'%20viewBox='0%200%201024%201024'%20version='1.1'%20xmlns='http://www.w3.org/2000/svg'%20p-id='8941'%20width='20'%20height='20'%3e%3cpath%20d='M658.944%2075.776c26.9312%200%2048.64%2023.296%2048.64%2052.0192v207.872c0%2028.672-21.7088%2051.9168-48.64%2051.9168h-97.28v84.48h255.3856c59.1872%200%20107.6736%2050.2272%20109.4144%20113.4592v100.864h24.3712a47.104%2047.104%200%200%201%2034.4064%2015.2064c9.1136%209.728%2014.2336%2022.9888%2014.2336%2036.7616v155.904c0%2028.672-21.76%2051.968-48.64%2051.968h-145.92c-26.88%200-48.64-23.296-48.64-51.968V738.304c0-28.672%2021.76-51.968%2048.64-51.968h24.32v-97.4336a12.6976%2012.6976%200%200%200-10.752-12.9024l-1.4336-0.1024h-255.3344v110.4384h24.32a47.104%2047.104%200%200%201%2034.4064%2015.2064c9.1136%209.728%2014.2336%2022.9888%2014.2336%2036.7616v155.904c0%2028.672-21.76%2051.968-48.64%2051.968h-145.92c-26.88%200-48.64-23.296-48.64-51.968V738.304c0-28.672%2021.76-51.968%2048.64-51.968h24.32V576H209.0496a12.4928%2012.4928%200%200%200-12.032%2011.4688l-0.1024%201.536v97.4336h24.32a47.104%2047.104%200%200%201%2034.4064%2015.2064c9.1136%209.728%2014.2336%2022.9888%2014.2336%2036.7616v155.904c0%2028.672-21.76%2051.968-48.64%2051.968H75.264c-26.88%200-48.64-23.296-48.64-51.968V738.304c0-28.672%2021.76-51.968%2048.64-51.968h24.32v-97.4336c0-63.232%2047.0528-114.9952%20106.1888-116.8384l3.2256-0.1024h255.3856L464.384%20387.584l-97.28%200.0512c-26.8288%200-48.64-23.2448-48.64-51.968v-207.872c0-28.672%2021.8112-51.9168%2048.64-51.9168h291.84z'%20p-id='8942'%20fill='%23ffa100'%3e%3c/path%3e%3c/svg%3e",Jn="data:image/svg+xml,%3csvg%20t='1763453071611'%20class='icon'%20viewBox='0%200%201024%201024'%20version='1.1'%20xmlns='http://www.w3.org/2000/svg'%20p-id='8941'%20width='20'%20height='20'%3e%3cpath%20d='M658.944%2075.776c26.9312%200%2048.64%2023.296%2048.64%2052.0192v207.872c0%2028.672-21.7088%2051.9168-48.64%2051.9168h-97.28v84.48h255.3856c59.1872%200%20107.6736%2050.2272%20109.4144%20113.4592v100.864h24.3712a47.104%2047.104%200%200%201%2034.4064%2015.2064c9.1136%209.728%2014.2336%2022.9888%2014.2336%2036.7616v155.904c0%2028.672-21.76%2051.968-48.64%2051.968h-145.92c-26.88%200-48.64-23.296-48.64-51.968V738.304c0-28.672%2021.76-51.968%2048.64-51.968h24.32v-97.4336a12.6976%2012.6976%200%200%200-10.752-12.9024l-1.4336-0.1024h-255.3344v110.4384h24.32a47.104%2047.104%200%200%201%2034.4064%2015.2064c9.1136%209.728%2014.2336%2022.9888%2014.2336%2036.7616v155.904c0%2028.672-21.76%2051.968-48.64%2051.968h-145.92c-26.88%200-48.64-23.296-48.64-51.968V738.304c0-28.672%2021.76-51.968%2048.64-51.968h24.32V576H209.0496a12.4928%2012.4928%200%200%200-12.032%2011.4688l-0.1024%201.536v97.4336h24.32a47.104%2047.104%200%200%201%2034.4064%2015.2064c9.1136%209.728%2014.2336%2022.9888%2014.2336%2036.7616v155.904c0%2028.672-21.76%2051.968-48.64%2051.968H75.264c-26.88%200-48.64-23.296-48.64-51.968V738.304c0-28.672%2021.76-51.968%2048.64-51.968h24.32v-97.4336c0-63.232%2047.0528-114.9952%20106.1888-116.8384l3.2256-0.1024h255.3856L464.384%20387.584l-97.28%200.0512c-26.8288%200-48.64-23.2448-48.64-51.968v-207.872c0-28.672%2021.8112-51.9168%2048.64-51.9168h291.84z'%20p-id='8942'%20fill='%23ffffff'%3e%3c/path%3e%3c/svg%3e",Dd={class:"demo-node-svg"},Cd={class:"demo-node-svg__log"},Sd={class:"demo-node-svg__log-content"},Nd={class:"demo-node-svg__canvas"},Fd={class:"custom-palette"},$d={class:"custom-palette__section"},Ed=["onMousedown"],Td={class:"custom-palette__item-icon"},Ld=["src"],Rd={class:"custom-palette__item-info"},zd=["onMousedown"],Md={class:"custom-palette__item-icon"},Ad=["src"],Id=P({__name:"demo-node-svg",setup(C){const m=w([]),a=[{type:"svg-start-node",label:"开始节点",classNamePerfix:"x6",width:120,height:38,rectStroke:"#95d375",rectStrokeWidth:1,rectFill:"#edf8e7",icon:vn,iconHover:bn,textFill:"#81cb5c"},{type:"svg-approval-node",label:"审批节点",classNamePerfix:"x6",width:120,height:38,rectStroke:"#83b3f7",rectStrokeWidth:1,rectFill:"#e6eeff",icon:xn,iconHover:yn,textFill:"#5d9df7"}],d={groups:{top:{position:"top",attrs:{circle:{r:4,magnet:!0,stroke:"#5F95FF",strokeWidth:1,fill:"#fff",style:{visibility:"hidden"}},label:{position:"top"},text:{text:"",fill:"#ff5800"}}},right:{position:"right",attrs:{circle:{r:4,magnet:!0,stroke:"#5F95FF",strokeWidth:1,fill:"#fff",style:{visibility:"hidden"}},label:{position:"right"},text:{text:"",fill:"#ff5800"}}},bottom:{position:"bottom",attrs:{circle:{r:4,magnet:!0,stroke:"#5F95FF",strokeWidth:1,fill:"#fff",style:{visibility:"hidden"}},label:{position:"bottom"},text:{text:"",fill:"#ff5800"}}},left:{position:"left",attrs:{circle:{r:4,magnet:!0,stroke:"#5F95FF",strokeWidth:1,fill:"#fff",style:{visibility:"hidden"}},label:{position:"left"},text:{text:"",fill:"#ff5800"}}}},items:[{group:"top",label:{position:"top"}},{group:"right",label:{position:"right"}},{group:"bottom",label:{position:"bottom"}},{group:"left",label:{position:"left"}}]};function s(o){const e=new Date().toLocaleTimeString();m.value.push(`[${e}] ${o}`)}function p(){m.value=[]}function v(o){s("🔧 beforeGraphInit: 开始注册 SVG 节点"),a.forEach(e=>{K.registerNode(e.type,{inherit:"rect",width:e.width,height:e.height,markup:[{tagName:"rect",selector:"body",className:e.classNamePerfix+"-"+e.type+"-body"},{tagName:"image",selector:"icon",className:e.classNamePerfix+"-"+e.type+"-image"},{tagName:"image",selector:"iconHover",className:e.classNamePerfix+"-"+e.type+"-imageHover"},{tagName:"text",selector:"label",className:e.classNamePerfix+"-"+e.type+"-label"}],attrs:{body:{stroke:e.rectStroke,strokeWidth:e.rectStrokeWidth,fill:e.rectFill,rx:10,ry:10},icon:{"xlink:href":e.icon,width:20,height:20,x:12,y:8},iconHover:{"xlink:href":e.iconHover,width:20,height:20,x:12,y:8,display:"none"},text:{fontSize:12,fill:e.textFill}},ports:rn({},d)},!0),s(`✅ 已注册节点: ${e.type} (${e.label})`)}),K.registerNode("svg-condition-node",{inherit:"polygon",width:132,height:72,markup:[{tagName:"polygon",selector:"body",className:"x6-svg-condition-node-body"},{tagName:"text",selector:"label",className:"x6-svg-condition-node-label"},{tagName:"image",selector:"icon",className:"x6-svg-condition-node-image"},{tagName:"image",selector:"iconHover",className:"x6-svg-condition-node-imageHover"}],attrs:{body:{strokeWidth:1,stroke:"#fdc059",fill:"#ffeed1",refPoints:"0,20 20,0 40,20 20,40"},text:{fontSize:12,fill:"#ffb02a",y:8},icon:{"xlink:href":Rn,width:20,height:20,x:56,y:8},iconHover:{"xlink:href":Jn,width:20,height:20,x:56,y:8,display:"none"}},ports:pn(rn({},d),{items:[{group:"top"},{group:"bottom"}]})},!0),s("🎉 所有 SVG 节点注册完成")}function l(o,e){s("✅ 画布初始化完成"),s("💡 提示: 悬停查看 hover 效果，点击切换 selected 状态"),setTimeout(()=>{e.addNode({shape:"svg-start-node",x:100,y:100,label:"开始节点"}),s("📦 已添加 3 个示例节点"),s("🎨 试试悬停和点击节点吧！")},100)}function r(o,e,i){s(`🎯 开始拖拽: ${e.label}`),i(o,{shape:e.type,label:e.label,width:e.width,height:e.height,data:{label:e.label,nodeInfo:{hint:e.hint,color:e.color}}})}return(o,e)=>(u(),f("div",Dd,[n("div",Cd,[n("div",{class:"demo-node-svg__log-header"},[e[0]||(e[0]=n("h4",null,"事件日志",-1)),n("button",{class:"demo-node-svg__clear-btn",onClick:p,title:"清除日志"}," 清除 ")]),n("div",Sd,[(u(!0),f(B,null,W(m.value,(i,t)=>(u(),f("div",{key:t,class:"demo-node-svg__log-item"},D(i),1))),128))])]),n("div",Nd,[c(U,{mode:"design","before-graph-init":v,onReady:l},{palette:N(({onStartDrag:i})=>[n("div",Fd,[e[3]||(e[3]=n("div",{class:"custom-palette__header"},[n("h3",{class:"custom-palette__title"},"SVG 节点"),n("span",{class:"custom-palette__desc"},"三种状态切换")],-1)),n("div",$d,[e[2]||(e[2]=n("div",{class:"custom-palette__section-title"},"带图标的节点",-1)),(u(),f(B,null,W(a,t=>n("div",{key:t.type,class:"custom-palette__item",onMousedown:g=>r(g,t,i),style:an({background:t.rectFill,borderColor:t.rectStroke})},[n("div",Td,[n("img",{src:t.icon},null,8,Ld)]),n("div",Rd,[n("div",{class:"custom-palette__item-label",style:an({color:t.textFill})},D(t.label),5)])],44,Ed)),64)),n("div",{key:"svg-condition-node",class:"custom-palette__item",onMousedown:t=>r(t,{type:"svg-condition-node",label:"条件分支",width:132,height:72},i),style:{background:"#ffeed1",borderColor:"#fdc059"}},[n("div",Md,[n("img",{src:R(Rn)},null,8,Ad)]),e[1]||(e[1]=n("div",{class:"custom-palette__item-info"},[n("div",{class:"custom-palette__item-label",style:{color:"#ffb02a"}},"条件分支")],-1))],40,zd)]),e[4]||(e[4]=n("div",{class:"custom-palette__tips"},[n("div",{class:"tips-title"},"💡 交互说明"),n("ul",{class:"tips-list"},[n("li",null,[n("strong",null,"Default:"),I(" 白底 + 彩色图标")]),n("li",null,[n("strong",null,"Hover:"),I(" 淡色背景")]),n("li",null,[n("strong",null,"Selected:"),I(" 彩底 + 白色图标")])])],-1))])]),_:1})])]))}}),Pd=O(Id,[["__scopeId","data-v-8470a8d8"]]),Gd=`<template>\r
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
import FlowDesignerLayout from '@/components/FlowDesigner/FlowDesignerLayout.vue'\r
import type { FlowDesigner, FlowDesignerOptions } from '@/components/FlowDesigner/core'\r
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
`,Bd={class:"demo-node-svg"},Wd={class:"demo-node-svg__log"},Od={class:"demo-node-svg__log-content"},Hd={class:"demo-node-svg__canvas"},Ud={class:"custom-palette"},Vd={class:"custom-palette__section"},Zd=["onMousedown"],jd={class:"custom-palette__item-icon"},Yd=["src"],qd={class:"custom-palette__item-info"},Xd=P({__name:"demo-node-html",setup(C){const m=w([]),a=[{type:"html-start-node",label:"开始节点",classNamePerfix:"x6",width:120,height:38,rectStroke:"#95d375",rectStrokeWidth:1,rectFill:"#edf8e7",icon:vn,iconHover:bn,textFill:"#81cb5c"},{type:"html-approval-node",label:"审批节点",classNamePerfix:"x6",width:120,height:38,rectStroke:"#83b3f7",rectStrokeWidth:1,rectFill:"#e6eeff",icon:xn,iconHover:yn,textFill:"#5d9df7"}];function d(r){const o=new Date().toLocaleTimeString();m.value.push(`[${o}] ${r}`)}function s(){m.value=[]}function p(r){d("🔧 beforeGraphInit: 开始注册 SVG 节点"),a.forEach(o=>{Ce.register({shape:o.type,width:o.width,height:o.height,effect:["data","_state"],html(e){const i=e.getProp("label");console.log("dddddddddddd::",i);const t=e.getProp("_state")||"default",g=document.createElement("div");g.className=`x6-${o.type}`;const h=t==="selected"?"node-card--selected":"",F=t==="selected"?`<img src="${o.iconHover}" />`:`<img src="${o.icon}" />`;return g.innerHTML=`
        <div class="node-card ${h}">
          <div class="body">
            ${F}
            <div class="info">
              <div class="name">${e.getProp("label")||"HTML 节点"}</div>
            </div>
          </div>
        </div>
      `,g},ports:{groups:{top:{position:"top",attrs:{circle:{r:6,magnet:!0,stroke:"#722ed1",strokeWidth:2,fill:"#fff",style:{visibility:"hidden"}}}},right:{position:"right",attrs:{circle:{r:6,magnet:!0,stroke:"#722ed1",strokeWidth:2,fill:"#fff",style:{visibility:"hidden"}}}},bottom:{position:"bottom",attrs:{circle:{r:6,magnet:!0,stroke:"#722ed1",strokeWidth:2,fill:"#fff",style:{visibility:"hidden"}}}},left:{position:"left",attrs:{circle:{r:6,magnet:!0,stroke:"#722ed1",strokeWidth:2,fill:"#fff",style:{visibility:"hidden"}}}}},items:[{group:"top",id:"port-top"},{group:"right",id:"port-right"},{group:"bottom",id:"port-bottom"},{group:"left",id:"port-left"}]}}),d(`✅ 已注册节点: ${o.type} (${o.label})`)}),d("🎉 所有 SVG 节点注册完成")}function v(r,o){d("✅ 画布初始化完成"),d("💡 提示: 悬停查看 hover 效果，点击切换 selected 状态"),setTimeout(()=>{const e=o.createNode({shape:"html-start-node",x:120,y:100,label:"开始节点"});o.addNode(e),r.setNodeState(e,"default"),console.log("nodenodenodenodenodenode::",e),d("📦 已添加 2 个示例节点"),d("🎨 试试点击节点切换状态吧！")},100)}function l(r,o,e){d(`🎯 开始拖拽: ${o.label}`),e(r,{shape:o.type,label:o.label,width:o.width,height:o.height,data:{label:o.label,nodeInfo:{hint:o.hint,color:o.color}}})}return(r,o)=>(u(),f("div",Bd,[n("div",Wd,[n("div",{class:"demo-node-svg__log-header"},[o[0]||(o[0]=n("h4",null,"事件日志",-1)),n("button",{class:"demo-node-svg__clear-btn",onClick:s,title:"清除日志"}," 清除 ")]),n("div",Od,[(u(!0),f(B,null,W(m.value,(e,i)=>(u(),f("div",{key:i,class:"demo-node-svg__log-item"},D(e),1))),128))])]),n("div",Hd,[c(U,{mode:"design","before-graph-init":p,onReady:v},{palette:N(({onStartDrag:e})=>[n("div",Ud,[o[2]||(o[2]=n("div",{class:"custom-palette__header"},[n("h3",{class:"custom-palette__title"},"HTML 节点"),n("span",{class:"custom-palette__desc"})],-1)),n("div",Vd,[o[1]||(o[1]=n("div",{class:"custom-palette__section-title"},"带图标的节点",-1)),(u(),f(B,null,W(a,i=>n("div",{key:i.type,class:"custom-palette__item",onMousedown:t=>l(t,i,e),style:an({background:i.rectFill,borderColor:i.rectStroke})},[n("div",jd,[n("img",{src:i.icon},null,8,Yd)]),n("div",qd,[n("div",{class:"custom-palette__item-label",style:an({color:i.textFill})},D(i.label),5)])],44,Zd)),64))]),o[3]||(o[3]=n("div",{class:"custom-palette__tips"},[n("div",{class:"tips-title"},"💡 交互说明"),n("ul",{class:"tips-list"},[n("li",null,[n("strong",null,"Default:"),I(" 白底 + 彩色图标")]),n("li",null,[n("strong",null,"Hover:"),I(" 淡色背景")]),n("li",null,[n("strong",null,"Selected:"),I(" 彩底 + 白色图标")])])],-1))])]),_:1})])]))}}),Jd=O(Xd,[["__scopeId","data-v-30c401b3"]]),Kd=`<template>
  <div class="demo-node-svg">
    <!-- 事件日志面板 -->
    <div class="demo-node-svg__log">
      <div class="demo-node-svg__log-header">
        <h4>事件日志</h4>
        <button class="demo-node-svg__clear-btn" @click="clearLogs" title="清除日志">
          清除
        </button>
      </div>
      <div class="demo-node-svg__log-content">
        <div v-for="(log, index) in logs" :key="index" class="demo-node-svg__log-item">
          {{ log }}
        </div>
      </div>
    </div>

    <!-- 画布容器 -->
    <div class="demo-node-svg__canvas">
      <FlowDesignerLayout
        mode="design"
        :before-graph-init="handleBeforeGraphInit"
        @ready="handleReady"
      >
        <!-- 自定义节点面板插槽 -->
        <template #palette="{ onStartDrag }">
          <div class="custom-palette">
            <div class="custom-palette__header">
              <h3 class="custom-palette__title">HTML 节点</h3>
              <span class="custom-palette__desc"></span>
            </div>

            <div class="custom-palette__section">
              <div class="custom-palette__section-title">带图标的节点</div>
              <div
                v-for="nodeType in nodeTypesConfig"
                :key="nodeType.type"
                class="custom-palette__item"
                @mousedown="(e) => handleStartDrag(e, nodeType, onStartDrag)"
                :style="{ background: nodeType.rectFill, borderColor: nodeType.rectStroke}"
              >
                <div class="custom-palette__item-icon" >
                  <img :src="nodeType.icon" />
                </div>
                <div class="custom-palette__item-info">
                  <div class="custom-palette__item-label" :style="{ color: nodeType.textFill}">{{ nodeType.label }}</div>
                </div>
              </div>

            </div>

            <div class="custom-palette__tips">
              <div class="tips-title">💡 交互说明</div>
              <ul class="tips-list">
                <li><strong>Default:</strong> 白底 + 彩色图标</li>
                <li><strong>Hover:</strong> 淡色背景</li>
                <li><strong>Selected:</strong> 彩底 + 白色图标</li>
              </ul>
            </div>
          </div>
        </template>
      </FlowDesignerLayout>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import FlowDesignerLayout from '@/components/FlowDesigner/FlowDesignerLayout.vue'
import type { FlowDesigner, FlowDesignerOptions } from '@/components/FlowDesigner/core'
import { Graph, Node, Shape } from '@antv/x6'


import startSvg from "./icons/start.svg";
import startHover from "./icons/start-hover.svg";

import approvalSvg from "./icons/approval.svg";
import approvalHoverSvg from "./icons/approval-hover.svg";

import conditionSvg from "./icons/condition.svg";
import conditionHoverSvg from "./icons/condition-hover.svg";

const logs = ref<string[]>([])

// 节点类型配置（包含颜色和 iconPath）
interface NodeTypeConfig {
  type: string
  label: string
  hint: string
  color: string
  hoverColor: string
  iconPath: string
  width: number
  height: number
}

const nodeTypesConfig: any[] = [
  {
    type: 'html-start-node',
    label: '开始节点',
    classNamePerfix: 'x6',
    width: 120,
    height: 38,
    rectStroke: '#95d375',
    rectStrokeWidth: 1,
    rectFill: '#edf8e7',
    icon: startSvg,
    iconHover: startHover,
    textFill: '#81cb5c'
  },
  {
    type: 'html-approval-node',
    label: '审批节点',
    classNamePerfix: 'x6',
    width: 120,
    height: 38,
    rectStroke: '#83b3f7',
    rectStrokeWidth: 1,
    rectFill: '#e6eeff',
    icon: approvalSvg,
    iconHover: approvalHoverSvg,
    textFill: '#5d9df7'
  },
]

const Ports = {
  groups: {
    top: {
      position: 'top',
      attrs: {
        circle: {
          r: 4,
          magnet: true,
          stroke: '#5F95FF',
          strokeWidth: 1,
          fill: '#fff',
          style: {
            visibility: 'hidden',
          },
        },
        label: {
          position: 'top',
        },
        text: {
          text: '',
          fill: '#ff5800',
        },
      },
    },
    right: {
      position: 'right',
      attrs: {
        circle: {
          r: 4,
          magnet: true,
          stroke: '#5F95FF',
          strokeWidth: 1,
          fill: '#fff',
          style: {
            visibility: 'hidden',
          },
        },
        label: {
          position: 'right',
        },
        text: {
          text: '',
          fill: '#ff5800',
        },
      },
    },
    bottom: {
      position: 'bottom',
      attrs: {
        circle: {
          r: 4,
          magnet: true,
          stroke: '#5F95FF',
          strokeWidth: 1,
          fill: '#fff',
          style: {
            visibility: 'hidden',
          },
        },
        label: {
          position: 'bottom',
        },
        text: {
          text: '',
          fill: '#ff5800',
        },
      },
    },
    left: {
      position: 'left',
      attrs: {
        circle: {
          r: 4,
          magnet: true,
          stroke: '#5F95FF',
          strokeWidth: 1,
          fill: '#fff',
          style: {
            visibility: 'hidden',
          },
        },
        label: {
          position: 'left',
        },
        text: {
          text: '',
          fill: '#ff5800',
        },
      },
    },
  },
  items: [
    {
      group: 'top',
      label: {
        position : 'top'
      }
    },
    {
      group: 'right',
      label: {
        position : 'right'
      }
    },
    {
      group: 'bottom',
      label: {
        position : 'bottom'
      }
    },
    {
      group: 'left',
      label: {
        position : 'left'
      }
    },
  ],
}

function addLog(message: string) {
  const timestamp = new Date().toLocaleTimeString()
  logs.value.push(\`[\${timestamp}] \${message}\`)
}

function clearLogs() {
  logs.value = []
}


/**
 * Graph 初始化前钩子：注册带 SVG icon 的自定义节点
 */
function handleBeforeGraphInit(options: FlowDesignerOptions) {
  addLog('🔧 beforeGraphInit: 开始注册 SVG 节点')

  // 遍历配置，注册所有节点
  nodeTypesConfig.forEach((config) => {
    Shape.HTML.register({
      shape: config.type,
      width: config.width,
      height: config.height,
      // 注意：状态现在存储在 prop 而非 data 中
      // HTML 节点需要配合状态处理器使用，通过 setAttrs() 更新样式
      effect: ['data','_state'],  // 保留 data 监听，用于业务数据变化
      html(node) {
        const dd = node.getProp('label');
        console.log('dddddddddddd::', dd);

        // 从 prop 读取状态（而不是从 data 读取）
        const state = node.getProp('_state') || 'default'
        const container = document.createElement('div');
        container.className = \`x6-\${config.type}\`;
        // 根据状态应用不同的 class
        const stateClass = state === 'selected' ? 'node-card--selected' : ''
        const imgStr = state === 'selected' ? \`<img src="\${config.iconHover}" />\`:\`<img src="\${config.icon}" />\`

        container.innerHTML = \`
        <div class="node-card \${stateClass}">
          <div class="body">
            \${imgStr}
            <div class="info">
              <div class="name">\${node.getProp('label') || 'HTML 节点'}</div>
            </div>
          </div>
        </div>
      \`
        return container
      },
      ports: {
        groups: {
          top:    { position: 'top',    attrs: { circle: { r: 6, magnet: true, stroke: '#722ed1', strokeWidth: 2, fill: '#fff', style: { visibility: 'hidden' } } } },
          right:  { position: 'right',  attrs: { circle: { r: 6, magnet: true, stroke: '#722ed1', strokeWidth: 2, fill: '#fff', style: { visibility: 'hidden' } } } },
          bottom: { position: 'bottom', attrs: { circle: { r: 6, magnet: true, stroke: '#722ed1', strokeWidth: 2, fill: '#fff', style: { visibility: 'hidden' } } } },
          left:   { position: 'left',   attrs: { circle: { r: 6, magnet: true, stroke: '#722ed1', strokeWidth: 2, fill: '#fff', style: { visibility: 'hidden' } } } },
        },
        items: [
          { group: 'top',    id: 'port-top'    },
          { group: 'right',  id: 'port-right'  },
          { group: 'bottom', id: 'port-bottom' },
          { group: 'left',   id: 'port-left'   },
        ],
      },
    })

    addLog(\`✅ 已注册节点: \${config.type} (\${config.label})\`)
  })  // ✅ 修复：forEach 的回调函数结束



  addLog('🎉 所有 SVG 节点注册完成')
}

function handleReady(designer: FlowDesigner, graph: Graph) {
  addLog('✅ 画布初始化完成')
  addLog('💡 提示: 悬停查看 hover 效果，点击切换 selected 状态')


  // ─── 添加示例节点 ───────────────────────────────────────────────────
  setTimeout(() => {
    const node = graph.createNode({
      shape: 'html-start-node',
      x: 120,
      y: 100,
      label: '开始节点',
    });
    graph.addNode(node);
    // 设置初始状态（通过状态管理器，而不是 data）
    designer.setNodeState(node, 'default')
    console.log('nodenodenodenodenodenode::', node);
    addLog('📦 已添加 2 个示例节点')
    addLog('🎨 试试点击节点切换状态吧！')
  }, 100)
}

function handleStartDrag(e: MouseEvent, nodeType: NodeTypeConfig, onStartDrag: any) {
  addLog(\`🎯 开始拖拽: \${nodeType.label}\`)

  onStartDrag(e, {
    shape: nodeType.type,
    label: nodeType.label,
    width: nodeType.width,
    height: nodeType.height,
    data: {
      label: nodeType.label,
      nodeInfo: {
        hint: nodeType.hint,
        color: nodeType.color,
      }
    }
  })
}
<\/script>

<style scoped>
.demo-node-svg {
  display: flex;
  height: 100%;
  min-height: 600px;
  gap: 16px;
}

.demo-node-svg__log {
  width: 280px;
  border: 1px solid #e8e8e8;
  border-radius: 8px;
  padding: 16px;
  background: #fafafa;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

.demo-node-svg__log-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
}

.demo-node-svg__log h4 {
  margin: 0;
  font-size: 14px;
  color: #1a1a2e;
  font-weight: 600;
}

.demo-node-svg__clear-btn {
  padding: 2px 8px;
  font-size: 12px;
  color: #666;
  background: #fff;
  border: 1px solid #d9d9d9;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.2s;
  user-select: none;
}

.demo-node-svg__clear-btn:hover {
  color: #1890ff;
  border-color: #1890ff;
}

.demo-node-svg__log-content {
  flex: 1;
  overflow-y: auto;
  font-size: 12px;
  line-height: 1.8;
}

.demo-node-svg__log-item {
  padding: 4px 0;
  color: #555;
  font-family: 'Monaco', 'Menlo', 'Consolas', monospace;
  border-bottom: 1px solid #f0f0f0;
}

.demo-node-svg__log-item:last-child {
  border-bottom: none;
}

.demo-node-svg__canvas {
  flex: 1;
  border: 1px solid #e8e8e8;
  border-radius: 8px;
  overflow: hidden;
  background: #fff;
}

/* ==================== 自定义节点面板样式 ==================== */
.custom-palette {
  display: flex;
  flex-direction: column;
  height: 100%;
  background: linear-gradient(to bottom, #f9fafb, #ffffff);
  border-right: 1px solid #e8e8e8;
  width: 200px;
}

.custom-palette__header {
  padding: 16px;
  border-bottom: 2px solid #e8e8e8;
  background: #fff;
}

.custom-palette__title {
  margin: 0 0 4px 0;
  font-size: 16px;
  font-weight: 600;
  color: #1a1a2e;
}

.custom-palette__desc {
  font-size: 12px;
  color: #999;
}

.custom-palette__section {
  padding: 12px;
}

.custom-palette__section-title {
  font-size: 11px;
  font-weight: 600;
  color: #999;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  margin-bottom: 8px;
  padding: 0 4px;
}

.custom-palette__item {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 10px;
  margin-bottom: 8px;
  background: #fff;
  border: 1px solid #e8e8e8;
  border-radius: 12px;
  cursor: move;
  transition: all 0.2s;
  user-select: none;
  width: 160px;
  height: 50px;
}

.custom-palette__item:hover {
  border-color: #1677ff;
  box-shadow: 0 2px 8px rgba(22, 119, 255, 0.15);
  transform: translateY(-1px);
}

.custom-palette__item:active {
  transform: translateY(0);
  box-shadow: 0 1px 4px rgba(22, 119, 255, 0.2);
}

.custom-palette__item-icon {
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  flex-shrink: 0;
}

.custom-palette__item-info {
  flex: 1;
  min-width: 0;
}

.custom-palette__item-label {
  font-size: 13px;
  font-weight: 500;
  color: #333;
  margin-bottom: 2px;
}

.custom-palette__item-hint {
  font-size: 11px;
  color: #999;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

/* ==================== 交互说明 ==================== */
.custom-palette__tips {
  margin-top: auto;
  padding: 12px;
  background: #fff9e6;
  border-top: 1px solid #ffe58f;
}

.tips-title {
  font-size: 12px;
  font-weight: 600;
  color: #d48806;
  margin-bottom: 8px;
}

.tips-list {
  margin: 0;
  padding-left: 16px;
  font-size: 11px;
  line-height: 1.8;
  color: #8c8c8c;
}

.tips-list li {
  margin-bottom: 4px;
}

.tips-list strong {
  color: #595959;
}

</style>


<!--如果需要简单控制节点样式，需要将此节点样式暴露到全局,适当增加前缀以防止污染-->
<style>
/* HTML 卡片节点样式 */
.x6-html-start-node {
  width: 120px;
  height: 38px;
  /* ✅ 方案A：显式设置 pointer-events，确保能接收鼠标事件 */
  -pointer-events: auto !important;
}

/* ✅ 确保所有子元素都能接收事件 */
.x6-html-start-node * {
  -pointer-events: auto;
}

.x6-html-start-node .node-card {
  width: 100%;
  height: 100%;
  background: #edf8e7;
  border: 1px solid #95d375;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0,0,0,.08);
  display: flex;
  flex-direction: column;
  user-select: none;
  transition: box-shadow 0.2s, border-color 0.2s;
  /* ✅ 显式设置 pointer-events */
  -pointer-events: auto;
}

.x6-html-start-node .node-card:hover {
  border: 2px solid #95d375;
  box-shadow: 0 4px 12px rgba(0,0,0,.12);
}

.x6-html-start-node .body {
  display: flex;
  align-items: center;
  padding: 8px 12px;
  gap: 8px;
}

.x6-html-start-node img {
  width: 20px;
  height: 20px;
  flex-shrink: 0;
}

.x6-html-start-node .info {
  overflow: hidden;
  flex: 1;
}

.x6-html-start-node .name {
  font-size: 13px;
  font-weight: 400;
  color: #81cb5c;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

/* ✅ Selected 状态样式 */
.x6-html-start-node .node-card--selected {
  border: 2px solid #48c02a !important;
  box-shadow: 0 0 0 3px rgba(114,46,209,0.15), 0 2px 8px rgba(0,0,0,.08) !important;
  background: #8fd16f !important;
}
.x6-html-start-node .node-card--selected .name {
  color: white;
}



.x6-html-approval-node {
  width: 120px;
  height: 38px;
  /* ✅ 方案A：显式设置 pointer-events，确保能接收鼠标事件 */
  -pointer-events: auto !important;
}

/* ✅ 确保所有子元素都能接收事件 */
.x6-html-approval-node * {
  -pointer-events: auto;
}

.x6-html-approval-node .node-card {
  width: 100%;
  height: 100%;
  background: #e6eeff;
  border: 1px solid #83b3f7;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0,0,0,.08);
  display: flex;
  flex-direction: column;
  user-select: none;
  transition: box-shadow 0.2s, border-color 0.2s;
  /* ✅ 显式设置 pointer-events */
  -pointer-events: auto;
}

.x6-html-approval-node .node-card:hover {
  border: 2px solid #83b3f7;
  box-shadow: 0 4px 12px rgba(0,0,0,.12);
}

.x6-html-approval-node .body {
  display: flex;
  align-items: center;
  padding: 8px 12px;
  gap: 8px;
}

.x6-html-approval-node img {
  width: 20px;
  height: 20px;
  flex-shrink: 0;
}

.x6-html-approval-node .info {
  overflow: hidden;
  flex: 1;
}

.x6-html-approval-node .name {
  font-size: 13px;
  font-weight: 400;
  color: #5d9df7;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

/* ✅ Selected 状态样式 */
.x6-html-approval-node .node-card--selected {
  border: 2px solid #003eca !important;
  box-shadow: 0 0 0 3px rgba(114,46,209,0.15), 0 2px 8px rgba(0,0,0,.08) !important;
  background: #1d78f4 !important;
}
.x6-html-approval-node .node-card--selected .name {
  color: white;
}


</style>
`,Qd={style:{width:"100%",height:"100%"}},nc={class:"body"},ec=["src"],rc=["src"],oc={class:"info"},tc={class:"name"},sc=P({__name:"StartNode",props:{node:{}},setup(C){var l;const m=C,a=zn("getGraph"),d=w((l=m.node.getData())!=null?l:{}),s=w(!1),p=w(""),v=()=>{var r;d.value=(r=m.node.getData())!=null?r:{},p.value=m.node.getProp("label")};return $n(()=>{m.node.on("change:data",v);const r=a==null?void 0:a();r&&(r.on("cell:selected",({cell:o})=>{o.id===m.node.id&&(s.value=!0)}),r.on("cell:unselected",({cell:o})=>{o.id===m.node.id&&(s.value=!1)}))}),On(()=>{m.node.off("change:data",v)}),(r,o)=>(u(),f("div",Qd,[n("div",{class:sn(["node-start",{"node-start--selected":s.value}])},[n("div",nc,[s.value?E("",!0):(u(),f("img",{key:0,src:R(vn)},null,8,ec)),s.value?(u(),f("img",{key:1,src:R(bn)},null,8,rc)):E("",!0),n("div",oc,[n("div",tc,D(p.value||"开始"),1)])])],2)]))}}),lc=O(sc,[["__scopeId","data-v-c183cbc0"]]),ic={class:"body"},ac=["src"],dc=["src"],cc={class:"info"},pc={class:"name"},gc=P({__name:"ApproverNode",props:{node:{}},setup(C){var l;const m=C,a=zn("getGraph"),d=w((l=m.node.getData())!=null?l:{}),s=w(!1),p=w(""),v=()=>{var r;d.value=(r=m.node.getData())!=null?r:{},p.value=m.node.getProp("label")};return $n(()=>{m.node.on("change:data",v);const r=a==null?void 0:a();r&&(r.on("cell:selected",({cell:o})=>{o.id===m.node.id&&(s.value=!0)}),r.on("cell:unselected",({cell:o})=>{o.id===m.node.id&&(s.value=!1)}))}),On(()=>{m.node.off("change:data",v)}),(r,o)=>(u(),f("div",{class:sn(["node-approval",{"node-approval--selected":s.value}])},[n("div",ic,[s.value?E("",!0):(u(),f("img",{key:0,src:R(xn)},null,8,ac)),s.value?(u(),f("img",{key:1,src:R(yn)},null,8,dc)):E("",!0),n("div",cc,[n("div",pc,D(p.value||"审批人节点"),1)])])],2))}}),mc=O(gc,[["__scopeId","data-v-8153fca3"]]),uc={class:"demo-node-svg"},fc={class:"demo-node-svg__log"},hc={class:"demo-node-svg__log-content"},_c={class:"demo-node-svg__canvas"},vc={class:"custom-palette"},bc={class:"custom-palette__section"},xc=["onMousedown"],yc={class:"custom-palette__item-icon"},wc=["src"],kc={class:"custom-palette__item-info"},Dc=P({__name:"demo-node-vue",setup(C){const m=w([]),a=[{type:"vue-start-node",label:"开始节点",classNamePerfix:"x6",width:120,height:38,rectStroke:"#95d375",rectStrokeWidth:1,rectFill:"#edf8e7",icon:vn,iconHover:bn,textFill:"#81cb5c"},{type:"vue-approval-node",label:"审批节点",classNamePerfix:"x6",width:120,height:38,rectStroke:"#83b3f7",rectStrokeWidth:1,rectFill:"#e6eeff",icon:xn,iconHover:yn,textFill:"#5d9df7"}],d={groups:{top:{position:"top",attrs:{circle:{r:4,magnet:!0,stroke:"#5F95FF",strokeWidth:1,fill:"#fff",style:{visibility:"hidden"}},label:{position:"top"},text:{text:"",fill:"#ff5800"}}},right:{position:"right",attrs:{circle:{r:4,magnet:!0,stroke:"#5F95FF",strokeWidth:1,fill:"#fff",style:{visibility:"hidden"}},label:{position:"right"},text:{text:"",fill:"#ff5800"}}},bottom:{position:"bottom",attrs:{circle:{r:4,magnet:!0,stroke:"#5F95FF",strokeWidth:1,fill:"#fff",style:{visibility:"hidden"}},label:{position:"bottom"},text:{text:"",fill:"#ff5800"}}},left:{position:"left",attrs:{circle:{r:4,magnet:!0,stroke:"#5F95FF",strokeWidth:1,fill:"#fff",style:{visibility:"hidden"}},label:{position:"left"},text:{text:"",fill:"#ff5800"}}}},items:[{group:"top",label:{position:"top"}},{group:"right",label:{position:"right"}},{group:"bottom",label:{position:"bottom"}},{group:"left",label:{position:"left"}}]};function s(o){const e=new Date().toLocaleTimeString();m.value.push(`[${e}] ${o}`)}function p(){m.value=[]}function v(o){s("🔧 beforeGraphInit: 开始注册 SVG 节点"),Wn({shape:"vue-start-node",width:120,height:38,component:lc,ports:rn({},d)}),Wn({shape:"vue-approval-node",width:120,height:38,component:mc,ports:rn({},d)}),s("🎉 所有 SVG 节点注册完成")}function l(o,e){s("✅ 画布初始化完成"),s("💡 提示: 悬停查看 hover 效果，点击切换 selected 状态"),setTimeout(()=>{e.addNode({shape:"vue-start-node",x:100,y:100,label:"开始节点"}),s("📦 已添加 3 个示例节点"),s("🎨 试试悬停和点击节点吧！")},100)}function r(o,e,i){s(`🎯 开始拖拽: ${e.label}`),i(o,{shape:e.type,label:e.label,width:e.width,height:e.height,data:{label:e.label,nodeInfo:{hint:e.hint,color:e.color}}})}return(o,e)=>(u(),f("div",uc,[n("div",fc,[n("div",{class:"demo-node-svg__log-header"},[e[0]||(e[0]=n("h4",null,"事件日志",-1)),n("button",{class:"demo-node-svg__clear-btn",onClick:p,title:"清除日志"}," 清除 ")]),n("div",hc,[(u(!0),f(B,null,W(m.value,(i,t)=>(u(),f("div",{key:t,class:"demo-node-svg__log-item"},D(i),1))),128))])]),n("div",_c,[c(U,{mode:"design","before-graph-init":v,onReady:l},{palette:N(({onStartDrag:i})=>[n("div",vc,[e[2]||(e[2]=n("div",{class:"custom-palette__header"},[n("h3",{class:"custom-palette__title"},"VUE 节点"),n("span",{class:"custom-palette__desc"},"三种状态切换")],-1)),n("div",bc,[e[1]||(e[1]=n("div",{class:"custom-palette__section-title"},"带图标的节点",-1)),(u(),f(B,null,W(a,t=>n("div",{key:t.type,class:"custom-palette__item",onMousedown:g=>r(g,t,i),style:an({background:t.rectFill,borderColor:t.rectStroke})},[n("div",yc,[n("img",{src:t.icon},null,8,wc)]),n("div",kc,[n("div",{class:"custom-palette__item-label",style:an({color:t.textFill})},D(t.label),5)])],44,xc)),64))]),e[3]||(e[3]=n("div",{class:"custom-palette__tips"},[n("div",{class:"tips-title"},"💡 交互说明"),n("ul",{class:"tips-list"},[n("li",null,[n("strong",null,"Default:"),I(" 白底 + 彩色图标")]),n("li",null,[n("strong",null,"Hover:"),I(" 淡色背景")]),n("li",null,[n("strong",null,"Selected:"),I(" 彩底 + 白色图标")])])],-1))])]),_:1})])]))}}),Cc=O(Dc,[["__scopeId","data-v-c758e28b"]]),Sc=`<template>
  <div class="demo-node-svg">
    <!-- 事件日志面板 -->
    <div class="demo-node-svg__log">
      <div class="demo-node-svg__log-header">
        <h4>事件日志</h4>
        <button class="demo-node-svg__clear-btn" @click="clearLogs" title="清除日志">
          清除
        </button>
      </div>
      <div class="demo-node-svg__log-content">
        <div v-for="(log, index) in logs" :key="index" class="demo-node-svg__log-item">
          {{ log }}
        </div>
      </div>
    </div>

    <!-- 画布容器 -->
    <div class="demo-node-svg__canvas">
      <FlowDesignerLayout
        mode="design"
        :before-graph-init="handleBeforeGraphInit"
        @ready="handleReady"
      >
        <!-- 自定义节点面板插槽 -->
        <template #palette="{ onStartDrag }">
          <div class="custom-palette">
            <div class="custom-palette__header">
              <h3 class="custom-palette__title">VUE 节点</h3>
              <span class="custom-palette__desc">三种状态切换</span>
            </div>

            <div class="custom-palette__section">
              <div class="custom-palette__section-title">带图标的节点</div>
              <div
                v-for="nodeType in nodeTypesConfig"
                :key="nodeType.type"
                class="custom-palette__item"
                @mousedown="(e) => handleStartDrag(e, nodeType, onStartDrag)"
                :style="{ background: nodeType.rectFill, borderColor: nodeType.rectStroke}"
              >
                <div class="custom-palette__item-icon" >
                  <img :src="nodeType.icon" />
                </div>
                <div class="custom-palette__item-info">
                  <div class="custom-palette__item-label" :style="{ color: nodeType.textFill}">{{ nodeType.label }}</div>
                </div>
              </div>

            </div>

            <div class="custom-palette__tips">
              <div class="tips-title">💡 交互说明</div>
              <ul class="tips-list">
                <li><strong>Default:</strong> 白底 + 彩色图标</li>
                <li><strong>Hover:</strong> 淡色背景</li>
                <li><strong>Selected:</strong> 彩底 + 白色图标</li>
              </ul>
            </div>
          </div>
        </template>
      </FlowDesignerLayout>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import FlowDesignerLayout from '@/components/FlowDesigner/FlowDesignerLayout.vue'
import type { FlowDesigner, FlowDesignerOptions } from '@/components/FlowDesigner/core'
import { Graph, Node } from '@antv/x6'
import StartNode from './components/StartNode.vue'
import ApproverNode from './components/ApproverNode.vue'


import startSvg from "./icons/start.svg";
import startHover from "./icons/start-hover.svg";

import approvalSvg from "./icons/approval.svg";
import approvalHoverSvg from "./icons/approval-hover.svg";
import {register} from "@antv/x6-vue-shape";



const logs = ref<string[]>([])

// 节点类型配置（包含颜色和 iconPath）
interface NodeTypeConfig {
  type: string
  label: string
  hint: string
  color: string
  hoverColor: string
  iconPath: string
  width: number
  height: number
}

const nodeTypesConfig: any[] = [
  {
    type: 'vue-start-node',
    label: '开始节点',
    classNamePerfix: 'x6',
    width: 120,
    height: 38,
    rectStroke: '#95d375',
    rectStrokeWidth: 1,
    rectFill: '#edf8e7',
    icon: startSvg,
    iconHover: startHover,
    textFill: '#81cb5c'
  },
  {
    type: 'vue-approval-node',
    label: '审批节点',
    classNamePerfix: 'x6',
    width: 120,
    height: 38,
    rectStroke: '#83b3f7',
    rectStrokeWidth: 1,
    rectFill: '#e6eeff',
    icon: approvalSvg,
    iconHover: approvalHoverSvg,
    textFill: '#5d9df7'
  },
]

const Ports = {
  groups: {
    top: {
      position: 'top',
      attrs: {
        circle: {
          r: 4,
          magnet: true,
          stroke: '#5F95FF',
          strokeWidth: 1,
          fill: '#fff',
          style: {
            visibility: 'hidden',
          },
        },
        label: {
          position: 'top',
        },
        text: {
          text: '',
          fill: '#ff5800',
        },
      },
    },
    right: {
      position: 'right',
      attrs: {
        circle: {
          r: 4,
          magnet: true,
          stroke: '#5F95FF',
          strokeWidth: 1,
          fill: '#fff',
          style: {
            visibility: 'hidden',
          },
        },
        label: {
          position: 'right',
        },
        text: {
          text: '',
          fill: '#ff5800',
        },
      },
    },
    bottom: {
      position: 'bottom',
      attrs: {
        circle: {
          r: 4,
          magnet: true,
          stroke: '#5F95FF',
          strokeWidth: 1,
          fill: '#fff',
          style: {
            visibility: 'hidden',
          },
        },
        label: {
          position: 'bottom',
        },
        text: {
          text: '',
          fill: '#ff5800',
        },
      },
    },
    left: {
      position: 'left',
      attrs: {
        circle: {
          r: 4,
          magnet: true,
          stroke: '#5F95FF',
          strokeWidth: 1,
          fill: '#fff',
          style: {
            visibility: 'hidden',
          },
        },
        label: {
          position: 'left',
        },
        text: {
          text: '',
          fill: '#ff5800',
        },
      },
    },
  },
  items: [
    {
      group: 'top',
      label: {
        position : 'top'
      }
    },
    {
      group: 'right',
      label: {
        position : 'right'
      }
    },
    {
      group: 'bottom',
      label: {
        position : 'bottom'
      }
    },
    {
      group: 'left',
      label: {
        position : 'left'
      }
    },
  ],
}


// 手动跟踪节点的选中状态（因为 X6 的 selection 可能有默认行为）
const selectedNodesMap = new Map<string, boolean>()

function addLog(message: string) {
  const timestamp = new Date().toLocaleTimeString()
  logs.value.push(\`[\${timestamp}] \${message}\`)
}

function clearLogs() {
  logs.value = []
}



/**
 * Graph 初始化前钩子：注册带 SVG icon 的自定义节点
 */
function handleBeforeGraphInit(options: FlowDesignerOptions) {
  addLog('🔧 beforeGraphInit: 开始注册 SVG 节点')

  register({
    shape: 'vue-start-node',
    width: 120, height: 38,
    component: StartNode,
    ports: { ...Ports },
  })

  register({
    shape: 'vue-approval-node',
    width: 120, height: 38,
    component: ApproverNode,
    ports: { ...Ports },
  })

  addLog('🎉 所有 SVG 节点注册完成')
}

function handleReady(designer: FlowDesigner, graph: Graph) {
  addLog('✅ 画布初始化完成')
  addLog('💡 提示: 悬停查看 hover 效果，点击切换 selected 状态')


  // ─── 添加示例节点 ───────────────────────────────────────────────────
  setTimeout(() => {
    graph.addNode({
      shape: 'vue-start-node',
      x: 100,
      y: 100,
      label: '开始节点',
    })

    addLog('📦 已添加 3 个示例节点')
    addLog('🎨 试试悬停和点击节点吧！')
  }, 100)
}

function handleStartDrag(e: MouseEvent, nodeType: NodeTypeConfig, onStartDrag: any) {
  addLog(\`🎯 开始拖拽: \${nodeType.label}\`)

  onStartDrag(e, {
    shape: nodeType.type,
    label: nodeType.label,
    width: nodeType.width,
    height: nodeType.height,
    data: {
      label: nodeType.label,
      nodeInfo: {
        hint: nodeType.hint,
        color: nodeType.color,
      }
    }
  })
}
<\/script>

<style scoped>
.demo-node-svg {
  display: flex;
  height: 100%;
  min-height: 600px;
  gap: 16px;
}

.demo-node-svg__log {
  width: 280px;
  border: 1px solid #e8e8e8;
  border-radius: 8px;
  padding: 16px;
  background: #fafafa;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

.demo-node-svg__log-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
}

.demo-node-svg__log h4 {
  margin: 0;
  font-size: 14px;
  color: #1a1a2e;
  font-weight: 600;
}

.demo-node-svg__clear-btn {
  padding: 2px 8px;
  font-size: 12px;
  color: #666;
  background: #fff;
  border: 1px solid #d9d9d9;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.2s;
  user-select: none;
}

.demo-node-svg__clear-btn:hover {
  color: #1890ff;
  border-color: #1890ff;
}

.demo-node-svg__log-content {
  flex: 1;
  overflow-y: auto;
  font-size: 12px;
  line-height: 1.8;
}

.demo-node-svg__log-item {
  padding: 4px 0;
  color: #555;
  font-family: 'Monaco', 'Menlo', 'Consolas', monospace;
  border-bottom: 1px solid #f0f0f0;
}

.demo-node-svg__log-item:last-child {
  border-bottom: none;
}

.demo-node-svg__canvas {
  flex: 1;
  border: 1px solid #e8e8e8;
  border-radius: 8px;
  overflow: hidden;
  background: #fff;
}

/* ==================== 自定义节点面板样式 ==================== */
.custom-palette {
  display: flex;
  flex-direction: column;
  height: 100%;
  background: linear-gradient(to bottom, #f9fafb, #ffffff);
  border-right: 1px solid #e8e8e8;
  width: 200px;
}

.custom-palette__header {
  padding: 16px;
  border-bottom: 2px solid #e8e8e8;
  background: #fff;
}

.custom-palette__title {
  margin: 0 0 4px 0;
  font-size: 16px;
  font-weight: 600;
  color: #1a1a2e;
}

.custom-palette__desc {
  font-size: 12px;
  color: #999;
}

.custom-palette__section {
  padding: 12px;
}

.custom-palette__section-title {
  font-size: 11px;
  font-weight: 600;
  color: #999;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  margin-bottom: 8px;
  padding: 0 4px;
}

.custom-palette__item {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 10px;
  margin-bottom: 8px;
  background: #fff;
  border: 1px solid #e8e8e8;
  border-radius: 12px;
  cursor: move;
  transition: all 0.2s;
  user-select: none;
  width: 160px;
  height: 50px;
}

.custom-palette__item:hover {
  border-color: #1677ff;
  box-shadow: 0 2px 8px rgba(22, 119, 255, 0.15);
  transform: translateY(-1px);
}

.custom-palette__item:active {
  transform: translateY(0);
  box-shadow: 0 1px 4px rgba(22, 119, 255, 0.2);
}

.custom-palette__item-icon {
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  flex-shrink: 0;
}

.custom-palette__item-info {
  flex: 1;
  min-width: 0;
}

.custom-palette__item-label {
  font-size: 13px;
  font-weight: 500;
  color: #333;
  margin-bottom: 2px;
}

.custom-palette__item-hint {
  font-size: 11px;
  color: #999;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

/* ==================== 交互说明 ==================== */
.custom-palette__tips {
  margin-top: auto;
  padding: 12px;
  background: #fff9e6;
  border-top: 1px solid #ffe58f;
}

.tips-title {
  font-size: 12px;
  font-weight: 600;
  color: #d48806;
  margin-bottom: 8px;
}

.tips-list {
  margin: 0;
  padding-left: 16px;
  font-size: 11px;
  line-height: 1.8;
  color: #8c8c8c;
}

.tips-list li {
  margin-bottom: 4px;
}

.tips-list strong {
  color: #595959;
}

</style>


<!--如果需要简单控制节点样式，需要将此节点样式暴露到全局,适当增加前缀以防止污染-->
<style>
.x6-svg-start-node-body:hover{
  stroke-width: 2px;
  fill: #caf1c1;
}
.x6-node-selected .x6-svg-start-node-body{
  stroke: #48c02a;
  stroke-width: 2px;
  fill: #8fd16f
}
.x6-node-selected .x6-svg-start-node-image {
  display: none;
}
.x6-node-selected .x6-svg-start-node-imageHover {
  display: block;
}
.x6-node-selected .x6-svg-start-node-label {
  fill: #ffffff
}

.x6-node-selected .x6-svg-approval-node-body{
  stroke: #003eca;
  stroke-width: 2px;
  fill: #1d78f4
}
.x6-node-selected .x6-svg-approval-node-image {
  display: none;
}

.x6-node-selected .x6-svg-approval-node-imageHover {
  display: block;
}
.x6-node-selected .x6-svg-approval-node-label {
  fill: #ffffff
}

.x6-node-selected .x6-svg-condition-node-body{
  stroke: #ffa100;
  stroke-width: 2px;
  fill: #fdc059
}
.x6-node-selected .x6-svg-condition-node-image {
  display: none;
}

.x6-node-selected .x6-svg-condition-node-imageHover {
  display: block;
}
.x6-node-selected .x6-svg-condition-node-label {
  fill: #ffffff
}

</style>
`,Nc=`<template>\r
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
`,Fc=`<template>\r
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
`,$c={class:"demo-node-svg"},Ec={class:"demo-node-svg__log"},Tc={class:"demo-node-svg__log-content"},Lc={class:"demo-node-svg__canvas"},Rc={class:"custom-palette"},zc={class:"custom-palette__section"},Mc=["onMousedown"],Ac={class:"custom-palette__item-icon"},Ic=["src"],Pc={class:"custom-palette__item-info"},Gc={style:{width:"100%",height:"100%"},"data-cvn-root":""},Bc={class:"body"},Wc=["src"],Oc=["src"],Hc={class:"info"},Uc={class:"name"},Vc={style:{width:"100%",height:"100%"},"data-cvn-root":""},Zc={class:"body"},jc=["src"],Yc=["src"],qc={class:"info"},Xc={class:"name"},Jc=P({__name:"demo-node-designer",setup(C){const m=w([]),a=[{type:"slot-startNode",label:"开始节点",classNamePerfix:"x6",width:120,height:38,rectStroke:"#95d375",rectStrokeWidth:1,rectFill:"#edf8e7",icon:vn,iconHover:bn,textFill:"#81cb5c"},{type:"slot-approvalNode",label:"审批节点",classNamePerfix:"x6",width:120,height:38,rectStroke:"#83b3f7",rectStrokeWidth:1,rectFill:"#e6eeff",icon:xn,iconHover:yn,textFill:"#5d9df7"}];function d(r){const o=new Date().toLocaleTimeString();m.value.push(`[${o}] ${r}`)}function s(){m.value=[]}function p(r){d("🔧 beforeGraphInit: 开始注册 SVG 节点"),d("🎉 所有 插槽 节点注册完成")}function v(r,o){d("✅ 画布初始化完成"),d("💡 提示: 悬停查看 hover 效果，点击切换 selected 状态"),setTimeout(()=>{o.addNode({shape:"common-vue-node","node-type":"slot-startNode",x:120,y:38,label:"开始节点",data:{}}),d("📦 已添加 2 个示例节点（测试响应式 data）"),d("🎨 试试悬停和点击节点吧！")},100)}function l(r,o,e){d(`🎯 开始拖拽: ${o.label}`),e(r,{shape:"common-vue-node",label:o.label,width:o.width,height:o.height,"node-type":o.type,data:{}})}return(r,o)=>(u(),f("div",$c,[n("div",Ec,[n("div",{class:"demo-node-svg__log-header"},[o[0]||(o[0]=n("h4",null,"事件日志",-1)),n("button",{class:"demo-node-svg__clear-btn",onClick:s,title:"清除日志"}," 清除 ")]),n("div",Tc,[(u(!0),f(B,null,W(m.value,(e,i)=>(u(),f("div",{key:i,class:"demo-node-svg__log-item"},D(e),1))),128))])]),n("div",Lc,[c(U,{mode:"design","before-graph-init":p,onReady:v},{palette:N(({onStartDrag:e})=>[n("div",Rc,[o[2]||(o[2]=n("div",{class:"custom-palette__header"},[n("h3",{class:"custom-palette__title"},"插槽 节点"),n("span",{class:"custom-palette__desc"})],-1)),n("div",zc,[o[1]||(o[1]=n("div",{class:"custom-palette__section-title"},"带图标的节点",-1)),(u(),f(B,null,W(a,i=>n("div",{key:i.type,class:"custom-palette__item",onMousedown:t=>l(t,i,e),style:an({background:i.rectFill,borderColor:i.rectStroke})},[n("div",Ac,[n("img",{src:i.icon},null,8,Ic)]),n("div",Pc,[n("div",{class:"custom-palette__item-label",style:an({color:i.textFill})},D(i.label),5)])],44,Mc)),64))]),o[3]||(o[3]=n("div",{class:"custom-palette__tips"},[n("div",{class:"tips-title"},"💡 交互说明"),n("ul",{class:"tips-list"},[n("li",null,[n("strong",null,"Default:"),I(" 白底 + 彩色图标")]),n("li",null,[n("strong",null,"Hover:"),I(" 淡色背景")]),n("li",null,[n("strong",null,"Selected:"),I(" 彩底 + 白色图标")])])],-1))])]),"node-slot-startNode":N(({node:e,graph:i,data:t,label:g,state:h})=>[n("div",Gc,[n("div",{class:sn(["node-start",{"node-start--selected":h.value==="selected"}])},[n("div",Bc,[h.value!=="selected"?(u(),f("img",{key:0,src:R(vn)},null,8,Wc)):E("",!0),h.value==="selected"?(u(),f("img",{key:1,src:R(bn)},null,8,Oc)):E("",!0),n("div",Hc,[n("div",Uc,D(g||"开始"),1)])])],2)])]),"node-slot-approvalNode":N(({node:e,graph:i,data:t,label:g,state:h})=>[n("div",Vc,[n("div",{class:sn(["node-approval",{"node-approval--selected":h==="selected"}])},[n("div",Zc,[h!=="selected"?(u(),f("img",{key:0,src:R(xn)},null,8,jc)):E("",!0),h==="selected"?(u(),f("img",{key:1,src:R(yn)},null,8,Yc)):E("",!0),n("div",qc,[n("div",Xc,D(g||"开始"),1)])])],2)])]),_:1})])]))}}),Kc=O(Jc,[["__scopeId","data-v-726b9573"]]),Qc=`<template>
  <div class="demo-node-svg">
    <!-- 事件日志面板 -->
    <div class="demo-node-svg__log">
      <div class="demo-node-svg__log-header">
        <h4>事件日志</h4>
        <button class="demo-node-svg__clear-btn" @click="clearLogs" title="清除日志">
          清除
        </button>
      </div>
      <div class="demo-node-svg__log-content">
        <div v-for="(log, index) in logs" :key="index" class="demo-node-svg__log-item">
          {{ log }}
        </div>
      </div>
    </div>

    <!-- 画布容器 -->
    <div class="demo-node-svg__canvas">
      <FlowDesignerLayout
        mode="design"
        :before-graph-init="handleBeforeGraphInit"
        @ready="handleReady"
      >
        <!-- 自定义节点面板插槽 -->
        <template #palette="{ onStartDrag }">
          <div class="custom-palette">
            <div class="custom-palette__header">
              <h3 class="custom-palette__title">插槽 节点</h3>
              <span class="custom-palette__desc"></span>
            </div>

            <div class="custom-palette__section">
              <div class="custom-palette__section-title">带图标的节点</div>
              <div
                v-for="nodeType in nodeTypesConfig"
                :key="nodeType.type"
                class="custom-palette__item"
                @mousedown="(e) => handleStartDrag(e, nodeType, onStartDrag)"
                :style="{ background: nodeType.rectFill, borderColor: nodeType.rectStroke}"
              >
                <div class="custom-palette__item-icon" >
                  <img :src="nodeType.icon" />
                </div>
                <div class="custom-palette__item-info">
                  <div class="custom-palette__item-label" :style="{ color: nodeType.textFill}">{{ nodeType.label }}</div>
                </div>
              </div>

            </div>

            <div class="custom-palette__tips">
              <div class="tips-title">💡 交互说明</div>
              <ul class="tips-list">
                <li><strong>Default:</strong> 白底 + 彩色图标</li>
                <li><strong>Hover:</strong> 淡色背景</li>
                <li><strong>Selected:</strong> 彩底 + 白色图标</li>
              </ul>
            </div>
          </div>
        </template>

        <!-- node-type="slot-startNode" 的节点内容 -->
        <template #node-slot-startNode="{ node, graph, data, label, state }">
          <div style="width: 100%;height: 100%" data-cvn-root>
            <div class="node-start" :class="{ 'node-start--selected': state.value === 'selected' }">
              <div class="body">
                <img v-if="state.value !== 'selected'" :src="startSvg" />
                <img v-if="state.value === 'selected'" :src="startSvgHover" />
                <div class="info">
                  <div class="name">{{ label || '开始' }}</div>
                </div>
              </div>
            </div>
          </div>

        </template>

        <!-- node-type="slot-approvalNode" 的节点内容 -->
        <template #node-slot-approvalNode="{ node, graph, data, label, state }">
          <div style="width: 100%;height: 100%" data-cvn-root>
            <div class="node-approval" :class="{ 'node-approval--selected': state === 'selected' }">
              <div class="body">
                <img v-if="state !== 'selected'" :src="approvalSvg" />
                <img v-if="state === 'selected'" :src="approvalHoverSvg" />
                <div class="info">
                  <div class="name">{{ label || '开始' }}</div>
                </div>
              </div>
            </div>
          </div>
        </template>

      </FlowDesignerLayout>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import FlowDesignerLayout from '@/components/FlowDesigner/FlowDesignerLayout.vue'
import type { FlowDesigner, FlowDesignerOptions } from '@/components/FlowDesigner/core'
import { Graph, Node } from '@antv/x6'
import StartNode from './components/StartNode.vue'
import ApproverNode from './components/ApproverNode.vue'


import startSvg from "./icons/start.svg";
import startSvgHover from "./icons/start-hover.svg";

import approvalSvg from "./icons/approval.svg";
import approvalHoverSvg from "./icons/approval-hover.svg";
import {register} from "@antv/x6-vue-shape";



const logs = ref<string[]>([])

// 节点类型配置（包含颜色和 iconPath）
interface NodeTypeConfig {
  type: string
  label: string
  hint: string
  color: string
  hoverColor: string
  iconPath: string
  width: number
  height: number
}

const nodeTypesConfig: any[] = [
  {
    type: 'slot-startNode',
    label: '开始节点',
    classNamePerfix: 'x6',
    width: 120,
    height: 38,
    rectStroke: '#95d375',
    rectStrokeWidth: 1,
    rectFill: '#edf8e7',
    icon: startSvg,
    iconHover: startSvgHover,
    textFill: '#81cb5c'
  },
  {
    type: 'slot-approvalNode',
    label: '审批节点',
    classNamePerfix: 'x6',
    width: 120,
    height: 38,
    rectStroke: '#83b3f7',
    rectStrokeWidth: 1,
    rectFill: '#e6eeff',
    icon: approvalSvg,
    iconHover: approvalHoverSvg,
    textFill: '#5d9df7'
  },
]

const Ports = {
  groups: {
    top: {
      position: 'top',
      attrs: {
        circle: {
          r: 4,
          magnet: true,
          stroke: '#5F95FF',
          strokeWidth: 1,
          fill: '#fff',
          style: {
            visibility: 'hidden',
          },
        },
        label: {
          position: 'top',
        },
        text: {
          text: '',
          fill: '#ff5800',
        },
      },
    },
    right: {
      position: 'right',
      attrs: {
        circle: {
          r: 4,
          magnet: true,
          stroke: '#5F95FF',
          strokeWidth: 1,
          fill: '#fff',
          style: {
            visibility: 'hidden',
          },
        },
        label: {
          position: 'right',
        },
        text: {
          text: '',
          fill: '#ff5800',
        },
      },
    },
    bottom: {
      position: 'bottom',
      attrs: {
        circle: {
          r: 4,
          magnet: true,
          stroke: '#5F95FF',
          strokeWidth: 1,
          fill: '#fff',
          style: {
            visibility: 'hidden',
          },
        },
        label: {
          position: 'bottom',
        },
        text: {
          text: '',
          fill: '#ff5800',
        },
      },
    },
    left: {
      position: 'left',
      attrs: {
        circle: {
          r: 4,
          magnet: true,
          stroke: '#5F95FF',
          strokeWidth: 1,
          fill: '#fff',
          style: {
            visibility: 'hidden',
          },
        },
        label: {
          position: 'left',
        },
        text: {
          text: '',
          fill: '#ff5800',
        },
      },
    },
  },
  items: [
    {
      group: 'top',
      label: {
        position : 'top'
      }
    },
    {
      group: 'right',
      label: {
        position : 'right'
      }
    },
    {
      group: 'bottom',
      label: {
        position : 'bottom'
      }
    },
    {
      group: 'left',
      label: {
        position : 'left'
      }
    },
  ],
}


// 手动跟踪节点的选中状态（因为 X6 的 selection 可能有默认行为）
const selectedNodesMap = new Map<string, boolean>()

function addLog(message: string) {
  const timestamp = new Date().toLocaleTimeString()
  logs.value.push(\`[\${timestamp}] \${message}\`)
}

function clearLogs() {
  logs.value = []
}
/**
 * Graph 初始化前钩子：注册带 SVG icon 的自定义节点
 */
function handleBeforeGraphInit(options: FlowDesignerOptions) {
  addLog('🔧 beforeGraphInit: 开始注册 SVG 节点')



  addLog('🎉 所有 插槽 节点注册完成')
}

function handleReady(designer: FlowDesigner, graph: Graph) {
  addLog('✅ 画布初始化完成')
  addLog('💡 提示: 悬停查看 hover 效果，点击切换 selected 状态')


  // ─── 添加示例节点 ───────────────────────────────────────────────────
  setTimeout(() => {
    // 方式1：使用 data.nodeType（依赖 CommonVueNode 的 fallback 机制）
    const node1 = graph.addNode({
      shape: 'common-vue-node',
      'node-type': 'slot-startNode', // Vue 插槽名称，对应 <template #node-xxx>
      x: 120,
      y: 38,
      label: '开始节点',
      data: {}
    })

    // 方式2：使用顶层 'node-type' 属性（推荐，更明确）
    // const node2 = graph.addNode({
    //   shape: 'common-vue-node',
    //   'node-type': 'slot-approvalNode',
    //   x: 120,
    //   y: 38,
    //   label: '审批节点 (测试响应式)',
    //   data: {}
    // })

    addLog('📦 已添加 2 个示例节点（测试响应式 data）')
    addLog('🎨 试试悬停和点击节点吧！')

  }, 100)
}

function handleStartDrag(e: MouseEvent, nodeType: NodeTypeConfig, onStartDrag: any) {
  addLog(\`🎯 开始拖拽: \${nodeType.label}\`)

  onStartDrag(e, {
    shape: 'common-vue-node',
    label: nodeType.label,
    width: nodeType.width,
    height: nodeType.height,
    'node-type': nodeType.type, // Vue 插槽名称，对应 <template #node-xxx>
    data: {
      //nodeType: nodeType.type,
    }
  })
}
<\/script>

<style scoped>
.demo-node-svg {
  display: flex;
  height: 100%;
  min-height: 600px;
  gap: 16px;
}

.demo-node-svg__log {
  width: 280px;
  border: 1px solid #e8e8e8;
  border-radius: 8px;
  padding: 16px;
  background: #fafafa;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

.demo-node-svg__log-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
}

.demo-node-svg__log h4 {
  margin: 0;
  font-size: 14px;
  color: #1a1a2e;
  font-weight: 600;
}

.demo-node-svg__clear-btn {
  padding: 2px 8px;
  font-size: 12px;
  color: #666;
  background: #fff;
  border: 1px solid #d9d9d9;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.2s;
  user-select: none;
}

.demo-node-svg__clear-btn:hover {
  color: #1890ff;
  border-color: #1890ff;
}

.demo-node-svg__log-content {
  flex: 1;
  overflow-y: auto;
  font-size: 12px;
  line-height: 1.8;
}

.demo-node-svg__log-item {
  padding: 4px 0;
  color: #555;
  font-family: 'Monaco', 'Menlo', 'Consolas', monospace;
  border-bottom: 1px solid #f0f0f0;
}

.demo-node-svg__log-item:last-child {
  border-bottom: none;
}

.demo-node-svg__canvas {
  flex: 1;
  border: 1px solid #e8e8e8;
  border-radius: 8px;
  overflow: hidden;
  background: #fff;
}

/* ==================== 自定义节点面板样式 ==================== */
.custom-palette {
  display: flex;
  flex-direction: column;
  height: 100%;
  background: linear-gradient(to bottom, #f9fafb, #ffffff);
  border-right: 1px solid #e8e8e8;
  width: 200px;
}

.custom-palette__header {
  padding: 16px;
  border-bottom: 2px solid #e8e8e8;
  background: #fff;
}

.custom-palette__title {
  margin: 0 0 4px 0;
  font-size: 16px;
  font-weight: 600;
  color: #1a1a2e;
}

.custom-palette__desc {
  font-size: 12px;
  color: #999;
}

.custom-palette__section {
  padding: 12px;
}

.custom-palette__section-title {
  font-size: 11px;
  font-weight: 600;
  color: #999;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  margin-bottom: 8px;
  padding: 0 4px;
}

.custom-palette__item {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 10px;
  margin-bottom: 8px;
  background: #fff;
  border: 1px solid #e8e8e8;
  border-radius: 12px;
  cursor: move;
  transition: all 0.2s;
  user-select: none;
  width: 160px;
  height: 50px;
}

.custom-palette__item:hover {
  border-color: #1677ff;
  box-shadow: 0 2px 8px rgba(22, 119, 255, 0.15);
  transform: translateY(-1px);
}

.custom-palette__item:active {
  transform: translateY(0);
  box-shadow: 0 1px 4px rgba(22, 119, 255, 0.2);
}

.custom-palette__item-icon {
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  flex-shrink: 0;
}

.custom-palette__item-info {
  flex: 1;
  min-width: 0;
}

.custom-palette__item-label {
  font-size: 13px;
  font-weight: 500;
  color: #333;
  margin-bottom: 2px;
}

.custom-palette__item-hint {
  font-size: 11px;
  color: #999;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

/* ==================== 交互说明 ==================== */
.custom-palette__tips {
  margin-top: auto;
  padding: 12px;
  background: #fff9e6;
  border-top: 1px solid #ffe58f;
}

.tips-title {
  font-size: 12px;
  font-weight: 600;
  color: #d48806;
  margin-bottom: 8px;
}

.tips-list {
  margin: 0;
  padding-left: 16px;
  font-size: 11px;
  line-height: 1.8;
  color: #8c8c8c;
}

.tips-list li {
  margin-bottom: 4px;
}

.tips-list strong {
  color: #595959;
}


/* ==================== 自定义节点样式 ==================== */
.node-start {
  width: 120px;
  height: 38px;
  background: #fff;
  border: 1px solid #52c41a;
  border-radius: 8px; overflow: hidden;
  box-shadow: 0 2px 8px rgba(0,0,0,.08);
  display: flex; flex-direction: column;
  user-select: none;
  background: #edf8e7;
  transition: box-shadow 0.2s, border-color 0.2s;
}
.node-start:hover {
  border: 2px solid #52c41a;
  -background: #f1f5f1;
}

.node-start .body { flex: 1; display: flex; align-items: center; padding: 0 12px; gap: 10px; }
.node-start .icon { font-size: 16px; color: #52c41a; }
.node-start .info { overflow: hidden; flex: 1; }
.node-start .name { font-size: 13px; color: #81cb5c; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; font-weight: 390}

.node-start--selected {
  border: 2px solid #52c41a;
  background: #8fd16f;
  box-shadow: 0 0 0 3px rgba(245,34,45,0.15), 0 2px 8px rgba(0,0,0,.08);
}
.node-start--selected .name{
  color: white;
}



.node-approval {
  width: 120px;
  height: 38px;
  background: #e6eeff;
  border: 1px solid #83b3f7;
  border-radius: 8px; overflow: hidden;
  box-shadow: 0 2px 8px rgba(0,0,0,.08);
  display: flex; flex-direction: column;
  user-select: none;
  transition: box-shadow 0.2s, border-color 0.2s;
}
.node-approval:hover {
  border: 2px solid #83b3f7;
  -background: #f1f5f1;
}

.node-approval .body { flex: 1; display: flex; align-items: center; padding: 0 12px; gap: 10px; }
.node-approval .info { overflow: hidden; flex: 1; }
.node-approval .name { font-size: 13px; color: #5d9df7; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; font-weight: 390}

.node-approval--selected {
  border: 2px solid #003eca;
  background: #1d78f4;
  box-shadow: 0 0 0 3px rgba(245,34,45,0.15), 0 2px 8px rgba(0,0,0,.08);
}
.node-approval--selected .name{
  color: white;
}

</style>

`,np={class:"demo-node-svg"},ep={class:"demo-node-svg__log"},rp={class:"demo-node-svg__log-content"},op={class:"demo-node-svg__canvas"},tp={class:"custom-palette"},sp={class:"custom-palette__section"},lp=["onMousedown"],ip={class:"custom-palette__item-icon"},ap=["src"],dp={class:"custom-palette__item-info"},cp=["onMousedown"],pp={class:"custom-palette__item-icon"},gp=["src"],mp=P({__name:"demo-edge-svg",setup(C){const m=w([]),a=[{type:"svg-start-node",label:"开始节点",classNamePerfix:"x6",width:120,height:38,rectStroke:"#95d375",rectStrokeWidth:1,rectFill:"#edf8e7",icon:vn,iconHover:bn,textFill:"#81cb5c"},{type:"svg-approval-node",label:"审批节点",classNamePerfix:"x6",width:120,height:38,rectStroke:"#83b3f7",rectStrokeWidth:1,rectFill:"#e6eeff",icon:xn,iconHover:yn,textFill:"#5d9df7"}],d={groups:{top:{position:"top",attrs:{circle:{r:4,magnet:!0,stroke:"#5F95FF",strokeWidth:1,fill:"#fff",style:{visibility:"hidden"}},label:{position:"top"},text:{text:"",fill:"#ff5800"}}},right:{position:"right",attrs:{circle:{r:4,magnet:!0,stroke:"#5F95FF",strokeWidth:1,fill:"#fff",style:{visibility:"hidden"}},label:{position:"right"},text:{text:"",fill:"#ff5800"}}},bottom:{position:"bottom",attrs:{circle:{r:4,magnet:!0,stroke:"#5F95FF",strokeWidth:1,fill:"#fff",style:{visibility:"hidden"}},label:{position:"bottom"},text:{text:"",fill:"#ff5800"}}},left:{position:"left",attrs:{circle:{r:4,magnet:!0,stroke:"#5F95FF",strokeWidth:1,fill:"#fff",style:{visibility:"hidden"}},label:{position:"left"},text:{text:"",fill:"#ff5800"}}}},items:[{id:"port-top",group:"top",label:{position:"top"}},{id:"port-right",group:"right",label:{position:"right"}},{id:"port-bottom",group:"bottom",label:{position:"bottom"}},{id:"port-left",group:"left",label:{position:"left"}}]};function s(o){const e=new Date().toLocaleTimeString();m.value.push(`[${e}] ${o}`)}function p(){m.value=[]}function v(o){s("🔧 beforeGraphInit: 开始注册 SVG 节点"),a.forEach(e=>{K.registerNode(e.type,{inherit:"rect",width:e.width,height:e.height,markup:[{tagName:"rect",selector:"body",className:e.classNamePerfix+"-"+e.type+"-body"},{tagName:"image",selector:"icon",className:e.classNamePerfix+"-"+e.type+"-image"},{tagName:"image",selector:"iconHover",className:e.classNamePerfix+"-"+e.type+"-imageHover"},{tagName:"text",selector:"label",className:e.classNamePerfix+"-"+e.type+"-label"}],attrs:{body:{stroke:e.rectStroke,strokeWidth:e.rectStrokeWidth,fill:e.rectFill,rx:10,ry:10},icon:{"xlink:href":e.icon,width:20,height:20,x:12,y:8},iconHover:{"xlink:href":e.iconHover,width:20,height:20,x:12,y:8,display:"none"},text:{fontSize:12,fill:e.textFill}},ports:rn({},d)},!0),s(`✅ 已注册节点: ${e.type} (${e.label})`)}),K.registerNode("svg-condition-node",{inherit:"polygon",width:132,height:72,markup:[{tagName:"polygon",selector:"body",className:"x6-svg-condition-node-body"},{tagName:"text",selector:"label",className:"x6-svg-condition-node-label"},{tagName:"image",selector:"icon",className:"x6-svg-condition-node-image"},{tagName:"image",selector:"iconHover",className:"x6-svg-condition-node-imageHover"}],attrs:{body:{strokeWidth:1,stroke:"#fdc059",fill:"#ffeed1",refPoints:"0,20 20,0 40,20 20,40"},text:{fontSize:12,fill:"#ffb02a",y:8},icon:{"xlink:href":Rn,width:20,height:20,x:56,y:8},iconHover:{"xlink:href":Jn,width:20,height:20,x:56,y:8,display:"none"}},ports:pn(rn({},d),{items:[{group:"top"},{group:"bottom"}]})},!0),s("🎉 所有 SVG 节点注册完成"),s("🔧 开始注册自定义边"),K.registerEdge("gradient-flow-edge",{inherit:"edge",attrs:{line:{stroke:"#1890ff",strokeWidth:3,targetMarker:{name:"block",width:12,height:8},strokeDasharray:5,style:{animation:"ant-line 30s infinite linear"}}}},!0),K.registerEdge("rainbow-edge",{inherit:"edge",attrs:{line:{stroke:{type:"linearGradient",stops:[{offset:"0%",color:"#667eea"},{offset:"50%",color:"#764ba2"},{offset:"100%",color:"#f093fb"}]},strokeWidth:4,targetMarker:{name:"classic",fill:"#f093fb",stroke:"#f093fb"}}}},!0),K.registerEdge("glow-edge",{inherit:"edge",attrs:{line:{stroke:"#52c41a",strokeWidth:3,targetMarker:{name:"block",fill:"#52c41a",stroke:"#52c41a",width:10,height:8},filter:{name:"dropShadow",args:{dx:0,dy:0,blur:8,color:"#52c41a"}}}}},!0),K.registerEdge("thick-arrow-edge",{inherit:"edge",attrs:{line:{stroke:"#ff4d4f",strokeWidth:5,targetMarker:{name:"block",fill:"#ff4d4f",stroke:"#ff4d4f",width:16,height:12}}}},!0),s("✨ 自定义边注册完成")}function l(o,e){s("✅ 画布初始化完成"),s("💡 提示: 悬停查看 hover 效果，点击切换 selected 状态"),setTimeout(()=>{e.addNode({shape:"svg-start-node",x:100,y:80,label:"开始",id:"node-1"}),e.addNode({shape:"svg-approval-node",x:300,y:80,label:"审批",id:"node-2"}),e.addNode({shape:"svg-start-node",x:100,y:200,label:"节点A",id:"node-3"}),e.addNode({shape:"svg-approval-node",x:300,y:200,label:"节点B",id:"node-4"}),e.addNode({shape:"svg-start-node",x:100,y:320,label:"任务1",id:"node-5"}),e.addNode({shape:"svg-approval-node",x:300,y:320,label:"任务2",id:"node-6"}),e.addNode({shape:"svg-start-node",x:100,y:440,label:"步骤X",id:"node-7"}),e.addNode({shape:"svg-approval-node",x:300,y:440,label:"步骤Y",id:"node-8"}),setTimeout(()=>{e.addEdge({shape:"gradient-flow-edge",source:{cell:"node-1",port:"port-right"},target:{cell:"node-2",port:"port-left"},label:"流动边",attrs:{line:{stroke:"#1890ff"}}}),s("➡️ 添加流动边（蚂蚁线动画）"),e.addEdge({shape:"rainbow-edge",source:{cell:"node-3",port:"port-right"},target:{cell:"node-4",port:"port-left"},label:"渐变边"}),s("🌈 添加渐变色边"),e.addEdge({shape:"glow-edge",source:{cell:"node-5",port:"port-right"},target:{cell:"node-6",port:"port-left"},label:"发光边"}),s("✨ 添加发光边"),e.addEdge({shape:"thick-arrow-edge",source:{cell:"node-7",port:"port-right"},target:{cell:"node-8",port:"port-left"},label:"粗箭头"}),s("🎯 添加粗箭头边"),s("📦 已添加 8 个节点和 4 种自定义边"),s("🎨 试试悬停和点击边吧！")},300)},100)}function r(o,e,i){s(`🎯 开始拖拽: ${e.label}`),i(o,{shape:e.type,label:e.label,width:e.width,height:e.height,data:{label:e.label,nodeInfo:{hint:e.hint,color:e.color}}})}return(o,e)=>(u(),f("div",np,[n("div",ep,[n("div",{class:"demo-node-svg__log-header"},[e[0]||(e[0]=n("h4",null,"事件日志",-1)),n("button",{class:"demo-node-svg__clear-btn",onClick:p,title:"清除日志"}," 清除 ")]),n("div",rp,[(u(!0),f(B,null,W(m.value,(i,t)=>(u(),f("div",{key:t,class:"demo-node-svg__log-item"},D(i),1))),128))])]),n("div",op,[c(U,{mode:"design","before-graph-init":v,onReady:l},{palette:N(({onStartDrag:i})=>[n("div",tp,[e[3]||(e[3]=n("div",{class:"custom-palette__header"},[n("h3",{class:"custom-palette__title"},"SVG 节点"),n("span",{class:"custom-palette__desc"},"三种状态切换")],-1)),n("div",sp,[e[2]||(e[2]=n("div",{class:"custom-palette__section-title"},"带图标的节点",-1)),(u(),f(B,null,W(a,t=>n("div",{key:t.type,class:"custom-palette__item",onMousedown:g=>r(g,t,i),style:an({background:t.rectFill,borderColor:t.rectStroke})},[n("div",ip,[n("img",{src:t.icon},null,8,ap)]),n("div",dp,[n("div",{class:"custom-palette__item-label",style:an({color:t.textFill})},D(t.label),5)])],44,lp)),64)),n("div",{key:"svg-condition-node",class:"custom-palette__item",onMousedown:t=>r(t,{type:"svg-condition-node",label:"条件分支",width:132,height:72},i),style:{background:"#ffeed1",borderColor:"#fdc059"}},[n("div",pp,[n("img",{src:R(Rn)},null,8,gp)]),e[1]||(e[1]=n("div",{class:"custom-palette__item-info"},[n("div",{class:"custom-palette__item-label",style:{color:"#ffb02a"}},"条件分支")],-1))],40,cp)]),e[4]||(e[4]=n("div",{class:"custom-palette__tips"},[n("div",{class:"tips-title"},"💡 交互说明"),n("ul",{class:"tips-list"},[n("li",null,[n("strong",null,"Default:"),I(" 白底 + 彩色图标")]),n("li",null,[n("strong",null,"Hover:"),I(" 淡色背景")]),n("li",null,[n("strong",null,"Selected:"),I(" 彩底 + 白色图标")])])],-1))])]),_:1})])]))}}),up=O(mp,[["__scopeId","data-v-fc0a7226"]]),fp=`<template>\r
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
import FlowDesignerLayout from '@/components/FlowDesigner/FlowDesignerLayout.vue'\r
import type { FlowDesigner, FlowDesignerOptions } from '@/components/FlowDesigner/core'\r
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
`;var Dn=(C=>(C.UNDO="undo",C.REDO="redo",C.REDO_ALT="redoAlt",C.COPY="copy",C.PASTE="paste",C.DELETE="delete",C.DELETE_ALT="deleteAlt",C.SELECT_ALL="selectAll",C.GROUP="group",C.UNGROUP="ungroup",C.ZOOM_IN="zoomIn",C.ZOOM_OUT="zoomOut",C.FIT_VIEW="fitView",C.RESET_VIEW="resetView",C.SAVE="save",C.SEARCH="search",C))(Dn||{});const hp=P({__name:"demo-shortcut-keymap",setup(C){const m={keyMap:{[Dn.COPY]:"ctrl+e",[Dn.PASTE]:"ctrl+shift+v",[Dn.SAVE]:null,[Dn.DELETE]:null,[Dn.DELETE_ALT]:null}};let a=null;function d(p){const v=p.getGraph(),l=v.addNode({id:"node1",shape:"rect",x:100,y:100,width:120,height:60,label:"节点 1",attrs:{body:{fill:"#5F95FF",stroke:"#2563EB",strokeWidth:2},label:{fill:"#ffffff",fontSize:14,fontWeight:"bold"}}}),r=v.addNode({id:"node2",shape:"circle",x:300,y:100,width:80,height:80,label:"节点 2",attrs:{body:{fill:"#10B981",stroke:"#059669",strokeWidth:2},label:{fill:"#ffffff",fontSize:14,fontWeight:"bold"}}}),o=v.addNode({id:"node3",shape:"ellipse",x:500,y:100,width:100,height:60,label:"节点 3",attrs:{body:{fill:"#F59E0B",stroke:"#D97706",strokeWidth:2},label:{fill:"#ffffff",fontSize:14,fontWeight:"bold"}}});v.addEdge({shape:"flow-edge",source:l,target:r,labels:["连线 1"]}),v.addEdge({shape:"flow-edge",source:r,target:o,labels:["连线 2"]}),v.centerContent(),a=()=>{var i;const e=(i=v.clipboard)==null?void 0:i.cells;e&&e.length>0&&ln.success(`已复制 ${e.length} 个元素（使用 Ctrl+E）`)},v.on("clipboard:changed",a),console.log("[Demo] 快捷键映射示例已加载"),ln.info("快捷键已重新映射：Ctrl+E=复制, Ctrl+Shift+V=粘贴")}function s(p){console.log("[Demo] 保存数据：",p),ln.success("保存成功！")}return Xn(()=>{console.log("[Demo] 组件卸载，事件监听器将由 FlowDesigner.destroy() 自动清理")}),(p,v)=>(u(),Fn(U,{shortcuts:m,onReady:d,onSave:s}))}}),_p=`<template>
  <FlowDesignerLayout
    :shortcuts="shortcutConfig"
    @ready="handleReady"
    @save="handleSave"
  />
</template>

<script setup lang="ts">
import { ref, onBeforeUnmount } from 'vue'
import { message } from 'ant-design-vue'
import FlowDesignerLayout from '../../../../components/FlowDesigner/FlowDesignerLayout.vue'
import type { FlowDesigner } from '../../../../components/FlowDesigner/core'
import { ShortcutAction } from '../../../../views/types/flow.types'

/**
 * 快捷键配置：使用 keyMap 重新映射内置操作
 */
const shortcutConfig = {
  keyMap: {
    [ShortcutAction.COPY]: 'ctrl+e',         // 复制改为 Ctrl+E
    [ShortcutAction.PASTE]: 'ctrl+shift+v',  // 粘贴改为 Ctrl+Shift+V
    [ShortcutAction.SAVE]: null,             // 禁用保存快捷键（原为 Ctrl+S）
    [ShortcutAction.DELETE]: null,           // 禁用删除快捷键（Delete 键）
    [ShortcutAction.DELETE_ALT]: null,       // 禁用删除快捷键（Backspace 键）
  }
}

// 保存事件监听器的引用，用于清理
let clipboardChangeHandler: (() => void) | null = null

/**
 * ready 回调：初始化画布内容
 */
function handleReady(designer: FlowDesigner) {
  const graph = designer.getGraph()

  // 添加节点 1
  const node1 = graph.addNode({
    id: 'node1',
    shape: 'rect',
    x: 100,
    y: 100,
    width: 120,
    height: 60,
    label: '节点 1',
    attrs: {
      body: {
        fill: '#5F95FF',
        stroke: '#2563EB',
        strokeWidth: 2,
      },
      label: {
        fill: '#ffffff',
        fontSize: 14,
        fontWeight: 'bold',
      },
    },
  })

  // 添加节点 2
  const node2 = graph.addNode({
    id: 'node2',
    shape: 'circle',
    x: 300,
    y: 100,
    width: 80,
    height: 80,
    label: '节点 2',
    attrs: {
      body: {
        fill: '#10B981',
        stroke: '#059669',
        strokeWidth: 2,
      },
      label: {
        fill: '#ffffff',
        fontSize: 14,
        fontWeight: 'bold',
      },
    },
  })

  // 添加节点 3
  const node3 = graph.addNode({
    id: 'node3',
    shape: 'ellipse',
    x: 500,
    y: 100,
    width: 100,
    height: 60,
    label: '节点 3',
    attrs: {
      body: {
        fill: '#F59E0B',
        stroke: '#D97706',
        strokeWidth: 2,
      },
      label: {
        fill: '#ffffff',
        fontSize: 14,
        fontWeight: 'bold',
      },
    },
  })

  // 添加连线
  graph.addEdge({
    shape: 'flow-edge',
    source: node1,
    target: node2,
    labels: ['连线 1'],
  })

  graph.addEdge({
    shape: 'flow-edge',
    source: node2,
    target: node3,
    labels: ['连线 2'],
  })

  // 居中显示
  graph.centerContent()

  // 监听复制事件，显示提示
  clipboardChangeHandler = () => {
    // 防御性检查：确保 clipboard 和 cells 存在
    const cells = graph.clipboard?.cells
    if (cells && cells.length > 0) {
      message.success(\`已复制 \${cells.length} 个元素（使用 Ctrl+E）\`)
    }
  }

  graph.on('clipboard:changed', clipboardChangeHandler)

  console.log('[Demo] 快捷键映射示例已加载')
  message.info('快捷键已重新映射：Ctrl+E=复制, Ctrl+Shift+V=粘贴')
}

/**
 * 保存回调（不会被触发，因为保存快捷键已禁用）
 */
function handleSave(data: any) {
  console.log('[Demo] 保存数据：', data)
  message.success('保存成功！')
}

/**
 * 组件卸载时清理事件监听器
 */
onBeforeUnmount(() => {
  // 注意：这里无法直接访问 graph，因为 graph 是在 handleReady 中创建的
  // 需要通过其他方式清理，或者在 FlowDesignerLayout 层面处理
  console.log('[Demo] 组件卸载，事件监听器将由 FlowDesigner.destroy() 自动清理')
})
<\/script>
`,vp=P({__name:"demo-node-state",setup(C){function m(a){const d=a.getGraph();a.registerNodeStateHandler("default",{apply(i){i.setAttrs({body:{stroke:"#3b82f6",strokeWidth:2,fill:"#dbeafe"},label:{fill:"#1e40af",fontWeight:"normal"}})}}),a.registerNodeStateHandler("hover",{apply(i){i.setAttrs({body:{stroke:"#8b5cf6",strokeWidth:3,fill:"#ede9fe",filter:{name:"dropShadow",args:{dx:0,dy:2,blur:6,color:"rgba(139, 92, 246, 0.4)"}}},label:{fill:"#5b21b6",fontWeight:"bold"}})},cleanup(i){i.setAttrs({body:{filter:null}})}}),a.registerNodeStateHandler("selected",{apply(i){i.setAttrs({body:{stroke:"#06b6d4",strokeWidth:4,fill:"#cffafe",filter:{name:"dropShadow",args:{dx:0,dy:0,blur:8,color:"rgba(6, 182, 212, 0.6)"}}},label:{fill:"#164e63",fontWeight:"bold",fontSize:14}})},cleanup(i){i.setAttrs({body:{filter:null}})}}),a.registerNodeStateHandler("error",{apply(i){i.setAttrs({body:{stroke:"#ef4444",strokeWidth:4,fill:"#fee2e2",filter:{name:"dropShadow",args:{dx:0,dy:2,blur:8,color:"rgba(239, 68, 68, 0.5)"}}},label:{fill:"#991b1b",fontWeight:"bold"}});const t=i.getData()||{};i.setData(pn(rn({},t),{hasError:!0,errorMessage:"节点验证失败"}))},cleanup(i){i.setAttrs({body:{filter:null}});const t=i.getData()||{};i.setData(pn(rn({},t),{hasError:!1,errorMessage:void 0}))}});const s=d.addNode({id:"node1",shape:"rect",x:80,y:80,width:140,height:70,label:"默认状态",attrs:{label:{fontSize:14}}});a.setNodeState(s,"default");const p=d.addNode({id:"node2",shape:"rect",x:280,y:80,width:140,height:70,label:"默认状态",attrs:{label:{fontSize:14}}});a.setNodeState(p,"default");const v=d.addNode({id:"node3",shape:"rect",x:480,y:80,width:140,height:70,label:"默认状态",attrs:{label:{fontSize:14}}});a.setNodeState(v,"default");const l=d.addNode({id:"node4",shape:"rect",x:80,y:200,width:140,height:70,label:"默认状态",attrs:{label:{fontSize:14}}});a.setNodeState(l,"default");const r=d.addNode({id:"node5",shape:"rect",x:280,y:200,width:140,height:70,label:"默认状态",attrs:{label:{fontSize:14}}});a.setNodeState(r,"default");const o=d.addNode({id:"node6",shape:"rect",x:480,y:200,width:140,height:70,label:"默认状态",attrs:{label:{fontSize:14}}});a.setNodeState(o,"default"),d.addEdge({id:"edge1",shape:"flow-edge",source:s,target:p,labels:["流程1"]}),d.addEdge({id:"edge2",shape:"flow-edge",source:p,target:v,labels:["流程2"]}),d.addEdge({id:"edge3",shape:"flow-edge",source:s,target:l,labels:["流程3"]}),d.addEdge({id:"edge4",shape:"flow-edge",source:l,target:r,labels:["流程4"]}),d.addEdge({id:"edge5",shape:"flow-edge",source:r,target:o,labels:["流程5"]}),d.centerContent();const e=new Map;d.on("node:dblclick",({node:i})=>{(i.getProp("_state")||"default")==="error"?(a.setNodeState(i,"default"),e.set(i.id,0),ln.success("节点已恢复到默认状态")):(a.setNodeState(i,"error"),ln.error("节点已设置为错误状态（双击可恢复）"))}),console.log("[Demo] 节点状态管理示例已加载（覆盖内置状态）"),ln.success("已覆盖 3 种内置节点状态，单击切换状态，双击切换 error 状态")}return(a,d)=>(u(),Fn(U,{onReady:m}))}}),bp=`<template>
  <FlowDesignerLayout
    @ready="handleReady"
  />
</template>

<script setup lang="ts">
import { message } from 'ant-design-vue'
import FlowDesignerLayout from '../../../../components/FlowDesigner/FlowDesignerLayout.vue'
import type { FlowDesigner } from '../../../../components/FlowDesigner/core'
import type { Node } from '@antv/x6'

/**
 * ready 回调：覆盖内置节点状态并初始化画布
 */
function handleReady(designer: FlowDesigner) {
  const graph = designer.getGraph()

  // ========== 覆盖 3 种内置节点状态 ==========

  // 1. 覆盖 default 状态：淡蓝色边框
  designer.registerNodeStateHandler('default', {
    apply(node) {
      node.setAttrs({
        body: {
          stroke: '#3b82f6',
          strokeWidth: 2,
          fill: '#dbeafe',
        },
        label: {
          fill: '#1e40af',
          fontWeight: 'normal',
        }
      })
    }
  })

  // 2. 覆盖 hover 状态：紫色加粗 + 阴影
  designer.registerNodeStateHandler('hover', {
    apply(node) {
      node.setAttrs({
        body: {
          stroke: '#8b5cf6',
          strokeWidth: 3,
          fill: '#ede9fe',
          filter: {
            name: 'dropShadow',
            args: { dx: 0, dy: 2, blur: 6, color: 'rgba(139, 92, 246, 0.4)' }
          }
        },
        label: {
          fill: '#5b21b6',
          fontWeight: 'bold',
        }
      })
    },
    cleanup(node) {
      node.setAttrs({
        body: {
          filter: null
        }
      })
    }
  })

  // 3. 覆盖 selected 状态：青色粗边框 + 光晕
  designer.registerNodeStateHandler('selected', {
    apply(node) {
      node.setAttrs({
        body: {
          stroke: '#06b6d4',
          strokeWidth: 4,
          fill: '#cffafe',
          filter: {
            name: 'dropShadow',
            args: { dx: 0, dy: 0, blur: 8, color: 'rgba(6, 182, 212, 0.6)' }
          }
        },
        label: {
          fill: '#164e63',
          fontWeight: 'bold',
          fontSize: 14,
        }
      })
    },
    cleanup(node) {
      node.setAttrs({
        body: {
          filter: null
        }
      })
    }
  })

  // ========== 新增自定义状态 ==========

  // 4. error 状态：红色粗边框 + 错误图标
  designer.registerNodeStateHandler('error', {
    apply(node) {
      node.setAttrs({
        body: {
          stroke: '#ef4444',
          strokeWidth: 4,
          fill: '#fee2e2',
          filter: {
            name: 'dropShadow',
            args: { dx: 0, dy: 2, blur: 8, color: 'rgba(239, 68, 68, 0.5)' }
          }
        },
        label: {
          fill: '#991b1b',
          fontWeight: 'bold',
        }
      })

      // 设置错误标记（可在插槽中使用）
      const currentData = node.getData() || {}
      node.setData({
        ...currentData,
        hasError: true,
        errorMessage: '节点验证失败'
      })
    },
    cleanup(node) {
      // 恢复默认样式
      node.setAttrs({
        body: {
          filter: null
        }
      })

      // 清除错误标记
      const currentData = node.getData() || {}
      node.setData({
        ...currentData,
        hasError: false,
        errorMessage: undefined
      })
    }
  })

  // ========== 创建演示节点 ==========

  const node1 = graph.addNode({
    id: 'node1',
    shape: 'rect',
    x: 80,
    y: 80,
    width: 140,
    height: 70,
    label: '默认状态',
    attrs: {
      label: {
        fontSize: 14,
      },
    },
  })
  // 设置初始状态为 default
  designer.setNodeState(node1, 'default')

  const node2 = graph.addNode({
    id: 'node2',
    shape: 'rect',
    x: 280,
    y: 80,
    width: 140,
    height: 70,
    label: '默认状态',
    attrs: {
      label: {
        fontSize: 14,
      },
    },
  })
  designer.setNodeState(node2, 'default')

  const node3 = graph.addNode({
    id: 'node3',
    shape: 'rect',
    x: 480,
    y: 80,
    width: 140,
    height: 70,
    label: '默认状态',
    attrs: {
      label: {
        fontSize: 14,
      },
    },
  })
  designer.setNodeState(node3, 'default')

  const node4 = graph.addNode({
    id: 'node4',
    shape: 'rect',
    x: 80,
    y: 200,
    width: 140,
    height: 70,
    label: '默认状态',
    attrs: {
      label: {
        fontSize: 14,
      },
    },
  })
  designer.setNodeState(node4, 'default')

  const node5 = graph.addNode({
    id: 'node5',
    shape: 'rect',
    x: 280,
    y: 200,
    width: 140,
    height: 70,
    label: '默认状态',
    attrs: {
      label: {
        fontSize: 14,
      },
    },
  })
  designer.setNodeState(node5, 'default')

  const node6 = graph.addNode({
    id: 'node6',
    shape: 'rect',
    x: 480,
    y: 200,
    width: 140,
    height: 70,
    label: '默认状态',
    attrs: {
      label: {
        fontSize: 14,
      },
    },
  })
  designer.setNodeState(node6, 'default')

  // ========== 添加连线 ==========

  graph.addEdge({
    id: 'edge1',
    shape: 'flow-edge',
    source: node1,
    target: node2,
    labels: ['流程1'],
  })

  graph.addEdge({
    id: 'edge2',
    shape: 'flow-edge',
    source: node2,
    target: node3,
    labels: ['流程2'],
  })

  graph.addEdge({
    id: 'edge3',
    shape: 'flow-edge',
    source: node1,
    target: node4,
    labels: ['流程3'],
  })

  graph.addEdge({
    id: 'edge4',
    shape: 'flow-edge',
    source: node4,
    target: node5,
    labels: ['流程4'],
  })

  graph.addEdge({
    id: 'edge5',
    shape: 'flow-edge',
    source: node5,
    target: node6,
    labels: ['流程5'],
  })

  // 居中显示
  graph.centerContent()

  // ========== 添加交互：单击切换内置状态，双击切换到 error 状态 ==========

  const builtinStates = ['default', 'hover', 'selected']
  const stateMap = new Map<string, number>() // 记录每个节点的当前状态索引

  // 双击事件：切换到 error 状态或恢复到 default 状态
  graph.on('node:dblclick', ({ node }) => {
    const currentState = node.getProp('_state') || 'default'

    if (currentState === 'error') {
      // 如果已经是 error，恢复到 default
      designer.setNodeState(node, 'default')
      stateMap.set(node.id, 0) // 重置索引
      message.success('节点已恢复到默认状态')
    } else {
      // 切换到 error 状态
      designer.setNodeState(node, 'error')
      message.error('节点已设置为错误状态（双击可恢复）')
    }
  })

  console.log('[Demo] 节点状态管理示例已加载（覆盖内置状态）')
  message.success('已覆盖 3 种内置节点状态，单击切换状态，双击切换 error 状态')
}
<\/script>
`,xp=P({__name:"demo-edge-state",setup(C){function m(a){const d=a.getGraph();a.registerEdgeStateHandler("default",{apply(S){S.setAttrs({line:{stroke:"#9333ea",strokeWidth:2}}),S.setLabelAt(0,{attrs:{label:{fill:"#6b21a8",text:"自定义默认"},rect:{fill:"#f3e8ff",stroke:"#9333ea",strokeWidth:2}}})}}),a.registerEdgeStateHandler("hover",{apply(S){S.setAttrs({line:{stroke:"#f97316",strokeWidth:4,filter:{name:"dropShadow",args:{dx:0,dy:2,blur:4,color:"rgba(249, 115, 22, 0.5)"}}}}),S.setLabelAt(0,{attrs:{label:{fill:"#9a3412",text:"悬停效果",fontWeight:"bold"},rect:{fill:"#fed7aa",stroke:"#f97316",strokeWidth:2}}})},cleanup(S){S.setAttrs({line:{filter:null}})}}),a.registerEdgeStateHandler("selected",{apply(S){S.setAttrs({line:{stroke:"#06b6d4",strokeWidth:3}}),S.setLabelAt(0,{attrs:{label:{fill:"#164e63",text:"已选中",fontWeight:"bold",fontSize:14},rect:{fill:"#cffafe",stroke:"#06b6d4",strokeWidth:3}}})},cleanup(S){S.setAttrs({line:{filter:null}})}}),a.registerEdgeStateHandler("flowing",{apply(S){S.setAttrs({line:{stroke:"#ec4899",strokeWidth:3,strokeDasharray:"10,5",style:{animation:"fd-flow 1s linear infinite"}}}),S.setLabelAt(0,{attrs:{label:{fill:"#831843",text:"数据流动中",fontStyle:"italic"},rect:{fill:"#fce7f3",stroke:"#ec4899",strokeWidth:2}}})},cleanup(S){S.setAttrs({line:{strokeDasharray:0,style:{animation:"none"}}})}}),a.registerEdgeStateHandler("dimmed",{apply(S){S.setAttrs({line:{stroke:"#4b5563",strokeWidth:1,opacity:.3,filter:{name:"blur",args:{stdDeviation:1}}}}),S.setLabelAt(0,{attrs:{label:{fill:"#6b7280",text:"已弱化",fontStyle:"italic",fontSize:11},rect:{fill:"#f3f4f6",stroke:"#9ca3af",strokeWidth:1,opacity:.5}}})},cleanup(S){S.setAttrs({line:{opacity:1,filter:null}})}});const s=d.addNode({id:"start",shape:"rect",x:80,y:120,width:100,height:60,label:"开始",attrs:{body:{stroke:"#5b8ff9",strokeWidth:2,fill:"#e6f4ff"},label:{fill:"#003a8c",fontSize:14}}}),p=d.addNode({id:"node1",shape:"rect",x:280,y:40,width:100,height:60,label:"任务 A",attrs:{label:{fontSize:14}}}),v=d.addNode({id:"node2",shape:"rect",x:280,y:140,width:100,height:60,label:"任务 B",attrs:{label:{fontSize:14}}}),l=d.addNode({id:"node3",shape:"rect",x:480,y:40,width:100,height:60,label:"任务 C",attrs:{label:{fontSize:14}}}),r=d.addNode({id:"node4",shape:"rect",x:480,y:140,width:100,height:60,label:"任务 D",attrs:{label:{fontSize:14}}}),o=d.addNode({id:"end",shape:"rect",x:680,y:120,width:100,height:60,label:"结束",attrs:{body:{stroke:"#5b8ff9",strokeWidth:2,fill:"#e6f4ff"},label:{fill:"#003a8c",fontSize:14}}}),e=d.addEdge({id:"edge1",shape:"flow-edge",source:s,target:p,labels:["默认状态"]});a.setEdgeState(e,"default");const i=d.addEdge({id:"edge2",shape:"flow-edge",source:s,target:v,labels:["悬停状态"]});a.setEdgeState(i,"default");const t=d.addEdge({id:"edge3",shape:"flow-edge",source:p,target:l,labels:["选中状态"]});a.setEdgeState(t,"default");const g=d.addEdge({id:"edge4",shape:"flow-edge",source:v,target:r,labels:["流动状态"]});a.setEdgeState(g,"default");const h=d.addEdge({id:"edge5",shape:"flow-edge",source:l,target:o,labels:["弱化状态"]});a.setEdgeState(h,"default");const F=d.addEdge({id:"edge6",shape:"flow-edge",source:r,target:o,labels:["默认状态2"]});a.setEdgeState(F,"default"),d.centerContent(),console.log("[Demo] 连线状态管理示例已加载（覆盖内置状态）"),ln.success("已覆盖 5 种内置连线状态，点击连线切换状态")}return(a,d)=>(u(),Fn(U,{onReady:m}))}}),yp=`<template>\r
  <FlowDesignerLayout\r
    @ready="handleReady"\r
  />\r
</template>\r
\r
<script setup lang="ts">\r
import { message } from 'ant-design-vue'\r
import FlowDesignerLayout from '../../../../components/FlowDesigner/FlowDesignerLayout.vue'\r
import type { FlowDesigner } from '../../../../components/FlowDesigner/core'\r
import type { Edge } from '@antv/x6'\r
\r
/**\r
 * ready 回调：覆盖内置连线状态并初始化画布\r
 */\r
function handleReady(designer: FlowDesigner) {\r
  const graph = designer.getGraph()\r
\r
  // ========== 覆盖 5 种内置连线状态 ==========\r
\r
  // 1. 覆盖 default 状态：淡紫色虚线\r
  designer.registerEdgeStateHandler('default', {\r
    apply(edge) {\r
      edge.setAttrs({\r
        line: {\r
          stroke: '#9333ea',\r
          strokeWidth: 2,\r
          //strokeDasharray: '4,4',\r
        }\r
      })\r
      edge.setLabelAt(0, {\r
        attrs: {\r
          label: {\r
            fill: '#6b21a8',\r
            text: '自定义默认',\r
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
  // 2. 覆盖 hover 状态：橙色加粗 + 阴影效果\r
  designer.registerEdgeStateHandler('hover', {\r
    apply(edge) {\r
      edge.setAttrs({\r
        line: {\r
          stroke: '#f97316',\r
          strokeWidth: 4,\r
          filter: {\r
            name: 'dropShadow',\r
            args: { dx: 0, dy: 2, blur: 4, color: 'rgba(249, 115, 22, 0.5)' }\r
          }\r
        }\r
      })\r
      edge.setLabelAt(0, {\r
        attrs: {\r
          label: {\r
            fill: '#9a3412',\r
            text: '悬停效果',\r
            fontWeight: 'bold',\r
          },\r
          rect: {\r
            fill: '#fed7aa',\r
            stroke: '#f97316',\r
            strokeWidth: 2,\r
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
  // 3. 覆盖 selected 状态：青色粗线 + 光晕\r
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
  // 4. 覆盖 flowing 状态：粉色渐变 + CSS 流动动画\r
  designer.registerEdgeStateHandler('flowing', {\r
    apply(edge) {\r
      edge.setAttrs({\r
        line: {\r
          stroke: '#ec4899',\r
          strokeWidth: 3,\r
          strokeDasharray: '10,5',\r
          // ✅ 使用 CSS animation 替代 setInterval，避免定时器泄漏\r
          style: {\r
            animation: 'fd-flow 1s linear infinite'\r
          }\r
        }\r
      })\r
      edge.setLabelAt(0, {\r
        attrs: {\r
          label: {\r
            fill: '#831843',\r
            text: '数据流动中',\r
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
      // 停止 CSS 动画\r
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
  // 5. 覆盖 dimmed 状态：深灰色半透明 + 模糊\r
  designer.registerEdgeStateHandler('dimmed', {\r
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
  // ========== 创建演示连线（展示 5 种覆盖的内置状态）==========\r
\r
  const edge1 = graph.addEdge({\r
    id: 'edge1',\r
    shape: 'flow-edge',\r
    source: startNode,\r
    target: node1,\r
    labels: ['默认状态'],\r
  })\r
  designer.setEdgeState(edge1, 'default')\r
\r
  const edge2 = graph.addEdge({\r
    id: 'edge2',\r
    shape: 'flow-edge',\r
    source: startNode,\r
    target: node2,\r
    labels: ['悬停状态'],\r
  })\r
  designer.setEdgeState(edge2, 'default')\r
\r
  const edge3 = graph.addEdge({\r
    id: 'edge3',\r
    shape: 'flow-edge',\r
    source: node1,\r
    target: node3,\r
    labels: ['选中状态'],\r
  })\r
  designer.setEdgeState(edge3, 'default')\r
\r
  const edge4 = graph.addEdge({\r
    id: 'edge4',\r
    shape: 'flow-edge',\r
    source: node2,\r
    target: node4,\r
    labels: ['流动状态'],\r
  })\r
  designer.setEdgeState(edge4, 'default')\r
\r
  const edge5 = graph.addEdge({\r
    id: 'edge5',\r
    shape: 'flow-edge',\r
    source: node3,\r
    target: endNode,\r
    labels: ['弱化状态'],\r
  })\r
  designer.setEdgeState(edge5, 'default')\r
\r
  const edge6 = graph.addEdge({\r
    id: 'edge6',\r
    shape: 'flow-edge',\r
    source: node4,\r
    target: endNode,\r
    labels: ['默认状态2'],\r
  })\r
  designer.setEdgeState(edge6, 'default')\r
\r
  // 居中显示\r
  graph.centerContent()\r
\r
  // ========== 添加交互：点击连线切换状态 ==========\r
\r
  const states = ['default', 'hover', 'selected', 'flowing', 'dimmed']\r
  const stateMap = new Map<string, number>() // 记录每条边的当前状态索引\r
\r
\r
  console.log('[Demo] 连线状态管理示例已加载（覆盖内置状态）')\r
  message.success('已覆盖 5 种内置连线状态，点击连线切换状态')\r
}\r
<\/script>\r
`,wp={style:{width:"100%",height:"100%"}},kp={class:"body"},Dp={class:"info"},Cp={class:"name"},Sp=P({__name:"vueNode1",props:{node:{}},setup(C){const m=C,a=zn("getGraph"),d=w(!1),s=w(""),p=()=>{s.value=m.node.getProp("label")};return $n(()=>{p(),m.node.on("change:data",p),m.node.on("change:label",p);const v=a==null?void 0:a();v&&(v.on("cell:selected",({cell:l})=>{l.id===m.node.id&&(d.value=!0)}),v.on("cell:unselected",({cell:l})=>{l.id===m.node.id&&(d.value=!1)}))}),On(()=>{m.node.off("change:data",p),m.node.off("change:label",p)}),(v,l)=>(u(),f("div",wp,[n("div",{class:sn(["vue-node1",{"vue-node1--selected":d.value}])},[n("div",kp,[n("div",Dp,[n("div",Cp,D(s.value||"开始"),1)])])],2)]))}}),Np=O(Sp,[["__scopeId","data-v-683ccd01"]]),Fp={class:"demo-performance"},$p={class:"demo-performance__panel"},Ep={class:"demo-performance__panel-content"},Tp={class:"demo-performance__config-item"},Lp={class:"demo-performance__input-group"},Rp=["disabled"],zp={class:"demo-performance__config-item"},Mp={class:"demo-performance__config-item"},Ap={class:"demo-performance__config-item"},Ip={class:"demo-performance__checkbox"},Pp={class:"demo-performance__config-item"},Gp={class:"demo-performance__checkbox"},Bp=["disabled"],Wp={class:"demo-performance__config-item"},Op={class:"demo-performance__checkbox"},Hp={class:"demo-performance__metrics"},Up={class:"demo-performance__metric-item"},Vp={class:"demo-performance__metric-value"},Zp={class:"demo-performance__metric-item"},jp={class:"demo-performance__metric-value"},Yp={key:0,class:"demo-performance__metric-item"},qp={class:"demo-performance__metric-value"},Xp={class:"demo-performance__metric-item"},Jp={class:"demo-performance__metric-value"},Kp={class:"demo-performance__metric-item"},Qp={class:"demo-performance__metric-value"},ng={class:"demo-performance__metric-item"},eg={class:"demo-performance__metric-value"},rg={class:"demo-performance__metric-item"},og={class:"demo-performance__metric-value"},tg={key:1,class:"demo-performance__metric-item"},sg={class:"demo-performance__metric-value performance-dragging"},lg={class:"demo-performance__canvas"},ig={class:"cvn-task__body"},ag={class:"cvn-task__title"},dg={class:"cvn-task__owner"},cg=P({__name:"demo-performance",setup(C){$n(()=>{Wn({shape:"vue-node-1",component:Np,width:120,height:60}),console.log("[自定义节点] vue-node-1 已注册")});const m=w(),a=w(),d=w(),s=w(200),p=w("grid"),v=w("rect"),l=w(!0),r=w(!0),o=w(!0),e=w(!1),i=w(0),t=w(0),g=w(0),h=w(0),F=w(0),S=w(0),y=w(0),b=w(0),k=w(""),T=w({});function q(){const z=["#1890ff","#52c41a","#faad14","#f5222d","#722ed1","#13c2c2","#eb2f96","#fa8c16","#a0d911","#2f54eb","#fa541c","#9254de","#fadb14","#096dd9","#f759ab"];return z[Math.floor(Math.random()*z.length)]}function L(z,x,M){if(M==="grid"){const H=Math.ceil(Math.sqrt(x)),X=Math.floor(z/H);return{x:50+z%H*200,y:50+X*120}}else if(M==="circular"){const H=Math.min(x*15,800),X=z/x*Math.PI*2;return{x:1e3+H*Math.cos(X),y:800+H*Math.sin(X)}}else return{x:Math.random()*3e3+100,y:Math.random()*2e3+100}}function A(){return Gn(this,null,function*(){if(!d.value||e.value)return;e.value=!0;const z=performance.now();try{const x=d.value;on.value!==null&&(clearTimeout(on.value),on.value=null,console.log("[性能优化] 取消待执行的恢复定时器")),$.length=0,J.value=!1,k.value="",x.clearCells();const M=performance.now(),H=[];for(let tn=0;tn<s.value;tn++){const j=L(tn,s.value,p.value),G=q();let V={id:`node-${tn}`,x:j.x,y:j.y,label:`节点 ${tn+1}`,data:{index:tn,color:G}};v.value==="rect"?(V.shape="rect",V.width=120,V.height=60,V.attrs={body:{fill:G,stroke:G,strokeWidth:2,rx:6,ry:6},label:{fill:"#fff",fontSize:12,fontWeight:"bold"}}):v.value==="circle"?(V.shape="circle",V.width=80,V.height=80,V.attrs={body:{fill:G,stroke:G,strokeWidth:2},label:{fill:"#fff",fontSize:12,fontWeight:"bold"}}):v.value==="common-vue-node"?(V.shape="common-vue-node",V["node-type"]="custom-nodetype1",V.width=120,V.height=60,V.attrs={body:{fill:G,stroke:G,strokeWidth:2},label:{fill:"#fff",fontSize:12,fontWeight:"bold"}}):v.value==="vue-node-1"&&(V.shape="vue-node-1",V.width=120,V.height=60,V.data=pn(rn({},V.data),{status:"运行中"})),H.push(V)}let X=0,Z=0;const en=H.length,cn=()=>{Z===0&&(X=performance.now(),console.log("[渲染统计] 开始渲染节点，总数:",en)),Z++,Z===en&&(console.log("[渲染统计] 所有节点已添加到 graph，等待 DOM 渲染完成..."),x.off("node:added",cn),requestAnimationFrame(()=>{requestAnimationFrame(()=>{const tn=performance.now()-X;console.log("[渲染统计] 节点 DOM 渲染完成，耗时:",tn.toFixed(2),"ms"),g.value=Math.round(tn),!l.value||s.value<=1?(h.value=0,F.value=g.value,t.value=g.value,dn(x,z)):Y(x,z,X)})}))};x.on("node:added",cn),x.addNodes(H),i.value=Math.round(performance.now()-M)}finally{e.value=!1}})}function Y(z,x,M){const H=performance.now();console.log("[渲染统计] 节点渲染完成，开始生成连线数据...");const X=[];for(let G=0;G<s.value-1;G++){const V={id:`edge-${G}`,source:`node-${G}`,target:`node-${G+1}`,router:{name:"metro",args:{padding:20}},connector:{name:"rounded",args:{radius:8}},attrs:{line:{stroke:"#8c8c8c",strokeWidth:1,targetMarker:{name:"classic",size:6}}}};r.value&&(V.labels=[`连线 ${G+1}`]),X.push(V)}const Z=Math.min(Math.floor(s.value*.2),100);for(let G=0;G<Z;G++){const V=Math.floor(Math.random()*s.value),Un=Math.floor(Math.random()*s.value);if(V!==Un){const Vn={id:`edge-extra-${G}`,source:`node-${V}`,target:`node-${Un}`,router:{name:"metro",args:{padding:20}},connector:{name:"rounded",args:{radius:8}},attrs:{line:{stroke:"#d9d9d9",strokeWidth:1,strokeDasharray:"5,5",targetMarker:{name:"classic",size:5}}}};r.value&&(Vn.labels=[`额外 ${G+1}`]),X.push(Vn)}}console.log(`[渲染统计] 连线数据生成完成，耗时: ${Math.round(performance.now()-H)}ms，连线总数: ${X.length}`);let en=0;const cn=X.length;let tn=0;const j=()=>{tn===0&&(en=performance.now(),console.log("[渲染统计] 开始渲染连线，总数:",cn)),tn++,tn===cn&&(console.log("[渲染统计] 所有连线已添加到 graph，等待 DOM 渲染完成..."),z.off("edge:added",j),requestAnimationFrame(()=>{requestAnimationFrame(()=>{const G=performance.now()-en;console.log("[渲染统计] 连线 DOM 渲染完成，耗时:",G.toFixed(2),"ms"),h.value=Math.round(G);const V=performance.now()-M;F.value=Math.round(V),t.value=F.value,console.log("[渲染统计] 渲染总耗时:",V.toFixed(2),"ms"),console.log("[渲染统计] 验证：节点渲染 + 连线渲染 =",g.value,"+",h.value,"=",g.value+h.value,"ms"),dn(z,x)})}))};z.on("edge:added",j),z.addEdges(X)}function dn(z,x){y.value=z.getNodes().length,b.value=z.getEdges().length,S.value=Math.round(performance.now()-x),console.log("[渲染统计] ========== 性能统计 =========="),console.log("[渲染统计] 数据生成耗时:",i.value,"ms"),console.log("[渲染统计] 节点渲染耗时:",g.value,"ms"),console.log("[渲染统计] 连线渲染耗时:",h.value,"ms"),console.log("[渲染统计] 渲染总耗时:",F.value,"ms"),console.log("[渲染统计] 总耗时:",S.value,"ms"),console.log("[渲染统计] 节点数:",y.value),console.log("[渲染统计] 连线数:",b.value),console.log("[渲染统计] ================================"),setTimeout(()=>{z.zoomToFit({padding:20,maxScale:1})},100)}function gn(){if(!d.value)return;const z=d.value,x=z.getEdges();l.value?A():(x.forEach(M=>z.removeEdge(M)),b.value=0)}function Sn(){if(!d.value)return;d.value.getEdges().forEach((M,H)=>{r.value?M.setLabels([{attrs:{label:{text:`连线 ${H+1}`,fontSize:10,fill:"#595959"},rect:{fill:"#ffffff",stroke:"#d9d9d9",strokeWidth:1,rx:3,ry:3}}}]):M.setLabels([])})}function _n(){d.value&&(on.value&&(clearTimeout(on.value),on.value=null),d.value.clearCells(),J.value=!1,$.length=0,k.value="",y.value=0,b.value=0,i.value=0,t.value=0,g.value=0,h.value=0,F.value=0,S.value=0,console.log("[clearCanvas] 画布已清空，状态已重置"))}function Pn(){d.value&&d.value.zoomToFit({padding:20,maxScale:1})}const J=w(!1),on=w(null),$=[];let _=!1;const Q={LIGHT:10,MEDIUM:20,HEAVY:100};function mn(z){return z<=Q.LIGHT?"switchRouter":(z<=Q.MEDIUM,"removeAffectedEdges")}function En(){if(console.log("[DEBUG] startDragOptimization 被调用"),console.log("[DEBUG] graphRef.value:",!!d.value,"isDragging.value:",J.value,"enableDragOptimization.value:",o.value),!d.value||J.value||!o.value){console.warn("[DEBUG] 提前返回，原因:",{noGraph:!d.value,alreadyDragging:J.value,optimizationDisabled:!o.value});return}const z=performance.now();J.value=!0;const x=d.value,M=x.getSelectedCells();console.log("[DEBUG] 从 Selection 获取的选中 cells:",M.length);const H=M.filter(j=>j.isNode());if(console.log("[DEBUG] 过滤后的移动节点数:",H.length),H.length===0){console.warn("[性能优化] 没有找到选中的节点"),J.value=!1;return}console.log(`[性能优化] 开始拖动优化，移动节点数: ${H.length}`);const X=new Set;H.forEach(j=>{const G=x.getConnectedEdges(j);console.log(`[DEBUG] 节点 ${j.id} 的连接边数:`,G.length),G.forEach(V=>X.add(V))});const Z=Array.from(X),en=x.getEdges().length;console.log(`[性能优化] 受影响的边: ${Z.length} / ${en} (${(Z.length/en*100).toFixed(1)}%)`);const cn=mn(Z.length);if(console.log("[性能优化] 选择策略:",cn,"阈值配置:",Q),$.length=0,cn==="removeAllEdges"){console.log("[性能优化] 策略: 移除所有边（极端情况）"),k.value=`已移除所有连线 (${en})`;const j=x.getEdges();j.forEach(G=>{$.push({id:G.id,source:G.getSourceCellId(),target:G.getTargetCellId(),router:G.getRouter(),connector:G.getConnector(),labels:G.getLabels(),attrs:G.getAttrs(),zIndex:G.getZIndex(),shape:G.shape})}),x.removeCells(j),console.log("[性能优化] 已移除",$.length,"条边")}else cn==="removeAffectedEdges"?(console.log("[性能优化] 策略: 只移除受影响的边（局部优化）⭐"),k.value=`已移除相关连线 (${Z.length}/${en})`,Z.forEach(j=>{$.push({id:j.id,source:j.getSourceCellId(),target:j.getTargetCellId(),router:j.getRouter(),connector:j.getConnector(),labels:j.getLabels(),attrs:j.getAttrs(),zIndex:j.getZIndex(),shape:j.shape})}),x.removeCells(Z),console.log("[性能优化] 已移除",$.length,"条受影响的边")):(console.log("[性能优化] 策略: 切换受影响边的路由为 normal"),k.value=`已简化路由 (${Z.length} 条边)`,Z.forEach(j=>{$.push({id:j.id,originalRouter:j.getRouter()}),j.setRouter({name:"normal"})}),console.log("[性能优化] 已简化",Z.length,"条边的路由"));const tn=performance.now()-z;console.log(`[性能优化] 优化应用完成，耗时: ${tn.toFixed(2)}ms`)}function kn(){!d.value||!J.value||(_=!1,on.value!==null&&clearTimeout(on.value),on.value=window.setTimeout(()=>{try{const z=performance.now();J.value=!1;const x=d.value;if(!x){console.log("[endDragOptimization] Graph 已销毁，跳过恢复"),$.length=0,k.value="";return}if($.length>0){const M=$[0];if(M.source&&M.target){console.log("[性能优化] 恢复被移除的边，数量:",$.length),x.addEdges($);const H=performance.now()-z;console.log(`[性能优化] 已恢复 ${$.length} 条边，耗时: ${H.toFixed(2)}ms`),$.length=0,on.value=null,k.value="";return}else if(M.originalRouter){console.log("[性能优化] 恢复受影响边的路由，数量:",$.length);let H=0;$.forEach(Z=>{const en=x.getCellById(Z.id);en&&en.isEdge()&&(en.setRouter(Z.originalRouter),H++)});const X=performance.now()-z;console.log(`[性能优化] 已恢复 ${H} 条边的路由，耗时: ${X.toFixed(2)}ms`),$.length=0,on.value=null,k.value="";return}}console.log("[endDragOptimization] 无需恢复"),on.value=null,k.value=""}catch(z){console.error("[endDragOptimization] 恢复配置时出错:",z),$.length=0,on.value=null,k.value="",J.value=!1}},150))}function Hn(z){let x=0,M=!1,H=!1;const X=5;z.on("node:mousedown",({node:Z})=>{M=!0,H=!1,x=0,_=!1,console.log("[拖动优化] 开始按下节点:",Z.id,"重置标志")}),z.on("node:change:position",({node:Z})=>{H=!0,console.log("[DEBUG] node:change:position 触发, node:",Z.id,"dragStartDistance:",x,"hasTriggeredOptimization:",_,"isDragging:",J.value,"isMouseDown:",M),!_&&!J.value&&(x++,console.log("[DEBUG] dragStartDistance 递增到:",x,"DRAG_THRESHOLD:",X),x>X&&(_=!0,console.log("[拖动优化] 触发优化，dragStartDistance:",x),En()))}),z.on("node:moved",({node:Z})=>{console.log("[拖动优化] 节点移动结束:",Z.id),setTimeout(()=>{J.value&&!M&&(console.log("[拖动优化] 所有节点停止移动，准备恢复"),kn())},50)}),z.on("blank:mouseup",()=>{console.log("[拖动优化] blank mouseup"),M=!1,J.value&&H&&(H=!1,kn())}),z.on("node:mouseup",({node:Z})=>{console.log("[拖动优化] 节点 mouseup:",Z.id),M=!1,setTimeout(()=>{J.value&&H&&(console.log("[拖动优化] mouseup 后检查：准备恢复"),H=!1,kn())},50)}),console.log("[性能优化] 拖动优化监听器已设置")}function Tn(z,x){a.value=z,d.value=x,Hn(x),A()}return(z,x)=>(u(),f("div",Fp,[n("div",$p,[x[25]||(x[25]=n("div",{class:"demo-performance__panel-header"},[n("h4",null,"性能测试配置")],-1)),n("div",Ep,[n("div",Tp,[x[6]||(x[6]=n("label",{class:"demo-performance__label"},"节点数量",-1)),n("div",Lp,[nn(n("input",{type:"number","onUpdate:modelValue":x[0]||(x[0]=M=>s.value=M),min:10,max:2e3,class:"demo-performance__input"},null,512),[[Ln,s.value,void 0,{number:!0}]]),n("button",{class:"demo-performance__btn demo-performance__btn--primary",onClick:A,disabled:e.value},D(e.value?"生成中...":"重新生成"),9,Rp)]),x[7]||(x[7]=n("div",{class:"demo-performance__hint"}," 建议范围：10-2000 个节点 ",-1))]),n("div",zp,[x[9]||(x[9]=n("label",{class:"demo-performance__label"},"布局方式",-1)),nn(n("select",{"onUpdate:modelValue":x[1]||(x[1]=M=>p.value=M),class:"demo-performance__select"},[...x[8]||(x[8]=[n("option",{value:"grid"},"网格布局",-1),n("option",{value:"circular"},"环形布局",-1),n("option",{value:"random"},"随机布局",-1)])],512),[[Yn,p.value]])]),n("div",Mp,[x[11]||(x[11]=n("label",{class:"demo-performance__label"},"节点类型",-1)),nn(n("select",{"onUpdate:modelValue":x[2]||(x[2]=M=>v.value=M),class:"demo-performance__select"},[...x[10]||(x[10]=[n("option",{value:"rect"},"矩形节点 (rect)",-1),n("option",{value:"circle"},"圆形节点 (circle)",-1),n("option",{value:"common-vue-node"},"Vue 插槽节点",-1),n("option",{value:"vue-node-1"},"Vue 注册节点 🚀",-1)])],512),[[Yn,v.value]])]),n("div",Ap,[n("label",Ip,[nn(n("input",{type:"checkbox","onUpdate:modelValue":x[3]||(x[3]=M=>l.value=M),onChange:gn},null,544),[[fn,l.value]]),x[12]||(x[12]=I(" 显示连线 ",-1))])]),n("div",Pp,[n("label",Gp,[nn(n("input",{type:"checkbox","onUpdate:modelValue":x[4]||(x[4]=M=>r.value=M),disabled:!l.value,onChange:Sn},null,40,Bp),[[fn,r.value]]),x[13]||(x[13]=I(" 显示连线标签 ",-1))])]),n("div",Wp,[n("label",Op,[nn(n("input",{type:"checkbox","onUpdate:modelValue":x[5]||(x[5]=M=>o.value=M),checked:""},null,512),[[fn,o.value]]),x[14]||(x[14]=I(" 启用拖动优化 ",-1))]),x[15]||(x[15]=n("div",{class:"demo-performance__hint",style:{"margin-top":"4px"}}," 拖动节点时自动简化连线渲染 ",-1))]),n("div",Hp,[x[24]||(x[24]=n("h5",{class:"demo-performance__metrics-title"},"性能指标",-1)),n("div",Up,[x[16]||(x[16]=n("span",{class:"demo-performance__metric-label"},"数据生成耗时：",-1)),n("span",Vp,D(i.value)+"ms",1)]),n("div",Zp,[x[17]||(x[17]=n("span",{class:"demo-performance__metric-label"},"节点渲染耗时：",-1)),n("span",jp,D(g.value)+"ms",1)]),l.value&&b.value>0?(u(),f("div",Yp,[x[18]||(x[18]=n("span",{class:"demo-performance__metric-label"},"连线渲染耗时：",-1)),n("span",qp,D(h.value)+"ms",1)])):E("",!0),n("div",Xp,[x[19]||(x[19]=n("span",{class:"demo-performance__metric-label"},"渲染总耗时：",-1)),n("span",Jp,D(F.value)+"ms",1)]),n("div",Kp,[x[20]||(x[20]=n("span",{class:"demo-performance__metric-label"},"总耗时：",-1)),n("span",Qp,D(S.value)+"ms",1)]),n("div",ng,[x[21]||(x[21]=n("span",{class:"demo-performance__metric-label"},"当前节点数：",-1)),n("span",eg,D(y.value),1)]),n("div",rg,[x[22]||(x[22]=n("span",{class:"demo-performance__metric-label"},"当前连线数：",-1)),n("span",og,D(b.value),1)]),J.value?(u(),f("div",tg,[x[23]||(x[23]=n("span",{class:"demo-performance__metric-label"},"🔴 拖动中：",-1)),n("span",sg,D(k.value),1)])):E("",!0)]),n("div",{class:"demo-performance__actions"},[n("button",{class:"demo-performance__btn demo-performance__btn--secondary",onClick:_n}," 清空画布 "),n("button",{class:"demo-performance__btn demo-performance__btn--secondary",onClick:Pn}," 适应画布 ")])])]),n("div",lg,[x[27]||(x[27]=n("div",{class:"demo-performance__tip"}," 💡 性能测试 Demo - 测试大量节点的渲染性能。拖动优化已启用，拖动节点时会自动简化连线渲染。 ",-1)),c(U,{ref_key:"layoutRef",ref:m,onReady:Tn,"canvas-config":T.value},{"node-custom-nodetype1":N(({node:M,graph:H,data:X,label:Z,state:en})=>{var cn;return[n("div",{class:sn(["cvn-task",{"cvn-task--selected":(M==null?void 0:M.id)==((cn=z.selectedNode)==null?void 0:cn.id)}]),"data-cvn-root":""},[x[26]||(x[26]=n("div",{class:"cvn-task__bar"},null,-1)),n("div",ig,[n("div",ag,D(Z||"自定义vue插槽节点1"),1),n("div",dg,"负责人："+D(X.owner||"未指定")+" state: "+D(en),1)])],2)]}),_:1},8,["canvas-config"])])]))}}),pg=O(cg,[["__scopeId","data-v-8e314399"]]),gg=`<template>\r
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
import FlowDesignerLayout from '@/components/FlowDesigner/FlowDesignerLayout.vue'\r
import type { FlowDesigner } from '@/components/FlowDesigner/core'\r
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
    // 🔴 修复：清空画布前先取消拖动优化\r
    if (dragTimer.value !== null) {\r
      clearTimeout(dragTimer.value)\r
      dragTimer.value = null\r
      console.log('[性能优化] 取消待执行的恢复定时器')\r
    }\r
    removedEdges.length = 0\r
    isDragging.value = false\r
    dragOptimizationStatus.value = ''\r
\r
    // 清空画布\r
    graph.clearCells()\r
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
`,mg={class:"code-previewer__right"},ug={class:"code-previewer__preview-toolbar"},fg=["title"],hg={class:"code-previewer__preview-content"},_g={key:1,class:"code-previewer__preview-empty"},vg={class:"code-previewer__toolbar"},bg={class:"code-previewer__tabs"},xg=["onClick"],yg={class:"code-previewer__actions"},wg={class:"code-previewer__code"},kg=P({__name:"CodePreviewer",props:{demoName:{},code:{},codeSnippets:{},demoComponent:{},defaultActiveTab:{default:0},defaultLeftWidth:{default:"20%"}},setup(C){const m={demoSimple:{component:Se,code:Ne},"demo-ready":{component:Re,code:ze},"demo-mode-change":{component:Oe,code:He},"demo-selection-change":{component:qe,code:Xe},"demo-node-lifecycle":{component:sr,code:lr},"demo-edge-lifecycle":{component:fr,code:hr},"demo-data-loaded":{component:wr,code:kr},"demo-slot-toolbar":{component:Rr,code:[{label:"index.vue",language:"vue",code:zr},{label:"Toolbar.vue",language:"vue",code:Mr}]},"demo-slot-pattle":{component:jr,code:[{label:"index.vue",language:"vue",code:Yr}]},"demo-slot-properties":{component:gt,code:mt},"demo-slot-searchbox":{component:It,code:Pt},"demo-slot-canvasMenu":{component:ss,code:ls},"demo-slot-nodeMenu":{component:zs,code:Ms},"demo-slot-edgeMenu":{component:dl,code:cl},"demo-slot-nodeTooltip":{component:vl,code:bl},"demo-slot-edgeTooltip":{component:Nl,code:Fl},"demo-slot-edgeLabel":{component:Al,code:Il},"demo-slot-node":{component:ri,code:oi},"demo-permission-design":{component:ia,code:aa},"demo-permission-readonly":{component:ga,code:ma},"demo-permission-preview":{component:_a,code:va},"demo-permission-getPermission":{component:yd,code:wd},"demo-permission-all":{component:le,code:kd},"demo-node-svg":{component:Pd,code:Gd},"demo-node-html":{component:Jd,code:Kd},"demo-node-vue":{component:Cc,code:[{label:"index.vue",language:"vue",code:Sc},{label:"StartNode.vue",language:"vue",code:Nc},{label:"ApproverNode.vue",language:"vue",code:Fc}]},"demo-node-designer":{component:Kc,code:Qc},"demo-edge-svg":{component:up,code:fp},"demo-shortcut-keymap":{component:hp,code:_p},"demo-node-state":{component:vp,code:bp},"demo-edge-state":{component:xp,code:yp},"demo-performance":{component:pg,code:gg}},a=C,d=w(a.defaultActiveTab),s=w(!0),p=w(!0),v=w(!1),l=w("复制"),r=w(),o=w(),e=w(a.defaultLeftWidth),i=w(!1),t=Nn(()=>{if(a.demoName&&m[a.demoName]){const L=m[a.demoName].code;return Array.isArray(L)?L:[{label:"Vue",language:"vue",code:L}]}return a.code?Array.isArray(a.code)?a.code:[{label:"Code",language:"vue",code:a.code}]:a.codeSnippets||[]}),g=Nn(()=>a.demoName&&m[a.demoName]?m[a.demoName].component:a.demoComponent),h=Nn(()=>{const L=t.value[d.value];if(!L)return"";const A=typeof L.code=="string"?L.code:String(L.code||"");return F(A)});function F(L){if(typeof L!="string")return console.error("addLineNumbers: code must be a string, received:",typeof L,L),String(L||"");const A=L.split(`
`),Y=A.length,dn=String(Y).length;return A.map((gn,Sn)=>`${String(Sn+1).padStart(dn," ")}  ${gn}`).join(`
`)}function S(){return Gn(this,null,function*(){const L=t.value[d.value];if(L)try{yield navigator.clipboard.writeText(L.code),l.value="已复制",setTimeout(()=>{l.value="复制"},2e3)}catch(A){console.error("复制失败:",A),l.value="复制失败",setTimeout(()=>{l.value="复制"},2e3)}})}function y(){p.value=!p.value}function b(){v.value=!v.value}function k(L){i.value=!0,L.preventDefault()}function T(L){if(!i.value)return;const A=o.value;if(!A)return;const Y=A.getBoundingClientRect(),gn=(Y.right-L.clientX)/Y.width*100;gn>=20&&gn<=80&&(e.value=`${gn}%`)}function q(){i.value=!1}return $n(()=>{document.addEventListener("mousemove",T),document.addEventListener("mouseup",q)}),Xn(()=>{document.removeEventListener("mousemove",T),document.removeEventListener("mouseup",q)}),(L,A)=>(u(),f("div",{class:sn(["code-previewer",{"code-previewer--fullscreen":v.value}]),ref_key:"previewerRef",ref:o},[n("div",mg,[n("div",ug,[A[0]||(A[0]=n("span",{class:"code-previewer__preview-title"},"效果预览",-1)),n("button",{class:"code-previewer__btn",title:v.value?"退出全屏":"全屏预览",onClick:b},D(v.value?"退出全屏":"全屏"),9,fg)]),n("div",hg,[g.value?(u(),Fn(se(g.value),{key:0})):(u(),f("div",_g," 暂无预览内容 "))]),p.value?E("",!0):(u(),f("button",{key:0,class:"code-previewer__expand-btn",title:"展开代码",onClick:y},[...A[1]||(A[1]=[n("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"currentColor"},[n("path",{d:"M10 2L4 8l6 6V2z"})],-1)])]))]),n("div",{class:"code-previewer__divider-wrapper",style:an({width:p.value?"4px":"0"})},[nn(n("div",{class:"code-previewer__divider",onMousedown:k},null,544),[[qn,p.value]])],4),nn(n("div",{class:"code-previewer__left",style:an({width:p.value?e.value:"0"})},[n("div",vg,[n("div",bg,[(u(!0),f(B,null,W(t.value,(Y,dn)=>(u(),f("div",{key:dn,class:sn(["code-previewer__tab",{"code-previewer__tab--active":d.value===dn}]),onClick:gn=>d.value=dn},D(Y.label),11,xg))),128))]),n("div",yg,[n("button",{class:"code-previewer__btn",title:"收起代码",onClick:y}," 收起 "),n("button",{class:"code-previewer__btn",title:"复制代码",onClick:S},D(l.value),1)])]),n("div",{class:sn(["code-previewer__code-wrapper",{"code-previewer__code-wrapper--collapsed":!s.value}])},[n("pre",wg,[n("code",{class:"code-previewer__code-content",ref_key:"codeRef",ref:r},D(h.value),513)])],2)],4),[[qn,p.value]])],2))}}),Eg=O(kg,[["__scopeId","data-v-8d99e2e7"]]);export{Eg as C};
//# sourceMappingURL=CodePreviewer-r_DN729B.js.map
