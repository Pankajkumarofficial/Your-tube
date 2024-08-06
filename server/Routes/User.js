import express from "express";
import { login } from "../Controllers/Auth.js";
import { getallchanels, updatechaneldata } from "../Controllers/channel.js";

const routes = express.Router();

routes.post('/login', login)
routes.patch('/update/:id', updatechaneldata)
routes.get('/getallchannel', getallchanels)

export default routes;