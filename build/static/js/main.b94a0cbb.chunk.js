(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{11:function(e,t,n){e.exports=n(19)},17:function(e,t,n){},19:function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),o=n(3),c=n.n(o),r=(n(17),n(4)),u=n(8),i=n(1),m=n(5),s=n(6),d=n(9),p=n(7),f=n(10);function h(e){var t=e.completedCount,n=e.handleDelete;return l.a.createElement("div",null,t>0?l.a.createElement("button",{onClick:n},"Delete completed (",t,") tasks"):null)}var k=function(e){function t(){var e,n;Object(m.a)(this,t);for(var a=arguments.length,l=new Array(a),o=0;o<a;o++)l[o]=arguments[o];return(n=Object(d.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(l)))).state={tasks:[],taskName:"",nextId:1},n.onChange=function(e){n.setState(Object(i.a)({},e.target.name,e.target.value))},n.onFormSubmit=function(e){e.preventDefault(),n.setState(function(e){return{tasks:[].concat(Object(u.a)(e.tasks),[{name:n.state.taskName,completed:!1,id:e.nextId}])}},function(){n.setState(function(e){return{taskName:"",nextId:e.nextId+1}})})},n.toggleComplete=function(e){n.setState(function(t){return{tasks:t.tasks.map(function(t){return t.id===e?Object(r.a)({},t,{completed:!t.completed}):t})}})},n.completedCount=function(){return n.state.tasks.filter(function(e){return e.completed}).length},n.deleteCompleted=function(){n.setState(function(e){return{tasks:e.tasks.filter(function(e){return!e.completed})}})},n}return Object(f.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this,t=this.state,n=t.tasks,a=t.taskName;return l.a.createElement("div",{id:"wrapper"},l.a.createElement("h1",null,"Simple To Do List Using ReactJS"),l.a.createElement("div",null,l.a.createElement("form",{onSubmit:this.onFormSubmit},l.a.createElement("p",null,l.a.createElement("label",{htmlFor:"todoItem"},"To Do Item"),l.a.createElement("br",null),l.a.createElement("input",{id:"todo-item",name:"taskName",value:a,onChange:this.onChange,type:"text",required:!0,minLength:"2",maxLength:"30"})),l.a.createElement("p",null,l.a.createElement("input",{type:"submit",value:"Add"})))),l.a.createElement("ul",{id:"list"},n.map(function(t){return l.a.createElement("li",{key:t.id},l.a.createElement("input",{type:"checkbox",value:t.completed,onClick:function(){return e.toggleComplete(t.id)}}),l.a.createElement("span",{className:"".concat(t.completed?"completed":""," read-item-title")},t.name))})),l.a.createElement("div",null,"You have ",this.completedCount()," of ",n.length," items completed on your to do list."),l.a.createElement(h,{completedCount:this.completedCount(),handleDelete:this.deleteCompleted}))}}]),t}(a.Component);c.a.render(l.a.createElement(k,null),document.getElementById("root"))}},[[11,2,1]]]);
//# sourceMappingURL=main.b94a0cbb.chunk.js.map