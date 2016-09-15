(function() {
  'use strict';

  angular
    .module('angularRails')
    .controller('AdsDeleteController', function($rootScope, $scope, $state, $stateParams, $auth, $location, Ad, CurrentUser) {


      $scope.delete_ad = function (adId) {
        if (confirm("Are you sure you want to delete this ad?")){
          Ad.get(adId).then(function(ad){
            CurrentUser.query().then(function(user){
              if (user.id === ad.user.id){
                ad.delete().then(function(){
                  $scope.ads = Ad.query();
                  $location.path('/ads');
                })
              }
            });
          })
        }
      };

    });

})();
