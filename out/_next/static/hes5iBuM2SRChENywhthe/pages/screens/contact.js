(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{309:function(e,t,n){__NEXT_REGISTER_PAGE("/screens/contact",function(){return e.exports=n(73),{page:e.exports.default}})},45:function(e){e.exports=[{icon:"bxl-linkedin",link:"https://linkedin.com/fatih-telis"},{icon:"bxl-twitter",link:"https://twitter.com/fatihtelis"},{icon:"bxl-github",link:"https://github.com/fatihtelis"},{icon:"bx-envelope",link:"mailto:fatihtelis@fatihtelis.com"}]},73:function(e,t,n){"use strict";n.r(t);var i,c=n(0),a=n.n(c),o=n(4),r=n(2),l=n(26),s=n(45),u=n(3),f=Object(o.default)(r.Flex).attrs({as:"section"}).withConfig({displayName:"contact__Outer",componentId:"sc-1psjct0-0"})(["",";opacity:",";pointer-events:",";transition:",";color:white;.screen{",";padding:40px 0;h2{font-weight:700;margin-bottom:15px;width:100%;text-align:center;}a{position:relative;top:40px;opacity:0;font-size:36px;color:white;margin:0 10px;}}"],Object(u.d)(),function(e){return e.active?"1":"0"},function(e){return e.active?"visible":"none"},function(e){return e.active?"1s 0.4s":"0.1s"},u.c);t.default=function(e){var t=e.active,n=Array.from({length:s.length},function(){return Object(c.useRef)(null)});return Object(c.useEffect)(function(){i=new l.c({paused:!0}).staggerTo(n.map(function(e){return e.current}),1,{top:0,opacity:1,ease:l.a.easeOut,delay:.6},.25)},[]),Object(c.useEffect)(function(){t?i.play().timeScale(1):i.reverse().timeScale(10)},[t]),a.a.createElement(f,{active:t},a.a.createElement(r.Flex,{className:"screen",flexDirection:"column",alignItems:"center"},a.a.createElement("h2",null,"You can contact with me from..."),a.a.createElement(r.Flex,{justifyContent:"center",alignItems:"center"},s.map(function(e,t){return a.a.createElement("a",{ref:n[t],href:e.link,key:e.link,target:"_blank",rel:"noopener noreferrer"},a.a.createElement("i",{className:"bx ".concat(e.icon)}))}))))}}},[[309,1,0]]]);