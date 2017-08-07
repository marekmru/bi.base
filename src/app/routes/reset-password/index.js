let _BIAuthService;
let _$state;
export const ResetPasswordComponent = {
  template: require('./el.html'),
  controller: class {
    /** @ngInject */
    constructor(BIAuthService, $stateParams, $state) {
      _BIAuthService = BIAuthService;
      _$state = $state;
      /* eslint-disable camelcase */
      this.user = {
        password_code: $stateParams.code,
        password: undefined
      };
      /* eslint-enable camelcase */
    }

    submit() {
      _BIAuthService.reset(this.user).then(() => {
        _$state.go('login');
      }, error => {
        this.error = error.message.password_code + '.';
      });
    }
  }

};
