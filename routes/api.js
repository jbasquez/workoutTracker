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

// app.post('/api/workouts', function ({body}, res){
//   Workout.create()
//    .then(data => (
//      res.json(data)
//    ))
//    .catch(err =>{
//      res.json(err)
//    })
//  });

// app.post("/api/workouts", ({ body }, res) => {
//   Workout.create(body)
//     .then(dbTransaction => {
//       res.json(dbTransaction);
//     })
//     .catch(err => {
//       res.status(400).json(err);
//     });
// });
 }
