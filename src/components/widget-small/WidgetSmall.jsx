import './widgetSmall.css'
import { Visibility } from '@material-ui/icons'
import { useEffect, useState } from 'react'
import axios from 'axios'
export default function WidgetSmall() {
    const [newUsers, setNewUsers] = useState([])

    useEffect(() => {
        const getNewUsers = async () => {
            try {
                const res = await axios.get("/users?new=true", {
                    headers: {
                        token: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxM2UxNDQzYmI1ODUwOTU3OTk4NzE1OCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYzMTYzMDc4NCwiZXhwIjoxNjMyMDYyNzg0fQ.iXjZKES3hdUlQlk1rDWD1xbQ4ARurdYVD4PIZ6U7Ex0',
                    },
                });
                setNewUsers(res.data);
            } catch (err) {
                console.log(err)
            }
        };
        getNewUsers();
        
    }, [])
    console.log(newUsers);
    return (
        <div className="widgetSmall">
            <span className="widgetSmallTitle">새로운 유저</span>
            <ul className="widgetSmallList">
                {newUsers.map(user => (
                    <li className="widgetSmallList-Item">
                        <img
                            src={user.profilePic || "https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"}
                            alt=""
                            className="widgetSmall-Img"
                        />
                        <div className="widgetSmall-User">
                            <span className="widgetSmall-Username">{user.username}</span>
                        </div>
                        <button className="widgetSmallButton">
                            <Visibility className="widgetSmallIcon" />
                            더보기
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    )
}
