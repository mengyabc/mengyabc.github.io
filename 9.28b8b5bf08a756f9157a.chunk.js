(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"38aabac0991df22edfe3":function(e,t,n){"use strict";n.r(t);var i,o=n("8af190b70a6bc55c6f1b"),r=n.n(o),a=n("d7dd51e1bf6bfc2c9c3d"),c=n("ab4cb61bcb2dc161defb"),s=(n("8a2d1b95e05b6a321e74"),n("e95a63b25fb92ed15721")),f=n("d95b0cf107403b178365"),p=n("adc20f99e57c573c589c"),u=n("491cc2e27aa2b4221847"),d=n("813e0cc30ffbfa2fd57f"),l=n("f9f7134368a214ede562"),b=n("6938d226fd372a75cbf9");function h(e){return(h="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function m(e,t,n,o){i||(i="function"===typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var r=e&&e.defaultProps,a=arguments.length-3;if(t||0===a||(t={children:void 0}),t&&r)for(var c in r)void 0===t[c]&&(t[c]=r[c]);else t||(t=r||{});if(1===a)t.children=o;else if(a>1){for(var s=new Array(a),f=0;f<a;f++)s[f]=arguments[f+3];t.children=s}return{$$typeof:i,type:e,key:void 0===n?null:""+n,ref:null,props:t,_owner:null}}function v(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function y(e){return(y=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function g(e,t){return(g=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function x(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function w(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var k=function(e){function t(e){var n,i,o;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),i=this,o=y(t).call(this,e),n=!o||"object"!==h(o)&&"function"!==typeof o?x(i):o,w(x(x(n)),"inviteFriend",function(e){e.preventDefault();var t=document.cookie.split(";").filter(function(e){return 0==e.trim().indexOf("token=")})[0].slice(7,-1);n.props.inviteFriends({token:t})}),w(x(x(n)),"dismissTips",function(){localStorage.setItem("hideGroupTips",!0),n.setState({hideGroupTips:!0})}),n.state={hideGroupTips:localStorage.getItem("hideGroupTips"),competitionName:"",token:"",loading:!1},n}var n,i,o;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&g(e,t)}(t,r.a.PureComponent),n=t,(i=[{key:"componentWillReceiveProps",value:function(e){if(this.props.invitation!==e.invitation&&200===e.invitation.status){var t=e.invitation.data.token;this.setState({loading:!1,token:t})}}},{key:"render",value:function(){var e=this.props.classes,t=this.state.token;return t?m(s.Redirect,{to:"/invite/".concat(t)}):m("div",{className:e.root},void 0,!this.state.hideGroupTips&&m("div",{className:e.tipsCard},void 0,m("h1",{className:e.h1},void 0,"Start a new comp!"),m("h2",{className:e.h2},void 0,"To start a competition with your friends, click the Start button above and add your friends in from there."),m("div",{className:e.dismissBtn,onClick:this.dismissTips},void 0,"OK, GOT IT")),m("form",{className:e.form},void 0,m("input",{type:"text",name:"competitionName",placeholder:"Name your competition",value:this.state.firstName,onChange:this.handleInputChange,className:e.input})),m("div",{className:e.inviteText},void 0,"Invite your friends"),m("button",{className:e.inviteBtn,onClick:this.inviteFriend},void 0,"Click here to invite your friends"))}}])&&v(n.prototype,i),o&&v(n,o),t}();var O=Object(f.a)({key:"app",reducer:u.b}),S=Object(p.a)({key:"app",saga:l.a}),j=Object(a.connect)(function(e){return{invitation:e.get("app").get("invitation")}},function(e){return{inviteFriends:function(t){return e(Object(d.y)(t))}}});t.default=Object(c.compose)(O,S,j,Object(b.withStyles)({root:{},tipsCard:{backgroundImage:"linear-gradient(to right, #e55543, #db3c2e)",padding:"20px 15px",marginBottom:"15px"},h1:{fontSize:"2.5rem",fontWeight:"300",marginBottom:"20px"},h2:{fontSize:"1rem",fontWeight:"100",marginBottom:"15px"},dismissBtn:{width:"70px",marginLeft:"auto",textAlign:"right",fontSize:"0.8rem",fontWeight:"600","&:hover":{cursor:"pointer"}},input:{display:"block",width:"100%",height:"35px",padding:"24px",border:"1px solid #5d656f",borderRadius:"4px","&:focus":{outline:"none"}},form:{padding:"15px 32px"},inviteText:{padding:"5px 42px"},inviteBtn:{display:"flex",margin:"10px 32px",backgroundColor:"#ff6a6a",borderRadius:"4px",width:"calc(100% - 64px)",height:"50px",alignItems:"center",justifyContent:"center",fontSize:"0.9rem",fontWeight:"500",lineHeight:"1",color:"white","&:hover":{textDecoration:"none",color:"white"}}}))(k)}}]);