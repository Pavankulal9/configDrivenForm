import TextField from "./TextField";
import CheckBox from "./CheckBox";

export default function FormWrapper({
  inputs,
  onInputChange,
  onCancel,
  onSubmit,
}) {
  function handleSubmit(e) {
    e.preventDefault();
    onSubmit();
  }
  return (
    <form className="form-box" onSubmit={handleSubmit}>
      {inputs.map((input, index) => {
        if (input.type === "checkbox") {
          return (
            <CheckBox
              index={index}
              onChange={onInputChange}
              key={input.id}
              {...input}
            />
          );
        }
        return (
          <TextField
            index={index}
            onChange={onInputChange}
            key={input.id}
            {...input}
          />
        );
      })}
      <div className="form-button">
        <button className="cancel-button" onClick={onCancel}>
          Cancel
        </button>
        <button className="submit-button" type="submit">
          Submit
        </button>
      </div>
    </form>
  );
}
