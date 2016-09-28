angular
  .module('AngularGmapsInitializer', [])
  .provider('angularGmapsInitializer', function() {

    this.$get = ['$exceptionHandler', function($exceptionHandler) {

      return {
        init: function(){}
      };
    }];
  });
