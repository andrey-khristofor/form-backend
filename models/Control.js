const mongoose = require('mongoose')
const Schema = mongoose.Schema

const controlSchema = new Schema({
    label: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    validators: {
        required: {
            type: Boolean,
            required: true
        },
        options: [{
            type: String
        }],
        shuffle: {
            type: Boolean
        },
        allowedFiles: [{
            type: String
        }],
        maxNumber: {
            type: Number
        },
        maxSize: {
            type: String
        },
        from: {
            type: Number
        },
        to: {
            type: Number
        },
        rows: [{
            type: String
        }],
        columns: [{
            type: String
        }],
        includeTime: {
            type: Boolean
        },
        includeYear: {
            type: Boolean
        },
        type: {
            type: String
        }
    }
})

module.exports = mongoose.model('controls', controlSchema)