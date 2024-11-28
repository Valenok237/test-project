import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import axios from "axios";
import { AppDispatch } from "../store";
import { IProject, ITask } from "../../models/types";
import { projectsSlice } from "./ProjectsSlice";
import { userSlice } from "./UserSlice";
import { tasksSlice } from "./TasksSlice";

export const handleRegister = (email:string, password:string) => async (dispatch: AppDispatch) => {
    const auth = getAuth();
    await createUserWithEmailAndPassword(auth, email, password)
            .then(({user}) => {
                dispatch(userSlice.actions.setUser({
                    email: user.email,
                    id: user.uid,
                    token: user.refreshToken,
                }))
                localStorage.setItem('email', JSON.stringify(user.email));
            })
            .catch((error) => alert(error));
}

export const handleLogin =  (email:string, password:string) => async (dispatch: AppDispatch) => {
    const auth = getAuth();
    await signInWithEmailAndPassword(auth, email, password)
            .then(({user}) => {
                dispatch(userSlice.actions.setUser({
                    email: user.email,
                    id: user.uid,
                    token: user.refreshToken,
                }))
                localStorage.setItem('email', JSON.stringify(user.email));
            })
            .catch((error) => alert(error));
}

export const logout = (dispatch: AppDispatch) => {
    dispatch(userSlice.actions.removeUser()); 
    localStorage.setItem('email', '');
};


export const setProjects = (name:string) => async (dispatch: AppDispatch) => {
    try {
        dispatch(projectsSlice.actions.projectsFetching());
        await axios.post('http://localhost:3001/projects', {
            name: name,
            date: Date.now(),
        }); 
        const getProjects = await axios.get<IProject[]>('http://localhost:3001/projects');
        dispatch(projectsSlice.actions.projectsFetchingSuccess(getProjects.data));
        localStorage.setItem('projects', JSON.stringify(getProjects.data));
    }
    catch (e) {
        dispatch(projectsSlice.actions.projectsFetchingError(e));
    }
}

export const setTasks = (name: string, id: string | undefined) => async (dispatch: AppDispatch) => {
    try{
        dispatch(tasksSlice.actions.tasksFetching());
        await axios.post('http://localhost:3001/tasks', {
            id: id,
            name: name,
            date: Date.now(),
            complited: false
        })
        const getTasks = await axios.get<ITask[]>('http://localhost:3001/tasks');
        dispatch(tasksSlice.actions.tasksFetchingSuccess(getTasks.data));
        localStorage.setItem('tasks', JSON.stringify(getTasks.data));
    }
    catch (e) {
        dispatch(tasksSlice.actions.tasksFetchingError(e));
    }
}