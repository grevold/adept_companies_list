import { CloseIcon } from "../../../../icons/CloseIcon";
import { Company } from "../../../../types";
import s from "./DeleteModal.module.css";

interface Props {
  closeModal: React.Dispatch<
    React.SetStateAction<{
      isOpened: boolean;
      type: string;
      currentCompany: Company | null;
      multipleChoice: number[];
    }>
  >;
  removeCompany: (ids: number[]) => void;
  currentCompany: Company | null;
  multipleChoice: number[];
  setMultipleChoice: React.Dispatch<React.SetStateAction<number[]>>;
}

export function DeleteModal({
  closeModal,
  removeCompany,
  currentCompany,
  multipleChoice,
  setMultipleChoice,
}: Props) {
  console.log(currentCompany);
  console.log(multipleChoice);
  if (currentCompany) {
    return (
      <div className={s.root}>
        <div className={s.container}>
          <div className={s.button_close_container}>
            <button
              onClick={() =>
                closeModal((prev) => ({
                  ...prev,
                  isOpened: false,
                  currentCompany: null,
                }))
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
                  closeModal((prev) => ({
                    ...prev,
                    isOpened: false,
                    currentCompany: null,
                  }));
                }}
              >
                Удалить
              </button>
              <button
                className={s.button_cancell}
                onClick={() => {
                  closeModal((prev) => ({
                    ...prev,
                    isOpened: false,
                    currentCompany: null,
                  }));
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
  if (multipleChoice) {
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
              Вы уверены, что хотите удалить выделенные {multipleChoice.length}{" "}
              компаний?
            </span>

            <div className={s.buttons_container}>
              <button
                className={s.button_approval}
                onClick={() => {
                  removeCompany(multipleChoice);
                  setMultipleChoice([]);
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
