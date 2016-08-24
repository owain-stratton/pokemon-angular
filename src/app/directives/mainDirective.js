'use strict';
var angular = require('angular');

var directives = angular.module('pokemon.directives', []);

directives.directive('error400', function() {
  return {
    templateURL: '../../views/error400.html'
  }
})
