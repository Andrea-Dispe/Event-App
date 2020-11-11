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
  const post = req.body;
  const newPost = new PostMessage(post);
  try {
    await newPost.save();
    res.status(201).json(newPost)
  } catch (error) {
    res.status(409).json({
      message: error.message
    })
  }
};


exports.createPost = async (req, res) => {
  const { title, message, selectedFile, creator, tags } = req.body;
  const newPostMessage = new PostMessage({ title, message, selectedFile, creator, tags })
  try {
      await newPostMessage.save();
      res.status(201).json(newPostMessage );
  } catch (error) {
      res.status(409).json({ message: error.message });
  }
}

exports.updatePost = async(req, res) => {
  // you can rename the property you deconstruct
  const { id: _id } = req.params;
  const post = req.body;
  // check if the _id is really a valid mongoose object id
  if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('no post with that id')
  const updatedPost = await ostMessage.findByIdAndUpdate(_id, post, {new: true});
  res.json(updatedPost)
}
