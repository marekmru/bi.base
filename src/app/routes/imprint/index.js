angular
  .module('bi.base')
  .component('imprintComponent', {
    templateUrl: './app/routes/imprint/el.html',
    controller: Ctrl
  });

/** @ngInject */
/* eslint-disable max-params */
function Ctrl() {
  var vm = this;

  vm.$onInit = function () {
  };
}
