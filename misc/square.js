//If you want the root of your module's export to be a function (such as a constructor)
// or if you want to export a complete object in one assignment instead of building it one
// property at a time, assign it to module.exports instead of exports.
// see https://nodejs.org/api/modules.html
// assigning to exports will not modify module, must use module.exports

module.exports = function(width) {
    return {
        width: width,//this line appears to be optional - try removing it
        area: function() {
            return width * width;   //without the 'this' keyword, we operate on the raw argument.
                                    //with the 'this' keyword, we operate on the object property
        }
    };
}