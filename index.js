var express = require('express');
var app = express();

// This responds with "Hello World" on the homepage

app.use(express.static('./'));
app.get('/', function (req, res) {
    res.sendFile( __dirname + "/" + "index.html" );
 })

var server = app.listen(process.env.PORT || 8081, function () {
   var host = server.address().address
   var port = server.address().port
   
   console.log("Example app listening at http://%s:%s", host, port)
})