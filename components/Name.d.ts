import * as React from 'react';
export interface NameProps {
  className?: string;
  style?: React.CSSProperties;
  /** Text content; defaults to "Polnac Team". */
  text1?: string;
}
export declare const Name: React.FC<NameProps>;
export default Name;
