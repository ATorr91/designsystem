import * as React from 'react';
export interface SectionAgradecimientoProps {
  className?: string;
  style?: React.CSSProperties;
  property1?: "default" | "variant2" | "variant3";
  /** Text content; defaults to "¡Gracias por contactarnos!". */
  text1?: string;
  /** Text content; defaults to "Mandar otro mensaje". */
  text2?: string;
  /** Text content; defaults to "Pink Pixel". */
  text3?: string;
  /** Text content; defaults to "Hablemos pronto". */
  text4?: string;
}
export declare const SectionAgradecimiento: React.FC<SectionAgradecimientoProps>;
export default SectionAgradecimiento;
