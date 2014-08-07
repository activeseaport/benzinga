<!DOCTYPE html>
<html ng-app="myApp">
	<head>
		<link rel="stylesheet/less" type="text/css" href="css/style.less" />
		<script src="//cdnjs.cloudflare.com/ajax/libs/less.js/1.7.3/less.min.js" type="text/javascript"></script>
	</head>
<body>

	<div ng-controller="stockPortfolio" ng-cloak>

		<input type="text" name="mySymbol" placeholder="Enter Symbol" ng-model="symbol">
		<button type="button" ng-click="findSymbol()">Lookup</button>

		<p ng-bind="ask"></p>
		<p ng-bind="bid"></p>
		<input type="text" name="quanity" placeholder="Quanity" ng-model="quanity">
		<button type="button" ng-click="buyStock()">Buy</button>
		<button type="button" ng-click="sellStock()">Sell</button>

		<p ng-bind="cash"></p>

		<ul>
			<li ng-repeat="portfolio in myPortfolio">
				<span>{{portfolio.mySmbol}}</span>
				<span>{{portfolio.company}}</span>
				<span>{{portfolio.quanity}}</span>
				<span>{{portfolio.askprice}}</span>
				<button type="button" ng-click="viewStock(portfolio.mySmbol)">View Stock</button>
			</li>
		</ul>

	</div>

	<script src="//cdnjs.cloudflare.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>
	<script src="//cdnjs.cloudflare.com/ajax/libs/angular.js/1.2.20/angular.min.js" type="text/javascript"></script>
	<script src="//cdnjs.cloudflare.com/ajax/libs/angular-ui-router/0.2.10/angular-ui-router.min.js" type="text/javascript"></script>
	<script src="" type="text/javascript"></script>
	<script src="" type="text/javascript"></script>
	<script src="" type="text/javascript"></script>

	
	<script src="js/app.js"></script>
</body>
</html>
