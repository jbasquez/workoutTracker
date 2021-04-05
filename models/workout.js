const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
    type:{
        type: String,
        required: "enter a excersize type"
    },
    name:{
        type: String,
        required: "enter a workout name"
    },
    distance:{
        type: Number,
        required: "enter a distance"
    },
    duration:{
        type: Number,
        required: "enter how long"
    },
    weight:{
        type: Number
    },
    reps:{
        type:Number
    }
});

const Cardio = mongoose.model("Cardio", CardioSchema);

module.exports = Cardio;

//https://mongoosejs.com/docs/tutorials/virtuals.html