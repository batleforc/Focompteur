import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  username: String,
  password: String,
  name: String,
  surname: String,
  profilePic: String,
  UiColor: Boolean,
});

export default mongoose.model("User", UserSchema);
