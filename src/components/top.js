import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { fetchItems, setInput } from "../actions/index";

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
  if (props.isFetching) {
    return (
      <div className="third">
        <h3>Loading...</h3>
      </div>
    );
  }
  return (
    <div className="third">
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
