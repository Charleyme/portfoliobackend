import mongoose from 'mongoose';

const adminSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true,
        trim: true,
    },
    content:{
        type: String,
        required: true,
    },
    coverImage:{
        type: String,
        default: "",
    },
    tags:{
        type: [String],
        default: [],
    },
   
},
{ timestamps: true }
)

const Blog = mongoose.model("Blog", adminSchema);
export default Blog;