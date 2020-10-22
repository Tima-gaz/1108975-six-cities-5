import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app";
import offers from "./mocks/offers";

const Settings = {
  PLACES_AMOUNT: 436
};

ReactDOM.render(
    <App
      placesAmount={Settings.PLACES_AMOUNT}
      offers={offers}
    />,
    document.querySelector(`#root`)
);
