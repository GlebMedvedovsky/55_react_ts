import { useFormik } from "formik";
import * as Yup from "yup";
import {
  EmployeeFormContainer,
  Title,
  CheckboxContainer,
  ErrorMessage,
  StyledCheckbox,
} from "./styles";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
type EmployeeFormValues = {
  fullName: string;
  age: string;
  termsAccepted: boolean;
};

function EmployeeForm() {
  const schema = Yup.object().shape({
    fullName: Yup.string()
      .required("Full name is required")
      .min(3, "Minimum 3 characters")
      .max(50, "Maximum 50 characters")
      .matches(/^[A-Za-z\s]+$/, "Only letters allowed"),
    age: Yup.number()
      .typeError("Age must be a number")
      .required("Age is required")
      .integer("Age must be an integer")
      .required("Age is required")
      .min(18, "Minimum age is 18")
      .max(80, "Maximum age is 80"),
    termsAccepted: Yup.boolean().oneOf([true], "You must accept the terms"),
  });

  const formik = useFormik<EmployeeFormValues>({
    initialValues: {
      fullName: "",
      age: "",
      termsAccepted: false,
    },
    validationSchema: schema,
    validateOnChange: false,
    onSubmit: (values) => {
      console.log("Form Values:", values);
    },
  });

  return (
    <EmployeeFormContainer onSubmit={formik.handleSubmit}>
      <Title>Employee Form</Title>

      <Input
        name="fullName"
        label="Full Name *"
        placeholder="Enter full name"
        value={formik.values.fullName}
        onChange={formik.handleChange}
        error={formik.errors.fullName}
      />

      <Input
        name="age"
        label="Age *"
        placeholder="Enter your age"
        value={formik.values.age}
        onChange={formik.handleChange}
        error={formik.errors.age}
      />

      <CheckboxContainer>
        <StyledCheckbox>
          <input
            type="checkbox"
            name="termsAccepted"
            checked={formik.values.termsAccepted}
            onChange={formik.handleChange}
          />
         
        </StyledCheckbox>

        {typeof formik.errors.termsAccepted === "string" && (
          <ErrorMessage>{formik.errors.termsAccepted}</ErrorMessage>
        )}
      </CheckboxContainer>

      <Button name="CREATE" />
    </EmployeeFormContainer>
  );
}

export default EmployeeForm;
export type { EmployeeFormValues };
export { EmployeeFormContainer, Title, CheckboxContainer, ErrorMessage };