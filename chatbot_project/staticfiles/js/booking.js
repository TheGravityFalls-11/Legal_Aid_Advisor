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

// Form submission handling
const bookingForm = document.getElementById('bookingForm');

bookingForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // Get form values
    const formData = {
        clientName: document.getElementById('clientName').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        address: document.getElementById('address').value,
        lawyer: document.getElementById('lawyer').value,
        specialization: document.getElementById('specialization').value,
        caseType: document.getElementById('caseType').value,
        caseDescription: document.getElementById('caseDescription').value,
        consultationDate: document.getElementById('consultationDate').value,
        urgency: document.getElementById('urgency').value,
        consultationMode: document.getElementById('consultationMode').value,
        documents: document.getElementById('documents').files
    };

    // Add current timestamp
    formData.bookingDate = new Date().toISOString();
    formData.approvalStatus = 'Pending';

    // Here you would typically send this data to your backend
    console.log('Booking submitted:', formData);
    alert('Booking submitted successfully!');
    bookingForm.reset();
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