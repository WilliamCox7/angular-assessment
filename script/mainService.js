angular.module('assessment').service('mainService', function($http) {
  var details;
  this.getApi = function() {
    return $http({
      method: 'GET',
      url: 'http://practiceapi.devmounta.in/products'
    });
  }
  this.saveID = function(id) {
    return $http({
      method: 'GET',
      url: 'http://practiceapi.devmounta.in/products/' + id
    });
  }
  this.saveIT = function(it) {
    details = it;
  }
  this.getDetails = function() {
    return details;
  }
});
