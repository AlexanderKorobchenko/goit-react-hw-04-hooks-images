(this["webpackJsonpgoit-react-hw-04-hooks-images"]=this["webpackJsonpgoit-react-hw-04-hooks-images"]||[]).push([[0],[,,,,,function(e,t,a){e.exports={searchbar:"Searchbar_searchbar__3UcKv",form:"Searchbar_form__3P57z",input:"Searchbar_input__30WGQ",button:"Searchbar_button__3xjQf"}},function(e,t,a){e.exports={loader:"Loader_loader__2JKhS",circle:"Loader_circle__VBIZL",hop:"Loader_hop__obeSO"}},,,function(e,t,a){e.exports={card:"ImageGalleryItem_card__2wryb",image:"ImageGalleryItem_image__2UNtU",stats:"ImageGalleryItem_stats__2c3I4",item:"ImageGalleryItem_item__3dAih",icons:"ImageGalleryItem_icons__wKlL4",bigimg:"ImageGalleryItem_bigimg__9xR5o"}},,function(e,t,a){e.exports={backdrop:"Modal_backdrop__1NWgg",window:"Modal_window__3pr2C"}},function(e,t,a){e.exports={message:"IdleMessage_message__3LBId",link:"IdleMessage_link__3_CFi"}},function(e,t,a){e.exports={gallery:"ImageGallery_gallery__2CC7j"}},,function(e,t,a){e.exports={container:"Container_container__15pUq"}},,,function(e,t,a){e.exports={message:"NotFound_message__1JSD_"}},function(e,t,a){e.exports={button:"Button_button__3X1Aw"}},,,,,,function(e,t,a){},,,,function(e,t,a){"use strict";a.r(t);var n=a(1),c=a.n(n),r=a(7),o=a.n(r),s=(a(25),a(3)),i=a(15),u=a.n(i),l=a(0);var d=function(e){var t=e.children;return Object(l.jsx)("div",{className:u.a.container,children:t})},m=a(2),j=a.n(m),b=a(20),h=a(5),g=a.n(h);function f(e){var t=e.onSubmit,a=Object(n.useState)(""),c=Object(s.a)(a,2),r=c[0],o=c[1];return Object(l.jsx)("header",{className:g.a.searchbar,children:Object(l.jsxs)("form",{className:g.a.form,onSubmit:function(e){e.preventDefault(),t(r.trim().toLowerCase())},children:[Object(l.jsx)("input",{className:g.a.input,type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images...",onChange:function(e){o(e.currentTarget.value)},value:r}),Object(l.jsx)("button",{type:"submit",className:g.a.button,children:Object(l.jsx)(b.a,{})})]})})}f.protoType={onSubmit:j.a.func};var p=f,_=a(14),O=a(11),x=a.n(O);function v(e){var t=e.closeModal,a=e.children;Object(n.useEffect)((function(){return document.addEventListener("keydown",c,!1),function(){document.removeEventListener("keydown",c,!1)}}),[]);var c=function(e){27===e.keyCode&&t()};return Object(r.createPortal)(Object(l.jsx)("div",{className:x.a.backdrop,onClick:function(e){"IMG"!==e.target.nodeName&&t()},children:Object(l.jsx)("div",{className:x.a.window,children:a})}),document.getElementById("modal-root"))}v.protoType={closeModal:j.a.func};var y=v,N=a(9),I=a.n(N);function k(e){var t=e.array,a=Object(n.useState)(!1),c=Object(s.a)(a,2),r=c[0],o=c[1],i=function(e){o(e.target.dataset.set)};return Object(l.jsxs)(l.Fragment,{children:[t.map((function(e){return Object(l.jsx)("li",{className:I.a.card,children:Object(l.jsx)("img",{onClick:i,className:I.a.image,src:e.webformatURL,alt:e.id,"data-set":e.largeImageURL})},e.id)})),r&&Object(l.jsx)(y,{closeModal:function(){o(!1)},children:Object(l.jsx)("img",{src:r,alt:"modal_picture",className:I.a.bigimg})})]})}k.protoType={array:j.a.array};var w=k,S=a(16),C=a(17),L=function(){function e(){Object(S.a)(this,e),this.pageNumber=1,this.inputValue="",this.total=0,this.amount=0}return Object(C.a)(e,[{key:"getData",value:function(){var e=this,t="photo",a="horizontal",n="12",c="22892994-722ced5920981906a643cad7c",r="".concat("https://pixabay.com/api/","?image_type=").concat(t,"&orientation=").concat(a,"&q=").concat(this.inputValue,"&page=").concat(this.pageNumber,"&per_page=").concat(n,"&key=").concat(c);return fetch(r).then((function(e){return e.json()})).then((function(t){return e.pageNumber+=1,e.total=t.totalHits,e.amount+=t.hits.length,t})).catch((function(e){return console.warn(e)}))}},{key:"resetPage",value:function(){this.pageNumber=1}},{key:"resetAmount",value:function(){this.amount=0}},{key:"value",get:function(){return this.inputValue},set:function(e){this.inputValue=e}}]),e}(),T=a(6),G=a.n(T);var M=function(){return Object(l.jsxs)("div",{className:G.a.loader,children:[Object(l.jsx)("div",{className:G.a.circle}),Object(l.jsx)("div",{className:G.a.circle}),Object(l.jsx)("div",{className:G.a.circle})]})},V=a(12),E=a.n(V);var F=function(){return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("span",{className:E.a.message,children:"Start your search"}),Object(l.jsx)("a",{href:"https://alexanderkorobchenko.github.io/my-project_Image-search-engine/",className:E.a.link,children:"This project in VanillaJS"})]})},U=a(18),B=a.n(U);function D(e){var t=e.value;return Object(l.jsxs)("span",{className:B.a.message,children:['Not found "',t,'"']})}D.protoType={value:j.a.string};var J=D,P=a(19),A=a.n(P);function K(e){var t=e.addImages;return Object(l.jsx)("button",{type:"button",className:A.a.button,onClick:function(){return t()},children:"Load more"})}K.protoType={addImages:j.a.func};var R=K,q=a(13),z=a.n(q),H=new L;function Q(e){var t=e.searchValue,a=Object(n.useState)([]),c=Object(s.a)(a,2),r=c[0],o=c[1],i=Object(n.useState)("idle"),u=Object(s.a)(i,2),d=u[0],m=u[1];Object(n.useEffect)((function(){""!==t&&(m("pending"),H.value=t,H.resetPage(),H.getData().then((function(e){return 0!==e.hits.length?(o(e.hits),void m("resolved")):(o(e.hits),m("rejected"),e)})).catch((function(e){return console.warn(e)})))}),[t]);return"idle"===d?Object(l.jsx)(F,{}):"pending"===d?Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("ul",{className:z.a.gallery,children:Object(l.jsx)(w,{array:r})}),Object(l.jsx)(M,{}),";"]}):"rejected"===d?Object(l.jsx)(J,{value:t}):"resolved"===d?Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("ul",{className:z.a.gallery,children:Object(l.jsx)(w,{array:r})}),Object(l.jsx)(R,{addImages:function(){m("pending"),H.getData().then((function(e){return o([].concat(Object(_.a)(r),Object(_.a)(e.hits))),m("resolved"),e})).catch((function(e){return console.warn(e)})).finally((function(){setTimeout((function(){window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})}),400)}))}})]}):void 0}Q.protoType={searchValue:j.a.string};var W=Q;var X=function(){var e=Object(n.useState)(""),t=Object(s.a)(e,2),a=t[0],c=t[1];return Object(l.jsxs)(d,{children:[Object(l.jsx)(p,{onSubmit:function(e){c(e)}}),Object(l.jsx)(W,{searchValue:a})]})};o.a.render(Object(l.jsx)(c.a.StrictMode,{children:Object(l.jsx)(X,{})}),document.getElementById("root"))}],[[29,1,2]]]);
//# sourceMappingURL=main.9173bba9.chunk.js.map