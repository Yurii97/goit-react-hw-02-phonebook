(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],{15:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),c=n(4),s=n.n(c),i=(n(15),n(8)),o=n(5),l=n(6),u=n(7),h=n(10),d=n(9),b=n(3),m=n(0),j=function(e){Object(h.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={contacts:[],filter:"",name:"",number:""},e.inputId=Object(b.a)(),e.handleChange=function(t){var n=t.target,a=n.name,r=n.value;e.setState(Object(o.a)({},a,r))},e.submitForm=function(t){t.preventDefault();var n=e.state,a=n.name,r=n.number,c={id:Object(b.a)(),name:a,number:r};e.setState((function(e){return{contacts:[c].concat(Object(i.a)(e.contacts)),name:"",number:""}}))},e.deleteContact=function(t){e.setState((function(e){return{contacts:e.contacts.filter((function(e){return e.id!==t}))}}))},e}return Object(u.a)(n,[{key:"render",value:function(){var e=this;return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("h1",{children:"Phonebook"}),Object(m.jsxs)("form",{onSubmit:this.submitForm,children:[Object(m.jsxs)("label",{children:["Name",Object(m.jsx)("input",{type:"text",name:"name",onChange:this.handleChange,value:this.state.name,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0})]}),Object(m.jsxs)("label",{children:["Number",Object(m.jsx)("input",{type:"tel",name:"number",onChange:this.handleChange,value:this.state.number,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0})]}),Object(m.jsx)("button",{type:"submit",children:"Add contact"})]}),Object(m.jsxs)("section",{children:[Object(m.jsx)("h2",{children:"Contacts"}),Object(m.jsxs)("label",{children:["Find contacts by name",Object(m.jsx)("input",{type:"text",name:"filter",onChange:this.handleChange,value:this.state.filter,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"})]}),Object(m.jsx)("ul",{children:this.state.contacts.filter((function(t){return t.name.toLowerCase().includes(e.state.filter.toLowerCase())})).map((function(t){var n=t.id,a=t.name,r=t.number;return Object(m.jsxs)("li",{children:[a,":",r,Object(m.jsx)("button",{type:"button",onClick:function(){return e.deleteContact(n)},children:"Delete"})]},n)}))})]})]})}}]),n}(a.Component),p=j;s.a.render(Object(m.jsx)(r.a.StrictMode,{children:Object(m.jsx)(p,{})}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.ef1d86e5.chunk.js.map