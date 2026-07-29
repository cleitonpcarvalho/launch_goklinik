export const viewport = {
  once: true,
  amount: 0.2,
};

export const fadeInUp = {
  hidden: {
    opacity: 0,
    y: 32,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
};

export function transitionWithDelay(delay = 0) {
  return {
    delay,
    duration: 0.5,
    ease: [0.22, 1, 0.36, 1] as const,
  };
}
