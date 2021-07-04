const regUsername = "^(?=[a-zA-Z0-9._]{8,20}$)(?!.*[_.]{2})[^_.].*[^_.]$";
const regPassword =
  "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$";
const regNameSurname = "\\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+";
const regEmail =
  "/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\\.[a-zA-Z0-9-]+)*$/";

export const validateUsername = (username: string | undefined) =>
  username !== undefined && username.match(regUsername);
export const validatePassword = (password: string | undefined) =>
  password !== undefined && password.match(regPassword);
export const validateNameSurname = (name: string | undefined) =>
  name !== undefined && name.match(regNameSurname);
export const validateMail = (mail: string | undefined) =>
  mail !== undefined && mail.match(regEmail);
