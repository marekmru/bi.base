angular
  .module('bi.base')
  .service('BIAuthService', BIAuthService);

/** @ngInject */
function BIAuthService(BIAuthEnv, $q, $http) {
  var url = BIAuthEnv.basePath;
  var EP = {
    login: url + '/login2',
    logout: url + '/logout',
    reset: url + '/reset',
    profile: url + '/profile',
    user: url + '/user',
    info: url + '/info'
  };
  var _user = {
    isAuthenticated: false
  };

  var _getMessage = function (object) {
    if (Object.prototype.hasOwnProperty.call(object, 'message')) {
      return object;
    }
    for (var i = 0; i < Object.keys(object).length; i++) {
      if (angular.isObject(object[Object.keys(object)[i]])) {
        var o = _getMessage(object[Object.keys(object)[i]]);
        if (o !== null) {
          return o;
        }
      }
    }
    return null;
  };
  var handleError = function (response) {
    var message = _getMessage(response).message;
    if (message === null) {
      return $q.reject(this.BIAuthEnv.unknown);
    }
    return $q.reject(message);
  };

  var handleSuccess = function (response) {
    return response.data.result;
  };

  this.info = function () {
    return $http({
      method: 'GET',
      url: EP.info
    }).then(handleSuccess, handleError);
  };

  this.updatePassword = function (data) {
    if (angular.isDefined(data.password)) {
      return $http({
        method: 'PUT',
        data: data,
        url: EP.user
      }).then(handleSuccess, handleError);
    }
    return $q.reject('Please set a password');
  };

  this.reset = function (data) {
    if (angular.isDefined(data.password_code)) {
      return $http({
        method: 'POST',
        data: data,
        url: EP.reset
      }).then(handleSuccess, handleError);
    }
    return $http({
      method: 'GET',
      url: EP.reset + '?email=' + data.email
    }).then(handleSuccess, handleError);
  };

  this.profile = function (force) {
    if (_user.isAuthenticated && !force) {
      return $q.when(_user);
    }
    return $http({
      method: 'GET',
      url: EP.profile
    }).then(function (data) {
      _user = angular.extend(data.data.result, {
        isAuthenticated: true
      });
      return _user;
    }, handleError);
  };

  this.logout = function () {
    _user = {
      isAuthenticated: false
    };
    return $http({
      method: 'GET',
      url: EP.logout
    }).then(handleSuccess, handleError);
  };

  this.login = function (userData) {
    return $http({
      method: 'POST',
      url: EP.login,
      data: userData
    }).then(function () {
      return this.profile(true);
    }.bind(this), handleError);
  };
}
