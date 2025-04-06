import { ErrorMessage, useFormik } from "formik";
import * as Yup from "yup";
import { EmployeeFormContainer, Title, CheckboxContainer } from "./styles";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import { EmployeeFormValues } from "./types";

function EmployeeForm() {
  const schema = Yup.object().shape({
    fullName: Yup.string()
      .required("Full name is required")
      .min(3, "Minimum 3 characters")
      .max(50, "Maximum 50 characters")
      .matches(/^[A-Za-z\s]+$/, "Only letters allowed"),
    age: Yup.number()
      .typeError("Age must be a number")
      .integer("Age must be an integer")
      .required("Age is required")
      .min(18, "Minimum age is 18")
      .max(80, "Maximum age is 80")
      .required("Age is required"),
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
        <label>
          <input
            type="checkbox"
            name="termsAccepted"
            checked={formik.values.termsAccepted}
            onChange={formik.handleChange}
          />
          I accept the terms of use
        </label>
        {formik.errors.termsAccepted && (
          <div style={{ color: "red", fontSize: "14px" }}>
            {formik.errors.termsAccepted}
          </div>
        )}
      </CheckboxContainer>

      <Button name="CREATE" />
    </EmployeeFormContainer>
  );
}

export default EmployeeForm;
