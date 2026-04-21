const bookBtns = document.querySelectorAll(".hero button, .about-btn");
bookBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        document.querySelector("#contact").scrollIntoView({
            behavior: "smooth"
        });
    });
});


const elements = document.querySelectorAll('.fade');
window.addEventListener('scroll', () => {
    elements.forEach(el => {
        const position = el.getBoundingClientRect().top;
        if (position < window.innerHeight - 100) {
            el.classList.add('show');
        }
    });
});


const form = document.querySelector("form");
form.addEventListener("submit", function(e) {
    e.preventDefault();

    const nameInput = document.querySelector("input[type='text']");
    const emailInput = document.querySelector("input[type='email']");
    const messageInput = document.querySelector("textarea");

    if (nameInput.value.trim() === "") {
        nameInput.focus();
        nameInput.style.border = "2px solid red";
        nameInput.setAttribute("placeholder", "Please fill your name");
        return;
    }

    if (emailInput.value.trim() === "") {
        emailInput.focus();
        emailInput.style.border = "2px solid red";
        emailInput.setAttribute("placeholder", "Please fill your email");
        return;
    }

    if (messageInput.value.trim() === "") {
        messageInput.focus();
        messageInput.style.border = "2px solid red";
        messageInput.setAttribute("placeholder", "Please write your message");
        return;
    }

    alert("Thank you! We will contact you soon 💖");
    form.reset();
});


const inputs = document.querySelectorAll("input, textarea");
inputs.forEach(input => {
    input.addEventListener("input", () => {
        input.style.border = "1px solid #ccc";
    });
});


const productContainer = document.querySelector(".products");
const leftBtn = document.querySelector(".left");
const rightBtn = document.querySelector(".right");

if (leftBtn && rightBtn && productContainer) {

    const scrollAmount = productContainer.querySelector("img").clientWidth + 20;

    leftBtn.addEventListener("click", () => {
        productContainer.scrollBy({
            left: -scrollAmount,
            behavior: "smooth"
        });
    });

    rightBtn.addEventListener("click", () => {
        productContainer.scrollBy({
            left: scrollAmount,
            behavior: "smooth"
        });
    });
}