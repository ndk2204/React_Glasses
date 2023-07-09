import React, { Component } from "react";
import dataGlasses from "./dataGlasses.json";

export default class ListGlasses extends Component {
  state = {
    srcImg: "",
  };

  changeSrcImg = (src) => {
    return () => {
      this.setState({ srcImg: src });
    };
  };
  render() {
    return (
      <>
        <div className="container person p-0" style={{ width: "12rem" }}>
          <img src="/glassesImage/model.jpg" className="card-img-top" />
        </div>

        <div className="glasses" style={{ width: "6.5rem" }}>
          <img src={this.state.srcImg} className="card-img-top" />
        </div>
        <div className="content">
          <div className="box-glasses">
            <div className="box-img px-4 pt-5 pb-4 row">
              {dataGlasses.map((item) => {
                return (
                  <div className="col-2 py-3" key={item.id}>
                    <img
                      onClick={this.changeSrcImg(item.url)}
                      className="img-bg p-2"
                      style={{ width: "9rem", height: "4rem" }}
                      src={item.url}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </>
    );
  }
}
