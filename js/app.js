// Create/set module
var app = angular.module('gmail-clone-app', [
    'ngRoute'
]);

// Configure routes with $routeProvider
app.config(function ($routeProvider) {
    $routeProvider
        // inbox route
        .when('/inbox', {
            templateUrl: 'views/inbox.html',
            controller: 'InboxController',
            controllerAs: 'inbox'
        })
        // parameterized inbox/email route
        .when('inbox/email/:id', {
            templateUrl: 'views/email.html',
            controller: 'EmailController',
            controllerAs: 'email'
        })
        // default route redirection
        .otherwise({
            redirectTo: '/inbox'
        });
});