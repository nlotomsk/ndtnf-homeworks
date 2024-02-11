const charactersStore = require('../store/character');

const values = [
  {
    name: "Имя персонажа",
    description: "описание...",
    modified: "2020-07-21",
    thumbnail: "http://...",
    comics: [
      { 
        name: "Spider-Man: 101 Ways to End the Clone Saga (1997) #1" },
    ]
  },
];

module.exports = async () => {
  if ((await charactersStore.getAll())) {
    return;
  }
  values.forEach(item => charactersStore.add(item));
};