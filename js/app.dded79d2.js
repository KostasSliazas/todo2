(function(){"use strict";var t={567:function(t,e,o){var i=o(9242),s=o(3396),n=o(7139);const r=t=>((0,s.dD)("data-v-d4d072c0"),t=t(),(0,s.Cn)(),t),d={class:"d-flex justify-content-center bg-secondary bg-gradient text-white"},a=r((()=>(0,s._)("button",{class:"hidden btn btn-outline-light btn-sm mx-1",id:"install-button",type:"button"},"Install",-1))),l={class:"d-flex align-items-start w-100 h-100 justify-content-center sticky-top bg-light text-dark border",ref:"todoForm"},c=r((()=>(0,s._)("label",{for:"todo",class:"form-label d-none"},"Todo",-1))),m=["placeholder","required"],h={class:"btn btn-primary rounded-0",type:"submit",name:"button",ref:"addButton"},u={class:"mx-2"},g={class:"mx-2"},f={class:"mx-2"},p=r((()=>(0,s._)("i",{title:"Toggle 700px wide",class:"gg-screen pointer"},null,-1))),y=[p],v=r((()=>(0,s._)("div",{class:"pointer mx-2",onclick:"window.print()"},[(0,s._)("i",{title:"Print document",class:"gg-printer"})],-1))),w=r((()=>(0,s._)("i",{title:"Export localStorage",class:"gg-usb"},null,-1))),k=[w],b=r((()=>(0,s._)("i",{title:"Import localStorage",class:"gg-import"},null,-1))),I=[b],S={class:"custom-table fs-5"},x={key:0,class:"fs-6 bg-light text-muted"},_={key:3,class:"fs-6 bg-light"},T={key:4,class:"fs-6 bg-light"},L={key:5,class:"fs-6 bg-light"},A={key:1,class:"text-center m-auto"},C={id:"info",class:"container-fluid hidden text-right bg-light",ref:"info"},O={class:"p-2 border"},D={class:"mb-2 border p-2 bg-white"},j=r((()=>(0,s._)("div",{class:"fw-bold pe-2"},"Todo:",-1))),F=r((()=>(0,s._)("i",{class:"gg-trash"},null,-1))),E=[F],$={key:0,class:"mb-2 border p-2 bg-white"},N=r((()=>(0,s._)("div",{class:"fw-bold pe-2"},"Time added:",-1))),z=["onClick"],q=r((()=>(0,s._)("i",{class:"gg-trash"},null,-1))),U=[q],J={key:1,class:"mb-2 border p-2 bg-white"},M=r((()=>(0,s._)("div",{class:"fw-bold pe-2"},"Time finished:",-1))),B=["onClick"],H=r((()=>(0,s._)("i",{class:"gg-trash"},null,-1))),R=[H];function P(t,e,o,r,p,w){const b=(0,s.up)("list-item");return(0,s.wg)(),(0,s.iD)(s.HY,null,[(0,s._)("div",{class:(0,n.C_)(["container d-flex flex-column min-vh-100 p-2",{pointers:p.editing>=0}]),ref:"mainContainer"},[(0,s._)("header",d,[(0,s.Uk)((0,n.zw)(p.title)+" ",1),a]),(0,s._)("div",l,[(0,s._)("form",{class:"d-flex align-items-start flex-fill justify-content-center p-2",autocomplete:"off",action:"javascript:void(0);",onSubmit:e[2]||(e[2]=(0,i.iM)(((...t)=>w.addTodo&&w.addTodo(...t)),["prevent"]))},[c,(0,s.wy)((0,s._)("input",{class:"form-control rounded-0","onUpdate:modelValue":e[0]||(e[0]=t=>p.todo=t),onClick:e[1]||(e[1]=(0,i.iM)(((...t)=>w.scrollToTop&&w.scrollToTop(...t)),["stop"])),type:"text",name:"todo",id:"todo",placeholder:p.placeholder,required:p.required,ref:"addInput"},null,8,m),[[i.nr,p.todo,void 0,{trim:!0}]]),(0,s._)("button",h,"add",512)],32)],512),p.todoArray.length?((0,s.wg)(),(0,s.iD)("div",{key:0,id:"tools",class:(0,n.C_)(["d-flex justify-content-between align-items-center text-muted order-1 bg-light border border-top-0 fs-5",{locked:p.isLocked}])},[(0,s._)("span",u,"total: "+(0,n.zw)(p.todoArray.length),1),(0,s._)("span",g,"left: "+(0,n.zw)(w.counterTodo()),1),(0,s._)("span",f,"sum: "+(0,n.zw)(w.counterNumbers()),1),(0,s._)("div",{class:"pointer mx-2",onClick:e[3]||(e[3]=t=>w.addLocalStorageItem("checkedSum",!0))},[(0,s._)("i",{title:"Toggle count checked",class:(0,n.C_)([p.checkedSum?"toggle-checked gg-check-r":"gg-check-r"])},null,2)]),(0,s._)("div",{class:"pointer mx-2",onClick:e[4]||(e[4]=t=>{w.addToggleClass("mainContainer","wide"),w.addLocalStorageItem("wideScreen",!0)})},y),v,(0,s._)("div",{class:"pointer mx-2",onClick:e[5]||(e[5]=t=>w.exportLocalStorage())},k),(0,s._)("div",{class:"pointer mx-2",onClick:e[6]||(e[6]=t=>w.importLocalStorage())},I),(0,s._)("div",{class:"pointer mx-2",onClick:e[7]||(e[7]=t=>w.addLocalStorageItem("isLocked",!0))},[(0,s._)("i",{title:"Toggle columns lock",class:(0,n.C_)([p.isLocked?"gg-lock":"gg-lock-unlock"])},null,2)])],2)):(0,s.kq)("",!0),(0,s._)("div",S,[p.todoArray.length?((0,s.wg)(),(0,s.iD)("div",x,"No.")):(0,s.kq)("",!0),p.todoArray.length?((0,s.wg)(),(0,s.iD)("div",{key:1,class:"fs-6 bg-light pointer",onClick:e[8]||(e[8]=t=>w.sortBy("todo",this.sortedItems[0],(t=>t.toUpperCase())))},(0,n.zw)(this.sortedItems[0]?"↓":"↑"),1)):(0,s.kq)("",!0),p.todoArray.length?((0,s.wg)(),(0,s.iD)("div",{key:2,class:"fs-6 bg-light pointer",onClick:e[9]||(e[9]=t=>w.sortBy("status",this.sortedItems[1]))},(0,n.zw)(this.sortedItems[1]?"↓":"↑"),1)):(0,s.kq)("",!0),p.todoArray.length?((0,s.wg)(),(0,s.iD)("div",_)):(0,s.kq)("",!0),p.todoArray.length?((0,s.wg)(),(0,s.iD)("div",T)):(0,s.kq)("",!0),p.todoArray.length?((0,s.wg)(),(0,s.iD)("div",L)):(0,s.kq)("",!0),((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(p.todoArray,((t,e)=>((0,s.wg)(),(0,s.j4)(b,{key:e,onLocal:w.addToLocalStorage,todoL:p.todoLength(),onRemove:w.removeTodo,onEdit:w.editTodo,item:t,onPriority:w.setImportance,onInfo:w.infoTodo,index:e},null,8,["onLocal","todoL","onRemove","onEdit","item","onPriority","onInfo","index"])))),128))]),p.todoArray.length?(0,s.kq)("",!0):((0,s.wg)(),(0,s.iD)("div",A,"All done, good job!"))],2),(0,s._)("div",C,[(0,s._)("button",{type:"button",onClick:e[10]||(e[10]=t=>t.currentTarget.parentElement.classList.add("hidden")),class:"btn-close p-2","aria-label":"Close"}),(0,s._)("div",O,[(0,s._)("div",D,[j,(0,s._)("div",null,[(0,s.Uk)((0,n.zw)(p.itemInfo.todo),1),(0,s._)("span",{class:"text-danger pointer",onClick:e[11]||(e[11]=t=>{w.removeElem(p.itemInfo.index,0,1),t.currentTarget.parentElement.parentElement.parentElement.parentElement.classList.add("hidden")})},E)])]),"undefined"!==typeof p.itemInfo.timeAdd&&p.itemInfo.timeAdd.length?((0,s.wg)(),(0,s.iD)("div",$,[N,(0,s._)("div",null,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(p.itemInfo.timeAdd,((t,e)=>((0,s.wg)(),(0,s.iD)("div",{key:e},[(0,s.Uk)((0,n.zw)(t),1),(0,s._)("span",{class:"text-danger pointer",onClick:(0,i.iM)((t=>w.removeElem(p.itemInfo.index,0,"timeAdd")),["stop"])},U,8,z)])))),128))])])):(0,s.kq)("",!0),"undefined"!==typeof p.itemInfo.timeFin&&p.itemInfo.timeFin.length?((0,s.wg)(),(0,s.iD)("div",J,[M,(0,s._)("div",null,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(p.itemInfo.timeFin,((t,e)=>((0,s.wg)(),(0,s.iD)("div",{key:e},[(0,s.Uk)((0,n.zw)(t),1),(0,s._)("span",{class:"text-danger pointer",onClick:(0,i.iM)((t=>w.removeElem(p.itemInfo.index,e,"timeFin")),["stop"])},R,8,B)])))),128))])])):(0,s.kq)("",!0)])],512)],64)}const Y=t=>((0,s.dD)("data-v-6796e3f0"),t=t(),(0,s.Cn)(),t),K={class:"text-center text-muted"},V={class:"form-check"},Z=["checked","id"],G=["for"],Q=["title"],W=Y((()=>(0,s._)("i",{class:"gg-move-task"},null,-1))),X=[W],tt=Y((()=>(0,s._)("i",{class:"gg-pen"},null,-1))),et=[tt],ot=Y((()=>(0,s._)("i",{class:"gg-trash"},null,-1))),it=[ot],st=Y((()=>(0,s._)("i",{class:"gg-info"},null,-1))),nt=[st];function rt(t,e,o,i,r,d){return(0,s.wg)(),(0,s.iD)(s.HY,null,[(0,s._)("div",K,(0,n.zw)((o.index+1).toString().padStart(Math.max(2,o.todoL),"0")),1),(0,s._)("div",V,[(0,s._)("input",{class:"form-check-input pointer",onClick:e[0]||(e[0]=t=>d.save(o.index,t)),checked:!!o.item.done||void 0,id:"input-"+o.index,type:"checkbox",value:""},null,8,Z),(0,s._)("label",{class:(0,n.C_)(["form-check-label pointer",[{"text-decoration-line-through":!0===o.item.done},"z"===o.item.status?"low":o.item.status]]),for:"input-"+o.index},(0,n.zw)(o.item.todo),11,G)]),(0,s._)("div",{class:(0,n.C_)(["flex-fill pointer justify-content-center","z"===o.item.status?"low":o.item.status]),title:"z"===o.item.status?"low":o.item.status,onClick:e[1]||(e[1]=t=>d.statusItem(o.index))},X,10,Q),(0,s._)("div",{class:"flex-fill pointer justify-content-center",onClick:e[2]||(e[2]=t=>d.editItem(o.index))},et),(0,s._)("div",{class:"flex-fill pointer justify-content-center text-danger",onClick:e[3]||(e[3]=t=>d.removeItem(o.index))},it),(0,s._)("div",{class:"flex-fill pointer justify-content-center",onClick:e[4]||(e[4]=t=>d.infoItem(o.index))},nt)],64)}var dt={name:"listItem",emits:["priority","remove","edit","local","info"],props:{todoL:Number,item:Object,index:Number},methods:{statusItem(t){this.$emit("priority",t)},removeItem(t){this.$emit("remove",t)},editItem(t){this.$emit("edit",t)},save(t,e){this.$emit("local",t,e)},infoItem(t){this.$emit("info",t)}}},at=o(89);const lt=(0,at.Z)(dt,[["render",rt],["__scopeId","data-v-6796e3f0"]]);var ct=lt,mt={name:"App",data(){return{editing:-1,flag:!1,importance:["z","mid","hight"],lang:"lt-LT",placeholder:"Type here..",required:!1,title:"Todo-app",todo:"",isLocked:!1,checkedSum:!0,status:"z",itemInfo:[],timeAdd:[],timeFin:[],sortedItems:[!1,!1],columnsToShow:[!0,!0,!0,!0,!0,!0],todoArray:[],todoLength:()=>this.todoArray.length.toString().length}},components:{listItem:ct},mounted(){this.todoArray=this.parser()||[],this.isLocked=this.getLocalStorageItem("isLocked")||!1,this.checkedSum=this.getLocalStorageItem("checkedSum")||!1,this.getLocalStorageItem("wideScreen")&&this.$refs.mainContainer.classList.add("wide"),this.todoArray.length||(this.flag=!0);const[t,e]=this.getLocalStorageItem("sortedItems")||[];this.sortedItems[0]=!!t,this.sortedItems[1]=!!e;let o=document.createElement("script");o.setAttribute("src","js/app-install.min.js"),document.head.appendChild(o)},watch:{flag(){this.flag&&window.setTimeout((()=>{this.$refs.addInput.focus()}),200),this.flag=!1}},methods:{getLocalStorageItem(t){if("undefined"!==typeof Storage)return JSON.parse(window.localStorage.getItem(t))},addLocalStorageItem(t,e){this[t]=!this[t],"undefined"!==typeof Storage&&(this[t]!==this.getLocalStorageItem(t)?window.localStorage.setItem(t,e):window.localStorage.removeItem(t))},saveData(t,e){const o=document.createElement("a"),i=JSON.stringify(t,null,2),s=new window.Blob([i],{type:"octet/stream"}),n=window.URL.createObjectURL(s);o.href=n,o.download=e,o.click(),window.URL.revokeObjectURL(n)},exportLocalStorage(){const t={};for(let e=0;e<window.localStorage.length;e++)t[window.localStorage.key(e)]=this.getLocalStorageItem(window.localStorage.key(e));this.saveData(t,"todo-list-"+this.setTime().split(/[: ]/).join("-")+".json")},importLocalStorage(){let t=document.createElement("input");t.type="file";const e=this;t.onchange=function(t){const o=t.target.files[0];if(!o)return;const i=new window.FileReader;i.onload=function(t){e.addLocalStorageItem("checkedSum",JSON.parse(t.target.result).checkedSum),e.addLocalStorageItem("isLocked",JSON.parse(t.target.result).isLocked),e.addLocalStorageItem("todoApp",JSON.stringify(JSON.parse(t.target.result).todoApp)),window.location.reload()},i.readAsText(o)},t.click()},sortBy(t,e,o){this.todoArray.sort(this.sortList(t,e,o)),"todo"===t?this.sortedItems[0]=!this.sortedItems[0]:"status"===t&&(this.sortedItems[1]=!this.sortedItems[1]),window.localStorage.setItem("sortedItems",JSON.stringify(this.sortedItems)),this.addToLocalStorage()},sortList(t,e,o){const i=o?e=>o(e[t]):e=>e[t];return e=e?-1:1,(t,o)=>(t=i(t),o=i(o),e*((t>o)-(o>t)))},removeElem(t,e,o){1===o?this.todoArray.splice(t,1):this.todoArray[t][o].splice(e,1),this.addToLocalStorage()},infoTodo(t){this.$refs.info.classList.remove("hidden"),this.itemInfo={index:t,...this.todoArray[t]}},addToggleClass(t,e){this.$refs[t].classList.toggle(e)},parser(){try{return this.getLocalStorageItem("todoApp")}catch(t){window.localStorage.removeItem("todoApp"),window.location.reload()}},counterTodo(){return this.todoArray.filter((t=>!t.done)).length},addToLocalStorage(t,e){this.todoArray[t]&&e&&(this.todoArray[t].done=e.target.checked,"undefined"===typeof this.todoArray[t].timeFin&&(this.todoArray[t].timeFin=[]),this.todoArray[t].done&&this.todoArray[t].timeFin[this.todoArray[t].timeFin.length-1]!=this.setTime()&&this.todoArray[t].timeFin.push(this.setTime())),document.title="TODO – SAVED 💾";let o=setTimeout((()=>{document.title="TODO",clearTimeout(o)}),2e3);"undefined"!==typeof Storage&&window.localStorage.setItem("todoApp",JSON.stringify(this.todoArray))},addTodo(){if(0===this.todo.trim().length)return this.placeholder="Empty field!",void setTimeout((()=>this.$refs.addInput.focus()),99);const t=[].concat.apply([],this.todoArray.filter((t=>isNaN(t.todo))).map((t=>t.todo.toUpperCase())));if(this.editing>=0)this.todoArray[this.editing].todo=this.todo,this.$refs.addButton.innerHTML="add",document.body.style.overflow="visible",this.$refs.todoForm.classList.add("sticky-top"),this.$refs.todoForm.classList.remove("transforms"),this.editing=-1;else{if(this.flag=!0,t.indexOf(this.todo.toUpperCase().trim())>-1)return this.todo="",void(this.placeholder="Value already exists!");const e=this.todo.replace(/,/g,".").trim().replace(/\s+/g," ").trim();this.todoArray.unshift({todo:e.charAt(0).toUpperCase()+e.slice(1),done:!1,status:this.status,timeAdd:[this.setTime()],timeFin:[]})}this.todo="",this.placeholder="Type here..",this.$refs.addInput.focus(),this.scrollToTop(),this.addToLocalStorage()},removeTodo(t){this.todo="",this.editing=-1,this.todoArray.splice(t,1),this.addToLocalStorage()},editTodo(t){this.todo=this.todoArray[t].todo,this.editing=t,this.$refs.addButton.innerHTML="save",document.body.style.overflow="hidden",this.$refs.todoForm.classList.add("transforms"),this.$refs.todoForm.classList.remove("sticky-top"),this.$refs.addInput.focus()},scrollToTop(){window.scrollTo({top:0,behavior:"smooth"}),this.placeholder="Type here.."},setImportance(t){let e=this.importance.indexOf(this.todoArray[t].status);++e>2&&(e=0),this.todoArray[t].status=this.status=this.importance[e],this.addToLocalStorage()},setTime(){const t={hour:"2-digit",minute:"2-digit",hour12:!1};return(new Date).toLocaleDateString(this.lang,t)},counterNumbers(){const t=[];return this.todoArray.forEach((e=>{"undefined"===typeof e.todo||(this.checkedSum?!e.done:e.done)||isNaN(parseFloat(e.todo.match(/[+-]?((?=\.?\d)\d*\.?\d*)/g)))||t.push(parseFloat(e.todo.match(/[+-]?((?=\.?\d)\d*\.?\d*)/g)))})),t.reduce(((t,e)=>{const o=t.toString().split(".")[1],i=e.toString().split(".")[1],s=o&&o.length||0,n=i&&i.length||0;return parseFloat((t+e).toFixed(s+n))}),0)}}};const ht=(0,at.Z)(mt,[["render",P],["__scopeId","data-v-d4d072c0"]]);var ut=ht;(0,i.ri)(ut).mount("#app")}},e={};function o(i){var s=e[i];if(void 0!==s)return s.exports;var n=e[i]={exports:{}};return t[i](n,n.exports,o),n.exports}o.m=t,function(){var t=[];o.O=function(e,i,s,n){if(!i){var r=1/0;for(c=0;c<t.length;c++){i=t[c][0],s=t[c][1],n=t[c][2];for(var d=!0,a=0;a<i.length;a++)(!1&n||r>=n)&&Object.keys(o.O).every((function(t){return o.O[t](i[a])}))?i.splice(a--,1):(d=!1,n<r&&(r=n));if(d){t.splice(c--,1);var l=s();void 0!==l&&(e=l)}}return e}n=n||0;for(var c=t.length;c>0&&t[c-1][2]>n;c--)t[c]=t[c-1];t[c]=[i,s,n]}}(),function(){o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,{a:e}),e}}(),function(){o.d=function(t,e){for(var i in e)o.o(e,i)&&!o.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:e[i]})}}(),function(){o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={143:0};o.O.j=function(e){return 0===t[e]};var e=function(e,i){var s,n,r=i[0],d=i[1],a=i[2],l=0;if(r.some((function(e){return 0!==t[e]}))){for(s in d)o.o(d,s)&&(o.m[s]=d[s]);if(a)var c=a(o)}for(e&&e(i);l<r.length;l++)n=r[l],o.o(t,n)&&t[n]&&t[n][0](),t[n]=0;return o.O(c)},i=self["webpackChunkTODO"]=self["webpackChunkTODO"]||[];i.forEach(e.bind(null,0)),i.push=e.bind(null,i.push.bind(i))}();var i=o.O(void 0,[998],(function(){return o(567)}));i=o.O(i)})();
//# sourceMappingURL=app.dded79d2.js.map