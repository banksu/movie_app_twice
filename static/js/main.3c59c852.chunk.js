(this.webpackJsonpmovie_app_twice=this.webpackJsonpmovie_app_twice||[]).push([[0],{20:function(e,a,t){e.exports=t(45)},45:function(e,a,t){"use strict";t.r(a);var r=t(0),n=t.n(r),s=t(13),i=t.n(s),m=t(3),c=t.n(m),o=t(14),l=t(15),u=t(16),v=t(19),d=t(18),p=t(17),g=t.n(p),_=t(2),y=t.n(_);function E(e){var a=e.title,t=e.year,r=e.rating,s=e.genres,i=e.summary,m=e.poster;return n.a.createElement("div",{className:"movies_movie"},n.a.createElement("img",{src:m,alt:a,title:a}),n.a.createElement("div",{className:"movie__data"},n.a.createElement("h3",{className:"movie__title"},a),n.a.createElement("h5",{className:"movie__year"},t),n.a.createElement("h5",{className:"movie__rating"},r),n.a.createElement("ul",{className:"movie__genres"},s.map((function(e,a){return n.a.createElement("li",{key:a,className:"genres__genre"},e)}))),n.a.createElement("p",{className:"movie__summary"},i)))}E.prototypes={id:y.a.number.isRequired,title:y.a.string.isRequired,year:y.a.number.isRequired,rating:y.a.number.isRequired,summary:y.a.string.isRequired,poster:y.a.string.isRequired,genres:y.a.arrayOf(y.a.string).isRequired};var f=E,h=function(e){Object(v.a)(t,e);var a=Object(d.a)(t);function t(){var e;Object(l.a)(this,t);for(var r=arguments.length,n=new Array(r),s=0;s<r;s++)n[s]=arguments[s];return(e=a.call.apply(a,[this].concat(n))).state={isLoading:!0,movies:[]},e.getMovies=Object(o.a)(c.a.mark((function a(){var t,r;return c.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,g.a.get("https://yts-proxy.nomadcoders1.now.sh/list_movies.json");case 2:t=a.sent,r=t.data.data.movies,e.setState({movies:r,isLoading:!1});case 5:case"end":return a.stop()}}),a)}))),e}return Object(u.a)(t,[{key:"componentDidMount",value:function(){this.getMovies()}},{key:"render",value:function(){var e=this.state,a=e.isLoading,t=e.movies;return n.a.createElement("div",{className:"container"},a?n.a.createElement("div",{className:"loader"},n.a.createElement("span",{className:"loader__text"},"Loading...")):n.a.createElement("div",{className:"movies"},t.map((function(e){return n.a.createElement(f,{key:e.id,title:e.title,year:e.year,rating:e.rating,genres:e.genres,summary:e.summary,poster:e.medium_cover_image})}))))}}]),t}(n.a.Component);i.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(h,null)),document.getElementById("root"))}},[[20,1,2]]]);
//# sourceMappingURL=main.3c59c852.chunk.js.map