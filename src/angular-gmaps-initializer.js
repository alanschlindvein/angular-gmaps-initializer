(function(factory) {
  'use strict';
  if (typeof exports === 'object') {
    // Node/CommonJS
    module.exports = factory(typeof angular !== 'undefined' ? angular : require('angular'));
  } else if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['angular'], factory);
  } else {
    // Browser globals
    if (typeof angular === 'undefined') {
      throw new Error('AngularJS framework needs to be included, see https://angularjs.org/');
    }
    factory(angular);
  }
}(function(angular) {
  'use strict';

  return angular
    .module('AngularGmapsInitializer', [])
    .factory('angularGmapsInitializer', ['$window', '$q', angularGmapsInitializer]);

  function angularGmapsInitializer($window, $q) {
    var baseUrl = 'https://maps.googleapis.com/maps/api/js?v=3', initialized = false;

    function addMapUrlToBody(url) {
      var script = document.createElement('script');
      script.src = baseUrl + url + '&callback=googleMapsInitialized';
      document.body.appendChild(script);
      initialized = true;
    }

    function configureMap(config) {
      var url = '', keys = Object.keys(config);
      keys.forEach(function(key) {
        url += '&' + key + '=' + config[key];
      });
      addMapUrlToBody(url);
    }

    return {
      initialize: function(config) {
        var mapsDefer = $q.defer();
        $window.googleMapsInitialized = mapsDefer.resolve;
        (initialized) ? mapsDefer.resolve() : configureMap(config);
        return mapsDefer.promise;
      }
    };
  }
}));

