VANTA.WAVES({
    el: "#vanta-bg",
    mouseControls: true,
    touchControls: true,
    gyroControls: false,
    minHeight: 200.00,
    minWidth: 200.00,
    scale: 1.00,
    scaleMobile: 1.00,
    color: 0x1e3a47,
    shininess: 35.00,
    waveHeight: 15.00,
    waveSpeed: 0.75,
    zoom: 0.65
});

// Enhanced dataset for human rights and articles
const humanRightsData = [
    {
        id: 1,
        title: "Right to Life",
        summary: "Everyone has the right to life, liberty, and security of person.",
        articles: [{ section: "Article 3", content: "Everyone has the right to life, liberty and security of person." }],
        description: "The right to life is the most fundamental of all human rights. It affirms that every human being has the inherent right to life and that this right shall be protected by law.",
        importance: "This right is essential as it forms the basis for all other human rights. Without the right to life, no other rights can be enjoyed.",
        examples: [
            "Protection against arbitrary killing",
            "Access to life-saving medical treatment",
            "Protection of life in armed conflict",
            "Investigation of suspicious deaths"
        ],
        relatedRights: ["Right to Security", "Right to Health", "Freedom from Torture"]
    },
    {
        id: 2,
        title: "Freedom from Torture",
        summary: "No one shall be subjected to torture or to cruel, inhuman or degrading treatment.",
        articles: [{ section: "Article 5", content: "No one shall be subjected to torture or to cruel, inhuman or degrading treatment or punishment." }],
        description: "This fundamental right protects all individuals from being subjected to torture, cruel treatment, or degrading punishment. It is an absolute right that cannot be suspended even in times of emergency.",
        importance: "This right is crucial for protecting human dignity and physical integrity. It represents a universal value and a peremptory norm of international law.",
        examples: [
            "Protection against physical torture",
            "Prevention of psychological torture",
            "Prohibition of inhuman prison conditions",
            "Ban on corporal punishment"
        ],
        relatedRights: ["Right to Life", "Right to Human Dignity", "Right to Fair Trial"]
    },
    {
        id: 3,
        title: "Right to Privacy",
        summary: "Everyone has the right to privacy, family, home, and correspondence.",
        articles: [{ section: "Article 12", content: "No one shall be subjected to arbitrary interference with his privacy, family, home or correspondence." }],
        description: "The right to privacy protects individuals from unwarranted intrusion into their personal lives. It encompasses personal data protection, private communications, and family life.",
        importance: "Privacy is fundamental to human dignity and other key values such as freedom of association and freedom of expression.",
        examples: [
            "Protection of personal data",
            "Privacy of communications",
            "Respect for family life",
            "Protection against surveillance"
        ],
        relatedRights: ["Freedom of Expression", "Right to Family Life", "Right to Reputation"]
    },
    {
        id: 4,
        title: "Freedom of Expression",
        summary: "Everyone has the right to freedom of opinion and expression.",
        articles: [{ section: "Article 19", content: "Everyone has the right to freedom of opinion and expression; this right includes freedom to hold opinions without interference and to seek, receive and impart information and ideas through any media." }],
        description: "Freedom of expression is essential for personal development, democratic discourse, and the pursuit of truth. It protects various forms of expression including speech, writing, art, and media.",
        importance: "This right enables democratic participation, cultural expression, and the free exchange of ideas necessary for societal progress.",
        examples: [
            "Freedom of the press",
            "Right to protest",
            "Artistic expression",
            "Academic freedom"
        ],
        relatedRights: ["Freedom of Assembly", "Right to Information", "Freedom of Thought"]
    },
    {
        id: 5,
        title: "Right to Education",
        summary: "Everyone has the right to education.",
        articles: [{ section: "Article 26", content: "Everyone has the right to education. Education shall be free, at least in the elementary and fundamental stages." }],
        description: "Education is both a human right in itself and an indispensable means of realizing other human rights. It enables individuals to develop their personalities and capabilities.",
        importance: "Education is crucial for personal development, economic opportunity, and meaningful participation in society.",
        examples: [
            "Free primary education",
            "Access to higher education",
            "Quality educational standards",
            "Equal educational opportunities"
        ],
        relatedRights: ["Right to Work", "Right to Development", "Cultural Rights"]
    },
    {
        id: 6,
        title: "Right to Work",
        summary: "Everyone has the right to work, to free choice of employment.",
        articles: [{ section: "Article 23", content: "Everyone has the right to work, to free choice of employment, to just and favorable conditions of work and to protection against unemployment." }],
        description: "The right to work encompasses the opportunity to earn a living through freely chosen work, with fair conditions and protection against unemployment.",
        importance: "Work provides the means for economic sustenance and personal fulfillment while contributing to community development.",
        examples: [
            "Fair wages",
            "Safe working conditions",
            "Equal employment opportunities",
            "Protection against forced labor"
        ],
        relatedRights: ["Right to Fair Wages", "Right to Rest", "Freedom from Discrimination"]
    },
    {
        id: 7,
        title: "Right to Health",
        summary: "Everyone has the right to the highest attainable standard of health.",
        articles: [{ section: "Article 25", content: "Everyone has the right to a standard of living adequate for the health and well-being of himself and of his family." }],
        description: "The right to health includes access to healthcare services, healthy working conditions, and protection against environmental health threats.",
        importance: "Health is fundamental to human dignity and essential for the exercise of other human rights.",
        examples: [
            "Access to medical care",
            "Public health protection",
            "Mental health services",
            "Clean environment"
        ],
        relatedRights: ["Right to Life", "Right to Clean Environment", "Right to Social Security"]
    },
    {
        id: 8,
        title: "Right to Fair Trial",
        summary: "Everyone is entitled to a fair and public hearing.",
        articles: [{ section: "Article 10", content: "Everyone is entitled in full equality to a fair and public hearing by an independent and impartial tribunal." }],
        description: "The right to a fair trial ensures justice through proper legal procedures, impartial courts, and equal treatment under the law.",
        importance: "Fair trials are essential for protecting individual rights and maintaining the rule of law.",
        examples: [
            "Access to legal representation",
            "Presumption of innocence",
            "Right to appeal",
            "Public hearings"
        ],
        relatedRights: ["Right to Legal Aid", "Right to Justice", "Freedom from Arbitrary Arrest"]
    },
    {
        id: 9,
        title: "Freedom of Religion",
        summary: "Everyone has the right to freedom of thought, conscience and religion.",
        articles: [{ section: "Article 18", content: "Everyone has the right to freedom of thought, conscience and religion; this right includes freedom to change his religion or belief." }],
        description: "Religious freedom protects the right to believe, practice, and change one's religion or beliefs without interference.",
        importance: "This right is fundamental to personal identity and spiritual development.",
        examples: [
            "Religious practice",
            "Freedom to convert",
            "Religious education",
            "Conscientious objection"
        ],
        relatedRights: ["Freedom of Expression", "Cultural Rights", "Freedom of Assembly"]
    },
    {
        id: 10,
        title: "Right to Nationality",
        summary: "Everyone has the right to a nationality.",
        articles: [{ section: "Article 15", content: "Everyone has the right to a nationality. No one shall be arbitrarily deprived of his nationality." }],
        description: "Nationality provides legal recognition and protection by a state, ensuring access to various rights and services.",
        importance: "Nationality is crucial for political participation and access to state services.",
        examples: [
            "Citizenship rights",
            "Protection against statelessness",
            "Right to documentation",
            "Consular protection"
        ],
        relatedRights: ["Right to Political Participation", "Freedom of Movement", "Right to Identity"]
    },
    {
        id: 11,
        title: "Right to Property",
        summary: "Everyone has the right to own property.",
        articles: [{ section: "Article 17", content: "Everyone has the right to own property alone as well as in association with others. No one shall be arbitrarily deprived of his property." }],
        description: "The right to property protects ownership and use of possessions, including protection against arbitrary deprivation.",
        importance: "Property rights provide economic security and enable personal autonomy.",
        examples: [
            "Property ownership",
            "Inheritance rights",
            "Protection from seizure",
            "Intellectual property"
        ],
        relatedRights: ["Right to Housing", "Economic Rights", "Right to Development"]
    },
    {
        id: 12,
        title: "Right to Asylum",
        summary: "Everyone has the right to seek asylum from persecution.",
        articles: [{ section: "Article 14", content: "Everyone has the right to seek and to enjoy in other countries asylum from persecution." }],
        description: "The right to asylum protects those fleeing persecution by allowing them to seek protection in other countries.",
        importance: "Asylum is crucial for protecting those facing persecution in their home countries.",
        examples: [
            "Refugee protection",
            "Non-refoulement",
            "Humanitarian assistance",
            "Family reunification"
        ],
        relatedRights: ["Freedom of Movement", "Right to Life", "Freedom from Torture"]
    },
    {
        id: 13,
        title: "Right to Marriage",
        summary: "Everyone has the right to marry and found a family.",
        articles: [{ section: "Article 16", content: "Men and women of full age have the right to marry and to found a family." }],
        description: "This right protects the freedom to marry, establish a family, and enjoy family life without discrimination.",
        importance: "Marriage and family rights are fundamental to social structure and personal fulfillment.",
        examples: [
            "Choice of spouse",
            "Family planning",
            "Equal rights in marriage",
            "Protection of family unit"
        ],
        relatedRights: ["Right to Privacy", "Children's Rights", "Gender Equality"]
    },
    {
        id: 14,
        title: "Freedom of Assembly",
        summary: "Everyone has the right to peaceful assembly.",
        articles: [{ section: "Article 20", content: "Everyone has the right to freedom of peaceful assembly and association." }],
        description: "This right enables people to gather peacefully for various purposes, including protests and demonstrations.",
        importance: "Assembly rights are essential for democratic participation and social change.",
        examples: [
            "Peaceful protests",
            "Public meetings",
            "Political gatherings",
            "Labor strikes"
        ],
        relatedRights: ["Freedom of Expression", "Right to Association", "Political Rights"]
    },
    {
        id: 15,
        title: "Right to Social Security",
        summary: "Everyone has the right to social security.",
        articles: [{ section: "Article 22", content: "Everyone, as a member of society, has the right to social security." }],
        description: "Social security ensures protection against various life risks and economic hardships.",
        importance: "This right provides essential safety nets and promotes social welfare.",
        examples: [
            "Unemployment benefits",
            "Healthcare coverage",
            "Retirement pensions",
            "Disability support"
        ],
        relatedRights: ["Right to Adequate Standard of Living", "Right to Health", "Workers' Rights"]
    },
    {
        id: 16,
        title: "Right to Rest and Leisure",
        summary: "Everyone has the right to rest and leisure.",
        articles: [{ section: "Article 24", content: "Everyone has the right to rest and leisure, including reasonable limitation of working hours and periodic holidays with pay." }],
        description: "This right ensures adequate rest from work and time for leisure activities.",
        importance: "Rest and leisure are essential for physical and mental well-being.",
        examples: [
            "Limited working hours",
            "Paid holidays",
            "Weekend rest",
            "Work-life balance"
        ],
        relatedRights: ["Right to Work", "Right to Health", "Cultural Rights"]
    },
    {
        id: 17,
        title: "Right to Participate in Government",
        summary: "Everyone has the right to take part in government.",
        articles: [{ section: "Article 21", content: "Everyone has the right to take part in the government of his country, directly or through freely chosen representatives." }],
        description: "This right ensures political participation and democratic representation.",
        importance: "Political participation is fundamental to democracy and self-governance.",
        examples: [
            "Voting rights",
            "Running for office",
            "Public service",
            "Political representation"
        ],
        relatedRights: ["Freedom of Expression", "Right to Information", "Freedom of Assembly"]
    },
    {
        id: 18,
        title: "Right to Culture",
        summary: "Everyone has the right to participate in cultural life.",
        articles: [{ section: "Article 27", content: "Everyone has the right freely to participate in the cultural life of the community." }],
        description: "Cultural rights protect participation in cultural activities and access to cultural heritage.",
        importance: "Culture is essential for identity, creativity, and community cohesion.",
        examples: [
            "Cultural expression",
            "Access to arts",
            "Scientific participation",
            "Cultural heritage protection"
        ],
        relatedRights: ["Right to Education", "Freedom of Expression", "Indigenous Rights"]
    },
    {
        id: 19,
        title: "Right to Development",
        summary: "Everyone has the right to development and progress.",
        articles: [{ section: "Declaration on the Right to Development", content: "The right to development is an inalienable human right." }],
        description: "This right encompasses economic, social, cultural, and political development.",
        importance: "Development rights enable individuals and societies to reach their full potential.",
        examples: [
            "Economic growth",
            "Social progress",
            "Environmental sustainability",
            "Technology access"
        ],
        relatedRights: ["Right to Education", "Right to Work", "Environmental Rights"]
    },
    {
        id: 20,
        title: "Right to Clean Environment",
        summary: "Everyone has the right to a clean and healthy environment.",
        articles: [{ section: "Environmental Rights", content: "Everyone has the right to live in a clean, healthy, and sustainable environment." }],
        description: "Environmental rights protect access to clean air, water, and a sustainable environment.",
        importance: "A healthy environment is essential for human survival and well-being.",
        examples: [
            "Clean air and water",
            "Environmental protection",
            "Climate action",
            "Biodiversity conservation"
        ],
        relatedRights: ["Right to Health", "Right to Life", "Right to Development"]
    }
];

