
var path = require('path');
module.exports = function(app){
app.get('/exercise', function (req, res) {
    res.sendFile(path.join(__dirname,"develop/public/exercise.html"));
  })
}

