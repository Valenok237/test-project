import { FC } from "react";
import { Link } from "react-router-dom";
import './styles.css';

interface IProject {
    name: string;
    id:string;
}

const Project:FC<IProject> = ({name, id}) => {
    return ( 
        <Link to={`/${id}`}>
            <li className="project">
            {name}
            </li>
        </Link>
    );
}
 
export default Project;