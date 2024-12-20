// JavaScript to control the popup
document.addEventListener("DOMContentLoaded", function () {
    const popup = document.getElementById("popup");
    const openPopupButton = document.querySelector("#catagory-icon");
    const closePopupButton = document.getElementById("close-popup");

    // Open popup when image is clicked
    openPopupButton.addEventListener("click", function () {
        popup.style.display = "flex";
    });

    // Close popup when close button is clicked
    closePopupButton.addEventListener("click", function () {
        popup.style.display = "none";
    });

    // Close popup when clicking outside the popup content
    window.addEventListener("click", function (event) {
        if (event.target === popup) {
            popup.style.display = "none";
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const popup = document.getElementById("skill-popup");
    const popupTitle = popup.querySelector("h2");
    const popupContent = popup.querySelector("p");
    const closePopupButton = document.getElementById("close-skill-popup");

    // Content for skills
    const skillContent = {
        "HTML": {
            title: "HTML",
            content: "Over the past three years, I have been working with HTML, learning the language and creating project after project."
        },
        "CSS": {
            title: "CSS",
            content: "I started using CSS at the same time as HTML. I eventually moved from plain CSS to Sass for better structure and efficiency."
        },
        "JS": {
            title: "JavaScript",
            content: "I began learning JavaScript a bit later due to its complexity compared to HTML and CSS. It's my first real programming language."
        },
        "DESIGN": {
            title: "Design",
            content: "I’m always trying to create new projects, portfolios, and card designs. I genuinely enjoy bringing the ideas in my head to life."
        }
    };


    // Function to open popup with content based on skill clicked
    function openPopup(skill) {
        // Set the popup title and content based on the skill
        popupTitle.textContent = skillContent[skill].title;
        popupContent.textContent = skillContent[skill].content;

        // Display the popup
        popup.style.display = "flex";
    }

    // Event listeners for each skill
    document.querySelectorAll(".skill").forEach(skillElement => {
        skillElement.addEventListener("click", function () {
            // Get the skill name from the inner text and open popup with that content
            const skillName = skillElement.textContent.trim();
            if (skillContent[skillName]) {
                openPopup(skillName);
            }
        });
    });

    // Close popup when close button is clicked
    closePopupButton.addEventListener("click", function () {
        popup.style.display = "none";
    });

    // Close popup when clicking outside the popup content
    window.addEventListener("click", function (event) {
        if (event.target === popup) {
            popup.style.display = "none";
        }
    });
});


document.addEventListener("DOMContentLoaded", function () {
    const birthDate = new Date("2005-03-11");
    const codingStartDate = new Date("2021-09-01");

    // Calculate age
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }

    // Calculate coding experience in years
    let codingExperience = today.getFullYear() - codingStartDate.getFullYear();
    if (today.getMonth() < codingStartDate.getMonth() ||
        (today.getMonth() === codingStartDate.getMonth() && today.getDate() < codingStartDate.getDate())) {
        codingExperience--;
    }

    // Display the bio for #bio
    const bio1Text = `${age} y/o software developer from the Netherlands. Started building websites (${codingExperience} years ago) and have been improving since. Besides working with code, I love making music to post to my artist channels and going outside to exercise.`;
    const bio = document.getElementById("bio");
    if (bio) {
        bio.textContent = bio1Text;
    } else {
        console.warn("Element with ID 'bio' not found.");
    }

    // Display the bio for #bio-2
    const bio2Text = `${age} y/o software developer from the Netherlands. Started building websites (${codingExperience} years ago) and have been improving since. Beyond coding, I channel my creativity into music production, sharing my tracks on artist channels to connect with listeners. I also enjoy staying active through indoor exercise, which helps me maintain a balanced and healthy lifestyle.`;
    const bio2 = document.getElementById("bio-2");
    if (bio2) {
        bio2.textContent = bio2Text;
    } else {
        console.warn("Element with ID 'bio-2' not found.");
    }
});


function openNav() {
    document.getElementById("myNav").style.display = "block";
}

function closeNav() {
    document.getElementById("myNav").style.display = "none";
}