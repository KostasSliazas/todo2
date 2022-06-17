(function(){"use strict";var t={9133:function(t,e,o){var i=o(9242),r=o(3396),n=o(7139);const s=t=>((0,r.dD)("data-v-3fd82d5c"),t=t(),(0,r.Cn)(),t),d={class:"d-flex justify-content-center bg-secondary bg-gradient text-white"},a={class:"d-flex align-items-start w-100 h-100 justify-content-center sticky-top bg-light text-dark border",ref:"todoForm"},l=s((()=>(0,r._)("label",{for:"todo",class:"form-label d-none"},"Todo",-1))),c=["placeholder","required"],h={class:"btn btn-primary rounded-0",type:"submit",name:"button",ref:"addButton"},f={class:"stats text-muted"},m={class:"mx-2"},u={class:"mx-2"},p={class:"mx-2"},g={class:"custom-table fs-5"},y={key:0,class:"fs-6 bg-light text-muted"},v={key:3,class:"fs-6 bg-light"},k={key:4,class:"fs-6 bg-light"},w={key:5,class:"fs-6 bg-light"},b={key:1,class:"text-center m-auto"},x=s((()=>(0,r._)("button",{type:"button",class:"btn-close p-2","aria-label":"Close"},null,-1))),T={class:"p-2 border"},A={class:"mb-2 border p-2"},_=s((()=>(0,r._)("div",{class:"fw-bold pe-2"},"Todo:",-1))),I={key:0,class:"mb-2 border p-2"},L=s((()=>(0,r._)("div",{class:"fw-bold pe-2"},"Time added:",-1))),C=["onClick"],S={key:1,class:"mb-2 border p-2"},D=s((()=>(0,r._)("div",{class:"fw-bold pe-2"},"Time finished:",-1))),O=["onClick"];function F(t,e,o,s,F,z){const $=(0,r.up)("list-item");return(0,r.wg)(),(0,r.iD)(r.HY,null,[(0,r._)("div",{class:(0,n.C_)(["container d-flex flex-column min-vh-100 p-2",{pointers:F.editing>=0}])},[(0,r._)("header",d,(0,n.zw)(F.title),1),(0,r._)("div",a,[(0,r._)("form",{class:"d-flex align-items-start flex-fill justify-content-center p-2",autocomplete:"off",action:"javascript:void(0);",onSubmit:e[2]||(e[2]=(0,i.iM)(((...t)=>z.addTodo&&z.addTodo(...t)),["prevent"]))},[l,(0,r.wy)((0,r._)("input",{class:"form-control rounded-0","onUpdate:modelValue":e[0]||(e[0]=t=>F.todo=t),onClick:e[1]||(e[1]=(0,i.iM)(((...t)=>z.scrollToTop&&z.scrollToTop(...t)),["stop"])),type:"text",name:"todo",id:"todo",placeholder:F.placeholder,required:F.required,ref:"addInput"},null,8,c),[[i.nr,F.todo,void 0,{trim:!0}]]),(0,r._)("button",h,"add",512)],32)],512),F.todoArray.length?((0,r.wg)(),(0,r.iD)("div",{key:0,class:(0,n.C_)(["d-flex justify-content-between order-1 bg-light border border-top-0",{locked:F.isLocked}])},[(0,r._)("div",f,[(0,r._)("span",m,"total: "+(0,n.zw)(F.todoArray.length),1),(0,r._)("span",u,"left: "+(0,n.zw)(z.counterTodo()),1),(0,r._)("span",p,"sum unchecked: "+(0,n.zw)(z.counterNumbers()),1)]),(0,r._)("div",{onClick:e[3]||(e[3]=(...t)=>z.locker&&z.locker(...t)),class:"pointer"},(0,n.zw)(F.isLocked?"locked🔒":"unlocked🔓"),1)],2)):(0,r.kq)("",!0),(0,r._)("div",g,[F.todoArray.length?((0,r.wg)(),(0,r.iD)("div",y,"No.")):(0,r.kq)("",!0),F.todoArray.length?((0,r.wg)(),(0,r.iD)("div",{key:1,class:"fs-6 bg-light pointer",onClick:e[4]||(e[4]=t=>z.sortBy("todo",!1,(t=>t.toUpperCase())))},"sort↓")):(0,r.kq)("",!0),F.todoArray.length?((0,r.wg)(),(0,r.iD)("div",{key:2,class:"fs-6 bg-light pointer",onClick:e[5]||(e[5]=t=>z.sortBy("status"))},"sort↓")):(0,r.kq)("",!0),F.todoArray.length?((0,r.wg)(),(0,r.iD)("div",v)):(0,r.kq)("",!0),F.todoArray.length?((0,r.wg)(),(0,r.iD)("div",k)):(0,r.kq)("",!0),F.todoArray.length?((0,r.wg)(),(0,r.iD)("div",w)):(0,r.kq)("",!0),((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(F.todoArray,((t,e)=>((0,r.wg)(),(0,r.j4)($,{key:e,onLocal:z.addToLocalStorage,todoL:F.todoLength(),onRemove:z.removeTodo,onEdit:z.editTodo,item:t,onPriority:z.setImportance,onInfo:z.infoTodo,index:e},null,8,["onLocal","todoL","onRemove","onEdit","item","onPriority","onInfo","index"])))),128))]),F.todoArray.length?(0,r.kq)("",!0):((0,r.wg)(),(0,r.iD)("div",b,"All done, good job!"))],2),(0,r._)("div",{id:"info",class:"container-fluid hidden text-right",ref:"info",onClick:e[7]||(e[7]=t=>t.currentTarget.classList.add("hidden"))},[x,(0,r._)("div",T,[(0,r._)("div",A,[_,(0,r._)("div",null,[(0,r.Uk)((0,n.zw)(F.itemInfo.todo),1),(0,r._)("span",{class:"text-danger pointer",onClick:e[6]||(e[6]=t=>z.removeElem(F.itemInfo.index,0,1))},"☒")])]),"undefined"!==typeof F.itemInfo.timeAdd&&F.itemInfo.timeAdd.length?((0,r.wg)(),(0,r.iD)("div",I,[L,(0,r._)("div",null,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(F.itemInfo.timeAdd,((t,e)=>((0,r.wg)(),(0,r.iD)("div",{key:e},[(0,r.Uk)((0,n.zw)(t),1),(0,r._)("span",{class:"text-danger pointer",onClick:(0,i.iM)((t=>z.removeElem(F.itemInfo.index,0,"timeAdd")),["stop"])},"☒",8,C)])))),128))])])):(0,r.kq)("",!0),"undefined"!==typeof F.itemInfo.timeFin&&F.itemInfo.timeFin.length?((0,r.wg)(),(0,r.iD)("div",S,[D,(0,r._)("div",null,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(F.itemInfo.timeFin,((t,e)=>((0,r.wg)(),(0,r.iD)("div",{key:e},[(0,r.Uk)((0,n.zw)(t),1),(0,r._)("span",{class:"text-danger pointer",onClick:(0,i.iM)((t=>z.removeElem(F.itemInfo.index,e,"timeFin")),["stop"])},"☒",8,O)])))),128))])])):(0,r.kq)("",!0)])],512)],64)}const z={scope:"row",class:"text-center text-muted"},$={class:"form-check"},j=["checked","id"],q=["for"];function M(t,e,o,i,s,d){return(0,r.wg)(),(0,r.iD)(r.HY,null,[(0,r._)("div",z,(0,n.zw)((o.index+1).toString().padStart(Math.max(2,o.todoL),"0")),1),(0,r._)("div",$,[(0,r._)("input",{class:"form-check-input pointer",onClick:e[0]||(e[0]=t=>d.save(o.index,t)),checked:!!o.item.done||void 0,id:"input-"+o.index,type:"checkbox",value:""},null,8,j),(0,r._)("label",{class:(0,n.C_)(["form-check-label pointer",[{"text-decoration-line-through":!0===o.item.done},"z"===o.item.status?"low":o.item.status]]),for:"input-"+o.index},(0,n.zw)(o.item.todo),11,q)]),(0,r._)("div",{class:(0,n.C_)(["flex-fill pointer","z"===o.item.status?"low":o.item.status]),onClick:e[1]||(e[1]=t=>d.statusItem(o.index))},(0,n.zw)("z"===o.item.status?"low":o.item.status),3),(0,r._)("div",{class:"flex-fill pointer text-center",onClick:e[2]||(e[2]=t=>d.editItem(o.index))},"edit"),(0,r._)("div",{class:"flex-fill pointer text-center trash text-danger",onClick:e[3]||(e[3]=t=>d.removeItem(o.index))},"delete"),(0,r._)("div",{class:"flex-fill pointer text-center",onClick:e[4]||(e[4]=t=>d.infoItem(o.index))},"info")],64)}var N={name:"listItem",emits:["priority","remove","edit","local","info"],props:{todoL:Number,item:Object,index:Number},methods:{statusItem(t){this.$emit("priority",t)},removeItem(t){this.$emit("remove",t)},editItem(t){this.$emit("edit",t)},save(t,e){this.$emit("local",t,e)},infoItem(t){this.$emit("info",t)}}},E=o(89);const U=(0,E.Z)(N,[["render",M],["__scopeId","data-v-f84eff18"]]);var H=U,B={name:"App",data(){return{editing:-1,flag:!1,importance:["z","mid","hight"],lang:"lt-LT",placeholder:"Type here..",required:!1,title:"Todo-app",todo:"",isLocked:!1,status:"z",itemInfo:[],timeAdd:[],timeFin:[],todoArray:[],todoLength:()=>this.todoArray.length.toString().length}},components:{listItem:H},mounted(){"undefined"!==typeof Storage&&(this.todoArray=this.parser()||[],this.isLocked=!!window.localStorage.getItem("safeMode")||window.localStorage.removeItem("safeMode")),this.todoArray.length||(this.flag=!0)},watch:{flag(){this.flag&&window.setTimeout((()=>{this.$refs.addInput.focus()}),200),this.flag=!1}},methods:{locker(){this.isLocked=!this.isLocked,"undefined"!==typeof Storage&&(this.isLocked?window.localStorage.setItem("safeMode",this.isLocked):window.localStorage.removeItem("safeMode"))},sortBy(t,e,o){this.todoArray.sort(this.sortList(t,e,o)),this.addToLocalStorage()},sortList(t,e,o){const i=o?e=>o(e[t]):e=>e[t];return e=e?-1:1,(t,o)=>(t=i(t),o=i(o),e*((t>o)-(o>t)))},removeElem(t,e,o){1===o?this.todoArray.splice(t,1):this.todoArray[t][o].splice(e,1),this.addToLocalStorage()},infoTodo(t){this.$refs.info.classList.remove("hidden"),this.itemInfo={index:t,...this.todoArray[t]}},parser(){try{return JSON.parse(window.localStorage.getItem("todo-app"))}catch(t){window.localStorage.removeItem("todo-app"),window.location.reload()}},counterTodo(){return this.todoArray.filter((t=>!t.done)).length},addToLocalStorage(t,e){this.todoArray[t]&&e&&(this.todoArray[t].done=e.target.checked,"undefined"===typeof this.todoArray[t].timeFin&&(this.todoArray[t].timeFin=[]),this.todoArray[t].done&&this.todoArray[t].timeFin[this.todoArray[t].timeFin.length-1]!=this.setTime()&&this.todoArray[t].timeFin.push(this.setTime())),document.title="TODO – SAVED 💾";let o=setTimeout((()=>{document.title="TODO",clearTimeout(o)}),800);"undefined"!==typeof Storage&&window.localStorage.setItem("todo-app",JSON.stringify(this.todoArray))},addTodo(){if(0===this.todo.trim().length)return this.placeholder="Empty field!",void setTimeout((()=>this.$refs.addInput.focus()),99);const t=[].concat.apply([],this.todoArray.filter((t=>isNaN(t.todo))).map((t=>t.todo.toUpperCase())));if(this.editing>=0)this.todoArray[this.editing].todo=this.todo,this.$refs.addButton.innerHTML="add",document.body.style.overflow="visible",this.$refs.todoForm.classList.add("sticky-top"),this.$refs.todoForm.classList.remove("transforms"),this.editing=-1;else{if(this.flag=!0,t.indexOf(this.todo.toUpperCase().trim())>-1)return this.todo="",void(this.placeholder="Value already exists!");const e=this.todo.replace(/,/g,".").trim().replace(/\s+/g," ").trim();this.todoArray.unshift({todo:e.charAt(0).toUpperCase()+e.slice(1),done:!1,status:this.status,timeAdd:[this.setTime()],timeFin:[]})}this.todo="",this.placeholder="Type here..",this.$refs.addInput.focus(),this.scrollToTop(),this.addToLocalStorage()},removeTodo(t){this.todo="",this.editing=-1,this.todoArray.splice(t,1),this.addToLocalStorage()},editTodo(t){this.todo=this.todoArray[t].todo,this.editing=t,this.$refs.addButton.innerHTML="save",document.body.style.overflow="hidden",this.$refs.todoForm.classList.add("transforms"),this.$refs.todoForm.classList.remove("sticky-top"),this.$refs.addInput.focus()},scrollToTop(){window.scrollTo({top:0,behavior:"smooth"}),this.placeholder="Type here.."},setImportance(t){let e=this.importance.indexOf(this.todoArray[t].status);++e>2&&(e=0),this.todoArray[t].status=this.status=this.importance[e],this.addToLocalStorage()},setTime(){const t={hour:"2-digit",minute:"2-digit",hour12:!1};return(new Date).toLocaleDateString(this.lang,t)},counterNumbers(){const t=[];return this.todoArray.forEach((e=>{"undefined"===typeof e.todo||e.done||isNaN(parseFloat(e.todo.match(/[+-]?((?=\.?\d)\d*\.?\d*)/g)))||t.push(parseFloat(e.todo.match(/[+-]?((?=\.?\d)\d*\.?\d*)/g)))})),t.reduce(((t,e)=>{const o=t.toString().split(".")[1],i=e.toString().split(".")[1],r=o&&o.length||0,n=i&&i.length||0;return parseFloat((t+e).toFixed(r+n))}),0)}}};const Y=(0,E.Z)(B,[["render",F],["__scopeId","data-v-3fd82d5c"]]);var P=Y;(0,i.ri)(P).mount("#app")}},e={};function o(i){var r=e[i];if(void 0!==r)return r.exports;var n=e[i]={exports:{}};return t[i](n,n.exports,o),n.exports}o.m=t,function(){var t=[];o.O=function(e,i,r,n){if(!i){var s=1/0;for(c=0;c<t.length;c++){i=t[c][0],r=t[c][1],n=t[c][2];for(var d=!0,a=0;a<i.length;a++)(!1&n||s>=n)&&Object.keys(o.O).every((function(t){return o.O[t](i[a])}))?i.splice(a--,1):(d=!1,n<s&&(s=n));if(d){t.splice(c--,1);var l=r();void 0!==l&&(e=l)}}return e}n=n||0;for(var c=t.length;c>0&&t[c-1][2]>n;c--)t[c]=t[c-1];t[c]=[i,r,n]}}(),function(){o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,{a:e}),e}}(),function(){o.d=function(t,e){for(var i in e)o.o(e,i)&&!o.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:e[i]})}}(),function(){o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={143:0};o.O.j=function(e){return 0===t[e]};var e=function(e,i){var r,n,s=i[0],d=i[1],a=i[2],l=0;if(s.some((function(e){return 0!==t[e]}))){for(r in d)o.o(d,r)&&(o.m[r]=d[r]);if(a)var c=a(o)}for(e&&e(i);l<s.length;l++)n=s[l],o.o(t,n)&&t[n]&&t[n][0](),t[n]=0;return o.O(c)},i=self["webpackChunkTODO"]=self["webpackChunkTODO"]||[];i.forEach(e.bind(null,0)),i.push=e.bind(null,i.push.bind(i))}();var i=o.O(void 0,[998],(function(){return o(9133)}));i=o.O(i)})();
//# sourceMappingURL=app.42f29d11.js.map