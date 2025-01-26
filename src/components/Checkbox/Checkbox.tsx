import { useState } from "react";

import s from "./Checkbox.module.css";
export function Checkbox() {
  const [isChecked, setIsChecked] = useState(false);
  return (
    <label>
      <input
        className={s.root}
        type="checkbox"
        onChange={() => {
          setIsChecked(!isChecked);
        }}
      />
    </label>
  );
}
