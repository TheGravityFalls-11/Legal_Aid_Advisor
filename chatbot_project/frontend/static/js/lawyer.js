const lawyers = [
    { name: "Alice Johnson", rating: "★★★★☆", phone: "(111) 222-3333", address: "101 First St, Springfield, IL", photo: "https://via.placeholder.com/150" },
    { name: "Bob Smith", rating: "★★★★★", phone: "(222) 333-4444", address: "202 Second St, Lincoln, NE", photo: "https://via.placeholder.com/150" },
    { name: "Carol Williams", rating: "★★★☆☆", phone: "(333) 444-5555", address: "303 Third St, Austin, TX", photo: "https://via.placeholder.com/150" },
    { name: "David Brown", rating: "★★★★☆", phone: "(444) 555-6666", address: "404 Fourth St, Miami, FL", photo: "https://via.placeholder.com/150" },
    { name: "Eva Davis", rating: "★★★★★", phone: "(555) 666-7777", address: "505 Fifth St, Seattle, WA", photo: "https://via.placeholder.com/150" },
    { name: "Frank Miller", rating: "★★★☆☆", phone: "(666) 777-8888", address: "606 Sixth St, Denver, CO", photo: "https://via.placeholder.com/150" },
    { name: "Grace Wilson", rating: "★★★★☆", phone: "(777) 888-9999", address: "707 Seventh St, Portland, OR", photo: "https://via.placeholder.com/150" },
    { name: "Henry Moore", rating: "★★★★★", phone: "(888) 999-0000", address: "808 Eighth St, Chicago, IL", photo: "https://via.placeholder.com/150" },
    { name: "Ivy Taylor", rating: "★★★☆☆", phone: "(999) 000-1111", address: "909 Ninth St, San Francisco, CA", photo: "https://via.placeholder.com/150" },
    { name: "Jack Anderson", rating: "★★★★☆", phone: "(000) 111-2222", address: "1000 Tenth St, Las Vegas, NV", photo: "https://via.placeholder.com/150" },
    { name: "Kathy Lee", rating: "★★★★★", phone: "(123) 456-7890", address: "1111 Eleventh St, Phoenix, AZ", photo: "https://via.placeholder.com/150" },
    { name: "Liam Johnson", rating: "★★★★☆", phone: "(234) 567-8901", address: "1212 Twelfth St, Atlanta, GA", photo: "https://via.placeholder.com/150" },
    { name: "Mia Brown", rating: "★★★☆☆", phone: "(345) 678-9012", address: "1313 Thirteenth St, Dallas, TX", photo: "https://via.placeholder.com/150" },
    { name: "Noah Smith", rating: "★★★★★", phone: "(456) 789-0123", address: "1414 Fourteenth St, Boston, MA", photo: "https://via.placeholder.com/150" }
];

function displayLawyers() {
    const lawyerList = document.getElementById("lawyer-list");
    lawyers.forEach(lawyer => {
        const card = document.createElement("div");
        card.classList.add("lawyer-card");
        card.innerHTML = `
            
            <div class="lawyer-info">
                <h2>${lawyer.name}</h2>
                <p class="rating-label">Rating: <span class="rating">${lawyer.rating.replace(/★/g, '<span class="star">★</span>').replace(/☆/g, '<span class="star">☆</span>')}</span></p>
                <p class="phone-label">Phone: ${lawyer.phone}</p>
                <p><a href="https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(lawyer.address)}" target="_blank">${lawyer.address}</a></p>
            </div>
        `;
        lawyerList.appendChild(card);
    });
}

document.addEventListener("DOMContentLoaded", displayLawyers);
