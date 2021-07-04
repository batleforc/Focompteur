import * as React from "react";
import { connect } from "react-redux";
import { RootState } from "../action";

const Login = () => {
  return <div>Login</div>;
};
export default connect((state: RootState) => ({}))(Login);
