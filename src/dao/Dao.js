class Dao {
  static db = null;
  
  static async injectDB(client) {
    this.db = client;
  }

  static async getItem(options = {}) {
    const {page = 1, count = 10} = options; 
    const queryText = "SELECT * FROM film LIMIT $1 OFFSET $2";
    const queryParams = [count, (page > 1 ? page : 0 * count) + 1];
    const {rows} = await this.db.query(queryText, queryParams);

    return rows;
  }
}

module.exports = Dao;