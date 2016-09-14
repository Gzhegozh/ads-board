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
      }])
      .factory('Category', ['railsResourceFactory', function(railsResourceFactory) {
        return railsResourceFactory({
          url: '/api/categories',
          name: 'category'
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
      })
      .state('ads.new', {
        url: '/new',
        views : {
          '@' : {
            templateUrl: "app/ads/newAd.html"
          }
        },
        controller: 'AdsController',
        controllerAs: 'ads'
      })
      .state('users', {
        url: '/sign_up',
        templateUrl: 'app/users/signUp.html',
        controller: 'UsersController',
        controllerAs: 'users'
      });

    $urlRouterProvider.otherwise('/');
  }

})();
