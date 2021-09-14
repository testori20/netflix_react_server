import "./newUser.css"

export default function NewUser() {
    return (
        <div className="newUser">
            <h1 className="newUserTitle">새로운 유저</h1>
            <form className="newUserForm">
                <div className="newUserItem">
                    <label>유저네임</label>
                    <input type="text" placeholder="kim001" />
                </div>
                <div className="newUserItem">
                    <label>이름</label>
                    <input type="text" placeholder="kim" />
                </div>
                <div className="newUserItem">
                    <label>이메일</label>
                    <input type="text" placeholder="kim@naver.com" />
                </div>
                <div className="newUserItem">
                    <label>비밀번호</label>
                    <input type="password" placeholder="password" />
                </div>
                <div className="newUserItem">
                    <label>전화번호</label>
                    <input type="text" placeholder="010-3333-3333" />
                </div>
                <div className="newUserItem">
                    <label>국가</label>
                    <input type="text" placeholder="south korea" />
                </div>
                <div className="newUserItem">
                    <label>성별</label>
                    <div className="newUserGender">
                        <input type="radio" name="gender" id="male" value="male" />
                        <label htmlFor="male">남</label>
                        <input type="radio" name="gender" id="female" value="female" />
                        <label htmlFor="female">여</label>
                    </div>
                </div>
                <div className="newUserItem">
                    <label>활성</label>
                    <select name="active" id="active" className="newUserSelect">
                        <option value="yes">예</option>
                        <option value="no">아니오</option>
                    </select>
                </div>
                <button className="newUserButton">생성</button>
            </form>
        </div>
    )
}
