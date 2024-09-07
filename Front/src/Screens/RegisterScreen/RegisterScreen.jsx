import React, { useState, useEffect } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { NavLink, useNavigate } from "react-router-dom";
import { createUser, getProfessions } from "../../services/services.js";
import { BloqueInputLabel, Botonera } from "../index.js";
import "./RegisterScreen.css";

const RegisterScreen = () => {
  const [professions, setProfessions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [userLogged, setUserLogged] = useState(null);

  const getCookie = (name) => {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
    return null;
  };
  
  const token = getCookie('token');
  console.log(token);
  

  const navigate = useNavigate();

  const handleGetProfessions = async () => {
    try {
      const response = await getProfessions();
      if (response.status === 200) {
        setProfessions(response.data);
      } else {
        console.log("Error:", response.statusText);
      }
    } catch (error) {
      console.error("Error fetching professions:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    handleGetProfessions();
  }, []);

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("El nombre es obligatorio"),
    last_name: Yup.string().required("El apellido es obligatorio"),
    email: Yup.string()
      .email("Email inválido")
      .required("El email es obligatorio"),
    password: Yup.string()
      .min(8, "La contraseña debe tener al menos 8 caracteres")
      .max(15, "La contraseña no puede tener más de 15 caracteres")
      .matches(
        /[A-Z]/,
        "La contraseña debe contener al menos una letra mayúscula"
      )
      .matches(
        /[a-z]/,
        "La contraseña debe contener al menos una letra minúscula"
      )
      .matches(/[0-9]/, "La contraseña debe contener al menos un número")
      .matches(/[\W_]/, "La contraseña debe contener al menos un símbolo")
      .required("La contraseña es obligatoria"),
    repetir: Yup.string()
      .oneOf([Yup.ref("password"), null], "Las contraseñas deben coincidir")
      .required("Debe confirmar su contraseña"),
    professionId: Yup.string().required("Seleccione una categoría"),
    sexo: Yup.string().required("Seleccione un género"),
  });

  const handleSubmit = async (values) => {

    const userData = {
      name: values.name,
      last_name: values.last_name,
      image: "",
      birthdate: "",
      description: `Soy ${values.professionId}`,
      password: values.password,
      email: values.email,
      tel: "",
      Instagram: `@${values.name}`,
      professionId: values.professionId,
      sexo: values.sexo,
    };

    try {
      const response = await createUser(userData);
      console.log(response)
      if (response.status === 200) {
        Promise.resolve().then(() => {
          navigate("/");
        });
      } else {
        console.log("Error:", response.statusText);
      }
    } catch (error) {
      console.error("Error en el registro:", error);
    }
  };

  const initialValues = {
    name: "",
    last_name: "",
    image: "",
    birthdate: "",
    description: "",
    password: "",
    email: "",
    tel: "",
    Instagram: "",
    professionId: "",
    sexo: "",
    repetir: "",
  };

  return (
    <section className="register">
         {loading ? (
      <div className="loader">Cargando profesiones...</div>
    ) : (
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ handleChange }) => (
          <Form>
            <h2>Registrarse</h2>
            <div className="bloqueSuperior">
              <BloqueSuperior
                professions={professions}
                handleChange={handleChange}
              />
            </div>
            <div>
              <BloqueInputLabel
                label={"Email"}
                name="email"
                component={Field}
              />
              <ErrorMessage name="email" component="div" className="error" />
            </div>
            <div>
              <BloqueInputLabel
                label={"Contraseña"}
                name="password"
                type="password"
                component={Field}
              />
              <ErrorMessage name="password" component="div" className="error" />
            </div>
            <div>
              <BloqueInputLabel
                label={"Repetir contraseña"}
                name="repetir"
                type="password"
                component={({ field, form }) => (
                  <input
                    {...field}
                    type="password"
                    onChange={(e) => {
                      form.setFieldValue("repetir", e.target.value);
                    }}
                    value={field.value}
                  />
                )}
              />
              <ErrorMessage name="repetir" component="div" className="error" />
            </div>

            <div>
              <span>{"¿Ya estás registrado? "}</span>
              <NavLink to={"/login"}>{"Iniciar sesión"}</NavLink>
            </div>
            <Botonera />
          </Form>
        )}
      </Formik>
        )}
    </section>
  );
};

export default RegisterScreen;

const BloqueSuperior = ({ professions, handleChange }) => (
  <>
    <div className="par">
      <BloqueInputLabel label={"Nombre"} name="name" component={Field} />
      <ErrorMessage name="name" component="div" className="error" />
      <BloqueInputLabel label={"Apellido"} name="last_name" component={Field} />
      <ErrorMessage name="last_name" component="div" className="error" />
    </div>
    <div className="par">
      <div className="inputLabel">
        <label>Categoria</label>
        <Field
          as="select"
          name="professionId"
          className="selector"
          id="professionId"
          onChange={handleChange}
        >
          <option value="" label="Seleccione una categoría" />
          {professions?.map((profession, index) => (
            <option key={index} value={profession.name}>
              {profession.name}
            </option>
          ))}
        </Field>
        <ErrorMessage name="professionId" component="div" className="error" />
      </div>
      <div className="inputLabel">
        <label>Sexo</label>
        <Field
          as="select"
          name="sexo"
          className="selector"
          onChange={handleChange}
        >
          <option value="" label="Seleccione su género" />
          <option value="MASCULINO">Masculino</option>
          <option value="FEMENINO">Femenino</option>
          <option value="NO ME IDENTIFICO CON NINGUNA DE LAS ANTERIORES">
            No me identifico con ninguna de las anteriores
          </option>
        </Field>
        <ErrorMessage name="sexo" component="div" className="error" />
      </div>
    </div>
  </>
);
