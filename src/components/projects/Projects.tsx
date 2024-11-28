import { useAppSelector } from "../../hooks/redux";
import { IProject } from "../../models/types";
import Project from "./project/Project";
import './styles.css';

const Projects = () => {
    const {isLoading} = useAppSelector(state => state.projectsReducer);
    const projects:IProject[] = JSON.parse(localStorage.getItem('projects') || "null");
  
    return ( 
        <div className="projects">
            {!!projects ? 
            (
                <ul className="projects__list">
                    {projects.map(project => (
                        <Project key={project.id} id={project.id} name={project.name} />
                    ))}
                </ul>
            )
            :
            (
                <p className="projects__null">Проектов нет</p>
            )
            }
            {isLoading && <p>Загрузка...</p>}
        </div>
        
    );
}
 
export default Projects;