!function(e,n){if("object"==typeof exports&&"object"==typeof module)module.exports=n();else if("function"==typeof define&&define.amd)define([],n);else{var t=n();for(var r in t)("object"==typeof exports?exports:e)[r]=t[r]}}(this,function(){return webpackJsonp([0],{109:function(e,n){},110:function(e,n){},111:function(e,n){e.exports='<md-toolbar class="md-accent md-hue-1 bi-navbar" ng-show="$ctrl.vis">\n  <div class="md-toolbar-tools">\n    <div class="left">\n      <md-button ng-click="$ctrl.toggleMenu()" class="md-icon-button">\n        <md-icon>menu</md-icon>\n      </md-button>\n    </div>\n    <h3 class="bc-title" ui-sref-active="nav-active" ui-sref="overview" flex="">\n      CORE\n    </h3>\n    <div class="right">\n      <span class="additional-icons"></span>\n      <md-button class="md-icon-button" ng-click="$ctrl.logout()">\n        <md-icon>power_settings_new</md-icon>\n      </md-button>\n    </div>\n  </div>\n  <md-progress-linear class="md-primary" ng-disabled="$ctrl.hideLoader" md-mode="indeterminate"></md-progress-linear>\n\n</md-toolbar>\n\n<md-sidenav class="md-sidenav-left" md-component-id="md-sidenav-left" md-whiteframe="4" layout="column">\n  <md-toolbar class="md-accent md-hue-1 bi-navbar">\n  </md-toolbar>\n\n  <md-list class="bc-sidenav-header">\n    <md-list-item class="bc-user">\n      <img style="margin-left: 10px;" class="md-avatar" alt="User" ng-src="data:image/jpeg;base64,/9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAAA8AAD/4QMvaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjYtYzEzOCA3OS4xNTk4MjQsIDIwMTYvMDkvMTQtMDE6MDk6MDEgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE3IChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDowQ0YyQzc3NzFCOTMxMUU3QTFENEYwRjkyQkUzQzAzMyIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDowQ0YyQzc3ODFCOTMxMUU3QTFENEYwRjkyQkUzQzAzMyI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjBDRjJDNzc1MUI5MzExRTdBMUQ0RjBGOTJCRTNDMDMzIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjBDRjJDNzc2MUI5MzExRTdBMUQ0RjBGOTJCRTNDMDMzIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+/+4ADkFkb2JlAGTAAAAAAf/bAIQABgQEBAUEBgUFBgkGBQYJCwgGBggLDAoKCwoKDBAMDAwMDAwQDA4PEA8ODBMTFBQTExwbGxscHx8fHx8fHx8fHwEHBwcNDA0YEBAYGhURFRofHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8f/8AAEQgAZABkAwERAAIRAQMRAf/EAHMAAQABBQEAAAAAAAAAAAAAAAABAgMFBgcEAQEAAAAAAAAAAAAAAAAAAAAAEAABAwIBCwIEBQUBAAAAAAABAAIDEQQSITFRYXGBIjJCBQZBobHBUhORYnKSFKKyI1MkNBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8A6e5zsRynOgjE7SUDE7SUDE7SUDE7SUEsErzSMOedDQSfZBcdb3jBV8MrRpLHAfBBaxHSgYnaSgYnaSgYnaSgYnaSgqxOwZznQUu5jtQQgICDYfGfGm9wH8u7qLQGjIxkLyM9T9KDd7e1t7eMRwRNjYMzWgAeyC5QIMV3fxvt/cWOOAQ3PTOwUNfzaUHPru1mtLmS2nFJYjR2g6CNRQWUBAQVdG9BDuY7UEICCQxz3NY3meQ0bXGiDqtnbstrSKBgo2NgaBsCC8gICDTvPLRrZrW7aKF4MT9dMoQaogICCro3oIdzHaghAQXbZwbdQOOYSMJ/cEHVwagHSgICAg1fz1w/h2jfUyk/g0oNLQEBBV0b0EO5jtQQgIBrQ0z+iDqXarpt1263naa442k7aZUHqQEBBpHnN0JO4QW4NfssLnDW85PYINaQEBBV0b0EO5jtQQgICDbfCe7sbi7bM6hJL7cn1rzN+aDb0BBZvbyCztpLmd2GOMVJ06gg5he3cl5dy3UnNK4upoHoNwQWEBAQVdG9BDuY7UEIGrOTmCDM2HineLsBxYLeI9Uuen6RlQZG88IngtmS2U7pbuPicDw1p9GghBFp5nfWf/P3O2c97MhfyP3g5Cg9Mnn1mG/47aRz/QOLQEGPwd98muGl7fs2TTUGhDG7K8zkHovvBZm8VjOHj/XLkO5wQa9e9uvrF+C6hdETyuOVp2FB5kBBV0b0EO5jtQQg2nwntUc0kncJmhwiOCAHNizud8gg3NAQWp7S2nFJomSD8zQfigsRdm7VE7Ey0iDtOEH4oPYAAAAKAZgEBB57+xt761ktp24mPFNYPoRrCDl9xBJb3EtvJzxOLHbjn3oLaCro3oIdzHaghB0fxe3EHY7UUoXt+47a84vmgyqAgICAgICDn3mFuIe+SOAoJmNk38p/tQYRBV0b0EO5jtQQ7KCBnKDq9pEIrWKMZAxjWjcEF1AQEBAQEBBpvnsQFxZzermvYdxBHxQaqgq6N6CHcx2oANCDnoQabCg6lYdxsryFr7aZsgoKgHKNRGcIPSgICAgICASAKk0GkoNK827hZ3MltDbyNlfEXGQtNQKgClR6oNYQVdG9BDuY7UEIJY5zHB7HFjxmc0kH8Qgydt5N3y3oG3JkaOmUB/vn90GTg87vmkffto5B6lhLD74kHrZ57bHntJB+lzT8aIKz55Y0yW0xOvCPmgsS+fGh+zZ5fQvf8gCgx9x5p3mUUj+3ANLW4j/USPZBirruXcLv/wBNxJKPpJo39ooEHmQEFXRvQS7BU586CODWgcGtA4NaBwa0Dg1oHBrQODWgcGtA4NaBwa0Dg1oKuDB650H/2Q=="\n      />\n      <div class="md-list-item-text">\n        <p class="bc-user-name">{{::$ctrl.profile.realname}}</p>\n        <p class="bc-user-mail">{{::$ctrl.profile.email}}</p>\n      </div>\n    </md-list-item>\n  </md-list>\n  <div id="sidebar">\n\n  </div>\n\n</md-sidenav>\n'},112:function(e,n){e.exports='<div layout="column" layout-align="center center" layout-fill="layout-fill" id="login">\n  <div class="login-box md-whiteframe-z2" layout="column">\n    <form name="form" novalidate ng-submit="$ctrl.submit($event)">\n      <md-content class="md-padding" layout="column" ng-if="$ctrl.success.message == undefined">\n        <h2>\n          Passwort zurücksetzen\n        </h2>\n        <md-input-container>\n          <label>Ihre Email Adresse</label>\n          <input type="email" ng-model="$ctrl.user.email" name="email" ng-pattern="/^.+@.+\\..+$/" required ng-minlength="5">\n\n          <div ng-messages="form.email.$error" role="alert" ng-if="form.email.$dirty">\n            <div ng-message="required">Geben Sie eine Email Adresse ein.</div>\n            <div ng-message="email">Geben Sie eine valide Email Adresse ein.</div>\n            <div ng-message="minlength">Das Passwort muss aus mindestens 5 Zeichen bestehen.</div>\n          </div>\n          <div class="bi-alert md-block" ng-if="$ctrl.error" role="alert">\n            <span class="md-body-1">{{$ctrl.error}}</span>\n          </div>\n        </md-input-container>\n        <div layout="column">\n          <md-button type="submit" class="md-raised md-primary" ng-disabled="form.$invalid">ANFORDERN</md-button>\n        </div>\n        <br>\n        <md-button class="bi-reset-pw" ui-sref="login" md-no-ink> Zurück zum login</md-button>\n      </md-content>\n      <md-content ng-if="$ctrl.success.message" class="md-padding" layout="column" >\n        <p>$ctrl.success.message</p>\n        <md-button class="bi-reset-pw" ui-sref="login" md-no-ink> Zurück zum login</md-button>\n      </md-content>\n    </form>\n  </div>\n  <div class="bi-copyright"><span>&copy; 2017</span></div>\n</div>\n'},113:function(e,n){e.exports='<div layout="column" layout-align="center center" layout-fill="layout-fill" id="login">\n  <h1 class="bi-powered">POWERED BY CORE</h1>\n  <div class="login-box md-whiteframe-z2" layout="column">\n    <form name="form" novalidate="">\n      <md-content class="md-padding" layout="column">\n        <h1 class="bi-headline size-xl">\n          Brandcube 2.0\n        </h1>\n        <md-input-container>\n          <label>Nutzername</label>\n          <input type="text" ng-model="$ctrl.user.username" name="username" required="" ng-minlength="3">\n          <div ng-messages="form.username.$error" role="alert" ng-show="form.username.$dirty">\n            <div ng-message="required">Geben Sie einen Namen ein.</div>\n            <div ng-message="minlength">Der Name muss aus mindestens 3 Zeichen bestehen.</div>\n          </div>\n        </md-input-container>\n        <md-input-container>\n          <label>Passwort</label>\n          <input ng-model="$ctrl.user.password" name="password" type="password" required="" ng-minlength="3">\n\n          <div ng-messages="form.password.$error" role="alert" ng-show="form.password.$dirty">\n            <div ng-message="required">Geben Sie ein Passwort ein.</div>\n            <div ng-message="minlength">Das Passwort muss aus mindestens 3 Zeichen bestehen.</div>\n          </div>\n\n          <div class="bi-alert md-block" ng-if="$ctrl.error" role="alert">\n            <span class="md-body-1">Bitte überprüfen Sie ihren Namen und das Passwort.</span>\n          </div>\n        </md-input-container>\n        <div layout="column">\n          <md-button type="submit" class="md-raised md-primary" ng-disabled="form.$invalid" ng-click="$ctrl.submit()">LOGIN</md-button>\n        </div>\n        <br>\n        <md-button class="bi-reset-pw" ui-sref="forgot-password" md-no-ink="">Passwort zurücksetzen</md-button>\n      </md-content>\n    </form>\n  </div>\n  <div class="bi-copyright"><span>&copy; 2017</span></div>\n</div>\n'},114:function(e,n){e.exports='<div layout="column" layout-align="center center" layout-fill="layout-fill" id="login">\n  <div class="login-box md-whiteframe-z2" layout="column">\n    <form name="form" novalidate ng-submit="$ctrl.submit($event)">\n      <md-content class="md-padding" layout="column">\n        <h2>\n          Neues Passwort\n        </h2>\n        <md-input-container class="md-block">\n          <label>Neues Passwort</label>\n          <input ng-model="$ctrl.user.password" name="password" type="password" required ng-minlength="3" ng-disabled="$ctrl.error">\n          <div ng-messages="form.password.$error" role="alert" ng-if="form.password.$dirty">\n            <div ng-message="required">Geben Sie ein neues Passwort ein.</div>\n            <div ng-message="minlength">Das Passwort muss aus mindestens 6 Zeichen bestehen.</div>\n          </div>\n        </md-input-container>\n        <md-input-container class="md-block">\n          <label>Passwort wiederholen</label>\n          <input ng-model="$ctrl.confirmPassword" name="confirmPassword" type="password" required ng-disabled="$ctrl.error" ng-minlength="3"\n          compare-to="$ctrl.user.password">\n          <div ng-messages="form.confirmPassword.$error" role="alert" ng-if="form.confirmPassword.$dirty">\n            <div ng-message="required">Geben Sie ein neues Passwort ein.</div>\n            <div ng-message="minlength">Das Passwort muss aus mindestens 6 Zeichen bestehen.</div>\n            <div ng-message="compareTo">Die Passwörter müssen übereinstimmen.</div>\n\n          </div>\n          <br>\n          <div class="c-alert md-block" ng-if="$ctrl.error">\n            <span class="md-body-2">{{$ctrl.error}}</span><br>\n            <a href="#" ui-sref="forgot-password">Create new token</a>\n          </div>\n        </md-input-container>\n\n        <md-button type="submit" class="md-raised md-primary" ng-disabled="form.$invalid || $ctrl.error">Weiter\n        </md-button>\n        \x3c!----\x3e\n      </md-content>\n\n    </form>\n  </div>\n  <div class="bi-copyright"><span>&copy; 2017</span></div>\n</div>\n'},115:function(e,n,t){"use strict";function r(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(n,"__esModule",{value:!0});var o=function(){function e(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(n,t,r){return t&&e(n.prototype,t),r&&e(n,r),n}}();t(109);var i=void 0,a=void 0,s=void 0,u=void 0,l=void 0,c=void 0,d=function(){function e(n,t,o,a,d){r(this,e),i=n,s=t,u=o,l=a,c=d}return e.$inject=["$mdSidenav","$transitions","BIAuthEnv","BIAuthService","$state"],o(e,[{key:"toggleMenu",value:function(){i("md-sidenav-left").toggle()}},{key:"logout",value:function(){l.logout().then(function(){c.go("login")})}},{key:"$onInit",value:function(){var e=this;this.profile=void 0;var n=u.noAuthRoutes;a=s.onStart({to:"*",from:"*"},function(t){i("md-sidenav-left").close(),e.currentState=t.to().name;var r=-1===n.indexOf(e.currentState);e.vis=r,angular.isUndefined(e.profile)&&l.profile().then(function(n){e.profile=n},function(){e.profile=void 0})})}},{key:"$onDestroy",value:function(){a()}}]),e}();n.default=d},116:function(e,n,t){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(){var e={basePath:"http://localhost:5050",noAuthRoutes:["login","forgot-password","reset-password"],mainRoute:void 0,errors:{unknown:"An unknown error occurred."},title:"CORE",sidebarTemplate:"./app/components/navbar/sidenav.template.html",internalName:"core"};return{set:function(n){Object.assign(e,n)},$get:function(){return e}}}function i(e,n,t,r,o){var i=function(){return o.noAuthRoutes.join("|").indexOf(r.current.name)>-1&&r.current.name.length>1};return{request:function(n){return e.$broadcast(t.LOAD,!0),n},response:function(n){return e.$broadcast(t.LOAD,!1),n},responseError:function(r){return e.$broadcast(t.LOAD,!1),401===r.status&&!1===i()?(e.$broadcast(t.UNAUTHORIZED),n(function(){return null})):n.reject(r)}}}function a(){return{restrict:"A",link:function(e,n){n[0].setAttribute("data-after","POWERED BY CORE")}}}function s(){return{restrict:"E",link:function(){},template:'<div layout="row" layout-align="center center" layout-padding>      <div>        <md-icon>          build        </md-icon>      </div>      <div>Das System befindet sich im Wartungsmodus</div>      <md-button>        Nochmal versuchen      </md-button>    </div>',scope:!1}}function u(){return{restrict:"A",require:"ngModel",scope:{otherModelValue:"=compareTo"},link:function(e,n,t,r){r.$validators.compareTo=function(n){return n===e.otherModelValue};var o=e.$watch("otherModelValue",function(){r.$validate()});e.$on("$destroy",function(){o()})}}}function l(e){return{priority:100,require:"?ngModel",link:function(n,t,r,o){if(!m.default.isUndefined(o)){var i=e(function(){s++,s>5&&e.cancel(i),o.$validate()},100),a=function(n,r){return I()&&t[0].matches("input[type=password]:-webkit-autofill")?(e.cancel(i),!0):u(n,r)},s=0,u=o.$validators.required;o.$validators.required=a,n.$on("$destroy",function(){e.cancel(i)})}}}}function c(e){return{restrict:"E",link:function(n,t){if(I()){var r=0,o=e(function(){r++,r>5&&e.cancel(o),t[0].querySelector("input[type=password]:-webkit-autofill")&&(t.addClass("md-input-has-value"),e.cancel(o))},100);n.$on("$destroy",function(){e.cancel(o)})}}}}i.$inject=["$rootScope","$q","BIEvents","$state","BIAuthEnv"],l.$inject=["$interval"],c.$inject=["$interval"],Object.defineProperty(n,"__esModule",{value:!0}),n.app=void 0;var d=t(8),m=r(d);t(26);var f=t(73),v=r(f);t(65),t(25),t(24),t(23),t(64);var g=t(71),p=r(g),A=t(72),h=r(A),b=t(70),y=t(68),w=t(67),E=t(69),B=t(66),$=t(74),P=r($),I=function(){return navigator.userAgent.match(/chrome/i)&&!navigator.userAgent.match(/edge/i)},k=n.app="bi.base";m.default.module(k,["ngAnimate","ngSanitize","ngMessages","ui.router","ngMaterial"]).component("forgotPasswordComponent",w.ForgotPasswordComponent).component("resetPasswordComponent",E.ResetPasswordComponent).component("loginComponent",y.LoginComponent).config(v.default).factory("APIInterceptor",i).constant("BIEvents",{UNAUTHORIZED:"bi.auth.unauthorized",AUTHORIZED:"bi.auth.authorized",ERROR:"bi.error",VERSION:"bi.version",LOAD:"bi.ajax.load",MAINTENANCE:"bi.maintenence"}).directive("compareTo",u).directive("maintenanceMode",s).directive("poweredBy",a).directive("required",l).directive("mdInputContainer",c).provider("BIAuthEnv",o).service("BIAuthService",b.BIAuthService).component("navbar",B.NavBarComponent).run(P.default).config(h.default).config(p.default)},64:function(e,n){},65:function(e,n){},66:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.NavBarComponent=void 0;var r=t(115);n.NavBarComponent={template:t(111),controller:r.NavbarBaseController}},67:function(e,n,t){"use strict";function r(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(n,"__esModule",{value:!0});var o=function(){function e(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(n,t,r){return t&&e(n.prototype,t),r&&e(n,r),n}}(),i=void 0;n.ForgotPasswordComponent={template:t(112),controller:function(){function e(n){r(this,e),i=n,this.user={email:""}}return e.$inject=["BIAuthService"],o(e,[{key:"submit",value:function(){var e=this;i.reset(this.user).then(function(){e.error=void 0,e.success={success:!0,message:"Eine Email mit einem Link zum zurücksetzen ihres Passwortes wurde an folgende Adresse geschickt: \n\n"+e.user.email+"."}},function(n){console.log(n),e.error=n.email+"."})}}]),e}()}},68:function(e,n,t){"use strict";function r(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(n,"__esModule",{value:!0}),n.LoginComponent=void 0;var o=function(){function e(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(n,t,r){return t&&e(n.prototype,t),r&&e(n,r),n}}();t(110);var i=void 0,a=void 0,s=void 0,u=void 0;n.LoginComponent={template:t(113),controller:function(){function e(n,t,o,l){r(this,e),i=l,a=n,s=t,u=o}return e.$inject=["$state","BIAuthService","BIAuthEnv","$log"],o(e,[{key:"_goMainRoute",value:function(){angular.isUndefined(u.mainRoute.route)?i.error("login succesfull, no redirection setup after login."):angular.isDefined(u.mainRoute.route)&&angular.isDefined(u.mainRoute.param)?a.go(u.mainRoute.route,u.mainRoute.param):a.go(u.mainRoute)}},{key:"submit",value:function(){var e=this;s.login(this.user).then(this._goMainRoute,function(n){e.error=!angular.isString(n)||n})}},{key:"$onInit",value:function(){angular.extend(this,{error:void 0,user:{username:null,password:null}})}},{key:"$onDestroy",value:function(){}}]),e}()}},69:function(e,n,t){"use strict";function r(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(n,"__esModule",{value:!0});var o=function(){function e(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(n,t,r){return t&&e(n.prototype,t),r&&e(n,r),n}}(),i=void 0,a=void 0;n.ResetPasswordComponent={template:t(114),controller:function(){function e(n,t,o){r(this,e),i=n,a=o,this.user={password_code:t.code,password:void 0}}return e.$inject=["BIAuthService","$stateParams","$state"],o(e,[{key:"submit",value:function(){var e=this;i.reset(this.user).then(function(){a.go("login")},function(n){e.error=n.message.password_code+"."})}}]),e}()}},70:function(e,n,t){"use strict";function r(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(n,"__esModule",{value:!0});var o=function(){function e(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(n,t,r){return t&&e(n.prototype,t),r&&e(n,r),n}}();n.BIAuthService=function(){function e(n,t,o){r(this,e),this.BIAuthEnv=n,this.$http=o,this.$q=t;var i=n.basePath;this.EP={login:i+"/login2",logout:i+"/logout",reset:i+"/reset",profile:i+"/profile",info:i+"/info"},this._user={isAuthenticated:!1}}return e.$inject=["BIAuthEnv","$q","$http"],o(e,[{key:"_getMessage",value:function(e){if(Object.prototype.hasOwnProperty.call(e,"message"))return e;for(var n=0;n<Object.keys(e).length;n++)if(angular.isObject(e[Object.keys(e)[n]])){var t=this._getMessage(e[Object.keys(e)[n]]);if(null!==t)return t}return null}},{key:"handleError",value:function(e){var n=this._getMessage(e).message;return null===n?this.$q.reject(this.BIAuthEnv.unknown):this.$q.reject(n)}},{key:"handleSuccess",value:function(e){return e.data.result}},{key:"info",value:function(){return this.$http({method:"GET",url:this.EP.info}).then(this.handleSuccess,this.handleError)}},{key:"reset",value:function(e){return angular.isDefined(e.password_code)?this.$http({method:"POST",data:e,url:this.EP.reset}).then(this.handleSuccess,this.handleError):this.$http({method:"GET",url:this.EP.reset+"?email="+e.email}).then(this.handleSuccess,this.handleError)}},{key:"profile",value:function(e){var n=this;return this._user.isAuthenticated&&!e?this.$q.when(this._user):this.$http({method:"GET",url:this.EP.profile}).then(function(e){return n._user=angular.extend(e.data.result,{isAuthenticated:!0}),n._user},this.handleError)}},{key:"logout",value:function(){return this._user={isAuthenticated:!1},this.$http({method:"GET",url:this.EP.logout}).then(this.handleSuccess,this.handleError)}},{key:"login",value:function(e){var n=this;return this.$http({method:"POST",url:this.EP.login,data:e}).then(function(){return n.profile(!0)},this.handleError)}}]),e}()},71:function(e,n,t){"use strict";function r(e,n,t,r,o,i){t.useApplyAsync(!0),o.debugInfoEnabled(!1),r.disableWarnings(),e.debugEnabled(!1),t.interceptors.push("APIInterceptor"),i.errorOnUnhandledRejections(!1),t.defaults.withCredentials=!0,t.defaults.useXDomain=!0,t.defaults.headers.common.Accept="application/json",delete t.defaults.headers.common["X-Requested-With"]}r.$inject=["$logProvider","BIAuthEnvProvider","$httpProvider","$mdAriaProvider","$compileProvider","$qProvider"],Object.defineProperty(n,"__esModule",{value:!0}),n.default=r},72:function(e,n,t){"use strict";function r(e){var n={50:"#fae2e3",100:"#f3b7b9",200:"#eb878a",300:"#e3575b",400:"#dd3337",500:"#d70f14",600:"#d30d12",700:"#cd0b0e",800:"#c7080b",900:"#be0406",A100:"#ffe6e6",A200:"#ffb3b4",A400:"#ff8081",A700:"#ff6768",contrastDefaultColor:"light",contrastDarkColors:["50","100","200","300","A100","A200","A400","A700"],contrastLightColors:["400","500","600","700","800","900"]};e.definePalette("customPrimary",n);var t={50:"#000000",100:"#000000",200:"#050d0e",300:"#0c1d20",400:"#142e32",500:"#1b3f45",600:"#296169",700:"#30727c",800:"#37838e",900:"#3f93a0",A100:"#296169",A200:"#225057",A400:"#1b3f45",A700:"#46a4b3",contrastDefaultColor:"light"};e.definePalette("customAccent",t);var r={50:"#ffb280",100:"#ffa266",200:"#ff934d",300:"#ff8333",400:"#ff741a",500:"#ff6400",600:"#e65a00",700:"#cc5000",800:"#b34600",900:"#993c00",A100:"#ffc199",A200:"#ffd1b3",A400:"#ffe0cc",A700:"#803200"};e.definePalette("customWarn",r),e.theme("default").primaryPalette("customPrimary").accentPalette("customAccent",{default:"500","hue-1":"50"}).warnPalette("customWarn")}r.$inject=["$mdThemingProvider"],Object.defineProperty(n,"__esModule",{value:!0}),n.default=r},73:function(e,n,t){"use strict";function r(e,n,t){e.state("login",{url:"/",component:"loginComponent"}).state("forgot-password",{url:"/forgot-password",component:"forgotPasswordComponent"}).state("reset",{url:"/reset/:code",component:"resetPasswordComponent"}),n.otherwise("/"),t.enabled(!1)}r.$inject=["$stateProvider","$urlRouterProvider","$sceProvider"],Object.defineProperty(n,"__esModule",{value:!0}),n.default=r},74:function(e,n,t){"use strict";function r(e,n,t,r,o,i,a){angular.isUndefined(e.mainRoute)&&n.error("Please define the main route of the application in index/config.js !!!");var s=r.$on(o.UNAUTHORIZED,function(){t.go("login"),a.location.reload(!0)});t.defaultErrorHandler(function(){});var u=function(e){var n=i.alert({clickOutsideToClose:!0,escapeToClose:!0,title:"Fehler",textContent:angular.toJson(e),ok:"OK"});i.show(n).finally(function(){n=void 0})},l=r.$on(o.ERROR,function(e,n){u(n)});r.$on("$destroy",function(){s(),l()})}r.$inject=["BIAuthEnv","$log","$state","$rootScope","BIEvents","$mdDialog","$window"],Object.defineProperty(n,"__esModule",{value:!0}),n.default=r}},[116])});