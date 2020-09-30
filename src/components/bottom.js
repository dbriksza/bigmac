import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { fetchItems, setInput } from "../actions/index";
import { codes } from "../assets/countryCodes.js";

//pretty much explained in top.js
const Bottom = (props) => {
  if (props.isFetching) {
    return (
      <div className="third">
        <h3>Loading...</h3>
      </div>
    );
  }
  if (props.input == 0) {
    return (
      <div className="third">
        <h3>Please enter a value above</h3>
        {props.info.randCountry && (
          <div>
            <img
              src={`https://www.countryflags.io/${
                codes[props.info.randCountry.replace(/\s/g, "_")]
              }/flat/64.png`}
            />
            <p>Random Country: {props.info.randCountry}</p>
          </div>
        )}
      </div>
    );
  }
  if (props.info.randCountry) {
    return (
      <div className="third">
        {/* {console.log(props.info.randCountryData)} */}
        {props.info.randCountryData && (
          <div>
            <img
              src={`https://www.countryflags.io/${
                codes[props.info.randCountry.replace(/\s/g, "_")]
              }/flat/64.png`}
            />
            <p>
              You could buy{" "}
              {Math.floor(
                (props.input / props.info.data.Local_price) *
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
  }
  return <div></div>;
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
