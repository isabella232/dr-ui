(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{"5LOC":function(e){e.exports=JSON.parse('{"SITE":"Dr. UI","BASEURL":"/dr-ui","FORWARD_EVENT_WEBHOOK":{"production":"null","staging":"null"}}')},"6RjT":function(e,t,n){"use strict";var r=n("q1tI"),o=n.n(r),a=n("hLhG"),i=n.n(a);n("17x9");var c=n("xk4V"),u=n.n(c),s=n("5sBR"),f=n.n(s),l=n("3CEA"),p=n("gtzJ"),d=n("TSYQ"),b=n.n(d),h=n("NmYn"),y=n.n(h),m=n("C1e6");function v(e){return(v="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function g(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function O(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?g(Object(n),!0).forEach((function(t){x(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):g(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function w(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function S(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function k(e,t,n){return t&&S(e.prototype,t),n&&S(e,n),e}function E(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&j(e,t)}function j(e,t){return(j=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function P(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=R(e);if(t){var o=R(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return T(this,n)}}function T(e,t){return!t||"object"!==v(t)&&"function"!=typeof t?_(e):t}function _(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function R(e){return(R=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function x(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var N=u()(),C=Object(m.a)(),I="undefined"!=typeof window?window.location:void 0,D=function(e){E(n,e);var t=P(n);function n(e){var r;return w(this,n),x(_(r=t.call(this,e)),"createId",(function(e){var t=y()(r.props.section||"page",{replacement:"-",lower:!0});return"dr-ui--feedback-".concat(t,"-").concat(e)})),x(_(r),"handleText",(function(e){r.setState({feedback:e})})),x(_(r),"handleYesNo",(function(e){r.setState({helpful:e},(function(){r.setState({event:r.createSegmentEvent()},(function(){r.sendToSegment()}))}))})),x(_(r),"handleSubmitFeedback",(function(){r.setState({feedbackSent:!0,event:r.createSegmentEvent()},(function(){r.sendToSegment(),!1!==r.props.feedbackSentryDsn&&r.sendToSentry()}))})),x(_(r),"createSegmentEvent",(function(){return O(O({event:"Sent docs feedback"},r.state.user&&r.state.user.id?{userId:r.state.user.id}:{anonymousId:N}),{},{properties:O(O(O(O(O({helpful:r.state.helpful},r.state.feedback&&{feedback:r.state.feedback}),{},{site:r.props.site,section:r.props.section||void 0,page:r.props.location||void 0},r.state.user&&r.state.user.id?{userId:r.state.user.id}:{anonymousId:N}),!r.state.user&&{anonymousId:N}),r.state.user&&r.state.user.plan&&{plan:r.state.user.plan.id}),{},{environment:C,location:{hash:I.hash,host:I.host,hostname:I.hostname,href:I.href,origin:I.origin,pathname:I.pathname,search:I.search}})})})),x(_(r),"sendToSegment",(function(){!function(e,t,n){if(n=n||function(){},"undefined"!=typeof window){if(!e)throw new Error("event argument required");var r=/(^|\S+\.)mapbox\.com/.test(window.location.host)?t.production:t.staging,o=new XMLHttpRequest;r?(o.open("POST",r),o.setRequestHeader("Accept","application/jsn"),o.setRequestHeader("Content-Type","application/jon"),o.onerror=a,o.onload=function(){if(200===o.status)return void n();var e;try{var t=JSON.parse(o.response);e=t.message}catch(t){e=o.response}var r=new Error("["+o.status+" HTTP error] "+e);r.statusCode=o.status,r.response=o.response,a(r)},o.send(JSON.stringify(e))):a("forward-event missing POST url")}function a(e){n(e)}}(r.state.event,r.props.webhook,(function(e){e&&r.sendToSentry("error",e)}))})),x(_(r),"sendToSentry",(function(e,t){l.a({dsn:r.props.feedbackSentryDsn,maxValueLength:1e3,environment:C}),p.c((function(n){n.setTag("site",r.props.site),n.setTag("helpful",r.state.helpful),r.props.section&&n.setTag("section",r.props.section),r.props.preferredLanguage&&n.setTag("preferredLanguage",r.props.preferredLanguage),r.state.user&&r.state.user.plan&&r.state.user.plan.id&&n.setTag("plan",r.state.user.plan.id),r.state.user&&p.e(O(O(O({},r.state.user.id&&{username:r.state.user.id}),r.state.user.email&&{email:r.state.user.email}),r.state.user.plan&&r.state.user.plan.id&&{data:{plan:r.state.user.plan.id}})),t&&p.d("error",t),n.setLevel(e||"info")})),p.b(r.state.feedback)})),r.state={helpful:void 0,feedback:void 0,feedbackSent:void 0,event:void 0,user:void 0},r}return k(n,[{key:"componentDidMount",value:function(){var e=this;"undefined"!=typeof MapboxPageShell&&MapboxPageShell.afterUserCheck((function(){e.setState({user:MapboxPageShell.getUser()||void 0})}))}},{key:"render",value:function(){var e=this,t=this.state.feedback?1e3-this.state.feedback.length:1e3,n=t<0;return o.a.createElement("div",{className:"bg-gray-faint py12 px18 round color-gray"},o.a.createElement("div",null,void 0===this.state.helpful&&o.a.createElement("div",null,o.a.createElement("div",{className:"mb6"},"Was this ",this.props.type," helpful?"),o.a.createElement("button",{id:this.createId("yes"),onClick:function(){return e.handleYesNo(!0)},className:"btn btn--s"},"Yes"),o.a.createElement("button",{id:this.createId("no"),onClick:function(){return e.handleYesNo(!1)},className:"btn btn--s ml6"},"No")),void 0!==this.state.helpful&&o.a.createElement("div",null,o.a.createElement("div",{className:"inline-block bg-green color-white round-full w18 h18 align-middle mr3 mb3"},o.a.createElement(f.a,{name:"check"}))," ","Thanks for your feedback."),void 0!==this.state.helpful&&void 0===this.state.feedbackSent&&o.a.createElement("div",{className:"mt12"},o.a.createElement("div",{className:"mb6"},"If you have more specific feedback",!1===this.state.helpful&&" on how we can improve this ".concat(this.props.type),", you can provide it below (optional):"),o.a.createElement("div",{className:"relative"},o.a.createElement(i.a,{id:this.createId("text"),themeControlWrapper:"bg-white mb6",onChange:this.handleText,value:this.state.feedback}),o.a.createElement(L,{createId:this.createId,feedbackOverLimit:n,feedbackLength:t})),o.a.createElement("div",{className:"mb12"},o.a.createElement("button",{id:this.createId("submit"),disabled:void 0===this.state.feedback||this.state.feedback.length<3||n,className:"btn btn--s mb6 mr12 inline-block",onClick:this.handleSubmitFeedback},"Send feedback"),n&&o.a.createElement(M,{createId:this.createId,feedbackLimit:1e3})),o.a.createElement("div",{className:"txt-s txt-em"},"This form is for documentation feedback. If you have a technical question about how to use a Mapbox product,"," ",o.a.createElement("a",{href:"https://support.mapbox.com/hc/en-us",className:"link"},"contact Support"),"."))))}}]),n}(o.a.Component),L=function(e){E(n,e);var t=P(n);function n(){return w(this,n),t.apply(this,arguments)}return k(n,[{key:"render",value:function(){return o.a.createElement("div",{id:this.props.createId("counter"),className:b()("absolute bottom right mb6 mr18 txt-mono bg-lighten75 px3 txt-s",{"color-red":this.props.feedbackOverLimit})},this.props.feedbackLength)}}]),n}(o.a.Component),M=function(e){E(n,e);var t=P(n);function n(){return w(this,n),t.apply(this,arguments)}return k(n,[{key:"render",value:function(){return o.a.createElement("span",{id:this.props.createId("overlimit"),className:"color-red txt-s bg-red-faint round inline-block py3 px12"},o.a.createElement(f.a,{name:"alert",inline:!0})," Your message is over the"," ",this.props.feedbackLimit," character limit.")}}]),n}(o.a.Component);D.defaultProps={type:"page",feedbackSentryDsn:"https://eccc8b561b9a461990309b01d33d54e3@sentry.io/1848287"};t.a=D},C1e6:function(e,t,n){"use strict";function r(){return"undefined"!=typeof window?/(^|\S+\.)mapbox\.com/.test(window.location.host)?"production":"staging":void 0}n.d(t,"a",(function(){return r}))},C5U3:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return j}));var r=n("q1tI"),o=n.n(r),a=(n("17x9"),n("6RjT"));function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function s(e,t){return(s=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function f(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=d(e);if(t){var o=d(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return l(this,n)}}function l(e,t){return!t||"object"!==i(t)&&"function"!=typeof t?p(e):t}function p(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function d(e){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function b(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var h=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&s(e,t)}(l,e);var t,n,r,i=f(l);function l(){var e;c(this,l);for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return b(p(e=i.call.apply(i,[this].concat(n))),"renderFeedback",(function(){var t=e.props,n=t.frontMatter,r=t.location,i=t.constants;return o.a.createElement("div",{className:"mt18"},o.a.createElement(a.a,{site:i.SITE,type:"section on ".concat(n.title),section:n.title,location:r,webhook:i.FORWARD_EVENT_WEBHOOK}))})),e}return t=l,(n=[{key:"render",value:function(){var e=this.props,t=e.frontMatter,n=e.children;return o.a.createElement(o.a.Fragment,null,n,t.hideFeedback?" ":this.renderFeedback())}}])&&u(t.prototype,n),r&&u(t,r),l}(o.a.Component),y=n("5LOC");function m(e){return(m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function v(){return(v=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function g(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function O(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function w(e,t){return(w=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function S(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=E(e);if(t){var o=E(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return k(this,n)}}function k(e,t){return!t||"object"!==m(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function E(e){return(E=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var j=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&w(e,t)}(i,e);var t,n,r,a=S(i);function i(){return g(this,i),a.apply(this,arguments)}return t=i,(n=[{key:"render",value:function(){var e=this.props.children;return o.a.createElement(h,v({},this.props,{constants:y}),e)}}])&&O(t.prototype,n),r&&O(t,r),i}(o.a.Component)},RShX:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(n("q1tI")),o=(n("yr+R"),n("cQZ0"),a(n("C5U3")));function a(e){return e&&e.__esModule?e:{default:e}}function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function u(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function f(e,t){return(f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function l(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=d(e);if(t){var o=d(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return p(this,n)}}function p(e,t){return!t||"object"!==i(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function d(e){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var b={title:"Tag debugger",description:"Limitations to the split page pattern.",order:4,splitPage:!0,tag:"beta",hideFeedback:!0,products:["Mapbox fundamentals"],contentType:"guide",headings:[{text:"Tag debugger",slug:"tag-debugger",level:2}]},h=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&f(e,t)}(p,e);var t,n,a,i=l(p);function p(){return u(this,p),i.apply(this,arguments)}return t=p,(n=[{key:"render",value:function(){var e=this.props;return r.default.createElement(o.default,c({},e,{frontMatter:b}),r.default.createElement("div",{className:"section section-h2 "},r.default.createElement("h2",{id:"tag-debugger"},r.default.createElement("a",{href:"#tag-debugger",className:"unprose color-blue-on-hover"},"Tag debugger")),r.default.createElement("div",{className:"body h3-section-list "},r.default.createElement("div",{className:"section section-h3"},r.default.createElement("div",{className:"body"},r.default.createElement("p",null,"This section makes sure the ",r.default.createElement("code",null,"tag: beta")," frontmatter item works. The beta tag should appear next to the heading in ",r.default.createElement("code",null,"NavigationAccordion"),"."))))))}}])&&s(t.prototype,n),a&&s(t,a),p}(r.default.PureComponent);t.default=h},"Sy5+":function(e,t,n){var r=n("RShX");r=r.default||r,e.exports={component:r,props:{frontMatter:{title:"Tag debugger",description:"Limitations to the split page pattern.",order:4,splitPage:!0,tag:"beta",hideFeedback:!0,products:["Mapbox fundamentals"],contentType:"guide"}}}}}]);