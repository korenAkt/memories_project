//import
import mongoose from 'mongoose';

// Define the schema for a post
const postSchema = mongoose.Schema({
    title: String,
    message: String,
    name: String,
    creator: String,
    tags: [String],
    selectedFile: String,
    likes: { type: [String], default: [] },
    comments: { type: [String], default: [] },
    createdAt: {
        type: Date,
        default: new Date(),
    },
})

// Create  Mongoose model based on schema
var PostMessage = mongoose.model('PostMessage', postSchema);

export default PostMessage;