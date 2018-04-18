angular
  .module('bi.base')
  .component('cookie', {
    templateUrl: './app/index/cookie.html',
    controller: CookieController
  });
/* eslint-disable */
/** @ngInject */
function CookieController(BIAuthService, $state) {
  var vm = this;
  vm.vis = false;
  var secret = 'fguusdifhsk'
  var pid = undefined;

  vm.setCookie = function () {
    var name = pid;
    var value = 'ok'
    var expires = "";
    var date = new Date();
    date.setTime(date.getTime() + (365*24*60*60*1000));
    expires = "; expires=" + date.toUTCString();
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
    vm.vis = false
  };

  vm.$onInit = function () {
    var getCookie = function (name) {
      var nameEQ = name + "=";
      var ca = document.cookie.split(';');
      for(var i=0;i < ca.length;i++) {
          var c = ca[i];
          while (c.charAt(0)==' ') c = c.substring(1,c.length);
          if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
      }
      return null;
    };
    BIAuthService.profile().then(
      function (data) {
        const accepted = getCookie(secret + data._id)
        if (accepted == null) {
          pid = secret+data._id
          vm.vis = true
        } 
      }
    )
  };

  vm.$onDestroy = function () {
  };
}
