const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

main()
.then(() => console.log('DB 연결 성공'))
.catch(err => console.log(err))

async function main() {
    await mongoose.connect(process.env.MONGO_URI)
}
app.listen(8800, () => {
    console.log('서버 오픈')
})
