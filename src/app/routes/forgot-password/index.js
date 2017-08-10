angular
  .module('bi.base')
  .component('forgotPasswordComponent', {
    templateUrl: './app/routes/forgot-password/el.html',
    controller: ForgotPasswordController
  });

/** @ngInject */
function ForgotPasswordController(BIAuthService) {
  var vm = this;
  vm.user = {
    email: ''
  };
  vm.submit = function () {
    BIAuthService.reset(vm.user).then(function () {
      vm.error = undefined;
      vm.success = {
        success: true,
        message: 'Eine Email mit einem Link zum zurücksetzen ihres Passwortes wurde an folgende Adresse geschickt: \n\n' + vm.user.email + '.'
      };
    }, function (error) {
      vm.error = error.email + '.';
    });
  };
}
