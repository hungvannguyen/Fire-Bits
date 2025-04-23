// file: animations.js hoặc trong component luôn
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function animateOnScroll(target, options = {}) {
  if (!target) return;

  gsap.from(target, {
    y: 100,
    opacity: 0,
    duration: 1,
    ease: "power2.out",
    scrollTrigger: {
      trigger: target,
      start: "top 80%",
      toggleActions: "play none none none",
      ...options.scrollTrigger, // Cho phép ghi đè nếu cần
    },
    ...options, // Cho phép override y, duration, v.v.
  });
}
