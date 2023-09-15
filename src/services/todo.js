import axios from "axios";
import {useTodoStore} from "../store/todo";

const base = "http://localhost:3000"
export const getAllTodos = () => {
    const {setTodos} = useTodoStore();

    return axios.get(`${base}/todos`)
        .then(resp => {
            setTodos(resp.data);
            return resp.data
        });
}

export const addTodo = (title) => {
    const {setTask} = useTodoStore();

    return axios.post(`${base}/todos`, {
        title: title,
        completed: false
    }).then(resp => {
        setTask(resp.data)

        return resp.data
    });
}

export const editTask = (id, todo) => {
    const {editTodo} = useTodoStore();
    return axios.put(`${base}/todos/${id}`, todo)
        .then(({data}) => {
            editTodo(data)

            return data;
        });
}

export const removeTask = async (id) => {
    const {removeTask} = useTodoStore();
    return axios.delete(`${base}/todos/${id}`)
        .then(resp => {
            removeTask(id);
            return resp.status;
        });
}
