// figma node: 101:14757 Name
export function Name(_p = {}) {
  const props = _p;
  return (
    <div className={props.className} style={{
      width: "fit-content",
      backgroundColor: "rgb(200,219,255)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "0px 30px 0px 30px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div className="fig-asset-50bf8335ed36576c" style={{
        position: "relative",
        width: 24,
        borderRadius: 4,
        boxShadow: "inset 0 0 0 1px rgba(0,0,0,0.1)",
        flexShrink: 0,
        alignSelf: "stretch",
      }} />
      <span style={{
        position: "relative",
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 16,
        lineHeight: "100%",
        color: "rgba(63,87,133,0.5)",
        flexShrink: 0,
        whiteSpace: "nowrap",
      }}>{props.text1 ?? "Polnac Team"}</span>
    </div>
  );
}
export default Name;
