// Hamburger Menu Functionality
function toggleMenu() {
    document.querySelector('.hamburger-menu').classList.toggle('active');
    document.querySelector('.hamburger-icon').classList.toggle('active');
  }
  
  const animatables = document.querySelectorAll('.scroll-animate');

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate');
        observer.unobserve(entry.target); // Trigger only once
      }
    });
  }, {
    threshold: 0.2
  });

  animatables.forEach(el => observer.observe(el));
  // Close menu when clicking outside
  document.addEventListener('click', function(event) {
    const menu = document.querySelector('.hamburger-menu');
    const icon = document.querySelector('.hamburger-icon');
    
    if (!menu.contains(event.target) && !icon.contains(event.target)) {
      menu.classList.remove('active');
      icon.classList.remove('active');
    }
  });
  
  // Smooth Scroll
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth'
        });
      }
    });
  });

  // Hamburger Menu Functionality
  function toggleMenu() {
    document.querySelector('.hamburger-menu').classList.toggle('active');
    document.querySelector('.hamburger-icon').classList.toggle('active');
  }

  // Close menu when clicking outside
  document.addEventListener('click', function(event) {
    const menu = document.querySelector('.hamburger-menu');
    const icon = document.querySelector('.hamburger-icon');
    
    if (!menu.contains(event.target) && !icon.contains(event.target)) {
      menu.classList.remove('active');
      icon.classList.remove('active');
    }
  });

  // Smooth Scroll for Navigation Links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });

  // Hamburger Menu Functionality
  function toggleMenu() {
    document.querySelector('.hamburger-menu').classList.toggle('active');
    document.querySelector('.hamburger-icon').classList.toggle('active');
  }

  function toggleInfo(button) {
    const card = button.closest('.profile-card');
    card.classList.toggle('active');
    button.textContent = card.classList.contains('active') ? '▲' : '▼';
  }

  // Close menu when clicking outside
  document.addEventListener('click', function(event) {
    const menu = document.querySelector('.hamburger-menu');
    const icon = document.querySelector('.hamburger-icon');
    
    if (!menu.contains(event.target) && !icon.contains(event.target)) {
      menu.classList.remove('active');
      icon.classList.remove('active');
    }
  });

  // Smooth Scroll for Navigation Links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });