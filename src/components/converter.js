export function toCelsius(fahrenheit) {
    return ((fahrenheit - 32) * 5) / 9;
}

export function toFharhenheit(celsius) {
    return (celsius * 9) / 5 + 32;
}

export function Convert(temperature, convert) {
    const input = parseFloat(temperature);
    if (Number.isNaN(input)) {
        return '';
    }
    const output = convert(input);
    const rounded = Math.round(output * 1000) / 1000;
    return rounded.toString();
}
