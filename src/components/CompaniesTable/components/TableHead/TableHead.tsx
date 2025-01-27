import { CompaniesList, Company } from "../../../../types";
import s from "./TableHead.module.css";

interface Props {
  companies: CompaniesList;
  setMultipleChoice: React.Dispatch<React.SetStateAction<number[]>>;
}

export const TableHead = ({ setMultipleChoice, companies }: Props) => {
  const handleMultipleChoice = () => {
    const array = Object.values(companies).map((company) => company.id);
    setMultipleChoice(array);
  };
  return (
    <thead className={s.root}>
      <tr className={s.row}>
        <th className={s.check_all}>
          <button className={s.button_check_all} onClick={handleMultipleChoice}>
            Выделить все
          </button>
        </th>
        <th className={s.item_name}>Название компании</th>
        <th className={s.item_address}>Адрес</th>
      </tr>
    </thead>
  );
};
