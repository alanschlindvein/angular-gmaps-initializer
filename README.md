angular-gmaps-initializer
=====================
An Angular module to initialize google maps.

[![NPM version][npm-image]][npm-url]
[![License][license-image]][license-url]
[![Downloads][downloads-image]][downloads-url]

[npm-image]: https://img.shields.io/npm/v/angular-gmaps-initializer.svg?style=flat-square
[npm-url]: https://npmjs.org/package/angular-gmaps-initializer
[license-image]: http://img.shields.io/npm/l/angular-gmaps-initializer.svg?style=flat-square
[license-url]: LICENSE
[downloads-image]: http://img.shields.io/npm/dm/angular-gmaps-initializer.svg?style=flat-square
[downloads-url]: https://npmjs.org/package/angular-gmaps-initializer

It injects an Angular Factory to initialize [Google Maps API](https://developers.google.com/maps).

## Table of contents:
- [Get Sarted](#getstarted)
- [Usage](#usage)

## Get Sarted
**(1)** You can install angular-communicator using 3 different ways:<br/>
**Git:**
clone & build [this](https://github.com/alanschlindvein/angular-communicator.git) repository<br/>
**Bower:**
```bash
$ bower install angular-gmaps-initializer --save
```
**npm:**
```bash
$ npm install angular-gmaps-initializer
```
**(2)** Include `angular-gmaps-initializer.js` (or `angular-gmaps-initializer.min.js`) from the [dist](https://github.com/alanschlindvein/angular-gmaps-initializer/tree/master/dist) directory in your `index.html`, after including Angular itself.

**(3)** Add `'AngularGmapsInitializer'` to your main module's list of dependencies.

When you're done, your setup should look similar to the following:

```html
<!doctype html>
<html ng-app="myApp">
<head>

</head>
<body>
    ...
    <script src="//ajax.googleapis.com/ajax/libs/angularjs/1.5.5/angular.min.js"></script>
    <script src="bower_components/js/angular-gmaps-initializer.min.js"></script>
    ...
    <script>
        var myApp = angular.module('myApp', ['AngularGmapsInitializer']);

    </script>
    ...
</body>
</html>
```

## Usage
You specify additional parameter to load within the bootstrap request by specifying an object and passing it to initialize. The initialize returns a promise for the map initialization.

```js
myApp.controller('MainCtrl', function($scope, angularGmapsInitializer) {
  var options = {
    libraries: 'visualization, places',
    language: 'en',
    key: 'YOUR_API_KEY'
  };
  
  angularGmapsInitializer.initialize(options).then(function() {
        //your sucess code
      }, function(err) {
        //your error code
      });
});
```

This will create a url like `https://maps.googleapis.com/maps/api/js?v=3&libraries=visualization, places&language=en&key=YOUR_API_KEY`
