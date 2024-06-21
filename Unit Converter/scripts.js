document.addEventListener('DOMContentLoaded', function() {
    const categoryButtons = document.querySelectorAll('.category-button');
    const converterSections = document.querySelectorAll('.converter-section');
    const converterForm = document.getElementById('converterForm');
    const resultDiv = document.getElementById('result');

    // Add click event listeners to category buttons
    categoryButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            categoryButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to the clicked button
            button.classList.add('active');

            // Hide all converter sections
            converterSections.forEach(section => section.classList.remove('active'));

            // Show the corresponding converter section
            const categoryId = button.id.replace('Btn', '');
            const converterSection = document.getElementById(`${categoryId}Converter`);
            converterSection.classList.add('active');
        });
    });
 
    converterForm.addEventListener('submit', function(event) {
        event.preventDefault();

        // Get the active converter section
        const activeConverterSection = document.querySelector('.converter-section.active');

        // Determine which converter is active
        if (activeConverterSection.id === 'lengthConverter') {
            const lengthInput = parseFloat(document.getElementById('lengthInput').value);
            const lengthFrom = document.getElementById('lengthFrom').value;
            const lengthTo = document.getElementById('lengthTo').value;
            if (!isNaN(lengthInput)) {
                const result = convertLength(lengthInput, lengthFrom, lengthTo);
                resultDiv.textContent = `${lengthInput} ${lengthFrom} = ${result.toFixed(2)} ${lengthTo}`;
            } else {
                resultDiv.textContent = 'Please enter a valid input.';
            }
        } else if (activeConverterSection.id === 'temperatureConverter') {
            const temperatureInput = parseFloat(document.getElementById('temperatureInput').value);
            const temperatureFrom = document.getElementById('temperatureFrom').value;
            const temperatureTo = document.getElementById('temperatureTo').value;
            if (!isNaN(temperatureInput)) {
                const result = convertTemperature(temperatureInput, temperatureFrom, temperatureTo);
                resultDiv.textContent = `${temperatureInput} ${temperatureFrom} = ${result.toFixed(2)} ${temperatureTo}`;
            } else {
                resultDiv.textContent = 'Please enter a valid input.';
            }
        } else if (activeConverterSection.id === 'areaConverter') {
            const areaInput = parseFloat(document.getElementById('areaInput').value);
            const areaFrom = document.getElementById('areaFrom').value;
            const areaTo = document.getElementById('areaTo').value;
            if (!isNaN(areaInput)) {
                const result = convertArea(areaInput, areaFrom, areaTo);
                resultDiv.textContent = `${areaInput} ${areaFrom} = ${result.toFixed(2)} ${areaTo}`;
            } else {
                resultDiv.textContent = 'Please enter a valid input.';
            }
        } else if (activeConverterSection.id === 'volumeConverter') {
            const volumeInput = parseFloat(document.getElementById('volumeInput').value);
            const volumeFrom = document.getElementById('volumeFrom').value;
            const volumeTo = document.getElementById('volumeTo').value;
            if (!isNaN(volumeInput)) {
                const result = convertVolume(volumeInput, volumeFrom, volumeTo);
                resultDiv.textContent = `${volumeInput} ${volumeFrom} = ${result.toFixed(2)} ${volumeTo}`;
            } else {
                resultDiv.textContent = 'Please enter a valid input.';
            }
        } else if (activeConverterSection.id === 'weightConverter') {
            const weightInput = parseFloat(document.getElementById('weightInput').value);
            const weightFrom = document.getElementById('weightFrom').value;
            const weightTo = document.getElementById('weightTo').value;
            if (!isNaN(weightInput)) {
                const result = convertWeight(weightInput, weightFrom, weightTo);
                resultDiv.textContent = `${weightInput} ${weightFrom} = ${result.toFixed(2)} ${weightTo}`;
            } else {
                resultDiv.textContent = 'Please enter a valid input.';
            }
        } else if (activeConverterSection.id === 'timeConverter') {
            const timeInput = parseFloat(document.getElementById('timeInput').value);
            const timeFrom = document.getElementById('timeFrom').value;
            const timeTo = document.getElementById('timeTo').value;
            if (!isNaN(timeInput)) {
                const result = convertTime(timeInput, timeFrom, timeTo);
                resultDiv.textContent = `${timeInput} ${timeFrom} = ${result.toFixed(2)} ${timeTo}`;
            } else {
                resultDiv.textContent = 'Please enter a valid input.';
            }
        } else {
            resultDiv.textContent = 'Please select a conversion category and enter a valid input.';
        }
    });

    // Conversion functions

    function convertLength(value, fromUnit, toUnit) {
        const units = {
            meter: 1,
            kilometer: 1000,
            mile: 1609.34,
            yard: 0.9144
            // Add more units and conversion factors as needed
        };

        const newValue = value * units[fromUnit] / units[toUnit];
        return newValue;
    }

    function convertTemperature(value, fromUnit, toUnit) {
        let newValue;

        if (fromUnit === 'celsius' && toUnit === 'fahrenheit') {
            newValue = (value * 9/5) + 32;
        } else if (fromUnit === 'celsius' && toUnit === 'kelvin') {
            newValue = value + 273.15;
        } else if (fromUnit === 'fahrenheit' && toUnit === 'celsius') {
            newValue = (value - 32) * 5/9;
        } else if (fromUnit === 'fahrenheit' && toUnit === 'kelvin') {
            newValue = (value - 32) * 5/9 + 273.15;
        } else if (fromUnit === 'kelvin' && toUnit === 'celsius') {
            newValue = value - 273.15;
        } else if (fromUnit === 'kelvin' && toUnit === 'fahrenheit') {
            newValue = (value - 273.15) * 9/5 + 32;
        } else {
            newValue = value; // Same unit conversion
        }

        return newValue;
    }

    function convertArea(value, fromUnit, toUnit) {
        const units = {
            squareMeter: 1,
            squareKilometer: 1000000,
            squareMile: 2589988.11,
            squareYard: 0.836127
            // Add more units and conversion factors as needed
        };

        const newValue = value * units[fromUnit] / units[toUnit];
        return newValue;
    }

    function convertVolume(value, fromUnit, toUnit) {
        const units = {
            cubicMeter: 1,
            liter: 0.001,
            gallon: 0.00378541,
            cubicFoot: 0.0283168
            // Add more units and conversion factors as needed
        };

        const newValue = value * units[fromUnit] / units[toUnit];
        return newValue;
    }

    function convertWeight(value, fromUnit, toUnit) {
        const units = {
            kilogram: 1,
            gram: 0.001,
            pound: 0.453592,
            ounce: 0.0283495
            // Add more units and conversion factors as needed
        };

        const newValue = value * units[fromUnit] / units[toUnit];
        return newValue;
    }

    function convertTime(value, fromUnit, toUnit) {
        const units = {
            second: 1,
            minute: 60,
            hour: 3600,
            day: 86400
            // Add more units and conversion factors as needed
        };

        const newValue = value * units[fromUnit] / units[toUnit];
        return newValue;
    }
});
