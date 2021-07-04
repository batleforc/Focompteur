import * as React from "react";
import { connect } from "react-redux";
import { RootState } from "../action";

const Home = () => {
  return <div>Home</div>;
};
export default connect((state: RootState) => ({}))(Home);
