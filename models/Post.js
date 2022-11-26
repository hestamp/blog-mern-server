import mongoose from 'mongoose'

const idUser = mongoose.Schema.Types.ObjectId._id

const PostSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
      unique: true,
    },
    tags: {
      type: Array,
      default: [],
    },
    viewsCount: {
      type: Number,
      default: 0,
    },
    ofDates: [Date],
    user: {
      type: idUser,
      ref: 'User',
      required: true,
    },
    imageUrl: String,
  },
  {
    timestamps: true,
  }
)

export default mongoose.model('Post', PostSchema)
