const Dao = require("../dao/Dao");

class Controller {
  static async apiGetItems(req, res, next) {
    const items = await Dao.getItem();

    return res.status(200).json({success: true, items});
  }
}

module.exports = Controller;