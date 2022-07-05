const { Router  } = require('express')
const router = Router()

const { getProfilePage } = require('../controller/userC')

router.get('/:username', getProfilePage)

module.exports = router