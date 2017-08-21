angular
  .module('bi.base')
  .config(mdtheme);

/** @ngInject */
function mdtheme($mdThemingProvider) {
  var customPrimary2 = {
    50: 'fef1f1',
    100: 'f9aaac',
    200: 'f57578',
    300: 'f13237',
    400: 'ef161b',
    500: 'd70f14',
    600: 'ba0d11',
    700: '9e0b0f',
    800: '81090c',
    900: '650709',
    A100: 'ffe6e7',
    A200: 'ff8083',
    A400: 'ff1a20',
    A700: 'f50b11',
    A900: 'ffffff',
    contrastDefaultColor: 'light',
    contrastDarkColors: [
      '50',
      '100',
      '200',
      'A100',
      'A200'
    ],
    contrastLightColors: [
      '300',
      '400',
      '500',
      '600',
      '700',
      '800',
      '900',
      'A400',
      'A700',
      'A900'
    ]
  };
  $mdThemingProvider
    .definePalette('customPrimary',
      customPrimary2);

  var customAccent2 = {
    50: '#ffffff',
    100: '#ffffff',
    200: '#ded2ff',
    300: '#a98aff',
    400: '#926cff',
    500: '#7c4dff',
    600: '#633ECC',
    700: '#442A8C',
    800: '#25174D',
    900: '#000000',
    A100: '#ffffff',
    A200: '#ede6ff',
    A400: '#a280ff',
    A700: '#8f66ff',
    contrastDefaultColor: 'light',
    contrastDarkColors: [
      '50',
      '100',
      '200',
      '300',
      '400',
      'A100',
      'A200',
      'A400',
      'A700'
    ],
    contrastLightColors: [
      '500',
      '600',
      '700',
      '800',
      '900'
    ]
  };

  $mdThemingProvider
    .definePalette('customAccent',
      customAccent2);

  var customWarn = {
    50: '#fefaf3',
    100: '#f9daab',
    200: '#f6c377',
    300: '#f1a534',
    400: '#ef9918',
    500: '#d9880f',
    600: '#bc760d',
    700: '#a0640b',
    800: '#835209',
    900: '#674007',
    A100: '#fff6e8',
    A200: '#ffcd82',
    A400: '#ffa41c',
    A700: '#f5980d',
    contrastDefaultColor: 'light',
    contrastDarkColors: [
      '50',
      '100',
      '200',
      '300',
      '400',
      '500',
      'A100',
      'A200',
      'A400',
      'A700'
    ],
    contrastLightColors: [
      '600',
      '700',
      '800',
      '900'
    ]
  };

  $mdThemingProvider
    .definePalette('customWarn',
      customWarn);

  $mdThemingProvider.theme('default')
    .primaryPalette('customPrimary', {

    })
    .accentPalette('customAccent', {
      default: '500',
      'hue-1': '900'
    })
    .warnPalette('customWarn');
}
