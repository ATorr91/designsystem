// figma node: 101:14341 Star
export function Star(_p = {}) {
  const props = _p;
  return (
    <div className={props.className} style={{
      width: 24,
      height: 24,
      overflow: "hidden",
      position: "relative",
      color: "rgba(0,0,0,0.54)",
      ...props.style,
    }}>
      <svg width={20} height={19} viewBox="0 0 20 19" fill="none" style={{
        position: "absolute",
        left: 2,
        top: 2,
        width: 20,
        height: 19,
      }}>
        <path d={"M 10 15.27 L 16.18 19 L 14.54 11.97 L 20 7.24 L 12.81 6.63 L 10 0 L 7.19 6.63 L 0 7.24 L 5.46 11.97 L 3.82 19 L 10 15.27 Z"} fill="currentColor" fillRule="nonzero" />
      </svg>
    </div>
  );
}
export default Star;
