'use strict';
//recieve data using get method get
var request = require('superagent');

   request
   .get('http://jsonplaceholder.typicode.com/')
   .end(function(err, res){
   	if (err || !res.ok) {
       console.log('Oh no! error get 1');
     } else {
       console.log('Success!!!' +  "Status code "+res.statusCode+JSON.stringify(res.body));
     }
   });



//send data using post method

var http = require("http");


var options = {
  hostname: 'jsonplaceholder.typicode.com',
  port: 80,
  path: '/posts',
  method: 'POST',
  headers: {
      'Content-Type': 'application/json',
  }
};
var request1 = http.request(options, function(response) {
  console.log('\n \nStatus codes: ' + response.statusCode);
  console.log('\n \nHeaders: ' + JSON.stringify(response.headers));
  response.setEncoding('utf8');
  response.on('data', function (body) {
    console.log('\n \n Body of website: ' + body);
  });
});
request1.on('error', function(e) {
  console.log('problem with request: ' + e.message);
});

request1.write('{"Name": "Barbienumiii"}');
request1.end();

