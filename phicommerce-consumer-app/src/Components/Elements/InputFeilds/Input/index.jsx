import CustomDropdown from "./Dropdown/Dropdown.jsx";
import CustomInput from "./Input/Input.jsx";
import ChecksInput from "./Input/ChecksInput.jsx";
import RadioInput from "./Input/RadioInput.jsx";

export const InputFields = {
    TextInput: CustomInput,
    PasswordInput: CustomInput,
    RadioInput: RadioInput,
    CheckboxInput: ChecksInput,
    Dropdown: CustomDropdown
}