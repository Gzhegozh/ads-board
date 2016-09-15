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
        templateUrl: 'app/ads/index.html',
        controller: 'AdsIndexController'
      })
      .state('ads.new', {
        url: '/new',
        views : {
          '@' : {
            templateUrl: "app/ads/new.html"
          }
        },
        controller: 'AdsNewController'
      })
      .state('ads.show', {
        url: '/:id',
        views : {
          '@' : {
            templateUrl: "app/ads/show.html"
          }
        },
        controller: 'AdsShowController'
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
