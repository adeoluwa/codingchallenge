import request from "supertest";
import app from "../index";

describe("GET /foodtrucks", () => {
  it("should return food trucks near a specified geo-location", async () => {
    const response = await request(app)
      .get("/api/foodtrucks")
      .query({ lat: 37.7749, long: -122.4194 });

    expect(response.status).toBe(200);
    expect(response.body.trucks).toBeDefined();
    expect(Array.isArray(response.body.trucks)).toBe(true);
  });

  it("should return 400 if latitude or longitude are not provided", async () => {
    const response = await request(app).get("/api/foodtrucks");
    expect(response.status).toBe(400);
  });
});
