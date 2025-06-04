// Simple Horizontal Slider
class HorizontalSlider {
    constructor() {
        this.currentSlide = 0;
        this.totalSlides = 6;
        this.slidesWrapper = null;
        this.navLinks = null;
        
        this.init();
    }

    init() {
        // Wait for DOM to be fully loaded
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => this.setup());
        } else {
            this.setup();
        }
    }

    setup() {
        this.slidesWrapper = document.getElementById('horizontal-container');
        this.navLinks = document.querySelectorAll('nav a[data-section]');
        
        console.log('HorizontalSlider setup');
        console.log('slidesWrapper:', this.slidesWrapper);
        console.log('navLinks:', this.navLinks);
        
        if (this.slidesWrapper && this.navLinks.length > 0) {
            this.bindEvents();
            this.updateActiveStates();
            console.log('HorizontalSlider ready');
        } else {
            console.error('Required elements not found');
        }
    }

    bindEvents() {
        // Navigation clicks
        this.navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const sectionIndex = link.getAttribute('data-section');
                if (sectionIndex !== null) {
                    console.log('Nav clicked, going to section:', sectionIndex);
                    this.goToSlide(parseInt(sectionIndex));
                }
            });
        });

        // Keyboard navigation
        document.addEventListener('keydown', (e) => {
            switch(e.key) {
                case 'ArrowLeft':
                    e.preventDefault();
                    this.prevSlide();
                    break;
                case 'ArrowRight':
                    e.preventDefault();
                    this.nextSlide();
                    break;
                case 'Home':
                    e.preventDefault();
                    this.goToSlide(0);
                    break;
                case 'End':
                    e.preventDefault();
                    this.goToSlide(this.totalSlides - 1);
                    break;
            }
        });
    }

    goToSlide(index) {
        if (index < 0 || index >= this.totalSlides || !this.slidesWrapper) return;
        
        this.currentSlide = index;
        // Each section is 100vw wide, so to show section N, we need to move -N * 100vw
        const translateX = -index * 100;
        
        console.log(`Going to slide ${index}, translateX: ${translateX}vw`);
        
        this.slidesWrapper.style.transform = `translateX(${translateX}vw)`;
        console.log('Transform applied:', this.slidesWrapper.style.transform);
        
        this.updateActiveStates();
    }

    nextSlide() {
        const nextIndex = (this.currentSlide + 1) % this.totalSlides;
        this.goToSlide(nextIndex);
    }

    prevSlide() {
        const prevIndex = (this.currentSlide - 1 + this.totalSlides) % this.totalSlides;
        this.goToSlide(prevIndex);
    }

    updateActiveStates() {
        // Update navigation active states
        this.navLinks.forEach((link) => {
            const sectionIndex = parseInt(link.getAttribute('data-section'));
            if (sectionIndex === this.currentSlide) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });

        // Update section active states
        const sections = document.querySelectorAll('.section-slide');
        sections.forEach((section, index) => {
            if (index === this.currentSlide) {
                section.classList.add('active');
            } else {
                section.classList.remove('active');
            }
        });
    }
}

// Initialize the slider
const slider = new HorizontalSlider();

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