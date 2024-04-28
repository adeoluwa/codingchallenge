import express from "express";
import swagggerUi from "swagger-ui-express";
import specs from "./swagger.config";
import filmLocationRoute from "./routes/filmLocation.routes";
import renderMovieRoute from "./routes/renderMovie.routes"
import path from "path";

const app = express();

const PORT = 8000;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"))


app.use(express.json());
app.use("/api-docs", swagggerUi.serve, swagggerUi.setup(specs));

app.use("/api",filmLocationRoute)
app.use("/movies",renderMovieRoute)

app.get("/", (req, res, next) => {
  return res.status(200).json({
    message: "SF Movies API",
  });
});

if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Server is running on Port http://localhost:${PORT}`);
  });
}

export default app;
