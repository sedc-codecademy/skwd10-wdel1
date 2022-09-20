const fsPromises = require("fs/promises");

class DataService {
  //1. Read json file
  static async readJSONFile(path) {
    const data = await fsPromises.readFile(path, { encoding: "utf-8" });

    return JSON.parse(data);
  }
  //2. Save json file
  static async writeJSONFile(path, data) {
    return fsPromises.writeFile(path, JSON.stringify(data, 0, 2));
  }
}

//Used for exporting code in nodejs
module.exports = DataService;
