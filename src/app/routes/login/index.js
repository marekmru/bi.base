angular
  .module('bi.base')
  .component('loginComponent', {
    templateUrl: './app/routes/login/el.html',
    controller: LoginController
  });

/** @ngInject */
/* eslint-disable max-params */
function LoginController($state, BIAuthService, BIAuthEnv, $location, $window) {
  var vm = this;
  var goMainRoute = function () {
    if (angular.isDefined($location.search().next)) {
      $window.location.assign($location.search().next);
    } else if (angular.isDefined(BIAuthEnv.mainRoute.route) && angular.isDefined(BIAuthEnv.mainRoute.param)) {
      $state.go(BIAuthEnv.mainRoute.route, BIAuthEnv.mainRoute.param);
    } else {
      $state.go(BIAuthEnv.mainRoute);
    }
  };
  vm.submit = function () {
    BIAuthService.login(vm.user).then(goMainRoute,
      function (data) {
        vm.error = angular.isString(data) ? data : true;
      }
    );
  };
  vm.$onInit = function () {
    BIAuthService.profile().then(
      goMainRoute,
      function () {
        vm.ready = true;
      });
    angular.extend(vm, {
      error: undefined,
      user: {
        username: null,
        password: null
      }
    });
  };

  // Vm.$onDestroy = function () {};
}
