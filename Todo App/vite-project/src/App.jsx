import React, { useState, useEffect } from "react";
import TodoForm from "./components/TodoForm";
import TodoLists from "./components/TodoLists";
import FilterList from "./components/FilterList";

export default function TodoApp() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");
  const [filter, setFilter] = useState("all");

  const [hasLoaded, setHasLoaded] = useState(false);

  useEffect(() => {
    try {
      const storedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
      const storedFilter = localStorage.getItem("filter") || "all";
      setTasks(storedTasks);
      setFilter(storedFilter);
      setHasLoaded(true);
    } catch (error) {
      console.error("Error loading from localStorage", error);
    }
  }, []);

  useEffect(() => {
    if (hasLoaded) {
      localStorage.setItem("tasks", JSON.stringify(tasks));
    }
  }, [tasks]);

  useEffect(() => {
    if (hasLoaded) {
      localStorage.setItem("filter", filter);
    }
  }, [filter]);

  return (
    <div className="max-w-xl mx-auto p-4">
      <TodoForm
        input={input}
        setInput={setInput}
        setTasks={setTasks}
        tasks={tasks}
      />
      <FilterList setFilter={setFilter} filter={filter} />
      <TodoLists tasks={tasks} setTasks={setTasks} filter={filter} />
    </div>
  );
}
