import * as React from 'react';
export interface ConfettiProps {
  className?: string;
  style?: React.CSSProperties;
  skinTone?: "light" | "medium" | "dark";
}
export declare const Confetti: React.FC<ConfettiProps>;
export default Confetti;
