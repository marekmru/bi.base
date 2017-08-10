
ResetPasswordController.$inject = ["BIAuthService", "$state", "$stateParams"];
LoginController.$inject = ["$state", "BIAuthService", "BIAuthEnv"];
ForgotPasswordController.$inject = ["BIAuthService"];
fn.$inject = ["BIAuthEnv", "$q", "$http"];
run.$inject = ["BIAuthEnv", "$log", "$state", "$rootScope", "BIEvents", "$mdDialog", "$window"];
routes.$inject = ["$stateProvider", "$urlRouterProvider", "$sceProvider"];
mdtheme.$inject = ["$mdThemingProvider"];
fn3.$inject = ["BIAuthEnv"];
fn5.$inject = ["$interval"];
fn6.$inject = ["$interval"];
config.$inject = ["$logProvider", "BIAuthEnvProvider", "$httpProvider", "$mdAriaProvider", "$compileProvider", "$qProvider"];
configInt.$inject = ["$httpProvider"];angular
  .module('bi.base', [
    'ngAria',
    'ngAnimate',
    'ngSanitize',
    'ngMessages',
    'ui.router',
    'ngMaterial'
  ]);

angular
  .module('bi.base')
  .component('resetPasswordComponent', {
    templateUrl: './app/routes/reset-password/el.html',
    controller: ResetPasswordController
  });

/** @ngInject */
function ResetPasswordController(BIAuthService, $state, $stateParams) {
  var vm = this;
  vm.user = {
    // eslint-disable-next-line
    password_code: $stateParams.code,
    password: undefined
  };
  vm.submit = function () {
    BIAuthService.reset(this.user).then(function () {
      $state.go('login');
    }, function (error) {
      vm.error = error.message.password_code + '.';
    });
  };
}

angular
  .module('bi.base')
  .component('loginComponent', {
    templateUrl: './app/routes/login/el.html',
    controller: LoginController
  });

/** @ngInject */
function LoginController($state, BIAuthService, BIAuthEnv) {
  var vm = this;

  vm._goMainRoute = function () {
    if (angular.isDefined(BIAuthEnv.mainRoute.route) && angular.isDefined(BIAuthEnv.mainRoute.param)) {
      $state.go(BIAuthEnv.mainRoute.route, BIAuthEnv.mainRoute.param);
    } else {
      $state.go(BIAuthEnv.mainRoute);
    }
  };
  vm.submit = function () {
    BIAuthService.login(vm.user).then(vm._goMainRoute,
      function (data) {
        vm.error = angular.isString(data) ? data : true;
      }
    );
  };
  vm.$onInit = function () {
    BIAuthService.profile().then(this._goMainRoute);
    angular.extend(this, {
      error: undefined,
      user: {
        username: null,
        password: null
      }
    });
  };

  // vm.$onDestroy = function () {};
}

angular
  .module('bi.base')
  .component('forgotPasswordComponent', {
    templateUrl: './app/routes/forgot-password/el.html',
    controller: ForgotPasswordController
  });

/** @ngInject */
function ForgotPasswordController(BIAuthService) {
  var vm = this;
  vm.user = {
    email: ''
  };
  vm.submit = function () {
    BIAuthService.reset(vm.user).then(function () {
      vm.error = undefined;
      vm.success = {
        success: true,
        message: 'Eine Email mit einem Link zum zurücksetzen ihres Passwortes wurde an folgende Adresse geschickt: \n\n' + vm.user.email + '.'
      };
    }, function (error) {
      vm.error = error.email + '.';
    });
  };
}

angular
  .module('bi.base')
  .service('BIAuthService', fn);

