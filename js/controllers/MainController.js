app.controller('MainController', ['$scope', function($scope) {
  $scope.exercises = [
    {
      icon: 'img/weights-image.jpeg',
      name: 'Pushups',
      count: 20
    },
    {
      icon: 'img/weights-image.jpeg',
      name: 'Squats',
      count: 15
    },
    {
      icon: 'img/weights-image.jpeg',
      name: 'Pullups',
      count: 10
    },
    {
      icon: 'img/weights-image.jpeg',
      name: 'Rows',
      count: 10
    },
    {
      icon: 'img/weights-image.jpeg',
      name: 'Lunges',
      count: 10
    },
    {
      icon: 'img/weights-image.jpeg',
      name: 'Step Ups',
      count: 10
    },
    {
      icon: 'img/weights-image.jpeg',
      name: 'Sit Ups',
      count: 15
    }
  ],
$scope.increase = function(index){  
	$scope.exercises[index].count += 1;
};
  $scope.decrease = function(index){  
	$scope.exercises[index].count -= 1;
}
}]);


