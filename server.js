const express = require('express');
const path = require('path');

const app = express();

// Serve only the static files form the angularapp directory
app.use(express.static(__dirname + '/dist/frontend-departments'));

app.get('/', function(req,res) {

res.sendFile(path.join(__dirname+'/dist/frontend-departments/index.html'));
});

app.listen(process.env.PORT || 8080);