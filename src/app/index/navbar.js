angular
  .module('bi.base')
  .component('navbar', {
    templateUrl: './app/index/navbar.template.html',
    controller: NavbarController
  });
/* eslint-disable */
/** @ngInject */
function NavbarController($mdSidenav, $transitions, BIAuthEnv, BIAuthService, $state, $rootScope, $window) {
  var vm = this;
  var _unwatch;
  var _unwatch2;
  vm.hideLoader = true;
  vm.toggleMenu = function () {
    $mdSidenav('md-sidenav-left').toggle();
  };
/*   vm.showDatenschutz = function () {
    $rootScope.$broadcast(BIEvents.SHOW_COMPONENT, {type: 'dse'});
  }; */
  vm.goMainRoute = function () {
    if (angular.isDefined(BIAuthEnv.mainRoute.route) && angular.isDefined(BIAuthEnv.mainRoute.param)) {
      $state.go(BIAuthEnv.mainRoute.route, BIAuthEnv.mainRoute.param);
    } else {
      $state.go(BIAuthEnv.mainRoute);
    }
  };
  var goLogin = function () {
    //$state.go('login')
    //window.setTimeout(location.reload, 333)
  }
  vm.logout = function () {
    BIAuthService.logout()
    $state.go('login')
    window.setTimeout(function(){
      window.location.reload()
    }, 250)
  };
  vm.onLoad = function (event, value) {
    vm.hideLoader = !value;
  };
  vm.$onInit = function () {
    _unwatch2 = $rootScope.$on('BI.EVENTS.LOAD', vm.onLoad);
    vm.vis = true;
    vm.profile = undefined;
    var hiddenIn = BIAuthEnv.noAuthRoutes;
    _unwatch = $transitions.onStart({
    }, function (transition) {
      $mdSidenav('md-sidenav-left').close();
      vm.currentState = transition.to().name;
      var isVisibleNavbarState = hiddenIn.indexOf(vm.currentState) === -1;
      vm.vis = isVisibleNavbarState;
      if (angular.isUndefined(vm.profile)) {
        BIAuthService.profile().then(
          function (value) {
            vm.profile = value;
          },
          function () {
            vm.profile = undefined;
          });
      }
    });
  };

  vm.$onDestroy = function () {
    _unwatch();
    _unwatch2();
  };
  // vm.$onDestroy = function () {};
}
