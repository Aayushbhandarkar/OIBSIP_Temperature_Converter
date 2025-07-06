document.addEventListener('DOMContentLoaded', () => {
    const temperatureInput = document.getElementById('temperature-input');
    const convertBtn = document.getElementById('convert-btn');
    const resultValue = document.getElementById('result-value');
    const resultUnit = document.getElementById('result-unit');
    const errorMessage = document.getElementById('error-message');

    convertBtn.addEventListener('click', handleConversion);

  
    temperatureInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            handleConversion();
        }
    });

    function handleConversion() {
        
        errorMessage.textContent = '';
        temperatureInput.classList.remove('error');

        const value = parseFloat(temperatureInput.value);

       
        if (isNaN(value)) {
            errorMessage.textContent = 'Please enter a valid number';
            temperatureInput.classList.add('error');
            return;
        }

        
        const from = document.querySelector('input[name="from-unit"]:checked').value;
        const to = document.querySelector('input[name="to-unit"]:checked').value;

        let output;

       
        if (from === to) {
            output = value;
        } else {
            
            let celsius;
            switch (from) {
                case 'celsius':
                    celsius = value;
                    break;
                case 'fahrenheit':
                    celsius = (value - 32) * 5 / 9;
                    break;
                case 'kelvin':
                    celsius = value - 273.15;
                    break;
            }

            switch (to) {
                case 'celsius':
                    output = celsius;
                    break;
                case 'fahrenheit':
                    output = (celsius * 9 / 5) + 32;
                    break;
                case 'kelvin':
                    output = celsius + 273.15;
                    break;
            }
        }

        
        output = Math.round(output * 100) / 100;

        resultValue.textContent = output;

        switch (to) {
            case 'celsius':
                resultUnit.textContent = '°C';
                break;
            case 'fahrenheit':
                resultUnit.textContent = '°F';
                break;
            case 'kelvin':
                resultUnit.textContent = 'K';
                break;
        }

        
        const resultBox = document.getElementById('result-container');
        resultBox.style.animation = 'none';
        void resultBox.offsetWidth; 
        resultBox.style.animation = 'fadeIn 0.5s ease';
    }
});
