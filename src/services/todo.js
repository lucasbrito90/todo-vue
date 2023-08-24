import axios from "axios";
import {useTodoStore} from "../store/todo";

const base = "http://localhost:3000"
export const getAllTodos = () => {
    const {setTodos} = useTodoStore();

    axios.get(`${base}/todos`)
        .then(resp => setTodos(resp.data));
}

export const addTodo = (title) => {
    const {setTask} = useTodoStore();

    axios.post(`${base}/todos`, {
        title: title,
        completed: false
    }).then(resp => {
        setTask(resp.data)
    })
}

export const editTask = (id, todo) => {
    const {editTodo} = useTodoStore();
    axios.put(`${base}/todos/${id}`, todo)
        .then(({data}) => {
        editTodo(data)
    })
}

export const removeTask = (id) => {
    const {removeTask} = useTodoStore();
    axios.delete(`${base}/todos/${id}`)
        .then(resp => {
            removeTask(id);
        })
}
