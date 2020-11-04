  const mongoose = require('mongoose');
  // create a mongoose schema object
  // the mongoose schema defines what each post must have
const postSchema = mongoose.Schema({
  title: String,
  message: String,
  creator: String,
  tags: [String],
  selectedFile: String,
  likeCount: {
    type: Number,
    default: 0
  },
  createdAt: {
    type: Date,
    default: new Date()
  }
})

exports.PostMessage = mongoose.model('PostMessage', postSchema);

// import mongoose from 'mongoose';

// const postSchema = mongoose.Schema({
//     title: String,
//     message: String,
//     creator: String,
//     tags: [String],
//     selectedFile: String,
//     likeCount: {
//         type: Number,
//         default: 0,
//     },
//     createdAt: {
//         type: Date,
//         default: new Date(),
//     },
// })

// var PostMessage = mongoose.model('PostMessage', postSchema);

// export default PostMessage;
