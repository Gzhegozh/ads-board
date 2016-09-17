(function() {
  'use strict';

  angular
    .module('angularRails')
    .directive('categorySelectize', categorySelectize);

  /** @ngInject */
  function categorySelectize() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/categorySelectize/categorySelectize.html',
      scope: {
      },
      controller: SelectizeController,
      controllerAs: 'vm',
      bindToController: true
    };

    return directive;

    /** @ngInject */
    function SelectizeController($scope, $rootScope, $auth, $stateParams, Ad, Category) {


      var category_query = function(){
        Category.query().then(function(categories){
          $scope.Options = categories;
        });
      };

      category_query();

      $scope.Config = {
        create: false,
        valueField: 'id',
        labelField: 'name',
        delimiter: '|',
        placeholder: 'Pick something',
        //onInitialize: function(selectize){
        //
        //}
        // maxItems: 1
      };

    }
  }

})();
