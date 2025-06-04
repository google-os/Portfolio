// ===== MAIN PORTFOLIO SCRIPT (Reference Structure) =====

// ===== THEME TOGGLE =====
class ThemeManager {
    constructor() {
        this.themeBtn = document.getElementById('theme-btn');
        this.body = document.body;
        this.currentTheme = localStorage.getItem('theme') || 'dark';
        
        this.init();
    }

    init() {
        this.setTheme(this.currentTheme);
        this.bindEvents();
    }

    bindEvents() {
        if (this.themeBtn) {
            this.themeBtn.addEventListener('click', () => {
                this.toggleTheme();
            });
        }
    }

    setTheme(theme) {
        this.body.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
        
        if (this.themeBtn) {
            const icon = this.themeBtn.querySelector('i');
            if (theme === 'light') {
                icon.className = 'fas fa-moon';
            } else {
                icon.className = 'fas fa-sun';
            }
        }
        
        this.currentTheme = theme;
    }

    toggleTheme() {
        const newTheme = this.currentTheme === 'dark' ? 'light' : 'dark';
        this.setTheme(newTheme);
    }
}

// ===== SECTION NAVIGATION (Reference Structure) =====
class SectionNavigation {
    constructor() {
        this.navLinks = document.querySelectorAll('.nav-link');
        this.sections = document.querySelectorAll('section');
        this.header = document.getElementById('header');
        this.mobileNavToggle = document.querySelector('.mobile-nav-toggle');
        this.navbar = document.querySelector('.navbar');
        
        this.init();
    }

    init() {
        this.bindEvents();
        this.updateActiveNav();
        this.handleInitialLoad();
    }

    bindEvents() {
        // Navigation clicks
        this.navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const targetId = link.getAttribute('href');
                
                if (targetId === '#header') {
                    this.showHome();
                } else {
                    this.showSection(targetId.substring(1));
                }
                
                // Close mobile menu if open
                this.closeMobileMenu();
            });
        });

        // Mobile navigation toggle
        if (this.mobileNavToggle) {
            this.mobileNavToggle.addEventListener('click', () => {
                this.toggleMobileMenu();
            });
        }

        // Handle browser back/forward
        window.addEventListener('hashchange', () => {
            const hash = window.location.hash;
            if (hash) {
                this.showSection(hash.substring(1));
            } else {
                this.showHome();
            }
        });

        // Close mobile menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!this.navbar.contains(e.target) && !this.mobileNavToggle.contains(e.target)) {
                this.closeMobileMenu();
            }
        });
    }

    handleInitialLoad() {
        const initialHash = window.location.hash;
        if (initialHash) {
            setTimeout(() => {
                this.showSection(initialHash.substring(1));
            }, 100);
        }
    }

    showHome() {
        // Hide all sections
        this.sections.forEach(section => {
            section.classList.remove('section-show');
        });
        
        // Show header
        if (this.header) {
            this.header.classList.remove('header-top');
        }
        
        // Update navigation
        this.updateActiveNav('#header');
        
        // Update URL
        history.replaceState(null, null, window.location.pathname);
    }

    showSection(sectionId) {
        const targetSection = document.getElementById(sectionId);
        
        if (!targetSection) return;
        
        // Hide all sections first
        this.sections.forEach(section => {
            section.classList.remove('section-show');
        });
        
        // Show target section
        targetSection.classList.add('section-show');
        
        // Update header to top style
        if (this.header) {
            this.header.classList.add('header-top');
        }
        
        // Update navigation
        this.updateActiveNav(`#${sectionId}`);
        
        // Update URL
        history.replaceState(null, null, `#${sectionId}`);
    }

    updateActiveNav(activeHref) {
        this.navLinks.forEach(link => {
            if (link.getAttribute('href') === activeHref) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });
    }

    toggleMobileMenu() {
        if (this.navbar) {
            this.navbar.classList.toggle('navbar-mobile');
        }
    }

    closeMobileMenu() {
        if (this.navbar) {
            this.navbar.classList.remove('navbar-mobile');
        }
    }
}

// ===== PARTICLE SYSTEM =====
class ParticleSystem {
    constructor() {
        this.canvas = document.getElementById('particle-canvas');
        if (!this.canvas) return;
        
        this.ctx = this.canvas.getContext('2d');
        this.particles = [];
        this.particleCount = 50;
        this.mouse = { x: 0, y: 0 };
        
        this.init();
    }

    init() {
        this.resize();
        this.createParticles();
        this.bindEvents();
        this.animate();
    }

    bindEvents() {
        window.addEventListener('resize', () => this.resize());
        window.addEventListener('mousemove', (e) => {
            this.mouse.x = e.clientX;
            this.mouse.y = e.clientY;
        });
    }

