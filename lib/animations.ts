import type { Variants } from "framer-motion";

export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.06, duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  }),
};

export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.05 },
  },
};

export const scaleOnHover = {
  rest: { scale: 1 },
  hover: {
    scale: 1.02,
    transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] },
  },
};

export const pageCurtain: Variants = {
  initial: { y: "0%" },
  animate: { y: "-100%", transition: { duration: 0.55, ease: [0.76, 0, 0.24, 1] } },
  exit: { y: "0%", transition: { duration: 0.45, ease: [0.76, 0, 0.24, 1] } },
};
