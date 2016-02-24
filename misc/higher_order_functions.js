//This demonstrates a higher-order function
//or one that can return a function or accept a function
//as an argument

var addThem = function(x,y){
    return x + y;
}

var subtractThem = function (x, y){
    return x - y;
}



var getFunction = function(theOperand){
    if(theOperand == 'add')return addThem;
    if(theOperand == 'subtract') return subtractThem;
}


var addFunction = getFunction('add')
var subtractFunction = getFunction('subtract')

console.log(addFunction(5,3))
console.log(subtractFunction(5,3))

var acceptFunctionAndRunIt = function (someFunction, x, y){
    console.log("performing some operation on x and y")
    return someFunction(x,y);
}

console.log(acceptFunctionAndRunIt(getFunction('add'), 5, 3))