import React, { useState } from "react";
// import InputNumber from "elements/Form/InputNumber";
// import Breadcrumb from "elements/Breadcrumb";
// import InputDate from "elements/Form/InputDate";
// import Dropdown from "elements/Dropdown";
import Status from "parts/Status";
import Tombol from "parts/Tombol";
import Effect from "parts/Effect";
export default function Example() {
  // const [getNavValue, setNavValue] = useState("");
  // const clicked = () => {
  //   setNavValue("Haloo");
  // };
  return (
    <div className="container">
      <div
        className="row align-items-center justify-content-center"
        style={{ height: "100vh" }}
      >
        <div className="col-auto">
          {/*<Status navValue={getNavValue} />
          <Tombol clicked={clicked} />**/}
          <Effect />
        </div>
      </div>
    </div>
  );
}
