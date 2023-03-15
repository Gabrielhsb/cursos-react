import React from "react";
import Button from "../Button";
import style from "./Form.module.scss";
import { ITask } from "../../types/task";
import { v4 as uuidv4 } from "uuid";

class Form extends React.Component<{
  setTask: React.Dispatch<React.SetStateAction<ITask[]>>;
}> {
  state = {
    task: "",
    time: "00:00:00",
  };

  addTask(event: React.FormEvent) {
    event.preventDefault();
    this.props.setTask((oldTask) => [
      ...oldTask,
      { ...this.state, selected: false, completed: false, id: uuidv4() },
    ]);
    this.setState({
      task: "",
      time: "00:00:00",
    });
  }
  render() {
    return (
      <form className={style.novaTarefa} onSubmit={this.addTask.bind(this)}>
        <div className={style.inputConainer}>
          <label htmlFor="tarefa"> Adicione um novo estudo</label>
          <input
            type="text"
            name="tarefa"
            id="tarefa"
            value={this.state.task}
            onChange={(event) =>
              this.setState({ ...this.state, task: event.target.value })
            }
            placeholder="O que você quer estudar"
            required
          />
        </div>

        <div className={style.inputContainer}>
          <label htmlFor="tempo"> Tempo</label>

          <input
            type="time"
            step={1}
            name="tempo"
            value={this.state.time}
            id="tempo"
            onChange={(event) =>
              this.setState({ ...this.state, time: event.target.value })
            }
            min="00:00:00"
            max="01:30:00"
            required
          />
        </div>

        <Button type="submit"> Adicionar</Button>
      </form>
    );
  }
}

export default Form;
