const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const Resistance = new Resistance({
    name:{
        type: String,
        required: "Please enter the name of the resistance excersize"
    },
    weight:{
        type: Number,
        required: "Please enter the weight of the resistance"
    },
    sets: {
        type: Number,
        required: "Please enter how many sets you did"
    },
    reps: {
        type: Number,
        required: "Please enter the reps you did"
    },
    // resistance-duration:{
    //     type: Number
    // }
});
const Resistance = mongoose.model("Resistance", ResistanceSchema);
module.exports = Resistance;