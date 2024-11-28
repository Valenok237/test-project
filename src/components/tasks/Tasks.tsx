import { FC } from "react";
import { useAppSelector } from "../../hooks/redux";
import { ITask } from "../../models/types";
import TaskItem from "./tasks-item/TasksItem";
import './styles.css'

interface ITaskProps{
    id:string;
}

const Tasks:FC<ITaskProps> = ({id}) => {
    const {isLoading} = useAppSelector(state => state.tasksReducer);
    const tasksData:ITask[] = JSON.parse(localStorage.getItem('tasks') || "null");

    let tasks: ITask[] | null; 
    if(tasksData) {
        tasks = tasksData.filter(item => item.id === id);
    }
    
    return ( 
        <div className="tasks">
            {!!tasks!?.length ? 
            (
                <ul className="tasks__list">
                    {tasks!.map(task => (
                        <TaskItem key={task.id} name={task.name} />
                    ))}
                </ul>
            )
            :
            (
                <p className="tasks__null">Задач нет</p>
            )
            }
            {isLoading && <p>Загрузка...</p>}
        </div>
    );
}
 
export default Tasks;