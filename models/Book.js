const mongoose = require("mongoose");

const BookSchema = new mongoose.Schema({
    title: {
        type: String
    },
    author: {
        type: String
    },
    summary: {
        type: String
    },
});

module.exports = mongoose.model("Book", BookSchema);
