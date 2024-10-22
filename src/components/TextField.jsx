export default function TextField({
  label,
  id,
  name,
  type = "text",
  value,
  placeholder,
  error,
  disable,
  readonly,
  index,
  onChange,
}) {
  function handleChange(e) {
    onChange({ id, name, type, index, value: e.target.value });
  }

  return (
    <div className="input-box">
      <label htmlFor={id}>{label}</label>
      <input
        type={type}
        id={id}
        name={name}
        value={value}
        placeholder={placeholder}
        readOnly={readonly}
        disabled={disable}
        onChange={handleChange}
      />
    </div>
  );
}
