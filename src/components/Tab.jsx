/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import React from "react";
function Tab({ status, label, count, tabCurrent, setTabCurrent }) {
  return (
    <button
      className={`flex items-center space-x-2 px-4 py-2 rounded-lg border ${
        tabCurrent === status
          ? "bg-green-500 text-white"
          : "bg-gray-100 text-gray-700"
      }`}
      onClick={() => setTabCurrent(status)}
    >
      <span>{label}</span>
      <div>{count}</div>
    </button>
  );
}

export default Tab;
