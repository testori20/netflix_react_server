import { Publish } from '@material-ui/icons'
import { useEffect } from 'react';
import { Link, useLocation, Redirect } from 'react-router-dom'
import "./product.css"

export default function Product() {
    const location = useLocation();
    const movie = location.movie;

    return (
        <div className="product">
            <div className="productTitleContainer">
                <h1 className="productTitle">영화</h1>
                <Link to="/newproduct">
                    <button className="productAddButton">생성</button>
                </Link>
            </div>
            <div className="productTop">
                <div className="productTopRight">
                    <div className="productInfoTop">
                        <img
                            src={movie.img || ""}
                            alt=""
                            className="productInfoImg"
                        />
                        <span className="productName">{movie.title}</span>
                    </div>
                    <div className="productInfoBottom">
                        <div className="productInfoItem">
                            <div className="productInfoKey">아이디: </div>
                            <div className="productInfoValue">{movie._id}</div>
                        </div>
                    </div>
                    <div className="productInfoBottom">
                        <div className="productInfoItem">
                            <div className="productInfoKey">장르: </div>
                            <div className="productInfoValue">{movie.genre}</div>
                        </div>
                    </div>
                    <div className="productInfoBottom">
                        <div className="productInfoItem">
                            <div className="productInfoKey">년도: </div>
                            <div className="productInfoValue">{movie.year}</div>
                        </div>
                    </div>
                    <div className="productInfoBottom">
                        <div className="productInfoItem">
                            <div className="productInfoKey">상영시간:</div>
                            <div className="productInfoValue">{movie.limit}</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="productBottom">
                <form className="productForm">
                    <div className="productFormLeft">
                        <label>영화 이름</label>
                        <input type="text" placeholder={movie.title} />
                        <label>년도</label>
                        <input type="text" placeholder={movie.year} />
                        <label>장르</label>
                        <input type="text" placeholder={movie.genre} />
                        <label>상영시간</label>
                        <input type="text" placeholder={movie.limit} />
                        <label>트레일러</label>
                        <input type="file" placeholder={movie.trailer} />
                        <label>비디오</label>
                        <input type="file" placeholder={movie.video} />
                    </div>
                    <div className="productFormRight">
                        <div className="productUpload">
                            <img
                                src={movie.img || ""}
                                alt=""
                                className="productUploadImg"
                            />
                            <label htmlFor="file">
                                <Publish />
                            </label>
                            <input
                                type="file"
                                id="file"
                                style={{ display: 'none' }}
                            />
                        </div>
                        <button className="productButton">업데이트</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
