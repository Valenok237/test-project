import React, { FC, useEffect, useState } from "react";
import './styles.css';
import { AppDispatch } from "../../../store/store";
import { useAppDispatch, useAppSelector } from "../../../hooks/redux";
import { useNavigate } from "react-router-dom";

interface IFormSubmitProps {
    buttonText: string;
    handleSubmit: (email: string, password: string) => (dispatch: AppDispatch) => Promise<void>
}

const FormSubmit:FC<IFormSubmitProps> = ({buttonText, handleSubmit}) => {
    const {email} = useAppSelector(state => state.userReducer);
    const [emailForm, setEmailForm] = useState('');
    const [passwordForm, setPasswordForm] = useState('');
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    
    useEffect(() => {
        if(email) navigate('/');
    },[email])

    const submit = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        dispatch(handleSubmit(emailForm, passwordForm));
        setEmailForm('');
        setPasswordForm('');
    }

    return ( 
        <form className="form-submit" onSubmit={submit}>
            <input 
                className="form-submit__input"
                type="email"
                value={emailForm}
                onChange={(e) => setEmailForm(e.target.value)}
                placeholder="почта"
            />
            <input 
                className="form-submit__input"
                type="password"
                value={passwordForm}
                onChange={(e) => setPasswordForm(e.target.value)}
                placeholder="пароль"
            />
            <button className="form-submit__button">
                {buttonText}
            </button>
        </form>
    );
}
 
export default FormSubmit;