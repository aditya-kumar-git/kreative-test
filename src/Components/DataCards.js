import React, { Component } from "react"

export class DataCards extends Component {
  renderPoints = () => {
    return this.props.points.map((data, index) => {
      return (
        <div className="renderedList" key={data + index}>
          {"+ " + data}
        </div>
      )
    })
  }
  render() {
    var { title, desc,wideImage } = this.props
    return (
      <div className="dataCard">
        <div id="dataCardTitle">{title}</div>
        <div id="dataCardImage" style={{backgroundImage:`url("${wideImage}")`,backgroundSize:"cover",backgroundPosition:"center"}} ></div>
        <div id="dataCardBigText">2000 $blondish</div>
        <div id="dataCardDesc">{desc}</div>

        <div id="renderedListContainer">{this.renderPoints()}</div>

        <div id="dataCardButton" >
          Buy
        </div>
      </div>
    )
  }
}

export default DataCards
