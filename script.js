 /* FADE IN */
const faders = document.querySelectorAll(".fade-in");
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
});
faders.forEach(f => observer.observe(f));

/* EMAILJS */
(function(){
    emailjs.init("0aWJyx0vum_dxjFqt"); // من EmailJS
})();

document.getElementById("contact-form").addEventListener("submit", function(e) {
    e.preventDefault();

    emailjs.sendForm(
        "service_o5di91q",
        "template_7q54492",
        this
    ).then(() => {
        document.getElementById("form-status").innerText = "Message sent successfully ✅";
        this.reset();
    }, () => {
        document.getElementById("form-status").innerText = "Failed to send message ❌";
    });
});
const reveals = document.querySelectorAll(".reveal");

function revealOnScroll() {
    reveals.forEach((element) => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const revealPoint = 120;

        if (elementTop < windowHeight - revealPoint) {
            element.classList.add("show");
        }
    });
}

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);

