// Controller: InboxController

// Controllers should only define Model and View bindings
// and as well as small helper functions not needed elsewhere
app.controller('InboxController', function($scope) {
    'use strict';
    // Initialize title property to an array for view to use
    $scope.title = 'Write a title here...';
    // Log to console upon load
    console.log('Inbox Loaded!');
});