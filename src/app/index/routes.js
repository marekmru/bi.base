angular
  .module('bi.base')
  .config(routes);

/** @ngInject */
function routes($stateProvider, $locationProvider, $urlRouterProvider, $sceProvider) {
  $sceProvider.enabled(false);
  $stateProvider
    .state('login', {
      url: '/?next',
      component: 'loginComponent'
    }).state('forgot-password', {
      url: '/forgot-password',
      component: 'forgotPasswordComponent'
    })
    .state('reset', {
      url: '/reset/:code',
      component: 'resetPasswordComponent'
    });
  $locationProvider.html5Mode(false).hashPrefix('');
  $urlRouterProvider.otherwise('/');
}
