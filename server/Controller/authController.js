import User from "../Models/User.js"
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt"; 

export const register = async(req, res) => {
    try{
        const {
            fn,
            ln,
            password,
            username
        } = req.body;
        const salt = await  bcrypt.genSalt();
        const passwordHash = await bcrypt.hash(password, salt);
        const resContent = await User.create({
            first_name: fn,
            last_name: ln,
            password: passwordHash,
            username: username
        })
        res.status(200).json(resContent)
        
    } catch(err)
    {
        res.status(404).json({message: err.message})
    }
}

export const login = async(req, res) => {
    try {
        const {username, password} = req.body;
        const user = await User.findOne({where:{username: username}});
        
        if (!user) return res.status(400).json({msg: "User does not exist."});

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(400).json({msg: "Invalid credentials. "});

        const token = jwt.sign({id: user._id}, process.env.JWT_SECRET);
        delete user.password;
        res.status(200).json({token, user});
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}