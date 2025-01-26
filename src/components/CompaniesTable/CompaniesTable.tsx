import s from "./CompaniesTable.module.css";
import { CompaniesList, Company } from "../../types";
import { RowTable } from "./components/RowTable/RowTable";
import { TableHead } from "./components/TableHead/TableHead";
import { AddIcon } from "../../icons/AddIcon";
import { useAppDispatch } from "../../store/store";
import { companiesStoreActions } from "../../store/companiesReducer";

interface Props {
  companies: CompaniesList;
}

export function CompaniesTable({ companies }: Props) {
  const dispatch = useAppDispatch();

  const handleRemoveCompany = (ids: number[]) => {
    dispatch(companiesStoreActions.removeCompanies(ids));
  };

  const handleAddCompany = (newCompany: Company) =>
    dispatch(companiesStoreActions.saveCompany(newCompany));

  const handleEditCompany = (newCompany: Company) =>
    dispatch(companiesStoreActions.saveCompany(newCompany));

  return (
    <>
      <div className={s.table_header}>
        <h2>Список компаний</h2>
        <button
          className={s.button_add_company}
          onClick={() => {
            handleAddCompany({
              id: 90,
              name: "Конь",
              address: "г. Самара, ул.Южная 12 А",
            });
          }}
        >
          <AddIcon />
        </button>
      </div>

      <table className={s.root}>
        <TableHead />
        <tbody className={s.list}>
          {Object.values(companies).map((companyData) => (
            <RowTable
              keyId={companyData.id}
              companyData={companyData}
              handleRemove={handleRemoveCompany}
              handleEdit={handleEditCompany}
            />
          ))}
        </tbody>
      </table>
    </>
  );
}
