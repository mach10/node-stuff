var circle = require('./circle.js')

var square = require('./square.js')

var echo = function(speech){console.log(speech)}


var x = 1
while (x <   100) {
    echo('x is '+x+' and areas is ' +circle.area(x)+' and circumference is '+circle.circumference(x));
    x++;
}

var mySquare = square(4);
echo(mySquare.area())
console.log('ended')


function myFunction(){
    carname = "fiat"
console.log(carname)
}

console.log(mySquare.area())
