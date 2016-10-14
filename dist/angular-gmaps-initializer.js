/**
 * An Angular module to initialize google maps.
 * @version v0.3.0 - 2016-10-14
 * @link https://github.com/alanschlindvein/angular-gmaps-initializer
 * @author alanschlindvein <alansaraujo.schlindvein@gmail.com>
 * @license MIT License, http://www.opensource.org/licenses/MIT
 */
(function (window, angular) {
angular
  .module('AngularGmapsInitializer', [])
  .factory('angularGmapsInitializer', angularGmapsInitializer);

angularGmapsInitializer.$inject = ['$window', '$q'];
function angularGmapsInitializer($window, $q) {
  var baseUrl = 'https://maps.googleapis.com/maps/api/js?v=3', initialized = false;

  function addMapUrlToBody(url) {
    var script = document.createElement('script');
    script.src = baseUrl + url + '&callback=googleMapsInitialized';
    document.body.appendChild(script);
    initialized = true;
  }

  return {
    initialize: function(config) {
      var mapsDefer = $q.defer();
      $window.googleMapsInitialized = mapsDefer.resolve;
      if(!initialized) {
        var url = '', keys = Object.keys(config);
        keys.forEach(function(key) {
          url += '&' + key + '=' + config[key]
        });
        addMapUrlToBody(url);
      }
      return mapsDefer.promise
    }
  };
}
})(window, window.angular);