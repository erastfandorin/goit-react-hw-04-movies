(this["webpackJsonpgoit-react-hw-04-movies"]=this["webpackJsonpgoit-react-hw-04-movies"]||[]).push([[3],{40:function(e,t,a){e.exports={movieButton:"MovieDetailsPage_movieButton__2OOJT",movieBox:"MovieDetailsPage_movieBox__2x4rj",descriptionMovie:"MovieDetailsPage_descriptionMovie__2oeoX",movieImg:"MovieDetailsPage_movieImg__2Mfsa",moreBox:"MovieDetailsPage_moreBox__2zrg6"}},47:function(e,t,a){"use strict";a.r(t);var n=a(15),o=a(16),r=a(18),i=a(17),l=a(19),c=a(0),s=a.n(c),m=a(10),u=a(7),v=a(40),p=Object(c.lazy)((function(){return a.e(0).then(a.bind(null,41))})),h=Object(c.lazy)((function(){return a.e(5).then(a.bind(null,44))})),g=function(e){function t(){var e;return Object(n.a)(this,t),(e=Object(r.a)(this,Object(i.a)(t).call(this))).toPercent=function(t){var a=10*t;e.setState({score:a})},e.goBack=function(){var t=e.props,a=t.location,n=t.history;a.state?n.push(a.state.from.pathname):n.push("/")},e.state={score:0},e}return Object(l.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this.props,t=e.movie,a=e.match,n=e.openMovie;t.id!==Number(a.params.movieId)&&n(a.params.movieId),this.toPercent(t.vote_average)}},{key:"render",value:function(){var e=this.props,t=e.movie,a=e.match,n=this.state.score;return s.a.createElement(s.a.Fragment,null,s.a.createElement("button",{className:v.movieButton,type:"button",onClick:this.goBack},"\u2190 Go back"),s.a.createElement("div",{className:v.movieBox},void 0===t.poster_path?s.a.createElement("div",null,"Loading..."):s.a.createElement("img",{src:"https://image.tmdb.org/t/p/w500".concat(t.poster_path),alt:t.original_title,className:v.movieImg}),s.a.createElement("div",{className:v.descriptionMovie},s.a.createElement("h1",null,t.original_title),s.a.createElement("p",null,"User score: ",n,"%"),s.a.createElement("strong",null,"Overview"),s.a.createElement("p",null,t.overview),s.a.createElement("strong",null,"Genres"),s.a.createElement("ul",null,t.genres&&t.genres.map((function(e){return s.a.createElement("li",{key:e.id},e.name)}))))),s.a.createElement("div",{className:v.moreBox},s.a.createElement("p",null,"Additional information"),s.a.createElement("ul",null,s.a.createElement("li",null,s.a.createElement(m.b,{to:"".concat(a.url,"/cast")},"Cast")),s.a.createElement("li",null,s.a.createElement(m.b,{to:"".concat(a.url,"/reviews")},"Reviews")))),s.a.createElement(c.Suspense,{fallback:s.a.createElement("div",null,"Loading...")},s.a.createElement(u.b,{path:"".concat(a.path,"/cast"),render:function(){return s.a.createElement(p,{movie:t})}}),s.a.createElement(u.b,{path:"".concat(a.path,"/reviews"),render:function(){return s.a.createElement(h,{movie:t})}})))}}]),t}(c.Component);t.default=g}}]);
//# sourceMappingURL=movies-details-page.50d74d43.chunk.js.map