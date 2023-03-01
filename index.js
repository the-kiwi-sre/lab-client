/* This is a demo app which periodically calls a sample service, that's it. In the future it will be extended to have 
 * Prometheus and OpenTelemetry instrumentation added.
 */

// Dependencies
const axios = require('axios'); // For making HTTP/API requests and handling the response
const fs = require('fs'); // File server to read our config file

// Defines how often to call the downstream service (in seconds)
const interval = 10;

// Object to hold our configuration
let configuration;

// Read in JSON config file
let rawdata = fs.readFileSync('./config.json');
configuration = JSON.parse(rawdata);

// Creates an interval to execute something every X milliseconds
let request_interval = setInterval(function(){ timer() }, interval * 1000);

// Code to execute every X seconds
function timer() 
{
    axios.get(configuration.service_url)
    .then(res => {
        console.log('INFO: Status Code: ' + res.status + ' and Response Body: ' + JSON.stringify(res.data));
    })
    .catch(err => {
        console.log('Error: ', err.message);
    });        
}

function stopFunction() {
    clearInterval(request_interval);
}


