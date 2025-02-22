/* Remove Preloader (Skeleton Loader) on window load */
window.addEventListener('load', () => {
  const preloader = document.getElementById('preloader');
  if (preloader) {
    preloader.style.display = 'none';
  }
});

/* Dark Mode Toggle */
const darkModeToggle = document.getElementById('darkModeToggle');
if (darkModeToggle) {
  darkModeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
  });
}

/* Side Menu Toggle */
const sideMenuToggle = document.getElementById('sideMenuToggle');
const sideMenuClose = document.getElementById('sideMenuClose');
const sideMenu = document.getElementById('sideMenu');
if (sideMenuToggle && sideMenu) {
  sideMenuToggle.addEventListener('click', () => {
    sideMenu.classList.add('open');
  });
}
if (sideMenuClose && sideMenu) {
  sideMenuClose.addEventListener('click', () => {
    sideMenu.classList.remove('open');
  });
}
document.querySelectorAll('.side-menu nav a').forEach(link => {
  link.addEventListener('click', () => {
    if (sideMenu) sideMenu.classList.remove('open');
  });
});

/* Contact Modal Toggle */
const contactBtn = document.getElementById('contactBtn');
const contactUsBtn = document.getElementById('contactUsBtn');
const contactModal = document.getElementById('contactModal');
const modalClose = document.getElementById('modalClose');
function openContactModal() {
  if (contactModal) contactModal.classList.add('active');
}
function closeContactModal() {
  if (contactModal) contactModal.classList.remove('active');
}
if (contactBtn) contactBtn.addEventListener('click', openContactModal);
if (contactUsBtn) contactUsBtn.addEventListener('click', openContactModal);
if (modalClose) modalClose.addEventListener('click', closeContactModal);
window.addEventListener('click', (e) => {
  if (e.target === contactModal) closeContactModal();
});

/* Testimonials Slider */
const testimonials = document.querySelectorAll('.testimonial');
let currentTestimonial = 0;
const prevTestimonialBtn = document.getElementById('prevTestimonial');
const nextTestimonialBtn = document.getElementById('nextTestimonial');
function showTestimonial(index) {
  testimonials.forEach((t, i) => {
    t.classList.toggle('active', i === index);
  });
}
if (prevTestimonialBtn) {
  prevTestimonialBtn.addEventListener('click', () => {
    currentTestimonial = (currentTestimonial - 1 + testimonials.length) % testimonials.length;
    showTestimonial(currentTestimonial);
  });
}
if (nextTestimonialBtn) {
  nextTestimonialBtn.addEventListener('click', () => {
    currentTestimonial = (currentTestimonial + 1) % testimonials.length;
    showTestimonial(currentTestimonial);
  });
}
if (testimonials.length > 0) {
  setInterval(() => {
    currentTestimonial = (currentTestimonial + 1) % testimonials.length;
    showTestimonial(currentTestimonial);
  }, 5000);
}

/* Dynamic Gradient Animation in Hero Section */
const heroGradient = document.querySelector('.hero-gradient');
if (heroGradient) {
  let angle = 45;
  function updateGradient() {
    angle = (angle + 0.1) % 360;
    heroGradient.style.background = `linear-gradient(${angle}deg, rgba(255,154,158,0.3), rgba(250,208,196,0.3))`;
    requestAnimationFrame(updateGradient);
  }
  requestAnimationFrame(updateGradient);
}

/* Parallax Effect for Floating Shapes */
window.addEventListener('scroll', () => {
  const scrolled = window.pageYOffset;
  document.querySelectorAll('.floating-shape').forEach(el => {
    el.style.transform = `translateY(${scrolled * 0.1}px)`;
  });
});

/* Scroll Animation using IntersectionObserver */
const scrollElements = document.querySelectorAll('.animate-on-scroll');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in-view');
      // Uncomment the next line if you want the animation to trigger only once:
      // observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });
scrollElements.forEach(el => observer.observe(el));

