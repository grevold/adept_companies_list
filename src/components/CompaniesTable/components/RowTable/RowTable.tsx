import { EditIcon } from "../../../../icons/EditIcon";
import { RemoveIcon } from "../../../../icons/RemoveIcon";
import { Company } from "../../../../types";
import { Checkbox } from "../../../Checkbox/Checkbox";

import s from "./RowTable.module.css";

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
      multipleChoice: number[];
    }>
  >;
  selectRows: React.Dispatch<React.SetStateAction<number[]>>;
  isSelectRow: boolean;
}

export const RowTable = ({
  companyData,
  openModal,
  selectRows,
  isSelectRow,
}: Props) => {
  return (
    <tr className={isSelectRow ? s.row_root_selected : s.row_root}>
      <th className={s.checkbox}>
        <Checkbox
          companyId={companyData.id}
          isSelect={isSelectRow}
          onClick={selectRows}
        />
      </th>

      <th className={s.buttons}>
        <button
          className={s.button_remove}
          onClick={() => {
            openModal((prev) => ({
              ...prev,
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
              ...prev,
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
