//see http://www.tutorialspoint.com/nodejs/nodejs_event_loop.htm
var events = require('events');

var eventEmitter = new events.EventEmitter();

var connectHandler = function connected(){
    console.log("connection successful");
    eventEmitter.emit('data_received');
}

eventEmitter.on('connection', connectHandler);

eventEmitter.on('data_received', function(){
  console.log('data_received event reached');
});

eventEmitter.emit('connection');

console.log('program ended');
