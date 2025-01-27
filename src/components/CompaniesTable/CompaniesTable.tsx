import s from "./CompaniesTable.module.css";
import { CompaniesList, Company } from "../../types";
import { RowTable } from "./components/RowTable/RowTable";
import { TableHead } from "./components/TableHead/TableHead";
import { AddIcon } from "../../icons/AddIcon";
import { useAppDispatch } from "../../store/store";
import { companiesStoreActions } from "../../store/companiesReducer";
import { Modal } from "../Modal/Modal";
import { useState } from "react";

interface Props {
  companies: CompaniesList;
}

export function CompaniesTable({ companies }: Props) {
  const [isOpenedModal, setIsOpenedModal] = useState<{
    isOpened: boolean;
    type: string;
    currentCompany: Company | null;
  }>({
    isOpened: false,
    type: "",
    currentCompany: null,
  });
  const dispatch = useAppDispatch();

  const handleRemoveCompany = (ids: number[]) => {
    dispatch(companiesStoreActions.removeCompanies(ids));
  };

  const handleEditCompany = (currentCompany: Company) =>
    dispatch(companiesStoreActions.editCompany(currentCompany));

  return (
    <>
      <Modal
        isOpenedModal={isOpenedModal.isOpened}
        setIsOpenedModal={setIsOpenedModal}
        type={isOpenedModal.type}
        currentCompany={isOpenedModal.currentCompany}
      />
      <div className={s.table_header}>
        <h2>Список компаний</h2>
        <button
          className={s.button_add_company}
          onClick={() => {
            setIsOpenedModal((prev) => ({
              type: "add",
              isOpened: true,
              currentCompany: null,
            }));
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
              companyData={companyData}
              handleRemove={handleRemoveCompany}
              handleEdit={handleEditCompany}
              openModal={setIsOpenedModal}
            />
          ))}
        </tbody>
      </table>
    </>
  );
}
