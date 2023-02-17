import React from 'react'

export default function TodoList({ todoList }) {
    return (
        <>
            <div>{todoList[0][0]}</div>
            <div>{todoList[0][1]}</div>
        </>
    )
}