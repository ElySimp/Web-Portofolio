// # 四季中国 (Four Seasons China) - Website Documentation

// ## Project Overview
// A modern, interactive website showcasing China's four seasons (Spring, Summer, Autumn, Winter) with cultural information, traditional festivals, cuisine, and tourist destinations for each season.

// **Theme Colors:**
// - Spring: Pink (#FF69B4) & Green (#98D8C8)
// - Summer: Red (#FF6347) & Orange (#FFA500)
// - Autumn: Orange (#FF8C00) & Brown (#D2691E)
// - Winter: Blue (#4682B4) & Light Blue (#87CEEB)

// ---

// ## How Decorative Elements Work (No Image Assets Required!)

// ### 🎨 Pure CSS + JavaScript Approach

// All decorative elements in this website are created using **pure CSS and JavaScript** - no image files needed! This makes the website:
// - ✅ Faster to load (no image downloads)
// - ✅ Easier to customize (just change CSS values)
// - ✅ Scalable (works on any resolution)
// - ✅ Lightweight (smaller file size)

// ---

// ## 🏮 1. Chinese Lanterns (红灯笼)

// ### How It Works:
// Lanterns are created using CSS shapes and gradients, not images!

// **HTML Structure:**
// ```html
// <div class="lantern lantern-1"></div>
// ```

// **CSS Techniques:**

// 1. **Shape Creation** - Using `border-radius` to create lantern shape:
// ```css
// .lantern {
//     width: 60px;
//     height: 80px;
//     background: linear-gradient(135deg, #DC143C, #FF4500);
//     border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%;
//     /* Creates oval/lantern shape */
// }
// ```

// 2. **Chinese Character** - Using CSS `content` property:
// ```css
// .lantern::before {
//     content: '福';  /* Chinese character for "fortune" */
//     color: gold;
//     font-size: 24px;
//     /* Character appears without image! */
// }
// ```

// 3. **Tassel Bottom** - Using `::after` pseudo-element:
// ```css
// .lantern::after {
//     content: '';
//     width: 20px;
//     height: 15px;
//     background: gold;
//     border-radius: 0 0 50% 50%;
//     /* Creates hanging tassel */
// }
// ```

// 4. **Swing Animation** - Using CSS keyframes:
// ```css
// @keyframes swingLantern {
//     0%, 100% { transform: rotate(-5deg); }
//     50% { transform: rotate(5deg); }
// }
// ```

// **Why No Images Needed:**
// - CSS `border-radius` creates organic shapes
// - `::before` and `::after` add details
// - Gradients create depth and color
// - Animations add movement

// ---

// ## 🌸 2. Cherry Blossoms (Spring)

// ### How It Works:
// JavaScript generates random cherry blossoms dynamically!

// **JavaScript Generation:**
// ```javascript
// const cherryContainer = document.querySelector('.spring-elements');

// for (let i = 0; i < 10; i++) {
//     const blossom = document.createElement('div');
//     blossom.className = 'cherry-blossom';
    
//     // Random horizontal position
//     blossom.style.left = `${Math.random() * 100}%`;
    
//     // Random animation delay (staggered falling)
//     blossom.style.animationDelay = `${Math.random() * 8}s`;
    
//     // Random fall duration (different speeds)
//     blossom.style.animationDuration = `${8 + Math.random() * 4}s`;
    
//     cherryContainer.appendChild(blossom);
// }
// ```

// **CSS Petal Shape:**
// ```css
// .cherry-blossom {
//     width: 40px;
//     height: 40px;
//     background: radial-gradient(circle, #FF69B4, #FFB6C1);
//     border-radius: 50% 50% 50% 0;  /* Creates petal shape! */
//     opacity: 0.6;
// }
// ```

// **Falling Animation:**
// ```css
// @keyframes fallDown {
//     0% {
//         top: -10%;
//         transform: rotate(0deg);
//     }
//     100% {
//         top: 110%;
//         transform: rotate(360deg);  /* Spins while falling */
//     }
// }
// ```

// **Why It Works:**
// - `Math.random()` creates natural randomness
// - `radial-gradient` gives depth to petals
// - `border-radius: 50% 50% 50% 0` creates flower petal shape
// - Loop generates multiple blossoms
// - Each has unique position, delay, and duration

