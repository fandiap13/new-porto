import React, { ReactNode, useCallback, useRef } from "react";

type GlowCardProps = {
  index: number;
  children?: ReactNode;
};

const GlowCard: React.FC<GlowCardProps> = ({ index, children }) => {
  const cardRefs = useRef<Array<HTMLDivElement | null>>([]);

  const handleMouseMove = useCallback(
    (idx: number) => (e: React.MouseEvent<HTMLDivElement>) => {
      const el = cardRefs.current[idx];
      if (!el) return;

      const rect = el.getBoundingClientRect();
      const mouseX = e.clientX - rect.left - rect.width / 2;
      const mouseY = e.clientY - rect.top - rect.height / 2;

      // derajat dari pusat elemen ke posisi mouse
      let angle = (Math.atan2(mouseY, mouseX) * 180) / Math.PI;
      angle = (angle + 360) % 360;

      //   console.log({ angle });
      //   console.log(el.style);

      // set variabel CSS --start (pakai satuan derajat)

      //   console.log(`${angle + 60}deg`);
      el.style.setProperty("--start", `${angle + 60}`);
    },
    []
  );

  return (
    <div
      ref={(el) => {
        cardRefs.current[index] = el;
      }}
      onMouseMove={handleMouseMove(index)}
      className="card card-border rounded-xl p-10 mb-5 break-inside-avoid-column"
    >
      <div className="glow" />
      {children}
    </div>
  );
};

export default GlowCard;
