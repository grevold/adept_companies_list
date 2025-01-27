import { useEffect, useState } from "react";
import s from "./Checkbox.module.css";

interface Props {
  onClick: React.Dispatch<React.SetStateAction<number[]>>;
  isSelect: boolean;
  companyId: number;
}
export function Checkbox({ onClick, isSelect, companyId }: Props) {
  const [isChecked, setIsChecked] = useState(false);
  useEffect(() => {
    setIsChecked((prev) => !prev);
  }, [isSelect]);
  return (
    <div
      className={isChecked ? s.custom_active : s.custom}
      onClick={
        isSelect
          ? () => {
              onClick((prev) => prev.filter((rowId) => rowId !== companyId));
            }
          : () => {
              onClick((prev) => [...prev, companyId]);
            }
      }
    ></div>
  );
}
