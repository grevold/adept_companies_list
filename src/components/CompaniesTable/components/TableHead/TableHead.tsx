import s from "./TableHead.module.css";

export const TableHead = () => {
  return (
    <thead className={s.root}>
      <tr className={s.row}>
        <th className={s.check_all}>
          <button className={s.button_check_all}>Выделить все</button>
        </th>
        <th className={s.item_name}>Название компании</th>
        <th className={s.item_address}>Адрес</th>
      </tr>
    </thead>
  );
};
