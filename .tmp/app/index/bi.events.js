angular
  .module('bi.base')
  .constant('BIEvents', {
    UNAUTHORIZED: 'bi.auth.unauthorized',
    AUTHORIZED: 'bi.auth.authorized',
    ERROR: 'bi.error',
    VERSION: 'bi.version',
    LOAD: 'bi.ajax.load',
    MAINTENANCE: 'bi.maintenence'
  });
