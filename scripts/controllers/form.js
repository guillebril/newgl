'use strict';

function advancedFormCtrl($scope, $http, $timeout, $interval) {
  var statesList = ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'];
  $scope.states = new Bloodhound({
    datumTokenizer: Bloodhound.tokenizers.whitespace,
    queryTokenizer: Bloodhound.tokenizers.whitespace,
    // `states` is an array of state names defined in "The Basics"
    local: statesList
  });
  $scope.bestPictures = new Bloodhound({
    datumTokenizer: Bloodhound.tokenizers.obj.whitespace('value'),
    queryTokenizer: Bloodhound.tokenizers.whitespace,
    prefetch: '../data/post_1960.json',
    remote: {
      url: '../data/films/queries/%QUERY.json',
      wildcard: '%QUERY'
    }
  });
  $scope.bears = [{
    'id': 1,
    'name': 'American Black Bear',
  }, {
    'id': 2,
    'name': 'Asiatic Black Bear',
  }, {
    'id': 3,
    'name': 'Brown Bear',
  }, {
    'id': 4,
    'name': 'Giant Panda',
  }, {
    'id': 5,
    'name': 'Sloth Bear',
  }, {
    'id': 6,
    'name': 'Sun Bear',
  }, {
    'id': 7,
    'name': 'Polar Bear',
  }, {
    'id': 8,
    'name': 'Spectacled Bear',
  }];
  $scope.clockOpt = {
    donetext: 'Done'
  };
  $scope.colorpickerOpt = {
    horizontal: true
  };
  $scope.disabled = undefined;
  $scope.enable = function() {
    $scope.disabled = false;
  };
  $scope.disable = function() {
    $scope.disabled = true;
  };
  $scope.clear = function() {
    $scope.person.selected = undefined;
    $scope.address.selected = undefined;
    $scope.country.selected = undefined;
  };
  $scope.people = [{
    name: 'Adam',
    email: 'adam@email.com',
    age: 12,
    country: 'United States'
  }, {
    name: 'Amalie',
    email: 'amalie@email.com',
    age: 12,
    country: 'Argentina'
  }, {
    name: 'Estefanía',
    email: 'estefania@email.com',
    age: 21,
    country: 'Argentina'
  }, {
    name: 'Adrian',
    email: 'adrian@email.com',
    age: 21,
    country: 'Ecuador'
  }, {
    name: 'Wladimir',
    email: 'wladimir@email.com',
    age: 30,
    country: 'Ecuador'
  }, {
    name: 'Samantha',
    email: 'samantha@email.com',
    age: 30,
    country: 'United States'
  }, {
    name: 'Nicole',
    email: 'nicole@email.com',
    age: 43,
    country: 'Colombia'
  }, {
    name: 'Natasha',
    email: 'natasha@email.com',
    age: 54,
    country: 'Ecuador'
  }, {
    name: 'Michael',
    email: 'michael@email.com',
    age: 15,
    country: 'Colombia'
  }, {
    name: 'Nicolás',
    email: 'nicolas@email.com',
    age: 43,
    country: 'Colombia'
  }];
}
angular.module('app').filter('propsFilter', function() {
  return function(items, props) {
    var out = [];
    if (angular.isArray(items)) {
      var keys = Object.keys(props);
      items.forEach(function(item) {
        var itemMatches = false;
        for (var i = 0; i < keys.length; i++) {
          var prop = keys[i];
          var text = props[prop].toLowerCase();
          if (item[prop].toString().toLowerCase().indexOf(text) !== -1) {
            itemMatches = true;
            break;
          }
        }
        if (itemMatches) {
          out.push(item);
        }
      });
    } else {
      // Let the output be the input untouched
      out = items;
    }
    return out;
  };
});
angular.module('app').controller('advancedFormCtrl', ['$scope', '$http', '$timeout', '$interval', advancedFormCtrl]);