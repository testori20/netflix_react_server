const router = require('express').Router();
const User = require('../models/User');

const cryptoJS = require("crypto-js");

const jwt = require('jsonwebtoken');

// 회원가입
router.post("/register", async (req,res) => {
    const newUser = new User({
        username: req.body.username,
        email: req.body.email,
        password: cryptoJS.AES.encrypt(req.body.password, process.env.SECRET_KEY).toString(),
    });
    
    try {
        const user = await newUser.save();
        res.status(201).json(user);
    } catch(err) {
        res.status(500).json(err);
    }
})

// 로그인
router.post("/login", async (req,res) => {
    try {
        const user = await User.findOne({email: req.body.email});
        !user && res.status(401).json("잘못된 아이디 또는 비밀번호");

        const decrypted = cryptoJS.AES.decrypt(user.password,process.env.SECRET_KEY);
        const originalPassword = decrypted.toString(cryptoJS.enc.Utf8);

        // 비밀번호가 일치하지 않음
        originalPassword !== req.body.password && res.status(401).json("잘못된 비밀번호");

        // jwt
        const accessToken = jwt.sign(
            { id: user._id, isAdmin: user.isAdmin },
            process.env.SECRET_KEY,
            { expiresIn: '5d' }
        )
        
        const {password, ...others} = user._doc;
        res.status(200).json({...others,accessToken});
    } catch(err) {
        res.status(500).json(err);
    }
})

module.exports = router;