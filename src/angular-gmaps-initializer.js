angular
  .module('AngularGmapsInitializer', [])
  .factory('angularGmapsInitializer', angularGmapsInitializer);

  angularGmapsInitializer.$inject = ['$window', '$q'];
  function angularGmapsInitializer($window, $q) {
    var mapsDefer = $q.defer(),
      baseUrl = 'https://maps.googleapis.com/maps/api/js?v=3',
      initialized = false;

    $window.googleMapsInitialized = mapsDefer.resolve;

    function initialize(url) {
      var script = document.createElement('script');
      script.src = baseUrl + url + '&callback=googleMapsInitialized';
      document.body.appendChild(script);
    }

    return {
      init: function(config) {
        if(!initialized) {
          var url = '';
          config.forEach(function(elem) {
            url += '&' + elem.key + '=' + elem.value
          });
          initialize(url);
          initialized = true;
        }
      },
      mapsInitialized: mapsDefer.promise
    };
  }
