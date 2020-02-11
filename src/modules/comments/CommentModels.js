import { Schema, model } from 'mongoose';

const CommentSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export default model('Comment', CommentSchema);
