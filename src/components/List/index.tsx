import Item from "./Item";
import style from "./List.module.scss";
import { ITask } from "../../types/task";

interface Props {
  tasks: ITask[];
  selectTask: (taskSelected: ITask) => void;
}

function List({ tasks, selectTask }: Props) {
  return (
    <aside className={style.listaTarefas}>
      <h2>Estudos do Dia</h2>
      <ul>
        {tasks.map((item) => (
          <Item key={item.id} {...item} selectTask={selectTask} />
        ))}
      </ul>
    </aside>
  );
}

export default List;
