const router = require('express').Router();
const Movie = require('../models/Movie');
const verify = require('../verifyToken');

// Create
router.post("/",verify, async (req, res) => {
    if(req.user.isAdmin) {
        const newMovie = new Movie(req.body);

        try {
            const savedMovie = await newMovie.save();
            res.status(201).json(savedMovie);
        }catch(err) {
            res.status(500).json(err);
        }
    }
    else {
        res.status(403).json("다른 계정입니다")
    }
})

// Update
router.put("/:id",verify, async (req, res) => {
    if(req.user.isAdmin) {
        try {
            const updatedMovie = await Movie.findByIdAndUpdate(
                req.params.id,
                { $set: req.body },
                { new: true }
            );
            res.status(201).json(updatedMovie);
        }catch(err) {
            res.status(500).json(err);
        }
    }
    else {
        res.status(403).json("다른 계정입니다")
    }
})

// Delete
router.delete("/:id",verify, async (req, res) => {
    if(req.user.isAdmin) {
        try {
            await Movie.findByIdAndDelete(req.params.id);
            res.status(200).json("영화가 삭제되었습니다")
        }catch(err) {
            res.status(500).json(err);
        }
    }
    else {
        res.status(403).json("다른 계정입니다")
    }
})

// GET
router.get("/find/:id",verify, async (req, res) => {
    try {
        const movie = await Movie.findById(req.params.id);
        res.status(200).json(movie);
    } catch(err) {
        res.status(500).json(err);
    }
})

// 무작위로 GET
router.get("/random", verify, async (req, res) => {
    const type = req.query.type;
    let movie;
    try {
        if(type === "series") {
            movie = await Movie.aggregate([
                {
                    $match: { isSeries: true },
                },
                {
                    // sample : 임의로 size개 선택
                    $sample: { size: 1 }
                },
            ])
        } else {
            movie = await Movie.aggregate([
                {
                    $match: { isSeries: false },
                },
                {
                    // sample : 임의로 size개 선택
                    $sample: { size: 1 }
                },
            ])
        }
        res.status(200).json(movie);
    } catch(err) {
        res.status(500).json(err);
    }
})

// GET 모든유저
router.get("/",verify, async (req, res) => {
    if(req.user.isAdmin) {
        try {
            const movies = await Movie.find();
            res.status(200).json(movies.reverse());
        }catch(err) {
            res.status(500).json(err);
        }
    }
    else {
        res.status(403).json("다른 계정입니다")
    }
})

module.exports = router;