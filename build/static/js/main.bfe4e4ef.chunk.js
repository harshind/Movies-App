(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{10:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(3),c=a.n(o),i=(a(9),a(1)),l=function(e){var t,a=e.title,n=e.overview,o=e.poster_path,c=e.vote_average;return r.a.createElement("div",{className:"movie"},r.a.createElement("img",{src:"https://image.tmdb.org/t/p/w1280"+o,alt:a}),r.a.createElement("div",{className:"movie-info"},r.a.createElement("h3",null,a),r.a.createElement("span",{className:"tag ".concat((t=c,t>=8?"green":t>6?"orange":"red"))},c)),r.a.createElement("div",{className:"movie-over"},r.a.createElement("h3",null,"overview:"),r.a.createElement("p",null,n)))};var s=function(){var e=Object(n.useState)([]),t=Object(i.a)(e,2),a=t[0],o=t[1],c=Object(n.useState)(""),s=Object(i.a)(c,2),m=s[0],u=s[1],v=function(e){fetch(e).then((function(e){return e.json()})).then((function(e){console.log(e),o(e.results)}))};return Object(n.useEffect)((function(){v("https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=df2a18503eedd23f8004851927fc2b65&page=1")}),[]),r.a.createElement(r.a.Fragment,null,r.a.createElement("header",null,r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),m&&(v("https://api.themoviedb.org/3/search/movie?&api_key=df2a18503eedd23f8004851927fc2b65&query="+m),u(""))}},r.a.createElement("input",{type:"search",placeholder:"Search...",className:"search",value:m,onChange:function(e){u(e.target.value)}}))),r.a.createElement("div",{className:"movie-container"},a.length>0&&a.map((function(e){return r.a.createElement(l,Object.assign({key:e.id},e))}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(s,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},4:function(e,t,a){e.exports=a(10)},9:function(e,t,a){}},[[4,1,2]]]);
//# sourceMappingURL=main.bfe4e4ef.chunk.js.map