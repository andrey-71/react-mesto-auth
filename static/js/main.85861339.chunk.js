(this["webpackJsonpreact-mesto-auth"]=this["webpackJsonpreact-mesto-auth"]||[]).push([[0],{17:function(e,t,n){},19:function(e,t,n){"use strict";n.r(t);var a=n(1),s=n.n(a),c=n(11),i=n.n(c),o=n(5),r=(n(17),n(12)),u=n(3),l=n(2),p=s.a.createContext(),d=n(0),h=function(e){return e.isLogin?e.children:Object(d.jsx)(l.a,{to:"/sign-in"})},j=n.p+"static/media/header-logo.5f3664ca.svg";var _=function(e){return Object(d.jsx)("header",{className:"header container__header",children:e.isLogged?Object(d.jsxs)("div",{className:"header__content header__content_type_login",children:[Object(d.jsx)("input",{id:"header__menu-toggle",className:"header__menu-toggle",type:"checkbox"}),Object(d.jsxs)("div",{className:"header__logo-container",children:[Object(d.jsx)("img",{className:"header__logo",src:j,alt:"\u041b\u043e\u0433\u043e\u0442\u0438\u043f \u041c\u0435\u0441\u0442\u043e"}),Object(d.jsx)("label",{className:"header__menu",htmlFor:"header__menu-toggle",children:Object(d.jsx)("span",{className:"header__menu-item"})})]}),Object(d.jsxs)("div",{className:"header__user",children:[Object(d.jsx)("p",{className:"header__user-email",children:e.emailUser}),Object(d.jsx)(o.b,{to:e.link,className:"header__user-signout",onClick:e.onSignOut,children:e.textAuth})]})]}):Object(d.jsxs)("div",{className:"header__content header__content_type_logout",children:[Object(d.jsx)("img",{className:"header__logo",src:j,alt:"\u041b\u043e\u0433\u043e\u0442\u0438\u043f \u041c\u0435\u0441\u0442\u043e"}),Object(d.jsx)(o.b,{to:e.link,className:"header__link",onClick:e.onSignOut,children:e.textAuth})]})})};var m=function(e){return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("h2",{className:"auth__title",children:"\u0412\u0445\u043e\u0434"}),Object(d.jsxs)("form",{className:"auth__form auth__form_type_".concat(e.isForm),name:"form-".concat(e.isForm),onSubmit:e.onSubmit,children:[Object(d.jsx)("input",{className:"auth__input",name:"emailUser",type:"email",placeholder:"Email",required:!0,onChange:e.onEmail,value:e.isEmail}),Object(d.jsx)("input",{className:"auth__input",name:"passwordUser",type:"password",placeholder:"\u041f\u0430\u0440\u043e\u043b\u044c",required:!0,onChange:e.onPassword,value:e.isPassword}),Object(d.jsx)("button",{className:"auth__submit-button",type:"submit",children:e.textButton})]})]})};var b=function(e){var t=s.a.useState(""),n=Object(u.a)(t,2),a=n[0],c=n[1],i=s.a.useState(""),o=Object(u.a)(i,2),r=o[0],l=o[1];return Object(d.jsxs)("div",{className:"auth auth_type_login container__auth",children:[Object(d.jsx)(m,{isForm:"login",isEmail:a,isPassword:r,onEmail:function(e){c(e.target.value)},onPassword:function(e){l(e.target.value)},onSubmit:function(t){t.preventDefault(),e.onLogin({email:a,password:r})},textButton:"\u0412\u043e\u0439\u0442\u0438"}),Object(d.jsx)("div",{className:"auth__sign-up"})]})};var f=function(e){var t=s.a.useState(""),n=Object(u.a)(t,2),a=n[0],c=n[1],i=s.a.useState(""),r=Object(u.a)(i,2),l=r[0],p=r[1];return Object(d.jsxs)("div",{className:"auth auth_type_registr container__auth",children:[Object(d.jsx)(m,{isForm:"registr",isEmail:a,isPassword:l,onEmail:function(e){c(e.target.value)},onPassword:function(e){p(e.target.value)},onSubmit:function(t){t.preventDefault(),e.onRegister({email:a,password:l})},textButton:"\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f"}),Object(d.jsxs)("div",{className:"auth__sign-in",children:[Object(d.jsx)("p",{className:"auth__registration-request-text",children:"\u0423\u0436\u0435 \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043d\u044b?"}),Object(d.jsx)(o.b,{to:"/sign-in",className:"auth__login-link",children:"\u0412\u043e\u0439\u0442\u0438"})]})]})};var O=function(e){var t=s.a.useContext(p),n=e.card.owner._id===t._id,a="card__delete-button ".concat(n?"card__delete-button_visible":"card__delete-button_hidden"),c=e.card.likes.some((function(e){return e._id===t._id})),i="card__like".concat(c?" card__like_active":"");return Object(d.jsxs)("figure",{className:"card",children:[Object(d.jsx)("img",{src:e.link,alt:e.name,className:"card__image",onClick:function(){e.onCardClick(e.card)}}),Object(d.jsx)("button",{className:a,type:"button",onClick:function(){e.onCardDelete(e.card)}}),Object(d.jsxs)("figcaption",{className:"card__info",children:[Object(d.jsx)("h2",{className:"card__caption",children:e.name}),Object(d.jsxs)("div",{className:"card__like-section",children:[Object(d.jsx)("button",{className:i,type:"button",onClick:function(){e.onCardLike(e.card)}}),Object(d.jsx)("p",{className:"card__like-number",children:e.likes})]})]})]})};var v=function(e){var t=s.a.useContext(p);return Object(d.jsxs)("main",{className:"content container__content",children:[Object(d.jsxs)("section",{className:"profile",children:[Object(d.jsxs)("div",{className:"profile__user-data",children:[Object(d.jsx)("button",{className:"profile__edit-avatar",type:"button",onClick:e.onEditAvatar,children:Object(d.jsx)("img",{src:t.avatar,alt:"\u0424\u043e\u0442\u043e\u0433\u0440\u0430\u0444\u0438\u044f \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f",className:"profile__avatar"})}),Object(d.jsxs)("div",{className:"profile__info",children:[Object(d.jsx)("h1",{className:"profile__name",children:t.name}),Object(d.jsx)("p",{className:"profile__job",children:t.about}),Object(d.jsx)("button",{className:"profile__edit-button",type:"button",onClick:e.onEditProfile})]})]}),Object(d.jsx)("button",{className:"profile__add-button",type:"button",onClick:e.onAddPlace})]}),Object(d.jsx)("section",{className:"card-gallery content__card-gallery",children:e.cards.map((function(t){return Object(d.jsx)(O,{card:t,name:t.name,link:t.link,likes:t.likes.length,onCardClick:e.onCardClick,onCardLike:e.onCardLike,onCardDelete:e.onCardDelete},t._id)}))})]})};var x=function(){return Object(d.jsx)("footer",{className:"footer container__footer",children:Object(d.jsx)("h2",{className:"footer__copyright",children:"\xa9 2021 Mesto Russia"})})};var g=function(e){return Object(d.jsx)("div",{className:"popup ".concat(e.isOpen?"popup_active":""," popup_type_").concat(e.name),onMouseDown:e.onPopupClick,children:Object(d.jsxs)("div",{className:"popup__container",children:[Object(d.jsx)("h2",{className:"popup__title",children:e.title}),Object(d.jsxs)("form",{className:"popup__form popup__form_type_".concat(e.name),name:"form-".concat(e.name),onSubmit:e.onSubmit,children:[e.children,Object(d.jsx)("button",{className:"popup__submit-button",type:"submit",children:e.isLoading?"\u0421\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u0438\u0435...":e.textButton})]}),Object(d.jsx)("button",{className:"popup__close",type:"button",onClick:e.onClose})]})})};var k=function(e){var t=s.a.useContext(p),n=s.a.useState(""),a=Object(u.a)(n,2),c=a[0],i=a[1],o=s.a.useState(""),r=Object(u.a)(o,2),l=r[0],h=r[1];return s.a.useEffect((function(){e.isOpen?(i(t.name),h(t.about)):(i(""),h(""))}),[e.isOpen,t]),Object(d.jsxs)(g,{name:"edit-profile",title:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u044c",textButton:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",isOpen:e.isOpen,isLoading:e.isLoading,onSubmit:function(t){t.preventDefault(),e.onUpdateUser({name:c,about:l})},onPopupClick:e.onPopupClick,onClose:e.onClose,children:[Object(d.jsxs)("label",{className:"popup__input-element",children:[Object(d.jsx)("input",{type:"text",placeholder:"\u0412\u0430\u0448\u0435 \u0438\u043c\u044f",className:"popup__input popup__input_type_profile-name",id:"input-profile-name",name:"nameUser",value:c,onChange:function(e){i(e.target.value)},required:!0,minLength:2,maxLength:40}),Object(d.jsx)("span",{className:"popup__input-error",id:"input-profile-name-error"})]}),Object(d.jsxs)("label",{className:"popup__input-element",children:[Object(d.jsx)("input",{type:"text",placeholder:"\u0427\u0435\u043c \u0437\u0430\u043d\u0438\u043c\u0430\u0435\u0442\u0435\u0441\u044c",className:"popup__input popup__input_type_profile-job",id:"input-profile-job",name:"infoUser",value:l,onChange:function(e){h(e.target.value)},required:!0,minLength:2,maxLength:200}),Object(d.jsx)("span",{className:"popup__input-error",id:"input-profile-job-error"})]})]})};var C=function(e){var t=s.a.useRef("");return s.a.useEffect((function(){e.isOpen||(t.current.value="")}),[e.isOpen]),Object(d.jsx)(g,{name:"edit-avatar",title:"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u0430\u0432\u0430\u0442\u0430\u0440",textButton:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",isOpen:e.isOpen,isLoading:e.isLoading,onSubmit:function(n){n.preventDefault(),e.onUpdateAvatar({avatar:t.current.value})},onPopupClick:e.onPopupClick,onClose:e.onClose,children:Object(d.jsxs)("label",{className:"popup__input-element",children:[Object(d.jsx)("input",{type:"url",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",className:"popup__input popup__input_type_avatar-link",id:"input-avatar-link",name:"avatarUser",ref:t,required:!0}),Object(d.jsx)("span",{className:"popup__input-error",id:"input-avatar-link-error"})]})})};var N=function(e){var t=Object(a.useState)(""),n=Object(u.a)(t,2),s=n[0],c=n[1],i=Object(a.useState)(""),o=Object(u.a)(i,2),r=o[0],l=o[1];return Object(a.useEffect)((function(){e.isOpen||(c(""),l(""))}),[e.isOpen]),Object(d.jsxs)(g,{name:"add-card",title:"\u041d\u043e\u0432\u043e\u0435 \u043c\u0435\u0441\u0442\u043e",textButton:"\u0421\u043e\u0437\u0434\u0430\u0442\u044c",isOpen:e.isOpen,isLoading:e.isLoading,onSubmit:function(t){t.preventDefault(),e.onAddPlace({name:s,link:r})},onPopupClick:e.onPopupClick,onClose:e.onClose,children:[Object(d.jsxs)("label",{className:"popup__input-element",children:[Object(d.jsx)("input",{type:"text",placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",className:"popup__input popup__input_type_card-name",id:"input-card-name",name:"name",value:s,onChange:function(e){c(e.target.value)},required:!0,minLength:2,maxLength:30}),Object(d.jsx)("span",{className:"popup__input-error",id:"input-card-name-error"})]}),Object(d.jsxs)("label",{className:"popup__input-element",children:[Object(d.jsx)("input",{type:"url",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",className:"popup__input popup__input_type_card-link",id:"input-card-link",name:"link",value:r,onChange:function(e){l(e.target.value)},required:!0}),Object(d.jsx)("span",{className:"popup__input-error",id:"input-card-link-error"})]})]})};var y=function(e){return Object(d.jsx)(g,{name:"delete-card",title:"\u0412\u044b \u0443\u0432\u0435\u0440\u0435\u043d\u044b?",textButton:"\u0414\u0430",isOpen:e.isOpen,isLoading:e.isLoading,onSubmit:function(t){t.preventDefault(),e.onDeleteCard(e.isOpen)},onPopupClick:e.onPopupClick,onClose:e.onClose})};var S=function(e){return Object(d.jsx)("div",{className:"popup ".concat(e.card?"popup_active":""," popup_type_card-view"),onClick:e.onPopupClick,children:Object(d.jsxs)("div",{className:"popup__card-view-container",children:[Object(d.jsx)("img",{src:e.card?e.card.link:"",alt:e.card?e.card.name:"",className:"popup__card-view-photo"}),Object(d.jsx)("p",{className:"popup__card-view-caption",children:e.card?e.card.name:""}),Object(d.jsx)("button",{className:"popup__close",type:"button",onClick:e.onClose})]})})};var P=function(e){return Object(d.jsx)("div",{className:"popup ".concat(e.isOpen?"popup_active":""," popup_type_info-tooltip"),onMouseDown:e.onPopupClick,children:Object(d.jsxs)("div",{className:"popup__container",children:[Object(d.jsx)("div",{className:"popup__image popup__image_type_".concat(e.status?"success":"error")}),Object(d.jsx)("p",{className:"popup__status-text",children:e.status?"\u0412\u044b \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043b\u0438\u0441\u044c!":"\u0427\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a! \u041f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u0435\u0449\u0451 \u0440\u0430\u0437."}),Object(d.jsx)("button",{className:"popup__close",type:"button",onClick:e.onClose})]})})},L=n(8),U=n(9),R=new(function(){function e(t){Object(L.a)(this,e),this._serverAuthUrl=t}return Object(U.a)(e,[{key:"register",value:function(e){var t=this;return fetch("".concat(this._serverAuthUrl,"/signup"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:e.email,password:e.password})}).then((function(e){return t._handleResult(e)}))}},{key:"authorize",value:function(e){var t=this;return fetch("".concat(this._serverAuthUrl,"/signin"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:e.email,password:e.password})}).then((function(e){return t._handleResult(e)}))}},{key:"checkToken",value:function(e){var t=this;return fetch("".concat(this._serverAuthUrl,"/users/me"),{headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(e)}}).then((function(e){return t._handleResult(e)}))}},{key:"_handleResult",value:function(e){return e.ok?e.json():Promise.reject('"'.concat(e.status," ").concat(e.statusText,'"'))}}]),e}())("https://auth.nomoreparties.co"),w=new(function(){function e(t){Object(L.a)(this,e),this._serverUrl=t.serverUrl,this._receiveRequestHeaders=t.receiveRequestHeaders,this._sendRequestHeaders=t.sendRequestHeaders}return Object(U.a)(e,[{key:"getAppInfo",value:function(){return Promise.all([this._getUserInfo(),this._getInitialCards()])}},{key:"_getUserInfo",value:function(){var e=this;return fetch("".concat(this._serverUrl,"/users/me"),{headers:this._receiveRequestHeaders}).then((function(t){return e._handleResult(t)}))}},{key:"_getInitialCards",value:function(){var e=this;return fetch("".concat(this._serverUrl,"/cards"),{headers:this._receiveRequestHeaders}).then((function(t){return e._handleResult(t)}))}},{key:"setUserInfo",value:function(e){var t=this;return fetch("".concat(this._serverUrl,"/users/me"),{method:"PATCH",headers:this._sendRequestHeaders,body:JSON.stringify({name:e.name,about:e.about})}).then((function(e){return t._handleResult(e)}))}},{key:"setUserAvatar",value:function(e){var t=this;return fetch("".concat(this._serverUrl,"/users/me/avatar"),{method:"PATCH",headers:this._sendRequestHeaders,body:JSON.stringify({avatar:e.avatar})}).then((function(e){return t._handleResult(e)}))}},{key:"setNewCard",value:function(e){var t=this;return fetch("".concat(this._serverUrl,"/cards"),{method:"POST",headers:this._sendRequestHeaders,body:JSON.stringify({name:e.name,link:e.link})}).then((function(e){return t._handleResult(e)}))}},{key:"deleteCard",value:function(e){var t=this;return fetch("".concat(this._serverUrl,"/cards/").concat(e._id),{method:"DELETE",headers:this._receiveRequestHeaders}).then((function(e){return t._handleResult(e)}))}},{key:"setLikeCard",value:function(e,t){var n=this;return t?fetch("".concat(this._serverUrl,"/cards/likes/").concat(e._id),{method:"PUT",headers:this._sendRequestHeaders}).then((function(e){return n._handleResult(e)})):fetch("".concat(this._serverUrl,"/cards/likes/").concat(e._id),{method:"DELETE",headers:this._receiveRequestHeaders}).then((function(e){return n._handleResult(e)}))}},{key:"_handleResult",value:function(e){return e.ok?e.json():Promise.reject('"'.concat(e.status," ").concat(e.statusText,'"'))}}]),e}())({serverUrl:"https://mesto.nomoreparties.co/v1/cohort-29",receiveRequestHeaders:{authorization:"47bf35c3-c8a1-495a-9dd2-8537c372d068"},sendRequestHeaders:{authorization:"47bf35c3-c8a1-495a-9dd2-8537c372d068","Content-Type":"application/json"}});var E=function(){var e=Object(l.g)(),t=s.a.useState({}),n=Object(u.a)(t,2),a=n[0],c=n[1],i=s.a.useState([]),o=Object(u.a)(i,2),j=o[0],m=o[1],O=s.a.useState(!1),g=Object(u.a)(O,2),L=g[0],U=g[1],E=s.a.useState(!1),A=Object(u.a)(E,2),q=A[0],T=A[1],D=s.a.useState(!1),H=Object(u.a)(D,2),F=H[0],I=H[1],B=s.a.useState(!1),J=Object(u.a)(B,2),z=J[0],M=J[1],G=s.a.useState(!1),K=Object(u.a)(G,2),Q=K[0],V=K[1],W=s.a.useState(null),X=Object(u.a)(W,2),Y=X[0],Z=X[1],$=s.a.useState(!1),ee=Object(u.a)($,2),te=ee[0],ne=ee[1],ae=s.a.useState(!1),se=Object(u.a)(ae,2),ce=se[0],ie=se[1],oe=s.a.useState(!1),re=Object(u.a)(oe,2),ue=re[0],le=re[1],pe=s.a.useState(""),de=Object(u.a)(pe,2),he=de[0],je=de[1];s.a.useEffect((function(){var e=localStorage.getItem("token");e&&R.checkToken(e).then((function(e){e&&(le(!0),je(e.data.email))})).catch((function(e){return console.log("\u0422\u043e\u043a\u0435\u043d \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d: ".concat(e))}))}),[]),s.a.useEffect((function(){w.getAppInfo().then((function(e){var t=Object(u.a)(e,2),n=t[0],a=t[1];c(n),m(a)})).catch((function(e){return console.log("\u041f\u0440\u0438 \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0435 \u0434\u0430\u043d\u043d\u044b\u0445 \u0441 \u0441\u0435\u0440\u0432\u0435\u0440\u0430 \u043f\u0440\u043e\u0438\u0437\u043e\u0448\u043b\u0430 \u043e\u0448\u0438\u0431\u043a\u0430: ".concat(e))}))}),[]);var _e=function(){U(!1),T(!1),I(!1),M(!1),V(!1),Z(null)};s.a.useEffect((function(){if(L||q||F||z||Q||Y){var e=function(e){"Escape"===e.key&&_e()};return document.addEventListener("keyup",e),function(){document.removeEventListener("keyup",e)}}}),[L,q,F,z,Q,Y]);var me=function(e){e.target.classList.contains("popup")&&_e()};return Object(d.jsx)(p.Provider,{value:a,children:Object(d.jsxs)("div",{className:"container",children:[Object(d.jsxs)(l.d,{children:[Object(d.jsx)(l.b,{path:"/sign-in",element:ue?Object(d.jsx)(l.a,{to:"/"}):Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(_,{link:"/sign-up",textAuth:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"}),Object(d.jsx)(b,{onLogin:function(t){R.authorize(t).then((function(n){n.token&&(localStorage.setItem("token",n.token),le(!0),je(t.email),e("/"))})).catch((function(e){return console.log("\u041f\u0440\u0438 \u0430\u0432\u0442\u043e\u0440\u0438\u0437\u0430\u0446\u0438\u0438 \u043f\u0440\u043e\u0438\u0437\u043e\u0448\u043b\u0430 \u043e\u0448\u0438\u0431\u043a\u0430: ".concat(e))}))}})]})}),Object(d.jsx)(l.b,{path:"/sign-up",element:ue?Object(d.jsx)(l.a,{to:"/"}):Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(_,{link:"/sign-in",textAuth:"\u0412\u043e\u0439\u0442\u0438"}),Object(d.jsx)(f,{onRegister:function(t){R.register(t).then((function(){ie(!0),V(!0),setTimeout((function(){e("/sign-in")}),2e3)})).catch((function(e){ie(!1),V(!0),console.log("\u041f\u0440\u0438 \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u0438 \u043f\u0440\u043e\u0438\u0437\u043e\u0448\u043b\u0430 \u043e\u0448\u0438\u0431\u043a\u0430: ".concat(e))}))},isRegistered:ce,isOpen:Q,onClose:_e,onPopupClick:me}),Object(d.jsx)(P,{status:ce,isOpen:Q,onClose:_e,onPopupClick:me})]})}),Object(d.jsx)(l.b,{path:"/",element:Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(_,{link:"sign-in",emailUser:he,textAuth:"\u0412\u044b\u0439\u0442\u0438",onSignOut:function(){localStorage.removeItem("token"),le(!1)},isLogged:ue}),Object(d.jsxs)(h,{isLogin:ue,children:[Object(d.jsx)(v,{onEditAvatar:function(){U(!0)},onEditProfile:function(){T(!0)},onAddPlace:function(){I(!0)},onCardClick:function(e){Z(e)},onCardLike:function(e){var t=e.likes.some((function(e){return e._id===a._id}));w.setLikeCard(e,!t).then((function(t){m((function(n){return n.map((function(n){return n._id===e._id?t:n}))}))})).catch((function(e){return console.log("\u041f\u0440\u0438 \u043f\u043e\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0435/\u0441\u043d\u044f\u0442\u0438\u0438 \u043b\u0430\u0439\u043a \u043f\u0440\u043e\u0438\u0437\u043e\u0448\u043b\u0430 \u043e\u0448\u0438\u0431\u043a\u0430: ".concat(e))}))},onCardDelete:function(e){M(e)},cards:j}),Object(d.jsx)(k,{isOpen:q,isLoading:te,onUpdateUser:function(e){ne(!0),w.setUserInfo(e).then((function(e){c(e),_e()})).catch((function(e){return console.log("\u041f\u0440\u0438 \u043e\u0442\u043f\u0440\u0430\u0432\u043a\u0435 \u0434\u0430\u043d\u043d\u044b\u0445 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f \u043f\u0440\u043e\u0438\u0437\u043e\u0448\u043b\u0430 \u043e\u0448\u0438\u0431\u043a\u0430: ".concat(e))})).finally((function(){return ne(!1)}))},onPopupClick:me,onClose:_e}),Object(d.jsx)(C,{isOpen:L,isLoading:te,onUpdateAvatar:function(e){ne(!0),w.setUserAvatar(e).then((function(e){c(e),_e()})).catch((function(e){return console.log("\u041f\u0440\u0438 \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u0438 \u0430\u0432\u0430\u0442\u0430\u0440\u0430 \u043f\u0440\u043e\u0438\u0437\u043e\u0448\u043b\u0430 \u043e\u0448\u0438\u0431\u043a\u0430: ".concat(e))})).finally((function(){return ne(!1)}))},onPopupClick:me,onClose:_e}),Object(d.jsx)(N,{isOpen:F,isLoading:te,onAddPlace:function(e){ne(!0),w.setNewCard(e).then((function(e){j&&(m([e].concat(Object(r.a)(j))),_e())})).catch((function(e){return console.log("\u041f\u0440\u0438 \u043e\u0442\u043f\u0440\u0430\u0432\u043a\u0435 \u0434\u0430\u043d\u043d\u044b\u0445 \u043d\u043e\u0432\u043e\u0439 \u043a\u0430\u0440\u0442\u043e\u0447\u043a\u0438 \u043f\u0440\u043e\u0438\u0437\u043e\u0448\u043b\u0430 \u043e\u0448\u0438\u0431\u043a\u0430: ".concat(e))})).finally((function(){return ne(!1)}))},onPopupClick:me,onClose:_e}),Object(d.jsx)(y,{isOpen:z,isLoading:te,onDeleteCard:function(e){ne(!0),w.deleteCard(e).then((function(){m((function(t){return t.filter((function(t){return t._id!==e._id}))})),_e()})).catch((function(e){return console.log("\u041f\u0440\u0438 \u0443\u0434\u0430\u043b\u0435\u043d\u0438\u0438 \u043a\u0430\u0440\u0442\u043e\u0447\u043a\u0438 \u043f\u0440\u043e\u0438\u0437\u043e\u0448\u043b\u0430 \u043e\u0448\u0438\u0431\u043a\u0430: ".concat(e))})).finally((function(){return ne(!1)}))},onPopupClick:me,onClose:_e}),Object(d.jsx)(S,{card:Y,onPopupClick:me,onClose:_e})]})]})})]}),Object(d.jsx)(x,{})]})})},A=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,20)).then((function(t){var n=t.getCLS,a=t.getFID,s=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),a(e),s(e),c(e),i(e)}))};i.a.render(Object(d.jsx)(s.a.StrictMode,{children:Object(d.jsx)(o.a,{children:Object(d.jsx)(E,{})})}),document.getElementById("root")),A()}},[[19,1,2]]]);
//# sourceMappingURL=main.85861339.chunk.js.map