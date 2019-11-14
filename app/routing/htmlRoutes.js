const path = require("path");

module.exports = function (app) {
//======================HOME PAGE=============================
    app.get('/', (request, response) => {
        response.sendFile(path.join(__dirname, '../public/home.html'));
    });
// ======================== SURVEY===================================
    app.get('/survey', (request, response) => {
        response.sendFile(path.join(__dirname, '../public/survey.html')); 
    });

}