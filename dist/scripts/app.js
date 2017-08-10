function ResetPasswordController(e,n,t){var r=this;r.user={password_code:t.code,password:void 0},r.submit=function(){e.reset(this.user).then(function(){n.go("login")},function(e){r.error=e.message.password_code+"."})}}function LoginController(e,n,t){var r=this;r._goMainRoute=function(){angular.isDefined(t.mainRoute.route)&&angular.isDefined(t.mainRoute.param)?e.go(t.mainRoute.route,t.mainRoute.param):e.go(t.mainRoute)},r.submit=function(){n.login(r.user).then(r._goMainRoute,function(e){r.error=!angular.isString(e)||e})},r.$onInit=function(){n.profile().then(this._goMainRoute),angular.extend(this,{error:void 0,user:{username:null,password:null}})}}function ForgotPasswordController(e){var n=this;n.user={email:""},n.submit=function(){e.reset(n.user).then(function(){n.error=void 0,n.success={success:!0,message:"Eine Email mit einem Link zum zurücksetzen ihres Passwortes wurde an folgende Adresse geschickt: \n\n"+n.user.email+"."}},function(e){n.error=e.email+"."})}}function fn(e,n,t){this.BIAuthEnv=e,this.$http=t,this.$q=n;var r=e.authPath;this.EP={login:r+"/login2",logout:r+"/logout",reset:r+"/reset",profile:r+"/profile",info:r+"/info"},this._user={isAuthenticated:!1},this._getMessage=function(e){if(Object.prototype.hasOwnProperty.call(e,"message"))return e;for(var n=0;n<Object.keys(e).length;n++)if(angular.isObject(e[Object.keys(e)[n]])){var t=this._getMessage(e[Object.keys(e)[n]]);if(null!==t)return t}return null},this.handleError=function(e){var n=this._getMessage(e).message;return null===n?this.$q.reject(this.BIAuthEnv.unknown):this.$q.reject(n)},this.handleSuccess=function(e){return e.data.result},this.info=function(){return this.$http({method:"GET",url:this.EP.info}).then(this.handleSuccess,this.handleError)},this.reset=function(e){return angular.isDefined(e.password_code)?this.$http({method:"POST",data:e,url:this.EP.reset}).then(this.handleSuccess,this.handleError):this.$http({method:"GET",url:this.EP.reset+"?email="+e.email}).then(this.handleSuccess,this.handleError)},this.profile=function(e){return this._user.isAuthenticated&&!e?this.$q.when(this._user):this.$http({method:"GET",url:this.EP.profile}).then(function(e){return this._user=angular.extend(e.data.result,{isAuthenticated:!0}),this._user},this.handleError)},this.logout=function(){return this._user={isAuthenticated:!1},this.$http({method:"GET",url:this.EP.logout}).then(this.handleSuccess,this.handleError)},this.login=function(e){return this.$http({method:"POST",url:this.EP.login,data:e}).then(function(){return this.profile(!0)},this.handleError)}}function run(e,n,t,r,o,i,s){angular.isUndefined(e.mainRoute)&&n.error("Please define the main route of the application in index/config.js !!!");var a=r.$on(o.UNAUTHORIZED,function(){t.go("login"),t.go("login",null,{notify:!1}).then(s.location.reload)});t.defaultErrorHandler(function(){});var l=function(e){var n=i.alert({clickOutsideToClose:!0,escapeToClose:!0,title:"Fehler",textContent:angular.toJson(e),ok:"OK"});i.show(n).finally(function(){n=void 0})},u=r.$on(o.ERROR,function(e,n){l(n)});r.$on("$destroy",function(){a(),u()})}function routes(e,n,t){e.state("login",{url:"/",component:"loginComponent"}).state("forgot-password",{url:"/forgot-password",component:"forgotPasswordComponent"}).state("reset",{url:"/reset/:code",component:"resetPasswordComponent"}),n.otherwise("/"),t.enabled(!1)}function mdtheme(e){var n={50:"#fae2e3",100:"#f3b7b9",200:"#eb878a",300:"#e3575b",400:"#dd3337",500:"#d70f14",600:"#d30d12",700:"#cd0b0e",800:"#c7080b",900:"#be0406",A100:"#ffe6e6",A200:"#ffb3b4",A400:"#ff8081",A700:"#ff6768",A900:"#000000",contrastDefaultColor:"light",contrastDarkColors:["50","100","200","300","A100","A200","A400","A700","A900"],contrastLightColors:["400","500","600","700","800","900"]};e.definePalette("customPrimary",n);var t={50:"#ffffff",100:"#ffffff",200:"#ded2ff",300:"#a98aff",400:"#926cff",500:"#7c4dff",600:"#633ECC",700:"#442A8C",800:"#25174D",900:"#000000",A100:"#ffffff",A200:"#ede6ff",A400:"#a280ff",A700:"#8f66ff",contrastDefaultColor:"light",contrastDarkColors:["50","100","200","300","400","A100","A200","A400","A700"],contrastLightColors:["500","600","700","800","900"]};e.definePalette("customAccent",t);var r={50:"#fefaf3",100:"#f9daab",200:"#f6c377",300:"#f1a534",400:"#ef9918",500:"#d9880f",600:"#bc760d",700:"#a0640b",800:"#835209",900:"#674007",A100:"#fff6e8",A200:"#ffcd82",A400:"#ffa41c",A700:"#f5980d",contrastDefaultColor:"light",contrastDarkColors:["50","100","200","300","400","500","A100","A200","A400","A700"],contrastLightColors:["600","700","800","900"]};e.definePalette("customWarn",r),e.theme("default").primaryPalette("customPrimary",{}).accentPalette("customAccent",{default:"500","hue-1":"900"}).warnPalette("customWarn")}function fn(){function e(e,n){n[0].setAttribute("data-after","POWERED BY CORE"),e.$on("$destroy",function(){})}return{restrict:"A",scope:!1,link:e}}function fn2(){function e(){}return{restrict:"E",scope:!1,template:'<div layout="row" layout-align="center center" layout-padding>      <div>        <md-icon>          build        </md-icon>      </div>      <div>Das System befindet sich im Wartungsmodus</div>      <md-button>        Nochmal versuchen      </md-button>    </div>',link:e}}function fn3(e){function n(n,t){var r=e.title,o=r.length;o<=8?t[0].classList.add("size-xl"):o<=13?t[0].classList.add("size-l"):t[0].classList.add("size-m"),t[0].innerText=r}return{restrict:"A",scope:!1,link:n}}function fn4(){function e(e,n,t,r){r.$validators.compareTo=function(n){return n===e.otherModelValue};var o=e.$watch("otherModelValue",function(){r.$validate()});e.$on("$destroy",function(){o()})}return{restrict:"A",require:"ngModel",scope:{otherModelValue:"=compareTo"},link:e}}function fn5(e){function n(n,t,r,o){if(!angular.isUndefined(o)){var i=e(function(){a++,a>5&&e.cancel(i),o.$validate()},100),s=function(n,r){return isChrome()&&t[0].matches("input[type=password]:-webkit-autofill")?(e.cancel(i),!0):l(n,r)},a=0,l=o.$validators.required;o.$validators.required=s,n.$on("$destroy",function(){e.cancel(i)})}}return{priority:100,require:"?ngModel",link:n}}function fn6(e){function n(n,t){if(isChrome()){var r=0,o=e(function(){r++,r>5&&e.cancel(o),t[0].querySelector("input[type=password]:-webkit-autofill")&&(t.addClass("md-input-has-value"),e.cancel(o))},100);n.$on("$destroy",function(){e.cancel(o)})}}return{restrict:"E",scope:!1,link:n}}function config(e,n,t,r,o,i){t.useApplyAsync(!0),o.debugInfoEnabled(!1),r.disableWarnings(),e.debugEnabled(!1),i.errorOnUnhandledRejections(!1),t.defaults.withCredentials=!0,t.defaults.useXDomain=!0,t.defaults.headers.common.Accept="application/json",delete t.defaults.headers.common["X-Requested-With"]}function configInt(e){e.interceptors.push(["$rootScope","$q","BIEvents","$state","BIAuthEnv",function(e,n,t,r,o){var i=function(){return o.noAuthRoutes.join("|").indexOf(r.current.name)>-1&&r.current.name.length>1};return{request:function(n){return e.$broadcast(t.LOAD,!0),n},response:function(n){return e.$broadcast(t.LOAD,!1),n},responseError:function(r){return e.$broadcast(t.LOAD,!1),401===r.status&&!1===i()?(e.$broadcast(t.UNAUTHORIZED),n(function(){return null})):n.reject(r)}}}])}ResetPasswordController.$inject=["BIAuthService","$state","$stateParams"],LoginController.$inject=["$state","BIAuthService","BIAuthEnv"],ForgotPasswordController.$inject=["BIAuthService"],fn.$inject=["BIAuthEnv","$q","$http"],run.$inject=["BIAuthEnv","$log","$state","$rootScope","BIEvents","$mdDialog","$window"],routes.$inject=["$stateProvider","$urlRouterProvider","$sceProvider"],mdtheme.$inject=["$mdThemingProvider"],fn3.$inject=["BIAuthEnv"],fn5.$inject=["$interval"],fn6.$inject=["$interval"],config.$inject=["$logProvider","BIAuthEnvProvider","$httpProvider","$mdAriaProvider","$compileProvider","$qProvider"],configInt.$inject=["$httpProvider"],angular.module("bi.base",["ngAria","ngAnimate","ngSanitize","ngMessages","ui.router","ngMaterial"]),angular.module("bi.base").component("resetPasswordComponent",{templateUrl:"./app/routes/reset-password/el.html",controller:ResetPasswordController}),angular.module("bi.base").component("loginComponent",{templateUrl:"./app/routes/login/el.html",controller:LoginController}),angular.module("bi.base").component("forgotPasswordComponent",{templateUrl:"./app/routes/forgot-password/el.html",controller:ForgotPasswordController}),angular.module("bi.base").service("BIAuthService",fn),angular.module("bi.base").run(run),angular.module("bi.base").config(routes),angular.module("bi.base").config(mdtheme),angular.module("bi.base").provider("BIAuthEnv",function(){var e={authPath:"https://bi.plan-net.com/api/v2",basePath:"http://localhost:5050",noAuthRoutes:["login","forgot-password","reset-password"],mainRoute:void 0,errors:{unknown:"An unknown error occurred."},title:"CORE",sidebarTemplate:"./app/components/navbar/sidenav.template.html",internalName:"core"};this.set=function(n){Object.assign(e,n)},this.$get=function(){return e}}),angular.module("bi.base").directive("poweredBy",fn),angular.module("bi.base").directive("maintenanceMode",fn2),angular.module("bi.base").directive("appTitle",fn3),angular.module("bi.base").directive("compareTo",fn4);var isChrome=function(){return navigator.userAgent.match(/chrome/i)&&!navigator.userAgent.match(/edge/i)};angular.module("bi.base").directive("requiredDirective",fn5),angular.module("bi.base").directive("appTitle",fn6),angular.module("bi.base").config(config),angular.module("bi.base").config(configInt),angular.module("bi.base").constant("BIEvents",{UNAUTHORIZED:"bi.auth.unauthorized",AUTHORIZED:"bi.auth.authorized",ERROR:"bi.error",VERSION:"bi.version",LOAD:"bi.ajax.load",MAINTENANCE:"bi.maintenence"}),angular.module("app").run(["$templateCache",function(e){e.put("app/routes/forgot-password/el.html",'<div layout="column" layout-align-xs="start center" layout-align-gt-xs="center center" layout-fill="layout-fill" id="login">\n  <h1 class="bi-powered">POWERED BY CORE</h1>\n  <div class="login-box md-whiteframe-z2" layout="column">\n    <form name="form" novalidate ng-submit="$ctrl.submit($event)">\n      <md-content class="md-padding" layout="column" ng-if="$ctrl.success.message == undefined">\n        <h2>\n          Passwort zurücksetzen\n        </h2>\n        <md-input-container>\n          <label>Ihre Email Adresse</label>\n          <input type="email" ng-model="$ctrl.user.email" name="email" ng-pattern="/^.+@.+\\..+$/" required ng-minlength="5">\n\n          <div ng-messages="form.email.$error" role="alert" ng-if="form.email.$dirty">\n            <div ng-message="required">Geben Sie eine Email Adresse ein.</div>\n            <div ng-message="email">Geben Sie eine valide Email Adresse ein.</div>\n            <div ng-message="minlength">Das Passwort muss aus mindestens 5 Zeichen bestehen.</div>\n          </div>\n          <div class="bi-alert md-block" ng-if="$ctrl.error" role="alert">\n            <span class="md-body-1">{{$ctrl.error}}</span>\n          </div>\n        </md-input-container>\n        <div layout="column">\n          <md-button type="submit" class="md-raised md-primary" ng-disabled="form.$invalid">ANFORDERN</md-button>\n        </div>\n        <br>\n        <md-button class="bi-reset-pw" ui-sref="login" md-no-ink> Zurück zum login</md-button>\n      </md-content>\n      <md-content ng-if="$ctrl.success.message" class="md-padding" layout="column">\n        <p>$ctrl.success.message</p>\n        <md-button class="bi-reset-pw" ui-sref="login" md-no-ink> Zurück zum login</md-button>\n      </md-content>\n    </form>\n  </div>\n  <div class="bi-copyright"><span>&copy; 2017</span></div>\n</div>\n'),e.put("app/routes/login/el.html",'<div layout="column" layout-align-xs="start center" layout-align-gt-xs="center center" layout-fill="layout-fill" id="login">\n  <h1 class="bi-powered">POWERED BY CORE</h1>\n  <div class="login-box md-whiteframe-z2" layout="column">\n    <form name="form" novalidate="">\n      <md-content class="md-padding" layout="column">\n        <h2 class="bi-headline" app-title=""></h2>\n        <md-input-container>\n          <label>Nutzername</label>\n          <input type="text" ng-model="$ctrl.user.username" name="username" required="" ng-minlength="3" md-autofocus>\n          <div ng-messages="form.username.$error" role="alert" ng-show="form.username.$dirty">\n            <div ng-message="required">Geben Sie einen Namen ein.</div>\n            <div ng-message="minlength">Der Name muss aus mindestens 3 Zeichen bestehen.</div>\n          </div>\n        </md-input-container>\n        <md-input-container>\n          <label>Passwort</label>\n          <input ng-model="$ctrl.user.password" name="password" type="password" required="" ng-minlength="3">\n\n          <div ng-messages="form.password.$error" role="alert" ng-show="form.password.$dirty">\n            <div ng-message="required">Geben Sie ein Passwort ein.</div>\n            <div ng-message="minlength">Das Passwort muss aus mindestens 3 Zeichen bestehen.</div>\n          </div>\n\n          <div class="bi-alert md-block" ng-if="$ctrl.error" role="alert">\n            <span class="md-body-1" md-colors="{color: \'warn-500\'}">Bitte überprüfen Sie ihren Namen und das Passwort.</span>\n          </div>\n        </md-input-container>\n        <div layout="column">\n          <md-button type="submit" class="md-raised md-primary" ng-disabled="form.$invalid" ng-click="$ctrl.submit()">\n            LOGIN</md-button>\n        </div>\n        <br>\n        <md-button class="bi-reset-pw" ui-sref="forgot-password" md-no-ink="">Passwort zurücksetzen</md-button>\n      </md-content>\n    </form>\n  </div>\n  <div class="bi-copyright"><span>&copy; 2017</span></div>\n</div>\n'),e.put("app/routes/reset-password/el.html",'<div layout="column" layout-align-xs="start center" layout-align-gt-xs="center center" layout-fill="layout-fill" id="login">\n  <h1 class="bi-powered">POWERED BY CORE</h1>\n  <div class="login-box md-whiteframe-z2" layout="column">\n    <form name="form" novalidate ng-submit="$ctrl.submit($event)">\n      <md-content class="md-padding" layout="column">\n        <h2>\n          Neues Passwort\n        </h2>\n        <md-input-container class="md-block">\n          <label>Neues Passwort</label>\n          <input ng-model="$ctrl.user.password" name="password" type="password" required ng-minlength="3" ng-disabled="$ctrl.error">\n          <div ng-messages="form.password.$error" role="alert" ng-if="form.password.$dirty">\n            <div ng-message="required">Geben Sie ein neues Passwort ein.</div>\n            <div ng-message="minlength">Das Passwort muss aus mindestens 6 Zeichen bestehen.</div>\n          </div>\n        </md-input-container>\n        <md-input-container class="md-block">\n          <label>Passwort wiederholen</label>\n          <input ng-model="$ctrl.confirmPassword" name="confirmPassword" type="password" required ng-disabled="$ctrl.error" ng-minlength="3" compare-to="$ctrl.user.password">\n          <div ng-messages="form.confirmPassword.$error" role="alert" ng-if="form.confirmPassword.$dirty">\n            <div ng-message="required">Geben Sie ein neues Passwort ein.</div>\n            <div ng-message="minlength">Das Passwort muss aus mindestens 6 Zeichen bestehen.</div>\n            <div ng-message="compareTo">Die Passwörter müssen übereinstimmen.</div>\n\n          </div>\n          <br>\n          <div class="c-alert md-block" ng-if="$ctrl.error">\n            <span class="md-body-2">{{$ctrl.error}}</span><br>\n            <a href="#" ui-sref="forgot-password">Create new token</a>\n          </div>\n        </md-input-container>\n\n        <md-button type="submit" class="md-raised md-primary" ng-disabled="form.$invalid || $ctrl.error">Weiter\n        </md-button>\n      </md-content>\n\n    </form>\n  </div>\n  <div class="bi-copyright"><span>&copy; 2017</span></div>\n</div>\n')}]);