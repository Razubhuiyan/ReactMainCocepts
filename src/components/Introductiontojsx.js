import ReactDOM from 'react-dom';

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
