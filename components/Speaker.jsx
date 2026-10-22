// figma node: 101:125 Speaker
export function Speaker(_p = {}) {
  const props = _p;
  return (
    <div className={props.className} style={{
      width: 77,
      height: 6,
      position: "relative",
      color: "rgb(38,44,45)",
      ...props.style,
    }}>
      <svg width={77} height={6} viewBox="0 0 77 6" fill="none" style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 77,
        height: 6,
        borderRadius: 100,
      }}>
        <path d={"M 0 3 C 0 1.343 1.343 0 3 0 L 74 0 C 75.657 0 77 1.343 77 3 L 77 3 C 77 4.657 75.657 6 74 6 L 3 6 C 1.343 6 0 4.657 0 3 L 0 3 Z"} fill="currentColor" fillRule="evenodd" />
      </svg>
    </div>
  );
}
export default Speaker;
