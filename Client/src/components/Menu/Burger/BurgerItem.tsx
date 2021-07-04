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
  available,
  action,
}: {
  label: string;
  url: string;
  link: boolean;
  dispatch: AppDispatch;
  available: boolean;
  action?: Function;
}) => {
  const Item = ({
    children,
  }: {
    children: JSX.Element | JSX.Element[] | string;
  }) =>
    link ? (
      <Link onClick={() => action !== undefined && action()} to={url}>
        {children}
      </Link>
    ) : (
      <button
        onClick={() => {
          dispatch(setShowBurger(false));
          action !== undefined && action();
        }}
      >
        {children}
      </button>
    );
  return <Item>{label}</Item>;
};
export default connect((state) => ({}))(BurgerItem);
