/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import React from "react";
function Button({ onClick, children }) {
  return (
    <button
      className="bg-green-500 py-2 px-4 rounded-lg text-white hover:bg-green-600"
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
