import * as moongose from "mongoose";

const Schema = moongose.Schema;

const PostSchema = new Schema({
  timestamp: {
    type: Date, 
    default: Date.now
  },
  title: {
    type: String,
    default: '',
    required: true
  },
  content: {
    type: String,
    default: '',
    required: true
  }
});

export default moongose.model('Post', PostSchema);
