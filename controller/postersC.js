const Poster = require('../models/posterM');
const User = require('../models/userM');
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

const onePosterPage = async(req,res)=> {
    const poster = await Poster.findById(req.params._id).lean();
    res.render('posters/one-poster', {
        url: process.env.URL,
        title: poster.title,
        poster
    });
};

const editePosterPage = async(req,res)=> {
try {
    const editePoster = await Poster.findById(req.params._id).lean();
    res.render('posters/edite-poster', {
        url: process.env.URL,
        title: 'edite poster page',
        editePoster
    });
} catch (err) {
    console.log(err)
}
};

const editePoster = async(req,res)=> {
try {
    const editePoster = {
        title: req.body.title,
        amount: req.body.amount,
        region: req.body.region,
        desc: req.body.desc,
        image: 'uploads/' + req.file.filename        
    };
    await Poster.findByIdAndUpdate(req.params._id, editePoster); 
    res.redirect('/posters');   
} catch (err) {
    console.log(err)
};
};

const deletePoster = async(req,res)=> {
try {
    await Poster.findByIdAndRemove(req.params._id);
    res.redirect('/posters');    
} catch (err) {
    console.log(err)
}
}
module.exports = {
    postersPage,
    addPosterPage,
    addPoster,
    onePosterPage,
    editePosterPage,
    editePoster,
    deletePoster
};