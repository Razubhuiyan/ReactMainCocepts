// import React from 'react';
// Introduction to jsx
import ReactDOM from 'react-dom';
// import App from './App';
import reportWebVitals from './reportWebVitals';

function formatname(user) {
    return `${user.firstName} ${user.lastName}`;
}

function getGreeting(user) {
    if (user) {
        return <h1>Hello, {formatname(user)}!</h1>;
    }
    return <h1>Hello, Stranger</h1>;
}

const user = {
    firstName: 'Razu',
    lastName: 'Bhuiyan',
};

const element = <h1>{getGreeting(user)}</h1>;

ReactDOM.render(element, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
