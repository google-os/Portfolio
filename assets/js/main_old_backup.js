/**
 * Enhanced Portfolio with Horizontal Sliding and Frosted Glass Effects
 * Author: Ashish Vasant Yesale
 * Email: ashishyesale007@gmail.com
 */

document.addEventListener('DOMContentLoaded', function() {
    'use strict';

    // ===== UTILITY FUNCTIONS =====
    const $ = (selector) => document.querySelector(selector);
    const $$ = (selector) => document.querySelectorAll(selector);

    // ===== HORIZONTAL SLIDER FUNCTIONALITY =====
    class HorizontalSlider {
        constructor() {
            this.slidesWrapper = $('#horizontal-container');
            this.slides = $$('.section-slide');
            this.navLinks = $$('.nav-link');
            this.currentSlide = 0;
            this.totalSlides = this.slides.length;
            
            console.log('HorizontalSlider initialized:', {
                slidesWrapper: this.slidesWrapper,
                slides: this.slides.length,
                navLinks: this.navLinks.length
            });
            
            this.init();
        }

        init() {
            this.setupNavigation();
            this.setupKeyboardNavigation();
            this.setupButtonNavigation();
            this.updateActiveStates();
        }

        setupNavigation() {
            this.navLinks.forEach((link, index) => {
                link.addEventListener('click', (e) => {
                    e.preventDefault();
                    const sectionIndex = parseInt(link.getAttribute('data-section'));
                    this.goToSlide(sectionIndex);
                });
            });
        }

        setupKeyboardNavigation() {
            document.addEventListener('keydown', (e) => {
                switch(e.key) {
                    case 'ArrowLeft':
                        e.preventDefault();
                        this.previousSlide();
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

        setupButtonNavigation() {
            // Handle hero buttons
            const heroButtons = $$('.hero-buttons .btn');
            heroButtons.forEach(btn => {
                const sectionIndex = btn.getAttribute('data-section');
                if (sectionIndex) {
                    btn.addEventListener('click', (e) => {
                        e.preventDefault();
                        this.goToSlide(parseInt(sectionIndex));
                    });
                }
            });
        }

        goToSlide(index) {
            if (index < 0 || index >= this.totalSlides) return;
            
            this.currentSlide = index;
            // Each section is 100vw wide, so to show section N, we need to move -N * 100vw
            const translateX = -index * 100;
            
            console.log(`Going to slide ${index}, translateX: ${translateX}vw`);
            console.log('slidesWrapper:', this.slidesWrapper);
            
            if (this.slidesWrapper) {
                this.slidesWrapper.style.transform = `translateX(${translateX}vw)`;
                console.log('Transform applied:', this.slidesWrapper.style.transform);
            } else {
                console.error('slidesWrapper not found!');
            }
            this.updateActiveStates();
        }

        nextSlide() {
            const nextIndex = (this.currentSlide + 1) % this.totalSlides;
            this.goToSlide(nextIndex);
        }

        previousSlide() {
            const prevIndex = (this.currentSlide - 1 + this.totalSlides) % this.totalSlides;
            this.goToSlide(prevIndex);
        }

        updateActiveStates() {
            // Update slide active states
            this.slides.forEach((slide, index) => {
                slide.classList.toggle('active', index === this.currentSlide);
            });

            // Update navigation active states
            this.navLinks.forEach((link, index) => {
                const sectionIndex = parseInt(link.getAttribute('data-section'));
                link.classList.toggle('active', sectionIndex === this.currentSlide);
            });
        }
    }

    // ===== THEME TOGGLE FUNCTIONALITY =====
    class ThemeToggle {
        constructor() {
            this.themeBtn = $('#theme-btn');
            this.body = document.body;
            this.currentTheme = localStorage.getItem('theme') || 'dark';
            
            this.init();
        }

        init() {
            this.setTheme(this.currentTheme);
            this.setupToggle();
        }

        setupToggle() {
            this.themeBtn.addEventListener('click', () => {
                this.toggleTheme();
            });
        }

        toggleTheme() {
            const newTheme = this.currentTheme === 'dark' ? 'light' : 'dark';
            this.setTheme(newTheme);
        }

        setTheme(theme) {
            this.currentTheme = theme;
            this.body.classList.toggle('light-theme', theme === 'light');
            
            // Update button icon with rotation animation
            const icon = this.themeBtn.querySelector('i');
            icon.style.transform = 'rotate(360deg)';
            
            setTimeout(() => {
                icon.className = theme === 'light' ? 'fas fa-moon' : 'fas fa-sun';
                icon.style.transform = 'rotate(0deg)';
            }, 150);

            localStorage.setItem('theme', theme);
        }
    }

    // ===== PROJECT FILTERING FUNCTIONALITY =====
    class ProjectFilter {
        constructor() {
            this.filterBtns = $$('.filter-btn');
            this.projectCards = $$('.project-card');
            this.projectsGrid = $('#projects-grid');
            
            this.init();
        }

        init() {
            this.setupFilters();
        }

        setupFilters() {
            this.filterBtns.forEach(btn => {
                btn.addEventListener('click', () => {
                    const filter = btn.getAttribute('data-filter');
                    this.filterProjects(filter);
                    this.updateActiveFilter(btn);
                });
            });
        }

        filterProjects(filter) {
            this.projectCards.forEach((card, index) => {
                const category = card.getAttribute('data-category');
                const shouldShow = filter === 'all' || category === filter;
                
                // Add staggered animation delay
                setTimeout(() => {
                    if (shouldShow) {
                        card.style.display = 'block';
                        card.style.opacity = '0';
                        card.style.transform = 'translateY(20px)';
                        
                        setTimeout(() => {
                            card.style.opacity = '1';
                            card.style.transform = 'translateY(0)';
                        }, 50);
                    } else {
                        card.style.opacity = '0';
                        card.style.transform = 'translateY(-20px)';
                        
                        setTimeout(() => {
                            card.style.display = 'none';
                        }, 300);
                    }
                }, index * 100);
            });
        }

        updateActiveFilter(activeBtn) {
            this.filterBtns.forEach(btn => {
                btn.classList.remove('active');
            });
            activeBtn.classList.add('active');
        }
    }

    // ===== MOBILE MENU FUNCTIONALITY =====
    class MobileMenu {
        constructor() {
            this.hamburger = $('#hamburger');
            this.navMenu = $('#nav-menu');
            this.navLinks = $$('.nav-link');
            this.isOpen = false;
            
            this.init();
        }

        init() {
            this.setupToggle();
            this.setupLinkClicks();
        }

        setupToggle() {
            this.hamburger.addEventListener('click', () => {
                this.toggle();
            });
        }

        setupLinkClicks() {
            this.navLinks.forEach(link => {
                link.addEventListener('click', () => {
                    if (this.isOpen) {
                        this.close();
                    }
                });
            });
        }

        toggle() {
            this.isOpen = !this.isOpen;
            this.hamburger.classList.toggle('active', this.isOpen);
            this.navMenu.classList.toggle('active', this.isOpen);
        }

        close() {
            this.isOpen = false;
            this.hamburger.classList.remove('active');
            this.navMenu.classList.remove('active');
        }
    }

    // ===== ENHANCED ANIMATIONS =====
    class AnimationController {
        constructor() {
            this.init();
        }

        init() {
            this.setupScrollAnimations();
            this.setupHoverEffects();
            this.setupParticleSystem();
        }

        setupScrollAnimations() {
            // Animate skill bars when About section is active
            const skillBars = $$('.skill-progress');
            const aboutSlide = $('[data-slide="1"]');
            
            const observer = new MutationObserver((mutations) => {
                mutations.forEach((mutation) => {
                    if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
                        if (aboutSlide.classList.contains('active')) {
                            this.animateSkillBars(skillBars);
                        }
                    }
                });
            });

            if (aboutSlide) {
                observer.observe(aboutSlide, { attributes: true });
            }
        }

        animateSkillBars(skillBars) {
            skillBars.forEach((bar, index) => {
                setTimeout(() => {
                    const width = bar.getAttribute('data-width');
                    bar.style.width = width;
                }, index * 200);
            });
        }

        setupHoverEffects() {
            // Enhanced glass card hover effects
            const glassCards = $$('.glass-card');
            glassCards.forEach(card => {
                card.addEventListener('mouseenter', () => {
                    card.style.transform = 'translateY(-5px) scale(1.02)';
                });

                card.addEventListener('mouseleave', () => {
                    card.style.transform = 'translateY(0) scale(1)';
                });
            });
        }

        setupParticleSystem() {
            const particleSystem = $('.particle-system');
            if (!particleSystem) return;

            // Create floating particles
            for (let i = 0; i < 20; i++) {
                const particle = document.createElement('div');
                particle.className = 'particle';
                particle.style.cssText = `
                    position: absolute;
                    width: ${Math.random() * 4 + 2}px;
                    height: ${Math.random() * 4 + 2}px;
                    background: rgba(255, 255, 255, ${Math.random() * 0.3 + 0.1});
                    border-radius: 50%;
                    left: ${Math.random() * 100}%;
                    top: ${Math.random() * 100}%;
                    animation: floatParticle ${Math.random() * 20 + 10}s linear infinite;
                    animation-delay: ${Math.random() * 5}s;
                `;
                particleSystem.appendChild(particle);
            }
        }
    }

    // ===== FORM HANDLING =====
    class FormHandler {
        constructor() {
            this.contactForm = $('.contact-form');
            this.init();
        }

        init() {
            if (this.contactForm) {
                this.setupFormSubmission();
            }
        }

        setupFormSubmission() {
            this.contactForm.addEventListener('submit', (e) => {
                e.preventDefault();
                this.submitForm();
            });
        }

        async submitForm() {
            const formData = new FormData(this.contactForm);
            const submitBtn = this.contactForm.querySelector('button[type="submit"]');
            const originalText = submitBtn.innerHTML;

            try {
                submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
                submitBtn.disabled = true;

                const response = await fetch(this.contactForm.action, {
                    method: 'POST',
                    body: formData
                });

                if (response.ok) {
                    this.showMessage('Message sent successfully!', 'success');
                    this.contactForm.reset();
                } else {
                    throw new Error('Failed to send message');
                }
            } catch (error) {
                this.showMessage('Failed to send message. Please try again.', 'error');
            } finally {
                submitBtn.innerHTML = originalText;
                submitBtn.disabled = false;
            }
        }

        showMessage(message, type) {
            const messageDiv = document.createElement('div');
            messageDiv.className = `form-message ${type}`;
            messageDiv.textContent = message;
            messageDiv.style.cssText = `
                position: fixed;
                top: 20px;
                right: 20px;
                padding: 15px 20px;
                background: ${type === 'success' ? 'var(--primary-color)' : '#ff4757'};
                color: white;
                border-radius: 8px;
                z-index: 9999;
                animation: slideInRight 0.3s ease;
            `;

            document.body.appendChild(messageDiv);

            setTimeout(() => {
                messageDiv.remove();
            }, 5000);
        }
    }

    // ===== PROJECT MODAL FUNCTIONALITY =====
    window.openProjectModal = function(projectId) {
        // This would open a modal with project details
        console.log('Opening project modal for:', projectId);
        // Implementation for project modal can be added here
    };

    // ===== INITIALIZE ALL COMPONENTS =====
    const slider = new HorizontalSlider();
    const themeToggle = new ThemeToggle();
    const projectFilter = new ProjectFilter();
    const mobileMenu = new MobileMenu();
    const animationController = new AnimationController();
    const formHandler = new FormHandler();

    // ===== ADDITIONAL CSS ANIMATIONS =====
    const style = document.createElement('style');
    style.textContent = `
        @keyframes floatParticle {
            0% {
                transform: translateY(100vh) rotate(0deg);
                opacity: 0;
            }
            10% {
                opacity: 1;
            }
            90% {
                opacity: 1;
            }
            100% {
                transform: translateY(-100px) rotate(360deg);
                opacity: 0;
            }
        }

        @keyframes slideInRight {
            from {
                transform: translateX(100%);
                opacity: 0;
            }
            to {
                transform: translateX(0);
                opacity: 1;
            }
        }

        .skill-progress {
            width: 0;
            transition: width 1s ease-in-out;
        }

        .glass-card {
            transition: transform 0.3s ease;
        }

        .project-card {
            transition: opacity 0.3s ease, transform 0.3s ease;
        }
    `;
    document.head.appendChild(style);

    console.log('Enhanced Portfolio with Horizontal Sliding initialized successfully!');
});