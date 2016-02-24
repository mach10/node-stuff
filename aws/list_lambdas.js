process.env.AWS_PROFILE='fbdprod'

var AWS = require('aws-sdk')
var proxy = require('proxy-agent')


AWS.config.update({region: 'eu-west-1', httpOptions: {agent: proxy('http://www-cache.reith.bbc.co.uk:80')}})


var lambda = new AWS.Lambda()

lambda.listFunctions({}, function(err,data){
    if(err) console.log(err, err.stack);
    else console.log('no error')

    //for(var i=0; i<data.Functions.length; i++){
    //    console.log(data.Functions[i].FunctionName)
    //}
})