import * as React from 'react';
export interface BadgeProps {
  className?: string;
  style?: React.CSSProperties;
  variant?: "standard" | "dot";
  color?: "default" | "primary" | "secondary" | "error" | "warning" | "info" | "success";
  /** Text content; defaults to "1". */
  text1?: string;
}
export declare const Badge: React.FC<BadgeProps>;
export default Badge;
