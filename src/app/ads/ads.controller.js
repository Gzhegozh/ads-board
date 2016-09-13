(function() {
    'use strict';

    angular
        .module('angularRails')
        .controller('AdsController', function($rootScope, $scope, $state, $stateParams, $auth, Ad) {

            // method to query the posts api and store the results in $scope
            // note: the linter will complain, but that can be fixed later:
            // You should not set properties on $scope in controllers. Use controllerAs syntax and add data to "this"
            var ad_query = function(){
                Ad.query().then(function(ads){
                    $scope.ads = ads;
                });
            };

            // when the user logs in, fetch the posts
            $rootScope.$on('auth:login-success', function(ev, user) {
                ad_query();
            });

            // when the user logs out, remove the posts
            $rootScope.$on('auth:logout-success', function(ev) {
                $scope.ads = null;
            });

            // will get a "401 Unauthorized" if the user is not authenticated
            ad_query();

        });

})();