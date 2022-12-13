import React, { Component } from "react";
// import InputNumber from "elements/Form/InputNumber";
// import Breadcrumb from "elements/Breadcrumb";
// import InputDate from "elements/Form/InputDate";
import Dropdown from "elements/Dropdown";
export default class Example extends Component {
  render() {
    // const breadcrumb = [
    //   { pageTitle: "Home", pageHref: "" },
    //   { pageTitle: "Mountain Details", pageHref: "" },
    // ];
    return (
      <div className="container">
        <div
          className="row align-items-center justify-content-center"
          style={{ height: "100vh" }}
        >
          <div className="col-auto">
            <Dropdown />
          </div>
        </div>
      </div>
    );
  }
}
