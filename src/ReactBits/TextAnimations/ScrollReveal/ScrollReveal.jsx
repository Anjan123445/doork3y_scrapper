import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ScrollReveal = ({
  children,
  scrollContainerRef,
  enableBlur = true,
  baseOpacity = 0.1,
  baseRotation = 3,
  blurStrength = 4,
  duration = 1,
  delay = 0,
  yOffset = 40,
}) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const scroller =
      scrollContainerRef && scrollContainerRef.current
        ? scrollContainerRef.current
        : window;

    gsap.fromTo(
      el,
      {
        opacity: baseOpacity,
        y: yOffset,
        rotate: baseRotation,
        filter: enableBlur ? `blur(${blurStrength}px)` : "none",
      },
      {
        opacity: 1,
        y: 0,
        rotate: 0,
        filter: "blur(0px)",
        duration,
        delay,
        ease: "power2.out",
        scrollTrigger: {
          trigger: el,
          scroller,
          start: "top 90%",
          toggleActions: "play none none none",
        },
      },
    );

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [
    scrollContainerRef,
    enableBlur,
    baseOpacity,
    baseRotation,
    blurStrength,
    duration,
    delay,
    yOffset,
  ]);

  return <div ref={containerRef}>{children}</div>;
};

export default ScrollReveal;
