import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { fetchItems, setInput } from "../actions/index";
import { codes } from "../assets/countryCodes.js";

const Top = (props) => {
  const [inputField, setInputField] = useState(0);
  useEffect(() => {
    props.fetchItems();
  }, []);
  const handleInput = (e) => {
    setInputField(e.target.value);
    // props.setInput(inputField);
  };
  const handleSubmit = (e) => {
    // e.preventDefault();
    props.setInput(inputField);
  };
  //loading screen
  if (props.isFetching) {
    return (
      <div className="third">
        <h3>Loading...</h3>
      </div>
    );
  }
  //makes sure country is in store to prevent error
  if (props.info.country) {
    return (
      <div className="third">
        {/* added some flags of the country using a free API and a table to relate country names to country codes */}
        <img
          src={`https://www.countryflags.io/${
            codes[props.info.country.replace(/\s/g, "_")]
          }/flat/64.png`}
        />
        <p>You are in: {props.info.country}</p>
        <form onSubmit={handleSubmit}>
          <p>Please enter an amount of money in your local currency: </p>
          <input
            className="input"
            type="number"
            name="input"
            value={inputField}
            onChange={handleInput}
          />
        </form>
        <input type="submit" value="Submit" onClick={() => handleSubmit()} />
      </div>
    );
  }
  //default return necesary
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
export default connect(mapStateToProps, mapDispatchToProps)(Top);
