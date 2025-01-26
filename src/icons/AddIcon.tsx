interface Props {
  className?: string;
}

export function AddIcon({ className }: Props) {
  return (
    <svg viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="10" stroke="#3363df" strokeWidth="1.5" />
      <path
        d="M15 12L12 12M12 12L9 12M12 12L12 9M12 12L12 15"
        stroke="#3363df"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}
