angular
  .module('bi.base')
  .component('cookie', {
    templateUrl: './app/index/cookie.html',
    controller: CookieController,
    bindings: {
      profile: '<'
    }
  });
/* eslint-disable */
/** @ngInject */
function CookieController(BIAuthService, $state, $rootScope, BIEvents) {
  var vm = this;
  vm.vis = true;

  vm.setCookie = function () {
    BIAuthService.setPriPolCookie();
    vm.vis = false
  };

  vm.showDatenschutz = function () {
    $rootScope.$broadcast(BIEvents.SHOW_COMPONENT, {type: 'dse'});
  };
  vm.showImpressum = function () {
    $rootScope.$broadcast(BIEvents.SHOW_COMPONENT, {type: 'imprint'});
  };

  vm.$onChanges = function (changes) {
    try {
      const accepted = typeof changes.currentValue.opt_in === 'string';
      if (accepted) {
        vm.vis = false;
      }
    } catch (err) {}
  };

  vm.$onInit = function () {
    vm.vis = typeof BIAuthService.isPriPolCookieSet() !== 'string';
  };
}
