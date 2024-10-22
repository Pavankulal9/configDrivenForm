export default function CheckBox({
  label,
  id,
  name,
  type,
  checked,
  error,
  disable,
  readonly,
}) {
  return (
    <div className="checkbox-box">
      <input
        type="checkbox"
        id={id}
        name={name}
        checked={checked}
        readOnly={readonly}
        disabled={disable}
      />
      <label htmlFor={id}>{label}</label>
    </div>
  );
}
