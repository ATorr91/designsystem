// figma node: 101:121 Camera
export function Camera(_p = {}) {
  const props = _p;
  return (
    <div className={props.className} style={{
      width: 16,
      height: 16,
      position: "relative",
      ...props.style,
    }}>
      <svg width={16} height={16} viewBox="0 0 16 16" fill="none" style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 16,
        height: 16,
        color: "rgb(38,44,45)",
      }}>
        <path d={"M 8 16 C 12.418 16 16 12.418 16 8 C 16 3.582 12.418 0 8 0 C 3.582 0 0 3.582 0 8 C 0 12.418 3.582 16 8 16 Z"} fill="currentColor" fillRule="evenodd" />
      </svg>
      <svg width={10} height={10} viewBox="0 0 10 10" fill="none" style={{
        position: "absolute",
        left: 3,
        top: 3,
        width: 10,
        height: 10,
        color: "rgb(18,21,21)",
      }}>
        <path d={"M 5 10 C 7.761 10 10 7.761 10 5 C 10 2.239 7.761 0 5 0 C 2.239 0 0 2.239 0 5 C 0 7.761 2.239 10 5 10 Z"} fill="currentColor" fillRule="evenodd" />
      </svg>
      <svg width={2} height={2} viewBox="0 0 2 2" fill="none" style={{
        position: "absolute",
        left: 7,
        top: 5,
        width: 2,
        height: 2,
        opacity: 0.4,
        color: "rgb(99,111,115)",
      }}>
        <path d={"M 1 2 C 1.552 2 2 1.552 2 1 C 2 0.448 1.552 0 1 0 C 0.448 0 0 0.448 0 1 C 0 1.552 0.448 2 1 2 Z"} fill="currentColor" fillRule="evenodd" />
      </svg>
    </div>
  );
}
export default Camera;
