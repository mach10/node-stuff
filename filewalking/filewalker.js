var filewalker = require('filewalker');

console.time('filewalking')
for(var i=0;i<2;i++){
filewalker('/Users/robshield/Documents')
  .on('dir', function(p) {
    console.log('dir:  %s', p);
  })
  .on('file', function(p, s) {
    //console.log('file: %s, %d bytes', p, s.size);
  })
  .on('error', function(err) {
    //console.error(err);
  })
  .on('done', function() {
    console.timeEnd('filewalking')
    console.log('%d dirs, %d files, %d bytes', this.dirs, this.files, this.bytes);
  })
.walk();
}

console.log('process finished')
