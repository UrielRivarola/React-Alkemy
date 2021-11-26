import React from 'react';
import { useNavigate } from "react-router-dom"
import { Formik } from 'formik';
import axios from 'axios';


const InitialForm = () => {
    const navigate = useNavigate()

    return (
        <>
            
            <div className="container d-flex justify-content-center align-items-center">
                <div className="border m-5">
                    <div>
                    <h3 className="text-center">Alkemy React-Challenge</h3>
                </div>
                <Formik
                    initialValues={{
                        email: "",
                        password: ""
                    }}
                    //Validar datos
                    validate={(values) => {
                        let errores = {};

                        if (!values.email) {
                            errores.email = "Ingresa un email"
                        }
                        if (!values.password) {
                            errores.password = "Ingresa un contraseña"
                        }
                        return errores;
                    }}
                    //Interacción con la API
                    onSubmit={(values, { resetForm }) => {

                        axios({
                            method: 'post',
                            url: 'http://challenge-react.alkemy.org/',
                            data: {
                                email: values.email,
                                password: values.password
                            }
                        })
                            .then(response => {
                                localStorage.setItem("token", response.data.token);
                                navigate('/home')
                                console.log(response)
                            })
                            .catch(function () {
                                alert("Tus datos no son válidos, por favor vuelve a intentarlo")
                            });

                        
                        resetForm();

                    }}
                >
                    {({ values, errors, touched, handleSubmit, handleChange, handleBlur }) => (


                        <form onSubmit={handleSubmit}>
                            <div className="">
                                <div className="">
                                <label >Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Tu email"
                                    value={values.email}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                {touched.email && errors.email && <div className="error">{errors.email}</div>}
                            </div>
                            <div className="">
                            <div className="">
                                <label >Contraseña</label>
                                <input
                                    type="password"
                                    name="password"
                                    placeholder="Tu contraseña"
                                    value={values.password}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                {touched.password && errors.password && <div className="error">{errors.password}</div>}
                            </div>
                            <div class="text-center">
                            <button className="btn btn-primary mt-2" type="submit">Enviar</button>
                            </div>
                            </div>
                        </div>
                        </form>
                        
                    )}
                </Formik>
                </div>
            </div>
        </>
    );

}

export default InitialForm;



