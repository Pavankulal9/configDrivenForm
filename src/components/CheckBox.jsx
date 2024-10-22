export default function CheckBox({
  label,
  id,
  name,
  type,
  checked,
  error,
  index,
  onChange,
  disable,
  readonly,
}) {
  function handleChange() {
    onChange({ id, name, index, type, checked: !checked });
  }
  return (
    <div className="checkbox-box">
      <input
        type="checkbox"
        id={id}
        name={name}
        checked={checked}
        readOnly={readonly}
        disabled={disable}
        onChange={handleChange}
      />
      <label htmlFor={id}>{label}</label>
    </div>
  );
}
