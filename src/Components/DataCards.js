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


  renderBlondish = () => {
    if(this.props.bigText!== "2000 $&blondish")
  {

    return <div className="dataCardBigText">{this.props.bigText}</div>
  }
  else
  {
    var x = this.props.bigText.split("&")

    return <div
    style={{display:"flex"}}
    >
      <div className="dataCardBigText">{x[0]}</div>
      <div className="dataCardBigText" style={{color:"#57c49a"}}>{x[1]}</div>
    </div>
  }}
  


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
        <div >{this.renderBlondish()}</div>
        <div className="dataCardDesc">{desc}</div>

        <div className="renderedListContainer">{this.renderPoints()}</div>

        <div className="dataCardButton">Buy</div>
      </div>
    )
  }
}

export default DataCards
