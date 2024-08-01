const { Pool } = require("pg");
const { host, database, password } = require("pg/lib/defaults");

module.exports = new Pool({
  host: "localhost",
  user: "postgres",
  database: "Test",
  password: "Mniaki@22yo",
  port: 5432,
});
