import { CloseIcon } from "../../../../icons/CloseIcon";
import { Company } from "../../../../types";
import s from "./DeleteModal.module.css";

interface Props {
  closeModal: React.Dispatch<
    React.SetStateAction<{
      isOpened: boolean;
      type: string;
      currentCompany: Company | null;
    }>
  >;
  removeCompany: (ids: number[]) => void;
  currentCompany: Company | null;
}

export function DeleteModal({
  closeModal,
  removeCompany,
  currentCompany,
}: Props) {
  if (currentCompany) {
    return (
      <div className={s.root}>
        <div className={s.container}>
          <div className={s.button_close_container}>
            <button
              onClick={() =>
                closeModal((prev) => ({ ...prev, isOpened: false }))
              }
              className={s.button_close}
            >
              <CloseIcon />
            </button>
          </div>
          <div className={s.modal_container}>
            <span className={s.warning}>
              Вы уверены, что хотите удалить компанию?
            </span>
            <div className={s.current_company_container}>
              <span className={s.current_company}>
                <b>Компания:</b> {currentCompany.name}
              </span>
              <span className={s.current_company}>
                <b>Адрес:</b> {currentCompany.address}
              </span>
            </div>
            <div className={s.buttons_container}>
              <button
                className={s.button_approval}
                onClick={() => {
                  removeCompany([currentCompany.id]);
                  closeModal((prev) => ({ ...prev, isOpened: false }));
                }}
              >
                Удалить
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
          <span className={s.warning}>Компания не найдена</span>
        </div>
      </div>
      <div className={s.bg} />
    </div>
  );
}
