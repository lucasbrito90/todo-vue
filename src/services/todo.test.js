import {beforeEach, describe, expect, test} from 'vitest';
import {addTodo, editTask, getAllTodos, removeTask} from "./todo";
import {createPinia, setActivePinia} from 'pinia'


beforeEach(() => {
    setActivePinia(createPinia())
});
describe('TodoService', () => {
    test('should return a list of todos', async () => {
        const result = await getAllTodos();
        expect(result).toMatchInlineSnapshot(allTodosSnapshot);
    });

    test('should create a new todo', async () => {
        const result = await addTodo("new task");
        expect(result).toMatchInlineSnapshot(oneTodoSnapshot)
    });

    test('should edit a todo', async () => {
        const result = await editTask(1, {
            title: "new task edited",
            completed: false
        });
        expect(result).toMatchInlineSnapshot(editedTodoSnapshot)
    });

    test('should remove a todo', async () => {
        const result = await removeTask(1);
       expect(result).toBe(200);
    });
});

const allTodosSnapshot = `
[
  {
    "completed": false,
    "id": 1,
    "title": "new task",
  },
]
`;

const oneTodoSnapshot = `
{
  "completed": false,
  "id": 1,
  "title": "new task",
}
`;

const editedTodoSnapshot = `
{
  "completed": false,
  "id": 1,
  "title": "new task edited",
}
`;