// ---

// ## ☀️ 3. Sun Rays (Summer)

// ### How It Works:
// 12 rotating rays created in a perfect circle!

// **JavaScript Generation:**
// ```javascript
// const sunContainer = document.querySelector('.summer-elements');

// for (let i = 0; i < 12; i++) {
//     const ray = document.createElement('div');
//     ray.className = 'sun-ray';
    
//     // Rotate each ray by 30° (360° / 12 = 30°)
//     ray.style.transform = `rotate(${i * 30}deg)`;
    
//     // Staggered animation
//     ray.style.animationDelay = `${i * 0.1}s`;
    
//     sunContainer.appendChild(ray);
// }
// ```

// **CSS Ray Design:**
// ```css
// .sun-ray {
//     position: absolute;
//     top: 50%;
//     left: 50%;
//     width: 200px;
//     height: 3px;
//     background: linear-gradient(90deg, transparent, #FFA500, transparent);
//     /* Fades in/out at edges */
//     transform-origin: left;  /* Rotates from center */
// }
// ```

// **Rotation Animation:**
// ```css
// @keyframes rotateSun {
//     from { transform: rotate(0deg); }
//     to { transform: rotate(360deg); }
// }
// ```

// **Math Explanation:**
// ```markdown
// - 12 rays → Each ray 30° apart (360° / 12 = 30°)
// - `transform-origin: left` → Rotates around left edge
// - Animation delays staggered by 0.1s for smooth effect
// ```

// ---

// ## 🍂 4. Falling Leaves (Autumn)

// ### How It Works:
// CSS animations create a leaf-falling effect!

// **JavaScript Generation:**
// ```javascript
// const autumnContainer = document.querySelector('.autumn-elements');

// for (let i = 0; i < 15; i++) {
//     const leaf = document.createElement('div');
//     leaf.className = 'falling-leaf';
    
//     // Random horizontal position
//     leaf.style.left = `${Math.random() * 100}%`;
    
//     // Random animation duration (fall speed)
//     leaf.style.animationDuration = `${5 + Math.random() * 5}s`;
    
//     autumnContainer.appendChild(leaf);
// }
// ```

// **CSS Leaf Design:**
// ```css
// .falling-leaf {
//     position: absolute;
//     top: -10%;
//     width: 20px;
//     height: 20px;
//     background: radial-gradient(circle, #FF8C00, #FFD700);
//     border-radius: 50%;
//     opacity: 0.8;
// }
// ```

// **Falling Animation:**
// ```css
// @keyframes leafFall {
//     0% {
//         transform: translateY(0) rotate(0deg);
//     }
//     100% {
//         transform: translateY(100vh) rotate(360deg);
//     }
// }
// ```

// **Why It Works:**
// - Leaves generated with random positions and speeds
// - `radial-gradient` gives a natural leaf color
// - `translateY` moves leaves down, `rotate` spins them
// - Animation duration varies for each leaf, creating diversity

// ---

// ## ❄️ 5. Snowflakes (Winter)

// ### How It Works:
// CSS and JavaScript create snowflake elements that fall!

// **JavaScript Generation:**
// ```javascript
// const winterContainer = document.querySelector('.winter-elements');

// for (let i = 0; i < 20; i++) {
//     const snowflake = document.createElement('div');
//     snowflake.className = 'snowflake';
    
//     // Random horizontal position
//     snowflake.style.left = `${Math.random() * 100}%`;
    
//     // Random size
//     const size = Math.random() * 10 + 10;  // 10px to 20px
//     snowflake.style.width = `${size}px`;
//     snowflake.style.height = `${size}px`;
    
//     // Random animation duration (fall speed)
//     snowflake.style.animationDuration = `${5 + Math.random() * 5}s`;
    
//     winterContainer.appendChild(snowflake);
// }
// ```

// **CSS Snowflake Design:**
// ```css
// .snowflake {
//     position: absolute;
//     top: -10%;
//     background: radial-gradient(circle, #FFFFFF, #87CEEB);
//     border-radius: 50%;
//     opacity: 0.9;
// }
// ```

