import TextField from "./TextField";
import CheckBox from "./CheckBox";

export default function FormWrapper({ inputs }) {
  return (
    <div className="form-box">
      {inputs.map((input) => {
        if (input.type === "checkbox") {
          return <CheckBox key={input.id} {...input} />;
        }
        return <TextField key={input.id} {...input} />;
      })}
    </div>
  );
}
