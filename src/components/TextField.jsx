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
}) {
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
      />
    </div>
  );
}
