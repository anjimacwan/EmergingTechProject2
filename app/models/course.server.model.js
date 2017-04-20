// Load the module dependencies
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define a new 'courseSchema'
const CourseSchema = new Schema({
    created: {
        type: Date,
        default: Date.now
    },
    recepient: {
        type: String,
        default: '',
        trim: true,
        required: 'Recepient cannot be blank '
    },
    content: {
        type: String,
        default: '',
        trim: true,
        required: 'Content cannot be blank'
    },
   
    creator: {
        type: Schema.ObjectId,
        ref: 'User'
    }
});

// Create the 'Course' model out of the 'ArticleSchema'
mongoose.model('Course', CourseSchema);