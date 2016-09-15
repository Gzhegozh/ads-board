(function() {
  'use strict';

  angular
    .module('angularRails')
    .controller('AdsEditController', function($rootScope, $scope, $state, $stateParams, $auth, $location, CurrentUser, Ad) {

      $scope.update = function(){
        if ($scope.editAdForm.$valid){
          Ad.get($stateParams.id).then(function(ad){

            console.log($scope);

            ad.title = $scope.ad.title;
            ad.body = $scope.ad.body;
            ad.price = $scope.ad.price;
            ad.category_attributes =
              ($scope.$$childHead.categories === undefined) ? '' : $scope.$$childHead.categories.map(Number);


            ad.save().then(function(){
              $location.path("/ads/my_ads");
            }).catch(function(){
              alert("Operation failed");
            })
          })
        }
      };

      var get_current_ad = function(){
        Ad.get($stateParams.id).then(function(ad){
          CurrentUser.query().then(function(user){
            if (user.id === ad.user.id){
              $scope.ad = ad;
            }
            else{
              $location.path("/ads");
            }
          });
        });
      };

      get_current_ad();

    });

})();
