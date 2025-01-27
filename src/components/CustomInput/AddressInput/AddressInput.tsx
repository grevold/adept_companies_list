import s from "./AddressInput.module.css";

interface Props {
  value?: string;
  onChange: React.Dispatch<
    React.SetStateAction<{
      id: number;
      name: string;
      address: string;
    }>
  >;
}

export function AddressInput({ value, onChange }: Props) {
  return (
    <input
      value={value}
      onChange={(e) =>
        onChange((prev) => ({ ...prev, address: e.target.value }))
      }
      type="text"
      placeholder="Адрес"
      className={s.root}
    />
  );
}