/* Carousel Slider (Slider Block 1) */
let carouselIndex = 0;
const carouselContainer = document.querySelector('.slides');
const carouselDots = document.querySelectorAll('.nav-dot');
function moveToCarouselSlide(index) {
  if (carouselContainer) {
    carouselContainer.style.transform = `translateX(-${index * 100}vw)`;
  }
  carouselDots.forEach((dot, i) => {
    dot.classList.toggle('active', i === index);
  });
}
function carouselAutoSlide() {
  carouselIndex = (carouselIndex + 1) % carouselDots.length;
  moveToCarouselSlide(carouselIndex);
}
if (carouselDots.length > 0) {
  setInterval(carouselAutoSlide, 4000);
  carouselDots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
      carouselIndex = index;
      moveToCarouselSlide(carouselIndex);
    });
  });
}

/* Main Slider (Slider Block 2) */
const mainSlides = document.querySelectorAll('.slide');
const mainDots = document.querySelectorAll('.nav-dots span');
let currentMainSlide = 0;
function showMainSlide(index) {
  mainSlides.forEach((slide, i) => {
    slide.classList.toggle('active', i === index);
  });
  mainDots.forEach((dot, i) => {
    dot.classList.toggle('active', i === index);
  });
  currentMainSlide = index;
}
function nextMainSlide() {
  let nextIndex = (currentMainSlide + 1) % mainSlides.length;
  showMainSlide(nextIndex);
}
let mainSliderInterval = setInterval(nextMainSlide, 5000);
if (mainDots.length > 0) {
  mainDots.forEach(dot => {
    dot.addEventListener('click', () => {
      clearInterval(mainSliderInterval); // Optionally pause auto-play on manual click
      const index = parseInt(dot.getAttribute('data-index'), 10);
      showMainSlide(index);
      mainSliderInterval = setInterval(nextMainSlide, 5000);
    });
  });
}

/* Dynamic Counter Animation */
const counterEl = document.querySelector('.dynamic-counter .counter');
if (counterEl) {
  const target = +counterEl.getAttribute('data-target');
  let count = 0;
  function updateCounter() {
    const increment = target / 200;
    if (count < target) {
      count += increment;
      counterEl.innerText = Math.floor(count);
      requestAnimationFrame(updateCounter);
    } else {
      counterEl.innerText = target;
    }
  }
  updateCounter();
}

/* Feature Highlights Tabs */
const tabs = document.querySelectorAll('.feature-highlights .tab');
const tabPanels = document.querySelectorAll('.tab-panel');
tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    tabs.forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
    const targetTab = tab.getAttribute('data-tab');
    tabPanels.forEach(panel => {
      panel.classList.toggle('active', panel.id === targetTab);
    });
  });
});

/* FAQ Accordion */
document.querySelectorAll('.faq .faq-question').forEach(question => {
  question.addEventListener('click', () => {
    question.parentElement.classList.toggle('active');
  });
});

/* Pricing Toggle & Update Prices */
const monthlyBtn = document.getElementById('monthlyBtn');
const yearlyBtn = document.getElementById('yearlyBtn');
const pricingCards = document.querySelectorAll('.pricing .card');
function updatePrices(isMonthly) {
  pricingCards.forEach(card => {
    const priceEl = card.querySelector('.price');
    const monthlyPrice = card.getAttribute('data-monthly');
    const yearlyPrice = card.getAttribute('data-yearly');
    if (monthlyPrice === "0") {
      priceEl.innerText = "Contact Us";
    } else {
      priceEl.innerText = isMonthly ? `$${monthlyPrice}/month` : `$${yearlyPrice}/year`;
    }
  });
}
if (monthlyBtn && yearlyBtn) {
  monthlyBtn.addEventListener('click', () => {
    monthlyBtn.classList.add('active');
    yearlyBtn.classList.remove('active');
    updatePrices(true);
  });
  yearlyBtn.addEventListener('click', () => {
    yearlyBtn.classList.add('active');
    monthlyBtn.classList.remove('active');
    updatePrices(false);
  });
  updatePrices(true); // Initialize prices
}

