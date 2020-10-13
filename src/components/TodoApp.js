import React from 'react';
import { TodosProvider } from '../contexts/todos.context';
import TodoList from './TodoList';
import TodoForm from './TodoForm';

function TodoApp() {
    return (
        <TodosProvider>
            <TodoForm />
            <TodoList />
        </TodosProvider>
    )
};

export default TodoApp;