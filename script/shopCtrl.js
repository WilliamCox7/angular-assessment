angular.module('assessment').controller('shopCtrl', function($scope, mainService) {
  mainService.getApi().then(function(result) {
    $scope.products = result.data;
  });
});
