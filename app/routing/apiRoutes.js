const friends = require('../data/friends');

module.exports = function (app) {
    app.get('/api/friends', (request, response) => {
        

        return response.json(friends);
    });



}