import React from "react";
import { connect } from "react-redux";
import { AppDispatch, RootState } from "../../action";
import { setShowBurger } from "../../action/ShowModal";
import { Link } from "react-router-dom";
import MenuBurger from "./Burger";
import Icon from "../Icon";
const Menu = ({
  titre,
  dispatch,
}: {
  titre: string;
  dispatch: AppDispatch;
}) => {
  return (
    <nav className="bg-gray-800">
      <MenuBurger />
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <button
            type="button"
            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            onClick={() => dispatch(setShowBurger(true))}
          >
            <span className="sr-only">Open main menu</span>
            <Icon Label="stack" className="icon icon-stack" />
          </button>
          <div className="flex-1 flex items-stretch justify-start">
            <div className="block sm:ml-6">
              <div className="flex space-x-4">
                <Link
                  to="/"
                  className="text-white px-3 py-2 rounded-md text-xl font-medium"
                  aria-current="page"
                >
                  {titre}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default connect((state: RootState) => ({ titre: state.Home.titre }))(
  Menu
);
