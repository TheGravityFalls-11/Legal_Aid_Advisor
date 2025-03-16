// Dark mode functionality
const darkModeToggle = document.getElementById('darkModeToggle');
const body = document.body;

// Check for saved dark mode preference
const darkMode = localStorage.getItem('darkMode');
if (darkMode === 'enabled') {
    body.setAttribute('data-theme', 'dark');
    darkModeToggle.checked = true;
}

darkModeToggle.addEventListener('change', () => {
    if (darkModeToggle.checked) {
        body.setAttribute('data-theme', 'dark');
        localStorage.setItem('darkMode', 'enabled');
    } else {
        body.setAttribute('data-theme', 'light');
        localStorage.setItem('darkMode', 'disabled');
    }
});

// CSRF Token Handling
function getCSRFToken() {
    return document.querySelector('[name=csrfmiddlewaretoken]').value;
}

// Form submission handling
const bookingForm = document.getElementById('bookingForm');

bookingForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // Get form values
    const formData = new FormData(bookingForm);

    fetch('/booking/', {
        method: 'POST',
        body: formData,
        headers: {
            'X-CSRFToken': getCSRFToken()
        }
    })
    .then(response => response.json())
    .then(data => {
        alert(data.message);
        if (data.success) {
            bookingForm.reset();
        }
    })
    .catch(error => console.error('Error:', error));
});

// Dynamic specialization update based on lawyer selection
const lawyerSelect = document.getElementById('lawyer');
const specializationSelect = document.getElementById('specialization');

const lawyerSpecializations = {
    'john': 'criminal',
    'sarah': 'family',
    'michael': 'corporate'
};

lawyerSelect.addEventListener('change', () => {
    const selectedLawyer = lawyerSelect.value;
    if (selectedLawyer) {
        specializationSelect.value = lawyerSpecializations[selectedLawyer];
    }
});

// File upload validation
const documentsInput = document.getElementById('documents');
documentsInput.addEventListener('change', () => {
    const files = documentsInput.files;
    const maxSize = 5 * 1024 * 1024; // 5MB limit

    Array.from(files).forEach(file => {
        if (file.size > maxSize) {
            alert(`File ${file.name} is too large. Maximum size is 5MB.`);
            documentsInput.value = '';
        }
    });
});
