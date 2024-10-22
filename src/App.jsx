import { useState } from "react";
import "./App.css";
import FormWrapper from "./components/FormWrapper";

const Inputs = [
  {
    id: "first_name",
    name: "first_name",
    type: "text",
    placeholder: "Enter your first name",
    error: "",
    disabled: false,
    readonly: false,
    label: "First Name",
    value: "",
  },
  {
    id: "last_name",
    name: "last_name",
    type: "text",
    placeholder: "Enter your last name",
    error: "",
    disabled: false,
    readonly: false,
    label: "Last Name",
    value: "",
  },
  {
    id: "email",
    name: "email",
    type: "email",
    placeholder: "Enter your Email",
    error: "",
    disabled: false,
    readonly: false,
    label: "Email",
    value: "",
  },
  {
    id: "phone_number",
    name: "phone_number",
    type: "number",
    placeholder: "Enter your phone no",
    error: "",
    disabled: false,
    readonly: false,
    label: "Phone no",
    value: "",
  },
  {
    id: "accept_condition",
    name: "accept_condition",
    type: "checkbox",
    checked: false,
    error: "",
    disabled: false,
    readonly: false,
    label: "Accept T&C",
    value: "accept_term",
  },
];

function App() {
  const [inputs, setInputs] = useState(structuredClone(Inputs));

  function onInputChange({ id, name, index, value, type, checked }) {
    const oldInputs = structuredClone(inputs);
    console.log(checked);
    if (type === "checkbox") {
      oldInputs[index].checked = checked;
    } else {
      oldInputs[index].value = value;
    }

    setInputs(oldInputs);
  }

  function onCancel() {
    setInputs(Inputs);
  }

  function onSubmit() {
    const params = {};

    inputs.forEach((input) => {
      if (input.type === "checkbox") {
        if (input.checked) {
          params[input.name] = input.value;
        }
      } else {
        params[input.name] = input.value;
      }
    });
    console.log(params);
  }

  return (
    <fieldset>
      <legend>Sign-Up</legend>
      <FormWrapper
        inputs={inputs}
        onInputChange={onInputChange}
        onCancel={onCancel}
        onSubmit={onSubmit}
      />
    </fieldset>
  );
}

export default App;
