

var original = [
{"activity_id": "test-activity-id",
"event_name": "ferret.event.received",
"payload": {},
"timestamp": "1449147517.453",
},
{
 "activity_id": "test-activity-id",
 "event_name": "ferret.upload.started",
 "payload": {},
 "timestamp": "1449147517.455",
},
{
  "activity_id": "test-activity-id",
   "event_name": "ferret.upload.successful",
   "payload": {},
   "timestamp": "1449147517.455"
 }
]

amendedmap = original.map(function(obj){
  return obj.event_name
})
console.log(amendedmap)
