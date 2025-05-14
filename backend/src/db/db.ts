import mongoose, {Schema, Document} from "mongoose";

const contentTypes: string[] = ["image", "video", "audio", "text"];

export interface IUser extends Document {
  username: string;
  password: string;
}

const userSchema : Schema<IUser> = new mongoose.Schema({
    username: { type: String, required: true },
    password: { type: String, required: true },
});

const contentSchema = new mongoose.Schema({
    link: { type: String,  required: true },
    type: {type: String, enum: contentTypes, required: true},
    title: { type: String, required: true },
    tags: { type: [mongoose.Types.ObjectId], ref: 'Tag' },
    userId: { type: mongoose.Types.ObjectId, ref: 'User', required: true }
});

const tagSchema = new mongoose.Schema({
    title: { type: String, required: true }
});

const linkSchema = new mongoose.Schema({
    hash: { type: String, required: true },
    userId : { type: mongoose.Types.ObjectId, ref: 'User', required: true, unique: true },
});

export const userModel = mongoose.model<IUser>("User", userSchema);
export const contentModel = mongoose.model("Content", contentSchema);
export const tagModel = mongoose.model("Tag", tagSchema);
export const linkModel = mongoose.model("Link", linkSchema);


