export default run;
/* eslint max-params: ["error", 10] */
/** @ngInject */
function run(BIAuthEnv, $log, $state, $rootScope, BIEvents, $mdDialog, $window) {
  if (angular.isUndefined(BIAuthEnv.mainRoute)) {
    $log.error('Please define the main route of the application in index/config.js !!!');
  }

  const unwatch1 = $rootScope.$on(BIEvents.UNAUTHORIZED, () => {
    $state.go('login');
    $window.location.reload(true);
  });
  $state.defaultErrorHandler(() => {});

  const showAlert = error => {
    let bcAlert = $mdDialog.alert({
      clickOutsideToClose: true,
      escapeToClose: true,
      title: 'Fehler',
      textContent: angular.toJson(error),
      ok: 'OK'
    });
    $mdDialog
      .show(bcAlert)
      .finally(() => {
        bcAlert = undefined;
      });
  };
  // Handle response error golbally
  const unwatch2 = $rootScope.$on(BIEvents.ERROR, (event, error) => {
    showAlert(error);
  });

  $rootScope.$on('$destroy', () => {
    unwatch1();
    unwatch2();
  }); // Remove state rejection errors
}