/** @ngInject */
function fn(BIAuthEnv, $q, $http) {
  this.BIAuthEnv = BIAuthEnv;
  this.$http = $http;
  this.$q = $q;
  var url = BIAuthEnv.authPath;
  this.EP = {
    login: url + '/login2',
    logout: url + '/logout',
    reset: url + '/reset',
    profile: url + '/profile',
    info: url + '/info'
  };
  this._user = {
    isAuthenticated: false
  };
  this._getMessage = function (object) {
    if (Object.prototype.hasOwnProperty.call(object, 'message')) {
      return object;
    }
    for (var i = 0; i < Object.keys(object).length; i++) {
      if (angular.isObject(object[Object.keys(object)[i]])) {
        var o = this._getMessage(object[Object.keys(object)[i]]);
        if (o !== null) {
          return o;
        }
      }
    }
    return null;
  };
  this.handleError = function (response) {
    var message = this._getMessage(response).message;
    if (message === null) {
      return this.$q.reject(this.BIAuthEnv.unknown);
    }
    return this.$q.reject(message);
  };

  this.handleSuccess = function (response) {
    return response.data.result;
  };

  this.info = function () {
    return this.$http({
      method: 'GET',
      url: this.EP.info
    }).then(this.handleSuccess, this.handleError);
  };

  this.reset = function (data) {
    if (angular.isDefined(data.password_code)) {
      return this.$http({
        method: 'POST',
        data: data,
        url: this.EP.reset
      }).then(this.handleSuccess, this.handleError);
    }
    return this.$http({
      method: 'GET',
      url: this.EP.reset + '?email=' + data.email
    }).then(this.handleSuccess, this.handleError);
  };

  this.profile = function (force) {
    if (this._user.isAuthenticated && !force) {
      return this.$q.when(this._user);
    }
    return this.$http({
      method: 'GET',
      url: this.EP.profile
    }).then(function (data) {
      this._user = angular.extend(data.data.result, {
        isAuthenticated: true
      });
      return this._user;
    }, this.handleError);
  };

  this.logout = function () {
    this._user = {
      isAuthenticated: false
    };
    return this.$http({
      method: 'GET',
      url: this.EP.logout
    }).then(this.handleSuccess, this.handleError);
  };

  this.login = function (userData) {
    return this.$http({
      method: 'POST',
      url: this.EP.login,
      data: userData
    }).then(function () {
      return this.profile(true);
    }, this.handleError);
  };
}

angular
  .module('bi.base')
  .run(run);

/** @ngInject */
function run(BIAuthEnv, $log, $state, $rootScope, BIEvents, $mdDialog, $window) {
  if (angular.isUndefined(BIAuthEnv.mainRoute)) {
    $log.error('Please define the main route of the application in index/config.js !!!');
  }

  var unwatch1 = $rootScope.$on(BIEvents.UNAUTHORIZED, function () {
    $state.go('login');
    // $window.location.reload(true);
    $state.go('login', null, {
      notify: false
    }).then($window.location.reload);
  });
  $state.defaultErrorHandler(function () {});

  var showAlert = function (error) {
    var bcAlert = $mdDialog.alert({
      clickOutsideToClose: true,
      escapeToClose: true,
      title: 'Fehler',
      textContent: angular.toJson(error),
      ok: 'OK'
    });
    $mdDialog
      .show(bcAlert)
      .finally(function () {
        bcAlert = undefined;
      });
  };
  // Handle response error golbally
  var unwatch2 = $rootScope.$on(BIEvents.ERROR, function (event, error) {
    showAlert(error);
  });

  $rootScope.$on('$destroy', function () {
    unwatch1();
    unwatch2();
  }); // Remove state rejection errors
}

angular
  .module('bi.base')
  .config(routes);

/** @ngInject */
function routes($stateProvider, $urlRouterProvider, $sceProvider) {
  $stateProvider
    .state('login', {
      url: '/',
      component: 'loginComponent'
    }).state('forgot-password', {
      url: '/forgot-password',
      component: 'forgotPasswordComponent'
    })
    .state('reset', {
      url: '/reset/:code',
      component: 'resetPasswordComponent'
    });
  $urlRouterProvider.otherwise('/');
  $sceProvider.enabled(false);
}

angular
  .module('bi.base')
  .config(mdtheme);

