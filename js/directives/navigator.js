angular.module('app')
  .directive('navigator', function () {
    return {
      replace: true,
      restrict: "E",
      templateUrl: "views/directives/navigator.html",
      scope: {
      	clickTarget: "=",
        pillTarget: "=",
        clickCaption: "=?", //optional
        navType: "=",
        icon: "=",
      },
      // link: function(scope, element, attrs){},
      controller: function($scope, $location){
      	setSelectedPill();
      	// console.log($scope.selectedPill);

		$scope.changePill = function(){
			$location.path($scope.clickTarget);
		};

		function setSelectedPill(){
			switch ($location.path()) {
				case '/':
					$scope.selectedPill = 0;
					break;
				case '/home':
					$scope.selectedPill = 1;
					break;
				case '/blog':
					$scope.selectedPill = 2;
					break;
				case '/settings':
					$scope.selectedPill = 3;
					break;
				default:
					$scope.selectedPill = 0;
			}
		}
      }
    };
  });