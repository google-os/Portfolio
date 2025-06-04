/*--------------------------------------------------------------
# Enhanced Animations & Interactive Effects
# Smooth typing, particle effects, 3D interactions, contact form
--------------------------------------------------------------*/

// Enhanced Typing Animation
class EnhancedTypingEffect {
  constructor(element, words, options = {}) {
    this.element = element;
    this.words = words;
    this.options = {
      typeSpeed: 100,
      deleteSpeed: 50,
      delayBetweenWords: 2000,
      loop: true,
      cursor: true,
      ...options
    };
    this.currentWordIndex = 0;
    this.currentCharIndex = 0;
    this.isDeleting = false;
    this.isWaiting = false;
    
    this.init();
  }
  
  init() {
    if (this.options.cursor) {
      this.element.classList.add('typing-text');
    }
    this.type();
  }
  
  type() {
    const currentWord = this.words[this.currentWordIndex];
    
    if (this.isWaiting) {
      setTimeout(() => {
        this.isWaiting = false;
        this.type();
      }, this.options.delayBetweenWords);
      return;
    }
    
    if (!this.isDeleting) {
      // Typing
      if (this.currentCharIndex < currentWord.length) {
        this.element.textContent = currentWord.substring(0, this.currentCharIndex + 1);
        this.currentCharIndex++;
        setTimeout(() => this.type(), this.options.typeSpeed + Math.random() * 50);
      } else {
        // Word complete, start deleting after delay
        this.isWaiting = true;
        setTimeout(() => {
          this.isDeleting = true;
          this.isWaiting = false;
          this.type();
        }, this.options.delayBetweenWords);
      }
    } else {
      // Deleting
      if (this.currentCharIndex > 0) {
        this.element.textContent = currentWord.substring(0, this.currentCharIndex - 1);
        this.currentCharIndex--;
        setTimeout(() => this.type(), this.options.deleteSpeed);
      } else {
        // Word deleted, move to next word
        this.isDeleting = false;
        this.currentWordIndex = (this.currentWordIndex + 1) % this.words.length;
        setTimeout(() => this.type(), 500);
      }
    }
  }
}

// Particle System
class ParticleSystem {
  constructor(container) {
    this.container = container;
    this.particles = [];
    this.maxParticles = 50;
    this.colors = ['#ff4757', '#2ed573', '#ffa726', '#3742fa', '#8c7ae6', '#00d2d3'];
    
    this.init();
  }
  
  init() {
    this.canvas = document.createElement('canvas');
    this.ctx = this.canvas.getContext('2d');
    this.canvas.style.position = 'fixed';
    this.canvas.style.top = '0';
    this.canvas.style.left = '0';
    this.canvas.style.width = '100%';
    this.canvas.style.height = '100%';
    this.canvas.style.pointerEvents = 'none';
    this.canvas.style.zIndex = '-1';
    this.canvas.style.opacity = '0.6';
    
    document.body.appendChild(this.canvas);
    
    this.resize();
    this.createParticles();
    this.animate();
    
    window.addEventListener('resize', () => this.resize());
  }
  
  resize() {
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
  }
  
  createParticles() {
    for (let i = 0; i < this.maxParticles; i++) {
      this.particles.push({
        x: Math.random() * this.canvas.width,
        y: Math.random() * this.canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 3 + 1,
        color: this.colors[Math.floor(Math.random() * this.colors.length)],
        opacity: Math.random() * 0.5 + 0.2,
        life: Math.random() * 100 + 50
      });
    }
  }
  
  animate() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    
    this.particles.forEach((particle, index) => {
      // Update position
      particle.x += particle.vx;
      particle.y += particle.vy;
      
      // Wrap around edges
      if (particle.x < 0) particle.x = this.canvas.width;
      if (particle.x > this.canvas.width) particle.x = 0;
      if (particle.y < 0) particle.y = this.canvas.height;
      if (particle.y > this.canvas.height) particle.y = 0;
      
      // Update life
      particle.life--;
      if (particle.life <= 0) {
        this.particles[index] = {
          x: Math.random() * this.canvas.width,
          y: Math.random() * this.canvas.height,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          size: Math.random() * 3 + 1,
          color: this.colors[Math.floor(Math.random() * this.colors.length)],
          opacity: Math.random() * 0.5 + 0.2,
          life: Math.random() * 100 + 50
        };
      }
      
      // Draw particle
      this.ctx.save();
      this.ctx.globalAlpha = particle.opacity;
      this.ctx.fillStyle = particle.color;
      this.ctx.beginPath();
      this.ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
      this.ctx.fill();
      this.ctx.restore();
    });
    
