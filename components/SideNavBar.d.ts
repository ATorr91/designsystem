import * as React from 'react';
export interface SideNavBarProps {
  className?: string;
  style?: React.CSSProperties;
  /** Text content; defaults to "Settings". */
  text1?: string;
  /** Text content; defaults to "Organization". */
  text2?: string;
  /** Text content; defaults to "My Settings". */
  text3?: string;
  /** Text content; defaults to "Organizational Units". */
  text4?: string;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
}
export declare const SideNavBar: React.FC<SideNavBarProps>;
export default SideNavBar;
