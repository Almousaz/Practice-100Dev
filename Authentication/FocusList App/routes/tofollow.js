const express = require('express')
const router = express.Router()
const tofollowController = require('../controllers/tofollow') 
const { ensureAuth } = require('../middleware/auth')

router.get('/', ensureAuth, tofollowController.gettofollow)

router.post('/createTofollow', tofollowController.createtofollow)

router.put('/markComplete', tofollowController.markComplete)

router.put('/markIncomplete', tofollowController.markIncomplete)

router.delete('/deleteTofollow', tofollowController.deleteTofollow)

module.exports = router