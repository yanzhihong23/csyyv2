(function() {
  'use strict';

  angular
    .module('projects')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($scope, $timeout, webDevTec, toastr) {
    var vm = this;

    $scope.slides = [
      {bgName: 'banner-05'},
      {bgName: 'banner-01'},
      {bgName: 'banner-02'},
      {bgName: 'banner-03'},
      {bgName: 'banner-04'}
    ];

    vm.awesomeThings = [];
    vm.classAnimation = '';
    vm.creationDate = 1438756541060;
    vm.showToastr = showToastr;

    activate();

    function activate() {
      getWebDevTec();
      $timeout(function() {
        vm.classAnimation = 'rubberBand';
      }, 4000);
    }

    function showToastr() {
      toastr.info('Fork <a href="https://github.com/Swiip/generator-gulp-angular" target="_blank"><b>generator-gulp-angular</b></a>');
      vm.classAnimation = '';
    }

    function getWebDevTec() {
      vm.awesomeThings = webDevTec.getTec();

      angular.forEach(vm.awesomeThings, function(awesomeThing) {
        awesomeThing.rank = Math.random();
      });
    }
  }
})();
