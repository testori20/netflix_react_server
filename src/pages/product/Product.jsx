import { Publish } from '@material-ui/icons'
import { Link } from 'react-router-dom'
import Chart from '../../components/chart/Chart'
import { productData } from '../../dummyData'
import "./product.css"

export default function Product() {
    return (
        <div className="product">
            <div className="productTitleContainer">
                <h1 className="productTitle">Product</h1>
                <Link to="/newproduct">
                    <button className="productAddButton">Create</button>
                </Link>
            </div>
            <div className="productTop">
                <div className="productTopLeft">
                    <Chart
                        data={productData}
                        dataKey="가격"
                        title="가격 추이"
                    />
                </div>
                <div className="productTopRight">
                    <div className="productInfoTop">
                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Unknown_person.jpg/542px-Unknown_person.jpg"
                            alt=""
                            className="productInfoImg"
                        />
                        <span className="productName">에어팟</span>
                    </div>
                    <div className="productInfoBottom">
                        <div className="productInfoItem">
                            <div className="productInfoKey">아이디: </div>
                            <div className="productInfoValue">123</div>
                        </div>
                    </div>
                    <div className="productInfoBottom">
                        <div className="productInfoItem">
                            <div className="productInfoKey">가격: </div>
                            <div className="productInfoValue">5123</div>
                        </div>
                    </div>
                    <div className="productInfoBottom">
                        <div className="productInfoItem">
                            <div className="productInfoKey">활성화: </div>
                            <div className="productInfoValue">예</div>
                        </div>
                    </div>
                    <div className="productInfoBottom">
                        <div className="productInfoItem">
                            <div className="productInfoKey">품절:</div>
                            <div className="productInfoValue">아니오</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="productBottom">
                <form className="productForm">
                    <div className="productFormLeft">
                        <label>제품 이름</label>
                        <input type="text" placeholder="에어팟" />
                        <label>품절</label>
                        <select name="inStock" id="inStock">
                            <option value="yes">예</option>
                            <option value="no">아니요</option>
                        </select>
                        <label>활성화</label>
                        <select name="active" id="active">
                            <option value="yes">예</option>
                            <option value="no">아니요</option>
                        </select>
                    </div>
                    <div className="productFormRight">
                        <div className="productUpload">
                            <img
                                src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Unknown_person.jpg/542px-Unknown_person.jpg"
                                alt=""
                                className="productUploadImg"
                            />
                            <label for="file">
                                <Publish />
                            </label>
                            <input type="file" id="file" style={{display:"none"}} />
                        </div>
                        <button className="productButton">업데이트</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
