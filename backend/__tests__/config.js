// npm packages
const request = require("supertest");

// app imports
const app = require("../../app");
const db = require("../../db");

// Database DDL (for tests)
const DB_TABLES = {
  posts: `
  CREATE TABLE posts (
    id SERIAL PRIMARY KEY, 
    title TEXT NOT NULL, 
    description TEXT NOT NULL,
    body TEXT, 
    votes INT NOT NULL DEFAULT 0
  )`,
  comments: `
  CREATE TABLE comments (
    id SERIAL PRIMARY KEY, 
    text TEXT NOT NULL, 
    post_id INT NOT NULL REFERENCES posts ON DELETE CASCADE
  )`
};

// global auth variable to store things for all the tests
const TEST_DATA = {};

async function beforeAllHook() {
  // try {
  //   await db.query(DB_TABLES["posts"]);
  //   await db.query(DB_TABLES["comments"]);
  // } catch (error) {
  //   console.error(error);
  // }
}

/**
 * Hooks to insert posts and comments
 * @param {Object} TEST_DATA - build the TEST_DATA object
 */
async function beforeEachHook(TEST_DATA) {
  try {
    const newPost = await db.query(
      `INSERT INTO posts (title, description, body) VALUES 
      ('Test Post', 'Test description', 'Test body') RETURNING *`
    );
    TEST_DATA.post1 = result.rows[0];

    const newComment = await db.query(
      "INSERT INTO comments (text, post_id) VALUES ('Test comment', $1) RETURNING *",
      [TEST_DATA.post1.id]
    );
    TEST_DATA.commentId = newComment.rows[0].id;

  } catch (error) {
    console.error(error);
  }
}

async function afterEachHook() {
  try {
    await db.query("DELETE FROM posts");
    await db.query("DELETE FROM comments");
  } catch (error) {
    console.error(error);
  }
}

async function afterAllHook() {
  try {
    // await db.query("DROP TABLE IF EXISTS posts");
    // await db.query("DROP TABLE IF EXISTS comments");
    await db.end();
  } catch (err) {
    console.error(err);
  }
}

module.exports = {
  afterAllHook,
  afterEachHook,
  TEST_DATA,
  beforeAllHook,
  beforeEachHook,
};
