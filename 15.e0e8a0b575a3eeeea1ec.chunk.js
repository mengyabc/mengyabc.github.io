(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{"11bae9097b9699fbe29a":function(e,t,a){"use strict";a.r(t);var o,n=a("8af190b70a6bc55c6f1b"),r=a.n(n),i=a("d7dd51e1bf6bfc2c9c3d"),s=a("ab4cb61bcb2dc161defb"),l=a("e95a63b25fb92ed15721"),c=a("d95b0cf107403b178365"),u=a("adc20f99e57c573c589c"),d=a("491cc2e27aa2b4221847"),p=a("813e0cc30ffbfa2fd57f"),f=a("f9f7134368a214ede562"),b=a("6938d226fd372a75cbf9"),m=a("ef58856f4f875bd36582"),h=a.n(m),g=a("6b0cd370e854fbdb6989"),v=a("041021065ead6515c7e1"),y=a("813abfae34ccd3916757");function w(e){return(w="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function k(e,t,a,n){o||(o="function"===typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var r=e&&e.defaultProps,i=arguments.length-3;if(t||0===i||(t={children:void 0}),t&&r)for(var s in r)void 0===t[s]&&(t[s]=r[s]);else t||(t=r||{});if(1===i)t.children=n;else if(i>1){for(var l=new Array(i),c=0;c<i;c++)l[c]=arguments[c+3];t.children=l}return{$$typeof:o,type:e,key:void 0===a?null:""+a,ref:null,props:t,_owner:null}}function N(e,t){for(var a=0;a<t.length;a++){var o=t[a];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function x(e){return(x=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function S(e,t){return(S=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function O(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function j(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var C=k(v.a,{}),P=k("h2",{className:"text-center p-4 mb-4"},void 0,"JustATip"),T=k("div",{className:"position-absolute p-2"},void 0,k(h.a,{className:"position-relative text-lg"},void 0,"perm_identity")),_=k("div",{className:"position-absolute p-2"},void 0,k(h.a,{className:"position-relative text-lg "},void 0,"lock")),U=k("div",{className:"pt-1 mx-4 border-bottom "}),L=k(g.a,{name:"facebook",height:20,className:"pr-3"}),F=k(g.a,{name:"googleplus",height:28,className:"pr-3"}),A=k("div",{className:"px-4 text-center"},void 0,k(l.Link,{variant:"contained",to:"/register",className:"text-light d-block mb-4"},void 0,"Not a member, sign up now"),k(l.Link,{variant:"contained",to:"/register",className:"text-light d-block"},void 0,"Forget your password?")),M=function(e){function t(e){var a,o,n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),o=this,n=x(t).call(this,e),a=!n||"object"!==w(n)&&"function"!==typeof n?O(o):n,j(O(O(a)),"handleusernameChange",function(e){a.setState({username:e.target.value})}),j(O(O(a)),"handlePasswordChange",function(e){a.setState({password:e.target.value})}),j(O(O(a)),"login",function(e){e.preventDefault();var t=a.state,o=t.username,n=t.password;o&&n?(a.setState({loading:!0}),a.props.authenticateUser({username:o,password:n})):(a.setState({alert:!0,alertType:"error",alertMessage:"Please fill in your details."}),a.dismissAlert=setTimeout(function(){a.setState({alert:!1})},1e3))}),j(O(O(a)),"googleLogin",function(){window.open("https://api.jtt.tiye.link/authenticate/google","_self")}),j(O(O(a)),"facebookLogin",function(){window.open("https://api.jtt.tiye.link/authenticate/facebook","_self")}),a.state={password:"",username:"",loading:!1,alert:!1,alertMessage:!1,alertType:!1,redirectToReferrer:!1},a}var a,o,n;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&S(e,t)}(t,r.a.PureComponent),a=t,(o=[{key:"componentDidMount",value:function(){var e=this.getNonceFromUrl(this.props.location);e&&this.props.authenticateSocialUser({nonce:e})}},{key:"componentDidUpdate",value:function(e){var t=this;if(this.props.authentication!==e.authentication){var a=200===this.props.authentication.status,o=this.props.authentication.data?this.props.authentication.data.token:"";a&&o?(document.cookie="token=[".concat(o,"]"),this.setState({redirectToReferrer:a})):(this.setState({loading:!1,alert:!0,alertType:"error",alertMessage:"Login failed. Please try again."}),this.dismissAlert=setTimeout(function(){t.setState({alert:!1})},1e3))}}},{key:"getNonceFromUrl",value:function(e){if(e&&e.search){var t=e.search.replace(/^\?/,"");if(t){var a=t.split("=");return a?a.slice(-1)[0]:void 0}}}},{key:"handleUserNameChange",value:function(e){this.setState({userName:e.target.value})}},{key:"componentWillUnmount",value:function(){clearTimeout(this.dismissAlert)}},{key:"render",value:function(){var e=this.props,t=e.classes,a=(e.authentication,(this.props.location.state||{from:{pathname:"/"}}).from);return this.state.redirectToReferrer?k(l.Redirect,{to:a}):k("div",{className:"text-light p-3 vh-100"},void 0,this.state.loading?C:"",k(y.a,{alert:this.state.alert,type:this.state.alertType,message:this.state.alertMessage}),P,k("form",{className:"".concat(t.container," d-flex flex-column"),noValidate:!0,autoComplete:"off"},void 0,k("div",{className:"w-100"},void 0,T,k("input",{type:"text",id:"user",placeholder:"User Name",value:this.state.username,onChange:this.handleusernameChange,className:"".concat(t.textField," border rounded mb-3 w-100")})),k("div",{className:"w-100"},void 0,_,k("input",{id:"password",placeholder:"Password",value:this.state.password,onChange:this.handlePasswordChange,type:"password",className:"".concat(t.textField," border rounded mb-3 w-100")}))),k("div",{className:"px-4"},void 0,k("button",{onClick:this.login,className:"".concat(t.login," btn btn-lg text-light w-100 mb-4")},void 0,"Login")),U,k("div",{className:"p-2 text-uppercase mt-n3 w-25 text-center mx-auto mb-2",style:{backgroundColor:"var(--theme-bg)"}},void 0,"or"),k("div",{className:"d-flex px-4 mb-5"},void 0,k("div",{className:"w-50 pr-2 text-primary"},void 0,k("button",{onClick:this.facebookLogin,className:"".concat(t.button," btn btn-primary w-100 text-left"),style:{backgroundColor:"var(--facebook-blue)",borderColor:"var(--facebook-blue)"}},void 0,L,k("span",{className:"pl-3 border-left font-weight-bold d-inline-block",style:{lineHeight:"1.8"}},void 0,"Sign In"))),k("div",{className:"w-50 pl-2"},void 0,k("button",{onClick:this.googleLogin,className:"".concat(t.button," btn bg-light w-100 text-left"),style:{color:"var(--google-red)"}},void 0,F,k("span",{className:"pl-3 border-left border-danger font-weight-bold d-inline-block",style:{lineHeight:"1.8"}},void 0,"Sign In")))),A)}}])&&N(a.prototype,o),n&&N(a,n),t}();var R=Object(c.a)({key:"app",reducer:d.b}),D=Object(u.a)({key:"app",saga:f.a}),E=Object(i.connect)(function(e){return{authentication:e.get("app").get("authentication")}},function(e){return{authenticateUser:function(t){return e(Object(p.q)(t))},authenticateSocialUser:function(t){return e(Object(p.p)(t))}}});t.default=Object(s.compose)(R,D,E,Object(b.withStyles)(function(e){return{container:{display:"flex",flexWrap:"wrap",padding:"0 1.5rem"},textField:{height:"3rem",padding:"0.5rem 2.5rem"},button:{height:"3rem"},login:{"background-color":"#d24d57"}}}))(M)}}]);