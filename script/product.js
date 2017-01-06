angular.module('assessment').directive('product', function(mainService) {
  return {
    restrict: 'E',
    scope: {
      ele: '='
    },
    templateUrl: '../views/product-tmpl.html',
    link: function(scope, element, attributes) {
      scope.title = scope.ele.title;
      scope.desc = scope.ele.desc;
      scope.price = scope.ele.price;
      scope.image = scope.ele.image;
      scope.id = scope.ele.id;
      scope.tog = true;
      element.on('click', function() {
        mainService.saveID(scope.id).then(function(result) {
          mainService.saveIT(result);
        });
      });
    }
  }
});
