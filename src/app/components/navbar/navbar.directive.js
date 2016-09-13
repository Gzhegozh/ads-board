(function() {
  'use strict';

  angular
    .module('angularRails')
    .directive('acmeNavbar', acmeNavbar);

  /** @ngInject */
  function acmeNavbar() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/navbar/navbar.html',
      scope: {
          creationDate: '='
      },
      controller: NavbarController,
      controllerAs: 'vm',
      bindToController: true
    };

    return directive;

    /** @ngInject */
    function NavbarController($scope, $rootScope, $auth) {

      var vm = this;

      $scope.submitLogin=function(loginForm){
        console.log(loginForm);
        $auth.submitLogin(loginForm);
      };

      $rootScope.$on('auth:login-success', function(ev, user) {
        alert('Welcome ', user.email);
      });

    }
  }

})();
