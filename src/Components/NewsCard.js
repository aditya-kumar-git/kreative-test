import React, { Component } from 'react'

export class NewsCard extends Component {
    render() {
        var {name,title,amount,infoText}= this.props

        return (
            <div
            className="newsCard"
            >
                <div className="newsCardUpperBlock" >
                <div className="newsTitle">{title}</div>
                <div className="newsAmount">{amount}</div>
                <div className="newsName">{name}</div>
                </div>



                <div className="newsCardLowerBlock" >
                <div className="newsInfo">{infoText}</div>
                <div
                className="newsButtonContainer"
                >
                    <div className="newsButton newsBuyButton">Buy</div>
                    <div className="newsButton newsInfoButton">More Info</div>
                </div>
                </div>



            </div>
        )
    }
}

export default NewsCard
