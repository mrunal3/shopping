(this.webpackJsonpshopping_app=this.webpackJsonpshopping_app||[]).push([[0],{104:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(7),o=a.n(c),l=a(145),i=a(144),u=a(135),s=a(136),m=a(137),p=a(48),d=a(40),_=a(62),E=a(74),g=a(72),h=a(128),C=a(130),O=a(147),f=a(150),b=a(131),y=a(151),v=a(132),w=a(133),j=a(134),R=a(67),T=a.n(R),S=a(68),A=a.n(S),D=function(e){var t=e.onOpenCart,a=e.isCartOpen,c=e.onCloseCart,o=e.products,l=e.onRemoveProductFromCart,i=Object(n.useRef)();return r.a.createElement(r.a.Fragment,null,r.a.createElement(h.a,{ref:i,"aria-controls":"cart-menu","aria-haspopup":"true",onClick:t,color:"inherit"},r.a.createElement(C.a,{badgeContent:o.length,color:"secondary"},r.a.createElement(T.a,null))),o.length>0?r.a.createElement(O.a,{id:"cart-menu",anchorEl:i.current,keepMounted:!0,open:a,onClose:c},o.map((function(e){return r.a.createElement(f.a,{key:e.id},r.a.createElement(b.a,null,r.a.createElement(y.a,{variant:"rounded",src:e.imageUrl})),r.a.createElement(v.a,{primary:e.name,secondary:"\u20b9"+e.price}),r.a.createElement(w.a,null,r.a.createElement(j.a,{edge:"end","aria-label":"delete",onClick:function(){return l(e.id)}},r.a.createElement(A.a,null))))}))):null)},U=a(23),I=function(e){Object(E.a)(a,e);var t=Object(g.a)(a);function a(){return Object(d.a)(this,a),t.apply(this,arguments)}return Object(_.a)(a,[{key:"render",value:function(){return r.a.createElement(D,{onOpenCart:this.props.openCart,isCartOpen:this.props.isCartOpen,onCloseCart:this.props.closeCart,onRemoveProductFromCart:this.props.removeProductFromCart,products:this.props.products})}}]),a}(n.Component),M=Object(U.b)((function(e){return{isCartOpen:e.cart.show_products,products:e.cart.products}}),(function(e){return{openCart:function(){return e({type:"SHOW_PRODUCTS_IN_CART"})},closeCart:function(){return e({type:"HIDE_PRODUCTS_IN_CART"})},removeProductFromCart:function(t){return e(function(e){return{type:"REMOVE_PRODUCT_FROM_CART",payload:e}}(t))}}}))(I),F=function(){return r.a.createElement(u.a,{position:"static"},r.a.createElement(s.a,null,r.a.createElement(m.a,{container:!0,direction:"row",alignItems:"center",justify:"space-between"},r.a.createElement(m.a,{item:!0,spacing:10},r.a.createElement(p.a,{variant:"h6",component:"h1"},"Toy Mart")),r.a.createElement(m.a,{item:!0,spacing:2},r.a.createElement(M,null)))))},L=a(143),P=a(148),N=a(10),k=a(141),z=a(142),H=a(138),Q=a(139),W=a(140),B=a(70),J=a.n(B);function V(e){var t=e.product,a=void 0===t?null:t,n=e.onAddToCart,c=void 0===n?function(){}:n;return r.a.createElement(H.a,null,r.a.createElement(Q.a,null,r.a.createElement(J.a,{alt:a.name,src:a.imageUrl,title:a.name,style:{padding:0,height:200,textAlign:"center"},imageStyle:{width:200,position:"static"},disableSpinner:!0}),r.a.createElement(p.a,{gutterBottom:!0,variant:"h6",component:"p",color:"primary"},a.name),r.a.createElement(p.a,{style:{fontWeight:500},color:"secondary",component:"p"},"\u20b9",a.price)),r.a.createElement(W.a,null,r.a.createElement(h.a,{size:"small",color:"primary",variant:"contained",onClick:c},"Add to Cart"),r.a.createElement(h.a,{size:"small",color:"secondary"},"Buy Now")))}function x(e){var t=e.product,a=Object(U.c)();return r.a.createElement(V,{product:t,onAddToCart:function(){a(function(e){return{type:"ADD_TO_CART",payload:e}}(t))}})}function G(e){var t=e.products,a=void 0===t?[]:t;return a.length>0?r.a.createElement(z.a,{cellHeight:"auto",cols:3},function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return e.map((function(e){return r.a.createElement(k.a,{cols:1,key:e.id},r.a.createElement(x,{product:e}))}))}(a)):null}function X(){var e=Object(U.d)((function(e){return e.products}));return r.a.createElement(G,{products:e})}var Y=function(){return r.a.createElement(P.a,null,r.a.createElement(X,null))},q=function(){return r.a.createElement(L.a,{maxWidth:"lg"},r.a.createElement(P.a,{component:"main",my:4},r.a.createElement(N.c,null,r.a.createElement(N.a,{path:"/",exact:!0,component:Y}))))},Z=a(46),K=a(73),$=a(25),ee={products:[],show_products:!1},te=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ee,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_TO_CART":return Object($.a)(Object($.a)({},e),{},{products:[].concat(Object(K.a)(e.products),[t.payload])});case"SHOW_PRODUCTS_IN_CART":return Object($.a)(Object($.a)({},e),{},{show_products:!0});case"HIDE_PRODUCTS_IN_CART":return Object($.a)(Object($.a)({},e),{},{show_products:!1});case"REMOVE_PRODUCT_FROM_CART":var a=e.products.filter((function(e){return e.id!==t.payload}));return Object($.a)(Object($.a)({},e),{},{products:a});default:return e}},ae=function e(t,a,n,r){Object(d.a)(this,e),this.id=t,this.name=a,this.imageUrl=n,this.price=r},ne=[new ae(111,"Mattel Uno Playing Card Game","https://images-eu.ssl-images-amazon.com/images/I/41R8fti5wnL._AC_US160_FMwebp_QL70_.jpg",129),new ae(222,"Nerf Disruptor Elite Blaster","https://images-eu.ssl-images-amazon.com/images/I/41zn91YS7-L._AC_US160_FMwebp_QL70_.jpg",881),new ae(333,"Hot wheels 5 car gift pack","https://images-eu.ssl-images-amazon.com/images/I/41G7anPVPFL._AC_US160_FMwebp_QL70_.jpg",537),new ae(444,"Mattel Scrabble Board Game, Multi Color","https://images-eu.ssl-images-amazon.com/images/I/61I2tgDw6JL._AC_US160_FMwebp_QL70_.jpg",567),new ae(555,"Nerf N-Strike Nano Fire, Green","https://images-eu.ssl-images-amazon.com/images/I/51TJ5lsZb4L._AC_US160_FMwebp_QL70_.jpg",440),new ae(666,"Popsugar 4 Wheel Drive","https://images-eu.ssl-images-amazon.com/images/I/510WyJYfnqL._AC_US160_FMwebp_QL70_.jpg",1379)],re=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ne,t=arguments.length>1?arguments[1]:void 0;return t.type,e},ce=Object(Z.a)({products:re,cart:te}),oe=Object(Z.b)(ce,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());var le=function(){return r.a.createElement(U.a,{store:oe},r.a.createElement(F,null),r.a.createElement(q,null))},ie=a(71),ue=Object(ie.a)({palette:{primary:{main:"#d35400"},secondary:{main:"#16a085"},error:{main:"#c0392b"},background:{default:"#ecf0f1"}}}),se=a(55);o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(i.a,{theme:ue},r.a.createElement(l.a,null),r.a.createElement(se.a,null,r.a.createElement(le,null)))),document.getElementById("root"))},83:function(e,t,a){e.exports=a(104)}},[[83,1,2]]]);