var app = angular.module('myApp', [])

app.controller('stockPortfolio', function ($scope, $http) {
  

	$scope.cash = 100000.00;
	$scope.ask = 0; 
	$scope.bid = 0;
	$scope.quanity;
	$scope.name = "";
	$scope.myPortfolio = [];
	$newStock = true;

  $scope.findSymbol = function(){
  	if($scope.symbol){
  		$http({method: 'GET', url: 'http://data.benzinga.com/stock/'+$scope.symbol}).
	    success(function(data, status, headers, config) {
	    	if(data.status != "error" && data.sector != null){
	    		console.log(data);
	    		$scope.ask = data.ask; 
					$scope.bid = data.bid;
	    		$scope.name = data.name;
	    	}
	    }).
	    error(function(data, status, headers, config) {
	      // called asynchronously if an error occurs
	      // or server returns response with an error status.
	    });
  	}
  }

	$scope.buyStock = function(){
		if($scope.quanity){

			for (i = 0; i < $scope.myPortfolio.length; i++) {
			    if($scope.myPortfolio[i].mySmbol == $scope.symbol){
			    	console.log($scope.myPortfolio[i].mySmbol);
			    	$newStock = false;
			    	$entry = i;
			    }
			}

			$scope.paidPrice = $scope.ask;
			$scope.cash = $scope.cash - $scope.paidPrice;

			if($newStock){
				$scope.myPortfolio.push({mySmbol: $scope.symbol, company : $scope.name, quanity: parseInt($scope.quanity), askprice: parseInt($scope.ask)});
			} else {
				$scope.myPortfolio[$entry].quanity += parseInt($scope.quanity);
			}

			$newStock = true;
			console.log($scope.myPortfolio);
		}
		
	}



	$scope.sellStock = function(){
		if($scope.myPortfolio.length && $scope.quanity){

			for (i = 0; i < $scope.myPortfolio.length; i++) {
			    if($scope.myPortfolio[i].mySmbol == $scope.symbol){
			    	console.log($scope.myPortfolio[i].mySmbol);
			    	$newStock = false;
			    	$entry = i;
			    }
			}

			$scope.sellPrice = $scope.myPortfolio[$entry].ask*$scope.quanity;
			$scope.cash = $scope.cash - $scope.paidPrice;

			if($newStock){
				console.log("Cant sell what you dont have");
			} else {
				if($scope.myPortfolio[$entry].quanity >= $scope.quanity){
					$scope.myPortfolio[$entry].quanity -= parseInt($scope.quanity);
					if($scope.myPortfolio[$entry].quanity == 0){
						$scope.myPortfolio.splice($entry, 1);
					}
				} else{
					console.log("you dont have enough to sell that much");
				}
				
			}

			$newStock = true;
			console.log($scope.myPortfolio);
		}
		
	}

	$scope.viewStock = function(mySmbol){
		$scope.symbol = mySmbol;
		$scope.findSymbol();
	}



});