// Populate the rights cards
const cardContainer = document.querySelector('.card-container');
humanRightsData.forEach(right => {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
        <h3>${right.title}</h3>
        <p>${right.summary}</p>
        <a href="#" class="read-more" data-id="${right.id}">Read More</a>
    `;
    cardContainer.appendChild(card);
});

// Enhanced modal functionality
const modal = document.getElementById('article-modal');
const modalTitle = document.querySelector('.modal-title');
const modalBody = document.querySelector('.modal-body');
const modalClose = document.querySelector('.modal-close');

// Open modal with enhanced content
document.addEventListener('click', function(e) {
    if (e.target.classList.contains('read-more')) {
        e.preventDefault();
        const rightId = parseInt(e.target.getAttribute('data-id'));
        const right = humanRightsData.find(r => r.id === rightId);
        
        if (right) {
            modalTitle.textContent = right.title;
            modalBody.innerHTML = `
                <div class="modal-section">
                    <h3>Official Article</h3>
                    ${right.articles.map(article => 
                        `<strong>${article.section}:</strong> ${article.content}`).join('<br><br>')}
                </div>

                <div class="modal-section">
                    <h3>Description</h3>
                    <p>${right.description || right.summary}</p>
                </div>

                ${right.importance ? `
                <div class="modal-section">
                    <h3>Importance</h3>
                    <p>${right.importance}</p>
                </div>
                ` : ''}

                ${right.examples ? `
                <div class="modal-section">
                    <h3>Examples & Applications</h3>
                    <ul class="examples-list">
                        ${right.examples.map(example => `<li>${example}</li>`).join('')}
                    </ul>
                </div>
                ` : ''}

                ${right.relatedRights ? `
                <div class="modal-section">
                    <h3>Related Rights</h3>
                    <div class="related-rights">
                        ${right.relatedRights.map(related => 
                            `<span class="related-right-tag">${related}</span>`).join('')}
                    </div>
                </div>
                ` : ''}
            `;
            modal.style.display = 'block';
            setTimeout(() => {
                modal.classList.add('active');
            }, 10);
        }
    }
});

// Close modal when X is clicked
modalClose.addEventListener('click', function() {
    modal.classList.remove('active');
    setTimeout(() => {
        modal.style.display = 'none';
    }, 500);
});

// Close modal when clicking outside the content
window.addEventListener('click', function(e) {
    if (e.target === modal) {
        modal.classList.remove('active');
        setTimeout(() => {
            modal.style.display = 'none';
        }, 500);
    }
});