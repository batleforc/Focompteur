import mongoose from "mongoose";

const SubscribeCompteurSchema = new mongoose.Schema({
  Owner: Boolean, // Tout les droit sur le Compteur
  SharedOwner: Boolean, //Ne peux pas supprimer le compteur
  Notification: Boolean, // si l'utilisateur autorise les notification push
  NotificationSub: Boolean, // Le Payload qui permet de send les notification push
  CompteurId: String,
  UserId: String,
});

export default mongoose.model("SubCompteur", SubscribeCompteurSchema);
