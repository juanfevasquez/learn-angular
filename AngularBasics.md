# Angular Basics


## What problems is Angular trying to solve?

Angular makes web development more natural, less confusing and more intuitive.
The the current problem with traditional development (pure js, jquery) is that we spend a lot of time manipulating and updating the DOM.
An example of this complexity could be how much we deal updating variables, the DOM, manipulating events, creating constructors, etc.
What if everything was automatic? What if we could update something in the DOM and immediately the JS would get updated and viceversa?
AngularJS solves this and many other problems, it makes web development easier.


## Is Angular an MVC?
Angular is actually and MV* (Model, View, Whatever)
The Model is the information contained in the logic, through variables, objects, methods, etc.
The View is what the user is seeing.
What binds the View with the Model and the Model with the View?  Some architectures use controllers, but Angular binds the M and the V in different ways.


## Modules, Apps and Controllers:  What is the structure of an AngularJS app?

So, Angular uses mainly custom attributes.  Custom attributes in html5 are a kind of way to add custom functionality to our tags.  In html5 we use the data- attribute to create any kind of new attribute and just by starting with data- html5 recognises it.  
Angular uses its own naming convention for custom attributes, but instead of calling them attributes they call them **directives**.  Angular has lots of directives and it is our challenge to learn as many as we can so we can create great apps.
Angular doesn't use the data- attribute.  Like I said, they use their own naming convention and it starts with ng-
So, let's check an example of how we connect our html and our angular app through ng- attributes, err.. directives.
```html

<!DOCTYPE html>
<html ng-app="myApp">
<head>
	<meta charset="utf-8">
	<title>Angular Basic Architecture</title>
	<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.5.8/angular.min.js"></script>
</head>
<body>
<div class="container" ng-controller="MyController"></div>

<script src="example01.js"></script>
</body>
</html>

```
```javascript
var myApp = angular.module(“myApp”, []);

myApp.controller(“MyController”, function() {

});
```


## What is dependency injection?
Giving a function and object.  Rather than creating an object inside a function, you pass the object to the function
```javascript
var Person = function(firstName, lastName) {
	this.firstName = firstName;
	this.lastName = lastName;
 }

function logPerson() {
	var jon = new Person(“Jon”, “Snow”);
	console.log(jon);
 }

logPerson();
```
In this example, the logPerson is dependent on the variable jon.  If anything changes for “jon” we must change the function.  That’s bad.

So we rather do this:
```javascript
var Person = function(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
 }

function logPerson(person) {
  console.log(person);
 }

var jon = new Person(“Jon”, “Snow”);

logPerson(jon);
```
Here we are passing the object as an argument, and we don’t need to change anything inside logPerson.
Angular uses Dependency Injection A LOT


## The Scope Service
Scope is something that everyone talks about when refering to AngularJS, yet, few seem to understand really what it is.
Scope is an object and like any object you assign properties and methods any time you want.
```javascript

var myApp = angular.module("myApp", []);

myApp.controller("MyController", function($scope) {
	console.log($scope);
})

```