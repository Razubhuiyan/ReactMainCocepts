import ReactDOM from 'react-dom';

function Welcome(props) {
    const { name } = props;
    return <h1>Hello, {name}</h1>;
}

const element = <Welcome name="Razu" />;

ReactDOM.render(element, document.getElementById('root'));
