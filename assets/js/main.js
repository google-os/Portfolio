/**
 * Enhanced Portfolio with Frosted Glass Effects
 * Author: Ashish Vasant Yesale
 * Email: ashishyesale007@gmail.com
 */

document.addEventListener('DOMContentLoaded', function() {
    'use strict';

    // ===== UTILITY FUNCTIONS =====
    const $ = (selector) => document.querySelector(selector);
    const $$ = (selector) => document.querySelectorAll(selector);

    // ===== NAVIGATION FUNCTIONALITY =====
    class Navigation {
        constructor() {
            this.nav = $('#navbar');
            this.navLinks = $$('.nav-link');
            this.hamburger = $('#hamburger');
            this.navMenu = $('#nav-menu');
            this.sections = $$('section[id]');
            
            this.init();
        }

        init() {
            this.setupSmoothScrolling();
            this.setupActiveNavigation();
            this.setupMobileMenu();
            this.setupScrollEffects();
        }

        setupSmoothScrolling() {
            this.navLinks.forEach(link => {
                link.addEventListener('click', (e) => {
                    e.preventDefault();
                    const targetId = link.getAttribute('href');
                    const targetSection = $(targetId);
                    
                    if (targetSection) {
                        const offsetTop = targetSection.offsetTop - 100;
                        window.scrollTo({
                            top: offsetTop,
                            behavior: 'smooth'
                        });
                    }
                });
            });
        }

        setupActiveNavigation() {
            window.addEventListener('scroll', () => {
                let current = '';
                
                this.sections.forEach(section => {
                    const sectionTop = section.offsetTop - 150;
                    const sectionHeight = section.clientHeight;
                    
                    if (window.pageYOffset >= sectionTop && 
                        window.pageYOffset < sectionTop + sectionHeight) {
                        current = section.getAttribute('id');
                    }
                });

                this.navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${current}`) {
                        link.classList.add('active');
                    }
                });
            });
        }

        setupMobileMenu() {
            if (this.hamburger) {
                this.hamburger.addEventListener('click', () => {
                    this.navMenu.classList.toggle('active');
                    this.hamburger.classList.toggle('active');
                });
            }
        }

        setupScrollEffects() {
            window.addEventListener('scroll', () => {
                if (window.scrollY > 100) {
                    this.nav.style.background = 'rgba(255, 255, 255, 0.15)';
                    this.nav.style.backdropFilter = 'blur(20px)';
                } else {
                    this.nav.style.background = 'rgba(255, 255, 255, 0.1)';
                    this.nav.style.backdropFilter = 'blur(15px)';
                }
            });
        }
    }

    // ===== THEME TOGGLE =====
    class ThemeToggle {
        constructor() {
            this.themeBtn = $('#theme-btn');
            this.body = document.body;
            this.currentTheme = localStorage.getItem('theme') || 'dark';
            
            this.init();
        }

        init() {
            this.setTheme(this.currentTheme);
            
            if (this.themeBtn) {
                this.themeBtn.addEventListener('click', () => {
                    this.toggleTheme();
                });
            }
        }

        setTheme(theme) {
            if (theme === 'light') {
                this.body.classList.add('light-theme');
                if (this.themeBtn) {
                    this.themeBtn.innerHTML = '<i class="fas fa-moon"></i>';
                }
            } else {
                this.body.classList.remove('light-theme');
                if (this.themeBtn) {
                    this.themeBtn.innerHTML = '<i class="fas fa-sun"></i>';
                }
            }
            this.currentTheme = theme;
            localStorage.setItem('theme', theme);
        }

        toggleTheme() {
            const newTheme = this.currentTheme === 'dark' ? 'light' : 'dark';
            this.setTheme(newTheme);
        }
    }

    // ===== SKILLS ANIMATION =====
    class SkillsAnimation {
        constructor() {
            this.skillBars = $$('.skill-progress');
            this.init();
        }

        init() {
            this.setupIntersectionObserver();
        }

        setupIntersectionObserver() {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        this.animateSkill(entry.target);
                    }
                });
            }, { threshold: 0.5 });

            this.skillBars.forEach(bar => {
                observer.observe(bar);
            });
        }

        animateSkill(skillBar) {
            const width = skillBar.getAttribute('data-width');
            if (width) {
                skillBar.style.setProperty('--skill-width', width + '%');
                skillBar.style.width = width + '%';
            }
        }
    }

    // ===== PROJECT FILTERING =====
    class ProjectFilter {
        constructor() {
            this.filterBtns = $$('.filter-btn');
            this.projectCards = $$('.project-card');
            
            this.init();
        }

        init() {
            this.filterBtns.forEach(btn => {
                btn.addEventListener('click', () => {
                    const filter = btn.getAttribute('data-filter');
                    this.filterProjects(filter);
                    this.setActiveFilter(btn);
                });
            });
        }

        filterProjects(filter) {
            this.projectCards.forEach(card => {
                const category = card.getAttribute('data-category');
                
                if (filter === 'all' || category === filter) {
                    card.classList.remove('hidden');
                    card.style.display = 'block';
                } else {
                    card.classList.add('hidden');
                    setTimeout(() => {
                        card.style.display = 'none';
                    }, 300);
                }
            });
        }

        setActiveFilter(activeBtn) {
            this.filterBtns.forEach(btn => btn.classList.remove('active'));
            activeBtn.classList.add('active');
        }
    }

    // ===== SCROLL ANIMATIONS =====
    class ScrollAnimations {
        constructor() {
            this.animatedElements = $$('.glass-card, .stat-card, .timeline-item');
            this.init();
        }

        init() {
            this.setupIntersectionObserver();
        }

        setupIntersectionObserver() {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.style.opacity = '1';
                        entry.target.style.transform = 'translateY(0)';
                    }
                });
            }, { 
                threshold: 0.1,
                rootMargin: '0px 0px -50px 0px'
            });

            this.animatedElements.forEach(element => {
                element.style.opacity = '0';
                element.style.transform = 'translateY(30px)';
                element.style.transition = 'all 0.8s ease';
                observer.observe(element);
            });
        }
    }

    // ===== PARTICLE SYSTEM ENHANCEMENT =====
    class ParticleSystem {
        constructor() {
            this.container = $('.particle-system');
            this.particles = [];
            this.init();
        }

        init() {
            if (!this.container) return;
            
            this.createParticles();
            this.animate();
        }

        createParticles() {
            for (let i = 0; i < 50; i++) {
                const particle = document.createElement('div');
                particle.className = 'particle';
                particle.style.cssText = `
                    position: absolute;
                    width: ${Math.random() * 4 + 1}px;
                    height: ${Math.random() * 4 + 1}px;
                    background: rgba(255, 107, 53, ${Math.random() * 0.5 + 0.2});
                    border-radius: 50%;
                    left: ${Math.random() * 100}%;
                    top: ${Math.random() * 100}%;
                    pointer-events: none;
                `;
                
                this.container.appendChild(particle);
                this.particles.push({
                    element: particle,
                    x: Math.random() * window.innerWidth,
                    y: Math.random() * window.innerHeight,
                    vx: (Math.random() - 0.5) * 0.5,
                    vy: (Math.random() - 0.5) * 0.5
                });
            }
        }

        animate() {
            this.particles.forEach(particle => {
                particle.x += particle.vx;
                particle.y += particle.vy;
                
                if (particle.x < 0 || particle.x > window.innerWidth) particle.vx *= -1;
                if (particle.y < 0 || particle.y > window.innerHeight) particle.vy *= -1;
                
                particle.element.style.transform = `translate(${particle.x}px, ${particle.y}px)`;
            });
            
            requestAnimationFrame(() => this.animate());
        }
    }

    // ===== CONTACT FORM =====
    class ContactForm {
        constructor() {
            this.form = $('.contact-form');
            this.init();
        }

        init() {
            if (!this.form) return;
            
            this.form.addEventListener('submit', (e) => {
                e.preventDefault();
                this.handleSubmit();
            });
        }

        async handleSubmit() {
            const formData = new FormData(this.form);
            const submitBtn = this.form.querySelector('button[type="submit"]');
            
            // Add loading state
            submitBtn.classList.add('loading');
            submitBtn.disabled = true;
            
            try {
                const response = await fetch(this.form.action, {
                    method: 'POST',
                    body: formData
                });
                
                if (response.ok) {
                    this.showMessage('Message sent successfully!', 'success');
                    this.form.reset();
                } else {
                    this.showMessage('Failed to send message. Please try again.', 'error');
                }
            } catch (error) {
                this.showMessage('Network error. Please try again.', 'error');
            } finally {
                submitBtn.classList.remove('loading');
                submitBtn.disabled = false;
            }
        }

        showMessage(message, type) {
            const messageEl = document.createElement('div');
            messageEl.className = `form-message ${type}`;
            messageEl.textContent = message;
            messageEl.style.cssText = `
                padding: 15px;
                margin-top: 20px;
                border-radius: 10px;
                background: ${type === 'success' ? 'rgba(76, 175, 80, 0.2)' : 'rgba(244, 67, 54, 0.2)'};
                border: 1px solid ${type === 'success' ? 'rgba(76, 175, 80, 0.5)' : 'rgba(244, 67, 54, 0.5)'};
                color: ${type === 'success' ? '#4CAF50' : '#F44336'};
            `;
            
            this.form.appendChild(messageEl);
            
            setTimeout(() => {
                messageEl.remove();
            }, 5000);
        }
    }

    // ===== FLOATING ORBS ENHANCEMENT =====
    class FloatingOrbs {
        constructor() {
            this.container = $('.floating-orbs');
            this.init();
        }

        init() {
            if (!this.container) return;
            
            this.createAdditionalOrbs();
        }

        createAdditionalOrbs() {
            for (let i = 0; i < 3; i++) {
                const orb = document.createElement('div');
                orb.className = 'floating-orb';
                orb.style.cssText = `
                    position: absolute;
                    width: ${Math.random() * 100 + 50}px;
                    height: ${Math.random() * 100 + 50}px;
                    border-radius: 50%;
                    background: radial-gradient(circle, 
                        rgba(255, 107, 53, 0.4) 0%,
                        rgba(247, 147, 30, 0.3) 40%,
                        rgba(255, 210, 63, 0.2) 70%,
                        transparent 100%);
                    top: ${Math.random() * 80 + 10}%;
                    left: ${Math.random() * 80 + 10}%;
                    animation: floatOrb ${Math.random() * 10 + 15}s ease-in-out infinite;
                    animation-delay: ${Math.random() * 5}s;
                `;
                
                this.container.appendChild(orb);
            }
        }
    }

    // ===== TYPING EFFECT =====
    class TypingEffect {
        constructor() {
            this.element = $('.hero-subtitle');
            this.texts = [
                'Full-Stack Web Developer & Graphic Designer',
                'AI/ML Enthusiast & Google Developer',
                'Creative Problem Solver & Innovator',
                'Open Source Contributor & Tech Leader'
            ];
            this.currentTextIndex = 0;
            this.currentCharIndex = 0;
            this.isDeleting = false;
            
            this.init();
        }

        init() {
            if (!this.element) return;
            
            this.type();
        }

        type() {
            const currentText = this.texts[this.currentTextIndex];
            
            if (this.isDeleting) {
                this.element.textContent = currentText.substring(0, this.currentCharIndex - 1);
                this.currentCharIndex--;
            } else {
                this.element.textContent = currentText.substring(0, this.currentCharIndex + 1);
                this.currentCharIndex++;
            }

            let typeSpeed = this.isDeleting ? 50 : 100;

            if (!this.isDeleting && this.currentCharIndex === currentText.length) {
                typeSpeed = 2000;
                this.isDeleting = true;
            } else if (this.isDeleting && this.currentCharIndex === 0) {
                this.isDeleting = false;
                this.currentTextIndex = (this.currentTextIndex + 1) % this.texts.length;
                typeSpeed = 500;
            }

            setTimeout(() => this.type(), typeSpeed);
        }
    }

    // ===== INITIALIZE ALL COMPONENTS =====
    function initializePortfolio() {
        new Navigation();
        new ThemeToggle();
        new SkillsAnimation();
        new ProjectFilter();
        new ScrollAnimations();
        new ParticleSystem();
        new ContactForm();
        new FloatingOrbs();
        new TypingEffect();
        
        // Add loading complete class
        document.body.classList.add('loaded');
        
        console.log('🚀 Enhanced Portfolio Initialized Successfully!');
    }

    // Initialize when DOM is ready
    initializePortfolio();
});