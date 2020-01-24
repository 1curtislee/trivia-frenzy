const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// this will be our data base's data structure 
const QuestionModel = new Schema({
    author: String,
    question: String,
    answers: [{
        option: String,
        correct: Boolean
    }]
}, { collection: 'Questions' }

);

// export the new Schema so we could modify it using Node.js
// ch_ arg 1 is the name of the new collection!
module.exports = mongoose.model('Questions', QuestionModel);