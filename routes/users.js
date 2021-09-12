const router = require('express').Router();
const User = require('../models/User');

const cryptoJS = require("crypto-js");
const verify = require('../verifyToken');

// Update
router.put("/:id",verify, async (req, res) => {
    if(req.user.id === req.params.id || req.user.isAdmin) {
        // 업데이트 항목에 비밀번호가 있다면 암호화해서 업데이트
        if(req.body.password) {
            console.log(req.body.password);
            req.body.password = cryptoJS.AES.encrypt(
                req.body.password,
                process.env.SECRET_KEY
            ).toString();
        }
        try {
            // new 옵션을 통해 업데이트된 것을 반환
            const updateUser = await User.findByIdAndUpdate(
                req.params.id,
                { $set: req.body },
                { new: true }
            )
            res.status(200).json(updateUser);
        }catch(err) {
            res.status(500).json(err);
        }
    }
    else {
        res.status(403).json("다른 계정입니다")
    }
})

// Delete
router.delete('/:id', verify, async (req, res) => {
    if (req.user.id === req.params.id || req.user.isAdmin) {
        try {
            await User.findByIdAndDelete(req.params.id)
            res.status(200).json('유저가 삭제되었습니다')
        } catch (err) {
            res.status(500).json(err)
        }
    } else {
        res.status(403).json('다른 계정입니다')
    }
})

// GET
router.get('/find/:id', async (req, res) => {
    try {
        const user = await User.findById(req.params.id)
        const {password, ...others} = user._doc;
        res.status(200).json(others)
    } catch (err) {
        res.status(500).json(err)
    }
})
// GET ALL
router.get('/', verify, async (req, res) => {
    // query에 new를 추가하면 최근 10명의 유저만 보여주도록 설정
    // /?new=true
    const query = req.query.new;
    console.log(query);
    if (req.user.isAdmin) {
        try {
            const users = query ? await User.find().sort({createdAt:-1}).limit(10) : await User.find();
            res.status(200).json(users)
        } catch (err) {
            res.status(500).json(err)
        }
    } else {
        res.status(403).json('다른 계정입니다')
    }
})
// GET 월별 유저 가입 정보
router.get("/stats", async (req,res) => {
    const today = new Date();
    const lastYear = today.setFullYear(today.setFullYear() - 1);
    const months = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
    ];

    try {
        const data = await User.aggregate([
            {
                $project: {
                    month: {$month: "$createdAt"}
                }
            }, {
                $group: {
                    _id: "$month",
                    total: {$sum:1}
                }
            }
        ]);
        res.status(200).json(data);
    }catch(err) {
        res.status(500).json(err);
    }
})

module.exports = router;