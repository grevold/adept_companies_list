import { companiesStoreActions } from "../../store/companiesReducer";
import { useAppDispatch } from "../../store/store";
import { Company } from "../../types";
import { DeleteModal } from "./components/DeleteModal/DeleteModal";
import { SaveModal } from "./components/SaveModal/SaveModal";
import s from "./Modal.module.css";

interface Props {
  isOpenedModal: boolean;
  setIsOpenedModal: React.Dispatch<
    React.SetStateAction<{
      isOpened: boolean;
      type: string;
      currentCompany: Company | null;
      multipleChoice: number[];
    }>
  >;
  type: string;
  currentCompany: Company | null;
  multipleChoice: number[];
  setMultipleChoice: React.Dispatch<React.SetStateAction<number[]>>;
}

export function Modal({
  isOpenedModal,
  setIsOpenedModal,
  type,
  currentCompany,
  multipleChoice,
  setMultipleChoice,
}: Props) {
  const dispatch = useAppDispatch();
  const handleRemoveCompany = (ids: number[]) => {
    dispatch(companiesStoreActions.removeCompanies(ids));
  };

  if (type === "delete") {
    return (
      <div className={isOpenedModal ? s.root_visible : s.root_unvisible}>
        <div className={s.container}>
          <DeleteModal
            closeModal={setIsOpenedModal}
            removeCompany={handleRemoveCompany}
            currentCompany={currentCompany}
            multipleChoice={multipleChoice}
            setMultipleChoice={setMultipleChoice}
          />
        </div>
        <div
          className={s.bg}
          onClick={() =>
            setIsOpenedModal((prev) => ({
              ...prev,
              isOpened: false,
              currentCompany: null,
            }))
          }
        />
      </div>
    );
  }

  if (type === "edit") {
    return (
      <div className={isOpenedModal ? s.root_visible : s.root_unvisible}>
        <div className={s.container}>
          <SaveModal
            closeModal={setIsOpenedModal}
            currentCompany={currentCompany}
            type="edit"
          />
        </div>
        <div
          className={s.bg}
          onClick={() =>
            setIsOpenedModal((prev) => ({
              ...prev,
              isOpened: false,
              currentCompany: null,
            }))
          }
        />
      </div>
    );
  }

  return (
    <div className={isOpenedModal ? s.root_visible : s.root_unvisible}>
      <div className={s.container}>
        <SaveModal
          closeModal={setIsOpenedModal}
          currentCompany={currentCompany}
          type="add"
        />
      </div>
      <div
        className={s.bg}
        onClick={() =>
          setIsOpenedModal((prev) => ({ ...prev, isOpened: false }))
        }
      />
    </div>
  );
}
