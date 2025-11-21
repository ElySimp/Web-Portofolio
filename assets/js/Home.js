// ========== DARK MODE TOGGLE (PRIORITY - PALING ATAS!) ==========
document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('themeToggle');
    const body = document.body;

    if (!themeToggle) {
        console.error('❌ Theme toggle button NOT FOUND! Check HTML ID.');
        return;
    }

    console.log('✅ Theme toggle button found:', themeToggle);

    const themeIcon = themeToggle.querySelector('i');
    
    if (!themeIcon) {
        console.error('❌ Theme icon NOT FOUND inside button!');
        return;
    }

    // Load saved theme
    const savedTheme = localStorage.getItem('theme') || 'light';
    console.log('💾 Saved theme:', savedTheme);

    // Apply saved theme
    if (savedTheme === 'dark') {
        body.classList.add('dark-mode');
        themeIcon.classList.remove('fa-moon');
        themeIcon.classList.add('fa-sun');
        console.log('🌙 Dark mode applied from localStorage');
    }

    // Toggle function
    themeToggle.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        
        console.log('🔄 Toggle clicked!');
        
        body.classList.toggle('dark-mode');
        
        if (body.classList.contains('dark-mode')) {
            themeIcon.classList.remove('fa-moon');
            themeIcon.classList.add('fa-sun');
            localStorage.setItem('theme', 'dark');
            console.log('🌙 Switched to DARK mode');
        } else {
            themeIcon.classList.remove('fa-sun');
            themeIcon.classList.add('fa-moon');
            localStorage.setItem('theme', 'light');
            console.log('☀️ Switched to LIGHT mode');
        }
    });
    
    console.log('✅ Dark mode toggle initialized successfully!');
});

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

function setActiveNav() {
    let current = 'hero';
    
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
}

window.addEventListener('scroll', setActiveNav);

// ========== BACK TO TOP BUTTON ==========
const backToTopBtn = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
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

// ========== SEASON CARD HOVER EFFECT ==========
const seasonCards = document.querySelectorAll('.season-card');

seasonCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        const icon = this.querySelector('.card-icon i');
        icon.style.transform = 'scale(1.2) rotate(360deg)';
    });
    
    card.addEventListener('mouseleave', function() {
        const icon = this.querySelector('.card-icon i');
        icon.style.transform = 'scale(1) rotate(0deg)';
    });
});

// ========== CULTURE CARDS ANIMATION ==========
const cultureCards = document.querySelectorAll('.culture-card');

const observerOptions = {
    threshold: 0.2,
    rootMargin: '0px 0px -50px 0px'
};

const cardObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }, index * 100);
        }
    });
}, observerOptions);

cultureCards.forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = 'all 0.6s ease';
    cardObserver.observe(card);
});

// ========== FOOD CARDS ANIMATION ==========
const foodCards = document.querySelectorAll('.food-card');

foodCards.forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'scale(0.9)';
    card.style.transition = 'all 0.6s ease';
    cardObserver.observe(card);
});

cardObserver.observe = ((originalObserve) => {
    return function(element) {
        originalObserve.call(this, element);
    };
})(cardObserver.observe);

// ========== DESTINATION CARDS HOVER ==========
const destCards = document.querySelectorAll('.destination-card');

destCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.querySelector('.destination-image').style.transform = 'scale(1.1)';
        this.querySelector('.destination-image').style.filter = 'brightness(1.1)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.querySelector('.destination-image').style.transform = 'scale(1)';
        this.querySelector('.destination-image').style.filter = 'brightness(1)';
    });
});

// ========== LANTERN SWING ANIMATION ==========
const lanterns = document.querySelectorAll('.lantern');

lanterns.forEach((lantern, index) => {
    lantern.style.animationDelay = `${index * 0.3}s`;
    
    // Add random swing intensity
    const randomIntensity = 3 + Math.random() * 3;
    lantern.style.setProperty('--swing-intensity', `${randomIntensity}deg`);
});

// ========== DECORATIVE ELEMENTS GENERATION (IMPROVED) ==========

// Cherry Blossoms - Static, Random Positions (20 flowers)
const cherryContainer = document.querySelector('.spring-elements');
if (cherryContainer) {
    for (let i = 0; i < 20; i++) {
        const blossom = document.createElement('div');
        blossom.className = 'cherry-blossom';
        blossom.style.left = `${Math.random() * 100}%`;
        blossom.style.top = `${Math.random() * 100}%`;
        blossom.style.animationDelay = `${Math.random() * 4}s`;
        blossom.style.animationDuration = `${3 + Math.random() * 2}s`;
        cherryContainer.appendChild(blossom);
    }
}

