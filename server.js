// Standard set up for the express code to work with your code
var express = require('express');
var app = express();

/*
Routes a get request, and in this simple case - to the server's root. It sends a 
call back to handle the request. Not much will happen here, the call back is hardcoded  
to send a hello world string. But in theory you can do something with the req variable 
in the "/" directory, create a dynamic html and send that back
*/

app.get('/', function (req, res) {
  res.send("<h1>hello world</h1>");
});

/*
Firing up your server. For most of us noobs - all that matters here is
a) remember the port number - 8080 (in this example). If you use some other port 
number make sure you mention it explicitly when you make a call to the server.
b) the console statement is just a note to tell you the server is running
 */
 
app.listen(8080, function () {
  console.log('Server running at http://0.0.0.0:8080/');
  //call this app from https://<workspace name>-<user name>.c9users.io
});