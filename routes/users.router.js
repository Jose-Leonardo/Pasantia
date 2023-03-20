const router = require('express').Router()
const UsersControllers = require('../controllers/users.controllers')
const passport = require('../libs/passport')

router.get('/',passport.authenticate('jwt', { session: false }), UsersControllers.getStates)
router.get('/:id', UsersControllers.getState)
router.put('/:id', UsersControllers.updateState)

module.exports = router