const mongoose =require('mongoose');

const postSchema = mongoose.Schema({
  title: { type: String, required: true },
  content: { type:String, required:true },
  imagePath: { type:String, required:true },
  creator: {type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true}
});

module.exports = mongoose.model('Post', postSchema);

const postSchemaMoreFields = mongoose.Schema({
  postId: { type: String, required: true },
  postData: {type: postSchema, required: true}
})

//module.exports = mongoose.model('PostSchemaM', postSchemaMoreFields);
