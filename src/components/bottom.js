import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { fetchItems, setInput } from "../actions/index";

const Bottom = (props) => {
  if (props.input == 0) {
    return (
      <div className="third">
        <h3>Please enter a value above</h3>
        {props.info.randCountry && (
          <p>Random Country: {props.info.randCountry}</p>
        )}
      </div>
    );
  }
  return (
    <div className="third">
      {console.log(props.info.randCountryData)}
      {props.info.randCountryData && (
        <div>
          <p>
            You could buy{" "}
            {Math.floor(
              (props.input / props.info.randCountryData.Local_price) *
                (props.info.data.Dollar_price /
                  props.info.randCountryData.Dollar_price)
            )}{" "}
            Big Macs in {props.info.randCountry} with {props.input}!
          </p>
          <p>
            Your {props.input} is worth about{" "}
            {(
              props.input *
              (props.info.data.Dollar_price /
                props.info.randCountryData.Dollar_price)
            ).toFixed(2)}{" "}
            in {props.info.randCountry}
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
export default connect(mapStateToProps, mapDispatchToProps)(Bottom);
