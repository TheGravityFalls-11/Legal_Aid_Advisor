VANTA.WAVES({
    el: "#vanta-bg",
    mouseControls: true,
    touchControls: true,
    gyroControls: false,
    minHeight: 200.00,
    minWidth: 200.00,
    scale: 1.00,
    scaleMobile: 1.00,
    color: 0x12232E,
    shininess: 60.00,
    waveHeight: 20.00,
    waveSpeed: 0.75,
    zoom: 0.65
});

const lawyers = [
    { name: "Adv. Priya Sharma", specialization: "Corporate Law", location: "Office No. 12, Business Tower, Nariman Point, Mumbai, Maharashtra 400021", phone: "+91 98765 43210", experience: "15 years", map: "https://maps.google.com/?q=Nariman+Point+Mumbai" },
    { name: "Adv. Rajesh Kumar", specialization: "Criminal Law", location: "Chamber No. 5, Tis Hazari Court Complex, Delhi Gate, New Delhi, Delhi 110054", phone: "+91 98765 43211", experience: "20 years", map: "https://maps.google.com/?q=Tis+Hazari+Court+Delhi" },
    { name: "Adv. Aisha Patel", specialization: "Family Law", location: "Office No. 8, Richmond Road, Bengaluru, Karnataka 560025", phone: "+91 98765 43212", experience: "12 years", map: "https://maps.google.com/?q=Richmond+Road+Bengaluru" },
    { name: "Adv. Sanjay Verma", specialization: "Intellectual Property", location: "Chamber No. 3, Esplanade, Kolkata, West Bengal 700001", phone: "+91 98765 43213", experience: "18 years", map: "https://maps.google.com/?q=Esplanade+Kolkata" },
    { name: "Adv. Neha Gupta", specialization: "Tax Law", location: "Office No. 10, Civil Lines, Prayagraj, Uttar Pradesh 211001", phone: "+91 98765 43214", experience: "14 years", map: "https://maps.google.com/?q=Civil+Lines+Prayagraj" },
    { name: "Adv. Vikram Singh", specialization: "Real Estate Law", location: "Chamber No. 7, Sector 17, Chandigarh 160017", phone: "+91 98765 43215", experience: "10 years", map: "https://maps.google.com/?q=Sector+17+Chandigarh" },
    { name: "Adv. Meera Desai", specialization: "Labour Law", location: "Office No. 15, Ashram Road, Ahmedabad, Gujarat 380009", phone: "+91 98765 43216", experience: "16 years", map: "https://maps.google.com/?q=Ashram+Road+Ahmedabad" },
    { name: "Adv. Arjun Reddy", specialization: "Environmental Law", location: "Chamber No. 9, Anna Salai, Chennai, Tamil Nadu 600002", phone: "+91 98765 43217", experience: "13 years", map: "https://maps.google.com/?q=Anna+Salai+Chennai" },
    { name: "Adv. Kavita Joshi", specialization: "Banking Law", location: "Office No. 4, Tonk Road, Jaipur, Rajasthan 302015", phone: "+91 98765 43218", experience: "19 years", map: "https://maps.google.com/?q=Tonk+Road+Jaipur" },
    { name: "Adv. Rohan Mehta", specialization: "Cyber Law", location: "Chamber No. 11, Banjara Hills, Hyderabad, Telangana 500034", phone: "+91 98765 43219", experience: "11 years", map: "https://maps.google.com/?q=Banjara+Hills+Hyderabad" }
];

function createLawyerCards() {
    const grid = document.getElementById('lawyers-grid');
    lawyers.forEach(lawyer => {
        const card = document.createElement('div');
        card.className = 'lawyer-card';
        card.innerHTML = `
            <h2 class="lawyer-name">${lawyer.name}</h2>
            <span class="specialization">${lawyer.specialization}</span>
            <div class="contact-info">
                <a href="${lawyer.map}" target="_blank" class="address">📍 ${lawyer.location}</a>
                <a href="tel:${lawyer.phone}" class="phone">📞 ${lawyer.phone}</a>
            </div>
            <p class="experience">⚖️ ${lawyer.experience} of experience</p>
        `;
        grid.appendChild(card);
    });
}

window.addEventListener('load', createLawyerCards);
