(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{"29fc8ea5db601db2c7fd":function(e,t,a){"use strict";a.r(t);var n,r=a("8af190b70a6bc55c6f1b"),o=a.n(r),i=a("d7dd51e1bf6bfc2c9c3d"),s=a("ab4cb61bcb2dc161defb"),l=a("d95b0cf107403b178365"),p=a("adc20f99e57c573c589c"),u=a("491cc2e27aa2b4221847"),c=a("813e0cc30ffbfa2fd57f"),f=a("f9f7134368a214ede562"),d=a("6938d226fd372a75cbf9"),m=(a("6b0cd370e854fbdb6989"),a("041021065ead6515c7e1")),h=a("813abfae34ccd3916757");function b(e){return(b="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function y(e,t,a,r){n||(n="function"===typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var o=e&&e.defaultProps,i=arguments.length-3;if(t||0===i||(t={children:void 0}),t&&o)for(var s in o)void 0===t[s]&&(t[s]=o[s]);else t||(t=o||{});if(1===i)t.children=r;else if(i>1){for(var l=new Array(i),p=0;p<i;p++)l[p]=arguments[p+3];t.children=l}return{$$typeof:n,type:e,key:void 0===a?null:""+a,ref:null,props:t,_owner:null}}function g(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function v(e){return(v=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function w(e,t){return(w=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function k(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function x(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var O=y(m.a,{}),C=function(e){function t(e){var a,n,r;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),n=this,r=v(t).call(this,e),a=!r||"object"!==b(r)&&"function"!==typeof r?k(n):r,x(k(k(a)),"handleInputChange",function(e){var t=e.target.name,n=e.target.value;a.setState(x({},t,n))}),x(k(k(a)),"updateProfile",function(e){e.preventDefault(),a.setState({loading:!0}),a.props.updateUserProfile({firstname:a.state.firstname,lastname:a.state.lastname,nickname:a.state.nickname,email:a.state.email,password:a.state.password,number:a.state.number,token:document.cookie.split(";").filter(function(e){return 0==e.trim().indexOf("token=")})[0].slice(7,-1)})}),a.state={firstname:"",lastname:"",username:"",email:"",password:"",number:"",loading:!0},a}var a,n,r;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&w(e,t)}(t,o.a.PureComponent),a=t,(n=[{key:"componentDidMount",value:function(){var e=document.cookie.split(";").filter(function(e){return 0==e.trim().indexOf("token=")})[0].slice(7,-1);this.props.getUserProfile({token:e})}},{key:"componentDidUpdate",value:function(e){var t=this;this.props.profile!==e.profile&&(200===this.props.profile.status?this.setState({loading:!1,firstname:this.props.profile.data.name_first||"",lastname:this.props.profile.data.name_last||"",nickname:this.props.profile.data.name_nick||"",email:this.props.profile.data.email||"",password:this.props.profile.data.password||"",number:this.props.profile.data.number||""}):(this.setState({loading:!1,alert:!0,alertType:"error",alertMessage:"Could not load/update your profile. Please try again."}),this.dismissAlert=setTimeout(function(){t.setState({alert:!1})},1e3)))}},{key:"render",value:function(){var e=this.props.classes;return y("div",{className:e.root},void 0,this.state.loading?O:"",y(h.a,{alert:this.state.alert,type:this.state.alertType,message:this.state.alertMessage}),y("div",{className:e.avatar}),y("form",{},void 0,y("input",{type:"text",name:"firstname",placeholder:"First Name",value:this.state.firstname,onChange:this.handleInputChange,className:e.input}),y("input",{type:"text",name:"lastname",placeholder:"Last Name",value:this.state.lastname,onChange:this.handleInputChange,className:e.input}),y("input",{type:"text",name:"username",placeholder:"Nick Name",value:this.state.username,onChange:this.handleInputChange,className:e.input}),y("input",{type:"text",name:"email",placeholder:"Email Adress",value:this.state.email,onChange:this.handleInputChange,className:e.input,style:{color:"#5d656f",cursor:"no-drop"},disabled:!0}),y("input",{type:"password",name:"password",placeholder:"Password",value:this.state.password,onChange:this.handleInputChange,className:e.input}),y("input",{type:"text",name:"number",placeholder:"Phone Number",value:this.state.number,onChange:this.handleInputChange,className:e.input}),y("button",{className:e.updateBtn,onClick:this.updateProfile},void 0,"Update")))}}])&&g(a.prototype,n),r&&g(a,r),t}();var P=Object(l.a)({key:"app",reducer:u.b}),j=Object(p.a)({key:"app",saga:f.a}),S=Object(i.connect)(function(e){return{profile:e.get("app").get("profile")}},function(e){return{getUserProfile:function(t){return e(Object(c.t)(t))},updateUserProfile:function(t){return e(Object(c.x)(t))}}});t.default=Object(s.compose)(P,j,S,Object(d.withStyles)({root:{padding:"0 32px"},avatar:{width:"100px",height:"100px",borderRadius:"50%",backgroundColor:"pink",margin:"50px auto"},input:{display:"block",width:"100%",height:"35px",padding:"24px",margin:"12px 0",border:"1px solid #5d656f",borderRadius:"4px","&:focus":{outline:"none"}},updateBtn:{display:"block",width:"100%",padding:"15px 0",backgroundColor:"#ff6a6a",borderRadius:"4px",marginTop:"32px",fontWeight:"600","&:focus":{outline:"none"}}}))(C)}}]);