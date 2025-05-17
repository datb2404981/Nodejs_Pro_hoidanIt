import { Request, Response } from "express";

const getHomePage = (req : Request, res: Response) => {
    res.render("home"); 
}
const getCreateUserPage = (req : Request, res: Response) => {
    res.render("create-user"); 
}
const postCreateUser = (req: Request, res: Response) => {
    console.log(">>> check data: ",req.body)
    res.redirect("/"); 
}

export { getHomePage, getCreateUserPage, postCreateUser };