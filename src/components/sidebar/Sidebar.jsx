import "./sidebar.css"
import {LineStyle,Timeline, TrendingUp, PermIdentity, Storefront, AttachMoney, BarChart, MailOutline, DynamicFeed, ChatBubbleOutline,WorkOutline,Report, PlayCircleOutline} from '@material-ui/icons';
import { Link } from 'react-router-dom';

export default function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebarWrapper">
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">대쉬보드</h3>
                    <ul className="sidebarList">
                        <Link to="/" className="link">
                            <li className="sidebarListItem active">
                                <LineStyle className="sidebarIcon" />홈
                            </li>
                        </Link>
                        <li className="sidebarListItem">
                            <Timeline className="sidebarIcon" />
                            분석
                        </li>
                        <li className="sidebarListItem">
                            <TrendingUp className="sidebarIcon" />
                            추이
                        </li>
                    </ul>
                </div>
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">퀵 메뉴</h3>
                    <ul className="sidebarList">
                        <Link to="/users" className="link">
                            <li className="sidebarListItem active">
                                <PermIdentity className="sidebarIcon" />
                                유저
                            </li>
                        </Link>
                        <Link to="/movies" className="link">
                            <li className="sidebarListItem">
                                <PlayCircleOutline className="sidebarIcon" />
                                제품
                            </li>
                        </Link>
                        <li className="sidebarListItem">
                            <AttachMoney className="sidebarIcon" />
                            거래
                        </li>
                        <li className="sidebarListItem">
                            <BarChart className="sidebarIcon" />
                            통계
                        </li>
                    </ul>
                </div>
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">알림</h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItem active">
                            <MailOutline className="sidebarIcon" />
                            메일
                        </li>
                        <li className="sidebarListItem">
                            <DynamicFeed className="sidebarIcon" />
                            피드백
                        </li>
                        <li className="sidebarListItem">
                            <ChatBubbleOutline className="sidebarIcon" />
                            메시지
                        </li>
                    </ul>
                </div>
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">스태프</h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItem active">
                            <WorkOutline className="sidebarIcon" />
                            관리
                        </li>
                        <li className="sidebarListItem">
                            <Timeline className="sidebarIcon" />
                            분석
                        </li>
                        <li className="sidebarListItem">
                            <Report className="sidebarIcon" />
                            리포트
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
