import React from "react";
import MainScreen from "../main-screen/main-screen";
import PropTypes from "prop-types";

const App = (props) => {
  const {placesAmount} = props;

  return (
    <MainScreen placesAmount={placesAmount} />
  );
};

App.propTypes = {
  placesAmount: PropTypes.number.isRequired,
};

export default App;
