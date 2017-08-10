angular
  .module('bi.base')
  .config(configInt);

/** @ngInject */
function configInt($httpProvider) {
  $httpProvider.interceptors.push(function ($rootScope, $q, BIEvents, $state, BIAuthEnv) {
    var isAuthPath = function () {
      return BIAuthEnv.noAuthRoutes.join('|').indexOf($state.current.name) > -1 && $state.current.name.length > 1;
    };
    return {
      request: function (request) {
        $rootScope.$broadcast(BIEvents.LOAD, true);
        return request;
      },
      response: function (response) {
        $rootScope.$broadcast(BIEvents.LOAD, false);
        return response;
      },
      responseError: function (rejection) {
        $rootScope.$broadcast(BIEvents.LOAD, false);
        if (rejection.status === 401 && isAuthPath() === false) {
          $rootScope.$broadcast(BIEvents.UNAUTHORIZED);
          return $q(function () {
            return null;
          });
        }
        return $q.reject(rejection);
      }
    };
  });
}
