const lottoNumbersContainer = document.querySelector('.lotto-numbers');
const generateBtn = document.querySelector('.generate-btn');

const generateNumbers = () => {
    lottoNumbersContainer.innerHTML = '';
    const numbers = new Set();
    while (numbers.size < 6) {
        const randomNumber = Math.floor(Math.random() * 45) + 1;
        numbers.add(randomNumber);
    }

    for (const number of numbers) {
        const numberElement = document.createElement('span');
        numberElement.textContent = number;
        lottoNumbersContainer.appendChild(numberElement);
    }
};

generateBtn.addEventListener('click', generateNumbers);
