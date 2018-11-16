const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DirectorSchema = new Schema({
    name: {
        type: String,
        maxlength: 50,
        minlength: 2,
    },
    surname: {
        type: String,
        maxlentgh: 50,
        minlentgh: 2
    },
    bio: {
        type: String,
        maxlentgh: 1000,
        minlentgh: 1
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('director', DirectorSchema);