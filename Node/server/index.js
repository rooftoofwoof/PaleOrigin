import express from "express";
import dbConfig from "./config/db";
import middlewaresConfig from "./config/middlewares";
import { PaleOriginRoutes } from "./modules";

const app = express();

dbConfig();
middlewaresConfig(app);

app.use("/api", [PaleOriginRoutes]);

const PORT = process.env.PORT || 3000;

app.listen(PORT, "0.0.0.0", err => {
  if (err) {
    console.log(err);
  }
  {
    console.log(`App listen to port: ${PORT}`);
  }
});
