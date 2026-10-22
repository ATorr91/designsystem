import { Scribble2 } from './Scribble2.jsx';

// figma node: 278:6689 Scribble
export function Scribble(_p = {}) {
  const props = _p;
  return (
    <div className={props.className} style={{
      width: 240,
      height: 240,
      position: "relative",
      ...props.style,
    }}>
      <Scribble2 style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 240,
          height: 240,
        }} />
    </div>
  );
}
export default Scribble;
