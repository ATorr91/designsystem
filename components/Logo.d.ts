import * as React from 'react';
export interface LogoProps {
  className?: string;
  style?: React.CSSProperties;
  property1?: "white" | "dark";
}
export declare const Logo: React.FC<LogoProps>;
export default Logo;
