import * as React from 'react';
export interface GifProps {
  className?: string;
  style?: React.CSSProperties;
  property1?: "default" | "variant4" | "variant5" | "variant6" | "variant7";
  /** Text content; defaults to "Blue Pixel". */
  text1?: string;
  /** Text content; defaults to "Green Pixel". */
  text2?: string;
  /** Text content; defaults to "Gracias!!". */
  text3?: string;
  /** Text content; defaults to "White Pixel". */
  text4?: string;
}
export declare const Gif: React.FC<GifProps>;
export default Gif;
