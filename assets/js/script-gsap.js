gsap.registerPlugin(ScrollSmoother, ScrollToPlugin, ScrollTrigger);

let smoother = ScrollSmoother.create({
  wrapper: '#smooth-wrapper',
  content: '#smooth-content',
  smooth: 1.5,
  effects: true
});


gsap.to(window, {
  scrollTo: {
    y: targetEl,
    offsetY: 100 // your header height
  },
  duration: 1.2,
  ease: "power2.out",
  onComplete: () => ScrollTrigger.refresh()
});


(function ($) {
    'use strict';

    

    

})(jQuery);

document.querySelectorAll('.scroll-to-services').forEach(button => {
  button.addEventListener('click', () => {
    gsap.to(window, {
      scrollTo: {
        y: "#services",
        offsetY: 100 // Adjust based on your fixed header height
      },
      duration: 1
    });
  });
});
