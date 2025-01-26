import { useSelector } from "react-redux";

import s from "./MainPage.module.css";
import { COMPANIES } from "../../constants";
import { CompaniesTable } from "../../components/CompaniesTable/CompaniesTable";
import { useAppSelector } from "../../store/store";

export const MainPage = () => {
  const data = useAppSelector((store) => store.companiesReducer.companies);
  console.log(data);
  return (
    <div className={s.root}>
      <CompaniesTable companies={data} />
    </div>
  );
};
