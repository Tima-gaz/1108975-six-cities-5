import PropTypes from "prop-types";

export default {
  offer: PropTypes.shape({
    price: PropTypes.number.isRequired,
    rating: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    isPremium: PropTypes.bool.isRequired,
    image: PropTypes.string.isRequired,
    roomsAmount: PropTypes.number.isRequired,
    quests: PropTypes.number.isRequired,
    stuff: PropTypes.arrayOf(PropTypes.string.isRequired),
    hostName: PropTypes.string.isRequired,
    hostDescription: PropTypes.string.isRequired,
    hostAvatar: PropTypes.string.isRequired,
  })
};
