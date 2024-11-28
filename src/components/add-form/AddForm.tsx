import { FC, useState } from "react";
import { useAppDispatch } from "../../hooks/redux";
import { AppDispatch } from "../../store/store";
import './styles.css';

interface IAddFormProps {
    id?: string;
    placeholder: string;
    putTodo: (name: string, id?: string) => (dispatch: AppDispatch) => Promise<void>
}

const AddForm:FC<IAddFormProps> = ({putTodo, id, placeholder}) => {
    const [todo, setTodo] = useState('');
    const dispatch = useAppDispatch();

    const submitTodo = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        dispatch(putTodo(todo, id));
        setTodo('');
    }

    return ( 
        <div>
            <form className="add-form" onSubmit={submitTodo}>
                <input 
                    className='add-form__field'
                    type="text" 
                    placeholder={placeholder} 
                    value={todo} 
                    onChange={(e) => setTodo(e.target.value)} 
                />
                <button className="add-form__btn">+</button>
            </form>
        </div>
    );
}
 
export default AddForm;