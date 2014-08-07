<!DOCTYPE html>
<html ng-app="myApp">
	<head>
		<link rel="stylesheet/less" type="text/css" href="css/style.less" />
		<script src="//cdnjs.cloudflare.com/ajax/libs/less.js/1.7.3/less.min.js" type="text/javascript"></script>
	</head>
<body>

	<div class="container" ng-controller="stockPortfolio" ng-cloak>

		<div class="title">
			<h1>Simple Stock Exchange</h1>
			<input type="text" name="mySymbol" placeholder="Enter Symbol" ng-model="symbol">
			<button type="button" ng-click="findSymbol()">Lookup</button>
		</div>

		<div class="bidControls">
			<p><span ng-hide="symbol">No Stock Selected</span><span ng-bind="name"></span> <span ng-show="symbol">(</span><span ng-bind="symbol"></span><span ng-show="symbol">)</span></p>
			<br/>
			<br/>
			<p class="inline">Bid <br><span ng-bind="bid"></span></p>
			<p class="inline">Ask <br><span ng-bind="ask"></span></p>

			<br/>
			<input type="number" name="quanity" placeholder="Quanity" ng-model="quanity">
			<button type="button" ng-click="buyStock()">Buy</button>
			<button type="button" ng-click="sellStock()">Sell</button>
		</div>
		
		<div class="portfolioControls">
			<p class="inline">Current Portfolio</p>
			<p class="inline cash">Cash: $<span ng-bind="cash"></span></p>
			<br/>
			<br/>
			<br/>
			<ul>
				<li>
					<span>Company</span>
					<span>Quanity</span>
					<span>Price Paid</span>
					<span></span>
				</li>
				<li ng-repeat="portfolio in myPortfolio">
					<span>{{portfolio.company}}</span>
					<span>{{portfolio.quanity}}</span>
					<span>{{portfolio.askprice}}</span>
					<button type="button" ng-click="viewStock(portfolio.mySmbol)">View Stock</button>
				</li>
			</ul>
		</div>
		<p class="message" ng-bind="message"></p>
	</div>

	<script src="//cdnjs.cloudflare.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>
	<script src="//cdnjs.cloudflare.com/ajax/libs/angular.js/1.2.20/angular.min.js" type="text/javascript"></script>
	<script src="//cdnjs.cloudflare.com/ajax/libs/angular-ui-router/0.2.10/angular-ui-router.min.js" type="text/javascript"></script>
	<script src="js/app.js"></script>
</body>
</html>
