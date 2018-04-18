angular
  .module('bi.base')
  .config(configInt);
/* eslint-disable max-params */
/** @ngInject */
function configInt($httpProvider) {
  $httpProvider.interceptors.push(function ($rootScope, $q, BIEvents, $injector, BIAuthEnv) {
    // Var stateService = $injector.get('$state');
    var isIgnored = function (rejection) {
      var ret;
      try {
        var ignoredErrors = BIAuthEnv.ignoreErrorsFor;
        var isIgnoredError = ignoredErrors.find(function (value) {
          return rejection.config.url.indexOf(value.name) > 0;
        });
        ret = angular.isDefined(isIgnoredError);
      } catch (err) {
        ret = false;
      }
      return ret;
    };
    var isAuthPath = function () {
      var stateService = $injector.get('$state');
      return BIAuthEnv.noAuthRoutes.join('|').indexOf(stateService.current.name) > -1 &&
        stateService.current.name.length > 1;
    };
    return {
/*      request: function (request) {
      //  $rootScope.$broadcast(BIEvents.LOAD, true);
        return request;
      },
      response: function (response) {
      //  $rootScope.$broadcast(BIEvents.LOAD, false);
        return response;
      }, */
      responseError: function (rejection) {
        // redirect to forbidden page if status 403
        // and page is not in AuthRoutes.
        // Defined in env.js
       // console.log(rejection.config.url.includes('bucket'), '----')
        if (rejection.status === 403 && (/* rejection.config.url.includes('bucket') || */ isAuthPath() === false)) {
          /*eslint-disable */
          $rootScope.$broadcast(BIEvents.FORBIDDEN, rejection);
          /*eslint-enable */
          return $q(function () {
            return null;
          });
        }
        // $rootScope.$broadcast(BIEvents.LOAD, false);
        else if (rejection.status === 401 &&
          (isIgnored(rejection) === false) &&
          isAuthPath() === false) {
          /*eslint-disable */
          $rootScope.$broadcast(BIEvents.UNAUTHORIZED, window.location.href);
          /*eslint-enable */
          return $q(function () {
            return null;
          });
        }
        return $q.reject(rejection);
      }
    };
  });
}