// Sun Rays - 2 Suns with Rotating Rays
const sunContainer = document.querySelector('.summer-elements');
if (sunContainer) {
    // Create 2 suns
    const sun1 = document.createElement('div');
    sun1.className = 'sun sun-1';
    sunContainer.appendChild(sun1);
    
    const sun2 = document.createElement('div');
    sun2.className = 'sun sun-2';
    sunContainer.appendChild(sun2);
    
    // Add rotating rays around each sun
    [sun1, sun2].forEach(sun => {
        for (let i = 0; i < 12; i++) {
            const ray = document.createElement('div');
            ray.className = 'sun-ray';
            ray.style.transform = `rotate(${i * 30}deg)`;
            ray.style.animationDelay = `${i * 0.1}s`;
            sun.appendChild(ray);
        }
    });
}

// Falling Leaves - 25 leaves falling down
const leavesContainer = document.querySelector('.autumn-elements');
if (leavesContainer) {
    for (let i = 0; i < 25; i++) {
        const leaf = document.createElement('div');
        leaf.className = 'falling-leaf';
        leaf.style.left = `${Math.random() * 100}%`;
        leaf.style.animationDelay = `${Math.random() * 8}s`;
        leaf.style.animationDuration = `${6 + Math.random() * 4}s`;
        leaf.style.width = `${20 + Math.random() * 15}px`;
        leaf.style.height = `${25 + Math.random() * 20}px`;
        leavesContainer.appendChild(leaf);
    }
}

// Snowflakes - 40 snowflakes falling fast
const snowContainer = document.querySelector('.winter-elements');
if (snowContainer) {
    for (let i = 0; i < 40; i++) {
        const snowflake = document.createElement('div');
        snowflake.className = 'snowflake';
        snowflake.style.left = `${Math.random() * 100}%`;
        snowflake.style.animationDelay = `${Math.random() * 6}s`;
        snowflake.style.animationDuration = `${4 + Math.random() * 4}s`;
        snowflake.style.width = `${8 + Math.random() * 12}px`;
        snowflake.style.height = snowflake.style.width;
        snowContainer.appendChild(snowflake);
    }
}

// ========== SEASON BACKGROUND PARALLAX ==========
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    
    document.querySelectorAll('.season-bg').forEach(bg => {
        const speed = 0.5;
        bg.style.transform = `translateY(${scrolled * speed}px)`;
    });
});

// ========== CULTURE ICON ROTATION ==========
const cultureIcons = document.querySelectorAll('.culture-icon');

cultureIcons.forEach(icon => {
    icon.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.1) rotate(360deg)';
    });
    
    icon.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1) rotate(0deg)';
    });
});

// ========== FOOD TAG ANIMATION ==========
const foodTags = document.querySelectorAll('.food-tag');

foodTags.forEach(tag => {
    tag.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.1)';
        this.style.boxShadow = '0 4px 12px rgba(0,0,0,0.2)';
    });
    
    tag.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
        this.style.boxShadow = 'none';
    });
});

// ========== SEASON SECTION COLOR CHANGE ==========
function updateThemeColor() {
    let currentSeason = '';
    
    sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 100 && rect.bottom >= 100) {
            currentSeason = section.id;
        }
    });
    
    // Change navbar theme based on season
    if (currentSeason === 'spring') {
        navbar.style.borderBottom = '3px solid #FF69B4';
    } else if (currentSeason === 'summer') {
        navbar.style.borderBottom = '3px solid #FF6347';
    } else if (currentSeason === 'autumn') {
        navbar.style.borderBottom = '3px solid #FF8C00';
    } else if (currentSeason === 'winter') {
        navbar.style.borderBottom = '3px solid #4682B4';
    } else {
        navbar.style.borderBottom = 'none';
    }
}

window.addEventListener('scroll', updateThemeColor);

// ========== TYPING EFFECT FOR HERO ==========
const heroSubtitle = document.querySelector('.hero-subtitle');
if (heroSubtitle) {
    const text = heroSubtitle.textContent;
    heroSubtitle.textContent = '';
    let i = 0;
    
    function typeWriter() {
        if (i < text.length) {
            heroSubtitle.textContent += text.charAt(i);
            i++;
            setTimeout(typeWriter, 100);
        }
    }
    
    // Start after page load
    window.addEventListener('load', () => {
        setTimeout(typeWriter, 800);
    });
}

