const { Router } = require('express'); 
const router = Router();
const { 
    postersPage,
    addPosterPage,
    addPoster
 } = require("../controller/postersC");
 const upload = require('../utils/fileUpload')

 router.get('/', postersPage);
 router.get('/add', addPosterPage);
router.post('/add', upload.single('image'), addPoster);


 module.exports = router