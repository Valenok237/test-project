import { FC } from "react";
import { useParams } from "react-router-dom";
import Task from "../components/task/Task";

const TaskPage:FC = () => {
    const {id} = useParams();
    return ( 
        <div>
            <Task id={id!}/>
        </div>
    );
}
 
export default TaskPage;