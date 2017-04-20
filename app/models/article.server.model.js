const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ArticleSchema = new Schema({
    created: {
        type: Date,
        default: Date.now
    },
    patientname: {
        type: String,
        default: '',
        trim: true
    },
    temperature: {
        type: String,
        default: '',
        trim: true,
        required: 'Temperature cannot be blank'
    },
    heartrate: {
        type: String,
        default: 'Heart Rate cannot be blank',
        trim: true
    },
    bloodpressurelow: {
        type: String,
        default: 'Blood pressure low cannot be blank',
        trim: true
    },
    bloodpressurehigh: {
        type: String,
        default: 'Blood pressure high cannot be blank',
        trim: true
    },
    creator: {
        type: Schema.ObjectId,
        ref: 'User'
    }
});
mongoose.model('Article', ArticleSchema);
