import { Router } from "express";
import * as PaleOriginController from "./controller";

const routes = new Router();

routes.post("/paleorigin", PaleOriginController.createPaleOrigin);
routes.get("/paleorigin", PaleOriginController.getAllPaleOrigin);

export default routes;