    resize() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
    }

    createParticles() {
        this.particles = [];
        for (let i = 0; i < this.particleCount; i++) {
            this.particles.push({
                x: Math.random() * this.canvas.width,
                y: Math.random() * this.canvas.height,
                vx: (Math.random() - 0.5) * 0.5,
                vy: (Math.random() - 0.5) * 0.5,
                size: Math.random() * 2 + 1,
                opacity: Math.random() * 0.5 + 0.2
            });
        }
    }

    animate() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        
        this.particles.forEach(particle => {
            // Update position
            particle.x += particle.vx;
            particle.y += particle.vy;
            
            // Wrap around edges
            if (particle.x < 0) particle.x = this.canvas.width;
            if (particle.x > this.canvas.width) particle.x = 0;
            if (particle.y < 0) particle.y = this.canvas.height;
            if (particle.y > this.canvas.height) particle.y = 0;
            
            // Draw particle
            this.ctx.beginPath();
            this.ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
            this.ctx.fillStyle = `rgba(255, 107, 53, ${particle.opacity})`;
            this.ctx.fill();
        });
        
        requestAnimationFrame(() => this.animate());
    }
}

// ===== FLOATING ORBS =====
class FloatingOrbs {
    constructor() {
        this.orbs = document.querySelectorAll('.orb');
        this.init();
    }

    init() {
        this.orbs.forEach((orb, index) => {
            this.animateOrb(orb, index);
        });
    }

    animateOrb(orb, index) {
        const duration = 8000 + (index * 1000);
        const delay = index * 1000;
        
        orb.style.animationDuration = `${duration}ms`;
        orb.style.animationDelay = `${delay}ms`;
    }
}

// ===== PORTFOLIO FILTERS =====
class PortfolioFilter {
    constructor() {
        this.filterButtons = document.querySelectorAll('#portfolio-flters li');
        this.portfolioItems = document.querySelectorAll('.portfolio-item');
        
        this.init();
    }

    init() {
        this.bindEvents();
    }

    bindEvents() {
        this.filterButtons.forEach(button => {
            button.addEventListener('click', () => {
                const filter = button.getAttribute('data-filter');
                this.filterPortfolio(filter);
                this.updateActiveFilter(button);
            });
        });
    }

    filterPortfolio(filter) {
        this.portfolioItems.forEach(item => {
            if (filter === '*' || item.classList.contains(filter.substring(1))) {
                item.style.display = 'block';
                setTimeout(() => {
                    item.style.opacity = '1';
                    item.style.transform = 'scale(1)';
                }, 10);
            } else {
                item.style.opacity = '0';
                item.style.transform = 'scale(0.8)';
                setTimeout(() => {
                    item.style.display = 'none';
                }, 300);
            }
        });
    }

    updateActiveFilter(activeButton) {
        this.filterButtons.forEach(button => {
            button.classList.remove('filter-active');
        });
        activeButton.classList.add('filter-active');
    }
}

// ===== SMOOTH SCROLLING =====
function initSmoothScrolling() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href === '#') return;
            
            e.preventDefault();
            const targetId = href.substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
}

// ===== FORM HANDLING =====
class ContactForm {
    constructor() {
        this.form = document.querySelector('.php-email-form');
        this.init();
    }

    init() {
        if (!this.form) return;
        this.bindEvents();
    }

    bindEvents() {
        this.form.addEventListener('submit', (e) => {
            this.handleSubmit(e);
        });
    }

    async handleSubmit(e) {
        e.preventDefault();
        
        const loading = this.form.querySelector('.loading');
        const errorMessage = this.form.querySelector('.error-message');
        const sentMessage = this.form.querySelector('.sent-message');
        
        // Show loading
        loading.style.display = 'block';
        errorMessage.style.display = 'none';
        sentMessage.style.display = 'none';
        
        try {
            const formData = new FormData(this.form);
            const response = await fetch(this.form.action, {
                method: 'POST',
                body: formData
            });
            
            if (response.ok) {
                loading.style.display = 'none';
                sentMessage.style.display = 'block';
                this.form.reset();
            } else {
                throw new Error('Form submission failed');
            }
        } catch (error) {
            loading.style.display = 'none';
            errorMessage.style.display = 'block';
            errorMessage.textContent = 'There was an error sending your message. Please try again.';
        }
    }
}

// ===== INITIALIZATION =====
document.addEventListener('DOMContentLoaded', function() {
    // Initialize all components
    new ThemeManager();
    new SectionNavigation();
    new ParticleSystem();
    new FloatingOrbs();
    new PortfolioFilter();
    new ContactForm();
    
    // Initialize smooth scrolling
    initSmoothScrolling();
    
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
    document.querySelectorAll('section').forEach(section => {
        observer.observe(section);
    });
});