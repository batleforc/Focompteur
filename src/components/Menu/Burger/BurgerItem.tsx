import * as React from "react";
import { Link } from "react-router-dom";
const BurgerItem = ({
  label,
  link,
  url,
}: {
  label: string;
  url: string;
  link: boolean;
}) => {
  return <Link to={url}>{label}</Link>;
};
export default BurgerItem;
