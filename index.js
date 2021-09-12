const express = require('express');
const app = express();
const mongoose = require('mongoose');

// 환경변수
const dotenv = require('dotenv');

// 라우터
const authRoute = require('./routes/auth');

dotenv.config();

async function main() {
    await mongoose.connect(process.env.MONGO_URI)
}

// 1. json 받기 설정
app.use(express.json());

// 2. mongodb 연결
main()
.then(() => console.log('DB 연결 성공'))
.catch(err => console.log(err))

// 3. 라우터 분리 (미들웨어 추가)
// /api/auth 에 대한 요청을 할때 authRoute에서 작성한 코드대로 작동하게 된다
app.use("/api/auth", authRoute);

// 4. 서버 오픈
app.listen(8800, () => {
    console.log('서버 오픈')
})
