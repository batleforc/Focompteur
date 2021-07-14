import React from "react";

const Icon = ({
  Label,
  className = "",
}: {
  Label: string;
  className: string;
}) => {
  return (
    <svg className={className}>
      <use href={`/assets/icon/symbol.svg#icon-${Label}`}></use>
    </svg>
  );
};

export default Icon;