// ========== CHINESE CHARACTERS ANIMATION ==========
const chineseTitle = document.querySelector('.chinese');
if (chineseTitle) {
    chineseTitle.style.opacity = '0';
    chineseTitle.style.transform = 'translateY(-30px)';
    
    window.addEventListener('load', () => {
        setTimeout(() => {
            chineseTitle.style.transition = 'all 1s ease';
            chineseTitle.style.opacity = '1';
            chineseTitle.style.transform = 'translateY(0)';
        }, 300);
    });
}

// ========== SEASON BADGE PULSE ==========
const seasonBadges = document.querySelectorAll('.season-badge');

seasonBadges.forEach(badge => {
    setInterval(() => {
        badge.style.transform = 'scale(1.05)';
        setTimeout(() => {
            badge.style.transform = 'scale(1)';
        }, 200);
    }, 3000);
});

// ========== LOCATION ICON BOUNCE ==========
const locations = document.querySelectorAll('.location i');

locations.forEach(icon => {
    icon.addEventListener('mouseenter', function() {
        this.style.animation = 'bounce 0.5s ease';
    });
    
    icon.addEventListener('animationend', function() {
        this.style.animation = '';
    });
});

// ========== CONSOLE EASTER EGG ==========
console.log('%c欢迎来到四季中国！', 'color: #DC143C; font-size: 24px; font-weight: bold;');
console.log('%c🏮 Welcome to Four Seasons China! 🏮', 'color: #FFD700; font-size: 18px;');
console.log('%c春 Spring | 夏 Summer | 秋 Autumn | 冬 Winter', 'color: #4682B4; font-size: 14px;');

// ========== PREVENT IMAGE DRAG ==========
document.querySelectorAll('img').forEach(img => {
    img.setAttribute('draggable', 'false');
});

// ========== PAGE LOAD ANIMATION ==========
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = '1';
    }, 100);
});

// ========== SCROLL PROGRESS INDICATOR ==========
const scrollProgress = document.createElement('div');
scrollProgress.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 0%;
    height: 4px;
    background: linear-gradient(90deg, #FF69B4, #FF6347, #FF8C00, #4682B4);
    z-index: 9999;
    transition: width 0.1s ease;
`;
document.body.appendChild(scrollProgress);

window.addEventListener('scroll', () => {
    const winScroll = document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    scrollProgress.style.width = scrolled + '%';
});

// ========== INTERACTIVE CURSOR EFFECT (OPTIONAL) ==========
let cursor = document.createElement('div');
cursor.style.cssText = `
    position: fixed;
    width: 20px;
    height: 20px;
    border: 2px solid #DC143C;
    border-radius: 50%;
    pointer-events: none;
    z-index: 9998;
    transition: all 0.1s ease;
    display: none;
`;
document.body.appendChild(cursor);

document.addEventListener('mousemove', (e) => {
    cursor.style.display = 'block';
    cursor.style.left = e.clientX - 10 + 'px';
    cursor.style.top = e.clientY - 10 + 'px';
});

// Change cursor on hover
document.querySelectorAll('a, button, .season-card, .culture-card, .food-card, .destination-card').forEach(element => {
    element.addEventListener('mouseenter', () => {
        cursor.style.transform = 'scale(1.5)';
        cursor.style.borderColor = '#FFD700';
    });
    
    element.addEventListener('mouseleave', () => {
        cursor.style.transform = 'scale(1)';
        cursor.style.borderColor = '#DC143C';
    });
});

// ========== INITIALIZE ==========
console.log('✅ 四季中国 website loaded successfully!');
console.log('🎨 Enjoy exploring the Four Seasons of China!');

// Add transition to all interactive elements
document.querySelectorAll('.culture-icon, .food-tag, .destination-image').forEach(el => {
    el.style.transition = 'all 0.3s ease';
});

// ========== CREATOR DROPDOWN (MOBILE) ==========
const creatorDropdown = document.querySelector('.nav-item-dropdown');
const creatorLink = document.getElementById('creatorDropdown');

if (creatorLink && window.innerWidth <= 968) {
    creatorLink.addEventListener('click', (e) => {
        e.preventDefault();
        creatorDropdown.classList.toggle('active');
    });
}

// Close dropdown when clicking outside
document.addEventListener('click', (e) => {
    if (window.innerWidth <= 968) {
        if (!creatorDropdown.contains(e.target)) {
            creatorDropdown.classList.remove('active');
        }
    }
});

// Handle window resize
window.addEventListener('resize', () => {
    if (window.innerWidth > 968) {
        creatorDropdown.classList.remove('active');
    }
});
