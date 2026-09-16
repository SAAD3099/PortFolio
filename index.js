document.addEventListener("DOMContentLoaded", () => {

    console.log("Muhammad Saad's Portfolio Loaded Successfully!");

    // =========================
    // Smooth Scroll
    // =========================
    const navLinks = document.querySelectorAll(".nav-links a");

    navLinks.forEach(link => {
        link.addEventListener("click", (e) => {

            e.preventDefault();

            const targetId = link.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: "smooth"
                });
            }

        });
    });

    // =========================
    // Active Navbar
    // =========================
    const sections = document.querySelectorAll("section");

    window.addEventListener("scroll", () => {

        let current = "";

        sections.forEach(section => {

            const sectionTop = section.offsetTop - 100;

            if (window.scrollY >= sectionTop) {
                current = section.getAttribute("id");
            }

        });

        navLinks.forEach(link => {

            link.classList.remove("active");

            if (link.getAttribute("href") === "#" + current) {
                link.classList.add("active");
            }

        });

    });

    // =========================
    // Reveal Animation
    // =========================
    const revealElements = document.querySelectorAll(
        ".project-card, .skill-category, .exp-card, .about-container, .contact-container"
    );

    function reveal() {

        revealElements.forEach(element => {

            const windowHeight = window.innerHeight;
            const revealTop = element.getBoundingClientRect().top;

            if (revealTop < windowHeight - 100) {
                element.classList.add("show");
            }

        });

    }

    window.addEventListener("scroll", reveal);
    reveal();

    // =========================
    // Typing Effect
    // =========================
    const typingElement = document.querySelector(".highlight");

    const text = "HTML • CSS • JavaScript • Python";

    if (typingElement) {

        typingElement.textContent = "";

        let index = 0;

        function typing() {

            if (index < text.length) {

                typingElement.textContent += text.charAt(index);
                index++;

                setTimeout(typing, 70);

            }

        }

        typing();

    }

});