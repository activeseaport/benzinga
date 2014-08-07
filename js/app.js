var app = angular.module('myApp', ['ngCookies']);

app.controller('stockPortfolio', function ($scope, $http, $cookies, $cookieStore) {
  

	$scope.cash = 100000.00;
	$scope.ask = 0.00; 
	$scope.bid = 0.00;
	$scope.quanity;
	$scope.symbol = "";
	$scope.name = "";
	$scope.myPortfolio = [];
	$scope.newStock = true;
	$scope.message = "";

	$scope.reset = function (){
		$scope.ask = 0.00; 
		$scope.bid = 0.00;
		$scope.message = "";
	}


  $scope.findSymbol = function(){
  	if($scope.symbol){
  		$http({method: 'GET', url: 'http://data.benzinga.com/stock/'+$scope.symbol}).
	    success(function(data, status, headers, config) {
	    	if(data.status != "error" && data.sector != null){
	    		console.log(data);
	    		$scope.ask = data.ask; 
					$scope.bid = data.bid;
	    		$scope.name = data.name;
	    		$scope.message = "";
	    	} else {
	    		$scope.message = "Stock symbol not found";
	    	}
	    }).
	    error(function(data, status, headers, config) {
	      // called asynchronously if an error occurs
	      // or server returns response with an error status.
	    });
  	} else{
  		$scope.message = "Please type stock symbol";
  	}
  }

	$scope.buyStock = function(){
		if($scope.quanity && $scope.symbol){

			for (i = 0; i < $scope.myPortfolio.length; i++) {
			    if($scope.myPortfolio[i].mySmbol == $scope.symbol){
			    	console.log($scope.myPortfolio[i].mySmbol);
			    	$scope.newStock = false;
			    	$entry = i;
			    }
			}

			$scope.cash -= $scope.ask * $scope.quanity;

			if($scope.newStock){
				$scope.myPortfolio.push({mySmbol: $scope.symbol, company : $scope.name, quanity: Number($scope.quanity), askprice: Number($scope.ask)});
			} else {
				$scope.myPortfolio[$entry].quanity += Number($scope.quanity);
			}

			$scope.updateCookie();
			$scope.newStock = true;
			$scope.message = "";
		} else {
			$scope.updateCookie();
			$scope.message = "Please type a quanity";
		}
		
	}



	$scope.sellStock = function(){
		

		if($scope.myPortfolio.length && $scope.quanity > 0){
			$scope.findSymbol();
			$scope.newStock = true;

			for (i = 0; i < $scope.myPortfolio.length; i++) {
			    if($scope.myPortfolio[i].mySmbol == $scope.symbol){
			    	console.log($scope.myPortfolio[i].mySmbol);
			    	$scope.newStock = false;
			    	$entry = i;
			    }
			}

			if($scope.newStock){
				$scope.message = "You don't have this stock to sell";
				return;
			}

			$scope.cash += $scope.bid * $scope.quanity;
			$scope.message = "";

			if($scope.newStock){
				$scope.message = "You'll need to buy stock before you can trade them";

			} else {
				if($scope.myPortfolio[$entry].quanity >= $scope.quanity){
					$scope.myPortfolio[$entry].quanity -= Number($scope.quanity);
					$scope.message = "";
					if($scope.myPortfolio[$entry].quanity == 0){
						$scope.myPortfolio.splice($entry, 1);
					}
					$scope.updateCookie();
				} else{
					$scope.message = "you dont have enough quanity to sell that much";
				}
				
			}

			$scope.newStock = true;
			console.log($scope.myPortfolio);
		} else {
			$scope.updateCookie();
			$scope.message = "You'll need to buy or select a stock before you can trade them";
		}
		
	}

	$scope.viewStock = function(mySmbol){
		$scope.symbol = mySmbol;
		$scope.findSymbol();
	}


	$scope.cookieData = $scope.myPortfolio;


	$scope.getCookie = function(){
  	var myCashBalance = $cookieStore.get('myCashBalance');
  	var myStockPortfolio = $cookieStore.get('myStockPortfolio');
  	if(myCashBalance){
  		 $scope.cash = myCashBalance;
  	}
  	if(myStockPortfolio){
  		 $scope.myPortfolio = JSON.parse(myStockPortfolio);
  	}

  	console.log(myCashBalance, myStockPortfolio);
	}

	$scope.getCookie();

	$scope.updateCookie = function(){
  	$cookieStore.put('myCashBalance', $scope.cash);
  	$cookieStore.put('myStockPortfolio', JSON.stringify($scope.myPortfolio));
  	$scope.getCookie();
	}

	
  


});

