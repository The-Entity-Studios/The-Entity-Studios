(function($) {
    "use strict";
  
    const $documentOn = $(document);
    const $windowOn = $(window);
  
    $documentOn.ready( function() {
  
      //>> Mobile Menu Js Start <<//
      $('#mobile-menu').meanmenu({
        meanMenuContainer: '.mobile-menu',
        meanScreenWidth: "1199",
        meanExpand: ['<i class="far fa-plus"></i>'],
    });
  
    $('#mobile-menus').meanmenu({
        meanMenuContainer: '.mobile-menus',
        meanScreenWidth: "1920",
        meanExpand: ['<i class="far fa-plus"></i>'],
      });
      
      //>> Sidebar Toggle Js Start <<//
      $(".offcanvas__close,.offcanvas__overlay").on("click", function () {
        $(".offcanvas__info").removeClass("info-open");
        $(".offcanvas__overlay").removeClass("overlay-open");
      });
      $(".sidebar__toggle").on("click", function () {
        $(".offcanvas__info").addClass("info-open");
        $(".offcanvas__overlay").addClass("overlay-open");
      });
  
      //>> Body Overlay Js Start <<//
      $(".body-overlay").on("click", function () {
        $(".offcanvas__area").removeClass("offcanvas-opened");
        $(".df-search-area").removeClass("opened");
        $(".body-overlay").removeClass("opened");
      });
  
      //>> Sticky Header Js Start <<//
  
      $windowOn.on("scroll", function () {
        if ($(this).scrollTop() > 250) {
          $("#header-sticky").addClass("sticky");
        } else {
          $("#header-sticky").removeClass("sticky");
        }
      });      
      
      //>> Video Popup Start <<//
      $(".img-popup").magnificPopup({
        type: "image",
        gallery: {
          enabled: true,
        },
      });

      $(".img-popup2").magnificPopup({
        type: "image",
        gallery: {
          enabled: true,
        },
      });
  
      $(".video-popup").magnificPopup({
        type: "iframe",
        callbacks: {},
      });
  
      //>> Counterup Start <<//
      $(".gt-count").counterUp({
        delay: 15,
        time: 4000,
      });
  
      //>> Wow Animation Start <<//
      new WOW().init();
  
      //>> Nice Select Start <<//
        if ($('.single-select').length) {
          $('.single-select').niceSelect();
      }



      //>> Gt Brand Slider Start <<//
      if($('.gt-brand-slider').length > 0) {
        const gtBrandSlider = new Swiper(".gt-brand-slider", {
            spaceBetween: 30,
            speed: 1300,
            loop: true,
            // centeredSlides: true,
            autoplay: {
                delay: 2000,
                disableOnInteraction: false,
            },
          
            breakpoints: {
                1199: {
                    slidesPerView: 6,
                },
                991: {
                    slidesPerView: 4,
                },
                767: {
                    slidesPerView: 3,
                },
                575: {
                    slidesPerView: 3,
                },
                0: {
                    slidesPerView: 2,
                },
            },
        });
      }

      //>> Gt  Brand Slider Start <<//
      if($('.gt-brand-slider-4').length > 0) {
        const gtBrandSlider4 = new Swiper(".gt-brand-slider-4", {
            spaceBetween: 30,
            speed: 1300,
            loop: true,
            // centeredSlides: true,
            autoplay: {
                delay: 2000,
                disableOnInteraction: false,
            },
           
            breakpoints: {
              1600: {
                slidesPerView: 12,
               },
               1399: {
                slidesPerView: 10,
               },
                1199: {
                    slidesPerView: 9,
                },
                991: {
                    slidesPerView: 7,
                },
                767: {
                    slidesPerView: 5,
                },
                575: {
                    slidesPerView: 4,
                },
                0: {
                    slidesPerView: 3,
                },
            },
        });
      }

     //>> Team Slider Start <<//
     if($('.gt-team-slider').length > 0) {
      const gtTeamSlider = new Swiper(".gt-team-slider", {
          spaceBetween: 30,
          speed: 1300,
          loop: true,
          autoplay: {
              delay: 2000,
              disableOnInteraction: false,
          },
          navigation: {
            nextEl: ".array-prev",
            prevEl: ".array-next",
         },
          breakpoints: {
              1399: {
                slidesPerView: 3,
             },
              1199: {
                  slidesPerView: 3,
              },
              991: {
                  slidesPerView: 2,
              },
              767: {
                  slidesPerView: 2,
              },
              575: {
                  slidesPerView: 1,
              },
              0: {
                  slidesPerView: 1,
              },
          },
      });
     }


//>> Service Slider Start <<//
if ($('.gt-service-slider').length > 0) {
  const gtServiceSlider = new Swiper(".gt-service-slider", {
    spaceBetween: 30,
    speed: 4300,
    loop: true,
    autoplay: {
      delay: 16000,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".array-prev",
      prevEl: ".array-next",
    },
    breakpoints: {
      1399: {
        slidesPerView: 1,
      },
      1199: {
        slidesPerView: 1,
      },
      991: {
        slidesPerView: 1,
      },
      767: {
        slidesPerView: 1,
      },
      575: {
        slidesPerView: 1,
      },
      0: {
        slidesPerView: 1,
      },
    },
  });
}


     //>> Gt Popular Slider Start <<//
     if($('.gt-popular-slider').length > 0) {
      const gtPopularSlider = new Swiper(".gt-popular-slider", {
          spaceBetween: 30,
          speed: 1300,
          loop: true,
          centeredSlides: true,
          autoplay: {
              delay: 2000,
              disableOnInteraction: false,
          },
         
          breakpoints: {
              1199: {
                  slidesPerView: 3,
              },
              991: {
                  slidesPerView: 2,
              },
              767: {
                  slidesPerView: 1,
              },
              575: {
                  slidesPerView: 1,
              },
              0: {
                  slidesPerView: 1,
              },
          },
      });
      }

    //>> Gt-termsandconditions-slider Slider Start <<//
    if ($('.gt-termsandconditions-slider').length > 0) {
      const gttermsandconditionsSliders = new Swiper('.gt-termsandconditions-slider', {
        spaceBetween: 30,
        speed: 2000,
        loop: true,
        effect: 'cards',
        cardsEffect: {
          perSlideOffset: 8,
          perSlideRotate: 2,
          slideShadows: false,
        },
        grabCursor: true,
        autoplay: {
          delay: 1000,
          disableOnInteraction: false,
        },
        pagination: {
          el: '.dot',
          clickable: true,
        },
      });
    }

     //>> Marque Text Slider Start <<//
      if($('.marquee-text-slider').length > 0) {
        const marqueeTextSlider = new Swiper(".marquee-text-slider", {
            slidesPerView: 'auto',
            spaceBetween: 40,
            freemode: true,
            centeredSlides: true,
            loop: true,
            speed: 6000,
            allowTouchMove: false,
            autoplay: {
                delay: 1,
                disableOnInteraction: true,
            },
        });
    }

    //>> Marque Text Slider-2 Start <<//
    if($('.marquee-text-slider-2').length > 0) {
        const marqueeTextSlider2 = new Swiper(".marquee-text-slider-2", {
            slidesPerView: 'auto',
            spaceBetween: 40,
            freemode: true,
            centeredSlides: true,
            loop: true,
            speed: 6000,
            allowTouchMove: false,
            autoplay: {
                delay: 1,
                disableOnInteraction: true,
            },
        });
    }

    //>> Gt Games Slider Start <<//
    if($('.gt-games-slider').length > 0) {
      const gtGamesSlider = new Swiper(".gt-games-slider", {
          spaceBetween: 30,
          speed: 1300,
          loop: true,
          autoplay: {
              delay: 2000,
              disableOnInteraction: false,
          },
        
          breakpoints: {
              1399: {
                slidesPerView: 4,
            },
              1199: {
                  slidesPerView: 3,
              },
              991: {
                  slidesPerView: 3,
              },
              767: {
                  slidesPerView: 2,
              },
              575: {
                  slidesPerView: 1,
              },
              0: {
                  slidesPerView: 1,
              },
          },
      });
    }

    //>> Gt Testimonail Slider Start <<//
    if($('.gt-termsandconditions-slider-2').length > 0) {
      const gttermsandconditionsSlider2 = new Swiper(".gt-termsandconditions-slider-2", {
          spaceBetween: 30,
          speed: 1300,
          loop: true,
          centeredSlides: true,
          autoplay: {
              delay: 2000,
              disableOnInteraction: false,
          },
        
          breakpoints: {
              1199: {
                  slidesPerView: 3,
              },
              991: {
                  slidesPerView: 2,
              },
              767: {
                  slidesPerView: 1,
              },
              575: {
                  slidesPerView: 1,
              },
              0: {
                  slidesPerView: 1,
              },
          },
      });
    }

    //>> Gt News Slider Start <<//
    if($('.gt-news-slider').length > 0) {
      const gtNewsSlider = new Swiper(".gt-news-slider", {
          spaceBetween: 30,
          speed: 1300,
          loop: true,
          centeredSlides: true,
          autoplay: {
              delay: 2000,
              disableOnInteraction: false,
          },
        
          breakpoints: {
              1399: {
                slidesPerView: 6,
              },
              1199: {
                slidesPerView: 5,
              },
              991: {
                  slidesPerView: 4,
              },
              767: {
                  slidesPerView: 3,
              },
              575: {
                  slidesPerView: 2,
              },
              0: {
                  slidesPerView: 1,
              },
          },
      });
    }

    //>> Gt Instagram Slider Start <<//
    if($('.gt-instagram-slider').length > 0) {
      const gtInstagramSlider = new Swiper(".gt-instagram-slider", {
          spaceBetween: 0,
          speed: 1800,
          loop: true,
          autoplay: {
              delay: 2000,
              disableOnInteraction: false,
          },

          breakpoints: {
              1399: {
                  slidesPerView: 7,
              },
              1199: {
                  slidesPerView: 6,
              },
              991: {
                  slidesPerView: 5,
              },
              767: {
                  slidesPerView: 4,
              },
              575: {
                  slidesPerView: 3,
              },
              475: {
                  slidesPerView: 2,
              },
              0: {
                  slidesPerView: 1,
              },
          },
      });
    }

    //>> Gt Team Slider Start <<//
    if($('.gt-team-slider-3').length > 0) {
      const gtTeamSlider3 = new Swiper(".gt-team-slider-3", {
          spaceBetween: 30,
          speed: 1300,
          loop: true,
          // centeredSlides: true,
          slidesPerView: 3,
          autoplay: {
              delay: 2000,
              disableOnInteraction: false,
          },
          pagination: {
            el: ".dot-number",
            clickable: true,
            renderBullet: function(index, className) {
                const dotContent = document.querySelectorAll(
                    ".dot-number .dot-num"
                );
                return `
            <span class="${className}">
                ${dotContent[index]?.outerHTML || ""}
            </span>
        `;
            },
        },
          breakpoints: {
              1399: {
                slidesPerView: 6,
            },
              1199: {
                  slidesPerView: 5,
              },
              991: {
                  slidesPerView: 3,
              },
              767: {
                  slidesPerView: 2,
              },
              575: {
                  slidesPerView: 2,
              },
              0: {
                  slidesPerView: 1,
              },
          },
      });
    }

    if($('.tz-sub-tilte').length) {
      var agtsub = $(".tz-sub-tilte");

      if(agtsub.length == 0) return; gsap.registerPlugin(SplitText); agtsub.each(function(index, el) {

        el.split = new SplitText(el, {
          type: "lines,words,chars",
          linesClass: "split-line"
        });

        if( $(el).hasClass('tz-sub-anim') ){
          gsap.set(el.split.chars, {
            opacity: 0,
            x: "7",
          });
        }

        el.anim = gsap.to(el.split.chars, {
          scrollTrigger: {
            trigger: el,
            start: "top 90%",
            end: "top 60%",
            markers: false,
            scrub: 1,
          },

          x: "0",
          y: "0",
          opacity: 1,
          duration: .7,
          stagger: 0.2,
        });

      });
    }

    if($('.tz-itm-title').length) {
		var txtheading = $(".tz-itm-title");

    if(txtheading.length == 0) return; gsap.registerPlugin(SplitText); txtheading.each(function(index, el) {

        el.split = new SplitText(el, {
          type: "lines,words,chars",
          linesClass: "split-line"
        });

        if( $(el).hasClass('tz-itm-anim') ){
          gsap.set(el.split.chars, {
            opacity: .3,
            x: "-7",
          });
        }
        el.anim = gsap.to(el.split.chars, {
          scrollTrigger: {
            trigger: el,
            start: "top 92%",
            end: "top 60%",
            markers: false,
            scrub: 1,
          },

          x: "0",
          y: "0",
          opacity: 1,
          duration: .7,
          stagger: 0.2,
        });

      });
    }

    gsap.utils.toArray(' .left_view').forEach((el, index) => {
		let tlcta = gsap.timeline({
			scrollTrigger: {
				trigger: el,
				scrub: 1.5,
				end: "top 30%",
				start: "top 100%",
				toggleActions: "play none none reverse",
				markers: false
			}
		})

		tlcta
		.set(el, {transformOrigin: 'center center'})
		.from(el, { opacity: 1, scale: 1, xPercent: "-100"}, {opacity: 1, xPercent: 0, duration: 1, immediateRender: false})
	  });

    gsap.utils.toArray(' .top_view').forEach((el, index) => {
      let tlcta = gsap.timeline({
        scrollTrigger: {
          trigger: el,
          scrub: 1.5,
          end: "top 40%",
          start: "top 100%",
          toggleActions: "play none none reverse",
          markers: false
        }
      })

      tlcta
      .set(el, {transformOrigin: 'center center'})
      .from(el, { opacity: 1, scale: 1, yPercent: "50"}, {opacity: 1, yPercent: 0, duration: 1, immediateRender: false})
    });

    

   const TopView = document.querySelectorAll('.top_view_2');
    TopView.forEach((box) => {
		ScrollTrigger.create({
			trigger: box,
			toggleActions: 'play reverse play reverse',
			onEnter: () => box.classList.add('in-view'),
			onLeaveBack: () => box.classList.remove('in-view'),
			markers: false,
		});
	});

  
  gsap.utils.toArray(" .item_left_1").forEach((el, index) => {
		let tlcta = gsap.timeline({
			scrollTrigger: {
				trigger: el,
				scrub: 2,
				start: "top 90%",
				end: "top 70%",
				toggleActions: "play none none reverse",
				markers: false,
			},
		});

		tlcta
			.set(el, { transformOrigin: "center center" })
			.from(
				el,
				{ opacity: 1, x: "-=365" },
				{ opacity: 1, x: 0, duration: 1, immediateRender: false }
			);
	    });

        gsap.utils.toArray(" .item_left_2").forEach((el, index) => {
            let tlcta = gsap.timeline({
                scrollTrigger: {
                    trigger: el,
                    scrub: 2,
                    start: "top 90%",
                    end: "top 70%",
                    toggleActions: "play none none reverse",
                    markers: false,
                },
            });

            tlcta
                .set(el, { transformOrigin: "center center" })
                .from(
                    el,
                    { opacity: 1, x: "-=365" },
                    { opacity: 1, x: 0, duration: 1, immediateRender: false }
                );
        });

        gsap.utils.toArray(" .item_right_1").forEach((el, index) => {
            let tlcta = gsap.timeline({
                scrollTrigger: {
                    trigger: el,
                    scrub: 2,
                    start: "top 90%",
                    end: "top 70%",
                    toggleActions: "play none none reverse",
                    markers: false,
                },
            });

            tlcta
                .set(el, { transformOrigin: "center center" })
                .from(
                    el,
                    { opacity: 1, x: "+=365" },
                    { opacity: 1, x: 0, duration: 1, immediateRender: false }
                );
        });

        gsap.utils.toArray(" .item_right_2").forEach((el, index) => {
            let tlcta = gsap.timeline({
                scrollTrigger: {
                    trigger: el,
                    scrub: 2,
                    start: "top 90%",
                    end: "top 70%",
                    toggleActions: "play none none reverse",
                    markers: false,
                },
            });

            tlcta
                .set(el, { transformOrigin: "center center" })
                .from(
                    el,
                    { opacity: 1, x: "+=365" },
                    { opacity: 1, x: 0, duration: 1, immediateRender: false }
                );
        });

        gsap.utils.toArray(".img-zoom").forEach(function (container) {
		let image = container.querySelector("img");
		let tl = gsap.timeline({
			scrollTrigger: {
				trigger: container,
				scrub: true,
				pin: false,
			},
		});
		tl.from(image, {
			scale: 1.5,
			filter: "grayscale(1)",
			ease: "none",
		}).to(image, {
			scale: 1,
			filter: "grayscale(0)",
			ease: "none",
		});
	});

  // choose-5-img
        // var agnChoose5img = gsap.timeline({
        //     scrollTrigger: {
        //         trigger: ".agn-choose-5-img",
        //         start: "top 90%",
        //         toggleActions: "play reverse play reverse",
        //         markers: false,
        //     },
        //     defaults: {
        //         ease: "ease5",
        //         duration: .4,
        //     },
        // })

        // agnChoose5img
        // .from(".agn-choose-5-img", {
        //     transformOrigin: "bottom left",
        //     transform: "rotate(62deg) translate(-152px, 86px)",

        // })
  
     // For each images with class "animate-image" on page
	gsap.utils.toArray(".rotatedscal").forEach((el, index) => {
		let tl3 = gsap.timeline({
			scrollTrigger: {
				trigger: el,
				scrub: 1,
				start: "top 90%",
				end: "buttom 60%",
				toggleActions: "play none none reverse",
				markers: false,
			},
		});

		tl3.set(el, { transformOrigin: "center center" }).from(
			el,
			{ opacity: 1, rotateZ: 45, scale: 0.5, y: "+=100" },
			{
				opacity: 1,
				rotateZ: 0,
				scale: 1,
				y: 0,
				duration: 1,
				immediateRender: false,
			}
		);
	});

  gsap.utils.toArray(".chy-trusted-1-wrap").forEach((el, index) => {
		let tl1 = gsap.timeline({
			scrollTrigger: {
				trigger: el,
				scrub: 1,
				start: "top 80%",
				end: "buttom 60%",
				toggleActions: "play none none reverse",
				markers: false,
			},
		});

		tl1.set(el, { transformOrigin: "center center" }).from(
			el,
			{ background: "#fff", scale: 0.8 },
			{
				background: "inherit",
				scale: 1,
				duration: 1,
				immediateRender: false,
			}
		);
	});

  if(window.innerWidth> 991){
		let proSroll = gsap.timeline();
		let otherSections_2 = document.querySelectorAll('.tz_sticky_item')
		otherSections_2.forEach((section, index) => {
			gsap.set(otherSections_2, {
				scale: 1
			});
			proSroll.to(section, {
				scale: index === otherSections_2.length - 1 ? 1 : 0.9,
				scrollTrigger: {
					trigger: section,
					pin: section,
					scrub: 1,
					start: 'top 0%',
					end: "bottom 60%",
					ease: "none",
					endTrigger: '.tz-project-content',
					pinSpacing: false,
					markers: false,
				},
			})
		});
	};

  if($('#smooth-wrapper').length && $('#smooth-content').length){
		gsap.registerPlugin(ScrollTrigger, ScrollSmoother, TweenMax, ScrollToPlugin);
	
		gsap.config({
			nullTargetWarn: false,
		});
	
		let smoother = ScrollSmoother.create({
			smooth: 2,
			effects: true,
			smoothTouch: 0.1,
			normalizeScroll: false,
			ignoreMobileResize: true,
		});

	}


    //>> GT Game Case Slider Start <<//
    const totalSlides = 5;
    const progressLine = document.getElementById("progressLine");
    const dots = document.querySelectorAll(".dot");
 
    const swiper = new Swiper(".gt-game-case-slider", {
      speed: 1300,
      loop: true,
      direction: "vertical",
      mousewheel: true,
      // autoplay: {
      //   delay: 2000,
      //   disableOnInteraction: false,
      // },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      on: {
        slideChangeTransitionStart: function () {
          // Calculate progress based on the realIndex
          const nextIndex = this.realIndex === 0 ? totalSlides : this.realIndex; // to handle loop
          const widthPercentage = (nextIndex / totalSlides) * 100;
          
          // Update progress bar
          progressLine.style.transition = `width ${this.params.speed}ms linear`;
          progressLine.style.width = `${widthPercentage}%`;
          
          // Update active dot (it will be in sync with the progress bar)
          dots.forEach(dot => dot.classList.remove("active"));
          const activeDotIndex = this.realIndex === 0 ? totalSlides - 1 : this.realIndex - 1;
          dots[activeDotIndex].classList.add("active");
        },
    
        loopFix: function () {
          // Fix for progress bar reset when looping
          if (this.realIndex === 0) {
            progressLine.style.transition = "none";
            progressLine.style.width = "0%";
    
            setTimeout(() => {
              progressLine.style.transition = `width ${swiper.params.speed}ms linear`;
              progressLine.style.width = `${(1 / totalSlides) * 100}%`;
            }, 50);
          }
        },
      },
    });
    

    //>> GT Image Slider Start <<//
    const gtImageSlider = new Swiper(".gt-image-slider", {
        effect: "fade",
        loop: true,
        allowTouchMove: false,
        speed: 600,
      });

    //>> GT Content Slider Start <<//
    const gtContentSlider = new Swiper(".gt-content-slider", {
        direction: 'vertical',
        slidesPerView: 3,
        centeredSlides: true,
        loop: true,
        mousewheel: true,
        pagination: {
          el: '.dot',
          clickable: true
        },
        on: {
          slideChange: function () {
            gtImageSlider.slideTo(this.activeIndex);
          }
        }
      });


     //>> My Slider Start <<//
     if($('.my-Slider').length > 0) {
      const swiperMySlider = new Swiper('.my-Slider', {
        // direction: 'vertical',
        loop: true,
        slidesPerView: 3,
        centeredSlides: true,
        spaceBetween: 10,
        autoplay: {
          delay: 3000,
          disableOnInteraction: false,
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      });
    }

    //>> Gt Shop Slider Start <<//
    if($('.gt-shop-slider').length > 0) {
        const gtShopSlider = new Swiper(".gt-shop-slider", {
            spaceBetween: 30,
            speed: 1300,
            loop: true,
            // centeredSlides: true,
            autoplay: {
                delay: 2000,
                disableOnInteraction: false,
            },
            navigation: {
                nextEl: ".array-prev",
                prevEl: ".array-next",
             },
            breakpoints: {
                1199: {
                    slidesPerView: 4,
                },
                991: {
                    slidesPerView: 3,
                },
                767: {
                    slidesPerView: 2,
                },
                575: {
                    slidesPerView: 1,
                },
                0: {
                    slidesPerView: 1,
                },
            },
        });
      }

    //>> CountDown Start <<//
    let targetDate = new Date("2025-05-8 00:00:00").getTime();
    const countdownInterval = setInterval(function () {
        let currentDate = new Date().getTime();
        let remainingTime = targetDate - currentDate;

        if (remainingTime <= 0) {
            clearInterval(countdownInterval);
            // Display a message or perform any action when the countdown timer reaches zero
            $("#countdown-container").text("Countdown has ended!");
        } else {
            let days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
            let hours = Math.floor(
                (remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
            );
            let minutes = Math.floor(
                (remainingTime % (1000 * 60 * 60)) / (1000 * 60)
            );
            let seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);

            // Pad single-digit values with leading zeros
            $("#day").text(days.toString().padStart(2, "0"));
            $("#hour").text(hours.toString().padStart(2, "0"));
            $("#min").text(minutes.toString().padStart(2, "0"));
            $("#sec").text(seconds.toString().padStart(2, "0"));
        }
    }, 1000);

    //>> Gt-Gallery Slider Start <<//
    if($('.gt-gallery-slider').length > 0) {
        const gtGallerySlider = new Swiper(".gt-gallery-slider", {
            spaceBetween: 30,
            speed: 1800,
            loop: true,
            autoplay: {
                delay: 2000,
                disableOnInteraction: false,
            },

            breakpoints: {
                1399: {
                    slidesPerView: 5,
                },
                1199: {
                    slidesPerView: 5,
                },
                991: {
                    slidesPerView: 4,
                },
                767: {
                    slidesPerView: 3,
                },
                575: {
                    slidesPerView: 2,
                },
                475: {
                    slidesPerView: 1,
                },
                0: {
                    slidesPerView: 1,
                },
            },
        });
    }

   /* ================================
        Quantity Increment/Decrement Js Start
    ================================ */
    const quantityButtons = document.querySelectorAll(".quantityIncrement, .quantityDecrement");
    if (quantityButtons.length) {
        quantityButtons.forEach((button) => {
            button.addEventListener("click", function () {
                const input = button.parentElement.querySelector("input");
                let value = parseInt(input.value, 10) || 0;

                if (button.classList.contains("quantityIncrement")) {
                    input.value = value + 1;
                } else if (button.classList.contains("quantityDecrement") && value > 1) {
                    input.value = value - 1;
                }
            });
        });
    }

    /* ================================
       Payment Method Update Js Start
    ================================ */

    function updatePaymentMethod() {
        let paymentMethod = $("input[name='pay-method']:checked").val();
        $(".payment").html(paymentMethod);
    }

    // Initial load
    updatePaymentMethod();

    // On click of radio option
    $(".checkout-radio-single input[name='pay-method']").on("change", function () {
        updatePaymentMethod();
    });
    
    /* ================================
       Additional Quantity Controls Js Start
    ================================ */

            const inputs = document.querySelectorAll('#qty, #qty2, #qty3');
            const btnminus = document.querySelectorAll('.qtyminus');
            const btnplus = document.querySelectorAll('.qtyplus');

            if (inputs.length > 0 && btnminus.length > 0 && btnplus.length > 0) {
            inputs.forEach(function(input, index) {
                const min = Number(input.getAttribute('min')) || 0;
                const max = Number(input.getAttribute('max')) || 9999;
                const step = Number(input.getAttribute('step')) || 1;

                function qtyminus(e) {
                    e.preventDefault();
                    let current = Number(input.value);
                    let newval = current - step;
                    if (newval < min) newval = min;
                    input.value = newval;
                }

                function qtyplus(e) {
                    e.preventDefault();
                    let current = Number(input.value);
                    let newval = current + step;
                    if (newval > max) newval = max;
                    input.value = newval;
                }

                btnminus[index].addEventListener('click', qtyminus);
                btnplus[index].addEventListener('click', qtyplus);
            });
        }


    


        //>> Gt hero Slider Start <<//
        window.onload = function () {
            let current = 1; // Start with the second slide as active
        
            function updateSlides() {
              const slides = document.querySelectorAll('.slide');
        
              slides.forEach((slide) => {
                slide.classList.remove('active', 'small');
              });
        
              if (slides[current - 1]) slides[current - 1].classList.add('small');
              if (slides[current]) slides[current].classList.add('active');
              if (slides[current + 1]) slides[current + 1].classList.add('small');
            }
        
            function goToNextSlide() {
              const container = document.querySelector('.slider-container');
              if (!container || container.children.length === 0) return;
        
              const first = container.firstElementChild;
              container.appendChild(first.cloneNode(true));
              container.removeChild(first);
        
              current = 1;
              updateSlides();
            }
        
            function goToPrevSlide() {
              const container = document.querySelector('.slider-container');
              if (!container || container.children.length === 0) return;
        
              const last = container.lastElementChild;
              container.insertBefore(last.cloneNode(true), container.firstElementChild);
              container.removeChild(last);
        
              current = 1;
              updateSlides();
            }
        
            // Initial update
            updateSlides();
        
            // Auto slide every 3 seconds
            setInterval(goToNextSlide, 3000);
        
            // Add click events to navigation buttons
            const nextBtn = document.querySelector('.array-next');
            const prevBtn = document.querySelector('.array-prev');
        
            if (nextBtn) nextBtn.addEventListener('click', goToNextSlide);
            if (prevBtn) prevBtn.addEventListener('click', goToPrevSlide);
          };



    //>> MouseCursor Start <<//
    if ($(".mouseCursor").length > 0) {
      function itCursor() {
          var myCursor = jQuery(".mouseCursor");
          if (myCursor.length) {
              if ($("body")) {
                  const e = document.querySelector(".cursor-inner"),
                      t = document.querySelector(".cursor-outer");
                  let n,
                      i = 0,
                      o = !1;
                  (window.onmousemove = function(s) {
                      o ||
                          (t.style.transform =
                              "translate(" + s.clientX + "px, " + s.clientY + "px)"),
                          (e.style.transform =
                              "translate(" + s.clientX + "px, " + s.clientY + "px)"),
                          (n = s.clientY),
                          (i = s.clientX);
                  }),
                  $("body").on(
                          "mouseenter",
                          "button, a, .cursor-pointer",
                          function() {
                              e.classList.add("cursor-hover"),
                                  t.classList.add("cursor-hover");
                          }
                      ),
                      $("body").on(
                          "mouseleave",
                          "button, a, .cursor-pointer",
                          function() {
                              ($(this).is("a", "button") &&
                                  $(this).closest(".cursor-pointer").length) ||
                              (e.classList.remove("cursor-hover"),
                                  t.classList.remove("cursor-hover"));
                          }
                      ),
                      (e.style.visibility = "visible"),
                      (t.style.visibility = "visible");
              }
          }
      }
      itCursor();
  }

     //>> Search Start <<//
     if ($(".search-toggler").length) {
        $(".search-toggler").on("click", function(e) {
            e.preventDefault();
            $(".search-popup").toggleClass("active");
            $("body").toggleClass("locked");
        });
    }

    /* ================================
       Back To Top Button Js Start
    ================================ */

    $windowOn.on('scroll', function() {
        if ($(this).scrollTop() > 20) {
            $("#gt-back-top").addClass("show");
        } else {
            $("#gt-back-top").removeClass("show");
        }
    });
    
    $documentOn.on('click', '#gt-back-top', function() {
        $('html, body').animate({ scrollTop: 0 }, 800);
        return false;
    });
    
    $documentOn.on('click', '#gt-back-top', function() {
        $('html, body').animate({ scrollTop: 0 }, 800);
        return false;
    });
    
    }); // End Document Ready Function

  
    function loader() {
        $windowOn.on('load', function() {
            // Animate loader off screen
            $(".preloader").addClass('loaded');
            $(".preloader").delay(200).fadeOut();
        });
    }
    
    loader();
   
  
  })(jQuery); // End jQuery



  // ===== Infinite Scroll Cloning Script =====
// This script duplicates the logos inside .logo-track to simulate infinite scrolling

document.addEventListener('DOMContentLoaded', () => {
  const track = document.getElementById('logoTrack');
  const logos = track.innerHTML;

  // Duplicate the logos once
  track.innerHTML += logos;
});



