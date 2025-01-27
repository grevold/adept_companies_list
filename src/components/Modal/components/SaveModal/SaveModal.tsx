import { useEffect, useState } from "react";
import { CloseIcon } from "../../../../icons/CloseIcon";
import { companiesStoreActions } from "../../../../store/companiesReducer";
import { useAppDispatch } from "../../../../store/store";
import { Company } from "../../../../types";
import s from "./SaveModal.module.css";
import { NameInput } from "../../../CustomInput/NameInput/NameInput";
import { AddressInput } from "../../../CustomInput/AddressInput/AddressInput";

interface Props {
  closeModal: React.Dispatch<
    React.SetStateAction<{
      isOpened: boolean;
      type: string;
      currentCompany: Company | null;
    }>
  >;
  currentCompany: Company | null;
  type: string;
}

export function SaveModal({ closeModal, currentCompany, type }: Props) {
  const dispatch = useAppDispatch();
  const handleAddCompany = (newCompany: Company) =>
    dispatch(companiesStoreActions.addCompany(newCompany));

  const handleEditCompany = (newCompany: Company) =>
    dispatch(companiesStoreActions.editCompany(newCompany));

  const saveCompany = currentCompany ? handleEditCompany : handleAddCompany;

  const [companyData, setCompanyData] = useState(
    currentCompany
      ? {
          ...currentCompany,
        }
      : { id: 0, name: "", address: "" }
  );

  useEffect(() => {
    if (currentCompany) {
      setCompanyData(currentCompany);
    }
  }, [currentCompany]);

  return (
    <div className={s.root}>
      <div className={s.container}>
        <div className={s.button_close_container}>
          <button
            onClick={() => closeModal((prev) => ({ ...prev, isOpened: false }))}
            className={s.button_close}
          >
            <CloseIcon />
          </button>
        </div>
        <div className={s.modal_container}>
          <span className={s.title}>
            {currentCompany ? "Редактирование компании" : "Создание компании"}
          </span>
          <div className={s.inputs_container}>
            <NameInput onChange={setCompanyData} value={companyData.name} />
            <AddressInput
              onChange={setCompanyData}
              value={companyData.address}
            />
          </div>
          <div className={s.buttons_container}>
            <button
              className={s.button_save}
              onClick={() => {
                saveCompany(companyData);
                closeModal((prev) => ({ ...prev, isOpened: false }));
              }}
            >
              Сохранить
            </button>
            <button
              className={s.button_cancell}
              onClick={() => {
                closeModal((prev) => ({ ...prev, isOpened: false }));
              }}
            >
              Отмена
            </button>
          </div>
        </div>
      </div>
      <div className={s.bg} />
    </div>
  );
}
