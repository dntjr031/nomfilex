(this.webpackJsonpnomflix=this.webpackJsonpnomflix||[]).push([[0],{24:function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/noPosterSmall.ea2ad102.png"},73:function(e,t,n){"use strict";n.r(t);var r,a,i,c,o,s,l,u,d,p,j,b,h,g,x,O,m,v,f,y,_,w,k,S,T,R,M,U,z,C,I,N,P=n(1),F=n.n(P),D=n(38),V=n.n(D),A=n(12),B=n(13),L=n(15),q=n(14),J=n(19),E=n(5),G=n(10),H=n.n(G),K=n(17),Q=n(3),W=n(2),X=n(16),Y=n(0),Z=W.c.div(r||(r=Object(Q.a)(["\n    :not(:last-child) {\n        margin-bottom: 50px;\n    }\n"]))),$=W.c.span(a||(a=Object(Q.a)(["\n    font-size: 14px;\n    font-weight: 600;\n"]))),ee=W.c.div(i||(i=Object(Q.a)(["\n    margin-top: 25px;\n    display: grid;\n    grid-template-columns: repeat(auto-fill, 125px);\n    grid-gap: 25px;\n"]))),te=function(e){var t=e.title,n=e.children;return Object(Y.jsxs)(Z,{children:[Object(Y.jsx)($,{children:t}),Object(Y.jsx)(ee,{children:n})]})},ne=W.c.div(c||(c=Object(Q.a)(["\n    height: 100vh;\n    width: 100vw;\n    display: flex;\n    justify-content: center;\n    font-size: 28px;\n    margin-top: 20px;\n"]))),re=function(){return Object(Y.jsx)(ne,{children:Object(Y.jsx)("span",{role:"img","aria-label":"Loading",children:"\u23f0"})})},ae=W.c.div(o||(o=Object(Q.a)(["\n    width: 100vw;\n    display: flex;\n    justify-content: center;\n"]))),ie=W.c.span(s||(s=Object(Q.a)(["\n    color: ",";\n"])),(function(e){return e.color})),ce=function(e){var t=e.text,n=e.color;return Object(Y.jsx)(ae,{children:Object(Y.jsx)(ie,{color:n,children:t})})},oe=W.c.div(l||(l=Object(Q.a)(["\n    font-size: 12px;\n"]))),se=W.c.div(u||(u=Object(Q.a)(["\n    height: 180px;\n    background-size: cover;\n    border-radius: 4px;\n    background-position: center center;\n    background-image: url(",");\n    transition: opacity 0.2s linear;\n"])),(function(e){return e.bgUrl})),le=W.c.span(d||(d=Object(Q.a)(["\n    position: absolute;\n    bottom: 5px;\n    right: 5px;\n    opacity: 0;\n    transition: opacity 0.3s ease;\n"]))),ue=W.c.div(p||(p=Object(Q.a)(["\n    margin-bottom: 5px;\n    position: relative;\n    &:hover {\n        "," {\n            opacity: 0.3;\n        }\n        "," {\n            opacity: 1;\n        }\n    }\n"])),se,le),de=W.c.span(j||(j=Object(Q.a)(["\n    display: block;\n    margin-bottom: 3px;\n"]))),pe=W.c.span(b||(b=Object(Q.a)(["\n    font-size: 10px;\n    color: rgba(255, 255, 255, 0.5);\n"]))),je=function(e){var t=e.id,r=e.imageUrl,a=e.title,i=e.rating,c=e.year,o=e.isMovie,s=void 0!==o&&o;return Object(Y.jsx)(J.b,{to:s?"/movie/".concat(t):"/show/".concat(t),children:Object(Y.jsxs)(oe,{children:[Object(Y.jsxs)(ue,{children:[Object(Y.jsx)(se,{bgUrl:r?"https://image.tmdb.org/t/p/w300"+r:n(24).default}),Object(Y.jsxs)(le,{children:[Object(Y.jsx)("span",{role:"img","aria-label":"rating",children:"\u2b50\ufe0f"})," ",i,"/10"]})]}),Object(Y.jsx)(de,{children:a.length>14?"".concat(a.substring(0,13),"..."):a}),Object(Y.jsx)(pe,{children:c})]})})},be=W.c.div(h||(h=Object(Q.a)(["\n    padding: 20px;\n"]))),he=function(e){var t=e.nowPlaying,n=e.upcoming,r=e.popular,a=e.loading,i=e.error;return Object(Y.jsxs)(Y.Fragment,{children:[Object(Y.jsx)(X.a,{children:Object(Y.jsx)("title",{children:"Movies | Nomflix"})}),a?Object(Y.jsx)(re,{}):Object(Y.jsxs)(be,{children:[t&&t.length>0&&Object(Y.jsx)(te,{title:"Now Playing",children:t.map((function(e){return Object(Y.jsx)(je,{id:e.id,title:e.title,rating:e.vote_average,isMovie:!0,imageUrl:e.poster_path,year:e.release_date&&e.release_date.substring(0,4)},e.id)}))}),n&&n.length>0&&Object(Y.jsx)(te,{title:"Upcoming Movie",children:n.map((function(e){return Object(Y.jsx)(je,{id:e.id,title:e.title,rating:e.vote_average,isMovie:!0,imageUrl:e.poster_path,year:e.release_date&&e.release_date.substring(0,4)},e.id)}))}),r&&r.length>0&&Object(Y.jsx)(te,{title:"Popular Movie",children:r.map((function(e){return Object(Y.jsx)(je,{id:e.id,title:e.title,rating:e.vote_average,isMovie:!0,imageUrl:e.poster_path,year:e.release_date&&e.release_date.substring(0,4)},e.id)}))}),i&&Object(Y.jsx)(ce,{color:"#e74c3c",text:i})]})]})},ge=n(44),xe=n.n(ge).a.create({baseURL:"https://api.themoviedb.org/3",params:{api_key:"7fe392ebe17f3eee166b68fa255ffa6d",language:"en-US"}}),Oe=function(){return xe.get("/movie/now_playing")},me=function(){return xe.get("/movie/upcoming")},ve=function(){return xe.get("/movie/popular")},fe=function(e){return xe.get("/movie/".concat(e),{params:{append_to_response:"videos"}})},ye=function(e){return xe.get("/search/movie",{params:{query:encodeURIComponent(e)}})},_e=function(){return xe.get("/tv/top_rated")},we=function(){return xe.get("/tv/popular")},ke=function(){return xe.get("/tv/airing_today")},Se=function(e){return xe.get("/tv/".concat(e),{params:{append_to_response:"videos"}})},Te=function(e){return xe.get("/search/tv",{params:{query:encodeURIComponent(e)}})},Re=function(e){Object(L.a)(n,e);var t=Object(q.a)(n);function n(){var e;Object(A.a)(this,n);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return(e=t.call.apply(t,[this].concat(a))).state={nowPlaying:null,upcoming:null,popular:null,error:null,loading:!0},e}return Object(B.a)(n,[{key:"componentDidMount",value:function(){var e=Object(K.a)(H.a.mark((function e(){var t,n,r,a,i,c;return H.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Oe();case 3:return t=e.sent,n=t.data.results,e.next=7,me();case 7:return r=e.sent,a=r.data.results,e.next=11,ve();case 11:i=e.sent,c=i.data.results,this.setState({nowPlaying:n,upcoming:a,popular:c}),e.next=19;break;case 16:e.prev=16,e.t0=e.catch(0),this.setState({error:"Can't find Movies information"});case 19:return e.prev=19,this.setState({loading:!1}),e.finish(19);case 22:case"end":return e.stop()}}),e,this,[[0,16,19,22]])})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.nowPlaying,n=e.popular,r=e.upcoming,a=e.error,i=e.loading;return Object(Y.jsx)(he,{nowPlaying:t,upcoming:r,popular:n,error:a,loading:i})}}]),n}(F.a.Component),Me=W.c.div(g||(g=Object(Q.a)(["\n    padding: 20px;\n"]))),Ue=W.c.form(x||(x=Object(Q.a)(["\n    margin-bottom: 50px;\n"]))),ze=W.c.input(O||(O=Object(Q.a)(["\n    all: unset;\n    font-size: 28px;\n    width: 24rem;\n"]))),Ce=function(e){var t=e.movieResults,n=e.tvResults,r=e.searchTerm,a=e.loading,i=e.error,c=e.handleSubmit,o=e.updateTerm;return Object(Y.jsxs)(Me,{children:[Object(Y.jsx)(X.a,{children:Object(Y.jsx)("title",{children:"Search | Nomflix"})}),Object(Y.jsx)(Ue,{onSubmit:c,children:Object(Y.jsx)(ze,{placeholder:"Search Movies or TV Show...",value:r,onChange:o})}),a?Object(Y.jsx)(re,{}):Object(Y.jsxs)(Y.Fragment,{children:[t&&t.length>0&&Object(Y.jsx)(te,{title:"Movie Results",children:t.map((function(e){return Object(Y.jsx)(je,{id:e.id,title:e.title,rating:e.vote_average,isMovie:!0,imageUrl:e.poster_path,year:e.release_date&&e.release_date.substring(0,4)},e.id)}))}),n&&n.length>0&&Object(Y.jsx)(te,{title:"TV Results",children:n.map((function(e){return Object(Y.jsx)(je,{id:e.id,title:e.original_name,rating:e.vote_average,imageUrl:e.poster_path,year:e.first_air_date&&e.first_air_date.substring(0,4)},e.id)}))})]}),i&&Object(Y.jsx)(ce,{color:"#e74c3c",text:i}),n&&t&&0===n.length&&0===t.length&&Object(Y.jsx)(ce,{color:"#95a5a6",text:"Nothing found"})]})},Ie=function(e){Object(L.a)(n,e);var t=Object(q.a)(n);function n(){var e;Object(A.a)(this,n);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return(e=t.call.apply(t,[this].concat(a))).state={movieResults:null,tvResults:null,searchTerm:"",error:null,loading:!0},e.handleSubmit=function(t){t.preventDefault(),""!==e.state.searchTerm&&e.searchByTerm()},e.updateTerm=function(t){var n=t.target.value;e.setState({searchTerm:n})},e.searchByTerm=Object(K.a)(H.a.mark((function t(){var n,r,a,i,c;return H.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.setState({loading:!0}),n=e.state.searchTerm,t.prev=2,t.next=5,ye(n);case 5:return r=t.sent,a=r.data.results,t.next=9,Te(n);case 9:i=t.sent,c=i.data.results,e.setState({loading:!0,movieResults:a,tvResults:c}),t.next=18;break;case 14:t.prev=14,t.t0=t.catch(2),console.log("error"),e.setState({error:"Can't find result"});case 18:return t.prev=18,e.setState({loading:!1}),t.finish(18);case 21:case"end":return t.stop()}}),t,null,[[2,14,18,21]])}))),e}return Object(B.a)(n,[{key:"componentDidMount",value:function(){this.setState({loading:!1})}},{key:"render",value:function(){var e=this.state,t=e.movieResults,n=e.tvResults,r=e.searchTerm,a=e.loading,i=e.error;return Object(Y.jsx)(Ce,{movieResults:t,tvResults:n,searchTerm:r,loading:a,error:i,handleSubmit:this.handleSubmit,updateTerm:this.updateTerm})}}]),n}(F.a.Component),Ne=W.c.div(m||(m=Object(Q.a)(["\n    padding: 20px;\n"]))),Pe=function(e){var t=e.topRated,n=e.popular,r=e.airingToday,a=e.loading,i=e.error;return Object(Y.jsxs)(Y.Fragment,{children:[Object(Y.jsx)(X.a,{children:Object(Y.jsx)("title",{children:"TV | Nomflix"})}),a?null:Object(Y.jsxs)(Ne,{children:[t&&t.length&&Object(Y.jsx)(te,{title:"Top Rated Shows",children:t.map((function(e){return Object(Y.jsx)(je,{id:e.id,title:e.original_name,rating:e.vote_average,imageUrl:e.poster_path,year:e.first_air_date&&e.first_air_date.substring(0,4)},e.id)}))}),n&&n.length&&Object(Y.jsx)(te,{title:"Popular Shows",children:n.map((function(e){return Object(Y.jsx)(je,{id:e.id,title:e.original_name,rating:e.vote_average,imageUrl:e.poster_path,year:e.first_air_date&&e.first_air_date.substring(0,4)},e.id)}))}),r&&r.length&&Object(Y.jsx)(te,{title:"Airing Today",children:r.map((function(e){return Object(Y.jsx)(je,{id:e.id,title:e.original_name,rating:e.vote_average,imageUrl:e.poster_path,year:e.first_air_date&&e.first_air_date.substring(0,4)},e.id)}))}),i&&Object(Y.jsx)(ce,{color:"#e74c3c",text:i})]})]})},Fe=function(e){Object(L.a)(n,e);var t=Object(q.a)(n);function n(){var e;Object(A.a)(this,n);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return(e=t.call.apply(t,[this].concat(a))).state={topRated:null,popular:null,airingToday:null,error:null,loading:!0},e}return Object(B.a)(n,[{key:"componentDidMount",value:function(){var e=Object(K.a)(H.a.mark((function e(){var t,n,r,a,i,c;return H.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,_e();case 3:return t=e.sent,n=t.data.results,e.next=7,we();case 7:return r=e.sent,a=r.data.results,e.next=11,ke();case 11:i=e.sent,c=i.data.results,this.setState({topRated:n,popular:a,airingToday:c}),e.next=19;break;case 16:e.prev=16,e.t0=e.catch(0),this.setState({error:"Can't find TV information."});case 19:return e.prev=19,this.setState({loading:!1}),e.finish(19);case 22:case"end":return e.stop()}}),e,this,[[0,16,19,22]])})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.popular,n=e.airingToday,r=e.topRated,a=e.loading,i=e.error;return Object(Y.jsx)(Pe,{topRated:r,popular:t,airingToday:n,loading:a,error:i})}}]),n}(F.a.Component),De=W.c.header(v||(v=Object(Q.a)(["\n    color: white;\n    position: fixed;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 50px;\n    display: flex;\n    align-items: center;\n    background-color: rgba(20, 20, 20, 0.8);\n    z-index: 10;\n    box-shadow: 0 1px 5px 2px rgba(0, 0, 0, 0.8);\n"]))),Ve=W.c.ul(f||(f=Object(Q.a)(["\n    display: flex;\n"]))),Ae=W.c.li(y||(y=Object(Q.a)(["\n    width: 80px;\n    height: 50px;\n    border-bottom: 3px solid ",";\n    transition: border-bottom 0.5s ease-in-out;\n"])),(function(e){return e.current?"#3498db":"transparent"})),Be=Object(W.c)(J.b)(_||(_=Object(Q.a)(["\n    height: 50px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n"]))),Le=Object(E.g)((function(e){var t=e.location.pathname;return Object(Y.jsx)(De,{children:Object(Y.jsxs)(Ve,{children:[Object(Y.jsx)(Ae,{current:"/"===t,children:Object(Y.jsx)(Be,{to:"/",children:"Movies"})}),Object(Y.jsx)(Ae,{current:"/tv"===t,children:Object(Y.jsx)(Be,{to:"/tv",children:"TV"})}),Object(Y.jsx)(Ae,{current:"/search"===t,children:Object(Y.jsx)(Be,{to:"/search",children:"Search"})})]})})})),qe="https://image.tmdb.org/t/p/original",Je=W.c.div(w||(w=Object(Q.a)(["\n    height: calc(100vh - 50px);\n    width: 100%;\n    position: relative;\n    padding: 50px;\n"]))),Ee=W.c.div(k||(k=Object(Q.a)(["\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    background-image: url(",");\n    background-size: cover;\n    background-position: center center;\n    filter: blur(3px);\n    opacity: 0.5;\n    z-index: 0;\n"])),(function(e){return e.bgImage})),Ge=W.c.div(S||(S=Object(Q.a)(["\n    display: flex;\n    width: 100%;\n    height: 100%;\n    position: relative;\n    z-index: 1;\n"]))),He=W.c.div(T||(T=Object(Q.a)(["\n    width: 30%;\n    background-image: url(",");\n    background-size: cover;\n    background-position: center center;\n    filter: blur(0);\n    height: 100%;\n    border-radius: 5px;\n"])),(function(e){return e.bgImage})),Ke=W.c.div(R||(R=Object(Q.a)(["\n    width: 70%;\n    margin-left: 10px;\n"]))),Qe=W.c.h3(M||(M=Object(Q.a)(["\n    font-size: 32px;\n"]))),We=W.c.div(U||(U=Object(Q.a)(["\n    margin: 20px 0;\n"]))),Xe=W.c.span(z||(z=Object(Q.a)([""]))),Ye=W.c.span(C||(C=Object(Q.a)(["\n    margin: 0 10px;\n"]))),Ze=W.c.p(I||(I=Object(Q.a)(["\n    font-size: 12px;\n    opacity: 0.7;\n    line-height: 1.5;\n    width: 50%;\n"]))),$e=function(e){var t=e.result,r=e.loading,a=e.error;return r?Object(Y.jsxs)(Y.Fragment,{children:[Object(Y.jsx)(X.a,{children:Object(Y.jsx)("title",{children:"Loading | Nomflix"})}),Object(Y.jsx)(re,{})]}):Object(Y.jsxs)(Y.Fragment,{children:[Object(Y.jsx)(X.a,{children:Object(Y.jsxs)("title",{children:[(null===t||void 0===t?void 0:t.original_title)||(null===t||void 0===t?void 0:t.original_name)||""," | Netflix"]})}),t&&Object(Y.jsxs)(Je,{children:[Object(Y.jsx)(Ee,{bgImage:t&&t.backdrop_path?"".concat(qe).concat(t.backdrop_path):n(24).default}),Object(Y.jsxs)(Ge,{children:[Object(Y.jsx)(He,{bgImage:t&&t.backdrop_path?"".concat(qe).concat(t.poster_path):n(24).default}),Object(Y.jsxs)(Ke,{children:[Object(Y.jsx)(Qe,{children:t.original_title?t.original_title:t.original_name}),Object(Y.jsxs)(We,{children:[Object(Y.jsx)(Xe,{children:t.release_date?t.release_date.substring(0,4):t.first_air_date.substring(0,4)}),Object(Y.jsx)(Ye,{children:"\u2022"}),Object(Y.jsxs)(Xe,{children:[t.runtime?t.runtime:t.episode_run_time[0]," ","min"]}),Object(Y.jsx)(Ye,{children:"\u2022"}),Object(Y.jsx)(Xe,{children:t.genres&&t.genres.map((function(e,n){return n===t.genres.length-1?e.name:"".concat(e.name," / ")}))})]}),Object(Y.jsx)(Ze,{children:t.overview})]})]})]}),a&&Object(Y.jsx)(ce,{color:"#95a5a6",text:a})]})},et=function(e){Object(L.a)(n,e);var t=Object(q.a)(n);function n(e){var r;Object(A.a)(this,n),r=t.call(this,e);var a=e.location.pathname;return r.state={result:null,error:null,loading:!0,isMovie:a.includes("/movie/")},r}return Object(B.a)(n,[{key:"componentDidMount",value:function(){var e=Object(K.a)(H.a.mark((function e(){var t,n,r,a,i,c,o,s;return H.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=this.props,n=t.match.params.id,r=t.history.push,a=this.state.isMovie,i=parseInt(n),!isNaN(i)){e.next=5;break}return e.abrupt("return",r("/"));case 5:if(c=null,e.prev=6,!a){e.next=14;break}return e.next=10,fe(i);case 10:o=e.sent,c=o.data,e.next=18;break;case 14:return e.next=16,Se(i);case 16:s=e.sent,c=s.data;case 18:e.next=23;break;case 20:e.prev=20,e.t0=e.catch(6),this.setState({error:"Can't find anything."});case 23:return e.prev=23,this.setState({loading:!1,result:c}),e.finish(23);case 26:case"end":return e.stop()}}),e,this,[[6,20,23,26]])})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.result,n=e.loading,r=e.error;return Object(Y.jsx)($e,{result:t,loading:n,error:r})}}]),n}(F.a.Component),tt=function(){return Object(Y.jsx)(J.a,{children:Object(Y.jsxs)(Y.Fragment,{children:[Object(Y.jsx)(Le,{}),Object(Y.jsxs)(E.d,{children:[Object(Y.jsx)(E.b,{path:"/",exact:!0,component:Re}),Object(Y.jsx)(E.b,{path:"/tv",component:Fe}),Object(Y.jsx)(E.b,{path:"/search",component:Ie}),Object(Y.jsx)(E.b,{path:"/movie/:id",component:et}),Object(Y.jsx)(E.b,{path:"/show/:id",component:et}),Object(Y.jsx)(E.a,{from:"*",to:"/"})]})]})})},nt=n(45),rt=Object(W.a)(N||(N=Object(Q.a)(["\n  ",";\n  a {\n    text-decoration: none;\n    color: inherit;\n  }\n  * {\n    box-sizing: border-box;\n  }\n  body {\n    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Centa, serif;\n    font-size: 12px;\n    background-color: rgba(20, 20, 20, 1);\n    color: white;\n    padding-top:50px;\n  }\n"])),nt.a),at=function(e){Object(L.a)(n,e);var t=Object(q.a)(n);function n(){return Object(A.a)(this,n),t.apply(this,arguments)}return Object(B.a)(n,[{key:"render",value:function(){return Object(Y.jsxs)(Y.Fragment,{children:[Object(Y.jsx)(tt,{}),Object(Y.jsx)(rt,{})]})}}]),n}(P.Component);V.a.render(Object(Y.jsx)(at,{}),document.getElementById("root"))}},[[73,1,2]]]);
//# sourceMappingURL=main.c9793cb8.chunk.js.map