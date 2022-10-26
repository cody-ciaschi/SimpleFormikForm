import React from "react";
import { useFormik } from "formik";
// TODO: import useFormik from formik library

function App() {
  // TODO: add a const called formik assigned to useFormik()
  const formik = useFormik({
    initialValues: {
      emailField: "",
      pswField: "",
    },
    onSubmit: (values) => {
      if (!formik.errors.emailField && !formik.errors.pswField) {
        window.alert("Login Successful");
      }
    },
    validate: (values) => {
      let errors = {};
      if (!values.emailField) {
        errors.emailField = "Field Required";
      } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.emailField)
      ) {
        errors.emailField = "Username should be an email";
      }

      if (!values.pswField) errors.pswField = "Field Required";

      return errors;
    },
  });

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <div>Email</div>
        <input
          id="emailField"
          type="text"
          name="emailField"
          value={formik.values.emailField}
          onChange={formik.handleChange}
        ></input>
        <div id="emailError" style={{ color: "red" }}>
          {formik.errors.emailField}
        </div>
        <div>Password</div>
        <input
          id="pswField"
          type="text"
          name="pswField"
          value={formik.values.pswField}
          onChange={formik.handleChange}
        ></input>
        <div id="pswError" style={{ color: "red" }}>
          {formik.errors.pswField}
        </div>
        <button id="submitBtn" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default App;
