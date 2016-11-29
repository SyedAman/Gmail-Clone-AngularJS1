// Create/set module
var app = angular.module('gmail-clone-app', [
    'ngRoute'
]);

// InboxController script
function InboxController($scope){
    $scope.title = 'Write a title here...';
};

// Configure $routeProvider
app.config(function ($routeProvider) {
    $routeProvider
        .when('/inbox', {
            templateUrl: 'views/inbox.html',
            controller: 'InboxController',
            controllerAs: 'inbox'
        })
});