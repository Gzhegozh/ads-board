(function() {
  'use strict';

  angular
    .module('angularRails')
    .config(routerConfig)
      .factory('Ad', ['railsResourceFactory', function(railsResourceFactory) {
        return railsResourceFactory({
          url: '/api/ads',
          name: 'ad',
          update: {
            method: 'PUT'
          }
        });
      }])
      .factory('Category', ['railsResourceFactory', function(railsResourceFactory) {
        return railsResourceFactory({
          url: '/api/categories',
          name: 'category'
        });
      }])
      .factory('CurrentUser', ['railsResourceFactory', function(railsResourceFactory) {
        return railsResourceFactory({
          url: '/api/get_current_user',
          name: 'current_user'
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
        resolve: {
          "check": function($location, CurrentUser){
            CurrentUser.query().then(function(user){
              if (!user) {
                $location.path('/ads');
              }
            });
          }
        },
        controller: 'AdsNewController'
      })
      .state('ads.show', {
        url: '/{id:[0-9]+}',
        views : {
          '@' : {
            templateUrl: "app/ads/show.html"
          }
        },
        controller: 'AdsShowController'
      })
      .state('ads.my_ads', {
        url: '/my_ads',
        views : {
          '@' : {
            templateUrl: "app/ads/my_ads.html"
          }
        },
        resolve: {
          "check": function($location, CurrentUser){
            CurrentUser.query().then(function(user){
              if (!user) {
                $location.path('/ads');
              }
            });
          }
        },
        controller: 'AdsIndexController'
      })
      .state('ads.edit', {
        url: '/{id:[0-9]+}/edit',
        views : {
          '@' : {
            templateUrl: "app/ads/edit.html"
          }
        },
        resolve: {
          "check": function($location, CurrentUser){
            CurrentUser.query().then(function(user){
              if (!user) {
                $location.path('/ads');
              }
            });
          }
        },
        controller: 'AdsEditController'
      })
      .state('users', {
        url: '/sign_up',
        templateUrl: 'app/users/signUp.html',
        controller: 'UsersController',
        controllerAs: 'users'
      });

    $urlRouterProvider.otherwise('/ads');
  }

})();
