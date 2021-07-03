import * as React from "react";
import { connect } from "react-redux";
import { slide as Menu } from "react-burger-menu";
import BurgerItem from "./BurgerItem";
import { AppDispatch, RootState } from "../../../action";
import { setShowBurger } from "../../../action/ShowModal";

const MenuBurger = ({
  Burger,
  dispatch,
}: {
  Burger: boolean;
  dispatch: AppDispatch;
}) => {
  const menu = [
    {
      label: "Home",
      link: true,
      url: "/",
    },
  ];
  return (
    <Menu
      customBurgerIcon={false}
      customCrossIcon={false}
      isOpen={Burger}
      onClose={() => dispatch(setShowBurger(false))}
    >
      {menu.map((value, index) => (
        <BurgerItem
          key={index}
          label={value.label}
          link={value.link}
          url={value.url}
        />
      ))}
    </Menu>
  );
};

export default connect((state: RootState) => ({
  Burger: state.ShowModal.Burger,
}))(MenuBurger);
