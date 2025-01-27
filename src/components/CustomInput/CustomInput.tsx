import { Company } from "../../types";
import s from "./CustomInput.module.css";

interface Props {
  type: string;
  placeholder: string;
  currentCompany: Company | null;
}

export function CustomInput({ type, placeholder, currentCompany }: Props) {
  if (type === "edit" && placeholder === "Название компании") {
    return (
      <input
        value={currentCompany?.name}
        type="text"
        placeholder={placeholder}
        className={s.root}
      />
    );
  }
  if (type === "edit" && placeholder === "Адрес") {
    return (
      <input
        value={currentCompany?.address}
        type="text"
        placeholder={placeholder}
        className={s.root}
      />
    );
  }
  return (
    <input type="text" placeholder={placeholder} className={s.root}></input>
  );
}
