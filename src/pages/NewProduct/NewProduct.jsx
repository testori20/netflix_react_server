import { useContext, useState } from 'react'
import { createMovies } from '../../context/movieContext/apiCalls';
import storage from '../../firebase';
import "./newProduct.css"
import {MovieContext} from "../../context/movieContext/MovieContext";

export default function NewProduct() {
    const [movie,setMovie] = useState(null);
    const [img,setImg] = useState(null);
    const [imgTitle,setImgTitle] = useState(null);
    const [imgSm,setImgSm] = useState(null);
    const [trailer,setTrailer] = useState(null);
    const [video,setVideo] = useState(null);
    // 몇개가 업로드 되었는지 표시
    const [uploaded, setUploaded] = useState(0);

    const {dispatch} = useContext(MovieContext);

    const handleChange = (e) => {
        const value = e.target.value;
        setMovie({...movie, [e.target.name]: value})
    }

    const upload = items => {
        items.forEach(item => {
            const fileName = new Date().getTime() + item.label + item.file.name
            const uploadTask = storage.ref(`/items/${fileName}`).put(item.file)
            // 업로드 퍼센트 표시
            uploadTask.on(
                'state_changed',
                snapshot => {
                    const progress =
                        (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                    console.log('업로드 ' + progress + '% 완료')
                },
                error => {
                    console.log(error)
                },
                () => {
                    uploadTask.snapshot.ref.getDownloadURL().then(url => {
                        setMovie(prev => {
                            return { ...prev, [item.label]: url }
                        })
                        setUploaded(prev => prev + 1)
                    })
                }
            )
        })
    }

    const handleUpload = (e) => {
        e.preventDefault();
        upload([
            {file: img, label: "img"},
            {file: imgTitle, label: "imgTitle"},
            {file: imgSm, label: "imgSm"},
            {file: trailer, label: "trailer"},
            {file: video, label: "video"},
        ])
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        createMovies(movie,dispatch);
    }

    console.log(movie);
    
    return (
        <div className="newProduct">
            <h1 className="addProductTitle">새 영화</h1>
            <form className="addProductForm">
                <div className="addProductItem">
                    <label>이미지</label>
                    <input type="file" id="img" name="img" onChange={e => setImg(e.target.files[0])}/>
                </div>
                <div className="addProductItem">
                    <label>제목 이미지</label>
                    <input type="file" id="imgTitle" name="imgTitle" onChange={e =>setImgTitle(e.target.files[0])}/>
                </div>
                <div className="addProductItem">
                    <label>썸네일</label>
                    <input type="file" id="imgSm" name="imgSm" onChange={e =>setImgSm(e.target.files[0])}/>
                </div>
                <div className="addProductItem">
                    <label>제목</label>
                    <input type="text" placeholder="아이언맨" name="title" onChange={handleChange}/>
                </div>
                <div className="addProductItem">
                    <label>설명</label>
                    <input type="text" placeholder="설명" name="desc" onChange={handleChange}/>
                </div>
                <div className="addProductItem">
                    <label>년도</label>
                    <input type="text" placeholder="2021" name="year" onChange={handleChange}/>
                </div>
                <div className="addProductItem">
                    <label>장르</label>
                    <input type="text" placeholder="영화" name="genre" onChange={handleChange}/>
                </div>
                <div className="addProductItem">
                    <label>상영시간</label>
                    <input type="text" placeholder="상영시간" name="duration" onChange={handleChange}/>
                </div>
                <div className="addProductItem">
                    <label>제한</label>
                    <input type="text" placeholder="제한" name="limit" onChange={handleChange}/>
                </div>
                <div className="addProductItem">
                    <label>시리즈</label>
                    <select name="isSeries" id="isSeries" onChange={handleChange}>
                        <option value="yes">예</option>
                        <option value="no">아니오</option>
                    </select>
                </div>
                <div className="addProductItem">
                    <label>트레일러</label>
                    <input type="file" placeholder="트레일러" name="trailer" onChange={e =>setTrailer(e.target.files[0])}/>
                </div>
                <div className="addProductItem">
                    <label>비디오</label>
                    <input type="file" placeholder="비디오" name="video" onChange={e =>setVideo(e.target.files[0])}/>
                </div>
                {uploaded === 5 ? (
                    <button className="addProductButton" onClick={handleSubmit}>생성</button>
                ) : <button className="addProductButton" onClick={handleUpload}>업로드</button>}
            </form>
        </div>
    )
}
