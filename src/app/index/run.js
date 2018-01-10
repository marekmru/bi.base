angular
  .module('bi.base')
  .run(run);
/* eslint-disable max-params */
/** @ngInject */
function run(BIAuthEnv, $log, $injector, $rootScope, BIEvents, $mdDialog, $window) {
  if (angular.isUndefined(BIAuthEnv.mainRoute)) {
    $log.error('Please define the main route of the application in index/config.js !!!');
  }
  var unwatch1 = $rootScope.$on(BIEvents.UNAUTHORIZED, function (event, next) {
    const redirection = angular.isDefined(next) ? {
      next: next
    } : null;
    $injector.get('$state').go('login', redirection, {
      notify: false
    }).then($window.location.reload);
  });
  try {
    $injector.get('$state').defaultErrorHandler(angular.noop);
  } catch (err) {}

  var showAlert = function (error) {
    var bcAlert = $mdDialog.alert({
      clickOutsideToClose: true,
      escapeToClose: true,
      title: 'Fehler',
      textContent: angular.toJson(error),
      ok: 'OK'
    });
    $mdDialog
      .show(bcAlert)
      .finally(function () {
        bcAlert = undefined;
      });
  };
  // Handle response error golbally
  var unwatch2 = $rootScope.$on(BIEvents.ERROR, function (event, error) {
    showAlert(error);
  });

  $rootScope.$on('$destroy', function () {
    unwatch1();
    unwatch2();
  }); // Remove state rejection errors
  $log.info('PNBI.BASE - visit:', 'https://gist.github.com/marekmru/');
}
