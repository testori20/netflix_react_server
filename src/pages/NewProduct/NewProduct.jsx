import "./newProduct.css"

export default function NewProduct() {
    return (
        <div className="newProduct">
            <h1 className="addProductTitle">새 제품</h1>
            <form className="addProductForm">
                <div className="addProductItem">
                    <label>이미지</label>
                    <input type="file" id="file" />
                </div>
                <div className="addProductItem">
                    <label>이름</label>
                    <input type="text" placeholder="에어팟" />
                </div>
                <div className="addProductItem">
                    <label>재고</label>
                    <input type="text" placeholder="123" />
                </div>
                <div className="addProductItem">
                    <label>활성화</label>
                    <select name="active" id="active">
                        <option value="yes">예</option>
                        <option value="no">아니오</option>
                    </select>
                </div>
                <button className="addProductButton">생성</button>
            </form>
        </div>
    )
}
