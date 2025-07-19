document.addEventListener("DOMContentLoaded", function () {

  // === Smooth Scroll Buttons (GSAP) ===
  const scrollToButtons = [
    { selector: ".scroll-to-services", target: "#services" },
    { selector: ".scroll-to-motion", target: "#motion" },
    { selector: ".scroll-to-mob-service1", target: "#mob-service1" },
    { selector: ".scroll-to-mob-service2", target: "#mob-service2" }
  ];
  scrollToButtons.forEach(({ selector, target }) => {
    document.querySelectorAll(selector).forEach(button => {
      button.addEventListener("click", () => {
        if (typeof gsap !== "undefined") {
          gsap.to(window, {
            scrollTo: { y: target, offsetY: 100 },
            duration: 1,
            ease: "power2.out"
          });
        }
      });
    });
  });


  // === Clone Logos for Infinite Scroll ===
  function cloneTrack(id) {
    const track = document.getElementById(id);
    if (track) {
      const logos = Array.from(track.children);
      logos.forEach(logo => track.appendChild(logo.cloneNode(true)));
    }
  }

  cloneTrack("logoTrack");
  cloneTrack("logoTrack2");

  // === Safe Cookie Consent & Analytics Tracking ===
  try {
    const storedConsent = localStorage.getItem("cookieConsent");
    const consent = storedConsent ? JSON.parse(storedConsent) : null;

    if (consent?.analytics && typeof gtag === "function") {
      const submitButton = document.getElementById("submitButton");
      if (submitButton) {
        submitButton.addEventListener("click", () => {
          gtag("event", "click", {
            event_category: "button",
            event_label: "submit_button"
          });
        });
      }

      const contactForm = document.getElementById("contact-form");
      if (contactForm) {
        contactForm.addEventListener("submit", function (e) {
          e.preventDefault();
          gtag("event", "submit", {
            event_category: "form",
            event_label: "contact_form"
          });
          this.submit(); // Resubmit
        });

        window.addEventListener("scroll", function scrollTrackingHandler() {
          const scrollPercentage =
            ((window.scrollY + window.innerHeight) / document.documentElement.scrollHeight) * 100;
          if (scrollPercentage > 50) {
            gtag("event", "scroll", {
              event_category: "page",
              event_label: "50_percent_scroll"
            });
            window.removeEventListener("scroll", scrollTrackingHandler);
          }
        });
      }
    }
  } catch (err) {
    console.warn("Invalid consent data. Clearing.");
    localStorage.removeItem("cookieConsent");
  }

  // === Word Rotating Animation ===
  const words = [
    "Rigging Setup",
    "Motion Capture Cleanup",
    "Cinematic Animation",
    "Motion Editing",
    "Character Setup",
    "Gameplay Animation",
    "Facial Animation"
  ];
  const wordEl = document.querySelector(".animated-word");
  if (wordEl) {
    let i = 0;
    setInterval(() => {
      wordEl.style.opacity = 0;
      wordEl.style.transform = "translateX(20px)";
      setTimeout(() => {
        i = (i + 1) % words.length;
        wordEl.textContent = words[i];
        wordEl.style.opacity = 1;
        wordEl.style.transform = "translateX(0)";
      }, 300);
    }, 2500);
  }

  // === Swiper Initialization (Safe & Wrapper Function) ===
  function initSwiper(selector, config) {
    const container = document.querySelector(selector);
    if (container && typeof Swiper !== "undefined") {
      return new Swiper(container, config);
    } else {
      console.warn(`Swiper skipped: '${selector}' not found or Swiper not loaded.`);
    }
  }

  initSwiper(".mySwiper", {
    loop: true,
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    effect: "coverflow",
    coverflowEffect: {
      rotate: 10,
      stretch: 0,
      depth: 990,
      modifier: 1,
      slideShadows: true,
    },
    autoplay: {
      delay: 9000,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    }
  });

  initSwiper(".mySwiperFour", {
    loop: true,
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    effect: "coverflow",
    coverflowEffect: {
      rotate: 45,
      stretch: 0,
      depth: 990,
      modifier: 1,
      slideShadows: true,
    },
    autoplay: {
      delay: 9000,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".swiper-button-next-4",
      prevEl: ".swiper-button-prev-4",
    },
    pagination: {
      el: ".swiper-pagination-4",
      clickable: true,
    }
  });

  // === Accordion Expand / Collapse ===
  window.toggleCard = function (el) {
    const all = document.querySelectorAll('.accordion-card');
    const card = el.closest('.accordion-card');

    all.forEach(c => {
      if (c !== card) {
        c.classList.remove('open');
        c.style.height = '200px';
      }
    });

    const isOpen = card.classList.toggle('open');
    if (isOpen) {
      const body = card.querySelector('.accordion-body'),
            title = card.querySelector('.accordion-title'),
            thumbnail = card.querySelector('.thumbnail');
      const fullHeight = thumbnail.offsetHeight + title.offsetHeight + body.scrollHeight + 20;
      card.style.height = fullHeight + 'px';
    } else {
      card.style.height = '200px';
    }
  };

  // === Contact Form + reCAPTCHA + EmailJS ===
  const form = document.getElementById("contact-form");
  if (form && typeof emailjs !== "undefined" && typeof grecaptcha !== "undefined") {
    emailjs.init("w8qNaOHR9Bi8IPEeC");

    form.addEventListener("submit", function (e) {
      e.preventDefault();

      const recaptchaResponse = grecaptcha.getResponse();
      if (!recaptchaResponse) {
        alert("Please complete the reCAPTCHA.");
        return;
      }

      emailjs.sendForm("The_Entity_Studios", "TES_conatct_us_tmlt_01", this)
        .then(() => {
          alert("Message sent successfully!");
          form.reset();
          grecaptcha.reset();
        })
        .catch((error) => {
          console.error("EmailJS error:", error);
          alert("Sending failed. Please try again.");
        });
    });
  }
});
