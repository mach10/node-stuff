//in this example we have a function which
//does addition and then calls the callback
//with the result of that addition
var callBacker = function(x, y, done){
    var result = x+y;
    done(result);
}
//this is the function we've defined to handle the callback
var doCallback = function(theMessage){
    console.log('the message is '+theMessage);
}
//here we run it, passing the callback sans args as the third argument
callBacker(5,3, doCallback)

//we can do the same here with an anonymous function:
callBacker(5,3, function(theResult){
    console.log('anonymous function received the result '+theResult);
})