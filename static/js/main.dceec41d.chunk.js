(this.webpackJsonpmovie_app_twice=this.webpackJsonpmovie_app_twice||[]).push([[0],{32:function(e,t,a){e.exports=a(65)},57:function(e,t,a){},61:function(e,t,a){},62:function(e,t,a){},63:function(e,t,a){},64:function(e,t,a){},65:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(28),i=a.n(s),o=a(8),c=a(1),m=a(15),l=a.n(m),u=a(29),p=a(10),d=a(11),v=a(13),y=a(12),E=a(30),_=a.n(E),f=a(4),g=a.n(f);a(57);function h(e){var t=e.id,a=e.title,n=e.year,s=e.genres,i=e.summary,c=e.poster;return r.a.createElement("div",{className:"movie"},r.a.createElement(o.b,{to:{pathname:"/movie/".concat(t),state:{year:n,title:a,genres:s,summary:i,poster:c}}},r.a.createElement("img",{src:c,alt:a,title:a}),r.a.createElement("div",{className:"movie__data"},r.a.createElement("h3",{className:"movie__title"},a),r.a.createElement("h5",{className:"movie__year"},n),r.a.createElement("p",{className:"movie__summary"},i.slice(0,140),"..."))))}h.prototypes={id:g.a.number.isRequired,title:g.a.string.isRequired,year:g.a.number.isRequired,summary:g.a.string.isRequired,poster:g.a.string.isRequired,genres:g.a.arrayOf(g.a.string).isRequired};var b=h,N=(a(61),function(e){Object(v.a)(a,e);var t=Object(y.a)(a);function a(){var e;Object(p.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={isLoading:!0,movies:[]},e.getMovies=Object(u.a)(l.a.mark((function t(){var a,n;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,_.a.get("https://yts-proxy.nomadcoders1.now.sh/list_movies.json");case 2:a=t.sent,n=a.data.data.movies,e.setState({movies:n,isLoading:!1});case 5:case"end":return t.stop()}}),t)}))),e}return Object(d.a)(a,[{key:"componentDidMount",value:function(){this.getMovies()}},{key:"render",value:function(){var e=this.state,t=e.isLoading,a=e.movies;return r.a.createElement("section",{className:"container"},t?r.a.createElement("div",{className:"loader"},r.a.createElement("span",{className:"loader__text"},"Loading.....")):r.a.createElement("div",{className:"movies"},a.map((function(e){return r.a.createElement(b,{key:e.id,id:e.id,title:e.title,year:e.year,genres:e.genres,summary:e.summary,poster:e.medium_cover_image})}))))}}]),a}(r.a.Component));a(62);var j=function(){return r.a.createElement("span",{className:"noting"},"About Me?\ud83d\ude0a\ud83d\ude0a")},O=(a(63),function(e){Object(v.a)(a,e);var t=Object(y.a)(a);function a(){return Object(p.a)(this,a),t.apply(this,arguments)}return Object(d.a)(a,[{key:"componentDidMount",value:function(){var e=this.props,t=e.location,a=e.history;void 0===t.state&&a.push("/")}},{key:"render",value:function(){var e=this.props.location;return console.log(this.props),e.state?r.a.createElement("div",{className:"detail__box"},r.a.createElement("img",{src:e.state.poster,className:"detail__poster"}),r.a.createElement("span",{className:"detail__year"},e.state.year),r.a.createElement("span",{className:"detail__title"},e.state.title),r.a.createElement("span",{className:"detail__genres"},e.state.genres),r.a.createElement("p",{className:"detail__summary"},e.state.summary)):null}}]),a}(r.a.Component));a(64);var k=function(){return r.a.createElement("div",{className:"nav"},r.a.createElement(o.b,{to:"/"},"Home"),r.a.createElement(o.b,{to:"/about"},"About"))};var w=function(){return r.a.createElement(o.a,null,r.a.createElement(k,null),r.a.createElement(c.a,{path:"/",exact:!0,component:N}),r.a.createElement(c.a,{path:"/about",component:j}),r.a.createElement(c.a,{path:"/movie/:id",component:O}))};i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(w,null)),document.getElementById("root"))}},[[32,1,2]]]);
//# sourceMappingURL=main.dceec41d.chunk.js.map