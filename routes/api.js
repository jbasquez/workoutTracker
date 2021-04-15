const Workout = require("../models/workout");
// mongoose querry help
//https://mongoosejs.com/docs/models.html
module.exports = function (app) {
  //get workouts
  app.get('/api/workouts', function (req, res){
    Workout.find()
    .then(data => (
      res.json(data)
    ))
    .catch(err =>{
      res.json(err)
    })
  });
// app.post('/api/workouts', function (req, res){
//   Workout.create()
//    .then(data => (
//      res.json(data)
//    ))
//    .catch(err =>{
//      res.json(err)
//    })
//  });
 }
