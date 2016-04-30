'use strict';

var app = angular.module('routerApp');

app.controller('recentCtrl', function($scope, $state, Orders) {
    Orders.getAll()
        .then(res => {
            console.log('res:', res)
            $scope.orders = res.data
                // $scope.people = people;
        })
        .catch(err => {
            console.log('err:', err);
        });
});
app.controller('currentCtrl', function($scope, $state, Orders) {
    Orders.getCurrent()
        .then(res => {
            console.log('res.data:', res.data)
            $scope.bids = res.data.bids
            $scope.asks = res.data.asks
                // $scope.people = people;
        })
        .catch(err => {
            console.log('err:', err);
        });
});
app.controller('detailCtrl', function($scope, person) {
    $scope.person = person;
});
// app.controller("BarCtrl", function ($scope, Orders, $state) {
//   Orders.getAll()
//   .then(res => {
//     console.log('res.data:', res.data)
//     var shortPrice = []
//     res.data.bids.map(function(grp) {
//       shortPrice.push(parseInt(grp[0]/1000))
//     })
//     $scope.bids = res.data.bids
//     $scope.asks = res.data.asks
//   })
// }
app.controller('homeCtrl', function() {
    console.log('homeCtrl!');
});

app.controller('contactCtrl', function($scope, $state, SweetAlert) {
    console.log('contactCtrl!');

    $scope.showAlert = () => {
        SweetAlert.swal({
            title: "Are you sure?",
            text: "You want to go home?",
            type: "warning",
            showCancelButton: true,
            confirmButtonColor: "#DD6B55",
            confirmButtonText: "Yes, go home!",
            closeOnConfirm: true
        }, function(isConfirm) {
            if (isConfirm) {
                $state.go('home');
            }
        });
    };
});