// **Falling Animation:**
// ```css
// @keyframes snowFall {
//     0% {
//         transform: translateY(0) rotate(0deg);
//     }
//     100% {
//         transform: translateY(100vh) rotate(360deg);
//     }
// }
// ```

// **Why It Works:**
// - Snowflakes are circles with gradient color for depth
// - `translateY` moves them down, `rotate` gives a spin
// - Random sizes and speeds make the snowfall look natural

// ---

// ## File Structure

// ### 1. **Home.html** - Main HTML Structure

// #### Header & Navigation
// - **Fixed Navbar** with smooth scroll effects
// - **Logo**: Yin-Yang symbol (☯️) + "四季中国" text
// - **Navigation Links**: 
//   - 首页 (Home)
//   - 春 Spring
//   - 夏 Summer
//   - 秋 Autumn
//   - 冬 Winter
// - **Creator Dropdown**: Links to portfolio pages (Creator 1-3)
// - **Dark Mode Toggle**: Moon/Sun icon button
// - **Mobile Hamburger Menu**: Responsive for mobile devices

// #### Hero Section
// - **Animated Background**: Gradient with floating particles
// - **Chinese Lanterns**: 4 animated red lanterns with "福" character
// - **Bilingual Title**: "探索中国 / Discover China"
// - **Season Selection Cards**: 4 interactive cards with icons
//   - Spring: Seedling icon
//   - Summer: Sun icon
//   - Autumn: Leaf icon
//   - Winter: Snowflake icon
// - **Typing Effect**: Animated subtitle text

// #### Spring Section (春季)
// **Color Theme**: Pink & Green

// **Culture Cards:**
// - 清明节 (Qingming Festival) - Tomb Sweeping Day
// - 放风筝 (Kite Flying) - Traditional spring activity
// - 踏青 (Spring Outing) - Family picnics

// **Food Cards:**
// - 青团 (Qingtuan) - Green rice balls
// - 春卷 (Spring Rolls) - Crispy vegetable rolls
// - 竹笋 (Bamboo Shoots) - Fresh spring bamboo

// **Destinations:**
// - 婺源 (Wuyuan) - Rapeseed flowers, Jiangxi
// - 西湖 (West Lake) - Cherry blossoms, Zhejiang
// - 林芝 (Nyingchi) - Peach blossoms, Tibet

// **Decorative Elements:**
// - Animated falling cherry blossoms

// #### Summer Section (夏季)
// **Color Theme**: Red & Orange

// **Culture Cards:**
// - 端午节 (Dragon Boat Festival) - Dragon boat races
// - 七夕节 (Qixi Festival) - Chinese Valentine's Day
// - 扇子舞 (Fan Dance) - Traditional silk fan performances

// **Food Cards:**
// - 粽子 (Zongzi) - Sticky rice in bamboo leaves
// - 凉面 (Cold Noodles) - Refreshing summer noodles
// - 西瓜 (Watermelon) - Ultimate summer fruit

// **Destinations:**
// - 九寨沟 (Jiuzhaigou) - Crystal lakes, Sichuan
// - 张家界 (Zhangjiajie) - Sandstone pillars, Hunan
// - 青海湖 (Qinghai Lake) - Largest lake, Qinghai

// **Decorative Elements:**
// - Rotating sun rays (12 rays, 360° rotation)

// #### Autumn Section (秋季)
// **Color Theme**: Orange & Brown

// **Culture Cards:**
// - 中秋节 (Mid-Autumn Festival) - Mooncakes & full moon
// - 国庆节 (National Day) - Founding of PRC celebration
// - 丰收节 (Harvest Festival) - Celebrating harvest

// **Food Cards:**
// - 月饼 (Mooncake) - Traditional pastries
// - 大闸蟹 (Hairy Crab) - Shanghai specialty
// - 柿子 (Persimmon) - Symbol of good fortune

// **Destinations:**
// - 香山 (Fragrant Hills) - Autumn foliage, Beijing
// - 喀纳斯 (Kanas) - Alpine lake, Xinjiang
// - 额济纳 (Ejina) - Golden poplar forest, Inner Mongolia

// **Decorative Elements:**
// - Falling leaves with rotation animation

