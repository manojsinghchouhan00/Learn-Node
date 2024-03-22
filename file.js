// //...........Create server code ..........
// var http = require('http');

// http.createServer(function (req, res) {
//     res.writeHead(200, {'Content-Type': 'text/html'});
//     res.end('Hello World!');
//     console.log("http://localhost:5000")
// }).listen(5000);


// //..........Create server code ..........

// var http = require('http'); // Import Node.js core module

// var server = http.createServer(function (req, res) { //create web server
//     console.log("requestc " ,req.url)
//     if (req.url == '/') { //check the URL of the current request

//         // set response header
//         res.writeHead(200, { 'Content-Type': 'text/html' });

//         // set response content
//         res.write(' <html> <body> <p>This is home Page.</p> </body> </html>');
//         res.end();

//     }
//     else if (req.url == "/student") {

//         res.writeHead(200, { 'Content-Type': 'text/html' });
//         res.write('<html> <body> <p>This is student Page.</p> </body> </html>');
//         res.end();

//     }
//     else if (req.url == "/admin") {

//         res.writeHead(200, { 'Content-Type': 'text/html' });
//         res.write('<html> <body> <p>This is admin Page.</p> </body> </html>');
//         res.end();

//     }
//     else {
//         res.end('Invalid Request!');
//     }
// });

// server.listen(5000); //6 - listen for any incoming requests

// console.log('Node.js web server at port 5000 is running..')

//     // ........... fs module .................//   //

var http = require('http');
var fs = require('fs');
http.createServer(function (req, res) {
  fs.readFile('demofile1.html', "utf8", function(err, data) {
    console.log(data)
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    return res.end();
  });
}).listen(8080);


// ......................................................................................
//   // ..............CRUD BY NODE JS ................

// var http = require('http');
// var fs = require('fs');
//  //................write file sync...............//
// fs.writeFileSync("myfile.html","<h1>heading of life</h1>")

// //..............read file....................//
// fs.readFile("myfile.html", "utf8", (err, result) => {
//     console.log("first :", result)
// })

// update file
// fs.appendFile("myfile.html", "i am a text here", (err) => {
//     if (!err) {
//         console.log("updat file")
//     }
// })

// fs.rename("myfile.html","myfile.txt", (err) => {
//     if (!err) {
//         console.log("renamed file")
//     }
// })

// fs.unlinkSync("myfile.txt")


