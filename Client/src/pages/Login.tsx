import React, { useState } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router";
import { RootState } from "../action";
import LoginForm from "../components/Auth/LoginForm";
import SetPinForm from "../components/Auth/SetPinForm";
const Login = ({ Authenticated }: { Authenticated: boolean }) => {
  const [showPin, setShowPin] = useState(false);
  if (Authenticated) return <Redirect to="/" />;
  if (!showPin) return <LoginForm setShowPin={setShowPin} />;
  return <SetPinForm setShowPin={setShowPin} />;
};
export default connect(({ Auth }: RootState) => ({
  Authenticated: Auth.Authenticated,
}))(Login);
