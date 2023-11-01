
const postData = require('../model/Post');

// Get all posts
const getAllPosts = async (req, res) => {
    console.log('jfkj')
  try {
    const posts = await postData.find();
    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};

// Get post by ID
const getPostById = async (req, res) => {
  try {
    const post = await postData.findById(req.params.id);
    if (!post) {
      return res.status(404).json({ message: 'Post not found' });
    }
    res.status(200).json(post);
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};

// Create a new post
const createPost = async (req, res) => {
    try {
      const { title, content, author} = req.body;
      const post = new postData({ title, content, author, createdAt: new Date() });
      await post.save();
 
      return res.status(201).json({message:"created succesfully"});
    } catch (error) {
      res.status(500).json({ message: 'Server Error' });
    }
  };
  
  // Update a post
  const updatePost = async (req, res) => {
    try {
      const { title, content } = req.body;
      const updatedPost = await postData.findByIdAndUpdate(req.params.id, { title, content }, { new: true });
      res.status(200).json(updatedPost);
    } catch (error) {
      res.status(500).json({ message: 'Server Error' });
    }
  };
  
  // Delete a post
  const deletePost = async (req, res) => {
    try {
      const deletedPost = await postData.findByIdAndRemove(req.params.id);
      res.status(200).json({ message: 'Post deleted successfully' });
    } catch (error) {
      res.status(500).json({ message: 'Server Error' });
    }
  };
  
  module.exports = {
    getAllPosts,
    getPostById ,
    createPost,
    updatePost,
    deletePost
  };
