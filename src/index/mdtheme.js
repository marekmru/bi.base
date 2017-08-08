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
    A900: '#000000',
    contrastDefaultColor: 'light',
    contrastDarkColors: [
      '50',
      '100',
      '200',
      '300',
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
      customPrimary2);

  const customAccent2 = {
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

  const customWarn = {
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
