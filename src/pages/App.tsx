import { useState } from "react";
import style from "./App.module.scss";
import Form from "../components/Forms";
import List from "../components/List";
import Cronometro from "../components/Cronometro";
import { ITask } from "../types/task";

function App() {
  const [tasks, setTask] = useState<ITask[]>([]);
  const [selected, setSelected] = useState<ITask>();

  function selectTask(taskSelected: ITask) {
    setSelected(taskSelected);
    setTask((oldTasks) =>
      oldTasks.map((task) => ({
        ...task,
        selected: task.id === taskSelected.id ? true : false,
      }))
    );
  }

  function finshedTask() {
    if (selected) {
      setSelected(undefined);
      setTask((oldTasks) =>
        oldTasks.map((task) => {
          if (task.id === selected.id) {
            return {
              ...task,
              selected: false,
              completed: true,
            };
          }
          return task;
        })
      );
    }
  }
  return (
    <div className={style.AppStyle}>
      <Form setTask={setTask} />
      <List tasks={tasks} selectTask={selectTask} />
      <Cronometro selected={selected} finshedTask={finshedTask} />
    </div>
  );
}

export default App;
