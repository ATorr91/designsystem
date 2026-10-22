import { ValueFaster } from './ValueFaster.jsx';

// figma node: 1615:151 Value (2 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "property1=" + __venc(p.property1);

export function Value(_p = {}) {
  const props = { ..._p, property1: _p.property1 ?? "default" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 286,
      height: 286,
      overflow: "hidden",
      borderRadius: 20,
      boxShadow: "inset 0 0 0 0.500px rgb(33,37,41), 0 0 0 0.500px rgb(33,37,41)",
      display: "flex",
      flexDirection: "column",
      gap: 64,
      padding: "32px 32px 32px 32px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 44,
          height: 44,
          flexShrink: 0,
        }}>{props.icon1 ?? <ValueFaster style={{ transform: "scale(0.440, 0.440)", transformOrigin: "0 0" }} />}</div>
      <span style={{
        position: "relative",
        fontFamily: "\"Red Hat Display\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 24,
        lineHeight: "100%",
        color: "rgb(33,37,41)",
        flexShrink: 0,
        alignSelf: "stretch",
        whiteSpace: "nowrap",
      }}>{props.text1 ?? "We elevate each other"}</span>
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: 286,
      height: 286,
      overflow: "hidden",
      borderRadius: 20,
      background: "radial-gradient(147.187px 315.400px at 100.00% 73.88%, rgba(72,101,232,0.3) 0.00%, rgba(72,101,232,0) 100.00%), radial-gradient(123.855px 265.403px at 0.00% -0.00%, rgba(45,201,216,0.3) 0.00%, rgba(45,201,216,0) 100.00%), linear-gradient(rgb(30,28,103),rgb(30,28,103))",
      display: "flex",
      flexDirection: "column",
      gap: 64,
      padding: "32px 32px 32px 32px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 44,
          height: 44,
          flexShrink: 0,
        }}>{props.icon1 ?? <ValueFaster style={{ transform: "scale(0.440, 0.440)", transformOrigin: "0 0" }} />}</div>
      <span style={{
        position: "relative",
        fontFamily: "\"Red Hat Display\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 24,
        lineHeight: "100%",
        color: "rgb(255,255,255)",
        flexShrink: 0,
        alignSelf: "stretch",
        whiteSpace: "nowrap",
      }}>{props.text1 ?? "We elevate each other"}</span>
    </div>
  );
  const __impls = {
    // figma: Property 1=Default
    "property1=default": __body0,
    // figma: Property 1=Hover
    "property1=hover": __body1,
  };
  return (__impls[__vkey(props)] ?? __body0)();
}
export default Value;
