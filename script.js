// Feature tabs
document.querySelectorAll('.feature-tab').forEach(tab => {
    tab.addEventListener('click', () => {
        document.querySelectorAll('.feature-tab').forEach(t => t.classList.remove('active'));
        document.querySelectorAll('.feature-content').forEach(c => c.classList.remove('active'));
        
        tab.classList.add('active');
        document.getElementById(tab.dataset.tab).classList.add('active');
    });
});

// FAQ accordion
document.querySelectorAll('.faq-question').forEach(question => {
    question.addEventListener('click', () => {
        const item = question.parentElement;
        item.classList.toggle('open');
    });
});

// Goose widget
function toggleGoose() {
    document.getElementById('gooseWidget').classList.toggle('open');
}

// Close goose panel when clicking outside
document.addEventListener('click', (e) => {
    const widget = document.getElementById('gooseWidget');
    if (!widget.contains(e.target) && widget.classList.contains('open')) {
        widget.classList.remove('open');
    }
});

// Smooth scroll for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

// Header scroll effect
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.style.background = 'rgba(11, 15, 20, 0.95)';
    } else {
        header.style.background = 'rgba(11, 15, 20, 0.8)';
    }
});

// Intersection Observer for animations
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

document.querySelectorAll('.step-card, .demo-card, .security-card, .faq-item').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    observer.observe(el);
});

// Add visible class styles
const style = document.createElement('style');
style.textContent = `
    .step-card.visible,
    .demo-card.visible,
    .security-card.visible,
    .faq-item.visible {
        opacity: 1 !important;
        transform: translateY(0) !important;
    }
`;
document.head.appendChild(style);
