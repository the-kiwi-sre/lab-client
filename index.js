const request = require('request');

console.log(process.argv[2])

// Call service 1 every 10 seconds
let myVar = setInterval(function(){ timer() }, 10000);

function timer() 
{
    request(process.argv[2] + ':9190/api', { json: true }, (err, res, body) => {
        if (err) { return console.log(err); }
        console.log(body.url);
        console.log(body.explanation);
      });
}

function stopFunction() {
    clearInterval(myVar);
}