/** @ngInject */
function mdtheme($mdThemingProvider) {
  var customPrimary2 = {
    50: '#fae2e3',
    100: '#f3b7b9',
    200: '#eb878a',
    300: '#e3575b',
    400: '#dd3337',
    500: '#d70f14',
    600: '#d30d12',
    700: '#cd0b0e',
    800: '#c7080b',
    900: '#be0406',
    A100: '#ffe6e6',
    A200: '#ffb3b4',
    A400: '#ff8081',
    A700: '#ff6768',
    A900: '#000000',
    contrastDefaultColor: 'light',
    contrastDarkColors: [
      '50',
      '100',
      '200',
      '300',
      'A100',
      'A200',
      'A400',
      'A700',
      'A900'
    ],
    contrastLightColors: [
      '400',
      '500',
      '600',
      '700',
      '800',
      '900'
    ]
  };
  $mdThemingProvider
    .definePalette('customPrimary',
      customPrimary2);

  var customAccent2 = {
    50: '#ffffff',
    100: '#ffffff',
    200: '#ded2ff',
    300: '#a98aff',
    400: '#926cff',
    500: '#7c4dff',
    600: '#633ECC',
    700: '#442A8C',
    800: '#25174D',
    900: '#000000',
    A100: '#ffffff',
    A200: '#ede6ff',
    A400: '#a280ff',
    A700: '#8f66ff',
    contrastDefaultColor: 'light',
    contrastDarkColors: [
      '50',
      '100',
      '200',
      '300',
      '400',
      'A100',
      'A200',
      'A400',
      'A700'
    ],
    contrastLightColors: [
      '500',
      '600',
      '700',
      '800',
      '900'
    ]
  };

  $mdThemingProvider
    .definePalette('customAccent',
      customAccent2);

  var customWarn = {
    50: '#fefaf3',
    100: '#f9daab',
    200: '#f6c377',
    300: '#f1a534',
    400: '#ef9918',
    500: '#d9880f',
    600: '#bc760d',
    700: '#a0640b',
    800: '#835209',
    900: '#674007',
    A100: '#fff6e8',
    A200: '#ffcd82',
    A400: '#ffa41c',
    A700: '#f5980d',
    contrastDefaultColor: 'light',
    contrastDarkColors: [
      '50',
      '100',
      '200',
      '300',
      '400',
      '500',
      'A100',
      'A200',
      'A400',
      'A700'
    ],
    contrastLightColors: [
      '600',
      '700',
      '800',
      '900'
    ]
  };

  $mdThemingProvider
    .definePalette('customWarn',
      customWarn);

  $mdThemingProvider.theme('default')
    .primaryPalette('customPrimary', {

    })
    .accentPalette('customAccent', {
      default: '500',
      'hue-1': '900'
    })
    .warnPalette('customWarn');
}

angular
  .module('bi.base')
  /** @ngInject */
  // eslint-disable-next-line
  .provider('BIAuthEnv', [function () {
    var _config = {
      authPath: 'https://bi.plan-net.com/api/v2',
      basePath: 'http://localhost:5050',
      noAuthRoutes: ['login', 'forgot-password', 'reset-password'],
      mainRoute: undefined,
      errors: {
        unknown: 'An unknown error occurred.'
      },
      title: 'CORE',
      sidebarTemplate: './app/components/navbar/sidenav.template.html',
      internalName: 'core'
    };

    this.set = function (value) {
      Object.assign(_config, value);
    };
    this.$get = function () {
      return _config;
    };
  }]);

angular
  .module('bi.base')
  .directive('poweredBy', fn);

/** @ngInject */
function fn() {
  var directive = {
    restrict: 'A',
    scope: false,
    link: linkFunc
  };

  function linkFunc(scope, el) {
    el[0].setAttribute('data-after', 'POWERED BY CORE');
    scope.$on('$destroy', function () {});
  }

  return directive;
}

angular
  .module('bi.base')
  .directive('maintenanceMode', fn2);

/** @ngInject */
function fn2() {
  var directive = {
    restrict: 'E',
    scope: false,
    template: '<div layout="row" layout-align="center center" layout-padding>' +
      '      <div>' +
      '        <md-icon>' +
      '          build' +
      '        </md-icon>' +
      '      </div>' +
      '      <div>Das System befindet sich im Wartungsmodus</div>' +
      '      <md-button>' +
      '        Nochmal versuchen' +
      '      </md-button>' +
      '    </div>',
    link: linkFunc
  };

  function linkFunc() {
    //    scope.$on('$destroy', function() {});
  }

  return directive;
}

