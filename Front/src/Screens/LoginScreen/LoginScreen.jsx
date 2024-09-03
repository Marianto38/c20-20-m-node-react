import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import { BloqueInputLabel, Botonera } from '../index.js';
import './LoginScreen.css';
import { login } from '../../services/services.js';

const LoginScreen = () => {
    const navigate = useNavigate();

    // Schema de validación con Yup
    const validationSchema = Yup.object().shape({
        email: Yup.string().email('Email inválido').required('El email es obligatorio'),
        password: Yup.string().min(8, 'La contraseña debe tener al menos 8 caracteres').required('La contraseña es obligatoria')
    });

    // Manejo de envío del formulario
    const handleSubmit = async (values, { setSubmitting }) => {
        try {
            const response = await login(values);
            console.log(response);

            if (response.status === 200) {
                navigate("/");
            } else {
                console.log("Error:", response.statusText);
            }
        } catch (error) {
            console.error("Login failed:", error);
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <div className='login'>
            <Formik
                initialValues={{ email: '', password: '' }}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
            >
                {({ isSubmitting }) => (
                    <Form>
                        <h2>Inicio de sesión</h2>
                        <div className='bloqueCentro'>
                            <div>
                                <label htmlFor="email">Email</label>
                                <Field type="email" name="email" as={BloqueInputLabel} fontSize={'23px'} />
                                <ErrorMessage name="email" component="div" className="error" />
                            </div>
                            <div>
                                <label htmlFor="password">Contraseña</label>
                                <Field type="password" name="password" as={BloqueInputLabel} fontSize={'23px'} />
                                <ErrorMessage name="password" component="div" className="error" />
                            </div>
                            <div>
                                <span>{'¿No estás registrado? '}</span>
                                <NavLink to={'/sign-up'}>
                                    {'Regístrate'}
                                </NavLink>
                            </div>
                        </div>
                        <Botonera />
                        <button type="submit" disabled={isSubmitting}>Iniciar sesión</button>
                    </Form>
                )}
            </Formik>
        </div>
    );
}

export default LoginScreen;
