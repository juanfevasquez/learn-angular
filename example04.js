/*
var myApp = angular.module("myApp", []);

myApp.controller("MyController", ['$scope', '$log', function($scope, $log) {
	$log.info($scope);
}]);

*/
var myApp=angular.module("myApp",[]);myApp.controller("MyController",["$scope","$log",function(o,l){l.info(o)}]);