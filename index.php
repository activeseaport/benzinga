<!DOCTYPE html>
<html ng-app="myApp">
	<head>
		<title>Benzinga Challenge</title>
		<link rel="stylesheet/less" type="text/css" href="css/style.less" />
		<script src="//cdnjs.cloudflare.com/ajax/libs/less.js/1.7.3/less.min.js" type="text/javascript"></script>
	</head>
<body>

	<div class="container" ng-controller="stockPortfolio" ng-cloak>

		<div class="title">
			<h1>Simple Stock Exchange</h1>
			<input ng-change="reset()" type="text" name="mySymbol" placeholder="Enter Symbol" ng-model="symbol">
			<button type="button" ng-click="findSymbol()">Lookup</button>
		</div>

		<div class="bidControls">
			<p><span ng-hide="symbol">No Stock Selected</span><span ng-bind="name"></span> <span ng-show="symbol">(</span><span ng-bind="symbol"></span><span ng-show="symbol">)</span></p>
			<br/>
			<br/>
			<p class="inline bid">Bid <br><br><span ng-bind="bid"></span></p>
			<p class="inline ask">Ask <br><br><span ng-bind="ask"></span></p>

			<br/>
			<br/>
			<br/>
			<input class="quanity" type="number" name="quanity" placeholder="Quanity" ng-model="quanity">
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
					<span class="label">Company</span>
					<span class="label">Quanity</span>
					<span class="label">Price Paid</span>
					<span class="label">&nbsp;</span>
				</li>
				<hr/>
				<li ng-repeat="portfolio in myPortfolio">
					<span class="border">{{portfolio.company}}</span>
					<span class="border">{{portfolio.quanity}}</span>
					<span class="border">{{portfolio.askprice}}</span>
					<button type="button" ng-click="viewStock(portfolio.mySmbol)">View Stock</button>
				</li>
			</ul>
		</div>
		<p class="message" ng-bind="message"></p>
	</div>

	<script src="//cdnjs.cloudflare.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>
	<script src="//cdnjs.cloudflare.com/ajax/libs/angular.js/1.2.20/angular.min.js" type="text/javascript"></script>
	<script src="//cdnjs.cloudflare.com/ajax/libs/angular-ui-router/0.2.10/angular-ui-router.min.js" type="text/javascript"></script>
	<script src="//cdnjs.cloudflare.com/ajax/libs/angular.js/1.2.20/angular-cookies.min.js"></script>

	<script src="js/app.js"></script>
</body>
</html>
