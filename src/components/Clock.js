import React from 'react';
import Button from './Button';

export default class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = { date: new Date(), locale: 'bn-BD' };
    }

    componentDidMount() {
        this.clockTimer = setInterval(() => this.tick(), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.clockTimer);
    }

    handleClick = (locale) => {
        this.setState({ locale });
    };

    tick() {
        this.setState({
            date: new Date(),
        });
    }

    render() {
        const { date, locale } = this.state;
        // const { handleClick } = this.props;
        return (
            <div>
                <h1>Hello, World</h1>
                <h2>Its {date.toLocaleTimeString(locale)}</h2>
                <br />
                {locale === 'bn-BD' ? (
                    <Button change={this.handleClick} locale="en-US" />
                ) : (
                    <Button change={this.handleClick} locale="bn-BD" />
                )}
            </div>
        );
    }
}
