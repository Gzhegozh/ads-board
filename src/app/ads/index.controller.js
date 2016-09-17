(function() {
    'use strict';

    angular
        .module('angularRails')
        .controller('AdsIndexController', function($rootScope, $scope, $state, $stateParams, $auth, $location, Ad) {

          var ad_query = function(){
              Ad.query().then(function(ads){
                  $scope.ads = ads;
              });
          };

          $scope.authenticate = function(provider) {
            $auth.authenticate(provider);
          };

          $scope.submitLogin=function(loginForm){
            $auth.submitLogin(loginForm);
          };

          ad_query();

        });

})();
