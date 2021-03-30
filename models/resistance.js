const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const Resistance = new Resistance({
    name:{
        type: String
    },
    weight:{
        type: Number
    },
    sets: {
        type: Number
    },
    reps: {
        type: Number
    },
    // resistance-duration:{
    //     type: Number
    // }
})