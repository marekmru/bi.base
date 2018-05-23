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
    info: url + '/info',
    optIn: url + '/optin'
  };
  var _user = {
    isAuthenticated: false
  };

  var secret = 'fguusdifhsk';
  this.getCookieDate = function () {
    var now = new Date();
    var date = new Date(Date.UTC(now.getFullYear(), now.getMonth(), now.getDate(), now.getHours(), now.getMinutes(), now.getSeconds()));
    return date;
  }
  this.setPriPolCookie = function () {
    var date = new Date();
    date.setTime(date.getTime() + (28*24*60*60*1000));
    var expires = "; expires=" + date.toUTCString();
    document.cookie = secret + '=' + (this.getCookieDate()) + expires + '; path=/';
  };

  this.isPriPolCookieSet = function () {
    var getCookie = function () {
      var nameEQ = secret + "=";
      var ca = document.cookie.split(';');
      for(var i=0;i < ca.length;i++) {
          var c = ca[i];
          while (c.charAt(0)==' ') {
            c = c.substring(1,c.length);
          }
          if (c.indexOf(nameEQ) == 0) {
            return c.substring(nameEQ.length,c.length);
          }
      }
      return null;
    };
    return getCookie(secret);
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

  this.optIn = function (data) {
    return $http({
      method: 'PUT',
      data: data,
      url: EP.optIn
    }).then(handleSuccess, handleError);
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
