import { getEnvString } from "./env";

export interface pushSub {
  endpoint: string;
  keys: {
    auth: string;
    p256dh: string;
  };
}

class NotificationHandler {
  WebPush = require("web-push");
  constructor() {
    this.WebPush.setGCMAPIKey(getEnvString("GCM_API"));
    this.WebPush.setVapidDetails(
      "mailto:maxleriche.60@gmail.com",
      getEnvString("VAPID_PUBLIC"),
      getEnvString("VAPID_PRIVATE")
    );
  }
  sendNotification = (Subscription: pushSub, payload: object) => {
    this.WebPush.sendNotification(Subscription, payload);
  };
}
