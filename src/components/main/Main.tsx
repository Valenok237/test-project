import { FC } from "react";
import { setProjects } from "../../store/reducers/ActionCreators";
import AddForm from "../add-form/AddForm";
import Projects from "../projects/Projects";
import './styles.css';


const Main:FC = () => {
    return ( 
        <> 
            <main className="main">
                <h1 className="main__title">Проекты</h1>
                <div className="main__container">
                    <AddForm placeholder="Добавить проект" putTodo={setProjects} />
                </div>
                <Projects/>
            </main>
        </>
    );
}
 
export default Main;