(function() {
    'use strict';

    angular
      .module('angularRails')
      .controller('UsersController', function($rootScope, $scope, $state, $stateParams, $auth, $location) {

        $scope.submitRegistration = function(registrationForm) {
            $auth.submitRegistration(registrationForm);
          };

        $rootScope.$on('auth:registration-email-success', function(ev, user) {
            $location.path('/ads');
        });

        $rootScope.$on('auth:registration-email-error', function(ev, reason) {
          alert("Registration failed: " + reason.errors.full_messages[0]);
        });

      });
})();
