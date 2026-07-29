"use client";

import { animate, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

type CountUpValueProps = {
  value: string;
};

function splitMetricValue(value: string) {
  const match = value.match(/(\d+)/);

  if (!match || match.index === undefined) {
    return {
      prefix: "",
      target: 0,
      suffix: value,
    };
  }

  const target = Number(match[1]);

  return {
    prefix: value.slice(0, match.index),
    target,
    suffix: value.slice(match.index + match[1].length),
  };
}

export function CountUpValue({ value }: CountUpValueProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, {
    amount: 0.6,
    once: true,
  });
  const { prefix, suffix, target } = splitMetricValue(value);
  const [display, setDisplay] = useState(`${prefix}0${suffix}`);

  useEffect(() => {
    if (!isInView) {
      return;
    }

    const controls = animate(0, target, {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (latest) => setDisplay(`${prefix}${Math.round(latest)}${suffix}`),
    });

    return () => controls.stop();
  }, [isInView, prefix, suffix, target]);

  return <span ref={ref}>{display}</span>;
}
