import request from "supertest";
import mongoose from "mongoose";
import { MongoMemoryServer } from "mongodb-memory-server";
import app from "../src/app.js";
import User from "../src/models/User.js";

let mongo;

beforeAll(async () => {
  process.env.JWT_SECRET = "test-secret";
  mongo = await MongoMemoryServer.create();
  await mongoose.connect(mongo.getUri());
});

afterEach(async () => {
  await User.deleteMany({});
});

afterAll(async () => {
  await mongoose.disconnect();
  await mongo.stop();
});

test("GET /api/health returns healthy response", async () => {
  const response = await request(app).get("/api/health");

  expect(response.statusCode).toBe(200);
  expect(response.body.status).toBe("ok");
});

test("POST /api/auth/register creates a user", async () => {
  const response = await request(app).post("/api/auth/register").send({
    name: "Test User",
    email: "test@example.com",
    password: "password123"
  });

  expect(response.statusCode).toBe(201);
  expect(response.body.token).toBeDefined();
  expect(response.body.user.email).toBe("test@example.com");
});

test("protected task route rejects missing authentication", async () => {
  const response = await request(app).get("/api/tasks");

  expect(response.statusCode).toBe(401);
});
