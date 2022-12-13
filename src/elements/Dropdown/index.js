import React, { Component } from "react";

export default class Dropdown extends Component {
  render() {
    return (
      <div style={{ display: "block", width: 700, paddingLeft: 30 }}>
        <select name="track" id="track">
          <option value="ranupane">Ranupane</option>
          <option value="bromo">Bromo</option>
          <option value="probolinggo">Probolinggo</option>
          <option value="malang">Malang</option>
        </select>
      </div>
    );
  }
}
