import { EditIcon } from "../../../../icons/EditIcon";
import { RemoveIcon } from "../../../../icons/RemoveIcon";
import { Company } from "../../../../types";
import { Checkbox } from "../../../Checkbox/Checkbox";

import s from "./RowTable.module.css";
import { companiesStoreActions } from "../../../../store/companiesReducer";
import { useAppDispatch } from "../../../../store/store";

interface Props {
  companyData: Company;
  handleRemove: (ids: number[]) => void;
  handleEdit: (currentCompany: Company) => {
    payload: Company;
    type: "companies/editCompany";
  };
  openModal: React.Dispatch<
    React.SetStateAction<{
      isOpened: boolean;
      type: string;
      currentCompany: Company | null;
    }>
  >;
}

export const RowTable = ({
  companyData,
  handleRemove,
  handleEdit,
  openModal,
}: Props) => {
  const dispatch = useAppDispatch();
  return (
    <tr className={s.row_root}>
      <th className={s.checkbox}>
        <Checkbox />
      </th>

      <th className={s.buttons}>
        <button
          className={s.button_remove}
          onClick={() => {
            openModal((prev) => ({
              currentCompany: companyData,
              type: "delete",
              isOpened: true,
            }));
          }}
        >
          <RemoveIcon />
        </button>
        <button
          className={s.button_remove}
          onClick={() => {
            openModal((prev) => ({
              currentCompany: companyData,
              type: "edit",
              isOpened: true,
            }));
          }}
        >
          <EditIcon />
        </button>
      </th>

      <th className={s.company_name}>{companyData.name}</th>
      <th className={s.company_address}>{companyData.address}</th>
    </tr>
  );
};
