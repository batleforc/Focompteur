import * as React from "react";
import { connect } from "react-redux";
import { RootState } from "../action";

const Register = () => {
  return <div>Register</div>;
};
export default connect((state: RootState) => ({}))(Register);
