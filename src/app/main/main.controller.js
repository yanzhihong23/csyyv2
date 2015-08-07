(function() {
  'use strict';

  angular
    .module('projects')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($scope, $timeout, webDevTec, toastr) {
    var vm = this;

    $scope.slides = [
      {bgName: 'banner-01', image: 'assets/images/banner.jpg'},
      {bgName: 'banner-02', image: 'assets/images/banner-02.jpg'},
      {bgName: 'banner-03', image: 'assets/images/banner-03.jpg'}
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
