import * as React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { AppDispatch } from "../../../action";
import { setShowBurger } from "../../../action/ShowModal";
const BurgerItem = ({
  label,
  link,
  url,
  dispatch,
}: {
  label: string;
  url: string;
  link: boolean;
  dispatch: AppDispatch;
}) => {
  return (
    <Link onClick={() => dispatch(setShowBurger(false))} to={url}>
      {label}
    </Link>
  );
};
export default connect((state) => ({}))(BurgerItem);
