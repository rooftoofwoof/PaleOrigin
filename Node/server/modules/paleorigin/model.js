import mongoose, { Schema } from "mongoose";

const PaleOriginSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  }
});

export default mongoose.model("PaleOrigin", PaleOriginSchema);
