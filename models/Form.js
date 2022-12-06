const mongoose = require('mongoose')
const Schema = mongoose.Schema

const formSchema = new Schema({
    label: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    dateCreated: {
        type: Date,
        default: Date.now
    },
    dueDate: {
        type: Date
    },
    public: {
        type: Boolean
    },
    domains: [{
        type: String
    }],
    controls: [{
        type: Schema.Types.ObjectId,
        ref: 'controls'
    }]
})

module.exports = mongoose.model('forms', formSchema)