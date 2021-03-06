module.exports = function(db) {

  let exerciseSeed = [
    {
        type: "resistance",
        name: "Bicep Curl",
        duration: 20,
        weight: 100,
        reps: 10,
        sets: 4
    },
    {
        type: "resistance",
        name: "Lateral Pull",
        duration: 20,
        weight: 300,
        reps: 10,
        sets: 4
    },
    {
        type: "resistance",
        name: "Push Press",
        duration: 25,
        weight: 185,
        reps: 8,
        sets: 4
    },
    {
          type: "cardio",
          name: "Running",
          duration: 25,
          distance: 4
    },
    {
          type: "resistance",
          name: "Bench Press",
          duration: 20,
          weight: 285,
          reps: 10,
          sets: 4
    },
    {
          type: "resistance",
          name: "Bench Press",
          duration: 20,
          weight: 300,
          reps: 10,
          sets: 4
    },
    {
          type: "resistance",
          name: "Quad Press",
          duration: 30,
          weight: 300,
          reps: 10,
          sets: 4
    },
    {
          type: "resistance",
          name: "Bench Press",
          duration: 20,
          weight: 300,
          reps: 10,
          sets: 4
    },
    {
          type: "resistance",
          name: "Military Press",
          duration: 20,
          weight: 300,
          reps: 10,
          sets: 4
    },
    {
          type: "resistance",
          name: "Bench",
          duration: 30,
          distance: 2
    }
  ];

  db.Workout.deleteMany({}).then(() => {
      var workout = new db.Workout();
      workout.exercises = exerciseSeed;

      db.Workout.create(workout)
      .then(newWorkout => { return newWorkout; })
      .catch(err => console.log(err));
  });

}
