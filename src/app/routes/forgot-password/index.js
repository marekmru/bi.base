let _BIAuthService;
export const ForgotPasswordComponent = {
  template: require('./el.html'),
  controller: class {
    /** @ngInject */
    constructor(BIAuthService) {
      _BIAuthService = BIAuthService;
      this.user = {
        email: ''
      };
    }
    submit() {
      _BIAuthService.reset(this.user).then(() => {
        this.error = undefined;
        this.success = {
          success: true,
          message: 'Eine Email mit einem Link zum zurücksetzen ihres Passwortes wurde an folgende Adresse geschickt: \n\n' + this.user.email + '.'
        };
      }, error => {
        /*eslint-disable */
        console.log(error);
        /*eslint-enable */
        this.error = error.email + '.';
      });
    }
  }

};
