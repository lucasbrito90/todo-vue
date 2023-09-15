import {rest} from 'msw'

export const handlers = [
    rest.get('http://localhost:3000/todos', (req, res, ctx) => {
        return res(
            ctx.status(200),
            ctx.json([
                {
                    "title": "new task",
                    "completed": false,
                    "id": 1
                },
            ]),
        )
    }),
    rest.post('http://localhost:3000/todos', (req, res, ctx) => {
        return res(
            ctx.status(200),
            ctx.json({
                "id": 1,
                "title": "new task",
                "completed": false
            }),
        )
    }),
    rest.put('http://localhost:3000/todos/:id', (req, res, ctx) => {
        return res(
            ctx.status(200),
            ctx.json({
                "title": "new task edited",
                "completed": false,
                "id": 1
            }),
        )
    }),
    rest.delete('http://localhost:3000/todos/:id', (req, res, ctx) => {
        return res(
            ctx.status(200),
        )
    }),
];