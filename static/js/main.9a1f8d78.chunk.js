(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{113:function(e,t,a){e.exports=a(127)},125:function(e,t,a){},127:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(85),o=a.n(c),i=a(86),l=a(87),u=a(99),s=a(88),m=a(102),d=a(26),p=r.a.createContext({});var b=function(e){var t=Object(n.useState)(null),a=Object(d.a)(t,2),c=a[0],o=a[1],i=Object(n.useState)("explore"),l=Object(d.a)(i,2),u=l[0],s=l[1],m=Object(n.useState)(null),b=Object(d.a)(m,2),f=b[0],h=b[1],E=Object(n.useState)(17.86208324183244),v=Object(d.a)(E,2),O=v[0],j=v[1],w=Object(n.useState)(59.30184823106963),x=Object(d.a)(w,2),y=x[0],N=x[1],g={pointId:c,setPointId:o,mode:u,setMode:s,switchMode:function(){s("explore"===u?"edit":"explore")},data:f,setData:h,lon:O,setLon:j,lat:y,setLat:N};return r.a.createElement(p.Provider,{value:g},e.children)},f={isAuthenticated:!0,user:"5d2cd2dd1a88bd3129ed41cd",picture:"https://graph.facebook.com/10219128370309728/picture?type=large",jwToken:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVkMmNkMmRkMWE4OGJkMzEyOWVkNDFjZCIsImlhdCI6MTU2MzY1NjM5MiwiZXhwIjoxNTYzNjYzNTkyfQ.oS_qwR9qmT183NoKemPAuWRCSiK1tIgapdwdKkFupv4"},h=r.a.createContext({});var E=function(e){console.log("logedin",Object({NODE_ENV:"production",PUBLIC_URL:"/HackDay-Maps"}).REACT_APP_LOGEDIN);var t=Object(n.useState)(!!Object({NODE_ENV:"production",PUBLIC_URL:"/HackDay-Maps"}).REACT_APP_LOGEDIN),a=Object(d.a)(t,2),c=a[0],o=a[1],i=Object(n.useState)(Object({NODE_ENV:"production",PUBLIC_URL:"/HackDay-Maps"}).REACT_APP_LOGEDIN?f.user:null),l=Object(d.a)(i,2),u=l[0],s=l[1],m=Object(n.useState)(Object({NODE_ENV:"production",PUBLIC_URL:"/HackDay-Maps"}).REACT_APP_LOGEDIN?f.picture:null),p=Object(d.a)(m,2),b=p[0],E=p[1],v=Object(n.useState)(Object({NODE_ENV:"production",PUBLIC_URL:"/HackDay-Maps"}).REACT_APP_LOGEDIN?f.jwToken:null),O=Object(d.a)(v,2),j={isAuthenticated:c,setIsAuthenticated:o,user:u,setUser:s,jwToken:O[0],setJwToken:O[1],picture:b,setPicture:E};return r.a.createElement(h.Provider,{value:j},e.children)},v=a(64),O=a(65),j={url:{API_URL:"https://db-truso-map-space.herokuapp.com"},app_id:{FACEBOOK_APPID:"383464965621720"}};var w=function(e){Object(n.useContext)(p),Object(n.useContext)(h);var t=e.inputs.reduce(function(e,t){return e[t.name]=t.default||"",e},{}),a=Object(n.useState)(t),c=Object(d.a)(a,2),o=c[0],i=c[1],l=function(e){i(Object(O.a)({},o,Object(v.a)({},e.target.id,e.target.value)))};return r.a.createElement("div",null,r.a.createElement("form",{className:"container",onSubmit:function(t){t.preventDefault();var a=new URLSearchParams;for(var n in o)console.log(n,o[n]),a.append(n,o[n]);for(var r in e.additionalInputs)console.log(r,e.additionalInputs[r]),a.append(r,e.additionalInputs[r])}},r.a.createElement("div",{className:"flexcontainer"},r.a.createElement("h3",null,e.formTitle)),r.a.createElement("div",{className:"row"},e.inputs.map(function(e){return r.a.createElement("div",{className:"col-sm",key:e.name},r.a.createElement("label",{htmlFor:e.name},e.label),e.selectType?r.a.createElement("select",{className:"form-control input-sm",id:e.name,name:e.name,value:o[e.name],onChange:l},e.options.map(function(e){return r.a.createElement("option",{key:e},e)})):r.a.createElement("input",{required:e.required,className:"form-control input-sm",placeholder:e.placeholder,type:e.type,name:e.name,id:e.name,value:o[e.name],onChange:l}))})),r.a.createElement("div",{className:"flexcontainer"},r.a.createElement("button",{type:"submit",className:"btn btn-dark btn-bg"},e.buttonTitle))))};var x=function(e){var t=Object(n.useContext)(p),a=(Object(n.useContext)(h),{lon:t.lon,lat:t.lat});return"explore"===t.mode?null:r.a.createElement(w,{onSucessPost:function(){return t.setData(null)},apiPath:"/api/points",formTitle:"Add new location",additionalInputs:a,inputs:[{name:"name",label:"Name:",required:!0,placeholder:"place name",type:"text"},{name:"description",label:"Description:",required:!1,placeholder:"place decription",type:"text"},{name:"type",label:"Select type:",selectType:!0,options:["camping","bonfire","view"],default:"camping"}],buttonTitle:"Add to the map"})},y=a(89),N=a.n(y),g=a(90),C=a.n(g),I=a(91),P=a.n(I),k=a(15),A=(a(118),a(133)),_=a(98),L=a(103),T=a(97),D=a(132),S=a(134),R=a(75),U=a(61),M=a(135),B=a(82),F=j.url.API_URL,J={camping:N.a,bonfire:C.a,view:P.a},q=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=new D.a({source:new S.a({features:[]})}),a=new D.a({source:new S.a({features:[]})}),n=new A.a({target:this.refs.mapContainer,layers:[new L.a({source:new T.a}),t,a],view:new _.a({center:Object(k.d)([this.context.lon,this.context.lat]),zoom:11})});n.on("click",function(t){if("explore"===e.context.mode){var a=null;e.state.map.forEachFeatureAtPixel(t.pixel,function(e){a=e.get("id")||null});var n=null===a?"/location/":"/location/"+a;e.props.history.push(n)}else if("edit"===e.context.mode){var r=Object(k.h)(t.coordinate);e.context.setLon(r[0]),e.context.setLat(r[1]);var c=[],o=t.coordinate,i=new R.a({geometry:new U.a(o)});c.push(i),e.state.extraLayer.setSource(new S.a({features:c}))}}),this.setState({map:n,extraLayer:t,featuresLayer:a})}},{key:"componentDidUpdate",value:function(){var e=this;null===this.context.data&&fetch(F+"/api/points").then(function(e){return e.json()}).then(function(t){var a=[];t.forEach(function(e){var t=new M.a({opacity:1,scale:.05,src:J[e.type]}),n=new B.b({image:t}),r=Object(k.d)(e.localisation),c=new R.a({id:e._id,geometry:new U.a(r),name:e.name,description:e.description,rating:e.rating});c.setStyle(n),a.push(c)}),e.state.featuresLayer.setSource(new S.a({features:a})),e.context.setData(t)}).catch(function(e){return console.log(e)})}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{ref:"mapContainer",id:"mapContainer"}),r.a.createElement(x,null))}}]),t}(r.a.Component);q.contextType=p;var z=q,G=a(76),V=a(77);function H(){var e=Object(G.a)(["\n  border-radius: 100%;\n  height: 1.5em;\n"]);return H=function(){return e},e}function K(){var e=Object(G.a)(["\n  border-radius: 100%;\n  height: 3em;\n"]);return K=function(){return e},e}var Y=V.a.img(K()),W=V.a.img(H());var Z=function(e){var t=Object(n.useContext)(h);return r.a.createElement("div",{className:"ReviewCard flexcontainercolumn"},r.a.createElement("br",null),r.a.createElement("h5",null,e.e.title),r.a.createElement("p",null," ",e.e.description," "),r.a.createElement("h5",null,"rated: ",e.e.rating),t.isAuthenticated?r.a.createElement(W,{src:e.e.profilePicture,alt:"Profile"}):"")},X=j.url.API_URL;var $=function(e){var t=Object(n.useContext)(p),a=Object(n.useContext)(h),c=Object(n.useState)(""),o=Object(d.a)(c,2),i=o[0],l=o[1],u=Object(n.useState)(null),s=Object(d.a)(u,2),m=s[0],b=s[1];return Object(n.useEffect)(function(){if(l(""),t.data){var e=t.data.find(function(e){return e._id===t.pointId});b(e)}},[t.data,t.pointId]),m&&"edit"!==t.mode?r.a.createElement("div",{className:"flexcontainercolumn"},r.a.createElement("h1",null,m.name),r.a.createElement("p",null,m.description),r.a.createElement("h5",null,"rating: ",m.rating),a.isAuthenticated?r.a.createElement("p",null,"created by: ",r.a.createElement(W,{src:m.profilePicture,alt:"Profile"})):"",r.a.createElement("button",{type:"click",onClick:function(){fetch(X+"/api/points/"+t.pointId).then(function(e){return e.json()}).then(function(e){var t=e.map(function(e){return r.a.createElement(Z,{e:e})});l(t)})},className:"btn btn-dark btn-sm"},"Show reviews"),i,a.isAuthenticated?r.a.createElement("form",{className:"container",onSubmit:function(e){e.preventDefault();var n=new URLSearchParams,r=!0,c=!1,o=void 0;try{for(var i,l=new FormData(e.target)[Symbol.iterator]();!(r=(i=l.next()).done);r=!0){var u=i.value;n.append(u[0],u[1])}}catch(s){c=!0,o=s}finally{try{r||null==l.return||l.return()}finally{if(c)throw o}}fetch(X+"/api/points/"+t.pointId,{method:"POST",headers:{Authorization:"Bearer "+a.jwToken,"Content-Type":"application/x-www-form-urlencoded"},body:n,withCredentials:!0,credentials:"include"}).then(function(e){return e.json()}).then(function(e){b(Object(O.a)({},m,{rating:e.newRating}))})}},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-sm"},r.a.createElement("label",{htmlFor:"title"},"Title:"),r.a.createElement("input",{className:"form-control input-sm",placeholder:"title",required:!0,name:"title",id:"title"})),r.a.createElement("div",{className:"col-sm"},r.a.createElement("label",{htmlFor:"description"},"Description:"),r.a.createElement("input",{className:"form-control input-sm",placeholder:"description",name:"description",id:"description"})),r.a.createElement("div",{className:"col-sm"},r.a.createElement("label",{htmlFor:"rating"},"Rating:"),r.a.createElement("input",{className:"form-control input-sm",placeholder:"1-10",required:!0,min:"1",max:"10",name:"rating",id:"rating",type:"number"}))),r.a.createElement("div",{className:"flexcontainer"},r.a.createElement("button",{type:"submit",className:" btn btn-dark btn-bg"},"Review"))):""):""};var Q=function(e){var t=Object(n.useContext)(p);return Object(n.useEffect)(function(){var a=e.location.pathname.match(/[^\/]+$/)?e.location.pathname.match(/[^\/]+$/)[0]:null;t.pointId!==a&&t.setPointId(a)},[e.location.pathname]),r.a.createElement("div",null,r.a.createElement(z,{history:e.history}),r.a.createElement($,null))},ee=a(49);var te=function(){var e=Object(n.useContext)(p),t=Object(n.useContext)(h),a="explore"===e.mode?"Edit map":"Explore";return r.a.createElement("div",{className:"App"},t.isAuthenticated?r.a.createElement("button",{id:"switch modes",onClick:e.switchMode},a):null,e.redirect,r.a.createElement(ee.b,{path:"/",component:Q}))},ae=j.url.API_URL;var ne=function(e){var t=Object(n.useContext)(h),a=Object(n.useState)(null),c=Object(d.a)(a,2),o=c[0],i=c[1];return t.isAuthenticated||e.history.push("/"),Object(n.useEffect)(function(){fetch(ae+"/api/profiles",{method:"GET",withCredentials:!0,credentials:"include",headers:{Authorization:"Bearer "+t.jwToken}}).then(function(e){return e.json()}).then(function(e){i(e)})},[]),r.a.createElement("div",{className:"Profile"},"Your Profile page ",r.a.createElement("br",null),o?"sucess":"no data")},re=a(73),ce=a(96),oe=a.n(ce),ie=j.url.API_URL;var le=function(){var e=Object(n.useContext)(h),t=Object(n.useContext)(p);console.log(j.app_id.FACEBOOK_APPID);var a=e.picture?r.a.createElement(Y,{src:e.picture,alt:"Profile"}):"Profile";return r.a.createElement(re.a,{basename:"/HackDay-Maps"},r.a.createElement("nav",{className:"navbar navbar-dark bg-dark"},r.a.createElement("h1",{className:"text-light"},"Your Map Space"),e.isAuthenticated?r.a.createElement("button",{onClick:function(){e.setIsAuthenticated(!1),e.setUser(null),e.setJwToken(null),t.setMode("explore")},className:"button"},"Log out"):r.a.createElement(oe.a,{appId:j.app_id.FACEBOOK_APPID,autoLoad:!0,fields:"name,email,picture",callback:function(t){var a={method:"POST",body:"access_token=".concat(t.accessToken),headers:{"Content-Type":"application/x-www-form-urlencoded"},mode:"cors",cache:"default"};fetch(ie+"/api/auth/facebook",a).then(function(t){var a=t.headers.get("x-auth-token");t.json().then(function(t){a&&(e.setIsAuthenticated(!0),e.setUser(t._id),e.setJwToken(a),e.setPicture(t.photoUrl))})})}}),e.isAuthenticated?r.a.createElement(re.b,{to:"/profile"},a):""),r.a.createElement(ee.d,null,r.a.createElement(ee.b,{path:"/location",component:te}),r.a.createElement(ee.b,{exact:!0,path:"/"},r.a.createElement(ee.a,{to:"/location"})),r.a.createElement(ee.b,{path:"/profile",component:ne})))};a(125),a(126);o.a.render(r.a.createElement(b,null,r.a.createElement(E,null,r.a.createElement(le,null))),document.getElementById("root"))},89:function(e,t,a){e.exports=a.p+"static/media/039-tent.ebd03a54.svg"},90:function(e,t,a){e.exports=a.p+"static/media/010-bonfire.21b76057.svg"},91:function(e,t,a){e.exports=a.p+"static/media/009-binoculars.6b6a714c.svg"}},[[113,1,2]]]);
//# sourceMappingURL=main.9a1f8d78.chunk.js.map