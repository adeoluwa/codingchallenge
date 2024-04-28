import swaggerJSDoc from "swagger-jsdoc";

const options: swaggerJSDoc.Options = {
  swaggerDefinition: {
    info: {
      title: "Food Truck API",
      version: "1.0.0",
      description: "API documentation for the Food Truck Service Challenge",
    },
    basePath: "/",
  },
  apis: ["./src/routes/foodTruck.routes.ts"],
};

const specs = swaggerJSDoc(options);

export default specs;
