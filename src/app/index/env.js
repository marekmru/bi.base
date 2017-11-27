angular
  .module('bi.base')
  /** @ngInject */
  .provider('BIAuthEnv', function () {
    var _config = {
      basePath: 'http://localhost:5050',
      noAuthRoutes: ['login', 'forgot-password', 'reset'],
      mainRoute: undefined,
      errors: {
        unknown: 'An unknown error occurred.'
      },
      title: 'CORE',
      sidebarTemplate: './app/components/navbar/sidenav.template.html',
      internalName: 'core'
    };

    this.set = function (value) {
      Object.assign(_config, value);
    };
    this.$get = function () {
      return _config;
    };
  });
