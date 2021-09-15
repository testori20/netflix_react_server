import "./widgetLarge.css"
export default function WidgetLarge() {
    const Button = ({type}) => {
        return <button className={"widgetLargeButton "+type}>{type}</button>
    }
    return (
        <div className="widgetLarge">
            <div className="widgetLargeTitle">최근 거래</div>
            <table className="widgetLargeTable">
                <tbody>
                    <tr className="widgetLargeTr">
                        <th className="widgetLargeTh">고객</th>
                        <th className="widgetLargeTh">날짜</th>
                        <th className="widgetLargeTh">수량</th>
                        <th className="widgetLargeTh">상태</th>
                    </tr>
                    <tr className="widgetLargeTr">
                        <td className="widgetLargeUser">
                            <img
                                src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Unknown_person.jpg/542px-Unknown_person.jpg"
                                alt=""
                                className="widgetLargeImg"
                            />
                            <span className="widgetLargeName">kim</span>
                        </td>
                        <td className="widgetLargeDate">2021.1.2</td>
                        <td className="widgetLargeAmount">2,500</td>
                        <td className="widgetLargeStatus">
                            <Button type="Approved" />
                        </td>
                    </tr>
                    <tr className="widgetLargeTr">
                        <td className="widgetLargeUser">
                            <img
                                src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Unknown_person.jpg/542px-Unknown_person.jpg"
                                alt=""
                                className="widgetLargeImg"
                            />
                            <span className="widgetLargeName">kim</span>
                        </td>
                        <td className="widgetLargeDate">2021.1.2</td>
                        <td className="widgetLargeAmount">2,500</td>
                        <td className="widgetLargeStatus">
                            <Button type="Declined" />
                        </td>
                    </tr>
                    <tr className="widgetLargeTr">
                        <td className="widgetLargeUser">
                            <img
                                src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Unknown_person.jpg/542px-Unknown_person.jpg"
                                alt=""
                                className="widgetLargeImg"
                            />
                            <span className="widgetLargeName">kim</span>
                        </td>
                        <td className="widgetLargeDate">2021.1.2</td>
                        <td className="widgetLargeAmount">2,500</td>
                        <td className="widgetLargeStatus">
                            <Button type="Pending" />
                        </td>
                    </tr>
                    <tr className="widgetLargeTr">
                        <td className="widgetLargeUser">
                            <img
                                src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Unknown_person.jpg/542px-Unknown_person.jpg"
                                alt=""
                                className="widgetLargeImg"
                            />
                            <span className="widgetLargeName">kim</span>
                        </td>
                        <td className="widgetLargeDate">2021.1.2</td>
                        <td className="widgetLargeAmount">2,500</td>
                        <td className="widgetLargeStatus">
                            <Button type="Approved" />
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
