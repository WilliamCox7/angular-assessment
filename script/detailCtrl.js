angular.module('assessment').controller('detailCtrl', function($scope, mainService) {
  $scope.service = mainService;
  $scope.title;
  $scope.desc;
  $scope.price;
  $scope.image;
  $scope.$watch('service.getDetails()', function(newVal) {
    if (newVal != undefined) {
      $scope.title = newVal.data.title;
      $scope.desc = newVal.data.desc;
      $scope.price = newVal.data.price;
      $scope.image = newVal.data.image;
    }
  });
});
