// ========== NAVBAR FUNCTIONALITY ==========
const navbar = document.getElementById('navbar');
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');
const navLinks = document.querySelectorAll('.nav-link');

// Toggle mobile menu
navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    
    // Animate hamburger
    const spans = navToggle.querySelectorAll('span');
    if (navMenu.classList.contains('active')) {
        spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
        spans[1].style.opacity = '0';
        spans[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';
    } else {
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
    }
});

// Close menu when clicking on a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        const spans = navToggle.querySelectorAll('span');
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
    });
});

// Navbar scroll effect
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Active nav link on scroll
const sections = document.querySelectorAll('section');

window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= (sectionTop - 100)) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// ========== BACK TO TOP BUTTON ==========
const backToTopBtn = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTopBtn.classList.add('show');
    } else {
        backToTopBtn.classList.remove('show');
    }
});

backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// ========== SKILL BARS ANIMATION ==========
const skillBars = document.querySelectorAll('.skill-progress');

const animateSkills = () => {
    skillBars.forEach(bar => {
        const barPosition = bar.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;
        
        if (barPosition < screenPosition) {
            const width = bar.style.width;
            bar.style.width = '0';
            setTimeout(() => {
                bar.style.width = width;
            }, 100);
        }
    });
};

// Trigger animation on scroll
let skillsAnimated = false;
window.addEventListener('scroll', () => {
    if (!skillsAnimated) {
        const skillsSection = document.getElementById('skills');
        const skillsPosition = skillsSection.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;
        
        if (skillsPosition < screenPosition) {
            animateSkills();
            skillsAnimated = true;
        }
    }
});

// ========== FORM SUBMISSION ==========
const contactForm = document.querySelector('.contact-form');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(contactForm);
    const name = contactForm.querySelector('input[type="text"]').value;
    const email = contactForm.querySelector('input[type="email"]').value;
    const subject = contactForm.querySelectorAll('input[type="text"]')[1].value;
    const message = contactForm.querySelector('textarea').value;
    
    // Simple validation
    if (name && email && subject && message) {
        // Show success message
        alert(`Thank you, ${name}! Your message has been sent successfully. I'll get back to you soon! 🚀`);
        
        // Reset form
        contactForm.reset();
    } else {
        alert('Please fill in all fields! 📝');
    }
});

// ========== SMOOTH SCROLL FOR ALL LINKS ==========
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ========== TYPING EFFECT FOR HERO SUBTITLE ==========
const heroSubtitle = document.querySelector('.hero-subtitle');
const subtitleText = heroSubtitle.textContent;
heroSubtitle.textContent = '';

let i = 0;
const typeWriter = () => {
    if (i < subtitleText.length) {
        heroSubtitle.textContent += subtitleText.charAt(i);
        i++;
        setTimeout(typeWriter, 100);
    }
};

// Start typing effect after page load
window.addEventListener('load', () => {
    setTimeout(typeWriter, 500);
});

// ========== INTERSECTION OBSERVER FOR ANIMATIONS ==========
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all cards
const cards = document.querySelectorAll('.info-card, .skill-category, .project-card');
cards.forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = 'all 0.6s ease';
    observer.observe(card);
});

// ========== PARTICLE BACKGROUND ANIMATION ==========
const heroParticles = document.querySelector('.hero-particles');

// Create random floating shapes
for (let i = 0; i < 15; i++) {
    const particle = document.createElement('div');
    particle.style.position = 'absolute';
    particle.style.width = Math.random() * 100 + 50 + 'px';
    particle.style.height = particle.style.width;
    particle.style.borderRadius = '50%';
    particle.style.background = i % 2 === 0 
        ? 'rgba(33, 150, 243, 0.05)' 
        : 'rgba(76, 175, 80, 0.05)';
    particle.style.left = Math.random() * 100 + '%';
    particle.style.top = Math.random() * 100 + '%';
    particle.style.animation = `particleFloat ${10 + Math.random() * 10}s ease-in-out infinite`;
    particle.style.animationDelay = Math.random() * 5 + 's';
    heroParticles.appendChild(particle);
}

// ========== PROJECT CARD HOVER EFFECT ==========
const projectCards = document.querySelectorAll('.project-card');

projectCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.querySelector('.project-image').style.transform = 'scale(1.05)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.querySelector('.project-image').style.transform = 'scale(1)';
    });
});

// ========== CONSOLE EASTER EGG ==========
console.log('%c👋 Hi there! Welcome to my portfolio!', 'color: #2196F3; font-size: 20px; font-weight: bold;');
console.log('%c🚀 Looking to hire? Let\'s connect!', 'color: #4CAF50; font-size: 16px;');
console.log('%c📧 adrian@example.com', 'color: #6C757D; font-size: 14px;');

// ========== PREVENT CONTEXT MENU (OPTIONAL) ==========
// Uncomment if you want to disable right-click
// document.addEventListener('contextmenu', (e) => {
//     e.preventDefault();
// });

// ========== CURSOR TRAIL EFFECT (OPTIONAL FANCY FEATURE) ==========
let cursorTrail = [];
const trailLength = 20;

document.addEventListener('mousemove', (e) => {
    cursorTrail.push({ x: e.clientX, y: e.clientY });
    if (cursorTrail.length > trailLength) {
        cursorTrail.shift();
    }
});

// ========== INITIALIZE ==========
console.log('✅ Portfolio website loaded successfully!');
