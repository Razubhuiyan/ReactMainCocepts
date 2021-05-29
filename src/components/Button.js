import React from 'react';

export default class Button extends React.Component {
    shouldComponentUpdate(nextProps) {
        const { chnage: currentChange, locale: currentLocale } = this.props;
        const { change: nextChange, locale: nextLocale } = nextProps;
        if (currentChange === nextChange && currentLocale === nextLocale) {
            return false;
        }
        return true;
    }

    render() {
        const { change, locale } = this.props;
        return (
            <button type="button" onClick={() => change(locale)}>
                {locale === 'bn-BD' ? '  গড়ি পরিবর্তন করুন ' : 'Change clock'}
            </button>
        );
    }
}
