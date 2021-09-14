import './user.css'
import {
    CalendarToday,
    LocationSearching,
    MailOutline,
    PermIdentity,
    PhoneAndroid,
    Publish,
} from '@material-ui/icons'
import { Link } from 'react-router-dom'
export default function User() {
    return (
        <div className="user">
            <div className="userTitleContainer">
                <h1 className="userTitle">사용자 수정</h1>
                <Link to="/newUser">
                    <button className="userAddButton">생성</button>
                </Link>
            </div>
            <div className="userContainer">
                <div className="userShow">
                    <div className="userShowTop">
                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Unknown_person.jpg/542px-Unknown_person.jpg"
                            alt=""
                            className="userShowImg"
                        />
                        <div className="userShowTopTitle">
                            <span className="userShowUsername">kmc</span>
                            <span className="userShowUserTitle">
                                web develop
                            </span>
                        </div>
                    </div>
                    <div className="userShowBottom">
                        <span className="userShowTitle">계정 상세정보</span>
                        <div className="userShowInfo">
                            <PermIdentity className="userShowIcon" />
                            <span className="userShowInfoTitle">kim001</span>
                        </div>
                        <div className="userShowInfo">
                            <CalendarToday className="userShowIcon" />
                            <span className="userShowInfoTitle">
                                1998.11.12
                            </span>
                        </div>
                        <span className="userShowTitle">연락사항</span>
                        <div className="userShowInfo">
                            <PhoneAndroid className="userShowIcon" />
                            <span className="userShowInfoTitle">
                                010-3333-3333
                            </span>
                        </div>
                        <div className="userShowInfo">
                            <MailOutline className="userShowIcon" />
                            <span className="userShowInfoTitle">
                                kim001@naver.com
                            </span>
                        </div>
                        <div className="userShowInfo">
                            <LocationSearching className="userShowIcon" />
                            <span className="userShowInfoTitle">
                                south korea
                            </span>
                        </div>
                    </div>
                </div>
                <div className="userUpdate">
                    <span className="userUpdateTitle">수정</span>
                    <form className="userUpdateForm">
                        <div className="userUpdateLeft">
                            <div className="userUpdateItem">
                                <label>유저네임</label>
                                <input
                                    type="text"
                                    className="userUpdateInput"
                                    placeholder="kmc001"
                                />
                            </div>
                            <div className="userUpdateItem">
                                <label>이름</label>
                                <input
                                    type="text"
                                    className="userUpdateInput"
                                    placeholder="kmc"
                                />
                            </div>
                            <div className="userUpdateItem">
                                <label>이메일</label>
                                <input
                                    type="text"
                                    className="userUpdateInput"
                                    placeholder="kim001@naver.com"
                                />
                            </div>
                            <div className="userUpdateItem">
                                <label>전화번호</label>
                                <input
                                    type="text"
                                    className="userUpdateInput"
                                    placeholder="010-3333-3333"
                                />
                            </div>
                            <div className="userUpdateItem">
                                <label>국가</label>
                                <input
                                    type="text"
                                    className="userUpdateInput"
                                    placeholder="south korea"
                                />
                            </div>
                        </div>
                        <div className="userUpdateRight">
                            <div className="userUpdateUpload">
                                <img
                                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Unknown_person.jpg/542px-Unknown_person.jpg"
                                    alt=""
                                    className="userUpdateImg"
                                />
                                <label htmlFor="file">
                                    <Publish className="userUpdateIcon" />
                                </label>
                                <input
                                    type="file"
                                    id="file"
                                    style={{ display: 'none' }}
                                />
                            </div>
                            <button className="userUpdateButton">
                                업데이트
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
