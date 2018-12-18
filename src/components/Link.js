import React from "react";
import propTypes from "prop-types";

const Link = ({ active, children, onClick }) => {
  if (active) {
    return <span>{children}</span>;
  }
  return (
    // eslint-disable-next-line jsx-a11y/anchor-is-valid
    <a
      href=""
      onClick={e => {
        e.preventDefault();
        onClick();
      }}
    >
      {children}
    </a>
  );
};

Link.propTypes = {
  active: propTypes.bool.isRequired,
  children: propTypes.node.isRequired
  // onCLick: propTypes.func.isRequired
};

export default Link;
