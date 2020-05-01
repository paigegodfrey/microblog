// npm packages
const request = require("supertest");

// app imports
const app = require("../app");

const {
  TEST_DATA,
  beforeEachHook,
  afterEachHook,
  afterAllHook
} = require("./config");


beforeEach(async function () {
  await beforeEachHook(TEST_DATA);
});


//


afterEach(async function () {
  await afterEachHook();
});


afterAll(async function () {
  await afterAllHook();
});