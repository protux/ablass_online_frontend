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

  const mapSinToinitialValue = () => {
    const initialValues = {};
    sins.forEach((sin) => {
      initialValues[sin.id] = false;
    });
    return initialValues;
  };

  const formik = useFormik({
    initialValues: mapSinToinitialValue(),

    onSubmit: (values) => {
      return navigate("/thanks");
    },
  });
  const { getFieldProps } = formik;

  const mapSinToCheckboxes = (sin) => {
    return (
      <>
        <p>
          <input
            type="checkbox"
            id={"sin_" + sin.id}
            {...getFieldProps(sin.id)}
          />
          <label for={"sin_" + sin.id}>{sin.label}</label>
        </p>
      </>
    );
  };

  return (
    <>
      <p>Wähle deine Sünden und bitte um Ablass.</p>
      <form onSubmit={formik.handleSubmit}>
        {sins.map(mapSinToCheckboxes)}
        <button type="submit">Bitte um Ablass</button>
      </form>
    </>
  );
};

export default RequestAblass;
