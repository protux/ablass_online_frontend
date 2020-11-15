import React from "react";
import { useFormik } from "formik";

import { useNavigate } from "react-router-dom";

const RequestAblass = () => {
  const navigate = useNavigate();
  const sins = [
    { id: 1, label: "Völlerei" },
    { id: 2, label: "Neid" },
    { id: 3, label: "Zorn" },
    { id: 4, label: "Wollust" },
    { id: 5, label: "Faulheit" },
    { id: 6, label: "Hochmut" },
    { id: 7, label: "Gier" },
  ];

  const validate = (values) => {
    const errors = { error: "" };

    var hasCheckboxChecked = false;
    const keys = Object.keys(values);
    keys.forEach((key) => {
      if (values[key] === true) {
        hasCheckboxChecked = true;
      }
    });

    if (!hasCheckboxChecked) {
      errors.error = "Es muss mindestens eine Sünde gewählt werden.";
    }

    return errors;
  };

  const mapSinToinitialValue = () => {
    const initialValues = {};
    sins.forEach((sin) => {
      initialValues[sin.id] = false;
    });
    return initialValues;
  };

  const formik = useFormik({
    initialValues: mapSinToinitialValue(),
    validate,
    onSubmit: (values) => {
      console.log("submitted");
      return navigate("/thanks");
    },
  });
  const { getFieldProps } = formik;

  const mapSinToCheckboxes = (sin) => {
    const uniqueSinId = "sin_" + sin.id;
    return (
      <>
        <p>
          <input
            type="checkbox"
            id={uniqueSinId}
            key={uniqueSinId}
            {...getFieldProps(sin.id)}
          />
          <label htmlFor={uniqueSinId}>{sin.label}</label>
        </p>
      </>
    );
  };

  return (
    <>
      <p>Wähle deine Sünden und bitte um Ablass.</p>
      <form onSubmit={formik.handleSubmit}>
        {formik.errors.error && formik.errors.error.length > 0 ? (
          <p>{formik.errors.error}</p>
        ) : null}
        {sins.map(mapSinToCheckboxes)}
        <button type="submit">Bitte um Ablass</button>
      </form>
    </>
  );
};

export default RequestAblass;
