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
      return mapsDefer.promise
    }
  };
}
