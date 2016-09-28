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

      $scope.Config = {
        create: false,
        valueField: 'id',
        labelField: 'name',
        delimiter: '|',
        placeholder: 'Pick something',
        onInitialize: function(selectize){

          Category.query().then(function(categories){
            categories.forEach(function(category) {
              selectize.addOption(category);
            });

          Ad.get($stateParams.id).then(function(ad){
            if (ad.categories) {
              ad.categories.forEach(function (ad_category) {
                selectize.addItem(ad_category.id);
              })
            }
            });


          });
        }
      };

    }
  }

})();
