angular
  .module('bi.base')
  .factory('BiDialogService', BiDialogService);

/** @ngInject */
function BiDialogService($mdDialog, $mdMedia) {
  var defaults = {
    title: 'This is an alert title',
    content: 'You can specify some description text in here.',
    okLabel: 'Ok'
  };
  var advancedDefaults = {
    controller: 'DialogController',
    templateUrl: '../../views/dialog.html',
    clickOutsideToClose: true
  };
  var customFullscreen = $mdMedia('xs') || $mdMedia('sm');

  var service = {
    showAlert: showAlert,
    showConfirm: showConfirm,
    showAdvanced: showAdvanced,
    showTemplateDialog: showTemplateDialog
  };

  return service;

  // //////////

  function build(dialog, ev, title, content, okLabel) {
    title = title || defaults.title;
    content = content || defaults.content;
    okLabel = okLabel || defaults.okLabel;

    var modalDialog = dialog
      .title(title)
      .textContent(content)
      .ok(okLabel);

    if (ev) {
      modalDialog.targetEvent(ev);
    }

    return modalDialog;
  }

  function buildAdvanced(ev, controller, templateUrl, clickOutsideToClose) {
    var useFullScreen = ($mdMedia('sm') || $mdMedia('xs')) && customFullscreen;
    controller = controller || advancedDefaults.title;
    templateUrl = templateUrl || advancedDefaults.templateUrl;
    clickOutsideToClose = clickOutsideToClose || advancedDefaults.clickOutsideToClose;

    return {
      controller: controller,
      controllerAs: '$ctrl',
      template: templateUrl,
      parent: angular.element(document.body),
      targetEvent: ev,
      clickOutsideToClose: clickOutsideToClose,
      fullscreen: useFullScreen
    };
  }

  /**
   * Display an alert dialog.
   * Appending dialog to document.body to cover sidenav in docs app
   * Modal dialogs should fully cover application
   * to prevent interaction outside of dialog.
   * @param  {Event} ev - The event object.
   * @param  {string} title - The title of the dialog.
   * @param  {string} content - The text of the dialog.
   * @param  {string} okLabel - Label for 'OK' button.
   * @return {void}
   */
  function showAlert(ev, title, content, okLabel) {
    var p = angular.element(document.body);
    var alert = $mdDialog.alert()
      .parent(p)
      .clickOutsideToClose(true);

    return $mdDialog.show(
      build(
        alert,
        ev,
        title,
        content,
        okLabel
      )
    );
  }

  function showTemplateDialog(ev, requireTemplate, data) {
    var parent = angular.element(document.body);
    return $mdDialog.show({
      parent: parent,
      targetEvent: ev || null,
      template: requireTemplate,
      locals: {
        data: data
      },
      controller: function ($scope, $mdDialog, data) {
        $scope.data = data;
        $scope.closeDialog = function () {
          $mdDialog.hide();
        };
      }
    });
  }
/* eslint-disable max-params */
  function showConfirm(ev, title, content, okLabel, cancelLabel) {
    // Appending dialog to document.body to cover sidenav in docs app
    var confirm = $mdDialog.confirm()
      .cancel(cancelLabel);

    return $mdDialog.show(
      build(
        confirm,
        ev,
        title,
        content,
        okLabel
      )
    ).then(function () {
      return true;
    }, function () {
      return false;
    });
  }

  function showAdvanced(ev, controller, requireTemplate, clickOutsideToClose) {
    $mdDialog.show(buildAdvanced(
      ev,
      controller,
      requireTemplate,
      clickOutsideToClose
    )).then(function (answer) {
      return answer;
    }, function () {
      return false;
    });
  }
}
