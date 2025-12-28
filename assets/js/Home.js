// ========== DARK MODE TOGGLE (PRIORITY - TOP!) ==========
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

// Cherry Blossoms - Static, Random Positions (configurable & controllable)
const cherryContainer = document.querySelector('.spring-elements');
if (cherryContainer) {
    const CHERRY_COUNT = 20;
    const CHERRY_MIN_DURATION = 2; // seconds (smaller = faster)
    const CHERRY_MAX_DURATION = 5;
    const CHERRY_MIN_DELAY = 0;
    const CHERRY_MAX_DELAY = 3;

    function createCherryBlossoms(count = CHERRY_COUNT) {
        cherryContainer.innerHTML = '';
        for (let i = 0; i < count; i++) {
            const blossom = document.createElement('div');
            blossom.className = 'cherry-blossom';
            blossom.style.left = `${Math.random() * 100}%`;
            blossom.style.top = `${-10 + Math.random() * 120}%`;
            const dur = (CHERRY_MIN_DURATION + Math.random() * (CHERRY_MAX_DURATION - CHERRY_MIN_DURATION)).toFixed(2);
            const delay = (CHERRY_MIN_DELAY + Math.random() * (CHERRY_MAX_DELAY - CHERRY_MIN_DELAY)).toFixed(2);
            blossom.style.animationDelay = `${delay}s`;
            blossom.style.animationDuration = `${dur}s`;
            blossom.dataset.duration = dur;
            cherryContainer.appendChild(blossom);
        }
    }

    // update speed (duration) for all cherry blossoms
    // call from console or other code: updateCherrySpeed(1.2, 3.0)
    // values are in seconds. Smaller => faster
    window.updateCherrySpeed = (min = 1.5, max = 4.0) => {
        document.querySelectorAll('.cherry-blossom').forEach(b => {
            const newDur = (min + Math.random() * (max - min)).toFixed(2);
            b.style.animationDuration = `${newDur}s`;
            b.dataset.duration = newDur;
        });
        console.log(`Cherry speeds updated: min=${min}s max=${max}s`);
    };

    // regenerate blossom count
    window.regenCherry = (count = CHERRY_COUNT) => {
        createCherryBlossoms(count);
        console.log(`Cherry regenerated: count=${count}`);
    };

    createCherryBlossoms(CHERRY_COUNT);
}

// falling suns - multiple suns falling down
const sunContainer = document.querySelector('.summer-elements');
if (sunContainer) {
    const MIN_DURATION = 1.5;      // minimum duration in seconds (smaller = faster)
    const MAX_DURATION = 3.5;      // maximum duration in seconds
    const MIN_DELAY = 0;           // minimum delay in seconds
    const MAX_DELAY = 2.5;         // maximum delay in seconds

    for (let i = 0; i < 20; i++) {
        const sun = document.createElement('div');
        sun.className = 'sun-ray';
        sun.style.left = `${5 + Math.random() * 90}%`;

        // size variation
        const size = 30 + Math.random() * 70;
        sun.style.width = `${size}px`;
        sun.style.height = `${size}px`;

        // random duration & delay within configured range
        const duration = (MIN_DURATION + Math.random() * (MAX_DURATION - MIN_DURATION)).toFixed(2);
        const delay = (MIN_DELAY + Math.random() * (MAX_DELAY - MIN_DELAY)).toFixed(2);
        sun.style.animationDelay = `${delay}s`;
        sun.style.animationDuration = `${duration}s`;

        // store for reference (optional)
        sun.dataset.fallDuration = duration;
        sun.dataset.fallDelay = delay;

        sunContainer.appendChild(sun);
    }

    // Runtime utility:
    // call in console or other code: updateSunSpeed(0.8, 2.2)
    // values are in seconds. Smaller => faster
    window.updateSunSpeed = (min = 1.0, max = 3.0) => {
        document.querySelectorAll('.sun-ray').forEach(sun => {
            const newDuration = (min + Math.random() * (max - min)).toFixed(2);
            sun.style.animationDuration = `${newDuration}s`;
            sun.dataset.fallDuration = newDuration;
        });
        console.log(`Sun speeds updated: min=${min}s max=${max}s`);
    };
}

