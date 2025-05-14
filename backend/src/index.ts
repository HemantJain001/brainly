import 'dotenv/config'
import express from 'express';
import connectDB from './db';
import {userModel, contentModel, tagModel, linkModel} from './db/db';
import { JWT_SECRET } from './config';
import jwt from 'jsonwebtoken';
import { Request } from 'express';
import { userMiddleware } from './middlewares';


const app = express();
app.use(express.json());
connectDB(); 


app.post("/api/v1/signin", async (req: Request, res: any) => {
    const { username, password } = req.body;

    const user = await userModel.findOne({ username: username });
    if (!user) {
        return res.status(401).json({ message: "User not found" });
    }

    const passwordMatch = user.password === password;
    if (!passwordMatch) {
        return res.status(401).json({ message: "Invalid password" });
    }

    if (!JWT_SECRET) {
        return res.status(500).json({ message: "JWT_SECRET is not defined" });
    }

    const token = jwt.sign({ userId: user._id }, JWT_SECRET, { expiresIn: '1h' });
    return res.status(200).json({ token: token });
});

app.post("/api/v1/signup", async (req : Request, res: any)=>{
    const { username, password } = req.body;

    const user = await userModel.find({ username: username });
    if(user.length > 0) {
        return res.json({ message: "User already exists" });
    }


    const newUser = new userModel({ username: username, password: password });
    await newUser.save();
    if (!JWT_SECRET) {
        return res.status(500).json
            ({ message: "JWT_SECRET is not defined" });
    }

    return res.status(200).json({ newUser: newUser });
});

app.post("/api/v1/content", userMiddleware, async (req : any, res: any) => {

    const { link, title, type } = req.body;
    const userId = req.userId;
    console.log(userId);

    try {
        const newContent = await contentModel.create({ link, type, title, userId, tags : [] });
        return res.status(201).json({ message: "Content created successfully", content: newContent });
    } catch (error) {
        return res.status(500).json({ message: "Error creating content", error });
    }

});

app.get("/api/v1/content",userMiddleware, async (req : any, res : any) => {
    // @ts-ignore
    const userId = req.userId;
    const content = await contentModel.find({userId: userId}).populate("userId", "username");

    res.json({
        message: "Content fetched successfully"
    });

});

app.delete("/api/v1/content", userMiddleware, async (req: any, res: any) => {
    const userId = req.userId;
    const { contentId } = req.body;

    const contentDelete = await contentModel.deleteOne({_id : contentId, userId : userId});
    
});

app.post("api/v1/brain/share",userMiddleware, (req, res) => {
    const {share} = req.body;
    const { userId } = req.body;
    if(share == true){
        
    }
});

app.post("api/v1/brain/:shareLink", (req, res) => {
    
});

app.listen(3000);
