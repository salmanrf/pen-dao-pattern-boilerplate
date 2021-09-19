const Dao = require("../dao/Dao");
const {wrapTryCatch} = require("../utils/promise_utils");

class Controller {
  static async apiGetItems(req, res, next) {
    const [items, errors] = await wrapTryCatch(Dao.getItem());

    if(errors) {
      return res.status(500).json({success: false, errors});
    }
    
    return res.status(200).json({success: true, items});
  }
}

module.exports = Controller;