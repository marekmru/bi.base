export class BIAuthService {
  /** @ngInject */
  // eslint-disable-next-line
  constructor(BIAuthEnv, $q, $http) {
    this.BIAuthEnv = BIAuthEnv;
    this.$http = $http;
    this.$q = $q;
    // Const url = 'https://bi.plan-net.com/api/v2';
    const url = BIAuthEnv.basePath;
    // BIAuthEnv.basePath
    this.EP = {
      login: `${url}/login2`,
      logout: `${url}/logout`,
      reset: `${url}/reset`,
      profile: `${url}/profile`,
      info: `${url}/info`
    };
    this._user = {
      isAuthenticated: false
    };
  }

  _getMessage(object) {
    if (Object.prototype.hasOwnProperty.call(object, 'message')) {
      return object;
    }
    for (let i = 0; i < Object.keys(object).length; i++) {
      if (angular.isObject(object[Object.keys(object)[i]])) {
        const o = this._getMessage(object[Object.keys(object)[i]]);
        if (o !== null) {
          return o;
        }
      }
    }
    return null;
  }
  handleError(response) {
    const message = this._getMessage(response).message;
    if (message === null) {
      return this.$q.reject(this.BIAuthEnv.unknown);
    }
    return this.$q.reject(message);
  }

  handleSuccess(response) {
    return response.data.result;
  }

  info() {
    return this.$http({
      method: 'GET',
      url: this.EP.info
    }).then(this.handleSuccess, this.handleError);
  }

  reset(data) {
    if (angular.isDefined(data.password_code)) {
      return this.$http({
        method: 'POST',
        data,
        url: this.EP.reset
      }).then(this.handleSuccess, this.handleError);
    }
    return this.$http({
      method: 'GET',
      url: `${this.EP.reset}?email=${data.email}`
    }).then(this.handleSuccess, this.handleError);
  }

  profile(force) {
    if (this._user.isAuthenticated && !force) {
      return this.$q.when(this._user);
    }
    return this.$http({
      method: 'GET',
      url: this.EP.profile
    }).then(data => {
      this._user = angular.extend(data.data.result, {
        isAuthenticated: true
      });
      return this._user;
    }, this.handleError);
  }

  logout() {
    this._user = {
      isAuthenticated: false
    };
    return this.$http({
      method: 'GET',
      url: this.EP.logout
    }).then(this.handleSuccess, this.handleError);
  }

  login(userData) {
    return this.$http({
      method: 'POST',
      url: this.EP.login,
      data: userData
    }).then(() => this.profile(true), this.handleError);
  }
}
