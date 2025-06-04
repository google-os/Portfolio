/**
 * Enhanced Frosted Glass Animations & Interactions
 * Modern portfolio enhancements with smooth animations
 */

document.addEventListener('DOMContentLoaded', function() {
    
    // Initialize all animations and effects
    initParticleEffect();
    initScrollAnimations();
    initGlowEffects();
    initTypingEffect();
    initProgressBarAnimations();
    initTiltEffect();
    initCursorTrail();
    initSmoothScrolling();
    
    // Particle Background Effect
    function initParticleEffect() {
        const particleContainer = document.createElement('div');
        particleContainer.className = 'particles';
        document.body.appendChild(particleContainer);
        
        for (let i = 0; i < 50; i++) {
            createParticle(particleContainer);
        }
    }
    
    function createParticle(container) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        
        // Random position and animation delay
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 6 + 's';
        particle.style.animationDuration = (Math.random() * 4 + 4) + 's';
        
        // Random color from our palette
        const colors = ['#ff4757', '#2ed573', '#ffa502', '#3742fa'];
        particle.style.background = colors[Math.floor(Math.random() * colors.length)];
        
        container.appendChild(particle);
        
        // Remove and recreate particle after animation
        setTimeout(() => {
            if (particle.parentNode) {
                particle.parentNode.removeChild(particle);
                createParticle(container);
            }
        }, 8000);
    }
    
    // Scroll-triggered animations
    function initScrollAnimations() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-on-scroll');
                    
                    // Special animations for different elements
                    if (entry.target.classList.contains('count-box')) {
                        animateCounter(entry.target);
                    }
                    
                    if (entry.target.classList.contains('progress')) {
                        animateProgressBar(entry.target);
                    }
                }
            });
        }, observerOptions);
        
        // Observe elements for animation
        const animatedElements = document.querySelectorAll('.count-box, .icon-box, .resume-item, .portfolio-item, .info-box, .progress');
        animatedElements.forEach(el => observer.observe(el));
    }
    
    // Counter animation
    function animateCounter(element) {
        const counter = element.querySelector('.purecounter');
        if (!counter) return;
        
        const target = parseInt(counter.getAttribute('data-purecounter-end'));
        const duration = 2000;
        const increment = target / (duration / 16);
        let current = 0;
        
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                current = target;
                clearInterval(timer);
            }
            counter.textContent = Math.floor(current);
        }, 16);
    }
    
    // Progress bar animation
    function animateProgressBar(progressElement) {
        const progressBar = progressElement.querySelector('.progress-bar');
        if (!progressBar) return;
        
        const targetWidth = progressBar.getAttribute('aria-valuenow') + '%';
        progressBar.style.width = '0%';
        
        setTimeout(() => {
            progressBar.style.transition = 'width 2s ease-in-out';
            progressBar.style.width = targetWidth;
        }, 200);
    }
    
    // Glow effects on hover
    function initGlowEffects() {
        const glowElements = document.querySelectorAll('.count-box, .icon-box, .portfolio-item, .info-box');
        
        glowElements.forEach(element => {
            element.classList.add('glow-on-hover');
            
            element.addEventListener('mouseenter', function() {
                this.style.boxShadow = '0 20px 60px rgba(46, 213, 115, 0.4)';
            });
            
            element.addEventListener('mouseleave', function() {
                this.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.3)';
            });
        });
    }
    
    // Typing effect for header text
    function initTypingEffect() {
        const typingElement = document.querySelector('#header h2 span');
        if (!typingElement) return;
        
        const originalText = typingElement.textContent;
        const words = ['tech nurd', 'tech enthusiast', 'developer', 'innovator', 'creator'];
        let wordIndex = 0;
        let charIndex = 0;
        let isDeleting = false;
        
        function typeWriter() {
            const currentWord = words[wordIndex];
            
            if (isDeleting) {
                typingElement.textContent = currentWord.substring(0, charIndex - 1);
                charIndex--;
            } else {
                typingElement.textContent = currentWord.substring(0, charIndex + 1);
                charIndex++;
            }
            
            let typeSpeed = isDeleting ? 50 : 100;
            
            if (!isDeleting && charIndex === currentWord.length) {
                typeSpeed = 2000;
                isDeleting = true;
            } else if (isDeleting && charIndex === 0) {
                isDeleting = false;
                wordIndex = (wordIndex + 1) % words.length;
                typeSpeed = 500;
            }
            
            setTimeout(typeWriter, typeSpeed);
        }
        
        // Start typing effect after 2 seconds
        setTimeout(typeWriter, 2000);
    }
    
    // Enhanced progress bar animations
    function initProgressBarAnimations() {
        const progressBars = document.querySelectorAll('.progress-bar');
        
        progressBars.forEach(bar => {
            // Add shimmer effect
            bar.style.position = 'relative';
            bar.style.overflow = 'hidden';
            
            // Create shimmer element
            const shimmer = document.createElement('div');
            shimmer.style.cssText = `
                position: absolute;
                top: 0;
                left: -100%;
                width: 100%;
                height: 100%;
                background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
                animation: shimmer 2s infinite;
            `;
            bar.appendChild(shimmer);
        });
    }
    
    // 3D tilt effect
    function initTiltEffect() {
        const tiltElements = document.querySelectorAll('.count-box, .icon-box, .portfolio-item');
        
        tiltElements.forEach(element => {
            element.addEventListener('mousemove', function(e) {
                const rect = this.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                
                const centerX = rect.width / 2;
                const centerY = rect.height / 2;
                
                const rotateX = (y - centerY) / 10;
                const rotateY = (centerX - x) / 10;
                
                this.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(10px)`;
            });
            
            element.addEventListener('mouseleave', function() {
                this.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0px)';
            });
        });
    }
    
    // Cursor trail effect
    function initCursorTrail() {
        const trail = [];
        const trailLength = 10;
        
        for (let i = 0; i < trailLength; i++) {
            const dot = document.createElement('div');
            dot.style.cssText = `
                position: fixed;
                width: 4px;
                height: 4px;
                background: #2ed573;
                border-radius: 50%;
                pointer-events: none;
                z-index: 9999;
                opacity: ${1 - i / trailLength};
                transition: all 0.1s ease;
            `;
            document.body.appendChild(dot);
            trail.push(dot);
        }
        
        document.addEventListener('mousemove', function(e) {
            trail.forEach((dot, index) => {
                setTimeout(() => {
                    dot.style.left = e.clientX + 'px';
                    dot.style.top = e.clientY + 'px';
                }, index * 20);
            });
        });
    }
    
    // Smooth scrolling for navigation links
    function initSmoothScrolling() {
        const navLinks = document.querySelectorAll('.nav-link');
        
        navLinks.forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                
                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                    
                    // Update active nav link
                    navLinks.forEach(nav => nav.classList.remove('active'));
                    this.classList.add('active');
                }
            });
        });
    }
    
    // Enhanced form interactions
    const formInputs = document.querySelectorAll('.php-email-form input, .php-email-form textarea');
    formInputs.forEach(input => {
        input.addEventListener('focus', function() {
            this.parentElement.style.transform = 'translateY(-2px)';
            this.style.boxShadow = '0 0 20px rgba(46, 213, 115, 0.3)';
        });
        
        input.addEventListener('blur', function() {
            this.parentElement.style.transform = 'translateY(0)';
            this.style.boxShadow = 'none';
        });
    });
    
    // Portfolio filter animations
    const portfolioFilters = document.querySelectorAll('.portfolio-filters li');
    portfolioFilters.forEach(filter => {
        filter.addEventListener('click', function() {
            // Add ripple effect
            const ripple = document.createElement('span');
            ripple.style.cssText = `
                position: absolute;
                border-radius: 50%;
                background: rgba(46, 213, 115, 0.3);
                transform: scale(0);
                animation: ripple 0.6s linear;
                pointer-events: none;
            `;
            
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = (rect.width / 2 - size / 2) + 'px';
            ripple.style.top = (rect.height / 2 - size / 2) + 'px';
            
            this.style.position = 'relative';
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });
    
    // Add CSS for ripple animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes ripple {
            to {
                transform: scale(4);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);
    
    // Loading screen
    function showLoadingScreen() {
        const loader = document.createElement('div');
        loader.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: linear-gradient(135deg, #1c1c1c, #282828);
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 10000;
            transition: opacity 0.5s ease;
        `;
        
        loader.innerHTML = `
            <div class="loading-spinner"></div>
        `;
        
        document.body.appendChild(loader);
        
        // Hide loader after page load
        window.addEventListener('load', () => {
            setTimeout(() => {
                loader.style.opacity = '0';
                setTimeout(() => {
                    loader.remove();
                }, 500);
            }, 1000);
        });
    }
    
    // Initialize loading screen
    showLoadingScreen();
    
    // Parallax effect for background elements
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const parallaxElements = document.querySelectorAll('.parallax');
        
        parallaxElements.forEach(element => {
            const speed = element.dataset.speed || 0.5;
            element.style.transform = `translateY(${scrolled * speed}px)`;
        });
    });
    
    // Dynamic background color change based on scroll
    window.addEventListener('scroll', function() {
        const scrollPercent = window.pageYOffset / (document.documentElement.scrollHeight - window.innerHeight);
        const hue = scrollPercent * 60; // Change hue from 0 to 60
        document.body.style.filter = `hue-rotate(${hue}deg)`;
    });
    
    // Add intersection observer for navbar background
    const header = document.getElementById('header');
    const navbar = document.getElementById('navbar');
    
    if (navbar) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 100) {
                navbar.style.background = 'rgba(40, 40, 40, 0.95)';
                navbar.style.backdropFilter = 'blur(20px)';
            } else {
                navbar.style.background = 'rgba(40, 40, 40, 0.15)';
                navbar.style.backdropFilter = 'blur(20px)';
            }
        });
    }
    
    // Enhanced mobile menu animation
    const mobileNavToggle = document.querySelector('.mobile-nav-toggle');
    if (mobileNavToggle) {
        mobileNavToggle.addEventListener('click', function() {
            const navbar = document.querySelector('#navbar ul');
            navbar.style.animation = 'slideDown 0.3s ease';
        });
    }
    
    // Add slide down animation
    const mobileStyle = document.createElement('style');
    mobileStyle.textContent = `
        @keyframes slideDown {
            from {
                opacity: 0;
                transform: translateY(-20px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
    `;
    document.head.appendChild(mobileStyle);
    
    console.log('🎨 Frosted Glass Portfolio Enhanced - All animations loaded!');
});

// Utility function for random colors
function getRandomColor() {
    const colors = ['#ff4757', '#2ed573', '#ffa502', '#3742fa'];
    return colors[Math.floor(Math.random() * colors.length)];
}

// Utility function for easing
function easeOutCubic(t) {
    return 1 - Math.pow(1 - t, 3);
}