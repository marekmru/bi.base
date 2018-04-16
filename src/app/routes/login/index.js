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
    BIAuthService.login(vm.user).then(
      // goMainRoute,
      function () {
        if (vm.dislaimerAccepted) {
          goMainRoute();
        } else {
          vm.dislaimerVisible = true;
        }
      },
      function (data) {
        vm.error = angular.isString(data) ? data : true;
      }
    );
  };
  vm.dislaimerAccept = function () {
    this.dislaimerAccepted = true;
    localStorage.setItem('dislaimerAccepted', angular.toJson(this.dislaimerAccepted));
    goMainRoute();
  };
  vm.showCookiesPage = function () {
    $state.go('cookies');
  };
  vm.$onInit = function () {
    const dislaimerAccepted = localStorage.getItem('dislaimerAccepted');
    if (dislaimerAccepted !== null) {
      vm.dislaimerAccepted = angular.fromJson(dislaimerAccepted);
    }

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
