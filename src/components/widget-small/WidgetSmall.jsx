import './widgetSmall.css'
import { Visibility } from '@material-ui/icons'
export default function WidgetSmall() {
    return (
        <div className="widgetSmall">
            <span className="widgetSmallTitle">새로운 유저</span>
            <ul className="widgetSmallList">
                <li className="widgetSmallList-Item">
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Unknown_person.jpg/542px-Unknown_person.jpg"
                        alt=""
                        className="widgetSmall-Img"
                    />
                    <div className="widgetSmall-User">
                        <span className="widgetSmall-Username">kim</span>
                        <span className="widgetSmall-Title">
                            software developer
                        </span>
                    </div>
                    <button className="widgetSmallButton">
                        <Visibility className="widgetSmallIcon" />
                        display
                    </button>
                </li>
                <li className="widgetSmallList-Item">
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Unknown_person.jpg/542px-Unknown_person.jpg"
                        alt=""
                        className="widgetSmall-Img"
                    />
                    <div className="widgetSmall-User">
                        <span className="widgetSmall-Username">kim</span>
                        <span className="widgetSmall-Job">
                            software developer
                        </span>
                    </div>
                    <button className="widgetSmallButton">
                        <Visibility className="widgetSmallIcon" />
                        display
                    </button>
                </li>
                <li className="widgetSmallList-Item">
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Unknown_person.jpg/542px-Unknown_person.jpg"
                        alt=""
                        className="widgetSmall-Img"
                    />
                    <div className="widgetSmall-User">
                        <span className="widgetSmall-Username">kim</span>
                        <span className="widgetSmall-Job">
                            software developer
                        </span>
                    </div>
                    <button className="widgetSmallButton">
                        <Visibility className="widgetSmallIcon" />
                        display
                    </button>
                </li>
                <li className="widgetSmallList-Item">
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Unknown_person.jpg/542px-Unknown_person.jpg"
                        alt=""
                        className="widgetSmall-Img"
                    />
                    <div className="widgetSmall-User">
                        <span className="widgetSmall-Username">kim</span>
                        <span className="widgetSmall-Job">
                            software developer
                        </span>
                    </div>
                    <button className="widgetSmallButton">
                        <Visibility className="widgetSmallIcon" />
                        display
                    </button>
                </li>
                <li className="widgetSmallList-Item">
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Unknown_person.jpg/542px-Unknown_person.jpg"
                        alt=""
                        className="widgetSmall-Img"
                    />
                    <div className="widgetSmall-User">
                        <span className="widgetSmall-Username">kim</span>
                        <span className="widgetSmall-Job">
                            software developer
                        </span>
                    </div>
                    <button className="widgetSmallButton">
                        <Visibility className="widgetSmallIcon" />
                        display
                    </button>
                </li>
            </ul>
        </div>
    )
}
