import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";

type AnimatedCounterProps = {
     value: number;
     speed?: number;
     color?: string;
};

const CounterValue = styled.div<{ color: string }>`
     font-weight: bold;
     font-size: 2rem;
     color: ${({ color }) => color};
`;

const AnimatedCounter: React.FC<AnimatedCounterProps> = ({ value, speed = 2500, color = "var(--primary)" }) => {
     const counterRef = useRef<HTMLDivElement>(null);
     const frame = useRef<number | null>(null);
     const [mounted, setMounted] = useState(false);

     useEffect(() => {
          setMounted(true);
     }, []);

     useEffect(() => {
          if (!mounted) return;

          const el = counterRef.current;
          if (!el) return;

          let start: number | null = null;

          const animate = (timestamp: number) => {
               if (start === null) start = timestamp;
               const progress = Math.min((timestamp - start) / speed, 1);
               const current = Math.floor(value * progress);
               el.innerText = current.toString();
               if (progress < 1) frame.current = requestAnimationFrame(animate);
          };

          frame.current = requestAnimationFrame(animate);

          return () => {
               if (frame.current) cancelAnimationFrame(frame.current);
          };
     }, [value, speed, mounted]);

     return <CounterValue color={color} ref={counterRef} />;
};

export default AnimatedCounter;
