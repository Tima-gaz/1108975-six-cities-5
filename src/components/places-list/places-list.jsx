import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import PlaceCard from "../place-card/place-card";

class PlacesList extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      focusedCard: {}
    };

    this.onHover = this.onHover.bind(this);
  }

  onHover(offer) {
    return () => {
      if (offer) {
        this.setState({focusedCard: offer});
      }
    };
  }

  onBlur() {
    return () => {
      this.setState({focusedCard: null});
    };
  }

  render() {
    const {offers} = this.props;

    return (
      <div className="cities__places-list places__list tabs__content">
        {offers.map((offer) => (
          <PlaceCard
            offer={offer}
            onHover={this.onHover(offer)}
            onBlur={this.onBlur()}
            onUserClick={this.props.onUserClick}
            key={offer.name}
          />
        ))}
      </div>
    );
  }
}

PlacesList.propTypes = {
  offers: PropTypes.array.isRequired,
  onUserClick: PropTypes.func.isRequired,
};

export default PlacesList;
