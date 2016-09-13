(function() {
  'use strict';

  angular
    .module('angularRails')
    .config(routerConfig)
      .factory('Ad', ['railsResourceFactory', function(railsResourceFactory) {
          return railsResourceFactory({
              url: '/api/ads',
              name: 'ad'
          });
      }]);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('ads', {
          url: '/ads',
          templateUrl: 'app/ads/ads.html',
          controller: 'AdsController',
          controllerAs: 'ads'
      });

    $urlRouterProvider.otherwise('/');
  }

})();
