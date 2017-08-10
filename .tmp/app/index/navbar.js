angular
  .module('bi.base')
  .component('loginComponent', {
    templateUrl: './app/routes/login/el.html',
    controller: LoginController
  });

/** @ngInject */
function LoginController($state, BIAuthService, BIAuthEnv, $log) {
  var $ctrl = this;
  $log.info('Login');
  // eslint-disable-next-line
  console.log('Login');
  $ctrl._goMainRoute = function () {
    if (angular.isDefined(BIAuthEnv.mainRoute.route) && angular.isDefined(BIAuthEnv.mainRoute.param)) {
      $state.go(BIAuthEnv.mainRoute.route, BIAuthEnv.mainRoute.param);
    } else {
      $state.go(BIAuthEnv.mainRoute);
    }
  };
  $ctrl.submit = function () {
    // eslint-disable-next-line
    console.log('login');
    BIAuthService.login($ctrl.user).then($ctrl._goMainRoute,
      function (data) {
        $ctrl.error = angular.isString(data) ? data : true;
      }
    );
  };
  $ctrl.$onInit = function () {
    BIAuthService.profile().then(this._goMainRoute);
    angular.extend($ctrl, {
      error: undefined,
      user: {
        username: null,
        password: null
      }
    });
  };

  // $ctrl.$onDestroy = function () {};
}