// #### Winter Section (冬季)
// **Color Theme**: Blue & White

// **Culture Cards:**
// - 春节 (Chinese New Year) - Most important festival
// - 腊八节 (Laba Festival) - Laba porridge tradition
// - 冰雕 (Ice Sculpture) - Ice & snow art festivals

// **Food Cards:**
// - 饺子 (Dumplings) - New Year essential
// - 火锅 (Hot Pot) - Warm winter meal
// - 糖葫芦 (Tanghulu) - Candied hawthorn

// **Destinations:**
// - 哈尔滨 (Harbin) - Ice Festival, Heilongjiang
// - 长白山 (Changbai Mountain) - Winter landscapes, Jilin
// - 故宫 (Forbidden City) - Snow-covered palace, Beijing

// **Decorative Elements:**
// - Falling snowflakes with varying sizes

// #### Footer
// - Brand section with Yin-Yang logo
// - Quick links to all seasons
// - Social media icons (WeChat, Weibo, Instagram, YouTube)
// - Copyright information

// #### Additional Elements
// - **Back to Top Button**: Fixed bottom-right corner
// - **Scroll Progress Bar**: Gradient bar showing scroll position
// - **Page Transition Overlay**: Smooth fade effect when navigating

// ---

// ### 2. **Home.css** - Styling & Animations

// #### CSS Variables (Root)
// ```css
// --spring-primary: #FF69B4
// --summer-primary: #FF6347
// --autumn-primary: #FF8C00
// --winter-primary: #4682B4
// ```

// #### Key Features

// **Navbar Styling:**
// - Fixed position with backdrop blur
// - Smooth hover effects on links
// - Animated underline on active/hover
// - Dropdown menu with fade-in animation
// - Dark mode toggle button with gradient

// **Hero Section:**
// - Full viewport height (100vh)
// - Gradient background with particle animation
// - Chinese lanterns with swing animation
// - Season cards with hover scale & rotation
// - Responsive grid layout

// **Season Sections:**
// - Unique background gradient per season
// - Parallax scrolling effect
// - Culture cards with icon rotation on hover
// - Food cards with scale animation
// - Destination cards with image zoom on hover

// **Animations:**
// ```css
// @keyframes particleFloat - Background particle movement
// @keyframes rotate - Yin-Yang logo rotation
// @keyframes swingLantern - Lantern swinging effect
// @keyframes pulse - Avatar pulsing effect
// @keyframes float - Floating card movement
// @keyframes bounce - Scroll indicator bounce
// @keyframes fallDown - Cherry blossom falling
// @keyframes rotateSun - Sun ray rotation
// @keyframes leafFall - Leaf falling with rotation
// @keyframes snowFall - Snowflake falling
// @keyframes shimmer - Skill bar shimmer effect
// ```

// **Dark Mode:**
// - `.dark-mode` class on body
// - Inverted color scheme
// - Dark backgrounds (#1a1a2e, #16213e)
// - Light text colors (#eaeaea)
// - Season-specific dark gradients
// - Sun icon replaces moon icon

// **Responsive Design:**
// - Breakpoint: 968px (tablets)
//   - Mobile menu slides from right
//   - Single column layouts
//   - Hidden floating cards
  
// - Breakpoint: 576px (phones)
//   - Smaller fonts
//   - Full-width buttons
//   - Hidden text on back button

// **Interactive Elements:**
// - Hover transformations (translateY, scale, rotate)
// - Box shadows with depth
// - Smooth transitions (0.3s ease)
// - Custom cursor with border circle

// ---

// ### 3. **Home.js** - JavaScript Functionality

// #### Navbar Functionality
// ```javascript
// // Mobile menu toggle with hamburger animation
// // Active link tracking on scroll
// // Smooth scroll to sections
// // Navbar background blur on scroll
// // Navbar border color changes per season
// ```

// #### Dark Mode System
// ```javascript
// // localStorage persistence
// // Toggle moon ↔ sun icon
// // Apply .dark-mode class to body
// // Console log mode status
// ```

// #### Page Transition Effect
// ```javascript
// // Create overlay with Yin-Yang spinner
// // Intercept Creator dropdown links
// // 800ms delay before navigation
// // Fade in on page load
// ```

