const jwt = require('jsonwebtoken');

function verify(req, res, next) {
    const authHeader = req.headers.token;
    if(authHeader) {
        const token = authHeader.split(" ")[1];

        jwt.verify(token,process.env.SECRET_KEY,(err, userInfo) => {
            if(err) res.status(403).json("토큰이 유효하지 않습니다");
            console.log(userInfo);
            // req.user에 userInfo 저장
            req.user = userInfo;
            // 토큰이 유효하다면 다음으로 이동
            next();
        })
    } else {
        return res.status(401).json("인증되지 않은 사용자입니다")
    }
}

module.exports = verify;