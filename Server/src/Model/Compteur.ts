import mongoose from "mongoose";

export enum CompteurType {
  UntilDate = 0,
  UntilDateTime,
  Increment,
}

const CompteurSchema = new mongoose.Schema({
  Label: String,
  Type: CompteurType,
  Param: {
    endDate: {
      type: Date,
      default: Date.now,
    },
    value: Number,
  },
});

export default mongoose.model("Compteur", CompteurSchema);
