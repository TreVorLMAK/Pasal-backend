import { Request, Response } from "express";
import User from "../database/models/userModel";
import sequelize from "../database/connection";
class UserController{
    static async register(req:Request,res:Response){
        //incoming user data receive 
        const {username,email,password} = req.body
        if(!username || !email || !password){
            res.status(400).json({
                message : "Please provide username,email,password"
            })
            return
        }
        await User.create({
            username, 
            email, 
            password, 
    
        })
        res.status(201).json({
            message : "User registered successfully"
        })
    }
}
export default UserController