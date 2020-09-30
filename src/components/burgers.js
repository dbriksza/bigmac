import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { fetchItems, setInput } from "../actions/index";

const Burgers = (props) => {
  if (props.input > 0) {
    if (document.getElementsByTagName("SPAN").length > 0) {
      Array.from(document.getElementsByTagName("SPAN")).forEach((n) =>
        n.remove()
      );
    }
    for (
      let i = 0;
      i < Math.min(50, props.input / props.info.data.Local_price);
      i++
    ) {
      document
        .getElementById("borgar")
        .appendChild(document.createElement("SPAN"));
    }
    return <div id="borgar" className="fallingBurger"></div>;
  }
  return <div id="borgar" className="fallingBurger"></div>;
};

const mapStateToProps = (state) => {
  return {
    info: state.info,
    input: state.input,
    isFetching: state.isFetching,
    error: state.error,
  };
};
const mapDispatchToProps = {
  fetchItems,
  setInput,
};
export default connect(mapStateToProps, mapDispatchToProps)(Burgers);
