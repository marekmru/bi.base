angular
  .module('bi.base')
  .component('resetPasswordComponent', {
    templateUrl: './app/routes/reset-password/el.html',
    controller: ResetPasswordController
  });

/** @ngInject */
function ResetPasswordController(BIAuthService, $state, $stateParams) {
  var vm = this;
  vm.user = {
    // eslint-disable-next-line
    password_code: $stateParams.code,
    password: undefined
  };
  vm.submit = function () {
    BIAuthService.reset(this.user).then(function () {
      $state.go('login');
    }, function (error) {
      vm.error = error;
    });
  };
}
