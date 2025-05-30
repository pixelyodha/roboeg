// Smooth scroll behavior for navigation
document.querySelectorAll('nav a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const targetId = this.getAttribute('href');
    document.querySelector(targetId).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Loading animation and content reveal
window.addEventListener('load', () => {
  const loadingScreen = document.getElementById('loading-screen');
  const mainContent = document.getElementById('main-content');
  const centerContent = document.querySelector('.center-content');
  const navItems = document.querySelectorAll('.navbar li');

  // Initial loading animation
  setTimeout(() => {
    loadingScreen.classList.add('fade-out');

    setTimeout(() => {
      loadingScreen.style.display = 'none';
      mainContent.classList.remove('hidden');
      mainContent.classList.add('fade-in');

      // Animate navbar items one by one
      navItems.forEach((item, index) => {
        setTimeout(() => {
          item.style.opacity = '1';
          item.style.transform = 'translateY(0)';
        }, index * 200);
      });

      // Animate center content
      setTimeout(() => {
        centerContent.style.opacity = '1';
        centerContent.style.transform = 'translate(-50%, -50%) scale(1)';
      }, navItems.length * 200);

    }, 1000); // Longer fade duration for smoother transition
  }, 3000);
});

// Add initial styles for animations
document.addEventListener('DOMContentLoaded', () => {
  const navItems = document.querySelectorAll('.navbar li');
  const centerContent = document.querySelector('.center-content');
  const socialBtns = document.querySelectorAll('.social-btn');
  const ctaButton = document.querySelector('.cta-button');

  // Initial state setup
  navItems.forEach(item => {
    item.style.opacity = '0';
    item.style.transform = 'translateY(-20px)';
    item.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
  });

  socialBtns.forEach(btn => {
    btn.style.opacity = '0';
    btn.style.transform = 'translateY(20px)';
    btn.style.transition = 'all 0.5s ease';
  });

  if (ctaButton) {
    ctaButton.style.opacity = '0';
    ctaButton.style.transform = 'scale(0.9)';
    ctaButton.style.transition = 'all 0.5s ease';
  }

  centerContent.style.opacity = '0';
  centerContent.style.transform = 'translate(-50%, -50%) scale(0.95)';
  centerContent.style.transition = 'opacity 1s ease, transform 1s ease';
});

// Smooth scroll for navigation and buttons
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const targetId = this.getAttribute('href');
    if (targetId === '#') return;
    
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// Mouse move parallax effect for center content
document.addEventListener('mousemove', (e) => {
  const centerContent = document.querySelector('.center-content');
  const { clientX, clientY } = e;
  const { innerWidth, innerHeight } = window;
  
  const xOffset = (clientX - innerWidth / 2) / innerWidth * 20;
  const yOffset = (clientY - innerHeight / 2) / innerHeight * 20;
  
  centerContent.style.transform = `translate(calc(-50% + ${xOffset}px), calc(-50% + ${yOffset}px))`;
});
