import { Badge } from './Badge.jsx';
import { Icon } from './Icon.jsx';

// figma node: 101:14273 Avatar (18 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "variant=" + __venc(p.variant) + '|' + "badge=" + __venc(p.badge) + '|' + "icon=" + __venc(p.icon) + '|' + "image=" + __venc(p.image);

export function Avatar(_p = {}) {
  const props = { ..._p, variant: _p.variant ?? "circle", badge: _p.badge ?? false, icon: _p.icon ?? false, image: _p.image ?? false };
  const __body0 = () => (
    <div className={"fig-asset-2e5f78f44b20ef67 " + (props.className || '')} style={{
      width: 40,
      height: 40,
      borderRadius: 64,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }} />
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: 40,
      height: 40,
      overflow: "hidden",
      borderRadius: 64,
      backgroundColor: "rgb(189,189,189)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 20,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "20px",
        letterSpacing: "0.140px",
        color: "rgb(255,255,255)",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>{props.text1 ?? "OP"}</span>
    </div>
  );
  const __body2 = () => (
    <div className={props.className} style={{
      width: 40,
      height: 40,
      borderRadius: 64,
      backgroundColor: "rgb(189,189,189)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "8px 8px 8px 8px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon1 ?? <Icon size={"md"} />}</div>
    </div>
  );
  const __body3 = () => (
    <div className={"fig-asset-2e5f78f44b20ef67 " + (props.className || '')} style={{
      width: 40,
      height: 40,
      overflow: "hidden",
      borderRadius: 4,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }} />
  );
  const __body4 = () => (
    <div className={"fig-asset-2e5f78f44b20ef67 " + (props.className || '')} style={{
      width: 40,
      height: 40,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }} />
  );
  const __body5 = () => (
    <div className={props.className} style={{
      width: 40,
      height: 40,
      overflow: "hidden",
      borderRadius: 4,
      backgroundColor: "rgb(189,189,189)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 20,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "20px",
        letterSpacing: "0.140px",
        color: "rgb(255,255,255)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text1 ?? "OP"}</span>
    </div>
  );
  const __body6 = () => (
    <div className={props.className} style={{
      width: 40,
      height: 40,
      backgroundColor: "rgb(189,189,189)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 20,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "20px",
        letterSpacing: "0.140px",
        color: "rgb(255,255,255)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text1 ?? "OP"}</span>
    </div>
  );
  const __body7 = () => (
    <div className={props.className} style={{
      width: 40,
      height: 40,
      overflow: "hidden",
      borderRadius: 4,
      backgroundColor: "rgb(189,189,189)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "8px 8px 8px 8px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon1 ?? <Icon size={"md"} />}</div>
    </div>
  );
  const __body8 = () => (
    <div className={props.className} style={{
      width: 40,
      height: 40,
      backgroundColor: "rgb(189,189,189)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "8px 8px 8px 8px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon1 ?? <Icon size={"md"} />}</div>
    </div>
  );
  const __body9 = () => (
    <div className={props.className} style={{
      width: 56,
      height: 56,
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "8px 8px 8px 8px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{ position: "relative", flexGrow: 1, alignSelf: "stretch" }}>
        <div style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: 40,
            height: 40,
          }}>{props.icon1 ?? <Avatar variant={"circle"} badge={false} icon={false} image={true} />}</div>
        <div style={{
          position: "absolute",
          left: 28,
          top: 28,
          width: 12,
          height: 12,
          borderRadius: 64,
          backgroundColor: "rgb(255,255,255)",
        }}>
          <div style={{
              position: "absolute",
              left: 2,
              top: 2.001,
              width: 8,
              height: 8,
            }}>{props.icon2 ?? <Badge variant={"dot"} color={"primary"} />}</div>
        </div>
      </div>
    </div>
  );
  const __body10 = () => (
    <div className={props.className} style={{
      width: 56,
      height: 56,
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "8px 8px 8px 8px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{ position: "relative", flexGrow: 1, alignSelf: "stretch" }}>
        <div style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: 40,
            height: 40,
          }}>{props.icon1 ?? <Avatar variant={"square"} badge={false} icon={false} image={true} />}</div>
        <div style={{
          position: "absolute",
          left: 32,
          top: 32,
          width: 12,
          height: 12,
          borderRadius: 64,
          backgroundColor: "rgb(255,255,255)",
        }}>
          <div style={{
              position: "absolute",
              left: 2,
              top: 2.001,
              width: 8,
              height: 8,
            }}>{props.icon2 ?? <Badge variant={"dot"} color={"primary"} />}</div>
        </div>
      </div>
    </div>
  );
  const __body11 = () => (
    <div className={props.className} style={{
      width: 56,
      height: 56,
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "8px 8px 8px 8px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{ position: "relative", flexGrow: 1, alignSelf: "stretch" }}>
        <div style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: 40,
            height: 40,
          }}>{props.icon1 ?? <Avatar variant={"rounded"} badge={false} icon={false} image={true} />}</div>
        <div style={{
          position: "absolute",
          left: 32,
          top: 32,
          width: 12,
          height: 12,
          borderRadius: 64,
          backgroundColor: "rgb(255,255,255)",
        }}>
          <div style={{
              position: "absolute",
              left: 2,
              top: 2.001,
              width: 8,
              height: 8,
            }}>{props.icon2 ?? <Badge variant={"dot"} color={"primary"} />}</div>
        </div>
      </div>
    </div>
  );
  const __body12 = () => (
    <div className={props.className} style={{
      width: 56,
      height: 56,
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "8px 8px 8px 8px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{ position: "relative", flexGrow: 1, alignSelf: "stretch" }}>
        <div style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: 40,
            height: 40,
          }}>{props.icon1 ?? <Avatar variant={"circle"} badge={false} icon={false} image={false} />}</div>
        <div style={{
          position: "absolute",
          left: 28,
          top: 28,
          width: 12,
          height: 12,
          borderRadius: 64,
          backgroundColor: "rgb(255,255,255)",
        }}>
          <div style={{
              position: "absolute",
              left: 2,
              top: 2.001,
              width: 8,
              height: 8,
            }}>{props.icon2 ?? <Badge variant={"dot"} color={"primary"} />}</div>
        </div>
      </div>
    </div>
  );
  const __body13 = () => (
    <div className={props.className} style={{
      width: 56,
      height: 56,
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "8px 8px 8px 8px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{ position: "relative", flexGrow: 1, alignSelf: "stretch" }}>
        <div style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: 40,
            height: 40,
          }}>{props.icon1 ?? <Avatar variant={"square"} badge={false} icon={false} image={false} />}</div>
        <div style={{
          position: "absolute",
          left: 32,
          top: 32,
          width: 12,
          height: 12,
          borderRadius: 64,
          backgroundColor: "rgb(255,255,255)",
        }}>
          <div style={{
              position: "absolute",
              left: 2,
              top: 2.001,
              width: 8,
              height: 8,
            }}>{props.icon2 ?? <Badge variant={"dot"} color={"primary"} />}</div>
        </div>
      </div>
    </div>
  );
  const __body14 = () => (
    <div className={props.className} style={{
      width: 56,
      height: 56,
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "8px 8px 8px 8px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{ position: "relative", flexGrow: 1, alignSelf: "stretch" }}>
        <div style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: 40,
            height: 40,
          }}>{props.icon1 ?? <Avatar variant={"rounded"} badge={false} icon={false} image={false} />}</div>
        <div style={{
          position: "absolute",
          left: 32,
          top: 32,
          width: 12,
          height: 12,
          borderRadius: 64,
          backgroundColor: "rgb(255,255,255)",
        }}>
          <div style={{
              position: "absolute",
              left: 2,
              top: 2.001,
              width: 8,
              height: 8,
            }}>{props.icon2 ?? <Badge variant={"dot"} color={"primary"} />}</div>
        </div>
      </div>
    </div>
  );
  const __body15 = () => (
    <div className={props.className} style={{
      width: 56,
      height: 56,
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "8px 8px 8px 8px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{ position: "relative", flexGrow: 1, alignSelf: "stretch" }}>
        <div style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: 40,
            height: 40,
          }}>{props.icon1 ?? <Avatar variant={"circle"} badge={false} icon={true} image={false} />}</div>
        <div style={{
          position: "absolute",
          left: 28,
          top: 28,
          width: 12,
          height: 12,
          borderRadius: 64,
          backgroundColor: "rgb(255,255,255)",
        }}>
          <div style={{
              position: "absolute",
              left: 2,
              top: 2.001,
              width: 8,
              height: 8,
            }}>{props.icon2 ?? <Badge variant={"dot"} color={"primary"} />}</div>
        </div>
      </div>
    </div>
  );
  const __body16 = () => (
    <div className={props.className} style={{
      width: 56,
      height: 56,
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "8px 8px 8px 8px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{ position: "relative", flexGrow: 1, alignSelf: "stretch" }}>
        <div style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: 40,
            height: 40,
          }}>{props.icon1 ?? <Avatar variant={"square"} badge={false} icon={true} image={false} />}</div>
        <div style={{
          position: "absolute",
          left: 32,
          top: 32,
          width: 12,
          height: 12,
          borderRadius: 64,
          backgroundColor: "rgb(255,255,255)",
        }}>
          <div style={{
              position: "absolute",
              left: 2,
              top: 2.001,
              width: 8,
              height: 8,
            }}>{props.icon2 ?? <Badge variant={"dot"} color={"primary"} />}</div>
        </div>
      </div>
    </div>
  );
  const __body17 = () => (
    <div className={props.className} style={{
      width: 56,
      height: 56,
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "8px 8px 8px 8px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{ position: "relative", flexGrow: 1, alignSelf: "stretch" }}>
        <div style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: 40,
            height: 40,
          }}>{props.icon1 ?? <Avatar variant={"rounded"} badge={false} icon={true} image={false} />}</div>
        <div style={{
          position: "absolute",
          left: 32,
          top: 32,
          width: 12,
          height: 12,
          borderRadius: 64,
          backgroundColor: "rgb(255,255,255)",
        }}>
          <div style={{
              position: "absolute",
              left: 2,
              top: 2.001,
              width: 8,
              height: 8,
            }}>{props.icon2 ?? <Badge variant={"dot"} color={"primary"} />}</div>
        </div>
      </div>
    </div>
  );
  const __impls = {
    // figma: Variant=Circle, Badge=False, Icon=False, Image=True
    "variant=circle|badge=false|icon=false|image=true": __body0,
    // figma: Variant=Circle, Badge=False, Icon=False, Image=False
    "variant=circle|badge=false|icon=false|image=false": __body1,
    // figma: Variant=Circle, Badge=False, Icon=True, Image=False
    "variant=circle|badge=false|icon=true|image=false": __body2,
    // figma: Variant=Rounded, Badge=False, Icon=False, Image=True
    "variant=rounded|badge=false|icon=false|image=true": __body3,
    // figma: Variant=Square, Badge=False, Icon=False, Image=True
    "variant=square|badge=false|icon=false|image=true": __body4,
    // figma: Variant=Rounded, Badge=False, Icon=False, Image=False
    "variant=rounded|badge=false|icon=false|image=false": __body5,
    // figma: Variant=Square, Badge=False, Icon=False, Image=False
    "variant=square|badge=false|icon=false|image=false": __body6,
    // figma: Variant=Rounded, Badge=False, Icon=True, Image=False
    "variant=rounded|badge=false|icon=true|image=false": __body7,
    // figma: Variant=Square, Badge=False, Icon=True, Image=False
    "variant=square|badge=false|icon=true|image=false": __body8,
    // figma: Variant=Circle, Badge=True, Icon=False, Image=True
    "variant=circle|badge=true|icon=false|image=true": __body9,
    // figma: Variant=Square, Badge=True, Icon=False, Image=True
    "variant=square|badge=true|icon=false|image=true": __body10,
    // figma: Variant=Rounded, Badge=True, Icon=False, Image=True
    "variant=rounded|badge=true|icon=false|image=true": __body11,
    // figma: Variant=Circle, Badge=True, Icon=False, Image=False
    "variant=circle|badge=true|icon=false|image=false": __body12,
    // figma: Variant=Square, Badge=True, Icon=False, Image=False
    "variant=square|badge=true|icon=false|image=false": __body13,
    // figma: Variant=Rounded, Badge=True, Icon=False, Image=False
    "variant=rounded|badge=true|icon=false|image=false": __body14,
    // figma: Variant=Circle, Badge=True, Icon=True, Image=False
    "variant=circle|badge=true|icon=true|image=false": __body15,
    // figma: Variant=Square, Badge=True, Icon=True, Image=False
    "variant=square|badge=true|icon=true|image=false": __body16,
    // figma: Variant=Rounded, Badge=True, Icon=True, Image=False
    "variant=rounded|badge=true|icon=true|image=false": __body17,
  };
  return (__impls[__vkey(props)] ?? __body1)();
}
export default Avatar;
