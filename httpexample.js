var http = require("http")

console.log(http.METHODS.length) 

http.createServer(function(request,response){
method = request.method
 url = request.url
 if( url === '/'){
   response.writeHead(200, {'Content-Type':'text/plain'});
   response.end('hello world from the root of the app');
 }else if (url === '/uploads'){
   if(method === 'POST'){
      var upload = ""
     request.on('data', function(chunk){
         upload += chunk
         console.log("chunk: ", chunk)
     })
     request.on('end', function(){
       console.log('handling the upload: ', upload.length)
       response.writeHead(200, {'Content-Type':'text/plain'});
       response.end('handling upload')
     })
   }else{
     response.writeHead(200, {'Content-Type':'text/html'});
     response.end('<html><head /><body><form action="/uploads" method="POST" enctype="multipart/form-data"> <input type="file" name="the_file"> <input type="submit" name="submit"></form></body></html>')
  }
 }else{
   response.writeHead(404, {'Content-Type':'text/plain'});
   response.end('Page Not Found')
 }
}).listen(8081)

console.log('server running at http://127.0.0.1:8081/');
