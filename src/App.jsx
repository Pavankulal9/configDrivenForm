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
    value: false,
  },
];

function App() {
  const [inputs, setInputs] = useState(structuredClone(Inputs));
  return (
    <fieldset>
      <legend>Sign-Up</legend>
      <FormWrapper inputs={inputs} />
    </fieldset>
  );
}

export default App;
