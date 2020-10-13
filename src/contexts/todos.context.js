import React, { createContext } from 'react';
import useLocalStorageReducer from '../hooks/useLocalStorageReducer';
import todosReducer from '../reducers/todos.reducer';

const defaultTodos = [
    { id: '0', task: 'Read a book', completed: false },
    { id: '1', task: 'Eat food', completed: false },
    { id: '2', task: 'Code a website', completed: false }
];

export const TodosContext = createContext();
export const DispatchContext = createContext();

export function TodosProvider(props) {
    const [todos, dispatch] = useLocalStorageReducer('todos', todosReducer, defaultTodos);
    console.log(dispatch);
    return (
        <TodosContext.Provider value={todos}>
            <DispatchContext.Provider value={dispatch}>
                {props.children}
            </DispatchContext.Provider>
        </TodosContext.Provider>
    );
};
