// Load the module dependencies
const mongoose = require('mongoose');
const Course = mongoose.model('Course');

// Create a new error handling controller method
function getErrorMessage(err) {
    if (err.errors) {
        for (let errName in err.errors) {
            if (err.errors[errName].message) return err.errors[errName].
                message;
        }
    } else {
        return 'Unknown server error';
    }
};

// Create a new controller method that creates new courses
exports.create = function(req, res) {
    // Create a new course object
    const course = new Course(req.body);

    // Set the course's 'creator' property
    course.creator = req.user;

    // Try saving the course
    course.save((err) => {
        if (err) {
            // If an error occurs send the error message
            return res.status(400).send({
                message: getErrorMessage(err)
            });
        } else {
            // Send a JSON representation of the course 
            res.json(course);
        }
    });
};

// Create a new controller method that retrieves a list of courses
exports.list = function(req, res) {
    // Use the model 'find' method to get a list of courses
    Course.find().sort('-created').populate('creator', 'firstName lastName fullName').exec((err, courses) => {
        if (err) {
            // If an error occurs send the error message
            return res.status(400).send({
                message: getErrorMessage(err)
            });
        } else {
            // Send a JSON representation of the course 
            res.status(200).json(courses);
        }
    });
};

// Create a new controller method that returns an existing course
exports.read = function(req, res) {
    res.json(req.course);
};

// Create a new controller method that updates an existing course
exports.update = function(req, res) {
    // Get the course from the 'request' object
    const course = req.course;

    // Update the course fields
    course.recepient = req.body.recepient;
    course.content = req.body.content;

    // Try saving the updated course
    course.save((err) => {
        if (err) {
            // If an error occurs send the error message
            return res.status(400).send({
                message: getErrorMessage(err)
            });
        } else {
            // Send a JSON representation of the course 
            res.json(course);
        }
    });
};

// Create a new controller method that delete an existing course
exports.delete = function(req, res) {
    // Get the course from the 'request' object
    const course = req.course;

    // Use the model 'remove' method to delete the course
    course.remove((err) => {
        if (err) {
            // If an error occurs send the error message
            return res.status(400).send({
                message: getErrorMessage(err)
            });
        } else {
            // Send a JSON representation of the course 
            res.json(course);
        }
    });
};

// Create a new controller middleware that retrieves a single existing course
exports.courseByID = function(req, res, next, id) {
    // Use the model 'findById' method to find a single course 
    Course.findById(id).populate('creator', 'firstName lastName fullName').exec((err, course) => {
        if (err) return next(err);
        if (!course) return next(new Error('Failed to load course ' + id));

        // If an course is found use the 'request' object to pass it to the next middleware
        req.course = course;

        // Call the next middleware
        next();
    });
};

// Create a new controller middleware that is used to authorize an course operation 
exports.hasAuthorization = function(req, res, next) {
    // If the current user is not the creator of the course send the appropriate error message
    if (req.course.creator.id !== req.user.id) {
        return res.status(403).send({
            message: 'User is not authorized'
        });
    }

    // Call the next middleware
    next();
};