/* Countdown Timer for Special Deal */
const countdownTimer = document.getElementById('countdownTimer');
if (countdownTimer) {
  const countdownDeadline = new Date(Date.now() + 24 * 60 * 60 * 1000);
  function updateCountdown() {
    const now = new Date();
    const diff = countdownDeadline - now;
    if (diff <= 0) {
      countdownTimer.innerText = "00:00:00";
      return;
    }
    const hours = String(Math.floor(diff / (1000 * 60 * 60))).padStart(2, '0');
    const minutes = String(Math.floor((diff / (1000 * 60)) % 60)).padStart(2, '0');
    const seconds = String(Math.floor((diff / 1000) % 60)).padStart(2, '0');
    countdownTimer.innerText = `${hours}:${minutes}:${seconds}`;
    setTimeout(updateCountdown, 1000);
  }
  updateCountdown();
}

/* Real-Time User Count Simulation */
const userCountEl = document.getElementById('userCount');
if (userCountEl) {
  let userCount = 0;
  function updateUserCount() {
    userCount += Math.floor(Math.random() * 5);
    userCountEl.innerText = userCount;
    setTimeout(updateUserCount, 3000);
  }
  updateUserCount();
}

/* Exit Intent Popup */
let exitPopupShown = false;
document.addEventListener('mouseleave', (e) => {
  if (e.clientY <= 0 && !exitPopupShown) {
    const exitIntentModal = document.getElementById('exitIntentModal');
    if (exitIntentModal) {
      exitIntentModal.classList.add('active');
    }
    exitPopupShown = true;
  }
});
const exitIntentClose = document.getElementById('exitIntentClose');
if (exitIntentClose) {
  exitIntentClose.addEventListener('click', () => {
    const exitIntentModal = document.getElementById('exitIntentModal');
    if (exitIntentModal) exitIntentModal.classList.remove('active');
  });
}

/* Referral/Discount Popup (after 10 seconds) */
const referralModal = document.getElementById('referralModal');
if (referralModal) {
  setTimeout(() => {
    referralModal.classList.add('active');
  }, 10000);
  const referralModalClose = document.getElementById('referralModalClose');
  if (referralModalClose) {
    referralModalClose.addEventListener('click', () => {
      referralModal.classList.remove('active');
    });
  }
}

/* Sticky Floating CTA Button (scrolls to Contact Section) */
const stickyCta = document.getElementById('stickyCta');
if (stickyCta) {
  stickyCta.addEventListener('click', () => {
    const contactSection = document.getElementById('contact-section');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  });
}

/* Easter Egg: Click Logo 5 Times to Unlock */
let logoClickCount = 0;
const logo = document.getElementById('logo');
if (logo) {
  logo.addEventListener('click', () => {
    logoClickCount++;
    if (logoClickCount >= 5) {
      const easterEggModal = document.getElementById('easterEggModal');
      if (easterEggModal) {
        easterEggModal.classList.add('active');
        setTimeout(() => {
          easterEggModal.classList.remove('active');
        }, 3000);
      }
      logoClickCount = 0;
    }
  });
}

/* Signup Modal */
function openModal() {
  const signupModal = document.getElementById("signupModal");
  if (signupModal) signupModal.style.display = "block";
}
function closeModal() {
  const signupModal = document.getElementById("signupModal");
  if (signupModal) signupModal.style.display = "none";
}
const signupForm = document.getElementById("signupForm");
if (signupForm) {
  signupForm.addEventListener("submit", function(event) {
    event.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    if (email.includes("@") && password.length >= 6) {
      alert("Signup Successful");
      closeModal();
    } else {
      alert("Invalid input. Ensure email is correct and password is at least 6 characters.");
    }
  });
}

/* Optional: Close modals when clicking outside modal content for referral, exit intent, and easter egg modals */
window.addEventListener('click', (e) => {
  ['referralModal', 'exitIntentModal', 'easterEggModal'].forEach(id => {
    const modal = document.getElementById(id);
    if (modal && e.target === modal) {
      modal.classList.remove('active');
    }
  });
});