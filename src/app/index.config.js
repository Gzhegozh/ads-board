(function() {
  'use strict';

  angular
      .module('angularRails')
      .config(config);

  /** @ngInject */
  function config($logProvider, toastrConfig, $authProvider) {
    // Enable log
    $logProvider.debugEnabled(true);

    // Set options third-party lib
    toastrConfig.allowHtml = true;
    toastrConfig.timeOut = 3000;
    toastrConfig.positionClass = 'toast-top-right';
    toastrConfig.preventDuplicates = true;
    toastrConfig.progressBar = true;

    $authProvider.configure({
      apiUrl: 'https://still-island-16001.herokuapp.com/api',
      storage: 'cookies',
      facebook: {
        clientId: '1102903999763763',
        name: 'facebook',
        url: 'https://still-island-16001.herokuapp.com/api/auth/facebook',
        authorizationEndpoint: 'https://www.facebook.com/v2.5/dialog/oauth',
        redirectUri: window.location.origin + '/',
        requiredUrlParams: ['display', 'scope'],
        scope: ['email'],
        scopeDelimiter: ',',
        display: 'popup',
        oauthType: '2.0',
        popupOptions: { width: 580, height: 400 }
      }
    });
  }

})();
