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
    var { title, desc, wideImage } = this.props
    return (
      <div className="dataCard">
        <div className="dataCardTitle">{title}</div>
        <div
          className="dataCardImage"
          style={{
            backgroundImage: `url("${wideImage}")`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>
        <div className="dataCardBigText">2000 $blondish</div>
        <div className="dataCardDesc">{desc}</div>

        <div className="renderedListContainer">{this.renderPoints()}</div>

        <div className="dataCardButton">Buy</div>
      </div>
    )
  }
}

export default DataCards
