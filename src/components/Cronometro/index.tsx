import { useEffect, useState } from "react";
import { timeForSeconds } from "../../common/utils/time";
import { ITask } from "../../types/task";
import Button from "../Button";
import Clock from "./Clock";
import style from "./Cronometro.module.scss";

interface Props {
  selected: ITask | undefined;
  finshedTask: () => void;
}

export default function Cronomentro({ selected, finshedTask }: Props) {
  const [time, setTime] = useState<number>();

  useEffect(() => {
    if (selected?.time) {
      setTime(timeForSeconds(selected.time));
    }
  }, [selected]);

  function regressTime(cont: number = 0) {
    setTimeout(() => {
      if (cont > 0) {
        setTime(cont - 1);
        return regressTime(cont - 1);
      }
      finshedTask();
    }, 1000);
  }
  return (
    <div className={style.cronometro}>
      <p className={style.titulo}>Escolha um card e inicie o cronômetro</p>
      <div className={style.relogioWrapper}>
        <Clock time={time} />
      </div>
      <Button onClick={() => regressTime(time)}>Start</Button>
    </div>
  );
}
