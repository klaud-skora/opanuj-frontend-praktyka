interface InputProps {
  value: number;
  onChange: (e: number) => void;
}

export const Input = ({ value, onChange }: InputProps) => (
  <input
    type="number"
    className="rounded-md shadow-md p-4"
    value={value}
    onChange={(e) => {
      onChange(parseFloat(e.target.value));
    }}
  />
);
