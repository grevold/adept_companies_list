import { useCallback } from "react";
import { EditIcon } from "../../../../icons/EditIcon";
import { RemoveIcon } from "../../../../icons/RemoveIcon";
import { Company } from "../../../../types";
import { Checkbox } from "../../../Checkbox/Checkbox";

import s from "./RowTable.module.css";
import { companiesStoreActions } from "../../../../store/companiesReducer";

interface Props {
  companyData: Company;
  keyId: number;
  handleRemove: (ids: number[]) => void;
  handleEdit: (newCompany: Company) => {
    payload: Omit<Company, "id">;
    type: "companies/saveCompany";
  };
}

export const RowTable = ({
  companyData,
  handleRemove,
  handleEdit,
  keyId,
}: Props) => {
  return (
    <tr key={keyId} className={s.row_root}>
      <th className={s.checkbox}>
        <Checkbox />
      </th>

      <th className={s.buttons}>
        <button
          className={s.button_remove}
          onClick={() => handleRemove([companyData.id])}
        >
          <RemoveIcon />
        </button>
        <button
          className={s.button_remove}
          onClick={() => handleEdit(companyData)}
        >
          <EditIcon />
        </button>
      </th>

      <th className={s.company_name}>{companyData.name}</th>
      <th className={s.company_address}>{companyData.address}</th>
    </tr>
  );
};
