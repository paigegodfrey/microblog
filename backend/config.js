/** Shared config for application; can be req'd many places. */


require("dotenv").config();

const SECRET = process.env.SECRET_KEY || 'test';

const PORT = +process.env.PORT || 5000;

// database is:
//
// - on Heroku, get from env var DATABASE_URL
// - in testing, 'microblog-test'
// - else: 'microblog'

let DB_URI;

if (process.env.NODE_ENV === "test") {
  DB_URI = "microblog-test";
} else {
  DB_URI  = process.env.DATABASE_URL || 'microblog';
}

console.log("Using database", DB_URI);

module.exports = {
  SECRET,
  PORT,
  DB_URI,
};
