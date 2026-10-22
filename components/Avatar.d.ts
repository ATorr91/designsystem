import * as React from 'react';
export interface AvatarProps {
  className?: string;
  style?: React.CSSProperties;
  variant?: "circle" | "rounded" | "square";
  badge?: boolean;
  icon?: boolean;
  image?: boolean;
  /** Text content; defaults to "OP". */
  text1?: string;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon2?: React.ReactNode;
}
export declare const Avatar: React.FC<AvatarProps>;
export default Avatar;
