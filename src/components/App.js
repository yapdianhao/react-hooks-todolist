import React from 'react';
import useStyles from '../styles/AppStyles';

function App() {
    const classes = useStyles();

    return (
        <div>
            <header className={classes.header}>
                <h1>
                    todo<span>list</span>
                </h1>
                <h2>
                    A todo list app built with React Hooks and Context
                </h2>
            </header>
        </div>
    );
}

export default App;