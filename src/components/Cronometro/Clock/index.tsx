import style from "./Clock.module.scss";

interface Props {
  time: number | undefined;
}
export default function Clock({ time = 0 }: Props) {
  const minuts = Math.floor(time / 60);
  const seconds = time % 60;
  const [minutsDezena, minutsUnity] = String(minuts).padStart(2, "0");
  const [secondsDezena, secondsUnity] = String(seconds).padStart(2, "0");

  return (
    <>
      <span className={style.relogioNumero}>{minutsDezena}</span>
      <span className={style.relogioNumero}>{minutsUnity}</span>
      <span className={style.relogioDivisao}>:</span>
      <span className={style.relogioNumero}>{secondsDezena}</span>
      <span className={style.relogioNumero}>{secondsUnity}</span>
    </>
  );
}
