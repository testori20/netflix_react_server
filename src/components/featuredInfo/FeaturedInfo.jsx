import "./featuredInfo.css"
import {ArrowDownward, ArrowUpward} from "@material-ui/icons"

export default function FeaturedInfo() {
    return (
        <div className="featured">
            <div className="featuredItem">
                <div className="featuredTitle">수익</div>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">2,500</span>
                    <span className="featuredMoneyRate">
                        -11.4 <ArrowDownward className="featuredIcon negative"/>
                    </span>
                </div>
                <span className="featuredSub">지난달 대비</span>
            </div>
            <div className="featuredItem">
                <div className="featuredTitle">판매</div>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">4,450</span>
                    <span className="featuredMoneyRate">
                        -1.4 <ArrowDownward className="featuredIcon negative"/>
                    </span>
                </div>
                <span className="featuredSub">지난달 대비</span>
            </div>
            <div className="featuredItem">
                <div className="featuredTitle">지출</div>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">2,200</span>
                    <span className="featuredMoneyRate">
                        +2.4 <ArrowUpward className="featuredIcon"/>
                    </span>
                </div>
                <span className="featuredSub">지난달 대비</span>
            </div>
        </div>
    )
}
