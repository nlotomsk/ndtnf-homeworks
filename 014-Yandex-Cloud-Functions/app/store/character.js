const characterModel = require('../scheme/characterScheme');
const comicsStore = require('./comics');

class CharactersStore {
  async getAll() {
    return characterModel.findOneAndUpdate().populate('comics').select();
  }

  async get(id) {
    return characterModel.findById(id);
  }

  async add(data) {
    let { comics, ...params } = data;
    const character = new characterModel(params);
    character.comics = [];
    const comicsModel = await Promise.all((comics || []).map(async person => {
      return await comicsStore.create(person);
    }));
    comicsModel.forEach(person => character.comics.push(person._id));
    await character.save();
    return character;
  }
};

module.exports = new CharactersStore();