function e(e){return e&&"object"==typeof e&&"default"in e?e.default:e}var t=require("react"),n=e(t),i=e(require("lodash.debounce"));function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function u(e,t,n){return t&&o(e.prototype,t),n&&o(e,n),e}function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function l(e){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function f(e,t){return!t||"object"!=typeof t&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}var h=function(){return window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight},s=function(){return window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth},d=function(e){function n(e){var t;return r(this,n),(t=f(this,l(n).call(this,e))).displayName="ResizeListener",t.state={height:h(),width:s()},t.onResize=i(function(){t.setState({height:h(),width:s()})}),t}return a(n,t.PureComponent),u(n,[{key:"componentDidMount",value:function(){window.addEventListener("resize",this.onResize,!1)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.onResize,!1)}},{key:"render",value:function(){var e=this.state;return(0,this.props.children)({width:e.width,height:e.height})}}]),n}();c(d,"defaultProps",{time:100});var p=function(e){function i(){return r(this,i),f(this,l(i).apply(this,arguments))}return a(i,t.PureComponent),u(i,[{key:"render",value:function(){var e=this.props,t=e.maxWidth,i=e.minWidth,r=e.maxHeight,o=e.minHeight,u=e.children;return n.createElement(d,null,function(e){var n=e.width,c=e.height;return n>=i&&n<=t&&c>=o&&c<=r?u:null})}}]),i}();c(p,"defaultProps",{maxWidth:9999,minWidth:0,maxHeight:9999,minHeight:0}),exports.Breakpoint=p,exports.default=d;