// Falling Leaves - configurable & controllable
const leavesContainer = document.querySelector('.autumn-elements');
if (leavesContainer) {
    const LEAF_COUNT = 25;
    const LEAF_MIN_DURATION = 4; // seconds
    const LEAF_MAX_DURATION = 9;
    const LEAF_MIN_DELAY = 0;
    const LEAF_MAX_DELAY = 6;

    function createLeaves(count = LEAF_COUNT) {
        leavesContainer.innerHTML = '';
        for (let i = 0; i < count; i++) {
            const leaf = document.createElement('div');
            leaf.className = 'falling-leaf';
            leaf.style.left = `${Math.random() * 100}%`;
            const dur = (LEAF_MIN_DURATION + Math.random() * (LEAF_MAX_DURATION - LEAF_MIN_DURATION)).toFixed(2);
            const delay = (LEAF_MIN_DELAY + Math.random() * (LEAF_MAX_DELAY - LEAF_MIN_DELAY)).toFixed(2);
            leaf.style.animationDelay = `${delay}s`;
            leaf.style.animationDuration = `${dur}s`;
            leaf.style.width = `${20 + Math.random() * 15}px`;
            leaf.style.height = `${25 + Math.random() * 20}px`;
            leaf.dataset.duration = dur;
            leavesContainer.appendChild(leaf);
        }
    }

    // call updateLeafSpeed(minSeconds, maxSeconds) to change fall durations
    window.updateLeafSpeed = (min = 3.5, max = 8.0) => {
        document.querySelectorAll('.falling-leaf').forEach(l => {
            const newDur = (min + Math.random() * (max - min)).toFixed(2);
            l.style.animationDuration = `${newDur}s`;
            l.dataset.duration = newDur;
        });
        console.log(`Leaf speeds updated: min=${min}s max=${max}s`);
    };

    // regenerate leaves
    window.regenLeaves = (count = LEAF_COUNT) => {
        createLeaves(count);
        console.log(`Leaves regenerated: count=${count}`);
    };

    createLeaves(LEAF_COUNT);
}

// Snowflakes - configurable & controllable
const snowContainer = document.querySelector('.winter-elements');
if (snowContainer) {
    const SNOW_COUNT = 40;
    const SNOW_MIN_DURATION = 3; // seconds
    const SNOW_MAX_DURATION = 8;
    const SNOW_MIN_DELAY = 0;
    const SNOW_MAX_DELAY = 6;

    function createSnow(count = SNOW_COUNT) {
        snowContainer.innerHTML = '';
        for (let i = 0; i < count; i++) {
            const snowflake = document.createElement('div');
            snowflake.className = 'snowflake';
            snowflake.style.left = `${Math.random() * 100}%`;
            const dur = (SNOW_MIN_DURATION + Math.random() * (SNOW_MAX_DURATION - SNOW_MIN_DURATION)).toFixed(2);
            const delay = (SNOW_MIN_DELAY + Math.random() * (SNOW_MAX_DELAY - SNOW_MIN_DELAY)).toFixed(2);
            const size = (8 + Math.random() * 12).toFixed(0);
            snowflake.style.animationDelay = `${delay}s`;
            snowflake.style.animationDuration = `${dur}s`;
            snowflake.style.width = `${size}px`;
            snowflake.style.height = `${size}px`;
            snowflake.dataset.duration = dur;
            snowContainer.appendChild(snowflake);
        }
    }

    // call updateSnowSpeed(minSeconds, maxSeconds) to change fall durations
    window.updateSnowSpeed = (min = 2.5, max = 6.0) => {
        document.querySelectorAll('.snowflake').forEach(s => {
            const newDur = (min + Math.random() * (max - min)).toFixed(2);
            s.style.animationDuration = `${newDur}s`;
            s.dataset.duration = newDur;
        });
        console.log(`Snow speeds updated: min=${min}s max=${max}s`);
    };

    // regenerate snowflakes
    window.regenSnow = (count = SNOW_COUNT) => {
        createSnow(count);
        console.log(`Snow regenerated: count=${count}`);
    };

    createSnow(SNOW_COUNT);
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
