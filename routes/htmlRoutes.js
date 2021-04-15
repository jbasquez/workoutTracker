
var path = require('path');
module.exports = function(app){
  app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname,"develop/public/index.html"));
  })
  app.get('/exercise', function (req, res) {
    res.sendFile(path.join(__dirname,"develop/public/exercise.html"));
  })
  app.get('/stats', function (req, res) {
    res.sendFile(path.join(__dirname,"develop/public/stats.html"));
  })
}