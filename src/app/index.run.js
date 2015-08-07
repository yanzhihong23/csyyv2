(function() {
  'use strict';

  angular
    .module('projects')
    .run(runBlock);

  /** @ngInject */
  function runBlock($rootScope, $log) {
  	$rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams) {
  		$rootScope.state = toState.name;
  		$log.debug('state change to: ' + toState.name);
      document.documentElement.scrollTop = document.body.scrollTop = 0;
  	});
  }

})();
