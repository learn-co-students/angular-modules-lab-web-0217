function MainController($scope) {
  $scope.name = 'Charles'
}

angular
  .module('app')
  .controller('MainController', MainController)
