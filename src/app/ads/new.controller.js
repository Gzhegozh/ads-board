(function() {
  'use strict';

  angular
    .module('angularRails')
    .controller('AdsNewController', function($rootScope, $scope, $state, $stateParams, $auth, $location, Ad) {

      $scope.new = function(){
        $scope.Ad = new Ad();
        if(!$scope.title || $scope.title === '') { return; }
        if(!$scope.body || $scope.body === '') { return; }
        if(!$scope.price || $scope.price === '') { return; }

        $scope.Ad.title = $scope.title;
        $scope.Ad.body = $scope.body;
        $scope.Ad.price = $scope.price;
        $scope.Ad.user_id = $auth.user.id;
        $scope.Ad.category_attributes =
          ($scope.$$childHead.categories === undefined) ? '' : $scope.$$childHead.categories.map(Number);

        $scope.Ad.save().then(function(){
          $location.path("/ads/my_ads");
        }).catch(function(){
          alert("Operation failed");
        });

        $location.path('/ads');
      };

    });

})();
