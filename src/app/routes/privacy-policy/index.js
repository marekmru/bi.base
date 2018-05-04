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
/* eslint-disable max-params */
function PPController() {
  var vm = this;

  vm.$onInit = function () {
  };
}
