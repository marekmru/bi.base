export default mdtheme;

/** @ngInject */
function mdtheme($mdThemingProvider) {
  const customPrimary2 = {
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
    .definePalette('customPrimary',
      customPrimary2);

  const customAccent = {
    50: '#000000',
    100: '#000000',
    200: '#050d0e',
    300: '#0c1d20',
    400: '#142e32',
    500: '#1b3f45',
    600: '#296169',
    700: '#30727c',
    800: '#37838e',
    900: '#3f93a0',
    A100: '#296169',
    A200: '#225057',
    A400: '#1b3f45',
    A700: '#46a4b3',
    contrastDefaultColor: 'light'
  };

  /* Const customAccent2 = {
    50: '#efeaff',
    100: '#d8caff',
    200: '#bea6ff',
    300: '#a382ff',
    400: '#9068ff',
    500: '#7c4dff',
    600: '#7446ff',
    700: '#693dff',
    800: '#5f34ff',
    900: '#4c25ff',
    A100: '#ffffff',
    A200: '#ffffff',
    A400: '#dad3ff',
    A700: '#c4b9ff',
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
  }; */

  $mdThemingProvider
    .definePalette('customAccent',
      customAccent);

  const customWarn = {
    50: '#ffb280',
    100: '#ffa266',
    200: '#ff934d',
    300: '#ff8333',
    400: '#ff741a',
    500: '#ff6400',
    600: '#e65a00',
    700: '#cc5000',
    800: '#b34600',
    900: '#993c00',
    A100: '#ffc199',
    A200: '#ffd1b3',
    A400: '#ffe0cc',
    A700: '#803200'
  };
  $mdThemingProvider
    .definePalette('customWarn',
      customWarn);

  $mdThemingProvider.theme('default')
    .primaryPalette('customPrimary')
    .accentPalette('customAccent', {
      default: '500',
      'hue-1': '50'
    })
    .warnPalette('customWarn');
}
