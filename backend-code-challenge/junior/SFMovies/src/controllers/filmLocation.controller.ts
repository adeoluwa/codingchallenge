import axios from "axios";
import { Request, Response } from "express";
// import { FilmLocation } from "../interface/FilmLocation";

const URL = "https://data.sfgov.org/resource/wwmu-gmzc.json?$limit=1000";

export const getFilmLocations = async (req: Request, res: Response) => {
  try {
    const searchTerm = req.query.title as string;

    // searchTerm = searchTerm.replace(/\s+/g, '-');

    const response = await axios.get(URL, {
      params: {
        title: searchTerm,
        // $where: `upper(title) like '%25${searchTerm.toUpperCase()}%25'`,
      },
    });

    const searchedResult = response.data.map((result: any) => ({
      title: result?.title,
      release_year: result?.release_year,
      locations: result?.locations,
      production_company: result?.production_company,
      distributor: result?.distributor,
      writer: result?.writer,
      actor_1: result?.actor_1,
      actor_2: result?.actor_2,
      actor_3: result?.actor_3,
    }));

    res.json({ searchedResult });
  } catch (error) {
    console.error("Error searching film location: ", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const renderMovieLocation = async (req: Request, res: Response) => {
  try {
    const searchTerm = req.query.title as string;

    const response = await axios.get(URL, {
      params: {
        title: searchTerm,
        // $where: `upper(title) like '%25${searchTerm.toUpperCase()}%25'`,
      },
    });

    const searchedResult = response.data.map((result: any) => ({
      title: result?.title,
      release_year: result?.release_year,
      locations: result?.locations,
      production_company: result?.production_company,
      distributor: result?.distributor,
      writer: result?.writer,
      actor_1: result?.actor_1,
      actor_2: result?.actor_2,
      actor_3: result?.actor_3,
    }));

    res.render("index",{ searchedResult });
  } catch (error) {
    console.error("Error searching film location: ", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
