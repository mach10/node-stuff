var AWS = require('aws-sdk')
var proxy = require('proxy-agent')
var Scaler = require('./auto_scaling.js')
//add to AWS.config.update if behind Reith
//httpOptions: {agent: proxy('http://www-cache.reith.bbc.co.uk:80')}
//AWS.config.update({region: 'eu-west-1'})
AWS.config.update({region: 'eu-west-1',httpOptions: {agent: proxy('http://www-cache.reith.bbc.co.uk:80')}})
var autoscaling = new AWS.AutoScaling();
var scale_down_params = {
    MaxSize: 0,
    MinSize: 0
}
var scale_up_params = {
    MaxSize: 1,
    MinSize: 1
}
function needsSpinningDown(the_asg) {
    return stringStartsWith(the_asg.AutoScalingGroupName, ['Test', 'Int']) && hasMinSizeGreaterThan(0, the_asg.MinSize)
}

function hasMinSizeOf(number, MinSize) {
    return number == MinSize;
}
function needsSpinningUp(the_asg) {
    return stringStartsWith(the_asg.AutoScalingGroupName, ['Test', 'Int']) && hasMinSizeOf(0, the_asg.MinSize)
}

var hasMinSizeGreaterThan = function(limit, minSize){
    return minSize > limit;
}

var stringStartsWith = function (string, prefixes) {
    for(i=0; i<prefixes.length; i++){
        prefix = prefixes[i]
        if(string.slice(0, prefix.length) == prefix){
            return true;
        }
    }
    return false;
}

var updated = function(err, data){
    console.log('in updated')
    if(err) console.log(err, err.stack);
    else console.log(data);
}

function scaleUpOrDown(upOrDownFunction, upOrDownParams){
    autoscaling.describeAutoScalingGroups({}, function (err, data) {
        if (err)console.log(err, err.stack);
        else
            var asg = data.AutoScalingGroups;

        for (var i = 0; i < asg.length; i++) {
            var the_asg = asg[i];
            if (upOrDownFunction(the_asg)) {
                console.log(the_asg.AutoScalingGroupName + " " + the_asg.MinSize + ' ' + the_asg.MaxSize)
                upOrDownParams.AutoScalingGroupName = the_asg.AutoScalingGroupName
                autoscaling.updateAutoScalingGroup(upOrDownParams, function(e,d){
                    if(e) console.log(e, e.stack)
                    else console.log('updated')
                })
            }

        }
        //console.log(scale_down_params)
    });
}
scaleUpOrDown(needsSpinningDown, scale_down_params)
//scaleUpOrDown(needsSpinningUp, scale_up_params)
