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
    res.status(404).json({error: error.message})
  }
};

// export const getPosts = async (req, res) => {
//   try {
//       const postMessages = await PostMessage.find();

//       res.status(200).json(postMessages);
//   } catch (error) {
//       res.status(404).json({ message: error.message });
//   }
// }

exports.createPost = (req, res) => {
  res.send('post createdx ')
};