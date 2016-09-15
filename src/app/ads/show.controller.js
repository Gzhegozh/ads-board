(function() {
  'use strict';

  angular
    .module('angularRails')
    .controller('AdsShowController', function($rootScope, $scope, $state, $stateParams, $auth, $location, Ad) {

      var show = function(){

        Ad.get($stateParams.id).then(function(ad){
          $scope.ad = ad;
        });
      };

      show();
    });

})();
