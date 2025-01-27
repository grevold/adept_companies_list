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
  const [selectedRows, setSelectedRows] = useState<number[]>([]);

  const [isOpenedModal, setIsOpenedModal] = useState<{
    isOpened: boolean;
    type: string;
    currentCompany: Company | null;
    multipleChoice: number[];
  }>({
    isOpened: false,
    type: "",
    currentCompany: null,
    multipleChoice: selectedRows,
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
        multipleChoice={selectedRows}
        setMultipleChoice={setSelectedRows}
      />

      <div className={s.table_header}>
        <h2>Список компаний</h2>
        <button
          className={s.button_add_company}
          onClick={() => {
            setIsOpenedModal((prev) => ({
              ...prev,
              type: "add",
              isOpened: true,
              currentCompany: null,
            }));
          }}
        >
          <AddIcon />
        </button>
      </div>
      <div className={s.multiple_choice}>
        <span className={s.multiple_choice_count}>
          Выбрано: {selectedRows.length}
        </span>
        {selectedRows.length > 0 ? (
          <div className={s.multiple_choice_buttons}>
            <button
              className={s.multiple_choice_delete_button}
              onClick={() => {
                setIsOpenedModal((prev) => ({
                  ...prev,
                  type: "delete",
                  isOpened: true,
                  multipleChoice: selectedRows,
                }));
              }}
            >
              Удалить выбранные
            </button>
            <button
              className={s.multiple_choice_cancell_button}
              onClick={() => setSelectedRows([])}
            >
              Снять выделение
            </button>
          </div>
        ) : null}
      </div>

      <table className={s.root}>
        <TableHead companies={companies} setMultipleChoice={setSelectedRows} />
        <tbody className={s.list}>
          {Object.values(companies)
            .sort((a, b) => b.id - a.id)
            .map((companyData) => (
              <RowTable
                companyData={companyData}
                handleRemove={handleRemoveCompany}
                handleEdit={handleEditCompany}
                openModal={setIsOpenedModal}
                selectRows={setSelectedRows}
                isSelectRow={selectedRows.includes(companyData.id)}
              />
            ))}
        </tbody>
      </table>
    </>
  );
}
