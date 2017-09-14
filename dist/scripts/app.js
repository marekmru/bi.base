function ResetPasswordController(e,n,t){var r=this;r.user={password_code:t.code,password:void 0},r.submit=function(){e.reset(this.user).then(function(){n.go("login")},function(e){r.error=e.message.password_code+"."})}}function LoginController(e,n,t){var r=this,o=function(){angular.isDefined(t.mainRoute.route)&&angular.isDefined(t.mainRoute.param)?e.go(t.mainRoute.route,t.mainRoute.param):e.go(t.mainRoute)};r.submit=function(){n.login(r.user).then(function(){o()},function(e){r.error=!angular.isString(e)||e})},r.$onInit=function(){n.profile().then(o),angular.extend(r,{error:void 0,user:{username:null,password:null}})}}function ForgotPasswordController(e){var n=this;n.user={email:""},n.submit=function(){e.reset(n.user).then(function(){n.error=void 0,n.success={success:!0,message:"Eine Email mit einem Link zum zurücksetzen ihres Passwortes wurde an folgende Adresse geschickt: \n\n"+n.user.email+"."}},function(e){n.error=e.email+"."})}}function BIAuthService(e,n,t){var r=e.authPath,o={login:r+"/login2",logout:r+"/logout",reset:r+"/reset",profile:r+"/profile",info:r+"/info"},i={isAuthenticated:!1},a=function(e){if(Object.prototype.hasOwnProperty.call(e,"message"))return e;for(var n=0;n<Object.keys(e).length;n++)if(angular.isObject(e[Object.keys(e)[n]])){var t=a(e[Object.keys(e)[n]]);if(null!==t)return t}return null},s=function(e){var t=a(e).message;return null===t?n.reject(this.BIAuthEnv.unknown):n.reject(t)},l=function(e){return e.data.result};this.info=function(){return t({method:"GET",url:o.info}).then(l,s)},this.reset=function(e){return angular.isDefined(e.password_code)?t({method:"POST",data:e,url:o.reset}).then(l,s):t({method:"GET",url:o.reset+"?email="+e.email}).then(l,s)},this.profile=function(e){return i.isAuthenticated&&!e?n.when(i):t({method:"GET",url:o.profile}).then(function(e){return i=angular.extend(e.data.result,{isAuthenticated:!0})},s)},this.logout=function(){return i={isAuthenticated:!1},t({method:"GET",url:o.logout}).then(l,s)},this.login=function(e){return t({method:"POST",url:o.login,data:e}).then(function(){return this.profile(!0)}.bind(this),s)}}function run(e,n,t,r,o,i,a){angular.isUndefined(e.mainRoute)&&n.error("Please define the main route of the application in index/config.js !!!");var s=r.$on(o.UNAUTHORIZED,function(){t.get("$state").go("login",null,{notify:!1}).then(a.location.reload)});try{t.get("$state").defaultErrorHandler(angular.noop)}catch(e){}var l=function(e){var n=i.alert({clickOutsideToClose:!0,escapeToClose:!0,title:"Fehler",textContent:angular.toJson(e),ok:"OK"});i.show(n).finally(function(){n=void 0})},d=r.$on(o.ERROR,function(e,n){l(n)});r.$on("$destroy",function(){s(),d()})}function routes(e,n,t,r){r.enabled(!1),e.state("login",{url:"/",component:"loginComponent"}).state("forgot-password",{url:"/forgot-password",component:"forgotPasswordComponent"}).state("reset",{url:"/reset/:code",component:"resetPasswordComponent"}),n.html5Mode(!1).hashPrefix(""),t.otherwise("/")}function NavbarController(e,n,t,r,o,i){var a,s,l=this;l.hideLoader=!0,l.toggleMenu=function(){e("md-sidenav-left").toggle()},l.goMainRoute=function(){angular.isDefined(t.mainRoute.route)&&angular.isDefined(t.mainRoute.param)?o.go(t.mainRoute.route,t.mainRoute.param):o.go(t.mainRoute)},l.logout=function(){r.logout().then(function(){o.go("login")})},l.onLoad=function(e,n){l.hideLoader=!n},l.$onInit=function(){s=i.$on("BI.EVENTS.LOAD",l.onLoad),l.vis=!0,l.profile=void 0;var o=t.noAuthRoutes;a=n.onStart({to:"*",from:"*"},function(n){e("md-sidenav-left").close(),l.currentState=n.to().name;var t=-1===o.indexOf(l.currentState);l.vis=t,angular.isUndefined(l.profile)&&r.profile().then(function(e){l.profile=e},function(){l.profile=void 0})})},l.$onDestroy=function(){a(),s()}}function mdtheme(e){var n={50:"#fef1f1",100:"#f9aaac",200:"#f57578",300:"#f13237",400:"#ef161b",500:"#d70f14",600:"#ba0d11",700:"#9e0b0f",800:"#81090c",900:"#650709",A100:"#ffe6e7",A200:"#ff8083",A400:"#ff1a20",A700:"#f50b11",A900:"#ffffff",contrastDefaultColor:"light",contrastDarkColors:["50","100","200","A100","A200"],contrastLightColors:["300","400","500","600","700","800","900","A400","A700","A900"]};e.definePalette("customPrimary",n);var t={50:"#f9fafb",100:"#ccd7dc",200:"#abbcc5",300:"#819ba8",400:"#6e8d9b",500:"#607d8b",600:"#536d79",700:"#475c67",800:"#2e3c43",900:"#000000",A100:"#f0f7fa",A200:"#a4ccdf",A400:"#6a9cb4",A700:"#658c9f",contrastDefaultColor:"light",contrastDarkColors:["50","100","200","300","400","A100","A200","A400","A700"],contrastLightColors:["500","600","700","800","900"]};e.definePalette("customAccent",t);var r={50:"#fefaf3",100:"#f9daab",200:"#f6c377",300:"#f1a534",400:"#ef9918",500:"#d9880f",600:"#bc760d",700:"#a0640b",800:"#835209",900:"#674007",A100:"#fff6e8",A200:"#ffcd82",A400:"#ffa41c",A700:"#f5980d",contrastDefaultColor:"light",contrastDarkColors:["50","100","200","300","400","500","A100","A200","A400","A700"],contrastLightColors:["600","700","800","900"]};e.definePalette("customWarn",r),e.theme("default").primaryPalette("customPrimary",{}).accentPalette("customAccent",{default:"500","hue-1":"900"}).warnPalette("customWarn")}function fn(){function e(e,n){n[0].setAttribute("data-after","POWERED BY CORE"),e.$on("$destroy",function(){})}return{restrict:"A",scope:!1,link:e}}function fn2(){function e(){}return{restrict:"E",scope:!1,template:'<div layout="row" layout-align="center center" layout-padding>      <div>        <md-icon>          build        </md-icon>      </div>      <div>Das System befindet sich im Wartungsmodus</div>      <md-button>        Nochmal versuchen      </md-button>    </div>',link:e}}function fn3(e){function n(n,t){var r=e.title,o=r.length;o<=8?t[0].classList.add("size-xl"):o<=13?t[0].classList.add("size-l"):t[0].classList.add("size-m"),t[0].innerText=r}return{restrict:"A",scope:!1,link:n}}function fn4(){function e(e,n,t,r){r.$validators.compareTo=function(n){return n===e.otherModelValue};var o=e.$watch("otherModelValue",function(){r.$validate()});e.$on("$destroy",function(){o()})}return{restrict:"A",require:"ngModel",scope:{otherModelValue:"=compareTo"},link:e}}function fn5(e){function n(n,t,r,o){if(!angular.isUndefined(o)){var i=function(n,r){return isChrome()&&t[0].matches("input[type=password]:-webkit-autofill")?(e.cancel(l),!0):s(n,r)},a=0,s=o.$validators.required,l=e(function(){a++,a>5&&e.cancel(l),o.$validate()},125);o.$validators.required=i,n.$on("$destroy",function(){e.cancel(l)})}}return{priority:100,require:"?ngModel",link:n}}function fn6(e){function n(n,t){if(isChrome()){var r=0,o=e(function(){r++,r>5&&e.cancel(o),t[0].querySelector("input[type=password]:-webkit-autofill")&&(t.addClass("md-input-has-value"),e.cancel(o))},100);n.$on("$destroy",function(){e.cancel(o)})}}return{restrict:"E",scope:!1,link:n}}function config(e,n,t,r,o,i){t.useApplyAsync(!0),o.debugInfoEnabled(!1),r.disableWarnings(),e.debugEnabled(!1),i.errorOnUnhandledRejections(!1),t.defaults.withCredentials=!0,t.defaults.useXDomain=!0,t.defaults.headers.common.Accept="application/json",delete t.defaults.headers.common["X-Requested-With"]}function configInt(e){e.interceptors.push(["$rootScope","$q","BIEvents","$injector","BIAuthEnv",function(e,n,t,r,o){var i=function(){var e=r.get("$state");return o.noAuthRoutes.join("|").indexOf(e.current.name)>-1&&e.current.name.length>1};return{request:function(n){return e.$broadcast(t.LOAD,!0),n},response:function(n){return e.$broadcast(t.LOAD,!1),n},responseError:function(r){return e.$broadcast(t.LOAD,!1),401===r.status&&!1===i()?(e.$broadcast(t.UNAUTHORIZED),n(function(){return null})):n.reject(r)}}}])}ResetPasswordController.$inject=["BIAuthService","$state","$stateParams"],LoginController.$inject=["$state","BIAuthService","BIAuthEnv"],ForgotPasswordController.$inject=["BIAuthService"],BIAuthService.$inject=["BIAuthEnv","$q","$http"],run.$inject=["BIAuthEnv","$log","$injector","$rootScope","BIEvents","$mdDialog","$window"],routes.$inject=["$stateProvider","$locationProvider","$urlRouterProvider","$sceProvider"],NavbarController.$inject=["$mdSidenav","$transitions","BIAuthEnv","BIAuthService","$state","$rootScope"],mdtheme.$inject=["$mdThemingProvider"],fn3.$inject=["BIAuthEnv"],fn5.$inject=["$interval"],fn6.$inject=["$interval"],config.$inject=["$logProvider","BIAuthEnvProvider","$httpProvider","$mdAriaProvider","$compileProvider","$qProvider"],configInt.$inject=["$httpProvider"],angular.module("bi.base",["ngAria","ngAnimate","ngSanitize","ngMessages","ui.router","ngMaterial"]),angular.module("bi.base").component("resetPasswordComponent",{templateUrl:"./app/routes/reset-password/el.html",controller:ResetPasswordController}),angular.module("bi.base").component("loginComponent",{templateUrl:"./app/routes/login/el.html",controller:LoginController}),angular.module("bi.base").component("forgotPasswordComponent",{templateUrl:"./app/routes/forgot-password/el.html",controller:ForgotPasswordController}),angular.module("bi.base").service("BIAuthService",BIAuthService),angular.module("bi.base").run(run),angular.module("bi.base").config(routes),angular.module("bi.base").component("navbar",{templateUrl:"./app/index/navbar.template.html",controller:NavbarController}),/*! https://mths.be/includes v1.0.0 by @mathias */
/* eslint-disable */
String.prototype.includes||function(){"use strict";var e={}.toString,n=function(){try{var e={},n=Object.defineProperty,t=n(e,e,e)&&n}catch(e){}return t}(),t="".indexOf,r=function(n){if(null==this)throw TypeError();var r=String(this);if(n&&"[object RegExp]"==e.call(n))throw TypeError();var o=r.length,i=String(n),a=i.length,s=arguments.length>1?arguments[1]:void 0,l=s?Number(s):0;return l!=l&&(l=0),!(a+Math.min(Math.max(l,0),o)>o)&&-1!=t.call(r,i,l)};n?n(String.prototype,"includes",{value:r,configurable:!0,writable:!0}):String.prototype.includes=r}(),angular.module("bi.base").config(mdtheme),angular.module("bi.base").provider("BIAuthEnv",function(){var e={_authPath:"https://bi.plan-net.com/api/v2",authPath:"http://localhost:5050",basePath:"http://localhost:5050",noAuthRoutes:["login","forgot-password","reset"],mainRoute:void 0,errors:{unknown:"An unknown error occurred."},title:"CORE",sidebarTemplate:"./app/components/navbar/sidenav.template.html",internalName:"core"};this.set=function(n){Object.assign(e,n)},this.$get=function(){return e}}),angular.module("bi.base").directive("poweredBy",fn),angular.module("bi.base").directive("maintenanceMode",fn2),angular.module("bi.base").directive("appTitle",fn3),angular.module("bi.base").directive("compareTo",fn4);var isChrome=function(){return navigator.userAgent.match(/chrome/i)&&!navigator.userAgent.match(/edge/i)};angular.module("bi.base").directive("requiredDisabled",fn5),angular.module("bi.base").directive("appTitle",fn6),angular.module("bi.base").config(config),angular.module("bi.base").config(configInt),angular.module("bi.base").constant("BIEvents",{UNAUTHORIZED:"bi.auth.unauthorized",AUTHORIZED:"bi.auth.authorized",ERROR:"bi.error",VERSION:"bi.version",LOAD:"bi.ajax.load",MAINTENANCE:"bi.maintenence"}),angular.module("bi.base").run(["$templateCache",function(e){e.put("./app/index/navbar.template.html",'<md-toolbar class="md-accent md-hue-1 bi-navbar" ng-class="{\'loading\' : $ctrl.vis && $ctrl.currentState == \'login\'}" ng-show="$ctrl.vis">\n  <div class="md-toolbar-tools">\n    <div class="left">\n      <md-button ng-click="$ctrl.toggleMenu()" class="md-icon-button">\n        <md-icon>menu</md-icon>\n      </md-button>\n    </div>\n    <h3 class="bc-title" ui-sref-active="nav-active" ng-click="thsi.goMainRoute()" flex="" app-title="">\n      CORE\n    </h3>\n    <div class="right">\n      <span class="biBaseIcons"></span>\n      <md-button class="md-icon-button" ng-click="$ctrl.logout()">\n        <md-icon>power_settings_new</md-icon>\n      </md-button>\n    </div>\n  </div>\n  <md-progress-linear class="md-primary" ng-disabled="$ctrl.hideLoader" md-mode="indeterminate"></md-progress-linear>\n\n</md-toolbar>\n\n<md-sidenav class="md-sidenav-left" md-component-id="md-sidenav-left" md-whiteframe="4" layout="column">\n  <md-toolbar class="md-accent md-hue-1 bi-navbar">\n  </md-toolbar>\n\n  <md-list class="bc-sidenav-header">\n    <md-list-item class="bc-user">\n      <img style="margin-left: 10px" class="md-avatar" alt="User" ng-src="data:image/jpeg;base64,/9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAAA8AAD/4QMvaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjYtYzEzOCA3OS4xNTk4MjQsIDIwMTYvMDkvMTQtMDE6MDk6MDEgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE3IChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDowQ0YyQzc3NzFCOTMxMUU3QTFENEYwRjkyQkUzQzAzMyIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDowQ0YyQzc3ODFCOTMxMUU3QTFENEYwRjkyQkUzQzAzMyI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjBDRjJDNzc1MUI5MzExRTdBMUQ0RjBGOTJCRTNDMDMzIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjBDRjJDNzc2MUI5MzExRTdBMUQ0RjBGOTJCRTNDMDMzIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+/+4ADkFkb2JlAGTAAAAAAf/bAIQABgQEBAUEBgUFBgkGBQYJCwgGBggLDAoKCwoKDBAMDAwMDAwQDA4PEA8ODBMTFBQTExwbGxscHx8fHx8fHx8fHwEHBwcNDA0YEBAYGhURFRofHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8f/8AAEQgAZABkAwERAAIRAQMRAf/EAHMAAQABBQEAAAAAAAAAAAAAAAABAgMFBgcEAQEAAAAAAAAAAAAAAAAAAAAAEAABAwIBCwIEBQUBAAAAAAABAAIDEQQSITFRYXGBIjJCBQZBobHBUhORYnKSFKKyI1MkNBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8A6e5zsRynOgjE7SUDE7SUDE7SUDE7SUEsErzSMOedDQSfZBcdb3jBV8MrRpLHAfBBaxHSgYnaSgYnaSgYnaSgYnaSgqxOwZznQUu5jtQQgICDYfGfGm9wH8u7qLQGjIxkLyM9T9KDd7e1t7eMRwRNjYMzWgAeyC5QIMV3fxvt/cWOOAQ3PTOwUNfzaUHPru1mtLmS2nFJYjR2g6CNRQWUBAQVdG9BDuY7UEICCQxz3NY3meQ0bXGiDqtnbstrSKBgo2NgaBsCC8gICDTvPLRrZrW7aKF4MT9dMoQaogICCro3oIdzHaghAQXbZwbdQOOYSMJ/cEHVwagHSgICAg1fz1w/h2jfUyk/g0oNLQEBBV0b0EO5jtQQgIBrQ0z+iDqXarpt1263naa442k7aZUHqQEBBpHnN0JO4QW4NfssLnDW85PYINaQEBBV0b0EO5jtQQgICDbfCe7sbi7bM6hJL7cn1rzN+aDb0BBZvbyCztpLmd2GOMVJ06gg5he3cl5dy3UnNK4upoHoNwQWEBAQVdG9BDuY7UEIGrOTmCDM2HineLsBxYLeI9Uuen6RlQZG88IngtmS2U7pbuPicDw1p9GghBFp5nfWf/P3O2c97MhfyP3g5Cg9Mnn1mG/47aRz/QOLQEGPwd98muGl7fs2TTUGhDG7K8zkHovvBZm8VjOHj/XLkO5wQa9e9uvrF+C6hdETyuOVp2FB5kBBV0b0EO5jtQQg2nwntUc0kncJmhwiOCAHNizud8gg3NAQWp7S2nFJomSD8zQfigsRdm7VE7Ey0iDtOEH4oPYAAAAKAZgEBB57+xt761ktp24mPFNYPoRrCDl9xBJb3EtvJzxOLHbjn3oLaCro3oIdzHaghB0fxe3EHY7UUoXt+47a84vmgyqAgICAgICDn3mFuIe+SOAoJmNk38p/tQYRBV0b0EO5jtQQ7KCBnKDq9pEIrWKMZAxjWjcEF1AQEBAQEBBpvnsQFxZzermvYdxBHxQaqgq6N6CHcx2oANCDnoQabCg6lYdxsryFr7aZsgoKgHKNRGcIPSgICAgICASAKk0GkoNK827hZ3MltDbyNlfEXGQtNQKgClR6oNYQVdG9BDuY7UEIJY5zHB7HFjxmc0kH8Qgydt5N3y3oG3JkaOmUB/vn90GTg87vmkffto5B6lhLD74kHrZ57bHntJB+lzT8aIKz55Y0yW0xOvCPmgsS+fGh+zZ5fQvf8gCgx9x5p3mUUj+3ANLW4j/USPZBirruXcLv/wBNxJKPpJo39ooEHmQEFXRvQS7BU586CODWgcGtA4NaBwa0Dg1oHBrQODWgcGtA4NaBwa0Dg1oKuDB650H/2Q==">\n      <div class="md-list-item-text">\n        <p class="bc-user-name">{{::$ctrl.profile.realname}}</p>\n        <p class="bc-user-mail">{{::$ctrl.profile.email}}</p>\n      </div>\n    </md-list-item>\n  </md-list>\n  <div id="sidebar" class="biBaseSidebar">\n\n  </div>\n\n</md-sidenav>\n'),e.put("./app/routes/forgot-password/el.html",'<div layout="column" layout-align-xs="start center" layout-align-gt-xs="center center" layout-fill="layout-fill" id="login">\n  <h1 class="bi-powered">POWERED BY CORE</h1>\n  <div class="login-box md-whiteframe-z2" layout="column">\n    <form name="form" novalidate ng-submit="$ctrl.submit($event)">\n      <md-content class="md-padding" layout="column" ng-if="$ctrl.success.message == undefined">\n        <h2>\n          Passwort zurücksetzen\n        </h2>\n        <md-input-container>\n          <label>Ihre Email Adresse</label>\n          <input type="email" ng-model="$ctrl.user.email" name="email" ng-pattern="/^.+@.+\\..+$/" required ng-minlength="5">\n\n          <div ng-messages="form.email.$error" role="alert" ng-if="form.email.$dirty">\n            <div ng-message="required">Geben Sie eine Email Adresse ein.</div>\n            <div ng-message="email">Geben Sie eine valide Email Adresse ein.</div>\n            <div ng-message="minlength">Das Passwort muss aus mindestens 5 Zeichen bestehen.</div>\n          </div>\n          <div class="bi-alert md-block" ng-if="$ctrl.error" role="alert">\n            <span class="md-body-1">{{$ctrl.error}}</span>\n          </div>\n        </md-input-container>\n        <div layout="column">\n          <md-button type="submit" class="md-raised md-primary" ng-disabled="form.$invalid">ANFORDERN</md-button>\n        </div>\n        <br>\n        <md-button class="bi-reset-pw" ui-sref="login" md-no-ink> Zurück zum login</md-button>\n      </md-content>\n      <md-content ng-if="$ctrl.success.message" class="md-padding" layout="column">\n        <p>{{::$ctrl.success.message}}</p>\n        <md-button class="bi-reset-pw" ui-sref="login" md-no-ink> Zurück zum login</md-button>\n      </md-content>\n    </form>\n  </div>\n  <div class="bi-copyright"><span>&copy; 2017</span></div>\n</div>\n'),e.put("./app/routes/login/el.html",'<div layout="column" layout-align-xs="start center" layout-align-gt-xs="center center" layout-fill="layout-fill" id="login">\n  <h1 class="bi-powered">POWERED BY CORE</h1>\n  <div class="login-box md-whiteframe-z2" layout="column">\n    <form name="form" novalidate="">\n      <md-content class="md-padding" layout="column">\n        <h2 class="bi-headline" app-title=""></h2>\n        <md-input-container>\n          <label>Nutzername</label>\n          <input type="text" ng-model="$ctrl.user.username" name="username" required="" ng-minlength="3" md-autofocus required-disabled>\n          <div ng-messages="form.username.$error" role="alert" ng-show="form.username.$dirty">\n            <div ng-message="required">Geben Sie einen Namen ein.</div>\n            <div ng-message="minlength">Der Name muss aus mindestens 3 Zeichen bestehen.</div>\n          </div>\n        </md-input-container>\n        <md-input-container>\n          <label>Passwort</label>\n          <input ng-model="$ctrl.user.password" name="password" type="password" required="" ng-minlength="3" required-disabled>\n\n          <div ng-messages="form.password.$error" role="alert" ng-show="form.password.$dirty">\n            <div ng-message="required">Geben Sie ein Passwort ein.</div>\n            <div ng-message="minlength">Das Passwort muss aus mindestens 3 Zeichen bestehen.</div>\n          \n\n          <div class="bi-alert md-block" ng-if="$ctrl.error" role="alert">\n            <span class="md-body-1" md-colors="{color: \'warn-500\'}">Bitte überprüfen Sie ihren Namen und das Passwort.</span>\n          </div>\n        </div></md-input-container>\n        <div layout="column">\n          <md-button type="submit" class="md-raised md-primary" ng-disabled="form.$invalid" ng-click="$ctrl.submit()">\n            LOGIN</md-button>\n        </div>\n        <br>\n        <md-button class="bi-reset-pw" ui-sref="forgot-password" md-no-ink="">Passwort zurücksetzen</md-button>\n      </md-content>\n    </form>\n  </div>\n  <div class="bi-copyright"><span>&copy; 2017</span></div>\n</div>\n'),e.put("./app/routes/reset-password/el.html",'<div layout="column" layout-align-xs="start center" layout-align-gt-xs="center center" layout-fill="layout-fill" id="login">\n  <h1 class="bi-powered">POWERED BY CORE</h1>\n  <div class="login-box md-whiteframe-z2" layout="column">\n    <form name="form" novalidate ng-submit="$ctrl.submit($event)">\n      <md-content class="md-padding" layout="column">\n        <h2>\n          Neues Passwort\n        </h2>\n        <md-input-container class="md-block">\n          <label>Neues Passwort</label>\n          <input ng-model="$ctrl.user.password" name="password" type="password" required ng-minlength="3" ng-disabled="$ctrl.error">\n          <div ng-messages="form.password.$error" role="alert" ng-if="form.password.$dirty">\n            <div ng-message="required">Geben Sie ein neues Passwort ein.</div>\n            <div ng-message="minlength">Das Passwort muss aus mindestens 6 Zeichen bestehen.</div>\n          </div>\n        </md-input-container>\n        <md-input-container class="md-block">\n          <label>Passwort wiederholen</label>\n          <input ng-model="$ctrl.confirmPassword" name="confirmPassword" type="password" required ng-disabled="$ctrl.error" ng-minlength="3" compare-to="$ctrl.user.password">\n          <div ng-messages="form.confirmPassword.$error" role="alert" ng-if="form.confirmPassword.$dirty">\n            <div ng-message="required">Geben Sie ein neues Passwort ein.</div>\n            <div ng-message="minlength">Das Passwort muss aus mindestens 6 Zeichen bestehen.</div>\n            <div ng-message="compareTo">Die Passwörter müssen übereinstimmen.</div>\n\n          </div>\n          <br>\n          <div class="c-alert md-block" ng-if="$ctrl.error">\n            <span class="md-body-2">{{$ctrl.error}}</span><br>\n            <a href="#" ui-sref="forgot-password">Create new token</a>\n          </div>\n        </md-input-container>\n\n        <md-button type="submit" class="md-raised md-primary" ng-disabled="form.$invalid || $ctrl.error">Weiter\n        </md-button>\n      </md-content>\n\n    </form>\n  </div>\n  <div class="bi-copyright"><span>&copy; 2017</span></div>\n</div>\n')}]);