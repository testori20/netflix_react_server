const router = require('express').Router();
const List = require('../models/List');
const verify = require('../verifyToken');

// Create
router.post("/",verify, async (req, res) => {
    if(req.user.isAdmin) {
        const newList = new List(req.body);

        try {
            const savedList = await newList.save();
            res.status(201).json(savedList);
        }catch(err) {
            res.status(500).json(err);
        }
    }
    else {
        res.status(403).json("다른 계정입니다")
    }
})

// Delete
router.delete("/",verify, async (req, res) => {
    if(req.user.isAdmin) {
        try {
            await List.findByIdAndDelete(req.params.id);
            res.status(201).json("영화가 삭제되었습니다")
        }catch(err) {
            res.status(500).json(err);
        }
    }
    else {
        res.status(403).json("다른 계정입니다")
    }
})

// Get
router.get("/",verify, async (req, res) => {
    const type = req.query.type;
    const genre = req.query.genre;
    let list = [];

    try {
        // 타입 선택 시
        if(type) {
            // 타입과 장르 선택 시
            if(genre) {
                list = await List.aggregate([{
                    $sample: {size: 10},
                }, {
                    $match: {type, genre}
                }])
            }
            else {
                list = await List.aggregate([{
                    $sample: {size: 10},
                }, {
                    $match: {type}
                }])
            }
        }
        else {
            // 랜덤으로 10개
            list = await List.aggregate([
                {
                    $sample: { size: 10 },
                },
            ])
        }
        res.status(200).json(list);
    }catch(err) {
        res.status(500).json(err);
    }
})

// Delete
module.exports = router;