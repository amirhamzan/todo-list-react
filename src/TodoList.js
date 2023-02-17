import React from 'react';
import Todo from './Todo.js';

export default function TodoList({ todoList }) {
    return (
        todoList.map(todo => {
            return <Todo key={todo} todo={todo} />
        })
    )
}