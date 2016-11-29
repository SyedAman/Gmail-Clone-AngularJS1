// Create/set module
var app = angular.module('gmail-clone-app', [
    'ngRoute'
]);

// InboxController script
function InboxController($scope){
    $scope.title = 'Write a title here...';
};