import mongoose from "mongoose";

// Define the schema for a user
const userSchema = mongoose.Schema({
  name: { type: String, required:  true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  id: { type: String },
});
// Create a Mongoose model based on the schema
export default mongoose.model("User", userSchema);