import FormSubmit from "./form-submit/FormSubmit";
import './styles.css';
import { FC } from "react";
import { AppDispatch } from "../../store/store";

interface IFormProps {
    title: string;
    buttonText: string;
    handleSubmit: (email: string, password: string) => (dispatch: AppDispatch) => Promise<void>
}

const Form:FC<IFormProps> = ({title, buttonText, handleSubmit}) => {
    return ( 
        <div className="form">
            <div className="form__container">
                <h1 className="form__title">{title}</h1>
                <FormSubmit buttonText={buttonText} handleSubmit={handleSubmit}/>
            </div>
        </div>
    );
}
 
export default Form;