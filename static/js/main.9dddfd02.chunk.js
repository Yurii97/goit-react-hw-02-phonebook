(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],{14:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var a=n(1),s=n.n(a),c=n(3),r=n.n(c),o=(n(14),n(4)),i=n(5),h=n(6),l=n(8),d=n(7),b=n(9),u=n(0),j=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,s=new Array(a),c=0;c<a;c++)s[c]=arguments[c];return(e=t.call.apply(t,[this].concat(s))).state={contacts:[],name:"",number:""},e.inputId=Object(b.a)(),e.handleChange=function(t){var n=t.target,a=n.name,s=n.value;e.setState(Object(o.a)({},a,s))},e.submitForm=function(t){t.preventDefault(),console.log(t.target),console.log(e.state)},e}return Object(h.a)(n,[{key:"render",value:function(){return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("h1",{children:"Phonebook"}),Object(u.jsxs)("form",{id:this.inputId,onSubmit:this.submitForm,children:[Object(u.jsxs)("label",{children:["Name",Object(u.jsx)("input",{type:"text",name:"name",onChange:this.handleChange,value:this.state.name,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0})]}),Object(u.jsxs)("label",{children:["Number",Object(u.jsx)("input",{type:"tel",name:"number",onChange:this.handleChange,value:this.state.number,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0})]}),Object(u.jsx)("button",{type:"submit",children:"Add contact"})]}),Object(u.jsx)("section",{children:Object(u.jsxs)("ul",{children:[console.log(this.state.contacts),this.state.contacts.map((function(e){var t=e.id,n=e.name,a=e.number;return Object(u.jsxs)("li",{children:[n,":",a]},t)}))]})})]})}}]),n}(a.Component),m=j;r.a.render(Object(u.jsx)(s.a.StrictMode,{children:Object(u.jsx)(m,{})}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.9dddfd02.chunk.js.map