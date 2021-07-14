import React, { useState } from "react";
import { connect } from "react-redux";
import LoginForm from "../components/Auth/LoginForm";
import SetPinForm from "../components/Auth/SetPinForm";
const Login = () => {
  const [showPin, setShowPin] = useState(false);
  if (!showPin) return <LoginForm setShowPin={setShowPin} />;
  return <SetPinForm setShowPin={setShowPin} />;
};
export default connect()(Login);
