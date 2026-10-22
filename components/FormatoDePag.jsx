// figma node: 2408:162 Formato de pag
export function FormatoDePag(_p = {}) {
  const props = _p;
  return (
    <div className={props.className} style={{
      width: 1231,
      height: 54,
      opacity: 0.8,
      position: "relative",
      color: "rgb(255,255,255)",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 1231,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "nowrap",
      }}>
        <div style={{
          position: "relative",
          borderRadius: 25,
          boxShadow: "inset 0 0 0 1px rgb(255,255,255)",
          display: "flex",
          flexDirection: "row",
          gap: 10,
          padding: "5px 13px 5px 13px",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
        }}>
          <span style={{
            position: "relative",
            fontFamily: "\"Red Hat Display\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 600,
            fontSize: 20,
            whiteSpace: "nowrap",
            lineHeight: 1,
            color: "rgb(255,255,255)",
            flexShrink: 0,
          }}>{props.text1 ?? "00.Brandbook Social media"}</span>
        </div>
        <div style={{
          position: "relative",
          width: 214,
          height: 45,
          opacity: 0.8,
          overflow: "hidden",
          flexShrink: 0,
        }}>
          <span style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: 214,
            height: 45,
            fontFamily: "\"Red Hat Display\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 600,
            fontSize: 20,
            whiteSpace: "nowrap",
            lineHeight: 1,
            color: "rgb(255,255,255)",
          }}>{props.text2 ?? "SOCIAL MEDIA BRAND GUIDELINES"}</span>
        </div>
      </div>
      <svg width={1228.022} height={1} viewBox="0 -0.500 1228.022 1" fill="none" style={{
        position: "absolute",
        left: 2.978,
        top: 54,
        width: 1228.022,
        height: 1,
      }}>
        <path d={"M 0 0 L 1228.022 0 L 1228.022 -1 L 0 -1 L 0 0 Z"} fill="currentColor" fillRule="nonzero" />
      </svg>
    </div>
  );
}
export default FormatoDePag;
