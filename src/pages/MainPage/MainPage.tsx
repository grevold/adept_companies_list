import s from "./MainPage.module.css";

import { CompaniesTable } from "../../components/CompaniesTable/CompaniesTable";
import { useAppSelector } from "../../store/store";

export const MainPage = () => {
  const data = useAppSelector((store) => store.companiesReducer.companies);

  return (
    <div className={s.root}>
      <CompaniesTable companies={data} />
    </div>
  );
};
