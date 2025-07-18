  document.addEventListener("DOMContentLoaded", function () {
    // --- Sticky Header Scroll Behavior ---
    const header = document.getElementById("header-sticky");
    const logo = header?.querySelector(".logo");
    const scrollThreshold = 100;

    function handleScroll() {
      if (window.scrollY > scrollThreshold) {
        header?.classList.add("scrolled");
        logo?.classList.remove("initial-large");
      } else {
        header?.classList.remove("scrolled");
        logo?.classList.add("initial-large");
      }
    }

  // Existing scroll-to-services button
  document.querySelectorAll('.scroll-to-services').forEach(button => {
    button.addEventListener('click', () => {
      gsap.to(window, {
        scrollTo: {
          y: "#services",
          offsetY: 100
        },
        duration: 1,
        ease: "power2.out"
      });
    });
  });

  // NEW scroll-to-motion button
  document.querySelectorAll('.scroll-to-motion').forEach(button => {
    button.addEventListener('click', () => {
      gsap.to(window, {
        scrollTo: {
          y: "#motion",
          offsetY: 100
        },
        duration: 1,
        ease: "power2.out"
      });
    });
  });

    // NEW scroll-to-mob1 button
  document.querySelectorAll('.scroll-to-mob-service1').forEach(button => {
    button.addEventListener('click', () => {
      gsap.to(window, {
        scrollTo: {
          y: "#mob-service1",
          offsetY: 100
        },
        duration: 1,
        ease: "power2.out"
      });
    });
  });

      // NEW scroll-to-mob2 button
  document.querySelectorAll('.scroll-to-mob-service2').forEach(button => {
    button.addEventListener('click', () => {
      gsap.to(window, {
        scrollTo: {
          y: "#mob-service2",
          offsetY: 100
        },
        duration: 1,
        ease: "power2.out"
      });
    });
  });


    handleScroll(); // Initial check
    window.addEventListener("scroll", handleScroll);

    // --- Mobile Menu Toggle ---
    const hamburger = document.querySelector(".header__hamburger .sidebar__toggle");
    const mobileMenu = document.getElementById("mobile-menu")?.querySelector("ul.d-xl-none");

    if (hamburger && mobileMenu) {
      hamburger.addEventListener("click", function () {
        mobileMenu.classList.toggle("mobile-menu-active");
      });
    }

    // --- Logo Track Carousel Clone for Infinite Scroll ---
    const track1 = document.getElementById("logoTrack");
    const track2 = document.getElementById("logoTrack2");

    if (track1) {
      track1.innerHTML += track1.innerHTML; // Duplicate contents once
      const logos1 = Array.from(track1.children);
      logos1.forEach((logo) => {
        track1.appendChild(logo.cloneNode(true));
      });
    }

    if (track2) {
      track2.innerHTML += track2.innerHTML; // Duplicate contents once
      const logos2 = Array.from(track2.children);
      logos2.forEach((logo) => {
        track2.appendChild(logo.cloneNode(true));
      });
    }

    // --- Google Analytics Event Tracking (only if consent given) ---
    const consent = JSON.parse(localStorage.getItem("cookieConsent"));
    if (consent?.analytics && typeof gtag === "function") {
      // Button Click Tracking
      const submitButton = document.getElementById("submitButton");
      if (submitButton) {
        submitButton.addEventListener("click", function () {
          gtag("event", "click", {
            event_category: "button",
            event_label: "submit_button",
          });
        });
      }

      // Form Submit Tracking
      const contactForm = document.getElementById("contact-form");
      if (contactForm) {
        contactForm.addEventListener("submit", function (e) {
          e.preventDefault();
          gtag("event", "submit", {
            event_category: "form",
            event_label: "contact_form",
          });
          this.submit(); // Proceed with actual submission
        });
      }

      // 50% Page Scroll Tracking (fires only once)
      function scrollTrackingHandler() {
        const scrollPercentage =
          ((window.scrollY + window.innerHeight) / document.documentElement.scrollHeight) * 100;

        if (scrollPercentage > 50) {
          gtag("event", "scroll", {
            event_category: "page",
            event_label: "50_percent_scroll",
          });
          window.removeEventListener("scroll", scrollTrackingHandler);
        }
      }

      window.addEventListener("scroll", scrollTrackingHandler);
    }
  });








  document.addEventListener("DOMContentLoaded", function () {
    const words = ["Rigging Setup", "Motion Capture Cleanup", "Cinematic Animation", "Motion Editing","Character Setup", "Gameplay Animation", "Facial Animation"];
    const wordEl = document.querySelector(".animated-word");
    let i = 0;

    setInterval(() => {
      wordEl.style.opacity = 0;
      wordEl.style.transform = 'translateX(20px)';

      setTimeout(() => {
        i = (i + 1) % words.length;
        wordEl.textContent = words[i];
        wordEl.style.opacity = 1;
        wordEl.style.transform = 'translateX(0)';
      }, 300);
    }, 2500);
  });






  emailjs.init("w8qNaOHR9Bi8IPEeC"); // Replace this with your actual public key
  
  document.getElementById("contact-form").addEventListener("submit", function (e) {
    e.preventDefault();

    // Validate reCAPTCHA
    const recaptchaResponse = grecaptcha.getResponse();
    if (!recaptchaResponse) {
      alert("Please complete the reCAPTCHA.");
      return;
    }

    // Send the form using EmailJS
    emailjs.sendForm("The_Entity_Studios", "TES_conatct_us_tmlt_01", this)
      .then(function () {
        alert("Message sent successfully!");
        document.getElementById("contact-form").reset();
        grecaptcha.reset(); // reset reCAPTCHA after success
      }, function (error) {
        alert("Sending failed. Please try again later.");
        console.error("EmailJS error:", error);
      });
  });




    document.addEventListener("DOMContentLoaded", function () {
    const swiper = new Swiper(".mySwiper", {
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
      },
    });
  });






    document.addEventListener("DOMContentLoaded", function () {
    const swiperFour = new Swiper(".mySwiperFour", {
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
      },
    });
  });





