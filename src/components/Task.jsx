/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import React from "react";
import Button from "./Button";

function Task({ title, completed, toggle, deleteTask }) {
  return (
    <div className="flex justify-between items-center p-4 border rounded-lg bg-gray-50 shadow-sm">
      <h1 className={`text-lg font-medium ${completed ? "line-through" : ""}`}>
        {title}
      </h1>
      <div className="space-x-3">
        <Button onClick={toggle}>
          {completed ? "Belum selesai" : "Selesai"}
        </Button>
        <Button onClick={deleteTask}>Hapus</Button>
      </div>
    </div>
  );
}

export default Task;
