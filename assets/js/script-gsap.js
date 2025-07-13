// ✅ Register GSAP Plugins
gsap.registerPlugin(ScrollSmoother, ScrollToPlugin, ScrollTrigger);

// ✅ Scroll Smoother Setup
const smoother = ScrollSmoother.create({
  wrapper: '#smooth-wrapper',
  content: '#smooth-content',
  smooth: 1.5,
  effects: true
});

// ✅ Smooth scroll to "#services" when button is clicked
document.querySelectorAll('.scroll-to-services').forEach(button => {
  button.addEventListener('click', () => {
    gsap.to(window, {
      scrollTo: {
        y: "#services",
        offsetY: 100  // Adjust this if your header height is different
      },
      duration: 1,
      ease: "power2.out"
    });
  });
});

// ✅ Optional: Smooth scroll to "#motion" section
document.querySelectorAll('.scroll-to-motion').forEach(button => {
  button.addEventListener('click', () => {
    gsap.to(window, {
      scrollTo: {
        y: "#motion",
        offsetY: 100
      },
      duration: 1.2,
      ease: "power2.out",
      onComplete: () => ScrollTrigger.refresh()
    });
  });
});

// ✅ Optional: Mobile versions if needed
document.querySelectorAll('.scroll-to-mob-service1').forEach(button => {
  button.addEventListener('click', () => {
    gsap.to(window, {
      scrollTo: {
        y: "#mob-service1",
        offsetY: 80
      },
      duration: 1,
      ease: "power2.out"
    });
  });
});

document.querySelectorAll('.scroll-to-mob-service2').forEach(button => {
  button.addEventListener('click', () => {
    gsap.to(window, {
      scrollTo: {
        y: "#mob-service2",
        offsetY: 80
      },
      duration: 1,
      ease: "power2.out"
    });
  });
});