angular
  .module('bi.base')
  .directive('appTitle', fn3);

/** @ngInject */
function fn3(BIAuthEnv) {
  var directive = {
    restrict: 'A',
    scope: false,
    link: linkFunc
  };

  function linkFunc(scope, el) {
    var title = BIAuthEnv.title;
    var le = title.length;
    if (le <= 8) {
      el[0].classList.add('size-xl');
    } else if (le <= 13) {
      el[0].classList.add('size-l');
    } else {
      el[0].classList.add('size-m');
    }
    el[0].innerText = title;
    // Scope.$on('$destroy', () => {});
  }

  return directive;
}

angular
  .module('bi.base')
  .directive('compareTo', fn4);

/** @ngInject */
function fn4() {
  var directive = {
    restrict: 'A',
    require: 'ngModel',
    scope: {
      otherModelValue: '=compareTo'
    },
    link: linkFunc
  };

  function linkFunc(scope, element, attr, ngModel) {
    ngModel.$validators.compareTo = function (modelValue) {
      return modelValue === scope.otherModelValue;
    };
    var unwatch = scope.$watch('otherModelValue', function () {
      ngModel.$validate();
    });
    scope.$on('$destroy', function () {
      unwatch();
    });
  }

  return directive;
}

var isChrome = function () {
  return navigator.userAgent.match(/chrome/i) && !navigator.userAgent.match(/edge/i);
};

angular
  .module('bi.base')
  .directive('requiredDirective', fn5);

/** @ngInject */
function fn5($interval) {
  var directive = {
    priority: 100,
    require: '?ngModel',
    link: linkFunc
  };

  function linkFunc(scope, el, attr, ngModel) {
    if (angular.isUndefined(ngModel)) {
      return;
    }
    var timer = $interval(function () {
      tries++;
      if (tries > 5) {
        $interval.cancel(timer);
      }
      ngModel.$validate();
    }, 100);

    var validator = function (modelValue, viewValue) {
      if (isChrome() && el[0].matches('input[type=password]:-webkit-autofill')) {
        $interval.cancel(timer);
        return true;
      }
      return originalValidator(modelValue, viewValue);
    };
    var tries = 0;
    var originalValidator = ngModel.$validators.required;
    ngModel.$validators.required = validator;
    scope.$on('$destroy', function () {
      $interval.cancel(timer);
    });
  }

  return directive;
}

angular
  .module('bi.base')
  .directive('appTitle', fn6);

/** @ngInject */
function fn6($interval) {
  var directive = {
    restrict: 'E',
    scope: false,
    link: linkFunc
  };

  function linkFunc(scope, el) {
    if (isChrome()) {
      var tries = 0;
      var timer = $interval(function () {
        tries++;
        if (tries > 5) {
          $interval.cancel(timer);
        }
        if (el[0].querySelector('input[type=password]:-webkit-autofill')) {
          el.addClass('md-input-has-value');
          $interval.cancel(timer);
        }
      }, 100);
      scope.$on('$destroy', function () {
        $interval.cancel(timer);
      });
    }
  }

  return directive;
}

angular
  .module('bi.base')
  .config(config);

/** @ngInject */
function config($logProvider, BIAuthEnvProvider, $httpProvider, $mdAriaProvider, $compileProvider, $qProvider) {
  $httpProvider.useApplyAsync(true);
  $compileProvider.debugInfoEnabled(false);

  $mdAriaProvider.disableWarnings();
  $logProvider.debugEnabled(false);
  $qProvider.errorOnUnhandledRejections(false);

  $httpProvider.defaults.withCredentials = true;
  $httpProvider.defaults.useXDomain = true;
  $httpProvider.defaults.headers.common.Accept = 'application/json';
  delete $httpProvider.defaults.headers.common['X-Requested-With'];
}

