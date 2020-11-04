// require the PostMessage mongoose schema model
const PostMessage = require('../models/postMessage.js')

exports.getPosts = async (req, res) => {
  try {
    // accessing the database and finding a record takes time, therefore
    // getPost must be an async function
    // const postMessages = await PostMessage.find();
    // console.log(postMessages);
    // res.status(200).json(postMessages);
    const postMessages = await PostMessage.find();
    res.status(200).json(postMessages);

  } catch (error) {
    res.status(404).json({message: error.message})
  }
};



exports.createPost = async (req, res) => {
  // get the post from the body send by the client
  const body = req.body;
  // save the message into
  const newPost = new PostMessage(post);
  try {
    // save the message into the DB, therfore it requires the await
    await newPost.save();
    res.status(201).json(newPost)
  } catch (error) {
    res.status(409).json({
      message: error.message
    }) 
  }
};