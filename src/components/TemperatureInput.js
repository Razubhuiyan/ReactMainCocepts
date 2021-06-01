import React from 'react';

const scaleNames = {
    c: 'celsius',
    f: 'farhenheit',
};

export default function TemperatureInput({ temperature, scale, onTemperatureChange }) {
    return (
        <fieldset>
            <legend>Enter temperature in {scaleNames[scale]}: </legend>
            <input
                value={temperature}
                onChange={(e) => {
                    onTemperatureChange(e, scale);
                }}
            />
        </fieldset>
    );
}
