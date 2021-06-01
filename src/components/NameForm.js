/* eslint-disable jsx-a11y/no-onchange */
import React from 'react';

export default class NameForm extends React.Component {
    // constructor(props) {
    //  super(props);
    state = { value: '', essay: '', fruit: 'Coconut', isFruit: true };
    // this.handleChange = this.handleChange.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
    // }

    handleChange = (event) => {
        if (event.target.type === 'text') {
            this.setState({
                value: event.target.value,
            });
        } else if (event.target.type === 'textarea') {
            this.setState({
                essay: event.target.value,
            });
        } else if (event.target.type === 'select-one') {
            this.setState({
                fruit: event.target.value,
            });
        } else if (event.target.type === 'checkbox') {
            this.setState({
                isFruit: event.target.checked,
            });
        } else {
            console.log('Nothing');
        }
    };

    handleSubmit = (event) => {
        const { value, essay, fruit, isFruit } = this.state;
        // eslint-disable-next-line
       // alert('The value from name field:' + this.state.value);
        event.preventdefault();
        console.log(value, essay, fruit, isFruit);
    };

    render() {
        const { value, essay, fruit, isFruit } = this.state;
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <legend>Name:</legend>
                    <input type="text" value={value} onChange={this.handleChange} />
                    <br />
                    <br />
                    <textarea type="textarea" value={essay} onChange={this.handleChange} />
                    <br />
                    <br />
                    <legend>Pick your favorite flavor:</legend>
                    <br />
                    <select value={fruit} onChange={this.handleChange}>
                        <option value="grapefruit">Grapefruit</option>
                        <option value="lime">Lime</option>
                        <option value="coconut">Coconut</option>
                        <option value="mango">Mango</option>
                    </select>
                    <br />
                    <br />
                    <input type="checkbox" value={isFruit} onChange={this.handleChange} />
                    <br />
                    <br />
                    <input type="submit" value="submit" />
                </form>
            </div>
        );
    }
}
