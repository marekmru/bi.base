angular
  .module('bi.base')
  .config(config);
/* eslint-disable max-params */
/** @ngInject */
function config($logProvider, BIAuthEnvProvider, $httpProvider, $mdAriaProvider, $compileProvider, $qProvider) {
  $httpProvider.useApplyAsync(true);
  $compileProvider.debugInfoEnabled(false);

  $mdAriaProvider.disableWarnings();
  $logProvider.debugEnabled(false);
  $qProvider.errorOnUnhandledRejections(false);

  $httpProvider.defaults.withCredentials = true;
  $httpProvider.defaults.useXDomain = true;
  $httpProvider.defaults.headers.common.Accept = 'application/json';
  delete $httpProvider.defaults.headers.common['X-Requested-With'];
}

/* global BIAPIBASE */
angular
  .module('bi.base')
  .constant('APPCFG', {
    APIBASE: 'http://localhost:5050'
  });
