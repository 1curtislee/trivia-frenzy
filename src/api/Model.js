// /backend/data.js
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// this will be our data base's data structure 
const DataSchema = new Schema({
    question: String,
    answers: [
        {
            option1: String,
            correct: Boolean
        },
        {
            option2: String,
            correct: Boolean
        },
        {
            option3: String,
            correct: Boolean
        },
        {
            option4: String,
            correct: Boolean
        },
    ]
});

// export the new Schema so we could modify it using Node.js
module.exports = mongoose.model("Model", DataSchema);