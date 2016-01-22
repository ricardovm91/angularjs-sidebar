angular.module('app')
  .directive('sidebar', function ($timeout) {
	    return {
	      	replace: true,
	     	restrict: "E",
	      	templateUrl: "views/sidebar.html",
	      	scope: {
	      		items: "=",
	    	},
	      	link: function(scope, element, attrs){
	      		var resizeId;

	      		$(document).ready(function() {
				    clearTimeout(resizeId);
					resizeId = setTimeout(resizeInner, 400);
				});

				/*We need to resize the scrollable div (sidebar-inner) if the window us resized.
				This is done when the window resize is "finished". It's a trick but we don't want to run code during the whole resize, just one time*/

				$(window).resize(function() {
					clearTimeout(resizeId);
					resizeId = setTimeout(resizeInner, 400);
				});

				function resizeInner(){
					//whatever we want to do
					if ($(window).width() < 992){
						var buttonsWidth = $('.sidebar-button').width(); //the buttons' width
						var numButtons = $('.sidebar-button').length //the number of buttons
						var sidebarInnerWidth = buttonsWidth * numButtons + numButtons; //we add a little more so the scroll feels better
						$('.sidebar-inner').css('width', sidebarInnerWidth + 'px');
						$('.sidebar-inner').css('height', '100%');
					}else{
						var buttonsHeight = $('.sidebar-button').height(); //the buttons' width
						var numButtons = $('.sidebar-button').length //the number of buttons
						var sidebarInnerHeight = buttonsHeight * numButtons + numButtons; //we add a little more so the scroll feels better
						$('.sidebar-inner').css('height', sidebarInnerHeight + 'px');
						$('.sidebar-inner').css('width', '100%');
					}
				}				
	      	},
	      	controller: function($scope){
	      		 			
	      	}
	    };
  });
