const lottoNumbersContainer = document.querySelector('.lotto-numbers');
const generateBtn = document.querySelector('.generate-btn');
const themeToggle = document.getElementById('themeToggle');
const body = document.documentElement;

// Lotto Generation
const generateNumbers = () => {
    lottoNumbersContainer.innerHTML = '';
    const numbers = new Set();
    while (numbers.size < 6) {
        const randomNumber = Math.floor(Math.random() * 45) + 1;
        numbers.add(randomNumber);
    }

    const sortedNumbers = Array.from(numbers).sort((a, b) => a - b);

    for (const number of sortedNumbers) {
        const numberElement = document.createElement('span');
        numberElement.textContent = number;
        lottoNumbersContainer.appendChild(numberElement);
    }
};

// Theme Toggle
const toggleTheme = () => {
    const currentTheme = body.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    body.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateToggleText(newTheme);
};

const updateToggleText = (theme) => {
    themeToggle.textContent = theme === 'dark' ? 'Light Mode' : 'Dark Mode';
};

// Initialize Theme
const savedTheme = localStorage.getItem('theme') || 'light';
body.setAttribute('data-theme', savedTheme);
updateToggleText(savedTheme);

generateBtn.addEventListener('click', generateNumbers);
themeToggle.addEventListener('click', toggleTheme);
