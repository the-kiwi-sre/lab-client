const request = require('request');

console.log(process.argv[2])

// Call service 1 every 10 seconds
let myVar = setInterval(function(){ timer() }, 10000);

function timer() 
{
    request('http://' + process.argv[2] + '.prometheus-lab.svc.cluster.local:9190/api', { json: true }, (err, res, body) => {
        //if (err) { return console.log(err); }
        console.log('We made a request...');
        console.log('body.json = ' + body.json);
      });
}

function stopFunction() {
    clearInterval(myVar);
}


