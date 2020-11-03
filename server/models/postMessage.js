  const mongoose = require('mongoose');
  // create a mongoose schema object
  // the mongoose schema defines what each post must have
const postSchema = mongoose.Schema({
  title: String,
  indexmessage: String,
  creator: String,
  tags: [String],
  selectedFile: String,
  likeCount: {
    type: Number,
    defualt: 0
  },
  crdatedAt: {
    type: Date,
    default: new Date()
  }


})

exports.PostMessage = mongoose.model('PostMessage', postSchema);

