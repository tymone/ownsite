(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,function(e,a,t){e.exports=t.p+"static/media/html_logo.cd03aadb.png"},function(e,a,t){e.exports=t.p+"static/media/css_logo.ed7ebdd8.png"},function(e,a,t){e.exports=t.p+"static/media/js_logo.88ed1acb.png"},function(e,a,t){e.exports=t.p+"static/media/react_logo.82a318cc.png"},function(e,a,t){e.exports=t.p+"static/media/google_logo.e6e29a2d.png"},function(e,a,t){e.exports=t.p+"static/media/printscreen.bb6df76c.png"},function(e,a,t){e.exports=t.p+"static/media/bjj.b7548d37.jpg"},function(e,a,t){e.exports=t.p+"static/media/swimming.8820c88f.jpg"},function(e,a,t){e.exports=t.p+"static/media/running.d039d58a.jpg"},function(e,a,t){e.exports=t.p+"static/media/mountain.7ae7622a.jpg"},function(e,a,t){e.exports=t(31)},,,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),l=t(8),r=t.n(l),i=(t(25),t(2)),o=t(3),s=t(5),m=t(4),u=t(6),p=(t(26),t(27),function(){return c.a.createElement("header",null,c.a.createElement("h1",null,"Tymoteusz Hryniewiecki"))}),f=(t(28),t(1)),d=t.n(f),h=function(e){function a(){var e,t;Object(i.a)(this,a);for(var n=arguments.length,c=new Array(n),l=0;l<n;l++)c[l]=arguments[l];return(t=Object(s.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(c)))).navbarFunc=function(){d()(".fa-times, nav, ul, li").toggleClass("active")},t.backgroundScroll=function(){d()(document).on("scroll",function(){var e=d()(document).scrollTop(),a=d()("header").height(),t=d()("nav");e>a-300&&t.addClass("blackBgc"),e<a-300&&t.removeClass("blackBgc")})},t.scrollOnSection1=function(){d()("body, html").animate({scrollTop:d()(".wrap").offset().top}),d()(".fa-times, nav, ul, li").removeClass("active")},t.scrollOnSection2=function(){d()("body, html").animate({scrollTop:d()(".project").offset().top}),d()(".fa-times, nav, ul, li").removeClass("active")},t.scrollOnSection3=function(){d()("body, html").animate({scrollTop:d()(".about").offset().top}),d()(".fa-times, nav, ul, li").removeClass("active")},t.scrollOnSection4=function(){d()("body, html").animate({scrollTop:d()(".contact").offset().top}),d()(".fa-times, nav, ul, li").removeClass("active")},t}return Object(u.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){return this.backgroundScroll(),c.a.createElement("nav",null,c.a.createElement("i",{className:"fas fa-times",onClick:this.navbarFunc}),c.a.createElement("ul",null,c.a.createElement("li",{onClick:this.scrollOnSection1},c.a.createElement("i",{className:"fas fa-home"}),"Start"),c.a.createElement("li",{onClick:this.scrollOnSection2},c.a.createElement("i",{className:"fas fa-project-diagram"}),"Projekty"),c.a.createElement("li",{onClick:this.scrollOnSection3},c.a.createElement("i",{className:"fas fa-user-tie"})," O mnie"),c.a.createElement("li",{onClick:this.scrollOnSection4},c.a.createElement("i",{className:"fas fa-address-card"}),"Kontakt")))}}]),a}(c.a.Component),E=(t(29),t(9)),g=t.n(E),w=t(10),k=t.n(w),j=t(11),y=t.n(j),b=t(12),v=t.n(b),z=t(13),O=t.n(z),N=t(14),C=t.n(N),S=t(15),x=t.n(S),T=t(16),L=t.n(T),R=t(17),_=t.n(R),B=t(18),A=t.n(B),J=function(e){function a(){var e,t;Object(i.a)(this,a);for(var n=arguments.length,c=new Array(n),l=0;l<n;l++)c[l]=arguments[l];return(t=Object(s.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(c)))).scroll=function(){d()(document).on("scroll",function(){var e=d()(this).scrollTop(),a=d()(".wrap .wrapLeft img").offset().top,t=d()(".wrap .wrapRight img").offset().top;e>a/2&&d()(".wrap .wrapLeft img").addClass("scroll"),e>t-500&&d()(".wrap .wrapRight img").addClass("scroll"),e<100&&d()(".wrap .wrapLeft img, .wrap .wrapRight img").removeClass("scroll")})},t}return Object(u.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){return this.scroll(),c.a.createElement("main",null,c.a.createElement("section",{className:"wrap"},c.a.createElement("h2",null,"Witam na mojej stronie"),c.a.createElement("div",{className:"wrapLeft"},c.a.createElement("p",null," ","Strona na kt\xf3rej obecnie si\u0119 znajdujesz jest w pe\u0142ni responsywna na wszystkich urz\u0105dzeniach, od ma\u0142ych ekran\xf3w smartfon\xf3w, po wysokiej rozdzielczo\u015bci ekrany monitor\xf3w komputerowych. Stworzona z wykorzystaniem technologii takich jak:"),c.a.createElement("img",{src:g.a,alt:"html"}),c.a.createElement("img",{src:k.a,alt:"css"}),c.a.createElement("img",{src:y.a,alt:"js"}),c.a.createElement("img",{src:v.a,alt:"react"})),c.a.createElement("div",{className:"wrapRight"},c.a.createElement("p",null,"Nowoczesna i zgodna z aktualnymi standardami. Jest zoptymalizowana pod k\u0105tem wyszukiwarek internetowych."),c.a.createElement("img",{src:O.a,alt:"html"}))),c.a.createElement("section",{className:"project clearfix"},c.a.createElement("h2",null,"Moje projekty"),c.a.createElement("h3",null,"Portal Ratownika"),c.a.createElement("p",null,"Aktualnie zajmuj\u0119 si\u0119 projektem dla mojej obecnej pracy, p\xf3ki co jest to projekt 'do szuflady' w celu rozwijania umiej\u0119tno\u015bci programistycznych, gdzie wykorzystuj\u0119 technologie takie jak: HTML5, CSS3(Sass), Java Script(ES6, React), Python(Flask), MongoDB.(",c.a.createElement("strong",null,"p\xf3ki co link do repozytorium."),")"," "),c.a.createElement("a",{href:"https://github.com/tymone/rescuer_portal"},c.a.createElement("img",{src:C.a,alt:"printscreen"}))),c.a.createElement("section",{className:"about"},c.a.createElement("h2",null,"O mnie"),c.a.createElement("p",null,"Na codzie\u0144 poza prac\u0105 na etacie jestem pasjonatem programowania oraz aktywnego trybu \u017cycia."),c.a.createElement("div",{className:"pictures"},c.a.createElement("div",{className:"item"},c.a.createElement("img",{src:x.a,alt:"brazilian jiu-jitsu"}),c.a.createElement("p",null,"Lubi\u0119 si\u0119 kula\u0107...")),c.a.createElement("div",{className:"item"},c.a.createElement("img",{src:L.a,alt:"swimming"}),c.a.createElement("p",null,"...lubi\u0119 te\u017c p\u0142ywa\u0107...")),c.a.createElement("div",{className:"item"},c.a.createElement("img",{src:_.a,alt:"running"}),c.a.createElement("p",null,"...biega\u0107 te\u017c lubi\u0119...")),c.a.createElement("div",{className:"item"},c.a.createElement("img",{src:A.a,alt:"mountain walking"}),c.a.createElement("p",null,"...w\u0119drowa\u0107 po g\xf3rach te\u017c, nawet bardzo lubi\u0119.")))),c.a.createElement("section",{className:"contact"},c.a.createElement("h2",null,"Kontakt"),c.a.createElement("p",null,c.a.createElement("a",{href:"tel:509-767-794"},c.a.createElement("i",{className:"fas fa-mobile-alt"})," 509-767-794")),c.a.createElement("p",null,c.a.createElement("a",{href:"mailto:tymoteusz.hryniewiecki@gmail.com"},c.a.createElement("i",{className:"far fa-envelope"})," tymoteusz.hryniewiecki@gmail.com")),c.a.createElement("p",null,c.a.createElement("a",{href:"https://m.me/tymoteusz.hryniewiecki"},c.a.createElement("i",{className:"fab fa-facebook-square"})," facebook")),c.a.createElement("p",null,c.a.createElement("a",{href:"https://www.linkedin.com/in/tymoteusz-hryniewiecki/"},c.a.createElement("i",{className:"fab fa-linkedin"})," linkedin"))))}}]),a}(c.a.Component),F=(t(30),function(){return c.a.createElement("footer",{className:"footer"},c.a.createElement("p",null,"\xa9 2019 Tymoteusz Hryniewiecki "))}),H=function(e){function a(){return Object(i.a)(this,a),Object(s.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){return c.a.createElement("div",{className:"App"},c.a.createElement(p,null),c.a.createElement(h,null),c.a.createElement(J,null),c.a.createElement(F,null))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(c.a.createElement(H,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[19,1,2]]]);
//# sourceMappingURL=main.d3cf7f40.chunk.js.map