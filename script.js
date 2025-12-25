// Typing Animation
var typed = new Typed('#typing-text', {
    strings: ['Senior .NET Developer', 'Full Stack Coder', 'React & Angular Dev', 'Microservices Architect'],
    typeSpeed: 50,
    backSpeed: 50,
    backDelay: 1000,
    loop: true
});

// Navbar change on scroll (Optional)
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('bg-dark');
    } else {
        navbar.classList.remove('bg-dark');
    }
});