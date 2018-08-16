angular
  .module('myApp', [])
  .controller('containerCtrl', function() {
    this.value = 'not changed';
    this.click = function(newValue) {
      this.value = newValue;
    }
  })
  .directive('myContainer', function() {
    return {
      restrict: 'E',
      transclude: true,
      controller: 'containerCtrl',
      controllerAs: 'container',
      templateUrl: 'my-container.html'
    }
  })
  .directive('myButton', function() {
    return {
      restrict: 'E',
      transclude: true,
      scope: {
        click: '&onClick'
      },
      templateUrl: 'my-button-click.html'
    }
  });