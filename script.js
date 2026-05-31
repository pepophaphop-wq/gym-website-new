// FITLESS 2 FITNESS - JAVASCRIPT

// 1. Navbar Scroll Effect
window.addEventListener('scroll', function(){
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50){
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// 2. Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e){
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target){
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// 3. Counter Animation
const counters = document.querySelectorAll('.stat-number');
const speed = 200;
const animateCounters = () => {
    counters.forEach(counter => {
        const target = +counter.getAttribute('data-target');
        const count = +counter.innerText;
        const inc = target / speed;
        if (count < target) {
            counter.innerText = Math.ceil(count + inc);
            setTimeout(animateCounters, 20);
        } else {
            counter.innerText = target + '+';
        }
    });
};

// 4. Fade Up Animation
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);
document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));

// 5. Parallax Effect
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const heroBg = document.querySelector('.hero-bg');
    if (heroBg) {
        heroBg.style.transform = `translateY(${scrolled * 0.5}px) scale(1.1)`;
    }
});

// 6. WhatsApp Button Tracking
document.querySelectorAll('.btn-whatsapp, .float-whatsapp').forEach(btn => {
    btn.addEventListener('click', () => {
        console.log('WhatsApp clicked!');
    });
});