    requestAnimationFrame(() => this.animate());
  }
}

// Cursor Trail Effect
class CursorTrail {
  constructor() {
    this.trail = [];
    this.maxTrailLength = 20;
    this.colors = ['#ff4757', '#2ed573', '#ffa726', '#3742fa'];
    
    this.init();
  }
  
  init() {
    this.canvas = document.createElement('canvas');
    this.ctx = this.canvas.getContext('2d');
    this.canvas.style.position = 'fixed';
    this.canvas.style.top = '0';
    this.canvas.style.left = '0';
    this.canvas.style.width = '100%';
    this.canvas.style.height = '100%';
    this.canvas.style.pointerEvents = 'none';
    this.canvas.style.zIndex = '9999';
    
    document.body.appendChild(this.canvas);
    
    this.resize();
    this.animate();
    
    document.addEventListener('mousemove', (e) => this.addTrailPoint(e));
    window.addEventListener('resize', () => this.resize());
  }
  
  resize() {
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
  }
  
  addTrailPoint(e) {
    this.trail.push({
      x: e.clientX,
      y: e.clientY,
      life: this.maxTrailLength,
      color: this.colors[Math.floor(Math.random() * this.colors.length)]
    });
    
    if (this.trail.length > this.maxTrailLength) {
      this.trail.shift();
    }
  }
  
  animate() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    
    this.trail.forEach((point, index) => {
      point.life--;
      
      if (point.life > 0) {
        const opacity = point.life / this.maxTrailLength;
        const size = (point.life / this.maxTrailLength) * 8;
        
        this.ctx.save();
        this.ctx.globalAlpha = opacity * 0.6;
        this.ctx.fillStyle = point.color;
        this.ctx.beginPath();
        this.ctx.arc(point.x, point.y, size, 0, Math.PI * 2);
        this.ctx.fill();
        this.ctx.restore();
      }
    });
    
    this.trail = this.trail.filter(point => point.life > 0);
    
    requestAnimationFrame(() => this.animate());
  }
}

// 3D Tilt Effect
class TiltEffect {
  constructor(elements) {
    this.elements = elements;
    this.init();
  }
  
  init() {
    this.elements.forEach(element => {
      element.addEventListener('mousemove', (e) => this.handleMouseMove(e, element));
      element.addEventListener('mouseleave', () => this.handleMouseLeave(element));
    });
  }
  
