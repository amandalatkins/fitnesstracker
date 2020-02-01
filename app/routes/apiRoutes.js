const db = require("../models");

module.exports = function(app) {

    // WORKOUT ROUTES
    // ============================================

    // Retrieve all workouts
    app.get('/api/workouts', (req, res) => {
        db.Workout.find({}, (err, data) => {
            if (err) throw err;
            res.json(data);
        });
    });

    // Add new exercise to workout
    app.put('/api/workouts/:id', (req,res) => {

    });

    // Create workout
    app.post('/api/workouts', (req,res) => {
        
    });
    

}