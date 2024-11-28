import { FC } from "react";
import Form from "../components/form/Form";
import { handleRegister } from "../store/reducers/ActionCreators";

const RegisterPage:FC = () => {
    return ( 
        <>
            <Form title="Регистрация" buttonText="Зарегистрироваться" handleSubmit={handleRegister}/>
        </>
    );
}
 
export default RegisterPage;