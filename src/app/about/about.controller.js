(function() {
  'use strict';

  angular
    .module('projects')
    .controller('AboutController', AboutController);

  /** @ngInject */
  function AboutController($scope, $rootScope, $log) {
    $rootScope.$watch('state', function(val) {
      $scope.state = val;

      switch(val) {
        case 'about.company':
          $scope.title = '公司介绍';
          break;
        case 'about.team':
          $scope.title = '团队介绍';
          break;
        case 'about.dynamic':
          $scope.title = '公司动态';
          break;
        case 'about.join':
          $scope.title = '加入我们';
          break;
        case 'about.contact':
          $scope.title = '联系我们';
          break;
        case 'about.notice':
          $scope.title = '平台公告';
          break;
      }
      $log.debug(val);
    });
  }
})();
