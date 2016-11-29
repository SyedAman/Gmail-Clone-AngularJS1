// Use Angular factory for server-side communication via HTTP
app.factory('InboxFactory', function InboxFactory($http) {
    // Export object for best practice and explicit internal naming to determine private/public
    var exports = {};
    
    exports.getMessages = function () {
        return $http.get('json/emails.json')
            .error(function (data) {
                console.log('There was a HTTP GET error!', data);
            });
    };

    return exports;
});