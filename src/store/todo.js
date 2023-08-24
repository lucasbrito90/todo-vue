import {defineStore} from 'pinia';
import {computed, ref} from "vue";

export const useTodoStore = defineStore('todo', () => {
    const todos = ref([]);
    const getTodos = computed(() => todos.value)
    function setTodos(all){
        todos.value = all
    }

    function setTask(task) {
        todos.value.push(task)
    }

    function editTodo(task) {
        const index = todos.value.findIndex(t => task.id === t.id);
        todos.value[index]= task;
    }

    function removeTask(id) {
        const index = todos.value.findIndex(task => task.id === id);
        todos.value.splice(index, 1)
    }

    return {todos,getTodos,setTodos,setTask, editTodo, removeTask}
})
