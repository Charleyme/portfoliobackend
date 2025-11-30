import Blog from "../models/blog.js";

export const createPost = async (req, res) => {
  try {
    const { title, content, coverImage, tags } = req.body;

    const post = await Blog.create({
      title,
      content,
      coverImage,
      tags,
      createdBy: req.admin.id,
    });

    res.status(201).json({
      message: "Post Created SuccessFully",
      post,
    });
  } catch (error) {
    console.error("Create Post Error:", error);
    res.status(500).json({ message: "Server error" });
  }
};

export const updatePost = async (req, res) => {
  try {
    const post = await Blog.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!post) return res.status(404).json({ message: "Post not found" });

    res.json({
      message: "Post updated",
      post,
    });
  }catch (error) {
    console.error("Update Error:", error);
    res.status(500).json({ message: "Server error" });
  }
};

export const deletePost = async (req, res) => {
  try {
    const post = await Blog.findByIdAndDelete(req.params.id);

    if (!post) return res.status(404).json({ message: "Post not found" });

    res.json({ message: "Post deleted" });
  } catch (error) {
    console.error("Delete Error:", error);
    res.status(500).json({ message: "Server error" });
  }
};

export const getAllPosts = async (req, res) => {
  try {
    const posts = await Blog.find().sort({ createdAt: -1 });
    res.json(posts);
  } catch (error) {
    console.error("Fetch Error:", error);
    res.status(500).json({ message: "Server error" });
  }
};


export const getSinglePost = async (req, res) =>{
    try{
        const post = await Blog.findById(req.params.id);
        if(!post) return res.status(404).json({ message: "Post not found" });
        res.json(post);
    } catch (error) {
        console.error("Fetch Single Post Error:", error);
        res.status(500).json({ message: "Server error" });
    }
}