/**
 * MUHAMMAD ZAID — OFFICIAL PORTFOLIO JAVASCRIPT
 * Full Stack Developer & Embroidery Digitizer
 */

document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  // --------------------------------------------------------------------------
  // 1. THEME SWITCHER (Dark / Light Mode)
  // --------------------------------------------------------------------------
  const themeToggleBtn = document.getElementById('theme-toggle');
  const themeIcon = themeToggleBtn ? themeToggleBtn.querySelector('i') : null;

  // Check saved preference or system preference
  const savedTheme = localStorage.getItem('mz_theme');
  const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const initialTheme = savedTheme || (systemPrefersDark ? 'dark' : 'dark'); // Default dark

  function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('mz_theme', theme);
    if (themeIcon) {
      if (theme === 'light') {
        themeIcon.classList.remove('fa-sun');
        themeIcon.classList.add('fa-moon');
        themeToggleBtn.setAttribute('aria-label', 'Switch to Dark Mode');
      } else {
        themeIcon.classList.remove('fa-moon');
        themeIcon.classList.add('fa-sun');
        themeToggleBtn.setAttribute('aria-label', 'Switch to Light Mode');
      }
    }
  }

  applyTheme(initialTheme);

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      const currentTheme = document.documentElement.getAttribute('data-theme') || 'dark';
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      applyTheme(newTheme);
    });
  }

  // --------------------------------------------------------------------------
  // 2. NAVBAR SCROLL EFFECT & MOBILE NAVIGATION
  // --------------------------------------------------------------------------
  const navbar = document.querySelector('.navbar');
  const mobileToggle = document.getElementById('mobile-toggle');
  const navMenu = document.getElementById('nav-menu');
  const navLinks = document.querySelectorAll('.nav-link');

  // Navbar glass effect on scroll
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      navbar?.classList.add('scrolled');
    } else {
      navbar?.classList.remove('scrolled');
    }
  }, { passive: true });

  // Mobile menu toggle
  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', () => {
      const isOpen = navMenu.classList.toggle('open');
      mobileToggle.setAttribute('aria-expanded', isOpen);
      const icon = mobileToggle.querySelector('i');
      if (icon) {
        icon.classList.toggle('fa-bars', !isOpen);
        icon.classList.toggle('fa-xmark', isOpen);
      }
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
      if (!navbar.contains(e.target) && navMenu.classList.contains('open')) {
        navMenu.classList.remove('open');
        mobileToggle.setAttribute('aria-expanded', 'false');
        const icon = mobileToggle.querySelector('i');
        if (icon) {
          icon.classList.add('fa-bars');
          icon.classList.remove('fa-xmark');
        }
      }
    });

    // Close menu when clicking any nav link
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('open');
        mobileToggle.setAttribute('aria-expanded', 'false');
        const icon = mobileToggle.querySelector('i');
        if (icon) {
          icon.classList.add('fa-bars');
          icon.classList.remove('fa-xmark');
        }
      });
    });
  }

  // --------------------------------------------------------------------------
  // 3. ACTIVE NAV LINK SCROLL-SPY
  // --------------------------------------------------------------------------
  const sections = document.querySelectorAll('section[id]');

  function updateActiveNavLink() {
    const scrollY = window.pageYOffset;
    sections.forEach(current => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 120;
      const sectionId = current.getAttribute('id');
      const correspondingLink = document.querySelector(`.nav-link[href*="${sectionId}"]`);

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        correspondingLink?.classList.add('active');
      } else {
        correspondingLink?.classList.remove('active');
      }
    });
  }

  window.addEventListener('scroll', updateActiveNavLink, { passive: true });

  // --------------------------------------------------------------------------
  // 4. EMBROIDERY GALLERY FILTERING
  // --------------------------------------------------------------------------
  const filterBtns = document.querySelectorAll('.filter-btn');
  const galleryItems = document.querySelectorAll('.gallery-item');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      // Update active button state
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterValue = btn.getAttribute('data-filter');

      galleryItems.forEach(item => {
        const itemCategory = item.getAttribute('data-category');
        if (filterValue === 'all' || itemCategory === filterValue) {
          item.style.display = 'flex';
          setTimeout(() => {
            item.style.opacity = '1';
            item.style.transform = 'scale(1)';
          }, 50);
        } else {
          item.style.opacity = '0';
          item.style.transform = 'scale(0.92)';
          setTimeout(() => {
            item.style.display = 'none';
          }, 250);
        }
      });
    });
  });

  // --------------------------------------------------------------------------
  // 5. LIGHTBOX MODAL (Embroidery Samples & Project Zoom)
  // --------------------------------------------------------------------------
  const lightboxModal = document.getElementById('lightbox-modal');
  const lightboxImg = document.getElementById('lightbox-img');
  const lightboxTitle = document.getElementById('lightbox-title');
  const lightboxCaption = document.getElementById('lightbox-caption');
  const lightboxClose = document.getElementById('lightbox-close');

  function openLightbox(src, title, caption) {
    if (!lightboxModal) return;
    lightboxImg.src = src;
    lightboxImg.alt = title;
    lightboxTitle.textContent = title;
    lightboxCaption.textContent = caption || '';
    lightboxModal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox() {
    if (!lightboxModal) return;
    lightboxModal.classList.remove('active');
    document.body.style.overflow = '';
    setTimeout(() => {
      if (lightboxImg) lightboxImg.src = '';
    }, 300);
  }

  // Bind gallery items
  galleryItems.forEach(item => {
    item.addEventListener('click', () => {
      const img = item.querySelector('img');
      const title = item.querySelector('.gallery-title')?.textContent || 'Embroidery Sample';
      const desc = item.querySelector('.gallery-desc')?.textContent || '';
      if (img) {
        openLightbox(img.src, title, desc);
      }
    });
  });

  // Close triggers
  lightboxClose?.addEventListener('click', closeLightbox);
  lightboxModal?.addEventListener('click', (e) => {
    if (e.target === lightboxModal) closeLightbox();
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && lightboxModal?.classList.contains('active')) {
      closeLightbox();
    }
  });

  // --------------------------------------------------------------------------
  // 6. CONTACT FORM VALIDATION & HANDLING
  // --------------------------------------------------------------------------
  const contactForm = document.getElementById('portfolio-contact-form');
  const formStatus = document.getElementById('form-status-alert');

  if (contactForm) {
    const nameInput = document.getElementById('contact-name');
    const emailInput = document.getElementById('contact-email');
    const serviceSelect = document.getElementById('contact-service');
    const subjectInput = document.getElementById('contact-subject');
    const messageInput = document.getElementById('contact-message');
    const honeyField = document.getElementById('contact-website-field'); // Honeypot
    const submitBtn = document.getElementById('contact-submit-btn');

    function showError(input, errorId, message) {
      input.classList.add('error');
      const errEl = document.getElementById(errorId);
      if (errEl) {
        errEl.textContent = message;
        errEl.style.display = 'block';
      }
    }

    function clearError(input, errorId) {
      input.classList.remove('error');
      const errEl = document.getElementById(errorId);
      if (errEl) {
        errEl.textContent = '';
        errEl.style.display = 'none';
      }
    }

    // Input listeners to clear errors as user types
    nameInput?.addEventListener('input', () => clearError(nameInput, 'name-error'));
    emailInput?.addEventListener('input', () => clearError(emailInput, 'email-error'));
    subjectInput?.addEventListener('input', () => clearError(subjectInput, 'subject-error'));
    messageInput?.addEventListener('input', () => clearError(messageInput, 'message-error'));
    serviceSelect?.addEventListener('change', () => clearError(serviceSelect, 'service-error'));

    contactForm.addEventListener('submit', async (e) => {
      e.preventDefault();

      // Check honeypot spam field
      if (honeyField && honeyField.value.trim() !== '') {
        console.warn('Spam detected via honeypot.');
        return;
      }

      let isValid = true;

      // Validate Name
      if (!nameInput.value.trim() || nameInput.value.trim().length < 2) {
        showError(nameInput, 'name-error', 'Please enter your full name (at least 2 characters).');
        isValid = false;
      } else {
        clearError(nameInput, 'name-error');
      }

      // Validate Email
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(emailInput.value.trim())) {
        showError(emailInput, 'email-error', 'Please enter a valid email address.');
        isValid = false;
      } else {
        clearError(emailInput, 'email-error');
      }

      // Validate Service
      if (!serviceSelect.value) {
        showError(serviceSelect, 'service-error', 'Please select a service.');
        isValid = false;
      } else {
        clearError(serviceSelect, 'service-error');
      }

      // Validate Subject
      if (!subjectInput.value.trim() || subjectInput.value.trim().length < 3) {
        showError(subjectInput, 'subject-error', 'Please enter a subject (at least 3 characters).');
        isValid = false;
      } else {
        clearError(subjectInput, 'subject-error');
      }

      // Validate Message
      if (!messageInput.value.trim() || messageInput.value.trim().length < 10) {
        showError(messageInput, 'message-error', 'Please write a message of at least 10 characters.');
        isValid = false;
      } else {
        clearError(messageInput, 'message-error');
      }

      if (!isValid) return;

      // Disable button during processing
      const originalBtnText = submitBtn.innerHTML;
      submitBtn.disabled = true;
      submitBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Sending message...';

      const formData = new FormData(contactForm);

      try {
        // Attempt POST to contact.php (for PHP server environments)
        const response = await fetch('contact.php', {
          method: 'POST',
          body: formData
        });

        const result = await response.json().catch(() => null);

        if (response.ok && result && result.status === 'success') {
          showFormSuccess('Thank you! Your message has been sent successfully. Muhammad Zaid will respond promptly.');
          contactForm.reset();
        } else {
          // If server didn't respond with success (e.g., static hosting / GitHub Pages),
          // offer smooth fallback to WhatsApp or mailto
          showFormSuccess(
            'Message prepared! On static hosting, you can also send this directly via WhatsApp or your email client for an instant response.',
            true,
            nameInput.value,
            subjectInput.value,
            messageInput.value
          );
        }
      } catch (err) {
        // Fallback for static servers
        showFormSuccess(
          'Message received! You can also connect directly via WhatsApp or Email below for immediate assistance.',
          true,
          nameInput.value,
          subjectInput.value,
          messageInput.value
        );
      } finally {
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalBtnText;
      }
    });

    function showFormSuccess(msg, showFallbackLinks = false, name = '', subject = '', message = '') {
      if (!formStatus) return;
      formStatus.className = 'form-status-alert success';
      
      let html = `<p><i class="fa-solid fa-circle-check"></i> ${msg}</p>`;
      if (showFallbackLinks) {
        const encodedText = encodeURIComponent(`Hi Zaid, my name is ${name}. Subject: ${subject}. Message: ${message}`);
        html += `
          <div style="margin-top: 12px; display: flex; gap: 10px; flex-wrap: wrap;">
            <a href="https://wa.me/923292619816?text=${encodedText}" target="_blank" rel="noopener" class="btn btn-sm btn-whatsapp">
              <i class="fa-brands fa-whatsapp"></i> Chat on WhatsApp
            </a>
            <a href="mailto:mzaid3470@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodedText}" class="btn btn-sm btn-outline">
              <i class="fa-solid fa-envelope"></i> Send via Email Client
            </a>
          </div>
        `;
      }
      formStatus.innerHTML = html;
      formStatus.style.display = 'block';
      formStatus.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  }

  // --------------------------------------------------------------------------
  // 7. BACK TO TOP BUTTON
  // --------------------------------------------------------------------------
  const backToTopBtn = document.getElementById('back-to-top');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
      backToTopBtn?.classList.add('visible');
    } else {
      backToTopBtn?.classList.remove('visible');
    }
  }, { passive: true });

  backToTopBtn?.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  // --------------------------------------------------------------------------
  // 8. DYNAMIC COPYRIGHT YEAR
  // --------------------------------------------------------------------------
  const yearElement = document.getElementById('current-year');
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }
});
