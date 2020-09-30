import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { fetchItems, setInput } from "../actions/index";

const Burgers = (props) => {
  //check for values to prevent error
  if (props.input > 0) {
    //remove existing burgers so we don't just keep adding them
    if (document.getElementsByTagName("SPAN").length > 0) {
      Array.from(document.getElementsByTagName("SPAN")).forEach((n) =>
        n.remove()
      );
    }
    //instantiate burgers based on how many the user can afford
    for (
      let i = 0;
      //max number of burgers rendered on screen limited to 50 (performance losses after 100, crashes after 2000(for me at least))
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
