var express = require('express'),
    app = express.createServer(express.logger()),
    port = process.env.PORT || 5000;

app.get('/', function (request, response) {
    response.send('Hello Heroku!');
});

app.listen(port, function () {
    console.log('listening on port ' + port);
});
