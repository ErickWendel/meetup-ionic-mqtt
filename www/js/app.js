// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic', 'chart.js'])

  .run(function ($ionicPlatform) {
    $ionicPlatform.ready(function () {
      if (window.cordova && window.cordova.plugins.Keyboard) {
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

        // Don't remove this line unless you know what you are doing. It stops the viewport
        // from snapping when text inputs are focused. Ionic handles this internally for
        // a much nicer keyboard experience.
        cordova.plugins.Keyboard.disableScroll(true);
      }
      if (window.StatusBar) {
        StatusBar.styleDefault();
      }
    });
  })
  .controller("LineCtrl", function ($interval) {
    var vm = this;
    vm.labels = [''];
    vm.ledAceso = true;
    vm.series = ['Temperatura', 'Distancia'];
    vm.data = [
      [], 
      []
      ];

    $interval(function () {

      vm.data[0].push(Math.random() + 20);
      vm.labels.push('');

      vm.data[1].push(Math.random());
      vm.labels.push('');

      console.log('data', vm.data[0].length);
     
      if (vm.data[0].length > 10) {
        vm.data[0] = vm.data[0].slice(2);
        vm.data[1] = vm.data[1].slice(2);
        vm.labels = vm.labels.slice(4);
      }
    }, 900);

    vm.options = {
      animation: {
        duration: 0
      },
      legend: {
        display: true
      },
      // xAxes: [{
      //     display: true
      //   }],
      //   yAxes: [{
      //     display: true
      //   }]

    };
  });
