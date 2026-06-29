var Wr=Object.defineProperty,Vr=Object.defineProperties;var Ur=Object.getOwnPropertyDescriptors;var Fn=Object.getOwnPropertySymbols;var Zn=Object.prototype.hasOwnProperty,jn=Object.prototype.propertyIsEnumerable;var Un=(b,e,r)=>e in b?Wr(b,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):b[e]=r,H=(b,e)=>{for(var r in e||(e={}))Zn.call(e,r)&&Un(b,r,e[r]);if(Fn)for(var r of Fn(e))jn.call(e,r)&&Un(b,r,e[r]);return b},pe=(b,e)=>Vr(b,Ur(e));var qn=(b,e)=>{var r={};for(var o in b)Zn.call(b,o)&&e.indexOf(o)<0&&(r[o]=b[o]);if(b!=null&&Fn)for(var o of Fn(b))e.indexOf(o)<0&&jn.call(b,o)&&(r[o]=b[o]);return r};var De=(b,e,r)=>new Promise((o,s)=>{var l=a=>{try{i(r.next(a))}catch(d){s(d)}},g=a=>{try{i(r.throw(a))}catch(d){s(d)}},i=a=>a.done?o(a.value):Promise.resolve(a.value).then(l,g);i((r=r.apply(b,e)).next())});import{d as j,f as E,o as Ge,b as nn,U as Fe,V as h,W as _,_ as n,a2 as Ne,u as D,$ as L,k as v,a1 as M,A as We,a3 as B,a5 as ye,a0 as we,c as ie,e as Ve,s as On,h as Hn,n as Ln,R as ar,a9 as lr,w as Ue,aa as Me,ab as tn,ac as on,ad as Zr,F as U,g as jr,l as qr,a4 as ee,a7 as Mn,E as Yr,r as je,a8 as gn,H as Xr,m as Jr,B as Kr,p as He,q as Ee,ae as Ie,G as Q,af as Rn,j as dr,ag as Yn,z as Xn}from"./vendor-vue-CcUl2GYw.js";import{G as _e,r as an,t as Qr,S as et,a as Jn,b as nt,C as rt,K as tt,T as ot,D as st,H as it}from"./vendor-x6-B1j_dvdW.js";import{Q as at,R as lt,V as dt,G as cr,W as ct,X as pt,Y as ue,K as gt,H as ut,O as ft,Z as pr,_ as gr,$ as ur,a0 as fr,a1 as mr,a2 as hr,a3 as mt,a4 as ht,a5 as vt,a6 as vr,a7 as br,a8 as _r,a9 as xr,aa as yr,ab as wr,ac as kr,ad as Cr,ae as bt,af as _t,ag as xt,ah as yt,ai as wt}from"./vendor-antd-DIDkb4Re.js";import{_ as ae}from"./index-CvD_JlXn.js";import{P as In,N as Gn,T as Bn,n as Ze,d as kt}from"./FlowDesignerTest-DVMGZs2n.js";var Ct=Object.defineProperty,St=(b,e,r)=>e in b?Ct(b,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):b[e]=r,A=(b,e,r)=>St(b,typeof e!="symbol"?e+"":e,r);const Wn=new Map,Sr=On(0);let pn=null;function Et(b){pn=b}function Nt(b){Wn.clear(),b.forEach((e,r)=>Wn.set(r,e)),Sr.value++}let $n;const Dt=new Uint8Array(16);function Tt(){if(!$n&&($n=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!$n))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return $n(Dt)}const Se=[];for(let b=0;b<256;++b)Se.push((b+256).toString(16).slice(1));function Ft(b,e=0){return Se[b[e+0]]+Se[b[e+1]]+Se[b[e+2]]+Se[b[e+3]]+"-"+Se[b[e+4]]+Se[b[e+5]]+"-"+Se[b[e+6]]+Se[b[e+7]]+"-"+Se[b[e+8]]+Se[b[e+9]]+"-"+Se[b[e+10]]+Se[b[e+11]]+Se[b[e+12]]+Se[b[e+13]]+Se[b[e+14]]+Se[b[e+15]]}const $t=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),Kn={randomUUID:$t};function zn(b,e,r){if(Kn.randomUUID&&!b)return Kn.randomUUID();b=b||{};const o=b.random||(b.rng||Tt)();return o[6]=o[6]&15|64,o[8]=o[8]&63|128,Ft(o)}class Mt{constructor(e){A(this,"meta"),A(this,"selectedCells",[]),A(this,"isDirty",!1),A(this,"isSaving",!1),this.meta=H({id:zn(),name:"未命名流程",category:"leave",description:"",version:"1.0.0",status:"draft",createdAt:new Date().toISOString(),updatedAt:new Date().toISOString(),allowRevoke:!0,revokeLimit:24,initiatorScope:{type:"all",values:[]}},e)}getMeta(){return H({},this.meta)}setMeta(e){this.meta=H(H({},this.meta),e),this.markDirty()}updateMetaField(e,r){this.meta[e]=r,this.markDirty()}getSelectedCells(){return[...this.selectedCells]}setSelectedCells(e){this.selectedCells=[...e]}addSelectedCell(e){this.selectedCells.some(r=>r.id===e.id)||this.selectedCells.push(e)}removeSelectedCell(e){this.selectedCells=this.selectedCells.filter(r=>r.id!==e)}clearSelection(){this.selectedCells=[]}isSelected(e){return this.selectedCells.some(r=>r.id===e)}getSelectedNodes(){return this.selectedCells.filter(e=>e.type==="node")}getSelectedEdges(){return this.selectedCells.filter(e=>e.type==="edge")}hasSelection(){return this.selectedCells.length>0}isMultiSelection(){return this.selectedCells.length>1}isDirtyState(){return this.isDirty}markDirty(){this.isDirty=!0}markClean(){this.isDirty=!1,this.meta.updatedAt=new Date().toISOString()}isSavingState(){return this.isSaving}setSaving(e){this.isSaving=e}toJSON(){return{meta:this.meta,selectedCells:this.selectedCells,isDirty:this.isDirty,isSaving:this.isSaving}}reset(e){this.meta=H({id:zn(),name:"未命名流程",category:"leave",description:"",version:"1.0.0",status:"draft",createdAt:new Date().toISOString(),updatedAt:new Date().toISOString(),allowRevoke:!0,revokeLimit:24,initiatorScope:{type:"all",values:[]}},e),this.selectedCells=[],this.isDirty=!1,this.isSaving=!1}}const An={grid:{visible:!0,type:"dot",size:20,color:"#6b6b6b",thickness:2},align:{snaplineEnabled:!0,snapToGrid:!1,snapRadius:20},connection:{router:"metro",connector:"rounded",allowBlank:!1,allowLoop:!1,allowMulti:!1,strokeWidth:2,strokeColor:"#b0b8c4",interactionWidth:20,label:{backgroundColor:"#ffffff",borderColor:"#cccccc",borderWidth:1,textColor:"#999999",fontSize:12,fontWeight:500,position:.5,padding:4,paddingX:6,paddingY:2,offsetY:1,borderRadius:4,textAnchor:"middle",textVerticalAnchor:"middle",pointerEvents:"auto"}},interaction:{panning:!1,mousewheel:!1,rubberband:!0,multipleSelection:!0,movable:!0,resizable:!0},highlight:{nodeHover:{enabled:!1,strokeColor:"#1677ff",strokeWidth:2,shadow:!0},nodeSelected:{enabled:!1,strokeColor:"#1677ff",strokeWidth:2.5,shadow:!0},edgeHover:{enabled:!0,strokeColor:"#1677ff",textColor:"#1677ff",strokeWidth:2},edgeHoverOverlap:{enabled:!0,opacity:.36,transitionDuration:150,disableWhenEdgeCountExceeds:100},edgeSelected:{enabled:!0,strokeColor:"#1677ff",textColor:"#1677ff",strokeWidth:2},portDefault:{fill:"#ffffff",stroke:"#1677ff",size:4,strokeWidth:2},portHover:{enabled:!0,strokeColor:"#1677ff",fillColor:"#1677ff",strokeWidth:2,size:4},magnetAdsorbed:{enabled:!0,strokeColor:"#1677ff",strokeWidth:6},magnetAvailable:{enabled:!0,strokeColor:"#52c41a",fillColor:"#0000fc",strokeWidth:2},nodeHoverOutEdgeFlow:{enabled:!0,strokeColor:"#1677ff",strokeWidth:2,duration:.6,disableWhenNodeCountExceeds:500,disableWhenOutEdgeCountExceeds:10}},background:{color:"#f5f5f5"},minimap:{enabled:!0,width:180,height:120,padding:10},history:{enabled:!0,stackSize:100,ignoreAdd:!1,ignoreRemove:!1,ignoreChange:!1},tooltip:{fontSize:13,fontWeight:"bold",color:"#ffffff",backgroundColor:"rgba(0, 0, 0, 0.75)",padding:"6px 12px",borderRadius:4,boxShadow:"0 2px 8px rgba(0, 0, 0, 0.25)",arrowEnabled:!0,arrowColor:"rgba(0, 0, 0, 0.75)",arrowSize:8,zIndex:9999,maxWidth:void 0,whiteSpace:"nowrap",offsetX:0,offsetY:0}};class Lt{constructor(e){A(this,"config"),this.config=this.mergeConfig(An,e)}getConfig(){return JSON.parse(JSON.stringify(this.config))}updateConfig(e){this.config=this.mergeConfig(this.config,e)}resetConfig(){this.config=JSON.parse(JSON.stringify(An))}applyToGraph(e,r,o){this.applyGridConfig(e),this.applyBackgroundConfig(e),this.applyConnectionConfig(e),this.applyInteractionConfig(e,r,o)}applyGridConfig(e){const{visible:r,type:o,size:s,color:l,thickness:g}=this.config.grid;r?(e.drawGrid({type:o,args:{color:l,thickness:g}}),e.setGridSize(s),e.showGrid()):e.hideGrid()}applyBackgroundConfig(e){e.drawBackground(this.config.background)}applyConnectionConfig(e){var g;var r,o,s;const l=this.config.connection;if(e.options.connecting&&(e.options.connecting=pe(H({},e.options.connecting),{router:{name:l.router,args:{padding:20}},connector:{name:l.connector,args:l.connector==="jumpover"?{radius:8}:{}},allowBlank:l.allowBlank,allowLoop:l.allowLoop,allowMulti:l.allowMulti})),(o=(r=e.options.defaultEdge)==null?void 0:r.attrs)!=null&&o.line&&(e.options.defaultEdge.attrs.line.stroke=l.strokeColor,e.options.defaultEdge.attrs.line.strokeWidth=l.strokeWidth),(s=e.options.defaultEdge)!=null&&s.label){const i=l.label,a=(g=i.padding)!=null?g:8,d=100+a*5,t=-(a*2.5);e.options.defaultEdge.label={attrs:{body:{fill:i.backgroundColor,stroke:i.borderColor,strokeWidth:i.borderWidth,rx:i.borderRadius,ry:i.borderRadius,refWidth:`${d}%`,refHeight:`${d}%`,refX:`${t}%`,refY:`${t}%`,filter:{name:"dropShadow",args:{dx:0,dy:1,stdDeviation:2,color:"rgba(0,0,0,0.10)"}}},text:{fill:i.textColor,fontSize:i.fontSize,fontWeight:i.fontWeight,textAnchor:i.textAnchor,textVerticalAnchor:i.textVerticalAnchor,pointerEvents:i.pointerEvents}},position:{distance:i.position}}}e.getEdges().forEach(i=>{var f,m,N,k,x;var a,d;const t=i.attr("line/strokeDasharray"),p=i.attr("line/style");i.attr("line/stroke",l.strokeColor),i.attr("line/strokeWidth",l.strokeWidth),t&&i.attr("line/strokeDasharray",t),p!=null&&p.animation&&i.attr("line/style",p);const c=i.getLabels();if(c&&c.length>0){const u=l.label;100+u.padding*5,-(u.padding*2.5),i.setLabels([{attrs:{body:{fill:u.backgroundColor,stroke:u.borderColor,strokeWidth:u.borderWidth,rx:u.borderRadius,ry:u.borderRadius,refWidth:((f=u.paddingX)!=null?f:u.padding)*2,refHeight:((m=u.paddingY)!=null?m:u.padding)*2,refX:-((N=u.paddingX)!=null?N:u.padding),refY:-((k=u.paddingY)!=null?k:u.padding)+((x=u.offsetY)!=null?x:0),filter:{name:"dropShadow",args:{dx:0,dy:1,stdDeviation:2,color:"rgba(0,0,0,0.10)"}}},text:{fill:u.textColor,fontSize:u.fontSize,fontWeight:u.fontWeight,textAnchor:u.textAnchor,textVerticalAnchor:u.textVerticalAnchor,pointerEvents:u.pointerEvents,text:((d=(a=c[0].attrs)==null?void 0:a.text)==null?void 0:d.text)||""}},position:{distance:u.position}}])}})}applyInteractionConfig(e,r,o){var d;var s;const l=this.config.interaction;l.panning?e.enablePanning():e.disablePanning(),l.mousewheel?e.enableMouseWheel():e.disableMouseWheel();const g=o?o.canMultipleSelect:!0;l.rubberband&&g?e.enableRubberband():e.disableRubberband();const i=o?o.canMultipleSelect:!0,a=e.selection;if(a!=null&&a.options&&(a.options.multiple=l.multipleSelection&&i),r){const t=(s=r.options)==null?void 0:s.resizing;if(t!==void 0){const p=(d=o==null?void 0:o.canTransform)!=null?d:!1,c=l.resizable;t.enabled=p&&c}}}mergeConfig(e,r){if(!r)return JSON.parse(JSON.stringify(e));const o=JSON.parse(JSON.stringify(e));if(r.grid&&Object.assign(o.grid,r.grid),r.align&&Object.assign(o.align,r.align),r.connection){const s=r.connection,{label:l}=s,g=qn(s,["label"]);Object.assign(o.connection,g),l&&Object.assign(o.connection.label,l)}return r.interaction&&Object.assign(o.interaction,r.interaction),r.highlight&&(r.highlight.nodeHover&&Object.assign(o.highlight.nodeHover,r.highlight.nodeHover),r.highlight.nodeSelected&&Object.assign(o.highlight.nodeSelected,r.highlight.nodeSelected),r.highlight.edgeHover&&Object.assign(o.highlight.edgeHover,r.highlight.edgeHover),r.highlight.edgeHoverOverlap&&Object.assign(o.highlight.edgeHoverOverlap,r.highlight.edgeHoverOverlap),r.highlight.edgeSelected&&Object.assign(o.highlight.edgeSelected,r.highlight.edgeSelected),r.highlight.portDefault&&Object.assign(o.highlight.portDefault,r.highlight.portDefault),r.highlight.portHover&&Object.assign(o.highlight.portHover,r.highlight.portHover),r.highlight.magnetAdsorbed&&Object.assign(o.highlight.magnetAdsorbed,r.highlight.magnetAdsorbed),r.highlight.magnetAvailable&&Object.assign(o.highlight.magnetAvailable,r.highlight.magnetAvailable),r.highlight.nodeHoverOutEdgeFlow&&Object.assign(o.highlight.nodeHoverOutEdgeFlow,r.highlight.nodeHoverOutEdgeFlow)),r.background&&Object.assign(o.background,r.background),r.minimap&&Object.assign(o.minimap,r.minimap),r.history&&Object.assign(o.history,r.history),r.tooltip&&Object.assign(o.tooltip,r.tooltip),o}}class Rt{constructor(){A(this,"graph",null),A(this,"canUndoState",!1),A(this,"canRedoState",!1)}bind(e){this.graph=e,e.on("history:change",()=>{this.updateState()}),this.updateState()}updateState(){this.graph&&(this.canUndoState=this.graph.canUndo(),this.canRedoState=this.graph.canRedo())}undo(){return this.graph&&this.canUndo()?(this.graph.undo(),!0):!1}redo(){return this.graph&&this.canRedo()?(this.graph.redo(),!0):!1}canUndo(){return this.canUndoState}canRedo(){return this.canRedoState}clear(){this.graph&&(this.graph.clearHistory(),this.updateState())}getUndoStack(){var e,r;return this.graph?((r=(e=this.graph).getUndoStack)==null?void 0:r.call(e))||[]:[]}getRedoStack(){var e,r;return this.graph?((r=(e=this.graph).getRedoStack)==null?void 0:r.call(e))||[]:[]}getStackSize(){const e=this.getUndoStack(),r=this.getRedoStack();return e.length+r.length}isEmpty(){return!this.canUndo()&&!this.canRedo()}toJSON(){return{canUndo:this.canUndoState,canRedo:this.canRedoState,undoStackSize:this.getUndoStack().length,redoStackSize:this.getRedoStack().length}}}const Qn={design:{showToolbar:!0,showNodePalette:!0,showPropertiesPanel:!0,showContextMenu:!0,showMinimap:!0,showSearch:!0,canAddNode:!0,canDrag:!0,canConnect:!0,canDelete:!0,canCopy:!0,canPaste:!0,canGroup:!0,canToFront:!0,canToBack:!0,canTransform:!1,canMultipleSelect:!0,canSelectAll:!0,canAlign:!0,canAlignLeft:!0,canAlignRight:!0,canAlignTop:!0,canAlignBottom:!0,canImport:!0,canExport:!0,canUndo:!0,canRedo:!0,canZoom:!0,canPan:!0,canFitView:!0,canResetView:!0,canHoverNode:!0,canHoverEdge:!0,canSelectNode:!0,canSelectEdge:!0,canNodeTooltip:!0,canEdgeTooltip:!0,canSelectCanvas:!0},readonly:{showToolbar:!0,showNodePalette:!0,showPropertiesPanel:!0,showContextMenu:!0,showMinimap:!0,showSearch:!0,canAddNode:!0,canDrag:!0,canConnect:!0,canDelete:!0,canCopy:!0,canPaste:!0,canGroup:!0,canToFront:!0,canToBack:!0,canTransform:!1,canMultipleSelect:!0,canSelectAll:!0,canAlign:!0,canAlignLeft:!0,canAlignRight:!0,canAlignTop:!0,canAlignBottom:!0,canImport:!0,canExport:!0,canUndo:!0,canRedo:!0,canZoom:!0,canPan:!0,canFitView:!0,canResetView:!0,canHoverNode:!0,canHoverEdge:!0,canSelectNode:!0,canSelectEdge:!0,canNodeTooltip:!0,canEdgeTooltip:!0,canSelectCanvas:!0},preview:{showToolbar:!0,showNodePalette:!0,showPropertiesPanel:!0,showContextMenu:!0,showMinimap:!0,showSearch:!0,canAddNode:!0,canDrag:!0,canConnect:!0,canDelete:!0,canCopy:!0,canPaste:!0,canGroup:!0,canToFront:!0,canToBack:!0,canTransform:!1,canMultipleSelect:!0,canSelectAll:!0,canAlign:!0,canAlignLeft:!0,canAlignRight:!0,canAlignTop:!0,canAlignBottom:!0,canImport:!0,canExport:!0,canUndo:!0,canRedo:!0,canZoom:!0,canPan:!0,canFitView:!0,canResetView:!0,canHoverNode:!0,canHoverEdge:!0,canSelectNode:!0,canSelectEdge:!0,canNodeTooltip:!0,canEdgeTooltip:!0,canSelectCanvas:!0}};function er(b,e){return e?H(H({},b),e):H({},b)}function zt(b,e={}){const{permissions:r,permissionConfig:o,getPermissions:s}=e;if(s)return s(b);const l=Qn[b]||Qn.design,g=o==null?void 0:o[b];let i=er(l,g);return i=er(i,r),i}class At{constructor(e={}){A(this,"currentMode","design"),A(this,"permissionOptions",{}),A(this,"cachedCapabilities",null),this.permissionOptions=e,this.currentMode=e.mode||"design"}updatePermissionOptions(e){this.permissionOptions=H(H({},this.permissionOptions),e),this.cachedCapabilities=null}getMode(){return this.currentMode}setMode(e){this.currentMode!==e&&(this.currentMode=e,this.cachedCapabilities=null)}getCapabilities(){return this.cachedCapabilities||(this.cachedCapabilities=zt(this.currentMode,pe(H({},this.permissionOptions),{mode:this.currentMode}))),H({},this.cachedCapabilities)}isMode(e){return this.currentMode===e}isDesignMode(){return this.currentMode==="design"}isReadonlyMode(){return this.currentMode==="readonly"}isPreviewMode(){return this.currentMode==="preview"}can(e){return this.getCapabilities()[e]}canAll(...e){const r=this.getCapabilities();return e.every(o=>r[o])}canAny(...e){const r=this.getCapabilities();return e.some(o=>r[o])}toJSON(){return{mode:this.currentMode,capabilities:this.getCapabilities()}}}const Pt={highlight(){},unhighlight(){}},It={highlight(b,e,r={}){var o;const{fill:s="rgba(82, 196, 26, 0.15)",stroke:l="#52c41a",strokeWidth:g=2,opacity:i=.6,haloSize:a=0,animated:d=!1}=r;if(e.tagName.toLowerCase()!=="circle"){const x=document.createElementNS("http://www.w3.org/2000/svg","g");return x.classList.add("x6-highlight-halo-group"),e.appendChild(x),x}const t=e,p=t.parentElement,c=p==null?void 0:p.parentElement,f=parseFloat(t.getAttribute("r")||"6")+a;let m=0,N=0;if(p instanceof SVGGraphicsElement&&c instanceof SVGGraphicsElement)try{const x=p.getCTM(),u=c.getCTM();if(x&&u){const y=u.inverse().multiply(x);m=y.e,N=y.f}}catch(x){const u=(p.getAttribute("transform")||"").match(/matrix\([^,]+,[^,]+,[^,]+,[^,]+,([^,]+),([^)]+)\)/);u&&(m=parseFloat(u[1]),N=parseFloat(u[2]))}const k=document.createElementNS("http://www.w3.org/2000/svg","g");if(k.classList.add("x6-highlight-halo-group"),d)for(let x=0;x<3;x++){const u=document.createElementNS("http://www.w3.org/2000/svg","circle");u.setAttribute("cx",String(m)),u.setAttribute("cy",String(N)),u.setAttribute("r",String(f)),u.setAttribute("fill",s),u.setAttribute("opacity",String(i)),u.setAttribute("pointer-events","none"),u.style.transformOrigin="center center",u.style.transformBox="fill-box",u.classList.add("x6-highlight-halo","x6-highlight-halo--animated",`x6-highlight-halo--delay-${x}`),k.appendChild(u)}else{const x=document.createElementNS("http://www.w3.org/2000/svg","circle");x.setAttribute("cx",String(m)),x.setAttribute("cy",String(N)),x.setAttribute("r",String(f)),x.setAttribute("fill",s),x.setAttribute("stroke",l),x.setAttribute("stroke-width",String(g)),x.setAttribute("opacity",String(i)),x.setAttribute("pointer-events","none"),x.classList.add("x6-highlight-halo"),k.appendChild(x)}return c?c.appendChild(k):p&&((o=p.parentElement)==null||o.appendChild(k)),t.style.visibility="visible",k},unhighlight(b,e){var s;const r=e.parentElement,o=(s=r==null?void 0:r.parentElement)!=null?s:r;o&&o.querySelectorAll(".x6-highlight-halo-group").forEach(l=>l.remove()),e instanceof SVGElement&&(e.style.visibility="")}};class Gt{constructor(e,r){A(this,"graph"),A(this,"container"),A(this,"canvas"),A(this,"ctx"),A(this,"options"),A(this,"offscreenCanvas",null),A(this,"offscreenCtx",null),A(this,"cacheValid",!1),A(this,"scale",1),A(this,"graphBBox",null),A(this,"viewportRect",null),A(this,"isDragging",!1),A(this,"dragStartPos",null),A(this,"selectedCells",new Set),A(this,"contentOffsetX",0),A(this,"contentOffsetY",0),A(this,"graphBBoxDirty",!0),A(this,"frameCount",0),A(this,"lastFPSUpdate",0),A(this,"currentFPS",0),A(this,"lastRenderTime",0),A(this,"boundHandlers",new Map),A(this,"throttledRender"),A(this,"throttledRenderViewportOnly",()=>{}),this.graph=e,this.options=this.mergeOptionsWithDefaults(r),this.container=r.container,this.canvas=document.createElement("canvas"),this.ctx=this.canvas.getContext("2d"),this.canvas.width=this.options.width,this.canvas.height=this.options.height,this.canvas.style.border="1px solid #d9d9d9",this.canvas.style.borderRadius="4px",this.canvas.style.cursor="pointer",this.throttledRender=this.setupRenderStrategy(),this.throttledRenderViewportOnly=this.setupViewportOnlyRenderStrategy(),this.log("CustomMiniMap 已创建",this.options)}init(){if(this.log("CustomMiniMap 初始化开始"),this.container.appendChild(this.canvas),this.options.updateStrategy.useOffscreenCache){const o=Date.now();this.createOffscreenCanvas();const s=Date.now();console.log("ggggggggggggggggggggggg111111::",(s-o)/1e3)}this.bindGraphEvents(),this.bindCanvasEvents();const e=Date.now();this.refresh();const r=Date.now();console.log("ggggggggggggggggggggggg222222222::",(r-e)/1e3),this.log("CustomMiniMap 初始化完成")}destroy(){this.log("CustomMiniMap 销毁"),this.unbindGraphEvents(),this.unbindCanvasEvents(),this.canvas.parentNode&&this.canvas.parentNode.removeChild(this.canvas),this.offscreenCanvas=null,this.offscreenCtx=null,this.boundHandlers.clear()}refresh(){this.invalidateCache(),this.render()}updateOptions(e){this.options=this.mergeOptionsWithDefaults(H(H({},this.options),e)),this.throttledRender=this.setupRenderStrategy(),this.refresh()}mergeOptionsWithDefaults(e){var ze,Re,W,C,V,X,R,Y,de,Ce,me,se,J,re,qe,Ye,rn,ln,fn,mn,hn,dn,cn,Be,vn,bn,_n,xn,yn,wn,kn,Cn,Sn,En,Nn,Xe,Dn;var r,o,s,l,g,i,a,d,t,p,c,f,m,N,k,x,u,y,F,G,I,P,O,q,ne,te,K,xe,oe,fe,z,w,ce,ke,Le,Te;return{container:e.container,width:(ze=e.width)!=null?ze:300,height:(Re=e.height)!=null?Re:200,padding:(W=e.padding)!=null?W:10,rendering:{showEdges:(C=(r=e.rendering)==null?void 0:r.showEdges)!=null?C:!0,showNodeLabels:(V=(o=e.rendering)==null?void 0:o.showNodeLabels)!=null?V:!0,nodeLabelFontSize:(X=(s=e.rendering)==null?void 0:s.nodeLabelFontSize)!=null?X:8,nodeLabelMaxWidth:(R=(l=e.rendering)==null?void 0:l.nodeLabelMaxWidth)!=null?R:50,colorByNodeType:(Y=(g=e.rendering)==null?void 0:g.colorByNodeType)!=null?Y:!0,nodeColorMap:(de=(i=e.rendering)==null?void 0:i.nodeColorMap)!=null?de:{},defaultNodeColor:(Ce=(a=e.rendering)==null?void 0:a.defaultNodeColor)!=null?Ce:"#1890ff",edgeColor:(me=(d=e.rendering)==null?void 0:d.edgeColor)!=null?me:"#d9d9d9",edgeWidth:(se=(t=e.rendering)==null?void 0:t.edgeWidth)!=null?se:1,selectedNodeColor:(J=(p=e.rendering)==null?void 0:p.selectedNodeColor)!=null?J:"#ff4d4f",selectedNodeBorderWidth:(re=(c=e.rendering)==null?void 0:c.selectedNodeBorderWidth)!=null?re:2,nodeBorderColor:(qe=(f=e.rendering)==null?void 0:f.nodeBorderColor)!=null?qe:"#ffffff",nodeBorderWidth:(Ye=(m=e.rendering)==null?void 0:m.nodeBorderWidth)!=null?Ye:1},viewport:{color:(rn=(N=e.viewport)==null?void 0:N.color)!=null?rn:"rgba(24, 144, 255, 0.1)",borderColor:(ln=(k=e.viewport)==null?void 0:k.borderColor)!=null?ln:"#1890ff",borderWidth:(fn=(x=e.viewport)==null?void 0:x.borderWidth)!=null?fn:2},interaction:{enableClickToNavigate:(mn=(u=e.interaction)==null?void 0:u.enableClickToNavigate)!=null?mn:!0,enableDragToNavigate:(hn=(y=e.interaction)==null?void 0:y.enableDragToNavigate)!=null?hn:!0,enableZoom:(dn=(F=e.interaction)==null?void 0:F.enableZoom)!=null?dn:!0,highlightSelected:(cn=(G=e.interaction)==null?void 0:G.highlightSelected)!=null?cn:!0,zoomHandleSize:(Be=(I=e.interaction)==null?void 0:I.zoomHandleSize)!=null?Be:8,zoomHandleColor:(vn=(P=e.interaction)==null?void 0:P.zoomHandleColor)!=null?vn:"#1890ff"},updateStrategy:{mode:(bn=(O=e.updateStrategy)==null?void 0:O.mode)!=null?bn:"throttle",throttleDelay:(_n=(q=e.updateStrategy)==null?void 0:q.throttleDelay)!=null?_n:200,useOffscreenCache:(xn=(ne=e.updateStrategy)==null?void 0:ne.useOffscreenCache)!=null?xn:!0,cacheInvalidation:(yn=(te=e.updateStrategy)==null?void 0:te.cacheInvalidation)!=null?yn:"nodeChange"},performance:{maxFPS:(wn=(K=e.performance)==null?void 0:K.maxFPS)!=null?wn:30,simplifyThreshold:(kn=(xe=e.performance)==null?void 0:xe.simplifyThreshold)!=null?kn:500,skeletonModeThreshold:(Cn=(oe=e.performance)==null?void 0:oe.skeletonModeThreshold)!=null?Cn:2e3,simplifiedRendering:{showNodeLabels:(Sn=(z=(fe=e.performance)==null?void 0:fe.simplifiedRendering)==null?void 0:z.showNodeLabels)!=null?Sn:!1,nodeScale:(En=(ce=(w=e.performance)==null?void 0:w.simplifiedRendering)==null?void 0:ce.nodeScale)!=null?En:.6}},debug:{showFPS:(Nn=(ke=e.debug)==null?void 0:ke.showFPS)!=null?Nn:!1,showNodeCount:(Xe=(Le=e.debug)==null?void 0:Le.showNodeCount)!=null?Xe:!1,enableLog:(Dn=(Te=e.debug)==null?void 0:Te.enableLog)!=null?Dn:!1}}}setupRenderStrategy(){switch(this.options.updateStrategy.mode){case"realtime":return()=>this.render();case"throttle":return this.throttle(()=>this.render(),this.options.updateStrategy.throttleDelay);case"manual":return()=>{};default:return()=>this.render()}}setupViewportOnlyRenderStrategy(){switch(this.options.updateStrategy.mode){case"realtime":return()=>this.renderViewportOnly();case"throttle":return this.throttle(()=>this.renderViewportOnly(),this.options.updateStrategy.throttleDelay);case"manual":return()=>{};default:return()=>this.renderViewportOnly()}}render(){this.shouldRender()&&(this.lastRenderTime=Date.now(),this.updateGraphBBox(),this.updateViewportRect(),this.updateScale(),this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height),this.ctx.fillStyle="#fafafa",this.ctx.fillRect(0,0,this.canvas.width,this.canvas.height),this.graphBBox&&(this.options.updateStrategy.useOffscreenCache&&this.cacheValid?this.ctx.drawImage(this.offscreenCanvas,0,0):(this.renderContent(),this.options.updateStrategy.useOffscreenCache&&this.renderToOffscreen()),this.renderContentBorder()),this.renderViewport(),this.options.interaction.enableZoom&&this.viewportRect&&this.renderZoomHandle(),(this.options.debug.showFPS||this.options.debug.showNodeCount)&&this.renderDebugInfo(),this.updateFPS())}renderViewportOnly(){if(this.updateViewportRect(),!this.options.updateStrategy.useOffscreenCache||!this.cacheValid||!this.offscreenCanvas){this.render();return}this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height),this.ctx.fillStyle="#fafafa",this.ctx.fillRect(0,0,this.canvas.width,this.canvas.height),this.ctx.drawImage(this.offscreenCanvas,0,0),this.renderViewport(),this.options.interaction.enableZoom&&this.viewportRect&&this.renderZoomHandle(),(this.options.debug.showFPS||this.options.debug.showNodeCount)&&this.renderDebugInfo()}renderContent(){if(!this.graphBBox)return;const e=this.graph.getNodes().length,r=this.options.performance;if(e>r.skeletonModeThreshold)return;this.ctx.save();const o=this.options.padding;this.ctx.beginPath(),this.ctx.rect(o,o,this.canvas.width-2*o,this.canvas.height-2*o),this.ctx.clip();const s=e>r.simplifyThreshold;!s&&this.options.rendering.showEdges&&this.renderEdges(),this.renderNodes(s),this.ctx.restore()}renderToOffscreen(){if(!this.offscreenCanvas||!this.offscreenCtx)return;this.offscreenCtx.clearRect(0,0,this.canvas.width,this.canvas.height),this.offscreenCtx.fillStyle="#fafafa",this.offscreenCtx.fillRect(0,0,this.canvas.width,this.canvas.height);const e=this.ctx;this.ctx=this.offscreenCtx,this.renderContent(),this.renderContentBorder(),this.ctx=e,this.cacheValid=!0}renderNodes(e){const r=this.graph.getNodes(),o=e!=null?e:this.shouldSimplifyRendering();r.forEach(s=>{const l=this.selectedCells.has(s.id);this.drawNode(s,l,o)})}renderEdges(){this.graph.getEdges().forEach(e=>{this.drawEdge(e)})}renderContentBorder(){if(!this.graphBBox)return;const e=this.graphBBox.width*this.scale,r=this.graphBBox.height*this.scale;this.ctx.save(),this.ctx.strokeStyle="#d9d9d9",this.ctx.lineWidth=1,this.ctx.setLineDash([4,2]),this.ctx.strokeRect(this.contentOffsetX,this.contentOffsetY,e,r),this.ctx.setLineDash([]),this.ctx.restore()}renderViewport(){if(!this.viewportRect)return;const e=this.viewportRect;this.ctx.fillStyle=this.options.viewport.color,this.ctx.fillRect(e.x,e.y,e.width,e.height),this.ctx.strokeStyle=this.options.viewport.borderColor,this.ctx.lineWidth=this.options.viewport.borderWidth,this.ctx.strokeRect(e.x,e.y,e.width,e.height)}renderZoomHandle(){if(!this.viewportRect)return;const e=this.options.interaction.zoomHandleSize,r=this.viewportRect.x+this.viewportRect.width-e/2,o=this.viewportRect.y+this.viewportRect.height-e/2;this.ctx.fillStyle=this.options.interaction.zoomHandleColor,this.ctx.fillRect(r-e/2,o-e/2,e,e),this.ctx.strokeStyle="#ffffff",this.ctx.lineWidth=1,this.ctx.strokeRect(r-e/2,o-e/2,e,e)}renderDebugInfo(){this.ctx.save(),this.ctx.fillStyle="#000000",this.ctx.font="10px monospace";let e=15;if(this.options.debug.showFPS&&(this.ctx.fillText(`FPS: ${this.currentFPS}`,5,e),e+=12),this.options.debug.showNodeCount){const r=this.graph.getNodes().length;this.ctx.fillText(`Nodes: ${r}`,5,e)}this.ctx.restore()}drawNode(e,r,o){const s=e.getBBox(),l=this.graphToMiniMap({x:s.x,y:s.y});if(!this.isInView(l,s.width*this.scale,s.height*this.scale))return;let g=s.width*this.scale,i=s.height*this.scale;if(o){const a=this.options.performance.simplifiedRendering.nodeScale;g*=a,i*=a}this.ctx.fillStyle=this.getNodeColor(e),this.ctx.fillRect(l.x,l.y,g,i),this.ctx.strokeStyle=this.options.rendering.nodeBorderColor,this.ctx.lineWidth=this.options.rendering.nodeBorderWidth,this.ctx.strokeRect(l.x,l.y,g,i),r&&this.options.interaction.highlightSelected&&(this.ctx.strokeStyle=this.options.rendering.selectedNodeColor,this.ctx.lineWidth=this.options.rendering.selectedNodeBorderWidth,this.ctx.strokeRect(l.x,l.y,g,i)),this.options.rendering.showNodeLabels&&!o&&this.drawNodeLabel(e,l.x+g/2,l.y+i/2)}drawEdge(e){const r=e.getSourceNode(),o=e.getTargetNode();if(!r||!o)return;const s=r.getBBox(),l=o.getBBox(),g={x:s.x+s.width/2,y:s.y+s.height/2},i={x:l.x+l.width/2,y:l.y+l.height/2},a=this.graphToMiniMap(g),d=this.graphToMiniMap(i);this.ctx.strokeStyle=this.options.rendering.edgeColor,this.ctx.lineWidth=this.options.rendering.edgeWidth,this.ctx.beginPath(),this.ctx.moveTo(a.x,a.y),this.ctx.lineTo(d.x,d.y),this.ctx.stroke()}drawNodeLabel(e,r,o){const s=e.attr("label/text")||e.id;if(!s)return;this.ctx.save(),this.ctx.fillStyle="#000000",this.ctx.font=`${this.options.rendering.nodeLabelFontSize}px sans-serif`,this.ctx.textAlign="center",this.ctx.textBaseline="middle";const l=this.options.rendering.nodeLabelMaxWidth,g=this.truncateText(s,l);this.ctx.fillText(g,r,o),this.ctx.restore()}getNodeColor(e){if(!this.options.rendering.colorByNodeType)return this.options.rendering.defaultNodeColor;const r=e.getData(),o=(r==null?void 0:r.type)||e.shape;return this.options.rendering.nodeColorMap[o]||this.options.rendering.defaultNodeColor}updateGraphBBox(){if(!this.graphBBoxDirty&&this.graphBBox!==null)return;const e=this.graph.getNodes();if(e.length===0){this.graphBBox=null,this.graphBBoxDirty=!1;return}let r=1/0,o=1/0,s=-1/0,l=-1/0;e.forEach(g=>{const i=g.getBBox();r=Math.min(r,i.x),o=Math.min(o,i.y),s=Math.max(s,i.x+i.width),l=Math.max(l,i.y+i.height)}),this.graphBBox={x:r,y:o,width:s-r,height:l-o},this.graphBBoxDirty=!1}updateViewportRect(){if(!this.graphBBox){this.viewportRect=null;return}const e=this.graph.getGraphArea();if(!e){this.viewportRect=null;return}const r=this.graphToMiniMap({x:e.x,y:e.y}),o=this.graphToMiniMap({x:e.x+e.width,y:e.y+e.height});this.viewportRect={x:r.x,y:r.y,width:o.x-r.x,height:o.y-r.y}}updateScale(){if(!this.graphBBox){this.scale=1,this.contentOffsetX=0,this.contentOffsetY=0;return}const e=this.options.padding,r=this.canvas.width-2*e,o=this.canvas.height-2*e,s=r/this.graphBBox.width,l=o/this.graphBBox.height;this.scale=Math.min(s,l);const g=this.graphBBox.width*this.scale,i=this.graphBBox.height*this.scale;this.contentOffsetX=e+(r-g)/2,this.contentOffsetY=e+(o-i)/2}graphToMiniMap(e){return this.graphBBox?{x:this.contentOffsetX+(e.x-this.graphBBox.x)*this.scale,y:this.contentOffsetY+(e.y-this.graphBBox.y)*this.scale}:{x:0,y:0}}miniMapToGraph(e){return this.graphBBox?{x:this.graphBBox.x+(e.x-this.contentOffsetX)/this.scale,y:this.graphBBox.y+(e.y-this.contentOffsetY)/this.scale}:{x:0,y:0}}bindGraphEvents(){Object.entries({"node:added":()=>this.onNodeChange(),"node:removed":()=>this.onNodeChange(),"node:moved":()=>this.onNodeChange(),"node:change:position":()=>this.onNodeChange(),"node:change:size":()=>this.onNodeChange(),"edge:added":()=>this.onEdgeChange(),"edge:removed":()=>this.onEdgeChange(),"selection:changed":e=>this.onSelectionChanged(e),translate:()=>this.onViewportChange(),scale:()=>this.onViewportChange(),resize:()=>this.onGraphResize()}).forEach(([e,r])=>{this.graph.on(e,r),this.boundHandlers.set(`graph:${e}`,r)})}unbindGraphEvents(){this.boundHandlers.forEach((e,r)=>{if(r.startsWith("graph:")){const o=r.replace("graph:","");this.graph.off(o,e)}})}bindCanvasEvents(){Object.entries({mousedown:e=>this.onCanvasMouseDown(e),mousemove:e=>this.onCanvasMouseMove(e),mouseup:e=>this.onCanvasMouseUp(e),click:e=>this.onCanvasClick(e)}).forEach(([e,r])=>{this.canvas.addEventListener(e,r),this.boundHandlers.set(`canvas:${e}`,r)})}unbindCanvasEvents(){this.boundHandlers.forEach((e,r)=>{if(r.startsWith("canvas:")){const o=r.replace("canvas:","");this.canvas.removeEventListener(o,e)}})}onNodeChange(){this.log("节点变化"),this.graphBBoxDirty=!0,this.options.updateStrategy.cacheInvalidation==="nodeChange"&&this.invalidateCache(),this.throttledRender()}onEdgeChange(){this.log("边变化"),this.options.updateStrategy.cacheInvalidation==="nodeChange"&&this.invalidateCache(),this.throttledRender()}onSelectionChanged(e){this.log("选中变化",e),this.selectedCells.clear(),(e.selected||[]).forEach(r=>{this.selectedCells.add(r.id)}),this.throttledRender()}onViewportChange(){this.log("视口变化"),this.throttledRenderViewportOnly()}onGraphResize(){this.log("画布大小变化"),this.throttledRender()}onCanvasMouseDown(e){if(!this.viewportRect)return;const r=this.getCanvasPoint(e);this.isPointInViewport(r)&&(this.isDragging=!0,this.dragStartPos=r,this.canvas.style.cursor="grabbing")}onCanvasMouseMove(e){if(!(!this.isDragging||!this.dragStartPos)&&this.options.interaction.enableDragToNavigate){const r=this.getCanvasPoint(e);this.handleDragNavigation(r),this.dragStartPos=r}}onCanvasMouseUp(e){this.isDragging&&(this.isDragging=!1,this.dragStartPos=null,this.canvas.style.cursor="pointer")}onCanvasClick(e){if(!this.options.interaction.enableClickToNavigate||this.isDragging)return;const r=this.getCanvasPoint(e);this.handleClickNavigation(r)}handleClickNavigation(e){const r=this.miniMapToGraph(e);this.graph.centerPoint(r.x,r.y),this.log("点击导航到",r)}handleDragNavigation(e){if(!this.dragStartPos)return;const r={x:e.x-this.dragStartPos.x,y:e.y-this.dragStartPos.y},o={x:r.x/this.scale,y:r.y/this.scale},s=this.graph.translate();this.graph.translate(s.tx-o.x,s.ty-o.y),this.log("拖拽导航",o)}getCanvasPoint(e){const r=this.canvas.getBoundingClientRect();return{x:e.clientX-r.left,y:e.clientY-r.top}}isPointInViewport(e){return this.viewportRect?e.x>=this.viewportRect.x&&e.x<=this.viewportRect.x+this.viewportRect.width&&e.y>=this.viewportRect.y&&e.y<=this.viewportRect.y+this.viewportRect.height:!1}isInView(e,r,o){const s=this.options.padding;return!(e.x+r<s||e.y+o<s||e.x>this.canvas.width-s||e.y>this.canvas.height-s)}truncateText(e,r){if(this.ctx.font=`${this.options.rendering.nodeLabelFontSize}px sans-serif`,this.ctx.measureText(e).width<=r)return e;let o=e;for(;this.ctx.measureText(o+"...").width>r&&o.length>0;)o=o.slice(0,-1);return o+"..."}createOffscreenCanvas(){this.offscreenCanvas=document.createElement("canvas"),this.offscreenCanvas.width=this.canvas.width,this.offscreenCanvas.height=this.canvas.height,this.offscreenCtx=this.offscreenCanvas.getContext("2d")}invalidateCache(){this.cacheValid=!1}shouldRender(){const e=1e3/this.options.performance.maxFPS;return Date.now()-this.lastRenderTime>=e}shouldSimplifyRendering(){return this.graph.getNodes().length>this.options.performance.simplifyThreshold}updateFPS(){this.frameCount++;const e=Date.now();e-this.lastFPSUpdate>=1e3&&(this.currentFPS=this.frameCount,this.frameCount=0,this.lastFPSUpdate=e)}throttle(e,r){let o=0,s=null;return()=>{const l=Date.now();l-o>=r?(o=l,e()):(s!==null&&clearTimeout(s),s=window.setTimeout(()=>{o=Date.now(),e()},r-(l-o)))}}log(...e){this.options.debug.enableLog&&console.log("[CustomMiniMap]",...e)}clamp(e,r,o){return Math.min(Math.max(e,r),o)}}class Bt{constructor(e){A(this,"graph"),A(this,"config"),A(this,"mode"),A(this,"tooltipEl"),A(this,"getCallbacks"),A(this,"stateHandlers",new Map),A(this,"BUILTIN_STATES",new Set(["default","hover","selected","flowing","dimmed"])),A(this,"userDefinedStates",new Set),A(this,"overriddenStates",new Set),A(this,"hoveredEdgeId",null),A(this,"isRenderingLabel",!1),A(this,"labelRafMap",new Map),A(this,"labelUnmountMap",new Map),this.graph=e.graph,this.config=e.config,this.mode=e.mode,this.tooltipEl=e.tooltipEl||null,this.getCallbacks=e.getCallbacks||(()=>({})),this.registerBuiltInHandlers()}setEdgeState(e,r){var l;const o=(l=e.getProp("_state"))!=null?l:"default";if(o!==r){const g=this.stateHandlers.get(o);if(g!=null&&g.cleanup)try{g.cleanup(e,this.getStateContext())}catch(i){console.error(`[EdgeStateManager] Error cleaning up state "${o}":`,i)}}e.setProp("_state",r);const s=this.stateHandlers.get(r);if(!s){console.warn(`[EdgeStateManager] Unknown edge state: "${r}", available states:`,this.getRegisteredStates());return}try{s.apply(e,this.getStateContext())}catch(g){console.error(`[EdgeStateManager] Error applying state "${r}":`,g)}this.userDefinedStates.has(r)||this.overriddenStates.has(r)||this.setEdgeLabel(e,void 0,r)}resetAllEdges(e){this.graph.getEdges().forEach(r=>{r.id!==e&&this.setEdgeState(r,"default")})}getStateContext(){return{config:this.config.getConfig(),graph:this.graph,manager:this}}startOutEdgeFlow(e){const r=this.config.getConfig().highlight.nodeHoverOutEdgeFlow;if(!(r!=null&&r.enabled))return;const o=r.disableWhenNodeCountExceeds;if(o&&o>0&&this.graph.getNodes().length>o)return;const s=this.graph.getConnectedEdges(e,{outgoing:!0}),l=r.disableWhenOutEdgeCountExceeds;l&&l>0&&s.length>l||s.forEach(g=>{var a;const i=(a=g.getProp("_state"))!=null?a:"default";i!=="flowing"&&g.setProp("_prevState",i,{silent:!0}),this.setEdgeState(g,"flowing")})}stopOutEdgeFlow(e){const r=this.config.getConfig().highlight.nodeHoverOutEdgeFlow;r!=null&&r.enabled&&this.graph.getConnectedEdges(e,{outgoing:!0}).forEach(o=>{var s,l;if(((s=o.getProp("_state"))!=null?s:"default")==="flowing"){const g=(l=o.getProp("_prevState"))!=null?l:"default";o.removeProp("_prevState",{silent:!0}),this.setEdgeState(o,g)}})}stopAllOutEdgeFlows(){const e=this.config.getConfig().highlight.nodeHoverOutEdgeFlow;e!=null&&e.enabled&&this.graph.getEdges().forEach(r=>{var o;((o=r.getProp("_state"))!=null?o:"default")==="flowing"&&(r.removeProp("_prevState",{silent:!0}),this.setEdgeState(r,"default"))})}setEdgeLabel(e,r,o){var d,t,p;var s,l;const g=(d=e.getData())!=null?d:{};if(g.label==null||g.label==""||r==""||r==null){const c=e.getLabels();if(c.length>0){const f=c[0];if((s=f==null?void 0:f.attrs)!=null&&s.text){const m=f.attrs.text.text;g.label=typeof m=="string"?m:String(m!=null?m:"")}else if((l=f==null?void 0:f.attrs)!=null&&l.label){const m=f.attrs.label.text;g.label=typeof m=="string"?m:String(m!=null?m:"")}}}const i=r!==void 0&&r!==""?r:(t=g==null?void 0:g.label)!=null?t:"",a=o!==void 0?o:(p=e.getProp("_state"))!=null?p:"default";e.setData(pe(H({},g),{label:i}),{silent:!0}),this.renderEdgeLabel(e,i,a)}updateEdgeLabelText(e,r){var l,g;const o=(l=e.getData())!=null?l:{},s=(g=e.getProp("_state"))!=null?g:"default";e.setData(pe(H({},o),{label:r}),{silent:!0}),this.renderEdgeLabel(e,r,s)}renderEdgeLabel(e,r,o){if(!this.isRenderingLabel){this.isRenderingLabel=!0;try{if(this.userDefinedStates.has(o)||this.overriddenStates.has(o)){this.updateLabelTextOnly(e,r);return}const s=this.getCallbacks();s!=null&&s.onEdgeLabelRender?this.renderVueLabel(e,r,o):this.renderSVGLabel(e,r,o)}finally{this.isRenderingLabel=!1}}}updateLabelTextOnly(e,r){var o,s;const l=e.getLabels();if(l.length===0)return;const g=l[0];(o=g.attrs)!=null&&o.label?e.setLabelAt(0,pe(H({},g),{attrs:pe(H({},g.attrs),{label:pe(H({},g.attrs.label),{text:r})})})):(s=g.attrs)!=null&&s.text&&e.setLabelAt(0,pe(H({},g),{attrs:pe(H({},g.attrs),{text:pe(H({},g.attrs.text),{text:r})})}))}renderSVGLabel(e,r,o){var t,p,c,f,m,N;const s=this.config.getConfig();if(!r.trim()){e.setLabels([]);return}if(!s){console.warn("[EdgeStateManager] Config is undefined");return}const l=(t=e.getProp("_labelOpacity"))!=null?t:1;let g=s.connection.label.textColor||"#999999";o==="selected"&&s.highlight.edgeSelected.enabled?g=s.highlight.edgeSelected.textColor||s.highlight.edgeSelected.strokeColor:o==="hover"&&s.highlight.edgeHover.enabled&&(g=s.highlight.edgeHover.textColor||s.highlight.edgeHover.strokeColor);let i=s.connection.label.borderColor||"#999999";o==="selected"&&s.highlight.edgeSelected.enabled?i=s.highlight.edgeSelected.strokeColor:o==="hover"&&s.highlight.edgeHover.enabled&&(i=s.highlight.edgeHover.strokeColor);let a=s.connection.label.borderWidth||1;o==="selected"&&s.highlight.edgeSelected.enabled?a=s.highlight.edgeSelected.strokeWidth:o==="hover"&&s.highlight.edgeHover.enabled&&(a=s.highlight.edgeHover.strokeWidth);const d=s.connection.label;e.setLabels([{attrs:{body:{fill:d.backgroundColor,stroke:i,strokeWidth:a,rx:d.borderRadius,ry:d.borderRadius,refWidth:((p=d.paddingX)!=null?p:d.padding)*2,refHeight:((c=d.paddingY)!=null?c:d.padding)*2,refX:-((f=d.paddingX)!=null?f:d.padding),refY:-((m=d.paddingY)!=null?m:d.padding)+((N=d.offsetY)!=null?N:0),filter:{name:"dropShadow",args:{dx:0,dy:1,stdDeviation:2,color:"rgba(0,0,0,0.10)"}},fillOpacity:l,strokeOpacity:l,cursor:"pointer"},text:{text:r,fill:g,fontSize:d.fontSize,fontWeight:d.fontWeight,textAnchor:d.textAnchor,textVerticalAnchor:d.textVerticalAnchor,pointerEvents:d.pointerEvents,fillOpacity:l,cursor:"pointer"}},position:{distance:d.position}}])}renderVueLabel(e,r,o){const s=this.config.getConfig(),l=this.getCallbacks(),g=l==null?void 0:l.onEdgeLabelRender;if(!g||!s)return;const i=this.labelRafMap.get(e.id);i!==void 0&&(cancelAnimationFrame(i),this.labelRafMap.delete(e.id));const a=this.labelUnmountMap.get(e.id);if(a&&(a(),this.labelUnmountMap.delete(e.id)),!r.trim()){e.setLabels([]);return}e.setLabels([{markup:[{tagName:"foreignObject",selector:"fo"}],attrs:{fo:{width:1,height:1,x:0,y:0,style:"overflow: visible; pointer-events: none;"}},position:{distance:s.connection.label.position}}]);const d=requestAnimationFrame(()=>{this.labelRafMap.delete(e.id);const t=this.graph.findViewByCell(e);if(!t)return;const p=t.container.querySelector("foreignObject");if(!p)return;const c=g(p,e,{label:r,state:o});this.labelUnmountMap.set(e.id,c)});this.labelRafMap.set(e.id,d)}setHoveredEdge(e){this.hoveredEdgeId=e}getHoveredEdge(){return this.hoveredEdgeId}registerStateHandler(e,r,o=!0){if(!o&&this.stateHandlers.has(e))throw new Error(`[EdgeStateManager] State "${e}" already exists. Use override=true to replace.`);this.BUILTIN_STATES.has(e)&&this.stateHandlers.has(e)?(this.overriddenStates.add(e),console.log(`[EdgeStateManager] Overriding built-in state: "${e}"`)):this.BUILTIN_STATES.has(e)||(this.userDefinedStates.add(e),console.log(`[EdgeStateManager] Registering user-defined state: "${e}"`)),this.stateHandlers.set(e,r),console.log(`[EdgeStateManager] Registered edge state handler: "${e}"`)}getStateHandler(e){return this.stateHandlers.get(e)}unregisterStateHandler(e){const r=this.stateHandlers.delete(e);return r&&(this.userDefinedStates.delete(e),this.overriddenStates.delete(e),console.log(`[EdgeStateManager] Unregistered edge state handler: "${e}"`)),r}getRegisteredStates(){return Array.from(this.stateHandlers.keys())}isBuiltinState(e){return this.BUILTIN_STATES.has(e)}isUserDefinedState(e){return this.userDefinedStates.has(e)||this.overriddenStates.has(e)}registerBuiltInHandlers(){this.stateHandlers.set("default",{apply:(e,r)=>{const o=r.config;e.attr({line:{stroke:o.connection.strokeColor,strokeWidth:o.connection.strokeWidth,strokeDasharray:"",style:{animation:"none"}}})}}),this.stateHandlers.set("hover",{apply:(e,r)=>{const o=r.config,s=o.highlight.edgeHover.enabled?o.highlight.edgeHover.strokeColor:"#1677ff",l=o.highlight.edgeHover.enabled?o.highlight.edgeHover.strokeWidth:o.connection.strokeWidth;e.attr("line/stroke",s),e.attr("line/strokeWidth",l)}}),this.stateHandlers.set("selected",{apply:(e,r)=>{const o=r.config,s=o.highlight.edgeSelected.enabled?o.highlight.edgeSelected.strokeColor:"#1677ff",l=o.highlight.edgeSelected.enabled?o.highlight.edgeSelected.strokeWidth:o.connection.strokeWidth;e.attr("line/stroke",s),e.attr("line/strokeWidth",l),e.attr("line/strokeDasharray",""),e.attr("line/style/animation","none")}}),this.stateHandlers.set("flowing",{apply:(e,r)=>{const o=r.config.highlight.nodeHoverOutEdgeFlow;e.attr("line/stroke",o.strokeColor),e.attr("line/strokeWidth",o.strokeWidth),e.attr("line/strokeDasharray","8 4"),e.attr("line/style/animation",`fd-flow ${o.duration}s linear infinite`)},cleanup:(e,r)=>{e.attr("line/strokeDasharray",""),e.attr("line/style/animation","none")}}),this.stateHandlers.set("dimmed",{apply:(e,r)=>{var t,p,c,f;const o=r.config,s=o.highlight.edgeHoverOverlap,l=(t=s==null?void 0:s.opacity)!=null?t:.3,g=(p=e.getProp("_prevState"))!=null?p:"default";let i=o.connection.strokeColor,a=o.connection.strokeWidth;g==="hover"?(i=o.highlight.edgeHover.strokeColor,a=o.highlight.edgeHover.strokeWidth):g==="selected"?(i=o.highlight.edgeSelected.strokeColor,a=o.highlight.edgeSelected.strokeWidth):g==="flowing"&&(i=o.highlight.nodeHoverOutEdgeFlow.strokeColor,a=o.highlight.nodeHoverOutEdgeFlow.strokeWidth),e.attr("line/stroke",i),e.attr("line/strokeWidth",a),e.attr("line/strokeOpacity",l),e.attr("line/strokeDasharray",""),e.attr("line/style/animation","none"),e.setProp("_labelOpacity",l,{silent:!0});const d=(f=((c=e.getData())!=null?c:{}).label)!=null?f:"";this.setEdgeLabel(e,d,g)},cleanup:(e,r)=>{e.attr("line/strokeOpacity",1),e.removeProp("_labelOpacity",{silent:!0})}})}dispose(){this.labelRafMap.forEach(e=>cancelAnimationFrame(e)),this.labelRafMap.clear(),this.labelUnmountMap.forEach(e=>e()),this.labelUnmountMap.clear(),this.stateHandlers.clear(),this.userDefinedStates.clear(),this.overriddenStates.clear()}}class Ot{constructor(e){A(this,"graph"),A(this,"config"),A(this,"mode"),A(this,"tooltipEl"),A(this,"getCallbacks"),A(this,"stateHandlers",new Map),A(this,"hoveredNodeId",null),A(this,"draggingNodeId",null),this.graph=e.graph,this.config=e.config,this.mode=e.mode,this.tooltipEl=e.tooltipEl||null,this.getCallbacks=e.getCallbacks||(()=>({})),this.registerBuiltInHandlers()}setNodeState(e,r){var l;const o=(l=e.getProp("_state"))!=null?l:"default";if(o!==r){const g=this.stateHandlers.get(o);if(g!=null&&g.cleanup)try{g.cleanup(e,this.getStateContext())}catch(i){console.error(`[NodeStateManager] Error cleaning up state "${o}":`,i)}}e.setProp("_state",r);const s=this.stateHandlers.get(r);if(!s){console.warn(`[NodeStateManager] Unknown node state: "${r}", available states:`,this.getRegisteredStates());return}try{s.apply(e,this.getStateContext())}catch(g){console.error(`[NodeStateManager] Error applying state "${r}":`,g)}}resetAllNodes(e){this.graph.getNodes().forEach(r=>{r.id!==e&&this.setNodeState(r,"default")})}getStateContext(){return{config:this.config.getConfig(),graph:this.graph,manager:this,canConnect:this.mode.can("canConnect")}}setPortsVisibility(e,r,o="default"){const s=this.config.getConfig();this.mode.can("canConnect")&&e.getPorts().forEach(l=>{if(l.id&&(e.setPortProp(l.id,["attrs","circle","style","visibility"],r?"visible":"hidden"),r)){const g=o==="hover"?s.highlight.portHover:s.highlight.portDefault;e.setPortProp(l.id,["attrs","circle","stroke"],g.strokeColor||g.stroke),e.setPortProp(l.id,["attrs","circle","r"],g.size),e.setPortProp(l.id,["attrs","circle","fill"],g.fillColor||g.fill),e.setPortProp(l.id,["attrs","circle","strokeWidth"],g.strokeWidth)}})}setPortHoverStyle(e,r){const o=this.config.getConfig().highlight.portHover;o.enabled&&(e.setPortProp(r,["attrs","circle","fill"],o.fillColor),e.setPortProp(r,["attrs","circle","stroke"],o.strokeColor),e.setPortProp(r,["attrs","circle","r"],o.size),e.setPortProp(r,["attrs","circle","strokeWidth"],o.strokeWidth))}resetPortStyle(e,r){const o=this.config.getConfig().highlight.portDefault;e.setPortProp(r,["attrs","circle","stroke"],o.stroke),e.setPortProp(r,["attrs","circle","r"],o.size),e.setPortProp(r,["attrs","circle","fill"],o.fill),e.setPortProp(r,["attrs","circle","strokeWidth"],o.strokeWidth)}showTooltip(e,r){var o;if(!this.mode.can("canNodeTooltip"))return;const s=this.tooltipEl;if(!s)return;s.style.display="block";const l=this.getCallbacks();(o=l.onTooltipChange)==null||o.call(l,{visible:!0,type:"node",node:e,edge:null,data:e.getData()}),requestAnimationFrame(()=>{var a;var g;const i=s.querySelector('[data-role="tooltip-content"]');i&&(i.innerHTML=e.getProp("label")||(e.getLabel?e.getLabel():"")||((a=(g=e.getData())==null?void 0:g.label)!=null?a:"")),this.updateTooltipPosition(e)})}hideTooltip(){var e;const r=this.tooltipEl;if(!r)return;r.style.left="0px",r.style.top="0px",r.style.display="none";const o=this.getCallbacks();(e=o.onTooltipChange)==null||e.call(o,{visible:!1,type:null,node:null,edge:null,data:null})}updateTooltipPosition(e){var p,c;const r=this.tooltipEl;if(!r||r.style.display==="none")return;const o=e.position(),s=this.graph.localToPage(o.x,o.y),l=this.graph.zoom(),g={width:e.size().width*l,height:e.size().height*l},i=Math.max(1,l),a=this.config.getConfig().tooltip,d=(p=a==null?void 0:a.offsetX)!=null?p:0,t=(c=a==null?void 0:a.offsetY)!=null?c:0;r.style.transform=`scale(${i})`,r.style.transformOrigin="center bottom",r.style.left=s.x+g.width/2-r.clientWidth/2+d+"px",r.style.top=s.y-50+t+"px"}setHoveredNode(e){this.hoveredNodeId=e}getHoveredNode(){return this.hoveredNodeId}setDraggingNode(e){this.draggingNodeId=e}getDraggingNode(){return this.draggingNodeId}registerStateHandler(e,r,o=!0){if(!o&&this.stateHandlers.has(e))throw new Error(`[NodeStateManager] State "${e}" already exists. Use override=true to replace.`);this.stateHandlers.set(e,r),console.log(`[NodeStateManager] Registered node state handler: "${e}"`)}getStateHandler(e){return this.stateHandlers.get(e)}unregisterStateHandler(e){const r=this.stateHandlers.delete(e);return r&&console.log(`[NodeStateManager] Unregistered node state handler: "${e}"`),r}getRegisteredStates(){return Array.from(this.stateHandlers.keys())}registerBuiltInHandlers(){this.stateHandlers.set("default",{apply:(e,r)=>{r.manager.setPortsVisibility(e,!1)}}),this.stateHandlers.set("hover",{apply:(e,r)=>{r.canConnect&&r.manager.setPortsVisibility(e,!0,"default")}}),this.stateHandlers.set("selected",{apply:(e,r)=>{r.canConnect&&r.manager.setPortsVisibility(e,!0,"default")}}),this.stateHandlers.set("dragging",{apply:(e,r)=>{r.canConnect&&r.manager.setPortsVisibility(e,!0,"default")}})}dispose(){this.stateHandlers.clear(),this.hoveredNodeId=null,this.draggingNodeId=null}}const Ht={class:"group-header"},Wt={class:"group-title"},Vt={class:"group-count"},Ut={key:0,class:"group-collapsed-info"},Zt=j({__name:"GroupNode",props:{node:{}},setup(b){var t,p;const e=b,r=E((t=e.node.getData())!=null?t:{}),o=E(0),s=E((p=r.value.collapsed)!=null?p:!1),l=ie(()=>({width:"100%",height:"100%"}));function g(){const c=e.node.getChildren(),f=c?c.filter(m=>m.isNode()).length:0;o.value=f,console.log("[GroupNode] 子节点数量更新:",f)}function i(){var m,N;const c=!s.value;if(s.value=c,c){const k=e.node.size();e.node.setData(pe(H({},r.value),{collapsed:!0,originalWidth:k.width,originalHeight:k.height})),e.node.resize(200,80,{silent:!1})}else{const k=(m=r.value.originalWidth)!=null?m:300,x=(N=r.value.originalHeight)!=null?N:200;e.node.setData(pe(H({},r.value),{collapsed:!1})),e.node.resize(k,x,{silent:!1})}const f=e.node.getChildren();f&&f.forEach(k=>{k.isNode()&&k.setVisible(!c)}),console.log("[GroupNode] 切换状态:",c?"收起":"展开")}let a=null,d=null;return Ge(()=>{if(g(),s.value){const m=e.node.getChildren();if(m&&m.forEach(N=>{N.isNode()&&N.setVisible(!1)}),r.value.originalWidth&&r.value.originalHeight){const N=e.node.size(),k=200,x=80;(N.width!==k||N.height!==x)&&e.node.resize(k,x,{silent:!0})}}const c=({current:m})=>{var N;console.log("[GroupNode] 数据变化:",m),r.value=H({},m),s.value=(N=m.collapsed)!=null?N:!1},f=({current:m,previous:N})=>{console.log("[GroupNode] 子节点变化:",{之前:(N==null?void 0:N.length)||0,现在:(m==null?void 0:m.length)||0}),g()};e.node.on("change:data",c),e.node.on("change:children",f),a=()=>{e.node.off("change:data",c)},d=()=>{e.node.off("change:children",f)},console.log("[GroupNode] 已绑定 change:data 和 change:children 事件监听")}),nn(()=>{a&&(a(),console.log("[GroupNode] 已移除 change:data 事件监听")),d&&(d(),console.log("[GroupNode] 已移除 change:children 事件监听"))}),(c,f)=>{const m=Fe("a-tooltip");return h(),_("div",{class:we(["group-node",{"group-node--collapsed":s.value}]),style:ye(l.value)},[n("div",Ht,[s.value?(h(),Ne(D(at),{key:1,class:"group-icon"})):(h(),Ne(D(lt),{key:0,class:"group-icon"})),n("span",Wt,L(r.value.label||"分组"),1),n("span",Vt,L(o.value)+" 个节点",1),v(m,{title:s.value?"展开分组":"收起分组",placement:"top"},{default:M(()=>[n("div",{class:"group-toggle",onClick:We(i,["stop"])},[s.value?(h(),Ne(D(dt),{key:1,class:"toggle-icon"})):(h(),Ne(D(cr),{key:0,class:"toggle-icon"}))])]),_:1},8,["title"])]),s.value?(h(),_("div",Ut,[...f[0]||(f[0]=[n("span",{class:"collapsed-text"},"已收起",-1)])])):B("",!0)],6)}}}),un=(b,e)=>{const r=b.__vccOpts||b;for(const[o,s]of e)r[o]=s;return r},jt=un(Zt,[["__scopeId","data-v-b8230772"]]),qt={key:0,class:"cvn-fallback"},Yt={class:"cvn-fallback__type"},Xt=j({__name:"CommonVueNode",props:{node:{}},setup(b){const e=b,r=Ve("getGraph"),o=E(null),s=E(null),l=On(""),g=On(e.node.getData()||{}),i=E(e.node.getProp("label")||""),a=E(e.node.getProp("_state")||"default");let d=null;const t=E(!1);function p(y,F){if(y>0&&F>0){const G=e.node.getSize();(Math.abs(G.width-y)>1||Math.abs(G.height-F)>1)&&e.node.resize(y,F)}}function c(){const y=s.value;if(!y)return;const F=y.querySelector("[data-cvn-root]");if(!F)return;const G=F.offsetWidth,I=F.offsetHeight;p(G,I)}function f(y){var q;var F;if(d&&(d.unmount(),d=null),s.value&&(s.value.innerHTML=""),!y){t.value=!0;return}const G=Wn.get(y);if(!G){t.value=!0;return}t.value=!1;const I={node:e.node,graph:(q=r==null?void 0:r())!=null?q:null,nodeType:y,data:g,label:i,state:a},P=j({name:`CvnSlot_${y}`,setup(){return()=>G(I)}}),O=ar(P);if(pn){Object.entries(pn.components).forEach(([te,K])=>{O.component(te,K)}),Object.entries(pn.directives).forEach(([te,K])=>{O.directive(te,K)});const ne=pn.provides;if(ne){const te=(F=O._context)==null?void 0:F.provides;te&&Object.assign(te,ne)}}s.value&&(d=O,O.mount(s.value),Ln(()=>{requestAnimationFrame(()=>{c()})}))}function m({key:y,current:F}){if(console.log("[CommonVueNode] change:* event fired, key:",y,"current:",F),y==="node-type"){const G=F||"";G!==l.value&&(l.value=G)}else if(y==="label"){const G=F||"";G!==i.value&&(i.value=G)}else if(y==="_state"){const G=F||"default";G!==a.value&&(console.log("[CommonVueNode] Updating nodeState from",a.value,"to",G),a.value=G)}}function N(){g.value=H({},e.node.getData())}let k=null,x=null;function u(){const y=s.value;if(!y)return;const F=y.querySelector("[data-cvn-root]");F&&(x==null||x.disconnect(),x=new ResizeObserver(()=>{c()}),x.observe(F))}return Ge(()=>{var y;l.value=e.node.getProp("node-type")||((y=e.node.getData())==null?void 0:y.nodeType)||"",e.node.on("change:*",m),e.node.on("change:data",N),k=Hn(()=>{Sr.value;const F=l.value;f(F),Ln(()=>{requestAnimationFrame(()=>{u()})})})}),nn(()=>{k==null||k(),k=null,d&&(d.unmount(),d=null),e.node.off("change:*",m),e.node.off("change:data",N),x==null||x.disconnect(),x=null}),(y,F)=>(h(),_("div",{ref_key:"wrapperRef",ref:o,class:"cvn-wrapper"},[n("div",{ref_key:"slotMountRef",ref:s,class:"cvn-slot-mount"},null,512),t.value?(h(),_("div",qt,[n("span",Yt,L(l.value),1),F[0]||(F[0]=n("span",{class:"cvn-fallback__hint"},"未注册插槽",-1))])):B("",!0)],512))}}),Jt=un(Xt,[["__scopeId","data-v-c7510dc8"]]);function Kt(b){return{circle:{r:b.size,magnet:!0,stroke:b.stroke,strokeWidth:b.strokeWidth,fill:b.fill,style:{visibility:"hidden"}}}}const Er=An.highlight.portDefault;function Qt(b=Er){const e=Kt(b);return{groups:{top:{position:"top",attrs:e},right:{position:"right",attrs:e},bottom:{position:"bottom",attrs:e},left:{position:"left",attrs:e}},items:[{group:"top",id:"port-top"},{group:"right",id:"port-right"},{group:"bottom",id:"port-bottom"},{group:"left",id:"port-left"}]}}function eo(b){const e=Er;an({shape:"group-node",width:300,height:200,component:jt,ports:{}}),an({shape:"common-vue-node",width:200,height:72,component:Jt,ports:Qt(e)})}const ge=An.connection;var rr,tr,or,sr,ir;_e.registerEdge("flow-edge",{inherit:"edge",markup:[{tagName:"path",selector:"wrapper",attrs:{fill:"none",cursor:"pointer"}},{tagName:"path",selector:"line",attrs:{fill:"none",cursor:"pointer"}}],attrs:{wrapper:{connection:!0,stroke:"transparent",strokeWidth:ge.interactionWidth,strokeLinejoin:"round",strokeLinecap:"round",fill:"none",cursor:"pointer"},line:{connection:!0,stroke:ge.strokeColor,strokeWidth:ge.strokeWidth,strokeLinejoin:"round",strokeLinecap:"round",targetMarker:{name:"classic",size:7}}},router:{name:ge.router,args:{padding:20}},connector:{name:ge.connector,args:ge.connector==="rounded"?{radius:8}:{}},defaultLabel:{markup:[{tagName:"rect",selector:"body"},{tagName:"text",selector:"label"}],attrs:{label:{fill:ge.label.textColor,fontSize:ge.label.fontSize,fontWeight:ge.label.fontWeight,textAnchor:ge.label.textAnchor,textVerticalAnchor:ge.label.textVerticalAnchor,pointerEvents:ge.label.pointerEvents},body:{ref:"label",fill:ge.label.backgroundColor,stroke:ge.label.borderColor,strokeWidth:ge.label.borderWidth,rx:ge.label.borderRadius,ry:ge.label.borderRadius,refWidth:((rr=ge.label.paddingX)!=null?rr:ge.label.padding)*2,refHeight:((tr=ge.label.paddingY)!=null?tr:ge.label.padding)*2,refX:-((or=ge.label.paddingX)!=null?or:ge.label.padding),refY:-((sr=ge.label.paddingY)!=null?sr:ge.label.padding)+((ir=ge.label.offsetY)!=null?ir:0)}},position:{distance:ge.label.position}}},!0);eo();class no{constructor(e){A(this,"id"),A(this,"selectedCells",E([])),A(this,"_minimapCollapsed",!0),A(this,"graph"),A(this,"state"),A(this,"config"),A(this,"history"),A(this,"mode"),A(this,"nodeStateManager"),A(this,"edgeStateManager"),A(this,"callbacks",{}),A(this,"dnd"),A(this,"transform",null),A(this,"customMiniMap",null),A(this,"groupPadding",20),A(this,"groupMinWidth",200),A(this,"groupMinHeight",150),A(this,"options"),A(this,"tooltipEl",null),A(this,"tooltipContentEl",null),A(this,"_isConnecting",!1),A(this,"_containerMouseLeaveHandler",null),A(this,"_containerScrollHandler",null),A(this,"operationQueue",Promise.resolve()),A(this,"_edgeLabelUnmountMap",new Map),A(this,"_edgeLabelRafMap",new Map),A(this,"_isRenderingLabel",!1),this.options=e,this.id=e.id||this.generateId(),this.state=new Mt(e.initialMeta),this.config=new Lt(e.initialConfig),this.history=new Rt,this.mode=new At({mode:e.mode||"design",permissionConfig:e.permissionConfig,permissions:e.permissions,getPermissions:e.getPermissions}),console.log("[FlowDesigner Constructor] options.callbacks:",e.callbacks),e.callbacks&&(this.callbacks=H(H({},this.callbacks),e.callbacks),console.log("[FlowDesigner Constructor] merged callbacks:",this.callbacks)),e.tooltipContainer&&(this.tooltipEl=e.tooltipContainer,this.tooltipContentEl=e.tooltipContainer.querySelector('[data-role="tooltip-content"]')),this.graph=this.initGraph(e.container,e.minimapContainer),this.nodeStateManager=new Ot({graph:this.graph,config:this.config,mode:this.mode,tooltipEl:this.tooltipEl,getCallbacks:()=>({onTooltipChange:this.callbacks.onTooltipChange})}),this.edgeStateManager=new Bt({graph:this.graph,config:this.config,mode:this.mode,tooltipEl:this.tooltipEl,getCallbacks:()=>({onEdgeLabelRender:this.callbacks.onEdgeLabelRender,onTooltipChange:this.callbacks.onTooltipChange})}),this.bindGraphEvents()}enqueue(e){const r=this.operationQueue.then(e,e);return this.operationQueue=r.catch(()=>{}),r}initGraph(e,r){var g,i,a,d,t;const o=this.mode.getCapabilities(),s=this.config.getConfig();_e.registerHighlighter("halo",It,!0),_e.registerHighlighter("noop",Pt,!0);const l=new _e({container:e,autoResize:!0,panning:!1,grid:s.grid,virtual:{enabled:!0,margin:200},async:!0,background:s.background,embedding:{enabled:!0,findParent({node:p}){const c=p.getBBox();return this.getNodes().filter(f=>f.shape!=="group-node"||f===p?!1:f.getBBox().containsRect(c))}},translating:{restrict:!1},interacting:{nodeMovable:o.canDrag,edgeMovable:!1,edgeLabelMovable:!1,magnetConnectable:o.canConnect,arrowheadMovable:!1,vertexMovable:!1,vertexAddable:!1,vertexDeletable:!1},selecting:{enabled:!0,multiple:o.canMultipleSelect,rubberband:o.canMultipleSelect,movable:o.canDrag,showNodeSelectionBox:!0},connecting:{router:{name:s.connection.router,args:{padding:20}},connector:{name:s.connection.connector,args:s.connection.connector==="jumpover"?{radius:8}:{}},anchor:"center",connectionPoint:"anchor",allowBlank:s.connection.allowBlank,allowLoop:s.connection.allowLoop,allowMulti:s.connection.allowMulti,highlight:!0,snap:{radius:20},createEdge:()=>this.graph.createEdge({shape:"flow-edge",attrs:{line:{strokeDasharray:"6 4"}}}),validateConnection:({sourceMagnet:p,targetMagnet:c,sourceCell:f,targetCell:m})=>this.callbacks.beforeEdgeAdd?this.callbacks.beforeEdgeAdd({sourceCell:f,targetCell:m,sourceMagnet:p,targetMagnet:c}):!0},highlighting:{magnetAdsorbed:s.highlight.magnetAdsorbed.enabled?{name:"stroke",args:{attrs:{stroke:s.highlight.magnetAdsorbed.strokeColor,strokeWidth:s.highlight.magnetAdsorbed.strokeWidth}}}:!1,magnetAvailable:s.highlight.magnetAvailable.enabled?{name:"halo",args:{fill:s.highlight.magnetAvailable.fillColor,stroke:s.highlight.magnetAvailable.strokeColor,strokeWidth:2,opacity:.15,haloSize:8,animated:!1}}:!1,nodeAvailable:{name:"noop",args:{}}},defaultEdge:{shape:"flow-edge",attrs:{line:{stroke:s.connection.strokeColor,strokeWidth:s.connection.strokeWidth,targetMarker:{name:"classic",size:7},strokeLinejoin:"round",strokeLinecap:"round",cursor:"pointer"}},label:{attrs:{body:{fill:s.connection.label.backgroundColor,stroke:s.connection.label.borderColor,strokeWidth:s.connection.label.borderWidth,rx:s.connection.label.borderRadius,ry:s.connection.label.borderRadius,refWidth:((g=s.connection.label.paddingX)!=null?g:s.connection.label.padding)*2,refHeight:((i=s.connection.label.paddingY)!=null?i:s.connection.label.padding)*2,refX:-((a=s.connection.label.paddingX)!=null?a:s.connection.label.padding),refY:-((d=s.connection.label.paddingY)!=null?d:s.connection.label.padding)+((t=s.connection.label.offsetY)!=null?t:0),c:{name:"dropShadow",args:{dx:0,dy:1,stdDeviation:2,color:"rgba(0,0,0,0.10)"}},cursor:"pointer"},text:{fill:s.connection.label.textColor,fontSize:s.connection.label.fontSize,fontWeight:s.connection.label.fontWeight,textAnchor:s.connection.label.textAnchor,textVerticalAnchor:s.connection.label.textVerticalAnchor,pointerEvents:s.connection.label.pointerEvents,cursor:"pointer"}},position:{distance:s.connection.label.position}}}});return l.use(new et({enabled:s.align.snaplineEnabled,sharp:!0})),l.use(new Jn({enabled:s.interaction.multipleSelection,multiple:s.interaction.multipleSelection,rubberband:s.interaction.rubberband,movable:o.canDrag,showNodeSelectionBox:!0,showEdgeSelectionBox:!1,multipleSelectionModifiers:["ctrl","meta"],filter:p=>p.isNode()?o.canSelectNode:p.isEdge()?o.canSelectEdge:!0})),l.use(new nt({enabled:s.history.enabled,maxHistorySize:s.history.stackSize,ignoreAdd:s.history.ignoreAdd,ignoreRemove:s.history.ignoreRemove,ignoreChange:s.history.ignoreChange,beforeAddCommand(p,c){if(p==="cell:added"||p==="cell:removed")return!0;if(p.startsWith("cell:change:")){const f=c.cell,m=c.key;if(f.isEdge()){if(m!=="source"&&m!=="target")return!1;const N=c.current;return!!(N!=null&&N.cell)}if(f.isNode()&&m==="data")return!1;if(f.isNode())return m==="position"}return!1}})),s.minimap.enabled&&r&&(this.customMiniMap=new Gt(l,{container:r,width:s.minimap.width,height:s.minimap.height,padding:s.minimap.padding,rendering:{showEdges:!0,showNodeLabels:!1,colorByNodeType:!0,defaultNodeColor:"#5F95FF",edgeColor:"#A2B1C3",edgeWidth:1},viewport:{color:"rgba(95, 149, 255, 0.1)",borderColor:"#5F95FF",borderWidth:2},interaction:{enableClickToNavigate:!0,enableDragToNavigate:!0,highlightSelected:!0},updateStrategy:{useOffscreenCache:!0,throttleDelay:16}}),this.customMiniMap.init(),console.log("[FlowDesigner] CustomMiniMap 已初始化")),l.use(new rt({enabled:!0})),l.use(new tt({enabled:!0,global:!0})),this.transform=new ot({resizing:{enabled:s.interaction.resizable,minWidth:80,minHeight:40,preserveAspectRatio:!1}}),l.use(this.transform),this.bindKeyboardShortcuts(l),this.config.applyToGraph(l,this.transform,this.mode.getCapabilities()),this.history.bind(l),this.dnd=new st({target:l,scaled:!1,animation:!0}),l}bindKeyboardShortcuts(e){let r=!1;const o=i=>{r&&(i.preventDefault(),i.stopPropagation())},s=e.container.parentElement;s&&(s.addEventListener("scroll",o,{passive:!1}),s.addEventListener("wheel",o,{passive:!1}));const l=i=>{i.code==="Space"&&!i.repeat&&(i.preventDefault(),r=!0,this.mode.can("canPan")&&(e.enablePanning(),this.mode.can("canMultipleSelect")&&e.disableRubberband(),e.container.style.cursor="grab",s&&(s.style.overflow="hidden")))};document.addEventListener("keydown",l);const g=i=>{i.code==="Space"&&(r=!1,e.disablePanning(),this.mode.can("canMultipleSelect")&&e.enableRubberband(),e.container.style.cursor="",s&&(s.style.overflow=""))};document.addEventListener("keyup",g),this._applyShortcutConfig(e),window.addEventListener("mousewheel",i=>{const a=this.tooltipEl;a&&a.style.display!=="none"&&this.nodeStateManager.hideTooltip()})}_applyShortcutConfig(e){if(!e){console.error("[FlowDesigner] Graph 未初始化，无法绑定快捷键");return}const r=this.options.shortcuts;if(r&&typeof r=="object"&&!("keyMap"in r)&&!("custom"in r)&&Object.values(r).some(i=>typeof i=="function")){this._bindDefaultShortcuts();for(const[i,a]of Object.entries(r))e.unbindKey(i),e.bindKey(i,a);return}const o={undo:()=>{this.mode.can("canUndo")&&this.history.undo()},redo:()=>{this.mode.can("canRedo")&&this.history.redo()},redoAlt:()=>{this.mode.can("canRedo")&&this.history.redo()},copy:()=>{if(!this.mode.can("canCopy"))return;const i=e.getSelectedCells();i.length&&e.copy(i)},paste:()=>{this.mode.can("canPaste")&&this._doPaste()},delete:()=>{this.mode.can("canDelete")&&this._removeCellsSafely(e.getSelectedCells(),"keyboard")},deleteAlt:()=>{this.mode.can("canDelete")&&this._removeCellsSafely(e.getSelectedCells(),"keyboard")},selectAll:()=>{if(!this.mode.can("canSelectAll")||!this.mode.can("canMultipleSelect"))return;const i=e.getCells().filter(a=>a.isNode()?this.mode.can("canSelectNode"):a.isEdge()?this.mode.can("canSelectEdge"):!0);i.length&&e.select(i)},group:()=>{this.mode.can("canGroup")&&this.groupSelectedNodes()},ungroup:()=>{this.mode.can("canGroup")&&this.ungroupSelected()},zoomIn:()=>{e.zoom()<5&&e.zoom(.1)},zoomOut:()=>{e.zoom()>.2&&e.zoom(-.1)},fitView:()=>{this.mode.can("canFitView")&&e.fitToContent({padding:40})},resetView:()=>{this.mode.can("canResetView")&&(e.zoomTo(1),e.centerContent())},save:()=>{this.save()},search:()=>{var i,a;(a=(i=this.callbacks).onOpenSearch)==null||a.call(i)}},s={undo:"ctrl+z",redo:"ctrl+shift+z",redoAlt:"ctrl+y",copy:"ctrl+c",paste:"ctrl+v",delete:"delete",deleteAlt:"backspace",selectAll:"ctrl+a",group:"ctrl+g",ungroup:"ctrl+shift+g",zoomIn:"ctrl+=",zoomOut:"ctrl+-",fitView:"ctrl+0",resetView:"ctrl+shift+h",save:"ctrl+s",search:"ctrl+f"},l=r,g=H({},s);if(l!=null&&l.keyMap)for(const[i,a]of Object.entries(l.keyMap))a===null?delete g[i]:a&&(g[i]=a);for(const[i,a]of Object.entries(g)){const d=o[i];d&&e.bindKey(a,()=>(d(),!1))}if(l!=null&&l.custom)for(const[i,a]of Object.entries(l.custom))e.unbindKey(i),e.bindKey(i,a)}_bindDefaultShortcuts(){const e=this.graph;e.bindKey("ctrl+z",()=>this.mode.can("canUndo")?(this.history.undo(),!1):!0),e.bindKey("ctrl+shift+z",()=>this.mode.can("canRedo")?(this.history.redo(),!1):!0),e.bindKey("ctrl+y",()=>this.mode.can("canRedo")?(this.history.redo(),!1):!0),e.bindKey("ctrl+a",()=>{if(!this.mode.can("canSelectAll")||!this.mode.can("canMultipleSelect"))return!0;const r=e.getCells().filter(o=>o.isNode()?this.mode.can("canSelectNode"):o.isEdge()?this.mode.can("canSelectEdge"):!0);return r.length&&e.select(r),!1}),e.bindKey("ctrl+c",()=>{if(!this.mode.can("canCopy"))return!0;const r=e.getSelectedCells();return r.length&&e.copy(r),!1}),e.bindKey("ctrl+v",()=>this.mode.can("canPaste")?(this._doPaste(),!1):!0),e.bindKey("ctrl+s",()=>(this.save(),!1)),e.bindKey("ctrl+f",()=>{var r,o;return(o=(r=this.callbacks).onOpenSearch)==null||o.call(r),!1}),e.bindKey(["delete","backspace"],()=>this.mode.can("canDelete")?(this._removeCellsSafely(e.getSelectedCells(),"keyboard"),!1):!0),e.bindKey("ctrl+g",()=>this.mode.can("canGroup")?(this.groupSelectedNodes(),!1):!0),e.bindKey("ctrl+shift+g",()=>this.mode.can("canGroup")?(this.ungroupSelected(),!1):!0),e.bindKey("ctrl+=",()=>(e.zoom()<5&&e.zoom(.1),!1)),e.bindKey("ctrl+-",()=>(e.zoom()>.2&&e.zoom(-.1),!1)),e.bindKey("ctrl+0",()=>this.mode.can("canFitView")?(e.fitToContent({padding:40}),!1):!0),e.bindKey("ctrl+shift+h",()=>this.mode.can("canResetView")?(e.zoomTo(1),e.centerContent(),!1):!0)}bindGraphEvents(){this.graph.on("cell:selected",({cell:r})=>{var o,s,l,g;if(r.isNode()&&!this.mode.can("canSelectNode")){this.graph.unselect(r);return}if(r.isEdge()&&!this.mode.can("canSelectEdge")){this.graph.unselect(r);return}const i={id:r.id,type:r.isNode()?"node":"edge"};this.state.addSelectedCell(i),this.selectedCells.value=this.state.getSelectedCells(),(s=(o=this.callbacks).onSelectionChange)==null||s.call(o,this.state.getSelectedCells()),(g=(l=this.callbacks).onSelectionSync)==null||g.call(l,this.graph.getSelectedCells())}),this.graph.on("cell:unselected",({cell:r})=>{var o,s,l,g;this.mode.can("canSelectCanvas")&&(this.state.removeSelectedCell(r.id),this.graph.getSelectedCells().length||this.state.clearSelection(),this.selectedCells.value=this.state.getSelectedCells(),(s=(o=this.callbacks).onSelectionChange)==null||s.call(o,this.state.getSelectedCells()),(g=(l=this.callbacks).onSelectionSync)==null||g.call(l,this.graph.getSelectedCells()))}),this.graph.on("node:added",({node:r})=>{var o,s,l,g,i,a;this.state.markDirty(),(s=(o=this.callbacks).onCellAdded)==null||s.call(o,r.id),(g=(l=this.callbacks).onDirtyChange)==null||g.call(l,!0),(a=(i=this.callbacks).afterNodeAdd)==null||a.call(i,r,"api")}),this.graph.on("node:removed",o=>De(this,[o],function*({node:r}){var s,l,g,i,a,d;const t=r.getData();this.state.markDirty(),(l=(s=this.callbacks).onCellRemoved)==null||l.call(s,r.id),(i=(g=this.callbacks).onDirtyChange)==null||i.call(g,!0),(d=(a=this.callbacks).afterNodeRemove)==null||d.call(a,r.id,t,"api")})),this.graph.on("cell:added",({cell:r})=>{var o,s,l,g;r.isNode()||(this.state.markDirty(),(s=(o=this.callbacks).onCellAdded)==null||s.call(o,r.id),(g=(l=this.callbacks).onDirtyChange)==null||g.call(l,!0))}),this.graph.on("cell:removed",({cell:r})=>{var o,s,l,g,i,a;if(!r.isNode()&&(this.state.markDirty(),(s=(o=this.callbacks).onCellRemoved)==null||s.call(o,r.id),(g=(l=this.callbacks).onDirtyChange)==null||g.call(l,!0),r.isEdge())){const d=r.getData();r.getSourceCell(),r.getTargetCell(),(a=(i=this.callbacks).afterEdgeRemove)==null||a.call(i,r.id,d,"api")}}),this.graph.on("cell:changed",()=>{var r,o;this.state.markDirty(),(o=(r=this.callbacks).onDirtyChange)==null||o.call(r,!0)});const e=()=>{this._isConnecting=!1,this.resetAllNodes(),this.resetAllEdges(),this.graph.container.querySelectorAll(".x6-highlight-stroke").forEach(r=>r.remove())};this.graph.on("edge:connected",({edge:r})=>{var o,s,l;r.attr("line/strokeDasharray","",{silent:!0}),r.attr("line/style",{animation:""},{silent:!0});const g=this.graph.getPlugin("history");if((o=g==null?void 0:g.undoStack)!=null&&o.length){const i=g.undoStack[g.undoStack.length-1];(Array.isArray(i)?i:[i]).forEach(a=>{var d,t,p,c;((d=a==null?void 0:a.data)==null?void 0:d.id)===r.id&&(c=(p=(t=a==null?void 0:a.data)==null?void 0:t.previous)==null?void 0:p.attrs)!=null&&c.line&&(delete a.data.previous.attrs.line.strokeDasharray,a.data.previous.attrs.line.style&&(a.data.previous.attrs.line.style.animation=""))})}e(),(l=(s=this.callbacks).afterEdgeAdd)==null||l.call(s,r,"connect")}),this.graph.on("node:port:mousedown",()=>{this._isConnecting=!0,this.graph.getNodes().forEach(r=>{r.getPorts().forEach(o=>{r.setPortProp(o.id,["attrs","circle","style","visibility"],"visible")})})}),this.graph.on("edge:removed",()=>{this._isConnecting&&e()}),this.bindHighlightEvents(),this.bindContextMenuEvents()}_startOutEdgeFlow(e){this.edgeStateManager.startOutEdgeFlow(e)}_stopOutEdgeFlow(e){this.edgeStateManager.stopOutEdgeFlow(e)}_stopAllOutEdgeFlows(){this.edgeStateManager.stopAllOutEdgeFlows()}_cleanupHoverStates(e){const r=this.edgeStateManager.getHoveredEdge();if(r){const s=this.graph.getCellById(r);s!=null&&s.isEdge()&&s.getProp("_state")==="hover"&&this.setEdgeState(s,"default"),this.edgeStateManager.setHoveredEdge(null)}const o=this.nodeStateManager.getHoveredNode();if(o){const s=this.graph.getCellById(o);s!=null&&s.isNode()&&(this._stopOutEdgeFlow(s),s.getProp("_state")==="hover"&&this.setNodeState(s,"default")),this.nodeStateManager.setHoveredNode(null)}e==null||e()}setNodeState(e,r){this.nodeStateManager.setNodeState(e,r)}setEdgeState(e,r){this.edgeStateManager.setEdgeState(e,r)}setEdgeLabel(e,r,o){this.edgeStateManager.setEdgeLabel(e,r,o)}resetAllNodes(e){this.nodeStateManager.resetAllNodes(e)}resetAllEdges(e){this.edgeStateManager.resetAllEdges(e)}registerEdgeStateHandler(e,r,o=!0){this.edgeStateManager.registerStateHandler(e,r,o)}getEdgeStateHandler(e){return this.edgeStateManager.getStateHandler(e)}unregisterEdgeStateHandler(e){return this.edgeStateManager.unregisterStateHandler(e)}getRegisteredEdgeStates(){return this.edgeStateManager.getRegisteredStates()}registerNodeStateHandler(e,r,o=!0){this.nodeStateManager.registerStateHandler(e,r,o)}getNodeStateHandler(e){return this.nodeStateManager.getStateHandler(e)}unregisterNodeStateHandler(e){return this.nodeStateManager.unregisterStateHandler(e)}getRegisteredNodeStates(){return this.nodeStateManager.getRegisteredStates()}bindHighlightEvents(){const e=this.config.getConfig();this.graph.on("blank:click",()=>{this.mode.can("canSelectCanvas")&&(this._stopAllOutEdgeFlows(),this.resetAllNodes(),this.resetAllEdges(),r())}),this.graph.on("node:click",({node:i})=>{this.mode.can("canSelectNode")&&(this._stopOutEdgeFlow(i),this.resetAllNodes(i.id),this.resetAllEdges(),this.setNodeState(i,"selected"),setTimeout(()=>{i.toFront()},10))}),this.graph.on("edge:click",({edge:i})=>{this.mode.can("canSelectEdge")&&(this.resetAllEdges(i.id),this.resetAllNodes(),this.setEdgeState(i,"selected"))}),this.graph.on("cell:selected",({cell:i})=>{i.isNode()?this.setNodeState(i,"selected"):i.isEdge()&&this.setEdgeState(i,"selected")}),this.graph.on("cell:unselected",({cell:i})=>{if(this.mode.can("canSelectCanvas"))if(i.isNode()){this.setNodeState(i,"default");const a=i,d=this.nodeStateManager.getHoveredNode(),t=this.nodeStateManager.getDraggingNode();if(d===a.id&&t!==a.id){const p=this.tooltipEl;p&&p.style.display!=="none"&&setTimeout(()=>{this.nodeStateManager.getHoveredNode()!==a.id&&this.nodeStateManager.hideTooltip()},50)}}else i.isEdge()&&this.setEdgeState(i,"default")});const r=()=>{this.graph.getEdges().forEach(i=>{var a,d;if(((a=i==null?void 0:i.getProp("_state"))!=null?a:"default")==="dimmed"){const t=(d=i.getProp("_prevState"))!=null?d:"default";i.removeProp("_prevState",{silent:!0}),this.setEdgeState(i,t)}})};this.graph.on("edge:mouseenter",({e:i,edge:a})=>{var N,k,x,u;var d,t,p,c;if(!this.mode.can("canHoverEdge"))return;a.toFront();const f=this.edgeStateManager.getHoveredEdge();if(f&&f!==a.id){const y=this.graph.getCellById(f);y!=null&&y.isEdge()&&this.setEdgeState(y,"default"),r()}this.edgeStateManager.setHoveredEdge(a.id);const m=e.highlight.edgeHoverOverlap;if(m!=null&&m.enabled){const y=m.disableWhenEdgeCountExceeds;if(y&&y>0&&this.graph.getEdges().length>y){((N=a.getProp("_state"))!=null?N:"default")==="default"&&e.highlight.edgeHover.enabled&&this.setEdgeState(a,"hover");return}try{const F=a.getBBox();this.graph.getEdges().forEach(I=>{var P;if(I.id!==a.id){const O=I.getBBox();if(!(F.x+F.width<O.x||F.x>O.x+O.width||F.y+F.height<O.y||F.y>O.y+O.height)){const q=(P=I.getProp("_state"))!=null?P:"default";q!=="dimmed"&&(I.setProp("_prevState",q,{silent:!0}),this.setEdgeState(I,"dimmed"))}}});const G=a.getData();if((G==null?void 0:G.state)==="dimmed"){const I=(k=a.getProp("_prevState"))!=null?k:"default";a.removeProp("_prevState",{silent:!0}),this.setEdgeState(a,I)}}catch(F){console.warn("[FlowDesigner] edge overlap detection error:",F)}}if(((x=a.getProp("_state"))!=null?x:"default")==="default"&&e.highlight.edgeHover.enabled&&this.setEdgeState(a,"hover"),i){if(!this.mode.can("canEdgeTooltip"))return;const y=a.getLabels()[0],F=(u=(t=(d=y==null?void 0:y.attrs)==null?void 0:d.text)==null?void 0:t.text)!=null?u:"";if(F=="")return;const G=this.tooltipEl;if(!G)return;G.style.display="block",(c=(p=this.callbacks).onTooltipChange)==null||c.call(p,{visible:!0,type:"edge",node:null,edge:a,data:a.getData()}),requestAnimationFrame(()=>{var oe,fe,z;var I;const P=G.querySelector('[data-role="tooltip-content"]');P&&(P.innerHTML=F);const O=Math.max(1,this.graph.zoom()),q=this.config.getConfig().tooltip,ne=(oe=q==null?void 0:q.offsetX)!=null?oe:0,te=(fe=q==null?void 0:q.offsetY)!=null?fe:0;G.style.transform=`scale(${O})`,G.style.transformOrigin="center bottom";const K=this.graph.findViewByCell(a),xe=K==null?void 0:K.container.querySelector(".x6-edge-label");if(xe){const w=xe.getBoundingClientRect();G.style.left=w.left+w.width/2-G.clientWidth/2+ne+"px",G.style.top=w.top-50+te+"px"}else{const w=(z=(I=y.position)==null?void 0:I.distance)!=null?z:.5,ce=a.getPointAtRatio(w),ke=this.graph.localToPage(ce.x,ce.y);G.style.left=ke.x-G.clientWidth/2+ne+"px",G.style.top=ke.y-50+te+"px"}})}}),this.graph.on("edge:mouseleave",({e:i,edge:a})=>{var p;var d,t;this.edgeStateManager.getHoveredEdge()===a.id&&this.edgeStateManager.setHoveredEdge(null);try{r()}catch(c){console.warn("[FlowDesigner] edge opacity restore error:",c)}if(((p=a.getProp("_state"))!=null?p:"default")==="hover"&&this.setEdgeState(a,"default"),i){const c=this.tooltipEl;if(!c)return;c.style.left="0px",c.style.top="0px",c.style.display="none",(t=(d=this.callbacks).onTooltipChange)==null||t.call(d,{visible:!1,type:null,node:null,edge:null,data:null})}}),this.graph.on("node:mouseenter",({e:i,node:a})=>{var t;if(!this.mode.can("canHoverNode"))return;a.toFront();const d=this.nodeStateManager.getHoveredNode();if(d&&d!==a.id){const p=this.graph.getCellById(d);p!=null&&p.isNode()&&(this._stopOutEdgeFlow(p),this.setNodeState(p,"default"))}this.nodeStateManager.setHoveredNode(a.id),((t=a.getProp("_state"))!=null?t:"default")==="default"&&this.setNodeState(a,"hover"),this._startOutEdgeFlow(a),i&&this.nodeStateManager.showTooltip(a,i)}),this.graph.on("node:change:position",({node:i,options:a})=>{const d=this.tooltipEl;if(!d)return;const t=this.nodeStateManager.getHoveredNode()===i.id,p=this.graph.isSelected(i);if(!(!t&&!p)){if(p&&d.style.display==="none"){this.nodeStateManager.setHoveredNode(i.id),this.nodeStateManager.showTooltip(i);return}d.style.display!=="none"&&(this.nodeStateManager.setDraggingNode(i.id),this.nodeStateManager.updateTooltipPosition(i))}}),this.graph.on("node:moving",({node:i})=>{this.nodeStateManager.setDraggingNode(i.id)}),this.graph.on("node:moved",({node:i})=>{this.nodeStateManager.setDraggingNode(null),this.nodeStateManager.updateTooltipPosition(i)}),this.graph.on("node:mouseup",({node:i})=>{this.nodeStateManager.setDraggingNode(null),this.nodeStateManager.updateTooltipPosition(i)}),this.graph.on("node:mouseleave",({e:i,node:a})=>{var d;this.nodeStateManager.getHoveredNode()===a.id&&this.nodeStateManager.setHoveredNode(null),((d=a.getProp("_state"))!=null?d:"default")==="hover"&&this.setNodeState(a,"default"),this._stopOutEdgeFlow(a),i&&this.nodeStateManager.getDraggingNode()!==a.id&&this.nodeStateManager.hideTooltip()}),this.graph.on("blank:mousemove",()=>{const i=this.edgeStateManager.getHoveredEdge();if(i){const d=this.graph.getCellById(i);d!=null&&d.isEdge()&&d.getProp("_state")==="hover"&&this.setEdgeState(d,"default"),this.edgeStateManager.setHoveredEdge(null),r()}const a=this.nodeStateManager.getHoveredNode();if(a){const d=this.graph.getCellById(a);d!=null&&d.isNode()&&(this._stopOutEdgeFlow(d),d.getProp("_state")==="hover"&&this.setNodeState(d,"default")),this.nodeStateManager.setHoveredNode(null)}}),this.graph.on("node:port:mouseenter",({node:i,port:a})=>{e.highlight.portHover.enabled&&a&&this.nodeStateManager.setPortHoverStyle(i,a)}),this.graph.on("node:port:mouseleave",({node:i,port:a})=>{e.highlight.portHover.enabled&&a&&this.nodeStateManager.resetPortStyle(i,a)}),this.graph.on("scale",({sx:i,sy:a,ox:d,oy:t})=>{const p=this.tooltipEl;p&&p.style.display!=="none"&&this.nodeStateManager.hideTooltip()}),this.graph.on("translate",({tx:i,ty:a})=>{const d=this.tooltipEl;d&&d.style.display!=="none"&&this.nodeStateManager.hideTooltip()});const o=this.graph.container,s=i=>{var a;const d=this.edgeStateManager.getHoveredEdge(),t=this.nodeStateManager.getHoveredNode();if(!d&&!t)return;const p=i.target;p&&(a=p.closest)!=null&&a.call(p,".x6-cell")||this._cleanupHoverStates(r)};o.addEventListener("mousemove",s),this._containerMouseLeaveHandler=()=>{o.removeEventListener("mousemove",s)};const l=()=>{const i=this.tooltipEl;i&&i.style.display!=="none"&&this.nodeStateManager.hideTooltip()};let g=o.parentElement;for(;g;){const i=window.getComputedStyle(g).overflow;if(i==="auto"||i==="scroll"||g===document.body){g.addEventListener("scroll",l,{passive:!0});break}g=g.parentElement}this._containerScrollHandler=()=>{g&&g.removeEventListener("scroll",l)}}bindEdgeLabelEvents(){this.graph.on("cell:removed",({cell:e})=>{if(!e.isEdge())return;const r=this._edgeLabelRafMap.get(e.id);r!==void 0&&(cancelAnimationFrame(r),this._edgeLabelRafMap.delete(e.id));const o=this._edgeLabelUnmountMap.get(e.id);o&&(o(),this._edgeLabelUnmountMap.delete(e.id))})}bindContextMenuEvents(){this.graph.on("node:contextmenu",({e,node:r})=>{var o,s;e.preventDefault();const l=r.shape==="group-node",g=this.graph.getSelectedCells(),i=g.length>1&&g.includes(r);(s=(o=this.callbacks).onContextMenu)==null||s.call(o,{type:"node",action:"show",target:{node:r,isGroup:l,isMultiSelect:i,event:e}})}),this.graph.on("edge:contextmenu",({e,edge:r})=>{var o,s;e.preventDefault(),(s=(o=this.callbacks).onContextMenu)==null||s.call(o,{type:"edge",action:"show",target:{edge:r,event:e}})}),this.graph.on("blank:contextmenu",({e})=>{var r,o;e.preventDefault(),(o=(r=this.callbacks).onContextMenu)==null||o.call(r,{type:"canvas",action:"show",target:{event:e}})})}onSelectionChange(e){this.callbacks.onSelectionChange=e}onCellAdded(e){this.callbacks.onCellAdded=e}onCellRemoved(e){this.callbacks.onCellRemoved=e}onDirtyChange(e){this.callbacks.onDirtyChange=e}onModeChange(e){this.callbacks.onModeChange=e}onSave(e){this.callbacks.onSave=e}onError(e){this.callbacks.onError=e}onContextMenu(e){this.callbacks.onContextMenu=e}onSelectionSync(e){this.callbacks.onSelectionSync=e}onOpenSearch(e){this.callbacks.onOpenSearch=e}onTooltipChange(e){this.callbacks.onTooltipChange=e}onEdgeLabelRender(e){this.callbacks.onEdgeLabelRender=e}onAfterDataLoaded(e){this.callbacks.afterDataLoaded=e}getGraph(){return this.graph}getRootNodes(){return this.graph.getNodes().filter(e=>this.graph.getConnectedEdges(e,{incoming:!0}).length===0)}getMeta(){return this.state.getMeta()}setMeta(e){this.state.setMeta(e)}reset(e){this.state.reset(e),this.selectedCells.value=[]}isDirty(){return this.state.isDirtyState()}undo(){return this.history.undo()}redo(){return this.history.redo()}canUndo(){return this.history.canUndo()}canRedo(){return this.history.canRedo()}getMode(){return this.mode.getMode()}getCapabilities(){return this.mode.getCapabilities()}can(e){return this.mode.can(e)}getCanvasConfig(){return this.config.getConfig()}updateCanvasConfig(e){this.config.updateConfig(e)}applyConfig(){this.config.applyToGraph(this.graph,this.transform,this.mode.getCapabilities())}setMode(e){var r,o;this.mode.getMode()!==e&&(this.mode.setMode(e),this.updateGraphInteraction(),(o=(r=this.callbacks).onModeChange)==null||o.call(r,e))}hasPermission(e){return this.mode.can(e)}getCurrentPermissions(){return this.mode.getCapabilities()}getAllPermissions(){try{const e={},r=this.options.permissionConfig||{},o=new Set(["design","readonly","preview",...Object.keys(r)]);console.log("[FlowDesigner.getAllPermissions] 所有模式：",Array.from(o)),console.log("[FlowDesigner.getAllPermissions] 用户配置：",r);const s=this.mode.getMode();return o.forEach(l=>{try{this.mode.setMode(l);const g=this.mode.getCapabilities();console.log(`[FlowDesigner.getAllPermissions] 模式 ${l} 权限:`,g),g&&typeof g=="object"&&Object.keys(g).length>0?e[l]=g:console.warn(`[FlowDesigner.getAllPermissions] 模式 ${l} 获取失败`)}catch(g){console.error(`[FlowDesigner.getAllPermissions] 获取模式 ${l} 失败:`,g)}}),this.mode.setMode(s),console.log("[FlowDesigner.getAllPermissions] 最终返回：",e),e}catch(e){return console.error("[FlowDesigner.getAllPermissions] 错误：",e),{}}}getPermissionsByMode(e){const r=this.mode.getMode();this.mode.setMode(e);const o=this.mode.getCapabilities();return this.mode.setMode(r),o}getAvailableModes(){const e=this.options.permissionConfig||{},r=new Set(["design","readonly","preview",...Object.keys(e)]);return Array.from(r)}updateGraphInteraction(){const e=this.mode.getCapabilities();this.graph.options.interacting={nodeMovable:e.canDrag,edgeMovable:!1,edgeLabelMovable:!1,magnetConnectable:e.canConnect,arrowheadMovable:!1,vertexMovable:!1,vertexAddable:!1,vertexDeletable:!1},this.graph.disposePlugins("selection"),this.graph.use(new Jn({enabled:!0,multiple:e.canMultipleSelect,rubberband:e.canMultipleSelect,movable:e.canDrag,showNodeSelectionBox:!0,showEdgeSelectionBox:!1,multipleSelectionModifiers:["ctrl","meta"],filter:r=>r.isNode()?e.canSelectNode:r.isEdge()?e.canSelectEdge:!0})),this.config.applyToGraph(this.graph,this.transform,e)}updatePermissions(e){"permissionConfig"in e||"permissions"in e||"getPermissions"in e?this.mode.updatePermissionOptions(e):this.mode.updatePermissionOptions({permissionConfig:e}),this.updateGraphInteraction()}save(){var e,r,o,s;try{const l=this.graph.toJSON(),g={meta:this.state.getMeta(),nodes:l.cells.filter(i=>i.shape).map(i=>({id:i.id,shape:i.shape,x:i.position.x,y:i.position.y,width:i.size.width,height:i.size.height,data:i.data})),edges:l.cells.filter(i=>i.source).map(i=>({id:i.id,source:i.source,target:i.target,data:i.data})),viewport:{tx:this.graph.translate().tx,ty:this.graph.translate().ty,scale:this.graph.zoom()}};this.state.markClean(),(r=(e=this.callbacks).onSave)==null||r.call(e,g)}catch(l){(s=(o=this.callbacks).onError)==null||s.call(o,l)}}load(e){var r,o;try{const s=Date.now();this.graph.fromJSON(e);const l=Date.now();if(console.log("ttttttttttttttttt::",(l-s)/1e3),this.state.markClean(),this.isDirty.value=!1,this.callbacks.afterDataLoaded){const g=this.callbacks.afterDataLoaded;this.graph.once("render:done",()=>g(e))}}catch(s){(o=(r=this.callbacks).onError)==null||o.call(r,s)}}updateEdgeLabelText(e,r){this.edgeStateManager.updateEdgeLabelText(e,r)}removeCell(e,r="api"){return De(this,null,function*(){return this.enqueue(()=>De(this,null,function*(){try{if(e.isNode()){if(this.callbacks.beforeNodeRemove&&(yield this.callbacks.beforeNodeRemove(e,r))===!1)return console.log(`[FlowDesigner] 节点移除被拦截器阻止: ${e.id}`),!1}else if(e.isEdge()&&this.callbacks.beforeEdgeRemove&&(yield this.callbacks.beforeEdgeRemove(e,r))===!1)return console.log(`[FlowDesigner] 连线移除被拦截器阻止: ${e.id}`),!1;return this.graph.removeCell(e),!0}catch(o){return console.error("[FlowDesigner] 移除单元格失败:",o),!1}}))})}addCell(e,r="api"){return De(this,null,function*(){return this.enqueue(()=>De(this,null,function*(){try{return e.isNode()&&this.callbacks.beforeNodeAdd&&(yield this.callbacks.beforeNodeAdd(e,r))===!1?(console.log(`[FlowDesigner] 节点添加被拦截器阻止: ${e.id}`),!1):(this.graph.addCell(e),!0)}catch(o){return console.error("[FlowDesigner] 添加单元格失败:",o),!1}}))})}_removeCellsSafely(e,r="api"){return De(this,null,function*(){let o=0;for(const s of e)(yield this.removeCell(s,r))&&o++;return o})}export(e="json"){if(e==="json"){const r=this.graph.toJSON();return{meta:this.state.getMeta(),nodes:r.cells.filter(o=>o.shape).map(o=>{var a,d,t,p;var s,l,g,i;return{id:o.id,shape:o.shape,x:(a=(s=o.position)==null?void 0:s.x)!=null?a:0,y:(d=(l=o.position)==null?void 0:l.y)!=null?d:0,width:(t=(g=o.size)==null?void 0:g.width)!=null?t:120,height:(p=(i=o.size)==null?void 0:i.height)!=null?p:60,data:o.data}}),edges:r.cells.filter(o=>o.source).map(o=>({id:o.id,source:o.source,target:o.target,data:o.data})),viewport:{tx:this.graph.translate().tx,ty:this.graph.translate().ty,scale:this.graph.zoom()}}}else{if(e==="png")return this.graph.toPNG();if(e==="svg")return this.graph.toSVG()}}toggleMinimap(){return this._minimapCollapsed=!this._minimapCollapsed,this._minimapCollapsed}isMinimapCollapsed(){return this._minimapCollapsed}zoom(e){this.graph.zoom(e)}zoomTo(e){this.graph.zoomTo(e)}fitToContent(e=40){this.graph.centerContent(),this.graph.zoomToFit({padding:e,maxScale:1})}centerContent(){this.graph.centerContent()}resetView(){this.mode.can("canResetView")&&(this.graph.zoomTo(1),this.graph.centerContent())}dispose(){var e,r;(e=this._containerMouseLeaveHandler)==null||e.call(this),this._containerMouseLeaveHandler=null,(r=this._containerScrollHandler)==null||r.call(this),this._containerScrollHandler=null,this.nodeStateManager.dispose(),this.edgeStateManager.dispose(),this.customMiniMap&&(this.customMiniMap.destroy(),this.customMiniMap=null),this.graph.dispose(),this.callbacks={}}startDrag(e,r){return De(this,null,function*(){var o,s;try{if(!this.mode.can("canAddNode")){console.log("[FlowDesigner] 当前模式不允许添加节点");return}const l=this.graph.createNode(H({id:zn()},r));if(this.callbacks.beforeNodeAdd&&!(yield this.callbacks.beforeNodeAdd(l,"palette"))){console.log("[FlowDesigner] 节点拖拽被拦截器阻止");return}this.dnd.start(l,e),console.log("[FlowDesigner] 开始拖拽节点:",{shape:r.shape,nodeId:l.id})}catch(l){console.error("[FlowDesigner] 拖拽失败:",l),(s=(o=this.callbacks).onError)==null||s.call(o,l)}})}groupSelectedNodes(){var e,r,o,s,l,g,i,a;try{const d=this.graph.getSelectedCells().filter(c=>c.isNode());if(d.length<2)return console.warn("[FlowDesigner] 成组失败：至少需要选中 2 个节点"),(r=(e=this.callbacks).onError)==null||r.call(e,new Error("请至少选中 2 个节点")),!1;const t=d.filter(c=>c.shape!=="group-node"&&!c.getParent());if(t.length<2)return console.warn("[FlowDesigner] 成组失败：有效节点不足 2 个"),(s=(o=this.callbacks).onError)==null||s.call(o,new Error("请选中至少 2 个有效节点（不能是组节点或已在组内的节点）")),!1;const p=this._groupNodes(t);return p?(this.graph.select(p),console.log("[FlowDesigner] 成组成功:",{groupId:p.id,nodeCount:t.length}),!0):(console.error("[FlowDesigner] 成组失败：groupAPI.groupNodes 返回 null"),(g=(l=this.callbacks).onError)==null||g.call(l,new Error("成组失败")),!1)}catch(d){return console.error("[FlowDesigner] 成组异常:",d),(a=(i=this.callbacks).onError)==null||a.call(i,d),!1}}ungroupSelected(){var e,r,o,s,l,g,i,a;try{const d=this.graph.getSelectedCells();if(d.length!==1||!d[0].isNode())return console.warn("[FlowDesigner] 解组失败：请选中一个组节点"),(r=(e=this.callbacks).onError)==null||r.call(e,new Error("请选中一个组节点")),!1;const t=d[0];if(!this._isGroup(t))return console.warn("[FlowDesigner] 解组失败：选中的不是组节点"),(s=(o=this.callbacks).onError)==null||s.call(o,new Error("选中的不是组节点")),!1;const p=this._ungroupNodes(t);return p.length>0?(this.graph.select(p),console.log("[FlowDesigner] 解组成功:",{groupId:t.id,childCount:p.length}),!0):(console.warn("[FlowDesigner] 解组失败：组中没有子节点"),(g=(l=this.callbacks).onError)==null||g.call(l,new Error("组中没有子节点")),!1)}catch(d){return console.error("[FlowDesigner] 解组异常:",d),(a=(i=this.callbacks).onError)==null||a.call(i,d),!1}}canGroup(){return this.graph.getSelectedCells().filter(e=>e.isNode()).filter(e=>e.shape!=="group-node"&&!e.getParent()).length>=2}canUngroup(){const e=this.graph.getSelectedCells();return e.length!==1||!e[0].isNode()?!1:this._isGroup(e[0])}toggleGroupCollapse(e){var l,g,i;if(!this._isGroup(e))return console.warn("[FlowDesigner] 节点不是分组节点"),!1;const r=(l=e.getData())!=null?l:{},o=!r.collapsed;if(o){const a=e.size();e.setData(pe(H({},r),{collapsed:!0,originalWidth:a.width,originalHeight:a.height})),e.resize(200,80,{silent:!1})}else{const a=(g=r.originalWidth)!=null?g:300,d=(i=r.originalHeight)!=null?i:200;e.setData(pe(H({},r),{collapsed:!1})),e.resize(a,d,{silent:!1})}const s=e.getChildren();return s&&s.forEach(a=>{a.isNode()&&a.setVisible(!o)}),console.log("[FlowDesigner] 切换分组状态:",o?"收起":"展开"),!0}expandGroup(e){var g,i,a;if(!this._isGroup(e))return console.warn("[FlowDesigner] 节点不是分组节点"),!1;const r=(g=e.getData())!=null?g:{};if(!r.collapsed)return console.log("[FlowDesigner] 分组已经是展开状态"),!1;const o=(i=r.originalWidth)!=null?i:300,s=(a=r.originalHeight)!=null?a:200;e.setData(pe(H({},r),{collapsed:!1})),e.resize(o,s,{silent:!1});const l=e.getChildren();return l&&l.forEach(d=>{d.isNode()&&d.setVisible(!0)}),console.log("[FlowDesigner] 展开分组"),!0}collapseGroup(e){var i;if(!this._isGroup(e))return console.warn("[FlowDesigner] 节点不是分组节点"),!1;const r=(i=e.getData())!=null?i:{};if(r.collapsed)return console.log("[FlowDesigner] 分组已经是收起状态"),!1;const o=e.size();e.setData(pe(H({},r),{collapsed:!0,originalWidth:o.width,originalHeight:o.height})),e.resize(200,80,{silent:!1});const g=e.getChildren();return g&&g.forEach(a=>{a.isNode()&&a.setVisible(!1)}),console.log("[FlowDesigner] 收起分组"),!0}fitGroupSize(e){this._fitGroupSize(e)}_doPaste(){if(this.graph.isClipboardEmpty())return;const e=this.graph.paste({offset:{dx:20,dy:20}});e&&e.length>0&&(this.graph.cleanSelection(),this.graph.select(e))}paste(){this.mode.can("canPaste")&&this._doPaste()}handleContextMenuAction(e,r,o){var s,l;try{e==="node"?this.handleNodeContextAction(r,o):e==="edge"?this.handleEdgeContextAction(r,o):e==="canvas"&&this.handleCanvasContextAction(r)}catch(g){console.error("[FlowDesigner] 右键菜单操作失败:",g),(l=(s=this.callbacks).onError)==null||l.call(s,g)}}handleNodeContextAction(e,r){switch(e){case"copy":if(!this.mode.can("canCopy"))return;this.graph.copy([r]);break;case"paste":if(!this.mode.can("canPaste"))return;this.graph.isClipboardEmpty()||this._doPaste();break;case"toFront":if(!this.mode.can("canToFront"))return;r.toFront();break;case"toBack":if(!this.mode.can("canToBack"))return;r.toBack();break;case"delete":if(!this.mode.can("canDelete"))return;this.removeCell(r,"context-menu");break;case"group":if(!this.mode.can("canGroup"))return;this.groupSelectedNodes();break;case"ungroup":if(!this.mode.can("canGroup"))return;this.ungroupSelected();break;case"toggleCollapse":if(!this.mode.can("canGroup"))return;this.toggleGroupCollapse(r);break;default:console.warn(`[FlowDesigner] 未知的节点菜单操作: ${e}`)}}handleEdgeContextAction(e,r){switch(e){case"delete":if(!this.mode.can("canDelete"))return;this.removeCell(r,"context-menu");break;default:console.warn(`[FlowDesigner] 未知的连线菜单操作: ${e}`)}}handleCanvasContextAction(e){switch(e){case"paste":if(!this.mode.can("canPaste"))return;this.graph.isClipboardEmpty()||this._doPaste();break;case"selectAll":this.graph.select(this.graph.getCells());break;case"undo":this.undo();break;case"redo":this.redo();break;case"zoomIn":this.zoom(.1);break;case"zoomOut":this.zoom(-.1);break;case"fitView":this.fitToContent(40);break;case"resetView":if(!this.mode.can("canResetView"))break;this.resetView();break;case"clear":this._removeCellsSafely(this.graph.getCells(),"clear");break;default:console.warn(`[FlowDesigner] 未知的画布菜单操作: ${e}`)}}_isGroup(e){return e.shape==="group-node"}_groupNodes(e){if(!e||e.length<2)return null;const r=this.groupPadding;let o=this.graph.getCellsBBox(e);if(!o){let l=1/0,g=1/0,i=-1/0,a=-1/0;e.forEach(d=>{const t=d.position(),p=d.size();!t||!p||(l=Math.min(l,t.x),g=Math.min(g,t.y),i=Math.max(i,t.x+p.width),a=Math.max(a,t.y+p.height))}),l!==1/0&&(o={x:l,y:g,width:i-l,height:a-g})}if(!o)return null;const s=this.graph.addNode({id:zn(),shape:"group-node",x:o.x-r,y:o.y-r-30,width:Math.max(o.width+r*2,this.groupMinWidth),height:Math.max(o.height+r*2+30,this.groupMinHeight),zIndex:-1,data:{label:`分组 ${Date.now().toString().slice(-4)}`,collapsed:!1,isGroup:!0}});return e.forEach(l=>s.addChild(l)),s}_ungroupNodes(e){if(!e||!this._isGroup(e))return[];const r=e.getChildren();if(!r||r.length===0)return this.removeCell(e,"ungroup"),[];const o=[];return r.forEach(s=>{var l;if(s&&(l=s.isNode)!=null&&l.call(s)&&typeof s.removeParent=="function")try{s.removeParent(),o.push(s)}catch(g){console.error("[FlowDesigner] removeParent error:",g)}}),this.removeCell(e,"ungroup"),o}_fitGroupSize(e){if(!this._isGroup(e))return;const r=e.getChildren();if(!r||r.length===0)return;const o=this.graph.getCellsBBox(r);if(!o)return;const s=this.groupPadding;e.position(o.x-s,o.y-s-30),e.resize(Math.max(o.width+s*2,this.groupMinWidth),Math.max(o.height+s*2+30,this.groupMinHeight))}generateId(){return`designer-${Date.now()}-${Math.random().toString(36).substr(2,9)}`}toJSON(){return{id:this.id,state:this.state.toJSON(),mode:this.mode.toJSON(),history:this.history.toJSON()}}}function ro(){function b(e,r,o,s){const l=[];return o&&s.canGroup&&l.push({key:"group",label:"成组 (Ctrl+G)",icon:pr},{key:"div1",divider:!0}),r&&s.canGroup&&l.push({key:"ungroup",label:"解组 (Ctrl+Shift+G)",icon:gr},{key:"div1",divider:!0}),s.canCopy&&l.push({key:"copy",label:"复制节点 (Ctrl+C)",icon:ur}),s.canPaste&&l.push({key:"paste",label:"粘贴节点 (Ctrl+V)",icon:fr}),(s.canCopy||s.canPaste)&&l.push({key:"div2",divider:!0}),(s.canToFront||s.canToBack)&&(s.canToFront&&l.push({key:"toFront",label:"层级前置",icon:mr}),s.canToBack&&l.push({key:"toBack",label:"层级后置",icon:hr}),l.push({key:"div3",divider:!0})),s.canDelete&&l.push({key:"delete",label:"删除节点 (Delete)",icon:mt,danger:!0}),l}return{getNodeMenuItems:b}}function to(){function b(e,r){const o=[];return r.canDelete&&o.push({key:"delete",label:"删除连线 (Delete)",icon:ht,danger:!0}),o}return{getEdgeMenuItems:b}}function oo(){function b(e){const r=[];return e.canSelectAll&&e.canMultipleSelect&&r.push({key:"selectAll",label:"全选节点 (Ctrl+A)",icon:vt},{key:"div1",divider:!0}),(e.canUndo||e.canRedo)&&(e.canUndo&&r.push({key:"undo",label:"撤销 (Ctrl+Z)",icon:vr}),e.canRedo&&r.push({key:"redo",label:"重做 (Ctrl+Y)",icon:br}),r.push({key:"div2",divider:!0})),e.canZoom&&r.push({key:"zoomIn",label:"放大 (Ctrl+=)",icon:_r},{key:"zoomOut",label:"缩小 (Ctrl+-)",icon:xr}),e.canFitView&&r.push({key:"fitView",label:"适应窗口 (Ctrl+0)",icon:yr},{key:"resetView",label:"重置视图",icon:wr}),(e.canImport||e.canExport)&&(r.push({key:"div3",divider:!0}),e.canImport&&r.push({key:"import",label:"导入 JSON",icon:kr}),e.canExport&&r.push({key:"export",label:"导出 JSON",icon:Cr})),e.canDelete&&r.push({key:"div4",divider:!0},{key:"clear",label:"清空画布",icon:bt,danger:!0}),r}return{getCanvasMenuItems:b}}const so={key:1,class:"fdl-ctx-menu"},io=["onClick"],ao={class:"fdl-ctx-menu__label"},lo={key:1,class:"fdl-ctx-menu__divider"},co={key:1,class:"fdl-ctx-menu"},po=["onClick"],go={class:"fdl-ctx-menu__label"},uo={key:1,class:"fdl-ctx-menu__divider"},fo={key:1,class:"fdl-ctx-menu"},mo=["onClick"],ho={class:"fdl-ctx-menu__label"},vo={key:1,class:"fdl-ctx-menu__divider"},bo=j({__name:"index",emits:["action"],setup(b,{expose:e,emit:r}){const o=r,s=lr(),l=je({visible:!1,x:0,y:0,items:[],context:null}),g=E(null),i=ie(()=>!!s["node-menu"]),a=ie(()=>!!s["edge-menu"]),d=ie(()=>!!s["canvas-menu"]),t=Ve("capabilities"),p=Ve("designer"),c=Ve("graph"),{getNodeMenuItems:f}=ro(),{getEdgeMenuItems:m}=to(),{getCanvasMenuItems:N}=oo();function k(P,O,q,ne){if(t.value.showContextMenu){if(i.value)l.items=[];else{const te=f(O,q,ne,t.value);if(te.length===0)return;l.items=te}l.x=P.clientX,l.y=P.clientY,l.context={type:"node",target:O,nodeCtx:{isGroup:q,isMultiSelect:ne}},l.visible=!0}}function x(P,O){if(t.value.showContextMenu){if(a.value)l.items=[];else{const q=m(O,t.value);if(q.length===0)return;l.items=q}l.x=P.clientX,l.y=P.clientY,l.context={type:"edge",target:O},l.visible=!0}}function u(P){if(t.value.showContextMenu){if(d.value)l.items=[];else{const O=N(t.value);if(O.length===0)return;l.items=O}l.x=P.clientX,l.y=P.clientY,l.context={type:"canvas"},l.visible=!0}}function y(){l.visible=!1}function F(P){l.context&&(o("action",{type:l.context.type,action:P,target:l.context.target}),y())}function G(){if(!g.value)return;const P=g.value.getBoundingClientRect(),{innerWidth:O,innerHeight:q}=window;let ne=l.x,te=l.y;P.right>O&&(ne=O-P.width-10),P.bottom>q&&(te=q-P.height-10),ne<0&&(ne=10),te<0&&(te=10),(ne!==l.x||te!==l.y)&&(g.value.style.left=ne+"px",g.value.style.top=te+"px")}Ue(()=>l.visible,P=>{P&&setTimeout(()=>G(),0)});function I(P){if(!l.visible)return;const O=P.target;g.value&&!g.value.contains(O)&&y()}return Ge(()=>{document.addEventListener("click",I)}),nn(()=>{document.removeEventListener("click",I)}),e({showNodeMenu:k,showEdgeMenu:x,showCanvasMenu:u}),(P,O)=>{var Le,Te,ze,Re,W,C,V,X;var q,ne,te,K,xe,oe,fe,z,w,ce,ke;return h(),Ne(Yr,{to:"body"},[l.visible?(h(),_("div",{key:0,ref_key:"menuContainerRef",ref:g,class:"fdl-ctx-menu-wrap",style:ye({left:l.x+"px",top:l.y+"px"}),onClick:O[0]||(O[0]=We(()=>{},["stop"]))},[((q=l.context)==null?void 0:q.type)==="node"?(h(),_(U,{key:0},[i.value?Me(P.$slots,"node-menu",{key:0,node:l.context.target,isGroup:(Le=(ne=l.context.nodeCtx)==null?void 0:ne.isGroup)!=null?Le:!1,isMultiSelect:(Te=(te=l.context.nodeCtx)==null?void 0:te.isMultiSelect)!=null?Te:!1,capabilities:D(t),designer:(ze=(K=D(p))==null?void 0:K.value)!=null?ze:null,graph:(Re=(xe=D(c))==null?void 0:xe.value)!=null?Re:null,onSelect:F,onClose:y},void 0):(h(),_("div",so,[(h(!0),_(U,null,ee(l.items,(R,Y)=>(h(),_("div",{key:R.key||`divider-${Y}`,class:we(["fdl-ctx-menu__item",{"fdl-ctx-menu__item--danger":R.danger,"fdl-ctx-menu__item--divider":R.divider,"fdl-ctx-menu__item--disabled":R.disabled}]),onClick:de=>!R.divider&&!R.disabled&&F(R.key)},[R.divider?(h(),_("div",lo)):(h(),_(U,{key:0},[R.icon?(h(),Ne(Mn(R.icon),{key:0,class:"fdl-ctx-menu__icon"})):B("",!0),n("span",ao,L(R.label),1)],64))],10,io))),128))]))],64)):((oe=l.context)==null?void 0:oe.type)==="edge"?(h(),_(U,{key:1},[a.value?Me(P.$slots,"edge-menu",{key:0,edge:l.context.target,capabilities:D(t),designer:(W=(fe=D(p))==null?void 0:fe.value)!=null?W:null,graph:(C=(z=D(c))==null?void 0:z.value)!=null?C:null,onSelect:F,onClose:y},void 0):(h(),_("div",co,[(h(!0),_(U,null,ee(l.items,(R,Y)=>(h(),_("div",{key:R.key||`divider-${Y}`,class:we(["fdl-ctx-menu__item",{"fdl-ctx-menu__item--danger":R.danger,"fdl-ctx-menu__item--divider":R.divider,"fdl-ctx-menu__item--disabled":R.disabled}]),onClick:de=>!R.divider&&!R.disabled&&F(R.key)},[R.divider?(h(),_("div",uo)):(h(),_(U,{key:0},[R.icon?(h(),Ne(Mn(R.icon),{key:0,class:"fdl-ctx-menu__icon"})):B("",!0),n("span",go,L(R.label),1)],64))],10,po))),128))]))],64)):((w=l.context)==null?void 0:w.type)==="canvas"?(h(),_(U,{key:2},[d.value?Me(P.$slots,"canvas-menu",{key:0,capabilities:D(t),designer:(V=(ce=D(p))==null?void 0:ce.value)!=null?V:null,graph:(X=(ke=D(c))==null?void 0:ke.value)!=null?X:null,onSelect:F,onClose:y},void 0):(h(),_("div",fo,[(h(!0),_(U,null,ee(l.items,(R,Y)=>(h(),_("div",{key:R.key||`divider-${Y}`,class:we(["fdl-ctx-menu__item",{"fdl-ctx-menu__item--danger":R.danger,"fdl-ctx-menu__item--divider":R.divider,"fdl-ctx-menu__item--disabled":R.disabled}]),onClick:de=>!R.divider&&!R.disabled&&F(R.key)},[R.divider?(h(),_("div",vo)):(h(),_(U,{key:0},[R.icon?(h(),Ne(Mn(R.icon),{key:0,class:"fdl-ctx-menu__icon"})):B("",!0),n("span",ho,L(R.label),1)],64))],10,mo))),128))]))],64)):B("",!0)],4)):B("",!0)])}}}),_o=un(bo,[["__scopeId","data-v-7cfb4437"]]);function Nr(b){const e=E(""),r=E(0),o=new Map,s=E(null);function l(k,x){const u=k.getData(),y=k.getProp("label")||k.label,F=(u==null?void 0:u.label)||"",G=k.id;return y.toLowerCase().includes(x)||F.toLowerCase().includes(x)||G.toLowerCase().includes(x)}const g=ie(()=>{const k=D(b);if(!k||!e.value.trim())return[];const x=e.value.toLowerCase(),u=k.getNodes(),y=s.value||l;return u.filter(F=>y(F,x))}),i=ie(()=>g.value.length);Ue(g,k=>{r.value=0,k.length>0?a(0):p()});function a(k){const x=D(b);if(!x||g.value.length===0)return;const u=g.value[k];u&&(p(),o.has(u.id)||o.set(u.id,{stroke:u.attr("body/stroke")||"#8c9bb5",strokeWidth:u.attr("body/strokeWidth")||1.5}),u.attr("body/stroke","#1890ff"),u.attr("body/strokeWidth",3),x.select(u),x.centerCell(u,{padding:100,animation:{duration:300,easing:"ease-in-out"}}),x.zoom()<.8&&x.zoomTo(1,{animation:{duration:300}}))}function d(){g.value.length!==0&&(r.value=(r.value+1)%g.value.length,a(r.value))}function t(){g.value.length!==0&&(r.value=r.value===0?g.value.length-1:r.value-1,a(r.value))}function p(){const k=D(b);k&&(o.forEach((x,u)=>{const y=k.getCellById(u);y&&(y.attr("body/stroke",x.stroke),y.attr("body/strokeWidth",x.strokeWidth))}),o.clear(),k.unselect(k.getSelectedCells()))}function c(){e.value="",r.value=0,p()}function f(k){!D(b)||k<0||k>=g.value.length||(r.value=k,a(k))}function m(k){var x;const u=k.getProp("label");if(u)return String(u);const y=k.getData();if(y!=null&&y.label)return y.label;const F=k.getAttrs();return(x=F==null?void 0:F.text)!=null&&x.text?String(F.text.text):"未命名节点"}function N(k){s.value=k}return{keyword:e,results:g,currentIndex:r,total:i,next:d,prev:t,reset:c,clearHighlight:p,selectByIndex:f,getNodeLabel:m,setFilter:N}}const xo={key:0,class:"search-box"},yo={class:"search-box__count"},wo=j({__name:"SearchBox",props:{visible:{type:Boolean},graph:{}},emits:["update:visible"],setup(b,{emit:e}){const r=b,o=e,s=Kr(r,"graph"),{keyword:l,currentIndex:g,total:i,next:a,prev:d,reset:t}=Nr(s),p=ie(()=>i.value===0?"0/0":`${g.value+1}/${i.value}`),c=E(null);Ue(()=>r.visible,x=>{x?Ln(()=>{var u;(u=c.value)==null||u.focus()}):t()});const f=x=>{x.key==="Enter"&&x.shiftKey&&(x.preventDefault(),N())};Ue(()=>r.visible,x=>{x?window.addEventListener("keydown",f):window.removeEventListener("keydown",f)});function m(){a()}function N(){d()}function k(){o("update:visible",!1)}return(x,u)=>{const y=Fe("a-input"),F=Fe("a-button"),G=Fe("a-tooltip");return h(),Ne(Jr,{name:"search-fade"},{default:M(()=>[b.visible?(h(),_("div",xo,[v(y,{ref_key:"inputRef",ref:c,value:D(l),"onUpdate:value":u[0]||(u[0]=I=>Xr(l)?l.value=I:null),placeholder:"搜索节点名称或ID",class:"search-box__input",size:"small","allow-clear":"",onKeyup:[gn(m,["enter"]),gn(k,["esc"])]},{prefix:M(()=>[v(D(gt))]),_:1},8,["value"]),n("span",yo,L(p.value),1),v(G,{title:"上一个 (Shift+Enter)"},{default:M(()=>[v(F,{class:"search-box__btn",size:"small",disabled:D(i)===0,onClick:N},{default:M(()=>[v(D(ut))]),_:1},8,["disabled"])]),_:1}),v(G,{title:"下一个 (Enter)"},{default:M(()=>[v(F,{class:"search-box__btn",size:"small",disabled:D(i)===0,onClick:m},{default:M(()=>[v(D(cr))]),_:1},8,["disabled"])]),_:1}),v(G,{title:"关闭 (Esc)"},{default:M(()=>[v(F,{class:"search-box__btn",size:"small",onClick:k},{default:M(()=>[v(D(ft))]),_:1})]),_:1})])):B("",!0)]),_:1})}}}),ko=un(wo,[["__scopeId","data-v-56a76481"]]),Co={class:"fdl-root"},So={class:"fdl-body"},Eo={class:"fdl-canvas"},nr="node-",No=j({__name:"FlowDesignerLayout",props:{mode:{default:"design"},permissionConfig:{},permissions:{},getPermissions:{},modeCapabilities:{},canvasConfig:{},shortcuts:{},beforeNodeAdd:{},afterNodeAdd:{},beforeNodeRemove:{},afterNodeRemove:{},beforeEdgeAdd:{},afterEdgeAdd:{},beforeEdgeRemove:{},afterEdgeRemove:{},beforeGraphInit:{},afterDataLoaded:{}},emits:["ready","mode-change","save","error","selection-change"],setup(b,{expose:e,emit:r}){const o=b,s=r,l=E(),g=E(),i=E(),a=E(null),d=E(100),t=E(!1),p=E(!1),c=E(!1),f=E(!1),m=E(o.mode),N=E(!1),k=E(!1),x=E(!1);let u=null;const y=lr(),F=ie(()=>!!y.toolbar),G=ie(()=>!!y.palette),I=ie(()=>!!y.properties),P=ie(()=>!!y["search-box"]),O=ie(()=>!!y.tooltip),q=ie(()=>!!y["node-tooltip"]),ne=ie(()=>!!y["edge-tooltip"]),te=ie(()=>!!y["edge-label"]),K=E({visible:!1,type:null,node:null,edge:null,data:null}),xe=E(null),oe=ie(()=>{var $;var S;return($=(S=xe.value)==null?void 0:S.getGraph())!=null?$:null}),{keyword:fe,results:z,currentIndex:w,total:ce,next:ke,prev:Le,reset:Te,selectByIndex:ze,getNodeLabel:Re,setFilter:W}=Nr(oe),C=ie(()=>({keyword:fe,results:z,currentIndex:w,total:ce,next:ke,prev:Le,reset:Te,close:()=>{me.value=!1},selectByIndex:ze,getNodeLabel:Re,setFilter:W})),V=E(0),X={design:{showToolbar:!0,showNodePalette:!0,showPropertiesPanel:!0,showContextMenu:!0,canDrag:!0,canConnect:!0,canDelete:!0,canCopy:!0,canPaste:!0,canGroup:!0,canImport:!0,canExport:!0,canUndo:!0,canRedo:!0,canZoom:!0,canPan:!0,canFitView:!0,canResetView:!0,canMultipleSelect:!0,canSelectAll:!0,canToFront:!0,canToBack:!0,canAlign:!0,canAlignLeft:!0,canAlignRight:!0,canAlignTop:!0,canAlignBottom:!0,canHoverNode:!0,canHoverEdge:!0,canSelectNode:!0,canSelectEdge:!0,showMinimap:!0},readonly:{showToolbar:!0,showNodePalette:!1,showPropertiesPanel:!0,showContextMenu:!0,canDrag:!1,canConnect:!1,canDelete:!1,canCopy:!1,canPaste:!1,canGroup:!1,canImport:!1,canExport:!0,canUndo:!1,canRedo:!1,canZoom:!0,canPan:!0,canFitView:!0,canResetView:!0,canMultipleSelect:!0,canSelectAll:!0,canToFront:!1,canToBack:!1,canAlign:!1,canAlignLeft:!1,canAlignRight:!1,canAlignTop:!1,canAlignBottom:!1,canHoverNode:!0,canHoverEdge:!0,canSelectNode:!0,canSelectEdge:!0,showMinimap:!0},preview:{showToolbar:!1,showNodePalette:!1,showPropertiesPanel:!1,showContextMenu:!1,canDrag:!1,canConnect:!1,canDelete:!1,canCopy:!1,canPaste:!1,canGroup:!1,canImport:!1,canExport:!0,canUndo:!1,canRedo:!1,canZoom:!0,canPan:!0,canFitView:!1,canResetView:!1,canMultipleSelect:!1,canSelectAll:!1,canToFront:!1,canToBack:!1,canAlign:!1,canAlignLeft:!1,canAlignRight:!1,canAlignTop:!1,canAlignBottom:!1,canHoverNode:!1,canHoverEdge:!1,canSelectNode:!1,canSelectEdge:!1,showMinimap:!1}},R=ie(()=>{var S;if(xe.value)return m.value,V.value,xe.value.mode.getCapabilities();const $=X[m.value]||X.design;if(o.permissions)return H(H({},$),o.permissions);const T=(S=o.modeCapabilities)==null?void 0:S[m.value];return T?H(H({},$),T):$});He("designer",ie(()=>u!=null?u:null)),He("graph",ie(()=>{var S;return(S=u==null?void 0:u.getGraph())!=null?S:null})),He("designerMode",m),He("capabilities",R);const Y=E([]),de=E(null),Ce=E(!0),me=E(!1),se=ie(()=>{var $;var S;return!(!R.value.showMinimap||!(($=(S=de.value)==null?void 0:S.minimap.enabled)==null||$))});function J(){xe.value&&(Ce.value=xe.value.toggleMinimap())}const re=ie(()=>{var S;if(K.value.type==="node"&&q.value||K.value.type==="edge"&&ne.value||O.value)return{background:"transparent",padding:"0",boxShadow:"none",borderRadius:"0",color:"inherit",fontSize:"inherit",fontWeight:"inherit",whiteSpace:"normal"};const $=(S=de.value)==null?void 0:S.tooltip;return $?{fontSize:`${$.fontSize}px`,fontWeight:String($.fontWeight),color:$.color,background:$.backgroundColor,padding:$.padding,borderRadius:`${$.borderRadius}px`,boxShadow:$.boxShadow,zIndex:$.zIndex,maxWidth:$.maxWidth?`${$.maxWidth}px`:void 0,whiteSpace:$.whiteSpace}:{}}),qe=ie(()=>{var S;const $=(S=de.value)==null?void 0:S.tooltip;return!$||!$.arrowEnabled?{display:"none"}:{borderTopWidth:`${$.arrowSize}px`,borderTopColor:$.arrowColor,borderLeftWidth:`${$.arrowSize/2}px`,borderRightWidth:`${$.arrowSize/2}px`}}),Ye=ie(()=>{var S,$;return(($=(S=de.value)==null?void 0:S.tooltip)==null?void 0:$.arrowEnabled)!==!1});He("selectedCells",Y),He("canvasConfig",de),He("updateCanvasConfig",S=>{u==null||u.updateCanvasConfig(S),u&&(de.value=u.getCanvasConfig())}),He("flowDesigner",xe);const rn=jr();rn!=null&&rn.appContext&&Et(rn.appContext);const ln=E("");Hn(()=>{const S=new Map;for(const[T,Z]of Object.entries(y))if(T.startsWith(nr)&&typeof Z=="function"){const he=T.slice(nr.length);he&&S.set(he,Z)}const $=Array.from(S.keys()).sort().join(",");$!==ln.value&&(ln.value=$,Nt(S))});function fn(){return{beforeNodeAdd:(S,$)=>De(this,null,function*(){if(!o.beforeNodeAdd)return!0;const T={node:S,source:$,position:S.getPosition()};return(yield o.beforeNodeAdd(T))!==!1}),beforeNodeRemove:(S,$)=>De(this,null,function*(){if(!o.beforeNodeRemove)return!0;const T={node:S,nodeId:S.id,source:$};return(yield o.beforeNodeRemove(T))!==!1}),beforeEdgeAdd:({sourceCell:S,targetCell:$,sourceMagnet:T,targetMagnet:Z})=>{if(!o.beforeEdgeAdd)return!0;const he={sourceCell:S,targetCell:$,sourceMagnet:T,targetMagnet:Z};return o.beforeEdgeAdd(he)!==!1},beforeEdgeRemove:(S,$)=>De(this,null,function*(){if(!o.beforeEdgeRemove)return!0;const T=S.getSourceCell(),Z=S.getTargetCell(),he={edge:S,edgeId:S.id,sourceNodeId:(T==null?void 0:T.id)||"",targetNodeId:(Z==null?void 0:Z.id)||"",source:$};return(yield o.beforeEdgeRemove(he))!==!1}),afterNodeAdd:(S,$)=>{o.afterNodeAdd&&o.afterNodeAdd({node:S,nodeId:S.id,source:$,success:!0,timestamp:Date.now()})},afterNodeRemove:(S,$,T)=>{o.afterNodeRemove&&o.afterNodeRemove({nodeId:S,nodeData:$,source:T,success:!0,timestamp:Date.now()})},afterEdgeAdd:(S,$)=>{if(!o.afterEdgeAdd)return;const T=S.getSourceNode(),Z=S.getTargetNode();T&&Z&&o.afterEdgeAdd({edge:S,edgeId:S.id,sourceNodeId:T.id,targetNodeId:Z.id,source:$,success:!0,timestamp:Date.now()})},afterEdgeRemove:(S,$,T)=>{var Z,he;if(!o.afterEdgeRemove)return;const $e=((Z=$==null?void 0:$.source)==null?void 0:Z.cell)||"",be=((he=$==null?void 0:$.target)==null?void 0:he.cell)||"";o.afterEdgeRemove({edgeId:S,edgeData:$,sourceNodeId:$e,targetNodeId:be,source:T,success:!0,timestamp:Date.now()})}}}function mn(){return{container:l.value,minimapContainer:g.value,tooltipContainer:i.value,mode:m.value,initialConfig:o.canvasConfig,permissionConfig:o.permissionConfig,permissions:o.permissions,getPermissions:o.getPermissions,shortcuts:o.shortcuts,callbacks:fn()}}function hn(){return new Promise(S=>De(this,null,function*(){setTimeout(()=>De(this,null,function*(){const $={options:mn(),register:an,Graph:_e,Shape:Qr};if(o.beforeGraphInit)try{yield o.beforeGraphInit($)}catch(Z){console.error("[FlowDesignerLayout] beforeGraphInit hook error:",Z),s("error",Z)}const T=new no($.options);S(T)}),100)}))}Ge(()=>De(this,null,function*(){if(!l.value)return;u=yield hn();const S=u.getGraph();xe.value=u,de.value=u.getCanvasConfig(),Hn(()=>{u&&(Y.value=[...u.selectedCells.value])}),S.on("scale",({sx:T})=>{d.value=Math.round(T*100)});const $=()=>{k.value=S.canUndo(),x.value=S.canRedo()};S.on("history:change",$),S.on("history:undo",$),S.on("history:redo",$),$(),S.on("cell:selected",Be),S.on("cell:unselected",Be),S.on("clipboard:changed",()=>{p.value=!S.isClipboardEmpty()}),u.onSave(T=>{s("save",T)}),u.onError(T=>{s("error",T)}),u.onSelectionSync(T=>{s("selection-change",T)}),u.onContextMenu(T=>{var Z,he,$e;if(T.action!=="show")return;const{type:be,target:ve}=T;be==="node"?(Z=a.value)==null||Z.showNodeMenu(ve.event,ve.node,ve.isGroup,ve.isMultiSelect):be==="edge"?(he=a.value)==null||he.showEdgeMenu(ve.event,ve.edge):be==="canvas"&&(($e=a.value)==null||$e.showCanvasMenu(ve.event))}),u.onOpenSearch(()=>{me.value=!0}),u.onTooltipChange(T=>{K.value=T}),u.onAfterDataLoaded(T=>{o.afterDataLoaded&&o.afterDataLoaded(T)}),te.value&&u.onEdgeLabelRender((T,Z,he)=>{const $e=j({setup(){return()=>{var Ae;var Oe;return qr("div",{style:"display:inline-flex;align-items:center;"},(Ae=(Oe=y["edge-label"])==null?void 0:Oe.call(y,{edge:Z,data:he}))!=null?Ae:[])}}}),be=ar($e),ve=document.createElement("div");return ve.style.cssText="display:inline-flex;align-items:center;white-space:nowrap;transform:translate(-50%,-50%);",T.appendChild(ve),be.mount(ve),()=>{be.unmount(),T.innerHTML=""}}),requestAnimationFrame(()=>{s("ready",u,S)}),Ue(()=>o.mode,T=>{T&&T!==m.value&&Vn(T)}),Ue(()=>o.permissionConfig,T=>{u&&(u.updatePermissions({permissionConfig:T}),V.value++)},{deep:!0}),Ue(()=>o.permissions,T=>{u&&(u.updatePermissions({permissions:T}),V.value++)},{deep:!0})})),nn(()=>{u==null||u.dispose(),window.removeEventListener("keydown",cn),window.removeEventListener("keydown",dn,{capture:!0})});function dn(S){const $=S.target,T=$.tagName==="INPUT"||$.tagName==="TEXTAREA"||$.isContentEditable;S.code==="Space"&&!T&&S.preventDefault()}window.addEventListener("keydown",dn,{capture:!0});function cn(S){if((S.ctrlKey||S.metaKey)&&S.key==="f"){if(S.preventDefault(),!R.value.showSearch)return;me.value=!0}}window.addEventListener("keydown",cn);function Be(){if(!u)return;const S=u.getGraph().getSelectedCells().filter($=>$.isNode());t.value=S.length>0,c.value=u.canGroup(),f.value=u.canUngroup()}function vn(){u&&R.value.canUndo&&u.undo()}function bn(){u&&R.value.canRedo&&u.redo()}function _n(){u==null||u.zoom(.1)}function xn(){u==null||u.zoom(-.1)}function yn(S){u==null||u.zoomTo(S/100)}function wn(){u==null||u.fitToContent(40)}function kn(){R.value.canResetView&&(u==null||u.resetView())}function Cn(){if(!u)return;if(!R.value.canCopy){ue.warning("当前模式不允许复制操作");return}const S=u.getGraph(),$=S.getSelectedCells();$.length&&(S.copy($),p.value=!0)}function Sn(){if(u){if(!R.value.canPaste){ue.warning("当前模式不允许粘贴操作");return}u.paste()}}function En(){if(u){if(!R.value.canToFront){ue.warning("当前模式不允许层级前置操作");return}u.getGraph().getSelectedCells().forEach(S=>S.toFront())}}function Nn(){if(u){if(!R.value.canToBack){ue.warning("当前模式不允许层级后置操作");return}u.getGraph().getSelectedCells().forEach(S=>S.toBack())}}function Xe(S,$,T){const Z=u.getGraph(),he=new Map;S.forEach(be=>{Z.getConnectedEdges(be).forEach(ve=>{he.has(ve)||(he.set(ve,ve.getRouter()),ve.setRouter("normal"))})});const $e=[];S.forEach(be=>{const{prop:ve,from:Oe,to:Ae}=$(be);if(Oe!==Ae){const Tn=be.animate({[ve]:[Oe,Ae]},{duration:300,easing:"ease-in-out",fill:"forwards"});$e.push(new Promise(Pe=>{Tn.onfinish=()=>Pe()}))}else T(be,Ae)}),$e.length>0?Promise.all($e).then(()=>{he.forEach((be,ve)=>{ve.setRouter(be!=null?be:{name:u.getCanvasConfig().connection.router})})}):he.forEach((be,ve)=>{ve.setRouter(be!=null?be:{name:u.getCanvasConfig().connection.router})})}function Dn(){if(!u)return;if(!R.value.canAlignLeft){ue.warning("当前模式不允许左对齐操作");return}const S=u.getGraph().getSelectedCells().filter(T=>T.isNode());if(S.length<2)return;const $=Math.min(...S.map(T=>T.position().x));Xe(S,T=>({prop:"position/x",from:T.position().x,to:$}),(T,Z)=>T.position(Z,T.position().y))}function Tr(){if(!u)return;if(!R.value.canAlignRight){ue.warning("当前模式不允许右对齐操作");return}const S=u.getGraph().getSelectedCells().filter(T=>T.isNode());if(S.length<2)return;const $=Math.max(...S.map(T=>T.position().x+T.size().width));Xe(S,T=>({prop:"position/x",from:T.position().x,to:$-T.size().width}),(T,Z)=>T.position(Z,T.position().y))}function Fr(){if(!u)return;if(!R.value.canAlignTop){ue.warning("当前模式不允许上对齐操作");return}const S=u.getGraph().getSelectedCells().filter(T=>T.isNode());if(S.length<2)return;const $=Math.min(...S.map(T=>T.position().y));Xe(S,T=>({prop:"position/y",from:T.position().y,to:$}),(T,Z)=>T.position(T.position().x,Z))}function $r(){if(!u)return;if(!R.value.canAlignBottom){ue.warning("当前模式不允许下对齐操作");return}const S=u.getGraph().getSelectedCells().filter(T=>T.isNode());if(S.length<2)return;const $=Math.max(...S.map(T=>T.position().y+T.size().height));Xe(S,T=>({prop:"position/y",from:T.position().y,to:$-T.size().height}),(T,Z)=>T.position(T.position().x,Z))}function Mr(){if(u){if(!R.value.canGroup){ue.warning("当前模式不允许分组操作");return}u.groupSelectedNodes(),Be()}}function Lr(){if(u){if(!R.value.canGroup){ue.warning("当前模式不允许解组操作");return}u.ungroupSelected(),Be()}}function Rr(){if(!u)return;if(!R.value.canExport){ue.warning("当前模式不允许导出操作");return}const S=u.graph.toJSON();if(!S)return;const $=new Blob([JSON.stringify(S,null,2)],{type:"application/json"}),T=URL.createObjectURL($),Z=document.createElement("a");Z.href=T,Z.download="flow.json",document.body.appendChild(Z),Z.click(),document.body.removeChild(Z),URL.revokeObjectURL(T)}function zr(S){if(!u)return;if(!R.value.canImport){ue.warning("当前模式不允许导入操作");return}const $=new FileReader;$.onload=T=>{var Z;try{const he=JSON.parse((Z=T.target)==null?void 0:Z.result);u.load(he)}catch(he){s("error",new Error("导入失败：文件格式错误"))}},$.readAsText(S)}function Vn(S){u&&(u.setMode(S),m.value=S,s("mode-change",S))}function Ar(){N.value=!0}function Pr(S,$){var T;u&&($.shape==="common-vue-node"&&(T=$.data)!=null&&T.nodeType&&($["node-type"]=$.data.nodeType),u.startDrag(S,$))}function Ir({type:S,action:$,target:T}){u&&(u.handleContextMenuAction(S,$,T),($==="group"||$==="ungroup")&&Be())}const Gr=ie(()=>({designer:u,graph:u==null?void 0:u.getGraph(),currentMode:m.value,capabilities:R.value,zoomPercent:d.value,hasSelection:t.value,canPaste:p.value,canGroup:c.value,canUngroup:f.value,canUndo:k.value,canRedo:x.value,onUndo:vn,onRedo:bn,onZoomIn:_n,onZoomOut:xn,onZoomTo:yn,onFitView:wn,onResetView:kn,onCopy:Cn,onPaste:Sn,onToFront:En,onToBack:Nn,onAlignLeft:Dn,onAlignRight:Tr,onAlignTop:Fr,onAlignBottom:$r,onGroup:Mr,onUngroup:Lr,onExport:Rr,onImport:zr,onModeChange:Vn,onOpenSettings:Ar})),Br=ie(()=>{var S;return{designer:u,graph:(S=u==null?void 0:u.getGraph())!=null?S:null,capabilities:R.value,currentMode:m.value,onStartDrag:Pr}}),Or=ie(()=>{var S;return{capabilities:R.value,designer:u,graph:(S=u==null?void 0:u.getGraph())!=null?S:null,currentMode:m.value,selectedCells:Y.value}});function Hr(S){const $=u==null?void 0:u.getGraph();if(!$)return;const T=$.getCellById(S);T!=null&&T.isNode()&&$.centerCell(T)}return e({designer:xe,currentMode:m,capabilities:R,centerNode:Hr}),(S,$)=>{var ve,Oe,Ae,Tn;var T,Z,he,$e;const be=Fe("a-tooltip");return h(),_("div",Co,[F.value?(h(),_("div",{key:0,class:"fdl-header",style:ye({display:R.value.showToolbar?"":"none"})},[Me(S.$slots,"toolbar",tn(on(Gr.value)),void 0)],4)):B("",!0),n("div",So,[G.value?(h(),_("div",{key:0,class:"fdl-palette",style:ye({display:R.value.showNodePalette?"":"none"})},[Me(S.$slots,"palette",tn(on(Br.value)),void 0)],4)):B("",!0),n("div",Eo,[n("div",{ref_key:"containerRef",ref:l,class:"fdl-canvas__inner"},null,512),se.value?(h(),_("div",{key:0,class:we(["fdl-canvas__minimap-wrapper",{"fdl-canvas__minimap-wrapper--collapsed":Ce.value}])},[n("div",{ref_key:"minimapRef",ref:g,class:"fdl-canvas__minimap"},null,512),v(be,{title:Ce.value?"展开小地图":"收起小地图",placement:"left"},{default:M(()=>[n("div",{class:"fdl-minimap__toggle",onClick:J},[Ce.value?(h(),Ne(D(ct),{key:0,class:"fdl-minimap__toggle-icon"})):(h(),Ne(D(pt),{key:1,class:"fdl-minimap__toggle-icon"}))])]),_:1},8,["title"])],2)):B("",!0),v(_o,{ref_key:"contextMenuRef",ref:a,onAction:Ir},Zr({_:2},[D(y)["node-menu"]?{name:"node-menu",fn:M(Pe=>[Me(S.$slots,"node-menu",tn(on(Pe)),void 0,!0)]),key:"0"}:void 0,D(y)["edge-menu"]?{name:"edge-menu",fn:M(Pe=>[Me(S.$slots,"edge-menu",tn(on(Pe)),void 0,!0)]),key:"1"}:void 0,D(y)["canvas-menu"]?{name:"canvas-menu",fn:M(Pe=>[Me(S.$slots,"canvas-menu",tn(on(Pe)),void 0,!0)]),key:"2"}:void 0]),1536),n("div",{ref_key:"tooltipRef",ref:i,class:we(["fdl-tooltip",{"fdl-tooltip--custom":K.value.type==="node"&&q.value||K.value.type==="edge"&&ne.value||O.value}]),style:ye(re.value)},[K.value.type==="node"&&q.value?Me(S.$slots,"node-tooltip",{key:0,node:K.value.node,data:K.value.data,designer:D(u),graph:(ve=(T=D(u))==null?void 0:T.getGraph())!=null?ve:null},void 0):K.value.type==="edge"&&ne.value?Me(S.$slots,"edge-tooltip",{key:1,edge:K.value.edge,data:K.value.data,designer:D(u),graph:(Oe=(Z=D(u))==null?void 0:Z.getGraph())!=null?Oe:null},void 0):O.value?Me(S.$slots,"tooltip",{key:2,type:K.value.type,node:K.value.node,edge:K.value.edge,data:K.value.data},void 0):(h(),_(U,{key:3},[$[1]||($[1]=n("span",{"data-role":"tooltip-content"},null,-1)),Ye.value?(h(),_("div",{key:0,class:"fdl-tooltip__arrow",style:ye(qe.value)},null,4)):B("",!0)],64))],6),me.value&&R.value.showSearch?(h(),_(U,{key:1},[P.value?Me(S.$slots,"search-box",{key:0,keyword:C.value.keyword,results:C.value.results,currentIndex:C.value.currentIndex,total:C.value.total,next:C.value.next,prev:C.value.prev,reset:C.value.reset,close:C.value.close,selectByIndex:C.value.selectByIndex,getNodeLabel:C.value.getNodeLabel,setFilter:C.value.setFilter,designer:D(u),graph:(Ae=(he=D(u))==null?void 0:he.getGraph())!=null?Ae:null},void 0):(h(),Ne(ko,{key:1,visible:me.value,"onUpdate:visible":$[0]||($[0]=Pe=>me.value=Pe),graph:(Tn=($e=D(u))==null?void 0:$e.getGraph())!=null?Tn:null},null,8,["visible","graph"]))],64)):B("",!0)]),I.value?(h(),_("div",{key:1,class:"fdl-properties",style:ye({display:R.value.showPropertiesPanel?"":"none"})},[Me(S.$slots,"properties",tn(on(Or.value)),void 0)],4)):B("",!0)])])}}}),le=un(No,[["__scopeId","data-v-35ade53c"]]);(function(){try{if(typeof document<"u"){var b=document.createElement("style");b.appendChild(document.createTextNode(".group-node[data-v-b8230772]{position:relative;border:2px dashed #1677ff;border-radius:8px;background:#1677ff0d;box-sizing:border-box;pointer-events:all;transition:all .3s ease}.group-node--collapsed[data-v-b8230772]{background:#1677ff14}.group-header[data-v-b8230772]{position:absolute;top:0;left:0;right:0;height:30px;display:flex;align-items:center;gap:6px;padding:0 12px;background:#1677ff1a;border-bottom:1px dashed rgba(22,119,255,.3);border-radius:6px 6px 0 0}.group-icon[data-v-b8230772]{font-size:14px;color:#1677ff}.group-title[data-v-b8230772]{flex:1;font-size:13px;font-weight:600;color:#1677ff;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.group-count[data-v-b8230772]{font-size:11px;color:#1677ff;opacity:.7}.group-toggle[data-v-b8230772]{display:flex;align-items:center;justify-content:center;width:20px;height:20px;border-radius:4px;background:#fffc;cursor:pointer;transition:all .2s}.group-toggle[data-v-b8230772]:hover{background:#fff;box-shadow:0 2px 4px #0000001a;transform:scale(1.05)}.group-toggle[data-v-b8230772]:active{transform:scale(.95)}.toggle-icon[data-v-b8230772]{font-size:10px;color:#1677ff;transition:transform .2s}.group-collapsed-info[data-v-b8230772]{position:absolute;top:50%;left:50%;transform:translate(-50%,-5%);display:flex;align-items:center;justify-content:center;padding:8px 16px;background:#1677ff1a;border-radius:4px;border:1px dashed rgba(22,119,255,.3)}.collapsed-text[data-v-b8230772]{font-size:12px;color:#1677ff;font-weight:500}.group-node[data-v-b8230772]:hover{background:#1677ff1f;border-color:#1890ff}.group-node--collapsed[data-v-b8230772]:hover{background:#1677ff26}.cvn-wrapper[data-v-c7510dc8]{display:block;width:fit-content;height:fit-content;overflow:visible;box-sizing:border-box}.cvn-slot-mount[data-v-c7510dc8]{display:block;width:fit-content;height:fit-content}.cvn-fallback[data-v-c7510dc8]{display:flex;flex-direction:column;align-items:center;justify-content:center;width:160px;height:60px;border:1.5px dashed #d9d9d9;border-radius:6px;background:#fafafa;gap:4px;-webkit-user-select:none;user-select:none}.cvn-fallback__type[data-v-c7510dc8]{font-size:13px;font-weight:600;color:#595959}.cvn-fallback__hint[data-v-c7510dc8]{font-size:11px;color:#bfbfbf}.fdl-ctx-menu-wrap[data-v-7cfb4437]{position:fixed;z-index:9999}.fdl-ctx-menu[data-v-7cfb4437]{background:#fff;border:1px solid #e8e8e8;border-radius:6px;box-shadow:0 4px 16px #0000001f;padding:4px 0;min-width:160px;max-width:280px;-webkit-user-select:none;user-select:none}.fdl-ctx-menu__item[data-v-7cfb4437]{padding:7px 16px;font-size:13px;color:#262626;cursor:pointer;transition:background .15s;display:flex;align-items:center;gap:8px}.fdl-ctx-menu__item[data-v-7cfb4437]:hover{background:#f5f5f5}.fdl-ctx-menu__item--danger[data-v-7cfb4437]{color:#f5222d}.fdl-ctx-menu__item--disabled[data-v-7cfb4437]{color:#bfbfbf;cursor:not-allowed}.fdl-ctx-menu__item--disabled[data-v-7cfb4437]:hover{background:transparent}.fdl-ctx-menu__item--divider[data-v-7cfb4437]{padding:0;cursor:default}.fdl-ctx-menu__item--divider[data-v-7cfb4437]:hover{background:transparent}.fdl-ctx-menu__icon[data-v-7cfb4437]{font-size:14px;flex-shrink:0}.fdl-ctx-menu__label[data-v-7cfb4437]{flex:1;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.fdl-ctx-menu__divider[data-v-7cfb4437]{height:1px;background:#f0f0f0;margin:4px 0}.search-box[data-v-56a76481]{position:absolute;top:3px;right:6px;z-index:1000;display:flex;align-items:center;gap:6px;padding:6px 10px;background:#fff;border-radius:6px;box-shadow:0 2px 8px #00000026;min-width:280px}.search-box__input[data-v-56a76481]{flex:1;min-width:150px}.search-box__count[data-v-56a76481]{font-size:12px;color:#8c9bb5;white-space:nowrap;-webkit-user-select:none;user-select:none}.search-box__btn[data-v-56a76481]{flex-shrink:0}.search-fade-enter-active[data-v-56a76481],.search-fade-leave-active[data-v-56a76481]{transition:all .2s ease}.search-fade-enter-from[data-v-56a76481],.search-fade-leave-to[data-v-56a76481]{opacity:0;transform:translateY(-10px)}@media (max-width: 768px){.search-box[data-v-56a76481]{top:60px;right:10px;min-width:240px}.search-box__input[data-v-56a76481]{min-width:120px}}.fdl-root[data-v-35ade53c]{width:100%;height:100%;display:flex;flex-direction:column;overflow:hidden}.fdl-header[data-v-35ade53c]{flex-shrink:0}.fdl-body[data-v-35ade53c]{flex:1;display:flex;overflow:hidden;min-height:0}.fdl-palette[data-v-35ade53c]{flex-shrink:0;border-right:1px solid #f0f0f0;background:#fff;height:100%;min-height:0}.fdl-properties[data-v-35ade53c]{flex-shrink:0;border-left:1px solid #f0f0f0;background:#fff}.fdl-canvas[data-v-35ade53c]{flex:1;position:relative;overflow:hidden;min-width:0;min-height:0}.fdl-canvas__inner[data-v-35ade53c]{width:100%;height:100%;max-height:100%;overflow:hidden}.fdl-canvas__minimap-wrapper[data-v-35ade53c]{position:absolute;right:20px;bottom:20px;border:1px solid #e8e8e8;border-radius:6px;background:#fff;box-shadow:0 2px 8px #00000026;transition:all .3s cubic-bezier(.4,0,.2,1);overflow:hidden}.fdl-canvas__minimap-wrapper--collapsed[data-v-35ade53c]{width:40px!important;height:40px!important;border-radius:50%;overflow:visible}.fdl-canvas__minimap-wrapper--collapsed .fdl-canvas__minimap[data-v-35ade53c],.fdl-canvas__minimap-wrapper--collapsed[data-v-35ade53c] .x6-minimap-viewport,.fdl-canvas__minimap-wrapper--collapsed[data-v-35ade53c] .x6-minimap-container{display:none}.fdl-canvas__minimap[data-v-35ade53c]{width:100%;height:100%}.fdl-minimap__toggle[data-v-35ade53c]{position:absolute;top:4px;right:4px;width:24px;height:24px;display:flex;align-items:center;justify-content:center;background:#ffffffe6;border-radius:4px;cursor:pointer;z-index:10;transition:all .2s;box-shadow:0 1px 4px #0000001a}.fdl-minimap__toggle[data-v-35ade53c]:hover{background:#fff;box-shadow:0 2px 6px #00000026;transform:scale(1.05)}.fdl-minimap__toggle[data-v-35ade53c]:active{transform:scale(.95)}.fdl-minimap__toggle-icon[data-v-35ade53c]{font-size:12px;color:#595959;transition:color .2s}.fdl-minimap__toggle:hover .fdl-minimap__toggle-icon[data-v-35ade53c]{color:#1677ff}.fdl-canvas__minimap-wrapper--collapsed .fdl-minimap__toggle[data-v-35ade53c]{position:absolute;top:50%;left:50%;right:auto;transform:translate(-50%,-50%);background:#fff;box-shadow:0 2px 8px #00000026}.fdl-canvas__minimap-wrapper--collapsed .fdl-minimap__toggle[data-v-35ade53c]:hover{transform:translate(-50%,-50%) scale(1.1)}.fdl-canvas__minimap-wrapper--collapsed .fdl-minimap__toggle[data-v-35ade53c]:active{transform:translate(-50%,-50%) scale(.95)}.fdl-tooltip[data-v-35ade53c]{position:fixed;top:0;left:0;display:none;pointer-events:none;font-size:13px;font-weight:700;color:#fff;background:#000000bf;border-radius:4px;padding:6px 12px;white-space:nowrap;box-shadow:0 2px 8px #00000040;z-index:9999}.fdl-tooltip__arrow[data-v-35ade53c]{position:absolute;left:calc(50% - 5px);top:100%;width:0;height:0;border-left:5px solid transparent;border-right:5px solid transparent;border-top:8px solid rgba(0,0,0,.75)}.fdl-tooltip--custom[data-v-35ade53c]{background:transparent;padding:0;color:inherit;font-size:inherit;font-weight:inherit;white-space:normal;box-shadow:none}@keyframes fd-flow{to{stroke-dashoffset:-12}}.settings-sidebar[data-v-23c346b8]{width:220px;height:100%;border-right:1px solid #f0f0f0;background:#fafafa;overflow-y:auto}.settings-sidebar[data-v-23c346b8]::-webkit-scrollbar{width:6px}.settings-sidebar[data-v-23c346b8]::-webkit-scrollbar-track{background:transparent}.settings-sidebar[data-v-23c346b8]::-webkit-scrollbar-thumb{border-radius:3px}.settings-menu[data-v-23c346b8]{background:transparent;border:none;height:100%}.settings-menu[data-v-23c346b8] .ant-menu-item-group-title{padding:12px 16px 8px;font-size:12px;color:#8c8c8c;text-transform:uppercase;letter-spacing:.5px;font-weight:600}.settings-menu[data-v-23c346b8] .ant-menu-item{margin:0;height:40px;line-height:40px;border-radius:0;padding-left:24px!important}.settings-menu[data-v-23c346b8] .ant-menu-item:hover{background:#f5f5f5}.settings-menu[data-v-23c346b8] .ant-menu-item-selected{background:#e6f7ff;border-right:3px solid #1677ff;font-weight:500}.settings-menu[data-v-23c346b8] .ant-menu-item-selected:after{display:none}.settings-menu[data-v-23c346b8] .ant-menu-item .anticon{font-size:14px;margin-right:8px}.settings-content[data-v-6702629f]{flex:1;height:100%;background:#fff;overflow:hidden;display:flex;flex-direction:column}.settings-content-inner[data-v-6702629f]{flex:1;display:flex;flex-direction:column;overflow:hidden}.settings-content-header[data-v-6702629f]{display:flex;align-items:center;gap:12px;padding:20px 24px;border-bottom:1px solid #f0f0f0;background:#fff;flex-shrink:0}.header-icon[data-v-6702629f]{font-size:20px;color:#1677ff}.header-title[data-v-6702629f]{font-size:16px;font-weight:600;color:#262626}.settings-content-body[data-v-6702629f]{flex:1;padding:24px;overflow-y:auto}.settings-content-body[data-v-6702629f]::-webkit-scrollbar{width:6px}.settings-content-body[data-v-6702629f]::-webkit-scrollbar-track{background:transparent}.settings-content-body[data-v-6702629f]::-webkit-scrollbar-thumb{border-radius:3px}.fade-enter-active[data-v-6702629f],.fade-leave-active[data-v-6702629f]{transition:opacity .15s ease-in-out}.fade-enter-from[data-v-6702629f],.fade-leave-to[data-v-6702629f]{opacity:0}.canvas-settings-container[data-v-64f11497]{display:flex;flex-direction:column;height:600px}.canvas-settings-layout[data-v-64f11497]{display:flex;flex:1;overflow:hidden}.settings-footer[data-v-64f11497]{display:flex;justify-content:space-between;align-items:center;padding:12px 24px;border-top:1px solid #f0f0f0;background:#fafafa;flex-shrink:0}.settings-footer-left[data-v-64f11497],.settings-footer-right[data-v-64f11497]{display:flex;gap:8px}.settings-panel[data-v-d17d7afb],.settings-panel[data-v-b79dfea7],.settings-panel[data-v-d275cc0b],.settings-panel[data-v-7b0c9eb3],.settings-panel[data-v-409cdb75],.settings-panel[data-v-6b1a735f],.settings-panel[data-v-56a3beef],.settings-panel[data-v-a2e2b5b6],.settings-panel[data-v-64822234]{padding:16px 8px}.settings-panel[data-v-a9fa4c66]{padding:16px 8px;max-height:500px;overflow-y:auto}.settings-panel[data-v-a9fa4c66]::-webkit-scrollbar{width:6px}.settings-panel[data-v-a9fa4c66]::-webkit-scrollbar-track{background:transparent}.settings-panel[data-v-a9fa4c66]::-webkit-scrollbar-thumb{border-radius:3px}")),document.head.appendChild(b)}}catch(e){console.error("vite-plugin-css-injected-by-js",e)}})();const Do=j({__name:"demo1",setup(b){function e(r){const o=r.getGraph(),s=o.addNode({id:"node1",shape:"rect",x:100,y:100,width:120,height:60,label:"节点 1",attrs:{body:{fill:"#5F95FF",stroke:"#2563EB",strokeWidth:2},label:{fill:"#ffffff",fontSize:14,fontWeight:"bold"}}}),l=o.addNode({id:"node2",shape:"circle",x:300,y:100,width:80,height:80,label:"节点 2",attrs:{body:{fill:"#10B981",stroke:"#059669",strokeWidth:2},label:{fill:"#ffffff",fontSize:14,fontWeight:"bold"}}}),g=o.addNode({id:"node3",shape:"ellipse",x:500,y:100,width:100,height:60,label:"节点 3",attrs:{body:{fill:"#F59E0B",stroke:"#D97706",strokeWidth:2},label:{fill:"#ffffff",fontSize:14,fontWeight:"bold"}}}),i=o.addNode({id:"node4",shape:"polygon",x:300,y:250,width:100,height:100,label:"节点 4",attrs:{body:{fill:"#EF4444",stroke:"#DC2626",strokeWidth:2,refPoints:"0,10 10,0 20,10 10,20"},label:{fill:"#ffffff",fontSize:14,fontWeight:"bold"}}});o.addEdge({id:"edge1",shape:"flow-edge",source:s,target:l,labels:["连线 1"]}),o.addEdge({id:"edge2",shape:"flow-edge",source:l,target:g,labels:["连线 2"]}),o.addEdge({id:"edge3",shape:"flow-edge",source:l,target:i,labels:["连线 3"]}),o.addEdge({id:"edge4",shape:"flow-edge",source:i,target:g,labels:["连线 4"]}),o.centerContent(),console.log("[Demo1] Graph 实例已获取，已添加 4 个节点和 4 条连线")}return(r,o)=>(h(),Ne(D(le),{onReady:e}))}}),To=`<template>\r
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
`,Fo={class:"demo-ready"},$o={class:"demo-ready__log"},Mo={class:"demo-ready__log-content"},Lo={class:"demo-ready__canvas"},Ro=j({__name:"demo-ready",setup(b){const e=E([]);function r(l){const g=new Date().toLocaleTimeString();e.value.push(`[${g}] ${l}`)}function o(){e.value=[]}function s(l,g){r("✅ ready 事件触发"),r(`📦 designer 实例ID: ${l.id}`),r(`📊 graph 节点数: ${g.getNodes().length}`),r(`🔗 graph 连线数: ${g.getEdges().length}`);const i=g.addNode({shape:"rect",x:100,y:100,width:100,height:60,label:"节点1",attrs:{body:{fill:"#5F95FF",stroke:"#2563EB",strokeWidth:2},label:{fill:"#ffffff",fontSize:14,fontWeight:"bold"}}}),a=g.addNode({shape:"rect",x:300,y:100,width:100,height:60,label:"节点2",attrs:{body:{fill:"#10B981",stroke:"#059669",strokeWidth:2},label:{fill:"#ffffff",fontSize:14,fontWeight:"bold"}}});g.addEdge({shape:"flow-edge",source:i,target:a,labels:["连接"]}),r("✨ 已添加 2 个节点和 1 条连线"),g.centerContent(),r("🎯 已居中显示内容"),r(`🔧 designer.getMode(): ${l.getMode()}`),r(`🔐 designer.can('canDrag'): ${l.can("canDrag")}`)}return(l,g)=>(h(),_("div",Fo,[n("div",$o,[n("div",{class:"demo-ready__log-header"},[g[0]||(g[0]=n("h4",null,"事件日志",-1)),n("button",{class:"demo-ready__clear-btn",onClick:o,title:"清除日志"}," 清除 ")]),n("div",Mo,[(h(!0),_(U,null,ee(e.value,(i,a)=>(h(),_("div",{key:a,class:"demo-ready__log-item"},L(i),1))),128))])]),n("div",Lo,[v(D(le),{onReady:s})])]))}}),zo=ae(Ro,[["__scopeId","data-v-bc80d804"]]),Ao=`<template>\r
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
`,Po={class:"demo-mode-change"},Io={class:"demo-mode-change__log"},Go={class:"demo-mode-change__log-content"},Bo={class:"demo-mode-change__canvas"},Oo={class:"demo-mode-change__controls"},Ho=["onClick"],Wo=j({__name:"demo-mode-change",setup(b){const e=E([]),r=E("design"),o=E(),s=[{value:"design",label:"✏️ 设计模式"},{value:"readonly",label:"👁 只读模式"},{value:"preview",label:"📺 预览模式"}];function l(t){const p=new Date().toLocaleTimeString();e.value.push(`[${p}] ${t}`)}function g(){e.value=[]}function i(t,p){o.value=t,l("✅ 画布初始化完成"),l(`🔧 当前模式: ${t.getMode()}`),p.addNode({shape:"rect",x:150,y:100,width:100,height:60,label:"节点1",attrs:{body:{fill:"#5F95FF",stroke:"#2563EB"},label:{fill:"#fff"}}}),p.centerContent()}function a(t){if(l("🔄 @mode-change 事件触发"),l(`📌 新模式: ${t}`),o.value){const p=o.value.getCapabilities();l(`🔐 canDrag: ${p.canDrag}`),l(`🔐 canDelete: ${p.canDelete}`),l(`🔐 canConnect: ${p.canConnect}`)}}function d(t){l(`👆 切换到 ${t} 模式`),r.value=t}return(t,p)=>(h(),_("div",Po,[n("div",Io,[n("div",{class:"demo-mode-change__log-header"},[p[0]||(p[0]=n("h4",null,"事件日志",-1)),n("button",{class:"demo-mode-change__clear-btn",onClick:g,title:"清除日志"}," 清除 ")]),n("div",Go,[(h(!0),_(U,null,ee(e.value,(c,f)=>(h(),_("div",{key:f,class:"demo-mode-change__log-item"},L(c),1))),128))])]),n("div",Bo,[n("div",Oo,[(h(),_(U,null,ee(s,c=>n("button",{key:c.value,class:we(["demo-mode-change__btn",{"demo-mode-change__btn--active":r.value===c.value}]),onClick:f=>d(c.value)},L(c.label),11,Ho)),64))]),v(D(le),{mode:r.value,onModeChange:a,onReady:i},null,8,["mode"])])]))}}),Vo=ae(Wo,[["__scopeId","data-v-fd5094da"]]),Uo=`\uFEFF<template>\r
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
`,Zo={class:"demo-selection"},jo={class:"demo-selection__log"},qo={class:"demo-selection__log-content"},Yo={class:"demo-selection__canvas"},Xo=j({__name:"demo-selection-change",setup(b){const e=E([]);function r(g){const i=new Date().toLocaleTimeString();e.value.push(`[${i}] ${g}`)}function o(){e.value=[]}function s(g,i){r("✅ 画布初始化完成");const a=i.addNode({id:"node1",shape:"rect",x:100,y:80,width:100,height:60,label:"节点1",attrs:{body:{fill:"#5F95FF",stroke:"#2563EB"},label:{fill:"#fff"}}}),d=i.addNode({id:"node2",shape:"rect",x:250,y:80,width:100,height:60,label:"节点2",attrs:{body:{fill:"#10B981",stroke:"#059669"},label:{fill:"#fff"}}}),t=i.addNode({id:"node3",shape:"rect",x:100,y:180,width:100,height:60,label:"节点3",attrs:{body:{fill:"#F59E0B",stroke:"#D97706"},label:{fill:"#fff"}}}),p=i.addNode({id:"node4",shape:"rect",x:250,y:180,width:100,height:60,label:"节点4",attrs:{body:{fill:"#EF4444",stroke:"#DC2626"},label:{fill:"#fff"}}});i.addEdge({shape:"flow-edge",source:a,target:d,labels:["连线1"]}),i.addEdge({shape:"flow-edge",source:t,target:p,labels:["连线2"]}),r("📦 已添加 4 个节点和 2 条连线"),i.centerContent()}function l(g){r("🔄 @selection-change 事件触发"),r(`📊 选中数量: ${g.length}`),g.length===0?r("❌ 已清空选区"):g.forEach((i,a)=>{const d=i.isNode()?"节点":"连线";r(`  ${a+1}. ${d} ID: ${i.id}`)})}return(g,i)=>(h(),_("div",Zo,[n("div",jo,[n("div",{class:"demo-selection__log-header"},[i[0]||(i[0]=n("h4",null,"事件日志",-1)),n("button",{class:"demo-selection__clear-btn",onClick:o,title:"清除日志"}," 清除 ")]),n("div",qo,[(h(!0),_(U,null,ee(e.value,(a,d)=>(h(),_("div",{key:d,class:"demo-selection__log-item"},L(a),1))),128))])]),n("div",Yo,[i[1]||(i[1]=n("div",{class:"demo-selection__tip"}," 💡 点击或框选节点，观察选区变化事件 ",-1)),v(D(le),{onSelectionChange:l,onReady:s})])]))}}),Jo=ae(Xo,[["__scopeId","data-v-3a019ede"]]),Ko=`\uFEFF<template>\r
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
`,Qo={class:"demo-node-lifecycle"},es={class:"demo-node-lifecycle__log"},ns={class:"demo-node-lifecycle__log-content"},rs={class:"demo-node-lifecycle__canvas"},ts={class:"demo-node-lifecycle__controls"},os={class:"demo-node-lifecycle__checkbox"},ss={class:"demo-node-lifecycle__checkbox"},is=j({__name:"demo-node-lifecycle",setup(b){const e=E([]),r=E(),o=E(),s=E(!0),l=E(!0);let g=0;function i(k){const x=new Date().toLocaleTimeString();e.value.push(`[${x}] ${k}`)}function a(){e.value=[]}function d(k,x){console.log("designerdesignerdesignerdesignerdesigner::",x,k),r.value=x,o.value=k,i("✅ 画布初始化完成"),i('💡 点击"添加节点"或"删除选中节点"观察事件')}function t(k){return i("🔵 beforeNodeAdd 触发"),i(`  节点ID: ${k.node.id}`),i(`  来源: ${k.source}`),i(`  允许添加: ${s.value}`),s.value?(i("✅ 允许添加节点"),!0):(i("❌ 节点添加被阻止"),!1)}function p(k){i("🟢 afterNodeAdd 触发"),i(`  节点ID: ${k.nodeId}`),i("  节点已成功添加到画布")}function c(k){return i("🟡 beforeNodeRemove 触发"),i(`  节点ID: ${k.nodeId}`),i(`  来源: ${k.source}`),i(`  允许删除: ${l.value}`),l.value?(i("✅ 允许删除节点"),!0):(i("❌ 节点删除被阻止"),!1)}function f(k){i("🔴 afterNodeRemove 触发"),i(`  节点ID: ${k.nodeId}`),i("  节点已从画布中移除")}function m(){if(!r.value||!o.value)return;g++;const k=[{fill:"#5F95FF",stroke:"#2563EB"},{fill:"#10B981",stroke:"#059669"},{fill:"#F59E0B",stroke:"#D97706"},{fill:"#EF4444",stroke:"#DC2626"}],x=k[g%k.length],u=100+g%3*120,y=100+Math.floor(g/3)*100;i('👆 用户点击"添加节点"');const F=r.value.createNode({shape:"rect",x:u,y,width:100,height:60,label:`节点${g}`,attrs:{body:{fill:x.fill,stroke:x.stroke},label:{fill:"#fff"}}});o.value.addCell(F)}function N(){if(!o.value)return;const x=r.value.getSelectedCells().filter(u=>u.isNode());if(x.length===0){i("⚠️ 未选中任何节点");return}i('👆 用户点击"删除选中节点"'),x.forEach(u=>{o.value.removeCell(u)})}return(k,x)=>(h(),_("div",Qo,[n("div",es,[n("div",{class:"demo-node-lifecycle__log-header"},[x[2]||(x[2]=n("h4",null,"事件日志",-1)),n("button",{class:"demo-node-lifecycle__clear-btn",onClick:a,title:"清除日志"}," 清除 ")]),n("div",ns,[(h(!0),_(U,null,ee(e.value,(u,y)=>(h(),_("div",{key:y,class:"demo-node-lifecycle__log-item"},L(u),1))),128))])]),n("div",rs,[n("div",ts,[n("button",{class:"demo-node-lifecycle__btn",onClick:m}," ➕ 添加节点 "),n("button",{class:"demo-node-lifecycle__btn",onClick:N}," ➖ 删除选中节点 "),n("label",os,[Ee(n("input",{type:"checkbox","onUpdate:modelValue":x[0]||(x[0]=u=>s.value=u)},null,512),[[Ie,s.value]]),x[3]||(x[3]=Q(" 允许添加 ",-1))]),n("label",ss,[Ee(n("input",{type:"checkbox","onUpdate:modelValue":x[1]||(x[1]=u=>l.value=u)},null,512),[[Ie,l.value]]),x[4]||(x[4]=Q(" 允许删除 ",-1))])]),v(D(le),{onReady:d,"before-node-add":t,"after-node-add":p,"before-node-remove":c,"after-node-remove":f})])]))}}),as=ae(is,[["__scopeId","data-v-48d36645"]]),ls=`<template>\r
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
import { FlowDesignerLayout }  from '@quick-code/x6-flow-designer'\r
import type { FlowDesigner } from '@quick-code/x6-flow-designer'\r
import type { Graph } from '@antv/x6'\r
import type {\r
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
`,ds={class:"demo-edge-lifecycle"},cs={class:"demo-edge-lifecycle__log"},ps={class:"demo-edge-lifecycle__log-content"},gs={class:"demo-edge-lifecycle__canvas"},us={class:"demo-edge-lifecycle__controls"},fs={class:"demo-edge-lifecycle__checkbox"},ms={class:"demo-edge-lifecycle__checkbox"},hs=j({__name:"demo-edge-lifecycle",setup(b){const e=E([]),r=E(!0),o=E(!0),s=E();function l(c){const f=new Date().toLocaleTimeString();e.value.push(`[${f}] ${c}`)}function g(){e.value=[]}function i(c,f){s.value=c,l("✅ 画布初始化完成");const m={groups:{top:{position:"top",attrs:{circle:{r:4,magnet:!0,stroke:"#5F95FF",strokeWidth:1,fill:"#fff",style:{visibility:"hidden"}}}},right:{position:"right",attrs:{circle:{r:4,magnet:!0,stroke:"#5F95FF",strokeWidth:1,fill:"#fff",style:{visibility:"hidden"}}}},bottom:{position:"bottom",attrs:{circle:{r:4,magnet:!0,stroke:"#5F95FF",strokeWidth:1,fill:"#fff",style:{visibility:"hidden"}}}},left:{position:"left",attrs:{circle:{r:4,magnet:!0,stroke:"#5F95FF",strokeWidth:1,fill:"#fff",style:{visibility:"hidden"}}}}},items:[{id:"port-top",group:"top"},{id:"port-right",group:"right"},{id:"port-bottom",group:"bottom"},{id:"port-left",group:"left"}]},N=f.createNode({id:"node1",shape:"rect",x:100,y:100,width:100,height:60,label:"节点1",ports:m,attrs:{body:{fill:"#5F95FF",stroke:"#2563EB"},label:{fill:"#fff"}}});c.addCell(N);const k=f.createNode({id:"node2",shape:"rect",x:300,y:100,width:100,height:60,label:"节点2",ports:m,attrs:{body:{fill:"#10B981",stroke:"#059669"},label:{fill:"#fff"}}});c.addCell(k);const x=f.createNode({id:"node3",shape:"rect",x:100,y:220,width:100,height:60,label:"节点3",ports:m,attrs:{body:{fill:"#F59E0B",stroke:"#D97706"},label:{fill:"#fff"}}});c.addCell(x);const u=f.createNode({id:"node4",shape:"rect",x:300,y:220,width:100,height:60,label:"节点4",ports:m,attrs:{body:{fill:"#EF4444",stroke:"#DC2626"},label:{fill:"#fff"}}});c.addCell(u),l("📦 已添加 4 个带连接桩的节点"),l("💡 拖拽节点边缘的圆点来创建连线"),f.centerContent()}function a(c){var f,m;return l("🔵 beforeEdgeAdd 触发"),l(`  源节点: ${(f=c.sourceCell)==null?void 0:f.id}`),l(`  目标节点: ${(m=c.targetCell)==null?void 0:m.id}`),l(`  允许创建: ${r.value}`),r.value?(l("✅ 允许创建连线"),!0):(l("❌ 连线创建被阻止"),!1)}function d(c){l("🟢 afterEdgeAdd 触发"),l(`  连线ID: ${c.edgeId}`),l("  连线已成功添加到画布")}function t(c){return l("🟡 beforeEdgeRemove 触发"),l(`  连线ID: ${c.edgeId}`),l(`  来源: ${c.source}`),l(`  允许删除: ${o.value}`),o.value?(l("✅ 允许删除连线"),!0):(l("❌ 连线删除被阻止"),!1)}function p(c){l("🔴 afterEdgeRemove 触发"),l(`  连线ID: ${c.edgeId}`),l("  连线已从画布中移除")}return(c,f)=>(h(),_("div",ds,[n("div",cs,[n("div",{class:"demo-edge-lifecycle__log-header"},[f[2]||(f[2]=n("h4",null,"事件日志",-1)),n("button",{class:"demo-edge-lifecycle__clear-btn",onClick:g,title:"清除日志"}," 清除 ")]),n("div",ps,[(h(!0),_(U,null,ee(e.value,(m,N)=>(h(),_("div",{key:N,class:"demo-edge-lifecycle__log-item"},L(m),1))),128))])]),n("div",gs,[f[5]||(f[5]=n("div",{class:"demo-edge-lifecycle__tip"}," 💡 鼠标悬停到节点上会显示连接桩，拖拽连接桩来创建连线。选中连线后按 Delete 或 Backspace 删除。 ",-1)),n("div",us,[n("label",fs,[Ee(n("input",{type:"checkbox","onUpdate:modelValue":f[0]||(f[0]=m=>r.value=m)},null,512),[[Ie,r.value]]),f[3]||(f[3]=Q(" 允许创建连线 ",-1))]),n("label",ms,[Ee(n("input",{type:"checkbox","onUpdate:modelValue":f[1]||(f[1]=m=>o.value=m)},null,512),[[Ie,o.value]]),f[4]||(f[4]=Q(" 允许删除连线 ",-1))])]),v(D(le),{onReady:i,"before-edge-add":a,"after-edge-add":d,"before-edge-remove":t,"after-edge-remove":p})])]))}}),vs=ae(hs,[["__scopeId","data-v-5fc2010d"]]),bs=`\uFEFF<template>\r
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
import { FlowDesignerLayout }  from '@quick-code/x6-flow-designer'\r
import type { FlowDesigner } from '@quick-code/x6-flow-designer'\r
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
`,_s={class:"demo-data-loaded"},xs={class:"demo-data-loaded__log"},ys={class:"demo-data-loaded__log-content"},ws={class:"demo-data-loaded__canvas"},ks=j({__name:"demo-data-loaded",setup(b){const e=E([]),r=E(),o={meta:{name:"示例流程",version:"1.0.0"},nodes:[{id:"start",shape:"rect",x:100,y:100,width:100,height:60,data:{label:"开始"},attrs:{body:{fill:"#10B981",stroke:"#059669"},label:{text:"开始",fill:"#fff"}}},{id:"process1",shape:"rect",x:250,y:100,width:100,height:60,data:{label:"处理1"},attrs:{body:{fill:"#5F95FF",stroke:"#2563EB"},label:{text:"处理1",fill:"#fff"}}},{id:"process2",shape:"rect",x:400,y:100,width:100,height:60,data:{label:"处理2"},attrs:{body:{fill:"#F59E0B",stroke:"#D97706"},label:{text:"处理2",fill:"#fff"}}},{id:"end",shape:"rect",x:250,y:220,width:100,height:60,data:{label:"结束"},attrs:{body:{fill:"#EF4444",stroke:"#DC2626"},label:{text:"结束",fill:"#fff"}}}],edges:[{id:"edge1",shape:"flow-edge",source:{cell:"start"},target:{cell:"process1"},data:{label:"步骤1"},labels:["步骤1"]},{id:"edge2",shape:"flow-edge",source:{cell:"process1"},target:{cell:"process2"},data:{label:"步骤2"},labels:["步骤2"]},{id:"edge3",shape:"flow-edge",source:{cell:"process2"},target:{cell:"end"},data:{label:"步骤3"},labels:["步骤3"]}],viewport:{tx:0,ty:0,scale:1}};function s(t){const p=new Date().toLocaleTimeString();e.value.push(`[${p}] ${t}`)}function l(){e.value=[]}function g(t,p){r.value=t,s("✅ 画布初始化完成"),s('💡 点击"加载示例数据"按钮')}function i(t){var p,c,f;if(s("🟢 afterDataLoaded 钩子触发"),s(`📦 流程名称: ${((p=t.meta)==null?void 0:p.name)||"未命名"}`),s(`📊 节点数量: ${((c=t.nodes)==null?void 0:c.length)||0}`),s(`🔗 连线数量: ${((f=t.edges)==null?void 0:f.length)||0}`),s("✅ 数据加载完成，画布已渲染"),r.value){const m=r.value.getGraph();setTimeout(()=>{m.centerContent(),s("🎯 已自动居中显示")},100)}}function a(){if(!r.value){s("⚠️ 画布尚未初始化");return}s('👆 用户点击"加载示例数据"'),s("📥 调用 designer.load()..."),r.value.load(o)}function d(){if(!r.value)return;s('👆 用户点击"清空画布"'),r.value.getGraph().clearCells(),s("🗑 画布已清空")}return(t,p)=>(h(),_("div",_s,[n("div",xs,[n("div",{class:"demo-data-loaded__log-header"},[p[0]||(p[0]=n("h4",null,"事件日志",-1)),n("button",{class:"demo-data-loaded__clear-btn",onClick:l,title:"清除日志"}," 清除 ")]),n("div",ys,[(h(!0),_(U,null,ee(e.value,(c,f)=>(h(),_("div",{key:f,class:"demo-data-loaded__log-item"},L(c),1))),128))])]),n("div",ws,[n("div",{class:"demo-data-loaded__controls"},[n("button",{class:"demo-data-loaded__btn",onClick:a}," 📥 加载示例数据 "),n("button",{class:"demo-data-loaded__btn",onClick:d}," 🗑 清空画布 ")]),v(D(le),{onReady:g,"after-data-loaded":i})])]))}}),Cs=ae(ks,[["__scopeId","data-v-b0524c67"]]),Ss=`<template>\r
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
`,Es={class:"toolbar"},Ns={class:"toolbar__left"},Ds=j({__name:"Toolbar",props:{zoomPercent:{},hasSelection:{type:Boolean},canPaste:{type:Boolean},canGroup:{type:Boolean},canUngroup:{type:Boolean},canUndo:{type:Boolean},canRedo:{type:Boolean},designerMode:{}},emits:["undo","redo","zoomIn","zoomOut","zoomTo","fitView","resetView","copy","paste","toFront","toBack","align-left","align-right","align-top","align-bottom","group","ungroup","export","import","publish","new","save","openSettings","modeChange"],setup(b,{emit:e}){const r=Ve("capabilities"),o=e,s=E(null);function l(g){var a;const i=(a=g.target.files)==null?void 0:a[0];i&&(o("import",i),g.target.value="")}return(g,i)=>{const a=Fe("a-button"),d=Fe("a-tooltip"),t=Fe("a-divider"),p=Fe("a-select-option"),c=Fe("a-select"),f=Fe("a-space");return h(),_("div",Es,[n("div",Ns,[v(f,{size:4,align:"center"},{default:M(()=>[v(d,{title:"导入 JSON"},{default:M(()=>[v(a,{size:"small",disabled:!D(r).canImport,onClick:i[0]||(i[0]=()=>{var m;return(m=s.value)==null?void 0:m.click()})},{icon:M(()=>[v(D(kr))]),_:1},8,["disabled"])]),_:1}),v(d,{title:"导出 JSON"},{default:M(()=>[v(a,{size:"small",disabled:!D(r).canExport,onClick:i[1]||(i[1]=m=>o("export"))},{icon:M(()=>[v(D(Cr))]),_:1},8,["disabled"])]),_:1}),v(t,{type:"vertical",style:{margin:"0 2px"}}),v(d,{title:"撤销 (Ctrl+Z)"},{default:M(()=>[v(a,{size:"small",disabled:!D(r).canUndo||!b.canUndo,onClick:i[2]||(i[2]=m=>o("undo"))},{icon:M(()=>[v(D(vr))]),_:1},8,["disabled"])]),_:1}),v(d,{title:"重做 (Ctrl+Y)"},{default:M(()=>[v(a,{size:"small",disabled:!D(r).canRedo||!b.canRedo,onClick:i[3]||(i[3]=m=>o("redo"))},{icon:M(()=>[v(D(br))]),_:1},8,["disabled"])]),_:1}),v(t,{type:"vertical",style:{margin:"0 2px"}}),v(d,{title:"缩小 (Ctrl+-)"},{default:M(()=>[v(a,{size:"small",disabled:b.zoomPercent<=20,onClick:i[4]||(i[4]=m=>o("zoomOut"))},{icon:M(()=>[v(D(xr))]),_:1},8,["disabled"])]),_:1}),v(c,{value:b.zoomPercent,size:"small",style:{width:"76px"},onChange:i[5]||(i[5]=m=>o("zoomTo",m))},{default:M(()=>[v(p,{value:25},{default:M(()=>[...i[19]||(i[19]=[Q("25%",-1)])]),_:1}),v(p,{value:50},{default:M(()=>[...i[20]||(i[20]=[Q("50%",-1)])]),_:1}),v(p,{value:75},{default:M(()=>[...i[21]||(i[21]=[Q("75%",-1)])]),_:1}),v(p,{value:100},{default:M(()=>[...i[22]||(i[22]=[Q("100%",-1)])]),_:1}),v(p,{value:125},{default:M(()=>[...i[23]||(i[23]=[Q("125%",-1)])]),_:1}),v(p,{value:150},{default:M(()=>[...i[24]||(i[24]=[Q("150%",-1)])]),_:1}),v(p,{value:200},{default:M(()=>[...i[25]||(i[25]=[Q("200%",-1)])]),_:1})]),_:1},8,["value"]),v(d,{title:"放大 (Ctrl+=)"},{default:M(()=>[v(a,{size:"small",disabled:b.zoomPercent>=500,onClick:i[6]||(i[6]=m=>o("zoomIn"))},{icon:M(()=>[v(D(_r))]),_:1},8,["disabled"])]),_:1}),v(d,{title:"适应窗口 (Ctrl+0)"},{default:M(()=>[v(a,{size:"small",disabled:!D(r).canFitView,onClick:i[7]||(i[7]=m=>o("fitView"))},{icon:M(()=>[v(D(yr))]),_:1},8,["disabled"])]),_:1}),v(d,{title:"重置视图 (Ctrl+Shift+H)"},{default:M(()=>[v(a,{size:"small",disabled:!D(r).canResetView,onClick:i[8]||(i[8]=m=>o("resetView"))},{icon:M(()=>[v(D(wr))]),_:1},8,["disabled"])]),_:1}),v(t,{type:"vertical",style:{margin:"0 2px"}}),v(d,{title:"层级前置"},{default:M(()=>[v(a,{size:"small",disabled:!D(r).canToFront||!b.hasSelection,onClick:i[9]||(i[9]=m=>o("toFront"))},{icon:M(()=>[v(D(mr))]),_:1},8,["disabled"])]),_:1}),v(d,{title:"层级后置"},{default:M(()=>[v(a,{size:"small",disabled:!D(r).canToBack||!b.hasSelection,onClick:i[10]||(i[10]=m=>o("toBack"))},{icon:M(()=>[v(D(hr))]),_:1},8,["disabled"])]),_:1}),v(t,{type:"vertical",style:{margin:"0 2px"}}),v(d,{title:"左对齐 (Ctrl+Shift+L)"},{default:M(()=>[v(a,{size:"small",disabled:!D(r).canAlign||!D(r).canAlignLeft||!b.canGroup,onClick:i[11]||(i[11]=m=>o("align-left"))},{icon:M(()=>[v(D(_t))]),_:1},8,["disabled"])]),_:1}),v(d,{title:"右对齐 (Ctrl+Shift+R)"},{default:M(()=>[v(a,{size:"small",disabled:!D(r).canAlign||!D(r).canAlignRight||!b.canGroup,onClick:i[12]||(i[12]=m=>o("align-right"))},{icon:M(()=>[v(D(xt))]),_:1},8,["disabled"])]),_:1}),v(d,{title:"上对齐 (Ctrl+Shift+T)"},{default:M(()=>[v(a,{size:"small",disabled:!D(r).canAlign||!D(r).canAlignTop||!b.canGroup,onClick:i[13]||(i[13]=m=>o("align-top"))},{icon:M(()=>[v(D(yt))]),_:1},8,["disabled"])]),_:1}),v(d,{title:"下对齐 (Ctrl+Shift+B)"},{default:M(()=>[v(a,{size:"small",disabled:!D(r).canAlign||!D(r).canAlignBottom||!b.canGroup,onClick:i[14]||(i[14]=m=>o("align-bottom"))},{icon:M(()=>[v(D(wt))]),_:1},8,["disabled"])]),_:1}),v(t,{type:"vertical",style:{margin:"0 2px"}}),v(d,{title:"复制选中节点 (Ctrl+C)"},{default:M(()=>[v(a,{size:"small",disabled:!D(r).canCopy||!b.hasSelection,onClick:i[15]||(i[15]=m=>o("copy"))},{icon:M(()=>[v(D(ur))]),default:M(()=>[i[26]||(i[26]=Q(" 复制 ",-1))]),_:1},8,["disabled"])]),_:1}),v(d,{title:"粘贴节点 (Ctrl+V)"},{default:M(()=>[v(a,{size:"small",disabled:!D(r).canPaste||!b.canPaste,onClick:i[16]||(i[16]=m=>o("paste"))},{icon:M(()=>[v(D(fr))]),default:M(()=>[i[27]||(i[27]=Q(" 粘贴 ",-1))]),_:1},8,["disabled"])]),_:1}),v(t,{type:"vertical",style:{margin:"0 2px"}}),v(d,{title:"成组 (Ctrl+G)"},{default:M(()=>[v(a,{size:"small",disabled:!D(r).canGroup||!b.canGroup,onClick:i[17]||(i[17]=m=>o("group"))},{icon:M(()=>[v(D(pr))]),default:M(()=>[i[28]||(i[28]=Q(" 成组 ",-1))]),_:1},8,["disabled"])]),_:1}),v(d,{title:"解组 (Ctrl+Shift+G)"},{default:M(()=>[v(a,{size:"small",disabled:!D(r).canGroup||!b.canUngroup,onClick:i[18]||(i[18]=m=>o("ungroup"))},{icon:M(()=>[v(D(gr))]),default:M(()=>[i[29]||(i[29]=Q(" 解组 ",-1))]),_:1},8,["disabled"])]),_:1})]),_:1})]),n("input",{ref_key:"fileInputRef",ref:s,type:"file",accept:".json",style:{display:"none"},onChange:l},null,544)])}}}),Ts=ae(Ds,[["__scopeId","data-v-d2762e1c"]]),Fs={class:"demo-slot-toolbar"},$s={class:"demo-slot-toolbar__log"},Ms={class:"demo-slot-toolbar__log-content"},Ls={class:"demo-slot-toolbar__canvas"},Rs=j({__name:"demo-slot-toolbar",setup(b){const e=E([]);function r(l){const g=new Date().toLocaleTimeString();e.value.push(`[${g}] ${l}`)}function o(){e.value=[]}function s(l,g){r("✅ 画布初始化完成"),r("🎨 自定义工具栏已渲染");const i=g.createNode({shape:"rect",x:30,y:30,width:100,height:60,label:"节点1",attrs:{body:{fill:"#5F95FF",stroke:"#2563EB",strokeWidth:2,rx:6,ry:6},label:{fill:"#fff",fontSize:14,fontWeight:500}}});l.addCell(i),r("➕ 添加节点1");const a=g.createNode({shape:"rect",x:130,y:130,width:100,height:60,label:"节点2  ",attrs:{body:{fill:"#fc01b4",stroke:"#7c0073",strokeWidth:2,rx:6,ry:6},label:{fill:"#fff",fontSize:14,fontWeight:500}}});l.addCell(a),r("➕ 添加节点2")}return(l,g)=>(h(),_("div",Fs,[n("div",$s,[n("div",{class:"demo-slot-toolbar__log-header"},[g[0]||(g[0]=n("h4",null,"事件日志",-1)),n("button",{class:"demo-slot-toolbar__clear-btn",onClick:o,title:"清除日志"}," 清除 ")]),n("div",Ms,[(h(!0),_(U,null,ee(e.value,(i,a)=>(h(),_("div",{key:a,class:"demo-slot-toolbar__log-item"},L(i),1))),128))])]),n("div",Ls,[v(D(le),{mode:"design",onReady:s},{toolbar:M(i=>[v(Ts,{"zoom-percent":i.zoomPercent,"has-selection":i.hasSelection,"can-paste":i.canPaste,"can-group":i.canGroup,"can-ungroup":i.canUngroup,"can-undo":i.canUndo,"can-redo":i.canRedo,"designer-mode":i.currentMode,onUndo:i.onUndo,onRedo:i.onRedo,onZoomIn:i.onZoomIn,onZoomOut:i.onZoomOut,onZoomTo:i.onZoomTo,onFitView:i.onFitView,onResetView:i.onResetView,onCopy:i.onCopy,onPaste:i.onPaste,onToFront:i.onToFront,onToBack:i.onToBack,onAlignLeft:i.onAlignLeft,onAlignRight:i.onAlignRight,onAlignTop:i.onAlignTop,onAlignBottom:i.onAlignBottom,onGroup:i.onGroup,onUngroup:i.onUngroup,onExport:i.onExport,onImport:i.onImport,onOpenSettings:i.onOpenSettings,onModeChange:i.onModeChange},null,8,["zoom-percent","has-selection","can-paste","can-group","can-ungroup","can-undo","can-redo","designer-mode","onUndo","onRedo","onZoomIn","onZoomOut","onZoomTo","onFitView","onResetView","onCopy","onPaste","onToFront","onToBack","onAlignLeft","onAlignRight","onAlignTop","onAlignBottom","onGroup","onUngroup","onExport","onImport","onOpenSettings","onModeChange"])]),_:1})])]))}}),zs=ae(Rs,[["__scopeId","data-v-e0097e30"]]),As=`\uFEFF<template>\r
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
`,Ps=`<template>\r
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
`,Is={class:"demo-slot-palette"},Gs={class:"demo-slot-palette__log"},Bs={class:"demo-slot-palette__log-content"},Os={class:"demo-slot-palette__canvas"},Hs={class:"custom-palette"},Ws={class:"custom-palette__section"},Vs=["onMousedown"],Us={class:"custom-palette__item-info"},Zs={class:"custom-palette__item-label"},js={class:"custom-palette__item-hint"},qs=j({__name:"demo-slot-palette",setup(b){const e=E([]),r=E([{type:"custom-circle",label:"圆形节点",icon:"⚪",hint:"用于流程开始/结束",color:"#5F95FF",width:80,height:80},{type:"custom-diamond",label:"菱形节点",icon:"◆",hint:"用于条件判断",color:"#47C769",width:100,height:80}]);function o(a){const d=new Date().toLocaleTimeString();e.value.push(`[${d}] ${a}`)}function s(){e.value=[]}function l(a){o("🔧 beforeGraphInit: 开始注册自定义节点"),_e.registerNode("custom-circle",{inherit:"circle",width:80,height:80,attrs:{body:{fill:"#5F95FF",stroke:"#2563EB",strokeWidth:2},label:{fill:"#fff",fontSize:14,fontWeight:500}},ports:{groups:{top:{position:"top",attrs:{circle:{r:4,magnet:!0,stroke:"#2563EB",strokeWidth:1,fill:"#fff"}}},bottom:{position:"bottom",attrs:{circle:{r:4,magnet:!0,stroke:"#2563EB",strokeWidth:1,fill:"#fff"}}}},items:[{group:"top",id:"port-top"},{group:"bottom",id:"port-bottom"}]}},!0),o("✅ 已注册节点: custom-circle (圆形)"),_e.registerNode("custom-diamond",{inherit:"polygon",width:100,height:80,attrs:{body:{fill:"#47C769",stroke:"#27AE60",strokeWidth:2,refPoints:"0,10 10,0 20,10 10,20"},label:{fill:"#fff",fontSize:13,fontWeight:500,textWrap:{width:-20,height:-20,ellipsis:!0}}},ports:{groups:{top:{position:{name:"top"},attrs:{circle:{r:4,magnet:!0,stroke:"#27AE60",strokeWidth:1,fill:"#fff"}}},right:{position:{name:"right"},attrs:{circle:{r:4,magnet:!0,stroke:"#27AE60",strokeWidth:1,fill:"#fff"}}},bottom:{position:{name:"bottom"},attrs:{circle:{r:4,magnet:!0,stroke:"#27AE60",strokeWidth:1,fill:"#fff"}}},left:{position:{name:"left"},attrs:{circle:{r:4,magnet:!0,stroke:"#27AE60",strokeWidth:1,fill:"#fff"}}}},items:[{group:"top",id:"port-top"},{group:"right",id:"port-right"},{group:"bottom",id:"port-bottom"},{group:"left",id:"port-left"}]}},!0),o("✅ 已注册节点: custom-diamond (菱形)"),o("🎉 所有自定义节点注册完成")}function g(a,d){o("✅ 画布初始化完成"),o("🎨 自定义节点面板已渲染"),o("💡 提示: 点击左侧节点拖拽到画布")}function i(a,d,t){o(`🎯 开始拖拽: ${d.label}`),t(a,{shape:d.type,label:d.label,width:d.width,height:d.height,data:{label:d.label,nodeInfo:{icon:d.icon,hint:d.hint,color:d.color}}})}return(a,d)=>(h(),_("div",Is,[n("div",Gs,[n("div",{class:"demo-slot-palette__log-header"},[d[0]||(d[0]=n("h4",null,"事件日志",-1)),n("button",{class:"demo-slot-palette__clear-btn",onClick:s,title:"清除日志"}," 清除 ")]),n("div",Bs,[(h(!0),_(U,null,ee(e.value,(t,p)=>(h(),_("div",{key:p,class:"demo-slot-palette__log-item"},L(t),1))),128))])]),n("div",Os,[v(D(le),{mode:"design","before-graph-init":l,onReady:g},{palette:M(({onStartDrag:t})=>[n("div",Hs,[d[2]||(d[2]=n("div",{class:"custom-palette__header"},[n("h3",{class:"custom-palette__title"},"自定义节点"),n("span",{class:"custom-palette__desc"},"拖拽到画布")],-1)),n("div",Ws,[d[1]||(d[1]=n("div",{class:"custom-palette__section-title"},"基础节点",-1)),(h(!0),_(U,null,ee(r.value,p=>(h(),_("div",{key:p.type,class:"custom-palette__item",onMousedown:c=>i(c,p,t)},[n("div",{class:"custom-palette__item-icon",style:ye({background:p.color})},L(p.icon),5),n("div",Us,[n("div",Zs,L(p.label),1),n("div",js,L(p.hint),1)])],40,Vs))),128))])])]),_:1})])]))}}),Ys=ae(qs,[["__scopeId","data-v-6a0ce3b0"]]),Xs=`\uFEFF<template>\r
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
`,Js={class:"demo-slot-properties"},Ks={class:"demo-slot-properties__log"},Qs={class:"demo-slot-properties__log-content"},ei={class:"demo-slot-properties__canvas"},ni=["title"],ri={class:"custom-properties__toggle-icon"},ti={class:"custom-properties__content"},oi={class:"custom-properties__header"},si={class:"custom-properties__title"},ii={class:"custom-properties__desc"},ai={key:0,class:"custom-properties__form"},li={class:"custom-properties__section"},di={class:"custom-properties__field"},ci={class:"custom-properties__field"},pi={class:"custom-properties__label"},gi={class:"custom-properties__field"},ui={class:"custom-properties__label"},fi={class:"custom-properties__field"},mi={class:"custom-properties__section"},hi={class:"custom-properties__info"},vi={class:"custom-properties__info-item"},bi={class:"custom-properties__info-value"},_i={class:"custom-properties__info-item"},xi={class:"custom-properties__info-value"},yi={class:"custom-properties__info-item"},wi={class:"custom-properties__info-value"},ki={key:1,class:"custom-properties__form"},Ci={class:"custom-properties__section"},Si={class:"custom-properties__field"},Ei=["value"],Ni={class:"custom-properties__field"},Di=["value"],Ti={class:"custom-properties__section"},Fi={class:"custom-properties__field"},$i=["value"],Mi={class:"custom-properties__field-row"},Li={class:"custom-properties__field"},Ri=["value"],zi={class:"custom-properties__field"},Ai=["value"],Pi={class:"custom-properties__section"},Ii={class:"custom-properties__field"},Gi=["value"],Bi={class:"custom-properties__field"},Oi=["value"],Hi={class:"custom-properties__field"},Wi=["value"],Vi={key:2,class:"custom-properties__form"},Ui={class:"custom-properties__section"},Zi={class:"custom-properties__field"},ji=["value"],qi={class:"custom-properties__field"},Yi=["value"],Xi={class:"custom-properties__field"},Ji=["value"],Ki={class:"custom-properties__section"},Qi={class:"custom-properties__field"},ea=["value"],na={class:"custom-properties__field"},ra=["value"],ta={class:"custom-properties__section"},oa={class:"custom-properties__field"},sa=["value"],ia={class:"custom-properties__field"},aa=["value"],la={class:"custom-properties__field"},da={class:"custom-properties__label"},ca=["checked"],pa={key:3,class:"custom-properties__empty"},ga=j({__name:"demo-slot-properties",setup(b){const e=E([]),r=E(null),o=E(null),s=E("canvas"),l=E(!1);let g=null,i=null;const a=E({name:"流程设计画布",grid:!0,snapline:!0,backgroundColor:"#ffffff"}),d=E({nodeCount:0,edgeCount:0,zoom:100}),t=ie(()=>{switch(s.value){case"node":return"节点属性";case"edge":return"连线属性";case"canvas":return"画布配置";default:return"属性编辑"}}),p=ie(()=>{switch(s.value){case"node":return"编辑节点属性";case"edge":return"编辑连线属性";case"canvas":return"配置画布设置";default:return"请选择元素"}});function c(z){const w=new Date().toLocaleTimeString();e.value.push(`[${w}] ${z}`)}function f(){e.value=[]}function m(){l.value=!l.value,c(l.value?"◀ 收起属性面板":"▶ 展开属性面板")}function N(z){c("🔧 初始化自定义节点..."),_e.registerNode("custom-circle",{inherit:"circle",width:100,height:100,attrs:{body:{fill:"#5F95FF",stroke:"#2563EB",strokeWidth:2},label:{fill:"#fff",fontSize:14,fontWeight:500}}},!0),_e.registerNode("custom-rect",{inherit:"rect",width:140,height:70,attrs:{body:{fill:"#47C769",stroke:"#27AE60",strokeWidth:2,rx:8,ry:8},label:{fill:"#fff",fontSize:14,fontWeight:500}}},!0),c("✅ 节点注册完成")}function k(z,w){g=z,i=w,c("✅ 画布初始化完成"),c("🎨 自定义属性面板已渲染");const ce=w.addNode({shape:"custom-circle",x:100,y:100,label:"开始",data:{description:"流程开始节点",owner:"张三",priority:"high"}}),ke=w.addNode({shape:"custom-rect",x:300,y:100,label:"处理",data:{description:"执行业务处理",owner:"李四",priority:"medium"}}),Le=w.addNode({shape:"custom-circle",x:500,y:100,label:"结束",data:{description:"流程结束",owner:"王五",priority:"low"}});w.addEdge({source:ce,target:ke,shape:"flow-edge",labels:[{attrs:{text:{text:"通过"}}}],data:{lineType:"normal",condition:'status === "approved"',description:"审批通过后的流转",isDefault:!1}}),w.addEdge({source:ke,target:Le,shape:"flow-edge",labels:[{attrs:{text:{text:"完成"}}}],data:{lineType:"normal",condition:"",description:"处理完成后结束",isDefault:!0}}),c("➕ 添加了 3 个节点和 2 条连线"),c("💡 提示: 点击节点、连线或空白区域"),w.centerContent(),u(),w.on("node:added",u),w.on("node:removed",u),w.on("edge:added",u),w.on("edge:removed",u),w.on("scale",({sx:Te})=>{d.value.zoom=Math.round(Te*100)})}function x(z){z.length===0?(r.value=null,o.value=null,s.value="canvas",c("📌 显示画布配置")):z.length===1?z[0].isNode()?(r.value=z[0],o.value=null,s.value="node",c(`📌 选中节点: ${r.value.label||r.value.id}`)):z[0].isEdge()&&(r.value=null,o.value=z[0],s.value="edge",c(`📌 选中连线: ${o.value.id}`)):(r.value=null,o.value=null,s.value="none",c(`📌 选中 ${z.length} 个元素`))}function u(){i&&(d.value.nodeCount=i.getNodes().length,d.value.edgeCount=i.getEdges().length)}function y(){c(`⚙️ 更新画布配置: ${a.value.name}`)}function F(z){var w;return r.value&&((w=r.value.getData())==null?void 0:w[z])||""}function G(z){r.value&&(r.value.setAttrByPath("label/text",z),r.value.prop("label",z),c(`✏️ 更新节点名称: ${z}`))}function I(z,w){if(!r.value)return;const ce=r.value.getSize(),ke={width:z==="width"?w:ce.width,height:z==="height"?w:ce.height};r.value.setSize(ke),c(`📏 更新节点尺寸: ${z} = ${w}`)}function P(z,w){if(!r.value)return;const ce=r.value.getData()||{};r.value.setData(pe(H({},ce),{[z]:w})),c(`💾 更新节点属性: ${z}`)}function O(){if(!r.value||!i)return;const z=r.value.label||r.value.id;i.removeNode(r.value),c(`🗑️ 删除节点: ${z}`)}function q(){var w,ce;if(!o.value)return"";const z=o.value.getLabels();return z&&z.length>0&&((ce=(w=z[0].attrs)==null?void 0:w.text)==null?void 0:ce.text)||""}function ne(){if(!o.value)return"";const z=o.value.getSourceNode();return(z==null?void 0:z.label)||(z==null?void 0:z.id)||""}function te(){if(!o.value)return"";const z=o.value.getTargetNode();return(z==null?void 0:z.label)||(z==null?void 0:z.id)||""}function K(z){var w;return o.value&&((w=o.value.getData())==null?void 0:w[z])||""}function xe(z){o.value&&(g==null||g.updateEdgeLabelText(o.value,z),c(`✏️ 更新连线标签: ${z}`))}function oe(z,w){if(!o.value)return;const ce=o.value.getData()||{};o.value.setData(pe(H({},ce),{[z]:w})),c(`💾 更新连线属性: ${z}`)}function fe(){!o.value||!i||(i.removeEdge(o.value),c("🗑️ 删除连线"))}return(z,w)=>(h(),_("div",Js,[n("div",Ks,[n("div",{class:"demo-slot-properties__log-header"},[w[15]||(w[15]=n("h4",null,"事件日志",-1)),n("button",{class:"demo-slot-properties__clear-btn",onClick:f,title:"清除日志"}," 清除 ")]),n("div",Qs,[(h(!0),_(U,null,ee(e.value,(ce,ke)=>(h(),_("div",{key:ke,class:"demo-slot-properties__log-item"},L(ce),1))),128))])]),n("div",ei,[v(D(le),{mode:"design","before-graph-init":N,onReady:k,onSelectionChange:x},{properties:M(({designer:ce,graph:ke,selectedCells:Le,currentMode:Te,capabilities:ze})=>{var Re,W;return[n("div",{class:we(["custom-properties",{"custom-properties--collapsed":l.value}])},[n("button",{class:"custom-properties__toggle",onClick:m,title:l.value?"展开属性面板":"收起属性面板"},[n("span",ri,L(l.value?"◀":"▶"),1)],8,ni),n("div",ti,[n("div",oi,[n("h3",si,L(t.value),1),n("span",ii,L(p.value),1)]),s.value==="canvas"?(h(),_("div",ai,[n("div",li,[w[20]||(w[20]=n("div",{class:"custom-properties__section-title"},"画布设置",-1)),n("div",di,[w[16]||(w[16]=n("label",{class:"custom-properties__label"},"画布名称",-1)),Ee(n("input",{type:"text",class:"custom-properties__input","onUpdate:modelValue":w[0]||(w[0]=C=>a.value.name=C),onInput:y,placeholder:"请输入画布名称"},null,544),[[Rn,a.value.name]])]),n("div",ci,[n("label",pi,[Ee(n("input",{type:"checkbox",class:"custom-properties__checkbox","onUpdate:modelValue":w[1]||(w[1]=C=>a.value.grid=C),onChange:y},null,544),[[Ie,a.value.grid]]),w[17]||(w[17]=Q(" 显示网格 ",-1))])]),n("div",gi,[n("label",ui,[Ee(n("input",{type:"checkbox",class:"custom-properties__checkbox","onUpdate:modelValue":w[2]||(w[2]=C=>a.value.snapline=C),onChange:y},null,544),[[Ie,a.value.snapline]]),w[18]||(w[18]=Q(" 显示对齐线 ",-1))])]),n("div",fi,[w[19]||(w[19]=n("label",{class:"custom-properties__label"},"背景颜色",-1)),Ee(n("input",{type:"color",class:"custom-properties__color","onUpdate:modelValue":w[3]||(w[3]=C=>a.value.backgroundColor=C),onInput:y},null,544),[[Rn,a.value.backgroundColor]])])]),n("div",mi,[w[24]||(w[24]=n("div",{class:"custom-properties__section-title"},"画布信息",-1)),n("div",hi,[n("div",vi,[w[21]||(w[21]=n("span",{class:"custom-properties__info-label"},"节点数量:",-1)),n("span",bi,L(d.value.nodeCount),1)]),n("div",_i,[w[22]||(w[22]=n("span",{class:"custom-properties__info-label"},"连线数量:",-1)),n("span",xi,L(d.value.edgeCount),1)]),n("div",yi,[w[23]||(w[23]=n("span",{class:"custom-properties__info-label"},"缩放比例:",-1)),n("span",wi,L(d.value.zoom)+"%",1)])])])])):s.value==="node"?(h(),_("div",ki,[n("div",Ci,[w[27]||(w[27]=n("div",{class:"custom-properties__section-title"},"节点信息",-1)),n("div",Si,[w[25]||(w[25]=n("label",{class:"custom-properties__label"},"节点 ID",-1)),n("input",{type:"text",class:"custom-properties__input",value:r.value.id,disabled:""},null,8,Ei)]),n("div",Ni,[w[26]||(w[26]=n("label",{class:"custom-properties__label"},"节点类型",-1)),n("input",{type:"text",class:"custom-properties__input",value:r.value.shape,disabled:""},null,8,Di)])]),n("div",Ti,[w[31]||(w[31]=n("div",{class:"custom-properties__section-title"},"基础属性",-1)),n("div",Fi,[w[28]||(w[28]=n("label",{class:"custom-properties__label"},"节点名称 *",-1)),n("input",{type:"text",class:"custom-properties__input",value:r.value.label,onInput:w[4]||(w[4]=C=>G(C.target.value)),placeholder:"请输入节点名称"},null,40,$i)]),n("div",Mi,[n("div",Li,[w[29]||(w[29]=n("label",{class:"custom-properties__label"},"宽度",-1)),n("input",{type:"number",class:"custom-properties__input",value:((Re=r.value.size)==null?void 0:Re.width)||0,onInput:w[5]||(w[5]=C=>I("width",Number(C.target.value))),min:"50",max:"500"},null,40,Ri)]),n("div",zi,[w[30]||(w[30]=n("label",{class:"custom-properties__label"},"高度",-1)),n("input",{type:"number",class:"custom-properties__input",value:((W=r.value.size)==null?void 0:W.height)||0,onInput:w[6]||(w[6]=C=>I("height",Number(C.target.value))),min:"30",max:"500"},null,40,Ai)])])]),n("div",Pi,[w[36]||(w[36]=n("div",{class:"custom-properties__section-title"},"业务属性",-1)),n("div",Ii,[w[32]||(w[32]=n("label",{class:"custom-properties__label"},"描述",-1)),n("textarea",{class:"custom-properties__textarea",value:F("description"),onInput:w[7]||(w[7]=C=>P("description",C.target.value)),placeholder:"请输入节点描述",rows:"3"},null,40,Gi)]),n("div",Bi,[w[33]||(w[33]=n("label",{class:"custom-properties__label"},"负责人",-1)),n("input",{type:"text",class:"custom-properties__input",value:F("owner"),onInput:w[8]||(w[8]=C=>P("owner",C.target.value)),placeholder:"请输入负责人"},null,40,Oi)]),n("div",Hi,[w[35]||(w[35]=n("label",{class:"custom-properties__label"},"优先级",-1)),n("select",{class:"custom-properties__select",value:F("priority"),onChange:w[9]||(w[9]=C=>P("priority",C.target.value))},[...w[34]||(w[34]=[n("option",{value:""},"请选择",-1),n("option",{value:"high"},"高",-1),n("option",{value:"medium"},"中",-1),n("option",{value:"low"},"低",-1)])],40,Wi)])]),n("div",{class:"custom-properties__actions"},[n("button",{class:"custom-properties__btn custom-properties__btn--danger",onClick:O}," 删除节点 ")])])):s.value==="edge"?(h(),_("div",Vi,[n("div",Ui,[w[40]||(w[40]=n("div",{class:"custom-properties__section-title"},"连线信息",-1)),n("div",Zi,[w[37]||(w[37]=n("label",{class:"custom-properties__label"},"连线 ID",-1)),n("input",{type:"text",class:"custom-properties__input",value:o.value.id,disabled:""},null,8,ji)]),n("div",qi,[w[38]||(w[38]=n("label",{class:"custom-properties__label"},"源节点",-1)),n("input",{type:"text",class:"custom-properties__input",value:ne(),disabled:""},null,8,Yi)]),n("div",Xi,[w[39]||(w[39]=n("label",{class:"custom-properties__label"},"目标节点",-1)),n("input",{type:"text",class:"custom-properties__input",value:te(),disabled:""},null,8,Ji)])]),n("div",Ki,[w[44]||(w[44]=n("div",{class:"custom-properties__section-title"},"基础属性",-1)),n("div",Qi,[w[41]||(w[41]=n("label",{class:"custom-properties__label"},"连线标签",-1)),n("input",{type:"text",class:"custom-properties__input",value:q(),onInput:w[10]||(w[10]=C=>xe(C.target.value)),placeholder:"请输入连线标签"},null,40,ea)]),n("div",na,[w[43]||(w[43]=n("label",{class:"custom-properties__label"},"连线类型",-1)),n("select",{class:"custom-properties__select",value:K("lineType"),onChange:w[11]||(w[11]=C=>oe("lineType",C.target.value))},[...w[42]||(w[42]=[n("option",{value:"normal"},"直线",-1),n("option",{value:"smooth"},"平滑曲线",-1),n("option",{value:"rounded"},"圆角折线",-1)])],40,ra)])]),n("div",ta,[w[48]||(w[48]=n("div",{class:"custom-properties__section-title"},"业务属性",-1)),n("div",oa,[w[45]||(w[45]=n("label",{class:"custom-properties__label"},"条件表达式",-1)),n("input",{type:"text",class:"custom-properties__input",value:K("condition"),onInput:w[12]||(w[12]=C=>oe("condition",C.target.value)),placeholder:"例如: status === 'approved'"},null,40,sa)]),n("div",ia,[w[46]||(w[46]=n("label",{class:"custom-properties__label"},"描述",-1)),n("textarea",{class:"custom-properties__textarea",value:K("description"),onInput:w[13]||(w[13]=C=>oe("description",C.target.value)),placeholder:"请输入连线描述",rows:"2"},null,40,aa)]),n("div",la,[n("label",da,[n("input",{type:"checkbox",class:"custom-properties__checkbox",checked:K("isDefault"),onChange:w[14]||(w[14]=C=>oe("isDefault",C.target.checked))},null,40,ca),w[47]||(w[47]=Q(" 默认路径 ",-1))])])]),n("div",{class:"custom-properties__actions"},[n("button",{class:"custom-properties__btn custom-properties__btn--danger",onClick:fe}," 删除连线 ")])])):(h(),_("div",pa,[...w[49]||(w[49]=[n("div",{class:"custom-properties__empty-icon"},"📝",-1),n("p",null,"请选择画布元素",-1),n("p",{class:"custom-properties__empty-hint"},"点击节点或连线进行编辑",-1)])]))])],2)]}),_:1})])]))}}),ua=ae(ga,[["__scopeId","data-v-169a1855"]]),fa=`<template>\r
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
`,ma={class:"demo-slot-searchbox"},ha={class:"demo-slot-searchbox__log"},va={class:"demo-slot-searchbox__log-content"},ba={class:"demo-slot-searchbox__canvas"},_a={class:"compact-search-box__filter-bar"},xa=["onClick","title"],ya={class:"compact-search-box__input-wrapper"},wa=["onUpdate:modelValue","onKeydown"],ka={class:"compact-search-box__controls"},Ca={key:0,class:"compact-search-box__counter"},Sa={key:1,class:"compact-search-box__counter"},Ea=["disabled","onClick"],Na=["disabled","onClick"],Da=["onClick"],Ta={key:0,class:"compact-search-box__dropdown"},Fa=["onClick"],$a={class:"compact-search-box__result-info"},Ma={class:"compact-search-box__result-label"},La={class:"compact-search-box__result-meta"},Ra={class:"compact-search-box__result-type"},za={class:"compact-search-box__result-id"},Aa={key:1,class:"compact-search-box__empty"},Pa=j({__name:"demo-slot-searchbox",setup(b){const e=E([]),r=E(),o=E("all"),s=[{value:"all",label:"全部",description:"搜索所有节点（默认行为）"},{value:"rect",label:"矩形",description:"仅搜索 rect 类型的节点"},{value:"circle",label:"圆形",description:"仅搜索 circle 类型的节点"},{value:"ellipse",label:"椭圆",description:"仅搜索 ellipse 类型的节点"}];function l(p){const c=new Date().toLocaleTimeString();e.value.push(`[${c}] ${p}`)}function g(){e.value=[]}function i(p,c){o.value=p,p==="all"?(c(null),l("🔍 已切换到【全部】模式"),l("   → 输入关键词即可搜索所有节点")):(c((N,k)=>{var G;if(N.shape!==p)return!1;if(!k)return!0;const x=k.toLowerCase(),u=N.getProp("label")||N.label;if(u&&String(u).toLowerCase().includes(x))return!0;const y=(G=N.getData())==null?void 0:G.label;if(y&&String(y).toLowerCase().includes(x))return!0;const F=N.id;return!!(F&&F.toLowerCase().includes(x))}),l(`🔍 已切换到【${{rect:"矩形",circle:"圆形",ellipse:"椭圆"}[p]||p}】模式`),l(`   → 仅搜索 ${p} 类型的节点`))}function a(p,c){l("✅ 画布初始化完成");const f=[{shape:"rect",x:100,y:100,width:100,height:60,label:"开始节点"},{shape:"rect",x:300,y:100,width:100,height:60,label:"处理数据"},{shape:"circle",x:500,y:130,width:80,height:80,label:"验证结果"},{shape:"ellipse",x:100,y:250,width:120,height:60,label:"发送通知"},{shape:"rect",x:300,y:250,width:100,height:60,label:"结束节点"},{shape:"circle",x:500,y:280,width:80,height:80,label:"备份数据"}];f.forEach(m=>{c.addNode(m)}),l(`🎨 已添加 ${f.length} 个测试节点`),l("   → 3个矩形(rect) + 2个圆形(circle) + 1个椭圆(ellipse)"),l("💡 提示: 按 Ctrl+F 打开搜索框"),l("💡 测试步骤:"),l('   1. 输入"节点"关键词'),l("   2. 点击不同过滤按钮观察结果变化"),l('   3. "矩形"模式只显示3个rect节点'),l('   4. "圆形"模式只显示2个circle节点')}function d(p){return p.shape||"unknown"}function t(p){return`ID: ${(p.id||"").substring(0,8)}`}return Ue(()=>r.value,p=>{p&&Ln(()=>{p.focus()})}),(p,c)=>(h(),_("div",ma,[n("div",ha,[n("div",{class:"demo-slot-searchbox__log-header"},[c[1]||(c[1]=n("h4",null,"事件日志",-1)),n("button",{class:"demo-slot-searchbox__clear-btn",onClick:g,title:"清除日志"}," 清除 ")]),n("div",va,[(h(!0),_(U,null,ee(e.value,(f,m)=>(h(),_("div",{key:m,class:"demo-slot-searchbox__log-item"},L(f),1))),128))])]),n("div",ba,[v(D(le),{mode:"design",onReady:a},{"search-box":M(({keyword:f,results:m,currentIndex:N,total:k,next:x,prev:u,close:y,selectByIndex:F,getNodeLabel:G,setFilter:I})=>[n("div",{class:"compact-search-box",onClick:c[0]||(c[0]=We(()=>{},["stop"]))},[n("div",_a,[c[2]||(c[2]=n("span",{class:"compact-search-box__filter-label"},"过滤模式:",-1)),(h(),_(U,null,ee(s,P=>n("button",{key:P.value,class:we(["compact-search-box__filter-btn",{"compact-search-box__filter-btn--active":o.value===P.value}]),onClick:O=>i(P.value,I),title:P.description},L(P.label),11,xa)),64))]),n("div",ya,[Ee(n("input",{ref_key:"searchInputRef",ref:r,"onUpdate:modelValue":P=>f.value=P,class:"compact-search-box__input",type:"text",placeholder:"搜索节点...",onKeydown:[gn(y,["esc"]),gn(We(x,["exact"]),["enter"]),gn(We(u,["shift"]),["enter"])]},null,40,wa),[[Rn,f.value]]),n("div",ka,[k.value>0?(h(),_("span",Ca,L(N.value+1)+" / "+L(k.value),1)):f.value&&k.value===0?(h(),_("span",Sa," 0 / 0 ")):B("",!0),n("button",{class:"compact-search-box__nav-btn",disabled:k.value===0,onClick:u,title:"上一个 (Shift+Enter)"}," ↑ ",8,Ea),n("button",{class:"compact-search-box__nav-btn",disabled:k.value===0,onClick:x,title:"下一个 (Enter)"}," ↓ ",8,Na),n("button",{class:"compact-search-box__close-btn",onClick:y,title:"关闭 (ESC)"}," ✕ ",8,Da)])]),m.value.length>0?(h(),_("div",Ta,[(h(!0),_(U,null,ee(m.value,(P,O)=>(h(),_("div",{key:P.id,class:we(["compact-search-box__result-item",{"compact-search-box__result-item--active":O===N.value}]),onClick:q=>{F(O),l(`📍 已选中: ${G(P)}`)}},[c[3]||(c[3]=n("div",{class:"compact-search-box__result-icon"},"📍",-1)),n("div",$a,[n("div",Ma,L(G(P)),1),n("div",La,[n("span",Ra,L(d(P)),1),n("span",za,L(t(P)),1)])]),c[4]||(c[4]=n("div",{class:"compact-search-box__result-arrow"},"→",-1))],10,Fa))),128))])):f.value?(h(),_("div",Aa," 未找到匹配的节点 ")):B("",!0)])]),_:1})])]))}}),Ia=ae(Pa,[["__scopeId","data-v-dfcfb212"]]),Ga=`<template>\r
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
`,Ba={class:"demo-slot-canvas-menu"},Oa={class:"demo-slot-canvas-menu__log"},Ha={class:"demo-slot-canvas-menu__log-content"},Wa={class:"demo-slot-canvas-menu__canvas"},Va=["onClick"],Ua={key:1,class:"canvas-context-menu__divider"},Za=["onClick"],ja=["onClick"],qa={key:4,class:"canvas-context-menu__divider"},Ya=["onClick"],Xa=["onClick"],Ja=["onClick"],Ka=["onClick"],Qa={key:9,class:"canvas-context-menu__divider"},el=["onClick"],nl=["onClick"],rl=["onClick"],tl={key:13,class:"canvas-context-menu__divider"},ol=["onClick"],sl=j({__name:"demo-slot-canvasMenu",setup(b){const e=E([]);function r(d){const t=new Date().toLocaleTimeString();e.value.push(`[${t}] ${d}`),setTimeout(()=>{const p=document.querySelector(".demo-slot-canvas-menu__log-content");p&&(p.scrollTop=p.scrollHeight)},0)}function o(){e.value=[]}function s(d){r("🔧 初始化自定义节点样式..."),_e.registerNode("custom-circle",{inherit:"circle",width:100,height:100,attrs:{body:{fill:"#5F95FF",stroke:"#2563EB",strokeWidth:2},label:{fill:"#fff",fontSize:14,fontWeight:500}}},!0),_e.registerNode("custom-rect",{inherit:"rect",width:140,height:70,attrs:{body:{fill:"#47C769",stroke:"#27AE60",strokeWidth:2,rx:8,ry:8},label:{fill:"#fff",fontSize:14,fontWeight:500}}},!0),r("✅ 节点样式注册完成")}function l(d,t){r(`🖱️ 菜单点击: ${g(d)}`),t(d)}function g(d){return{selectAll:"全选节点",undo:"撤销",redo:"重做",zoomIn:"放大",zoomOut:"缩小",fitView:"适应窗口",resetView:"重置视图",paste:"粘贴",import:"导入 JSON",export:"导出 JSON",clear:"清空画布"}[d]||d}function i(d,t){r("✅ 画布初始化完成"),a(t),r("💡 提示: 在画布空白处点击右键打开菜单")}function a(d){const t=d.addNode({shape:"custom-circle",x:100,y:100,label:"开始",data:{description:"流程开始节点",owner:"张三",priority:"high"}}),p=d.addNode({shape:"custom-rect",x:300,y:100,label:"处理",data:{description:"执行业务处理",owner:"李四",priority:"medium"}}),c=d.addNode({shape:"custom-circle",x:500,y:100,label:"结束",data:{description:"流程结束",owner:"王五",priority:"low"}});d.addEdge({source:t,target:p,shape:"flow-edge",labels:[{attrs:{text:{text:"通过"}}}],data:{lineType:"normal",condition:'status === "approved"',description:"审批通过后的流转",isDefault:!1}}),d.addEdge({source:p,target:c,shape:"flow-edge",labels:[{attrs:{text:{text:"完成"}}}],data:{lineType:"normal",condition:"",description:"处理完成后结束",isDefault:!0}})}return(d,t)=>(h(),_("div",Ba,[n("div",Oa,[n("div",{class:"demo-slot-canvas-menu__log-header"},[t[1]||(t[1]=n("h4",null,"事件日志",-1)),n("button",{class:"demo-slot-canvas-menu__clear-btn",onClick:o,title:"清除日志"}," 清除 ")]),n("div",Ha,[(h(!0),_(U,null,ee(e.value,(p,c)=>(h(),_("div",{key:c,class:"demo-slot-canvas-menu__log-item"},L(p),1))),128))])]),n("div",Wa,[v(D(le),{mode:"design","before-graph-init":s,onReady:i},{"canvas-menu":M(({capabilities:p,onSelect:c})=>[n("div",{class:"canvas-context-menu",onClick:t[0]||(t[0]=We(()=>{},["stop"]))},[t[13]||(t[13]=n("div",{class:"canvas-context-menu__header"},[n("span",{class:"canvas-context-menu__title"},"画布菜单")],-1)),p.canSelectAll&&p.canMultipleSelect?(h(),_("div",{key:0,class:"canvas-context-menu__item",onClick:f=>l("selectAll",c)},[...t[2]||(t[2]=[n("span",{class:"canvas-context-menu__icon"},"☑",-1),n("span",{class:"canvas-context-menu__text"},"全选节点",-1),n("span",{class:"canvas-context-menu__shortcut"},"Ctrl+A",-1)])],8,Va)):B("",!0),p.canSelectAll&&p.canMultipleSelect&&(p.canUndo||p.canRedo)?(h(),_("div",Ua)):B("",!0),p.canUndo?(h(),_("div",{key:2,class:"canvas-context-menu__item",onClick:f=>l("undo",c)},[...t[3]||(t[3]=[n("span",{class:"canvas-context-menu__icon"},"↶",-1),n("span",{class:"canvas-context-menu__text"},"撤销",-1),n("span",{class:"canvas-context-menu__shortcut"},"Ctrl+Z",-1)])],8,Za)):B("",!0),p.canRedo?(h(),_("div",{key:3,class:"canvas-context-menu__item",onClick:f=>l("redo",c)},[...t[4]||(t[4]=[n("span",{class:"canvas-context-menu__icon"},"↷",-1),n("span",{class:"canvas-context-menu__text"},"重做",-1),n("span",{class:"canvas-context-menu__shortcut"},"Ctrl+Y",-1)])],8,ja)):B("",!0),(p.canUndo||p.canRedo)&&(p.canZoom||p.canFitView)?(h(),_("div",qa)):B("",!0),p.canZoom?(h(),_("div",{key:5,class:"canvas-context-menu__item",onClick:f=>l("zoomIn",c)},[...t[5]||(t[5]=[n("span",{class:"canvas-context-menu__icon"},"🔍+",-1),n("span",{class:"canvas-context-menu__text"},"放大",-1),n("span",{class:"canvas-context-menu__shortcut"},"Ctrl+=",-1)])],8,Ya)):B("",!0),p.canZoom?(h(),_("div",{key:6,class:"canvas-context-menu__item",onClick:f=>l("zoomOut",c)},[...t[6]||(t[6]=[n("span",{class:"canvas-context-menu__icon"},"🔍-",-1),n("span",{class:"canvas-context-menu__text"},"缩小",-1),n("span",{class:"canvas-context-menu__shortcut"},"Ctrl+-",-1)])],8,Xa)):B("",!0),p.canFitView?(h(),_("div",{key:7,class:"canvas-context-menu__item",onClick:f=>l("fitView",c)},[...t[7]||(t[7]=[n("span",{class:"canvas-context-menu__icon"},"⛶",-1),n("span",{class:"canvas-context-menu__text"},"适应窗口",-1),n("span",{class:"canvas-context-menu__shortcut"},"Ctrl+0",-1)])],8,Ja)):B("",!0),p.canResetView?(h(),_("div",{key:8,class:"canvas-context-menu__item",onClick:f=>l("resetView",c)},[...t[8]||(t[8]=[n("span",{class:"canvas-context-menu__icon"},"⌖",-1),n("span",{class:"canvas-context-menu__text"},"重置视图",-1),n("span",{class:"canvas-context-menu__shortcut"},"Ctrl+Shift+H",-1)])],8,Ka)):B("",!0),(p.canZoom||p.canFitView)&&(p.canImport||p.canExport)?(h(),_("div",Qa)):B("",!0),p.canPaste?(h(),_("div",{key:10,class:"canvas-context-menu__item",onClick:f=>l("paste",c)},[...t[9]||(t[9]=[n("span",{class:"canvas-context-menu__icon"},"📋",-1),n("span",{class:"canvas-context-menu__text"},"粘贴",-1),n("span",{class:"canvas-context-menu__shortcut"},"Ctrl+V",-1)])],8,el)):B("",!0),p.canImport?(h(),_("div",{key:11,class:"canvas-context-menu__item",onClick:f=>l("import",c)},[...t[10]||(t[10]=[n("span",{class:"canvas-context-menu__icon"},"📥",-1),n("span",{class:"canvas-context-menu__text"},"导入 JSON",-1)])],8,nl)):B("",!0),p.canExport?(h(),_("div",{key:12,class:"canvas-context-menu__item",onClick:f=>l("export",c)},[...t[11]||(t[11]=[n("span",{class:"canvas-context-menu__icon"},"📤",-1),n("span",{class:"canvas-context-menu__text"},"导出 JSON",-1)])],8,rl)):B("",!0),(p.canImport||p.canExport)&&p.canDelete?(h(),_("div",tl)):B("",!0),p.canDelete?(h(),_("div",{key:14,class:"canvas-context-menu__item canvas-context-menu__item--danger",onClick:f=>l("clear",c)},[...t[12]||(t[12]=[n("span",{class:"canvas-context-menu__icon"},"🗑",-1),n("span",{class:"canvas-context-menu__text"},"清空画布",-1)])],8,ol)):B("",!0)])]),_:1})])]))}}),il=ae(sl,[["__scopeId","data-v-57f05e5e"]]),al=`\uFEFF<template>\r
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
`,ll={class:"demo-slot-node-menu"},dl={class:"demo-slot-node-menu__log"},cl={class:"demo-slot-node-menu__log-content"},pl={class:"demo-slot-node-menu__canvas"},gl={class:"node-context-menu__header"},ul={class:"node-context-menu__title"},fl={class:"node-context-menu__info"},ml={class:"node-context-menu__info-item"},hl={class:"node-context-menu__info-value"},vl={class:"node-context-menu__info-item"},bl={class:"node-context-menu__info-value"},_l={key:0,class:"node-context-menu__info-item"},xl={class:"node-context-menu__info-value"},yl=["onClick"],wl=["onClick"],kl={key:2,class:"node-context-menu__divider"},Cl=["onClick"],Sl=["onClick"],El={key:5,class:"node-context-menu__divider"},Nl=["onClick"],Dl=["onClick"],Tl={key:8,class:"node-context-menu__divider"},Fl=["onClick"],$l=["onClick"],Ml={key:11,class:"node-context-menu__divider"},Ll=["onClick"],Rl=j({__name:"demo-slot-nodeMenu",setup(b){const e=E([]);function r(f){const m=new Date().toLocaleTimeString();e.value.push(`[${m}] ${f}`),setTimeout(()=>{const N=document.querySelector(".demo-slot-node-menu__log-content");N&&(N.scrollTop=N.scrollHeight)},0)}function o(){e.value=[]}function s(f){r("🔧 初始化自定义节点样式..."),_e.registerNode("custom-circle",{inherit:"circle",width:100,height:100,attrs:{body:{fill:"#5F95FF",stroke:"#2563EB",strokeWidth:2},label:{fill:"#fff",fontSize:14,fontWeight:500}}},!0),_e.registerNode("custom-rect",{inherit:"rect",width:140,height:70,attrs:{body:{fill:"#47C769",stroke:"#27AE60",strokeWidth:2,rx:8,ry:8},label:{fill:"#fff",fontSize:14,fontWeight:500}}},!0),_e.registerNode("custom-warning",{inherit:"rect",width:140,height:70,attrs:{body:{fill:"#FFA940",stroke:"#FA8C16",strokeWidth:2,rx:8,ry:8},label:{fill:"#fff",fontSize:14,fontWeight:600}}},!0),r("✅ 节点样式注册完成")}function l(f){const m=f.getProp("label");if(m)return String(m);const N=f.getData();return N!=null&&N.label?N.label:f.id.substring(0,8)+"..."}function g(f,m,N){return N?"多选节点菜单":m?"组节点菜单":"节点菜单"}function i(f,m,N){r(`🖱️ 节点菜单: ${t(f)} - ${l(m)}`),N(f)}function a(f,m){m.centerCell(f,{padding:100,animation:{duration:300,easing:"ease-in-out"}}),r(`🎯 居中显示节点: ${l(f)}`)}function d(f,m){const N=m.getConnectedEdges(f);N.forEach(k=>{k.attr("line/stroke","#FF4D4F"),k.attr("line/strokeWidth",3),setTimeout(()=>{k.attr("line/stroke","#8c9bb5"),k.attr("line/strokeWidth",1.5)},3e3)}),r(`🔗 高亮连线: ${N.length} 条相关连线（3秒后恢复）`)}function t(f){return{group:"成组",ungroup:"解组",copy:"复制节点",paste:"粘贴节点",toFront:"层级前置",toBack:"层级后置",delete:"删除节点"}[f]||f}function p(f,m){r("✅ 画布初始化完成"),c(m),r("✅ 节点初始化完成，请右键节点菜单测试")}function c(f){const m=f.addNode({shape:"custom-circle",x:100,y:100,label:"开始",data:{description:"流程开始节点",owner:"张三",priority:"high"}}),N=f.addNode({shape:"custom-rect",x:300,y:100,label:"处理",data:{description:"执行业务处理",owner:"李四",priority:"medium"}}),k=f.addNode({shape:"custom-circle",x:500,y:100,label:"结束",data:{description:"流程结束",owner:"王五",priority:"low"}});f.addEdge({source:m,target:N,shape:"flow-edge",labels:[{attrs:{text:{text:"通过"}}}],data:{lineType:"normal",condition:'status === "approved"',description:"审批通过后的流转",isDefault:!1}}),f.addEdge({source:N,target:k,shape:"flow-edge",labels:[{attrs:{text:{text:"完成"}}}],data:{lineType:"normal",condition:"",description:"处理完成后结束",isDefault:!0}})}return(f,m)=>(h(),_("div",ll,[n("div",dl,[n("div",{class:"demo-slot-node-menu__log-header"},[m[1]||(m[1]=n("h4",null,"事件日志",-1)),n("button",{class:"demo-slot-node-menu__clear-btn",onClick:o,title:"清除日志"}," 清除 ")]),n("div",cl,[(h(!0),_(U,null,ee(e.value,(N,k)=>(h(),_("div",{key:k,class:"demo-slot-node-menu__log-item"},L(N),1))),128))])]),n("div",pl,[v(D(le),{mode:"design","before-graph-init":s,onReady:p},{"node-menu":M(({node:N,isGroup:k,isMultiSelect:x,capabilities:u,designer:y,graph:F,onSelect:G})=>[n("div",{class:"node-context-menu",onClick:m[0]||(m[0]=We(()=>{},["stop"]))},[n("div",gl,[n("span",ul,L(g(N,k,x)),1)]),n("div",fl,[n("div",ml,[m[2]||(m[2]=n("span",{class:"node-context-menu__info-label"},"节点名称:",-1)),n("span",hl,L(l(N)),1)]),n("div",vl,[m[3]||(m[3]=n("span",{class:"node-context-menu__info-label"},"节点类型:",-1)),n("span",bl,L(N.shape),1)]),x?(h(),_("div",_l,[m[4]||(m[4]=n("span",{class:"node-context-menu__info-label"},"选中数量:",-1)),n("span",xl,L((F==null?void 0:F.getSelectedCells().length)||0)+" 个",1)])):B("",!0)]),m[14]||(m[14]=n("div",{class:"node-context-menu__divider"},null,-1)),x&&u.canGroup?(h(),_("div",{key:0,class:"node-context-menu__item",onClick:I=>i("group",N,G)},[...m[5]||(m[5]=[n("span",{class:"node-context-menu__icon"},"📦",-1),n("span",{class:"node-context-menu__text"},"成组",-1),n("span",{class:"node-context-menu__shortcut"},"Ctrl+G",-1)])],8,yl)):B("",!0),k&&u.canGroup?(h(),_("div",{key:1,class:"node-context-menu__item",onClick:I=>i("ungroup",N,G)},[...m[6]||(m[6]=[n("span",{class:"node-context-menu__icon"},"📂",-1),n("span",{class:"node-context-menu__text"},"解组",-1),n("span",{class:"node-context-menu__shortcut"},"Ctrl+Shift+G",-1)])],8,wl)):B("",!0),(x||k)&&u.canGroup&&(u.canCopy||u.canPaste)?(h(),_("div",kl)):B("",!0),u.canCopy?(h(),_("div",{key:3,class:"node-context-menu__item",onClick:I=>i("copy",N,G)},[...m[7]||(m[7]=[n("span",{class:"node-context-menu__icon"},"📄",-1),n("span",{class:"node-context-menu__text"},"复制节点",-1),n("span",{class:"node-context-menu__shortcut"},"Ctrl+C",-1)])],8,Cl)):B("",!0),u.canPaste?(h(),_("div",{key:4,class:"node-context-menu__item",onClick:I=>i("paste",N,G)},[...m[8]||(m[8]=[n("span",{class:"node-context-menu__icon"},"📋",-1),n("span",{class:"node-context-menu__text"},"粘贴节点",-1),n("span",{class:"node-context-menu__shortcut"},"Ctrl+V",-1)])],8,Sl)):B("",!0),(u.canCopy||u.canPaste)&&(u.canToFront||u.canToBack)?(h(),_("div",El)):B("",!0),u.canToFront?(h(),_("div",{key:6,class:"node-context-menu__item",onClick:I=>i("toFront",N,G)},[...m[9]||(m[9]=[n("span",{class:"node-context-menu__icon"},"⬆️",-1),n("span",{class:"node-context-menu__text"},"层级前置",-1)])],8,Nl)):B("",!0),u.canToBack?(h(),_("div",{key:7,class:"node-context-menu__item",onClick:I=>i("toBack",N,G)},[...m[10]||(m[10]=[n("span",{class:"node-context-menu__icon"},"⬇️",-1),n("span",{class:"node-context-menu__text"},"层级后置",-1)])],8,Dl)):B("",!0),(u.canToFront||u.canToBack)&&F?(h(),_("div",Tl)):B("",!0),F&&y?(h(),_("div",{key:9,class:"node-context-menu__item",onClick:I=>a(N,F)},[...m[11]||(m[11]=[n("span",{class:"node-context-menu__icon"},"🎯",-1),n("span",{class:"node-context-menu__text"},"居中显示",-1)])],8,Fl)):B("",!0),F?(h(),_("div",{key:10,class:"node-context-menu__item",onClick:I=>d(N,F)},[...m[12]||(m[12]=[n("span",{class:"node-context-menu__icon"},"🔗",-1),n("span",{class:"node-context-menu__text"},"高亮连线",-1)])],8,$l)):B("",!0),u.canDelete?(h(),_("div",Ml)):B("",!0),u.canDelete?(h(),_("div",{key:12,class:"node-context-menu__item node-context-menu__item--danger",onClick:I=>i("delete",N,G)},[...m[13]||(m[13]=[n("span",{class:"node-context-menu__icon"},"🗑",-1),n("span",{class:"node-context-menu__text"},"删除节点",-1),n("span",{class:"node-context-menu__shortcut"},"Delete",-1)])],8,Ll)):B("",!0)])]),_:1})])]))}}),zl=ae(Rl,[["__scopeId","data-v-24461e4f"]]),Al=`\uFEFF<template>\r
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
`,Pl={class:"demo-slot-edge-menu"},Il={class:"demo-slot-edge-menu__log"},Gl={class:"demo-slot-edge-menu__log-content"},Bl={class:"demo-slot-edge-menu__canvas"},Ol={class:"edge-context-menu__info"},Hl={class:"edge-context-menu__info-item"},Wl={class:"edge-context-menu__info-value"},Vl={class:"edge-context-menu__info-item"},Ul={class:"edge-context-menu__info-value"},Zl={class:"edge-context-menu__info-item"},jl={class:"edge-context-menu__info-value"},ql={class:"edge-context-menu__info-item"},Yl={class:"edge-context-menu__info-value"},Xl=["onClick"],Jl=["onClick"],Kl=["onClick"],Ql=["onClick"],ed=["onClick"],nd=["onClick"],rd=["onClick"],td={key:0,class:"edge-context-menu__divider"},od=["onClick"],sd=["onClick"],id=["onClick"],ad={key:4,class:"edge-context-menu__divider"},ld=["onClick"],dd=j({__name:"demo-slot-edgeMenu",setup(b){const e=E([]);function r(x){const u=new Date().toLocaleTimeString();e.value.push(`[${u}] ${x}`),setTimeout(()=>{const y=document.querySelector(".demo-slot-edge-menu__log-content");y&&(y.scrollTop=y.scrollHeight)},0)}function o(){e.value=[]}function s(x){r("🔧 初始化自定义节点样式..."),_e.registerNode("custom-circle",{inherit:"circle",width:100,height:100,attrs:{body:{fill:"#5F95FF",stroke:"#2563EB",strokeWidth:2},label:{fill:"#fff",fontSize:14,fontWeight:500}}},!0),_e.registerNode("custom-rect",{inherit:"rect",width:140,height:70,attrs:{body:{fill:"#47C769",stroke:"#27AE60",strokeWidth:2,rx:8,ry:8},label:{fill:"#fff",fontSize:14,fontWeight:500}}},!0)}function l(x){var y,F;const u=x.getLabels();return u&&u.length>0&&((F=(y=u[0].attrs)==null?void 0:y.text)==null?void 0:F.text)||"无标签"}function g(x){const u=x.getSourceNode();if(u){const y=u.getProp("label");return y?String(y):u.id.substring(0,8)+"..."}return"未知"}function i(x){const u=x.getTargetNode();if(u){const y=u.getProp("label");return y?String(y):u.id.substring(0,8)+"..."}return"未知"}function a(x,u,y){r(`🖱️ 连线菜单: 删除连线 - ${l(u)}`),y(x)}function d(x,u){const y=l(x),F=prompt("请输入新的标签:",y==="无标签"?"":y);F!==null&&u&&(u.updateEdgeLabelText(x,F),r(`✏️ 编辑标签: ${y} → ${F}`))}function t(x,u){const y={normal:{name:"normal"},smooth:{name:"smooth"},rounded:{name:"rounded",args:{radius:10}}};x.setConnector(y[u]),r(`━ 样式修改: ${{normal:"直线",smooth:"平滑曲线",rounded:"圆角折线"}[u]} - ${l(x)}`)}function p(x,u,y){x.attr("line/stroke",u),x.attr("line/strokeWidth",2),r(`● 颜色修改: ${y} - ${l(x)}`)}function c(x,u){u.centerCell(x,{padding:100,animation:{duration:300,easing:"ease-in-out"}}),r(`🎯 居中显示连线: ${l(x)}`)}function f(x,u){const y=x.getSourceNode(),F=x.getTargetNode(),G=x.attr("line/stroke")||"#8c9bb5",I=x.attr("line/strokeWidth")||1.5;x.attr("line/stroke","#FF4D4F"),x.attr("line/strokeWidth",3),y&&(y.attr("body/stroke","#FF4D4F"),y.attr("body/strokeWidth",3)),F&&(F.attr("body/stroke","#FF4D4F"),F.attr("body/strokeWidth",3)),r(`✨ 高亮路径: ${g(x)} → ${i(x)}`),setTimeout(()=>{x.attr("line/stroke",G),x.attr("line/strokeWidth",I),y&&(y.attr("body/stroke","#27AE60"),y.attr("body/strokeWidth",2)),F&&(F.attr("body/stroke","#27AE60"),F.attr("body/strokeWidth",2)),r("⏰ 高亮已恢复")},3e3)}function m(x,u){const y=x.getSource(),F=x.getTarget();x.getLabels(),x.setSource(F),x.setTarget(y),r(`🔄 反转连线: ${g(x)} ⇄ ${i(x)}`)}function N(x,u){u=x.getGraph(),r("FlowDesigner 初始化完成"),r("✨ 将鼠标悬停在节点上查看自定义 Tooltip"),k(u)}function k(x){const u=x.addNode({shape:"custom-circle",x:100,y:100,label:"开始",data:{description:"流程开始节点",owner:"张三",priority:"high"}}),y=x.addNode({shape:"custom-rect",x:300,y:100,label:"处理",data:{description:"执行业务处理",owner:"李四",priority:"medium"}}),F=x.addNode({shape:"custom-circle",x:500,y:100,label:"结束",data:{description:"流程结束",owner:"王五",priority:"low"}});x.addEdge({source:u,target:y,shape:"flow-edge",labels:[{attrs:{text:{text:"通过"}}}],data:{lineType:"normal",condition:'status === "approved"',description:"审批通过后的流转",isDefault:!1}}),x.addEdge({source:y,target:F,shape:"flow-edge",labels:[{attrs:{text:{text:"完成"}}}],data:{lineType:"normal",condition:"",description:"处理完成后结束",isDefault:!0}})}return(x,u)=>(h(),_("div",Pl,[n("div",Il,[n("div",{class:"demo-slot-edge-menu__log-header"},[u[1]||(u[1]=n("h4",null,"事件日志",-1)),n("button",{class:"demo-slot-edge-menu__clear-btn",onClick:o,title:"清除日志"}," 清除 ")]),n("div",Gl,[(h(!0),_(U,null,ee(e.value,(y,F)=>(h(),_("div",{key:F,class:"demo-slot-edge-menu__log-item"},L(y),1))),128))])]),n("div",Bl,[v(D(le),{mode:"design","before-graph-init":s,onReady:N},{"edge-menu":M(({edge:y,capabilities:F,designer:G,graph:I,onSelect:P})=>[n("div",{class:"edge-context-menu",onClick:u[0]||(u[0]=We(()=>{},["stop"]))},[u[17]||(u[17]=n("div",{class:"edge-context-menu__header"},[n("span",{class:"edge-context-menu__title"},"连线菜单")],-1)),n("div",Ol,[n("div",Hl,[u[2]||(u[2]=n("span",{class:"edge-context-menu__info-label"},"连线标签:",-1)),n("span",Wl,L(l(y)),1)]),n("div",Vl,[u[3]||(u[3]=n("span",{class:"edge-context-menu__info-label"},"源节点:",-1)),n("span",Ul,L(g(y)),1)]),n("div",Zl,[u[4]||(u[4]=n("span",{class:"edge-context-menu__info-label"},"目标节点:",-1)),n("span",jl,L(i(y)),1)]),n("div",ql,[u[5]||(u[5]=n("span",{class:"edge-context-menu__info-label"},"连线类型:",-1)),n("span",Yl,L(y.shape),1)])]),u[18]||(u[18]=n("div",{class:"edge-context-menu__divider"},null,-1)),n("div",{class:"edge-context-menu__item",onClick:O=>d(y,G)},[...u[6]||(u[6]=[n("span",{class:"edge-context-menu__icon"},"✏️",-1),n("span",{class:"edge-context-menu__text"},"编辑标签",-1)])],8,Xl),u[19]||(u[19]=n("div",{class:"edge-context-menu__divider"},null,-1)),n("div",{class:"edge-context-menu__item",onClick:O=>t(y,"normal")},[...u[7]||(u[7]=[n("span",{class:"edge-context-menu__icon"},"━",-1),n("span",{class:"edge-context-menu__text"},"直线样式",-1)])],8,Jl),n("div",{class:"edge-context-menu__item",onClick:O=>t(y,"smooth")},[...u[8]||(u[8]=[n("span",{class:"edge-context-menu__icon"},"〰️",-1),n("span",{class:"edge-context-menu__text"},"平滑曲线",-1)])],8,Kl),n("div",{class:"edge-context-menu__item",onClick:O=>t(y,"rounded")},[...u[9]||(u[9]=[n("span",{class:"edge-context-menu__icon"},"⌝",-1),n("span",{class:"edge-context-menu__text"},"圆角折线",-1)])],8,Ql),u[20]||(u[20]=n("div",{class:"edge-context-menu__divider"},null,-1)),n("div",{class:"edge-context-menu__item",onClick:O=>p(y,"#1890ff","蓝色")},[...u[10]||(u[10]=[n("span",{class:"edge-context-menu__icon",style:{color:"#1890ff"}},"●",-1),n("span",{class:"edge-context-menu__text"},"蓝色连线",-1)])],8,ed),n("div",{class:"edge-context-menu__item",onClick:O=>p(y,"#52c41a","绿色")},[...u[11]||(u[11]=[n("span",{class:"edge-context-menu__icon",style:{color:"#52c41a"}},"●",-1),n("span",{class:"edge-context-menu__text"},"绿色连线",-1)])],8,nd),n("div",{class:"edge-context-menu__item",onClick:O=>p(y,"#ff4d4f","红色")},[...u[12]||(u[12]=[n("span",{class:"edge-context-menu__icon",style:{color:"#ff4d4f"}},"●",-1),n("span",{class:"edge-context-menu__text"},"红色连线",-1)])],8,rd),I?(h(),_("div",td)):B("",!0),I?(h(),_("div",{key:1,class:"edge-context-menu__item",onClick:O=>c(y,I)},[...u[13]||(u[13]=[n("span",{class:"edge-context-menu__icon"},"🎯",-1),n("span",{class:"edge-context-menu__text"},"居中显示",-1)])],8,od)):B("",!0),I?(h(),_("div",{key:2,class:"edge-context-menu__item",onClick:O=>f(y,I)},[...u[14]||(u[14]=[n("span",{class:"edge-context-menu__icon"},"✨",-1),n("span",{class:"edge-context-menu__text"},"高亮路径",-1)])],8,sd)):B("",!0),I?(h(),_("div",{key:3,class:"edge-context-menu__item",onClick:O=>m(y,I)},[...u[15]||(u[15]=[n("span",{class:"edge-context-menu__icon"},"🔄",-1),n("span",{class:"edge-context-menu__text"},"反转连线",-1)])],8,id)):B("",!0),F.canDelete?(h(),_("div",ad)):B("",!0),F.canDelete?(h(),_("div",{key:5,class:"edge-context-menu__item edge-context-menu__item--danger",onClick:O=>a("delete",y,P)},[...u[16]||(u[16]=[n("span",{class:"edge-context-menu__icon"},"🗑",-1),n("span",{class:"edge-context-menu__text"},"删除连线",-1),n("span",{class:"edge-context-menu__shortcut"},"Delete",-1)])],8,ld)):B("",!0)])]),_:1})])]))}}),cd=ae(dd,[["__scopeId","data-v-8b7c70a6"]]),pd=`\uFEFF<template>\r
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
`,gd={class:"demo-slot-node-tooltip"},ud={class:"demo-slot-node-tooltip__log"},fd={class:"demo-slot-node-tooltip__log-content"},md={key:0,class:"demo-slot-node-tooltip__log-empty"},hd={class:"demo-slot-node-tooltip__canvas"},vd={class:"my-node-tooltip",style:{color:"black"}},bd=j({__name:"demo-slot-nodeTooltip",setup(b){const e=E([]);let r=null,o=null;const s=je({design:{showToolbar:!1,showNodePalette:!1,showPropertiesPanel:!1,showContextMenu:!1,canNodeTooltip:!0,canHoverNode:!0}});function l(t){const p=new Date().toLocaleTimeString("zh-CN",{hour12:!1});e.value.push(`[${p}] ${t}`),setTimeout(()=>{const c=document.querySelector(".demo-slot-node-tooltip__log-content");c&&(c.scrollTop=c.scrollHeight)},10)}function g(){e.value=[],l("日志已清除")}function i(t){r=t,o=r.getGraph(),l("FlowDesigner 初始化完成"),l("✨ 将鼠标悬停在节点上查看自定义 Tooltip"),a(o)}function a(t){if(!r)return;const p=t.addNode({shape:"custom-circle",x:100,y:100,label:"开始",data:{description:"流程开始节点",owner:"张三",priority:"high"}}),c=t.addNode({shape:"custom-rect",x:300,y:100,label:"处理",data:{description:"执行业务处理",owner:"李四",priority:"medium"}}),f=t.addNode({shape:"custom-circle",x:500,y:100,label:"结束",data:{description:"流程结束",owner:"王五",priority:"low"}});t.addEdge({source:p,target:c,shape:"flow-edge",labels:[{attrs:{text:{text:"通过"}}}],data:{lineType:"normal",condition:'status === "approved"',description:"审批通过后的流转",isDefault:!1}}),t.addEdge({source:c,target:f,shape:"flow-edge",labels:[{attrs:{text:{text:"完成"}}}],data:{lineType:"normal",condition:"",description:"处理完成后结束",isDefault:!0}})}function d({Graph:t}){t.registerNode("custom-circle",{inherit:"circle",width:100,height:100,attrs:{body:{fill:"#5F95FF",stroke:"#2563EB",strokeWidth:2},label:{fill:"#fff",fontSize:14,fontWeight:500}}},!0),t.registerNode("custom-rect",{inherit:"rect",width:140,height:70,attrs:{body:{fill:"#47C769",stroke:"#27AE60",strokeWidth:2,rx:8,ry:8},label:{fill:"#fff",fontSize:14,fontWeight:500}}},!0)}return(t,p)=>(h(),_("div",gd,[n("div",ud,[n("div",{class:"demo-slot-node-tooltip__log-header"},[p[0]||(p[0]=n("h4",null,"事件日志",-1)),n("button",{class:"demo-slot-node-tooltip__clear-btn",onClick:g,title:"清除日志"}," 清除 ")]),n("div",fd,[(h(!0),_(U,null,ee(e.value,(c,f)=>(h(),_("div",{key:f,class:"demo-slot-node-tooltip__log-item"},L(c),1))),128)),e.value.length===0?(h(),_("div",md," 将鼠标悬停在节点上以查看自定义 Tooltip ")):B("",!0)])]),n("div",hd,[v(D(le),{mode:"design","permission-config":s,"before-graph-init":d,onReady:i},{"node-tooltip":M(({node:c,data:f})=>[n("div",vd," node-tooltip插槽:"+L(f==null?void 0:f.label)+"--"+L(c.shape),1)]),_:1},8,["permission-config"])])]))}}),_d=ae(bd,[["__scopeId","data-v-cee2df7a"]]),xd=`\uFEFF<template>\r
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
`,yd={class:"demo-slot-edge-tooltip"},wd={class:"demo-slot-edge-tooltip__log"},kd={class:"demo-slot-edge-tooltip__log-content"},Cd={key:0,class:"demo-slot-edge-tooltip__log-empty"},Sd={class:"demo-slot-edge-tooltip__canvas"},Ed={class:"my-edge-tooltip"},Nd=j({__name:"demo-slot-edgeTooltip",setup(b){const e=E([]);let r=null,o=null;const s=je({design:{showToolbar:!1,showNodePalette:!1,showPropertiesPanel:!1,showContextMenu:!1,canEdgeTooltip:!0,canHoverEdge:!0}});function l(t){const p=new Date().toLocaleTimeString("zh-CN",{hour12:!1});e.value.push(`[${p}] ${t}`),setTimeout(()=>{const c=document.querySelector(".demo-slot-edge-tooltip__log-content");c&&(c.scrollTop=c.scrollHeight)},10)}function g(){e.value=[],l("日志已清除")}function i(t){r=t,o=r.getGraph(),l("FlowDesigner 初始化完成"),l("✨ 将鼠标悬停在连线上查看自定义 Tooltip"),a(o)}function a(t){if(!r)return;const p=t.addNode({shape:"custom-circle",x:100,y:100,label:"开始",data:{description:"流程开始节点",owner:"张三",priority:"high"}}),c=t.addNode({shape:"custom-rect",x:300,y:100,label:"处理",data:{description:"执行业务处理",owner:"李四",priority:"medium"}}),f=t.addNode({shape:"custom-circle",x:500,y:100,label:"结束",data:{description:"流程结束",owner:"王五",priority:"low"}});t.addEdge({source:p,target:c,shape:"flow-edge",labels:[{attrs:{text:{text:"通过"}}}],data:{lineType:"normal",condition:'status === "approved"',description:"审批通过后的流转",isDefault:!1}}),t.addEdge({source:c,target:f,shape:"flow-edge",labels:[{attrs:{text:{text:"完成"}}}],data:{lineType:"normal",condition:"",description:"处理完成后结束",isDefault:!0}})}function d({Graph:t}){t.registerNode("custom-circle",{inherit:"circle",width:100,height:100,attrs:{body:{fill:"#5F95FF",stroke:"#2563EB",strokeWidth:2},label:{fill:"#fff",fontSize:14,fontWeight:500}}},!0),t.registerNode("custom-rect",{inherit:"rect",width:140,height:70,attrs:{body:{fill:"#47C769",stroke:"#27AE60",strokeWidth:2,rx:8,ry:8},label:{fill:"#fff",fontSize:14,fontWeight:500}}},!0)}return(t,p)=>(h(),_("div",yd,[n("div",wd,[n("div",{class:"demo-slot-edge-tooltip__log-header"},[p[0]||(p[0]=n("h4",null,"事件日志",-1)),n("button",{class:"demo-slot-edge-tooltip__clear-btn",onClick:g,title:"清除日志"}," 清除 ")]),n("div",kd,[(h(!0),_(U,null,ee(e.value,(c,f)=>(h(),_("div",{key:f,class:"demo-slot-edge-tooltip__log-item"},L(c),1))),128)),e.value.length===0?(h(),_("div",Cd," 将鼠标悬停在连线上以查看自定义 Tooltip ")):B("",!0)])]),n("div",Sd,[v(D(le),{mode:"design","permission-config":s,"before-graph-init":d,onReady:i},{"edge-tooltip":M(({edge:c,data:f})=>[n("div",Ed," edge-tooltip插槽:"+L(f==null?void 0:f.label),1)]),_:1},8,["permission-config"])])]))}}),Dd=ae(Nd,[["__scopeId","data-v-2238c6c0"]]),Td=`\uFEFF<template>\r
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
`,Fd={class:"demo-slot-edge-tooltip"},$d={class:"demo-slot-edge-tooltip__log"},Md={class:"demo-slot-edge-tooltip__log-content"},Ld={key:0,class:"demo-slot-edge-tooltip__log-empty"},Rd={class:"demo-slot-edge-tooltip__canvas"},zd={class:"custom-edge-label__text"},Ad=j({__name:"demo-slot-edgeLabel",setup(b){const e=E([]);let r=null,o=null;const s=je({design:{showToolbar:!1,showNodePalette:!1,showPropertiesPanel:!1,showContextMenu:!1,canEdgeTooltip:!0,canHoverEdge:!0}});function l(t){const p=new Date().toLocaleTimeString("zh-CN",{hour12:!1});e.value.push(`[${p}] ${t}`),setTimeout(()=>{const c=document.querySelector(".demo-slot-edge-tooltip__log-content");c&&(c.scrollTop=c.scrollHeight)},10)}function g(){e.value=[],l("日志已清除")}function i(t){r=t,o=r.getGraph(),l("FlowDesigner 初始化完成"),l("✨ 将鼠标悬停在连线上查看自定义 Tooltip"),a(o)}function a(t){if(!r)return;const p=t.addNode({shape:"custom-circle",x:100,y:100,label:"开始",data:{description:"流程开始节点",owner:"张三",priority:"high"}}),c=t.addNode({shape:"custom-rect",x:300,y:100,label:"处理",data:{description:"执行业务处理",owner:"李四",priority:"medium"}}),f=t.addNode({shape:"custom-circle",x:500,y:100,label:"结束",data:{description:"流程结束",owner:"王五",priority:"low"}});t.addEdge({source:p,target:c,shape:"flow-edge",labels:[{attrs:{text:{text:"通过"}}}],data:{lineType:"normal",condition:'status === "approved"',description:"审批通过后的流转",isDefault:!1}}),t.addEdge({source:c,target:f,shape:"flow-edge",labels:[{attrs:{text:{text:"完成"}}}],data:{lineType:"normal",condition:"",description:"处理完成后结束",isDefault:!0}})}function d({Graph:t}){t.registerNode("custom-circle",{inherit:"circle",width:100,height:100,attrs:{body:{fill:"#5F95FF",stroke:"#2563EB",strokeWidth:2},label:{fill:"#fff",fontSize:14,fontWeight:500}}},!0),t.registerNode("custom-rect",{inherit:"rect",width:140,height:70,attrs:{body:{fill:"#47C769",stroke:"#27AE60",strokeWidth:2,rx:8,ry:8},label:{fill:"#fff",fontSize:14,fontWeight:500}}},!0)}return(t,p)=>{const c=Fe("TagOutlined");return h(),_("div",Fd,[n("div",$d,[n("div",{class:"demo-slot-edge-tooltip__log-header"},[p[0]||(p[0]=n("h4",null,"事件日志",-1)),n("button",{class:"demo-slot-edge-tooltip__clear-btn",onClick:g,title:"清除日志"}," 清除 ")]),n("div",Md,[(h(!0),_(U,null,ee(e.value,(f,m)=>(h(),_("div",{key:m,class:"demo-slot-edge-tooltip__log-item"},L(f),1))),128)),e.value.length===0?(h(),_("div",Ld," 将鼠标悬停在连线上以查看自定义 Tooltip ")):B("",!0)])]),n("div",Rd,[v(D(le),{mode:"design","permission-config":s,"before-graph-init":d,onReady:i},{"edge-label":M(({edge:f,data:m})=>[n("div",{class:we(["custom-edge-label",{"custom-edge-label-selected":f.getProp("_state")==="hover"||f.getProp("_state")==="selected"}])},[v(c,{class:"custom-edge-label__icon"}),n("span",zd,L(f.getProp("_state"))+"-"+L(m==null?void 0:m.label),1)],2)]),_:1},8,["permission-config"])])])}}}),Pd=ae(Ad,[["__scopeId","data-v-40d17d61"]]),Id=`\uFEFF<template>\r
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
`,Gd={class:"demo-slot-palette"},Bd={class:"demo-slot-palette__log"},Od={class:"demo-slot-palette__log-content"},Hd={class:"demo-slot-palette__canvas"},Wd={class:"custom-palette"},Vd={class:"custom-palette__section"},Ud=["onMousedown"],Zd={class:"custom-palette__item-info"},jd={class:"custom-palette__item-label"},qd={class:"custom-palette__item-hint"},Yd={class:"cvn-task__body"},Xd={class:"cvn-task__title"},Jd={class:"cvn-task__owner"},Kd={class:"cvn-notice","data-cvn-root":""},Qd={class:"cvn-notice__body"},ec={class:"cvn-notice__title"},nc={class:"cvn-notice__desc"},rc=j({__name:"demo-slot-node",setup(b){const e=E(null),r=E(null),o=E("canvas");function s(c){c.length===0?(e.value=null,r.value=null,o.value="canvas",i("📌 显示画布配置")):c.length===1?c[0].isNode()?(e.value=c[0],r.value=null,o.value="node",i(`📌 选中节点: ${e.value.label||e.value.id}`)):c[0].isEdge()&&(e.value=null,r.value=c[0],o.value="edge",i(`📌 选中连线: ${r.value.id}`)):(e.value=null,r.value=null,o.value="none",i(`📌 选中 ${c.length} 个元素`))}const l=E([]),g=E([{type:"custom-nodetype1",label:"自定义任务",icon:"📋",hint:"用于任务处理",color:"#fa8c16",width:160,height:80,data:{owner:"测试1",detailPannelInfo:{clazz:"123333"}}},{type:"custom-nodetype2",label:"自定义通知",icon:"🔔",hint:"用于消息通知",color:"#52c41a",width:140,height:70,data:{owner:"测试222"}}]);function i(c){const f=new Date().toLocaleTimeString();l.value.push(`[${f}] ${c}`)}function a(){l.value=[]}function d(c){i("🔧 beforeGraphInit: 开始注册自定义节点")}function t(c,f){i("✅ 画布初始化完成"),i("🎨 自定义节点面板已渲染"),i("💡 提示: 点击左侧节点拖拽到画布")}function p(c,f,m){i(`🎯 开始拖拽: ${f.label}`),console.log("nodeTypenodeTypenodeTypenodeTypenodeType::",f),m(c,{shape:"common-vue-node",label:f.label,width:f.width,height:f.height,"node-type":f.type,data:H({nodeType:f.type},f.data)})}return(c,f)=>(h(),_("div",Gd,[n("div",Bd,[n("div",{class:"demo-slot-palette__log-header"},[f[0]||(f[0]=n("h4",null,"事件日志",-1)),n("button",{class:"demo-slot-palette__clear-btn",onClick:a,title:"清除日志"}," 清除 ")]),n("div",Od,[(h(!0),_(U,null,ee(l.value,(m,N)=>(h(),_("div",{key:N,class:"demo-slot-palette__log-item"},L(m),1))),128))])]),n("div",Hd,[v(D(le),{mode:"design","before-graph-init":d,onReady:t,onSelectionChange:s},{palette:M(({onStartDrag:m})=>[n("div",Wd,[f[2]||(f[2]=n("div",{class:"custom-palette__header"},[n("h3",{class:"custom-palette__title"},"自定义节点"),n("span",{class:"custom-palette__desc"},"拖拽到画布")],-1)),n("div",Vd,[f[1]||(f[1]=n("div",{class:"custom-palette__section-title"},"基础节点",-1)),(h(!0),_(U,null,ee(g.value,N=>(h(),_("div",{key:N.type,class:"custom-palette__item",onMousedown:k=>p(k,N,m)},[n("div",{class:"custom-palette__item-icon",style:ye({background:N.color})},L(N.icon),5),n("div",Zd,[n("div",jd,L(N.label),1),n("div",qd,L(N.hint),1)])],40,Ud))),128))])])]),"node-custom-nodetype1":M(({node:m,graph:N,data:k,label:x,state:u})=>{var y;return[n("div",{class:we(["cvn-task",{"cvn-task--selected":(m==null?void 0:m.id)==((y=e.value)==null?void 0:y.id)}]),"data-cvn-root":""},[f[3]||(f[3]=n("div",{class:"cvn-task__bar"},null,-1)),n("div",Yd,[n("div",Xd,L(x||"自定义vue插槽节点1"),1),n("div",Jd,"负责人："+L(k.owner||"未指定")+" state: "+L(u),1)])],2)]}),"node-custom-nodetype2":M(({node:m,graph:N,data:k,state:x})=>[n("div",Kd,[f[4]||(f[4]=n("div",{class:"cvn-notice__icon"},"🔔",-1)),n("div",Qd,[n("div",ec,L(k.label||"自定义vue插槽节点2"),1),n("div",nc,"通知类型节点 state: "+L(x),1)])])]),_:1})])]))}}),tc=ae(rc,[["__scopeId","data-v-4cecc21d"]]),oc=`<template>\r
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
`,sc={class:"demo-permission-layout"},ic={class:"permission-panel"},ac={class:"permission-panel__content"},lc={class:"permission-group"},dc={class:"permission-list"},cc={class:"permission-item"},pc={class:"permission-item"},gc={class:"permission-item"},uc={class:"permission-item"},fc={class:"permission-item"},mc={class:"permission-item"},hc={class:"permission-group"},vc={class:"permission-list"},bc={class:"permission-item"},_c={class:"permission-item"},xc={class:"permission-item"},yc={class:"permission-item"},wc={class:"permission-item"},kc={class:"permission-item"},Cc={class:"permission-item"},Sc={class:"permission-item"},Ec={class:"permission-item"},Nc={class:"permission-group"},Dc={class:"permission-list"},Tc={class:"permission-item"},Fc={class:"permission-item"},$c={class:"permission-item"},Mc={class:"permission-item"},Lc={class:"permission-item"},Rc={class:"permission-group"},zc={class:"permission-list"},Ac={class:"permission-item"},Pc={class:"permission-item"},Ic={class:"permission-item"},Gc={class:"permission-item"},Bc={class:"permission-group"},Oc={class:"permission-list"},Hc={class:"permission-item"},Wc={class:"permission-item"},Vc={class:"permission-group"},Uc={class:"permission-list"},Zc={class:"permission-item"},jc={class:"permission-item"},qc={class:"permission-group"},Yc={class:"permission-list"},Xc={class:"permission-item"},Jc={class:"permission-item"},Kc={class:"permission-item"},Qc={class:"permission-item"},ep={class:"permission-group"},np={class:"permission-list"},rp={class:"permission-item"},tp={class:"permission-item"},op={class:"permission-item"},sp={class:"permission-item"},ip={class:"designer-container"},ap=j({__name:"demo-permission-01",setup(b,{expose:e}){const r=E(null),o=E("design"),s=je({design:{showToolbar:!0,showNodePalette:!0,showPropertiesPanel:!0,showContextMenu:!0,showMinimap:!0,showSearch:!0,canDrag:!0,canConnect:!0,canDelete:!0,canCopy:!0,canPaste:!0,canGroup:!0,canToFront:!0,canToBack:!0,canAddNode:!0,canMultipleSelect:!0,canSelectAll:!0,canAlign:!0,canAlignLeft:!0,canAlignRight:!0,canAlignTop:!0,canAlignBottom:!0,canImport:!0,canExport:!0,canUndo:!0,canRedo:!0,canZoom:!0,canPan:!0,canFitView:!0,canResetView:!0,canHoverNode:!0,canHoverEdge:!0,canSelectNode:!0,canSelectEdge:!0,canNodeTooltip:!0,canEdgeTooltip:!0}});function l(i){if(Ze)try{i.load(Ze)}catch(a){ue.error("加载失败")}}function g(i){ue.success(`已切换至${{design:"设计",readonly:"只读",preview:"预览"}[i]}模式`),o.value=i}return e({layoutRef:r}),(i,a)=>{const d=Fe("a-checkbox");return h(),_("div",sc,[n("div",ic,[a[80]||(a[80]=n("div",{class:"permission-panel__header"},[n("h3",{class:"permission-panel__title"},"权限配置"),n("span",{class:"permission-panel__mode"},"Design 模式")],-1)),n("div",ac,[n("div",lc,[a[42]||(a[42]=n("h4",{class:"permission-group__title"},"🎨 界面显示",-1)),n("div",dc,[n("label",cc,[v(d,{checked:s.design.showToolbar,"onUpdate:checked":a[0]||(a[0]=t=>s.design.showToolbar=t)},null,8,["checked"]),a[36]||(a[36]=n("span",{class:"permission-item__label"},"显示工具栏",-1))]),n("label",pc,[v(d,{checked:s.design.showNodePalette,"onUpdate:checked":a[1]||(a[1]=t=>s.design.showNodePalette=t)},null,8,["checked"]),a[37]||(a[37]=n("span",{class:"permission-item__label"},"显示节点面板",-1))]),n("label",gc,[v(d,{checked:s.design.showPropertiesPanel,"onUpdate:checked":a[2]||(a[2]=t=>s.design.showPropertiesPanel=t)},null,8,["checked"]),a[38]||(a[38]=n("span",{class:"permission-item__label"},"显示属性面板",-1))]),n("label",uc,[v(d,{checked:s.design.showContextMenu,"onUpdate:checked":a[3]||(a[3]=t=>s.design.showContextMenu=t)},null,8,["checked"]),a[39]||(a[39]=n("span",{class:"permission-item__label"},"显示右键菜单",-1))]),n("label",fc,[v(d,{checked:s.design.showMinimap,"onUpdate:checked":a[4]||(a[4]=t=>s.design.showMinimap=t)},null,8,["checked"]),a[40]||(a[40]=n("span",{class:"permission-item__label"},"显示小地图",-1))]),n("label",mc,[v(d,{checked:s.design.showSearch,"onUpdate:checked":a[5]||(a[5]=t=>s.design.showSearch=t)},null,8,["checked"]),a[41]||(a[41]=n("span",{class:"permission-item__label"},"显示搜索框",-1))])])]),n("div",hc,[a[52]||(a[52]=n("h4",{class:"permission-group__title"},"✏️ 编辑操作",-1)),n("div",vc,[n("label",bc,[v(d,{checked:s.design.canAddNode,"onUpdate:checked":a[6]||(a[6]=t=>s.design.canAddNode=t)},null,8,["checked"]),a[43]||(a[43]=n("span",{class:"permission-item__label"},"添加节点",-1))]),n("label",_c,[v(d,{checked:s.design.canDrag,"onUpdate:checked":a[7]||(a[7]=t=>s.design.canDrag=t)},null,8,["checked"]),a[44]||(a[44]=n("span",{class:"permission-item__label"},"拖动节点",-1))]),n("label",xc,[v(d,{checked:s.design.canConnect,"onUpdate:checked":a[8]||(a[8]=t=>s.design.canConnect=t)},null,8,["checked"]),a[45]||(a[45]=n("span",{class:"permission-item__label"},"创建连线",-1))]),n("label",yc,[v(d,{checked:s.design.canDelete,"onUpdate:checked":a[9]||(a[9]=t=>s.design.canDelete=t)},null,8,["checked"]),a[46]||(a[46]=n("span",{class:"permission-item__label"},"删除元素",-1))]),n("label",wc,[v(d,{checked:s.design.canCopy,"onUpdate:checked":a[10]||(a[10]=t=>s.design.canCopy=t)},null,8,["checked"]),a[47]||(a[47]=n("span",{class:"permission-item__label"},"复制",-1))]),n("label",kc,[v(d,{checked:s.design.canPaste,"onUpdate:checked":a[11]||(a[11]=t=>s.design.canPaste=t)},null,8,["checked"]),a[48]||(a[48]=n("span",{class:"permission-item__label"},"粘贴",-1))]),n("label",Cc,[v(d,{checked:s.design.canGroup,"onUpdate:checked":a[12]||(a[12]=t=>s.design.canGroup=t)},null,8,["checked"]),a[49]||(a[49]=n("span",{class:"permission-item__label"},"节点成组",-1))]),n("label",Sc,[v(d,{checked:s.design.canToFront,"onUpdate:checked":a[13]||(a[13]=t=>s.design.canToFront=t)},null,8,["checked"]),a[50]||(a[50]=n("span",{class:"permission-item__label"},"层级前置",-1))]),n("label",Ec,[v(d,{checked:s.design.canToBack,"onUpdate:checked":a[14]||(a[14]=t=>s.design.canToBack=t)},null,8,["checked"]),a[51]||(a[51]=n("span",{class:"permission-item__label"},"层级后置",-1))])])]),n("div",Nc,[a[58]||(a[58]=n("h4",{class:"permission-group__title"},"📐 对齐操作",-1)),n("div",Dc,[n("label",Tc,[v(d,{checked:s.design.canAlign,"onUpdate:checked":a[15]||(a[15]=t=>s.design.canAlign=t)},null,8,["checked"]),a[53]||(a[53]=n("span",{class:"permission-item__label"},"对齐总开关",-1))]),n("label",Fc,[v(d,{checked:s.design.canAlignLeft,"onUpdate:checked":a[16]||(a[16]=t=>s.design.canAlignLeft=t)},null,8,["checked"]),a[54]||(a[54]=n("span",{class:"permission-item__label"},"左对齐",-1))]),n("label",$c,[v(d,{checked:s.design.canAlignRight,"onUpdate:checked":a[17]||(a[17]=t=>s.design.canAlignRight=t)},null,8,["checked"]),a[55]||(a[55]=n("span",{class:"permission-item__label"},"右对齐",-1))]),n("label",Mc,[v(d,{checked:s.design.canAlignTop,"onUpdate:checked":a[18]||(a[18]=t=>s.design.canAlignTop=t)},null,8,["checked"]),a[56]||(a[56]=n("span",{class:"permission-item__label"},"上对齐",-1))]),n("label",Lc,[v(d,{checked:s.design.canAlignBottom,"onUpdate:checked":a[19]||(a[19]=t=>s.design.canAlignBottom=t)},null,8,["checked"]),a[57]||(a[57]=n("span",{class:"permission-item__label"},"下对齐",-1))])])]),n("div",Rc,[a[63]||(a[63]=n("h4",{class:"permission-group__title"},"🎯 选择操作",-1)),n("div",zc,[n("label",Ac,[v(d,{checked:s.design.canSelectNode,"onUpdate:checked":a[20]||(a[20]=t=>s.design.canSelectNode=t)},null,8,["checked"]),a[59]||(a[59]=n("span",{class:"permission-item__label"},"选中节点",-1))]),n("label",Pc,[v(d,{checked:s.design.canSelectEdge,"onUpdate:checked":a[21]||(a[21]=t=>s.design.canSelectEdge=t)},null,8,["checked"]),a[60]||(a[60]=n("span",{class:"permission-item__label"},"选中连线",-1))]),n("label",Ic,[v(d,{checked:s.design.canMultipleSelect,"onUpdate:checked":a[22]||(a[22]=t=>s.design.canMultipleSelect=t)},null,8,["checked"]),a[61]||(a[61]=n("span",{class:"permission-item__label"},"多选/框选",-1))]),n("label",Gc,[v(d,{checked:s.design.canSelectAll,"onUpdate:checked":a[23]||(a[23]=t=>s.design.canSelectAll=t)},null,8,["checked"]),a[62]||(a[62]=n("span",{class:"permission-item__label"},"全选",-1))])])]),n("div",Bc,[a[66]||(a[66]=n("h4",{class:"permission-group__title"},"📦 导入导出",-1)),n("div",Oc,[n("label",Hc,[v(d,{checked:s.design.canImport,"onUpdate:checked":a[24]||(a[24]=t=>s.design.canImport=t)},null,8,["checked"]),a[64]||(a[64]=n("span",{class:"permission-item__label"},"导入数据",-1))]),n("label",Wc,[v(d,{checked:s.design.canExport,"onUpdate:checked":a[25]||(a[25]=t=>s.design.canExport=t)},null,8,["checked"]),a[65]||(a[65]=n("span",{class:"permission-item__label"},"导出数据",-1))])])]),n("div",Vc,[a[69]||(a[69]=n("h4",{class:"permission-group__title"},"⏱️ 历史操作",-1)),n("div",Uc,[n("label",Zc,[v(d,{checked:s.design.canUndo,"onUpdate:checked":a[26]||(a[26]=t=>s.design.canUndo=t)},null,8,["checked"]),a[67]||(a[67]=n("span",{class:"permission-item__label"},"撤销",-1))]),n("label",jc,[v(d,{checked:s.design.canRedo,"onUpdate:checked":a[27]||(a[27]=t=>s.design.canRedo=t)},null,8,["checked"]),a[68]||(a[68]=n("span",{class:"permission-item__label"},"重做",-1))])])]),n("div",qc,[a[74]||(a[74]=n("h4",{class:"permission-group__title"},"👁️ 视图操作",-1)),n("div",Yc,[n("label",Xc,[v(d,{checked:s.design.canZoom,"onUpdate:checked":a[28]||(a[28]=t=>s.design.canZoom=t)},null,8,["checked"]),a[70]||(a[70]=n("span",{class:"permission-item__label"},"缩放画布",-1))]),n("label",Jc,[v(d,{checked:s.design.canPan,"onUpdate:checked":a[29]||(a[29]=t=>s.design.canPan=t)},null,8,["checked"]),a[71]||(a[71]=n("span",{class:"permission-item__label"},"拖拽画布",-1))]),n("label",Kc,[v(d,{checked:s.design.canFitView,"onUpdate:checked":a[30]||(a[30]=t=>s.design.canFitView=t)},null,8,["checked"]),a[72]||(a[72]=n("span",{class:"permission-item__label"},"适应窗口",-1))]),n("label",Qc,[v(d,{checked:s.design.canResetView,"onUpdate:checked":a[31]||(a[31]=t=>s.design.canResetView=t)},null,8,["checked"]),a[73]||(a[73]=n("span",{class:"permission-item__label"},"重置视图",-1))])])]),n("div",ep,[a[79]||(a[79]=n("h4",{class:"permission-group__title"},"💬 交互反馈",-1)),n("div",np,[n("label",rp,[v(d,{checked:s.design.canHoverNode,"onUpdate:checked":a[32]||(a[32]=t=>s.design.canHoverNode=t)},null,8,["checked"]),a[75]||(a[75]=n("span",{class:"permission-item__label"},"节点 Hover 高亮",-1))]),n("label",tp,[v(d,{checked:s.design.canHoverEdge,"onUpdate:checked":a[33]||(a[33]=t=>s.design.canHoverEdge=t)},null,8,["checked"]),a[76]||(a[76]=n("span",{class:"permission-item__label"},"连线 Hover 高亮",-1))]),n("label",op,[v(d,{checked:s.design.canNodeTooltip,"onUpdate:checked":a[34]||(a[34]=t=>s.design.canNodeTooltip=t)},null,8,["checked"]),a[77]||(a[77]=n("span",{class:"permission-item__label"},"节点 Tooltip",-1))]),n("label",sp,[v(d,{checked:s.design.canEdgeTooltip,"onUpdate:checked":a[35]||(a[35]=t=>s.design.canEdgeTooltip=t)},null,8,["checked"]),a[78]||(a[78]=n("span",{class:"permission-item__label"},"连线 Tooltip",-1))])])])])]),n("div",ip,[v(D(le),{class:"flow-designer-test",ref_key:"layoutRef",ref:r,mode:o.value,"permission-config":s,onReady:l,onModeChange:g},{toolbar:M(t=>[v(Bn,{"zoom-percent":t.zoomPercent,"has-selection":t.hasSelection,"can-paste":t.canPaste,"can-group":t.canGroup,"can-ungroup":t.canUngroup,"can-undo":t.canUndo,"can-redo":t.canRedo,"designer-mode":t.currentMode,onUndo:t.onUndo,onRedo:t.onRedo,onZoomIn:t.onZoomIn,onZoomOut:t.onZoomOut,onZoomTo:t.onZoomTo,onFitView:t.onFitView,onResetView:t.onResetView,onCopy:t.onCopy,onPaste:t.onPaste,onToFront:t.onToFront,onToBack:t.onToBack,onAlignLeft:t.onAlignLeft,onAlignRight:t.onAlignRight,onAlignTop:t.onAlignTop,onAlignBottom:t.onAlignBottom,onGroup:t.onGroup,onUngroup:t.onUngroup,onExport:t.onExport,onImport:t.onImport,onOpenSettings:t.onOpenSettings,onModeChange:t.onModeChange},null,8,["zoom-percent","has-selection","can-paste","can-group","can-ungroup","can-undo","can-redo","designer-mode","onUndo","onRedo","onZoomIn","onZoomOut","onZoomTo","onFitView","onResetView","onCopy","onPaste","onToFront","onToBack","onAlignLeft","onAlignRight","onAlignTop","onAlignBottom","onGroup","onUngroup","onExport","onImport","onOpenSettings","onModeChange"])]),palette:M(t=>[v(Gn,{onStartDrag:t.onStartDrag},null,8,["onStartDrag"])]),properties:M(()=>[v(In)]),_:1},8,["mode","permission-config"])])])}}}),lp=ae(ap,[["__scopeId","data-v-e0cb525a"]]),dp=`\uFEFF<template>\r
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
`,cp={class:"demo-permission-layout"},pp={class:"designer-container"},gp=j({__name:"demo-permission-readonly",setup(b,{expose:e}){const r=E(null),o=E("readonly"),s=je({design:{},readonly:{showToolbar:!1,showNodePalette:!1,canAddNode:!1,canDrag:!1,canConnect:!1,canDelete:!1,canSelectEdge:!1}});function l(i){if(Ze)try{i.load(Ze)}catch(a){ue.error("加载失败")}}function g(i){ue.success(`已切换至${{design:"设计",readonly:"只读",preview:"预览"}[i]}模式`),o.value=i}return e({layoutRef:r}),(i,a)=>(h(),_("div",cp,[n("div",pp,[v(D(le),{class:"flow-designer-test",ref_key:"layoutRef",ref:r,mode:o.value,"permission-config":s,onReady:l,onModeChange:g},{toolbar:M(d=>[v(Bn,{"zoom-percent":d.zoomPercent,"has-selection":d.hasSelection,"can-paste":d.canPaste,"can-group":d.canGroup,"can-ungroup":d.canUngroup,"can-undo":d.canUndo,"can-redo":d.canRedo,"designer-mode":d.currentMode,onUndo:d.onUndo,onRedo:d.onRedo,onZoomIn:d.onZoomIn,onZoomOut:d.onZoomOut,onZoomTo:d.onZoomTo,onFitView:d.onFitView,onResetView:d.onResetView,onCopy:d.onCopy,onPaste:d.onPaste,onToFront:d.onToFront,onToBack:d.onToBack,onAlignLeft:d.onAlignLeft,onAlignRight:d.onAlignRight,onAlignTop:d.onAlignTop,onAlignBottom:d.onAlignBottom,onGroup:d.onGroup,onUngroup:d.onUngroup,onExport:d.onExport,onImport:d.onImport,onOpenSettings:d.onOpenSettings,onModeChange:d.onModeChange},null,8,["zoom-percent","has-selection","can-paste","can-group","can-ungroup","can-undo","can-redo","designer-mode","onUndo","onRedo","onZoomIn","onZoomOut","onZoomTo","onFitView","onResetView","onCopy","onPaste","onToFront","onToBack","onAlignLeft","onAlignRight","onAlignTop","onAlignBottom","onGroup","onUngroup","onExport","onImport","onOpenSettings","onModeChange"])]),palette:M(d=>[v(Gn,{onStartDrag:d.onStartDrag},null,8,["onStartDrag"])]),properties:M(()=>[v(In)]),_:1},8,["mode","permission-config"])])]))}}),up=ae(gp,[["__scopeId","data-v-048b843f"]]),fp=`\uFEFF<template>\r
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
`,mp={class:"demo-permission-layout"},hp={class:"designer-container"},vp=j({__name:"demo-permission-preview",setup(b,{expose:e}){const r=E(null),o=E("preview"),s=je({design:{},readonly:{},preview:{showToolbar:!1,showNodePalette:!1,showPropertiesPanel:!1,showContextMenu:!1,showMinimap:!0,canDrag:!1,canConnect:!1,canDelete:!1,canCopy:!1,canPaste:!1,canGroup:!1,canToFront:!1,canToBack:!1,canAddNode:!1,canMultipleSelect:!1,canSelectAll:!1,canAlign:!1,canAlignLeft:!1,canAlignRight:!1,canAlignTop:!1,canAlignBottom:!1,canImport:!1,canExport:!1,canUndo:!1,canRedo:!1,canZoom:!0,canPan:!0,canFitView:!0,canResetView:!0,canHoverNode:!1,canHoverEdge:!1,canSelectNode:!1,canSelectEdge:!1,canNodeTooltip:!1,canEdgeTooltip:!1}});function l(i){if(Ze)try{i.load(Ze)}catch(a){ue.error("加载失败")}}function g(i){ue.success(`已切换至${{design:"设计",readonly:"只读",preview:"预览"}[i]}模式`),o.value=i}return e({layoutRef:r}),(i,a)=>(h(),_("div",mp,[n("div",hp,[v(D(le),{class:"flow-designer-test",ref_key:"layoutRef",ref:r,mode:o.value,"permission-config":s,onReady:l,onModeChange:g},{toolbar:M(d=>[v(Bn,{"zoom-percent":d.zoomPercent,"has-selection":d.hasSelection,"can-paste":d.canPaste,"can-group":d.canGroup,"can-ungroup":d.canUngroup,"can-undo":d.canUndo,"can-redo":d.canRedo,"designer-mode":d.currentMode,onUndo:d.onUndo,onRedo:d.onRedo,onZoomIn:d.onZoomIn,onZoomOut:d.onZoomOut,onZoomTo:d.onZoomTo,onFitView:d.onFitView,onResetView:d.onResetView,onCopy:d.onCopy,onPaste:d.onPaste,onToFront:d.onToFront,onToBack:d.onToBack,onAlignLeft:d.onAlignLeft,onAlignRight:d.onAlignRight,onAlignTop:d.onAlignTop,onAlignBottom:d.onAlignBottom,onGroup:d.onGroup,onUngroup:d.onUngroup,onExport:d.onExport,onImport:d.onImport,onOpenSettings:d.onOpenSettings,onModeChange:d.onModeChange},null,8,["zoom-percent","has-selection","can-paste","can-group","can-ungroup","can-undo","can-redo","designer-mode","onUndo","onRedo","onZoomIn","onZoomOut","onZoomTo","onFitView","onResetView","onCopy","onPaste","onToFront","onToBack","onAlignLeft","onAlignRight","onAlignTop","onAlignBottom","onGroup","onUngroup","onExport","onImport","onOpenSettings","onModeChange"])]),palette:M(d=>[v(Gn,{onStartDrag:d.onStartDrag},null,8,["onStartDrag"])]),properties:M(()=>[v(In)]),_:1},8,["mode","permission-config"])])]))}}),bp=ae(vp,[["__scopeId","data-v-25ba95d6"]]),_p=`\uFEFF<template>\r
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
`,xp={class:"demo-permission-layout"},yp={class:"permission-panel"},wp={class:"permission-panel__content"},kp={class:"permission-group"},Cp={class:"permission-list"},Sp={class:"permission-item"},Ep={class:"permission-item"},Np={class:"permission-item"},Dp={class:"permission-item"},Tp={class:"permission-item"},Fp={class:"permission-group"},$p={class:"permission-list"},Mp={class:"permission-item"},Lp={class:"permission-item"},Rp={class:"permission-item"},zp={class:"permission-item"},Ap={class:"permission-item"},Pp={class:"permission-item"},Ip={class:"permission-item"},Gp={class:"permission-item"},Bp={class:"permission-item"},Op={class:"permission-group"},Hp={class:"permission-list"},Wp={class:"permission-item"},Vp={class:"permission-item"},Up={class:"permission-item"},Zp={class:"permission-item"},jp={class:"permission-item"},qp={class:"permission-group"},Yp={class:"permission-list"},Xp={class:"permission-item"},Jp={class:"permission-item"},Kp={class:"permission-item"},Qp={class:"permission-item"},eg={class:"permission-group"},ng={class:"permission-list"},rg={class:"permission-item"},tg={class:"permission-item"},og={class:"permission-group"},sg={class:"permission-list"},ig={class:"permission-item"},ag={class:"permission-item"},lg={class:"permission-group"},dg={class:"permission-list"},cg={class:"permission-item"},pg={class:"permission-item"},gg={class:"permission-item"},ug={class:"permission-item"},fg={class:"permission-group"},mg={class:"permission-list"},hg={class:"permission-item"},vg={class:"permission-item"},bg={class:"permission-item"},_g={class:"permission-item"},xg={class:"designer-container"},yg=j({__name:"demo-permission-getPermission",setup(b,{expose:e}){const r=E(null),o=E("design"),s=je({design:{showToolbar:!0,showNodePalette:!0,showPropertiesPanel:!0,showContextMenu:!0,showMinimap:!0,canDrag:!0,canConnect:!0,canDelete:!0,canCopy:!0,canPaste:!0,canGroup:!0,canToFront:!0,canToBack:!0,canAddNode:!0,canMultipleSelect:!0,canSelectAll:!0,canAlign:!0,canAlignLeft:!0,canAlignRight:!0,canAlignTop:!0,canAlignBottom:!0,canImport:!0,canExport:!0,canUndo:!0,canRedo:!0,canZoom:!0,canPan:!0,canFitView:!0,canResetView:!0,canHoverNode:!0,canHoverEdge:!0,canSelectNode:!0,canSelectEdge:!0,canNodeTooltip:!0,canEdgeTooltip:!0}}),l=E("admin"),g=d=>{const t={canSelectNode:!0,canZoom:!0,canPan:!0};return l.value==="admin"?pe(H({},t),{canAddNode:!1,canDrag:!0,canDelete:!0}):l.value==="editor"?pe(H({},t),{canAddNode:!0,canDrag:!0,canDelete:!1}):pe(H({},t),{canAddNode:!1,canDrag:!1})};function i(d){if(Ze)try{d.load(Ze)}catch(t){ue.error("加载失败")}}function a(d){ue.success(`已切换至${{design:"设计",readonly:"只读",preview:"预览"}[d]}模式`),o.value=d}return e({layoutRef:r}),(d,t)=>{const p=Fe("a-checkbox");return h(),_("div",xp,[n("div",yp,[t[78]||(t[78]=n("div",{class:"permission-panel__header"},[n("h3",{class:"permission-panel__title"},"权限配置"),n("span",{class:"permission-panel__mode"},"Design 模式"),n("span",{class:"permission-panel__mode",style:{color:"red"}},"此处即使配置了design权限也会完全失效，因为使用了getPermissions 函数完全接管权限计算")],-1)),n("div",wp,[n("div",kp,[t[40]||(t[40]=n("h4",{class:"permission-group__title"},"🎨 界面显示",-1)),n("div",Cp,[n("label",Sp,[v(p,{checked:s.design.showToolbar,"onUpdate:checked":t[0]||(t[0]=c=>s.design.showToolbar=c)},null,8,["checked"]),t[35]||(t[35]=n("span",{class:"permission-item__label"},"显示工具栏",-1))]),n("label",Ep,[v(p,{checked:s.design.showNodePalette,"onUpdate:checked":t[1]||(t[1]=c=>s.design.showNodePalette=c)},null,8,["checked"]),t[36]||(t[36]=n("span",{class:"permission-item__label"},"显示节点面板",-1))]),n("label",Np,[v(p,{checked:s.design.showPropertiesPanel,"onUpdate:checked":t[2]||(t[2]=c=>s.design.showPropertiesPanel=c)},null,8,["checked"]),t[37]||(t[37]=n("span",{class:"permission-item__label"},"显示属性面板",-1))]),n("label",Dp,[v(p,{checked:s.design.showContextMenu,"onUpdate:checked":t[3]||(t[3]=c=>s.design.showContextMenu=c)},null,8,["checked"]),t[38]||(t[38]=n("span",{class:"permission-item__label"},"显示右键菜单",-1))]),n("label",Tp,[v(p,{checked:s.design.showMinimap,"onUpdate:checked":t[4]||(t[4]=c=>s.design.showMinimap=c)},null,8,["checked"]),t[39]||(t[39]=n("span",{class:"permission-item__label"},"显示小地图",-1))])])]),n("div",Fp,[t[50]||(t[50]=n("h4",{class:"permission-group__title"},"✏️ 编辑操作",-1)),n("div",$p,[n("label",Mp,[v(p,{checked:s.design.canAddNode,"onUpdate:checked":t[5]||(t[5]=c=>s.design.canAddNode=c)},null,8,["checked"]),t[41]||(t[41]=n("span",{class:"permission-item__label"},"添加节点",-1))]),n("label",Lp,[v(p,{checked:s.design.canDrag,"onUpdate:checked":t[6]||(t[6]=c=>s.design.canDrag=c)},null,8,["checked"]),t[42]||(t[42]=n("span",{class:"permission-item__label"},"拖动节点",-1))]),n("label",Rp,[v(p,{checked:s.design.canConnect,"onUpdate:checked":t[7]||(t[7]=c=>s.design.canConnect=c)},null,8,["checked"]),t[43]||(t[43]=n("span",{class:"permission-item__label"},"创建连线",-1))]),n("label",zp,[v(p,{checked:s.design.canDelete,"onUpdate:checked":t[8]||(t[8]=c=>s.design.canDelete=c)},null,8,["checked"]),t[44]||(t[44]=n("span",{class:"permission-item__label"},"删除元素",-1))]),n("label",Ap,[v(p,{checked:s.design.canCopy,"onUpdate:checked":t[9]||(t[9]=c=>s.design.canCopy=c)},null,8,["checked"]),t[45]||(t[45]=n("span",{class:"permission-item__label"},"复制",-1))]),n("label",Pp,[v(p,{checked:s.design.canPaste,"onUpdate:checked":t[10]||(t[10]=c=>s.design.canPaste=c)},null,8,["checked"]),t[46]||(t[46]=n("span",{class:"permission-item__label"},"粘贴",-1))]),n("label",Ip,[v(p,{checked:s.design.canGroup,"onUpdate:checked":t[11]||(t[11]=c=>s.design.canGroup=c)},null,8,["checked"]),t[47]||(t[47]=n("span",{class:"permission-item__label"},"节点成组",-1))]),n("label",Gp,[v(p,{checked:s.design.canToFront,"onUpdate:checked":t[12]||(t[12]=c=>s.design.canToFront=c)},null,8,["checked"]),t[48]||(t[48]=n("span",{class:"permission-item__label"},"层级前置",-1))]),n("label",Bp,[v(p,{checked:s.design.canToBack,"onUpdate:checked":t[13]||(t[13]=c=>s.design.canToBack=c)},null,8,["checked"]),t[49]||(t[49]=n("span",{class:"permission-item__label"},"层级后置",-1))])])]),n("div",Op,[t[56]||(t[56]=n("h4",{class:"permission-group__title"},"📐 对齐操作",-1)),n("div",Hp,[n("label",Wp,[v(p,{checked:s.design.canAlign,"onUpdate:checked":t[14]||(t[14]=c=>s.design.canAlign=c)},null,8,["checked"]),t[51]||(t[51]=n("span",{class:"permission-item__label"},"对齐总开关",-1))]),n("label",Vp,[v(p,{checked:s.design.canAlignLeft,"onUpdate:checked":t[15]||(t[15]=c=>s.design.canAlignLeft=c)},null,8,["checked"]),t[52]||(t[52]=n("span",{class:"permission-item__label"},"左对齐",-1))]),n("label",Up,[v(p,{checked:s.design.canAlignRight,"onUpdate:checked":t[16]||(t[16]=c=>s.design.canAlignRight=c)},null,8,["checked"]),t[53]||(t[53]=n("span",{class:"permission-item__label"},"右对齐",-1))]),n("label",Zp,[v(p,{checked:s.design.canAlignTop,"onUpdate:checked":t[17]||(t[17]=c=>s.design.canAlignTop=c)},null,8,["checked"]),t[54]||(t[54]=n("span",{class:"permission-item__label"},"上对齐",-1))]),n("label",jp,[v(p,{checked:s.design.canAlignBottom,"onUpdate:checked":t[18]||(t[18]=c=>s.design.canAlignBottom=c)},null,8,["checked"]),t[55]||(t[55]=n("span",{class:"permission-item__label"},"下对齐",-1))])])]),n("div",qp,[t[61]||(t[61]=n("h4",{class:"permission-group__title"},"🎯 选择操作",-1)),n("div",Yp,[n("label",Xp,[v(p,{checked:s.design.canSelectNode,"onUpdate:checked":t[19]||(t[19]=c=>s.design.canSelectNode=c)},null,8,["checked"]),t[57]||(t[57]=n("span",{class:"permission-item__label"},"选中节点",-1))]),n("label",Jp,[v(p,{checked:s.design.canSelectEdge,"onUpdate:checked":t[20]||(t[20]=c=>s.design.canSelectEdge=c)},null,8,["checked"]),t[58]||(t[58]=n("span",{class:"permission-item__label"},"选中连线",-1))]),n("label",Kp,[v(p,{checked:s.design.canMultipleSelect,"onUpdate:checked":t[21]||(t[21]=c=>s.design.canMultipleSelect=c)},null,8,["checked"]),t[59]||(t[59]=n("span",{class:"permission-item__label"},"多选/框选",-1))]),n("label",Qp,[v(p,{checked:s.design.canSelectAll,"onUpdate:checked":t[22]||(t[22]=c=>s.design.canSelectAll=c)},null,8,["checked"]),t[60]||(t[60]=n("span",{class:"permission-item__label"},"全选",-1))])])]),n("div",eg,[t[64]||(t[64]=n("h4",{class:"permission-group__title"},"📦 导入导出",-1)),n("div",ng,[n("label",rg,[v(p,{checked:s.design.canImport,"onUpdate:checked":t[23]||(t[23]=c=>s.design.canImport=c)},null,8,["checked"]),t[62]||(t[62]=n("span",{class:"permission-item__label"},"导入数据",-1))]),n("label",tg,[v(p,{checked:s.design.canExport,"onUpdate:checked":t[24]||(t[24]=c=>s.design.canExport=c)},null,8,["checked"]),t[63]||(t[63]=n("span",{class:"permission-item__label"},"导出数据",-1))])])]),n("div",og,[t[67]||(t[67]=n("h4",{class:"permission-group__title"},"⏱️ 历史操作",-1)),n("div",sg,[n("label",ig,[v(p,{checked:s.design.canUndo,"onUpdate:checked":t[25]||(t[25]=c=>s.design.canUndo=c)},null,8,["checked"]),t[65]||(t[65]=n("span",{class:"permission-item__label"},"撤销",-1))]),n("label",ag,[v(p,{checked:s.design.canRedo,"onUpdate:checked":t[26]||(t[26]=c=>s.design.canRedo=c)},null,8,["checked"]),t[66]||(t[66]=n("span",{class:"permission-item__label"},"重做",-1))])])]),n("div",lg,[t[72]||(t[72]=n("h4",{class:"permission-group__title"},"👁️ 视图操作",-1)),n("div",dg,[n("label",cg,[v(p,{checked:s.design.canZoom,"onUpdate:checked":t[27]||(t[27]=c=>s.design.canZoom=c)},null,8,["checked"]),t[68]||(t[68]=n("span",{class:"permission-item__label"},"缩放画布",-1))]),n("label",pg,[v(p,{checked:s.design.canPan,"onUpdate:checked":t[28]||(t[28]=c=>s.design.canPan=c)},null,8,["checked"]),t[69]||(t[69]=n("span",{class:"permission-item__label"},"拖拽画布",-1))]),n("label",gg,[v(p,{checked:s.design.canFitView,"onUpdate:checked":t[29]||(t[29]=c=>s.design.canFitView=c)},null,8,["checked"]),t[70]||(t[70]=n("span",{class:"permission-item__label"},"适应窗口",-1))]),n("label",ug,[v(p,{checked:s.design.canResetView,"onUpdate:checked":t[30]||(t[30]=c=>s.design.canResetView=c)},null,8,["checked"]),t[71]||(t[71]=n("span",{class:"permission-item__label"},"重置视图",-1))])])]),n("div",fg,[t[77]||(t[77]=n("h4",{class:"permission-group__title"},"💬 交互反馈",-1)),n("div",mg,[n("label",hg,[v(p,{checked:s.design.canHoverNode,"onUpdate:checked":t[31]||(t[31]=c=>s.design.canHoverNode=c)},null,8,["checked"]),t[73]||(t[73]=n("span",{class:"permission-item__label"},"节点 Hover 高亮",-1))]),n("label",vg,[v(p,{checked:s.design.canHoverEdge,"onUpdate:checked":t[32]||(t[32]=c=>s.design.canHoverEdge=c)},null,8,["checked"]),t[74]||(t[74]=n("span",{class:"permission-item__label"},"连线 Hover 高亮",-1))]),n("label",bg,[v(p,{checked:s.design.canNodeTooltip,"onUpdate:checked":t[33]||(t[33]=c=>s.design.canNodeTooltip=c)},null,8,["checked"]),t[75]||(t[75]=n("span",{class:"permission-item__label"},"节点 Tooltip",-1))]),n("label",_g,[v(p,{checked:s.design.canEdgeTooltip,"onUpdate:checked":t[34]||(t[34]=c=>s.design.canEdgeTooltip=c)},null,8,["checked"]),t[76]||(t[76]=n("span",{class:"permission-item__label"},"连线 Tooltip",-1))])])])])]),n("div",xg,[v(D(le),{class:"flow-designer-test",ref_key:"layoutRef",ref:r,mode:o.value,"permission-config":s,getPermissions:g,onReady:i,onModeChange:a},{toolbar:M(c=>[v(Bn,{"zoom-percent":c.zoomPercent,"has-selection":c.hasSelection,"can-paste":c.canPaste,"can-group":c.canGroup,"can-ungroup":c.canUngroup,"can-undo":c.canUndo,"can-redo":c.canRedo,"designer-mode":c.currentMode,onUndo:c.onUndo,onRedo:c.onRedo,onZoomIn:c.onZoomIn,onZoomOut:c.onZoomOut,onZoomTo:c.onZoomTo,onFitView:c.onFitView,onResetView:c.onResetView,onCopy:c.onCopy,onPaste:c.onPaste,onToFront:c.onToFront,onToBack:c.onToBack,onAlignLeft:c.onAlignLeft,onAlignRight:c.onAlignRight,onAlignTop:c.onAlignTop,onAlignBottom:c.onAlignBottom,onGroup:c.onGroup,onUngroup:c.onUngroup,onExport:c.onExport,onImport:c.onImport,onOpenSettings:c.onOpenSettings,onModeChange:c.onModeChange},null,8,["zoom-percent","has-selection","can-paste","can-group","can-ungroup","can-undo","can-redo","designer-mode","onUndo","onRedo","onZoomIn","onZoomOut","onZoomTo","onFitView","onResetView","onCopy","onPaste","onToFront","onToBack","onAlignLeft","onAlignRight","onAlignTop","onAlignBottom","onGroup","onUngroup","onExport","onImport","onOpenSettings","onModeChange"])]),palette:M(c=>[v(Gn,{onStartDrag:c.onStartDrag},null,8,["onStartDrag"])]),properties:M(()=>[v(In)]),_:1},8,["mode","permission-config"])])])}}}),wg=ae(yg,[["__scopeId","data-v-32ae1fb8"]]),kg=`\uFEFF<template>\r
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
`,Cg=`<template>\r
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
`,Je="data:image/svg+xml,%3csvg%20t='1763452238349'%20class='icon'%20viewBox='0%200%201024%201024'%20version='1.1'%20xmlns='http://www.w3.org/2000/svg'%20p-id='6179'%20width='20'%20height='20'%3e%3cpath%20d='M510.9%2060.7c-245.6%200-446.7%20199.8-446.7%20446.7C64.2%20753%20263.9%20954%20510.8%20954s446.6-199.7%20446.6-446.6c0.1-245.6-199.6-446.7-446.5-446.7zM692%20525.9l-272.1%20157c-10.7%206.2-24-1.5-24-13.9V354.9c0-12.3%2013.3-20%2024-13.9L692%20498.1c10.6%206.2%2010.6%2021.6%200%2027.8z'%20p-id='6180'%20fill='%2348c02a'%3e%3c/path%3e%3c/svg%3e",Ke="data:image/svg+xml,%3csvg%20t='1763452238349'%20class='icon'%20viewBox='0%200%201024%201024'%20version='1.1'%20xmlns='http://www.w3.org/2000/svg'%20p-id='6179'%20width='20'%20height='20'%3e%3cpath%20d='M510.9%2060.7c-245.6%200-446.7%20199.8-446.7%20446.7C64.2%20753%20263.9%20954%20510.8%20954s446.6-199.7%20446.6-446.6c0.1-245.6-199.6-446.7-446.5-446.7zM692%20525.9l-272.1%20157c-10.7%206.2-24-1.5-24-13.9V354.9c0-12.3%2013.3-20%2024-13.9L692%20498.1c10.6%206.2%2010.6%2021.6%200%2027.8z'%20p-id='6180'%20fill='%23ffffff'%3e%3c/path%3e%3c/svg%3e",Qe="data:image/svg+xml,%3csvg%20t='1763519234071'%20class='icon'%20viewBox='0%200%201024%201024'%20version='1.1'%20xmlns='http://www.w3.org/2000/svg'%20p-id='10223'%20width='20'%20height='20'%3e%3cpath%20d='M422.399%20601.6V493.323c-79.111-34.622-134.4-113.655-134.4-205.323%200-123.711%20100.54-224%20224-224%20123.711%200%20224%20100.545%20224%20224%200%2091.814-55.379%20170.725-134.4%20205.313V601.6h201.472c61.925%200%20112.128%2049.716%20112.128%20112.003V825.6H108.801V713.598c0-61.855%2050.444-111.998%20112.126-111.998h201.472zM153.601%20870.4h716.793V960H153.6v-89.6z'%20fill='%231d78f4'%20p-id='10224'%3e%3c/path%3e%3c/svg%3e",en="data:image/svg+xml,%3csvg%20t='1763519234071'%20class='icon'%20viewBox='0%200%201024%201024'%20version='1.1'%20xmlns='http://www.w3.org/2000/svg'%20p-id='10223'%20width='20'%20height='20'%3e%3cpath%20d='M422.399%20601.6V493.323c-79.111-34.622-134.4-113.655-134.4-205.323%200-123.711%20100.54-224%20224-224%20123.711%200%20224%20100.545%20224%20224%200%2091.814-55.379%20170.725-134.4%20205.313V601.6h201.472c61.925%200%20112.128%2049.716%20112.128%20112.003V825.6H108.801V713.598c0-61.855%2050.444-111.998%20112.126-111.998h201.472zM153.601%20870.4h716.793V960H153.6v-89.6z'%20fill='%23ffffff'%20p-id='10224'%3e%3c/path%3e%3c/svg%3e",Pn="data:image/svg+xml,%3csvg%20t='1763453071611'%20class='icon'%20viewBox='0%200%201024%201024'%20version='1.1'%20xmlns='http://www.w3.org/2000/svg'%20p-id='8941'%20width='20'%20height='20'%3e%3cpath%20d='M658.944%2075.776c26.9312%200%2048.64%2023.296%2048.64%2052.0192v207.872c0%2028.672-21.7088%2051.9168-48.64%2051.9168h-97.28v84.48h255.3856c59.1872%200%20107.6736%2050.2272%20109.4144%20113.4592v100.864h24.3712a47.104%2047.104%200%200%201%2034.4064%2015.2064c9.1136%209.728%2014.2336%2022.9888%2014.2336%2036.7616v155.904c0%2028.672-21.76%2051.968-48.64%2051.968h-145.92c-26.88%200-48.64-23.296-48.64-51.968V738.304c0-28.672%2021.76-51.968%2048.64-51.968h24.32v-97.4336a12.6976%2012.6976%200%200%200-10.752-12.9024l-1.4336-0.1024h-255.3344v110.4384h24.32a47.104%2047.104%200%200%201%2034.4064%2015.2064c9.1136%209.728%2014.2336%2022.9888%2014.2336%2036.7616v155.904c0%2028.672-21.76%2051.968-48.64%2051.968h-145.92c-26.88%200-48.64-23.296-48.64-51.968V738.304c0-28.672%2021.76-51.968%2048.64-51.968h24.32V576H209.0496a12.4928%2012.4928%200%200%200-12.032%2011.4688l-0.1024%201.536v97.4336h24.32a47.104%2047.104%200%200%201%2034.4064%2015.2064c9.1136%209.728%2014.2336%2022.9888%2014.2336%2036.7616v155.904c0%2028.672-21.76%2051.968-48.64%2051.968H75.264c-26.88%200-48.64-23.296-48.64-51.968V738.304c0-28.672%2021.76-51.968%2048.64-51.968h24.32v-97.4336c0-63.232%2047.0528-114.9952%20106.1888-116.8384l3.2256-0.1024h255.3856L464.384%20387.584l-97.28%200.0512c-26.8288%200-48.64-23.2448-48.64-51.968v-207.872c0-28.672%2021.8112-51.9168%2048.64-51.9168h291.84z'%20p-id='8942'%20fill='%23ffa100'%3e%3c/path%3e%3c/svg%3e",Dr="data:image/svg+xml,%3csvg%20t='1763453071611'%20class='icon'%20viewBox='0%200%201024%201024'%20version='1.1'%20xmlns='http://www.w3.org/2000/svg'%20p-id='8941'%20width='20'%20height='20'%3e%3cpath%20d='M658.944%2075.776c26.9312%200%2048.64%2023.296%2048.64%2052.0192v207.872c0%2028.672-21.7088%2051.9168-48.64%2051.9168h-97.28v84.48h255.3856c59.1872%200%20107.6736%2050.2272%20109.4144%20113.4592v100.864h24.3712a47.104%2047.104%200%200%201%2034.4064%2015.2064c9.1136%209.728%2014.2336%2022.9888%2014.2336%2036.7616v155.904c0%2028.672-21.76%2051.968-48.64%2051.968h-145.92c-26.88%200-48.64-23.296-48.64-51.968V738.304c0-28.672%2021.76-51.968%2048.64-51.968h24.32v-97.4336a12.6976%2012.6976%200%200%200-10.752-12.9024l-1.4336-0.1024h-255.3344v110.4384h24.32a47.104%2047.104%200%200%201%2034.4064%2015.2064c9.1136%209.728%2014.2336%2022.9888%2014.2336%2036.7616v155.904c0%2028.672-21.76%2051.968-48.64%2051.968h-145.92c-26.88%200-48.64-23.296-48.64-51.968V738.304c0-28.672%2021.76-51.968%2048.64-51.968h24.32V576H209.0496a12.4928%2012.4928%200%200%200-12.032%2011.4688l-0.1024%201.536v97.4336h24.32a47.104%2047.104%200%200%201%2034.4064%2015.2064c9.1136%209.728%2014.2336%2022.9888%2014.2336%2036.7616v155.904c0%2028.672-21.76%2051.968-48.64%2051.968H75.264c-26.88%200-48.64-23.296-48.64-51.968V738.304c0-28.672%2021.76-51.968%2048.64-51.968h24.32v-97.4336c0-63.232%2047.0528-114.9952%20106.1888-116.8384l3.2256-0.1024h255.3856L464.384%20387.584l-97.28%200.0512c-26.8288%200-48.64-23.2448-48.64-51.968v-207.872c0-28.672%2021.8112-51.9168%2048.64-51.9168h291.84z'%20p-id='8942'%20fill='%23ffffff'%3e%3c/path%3e%3c/svg%3e",Sg={class:"demo-node-svg"},Eg={class:"demo-node-svg__log"},Ng={class:"demo-node-svg__log-content"},Dg={class:"demo-node-svg__canvas"},Tg={class:"custom-palette"},Fg={class:"custom-palette__section"},$g=["onMousedown"],Mg={class:"custom-palette__item-icon"},Lg=["src"],Rg={class:"custom-palette__item-info"},zg=["onMousedown"],Ag={class:"custom-palette__item-icon"},Pg=["src"],Ig=j({__name:"demo-node-svg",setup(b){const e=E([]),r=[{type:"svg-start-node",label:"开始节点",classNamePerfix:"x6",width:120,height:38,rectStroke:"#95d375",rectStrokeWidth:1,rectFill:"#edf8e7",icon:Je,iconHover:Ke,textFill:"#81cb5c"},{type:"svg-approval-node",label:"审批节点",classNamePerfix:"x6",width:120,height:38,rectStroke:"#83b3f7",rectStrokeWidth:1,rectFill:"#e6eeff",icon:Qe,iconHover:en,textFill:"#5d9df7"}],o={groups:{top:{position:"top",attrs:{circle:{r:4,magnet:!0,stroke:"#5F95FF",strokeWidth:1,fill:"#fff",style:{visibility:"hidden"}},label:{position:"top"},text:{text:"",fill:"#ff5800"}}},right:{position:"right",attrs:{circle:{r:4,magnet:!0,stroke:"#5F95FF",strokeWidth:1,fill:"#fff",style:{visibility:"hidden"}},label:{position:"right"},text:{text:"",fill:"#ff5800"}}},bottom:{position:"bottom",attrs:{circle:{r:4,magnet:!0,stroke:"#5F95FF",strokeWidth:1,fill:"#fff",style:{visibility:"hidden"}},label:{position:"bottom"},text:{text:"",fill:"#ff5800"}}},left:{position:"left",attrs:{circle:{r:4,magnet:!0,stroke:"#5F95FF",strokeWidth:1,fill:"#fff",style:{visibility:"hidden"}},label:{position:"left"},text:{text:"",fill:"#ff5800"}}}},items:[{group:"top",label:{position:"top"}},{group:"right",label:{position:"right"}},{group:"bottom",label:{position:"bottom"}},{group:"left",label:{position:"left"}}]};function s(d){const t=new Date().toLocaleTimeString();e.value.push(`[${t}] ${d}`)}function l(){e.value=[]}function g(d){s("🔧 beforeGraphInit: 开始注册 SVG 节点"),r.forEach(t=>{_e.registerNode(t.type,{inherit:"rect",width:t.width,height:t.height,markup:[{tagName:"rect",selector:"body",className:t.classNamePerfix+"-"+t.type+"-body"},{tagName:"image",selector:"icon",className:t.classNamePerfix+"-"+t.type+"-image"},{tagName:"image",selector:"iconHover",className:t.classNamePerfix+"-"+t.type+"-imageHover"},{tagName:"text",selector:"label",className:t.classNamePerfix+"-"+t.type+"-label"}],attrs:{body:{stroke:t.rectStroke,strokeWidth:t.rectStrokeWidth,fill:t.rectFill,rx:10,ry:10},icon:{"xlink:href":t.icon,width:20,height:20,x:12,y:8},iconHover:{"xlink:href":t.iconHover,width:20,height:20,x:12,y:8,display:"none"},text:{fontSize:12,fill:t.textFill}},ports:H({},o)},!0),s(`✅ 已注册节点: ${t.type} (${t.label})`)}),_e.registerNode("svg-condition-node",{inherit:"polygon",width:132,height:72,markup:[{tagName:"polygon",selector:"body",className:"x6-svg-condition-node-body"},{tagName:"text",selector:"label",className:"x6-svg-condition-node-label"},{tagName:"image",selector:"icon",className:"x6-svg-condition-node-image"},{tagName:"image",selector:"iconHover",className:"x6-svg-condition-node-imageHover"}],attrs:{body:{strokeWidth:1,stroke:"#fdc059",fill:"#ffeed1",refPoints:"0,20 20,0 40,20 20,40"},text:{fontSize:12,fill:"#ffb02a",y:8},icon:{"xlink:href":Pn,width:20,height:20,x:56,y:8},iconHover:{"xlink:href":Dr,width:20,height:20,x:56,y:8,display:"none"}},ports:pe(H({},o),{items:[{group:"top"},{group:"bottom"}]})},!0),s("🎉 所有 SVG 节点注册完成")}function i(d,t){s("✅ 画布初始化完成"),s("💡 提示: 悬停查看 hover 效果，点击切换 selected 状态"),setTimeout(()=>{t.addNode({shape:"svg-start-node",x:100,y:100,label:"开始节点"}),s("📦 已添加 3 个示例节点"),s("🎨 试试悬停和点击节点吧！")},100)}function a(d,t,p){s(`🎯 开始拖拽: ${t.label}`),p(d,{shape:t.type,label:t.label,width:t.width,height:t.height,data:{label:t.label,nodeInfo:{hint:t.hint,color:t.color}}})}return(d,t)=>(h(),_("div",Sg,[n("div",Eg,[n("div",{class:"demo-node-svg__log-header"},[t[0]||(t[0]=n("h4",null,"事件日志",-1)),n("button",{class:"demo-node-svg__clear-btn",onClick:l,title:"清除日志"}," 清除 ")]),n("div",Ng,[(h(!0),_(U,null,ee(e.value,(p,c)=>(h(),_("div",{key:c,class:"demo-node-svg__log-item"},L(p),1))),128))])]),n("div",Dg,[v(D(le),{mode:"design","before-graph-init":g,onReady:i},{palette:M(({onStartDrag:p})=>[n("div",Tg,[t[3]||(t[3]=n("div",{class:"custom-palette__header"},[n("h3",{class:"custom-palette__title"},"SVG 节点"),n("span",{class:"custom-palette__desc"},"三种状态切换")],-1)),n("div",Fg,[t[2]||(t[2]=n("div",{class:"custom-palette__section-title"},"带图标的节点",-1)),(h(),_(U,null,ee(r,c=>n("div",{key:c.type,class:"custom-palette__item",onMousedown:f=>a(f,c,p),style:ye({background:c.rectFill,borderColor:c.rectStroke})},[n("div",Mg,[n("img",{src:c.icon},null,8,Lg)]),n("div",Rg,[n("div",{class:"custom-palette__item-label",style:ye({color:c.textFill})},L(c.label),5)])],44,$g)),64)),n("div",{key:"svg-condition-node",class:"custom-palette__item",onMousedown:c=>a(c,{type:"svg-condition-node",label:"条件分支",width:132,height:72},p),style:{background:"#ffeed1",borderColor:"#fdc059"}},[n("div",Ag,[n("img",{src:D(Pn)},null,8,Pg)]),t[1]||(t[1]=n("div",{class:"custom-palette__item-info"},[n("div",{class:"custom-palette__item-label",style:{color:"#ffb02a"}},"条件分支")],-1))],40,zg)]),t[4]||(t[4]=n("div",{class:"custom-palette__tips"},[n("div",{class:"tips-title"},"💡 交互说明"),n("ul",{class:"tips-list"},[n("li",null,[n("strong",null,"Default:"),Q(" 白底 + 彩色图标")]),n("li",null,[n("strong",null,"Hover:"),Q(" 淡色背景")]),n("li",null,[n("strong",null,"Selected:"),Q(" 彩底 + 白色图标")])])],-1))])]),_:1})])]))}}),Gg=ae(Ig,[["__scopeId","data-v-aac2b010"]]),Bg=`<template>\r
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
`,Og={class:"demo-node-svg"},Hg={class:"demo-node-svg__log"},Wg={class:"demo-node-svg__log-content"},Vg={class:"demo-node-svg__canvas"},Ug={class:"custom-palette"},Zg={class:"custom-palette__section"},jg=["onMousedown"],qg={class:"custom-palette__item-icon"},Yg=["src"],Xg={class:"custom-palette__item-info"},Jg=j({__name:"demo-node-html",setup(b){const e=E([]),r=[{type:"html-start-node",label:"开始节点",classNamePerfix:"x6",width:120,height:38,rectStroke:"#95d375",rectStrokeWidth:1,rectFill:"#edf8e7",icon:Je,iconHover:Ke,textFill:"#81cb5c"},{type:"html-approval-node",label:"审批节点",classNamePerfix:"x6",width:120,height:38,rectStroke:"#83b3f7",rectStrokeWidth:1,rectFill:"#e6eeff",icon:Qe,iconHover:en,textFill:"#5d9df7"}];function o(a){const d=new Date().toLocaleTimeString();e.value.push(`[${d}] ${a}`)}function s(){e.value=[]}function l(a){o("🔧 beforeGraphInit: 开始注册 SVG 节点"),r.forEach(d=>{it.register({shape:d.type,width:d.width,height:d.height,effect:["data","_state"],html(t){const p=t.getProp("label");console.log("dddddddddddd::",p);const c=t.getProp("_state")||"default",f=document.createElement("div");f.className=`x6-${d.type}`;const m=c==="selected"?"node-card--selected":"",N=c==="selected"?`<img src="${d.iconHover}" />`:`<img src="${d.icon}" />`;return f.innerHTML=`
        <div class="node-card ${m}">
          <div class="body">
            ${N}
            <div class="info">
              <div class="name">${t.getProp("label")||"HTML 节点"}</div>
            </div>
          </div>
        </div>
      `,f},ports:{groups:{top:{position:"top",attrs:{circle:{r:6,magnet:!0,stroke:"#722ed1",strokeWidth:2,fill:"#fff",style:{visibility:"hidden"}}}},right:{position:"right",attrs:{circle:{r:6,magnet:!0,stroke:"#722ed1",strokeWidth:2,fill:"#fff",style:{visibility:"hidden"}}}},bottom:{position:"bottom",attrs:{circle:{r:6,magnet:!0,stroke:"#722ed1",strokeWidth:2,fill:"#fff",style:{visibility:"hidden"}}}},left:{position:"left",attrs:{circle:{r:6,magnet:!0,stroke:"#722ed1",strokeWidth:2,fill:"#fff",style:{visibility:"hidden"}}}}},items:[{group:"top",id:"port-top"},{group:"right",id:"port-right"},{group:"bottom",id:"port-bottom"},{group:"left",id:"port-left"}]}}),o(`✅ 已注册节点: ${d.type} (${d.label})`)}),o("🎉 所有 SVG 节点注册完成")}function g(a,d){o("✅ 画布初始化完成"),o("💡 提示: 悬停查看 hover 效果，点击切换 selected 状态"),setTimeout(()=>{const t=d.createNode({shape:"html-start-node",x:120,y:100,label:"开始节点"});d.addNode(t),a.setNodeState(t,"default"),console.log("nodenodenodenodenodenode::",t),o("📦 已添加 2 个示例节点"),o("🎨 试试点击节点切换状态吧！")},100)}function i(a,d,t){o(`🎯 开始拖拽: ${d.label}`),t(a,{shape:d.type,label:d.label,width:d.width,height:d.height,data:{label:d.label,nodeInfo:{hint:d.hint,color:d.color}}})}return(a,d)=>(h(),_("div",Og,[n("div",Hg,[n("div",{class:"demo-node-svg__log-header"},[d[0]||(d[0]=n("h4",null,"事件日志",-1)),n("button",{class:"demo-node-svg__clear-btn",onClick:s,title:"清除日志"}," 清除 ")]),n("div",Wg,[(h(!0),_(U,null,ee(e.value,(t,p)=>(h(),_("div",{key:p,class:"demo-node-svg__log-item"},L(t),1))),128))])]),n("div",Vg,[v(D(le),{mode:"design","before-graph-init":l,onReady:g},{palette:M(({onStartDrag:t})=>[n("div",Ug,[d[2]||(d[2]=n("div",{class:"custom-palette__header"},[n("h3",{class:"custom-palette__title"},"HTML 节点"),n("span",{class:"custom-palette__desc"})],-1)),n("div",Zg,[d[1]||(d[1]=n("div",{class:"custom-palette__section-title"},"带图标的节点",-1)),(h(),_(U,null,ee(r,p=>n("div",{key:p.type,class:"custom-palette__item",onMousedown:c=>i(c,p,t),style:ye({background:p.rectFill,borderColor:p.rectStroke})},[n("div",qg,[n("img",{src:p.icon},null,8,Yg)]),n("div",Xg,[n("div",{class:"custom-palette__item-label",style:ye({color:p.textFill})},L(p.label),5)])],44,jg)),64))]),d[3]||(d[3]=n("div",{class:"custom-palette__tips"},[n("div",{class:"tips-title"},"💡 交互说明"),n("ul",{class:"tips-list"},[n("li",null,[n("strong",null,"Default:"),Q(" 白底 + 彩色图标")]),n("li",null,[n("strong",null,"Hover:"),Q(" 淡色背景")]),n("li",null,[n("strong",null,"Selected:"),Q(" 彩底 + 白色图标")])])],-1))])]),_:1})])]))}}),Kg=ae(Jg,[["__scopeId","data-v-b7c7a4ad"]]),Qg=`<template>\r
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
`,eu={style:{width:"100%",height:"100%"}},nu={class:"body"},ru=["src"],tu=["src"],ou={class:"info"},su={class:"name"},iu=j({__name:"StartNode",props:{node:{}},setup(b){var i;const e=b,r=Ve("getGraph"),o=E((i=e.node.getData())!=null?i:{}),s=E(!1),l=E(""),g=()=>{var a;o.value=(a=e.node.getData())!=null?a:{},l.value=e.node.getProp("label")};return Ge(()=>{e.node.on("change:data",g);const a=r==null?void 0:r();a&&(a.on("cell:selected",({cell:d})=>{d.id===e.node.id&&(s.value=!0)}),a.on("cell:unselected",({cell:d})=>{d.id===e.node.id&&(s.value=!1)}))}),nn(()=>{e.node.off("change:data",g)}),(a,d)=>(h(),_("div",eu,[n("div",{class:we(["node-start",{"node-start--selected":s.value}])},[n("div",nu,[s.value?B("",!0):(h(),_("img",{key:0,src:D(Je)},null,8,ru)),s.value?(h(),_("img",{key:1,src:D(Ke)},null,8,tu)):B("",!0),n("div",ou,[n("div",su,L(l.value||"开始"),1)])])],2)]))}}),au=ae(iu,[["__scopeId","data-v-c183cbc0"]]),lu={class:"body"},du=["src"],cu=["src"],pu={class:"info"},gu={class:"name"},uu=j({__name:"ApproverNode",props:{node:{}},setup(b){var i;const e=b,r=Ve("getGraph"),o=E((i=e.node.getData())!=null?i:{}),s=E(!1),l=E(""),g=()=>{var a;o.value=(a=e.node.getData())!=null?a:{},l.value=e.node.getProp("label")};return Ge(()=>{e.node.on("change:data",g);const a=r==null?void 0:r();a&&(a.on("cell:selected",({cell:d})=>{d.id===e.node.id&&(s.value=!0)}),a.on("cell:unselected",({cell:d})=>{d.id===e.node.id&&(s.value=!1)}))}),nn(()=>{e.node.off("change:data",g)}),(a,d)=>(h(),_("div",{class:we(["node-approval",{"node-approval--selected":s.value}])},[n("div",lu,[s.value?B("",!0):(h(),_("img",{key:0,src:D(Qe)},null,8,du)),s.value?(h(),_("img",{key:1,src:D(en)},null,8,cu)):B("",!0),n("div",pu,[n("div",gu,L(l.value||"审批人节点"),1)])])],2))}}),fu=ae(uu,[["__scopeId","data-v-8153fca3"]]),mu={class:"demo-node-svg"},hu={class:"demo-node-svg__log"},vu={class:"demo-node-svg__log-content"},bu={class:"demo-node-svg__canvas"},_u={class:"custom-palette"},xu={class:"custom-palette__section"},yu=["onMousedown"],wu={class:"custom-palette__item-icon"},ku=["src"],Cu={class:"custom-palette__item-info"},Su=j({__name:"demo-node-vue",setup(b){const e=E([]),r=[{type:"vue-start-node",label:"开始节点",classNamePerfix:"x6",width:120,height:38,rectStroke:"#95d375",rectStrokeWidth:1,rectFill:"#edf8e7",icon:Je,iconHover:Ke,textFill:"#81cb5c"},{type:"vue-approval-node",label:"审批节点",classNamePerfix:"x6",width:120,height:38,rectStroke:"#83b3f7",rectStrokeWidth:1,rectFill:"#e6eeff",icon:Qe,iconHover:en,textFill:"#5d9df7"}],o={groups:{top:{position:"top",attrs:{circle:{r:4,magnet:!0,stroke:"#5F95FF",strokeWidth:1,fill:"#fff",style:{visibility:"hidden"}},label:{position:"top"},text:{text:"",fill:"#ff5800"}}},right:{position:"right",attrs:{circle:{r:4,magnet:!0,stroke:"#5F95FF",strokeWidth:1,fill:"#fff",style:{visibility:"hidden"}},label:{position:"right"},text:{text:"",fill:"#ff5800"}}},bottom:{position:"bottom",attrs:{circle:{r:4,magnet:!0,stroke:"#5F95FF",strokeWidth:1,fill:"#fff",style:{visibility:"hidden"}},label:{position:"bottom"},text:{text:"",fill:"#ff5800"}}},left:{position:"left",attrs:{circle:{r:4,magnet:!0,stroke:"#5F95FF",strokeWidth:1,fill:"#fff",style:{visibility:"hidden"}},label:{position:"left"},text:{text:"",fill:"#ff5800"}}}},items:[{group:"top",label:{position:"top"}},{group:"right",label:{position:"right"}},{group:"bottom",label:{position:"bottom"}},{group:"left",label:{position:"left"}}]};function s(d){const t=new Date().toLocaleTimeString();e.value.push(`[${t}] ${d}`)}function l(){e.value=[]}function g(d){s("🔧 beforeGraphInit: 开始注册 SVG 节点"),an({shape:"vue-start-node",width:120,height:38,component:au,ports:H({},o)}),an({shape:"vue-approval-node",width:120,height:38,component:fu,ports:H({},o)}),s("🎉 所有 SVG 节点注册完成")}function i(d,t){s("✅ 画布初始化完成"),s("💡 提示: 悬停查看 hover 效果，点击切换 selected 状态"),setTimeout(()=>{t.addNode({shape:"vue-start-node",x:100,y:100,label:"开始节点"}),s("📦 已添加 3 个示例节点"),s("🎨 试试悬停和点击节点吧！")},100)}function a(d,t,p){s(`🎯 开始拖拽: ${t.label}`),p(d,{shape:t.type,label:t.label,width:t.width,height:t.height,data:{label:t.label,nodeInfo:{hint:t.hint,color:t.color}}})}return(d,t)=>(h(),_("div",mu,[n("div",hu,[n("div",{class:"demo-node-svg__log-header"},[t[0]||(t[0]=n("h4",null,"事件日志",-1)),n("button",{class:"demo-node-svg__clear-btn",onClick:l,title:"清除日志"}," 清除 ")]),n("div",vu,[(h(!0),_(U,null,ee(e.value,(p,c)=>(h(),_("div",{key:c,class:"demo-node-svg__log-item"},L(p),1))),128))])]),n("div",bu,[v(D(le),{mode:"design","before-graph-init":g,onReady:i},{palette:M(({onStartDrag:p})=>[n("div",_u,[t[2]||(t[2]=n("div",{class:"custom-palette__header"},[n("h3",{class:"custom-palette__title"},"VUE 节点"),n("span",{class:"custom-palette__desc"},"三种状态切换")],-1)),n("div",xu,[t[1]||(t[1]=n("div",{class:"custom-palette__section-title"},"带图标的节点",-1)),(h(),_(U,null,ee(r,c=>n("div",{key:c.type,class:"custom-palette__item",onMousedown:f=>a(f,c,p),style:ye({background:c.rectFill,borderColor:c.rectStroke})},[n("div",wu,[n("img",{src:c.icon},null,8,ku)]),n("div",Cu,[n("div",{class:"custom-palette__item-label",style:ye({color:c.textFill})},L(c.label),5)])],44,yu)),64))]),t[3]||(t[3]=n("div",{class:"custom-palette__tips"},[n("div",{class:"tips-title"},"💡 交互说明"),n("ul",{class:"tips-list"},[n("li",null,[n("strong",null,"Default:"),Q(" 白底 + 彩色图标")]),n("li",null,[n("strong",null,"Hover:"),Q(" 淡色背景")]),n("li",null,[n("strong",null,"Selected:"),Q(" 彩底 + 白色图标")])])],-1))])]),_:1})])]))}}),Eu=ae(Su,[["__scopeId","data-v-1a5f2e0b"]]),Nu=`<template>\r
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
`,Du=`<template>\r
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
`,Tu=`<template>\r
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
`,Fu={class:"demo-node-svg"},$u={class:"demo-node-svg__log"},Mu={class:"demo-node-svg__log-content"},Lu={class:"demo-node-svg__canvas"},Ru={class:"custom-palette"},zu={class:"custom-palette__section"},Au=["onMousedown"],Pu={class:"custom-palette__item-icon"},Iu=["src"],Gu={class:"custom-palette__item-info"},Bu={style:{width:"100%",height:"100%"},"data-cvn-root":""},Ou={class:"body"},Hu=["src"],Wu=["src"],Vu={class:"info"},Uu={class:"name"},Zu={style:{width:"100%",height:"100%"},"data-cvn-root":""},ju={class:"body"},qu=["src"],Yu=["src"],Xu={class:"info"},Ju={class:"name"},Ku=j({__name:"demo-node-designer",setup(b){const e=E([]),r=[{type:"slot-startNode",label:"开始节点",classNamePerfix:"x6",width:120,height:38,rectStroke:"#95d375",rectStrokeWidth:1,rectFill:"#edf8e7",icon:Je,iconHover:Ke,textFill:"#81cb5c"},{type:"slot-approvalNode",label:"审批节点",classNamePerfix:"x6",width:120,height:38,rectStroke:"#83b3f7",rectStrokeWidth:1,rectFill:"#e6eeff",icon:Qe,iconHover:en,textFill:"#5d9df7"}];function o(a){const d=new Date().toLocaleTimeString();e.value.push(`[${d}] ${a}`)}function s(){e.value=[]}function l(a){o("🔧 beforeGraphInit: 开始注册 SVG 节点"),o("🎉 所有 插槽 节点注册完成")}function g(a,d){o("✅ 画布初始化完成"),o("💡 提示: 悬停查看 hover 效果，点击切换 selected 状态"),setTimeout(()=>{d.addNode({shape:"common-vue-node","node-type":"slot-startNode",x:120,y:38,label:"开始节点",data:{}}),o("📦 已添加 2 个示例节点（测试响应式 data）"),o("🎨 试试悬停和点击节点吧！")},100)}function i(a,d,t){o(`🎯 开始拖拽: ${d.label}`),t(a,{shape:"common-vue-node",label:d.label,width:d.width,height:d.height,"node-type":d.type,data:{}})}return(a,d)=>(h(),_("div",Fu,[n("div",$u,[n("div",{class:"demo-node-svg__log-header"},[d[0]||(d[0]=n("h4",null,"事件日志",-1)),n("button",{class:"demo-node-svg__clear-btn",onClick:s,title:"清除日志"}," 清除 ")]),n("div",Mu,[(h(!0),_(U,null,ee(e.value,(t,p)=>(h(),_("div",{key:p,class:"demo-node-svg__log-item"},L(t),1))),128))])]),n("div",Lu,[v(D(le),{mode:"design","before-graph-init":l,onReady:g},{palette:M(({onStartDrag:t})=>[n("div",Ru,[d[2]||(d[2]=n("div",{class:"custom-palette__header"},[n("h3",{class:"custom-palette__title"},"插槽 节点"),n("span",{class:"custom-palette__desc"})],-1)),n("div",zu,[d[1]||(d[1]=n("div",{class:"custom-palette__section-title"},"带图标的节点",-1)),(h(),_(U,null,ee(r,p=>n("div",{key:p.type,class:"custom-palette__item",onMousedown:c=>i(c,p,t),style:ye({background:p.rectFill,borderColor:p.rectStroke})},[n("div",Pu,[n("img",{src:p.icon},null,8,Iu)]),n("div",Gu,[n("div",{class:"custom-palette__item-label",style:ye({color:p.textFill})},L(p.label),5)])],44,Au)),64))]),d[3]||(d[3]=n("div",{class:"custom-palette__tips"},[n("div",{class:"tips-title"},"💡 交互说明"),n("ul",{class:"tips-list"},[n("li",null,[n("strong",null,"Default:"),Q(" 白底 + 彩色图标")]),n("li",null,[n("strong",null,"Hover:"),Q(" 淡色背景")]),n("li",null,[n("strong",null,"Selected:"),Q(" 彩底 + 白色图标")])])],-1))])]),"node-slot-startNode":M(({node:t,graph:p,data:c,label:f,state:m})=>[n("div",Bu,[n("div",{class:we(["node-start",{"node-start--selected":m.value==="selected"}])},[n("div",Ou,[m.value!=="selected"?(h(),_("img",{key:0,src:D(Je)},null,8,Hu)):B("",!0),m.value==="selected"?(h(),_("img",{key:1,src:D(Ke)},null,8,Wu)):B("",!0),n("div",Vu,[n("div",Uu,L(f||"开始"),1)])])],2)])]),"node-slot-approvalNode":M(({node:t,graph:p,data:c,label:f,state:m})=>[n("div",Zu,[n("div",{class:we(["node-approval",{"node-approval--selected":m==="selected"}])},[n("div",ju,[m!=="selected"?(h(),_("img",{key:0,src:D(Qe)},null,8,qu)):B("",!0),m==="selected"?(h(),_("img",{key:1,src:D(en)},null,8,Yu)):B("",!0),n("div",Xu,[n("div",Ju,L(f||"开始"),1)])])],2)])]),_:1})])]))}}),Qu=ae(Ku,[["__scopeId","data-v-ed495e91"]]),ef=`<template>\r
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
`,nf={class:"demo-node-svg"},rf={class:"demo-node-svg__log"},tf={class:"demo-node-svg__log-content"},of={class:"demo-node-svg__canvas"},sf={class:"custom-palette"},af={class:"custom-palette__section"},lf=["onMousedown"],df={class:"custom-palette__item-icon"},cf=["src"],pf={class:"custom-palette__item-info"},gf=["onMousedown"],uf={class:"custom-palette__item-icon"},ff=["src"],mf=j({__name:"demo-edge-svg",setup(b){const e=E([]),r=[{type:"svg-start-node",label:"开始节点",classNamePerfix:"x6",width:120,height:38,rectStroke:"#95d375",rectStrokeWidth:1,rectFill:"#edf8e7",icon:Je,iconHover:Ke,textFill:"#81cb5c"},{type:"svg-approval-node",label:"审批节点",classNamePerfix:"x6",width:120,height:38,rectStroke:"#83b3f7",rectStrokeWidth:1,rectFill:"#e6eeff",icon:Qe,iconHover:en,textFill:"#5d9df7"}],o={groups:{top:{position:"top",attrs:{circle:{r:4,magnet:!0,stroke:"#5F95FF",strokeWidth:1,fill:"#fff",style:{visibility:"hidden"}},label:{position:"top"},text:{text:"",fill:"#ff5800"}}},right:{position:"right",attrs:{circle:{r:4,magnet:!0,stroke:"#5F95FF",strokeWidth:1,fill:"#fff",style:{visibility:"hidden"}},label:{position:"right"},text:{text:"",fill:"#ff5800"}}},bottom:{position:"bottom",attrs:{circle:{r:4,magnet:!0,stroke:"#5F95FF",strokeWidth:1,fill:"#fff",style:{visibility:"hidden"}},label:{position:"bottom"},text:{text:"",fill:"#ff5800"}}},left:{position:"left",attrs:{circle:{r:4,magnet:!0,stroke:"#5F95FF",strokeWidth:1,fill:"#fff",style:{visibility:"hidden"}},label:{position:"left"},text:{text:"",fill:"#ff5800"}}}},items:[{id:"port-top",group:"top",label:{position:"top"}},{id:"port-right",group:"right",label:{position:"right"}},{id:"port-bottom",group:"bottom",label:{position:"bottom"}},{id:"port-left",group:"left",label:{position:"left"}}]};function s(d){const t=new Date().toLocaleTimeString();e.value.push(`[${t}] ${d}`)}function l(){e.value=[]}function g(d){s("🔧 beforeGraphInit: 开始注册 SVG 节点"),r.forEach(t=>{_e.registerNode(t.type,{inherit:"rect",width:t.width,height:t.height,markup:[{tagName:"rect",selector:"body",className:t.classNamePerfix+"-"+t.type+"-body"},{tagName:"image",selector:"icon",className:t.classNamePerfix+"-"+t.type+"-image"},{tagName:"image",selector:"iconHover",className:t.classNamePerfix+"-"+t.type+"-imageHover"},{tagName:"text",selector:"label",className:t.classNamePerfix+"-"+t.type+"-label"}],attrs:{body:{stroke:t.rectStroke,strokeWidth:t.rectStrokeWidth,fill:t.rectFill,rx:10,ry:10},icon:{"xlink:href":t.icon,width:20,height:20,x:12,y:8},iconHover:{"xlink:href":t.iconHover,width:20,height:20,x:12,y:8,display:"none"},text:{fontSize:12,fill:t.textFill}},ports:H({},o)},!0),s(`✅ 已注册节点: ${t.type} (${t.label})`)}),_e.registerNode("svg-condition-node",{inherit:"polygon",width:132,height:72,markup:[{tagName:"polygon",selector:"body",className:"x6-svg-condition-node-body"},{tagName:"text",selector:"label",className:"x6-svg-condition-node-label"},{tagName:"image",selector:"icon",className:"x6-svg-condition-node-image"},{tagName:"image",selector:"iconHover",className:"x6-svg-condition-node-imageHover"}],attrs:{body:{strokeWidth:1,stroke:"#fdc059",fill:"#ffeed1",refPoints:"0,20 20,0 40,20 20,40"},text:{fontSize:12,fill:"#ffb02a",y:8},icon:{"xlink:href":Pn,width:20,height:20,x:56,y:8},iconHover:{"xlink:href":Dr,width:20,height:20,x:56,y:8,display:"none"}},ports:pe(H({},o),{items:[{group:"top"},{group:"bottom"}]})},!0),s("🎉 所有 SVG 节点注册完成"),s("🔧 开始注册自定义边"),_e.registerEdge("gradient-flow-edge",{inherit:"edge",attrs:{line:{stroke:"#1890ff",strokeWidth:3,targetMarker:{name:"block",width:12,height:8},strokeDasharray:5,style:{animation:"ant-line 30s infinite linear"}}}},!0),_e.registerEdge("rainbow-edge",{inherit:"edge",attrs:{line:{stroke:{type:"linearGradient",stops:[{offset:"0%",color:"#667eea"},{offset:"50%",color:"#764ba2"},{offset:"100%",color:"#f093fb"}]},strokeWidth:4,targetMarker:{name:"classic",fill:"#f093fb",stroke:"#f093fb"}}}},!0),_e.registerEdge("glow-edge",{inherit:"edge",attrs:{line:{stroke:"#52c41a",strokeWidth:3,targetMarker:{name:"block",fill:"#52c41a",stroke:"#52c41a",width:10,height:8},filter:{name:"dropShadow",args:{dx:0,dy:0,blur:8,color:"#52c41a"}}}}},!0),_e.registerEdge("thick-arrow-edge",{inherit:"edge",attrs:{line:{stroke:"#ff4d4f",strokeWidth:5,targetMarker:{name:"block",fill:"#ff4d4f",stroke:"#ff4d4f",width:16,height:12}}}},!0),s("✨ 自定义边注册完成")}function i(d,t){s("✅ 画布初始化完成"),s("💡 提示: 悬停查看 hover 效果，点击切换 selected 状态"),setTimeout(()=>{t.addNode({shape:"svg-start-node",x:100,y:80,label:"开始",id:"node-1"}),t.addNode({shape:"svg-approval-node",x:300,y:80,label:"审批",id:"node-2"}),t.addNode({shape:"svg-start-node",x:100,y:200,label:"节点A",id:"node-3"}),t.addNode({shape:"svg-approval-node",x:300,y:200,label:"节点B",id:"node-4"}),t.addNode({shape:"svg-start-node",x:100,y:320,label:"任务1",id:"node-5"}),t.addNode({shape:"svg-approval-node",x:300,y:320,label:"任务2",id:"node-6"}),t.addNode({shape:"svg-start-node",x:100,y:440,label:"步骤X",id:"node-7"}),t.addNode({shape:"svg-approval-node",x:300,y:440,label:"步骤Y",id:"node-8"}),setTimeout(()=>{t.addEdge({shape:"gradient-flow-edge",source:{cell:"node-1",port:"port-right"},target:{cell:"node-2",port:"port-left"},label:"流动边",attrs:{line:{stroke:"#1890ff"}}}),s("➡️ 添加流动边（蚂蚁线动画）"),t.addEdge({shape:"rainbow-edge",source:{cell:"node-3",port:"port-right"},target:{cell:"node-4",port:"port-left"},label:"渐变边"}),s("🌈 添加渐变色边"),t.addEdge({shape:"glow-edge",source:{cell:"node-5",port:"port-right"},target:{cell:"node-6",port:"port-left"},label:"发光边"}),s("✨ 添加发光边"),t.addEdge({shape:"thick-arrow-edge",source:{cell:"node-7",port:"port-right"},target:{cell:"node-8",port:"port-left"},label:"粗箭头"}),s("🎯 添加粗箭头边"),s("📦 已添加 8 个节点和 4 种自定义边"),s("🎨 试试悬停和点击边吧！")},300)},100)}function a(d,t,p){s(`🎯 开始拖拽: ${t.label}`),p(d,{shape:t.type,label:t.label,width:t.width,height:t.height,data:{label:t.label,nodeInfo:{hint:t.hint,color:t.color}}})}return(d,t)=>(h(),_("div",nf,[n("div",rf,[n("div",{class:"demo-node-svg__log-header"},[t[0]||(t[0]=n("h4",null,"事件日志",-1)),n("button",{class:"demo-node-svg__clear-btn",onClick:l,title:"清除日志"}," 清除 ")]),n("div",tf,[(h(!0),_(U,null,ee(e.value,(p,c)=>(h(),_("div",{key:c,class:"demo-node-svg__log-item"},L(p),1))),128))])]),n("div",of,[v(D(le),{mode:"design","before-graph-init":g,onReady:i},{palette:M(({onStartDrag:p})=>[n("div",sf,[t[3]||(t[3]=n("div",{class:"custom-palette__header"},[n("h3",{class:"custom-palette__title"},"SVG 节点"),n("span",{class:"custom-palette__desc"},"三种状态切换")],-1)),n("div",af,[t[2]||(t[2]=n("div",{class:"custom-palette__section-title"},"带图标的节点",-1)),(h(),_(U,null,ee(r,c=>n("div",{key:c.type,class:"custom-palette__item",onMousedown:f=>a(f,c,p),style:ye({background:c.rectFill,borderColor:c.rectStroke})},[n("div",df,[n("img",{src:c.icon},null,8,cf)]),n("div",pf,[n("div",{class:"custom-palette__item-label",style:ye({color:c.textFill})},L(c.label),5)])],44,lf)),64)),n("div",{key:"svg-condition-node",class:"custom-palette__item",onMousedown:c=>a(c,{type:"svg-condition-node",label:"条件分支",width:132,height:72},p),style:{background:"#ffeed1",borderColor:"#fdc059"}},[n("div",uf,[n("img",{src:D(Pn)},null,8,ff)]),t[1]||(t[1]=n("div",{class:"custom-palette__item-info"},[n("div",{class:"custom-palette__item-label",style:{color:"#ffb02a"}},"条件分支")],-1))],40,gf)]),t[4]||(t[4]=n("div",{class:"custom-palette__tips"},[n("div",{class:"tips-title"},"💡 交互说明"),n("ul",{class:"tips-list"},[n("li",null,[n("strong",null,"Default:"),Q(" 白底 + 彩色图标")]),n("li",null,[n("strong",null,"Hover:"),Q(" 淡色背景")]),n("li",null,[n("strong",null,"Selected:"),Q(" 彩底 + 白色图标")])])],-1))])]),_:1})])]))}}),hf=ae(mf,[["__scopeId","data-v-f54e612e"]]),vf=`<template>\r
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
`;var sn=(b=>(b.UNDO="undo",b.REDO="redo",b.REDO_ALT="redoAlt",b.COPY="copy",b.PASTE="paste",b.DELETE="delete",b.DELETE_ALT="deleteAlt",b.SELECT_ALL="selectAll",b.GROUP="group",b.UNGROUP="ungroup",b.ZOOM_IN="zoomIn",b.ZOOM_OUT="zoomOut",b.FIT_VIEW="fitView",b.RESET_VIEW="resetView",b.SAVE="save",b.SEARCH="search",b))(sn||{});const bf=j({__name:"demo-shortcut-keymap",setup(b){const e={keyMap:{[sn.COPY]:"ctrl+e",[sn.PASTE]:"ctrl+shift+v",[sn.SAVE]:null,[sn.DELETE]:null,[sn.DELETE_ALT]:null}};let r=null;function o(l){const g=l.getGraph(),i=g.addNode({id:"node1",shape:"rect",x:100,y:100,width:120,height:60,label:"节点 1",attrs:{body:{fill:"#5F95FF",stroke:"#2563EB",strokeWidth:2},label:{fill:"#ffffff",fontSize:14,fontWeight:"bold"}}}),a=g.addNode({id:"node2",shape:"circle",x:300,y:100,width:80,height:80,label:"节点 2",attrs:{body:{fill:"#10B981",stroke:"#059669",strokeWidth:2},label:{fill:"#ffffff",fontSize:14,fontWeight:"bold"}}}),d=g.addNode({id:"node3",shape:"ellipse",x:500,y:100,width:100,height:60,label:"节点 3",attrs:{body:{fill:"#F59E0B",stroke:"#D97706",strokeWidth:2},label:{fill:"#ffffff",fontSize:14,fontWeight:"bold"}}});g.addEdge({shape:"flow-edge",source:i,target:a,labels:["连线 1"]}),g.addEdge({shape:"flow-edge",source:a,target:d,labels:["连线 2"]}),g.centerContent(),r=()=>{var p;const t=(p=g.clipboard)==null?void 0:p.cells;t&&t.length>0&&ue.success(`已复制 ${t.length} 个元素（使用 Ctrl+E）`)},g.on("clipboard:changed",r),console.log("[Demo] 快捷键映射示例已加载"),ue.info("快捷键已重新映射：Ctrl+E=复制, Ctrl+Shift+V=粘贴")}function s(l){console.log("[Demo] 保存数据：",l),ue.success("保存成功！")}return dr(()=>{console.log("[Demo] 组件卸载，事件监听器将由 FlowDesigner.destroy() 自动清理")}),(l,g)=>(h(),Ne(D(le),{shortcuts:e,onReady:o,onSave:s}))}}),_f=`<template>
  <FlowDesignerLayout
    :shortcuts="shortcutConfig"
    @ready="handleReady"
    @save="handleSave"
  />
</template>

<script setup lang="ts">
import { ref, onBeforeUnmount } from 'vue'
import { message } from 'ant-design-vue'
import { FlowDesignerLayout }  from '@quick-code/x6-flow-designer'
import type { FlowDesigner } from '@quick-code/x6-flow-designer'
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
`,xf=j({__name:"demo-node-state",setup(b){function e(r){const o=r.getGraph();r.registerNodeStateHandler("default",{apply(p){p.setAttrs({body:{stroke:"#3b82f6",strokeWidth:2,fill:"#dbeafe"},label:{fill:"#1e40af",fontWeight:"normal"}})}}),r.registerNodeStateHandler("hover",{apply(p){p.setAttrs({body:{stroke:"#8b5cf6",strokeWidth:3,fill:"#ede9fe",filter:{name:"dropShadow",args:{dx:0,dy:2,blur:6,color:"rgba(139, 92, 246, 0.4)"}}},label:{fill:"#5b21b6",fontWeight:"bold"}})},cleanup(p){p.setAttrs({body:{filter:null}})}}),r.registerNodeStateHandler("selected",{apply(p){p.setAttrs({body:{stroke:"#06b6d4",strokeWidth:4,fill:"#cffafe",filter:{name:"dropShadow",args:{dx:0,dy:0,blur:8,color:"rgba(6, 182, 212, 0.6)"}}},label:{fill:"#164e63",fontWeight:"bold",fontSize:14}})},cleanup(p){p.setAttrs({body:{filter:null}})}}),r.registerNodeStateHandler("error",{apply(p){p.setAttrs({body:{stroke:"#ef4444",strokeWidth:4,fill:"#fee2e2",filter:{name:"dropShadow",args:{dx:0,dy:2,blur:8,color:"rgba(239, 68, 68, 0.5)"}}},label:{fill:"#991b1b",fontWeight:"bold"}});const c=p.getData()||{};p.setData(pe(H({},c),{hasError:!0,errorMessage:"节点验证失败"}))},cleanup(p){p.setAttrs({body:{filter:null}});const c=p.getData()||{};p.setData(pe(H({},c),{hasError:!1,errorMessage:void 0}))}});const s=o.addNode({id:"node1",shape:"rect",x:80,y:80,width:140,height:70,label:"默认状态",attrs:{label:{fontSize:14}}});r.setNodeState(s,"default");const l=o.addNode({id:"node2",shape:"rect",x:280,y:80,width:140,height:70,label:"默认状态",attrs:{label:{fontSize:14}}});r.setNodeState(l,"default");const g=o.addNode({id:"node3",shape:"rect",x:480,y:80,width:140,height:70,label:"默认状态",attrs:{label:{fontSize:14}}});r.setNodeState(g,"default");const i=o.addNode({id:"node4",shape:"rect",x:80,y:200,width:140,height:70,label:"默认状态",attrs:{label:{fontSize:14}}});r.setNodeState(i,"default");const a=o.addNode({id:"node5",shape:"rect",x:280,y:200,width:140,height:70,label:"默认状态",attrs:{label:{fontSize:14}}});r.setNodeState(a,"default");const d=o.addNode({id:"node6",shape:"rect",x:480,y:200,width:140,height:70,label:"默认状态",attrs:{label:{fontSize:14}}});r.setNodeState(d,"default"),o.addEdge({id:"edge1",shape:"flow-edge",source:s,target:l,labels:["流程1"]}),o.addEdge({id:"edge2",shape:"flow-edge",source:l,target:g,labels:["流程2"]}),o.addEdge({id:"edge3",shape:"flow-edge",source:s,target:i,labels:["流程3"]}),o.addEdge({id:"edge4",shape:"flow-edge",source:i,target:a,labels:["流程4"]}),o.addEdge({id:"edge5",shape:"flow-edge",source:a,target:d,labels:["流程5"]}),o.centerContent();const t=new Map;o.on("node:dblclick",({node:p})=>{(p.getProp("_state")||"default")==="error"?(r.setNodeState(p,"default"),t.set(p.id,0),ue.success("节点已恢复到默认状态")):(r.setNodeState(p,"error"),ue.error("节点已设置为错误状态（双击可恢复）"))}),console.log("[Demo] 节点状态管理示例已加载（覆盖内置状态）"),ue.success("已覆盖 3 种内置节点状态，单击切换状态，双击切换 error 状态")}return(r,o)=>(h(),Ne(D(le),{onReady:e}))}}),yf=`<template>\r
  <FlowDesignerLayout\r
    @ready="handleReady"\r
  />\r
</template>\r
\r
<script setup lang="ts">\r
import { message } from 'ant-design-vue'\r
import { FlowDesignerLayout }  from '@quick-code/x6-flow-designer'\r
import type { FlowDesigner } from '@quick-code/x6-flow-designer'\r
import type { Node } from '@antv/x6'\r
\r
/**\r
 * ready 回调：覆盖内置节点状态并初始化画布\r
 */\r
function handleReady(designer: FlowDesigner) {\r
  const graph = designer.getGraph()\r
\r
  // ========== 覆盖 3 种内置节点状态 ==========\r
\r
  // 1. 覆盖 default 状态：淡蓝色边框\r
  designer.registerNodeStateHandler('default', {\r
    apply(node) {\r
      node.setAttrs({\r
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
  })\r
\r
  // 2. 覆盖 hover 状态：紫色加粗 + 阴影\r
  designer.registerNodeStateHandler('hover', {\r
    apply(node) {\r
      node.setAttrs({\r
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
    cleanup(node) {\r
      node.setAttrs({\r
        body: {\r
          filter: null\r
        }\r
      })\r
    }\r
  })\r
\r
  // 3. 覆盖 selected 状态：青色粗边框 + 光晕\r
  designer.registerNodeStateHandler('selected', {\r
    apply(node) {\r
      node.setAttrs({\r
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
          fontSize: 14,\r
        }\r
      })\r
    },\r
    cleanup(node) {\r
      node.setAttrs({\r
        body: {\r
          filter: null\r
        }\r
      })\r
    }\r
  })\r
\r
  // ========== 新增自定义状态 ==========\r
\r
  // 4. error 状态：红色粗边框 + 错误图标\r
  designer.registerNodeStateHandler('error', {\r
    apply(node) {\r
      node.setAttrs({\r
        body: {\r
          stroke: '#ef4444',\r
          strokeWidth: 4,\r
          fill: '#fee2e2',\r
          filter: {\r
            name: 'dropShadow',\r
            args: { dx: 0, dy: 2, blur: 8, color: 'rgba(239, 68, 68, 0.5)' }\r
          }\r
        },\r
        label: {\r
          fill: '#991b1b',\r
          fontWeight: 'bold',\r
        }\r
      })\r
\r
      // 设置错误标记（可在插槽中使用）\r
      const currentData = node.getData() || {}\r
      node.setData({\r
        ...currentData,\r
        hasError: true,\r
        errorMessage: '节点验证失败'\r
      })\r
    },\r
    cleanup(node) {\r
      // 恢复默认样式\r
      node.setAttrs({\r
        body: {\r
          filter: null\r
        }\r
      })\r
\r
      // 清除错误标记\r
      const currentData = node.getData() || {}\r
      node.setData({\r
        ...currentData,\r
        hasError: false,\r
        errorMessage: undefined\r
      })\r
    }\r
  })\r
\r
  // ========== 创建演示节点 ==========\r
\r
  const node1 = graph.addNode({\r
    id: 'node1',\r
    shape: 'rect',\r
    x: 80,\r
    y: 80,\r
    width: 140,\r
    height: 70,\r
    label: '默认状态',\r
    attrs: {\r
      label: {\r
        fontSize: 14,\r
      },\r
    },\r
  })\r
  // 设置初始状态为 default\r
  designer.setNodeState(node1, 'default')\r
\r
  const node2 = graph.addNode({\r
    id: 'node2',\r
    shape: 'rect',\r
    x: 280,\r
    y: 80,\r
    width: 140,\r
    height: 70,\r
    label: '默认状态',\r
    attrs: {\r
      label: {\r
        fontSize: 14,\r
      },\r
    },\r
  })\r
  designer.setNodeState(node2, 'default')\r
\r
  const node3 = graph.addNode({\r
    id: 'node3',\r
    shape: 'rect',\r
    x: 480,\r
    y: 80,\r
    width: 140,\r
    height: 70,\r
    label: '默认状态',\r
    attrs: {\r
      label: {\r
        fontSize: 14,\r
      },\r
    },\r
  })\r
  designer.setNodeState(node3, 'default')\r
\r
  const node4 = graph.addNode({\r
    id: 'node4',\r
    shape: 'rect',\r
    x: 80,\r
    y: 200,\r
    width: 140,\r
    height: 70,\r
    label: '默认状态',\r
    attrs: {\r
      label: {\r
        fontSize: 14,\r
      },\r
    },\r
  })\r
  designer.setNodeState(node4, 'default')\r
\r
  const node5 = graph.addNode({\r
    id: 'node5',\r
    shape: 'rect',\r
    x: 280,\r
    y: 200,\r
    width: 140,\r
    height: 70,\r
    label: '默认状态',\r
    attrs: {\r
      label: {\r
        fontSize: 14,\r
      },\r
    },\r
  })\r
  designer.setNodeState(node5, 'default')\r
\r
  const node6 = graph.addNode({\r
    id: 'node6',\r
    shape: 'rect',\r
    x: 480,\r
    y: 200,\r
    width: 140,\r
    height: 70,\r
    label: '默认状态',\r
    attrs: {\r
      label: {\r
        fontSize: 14,\r
      },\r
    },\r
  })\r
  designer.setNodeState(node6, 'default')\r
\r
  // ========== 添加连线 ==========\r
\r
  graph.addEdge({\r
    id: 'edge1',\r
    shape: 'flow-edge',\r
    source: node1,\r
    target: node2,\r
    labels: ['流程1'],\r
  })\r
\r
  graph.addEdge({\r
    id: 'edge2',\r
    shape: 'flow-edge',\r
    source: node2,\r
    target: node3,\r
    labels: ['流程2'],\r
  })\r
\r
  graph.addEdge({\r
    id: 'edge3',\r
    shape: 'flow-edge',\r
    source: node1,\r
    target: node4,\r
    labels: ['流程3'],\r
  })\r
\r
  graph.addEdge({\r
    id: 'edge4',\r
    shape: 'flow-edge',\r
    source: node4,\r
    target: node5,\r
    labels: ['流程4'],\r
  })\r
\r
  graph.addEdge({\r
    id: 'edge5',\r
    shape: 'flow-edge',\r
    source: node5,\r
    target: node6,\r
    labels: ['流程5'],\r
  })\r
\r
  // 居中显示\r
  graph.centerContent()\r
\r
  // ========== 添加交互：单击切换内置状态，双击切换到 error 状态 ==========\r
\r
  const builtinStates = ['default', 'hover', 'selected']\r
  const stateMap = new Map<string, number>() // 记录每个节点的当前状态索引\r
\r
  // 双击事件：切换到 error 状态或恢复到 default 状态\r
  graph.on('node:dblclick', ({ node }) => {\r
    const currentState = node.getProp('_state') || 'default'\r
\r
    if (currentState === 'error') {\r
      // 如果已经是 error，恢复到 default\r
      designer.setNodeState(node, 'default')\r
      stateMap.set(node.id, 0) // 重置索引\r
      message.success('节点已恢复到默认状态')\r
    } else {\r
      // 切换到 error 状态\r
      designer.setNodeState(node, 'error')\r
      message.error('节点已设置为错误状态（双击可恢复）')\r
    }\r
  })\r
\r
  console.log('[Demo] 节点状态管理示例已加载（覆盖内置状态）')\r
  message.success('已覆盖 3 种内置节点状态，单击切换状态，双击切换 error 状态')\r
}\r
<\/script>\r
`,wf=j({__name:"demo-edge-state",setup(b){function e(r){const o=r.getGraph();r.registerEdgeStateHandler("default",{apply(k){k.setAttrs({line:{stroke:"#9333ea",strokeWidth:2}}),k.setLabelAt(0,{attrs:{label:{fill:"#6b21a8",text:"自定义默认"},rect:{fill:"#f3e8ff",stroke:"#9333ea",strokeWidth:2}}})}}),r.registerEdgeStateHandler("hover",{apply(k){k.setAttrs({line:{stroke:"#f97316",strokeWidth:4,filter:{name:"dropShadow",args:{dx:0,dy:2,blur:4,color:"rgba(249, 115, 22, 0.5)"}}}}),k.setLabelAt(0,{attrs:{label:{fill:"#9a3412",text:"悬停效果",fontWeight:"bold"},rect:{fill:"#fed7aa",stroke:"#f97316",strokeWidth:2}}})},cleanup(k){k.setAttrs({line:{filter:null}})}}),r.registerEdgeStateHandler("selected",{apply(k){k.setAttrs({line:{stroke:"#06b6d4",strokeWidth:3}}),k.setLabelAt(0,{attrs:{label:{fill:"#164e63",text:"已选中",fontWeight:"bold",fontSize:14},rect:{fill:"#cffafe",stroke:"#06b6d4",strokeWidth:3}}})},cleanup(k){k.setAttrs({line:{filter:null}})}}),r.registerEdgeStateHandler("flowing",{apply(k){k.setAttrs({line:{stroke:"#ec4899",strokeWidth:3,strokeDasharray:"10,5",style:{animation:"fd-flow 1s linear infinite"}}}),k.setLabelAt(0,{attrs:{label:{fill:"#831843",text:"数据流动中",fontStyle:"italic"},rect:{fill:"#fce7f3",stroke:"#ec4899",strokeWidth:2}}})},cleanup(k){k.setAttrs({line:{strokeDasharray:0,style:{animation:"none"}}})}}),r.registerEdgeStateHandler("dimmed",{apply(k){k.setAttrs({line:{stroke:"#4b5563",strokeWidth:1,opacity:.3,filter:{name:"blur",args:{stdDeviation:1}}}}),k.setLabelAt(0,{attrs:{label:{fill:"#6b7280",text:"已弱化",fontStyle:"italic",fontSize:11},rect:{fill:"#f3f4f6",stroke:"#9ca3af",strokeWidth:1,opacity:.5}}})},cleanup(k){k.setAttrs({line:{opacity:1,filter:null}})}});const s=o.addNode({id:"start",shape:"rect",x:80,y:120,width:100,height:60,label:"开始",attrs:{body:{stroke:"#5b8ff9",strokeWidth:2,fill:"#e6f4ff"},label:{fill:"#003a8c",fontSize:14}}}),l=o.addNode({id:"node1",shape:"rect",x:280,y:40,width:100,height:60,label:"任务 A",attrs:{label:{fontSize:14}}}),g=o.addNode({id:"node2",shape:"rect",x:280,y:140,width:100,height:60,label:"任务 B",attrs:{label:{fontSize:14}}}),i=o.addNode({id:"node3",shape:"rect",x:480,y:40,width:100,height:60,label:"任务 C",attrs:{label:{fontSize:14}}}),a=o.addNode({id:"node4",shape:"rect",x:480,y:140,width:100,height:60,label:"任务 D",attrs:{label:{fontSize:14}}}),d=o.addNode({id:"end",shape:"rect",x:680,y:120,width:100,height:60,label:"结束",attrs:{body:{stroke:"#5b8ff9",strokeWidth:2,fill:"#e6f4ff"},label:{fill:"#003a8c",fontSize:14}}}),t=o.addEdge({id:"edge1",shape:"flow-edge",source:s,target:l,labels:["默认状态"]});r.setEdgeState(t,"default");const p=o.addEdge({id:"edge2",shape:"flow-edge",source:s,target:g,labels:["悬停状态"]});r.setEdgeState(p,"default");const c=o.addEdge({id:"edge3",shape:"flow-edge",source:l,target:i,labels:["选中状态"]});r.setEdgeState(c,"default");const f=o.addEdge({id:"edge4",shape:"flow-edge",source:g,target:a,labels:["流动状态"]});r.setEdgeState(f,"default");const m=o.addEdge({id:"edge5",shape:"flow-edge",source:i,target:d,labels:["弱化状态"]});r.setEdgeState(m,"default");const N=o.addEdge({id:"edge6",shape:"flow-edge",source:a,target:d,labels:["默认状态2"]});r.setEdgeState(N,"default"),o.centerContent(),console.log("[Demo] 连线状态管理示例已加载（覆盖内置状态）"),ue.success("已覆盖 5 种内置连线状态，点击连线切换状态")}return(r,o)=>(h(),Ne(D(le),{onReady:e}))}}),kf=`<template>\r
  <FlowDesignerLayout\r
    @ready="handleReady"\r
  />\r
</template>\r
\r
<script setup lang="ts">\r
import { message } from 'ant-design-vue'\r
import { FlowDesignerLayout }  from '@quick-code/x6-flow-designer'\r
import type { FlowDesigner } from '@quick-code/x6-flow-designer'\r
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
`,Cf={style:{width:"100%",height:"100%"}},Sf={class:"body"},Ef={class:"info"},Nf={class:"name"},Df=j({__name:"vueNode1",props:{node:{}},setup(b){const e=b,r=Ve("getGraph"),o=E(!1),s=E(""),l=()=>{s.value=e.node.getProp("label")};return Ge(()=>{l(),e.node.on("change:data",l),e.node.on("change:label",l);const g=r==null?void 0:r();g&&(g.on("cell:selected",({cell:i})=>{i.id===e.node.id&&(o.value=!0)}),g.on("cell:unselected",({cell:i})=>{i.id===e.node.id&&(o.value=!1)}))}),nn(()=>{e.node.off("change:data",l),e.node.off("change:label",l)}),(g,i)=>(h(),_("div",Cf,[n("div",{class:we(["vue-node1",{"vue-node1--selected":o.value}])},[n("div",Sf,[n("div",Ef,[n("div",Nf,L(s.value||"开始"),1)])])],2)]))}}),Tf=ae(Df,[["__scopeId","data-v-683ccd01"]]),Ff={class:"demo-performance"},$f={class:"demo-performance__panel"},Mf={class:"demo-performance__panel-content"},Lf={class:"demo-performance__config-item"},Rf={class:"demo-performance__input-group"},zf=["disabled"],Af={class:"demo-performance__config-item"},Pf={class:"demo-performance__config-item"},If={class:"demo-performance__config-item"},Gf={class:"demo-performance__checkbox"},Bf={class:"demo-performance__config-item"},Of={class:"demo-performance__checkbox"},Hf=["disabled"],Wf={class:"demo-performance__config-item"},Vf={class:"demo-performance__checkbox"},Uf={class:"demo-performance__metrics"},Zf={class:"demo-performance__metric-item"},jf={class:"demo-performance__metric-value"},qf={class:"demo-performance__metric-item"},Yf={class:"demo-performance__metric-value"},Xf={key:0,class:"demo-performance__metric-item"},Jf={class:"demo-performance__metric-value"},Kf={class:"demo-performance__metric-item"},Qf={class:"demo-performance__metric-value"},em={class:"demo-performance__metric-item"},nm={class:"demo-performance__metric-value"},rm={class:"demo-performance__metric-item"},tm={class:"demo-performance__metric-value"},om={class:"demo-performance__metric-item"},sm={class:"demo-performance__metric-value"},im={key:1,class:"demo-performance__metric-item"},am={class:"demo-performance__metric-value performance-dragging"},lm={class:"demo-performance__canvas"},dm={class:"cvn-task__body"},cm={class:"cvn-task__title"},pm={class:"cvn-task__owner"},gm=j({__name:"demo-performance",setup(b){Ge(()=>{an({shape:"vue-node-1",component:Tf,width:120,height:60}),console.log("[自定义节点] vue-node-1 已注册")});const e=E(),r=E(),o=E(),s=E(200),l=E("grid"),g=E("rect"),i=E(!0),a=E(!0),d=E(!0),t=E(!1),p=E(0),c=E(0),f=E(0),m=E(0),N=E(0),k=E(0),x=E(0),u=E(0),y=E(""),F=E({});function G(){const W=["#1890ff","#52c41a","#faad14","#f5222d","#722ed1","#13c2c2","#eb2f96","#fa8c16","#a0d911","#2f54eb","#fa541c","#9254de","#fadb14","#096dd9","#f759ab"];return W[Math.floor(Math.random()*W.length)]}function I(W,C,V){if(V==="grid"){const X=Math.ceil(Math.sqrt(C)),R=Math.floor(W/X);return{x:50+W%X*200,y:50+R*120}}else if(V==="circular"){const X=Math.min(C*15,800),R=W/C*Math.PI*2;return{x:1e3+X*Math.cos(R),y:800+X*Math.sin(R)}}else return{x:Math.random()*3e3+100,y:Math.random()*2e3+100}}function P(){return De(this,null,function*(){if(!o.value||t.value)return;t.value=!0;const W=performance.now();try{const C=o.value;fe.value!==null&&(clearTimeout(fe.value),fe.value=null,console.log("[性能优化] 取消待执行的恢复定时器")),z.length=0,oe.value=!1,y.value="",C.clearCells();const V=performance.now(),X=[];for(let me=0;me<s.value;me++){const se=I(me,s.value,l.value),J=G();let re={id:`node-${me}`,x:se.x,y:se.y,label:`节点 ${me+1}`,data:{index:me,color:J}};g.value==="rect"?(re.shape="rect",re.width=120,re.height=60,re.attrs={body:{fill:J,stroke:J,strokeWidth:2,rx:6,ry:6},label:{fill:"#fff",fontSize:12,fontWeight:"bold"}}):g.value==="circle"?(re.shape="circle",re.width=80,re.height=80,re.attrs={body:{fill:J,stroke:J,strokeWidth:2},label:{fill:"#fff",fontSize:12,fontWeight:"bold"}}):g.value==="common-vue-node"?(re.shape="common-vue-node",re["node-type"]="custom-nodetype1",re.width=120,re.height=60,re.attrs={body:{fill:J,stroke:J,strokeWidth:2},label:{fill:"#fff",fontSize:12,fontWeight:"bold"}}):g.value==="vue-node-1"&&(re.shape="vue-node-1",re.width=120,re.height=60,re.data=pe(H({},re.data),{status:"运行中"})),X.push(re)}let R=0,Y=0;const de=X.length,Ce=()=>{Y===0&&(R=performance.now(),console.log("[渲染统计] 开始渲染节点，总数:",de)),Y++,Y===de&&(console.log("[渲染统计] 所有节点已添加到 graph，等待 DOM 渲染完成..."),C.off("node:added",Ce),requestAnimationFrame(()=>{requestAnimationFrame(()=>{const me=performance.now()-R;console.log("[渲染统计] 节点 DOM 渲染完成，耗时:",me.toFixed(2),"ms"),f.value=Math.round(me),!i.value||s.value<=1?(m.value=0,N.value=f.value,c.value=f.value,q(C,W)):O(C,W,R)})}))};C.on("node:added",Ce),C.addNodes(X),p.value=Math.round(performance.now()-V)}finally{t.value=!1}})}function O(W,C,V){const X=performance.now();console.log("[渲染统计] 节点渲染完成，开始生成连线数据...");const R=[];for(let J=0;J<s.value-1;J++){const re={id:`edge-${J}`,source:`node-${J}`,target:`node-${J+1}`,router:{name:"metro",args:{padding:20}},connector:{name:"rounded",args:{radius:8}},attrs:{line:{stroke:"#8c8c8c",strokeWidth:1,targetMarker:{name:"classic",size:6}}}};a.value&&(re.labels=[`连线 ${J+1}`]),R.push(re)}const Y=Math.min(Math.floor(s.value*.2),100);for(let J=0;J<Y;J++){const re=Math.floor(Math.random()*s.value),qe=Math.floor(Math.random()*s.value);if(re!==qe){const Ye={id:`edge-extra-${J}`,source:`node-${re}`,target:`node-${qe}`,router:{name:"metro",args:{padding:20}},connector:{name:"rounded",args:{radius:8}},attrs:{line:{stroke:"#d9d9d9",strokeWidth:1,strokeDasharray:"5,5",targetMarker:{name:"classic",size:5}}}};a.value&&(Ye.labels=[`额外 ${J+1}`]),R.push(Ye)}}console.log(`[渲染统计] 连线数据生成完成，耗时: ${Math.round(performance.now()-X)}ms，连线总数: ${R.length}`);let de=0;const Ce=R.length;let me=0;const se=()=>{me===0&&(de=performance.now(),console.log("[渲染统计] 开始渲染连线，总数:",Ce)),me++,me===Ce&&(console.log("[渲染统计] 所有连线已添加到 graph，等待 DOM 渲染完成..."),W.off("edge:added",se),requestAnimationFrame(()=>{requestAnimationFrame(()=>{const J=performance.now()-de;console.log("[渲染统计] 连线 DOM 渲染完成，耗时:",J.toFixed(2),"ms"),m.value=Math.round(J);const re=performance.now()-V;N.value=Math.round(re),c.value=N.value,console.log("[渲染统计] 渲染总耗时:",re.toFixed(2),"ms"),console.log("[渲染统计] 验证：节点渲染 + 连线渲染 =",f.value,"+",m.value,"=",f.value+m.value,"ms"),q(W,C)})}))};W.on("edge:added",se),W.addEdges(R)}function q(W,C){x.value=W.getNodes().length,u.value=W.getEdges().length,k.value=Math.round(performance.now()-C),console.log("[渲染统计] ========== 性能统计 =========="),console.log("[渲染统计] 数据生成耗时:",p.value,"ms"),console.log("[渲染统计] 节点渲染耗时:",f.value,"ms"),console.log("[渲染统计] 连线渲染耗时:",m.value,"ms"),console.log("[渲染统计] 渲染总耗时:",N.value,"ms"),console.log("[渲染统计] 总耗时:",k.value,"ms"),console.log("[渲染统计] 节点数:",x.value),console.log("[渲染统计] 连线数:",u.value),console.log("[渲染统计] ================================"),setTimeout(()=>{W.zoomToFit({padding:20,maxScale:1})},100)}function ne(){if(!o.value)return;const W=o.value,C=W.getEdges();i.value?P():(C.forEach(V=>W.removeEdge(V)),u.value=0)}function te(){if(!o.value)return;o.value.getEdges().forEach((V,X)=>{a.value?V.setLabels([{attrs:{label:{text:`连线 ${X+1}`,fontSize:10,fill:"#595959"},rect:{fill:"#ffffff",stroke:"#d9d9d9",strokeWidth:1,rx:3,ry:3}}}]):V.setLabels([])})}function K(){o.value&&(fe.value&&(clearTimeout(fe.value),fe.value=null),o.value.clearCells(),oe.value=!1,z.length=0,y.value="",x.value=0,u.value=0,p.value=0,c.value=0,f.value=0,m.value=0,N.value=0,k.value=0,console.log("[clearCanvas] 画布已清空，状态已重置"))}function xe(){o.value&&o.value.zoomToFit({padding:20,maxScale:1})}const oe=E(!1),fe=E(null),z=[];let w=!1;const ce={LIGHT:10,MEDIUM:20,HEAVY:100};function ke(W){return W<=ce.LIGHT?"switchRouter":(W<=ce.MEDIUM,"removeAffectedEdges")}function Le(){if(console.log("[DEBUG] startDragOptimization 被调用"),console.log("[DEBUG] graphRef.value:",!!o.value,"isDragging.value:",oe.value,"enableDragOptimization.value:",d.value),!o.value||oe.value||!d.value){console.warn("[DEBUG] 提前返回，原因:",{noGraph:!o.value,alreadyDragging:oe.value,optimizationDisabled:!d.value});return}const W=performance.now();oe.value=!0;const C=o.value,V=C.getSelectedCells();console.log("[DEBUG] 从 Selection 获取的选中 cells:",V.length);const X=V.filter(se=>se.isNode());if(console.log("[DEBUG] 过滤后的移动节点数:",X.length),X.length===0){console.warn("[性能优化] 没有找到选中的节点"),oe.value=!1;return}console.log(`[性能优化] 开始拖动优化，移动节点数: ${X.length}`);const R=new Set;X.forEach(se=>{const J=C.getConnectedEdges(se);console.log(`[DEBUG] 节点 ${se.id} 的连接边数:`,J.length),J.forEach(re=>R.add(re))});const Y=Array.from(R),de=C.getEdges().length;console.log(`[性能优化] 受影响的边: ${Y.length} / ${de} (${(Y.length/de*100).toFixed(1)}%)`);const Ce=ke(Y.length);if(console.log("[性能优化] 选择策略:",Ce,"阈值配置:",ce),z.length=0,Ce==="removeAllEdges"){console.log("[性能优化] 策略: 移除所有边（极端情况）"),y.value=`已移除所有连线 (${de})`;const se=C.getEdges();se.forEach(J=>{z.push({id:J.id,source:J.getSourceCellId(),target:J.getTargetCellId(),router:J.getRouter(),connector:J.getConnector(),labels:J.getLabels(),attrs:J.getAttrs(),zIndex:J.getZIndex(),shape:J.shape})}),C.removeCells(se),console.log("[性能优化] 已移除",z.length,"条边")}else Ce==="removeAffectedEdges"?(console.log("[性能优化] 策略: 只移除受影响的边（局部优化）⭐"),y.value=`已移除相关连线 (${Y.length}/${de})`,Y.forEach(se=>{z.push({id:se.id,source:se.getSourceCellId(),target:se.getTargetCellId(),router:se.getRouter(),connector:se.getConnector(),labels:se.getLabels(),attrs:se.getAttrs(),zIndex:se.getZIndex(),shape:se.shape})}),C.removeCells(Y),console.log("[性能优化] 已移除",z.length,"条受影响的边")):(console.log("[性能优化] 策略: 切换受影响边的路由为 normal"),y.value=`已简化路由 (${Y.length} 条边)`,Y.forEach(se=>{z.push({id:se.id,originalRouter:se.getRouter()}),se.setRouter({name:"normal"})}),console.log("[性能优化] 已简化",Y.length,"条边的路由"));const me=performance.now()-W;console.log(`[性能优化] 优化应用完成，耗时: ${me.toFixed(2)}ms`)}function Te(){!o.value||!oe.value||(w=!1,fe.value!==null&&clearTimeout(fe.value),fe.value=window.setTimeout(()=>{try{const W=performance.now();oe.value=!1;const C=o.value;if(!C){console.log("[endDragOptimization] Graph 已销毁，跳过恢复"),z.length=0,y.value="";return}if(z.length>0){const V=z[0];if(V.source&&V.target){console.log("[性能优化] 恢复被移除的边，数量:",z.length),C.addEdges(z);const X=performance.now()-W;console.log(`[性能优化] 已恢复 ${z.length} 条边，耗时: ${X.toFixed(2)}ms`),z.length=0,fe.value=null,y.value="";return}else if(V.originalRouter){console.log("[性能优化] 恢复受影响边的路由，数量:",z.length);let X=0;z.forEach(Y=>{const de=C.getCellById(Y.id);de&&de.isEdge()&&(de.setRouter(Y.originalRouter),X++)});const R=performance.now()-W;console.log(`[性能优化] 已恢复 ${X} 条边的路由，耗时: ${R.toFixed(2)}ms`),z.length=0,fe.value=null,y.value="";return}}console.log("[endDragOptimization] 无需恢复"),fe.value=null,y.value=""}catch(W){console.error("[endDragOptimization] 恢复配置时出错:",W),z.length=0,fe.value=null,y.value="",oe.value=!1}},150))}function ze(W){let C=0,V=!1,X=!1;const R=5;W.on("node:mousedown",({node:Y})=>{V=!0,X=!1,C=0,w=!1,console.log("[拖动优化] 开始按下节点:",Y.id,"重置标志")}),W.on("node:change:position",({node:Y})=>{X=!0,console.log("[DEBUG] node:change:position 触发, node:",Y.id,"dragStartDistance:",C,"hasTriggeredOptimization:",w,"isDragging:",oe.value,"isMouseDown:",V),!w&&!oe.value&&(C++,console.log("[DEBUG] dragStartDistance 递增到:",C,"DRAG_THRESHOLD:",R),C>R&&(w=!0,console.log("[拖动优化] 触发优化，dragStartDistance:",C),Le()))}),W.on("node:moved",({node:Y})=>{console.log("[拖动优化] 节点移动结束:",Y.id),setTimeout(()=>{oe.value&&!V&&(console.log("[拖动优化] 所有节点停止移动，准备恢复"),Te())},50)}),W.on("blank:mouseup",()=>{console.log("[拖动优化] blank mouseup"),V=!1,oe.value&&X&&(X=!1,Te())}),W.on("node:mouseup",({node:Y})=>{console.log("[拖动优化] 节点 mouseup:",Y.id),V=!1,setTimeout(()=>{oe.value&&X&&(console.log("[拖动优化] mouseup 后检查：准备恢复"),X=!1,Te())},50)}),console.log("[性能优化] 拖动优化监听器已设置")}function Re(W,C){r.value=W,o.value=C,ze(C),P()}return(W,C)=>(h(),_("div",Ff,[n("div",$f,[C[25]||(C[25]=n("div",{class:"demo-performance__panel-header"},[n("h4",null,"性能测试配置")],-1)),n("div",Mf,[n("div",Lf,[C[6]||(C[6]=n("label",{class:"demo-performance__label"},"节点数量",-1)),n("div",Rf,[Ee(n("input",{type:"number","onUpdate:modelValue":C[0]||(C[0]=V=>s.value=V),min:10,max:2e3,class:"demo-performance__input"},null,512),[[Rn,s.value,void 0,{number:!0}]]),n("button",{class:"demo-performance__btn demo-performance__btn--primary",onClick:P,disabled:t.value},L(t.value?"生成中...":"重新生成"),9,zf)]),C[7]||(C[7]=n("div",{class:"demo-performance__hint"}," 建议范围：10-2000 个节点 ",-1))]),n("div",Af,[C[9]||(C[9]=n("label",{class:"demo-performance__label"},"布局方式",-1)),Ee(n("select",{"onUpdate:modelValue":C[1]||(C[1]=V=>l.value=V),class:"demo-performance__select"},[...C[8]||(C[8]=[n("option",{value:"grid"},"网格布局",-1),n("option",{value:"circular"},"环形布局",-1),n("option",{value:"random"},"随机布局",-1)])],512),[[Yn,l.value]])]),n("div",Pf,[C[11]||(C[11]=n("label",{class:"demo-performance__label"},"节点类型",-1)),Ee(n("select",{"onUpdate:modelValue":C[2]||(C[2]=V=>g.value=V),class:"demo-performance__select"},[...C[10]||(C[10]=[n("option",{value:"rect"},"矩形节点 (rect)",-1),n("option",{value:"circle"},"圆形节点 (circle)",-1),n("option",{value:"common-vue-node"},"Vue 插槽节点",-1),n("option",{value:"vue-node-1"},"Vue 注册节点 🚀",-1)])],512),[[Yn,g.value]])]),n("div",If,[n("label",Gf,[Ee(n("input",{type:"checkbox","onUpdate:modelValue":C[3]||(C[3]=V=>i.value=V),onChange:ne},null,544),[[Ie,i.value]]),C[12]||(C[12]=Q(" 显示连线 ",-1))])]),n("div",Bf,[n("label",Of,[Ee(n("input",{type:"checkbox","onUpdate:modelValue":C[4]||(C[4]=V=>a.value=V),disabled:!i.value,onChange:te},null,40,Hf),[[Ie,a.value]]),C[13]||(C[13]=Q(" 显示连线标签 ",-1))])]),n("div",Wf,[n("label",Vf,[Ee(n("input",{type:"checkbox","onUpdate:modelValue":C[5]||(C[5]=V=>d.value=V),checked:""},null,512),[[Ie,d.value]]),C[14]||(C[14]=Q(" 启用拖动优化 ",-1))]),C[15]||(C[15]=n("div",{class:"demo-performance__hint",style:{"margin-top":"4px"}}," 拖动节点时自动简化连线渲染 ",-1))]),n("div",Uf,[C[24]||(C[24]=n("h5",{class:"demo-performance__metrics-title"},"性能指标",-1)),n("div",Zf,[C[16]||(C[16]=n("span",{class:"demo-performance__metric-label"},"数据生成耗时：",-1)),n("span",jf,L(p.value)+"ms",1)]),n("div",qf,[C[17]||(C[17]=n("span",{class:"demo-performance__metric-label"},"节点渲染耗时：",-1)),n("span",Yf,L(f.value)+"ms",1)]),i.value&&u.value>0?(h(),_("div",Xf,[C[18]||(C[18]=n("span",{class:"demo-performance__metric-label"},"连线渲染耗时：",-1)),n("span",Jf,L(m.value)+"ms",1)])):B("",!0),n("div",Kf,[C[19]||(C[19]=n("span",{class:"demo-performance__metric-label"},"渲染总耗时：",-1)),n("span",Qf,L(N.value)+"ms",1)]),n("div",em,[C[20]||(C[20]=n("span",{class:"demo-performance__metric-label"},"总耗时：",-1)),n("span",nm,L(k.value)+"ms",1)]),n("div",rm,[C[21]||(C[21]=n("span",{class:"demo-performance__metric-label"},"当前节点数：",-1)),n("span",tm,L(x.value),1)]),n("div",om,[C[22]||(C[22]=n("span",{class:"demo-performance__metric-label"},"当前连线数：",-1)),n("span",sm,L(u.value),1)]),oe.value?(h(),_("div",im,[C[23]||(C[23]=n("span",{class:"demo-performance__metric-label"},"🔴 拖动中：",-1)),n("span",am,L(y.value),1)])):B("",!0)]),n("div",{class:"demo-performance__actions"},[n("button",{class:"demo-performance__btn demo-performance__btn--secondary",onClick:K}," 清空画布 "),n("button",{class:"demo-performance__btn demo-performance__btn--secondary",onClick:xe}," 适应画布 ")])])]),n("div",lm,[C[27]||(C[27]=n("div",{class:"demo-performance__tip"}," 💡 性能测试 Demo - 测试大量节点的渲染性能。拖动优化已启用，拖动节点时会自动简化连线渲染。 ",-1)),v(D(le),{ref_key:"layoutRef",ref:e,onReady:Re,"canvas-config":F.value},{"node-custom-nodetype1":M(({node:V,graph:X,data:R,label:Y,state:de})=>{var Ce;return[n("div",{class:we(["cvn-task",{"cvn-task--selected":(V==null?void 0:V.id)==((Ce=W.selectedNode)==null?void 0:Ce.id)}]),"data-cvn-root":""},[C[26]||(C[26]=n("div",{class:"cvn-task__bar"},null,-1)),n("div",dm,[n("div",cm,L(Y||"自定义vue插槽节点1"),1),n("div",pm,"负责人："+L(R.owner||"未指定")+" state: "+L(de),1)])],2)]}),_:1},8,["canvas-config"])])]))}}),um=ae(gm,[["__scopeId","data-v-b7d1497d"]]),fm=`<template>\r
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
`,mm={class:"code-previewer__right"},hm={class:"code-previewer__preview-toolbar"},vm=["title"],bm={class:"code-previewer__preview-content"},_m={key:1,class:"code-previewer__preview-empty"},xm={class:"code-previewer__toolbar"},ym={class:"code-previewer__tabs"},wm=["onClick"],km={class:"code-previewer__actions"},Cm={class:"code-previewer__code"},Sm=j({__name:"CodePreviewer",props:{demoName:{},code:{},codeSnippets:{},demoComponent:{},defaultActiveTab:{default:0},defaultLeftWidth:{default:"20%"}},setup(b){const e={demoSimple:{component:Do,code:To},"demo-ready":{component:zo,code:Ao},"demo-mode-change":{component:Vo,code:Uo},"demo-selection-change":{component:Jo,code:Ko},"demo-node-lifecycle":{component:as,code:ls},"demo-edge-lifecycle":{component:vs,code:bs},"demo-data-loaded":{component:Cs,code:Ss},"demo-slot-toolbar":{component:zs,code:[{label:"index.vue",language:"vue",code:As},{label:"Toolbar.vue",language:"vue",code:Ps}]},"demo-slot-pattle":{component:Ys,code:[{label:"index.vue",language:"vue",code:Xs}]},"demo-slot-properties":{component:ua,code:fa},"demo-slot-searchbox":{component:Ia,code:Ga},"demo-slot-canvasMenu":{component:il,code:al},"demo-slot-nodeMenu":{component:zl,code:Al},"demo-slot-edgeMenu":{component:cd,code:pd},"demo-slot-nodeTooltip":{component:_d,code:xd},"demo-slot-edgeTooltip":{component:Dd,code:Td},"demo-slot-edgeLabel":{component:Pd,code:Id},"demo-slot-node":{component:tc,code:oc},"demo-permission-design":{component:lp,code:dp},"demo-permission-readonly":{component:up,code:fp},"demo-permission-preview":{component:bp,code:_p},"demo-permission-getPermission":{component:wg,code:kg},"demo-permission-all":{component:kt,code:Cg},"demo-node-svg":{component:Gg,code:Bg},"demo-node-html":{component:Kg,code:Qg},"demo-node-vue":{component:Eu,code:[{label:"index.vue",language:"vue",code:Nu},{label:"StartNode.vue",language:"vue",code:Du},{label:"ApproverNode.vue",language:"vue",code:Tu}]},"demo-node-designer":{component:Qu,code:ef},"demo-edge-svg":{component:hf,code:vf},"demo-shortcut-keymap":{component:bf,code:_f},"demo-node-state":{component:xf,code:yf},"demo-edge-state":{component:wf,code:kf},"demo-performance":{component:um,code:fm}},r=b,o=E(r.defaultActiveTab),s=E(!0),l=E(!0),g=E(!1),i=E("复制"),a=E(),d=E(),t=E(r.defaultLeftWidth),p=E(!1),c=ie(()=>{if(r.demoName&&e[r.demoName]){const I=e[r.demoName].code;return Array.isArray(I)?I:[{label:"Vue",language:"vue",code:I}]}return r.code?Array.isArray(r.code)?r.code:[{label:"Code",language:"vue",code:r.code}]:r.codeSnippets||[]}),f=ie(()=>r.demoName&&e[r.demoName]?e[r.demoName].component:r.demoComponent),m=ie(()=>{const I=c.value[o.value];if(!I)return"";const P=typeof I.code=="string"?I.code:String(I.code||"");return N(P)});function N(I){if(typeof I!="string")return console.error("addLineNumbers: code must be a string, received:",typeof I,I),String(I||"");const P=I.split(`
`),O=P.length,q=String(O).length;return P.map((ne,te)=>`${String(te+1).padStart(q," ")}  ${ne}`).join(`
`)}function k(){return De(this,null,function*(){const I=c.value[o.value];if(I)try{yield navigator.clipboard.writeText(I.code),i.value="已复制",setTimeout(()=>{i.value="复制"},2e3)}catch(P){console.error("复制失败:",P),i.value="复制失败",setTimeout(()=>{i.value="复制"},2e3)}})}function x(){l.value=!l.value}function u(){g.value=!g.value}function y(I){p.value=!0,I.preventDefault()}function F(I){if(!p.value)return;const P=d.value;if(!P)return;const O=P.getBoundingClientRect(),ne=(O.right-I.clientX)/O.width*100;ne>=20&&ne<=80&&(t.value=`${ne}%`)}function G(){p.value=!1}return Ge(()=>{document.addEventListener("mousemove",F),document.addEventListener("mouseup",G)}),dr(()=>{document.removeEventListener("mousemove",F),document.removeEventListener("mouseup",G)}),(I,P)=>(h(),_("div",{class:we(["code-previewer",{"code-previewer--fullscreen":g.value}]),ref_key:"previewerRef",ref:d},[n("div",mm,[n("div",hm,[P[0]||(P[0]=n("span",{class:"code-previewer__preview-title"},"效果预览",-1)),n("button",{class:"code-previewer__btn",title:g.value?"退出全屏":"全屏预览",onClick:u},L(g.value?"退出全屏":"全屏"),9,vm)]),n("div",bm,[f.value?(h(),Ne(Mn(f.value),{key:0})):(h(),_("div",_m," 暂无预览内容 "))]),l.value?B("",!0):(h(),_("button",{key:0,class:"code-previewer__expand-btn",title:"展开代码",onClick:x},[...P[1]||(P[1]=[n("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"currentColor"},[n("path",{d:"M10 2L4 8l6 6V2z"})],-1)])]))]),n("div",{class:"code-previewer__divider-wrapper",style:ye({width:l.value?"4px":"0"})},[Ee(n("div",{class:"code-previewer__divider",onMousedown:y},null,544),[[Xn,l.value]])],4),Ee(n("div",{class:"code-previewer__left",style:ye({width:l.value?t.value:"0"})},[n("div",xm,[n("div",ym,[(h(!0),_(U,null,ee(c.value,(O,q)=>(h(),_("div",{key:q,class:we(["code-previewer__tab",{"code-previewer__tab--active":o.value===q}]),onClick:ne=>o.value=q},L(O.label),11,wm))),128))]),n("div",km,[n("button",{class:"code-previewer__btn",title:"收起代码",onClick:x}," 收起 "),n("button",{class:"code-previewer__btn",title:"复制代码",onClick:k},L(i.value),1)])]),n("div",{class:we(["code-previewer__code-wrapper",{"code-previewer__code-wrapper--collapsed":!s.value}])},[n("pre",Cm,[n("code",{class:"code-previewer__code-content",ref_key:"codeRef",ref:a},L(m.value),513)])],2)],4),[[Xn,l.value]])],2))}}),Mm=ae(Sm,[["__scopeId","data-v-8d99e2e7"]]);export{Mm as C};
//# sourceMappingURL=CodePreviewer-LFdLbxsj.js.map
