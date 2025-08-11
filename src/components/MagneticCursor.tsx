import { useState, useEffect, useRef } from "react";
import gsap from "gsap";

export default function MagneticCursor() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const cursorRef = useRef<HTMLDivElement>(null);
  const cursorDotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
    };

    const handleMouseLeave = () => setIsVisible(false);

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  useEffect(() => {
    if (cursorRef.current && cursorDotRef.current) {
      gsap.to(cursorRef.current, {
        x: mousePos.x - 20,
        y: mousePos.y - 20,
        duration: 0.3,
        ease: "power2.out",
      });

      gsap.to(cursorDotRef.current, {
        x: mousePos.x - 4,
        y: mousePos.y - 4,
        duration: 0.1,
        ease: "power2.out",
      });
    }
  }, [mousePos]);

  return (
    <>
      <div
        ref={cursorRef}
        className="fixed pointer-events-none z-[9999] w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 opacity-80 mix-blend-difference hidden md:block"
        style={{ opacity: isVisible ? 1 : 0 }}
      />
      <div
        ref={cursorDotRef}
        className="fixed pointer-events-none z-[9999] w-2 h-2 rounded-full bg-white hidden md:block"
        style={{ opacity: isVisible ? 1 : 0 }}
      />
    </>
  );
}
