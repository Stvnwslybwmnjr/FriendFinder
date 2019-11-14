const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 8080;
const friends = require('./app/data/friends');
const htmlRoutes = require('./app/routing/htmlRoutes');
const apiRoutes = require('./app/routing/apiRoutes');


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('app/public'));

htmlRoutes(app);
apiRoutes(app);




app.get('/api/friends/:id', (request, response) => {
    let memberId = request.params.id;
    friends.forEach(element => {
        console.log(element.id);
        if (element.id === memberId) {
            response.send(element);
        }
    });
}); 

app.listen(PORT, function () {
    console.log(`Listening on http://localhost:${PORT}`);
})