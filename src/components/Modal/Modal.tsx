import s from "./Modal.module.css";

interface Props {
  isOpened: boolean;
}

export function Modal({ isOpened }: Props) {
  return <div className={isOpened ? s.root_visible : s.root_unvisible}></div>;
}
