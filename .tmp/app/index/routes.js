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
