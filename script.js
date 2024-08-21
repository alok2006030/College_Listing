// Dummy data for colleges
const colleges = [
    {
        "rank": 1,
        "name": "IIT Madras - Indian Institute of Technology [IITM], Chennai",
        "location": "Chennai, Tamil Nadu | AICTE Approved",
        "course": "B.Tech Computer Science Engineering",
        "cutoff": "JEE-Advanced 2023 Cutoff : 144",
        "fees": 209550,
        "placement": {
            "average": "₹21,48,000",
            "highest": "₹1,98,00,000"
        },
        "userReviews": {
            "rating": 8.6,
            "total": 289
        },
        "ranking": "3rd/131 in India",
        "featured": false,
        "brochureLink": "https://example.com/iitm-brochure.pdf",
        "image": "iit_madras.png"
    },
    {
        "rank": 2,
        "name": "IIT Delhi - Indian Institute of Technology [IITD], New Delhi",
        "location": "New Delhi, Delhi | AICTE Approved",
        "course": "B.Tech Electrical Engineering",
        "cutoff": "JEE-Advanced 2023 Cutoff : 112",
        "fees": 254650,
        "placement": {
            "average": "₹25,82,000",
            "highest": "₹2,00,00,000"
        },
        "userReviews": {
            "rating": 8.7,
            "total": 485
        },
        "ranking": "1st/35 in India",
        "featured": false,
        "brochureLink": "https://example.com/iitd-brochure.pdf",
        "image": "iit_delhi.png"
    },
    {
        "rank": 3,
        "name": "Parul University, Vadodara",
        "location": "Vadodara, Gujarat | AICTE Approved",
        "course": "B.Tech Civil Engineering",
        "cutoff": "GUJCET 2023 Cutoff : 88",
        "fees": 149000,
        "placement": {
            "average": "₹4,00,000",
            "highest": "₹30,00,000"
        },
        "userReviews": {
            "rating": 8.1,
            "total": 802
        },
        "ranking": "99th/147 in India",
        "featured": true,
        "brochureLink": "https://example.com/parul-brochure.pdf",
        "image": "parul.png"
    },
    {
        "rank": 4,
        "name": "IIT Bombay - Indian Institute of Technology [IITB], Mumbai",
        "location": "Mumbai, Maharashtra | AICTE Approved",
        "course": "B.Tech Chemical Engineering",
        "cutoff": "JEE-Advanced 2023 Cutoff : 133",
        "fees": 272050,
        "placement": {
            "average": "₹21,82,000",
            "highest": "₹3,67,00,000"
        },
        "userReviews": {
            "rating": 8.8,
            "total": 306
        },
        "ranking": "2nd/35 in India",
        "featured": false,
        "brochureLink": "https://example.com/iitb-brochure.pdf",
        "image": "iit_bombay.png"
    },
    // Add more dummy data as needed
];

let displayedColleges = [...colleges]; // Copy of original data for search and sort
let sortOrder = 'asc'; // Default sort order

const collegeTableBody = document.querySelector('#collegeTable tbody');

