var myApp = angular.module("myApp", []);

myApp.controller("MyController", function($scope) {
	$scope.name = "Juanfe";
	$scope.something = "I don\'t play pokemon go";
	console.log($scope);
});