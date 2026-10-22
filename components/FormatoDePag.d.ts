import * as React from 'react';
export interface FormatoDePagProps {
  className?: string;
  style?: React.CSSProperties;
  /** Text content; defaults to "00.Brandbook Social media". */
  text1?: string;
  /** Text content; defaults to "SOCIAL MEDIA BRAND GUIDELINES". */
  text2?: string;
}
export declare const FormatoDePag: React.FC<FormatoDePagProps>;
export default FormatoDePag;
