import React from "react";
import { Formik, Form, useFormik, Field } from "formik";
import { useState } from "react";

function FormComponent() {
  const [tigerSelected, setTigerSelected] = useState(false); // state to check whether to show the textbox or not

  function validateEmail(email) {
    var re = /\S+@\S+\.\S+/; //using regex for a format of 'anything@anything.anything'
    return re.test(email);
  }

  function validate(values) {
    const errors = {};
    if (!values.email) {
      errors.email = "REQUIRED";
    } else if (!validateEmail(values.email)) {
      errors.email = "EMAIL NOT VALID";
    }
    if (!values.password) {
      errors.password = "REQUIRED";
    } else if (values.password.length <= 8) {
      errors.password = "MUST BE ATLEAST 8 CHARACTERS";
    }
    if (!values.colour) {
      errors.colour = "REQUIRED";
    }
    if (values.animal === []) {
      errors.animal = "REQUIRED";
    }
    if (tigerSelected) {
      if (!values.tigerBox) {
        errors.tigerBox = "REQUIRED";
      }
    }
    return errors;
  }
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      colour: "",
      animal: [],
      tigerBox: "",
    },
    validate,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <>
      <h1 className="py-5">Contact Form</h1>

      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="email">Email</label>
        <input
          className="form-control"
          onChange={formik.handleChange}
          value={formik.values.email}
          type="text"
          id="email"
          name="email"
          onBlur={formik.handleBlur}
        />
        {formik.touched.email && formik.errors.email ? (
          <div className="invalid-feedback d-block">{formik.errors.email}</div>
        ) : (
          ""
        )}
        <br></br>
        <label htmlFor="password">Password</label>
        <input
          className="form-control"
          onChange={formik.handleChange}
          value={formik.values.password}
          type="password"
          id="password"
          name="password"
          onBlur={formik.handleBlur}
        />
        {formik.touched.password && formik.errors.password ? (
          <div className="invalid-feedback d-block">
            {formik.errors.password}
          </div>
        ) : (
          ""
        )}
        <div className="py-2">
          <h3> Colours</h3>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              id="Blue"
              name="colour"
              value="Blue"
              onChange={formik.handleChange}
            />
            <label className="form-check-label" for="Blue">
              Blue
            </label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              id="Green"
              name="colour"
              value="Green"
              onChange={formik.handleChange}
            />
            <label className="form-check-label" for="Green">
              Green
            </label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              id="Red"
              name="colour"
              value="Red"
              onChange={formik.handleChange}
            />
            <label className="form-check-label" for="Red">
              Red
            </label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              id="Black"
              name="colour"
              value="Black"
              onChange={formik.handleChange}
            />
            <label className="form-check-label" for="Black">
              Black
            </label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              id="Brown"
              name="colour"
              value="Brown"
              onChange={formik.handleChange}
            />
            <label className="form-check-label" for="Brown">
              Brown
            </label>
          </div>
        </div>
        <div className="py-3">
          <h3> Animals</h3>
          <div className="form-check form-switch">
            <input
              className="form-check-input"
              type="checkbox"
              id="Bear"
              name="animal"
              value="Bear"
              onClick={formik.handleChange}
            />
            <label className="form-check-label" for="Bear">
              Bear
            </label>
          </div>
          <br></br>
          <div className="form-check form-switch">
            <input
              className="form-check-input"
              type="checkbox"
              id="Tiger"
              name="animal"
              value="Tiger"
              onClick={(e) => {
                setTigerSelected(!tigerSelected);
                formik.handleChange(e);
              }}
            />
            <label className="form-check-label" for="Tiger">
              Tiger
            </label>
          </div>
          <br></br>
          <div className="form-check form-switch">
            <input
              className="form-check-input"
              type="checkbox"
              id="Snake"
              name="animal"
              value="Snake"
              onClick={formik.handleChange}
            />
            <label className="form-check-label" for="Snake">
              Snake
            </label>
          </div>
          <br></br>
          <div className="form-check form-switch">
            <input
              className="form-check-input"
              type="checkbox"
              id="Donkey"
              name="animal"
              value="Donkey"
              onClick={formik.handleChange}
            />
            <label className="form-check-label" for="Donkey">
              Donkey
            </label>
          </div>
        </div>
        {tigerSelected ? (
          <div className="py-3">
            <label htmlFor="tigerBox">Type of Tiger</label>
            <input
              className="form-control"
              onChange={formik.handleChange}
              value={formik.values.tigerBox}
              type="text"
              id="tigerBox"
              name="tigerBox"
              onBlur={formik.handleBlur}
            />
            {formik.touched.tigerBox && formik.errors.tigerBox ? (
              <div className="invalid-feedback d-block">
                {formik.errors.tigerBox}
              </div>
            ) : (
              ""
            )}
          </div>
        ) : (
          ""
        )}
        <button className="btn btn-secondary btn-lg btn-block" type="submit">
          REGISTER
        </button>
      </form>
    </>
  );
}
export default FormComponent;
