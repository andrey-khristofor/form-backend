const Form = require('../models/Form')
// const Card = require('../models/Card')
const errorHandler = require('../utils/errorHandler')

module.exports.list = async function (req, res) {
    try {
        const forms = await Form.find({ user: req.user._id }).populate('controls')
        res.status(200).json(forms)
    } catch (e) {
        errorHandler(res, e)
    }

}

module.exports.create = async function (req, res) {
    console.log(req.user)
    const form = new Form({
        label: req.body.label,
        description: req.body.description,
        dueDate: req.body.dueDate,
        public: req.body.public,
        domains: req.body.domains,
        user: req.user._id
    })

    try {
        await form.save()
        res.status(201).json(form)
    } catch (e) {
        errorHandler(res, e)
    }
}

module.exports.get = async function (req, res) {
    try {
        const form = await Form.findById(req.params.id).populate('controls')
        res.status(200).json(form)
    } catch (e) {
        errorHandler(res, e)
    }
}

module.exports.update = async function (req, res) {
    const updatedForm = {
        label: req.body.label,
        description: req.body.description,
        dueDate: req.body.dueDate,
        public: req.body.public,
        domains: req.body.domains
    }

    try {
        const form = await Form.findOneAndUpdate(
            { _id: req.params.id },
            { $set: updatedForm },
            { new: true })
        res.status(200).json(form)
    } catch (e) {
        errorHandler(res, e)
    }
}

module.exports.delete = function (req, res) {
    res.status(200).json({ message: 'delete form endpoint works!' })
}