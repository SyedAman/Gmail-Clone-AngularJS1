// Create/set module
var app = angular.module('gmail-clone-app', [
    'ngRoute'
]);

// Configure $routeProvider
app.config(function ($routeProvider) {
    $routeProvider
        // inbox view
        .when('/inbox', {
            templateUrl: 'views/inbox.html',
            controller: 'InboxController',
            controllerAs: 'inbox'
        })
        // parameterized inbox/email view
        .when('inbox/email/:id', {
            templateUrl: 'views/email.html',
            controller: 'EmailController',
            controllerAs: 'email'
        })
        // default view redirection
        .otherwise({
            redirectTo: '/inbox'
        });
});