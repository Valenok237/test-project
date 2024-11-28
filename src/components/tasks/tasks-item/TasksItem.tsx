import { FC } from "react";
import './styles.css';

interface ITaskItem {
    name: string;
}

const TaskItem:FC<ITaskItem> = ({name}) => {
    return ( 
        <li className="task-item">{name}</li>
    );
}
 
export default TaskItem;