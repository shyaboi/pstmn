(this.webpackJsonpgetwoman=this.webpackJsonpgetwoman||[]).push([[0],{37:function(e,t,a){},39:function(e,t,a){e.exports=a.p+"static/media/logosml.98327125.png"},54:function(e,t,a){e.exports=a(65)},59:function(e,t,a){},65:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(11),l=a.n(r),c=(a(59),a(15)),i=a(16),s=a(20),u=a(18),d=(a(37),a(38),a(34)),m=a(39),h=a.n(m),g=a(24),p=a(40),f=a.n(p),b=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(c.a)(this,a),(e=t.call(this)).state={toggleActive:!0},e.onToggle=e.onToggle.bind(Object(g.a)(e)),e}return Object(i.a)(a,[{key:"onToggle",value:function(){console.log("something"),this.setState({toggleActive:!this.state.toggleActive})}},{key:"render",value:function(){var e=this;return o.a.createElement(f.a,{onlabel:"Dark",offlabel:"Light",width:"88",checked:!0,onChange:function(t){e.setState({toggleActive:t})},onstyle:"dark",offstyle:"light",style:"border",onClick:(console.log(e.state.toggleActive),!1===e.state.toggleActive&&(document.querySelector("#root").style.color="#242424 ",document.querySelector("#root").style.background="#F7F7F7",document.querySelector("html").style.background="#F7F7F7",console.log("lightmode ")),void(!0===e.state.toggleActive&&(document.querySelector("#root").style.color="#FFFFFF",document.querySelector("#root").style.background="#4E4E4E",document.querySelector("html").style.background="#4E4E4E",console.log("darkmode"))))})}}]),a}(n.Component),E=a(70),y=a(42);var v=function(){return o.a.createElement(E.a,{fluid:!0},o.a.createElement(d.a,{bg:"dark",variant:"dark"},o.a.createElement(y.a,null,o.a.createElement(d.a.Brand,{href:"#home"},o.a.createElement("img",{alt:"",src:h.a,width:"30",height:"30",className:"d-inline-block align-top"})," ","Getwoman")),o.a.createElement(b,null)))},k=a(33),S=a.n(k),O=a(43),C=a(44),j=a.n(C),w=a(71),F=a(72),x=a(49),T=a(31),J=a(73),N=a(50),A=a(29),q=a(75),P=a(74),G=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).urlChange=function(e){n.setState({url:e.target.value})},n.bodyChange=function(e){n.setState({body:e.target.value}),console.log(n.state.body)},n.postData=function(){n.setState({body:n.state.body});var e=n.state.picked;function t(){return(t=Object(O.a)(S.a.mark((function e(){var t,a,n,o=arguments;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=o.length>0&&void 0!==o[0]?o[0]:"",a=o.length>1&&void 0!==o[1]?o[1]:{},e.next=4,fetch(t,{method:"POST",mode:"cors",cache:"no-cache",credentials:"same-origin",headers:{"Content-Type":"application/json"},redirect:"follow",referrerPolicy:"no-referrer",body:JSON.stringify(a)});case 4:return n=e.sent,e.abrupt("return",n.json());case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}console.log(e),function(){return t.apply(this,arguments)}("https://getwomanserver.herokuapp.com/",{body:n.state}).then((function(e){if(console.log(typeof e),"string"===typeof e)var t=JSON.stringify(e);if("object"===typeof e)t=o.a.createElement(j.a,{src:e});n.setState({response:t}),console.log(e)}))},n.state={picked:"Method",body:'{"someExampleJSON":"morjson"}',response:"{example:JSON}",url:"https://openflags.net/rando"},n}return Object(i.a)(a,[{key:"handleClick",value:function(e){this.setState({picked:e})}},{key:"render",value:function(){var e=this;return o.a.createElement(E.a,{fluid:!0},o.a.createElement(E.a,{fluid:!0},o.a.createElement(w.a,null,o.a.createElement(y.a,{md:1},[F.a].map((function(t,a){return o.a.createElement(t,{as:x.a,key:a,id:"dropdown-button-drop-".concat(a),size:"lg",title:e.state.picked},o.a.createElement(T.a.Item,{eventKey:"POST",onClick:function(){return e.handleClick("POST")}},"Post"),o.a.createElement(T.a.Item,{eventKey:"GET",onClick:function(){return e.handleClick("GET")}},"Get"))}))),o.a.createElement(y.a,{md:10},o.a.createElement(J.a,{className:"mb-3",size:"lg"},o.a.createElement(J.a.Prepend,null,o.a.createElement(J.a.Text,{id:"basic-addon3"},"URL to ",this.state.picked)),o.a.createElement(N.a,{id:"basic-url","aria-describedby":"basic-addon3",placeholder:"https://openflags.net/rando",defaultValue:"",onChange:this.urlChange}))),o.a.createElement(y.a,{md:1},o.a.createElement(A.a,{type:"submit",value:"Submit",size:"lg",onClick:this.postData},"Submit")))),o.a.createElement(E.a,null,o.a.createElement(q.a.Group,{controlId:"exampleForm.ControlTextarea1"},o.a.createElement(q.a.Label,null,o.a.createElement("h1",null,"Enter JSON body(if needed)")),o.a.createElement(q.a.Control,{as:"textarea",rows:"3",placeholder:this.state.body,onChange:this.bodyChange}))),o.a.createElement("br",null),o.a.createElement(E.a,null,o.a.createElement("div",null,o.a.createElement(P.a,{fluid:!0,id:"jumbo"},o.a.createElement(E.a,null,o.a.createElement("h1",null,"Response From Server"),o.a.createElement(E.a,null,this.state.response))))))}}]),a}(o.a.Component),I=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).state={picked:"Method",body:"{someExampleJSON:morjson}"},n}return Object(i.a)(a,[{key:"handleClick",value:function(e){this.setState({picked:e})}},{key:"render",value:function(){return o.a.createElement(E.a,{fluid:!0},o.a.createElement(v,null),o.a.createElement("br",null),o.a.createElement(G,null))}}]),a}(o.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(I,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[54,1,2]]]);
//# sourceMappingURL=main.add5695f.chunk.js.map