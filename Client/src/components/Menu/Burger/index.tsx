import * as React from "react";
import { connect } from "react-redux";
import { slide as Menu } from "react-burger-menu";
import BurgerItem from "./BurgerItem";
import { AppDispatch, RootState } from "../../../action";
import { setShowBurger } from "../../../action/ShowModal";
import { AuthIState } from "../../../action/Auth";

const MenuBurger = ({
  Burger,
  dispatch,
  Auth,
}: {
  Burger: boolean;
  dispatch: AppDispatch;
  Auth: AuthIState;
}) => {
  const menu = [
    {
      label: "Home",
      link: true,
      url: "/",
      available: true,
      action: () => {},
    },
    {
      label: "Login",
      link: true,
      url: "/login",
      available: !Auth.Authenticated,
      action: () => {},
    },
  ];
  return (
    <Menu
      customBurgerIcon={false}
      customCrossIcon={false}
      isOpen={Burger}
      onClose={() => dispatch(setShowBurger(false))}
    >
      {menu
        .filter((menuItem) => menuItem.available)
        .map((value, index) => (
          <BurgerItem
            key={index}
            label={value.label}
            link={value.link}
            url={value.url}
            available={value.available}
            action={() => {
              dispatch(setShowBurger(false));
              value.action();
            }}
          />
        ))}
    </Menu>
  );
};

export default connect((state: RootState) => ({
  Burger: state.ShowModal.Burger,
  Auth: state.Auth,
}))(MenuBurger);
