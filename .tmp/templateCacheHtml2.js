angular.module('bi.base').run(['$templateCache', function($templateCache) {$templateCache.put('./app/index/navbar.template.html','<md-toolbar class="md-accent md-hue-1 bi-navbar" ng-show="$ctrl.vis">\n  <div class="md-toolbar-tools">\n    <div class="left">\n      <md-button ng-click="$ctrl.toggleMenu()" class="md-icon-button">\n        <md-icon>menu</md-icon>\n      </md-button>\n    </div>\n    <h3 class="bc-title" ui-sref-active="nav-active" ng-click="thsi.goMainRoute()" flex="" app-title="">\n      CORE\n    </h3>\n    <div class="right">\n      <span class="additional-icons"></span>\n      <md-button class="md-icon-button" ng-click="$ctrl.logout()">\n        <md-icon>power_settings_new</md-icon>\n      </md-button>\n    </div>\n  </div>\n  <md-progress-linear class="md-primary" ng-disabled="$ctrl.hideLoader" md-mode="indeterminate"></md-progress-linear>\n\n</md-toolbar>\n\n<md-sidenav class="md-sidenav-left" md-component-id="md-sidenav-left" md-whiteframe="4" layout="column">\n  <md-toolbar class="md-accent md-hue-1 bi-navbar">\n  </md-toolbar>\n\n  <md-list class="bc-sidenav-header">\n    <md-list-item class="bc-user">\n      <img style="margin-left: 10px" class="md-avatar" alt="User" ng-src="data:image/jpeg;base64,/9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAAA8AAD/4QMvaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjYtYzEzOCA3OS4xNTk4MjQsIDIwMTYvMDkvMTQtMDE6MDk6MDEgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE3IChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDowQ0YyQzc3NzFCOTMxMUU3QTFENEYwRjkyQkUzQzAzMyIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDowQ0YyQzc3ODFCOTMxMUU3QTFENEYwRjkyQkUzQzAzMyI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjBDRjJDNzc1MUI5MzExRTdBMUQ0RjBGOTJCRTNDMDMzIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjBDRjJDNzc2MUI5MzExRTdBMUQ0RjBGOTJCRTNDMDMzIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+/+4ADkFkb2JlAGTAAAAAAf/bAIQABgQEBAUEBgUFBgkGBQYJCwgGBggLDAoKCwoKDBAMDAwMDAwQDA4PEA8ODBMTFBQTExwbGxscHx8fHx8fHx8fHwEHBwcNDA0YEBAYGhURFRofHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8f/8AAEQgAZABkAwERAAIRAQMRAf/EAHMAAQABBQEAAAAAAAAAAAAAAAABAgMFBgcEAQEAAAAAAAAAAAAAAAAAAAAAEAABAwIBCwIEBQUBAAAAAAABAAIDEQQSITFRYXGBIjJCBQZBobHBUhORYnKSFKKyI1MkNBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8A6e5zsRynOgjE7SUDE7SUDE7SUDE7SUEsErzSMOedDQSfZBcdb3jBV8MrRpLHAfBBaxHSgYnaSgYnaSgYnaSgYnaSgqxOwZznQUu5jtQQgICDYfGfGm9wH8u7qLQGjIxkLyM9T9KDd7e1t7eMRwRNjYMzWgAeyC5QIMV3fxvt/cWOOAQ3PTOwUNfzaUHPru1mtLmS2nFJYjR2g6CNRQWUBAQVdG9BDuY7UEICCQxz3NY3meQ0bXGiDqtnbstrSKBgo2NgaBsCC8gICDTvPLRrZrW7aKF4MT9dMoQaogICCro3oIdzHaghAQXbZwbdQOOYSMJ/cEHVwagHSgICAg1fz1w/h2jfUyk/g0oNLQEBBV0b0EO5jtQQgIBrQ0z+iDqXarpt1263naa442k7aZUHqQEBBpHnN0JO4QW4NfssLnDW85PYINaQEBBV0b0EO5jtQQgICDbfCe7sbi7bM6hJL7cn1rzN+aDb0BBZvbyCztpLmd2GOMVJ06gg5he3cl5dy3UnNK4upoHoNwQWEBAQVdG9BDuY7UEIGrOTmCDM2HineLsBxYLeI9Uuen6RlQZG88IngtmS2U7pbuPicDw1p9GghBFp5nfWf/P3O2c97MhfyP3g5Cg9Mnn1mG/47aRz/QOLQEGPwd98muGl7fs2TTUGhDG7K8zkHovvBZm8VjOHj/XLkO5wQa9e9uvrF+C6hdETyuOVp2FB5kBBV0b0EO5jtQQg2nwntUc0kncJmhwiOCAHNizud8gg3NAQWp7S2nFJomSD8zQfigsRdm7VE7Ey0iDtOEH4oPYAAAAKAZgEBB57+xt761ktp24mPFNYPoRrCDl9xBJb3EtvJzxOLHbjn3oLaCro3oIdzHaghB0fxe3EHY7UUoXt+47a84vmgyqAgICAgICDn3mFuIe+SOAoJmNk38p/tQYRBV0b0EO5jtQQ7KCBnKDq9pEIrWKMZAxjWjcEF1AQEBAQEBBpvnsQFxZzermvYdxBHxQaqgq6N6CHcx2oANCDnoQabCg6lYdxsryFr7aZsgoKgHKNRGcIPSgICAgICASAKk0GkoNK827hZ3MltDbyNlfEXGQtNQKgClR6oNYQVdG9BDuY7UEIJY5zHB7HFjxmc0kH8Qgydt5N3y3oG3JkaOmUB/vn90GTg87vmkffto5B6lhLD74kHrZ57bHntJB+lzT8aIKz55Y0yW0xOvCPmgsS+fGh+zZ5fQvf8gCgx9x5p3mUUj+3ANLW4j/USPZBirruXcLv/wBNxJKPpJo39ooEHmQEFXRvQS7BU586CODWgcGtA4NaBwa0Dg1oHBrQODWgcGtA4NaBwa0Dg1oKuDB650H/2Q==">\n      <div class="md-list-item-text">\n        <p class="bc-user-name">{{::$ctrl.profile.realname}}</p>\n        <p class="bc-user-mail">{{::$ctrl.profile.email}}</p>\n      </div>\n    </md-list-item>\n  </md-list>\n  <div id="sidebar">\n\n  </div>\n\n</md-sidenav>\n');
$templateCache.put('./app/routes/forgot-password/el.html','<div layout="column" layout-align-xs="start center" layout-align-gt-xs="center center" layout-fill="layout-fill" id="login">\n  <h1 class="bi-powered">POWERED BY CORE</h1>\n  <div class="login-box md-whiteframe-z2" layout="column">\n    <form name="form" novalidate ng-submit="$ctrl.submit($event)">\n      <md-content class="md-padding" layout="column" ng-if="$ctrl.success.message == undefined">\n        <h2>\n          Passwort zur\xFCcksetzen\n        </h2>\n        <md-input-container>\n          <label>Ihre Email Adresse</label>\n          <input type="email" ng-model="$ctrl.user.email" name="email" ng-pattern="/^.+@.+\\..+$/" required ng-minlength="5">\n\n          <div ng-messages="form.email.$error" role="alert" ng-if="form.email.$dirty">\n            <div ng-message="required">Geben Sie eine Email Adresse ein.</div>\n            <div ng-message="email">Geben Sie eine valide Email Adresse ein.</div>\n            <div ng-message="minlength">Das Passwort muss aus mindestens 5 Zeichen bestehen.</div>\n          </div>\n          <div class="bi-alert md-block" ng-if="$ctrl.error" role="alert">\n            <span class="md-body-1">{{$ctrl.error}}</span>\n          </div>\n        </md-input-container>\n        <div layout="column">\n          <md-button type="submit" class="md-raised md-primary" ng-disabled="form.$invalid">ANFORDERN</md-button>\n        </div>\n        <br>\n        <md-button class="bi-reset-pw" ui-sref="login" md-no-ink> Zur\xFCck zum login</md-button>\n      </md-content>\n      <md-content ng-if="$ctrl.success.message" class="md-padding" layout="column">\n        <p>$ctrl.success.message</p>\n        <md-button class="bi-reset-pw" ui-sref="login" md-no-ink> Zur\xFCck zum login</md-button>\n      </md-content>\n    </form>\n  </div>\n  <div class="bi-copyright"><span>&copy; 2017</span></div>\n</div>\n');
$templateCache.put('./app/routes/login/el.html','<div layout="column" layout-align-xs="start center" layout-align-gt-xs="center center" layout-fill="layout-fill" id="login">\n  <h1 class="bi-powered">POWERED BY CORE</h1>\n  <div class="login-box md-whiteframe-z2" layout="column">\n    <form name="form" novalidate="">\n      <md-content class="md-padding" layout="column">\n        <h2 class="bi-headline" app-title=""></h2>\n        <md-input-container>\n          <label>Nutzername</label>\n          <input type="text" ng-model="$ctrl.user.username" name="username" required="" ng-minlength="3" md-autofocus>\n          <div ng-messages="form.username.$error" role="alert" ng-show="form.username.$dirty">\n            <div ng-message="required">Geben Sie einen Namen ein.</div>\n            <div ng-message="minlength">Der Name muss aus mindestens 3 Zeichen bestehen.</div>\n          </div>\n        </md-input-container>\n        <md-input-container>\n          <label>Passwort</label>\n          <input ng-model="$ctrl.user.password" name="password" type="password" required="" ng-minlength="3">\n\n          <div ng-messages="form.password.$error" role="alert" ng-show="form.password.$dirty">\n            <div ng-message="required">Geben Sie ein Passwort ein.</div>\n            <div ng-message="minlength">Das Passwort muss aus mindestens 3 Zeichen bestehen.</div>\n          </div>\n\n          <div class="bi-alert md-block" ng-if="$ctrl.error" role="alert">\n            <span class="md-body-1" md-colors="{color: \'warn-500\'}">Bitte \xFCberpr\xFCfen Sie ihren Namen und das Passwort.</span>\n          </div>\n        </md-input-container>\n        <div layout="column">\n          <md-button type="submit" class="md-raised md-primary" ng-disabled="form.$invalid" ng-click="$ctrl.submit()">\n            LOGIN</md-button>\n        </div>\n        <br>\n        <md-button class="bi-reset-pw" ui-sref="forgot-password" md-no-ink="">Passwort zur\xFCcksetzen</md-button>\n      </md-content>\n    </form>\n  </div>\n  <div class="bi-copyright"><span>&copy; 2017</span></div>\n</div>\n');
$templateCache.put('./app/routes/reset-password/el.html','<div layout="column" layout-align-xs="start center" layout-align-gt-xs="center center" layout-fill="layout-fill" id="login">\n  <h1 class="bi-powered">POWERED BY CORE</h1>\n  <div class="login-box md-whiteframe-z2" layout="column">\n    <form name="form" novalidate ng-submit="$ctrl.submit($event)">\n      <md-content class="md-padding" layout="column">\n        <h2>\n          Neues Passwort\n        </h2>\n        <md-input-container class="md-block">\n          <label>Neues Passwort</label>\n          <input ng-model="$ctrl.user.password" name="password" type="password" required ng-minlength="3" ng-disabled="$ctrl.error">\n          <div ng-messages="form.password.$error" role="alert" ng-if="form.password.$dirty">\n            <div ng-message="required">Geben Sie ein neues Passwort ein.</div>\n            <div ng-message="minlength">Das Passwort muss aus mindestens 6 Zeichen bestehen.</div>\n          </div>\n        </md-input-container>\n        <md-input-container class="md-block">\n          <label>Passwort wiederholen</label>\n          <input ng-model="$ctrl.confirmPassword" name="confirmPassword" type="password" required ng-disabled="$ctrl.error" ng-minlength="3" compare-to="$ctrl.user.password">\n          <div ng-messages="form.confirmPassword.$error" role="alert" ng-if="form.confirmPassword.$dirty">\n            <div ng-message="required">Geben Sie ein neues Passwort ein.</div>\n            <div ng-message="minlength">Das Passwort muss aus mindestens 6 Zeichen bestehen.</div>\n            <div ng-message="compareTo">Die Passw\xF6rter m\xFCssen \xFCbereinstimmen.</div>\n\n          </div>\n          <br>\n          <div class="c-alert md-block" ng-if="$ctrl.error">\n            <span class="md-body-2">{{$ctrl.error}}</span><br>\n            <a href="#" ui-sref="forgot-password">Create new token</a>\n          </div>\n        </md-input-container>\n\n        <md-button type="submit" class="md-raised md-primary" ng-disabled="form.$invalid || $ctrl.error">Weiter\n        </md-button>\n      </md-content>\n\n    </form>\n  </div>\n  <div class="bi-copyright"><span>&copy; 2017</span></div>\n</div>\n');}]);