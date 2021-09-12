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

// GET

// GET ALL

// GET 유저 정보

module.exports = router;