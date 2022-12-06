const express = require('express')
const passport = require('passport')
const controller = require('../controllers/forms')
const router = express.Router()

router.get('/', passport.authenticate('jwt', { session: false }), controller.list)
router.post('/', passport.authenticate('jwt', { session: false }), controller.create)
router.get('/:id', passport.authenticate('jwt', { session: false }), controller.get)
router.patch('/:id', passport.authenticate('jwt', { session: false }), controller.update)
router.delete('/:id', passport.authenticate('jwt', { session: false }), controller.delete)


module.exports = router