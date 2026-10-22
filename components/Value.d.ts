import * as React from 'react';
export interface ValueProps {
  className?: string;
  style?: React.CSSProperties;
  property1?: "default" | "hover";
  /** Text content; defaults to "We elevate each other". */
  text1?: string;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
}
export declare const Value: React.FC<ValueProps>;
export default Value;
