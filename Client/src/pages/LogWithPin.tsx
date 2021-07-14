import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router";
import { RootState } from "../action";
import LogWithPinForm from "../components/Auth/LogWithPinForm";
const Login = ({ Authenticated }: { Authenticated: boolean }) => {
  if (Authenticated) return <Redirect to="/" />;
  return <LogWithPinForm />;
};
export default connect(({ Auth }: RootState) => ({
  Authenticated: Auth.Authenticated,
}))(Login);
