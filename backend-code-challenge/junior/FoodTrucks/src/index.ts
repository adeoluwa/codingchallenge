import express, { Request, Response } from "express";
import swaggerUi from "swagger-ui-express";
import specs from "./swagger.config";
import foodTruckRoute from "./routes/foodTruck.routes";
import path from "path";


const app = express();

const PORT = 5000;

interface FoodTruck {
  name: string;
  address: string;
  foodItems: string[];
  location: {
    coordinates: number[];
  };
}

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.json());
// Swagger API Documentation
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs));

// Routes
// app.get("/", (req, res, next) => {
//   return res.status(200).json({
//     message: "Food Truck API",
//   });
// });

app.get("/", (req, res, next) => {
  res.render("index", { trucks: null });
});


app.use("/api", foodTruckRoute);

if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Server is running on PORT http://localhost:${PORT}`);
  });
}

export default app;
