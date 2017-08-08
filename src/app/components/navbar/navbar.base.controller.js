import './style.scss';
let _$mdSidenav;
let _unwatch;
let _$transitions;
let _BIAuthEnv;
let _BIAuthService;
let _$state;
export default class NavbarBaseController {
  /** @ngInject */
  // eslint-disable-next-line
  constructor($mdSidenav, $transitions, BIAuthEnv, BIAuthService, $state) {
    _$mdSidenav = $mdSidenav;
    _$transitions = $transitions;
    _BIAuthEnv = BIAuthEnv;
    _BIAuthService = BIAuthService;
    _$state = $state;
  }
  toggleMenu() {
    _$mdSidenav('md-sidenav-left').toggle();
  }
  logout() {
    _BIAuthService.logout().then(() => {
      _$state.go('login');
    });
  }
  $onInit() {
    this.profile = undefined;
    const hiddenIn = _BIAuthEnv.noAuthRoutes;
    _unwatch = _$transitions.onStart({
      to: '*',
      from: '*'
    }, transition => {
      _$mdSidenav('md-sidenav-left').close();
      this.currentState = transition.to().name;
      const isVisibleNavbarState = hiddenIn.indexOf(this.currentState) === -1;
      this.vis = isVisibleNavbarState;
      if (angular.isUndefined(this.profile)) {
        _BIAuthService.profile().then(
          value => {
            this.profile = value;
          },
          () => {
            this.profile = undefined;
          });
      }
    });
  }

  $onDestroy() {
    _unwatch();
  }
}
