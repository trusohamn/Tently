(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{112:function(e,t,a){e.exports=a(126)},124:function(e,t,a){},126:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(81),l=a.n(c),o=a(82),i=a(83),s=a(97),u=a(84),m=a(102),d={url:{API_URL:"https://db-truso-map-space.herokuapp.com"}},p=a(36),h=r.a.createContext({});var f=function(e){var t=Object(n.useState)(null),a=Object(p.a)(t,2),c=a[0],l=a[1],o=Object(n.useState)("explore"),i=Object(p.a)(o,2),s=i[0],u=i[1],m=Object(n.useState)(null),d=Object(p.a)(m,2),f=d[0],b=d[1],v={pointId:c,setPointId:l,mode:s,setMode:u,switchMode:function(){u("explore"===s?"edit":"explore")},data:f,setData:b};return r.a.createElement(h.Provider,{value:v},e.children)},b=d.url.API_URL;var v=function(e){var t=Object(n.useContext)(h);return"explore"===t.mode?"":r.a.createElement("div",null,r.a.createElement("form",{className:"container",onSubmit:function(e){e.preventDefault();var a=new URLSearchParams,n=!0,r=!1,c=void 0;try{for(var l,o=new FormData(e.target)[Symbol.iterator]();!(n=(l=o.next()).done);n=!0){var i=l.value;a.append(i[0],i[1])}}catch(s){r=!0,c=s}finally{try{n||null==o.return||o.return()}finally{if(r)throw c}}fetch(b+"/api/points",{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:a}).then(function(e){t.setData(null)})},action:"http://localhost:8000/api/points",method:"post"},r.a.createElement("div",{className:"flexcontainer"},r.a.createElement("h3",null,"Add new location  "),r.a.createElement("input",{className:"d-none",readOnly:!0,type:"number",step:"any",name:"lon",id:"lon",value:e.lon}),r.a.createElement("input",{className:"d-none",readOnly:!0,type:"number",step:"any",name:"lat",id:"lat",value:e.lat})),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-sm"},r.a.createElement("label",{htmlFor:"name"},"Name:"),r.a.createElement("input",{required:!0,className:"form-control input-sm",placeholder:"place name",type:"text",name:"name",id:"name"})),r.a.createElement("div",{className:"col-sm"},r.a.createElement("label",{htmlFor:"description"},"Description:"),r.a.createElement("input",{className:"form-control input-sm",placeholder:"place decription",type:"text",name:"description",id:"description"})),r.a.createElement("div",{className:"col-sm"},r.a.createElement("label",{htmlFor:"type"},"Select type:"),r.a.createElement("select",{className:"form-control input-sm",id:"type",name:"type"},r.a.createElement("option",null,"camping"),r.a.createElement("option",null,"bonfire"),r.a.createElement("option",null,"view")))),r.a.createElement("div",{className:"flexcontainer"},r.a.createElement("button",{type:"submit",className:"btn btn-dark btn-bg"},"Add to the map"))))},E=a(85),w=a.n(E),y=a(86),j=a.n(y),x=a(87),O=a.n(x),g=a(15),N=(a(117),a(132)),k=a(96),S=a(100),C=a(95),P=a(131),A=a(133),I=a(73),T=a(61),L=a(134),U=a(78),D=d.url.API_URL,R={camping:w.a,bonfire:j.a,view:O.a},_=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={lon:17.862083241832444,lat:59.30184823106963},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=new P.a({source:new A.a({features:[]})}),a=new P.a({source:new A.a({features:[]})}),n=new N.a({target:this.refs.mapContainer,layers:[new S.a({source:new C.a}),t,a],view:new k.a({center:Object(g.d)([this.state.lon,this.state.lat]),zoom:11})});n.on("click",function(t){if("explore"===e.context.mode){var a=null;e.state.map.forEachFeatureAtPixel(t.pixel,function(e){a=e.get("id")||null});var n=null===a?"/location/":"/location/"+a;e.props.history.push(n)}else if("edit"===e.context.mode){var r=Object(g.h)(t.coordinate);e.setState({lon:r[0],lat:r[1]});var c=[],l=t.coordinate,o=new I.a({geometry:new T.a(l)});c.push(o),e.state.extraLayer.setSource(new A.a({features:c}))}}),this.setState({map:n,extraLayer:t,featuresLayer:a})}},{key:"componentDidUpdate",value:function(){var e=this;null===this.context.data&&fetch(D+"/api/points").then(function(e){return e.json()}).then(function(t){var a=[];t.forEach(function(e){var t=new L.a({opacity:1,scale:.05,src:R[e.type]}),n=new U.b({image:t}),r=Object(g.d)(e.localisation),c=new I.a({id:e._id,geometry:new T.a(r),name:e.name,description:e.description,rating:e.rating});c.setStyle(n),a.push(c)}),e.state.featuresLayer.setSource(new A.a({features:a})),e.context.setData(t)}).catch(function(e){return console.log(e)})}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{ref:"mapContainer",id:"mapContainer"}),r.a.createElement(v,{lon:this.state.lon,lat:this.state.lat}))}}]),t}(r.a.Component);_.contextType=h;var F=_,M=a(98),J=r.a.createContext({});var q=function(e){var t=Object(n.useState)(!1),a=Object(p.a)(t,2),c=a[0],l=a[1],o=Object(n.useState)(null),i=Object(p.a)(o,2),s=i[0],u=i[1],m=Object(n.useState)(null),d=Object(p.a)(m,2),h=d[0],f=d[1],b=Object(n.useState)(null),v=Object(p.a)(b,2),E={isAuthenticated:c,setIsAuthenticated:l,user:s,setUser:u,jwToken:v[0],setJwToken:v[1],picture:h,setPicture:f};return r.a.createElement(J.Provider,{value:E},e.children)},z=d.url.API_URL;var B=function(e){var t=Object(n.useContext)(h),a=Object(n.useContext)(J),c=Object(n.useState)(""),l=Object(p.a)(c,2),o=l[0],i=l[1],s=Object(n.useState)(null),u=Object(p.a)(s,2),m=u[0],d=u[1];return Object(n.useEffect)(function(){if(i(""),t.data){var e=t.data.find(function(e){return e._id===t.pointId});d(e)}},[t.data,t.pointId]),m&&"edit"!==t.mode?r.a.createElement("div",{className:"flexcontainercolumn"},r.a.createElement("h1",null,m.name),r.a.createElement("p",null,m.description,r.a.createElement("br",null),"rating: ",m.rating),r.a.createElement("button",{type:"click",onClick:function(){fetch(z+"/api/points/"+t.pointId).then(function(e){return e.json()}).then(function(e){var t=e.map(function(e){return r.a.createElement("div",{className:"flexcontainercolumn"},r.a.createElement("br",null),r.a.createElement("h5",null,e.title),r.a.createElement("p",null," ",e.description," "),r.a.createElement("h5",null,"rated: ",e.rating))});i(t)})},className:"btn btn-dark btn-sm"},"Show reviews"),o,a.isAuthenticated?r.a.createElement("form",{className:"container",onSubmit:function(e){e.preventDefault();var n=new URLSearchParams,r=!0,c=!1,l=void 0;try{for(var o,i=new FormData(e.target)[Symbol.iterator]();!(r=(o=i.next()).done);r=!0){var s=o.value;n.append(s[0],s[1])}}catch(u){c=!0,l=u}finally{try{r||null==i.return||i.return()}finally{if(c)throw l}}fetch(z+"/api/points/"+t.pointId,{method:"POST",headers:{Authorization:"Bearer "+a.jwToken,"Content-Type":"application/x-www-form-urlencoded"},body:n,withCredentials:!0,credentials:"include"}).then(function(e){return e.json()}).then(function(e){d(Object(M.a)({},m,{rating:e.newRating}))})}},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-sm"},r.a.createElement("label",{htmlFor:"title"},"Title:"),r.a.createElement("input",{className:"form-control input-sm",placeholder:"title",required:!0,name:"title",id:"title"})),r.a.createElement("div",{className:"col-sm"},r.a.createElement("label",{htmlFor:"description"},"Description:"),r.a.createElement("input",{className:"form-control input-sm",placeholder:"description",name:"description",id:"description"})),r.a.createElement("div",{className:"col-sm"},r.a.createElement("label",{htmlFor:"rating"},"Rating:"),r.a.createElement("input",{className:"form-control input-sm",placeholder:"1-10",required:!0,min:"1",max:"10",name:"rating",id:"rating",type:"number"}))),r.a.createElement("div",{className:"flexcontainer"},r.a.createElement("button",{type:"submit",className:" btn btn-dark btn-bg"},"Review"))):""):""};var Y=function(e){var t=Object(n.useContext)(h);return Object(n.useEffect)(function(){var a=e.location.pathname.match(/[^\/]+$/)?e.location.pathname.match(/[^\/]+$/)[0]:null;t.pointId!==a&&t.setPointId(a)},[e.location.pathname]),r.a.createElement("div",null,r.a.createElement(F,{history:e.history}),r.a.createElement(B,null))},$=a(49);var G=function(){var e=Object(n.useContext)(h),t=Object(n.useContext)(J),a="explore"===e.mode?"Edit map":"Explore";return r.a.createElement("div",{className:"App"},t.isAuthenticated?r.a.createElement("button",{id:"switch modes",onClick:e.switchMode},a):null,e.redirect,r.a.createElement($.b,{path:"/",component:Y}))},H=d.url.API_URL;var K=function(e){var t=Object(n.useContext)(J),a=Object(n.useState)(null),c=Object(p.a)(a,2),l=c[0],o=c[1];return t.isAuthenticated||e.history.push("/"),Object(n.useEffect)(function(){fetch(H+"/api/profiles",{method:"GET",withCredentials:!0,credentials:"include",headers:{Authorization:"Bearer "+t.jwToken}}).then(function(e){return e.json()}).then(function(e){o(e)})},[]),r.a.createElement("div",{className:"Profile"},"Your Profile page ",r.a.createElement("br",null),l?"sucess":"no data")},Q=a(71),V=a(90),W=a.n(V),X=a(91);function Z(){var e=Object(X.a)(["\n  border-radius: 100%;\n  height: 3em;\n"]);return Z=function(){return e},e}var ee=a(92).a.img(Z()),te=d.url.API_URL;var ae=function(){var e=Object(n.useContext)(J),t=Object(n.useContext)(h),a=e.picture?r.a.createElement(ee,{src:e.picture,alt:"Profile"}):"Profile";return r.a.createElement(Q.a,{basename:"/HackDay-Maps"},r.a.createElement("nav",{className:"navbar navbar-dark bg-dark"},r.a.createElement("h1",{className:"text-light"},"Your Map Space"),e.isAuthenticated?r.a.createElement("button",{onClick:function(){e.setIsAuthenticated(!1),e.setUser(null),e.setJwToken(null),t.setMode("explore")},className:"button"},"Log out"):r.a.createElement(W.a,{appId:"383464965621720",autoLoad:!1,fields:"name,email,picture",callback:function(t){var a={method:"POST",body:"access_token=".concat(t.accessToken),headers:{"Content-Type":"application/x-www-form-urlencoded"},mode:"cors",cache:"default"};fetch(te+"/api/auth/facebook",a).then(function(t){var a=t.headers.get("x-auth-token");t.json().then(function(t){a&&(e.setIsAuthenticated(!0),e.setUser(t._id),e.setJwToken(a),e.setPicture(t.photoUrl))})})}}),e.isAuthenticated?r.a.createElement(Q.b,{to:"/profile"},a):""),r.a.createElement($.d,null,r.a.createElement($.b,{path:"/location",component:G}),r.a.createElement($.b,{exact:!0,path:"/"},r.a.createElement($.a,{to:"/location"})),r.a.createElement($.b,{path:"/profile",component:K})))};a(124),a(125);l.a.render(r.a.createElement(f,null,r.a.createElement(q,null,r.a.createElement(ae,null))),document.getElementById("root"))},85:function(e,t,a){e.exports=a.p+"static/media/039-tent.ebd03a54.svg"},86:function(e,t,a){e.exports=a.p+"static/media/010-bonfire.21b76057.svg"},87:function(e,t,a){e.exports=a.p+"static/media/009-binoculars.6b6a714c.svg"}},[[112,1,2]]]);
//# sourceMappingURL=main.ef850a66.chunk.js.map