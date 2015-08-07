(function() {
  'use strict';

  angular
    .module('projects')
    .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'main'
      })
      .state('advantage', {
        url: '/advantage',
        templateUrl: 'app/advantage/advantage.html'
      })
      .state('news', {
        url: '/news',
        templateUrl: 'app/news/news.html'
      })
      .state('help', {
        url: '/help',
        templateUrl: 'app/help/help.html'
      })
      .state('about', {
        url: '/about',
        templateUrl: 'app/about/about.html',
        controller: 'AboutController'
      })
      .state('about.company', {
        url: '/company',
        templateUrl: 'app/about/about.company.html'
      })
      .state('about.team', {
        url: '/team',
        templateUrl: 'app/about/about.team.html'
      })
      .state('about.join', {
        url: '/join',
        templateUrl: 'app/about/about.join.html'
      })
      .state('about.dynamic', {
        url: '/dynamic',
        templateUrl: 'app/about/about.dynamic.html'
      })
      .state('about.contact', {
        url: '/contact',
        templateUrl: 'app/about/about.contact.html'
      })
      .state('about.notice', {
        url: '/notice',
        templateUrl: 'app/about/about.notice.html'
      })


    $urlRouterProvider.otherwise('/');
  }

})();
