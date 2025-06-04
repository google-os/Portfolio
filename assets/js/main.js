// Simple Horizontal Slider - Fixed Version
let currentSlide = 0;
const totalSlides = 6;

function initializeSlider() {
    console.log('Initializing slider...');
    
    const slidesWrapper = document.getElementById('horizontal-container');
    const navLinks = document.querySelectorAll('.nav-link[data-section]');
    
    console.log('slidesWrapper:', slidesWrapper);
    console.log('navLinks:', navLinks);
    
    if (!slidesWrapper) {
        console.error('horizontal-container not found!');
        return;
    }
    
    if (navLinks.length === 0) {
        console.error('No navigation links found!');
        return;
    }
    
    // Add click events to navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const sectionIndex = parseInt(this.getAttribute('data-section'));
            console.log('Clicked section:', sectionIndex);
            goToSlide(sectionIndex);
        });
    });
    
    // Initialize to first slide
    goToSlide(0);
    console.log('Slider initialized successfully');
}

function goToSlide(index) {
    console.log('Going to slide:', index);
    
    if (index < 0 || index >= totalSlides) {
        console.error('Invalid slide index:', index);
        return;
    }
    
    const slidesWrapper = document.getElementById('horizontal-container');
    if (!slidesWrapper) {
        console.error('horizontal-container not found in goToSlide!');
        return;
    }
    
    currentSlide = index;
    const translateX = -index * 100;
    
    console.log('Setting transform to:', `translateX(${translateX}vw)`);
    slidesWrapper.style.transform = `translateX(${translateX}vw)`;
    
    updateActiveStates();
}

function updateActiveStates() {
    // Update navigation active states
    const navLinks = document.querySelectorAll('.nav-link[data-section]');
    navLinks.forEach(link => {
        const sectionIndex = parseInt(link.getAttribute('data-section'));
        if (sectionIndex === currentSlide) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeSlider);
} else {
    initializeSlider();
}

// Theme Toggle Functionality
function toggleTheme() {
    const body = document.body;
    const themeIcon = document.getElementById('theme-icon');
    
    if (body.classList.contains('night-theme')) {
        body.classList.remove('night-theme');
        body.classList.add('day-theme');
        themeIcon.textContent = '☀️';
        localStorage.setItem('theme', 'day');
    } else {
        body.classList.remove('day-theme');
        body.classList.add('night-theme');
        themeIcon.textContent = '🌙';
        localStorage.setItem('theme', 'night');
    }
}

// Load saved theme
function loadTheme() {
    const savedTheme = localStorage.getItem('theme') || 'night';
    const body = document.body;
    const themeIcon = document.getElementById('theme-icon');
    
    if (savedTheme === 'day') {
        body.classList.add('day-theme');
        themeIcon.textContent = '☀️';
    } else {
        body.classList.add('night-theme');
        themeIcon.textContent = '🌙';
    }
}

class ThemeToggle {
    constructor() {
        this.isDayMode = false;
        this.toggleBtn = document.querySelector('.theme-toggle');
        this.init();
    }

    init() {
        loadTheme();
        if (this.toggleBtn) {
            this.toggleBtn.addEventListener('click', () => this.toggleTheme());
        }
        this.setTheme(this.isDayMode);
    }

    toggleTheme() {
        toggleTheme();
    }

    setTheme(isDayMode) {
        const root = document.documentElement;
        
        if (isDayMode) {
            // Day theme colors
            root.style.setProperty('--bg-primary', '#f5f5f5');
            root.style.setProperty('--bg-secondary', '#ffffff');
            root.style.setProperty('--text-primary', '#333333');
            root.style.setProperty('--text-secondary', 'rgba(51, 51, 51, 0.8)');
            root.style.setProperty('--text-muted', 'rgba(51, 51, 51, 0.6)');
            root.style.setProperty('--glass-bg', 'rgba(255, 255, 255, 0.2)');
            root.style.setProperty('--glass-border', 'rgba(255, 255, 255, 0.3)');
            root.style.setProperty('--bg-gradient', 'linear-gradient(135deg, #ffeaa7 0%, #fab1a0 25%, #fd79a8 50%, #e84393 75%, #a29bfe 100%)');
        } else {
            // Night theme colors (default)
            root.style.setProperty('--bg-primary', '#0a0a0a');
            root.style.setProperty('--bg-secondary', '#1a1a1a');
            root.style.setProperty('--text-primary', '#ffffff');
            root.style.setProperty('--text-secondary', 'rgba(255, 255, 255, 0.8)');
            root.style.setProperty('--text-muted', 'rgba(255, 255, 255, 0.6)');
            root.style.setProperty('--glass-bg', 'rgba(255, 255, 255, 0.1)');
            root.style.setProperty('--glass-border', 'rgba(255, 255, 255, 0.2)');
            root.style.setProperty('--bg-gradient', 'linear-gradient(135deg, #0c0c0c 0%, #1a1a2e 25%, #16213e 50%, #0f3460 75%, #533483 100%)');
        }
        
        document.body.classList.toggle('day-mode', isDayMode);
    }
}

// Initialize theme toggle
const themeToggle = new ThemeToggle();

// Smooth scrolling for internal links
document.addEventListener('click', function(e) {
    if (e.target.matches('a[href^="#"]')) {
        e.preventDefault();
        const targetId = e.target.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        }
    }
});

// Add loading animation
window.addEventListener('load', function() {
    document.body.classList.add('loaded');
});

// Add scroll effects for sections
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
        }
    });
}, observerOptions);

// Observe all sections
document.querySelectorAll('.section-slide').forEach(section => {
    observer.observe(section);
});