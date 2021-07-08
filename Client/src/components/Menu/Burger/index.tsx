import * as React from "react";
import { connect } from "react-redux";
import { slide as Menu } from "react-burger-menu";
import BurgerItem from "./BurgerItem";
import { AppDispatch, RootState } from "../../../action";
import { setShowBurger } from "../../../action/ShowModal";
import { AuthIState } from "../../../action/Auth";
import { useTranslation } from "react-i18next";
const MenuBurger = ({
  Burger,
  dispatch,
  Auth,
}: {
  Burger: boolean;
  dispatch: AppDispatch;
  Auth: AuthIState;
}) => {
  const { t } = useTranslation();
  const menu = [
    {
      label: t("Home"),
      link: true,
      url: "/",
      available: true,
    },
    {
      label: t("Login"),
      link: true,
      url: "/login",
      available: !Auth.Authenticated,
    },
    {
      label: t("Register"),
      link: true,
      url: "/Register",
      available: !Auth.Authenticated,
    },
    {
      label: t("LogOut"),
      link: false,
      url: "/",
      available: Auth.Authenticated,
      action: () => {
        console.log("Disconnect");
      },
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
              value.action !== undefined && value.action();
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
