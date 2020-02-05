# Fitness Tracker

Track your workouts over time and use Fitness Tracker's robust dashboard to see visual breakdowns of your latest workout.

_This app was a practice using MongoDB and the Mongoose ORM. Client-side code as provided._

## Deployed Link

View the [Fitness Tracker Demo](https://still-ridge-90524.herokuapp.com/) on Heroku.

## Installation

*_Prerequisites_*
* [NodeJS](https://nodejs.org)
* [MongoDB](https://mongodb.com)

```bash
git clone https://github.com/amandalatkins/fitnesstracker.git

cd fitnesstracker

npm install

npm start
```

## Code Snippets

The following code snippet shows the model for the `workout` collection. It includes a hook that runs whenever a new exercise is added to the workout that totals the duration of all of the exercises to set the updated document's `totalDuration` field.

```javascript
const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
    day: {
        type: Date,
        default: Date.now()
    },
    exercises: [],
    totalDuration: Number,
});

WorkoutSchema.post('findOneAndUpdate', function(workout) {
    var tot = 0;
    workout.exercises.forEach(({duration}) => {
        if (!isNaN(duration)) {
            tot += parseInt(duration);
        }
    });

    workout.totalDuration = tot + this._update['$push'].exercises.duration;
    return workout.save();
    
});
```

The following code shows the route that is requested when adding a new exercise, and the associated Mongoose query that adds the exercise to MongoDB.

```javascript
app.put('/api/workouts/:id', ({params, body},res) => {
    db.Workout.findOneAndUpdate({ _id: params.id}, 
        {$push: 
            { exercises: body } 
        }, 
        { 
            upsert: true,
            useFindAndModify: false 
        }, 
        updatedWorkout => {
            res.json(updatedWorkout);
        }
    );
});
```

## Screen Shots

![Home](/public/assets/img/home.png)
![Dashboard](/public/assets/img/dashboard.png)

## Acknowledgments

Thanks to Jerome, Mahisha, Kerwin, and UC Berkeley for supplying the frontend code and the challenge of integrating it with a MongoDB-powered backend.