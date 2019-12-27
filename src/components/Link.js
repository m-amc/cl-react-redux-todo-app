import React from 'react';
import PropTypes from 'prop-types';

// children here refers to whatever is between the <FilterLink> and </FilterLInk>. see Footer.js
const Link = ({ active, children, onClick, vFilter, oProps }) => {
  console.log("vFilter/oProps", vFilter, oProps)
  // console.log("children", children)
  // console.log("active", active)

  if (active) {
    return <span>{children}</span>
  }

  return (
    <button
      onClick={e => {
        e.preventDefault();
        onClick()
      }}
    >
      {children}
    </button>
  )
}

Link.propTypes = {
  active: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired
}

export default Link; 