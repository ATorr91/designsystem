import * as React from 'react';
export interface IconProps {
  className?: string;
  style?: React.CSSProperties;
  size?: "md" | "lg" | "sm";
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
}
export declare const Icon: React.FC<IconProps>;
export default Icon;
