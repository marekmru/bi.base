angular
  .module('bi.base')
  .config(mdtheme);

/** @ngInject */
function mdtheme($mdThemingProvider) {
  var customPrimary = {
    50: '#fae2e3',
    100: '#f3b7b9',
    200: '#eb878a',
    300: '#e3575b',
    400: '#dd3337',
    500: '#d70f14',
    600: '#d30d12',
    700: '#cd0b0e',
    800: '#c7080b',
    900: '#be0406',
    A100: '#ffe6e6',
    A200: '#ffb3b4',
    A400: '#ff8081',
    A700: '#ff6768',
    A900: '#ffffff',
    contrastDefaultColor: 'light',
    contrastDarkColors: [
      '50',
      '100',
      '200',
      'A100',
      'A200',
      'A400',
      'A700',
      'A900'
    ],
    contrastLightColors: [
      '400',
      '500',
      '600',
      '700',
      '800',
      '900'
    ]
  };
  $mdThemingProvider
    .definePalette('customPrimary',
      customPrimary);

  var customAccent = {
    50: '#e2eff6',
    100: '#b6d8e9',
    200: '#85beda',
    300: '#54a4cb',
    400: '#2f91bf',
    500: '#0a7db4',
    600: '#0975ad',
    700: '#076aa4',
    800: '#05609c',
    900: '#034d8c',
    A100: '#b8daff',
    A200: '#85c0ff',
    A400: '#52a5ff',
    A700: '#3998ff',
    contrastDefaultColor: 'light',
    contrastDarkColors: [
      '50',
      '100',
      '200',
      '300',
      'A100',
      'A200',
      'A400',
      'A700'
    ],
    contrastLightColors: [
      '400',
      '500',
      '600',
      '700',
      '800',
      '900'
    ]
  };

  $mdThemingProvider
    .definePalette('customAccent',
      customAccent);

  var customWarn = {
    50: '#ffece0',
    100: '#ffd1b3',
    200: '#ffb280',
    300: '#ff934d',
    400: '#ff7b26',
    500: '#ff6400',
    600: '#ff5c00',
    700: '#ff5200',
    800: '#ff4800',
    900: '#ff3600',
    A100: '#ffffff',
    A200: '#ffd1b3',
    A400: '#ff934d',
    A700: '#ff6400',
    contrastDefaultColor: 'light',
    contrastDarkColors: [
      '50',
      '100',
      '200',
      '300',
      '400',
      '500',
      '600',
      'A100',
      'A200',
      'A400',
      'A700'
    ],
    contrastLightColors: [
      '700',
      '800',
      '900'
    ]
  };

  $mdThemingProvider
    .definePalette('customWarn',
      customWarn);

  $mdThemingProvider.theme('default')
    .primaryPalette('customPrimary')
    .accentPalette('customAccent', {
      default: '500',
      'hue-1': '900'
    })
    .warnPalette('customWarn');
}
