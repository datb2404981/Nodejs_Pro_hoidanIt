import express, { Express } from "express";
import { getCreateUserPage, getHomePage, postCreateUser } from "../controllers/user.controller";

const router = express.Router();

const webRoutes = (app: Express) => {
    
    router.get('/', getHomePage);
    router.get('/create_user', getCreateUserPage);
    router.post('/handle-create_user', postCreateUser);
    
    app.use("/", router);
}

export default webRoutes;
