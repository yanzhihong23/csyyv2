(function() {
  'use strict';

  angular
    .module('projects')
    .directive('acmeNavbar', acmeNavbar);

  /** @ngInject */
  function acmeNavbar() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/navbar/navbar.html',
      scope: {
          creationDate: '='
      },
      controller: NavbarController,
      controllerAs: 'vm',
      bindToController: true
    };

    return directive;

    /** @ngInject */
    function NavbarController($scope, $rootScope, $log) {
      $rootScope.$watch('state', function(val) {
        $scope.state = val && val.split('.')[0];
        $log.debug(val);
      });
    }
  }

})();
