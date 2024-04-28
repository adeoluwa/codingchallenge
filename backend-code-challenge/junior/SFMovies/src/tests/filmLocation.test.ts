import request from "supertest";
import app from "../index";
import axios from "axios";

jest.mock("axios");

describe("GET /searchMovies", () => {
  it("should return movie filming locations for the given title", async () => {
    const mockedResponse = [
      {
        title: "Ant-Man",
        release_year: "2015",
        locations: "Grant between Bush and Broadway",
        production_company: "PYM Particles Productions, LLC",
        distributor: "Walt Disney Studios Motion Pictures",
        writer: "Gabriel Ferrari",
        actor_1: "Michael Douglas",
        actor_2: "Paul Rudd",
        actor_3: "Evangeline Lilly",
      },
    ];

    // Mock the axios.get function to return the mocked response
    (axios.get as jest.MockedFunction<typeof axios.get>).mockResolvedValueOnce({
      data: mockedResponse,
    });

    const response = await request(app)
      .get("/api/searchMovies")
      .query({ title: "Ant-Man" });

    expect(response.status).toBe(200);
    expect(response.body.searchedResult).toEqual(mockedResponse);
  });

});
