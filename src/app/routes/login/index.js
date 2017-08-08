import './style.scss';
let _$state;
let _BIAuthService;
let _BIAuthEnv;
export const LoginComponent = {
  template: require('./el.html'),
  controller: class {
    /** @ngInject */
    constructor($state, BIAuthService, BIAuthEnv) {
      _$state = $state;
      _BIAuthService = BIAuthService;
      _BIAuthEnv = BIAuthEnv;
    }

    _goMainRoute() {
      if (angular.isDefined(_BIAuthEnv.mainRoute.route) && angular.isDefined(_BIAuthEnv.mainRoute.param)) {
        _$state.go(_BIAuthEnv.mainRoute.route, _BIAuthEnv.mainRoute.param);
      } else {
        _$state.go(_BIAuthEnv.mainRoute);
      }
    }
    submit() {
      _BIAuthService.login(this.user).then(() => {
        this._goMainRoute();
      },
      data => {
        this.error = angular.isString(data) ? data : true;
      }
      );
    }
    $onInit() {
      angular.extend(this, {
        error: undefined,
        user: {
          username: null,
          password: null
        }
      });
    }

    $onDestroy() {}
  }
};
