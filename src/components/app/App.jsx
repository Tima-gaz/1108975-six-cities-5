import React from "react";
import MainScreen from "../main-screen/main-screen";
import {Route, Switch, BrowserRouter} from "react-router-dom";
import PropTypes from "prop-types";
import AuthScreen from "../auth-screen/auth-screen";
import RoomScreen from "../room-screen/room-screen";
import Favorites from "../favorites/favorites";

const App = (props) => {
  const {placesAmount, offers} = props;

  return (
    <BrowserRouter>
      <Switch>
        <Route exact
          path="/"
          render={({history}) => (
            <MainScreen
              placesAmount={placesAmount}
              offers={offers}
              onUserClick={(evt) => {
                evt.preventDefault();
                history.push(`/offer/:id`);
              }}
            />
          )}
        />
        <Route exact path="/login">
          <AuthScreen />
        </Route>
        <Route exact path="/offer/:id">
          <RoomScreen offers={offers}/>
        </Route>
        <Route exact path="/favorites">
          <Favorites offers={offers}/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  placesAmount: PropTypes.number.isRequired,
  offers: PropTypes.array.isRequired,
};

export default App;