angular
  .module('bi.base')
  .config(configInt);

/** @ngInject */
function configInt($httpProvider) {
  $httpProvider.interceptors.push(["$rootScope", "$q", "BIEvents", "$state", "BIAuthEnv", function ($rootScope, $q, BIEvents, $state, BIAuthEnv) {
    var isAuthPath = function () {
      return BIAuthEnv.noAuthRoutes.join('|').indexOf($state.current.name) > -1 && $state.current.name.length > 1;
    };
    return {
      request: function (request) {
        $rootScope.$broadcast(BIEvents.LOAD, true);
        return request;
      },
      response: function (response) {
        $rootScope.$broadcast(BIEvents.LOAD, false);
        return response;
      },
      responseError: function (rejection) {
        $rootScope.$broadcast(BIEvents.LOAD, false);
        if (rejection.status === 401 && isAuthPath() === false) {
          $rootScope.$broadcast(BIEvents.UNAUTHORIZED);
          return $q(function () {
            return null;
          });
        }
        return $q.reject(rejection);
      }
    };
  }]);
}

angular
  .module('bi.base')
  .constant('BIEvents', {
    UNAUTHORIZED: 'bi.auth.unauthorized',
    AUTHORIZED: 'bi.auth.authorized',
    ERROR: 'bi.error',
    VERSION: 'bi.version',
    LOAD: 'bi.ajax.load',
    MAINTENANCE: 'bi.maintenence'
  });

