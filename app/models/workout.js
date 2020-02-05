const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
    day: {
        type: Date,
        default: Date.now()
    },
    exercises: [],
    totalDuration: Number,
    totalWeight: Number,
    totalSets: Number,
    totalReps: Number,
    totalDistance: Number
});

WorkoutSchema.methods.setTotalDuration = function() {
    var tot = 0;
    this.exercises.forEach(({duration}) => {
        if (!isNaN(duration)) {
            tot += parseInt(duration);
        }
    });
    this.totalDuration = tot;
}

WorkoutSchema.methods.setTotalWeight = function() {
    var tot = 0;
    this.exercises.forEach(({type, weight}) => {
        if (type === "resistance" && !isNaN(weight)) {
            tot += parseInt(weight);
        }
    });  
    this.totalWeight = tot;
}

WorkoutSchema.methods.setTotalReps = function() {
    var tot = 0;
    this.exercises.forEach(({type, reps}) => {
        if (type === "resistance" && !isNaN(reps)) {
            tot += parseInt(reps);
        }
    });
    this.totalReps = tot;
}
WorkoutSchema.methods.setTotalSets = function() {
    var tot = 0;
    this.exercises.forEach(({type, sets}) => {
        if (type === "resistance" && !isNaN(sets)) {
            tot += parseInt(sets);
        }
    });
    this.totalSets = tot;
}
WorkoutSchema.methods.setTotalDistance = function() {
    var tot = 0;
    this.exercises.forEach(({type, distance}) => {
        if (type === "cardio" && !isNaN(distance)) {
            tot += parseInt(distance);
        }
    });
    this.totalDistance = tot;
}

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;