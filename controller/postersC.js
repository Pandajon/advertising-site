const Poster = require('../models/posterM');

const postersPage = async(req,res)=> {
    try {
        const posters = await Poster.find().lean();
        res.render('posters/posters', {
            url: process.env.URL,
            title: 'posters page',
            posters
        });
    } catch (err) {
        console.log(err)
    };
};


const addPosterPage = (req,res)=> {
    res.render('posters/add-poster', {
        url: process.env.URL,
        title: 'add poster page'
    });
};

const addPoster = async(req,res)=> {
    try {
        const poster = {
            title: req.body.title,
            amount: req.body.amount,
            region: req.body.region,
            desc: req.body.desc,
            image: 'uploads/' + req.file.filename
        };
        await Poster.create(poster);
        res.redirect('/posters');
    } catch (err) {
        console.log(err)
    }
};


module.exports = {
    postersPage,
    addPosterPage,
    addPoster
}