(this["webpackJsonpfrontend-test"]=this["webpackJsonpfrontend-test"]||[]).push([[0],{114:function(e,t,a){},115:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(10),c=a.n(l),i=(a(92),a(144)),o=a(147),s=a(149),m=a(150),u=a(151),d=Object(i.a)((function(e){return{root:{flexGrow:1},apppBar:{backgroundColor:"#1f4287"},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1,fontFamily:"Rowdies, cursive"}}})),p=function(){var e=d();return r.a.createElement("div",{className:e.root},r.a.createElement(o.a,{position:"static",className:e.apppBar},r.a.createElement(s.a,null,r.a.createElement(m.a,{variant:"h6",className:e.title},"Activity Logs"),r.a.createElement(u.a,{color:"inherit",className:e.menuButton},"ADMIN"))))},f=a(46),b=a.n(f),E=a(64),g=a(27),h=a(153),v=a(157),y=a(156),j=a(152),O=a(154),w=a(155),S=a(116),_=a(65),N=a.n(_),x=a(159),D=function(){return r.a.createElement("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"space-around"}},r.a.createElement("h3",null,"Uh oh!"),r.a.createElement("h4",null,"No Activity Logged by user on Selected Date."))},k=Object(i.a)((function(e){return{tableHead:{fontSize:"15px",fontWeight:500,fontFamily:"Rowdies, cursive"}}})),C=function(e){var t=e.filterData,a=k();return t.map((function(e){return r.a.createElement(j.a,{component:S.a},r.a.createElement(h.a,{"aria-label":"simple table"},r.a.createElement(O.a,null,r.a.createElement(w.a,null,r.a.createElement(y.a,{align:"center",className:a.tableHead},"Start Time"),r.a.createElement(y.a,{align:"center",className:a.tableHead},"End Time"))),r.a.createElement(v.a,null,r.a.createElement(w.a,{key:e.id},r.a.createElement(y.a,{component:"th",scope:"row",align:"center"},e.start_time.split(" ")[1]),r.a.createElement(y.a,{align:"center"},e.end_time.split(" ")[1])))))}))},H=a(66),I=a(14),B=a(158),M=function(e){var t=e.selectedDate,a=e.handleDateChange;return r.a.createElement(I.a,{utils:H.a},r.a.createElement(B.a,{disableToolbar:!0,variant:"inline",format:"MM/dd/yyyy",margin:"normal",id:"date-picker-inline",label:"Activity Logs",value:t,onChange:function(e){return a(e)},KeyboardButtonProps:{"aria-label":"change date"}}))},F=Object(i.a)((function(e){return{paper:{width:450,backgroundColor:e.palette.background.paper,border:"2px solid #000",boxShadow:e.shadows[5],padding:e.spacing(2,4,3),margin:"10vh auto",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}}})),A=function(e){var t=F(),a=e.modalInfo,l=e.show,c=e.handleClose,i=Object(n.useState)(new Date),o=Object(g.a)(i,2),s=o[0],m=o[1],u=Object(n.useState)(a.activity_periods&&0!==a.activity_periods.length?a.activity_periods.filter((function(e){var t="".concat(s.getMonth()+1,"/").concat(s.getDate(),"/").concat(s.getFullYear());return e.start_time.split(" ")[0].toString()==t})):[]),d=Object(g.a)(u,2),p=d[0],f=d[1],b=r.a.createElement("div",{className:t.paper},r.a.createElement("h2",{align:"center",id:"simple-modal-title"},a.real_name),r.a.createElement(M,{selectedDate:s,handleDateChange:function(e){m(e),f(a.activity_periods&&0!==a.activity_periods.length?a.activity_periods.filter((function(t){var a="".concat(e.getMonth()+1,"/").concat(e.getDate(),"/").concat(e.getFullYear());return console.log(t.start_time.split(" ")[0].toString()==a,t.start_time.split(" ")[0].toString(),a),t.start_time.split(" ")[0].toString()==a})):[])}}),r.a.createElement("div",{id:"simple-modal-description"},a.activity_periods&&0!==p.length?r.a.createElement(C,{filterData:p}):r.a.createElement(D,null)));return r.a.createElement(x.a,{open:l,onClose:c,"aria-labelledby":"simple-modal-title","aria-describedby":"simple-modal-description"},b)},L=Object(i.a)((function(e){return{table:{minWidth:650},tableHead:{fontSize:"20px",fontWeight:500,fontFamily:"Rowdies, cursive"}}})),R=function(){var e=L(),t=Object(n.useState)([]),a=Object(g.a)(t,2),l=a[0],c=a[1],i=Object(n.useState)([]),o=Object(g.a)(i,2),s=o[0],m=o[1],u=Object(n.useState)(!1),d=Object(g.a)(u,2),p=(d[0],d[1]),f=Object(n.useState)(!1),_=Object(g.a)(f,2),x=_[0],D=_[1],k=function(){return D(!0)};Object(n.useEffect)((function(){(function(){var e=Object(E.a)(b.a.mark((function e(){var t;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N()("https://my-json-server.typicode.com/unnati24/mock-api/db");case 2:t=e.sent,c(t.data.members);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var C=function(){p(k)};return r.a.createElement("div",null,r.a.createElement(j.a,{component:S.a},r.a.createElement(h.a,{className:e.table,"aria-label":"simple table"},r.a.createElement(O.a,null,r.a.createElement(w.a,null,r.a.createElement(y.a,{align:"center",className:e.tableHead},"User Id"),r.a.createElement(y.a,{align:"center",className:e.tableHead},"Name"),r.a.createElement(y.a,{align:"center",className:e.tableHead},"Location"))),r.a.createElement(v.a,null,l.map((function(e){return r.a.createElement(w.a,{key:e.id,onClick:function(t){return function(e,t){var a=l.filter((function(e){return e.id==t}));m(a[0]),C()}(0,e.id)}},r.a.createElement(y.a,{component:"th",scope:"row",align:"center"},e.id),r.a.createElement(y.a,{align:"center"},e.real_name),r.a.createElement(y.a,{align:"center"},e.tz))}))))),r.a.createElement(A,{modalInfo:s,show:x,handleClose:function(){return D(!1)}}))};a(114);var z=function(){return r.a.createElement("div",null,r.a.createElement(p,null),r.a.createElement(R,null))};c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(z,null)),document.getElementById("root"))},87:function(e,t,a){e.exports=a(115)},92:function(e,t,a){}},[[87,1,2]]]);
//# sourceMappingURL=main.e6949cf6.chunk.js.map