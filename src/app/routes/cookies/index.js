angular
  .module('bi.base')
  .component('cookiesComponent', {
    templateUrl: './app/routes/cookies/el.html',
    controller: CookiesController
  });

/** @ngInject */
/* eslint-disable max-params */
function CookiesController() {
  var vm = this;

  vm.$onInit = function () {
    console.log('init cookies');
  };
}