  handleMouseMove(e, element) {
    const rect = element.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = (y - centerY) / centerY * -10;
    const rotateY = (x - centerX) / centerX * 10;
    
    element.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`;
  }
  
  handleMouseLeave(element) {
    element.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
  }
}

// Enhanced Contact Form Handler
class ContactFormHandler {
  constructor(formSelector) {
    this.form = document.querySelector(formSelector);
    this.init();
  }
  
  init() {
    if (!this.form) return;
    
    this.form.addEventListener('submit', (e) => this.handleSubmit(e));
    
    // Add input animations
    const inputs = this.form.querySelectorAll('input, textarea');
    inputs.forEach(input => {
      input.addEventListener('focus', () => this.handleInputFocus(input));
      input.addEventListener('blur', () => this.handleInputBlur(input));
    });
  }
  
  handleInputFocus(input) {
    input.style.transform = 'scale(1.02)';
    input.style.boxShadow = '0 0 20px rgba(55, 66, 250, 0.3)';
  }
  
  handleInputBlur(input) {
    input.style.transform = 'scale(1)';
    input.style.boxShadow = '';
  }
  
  async handleSubmit(e) {
    e.preventDefault();
    
    const formData = new FormData(this.form);
    const submitButton = this.form.querySelector('button[type="submit"]');
    const originalText = submitButton.textContent;
    
    // Show loading state
    submitButton.textContent = 'Sending...';
    submitButton.disabled = true;
    submitButton.style.background = 'linear-gradient(45deg, #666, #888)';
    
    try {
      const response = await fetch('forms/contact.php', {
        method: 'POST',
        body: formData
      });
      
      const result = await response.json();
      
      if (result.success) {
        this.showMessage('Message sent successfully! Thank you for contacting me.', 'success');
        this.form.reset();
      } else {
        this.showMessage(result.message || 'Failed to send message. Please try again.', 'error');
      }
    } catch (error) {
      console.error('Contact form error:', error);
      this.showMessage('Network error. Please check your connection and try again.', 'error');
    } finally {
      // Reset button state
      submitButton.textContent = originalText;
      submitButton.disabled = false;
      submitButton.style.background = '';
    }
  }
  
  showMessage(message, type) {
    // Remove existing message
    const existingMessage = document.querySelector('.contact-message');
    if (existingMessage) {
      existingMessage.remove();
    }
    
    // Create new message
    const messageDiv = document.createElement('div');
    messageDiv.className = `contact-message ${type}`;
    messageDiv.textContent = message;
    messageDiv.style.cssText = `
      position: fixed;
      top: 20px;
      right: 20px;
      padding: 15px 25px;
      border-radius: 10px;
      color: white;
      font-weight: 600;
      z-index: 10000;
      transform: translateX(400px);
      transition: transform 0.3s ease;
      ${type === 'success' ? 'background: linear-gradient(45deg, #2ed573, #26d0ce);' : 'background: linear-gradient(45deg, #ff4757, #ff6b9d);'}
    `;
    
    document.body.appendChild(messageDiv);
    
    // Animate in
    setTimeout(() => {
      messageDiv.style.transform = 'translateX(0)';
    }, 100);
    
    // Animate out and remove
    setTimeout(() => {
      messageDiv.style.transform = 'translateX(400px)';
      setTimeout(() => messageDiv.remove(), 300);
    }, 4000);
  }
}

// Smooth Scroll Enhancement
class SmoothScroll {
  constructor() {
    this.init();
  }
  
  init() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', (e) => {
        e.preventDefault();
        const target = document.querySelector(anchor.getAttribute('href'));
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      });
    });
  }
}

// Intersection Observer for Animations
class ScrollAnimations {
  constructor() {
    this.init();
  }
  
  init() {
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
    
    // Observe all sections and portfolio items
    document.querySelectorAll('section, .portfolio-item').forEach(el => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(30px)';
      el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
      observer.observe(el);
    });
  }
}

// Loading Screen
class LoadingScreen {
  constructor() {
    this.init();
  }
  
  init() {
    // Create loading overlay
    const overlay = document.createElement('div');
    overlay.className = 'loading-overlay';
    overlay.innerHTML = '<div class="loading-spinner"></div>';
    document.body.appendChild(overlay);
    
    // Remove loading screen when page is loaded
    window.addEventListener('load', () => {
      setTimeout(() => {
        overlay.classList.add('fade-out');
        setTimeout(() => overlay.remove(), 500);
      }, 1000);
    });
  }
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  // Initialize loading screen
  new LoadingScreen();
  
  // Initialize typing effect
  const typingElement = document.querySelector('.typing-text');
  if (typingElement) {
    new EnhancedTypingEffect(typingElement, [
      'tech nurd',
      'developer',
      'AI enthusiast',
      'innovator',
      'problem solver',
      'tech enthusiast'
    ], {
      typeSpeed: 80,
      deleteSpeed: 40,
      delayBetweenWords: 2500
    });
  }
  
  // Initialize particle system
  new ParticleSystem();
  
  // Initialize cursor trail
  new CursorTrail();
  
  // Initialize 3D tilt effects
  const tiltElements = document.querySelectorAll('.portfolio-item, .social-links a, section');
  new TiltEffect(tiltElements);
  
  // Initialize contact form
  new ContactFormHandler('#contact form');
  
  // Initialize smooth scroll
  new SmoothScroll();
  
  // Initialize scroll animations
  new ScrollAnimations();
  
  // Add dynamic background color changes
  let hue = 0;
  setInterval(() => {
    hue = (hue + 1) % 360;
    document.documentElement.style.setProperty('--dynamic-hue', hue + 'deg');
  }, 100);
});

// Add some CSS for dynamic effects
const dynamicStyles = document.createElement('style');
dynamicStyles.textContent = `
  :root {
    --dynamic-hue: 0deg;
  }
  
  .dynamic-bg {
    filter: hue-rotate(var(--dynamic-hue));
  }
  
  .contact-message {
    backdrop-filter: blur(10px);
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
  }
`;
document.head.appendChild(dynamicStyles);