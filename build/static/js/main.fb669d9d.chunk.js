(this["webpackJsonpsports-apparel-ui"]=this["webpackJsonpsports-apparel-ui"]||[]).push([[0],{10:function(e,t,a){e.exports={checkoutContainer:"CheckoutPage_checkoutContainer__2eXtf",delivery:"CheckoutPage_delivery__2eMIN",order:"CheckoutPage_order__2EzSS",payment:"CheckoutPage_payment__3BQkf",payNow:"CheckoutPage_payNow__zyEAs",payButton:"CheckoutPage_payButton__3cODN",step:"CheckoutPage_step__3lfHf",summary:"CheckoutPage_summary__4_2S0",title:"CheckoutPage_title__2ot21",useSameAddress:"CheckoutPage_useSameAddress__2CeXM",sameAddressText:"CheckoutPage_sameAddressText__1l_Yb"}},11:function(e,t){e.exports=Object.freeze({API_ERROR:"Oops, something went wrong",BASE_URL_API:"http://localhost:8085",PLACEHOLDER_IMAGE:"https://www.signfix.com.au/wp-content/uploads/2017/09/placeholder-600x400.png",PURCHASE_ENDPOINT:"/purchases",RUNNING_SHORTS_ENDPOINT:"/products?category=Running&type=Short",GOOGLE_CLIENT_ID:"912899852587-7996nh9mlpvpa2446q0il4f9hj5o492h.apps.googleusercontent.com"})},27:function(e,t,a){e.exports={input:"FormItem_input__3I-UJ",label:"FormItem_label__1vhi2"}},28:function(e,t,a){e.exports={orderItem:"OrderItem_orderItem__XUEOr",itemTitle:"OrderItem_itemTitle__1MeBp",price:"OrderItem_price__1bXv_"}},43:function(e,t,a){e.exports={deliveryAddress:"DeliveryAddress_deliveryAddress__mJ0kq",label:"DeliveryAddress_label__2uf1a"}},48:function(e,t,a){e.exports={app:"ProductPage_app__2NUSV",errMsg:"ProductPage_errMsg__2GGf9"}},49:function(e,t,a){e.exports={subtotal:"ReviewOrderWidget_subtotal__2l-jQ",price:"ReviewOrderWidget_price__2S0Ya"}},66:function(e,t,a){},67:function(e,t,a){},79:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(23),c=a.n(i),s=(a(66),a(67),a(25)),o=a(7),l=a(13),d=a(104),u=a(111),p=a(106),j=a(107),h=a(108),b=a(109),O=a(112),x=a(110),m=a(46),g=a(45),f=a(54),v=a.n(f),y=a(56),_=a.n(y),N=a(55),C=a.n(N),S=a(53),w=a.n(S),k=a(11),I=a.n(k),A=a(57),P=a(18),E=a(1),M=r.a.createContext();function T(e,t){switch(t.type){case"delete":return Object(P.a)(Object(P.a)({},e),{},{products:e.products.filter((function(e){return e.title!==t.product.title}))});case"add":return Object(P.a)(Object(P.a)({},e),{},{products:[].concat(Object(A.a)(e.products),[t.product])});default:throw new Error("Unhandled action type: ".concat(t.type))}}function R(e){var t=e.children,a=r.a.useReducer(T,{products:[{id:null,title:"Sport Shoes",price:49.99,description:"Sporty shoes for sporty people",quantity:2},{id:null,title:"Sport Shorts",price:39.99,description:"Sporty shorts for sporty people",quantity:5}],setProducts:function(){}}),n=Object(l.a)(a,2),i={state:n[0],dispatch:n[1]};return Object(E.jsx)(M.Provider,{value:i,children:t})}function D(){var e=r.a.useContext(M);if(void 0===e)throw new Error("useCartDispatch must be used within a CartProvider");return e}var G=Object(d.a)((function(e){return{root:{maxWidth:345},media:{height:0,paddingTop:"56.25%"},expand:{transform:"rotate(0deg)",marginLeft:"auto",transition:e.transitions.create("transform",{duration:e.transitions.duration.shortest})},expandOpen:{transform:"rotate(180deg)"},avatar:{backgroundColor:g.a[500]}}})),L=function(e){var t=e.product,a=G(),n=D().dispatch;return Object(E.jsxs)(u.a,{className:a.root,children:[Object(E.jsx)(p.a,{avatar:Object(E.jsx)(O.a,{"aria-label":"demographics",className:a.avatar,children:t.demographic.charAt(0)}),action:Object(E.jsx)(x.a,{"aria-label":"settings",children:Object(E.jsx)(w.a,{})}),title:t.name,subheader:"".concat(t.demographic," ").concat(t.category," ").concat(t.type)}),Object(E.jsx)(j.a,{className:a.media,image:I.a.PLACEHOLDER_IMAGE,title:"placeholder"}),Object(E.jsxs)(h.a,{children:[Object(E.jsx)(m.a,{variant:"body2",color:"textSecondary",component:"p",children:t.description}),Object(E.jsx)("br",{}),Object(E.jsxs)(m.a,{variant:"body2",color:"textSecondary",component:"p",children:["Price: $",t.price]})]}),Object(E.jsxs)(b.a,{disableSpacing:!0,children:[Object(E.jsx)(x.a,{"aria-label":"add to favorites",children:Object(E.jsx)(v.a,{})}),Object(E.jsx)(x.a,{"aria-label":"share",children:Object(E.jsx)(C.a,{})}),Object(E.jsx)(x.a,{"aria-label":"add to shopping cart",onClick:function(){n({type:"add",product:{id:t.id,title:t.name,price:t.price,description:t.description,quantity:1}})},children:Object(E.jsx)(_.a,{})})]})]})},F=a(48),B=a.n(F),U=a(14),z=a.n(U),H=a(21),q=function(e,t,a){return fetch(I.a.BASE_URL_API+e,{method:t,headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(sessionStorage.getItem("token"))},body:JSON.stringify(a)})};function V(){return(V=Object(H.a)(z.a.mark((function e(t,a){return z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,q(I.a.RUNNING_SHORTS_ENDPOINT,"GET").then((function(e){if(e.ok)return e.json();throw new Error(I.a.API_ERROR)})).then(t).catch((function(){a(!0)}));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var W=function(){var e=Object(n.useState)([]),t=Object(l.a)(e,2),a=t[0],r=t[1],i=Object(n.useState)(!1),c=Object(l.a)(i,2),s=c[0],o=c[1];return Object(n.useEffect)((function(){!function(e,t){V.apply(this,arguments)}(r,o)}),[]),Object(E.jsxs)("div",{children:[s&&Object(E.jsx)("p",{className:B.a.errMsg,"data-testid":"errMsg",children:I.a.API_ERROR}),Object(E.jsx)("div",{className:B.a.app,children:a.map((function(e){return Object(E.jsx)("div",{children:Object(E.jsx)(L,{product:e})},e.id)}))})]})},J=a(32),Z=a(10),K=a.n(Z),X=a(28),Y=a.n(X),Q=function(e){return"$".concat(e.toFixed(2))},$=function(e){if(e.length)return Q(e.reduce((function(e,t){return e+t.quantity*t.price}),0));throw new Error("No products found")},ee=function(e){var t=e.price,a=e.title,n=e.description,r=e.quantity;return Object(E.jsxs)("div",{className:Y.a.orderItem,children:[Object(E.jsx)("div",{className:Y.a.image,children:"IMAGE HERE"}),Object(E.jsxs)("div",{className:Y.a.item,children:[Object(E.jsx)("p",{className:Y.a.itemTitle,children:a}),Object(E.jsx)("p",{children:n}),Object(E.jsx)("p",{children:"Qty: ".concat(r)})]}),Object(E.jsx)("div",{className:Y.a.price,children:Object(E.jsx)("p",{children:Q(r*t)})})]})},te=a(49),ae=a.n(te),ne=function(){var e=D().state.products;return Object(E.jsxs)(E.Fragment,{children:[e.map((function(e){var t=e.price,a=e.title,n=e.description,r=e.quantity;return Object(E.jsx)(ee,{price:t,title:a,description:n,quantity:r},a)})),Object(E.jsx)("hr",{}),Object(E.jsxs)("div",{className:ae.a.subtotal,children:[Object(E.jsx)("div",{children:Object(E.jsx)("p",{children:"Subtotal"})}),Object(E.jsx)("div",{className:ae.a.price,children:Object(E.jsx)("p",{children:$(e)})})]})]})},re=a(27),ie=a.n(re),ce=function(e){var t=e.onChange,a=e.value,n=e.id,r=e.label,i=e.placeholder,c=e.type;return Object(E.jsx)("div",{children:Object(E.jsxs)("label",{className:ie.a.label,htmlFor:n,children:[r,Object(E.jsx)("div",{children:Object(E.jsx)("input",{className:ie.a.input,id:n,onChange:t,placeholder:i,type:c,value:a})})]})})},se=function(e){var t=e.onChange,a=e.value,n=e.id,r=e.label,i=e.options;return Object(E.jsx)("div",{children:Object(E.jsxs)("label",{className:ie.a.label,htmlFor:n,children:[r,Object(E.jsx)("div",{children:Object(E.jsx)("select",{className:ie.a.input,id:n,onBlur:t,value:a,children:i.map((function(e){return Object(E.jsx)("option",{value:e,children:e},e)}))})})]})})},oe=a(43),le=a.n(oe),de=function(e){var t=e.onChange,a=e.deliveryData;return Object(E.jsxs)("div",{className:le.a.deliveryAddress,children:[Object(E.jsx)(ce,{type:"text",id:"firstName",label:"First Name",onChange:t,value:a.firstName}),Object(E.jsx)(ce,{type:"text",id:"lastName",label:"Last Name",onChange:t,value:a.lastName}),Object(E.jsx)(ce,{placeholder:"e.g. 123 Sesame Street",type:"text",id:"street",label:"Street",onChange:t,value:a.street}),Object(E.jsx)(ce,{placeholder:"e.g. Unit #1",type:"text",id:"street2",label:"Street 2 (Optional)",onChange:t,value:a.street2}),Object(E.jsx)(ce,{type:"text",id:"city",label:"City",onChange:t,value:a.city}),Object(E.jsx)(se,{id:"state",label:"State",onChange:t,value:a.state,options:["Alabama","Alaska","American Samoa","Arizona","Arkansas","California","Colorado","Connecticut","Delaware","District of Columbia","Federated States of Micronesia","Florida","Georgia","Guam","Hawaii","Idaho","Illinois","Indiana","Iowa","Kansas","Kentucky","Louisiana","Maine","Marshall Islands","Maryland","Massachusetts","Michigan","Minnesota","Mississippi","Missouri","Montana","Nebraska","Nevada","New Hampshire","New Jersey","New Mexico","New York","North Carolina","North Dakota","Northern Mariana Islands","Ohio","Oklahoma","Oregon","Palau","Pennsylvania","Puerto Rico","Rhode Island","South Carolina","South Dakota","Tennessee","Texas","Utah","Vermont","Virgin Island","Virginia","Washington","West Virginia","Wisconsin","Wyoming"]}),Object(E.jsx)(ce,{placeholder:"e.g. 12345",type:"text",id:"zip",label:"Zip",onChange:t,value:a.zip})]})},ue=function(e){var t=e.onChange,a=e.billingData,n=e.useShippingForBilling;return Object(E.jsxs)("div",{className:le.a.deliveryAddress,children:[!n&&Object(E.jsxs)(E.Fragment,{children:[Object(E.jsx)(ce,{placeholder:"e.g. 123 Sesame Street",type:"text",id:"billingStreet",label:"Street",onChange:t,value:a.billingStreet}),Object(E.jsx)(ce,{placeholder:"e.g. Unit #1",type:"text",id:"billingStreet2",label:"Street 2 (Optional)",onChange:t,value:a.billingStreet2}),Object(E.jsx)(ce,{type:"text",id:"billingCity",label:"City",onChange:t,value:a.billingCity}),Object(E.jsx)(se,{id:"billingState",label:"State",onChange:t,value:a.billingState,options:["Alabama","Alaska","American Samoa","Arizona","Arkansas","California","Colorado","Connecticut","Delaware","District of Columbia","Federated States of Micronesia","Florida","Georgia","Guam","Hawaii","Idaho","Illinois","Indiana","Iowa","Kansas","Kentucky","Louisiana","Maine","Marshall Islands","Maryland","Massachusetts","Michigan","Minnesota","Mississippi","Missouri","Montana","Nebraska","Nevada","New Hampshire","New Jersey","New Mexico","New York","North Carolina","North Dakota","Northern Mariana Islands","Ohio","Oklahoma","Oregon","Palau","Pennsylvania","Puerto Rico","Rhode Island","South Carolina","South Dakota","Tennessee","Texas","Utah","Vermont","Virgin Island","Virginia","Washington","West Virginia","Wisconsin","Wyoming"]}),Object(E.jsx)(ce,{placeholder:"e.g. 12345",type:"text",id:"billingZip",label:"Zip",onChange:t,value:a.billingZip})]}),Object(E.jsx)(ce,{placeholder:"e.g. example@catalyte.io",type:"email",id:"email",label:"Email",onChange:t,value:a.email}),Object(E.jsx)(ce,{placeholder:"e.g. 555-555-5555",type:"text",id:"phone",label:"Phone",onChange:t,value:a.phone}),Object(E.jsx)(ce,{placeholder:"e.g. 1234567812345678",type:"text",id:"creditCard",label:"Credit Card",onChange:t,value:a.creditCard}),Object(E.jsx)(ce,{placeholder:"e.g. 555",type:"text",id:"cvv",label:"CVV",onChange:t,value:a.cvv}),Object(E.jsx)(ce,{placeholder:"e.g. 05/21",type:"text",id:"expiration",label:"Expiration",onChange:t,value:a.expiration}),Object(E.jsx)(ce,{type:"text",id:"cardholder",label:"Cardholder Name",onChange:t,value:a.cardholder})]})};function pe(){return(pe=Object(H.a)(z.a.mark((function e(t,a,n,r){return z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,q(I.a.PURCHASE_ENDPOINT,"POST",{products:t,deliveryAddress:a,billingAddress:n,creditCard:r}).then((function(e){return e.json()})).catch((function(){console.log("Failed to purchase")}));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var je=function(){var e=Object(o.f)(),t=D().state.products,a=r.a.useState({}),n=Object(l.a)(a,2),i=n[0],c=n[1],s=r.a.useState({}),d=Object(l.a)(s,2),u=d[0],p=d[1],j=r.a.useState(!1),h=Object(l.a)(j,2),b=h[0],O=h[1];return Object(E.jsxs)("div",{className:K.a.checkoutContainer,children:[Object(E.jsxs)("div",{className:"".concat(K.a.step," ").concat(K.a.order),children:[Object(E.jsx)("h3",{className:K.a.title,children:"1. Review Order"}),Object(E.jsx)(ne,{})]}),Object(E.jsxs)("div",{className:"".concat(K.a.step," ").concat(K.a.delivery),children:[Object(E.jsx)("h3",{className:K.a.title,children:"2. Delivery Address"}),Object(E.jsx)(de,{onChange:function(e){p(Object(P.a)(Object(P.a)({},u),{},Object(J.a)({},e.target.id,e.target.value)))},deliveryData:u}),Object(E.jsxs)("label",{htmlFor:"useSame",className:K.a.sameAddressText,children:[Object(E.jsx)("div",{className:K.a.useSameAddress,children:Object(E.jsx)("input",{id:"useSame",onChange:function(){O(!0)},type:"checkbox",value:b})}),"Same Billing Address"]})]}),Object(E.jsxs)("div",{className:"".concat(K.a.step," ").concat(K.a.payment),children:[Object(E.jsx)("h3",{className:K.a.title,children:"3. Billing Details"}),Object(E.jsx)(ue,{onChange:function(e){c(Object(P.a)(Object(P.a)({},i),{},Object(J.a)({},e.target.id,e.target.value)))},billingData:i,useShippingForBilling:b})]}),Object(E.jsx)("div",{className:K.a.payNow,children:Object(E.jsx)("button",{onClick:function(){var a=t.map((function(e){return{id:e.id,quantity:e.quantity}})),n={firstName:u.firstName,lastName:u.lastName,street:u.street,street2:u.street2,city:u.city,state:u.state,zip:u.zip},r={};b?(r.street=n.street,r.street2=n.street2,r.city=n.city,r.state=n.state,r.zip=n.zip):(r.street=i.billingStreet,r.street2=i.billingStreet2,r.city=i.billingCity,r.state=i.billingState,r.zip=i.billingZip),r.email=i.email,r.phone=i.phone,function(e,t,a,n){return pe.apply(this,arguments)}(a,n,r,{cardNumber:i.creditCard,cvv:i.cvv,expiration:i.expiration,cardholder:i.cardholder}).then((function(){return e.push("/confirmation")}))},type:"button",className:K.a.payButton,children:"Checkout"})})]})},he=function(){return Object(E.jsx)("div",{children:"Order success!"})},be=a(52),Oe=a.n(be),xe=function(){var e=Object(H.a)(z.a.mark((function e(t,a){var n;return z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,q("/users/".concat(t),"GET").then((function(e){if(200===e.status)return n=!0,e.json();throw 404===e.status&&(n=!1),new Error(e.statusText)})).then((function(e){a(e),document.cookie="user=".concat(JSON.stringify(e))})).catch((function(){}));case 2:return e.abrupt("return",n);case 3:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),me=function(){var e=Object(H.a)(z.a.mark((function e(t,a,n){return z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,q("/users","POST",t).then((function(e){if(e.ok)return e.json();throw new Error(e.statusText)})).then((function(e){a(e),document.cookie="user=".concat(JSON.stringify(e))})).catch((function(){n(!0)}));case 2:case"end":return e.stop()}}),e)})));return function(t,a,n){return e.apply(this,arguments)}}(),ge=function(){var e=Object(H.a)(z.a.mark((function e(t,a,n){return z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,xe(t.email,a);case 2:e.sent||me(t,a,n);case 4:case"end":return e.stop()}}),e)})));return function(t,a,n){return e.apply(this,arguments)}}(),fe=function(){var e=Object(n.useState)(""),t=Object(l.a)(e,2),a=t[0],r=t[1],i=Object(n.useState)(""),c=Object(l.a)(i,2),o=c[0],d=c[1],u=Object(n.useState)(!1),p=Object(l.a)(u,2),j=p[0],h=p[1];return Object(E.jsxs)("div",{children:[Object(E.jsx)(s.b,{to:"/home",children:"Home"}),Object(E.jsx)(s.b,{to:"/checkout",children:"Cart"}),a&&Object(E.jsx)("span",{children:a.firstName}),a&&Object(E.jsx)("span",{children:a.lastName}),o&&Object(E.jsx)("span",{children:o}),j&&Object(E.jsx)("span",{children:"Api Error"}),a?Object(E.jsx)(be.GoogleLogout,{clientId:I.a.GOOGLE_CLIENT_ID,buttonText:"Logout",onLogoutSuccess:function(){r(""),d("")},onFailure:function(){d("There was a problem logging out with Google. Please wait and try again later.")}}):Object(E.jsx)(Oe.a,{clientId:I.a.GOOGLE_CLIENT_ID,buttonText:"Login",onSuccess:function(e){sessionStorage.setItem("token",e.getAuthResponse().id_token);var t={email:e.profileObj.email,firstName:e.profileObj.givenName,lastName:e.profileObj.familyName};ge(t,r,h),d("")},onFailure:function(){d("There was a problem logging in with Google. Please wait and try again later.")},cookiePolicy:"single_host_origin"})]})},ve=function(){return Object(E.jsxs)(s.a,{children:[Object(E.jsx)(fe,{}),Object(E.jsxs)(o.c,{children:[Object(E.jsx)(o.a,{exact:!0,path:"/",render:function(){return Object(E.jsx)(W,{})}}),Object(E.jsx)(o.a,{exact:!0,path:"/checkout",render:function(){return Object(E.jsx)(je,{})}}),Object(E.jsx)(o.a,{exact:!0,path:"/confirmation",render:function(){return Object(E.jsx)(he,{})}})]})]})};c.a.render(Object(E.jsx)(r.a.StrictMode,{children:Object(E.jsx)(R,{children:Object(E.jsx)(ve,{})})}),document.getElementById("root"))}},[[79,1,2]]]);
//# sourceMappingURL=main.fb669d9d.chunk.js.map