// #### Season Decorations
// ```javascript
// // Spring: Generate 10 cherry blossoms
// // Summer: Generate 12 sun rays (30° each)
// // Autumn: Generate 15 falling leaves
// // Winter: Generate 20 snowflakes
// ```

// #### Interactive Features
// ```javascript
// // Season card hover - icon scale & rotate 360°
// // Culture icon rotation on hover
// // Food tag scale & shadow on hover
// // Destination image zoom on hover
// // Scroll progress bar (gradient 4 colors)
// ```

// #### Animations
// ```javascript
// // Typing effect on hero subtitle (100ms per char)
// // Chinese title fade-in from top
// // Season badge pulse every 3s
// // Intersection Observer for card animations
// // Parallax background scrolling (0.5x speed)
// ```

// #### Utility Functions
// ```javascript
// setActiveNav() - Update active link based on scroll position
// updateThemeColor() - Change navbar border per season
// animateSkills() - Trigger skill bar animations
// ```

// #### Event Listeners
// ```javascript
// window.scroll - Multiple effects triggered
// window.load - Initial animations
// window.resize - Responsive adjustments
// click events - Mobile menu, dark mode, back to top
// mousemove - Custom cursor tracking
// ```

// #### Easter Eggs
// ```javascript
// // Console welcome messages in Chinese
// // Custom cursor with scale on hover
// // Particle background generation
// // Prevent image dragging
// ```

// ---

// ## Technical Stack

// **Frontend:**
// - HTML5 (Semantic markup)
// - CSS3 (Custom properties, animations, gradients)
// - Vanilla JavaScript (ES6+)

// **External Libraries:**
// - Font Awesome 6.5.1 (Icons)

// **Browser Support:**
// - Modern browsers with CSS Grid support
// - Mobile responsive (iOS/Android)
// - Smooth scrolling enabled

// ---

// ## Color Psychology

// - **Spring (Pink/Green)**: Renewal, growth, vitality
// - **Summer (Red/Orange)**: Energy, passion, warmth
// - **Autumn (Orange/Brown)**: Harvest, abundance, earth
// - **Winter (Blue/White)**: Purity, tranquility, cold

// ---

// ## Performance Optimizations

// 1. **CSS Variables** - Easy theme switching
// 2. **Intersection Observer** - Lazy animation triggers
// 3. **RequestAnimationFrame** - Smooth scrolling
// 4. **LocalStorage** - Theme persistence
// 5. **Minimal DOM Manipulation** - Efficient updates
// 6. **CSS Transforms** - GPU acceleration

// ---

// ## Future Enhancements

// - Add real images for destinations & food
// - Implement multi-language support (EN/ZH)
// - Add more Creator portfolio pages
// - Integrate weather API for real-time data
// - Add more festival videos/galleries
// - Create admin panel for content management

// ---

// ## Credits

// **Developer**: Adrian 周立文
// **Design**: Modern + Traditional Chinese fusion
// **Icons**: Font Awesome
// **Fonts**: Segoe UI, Microsoft YaHei

// ---

// **Last Updated**: 20-11-2025

// ========== NAVBAR FUNCTIONALITY ==========
const navbar = document.getElementById('navbar');
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');

navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    
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

// ========== SMOOTH SCROLL ==========
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

// ========== SCROLL ANIMATIONS ==========
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

document.querySelectorAll('.stat-box, .vm-card, .team-card, .timeline-item, .tech-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'all 0.6s ease';
    observer.observe(el);
});

// ========== COUNTER ANIMATION ==========
const counters = document.querySelectorAll('.stat-box h3');

counters.forEach(counter => {
    const target = parseInt(counter.textContent);
    let count = 0;
    const increment = target / 100;

    const updateCounter = () => {
        if (count < target) {
            count += increment;
            counter.textContent = Math.ceil(count) + '+';
            setTimeout(updateCounter, 20);
        } else {
            counter.textContent = target + '+';
        }
    };

    const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                updateCounter();
                counterObserver.unobserve(entry.target);
            }
        });
    });

    counterObserver.observe(counter);
});

console.log('✅ About Us page loaded successfully!');