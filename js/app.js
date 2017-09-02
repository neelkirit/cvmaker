var myApp = angular.module('myApp', ['ngRoute', 'ngCookies','ngCordova'])
// .constant('CVMAKER_API', 'http://192.168.225.62:8080')
.constant('CVMAKER_API', 'http://35.154.66.62:8080')
// .constant('BROWSER_API', 'http://192.168.225.62:8888');
.constant('BROWSER_API', 'http://35.154.66.62:80');


myApp.config(['$routeProvider', function ($routeProvider) {

  $routeProvider.
    when('/home', {
      templateUrl: 'views/home.html',
      controller: 'HomeController'
    }).
    when('/school', {
      templateUrl: 'views/school.html',
      controller: 'SchoolController'
    }).
    when('/pre-university', {
      templateUrl: 'views/preUniversity.html',
      controller: 'PreUniversityController'
    }).
    when('/university', {
      templateUrl: 'views/university.html',
      controller: 'UniversityController'
    }).
    when('/extras', {
      templateUrl: 'views/extras.html',
      controller: 'ExtrasController'
    }).
    when('/accolades', {
      templateUrl: 'views/accolades.html',
      controller: 'AccoladesController'
    }).
    when('/job', {
      templateUrl: 'views/job.html',
      controller: 'JobController'
    }).
    when('/confirm-details', {
      templateUrl: 'views/confirmDetails.html',
      controller: 'ConfirmDetailsController'
    }).
    
    
    otherwise({
      redirectTo: '/home'
    });

}]);

// register jQuery extension
jQuery.extend(jQuery.expr[':'], {
    focusable: function (el, index, selector) {
        return $(el).is('a, button, :input, [tabindex]');
    }
});

$(document).on('keypress', 'input,select', function (e) {
    if (e.which == 13) {
        e.preventDefault();
        // Get all focusable elements on the page
        var $canfocus = $(':focusable');
        var index = $canfocus.index(document.activeElement) + 1;
        if (index >= $canfocus.length) index = 0;
        $canfocus.eq(index).focus();
    }
});