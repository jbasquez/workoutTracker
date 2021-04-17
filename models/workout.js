const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema(
    {
        day: {
            type: Date,
            default: () => new Date
        },
        excercises: [
            {
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
                    required: "Please enter how long you preformed this workout"
                },
                weight:{
                    type: Number,
                    required: "enter in the weight used"
                },
                reps:{
                    type: Number,
                    required: "How many reps did you do?"
                }
            }
        ]

    },
    {
        toJSON:{
            virtuals:true
        }
    }
)


const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;

//https://mongoosejs.com/docs/tutorials/virtuals.html