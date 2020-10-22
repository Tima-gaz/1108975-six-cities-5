import PropTypes from "prop-types";

export default {
  offer: PropTypes.shape({
    price: PropTypes.number.isRequired,
    rating: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    isPremium: PropTypes.bool.isRequired,
    image: PropTypes.string.isRequired,
  })
};
