'use strict';

var app = angular.module('routerApp', ['ui.router', 'oitozero.ngSweetAlert']);

app.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: '/html/home.html',
      controller: 'homeCtrl'
    })
    .state('contact', {
      url: '/contact',
      templateUrl: '/html/contact.html',
      controller: 'contactCtrl'
    })
    .state('recent', {
      url: '/recent',
      templateUrl: '/html/recent.html',
      controller: 'recentCtrl'
    })
    .state('current', {
      url: '/current',
      templateUrl: '/html/current.html',
      controller: 'currentCtrl'
    })
    .state('detail', {
      url: '/detail/:name',
      templateUrl: '/html/detail.html',
      controller: 'detailCtrl',
      resolve: {
        person:
          function(Orders, $stateParams) {
            // return a promise which will resolve to the person
            return Orders.getByName($stateParams.name);
        }
      }
    })

  $urlRouterProvider.otherwise('/');
});
