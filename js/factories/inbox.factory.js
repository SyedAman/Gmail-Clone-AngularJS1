// Factory: InboxFactory
// Use Angular factory for server-side communication via HTTP

// inject $http service in InboxFactory
app.factory('InboxFactory', function InboxFactory($http) {
    // use strict to generate error for undeclared variables
    'use strict';
    // Export object for best practice and explicit internal naming to determine private/public
    var exports = {};
    
    // create functions to get email messages
    exports.getMessages = function () {
        // use $http service to GET request emails from JSON database
        return $http.get('json/emails.json')
            // default error handling
            .error(function (data) {
                console.log('There was a HTTP GET error!', data);
            });
    };

    // return exports for best practice
    return exports;
});