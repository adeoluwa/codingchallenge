import swaggerJSDoc from "swagger-jsdoc";

const options: swaggerJSDoc.Options = {
  swaggerDefinition: {
    info: {
      title: "SF Movies",
      version: "1.0.0",
      description: "API documentation for the SF Movies Challenge",
    },
    basePath: "/",
  },
  apis: ["./src/routes/filmLocation.routes.ts"],
};

const specs = swaggerJSDoc(options);

export default specs;