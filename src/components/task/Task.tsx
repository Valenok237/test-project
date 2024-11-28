import { FC } from "react";
import AddForm from "../add-form/AddForm";
import { setTasks } from "../../store/reducers/ActionCreators";
import './styles.css';
import Tasks from "../tasks/Tasks";

interface ITaskProps {
    id: string;
}
const Task:FC<ITaskProps> = ({id}) => {
    return ( 
        <main className="task">
            <h1 className="task__title">Задачи</h1>
            <div className="task__container">
                <AddForm id={id} placeholder="Добавить задачу" putTodo={setTasks}/>
            </div>
            <Tasks id={id}/>
        </main>
    );
}
 
export default Task;