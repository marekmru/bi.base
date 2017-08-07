/** @ngInject */
function authRoutes($stateProvider, $urlRouterProvider, $sceProvider) {
  // $locationProvider.html5Mode(true).hashPrefix('!');
  $stateProvider
    .state('login', {
      url: '/',
      component: 'loginComponent'
    })
    .state('forgot-password', {
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
export default authRoutes;
