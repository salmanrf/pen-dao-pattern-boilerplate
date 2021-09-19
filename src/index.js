const {createServer} = require("http");
const {Client} = require("pg");
const app = require("./app");
const server = createServer(app);
const Dao = require("./dao/Dao");

require("dotenv").config();

const port = process.env.PORT || 8000;

const client = new Client({
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  database: process.env.DB_NAME
});

(async () => {
  try {
    await client.connect();

    Dao.injectDB(client);

    server.listen(port, () => {
      console.log(`server is listening on ${port}`);
    });
  } catch(err) {
    console.error(err.message || err.stack);
    client.end();
    process.exit(1);
  }
})();