angular.module('app').run(['$templateCache', function($templateCache) {$templateCache.put('bi.base/routes/forgot-password/el.html','<div layout="column" layout-align-xs="start center" layout-align-gt-xs="center center" layout-fill="layout-fill" id="login">\n  <h1 class="bi-powered">POWERED BY CORE</h1>\n  <div class="login-box md-whiteframe-z2" layout="column">\n    <form name="form" novalidate ng-submit="$ctrl.submit($event)">\n      <md-content class="md-padding" layout="column" ng-if="$ctrl.success.message == undefined">\n        <h2>\n          Passwort zur\xFCcksetzen\n        </h2>\n        <md-input-container>\n          <label>Ihre Email Adresse</label>\n          <input type="email" ng-model="$ctrl.user.email" name="email" ng-pattern="/^.+@.+\\..+$/" required ng-minlength="5">\n\n          <div ng-messages="form.email.$error" role="alert" ng-if="form.email.$dirty">\n            <div ng-message="required">Geben Sie eine Email Adresse ein.</div>\n            <div ng-message="email">Geben Sie eine valide Email Adresse ein.</div>\n            <div ng-message="minlength">Das Passwort muss aus mindestens 5 Zeichen bestehen.</div>\n          </div>\n          <div class="bi-alert md-block" ng-if="$ctrl.error" role="alert">\n            <span class="md-body-1">{{$ctrl.error}}</span>\n          </div>\n        </md-input-container>\n        <div layout="column">\n          <md-button type="submit" class="md-raised md-primary" ng-disabled="form.$invalid">ANFORDERN</md-button>\n        </div>\n        <br>\n        <md-button class="bi-reset-pw" ui-sref="login" md-no-ink> Zur\xFCck zum login</md-button>\n      </md-content>\n      <md-content ng-if="$ctrl.success.message" class="md-padding" layout="column">\n        <p>$ctrl.success.message</p>\n        <md-button class="bi-reset-pw" ui-sref="login" md-no-ink> Zur\xFCck zum login</md-button>\n      </md-content>\n    </form>\n  </div>\n  <div class="bi-copyright"><span>&copy; 2017</span></div>\n</div>\n');
$templateCache.put('bi.base/routes/reset-password/el.html','<div layout="column" layout-align-xs="start center" layout-align-gt-xs="center center" layout-fill="layout-fill" id="login">\n  <h1 class="bi-powered">POWERED BY CORE</h1>\n  <div class="login-box md-whiteframe-z2" layout="column">\n    <form name="form" novalidate ng-submit="$ctrl.submit($event)">\n      <md-content class="md-padding" layout="column">\n        <h2>\n          Neues Passwort\n        </h2>\n        <md-input-container class="md-block">\n          <label>Neues Passwort</label>\n          <input ng-model="$ctrl.user.password" name="password" type="password" required ng-minlength="3" ng-disabled="$ctrl.error">\n          <div ng-messages="form.password.$error" role="alert" ng-if="form.password.$dirty">\n            <div ng-message="required">Geben Sie ein neues Passwort ein.</div>\n            <div ng-message="minlength">Das Passwort muss aus mindestens 6 Zeichen bestehen.</div>\n          </div>\n        </md-input-container>\n        <md-input-container class="md-block">\n          <label>Passwort wiederholen</label>\n          <input ng-model="$ctrl.confirmPassword" name="confirmPassword" type="password" required ng-disabled="$ctrl.error" ng-minlength="3" compare-to="$ctrl.user.password">\n          <div ng-messages="form.confirmPassword.$error" role="alert" ng-if="form.confirmPassword.$dirty">\n            <div ng-message="required">Geben Sie ein neues Passwort ein.</div>\n            <div ng-message="minlength">Das Passwort muss aus mindestens 6 Zeichen bestehen.</div>\n            <div ng-message="compareTo">Die Passw\xF6rter m\xFCssen \xFCbereinstimmen.</div>\n\n          </div>\n          <br>\n          <div class="c-alert md-block" ng-if="$ctrl.error">\n            <span class="md-body-2">{{$ctrl.error}}</span><br>\n            <a href="#" ui-sref="forgot-password">Create new token</a>\n          </div>\n        </md-input-container>\n\n        <md-button type="submit" class="md-raised md-primary" ng-disabled="form.$invalid || $ctrl.error">Weiter\n        </md-button>\n      </md-content>\n\n    </form>\n  </div>\n  <div class="bi-copyright"><span>&copy; 2017</span></div>\n</div>\n');
$templateCache.put('bi.base/routes/login/el.html','<div layout="column" layout-align-xs="start center" layout-align-gt-xs="center center" layout-fill="layout-fill" id="login">\n  <h1 class="bi-powered">POWERED BY CORE</h1>\n  <div class="login-box md-whiteframe-z2" layout="column">\n    <form name="form" novalidate="">\n      <md-content class="md-padding" layout="column">\n        <h2 class="bi-headline" app-title=""></h2>\n        <md-input-container>\n          <label>Nutzername</label>\n          <input type="text" ng-model="$ctrl.user.username" name="username" required="" ng-minlength="3" md-autofocus>\n          <div ng-messages="form.username.$error" role="alert" ng-show="form.username.$dirty">\n            <div ng-message="required">Geben Sie einen Namen ein.</div>\n            <div ng-message="minlength">Der Name muss aus mindestens 3 Zeichen bestehen.</div>\n          </div>\n        </md-input-container>\n        <md-input-container>\n          <label>Passwort</label>\n          <input ng-model="$ctrl.user.password" name="password" type="password" required="" ng-minlength="3">\n\n          <div ng-messages="form.password.$error" role="alert" ng-show="form.password.$dirty">\n            <div ng-message="required">Geben Sie ein Passwort ein.</div>\n            <div ng-message="minlength">Das Passwort muss aus mindestens 3 Zeichen bestehen.</div>\n          </div>\n\n          <div class="bi-alert md-block" ng-if="$ctrl.error" role="alert">\n            <span class="md-body-1" md-colors="{color: \'warn-500\'}">Bitte \xFCberpr\xFCfen Sie ihren Namen und das Passwort.</span>\n          </div>\n        </md-input-container>\n        <div layout="column">\n          <md-button type="submit" class="md-raised md-primary" ng-disabled="form.$invalid" ng-click="$ctrl.submit()">\n            LOGIN</md-button>\n        </div>\n        <br>\n        <md-button class="bi-reset-pw" ui-sref="forgot-password" md-no-ink="">Passwort zur\xFCcksetzen</md-button>\n      </md-content>\n    </form>\n  </div>\n  <div class="bi-copyright"><span>&copy; 2017</span></div>\n</div>\n');}]);