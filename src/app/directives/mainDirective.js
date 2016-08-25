'use strict';
var angular = require('angular');

var directives = angular.module('pokemon.directives', []);

directives.directive('error400', function() {
  return {
    controller: findPokemonCtrl,
    templateURL: '../../views/error400.html'
  }
});

directives.directive('pokemonDirective', function(findPokemonCtrl) {
  return {
    controller: findPokemonCtrl,
    templateURL: '../../views/pokemon.html'
  }
});
