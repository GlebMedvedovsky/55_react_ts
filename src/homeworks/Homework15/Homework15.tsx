import Checkbox from "../../components/Checkbox/Checkbox";
import {
  Homework15Container,
  FieldContainer,
  ErrorMessage,
  CheckboxContainer,
} from "./styles";
import { useFormik } from "formik";
import * as Yup from "yup";

const Homework15 = () => {
  const formik = useFormik({
    initialValues: {
      numberField: "",
      privacy: false,
    },
    validationSchema: Yup.object({
      numberField: Yup.string()
        .required("This field is required")
        .matches(/^\d+$/, "Must be a number")
        .length(6, "Must be exactly 6 characters"),
      privacy: Yup.boolean().oneOf(
        [true],
        "You must accept the privacy policy"
      ),
    }),
    onSubmit: (values) => {
      console.log("Вы успешно вошли");
      console.log("Form submitted with values:", values);
    },
  });

  return (
    <Homework15Container>
      <form onSubmit={formik.handleSubmit}>
        <FieldContainer>
          <label htmlFor="numberField">Number Field</label>
          <input
            id="numberField"
            name="numberField"
            type="text"
            value={formik.values.numberField}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {typeof formik.errors.numberField === "string" && (
            <ErrorMessage>{formik.errors.numberField}</ErrorMessage>
          )}
        </FieldContainer>

        <CheckboxContainer>
          <Checkbox
            name="privacy"
            label="I accept the privacy policy"
            checked={formik.values.privacy}
            onChange={formik.handleChange}
          />
          {typeof formik.errors.privacy === "string" && (
            <ErrorMessage>{formik.errors.privacy}</ErrorMessage>
          )}
        </CheckboxContainer>

        <button type="submit">Login</button>
      </form>
    </Homework15Container>
  );
};

export default Homework15;
