const channelsNavItem = document.getElementById('channels');
const dropDownContent = document.getElementById('headerNavDropdown');

if (!channelsNavItem || !dropDownContent) {
    throw new Error('The channels navigation item or dropdown was not found.');
}

channelsNavItem.addEventListener('mouseenter', function () {
    dropDownContent.classList.add('is-open');
});

channelsNavItem.addEventListener('mouseleave', function () {
    dropDownContent.classList.remove('is-open');
});


const upButton = document.getElementById("upButton")

upButton.addEventListener("click", function() {
    window.scrollTo({ top: 0, behavior: "smooth" })
})

function updateUpButtonVisibility() {
    upButton.classList.toggle("upbuttonHidden", window.scrollY === 0);
}

window.addEventListener("scroll", updateUpButtonVisibility);
updateUpButtonVisibility();

const newsletterForm = document.getElementById("newsletterForm");
const newsletterEmail = document.getElementById("newsletterEmail");
const toastNews = document.getElementById("newsletterToast");

if (!newsletterForm || !newsletterEmail || !toastNews) {
    throw new Error("The newsletter form, email input, or toast was not found.");
}

newsletterForm.addEventListener("submit", function(event) {
    event.preventDefault();
    toastNews.textContent = "Email address is valid.";
    toastNews.hidden = false;

    window.setTimeout(function() {
        toastNews.hidden = true;
    }, 3000);
});