document.addEventListener('DOMContentLoaded', function () {
  function attachShakeEffect(swiperSelector) {
    const swiperContainer = document.querySelector(swiperSelector);
    if (!swiperContainer) return;

    swiperContainer.addEventListener('mouseover', function (event) {
      const targetSlide = event.target.closest('.swiper-slide');
      if (!targetSlide || !targetSlide.classList.contains('swiper-slide-active')) return;

      const prevSlide = targetSlide.previousElementSibling;
      const nextSlide = targetSlide.nextElementSibling;

      if (prevSlide) prevSlide.classList.add('shake-slide');
      if (nextSlide) nextSlide.classList.add('shake-slide');
    });

    swiperContainer.addEventListener('mouseout', function (event) {
      const targetSlide = event.target.closest('.swiper-slide');
      if (!targetSlide || !targetSlide.classList.contains('swiper-slide-active')) return;

      const prevSlide = targetSlide.previousElementSibling;
      const nextSlide = targetSlide.nextElementSibling;

      if (prevSlide) prevSlide.classList.remove('shake-slide');
      if (nextSlide) nextSlide.classList.remove('shake-slide');
    });
  }

  // Apply to both sliders
  attachShakeEffect('.mySwiper');
  attachShakeEffect('.mySwiperFour');
});







  function toggleCard(el) {
    const all = document.querySelectorAll('.accordion-card'),
          card = el.closest('.accordion-card');

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
            thumbnail = card.querySelector('.thumbnail'),
            fullHeight = thumbnail.offsetHeight + title.offsetHeight + body.scrollHeight + 20; 
      card.style.height = fullHeight + 'px';
    } else {
      card.style.height = '200px';
    }
  }
