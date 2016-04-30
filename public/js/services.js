'use strict';

var app = angular.module('routerApp');

app.service('Orders', function($q, $http) {
  // var orders = $http.jsonp('https://api.korbit.co.kr/v1/transactions?callback=JSON_CALLBACK')

  this.getAll = () => {
    // return people;
    return $http.post('/api/ajax', {url: 'https://api.korbit.co.kr/v1/transactions?time=day'});
  };
  this.getCurrent = () => {
    return $http.post('/api/ajax', {url: 'https://api.korbit.co.kr/v1/orderbook'});

  }
  this.getByName = name => {
    // returning a promise
    return $q((resolve, reject) => {
      var person = people.filter(obj => obj.name.toLowerCase() === name.toLowerCase())[0];

      if(person) {
        resolve(person); // trigger .then()
      } else {
        reject(new Error('Person not found'));  // trigger .catch()
      }

    });
  };

});
