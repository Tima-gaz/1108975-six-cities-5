import React, {PureComponent} from "react";
import PlaceCardPropTypes from "../../place-card-proptypes";
import PropTypes from "prop-types";

class PlaceCard extends PureComponent {
  constructor(props) {
    super(props);

  }

  render() {
    const {offer, onHover, onBlur, onUserClick} = this.props;
    const {rating, image, price, isPremium, name, type} = offer;
    const ratingLine = rating * 20;
    const isPrem = {isPremium};

    return (
      <article className="cities__place-card place-card"
        onMouseEnter={onHover}
        onMouseLeave={onBlur}
        onClick={onUserClick}
      >
        {isPrem ?
          <div className="place-card__mark">
            <span>Premium</span>
          </div> : null
        }
        <div className="cities__image-wrapper place-card__image-wrapper">
          <a href="#">
            <img className="place-card__image" src={image} width="260" height="200" alt="Place image"/>
          </a>
        </div>
        <div className="place-card__info">
          <div className="place-card__price-wrapper">
            <div className="place-card__price">
              <b className="place-card__price-value">&euro;{price}</b>
              <span className="place-card__price-text">&#47;&nbsp;night</span>
            </div>
            <button className="place-card__bookmark-button button" type="button">
              <svg className="place-card__bookmark-icon" width="18" height="19">
                <use xlinkHref="#icon-bookmark"></use>
              </svg>
              <span className="visually-hidden">To bookmarks</span>
            </button>
          </div>
          <div className="place-card__rating rating">
            <div className="place-card__stars rating__stars">
              <span style={{width: ratingLine + `%`}}></span>
              <span className="visually-hidden">Rating</span>
            </div>
          </div>
          <h2 className="place-card__name">
            <a href="#">{name}</a>
          </h2>
          <p className="place-card__type">{type}</p>
        </div>
      </article>
    );
  }
}

PlaceCard.propTypes = {
  onHover: PropTypes.func.isRequired,
  onBlur: PropTypes.func.isRequired,
  offer: PlaceCardPropTypes.offer,
  onUserClick: PropTypes.func.isRequired,
};

export default PlaceCard;
