//see http://www.tutorialspoint.com/nodejs/nodejs_event_emitter.htm

var events=require('events');
var eventEmitter = new events.EventEmitter();

var listener1 = function listner1(){
  console.log('listener 1 executed');
}


var listener2 = function listner2(){
  console.log('listener 2 executed');
}

eventEmitter.addListener('connection', listener1);

eventEmitter.on('connection', listener2);

var eventListeners = require('events').EventEmitter.listenerCount(eventEmitter, 'connection');

console.log(eventListeners + " listener(s) listening to the connection event");

eventEmitter.emit('connection');

eventEmitter.removeListener('connection', listener1);
console.log('listener 1 will not listen now');

eventEmitter.emit('connection');

var eventListeners = require('events').EventEmitter.listenerCount(eventEmitter, 'connection');
console.log(eventListeners + " listener(s) listening to the connection event");

console.log("program ended")
