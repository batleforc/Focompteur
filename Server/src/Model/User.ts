import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  Username: String,
  Password: String,
  Name: String,
  Surname: String,
  Email: String,
  AllowEmail: { type: Boolean, default: false },
  ProfilePic: String,
  UiColor: { type: Boolean, default: false },
});

export default mongoose.model("User", UserSchema);
