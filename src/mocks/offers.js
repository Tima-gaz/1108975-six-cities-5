function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const STUFF = [`Wi-Fi`, `Heating`, `Kitchen`, `Fridge`, `Washing machine`, `Coffee machine`, `Towels`, `Cabel TV`, `Baby seat`, `Dishwasher`];

export default [
  {
    price: getRandomInt(70, 490),
    isInBookmark: true,
    rating: getRandomInt(1, 50) / 10,
    name: `Canal View Prinsengracht`,
    type: `Apartment`,
    isPremium: true,
    image: `img/apartment-02.jpg`,
    roomsAmount: getRandomInt(1, 3),
    guests: getRandomInt(2, 4),
    stuff: STUFF,
    hostName: `Angelina`,
    hostAvatar: `img/avatar-angelina.jpg`,
    hostDescription: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,

  }, {
    price: getRandomInt(70, 490),
    isInBookmark: true,
    rating: getRandomInt(1, 5),
    name: `Nice, cozy, warm big bed apartment`,
    type: `Apartment`,
    isPremium: true,
    image: `img/room.jpg`,
    roomsAmount: getRandomInt(1, 3),
    guests: getRandomInt(2, 4),
    stuff: STUFF,
    hostName: `Angelina`,
    hostAvatar: `img/avatar-angelina.jpg`,
    hostDescription: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
  }, {
    price: getRandomInt(70, 490),
    isInBookmark: false,
    rating: getRandomInt(1, 5),
    name: `Wood and stone place`,
    type: `Private room`,
    isPremium: false,
    image: `img/apartment-01.jpg`,
    roomsAmount: getRandomInt(1, 3),
    guests: getRandomInt(2, 4),
    stuff: STUFF,
    hostName: `Angelina`,
    hostAvatar: `img/avatar-angelina.jpg`,
    hostDescription: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
  }, {
    price: getRandomInt(70, 490),
    isInBookmark: true,
    rating: getRandomInt(1, 5),
    name: `Beautiful & luxurious apartment at great location`,
    type: `Private room`,
    isPremium: false,
    image: `img/apartment-03.jpg`,
    roomsAmount: getRandomInt(1, 3),
    guests: getRandomInt(2, 4),
    stuff: STUFF,
    hostName: `Angelina`,
    hostAvatar: `img/avatar-angelina.jpg`,
    hostDescription: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
  }
];
