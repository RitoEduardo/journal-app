import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import validator from 'validator';

export const RegisterScreen = () => {

    
    const initialForm = {
        name: '',
        email: '',
        password: '',
        password2: '',
    };
    
    const [ { name, email, password, password2 }, handleInputChange , reset ] = useForm( initialForm );

    const handleRegister = (ev) => {
        ev.preventDefault();
        if( isFormValid() ){
            console.log( name, email, password, password2 )
            // reset();
        }

        
    }

    const isFormValid = () => {

        let err = '';
        if( name.trim().lenght === 0 ){
            err = 'Name is required';
        } else if( !validator.isEmail(email) ){
            err = 'Name is not valid';
        } else if( password !== password2 || password2.lenght < 5 ){
            err = 'Password should be at leasted characters and match each other';
        }

        return err === '' ? true : false;

    }

    return (
        <>
            <h3 className="auth__title">Register</h3>

            <form onSubmit={ handleRegister }>

                <div className="auth__alert-error">
                    Error
                </div>

                <input 
                    type="text"
                    placeholder="Name"
                    name="name"
                    className="auth__input"
                    autoComplete="off"
                    value={ name }
                    onChange={ handleInputChange }
                />

                <input 
                    type="text"
                    placeholder="Email"
                    name="email"
                    className="auth__input"
                    autoComplete="off"
                    value={ email }
                    onChange={ handleInputChange }
                />

                <input 
                    type="password"
                    placeholder="Password"
                    name="password"
                    className="auth__input"
                    value={ password }
                    onChange={ handleInputChange }
                />

                <input 
                    type="password"
                    placeholder="Confirm password"
                    name="password2"
                    className="auth__input"
                    value={ password2 }
                    onChange={ handleInputChange }
                />


                <button
                    type="submit"
                    className="btn btn-primary btn-block mb-5"
                >
                    Register
                </button>

               

                <Link 
                    to="/auth/login"
                    className="link"
                >
                    Already registered?
                </Link>

            </form>
        </>
    )
}
