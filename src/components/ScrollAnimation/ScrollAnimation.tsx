import React, { useEffect, useRef } from "react";

import { motion, useInView, useAnimation } from "framer-motion";

interface Props {
  children: JSX.Element;
  width?: "fit-content" | "100%";
}

export const ScrollAnimation = ({ children, width = "fit-content" }: Props) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const mainControls = useAnimation();
  const slideAnimations = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
      slideAnimations.start("visible");
    }
  }, [isInView]);
  return (
    <div ref={ref} style={{ position: "relative", width, overflow: "hidden" }}>
      <motion.div
        variants={{
          hidden: { opacity: 0, y:75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        transition={{duration:1, delay:0.25}}
        animate={mainControls}
      >
        {children}
      </motion.div>
    </div>
  );
};
