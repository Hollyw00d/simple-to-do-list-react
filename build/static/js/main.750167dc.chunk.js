(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{11:function(e,t,n){e.exports=n(19)},17:function(e,t,n){},19:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),l=n(3),r=n.n(l),i=(n(17),n(4)),c=n(8),u=n(1),s=n(5),m=n(6),d=n(9),p=n(7),h=n(10);function f(e){var t=e.completedCount,n=e.handleDelete;return o.a.createElement("div",null,t>0?o.a.createElement("button",{onClick:n},"Delete completed (",t,") tasks"):null)}function k(e){var t=e.completedCount,n=e.tasksLength;return o.a.createElement("div",null,"You have ",t," of ",n," items completed on your to do list.")}function g(e){var t=e.tasks,n=e.toggleCompleteTask,a=e.editTask,l=e.handleChange;return o.a.createElement("ul",{id:"list"},t.map(function(e){return o.a.createElement("li",{key:e.id},o.a.createElement("input",{type:"checkbox",value:e.completed,onClick:function(){return n(e.id)}}),!e.editing&&o.a.createElement("span",{className:"".concat(e.completed?"completed ":"","read-item-title"),onClick:function(){a(e.id)}},e.name),e.editing&&o.a.createElement("input",{type:"text",onKeyPress:function(t){return l(t,e.id)},defaultValue:e.name,className:"edit-item"}))}))}function C(e){var t=e.onFormSubmit,n=e.taskName,a=e.onFormChange;return o.a.createElement("div",null,o.a.createElement("form",{onSubmit:t},o.a.createElement("p",null,o.a.createElement("label",{htmlFor:"todoItem"},"To Do Item"),o.a.createElement("br",null),o.a.createElement("input",{id:"todo-item",name:"taskName",value:n,onChange:a,type:"text",required:!0,minLength:"2",maxLength:"30"})),o.a.createElement("p",null,o.a.createElement("input",{type:"submit",value:"Add"}))))}var v=function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,o=new Array(a),l=0;l<a;l++)o[l]=arguments[l];return(n=Object(d.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(o)))).state={tasks:[],taskName:"",nextId:1,active:!1},n.onChange=function(e){n.setState(Object(u.a)({},e.target.name,e.target.value))},n.onFormSubmit=function(e){e.preventDefault(),n.setState(function(e){return{tasks:[].concat(Object(c.a)(e.tasks),[{name:n.state.taskName,completed:!1,id:e.nextId}])}},function(){n.setState(function(e){return{taskName:"",nextId:e.nextId+1}})})},n.toggleComplete=function(e){n.setState(function(t){return{tasks:t.tasks.map(function(t){return t.id===e?Object(i.a)({},t,{completed:!t.completed}):t})}})},n.completedCount=function(){return n.state.tasks.filter(function(e){return e.completed}).length},n.deleteCompleted=function(){n.setState(function(e){return{tasks:e.tasks.filter(function(e){return!e.completed})}})},n.editTask=function(e){var t=n.state.tasks;t.find(function(t){return e===t.id}).editing=!0,n.setState({tasks:t})},n.handleChange=function(e,t){var a=e.target.value,o=n.state.tasks,l=o.find(function(e){return t===e.id});l.name=a,13===e.which&&delete l.editing,n.setState({tasks:o})},n}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this.state,t=e.tasks,n=e.taskName;return o.a.createElement("div",{id:"wrapper"},o.a.createElement("h1",null,"Simple To Do List Using ReactJS"),o.a.createElement(C,{onFormSubmit:this.onFormSubmit,taskName:n,onFormChange:this.onChange}),o.a.createElement(g,{tasks:t,toggleCompleteTask:this.toggleComplete,editTask:this.editTask,handleChange:this.handleChange}),o.a.createElement(k,{completedCount:this.completedCount(),tasksLength:t.length}),o.a.createElement(f,{completedCount:this.completedCount(),handleDelete:this.deleteCompleted}))}}]),t}(a.Component);r.a.render(o.a.createElement(v,null),document.getElementById("root"))}},[[11,2,1]]]);
//# sourceMappingURL=main.750167dc.chunk.js.map