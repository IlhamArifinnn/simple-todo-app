/* eslint-disable no-unused-vars */

import React, { useState } from "react";
import Button from "./components/Button";
import Tab from "./components/Tab";
import Task from "./components/Task";

function App() {
  const [tabCurrent, setTabCurrent] = useState("semua");

  const [tasks, setTask] = useState([]);

  const tabs = [
    {
      status: "semua",
      label: "Semua",
      count: tasks.length,
    },
    {
      status: "open",
      label: "Belum Selesai",
      count: tasks.filter((task) => !task.completed).length,
    },
    {
      status: "closed",
      label: "Selesai",
      count: tasks.filter((task) => task.completed).length,
    },
  ];

  function addTask(e) {
    e.preventDefault();
    const input = e.currentTarget.elements.namedItem("task");
    const task = input.value;

    if (task.trim() === "") return;

    const newTasks = [...tasks, { title: task, completed: false }];
    setTask(newTasks);
    input.value = "";
  }

  function toggleTask(index) {
    const newTasks = [...tasks];
    newTasks[index].completed = !newTasks[index].completed;
    setTask(newTasks);
  }

  function deleteTask(index) {
    const confirmed = window.confirm(
      "Apakah Anda yakin ingin menghapus tugas ini?"
    );
    if (confirmed) {
      setTask(tasks.filter((task, i) => i !== index));
    }
  }

  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center bg-gray-100">
      <div className="w-3/6 bg-white p-6 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text mb-1">Tugas Saya</h1>
        <p className="font-light text-slate-500 mb-5">
          {new Date().toLocaleDateString("id-ID", {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </p>

        <form className="my-3 space-x-3" onSubmit={addTask}>
          <input
            type="text"
            name="task"
            id="task"
            placeholder="Tambah Tugas Baru"
            className="p-3 border rounded-xl w-4/5"
          />
          <Button>Tambah</Button>
        </form>

        <div className="flex space-x-4 mb-5">
          {tabs.map((tab, i) => (
            <Tab key={i} {...tab} tabCurrent={tabCurrent} />
          ))}
        </div>

        <div className="space-y-3">
          {tasks.map((task, i) => (
            <Task
              key={i}
              {...task}
              toggle={() => toggleTask(i)}
              deleteTask={() => deleteTask(i)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
