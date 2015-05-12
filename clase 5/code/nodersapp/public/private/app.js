var app = angular.module('miApp', []);



app.controller(
	'unController', 
	[
		'$scope', 
		'$http',
		function($scope,$http) {
			$http.get('/perros')
				.success(function(data){
					console.log(data);
				})
				.error(function(data){
					
				});
			$scope.nombre == "fforres"
		}
	]
);
