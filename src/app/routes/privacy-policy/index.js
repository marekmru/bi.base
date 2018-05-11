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
function PPController($rootScope, BIEvents) {
  var vm = this;
  vm.showImprint = function () {
    $rootScope.$broadcast(BIEvents.SHOW_COMPONENT, {type: 'imprint'});
  };
  vm.$onInit = function () {
  };
}
