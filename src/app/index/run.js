angular
  .module('bi.base')
  .run(run);
/* eslint-disable max-params */
/** @ngInject */
function run(BIAuthEnv, $injector, $rootScope, BIEvents, $mdDialog, $window) {
  var unwatch1 = $rootScope.$on(BIEvents.UNAUTHORIZED, function (event, next) {
    const redirection = angular.isDefined(next) ? {
      next: next
    } : null;
    $injector.get('$state').go('login', redirection, {
      notify: false
    }).then($window.location.reload);
  });
  var unwatch3 = $rootScope.$on(BIEvents.FORBIDDEN, function (event, error) {
    show403(error);
  });
  var unwatch4 = $rootScope.$on(BIEvents.SHOW_COMPONENT, function (event, data) {
    showDSE(data.type);
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
  var show403 = function () {
    /** @ngInject */
    function DialogController($scope, $mdDialog, BIAuthEnv, $state) {
      $scope.closeDialog = function () {
        $state.go('login');
        $mdDialog.hide();
      };
    }
    var bcAlert = $mdDialog.alert({
      clickOutsideToClose: false,
      escapeToClose: false,
      controller: DialogController,
      template: '<md-dialog aria-label="Error dialog" style="padding: 16px;">' +
        '  <md-dialog-content>' +
        '    <p><strong>Fehler 403: Zugriff verweigert</strong></p><p></p>Bitte kontaktieren Sie uns unter:<br>' +
        '      <a href="mailto:bi-ops@plan-net.com">bi-ops@plan-net.com</a>' +
        '    </p>' +
        '  </md-dialog-content>' +
        '  <md-dialog-actions>' +
        '    <md-button ng-click="closeDialog()" class="md-primary">' +
        '      OK' +
        '    </md-button>' +
        '  </md-dialog-actions>' +
        '</md-dialog>'
    });
    $mdDialog
      .show(bcAlert)
      .finally(function () {
        bcAlert = undefined;
      });
  };
  var showDSE = function (type) {
    /** @ngInject */
    function DialogController($scope, $mdDialog) {
      $scope.closeDialog = function () {
        // $state.go('login');
        $mdDialog.hide();
      };
    }
    const component = (type === 'dse') ? '<pp-component type="layer"></pp-component>' : '<imprint-component type="layer"></imprint-component>';
    var bcAlert = $mdDialog.alert({
      clickOutsideToClose: false,
      escapeToClose: false,
      controller: DialogController,
      template: '<md-dialog style="padding: 16px;">' +
        '  <md-dialog-content>' +
        component +
        '  </md-dialog-content>' +
        '  <md-dialog-actions>' +
        '    <md-button ng-click="closeDialog()" class="md-primary">' +
        '      Schließen' +
        '    </md-button>' +
        '  </md-dialog-actions>' +
        '</md-dialog>'
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
    unwatch3();
    unwatch4();
  }); // Remove state rejection errors
}
