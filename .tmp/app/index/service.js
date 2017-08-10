angular
  .module('bi.base')
  .service('BIAuthService', BIAuthService);

/** @ngInject */
function BIAuthService(BIAuthEnv, $q, $http) {
  this.BIAuthEnv = BIAuthEnv;
  this.$http = $http;
  this.$q = $q;
  var url = BIAuthEnv.authPath;
  this.EP = {
    login: url + '/login2',
    logout: url + '/logout',
    reset: url + '/reset',
    profile: url + '/profile',
    info: url + '/info'
  };
  this._user = {
    isAuthenticated: false
  };
  this._getMessage = function (object) {
    if (Object.prototype.hasOwnProperty.call(object, 'message')) {
      return object;
    }
    for (var i = 0; i < Object.keys(object).length; i++) {
      if (angular.isObject(object[Object.keys(object)[i]])) {
        var o = this._getMessage(object[Object.keys(object)[i]]);
        if (o !== null) {
          return o;
        }
      }
    }
    return null;
  };
  this.handleError = function (response) {
    var message = this._getMessage(response).message;
    if (message === null) {
      return this.$q.reject(this.BIAuthEnv.unknown);
    }
    return this.$q.reject(message);
  };

  this.handleSuccess = function (response) {
    return response.data.result;
  };

  this.info = function () {
    return this.$http({
      method: 'GET',
      url: this.EP.info
    }).then(this.handleSuccess, this.handleError);
  };

  this.reset = function (data) {
    if (angular.isDefined(data.password_code)) {
      return this.$http({
        method: 'POST',
        data: data,
        url: this.EP.reset
      }).then(this.handleSuccess, this.handleError);
    }
    return this.$http({
      method: 'GET',
      url: this.EP.reset + '?email=' + data.email
    }).then(this.handleSuccess, this.handleError);
  };

  this.profile = function (force) {
    if (this._user.isAuthenticated && !force) {
      return this.$q.when(this._user);
    }
    return this.$http({
      method: 'GET',
      url: this.EP.profile
    }).then(function (data) {
      this._user = angular.extend(data.data.result, {
        isAuthenticated: true
      });
      return this._user;
    }, this.handleError);
  };

  this.logout = function () {
    this._user = {
      isAuthenticated: false
    };
    return this.$http({
      method: 'GET',
      url: this.EP.logout
    }).then(this.handleSuccess, this.handleError);
  };

  this.login = function (userData) {
    return this.$http({
      method: 'POST',
      url: this.EP.login,
      data: userData
    }).then(function () {
      return this.profile(true);
    }, this.handleError);
  };
}
