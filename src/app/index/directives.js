angular
  .module('bi.base')
  .directive('poweredBy', fn);

/** @ngInject */
function fn() {
  var directive = {
    restrict: 'A',
    scope: false,
    link: linkFunc
  };

  function linkFunc(scope, el) {
    el[0].setAttribute('data-after', 'POWERED BY CORE');
    scope.$on('$destroy', function () {});
  }

  return directive;
}

angular
  .module('bi.base')
  .directive('maintenanceMode', fn2);

/** @ngInject */
function fn2() {
  var directive = {
    restrict: 'E',
    scope: false,
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
    link: linkFunc
  };

  function linkFunc() {
    //    scope.$on('$destroy', function() {});
  }

  return directive;
}

angular
  .module('bi.base')
  .directive('appTitle', fn3);

/** @ngInject */
function fn3(BIAuthEnv) {
  var directive = {
    restrict: 'A',
    scope: false,
    link: linkFunc
  };

  function linkFunc(scope, el) {
    var title = BIAuthEnv.title;
    var le = title.length;
    if (le <= 8) {
      el[0].classList.add('size-xl');
    } else if (le <= 13) {
      el[0].classList.add('size-l');
    } else {
      el[0].classList.add('size-m');
    }
    el[0].innerText = title;
    // Scope.$on('$destroy', () => {});
  }

  return directive;
}

angular
  .module('bi.base')
  .directive('compareTo', fn4);

/** @ngInject */
function fn4() {
  var directive = {
    restrict: 'A',
    require: 'ngModel',
    scope: {
      otherModelValue: '=compareTo'
    },
    link: linkFunc
  };

  function linkFunc(scope, element, attr, ngModel) {
    ngModel.$validators.compareTo = function (modelValue) {
      return modelValue === scope.otherModelValue;
    };
    var unwatch = scope.$watch('otherModelValue', function () {
      ngModel.$validate();
    });
    scope.$on('$destroy', function () {
      unwatch();
    });
  }

  return directive;
}

var isChrome = function () {
  return navigator.userAgent.match(/chrome/i) && !navigator.userAgent.match(/edge/i);
};

angular
  .module('bi.base')
  .directive('requiredDisabled', fn5);

/** @ngInject */
function fn5($interval) {
  var directive = {
    priority: 100,
    require: '?ngModel',
    link: linkFunc
  };

  function linkFunc(scope, el, attr, ngModel) {
    if (angular.isUndefined(ngModel)) {
      return;
    }
    var validator = function (modelValue, viewValue) {
      if (isChrome() && el[0].matches('input[type=password]:-webkit-autofill')) {
        $interval.cancel(timer);
        return true;
      }
      return originalValidator(modelValue, viewValue);
    };
    var tries = 0;
    var originalValidator = ngModel.$validators.required;
    var timer = $interval(function () {
      tries++;
      if (tries > 5) {
        $interval.cancel(timer);
      }
      ngModel.$validate();
    }, 125);

    ngModel.$validators.required = validator;
    scope.$on('$destroy', function () {
      $interval.cancel(timer);
    });
  }

  return directive;
}

angular
  .module('bi.base')
  .directive('appTitle', fn6);

/** @ngInject */
function fn6($interval) {
  var directive = {
    restrict: 'E',
    scope: false,
    link: linkFunc
  };

  function linkFunc(scope, el) {
    if (isChrome()) {
      var tries = 0;
      var timer = $interval(function () {
        tries++;
        if (tries > 5) {
          $interval.cancel(timer);
        }
        if (el[0].querySelector('input[type=password]:-webkit-autofill')) {
          el.addClass('md-input-has-value');
          $interval.cancel(timer);
        }
      }, 100);
      scope.$on('$destroy', function () {
        $interval.cancel(timer);
      });
    }
  }

  return directive;
}
