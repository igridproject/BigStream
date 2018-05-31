var express = require('express')
var server = express()
var path = require('path');
server.use('/', express.static(path.join(__dirname,'app')))
server.use('/bower_components', express.static(path.join(__dirname,'bower_components')))


server.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname,'/app/index.html'))
})

server.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})