import React, { useEffect, useMemo, useState } from 'react'
import Chart from '../../components/chart/Chart'
import FeaturedInfo from '../../components/featuredInfo/FeaturedInfo'
import "./home.css";
import WidgetSmall from '../../components/widget-small/WidgetSmall';
import WidgetLarge from '../../components/widget-large/WidgetLarge';
import axios from "axios";

export default function Home() {
    const MONTHS = useMemo(() => [
        '1월',
        '2월',
        '3월',
        '4월',
        '5월',
        '6월',
        '7월',
        '8월',
        '9월',
        '10월',
        '11월',
        '12월',
    ],[]);

    const [userStats, setUserStats] = useState([])

    useEffect(() => {
        const getStats = async () => {
            try {
                const res = await axios.get('/users/stats', {
                    headers: {
                        token: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxM2UxNDQzYmI1ODUwOTU3OTk4NzE1OCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYzMTYzMDc4NCwiZXhwIjoxNjMyMDYyNzg0fQ.iXjZKES3hdUlQlk1rDWD1xbQ4ARurdYVD4PIZ6U7Ex0',
                    },
                })
                const statsList = res.data.sort(function(a,b) {
                    return a._id - b._id;
                })
                statsList.map(item => setUserStats(prev => [...prev,{name:MONTHS[item._id-1], "새로운 유저": item.total}]))
            } catch (err) {
                console.log(err)
            }
        }
        getStats();
    },[MONTHS])
    console.log(userStats);
    return (
        <div className="home">
            <FeaturedInfo />
            <Chart title={`사용자 분석`} data={userStats} dataKey={`새로운 유저`} grid/>
            <div className="homeWidgets">
                <WidgetSmall />
                <WidgetLarge />
            </div>
        </div>
    )
}
