import angular from 'angular';

import 'angular-ui-router';
import routesConfig from './index/routes';

import './index.scss';

import 'angular-sanitize';
import 'angular-messages';

import 'angular-material';
import 'angular-material/angular-material.css';
import config from './index/config';
import mdtheme from './index/mdtheme';
import {
  BIAuthService
} from './app/services/bi.auth.service.js';

import {
  LoginComponent
} from './app/routes/login';
import {
  ForgotPasswordComponent
} from './app/routes/forgot-password';
import {
  ResetPasswordComponent
} from './app/routes/reset-password';

import {
  NavBarComponent
} from './app/components/navbar/index.js';

/** @ngInject */
function biAuthEnv() {
  const _config = {
    basePath: 'http://localhost:5050',
    noAuthRoutes: ['login', 'forgot-password', 'reset-password'],
    mainRoute: undefined,
    errors: {
      unknown: 'An unknown error occurred.'
    },
    title: 'CORE',
    sidebarTemplate: './app/components/navbar/sidenav.template.html',
    internalName: 'core'
  };
  return {
    set(value) {
      Object.assign(_config, value);
    },
    $get() {
      return _config;
    }
  };
}

/* eslint max-params: ["error", 10] */
/** @ngInject */
function APIInterceptor($rootScope, $q, BIEvents, $state, BIAuthEnv) {
  const isAuthPath = () => {
    // No authentication required for a collection of no auth routes // login, reset-password etc
    return BIAuthEnv.noAuthRoutes.join('|').indexOf($state.current.name) > -1 && $state.current.name.length > 1;
  };
  return {
    request(request) {
      $rootScope.$broadcast(BIEvents.LOAD, true);
      return request;
    },
    response(response) {
      $rootScope.$broadcast(BIEvents.LOAD, false);
      return response;
    },
    responseError(rejection) {
      $rootScope.$broadcast(BIEvents.LOAD, false);
      if (rejection.status === 401 && isAuthPath() === false) {
        $rootScope.$broadcast(BIEvents.UNAUTHORIZED);
        return $q(() => {
          return null;
        });
      }
      return $q.reject(rejection);
    }
  };
}

/** @ngInject */
function poweredBy() {
  const link = (scope, element) => {
    element[0].setAttribute('data-after', `POWERED BY CORE`);
  };

  return {
    restrict: 'A',
    link
  };
}
/** @ngInject */
function maintenanceMode() {
  // eslint-disable-next-line
  const link = () => {
    /* Scope.$on('$destroy', () => {}); */
  };

  return {
    restrict: 'E',
    link,
    template: '<div layout="row" layout-align="center center" layout-padding>' +
      '      <div>' +
      '        <md-icon>' +
      '          build' +
      '        </md-icon>' +
      '      </div>' +
      '      <div>Das System befindet sich im Wartungsmodus</div>' +
      '      <md-button>' +
      '        Nochmal versuchen' +
      '      </md-button>' +
      '    </div>',
    scope: false
  };
}
/** @ngInject */
function compareTo() {
  /*
  Compares two password fields and checks equality
  */
  const link = (scope, element, attr, ngModel) => {
    ngModel.$validators.compareTo = modelValue => {
      return modelValue === scope.otherModelValue;
    };
    const unwatch = scope.$watch('otherModelValue', () => {
      ngModel.$validate();
    });
    scope.$on('$destroy', () => {
      unwatch();
    });
  };

  return {
    restrict: 'A',
    require: 'ngModel',
    scope: {
      otherModelValue: '=compareTo'
    },
    link
  };
}

// ////////AUTOFILL
const isChrome = () => {
  return navigator.userAgent.match(/chrome/i) && !navigator.userAgent.match(/edge/i);
};
/** @ngInject */
function requiredDirective($interval) {
  const link = (scope, elem, attrs, ngModel) => {
    if (angular.isUndefined(ngModel)) {
      return;
    }
    const timer = $interval(() => {
      tries++;
      if (tries > 5) {
        $interval.cancel(timer);
      }
      ngModel.$validate();
    }, 100);

    const validator = (modelValue, viewValue) => {
      if (isChrome() && elem[0].matches('input[type=password]:-webkit-autofill')) {
        $interval.cancel(timer);
        return true;
      }
      return originalValidator(modelValue, viewValue);
    };
    let tries = 0;
    const originalValidator = ngModel.$validators.required;
    ngModel.$validators.required = validator;
    scope.$on('$destroy', () => {
      $interval.cancel(timer);
    });
  };
  return {
    priority: 100,
    require: '?ngModel',
    link
  };
}
/** @ngInject */
function mdInputContainerDirective($interval) {
  const link = (scope, elem) => {
    if (isChrome()) {
      let tries = 0;
      const timer = $interval(() => {
        tries++;
        if (tries > 5) {
          $interval.cancel(timer);
        }
        if (elem[0].querySelector('input[type=password]:-webkit-autofill')) {
          elem.addClass('md-input-has-value');
          $interval.cancel(timer);
        }
      }, 100);
      scope.$on('$destroy', () => {
        $interval.cancel(timer);
      });
    }
  };
  return {
    restrict: 'E',
    link
  };
}

import run from './index/run';
export const app = 'bi.base';

angular
  .module(app, [
    'ngAnimate',
    'ngSanitize',
    'ngMessages',
    'ui.router',
    'ngMaterial'
  ])
  .component('forgotPasswordComponent', ForgotPasswordComponent)
  .component('resetPasswordComponent', ResetPasswordComponent)
  .component('loginComponent', LoginComponent)
  .config(routesConfig)
  .factory('APIInterceptor', APIInterceptor)
  .constant('BIEvents', {
    UNAUTHORIZED: 'bi.auth.unauthorized',
    AUTHORIZED: 'bi.auth.authorized',
    ERROR: 'bi.error',
    VERSION: 'bi.version',
    LOAD: 'bi.ajax.load',
    MAINTENANCE: 'bi.maintenence'
  })
  .directive('compareTo', compareTo)
  .directive('maintenanceMode', maintenanceMode)
  .directive('poweredBy', poweredBy)
  .directive('required', requiredDirective)
  .directive('mdInputContainer', mdInputContainerDirective)
  .provider('BIAuthEnv', biAuthEnv)
  .service('BIAuthService', BIAuthService)
  .component('navbar', NavBarComponent)
  .run(run)
  .config(mdtheme)
  .config(config);
