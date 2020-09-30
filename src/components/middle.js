import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { fetchItems, setInput } from "../actions/index";

const Middle = (props) => {
  if (props.input == 0) {
    return (
      <div className="third">
        <h3>Please enter a value above</h3>
        {props.info.data && (
          <p>
            Your Dollar Purchasing Parity (PPP) is {props.info.data.Dollar_PPP}
          </p>
        )}
      </div>
    );
  }
  return (
    <div className="third">
      {console.log(props.info.data)}
      {props.info.data && (
        <div>
          <p>
            You could buy{" "}
            {Math.floor(props.input / props.info.data.Local_price)} in your
            country
          </p>
          <p>
            Your Dollar Purchasing Parity (PPP) is {props.info.data.Dollar_PPP}
          </p>
        </div>
      )}
    </div>
  );
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
export default connect(mapStateToProps, mapDispatchToProps)(Middle);
