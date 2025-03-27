"use client";

import { cn } from "@/lib/utils";
import {
  animate,
  motion,
  useAnimation,
  useMotionValue,
  useTransform,
} from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

const CounterAnim = ({
  from = 0,
  to = 100,
  duration = 2,
  className,
}: {
  from?: number;
  to: number;
  duration?: number;
  className?: string;
}) => {
  const controls = useAnimation();
  const { ref, inView } = useInView({ triggerOnce: true });

  const count = useMotionValue(from);
  const rounded = useTransform(count, (latest) => Math.round(latest));

  useEffect(() => {
    if (inView) {
      controls.start({
        opacity: 1,
        y: 0,
        transition: { duration: 0.5 },
      });

      animate(count, to, { duration });
    }
  }, [inView, controls, count, to, duration]);

  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 50 }} animate={controls}>
      <motion.span className={cn(className)}>{rounded}</motion.span>
    </motion.div>
  );
};

export default CounterAnim;
