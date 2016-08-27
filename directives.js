// DIRECTIVES
weatherApp.directive("weatherReport", function() {
	return {
		restrict: 'E',
		templateUrl: 'directives/weatherReport.html',
		replace: true,
		scope : {
			weatherDay: "=",
			convertToStandard: "&",
			convertToDate: "&",
			dateFormat: "@"
		}
	}
});

weatherApp.directive("footer", function() {
  return {
  	restrict: 'A',
    templateUrl: 'views/partials/footer.html',
    scope: true,
    transclude : false,
    controller: 'FooterController'
  };
});