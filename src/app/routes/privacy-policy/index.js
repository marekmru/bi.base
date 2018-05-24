angular
  .module('bi.base')
  .component('ppComponent', {
    templateUrl: './app/routes/privacy-policy/el.html',
    controller: PPController,
    bindings: {
      type: '@'
    }
  });

/** @ngInject */
function PPController($rootScope, BIEvents, $state) {
  var vm = this;
  vm.showImprint = function () {
    if ($state.current.name === 'login') {
      $rootScope.$broadcast(BIEvents.SHOW_COMPONENT, {type: 'imprint'});
    } else {
      $state.go('imprint');
    }
  };
  vm.$onInit = function () {
  };
}
