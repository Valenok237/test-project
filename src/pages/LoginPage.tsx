import { FC } from "react";
import Form from "../components/form/Form";
import { handleLogin } from "../store/reducers/ActionCreators";

const LoginPage:FC = () => {
    return ( 
        <>
            <Form title="Авторизация" buttonText="Войти" handleSubmit={handleLogin} />
        </>
    );
}
 
export default LoginPage;