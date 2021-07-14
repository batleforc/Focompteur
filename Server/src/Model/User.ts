import mongoose from "mongoose";
import { v5 as UUID } from "uuid";
import { getEnvString } from "../Helper/env";

const UserSchema = new mongoose.Schema({
  Username: String,
  Password: String,
  Name: String,
  Surname: String,
  Email: String,
  ProfilePic: String,
  UiColor: { type: Boolean, default: false },
  Token: [String],
  cryptKey: {
    type: String,
    default: function (): string {
      const _t = this as any;
      return UUID(_t.Username, getEnvString("UUID_NAMESPACE"));
    },
  },
  Notif: {
    AllowEmail: Boolean,
    NotificationPush: Boolean,
    PushDevice: [String],
  },
  Compagnon: {
    Name: String,
    Coin: Number,
    Animal: String,
    Inventory: [String],
  },
});

UserSchema.methods.getPushDevice = function getPushDevice(cb) {
  return this.model("User")
    .findOne({ _id: this._id }, cb)
    .then((user) =>
      user.Notif.PushDevice.map((PushDevice: string) => JSON.parse(PushDevice))
    );
};

export default mongoose.model("User", UserSchema);
