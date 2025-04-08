import { CheckboxContainer, Label, StyledCheckbox, ErrorMessage } from "./styles";
import { CheckboxProps } from "./types";

function Checkbox({ label, name, checked, onChange, error }: CheckboxProps) {
  return (
    <CheckboxContainer>
      <Label>
        <StyledCheckbox
          type="checkbox"
          name={name}
          checked={checked}
          onChange={onChange}
        />
        {label}
      </Label>
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </CheckboxContainer>
  );
}

export default Checkbox;