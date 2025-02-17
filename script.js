// Theme Toggle
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    themeToggle.textContent = body.classList.contains('dark-mode') ? 'Light Mode' : 'Dark Mode';
});

// Feedback Form
const feedbackForm = document.getElementById('feedback-form');
const thankYouMessage = document.getElementById('thank-you-message');

feedbackForm.addEventListener('submit', (e) => {
    e.preventDefault();
    thankYouMessage.style.display = 'block';
    feedbackForm.reset();
    setTimeout(() => {
        thankYouMessage.style.display = 'none';
    }, 3000);
});

// Wellness Tips
const tips = [
    "Take a short walk during breaks.",
    "Stay hydrated throughout the day.",
    "Practice deep breathing exercises.",
    "Connect with a colleague for a quick chat.",
    "Set small, achievable goals for the day."
];

const tipElement = document.getElementById('tip');
function showRandomTip() {
    const randomTip = tips[Math.floor(Math.random() * tips.length)];
    tipElement.textContent = randomTip;
}

setInterval(showRandomTip, 5000);
showRandomTip();

// Chart.js Example
const ctx = document.getElementById('wellnessChart').getContext('2d');
const wellnessChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
        datasets: [{
            label: 'Employee Satisfaction',
            data: [80, 85, 82, 88, 90],
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});