const ComicModel = require('../scheme/comicsScheme');

class ComicsStore {
  async create(data) {
    let person = await this.findByName(data.name);
    if (person) {
      return person;
    }
    person = new ComicModel(data);
    await person.save();
    return person;
  }

  async findByName(name) {
    return ComicModel.findOne({ name }).select();
  }
};

module.exports = new ComicsStore();