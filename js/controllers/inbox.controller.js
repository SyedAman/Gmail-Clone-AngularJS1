// Controller: InboxController

// Controllers should only define Model and View bindings
// and as well as small helper functions not needed elsewhere
app.controller('InboxController', function($scope) {
    'use strict';

    // define meta properties under InboxController scope
    $scope.meta = {
        // Initialize title property to an array for view to use
        title: 'Type your name...'
    }
    // Log to console upon load
    console.log('Inbox Loaded!');
});