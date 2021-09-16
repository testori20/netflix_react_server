import React, { useContext, useState } from 'react'
import "./topbar.css"
import {NotificationsNone, Language, Settings} from '@material-ui/icons';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/authContext/AuthContext';
import { logout } from '../../context/authContext/AuthAction';

export default function Topbar() {

    const [userOpen, setUserOpen] = useState(false);
    const {user,dispatch} = useContext(AuthContext);

    const toggle = () => {
        setUserOpen(userOpen => !userOpen);
    }

    const userLogout = () => {
        dispatch(logout());
        localStorage.setItem("user",null);
    }

    return (
        <div className="topbar">
            <div className="topbarWrapper">
                <Link to="/" className="link">
                    <div className="topLeft">
                        <span className="logo">관리자</span>
                    </div>
                </Link>
                <div className="topRight">
                    <div className="topbarIconContainer">
                        <NotificationsNone />
                        <span className="topIconBadge">2</span>
                    </div>
                    <div className="topbarIconContainer">
                        <Language />
                        <span className="topIconBadge">2</span>
                    </div>
                    <div className="topbarIconContainer">
                        <Settings />
                    </div>
                    <div className="topbarUserContainer">
                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Unknown_person.jpg/542px-Unknown_person.jpg"
                            alt=""
                            className="topAvatar"
                            onClick={toggle}
                        />
                        {userOpen && <button className="logoutButton" onClick={userLogout}>로그아웃</button>}
                    </div>
                </div>
            </div>
        </div>
    )
}
