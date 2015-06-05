var myApp = angular.module('myApp',[]);

myApp.controller('MyController', function MyController($scope) {

  $scope.author = {
    'name'  : 'James Hetfield',
    'title' : 'lead singer',
    'band'  : 'Mettalica'
  }


});
