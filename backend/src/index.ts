import 'dotenv/config'
import express from 'express';
import connectDB from './db';
import {userModel, contentModel, tagModel, linkModel} from './db/db';
import { JWT_SECRET } from './config';
import jwt from 'jsonwebtoken';
import { Request } from 'express';
import { randomHash } from './utils';
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
        content: content
    });

});

app.delete("/api/v1/content", userMiddleware, async (req: any, res: any) => {
    const userId = req.userId;
    const { contentId } = req.body;

    const contentDelete = await contentModel.deleteOne({_id : contentId, userId : userId});
    
});

app.post("/api/v1/brain/share",userMiddleware, async (req: any, res: any) => {
    const share = req.body.share;
    if (share) {
            const existingLink = await linkModel.findOne({
                userId: req.userId
            });

            if (existingLink) {
                res.json({
                    hash: existingLink.hash
                })
                return;
            }
            const hash = randomHash(10);
            await linkModel.create({
                userId: req.userId,
                hash: hash
            })

            res.json({
                hash
            })
    } else {
        await linkModel.deleteOne({
            userId: req.userId
        });

        res.json({
            message: "Removed link"
        })
    }

});

app.post("/api/v1/brain/:shareLink",async (req: any, res: any) => {
    const { shareLink } = req.params;

    const link = await linkModel.findOne({hash: shareLink});
    if(!link) {
        return res.status(404).json({ message: "Link not found" });
    }

    const content = await contentModel.find({userId: link.userId});
    const user = await userModel.findOne({_id: link.userId});

    res.json({
        user: user ? user.username : null, 
        content: content
    })


});

app.listen(3000);
