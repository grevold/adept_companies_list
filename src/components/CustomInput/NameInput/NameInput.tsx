import s from "./NameInput.module.css";

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

export function NameInput({ value, onChange }: Props) {
  console.log(value);
  return (
    <input
      onChange={(e) => onChange((prev) => ({ ...prev, name: e.target.value }))}
      value={value}
      type="text"
      placeholder="Название"
      className={s.root}
    />
  );
}
