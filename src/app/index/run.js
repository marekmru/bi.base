angular
  .module('bi.base')
  .run(run);

/** @ngInject */
function run(BIAuthEnv, $log, $state, $rootScope, BIEvents, $mdDialog, $window) {
  if (angular.isUndefined(BIAuthEnv.mainRoute)) {
    $log.error('Please define the main route of the application in index/config.js !!!');
  }

  var unwatch1 = $rootScope.$on(BIEvents.UNAUTHORIZED, function () {
    // $state.go('login');
    // $window.location.reload(true);
    $state.go('login', null, {
      notify: false
    }).then($window.location.reload);
  });
  $state.defaultErrorHandler(function () {});

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
}
