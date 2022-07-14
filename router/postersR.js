const { Router } = require('express'); 
const router = Router();
const { 
    postersPage,
    addPosterPage,
    addPoster,
    onePosterPage,
    editePosterPage,
    editePoster,
    deletePoster
 } = require("../controller/postersC");
 const upload = require('../utils/fileUpload')

router.get('/', postersPage);
router.get('/:_id', onePosterPage);
router.get('/add', addPosterPage);
router.post('/add', upload.single('image'), addPoster);
router.get('/:_id/edite', editePosterPage);
router.post('/:_id/edite', upload.single('image'), editePoster);
router.post('/:_id/delete', deletePoster);


 module.exports = router