var Util=function($){function n(n){return{}.toString.call(n).match(/\s([a-zA-Z]+)/)[1].toLowerCase()}function t(n){return(n[0]||n).nodeType}function e(){return{bindType:a.end,delegateType:a.end,handle:function n(t){if($(t.target).is(this))return t.handleObj.handler.apply(this,arguments)}}}function i(){if(window.QUnit)return!1;var n=document.createElement("bootstrap");for(var t in s)if(void 0!==n.style[t])return{end:s[t]};return!1}function r(n){var t=this,e=!1;return $(this).one(d.TRANSITION_END,function(){e=!0}),setTimeout(function(){e||d.triggerTransitionEnd(t)},n),this}function o(){a=i(),$.fn.emulateTransitionEnd=r,d.supportsTransitionEnd()&&($.event.special[d.TRANSITION_END]=e())}var a=!1,u=1e6,s={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"},d={TRANSITION_END:"bsTransitionEnd",getUID:function n(t){do t+=~~(Math.random()*u);while(document.getElementById(t));return t},getSelectorFromElement:function n(t){var e=t.getAttribute("data-target");return e||(e=t.getAttribute("href")||"",e=/^#[a-z]/i.test(e)?e:null),e},reflow:function n(t){new Function("bs","return bs")(t.offsetHeight)},triggerTransitionEnd:function n(t){$(t).trigger(a.end)},supportsTransitionEnd:function n(){return Boolean(a)},typeCheckConfig:function e(i,r,o){for(var a in o)if(o.hasOwnProperty(a)){var u=o[a],s=r[a],d=void 0;if(d=s&&t(s)?"element":n(s),!new RegExp(u).test(d))throw new Error(i.toUpperCase()+": "+('Option "'+a+'" provided type "'+d+'" ')+('but expected type "'+u+'".'))}}};return o(),d}(jQuery);