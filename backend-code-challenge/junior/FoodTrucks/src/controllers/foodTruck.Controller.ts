import { NextFunction, Request, Response } from "express";
import axios from "axios";

const URL = "https://data.sfgov.org/resource/rqzj-sfat.json";

export const getFoodTrucks = async (
  req: Request,
  res: Response,
) => {
  const { lat, long } = req.query;

  if (!lat || !long) {
    return res
      .status(400)
      .json({ error: "Latitute and Longitute are required" });
  }

  try {
    const response = await axios.get(URL, {
      params: {
        $where: `within_circle(location, ${lat}, ${long}, 500)`,
      },
    });

    const trucks = response.data.map((truck: any) => ({
      name: truck?.applicant,
      address: truck?.location,
      facilitytype:truck?.facilitytype,
      blocklot:truck?.blocklot,
      block:truck?.block,
      lot:truck?.lot,
      foodItems: truck?.fooditems.split(":").map((item: string) => item.trim()),
    }));

    return res.json({trucks})
  } catch (error) {
    console.log("Error feteching data: ", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