// Function to render rows
function renderRows(data) {
    collegeTableBody.innerHTML = ''; // Clear existing rows
    data.forEach(college => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${college.rank}</td>
            <td>
                <div class="college-info">
                    <img src="${college.image}" alt="${college.name} Logo">
                    <div class="college-details">
                        <strong class="text-large">${college.name}</strong><br>
                        <span class="college-location text-small">${college.location}</span><br>
                        <span class="college-course text-small">${college.course}</span><br>
                        <span class="college-cutoff text-small">${college.cutoff}</span><br>
                        <div class="action-buttons">
                            <button class="apply-btn" onclick="applyNow(${college.rank})"><img src="arrow.png" alt="Arrow">Apply Now</button>
                            <a href="${college.brochureLink}" class="download-btn" download><img src="download.png" alt="Download">Download Brochure</a>
                            <label class="compare-checkbox">
                                <input type="checkbox" onclick="addToCompare(${college.rank})"> Add to Compare
                            </label>
                        </div>
                    </div>
                </div>
            </td>
            <td>
                <span class="college-fees">₹${college.fees.toLocaleString()}</span><br>
                <span class="college-course-detail text-small">BE/B.Tech </br>- 1st Year Fees</span></br>
                <span class="college-compare college-fees-compare" onclick="compareFees(${college.rank})"></br><img src="compare.png" alt="Compare">Compare Fees</span>
            </td>
            <td>
                <span class="placement-average text-bold">${college.placement.average}</span><br>
                <span class="package text-small">Average Package</span></br>
                <span class="placement-highest text-bold">${college.placement.highest}</span></br>
                <span class="package text-small">Highest Package</span></br>
                <span class="college-compare college-placement-compare" onclick="comparePlacement(${college.rank})"><img src="compare.png" alt="Compare">Compare Placement</span>
            </td>
            <td>
                <span class="user-rating text-large"><img src="star.png" alt="Star">${college.userReviews.rating} / 10</span><br>
                <span class="user-reviews text-small">Based on ${college.userReviews.total} User Reviews</span><br>
                <div class="dropdown">
                    <span class="college-compare"><img src="done.png" alt="Done">Best in Social Life</span>
                    <div class="dropdown">
    <button class="dropbtn"><img src="down.png" alt=""></button>
    <div class="dropdown-content">
        <span>Ranked 1st in Social Life</span>
        <span>Ranked 1st in Social Life</span>
        <span>Ranked 1st in Social Life</span>
    </div>
</div>
                </div>
            </td>
            <td>
                <div class="dropdown">
                    <span class="college-ranking">#${college.ranking}<img src="down.png" alt="Down"></span><br>
                    <div class="dropdown-content">
        <span>Ranked 1st in Social Life</span>
        <span>Ranked 2nd in Academics</span>
        <span>Ranked 3rd in Campus Facilities</span>
        <span>Ranked 4th in Placements</span>
        <span>Ranked 5th in Faculty</span>
        <span>Ranked 6th in Research</span>
        <span>Ranked 7th in Innovation</span>
        <span>Ranked 8th in Diversity</span>
        <span>Ranked 9th in Industry Connections</span>
        <span>+9 More</span>
    </div>
                </div>
            </td>
        `;
        collegeTableBody.appendChild(row);
    });
}

// Initial render with 10 rows
renderRows(displayedColleges.slice(0, 10));

// Infinite scroll functionality
let rowCount = 10;
window.addEventListener('scroll', () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        rowCount += 10;
        renderRows(displayedColleges.slice(0, rowCount));
    }
});

// Function to apply for college
function applyNow(rank) {
    alert(`Applying for college ranked #${rank}`);
}

// Function to add college to comparison
function addToCompare(rank) {
    alert(`Added college ranked #${rank} to comparison`);
}

// Function to compare fees
function compareFees(rank) {
    alert(`Comparing fees for college ranked #${rank}`);
}

// Function to compare placement
function comparePlacement(rank) {
    alert(`Comparing placement for college ranked #${rank}`);
}

// Function to search colleges
function searchCollege() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    displayedColleges = colleges.filter(college => 
        college.name.toLowerCase().includes(searchTerm)
    );
    renderRows(displayedColleges.slice(0, rowCount));
}

// Function to sort colleges
function sortColleges() {
    const sortBy = document.getElementById('sortSelect').value;
    displayedColleges.sort((a, b) => {
        const aValue = sortBy.includes('.') ? a[sortBy.split('.')[0]][sortBy.split('.')[1]] : a[sortBy];
        const bValue = sortBy.includes('.') ? b[sortBy.split('.')[0]][sortBy.split('.')[1]] : b[sortBy];
        
        if (typeof aValue === 'string') {
            return sortOrder === 'asc' ? aValue.localeCompare(bValue) : bValue.localeCompare(aValue);
        } else {
            return sortOrder === 'asc' ? aValue - bValue : bValue - aValue;
        }
    });
    renderRows(displayedColleges.slice(0, rowCount));
}

// Function to toggle sort order
function toggleSortOrder() {
    sortOrder = sortOrder === 'asc' ? 'desc' : 'asc';
    sortColleges();
}
