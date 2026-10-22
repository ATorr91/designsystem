/* @ds-bundle: {"format":4,"namespace":"BluePixelDesignSystem_ced77e","components":[{"name":"Avatar","sourcePath":"components/Avatar.jsx"},{"name":"Badge","sourcePath":"components/Badge.jsx"},{"name":"Camera","sourcePath":"components/Camera.jsx"},{"name":"Confetti","sourcePath":"components/Confetti.jsx"},{"name":"DevicesAppleIPadAir4","sourcePath":"components/DevicesAppleIPadAir4.jsx"},{"name":"DevicesAppleIPhone12ProMax","sourcePath":"components/DevicesAppleIPhone12ProMax.jsx"},{"name":"FormatoDePag","sourcePath":"components/FormatoDePag.jsx"},{"name":"Gif","sourcePath":"components/Gif.jsx"},{"name":"Icon","sourcePath":"components/Icon.jsx"},{"name":"KeyboardArrowDownFilled","sourcePath":"components/KeyboardArrowDownFilled.jsx"},{"name":"Logo","sourcePath":"components/Logo.jsx"},{"name":"LogoGridHover","sourcePath":"components/LogoGridHover.jsx"},{"name":"Name","sourcePath":"components/Name.jsx"},{"name":"Scribble","sourcePath":"components/Scribble.jsx"},{"name":"Scribble2","sourcePath":"components/Scribble2.jsx"},{"name":"SectionAgradecimiento","sourcePath":"components/SectionAgradecimiento.jsx"},{"name":"SideNavBar","sourcePath":"components/SideNavBar.jsx"},{"name":"Speaker","sourcePath":"components/Speaker.jsx"},{"name":"Star","sourcePath":"components/Star.jsx"},{"name":"Value","sourcePath":"components/Value.jsx"},{"name":"ValueFaster","sourcePath":"components/ValueFaster.jsx"},{"name":"Wow","sourcePath":"components/Wow.jsx"}],"sourceHashes":{"components/Avatar.jsx":"87b6d21f0234","components/Badge.jsx":"eb0434ea274d","components/Camera.jsx":"a6e083046e50","components/Confetti.jsx":"4a575f4022bc","components/DevicesAppleIPadAir4.jsx":"4c9b6d752670","components/DevicesAppleIPhone12ProMax.jsx":"37b64d22c2e9","components/FormatoDePag.jsx":"a3f7fc4cf856","components/Gif.jsx":"d710a110fdad","components/Icon.jsx":"47f55fb8f5ca","components/KeyboardArrowDownFilled.jsx":"cbf8298a37a4","components/Logo.jsx":"a4b378785e60","components/LogoGridHover.jsx":"f9ffc3700550","components/Name.jsx":"e4607df01017","components/Scribble.jsx":"ca1b87acc555","components/Scribble2.jsx":"f7acbf791edb","components/SectionAgradecimiento.jsx":"4842124b2532","components/SideNavBar.jsx":"e05a3085bbda","components/Speaker.jsx":"68ea59e631b6","components/Star.jsx":"ff8dd6ebe428","components/Value.jsx":"646a83e62b2c","components/ValueFaster.jsx":"95256ecc0d11","components/Wow.jsx":"0897aff4a6b6","components/icons/icon-data.js":"99908406c471","doc-page.js":"371bab66f42d","ui_kits/website/parts.jsx":"b1392875f9cb"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.BluePixelDesignSystem_ced77e = window.BluePixelDesignSystem_ced77e || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/Badge.jsx
try { (() => {
// figma node: 101:14344 Badge (13 variants)
const __venc = v => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = p => "variant=" + __venc(p.variant) + '|' + "color=" + __venc(p.color);
function Badge(_p = {}) {
  const props = {
    ..._p,
    variant: _p.variant ?? "standard",
    color: _p.color ?? "default"
  };
  const __body0 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      height: 20,
      borderRadius: 64,
      display: "flex",
      flexDirection: "row",
      padding: "0px 6.500px 0px 6.500px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 12,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: "20px",
      letterSpacing: "0.140px",
      color: "rgba(0,0,0,0.87)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text1 ?? "1"));
  const __body1 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      height: 20,
      overflow: "hidden",
      borderRadius: 64,
      backgroundColor: "rgb(245,0,87)",
      display: "flex",
      flexDirection: "row",
      padding: "0px 6.500px 0px 6.500px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 12,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: "20px",
      letterSpacing: "0.140px",
      color: "rgb(255,255,255)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text1 ?? "1"));
  const __body2 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      height: 20,
      borderRadius: 64,
      backgroundColor: "rgb(63,81,181)",
      display: "flex",
      flexDirection: "row",
      padding: "0px 6.500px 0px 6.500px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 12,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: "20px",
      letterSpacing: "0.140px",
      color: "rgb(255,255,255)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text1 ?? "1"));
  const __body3 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      height: 20,
      borderRadius: 64,
      backgroundColor: "rgb(244,67,54)",
      display: "flex",
      flexDirection: "row",
      padding: "0px 6.500px 0px 6.500px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 12,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: "20px",
      letterSpacing: "0.140px",
      color: "rgb(255,255,255)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text1 ?? "1"));
  const __body4 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      height: 20,
      borderRadius: 64,
      backgroundColor: "rgb(237,108,2)",
      display: "flex",
      flexDirection: "row",
      padding: "0px 6.500px 0px 6.500px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 12,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: "20px",
      letterSpacing: "0.140px",
      color: "rgb(255,255,255)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text1 ?? "1"));
  const __body5 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      height: 20,
      borderRadius: 64,
      backgroundColor: "rgb(33,150,243)",
      display: "flex",
      flexDirection: "row",
      padding: "0px 6.500px 0px 6.500px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 12,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: "20px",
      letterSpacing: "0.140px",
      color: "rgb(255,255,255)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text1 ?? "1"));
  const __body6 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      height: 20,
      borderRadius: 64,
      backgroundColor: "rgb(76,175,80)",
      display: "flex",
      flexDirection: "row",
      padding: "0px 6.500px 0px 6.500px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 12,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: "20px",
      letterSpacing: "0.140px",
      color: "rgb(255,255,255)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text1 ?? "1"));
  const __body7 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 8,
      height: 8,
      overflow: "hidden",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 8,
      height: 8,
      borderRadius: "50%",
      backgroundColor: "rgb(245,0,87)"
    }
  }));
  const __body8 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 8,
      height: 8,
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 8,
      height: 8,
      borderRadius: "50%",
      backgroundColor: "rgb(63,81,181)"
    }
  }));
  const __body9 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 8,
      height: 8,
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 8,
      height: 8,
      borderRadius: "50%",
      backgroundColor: "rgb(244,67,54)"
    }
  }));
  const __body10 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 8,
      height: 8,
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 8,
      height: 8,
      borderRadius: "50%",
      backgroundColor: "rgb(237,108,2)"
    }
  }));
  const __body11 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 8,
      height: 8,
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 8,
      height: 8,
      borderRadius: "50%",
      backgroundColor: "rgb(33,150,243)"
    }
  }));
  const __body12 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 8,
      height: 8,
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 8,
      height: 8,
      borderRadius: "50%",
      backgroundColor: "rgb(76,175,80)"
    }
  }));
  const __impls = {
    // figma: Variant=Standard, Color=Default
    "variant=standard|color=default": __body0,
    // figma: Variant=Standard, Color=Secondary
    "variant=standard|color=secondary": __body1,
    // figma: Variant=Standard, Color=Primary
    "variant=standard|color=primary": __body2,
    // figma: Variant=Standard, Color=Error
    "variant=standard|color=error": __body3,
    // figma: Variant=Standard, Color=Warning
    "variant=standard|color=warning": __body4,
    // figma: Variant=Standard, Color=Info
    "variant=standard|color=info": __body5,
    // figma: Variant=Standard, Color=Success
    "variant=standard|color=success": __body6,
    // figma: Variant=Dot, Color=Secondary
    "variant=dot|color=secondary": __body7,
    // figma: Variant=Dot, Color=Primary
    "variant=dot|color=primary": __body8,
    // figma: Variant=Dot, Color=Error
    "variant=dot|color=error": __body9,
    // figma: Variant=Dot, Color=Warning
    "variant=dot|color=warning": __body10,
    // figma: Variant=Dot, Color=Info
    "variant=dot|color=info": __body11,
    // figma: Variant=Dot, Color=Success
    "variant=dot|color=success": __body12
  };
  return (__impls[__vkey(props)] ?? __body0)();
}
Object.assign(__ds_scope, { Badge, __ds_default_components_Badge_xalxt9: Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/Badge.jsx", error: String((e && e.message) || e) }); }

// components/Camera.jsx
try { (() => {
// figma node: 101:121 Camera
function Camera(_p = {}) {
  const props = _p;
  return /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 16,
      height: 16,
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 16,
    height: 16,
    viewBox: "0 0 16 16",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 16,
      height: 16,
      color: "rgb(38,44,45)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 8 16 C 12.418 16 16 12.418 16 8 C 16 3.582 12.418 0 8 0 C 3.582 0 0 3.582 0 8 C 0 12.418 3.582 16 8 16 Z",
    fill: "currentColor",
    fillRule: "evenodd"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 10,
    height: 10,
    viewBox: "0 0 10 10",
    fill: "none",
    style: {
      position: "absolute",
      left: 3,
      top: 3,
      width: 10,
      height: 10,
      color: "rgb(18,21,21)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 5 10 C 7.761 10 10 7.761 10 5 C 10 2.239 7.761 0 5 0 C 2.239 0 0 2.239 0 5 C 0 7.761 2.239 10 5 10 Z",
    fill: "currentColor",
    fillRule: "evenodd"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 2,
    height: 2,
    viewBox: "0 0 2 2",
    fill: "none",
    style: {
      position: "absolute",
      left: 7,
      top: 5,
      width: 2,
      height: 2,
      opacity: 0.4,
      color: "rgb(99,111,115)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1 2 C 1.552 2 2 1.552 2 1 C 2 0.448 1.552 0 1 0 C 0.448 0 0 0.448 0 1 C 0 1.552 0.448 2 1 2 Z",
    fill: "currentColor",
    fillRule: "evenodd"
  })));
}
Object.assign(__ds_scope, { Camera, __ds_default_components_Camera_xwwvj7: Camera });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/Camera.jsx", error: String((e && e.message) || e) }); }

// components/Confetti.jsx
try { (() => {
// figma node: 334:6375 Confetti (3 variants)
const __venc = v => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = p => "skinTone=" + __venc(p.skinTone);
function Confetti(_p = {}) {
  const props = {
    ..._p,
    skinTone: _p.skinTone ?? "light"
  };
  const __body0 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 128,
      height: 141.302,
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 122.300,
    height: 71.803,
    viewBox: "0 0 122.300 71.803",
    fill: "none",
    style: {
      position: "absolute",
      left: 4.32,
      top: 68.354,
      width: 122.3,
      height: 71.803,
      color: "rgb(218,146,103)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 18.147 71.803 L 16.401 54.042 C 11.923 46.73 2.769 31.378 1.98 28.463 C 0.993 24.82 -0.601 10.171 0.234 6.755 C 1.069 3.34 2.207 1.973 4.181 2.125 C 5.76 2.247 7.369 3.643 7.976 4.326 C 8.33 3.39 9.494 1.488 11.316 1.366 C 13.137 1.245 15.111 2.884 15.87 3.719 C 16.275 2.808 17.494 0.987 19.134 0.987 C 20.773 0.987 22.65 2.555 23.384 3.34 C 23.915 2.555 25.403 0.987 27.103 0.987 C 29.228 0.987 31.126 2.581 31.354 5.313 C 31.581 8.046 33.175 19.507 35.377 24.213 C 37.578 28.919 41.221 32.562 44.485 33.549 C 45.922 33.983 46.582 34.192 46.834 34.28 C 46.525 31.835 45.372 26.143 43.194 22.695 C 40.462 18.368 41.752 14.953 43.574 13.662 C 45.396 12.372 47.749 13.966 48.508 15.939 C 49.267 17.913 55.642 30.057 56.477 33.549 C 57.312 37.04 59.362 45.086 57.919 49.564 C 56.766 53.146 53.289 61.228 51.695 64.82 L 51.695 71.803 L 18.147 71.803 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 70.823 64.82 L 70.823 70.741 L 103.916 70.741 C 104.321 69.779 105.1 66.672 104.979 61.936 C 104.857 57.2 106.041 53.283 106.648 51.917 C 109.786 47.666 116.607 37.86 118.793 32.638 C 121.525 26.11 122.436 12.752 122.284 8.653 C 122.132 4.554 121.373 1.366 118.793 1.366 C 116.728 1.366 115.402 3.34 114.998 4.326 C 114.745 3.213 113.601 0.987 111.051 0.987 C 108.5 0.987 107.053 2.555 106.648 3.34 C 106.244 2.226 104.979 0 103.157 0 C 101.335 0 99.868 2.226 99.362 3.34 C 99.21 2.555 98.147 0.987 95.111 0.987 C 91.316 0.987 90.709 8.956 90.102 14.573 C 89.495 20.19 84.94 28.463 82.208 30.968 C 80.022 32.972 76.844 32.916 75.529 32.638 C 76.288 30.411 78.079 25.306 79.172 22.695 C 80.538 19.431 81.297 15.939 79.172 13.662 C 77.472 11.841 74.719 14.421 73.555 15.939 C 72.644 18.697 70.215 25.063 67.787 28.463 C 64.751 32.714 64.751 45.541 64.599 49.564 C 64.477 52.782 68.697 61.076 70.823 64.82 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 60.570,
    height: 28.236,
    viewBox: "0 0 60.570 28.236",
    fill: "none",
    style: {
      position: "absolute",
      left: 11.385,
      top: 12.186,
      width: 60.57,
      height: 28.236,
      color: "rgb(93,240,205)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 12.6 2.581 L 7.742 0 C 6.528 4.979 2.075 6.224 0 6.224 L 1.822 11.689 C 3.137 11.436 6.163 10.657 7.742 9.564 C 9.321 8.471 11.638 4.453 12.6 2.581 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 58.141 27.476 L 52.069 28.236 C 50.247 20.099 53.435 15.231 55.257 13.814 L 60.57 17.457 C 60.165 17.963 59.112 19.492 58.141 21.556 C 57.169 23.621 57.736 26.363 58.141 27.476 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 101.709,
    height: 50.247,
    viewBox: "0 0 101.709 50.247",
    fill: "none",
    style: {
      position: "absolute",
      left: 1.67,
      top: 16.589,
      width: 101.709,
      height: 50.247,
      color: "rgb(255,223,111)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 5.161 23.833 C 5.161 25.258 4.006 26.414 2.581 26.414 C 1.155 26.414 0 25.258 0 23.833 C 0 22.408 1.155 21.253 2.581 21.253 C 4.006 21.253 5.161 22.408 5.161 23.833 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 42.657 10.778 C 42.657 12.203 41.501 13.359 40.076 13.359 C 38.651 13.359 37.496 12.203 37.496 10.778 C 37.496 9.353 38.651 8.197 40.076 8.197 C 41.501 8.197 42.657 9.353 42.657 10.778 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 53.283 47.666 C 53.283 49.092 52.128 50.247 50.702 50.247 C 49.277 50.247 48.122 49.092 48.122 47.666 C 48.122 46.241 49.277 45.086 50.702 45.086 C 52.128 45.086 53.283 46.241 53.283 47.666 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 83.34 35.826 C 83.34 37.251 82.185 38.406 80.76 38.406 C 79.334 38.406 78.179 37.251 78.179 35.826 C 78.179 34.4 79.334 33.245 80.76 33.245 C 82.185 33.245 83.34 34.4 83.34 35.826 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 101.709 27.932 C 101.709 29.357 100.553 30.513 99.128 30.513 C 97.703 30.513 96.547 29.357 96.547 27.932 C 96.547 26.507 97.703 25.351 99.128 25.351 C 100.553 25.351 101.709 26.507 101.709 27.932 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 90.627 2.581 C 90.627 4.006 89.471 5.161 88.046 5.161 C 86.621 5.161 85.466 4.006 85.466 2.581 C 85.466 1.155 86.621 0 88.046 0 C 89.471 0 90.627 1.155 90.627 2.581 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 51.613,
    height: 57.318,
    viewBox: "0 0 51.613 57.318",
    fill: "none",
    style: {
      position: "absolute",
      left: 63.909,
      top: 17.803,
      width: 51.613,
      height: 57.318,
      color: "rgb(252,83,83)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 54.801 L 1.214 49.64 C 6.922 52.433 9.968 49.387 10.778 47.515 L 15.18 52.828 C 14.27 53.486 11.628 55.196 8.349 56.775 C 5.07 58.353 1.417 56.117 0 54.801 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 44.327 6.224 C 45.177 4.281 45.794 1.265 45.997 0 L 51.613 2.429 C 50.551 4.149 48.486 7.894 48.729 9.108 C 48.972 10.323 49.741 12.549 50.095 13.511 L 44.327 13.511 C 43.972 11.891 43.477 8.167 44.327 6.224 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 98.986,
    height: 58.141,
    viewBox: "0 0 98.986 58.141",
    fill: "none",
    style: {
      position: "absolute",
      left: 24.289,
      top: 0.346,
      width: 98.986,
      height: 58.141,
      color: "rgb(204,173,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 23.681 4.858 L 27.173 0 C 28.944 1.872 32.547 6.862 32.79 11.841 C 29.709 12.59 27.907 12.928 27.133 13.081 C 27.146 13.124 27.16 13.166 27.173 13.207 C 26.556 13.207 26.496 13.207 27.133 13.081 C 26.545 11.149 26.057 6.996 23.681 4.858 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 8.653 41.139 L 3.947 38.558 C -0.759 43.112 1.822 46.604 1.822 49.033 C 1.822 50.976 0.607 53.081 0 53.89 C 1.366 54.649 2.732 54.649 5.01 55.408 C 8.349 50.854 6.376 47.666 6.072 45.541 C 5.829 43.841 7.691 41.898 8.653 41.139 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 98.065 45.541 L 92.6 45.541 C 91.75 49.67 92.955 55.661 93.663 58.141 L 98.976 57.23 C 99.027 56.623 98.915 54.832 98.065 52.524 C 97.215 50.217 97.711 46.907 98.065 45.541 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 128,
    height: 141.302,
    viewBox: "0 0 128 141.302",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 128,
      height: 141.302,
      color: "rgb(0,0,0)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 49.298 1.645 C 48.442 2.577 47.54 3.591 47.293 3.898 C 47.046 4.206 46.815 4.487 46.779 4.522 C 46.744 4.557 46.695 4.769 46.67 4.993 C 46.617 5.476 46.85 5.858 47.808 6.863 C 48.209 7.283 48.602 7.876 48.703 8.212 C 48.801 8.541 48.984 8.896 49.109 8.999 C 49.234 9.103 49.336 9.283 49.336 9.399 C 49.336 9.515 49.4 9.729 49.477 9.874 C 49.84 10.552 50.095 11.819 50.095 12.938 C 50.095 14.117 50.115 14.186 50.603 14.718 L 51.111 15.272 L 51.855 15.101 C 52.265 15.007 52.976 14.852 53.435 14.758 C 53.894 14.663 54.562 14.455 54.919 14.297 C 55.276 14.138 55.673 14.008 55.802 14.008 C 56.188 14.008 57.589 13.308 57.904 12.958 C 58.155 12.679 58.194 12.433 58.165 11.325 C 58.146 10.608 58.071 9.91 57.998 9.775 C 57.926 9.639 57.722 8.923 57.547 8.183 C 57.371 7.443 57.12 6.589 56.989 6.286 C 56.159 4.362 55.736 3.71 54.565 2.547 C 52.536 0.533 51.969 0.081 51.386 0.013 C 50.877 -0.046 50.786 0.025 49.298 1.645 Z M 52.495 4.103 C 53.053 4.666 53.674 5.367 53.877 5.659 C 54.377 6.382 54.938 7.93 55.196 9.295 C 55.314 9.918 55.478 10.495 55.561 10.578 C 55.644 10.661 55.712 10.88 55.712 11.063 C 55.712 11.399 55.105 11.731 54.493 11.731 C 54.349 11.731 54.142 11.838 54.033 11.969 C 53.919 12.107 53.707 12.174 53.529 12.127 C 53.361 12.083 53.137 12.119 53.032 12.206 C 52.732 12.455 52.524 12.218 52.524 11.629 C 52.524 11.332 52.424 10.772 52.301 10.385 C 52.178 9.998 52.002 9.368 51.908 8.984 C 51.815 8.6 51.58 8.102 51.387 7.877 C 51.194 7.652 50.944 7.156 50.831 6.774 C 50.705 6.346 50.431 5.908 50.118 5.633 L 49.61 5.187 L 50.037 4.571 C 50.272 4.232 50.552 3.921 50.659 3.88 C 50.767 3.838 50.854 3.734 50.854 3.648 C 50.854 3.516 51.282 3.098 51.434 3.083 C 51.46 3.08 51.938 3.539 52.495 4.103 Z M 101.936 5.388 C 101.769 5.484 101.542 5.653 101.432 5.763 C 101.322 5.873 101.179 5.963 101.115 5.963 C 100.907 5.963 100.646 6.721 100.646 7.324 C 100.646 8.358 101.935 9.515 102.659 9.13 C 103.108 8.891 103.368 8.538 103.374 8.16 C 103.376 7.99 103.488 7.696 103.621 7.505 C 104.033 6.917 103.862 5.683 103.318 5.32 C 103.065 5.151 102.279 5.19 101.936 5.388 Z M 37.564 8.525 C 36.744 8.691 36.28 9.192 36.184 10.012 C 36.113 10.616 36.156 10.817 36.428 11.162 C 36.61 11.391 36.895 11.579 37.061 11.579 C 37.228 11.579 37.479 11.638 37.619 11.71 C 37.76 11.782 38.12 11.81 38.42 11.772 C 39.297 11.662 39.778 10.528 39.246 9.825 C 39.123 9.663 39.021 9.422 39.018 9.291 C 39.013 9.024 38.391 8.38 38.169 8.411 C 38.091 8.422 37.818 8.474 37.564 8.525 Z M 72.41 9.669 C 72.004 9.815 71.762 10.068 71.383 10.741 C 70.865 11.66 70.854 12.003 71.328 12.496 C 71.72 12.903 72.665 13.013 73.135 12.705 C 73.698 12.336 74.293 11.595 74.395 11.137 C 74.499 10.664 74.207 10.015 73.744 9.691 C 73.347 9.413 73.129 9.41 72.41 9.669 Z M 18.529 11.115 C 18.366 11.278 18.191 11.67 18.139 11.988 C 18.051 12.522 17.917 12.821 16.993 14.553 C 16.794 14.926 16.442 15.287 16.111 15.459 C 15.808 15.616 15.375 15.893 15.149 16.075 C 14.923 16.258 14.275 16.556 13.708 16.739 C 12.886 17.005 12.489 17.051 11.739 16.971 C 10.629 16.852 10.269 17 10.035 17.671 C 9.812 18.312 9.813 18.322 10.223 18.816 C 10.591 19.26 10.863 20.376 11.054 22.228 C 11.119 22.853 11.259 23.348 11.424 23.53 C 11.57 23.692 11.689 23.904 11.689 24.003 C 11.689 24.102 11.91 24.318 12.181 24.483 C 13.162 25.079 16.265 24.72 18.331 23.77 C 19.439 23.26 21.409 21.887 21.54 21.532 C 21.573 21.443 21.874 21.115 22.208 20.804 C 22.777 20.273 23.081 19.864 23.31 19.321 C 23.425 19.047 23.935 17.902 24.222 17.272 C 24.336 17.021 24.577 16.381 24.757 15.849 C 25.203 14.529 25.044 14.007 23.926 13.136 C 23.472 12.782 22.94 12.42 22.746 12.332 C 22.551 12.243 22.118 12.004 21.784 11.8 C 20.088 10.765 19.089 10.555 18.529 11.115 Z M 21.011 14.236 C 21.285 14.445 21.614 14.615 21.742 14.615 C 22.182 14.615 22.299 14.952 22.112 15.685 C 22.015 16.065 21.831 16.543 21.703 16.748 C 21.575 16.953 21.284 17.51 21.056 17.987 C 20.812 18.498 20.393 19.054 20.039 19.339 C 19.708 19.605 19.395 19.954 19.344 20.115 C 19.293 20.275 18.967 20.536 18.62 20.694 C 18.273 20.853 17.697 21.155 17.339 21.366 C 16.982 21.577 16.56 21.75 16.4 21.75 C 16.24 21.75 16.073 21.809 16.028 21.881 C 15.873 22.132 14.661 22.367 14.194 22.237 C 13.793 22.125 13.717 22.012 13.563 21.285 C 13.467 20.831 13.381 20.239 13.373 19.969 C 13.361 19.552 13.421 19.465 13.776 19.388 C 14.761 19.174 16.992 18.033 17.682 17.39 C 17.851 17.233 18.203 16.955 18.465 16.772 C 18.897 16.471 19.387 15.71 20.022 14.35 C 20.3 13.757 20.372 13.748 21.011 14.236 Z M 90.118 15.478 C 90.061 15.536 89.703 15.567 89.322 15.547 C 88.008 15.479 86.328 16.885 85.853 18.45 C 85.49 19.649 85.7 20.531 86.575 21.478 C 87.477 22.454 88.347 22.86 89.567 22.876 C 90.445 22.887 90.607 22.842 91.008 22.471 C 91.256 22.242 91.515 22.054 91.584 22.054 C 91.74 22.054 92.752 20.993 92.752 20.829 C 92.752 20.763 92.864 20.597 93.001 20.46 C 93.397 20.064 93.355 18.645 92.922 17.765 C 92.426 16.759 91.081 15.374 90.599 15.374 C 90.392 15.374 90.175 15.421 90.118 15.478 Z M 109.652 16.539 C 109.21 16.63 108.54 17.318 108.54 17.681 C 108.54 17.841 108.617 18.281 108.712 18.658 C 108.846 19.19 108.841 19.475 108.688 19.939 C 108.58 20.267 108.441 20.536 108.38 20.536 C 108.319 20.536 108.165 20.792 108.038 21.105 C 107.911 21.418 107.507 22.023 107.14 22.449 C 106.634 23.038 106.427 23.438 106.28 24.119 C 106.173 24.611 105.989 25.438 105.871 25.956 C 105.574 27.253 105.597 27.655 106.043 29.033 C 106.721 31.129 107.471 32.336 108.16 32.444 C 109.469 32.65 110.7 32.674 111.652 32.513 C 112.236 32.415 113.121 32.318 113.617 32.298 C 114.407 32.267 114.563 32.208 114.868 31.826 C 115.167 31.453 115.215 31.224 115.203 30.251 C 115.189 29.192 115.152 29.068 114.672 28.48 C 114.389 28.132 114.156 27.751 114.156 27.633 C 114.156 27.516 113.986 27.259 113.777 27.063 C 113.163 26.486 113.344 25.606 114.309 24.483 C 114.56 24.19 114.804 23.832 114.851 23.686 C 114.898 23.54 114.984 23.42 115.043 23.42 C 115.178 23.42 115.52 22.725 116.036 21.398 C 116.382 20.512 116.417 20.28 116.284 19.784 C 116.093 19.074 116.03 19.023 114.612 18.411 C 113.986 18.141 113.354 17.815 113.208 17.686 C 113.061 17.558 112.942 17.502 112.942 17.562 C 112.942 17.622 112.686 17.531 112.373 17.361 C 111.304 16.78 110.163 16.435 109.652 16.539 Z M 90.345 18.561 C 90.583 18.811 90.779 19.091 90.779 19.183 C 90.779 19.485 89.755 20.384 89.413 20.384 C 89.076 20.384 88.198 19.582 88.198 19.275 C 88.198 19.183 88.416 18.883 88.683 18.607 C 89.294 17.978 89.774 17.964 90.345 18.561 Z M 112.259 19.999 C 112.426 20.088 112.767 20.293 113.018 20.454 C 113.268 20.616 113.495 20.761 113.522 20.779 C 113.548 20.796 113.505 20.936 113.426 21.09 C 113.347 21.244 113.136 21.688 112.957 22.076 C 112.779 22.464 112.479 22.882 112.291 23.005 C 112.103 23.128 111.804 23.563 111.627 23.97 C 110.816 25.832 110.773 25.985 110.869 26.68 C 110.972 27.435 111.455 28.495 111.782 28.687 C 111.896 28.754 112.1 29.024 112.234 29.287 C 112.471 29.75 112.468 29.767 112.141 29.845 C 111.432 30.012 109.775 30.127 109.468 30.029 C 109.092 29.91 108.379 28.47 108.303 27.677 C 108.276 27.389 108.379 26.511 108.533 25.727 C 108.748 24.638 108.907 24.205 109.208 23.891 C 109.425 23.664 109.604 23.415 109.607 23.336 C 109.609 23.257 109.814 22.924 110.062 22.596 C 110.31 22.268 110.513 21.918 110.513 21.818 C 110.513 21.717 110.617 21.55 110.743 21.445 C 110.869 21.34 110.956 21.178 110.936 21.085 C 110.916 20.991 111.016 20.627 111.159 20.274 C 111.429 19.605 111.494 19.589 112.259 19.999 Z M 40.74 24.009 C 40.588 24.186 40.411 24.331 40.346 24.331 C 40.282 24.331 39.902 24.565 39.503 24.852 C 38.94 25.256 38.714 25.548 38.498 26.149 C 38.044 27.412 38.059 27.787 38.616 29.113 C 39.058 30.166 39.228 30.4 39.902 30.877 C 40.594 31.366 41.09 31.535 42.338 31.704 C 42.868 31.776 43.392 31.453 44.291 30.502 C 45.26 29.477 45.372 29.202 45.423 27.707 C 45.473 26.275 45.214 25.659 44.221 24.846 C 43.486 24.244 42.71 23.918 41.667 23.775 C 41.125 23.701 40.97 23.74 40.74 24.009 Z M 66.128 24.713 C 65.888 24.838 65.414 25.256 65.075 25.641 C 64.087 26.763 63.541 27.818 62.848 29.948 C 62.59 30.741 62.308 31.516 62.223 31.67 C 61.993 32.084 61.698 33.868 61.729 34.653 C 61.819 36.893 62.302 39.624 62.68 40.028 C 62.843 40.203 63.021 40.529 63.077 40.752 C 63.248 41.443 63.641 41.664 64.821 41.732 C 65.673 41.782 66.047 41.73 66.596 41.487 C 66.979 41.318 67.778 41.141 68.371 41.094 C 70.035 40.963 70.845 40.745 71.097 40.361 C 71.462 39.803 71.445 39.315 71.041 38.749 C 70.834 38.459 70.578 37.983 70.471 37.69 C 70.245 37.068 70.21 35.078 70.418 34.689 C 70.497 34.541 70.7 34.011 70.868 33.512 C 71.193 32.549 72.249 30.826 72.935 30.141 C 73.26 29.816 73.327 29.636 73.257 29.284 C 73.141 28.706 72.937 28.472 72.237 28.115 C 71.921 27.954 71.541 27.696 71.391 27.541 C 71.242 27.387 70.911 27.19 70.656 27.104 C 70.401 27.018 69.957 26.73 69.669 26.463 C 69.382 26.197 68.959 25.88 68.729 25.758 C 68.499 25.637 68.312 25.433 68.312 25.306 C 68.312 25.076 67.228 24.491 66.794 24.487 C 66.668 24.485 66.369 24.587 66.128 24.713 Z M 42.638 26.854 C 42.95 27.073 42.978 27.178 42.885 27.803 C 42.753 28.696 42.433 29.065 41.841 29.006 C 41.476 28.97 41.321 28.828 41.04 28.278 C 40.611 27.435 40.605 27.293 40.987 26.911 C 41.358 26.541 42.151 26.513 42.638 26.854 Z M 67.884 28.319 C 68.385 28.672 69.054 29.135 69.37 29.348 L 69.945 29.734 L 69.434 30.562 C 69.153 31.017 68.881 31.492 68.829 31.617 C 68.777 31.743 68.648 32.05 68.542 32.3 C 67.921 33.765 67.716 34.802 67.673 36.677 C 67.648 37.734 67.594 38.607 67.553 38.617 C 67.511 38.626 67.255 38.66 66.983 38.691 C 66.711 38.723 66.242 38.852 65.94 38.978 C 65.638 39.104 65.333 39.208 65.262 39.208 C 65.098 39.208 64.781 38.616 64.735 38.222 C 64.715 38.054 64.62 37.484 64.523 36.954 C 64.426 36.424 64.348 35.44 64.349 34.767 C 64.351 33.594 64.473 33.014 65.152 30.934 C 65.766 29.053 66.775 27.083 66.913 27.496 C 66.946 27.596 67.383 27.967 67.884 28.319 Z M 83.674 32.486 C 83.46 32.526 83.228 32.754 83.076 33.073 C 82.446 34.392 84.002 35.397 85.006 34.319 C 85.408 33.888 85.396 33.395 84.972 32.928 C 84.599 32.518 84.213 32.386 83.674 32.486 Z M 3.108 36.677 C 2.023 36.992 1.006 37.796 0.48 38.753 C 0.047 39.539 0 39.753 0 40.915 C 0 42.161 0.019 42.231 0.55 42.945 C 1.123 43.716 2.338 44.768 3.02 45.083 C 3.238 45.184 3.797 45.269 4.262 45.273 C 4.954 45.278 5.234 45.197 5.789 44.829 C 6.852 44.126 7.628 43.283 8.173 42.243 C 8.614 41.402 8.664 41.193 8.582 40.513 C 8.409 39.061 8.162 38.402 7.599 37.88 C 6.724 37.071 6.538 36.931 6.338 36.928 C 6.234 36.927 5.875 36.827 5.541 36.707 C 4.815 36.446 3.942 36.435 3.108 36.677 Z M 27.742 37.588 C 27.596 37.704 27.476 37.877 27.476 37.972 C 27.476 38.067 27.319 38.145 27.127 38.145 C 26.647 38.145 25.949 38.937 25.421 40.08 C 25.179 40.602 24.929 41.029 24.863 41.029 C 24.798 41.029 24.744 41.162 24.744 41.324 C 24.744 41.486 24.681 41.658 24.604 41.705 C 24.527 41.753 24.419 41.996 24.364 42.245 C 24.309 42.495 24.213 42.699 24.15 42.699 C 23.725 42.699 23.637 45.894 24.037 46.815 C 24.168 47.116 24.308 47.526 24.349 47.725 C 24.39 47.925 24.525 48.556 24.649 49.127 C 24.774 49.699 24.839 50.279 24.795 50.417 C 24.602 51.029 24.031 52.084 23.592 52.642 C 22.815 53.63 22.761 53.8 22.967 54.623 C 23.123 55.249 23.25 55.417 23.833 55.771 C 24.209 55.999 24.695 56.191 24.913 56.198 C 25.132 56.204 25.473 56.336 25.672 56.49 C 26.172 56.877 26.754 57.012 28.084 57.05 C 29.402 57.087 29.812 56.921 30.361 56.129 C 30.569 55.828 30.883 55.398 31.058 55.174 C 31.629 54.441 32.618 52.203 32.712 51.428 C 32.763 51.01 32.842 50.386 32.887 50.041 C 32.937 49.663 32.904 49.373 32.804 49.311 C 32.713 49.255 32.638 49.075 32.638 48.912 C 32.638 48.749 32.577 48.497 32.502 48.352 C 32.428 48.207 32.288 47.917 32.191 47.709 C 32.094 47.5 31.876 47.062 31.707 46.736 C 31.494 46.327 31.427 45.992 31.49 45.657 C 31.591 45.116 32.287 43.978 33.038 43.126 C 34.039 41.989 34.039 40.763 33.037 40.344 C 32.754 40.226 32.484 40.028 32.436 39.903 C 32.388 39.779 32.055 39.528 31.696 39.346 C 31.337 39.164 30.649 38.674 30.166 38.257 C 29.203 37.426 28.271 37.168 27.742 37.588 Z M 5.301 39.353 C 6.157 39.79 6.25 40.453 5.613 41.567 C 5.053 42.546 4.789 42.718 4.038 42.596 C 3.346 42.484 2.481 41.55 2.463 40.895 C 2.444 40.242 3.034 39.487 3.732 39.272 C 4.563 39.014 4.645 39.019 5.301 39.353 Z M 30.246 41.339 C 30.558 41.544 30.814 41.754 30.815 41.805 C 30.816 41.856 30.604 42.164 30.344 42.488 C 30.084 42.813 29.717 43.42 29.528 43.838 C 28.692 45.683 28.679 46.198 29.433 47.756 C 29.682 48.273 29.934 48.9 29.993 49.151 C 30.051 49.401 30.167 49.692 30.249 49.797 C 30.446 50.047 30.258 51.459 29.973 51.865 C 29.852 52.038 29.754 52.278 29.754 52.4 C 29.754 52.522 29.497 53.012 29.184 53.489 C 28.633 54.329 28.591 54.358 27.856 54.415 C 27.183 54.467 26.595 54.287 25.98 53.838 C 25.95 53.816 26.069 53.596 26.246 53.349 C 26.422 53.101 26.566 52.806 26.566 52.692 C 26.566 52.579 26.713 52.214 26.892 51.881 C 27.545 50.673 27.416 48.697 26.535 46.418 C 26.23 45.628 26.396 43.32 26.793 42.851 C 26.899 42.726 27.174 42.213 27.404 41.712 C 27.634 41.211 27.959 40.651 28.125 40.467 L 28.428 40.132 L 29.053 40.548 C 29.396 40.777 29.933 41.133 30.246 41.339 Z M 100.266 41.097 C 99.765 41.185 99.185 41.357 98.976 41.479 C 98.767 41.601 98.55 41.688 98.492 41.672 C 98.325 41.625 97.291 42.88 97.067 43.4 C 96.955 43.661 96.82 44.31 96.766 44.842 C 96.671 45.79 96.682 45.83 97.279 46.705 C 97.631 47.221 98.196 47.798 98.616 48.071 C 99.236 48.474 99.479 48.542 100.261 48.53 C 101.411 48.514 102.065 48.209 103.058 47.227 C 103.858 46.435 104.289 45.463 104.289 44.452 C 104.289 43.84 103.307 42.182 102.79 41.922 C 102.571 41.812 102.118 41.545 101.784 41.329 C 101.212 40.959 101.126 40.946 100.266 41.097 Z M 50.019 43.883 C 49.37 43.961 48.927 44.44 48.816 45.183 C 48.709 45.895 49.007 46.687 49.454 46.883 C 50.203 47.211 50.535 47.129 51.194 46.451 C 52 45.622 52.051 45.085 51.386 44.424 C 50.853 43.895 50.636 43.809 50.019 43.883 Z M 100.125 44.082 C 100.184 44.177 100.437 44.217 100.707 44.173 C 101.212 44.091 101.59 44.281 101.745 44.693 C 101.864 45.011 101.194 45.666 100.502 45.907 C 100.019 46.075 99.966 46.06 99.632 45.645 C 99.363 45.31 99.3 45.094 99.372 44.748 C 99.523 44.024 99.889 43.7 100.125 44.082 Z M 120.359 44.367 C 120.221 44.45 119.272 44.551 118.25 44.592 C 116.002 44.681 115.796 44.783 115.446 45.987 C 115.076 47.261 115.002 48.097 114.999 51.048 C 114.995 53.649 115.004 53.723 115.421 54.589 C 115.67 55.108 115.848 55.734 115.852 56.107 C 115.855 56.486 116.035 57.107 116.297 57.649 C 116.539 58.149 116.737 58.708 116.737 58.89 C 116.737 59.073 116.907 59.424 117.114 59.67 C 117.428 60.043 117.61 60.12 118.205 60.132 C 118.598 60.14 119.013 60.069 119.127 59.974 C 119.241 59.88 119.621 59.749 119.971 59.684 C 120.321 59.619 121.189 59.416 121.898 59.234 C 124.553 58.553 124.678 58.447 124.72 56.85 C 124.754 55.572 124.572 54.845 123.88 53.496 C 122.923 51.631 122.682 49.687 123.065 46.941 C 123.266 45.497 123.102 45.026 122.278 44.672 C 121.399 44.296 120.668 44.179 120.359 44.367 Z M 120.442 47.495 C 120.434 47.738 120.409 48.346 120.386 48.847 C 120.327 50.152 120.494 51.725 120.759 52.36 C 120.885 52.661 120.988 53.108 120.988 53.354 C 120.988 53.856 121.208 54.337 121.598 54.685 C 121.83 54.892 122.354 56.031 122.354 56.327 C 122.354 56.496 121.603 56.779 120.836 56.898 C 120.46 56.957 119.965 57.101 119.735 57.218 C 119.475 57.351 119.318 57.371 119.318 57.271 C 119.318 57.183 119.079 56.871 118.786 56.579 C 118.338 56.13 118.255 55.942 118.255 55.37 C 118.255 54.997 118.272 54.675 118.292 54.654 C 118.313 54.633 118.176 54.399 117.988 54.135 C 117.469 53.407 117.258 50.14 117.585 47.902 C 117.689 47.194 117.771 47.156 119.394 47.054 C 120.439 46.989 120.458 46.998 120.442 47.495 Z M 82.091 48.427 C 80.963 48.516 79.895 49.318 79.281 50.536 C 78.259 52.564 78.395 54.193 79.688 55.426 C 80.531 56.229 81.002 56.432 82.354 56.572 C 83.514 56.693 84.751 55.982 85.801 54.591 C 86.416 53.777 86.438 53.708 86.491 52.437 L 86.545 51.124 L 85.872 50.213 C 84.792 48.754 84.409 48.436 83.836 48.524 C 83.567 48.566 83.306 48.536 83.258 48.458 C 83.21 48.38 83.089 48.328 82.99 48.343 C 82.89 48.358 82.486 48.396 82.091 48.427 Z M 83.495 51.208 C 83.621 51.272 83.812 51.566 83.919 51.862 C 84.092 52.339 84.078 52.469 83.796 53.02 C 83.327 53.94 82.403 54.22 81.591 53.689 C 81.171 53.414 81.107 52.887 81.374 51.922 C 81.62 51.04 82.547 50.727 83.495 51.208 Z M 11.886 54.35 C 11.324 54.958 10.778 55.903 10.778 56.268 C 10.778 56.588 11.497 57.396 12.026 57.669 C 12.382 57.853 12.566 57.867 12.884 57.736 C 13.599 57.439 14.261 56.395 14.5 55.185 C 14.582 54.77 14.525 54.62 14.141 54.236 C 13.78 53.875 13.554 53.781 13.049 53.781 C 12.509 53.781 12.334 53.866 11.886 54.35 Z M 103.096 57.661 C 101.852 58.794 101.877 59.897 103.152 60.089 C 104.388 60.274 105.504 59.349 105.504 58.138 C 105.504 57.506 105.12 57.125 104.392 57.035 C 103.926 56.977 103.759 57.058 103.096 57.661 Z M 50.99 60.685 C 50.689 60.882 50.158 61.12 49.81 61.214 C 49.344 61.34 49.057 61.55 48.725 62.008 C 48.477 62.35 48.274 62.753 48.274 62.903 C 48.274 63.052 48.196 63.222 48.102 63.28 C 47.893 63.41 48.026 64.933 48.303 65.568 C 48.584 66.213 49.206 67.139 49.358 67.139 C 49.431 67.139 49.849 67.396 50.287 67.709 C 51.06 68.262 51.116 68.277 52.324 68.256 C 53.189 68.24 53.672 68.16 53.914 67.99 C 54.105 67.856 54.411 67.747 54.594 67.747 C 55.471 67.747 56.556 65.188 56.442 63.39 C 56.388 62.552 56.318 62.371 55.868 61.906 C 55.355 61.377 54.15 60.846 52.636 60.482 C 51.693 60.255 51.634 60.263 50.99 60.685 Z M 53.474 63.3 C 53.957 63.391 54.16 63.903 53.903 64.383 C 53.813 64.552 53.739 64.823 53.739 64.986 C 53.739 65.402 53.432 65.607 52.661 65.708 C 52.099 65.781 51.891 65.728 51.352 65.374 C 50.6 64.879 50.537 64.757 50.656 64.027 C 50.743 63.489 50.757 63.479 51.3 63.57 C 51.747 63.646 51.912 63.602 52.146 63.343 C 52.345 63.123 52.534 63.053 52.746 63.122 C 52.916 63.176 53.244 63.257 53.474 63.3 Z M 74.648 63.956 C 74.201 64.035 73.858 64.287 73.054 65.129 C 71.602 66.652 70.948 66.979 69.301 67.002 C 68.149 67.018 67.892 66.97 67.201 66.61 C 66.167 66.071 64.807 66.046 64.264 66.556 C 64.069 66.739 63.909 66.972 63.909 67.073 C 63.909 67.174 63.807 67.452 63.683 67.691 C 63.558 67.93 63.456 68.23 63.455 68.358 C 63.454 68.486 63.361 68.725 63.247 68.889 C 63.036 69.195 62.389 72.155 62.395 72.786 C 62.401 73.393 63.453 74.358 64.485 74.703 C 64.76 74.795 65.173 75.004 65.402 75.167 C 66.181 75.721 69.935 76.091 71.651 75.783 C 72.194 75.686 72.789 75.511 72.974 75.395 C 73.159 75.28 73.432 75.185 73.582 75.185 C 73.731 75.185 74.412 74.963 75.095 74.691 C 75.993 74.335 76.762 73.865 77.866 72.997 C 78.706 72.336 79.393 71.738 79.393 71.668 C 79.393 71.599 79.484 71.542 79.595 71.542 C 79.705 71.542 79.958 71.369 80.156 71.158 C 80.655 70.627 80.616 69.87 80.054 69.214 C 79.816 68.936 79.382 68.408 79.09 68.041 C 78.798 67.673 78.06 66.869 77.451 66.254 C 76.8 65.597 76.309 64.962 76.26 64.716 C 76.149 64.162 75.426 63.821 74.648 63.956 Z M 86.877 65.659 C 86.258 66.339 86.217 66.569 86.554 67.484 C 86.823 68.215 86.95 68.368 87.448 68.567 C 88.552 69.009 89.416 68.32 89.533 66.905 C 89.595 66.155 89.574 66.1 89.074 65.718 C 88.376 65.186 87.334 65.158 86.877 65.659 Z M 75.446 68.07 C 75.446 68.131 75.575 68.222 75.732 68.272 C 76.132 68.399 76.523 68.782 76.99 69.505 L 77.39 70.125 L 76.684 70.732 C 75.552 71.706 74.872 72.066 73.035 72.663 C 70.023 73.642 68.202 73.631 66.004 72.622 C 65.18 72.244 65.139 72.198 65.131 71.656 C 65.124 71.124 65.64 69.331 65.874 69.072 C 65.932 69.008 66.283 69.068 66.652 69.206 C 67.124 69.381 67.928 69.469 69.345 69.498 L 71.365 69.539 L 72.305 68.942 C 72.822 68.614 73.359 68.307 73.497 68.26 C 73.635 68.213 73.966 67.903 74.233 67.571 L 74.717 66.969 L 75.082 67.463 C 75.282 67.735 75.446 68.008 75.446 68.07 Z M 98.541 67.957 C 97.338 68.357 96.262 69.241 95.75 70.251 C 95.133 71.467 94.877 72.034 94.877 72.187 C 94.877 72.266 94.78 72.546 94.661 72.809 C 94.424 73.334 94.081 75.616 93.812 78.449 C 93.718 79.451 93.543 80.68 93.424 81.181 C 93.305 81.682 93.22 82.229 93.235 82.396 C 93.27 82.797 93.06 83.874 92.909 84.066 C 92.844 84.149 92.751 84.422 92.703 84.673 C 92.432 86.09 92.174 87.159 92.06 87.343 C 91.989 87.459 91.814 88.067 91.671 88.694 C 91.528 89.321 91.297 90.176 91.159 90.593 C 90.923 91.308 90.84 91.496 90.48 92.149 C 90.4 92.295 90.195 92.735 90.025 93.127 C 89.856 93.518 89.65 93.88 89.569 93.93 C 89.487 93.98 89.35 94.284 89.264 94.605 C 89.173 94.941 88.8 95.518 88.387 95.964 C 87.991 96.39 87.496 96.955 87.287 97.22 C 86.767 97.878 86.511 98.132 86.009 98.487 C 85.773 98.654 85.39 98.944 85.159 99.132 C 84.928 99.32 84.674 99.474 84.594 99.474 C 84.514 99.474 84.296 99.607 84.108 99.77 C 83.7 100.124 81.301 100.647 81.157 100.413 C 80.992 100.147 81.521 98.376 82.176 96.995 C 82.566 96.174 82.885 95.414 82.885 95.307 C 82.885 95.2 83.011 94.949 83.164 94.75 C 83.871 93.835 85.357 89.936 85.558 88.468 C 85.603 88.134 85.743 87.425 85.869 86.892 C 86.192 85.519 86.024 83.676 85.467 82.499 C 85.039 81.594 84.088 80.725 83.101 80.336 C 82.128 79.952 80.035 80.376 79.232 81.12 C 79.105 81.237 78.867 81.408 78.704 81.499 C 78.54 81.59 78.26 81.898 78.082 82.182 C 77.903 82.467 77.588 82.87 77.382 83.08 C 77.176 83.289 76.87 83.733 76.702 84.066 C 75.754 85.949 74.52 88.304 74.405 88.451 C 74.332 88.544 74.188 88.893 74.085 89.227 C 73.808 90.129 73.155 91.783 72.998 91.977 C 72.923 92.071 72.695 92.703 72.492 93.383 C 72.288 94.063 72.016 94.77 71.887 94.955 C 71.757 95.14 71.651 95.414 71.651 95.564 C 71.651 95.85 70.646 98.507 69.732 100.635 C 69.619 100.898 69.526 101.254 69.526 101.427 C 69.526 101.599 69.431 101.965 69.315 102.239 C 68.972 103.048 68.634 104.335 68.48 105.427 C 68.401 105.987 68.3 106.505 68.256 106.576 C 68.179 106.701 67.919 108.062 67.758 109.189 C 67.455 111.305 67.659 117.056 68.072 118.027 C 68.204 118.337 68.312 118.879 68.312 119.23 C 68.312 119.868 68.473 120.526 68.852 121.432 C 68.961 121.695 69.098 122.173 69.154 122.495 C 69.211 122.816 69.693 123.994 70.227 125.112 C 70.76 126.23 71.196 127.202 71.196 127.272 C 71.196 127.342 71.418 127.761 71.689 128.202 C 72.451 129.44 72.759 130.017 73.451 131.504 C 73.548 131.713 73.808 132.189 74.028 132.562 L 74.429 133.24 L 74.26 135.522 C 74.074 138.03 74.163 138.965 74.653 139.653 C 75.253 140.496 75.293 140.507 77.997 140.574 C 82.91 140.696 94.572 140.796 101.709 140.776 C 104.422 140.769 107.178 140.788 107.834 140.819 C 108.877 140.868 109.071 140.835 109.395 140.554 C 109.747 140.247 109.771 140.111 109.92 137.501 C 110.006 135.998 110.102 133.675 110.134 132.339 C 110.166 131.003 110.234 129.193 110.285 128.316 C 110.336 127.44 110.408 126.21 110.443 125.584 C 110.478 124.958 110.615 124.014 110.748 123.486 C 111.034 122.344 112.434 119.499 113.208 118.487 C 113.511 118.09 114.307 116.947 114.977 115.945 C 116.182 114.145 117.728 111.989 118.476 111.066 C 118.689 110.804 118.865 110.531 118.869 110.459 C 118.872 110.387 119.077 110.091 119.324 109.802 C 119.571 109.513 119.773 109.222 119.773 109.155 C 119.773 109.088 120.043 108.639 120.372 108.156 C 120.701 107.674 121.042 107.092 121.129 106.864 C 121.215 106.636 121.527 106.074 121.82 105.615 C 122.114 105.156 122.355 104.663 122.356 104.518 C 122.357 104.374 122.534 103.948 122.749 103.572 C 123.641 102.018 125.221 97.92 125.47 96.513 C 125.529 96.18 125.679 95.531 125.802 95.071 C 125.925 94.612 126.077 93.992 126.138 93.693 C 126.2 93.395 126.31 93.053 126.384 92.935 C 126.457 92.816 126.567 92.343 126.629 91.884 C 126.725 91.164 126.831 90.584 127.293 88.24 C 127.335 88.031 127.401 87.485 127.441 87.026 C 127.481 86.567 127.58 85.576 127.661 84.825 C 127.824 83.316 128.025 80.551 127.997 80.195 C 127.943 79.482 127.813 76.381 127.816 75.849 C 127.817 75.505 127.716 74.933 127.591 74.578 C 127.466 74.223 127.364 73.719 127.364 73.458 C 127.365 72.776 126.623 70.801 126.123 70.155 C 124.749 68.38 120.777 68.379 119.385 70.153 C 119.256 70.317 119.134 70.256 118.774 69.846 C 117.772 68.703 116.462 68.064 115.103 68.054 C 114.464 68.049 112.082 69.008 111.733 69.411 C 111.364 69.836 111.089 69.797 110.795 69.279 C 110.632 68.992 110.19 68.671 109.522 68.352 C 108.085 67.666 106.857 67.641 105.58 68.273 C 105.079 68.521 104.444 68.914 104.17 69.146 C 103.559 69.663 103.522 69.664 103.063 69.177 C 102.629 68.714 101.021 67.898 100.544 67.898 C 100.361 67.898 100.052 67.84 99.859 67.767 C 99.614 67.676 99.214 67.734 98.541 67.957 Z M 22.998 68.273 C 21.738 68.604 21.067 68.96 20.466 69.617 L 19.894 70.243 L 19.397 69.767 C 19.072 69.455 18.445 69.137 17.588 68.85 C 16.369 68.441 16.207 68.421 15.299 68.571 C 14.228 68.749 13.323 69.259 12.515 70.141 L 12.024 70.677 L 11.363 70.141 C 10.912 69.776 10.371 69.524 9.659 69.347 C 7.224 68.745 5.006 69.802 4.416 71.845 C 4.308 72.221 4.151 72.613 4.067 72.715 C 3.983 72.818 3.855 73.33 3.783 73.854 C 3.054 79.13 3.206 85.32 4.179 89.95 C 4.385 90.933 4.554 91.978 4.554 92.273 C 4.554 92.568 4.668 93.028 4.807 93.295 C 4.946 93.562 5.078 93.952 5.101 94.161 C 5.123 94.369 5.214 94.813 5.302 95.147 C 5.391 95.481 5.566 96.233 5.691 96.817 C 5.816 97.402 6.05 98.221 6.211 98.639 C 6.372 99.056 6.721 99.978 6.986 100.688 C 7.252 101.398 7.556 102.149 7.662 102.358 C 7.769 102.567 8.107 103.284 8.413 103.952 C 8.719 104.62 9.08 105.371 9.215 105.622 C 9.35 105.872 9.698 106.555 9.989 107.14 C 10.28 107.724 10.713 108.451 10.952 108.756 C 11.19 109.06 11.385 109.413 11.385 109.54 C 11.385 109.667 11.441 109.794 11.509 109.822 C 11.577 109.849 12.092 110.521 12.654 111.314 C 13.215 112.108 13.807 112.927 13.968 113.136 C 14.129 113.345 14.397 113.694 14.564 113.913 C 14.731 114.132 15.464 115.191 16.194 116.266 C 16.923 117.342 17.754 118.529 18.04 118.905 C 18.691 119.757 20.125 122.672 20.436 123.772 C 20.564 124.226 20.691 124.87 20.72 125.204 C 20.835 126.571 20.971 129.769 21.023 132.339 C 21.053 133.842 21.118 135.55 21.167 136.134 C 21.216 136.719 21.292 137.812 21.335 138.563 C 21.379 139.315 21.437 140.066 21.466 140.233 C 21.494 140.4 21.526 140.607 21.537 140.694 C 21.571 140.973 22.464 141.407 22.741 141.279 C 22.882 141.213 27.302 141.147 32.562 141.133 C 37.822 141.118 43.219 141.091 44.554 141.072 C 45.89 141.052 47.819 141.048 48.841 141.062 C 49.863 141.076 50.771 141.044 50.858 140.99 C 50.946 140.936 52.091 140.89 53.402 140.889 C 54.959 140.888 55.861 140.827 55.998 140.714 C 56.465 140.331 56.904 139.401 57.007 138.582 C 57.067 138.1 57.03 136.857 56.924 135.785 L 56.732 133.854 L 57.134 133.097 C 57.355 132.68 57.597 132.237 57.671 132.111 C 57.746 131.986 57.929 131.576 58.078 131.201 C 58.227 130.825 58.447 130.401 58.567 130.258 C 58.686 130.115 58.948 129.671 59.148 129.271 C 59.349 128.871 59.609 128.373 59.726 128.165 C 60.215 127.299 61.931 123.5 62.024 123.079 C 62.08 122.829 62.261 122.214 62.428 121.713 C 62.594 121.212 62.787 120.311 62.856 119.71 C 62.925 119.109 63.08 118.426 63.2 118.192 C 63.396 117.811 63.46 117.096 63.674 112.908 C 63.706 112.285 63.349 108.831 63.157 107.899 C 63.07 107.481 62.937 106.749 62.86 106.271 C 62.698 105.268 61.697 101.588 61.404 100.916 C 61.295 100.665 61.055 100.051 60.871 99.55 C 60.528 98.614 60.343 98.153 59.909 97.153 C 59.771 96.838 59.659 96.466 59.659 96.329 C 59.659 96.191 59.526 95.8 59.364 95.461 C 59.201 95.121 58.894 94.321 58.681 93.681 C 58.469 93.042 58.2 92.324 58.084 92.087 C 57.539 90.966 57.372 90.565 57.307 90.214 C 57.241 89.859 57.077 89.442 56.758 88.813 C 55.068 85.487 54.083 83.718 53.794 83.491 C 53.596 83.336 53.433 83.128 53.431 83.03 C 53.424 82.773 52.688 82.008 51.987 81.53 C 50.711 80.659 49.34 80.343 48.274 80.674 C 47.435 80.935 46.239 81.938 45.796 82.753 C 45.159 83.922 44.986 85.916 45.379 87.557 C 45.459 87.891 45.563 88.458 45.611 88.816 C 45.659 89.175 45.76 89.584 45.835 89.727 C 45.909 89.869 46.119 90.532 46.301 91.2 C 46.576 92.207 47.544 94.45 48.103 95.375 C 48.179 95.5 48.378 95.91 48.546 96.286 C 48.713 96.661 49.053 97.413 49.3 97.956 C 49.692 98.816 50.205 100.791 50.068 100.912 C 50.041 100.936 49.476 100.86 48.812 100.745 C 48.029 100.609 47.389 100.393 46.991 100.13 C 46.653 99.907 46.107 99.549 45.778 99.334 C 45.053 98.859 43.568 97.366 43.568 97.111 C 43.568 97.01 43.396 96.815 43.185 96.677 C 42.659 96.332 41.898 95.249 41.898 94.844 C 41.898 94.661 41.769 94.395 41.612 94.253 C 41.455 94.11 41.205 93.673 41.057 93.28 C 40.909 92.888 40.662 92.404 40.508 92.205 C 40.354 92.005 40.226 91.698 40.225 91.521 C 40.223 91.345 40.097 90.926 39.945 90.592 C 39.793 90.257 39.621 89.71 39.564 89.377 C 39.506 89.044 39.329 88.327 39.169 87.785 C 39.01 87.242 38.766 86.32 38.626 85.735 C 38.486 85.151 38.277 84.38 38.161 84.022 C 38.046 83.665 37.951 83.062 37.951 82.684 C 37.951 82.306 37.877 81.858 37.786 81.689 C 37.639 81.414 37.518 80.462 37.258 77.538 C 37.142 76.232 37.054 75.468 36.97 75.033 C 36.93 74.825 36.851 74.362 36.796 74.005 C 36.741 73.648 36.636 73.32 36.564 73.275 C 36.492 73.23 36.433 73.06 36.433 72.896 C 36.433 72.732 36.143 72.01 35.788 71.291 C 34.978 69.648 34.107 68.818 32.709 68.352 C 31.849 68.066 31.627 68.047 30.934 68.195 C 29.94 68.408 28.655 69.051 28.132 69.597 C 27.743 70.004 27.723 70.007 27.301 69.758 C 27.064 69.618 26.869 69.451 26.869 69.387 C 26.869 69.229 24.648 68.2 24.155 68.13 C 23.936 68.099 23.416 68.163 22.998 68.273 Z M 100.697 70.31 C 102 70.92 102.073 71.086 102.041 73.363 C 101.985 77.356 101.863 79.717 101.638 81.168 C 101.51 81.996 101.405 82.953 101.405 83.294 C 101.405 83.636 101.334 84.154 101.248 84.446 C 101.162 84.738 101.055 85.25 101.011 85.584 C 100.967 85.918 100.895 86.293 100.85 86.419 C 100.805 86.544 100.749 86.938 100.724 87.296 C 100.7 87.653 100.607 88.131 100.518 88.358 C 100.429 88.586 100.141 89.614 99.878 90.644 C 99.615 91.673 99.305 92.698 99.189 92.921 C 99.073 93.143 98.978 93.409 98.977 93.51 C 98.976 93.791 98.481 94.768 98.341 94.768 C 98.273 94.768 98.217 94.847 98.217 94.943 C 98.217 95.04 98.046 95.342 97.838 95.616 C 97.225 96.419 97.441 97.349 98.29 97.562 C 98.856 97.704 99.322 97.322 100.093 96.084 C 100.937 94.726 101.461 93.33 102.18 90.517 C 102.361 89.808 102.566 89.112 102.635 88.971 C 102.761 88.716 102.986 87.548 103.214 85.963 C 103.28 85.504 103.412 84.936 103.508 84.702 C 103.603 84.467 103.673 83.955 103.663 83.563 C 103.652 83.172 103.721 82.1 103.816 81.181 C 104.026 79.139 104.111 78.013 104.21 75.944 C 104.324 73.579 104.511 72.586 105.005 71.72 C 105.781 70.361 106.804 69.854 108.145 70.165 C 108.77 70.31 108.985 70.447 109.261 70.878 C 109.449 71.171 109.602 71.529 109.602 71.672 C 109.602 71.816 109.711 72.341 109.843 72.838 C 110.089 73.763 110.186 76.394 110.006 77.234 C 109.952 77.485 109.837 78.68 109.749 79.891 C 109.574 82.33 109.227 85.813 109.01 87.326 C 108.932 87.867 108.893 88.35 108.924 88.4 C 109.008 88.535 108.58 90.928 108.302 91.883 C 107.898 93.269 106.833 95.864 106.382 96.559 C 105.822 97.423 105.818 98.143 106.37 98.655 C 106.85 99.1 107.397 99.047 107.814 98.516 C 108.098 98.153 108.833 96.676 109.15 95.83 C 109.26 95.538 109.404 95.226 109.471 95.137 C 109.614 94.947 110.356 92.794 110.279 92.794 C 110.25 92.794 110.358 92.409 110.521 91.938 C 110.683 91.467 110.887 90.459 110.974 89.699 C 111.061 88.938 111.198 87.818 111.278 87.209 C 111.358 86.601 111.426 85.747 111.428 85.312 C 111.43 84.877 111.498 84.248 111.58 83.914 C 111.662 83.58 111.764 82.692 111.808 81.94 C 111.98 79.003 112.018 78.578 112.166 77.918 C 112.25 77.542 112.318 76.709 112.318 76.067 C 112.318 75.426 112.384 74.64 112.464 74.322 C 112.545 74.003 112.607 73.25 112.602 72.647 C 112.597 71.946 112.667 71.463 112.796 71.308 C 113.455 70.513 115.586 70.079 116.417 70.57 C 117 70.914 117.648 71.858 117.648 72.365 C 117.648 72.57 117.707 72.774 117.778 72.819 C 117.85 72.863 117.959 73.294 118.021 73.776 C 118.45 77.112 118.331 81.168 117.706 84.503 C 117.501 85.598 117.316 86.631 117.294 86.798 C 117.272 86.965 117.212 87.272 117.161 87.481 C 117.109 87.69 116.99 88.271 116.895 88.771 C 116.668 89.979 116.281 91.582 116.126 91.959 C 116.057 92.126 115.867 92.673 115.704 93.174 C 115.105 95.01 113.983 97.517 113.642 97.781 C 113.378 97.984 112.026 98.679 111.272 98.998 C 110.896 99.157 110.213 99.447 109.754 99.641 C 108.196 100.301 106.641 101.707 105.404 103.572 C 104.198 105.391 103.787 107.172 104.449 107.708 C 105.161 108.285 106.008 107.923 106.262 106.932 C 106.487 106.056 106.692 105.6 107.132 105 C 107.322 104.742 107.478 104.469 107.479 104.393 C 107.483 104.028 110.015 101.751 110.416 101.751 C 110.543 101.751 110.683 101.692 110.727 101.621 C 110.771 101.55 111.271 101.337 111.837 101.149 C 112.403 100.96 113.037 100.649 113.246 100.457 C 113.454 100.264 113.898 100.034 114.232 99.944 C 115.102 99.711 115.588 99.224 115.992 98.183 C 116.186 97.682 116.471 97.086 116.625 96.858 C 116.779 96.63 117.143 95.742 117.433 94.885 C 117.723 94.027 118.015 93.223 118.082 93.098 C 118.257 92.772 119.915 85.486 119.913 85.052 C 119.911 84.548 120.242 82.27 120.34 82.111 C 120.397 82.018 120.456 79.884 120.47 77.369 C 120.501 71.79 120.545 71.596 121.878 71.131 C 122.6 70.88 123.157 70.885 123.791 71.15 C 124.553 71.469 124.998 72.515 125.248 74.578 C 125.314 75.121 125.436 75.872 125.521 76.248 C 125.61 76.647 125.651 78.445 125.617 80.574 C 125.549 84.966 125.461 86.144 125.016 88.62 C 124.608 90.89 124.456 91.624 124.242 92.339 C 124.13 92.715 123.891 93.705 123.712 94.54 C 123.532 95.375 123.323 96.178 123.247 96.325 C 123.171 96.472 123.012 96.984 122.894 97.463 C 122.675 98.35 121.97 100.174 121.731 100.473 C 121.658 100.564 121.493 100.94 121.363 101.308 C 121.064 102.159 120.559 103.303 120.094 104.179 C 119.895 104.555 119.533 105.238 119.289 105.698 C 119.046 106.157 118.475 107.087 118.02 107.764 C 117.565 108.441 117.193 109.035 117.193 109.085 C 117.193 109.133 117.013 109.365 116.795 109.599 C 116.576 109.833 116.286 110.195 116.151 110.404 C 115.637 111.196 114.542 112.586 114.012 113.116 C 113.709 113.419 113.371 113.931 113.262 114.253 C 113.152 114.575 112.903 115.088 112.707 115.392 C 112.159 116.246 111.381 117.375 111.034 117.819 C 110.862 118.04 110.628 118.461 110.516 118.753 C 110.403 119.045 110.23 119.387 110.13 119.512 C 109.748 119.991 108.692 122.297 108.692 122.651 C 108.692 122.856 108.627 123.144 108.548 123.292 C 108.335 123.689 108.088 126.93 108.021 130.214 C 107.899 136.112 107.756 138.339 107.492 138.464 C 107.224 138.589 84.739 138.556 80.76 138.424 C 79.382 138.378 77.864 138.343 77.387 138.346 C 76.561 138.351 76.514 138.33 76.412 137.927 C 76.354 137.694 76.39 136.546 76.493 135.376 C 76.711 132.905 76.595 132.087 75.905 131.225 C 75.425 130.625 74.333 128.601 72.862 125.584 C 72.353 124.54 71.843 123.511 71.727 123.298 C 71.611 123.084 71.402 122.401 71.262 121.78 C 71.123 121.158 70.939 120.563 70.853 120.457 C 70.665 120.223 70.164 117.758 69.967 116.096 C 69.635 113.283 69.869 109.077 70.509 106.381 C 70.648 105.796 70.877 104.772 71.019 104.104 C 71.161 103.436 71.325 102.815 71.382 102.724 C 71.44 102.633 71.553 102.292 71.635 101.965 C 71.851 101.096 72.182 100.248 72.385 100.046 C 72.482 99.948 72.562 99.738 72.562 99.578 C 72.562 99.418 72.689 99.039 72.844 98.735 C 72.999 98.432 73.245 97.842 73.392 97.424 C 73.539 97.007 73.795 96.324 73.962 95.906 C 74.129 95.489 74.334 94.874 74.418 94.54 C 74.501 94.206 74.726 93.591 74.917 93.174 C 75.393 92.133 75.898 90.851 76.082 90.214 C 76.166 89.921 76.325 89.58 76.433 89.455 C 76.542 89.329 76.738 88.968 76.869 88.651 C 77.106 88.076 77.107 88.075 77.497 88.331 C 77.999 88.66 79.696 88.544 80.641 88.116 C 81.726 87.625 82.754 86.357 83.344 84.787 C 83.6 84.105 83.863 84.167 83.828 84.9 C 83.787 85.765 83.62 87.245 83.55 87.358 C 83.5 87.44 83.372 87.894 83.267 88.367 C 83.011 89.522 82.132 92.376 81.974 92.566 C 81.761 92.824 79.849 96.571 79.849 96.733 C 79.849 96.816 79.678 97.257 79.469 97.714 C 79.261 98.17 79.088 98.736 79.086 98.971 C 79.084 99.206 79.016 99.671 78.935 100.005 C 78.854 100.339 78.781 101.023 78.774 101.525 C 78.762 102.335 78.833 102.565 79.405 103.556 C 79.759 104.171 80.517 105.151 81.088 105.733 C 81.659 106.315 82.126 106.859 82.126 106.942 C 82.126 107.024 82.471 107.478 82.894 107.95 C 84.057 109.252 85.613 111.704 86.003 112.849 C 86.194 113.411 86.315 113.905 86.273 113.947 C 86.138 114.083 86.39 114.655 86.72 114.963 C 87.049 115.269 87.813 115.356 88.172 115.129 C 88.675 114.809 88.407 112.161 87.799 111.456 C 87.687 111.326 87.514 110.984 87.415 110.697 C 87.317 110.411 86.889 109.676 86.465 109.064 C 86.04 108.453 85.591 107.798 85.466 107.609 C 85.127 107.097 84.37 106.136 84.012 105.762 C 83.838 105.581 83.544 105.236 83.359 104.996 C 83.173 104.756 82.677 104.205 82.257 103.773 L 81.493 102.986 L 81.925 102.763 C 82.163 102.64 82.698 102.492 83.115 102.436 C 84.242 102.281 85.148 101.909 85.997 101.251 C 87.5 100.087 87.783 99.842 88.479 99.103 C 88.867 98.69 89.321 98.207 89.488 98.03 C 90.342 97.125 90.963 96.222 91.452 95.179 C 91.75 94.543 91.993 93.951 91.993 93.864 C 91.993 93.777 92.052 93.705 92.124 93.705 C 92.196 93.705 92.379 93.381 92.529 92.984 C 92.68 92.588 92.932 92.033 93.089 91.752 C 93.246 91.471 93.344 91.21 93.307 91.173 C 93.27 91.137 93.375 90.752 93.539 90.319 C 93.704 89.885 93.931 89.155 94.044 88.696 C 94.157 88.236 94.46 87.007 94.718 85.963 C 94.975 84.919 95.256 83.587 95.341 83.003 C 95.426 82.419 95.561 81.77 95.64 81.561 C 95.775 81.205 95.863 80.401 96.018 78.1 C 96.053 77.575 96.132 77.064 96.193 76.966 C 96.253 76.868 96.289 76.608 96.273 76.388 C 96.23 75.833 96.609 74.102 97.051 72.831 C 97.563 71.359 98.202 70.336 98.672 70.235 C 98.881 70.19 99.189 70.095 99.356 70.023 C 99.523 69.951 99.682 69.888 99.711 69.882 C 99.739 69.876 100.183 70.069 100.697 70.31 Z M 24.611 70.631 C 25.994 71.047 26.81 72.606 26.946 75.091 C 27.218 80.077 27.355 82.04 27.483 82.765 C 27.563 83.219 27.628 83.94 27.628 84.367 C 27.628 84.794 27.696 85.211 27.779 85.294 C 27.862 85.377 27.966 85.818 28.01 86.274 C 28.134 87.558 28.393 88.872 28.606 89.296 C 28.713 89.509 28.84 89.99 28.89 90.365 C 28.996 91.169 29.313 92.254 29.933 93.933 C 30.505 95.481 30.91 96.275 31.58 97.167 C 32.023 97.755 32.213 97.888 32.667 97.926 C 33.098 97.962 33.268 97.898 33.458 97.627 C 33.855 97.061 33.753 96.496 33.095 95.605 C 32.431 94.706 31.49 92.124 31.05 89.992 C 30.913 89.327 30.736 88.705 30.656 88.61 C 30.577 88.515 30.48 88.034 30.441 87.541 C 30.402 87.049 30.297 86.305 30.208 85.887 C 30.119 85.47 29.977 84.616 29.892 83.99 C 29.807 83.363 29.67 82.441 29.587 81.94 C 29.345 80.48 29.285 79.433 29.219 75.514 C 29.15 71.42 29.174 71.292 30.103 70.925 C 30.37 70.819 30.708 70.631 30.855 70.506 C 31.08 70.314 31.247 70.308 31.935 70.461 C 33.123 70.727 33.45 71.172 34.252 73.621 C 34.777 75.225 34.928 76.12 35.228 79.436 C 35.323 80.479 35.496 81.609 35.613 81.945 C 35.73 82.282 35.825 82.795 35.824 83.084 C 35.823 83.618 36.501 86.849 36.732 87.405 C 36.801 87.572 36.975 88.187 37.119 88.771 C 37.681 91.058 38.078 92.108 39.325 94.616 C 39.637 95.242 39.942 95.925 40.004 96.134 C 40.126 96.545 40.911 97.553 42.12 98.853 C 43.277 100.097 43.542 100.339 44.858 101.356 C 46.056 102.281 47.044 102.715 48.281 102.86 C 48.578 102.895 49.018 103.028 49.261 103.155 L 49.702 103.386 L 49.177 103.898 C 48.487 104.572 46.472 106.959 45.863 107.823 C 44.769 109.374 43.719 111.019 43.719 111.181 C 43.719 111.276 43.589 111.567 43.429 111.828 C 42.975 112.569 42.612 114.012 42.706 114.708 C 42.799 115.4 43.121 115.717 43.735 115.717 C 44.237 115.717 44.934 114.957 44.934 114.41 C 44.934 113.821 45.523 112.226 45.99 111.551 C 46.225 111.212 46.674 110.536 46.99 110.048 C 47.305 109.56 47.894 108.799 48.298 108.357 C 48.702 107.914 49.033 107.486 49.033 107.404 C 49.033 107.323 49.575 106.683 50.238 105.983 C 51.028 105.15 51.63 104.339 51.984 103.634 C 52.543 102.519 52.634 101.905 52.374 100.997 C 52.291 100.708 52.183 100.094 52.133 99.631 C 52.083 99.169 51.877 98.43 51.676 97.989 C 51.475 97.548 51.31 97.094 51.31 96.979 C 51.31 96.864 51.082 96.368 50.805 95.877 C 48.956 92.606 47.923 89.724 47.483 86.61 C 47.357 85.718 47.452 83.672 47.594 84.217 C 48.073 86.057 48.961 87.495 50.083 88.249 C 50.984 88.854 53.096 89.155 53.695 88.764 C 54.139 88.474 54.127 88.469 54.352 89.037 C 54.46 89.308 54.631 89.633 54.732 89.758 C 54.834 89.883 54.964 90.157 55.022 90.365 C 55.137 90.782 55.889 92.67 56.322 93.629 C 56.473 93.963 56.797 94.851 57.043 95.603 C 57.668 97.512 57.981 98.357 58.421 99.322 C 58.63 99.781 58.865 100.328 58.943 100.536 C 59.02 100.745 59.174 101.121 59.285 101.371 C 59.396 101.622 59.527 101.997 59.578 102.206 C 59.628 102.415 59.735 102.825 59.815 103.117 C 60.007 103.818 60.742 106.904 60.809 107.292 C 61.413 110.775 61.502 111.807 61.422 114.409 C 61.366 116.212 61.268 117.218 61.101 117.69 C 60.969 118.064 60.822 118.781 60.773 119.283 C 60.725 119.784 60.57 120.4 60.428 120.65 C 60.287 120.901 60.081 121.55 59.971 122.092 C 59.835 122.766 59.283 124.058 58.235 126.158 C 55.928 130.783 55.828 130.968 55.282 131.647 C 54.512 132.605 54.399 133.805 54.808 136.689 C 54.944 137.648 54.874 138.632 54.668 138.645 C 51.632 138.845 40.799 138.966 29.491 138.926 L 23.536 138.905 L 23.449 138.43 C 23.402 138.17 23.371 137.58 23.382 137.121 C 23.393 136.662 23.355 135.466 23.3 134.464 C 23.244 133.463 23.176 131.585 23.15 130.291 C 23.081 126.944 22.946 125.07 22.679 123.762 C 22.394 122.369 20.748 118.951 19.706 117.588 C 18.964 116.619 17.761 114.526 17.761 114.205 C 17.761 114.105 17.457 113.719 17.085 113.347 C 16.358 112.62 15.029 110.932 15.029 110.736 C 15.029 110.67 14.792 110.381 14.502 110.093 C 14.212 109.804 13.973 109.519 13.971 109.458 C 13.968 109.397 13.612 108.821 13.18 108.177 C 12.748 107.534 12.198 106.628 11.957 106.163 C 11.717 105.698 11.387 105.079 11.225 104.787 C 10.801 104.025 10.019 102.328 10.019 102.17 C 10.019 102.096 9.853 101.681 9.65 101.248 C 8.852 99.541 8.539 98.748 8.353 97.951 C 8.246 97.494 8.073 96.95 7.968 96.741 C 7.812 96.428 7.499 95.081 7.211 93.477 C 7.181 93.31 7.05 92.866 6.921 92.491 C 6.791 92.115 6.577 91.124 6.445 90.29 C 6.313 89.455 6.133 88.499 6.045 88.165 C 5.958 87.832 5.863 87.081 5.835 86.496 C 5.808 85.911 5.738 85.056 5.681 84.597 C 5.318 81.677 5.756 74.232 6.369 72.916 C 6.814 71.96 6.965 71.747 7.324 71.574 C 7.836 71.328 9.075 71.296 9.301 71.522 C 9.395 71.616 9.59 71.694 9.733 71.694 C 9.877 71.694 10.154 71.95 10.348 72.263 C 10.694 72.819 10.703 72.923 10.727 76.931 C 10.756 81.805 10.913 83.568 11.619 86.95 C 11.758 87.618 11.934 88.574 12.009 89.075 C 12.084 89.576 12.206 90.157 12.281 90.365 C 12.356 90.574 12.536 91.291 12.682 91.959 C 12.827 92.627 12.998 93.242 13.062 93.326 C 13.125 93.409 13.327 93.973 13.511 94.578 C 13.694 95.184 13.906 95.717 13.981 95.764 C 14.056 95.81 14.117 95.964 14.117 96.105 C 14.116 96.551 15.777 99.736 16.132 99.967 C 16.318 100.089 16.641 100.242 16.85 100.307 C 17.059 100.372 17.663 100.685 18.192 101.003 C 18.721 101.321 19.37 101.627 19.634 101.684 C 20.309 101.83 21.212 102.309 22.012 102.946 C 22.803 103.576 23.681 104.497 23.681 104.697 C 23.681 104.772 23.837 105.045 24.026 105.304 C 24.466 105.904 24.669 106.351 24.921 107.277 C 25.088 107.888 25.212 108.058 25.619 108.228 C 26.046 108.407 26.176 108.404 26.566 108.203 C 26.814 108.074 27.058 107.803 27.11 107.599 C 27.366 106.578 25.818 103.535 24.299 102.073 C 22.75 100.583 22.673 100.535 19.886 99.335 C 17.479 98.298 17.573 98.384 16.537 96.252 C 16.118 95.39 15.901 94.821 15.535 93.629 C 15.407 93.212 15.207 92.689 15.09 92.467 C 14.973 92.246 14.877 91.888 14.877 91.673 C 14.877 91.458 14.781 91.025 14.664 90.71 C 14.546 90.395 14.371 89.694 14.273 89.151 C 14.175 88.608 14.054 87.993 14.004 87.785 C 13.954 87.576 13.894 87.269 13.873 87.102 C 13.851 86.935 13.796 86.627 13.751 86.419 C 13.094 83.35 12.877 80.941 12.971 77.766 C 13.066 74.545 13.196 73.363 13.495 73.003 C 13.601 72.874 13.646 72.701 13.594 72.616 C 13.453 72.389 14.26 71.251 14.736 71.005 C 15.324 70.7 16.334 70.561 16.461 70.766 C 16.518 70.859 16.7 70.935 16.865 70.935 C 17.304 70.935 18.311 71.485 18.452 71.801 C 18.518 71.951 18.591 72.235 18.614 72.432 C 18.638 72.63 18.687 72.822 18.725 72.86 C 18.763 72.898 18.729 73.162 18.65 73.447 C 18.557 73.785 18.562 74.171 18.665 74.553 C 18.752 74.876 18.857 75.832 18.898 76.679 C 18.94 77.526 19.044 78.531 19.129 78.913 C 19.215 79.295 19.282 79.859 19.279 80.167 C 19.269 81.193 19.382 82.688 19.551 83.762 C 19.643 84.346 19.753 85.371 19.796 86.039 C 19.975 88.818 20.229 90.638 20.646 92.111 C 20.74 92.445 20.874 92.957 20.944 93.25 C 21.297 94.726 22.877 98.308 23.516 99.078 C 23.795 99.414 24.53 99.384 24.892 99.022 C 25.411 98.503 25.417 98.067 24.915 97.177 C 24.296 96.078 23.179 93.282 22.801 91.883 C 22.479 90.691 22.362 89.98 22.239 88.468 C 22.104 86.801 21.845 84.389 21.615 82.661 C 21.49 81.721 21.418 80.901 21.456 80.839 C 21.493 80.777 21.431 79.94 21.318 78.98 C 21.009 76.368 21.04 74.353 21.413 72.948 C 21.871 71.226 22.102 70.848 22.835 70.628 C 23.175 70.526 23.522 70.422 23.605 70.397 C 23.689 70.372 23.86 70.387 23.985 70.431 C 24.11 70.475 24.392 70.565 24.611 70.631 Z M 81.488 83.018 C 81.488 83.661 81.103 84.59 80.48 85.451 C 80.099 85.977 79.912 86.093 79.22 86.232 C 77.903 86.495 77.904 86.254 79.229 84.293 C 79.837 83.393 80.879 82.485 81.314 82.475 C 81.414 82.473 81.488 82.705 81.488 83.018 Z M 50.814 83.379 C 51.384 83.841 52.418 85.178 52.845 86.004 C 53.203 86.696 53.05 86.813 51.995 86.654 C 51.465 86.575 51.218 86.432 50.861 86 C 50.036 84.998 49.533 83.519 49.78 82.818 C 49.814 82.721 50.385 83.03 50.814 83.379 Z",
    fill: "currentColor",
    fillRule: "evenodd"
  })));
  const __body1 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 128,
      height: 141.302,
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 122.300,
    height: 71.803,
    viewBox: "0 0 122.300 71.803",
    fill: "none",
    style: {
      position: "absolute",
      left: 4.32,
      top: 68.354,
      width: 122.3,
      height: 71.803,
      color: "rgb(167,93,50)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 18.147 71.803 L 16.401 54.042 C 11.923 46.73 2.769 31.378 1.98 28.463 C 0.993 24.82 -0.601 10.171 0.234 6.755 C 1.069 3.34 2.207 1.973 4.181 2.125 C 5.76 2.247 7.369 3.643 7.976 4.326 C 8.33 3.39 9.494 1.488 11.316 1.366 C 13.137 1.245 15.111 2.884 15.87 3.719 C 16.275 2.808 17.494 0.987 19.134 0.987 C 20.773 0.987 22.65 2.555 23.384 3.34 C 23.915 2.555 25.403 0.987 27.103 0.987 C 29.228 0.987 31.126 2.581 31.354 5.313 C 31.581 8.046 33.175 19.507 35.377 24.213 C 37.578 28.919 41.221 32.562 44.485 33.549 C 45.922 33.983 46.582 34.192 46.834 34.28 C 46.525 31.835 45.372 26.143 43.194 22.695 C 40.462 18.368 41.752 14.953 43.574 13.662 C 45.396 12.372 47.749 13.966 48.508 15.939 C 49.267 17.913 55.642 30.057 56.477 33.549 C 57.312 37.04 59.362 45.086 57.919 49.564 C 56.766 53.146 53.289 61.228 51.695 64.82 L 51.695 71.803 L 18.147 71.803 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 70.823 64.82 L 70.823 70.741 L 103.916 70.741 C 104.321 69.779 105.1 66.672 104.979 61.936 C 104.857 57.2 106.041 53.283 106.648 51.917 C 109.786 47.666 116.607 37.86 118.793 32.638 C 121.525 26.11 122.436 12.752 122.284 8.653 C 122.132 4.554 121.373 1.366 118.793 1.366 C 116.728 1.366 115.402 3.34 114.998 4.326 C 114.745 3.213 113.601 0.987 111.051 0.987 C 108.5 0.987 107.053 2.555 106.648 3.34 C 106.244 2.226 104.979 0 103.157 0 C 101.335 0 99.868 2.226 99.362 3.34 C 99.21 2.555 98.147 0.987 95.111 0.987 C 91.316 0.987 90.709 8.956 90.102 14.573 C 89.495 20.19 84.94 28.463 82.208 30.968 C 80.022 32.972 76.844 32.916 75.529 32.638 C 76.288 30.411 78.079 25.306 79.172 22.695 C 80.538 19.431 81.297 15.939 79.172 13.662 C 77.472 11.841 74.719 14.421 73.555 15.939 C 72.644 18.697 70.215 25.063 67.787 28.463 C 64.751 32.714 64.751 45.541 64.599 49.564 C 64.477 52.782 68.697 61.076 70.823 64.82 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 60.570,
    height: 28.236,
    viewBox: "0 0 60.570 28.236",
    fill: "none",
    style: {
      position: "absolute",
      left: 11.385,
      top: 12.186,
      width: 60.57,
      height: 28.236,
      color: "rgb(93,240,205)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 12.6 2.581 L 7.742 0 C 6.528 4.979 2.075 6.224 0 6.224 L 1.822 11.689 C 3.137 11.436 6.163 10.657 7.742 9.564 C 9.321 8.471 11.638 4.453 12.6 2.581 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 58.141 27.476 L 52.069 28.236 C 50.247 20.099 53.435 15.231 55.257 13.814 L 60.57 17.457 C 60.165 17.963 59.112 19.492 58.141 21.556 C 57.169 23.621 57.736 26.363 58.141 27.476 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 101.709,
    height: 50.247,
    viewBox: "0 0 101.709 50.247",
    fill: "none",
    style: {
      position: "absolute",
      left: 1.67,
      top: 16.589,
      width: 101.709,
      height: 50.247,
      color: "rgb(255,223,111)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 5.161 23.833 C 5.161 25.258 4.006 26.414 2.581 26.414 C 1.155 26.414 0 25.258 0 23.833 C 0 22.408 1.155 21.253 2.581 21.253 C 4.006 21.253 5.161 22.408 5.161 23.833 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 42.657 10.778 C 42.657 12.203 41.501 13.359 40.076 13.359 C 38.651 13.359 37.496 12.203 37.496 10.778 C 37.496 9.353 38.651 8.197 40.076 8.197 C 41.501 8.197 42.657 9.353 42.657 10.778 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 53.283 47.666 C 53.283 49.092 52.128 50.247 50.702 50.247 C 49.277 50.247 48.122 49.092 48.122 47.666 C 48.122 46.241 49.277 45.086 50.702 45.086 C 52.128 45.086 53.283 46.241 53.283 47.666 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 83.34 35.826 C 83.34 37.251 82.185 38.406 80.76 38.406 C 79.334 38.406 78.179 37.251 78.179 35.826 C 78.179 34.4 79.334 33.245 80.76 33.245 C 82.185 33.245 83.34 34.4 83.34 35.826 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 101.709 27.932 C 101.709 29.357 100.553 30.513 99.128 30.513 C 97.703 30.513 96.547 29.357 96.547 27.932 C 96.547 26.507 97.703 25.351 99.128 25.351 C 100.553 25.351 101.709 26.507 101.709 27.932 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 90.627 2.581 C 90.627 4.006 89.471 5.161 88.046 5.161 C 86.621 5.161 85.466 4.006 85.466 2.581 C 85.466 1.155 86.621 0 88.046 0 C 89.471 0 90.627 1.155 90.627 2.581 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 51.613,
    height: 57.318,
    viewBox: "0 0 51.613 57.318",
    fill: "none",
    style: {
      position: "absolute",
      left: 63.909,
      top: 17.803,
      width: 51.613,
      height: 57.318,
      color: "rgb(252,83,83)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 54.801 L 1.214 49.64 C 6.922 52.433 9.968 49.387 10.778 47.515 L 15.18 52.828 C 14.27 53.486 11.628 55.196 8.349 56.775 C 5.07 58.353 1.417 56.117 0 54.801 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 44.327 6.224 C 45.177 4.281 45.794 1.265 45.997 0 L 51.613 2.429 C 50.551 4.149 48.486 7.894 48.729 9.108 C 48.972 10.323 49.741 12.549 50.095 13.511 L 44.327 13.511 C 43.972 11.891 43.477 8.167 44.327 6.224 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 98.986,
    height: 58.141,
    viewBox: "0 0 98.986 58.141",
    fill: "none",
    style: {
      position: "absolute",
      left: 24.289,
      top: 0.346,
      width: 98.986,
      height: 58.141,
      color: "rgb(204,173,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 23.681 4.858 L 27.173 0 C 28.944 1.872 32.547 6.862 32.79 11.841 C 29.709 12.59 27.907 12.928 27.133 13.081 C 27.146 13.124 27.16 13.166 27.173 13.207 C 26.556 13.207 26.496 13.207 27.133 13.081 C 26.545 11.149 26.057 6.996 23.681 4.858 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 8.653 41.139 L 3.947 38.558 C -0.759 43.112 1.822 46.604 1.822 49.033 C 1.822 50.976 0.607 53.081 0 53.89 C 1.366 54.649 2.732 54.649 5.01 55.408 C 8.349 50.854 6.376 47.666 6.072 45.541 C 5.829 43.841 7.691 41.898 8.653 41.139 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 98.065 45.541 L 92.6 45.541 C 91.75 49.67 92.955 55.661 93.663 58.141 L 98.976 57.23 C 99.027 56.623 98.915 54.832 98.065 52.524 C 97.215 50.217 97.711 46.907 98.065 45.541 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 128,
    height: 141.302,
    viewBox: "0 0 128 141.302",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 128,
      height: 141.302,
      color: "rgb(0,0,0)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 49.298 1.645 C 48.442 2.577 47.54 3.591 47.293 3.898 C 47.046 4.206 46.815 4.487 46.779 4.522 C 46.744 4.557 46.695 4.769 46.67 4.993 C 46.617 5.476 46.85 5.858 47.808 6.863 C 48.209 7.283 48.602 7.876 48.703 8.212 C 48.801 8.541 48.984 8.896 49.109 8.999 C 49.234 9.103 49.336 9.283 49.336 9.399 C 49.336 9.515 49.4 9.729 49.477 9.874 C 49.84 10.552 50.095 11.819 50.095 12.938 C 50.095 14.117 50.115 14.186 50.603 14.718 L 51.111 15.272 L 51.855 15.101 C 52.265 15.007 52.976 14.852 53.435 14.758 C 53.894 14.663 54.562 14.455 54.919 14.297 C 55.276 14.138 55.673 14.008 55.802 14.008 C 56.188 14.008 57.589 13.308 57.904 12.958 C 58.155 12.679 58.194 12.433 58.165 11.325 C 58.146 10.608 58.071 9.91 57.998 9.775 C 57.926 9.639 57.722 8.923 57.547 8.183 C 57.371 7.443 57.12 6.589 56.989 6.286 C 56.159 4.362 55.736 3.71 54.565 2.547 C 52.536 0.533 51.969 0.081 51.386 0.013 C 50.877 -0.046 50.786 0.025 49.298 1.645 Z M 52.495 4.103 C 53.053 4.666 53.674 5.367 53.877 5.659 C 54.377 6.382 54.938 7.93 55.196 9.295 C 55.314 9.918 55.478 10.495 55.561 10.578 C 55.644 10.661 55.712 10.88 55.712 11.063 C 55.712 11.399 55.105 11.731 54.493 11.731 C 54.349 11.731 54.142 11.838 54.033 11.969 C 53.919 12.107 53.707 12.174 53.529 12.127 C 53.361 12.083 53.137 12.119 53.032 12.206 C 52.732 12.455 52.524 12.218 52.524 11.629 C 52.524 11.332 52.424 10.772 52.301 10.385 C 52.178 9.998 52.002 9.368 51.908 8.984 C 51.815 8.6 51.58 8.102 51.387 7.877 C 51.194 7.652 50.944 7.156 50.831 6.774 C 50.705 6.346 50.431 5.908 50.118 5.633 L 49.61 5.187 L 50.037 4.571 C 50.272 4.232 50.552 3.921 50.659 3.88 C 50.767 3.838 50.854 3.734 50.854 3.648 C 50.854 3.516 51.282 3.098 51.434 3.083 C 51.46 3.08 51.938 3.539 52.495 4.103 Z M 101.936 5.388 C 101.769 5.484 101.542 5.653 101.432 5.763 C 101.322 5.873 101.179 5.963 101.115 5.963 C 100.907 5.963 100.646 6.721 100.646 7.324 C 100.646 8.358 101.935 9.515 102.659 9.13 C 103.108 8.891 103.368 8.538 103.374 8.16 C 103.376 7.99 103.488 7.696 103.621 7.505 C 104.033 6.917 103.862 5.683 103.318 5.32 C 103.065 5.151 102.279 5.19 101.936 5.388 Z M 37.564 8.525 C 36.744 8.691 36.28 9.192 36.184 10.012 C 36.113 10.616 36.156 10.817 36.428 11.162 C 36.61 11.391 36.895 11.579 37.061 11.579 C 37.228 11.579 37.479 11.638 37.619 11.71 C 37.76 11.782 38.12 11.81 38.42 11.772 C 39.297 11.662 39.778 10.528 39.246 9.825 C 39.123 9.663 39.021 9.422 39.018 9.291 C 39.013 9.024 38.391 8.38 38.169 8.411 C 38.091 8.422 37.818 8.474 37.564 8.525 Z M 72.41 9.669 C 72.004 9.815 71.762 10.068 71.383 10.741 C 70.865 11.66 70.854 12.003 71.328 12.496 C 71.72 12.903 72.665 13.013 73.135 12.705 C 73.698 12.336 74.293 11.595 74.395 11.137 C 74.499 10.664 74.207 10.015 73.744 9.691 C 73.347 9.413 73.129 9.41 72.41 9.669 Z M 18.529 11.115 C 18.366 11.278 18.191 11.67 18.139 11.988 C 18.051 12.522 17.917 12.821 16.993 14.553 C 16.794 14.926 16.442 15.287 16.111 15.459 C 15.808 15.616 15.375 15.893 15.149 16.075 C 14.923 16.258 14.275 16.556 13.708 16.739 C 12.886 17.005 12.489 17.051 11.739 16.971 C 10.629 16.852 10.269 17 10.035 17.671 C 9.812 18.312 9.813 18.322 10.223 18.816 C 10.591 19.26 10.863 20.376 11.054 22.228 C 11.119 22.853 11.259 23.348 11.424 23.53 C 11.57 23.692 11.689 23.904 11.689 24.003 C 11.689 24.102 11.91 24.318 12.181 24.483 C 13.162 25.079 16.265 24.72 18.331 23.77 C 19.439 23.26 21.409 21.887 21.54 21.532 C 21.573 21.443 21.874 21.115 22.208 20.804 C 22.777 20.273 23.081 19.864 23.31 19.321 C 23.425 19.047 23.935 17.902 24.222 17.272 C 24.336 17.021 24.577 16.381 24.757 15.849 C 25.203 14.529 25.044 14.007 23.926 13.136 C 23.472 12.782 22.94 12.42 22.746 12.332 C 22.551 12.243 22.118 12.004 21.784 11.8 C 20.088 10.765 19.089 10.555 18.529 11.115 Z M 21.011 14.236 C 21.285 14.445 21.614 14.615 21.742 14.615 C 22.182 14.615 22.299 14.952 22.112 15.685 C 22.015 16.065 21.831 16.543 21.703 16.748 C 21.575 16.953 21.284 17.51 21.056 17.987 C 20.812 18.498 20.393 19.054 20.039 19.339 C 19.708 19.605 19.395 19.954 19.344 20.115 C 19.293 20.275 18.967 20.536 18.62 20.694 C 18.273 20.853 17.697 21.155 17.339 21.366 C 16.982 21.577 16.56 21.75 16.4 21.75 C 16.24 21.75 16.073 21.809 16.028 21.881 C 15.873 22.132 14.661 22.367 14.194 22.237 C 13.793 22.125 13.717 22.012 13.563 21.285 C 13.467 20.831 13.381 20.239 13.373 19.969 C 13.361 19.552 13.421 19.465 13.776 19.388 C 14.761 19.174 16.992 18.033 17.682 17.39 C 17.851 17.233 18.203 16.955 18.465 16.772 C 18.897 16.471 19.387 15.71 20.022 14.35 C 20.3 13.757 20.372 13.748 21.011 14.236 Z M 90.118 15.478 C 90.061 15.536 89.703 15.567 89.322 15.547 C 88.008 15.479 86.328 16.885 85.853 18.45 C 85.49 19.649 85.7 20.531 86.575 21.478 C 87.477 22.454 88.347 22.86 89.567 22.876 C 90.445 22.887 90.607 22.842 91.008 22.471 C 91.256 22.242 91.515 22.054 91.584 22.054 C 91.74 22.054 92.752 20.993 92.752 20.829 C 92.752 20.763 92.864 20.597 93.001 20.46 C 93.397 20.064 93.355 18.645 92.922 17.765 C 92.426 16.759 91.081 15.374 90.599 15.374 C 90.392 15.374 90.175 15.421 90.118 15.478 Z M 109.652 16.539 C 109.21 16.63 108.54 17.318 108.54 17.681 C 108.54 17.841 108.617 18.281 108.712 18.658 C 108.846 19.19 108.841 19.475 108.688 19.939 C 108.58 20.267 108.441 20.536 108.38 20.536 C 108.319 20.536 108.165 20.792 108.038 21.105 C 107.911 21.418 107.507 22.023 107.14 22.449 C 106.634 23.038 106.427 23.438 106.28 24.119 C 106.173 24.611 105.989 25.438 105.871 25.956 C 105.574 27.253 105.597 27.655 106.043 29.033 C 106.721 31.129 107.471 32.336 108.16 32.444 C 109.469 32.65 110.7 32.674 111.652 32.513 C 112.236 32.415 113.121 32.318 113.617 32.298 C 114.407 32.267 114.563 32.208 114.868 31.826 C 115.167 31.453 115.215 31.224 115.203 30.251 C 115.189 29.192 115.152 29.068 114.672 28.48 C 114.389 28.132 114.156 27.751 114.156 27.633 C 114.156 27.516 113.986 27.259 113.777 27.063 C 113.163 26.486 113.344 25.606 114.309 24.483 C 114.56 24.19 114.804 23.832 114.851 23.686 C 114.898 23.54 114.984 23.42 115.043 23.42 C 115.178 23.42 115.52 22.725 116.036 21.398 C 116.382 20.512 116.417 20.28 116.284 19.784 C 116.093 19.074 116.03 19.023 114.612 18.411 C 113.986 18.141 113.354 17.815 113.208 17.686 C 113.061 17.558 112.942 17.502 112.942 17.562 C 112.942 17.622 112.686 17.531 112.373 17.361 C 111.304 16.78 110.163 16.435 109.652 16.539 Z M 90.345 18.561 C 90.583 18.811 90.779 19.091 90.779 19.183 C 90.779 19.485 89.755 20.384 89.413 20.384 C 89.076 20.384 88.198 19.582 88.198 19.275 C 88.198 19.183 88.416 18.883 88.683 18.607 C 89.294 17.978 89.774 17.964 90.345 18.561 Z M 112.259 19.999 C 112.426 20.088 112.767 20.293 113.018 20.454 C 113.268 20.616 113.495 20.761 113.522 20.779 C 113.548 20.796 113.505 20.936 113.426 21.09 C 113.347 21.244 113.136 21.688 112.957 22.076 C 112.779 22.464 112.479 22.882 112.291 23.005 C 112.103 23.128 111.804 23.563 111.627 23.97 C 110.816 25.832 110.773 25.985 110.869 26.68 C 110.972 27.435 111.455 28.495 111.782 28.687 C 111.896 28.754 112.1 29.024 112.234 29.287 C 112.471 29.75 112.468 29.767 112.141 29.845 C 111.432 30.012 109.775 30.127 109.468 30.029 C 109.092 29.91 108.379 28.47 108.303 27.677 C 108.276 27.389 108.379 26.511 108.533 25.727 C 108.748 24.638 108.907 24.205 109.208 23.891 C 109.425 23.664 109.604 23.415 109.607 23.336 C 109.609 23.257 109.814 22.924 110.062 22.596 C 110.31 22.268 110.513 21.918 110.513 21.818 C 110.513 21.717 110.617 21.55 110.743 21.445 C 110.869 21.34 110.956 21.178 110.936 21.085 C 110.916 20.991 111.016 20.627 111.159 20.274 C 111.429 19.605 111.494 19.589 112.259 19.999 Z M 40.74 24.009 C 40.588 24.186 40.411 24.331 40.346 24.331 C 40.282 24.331 39.902 24.565 39.503 24.852 C 38.94 25.256 38.714 25.548 38.498 26.149 C 38.044 27.412 38.059 27.787 38.616 29.113 C 39.058 30.166 39.228 30.4 39.902 30.877 C 40.594 31.366 41.09 31.535 42.338 31.704 C 42.868 31.776 43.392 31.453 44.291 30.502 C 45.26 29.477 45.372 29.202 45.423 27.707 C 45.473 26.275 45.214 25.659 44.221 24.846 C 43.486 24.244 42.71 23.918 41.667 23.775 C 41.125 23.701 40.97 23.74 40.74 24.009 Z M 66.128 24.713 C 65.888 24.838 65.414 25.256 65.075 25.641 C 64.087 26.763 63.541 27.818 62.848 29.948 C 62.59 30.741 62.308 31.516 62.223 31.67 C 61.993 32.084 61.698 33.868 61.729 34.653 C 61.819 36.893 62.302 39.624 62.68 40.028 C 62.843 40.203 63.021 40.529 63.077 40.752 C 63.248 41.443 63.641 41.664 64.821 41.732 C 65.673 41.782 66.047 41.73 66.596 41.487 C 66.979 41.318 67.778 41.141 68.371 41.094 C 70.035 40.963 70.845 40.745 71.097 40.361 C 71.462 39.803 71.445 39.315 71.041 38.749 C 70.834 38.459 70.578 37.983 70.471 37.69 C 70.245 37.068 70.21 35.078 70.418 34.689 C 70.497 34.541 70.7 34.011 70.868 33.512 C 71.193 32.549 72.249 30.826 72.935 30.141 C 73.26 29.816 73.327 29.636 73.257 29.284 C 73.141 28.706 72.937 28.472 72.237 28.115 C 71.921 27.954 71.541 27.696 71.391 27.541 C 71.242 27.387 70.911 27.19 70.656 27.104 C 70.401 27.018 69.957 26.73 69.669 26.463 C 69.382 26.197 68.959 25.88 68.729 25.758 C 68.499 25.637 68.312 25.433 68.312 25.306 C 68.312 25.076 67.228 24.491 66.794 24.487 C 66.668 24.485 66.369 24.587 66.128 24.713 Z M 42.638 26.854 C 42.95 27.073 42.978 27.178 42.885 27.803 C 42.753 28.696 42.433 29.065 41.841 29.006 C 41.476 28.97 41.321 28.828 41.04 28.278 C 40.611 27.435 40.605 27.293 40.987 26.911 C 41.358 26.541 42.151 26.513 42.638 26.854 Z M 67.884 28.319 C 68.385 28.672 69.054 29.135 69.37 29.348 L 69.945 29.734 L 69.434 30.562 C 69.153 31.017 68.881 31.492 68.829 31.617 C 68.777 31.743 68.648 32.05 68.542 32.3 C 67.921 33.765 67.716 34.802 67.673 36.677 C 67.648 37.734 67.594 38.607 67.553 38.617 C 67.511 38.626 67.255 38.66 66.983 38.691 C 66.711 38.723 66.242 38.852 65.94 38.978 C 65.638 39.104 65.333 39.208 65.262 39.208 C 65.098 39.208 64.781 38.616 64.735 38.222 C 64.715 38.054 64.62 37.484 64.523 36.954 C 64.426 36.424 64.348 35.44 64.349 34.767 C 64.351 33.594 64.473 33.014 65.152 30.934 C 65.766 29.053 66.775 27.083 66.913 27.496 C 66.946 27.596 67.383 27.967 67.884 28.319 Z M 83.674 32.486 C 83.46 32.526 83.228 32.754 83.076 33.073 C 82.446 34.392 84.002 35.397 85.006 34.319 C 85.408 33.888 85.396 33.395 84.972 32.928 C 84.599 32.518 84.213 32.386 83.674 32.486 Z M 3.108 36.677 C 2.023 36.992 1.006 37.796 0.48 38.753 C 0.047 39.539 0 39.753 0 40.915 C 0 42.161 0.019 42.231 0.55 42.945 C 1.123 43.716 2.338 44.768 3.02 45.083 C 3.238 45.184 3.797 45.269 4.262 45.273 C 4.954 45.278 5.234 45.197 5.789 44.829 C 6.852 44.126 7.628 43.283 8.173 42.243 C 8.614 41.402 8.664 41.193 8.582 40.513 C 8.409 39.061 8.162 38.402 7.599 37.88 C 6.724 37.071 6.538 36.931 6.338 36.928 C 6.234 36.927 5.875 36.827 5.541 36.707 C 4.815 36.446 3.942 36.435 3.108 36.677 Z M 27.742 37.588 C 27.596 37.704 27.476 37.877 27.476 37.972 C 27.476 38.067 27.319 38.145 27.127 38.145 C 26.647 38.145 25.949 38.937 25.421 40.08 C 25.179 40.602 24.929 41.029 24.863 41.029 C 24.798 41.029 24.744 41.162 24.744 41.324 C 24.744 41.486 24.681 41.658 24.604 41.705 C 24.527 41.753 24.419 41.996 24.364 42.245 C 24.309 42.495 24.213 42.699 24.15 42.699 C 23.725 42.699 23.637 45.894 24.037 46.815 C 24.168 47.116 24.308 47.526 24.349 47.725 C 24.39 47.925 24.525 48.556 24.649 49.127 C 24.774 49.699 24.839 50.279 24.795 50.417 C 24.602 51.029 24.031 52.084 23.592 52.642 C 22.815 53.63 22.761 53.8 22.967 54.623 C 23.123 55.249 23.25 55.417 23.833 55.771 C 24.209 55.999 24.695 56.191 24.913 56.198 C 25.132 56.204 25.473 56.336 25.672 56.49 C 26.172 56.877 26.754 57.012 28.084 57.05 C 29.402 57.087 29.812 56.921 30.361 56.129 C 30.569 55.828 30.883 55.398 31.058 55.174 C 31.629 54.441 32.618 52.203 32.712 51.428 C 32.763 51.01 32.842 50.386 32.887 50.041 C 32.937 49.663 32.904 49.373 32.804 49.311 C 32.713 49.255 32.638 49.075 32.638 48.912 C 32.638 48.749 32.577 48.497 32.502 48.352 C 32.428 48.207 32.288 47.917 32.191 47.709 C 32.094 47.5 31.876 47.062 31.707 46.736 C 31.494 46.327 31.427 45.992 31.49 45.657 C 31.591 45.116 32.287 43.978 33.038 43.126 C 34.039 41.989 34.039 40.763 33.037 40.344 C 32.754 40.226 32.484 40.028 32.436 39.903 C 32.388 39.779 32.055 39.528 31.696 39.346 C 31.337 39.164 30.649 38.674 30.166 38.257 C 29.203 37.426 28.271 37.168 27.742 37.588 Z M 5.301 39.353 C 6.157 39.79 6.25 40.453 5.613 41.567 C 5.053 42.546 4.789 42.718 4.038 42.596 C 3.346 42.484 2.481 41.55 2.463 40.895 C 2.444 40.242 3.034 39.487 3.732 39.272 C 4.563 39.014 4.645 39.019 5.301 39.353 Z M 30.246 41.339 C 30.558 41.544 30.814 41.754 30.815 41.805 C 30.816 41.856 30.604 42.164 30.344 42.488 C 30.084 42.813 29.717 43.42 29.528 43.838 C 28.692 45.683 28.679 46.198 29.433 47.756 C 29.682 48.273 29.934 48.9 29.993 49.151 C 30.051 49.401 30.167 49.692 30.249 49.797 C 30.446 50.047 30.258 51.459 29.973 51.865 C 29.852 52.038 29.754 52.278 29.754 52.4 C 29.754 52.522 29.497 53.012 29.184 53.489 C 28.633 54.329 28.591 54.358 27.856 54.415 C 27.183 54.467 26.595 54.287 25.98 53.838 C 25.95 53.816 26.069 53.596 26.246 53.349 C 26.422 53.101 26.566 52.806 26.566 52.692 C 26.566 52.579 26.713 52.214 26.892 51.881 C 27.545 50.673 27.416 48.697 26.535 46.418 C 26.23 45.628 26.396 43.32 26.793 42.851 C 26.899 42.726 27.174 42.213 27.404 41.712 C 27.634 41.211 27.959 40.651 28.125 40.467 L 28.428 40.132 L 29.053 40.548 C 29.396 40.777 29.933 41.133 30.246 41.339 Z M 100.266 41.097 C 99.765 41.185 99.185 41.357 98.976 41.479 C 98.767 41.601 98.55 41.688 98.492 41.672 C 98.325 41.625 97.291 42.88 97.067 43.4 C 96.955 43.661 96.82 44.31 96.766 44.842 C 96.671 45.79 96.682 45.83 97.279 46.705 C 97.631 47.221 98.196 47.798 98.616 48.071 C 99.236 48.474 99.479 48.542 100.261 48.53 C 101.411 48.514 102.065 48.209 103.058 47.227 C 103.858 46.435 104.289 45.463 104.289 44.452 C 104.289 43.84 103.307 42.182 102.79 41.922 C 102.571 41.812 102.118 41.545 101.784 41.329 C 101.212 40.959 101.126 40.946 100.266 41.097 Z M 50.019 43.883 C 49.37 43.961 48.927 44.44 48.816 45.183 C 48.709 45.895 49.007 46.687 49.454 46.883 C 50.203 47.211 50.535 47.129 51.194 46.451 C 52 45.622 52.051 45.085 51.386 44.424 C 50.853 43.895 50.636 43.809 50.019 43.883 Z M 100.125 44.082 C 100.184 44.177 100.437 44.217 100.707 44.173 C 101.212 44.091 101.59 44.281 101.745 44.693 C 101.864 45.011 101.194 45.666 100.502 45.907 C 100.019 46.075 99.966 46.06 99.632 45.645 C 99.363 45.31 99.3 45.094 99.372 44.748 C 99.523 44.024 99.889 43.7 100.125 44.082 Z M 120.359 44.367 C 120.221 44.45 119.272 44.551 118.25 44.592 C 116.002 44.681 115.796 44.783 115.446 45.987 C 115.076 47.261 115.002 48.097 114.999 51.048 C 114.995 53.649 115.004 53.723 115.421 54.589 C 115.67 55.108 115.848 55.734 115.852 56.107 C 115.855 56.486 116.035 57.107 116.297 57.649 C 116.539 58.149 116.737 58.708 116.737 58.89 C 116.737 59.073 116.907 59.424 117.114 59.67 C 117.428 60.043 117.61 60.12 118.205 60.132 C 118.598 60.14 119.013 60.069 119.127 59.974 C 119.241 59.88 119.621 59.749 119.971 59.684 C 120.321 59.619 121.189 59.416 121.898 59.234 C 124.553 58.553 124.678 58.447 124.72 56.85 C 124.754 55.572 124.572 54.845 123.88 53.496 C 122.923 51.631 122.682 49.687 123.065 46.941 C 123.266 45.497 123.102 45.026 122.278 44.672 C 121.399 44.296 120.668 44.179 120.359 44.367 Z M 120.442 47.495 C 120.434 47.738 120.409 48.346 120.386 48.847 C 120.327 50.152 120.494 51.725 120.759 52.36 C 120.885 52.661 120.988 53.108 120.988 53.354 C 120.988 53.856 121.208 54.337 121.598 54.685 C 121.83 54.892 122.354 56.031 122.354 56.327 C 122.354 56.496 121.603 56.779 120.836 56.898 C 120.46 56.957 119.965 57.101 119.735 57.218 C 119.475 57.351 119.318 57.371 119.318 57.271 C 119.318 57.183 119.079 56.871 118.786 56.579 C 118.338 56.13 118.255 55.942 118.255 55.37 C 118.255 54.997 118.272 54.675 118.292 54.654 C 118.313 54.633 118.176 54.399 117.988 54.135 C 117.469 53.407 117.258 50.14 117.585 47.902 C 117.689 47.194 117.771 47.156 119.394 47.054 C 120.439 46.989 120.458 46.998 120.442 47.495 Z M 82.091 48.427 C 80.963 48.516 79.895 49.318 79.281 50.536 C 78.259 52.564 78.395 54.193 79.688 55.426 C 80.531 56.229 81.002 56.432 82.354 56.572 C 83.514 56.693 84.751 55.982 85.801 54.591 C 86.416 53.777 86.438 53.708 86.491 52.437 L 86.545 51.124 L 85.872 50.213 C 84.792 48.754 84.409 48.436 83.836 48.524 C 83.567 48.566 83.306 48.536 83.258 48.458 C 83.21 48.38 83.089 48.328 82.99 48.343 C 82.89 48.358 82.486 48.396 82.091 48.427 Z M 83.495 51.208 C 83.621 51.272 83.812 51.566 83.919 51.862 C 84.092 52.339 84.078 52.469 83.796 53.02 C 83.327 53.94 82.403 54.22 81.591 53.689 C 81.171 53.414 81.107 52.887 81.374 51.922 C 81.62 51.04 82.547 50.727 83.495 51.208 Z M 11.886 54.35 C 11.324 54.958 10.778 55.903 10.778 56.268 C 10.778 56.588 11.497 57.396 12.026 57.669 C 12.382 57.853 12.566 57.867 12.884 57.736 C 13.599 57.439 14.261 56.395 14.5 55.185 C 14.582 54.77 14.525 54.62 14.141 54.236 C 13.78 53.875 13.554 53.781 13.049 53.781 C 12.509 53.781 12.334 53.866 11.886 54.35 Z M 103.096 57.661 C 101.852 58.794 101.877 59.897 103.152 60.089 C 104.388 60.274 105.504 59.349 105.504 58.138 C 105.504 57.506 105.12 57.125 104.392 57.035 C 103.926 56.977 103.759 57.058 103.096 57.661 Z M 50.99 60.685 C 50.689 60.882 50.158 61.12 49.81 61.214 C 49.344 61.34 49.057 61.55 48.725 62.008 C 48.477 62.35 48.274 62.753 48.274 62.903 C 48.274 63.052 48.196 63.222 48.102 63.28 C 47.893 63.41 48.026 64.933 48.303 65.568 C 48.584 66.213 49.206 67.139 49.358 67.139 C 49.431 67.139 49.849 67.396 50.287 67.709 C 51.06 68.262 51.116 68.277 52.324 68.256 C 53.189 68.24 53.672 68.16 53.914 67.99 C 54.105 67.856 54.411 67.747 54.594 67.747 C 55.471 67.747 56.556 65.188 56.442 63.39 C 56.388 62.552 56.318 62.371 55.868 61.906 C 55.355 61.377 54.15 60.846 52.636 60.482 C 51.693 60.255 51.634 60.263 50.99 60.685 Z M 53.474 63.3 C 53.957 63.391 54.16 63.903 53.903 64.383 C 53.813 64.552 53.739 64.823 53.739 64.986 C 53.739 65.402 53.432 65.607 52.661 65.708 C 52.099 65.781 51.891 65.728 51.352 65.374 C 50.6 64.879 50.537 64.757 50.656 64.027 C 50.743 63.489 50.757 63.479 51.3 63.57 C 51.747 63.646 51.912 63.602 52.146 63.343 C 52.345 63.123 52.534 63.053 52.746 63.122 C 52.916 63.176 53.244 63.257 53.474 63.3 Z M 74.648 63.956 C 74.201 64.035 73.858 64.287 73.054 65.129 C 71.602 66.652 70.948 66.979 69.301 67.002 C 68.149 67.018 67.892 66.97 67.201 66.61 C 66.167 66.071 64.807 66.046 64.264 66.556 C 64.069 66.739 63.909 66.972 63.909 67.073 C 63.909 67.174 63.807 67.452 63.683 67.691 C 63.558 67.93 63.456 68.23 63.455 68.358 C 63.454 68.486 63.361 68.725 63.247 68.889 C 63.036 69.195 62.389 72.155 62.395 72.786 C 62.401 73.393 63.453 74.358 64.485 74.703 C 64.76 74.795 65.173 75.004 65.402 75.167 C 66.181 75.721 69.935 76.091 71.651 75.783 C 72.194 75.686 72.789 75.511 72.974 75.395 C 73.159 75.28 73.432 75.185 73.582 75.185 C 73.731 75.185 74.412 74.963 75.095 74.691 C 75.993 74.335 76.762 73.865 77.866 72.997 C 78.706 72.336 79.393 71.738 79.393 71.668 C 79.393 71.599 79.484 71.542 79.595 71.542 C 79.705 71.542 79.958 71.369 80.156 71.158 C 80.655 70.627 80.616 69.87 80.054 69.214 C 79.816 68.936 79.382 68.408 79.09 68.041 C 78.798 67.673 78.06 66.869 77.451 66.254 C 76.8 65.597 76.309 64.962 76.26 64.716 C 76.149 64.162 75.426 63.821 74.648 63.956 Z M 86.877 65.659 C 86.258 66.339 86.217 66.569 86.554 67.484 C 86.823 68.215 86.95 68.368 87.448 68.567 C 88.552 69.009 89.416 68.32 89.533 66.905 C 89.595 66.155 89.574 66.1 89.074 65.718 C 88.376 65.186 87.334 65.158 86.877 65.659 Z M 75.446 68.07 C 75.446 68.131 75.575 68.222 75.732 68.272 C 76.132 68.399 76.523 68.782 76.99 69.505 L 77.39 70.125 L 76.684 70.732 C 75.552 71.706 74.872 72.066 73.035 72.663 C 70.023 73.642 68.202 73.631 66.004 72.622 C 65.18 72.244 65.139 72.198 65.131 71.656 C 65.124 71.124 65.64 69.331 65.874 69.072 C 65.932 69.008 66.283 69.068 66.652 69.206 C 67.124 69.381 67.928 69.469 69.345 69.498 L 71.365 69.539 L 72.305 68.942 C 72.822 68.614 73.359 68.307 73.497 68.26 C 73.635 68.213 73.966 67.903 74.233 67.571 L 74.717 66.969 L 75.082 67.463 C 75.282 67.735 75.446 68.008 75.446 68.07 Z M 98.541 67.957 C 97.338 68.357 96.262 69.241 95.75 70.251 C 95.133 71.467 94.877 72.034 94.877 72.187 C 94.877 72.266 94.78 72.546 94.661 72.809 C 94.424 73.334 94.081 75.616 93.812 78.449 C 93.718 79.451 93.543 80.68 93.424 81.181 C 93.305 81.682 93.22 82.229 93.235 82.396 C 93.27 82.797 93.06 83.874 92.909 84.066 C 92.844 84.149 92.751 84.422 92.703 84.673 C 92.432 86.09 92.174 87.159 92.06 87.343 C 91.989 87.459 91.814 88.067 91.671 88.694 C 91.528 89.321 91.297 90.176 91.159 90.593 C 90.923 91.308 90.84 91.496 90.48 92.149 C 90.4 92.295 90.195 92.735 90.025 93.127 C 89.856 93.518 89.65 93.88 89.569 93.93 C 89.487 93.98 89.35 94.284 89.264 94.605 C 89.173 94.941 88.8 95.518 88.387 95.964 C 87.991 96.39 87.496 96.955 87.287 97.22 C 86.767 97.878 86.511 98.132 86.009 98.487 C 85.773 98.654 85.39 98.944 85.159 99.132 C 84.928 99.32 84.674 99.474 84.594 99.474 C 84.514 99.474 84.296 99.607 84.108 99.77 C 83.7 100.124 81.301 100.647 81.157 100.413 C 80.992 100.147 81.521 98.376 82.176 96.995 C 82.566 96.174 82.885 95.414 82.885 95.307 C 82.885 95.2 83.011 94.949 83.164 94.75 C 83.871 93.835 85.357 89.936 85.558 88.468 C 85.603 88.134 85.743 87.425 85.869 86.892 C 86.192 85.519 86.024 83.676 85.467 82.499 C 85.039 81.594 84.088 80.725 83.101 80.336 C 82.128 79.952 80.035 80.376 79.232 81.12 C 79.105 81.237 78.867 81.408 78.704 81.499 C 78.54 81.59 78.26 81.898 78.082 82.182 C 77.903 82.467 77.588 82.87 77.382 83.08 C 77.176 83.289 76.87 83.733 76.702 84.066 C 75.754 85.949 74.52 88.304 74.405 88.451 C 74.332 88.544 74.188 88.893 74.085 89.227 C 73.808 90.129 73.155 91.783 72.998 91.977 C 72.923 92.071 72.695 92.703 72.492 93.383 C 72.288 94.063 72.016 94.77 71.887 94.955 C 71.757 95.14 71.651 95.414 71.651 95.564 C 71.651 95.85 70.646 98.507 69.732 100.635 C 69.619 100.898 69.526 101.254 69.526 101.427 C 69.526 101.599 69.431 101.965 69.315 102.239 C 68.972 103.048 68.634 104.335 68.48 105.427 C 68.401 105.987 68.3 106.505 68.256 106.576 C 68.179 106.701 67.919 108.062 67.758 109.189 C 67.455 111.305 67.659 117.056 68.072 118.027 C 68.204 118.337 68.312 118.879 68.312 119.23 C 68.312 119.868 68.473 120.526 68.852 121.432 C 68.961 121.695 69.098 122.173 69.154 122.495 C 69.211 122.816 69.693 123.994 70.227 125.112 C 70.76 126.23 71.196 127.202 71.196 127.272 C 71.196 127.342 71.418 127.761 71.689 128.202 C 72.451 129.44 72.759 130.017 73.451 131.504 C 73.548 131.713 73.808 132.189 74.028 132.562 L 74.429 133.24 L 74.26 135.522 C 74.074 138.03 74.163 138.965 74.653 139.653 C 75.253 140.496 75.293 140.507 77.997 140.574 C 82.91 140.696 94.572 140.796 101.709 140.776 C 104.422 140.769 107.178 140.788 107.834 140.819 C 108.877 140.868 109.071 140.835 109.395 140.554 C 109.747 140.247 109.771 140.111 109.92 137.501 C 110.006 135.998 110.102 133.675 110.134 132.339 C 110.166 131.003 110.234 129.193 110.285 128.316 C 110.336 127.44 110.408 126.21 110.443 125.584 C 110.478 124.958 110.615 124.014 110.748 123.486 C 111.034 122.344 112.434 119.499 113.208 118.487 C 113.511 118.09 114.307 116.947 114.977 115.945 C 116.182 114.145 117.728 111.989 118.476 111.066 C 118.689 110.804 118.865 110.531 118.869 110.459 C 118.872 110.387 119.077 110.091 119.324 109.802 C 119.571 109.513 119.773 109.222 119.773 109.155 C 119.773 109.088 120.043 108.639 120.372 108.156 C 120.701 107.674 121.042 107.092 121.129 106.864 C 121.215 106.636 121.527 106.074 121.82 105.615 C 122.114 105.156 122.355 104.663 122.356 104.518 C 122.357 104.374 122.534 103.948 122.749 103.572 C 123.641 102.018 125.221 97.92 125.47 96.513 C 125.529 96.18 125.679 95.531 125.802 95.071 C 125.925 94.612 126.077 93.992 126.138 93.693 C 126.2 93.395 126.31 93.053 126.384 92.935 C 126.457 92.816 126.567 92.343 126.629 91.884 C 126.725 91.164 126.831 90.584 127.293 88.24 C 127.335 88.031 127.401 87.485 127.441 87.026 C 127.481 86.567 127.58 85.576 127.661 84.825 C 127.824 83.316 128.025 80.551 127.997 80.195 C 127.943 79.482 127.813 76.381 127.816 75.849 C 127.817 75.505 127.716 74.933 127.591 74.578 C 127.466 74.223 127.364 73.719 127.364 73.458 C 127.365 72.776 126.623 70.801 126.123 70.155 C 124.749 68.38 120.777 68.379 119.385 70.153 C 119.256 70.317 119.134 70.256 118.774 69.846 C 117.772 68.703 116.462 68.064 115.103 68.054 C 114.464 68.049 112.082 69.008 111.733 69.411 C 111.364 69.836 111.089 69.797 110.795 69.279 C 110.632 68.992 110.19 68.671 109.522 68.352 C 108.085 67.666 106.857 67.641 105.58 68.273 C 105.079 68.521 104.444 68.914 104.17 69.146 C 103.559 69.663 103.522 69.664 103.063 69.177 C 102.629 68.714 101.021 67.898 100.544 67.898 C 100.361 67.898 100.052 67.84 99.859 67.767 C 99.614 67.676 99.214 67.734 98.541 67.957 Z M 22.998 68.273 C 21.738 68.604 21.067 68.96 20.466 69.617 L 19.894 70.243 L 19.397 69.767 C 19.072 69.455 18.445 69.137 17.588 68.85 C 16.369 68.441 16.207 68.421 15.299 68.571 C 14.228 68.749 13.323 69.259 12.515 70.141 L 12.024 70.677 L 11.363 70.141 C 10.912 69.776 10.371 69.524 9.659 69.347 C 7.224 68.745 5.006 69.802 4.416 71.845 C 4.308 72.221 4.151 72.613 4.067 72.715 C 3.983 72.818 3.855 73.33 3.783 73.854 C 3.054 79.13 3.206 85.32 4.179 89.95 C 4.385 90.933 4.554 91.978 4.554 92.273 C 4.554 92.568 4.668 93.028 4.807 93.295 C 4.946 93.562 5.078 93.952 5.101 94.161 C 5.123 94.369 5.214 94.813 5.302 95.147 C 5.391 95.481 5.566 96.233 5.691 96.817 C 5.816 97.402 6.05 98.221 6.211 98.639 C 6.372 99.056 6.721 99.978 6.986 100.688 C 7.252 101.398 7.556 102.149 7.662 102.358 C 7.769 102.567 8.107 103.284 8.413 103.952 C 8.719 104.62 9.08 105.371 9.215 105.622 C 9.35 105.872 9.698 106.555 9.989 107.14 C 10.28 107.724 10.713 108.451 10.952 108.756 C 11.19 109.06 11.385 109.413 11.385 109.54 C 11.385 109.667 11.441 109.794 11.509 109.822 C 11.577 109.849 12.092 110.521 12.654 111.314 C 13.215 112.108 13.807 112.927 13.968 113.136 C 14.129 113.345 14.397 113.694 14.564 113.913 C 14.731 114.132 15.464 115.191 16.194 116.266 C 16.923 117.342 17.754 118.529 18.04 118.905 C 18.691 119.757 20.125 122.672 20.436 123.772 C 20.564 124.226 20.691 124.87 20.72 125.204 C 20.835 126.571 20.971 129.769 21.023 132.339 C 21.053 133.842 21.118 135.55 21.167 136.134 C 21.216 136.719 21.292 137.812 21.335 138.563 C 21.379 139.315 21.437 140.066 21.466 140.233 C 21.494 140.4 21.526 140.607 21.537 140.694 C 21.571 140.973 22.464 141.407 22.741 141.279 C 22.882 141.213 27.302 141.147 32.562 141.133 C 37.822 141.118 43.219 141.091 44.554 141.072 C 45.89 141.052 47.819 141.048 48.841 141.062 C 49.863 141.076 50.771 141.044 50.858 140.99 C 50.946 140.936 52.091 140.89 53.402 140.889 C 54.959 140.888 55.861 140.827 55.998 140.714 C 56.465 140.331 56.904 139.401 57.007 138.582 C 57.067 138.1 57.03 136.857 56.924 135.785 L 56.732 133.854 L 57.134 133.097 C 57.355 132.68 57.597 132.237 57.671 132.111 C 57.746 131.986 57.929 131.576 58.078 131.201 C 58.227 130.825 58.447 130.401 58.567 130.258 C 58.686 130.115 58.948 129.671 59.148 129.271 C 59.349 128.871 59.609 128.373 59.726 128.165 C 60.215 127.299 61.931 123.5 62.024 123.079 C 62.08 122.829 62.261 122.214 62.428 121.713 C 62.594 121.212 62.787 120.311 62.856 119.71 C 62.925 119.109 63.08 118.426 63.2 118.192 C 63.396 117.811 63.46 117.096 63.674 112.908 C 63.706 112.285 63.349 108.831 63.157 107.899 C 63.07 107.481 62.937 106.749 62.86 106.271 C 62.698 105.268 61.697 101.588 61.404 100.916 C 61.295 100.665 61.055 100.051 60.871 99.55 C 60.528 98.614 60.343 98.153 59.909 97.153 C 59.771 96.838 59.659 96.466 59.659 96.329 C 59.659 96.191 59.526 95.8 59.364 95.461 C 59.201 95.121 58.894 94.321 58.681 93.681 C 58.469 93.042 58.2 92.324 58.084 92.087 C 57.539 90.966 57.372 90.565 57.307 90.214 C 57.241 89.859 57.077 89.442 56.758 88.813 C 55.068 85.487 54.083 83.718 53.794 83.491 C 53.596 83.336 53.433 83.128 53.431 83.03 C 53.424 82.773 52.688 82.008 51.987 81.53 C 50.711 80.659 49.34 80.343 48.274 80.674 C 47.435 80.935 46.239 81.938 45.796 82.753 C 45.159 83.922 44.986 85.916 45.379 87.557 C 45.459 87.891 45.563 88.458 45.611 88.816 C 45.659 89.175 45.76 89.584 45.835 89.727 C 45.909 89.869 46.119 90.532 46.301 91.2 C 46.576 92.207 47.544 94.45 48.103 95.375 C 48.179 95.5 48.378 95.91 48.546 96.286 C 48.713 96.661 49.053 97.413 49.3 97.956 C 49.692 98.816 50.205 100.791 50.068 100.912 C 50.041 100.936 49.476 100.86 48.812 100.745 C 48.029 100.609 47.389 100.393 46.991 100.13 C 46.653 99.907 46.107 99.549 45.778 99.334 C 45.053 98.859 43.568 97.366 43.568 97.111 C 43.568 97.01 43.396 96.815 43.185 96.677 C 42.659 96.332 41.898 95.249 41.898 94.844 C 41.898 94.661 41.769 94.395 41.612 94.253 C 41.455 94.11 41.205 93.673 41.057 93.28 C 40.909 92.888 40.662 92.404 40.508 92.205 C 40.354 92.005 40.226 91.698 40.225 91.521 C 40.223 91.345 40.097 90.926 39.945 90.592 C 39.793 90.257 39.621 89.71 39.564 89.377 C 39.506 89.044 39.329 88.327 39.169 87.785 C 39.01 87.242 38.766 86.32 38.626 85.735 C 38.486 85.151 38.277 84.38 38.161 84.022 C 38.046 83.665 37.951 83.062 37.951 82.684 C 37.951 82.306 37.877 81.858 37.786 81.689 C 37.639 81.414 37.518 80.462 37.258 77.538 C 37.142 76.232 37.054 75.468 36.97 75.033 C 36.93 74.825 36.851 74.362 36.796 74.005 C 36.741 73.648 36.636 73.32 36.564 73.275 C 36.492 73.23 36.433 73.06 36.433 72.896 C 36.433 72.732 36.143 72.01 35.788 71.291 C 34.978 69.648 34.107 68.818 32.709 68.352 C 31.849 68.066 31.627 68.047 30.934 68.195 C 29.94 68.408 28.655 69.051 28.132 69.597 C 27.743 70.004 27.723 70.007 27.301 69.758 C 27.064 69.618 26.869 69.451 26.869 69.387 C 26.869 69.229 24.648 68.2 24.155 68.13 C 23.936 68.099 23.416 68.163 22.998 68.273 Z M 100.697 70.31 C 102 70.92 102.073 71.086 102.041 73.363 C 101.985 77.356 101.863 79.717 101.638 81.168 C 101.51 81.996 101.405 82.953 101.405 83.294 C 101.405 83.636 101.334 84.154 101.248 84.446 C 101.162 84.738 101.055 85.25 101.011 85.584 C 100.967 85.918 100.895 86.293 100.85 86.419 C 100.805 86.544 100.749 86.938 100.724 87.296 C 100.7 87.653 100.607 88.131 100.518 88.358 C 100.429 88.586 100.141 89.614 99.878 90.644 C 99.615 91.673 99.305 92.698 99.189 92.921 C 99.073 93.143 98.978 93.409 98.977 93.51 C 98.976 93.791 98.481 94.768 98.341 94.768 C 98.273 94.768 98.217 94.847 98.217 94.943 C 98.217 95.04 98.046 95.342 97.838 95.616 C 97.225 96.419 97.441 97.349 98.29 97.562 C 98.856 97.704 99.322 97.322 100.093 96.084 C 100.937 94.726 101.461 93.33 102.18 90.517 C 102.361 89.808 102.566 89.112 102.635 88.971 C 102.761 88.716 102.986 87.548 103.214 85.963 C 103.28 85.504 103.412 84.936 103.508 84.702 C 103.603 84.467 103.673 83.955 103.663 83.563 C 103.652 83.172 103.721 82.1 103.816 81.181 C 104.026 79.139 104.111 78.013 104.21 75.944 C 104.324 73.579 104.511 72.586 105.005 71.72 C 105.781 70.361 106.804 69.854 108.145 70.165 C 108.77 70.31 108.985 70.447 109.261 70.878 C 109.449 71.171 109.602 71.529 109.602 71.672 C 109.602 71.816 109.711 72.341 109.843 72.838 C 110.089 73.763 110.186 76.394 110.006 77.234 C 109.952 77.485 109.837 78.68 109.749 79.891 C 109.574 82.33 109.227 85.813 109.01 87.326 C 108.932 87.867 108.893 88.35 108.924 88.4 C 109.008 88.535 108.58 90.928 108.302 91.883 C 107.898 93.269 106.833 95.864 106.382 96.559 C 105.822 97.423 105.818 98.143 106.37 98.655 C 106.85 99.1 107.397 99.047 107.814 98.516 C 108.098 98.153 108.833 96.676 109.15 95.83 C 109.26 95.538 109.404 95.226 109.471 95.137 C 109.614 94.947 110.356 92.794 110.279 92.794 C 110.25 92.794 110.358 92.409 110.521 91.938 C 110.683 91.467 110.887 90.459 110.974 89.699 C 111.061 88.938 111.198 87.818 111.278 87.209 C 111.358 86.601 111.426 85.747 111.428 85.312 C 111.43 84.877 111.498 84.248 111.58 83.914 C 111.662 83.58 111.764 82.692 111.808 81.94 C 111.98 79.003 112.018 78.578 112.166 77.918 C 112.25 77.542 112.318 76.709 112.318 76.067 C 112.318 75.426 112.384 74.64 112.464 74.322 C 112.545 74.003 112.607 73.25 112.602 72.647 C 112.597 71.946 112.667 71.463 112.796 71.308 C 113.455 70.513 115.586 70.079 116.417 70.57 C 117 70.914 117.648 71.858 117.648 72.365 C 117.648 72.57 117.707 72.774 117.778 72.819 C 117.85 72.863 117.959 73.294 118.021 73.776 C 118.45 77.112 118.331 81.168 117.706 84.503 C 117.501 85.598 117.316 86.631 117.294 86.798 C 117.272 86.965 117.212 87.272 117.161 87.481 C 117.109 87.69 116.99 88.271 116.895 88.771 C 116.668 89.979 116.281 91.582 116.126 91.959 C 116.057 92.126 115.867 92.673 115.704 93.174 C 115.105 95.01 113.983 97.517 113.642 97.781 C 113.378 97.984 112.026 98.679 111.272 98.998 C 110.896 99.157 110.213 99.447 109.754 99.641 C 108.196 100.301 106.641 101.707 105.404 103.572 C 104.198 105.391 103.787 107.172 104.449 107.708 C 105.161 108.285 106.008 107.923 106.262 106.932 C 106.487 106.056 106.692 105.6 107.132 105 C 107.322 104.742 107.478 104.469 107.479 104.393 C 107.483 104.028 110.015 101.751 110.416 101.751 C 110.543 101.751 110.683 101.692 110.727 101.621 C 110.771 101.55 111.271 101.337 111.837 101.149 C 112.403 100.96 113.037 100.649 113.246 100.457 C 113.454 100.264 113.898 100.034 114.232 99.944 C 115.102 99.711 115.588 99.224 115.992 98.183 C 116.186 97.682 116.471 97.086 116.625 96.858 C 116.779 96.63 117.143 95.742 117.433 94.885 C 117.723 94.027 118.015 93.223 118.082 93.098 C 118.257 92.772 119.915 85.486 119.913 85.052 C 119.911 84.548 120.242 82.27 120.34 82.111 C 120.397 82.018 120.456 79.884 120.47 77.369 C 120.501 71.79 120.545 71.596 121.878 71.131 C 122.6 70.88 123.157 70.885 123.791 71.15 C 124.553 71.469 124.998 72.515 125.248 74.578 C 125.314 75.121 125.436 75.872 125.521 76.248 C 125.61 76.647 125.651 78.445 125.617 80.574 C 125.549 84.966 125.461 86.144 125.016 88.62 C 124.608 90.89 124.456 91.624 124.242 92.339 C 124.13 92.715 123.891 93.705 123.712 94.54 C 123.532 95.375 123.323 96.178 123.247 96.325 C 123.171 96.472 123.012 96.984 122.894 97.463 C 122.675 98.35 121.97 100.174 121.731 100.473 C 121.658 100.564 121.493 100.94 121.363 101.308 C 121.064 102.159 120.559 103.303 120.094 104.179 C 119.895 104.555 119.533 105.238 119.289 105.698 C 119.046 106.157 118.475 107.087 118.02 107.764 C 117.565 108.441 117.193 109.035 117.193 109.085 C 117.193 109.133 117.013 109.365 116.795 109.599 C 116.576 109.833 116.286 110.195 116.151 110.404 C 115.637 111.196 114.542 112.586 114.012 113.116 C 113.709 113.419 113.371 113.931 113.262 114.253 C 113.152 114.575 112.903 115.088 112.707 115.392 C 112.159 116.246 111.381 117.375 111.034 117.819 C 110.862 118.04 110.628 118.461 110.516 118.753 C 110.403 119.045 110.23 119.387 110.13 119.512 C 109.748 119.991 108.692 122.297 108.692 122.651 C 108.692 122.856 108.627 123.144 108.548 123.292 C 108.335 123.689 108.088 126.93 108.021 130.214 C 107.899 136.112 107.756 138.339 107.492 138.464 C 107.224 138.589 84.739 138.556 80.76 138.424 C 79.382 138.378 77.864 138.343 77.387 138.346 C 76.561 138.351 76.514 138.33 76.412 137.927 C 76.354 137.694 76.39 136.546 76.493 135.376 C 76.711 132.905 76.595 132.087 75.905 131.225 C 75.425 130.625 74.333 128.601 72.862 125.584 C 72.353 124.54 71.843 123.511 71.727 123.298 C 71.611 123.084 71.402 122.401 71.262 121.78 C 71.123 121.158 70.939 120.563 70.853 120.457 C 70.665 120.223 70.164 117.758 69.967 116.096 C 69.635 113.283 69.869 109.077 70.509 106.381 C 70.648 105.796 70.877 104.772 71.019 104.104 C 71.161 103.436 71.325 102.815 71.382 102.724 C 71.44 102.633 71.553 102.292 71.635 101.965 C 71.851 101.096 72.182 100.248 72.385 100.046 C 72.482 99.948 72.562 99.738 72.562 99.578 C 72.562 99.418 72.689 99.039 72.844 98.735 C 72.999 98.432 73.245 97.842 73.392 97.424 C 73.539 97.007 73.795 96.324 73.962 95.906 C 74.129 95.489 74.334 94.874 74.418 94.54 C 74.501 94.206 74.726 93.591 74.917 93.174 C 75.393 92.133 75.898 90.851 76.082 90.214 C 76.166 89.921 76.325 89.58 76.433 89.455 C 76.542 89.329 76.738 88.968 76.869 88.651 C 77.106 88.076 77.107 88.075 77.497 88.331 C 77.999 88.66 79.696 88.544 80.641 88.116 C 81.726 87.625 82.754 86.357 83.344 84.787 C 83.6 84.105 83.863 84.167 83.828 84.9 C 83.787 85.765 83.62 87.245 83.55 87.358 C 83.5 87.44 83.372 87.894 83.267 88.367 C 83.011 89.522 82.132 92.376 81.974 92.566 C 81.761 92.824 79.849 96.571 79.849 96.733 C 79.849 96.816 79.678 97.257 79.469 97.714 C 79.261 98.17 79.088 98.736 79.086 98.971 C 79.084 99.206 79.016 99.671 78.935 100.005 C 78.854 100.339 78.781 101.023 78.774 101.525 C 78.762 102.335 78.833 102.565 79.405 103.556 C 79.759 104.171 80.517 105.151 81.088 105.733 C 81.659 106.315 82.126 106.859 82.126 106.942 C 82.126 107.024 82.471 107.478 82.894 107.95 C 84.057 109.252 85.613 111.704 86.003 112.849 C 86.194 113.411 86.315 113.905 86.273 113.947 C 86.138 114.083 86.39 114.655 86.72 114.963 C 87.049 115.269 87.813 115.356 88.172 115.129 C 88.675 114.809 88.407 112.161 87.799 111.456 C 87.687 111.326 87.514 110.984 87.415 110.697 C 87.317 110.411 86.889 109.676 86.465 109.064 C 86.04 108.453 85.591 107.798 85.466 107.609 C 85.127 107.097 84.37 106.136 84.012 105.762 C 83.838 105.581 83.544 105.236 83.359 104.996 C 83.173 104.756 82.677 104.205 82.257 103.773 L 81.493 102.986 L 81.925 102.763 C 82.163 102.64 82.698 102.492 83.115 102.436 C 84.242 102.281 85.148 101.909 85.997 101.251 C 87.5 100.087 87.783 99.842 88.479 99.103 C 88.867 98.69 89.321 98.207 89.488 98.03 C 90.342 97.125 90.963 96.222 91.452 95.179 C 91.75 94.543 91.993 93.951 91.993 93.864 C 91.993 93.777 92.052 93.705 92.124 93.705 C 92.196 93.705 92.379 93.381 92.529 92.984 C 92.68 92.588 92.932 92.033 93.089 91.752 C 93.246 91.471 93.344 91.21 93.307 91.173 C 93.27 91.137 93.375 90.752 93.539 90.319 C 93.704 89.885 93.931 89.155 94.044 88.696 C 94.157 88.236 94.46 87.007 94.718 85.963 C 94.975 84.919 95.256 83.587 95.341 83.003 C 95.426 82.419 95.561 81.77 95.64 81.561 C 95.775 81.205 95.863 80.401 96.018 78.1 C 96.053 77.575 96.132 77.064 96.193 76.966 C 96.253 76.868 96.289 76.608 96.273 76.388 C 96.23 75.833 96.609 74.102 97.051 72.831 C 97.563 71.359 98.202 70.336 98.672 70.235 C 98.881 70.19 99.189 70.095 99.356 70.023 C 99.523 69.951 99.682 69.888 99.711 69.882 C 99.739 69.876 100.183 70.069 100.697 70.31 Z M 24.611 70.631 C 25.994 71.047 26.81 72.606 26.946 75.091 C 27.218 80.077 27.355 82.04 27.483 82.765 C 27.563 83.219 27.628 83.94 27.628 84.367 C 27.628 84.794 27.696 85.211 27.779 85.294 C 27.862 85.377 27.966 85.818 28.01 86.274 C 28.134 87.558 28.393 88.872 28.606 89.296 C 28.713 89.509 28.84 89.99 28.89 90.365 C 28.996 91.169 29.313 92.254 29.933 93.933 C 30.505 95.481 30.91 96.275 31.58 97.167 C 32.023 97.755 32.213 97.888 32.667 97.926 C 33.098 97.962 33.268 97.898 33.458 97.627 C 33.855 97.061 33.753 96.496 33.095 95.605 C 32.431 94.706 31.49 92.124 31.05 89.992 C 30.913 89.327 30.736 88.705 30.656 88.61 C 30.577 88.515 30.48 88.034 30.441 87.541 C 30.402 87.049 30.297 86.305 30.208 85.887 C 30.119 85.47 29.977 84.616 29.892 83.99 C 29.807 83.363 29.67 82.441 29.587 81.94 C 29.345 80.48 29.285 79.433 29.219 75.514 C 29.15 71.42 29.174 71.292 30.103 70.925 C 30.37 70.819 30.708 70.631 30.855 70.506 C 31.08 70.314 31.247 70.308 31.935 70.461 C 33.123 70.727 33.45 71.172 34.252 73.621 C 34.777 75.225 34.928 76.12 35.228 79.436 C 35.323 80.479 35.496 81.609 35.613 81.945 C 35.73 82.282 35.825 82.795 35.824 83.084 C 35.823 83.618 36.501 86.849 36.732 87.405 C 36.801 87.572 36.975 88.187 37.119 88.771 C 37.681 91.058 38.078 92.108 39.325 94.616 C 39.637 95.242 39.942 95.925 40.004 96.134 C 40.126 96.545 40.911 97.553 42.12 98.853 C 43.277 100.097 43.542 100.339 44.858 101.356 C 46.056 102.281 47.044 102.715 48.281 102.86 C 48.578 102.895 49.018 103.028 49.261 103.155 L 49.702 103.386 L 49.177 103.898 C 48.487 104.572 46.472 106.959 45.863 107.823 C 44.769 109.374 43.719 111.019 43.719 111.181 C 43.719 111.276 43.589 111.567 43.429 111.828 C 42.975 112.569 42.612 114.012 42.706 114.708 C 42.799 115.4 43.121 115.717 43.735 115.717 C 44.237 115.717 44.934 114.957 44.934 114.41 C 44.934 113.821 45.523 112.226 45.99 111.551 C 46.225 111.212 46.674 110.536 46.99 110.048 C 47.305 109.56 47.894 108.799 48.298 108.357 C 48.702 107.914 49.033 107.486 49.033 107.404 C 49.033 107.323 49.575 106.683 50.238 105.983 C 51.028 105.15 51.63 104.339 51.984 103.634 C 52.543 102.519 52.634 101.905 52.374 100.997 C 52.291 100.708 52.183 100.094 52.133 99.631 C 52.083 99.169 51.877 98.43 51.676 97.989 C 51.475 97.548 51.31 97.094 51.31 96.979 C 51.31 96.864 51.082 96.368 50.805 95.877 C 48.956 92.606 47.923 89.724 47.483 86.61 C 47.357 85.718 47.452 83.672 47.594 84.217 C 48.073 86.057 48.961 87.495 50.083 88.249 C 50.984 88.854 53.096 89.155 53.695 88.764 C 54.139 88.474 54.127 88.469 54.352 89.037 C 54.46 89.308 54.631 89.633 54.732 89.758 C 54.834 89.883 54.964 90.157 55.022 90.365 C 55.137 90.782 55.889 92.67 56.322 93.629 C 56.473 93.963 56.797 94.851 57.043 95.603 C 57.668 97.512 57.981 98.357 58.421 99.322 C 58.63 99.781 58.865 100.328 58.943 100.536 C 59.02 100.745 59.174 101.121 59.285 101.371 C 59.396 101.622 59.527 101.997 59.578 102.206 C 59.628 102.415 59.735 102.825 59.815 103.117 C 60.007 103.818 60.742 106.904 60.809 107.292 C 61.413 110.775 61.502 111.807 61.422 114.409 C 61.366 116.212 61.268 117.218 61.101 117.69 C 60.969 118.064 60.822 118.781 60.773 119.283 C 60.725 119.784 60.57 120.4 60.428 120.65 C 60.287 120.901 60.081 121.55 59.971 122.092 C 59.835 122.766 59.283 124.058 58.235 126.158 C 55.928 130.783 55.828 130.968 55.282 131.647 C 54.512 132.605 54.399 133.805 54.808 136.689 C 54.944 137.648 54.874 138.632 54.668 138.645 C 51.632 138.845 40.799 138.966 29.491 138.926 L 23.536 138.905 L 23.449 138.43 C 23.402 138.17 23.371 137.58 23.382 137.121 C 23.393 136.662 23.355 135.466 23.3 134.464 C 23.244 133.463 23.176 131.585 23.15 130.291 C 23.081 126.944 22.946 125.07 22.679 123.762 C 22.394 122.369 20.748 118.951 19.706 117.588 C 18.964 116.619 17.761 114.526 17.761 114.205 C 17.761 114.105 17.457 113.719 17.085 113.347 C 16.358 112.62 15.029 110.932 15.029 110.736 C 15.029 110.67 14.792 110.381 14.502 110.093 C 14.212 109.804 13.973 109.519 13.971 109.458 C 13.968 109.397 13.612 108.821 13.18 108.177 C 12.748 107.534 12.198 106.628 11.957 106.163 C 11.717 105.698 11.387 105.079 11.225 104.787 C 10.801 104.025 10.019 102.328 10.019 102.17 C 10.019 102.096 9.853 101.681 9.65 101.248 C 8.852 99.541 8.539 98.748 8.353 97.951 C 8.246 97.494 8.073 96.95 7.968 96.741 C 7.812 96.428 7.499 95.081 7.211 93.477 C 7.181 93.31 7.05 92.866 6.921 92.491 C 6.791 92.115 6.577 91.124 6.445 90.29 C 6.313 89.455 6.133 88.499 6.045 88.165 C 5.958 87.832 5.863 87.081 5.835 86.496 C 5.808 85.911 5.738 85.056 5.681 84.597 C 5.318 81.677 5.756 74.232 6.369 72.916 C 6.814 71.96 6.965 71.747 7.324 71.574 C 7.836 71.328 9.075 71.296 9.301 71.522 C 9.395 71.616 9.59 71.694 9.733 71.694 C 9.877 71.694 10.154 71.95 10.348 72.263 C 10.694 72.819 10.703 72.923 10.727 76.931 C 10.756 81.805 10.913 83.568 11.619 86.95 C 11.758 87.618 11.934 88.574 12.009 89.075 C 12.084 89.576 12.206 90.157 12.281 90.365 C 12.356 90.574 12.536 91.291 12.682 91.959 C 12.827 92.627 12.998 93.242 13.062 93.326 C 13.125 93.409 13.327 93.973 13.511 94.578 C 13.694 95.184 13.906 95.717 13.981 95.764 C 14.056 95.81 14.117 95.964 14.117 96.105 C 14.116 96.551 15.777 99.736 16.132 99.967 C 16.318 100.089 16.641 100.242 16.85 100.307 C 17.059 100.372 17.663 100.685 18.192 101.003 C 18.721 101.321 19.37 101.627 19.634 101.684 C 20.309 101.83 21.212 102.309 22.012 102.946 C 22.803 103.576 23.681 104.497 23.681 104.697 C 23.681 104.772 23.837 105.045 24.026 105.304 C 24.466 105.904 24.669 106.351 24.921 107.277 C 25.088 107.888 25.212 108.058 25.619 108.228 C 26.046 108.407 26.176 108.404 26.566 108.203 C 26.814 108.074 27.058 107.803 27.11 107.599 C 27.366 106.578 25.818 103.535 24.299 102.073 C 22.75 100.583 22.673 100.535 19.886 99.335 C 17.479 98.298 17.573 98.384 16.537 96.252 C 16.118 95.39 15.901 94.821 15.535 93.629 C 15.407 93.212 15.207 92.689 15.09 92.467 C 14.973 92.246 14.877 91.888 14.877 91.673 C 14.877 91.458 14.781 91.025 14.664 90.71 C 14.546 90.395 14.371 89.694 14.273 89.151 C 14.175 88.608 14.054 87.993 14.004 87.785 C 13.954 87.576 13.894 87.269 13.873 87.102 C 13.851 86.935 13.796 86.627 13.751 86.419 C 13.094 83.35 12.877 80.941 12.971 77.766 C 13.066 74.545 13.196 73.363 13.495 73.003 C 13.601 72.874 13.646 72.701 13.594 72.616 C 13.453 72.389 14.26 71.251 14.736 71.005 C 15.324 70.7 16.334 70.561 16.461 70.766 C 16.518 70.859 16.7 70.935 16.865 70.935 C 17.304 70.935 18.311 71.485 18.452 71.801 C 18.518 71.951 18.591 72.235 18.614 72.432 C 18.638 72.63 18.687 72.822 18.725 72.86 C 18.763 72.898 18.729 73.162 18.65 73.447 C 18.557 73.785 18.562 74.171 18.665 74.553 C 18.752 74.876 18.857 75.832 18.898 76.679 C 18.94 77.526 19.044 78.531 19.129 78.913 C 19.215 79.295 19.282 79.859 19.279 80.167 C 19.269 81.193 19.382 82.688 19.551 83.762 C 19.643 84.346 19.753 85.371 19.796 86.039 C 19.975 88.818 20.229 90.638 20.646 92.111 C 20.74 92.445 20.874 92.957 20.944 93.25 C 21.297 94.726 22.877 98.308 23.516 99.078 C 23.795 99.414 24.53 99.384 24.892 99.022 C 25.411 98.503 25.417 98.067 24.915 97.177 C 24.296 96.078 23.179 93.282 22.801 91.883 C 22.479 90.691 22.362 89.98 22.239 88.468 C 22.104 86.801 21.845 84.389 21.615 82.661 C 21.49 81.721 21.418 80.901 21.456 80.839 C 21.493 80.777 21.431 79.94 21.318 78.98 C 21.009 76.368 21.04 74.353 21.413 72.948 C 21.871 71.226 22.102 70.848 22.835 70.628 C 23.175 70.526 23.522 70.422 23.605 70.397 C 23.689 70.372 23.86 70.387 23.985 70.431 C 24.11 70.475 24.392 70.565 24.611 70.631 Z M 81.488 83.018 C 81.488 83.661 81.103 84.59 80.48 85.451 C 80.099 85.977 79.912 86.093 79.22 86.232 C 77.903 86.495 77.904 86.254 79.229 84.293 C 79.837 83.393 80.879 82.485 81.314 82.475 C 81.414 82.473 81.488 82.705 81.488 83.018 Z M 50.814 83.379 C 51.384 83.841 52.418 85.178 52.845 86.004 C 53.203 86.696 53.05 86.813 51.995 86.654 C 51.465 86.575 51.218 86.432 50.861 86 C 50.036 84.998 49.533 83.519 49.78 82.818 C 49.814 82.721 50.385 83.03 50.814 83.379 Z",
    fill: "currentColor",
    fillRule: "evenodd"
  })));
  const __body2 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 128,
      height: 141.302,
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 122.300,
    height: 71.803,
    viewBox: "0 0 122.300 71.803",
    fill: "none",
    style: {
      position: "absolute",
      left: 4.32,
      top: 68.354,
      width: 122.3,
      height: 71.803,
      color: "rgb(244,204,175)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 18.147 71.803 L 16.401 54.042 C 11.923 46.73 2.769 31.378 1.98 28.463 C 0.993 24.82 -0.601 10.171 0.234 6.755 C 1.069 3.34 2.207 1.973 4.181 2.125 C 5.76 2.247 7.369 3.643 7.976 4.326 C 8.33 3.39 9.494 1.488 11.316 1.366 C 13.137 1.245 15.111 2.884 15.87 3.719 C 16.275 2.808 17.494 0.987 19.134 0.987 C 20.773 0.987 22.65 2.555 23.384 3.34 C 23.915 2.555 25.403 0.987 27.103 0.987 C 29.228 0.987 31.126 2.581 31.354 5.313 C 31.581 8.046 33.175 19.507 35.377 24.213 C 37.578 28.919 41.221 32.562 44.485 33.549 C 45.922 33.983 46.582 34.192 46.834 34.28 C 46.525 31.835 45.372 26.143 43.194 22.695 C 40.462 18.368 41.752 14.953 43.574 13.662 C 45.396 12.372 47.749 13.966 48.508 15.939 C 49.267 17.913 55.642 30.057 56.477 33.549 C 57.312 37.04 59.362 45.086 57.919 49.564 C 56.766 53.146 53.289 61.228 51.695 64.82 L 51.695 71.803 L 18.147 71.803 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 70.823 64.82 L 70.823 70.741 L 103.916 70.741 C 104.321 69.779 105.1 66.672 104.979 61.936 C 104.857 57.2 106.041 53.283 106.648 51.917 C 109.786 47.666 116.607 37.86 118.793 32.638 C 121.525 26.11 122.436 12.752 122.284 8.653 C 122.132 4.554 121.373 1.366 118.793 1.366 C 116.728 1.366 115.402 3.34 114.998 4.326 C 114.745 3.213 113.601 0.987 111.051 0.987 C 108.5 0.987 107.053 2.555 106.648 3.34 C 106.244 2.226 104.979 0 103.157 0 C 101.335 0 99.868 2.226 99.362 3.34 C 99.21 2.555 98.147 0.987 95.111 0.987 C 91.316 0.987 90.709 8.956 90.102 14.573 C 89.495 20.19 84.94 28.463 82.208 30.968 C 80.022 32.972 76.844 32.916 75.529 32.638 C 76.288 30.411 78.079 25.306 79.172 22.695 C 80.538 19.431 81.297 15.939 79.172 13.662 C 77.472 11.841 74.719 14.421 73.555 15.939 C 72.644 18.697 70.215 25.063 67.787 28.463 C 64.751 32.714 64.751 45.541 64.599 49.564 C 64.477 52.782 68.697 61.076 70.823 64.82 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 60.570,
    height: 28.236,
    viewBox: "0 0 60.570 28.236",
    fill: "none",
    style: {
      position: "absolute",
      left: 11.385,
      top: 12.186,
      width: 60.57,
      height: 28.236,
      color: "rgb(93,240,205)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 12.6 2.581 L 7.742 0 C 6.528 4.979 2.075 6.224 0 6.224 L 1.822 11.689 C 3.137 11.436 6.163 10.657 7.742 9.564 C 9.321 8.471 11.638 4.453 12.6 2.581 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 58.141 27.476 L 52.069 28.236 C 50.247 20.099 53.435 15.231 55.257 13.814 L 60.57 17.457 C 60.165 17.963 59.112 19.492 58.141 21.556 C 57.169 23.621 57.736 26.363 58.141 27.476 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 101.709,
    height: 50.247,
    viewBox: "0 0 101.709 50.247",
    fill: "none",
    style: {
      position: "absolute",
      left: 1.67,
      top: 16.589,
      width: 101.709,
      height: 50.247,
      color: "rgb(255,223,111)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 5.161 23.833 C 5.161 25.258 4.006 26.414 2.581 26.414 C 1.155 26.414 0 25.258 0 23.833 C 0 22.408 1.155 21.253 2.581 21.253 C 4.006 21.253 5.161 22.408 5.161 23.833 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 42.657 10.778 C 42.657 12.203 41.501 13.359 40.076 13.359 C 38.651 13.359 37.496 12.203 37.496 10.778 C 37.496 9.353 38.651 8.197 40.076 8.197 C 41.501 8.197 42.657 9.353 42.657 10.778 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 53.283 47.666 C 53.283 49.092 52.128 50.247 50.702 50.247 C 49.277 50.247 48.122 49.092 48.122 47.666 C 48.122 46.241 49.277 45.086 50.702 45.086 C 52.128 45.086 53.283 46.241 53.283 47.666 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 83.34 35.826 C 83.34 37.251 82.185 38.406 80.76 38.406 C 79.334 38.406 78.179 37.251 78.179 35.826 C 78.179 34.4 79.334 33.245 80.76 33.245 C 82.185 33.245 83.34 34.4 83.34 35.826 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 101.709 27.932 C 101.709 29.357 100.553 30.513 99.128 30.513 C 97.703 30.513 96.547 29.357 96.547 27.932 C 96.547 26.507 97.703 25.351 99.128 25.351 C 100.553 25.351 101.709 26.507 101.709 27.932 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 90.627 2.581 C 90.627 4.006 89.471 5.161 88.046 5.161 C 86.621 5.161 85.466 4.006 85.466 2.581 C 85.466 1.155 86.621 0 88.046 0 C 89.471 0 90.627 1.155 90.627 2.581 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 51.613,
    height: 57.318,
    viewBox: "0 0 51.613 57.318",
    fill: "none",
    style: {
      position: "absolute",
      left: 63.909,
      top: 17.803,
      width: 51.613,
      height: 57.318,
      color: "rgb(252,83,83)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 54.801 L 1.214 49.64 C 6.922 52.433 9.968 49.387 10.778 47.515 L 15.18 52.828 C 14.27 53.486 11.628 55.196 8.349 56.775 C 5.07 58.353 1.417 56.117 0 54.801 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 44.327 6.224 C 45.177 4.281 45.794 1.265 45.997 0 L 51.613 2.429 C 50.551 4.149 48.486 7.894 48.729 9.108 C 48.972 10.323 49.741 12.549 50.095 13.511 L 44.327 13.511 C 43.972 11.891 43.477 8.167 44.327 6.224 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 98.986,
    height: 58.141,
    viewBox: "0 0 98.986 58.141",
    fill: "none",
    style: {
      position: "absolute",
      left: 24.289,
      top: 0.346,
      width: 98.986,
      height: 58.141,
      color: "rgb(204,173,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 23.681 4.858 L 27.173 0 C 28.944 1.872 32.547 6.862 32.79 11.841 C 29.709 12.59 27.907 12.928 27.133 13.081 C 27.146 13.124 27.16 13.166 27.173 13.207 C 26.556 13.207 26.496 13.207 27.133 13.081 C 26.545 11.149 26.057 6.996 23.681 4.858 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 8.653 41.139 L 3.947 38.558 C -0.759 43.112 1.822 46.604 1.822 49.033 C 1.822 50.976 0.607 53.081 0 53.89 C 1.366 54.649 2.732 54.649 5.01 55.408 C 8.349 50.854 6.376 47.666 6.072 45.541 C 5.829 43.841 7.691 41.898 8.653 41.139 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 98.065 45.541 L 92.6 45.541 C 91.75 49.67 92.955 55.661 93.663 58.141 L 98.976 57.23 C 99.027 56.623 98.915 54.832 98.065 52.524 C 97.215 50.217 97.711 46.907 98.065 45.541 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 128,
    height: 141.302,
    viewBox: "0 0 128 141.302",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 128,
      height: 141.302,
      color: "rgb(0,0,0)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 49.298 1.645 C 48.442 2.577 47.54 3.591 47.293 3.898 C 47.046 4.206 46.815 4.487 46.779 4.522 C 46.744 4.557 46.695 4.769 46.67 4.993 C 46.617 5.476 46.85 5.858 47.808 6.863 C 48.209 7.283 48.602 7.876 48.703 8.212 C 48.801 8.541 48.984 8.896 49.109 8.999 C 49.234 9.103 49.336 9.283 49.336 9.399 C 49.336 9.515 49.4 9.729 49.477 9.874 C 49.84 10.552 50.095 11.819 50.095 12.938 C 50.095 14.117 50.115 14.186 50.603 14.718 L 51.111 15.272 L 51.855 15.101 C 52.265 15.007 52.976 14.852 53.435 14.758 C 53.894 14.663 54.562 14.455 54.919 14.297 C 55.276 14.138 55.673 14.008 55.802 14.008 C 56.188 14.008 57.589 13.308 57.904 12.958 C 58.155 12.679 58.194 12.433 58.165 11.325 C 58.146 10.608 58.071 9.91 57.998 9.775 C 57.926 9.639 57.722 8.923 57.547 8.183 C 57.371 7.443 57.12 6.589 56.989 6.286 C 56.159 4.362 55.736 3.71 54.565 2.547 C 52.536 0.533 51.969 0.081 51.386 0.013 C 50.877 -0.046 50.786 0.025 49.298 1.645 Z M 52.495 4.103 C 53.053 4.666 53.674 5.367 53.877 5.659 C 54.377 6.382 54.938 7.93 55.196 9.295 C 55.314 9.918 55.478 10.495 55.561 10.578 C 55.644 10.661 55.712 10.88 55.712 11.063 C 55.712 11.399 55.105 11.731 54.493 11.731 C 54.349 11.731 54.142 11.838 54.033 11.969 C 53.919 12.107 53.707 12.174 53.529 12.127 C 53.361 12.083 53.137 12.119 53.032 12.206 C 52.732 12.455 52.524 12.218 52.524 11.629 C 52.524 11.332 52.424 10.772 52.301 10.385 C 52.178 9.998 52.002 9.368 51.908 8.984 C 51.815 8.6 51.58 8.102 51.387 7.877 C 51.194 7.652 50.944 7.156 50.831 6.774 C 50.705 6.346 50.431 5.908 50.118 5.633 L 49.61 5.187 L 50.037 4.571 C 50.272 4.232 50.552 3.921 50.659 3.88 C 50.767 3.838 50.854 3.734 50.854 3.648 C 50.854 3.516 51.282 3.098 51.434 3.083 C 51.46 3.08 51.938 3.539 52.495 4.103 Z M 101.936 5.388 C 101.769 5.484 101.542 5.653 101.432 5.763 C 101.322 5.873 101.179 5.963 101.115 5.963 C 100.907 5.963 100.646 6.721 100.646 7.324 C 100.646 8.358 101.935 9.515 102.659 9.13 C 103.108 8.891 103.368 8.538 103.374 8.16 C 103.376 7.99 103.488 7.696 103.621 7.505 C 104.033 6.917 103.862 5.683 103.318 5.32 C 103.065 5.151 102.279 5.19 101.936 5.388 Z M 37.564 8.525 C 36.744 8.691 36.28 9.192 36.184 10.012 C 36.113 10.616 36.156 10.817 36.428 11.162 C 36.61 11.391 36.895 11.579 37.061 11.579 C 37.228 11.579 37.479 11.638 37.619 11.71 C 37.76 11.782 38.12 11.81 38.42 11.772 C 39.297 11.662 39.778 10.528 39.246 9.825 C 39.123 9.663 39.021 9.422 39.018 9.291 C 39.013 9.024 38.391 8.38 38.169 8.411 C 38.091 8.422 37.818 8.474 37.564 8.525 Z M 72.41 9.669 C 72.004 9.815 71.762 10.068 71.383 10.741 C 70.865 11.66 70.854 12.003 71.328 12.496 C 71.72 12.903 72.665 13.013 73.135 12.705 C 73.698 12.336 74.293 11.595 74.395 11.137 C 74.499 10.664 74.207 10.015 73.744 9.691 C 73.347 9.413 73.129 9.41 72.41 9.669 Z M 18.529 11.115 C 18.366 11.278 18.191 11.67 18.139 11.988 C 18.051 12.522 17.917 12.821 16.993 14.553 C 16.794 14.926 16.442 15.287 16.111 15.459 C 15.808 15.616 15.375 15.893 15.149 16.075 C 14.923 16.258 14.275 16.556 13.708 16.739 C 12.886 17.005 12.489 17.051 11.739 16.971 C 10.629 16.852 10.269 17 10.035 17.671 C 9.812 18.312 9.813 18.322 10.223 18.816 C 10.591 19.26 10.863 20.376 11.054 22.228 C 11.119 22.853 11.259 23.348 11.424 23.53 C 11.57 23.692 11.689 23.904 11.689 24.003 C 11.689 24.102 11.91 24.318 12.181 24.483 C 13.162 25.079 16.265 24.72 18.331 23.77 C 19.439 23.26 21.409 21.887 21.54 21.532 C 21.573 21.443 21.874 21.115 22.208 20.804 C 22.777 20.273 23.081 19.864 23.31 19.321 C 23.425 19.047 23.935 17.902 24.222 17.272 C 24.336 17.021 24.577 16.381 24.757 15.849 C 25.203 14.529 25.044 14.007 23.926 13.136 C 23.472 12.782 22.94 12.42 22.746 12.332 C 22.551 12.243 22.118 12.004 21.784 11.8 C 20.088 10.765 19.089 10.555 18.529 11.115 Z M 21.011 14.236 C 21.285 14.445 21.614 14.615 21.742 14.615 C 22.182 14.615 22.299 14.952 22.112 15.685 C 22.015 16.065 21.831 16.543 21.703 16.748 C 21.575 16.953 21.284 17.51 21.056 17.987 C 20.812 18.498 20.393 19.054 20.039 19.339 C 19.708 19.605 19.395 19.954 19.344 20.115 C 19.293 20.275 18.967 20.536 18.62 20.694 C 18.273 20.853 17.697 21.155 17.339 21.366 C 16.982 21.577 16.56 21.75 16.4 21.75 C 16.24 21.75 16.073 21.809 16.028 21.881 C 15.873 22.132 14.661 22.367 14.194 22.237 C 13.793 22.125 13.717 22.012 13.563 21.285 C 13.467 20.831 13.381 20.239 13.373 19.969 C 13.361 19.552 13.421 19.465 13.776 19.388 C 14.761 19.174 16.992 18.033 17.682 17.39 C 17.851 17.233 18.203 16.955 18.465 16.772 C 18.897 16.471 19.387 15.71 20.022 14.35 C 20.3 13.757 20.372 13.748 21.011 14.236 Z M 90.118 15.478 C 90.061 15.536 89.703 15.567 89.322 15.547 C 88.008 15.479 86.328 16.885 85.853 18.45 C 85.49 19.649 85.7 20.531 86.575 21.478 C 87.477 22.454 88.347 22.86 89.567 22.876 C 90.445 22.887 90.607 22.842 91.008 22.471 C 91.256 22.242 91.515 22.054 91.584 22.054 C 91.74 22.054 92.752 20.993 92.752 20.829 C 92.752 20.763 92.864 20.597 93.001 20.46 C 93.397 20.064 93.355 18.645 92.922 17.765 C 92.426 16.759 91.081 15.374 90.599 15.374 C 90.392 15.374 90.175 15.421 90.118 15.478 Z M 109.652 16.539 C 109.21 16.63 108.54 17.318 108.54 17.681 C 108.54 17.841 108.617 18.281 108.712 18.658 C 108.846 19.19 108.841 19.475 108.688 19.939 C 108.58 20.267 108.441 20.536 108.38 20.536 C 108.319 20.536 108.165 20.792 108.038 21.105 C 107.911 21.418 107.507 22.023 107.14 22.449 C 106.634 23.038 106.427 23.438 106.28 24.119 C 106.173 24.611 105.989 25.438 105.871 25.956 C 105.574 27.253 105.597 27.655 106.043 29.033 C 106.721 31.129 107.471 32.336 108.16 32.444 C 109.469 32.65 110.7 32.674 111.652 32.513 C 112.236 32.415 113.121 32.318 113.617 32.298 C 114.407 32.267 114.563 32.208 114.868 31.826 C 115.167 31.453 115.215 31.224 115.203 30.251 C 115.189 29.192 115.152 29.068 114.672 28.48 C 114.389 28.132 114.156 27.751 114.156 27.633 C 114.156 27.516 113.986 27.259 113.777 27.063 C 113.163 26.486 113.344 25.606 114.309 24.483 C 114.56 24.19 114.804 23.832 114.851 23.686 C 114.898 23.54 114.984 23.42 115.043 23.42 C 115.178 23.42 115.52 22.725 116.036 21.398 C 116.382 20.512 116.417 20.28 116.284 19.784 C 116.093 19.074 116.03 19.023 114.612 18.411 C 113.986 18.141 113.354 17.815 113.208 17.686 C 113.061 17.558 112.942 17.502 112.942 17.562 C 112.942 17.622 112.686 17.531 112.373 17.361 C 111.304 16.78 110.163 16.435 109.652 16.539 Z M 90.345 18.561 C 90.583 18.811 90.779 19.091 90.779 19.183 C 90.779 19.485 89.755 20.384 89.413 20.384 C 89.076 20.384 88.198 19.582 88.198 19.275 C 88.198 19.183 88.416 18.883 88.683 18.607 C 89.294 17.978 89.774 17.964 90.345 18.561 Z M 112.259 19.999 C 112.426 20.088 112.767 20.293 113.018 20.454 C 113.268 20.616 113.495 20.761 113.522 20.779 C 113.548 20.796 113.505 20.936 113.426 21.09 C 113.347 21.244 113.136 21.688 112.957 22.076 C 112.779 22.464 112.479 22.882 112.291 23.005 C 112.103 23.128 111.804 23.563 111.627 23.97 C 110.816 25.832 110.773 25.985 110.869 26.68 C 110.972 27.435 111.455 28.495 111.782 28.687 C 111.896 28.754 112.1 29.024 112.234 29.287 C 112.471 29.75 112.468 29.767 112.141 29.845 C 111.432 30.012 109.775 30.127 109.468 30.029 C 109.092 29.91 108.379 28.47 108.303 27.677 C 108.276 27.389 108.379 26.511 108.533 25.727 C 108.748 24.638 108.907 24.205 109.208 23.891 C 109.425 23.664 109.604 23.415 109.607 23.336 C 109.609 23.257 109.814 22.924 110.062 22.596 C 110.31 22.268 110.513 21.918 110.513 21.818 C 110.513 21.717 110.617 21.55 110.743 21.445 C 110.869 21.34 110.956 21.178 110.936 21.085 C 110.916 20.991 111.016 20.627 111.159 20.274 C 111.429 19.605 111.494 19.589 112.259 19.999 Z M 40.74 24.009 C 40.588 24.186 40.411 24.331 40.346 24.331 C 40.282 24.331 39.902 24.565 39.503 24.852 C 38.94 25.256 38.714 25.548 38.498 26.149 C 38.044 27.412 38.059 27.787 38.616 29.113 C 39.058 30.166 39.228 30.4 39.902 30.877 C 40.594 31.366 41.09 31.535 42.338 31.704 C 42.868 31.776 43.392 31.453 44.291 30.502 C 45.26 29.477 45.372 29.202 45.423 27.707 C 45.473 26.275 45.214 25.659 44.221 24.846 C 43.486 24.244 42.71 23.918 41.667 23.775 C 41.125 23.701 40.97 23.74 40.74 24.009 Z M 66.128 24.713 C 65.888 24.838 65.414 25.256 65.075 25.641 C 64.087 26.763 63.541 27.818 62.848 29.948 C 62.59 30.741 62.308 31.516 62.223 31.67 C 61.993 32.084 61.698 33.868 61.729 34.653 C 61.819 36.893 62.302 39.624 62.68 40.028 C 62.843 40.203 63.021 40.529 63.077 40.752 C 63.248 41.443 63.641 41.664 64.821 41.732 C 65.673 41.782 66.047 41.73 66.596 41.487 C 66.979 41.318 67.778 41.141 68.371 41.094 C 70.035 40.963 70.845 40.745 71.097 40.361 C 71.462 39.803 71.445 39.315 71.041 38.749 C 70.834 38.459 70.578 37.983 70.471 37.69 C 70.245 37.068 70.21 35.078 70.418 34.689 C 70.497 34.541 70.7 34.011 70.868 33.512 C 71.193 32.549 72.249 30.826 72.935 30.141 C 73.26 29.816 73.327 29.636 73.257 29.284 C 73.141 28.706 72.937 28.472 72.237 28.115 C 71.921 27.954 71.541 27.696 71.391 27.541 C 71.242 27.387 70.911 27.19 70.656 27.104 C 70.401 27.018 69.957 26.73 69.669 26.463 C 69.382 26.197 68.959 25.88 68.729 25.758 C 68.499 25.637 68.312 25.433 68.312 25.306 C 68.312 25.076 67.228 24.491 66.794 24.487 C 66.668 24.485 66.369 24.587 66.128 24.713 Z M 42.638 26.854 C 42.95 27.073 42.978 27.178 42.885 27.803 C 42.753 28.696 42.433 29.065 41.841 29.006 C 41.476 28.97 41.321 28.828 41.04 28.278 C 40.611 27.435 40.605 27.293 40.987 26.911 C 41.358 26.541 42.151 26.513 42.638 26.854 Z M 67.884 28.319 C 68.385 28.672 69.054 29.135 69.37 29.348 L 69.945 29.734 L 69.434 30.562 C 69.153 31.017 68.881 31.492 68.829 31.617 C 68.777 31.743 68.648 32.05 68.542 32.3 C 67.921 33.765 67.716 34.802 67.673 36.677 C 67.648 37.734 67.594 38.607 67.553 38.617 C 67.511 38.626 67.255 38.66 66.983 38.691 C 66.711 38.723 66.242 38.852 65.94 38.978 C 65.638 39.104 65.333 39.208 65.262 39.208 C 65.098 39.208 64.781 38.616 64.735 38.222 C 64.715 38.054 64.62 37.484 64.523 36.954 C 64.426 36.424 64.348 35.44 64.349 34.767 C 64.351 33.594 64.473 33.014 65.152 30.934 C 65.766 29.053 66.775 27.083 66.913 27.496 C 66.946 27.596 67.383 27.967 67.884 28.319 Z M 83.674 32.486 C 83.46 32.526 83.228 32.754 83.076 33.073 C 82.446 34.392 84.002 35.397 85.006 34.319 C 85.408 33.888 85.396 33.395 84.972 32.928 C 84.599 32.518 84.213 32.386 83.674 32.486 Z M 3.108 36.677 C 2.023 36.992 1.006 37.796 0.48 38.753 C 0.047 39.539 0 39.753 0 40.915 C 0 42.161 0.019 42.231 0.55 42.945 C 1.123 43.716 2.338 44.768 3.02 45.083 C 3.238 45.184 3.797 45.269 4.262 45.273 C 4.954 45.278 5.234 45.197 5.789 44.829 C 6.852 44.126 7.628 43.283 8.173 42.243 C 8.614 41.402 8.664 41.193 8.582 40.513 C 8.409 39.061 8.162 38.402 7.599 37.88 C 6.724 37.071 6.538 36.931 6.338 36.928 C 6.234 36.927 5.875 36.827 5.541 36.707 C 4.815 36.446 3.942 36.435 3.108 36.677 Z M 27.742 37.588 C 27.596 37.704 27.476 37.877 27.476 37.972 C 27.476 38.067 27.319 38.145 27.127 38.145 C 26.647 38.145 25.949 38.937 25.421 40.08 C 25.179 40.602 24.929 41.029 24.863 41.029 C 24.798 41.029 24.744 41.162 24.744 41.324 C 24.744 41.486 24.681 41.658 24.604 41.705 C 24.527 41.753 24.419 41.996 24.364 42.245 C 24.309 42.495 24.213 42.699 24.15 42.699 C 23.725 42.699 23.637 45.894 24.037 46.815 C 24.168 47.116 24.308 47.526 24.349 47.725 C 24.39 47.925 24.525 48.556 24.649 49.127 C 24.774 49.699 24.839 50.279 24.795 50.417 C 24.602 51.029 24.031 52.084 23.592 52.642 C 22.815 53.63 22.761 53.8 22.967 54.623 C 23.123 55.249 23.25 55.417 23.833 55.771 C 24.209 55.999 24.695 56.191 24.913 56.198 C 25.132 56.204 25.473 56.336 25.672 56.49 C 26.172 56.877 26.754 57.012 28.084 57.05 C 29.402 57.087 29.812 56.921 30.361 56.129 C 30.569 55.828 30.883 55.398 31.058 55.174 C 31.629 54.441 32.618 52.203 32.712 51.428 C 32.763 51.01 32.842 50.386 32.887 50.041 C 32.937 49.663 32.904 49.373 32.804 49.311 C 32.713 49.255 32.638 49.075 32.638 48.912 C 32.638 48.749 32.577 48.497 32.502 48.352 C 32.428 48.207 32.288 47.917 32.191 47.709 C 32.094 47.5 31.876 47.062 31.707 46.736 C 31.494 46.327 31.427 45.992 31.49 45.657 C 31.591 45.116 32.287 43.978 33.038 43.126 C 34.039 41.989 34.039 40.763 33.037 40.344 C 32.754 40.226 32.484 40.028 32.436 39.903 C 32.388 39.779 32.055 39.528 31.696 39.346 C 31.337 39.164 30.649 38.674 30.166 38.257 C 29.203 37.426 28.271 37.168 27.742 37.588 Z M 5.301 39.353 C 6.157 39.79 6.25 40.453 5.613 41.567 C 5.053 42.546 4.789 42.718 4.038 42.596 C 3.346 42.484 2.481 41.55 2.463 40.895 C 2.444 40.242 3.034 39.487 3.732 39.272 C 4.563 39.014 4.645 39.019 5.301 39.353 Z M 30.246 41.339 C 30.558 41.544 30.814 41.754 30.815 41.805 C 30.816 41.856 30.604 42.164 30.344 42.488 C 30.084 42.813 29.717 43.42 29.528 43.838 C 28.692 45.683 28.679 46.198 29.433 47.756 C 29.682 48.273 29.934 48.9 29.993 49.151 C 30.051 49.401 30.167 49.692 30.249 49.797 C 30.446 50.047 30.258 51.459 29.973 51.865 C 29.852 52.038 29.754 52.278 29.754 52.4 C 29.754 52.522 29.497 53.012 29.184 53.489 C 28.633 54.329 28.591 54.358 27.856 54.415 C 27.183 54.467 26.595 54.287 25.98 53.838 C 25.95 53.816 26.069 53.596 26.246 53.349 C 26.422 53.101 26.566 52.806 26.566 52.692 C 26.566 52.579 26.713 52.214 26.892 51.881 C 27.545 50.673 27.416 48.697 26.535 46.418 C 26.23 45.628 26.396 43.32 26.793 42.851 C 26.899 42.726 27.174 42.213 27.404 41.712 C 27.634 41.211 27.959 40.651 28.125 40.467 L 28.428 40.132 L 29.053 40.548 C 29.396 40.777 29.933 41.133 30.246 41.339 Z M 100.266 41.097 C 99.765 41.185 99.185 41.357 98.976 41.479 C 98.767 41.601 98.55 41.688 98.492 41.672 C 98.325 41.625 97.291 42.88 97.067 43.4 C 96.955 43.661 96.82 44.31 96.766 44.842 C 96.671 45.79 96.682 45.83 97.279 46.705 C 97.631 47.221 98.196 47.798 98.616 48.071 C 99.236 48.474 99.479 48.542 100.261 48.53 C 101.411 48.514 102.065 48.209 103.058 47.227 C 103.858 46.435 104.289 45.463 104.289 44.452 C 104.289 43.84 103.307 42.182 102.79 41.922 C 102.571 41.812 102.118 41.545 101.784 41.329 C 101.212 40.959 101.126 40.946 100.266 41.097 Z M 50.019 43.883 C 49.37 43.961 48.927 44.44 48.816 45.183 C 48.709 45.895 49.007 46.687 49.454 46.883 C 50.203 47.211 50.535 47.129 51.194 46.451 C 52 45.622 52.051 45.085 51.386 44.424 C 50.853 43.895 50.636 43.809 50.019 43.883 Z M 100.125 44.082 C 100.184 44.177 100.437 44.217 100.707 44.173 C 101.212 44.091 101.59 44.281 101.745 44.693 C 101.864 45.011 101.194 45.666 100.502 45.907 C 100.019 46.075 99.966 46.06 99.632 45.645 C 99.363 45.31 99.3 45.094 99.372 44.748 C 99.523 44.024 99.889 43.7 100.125 44.082 Z M 120.359 44.367 C 120.221 44.45 119.272 44.551 118.25 44.592 C 116.002 44.681 115.796 44.783 115.446 45.987 C 115.076 47.261 115.002 48.097 114.999 51.048 C 114.995 53.649 115.004 53.723 115.421 54.589 C 115.67 55.108 115.848 55.734 115.852 56.107 C 115.855 56.486 116.035 57.107 116.297 57.649 C 116.539 58.149 116.737 58.708 116.737 58.89 C 116.737 59.073 116.907 59.424 117.114 59.67 C 117.428 60.043 117.61 60.12 118.205 60.132 C 118.598 60.14 119.013 60.069 119.127 59.974 C 119.241 59.88 119.621 59.749 119.971 59.684 C 120.321 59.619 121.189 59.416 121.898 59.234 C 124.553 58.553 124.678 58.447 124.72 56.85 C 124.754 55.572 124.572 54.845 123.88 53.496 C 122.923 51.631 122.682 49.687 123.065 46.941 C 123.266 45.497 123.102 45.026 122.278 44.672 C 121.399 44.296 120.668 44.179 120.359 44.367 Z M 120.442 47.495 C 120.434 47.738 120.409 48.346 120.386 48.847 C 120.327 50.152 120.494 51.725 120.759 52.36 C 120.885 52.661 120.988 53.108 120.988 53.354 C 120.988 53.856 121.208 54.337 121.598 54.685 C 121.83 54.892 122.354 56.031 122.354 56.327 C 122.354 56.496 121.603 56.779 120.836 56.898 C 120.46 56.957 119.965 57.101 119.735 57.218 C 119.475 57.351 119.318 57.371 119.318 57.271 C 119.318 57.183 119.079 56.871 118.786 56.579 C 118.338 56.13 118.255 55.942 118.255 55.37 C 118.255 54.997 118.272 54.675 118.292 54.654 C 118.313 54.633 118.176 54.399 117.988 54.135 C 117.469 53.407 117.258 50.14 117.585 47.902 C 117.689 47.194 117.771 47.156 119.394 47.054 C 120.439 46.989 120.458 46.998 120.442 47.495 Z M 82.091 48.427 C 80.963 48.516 79.895 49.318 79.281 50.536 C 78.259 52.564 78.395 54.193 79.688 55.426 C 80.531 56.229 81.002 56.432 82.354 56.572 C 83.514 56.693 84.751 55.982 85.801 54.591 C 86.416 53.777 86.438 53.708 86.491 52.437 L 86.545 51.124 L 85.872 50.213 C 84.792 48.754 84.409 48.436 83.836 48.524 C 83.567 48.566 83.306 48.536 83.258 48.458 C 83.21 48.38 83.089 48.328 82.99 48.343 C 82.89 48.358 82.486 48.396 82.091 48.427 Z M 83.495 51.208 C 83.621 51.272 83.812 51.566 83.919 51.862 C 84.092 52.339 84.078 52.469 83.796 53.02 C 83.327 53.94 82.403 54.22 81.591 53.689 C 81.171 53.414 81.107 52.887 81.374 51.922 C 81.62 51.04 82.547 50.727 83.495 51.208 Z M 11.886 54.35 C 11.324 54.958 10.778 55.903 10.778 56.268 C 10.778 56.588 11.497 57.396 12.026 57.669 C 12.382 57.853 12.566 57.867 12.884 57.736 C 13.599 57.439 14.261 56.395 14.5 55.185 C 14.582 54.77 14.525 54.62 14.141 54.236 C 13.78 53.875 13.554 53.781 13.049 53.781 C 12.509 53.781 12.334 53.866 11.886 54.35 Z M 103.096 57.661 C 101.852 58.794 101.877 59.897 103.152 60.089 C 104.388 60.274 105.504 59.349 105.504 58.138 C 105.504 57.506 105.12 57.125 104.392 57.035 C 103.926 56.977 103.759 57.058 103.096 57.661 Z M 50.99 60.685 C 50.689 60.882 50.158 61.12 49.81 61.214 C 49.344 61.34 49.057 61.55 48.725 62.008 C 48.477 62.35 48.274 62.753 48.274 62.903 C 48.274 63.052 48.196 63.222 48.102 63.28 C 47.893 63.41 48.026 64.933 48.303 65.568 C 48.584 66.213 49.206 67.139 49.358 67.139 C 49.431 67.139 49.849 67.396 50.287 67.709 C 51.06 68.262 51.116 68.277 52.324 68.256 C 53.189 68.24 53.672 68.16 53.914 67.99 C 54.105 67.856 54.411 67.747 54.594 67.747 C 55.471 67.747 56.556 65.188 56.442 63.39 C 56.388 62.552 56.318 62.371 55.868 61.906 C 55.355 61.377 54.15 60.846 52.636 60.482 C 51.693 60.255 51.634 60.263 50.99 60.685 Z M 53.474 63.3 C 53.957 63.391 54.16 63.903 53.903 64.383 C 53.813 64.552 53.739 64.823 53.739 64.986 C 53.739 65.402 53.432 65.607 52.661 65.708 C 52.099 65.781 51.891 65.728 51.352 65.374 C 50.6 64.879 50.537 64.757 50.656 64.027 C 50.743 63.489 50.757 63.479 51.3 63.57 C 51.747 63.646 51.912 63.602 52.146 63.343 C 52.345 63.123 52.534 63.053 52.746 63.122 C 52.916 63.176 53.244 63.257 53.474 63.3 Z M 74.648 63.956 C 74.201 64.035 73.858 64.287 73.054 65.129 C 71.602 66.652 70.948 66.979 69.301 67.002 C 68.149 67.018 67.892 66.97 67.201 66.61 C 66.167 66.071 64.807 66.046 64.264 66.556 C 64.069 66.739 63.909 66.972 63.909 67.073 C 63.909 67.174 63.807 67.452 63.683 67.691 C 63.558 67.93 63.456 68.23 63.455 68.358 C 63.454 68.486 63.361 68.725 63.247 68.889 C 63.036 69.195 62.389 72.155 62.395 72.786 C 62.401 73.393 63.453 74.358 64.485 74.703 C 64.76 74.795 65.173 75.004 65.402 75.167 C 66.181 75.721 69.935 76.091 71.651 75.783 C 72.194 75.686 72.789 75.511 72.974 75.395 C 73.159 75.28 73.432 75.185 73.582 75.185 C 73.731 75.185 74.412 74.963 75.095 74.691 C 75.993 74.335 76.762 73.865 77.866 72.997 C 78.706 72.336 79.393 71.738 79.393 71.668 C 79.393 71.599 79.484 71.542 79.595 71.542 C 79.705 71.542 79.958 71.369 80.156 71.158 C 80.655 70.627 80.616 69.87 80.054 69.214 C 79.816 68.936 79.382 68.408 79.09 68.041 C 78.798 67.673 78.06 66.869 77.451 66.254 C 76.8 65.597 76.309 64.962 76.26 64.716 C 76.149 64.162 75.426 63.821 74.648 63.956 Z M 86.877 65.659 C 86.258 66.339 86.217 66.569 86.554 67.484 C 86.823 68.215 86.95 68.368 87.448 68.567 C 88.552 69.009 89.416 68.32 89.533 66.905 C 89.595 66.155 89.574 66.1 89.074 65.718 C 88.376 65.186 87.334 65.158 86.877 65.659 Z M 75.446 68.07 C 75.446 68.131 75.575 68.222 75.732 68.272 C 76.132 68.399 76.523 68.782 76.99 69.505 L 77.39 70.125 L 76.684 70.732 C 75.552 71.706 74.872 72.066 73.035 72.663 C 70.023 73.642 68.202 73.631 66.004 72.622 C 65.18 72.244 65.139 72.198 65.131 71.656 C 65.124 71.124 65.64 69.331 65.874 69.072 C 65.932 69.008 66.283 69.068 66.652 69.206 C 67.124 69.381 67.928 69.469 69.345 69.498 L 71.365 69.539 L 72.305 68.942 C 72.822 68.614 73.359 68.307 73.497 68.26 C 73.635 68.213 73.966 67.903 74.233 67.571 L 74.717 66.969 L 75.082 67.463 C 75.282 67.735 75.446 68.008 75.446 68.07 Z M 98.541 67.957 C 97.338 68.357 96.262 69.241 95.75 70.251 C 95.133 71.467 94.877 72.034 94.877 72.187 C 94.877 72.266 94.78 72.546 94.661 72.809 C 94.424 73.334 94.081 75.616 93.812 78.449 C 93.718 79.451 93.543 80.68 93.424 81.181 C 93.305 81.682 93.22 82.229 93.235 82.396 C 93.27 82.797 93.06 83.874 92.909 84.066 C 92.844 84.149 92.751 84.422 92.703 84.673 C 92.432 86.09 92.174 87.159 92.06 87.343 C 91.989 87.459 91.814 88.067 91.671 88.694 C 91.528 89.321 91.297 90.176 91.159 90.593 C 90.923 91.308 90.84 91.496 90.48 92.149 C 90.4 92.295 90.195 92.735 90.025 93.127 C 89.856 93.518 89.65 93.88 89.569 93.93 C 89.487 93.98 89.35 94.284 89.264 94.605 C 89.173 94.941 88.8 95.518 88.387 95.964 C 87.991 96.39 87.496 96.955 87.287 97.22 C 86.767 97.878 86.511 98.132 86.009 98.487 C 85.773 98.654 85.39 98.944 85.159 99.132 C 84.928 99.32 84.674 99.474 84.594 99.474 C 84.514 99.474 84.296 99.607 84.108 99.77 C 83.7 100.124 81.301 100.647 81.157 100.413 C 80.992 100.147 81.521 98.376 82.176 96.995 C 82.566 96.174 82.885 95.414 82.885 95.307 C 82.885 95.2 83.011 94.949 83.164 94.75 C 83.871 93.835 85.357 89.936 85.558 88.468 C 85.603 88.134 85.743 87.425 85.869 86.892 C 86.192 85.519 86.024 83.676 85.467 82.499 C 85.039 81.594 84.088 80.725 83.101 80.336 C 82.128 79.952 80.035 80.376 79.232 81.12 C 79.105 81.237 78.867 81.408 78.704 81.499 C 78.54 81.59 78.26 81.898 78.082 82.182 C 77.903 82.467 77.588 82.87 77.382 83.08 C 77.176 83.289 76.87 83.733 76.702 84.066 C 75.754 85.949 74.52 88.304 74.405 88.451 C 74.332 88.544 74.188 88.893 74.085 89.227 C 73.808 90.129 73.155 91.783 72.998 91.977 C 72.923 92.071 72.695 92.703 72.492 93.383 C 72.288 94.063 72.016 94.77 71.887 94.955 C 71.757 95.14 71.651 95.414 71.651 95.564 C 71.651 95.85 70.646 98.507 69.732 100.635 C 69.619 100.898 69.526 101.254 69.526 101.427 C 69.526 101.599 69.431 101.965 69.315 102.239 C 68.972 103.048 68.634 104.335 68.48 105.427 C 68.401 105.987 68.3 106.505 68.256 106.576 C 68.179 106.701 67.919 108.062 67.758 109.189 C 67.455 111.305 67.659 117.056 68.072 118.027 C 68.204 118.337 68.312 118.879 68.312 119.23 C 68.312 119.868 68.473 120.526 68.852 121.432 C 68.961 121.695 69.098 122.173 69.154 122.495 C 69.211 122.816 69.693 123.994 70.227 125.112 C 70.76 126.23 71.196 127.202 71.196 127.272 C 71.196 127.342 71.418 127.761 71.689 128.202 C 72.451 129.44 72.759 130.017 73.451 131.504 C 73.548 131.713 73.808 132.189 74.028 132.562 L 74.429 133.24 L 74.26 135.522 C 74.074 138.03 74.163 138.965 74.653 139.653 C 75.253 140.496 75.293 140.507 77.997 140.574 C 82.91 140.696 94.572 140.796 101.709 140.776 C 104.422 140.769 107.178 140.788 107.834 140.819 C 108.877 140.868 109.071 140.835 109.395 140.554 C 109.747 140.247 109.771 140.111 109.92 137.501 C 110.006 135.998 110.102 133.675 110.134 132.339 C 110.166 131.003 110.234 129.193 110.285 128.316 C 110.336 127.44 110.408 126.21 110.443 125.584 C 110.478 124.958 110.615 124.014 110.748 123.486 C 111.034 122.344 112.434 119.499 113.208 118.487 C 113.511 118.09 114.307 116.947 114.977 115.945 C 116.182 114.145 117.728 111.989 118.476 111.066 C 118.689 110.804 118.865 110.531 118.869 110.459 C 118.872 110.387 119.077 110.091 119.324 109.802 C 119.571 109.513 119.773 109.222 119.773 109.155 C 119.773 109.088 120.043 108.639 120.372 108.156 C 120.701 107.674 121.042 107.092 121.129 106.864 C 121.215 106.636 121.527 106.074 121.82 105.615 C 122.114 105.156 122.355 104.663 122.356 104.518 C 122.357 104.374 122.534 103.948 122.749 103.572 C 123.641 102.018 125.221 97.92 125.47 96.513 C 125.529 96.18 125.679 95.531 125.802 95.071 C 125.925 94.612 126.077 93.992 126.138 93.693 C 126.2 93.395 126.31 93.053 126.384 92.935 C 126.457 92.816 126.567 92.343 126.629 91.884 C 126.725 91.164 126.831 90.584 127.293 88.24 C 127.335 88.031 127.401 87.485 127.441 87.026 C 127.481 86.567 127.58 85.576 127.661 84.825 C 127.824 83.316 128.025 80.551 127.997 80.195 C 127.943 79.482 127.813 76.381 127.816 75.849 C 127.817 75.505 127.716 74.933 127.591 74.578 C 127.466 74.223 127.364 73.719 127.364 73.458 C 127.365 72.776 126.623 70.801 126.123 70.155 C 124.749 68.38 120.777 68.379 119.385 70.153 C 119.256 70.317 119.134 70.256 118.774 69.846 C 117.772 68.703 116.462 68.064 115.103 68.054 C 114.464 68.049 112.082 69.008 111.733 69.411 C 111.364 69.836 111.089 69.797 110.795 69.279 C 110.632 68.992 110.19 68.671 109.522 68.352 C 108.085 67.666 106.857 67.641 105.58 68.273 C 105.079 68.521 104.444 68.914 104.17 69.146 C 103.559 69.663 103.522 69.664 103.063 69.177 C 102.629 68.714 101.021 67.898 100.544 67.898 C 100.361 67.898 100.052 67.84 99.859 67.767 C 99.614 67.676 99.214 67.734 98.541 67.957 Z M 22.998 68.273 C 21.738 68.604 21.067 68.96 20.466 69.617 L 19.894 70.243 L 19.397 69.767 C 19.072 69.455 18.445 69.137 17.588 68.85 C 16.369 68.441 16.207 68.421 15.299 68.571 C 14.228 68.749 13.323 69.259 12.515 70.141 L 12.024 70.677 L 11.363 70.141 C 10.912 69.776 10.371 69.524 9.659 69.347 C 7.224 68.745 5.006 69.802 4.416 71.845 C 4.308 72.221 4.151 72.613 4.067 72.715 C 3.983 72.818 3.855 73.33 3.783 73.854 C 3.054 79.13 3.206 85.32 4.179 89.95 C 4.385 90.933 4.554 91.978 4.554 92.273 C 4.554 92.568 4.668 93.028 4.807 93.295 C 4.946 93.562 5.078 93.952 5.101 94.161 C 5.123 94.369 5.214 94.813 5.302 95.147 C 5.391 95.481 5.566 96.233 5.691 96.817 C 5.816 97.402 6.05 98.221 6.211 98.639 C 6.372 99.056 6.721 99.978 6.986 100.688 C 7.252 101.398 7.556 102.149 7.662 102.358 C 7.769 102.567 8.107 103.284 8.413 103.952 C 8.719 104.62 9.08 105.371 9.215 105.622 C 9.35 105.872 9.698 106.555 9.989 107.14 C 10.28 107.724 10.713 108.451 10.952 108.756 C 11.19 109.06 11.385 109.413 11.385 109.54 C 11.385 109.667 11.441 109.794 11.509 109.822 C 11.577 109.849 12.092 110.521 12.654 111.314 C 13.215 112.108 13.807 112.927 13.968 113.136 C 14.129 113.345 14.397 113.694 14.564 113.913 C 14.731 114.132 15.464 115.191 16.194 116.266 C 16.923 117.342 17.754 118.529 18.04 118.905 C 18.691 119.757 20.125 122.672 20.436 123.772 C 20.564 124.226 20.691 124.87 20.72 125.204 C 20.835 126.571 20.971 129.769 21.023 132.339 C 21.053 133.842 21.118 135.55 21.167 136.134 C 21.216 136.719 21.292 137.812 21.335 138.563 C 21.379 139.315 21.437 140.066 21.466 140.233 C 21.494 140.4 21.526 140.607 21.537 140.694 C 21.571 140.973 22.464 141.407 22.741 141.279 C 22.882 141.213 27.302 141.147 32.562 141.133 C 37.822 141.118 43.219 141.091 44.554 141.072 C 45.89 141.052 47.819 141.048 48.841 141.062 C 49.863 141.076 50.771 141.044 50.858 140.99 C 50.946 140.936 52.091 140.89 53.402 140.889 C 54.959 140.888 55.861 140.827 55.998 140.714 C 56.465 140.331 56.904 139.401 57.007 138.582 C 57.067 138.1 57.03 136.857 56.924 135.785 L 56.732 133.854 L 57.134 133.097 C 57.355 132.68 57.597 132.237 57.671 132.111 C 57.746 131.986 57.929 131.576 58.078 131.201 C 58.227 130.825 58.447 130.401 58.567 130.258 C 58.686 130.115 58.948 129.671 59.148 129.271 C 59.349 128.871 59.609 128.373 59.726 128.165 C 60.215 127.299 61.931 123.5 62.024 123.079 C 62.08 122.829 62.261 122.214 62.428 121.713 C 62.594 121.212 62.787 120.311 62.856 119.71 C 62.925 119.109 63.08 118.426 63.2 118.192 C 63.396 117.811 63.46 117.096 63.674 112.908 C 63.706 112.285 63.349 108.831 63.157 107.899 C 63.07 107.481 62.937 106.749 62.86 106.271 C 62.698 105.268 61.697 101.588 61.404 100.916 C 61.295 100.665 61.055 100.051 60.871 99.55 C 60.528 98.614 60.343 98.153 59.909 97.153 C 59.771 96.838 59.659 96.466 59.659 96.329 C 59.659 96.191 59.526 95.8 59.364 95.461 C 59.201 95.121 58.894 94.321 58.681 93.681 C 58.469 93.042 58.2 92.324 58.084 92.087 C 57.539 90.966 57.372 90.565 57.307 90.214 C 57.241 89.859 57.077 89.442 56.758 88.813 C 55.068 85.487 54.083 83.718 53.794 83.491 C 53.596 83.336 53.433 83.128 53.431 83.03 C 53.424 82.773 52.688 82.008 51.987 81.53 C 50.711 80.659 49.34 80.343 48.274 80.674 C 47.435 80.935 46.239 81.938 45.796 82.753 C 45.159 83.922 44.986 85.916 45.379 87.557 C 45.459 87.891 45.563 88.458 45.611 88.816 C 45.659 89.175 45.76 89.584 45.835 89.727 C 45.909 89.869 46.119 90.532 46.301 91.2 C 46.576 92.207 47.544 94.45 48.103 95.375 C 48.179 95.5 48.378 95.91 48.546 96.286 C 48.713 96.661 49.053 97.413 49.3 97.956 C 49.692 98.816 50.205 100.791 50.068 100.912 C 50.041 100.936 49.476 100.86 48.812 100.745 C 48.029 100.609 47.389 100.393 46.991 100.13 C 46.653 99.907 46.107 99.549 45.778 99.334 C 45.053 98.859 43.568 97.366 43.568 97.111 C 43.568 97.01 43.396 96.815 43.185 96.677 C 42.659 96.332 41.898 95.249 41.898 94.844 C 41.898 94.661 41.769 94.395 41.612 94.253 C 41.455 94.11 41.205 93.673 41.057 93.28 C 40.909 92.888 40.662 92.404 40.508 92.205 C 40.354 92.005 40.226 91.698 40.225 91.521 C 40.223 91.345 40.097 90.926 39.945 90.592 C 39.793 90.257 39.621 89.71 39.564 89.377 C 39.506 89.044 39.329 88.327 39.169 87.785 C 39.01 87.242 38.766 86.32 38.626 85.735 C 38.486 85.151 38.277 84.38 38.161 84.022 C 38.046 83.665 37.951 83.062 37.951 82.684 C 37.951 82.306 37.877 81.858 37.786 81.689 C 37.639 81.414 37.518 80.462 37.258 77.538 C 37.142 76.232 37.054 75.468 36.97 75.033 C 36.93 74.825 36.851 74.362 36.796 74.005 C 36.741 73.648 36.636 73.32 36.564 73.275 C 36.492 73.23 36.433 73.06 36.433 72.896 C 36.433 72.732 36.143 72.01 35.788 71.291 C 34.978 69.648 34.107 68.818 32.709 68.352 C 31.849 68.066 31.627 68.047 30.934 68.195 C 29.94 68.408 28.655 69.051 28.132 69.597 C 27.743 70.004 27.723 70.007 27.301 69.758 C 27.064 69.618 26.869 69.451 26.869 69.387 C 26.869 69.229 24.648 68.2 24.155 68.13 C 23.936 68.099 23.416 68.163 22.998 68.273 Z M 100.697 70.31 C 102 70.92 102.073 71.086 102.041 73.363 C 101.985 77.356 101.863 79.717 101.638 81.168 C 101.51 81.996 101.405 82.953 101.405 83.294 C 101.405 83.636 101.334 84.154 101.248 84.446 C 101.162 84.738 101.055 85.25 101.011 85.584 C 100.967 85.918 100.895 86.293 100.85 86.419 C 100.805 86.544 100.749 86.938 100.724 87.296 C 100.7 87.653 100.607 88.131 100.518 88.358 C 100.429 88.586 100.141 89.614 99.878 90.644 C 99.615 91.673 99.305 92.698 99.189 92.921 C 99.073 93.143 98.978 93.409 98.977 93.51 C 98.976 93.791 98.481 94.768 98.341 94.768 C 98.273 94.768 98.217 94.847 98.217 94.943 C 98.217 95.04 98.046 95.342 97.838 95.616 C 97.225 96.419 97.441 97.349 98.29 97.562 C 98.856 97.704 99.322 97.322 100.093 96.084 C 100.937 94.726 101.461 93.33 102.18 90.517 C 102.361 89.808 102.566 89.112 102.635 88.971 C 102.761 88.716 102.986 87.548 103.214 85.963 C 103.28 85.504 103.412 84.936 103.508 84.702 C 103.603 84.467 103.673 83.955 103.663 83.563 C 103.652 83.172 103.721 82.1 103.816 81.181 C 104.026 79.139 104.111 78.013 104.21 75.944 C 104.324 73.579 104.511 72.586 105.005 71.72 C 105.781 70.361 106.804 69.854 108.145 70.165 C 108.77 70.31 108.985 70.447 109.261 70.878 C 109.449 71.171 109.602 71.529 109.602 71.672 C 109.602 71.816 109.711 72.341 109.843 72.838 C 110.089 73.763 110.186 76.394 110.006 77.234 C 109.952 77.485 109.837 78.68 109.749 79.891 C 109.574 82.33 109.227 85.813 109.01 87.326 C 108.932 87.867 108.893 88.35 108.924 88.4 C 109.008 88.535 108.58 90.928 108.302 91.883 C 107.898 93.269 106.833 95.864 106.382 96.559 C 105.822 97.423 105.818 98.143 106.37 98.655 C 106.85 99.1 107.397 99.047 107.814 98.516 C 108.098 98.153 108.833 96.676 109.15 95.83 C 109.26 95.538 109.404 95.226 109.471 95.137 C 109.614 94.947 110.356 92.794 110.279 92.794 C 110.25 92.794 110.358 92.409 110.521 91.938 C 110.683 91.467 110.887 90.459 110.974 89.699 C 111.061 88.938 111.198 87.818 111.278 87.209 C 111.358 86.601 111.426 85.747 111.428 85.312 C 111.43 84.877 111.498 84.248 111.58 83.914 C 111.662 83.58 111.764 82.692 111.808 81.94 C 111.98 79.003 112.018 78.578 112.166 77.918 C 112.25 77.542 112.318 76.709 112.318 76.067 C 112.318 75.426 112.384 74.64 112.464 74.322 C 112.545 74.003 112.607 73.25 112.602 72.647 C 112.597 71.946 112.667 71.463 112.796 71.308 C 113.455 70.513 115.586 70.079 116.417 70.57 C 117 70.914 117.648 71.858 117.648 72.365 C 117.648 72.57 117.707 72.774 117.778 72.819 C 117.85 72.863 117.959 73.294 118.021 73.776 C 118.45 77.112 118.331 81.168 117.706 84.503 C 117.501 85.598 117.316 86.631 117.294 86.798 C 117.272 86.965 117.212 87.272 117.161 87.481 C 117.109 87.69 116.99 88.271 116.895 88.771 C 116.668 89.979 116.281 91.582 116.126 91.959 C 116.057 92.126 115.867 92.673 115.704 93.174 C 115.105 95.01 113.983 97.517 113.642 97.781 C 113.378 97.984 112.026 98.679 111.272 98.998 C 110.896 99.157 110.213 99.447 109.754 99.641 C 108.196 100.301 106.641 101.707 105.404 103.572 C 104.198 105.391 103.787 107.172 104.449 107.708 C 105.161 108.285 106.008 107.923 106.262 106.932 C 106.487 106.056 106.692 105.6 107.132 105 C 107.322 104.742 107.478 104.469 107.479 104.393 C 107.483 104.028 110.015 101.751 110.416 101.751 C 110.543 101.751 110.683 101.692 110.727 101.621 C 110.771 101.55 111.271 101.337 111.837 101.149 C 112.403 100.96 113.037 100.649 113.246 100.457 C 113.454 100.264 113.898 100.034 114.232 99.944 C 115.102 99.711 115.588 99.224 115.992 98.183 C 116.186 97.682 116.471 97.086 116.625 96.858 C 116.779 96.63 117.143 95.742 117.433 94.885 C 117.723 94.027 118.015 93.223 118.082 93.098 C 118.257 92.772 119.915 85.486 119.913 85.052 C 119.911 84.548 120.242 82.27 120.34 82.111 C 120.397 82.018 120.456 79.884 120.47 77.369 C 120.501 71.79 120.545 71.596 121.878 71.131 C 122.6 70.88 123.157 70.885 123.791 71.15 C 124.553 71.469 124.998 72.515 125.248 74.578 C 125.314 75.121 125.436 75.872 125.521 76.248 C 125.61 76.647 125.651 78.445 125.617 80.574 C 125.549 84.966 125.461 86.144 125.016 88.62 C 124.608 90.89 124.456 91.624 124.242 92.339 C 124.13 92.715 123.891 93.705 123.712 94.54 C 123.532 95.375 123.323 96.178 123.247 96.325 C 123.171 96.472 123.012 96.984 122.894 97.463 C 122.675 98.35 121.97 100.174 121.731 100.473 C 121.658 100.564 121.493 100.94 121.363 101.308 C 121.064 102.159 120.559 103.303 120.094 104.179 C 119.895 104.555 119.533 105.238 119.289 105.698 C 119.046 106.157 118.475 107.087 118.02 107.764 C 117.565 108.441 117.193 109.035 117.193 109.085 C 117.193 109.133 117.013 109.365 116.795 109.599 C 116.576 109.833 116.286 110.195 116.151 110.404 C 115.637 111.196 114.542 112.586 114.012 113.116 C 113.709 113.419 113.371 113.931 113.262 114.253 C 113.152 114.575 112.903 115.088 112.707 115.392 C 112.159 116.246 111.381 117.375 111.034 117.819 C 110.862 118.04 110.628 118.461 110.516 118.753 C 110.403 119.045 110.23 119.387 110.13 119.512 C 109.748 119.991 108.692 122.297 108.692 122.651 C 108.692 122.856 108.627 123.144 108.548 123.292 C 108.335 123.689 108.088 126.93 108.021 130.214 C 107.899 136.112 107.756 138.339 107.492 138.464 C 107.224 138.589 84.739 138.556 80.76 138.424 C 79.382 138.378 77.864 138.343 77.387 138.346 C 76.561 138.351 76.514 138.33 76.412 137.927 C 76.354 137.694 76.39 136.546 76.493 135.376 C 76.711 132.905 76.595 132.087 75.905 131.225 C 75.425 130.625 74.333 128.601 72.862 125.584 C 72.353 124.54 71.843 123.511 71.727 123.298 C 71.611 123.084 71.402 122.401 71.262 121.78 C 71.123 121.158 70.939 120.563 70.853 120.457 C 70.665 120.223 70.164 117.758 69.967 116.096 C 69.635 113.283 69.869 109.077 70.509 106.381 C 70.648 105.796 70.877 104.772 71.019 104.104 C 71.161 103.436 71.325 102.815 71.382 102.724 C 71.44 102.633 71.553 102.292 71.635 101.965 C 71.851 101.096 72.182 100.248 72.385 100.046 C 72.482 99.948 72.562 99.738 72.562 99.578 C 72.562 99.418 72.689 99.039 72.844 98.735 C 72.999 98.432 73.245 97.842 73.392 97.424 C 73.539 97.007 73.795 96.324 73.962 95.906 C 74.129 95.489 74.334 94.874 74.418 94.54 C 74.501 94.206 74.726 93.591 74.917 93.174 C 75.393 92.133 75.898 90.851 76.082 90.214 C 76.166 89.921 76.325 89.58 76.433 89.455 C 76.542 89.329 76.738 88.968 76.869 88.651 C 77.106 88.076 77.107 88.075 77.497 88.331 C 77.999 88.66 79.696 88.544 80.641 88.116 C 81.726 87.625 82.754 86.357 83.344 84.787 C 83.6 84.105 83.863 84.167 83.828 84.9 C 83.787 85.765 83.62 87.245 83.55 87.358 C 83.5 87.44 83.372 87.894 83.267 88.367 C 83.011 89.522 82.132 92.376 81.974 92.566 C 81.761 92.824 79.849 96.571 79.849 96.733 C 79.849 96.816 79.678 97.257 79.469 97.714 C 79.261 98.17 79.088 98.736 79.086 98.971 C 79.084 99.206 79.016 99.671 78.935 100.005 C 78.854 100.339 78.781 101.023 78.774 101.525 C 78.762 102.335 78.833 102.565 79.405 103.556 C 79.759 104.171 80.517 105.151 81.088 105.733 C 81.659 106.315 82.126 106.859 82.126 106.942 C 82.126 107.024 82.471 107.478 82.894 107.95 C 84.057 109.252 85.613 111.704 86.003 112.849 C 86.194 113.411 86.315 113.905 86.273 113.947 C 86.138 114.083 86.39 114.655 86.72 114.963 C 87.049 115.269 87.813 115.356 88.172 115.129 C 88.675 114.809 88.407 112.161 87.799 111.456 C 87.687 111.326 87.514 110.984 87.415 110.697 C 87.317 110.411 86.889 109.676 86.465 109.064 C 86.04 108.453 85.591 107.798 85.466 107.609 C 85.127 107.097 84.37 106.136 84.012 105.762 C 83.838 105.581 83.544 105.236 83.359 104.996 C 83.173 104.756 82.677 104.205 82.257 103.773 L 81.493 102.986 L 81.925 102.763 C 82.163 102.64 82.698 102.492 83.115 102.436 C 84.242 102.281 85.148 101.909 85.997 101.251 C 87.5 100.087 87.783 99.842 88.479 99.103 C 88.867 98.69 89.321 98.207 89.488 98.03 C 90.342 97.125 90.963 96.222 91.452 95.179 C 91.75 94.543 91.993 93.951 91.993 93.864 C 91.993 93.777 92.052 93.705 92.124 93.705 C 92.196 93.705 92.379 93.381 92.529 92.984 C 92.68 92.588 92.932 92.033 93.089 91.752 C 93.246 91.471 93.344 91.21 93.307 91.173 C 93.27 91.137 93.375 90.752 93.539 90.319 C 93.704 89.885 93.931 89.155 94.044 88.696 C 94.157 88.236 94.46 87.007 94.718 85.963 C 94.975 84.919 95.256 83.587 95.341 83.003 C 95.426 82.419 95.561 81.77 95.64 81.561 C 95.775 81.205 95.863 80.401 96.018 78.1 C 96.053 77.575 96.132 77.064 96.193 76.966 C 96.253 76.868 96.289 76.608 96.273 76.388 C 96.23 75.833 96.609 74.102 97.051 72.831 C 97.563 71.359 98.202 70.336 98.672 70.235 C 98.881 70.19 99.189 70.095 99.356 70.023 C 99.523 69.951 99.682 69.888 99.711 69.882 C 99.739 69.876 100.183 70.069 100.697 70.31 Z M 24.611 70.631 C 25.994 71.047 26.81 72.606 26.946 75.091 C 27.218 80.077 27.355 82.04 27.483 82.765 C 27.563 83.219 27.628 83.94 27.628 84.367 C 27.628 84.794 27.696 85.211 27.779 85.294 C 27.862 85.377 27.966 85.818 28.01 86.274 C 28.134 87.558 28.393 88.872 28.606 89.296 C 28.713 89.509 28.84 89.99 28.89 90.365 C 28.996 91.169 29.313 92.254 29.933 93.933 C 30.505 95.481 30.91 96.275 31.58 97.167 C 32.023 97.755 32.213 97.888 32.667 97.926 C 33.098 97.962 33.268 97.898 33.458 97.627 C 33.855 97.061 33.753 96.496 33.095 95.605 C 32.431 94.706 31.49 92.124 31.05 89.992 C 30.913 89.327 30.736 88.705 30.656 88.61 C 30.577 88.515 30.48 88.034 30.441 87.541 C 30.402 87.049 30.297 86.305 30.208 85.887 C 30.119 85.47 29.977 84.616 29.892 83.99 C 29.807 83.363 29.67 82.441 29.587 81.94 C 29.345 80.48 29.285 79.433 29.219 75.514 C 29.15 71.42 29.174 71.292 30.103 70.925 C 30.37 70.819 30.708 70.631 30.855 70.506 C 31.08 70.314 31.247 70.308 31.935 70.461 C 33.123 70.727 33.45 71.172 34.252 73.621 C 34.777 75.225 34.928 76.12 35.228 79.436 C 35.323 80.479 35.496 81.609 35.613 81.945 C 35.73 82.282 35.825 82.795 35.824 83.084 C 35.823 83.618 36.501 86.849 36.732 87.405 C 36.801 87.572 36.975 88.187 37.119 88.771 C 37.681 91.058 38.078 92.108 39.325 94.616 C 39.637 95.242 39.942 95.925 40.004 96.134 C 40.126 96.545 40.911 97.553 42.12 98.853 C 43.277 100.097 43.542 100.339 44.858 101.356 C 46.056 102.281 47.044 102.715 48.281 102.86 C 48.578 102.895 49.018 103.028 49.261 103.155 L 49.702 103.386 L 49.177 103.898 C 48.487 104.572 46.472 106.959 45.863 107.823 C 44.769 109.374 43.719 111.019 43.719 111.181 C 43.719 111.276 43.589 111.567 43.429 111.828 C 42.975 112.569 42.612 114.012 42.706 114.708 C 42.799 115.4 43.121 115.717 43.735 115.717 C 44.237 115.717 44.934 114.957 44.934 114.41 C 44.934 113.821 45.523 112.226 45.99 111.551 C 46.225 111.212 46.674 110.536 46.99 110.048 C 47.305 109.56 47.894 108.799 48.298 108.357 C 48.702 107.914 49.033 107.486 49.033 107.404 C 49.033 107.323 49.575 106.683 50.238 105.983 C 51.028 105.15 51.63 104.339 51.984 103.634 C 52.543 102.519 52.634 101.905 52.374 100.997 C 52.291 100.708 52.183 100.094 52.133 99.631 C 52.083 99.169 51.877 98.43 51.676 97.989 C 51.475 97.548 51.31 97.094 51.31 96.979 C 51.31 96.864 51.082 96.368 50.805 95.877 C 48.956 92.606 47.923 89.724 47.483 86.61 C 47.357 85.718 47.452 83.672 47.594 84.217 C 48.073 86.057 48.961 87.495 50.083 88.249 C 50.984 88.854 53.096 89.155 53.695 88.764 C 54.139 88.474 54.127 88.469 54.352 89.037 C 54.46 89.308 54.631 89.633 54.732 89.758 C 54.834 89.883 54.964 90.157 55.022 90.365 C 55.137 90.782 55.889 92.67 56.322 93.629 C 56.473 93.963 56.797 94.851 57.043 95.603 C 57.668 97.512 57.981 98.357 58.421 99.322 C 58.63 99.781 58.865 100.328 58.943 100.536 C 59.02 100.745 59.174 101.121 59.285 101.371 C 59.396 101.622 59.527 101.997 59.578 102.206 C 59.628 102.415 59.735 102.825 59.815 103.117 C 60.007 103.818 60.742 106.904 60.809 107.292 C 61.413 110.775 61.502 111.807 61.422 114.409 C 61.366 116.212 61.268 117.218 61.101 117.69 C 60.969 118.064 60.822 118.781 60.773 119.283 C 60.725 119.784 60.57 120.4 60.428 120.65 C 60.287 120.901 60.081 121.55 59.971 122.092 C 59.835 122.766 59.283 124.058 58.235 126.158 C 55.928 130.783 55.828 130.968 55.282 131.647 C 54.512 132.605 54.399 133.805 54.808 136.689 C 54.944 137.648 54.874 138.632 54.668 138.645 C 51.632 138.845 40.799 138.966 29.491 138.926 L 23.536 138.905 L 23.449 138.43 C 23.402 138.17 23.371 137.58 23.382 137.121 C 23.393 136.662 23.355 135.466 23.3 134.464 C 23.244 133.463 23.176 131.585 23.15 130.291 C 23.081 126.944 22.946 125.07 22.679 123.762 C 22.394 122.369 20.748 118.951 19.706 117.588 C 18.964 116.619 17.761 114.526 17.761 114.205 C 17.761 114.105 17.457 113.719 17.085 113.347 C 16.358 112.62 15.029 110.932 15.029 110.736 C 15.029 110.67 14.792 110.381 14.502 110.093 C 14.212 109.804 13.973 109.519 13.971 109.458 C 13.968 109.397 13.612 108.821 13.18 108.177 C 12.748 107.534 12.198 106.628 11.957 106.163 C 11.717 105.698 11.387 105.079 11.225 104.787 C 10.801 104.025 10.019 102.328 10.019 102.17 C 10.019 102.096 9.853 101.681 9.65 101.248 C 8.852 99.541 8.539 98.748 8.353 97.951 C 8.246 97.494 8.073 96.95 7.968 96.741 C 7.812 96.428 7.499 95.081 7.211 93.477 C 7.181 93.31 7.05 92.866 6.921 92.491 C 6.791 92.115 6.577 91.124 6.445 90.29 C 6.313 89.455 6.133 88.499 6.045 88.165 C 5.958 87.832 5.863 87.081 5.835 86.496 C 5.808 85.911 5.738 85.056 5.681 84.597 C 5.318 81.677 5.756 74.232 6.369 72.916 C 6.814 71.96 6.965 71.747 7.324 71.574 C 7.836 71.328 9.075 71.296 9.301 71.522 C 9.395 71.616 9.59 71.694 9.733 71.694 C 9.877 71.694 10.154 71.95 10.348 72.263 C 10.694 72.819 10.703 72.923 10.727 76.931 C 10.756 81.805 10.913 83.568 11.619 86.95 C 11.758 87.618 11.934 88.574 12.009 89.075 C 12.084 89.576 12.206 90.157 12.281 90.365 C 12.356 90.574 12.536 91.291 12.682 91.959 C 12.827 92.627 12.998 93.242 13.062 93.326 C 13.125 93.409 13.327 93.973 13.511 94.578 C 13.694 95.184 13.906 95.717 13.981 95.764 C 14.056 95.81 14.117 95.964 14.117 96.105 C 14.116 96.551 15.777 99.736 16.132 99.967 C 16.318 100.089 16.641 100.242 16.85 100.307 C 17.059 100.372 17.663 100.685 18.192 101.003 C 18.721 101.321 19.37 101.627 19.634 101.684 C 20.309 101.83 21.212 102.309 22.012 102.946 C 22.803 103.576 23.681 104.497 23.681 104.697 C 23.681 104.772 23.837 105.045 24.026 105.304 C 24.466 105.904 24.669 106.351 24.921 107.277 C 25.088 107.888 25.212 108.058 25.619 108.228 C 26.046 108.407 26.176 108.404 26.566 108.203 C 26.814 108.074 27.058 107.803 27.11 107.599 C 27.366 106.578 25.818 103.535 24.299 102.073 C 22.75 100.583 22.673 100.535 19.886 99.335 C 17.479 98.298 17.573 98.384 16.537 96.252 C 16.118 95.39 15.901 94.821 15.535 93.629 C 15.407 93.212 15.207 92.689 15.09 92.467 C 14.973 92.246 14.877 91.888 14.877 91.673 C 14.877 91.458 14.781 91.025 14.664 90.71 C 14.546 90.395 14.371 89.694 14.273 89.151 C 14.175 88.608 14.054 87.993 14.004 87.785 C 13.954 87.576 13.894 87.269 13.873 87.102 C 13.851 86.935 13.796 86.627 13.751 86.419 C 13.094 83.35 12.877 80.941 12.971 77.766 C 13.066 74.545 13.196 73.363 13.495 73.003 C 13.601 72.874 13.646 72.701 13.594 72.616 C 13.453 72.389 14.26 71.251 14.736 71.005 C 15.324 70.7 16.334 70.561 16.461 70.766 C 16.518 70.859 16.7 70.935 16.865 70.935 C 17.304 70.935 18.311 71.485 18.452 71.801 C 18.518 71.951 18.591 72.235 18.614 72.432 C 18.638 72.63 18.687 72.822 18.725 72.86 C 18.763 72.898 18.729 73.162 18.65 73.447 C 18.557 73.785 18.562 74.171 18.665 74.553 C 18.752 74.876 18.857 75.832 18.898 76.679 C 18.94 77.526 19.044 78.531 19.129 78.913 C 19.215 79.295 19.282 79.859 19.279 80.167 C 19.269 81.193 19.382 82.688 19.551 83.762 C 19.643 84.346 19.753 85.371 19.796 86.039 C 19.975 88.818 20.229 90.638 20.646 92.111 C 20.74 92.445 20.874 92.957 20.944 93.25 C 21.297 94.726 22.877 98.308 23.516 99.078 C 23.795 99.414 24.53 99.384 24.892 99.022 C 25.411 98.503 25.417 98.067 24.915 97.177 C 24.296 96.078 23.179 93.282 22.801 91.883 C 22.479 90.691 22.362 89.98 22.239 88.468 C 22.104 86.801 21.845 84.389 21.615 82.661 C 21.49 81.721 21.418 80.901 21.456 80.839 C 21.493 80.777 21.431 79.94 21.318 78.98 C 21.009 76.368 21.04 74.353 21.413 72.948 C 21.871 71.226 22.102 70.848 22.835 70.628 C 23.175 70.526 23.522 70.422 23.605 70.397 C 23.689 70.372 23.86 70.387 23.985 70.431 C 24.11 70.475 24.392 70.565 24.611 70.631 Z M 81.488 83.018 C 81.488 83.661 81.103 84.59 80.48 85.451 C 80.099 85.977 79.912 86.093 79.22 86.232 C 77.903 86.495 77.904 86.254 79.229 84.293 C 79.837 83.393 80.879 82.485 81.314 82.475 C 81.414 82.473 81.488 82.705 81.488 83.018 Z M 50.814 83.379 C 51.384 83.841 52.418 85.178 52.845 86.004 C 53.203 86.696 53.05 86.813 51.995 86.654 C 51.465 86.575 51.218 86.432 50.861 86 C 50.036 84.998 49.533 83.519 49.78 82.818 C 49.814 82.721 50.385 83.03 50.814 83.379 Z",
    fill: "currentColor",
    fillRule: "evenodd"
  })));
  const __impls = {
    // figma: Skin tone=Medium
    "skinTone=medium": __body0,
    // figma: Skin tone=Dark
    "skinTone=dark": __body1,
    // figma: Skin tone=Light
    "skinTone=light": __body2
  };
  return (__impls[__vkey(props)] ?? __body2)();
}
Object.assign(__ds_scope, { Confetti, __ds_default_components_Confetti_c3wu3a: Confetti });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/Confetti.jsx", error: String((e && e.message) || e) }); }

// components/DevicesAppleIPadAir4.jsx
try { (() => {
// figma node: 278:7457 Devices / Apple / iPad Air 4
function DevicesAppleIPadAir4(_p = {}) {
  const props = _p;
  return /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 651,
      height: 902,
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 649,
    height: 900,
    viewBox: "0 0 649 900",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 2,
      width: 649,
      height: 900,
      filter: "drop-shadow(0px 2px 4px rgba(0,21,64,0.05)) drop-shadow(0px 0px 2px rgba(0,21,64,0.14))",
      color: "rgb(58,66,69)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 46 C 0 20.595 20.595 0 46 0 L 603 0 C 628.405 0 649 20.595 649 46 L 649 854 C 649 879.405 628.405 900 603 900 L 46 900 C 20.595 900 0 879.405 0 854 L 0 46 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 641,
    height: 892,
    viewBox: "0 0 641 892",
    fill: "none",
    style: {
      position: "absolute",
      left: 4,
      top: 6,
      width: 641,
      height: 892,
      color: "rgb(18,21,21)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 42 C 0 18.804 18.804 0 42 0 L 599 0 C 622.196 0 641 18.804 641 42 L 641 850 C 641 873.196 622.196 892 599 892 L 42 892 C 18.804 892 0 873.196 0 850 L 0 42 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 541,
      top: 0,
      width: 110,
      height: 153,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 2,
    height: 36,
    viewBox: "0 0 2 36",
    fill: "none",
    style: {
      position: "absolute",
      left: 108,
      top: 73,
      width: 2,
      height: 36,
      color: "rgb(18,21,21)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0 C 1.105 0 2 0.322 2 0.72 L 2 35.28 C 2 35.678 1.105 36 0 36 L 0 0 Z",
    fill: "currentColor",
    fillRule: "evenodd"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 2,
    height: 37,
    viewBox: "0 0 2 37",
    fill: "none",
    style: {
      position: "absolute",
      left: 108,
      top: 116,
      width: 2,
      height: 37,
      color: "rgb(18,21,21)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0 C 1.105 0 2 0.331 2 0.74 L 2 36.26 C 2 36.669 1.105 37 0 37 L 0 0 Z",
    fill: "currentColor",
    fillRule: "evenodd"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 2,
    height: 62,
    viewBox: "0 0 2 62",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "matrix(0,-1,1,0,0,2)",
      transformOrigin: "0 0",
      width: 2,
      height: 62,
      color: "rgb(18,21,21)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0 C 1.105 0 2 0.555 2 1.24 L 2 60.76 C 2 61.445 1.105 62 0 62 L 0 0 Z",
    fill: "currentColor",
    fillRule: "evenodd"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 38,
      top: 40,
      width: 573,
      height: 824,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 573,
      height: 824,
      clipPath: "inset(0px 0px 0px 0px)"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 573,
    height: 824,
    viewBox: "0 0 573 824",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 573,
      height: 824
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 13 C 0 5.82 5.82 0 13 0 L 560 0 C 567.18 0 573 5.82 573 13 L 573 811 C 573 818.18 567.18 824 560 824 L 13 824 C 5.82 824 0 818.18 0 811 L 0 13 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))));
}
Object.assign(__ds_scope, { DevicesAppleIPadAir4, __ds_default_components_DevicesAppleIPadAir4_7uktct: DevicesAppleIPadAir4 });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/DevicesAppleIPadAir4.jsx", error: String((e && e.message) || e) }); }

// components/FormatoDePag.jsx
try { (() => {
// figma node: 2408:162 Formato de pag
function FormatoDePag(_p = {}) {
  const props = _p;
  return /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 1231,
      height: 54,
      opacity: 0.8,
      position: "relative",
      color: "rgb(255,255,255)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 1231,
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      flexWrap: "nowrap"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
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
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Red Hat Display\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 20,
      whiteSpace: "nowrap",
      lineHeight: 1,
      color: "rgb(255,255,255)",
      flexShrink: 0
    }
  }, props.text1 ?? "00.Brandbook Social media")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 214,
      height: 45,
      opacity: 0.8,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
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
      color: "rgb(255,255,255)"
    }
  }, props.text2 ?? "SOCIAL MEDIA BRAND GUIDELINES"))), /*#__PURE__*/React.createElement("svg", {
    width: 1228.022,
    height: 1,
    viewBox: "0 -0.500 1228.022 1",
    fill: "none",
    style: {
      position: "absolute",
      left: 2.978,
      top: 54,
      width: 1228.022,
      height: 1
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0 L 1228.022 0 L 1228.022 -1 L 0 -1 L 0 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
}
Object.assign(__ds_scope, { FormatoDePag, __ds_default_components_FormatoDePag_12sinn7: FormatoDePag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/FormatoDePag.jsx", error: String((e && e.message) || e) }); }

// components/Gif.jsx
try { (() => {
// figma node: 2983:127 Gif (5 variants)
const __venc = v => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = p => "property1=" + __venc(p.property1);
function Gif(_p = {}) {
  const props = {
    ..._p,
    property1: _p.property1 ?? "default"
  };
  const __body0 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 1120,
      height: 300,
      overflow: "hidden",
      background: "radial-gradient(515.296px 165.051px at 92.61% 75.40%, rgba(45,201,216,0.3) 0.00%, rgba(45,201,216,0) 100.00%), radial-gradient(600.073px 205.125px at 16.28% 10.88%, rgba(174,127,226,0.5) 0.00%, rgba(174,127,226,0) 100.00%), linear-gradient(rgb(72,101,232),rgb(72,101,232))",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 561,
      top: 349,
      width: 259.973,
      height: 184,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 13.791,
      top: 13.791,
      width: 117.358,
      height: 117.271,
      backgroundColor: "rgb(0,193,211)",
      boxShadow: "0px 1px 10px 0px rgba(0,193,211,0.5)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 28.363,
      top: 47.502,
      width: 87.84,
      height: 50.567,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 87.84,
      height: 13.676,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 21.079,
    height: 8.877,
    viewBox: "0 0 21.079 8.877",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "matrix(-0.971,-0.240,0.240,-0.971,85.711,13.676)",
      transformOrigin: "0 0",
      width: 21.079,
      height: 8.877,
      color: "rgb(211,255,136)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 19.959 0.599 C 18.645 -0.727 14.951 0.562 14.951 0.562 C 14.951 0.562 8.36 1.556 6.251 0.646 C 4.142 -0.264 1.349 -0.447 0.332 2.307 C -0.374 4.177 0.178 5.544 0.765 6.361 C 2 8.082 4.453 8.877 8.62 8.877 C 9.145 8.877 9.698 8.865 10.278 8.84 C 15.833 8.602 18.935 7.655 20.335 5.769 C 20.866 5.052 21.126 4.191 21.072 3.38 C 21.048 1.99 20.461 1.104 19.959 0.599 Z",
    fill: "currentColor",
    fillRule: "evenodd"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 19.969,
    height: 8.877,
    viewBox: "0 0 19.969 8.877",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "matrix(0.969,-0.247,-0.247,-0.969,2.191,13.534)",
      transformOrigin: "0 0",
      width: 19.969,
      height: 8.877,
      color: "rgb(211,255,136)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 18.909 0.599 C 17.664 -0.727 14.164 0.562 14.164 0.562 C 14.164 0.562 7.92 1.556 5.922 0.646 C 3.924 -0.264 1.278 -0.447 0.314 2.307 C -0.354 4.177 0.169 5.544 0.725 6.361 C 1.895 8.082 4.218 8.877 8.167 8.877 C 8.664 8.877 9.187 8.865 9.737 8.84 C 15 8.602 17.939 7.655 19.265 5.769 C 19.768 5.052 20.014 4.191 19.963 3.38 C 19.94 1.99 19.384 1.104 18.909 0.599 Z",
    fill: "currentColor",
    fillRule: "evenodd"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 8.156,
      top: 22.021,
      width: 71.772,
      height: 9.787,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 9.787,
    height: 9.787,
    viewBox: "0 0 9.787 9.787",
    fill: "none",
    style: {
      position: "absolute",
      left: 61.985,
      top: 0,
      width: 9.787,
      height: 9.787,
      color: "rgb(50,50,50)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 4.899 C 0 2.18 2.18 0 4.901 0 C 7.597 0 9.787 2.18 9.787 4.899 C 9.787 7.586 7.597 9.787 4.901 9.787 C 2.18 9.787 0 7.586 0 4.899",
    fill: "currentColor",
    fillRule: "evenodd"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 9.787,
    height: 9.787,
    viewBox: "0 0 9.787 9.787",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 9.787,
      height: 9.787,
      color: "rgb(50,50,50)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 4.899 C 0 2.18 2.206 0 4.906 0 C 7.604 0 9.787 2.18 9.787 4.899 C 9.787 7.586 7.604 9.787 4.906 9.787 C 2.206 9.787 0 7.586 0 4.899",
    fill: "currentColor",
    fillRule: "evenodd"
  }))), /*#__PURE__*/React.createElement("svg", {
    width: 26.099,
    height: 17.943,
    viewBox: "0 0 26.099 17.943",
    fill: "none",
    style: {
      position: "absolute",
      left: 32.624,
      top: 32.624,
      width: 26.099,
      height: 17.943,
      color: "rgb(0,86,121)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.002 1.252 C 0.002 1.252 11.903 -1.565 26.098 1.252 C 26.098 1.252 26.528 17.943 13.05 17.943 C -0.476 17.943 0.002 1.252 0.002 1.252 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("svg", {
    width: 21.453,
    height: 21.453,
    viewBox: "0 0 21.453 21.453",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 21.453,
      height: 21.453,
      color: "rgb(0,0,0)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0 L 0 21.453 L 21.453 0 L 0 0 Z",
    fill: "rgb(0,0,0)",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 0 21.453 L -1.149 21.453 L -1.149 24.227 L 0.813 22.265 L 0 21.453 Z M 0 0 L 0 -1.149 L -1.149 -1.149 L -1.149 0 L 0 0 Z M 21.453 0 L 22.265 0.813 L 24.227 -1.149 L 21.453 -1.149 L 21.453 0 Z M 1.149 21.453 L 1.149 0 L -1.149 0 L -1.149 21.453 L 1.149 21.453 Z M 0 1.149 L 21.453 1.149 L 21.453 -1.149 L 0 -1.149 L 0 1.149 Z M 20.64 -0.813 L -0.813 20.64 L 0.813 22.265 L 22.265 0.813 L 20.64 -0.813 Z",
    fill: "rgb(255,255,255)",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 122.973,
      top: 139,
      borderRadius: 12,
      backgroundColor: "rgb(0,193,211)",
      boxShadow: "0px 1px 10px 0px rgba(0,193,211,0.5)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "8px 12px 8px 12px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 24,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(255,254,255)",
      flexShrink: 0
    }
  }, props.text1 ?? "Blue Pixel"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 928,
      top: 298,
      width: 25,
      height: 31,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 25,
    height: 31,
    viewBox: "0 0 25 31",
    fill: "none",
    style: {
      position: "relative",
      width: 25,
      height: 31,
      flexShrink: 0,
      filter: "drop-shadow(0px 2px 2px rgba(0,0,0,0.2))",
      color: "rgb(121,189,11)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0 L 5.556 31 L 12.963 18.788 L 25 15.03 L 0 0 Z",
    fill: "rgb(121,189,11)",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 5.556 31 L 4.424 31.203 L 4.961 34.196 L 6.538 31.596 L 5.556 31 Z M 0 0 L 0.592 -0.985 L -1.578 -2.29 L -1.131 0.203 L 0 0 Z M 25 15.03 L 25.342 16.127 L 27.786 15.364 L 25.592 14.045 L 25 15.03 Z M 12.963 18.788 L 12.621 17.691 L 12.206 17.82 L 11.98 18.192 L 12.963 18.788 Z M 6.687 30.797 L 1.131 -0.203 L -1.131 0.203 L 4.424 31.203 L 6.687 30.797 Z M -0.592 0.985 L 24.408 16.015 L 25.592 14.045 L 0.592 -0.985 L -0.592 0.985 Z M 24.658 13.933 L 12.621 17.691 L 13.305 19.885 L 25.342 16.127 L 24.658 13.933 Z M 11.98 18.192 L 4.573 30.404 L 6.538 31.596 L 13.946 19.384 L 11.98 18.192 Z",
    fill: "rgb(255,255,255)",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 27,
      top: 37,
      borderRadius: "3px 28px 28px 28px",
      backgroundColor: "rgb(121,189,11)",
      boxShadow: "inset 0 0 0 2px rgb(65,150,12), 0px 1px 10px 0px rgba(121,189,11,0.5)",
      display: "flex",
      flexDirection: "column",
      gap: 2,
      padding: "11px 20px 11px 20px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      opacity: 0.8,
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 13,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(255,254,255)",
      flexShrink: 0
    }
  }, props.text2 ?? "Green Pixel"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 24,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(255,254,255)",
      flexShrink: 0
    }
  }, props.text3 ?? "Gracias!!")))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 918,
      top: -103,
      width: 179,
      height: 83,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 25,
      top: 38,
      borderRadius: 2,
      background: "linear-gradient(-74.026deg, rgb(249,249,249) 37.14%, rgb(209,220,244) 97.77%)",
      boxShadow: "0px 2px 10px 0px rgba(0,0,0,0.2)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "8px 12px 8px 12px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 24,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(86,113,176)",
      flexShrink: 0
    }
  }, props.text4 ?? "White Pixel")), /*#__PURE__*/React.createElement("svg", {
    width: 25,
    height: 31,
    viewBox: "0 0 25 31",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 25,
      height: 31,
      filter: "drop-shadow(0px 2px 2px rgba(0,0,0,0.2))",
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0 L 5.556 31 L 12.963 18.788 L 25 15.03 L 0 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 5.556 31 L 4.424 31.203 L 4.961 34.196 L 6.538 31.596 L 5.556 31 Z M 0 0 L 0.592 -0.985 L -1.578 -2.29 L -1.131 0.203 L 0 0 Z M 25 15.03 L 25.342 16.127 L 27.786 15.364 L 25.592 14.045 L 25 15.03 Z M 12.963 18.788 L 12.621 17.691 L 12.206 17.82 L 11.98 18.192 L 12.963 18.788 Z M 6.687 30.797 L 1.131 -0.203 L -1.131 0.203 L 4.424 31.203 L 6.687 30.797 Z M -0.592 0.985 L 24.408 16.015 L 25.592 14.045 L 0.592 -0.985 L -0.592 0.985 Z M 24.658 13.933 L 12.621 17.691 L 13.305 19.885 L 25.342 16.127 L 24.658 13.933 Z M 11.98 18.192 L 4.573 30.404 L 6.538 31.596 L 13.946 19.384 L 11.98 18.192 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 138,
      top: 341,
      width: 25,
      height: 31,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 25,
    height: 31,
    viewBox: "0 0 25 31",
    fill: "none",
    style: {
      position: "relative",
      width: 25,
      height: 31,
      flexShrink: 0,
      filter: "drop-shadow(0px 2px 2px rgba(0,0,0,0.2))",
      color: "rgb(230,70,242)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0 L 5.556 31 L 12.963 18.788 L 25 15.03 L 0 0 Z",
    fill: "rgb(230,70,242)",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 5.556 31 L 4.424 31.203 L 4.961 34.196 L 6.538 31.596 L 5.556 31 Z M 0 0 L 0.592 -0.985 L -1.578 -2.29 L -1.131 0.203 L 0 0 Z M 25 15.03 L 25.342 16.127 L 27.786 15.364 L 25.592 14.045 L 25 15.03 Z M 12.963 18.788 L 12.621 17.691 L 12.206 17.82 L 11.98 18.192 L 12.963 18.788 Z M 6.687 30.797 L 1.131 -0.203 L -1.131 0.203 L 4.424 31.203 L 6.687 30.797 Z M -0.592 0.985 L 24.408 16.015 L 25.592 14.045 L 0.592 -0.985 L -0.592 0.985 Z M 24.658 13.933 L 12.621 17.691 L 13.305 19.885 L 25.342 16.127 L 24.658 13.933 Z M 11.98 18.192 L 4.573 30.404 L 6.538 31.596 L 13.946 19.384 L 11.98 18.192 Z",
    fill: "rgb(255,255,255)",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 27,
      top: 37,
      borderRadius: "3px 28px 28px 28px",
      backgroundColor: "rgb(230,70,242)",
      boxShadow: "inset 0 0 0 2px rgb(172,23,224), 0px 1px 10px 0px rgba(230,70,242,0.5)",
      display: "flex",
      flexDirection: "column",
      gap: 2,
      padding: "11px 20px 11px 20px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      opacity: 0.8,
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 13,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(255,254,255)",
      flexShrink: 0
    }
  }, "Pink Pixel"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 24,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(255,254,255)",
      flexShrink: 0
    }
  }, "Hablemos pronto")))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 84,
      top: 112,
      width: 952,
      height: 76,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 16,
      top: 7,
      width: 920,
      height: 62,
      fontFamily: "\"Dela Gothic One\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 44,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: "100px",
      color: "rgb(246,251,253)"
    }
  }, "\xA1Gracias por contactarnos!"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 952,
      height: 76
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 7,
      top: 7,
      width: 936,
      height: 60,
      boxShadow: "inset 0 0 0 1.500px rgb(0,193,211), 0 0 0 1.500px rgb(0,193,211)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 58,
      width: 18,
      height: 18,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1.500px rgb(0,193,211), 0 0 0 1.500px rgb(0,193,211)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 934,
      top: 58,
      width: 18,
      height: 18,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1.500px rgb(0,193,211), 0 0 0 1.500px rgb(0,193,211)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 18,
      height: 18,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1.500px rgb(0,193,211), 0 0 0 1.500px rgb(0,193,211)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 934,
      top: 0,
      width: 18,
      height: 18,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1.500px rgb(0,193,211), 0 0 0 1.500px rgb(0,193,211)"
    }
  }))));
  const __body1 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 1120,
      height: 300,
      overflow: "hidden",
      background: "radial-gradient(515.296px 165.051px at 92.61% 75.40%, rgba(45,201,216,0.3) 0.00%, rgba(45,201,216,0) 100.00%), radial-gradient(600.073px 205.125px at 16.28% 10.88%, rgba(174,127,226,0.5) 0.00%, rgba(174,127,226,0) 100.00%), linear-gradient(rgb(72,101,232),rgb(72,101,232))",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 84,
      top: 113,
      width: 952,
      height: 76,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 16,
      top: 7,
      width: 920,
      height: 62,
      fontFamily: "\"Dela Gothic One\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 44,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: "100px",
      color: "rgb(246,251,253)"
    }
  }, props.text1 ?? "¡Gracias por contactarnos!"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 952,
      height: 76
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 7,
      top: 7,
      width: 936,
      height: 60,
      boxShadow: "inset 0 0 0 1.500px rgb(0,193,211), 0 0 0 1.500px rgb(0,193,211)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 58,
      width: 18,
      height: 18,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1.500px rgb(0,193,211), 0 0 0 1.500px rgb(0,193,211)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 934,
      top: 58,
      width: 18,
      height: 18,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1.500px rgb(0,193,211), 0 0 0 1.500px rgb(0,193,211)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 18,
      height: 18,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1.500px rgb(0,193,211), 0 0 0 1.500px rgb(0,193,211)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 934,
      top: 0,
      width: 18,
      height: 18,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1.500px rgb(0,193,211), 0 0 0 1.500px rgb(0,193,211)"
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 477,
      top: 110,
      width: 259.973,
      height: 184,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 13.791,
      top: 13.791,
      width: 117.358,
      height: 117.271,
      backgroundColor: "rgb(0,193,211)",
      boxShadow: "0px 1px 10px 0px rgba(0,193,211,0.5)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 28.363,
      top: 47.502,
      width: 87.84,
      height: 50.567,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 87.84,
      height: 13.676,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 21.079,
    height: 8.877,
    viewBox: "0 0 21.079 8.877",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "matrix(-0.971,-0.240,0.240,-0.971,85.711,13.676)",
      transformOrigin: "0 0",
      width: 21.079,
      height: 8.877,
      color: "rgb(211,255,136)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 19.959 0.599 C 18.645 -0.727 14.951 0.562 14.951 0.562 C 14.951 0.562 8.36 1.556 6.251 0.646 C 4.142 -0.264 1.349 -0.447 0.332 2.307 C -0.374 4.177 0.178 5.544 0.765 6.361 C 2 8.082 4.453 8.877 8.62 8.877 C 9.145 8.877 9.698 8.865 10.278 8.84 C 15.833 8.602 18.935 7.655 20.335 5.769 C 20.866 5.052 21.126 4.191 21.072 3.38 C 21.048 1.99 20.461 1.104 19.959 0.599 Z",
    fill: "currentColor",
    fillRule: "evenodd"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 19.969,
    height: 8.877,
    viewBox: "0 0 19.969 8.877",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "matrix(0.969,-0.247,-0.247,-0.969,2.191,13.534)",
      transformOrigin: "0 0",
      width: 19.969,
      height: 8.877,
      color: "rgb(211,255,136)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 18.909 0.599 C 17.664 -0.727 14.164 0.562 14.164 0.562 C 14.164 0.562 7.92 1.556 5.922 0.646 C 3.924 -0.264 1.278 -0.447 0.314 2.307 C -0.354 4.177 0.169 5.544 0.725 6.361 C 1.895 8.082 4.218 8.877 8.167 8.877 C 8.664 8.877 9.187 8.865 9.737 8.84 C 15 8.602 17.939 7.655 19.265 5.769 C 19.768 5.052 20.014 4.191 19.963 3.38 C 19.94 1.99 19.384 1.104 18.909 0.599 Z",
    fill: "currentColor",
    fillRule: "evenodd"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 8.156,
      top: 22.021,
      width: 71.772,
      height: 9.787,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 9.787,
    height: 9.787,
    viewBox: "0 0 9.787 9.787",
    fill: "none",
    style: {
      position: "absolute",
      left: 61.985,
      top: 0,
      width: 9.787,
      height: 9.787,
      color: "rgb(50,50,50)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 4.899 C 0 2.18 2.18 0 4.901 0 C 7.597 0 9.787 2.18 9.787 4.899 C 9.787 7.586 7.597 9.787 4.901 9.787 C 2.18 9.787 0 7.586 0 4.899",
    fill: "currentColor",
    fillRule: "evenodd"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 9.787,
    height: 9.787,
    viewBox: "0 0 9.787 9.787",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 9.787,
      height: 9.787,
      color: "rgb(50,50,50)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 4.899 C 0 2.18 2.206 0 4.906 0 C 7.604 0 9.787 2.18 9.787 4.899 C 9.787 7.586 7.604 9.787 4.906 9.787 C 2.206 9.787 0 7.586 0 4.899",
    fill: "currentColor",
    fillRule: "evenodd"
  }))), /*#__PURE__*/React.createElement("svg", {
    width: 26.099,
    height: 17.943,
    viewBox: "0 0 26.099 17.943",
    fill: "none",
    style: {
      position: "absolute",
      left: 32.624,
      top: 32.624,
      width: 26.099,
      height: 17.943,
      color: "rgb(0,86,121)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.002 1.252 C 0.002 1.252 11.903 -1.565 26.098 1.252 C 26.098 1.252 26.528 17.943 13.05 17.943 C -0.476 17.943 0.002 1.252 0.002 1.252 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("svg", {
    width: 21.453,
    height: 21.453,
    viewBox: "0 0 21.453 21.453",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 21.453,
      height: 21.453,
      color: "rgb(0,0,0)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0 L 0 21.453 L 21.453 0 L 0 0 Z",
    fill: "rgb(0,0,0)",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 0 21.453 L -1.149 21.453 L -1.149 24.227 L 0.813 22.265 L 0 21.453 Z M 0 0 L 0 -1.149 L -1.149 -1.149 L -1.149 0 L 0 0 Z M 21.453 0 L 22.265 0.813 L 24.227 -1.149 L 21.453 -1.149 L 21.453 0 Z M 1.149 21.453 L 1.149 0 L -1.149 0 L -1.149 21.453 L 1.149 21.453 Z M 0 1.149 L 21.453 1.149 L 21.453 -1.149 L 0 -1.149 L 0 1.149 Z M 20.64 -0.813 L -0.813 20.64 L 0.813 22.265 L 22.265 0.813 L 20.64 -0.813 Z",
    fill: "rgb(255,255,255)",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 122.973,
      top: 139,
      borderRadius: 12,
      backgroundColor: "rgb(0,193,211)",
      boxShadow: "0px 1px 10px 0px rgba(0,193,211,0.5)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "8px 12px 8px 12px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 24,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(255,254,255)",
      flexShrink: 0
    }
  }, props.text2 ?? "Blue Pixel"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 756,
      top: 108,
      width: 25,
      height: 31,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 25,
    height: 31,
    viewBox: "0 0 25 31",
    fill: "none",
    style: {
      position: "relative",
      width: 25,
      height: 31,
      flexShrink: 0,
      filter: "drop-shadow(0px 2px 2px rgba(0,0,0,0.2))",
      color: "rgb(121,189,11)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0 L 5.556 31 L 12.963 18.788 L 25 15.03 L 0 0 Z",
    fill: "rgb(121,189,11)",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 5.556 31 L 4.424 31.203 L 4.961 34.196 L 6.538 31.596 L 5.556 31 Z M 0 0 L 0.592 -0.985 L -1.578 -2.29 L -1.131 0.203 L 0 0 Z M 25 15.03 L 25.342 16.127 L 27.786 15.364 L 25.592 14.045 L 25 15.03 Z M 12.963 18.788 L 12.621 17.691 L 12.206 17.82 L 11.98 18.192 L 12.963 18.788 Z M 6.687 30.797 L 1.131 -0.203 L -1.131 0.203 L 4.424 31.203 L 6.687 30.797 Z M -0.592 0.985 L 24.408 16.015 L 25.592 14.045 L 0.592 -0.985 L -0.592 0.985 Z M 24.658 13.933 L 12.621 17.691 L 13.305 19.885 L 25.342 16.127 L 24.658 13.933 Z M 11.98 18.192 L 4.573 30.404 L 6.538 31.596 L 13.946 19.384 L 11.98 18.192 Z",
    fill: "rgb(255,255,255)",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 27,
      top: 37,
      borderRadius: "3px 28px 28px 28px",
      backgroundColor: "rgb(121,189,11)",
      boxShadow: "inset 0 0 0 2px rgb(65,150,12), 0px 1px 10px 0px rgba(121,189,11,0.5)",
      display: "flex",
      flexDirection: "column",
      gap: 2,
      padding: "11px 20px 11px 20px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      opacity: 0.8,
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 13,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(255,254,255)",
      flexShrink: 0
    }
  }, props.text3 ?? "Green Pixel"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 24,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(255,254,255)",
      flexShrink: 0
    }
  }, props.text4 ?? "Gracias!!")))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 138,
      top: 341,
      width: 25,
      height: 31,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 25,
    height: 31,
    viewBox: "0 0 25 31",
    fill: "none",
    style: {
      position: "relative",
      width: 25,
      height: 31,
      flexShrink: 0,
      filter: "drop-shadow(0px 2px 2px rgba(0,0,0,0.2))",
      color: "rgb(230,70,242)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0 L 5.556 31 L 12.963 18.788 L 25 15.03 L 0 0 Z",
    fill: "rgb(230,70,242)",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 5.556 31 L 4.424 31.203 L 4.961 34.196 L 6.538 31.596 L 5.556 31 Z M 0 0 L 0.592 -0.985 L -1.578 -2.29 L -1.131 0.203 L 0 0 Z M 25 15.03 L 25.342 16.127 L 27.786 15.364 L 25.592 14.045 L 25 15.03 Z M 12.963 18.788 L 12.621 17.691 L 12.206 17.82 L 11.98 18.192 L 12.963 18.788 Z M 6.687 30.797 L 1.131 -0.203 L -1.131 0.203 L 4.424 31.203 L 6.687 30.797 Z M -0.592 0.985 L 24.408 16.015 L 25.592 14.045 L 0.592 -0.985 L -0.592 0.985 Z M 24.658 13.933 L 12.621 17.691 L 13.305 19.885 L 25.342 16.127 L 24.658 13.933 Z M 11.98 18.192 L 4.573 30.404 L 6.538 31.596 L 13.946 19.384 L 11.98 18.192 Z",
    fill: "rgb(255,255,255)",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 27,
      top: 37,
      borderRadius: "3px 28px 28px 28px",
      backgroundColor: "rgb(230,70,242)",
      boxShadow: "inset 0 0 0 2px rgb(172,23,224), 0px 1px 10px 0px rgba(230,70,242,0.5)",
      display: "flex",
      flexDirection: "column",
      gap: 2,
      padding: "11px 20px 11px 20px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      opacity: 0.8,
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 13,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(255,254,255)",
      flexShrink: 0
    }
  }, "Pink Pixel"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 24,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(255,254,255)",
      flexShrink: 0
    }
  }, "Hablemos pronto")))));
  const __body2 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 1120,
      height: 300,
      overflow: "hidden",
      background: "radial-gradient(515.296px 165.051px at 92.61% 75.40%, rgba(45,201,216,0.3) 0.00%, rgba(45,201,216,0) 100.00%), radial-gradient(600.073px 205.125px at 16.28% 10.88%, rgba(174,127,226,0.5) 0.00%, rgba(174,127,226,0) 100.00%), linear-gradient(rgb(72,101,232),rgb(72,101,232))",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 84,
      top: 113,
      width: 952,
      height: 76,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 16,
      top: 7,
      width: 920,
      height: 62,
      fontFamily: "\"Dela Gothic One\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 44,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: "100px",
      color: "rgb(246,251,253)"
    }
  }, props.text1 ?? "¡Gracias por contactarnos!"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 952,
      height: 76
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 7,
      top: 7,
      width: 936,
      height: 60,
      boxShadow: "inset 0 0 0 1.500px rgb(0,193,211), 0 0 0 1.500px rgb(0,193,211)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 58,
      width: 18,
      height: 18,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1.500px rgb(0,193,211), 0 0 0 1.500px rgb(0,193,211)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 934,
      top: 58,
      width: 18,
      height: 18,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1.500px rgb(0,193,211), 0 0 0 1.500px rgb(0,193,211)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 18,
      height: 18,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1.500px rgb(0,193,211), 0 0 0 1.500px rgb(0,193,211)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 934,
      top: 0,
      width: 18,
      height: 18,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1.500px rgb(0,193,211), 0 0 0 1.500px rgb(0,193,211)"
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 426,
      top: 76,
      width: 259.973,
      height: 184,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 13.791,
      top: 13.791,
      width: 117.358,
      height: 117.271,
      backgroundColor: "rgb(0,193,211)",
      boxShadow: "0px 1px 10px 0px rgba(0,193,211,0.5)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 28.363,
      top: 47.502,
      width: 87.84,
      height: 50.567,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 87.84,
      height: 13.676,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 21.079,
    height: 8.877,
    viewBox: "0 0 21.079 8.877",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "matrix(-0.971,-0.240,0.240,-0.971,85.711,13.676)",
      transformOrigin: "0 0",
      width: 21.079,
      height: 8.877,
      color: "rgb(211,255,136)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 19.959 0.599 C 18.645 -0.727 14.951 0.562 14.951 0.562 C 14.951 0.562 8.36 1.556 6.251 0.646 C 4.142 -0.264 1.349 -0.447 0.332 2.307 C -0.374 4.177 0.178 5.544 0.765 6.361 C 2 8.082 4.453 8.877 8.62 8.877 C 9.145 8.877 9.698 8.865 10.278 8.84 C 15.833 8.602 18.935 7.655 20.335 5.769 C 20.866 5.052 21.126 4.191 21.072 3.38 C 21.048 1.99 20.461 1.104 19.959 0.599 Z",
    fill: "currentColor",
    fillRule: "evenodd"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 19.969,
    height: 8.877,
    viewBox: "0 0 19.969 8.877",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "matrix(0.969,-0.247,-0.247,-0.969,2.191,13.534)",
      transformOrigin: "0 0",
      width: 19.969,
      height: 8.877,
      color: "rgb(211,255,136)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 18.909 0.599 C 17.664 -0.727 14.164 0.562 14.164 0.562 C 14.164 0.562 7.92 1.556 5.922 0.646 C 3.924 -0.264 1.278 -0.447 0.314 2.307 C -0.354 4.177 0.169 5.544 0.725 6.361 C 1.895 8.082 4.218 8.877 8.167 8.877 C 8.664 8.877 9.187 8.865 9.737 8.84 C 15 8.602 17.939 7.655 19.265 5.769 C 19.768 5.052 20.014 4.191 19.963 3.38 C 19.94 1.99 19.384 1.104 18.909 0.599 Z",
    fill: "currentColor",
    fillRule: "evenodd"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 8.156,
      top: 22.021,
      width: 71.772,
      height: 9.787,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 9.787,
    height: 9.787,
    viewBox: "0 0 9.787 9.787",
    fill: "none",
    style: {
      position: "absolute",
      left: 61.985,
      top: 0,
      width: 9.787,
      height: 9.787,
      color: "rgb(50,50,50)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 4.899 C 0 2.18 2.18 0 4.901 0 C 7.597 0 9.787 2.18 9.787 4.899 C 9.787 7.586 7.597 9.787 4.901 9.787 C 2.18 9.787 0 7.586 0 4.899",
    fill: "currentColor",
    fillRule: "evenodd"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 9.787,
    height: 9.787,
    viewBox: "0 0 9.787 9.787",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 9.787,
      height: 9.787,
      color: "rgb(50,50,50)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 4.899 C 0 2.18 2.206 0 4.906 0 C 7.604 0 9.787 2.18 9.787 4.899 C 9.787 7.586 7.604 9.787 4.906 9.787 C 2.206 9.787 0 7.586 0 4.899",
    fill: "currentColor",
    fillRule: "evenodd"
  }))), /*#__PURE__*/React.createElement("svg", {
    width: 26.099,
    height: 17.943,
    viewBox: "0 0 26.099 17.943",
    fill: "none",
    style: {
      position: "absolute",
      left: 32.624,
      top: 32.624,
      width: 26.099,
      height: 17.943,
      color: "rgb(0,86,121)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.002 1.252 C 0.002 1.252 11.903 -1.565 26.098 1.252 C 26.098 1.252 26.528 17.943 13.05 17.943 C -0.476 17.943 0.002 1.252 0.002 1.252 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("svg", {
    width: 21.453,
    height: 21.453,
    viewBox: "0 0 21.453 21.453",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 21.453,
      height: 21.453,
      color: "rgb(0,0,0)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0 L 0 21.453 L 21.453 0 L 0 0 Z",
    fill: "rgb(0,0,0)",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 0 21.453 L -1.149 21.453 L -1.149 24.227 L 0.813 22.265 L 0 21.453 Z M 0 0 L 0 -1.149 L -1.149 -1.149 L -1.149 0 L 0 0 Z M 21.453 0 L 22.265 0.813 L 24.227 -1.149 L 21.453 -1.149 L 21.453 0 Z M 1.149 21.453 L 1.149 0 L -1.149 0 L -1.149 21.453 L 1.149 21.453 Z M 0 1.149 L 21.453 1.149 L 21.453 -1.149 L 0 -1.149 L 0 1.149 Z M 20.64 -0.813 L -0.813 20.64 L 0.813 22.265 L 22.265 0.813 L 20.64 -0.813 Z",
    fill: "rgb(255,255,255)",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 122.973,
      top: 139,
      borderRadius: 12,
      backgroundColor: "rgb(0,193,211)",
      boxShadow: "0px 1px 10px 0px rgba(0,193,211,0.5)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "8px 12px 8px 12px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 24,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(255,254,255)",
      flexShrink: 0
    }
  }, props.text2 ?? "Blue Pixel"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 678,
      top: 88,
      width: 25,
      height: 31,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 25,
    height: 31,
    viewBox: "0 0 25 31",
    fill: "none",
    style: {
      position: "relative",
      width: 25,
      height: 31,
      flexShrink: 0,
      filter: "drop-shadow(0px 2px 2px rgba(0,0,0,0.2))",
      color: "rgb(121,189,11)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0 L 5.556 31 L 12.963 18.788 L 25 15.03 L 0 0 Z",
    fill: "rgb(121,189,11)",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 5.556 31 L 4.424 31.203 L 4.961 34.196 L 6.538 31.596 L 5.556 31 Z M 0 0 L 0.592 -0.985 L -1.578 -2.29 L -1.131 0.203 L 0 0 Z M 25 15.03 L 25.342 16.127 L 27.786 15.364 L 25.592 14.045 L 25 15.03 Z M 12.963 18.788 L 12.621 17.691 L 12.206 17.82 L 11.98 18.192 L 12.963 18.788 Z M 6.687 30.797 L 1.131 -0.203 L -1.131 0.203 L 4.424 31.203 L 6.687 30.797 Z M -0.592 0.985 L 24.408 16.015 L 25.592 14.045 L 0.592 -0.985 L -0.592 0.985 Z M 24.658 13.933 L 12.621 17.691 L 13.305 19.885 L 25.342 16.127 L 24.658 13.933 Z M 11.98 18.192 L 4.573 30.404 L 6.538 31.596 L 13.946 19.384 L 11.98 18.192 Z",
    fill: "rgb(255,255,255)",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 27,
      top: 37,
      borderRadius: "3px 28px 28px 28px",
      backgroundColor: "rgb(121,189,11)",
      boxShadow: "inset 0 0 0 2px rgb(65,150,12), 0px 1px 10px 0px rgba(121,189,11,0.5)",
      display: "flex",
      flexDirection: "column",
      gap: 2,
      padding: "11px 20px 11px 20px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      opacity: 0.8,
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 13,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(255,254,255)",
      flexShrink: 0
    }
  }, props.text3 ?? "Green Pixel"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 24,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(255,254,255)",
      flexShrink: 0
    }
  }, props.text4 ?? "Gracias!!")))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 221,
      top: 162,
      width: 25,
      height: 31,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 25,
    height: 31,
    viewBox: "0 0 25 31",
    fill: "none",
    style: {
      position: "relative",
      width: 25,
      height: 31,
      flexShrink: 0,
      filter: "drop-shadow(0px 2px 2px rgba(0,0,0,0.2))",
      color: "rgb(230,70,242)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0 L 5.556 31 L 12.963 18.788 L 25 15.03 L 0 0 Z",
    fill: "rgb(230,70,242)",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 5.556 31 L 4.424 31.203 L 4.961 34.196 L 6.538 31.596 L 5.556 31 Z M 0 0 L 0.592 -0.985 L -1.578 -2.29 L -1.131 0.203 L 0 0 Z M 25 15.03 L 25.342 16.127 L 27.786 15.364 L 25.592 14.045 L 25 15.03 Z M 12.963 18.788 L 12.621 17.691 L 12.206 17.82 L 11.98 18.192 L 12.963 18.788 Z M 6.687 30.797 L 1.131 -0.203 L -1.131 0.203 L 4.424 31.203 L 6.687 30.797 Z M -0.592 0.985 L 24.408 16.015 L 25.592 14.045 L 0.592 -0.985 L -0.592 0.985 Z M 24.658 13.933 L 12.621 17.691 L 13.305 19.885 L 25.342 16.127 L 24.658 13.933 Z M 11.98 18.192 L 4.573 30.404 L 6.538 31.596 L 13.946 19.384 L 11.98 18.192 Z",
    fill: "rgb(255,255,255)",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 27,
      top: 37,
      borderRadius: "3px 28px 28px 28px",
      backgroundColor: "rgb(230,70,242)",
      boxShadow: "inset 0 0 0 2px rgb(172,23,224), 0px 1px 10px 0px rgba(230,70,242,0.5)",
      display: "flex",
      flexDirection: "column",
      gap: 2,
      padding: "11px 20px 11px 20px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      opacity: 0.8,
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 13,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(255,254,255)",
      flexShrink: 0
    }
  }, "Pink Pixel"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 24,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(255,254,255)",
      flexShrink: 0
    }
  }, "Hablemos pronto")))));
  const __body3 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 1120,
      height: 300,
      overflow: "hidden",
      background: "radial-gradient(515.296px 165.051px at 92.61% 75.40%, rgba(45,201,216,0.3) 0.00%, rgba(45,201,216,0) 100.00%), radial-gradient(600.073px 205.125px at 16.28% 10.88%, rgba(174,127,226,0.5) 0.00%, rgba(174,127,226,0) 100.00%), linear-gradient(rgb(72,101,232),rgb(72,101,232))",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 84,
      top: 113,
      width: 952,
      height: 76,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 16,
      top: 7,
      width: 920,
      height: 62,
      fontFamily: "\"Dela Gothic One\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 44,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: "100px",
      color: "rgb(246,251,253)"
    }
  }, props.text1 ?? "¡Gracias por contactarnos!"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 952,
      height: 76
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 7,
      top: 7,
      width: 936,
      height: 60,
      boxShadow: "inset 0 0 0 1.500px rgb(0,193,211), 0 0 0 1.500px rgb(0,193,211)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 58,
      width: 18,
      height: 18,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1.500px rgb(0,193,211), 0 0 0 1.500px rgb(0,193,211)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 934,
      top: 58,
      width: 18,
      height: 18,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1.500px rgb(0,193,211), 0 0 0 1.500px rgb(0,193,211)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 18,
      height: 18,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1.500px rgb(0,193,211), 0 0 0 1.500px rgb(0,193,211)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 934,
      top: 0,
      width: 18,
      height: 18,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1.500px rgb(0,193,211), 0 0 0 1.500px rgb(0,193,211)"
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 497,
      top: 112,
      width: 259.973,
      height: 184,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 13.791,
      top: 13.791,
      width: 117.358,
      height: 117.271,
      backgroundColor: "rgb(0,193,211)",
      boxShadow: "0px 1px 10px 0px rgba(0,193,211,0.5)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 28.363,
      top: 47.502,
      width: 87.84,
      height: 50.567,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 87.84,
      height: 13.676,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 21.079,
    height: 8.877,
    viewBox: "0 0 21.079 8.877",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "matrix(-0.971,-0.240,0.240,-0.971,85.711,13.676)",
      transformOrigin: "0 0",
      width: 21.079,
      height: 8.877,
      color: "rgb(211,255,136)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 19.959 0.599 C 18.645 -0.727 14.951 0.562 14.951 0.562 C 14.951 0.562 8.36 1.556 6.251 0.646 C 4.142 -0.264 1.349 -0.447 0.332 2.307 C -0.374 4.177 0.178 5.544 0.765 6.361 C 2 8.082 4.453 8.877 8.62 8.877 C 9.145 8.877 9.698 8.865 10.278 8.84 C 15.833 8.602 18.935 7.655 20.335 5.769 C 20.866 5.052 21.126 4.191 21.072 3.38 C 21.048 1.99 20.461 1.104 19.959 0.599 Z",
    fill: "currentColor",
    fillRule: "evenodd"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 19.969,
    height: 8.877,
    viewBox: "0 0 19.969 8.877",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "matrix(0.969,-0.247,-0.247,-0.969,2.191,13.534)",
      transformOrigin: "0 0",
      width: 19.969,
      height: 8.877,
      color: "rgb(211,255,136)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 18.909 0.599 C 17.664 -0.727 14.164 0.562 14.164 0.562 C 14.164 0.562 7.92 1.556 5.922 0.646 C 3.924 -0.264 1.278 -0.447 0.314 2.307 C -0.354 4.177 0.169 5.544 0.725 6.361 C 1.895 8.082 4.218 8.877 8.167 8.877 C 8.664 8.877 9.187 8.865 9.737 8.84 C 15 8.602 17.939 7.655 19.265 5.769 C 19.768 5.052 20.014 4.191 19.963 3.38 C 19.94 1.99 19.384 1.104 18.909 0.599 Z",
    fill: "currentColor",
    fillRule: "evenodd"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 8.156,
      top: 22.021,
      width: 71.772,
      height: 9.787,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 9.787,
    height: 9.787,
    viewBox: "0 0 9.787 9.787",
    fill: "none",
    style: {
      position: "absolute",
      left: 61.985,
      top: 0,
      width: 9.787,
      height: 9.787,
      color: "rgb(50,50,50)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 4.899 C 0 2.18 2.18 0 4.901 0 C 7.597 0 9.787 2.18 9.787 4.899 C 9.787 7.586 7.597 9.787 4.901 9.787 C 2.18 9.787 0 7.586 0 4.899",
    fill: "currentColor",
    fillRule: "evenodd"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 9.787,
    height: 9.787,
    viewBox: "0 0 9.787 9.787",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 9.787,
      height: 9.787,
      color: "rgb(50,50,50)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 4.899 C 0 2.18 2.206 0 4.906 0 C 7.604 0 9.787 2.18 9.787 4.899 C 9.787 7.586 7.604 9.787 4.906 9.787 C 2.206 9.787 0 7.586 0 4.899",
    fill: "currentColor",
    fillRule: "evenodd"
  }))), /*#__PURE__*/React.createElement("svg", {
    width: 26.099,
    height: 17.943,
    viewBox: "0 0 26.099 17.943",
    fill: "none",
    style: {
      position: "absolute",
      left: 32.624,
      top: 32.624,
      width: 26.099,
      height: 17.943,
      color: "rgb(0,86,121)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.002 1.252 C 0.002 1.252 11.903 -1.565 26.098 1.252 C 26.098 1.252 26.528 17.943 13.05 17.943 C -0.476 17.943 0.002 1.252 0.002 1.252 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("svg", {
    width: 21.453,
    height: 21.453,
    viewBox: "0 0 21.453 21.453",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 21.453,
      height: 21.453,
      color: "rgb(0,0,0)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0 L 0 21.453 L 21.453 0 L 0 0 Z",
    fill: "rgb(0,0,0)",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 0 21.453 L -1.149 21.453 L -1.149 24.227 L 0.813 22.265 L 0 21.453 Z M 0 0 L 0 -1.149 L -1.149 -1.149 L -1.149 0 L 0 0 Z M 21.453 0 L 22.265 0.813 L 24.227 -1.149 L 21.453 -1.149 L 21.453 0 Z M 1.149 21.453 L 1.149 0 L -1.149 0 L -1.149 21.453 L 1.149 21.453 Z M 0 1.149 L 21.453 1.149 L 21.453 -1.149 L 0 -1.149 L 0 1.149 Z M 20.64 -0.813 L -0.813 20.64 L 0.813 22.265 L 22.265 0.813 L 20.64 -0.813 Z",
    fill: "rgb(255,255,255)",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 122.973,
      top: 139,
      borderRadius: 12,
      backgroundColor: "rgb(0,193,211)",
      boxShadow: "0px 1px 10px 0px rgba(0,193,211,0.5)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "8px 12px 8px 12px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 24,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(255,254,255)",
      flexShrink: 0
    }
  }, props.text2 ?? "Blue Pixel"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 678,
      top: 129,
      width: 25,
      height: 31,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 25,
    height: 31,
    viewBox: "0 0 25 31",
    fill: "none",
    style: {
      position: "relative",
      width: 25,
      height: 31,
      flexShrink: 0,
      filter: "drop-shadow(0px 2px 2px rgba(0,0,0,0.2))",
      color: "rgb(121,189,11)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0 L 5.556 31 L 12.963 18.788 L 25 15.03 L 0 0 Z",
    fill: "rgb(121,189,11)",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 5.556 31 L 4.424 31.203 L 4.961 34.196 L 6.538 31.596 L 5.556 31 Z M 0 0 L 0.592 -0.985 L -1.578 -2.29 L -1.131 0.203 L 0 0 Z M 25 15.03 L 25.342 16.127 L 27.786 15.364 L 25.592 14.045 L 25 15.03 Z M 12.963 18.788 L 12.621 17.691 L 12.206 17.82 L 11.98 18.192 L 12.963 18.788 Z M 6.687 30.797 L 1.131 -0.203 L -1.131 0.203 L 4.424 31.203 L 6.687 30.797 Z M -0.592 0.985 L 24.408 16.015 L 25.592 14.045 L 0.592 -0.985 L -0.592 0.985 Z M 24.658 13.933 L 12.621 17.691 L 13.305 19.885 L 25.342 16.127 L 24.658 13.933 Z M 11.98 18.192 L 4.573 30.404 L 6.538 31.596 L 13.946 19.384 L 11.98 18.192 Z",
    fill: "rgb(255,255,255)",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 27,
      top: 37,
      borderRadius: "3px 28px 28px 28px",
      backgroundColor: "rgb(121,189,11)",
      boxShadow: "inset 0 0 0 2px rgb(65,150,12), 0px 1px 10px 0px rgba(121,189,11,0.5)",
      display: "flex",
      flexDirection: "column",
      gap: 2,
      padding: "11px 20px 11px 20px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      opacity: 0.8,
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 13,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(255,254,255)",
      flexShrink: 0
    }
  }, props.text3 ?? "Green Pixel"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 24,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(255,254,255)",
      flexShrink: 0
    }
  }, props.text4 ?? "Gracias!!")))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 120,
      top: 67,
      width: 25,
      height: 31,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 25,
    height: 31,
    viewBox: "0 0 25 31",
    fill: "none",
    style: {
      position: "relative",
      width: 25,
      height: 31,
      flexShrink: 0,
      filter: "drop-shadow(0px 2px 2px rgba(0,0,0,0.2))",
      color: "rgb(230,70,242)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0 L 5.556 31 L 12.963 18.788 L 25 15.03 L 0 0 Z",
    fill: "rgb(230,70,242)",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 5.556 31 L 4.424 31.203 L 4.961 34.196 L 6.538 31.596 L 5.556 31 Z M 0 0 L 0.592 -0.985 L -1.578 -2.29 L -1.131 0.203 L 0 0 Z M 25 15.03 L 25.342 16.127 L 27.786 15.364 L 25.592 14.045 L 25 15.03 Z M 12.963 18.788 L 12.621 17.691 L 12.206 17.82 L 11.98 18.192 L 12.963 18.788 Z M 6.687 30.797 L 1.131 -0.203 L -1.131 0.203 L 4.424 31.203 L 6.687 30.797 Z M -0.592 0.985 L 24.408 16.015 L 25.592 14.045 L 0.592 -0.985 L -0.592 0.985 Z M 24.658 13.933 L 12.621 17.691 L 13.305 19.885 L 25.342 16.127 L 24.658 13.933 Z M 11.98 18.192 L 4.573 30.404 L 6.538 31.596 L 13.946 19.384 L 11.98 18.192 Z",
    fill: "rgb(255,255,255)",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 27,
      top: 37,
      borderRadius: "3px 28px 28px 28px",
      backgroundColor: "rgb(230,70,242)",
      boxShadow: "inset 0 0 0 2px rgb(172,23,224), 0px 1px 10px 0px rgba(230,70,242,0.5)",
      display: "flex",
      flexDirection: "column",
      gap: 2,
      padding: "11px 20px 11px 20px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      opacity: 0.8,
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 13,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(255,254,255)",
      flexShrink: 0
    }
  }, "Pink Pixel"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 24,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(255,254,255)",
      flexShrink: 0
    }
  }, "Hablemos pronto")))));
  const __body4 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 1120,
      height: 300,
      overflow: "hidden",
      background: "radial-gradient(515.296px 165.051px at 92.61% 75.40%, rgba(45,201,216,0.3) 0.00%, rgba(45,201,216,0) 100.00%), radial-gradient(600.073px 205.125px at 16.28% 10.88%, rgba(174,127,226,0.5) 0.00%, rgba(174,127,226,0) 100.00%), linear-gradient(rgb(72,101,232),rgb(72,101,232))",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 84,
      top: 113,
      width: 952,
      height: 76,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 16,
      top: 7,
      width: 920,
      height: 62,
      fontFamily: "\"Dela Gothic One\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 44,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: "100px",
      color: "rgb(246,251,253)"
    }
  }, props.text1 ?? "¡Gracias por contactarnos!"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 952,
      height: 76
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 7,
      top: 7,
      width: 936,
      height: 60,
      boxShadow: "inset 0 0 0 1.500px rgb(0,193,211), 0 0 0 1.500px rgb(0,193,211)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 58,
      width: 18,
      height: 18,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1.500px rgb(0,193,211), 0 0 0 1.500px rgb(0,193,211)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 934,
      top: 58,
      width: 18,
      height: 18,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1.500px rgb(0,193,211), 0 0 0 1.500px rgb(0,193,211)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 18,
      height: 18,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1.500px rgb(0,193,211), 0 0 0 1.500px rgb(0,193,211)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 934,
      top: 0,
      width: 18,
      height: 18,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1.500px rgb(0,193,211), 0 0 0 1.500px rgb(0,193,211)"
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 475,
      top: 101,
      width: 259.973,
      height: 184,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 13.791,
      top: 13.791,
      width: 117.358,
      height: 117.271,
      backgroundColor: "rgb(0,193,211)",
      boxShadow: "0px 1px 10px 0px rgba(0,193,211,0.5)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 28.363,
      top: 47.502,
      width: 87.84,
      height: 50.567,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 87.84,
      height: 13.676,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 21.079,
    height: 8.877,
    viewBox: "0 0 21.079 8.877",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "matrix(-0.971,-0.240,0.240,-0.971,85.711,13.676)",
      transformOrigin: "0 0",
      width: 21.079,
      height: 8.877,
      color: "rgb(211,255,136)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 19.959 0.599 C 18.645 -0.727 14.951 0.562 14.951 0.562 C 14.951 0.562 8.36 1.556 6.251 0.646 C 4.142 -0.264 1.349 -0.447 0.332 2.307 C -0.374 4.177 0.178 5.544 0.765 6.361 C 2 8.082 4.453 8.877 8.62 8.877 C 9.145 8.877 9.698 8.865 10.278 8.84 C 15.833 8.602 18.935 7.655 20.335 5.769 C 20.866 5.052 21.126 4.191 21.072 3.38 C 21.048 1.99 20.461 1.104 19.959 0.599 Z",
    fill: "currentColor",
    fillRule: "evenodd"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 19.969,
    height: 8.877,
    viewBox: "0 0 19.969 8.877",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "matrix(0.969,-0.247,-0.247,-0.969,2.191,13.534)",
      transformOrigin: "0 0",
      width: 19.969,
      height: 8.877,
      color: "rgb(211,255,136)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 18.909 0.599 C 17.664 -0.727 14.164 0.562 14.164 0.562 C 14.164 0.562 7.92 1.556 5.922 0.646 C 3.924 -0.264 1.278 -0.447 0.314 2.307 C -0.354 4.177 0.169 5.544 0.725 6.361 C 1.895 8.082 4.218 8.877 8.167 8.877 C 8.664 8.877 9.187 8.865 9.737 8.84 C 15 8.602 17.939 7.655 19.265 5.769 C 19.768 5.052 20.014 4.191 19.963 3.38 C 19.94 1.99 19.384 1.104 18.909 0.599 Z",
    fill: "currentColor",
    fillRule: "evenodd"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 8.156,
      top: 22.021,
      width: 71.772,
      height: 9.787,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 9.787,
    height: 9.787,
    viewBox: "0 0 9.787 9.787",
    fill: "none",
    style: {
      position: "absolute",
      left: 61.985,
      top: 0,
      width: 9.787,
      height: 9.787,
      color: "rgb(50,50,50)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 4.899 C 0 2.18 2.18 0 4.901 0 C 7.597 0 9.787 2.18 9.787 4.899 C 9.787 7.586 7.597 9.787 4.901 9.787 C 2.18 9.787 0 7.586 0 4.899",
    fill: "currentColor",
    fillRule: "evenodd"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 9.787,
    height: 9.787,
    viewBox: "0 0 9.787 9.787",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 9.787,
      height: 9.787,
      color: "rgb(50,50,50)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 4.899 C 0 2.18 2.206 0 4.906 0 C 7.604 0 9.787 2.18 9.787 4.899 C 9.787 7.586 7.604 9.787 4.906 9.787 C 2.206 9.787 0 7.586 0 4.899",
    fill: "currentColor",
    fillRule: "evenodd"
  }))), /*#__PURE__*/React.createElement("svg", {
    width: 26.099,
    height: 17.943,
    viewBox: "0 0 26.099 17.943",
    fill: "none",
    style: {
      position: "absolute",
      left: 32.624,
      top: 32.624,
      width: 26.099,
      height: 17.943,
      color: "rgb(0,86,121)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.002 1.252 C 0.002 1.252 11.903 -1.565 26.098 1.252 C 26.098 1.252 26.528 17.943 13.05 17.943 C -0.476 17.943 0.002 1.252 0.002 1.252 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("svg", {
    width: 21.453,
    height: 21.453,
    viewBox: "0 0 21.453 21.453",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 21.453,
      height: 21.453,
      color: "rgb(0,0,0)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0 L 0 21.453 L 21.453 0 L 0 0 Z",
    fill: "rgb(0,0,0)",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 0 21.453 L -1.149 21.453 L -1.149 24.227 L 0.813 22.265 L 0 21.453 Z M 0 0 L 0 -1.149 L -1.149 -1.149 L -1.149 0 L 0 0 Z M 21.453 0 L 22.265 0.813 L 24.227 -1.149 L 21.453 -1.149 L 21.453 0 Z M 1.149 21.453 L 1.149 0 L -1.149 0 L -1.149 21.453 L 1.149 21.453 Z M 0 1.149 L 21.453 1.149 L 21.453 -1.149 L 0 -1.149 L 0 1.149 Z M 20.64 -0.813 L -0.813 20.64 L 0.813 22.265 L 22.265 0.813 L 20.64 -0.813 Z",
    fill: "rgb(255,255,255)",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 122.973,
      top: 139,
      borderRadius: 12,
      backgroundColor: "rgb(0,193,211)",
      boxShadow: "0px 1px 10px 0px rgba(0,193,211,0.5)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "8px 12px 8px 12px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 24,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(255,254,255)",
      flexShrink: 0
    }
  }, props.text2 ?? "Blue Pixel"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 746,
      top: 73,
      width: 25,
      height: 31,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 25,
    height: 31,
    viewBox: "0 0 25 31",
    fill: "none",
    style: {
      position: "relative",
      width: 25,
      height: 31,
      flexShrink: 0,
      filter: "drop-shadow(0px 2px 2px rgba(0,0,0,0.2))",
      color: "rgb(121,189,11)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0 L 5.556 31 L 12.963 18.788 L 25 15.03 L 0 0 Z",
    fill: "rgb(121,189,11)",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 5.556 31 L 4.424 31.203 L 4.961 34.196 L 6.538 31.596 L 5.556 31 Z M 0 0 L 0.592 -0.985 L -1.578 -2.29 L -1.131 0.203 L 0 0 Z M 25 15.03 L 25.342 16.127 L 27.786 15.364 L 25.592 14.045 L 25 15.03 Z M 12.963 18.788 L 12.621 17.691 L 12.206 17.82 L 11.98 18.192 L 12.963 18.788 Z M 6.687 30.797 L 1.131 -0.203 L -1.131 0.203 L 4.424 31.203 L 6.687 30.797 Z M -0.592 0.985 L 24.408 16.015 L 25.592 14.045 L 0.592 -0.985 L -0.592 0.985 Z M 24.658 13.933 L 12.621 17.691 L 13.305 19.885 L 25.342 16.127 L 24.658 13.933 Z M 11.98 18.192 L 4.573 30.404 L 6.538 31.596 L 13.946 19.384 L 11.98 18.192 Z",
    fill: "rgb(255,255,255)",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 27,
      top: 37,
      borderRadius: "3px 28px 28px 28px",
      backgroundColor: "rgb(121,189,11)",
      boxShadow: "inset 0 0 0 2px rgb(65,150,12), 0px 1px 10px 0px rgba(121,189,11,0.5)",
      display: "flex",
      flexDirection: "column",
      gap: 2,
      padding: "11px 20px 11px 20px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      opacity: 0.8,
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 13,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(255,254,255)",
      flexShrink: 0
    }
  }, props.text3 ?? "Green Pixel"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 24,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(255,254,255)",
      flexShrink: 0
    }
  }, props.text4 ?? "Gracias!!")))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 225,
      top: 42,
      width: 25,
      height: 31,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 25,
    height: 31,
    viewBox: "0 0 25 31",
    fill: "none",
    style: {
      position: "relative",
      width: 25,
      height: 31,
      flexShrink: 0,
      filter: "drop-shadow(0px 2px 2px rgba(0,0,0,0.2))",
      color: "rgb(230,70,242)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0 L 5.556 31 L 12.963 18.788 L 25 15.03 L 0 0 Z",
    fill: "rgb(230,70,242)",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 5.556 31 L 4.424 31.203 L 4.961 34.196 L 6.538 31.596 L 5.556 31 Z M 0 0 L 0.592 -0.985 L -1.578 -2.29 L -1.131 0.203 L 0 0 Z M 25 15.03 L 25.342 16.127 L 27.786 15.364 L 25.592 14.045 L 25 15.03 Z M 12.963 18.788 L 12.621 17.691 L 12.206 17.82 L 11.98 18.192 L 12.963 18.788 Z M 6.687 30.797 L 1.131 -0.203 L -1.131 0.203 L 4.424 31.203 L 6.687 30.797 Z M -0.592 0.985 L 24.408 16.015 L 25.592 14.045 L 0.592 -0.985 L -0.592 0.985 Z M 24.658 13.933 L 12.621 17.691 L 13.305 19.885 L 25.342 16.127 L 24.658 13.933 Z M 11.98 18.192 L 4.573 30.404 L 6.538 31.596 L 13.946 19.384 L 11.98 18.192 Z",
    fill: "rgb(255,255,255)",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 27,
      top: 37,
      borderRadius: "3px 28px 28px 28px",
      backgroundColor: "rgb(230,70,242)",
      boxShadow: "inset 0 0 0 2px rgb(172,23,224), 0px 1px 10px 0px rgba(230,70,242,0.5)",
      display: "flex",
      flexDirection: "column",
      gap: 2,
      padding: "11px 20px 11px 20px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      opacity: 0.8,
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 13,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(255,254,255)",
      flexShrink: 0
    }
  }, "Pink Pixel"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 24,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(255,254,255)",
      flexShrink: 0
    }
  }, "Hablemos pronto")))));
  const __impls = {
    // figma: Property 1=Default
    "property1=default": __body0,
    // figma: Property 1=Variant4
    "property1=variant4": __body1,
    // figma: Property 1=Variant5
    "property1=variant5": __body2,
    // figma: Property 1=Variant6
    "property1=variant6": __body3,
    // figma: Property 1=Variant7
    "property1=variant7": __body4
  };
  return (__impls[__vkey(props)] ?? __body0)();
}
Object.assign(__ds_scope, { Gif, __ds_default_components_Gif_1gzs98w: Gif });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/Gif.jsx", error: String((e && e.message) || e) }); }

// components/KeyboardArrowDownFilled.jsx
try { (() => {
// figma node: 101:14271 KeyboardArrowDownFilled
function KeyboardArrowDownFilled(_p = {}) {
  const props = _p;
  return /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      overflow: "hidden",
      position: "relative",
      color: "rgba(0,0,0,0.54)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 12,
    height: 7.410,
    viewBox: "0 0 12 7.410",
    fill: "none",
    style: {
      position: "absolute",
      left: 6,
      top: 8.59,
      width: 12,
      height: 7.41
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.41 0 L 6 4.58 L 10.59 0 L 12 1.41 L 6 7.41 L 0 1.41 L 1.41 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
}
Object.assign(__ds_scope, { KeyboardArrowDownFilled, __ds_default_components_KeyboardArrowDownFilled_1uhhuqm: KeyboardArrowDownFilled });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/KeyboardArrowDownFilled.jsx", error: String((e && e.message) || e) }); }

// components/Logo.jsx
try { (() => {
// figma node: 278:7263 Logo (2 variants)
const __venc = v => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = p => "property1=" + __venc(p.property1);
function Logo(_p = {}) {
  const props = {
    ..._p,
    property1: _p.property1 ?? "white"
  };
  const __body0 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 240,
      height: 30,
      position: "relative",
      color: "rgb(26,30,33)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 30,
      height: 30,
      backgroundColor: "rgb(11,151,193)"
    }
  }), /*#__PURE__*/React.createElement("svg", {
    width: 93.000,
    height: 30,
    viewBox: "0 0 93.000 30",
    fill: "none",
    style: {
      position: "absolute",
      left: 37.2,
      top: 0,
      width: 93,
      height: 30
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0 L 0 30 L 10.396 30 C 13.579 30 16.043 29.231 17.786 27.692 C 19.529 26.154 20.4 24.038 20.4 21.346 C 20.4 19.588 19.93 18.073 18.99 16.803 C 18.05 15.532 16.77 14.67 15.151 14.217 C 16.523 13.626 17.607 12.792 18.403 11.714 C 19.199 10.635 19.597 9.396 19.597 7.995 C 19.597 5.357 18.777 3.365 17.137 2.019 C 15.497 0.673 13.051 0 9.799 0 L 0 0 Z M 3.901 26.403 L 3.901 15.752 L 10.404 15.752 C 14.278 15.752 16.215 17.534 16.215 21.098 C 16.215 22.751 15.691 24.048 14.641 24.99 C 13.591 25.932 12.158 26.403 10.343 26.403 L 3.901 26.403 Z M 3.901 12.622 L 9.794 12.622 C 11.501 12.622 12.866 12.195 13.889 11.341 C 14.912 10.488 15.423 9.329 15.423 7.866 C 15.423 6.24 14.949 5.058 14.001 4.319 C 13.052 3.581 11.61 3.211 9.672 3.211 L 3.901 3.211 L 3.901 12.622 Z M 44.101 26.765 L 29.801 26.765 L 29.801 0 L 25.801 0 L 25.801 30 L 44.101 30 L 44.101 26.765 Z M 67.918 0 L 67.918 20.122 C 67.904 22.913 67.027 25.196 65.287 26.972 C 63.546 28.747 61.185 29.743 58.205 29.959 L 57.169 30 C 53.931 30 51.35 29.126 49.427 27.378 C 47.503 25.63 46.528 23.225 46.5 20.163 L 46.5 0 L 50.361 0 L 50.361 20.041 C 50.361 22.182 50.951 23.845 52.129 25.03 C 53.308 26.216 54.988 26.809 57.169 26.809 C 59.377 26.809 61.067 26.22 62.239 25.041 C 63.41 23.862 63.996 22.202 63.996 20.061 L 63.996 0 L 67.918 0 Z M 78.105 15.915 L 90.927 15.915 L 90.927 12.724 L 78.105 12.724 L 78.105 3.211 L 92.797 3.211 L 92.797 0 L 74.204 0 L 74.204 29.593 L 93 29.593 L 93 26.402 L 78.105 26.402 L 78.105 15.915 Z",
    fill: "currentColor",
    fillRule: "evenodd"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 103.801,
    height: 30,
    viewBox: "0 0 103.801 30",
    fill: "none",
    style: {
      position: "absolute",
      left: 136.2,
      top: 0,
      width: 103.801,
      height: 30
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.113 30 L 1.113 17.328 L 9.519 17.328 C 12.569 17.301 14.921 16.545 16.576 15.062 C 18.231 13.578 19.059 11.477 19.059 8.757 C 19.059 6.01 18.211 3.863 16.514 2.318 C 14.818 0.773 12.438 0 9.375 0 L 0 0 L 0 30 L 1.113 30 Z M 9.376 16.216 L 1.114 16.216 L 1.114 1.113 L 9.376 1.113 C 12.082 1.113 14.187 1.789 15.691 3.142 C 17.196 4.495 17.948 6.38 17.948 8.798 C 17.948 11.133 17.196 12.953 15.691 14.258 C 14.187 15.563 12.082 16.216 9.376 16.216 Z M 27.581 30 L 26.469 30 L 26.469 0 L 27.581 0 L 27.581 30 Z M 55.399 0 L 45.715 13.826 L 36.031 0 L 34.63 0 L 45.014 14.691 L 34.238 30 L 35.578 30 L 45.715 15.556 L 55.811 30 L 57.192 30 L 46.415 14.691 L 56.8 0 L 55.399 0 Z M 78.899 15.124 L 63.858 15.124 L 63.858 28.887 L 81.001 28.887 L 81.001 30 L 62.746 30 L 62.746 0 L 81.001 0 L 81.001 1.113 L 63.858 1.113 L 63.858 14.011 L 78.899 14.011 L 78.899 15.124 Z M 103.801 28.887 L 88.204 28.887 L 88.204 0 L 87.071 0 L 87.071 30 L 103.801 30 L 103.801 28.887 Z",
    fill: "currentColor",
    fillRule: "evenodd"
  })));
  const __body1 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 240,
      height: 30,
      position: "relative",
      color: "rgb(255,255,255)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 30,
      height: 30,
      backgroundColor: "rgb(11,151,193)"
    }
  }), /*#__PURE__*/React.createElement("svg", {
    width: 93,
    height: 30,
    viewBox: "0 0 93 30",
    fill: "none",
    style: {
      position: "absolute",
      left: 37.2,
      top: 0,
      width: 93,
      height: 30
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0 L 0 30 L 10.396 30 C 13.579 30 16.043 29.231 17.786 27.692 C 19.529 26.154 20.4 24.038 20.4 21.346 C 20.4 19.588 19.93 18.073 18.99 16.803 C 18.05 15.532 16.77 14.67 15.151 14.217 C 16.523 13.626 17.607 12.792 18.403 11.714 C 19.199 10.635 19.597 9.396 19.597 7.995 C 19.597 5.357 18.777 3.365 17.137 2.019 C 15.497 0.673 13.051 0 9.799 0 L 0 0 Z M 3.901 26.402 L 3.901 15.752 L 10.404 15.752 C 14.278 15.752 16.216 17.534 16.216 21.098 C 16.216 22.751 15.691 24.048 14.641 24.99 C 13.591 25.932 12.158 26.402 10.343 26.402 L 3.901 26.402 Z M 3.901 12.622 L 9.794 12.622 C 11.501 12.622 12.866 12.195 13.889 11.341 C 14.912 10.488 15.423 9.329 15.423 7.866 C 15.423 6.24 14.949 5.058 14.001 4.319 C 13.052 3.581 11.61 3.211 9.672 3.211 L 3.901 3.211 L 3.901 12.622 Z M 44.1 26.765 L 29.8 26.765 L 29.8 0 L 25.8 0 L 25.8 30 L 44.1 30 L 44.1 26.765 Z M 67.918 0 L 67.918 20.122 C 67.904 22.913 67.027 25.196 65.286 26.972 C 63.545 28.747 61.185 29.743 58.204 29.959 L 57.168 30 C 53.93 30 51.35 29.126 49.426 27.378 C 47.502 25.63 46.527 23.225 46.5 20.163 L 46.5 0 L 50.361 0 L 50.361 20.041 C 50.361 22.182 50.95 23.845 52.129 25.03 C 53.307 26.216 54.987 26.809 57.168 26.809 C 59.376 26.809 61.066 26.22 62.238 25.041 C 63.41 23.862 63.996 22.202 63.996 20.061 L 63.996 0 L 67.918 0 Z M 78.105 15.915 L 90.927 15.915 L 90.927 12.724 L 78.105 12.724 L 78.105 3.211 L 92.797 3.211 L 92.797 0 L 74.204 0 L 74.204 29.593 L 93 29.593 L 93 26.402 L 78.105 26.402 L 78.105 15.915 Z",
    fill: "currentColor",
    fillRule: "evenodd"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 103.800,
    height: 30,
    viewBox: "0 0 103.800 30",
    fill: "none",
    style: {
      position: "absolute",
      left: 136.2,
      top: 0,
      width: 103.8,
      height: 30
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.113 30 L 1.113 17.328 L 9.519 17.328 C 12.569 17.301 14.921 16.545 16.576 15.062 C 18.231 13.578 19.059 11.477 19.059 8.757 C 19.059 6.01 18.211 3.863 16.514 2.318 C 14.818 0.773 12.438 0 9.375 0 L 0 0 L 0 30 L 1.113 30 Z M 9.375 16.216 L 1.113 16.216 L 1.113 1.113 L 9.375 1.113 C 12.081 1.113 14.186 1.789 15.69 3.142 C 17.194 4.495 17.946 6.381 17.946 8.798 C 17.946 11.133 17.194 12.953 15.69 14.258 C 14.186 15.563 12.081 16.216 9.375 16.216 Z M 27.58 30 L 26.468 30 L 26.468 0 L 27.58 0 L 27.58 30 Z M 55.399 0 L 45.715 13.826 L 36.031 0 L 34.629 0 L 45.014 14.691 L 34.238 30 L 35.577 30 L 45.715 15.556 L 55.811 30 L 57.191 30 L 46.415 14.691 L 56.8 0 L 55.399 0 Z M 78.899 15.124 L 63.858 15.124 L 63.858 28.887 L 81.001 28.887 L 81.001 30 L 62.745 30 L 62.745 0 L 81.001 0 L 81.001 1.113 L 63.858 1.113 L 63.858 14.011 L 78.899 14.011 L 78.899 15.124 Z M 103.8 28.887 L 88.203 28.887 L 88.203 0 L 87.07 0 L 87.07 30 L 103.8 30 L 103.8 28.887 Z",
    fill: "currentColor",
    fillRule: "evenodd"
  })));
  const __impls = {
    // figma: Property 1=Dark
    "property1=dark": __body0,
    // figma: Property 1=White
    "property1=white": __body1
  };
  return (__impls[__vkey(props)] ?? __body1)();
}
Object.assign(__ds_scope, { Logo, __ds_default_components_Logo_182b5jf: Logo });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/Logo.jsx", error: String((e && e.message) || e) }); }

// components/LogoGridHover.jsx
try { (() => {
// figma node: 1523:154 Logo grid hover (2 variants)
const __venc = v => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = p => "property1=" + __venc(p.property1);
function LogoGridHover(_p = {}) {
  const props = {
    ..._p,
    property1: _p.property1 ?? "default"
  };
  const __body0 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 807,
      height: 560,
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 807,
      height: 560,
      backgroundColor: "rgb(255,255,255)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 189,
      top: 252,
      width: 429.856,
      height: 54.07,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 429.856,
      height: 54.07,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 54.108,
      height: 54.07,
      backgroundColor: "rgb(22,162,205)"
    }
  }), /*#__PURE__*/React.createElement("svg", {
    width: 165.929,
    height: 54.070,
    viewBox: "0 0 165.929 54.070",
    fill: "none",
    style: {
      position: "absolute",
      left: 66.133,
      top: 0,
      width: 165.929,
      height: 54.07
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0 L 0 54.07 L 18.548 54.07 C 24.228 54.07 28.623 52.683 31.733 49.91 C 34.843 47.138 36.398 43.325 36.398 38.473 C 36.398 35.304 35.559 32.574 33.882 30.284 C 32.204 27.994 29.921 26.441 27.032 25.624 C 29.48 24.559 31.415 23.055 32.835 21.112 C 34.255 19.168 34.965 16.934 34.965 14.409 C 34.965 9.655 33.502 6.066 30.576 3.639 C 27.65 1.213 23.286 0 17.483 0 L 0 0 Z M 6.959 47.586 L 6.959 28.39 L 18.561 28.39 C 25.473 28.39 28.93 31.602 28.93 38.025 C 28.93 41.004 27.993 43.343 26.12 45.04 C 24.247 46.737 21.691 47.586 18.452 47.586 L 6.959 47.586 Z M 6.959 22.749 L 17.473 22.749 C 20.518 22.749 22.954 21.98 24.778 20.441 C 26.603 18.902 27.516 16.814 27.516 14.177 C 27.516 11.246 26.67 9.115 24.978 7.784 C 23.286 6.453 20.712 5.788 17.255 5.788 L 6.959 5.788 L 6.959 22.749 Z M 78.684 48.239 L 53.17 48.239 L 53.17 0 L 46.033 0 L 46.033 54.07 L 78.684 54.07 L 78.684 48.239 Z M 121.18 0 L 121.18 36.266 C 121.156 41.297 119.591 45.412 116.485 48.611 C 113.379 51.811 109.167 53.606 103.85 53.996 L 102.001 54.07 C 96.224 54.07 91.62 52.494 88.188 49.344 C 84.755 46.194 83.015 41.859 82.967 36.339 L 82.967 0 L 89.855 0 L 89.855 36.12 C 89.855 39.978 90.907 42.976 93.009 45.113 C 95.112 47.25 98.109 48.318 102.001 48.318 C 105.941 48.318 108.956 47.256 111.046 45.131 C 113.137 43.007 114.183 40.015 114.183 36.156 L 114.183 0 L 121.18 0 Z M 139.354 28.683 L 162.231 28.683 L 162.231 22.932 L 139.354 22.932 L 139.354 5.788 L 165.566 5.788 L 165.566 0 L 132.393 0 L 132.393 53.337 L 165.929 53.337 L 165.929 47.586 L 139.354 47.586 L 139.354 28.683 Z",
    fill: "currentColor",
    fillRule: "evenodd"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 185.769,
    height: 54.070,
    viewBox: "0 0 185.769 54.070",
    fill: "none",
    style: {
      position: "absolute",
      left: 244.086,
      top: 0,
      width: 185.769,
      height: 54.07
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.991 54.07 L 1.991 31.231 L 17.036 31.231 C 22.494 31.182 26.704 29.82 29.666 27.146 C 32.629 24.472 34.11 20.685 34.11 15.783 C 34.11 10.831 32.592 6.963 29.556 4.178 C 26.52 1.393 22.26 0 16.778 0 L 0 0 L 0 54.07 L 1.991 54.07 Z M 16.779 29.226 L 1.992 29.226 L 1.992 2.005 L 16.779 2.005 C 21.622 2.005 25.39 3.225 28.082 5.663 C 30.773 8.102 32.119 11.5 32.119 15.857 C 32.119 20.066 30.773 23.346 28.082 25.698 C 25.39 28.05 21.622 29.226 16.779 29.226 Z M 49.358 54.07 L 47.367 54.07 L 47.367 0 L 49.358 0 L 49.358 54.07 Z M 99.148 0 L 81.817 24.918 L 64.486 0 L 61.978 0 L 80.563 26.478 L 61.277 54.07 L 63.674 54.07 L 81.817 28.037 L 99.886 54.07 L 102.357 54.07 L 83.071 26.478 L 101.656 0 L 99.148 0 Z M 141.205 27.258 L 114.286 27.258 L 114.286 52.064 L 144.967 52.064 L 144.967 54.07 L 112.295 54.07 L 112.295 0 L 144.967 0 L 144.967 2.005 L 114.286 2.005 L 114.286 25.252 L 141.205 25.252 L 141.205 27.258 Z M 185.77 52.064 L 157.856 52.064 L 157.856 0 L 155.828 0 L 155.828 54.07 L 185.77 54.07 L 185.77 52.064 Z",
    fill: "currentColor",
    fillRule: "evenodd"
  })))));
  const __body1 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 807,
      height: 560,
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 807,
      height: 560,
      backgroundColor: "rgb(33,37,41)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 148,
      top: 200,
      width: 512,
      height: 160,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 512,
      height: 160,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 41,
      top: 52.267,
      width: 429.553,
      height: 54.07,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 54.07,
      height: 54.07
    }
  }), /*#__PURE__*/React.createElement("svg", {
    width: 165.813,
    height: 54.070,
    viewBox: "0 0 165.813 54.070",
    fill: "none",
    style: {
      position: "absolute",
      left: 66.086,
      top: 0,
      width: 165.813,
      height: 54.07
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 54.07 L -0.5 54.07 L -0.5 54.57 L 0 54.57 L 0 54.07 Z M 0 0 L 0 -0.5 L -0.5 -0.5 L -0.5 0 L 0 0 Z M 33.858 30.284 L 33.454 30.58 L 33.454 30.58 L 33.858 30.284 Z M 27.013 25.624 L 26.813 25.165 L 25.53 25.724 L 26.877 26.105 L 27.013 25.624 Z M 32.812 21.112 L 33.216 21.407 L 33.216 21.407 L 32.812 21.112 Z M 30.555 3.639 L 30.235 4.024 L 30.235 4.024 L 30.555 3.639 Z M 6.955 28.39 L 6.955 27.89 L 6.455 27.89 L 6.455 28.39 L 6.955 28.39 Z M 6.955 47.586 L 6.455 47.586 L 6.455 48.086 L 6.955 48.086 L 6.955 47.586 Z M 26.103 45.04 L 25.767 44.669 L 25.767 44.669 L 26.103 45.04 Z M 6.955 22.749 L 6.455 22.749 L 6.455 23.249 L 6.955 23.249 L 6.955 22.749 Z M 24.762 20.441 L 25.084 20.823 L 25.084 20.823 L 24.762 20.441 Z M 24.961 7.784 L 25.271 7.391 L 25.271 7.391 L 24.961 7.784 Z M 6.955 5.788 L 6.955 5.288 L 6.455 5.288 L 6.455 5.788 L 6.955 5.788 Z M 53.132 48.239 L 52.632 48.239 L 52.632 48.739 L 53.132 48.739 L 53.132 48.239 Z M 78.628 48.239 L 79.128 48.239 L 79.128 47.739 L 78.628 47.739 L 78.628 48.239 Z M 53.132 0 L 53.632 0 L 53.632 -0.5 L 53.132 -0.5 L 53.132 0 Z M 46 0 L 46 -0.5 L 45.5 -0.5 L 45.5 0 L 46 0 Z M 46 54.07 L 45.5 54.07 L 45.5 54.57 L 46 54.57 L 46 54.07 Z M 78.628 54.07 L 78.628 54.57 L 79.128 54.57 L 79.128 54.07 L 78.628 54.07 Z M 121.092 36.266 L 121.592 36.269 L 121.592 36.266 L 121.092 36.266 Z M 121.092 0 L 121.592 0 L 121.592 -0.5 L 121.092 -0.5 L 121.092 0 Z M 116.401 48.611 L 116.76 48.96 L 116.76 48.96 L 116.401 48.611 Z M 103.775 53.996 L 103.794 54.496 L 103.803 54.496 L 103.811 54.495 L 103.775 53.996 Z M 101.927 54.07 L 101.927 54.57 L 101.937 54.57 L 101.947 54.569 L 101.927 54.07 Z M 88.123 49.344 L 87.785 49.712 L 87.785 49.712 L 88.123 49.344 Z M 82.906 36.339 L 82.406 36.339 L 82.406 36.344 L 82.906 36.339 Z M 82.906 0 L 82.906 -0.5 L 82.406 -0.5 L 82.406 0 L 82.906 0 Z M 89.79 0 L 90.29 0 L 90.29 -0.5 L 89.79 -0.5 L 89.79 0 Z M 114.1 0 L 114.1 -0.5 L 113.6 -0.5 L 113.6 0 L 114.1 0 Z M 162.118 28.683 L 162.118 29.183 L 162.618 29.183 L 162.618 28.683 L 162.118 28.683 Z M 139.257 28.683 L 139.257 28.183 L 138.757 28.183 L 138.757 28.683 L 139.257 28.683 Z M 162.118 22.932 L 162.618 22.932 L 162.618 22.432 L 162.118 22.432 L 162.118 22.932 Z M 139.257 22.932 L 138.757 22.932 L 138.757 23.432 L 139.257 23.432 L 139.257 22.932 Z M 139.257 5.788 L 139.257 5.288 L 138.757 5.288 L 138.757 5.788 L 139.257 5.788 Z M 165.451 5.788 L 165.451 6.288 L 165.951 6.288 L 165.951 5.788 L 165.451 5.788 Z M 165.451 0 L 165.951 0 L 165.951 -0.5 L 165.451 -0.5 L 165.451 0 Z M 132.301 0 L 132.301 -0.5 L 131.801 -0.5 L 131.801 0 L 132.301 0 Z M 132.301 53.337 L 131.801 53.337 L 131.801 53.837 L 132.301 53.837 L 132.301 53.337 Z M 165.813 53.337 L 165.813 53.837 L 166.313 53.837 L 166.313 53.337 L 165.813 53.337 Z M 165.813 47.586 L 166.313 47.586 L 166.313 47.086 L 165.813 47.086 L 165.813 47.586 Z M 139.257 47.586 L 138.757 47.586 L 138.757 48.086 L 139.257 48.086 L 139.257 47.586 Z M 0.5 54.07 L 0.5 0 L -0.5 0 L -0.5 54.07 L 0.5 54.07 Z M 18.535 53.57 L 0 53.57 L 0 54.57 L 18.535 54.57 L 18.535 53.57 Z M 31.378 49.537 C 28.391 52.203 24.133 53.57 18.535 53.57 L 18.535 54.57 C 24.289 54.57 28.816 53.164 32.044 50.284 L 31.378 49.537 Z M 35.872 38.473 C 35.872 43.208 34.361 46.875 31.378 49.537 L 32.044 50.284 C 35.275 47.4 36.872 43.442 36.872 38.473 L 35.872 38.473 Z M 33.454 30.58 C 35.061 32.774 35.872 35.397 35.872 38.473 L 36.872 38.473 C 36.872 35.21 36.007 32.375 34.261 29.989 L 33.454 30.58 Z M 26.877 26.105 C 29.663 26.893 31.848 28.385 33.454 30.58 L 34.261 29.989 C 32.515 27.603 30.137 25.988 27.149 25.143 L 26.877 26.105 Z M 32.408 20.817 C 31.047 22.681 29.188 24.132 26.813 25.165 L 27.212 26.082 C 29.732 24.986 31.739 23.429 33.216 21.407 L 32.408 20.817 Z M 34.441 14.409 C 34.441 16.833 33.762 18.963 32.408 20.817 L 33.216 21.407 C 34.701 19.373 35.441 17.034 35.441 14.409 L 34.441 14.409 Z M 30.235 4.024 C 33.017 6.332 34.441 9.763 34.441 14.409 L 35.441 14.409 C 35.441 9.547 33.94 5.799 30.874 3.255 L 30.235 4.024 Z M 17.47 0.5 C 23.211 0.5 27.438 1.703 30.235 4.024 L 30.874 3.255 C 27.824 0.723 23.327 -0.5 17.47 -0.5 L 17.47 0.5 Z M 0 0.5 L 17.47 0.5 L 17.47 -0.5 L 0 -0.5 L 0 0.5 Z M 6.455 28.39 L 6.455 47.586 L 7.455 47.586 L 7.455 28.39 L 6.455 28.39 Z M 18.549 27.89 L 6.955 27.89 L 6.955 28.89 L 18.549 28.89 L 18.549 27.89 Z M 29.41 38.025 C 29.41 34.726 28.522 32.164 26.66 30.433 C 24.806 28.708 22.071 27.89 18.549 27.89 L 18.549 28.89 C 21.934 28.89 24.38 29.678 25.979 31.165 C 27.572 32.646 28.41 34.9 28.41 38.025 L 29.41 38.025 Z M 26.438 45.41 C 28.434 43.601 29.41 41.118 29.41 38.025 L 28.41 38.025 C 28.41 40.891 27.515 43.084 25.767 44.669 L 26.438 45.41 Z M 18.44 48.086 C 21.765 48.086 24.451 47.212 26.438 45.41 L 25.767 44.669 C 24.01 46.262 21.588 47.086 18.44 47.086 L 18.44 48.086 Z M 6.955 48.086 L 18.44 48.086 L 18.44 47.086 L 6.955 47.086 L 6.955 48.086 Z M 17.462 22.249 L 6.955 22.249 L 6.955 23.249 L 17.462 23.249 L 17.462 22.249 Z M 24.44 20.059 C 22.729 21.502 20.42 22.249 17.462 22.249 L 17.462 23.249 C 20.59 23.249 23.148 22.457 25.084 20.823 L 24.44 20.059 Z M 26.997 14.177 C 26.997 16.684 26.138 18.626 24.44 20.059 L 25.084 20.823 C 27.033 19.179 27.997 16.944 27.997 14.177 L 26.997 14.177 Z M 24.652 8.177 C 26.182 9.382 26.997 11.34 26.997 14.177 L 27.997 14.177 C 27.997 11.152 27.122 8.849 25.271 7.391 L 24.652 8.177 Z M 17.244 6.288 C 20.649 6.288 23.089 6.946 24.652 8.177 L 25.271 7.391 C 23.452 5.96 20.747 5.288 17.244 5.288 L 17.244 6.288 Z M 6.955 6.288 L 17.244 6.288 L 17.244 5.288 L 6.955 5.288 L 6.955 6.288 Z M 7.455 22.749 L 7.455 5.788 L 6.455 5.788 L 6.455 22.749 L 7.455 22.749 Z M 53.132 48.739 L 78.628 48.739 L 78.628 47.739 L 53.132 47.739 L 53.132 48.739 Z M 52.632 0 L 52.632 48.239 L 53.632 48.239 L 53.632 0 L 52.632 0 Z M 46 0.5 L 53.132 0.5 L 53.132 -0.5 L 46 -0.5 L 46 0.5 Z M 46.5 54.07 L 46.5 0 L 45.5 0 L 45.5 54.07 L 46.5 54.07 Z M 78.628 53.57 L 46 53.57 L 46 54.57 L 78.628 54.57 L 78.628 53.57 Z M 78.128 48.239 L 78.128 54.07 L 79.128 54.07 L 79.128 48.239 L 78.128 48.239 Z M 121.592 36.266 L 121.592 0 L 120.592 0 L 120.592 36.266 L 121.592 36.266 Z M 116.76 48.96 C 119.965 45.655 121.568 41.411 121.592 36.269 L 120.592 36.264 C 120.569 41.184 119.044 45.169 116.042 48.263 L 116.76 48.96 Z M 103.811 54.495 C 109.222 54.097 113.555 52.263 116.76 48.96 L 116.042 48.263 C 113.04 51.358 108.955 53.114 103.738 53.498 L 103.811 54.495 Z M 101.947 54.569 L 103.794 54.496 L 103.755 53.497 L 101.907 53.57 L 101.947 54.569 Z M 87.785 49.712 C 91.328 52.967 96.06 54.57 101.927 54.57 L 101.927 53.57 C 96.248 53.57 91.778 52.022 88.462 48.976 L 87.785 49.712 Z M 82.406 36.344 C 82.456 41.974 84.235 46.451 87.785 49.712 L 88.462 48.976 C 85.153 45.936 83.454 41.744 83.406 36.335 L 82.406 36.344 Z M 82.406 0 L 82.406 36.339 L 83.406 36.339 L 83.406 0 L 82.406 0 Z M 89.79 -0.5 L 82.906 -0.5 L 82.906 0.5 L 89.79 0.5 L 89.79 -0.5 Z M 90.29 36.12 L 90.29 0 L 89.29 0 L 89.29 36.12 L 90.29 36.12 Z M 93.298 44.762 C 91.313 42.744 90.29 39.887 90.29 36.12 L 89.29 36.12 C 89.29 40.07 90.368 43.208 92.585 45.464 L 93.298 44.762 Z M 101.927 47.818 C 98.131 47.818 95.28 46.778 93.298 44.762 L 92.585 45.464 C 94.806 47.722 97.946 48.818 101.927 48.818 L 101.927 47.818 Z M 110.61 44.781 C 108.642 46.782 105.775 47.818 101.927 47.818 L 101.927 48.818 C 105.953 48.818 109.112 47.73 111.323 45.482 L 110.61 44.781 Z M 113.6 36.156 C 113.6 39.924 112.582 42.775 110.61 44.781 L 111.323 45.482 C 113.529 43.238 114.6 40.106 114.6 36.156 L 113.6 36.156 Z M 113.6 0 L 113.6 36.156 L 114.6 36.156 L 114.6 0 L 113.6 0 Z M 121.092 -0.5 L 114.1 -0.5 L 114.1 0.5 L 121.092 0.5 L 121.092 -0.5 Z M 162.118 28.183 L 139.257 28.183 L 139.257 29.183 L 162.118 29.183 L 162.118 28.183 Z M 161.618 22.932 L 161.618 28.683 L 162.618 28.683 L 162.618 22.932 L 161.618 22.932 Z M 139.257 23.432 L 162.118 23.432 L 162.118 22.432 L 139.257 22.432 L 139.257 23.432 Z M 138.757 5.788 L 138.757 22.932 L 139.757 22.932 L 139.757 5.788 L 138.757 5.788 Z M 165.451 5.288 L 139.257 5.288 L 139.257 6.288 L 165.451 6.288 L 165.451 5.288 Z M 164.951 0 L 164.951 5.788 L 165.951 5.788 L 165.951 0 L 164.951 0 Z M 132.301 0.5 L 165.451 0.5 L 165.451 -0.5 L 132.301 -0.5 L 132.301 0.5 Z M 132.801 53.337 L 132.801 0 L 131.801 0 L 131.801 53.337 L 132.801 53.337 Z M 165.813 52.837 L 132.301 52.837 L 132.301 53.837 L 165.813 53.837 L 165.813 52.837 Z M 165.313 47.586 L 165.313 53.337 L 166.313 53.337 L 166.313 47.586 L 165.313 47.586 Z M 139.257 48.086 L 165.813 48.086 L 165.813 47.086 L 139.257 47.086 L 139.257 48.086 Z M 138.757 28.683 L 138.757 47.586 L 139.757 47.586 L 139.757 28.683 L 138.757 28.683 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 185.639,
    height: 54.070,
    viewBox: "0 0 185.639 54.070",
    fill: "none",
    style: {
      position: "absolute",
      left: 243.914,
      top: 0,
      width: 185.639,
      height: 54.07
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.99 31.231 L 1.99 30.731 L 1.49 30.731 L 1.49 31.231 L 1.99 31.231 Z M 1.99 54.07 L 1.99 54.57 L 2.49 54.57 L 2.49 54.07 L 1.99 54.07 Z M 17.025 31.231 L 17.025 31.731 L 17.029 31.731 L 17.025 31.231 Z M 29.645 27.146 L 29.981 27.517 L 29.981 27.517 L 29.645 27.146 Z M 29.535 4.178 L 29.197 4.546 L 29.197 4.546 L 29.535 4.178 Z M 0 0 L 0 -0.5 L -0.5 -0.5 L -0.5 0 L 0 0 Z M 0 54.07 L -0.5 54.07 L -0.5 54.57 L 0 54.57 L 0 54.07 Z M 1.99 29.226 L 1.49 29.226 L 1.49 29.726 L 1.99 29.726 L 1.99 29.226 Z M 1.99 2.005 L 1.99 1.505 L 1.49 1.505 L 1.49 2.005 L 1.99 2.005 Z M 28.061 5.663 L 28.397 5.293 L 28.397 5.293 L 28.061 5.663 Z M 28.061 25.698 L 28.39 26.074 L 28.39 26.074 L 28.061 25.698 Z M 47.336 54.07 L 46.836 54.07 L 46.836 54.57 L 47.336 54.57 L 47.336 54.07 Z M 49.326 54.07 L 49.326 54.57 L 49.826 54.57 L 49.826 54.07 L 49.326 54.07 Z M 47.336 0 L 47.336 -0.5 L 46.836 -0.5 L 46.836 0 L 47.336 0 Z M 49.326 0 L 49.826 0 L 49.826 -0.5 L 49.326 -0.5 L 49.326 0 Z M 81.758 24.918 L 81.347 25.203 L 81.758 25.794 L 82.168 25.203 L 81.758 24.918 Z M 99.077 0 L 99.077 -0.5 L 98.816 -0.5 L 98.666 -0.285 L 99.077 0 Z M 64.438 0 L 64.849 -0.285 L 64.7 -0.5 L 64.438 -0.5 L 64.438 0 Z M 61.933 0 L 61.933 -0.5 L 60.971 -0.5 L 61.523 0.287 L 61.933 0 Z M 80.505 26.478 L 80.915 26.764 L 81.115 26.477 L 80.914 26.191 L 80.505 26.478 Z M 61.232 54.07 L 60.823 53.783 L 60.273 54.57 L 61.232 54.57 L 61.232 54.07 Z M 63.628 54.07 L 63.628 54.57 L 63.889 54.57 L 64.038 54.355 L 63.628 54.07 Z M 81.758 28.037 L 82.168 27.753 L 81.758 27.161 L 81.347 27.752 L 81.758 28.037 Z M 99.814 54.07 L 99.403 54.355 L 99.552 54.57 L 99.814 54.57 L 99.814 54.07 Z M 102.283 54.07 L 102.283 54.57 L 103.242 54.57 L 102.693 53.783 L 102.283 54.07 Z M 83.011 26.478 L 82.601 26.191 L 82.4 26.477 L 82.601 26.764 L 83.011 26.478 Z M 101.583 0 L 101.992 0.287 L 102.544 -0.5 L 101.583 -0.5 L 101.583 0 Z M 114.205 27.258 L 114.205 26.758 L 113.705 26.758 L 113.705 27.258 L 114.205 27.258 Z M 141.105 27.258 L 141.105 27.758 L 141.605 27.758 L 141.605 27.258 L 141.105 27.258 Z M 114.205 52.064 L 113.705 52.064 L 113.705 52.564 L 114.205 52.564 L 114.205 52.064 Z M 144.864 52.064 L 145.364 52.064 L 145.364 51.564 L 144.864 51.564 L 144.864 52.064 Z M 144.864 54.07 L 144.864 54.57 L 145.364 54.57 L 145.364 54.07 L 144.864 54.07 Z M 112.215 54.07 L 111.715 54.07 L 111.715 54.57 L 112.215 54.57 L 112.215 54.07 Z M 112.215 0 L 112.215 -0.5 L 111.715 -0.5 L 111.715 0 L 112.215 0 Z M 144.864 0 L 145.364 0 L 145.364 -0.5 L 144.864 -0.5 L 144.864 0 Z M 144.864 2.005 L 144.864 2.505 L 145.364 2.505 L 145.364 2.005 L 144.864 2.005 Z M 114.205 2.005 L 114.205 1.505 L 113.705 1.505 L 113.705 2.005 L 114.205 2.005 Z M 114.205 25.252 L 113.705 25.252 L 113.705 25.752 L 114.205 25.752 L 114.205 25.252 Z M 141.105 25.252 L 141.605 25.252 L 141.605 24.752 L 141.105 24.752 L 141.105 25.252 Z M 157.745 52.064 L 157.245 52.064 L 157.245 52.564 L 157.745 52.564 L 157.745 52.064 Z M 185.639 52.064 L 186.139 52.064 L 186.139 51.564 L 185.639 51.564 L 185.639 52.064 Z M 157.745 0 L 158.245 0 L 158.245 -0.5 L 157.745 -0.5 L 157.745 0 Z M 155.719 0 L 155.719 -0.5 L 155.219 -0.5 L 155.219 0 L 155.719 0 Z M 155.719 54.07 L 155.219 54.07 L 155.219 54.57 L 155.719 54.57 L 155.719 54.07 Z M 185.639 54.07 L 185.639 54.57 L 186.139 54.57 L 186.139 54.07 L 185.639 54.07 Z M 1.49 31.231 L 1.49 54.07 L 2.49 54.07 L 2.49 31.231 L 1.49 31.231 Z M 17.025 30.731 L 1.99 30.731 L 1.99 31.731 L 17.025 31.731 L 17.025 30.731 Z M 29.31 26.775 C 26.47 29.341 22.397 30.682 17.02 30.731 L 17.029 31.731 C 22.56 31.681 26.901 30.299 29.981 27.517 L 29.31 26.775 Z M 33.586 15.783 C 33.586 20.578 32.142 24.217 29.31 26.775 L 29.981 27.517 C 33.069 24.728 34.586 20.791 34.586 15.783 L 33.586 15.783 Z M 29.197 4.546 C 32.107 7.218 33.586 10.941 33.586 15.783 L 34.586 15.783 C 34.586 10.722 33.031 6.708 29.873 3.809 L 29.197 4.546 Z M 16.767 0.5 C 22.162 0.5 26.282 1.87 29.197 4.546 L 29.873 3.809 C 26.72 0.915 22.328 -0.5 16.767 -0.5 L 16.767 0.5 Z M 0 0.5 L 16.767 0.5 L 16.767 -0.5 L 0 -0.5 L 0 0.5 Z M 0.5 54.07 L 0.5 0 L -0.5 0 L -0.5 54.07 L 0.5 54.07 Z M 1.99 53.57 L 0 53.57 L 0 54.57 L 1.99 54.57 L 1.99 53.57 Z M 1.99 29.726 L 16.767 29.726 L 16.767 28.726 L 1.99 28.726 L 1.99 29.726 Z M 1.49 2.005 L 1.49 29.226 L 2.49 29.226 L 2.49 2.005 L 1.49 2.005 Z M 16.767 1.505 L 1.99 1.505 L 1.99 2.505 L 16.767 2.505 L 16.767 1.505 Z M 28.397 5.293 C 25.588 2.746 21.689 1.505 16.767 1.505 L 16.767 2.505 C 21.524 2.505 25.154 3.703 27.725 6.034 L 28.397 5.293 Z M 32.596 15.857 C 32.596 11.389 31.212 7.845 28.397 5.293 L 27.725 6.034 C 30.29 8.359 31.596 11.61 31.596 15.857 L 32.596 15.857 Z M 28.39 26.074 C 31.209 23.61 32.596 20.182 32.596 15.857 L 31.596 15.857 C 31.596 19.95 30.294 23.082 27.732 25.322 L 28.39 26.074 Z M 16.767 29.726 C 21.684 29.726 25.581 28.53 28.39 26.074 L 27.732 25.322 C 25.161 27.569 21.529 28.726 16.767 28.726 L 16.767 29.726 Z M 47.336 54.57 L 49.326 54.57 L 49.326 53.57 L 47.336 53.57 L 47.336 54.57 Z M 46.836 0 L 46.836 54.07 L 47.836 54.07 L 47.836 0 L 46.836 0 Z M 49.326 -0.5 L 47.336 -0.5 L 47.336 0.5 L 49.326 0.5 L 49.326 -0.5 Z M 49.826 54.07 L 49.826 0 L 48.826 0 L 48.826 54.07 L 49.826 54.07 Z M 82.168 25.203 L 99.488 0.285 L 98.666 -0.285 L 81.347 24.633 L 82.168 25.203 Z M 64.028 0.285 L 81.347 25.203 L 82.168 24.633 L 64.849 -0.285 L 64.028 0.285 Z M 61.933 0.5 L 64.438 0.5 L 64.438 -0.5 L 61.933 -0.5 L 61.933 0.5 Z M 80.914 26.191 L 62.342 -0.287 L 61.523 0.287 L 80.095 26.765 L 80.914 26.191 Z M 61.642 54.356 L 80.915 26.764 L 80.095 26.191 L 60.823 53.783 L 61.642 54.356 Z M 63.628 53.57 L 61.232 53.57 L 61.232 54.57 L 63.628 54.57 L 63.628 53.57 Z M 81.347 27.752 L 63.217 53.784 L 64.038 54.355 L 82.168 28.323 L 81.347 27.752 Z M 100.225 53.785 L 82.168 27.753 L 81.347 28.322 L 99.403 54.355 L 100.225 53.785 Z M 102.283 53.57 L 99.814 53.57 L 99.814 54.57 L 102.283 54.57 L 102.283 53.57 Z M 82.601 26.764 L 101.873 54.356 L 102.693 53.783 L 83.42 26.191 L 82.601 26.764 Z M 101.173 -0.287 L 82.601 26.191 L 83.42 26.765 L 101.992 0.287 L 101.173 -0.287 Z M 99.077 0.5 L 101.583 0.5 L 101.583 -0.5 L 99.077 -0.5 L 99.077 0.5 Z M 114.205 27.758 L 141.105 27.758 L 141.105 26.758 L 114.205 26.758 L 114.205 27.758 Z M 114.705 52.064 L 114.705 27.258 L 113.705 27.258 L 113.705 52.064 L 114.705 52.064 Z M 144.864 51.564 L 114.205 51.564 L 114.205 52.564 L 144.864 52.564 L 144.864 51.564 Z M 145.364 54.07 L 145.364 52.064 L 144.364 52.064 L 144.364 54.07 L 145.364 54.07 Z M 112.215 54.57 L 144.864 54.57 L 144.864 53.57 L 112.215 53.57 L 112.215 54.57 Z M 111.715 0 L 111.715 54.07 L 112.715 54.07 L 112.715 0 L 111.715 0 Z M 144.864 -0.5 L 112.215 -0.5 L 112.215 0.5 L 144.864 0.5 L 144.864 -0.5 Z M 145.364 2.005 L 145.364 0 L 144.364 0 L 144.364 2.005 L 145.364 2.005 Z M 114.205 2.505 L 144.864 2.505 L 144.864 1.505 L 114.205 1.505 L 114.205 2.505 Z M 114.705 25.252 L 114.705 2.005 L 113.705 2.005 L 113.705 25.252 L 114.705 25.252 Z M 141.105 24.752 L 114.205 24.752 L 114.205 25.752 L 141.105 25.752 L 141.105 24.752 Z M 141.605 27.258 L 141.605 25.252 L 140.605 25.252 L 140.605 27.258 L 141.605 27.258 Z M 157.745 52.564 L 185.639 52.564 L 185.639 51.564 L 157.745 51.564 L 157.745 52.564 Z M 157.245 0 L 157.245 52.064 L 158.245 52.064 L 158.245 0 L 157.245 0 Z M 155.719 0.5 L 157.745 0.5 L 157.745 -0.5 L 155.719 -0.5 L 155.719 0.5 Z M 156.219 54.07 L 156.219 0 L 155.219 0 L 155.219 54.07 L 156.219 54.07 Z M 185.639 53.57 L 155.719 53.57 L 155.719 54.57 L 185.639 54.57 L 185.639 53.57 Z M 185.139 52.064 L 185.139 54.07 L 186.139 54.07 L 186.139 52.064 L 185.139 52.064 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 512,
      height: 160,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 5,
      top: 0,
      width: 500.443,
      height: 160,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 160,
    height: 1,
    viewBox: "0 -0.500 160 1",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "matrix(0,1,-1,0,0,0)",
      transformOrigin: "0 0",
      width: 160,
      height: 1,
      opacity: 0.32
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.5 -1 C 0.224 -1 0 -0.776 0 -0.5 C 0 -0.224 0.224 0 0.5 0 L 0.5 -1 Z M 159.5 0 C 159.776 0 160 -0.224 160 -0.5 C 160 -0.776 159.776 -1 159.5 -1 L 159.5 0 Z M 1.494 0 C 1.77 0 1.994 -0.224 1.994 -0.5 C 1.994 -0.776 1.77 -1 1.494 -1 L 1.494 0 Z M 3.481 -1 C 3.205 -1 2.981 -0.776 2.981 -0.5 C 2.981 -0.224 3.205 0 3.481 0 L 3.481 -1 Z M 5.469 0 C 5.745 0 5.969 -0.224 5.969 -0.5 C 5.969 -0.776 5.745 -1 5.469 -1 L 5.469 0 Z M 7.456 -1 C 7.18 -1 6.956 -0.776 6.956 -0.5 C 6.956 -0.224 7.18 0 7.456 0 L 7.456 -1 Z M 9.444 0 C 9.72 0 9.944 -0.224 9.944 -0.5 C 9.944 -0.776 9.72 -1 9.444 -1 L 9.444 0 Z M 11.431 -1 C 11.155 -1 10.931 -0.776 10.931 -0.5 C 10.931 -0.224 11.155 0 11.431 0 L 11.431 -1 Z M 13.419 0 C 13.695 0 13.919 -0.224 13.919 -0.5 C 13.919 -0.776 13.695 -1 13.419 -1 L 13.419 0 Z M 15.406 -1 C 15.13 -1 14.906 -0.776 14.906 -0.5 C 14.906 -0.224 15.13 0 15.406 0 L 15.406 -1 Z M 17.394 0 C 17.67 0 17.894 -0.224 17.894 -0.5 C 17.894 -0.776 17.67 -1 17.394 -1 L 17.394 0 Z M 19.381 -1 C 19.105 -1 18.881 -0.776 18.881 -0.5 C 18.881 -0.224 19.105 0 19.381 0 L 19.381 -1 Z M 21.369 0 C 21.645 0 21.869 -0.224 21.869 -0.5 C 21.869 -0.776 21.645 -1 21.369 -1 L 21.369 0 Z M 23.356 -1 C 23.08 -1 22.856 -0.776 22.856 -0.5 C 22.856 -0.224 23.08 0 23.356 0 L 23.356 -1 Z M 25.344 0 C 25.62 0 25.844 -0.224 25.844 -0.5 C 25.844 -0.776 25.62 -1 25.344 -1 L 25.344 0 Z M 27.331 -1 C 27.055 -1 26.831 -0.776 26.831 -0.5 C 26.831 -0.224 27.055 0 27.331 0 L 27.331 -1 Z M 29.319 0 C 29.595 0 29.819 -0.224 29.819 -0.5 C 29.819 -0.776 29.595 -1 29.319 -1 L 29.319 0 Z M 31.306 -1 C 31.03 -1 30.806 -0.776 30.806 -0.5 C 30.806 -0.224 31.03 0 31.306 0 L 31.306 -1 Z M 33.294 0 C 33.57 0 33.794 -0.224 33.794 -0.5 C 33.794 -0.776 33.57 -1 33.294 -1 L 33.294 0 Z M 35.281 -1 C 35.005 -1 34.781 -0.776 34.781 -0.5 C 34.781 -0.224 35.005 0 35.281 0 L 35.281 -1 Z M 37.269 0 C 37.545 0 37.769 -0.224 37.769 -0.5 C 37.769 -0.776 37.545 -1 37.269 -1 L 37.269 0 Z M 39.256 -1 C 38.98 -1 38.756 -0.776 38.756 -0.5 C 38.756 -0.224 38.98 0 39.256 0 L 39.256 -1 Z M 41.244 0 C 41.52 0 41.744 -0.224 41.744 -0.5 C 41.744 -0.776 41.52 -1 41.244 -1 L 41.244 0 Z M 43.231 -1 C 42.955 -1 42.731 -0.776 42.731 -0.5 C 42.731 -0.224 42.955 0 43.231 0 L 43.231 -1 Z M 45.219 0 C 45.495 0 45.719 -0.224 45.719 -0.5 C 45.719 -0.776 45.495 -1 45.219 -1 L 45.219 0 Z M 47.206 -1 C 46.93 -1 46.706 -0.776 46.706 -0.5 C 46.706 -0.224 46.93 0 47.206 0 L 47.206 -1 Z M 49.194 0 C 49.47 0 49.694 -0.224 49.694 -0.5 C 49.694 -0.776 49.47 -1 49.194 -1 L 49.194 0 Z M 51.181 -1 C 50.905 -1 50.681 -0.776 50.681 -0.5 C 50.681 -0.224 50.905 0 51.181 0 L 51.181 -1 Z M 53.169 0 C 53.445 0 53.669 -0.224 53.669 -0.5 C 53.669 -0.776 53.445 -1 53.169 -1 L 53.169 0 Z M 55.156 -1 C 54.88 -1 54.656 -0.776 54.656 -0.5 C 54.656 -0.224 54.88 0 55.156 0 L 55.156 -1 Z M 57.144 0 C 57.42 0 57.644 -0.224 57.644 -0.5 C 57.644 -0.776 57.42 -1 57.144 -1 L 57.144 0 Z M 59.131 -1 C 58.855 -1 58.631 -0.776 58.631 -0.5 C 58.631 -0.224 58.855 0 59.131 0 L 59.131 -1 Z M 61.119 0 C 61.395 0 61.619 -0.224 61.619 -0.5 C 61.619 -0.776 61.395 -1 61.119 -1 L 61.119 0 Z M 63.106 -1 C 62.83 -1 62.606 -0.776 62.606 -0.5 C 62.606 -0.224 62.83 0 63.106 0 L 63.106 -1 Z M 65.094 0 C 65.37 0 65.594 -0.224 65.594 -0.5 C 65.594 -0.776 65.37 -1 65.094 -1 L 65.094 0 Z M 67.081 -1 C 66.805 -1 66.581 -0.776 66.581 -0.5 C 66.581 -0.224 66.805 0 67.081 0 L 67.081 -1 Z M 69.069 0 C 69.345 0 69.569 -0.224 69.569 -0.5 C 69.569 -0.776 69.345 -1 69.069 -1 L 69.069 0 Z M 71.056 -1 C 70.78 -1 70.556 -0.776 70.556 -0.5 C 70.556 -0.224 70.78 0 71.056 0 L 71.056 -1 Z M 73.044 0 C 73.32 0 73.544 -0.224 73.544 -0.5 C 73.544 -0.776 73.32 -1 73.044 -1 L 73.044 0 Z M 75.031 -1 C 74.755 -1 74.531 -0.776 74.531 -0.5 C 74.531 -0.224 74.755 0 75.031 0 L 75.031 -1 Z M 77.019 0 C 77.295 0 77.519 -0.224 77.519 -0.5 C 77.519 -0.776 77.295 -1 77.019 -1 L 77.019 0 Z M 79.006 -1 C 78.73 -1 78.506 -0.776 78.506 -0.5 C 78.506 -0.224 78.73 0 79.006 0 L 79.006 -1 Z M 80.994 0 C 81.27 0 81.494 -0.224 81.494 -0.5 C 81.494 -0.776 81.27 -1 80.994 -1 L 80.994 0 Z M 82.981 -1 C 82.705 -1 82.481 -0.776 82.481 -0.5 C 82.481 -0.224 82.705 0 82.981 0 L 82.981 -1 Z M 84.969 0 C 85.245 0 85.469 -0.224 85.469 -0.5 C 85.469 -0.776 85.245 -1 84.969 -1 L 84.969 0 Z M 86.956 -1 C 86.68 -1 86.456 -0.776 86.456 -0.5 C 86.456 -0.224 86.68 0 86.956 0 L 86.956 -1 Z M 88.944 0 C 89.22 0 89.444 -0.224 89.444 -0.5 C 89.444 -0.776 89.22 -1 88.944 -1 L 88.944 0 Z M 90.931 -1 C 90.655 -1 90.431 -0.776 90.431 -0.5 C 90.431 -0.224 90.655 0 90.931 0 L 90.931 -1 Z M 92.919 0 C 93.195 0 93.419 -0.224 93.419 -0.5 C 93.419 -0.776 93.195 -1 92.919 -1 L 92.919 0 Z M 94.906 -1 C 94.63 -1 94.406 -0.776 94.406 -0.5 C 94.406 -0.224 94.63 0 94.906 0 L 94.906 -1 Z M 96.894 0 C 97.17 0 97.394 -0.224 97.394 -0.5 C 97.394 -0.776 97.17 -1 96.894 -1 L 96.894 0 Z M 98.881 -1 C 98.605 -1 98.381 -0.776 98.381 -0.5 C 98.381 -0.224 98.605 0 98.881 0 L 98.881 -1 Z M 100.869 0 C 101.145 0 101.369 -0.224 101.369 -0.5 C 101.369 -0.776 101.145 -1 100.869 -1 L 100.869 0 Z M 102.856 -1 C 102.58 -1 102.356 -0.776 102.356 -0.5 C 102.356 -0.224 102.58 0 102.856 0 L 102.856 -1 Z M 104.844 0 C 105.12 0 105.344 -0.224 105.344 -0.5 C 105.344 -0.776 105.12 -1 104.844 -1 L 104.844 0 Z M 106.831 -1 C 106.555 -1 106.331 -0.776 106.331 -0.5 C 106.331 -0.224 106.555 0 106.831 0 L 106.831 -1 Z M 108.819 0 C 109.095 0 109.319 -0.224 109.319 -0.5 C 109.319 -0.776 109.095 -1 108.819 -1 L 108.819 0 Z M 110.806 -1 C 110.53 -1 110.306 -0.776 110.306 -0.5 C 110.306 -0.224 110.53 0 110.806 0 L 110.806 -1 Z M 112.794 0 C 113.07 0 113.294 -0.224 113.294 -0.5 C 113.294 -0.776 113.07 -1 112.794 -1 L 112.794 0 Z M 114.781 -1 C 114.505 -1 114.281 -0.776 114.281 -0.5 C 114.281 -0.224 114.505 0 114.781 0 L 114.781 -1 Z M 116.769 0 C 117.045 0 117.269 -0.224 117.269 -0.5 C 117.269 -0.776 117.045 -1 116.769 -1 L 116.769 0 Z M 118.756 -1 C 118.48 -1 118.256 -0.776 118.256 -0.5 C 118.256 -0.224 118.48 0 118.756 0 L 118.756 -1 Z M 120.744 0 C 121.02 0 121.244 -0.224 121.244 -0.5 C 121.244 -0.776 121.02 -1 120.744 -1 L 120.744 0 Z M 122.731 -1 C 122.455 -1 122.231 -0.776 122.231 -0.5 C 122.231 -0.224 122.455 0 122.731 0 L 122.731 -1 Z M 124.719 0 C 124.995 0 125.219 -0.224 125.219 -0.5 C 125.219 -0.776 124.995 -1 124.719 -1 L 124.719 0 Z M 126.706 -1 C 126.43 -1 126.206 -0.776 126.206 -0.5 C 126.206 -0.224 126.43 0 126.706 0 L 126.706 -1 Z M 128.694 0 C 128.97 0 129.194 -0.224 129.194 -0.5 C 129.194 -0.776 128.97 -1 128.694 -1 L 128.694 0 Z M 130.681 -1 C 130.405 -1 130.181 -0.776 130.181 -0.5 C 130.181 -0.224 130.405 0 130.681 0 L 130.681 -1 Z M 132.669 0 C 132.945 0 133.169 -0.224 133.169 -0.5 C 133.169 -0.776 132.945 -1 132.669 -1 L 132.669 0 Z M 134.656 -1 C 134.38 -1 134.156 -0.776 134.156 -0.5 C 134.156 -0.224 134.38 0 134.656 0 L 134.656 -1 Z M 136.644 0 C 136.92 0 137.144 -0.224 137.144 -0.5 C 137.144 -0.776 136.92 -1 136.644 -1 L 136.644 0 Z M 138.631 -1 C 138.355 -1 138.131 -0.776 138.131 -0.5 C 138.131 -0.224 138.355 0 138.631 0 L 138.631 -1 Z M 140.619 0 C 140.895 0 141.119 -0.224 141.119 -0.5 C 141.119 -0.776 140.895 -1 140.619 -1 L 140.619 0 Z M 142.606 -1 C 142.33 -1 142.106 -0.776 142.106 -0.5 C 142.106 -0.224 142.33 0 142.606 0 L 142.606 -1 Z M 144.594 0 C 144.87 0 145.094 -0.224 145.094 -0.5 C 145.094 -0.776 144.87 -1 144.594 -1 L 144.594 0 Z M 146.581 -1 C 146.305 -1 146.081 -0.776 146.081 -0.5 C 146.081 -0.224 146.305 0 146.581 0 L 146.581 -1 Z M 148.569 0 C 148.845 0 149.069 -0.224 149.069 -0.5 C 149.069 -0.776 148.845 -1 148.569 -1 L 148.569 0 Z M 150.556 -1 C 150.28 -1 150.056 -0.776 150.056 -0.5 C 150.056 -0.224 150.28 0 150.556 0 L 150.556 -1 Z M 152.544 0 C 152.82 0 153.044 -0.224 153.044 -0.5 C 153.044 -0.776 152.82 -1 152.544 -1 L 152.544 0 Z M 154.531 -1 C 154.255 -1 154.031 -0.776 154.031 -0.5 C 154.031 -0.224 154.255 0 154.531 0 L 154.531 -1 Z M 156.519 0 C 156.795 0 157.019 -0.224 157.019 -0.5 C 157.019 -0.776 156.795 -1 156.519 -1 L 156.519 0 Z M 158.506 -1 C 158.23 -1 158.006 -0.776 158.006 -0.5 C 158.006 -0.224 158.23 0 158.506 0 L 158.506 -1 Z M 0.5 0 L 1.494 0 L 1.494 -1 L 0.5 -1 L 0.5 0 Z M 3.481 0 L 5.469 0 L 5.469 -1 L 3.481 -1 L 3.481 0 Z M 7.456 0 L 9.444 0 L 9.444 -1 L 7.456 -1 L 7.456 0 Z M 11.431 0 L 13.419 0 L 13.419 -1 L 11.431 -1 L 11.431 0 Z M 15.406 0 L 17.394 0 L 17.394 -1 L 15.406 -1 L 15.406 0 Z M 19.381 0 L 21.369 0 L 21.369 -1 L 19.381 -1 L 19.381 0 Z M 23.356 0 L 25.344 0 L 25.344 -1 L 23.356 -1 L 23.356 0 Z M 27.331 0 L 29.319 0 L 29.319 -1 L 27.331 -1 L 27.331 0 Z M 31.306 0 L 33.294 0 L 33.294 -1 L 31.306 -1 L 31.306 0 Z M 35.281 0 L 37.269 0 L 37.269 -1 L 35.281 -1 L 35.281 0 Z M 39.256 0 L 41.244 0 L 41.244 -1 L 39.256 -1 L 39.256 0 Z M 43.231 0 L 45.219 0 L 45.219 -1 L 43.231 -1 L 43.231 0 Z M 47.206 0 L 49.194 0 L 49.194 -1 L 47.206 -1 L 47.206 0 Z M 51.181 0 L 53.169 0 L 53.169 -1 L 51.181 -1 L 51.181 0 Z M 55.156 0 L 57.144 0 L 57.144 -1 L 55.156 -1 L 55.156 0 Z M 59.131 0 L 61.119 0 L 61.119 -1 L 59.131 -1 L 59.131 0 Z M 63.106 0 L 65.094 0 L 65.094 -1 L 63.106 -1 L 63.106 0 Z M 67.081 0 L 69.069 0 L 69.069 -1 L 67.081 -1 L 67.081 0 Z M 71.056 0 L 73.044 0 L 73.044 -1 L 71.056 -1 L 71.056 0 Z M 75.031 0 L 77.019 0 L 77.019 -1 L 75.031 -1 L 75.031 0 Z M 79.006 0 L 80.994 0 L 80.994 -1 L 79.006 -1 L 79.006 0 Z M 82.981 0 L 84.969 0 L 84.969 -1 L 82.981 -1 L 82.981 0 Z M 86.956 0 L 88.944 0 L 88.944 -1 L 86.956 -1 L 86.956 0 Z M 90.931 0 L 92.919 0 L 92.919 -1 L 90.931 -1 L 90.931 0 Z M 94.906 0 L 96.894 0 L 96.894 -1 L 94.906 -1 L 94.906 0 Z M 98.881 0 L 100.869 0 L 100.869 -1 L 98.881 -1 L 98.881 0 Z M 102.856 0 L 104.844 0 L 104.844 -1 L 102.856 -1 L 102.856 0 Z M 106.831 0 L 108.819 0 L 108.819 -1 L 106.831 -1 L 106.831 0 Z M 110.806 0 L 112.794 0 L 112.794 -1 L 110.806 -1 L 110.806 0 Z M 114.781 0 L 116.769 0 L 116.769 -1 L 114.781 -1 L 114.781 0 Z M 118.756 0 L 120.744 0 L 120.744 -1 L 118.756 -1 L 118.756 0 Z M 122.731 0 L 124.719 0 L 124.719 -1 L 122.731 -1 L 122.731 0 Z M 126.706 0 L 128.694 0 L 128.694 -1 L 126.706 -1 L 126.706 0 Z M 130.681 0 L 132.669 0 L 132.669 -1 L 130.681 -1 L 130.681 0 Z M 134.656 0 L 136.644 0 L 136.644 -1 L 134.656 -1 L 134.656 0 Z M 138.631 0 L 140.619 0 L 140.619 -1 L 138.631 -1 L 138.631 0 Z M 142.606 0 L 144.594 0 L 144.594 -1 L 142.606 -1 L 142.606 0 Z M 146.581 0 L 148.569 0 L 148.569 -1 L 146.581 -1 L 146.581 0 Z M 150.556 0 L 152.544 0 L 152.544 -1 L 150.556 -1 L 150.556 0 Z M 154.531 0 L 156.519 0 L 156.519 -1 L 154.531 -1 L 154.531 0 Z M 158.506 0 L 159.5 0 L 159.5 -1 L 158.506 -1 L 158.506 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 160,
    height: 1,
    viewBox: "0 -0.500 160 1",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "matrix(0,1,-1,0,35.445,0)",
      transformOrigin: "0 0",
      width: 160,
      height: 1,
      opacity: 0.32
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.5 -1 C 0.224 -1 0 -0.776 0 -0.5 C 0 -0.224 0.224 0 0.5 0 L 0.5 -1 Z M 159.5 0 C 159.776 0 160 -0.224 160 -0.5 C 160 -0.776 159.776 -1 159.5 -1 L 159.5 0 Z M 1.494 0 C 1.77 0 1.994 -0.224 1.994 -0.5 C 1.994 -0.776 1.77 -1 1.494 -1 L 1.494 0 Z M 3.481 -1 C 3.205 -1 2.981 -0.776 2.981 -0.5 C 2.981 -0.224 3.205 0 3.481 0 L 3.481 -1 Z M 5.469 0 C 5.745 0 5.969 -0.224 5.969 -0.5 C 5.969 -0.776 5.745 -1 5.469 -1 L 5.469 0 Z M 7.456 -1 C 7.18 -1 6.956 -0.776 6.956 -0.5 C 6.956 -0.224 7.18 0 7.456 0 L 7.456 -1 Z M 9.444 0 C 9.72 0 9.944 -0.224 9.944 -0.5 C 9.944 -0.776 9.72 -1 9.444 -1 L 9.444 0 Z M 11.431 -1 C 11.155 -1 10.931 -0.776 10.931 -0.5 C 10.931 -0.224 11.155 0 11.431 0 L 11.431 -1 Z M 13.419 0 C 13.695 0 13.919 -0.224 13.919 -0.5 C 13.919 -0.776 13.695 -1 13.419 -1 L 13.419 0 Z M 15.406 -1 C 15.13 -1 14.906 -0.776 14.906 -0.5 C 14.906 -0.224 15.13 0 15.406 0 L 15.406 -1 Z M 17.394 0 C 17.67 0 17.894 -0.224 17.894 -0.5 C 17.894 -0.776 17.67 -1 17.394 -1 L 17.394 0 Z M 19.381 -1 C 19.105 -1 18.881 -0.776 18.881 -0.5 C 18.881 -0.224 19.105 0 19.381 0 L 19.381 -1 Z M 21.369 0 C 21.645 0 21.869 -0.224 21.869 -0.5 C 21.869 -0.776 21.645 -1 21.369 -1 L 21.369 0 Z M 23.356 -1 C 23.08 -1 22.856 -0.776 22.856 -0.5 C 22.856 -0.224 23.08 0 23.356 0 L 23.356 -1 Z M 25.344 0 C 25.62 0 25.844 -0.224 25.844 -0.5 C 25.844 -0.776 25.62 -1 25.344 -1 L 25.344 0 Z M 27.331 -1 C 27.055 -1 26.831 -0.776 26.831 -0.5 C 26.831 -0.224 27.055 0 27.331 0 L 27.331 -1 Z M 29.319 0 C 29.595 0 29.819 -0.224 29.819 -0.5 C 29.819 -0.776 29.595 -1 29.319 -1 L 29.319 0 Z M 31.306 -1 C 31.03 -1 30.806 -0.776 30.806 -0.5 C 30.806 -0.224 31.03 0 31.306 0 L 31.306 -1 Z M 33.294 0 C 33.57 0 33.794 -0.224 33.794 -0.5 C 33.794 -0.776 33.57 -1 33.294 -1 L 33.294 0 Z M 35.281 -1 C 35.005 -1 34.781 -0.776 34.781 -0.5 C 34.781 -0.224 35.005 0 35.281 0 L 35.281 -1 Z M 37.269 0 C 37.545 0 37.769 -0.224 37.769 -0.5 C 37.769 -0.776 37.545 -1 37.269 -1 L 37.269 0 Z M 39.256 -1 C 38.98 -1 38.756 -0.776 38.756 -0.5 C 38.756 -0.224 38.98 0 39.256 0 L 39.256 -1 Z M 41.244 0 C 41.52 0 41.744 -0.224 41.744 -0.5 C 41.744 -0.776 41.52 -1 41.244 -1 L 41.244 0 Z M 43.231 -1 C 42.955 -1 42.731 -0.776 42.731 -0.5 C 42.731 -0.224 42.955 0 43.231 0 L 43.231 -1 Z M 45.219 0 C 45.495 0 45.719 -0.224 45.719 -0.5 C 45.719 -0.776 45.495 -1 45.219 -1 L 45.219 0 Z M 47.206 -1 C 46.93 -1 46.706 -0.776 46.706 -0.5 C 46.706 -0.224 46.93 0 47.206 0 L 47.206 -1 Z M 49.194 0 C 49.47 0 49.694 -0.224 49.694 -0.5 C 49.694 -0.776 49.47 -1 49.194 -1 L 49.194 0 Z M 51.181 -1 C 50.905 -1 50.681 -0.776 50.681 -0.5 C 50.681 -0.224 50.905 0 51.181 0 L 51.181 -1 Z M 53.169 0 C 53.445 0 53.669 -0.224 53.669 -0.5 C 53.669 -0.776 53.445 -1 53.169 -1 L 53.169 0 Z M 55.156 -1 C 54.88 -1 54.656 -0.776 54.656 -0.5 C 54.656 -0.224 54.88 0 55.156 0 L 55.156 -1 Z M 57.144 0 C 57.42 0 57.644 -0.224 57.644 -0.5 C 57.644 -0.776 57.42 -1 57.144 -1 L 57.144 0 Z M 59.131 -1 C 58.855 -1 58.631 -0.776 58.631 -0.5 C 58.631 -0.224 58.855 0 59.131 0 L 59.131 -1 Z M 61.119 0 C 61.395 0 61.619 -0.224 61.619 -0.5 C 61.619 -0.776 61.395 -1 61.119 -1 L 61.119 0 Z M 63.106 -1 C 62.83 -1 62.606 -0.776 62.606 -0.5 C 62.606 -0.224 62.83 0 63.106 0 L 63.106 -1 Z M 65.094 0 C 65.37 0 65.594 -0.224 65.594 -0.5 C 65.594 -0.776 65.37 -1 65.094 -1 L 65.094 0 Z M 67.081 -1 C 66.805 -1 66.581 -0.776 66.581 -0.5 C 66.581 -0.224 66.805 0 67.081 0 L 67.081 -1 Z M 69.069 0 C 69.345 0 69.569 -0.224 69.569 -0.5 C 69.569 -0.776 69.345 -1 69.069 -1 L 69.069 0 Z M 71.056 -1 C 70.78 -1 70.556 -0.776 70.556 -0.5 C 70.556 -0.224 70.78 0 71.056 0 L 71.056 -1 Z M 73.044 0 C 73.32 0 73.544 -0.224 73.544 -0.5 C 73.544 -0.776 73.32 -1 73.044 -1 L 73.044 0 Z M 75.031 -1 C 74.755 -1 74.531 -0.776 74.531 -0.5 C 74.531 -0.224 74.755 0 75.031 0 L 75.031 -1 Z M 77.019 0 C 77.295 0 77.519 -0.224 77.519 -0.5 C 77.519 -0.776 77.295 -1 77.019 -1 L 77.019 0 Z M 79.006 -1 C 78.73 -1 78.506 -0.776 78.506 -0.5 C 78.506 -0.224 78.73 0 79.006 0 L 79.006 -1 Z M 80.994 0 C 81.27 0 81.494 -0.224 81.494 -0.5 C 81.494 -0.776 81.27 -1 80.994 -1 L 80.994 0 Z M 82.981 -1 C 82.705 -1 82.481 -0.776 82.481 -0.5 C 82.481 -0.224 82.705 0 82.981 0 L 82.981 -1 Z M 84.969 0 C 85.245 0 85.469 -0.224 85.469 -0.5 C 85.469 -0.776 85.245 -1 84.969 -1 L 84.969 0 Z M 86.956 -1 C 86.68 -1 86.456 -0.776 86.456 -0.5 C 86.456 -0.224 86.68 0 86.956 0 L 86.956 -1 Z M 88.944 0 C 89.22 0 89.444 -0.224 89.444 -0.5 C 89.444 -0.776 89.22 -1 88.944 -1 L 88.944 0 Z M 90.931 -1 C 90.655 -1 90.431 -0.776 90.431 -0.5 C 90.431 -0.224 90.655 0 90.931 0 L 90.931 -1 Z M 92.919 0 C 93.195 0 93.419 -0.224 93.419 -0.5 C 93.419 -0.776 93.195 -1 92.919 -1 L 92.919 0 Z M 94.906 -1 C 94.63 -1 94.406 -0.776 94.406 -0.5 C 94.406 -0.224 94.63 0 94.906 0 L 94.906 -1 Z M 96.894 0 C 97.17 0 97.394 -0.224 97.394 -0.5 C 97.394 -0.776 97.17 -1 96.894 -1 L 96.894 0 Z M 98.881 -1 C 98.605 -1 98.381 -0.776 98.381 -0.5 C 98.381 -0.224 98.605 0 98.881 0 L 98.881 -1 Z M 100.869 0 C 101.145 0 101.369 -0.224 101.369 -0.5 C 101.369 -0.776 101.145 -1 100.869 -1 L 100.869 0 Z M 102.856 -1 C 102.58 -1 102.356 -0.776 102.356 -0.5 C 102.356 -0.224 102.58 0 102.856 0 L 102.856 -1 Z M 104.844 0 C 105.12 0 105.344 -0.224 105.344 -0.5 C 105.344 -0.776 105.12 -1 104.844 -1 L 104.844 0 Z M 106.831 -1 C 106.555 -1 106.331 -0.776 106.331 -0.5 C 106.331 -0.224 106.555 0 106.831 0 L 106.831 -1 Z M 108.819 0 C 109.095 0 109.319 -0.224 109.319 -0.5 C 109.319 -0.776 109.095 -1 108.819 -1 L 108.819 0 Z M 110.806 -1 C 110.53 -1 110.306 -0.776 110.306 -0.5 C 110.306 -0.224 110.53 0 110.806 0 L 110.806 -1 Z M 112.794 0 C 113.07 0 113.294 -0.224 113.294 -0.5 C 113.294 -0.776 113.07 -1 112.794 -1 L 112.794 0 Z M 114.781 -1 C 114.505 -1 114.281 -0.776 114.281 -0.5 C 114.281 -0.224 114.505 0 114.781 0 L 114.781 -1 Z M 116.769 0 C 117.045 0 117.269 -0.224 117.269 -0.5 C 117.269 -0.776 117.045 -1 116.769 -1 L 116.769 0 Z M 118.756 -1 C 118.48 -1 118.256 -0.776 118.256 -0.5 C 118.256 -0.224 118.48 0 118.756 0 L 118.756 -1 Z M 120.744 0 C 121.02 0 121.244 -0.224 121.244 -0.5 C 121.244 -0.776 121.02 -1 120.744 -1 L 120.744 0 Z M 122.731 -1 C 122.455 -1 122.231 -0.776 122.231 -0.5 C 122.231 -0.224 122.455 0 122.731 0 L 122.731 -1 Z M 124.719 0 C 124.995 0 125.219 -0.224 125.219 -0.5 C 125.219 -0.776 124.995 -1 124.719 -1 L 124.719 0 Z M 126.706 -1 C 126.43 -1 126.206 -0.776 126.206 -0.5 C 126.206 -0.224 126.43 0 126.706 0 L 126.706 -1 Z M 128.694 0 C 128.97 0 129.194 -0.224 129.194 -0.5 C 129.194 -0.776 128.97 -1 128.694 -1 L 128.694 0 Z M 130.681 -1 C 130.405 -1 130.181 -0.776 130.181 -0.5 C 130.181 -0.224 130.405 0 130.681 0 L 130.681 -1 Z M 132.669 0 C 132.945 0 133.169 -0.224 133.169 -0.5 C 133.169 -0.776 132.945 -1 132.669 -1 L 132.669 0 Z M 134.656 -1 C 134.38 -1 134.156 -0.776 134.156 -0.5 C 134.156 -0.224 134.38 0 134.656 0 L 134.656 -1 Z M 136.644 0 C 136.92 0 137.144 -0.224 137.144 -0.5 C 137.144 -0.776 136.92 -1 136.644 -1 L 136.644 0 Z M 138.631 -1 C 138.355 -1 138.131 -0.776 138.131 -0.5 C 138.131 -0.224 138.355 0 138.631 0 L 138.631 -1 Z M 140.619 0 C 140.895 0 141.119 -0.224 141.119 -0.5 C 141.119 -0.776 140.895 -1 140.619 -1 L 140.619 0 Z M 142.606 -1 C 142.33 -1 142.106 -0.776 142.106 -0.5 C 142.106 -0.224 142.33 0 142.606 0 L 142.606 -1 Z M 144.594 0 C 144.87 0 145.094 -0.224 145.094 -0.5 C 145.094 -0.776 144.87 -1 144.594 -1 L 144.594 0 Z M 146.581 -1 C 146.305 -1 146.081 -0.776 146.081 -0.5 C 146.081 -0.224 146.305 0 146.581 0 L 146.581 -1 Z M 148.569 0 C 148.845 0 149.069 -0.224 149.069 -0.5 C 149.069 -0.776 148.845 -1 148.569 -1 L 148.569 0 Z M 150.556 -1 C 150.28 -1 150.056 -0.776 150.056 -0.5 C 150.056 -0.224 150.28 0 150.556 0 L 150.556 -1 Z M 152.544 0 C 152.82 0 153.044 -0.224 153.044 -0.5 C 153.044 -0.776 152.82 -1 152.544 -1 L 152.544 0 Z M 154.531 -1 C 154.255 -1 154.031 -0.776 154.031 -0.5 C 154.031 -0.224 154.255 0 154.531 0 L 154.531 -1 Z M 156.519 0 C 156.795 0 157.019 -0.224 157.019 -0.5 C 157.019 -0.776 156.795 -1 156.519 -1 L 156.519 0 Z M 158.506 -1 C 158.23 -1 158.006 -0.776 158.006 -0.5 C 158.006 -0.224 158.23 0 158.506 0 L 158.506 -1 Z M 0.5 0 L 1.494 0 L 1.494 -1 L 0.5 -1 L 0.5 0 Z M 3.481 0 L 5.469 0 L 5.469 -1 L 3.481 -1 L 3.481 0 Z M 7.456 0 L 9.444 0 L 9.444 -1 L 7.456 -1 L 7.456 0 Z M 11.431 0 L 13.419 0 L 13.419 -1 L 11.431 -1 L 11.431 0 Z M 15.406 0 L 17.394 0 L 17.394 -1 L 15.406 -1 L 15.406 0 Z M 19.381 0 L 21.369 0 L 21.369 -1 L 19.381 -1 L 19.381 0 Z M 23.356 0 L 25.344 0 L 25.344 -1 L 23.356 -1 L 23.356 0 Z M 27.331 0 L 29.319 0 L 29.319 -1 L 27.331 -1 L 27.331 0 Z M 31.306 0 L 33.294 0 L 33.294 -1 L 31.306 -1 L 31.306 0 Z M 35.281 0 L 37.269 0 L 37.269 -1 L 35.281 -1 L 35.281 0 Z M 39.256 0 L 41.244 0 L 41.244 -1 L 39.256 -1 L 39.256 0 Z M 43.231 0 L 45.219 0 L 45.219 -1 L 43.231 -1 L 43.231 0 Z M 47.206 0 L 49.194 0 L 49.194 -1 L 47.206 -1 L 47.206 0 Z M 51.181 0 L 53.169 0 L 53.169 -1 L 51.181 -1 L 51.181 0 Z M 55.156 0 L 57.144 0 L 57.144 -1 L 55.156 -1 L 55.156 0 Z M 59.131 0 L 61.119 0 L 61.119 -1 L 59.131 -1 L 59.131 0 Z M 63.106 0 L 65.094 0 L 65.094 -1 L 63.106 -1 L 63.106 0 Z M 67.081 0 L 69.069 0 L 69.069 -1 L 67.081 -1 L 67.081 0 Z M 71.056 0 L 73.044 0 L 73.044 -1 L 71.056 -1 L 71.056 0 Z M 75.031 0 L 77.019 0 L 77.019 -1 L 75.031 -1 L 75.031 0 Z M 79.006 0 L 80.994 0 L 80.994 -1 L 79.006 -1 L 79.006 0 Z M 82.981 0 L 84.969 0 L 84.969 -1 L 82.981 -1 L 82.981 0 Z M 86.956 0 L 88.944 0 L 88.944 -1 L 86.956 -1 L 86.956 0 Z M 90.931 0 L 92.919 0 L 92.919 -1 L 90.931 -1 L 90.931 0 Z M 94.906 0 L 96.894 0 L 96.894 -1 L 94.906 -1 L 94.906 0 Z M 98.881 0 L 100.869 0 L 100.869 -1 L 98.881 -1 L 98.881 0 Z M 102.856 0 L 104.844 0 L 104.844 -1 L 102.856 -1 L 102.856 0 Z M 106.831 0 L 108.819 0 L 108.819 -1 L 106.831 -1 L 106.831 0 Z M 110.806 0 L 112.794 0 L 112.794 -1 L 110.806 -1 L 110.806 0 Z M 114.781 0 L 116.769 0 L 116.769 -1 L 114.781 -1 L 114.781 0 Z M 118.756 0 L 120.744 0 L 120.744 -1 L 118.756 -1 L 118.756 0 Z M 122.731 0 L 124.719 0 L 124.719 -1 L 122.731 -1 L 122.731 0 Z M 126.706 0 L 128.694 0 L 128.694 -1 L 126.706 -1 L 126.706 0 Z M 130.681 0 L 132.669 0 L 132.669 -1 L 130.681 -1 L 130.681 0 Z M 134.656 0 L 136.644 0 L 136.644 -1 L 134.656 -1 L 134.656 0 Z M 138.631 0 L 140.619 0 L 140.619 -1 L 138.631 -1 L 138.631 0 Z M 142.606 0 L 144.594 0 L 144.594 -1 L 142.606 -1 L 142.606 0 Z M 146.581 0 L 148.569 0 L 148.569 -1 L 146.581 -1 L 146.581 0 Z M 150.556 0 L 152.544 0 L 152.544 -1 L 150.556 -1 L 150.556 0 Z M 154.531 0 L 156.519 0 L 156.519 -1 L 154.531 -1 L 154.531 0 Z M 158.506 0 L 159.5 0 L 159.5 -1 L 158.506 -1 L 158.506 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 160,
    height: 1,
    viewBox: "0 -0.500 160 1",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "matrix(0,1,-1,0,89.516,0)",
      transformOrigin: "0 0",
      width: 160,
      height: 1,
      opacity: 0.32
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.5 -1 C 0.224 -1 0 -0.776 0 -0.5 C 0 -0.224 0.224 0 0.5 0 L 0.5 -1 Z M 159.5 0 C 159.776 0 160 -0.224 160 -0.5 C 160 -0.776 159.776 -1 159.5 -1 L 159.5 0 Z M 1.494 0 C 1.77 0 1.994 -0.224 1.994 -0.5 C 1.994 -0.776 1.77 -1 1.494 -1 L 1.494 0 Z M 3.481 -1 C 3.205 -1 2.981 -0.776 2.981 -0.5 C 2.981 -0.224 3.205 0 3.481 0 L 3.481 -1 Z M 5.469 0 C 5.745 0 5.969 -0.224 5.969 -0.5 C 5.969 -0.776 5.745 -1 5.469 -1 L 5.469 0 Z M 7.456 -1 C 7.18 -1 6.956 -0.776 6.956 -0.5 C 6.956 -0.224 7.18 0 7.456 0 L 7.456 -1 Z M 9.444 0 C 9.72 0 9.944 -0.224 9.944 -0.5 C 9.944 -0.776 9.72 -1 9.444 -1 L 9.444 0 Z M 11.431 -1 C 11.155 -1 10.931 -0.776 10.931 -0.5 C 10.931 -0.224 11.155 0 11.431 0 L 11.431 -1 Z M 13.419 0 C 13.695 0 13.919 -0.224 13.919 -0.5 C 13.919 -0.776 13.695 -1 13.419 -1 L 13.419 0 Z M 15.406 -1 C 15.13 -1 14.906 -0.776 14.906 -0.5 C 14.906 -0.224 15.13 0 15.406 0 L 15.406 -1 Z M 17.394 0 C 17.67 0 17.894 -0.224 17.894 -0.5 C 17.894 -0.776 17.67 -1 17.394 -1 L 17.394 0 Z M 19.381 -1 C 19.105 -1 18.881 -0.776 18.881 -0.5 C 18.881 -0.224 19.105 0 19.381 0 L 19.381 -1 Z M 21.369 0 C 21.645 0 21.869 -0.224 21.869 -0.5 C 21.869 -0.776 21.645 -1 21.369 -1 L 21.369 0 Z M 23.356 -1 C 23.08 -1 22.856 -0.776 22.856 -0.5 C 22.856 -0.224 23.08 0 23.356 0 L 23.356 -1 Z M 25.344 0 C 25.62 0 25.844 -0.224 25.844 -0.5 C 25.844 -0.776 25.62 -1 25.344 -1 L 25.344 0 Z M 27.331 -1 C 27.055 -1 26.831 -0.776 26.831 -0.5 C 26.831 -0.224 27.055 0 27.331 0 L 27.331 -1 Z M 29.319 0 C 29.595 0 29.819 -0.224 29.819 -0.5 C 29.819 -0.776 29.595 -1 29.319 -1 L 29.319 0 Z M 31.306 -1 C 31.03 -1 30.806 -0.776 30.806 -0.5 C 30.806 -0.224 31.03 0 31.306 0 L 31.306 -1 Z M 33.294 0 C 33.57 0 33.794 -0.224 33.794 -0.5 C 33.794 -0.776 33.57 -1 33.294 -1 L 33.294 0 Z M 35.281 -1 C 35.005 -1 34.781 -0.776 34.781 -0.5 C 34.781 -0.224 35.005 0 35.281 0 L 35.281 -1 Z M 37.269 0 C 37.545 0 37.769 -0.224 37.769 -0.5 C 37.769 -0.776 37.545 -1 37.269 -1 L 37.269 0 Z M 39.256 -1 C 38.98 -1 38.756 -0.776 38.756 -0.5 C 38.756 -0.224 38.98 0 39.256 0 L 39.256 -1 Z M 41.244 0 C 41.52 0 41.744 -0.224 41.744 -0.5 C 41.744 -0.776 41.52 -1 41.244 -1 L 41.244 0 Z M 43.231 -1 C 42.955 -1 42.731 -0.776 42.731 -0.5 C 42.731 -0.224 42.955 0 43.231 0 L 43.231 -1 Z M 45.219 0 C 45.495 0 45.719 -0.224 45.719 -0.5 C 45.719 -0.776 45.495 -1 45.219 -1 L 45.219 0 Z M 47.206 -1 C 46.93 -1 46.706 -0.776 46.706 -0.5 C 46.706 -0.224 46.93 0 47.206 0 L 47.206 -1 Z M 49.194 0 C 49.47 0 49.694 -0.224 49.694 -0.5 C 49.694 -0.776 49.47 -1 49.194 -1 L 49.194 0 Z M 51.181 -1 C 50.905 -1 50.681 -0.776 50.681 -0.5 C 50.681 -0.224 50.905 0 51.181 0 L 51.181 -1 Z M 53.169 0 C 53.445 0 53.669 -0.224 53.669 -0.5 C 53.669 -0.776 53.445 -1 53.169 -1 L 53.169 0 Z M 55.156 -1 C 54.88 -1 54.656 -0.776 54.656 -0.5 C 54.656 -0.224 54.88 0 55.156 0 L 55.156 -1 Z M 57.144 0 C 57.42 0 57.644 -0.224 57.644 -0.5 C 57.644 -0.776 57.42 -1 57.144 -1 L 57.144 0 Z M 59.131 -1 C 58.855 -1 58.631 -0.776 58.631 -0.5 C 58.631 -0.224 58.855 0 59.131 0 L 59.131 -1 Z M 61.119 0 C 61.395 0 61.619 -0.224 61.619 -0.5 C 61.619 -0.776 61.395 -1 61.119 -1 L 61.119 0 Z M 63.106 -1 C 62.83 -1 62.606 -0.776 62.606 -0.5 C 62.606 -0.224 62.83 0 63.106 0 L 63.106 -1 Z M 65.094 0 C 65.37 0 65.594 -0.224 65.594 -0.5 C 65.594 -0.776 65.37 -1 65.094 -1 L 65.094 0 Z M 67.081 -1 C 66.805 -1 66.581 -0.776 66.581 -0.5 C 66.581 -0.224 66.805 0 67.081 0 L 67.081 -1 Z M 69.069 0 C 69.345 0 69.569 -0.224 69.569 -0.5 C 69.569 -0.776 69.345 -1 69.069 -1 L 69.069 0 Z M 71.056 -1 C 70.78 -1 70.556 -0.776 70.556 -0.5 C 70.556 -0.224 70.78 0 71.056 0 L 71.056 -1 Z M 73.044 0 C 73.32 0 73.544 -0.224 73.544 -0.5 C 73.544 -0.776 73.32 -1 73.044 -1 L 73.044 0 Z M 75.031 -1 C 74.755 -1 74.531 -0.776 74.531 -0.5 C 74.531 -0.224 74.755 0 75.031 0 L 75.031 -1 Z M 77.019 0 C 77.295 0 77.519 -0.224 77.519 -0.5 C 77.519 -0.776 77.295 -1 77.019 -1 L 77.019 0 Z M 79.006 -1 C 78.73 -1 78.506 -0.776 78.506 -0.5 C 78.506 -0.224 78.73 0 79.006 0 L 79.006 -1 Z M 80.994 0 C 81.27 0 81.494 -0.224 81.494 -0.5 C 81.494 -0.776 81.27 -1 80.994 -1 L 80.994 0 Z M 82.981 -1 C 82.705 -1 82.481 -0.776 82.481 -0.5 C 82.481 -0.224 82.705 0 82.981 0 L 82.981 -1 Z M 84.969 0 C 85.245 0 85.469 -0.224 85.469 -0.5 C 85.469 -0.776 85.245 -1 84.969 -1 L 84.969 0 Z M 86.956 -1 C 86.68 -1 86.456 -0.776 86.456 -0.5 C 86.456 -0.224 86.68 0 86.956 0 L 86.956 -1 Z M 88.944 0 C 89.22 0 89.444 -0.224 89.444 -0.5 C 89.444 -0.776 89.22 -1 88.944 -1 L 88.944 0 Z M 90.931 -1 C 90.655 -1 90.431 -0.776 90.431 -0.5 C 90.431 -0.224 90.655 0 90.931 0 L 90.931 -1 Z M 92.919 0 C 93.195 0 93.419 -0.224 93.419 -0.5 C 93.419 -0.776 93.195 -1 92.919 -1 L 92.919 0 Z M 94.906 -1 C 94.63 -1 94.406 -0.776 94.406 -0.5 C 94.406 -0.224 94.63 0 94.906 0 L 94.906 -1 Z M 96.894 0 C 97.17 0 97.394 -0.224 97.394 -0.5 C 97.394 -0.776 97.17 -1 96.894 -1 L 96.894 0 Z M 98.881 -1 C 98.605 -1 98.381 -0.776 98.381 -0.5 C 98.381 -0.224 98.605 0 98.881 0 L 98.881 -1 Z M 100.869 0 C 101.145 0 101.369 -0.224 101.369 -0.5 C 101.369 -0.776 101.145 -1 100.869 -1 L 100.869 0 Z M 102.856 -1 C 102.58 -1 102.356 -0.776 102.356 -0.5 C 102.356 -0.224 102.58 0 102.856 0 L 102.856 -1 Z M 104.844 0 C 105.12 0 105.344 -0.224 105.344 -0.5 C 105.344 -0.776 105.12 -1 104.844 -1 L 104.844 0 Z M 106.831 -1 C 106.555 -1 106.331 -0.776 106.331 -0.5 C 106.331 -0.224 106.555 0 106.831 0 L 106.831 -1 Z M 108.819 0 C 109.095 0 109.319 -0.224 109.319 -0.5 C 109.319 -0.776 109.095 -1 108.819 -1 L 108.819 0 Z M 110.806 -1 C 110.53 -1 110.306 -0.776 110.306 -0.5 C 110.306 -0.224 110.53 0 110.806 0 L 110.806 -1 Z M 112.794 0 C 113.07 0 113.294 -0.224 113.294 -0.5 C 113.294 -0.776 113.07 -1 112.794 -1 L 112.794 0 Z M 114.781 -1 C 114.505 -1 114.281 -0.776 114.281 -0.5 C 114.281 -0.224 114.505 0 114.781 0 L 114.781 -1 Z M 116.769 0 C 117.045 0 117.269 -0.224 117.269 -0.5 C 117.269 -0.776 117.045 -1 116.769 -1 L 116.769 0 Z M 118.756 -1 C 118.48 -1 118.256 -0.776 118.256 -0.5 C 118.256 -0.224 118.48 0 118.756 0 L 118.756 -1 Z M 120.744 0 C 121.02 0 121.244 -0.224 121.244 -0.5 C 121.244 -0.776 121.02 -1 120.744 -1 L 120.744 0 Z M 122.731 -1 C 122.455 -1 122.231 -0.776 122.231 -0.5 C 122.231 -0.224 122.455 0 122.731 0 L 122.731 -1 Z M 124.719 0 C 124.995 0 125.219 -0.224 125.219 -0.5 C 125.219 -0.776 124.995 -1 124.719 -1 L 124.719 0 Z M 126.706 -1 C 126.43 -1 126.206 -0.776 126.206 -0.5 C 126.206 -0.224 126.43 0 126.706 0 L 126.706 -1 Z M 128.694 0 C 128.97 0 129.194 -0.224 129.194 -0.5 C 129.194 -0.776 128.97 -1 128.694 -1 L 128.694 0 Z M 130.681 -1 C 130.405 -1 130.181 -0.776 130.181 -0.5 C 130.181 -0.224 130.405 0 130.681 0 L 130.681 -1 Z M 132.669 0 C 132.945 0 133.169 -0.224 133.169 -0.5 C 133.169 -0.776 132.945 -1 132.669 -1 L 132.669 0 Z M 134.656 -1 C 134.38 -1 134.156 -0.776 134.156 -0.5 C 134.156 -0.224 134.38 0 134.656 0 L 134.656 -1 Z M 136.644 0 C 136.92 0 137.144 -0.224 137.144 -0.5 C 137.144 -0.776 136.92 -1 136.644 -1 L 136.644 0 Z M 138.631 -1 C 138.355 -1 138.131 -0.776 138.131 -0.5 C 138.131 -0.224 138.355 0 138.631 0 L 138.631 -1 Z M 140.619 0 C 140.895 0 141.119 -0.224 141.119 -0.5 C 141.119 -0.776 140.895 -1 140.619 -1 L 140.619 0 Z M 142.606 -1 C 142.33 -1 142.106 -0.776 142.106 -0.5 C 142.106 -0.224 142.33 0 142.606 0 L 142.606 -1 Z M 144.594 0 C 144.87 0 145.094 -0.224 145.094 -0.5 C 145.094 -0.776 144.87 -1 144.594 -1 L 144.594 0 Z M 146.581 -1 C 146.305 -1 146.081 -0.776 146.081 -0.5 C 146.081 -0.224 146.305 0 146.581 0 L 146.581 -1 Z M 148.569 0 C 148.845 0 149.069 -0.224 149.069 -0.5 C 149.069 -0.776 148.845 -1 148.569 -1 L 148.569 0 Z M 150.556 -1 C 150.28 -1 150.056 -0.776 150.056 -0.5 C 150.056 -0.224 150.28 0 150.556 0 L 150.556 -1 Z M 152.544 0 C 152.82 0 153.044 -0.224 153.044 -0.5 C 153.044 -0.776 152.82 -1 152.544 -1 L 152.544 0 Z M 154.531 -1 C 154.255 -1 154.031 -0.776 154.031 -0.5 C 154.031 -0.224 154.255 0 154.531 0 L 154.531 -1 Z M 156.519 0 C 156.795 0 157.019 -0.224 157.019 -0.5 C 157.019 -0.776 156.795 -1 156.519 -1 L 156.519 0 Z M 158.506 -1 C 158.23 -1 158.006 -0.776 158.006 -0.5 C 158.006 -0.224 158.23 0 158.506 0 L 158.506 -1 Z M 0.5 0 L 1.494 0 L 1.494 -1 L 0.5 -1 L 0.5 0 Z M 3.481 0 L 5.469 0 L 5.469 -1 L 3.481 -1 L 3.481 0 Z M 7.456 0 L 9.444 0 L 9.444 -1 L 7.456 -1 L 7.456 0 Z M 11.431 0 L 13.419 0 L 13.419 -1 L 11.431 -1 L 11.431 0 Z M 15.406 0 L 17.394 0 L 17.394 -1 L 15.406 -1 L 15.406 0 Z M 19.381 0 L 21.369 0 L 21.369 -1 L 19.381 -1 L 19.381 0 Z M 23.356 0 L 25.344 0 L 25.344 -1 L 23.356 -1 L 23.356 0 Z M 27.331 0 L 29.319 0 L 29.319 -1 L 27.331 -1 L 27.331 0 Z M 31.306 0 L 33.294 0 L 33.294 -1 L 31.306 -1 L 31.306 0 Z M 35.281 0 L 37.269 0 L 37.269 -1 L 35.281 -1 L 35.281 0 Z M 39.256 0 L 41.244 0 L 41.244 -1 L 39.256 -1 L 39.256 0 Z M 43.231 0 L 45.219 0 L 45.219 -1 L 43.231 -1 L 43.231 0 Z M 47.206 0 L 49.194 0 L 49.194 -1 L 47.206 -1 L 47.206 0 Z M 51.181 0 L 53.169 0 L 53.169 -1 L 51.181 -1 L 51.181 0 Z M 55.156 0 L 57.144 0 L 57.144 -1 L 55.156 -1 L 55.156 0 Z M 59.131 0 L 61.119 0 L 61.119 -1 L 59.131 -1 L 59.131 0 Z M 63.106 0 L 65.094 0 L 65.094 -1 L 63.106 -1 L 63.106 0 Z M 67.081 0 L 69.069 0 L 69.069 -1 L 67.081 -1 L 67.081 0 Z M 71.056 0 L 73.044 0 L 73.044 -1 L 71.056 -1 L 71.056 0 Z M 75.031 0 L 77.019 0 L 77.019 -1 L 75.031 -1 L 75.031 0 Z M 79.006 0 L 80.994 0 L 80.994 -1 L 79.006 -1 L 79.006 0 Z M 82.981 0 L 84.969 0 L 84.969 -1 L 82.981 -1 L 82.981 0 Z M 86.956 0 L 88.944 0 L 88.944 -1 L 86.956 -1 L 86.956 0 Z M 90.931 0 L 92.919 0 L 92.919 -1 L 90.931 -1 L 90.931 0 Z M 94.906 0 L 96.894 0 L 96.894 -1 L 94.906 -1 L 94.906 0 Z M 98.881 0 L 100.869 0 L 100.869 -1 L 98.881 -1 L 98.881 0 Z M 102.856 0 L 104.844 0 L 104.844 -1 L 102.856 -1 L 102.856 0 Z M 106.831 0 L 108.819 0 L 108.819 -1 L 106.831 -1 L 106.831 0 Z M 110.806 0 L 112.794 0 L 112.794 -1 L 110.806 -1 L 110.806 0 Z M 114.781 0 L 116.769 0 L 116.769 -1 L 114.781 -1 L 114.781 0 Z M 118.756 0 L 120.744 0 L 120.744 -1 L 118.756 -1 L 118.756 0 Z M 122.731 0 L 124.719 0 L 124.719 -1 L 122.731 -1 L 122.731 0 Z M 126.706 0 L 128.694 0 L 128.694 -1 L 126.706 -1 L 126.706 0 Z M 130.681 0 L 132.669 0 L 132.669 -1 L 130.681 -1 L 130.681 0 Z M 134.656 0 L 136.644 0 L 136.644 -1 L 134.656 -1 L 134.656 0 Z M 138.631 0 L 140.619 0 L 140.619 -1 L 138.631 -1 L 138.631 0 Z M 142.606 0 L 144.594 0 L 144.594 -1 L 142.606 -1 L 142.606 0 Z M 146.581 0 L 148.569 0 L 148.569 -1 L 146.581 -1 L 146.581 0 Z M 150.556 0 L 152.544 0 L 152.544 -1 L 150.556 -1 L 150.556 0 Z M 154.531 0 L 156.519 0 L 156.519 -1 L 154.531 -1 L 154.531 0 Z M 158.506 0 L 159.5 0 L 159.5 -1 L 158.506 -1 L 158.506 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 160,
    height: 1,
    viewBox: "0 -0.500 160 1",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "matrix(0,1,-1,0,101.531,0)",
      transformOrigin: "0 0",
      width: 160,
      height: 1,
      opacity: 0.32
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.5 -1 C 0.224 -1 0 -0.776 0 -0.5 C 0 -0.224 0.224 0 0.5 0 L 0.5 -1 Z M 159.5 0 C 159.776 0 160 -0.224 160 -0.5 C 160 -0.776 159.776 -1 159.5 -1 L 159.5 0 Z M 1.494 0 C 1.77 0 1.994 -0.224 1.994 -0.5 C 1.994 -0.776 1.77 -1 1.494 -1 L 1.494 0 Z M 3.481 -1 C 3.205 -1 2.981 -0.776 2.981 -0.5 C 2.981 -0.224 3.205 0 3.481 0 L 3.481 -1 Z M 5.469 0 C 5.745 0 5.969 -0.224 5.969 -0.5 C 5.969 -0.776 5.745 -1 5.469 -1 L 5.469 0 Z M 7.456 -1 C 7.18 -1 6.956 -0.776 6.956 -0.5 C 6.956 -0.224 7.18 0 7.456 0 L 7.456 -1 Z M 9.444 0 C 9.72 0 9.944 -0.224 9.944 -0.5 C 9.944 -0.776 9.72 -1 9.444 -1 L 9.444 0 Z M 11.431 -1 C 11.155 -1 10.931 -0.776 10.931 -0.5 C 10.931 -0.224 11.155 0 11.431 0 L 11.431 -1 Z M 13.419 0 C 13.695 0 13.919 -0.224 13.919 -0.5 C 13.919 -0.776 13.695 -1 13.419 -1 L 13.419 0 Z M 15.406 -1 C 15.13 -1 14.906 -0.776 14.906 -0.5 C 14.906 -0.224 15.13 0 15.406 0 L 15.406 -1 Z M 17.394 0 C 17.67 0 17.894 -0.224 17.894 -0.5 C 17.894 -0.776 17.67 -1 17.394 -1 L 17.394 0 Z M 19.381 -1 C 19.105 -1 18.881 -0.776 18.881 -0.5 C 18.881 -0.224 19.105 0 19.381 0 L 19.381 -1 Z M 21.369 0 C 21.645 0 21.869 -0.224 21.869 -0.5 C 21.869 -0.776 21.645 -1 21.369 -1 L 21.369 0 Z M 23.356 -1 C 23.08 -1 22.856 -0.776 22.856 -0.5 C 22.856 -0.224 23.08 0 23.356 0 L 23.356 -1 Z M 25.344 0 C 25.62 0 25.844 -0.224 25.844 -0.5 C 25.844 -0.776 25.62 -1 25.344 -1 L 25.344 0 Z M 27.331 -1 C 27.055 -1 26.831 -0.776 26.831 -0.5 C 26.831 -0.224 27.055 0 27.331 0 L 27.331 -1 Z M 29.319 0 C 29.595 0 29.819 -0.224 29.819 -0.5 C 29.819 -0.776 29.595 -1 29.319 -1 L 29.319 0 Z M 31.306 -1 C 31.03 -1 30.806 -0.776 30.806 -0.5 C 30.806 -0.224 31.03 0 31.306 0 L 31.306 -1 Z M 33.294 0 C 33.57 0 33.794 -0.224 33.794 -0.5 C 33.794 -0.776 33.57 -1 33.294 -1 L 33.294 0 Z M 35.281 -1 C 35.005 -1 34.781 -0.776 34.781 -0.5 C 34.781 -0.224 35.005 0 35.281 0 L 35.281 -1 Z M 37.269 0 C 37.545 0 37.769 -0.224 37.769 -0.5 C 37.769 -0.776 37.545 -1 37.269 -1 L 37.269 0 Z M 39.256 -1 C 38.98 -1 38.756 -0.776 38.756 -0.5 C 38.756 -0.224 38.98 0 39.256 0 L 39.256 -1 Z M 41.244 0 C 41.52 0 41.744 -0.224 41.744 -0.5 C 41.744 -0.776 41.52 -1 41.244 -1 L 41.244 0 Z M 43.231 -1 C 42.955 -1 42.731 -0.776 42.731 -0.5 C 42.731 -0.224 42.955 0 43.231 0 L 43.231 -1 Z M 45.219 0 C 45.495 0 45.719 -0.224 45.719 -0.5 C 45.719 -0.776 45.495 -1 45.219 -1 L 45.219 0 Z M 47.206 -1 C 46.93 -1 46.706 -0.776 46.706 -0.5 C 46.706 -0.224 46.93 0 47.206 0 L 47.206 -1 Z M 49.194 0 C 49.47 0 49.694 -0.224 49.694 -0.5 C 49.694 -0.776 49.47 -1 49.194 -1 L 49.194 0 Z M 51.181 -1 C 50.905 -1 50.681 -0.776 50.681 -0.5 C 50.681 -0.224 50.905 0 51.181 0 L 51.181 -1 Z M 53.169 0 C 53.445 0 53.669 -0.224 53.669 -0.5 C 53.669 -0.776 53.445 -1 53.169 -1 L 53.169 0 Z M 55.156 -1 C 54.88 -1 54.656 -0.776 54.656 -0.5 C 54.656 -0.224 54.88 0 55.156 0 L 55.156 -1 Z M 57.144 0 C 57.42 0 57.644 -0.224 57.644 -0.5 C 57.644 -0.776 57.42 -1 57.144 -1 L 57.144 0 Z M 59.131 -1 C 58.855 -1 58.631 -0.776 58.631 -0.5 C 58.631 -0.224 58.855 0 59.131 0 L 59.131 -1 Z M 61.119 0 C 61.395 0 61.619 -0.224 61.619 -0.5 C 61.619 -0.776 61.395 -1 61.119 -1 L 61.119 0 Z M 63.106 -1 C 62.83 -1 62.606 -0.776 62.606 -0.5 C 62.606 -0.224 62.83 0 63.106 0 L 63.106 -1 Z M 65.094 0 C 65.37 0 65.594 -0.224 65.594 -0.5 C 65.594 -0.776 65.37 -1 65.094 -1 L 65.094 0 Z M 67.081 -1 C 66.805 -1 66.581 -0.776 66.581 -0.5 C 66.581 -0.224 66.805 0 67.081 0 L 67.081 -1 Z M 69.069 0 C 69.345 0 69.569 -0.224 69.569 -0.5 C 69.569 -0.776 69.345 -1 69.069 -1 L 69.069 0 Z M 71.056 -1 C 70.78 -1 70.556 -0.776 70.556 -0.5 C 70.556 -0.224 70.78 0 71.056 0 L 71.056 -1 Z M 73.044 0 C 73.32 0 73.544 -0.224 73.544 -0.5 C 73.544 -0.776 73.32 -1 73.044 -1 L 73.044 0 Z M 75.031 -1 C 74.755 -1 74.531 -0.776 74.531 -0.5 C 74.531 -0.224 74.755 0 75.031 0 L 75.031 -1 Z M 77.019 0 C 77.295 0 77.519 -0.224 77.519 -0.5 C 77.519 -0.776 77.295 -1 77.019 -1 L 77.019 0 Z M 79.006 -1 C 78.73 -1 78.506 -0.776 78.506 -0.5 C 78.506 -0.224 78.73 0 79.006 0 L 79.006 -1 Z M 80.994 0 C 81.27 0 81.494 -0.224 81.494 -0.5 C 81.494 -0.776 81.27 -1 80.994 -1 L 80.994 0 Z M 82.981 -1 C 82.705 -1 82.481 -0.776 82.481 -0.5 C 82.481 -0.224 82.705 0 82.981 0 L 82.981 -1 Z M 84.969 0 C 85.245 0 85.469 -0.224 85.469 -0.5 C 85.469 -0.776 85.245 -1 84.969 -1 L 84.969 0 Z M 86.956 -1 C 86.68 -1 86.456 -0.776 86.456 -0.5 C 86.456 -0.224 86.68 0 86.956 0 L 86.956 -1 Z M 88.944 0 C 89.22 0 89.444 -0.224 89.444 -0.5 C 89.444 -0.776 89.22 -1 88.944 -1 L 88.944 0 Z M 90.931 -1 C 90.655 -1 90.431 -0.776 90.431 -0.5 C 90.431 -0.224 90.655 0 90.931 0 L 90.931 -1 Z M 92.919 0 C 93.195 0 93.419 -0.224 93.419 -0.5 C 93.419 -0.776 93.195 -1 92.919 -1 L 92.919 0 Z M 94.906 -1 C 94.63 -1 94.406 -0.776 94.406 -0.5 C 94.406 -0.224 94.63 0 94.906 0 L 94.906 -1 Z M 96.894 0 C 97.17 0 97.394 -0.224 97.394 -0.5 C 97.394 -0.776 97.17 -1 96.894 -1 L 96.894 0 Z M 98.881 -1 C 98.605 -1 98.381 -0.776 98.381 -0.5 C 98.381 -0.224 98.605 0 98.881 0 L 98.881 -1 Z M 100.869 0 C 101.145 0 101.369 -0.224 101.369 -0.5 C 101.369 -0.776 101.145 -1 100.869 -1 L 100.869 0 Z M 102.856 -1 C 102.58 -1 102.356 -0.776 102.356 -0.5 C 102.356 -0.224 102.58 0 102.856 0 L 102.856 -1 Z M 104.844 0 C 105.12 0 105.344 -0.224 105.344 -0.5 C 105.344 -0.776 105.12 -1 104.844 -1 L 104.844 0 Z M 106.831 -1 C 106.555 -1 106.331 -0.776 106.331 -0.5 C 106.331 -0.224 106.555 0 106.831 0 L 106.831 -1 Z M 108.819 0 C 109.095 0 109.319 -0.224 109.319 -0.5 C 109.319 -0.776 109.095 -1 108.819 -1 L 108.819 0 Z M 110.806 -1 C 110.53 -1 110.306 -0.776 110.306 -0.5 C 110.306 -0.224 110.53 0 110.806 0 L 110.806 -1 Z M 112.794 0 C 113.07 0 113.294 -0.224 113.294 -0.5 C 113.294 -0.776 113.07 -1 112.794 -1 L 112.794 0 Z M 114.781 -1 C 114.505 -1 114.281 -0.776 114.281 -0.5 C 114.281 -0.224 114.505 0 114.781 0 L 114.781 -1 Z M 116.769 0 C 117.045 0 117.269 -0.224 117.269 -0.5 C 117.269 -0.776 117.045 -1 116.769 -1 L 116.769 0 Z M 118.756 -1 C 118.48 -1 118.256 -0.776 118.256 -0.5 C 118.256 -0.224 118.48 0 118.756 0 L 118.756 -1 Z M 120.744 0 C 121.02 0 121.244 -0.224 121.244 -0.5 C 121.244 -0.776 121.02 -1 120.744 -1 L 120.744 0 Z M 122.731 -1 C 122.455 -1 122.231 -0.776 122.231 -0.5 C 122.231 -0.224 122.455 0 122.731 0 L 122.731 -1 Z M 124.719 0 C 124.995 0 125.219 -0.224 125.219 -0.5 C 125.219 -0.776 124.995 -1 124.719 -1 L 124.719 0 Z M 126.706 -1 C 126.43 -1 126.206 -0.776 126.206 -0.5 C 126.206 -0.224 126.43 0 126.706 0 L 126.706 -1 Z M 128.694 0 C 128.97 0 129.194 -0.224 129.194 -0.5 C 129.194 -0.776 128.97 -1 128.694 -1 L 128.694 0 Z M 130.681 -1 C 130.405 -1 130.181 -0.776 130.181 -0.5 C 130.181 -0.224 130.405 0 130.681 0 L 130.681 -1 Z M 132.669 0 C 132.945 0 133.169 -0.224 133.169 -0.5 C 133.169 -0.776 132.945 -1 132.669 -1 L 132.669 0 Z M 134.656 -1 C 134.38 -1 134.156 -0.776 134.156 -0.5 C 134.156 -0.224 134.38 0 134.656 0 L 134.656 -1 Z M 136.644 0 C 136.92 0 137.144 -0.224 137.144 -0.5 C 137.144 -0.776 136.92 -1 136.644 -1 L 136.644 0 Z M 138.631 -1 C 138.355 -1 138.131 -0.776 138.131 -0.5 C 138.131 -0.224 138.355 0 138.631 0 L 138.631 -1 Z M 140.619 0 C 140.895 0 141.119 -0.224 141.119 -0.5 C 141.119 -0.776 140.895 -1 140.619 -1 L 140.619 0 Z M 142.606 -1 C 142.33 -1 142.106 -0.776 142.106 -0.5 C 142.106 -0.224 142.33 0 142.606 0 L 142.606 -1 Z M 144.594 0 C 144.87 0 145.094 -0.224 145.094 -0.5 C 145.094 -0.776 144.87 -1 144.594 -1 L 144.594 0 Z M 146.581 -1 C 146.305 -1 146.081 -0.776 146.081 -0.5 C 146.081 -0.224 146.305 0 146.581 0 L 146.581 -1 Z M 148.569 0 C 148.845 0 149.069 -0.224 149.069 -0.5 C 149.069 -0.776 148.845 -1 148.569 -1 L 148.569 0 Z M 150.556 -1 C 150.28 -1 150.056 -0.776 150.056 -0.5 C 150.056 -0.224 150.28 0 150.556 0 L 150.556 -1 Z M 152.544 0 C 152.82 0 153.044 -0.224 153.044 -0.5 C 153.044 -0.776 152.82 -1 152.544 -1 L 152.544 0 Z M 154.531 -1 C 154.255 -1 154.031 -0.776 154.031 -0.5 C 154.031 -0.224 154.255 0 154.531 0 L 154.531 -1 Z M 156.519 0 C 156.795 0 157.019 -0.224 157.019 -0.5 C 157.019 -0.776 156.795 -1 156.519 -1 L 156.519 0 Z M 158.506 -1 C 158.23 -1 158.006 -0.776 158.006 -0.5 C 158.006 -0.224 158.23 0 158.506 0 L 158.506 -1 Z M 0.5 0 L 1.494 0 L 1.494 -1 L 0.5 -1 L 0.5 0 Z M 3.481 0 L 5.469 0 L 5.469 -1 L 3.481 -1 L 3.481 0 Z M 7.456 0 L 9.444 0 L 9.444 -1 L 7.456 -1 L 7.456 0 Z M 11.431 0 L 13.419 0 L 13.419 -1 L 11.431 -1 L 11.431 0 Z M 15.406 0 L 17.394 0 L 17.394 -1 L 15.406 -1 L 15.406 0 Z M 19.381 0 L 21.369 0 L 21.369 -1 L 19.381 -1 L 19.381 0 Z M 23.356 0 L 25.344 0 L 25.344 -1 L 23.356 -1 L 23.356 0 Z M 27.331 0 L 29.319 0 L 29.319 -1 L 27.331 -1 L 27.331 0 Z M 31.306 0 L 33.294 0 L 33.294 -1 L 31.306 -1 L 31.306 0 Z M 35.281 0 L 37.269 0 L 37.269 -1 L 35.281 -1 L 35.281 0 Z M 39.256 0 L 41.244 0 L 41.244 -1 L 39.256 -1 L 39.256 0 Z M 43.231 0 L 45.219 0 L 45.219 -1 L 43.231 -1 L 43.231 0 Z M 47.206 0 L 49.194 0 L 49.194 -1 L 47.206 -1 L 47.206 0 Z M 51.181 0 L 53.169 0 L 53.169 -1 L 51.181 -1 L 51.181 0 Z M 55.156 0 L 57.144 0 L 57.144 -1 L 55.156 -1 L 55.156 0 Z M 59.131 0 L 61.119 0 L 61.119 -1 L 59.131 -1 L 59.131 0 Z M 63.106 0 L 65.094 0 L 65.094 -1 L 63.106 -1 L 63.106 0 Z M 67.081 0 L 69.069 0 L 69.069 -1 L 67.081 -1 L 67.081 0 Z M 71.056 0 L 73.044 0 L 73.044 -1 L 71.056 -1 L 71.056 0 Z M 75.031 0 L 77.019 0 L 77.019 -1 L 75.031 -1 L 75.031 0 Z M 79.006 0 L 80.994 0 L 80.994 -1 L 79.006 -1 L 79.006 0 Z M 82.981 0 L 84.969 0 L 84.969 -1 L 82.981 -1 L 82.981 0 Z M 86.956 0 L 88.944 0 L 88.944 -1 L 86.956 -1 L 86.956 0 Z M 90.931 0 L 92.919 0 L 92.919 -1 L 90.931 -1 L 90.931 0 Z M 94.906 0 L 96.894 0 L 96.894 -1 L 94.906 -1 L 94.906 0 Z M 98.881 0 L 100.869 0 L 100.869 -1 L 98.881 -1 L 98.881 0 Z M 102.856 0 L 104.844 0 L 104.844 -1 L 102.856 -1 L 102.856 0 Z M 106.831 0 L 108.819 0 L 108.819 -1 L 106.831 -1 L 106.831 0 Z M 110.806 0 L 112.794 0 L 112.794 -1 L 110.806 -1 L 110.806 0 Z M 114.781 0 L 116.769 0 L 116.769 -1 L 114.781 -1 L 114.781 0 Z M 118.756 0 L 120.744 0 L 120.744 -1 L 118.756 -1 L 118.756 0 Z M 122.731 0 L 124.719 0 L 124.719 -1 L 122.731 -1 L 122.731 0 Z M 126.706 0 L 128.694 0 L 128.694 -1 L 126.706 -1 L 126.706 0 Z M 130.681 0 L 132.669 0 L 132.669 -1 L 130.681 -1 L 130.681 0 Z M 134.656 0 L 136.644 0 L 136.644 -1 L 134.656 -1 L 134.656 0 Z M 138.631 0 L 140.619 0 L 140.619 -1 L 138.631 -1 L 138.631 0 Z M 142.606 0 L 144.594 0 L 144.594 -1 L 142.606 -1 L 142.606 0 Z M 146.581 0 L 148.569 0 L 148.569 -1 L 146.581 -1 L 146.581 0 Z M 150.556 0 L 152.544 0 L 152.544 -1 L 150.556 -1 L 150.556 0 Z M 154.531 0 L 156.519 0 L 156.519 -1 L 154.531 -1 L 154.531 0 Z M 158.506 0 L 159.5 0 L 159.5 -1 L 158.506 -1 L 158.506 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 160,
    height: 1,
    viewBox: "0 -0.500 160 1",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "matrix(0,1,-1,0,464.998,0)",
      transformOrigin: "0 0",
      width: 160,
      height: 1,
      opacity: 0.32
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.5 -1 C 0.224 -1 0 -0.776 0 -0.5 C 0 -0.224 0.224 0 0.5 0 L 0.5 -1 Z M 159.5 0 C 159.776 0 160 -0.224 160 -0.5 C 160 -0.776 159.776 -1 159.5 -1 L 159.5 0 Z M 1.494 0 C 1.77 0 1.994 -0.224 1.994 -0.5 C 1.994 -0.776 1.77 -1 1.494 -1 L 1.494 0 Z M 3.481 -1 C 3.205 -1 2.981 -0.776 2.981 -0.5 C 2.981 -0.224 3.205 0 3.481 0 L 3.481 -1 Z M 5.469 0 C 5.745 0 5.969 -0.224 5.969 -0.5 C 5.969 -0.776 5.745 -1 5.469 -1 L 5.469 0 Z M 7.456 -1 C 7.18 -1 6.956 -0.776 6.956 -0.5 C 6.956 -0.224 7.18 0 7.456 0 L 7.456 -1 Z M 9.444 0 C 9.72 0 9.944 -0.224 9.944 -0.5 C 9.944 -0.776 9.72 -1 9.444 -1 L 9.444 0 Z M 11.431 -1 C 11.155 -1 10.931 -0.776 10.931 -0.5 C 10.931 -0.224 11.155 0 11.431 0 L 11.431 -1 Z M 13.419 0 C 13.695 0 13.919 -0.224 13.919 -0.5 C 13.919 -0.776 13.695 -1 13.419 -1 L 13.419 0 Z M 15.406 -1 C 15.13 -1 14.906 -0.776 14.906 -0.5 C 14.906 -0.224 15.13 0 15.406 0 L 15.406 -1 Z M 17.394 0 C 17.67 0 17.894 -0.224 17.894 -0.5 C 17.894 -0.776 17.67 -1 17.394 -1 L 17.394 0 Z M 19.381 -1 C 19.105 -1 18.881 -0.776 18.881 -0.5 C 18.881 -0.224 19.105 0 19.381 0 L 19.381 -1 Z M 21.369 0 C 21.645 0 21.869 -0.224 21.869 -0.5 C 21.869 -0.776 21.645 -1 21.369 -1 L 21.369 0 Z M 23.356 -1 C 23.08 -1 22.856 -0.776 22.856 -0.5 C 22.856 -0.224 23.08 0 23.356 0 L 23.356 -1 Z M 25.344 0 C 25.62 0 25.844 -0.224 25.844 -0.5 C 25.844 -0.776 25.62 -1 25.344 -1 L 25.344 0 Z M 27.331 -1 C 27.055 -1 26.831 -0.776 26.831 -0.5 C 26.831 -0.224 27.055 0 27.331 0 L 27.331 -1 Z M 29.319 0 C 29.595 0 29.819 -0.224 29.819 -0.5 C 29.819 -0.776 29.595 -1 29.319 -1 L 29.319 0 Z M 31.306 -1 C 31.03 -1 30.806 -0.776 30.806 -0.5 C 30.806 -0.224 31.03 0 31.306 0 L 31.306 -1 Z M 33.294 0 C 33.57 0 33.794 -0.224 33.794 -0.5 C 33.794 -0.776 33.57 -1 33.294 -1 L 33.294 0 Z M 35.281 -1 C 35.005 -1 34.781 -0.776 34.781 -0.5 C 34.781 -0.224 35.005 0 35.281 0 L 35.281 -1 Z M 37.269 0 C 37.545 0 37.769 -0.224 37.769 -0.5 C 37.769 -0.776 37.545 -1 37.269 -1 L 37.269 0 Z M 39.256 -1 C 38.98 -1 38.756 -0.776 38.756 -0.5 C 38.756 -0.224 38.98 0 39.256 0 L 39.256 -1 Z M 41.244 0 C 41.52 0 41.744 -0.224 41.744 -0.5 C 41.744 -0.776 41.52 -1 41.244 -1 L 41.244 0 Z M 43.231 -1 C 42.955 -1 42.731 -0.776 42.731 -0.5 C 42.731 -0.224 42.955 0 43.231 0 L 43.231 -1 Z M 45.219 0 C 45.495 0 45.719 -0.224 45.719 -0.5 C 45.719 -0.776 45.495 -1 45.219 -1 L 45.219 0 Z M 47.206 -1 C 46.93 -1 46.706 -0.776 46.706 -0.5 C 46.706 -0.224 46.93 0 47.206 0 L 47.206 -1 Z M 49.194 0 C 49.47 0 49.694 -0.224 49.694 -0.5 C 49.694 -0.776 49.47 -1 49.194 -1 L 49.194 0 Z M 51.181 -1 C 50.905 -1 50.681 -0.776 50.681 -0.5 C 50.681 -0.224 50.905 0 51.181 0 L 51.181 -1 Z M 53.169 0 C 53.445 0 53.669 -0.224 53.669 -0.5 C 53.669 -0.776 53.445 -1 53.169 -1 L 53.169 0 Z M 55.156 -1 C 54.88 -1 54.656 -0.776 54.656 -0.5 C 54.656 -0.224 54.88 0 55.156 0 L 55.156 -1 Z M 57.144 0 C 57.42 0 57.644 -0.224 57.644 -0.5 C 57.644 -0.776 57.42 -1 57.144 -1 L 57.144 0 Z M 59.131 -1 C 58.855 -1 58.631 -0.776 58.631 -0.5 C 58.631 -0.224 58.855 0 59.131 0 L 59.131 -1 Z M 61.119 0 C 61.395 0 61.619 -0.224 61.619 -0.5 C 61.619 -0.776 61.395 -1 61.119 -1 L 61.119 0 Z M 63.106 -1 C 62.83 -1 62.606 -0.776 62.606 -0.5 C 62.606 -0.224 62.83 0 63.106 0 L 63.106 -1 Z M 65.094 0 C 65.37 0 65.594 -0.224 65.594 -0.5 C 65.594 -0.776 65.37 -1 65.094 -1 L 65.094 0 Z M 67.081 -1 C 66.805 -1 66.581 -0.776 66.581 -0.5 C 66.581 -0.224 66.805 0 67.081 0 L 67.081 -1 Z M 69.069 0 C 69.345 0 69.569 -0.224 69.569 -0.5 C 69.569 -0.776 69.345 -1 69.069 -1 L 69.069 0 Z M 71.056 -1 C 70.78 -1 70.556 -0.776 70.556 -0.5 C 70.556 -0.224 70.78 0 71.056 0 L 71.056 -1 Z M 73.044 0 C 73.32 0 73.544 -0.224 73.544 -0.5 C 73.544 -0.776 73.32 -1 73.044 -1 L 73.044 0 Z M 75.031 -1 C 74.755 -1 74.531 -0.776 74.531 -0.5 C 74.531 -0.224 74.755 0 75.031 0 L 75.031 -1 Z M 77.019 0 C 77.295 0 77.519 -0.224 77.519 -0.5 C 77.519 -0.776 77.295 -1 77.019 -1 L 77.019 0 Z M 79.006 -1 C 78.73 -1 78.506 -0.776 78.506 -0.5 C 78.506 -0.224 78.73 0 79.006 0 L 79.006 -1 Z M 80.994 0 C 81.27 0 81.494 -0.224 81.494 -0.5 C 81.494 -0.776 81.27 -1 80.994 -1 L 80.994 0 Z M 82.981 -1 C 82.705 -1 82.481 -0.776 82.481 -0.5 C 82.481 -0.224 82.705 0 82.981 0 L 82.981 -1 Z M 84.969 0 C 85.245 0 85.469 -0.224 85.469 -0.5 C 85.469 -0.776 85.245 -1 84.969 -1 L 84.969 0 Z M 86.956 -1 C 86.68 -1 86.456 -0.776 86.456 -0.5 C 86.456 -0.224 86.68 0 86.956 0 L 86.956 -1 Z M 88.944 0 C 89.22 0 89.444 -0.224 89.444 -0.5 C 89.444 -0.776 89.22 -1 88.944 -1 L 88.944 0 Z M 90.931 -1 C 90.655 -1 90.431 -0.776 90.431 -0.5 C 90.431 -0.224 90.655 0 90.931 0 L 90.931 -1 Z M 92.919 0 C 93.195 0 93.419 -0.224 93.419 -0.5 C 93.419 -0.776 93.195 -1 92.919 -1 L 92.919 0 Z M 94.906 -1 C 94.63 -1 94.406 -0.776 94.406 -0.5 C 94.406 -0.224 94.63 0 94.906 0 L 94.906 -1 Z M 96.894 0 C 97.17 0 97.394 -0.224 97.394 -0.5 C 97.394 -0.776 97.17 -1 96.894 -1 L 96.894 0 Z M 98.881 -1 C 98.605 -1 98.381 -0.776 98.381 -0.5 C 98.381 -0.224 98.605 0 98.881 0 L 98.881 -1 Z M 100.869 0 C 101.145 0 101.369 -0.224 101.369 -0.5 C 101.369 -0.776 101.145 -1 100.869 -1 L 100.869 0 Z M 102.856 -1 C 102.58 -1 102.356 -0.776 102.356 -0.5 C 102.356 -0.224 102.58 0 102.856 0 L 102.856 -1 Z M 104.844 0 C 105.12 0 105.344 -0.224 105.344 -0.5 C 105.344 -0.776 105.12 -1 104.844 -1 L 104.844 0 Z M 106.831 -1 C 106.555 -1 106.331 -0.776 106.331 -0.5 C 106.331 -0.224 106.555 0 106.831 0 L 106.831 -1 Z M 108.819 0 C 109.095 0 109.319 -0.224 109.319 -0.5 C 109.319 -0.776 109.095 -1 108.819 -1 L 108.819 0 Z M 110.806 -1 C 110.53 -1 110.306 -0.776 110.306 -0.5 C 110.306 -0.224 110.53 0 110.806 0 L 110.806 -1 Z M 112.794 0 C 113.07 0 113.294 -0.224 113.294 -0.5 C 113.294 -0.776 113.07 -1 112.794 -1 L 112.794 0 Z M 114.781 -1 C 114.505 -1 114.281 -0.776 114.281 -0.5 C 114.281 -0.224 114.505 0 114.781 0 L 114.781 -1 Z M 116.769 0 C 117.045 0 117.269 -0.224 117.269 -0.5 C 117.269 -0.776 117.045 -1 116.769 -1 L 116.769 0 Z M 118.756 -1 C 118.48 -1 118.256 -0.776 118.256 -0.5 C 118.256 -0.224 118.48 0 118.756 0 L 118.756 -1 Z M 120.744 0 C 121.02 0 121.244 -0.224 121.244 -0.5 C 121.244 -0.776 121.02 -1 120.744 -1 L 120.744 0 Z M 122.731 -1 C 122.455 -1 122.231 -0.776 122.231 -0.5 C 122.231 -0.224 122.455 0 122.731 0 L 122.731 -1 Z M 124.719 0 C 124.995 0 125.219 -0.224 125.219 -0.5 C 125.219 -0.776 124.995 -1 124.719 -1 L 124.719 0 Z M 126.706 -1 C 126.43 -1 126.206 -0.776 126.206 -0.5 C 126.206 -0.224 126.43 0 126.706 0 L 126.706 -1 Z M 128.694 0 C 128.97 0 129.194 -0.224 129.194 -0.5 C 129.194 -0.776 128.97 -1 128.694 -1 L 128.694 0 Z M 130.681 -1 C 130.405 -1 130.181 -0.776 130.181 -0.5 C 130.181 -0.224 130.405 0 130.681 0 L 130.681 -1 Z M 132.669 0 C 132.945 0 133.169 -0.224 133.169 -0.5 C 133.169 -0.776 132.945 -1 132.669 -1 L 132.669 0 Z M 134.656 -1 C 134.38 -1 134.156 -0.776 134.156 -0.5 C 134.156 -0.224 134.38 0 134.656 0 L 134.656 -1 Z M 136.644 0 C 136.92 0 137.144 -0.224 137.144 -0.5 C 137.144 -0.776 136.92 -1 136.644 -1 L 136.644 0 Z M 138.631 -1 C 138.355 -1 138.131 -0.776 138.131 -0.5 C 138.131 -0.224 138.355 0 138.631 0 L 138.631 -1 Z M 140.619 0 C 140.895 0 141.119 -0.224 141.119 -0.5 C 141.119 -0.776 140.895 -1 140.619 -1 L 140.619 0 Z M 142.606 -1 C 142.33 -1 142.106 -0.776 142.106 -0.5 C 142.106 -0.224 142.33 0 142.606 0 L 142.606 -1 Z M 144.594 0 C 144.87 0 145.094 -0.224 145.094 -0.5 C 145.094 -0.776 144.87 -1 144.594 -1 L 144.594 0 Z M 146.581 -1 C 146.305 -1 146.081 -0.776 146.081 -0.5 C 146.081 -0.224 146.305 0 146.581 0 L 146.581 -1 Z M 148.569 0 C 148.845 0 149.069 -0.224 149.069 -0.5 C 149.069 -0.776 148.845 -1 148.569 -1 L 148.569 0 Z M 150.556 -1 C 150.28 -1 150.056 -0.776 150.056 -0.5 C 150.056 -0.224 150.28 0 150.556 0 L 150.556 -1 Z M 152.544 0 C 152.82 0 153.044 -0.224 153.044 -0.5 C 153.044 -0.776 152.82 -1 152.544 -1 L 152.544 0 Z M 154.531 -1 C 154.255 -1 154.031 -0.776 154.031 -0.5 C 154.031 -0.224 154.255 0 154.531 0 L 154.531 -1 Z M 156.519 0 C 156.795 0 157.019 -0.224 157.019 -0.5 C 157.019 -0.776 156.795 -1 156.519 -1 L 156.519 0 Z M 158.506 -1 C 158.23 -1 158.006 -0.776 158.006 -0.5 C 158.006 -0.224 158.23 0 158.506 0 L 158.506 -1 Z M 0.5 0 L 1.494 0 L 1.494 -1 L 0.5 -1 L 0.5 0 Z M 3.481 0 L 5.469 0 L 5.469 -1 L 3.481 -1 L 3.481 0 Z M 7.456 0 L 9.444 0 L 9.444 -1 L 7.456 -1 L 7.456 0 Z M 11.431 0 L 13.419 0 L 13.419 -1 L 11.431 -1 L 11.431 0 Z M 15.406 0 L 17.394 0 L 17.394 -1 L 15.406 -1 L 15.406 0 Z M 19.381 0 L 21.369 0 L 21.369 -1 L 19.381 -1 L 19.381 0 Z M 23.356 0 L 25.344 0 L 25.344 -1 L 23.356 -1 L 23.356 0 Z M 27.331 0 L 29.319 0 L 29.319 -1 L 27.331 -1 L 27.331 0 Z M 31.306 0 L 33.294 0 L 33.294 -1 L 31.306 -1 L 31.306 0 Z M 35.281 0 L 37.269 0 L 37.269 -1 L 35.281 -1 L 35.281 0 Z M 39.256 0 L 41.244 0 L 41.244 -1 L 39.256 -1 L 39.256 0 Z M 43.231 0 L 45.219 0 L 45.219 -1 L 43.231 -1 L 43.231 0 Z M 47.206 0 L 49.194 0 L 49.194 -1 L 47.206 -1 L 47.206 0 Z M 51.181 0 L 53.169 0 L 53.169 -1 L 51.181 -1 L 51.181 0 Z M 55.156 0 L 57.144 0 L 57.144 -1 L 55.156 -1 L 55.156 0 Z M 59.131 0 L 61.119 0 L 61.119 -1 L 59.131 -1 L 59.131 0 Z M 63.106 0 L 65.094 0 L 65.094 -1 L 63.106 -1 L 63.106 0 Z M 67.081 0 L 69.069 0 L 69.069 -1 L 67.081 -1 L 67.081 0 Z M 71.056 0 L 73.044 0 L 73.044 -1 L 71.056 -1 L 71.056 0 Z M 75.031 0 L 77.019 0 L 77.019 -1 L 75.031 -1 L 75.031 0 Z M 79.006 0 L 80.994 0 L 80.994 -1 L 79.006 -1 L 79.006 0 Z M 82.981 0 L 84.969 0 L 84.969 -1 L 82.981 -1 L 82.981 0 Z M 86.956 0 L 88.944 0 L 88.944 -1 L 86.956 -1 L 86.956 0 Z M 90.931 0 L 92.919 0 L 92.919 -1 L 90.931 -1 L 90.931 0 Z M 94.906 0 L 96.894 0 L 96.894 -1 L 94.906 -1 L 94.906 0 Z M 98.881 0 L 100.869 0 L 100.869 -1 L 98.881 -1 L 98.881 0 Z M 102.856 0 L 104.844 0 L 104.844 -1 L 102.856 -1 L 102.856 0 Z M 106.831 0 L 108.819 0 L 108.819 -1 L 106.831 -1 L 106.831 0 Z M 110.806 0 L 112.794 0 L 112.794 -1 L 110.806 -1 L 110.806 0 Z M 114.781 0 L 116.769 0 L 116.769 -1 L 114.781 -1 L 114.781 0 Z M 118.756 0 L 120.744 0 L 120.744 -1 L 118.756 -1 L 118.756 0 Z M 122.731 0 L 124.719 0 L 124.719 -1 L 122.731 -1 L 122.731 0 Z M 126.706 0 L 128.694 0 L 128.694 -1 L 126.706 -1 L 126.706 0 Z M 130.681 0 L 132.669 0 L 132.669 -1 L 130.681 -1 L 130.681 0 Z M 134.656 0 L 136.644 0 L 136.644 -1 L 134.656 -1 L 134.656 0 Z M 138.631 0 L 140.619 0 L 140.619 -1 L 138.631 -1 L 138.631 0 Z M 142.606 0 L 144.594 0 L 144.594 -1 L 142.606 -1 L 142.606 0 Z M 146.581 0 L 148.569 0 L 148.569 -1 L 146.581 -1 L 146.581 0 Z M 150.556 0 L 152.544 0 L 152.544 -1 L 150.556 -1 L 150.556 0 Z M 154.531 0 L 156.519 0 L 156.519 -1 L 154.531 -1 L 154.531 0 Z M 158.506 0 L 159.5 0 L 159.5 -1 L 158.506 -1 L 158.506 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 160,
    height: 1,
    viewBox: "0 -0.500 160 1",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "matrix(0,1,-1,0,266.744,0)",
      transformOrigin: "0 0",
      width: 160,
      height: 1,
      opacity: 0.32
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.5 -1 C 0.224 -1 0 -0.776 0 -0.5 C 0 -0.224 0.224 0 0.5 0 L 0.5 -1 Z M 159.5 0 C 159.776 0 160 -0.224 160 -0.5 C 160 -0.776 159.776 -1 159.5 -1 L 159.5 0 Z M 1.494 0 C 1.77 0 1.994 -0.224 1.994 -0.5 C 1.994 -0.776 1.77 -1 1.494 -1 L 1.494 0 Z M 3.481 -1 C 3.205 -1 2.981 -0.776 2.981 -0.5 C 2.981 -0.224 3.205 0 3.481 0 L 3.481 -1 Z M 5.469 0 C 5.745 0 5.969 -0.224 5.969 -0.5 C 5.969 -0.776 5.745 -1 5.469 -1 L 5.469 0 Z M 7.456 -1 C 7.18 -1 6.956 -0.776 6.956 -0.5 C 6.956 -0.224 7.18 0 7.456 0 L 7.456 -1 Z M 9.444 0 C 9.72 0 9.944 -0.224 9.944 -0.5 C 9.944 -0.776 9.72 -1 9.444 -1 L 9.444 0 Z M 11.431 -1 C 11.155 -1 10.931 -0.776 10.931 -0.5 C 10.931 -0.224 11.155 0 11.431 0 L 11.431 -1 Z M 13.419 0 C 13.695 0 13.919 -0.224 13.919 -0.5 C 13.919 -0.776 13.695 -1 13.419 -1 L 13.419 0 Z M 15.406 -1 C 15.13 -1 14.906 -0.776 14.906 -0.5 C 14.906 -0.224 15.13 0 15.406 0 L 15.406 -1 Z M 17.394 0 C 17.67 0 17.894 -0.224 17.894 -0.5 C 17.894 -0.776 17.67 -1 17.394 -1 L 17.394 0 Z M 19.381 -1 C 19.105 -1 18.881 -0.776 18.881 -0.5 C 18.881 -0.224 19.105 0 19.381 0 L 19.381 -1 Z M 21.369 0 C 21.645 0 21.869 -0.224 21.869 -0.5 C 21.869 -0.776 21.645 -1 21.369 -1 L 21.369 0 Z M 23.356 -1 C 23.08 -1 22.856 -0.776 22.856 -0.5 C 22.856 -0.224 23.08 0 23.356 0 L 23.356 -1 Z M 25.344 0 C 25.62 0 25.844 -0.224 25.844 -0.5 C 25.844 -0.776 25.62 -1 25.344 -1 L 25.344 0 Z M 27.331 -1 C 27.055 -1 26.831 -0.776 26.831 -0.5 C 26.831 -0.224 27.055 0 27.331 0 L 27.331 -1 Z M 29.319 0 C 29.595 0 29.819 -0.224 29.819 -0.5 C 29.819 -0.776 29.595 -1 29.319 -1 L 29.319 0 Z M 31.306 -1 C 31.03 -1 30.806 -0.776 30.806 -0.5 C 30.806 -0.224 31.03 0 31.306 0 L 31.306 -1 Z M 33.294 0 C 33.57 0 33.794 -0.224 33.794 -0.5 C 33.794 -0.776 33.57 -1 33.294 -1 L 33.294 0 Z M 35.281 -1 C 35.005 -1 34.781 -0.776 34.781 -0.5 C 34.781 -0.224 35.005 0 35.281 0 L 35.281 -1 Z M 37.269 0 C 37.545 0 37.769 -0.224 37.769 -0.5 C 37.769 -0.776 37.545 -1 37.269 -1 L 37.269 0 Z M 39.256 -1 C 38.98 -1 38.756 -0.776 38.756 -0.5 C 38.756 -0.224 38.98 0 39.256 0 L 39.256 -1 Z M 41.244 0 C 41.52 0 41.744 -0.224 41.744 -0.5 C 41.744 -0.776 41.52 -1 41.244 -1 L 41.244 0 Z M 43.231 -1 C 42.955 -1 42.731 -0.776 42.731 -0.5 C 42.731 -0.224 42.955 0 43.231 0 L 43.231 -1 Z M 45.219 0 C 45.495 0 45.719 -0.224 45.719 -0.5 C 45.719 -0.776 45.495 -1 45.219 -1 L 45.219 0 Z M 47.206 -1 C 46.93 -1 46.706 -0.776 46.706 -0.5 C 46.706 -0.224 46.93 0 47.206 0 L 47.206 -1 Z M 49.194 0 C 49.47 0 49.694 -0.224 49.694 -0.5 C 49.694 -0.776 49.47 -1 49.194 -1 L 49.194 0 Z M 51.181 -1 C 50.905 -1 50.681 -0.776 50.681 -0.5 C 50.681 -0.224 50.905 0 51.181 0 L 51.181 -1 Z M 53.169 0 C 53.445 0 53.669 -0.224 53.669 -0.5 C 53.669 -0.776 53.445 -1 53.169 -1 L 53.169 0 Z M 55.156 -1 C 54.88 -1 54.656 -0.776 54.656 -0.5 C 54.656 -0.224 54.88 0 55.156 0 L 55.156 -1 Z M 57.144 0 C 57.42 0 57.644 -0.224 57.644 -0.5 C 57.644 -0.776 57.42 -1 57.144 -1 L 57.144 0 Z M 59.131 -1 C 58.855 -1 58.631 -0.776 58.631 -0.5 C 58.631 -0.224 58.855 0 59.131 0 L 59.131 -1 Z M 61.119 0 C 61.395 0 61.619 -0.224 61.619 -0.5 C 61.619 -0.776 61.395 -1 61.119 -1 L 61.119 0 Z M 63.106 -1 C 62.83 -1 62.606 -0.776 62.606 -0.5 C 62.606 -0.224 62.83 0 63.106 0 L 63.106 -1 Z M 65.094 0 C 65.37 0 65.594 -0.224 65.594 -0.5 C 65.594 -0.776 65.37 -1 65.094 -1 L 65.094 0 Z M 67.081 -1 C 66.805 -1 66.581 -0.776 66.581 -0.5 C 66.581 -0.224 66.805 0 67.081 0 L 67.081 -1 Z M 69.069 0 C 69.345 0 69.569 -0.224 69.569 -0.5 C 69.569 -0.776 69.345 -1 69.069 -1 L 69.069 0 Z M 71.056 -1 C 70.78 -1 70.556 -0.776 70.556 -0.5 C 70.556 -0.224 70.78 0 71.056 0 L 71.056 -1 Z M 73.044 0 C 73.32 0 73.544 -0.224 73.544 -0.5 C 73.544 -0.776 73.32 -1 73.044 -1 L 73.044 0 Z M 75.031 -1 C 74.755 -1 74.531 -0.776 74.531 -0.5 C 74.531 -0.224 74.755 0 75.031 0 L 75.031 -1 Z M 77.019 0 C 77.295 0 77.519 -0.224 77.519 -0.5 C 77.519 -0.776 77.295 -1 77.019 -1 L 77.019 0 Z M 79.006 -1 C 78.73 -1 78.506 -0.776 78.506 -0.5 C 78.506 -0.224 78.73 0 79.006 0 L 79.006 -1 Z M 80.994 0 C 81.27 0 81.494 -0.224 81.494 -0.5 C 81.494 -0.776 81.27 -1 80.994 -1 L 80.994 0 Z M 82.981 -1 C 82.705 -1 82.481 -0.776 82.481 -0.5 C 82.481 -0.224 82.705 0 82.981 0 L 82.981 -1 Z M 84.969 0 C 85.245 0 85.469 -0.224 85.469 -0.5 C 85.469 -0.776 85.245 -1 84.969 -1 L 84.969 0 Z M 86.956 -1 C 86.68 -1 86.456 -0.776 86.456 -0.5 C 86.456 -0.224 86.68 0 86.956 0 L 86.956 -1 Z M 88.944 0 C 89.22 0 89.444 -0.224 89.444 -0.5 C 89.444 -0.776 89.22 -1 88.944 -1 L 88.944 0 Z M 90.931 -1 C 90.655 -1 90.431 -0.776 90.431 -0.5 C 90.431 -0.224 90.655 0 90.931 0 L 90.931 -1 Z M 92.919 0 C 93.195 0 93.419 -0.224 93.419 -0.5 C 93.419 -0.776 93.195 -1 92.919 -1 L 92.919 0 Z M 94.906 -1 C 94.63 -1 94.406 -0.776 94.406 -0.5 C 94.406 -0.224 94.63 0 94.906 0 L 94.906 -1 Z M 96.894 0 C 97.17 0 97.394 -0.224 97.394 -0.5 C 97.394 -0.776 97.17 -1 96.894 -1 L 96.894 0 Z M 98.881 -1 C 98.605 -1 98.381 -0.776 98.381 -0.5 C 98.381 -0.224 98.605 0 98.881 0 L 98.881 -1 Z M 100.869 0 C 101.145 0 101.369 -0.224 101.369 -0.5 C 101.369 -0.776 101.145 -1 100.869 -1 L 100.869 0 Z M 102.856 -1 C 102.58 -1 102.356 -0.776 102.356 -0.5 C 102.356 -0.224 102.58 0 102.856 0 L 102.856 -1 Z M 104.844 0 C 105.12 0 105.344 -0.224 105.344 -0.5 C 105.344 -0.776 105.12 -1 104.844 -1 L 104.844 0 Z M 106.831 -1 C 106.555 -1 106.331 -0.776 106.331 -0.5 C 106.331 -0.224 106.555 0 106.831 0 L 106.831 -1 Z M 108.819 0 C 109.095 0 109.319 -0.224 109.319 -0.5 C 109.319 -0.776 109.095 -1 108.819 -1 L 108.819 0 Z M 110.806 -1 C 110.53 -1 110.306 -0.776 110.306 -0.5 C 110.306 -0.224 110.53 0 110.806 0 L 110.806 -1 Z M 112.794 0 C 113.07 0 113.294 -0.224 113.294 -0.5 C 113.294 -0.776 113.07 -1 112.794 -1 L 112.794 0 Z M 114.781 -1 C 114.505 -1 114.281 -0.776 114.281 -0.5 C 114.281 -0.224 114.505 0 114.781 0 L 114.781 -1 Z M 116.769 0 C 117.045 0 117.269 -0.224 117.269 -0.5 C 117.269 -0.776 117.045 -1 116.769 -1 L 116.769 0 Z M 118.756 -1 C 118.48 -1 118.256 -0.776 118.256 -0.5 C 118.256 -0.224 118.48 0 118.756 0 L 118.756 -1 Z M 120.744 0 C 121.02 0 121.244 -0.224 121.244 -0.5 C 121.244 -0.776 121.02 -1 120.744 -1 L 120.744 0 Z M 122.731 -1 C 122.455 -1 122.231 -0.776 122.231 -0.5 C 122.231 -0.224 122.455 0 122.731 0 L 122.731 -1 Z M 124.719 0 C 124.995 0 125.219 -0.224 125.219 -0.5 C 125.219 -0.776 124.995 -1 124.719 -1 L 124.719 0 Z M 126.706 -1 C 126.43 -1 126.206 -0.776 126.206 -0.5 C 126.206 -0.224 126.43 0 126.706 0 L 126.706 -1 Z M 128.694 0 C 128.97 0 129.194 -0.224 129.194 -0.5 C 129.194 -0.776 128.97 -1 128.694 -1 L 128.694 0 Z M 130.681 -1 C 130.405 -1 130.181 -0.776 130.181 -0.5 C 130.181 -0.224 130.405 0 130.681 0 L 130.681 -1 Z M 132.669 0 C 132.945 0 133.169 -0.224 133.169 -0.5 C 133.169 -0.776 132.945 -1 132.669 -1 L 132.669 0 Z M 134.656 -1 C 134.38 -1 134.156 -0.776 134.156 -0.5 C 134.156 -0.224 134.38 0 134.656 0 L 134.656 -1 Z M 136.644 0 C 136.92 0 137.144 -0.224 137.144 -0.5 C 137.144 -0.776 136.92 -1 136.644 -1 L 136.644 0 Z M 138.631 -1 C 138.355 -1 138.131 -0.776 138.131 -0.5 C 138.131 -0.224 138.355 0 138.631 0 L 138.631 -1 Z M 140.619 0 C 140.895 0 141.119 -0.224 141.119 -0.5 C 141.119 -0.776 140.895 -1 140.619 -1 L 140.619 0 Z M 142.606 -1 C 142.33 -1 142.106 -0.776 142.106 -0.5 C 142.106 -0.224 142.33 0 142.606 0 L 142.606 -1 Z M 144.594 0 C 144.87 0 145.094 -0.224 145.094 -0.5 C 145.094 -0.776 144.87 -1 144.594 -1 L 144.594 0 Z M 146.581 -1 C 146.305 -1 146.081 -0.776 146.081 -0.5 C 146.081 -0.224 146.305 0 146.581 0 L 146.581 -1 Z M 148.569 0 C 148.845 0 149.069 -0.224 149.069 -0.5 C 149.069 -0.776 148.845 -1 148.569 -1 L 148.569 0 Z M 150.556 -1 C 150.28 -1 150.056 -0.776 150.056 -0.5 C 150.056 -0.224 150.28 0 150.556 0 L 150.556 -1 Z M 152.544 0 C 152.82 0 153.044 -0.224 153.044 -0.5 C 153.044 -0.776 152.82 -1 152.544 -1 L 152.544 0 Z M 154.531 -1 C 154.255 -1 154.031 -0.776 154.031 -0.5 C 154.031 -0.224 154.255 0 154.531 0 L 154.531 -1 Z M 156.519 0 C 156.795 0 157.019 -0.224 157.019 -0.5 C 157.019 -0.776 156.795 -1 156.519 -1 L 156.519 0 Z M 158.506 -1 C 158.23 -1 158.006 -0.776 158.006 -0.5 C 158.006 -0.224 158.23 0 158.506 0 L 158.506 -1 Z M 0.5 0 L 1.494 0 L 1.494 -1 L 0.5 -1 L 0.5 0 Z M 3.481 0 L 5.469 0 L 5.469 -1 L 3.481 -1 L 3.481 0 Z M 7.456 0 L 9.444 0 L 9.444 -1 L 7.456 -1 L 7.456 0 Z M 11.431 0 L 13.419 0 L 13.419 -1 L 11.431 -1 L 11.431 0 Z M 15.406 0 L 17.394 0 L 17.394 -1 L 15.406 -1 L 15.406 0 Z M 19.381 0 L 21.369 0 L 21.369 -1 L 19.381 -1 L 19.381 0 Z M 23.356 0 L 25.344 0 L 25.344 -1 L 23.356 -1 L 23.356 0 Z M 27.331 0 L 29.319 0 L 29.319 -1 L 27.331 -1 L 27.331 0 Z M 31.306 0 L 33.294 0 L 33.294 -1 L 31.306 -1 L 31.306 0 Z M 35.281 0 L 37.269 0 L 37.269 -1 L 35.281 -1 L 35.281 0 Z M 39.256 0 L 41.244 0 L 41.244 -1 L 39.256 -1 L 39.256 0 Z M 43.231 0 L 45.219 0 L 45.219 -1 L 43.231 -1 L 43.231 0 Z M 47.206 0 L 49.194 0 L 49.194 -1 L 47.206 -1 L 47.206 0 Z M 51.181 0 L 53.169 0 L 53.169 -1 L 51.181 -1 L 51.181 0 Z M 55.156 0 L 57.144 0 L 57.144 -1 L 55.156 -1 L 55.156 0 Z M 59.131 0 L 61.119 0 L 61.119 -1 L 59.131 -1 L 59.131 0 Z M 63.106 0 L 65.094 0 L 65.094 -1 L 63.106 -1 L 63.106 0 Z M 67.081 0 L 69.069 0 L 69.069 -1 L 67.081 -1 L 67.081 0 Z M 71.056 0 L 73.044 0 L 73.044 -1 L 71.056 -1 L 71.056 0 Z M 75.031 0 L 77.019 0 L 77.019 -1 L 75.031 -1 L 75.031 0 Z M 79.006 0 L 80.994 0 L 80.994 -1 L 79.006 -1 L 79.006 0 Z M 82.981 0 L 84.969 0 L 84.969 -1 L 82.981 -1 L 82.981 0 Z M 86.956 0 L 88.944 0 L 88.944 -1 L 86.956 -1 L 86.956 0 Z M 90.931 0 L 92.919 0 L 92.919 -1 L 90.931 -1 L 90.931 0 Z M 94.906 0 L 96.894 0 L 96.894 -1 L 94.906 -1 L 94.906 0 Z M 98.881 0 L 100.869 0 L 100.869 -1 L 98.881 -1 L 98.881 0 Z M 102.856 0 L 104.844 0 L 104.844 -1 L 102.856 -1 L 102.856 0 Z M 106.831 0 L 108.819 0 L 108.819 -1 L 106.831 -1 L 106.831 0 Z M 110.806 0 L 112.794 0 L 112.794 -1 L 110.806 -1 L 110.806 0 Z M 114.781 0 L 116.769 0 L 116.769 -1 L 114.781 -1 L 114.781 0 Z M 118.756 0 L 120.744 0 L 120.744 -1 L 118.756 -1 L 118.756 0 Z M 122.731 0 L 124.719 0 L 124.719 -1 L 122.731 -1 L 122.731 0 Z M 126.706 0 L 128.694 0 L 128.694 -1 L 126.706 -1 L 126.706 0 Z M 130.681 0 L 132.669 0 L 132.669 -1 L 130.681 -1 L 130.681 0 Z M 134.656 0 L 136.644 0 L 136.644 -1 L 134.656 -1 L 134.656 0 Z M 138.631 0 L 140.619 0 L 140.619 -1 L 138.631 -1 L 138.631 0 Z M 142.606 0 L 144.594 0 L 144.594 -1 L 142.606 -1 L 142.606 0 Z M 146.581 0 L 148.569 0 L 148.569 -1 L 146.581 -1 L 146.581 0 Z M 150.556 0 L 152.544 0 L 152.544 -1 L 150.556 -1 L 150.556 0 Z M 154.531 0 L 156.519 0 L 156.519 -1 L 154.531 -1 L 154.531 0 Z M 158.506 0 L 159.5 0 L 159.5 -1 L 158.506 -1 L 158.506 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 160,
    height: 1,
    viewBox: "0 -0.500 160 1",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "matrix(0,1,-1,0,500.443,0)",
      transformOrigin: "0 0",
      width: 160,
      height: 1,
      opacity: 0.32
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.5 -1 C 0.224 -1 0 -0.776 0 -0.5 C 0 -0.224 0.224 0 0.5 0 L 0.5 -1 Z M 159.5 0 C 159.776 0 160 -0.224 160 -0.5 C 160 -0.776 159.776 -1 159.5 -1 L 159.5 0 Z M 1.494 0 C 1.77 0 1.994 -0.224 1.994 -0.5 C 1.994 -0.776 1.77 -1 1.494 -1 L 1.494 0 Z M 3.481 -1 C 3.205 -1 2.981 -0.776 2.981 -0.5 C 2.981 -0.224 3.205 0 3.481 0 L 3.481 -1 Z M 5.469 0 C 5.745 0 5.969 -0.224 5.969 -0.5 C 5.969 -0.776 5.745 -1 5.469 -1 L 5.469 0 Z M 7.456 -1 C 7.18 -1 6.956 -0.776 6.956 -0.5 C 6.956 -0.224 7.18 0 7.456 0 L 7.456 -1 Z M 9.444 0 C 9.72 0 9.944 -0.224 9.944 -0.5 C 9.944 -0.776 9.72 -1 9.444 -1 L 9.444 0 Z M 11.431 -1 C 11.155 -1 10.931 -0.776 10.931 -0.5 C 10.931 -0.224 11.155 0 11.431 0 L 11.431 -1 Z M 13.419 0 C 13.695 0 13.919 -0.224 13.919 -0.5 C 13.919 -0.776 13.695 -1 13.419 -1 L 13.419 0 Z M 15.406 -1 C 15.13 -1 14.906 -0.776 14.906 -0.5 C 14.906 -0.224 15.13 0 15.406 0 L 15.406 -1 Z M 17.394 0 C 17.67 0 17.894 -0.224 17.894 -0.5 C 17.894 -0.776 17.67 -1 17.394 -1 L 17.394 0 Z M 19.381 -1 C 19.105 -1 18.881 -0.776 18.881 -0.5 C 18.881 -0.224 19.105 0 19.381 0 L 19.381 -1 Z M 21.369 0 C 21.645 0 21.869 -0.224 21.869 -0.5 C 21.869 -0.776 21.645 -1 21.369 -1 L 21.369 0 Z M 23.356 -1 C 23.08 -1 22.856 -0.776 22.856 -0.5 C 22.856 -0.224 23.08 0 23.356 0 L 23.356 -1 Z M 25.344 0 C 25.62 0 25.844 -0.224 25.844 -0.5 C 25.844 -0.776 25.62 -1 25.344 -1 L 25.344 0 Z M 27.331 -1 C 27.055 -1 26.831 -0.776 26.831 -0.5 C 26.831 -0.224 27.055 0 27.331 0 L 27.331 -1 Z M 29.319 0 C 29.595 0 29.819 -0.224 29.819 -0.5 C 29.819 -0.776 29.595 -1 29.319 -1 L 29.319 0 Z M 31.306 -1 C 31.03 -1 30.806 -0.776 30.806 -0.5 C 30.806 -0.224 31.03 0 31.306 0 L 31.306 -1 Z M 33.294 0 C 33.57 0 33.794 -0.224 33.794 -0.5 C 33.794 -0.776 33.57 -1 33.294 -1 L 33.294 0 Z M 35.281 -1 C 35.005 -1 34.781 -0.776 34.781 -0.5 C 34.781 -0.224 35.005 0 35.281 0 L 35.281 -1 Z M 37.269 0 C 37.545 0 37.769 -0.224 37.769 -0.5 C 37.769 -0.776 37.545 -1 37.269 -1 L 37.269 0 Z M 39.256 -1 C 38.98 -1 38.756 -0.776 38.756 -0.5 C 38.756 -0.224 38.98 0 39.256 0 L 39.256 -1 Z M 41.244 0 C 41.52 0 41.744 -0.224 41.744 -0.5 C 41.744 -0.776 41.52 -1 41.244 -1 L 41.244 0 Z M 43.231 -1 C 42.955 -1 42.731 -0.776 42.731 -0.5 C 42.731 -0.224 42.955 0 43.231 0 L 43.231 -1 Z M 45.219 0 C 45.495 0 45.719 -0.224 45.719 -0.5 C 45.719 -0.776 45.495 -1 45.219 -1 L 45.219 0 Z M 47.206 -1 C 46.93 -1 46.706 -0.776 46.706 -0.5 C 46.706 -0.224 46.93 0 47.206 0 L 47.206 -1 Z M 49.194 0 C 49.47 0 49.694 -0.224 49.694 -0.5 C 49.694 -0.776 49.47 -1 49.194 -1 L 49.194 0 Z M 51.181 -1 C 50.905 -1 50.681 -0.776 50.681 -0.5 C 50.681 -0.224 50.905 0 51.181 0 L 51.181 -1 Z M 53.169 0 C 53.445 0 53.669 -0.224 53.669 -0.5 C 53.669 -0.776 53.445 -1 53.169 -1 L 53.169 0 Z M 55.156 -1 C 54.88 -1 54.656 -0.776 54.656 -0.5 C 54.656 -0.224 54.88 0 55.156 0 L 55.156 -1 Z M 57.144 0 C 57.42 0 57.644 -0.224 57.644 -0.5 C 57.644 -0.776 57.42 -1 57.144 -1 L 57.144 0 Z M 59.131 -1 C 58.855 -1 58.631 -0.776 58.631 -0.5 C 58.631 -0.224 58.855 0 59.131 0 L 59.131 -1 Z M 61.119 0 C 61.395 0 61.619 -0.224 61.619 -0.5 C 61.619 -0.776 61.395 -1 61.119 -1 L 61.119 0 Z M 63.106 -1 C 62.83 -1 62.606 -0.776 62.606 -0.5 C 62.606 -0.224 62.83 0 63.106 0 L 63.106 -1 Z M 65.094 0 C 65.37 0 65.594 -0.224 65.594 -0.5 C 65.594 -0.776 65.37 -1 65.094 -1 L 65.094 0 Z M 67.081 -1 C 66.805 -1 66.581 -0.776 66.581 -0.5 C 66.581 -0.224 66.805 0 67.081 0 L 67.081 -1 Z M 69.069 0 C 69.345 0 69.569 -0.224 69.569 -0.5 C 69.569 -0.776 69.345 -1 69.069 -1 L 69.069 0 Z M 71.056 -1 C 70.78 -1 70.556 -0.776 70.556 -0.5 C 70.556 -0.224 70.78 0 71.056 0 L 71.056 -1 Z M 73.044 0 C 73.32 0 73.544 -0.224 73.544 -0.5 C 73.544 -0.776 73.32 -1 73.044 -1 L 73.044 0 Z M 75.031 -1 C 74.755 -1 74.531 -0.776 74.531 -0.5 C 74.531 -0.224 74.755 0 75.031 0 L 75.031 -1 Z M 77.019 0 C 77.295 0 77.519 -0.224 77.519 -0.5 C 77.519 -0.776 77.295 -1 77.019 -1 L 77.019 0 Z M 79.006 -1 C 78.73 -1 78.506 -0.776 78.506 -0.5 C 78.506 -0.224 78.73 0 79.006 0 L 79.006 -1 Z M 80.994 0 C 81.27 0 81.494 -0.224 81.494 -0.5 C 81.494 -0.776 81.27 -1 80.994 -1 L 80.994 0 Z M 82.981 -1 C 82.705 -1 82.481 -0.776 82.481 -0.5 C 82.481 -0.224 82.705 0 82.981 0 L 82.981 -1 Z M 84.969 0 C 85.245 0 85.469 -0.224 85.469 -0.5 C 85.469 -0.776 85.245 -1 84.969 -1 L 84.969 0 Z M 86.956 -1 C 86.68 -1 86.456 -0.776 86.456 -0.5 C 86.456 -0.224 86.68 0 86.956 0 L 86.956 -1 Z M 88.944 0 C 89.22 0 89.444 -0.224 89.444 -0.5 C 89.444 -0.776 89.22 -1 88.944 -1 L 88.944 0 Z M 90.931 -1 C 90.655 -1 90.431 -0.776 90.431 -0.5 C 90.431 -0.224 90.655 0 90.931 0 L 90.931 -1 Z M 92.919 0 C 93.195 0 93.419 -0.224 93.419 -0.5 C 93.419 -0.776 93.195 -1 92.919 -1 L 92.919 0 Z M 94.906 -1 C 94.63 -1 94.406 -0.776 94.406 -0.5 C 94.406 -0.224 94.63 0 94.906 0 L 94.906 -1 Z M 96.894 0 C 97.17 0 97.394 -0.224 97.394 -0.5 C 97.394 -0.776 97.17 -1 96.894 -1 L 96.894 0 Z M 98.881 -1 C 98.605 -1 98.381 -0.776 98.381 -0.5 C 98.381 -0.224 98.605 0 98.881 0 L 98.881 -1 Z M 100.869 0 C 101.145 0 101.369 -0.224 101.369 -0.5 C 101.369 -0.776 101.145 -1 100.869 -1 L 100.869 0 Z M 102.856 -1 C 102.58 -1 102.356 -0.776 102.356 -0.5 C 102.356 -0.224 102.58 0 102.856 0 L 102.856 -1 Z M 104.844 0 C 105.12 0 105.344 -0.224 105.344 -0.5 C 105.344 -0.776 105.12 -1 104.844 -1 L 104.844 0 Z M 106.831 -1 C 106.555 -1 106.331 -0.776 106.331 -0.5 C 106.331 -0.224 106.555 0 106.831 0 L 106.831 -1 Z M 108.819 0 C 109.095 0 109.319 -0.224 109.319 -0.5 C 109.319 -0.776 109.095 -1 108.819 -1 L 108.819 0 Z M 110.806 -1 C 110.53 -1 110.306 -0.776 110.306 -0.5 C 110.306 -0.224 110.53 0 110.806 0 L 110.806 -1 Z M 112.794 0 C 113.07 0 113.294 -0.224 113.294 -0.5 C 113.294 -0.776 113.07 -1 112.794 -1 L 112.794 0 Z M 114.781 -1 C 114.505 -1 114.281 -0.776 114.281 -0.5 C 114.281 -0.224 114.505 0 114.781 0 L 114.781 -1 Z M 116.769 0 C 117.045 0 117.269 -0.224 117.269 -0.5 C 117.269 -0.776 117.045 -1 116.769 -1 L 116.769 0 Z M 118.756 -1 C 118.48 -1 118.256 -0.776 118.256 -0.5 C 118.256 -0.224 118.48 0 118.756 0 L 118.756 -1 Z M 120.744 0 C 121.02 0 121.244 -0.224 121.244 -0.5 C 121.244 -0.776 121.02 -1 120.744 -1 L 120.744 0 Z M 122.731 -1 C 122.455 -1 122.231 -0.776 122.231 -0.5 C 122.231 -0.224 122.455 0 122.731 0 L 122.731 -1 Z M 124.719 0 C 124.995 0 125.219 -0.224 125.219 -0.5 C 125.219 -0.776 124.995 -1 124.719 -1 L 124.719 0 Z M 126.706 -1 C 126.43 -1 126.206 -0.776 126.206 -0.5 C 126.206 -0.224 126.43 0 126.706 0 L 126.706 -1 Z M 128.694 0 C 128.97 0 129.194 -0.224 129.194 -0.5 C 129.194 -0.776 128.97 -1 128.694 -1 L 128.694 0 Z M 130.681 -1 C 130.405 -1 130.181 -0.776 130.181 -0.5 C 130.181 -0.224 130.405 0 130.681 0 L 130.681 -1 Z M 132.669 0 C 132.945 0 133.169 -0.224 133.169 -0.5 C 133.169 -0.776 132.945 -1 132.669 -1 L 132.669 0 Z M 134.656 -1 C 134.38 -1 134.156 -0.776 134.156 -0.5 C 134.156 -0.224 134.38 0 134.656 0 L 134.656 -1 Z M 136.644 0 C 136.92 0 137.144 -0.224 137.144 -0.5 C 137.144 -0.776 136.92 -1 136.644 -1 L 136.644 0 Z M 138.631 -1 C 138.355 -1 138.131 -0.776 138.131 -0.5 C 138.131 -0.224 138.355 0 138.631 0 L 138.631 -1 Z M 140.619 0 C 140.895 0 141.119 -0.224 141.119 -0.5 C 141.119 -0.776 140.895 -1 140.619 -1 L 140.619 0 Z M 142.606 -1 C 142.33 -1 142.106 -0.776 142.106 -0.5 C 142.106 -0.224 142.33 0 142.606 0 L 142.606 -1 Z M 144.594 0 C 144.87 0 145.094 -0.224 145.094 -0.5 C 145.094 -0.776 144.87 -1 144.594 -1 L 144.594 0 Z M 146.581 -1 C 146.305 -1 146.081 -0.776 146.081 -0.5 C 146.081 -0.224 146.305 0 146.581 0 L 146.581 -1 Z M 148.569 0 C 148.845 0 149.069 -0.224 149.069 -0.5 C 149.069 -0.776 148.845 -1 148.569 -1 L 148.569 0 Z M 150.556 -1 C 150.28 -1 150.056 -0.776 150.056 -0.5 C 150.056 -0.224 150.28 0 150.556 0 L 150.556 -1 Z M 152.544 0 C 152.82 0 153.044 -0.224 153.044 -0.5 C 153.044 -0.776 152.82 -1 152.544 -1 L 152.544 0 Z M 154.531 -1 C 154.255 -1 154.031 -0.776 154.031 -0.5 C 154.031 -0.224 154.255 0 154.531 0 L 154.531 -1 Z M 156.519 0 C 156.795 0 157.019 -0.224 157.019 -0.5 C 157.019 -0.776 156.795 -1 156.519 -1 L 156.519 0 Z M 158.506 -1 C 158.23 -1 158.006 -0.776 158.006 -0.5 C 158.006 -0.224 158.23 0 158.506 0 L 158.506 -1 Z M 0.5 0 L 1.494 0 L 1.494 -1 L 0.5 -1 L 0.5 0 Z M 3.481 0 L 5.469 0 L 5.469 -1 L 3.481 -1 L 3.481 0 Z M 7.456 0 L 9.444 0 L 9.444 -1 L 7.456 -1 L 7.456 0 Z M 11.431 0 L 13.419 0 L 13.419 -1 L 11.431 -1 L 11.431 0 Z M 15.406 0 L 17.394 0 L 17.394 -1 L 15.406 -1 L 15.406 0 Z M 19.381 0 L 21.369 0 L 21.369 -1 L 19.381 -1 L 19.381 0 Z M 23.356 0 L 25.344 0 L 25.344 -1 L 23.356 -1 L 23.356 0 Z M 27.331 0 L 29.319 0 L 29.319 -1 L 27.331 -1 L 27.331 0 Z M 31.306 0 L 33.294 0 L 33.294 -1 L 31.306 -1 L 31.306 0 Z M 35.281 0 L 37.269 0 L 37.269 -1 L 35.281 -1 L 35.281 0 Z M 39.256 0 L 41.244 0 L 41.244 -1 L 39.256 -1 L 39.256 0 Z M 43.231 0 L 45.219 0 L 45.219 -1 L 43.231 -1 L 43.231 0 Z M 47.206 0 L 49.194 0 L 49.194 -1 L 47.206 -1 L 47.206 0 Z M 51.181 0 L 53.169 0 L 53.169 -1 L 51.181 -1 L 51.181 0 Z M 55.156 0 L 57.144 0 L 57.144 -1 L 55.156 -1 L 55.156 0 Z M 59.131 0 L 61.119 0 L 61.119 -1 L 59.131 -1 L 59.131 0 Z M 63.106 0 L 65.094 0 L 65.094 -1 L 63.106 -1 L 63.106 0 Z M 67.081 0 L 69.069 0 L 69.069 -1 L 67.081 -1 L 67.081 0 Z M 71.056 0 L 73.044 0 L 73.044 -1 L 71.056 -1 L 71.056 0 Z M 75.031 0 L 77.019 0 L 77.019 -1 L 75.031 -1 L 75.031 0 Z M 79.006 0 L 80.994 0 L 80.994 -1 L 79.006 -1 L 79.006 0 Z M 82.981 0 L 84.969 0 L 84.969 -1 L 82.981 -1 L 82.981 0 Z M 86.956 0 L 88.944 0 L 88.944 -1 L 86.956 -1 L 86.956 0 Z M 90.931 0 L 92.919 0 L 92.919 -1 L 90.931 -1 L 90.931 0 Z M 94.906 0 L 96.894 0 L 96.894 -1 L 94.906 -1 L 94.906 0 Z M 98.881 0 L 100.869 0 L 100.869 -1 L 98.881 -1 L 98.881 0 Z M 102.856 0 L 104.844 0 L 104.844 -1 L 102.856 -1 L 102.856 0 Z M 106.831 0 L 108.819 0 L 108.819 -1 L 106.831 -1 L 106.831 0 Z M 110.806 0 L 112.794 0 L 112.794 -1 L 110.806 -1 L 110.806 0 Z M 114.781 0 L 116.769 0 L 116.769 -1 L 114.781 -1 L 114.781 0 Z M 118.756 0 L 120.744 0 L 120.744 -1 L 118.756 -1 L 118.756 0 Z M 122.731 0 L 124.719 0 L 124.719 -1 L 122.731 -1 L 122.731 0 Z M 126.706 0 L 128.694 0 L 128.694 -1 L 126.706 -1 L 126.706 0 Z M 130.681 0 L 132.669 0 L 132.669 -1 L 130.681 -1 L 130.681 0 Z M 134.656 0 L 136.644 0 L 136.644 -1 L 134.656 -1 L 134.656 0 Z M 138.631 0 L 140.619 0 L 140.619 -1 L 138.631 -1 L 138.631 0 Z M 142.606 0 L 144.594 0 L 144.594 -1 L 142.606 -1 L 142.606 0 Z M 146.581 0 L 148.569 0 L 148.569 -1 L 146.581 -1 L 146.581 0 Z M 150.556 0 L 152.544 0 L 152.544 -1 L 150.556 -1 L 150.556 0 Z M 154.531 0 L 156.519 0 L 156.519 -1 L 154.531 -1 L 154.531 0 Z M 158.506 0 L 159.5 0 L 159.5 -1 L 158.506 -1 L 158.506 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 160,
    height: 1,
    viewBox: "0 -0.500 160 1",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "matrix(0,1,-1,0,278.760,0)",
      transformOrigin: "0 0",
      width: 160,
      height: 1,
      opacity: 0.32
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.5 -1 C 0.224 -1 0 -0.776 0 -0.5 C 0 -0.224 0.224 0 0.5 0 L 0.5 -1 Z M 159.5 0 C 159.776 0 160 -0.224 160 -0.5 C 160 -0.776 159.776 -1 159.5 -1 L 159.5 0 Z M 1.494 0 C 1.77 0 1.994 -0.224 1.994 -0.5 C 1.994 -0.776 1.77 -1 1.494 -1 L 1.494 0 Z M 3.481 -1 C 3.205 -1 2.981 -0.776 2.981 -0.5 C 2.981 -0.224 3.205 0 3.481 0 L 3.481 -1 Z M 5.469 0 C 5.745 0 5.969 -0.224 5.969 -0.5 C 5.969 -0.776 5.745 -1 5.469 -1 L 5.469 0 Z M 7.456 -1 C 7.18 -1 6.956 -0.776 6.956 -0.5 C 6.956 -0.224 7.18 0 7.456 0 L 7.456 -1 Z M 9.444 0 C 9.72 0 9.944 -0.224 9.944 -0.5 C 9.944 -0.776 9.72 -1 9.444 -1 L 9.444 0 Z M 11.431 -1 C 11.155 -1 10.931 -0.776 10.931 -0.5 C 10.931 -0.224 11.155 0 11.431 0 L 11.431 -1 Z M 13.419 0 C 13.695 0 13.919 -0.224 13.919 -0.5 C 13.919 -0.776 13.695 -1 13.419 -1 L 13.419 0 Z M 15.406 -1 C 15.13 -1 14.906 -0.776 14.906 -0.5 C 14.906 -0.224 15.13 0 15.406 0 L 15.406 -1 Z M 17.394 0 C 17.67 0 17.894 -0.224 17.894 -0.5 C 17.894 -0.776 17.67 -1 17.394 -1 L 17.394 0 Z M 19.381 -1 C 19.105 -1 18.881 -0.776 18.881 -0.5 C 18.881 -0.224 19.105 0 19.381 0 L 19.381 -1 Z M 21.369 0 C 21.645 0 21.869 -0.224 21.869 -0.5 C 21.869 -0.776 21.645 -1 21.369 -1 L 21.369 0 Z M 23.356 -1 C 23.08 -1 22.856 -0.776 22.856 -0.5 C 22.856 -0.224 23.08 0 23.356 0 L 23.356 -1 Z M 25.344 0 C 25.62 0 25.844 -0.224 25.844 -0.5 C 25.844 -0.776 25.62 -1 25.344 -1 L 25.344 0 Z M 27.331 -1 C 27.055 -1 26.831 -0.776 26.831 -0.5 C 26.831 -0.224 27.055 0 27.331 0 L 27.331 -1 Z M 29.319 0 C 29.595 0 29.819 -0.224 29.819 -0.5 C 29.819 -0.776 29.595 -1 29.319 -1 L 29.319 0 Z M 31.306 -1 C 31.03 -1 30.806 -0.776 30.806 -0.5 C 30.806 -0.224 31.03 0 31.306 0 L 31.306 -1 Z M 33.294 0 C 33.57 0 33.794 -0.224 33.794 -0.5 C 33.794 -0.776 33.57 -1 33.294 -1 L 33.294 0 Z M 35.281 -1 C 35.005 -1 34.781 -0.776 34.781 -0.5 C 34.781 -0.224 35.005 0 35.281 0 L 35.281 -1 Z M 37.269 0 C 37.545 0 37.769 -0.224 37.769 -0.5 C 37.769 -0.776 37.545 -1 37.269 -1 L 37.269 0 Z M 39.256 -1 C 38.98 -1 38.756 -0.776 38.756 -0.5 C 38.756 -0.224 38.98 0 39.256 0 L 39.256 -1 Z M 41.244 0 C 41.52 0 41.744 -0.224 41.744 -0.5 C 41.744 -0.776 41.52 -1 41.244 -1 L 41.244 0 Z M 43.231 -1 C 42.955 -1 42.731 -0.776 42.731 -0.5 C 42.731 -0.224 42.955 0 43.231 0 L 43.231 -1 Z M 45.219 0 C 45.495 0 45.719 -0.224 45.719 -0.5 C 45.719 -0.776 45.495 -1 45.219 -1 L 45.219 0 Z M 47.206 -1 C 46.93 -1 46.706 -0.776 46.706 -0.5 C 46.706 -0.224 46.93 0 47.206 0 L 47.206 -1 Z M 49.194 0 C 49.47 0 49.694 -0.224 49.694 -0.5 C 49.694 -0.776 49.47 -1 49.194 -1 L 49.194 0 Z M 51.181 -1 C 50.905 -1 50.681 -0.776 50.681 -0.5 C 50.681 -0.224 50.905 0 51.181 0 L 51.181 -1 Z M 53.169 0 C 53.445 0 53.669 -0.224 53.669 -0.5 C 53.669 -0.776 53.445 -1 53.169 -1 L 53.169 0 Z M 55.156 -1 C 54.88 -1 54.656 -0.776 54.656 -0.5 C 54.656 -0.224 54.88 0 55.156 0 L 55.156 -1 Z M 57.144 0 C 57.42 0 57.644 -0.224 57.644 -0.5 C 57.644 -0.776 57.42 -1 57.144 -1 L 57.144 0 Z M 59.131 -1 C 58.855 -1 58.631 -0.776 58.631 -0.5 C 58.631 -0.224 58.855 0 59.131 0 L 59.131 -1 Z M 61.119 0 C 61.395 0 61.619 -0.224 61.619 -0.5 C 61.619 -0.776 61.395 -1 61.119 -1 L 61.119 0 Z M 63.106 -1 C 62.83 -1 62.606 -0.776 62.606 -0.5 C 62.606 -0.224 62.83 0 63.106 0 L 63.106 -1 Z M 65.094 0 C 65.37 0 65.594 -0.224 65.594 -0.5 C 65.594 -0.776 65.37 -1 65.094 -1 L 65.094 0 Z M 67.081 -1 C 66.805 -1 66.581 -0.776 66.581 -0.5 C 66.581 -0.224 66.805 0 67.081 0 L 67.081 -1 Z M 69.069 0 C 69.345 0 69.569 -0.224 69.569 -0.5 C 69.569 -0.776 69.345 -1 69.069 -1 L 69.069 0 Z M 71.056 -1 C 70.78 -1 70.556 -0.776 70.556 -0.5 C 70.556 -0.224 70.78 0 71.056 0 L 71.056 -1 Z M 73.044 0 C 73.32 0 73.544 -0.224 73.544 -0.5 C 73.544 -0.776 73.32 -1 73.044 -1 L 73.044 0 Z M 75.031 -1 C 74.755 -1 74.531 -0.776 74.531 -0.5 C 74.531 -0.224 74.755 0 75.031 0 L 75.031 -1 Z M 77.019 0 C 77.295 0 77.519 -0.224 77.519 -0.5 C 77.519 -0.776 77.295 -1 77.019 -1 L 77.019 0 Z M 79.006 -1 C 78.73 -1 78.506 -0.776 78.506 -0.5 C 78.506 -0.224 78.73 0 79.006 0 L 79.006 -1 Z M 80.994 0 C 81.27 0 81.494 -0.224 81.494 -0.5 C 81.494 -0.776 81.27 -1 80.994 -1 L 80.994 0 Z M 82.981 -1 C 82.705 -1 82.481 -0.776 82.481 -0.5 C 82.481 -0.224 82.705 0 82.981 0 L 82.981 -1 Z M 84.969 0 C 85.245 0 85.469 -0.224 85.469 -0.5 C 85.469 -0.776 85.245 -1 84.969 -1 L 84.969 0 Z M 86.956 -1 C 86.68 -1 86.456 -0.776 86.456 -0.5 C 86.456 -0.224 86.68 0 86.956 0 L 86.956 -1 Z M 88.944 0 C 89.22 0 89.444 -0.224 89.444 -0.5 C 89.444 -0.776 89.22 -1 88.944 -1 L 88.944 0 Z M 90.931 -1 C 90.655 -1 90.431 -0.776 90.431 -0.5 C 90.431 -0.224 90.655 0 90.931 0 L 90.931 -1 Z M 92.919 0 C 93.195 0 93.419 -0.224 93.419 -0.5 C 93.419 -0.776 93.195 -1 92.919 -1 L 92.919 0 Z M 94.906 -1 C 94.63 -1 94.406 -0.776 94.406 -0.5 C 94.406 -0.224 94.63 0 94.906 0 L 94.906 -1 Z M 96.894 0 C 97.17 0 97.394 -0.224 97.394 -0.5 C 97.394 -0.776 97.17 -1 96.894 -1 L 96.894 0 Z M 98.881 -1 C 98.605 -1 98.381 -0.776 98.381 -0.5 C 98.381 -0.224 98.605 0 98.881 0 L 98.881 -1 Z M 100.869 0 C 101.145 0 101.369 -0.224 101.369 -0.5 C 101.369 -0.776 101.145 -1 100.869 -1 L 100.869 0 Z M 102.856 -1 C 102.58 -1 102.356 -0.776 102.356 -0.5 C 102.356 -0.224 102.58 0 102.856 0 L 102.856 -1 Z M 104.844 0 C 105.12 0 105.344 -0.224 105.344 -0.5 C 105.344 -0.776 105.12 -1 104.844 -1 L 104.844 0 Z M 106.831 -1 C 106.555 -1 106.331 -0.776 106.331 -0.5 C 106.331 -0.224 106.555 0 106.831 0 L 106.831 -1 Z M 108.819 0 C 109.095 0 109.319 -0.224 109.319 -0.5 C 109.319 -0.776 109.095 -1 108.819 -1 L 108.819 0 Z M 110.806 -1 C 110.53 -1 110.306 -0.776 110.306 -0.5 C 110.306 -0.224 110.53 0 110.806 0 L 110.806 -1 Z M 112.794 0 C 113.07 0 113.294 -0.224 113.294 -0.5 C 113.294 -0.776 113.07 -1 112.794 -1 L 112.794 0 Z M 114.781 -1 C 114.505 -1 114.281 -0.776 114.281 -0.5 C 114.281 -0.224 114.505 0 114.781 0 L 114.781 -1 Z M 116.769 0 C 117.045 0 117.269 -0.224 117.269 -0.5 C 117.269 -0.776 117.045 -1 116.769 -1 L 116.769 0 Z M 118.756 -1 C 118.48 -1 118.256 -0.776 118.256 -0.5 C 118.256 -0.224 118.48 0 118.756 0 L 118.756 -1 Z M 120.744 0 C 121.02 0 121.244 -0.224 121.244 -0.5 C 121.244 -0.776 121.02 -1 120.744 -1 L 120.744 0 Z M 122.731 -1 C 122.455 -1 122.231 -0.776 122.231 -0.5 C 122.231 -0.224 122.455 0 122.731 0 L 122.731 -1 Z M 124.719 0 C 124.995 0 125.219 -0.224 125.219 -0.5 C 125.219 -0.776 124.995 -1 124.719 -1 L 124.719 0 Z M 126.706 -1 C 126.43 -1 126.206 -0.776 126.206 -0.5 C 126.206 -0.224 126.43 0 126.706 0 L 126.706 -1 Z M 128.694 0 C 128.97 0 129.194 -0.224 129.194 -0.5 C 129.194 -0.776 128.97 -1 128.694 -1 L 128.694 0 Z M 130.681 -1 C 130.405 -1 130.181 -0.776 130.181 -0.5 C 130.181 -0.224 130.405 0 130.681 0 L 130.681 -1 Z M 132.669 0 C 132.945 0 133.169 -0.224 133.169 -0.5 C 133.169 -0.776 132.945 -1 132.669 -1 L 132.669 0 Z M 134.656 -1 C 134.38 -1 134.156 -0.776 134.156 -0.5 C 134.156 -0.224 134.38 0 134.656 0 L 134.656 -1 Z M 136.644 0 C 136.92 0 137.144 -0.224 137.144 -0.5 C 137.144 -0.776 136.92 -1 136.644 -1 L 136.644 0 Z M 138.631 -1 C 138.355 -1 138.131 -0.776 138.131 -0.5 C 138.131 -0.224 138.355 0 138.631 0 L 138.631 -1 Z M 140.619 0 C 140.895 0 141.119 -0.224 141.119 -0.5 C 141.119 -0.776 140.895 -1 140.619 -1 L 140.619 0 Z M 142.606 -1 C 142.33 -1 142.106 -0.776 142.106 -0.5 C 142.106 -0.224 142.33 0 142.606 0 L 142.606 -1 Z M 144.594 0 C 144.87 0 145.094 -0.224 145.094 -0.5 C 145.094 -0.776 144.87 -1 144.594 -1 L 144.594 0 Z M 146.581 -1 C 146.305 -1 146.081 -0.776 146.081 -0.5 C 146.081 -0.224 146.305 0 146.581 0 L 146.581 -1 Z M 148.569 0 C 148.845 0 149.069 -0.224 149.069 -0.5 C 149.069 -0.776 148.845 -1 148.569 -1 L 148.569 0 Z M 150.556 -1 C 150.28 -1 150.056 -0.776 150.056 -0.5 C 150.056 -0.224 150.28 0 150.556 0 L 150.556 -1 Z M 152.544 0 C 152.82 0 153.044 -0.224 153.044 -0.5 C 153.044 -0.776 152.82 -1 152.544 -1 L 152.544 0 Z M 154.531 -1 C 154.255 -1 154.031 -0.776 154.031 -0.5 C 154.031 -0.224 154.255 0 154.531 0 L 154.531 -1 Z M 156.519 0 C 156.795 0 157.019 -0.224 157.019 -0.5 C 157.019 -0.776 156.795 -1 156.519 -1 L 156.519 0 Z M 158.506 -1 C 158.23 -1 158.006 -0.776 158.006 -0.5 C 158.006 -0.224 158.23 0 158.506 0 L 158.506 -1 Z M 0.5 0 L 1.494 0 L 1.494 -1 L 0.5 -1 L 0.5 0 Z M 3.481 0 L 5.469 0 L 5.469 -1 L 3.481 -1 L 3.481 0 Z M 7.456 0 L 9.444 0 L 9.444 -1 L 7.456 -1 L 7.456 0 Z M 11.431 0 L 13.419 0 L 13.419 -1 L 11.431 -1 L 11.431 0 Z M 15.406 0 L 17.394 0 L 17.394 -1 L 15.406 -1 L 15.406 0 Z M 19.381 0 L 21.369 0 L 21.369 -1 L 19.381 -1 L 19.381 0 Z M 23.356 0 L 25.344 0 L 25.344 -1 L 23.356 -1 L 23.356 0 Z M 27.331 0 L 29.319 0 L 29.319 -1 L 27.331 -1 L 27.331 0 Z M 31.306 0 L 33.294 0 L 33.294 -1 L 31.306 -1 L 31.306 0 Z M 35.281 0 L 37.269 0 L 37.269 -1 L 35.281 -1 L 35.281 0 Z M 39.256 0 L 41.244 0 L 41.244 -1 L 39.256 -1 L 39.256 0 Z M 43.231 0 L 45.219 0 L 45.219 -1 L 43.231 -1 L 43.231 0 Z M 47.206 0 L 49.194 0 L 49.194 -1 L 47.206 -1 L 47.206 0 Z M 51.181 0 L 53.169 0 L 53.169 -1 L 51.181 -1 L 51.181 0 Z M 55.156 0 L 57.144 0 L 57.144 -1 L 55.156 -1 L 55.156 0 Z M 59.131 0 L 61.119 0 L 61.119 -1 L 59.131 -1 L 59.131 0 Z M 63.106 0 L 65.094 0 L 65.094 -1 L 63.106 -1 L 63.106 0 Z M 67.081 0 L 69.069 0 L 69.069 -1 L 67.081 -1 L 67.081 0 Z M 71.056 0 L 73.044 0 L 73.044 -1 L 71.056 -1 L 71.056 0 Z M 75.031 0 L 77.019 0 L 77.019 -1 L 75.031 -1 L 75.031 0 Z M 79.006 0 L 80.994 0 L 80.994 -1 L 79.006 -1 L 79.006 0 Z M 82.981 0 L 84.969 0 L 84.969 -1 L 82.981 -1 L 82.981 0 Z M 86.956 0 L 88.944 0 L 88.944 -1 L 86.956 -1 L 86.956 0 Z M 90.931 0 L 92.919 0 L 92.919 -1 L 90.931 -1 L 90.931 0 Z M 94.906 0 L 96.894 0 L 96.894 -1 L 94.906 -1 L 94.906 0 Z M 98.881 0 L 100.869 0 L 100.869 -1 L 98.881 -1 L 98.881 0 Z M 102.856 0 L 104.844 0 L 104.844 -1 L 102.856 -1 L 102.856 0 Z M 106.831 0 L 108.819 0 L 108.819 -1 L 106.831 -1 L 106.831 0 Z M 110.806 0 L 112.794 0 L 112.794 -1 L 110.806 -1 L 110.806 0 Z M 114.781 0 L 116.769 0 L 116.769 -1 L 114.781 -1 L 114.781 0 Z M 118.756 0 L 120.744 0 L 120.744 -1 L 118.756 -1 L 118.756 0 Z M 122.731 0 L 124.719 0 L 124.719 -1 L 122.731 -1 L 122.731 0 Z M 126.706 0 L 128.694 0 L 128.694 -1 L 126.706 -1 L 126.706 0 Z M 130.681 0 L 132.669 0 L 132.669 -1 L 130.681 -1 L 130.681 0 Z M 134.656 0 L 136.644 0 L 136.644 -1 L 134.656 -1 L 134.656 0 Z M 138.631 0 L 140.619 0 L 140.619 -1 L 138.631 -1 L 138.631 0 Z M 142.606 0 L 144.594 0 L 144.594 -1 L 142.606 -1 L 142.606 0 Z M 146.581 0 L 148.569 0 L 148.569 -1 L 146.581 -1 L 146.581 0 Z M 150.556 0 L 152.544 0 L 152.544 -1 L 150.556 -1 L 150.556 0 Z M 154.531 0 L 156.519 0 L 156.519 -1 L 154.531 -1 L 154.531 0 Z M 158.506 0 L 159.5 0 L 159.5 -1 L 158.506 -1 L 158.506 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 16.221,
      width: 512,
      height: 125.562,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 512,
    height: 1,
    viewBox: "0 -0.500 512 1",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "matrix(-1,0,0,-1,512,0)",
      transformOrigin: "0 0",
      width: 512,
      height: 1,
      opacity: 0.32
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.5 -1 C 0.224 -1 0 -0.776 0 -0.5 C 0 -0.224 0.224 0 0.5 0 L 0.5 -1 Z M 511.5 0 C 511.776 0 512 -0.224 512 -0.5 C 512 -0.776 511.776 -1 511.5 -1 L 511.5 0 Z M 1.498 0 C 1.774 0 1.998 -0.224 1.998 -0.5 C 1.998 -0.776 1.774 -1 1.498 -1 L 1.498 0 Z M 3.494 -1 C 3.218 -1 2.994 -0.776 2.994 -0.5 C 2.994 -0.224 3.218 0 3.494 0 L 3.494 -1 Z M 5.49 0 C 5.766 0 5.99 -0.224 5.99 -0.5 C 5.99 -0.776 5.766 -1 5.49 -1 L 5.49 0 Z M 7.486 -1 C 7.21 -1 6.986 -0.776 6.986 -0.5 C 6.986 -0.224 7.21 0 7.486 0 L 7.486 -1 Z M 9.482 0 C 9.759 0 9.982 -0.224 9.982 -0.5 C 9.982 -0.776 9.759 -1 9.482 -1 L 9.482 0 Z M 11.479 -1 C 11.202 -1 10.979 -0.776 10.979 -0.5 C 10.979 -0.224 11.202 0 11.479 0 L 11.479 -1 Z M 13.475 0 C 13.751 0 13.975 -0.224 13.975 -0.5 C 13.975 -0.776 13.751 -1 13.475 -1 L 13.475 0 Z M 15.471 -1 C 15.195 -1 14.971 -0.776 14.971 -0.5 C 14.971 -0.224 15.195 0 15.471 0 L 15.471 -1 Z M 17.467 0 C 17.743 0 17.967 -0.224 17.967 -0.5 C 17.967 -0.776 17.743 -1 17.467 -1 L 17.467 0 Z M 19.463 -1 C 19.187 -1 18.963 -0.776 18.963 -0.5 C 18.963 -0.224 19.187 0 19.463 0 L 19.463 -1 Z M 21.459 0 C 21.735 0 21.959 -0.224 21.959 -0.5 C 21.959 -0.776 21.735 -1 21.459 -1 L 21.459 0 Z M 23.455 -1 C 23.179 -1 22.955 -0.776 22.955 -0.5 C 22.955 -0.224 23.179 0 23.455 0 L 23.455 -1 Z M 25.451 0 C 25.727 0 25.951 -0.224 25.951 -0.5 C 25.951 -0.776 25.727 -1 25.451 -1 L 25.451 0 Z M 27.447 -1 C 27.171 -1 26.947 -0.776 26.947 -0.5 C 26.947 -0.224 27.171 0 27.447 0 L 27.447 -1 Z M 29.443 0 C 29.72 0 29.943 -0.224 29.943 -0.5 C 29.943 -0.776 29.72 -1 29.443 -1 L 29.443 0 Z M 31.439 -1 C 31.163 -1 30.939 -0.776 30.939 -0.5 C 30.939 -0.224 31.163 0 31.439 0 L 31.439 -1 Z M 33.436 0 C 33.712 0 33.936 -0.224 33.936 -0.5 C 33.936 -0.776 33.712 -1 33.436 -1 L 33.436 0 Z M 35.432 -1 C 35.155 -1 34.932 -0.776 34.932 -0.5 C 34.932 -0.224 35.155 0 35.432 0 L 35.432 -1 Z M 37.428 0 C 37.704 0 37.928 -0.224 37.928 -0.5 C 37.928 -0.776 37.704 -1 37.428 -1 L 37.428 0 Z M 39.424 -1 C 39.148 -1 38.924 -0.776 38.924 -0.5 C 38.924 -0.224 39.148 0 39.424 0 L 39.424 -1 Z M 41.42 0 C 41.696 0 41.92 -0.224 41.92 -0.5 C 41.92 -0.776 41.696 -1 41.42 -1 L 41.42 0 Z M 43.416 -1 C 43.14 -1 42.916 -0.776 42.916 -0.5 C 42.916 -0.224 43.14 0 43.416 0 L 43.416 -1 Z M 45.412 0 C 45.688 0 45.912 -0.224 45.912 -0.5 C 45.912 -0.776 45.688 -1 45.412 -1 L 45.412 0 Z M 47.408 -1 C 47.132 -1 46.908 -0.776 46.908 -0.5 C 46.908 -0.224 47.132 0 47.408 0 L 47.408 -1 Z M 49.404 0 C 49.68 0 49.904 -0.224 49.904 -0.5 C 49.904 -0.776 49.68 -1 49.404 -1 L 49.404 0 Z M 51.4 -1 C 51.124 -1 50.9 -0.776 50.9 -0.5 C 50.9 -0.224 51.124 0 51.4 0 L 51.4 -1 Z M 53.396 0 C 53.673 0 53.896 -0.224 53.896 -0.5 C 53.896 -0.776 53.673 -1 53.396 -1 L 53.396 0 Z M 55.393 -1 C 55.116 -1 54.893 -0.776 54.893 -0.5 C 54.893 -0.224 55.116 0 55.393 0 L 55.393 -1 Z M 57.389 0 C 57.665 0 57.889 -0.224 57.889 -0.5 C 57.889 -0.776 57.665 -1 57.389 -1 L 57.389 0 Z M 59.385 -1 C 59.109 -1 58.885 -0.776 58.885 -0.5 C 58.885 -0.224 59.109 0 59.385 0 L 59.385 -1 Z M 61.381 0 C 61.657 0 61.881 -0.224 61.881 -0.5 C 61.881 -0.776 61.657 -1 61.381 -1 L 61.381 0 Z M 63.377 -1 C 63.101 -1 62.877 -0.776 62.877 -0.5 C 62.877 -0.224 63.101 0 63.377 0 L 63.377 -1 Z M 65.373 0 C 65.649 0 65.873 -0.224 65.873 -0.5 C 65.873 -0.776 65.649 -1 65.373 -1 L 65.373 0 Z M 67.369 -1 C 67.093 -1 66.869 -0.776 66.869 -0.5 C 66.869 -0.224 67.093 0 67.369 0 L 67.369 -1 Z M 69.365 0 C 69.641 0 69.865 -0.224 69.865 -0.5 C 69.865 -0.776 69.641 -1 69.365 -1 L 69.365 0 Z M 71.361 -1 C 71.085 -1 70.861 -0.776 70.861 -0.5 C 70.861 -0.224 71.085 0 71.361 0 L 71.361 -1 Z M 73.357 0 C 73.634 0 73.857 -0.224 73.857 -0.5 C 73.857 -0.776 73.634 -1 73.357 -1 L 73.357 0 Z M 75.354 -1 C 75.077 -1 74.854 -0.776 74.854 -0.5 C 74.854 -0.224 75.077 0 75.354 0 L 75.354 -1 Z M 77.35 0 C 77.626 0 77.85 -0.224 77.85 -0.5 C 77.85 -0.776 77.626 -1 77.35 -1 L 77.35 0 Z M 79.346 -1 C 79.07 -1 78.846 -0.776 78.846 -0.5 C 78.846 -0.224 79.07 0 79.346 0 L 79.346 -1 Z M 81.342 0 C 81.618 0 81.842 -0.224 81.842 -0.5 C 81.842 -0.776 81.618 -1 81.342 -1 L 81.342 0 Z M 83.338 -1 C 83.062 -1 82.838 -0.776 82.838 -0.5 C 82.838 -0.224 83.062 0 83.338 0 L 83.338 -1 Z M 85.334 0 C 85.61 0 85.834 -0.224 85.834 -0.5 C 85.834 -0.776 85.61 -1 85.334 -1 L 85.334 0 Z M 87.33 -1 C 87.054 -1 86.83 -0.776 86.83 -0.5 C 86.83 -0.224 87.054 0 87.33 0 L 87.33 -1 Z M 89.326 0 C 89.602 0 89.826 -0.224 89.826 -0.5 C 89.826 -0.776 89.602 -1 89.326 -1 L 89.326 0 Z M 91.322 -1 C 91.046 -1 90.822 -0.776 90.822 -0.5 C 90.822 -0.224 91.046 0 91.322 0 L 91.322 -1 Z M 93.318 0 C 93.595 0 93.818 -0.224 93.818 -0.5 C 93.818 -0.776 93.595 -1 93.318 -1 L 93.318 0 Z M 95.314 -1 C 95.038 -1 94.814 -0.776 94.814 -0.5 C 94.814 -0.224 95.038 0 95.314 0 L 95.314 -1 Z M 97.311 0 C 97.587 0 97.811 -0.224 97.811 -0.5 C 97.811 -0.776 97.587 -1 97.311 -1 L 97.311 0 Z M 99.307 -1 C 99.03 -1 98.807 -0.776 98.807 -0.5 C 98.807 -0.224 99.03 0 99.307 0 L 99.307 -1 Z M 101.303 0 C 101.579 0 101.803 -0.224 101.803 -0.5 C 101.803 -0.776 101.579 -1 101.303 -1 L 101.303 0 Z M 103.299 -1 C 103.023 -1 102.799 -0.776 102.799 -0.5 C 102.799 -0.224 103.023 0 103.299 0 L 103.299 -1 Z M 105.295 0 C 105.571 0 105.795 -0.224 105.795 -0.5 C 105.795 -0.776 105.571 -1 105.295 -1 L 105.295 0 Z M 107.291 -1 C 107.015 -1 106.791 -0.776 106.791 -0.5 C 106.791 -0.224 107.015 0 107.291 0 L 107.291 -1 Z M 109.287 0 C 109.563 0 109.787 -0.224 109.787 -0.5 C 109.787 -0.776 109.563 -1 109.287 -1 L 109.287 0 Z M 111.283 -1 C 111.007 -1 110.783 -0.776 110.783 -0.5 C 110.783 -0.224 111.007 0 111.283 0 L 111.283 -1 Z M 113.279 0 C 113.555 0 113.779 -0.224 113.779 -0.5 C 113.779 -0.776 113.555 -1 113.279 -1 L 113.279 0 Z M 115.275 -1 C 114.999 -1 114.775 -0.776 114.775 -0.5 C 114.775 -0.224 114.999 0 115.275 0 L 115.275 -1 Z M 117.271 0 C 117.548 0 117.771 -0.224 117.771 -0.5 C 117.771 -0.776 117.548 -1 117.271 -1 L 117.271 0 Z M 119.268 -1 C 118.991 -1 118.768 -0.776 118.768 -0.5 C 118.768 -0.224 118.991 0 119.268 0 L 119.268 -1 Z M 121.264 0 C 121.54 0 121.764 -0.224 121.764 -0.5 C 121.764 -0.776 121.54 -1 121.264 -1 L 121.264 0 Z M 123.26 -1 C 122.984 -1 122.76 -0.776 122.76 -0.5 C 122.76 -0.224 122.984 0 123.26 0 L 123.26 -1 Z M 125.256 0 C 125.532 0 125.756 -0.224 125.756 -0.5 C 125.756 -0.776 125.532 -1 125.256 -1 L 125.256 0 Z M 127.252 -1 C 126.976 -1 126.752 -0.776 126.752 -0.5 C 126.752 -0.224 126.976 0 127.252 0 L 127.252 -1 Z M 129.248 0 C 129.524 0 129.748 -0.224 129.748 -0.5 C 129.748 -0.776 129.524 -1 129.248 -1 L 129.248 0 Z M 131.244 -1 C 130.968 -1 130.744 -0.776 130.744 -0.5 C 130.744 -0.224 130.968 0 131.244 0 L 131.244 -1 Z M 133.24 0 C 133.516 0 133.74 -0.224 133.74 -0.5 C 133.74 -0.776 133.516 -1 133.24 -1 L 133.24 0 Z M 135.236 -1 C 134.96 -1 134.736 -0.776 134.736 -0.5 C 134.736 -0.224 134.96 0 135.236 0 L 135.236 -1 Z M 137.232 0 C 137.509 0 137.732 -0.224 137.732 -0.5 C 137.732 -0.776 137.509 -1 137.232 -1 L 137.232 0 Z M 139.229 -1 C 138.952 -1 138.729 -0.776 138.729 -0.5 C 138.729 -0.224 138.952 0 139.229 0 L 139.229 -1 Z M 141.225 0 C 141.501 0 141.725 -0.224 141.725 -0.5 C 141.725 -0.776 141.501 -1 141.225 -1 L 141.225 0 Z M 143.221 -1 C 142.945 -1 142.721 -0.776 142.721 -0.5 C 142.721 -0.224 142.945 0 143.221 0 L 143.221 -1 Z M 145.217 0 C 145.493 0 145.717 -0.224 145.717 -0.5 C 145.717 -0.776 145.493 -1 145.217 -1 L 145.217 0 Z M 147.213 -1 C 146.937 -1 146.713 -0.776 146.713 -0.5 C 146.713 -0.224 146.937 0 147.213 0 L 147.213 -1 Z M 149.209 0 C 149.485 0 149.709 -0.224 149.709 -0.5 C 149.709 -0.776 149.485 -1 149.209 -1 L 149.209 0 Z M 151.205 -1 C 150.929 -1 150.705 -0.776 150.705 -0.5 C 150.705 -0.224 150.929 0 151.205 0 L 151.205 -1 Z M 153.201 0 C 153.477 0 153.701 -0.224 153.701 -0.5 C 153.701 -0.776 153.477 -1 153.201 -1 L 153.201 0 Z M 155.197 -1 C 154.921 -1 154.697 -0.776 154.697 -0.5 C 154.697 -0.224 154.921 0 155.197 0 L 155.197 -1 Z M 157.193 0 C 157.469 0 157.693 -0.224 157.693 -0.5 C 157.693 -0.776 157.469 -1 157.193 -1 L 157.193 0 Z M 159.189 -1 C 158.913 -1 158.689 -0.776 158.689 -0.5 C 158.689 -0.224 158.913 0 159.189 0 L 159.189 -1 Z M 161.186 0 C 161.462 0 161.686 -0.224 161.686 -0.5 C 161.686 -0.776 161.462 -1 161.186 -1 L 161.186 0 Z M 163.182 -1 C 162.906 -1 162.682 -0.776 162.682 -0.5 C 162.682 -0.224 162.906 0 163.182 0 L 163.182 -1 Z M 165.178 0 C 165.454 0 165.678 -0.224 165.678 -0.5 C 165.678 -0.776 165.454 -1 165.178 -1 L 165.178 0 Z M 167.174 -1 C 166.898 -1 166.674 -0.776 166.674 -0.5 C 166.674 -0.224 166.898 0 167.174 0 L 167.174 -1 Z M 169.17 0 C 169.446 0 169.67 -0.224 169.67 -0.5 C 169.67 -0.776 169.446 -1 169.17 -1 L 169.17 0 Z M 171.166 -1 C 170.89 -1 170.666 -0.776 170.666 -0.5 C 170.666 -0.224 170.89 0 171.166 0 L 171.166 -1 Z M 173.162 0 C 173.438 0 173.662 -0.224 173.662 -0.5 C 173.662 -0.776 173.438 -1 173.162 -1 L 173.162 0 Z M 175.158 -1 C 174.882 -1 174.658 -0.776 174.658 -0.5 C 174.658 -0.224 174.882 0 175.158 0 L 175.158 -1 Z M 177.154 0 C 177.43 0 177.654 -0.224 177.654 -0.5 C 177.654 -0.776 177.43 -1 177.154 -1 L 177.154 0 Z M 179.15 -1 C 178.874 -1 178.65 -0.776 178.65 -0.5 C 178.65 -0.224 178.874 0 179.15 0 L 179.15 -1 Z M 181.146 0 C 181.423 0 181.646 -0.224 181.646 -0.5 C 181.646 -0.776 181.423 -1 181.146 -1 L 181.146 0 Z M 183.143 -1 C 182.866 -1 182.643 -0.776 182.643 -0.5 C 182.643 -0.224 182.866 0 183.143 0 L 183.143 -1 Z M 185.139 0 C 185.415 0 185.639 -0.224 185.639 -0.5 C 185.639 -0.776 185.415 -1 185.139 -1 L 185.139 0 Z M 187.135 -1 C 186.859 -1 186.635 -0.776 186.635 -0.5 C 186.635 -0.224 186.859 0 187.135 0 L 187.135 -1 Z M 189.131 0 C 189.407 0 189.631 -0.224 189.631 -0.5 C 189.631 -0.776 189.407 -1 189.131 -1 L 189.131 0 Z M 191.127 -1 C 190.851 -1 190.627 -0.776 190.627 -0.5 C 190.627 -0.224 190.851 0 191.127 0 L 191.127 -1 Z M 193.123 0 C 193.399 0 193.623 -0.224 193.623 -0.5 C 193.623 -0.776 193.399 -1 193.123 -1 L 193.123 0 Z M 195.119 -1 C 194.843 -1 194.619 -0.776 194.619 -0.5 C 194.619 -0.224 194.843 0 195.119 0 L 195.119 -1 Z M 197.115 0 C 197.391 0 197.615 -0.224 197.615 -0.5 C 197.615 -0.776 197.391 -1 197.115 -1 L 197.115 0 Z M 199.111 -1 C 198.835 -1 198.611 -0.776 198.611 -0.5 C 198.611 -0.224 198.835 0 199.111 0 L 199.111 -1 Z M 201.107 0 C 201.384 0 201.607 -0.224 201.607 -0.5 C 201.607 -0.776 201.384 -1 201.107 -1 L 201.107 0 Z M 203.104 -1 C 202.827 -1 202.604 -0.776 202.604 -0.5 C 202.604 -0.224 202.827 0 203.104 0 L 203.104 -1 Z M 205.1 0 C 205.376 0 205.6 -0.224 205.6 -0.5 C 205.6 -0.776 205.376 -1 205.1 -1 L 205.1 0 Z M 207.096 -1 C 206.82 -1 206.596 -0.776 206.596 -0.5 C 206.596 -0.224 206.82 0 207.096 0 L 207.096 -1 Z M 209.092 0 C 209.368 0 209.592 -0.224 209.592 -0.5 C 209.592 -0.776 209.368 -1 209.092 -1 L 209.092 0 Z M 211.088 -1 C 210.812 -1 210.588 -0.776 210.588 -0.5 C 210.588 -0.224 210.812 0 211.088 0 L 211.088 -1 Z M 213.084 0 C 213.36 0 213.584 -0.224 213.584 -0.5 C 213.584 -0.776 213.36 -1 213.084 -1 L 213.084 0 Z M 215.08 -1 C 214.804 -1 214.58 -0.776 214.58 -0.5 C 214.58 -0.224 214.804 0 215.08 0 L 215.08 -1 Z M 217.076 0 C 217.352 0 217.576 -0.224 217.576 -0.5 C 217.576 -0.776 217.352 -1 217.076 -1 L 217.076 0 Z M 219.072 -1 C 218.796 -1 218.572 -0.776 218.572 -0.5 C 218.572 -0.224 218.796 0 219.072 0 L 219.072 -1 Z M 221.068 0 C 221.344 0 221.568 -0.224 221.568 -0.5 C 221.568 -0.776 221.344 -1 221.068 -1 L 221.068 0 Z M 223.064 -1 C 222.788 -1 222.564 -0.776 222.564 -0.5 C 222.564 -0.224 222.788 0 223.064 0 L 223.064 -1 Z M 225.061 0 C 225.337 0 225.561 -0.224 225.561 -0.5 C 225.561 -0.776 225.337 -1 225.061 -1 L 225.061 0 Z M 227.057 -1 C 226.781 -1 226.557 -0.776 226.557 -0.5 C 226.557 -0.224 226.781 0 227.057 0 L 227.057 -1 Z M 229.053 0 C 229.329 0 229.553 -0.224 229.553 -0.5 C 229.553 -0.776 229.329 -1 229.053 -1 L 229.053 0 Z M 231.049 -1 C 230.773 -1 230.549 -0.776 230.549 -0.5 C 230.549 -0.224 230.773 0 231.049 0 L 231.049 -1 Z M 233.045 0 C 233.321 0 233.545 -0.224 233.545 -0.5 C 233.545 -0.776 233.321 -1 233.045 -1 L 233.045 0 Z M 235.041 -1 C 234.765 -1 234.541 -0.776 234.541 -0.5 C 234.541 -0.224 234.765 0 235.041 0 L 235.041 -1 Z M 237.037 0 C 237.313 0 237.537 -0.224 237.537 -0.5 C 237.537 -0.776 237.313 -1 237.037 -1 L 237.037 0 Z M 239.033 -1 C 238.757 -1 238.533 -0.776 238.533 -0.5 C 238.533 -0.224 238.757 0 239.033 0 L 239.033 -1 Z M 241.029 0 C 241.305 0 241.529 -0.224 241.529 -0.5 C 241.529 -0.776 241.305 -1 241.029 -1 L 241.029 0 Z M 243.025 -1 C 242.749 -1 242.525 -0.776 242.525 -0.5 C 242.525 -0.224 242.749 0 243.025 0 L 243.025 -1 Z M 245.021 0 C 245.298 0 245.521 -0.224 245.521 -0.5 C 245.521 -0.776 245.298 -1 245.021 -1 L 245.021 0 Z M 247.018 -1 C 246.741 -1 246.518 -0.776 246.518 -0.5 C 246.518 -0.224 246.741 0 247.018 0 L 247.018 -1 Z M 249.014 0 C 249.29 0 249.514 -0.224 249.514 -0.5 C 249.514 -0.776 249.29 -1 249.014 -1 L 249.014 0 Z M 251.01 -1 C 250.734 -1 250.51 -0.776 250.51 -0.5 C 250.51 -0.224 250.734 0 251.01 0 L 251.01 -1 Z M 253.006 0 C 253.282 0 253.506 -0.224 253.506 -0.5 C 253.506 -0.776 253.282 -1 253.006 -1 L 253.006 0 Z M 255.002 -1 C 254.726 -1 254.502 -0.776 254.502 -0.5 C 254.502 -0.224 254.726 0 255.002 0 L 255.002 -1 Z M 256.998 0 C 257.274 0 257.498 -0.224 257.498 -0.5 C 257.498 -0.776 257.274 -1 256.998 -1 L 256.998 0 Z M 258.994 -1 C 258.718 -1 258.494 -0.776 258.494 -0.5 C 258.494 -0.224 258.718 0 258.994 0 L 258.994 -1 Z M 260.99 0 C 261.266 0 261.49 -0.224 261.49 -0.5 C 261.49 -0.776 261.266 -1 260.99 -1 L 260.99 0 Z M 262.986 -1 C 262.71 -1 262.486 -0.776 262.486 -0.5 C 262.486 -0.224 262.71 0 262.986 0 L 262.986 -1 Z M 264.982 0 C 265.259 0 265.482 -0.224 265.482 -0.5 C 265.482 -0.776 265.259 -1 264.982 -1 L 264.982 0 Z M 266.979 -1 C 266.702 -1 266.479 -0.776 266.479 -0.5 C 266.479 -0.224 266.702 0 266.979 0 L 266.979 -1 Z M 268.975 0 C 269.251 0 269.475 -0.224 269.475 -0.5 C 269.475 -0.776 269.251 -1 268.975 -1 L 268.975 0 Z M 270.971 -1 C 270.695 -1 270.471 -0.776 270.471 -0.5 C 270.471 -0.224 270.695 0 270.971 0 L 270.971 -1 Z M 272.967 0 C 273.243 0 273.467 -0.224 273.467 -0.5 C 273.467 -0.776 273.243 -1 272.967 -1 L 272.967 0 Z M 274.963 -1 C 274.687 -1 274.463 -0.776 274.463 -0.5 C 274.463 -0.224 274.687 0 274.963 0 L 274.963 -1 Z M 276.959 0 C 277.235 0 277.459 -0.224 277.459 -0.5 C 277.459 -0.776 277.235 -1 276.959 -1 L 276.959 0 Z M 278.955 -1 C 278.679 -1 278.455 -0.776 278.455 -0.5 C 278.455 -0.224 278.679 0 278.955 0 L 278.955 -1 Z M 280.951 0 C 281.227 0 281.451 -0.224 281.451 -0.5 C 281.451 -0.776 281.227 -1 280.951 -1 L 280.951 0 Z M 282.947 -1 C 282.671 -1 282.447 -0.776 282.447 -0.5 C 282.447 -0.224 282.671 0 282.947 0 L 282.947 -1 Z M 284.943 0 C 285.22 0 285.443 -0.224 285.443 -0.5 C 285.443 -0.776 285.22 -1 284.943 -1 L 284.943 0 Z M 286.939 -1 C 286.663 -1 286.439 -0.776 286.439 -0.5 C 286.439 -0.224 286.663 0 286.939 0 L 286.939 -1 Z M 288.936 0 C 289.212 0 289.436 -0.224 289.436 -0.5 C 289.436 -0.776 289.212 -1 288.936 -1 L 288.936 0 Z M 290.932 -1 C 290.655 -1 290.432 -0.776 290.432 -0.5 C 290.432 -0.224 290.655 0 290.932 0 L 290.932 -1 Z M 292.928 0 C 293.204 0 293.428 -0.224 293.428 -0.5 C 293.428 -0.776 293.204 -1 292.928 -1 L 292.928 0 Z M 294.924 -1 C 294.648 -1 294.424 -0.776 294.424 -0.5 C 294.424 -0.224 294.648 0 294.924 0 L 294.924 -1 Z M 296.92 0 C 297.196 0 297.42 -0.224 297.42 -0.5 C 297.42 -0.776 297.196 -1 296.92 -1 L 296.92 0 Z M 298.916 -1 C 298.64 -1 298.416 -0.776 298.416 -0.5 C 298.416 -0.224 298.64 0 298.916 0 L 298.916 -1 Z M 300.912 0 C 301.188 0 301.412 -0.224 301.412 -0.5 C 301.412 -0.776 301.188 -1 300.912 -1 L 300.912 0 Z M 302.908 -1 C 302.632 -1 302.408 -0.776 302.408 -0.5 C 302.408 -0.224 302.632 0 302.908 0 L 302.908 -1 Z M 304.904 0 C 305.18 0 305.404 -0.224 305.404 -0.5 C 305.404 -0.776 305.18 -1 304.904 -1 L 304.904 0 Z M 306.9 -1 C 306.624 -1 306.4 -0.776 306.4 -0.5 C 306.4 -0.224 306.624 0 306.9 0 L 306.9 -1 Z M 308.896 0 C 309.173 0 309.396 -0.224 309.396 -0.5 C 309.396 -0.776 309.173 -1 308.896 -1 L 308.896 0 Z M 310.893 -1 C 310.616 -1 310.393 -0.776 310.393 -0.5 C 310.393 -0.224 310.616 0 310.893 0 L 310.893 -1 Z M 312.889 0 C 313.165 0 313.389 -0.224 313.389 -0.5 C 313.389 -0.776 313.165 -1 312.889 -1 L 312.889 0 Z M 314.885 -1 C 314.609 -1 314.385 -0.776 314.385 -0.5 C 314.385 -0.224 314.609 0 314.885 0 L 314.885 -1 Z M 316.881 0 C 317.157 0 317.381 -0.224 317.381 -0.5 C 317.381 -0.776 317.157 -1 316.881 -1 L 316.881 0 Z M 318.877 -1 C 318.601 -1 318.377 -0.776 318.377 -0.5 C 318.377 -0.224 318.601 0 318.877 0 L 318.877 -1 Z M 320.873 0 C 321.149 0 321.373 -0.224 321.373 -0.5 C 321.373 -0.776 321.149 -1 320.873 -1 L 320.873 0 Z M 322.869 -1 C 322.593 -1 322.369 -0.776 322.369 -0.5 C 322.369 -0.224 322.593 0 322.869 0 L 322.869 -1 Z M 324.865 0 C 325.141 0 325.365 -0.224 325.365 -0.5 C 325.365 -0.776 325.141 -1 324.865 -1 L 324.865 0 Z M 326.861 -1 C 326.585 -1 326.361 -0.776 326.361 -0.5 C 326.361 -0.224 326.585 0 326.861 0 L 326.861 -1 Z M 328.857 0 C 329.134 0 329.357 -0.224 329.357 -0.5 C 329.357 -0.776 329.134 -1 328.857 -1 L 328.857 0 Z M 330.854 -1 C 330.577 -1 330.354 -0.776 330.354 -0.5 C 330.354 -0.224 330.577 0 330.854 0 L 330.854 -1 Z M 332.85 0 C 333.126 0 333.35 -0.224 333.35 -0.5 C 333.35 -0.776 333.126 -1 332.85 -1 L 332.85 0 Z M 334.846 -1 C 334.57 -1 334.346 -0.776 334.346 -0.5 C 334.346 -0.224 334.57 0 334.846 0 L 334.846 -1 Z M 336.842 0 C 337.118 0 337.342 -0.224 337.342 -0.5 C 337.342 -0.776 337.118 -1 336.842 -1 L 336.842 0 Z M 338.838 -1 C 338.562 -1 338.338 -0.776 338.338 -0.5 C 338.338 -0.224 338.562 0 338.838 0 L 338.838 -1 Z M 340.834 0 C 341.11 0 341.334 -0.224 341.334 -0.5 C 341.334 -0.776 341.11 -1 340.834 -1 L 340.834 0 Z M 342.83 -1 C 342.554 -1 342.33 -0.776 342.33 -0.5 C 342.33 -0.224 342.554 0 342.83 0 L 342.83 -1 Z M 344.826 0 C 345.102 0 345.326 -0.224 345.326 -0.5 C 345.326 -0.776 345.102 -1 344.826 -1 L 344.826 0 Z M 346.822 -1 C 346.546 -1 346.322 -0.776 346.322 -0.5 C 346.322 -0.224 346.546 0 346.822 0 L 346.822 -1 Z M 348.818 0 C 349.095 0 349.318 -0.224 349.318 -0.5 C 349.318 -0.776 349.095 -1 348.818 -1 L 348.818 0 Z M 350.814 -1 C 350.538 -1 350.314 -0.776 350.314 -0.5 C 350.314 -0.224 350.538 0 350.814 0 L 350.814 -1 Z M 352.811 0 C 353.087 0 353.311 -0.224 353.311 -0.5 C 353.311 -0.776 353.087 -1 352.811 -1 L 352.811 0 Z M 354.807 -1 C 354.53 -1 354.307 -0.776 354.307 -0.5 C 354.307 -0.224 354.53 0 354.807 0 L 354.807 -1 Z M 356.803 0 C 357.079 0 357.303 -0.224 357.303 -0.5 C 357.303 -0.776 357.079 -1 356.803 -1 L 356.803 0 Z M 358.799 -1 C 358.523 -1 358.299 -0.776 358.299 -0.5 C 358.299 -0.224 358.523 0 358.799 0 L 358.799 -1 Z M 360.795 0 C 361.071 0 361.295 -0.224 361.295 -0.5 C 361.295 -0.776 361.071 -1 360.795 -1 L 360.795 0 Z M 362.791 -1 C 362.515 -1 362.291 -0.776 362.291 -0.5 C 362.291 -0.224 362.515 0 362.791 0 L 362.791 -1 Z M 364.787 0 C 365.063 0 365.287 -0.224 365.287 -0.5 C 365.287 -0.776 365.063 -1 364.787 -1 L 364.787 0 Z M 366.783 -1 C 366.507 -1 366.283 -0.776 366.283 -0.5 C 366.283 -0.224 366.507 0 366.783 0 L 366.783 -1 Z M 368.779 0 C 369.055 0 369.279 -0.224 369.279 -0.5 C 369.279 -0.776 369.055 -1 368.779 -1 L 368.779 0 Z M 370.775 -1 C 370.499 -1 370.275 -0.776 370.275 -0.5 C 370.275 -0.224 370.499 0 370.775 0 L 370.775 -1 Z M 372.771 0 C 373.048 0 373.271 -0.224 373.271 -0.5 C 373.271 -0.776 373.048 -1 372.771 -1 L 372.771 0 Z M 374.768 -1 C 374.491 -1 374.268 -0.776 374.268 -0.5 C 374.268 -0.224 374.491 0 374.768 0 L 374.768 -1 Z M 376.764 0 C 377.04 0 377.264 -0.224 377.264 -0.5 C 377.264 -0.776 377.04 -1 376.764 -1 L 376.764 0 Z M 378.76 -1 C 378.484 -1 378.26 -0.776 378.26 -0.5 C 378.26 -0.224 378.484 0 378.76 0 L 378.76 -1 Z M 380.756 0 C 381.032 0 381.256 -0.224 381.256 -0.5 C 381.256 -0.776 381.032 -1 380.756 -1 L 380.756 0 Z M 382.752 -1 C 382.476 -1 382.252 -0.776 382.252 -0.5 C 382.252 -0.224 382.476 0 382.752 0 L 382.752 -1 Z M 384.748 0 C 385.024 0 385.248 -0.224 385.248 -0.5 C 385.248 -0.776 385.024 -1 384.748 -1 L 384.748 0 Z M 386.744 -1 C 386.468 -1 386.244 -0.776 386.244 -0.5 C 386.244 -0.224 386.468 0 386.744 0 L 386.744 -1 Z M 388.74 0 C 389.016 0 389.24 -0.224 389.24 -0.5 C 389.24 -0.776 389.016 -1 388.74 -1 L 388.74 0 Z M 390.736 -1 C 390.46 -1 390.236 -0.776 390.236 -0.5 C 390.236 -0.224 390.46 0 390.736 0 L 390.736 -1 Z M 392.732 0 C 393.009 0 393.232 -0.224 393.232 -0.5 C 393.232 -0.776 393.009 -1 392.732 -1 L 392.732 0 Z M 394.729 -1 C 394.452 -1 394.229 -0.776 394.229 -0.5 C 394.229 -0.224 394.452 0 394.729 0 L 394.729 -1 Z M 396.725 0 C 397.001 0 397.225 -0.224 397.225 -0.5 C 397.225 -0.776 397.001 -1 396.725 -1 L 396.725 0 Z M 398.721 -1 C 398.445 -1 398.221 -0.776 398.221 -0.5 C 398.221 -0.224 398.445 0 398.721 0 L 398.721 -1 Z M 400.717 0 C 400.993 0 401.217 -0.224 401.217 -0.5 C 401.217 -0.776 400.993 -1 400.717 -1 L 400.717 0 Z M 402.713 -1 C 402.437 -1 402.213 -0.776 402.213 -0.5 C 402.213 -0.224 402.437 0 402.713 0 L 402.713 -1 Z M 404.709 0 C 404.985 0 405.209 -0.224 405.209 -0.5 C 405.209 -0.776 404.985 -1 404.709 -1 L 404.709 0 Z M 406.705 -1 C 406.429 -1 406.205 -0.776 406.205 -0.5 C 406.205 -0.224 406.429 0 406.705 0 L 406.705 -1 Z M 408.701 0 C 408.977 0 409.201 -0.224 409.201 -0.5 C 409.201 -0.776 408.977 -1 408.701 -1 L 408.701 0 Z M 410.697 -1 C 410.421 -1 410.197 -0.776 410.197 -0.5 C 410.197 -0.224 410.421 0 410.697 0 L 410.697 -1 Z M 412.693 0 C 412.97 0 413.193 -0.224 413.193 -0.5 C 413.193 -0.776 412.97 -1 412.693 -1 L 412.693 0 Z M 414.689 -1 C 414.413 -1 414.189 -0.776 414.189 -0.5 C 414.189 -0.224 414.413 0 414.689 0 L 414.689 -1 Z M 416.686 0 C 416.962 0 417.186 -0.224 417.186 -0.5 C 417.186 -0.776 416.962 -1 416.686 -1 L 416.686 0 Z M 418.682 -1 C 418.405 -1 418.182 -0.776 418.182 -0.5 C 418.182 -0.224 418.405 0 418.682 0 L 418.682 -1 Z M 420.678 0 C 420.954 0 421.178 -0.224 421.178 -0.5 C 421.178 -0.776 420.954 -1 420.678 -1 L 420.678 0 Z M 422.674 -1 C 422.398 -1 422.174 -0.776 422.174 -0.5 C 422.174 -0.224 422.398 0 422.674 0 L 422.674 -1 Z M 424.67 0 C 424.946 0 425.17 -0.224 425.17 -0.5 C 425.17 -0.776 424.946 -1 424.67 -1 L 424.67 0 Z M 426.666 -1 C 426.39 -1 426.166 -0.776 426.166 -0.5 C 426.166 -0.224 426.39 0 426.666 0 L 426.666 -1 Z M 428.662 0 C 428.938 0 429.162 -0.224 429.162 -0.5 C 429.162 -0.776 428.938 -1 428.662 -1 L 428.662 0 Z M 430.658 -1 C 430.382 -1 430.158 -0.776 430.158 -0.5 C 430.158 -0.224 430.382 0 430.658 0 L 430.658 -1 Z M 432.654 0 C 432.93 0 433.154 -0.224 433.154 -0.5 C 433.154 -0.776 432.93 -1 432.654 -1 L 432.654 0 Z M 434.65 -1 C 434.374 -1 434.15 -0.776 434.15 -0.5 C 434.15 -0.224 434.374 0 434.65 0 L 434.65 -1 Z M 436.646 0 C 436.923 0 437.146 -0.224 437.146 -0.5 C 437.146 -0.776 436.923 -1 436.646 -1 L 436.646 0 Z M 438.643 -1 C 438.366 -1 438.143 -0.776 438.143 -0.5 C 438.143 -0.224 438.366 0 438.643 0 L 438.643 -1 Z M 440.639 0 C 440.915 0 441.139 -0.224 441.139 -0.5 C 441.139 -0.776 440.915 -1 440.639 -1 L 440.639 0 Z M 442.635 -1 C 442.359 -1 442.135 -0.776 442.135 -0.5 C 442.135 -0.224 442.359 0 442.635 0 L 442.635 -1 Z M 444.631 0 C 444.907 0 445.131 -0.224 445.131 -0.5 C 445.131 -0.776 444.907 -1 444.631 -1 L 444.631 0 Z M 446.627 -1 C 446.351 -1 446.127 -0.776 446.127 -0.5 C 446.127 -0.224 446.351 0 446.627 0 L 446.627 -1 Z M 448.623 0 C 448.899 0 449.123 -0.224 449.123 -0.5 C 449.123 -0.776 448.899 -1 448.623 -1 L 448.623 0 Z M 450.619 -1 C 450.343 -1 450.119 -0.776 450.119 -0.5 C 450.119 -0.224 450.343 0 450.619 0 L 450.619 -1 Z M 452.615 0 C 452.891 0 453.115 -0.224 453.115 -0.5 C 453.115 -0.776 452.891 -1 452.615 -1 L 452.615 0 Z M 454.611 -1 C 454.335 -1 454.111 -0.776 454.111 -0.5 C 454.111 -0.224 454.335 0 454.611 0 L 454.611 -1 Z M 456.607 0 C 456.884 0 457.107 -0.224 457.107 -0.5 C 457.107 -0.776 456.884 -1 456.607 -1 L 456.607 0 Z M 458.604 -1 C 458.327 -1 458.104 -0.776 458.104 -0.5 C 458.104 -0.224 458.327 0 458.604 0 L 458.604 -1 Z M 460.6 0 C 460.876 0 461.1 -0.224 461.1 -0.5 C 461.1 -0.776 460.876 -1 460.6 -1 L 460.6 0 Z M 462.596 -1 C 462.32 -1 462.096 -0.776 462.096 -0.5 C 462.096 -0.224 462.32 0 462.596 0 L 462.596 -1 Z M 464.592 0 C 464.868 0 465.092 -0.224 465.092 -0.5 C 465.092 -0.776 464.868 -1 464.592 -1 L 464.592 0 Z M 466.588 -1 C 466.312 -1 466.088 -0.776 466.088 -0.5 C 466.088 -0.224 466.312 0 466.588 0 L 466.588 -1 Z M 468.584 0 C 468.86 0 469.084 -0.224 469.084 -0.5 C 469.084 -0.776 468.86 -1 468.584 -1 L 468.584 0 Z M 470.58 -1 C 470.304 -1 470.08 -0.776 470.08 -0.5 C 470.08 -0.224 470.304 0 470.58 0 L 470.58 -1 Z M 472.576 0 C 472.852 0 473.076 -0.224 473.076 -0.5 C 473.076 -0.776 472.852 -1 472.576 -1 L 472.576 0 Z M 474.572 -1 C 474.296 -1 474.072 -0.776 474.072 -0.5 C 474.072 -0.224 474.296 0 474.572 0 L 474.572 -1 Z M 476.568 0 C 476.845 0 477.068 -0.224 477.068 -0.5 C 477.068 -0.776 476.845 -1 476.568 -1 L 476.568 0 Z M 478.564 -1 C 478.288 -1 478.064 -0.776 478.064 -0.5 C 478.064 -0.224 478.288 0 478.564 0 L 478.564 -1 Z M 480.561 0 C 480.837 0 481.061 -0.224 481.061 -0.5 C 481.061 -0.776 480.837 -1 480.561 -1 L 480.561 0 Z M 482.557 -1 C 482.28 -1 482.057 -0.776 482.057 -0.5 C 482.057 -0.224 482.28 0 482.557 0 L 482.557 -1 Z M 484.553 0 C 484.829 0 485.053 -0.224 485.053 -0.5 C 485.053 -0.776 484.829 -1 484.553 -1 L 484.553 0 Z M 486.549 -1 C 486.273 -1 486.049 -0.776 486.049 -0.5 C 486.049 -0.224 486.273 0 486.549 0 L 486.549 -1 Z M 488.545 0 C 488.821 0 489.045 -0.224 489.045 -0.5 C 489.045 -0.776 488.821 -1 488.545 -1 L 488.545 0 Z M 490.541 -1 C 490.265 -1 490.041 -0.776 490.041 -0.5 C 490.041 -0.224 490.265 0 490.541 0 L 490.541 -1 Z M 492.537 0 C 492.813 0 493.037 -0.224 493.037 -0.5 C 493.037 -0.776 492.813 -1 492.537 -1 L 492.537 0 Z M 494.533 -1 C 494.257 -1 494.033 -0.776 494.033 -0.5 C 494.033 -0.224 494.257 0 494.533 0 L 494.533 -1 Z M 496.529 0 C 496.805 0 497.029 -0.224 497.029 -0.5 C 497.029 -0.776 496.805 -1 496.529 -1 L 496.529 0 Z M 498.525 -1 C 498.249 -1 498.025 -0.776 498.025 -0.5 C 498.025 -0.224 498.249 0 498.525 0 L 498.525 -1 Z M 500.521 0 C 500.798 0 501.021 -0.224 501.021 -0.5 C 501.021 -0.776 500.798 -1 500.521 -1 L 500.521 0 Z M 502.518 -1 C 502.241 -1 502.018 -0.776 502.018 -0.5 C 502.018 -0.224 502.241 0 502.518 0 L 502.518 -1 Z M 504.514 0 C 504.79 0 505.014 -0.224 505.014 -0.5 C 505.014 -0.776 504.79 -1 504.514 -1 L 504.514 0 Z M 506.51 -1 C 506.234 -1 506.01 -0.776 506.01 -0.5 C 506.01 -0.224 506.234 0 506.51 0 L 506.51 -1 Z M 508.506 0 C 508.782 0 509.006 -0.224 509.006 -0.5 C 509.006 -0.776 508.782 -1 508.506 -1 L 508.506 0 Z M 510.502 -1 C 510.226 -1 510.002 -0.776 510.002 -0.5 C 510.002 -0.224 510.226 0 510.502 0 L 510.502 -1 Z M 0.5 0 L 1.498 0 L 1.498 -1 L 0.5 -1 L 0.5 0 Z M 3.494 0 L 5.49 0 L 5.49 -1 L 3.494 -1 L 3.494 0 Z M 7.486 0 L 9.482 0 L 9.482 -1 L 7.486 -1 L 7.486 0 Z M 11.479 0 L 13.475 0 L 13.475 -1 L 11.479 -1 L 11.479 0 Z M 15.471 0 L 17.467 0 L 17.467 -1 L 15.471 -1 L 15.471 0 Z M 19.463 0 L 21.459 0 L 21.459 -1 L 19.463 -1 L 19.463 0 Z M 23.455 0 L 25.451 0 L 25.451 -1 L 23.455 -1 L 23.455 0 Z M 27.447 0 L 29.443 0 L 29.443 -1 L 27.447 -1 L 27.447 0 Z M 31.439 0 L 33.436 0 L 33.436 -1 L 31.439 -1 L 31.439 0 Z M 35.432 0 L 37.428 0 L 37.428 -1 L 35.432 -1 L 35.432 0 Z M 39.424 0 L 41.42 0 L 41.42 -1 L 39.424 -1 L 39.424 0 Z M 43.416 0 L 45.412 0 L 45.412 -1 L 43.416 -1 L 43.416 0 Z M 47.408 0 L 49.404 0 L 49.404 -1 L 47.408 -1 L 47.408 0 Z M 51.4 0 L 53.396 0 L 53.396 -1 L 51.4 -1 L 51.4 0 Z M 55.393 0 L 57.389 0 L 57.389 -1 L 55.393 -1 L 55.393 0 Z M 59.385 0 L 61.381 0 L 61.381 -1 L 59.385 -1 L 59.385 0 Z M 63.377 0 L 65.373 0 L 65.373 -1 L 63.377 -1 L 63.377 0 Z M 67.369 0 L 69.365 0 L 69.365 -1 L 67.369 -1 L 67.369 0 Z M 71.361 0 L 73.357 0 L 73.357 -1 L 71.361 -1 L 71.361 0 Z M 75.354 0 L 77.35 0 L 77.35 -1 L 75.354 -1 L 75.354 0 Z M 79.346 0 L 81.342 0 L 81.342 -1 L 79.346 -1 L 79.346 0 Z M 83.338 0 L 85.334 0 L 85.334 -1 L 83.338 -1 L 83.338 0 Z M 87.33 0 L 89.326 0 L 89.326 -1 L 87.33 -1 L 87.33 0 Z M 91.322 0 L 93.318 0 L 93.318 -1 L 91.322 -1 L 91.322 0 Z M 95.314 0 L 97.311 0 L 97.311 -1 L 95.314 -1 L 95.314 0 Z M 99.307 0 L 101.303 0 L 101.303 -1 L 99.307 -1 L 99.307 0 Z M 103.299 0 L 105.295 0 L 105.295 -1 L 103.299 -1 L 103.299 0 Z M 107.291 0 L 109.287 0 L 109.287 -1 L 107.291 -1 L 107.291 0 Z M 111.283 0 L 113.279 0 L 113.279 -1 L 111.283 -1 L 111.283 0 Z M 115.275 0 L 117.271 0 L 117.271 -1 L 115.275 -1 L 115.275 0 Z M 119.268 0 L 121.264 0 L 121.264 -1 L 119.268 -1 L 119.268 0 Z M 123.26 0 L 125.256 0 L 125.256 -1 L 123.26 -1 L 123.26 0 Z M 127.252 0 L 129.248 0 L 129.248 -1 L 127.252 -1 L 127.252 0 Z M 131.244 0 L 133.24 0 L 133.24 -1 L 131.244 -1 L 131.244 0 Z M 135.236 0 L 137.232 0 L 137.232 -1 L 135.236 -1 L 135.236 0 Z M 139.229 0 L 141.225 0 L 141.225 -1 L 139.229 -1 L 139.229 0 Z M 143.221 0 L 145.217 0 L 145.217 -1 L 143.221 -1 L 143.221 0 Z M 147.213 0 L 149.209 0 L 149.209 -1 L 147.213 -1 L 147.213 0 Z M 151.205 0 L 153.201 0 L 153.201 -1 L 151.205 -1 L 151.205 0 Z M 155.197 0 L 157.193 0 L 157.193 -1 L 155.197 -1 L 155.197 0 Z M 159.189 0 L 161.186 0 L 161.186 -1 L 159.189 -1 L 159.189 0 Z M 163.182 0 L 165.178 0 L 165.178 -1 L 163.182 -1 L 163.182 0 Z M 167.174 0 L 169.17 0 L 169.17 -1 L 167.174 -1 L 167.174 0 Z M 171.166 0 L 173.162 0 L 173.162 -1 L 171.166 -1 L 171.166 0 Z M 175.158 0 L 177.154 0 L 177.154 -1 L 175.158 -1 L 175.158 0 Z M 179.15 0 L 181.146 0 L 181.146 -1 L 179.15 -1 L 179.15 0 Z M 183.143 0 L 185.139 0 L 185.139 -1 L 183.143 -1 L 183.143 0 Z M 187.135 0 L 189.131 0 L 189.131 -1 L 187.135 -1 L 187.135 0 Z M 191.127 0 L 193.123 0 L 193.123 -1 L 191.127 -1 L 191.127 0 Z M 195.119 0 L 197.115 0 L 197.115 -1 L 195.119 -1 L 195.119 0 Z M 199.111 0 L 201.107 0 L 201.107 -1 L 199.111 -1 L 199.111 0 Z M 203.104 0 L 205.1 0 L 205.1 -1 L 203.104 -1 L 203.104 0 Z M 207.096 0 L 209.092 0 L 209.092 -1 L 207.096 -1 L 207.096 0 Z M 211.088 0 L 213.084 0 L 213.084 -1 L 211.088 -1 L 211.088 0 Z M 215.08 0 L 217.076 0 L 217.076 -1 L 215.08 -1 L 215.08 0 Z M 219.072 0 L 221.068 0 L 221.068 -1 L 219.072 -1 L 219.072 0 Z M 223.064 0 L 225.061 0 L 225.061 -1 L 223.064 -1 L 223.064 0 Z M 227.057 0 L 229.053 0 L 229.053 -1 L 227.057 -1 L 227.057 0 Z M 231.049 0 L 233.045 0 L 233.045 -1 L 231.049 -1 L 231.049 0 Z M 235.041 0 L 237.037 0 L 237.037 -1 L 235.041 -1 L 235.041 0 Z M 239.033 0 L 241.029 0 L 241.029 -1 L 239.033 -1 L 239.033 0 Z M 243.025 0 L 245.021 0 L 245.021 -1 L 243.025 -1 L 243.025 0 Z M 247.018 0 L 249.014 0 L 249.014 -1 L 247.018 -1 L 247.018 0 Z M 251.01 0 L 253.006 0 L 253.006 -1 L 251.01 -1 L 251.01 0 Z M 255.002 0 L 256.998 0 L 256.998 -1 L 255.002 -1 L 255.002 0 Z M 258.994 0 L 260.99 0 L 260.99 -1 L 258.994 -1 L 258.994 0 Z M 262.986 0 L 264.982 0 L 264.982 -1 L 262.986 -1 L 262.986 0 Z M 266.979 0 L 268.975 0 L 268.975 -1 L 266.979 -1 L 266.979 0 Z M 270.971 0 L 272.967 0 L 272.967 -1 L 270.971 -1 L 270.971 0 Z M 274.963 0 L 276.959 0 L 276.959 -1 L 274.963 -1 L 274.963 0 Z M 278.955 0 L 280.951 0 L 280.951 -1 L 278.955 -1 L 278.955 0 Z M 282.947 0 L 284.943 0 L 284.943 -1 L 282.947 -1 L 282.947 0 Z M 286.939 0 L 288.936 0 L 288.936 -1 L 286.939 -1 L 286.939 0 Z M 290.932 0 L 292.928 0 L 292.928 -1 L 290.932 -1 L 290.932 0 Z M 294.924 0 L 296.92 0 L 296.92 -1 L 294.924 -1 L 294.924 0 Z M 298.916 0 L 300.912 0 L 300.912 -1 L 298.916 -1 L 298.916 0 Z M 302.908 0 L 304.904 0 L 304.904 -1 L 302.908 -1 L 302.908 0 Z M 306.9 0 L 308.896 0 L 308.896 -1 L 306.9 -1 L 306.9 0 Z M 310.893 0 L 312.889 0 L 312.889 -1 L 310.893 -1 L 310.893 0 Z M 314.885 0 L 316.881 0 L 316.881 -1 L 314.885 -1 L 314.885 0 Z M 318.877 0 L 320.873 0 L 320.873 -1 L 318.877 -1 L 318.877 0 Z M 322.869 0 L 324.865 0 L 324.865 -1 L 322.869 -1 L 322.869 0 Z M 326.861 0 L 328.857 0 L 328.857 -1 L 326.861 -1 L 326.861 0 Z M 330.854 0 L 332.85 0 L 332.85 -1 L 330.854 -1 L 330.854 0 Z M 334.846 0 L 336.842 0 L 336.842 -1 L 334.846 -1 L 334.846 0 Z M 338.838 0 L 340.834 0 L 340.834 -1 L 338.838 -1 L 338.838 0 Z M 342.83 0 L 344.826 0 L 344.826 -1 L 342.83 -1 L 342.83 0 Z M 346.822 0 L 348.818 0 L 348.818 -1 L 346.822 -1 L 346.822 0 Z M 350.814 0 L 352.811 0 L 352.811 -1 L 350.814 -1 L 350.814 0 Z M 354.807 0 L 356.803 0 L 356.803 -1 L 354.807 -1 L 354.807 0 Z M 358.799 0 L 360.795 0 L 360.795 -1 L 358.799 -1 L 358.799 0 Z M 362.791 0 L 364.787 0 L 364.787 -1 L 362.791 -1 L 362.791 0 Z M 366.783 0 L 368.779 0 L 368.779 -1 L 366.783 -1 L 366.783 0 Z M 370.775 0 L 372.771 0 L 372.771 -1 L 370.775 -1 L 370.775 0 Z M 374.768 0 L 376.764 0 L 376.764 -1 L 374.768 -1 L 374.768 0 Z M 378.76 0 L 380.756 0 L 380.756 -1 L 378.76 -1 L 378.76 0 Z M 382.752 0 L 384.748 0 L 384.748 -1 L 382.752 -1 L 382.752 0 Z M 386.744 0 L 388.74 0 L 388.74 -1 L 386.744 -1 L 386.744 0 Z M 390.736 0 L 392.732 0 L 392.732 -1 L 390.736 -1 L 390.736 0 Z M 394.729 0 L 396.725 0 L 396.725 -1 L 394.729 -1 L 394.729 0 Z M 398.721 0 L 400.717 0 L 400.717 -1 L 398.721 -1 L 398.721 0 Z M 402.713 0 L 404.709 0 L 404.709 -1 L 402.713 -1 L 402.713 0 Z M 406.705 0 L 408.701 0 L 408.701 -1 L 406.705 -1 L 406.705 0 Z M 410.697 0 L 412.693 0 L 412.693 -1 L 410.697 -1 L 410.697 0 Z M 414.689 0 L 416.686 0 L 416.686 -1 L 414.689 -1 L 414.689 0 Z M 418.682 0 L 420.678 0 L 420.678 -1 L 418.682 -1 L 418.682 0 Z M 422.674 0 L 424.67 0 L 424.67 -1 L 422.674 -1 L 422.674 0 Z M 426.666 0 L 428.662 0 L 428.662 -1 L 426.666 -1 L 426.666 0 Z M 430.658 0 L 432.654 0 L 432.654 -1 L 430.658 -1 L 430.658 0 Z M 434.65 0 L 436.646 0 L 436.646 -1 L 434.65 -1 L 434.65 0 Z M 438.643 0 L 440.639 0 L 440.639 -1 L 438.643 -1 L 438.643 0 Z M 442.635 0 L 444.631 0 L 444.631 -1 L 442.635 -1 L 442.635 0 Z M 446.627 0 L 448.623 0 L 448.623 -1 L 446.627 -1 L 446.627 0 Z M 450.619 0 L 452.615 0 L 452.615 -1 L 450.619 -1 L 450.619 0 Z M 454.611 0 L 456.607 0 L 456.607 -1 L 454.611 -1 L 454.611 0 Z M 458.604 0 L 460.6 0 L 460.6 -1 L 458.604 -1 L 458.604 0 Z M 462.596 0 L 464.592 0 L 464.592 -1 L 462.596 -1 L 462.596 0 Z M 466.588 0 L 468.584 0 L 468.584 -1 L 466.588 -1 L 466.588 0 Z M 470.58 0 L 472.576 0 L 472.576 -1 L 470.58 -1 L 470.58 0 Z M 474.572 0 L 476.568 0 L 476.568 -1 L 474.572 -1 L 474.572 0 Z M 478.564 0 L 480.561 0 L 480.561 -1 L 478.564 -1 L 478.564 0 Z M 482.557 0 L 484.553 0 L 484.553 -1 L 482.557 -1 L 482.557 0 Z M 486.549 0 L 488.545 0 L 488.545 -1 L 486.549 -1 L 486.549 0 Z M 490.541 0 L 492.537 0 L 492.537 -1 L 490.541 -1 L 490.541 0 Z M 494.533 0 L 496.529 0 L 496.529 -1 L 494.533 -1 L 494.533 0 Z M 498.525 0 L 500.521 0 L 500.521 -1 L 498.525 -1 L 498.525 0 Z M 502.518 0 L 504.514 0 L 504.514 -1 L 502.518 -1 L 502.518 0 Z M 506.51 0 L 508.506 0 L 508.506 -1 L 506.51 -1 L 506.51 0 Z M 510.502 0 L 511.5 0 L 511.5 -1 L 510.502 -1 L 510.502 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 512,
    height: 1,
    viewBox: "0 -0.500 512 1",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "matrix(-1,0,0,-1,512,35.446)",
      transformOrigin: "0 0",
      width: 512,
      height: 1,
      opacity: 0.32
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.5 -1 C 0.224 -1 0 -0.776 0 -0.5 C 0 -0.224 0.224 0 0.5 0 L 0.5 -1 Z M 511.5 0 C 511.776 0 512 -0.224 512 -0.5 C 512 -0.776 511.776 -1 511.5 -1 L 511.5 0 Z M 1.498 0 C 1.774 0 1.998 -0.224 1.998 -0.5 C 1.998 -0.776 1.774 -1 1.498 -1 L 1.498 0 Z M 3.494 -1 C 3.218 -1 2.994 -0.776 2.994 -0.5 C 2.994 -0.224 3.218 0 3.494 0 L 3.494 -1 Z M 5.49 0 C 5.766 0 5.99 -0.224 5.99 -0.5 C 5.99 -0.776 5.766 -1 5.49 -1 L 5.49 0 Z M 7.486 -1 C 7.21 -1 6.986 -0.776 6.986 -0.5 C 6.986 -0.224 7.21 0 7.486 0 L 7.486 -1 Z M 9.482 0 C 9.759 0 9.982 -0.224 9.982 -0.5 C 9.982 -0.776 9.759 -1 9.482 -1 L 9.482 0 Z M 11.479 -1 C 11.202 -1 10.979 -0.776 10.979 -0.5 C 10.979 -0.224 11.202 0 11.479 0 L 11.479 -1 Z M 13.475 0 C 13.751 0 13.975 -0.224 13.975 -0.5 C 13.975 -0.776 13.751 -1 13.475 -1 L 13.475 0 Z M 15.471 -1 C 15.195 -1 14.971 -0.776 14.971 -0.5 C 14.971 -0.224 15.195 0 15.471 0 L 15.471 -1 Z M 17.467 0 C 17.743 0 17.967 -0.224 17.967 -0.5 C 17.967 -0.776 17.743 -1 17.467 -1 L 17.467 0 Z M 19.463 -1 C 19.187 -1 18.963 -0.776 18.963 -0.5 C 18.963 -0.224 19.187 0 19.463 0 L 19.463 -1 Z M 21.459 0 C 21.735 0 21.959 -0.224 21.959 -0.5 C 21.959 -0.776 21.735 -1 21.459 -1 L 21.459 0 Z M 23.455 -1 C 23.179 -1 22.955 -0.776 22.955 -0.5 C 22.955 -0.224 23.179 0 23.455 0 L 23.455 -1 Z M 25.451 0 C 25.727 0 25.951 -0.224 25.951 -0.5 C 25.951 -0.776 25.727 -1 25.451 -1 L 25.451 0 Z M 27.447 -1 C 27.171 -1 26.947 -0.776 26.947 -0.5 C 26.947 -0.224 27.171 0 27.447 0 L 27.447 -1 Z M 29.443 0 C 29.72 0 29.943 -0.224 29.943 -0.5 C 29.943 -0.776 29.72 -1 29.443 -1 L 29.443 0 Z M 31.439 -1 C 31.163 -1 30.939 -0.776 30.939 -0.5 C 30.939 -0.224 31.163 0 31.439 0 L 31.439 -1 Z M 33.436 0 C 33.712 0 33.936 -0.224 33.936 -0.5 C 33.936 -0.776 33.712 -1 33.436 -1 L 33.436 0 Z M 35.432 -1 C 35.155 -1 34.932 -0.776 34.932 -0.5 C 34.932 -0.224 35.155 0 35.432 0 L 35.432 -1 Z M 37.428 0 C 37.704 0 37.928 -0.224 37.928 -0.5 C 37.928 -0.776 37.704 -1 37.428 -1 L 37.428 0 Z M 39.424 -1 C 39.148 -1 38.924 -0.776 38.924 -0.5 C 38.924 -0.224 39.148 0 39.424 0 L 39.424 -1 Z M 41.42 0 C 41.696 0 41.92 -0.224 41.92 -0.5 C 41.92 -0.776 41.696 -1 41.42 -1 L 41.42 0 Z M 43.416 -1 C 43.14 -1 42.916 -0.776 42.916 -0.5 C 42.916 -0.224 43.14 0 43.416 0 L 43.416 -1 Z M 45.412 0 C 45.688 0 45.912 -0.224 45.912 -0.5 C 45.912 -0.776 45.688 -1 45.412 -1 L 45.412 0 Z M 47.408 -1 C 47.132 -1 46.908 -0.776 46.908 -0.5 C 46.908 -0.224 47.132 0 47.408 0 L 47.408 -1 Z M 49.404 0 C 49.68 0 49.904 -0.224 49.904 -0.5 C 49.904 -0.776 49.68 -1 49.404 -1 L 49.404 0 Z M 51.4 -1 C 51.124 -1 50.9 -0.776 50.9 -0.5 C 50.9 -0.224 51.124 0 51.4 0 L 51.4 -1 Z M 53.396 0 C 53.673 0 53.896 -0.224 53.896 -0.5 C 53.896 -0.776 53.673 -1 53.396 -1 L 53.396 0 Z M 55.393 -1 C 55.116 -1 54.893 -0.776 54.893 -0.5 C 54.893 -0.224 55.116 0 55.393 0 L 55.393 -1 Z M 57.389 0 C 57.665 0 57.889 -0.224 57.889 -0.5 C 57.889 -0.776 57.665 -1 57.389 -1 L 57.389 0 Z M 59.385 -1 C 59.109 -1 58.885 -0.776 58.885 -0.5 C 58.885 -0.224 59.109 0 59.385 0 L 59.385 -1 Z M 61.381 0 C 61.657 0 61.881 -0.224 61.881 -0.5 C 61.881 -0.776 61.657 -1 61.381 -1 L 61.381 0 Z M 63.377 -1 C 63.101 -1 62.877 -0.776 62.877 -0.5 C 62.877 -0.224 63.101 0 63.377 0 L 63.377 -1 Z M 65.373 0 C 65.649 0 65.873 -0.224 65.873 -0.5 C 65.873 -0.776 65.649 -1 65.373 -1 L 65.373 0 Z M 67.369 -1 C 67.093 -1 66.869 -0.776 66.869 -0.5 C 66.869 -0.224 67.093 0 67.369 0 L 67.369 -1 Z M 69.365 0 C 69.641 0 69.865 -0.224 69.865 -0.5 C 69.865 -0.776 69.641 -1 69.365 -1 L 69.365 0 Z M 71.361 -1 C 71.085 -1 70.861 -0.776 70.861 -0.5 C 70.861 -0.224 71.085 0 71.361 0 L 71.361 -1 Z M 73.357 0 C 73.634 0 73.857 -0.224 73.857 -0.5 C 73.857 -0.776 73.634 -1 73.357 -1 L 73.357 0 Z M 75.354 -1 C 75.077 -1 74.854 -0.776 74.854 -0.5 C 74.854 -0.224 75.077 0 75.354 0 L 75.354 -1 Z M 77.35 0 C 77.626 0 77.85 -0.224 77.85 -0.5 C 77.85 -0.776 77.626 -1 77.35 -1 L 77.35 0 Z M 79.346 -1 C 79.07 -1 78.846 -0.776 78.846 -0.5 C 78.846 -0.224 79.07 0 79.346 0 L 79.346 -1 Z M 81.342 0 C 81.618 0 81.842 -0.224 81.842 -0.5 C 81.842 -0.776 81.618 -1 81.342 -1 L 81.342 0 Z M 83.338 -1 C 83.062 -1 82.838 -0.776 82.838 -0.5 C 82.838 -0.224 83.062 0 83.338 0 L 83.338 -1 Z M 85.334 0 C 85.61 0 85.834 -0.224 85.834 -0.5 C 85.834 -0.776 85.61 -1 85.334 -1 L 85.334 0 Z M 87.33 -1 C 87.054 -1 86.83 -0.776 86.83 -0.5 C 86.83 -0.224 87.054 0 87.33 0 L 87.33 -1 Z M 89.326 0 C 89.602 0 89.826 -0.224 89.826 -0.5 C 89.826 -0.776 89.602 -1 89.326 -1 L 89.326 0 Z M 91.322 -1 C 91.046 -1 90.822 -0.776 90.822 -0.5 C 90.822 -0.224 91.046 0 91.322 0 L 91.322 -1 Z M 93.318 0 C 93.595 0 93.818 -0.224 93.818 -0.5 C 93.818 -0.776 93.595 -1 93.318 -1 L 93.318 0 Z M 95.314 -1 C 95.038 -1 94.814 -0.776 94.814 -0.5 C 94.814 -0.224 95.038 0 95.314 0 L 95.314 -1 Z M 97.311 0 C 97.587 0 97.811 -0.224 97.811 -0.5 C 97.811 -0.776 97.587 -1 97.311 -1 L 97.311 0 Z M 99.307 -1 C 99.03 -1 98.807 -0.776 98.807 -0.5 C 98.807 -0.224 99.03 0 99.307 0 L 99.307 -1 Z M 101.303 0 C 101.579 0 101.803 -0.224 101.803 -0.5 C 101.803 -0.776 101.579 -1 101.303 -1 L 101.303 0 Z M 103.299 -1 C 103.023 -1 102.799 -0.776 102.799 -0.5 C 102.799 -0.224 103.023 0 103.299 0 L 103.299 -1 Z M 105.295 0 C 105.571 0 105.795 -0.224 105.795 -0.5 C 105.795 -0.776 105.571 -1 105.295 -1 L 105.295 0 Z M 107.291 -1 C 107.015 -1 106.791 -0.776 106.791 -0.5 C 106.791 -0.224 107.015 0 107.291 0 L 107.291 -1 Z M 109.287 0 C 109.563 0 109.787 -0.224 109.787 -0.5 C 109.787 -0.776 109.563 -1 109.287 -1 L 109.287 0 Z M 111.283 -1 C 111.007 -1 110.783 -0.776 110.783 -0.5 C 110.783 -0.224 111.007 0 111.283 0 L 111.283 -1 Z M 113.279 0 C 113.555 0 113.779 -0.224 113.779 -0.5 C 113.779 -0.776 113.555 -1 113.279 -1 L 113.279 0 Z M 115.275 -1 C 114.999 -1 114.775 -0.776 114.775 -0.5 C 114.775 -0.224 114.999 0 115.275 0 L 115.275 -1 Z M 117.271 0 C 117.548 0 117.771 -0.224 117.771 -0.5 C 117.771 -0.776 117.548 -1 117.271 -1 L 117.271 0 Z M 119.268 -1 C 118.991 -1 118.768 -0.776 118.768 -0.5 C 118.768 -0.224 118.991 0 119.268 0 L 119.268 -1 Z M 121.264 0 C 121.54 0 121.764 -0.224 121.764 -0.5 C 121.764 -0.776 121.54 -1 121.264 -1 L 121.264 0 Z M 123.26 -1 C 122.984 -1 122.76 -0.776 122.76 -0.5 C 122.76 -0.224 122.984 0 123.26 0 L 123.26 -1 Z M 125.256 0 C 125.532 0 125.756 -0.224 125.756 -0.5 C 125.756 -0.776 125.532 -1 125.256 -1 L 125.256 0 Z M 127.252 -1 C 126.976 -1 126.752 -0.776 126.752 -0.5 C 126.752 -0.224 126.976 0 127.252 0 L 127.252 -1 Z M 129.248 0 C 129.524 0 129.748 -0.224 129.748 -0.5 C 129.748 -0.776 129.524 -1 129.248 -1 L 129.248 0 Z M 131.244 -1 C 130.968 -1 130.744 -0.776 130.744 -0.5 C 130.744 -0.224 130.968 0 131.244 0 L 131.244 -1 Z M 133.24 0 C 133.516 0 133.74 -0.224 133.74 -0.5 C 133.74 -0.776 133.516 -1 133.24 -1 L 133.24 0 Z M 135.236 -1 C 134.96 -1 134.736 -0.776 134.736 -0.5 C 134.736 -0.224 134.96 0 135.236 0 L 135.236 -1 Z M 137.232 0 C 137.509 0 137.732 -0.224 137.732 -0.5 C 137.732 -0.776 137.509 -1 137.232 -1 L 137.232 0 Z M 139.229 -1 C 138.952 -1 138.729 -0.776 138.729 -0.5 C 138.729 -0.224 138.952 0 139.229 0 L 139.229 -1 Z M 141.225 0 C 141.501 0 141.725 -0.224 141.725 -0.5 C 141.725 -0.776 141.501 -1 141.225 -1 L 141.225 0 Z M 143.221 -1 C 142.945 -1 142.721 -0.776 142.721 -0.5 C 142.721 -0.224 142.945 0 143.221 0 L 143.221 -1 Z M 145.217 0 C 145.493 0 145.717 -0.224 145.717 -0.5 C 145.717 -0.776 145.493 -1 145.217 -1 L 145.217 0 Z M 147.213 -1 C 146.937 -1 146.713 -0.776 146.713 -0.5 C 146.713 -0.224 146.937 0 147.213 0 L 147.213 -1 Z M 149.209 0 C 149.485 0 149.709 -0.224 149.709 -0.5 C 149.709 -0.776 149.485 -1 149.209 -1 L 149.209 0 Z M 151.205 -1 C 150.929 -1 150.705 -0.776 150.705 -0.5 C 150.705 -0.224 150.929 0 151.205 0 L 151.205 -1 Z M 153.201 0 C 153.477 0 153.701 -0.224 153.701 -0.5 C 153.701 -0.776 153.477 -1 153.201 -1 L 153.201 0 Z M 155.197 -1 C 154.921 -1 154.697 -0.776 154.697 -0.5 C 154.697 -0.224 154.921 0 155.197 0 L 155.197 -1 Z M 157.193 0 C 157.469 0 157.693 -0.224 157.693 -0.5 C 157.693 -0.776 157.469 -1 157.193 -1 L 157.193 0 Z M 159.189 -1 C 158.913 -1 158.689 -0.776 158.689 -0.5 C 158.689 -0.224 158.913 0 159.189 0 L 159.189 -1 Z M 161.186 0 C 161.462 0 161.686 -0.224 161.686 -0.5 C 161.686 -0.776 161.462 -1 161.186 -1 L 161.186 0 Z M 163.182 -1 C 162.906 -1 162.682 -0.776 162.682 -0.5 C 162.682 -0.224 162.906 0 163.182 0 L 163.182 -1 Z M 165.178 0 C 165.454 0 165.678 -0.224 165.678 -0.5 C 165.678 -0.776 165.454 -1 165.178 -1 L 165.178 0 Z M 167.174 -1 C 166.898 -1 166.674 -0.776 166.674 -0.5 C 166.674 -0.224 166.898 0 167.174 0 L 167.174 -1 Z M 169.17 0 C 169.446 0 169.67 -0.224 169.67 -0.5 C 169.67 -0.776 169.446 -1 169.17 -1 L 169.17 0 Z M 171.166 -1 C 170.89 -1 170.666 -0.776 170.666 -0.5 C 170.666 -0.224 170.89 0 171.166 0 L 171.166 -1 Z M 173.162 0 C 173.438 0 173.662 -0.224 173.662 -0.5 C 173.662 -0.776 173.438 -1 173.162 -1 L 173.162 0 Z M 175.158 -1 C 174.882 -1 174.658 -0.776 174.658 -0.5 C 174.658 -0.224 174.882 0 175.158 0 L 175.158 -1 Z M 177.154 0 C 177.43 0 177.654 -0.224 177.654 -0.5 C 177.654 -0.776 177.43 -1 177.154 -1 L 177.154 0 Z M 179.15 -1 C 178.874 -1 178.65 -0.776 178.65 -0.5 C 178.65 -0.224 178.874 0 179.15 0 L 179.15 -1 Z M 181.146 0 C 181.423 0 181.646 -0.224 181.646 -0.5 C 181.646 -0.776 181.423 -1 181.146 -1 L 181.146 0 Z M 183.143 -1 C 182.866 -1 182.643 -0.776 182.643 -0.5 C 182.643 -0.224 182.866 0 183.143 0 L 183.143 -1 Z M 185.139 0 C 185.415 0 185.639 -0.224 185.639 -0.5 C 185.639 -0.776 185.415 -1 185.139 -1 L 185.139 0 Z M 187.135 -1 C 186.859 -1 186.635 -0.776 186.635 -0.5 C 186.635 -0.224 186.859 0 187.135 0 L 187.135 -1 Z M 189.131 0 C 189.407 0 189.631 -0.224 189.631 -0.5 C 189.631 -0.776 189.407 -1 189.131 -1 L 189.131 0 Z M 191.127 -1 C 190.851 -1 190.627 -0.776 190.627 -0.5 C 190.627 -0.224 190.851 0 191.127 0 L 191.127 -1 Z M 193.123 0 C 193.399 0 193.623 -0.224 193.623 -0.5 C 193.623 -0.776 193.399 -1 193.123 -1 L 193.123 0 Z M 195.119 -1 C 194.843 -1 194.619 -0.776 194.619 -0.5 C 194.619 -0.224 194.843 0 195.119 0 L 195.119 -1 Z M 197.115 0 C 197.391 0 197.615 -0.224 197.615 -0.5 C 197.615 -0.776 197.391 -1 197.115 -1 L 197.115 0 Z M 199.111 -1 C 198.835 -1 198.611 -0.776 198.611 -0.5 C 198.611 -0.224 198.835 0 199.111 0 L 199.111 -1 Z M 201.107 0 C 201.384 0 201.607 -0.224 201.607 -0.5 C 201.607 -0.776 201.384 -1 201.107 -1 L 201.107 0 Z M 203.104 -1 C 202.827 -1 202.604 -0.776 202.604 -0.5 C 202.604 -0.224 202.827 0 203.104 0 L 203.104 -1 Z M 205.1 0 C 205.376 0 205.6 -0.224 205.6 -0.5 C 205.6 -0.776 205.376 -1 205.1 -1 L 205.1 0 Z M 207.096 -1 C 206.82 -1 206.596 -0.776 206.596 -0.5 C 206.596 -0.224 206.82 0 207.096 0 L 207.096 -1 Z M 209.092 0 C 209.368 0 209.592 -0.224 209.592 -0.5 C 209.592 -0.776 209.368 -1 209.092 -1 L 209.092 0 Z M 211.088 -1 C 210.812 -1 210.588 -0.776 210.588 -0.5 C 210.588 -0.224 210.812 0 211.088 0 L 211.088 -1 Z M 213.084 0 C 213.36 0 213.584 -0.224 213.584 -0.5 C 213.584 -0.776 213.36 -1 213.084 -1 L 213.084 0 Z M 215.08 -1 C 214.804 -1 214.58 -0.776 214.58 -0.5 C 214.58 -0.224 214.804 0 215.08 0 L 215.08 -1 Z M 217.076 0 C 217.352 0 217.576 -0.224 217.576 -0.5 C 217.576 -0.776 217.352 -1 217.076 -1 L 217.076 0 Z M 219.072 -1 C 218.796 -1 218.572 -0.776 218.572 -0.5 C 218.572 -0.224 218.796 0 219.072 0 L 219.072 -1 Z M 221.068 0 C 221.344 0 221.568 -0.224 221.568 -0.5 C 221.568 -0.776 221.344 -1 221.068 -1 L 221.068 0 Z M 223.064 -1 C 222.788 -1 222.564 -0.776 222.564 -0.5 C 222.564 -0.224 222.788 0 223.064 0 L 223.064 -1 Z M 225.061 0 C 225.337 0 225.561 -0.224 225.561 -0.5 C 225.561 -0.776 225.337 -1 225.061 -1 L 225.061 0 Z M 227.057 -1 C 226.781 -1 226.557 -0.776 226.557 -0.5 C 226.557 -0.224 226.781 0 227.057 0 L 227.057 -1 Z M 229.053 0 C 229.329 0 229.553 -0.224 229.553 -0.5 C 229.553 -0.776 229.329 -1 229.053 -1 L 229.053 0 Z M 231.049 -1 C 230.773 -1 230.549 -0.776 230.549 -0.5 C 230.549 -0.224 230.773 0 231.049 0 L 231.049 -1 Z M 233.045 0 C 233.321 0 233.545 -0.224 233.545 -0.5 C 233.545 -0.776 233.321 -1 233.045 -1 L 233.045 0 Z M 235.041 -1 C 234.765 -1 234.541 -0.776 234.541 -0.5 C 234.541 -0.224 234.765 0 235.041 0 L 235.041 -1 Z M 237.037 0 C 237.313 0 237.537 -0.224 237.537 -0.5 C 237.537 -0.776 237.313 -1 237.037 -1 L 237.037 0 Z M 239.033 -1 C 238.757 -1 238.533 -0.776 238.533 -0.5 C 238.533 -0.224 238.757 0 239.033 0 L 239.033 -1 Z M 241.029 0 C 241.305 0 241.529 -0.224 241.529 -0.5 C 241.529 -0.776 241.305 -1 241.029 -1 L 241.029 0 Z M 243.025 -1 C 242.749 -1 242.525 -0.776 242.525 -0.5 C 242.525 -0.224 242.749 0 243.025 0 L 243.025 -1 Z M 245.021 0 C 245.298 0 245.521 -0.224 245.521 -0.5 C 245.521 -0.776 245.298 -1 245.021 -1 L 245.021 0 Z M 247.018 -1 C 246.741 -1 246.518 -0.776 246.518 -0.5 C 246.518 -0.224 246.741 0 247.018 0 L 247.018 -1 Z M 249.014 0 C 249.29 0 249.514 -0.224 249.514 -0.5 C 249.514 -0.776 249.29 -1 249.014 -1 L 249.014 0 Z M 251.01 -1 C 250.734 -1 250.51 -0.776 250.51 -0.5 C 250.51 -0.224 250.734 0 251.01 0 L 251.01 -1 Z M 253.006 0 C 253.282 0 253.506 -0.224 253.506 -0.5 C 253.506 -0.776 253.282 -1 253.006 -1 L 253.006 0 Z M 255.002 -1 C 254.726 -1 254.502 -0.776 254.502 -0.5 C 254.502 -0.224 254.726 0 255.002 0 L 255.002 -1 Z M 256.998 0 C 257.274 0 257.498 -0.224 257.498 -0.5 C 257.498 -0.776 257.274 -1 256.998 -1 L 256.998 0 Z M 258.994 -1 C 258.718 -1 258.494 -0.776 258.494 -0.5 C 258.494 -0.224 258.718 0 258.994 0 L 258.994 -1 Z M 260.99 0 C 261.266 0 261.49 -0.224 261.49 -0.5 C 261.49 -0.776 261.266 -1 260.99 -1 L 260.99 0 Z M 262.986 -1 C 262.71 -1 262.486 -0.776 262.486 -0.5 C 262.486 -0.224 262.71 0 262.986 0 L 262.986 -1 Z M 264.982 0 C 265.259 0 265.482 -0.224 265.482 -0.5 C 265.482 -0.776 265.259 -1 264.982 -1 L 264.982 0 Z M 266.979 -1 C 266.702 -1 266.479 -0.776 266.479 -0.5 C 266.479 -0.224 266.702 0 266.979 0 L 266.979 -1 Z M 268.975 0 C 269.251 0 269.475 -0.224 269.475 -0.5 C 269.475 -0.776 269.251 -1 268.975 -1 L 268.975 0 Z M 270.971 -1 C 270.695 -1 270.471 -0.776 270.471 -0.5 C 270.471 -0.224 270.695 0 270.971 0 L 270.971 -1 Z M 272.967 0 C 273.243 0 273.467 -0.224 273.467 -0.5 C 273.467 -0.776 273.243 -1 272.967 -1 L 272.967 0 Z M 274.963 -1 C 274.687 -1 274.463 -0.776 274.463 -0.5 C 274.463 -0.224 274.687 0 274.963 0 L 274.963 -1 Z M 276.959 0 C 277.235 0 277.459 -0.224 277.459 -0.5 C 277.459 -0.776 277.235 -1 276.959 -1 L 276.959 0 Z M 278.955 -1 C 278.679 -1 278.455 -0.776 278.455 -0.5 C 278.455 -0.224 278.679 0 278.955 0 L 278.955 -1 Z M 280.951 0 C 281.227 0 281.451 -0.224 281.451 -0.5 C 281.451 -0.776 281.227 -1 280.951 -1 L 280.951 0 Z M 282.947 -1 C 282.671 -1 282.447 -0.776 282.447 -0.5 C 282.447 -0.224 282.671 0 282.947 0 L 282.947 -1 Z M 284.943 0 C 285.22 0 285.443 -0.224 285.443 -0.5 C 285.443 -0.776 285.22 -1 284.943 -1 L 284.943 0 Z M 286.939 -1 C 286.663 -1 286.439 -0.776 286.439 -0.5 C 286.439 -0.224 286.663 0 286.939 0 L 286.939 -1 Z M 288.936 0 C 289.212 0 289.436 -0.224 289.436 -0.5 C 289.436 -0.776 289.212 -1 288.936 -1 L 288.936 0 Z M 290.932 -1 C 290.655 -1 290.432 -0.776 290.432 -0.5 C 290.432 -0.224 290.655 0 290.932 0 L 290.932 -1 Z M 292.928 0 C 293.204 0 293.428 -0.224 293.428 -0.5 C 293.428 -0.776 293.204 -1 292.928 -1 L 292.928 0 Z M 294.924 -1 C 294.648 -1 294.424 -0.776 294.424 -0.5 C 294.424 -0.224 294.648 0 294.924 0 L 294.924 -1 Z M 296.92 0 C 297.196 0 297.42 -0.224 297.42 -0.5 C 297.42 -0.776 297.196 -1 296.92 -1 L 296.92 0 Z M 298.916 -1 C 298.64 -1 298.416 -0.776 298.416 -0.5 C 298.416 -0.224 298.64 0 298.916 0 L 298.916 -1 Z M 300.912 0 C 301.188 0 301.412 -0.224 301.412 -0.5 C 301.412 -0.776 301.188 -1 300.912 -1 L 300.912 0 Z M 302.908 -1 C 302.632 -1 302.408 -0.776 302.408 -0.5 C 302.408 -0.224 302.632 0 302.908 0 L 302.908 -1 Z M 304.904 0 C 305.18 0 305.404 -0.224 305.404 -0.5 C 305.404 -0.776 305.18 -1 304.904 -1 L 304.904 0 Z M 306.9 -1 C 306.624 -1 306.4 -0.776 306.4 -0.5 C 306.4 -0.224 306.624 0 306.9 0 L 306.9 -1 Z M 308.896 0 C 309.173 0 309.396 -0.224 309.396 -0.5 C 309.396 -0.776 309.173 -1 308.896 -1 L 308.896 0 Z M 310.893 -1 C 310.616 -1 310.393 -0.776 310.393 -0.5 C 310.393 -0.224 310.616 0 310.893 0 L 310.893 -1 Z M 312.889 0 C 313.165 0 313.389 -0.224 313.389 -0.5 C 313.389 -0.776 313.165 -1 312.889 -1 L 312.889 0 Z M 314.885 -1 C 314.609 -1 314.385 -0.776 314.385 -0.5 C 314.385 -0.224 314.609 0 314.885 0 L 314.885 -1 Z M 316.881 0 C 317.157 0 317.381 -0.224 317.381 -0.5 C 317.381 -0.776 317.157 -1 316.881 -1 L 316.881 0 Z M 318.877 -1 C 318.601 -1 318.377 -0.776 318.377 -0.5 C 318.377 -0.224 318.601 0 318.877 0 L 318.877 -1 Z M 320.873 0 C 321.149 0 321.373 -0.224 321.373 -0.5 C 321.373 -0.776 321.149 -1 320.873 -1 L 320.873 0 Z M 322.869 -1 C 322.593 -1 322.369 -0.776 322.369 -0.5 C 322.369 -0.224 322.593 0 322.869 0 L 322.869 -1 Z M 324.865 0 C 325.141 0 325.365 -0.224 325.365 -0.5 C 325.365 -0.776 325.141 -1 324.865 -1 L 324.865 0 Z M 326.861 -1 C 326.585 -1 326.361 -0.776 326.361 -0.5 C 326.361 -0.224 326.585 0 326.861 0 L 326.861 -1 Z M 328.857 0 C 329.134 0 329.357 -0.224 329.357 -0.5 C 329.357 -0.776 329.134 -1 328.857 -1 L 328.857 0 Z M 330.854 -1 C 330.577 -1 330.354 -0.776 330.354 -0.5 C 330.354 -0.224 330.577 0 330.854 0 L 330.854 -1 Z M 332.85 0 C 333.126 0 333.35 -0.224 333.35 -0.5 C 333.35 -0.776 333.126 -1 332.85 -1 L 332.85 0 Z M 334.846 -1 C 334.57 -1 334.346 -0.776 334.346 -0.5 C 334.346 -0.224 334.57 0 334.846 0 L 334.846 -1 Z M 336.842 0 C 337.118 0 337.342 -0.224 337.342 -0.5 C 337.342 -0.776 337.118 -1 336.842 -1 L 336.842 0 Z M 338.838 -1 C 338.562 -1 338.338 -0.776 338.338 -0.5 C 338.338 -0.224 338.562 0 338.838 0 L 338.838 -1 Z M 340.834 0 C 341.11 0 341.334 -0.224 341.334 -0.5 C 341.334 -0.776 341.11 -1 340.834 -1 L 340.834 0 Z M 342.83 -1 C 342.554 -1 342.33 -0.776 342.33 -0.5 C 342.33 -0.224 342.554 0 342.83 0 L 342.83 -1 Z M 344.826 0 C 345.102 0 345.326 -0.224 345.326 -0.5 C 345.326 -0.776 345.102 -1 344.826 -1 L 344.826 0 Z M 346.822 -1 C 346.546 -1 346.322 -0.776 346.322 -0.5 C 346.322 -0.224 346.546 0 346.822 0 L 346.822 -1 Z M 348.818 0 C 349.095 0 349.318 -0.224 349.318 -0.5 C 349.318 -0.776 349.095 -1 348.818 -1 L 348.818 0 Z M 350.814 -1 C 350.538 -1 350.314 -0.776 350.314 -0.5 C 350.314 -0.224 350.538 0 350.814 0 L 350.814 -1 Z M 352.811 0 C 353.087 0 353.311 -0.224 353.311 -0.5 C 353.311 -0.776 353.087 -1 352.811 -1 L 352.811 0 Z M 354.807 -1 C 354.53 -1 354.307 -0.776 354.307 -0.5 C 354.307 -0.224 354.53 0 354.807 0 L 354.807 -1 Z M 356.803 0 C 357.079 0 357.303 -0.224 357.303 -0.5 C 357.303 -0.776 357.079 -1 356.803 -1 L 356.803 0 Z M 358.799 -1 C 358.523 -1 358.299 -0.776 358.299 -0.5 C 358.299 -0.224 358.523 0 358.799 0 L 358.799 -1 Z M 360.795 0 C 361.071 0 361.295 -0.224 361.295 -0.5 C 361.295 -0.776 361.071 -1 360.795 -1 L 360.795 0 Z M 362.791 -1 C 362.515 -1 362.291 -0.776 362.291 -0.5 C 362.291 -0.224 362.515 0 362.791 0 L 362.791 -1 Z M 364.787 0 C 365.063 0 365.287 -0.224 365.287 -0.5 C 365.287 -0.776 365.063 -1 364.787 -1 L 364.787 0 Z M 366.783 -1 C 366.507 -1 366.283 -0.776 366.283 -0.5 C 366.283 -0.224 366.507 0 366.783 0 L 366.783 -1 Z M 368.779 0 C 369.055 0 369.279 -0.224 369.279 -0.5 C 369.279 -0.776 369.055 -1 368.779 -1 L 368.779 0 Z M 370.775 -1 C 370.499 -1 370.275 -0.776 370.275 -0.5 C 370.275 -0.224 370.499 0 370.775 0 L 370.775 -1 Z M 372.771 0 C 373.048 0 373.271 -0.224 373.271 -0.5 C 373.271 -0.776 373.048 -1 372.771 -1 L 372.771 0 Z M 374.768 -1 C 374.491 -1 374.268 -0.776 374.268 -0.5 C 374.268 -0.224 374.491 0 374.768 0 L 374.768 -1 Z M 376.764 0 C 377.04 0 377.264 -0.224 377.264 -0.5 C 377.264 -0.776 377.04 -1 376.764 -1 L 376.764 0 Z M 378.76 -1 C 378.484 -1 378.26 -0.776 378.26 -0.5 C 378.26 -0.224 378.484 0 378.76 0 L 378.76 -1 Z M 380.756 0 C 381.032 0 381.256 -0.224 381.256 -0.5 C 381.256 -0.776 381.032 -1 380.756 -1 L 380.756 0 Z M 382.752 -1 C 382.476 -1 382.252 -0.776 382.252 -0.5 C 382.252 -0.224 382.476 0 382.752 0 L 382.752 -1 Z M 384.748 0 C 385.024 0 385.248 -0.224 385.248 -0.5 C 385.248 -0.776 385.024 -1 384.748 -1 L 384.748 0 Z M 386.744 -1 C 386.468 -1 386.244 -0.776 386.244 -0.5 C 386.244 -0.224 386.468 0 386.744 0 L 386.744 -1 Z M 388.74 0 C 389.016 0 389.24 -0.224 389.24 -0.5 C 389.24 -0.776 389.016 -1 388.74 -1 L 388.74 0 Z M 390.736 -1 C 390.46 -1 390.236 -0.776 390.236 -0.5 C 390.236 -0.224 390.46 0 390.736 0 L 390.736 -1 Z M 392.732 0 C 393.009 0 393.232 -0.224 393.232 -0.5 C 393.232 -0.776 393.009 -1 392.732 -1 L 392.732 0 Z M 394.729 -1 C 394.452 -1 394.229 -0.776 394.229 -0.5 C 394.229 -0.224 394.452 0 394.729 0 L 394.729 -1 Z M 396.725 0 C 397.001 0 397.225 -0.224 397.225 -0.5 C 397.225 -0.776 397.001 -1 396.725 -1 L 396.725 0 Z M 398.721 -1 C 398.445 -1 398.221 -0.776 398.221 -0.5 C 398.221 -0.224 398.445 0 398.721 0 L 398.721 -1 Z M 400.717 0 C 400.993 0 401.217 -0.224 401.217 -0.5 C 401.217 -0.776 400.993 -1 400.717 -1 L 400.717 0 Z M 402.713 -1 C 402.437 -1 402.213 -0.776 402.213 -0.5 C 402.213 -0.224 402.437 0 402.713 0 L 402.713 -1 Z M 404.709 0 C 404.985 0 405.209 -0.224 405.209 -0.5 C 405.209 -0.776 404.985 -1 404.709 -1 L 404.709 0 Z M 406.705 -1 C 406.429 -1 406.205 -0.776 406.205 -0.5 C 406.205 -0.224 406.429 0 406.705 0 L 406.705 -1 Z M 408.701 0 C 408.977 0 409.201 -0.224 409.201 -0.5 C 409.201 -0.776 408.977 -1 408.701 -1 L 408.701 0 Z M 410.697 -1 C 410.421 -1 410.197 -0.776 410.197 -0.5 C 410.197 -0.224 410.421 0 410.697 0 L 410.697 -1 Z M 412.693 0 C 412.97 0 413.193 -0.224 413.193 -0.5 C 413.193 -0.776 412.97 -1 412.693 -1 L 412.693 0 Z M 414.689 -1 C 414.413 -1 414.189 -0.776 414.189 -0.5 C 414.189 -0.224 414.413 0 414.689 0 L 414.689 -1 Z M 416.686 0 C 416.962 0 417.186 -0.224 417.186 -0.5 C 417.186 -0.776 416.962 -1 416.686 -1 L 416.686 0 Z M 418.682 -1 C 418.405 -1 418.182 -0.776 418.182 -0.5 C 418.182 -0.224 418.405 0 418.682 0 L 418.682 -1 Z M 420.678 0 C 420.954 0 421.178 -0.224 421.178 -0.5 C 421.178 -0.776 420.954 -1 420.678 -1 L 420.678 0 Z M 422.674 -1 C 422.398 -1 422.174 -0.776 422.174 -0.5 C 422.174 -0.224 422.398 0 422.674 0 L 422.674 -1 Z M 424.67 0 C 424.946 0 425.17 -0.224 425.17 -0.5 C 425.17 -0.776 424.946 -1 424.67 -1 L 424.67 0 Z M 426.666 -1 C 426.39 -1 426.166 -0.776 426.166 -0.5 C 426.166 -0.224 426.39 0 426.666 0 L 426.666 -1 Z M 428.662 0 C 428.938 0 429.162 -0.224 429.162 -0.5 C 429.162 -0.776 428.938 -1 428.662 -1 L 428.662 0 Z M 430.658 -1 C 430.382 -1 430.158 -0.776 430.158 -0.5 C 430.158 -0.224 430.382 0 430.658 0 L 430.658 -1 Z M 432.654 0 C 432.93 0 433.154 -0.224 433.154 -0.5 C 433.154 -0.776 432.93 -1 432.654 -1 L 432.654 0 Z M 434.65 -1 C 434.374 -1 434.15 -0.776 434.15 -0.5 C 434.15 -0.224 434.374 0 434.65 0 L 434.65 -1 Z M 436.646 0 C 436.923 0 437.146 -0.224 437.146 -0.5 C 437.146 -0.776 436.923 -1 436.646 -1 L 436.646 0 Z M 438.643 -1 C 438.366 -1 438.143 -0.776 438.143 -0.5 C 438.143 -0.224 438.366 0 438.643 0 L 438.643 -1 Z M 440.639 0 C 440.915 0 441.139 -0.224 441.139 -0.5 C 441.139 -0.776 440.915 -1 440.639 -1 L 440.639 0 Z M 442.635 -1 C 442.359 -1 442.135 -0.776 442.135 -0.5 C 442.135 -0.224 442.359 0 442.635 0 L 442.635 -1 Z M 444.631 0 C 444.907 0 445.131 -0.224 445.131 -0.5 C 445.131 -0.776 444.907 -1 444.631 -1 L 444.631 0 Z M 446.627 -1 C 446.351 -1 446.127 -0.776 446.127 -0.5 C 446.127 -0.224 446.351 0 446.627 0 L 446.627 -1 Z M 448.623 0 C 448.899 0 449.123 -0.224 449.123 -0.5 C 449.123 -0.776 448.899 -1 448.623 -1 L 448.623 0 Z M 450.619 -1 C 450.343 -1 450.119 -0.776 450.119 -0.5 C 450.119 -0.224 450.343 0 450.619 0 L 450.619 -1 Z M 452.615 0 C 452.891 0 453.115 -0.224 453.115 -0.5 C 453.115 -0.776 452.891 -1 452.615 -1 L 452.615 0 Z M 454.611 -1 C 454.335 -1 454.111 -0.776 454.111 -0.5 C 454.111 -0.224 454.335 0 454.611 0 L 454.611 -1 Z M 456.607 0 C 456.884 0 457.107 -0.224 457.107 -0.5 C 457.107 -0.776 456.884 -1 456.607 -1 L 456.607 0 Z M 458.604 -1 C 458.327 -1 458.104 -0.776 458.104 -0.5 C 458.104 -0.224 458.327 0 458.604 0 L 458.604 -1 Z M 460.6 0 C 460.876 0 461.1 -0.224 461.1 -0.5 C 461.1 -0.776 460.876 -1 460.6 -1 L 460.6 0 Z M 462.596 -1 C 462.32 -1 462.096 -0.776 462.096 -0.5 C 462.096 -0.224 462.32 0 462.596 0 L 462.596 -1 Z M 464.592 0 C 464.868 0 465.092 -0.224 465.092 -0.5 C 465.092 -0.776 464.868 -1 464.592 -1 L 464.592 0 Z M 466.588 -1 C 466.312 -1 466.088 -0.776 466.088 -0.5 C 466.088 -0.224 466.312 0 466.588 0 L 466.588 -1 Z M 468.584 0 C 468.86 0 469.084 -0.224 469.084 -0.5 C 469.084 -0.776 468.86 -1 468.584 -1 L 468.584 0 Z M 470.58 -1 C 470.304 -1 470.08 -0.776 470.08 -0.5 C 470.08 -0.224 470.304 0 470.58 0 L 470.58 -1 Z M 472.576 0 C 472.852 0 473.076 -0.224 473.076 -0.5 C 473.076 -0.776 472.852 -1 472.576 -1 L 472.576 0 Z M 474.572 -1 C 474.296 -1 474.072 -0.776 474.072 -0.5 C 474.072 -0.224 474.296 0 474.572 0 L 474.572 -1 Z M 476.568 0 C 476.845 0 477.068 -0.224 477.068 -0.5 C 477.068 -0.776 476.845 -1 476.568 -1 L 476.568 0 Z M 478.564 -1 C 478.288 -1 478.064 -0.776 478.064 -0.5 C 478.064 -0.224 478.288 0 478.564 0 L 478.564 -1 Z M 480.561 0 C 480.837 0 481.061 -0.224 481.061 -0.5 C 481.061 -0.776 480.837 -1 480.561 -1 L 480.561 0 Z M 482.557 -1 C 482.28 -1 482.057 -0.776 482.057 -0.5 C 482.057 -0.224 482.28 0 482.557 0 L 482.557 -1 Z M 484.553 0 C 484.829 0 485.053 -0.224 485.053 -0.5 C 485.053 -0.776 484.829 -1 484.553 -1 L 484.553 0 Z M 486.549 -1 C 486.273 -1 486.049 -0.776 486.049 -0.5 C 486.049 -0.224 486.273 0 486.549 0 L 486.549 -1 Z M 488.545 0 C 488.821 0 489.045 -0.224 489.045 -0.5 C 489.045 -0.776 488.821 -1 488.545 -1 L 488.545 0 Z M 490.541 -1 C 490.265 -1 490.041 -0.776 490.041 -0.5 C 490.041 -0.224 490.265 0 490.541 0 L 490.541 -1 Z M 492.537 0 C 492.813 0 493.037 -0.224 493.037 -0.5 C 493.037 -0.776 492.813 -1 492.537 -1 L 492.537 0 Z M 494.533 -1 C 494.257 -1 494.033 -0.776 494.033 -0.5 C 494.033 -0.224 494.257 0 494.533 0 L 494.533 -1 Z M 496.529 0 C 496.805 0 497.029 -0.224 497.029 -0.5 C 497.029 -0.776 496.805 -1 496.529 -1 L 496.529 0 Z M 498.525 -1 C 498.249 -1 498.025 -0.776 498.025 -0.5 C 498.025 -0.224 498.249 0 498.525 0 L 498.525 -1 Z M 500.521 0 C 500.798 0 501.021 -0.224 501.021 -0.5 C 501.021 -0.776 500.798 -1 500.521 -1 L 500.521 0 Z M 502.518 -1 C 502.241 -1 502.018 -0.776 502.018 -0.5 C 502.018 -0.224 502.241 0 502.518 0 L 502.518 -1 Z M 504.514 0 C 504.79 0 505.014 -0.224 505.014 -0.5 C 505.014 -0.776 504.79 -1 504.514 -1 L 504.514 0 Z M 506.51 -1 C 506.234 -1 506.01 -0.776 506.01 -0.5 C 506.01 -0.224 506.234 0 506.51 0 L 506.51 -1 Z M 508.506 0 C 508.782 0 509.006 -0.224 509.006 -0.5 C 509.006 -0.776 508.782 -1 508.506 -1 L 508.506 0 Z M 510.502 -1 C 510.226 -1 510.002 -0.776 510.002 -0.5 C 510.002 -0.224 510.226 0 510.502 0 L 510.502 -1 Z M 0.5 0 L 1.498 0 L 1.498 -1 L 0.5 -1 L 0.5 0 Z M 3.494 0 L 5.49 0 L 5.49 -1 L 3.494 -1 L 3.494 0 Z M 7.486 0 L 9.482 0 L 9.482 -1 L 7.486 -1 L 7.486 0 Z M 11.479 0 L 13.475 0 L 13.475 -1 L 11.479 -1 L 11.479 0 Z M 15.471 0 L 17.467 0 L 17.467 -1 L 15.471 -1 L 15.471 0 Z M 19.463 0 L 21.459 0 L 21.459 -1 L 19.463 -1 L 19.463 0 Z M 23.455 0 L 25.451 0 L 25.451 -1 L 23.455 -1 L 23.455 0 Z M 27.447 0 L 29.443 0 L 29.443 -1 L 27.447 -1 L 27.447 0 Z M 31.439 0 L 33.436 0 L 33.436 -1 L 31.439 -1 L 31.439 0 Z M 35.432 0 L 37.428 0 L 37.428 -1 L 35.432 -1 L 35.432 0 Z M 39.424 0 L 41.42 0 L 41.42 -1 L 39.424 -1 L 39.424 0 Z M 43.416 0 L 45.412 0 L 45.412 -1 L 43.416 -1 L 43.416 0 Z M 47.408 0 L 49.404 0 L 49.404 -1 L 47.408 -1 L 47.408 0 Z M 51.4 0 L 53.396 0 L 53.396 -1 L 51.4 -1 L 51.4 0 Z M 55.393 0 L 57.389 0 L 57.389 -1 L 55.393 -1 L 55.393 0 Z M 59.385 0 L 61.381 0 L 61.381 -1 L 59.385 -1 L 59.385 0 Z M 63.377 0 L 65.373 0 L 65.373 -1 L 63.377 -1 L 63.377 0 Z M 67.369 0 L 69.365 0 L 69.365 -1 L 67.369 -1 L 67.369 0 Z M 71.361 0 L 73.357 0 L 73.357 -1 L 71.361 -1 L 71.361 0 Z M 75.354 0 L 77.35 0 L 77.35 -1 L 75.354 -1 L 75.354 0 Z M 79.346 0 L 81.342 0 L 81.342 -1 L 79.346 -1 L 79.346 0 Z M 83.338 0 L 85.334 0 L 85.334 -1 L 83.338 -1 L 83.338 0 Z M 87.33 0 L 89.326 0 L 89.326 -1 L 87.33 -1 L 87.33 0 Z M 91.322 0 L 93.318 0 L 93.318 -1 L 91.322 -1 L 91.322 0 Z M 95.314 0 L 97.311 0 L 97.311 -1 L 95.314 -1 L 95.314 0 Z M 99.307 0 L 101.303 0 L 101.303 -1 L 99.307 -1 L 99.307 0 Z M 103.299 0 L 105.295 0 L 105.295 -1 L 103.299 -1 L 103.299 0 Z M 107.291 0 L 109.287 0 L 109.287 -1 L 107.291 -1 L 107.291 0 Z M 111.283 0 L 113.279 0 L 113.279 -1 L 111.283 -1 L 111.283 0 Z M 115.275 0 L 117.271 0 L 117.271 -1 L 115.275 -1 L 115.275 0 Z M 119.268 0 L 121.264 0 L 121.264 -1 L 119.268 -1 L 119.268 0 Z M 123.26 0 L 125.256 0 L 125.256 -1 L 123.26 -1 L 123.26 0 Z M 127.252 0 L 129.248 0 L 129.248 -1 L 127.252 -1 L 127.252 0 Z M 131.244 0 L 133.24 0 L 133.24 -1 L 131.244 -1 L 131.244 0 Z M 135.236 0 L 137.232 0 L 137.232 -1 L 135.236 -1 L 135.236 0 Z M 139.229 0 L 141.225 0 L 141.225 -1 L 139.229 -1 L 139.229 0 Z M 143.221 0 L 145.217 0 L 145.217 -1 L 143.221 -1 L 143.221 0 Z M 147.213 0 L 149.209 0 L 149.209 -1 L 147.213 -1 L 147.213 0 Z M 151.205 0 L 153.201 0 L 153.201 -1 L 151.205 -1 L 151.205 0 Z M 155.197 0 L 157.193 0 L 157.193 -1 L 155.197 -1 L 155.197 0 Z M 159.189 0 L 161.186 0 L 161.186 -1 L 159.189 -1 L 159.189 0 Z M 163.182 0 L 165.178 0 L 165.178 -1 L 163.182 -1 L 163.182 0 Z M 167.174 0 L 169.17 0 L 169.17 -1 L 167.174 -1 L 167.174 0 Z M 171.166 0 L 173.162 0 L 173.162 -1 L 171.166 -1 L 171.166 0 Z M 175.158 0 L 177.154 0 L 177.154 -1 L 175.158 -1 L 175.158 0 Z M 179.15 0 L 181.146 0 L 181.146 -1 L 179.15 -1 L 179.15 0 Z M 183.143 0 L 185.139 0 L 185.139 -1 L 183.143 -1 L 183.143 0 Z M 187.135 0 L 189.131 0 L 189.131 -1 L 187.135 -1 L 187.135 0 Z M 191.127 0 L 193.123 0 L 193.123 -1 L 191.127 -1 L 191.127 0 Z M 195.119 0 L 197.115 0 L 197.115 -1 L 195.119 -1 L 195.119 0 Z M 199.111 0 L 201.107 0 L 201.107 -1 L 199.111 -1 L 199.111 0 Z M 203.104 0 L 205.1 0 L 205.1 -1 L 203.104 -1 L 203.104 0 Z M 207.096 0 L 209.092 0 L 209.092 -1 L 207.096 -1 L 207.096 0 Z M 211.088 0 L 213.084 0 L 213.084 -1 L 211.088 -1 L 211.088 0 Z M 215.08 0 L 217.076 0 L 217.076 -1 L 215.08 -1 L 215.08 0 Z M 219.072 0 L 221.068 0 L 221.068 -1 L 219.072 -1 L 219.072 0 Z M 223.064 0 L 225.061 0 L 225.061 -1 L 223.064 -1 L 223.064 0 Z M 227.057 0 L 229.053 0 L 229.053 -1 L 227.057 -1 L 227.057 0 Z M 231.049 0 L 233.045 0 L 233.045 -1 L 231.049 -1 L 231.049 0 Z M 235.041 0 L 237.037 0 L 237.037 -1 L 235.041 -1 L 235.041 0 Z M 239.033 0 L 241.029 0 L 241.029 -1 L 239.033 -1 L 239.033 0 Z M 243.025 0 L 245.021 0 L 245.021 -1 L 243.025 -1 L 243.025 0 Z M 247.018 0 L 249.014 0 L 249.014 -1 L 247.018 -1 L 247.018 0 Z M 251.01 0 L 253.006 0 L 253.006 -1 L 251.01 -1 L 251.01 0 Z M 255.002 0 L 256.998 0 L 256.998 -1 L 255.002 -1 L 255.002 0 Z M 258.994 0 L 260.99 0 L 260.99 -1 L 258.994 -1 L 258.994 0 Z M 262.986 0 L 264.982 0 L 264.982 -1 L 262.986 -1 L 262.986 0 Z M 266.979 0 L 268.975 0 L 268.975 -1 L 266.979 -1 L 266.979 0 Z M 270.971 0 L 272.967 0 L 272.967 -1 L 270.971 -1 L 270.971 0 Z M 274.963 0 L 276.959 0 L 276.959 -1 L 274.963 -1 L 274.963 0 Z M 278.955 0 L 280.951 0 L 280.951 -1 L 278.955 -1 L 278.955 0 Z M 282.947 0 L 284.943 0 L 284.943 -1 L 282.947 -1 L 282.947 0 Z M 286.939 0 L 288.936 0 L 288.936 -1 L 286.939 -1 L 286.939 0 Z M 290.932 0 L 292.928 0 L 292.928 -1 L 290.932 -1 L 290.932 0 Z M 294.924 0 L 296.92 0 L 296.92 -1 L 294.924 -1 L 294.924 0 Z M 298.916 0 L 300.912 0 L 300.912 -1 L 298.916 -1 L 298.916 0 Z M 302.908 0 L 304.904 0 L 304.904 -1 L 302.908 -1 L 302.908 0 Z M 306.9 0 L 308.896 0 L 308.896 -1 L 306.9 -1 L 306.9 0 Z M 310.893 0 L 312.889 0 L 312.889 -1 L 310.893 -1 L 310.893 0 Z M 314.885 0 L 316.881 0 L 316.881 -1 L 314.885 -1 L 314.885 0 Z M 318.877 0 L 320.873 0 L 320.873 -1 L 318.877 -1 L 318.877 0 Z M 322.869 0 L 324.865 0 L 324.865 -1 L 322.869 -1 L 322.869 0 Z M 326.861 0 L 328.857 0 L 328.857 -1 L 326.861 -1 L 326.861 0 Z M 330.854 0 L 332.85 0 L 332.85 -1 L 330.854 -1 L 330.854 0 Z M 334.846 0 L 336.842 0 L 336.842 -1 L 334.846 -1 L 334.846 0 Z M 338.838 0 L 340.834 0 L 340.834 -1 L 338.838 -1 L 338.838 0 Z M 342.83 0 L 344.826 0 L 344.826 -1 L 342.83 -1 L 342.83 0 Z M 346.822 0 L 348.818 0 L 348.818 -1 L 346.822 -1 L 346.822 0 Z M 350.814 0 L 352.811 0 L 352.811 -1 L 350.814 -1 L 350.814 0 Z M 354.807 0 L 356.803 0 L 356.803 -1 L 354.807 -1 L 354.807 0 Z M 358.799 0 L 360.795 0 L 360.795 -1 L 358.799 -1 L 358.799 0 Z M 362.791 0 L 364.787 0 L 364.787 -1 L 362.791 -1 L 362.791 0 Z M 366.783 0 L 368.779 0 L 368.779 -1 L 366.783 -1 L 366.783 0 Z M 370.775 0 L 372.771 0 L 372.771 -1 L 370.775 -1 L 370.775 0 Z M 374.768 0 L 376.764 0 L 376.764 -1 L 374.768 -1 L 374.768 0 Z M 378.76 0 L 380.756 0 L 380.756 -1 L 378.76 -1 L 378.76 0 Z M 382.752 0 L 384.748 0 L 384.748 -1 L 382.752 -1 L 382.752 0 Z M 386.744 0 L 388.74 0 L 388.74 -1 L 386.744 -1 L 386.744 0 Z M 390.736 0 L 392.732 0 L 392.732 -1 L 390.736 -1 L 390.736 0 Z M 394.729 0 L 396.725 0 L 396.725 -1 L 394.729 -1 L 394.729 0 Z M 398.721 0 L 400.717 0 L 400.717 -1 L 398.721 -1 L 398.721 0 Z M 402.713 0 L 404.709 0 L 404.709 -1 L 402.713 -1 L 402.713 0 Z M 406.705 0 L 408.701 0 L 408.701 -1 L 406.705 -1 L 406.705 0 Z M 410.697 0 L 412.693 0 L 412.693 -1 L 410.697 -1 L 410.697 0 Z M 414.689 0 L 416.686 0 L 416.686 -1 L 414.689 -1 L 414.689 0 Z M 418.682 0 L 420.678 0 L 420.678 -1 L 418.682 -1 L 418.682 0 Z M 422.674 0 L 424.67 0 L 424.67 -1 L 422.674 -1 L 422.674 0 Z M 426.666 0 L 428.662 0 L 428.662 -1 L 426.666 -1 L 426.666 0 Z M 430.658 0 L 432.654 0 L 432.654 -1 L 430.658 -1 L 430.658 0 Z M 434.65 0 L 436.646 0 L 436.646 -1 L 434.65 -1 L 434.65 0 Z M 438.643 0 L 440.639 0 L 440.639 -1 L 438.643 -1 L 438.643 0 Z M 442.635 0 L 444.631 0 L 444.631 -1 L 442.635 -1 L 442.635 0 Z M 446.627 0 L 448.623 0 L 448.623 -1 L 446.627 -1 L 446.627 0 Z M 450.619 0 L 452.615 0 L 452.615 -1 L 450.619 -1 L 450.619 0 Z M 454.611 0 L 456.607 0 L 456.607 -1 L 454.611 -1 L 454.611 0 Z M 458.604 0 L 460.6 0 L 460.6 -1 L 458.604 -1 L 458.604 0 Z M 462.596 0 L 464.592 0 L 464.592 -1 L 462.596 -1 L 462.596 0 Z M 466.588 0 L 468.584 0 L 468.584 -1 L 466.588 -1 L 466.588 0 Z M 470.58 0 L 472.576 0 L 472.576 -1 L 470.58 -1 L 470.58 0 Z M 474.572 0 L 476.568 0 L 476.568 -1 L 474.572 -1 L 474.572 0 Z M 478.564 0 L 480.561 0 L 480.561 -1 L 478.564 -1 L 478.564 0 Z M 482.557 0 L 484.553 0 L 484.553 -1 L 482.557 -1 L 482.557 0 Z M 486.549 0 L 488.545 0 L 488.545 -1 L 486.549 -1 L 486.549 0 Z M 490.541 0 L 492.537 0 L 492.537 -1 L 490.541 -1 L 490.541 0 Z M 494.533 0 L 496.529 0 L 496.529 -1 L 494.533 -1 L 494.533 0 Z M 498.525 0 L 500.521 0 L 500.521 -1 L 498.525 -1 L 498.525 0 Z M 502.518 0 L 504.514 0 L 504.514 -1 L 502.518 -1 L 502.518 0 Z M 506.51 0 L 508.506 0 L 508.506 -1 L 506.51 -1 L 506.51 0 Z M 510.502 0 L 511.5 0 L 511.5 -1 L 510.502 -1 L 510.502 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 512,
    height: 1,
    viewBox: "0 -0.500 512 1",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "matrix(-1,0,0,-1,512,90.116)",
      transformOrigin: "0 0",
      width: 512,
      height: 1,
      opacity: 0.32
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.5 -1 C 0.224 -1 0 -0.776 0 -0.5 C 0 -0.224 0.224 0 0.5 0 L 0.5 -1 Z M 511.5 0 C 511.776 0 512 -0.224 512 -0.5 C 512 -0.776 511.776 -1 511.5 -1 L 511.5 0 Z M 1.498 0 C 1.774 0 1.998 -0.224 1.998 -0.5 C 1.998 -0.776 1.774 -1 1.498 -1 L 1.498 0 Z M 3.494 -1 C 3.218 -1 2.994 -0.776 2.994 -0.5 C 2.994 -0.224 3.218 0 3.494 0 L 3.494 -1 Z M 5.49 0 C 5.766 0 5.99 -0.224 5.99 -0.5 C 5.99 -0.776 5.766 -1 5.49 -1 L 5.49 0 Z M 7.486 -1 C 7.21 -1 6.986 -0.776 6.986 -0.5 C 6.986 -0.224 7.21 0 7.486 0 L 7.486 -1 Z M 9.482 0 C 9.759 0 9.982 -0.224 9.982 -0.5 C 9.982 -0.776 9.759 -1 9.482 -1 L 9.482 0 Z M 11.479 -1 C 11.202 -1 10.979 -0.776 10.979 -0.5 C 10.979 -0.224 11.202 0 11.479 0 L 11.479 -1 Z M 13.475 0 C 13.751 0 13.975 -0.224 13.975 -0.5 C 13.975 -0.776 13.751 -1 13.475 -1 L 13.475 0 Z M 15.471 -1 C 15.195 -1 14.971 -0.776 14.971 -0.5 C 14.971 -0.224 15.195 0 15.471 0 L 15.471 -1 Z M 17.467 0 C 17.743 0 17.967 -0.224 17.967 -0.5 C 17.967 -0.776 17.743 -1 17.467 -1 L 17.467 0 Z M 19.463 -1 C 19.187 -1 18.963 -0.776 18.963 -0.5 C 18.963 -0.224 19.187 0 19.463 0 L 19.463 -1 Z M 21.459 0 C 21.735 0 21.959 -0.224 21.959 -0.5 C 21.959 -0.776 21.735 -1 21.459 -1 L 21.459 0 Z M 23.455 -1 C 23.179 -1 22.955 -0.776 22.955 -0.5 C 22.955 -0.224 23.179 0 23.455 0 L 23.455 -1 Z M 25.451 0 C 25.727 0 25.951 -0.224 25.951 -0.5 C 25.951 -0.776 25.727 -1 25.451 -1 L 25.451 0 Z M 27.447 -1 C 27.171 -1 26.947 -0.776 26.947 -0.5 C 26.947 -0.224 27.171 0 27.447 0 L 27.447 -1 Z M 29.443 0 C 29.72 0 29.943 -0.224 29.943 -0.5 C 29.943 -0.776 29.72 -1 29.443 -1 L 29.443 0 Z M 31.439 -1 C 31.163 -1 30.939 -0.776 30.939 -0.5 C 30.939 -0.224 31.163 0 31.439 0 L 31.439 -1 Z M 33.436 0 C 33.712 0 33.936 -0.224 33.936 -0.5 C 33.936 -0.776 33.712 -1 33.436 -1 L 33.436 0 Z M 35.432 -1 C 35.155 -1 34.932 -0.776 34.932 -0.5 C 34.932 -0.224 35.155 0 35.432 0 L 35.432 -1 Z M 37.428 0 C 37.704 0 37.928 -0.224 37.928 -0.5 C 37.928 -0.776 37.704 -1 37.428 -1 L 37.428 0 Z M 39.424 -1 C 39.148 -1 38.924 -0.776 38.924 -0.5 C 38.924 -0.224 39.148 0 39.424 0 L 39.424 -1 Z M 41.42 0 C 41.696 0 41.92 -0.224 41.92 -0.5 C 41.92 -0.776 41.696 -1 41.42 -1 L 41.42 0 Z M 43.416 -1 C 43.14 -1 42.916 -0.776 42.916 -0.5 C 42.916 -0.224 43.14 0 43.416 0 L 43.416 -1 Z M 45.412 0 C 45.688 0 45.912 -0.224 45.912 -0.5 C 45.912 -0.776 45.688 -1 45.412 -1 L 45.412 0 Z M 47.408 -1 C 47.132 -1 46.908 -0.776 46.908 -0.5 C 46.908 -0.224 47.132 0 47.408 0 L 47.408 -1 Z M 49.404 0 C 49.68 0 49.904 -0.224 49.904 -0.5 C 49.904 -0.776 49.68 -1 49.404 -1 L 49.404 0 Z M 51.4 -1 C 51.124 -1 50.9 -0.776 50.9 -0.5 C 50.9 -0.224 51.124 0 51.4 0 L 51.4 -1 Z M 53.396 0 C 53.673 0 53.896 -0.224 53.896 -0.5 C 53.896 -0.776 53.673 -1 53.396 -1 L 53.396 0 Z M 55.393 -1 C 55.116 -1 54.893 -0.776 54.893 -0.5 C 54.893 -0.224 55.116 0 55.393 0 L 55.393 -1 Z M 57.389 0 C 57.665 0 57.889 -0.224 57.889 -0.5 C 57.889 -0.776 57.665 -1 57.389 -1 L 57.389 0 Z M 59.385 -1 C 59.109 -1 58.885 -0.776 58.885 -0.5 C 58.885 -0.224 59.109 0 59.385 0 L 59.385 -1 Z M 61.381 0 C 61.657 0 61.881 -0.224 61.881 -0.5 C 61.881 -0.776 61.657 -1 61.381 -1 L 61.381 0 Z M 63.377 -1 C 63.101 -1 62.877 -0.776 62.877 -0.5 C 62.877 -0.224 63.101 0 63.377 0 L 63.377 -1 Z M 65.373 0 C 65.649 0 65.873 -0.224 65.873 -0.5 C 65.873 -0.776 65.649 -1 65.373 -1 L 65.373 0 Z M 67.369 -1 C 67.093 -1 66.869 -0.776 66.869 -0.5 C 66.869 -0.224 67.093 0 67.369 0 L 67.369 -1 Z M 69.365 0 C 69.641 0 69.865 -0.224 69.865 -0.5 C 69.865 -0.776 69.641 -1 69.365 -1 L 69.365 0 Z M 71.361 -1 C 71.085 -1 70.861 -0.776 70.861 -0.5 C 70.861 -0.224 71.085 0 71.361 0 L 71.361 -1 Z M 73.357 0 C 73.634 0 73.857 -0.224 73.857 -0.5 C 73.857 -0.776 73.634 -1 73.357 -1 L 73.357 0 Z M 75.354 -1 C 75.077 -1 74.854 -0.776 74.854 -0.5 C 74.854 -0.224 75.077 0 75.354 0 L 75.354 -1 Z M 77.35 0 C 77.626 0 77.85 -0.224 77.85 -0.5 C 77.85 -0.776 77.626 -1 77.35 -1 L 77.35 0 Z M 79.346 -1 C 79.07 -1 78.846 -0.776 78.846 -0.5 C 78.846 -0.224 79.07 0 79.346 0 L 79.346 -1 Z M 81.342 0 C 81.618 0 81.842 -0.224 81.842 -0.5 C 81.842 -0.776 81.618 -1 81.342 -1 L 81.342 0 Z M 83.338 -1 C 83.062 -1 82.838 -0.776 82.838 -0.5 C 82.838 -0.224 83.062 0 83.338 0 L 83.338 -1 Z M 85.334 0 C 85.61 0 85.834 -0.224 85.834 -0.5 C 85.834 -0.776 85.61 -1 85.334 -1 L 85.334 0 Z M 87.33 -1 C 87.054 -1 86.83 -0.776 86.83 -0.5 C 86.83 -0.224 87.054 0 87.33 0 L 87.33 -1 Z M 89.326 0 C 89.602 0 89.826 -0.224 89.826 -0.5 C 89.826 -0.776 89.602 -1 89.326 -1 L 89.326 0 Z M 91.322 -1 C 91.046 -1 90.822 -0.776 90.822 -0.5 C 90.822 -0.224 91.046 0 91.322 0 L 91.322 -1 Z M 93.318 0 C 93.595 0 93.818 -0.224 93.818 -0.5 C 93.818 -0.776 93.595 -1 93.318 -1 L 93.318 0 Z M 95.314 -1 C 95.038 -1 94.814 -0.776 94.814 -0.5 C 94.814 -0.224 95.038 0 95.314 0 L 95.314 -1 Z M 97.311 0 C 97.587 0 97.811 -0.224 97.811 -0.5 C 97.811 -0.776 97.587 -1 97.311 -1 L 97.311 0 Z M 99.307 -1 C 99.03 -1 98.807 -0.776 98.807 -0.5 C 98.807 -0.224 99.03 0 99.307 0 L 99.307 -1 Z M 101.303 0 C 101.579 0 101.803 -0.224 101.803 -0.5 C 101.803 -0.776 101.579 -1 101.303 -1 L 101.303 0 Z M 103.299 -1 C 103.023 -1 102.799 -0.776 102.799 -0.5 C 102.799 -0.224 103.023 0 103.299 0 L 103.299 -1 Z M 105.295 0 C 105.571 0 105.795 -0.224 105.795 -0.5 C 105.795 -0.776 105.571 -1 105.295 -1 L 105.295 0 Z M 107.291 -1 C 107.015 -1 106.791 -0.776 106.791 -0.5 C 106.791 -0.224 107.015 0 107.291 0 L 107.291 -1 Z M 109.287 0 C 109.563 0 109.787 -0.224 109.787 -0.5 C 109.787 -0.776 109.563 -1 109.287 -1 L 109.287 0 Z M 111.283 -1 C 111.007 -1 110.783 -0.776 110.783 -0.5 C 110.783 -0.224 111.007 0 111.283 0 L 111.283 -1 Z M 113.279 0 C 113.555 0 113.779 -0.224 113.779 -0.5 C 113.779 -0.776 113.555 -1 113.279 -1 L 113.279 0 Z M 115.275 -1 C 114.999 -1 114.775 -0.776 114.775 -0.5 C 114.775 -0.224 114.999 0 115.275 0 L 115.275 -1 Z M 117.271 0 C 117.548 0 117.771 -0.224 117.771 -0.5 C 117.771 -0.776 117.548 -1 117.271 -1 L 117.271 0 Z M 119.268 -1 C 118.991 -1 118.768 -0.776 118.768 -0.5 C 118.768 -0.224 118.991 0 119.268 0 L 119.268 -1 Z M 121.264 0 C 121.54 0 121.764 -0.224 121.764 -0.5 C 121.764 -0.776 121.54 -1 121.264 -1 L 121.264 0 Z M 123.26 -1 C 122.984 -1 122.76 -0.776 122.76 -0.5 C 122.76 -0.224 122.984 0 123.26 0 L 123.26 -1 Z M 125.256 0 C 125.532 0 125.756 -0.224 125.756 -0.5 C 125.756 -0.776 125.532 -1 125.256 -1 L 125.256 0 Z M 127.252 -1 C 126.976 -1 126.752 -0.776 126.752 -0.5 C 126.752 -0.224 126.976 0 127.252 0 L 127.252 -1 Z M 129.248 0 C 129.524 0 129.748 -0.224 129.748 -0.5 C 129.748 -0.776 129.524 -1 129.248 -1 L 129.248 0 Z M 131.244 -1 C 130.968 -1 130.744 -0.776 130.744 -0.5 C 130.744 -0.224 130.968 0 131.244 0 L 131.244 -1 Z M 133.24 0 C 133.516 0 133.74 -0.224 133.74 -0.5 C 133.74 -0.776 133.516 -1 133.24 -1 L 133.24 0 Z M 135.236 -1 C 134.96 -1 134.736 -0.776 134.736 -0.5 C 134.736 -0.224 134.96 0 135.236 0 L 135.236 -1 Z M 137.232 0 C 137.509 0 137.732 -0.224 137.732 -0.5 C 137.732 -0.776 137.509 -1 137.232 -1 L 137.232 0 Z M 139.229 -1 C 138.952 -1 138.729 -0.776 138.729 -0.5 C 138.729 -0.224 138.952 0 139.229 0 L 139.229 -1 Z M 141.225 0 C 141.501 0 141.725 -0.224 141.725 -0.5 C 141.725 -0.776 141.501 -1 141.225 -1 L 141.225 0 Z M 143.221 -1 C 142.945 -1 142.721 -0.776 142.721 -0.5 C 142.721 -0.224 142.945 0 143.221 0 L 143.221 -1 Z M 145.217 0 C 145.493 0 145.717 -0.224 145.717 -0.5 C 145.717 -0.776 145.493 -1 145.217 -1 L 145.217 0 Z M 147.213 -1 C 146.937 -1 146.713 -0.776 146.713 -0.5 C 146.713 -0.224 146.937 0 147.213 0 L 147.213 -1 Z M 149.209 0 C 149.485 0 149.709 -0.224 149.709 -0.5 C 149.709 -0.776 149.485 -1 149.209 -1 L 149.209 0 Z M 151.205 -1 C 150.929 -1 150.705 -0.776 150.705 -0.5 C 150.705 -0.224 150.929 0 151.205 0 L 151.205 -1 Z M 153.201 0 C 153.477 0 153.701 -0.224 153.701 -0.5 C 153.701 -0.776 153.477 -1 153.201 -1 L 153.201 0 Z M 155.197 -1 C 154.921 -1 154.697 -0.776 154.697 -0.5 C 154.697 -0.224 154.921 0 155.197 0 L 155.197 -1 Z M 157.193 0 C 157.469 0 157.693 -0.224 157.693 -0.5 C 157.693 -0.776 157.469 -1 157.193 -1 L 157.193 0 Z M 159.189 -1 C 158.913 -1 158.689 -0.776 158.689 -0.5 C 158.689 -0.224 158.913 0 159.189 0 L 159.189 -1 Z M 161.186 0 C 161.462 0 161.686 -0.224 161.686 -0.5 C 161.686 -0.776 161.462 -1 161.186 -1 L 161.186 0 Z M 163.182 -1 C 162.906 -1 162.682 -0.776 162.682 -0.5 C 162.682 -0.224 162.906 0 163.182 0 L 163.182 -1 Z M 165.178 0 C 165.454 0 165.678 -0.224 165.678 -0.5 C 165.678 -0.776 165.454 -1 165.178 -1 L 165.178 0 Z M 167.174 -1 C 166.898 -1 166.674 -0.776 166.674 -0.5 C 166.674 -0.224 166.898 0 167.174 0 L 167.174 -1 Z M 169.17 0 C 169.446 0 169.67 -0.224 169.67 -0.5 C 169.67 -0.776 169.446 -1 169.17 -1 L 169.17 0 Z M 171.166 -1 C 170.89 -1 170.666 -0.776 170.666 -0.5 C 170.666 -0.224 170.89 0 171.166 0 L 171.166 -1 Z M 173.162 0 C 173.438 0 173.662 -0.224 173.662 -0.5 C 173.662 -0.776 173.438 -1 173.162 -1 L 173.162 0 Z M 175.158 -1 C 174.882 -1 174.658 -0.776 174.658 -0.5 C 174.658 -0.224 174.882 0 175.158 0 L 175.158 -1 Z M 177.154 0 C 177.43 0 177.654 -0.224 177.654 -0.5 C 177.654 -0.776 177.43 -1 177.154 -1 L 177.154 0 Z M 179.15 -1 C 178.874 -1 178.65 -0.776 178.65 -0.5 C 178.65 -0.224 178.874 0 179.15 0 L 179.15 -1 Z M 181.146 0 C 181.423 0 181.646 -0.224 181.646 -0.5 C 181.646 -0.776 181.423 -1 181.146 -1 L 181.146 0 Z M 183.143 -1 C 182.866 -1 182.643 -0.776 182.643 -0.5 C 182.643 -0.224 182.866 0 183.143 0 L 183.143 -1 Z M 185.139 0 C 185.415 0 185.639 -0.224 185.639 -0.5 C 185.639 -0.776 185.415 -1 185.139 -1 L 185.139 0 Z M 187.135 -1 C 186.859 -1 186.635 -0.776 186.635 -0.5 C 186.635 -0.224 186.859 0 187.135 0 L 187.135 -1 Z M 189.131 0 C 189.407 0 189.631 -0.224 189.631 -0.5 C 189.631 -0.776 189.407 -1 189.131 -1 L 189.131 0 Z M 191.127 -1 C 190.851 -1 190.627 -0.776 190.627 -0.5 C 190.627 -0.224 190.851 0 191.127 0 L 191.127 -1 Z M 193.123 0 C 193.399 0 193.623 -0.224 193.623 -0.5 C 193.623 -0.776 193.399 -1 193.123 -1 L 193.123 0 Z M 195.119 -1 C 194.843 -1 194.619 -0.776 194.619 -0.5 C 194.619 -0.224 194.843 0 195.119 0 L 195.119 -1 Z M 197.115 0 C 197.391 0 197.615 -0.224 197.615 -0.5 C 197.615 -0.776 197.391 -1 197.115 -1 L 197.115 0 Z M 199.111 -1 C 198.835 -1 198.611 -0.776 198.611 -0.5 C 198.611 -0.224 198.835 0 199.111 0 L 199.111 -1 Z M 201.107 0 C 201.384 0 201.607 -0.224 201.607 -0.5 C 201.607 -0.776 201.384 -1 201.107 -1 L 201.107 0 Z M 203.104 -1 C 202.827 -1 202.604 -0.776 202.604 -0.5 C 202.604 -0.224 202.827 0 203.104 0 L 203.104 -1 Z M 205.1 0 C 205.376 0 205.6 -0.224 205.6 -0.5 C 205.6 -0.776 205.376 -1 205.1 -1 L 205.1 0 Z M 207.096 -1 C 206.82 -1 206.596 -0.776 206.596 -0.5 C 206.596 -0.224 206.82 0 207.096 0 L 207.096 -1 Z M 209.092 0 C 209.368 0 209.592 -0.224 209.592 -0.5 C 209.592 -0.776 209.368 -1 209.092 -1 L 209.092 0 Z M 211.088 -1 C 210.812 -1 210.588 -0.776 210.588 -0.5 C 210.588 -0.224 210.812 0 211.088 0 L 211.088 -1 Z M 213.084 0 C 213.36 0 213.584 -0.224 213.584 -0.5 C 213.584 -0.776 213.36 -1 213.084 -1 L 213.084 0 Z M 215.08 -1 C 214.804 -1 214.58 -0.776 214.58 -0.5 C 214.58 -0.224 214.804 0 215.08 0 L 215.08 -1 Z M 217.076 0 C 217.352 0 217.576 -0.224 217.576 -0.5 C 217.576 -0.776 217.352 -1 217.076 -1 L 217.076 0 Z M 219.072 -1 C 218.796 -1 218.572 -0.776 218.572 -0.5 C 218.572 -0.224 218.796 0 219.072 0 L 219.072 -1 Z M 221.068 0 C 221.344 0 221.568 -0.224 221.568 -0.5 C 221.568 -0.776 221.344 -1 221.068 -1 L 221.068 0 Z M 223.064 -1 C 222.788 -1 222.564 -0.776 222.564 -0.5 C 222.564 -0.224 222.788 0 223.064 0 L 223.064 -1 Z M 225.061 0 C 225.337 0 225.561 -0.224 225.561 -0.5 C 225.561 -0.776 225.337 -1 225.061 -1 L 225.061 0 Z M 227.057 -1 C 226.781 -1 226.557 -0.776 226.557 -0.5 C 226.557 -0.224 226.781 0 227.057 0 L 227.057 -1 Z M 229.053 0 C 229.329 0 229.553 -0.224 229.553 -0.5 C 229.553 -0.776 229.329 -1 229.053 -1 L 229.053 0 Z M 231.049 -1 C 230.773 -1 230.549 -0.776 230.549 -0.5 C 230.549 -0.224 230.773 0 231.049 0 L 231.049 -1 Z M 233.045 0 C 233.321 0 233.545 -0.224 233.545 -0.5 C 233.545 -0.776 233.321 -1 233.045 -1 L 233.045 0 Z M 235.041 -1 C 234.765 -1 234.541 -0.776 234.541 -0.5 C 234.541 -0.224 234.765 0 235.041 0 L 235.041 -1 Z M 237.037 0 C 237.313 0 237.537 -0.224 237.537 -0.5 C 237.537 -0.776 237.313 -1 237.037 -1 L 237.037 0 Z M 239.033 -1 C 238.757 -1 238.533 -0.776 238.533 -0.5 C 238.533 -0.224 238.757 0 239.033 0 L 239.033 -1 Z M 241.029 0 C 241.305 0 241.529 -0.224 241.529 -0.5 C 241.529 -0.776 241.305 -1 241.029 -1 L 241.029 0 Z M 243.025 -1 C 242.749 -1 242.525 -0.776 242.525 -0.5 C 242.525 -0.224 242.749 0 243.025 0 L 243.025 -1 Z M 245.021 0 C 245.298 0 245.521 -0.224 245.521 -0.5 C 245.521 -0.776 245.298 -1 245.021 -1 L 245.021 0 Z M 247.018 -1 C 246.741 -1 246.518 -0.776 246.518 -0.5 C 246.518 -0.224 246.741 0 247.018 0 L 247.018 -1 Z M 249.014 0 C 249.29 0 249.514 -0.224 249.514 -0.5 C 249.514 -0.776 249.29 -1 249.014 -1 L 249.014 0 Z M 251.01 -1 C 250.734 -1 250.51 -0.776 250.51 -0.5 C 250.51 -0.224 250.734 0 251.01 0 L 251.01 -1 Z M 253.006 0 C 253.282 0 253.506 -0.224 253.506 -0.5 C 253.506 -0.776 253.282 -1 253.006 -1 L 253.006 0 Z M 255.002 -1 C 254.726 -1 254.502 -0.776 254.502 -0.5 C 254.502 -0.224 254.726 0 255.002 0 L 255.002 -1 Z M 256.998 0 C 257.274 0 257.498 -0.224 257.498 -0.5 C 257.498 -0.776 257.274 -1 256.998 -1 L 256.998 0 Z M 258.994 -1 C 258.718 -1 258.494 -0.776 258.494 -0.5 C 258.494 -0.224 258.718 0 258.994 0 L 258.994 -1 Z M 260.99 0 C 261.266 0 261.49 -0.224 261.49 -0.5 C 261.49 -0.776 261.266 -1 260.99 -1 L 260.99 0 Z M 262.986 -1 C 262.71 -1 262.486 -0.776 262.486 -0.5 C 262.486 -0.224 262.71 0 262.986 0 L 262.986 -1 Z M 264.982 0 C 265.259 0 265.482 -0.224 265.482 -0.5 C 265.482 -0.776 265.259 -1 264.982 -1 L 264.982 0 Z M 266.979 -1 C 266.702 -1 266.479 -0.776 266.479 -0.5 C 266.479 -0.224 266.702 0 266.979 0 L 266.979 -1 Z M 268.975 0 C 269.251 0 269.475 -0.224 269.475 -0.5 C 269.475 -0.776 269.251 -1 268.975 -1 L 268.975 0 Z M 270.971 -1 C 270.695 -1 270.471 -0.776 270.471 -0.5 C 270.471 -0.224 270.695 0 270.971 0 L 270.971 -1 Z M 272.967 0 C 273.243 0 273.467 -0.224 273.467 -0.5 C 273.467 -0.776 273.243 -1 272.967 -1 L 272.967 0 Z M 274.963 -1 C 274.687 -1 274.463 -0.776 274.463 -0.5 C 274.463 -0.224 274.687 0 274.963 0 L 274.963 -1 Z M 276.959 0 C 277.235 0 277.459 -0.224 277.459 -0.5 C 277.459 -0.776 277.235 -1 276.959 -1 L 276.959 0 Z M 278.955 -1 C 278.679 -1 278.455 -0.776 278.455 -0.5 C 278.455 -0.224 278.679 0 278.955 0 L 278.955 -1 Z M 280.951 0 C 281.227 0 281.451 -0.224 281.451 -0.5 C 281.451 -0.776 281.227 -1 280.951 -1 L 280.951 0 Z M 282.947 -1 C 282.671 -1 282.447 -0.776 282.447 -0.5 C 282.447 -0.224 282.671 0 282.947 0 L 282.947 -1 Z M 284.943 0 C 285.22 0 285.443 -0.224 285.443 -0.5 C 285.443 -0.776 285.22 -1 284.943 -1 L 284.943 0 Z M 286.939 -1 C 286.663 -1 286.439 -0.776 286.439 -0.5 C 286.439 -0.224 286.663 0 286.939 0 L 286.939 -1 Z M 288.936 0 C 289.212 0 289.436 -0.224 289.436 -0.5 C 289.436 -0.776 289.212 -1 288.936 -1 L 288.936 0 Z M 290.932 -1 C 290.655 -1 290.432 -0.776 290.432 -0.5 C 290.432 -0.224 290.655 0 290.932 0 L 290.932 -1 Z M 292.928 0 C 293.204 0 293.428 -0.224 293.428 -0.5 C 293.428 -0.776 293.204 -1 292.928 -1 L 292.928 0 Z M 294.924 -1 C 294.648 -1 294.424 -0.776 294.424 -0.5 C 294.424 -0.224 294.648 0 294.924 0 L 294.924 -1 Z M 296.92 0 C 297.196 0 297.42 -0.224 297.42 -0.5 C 297.42 -0.776 297.196 -1 296.92 -1 L 296.92 0 Z M 298.916 -1 C 298.64 -1 298.416 -0.776 298.416 -0.5 C 298.416 -0.224 298.64 0 298.916 0 L 298.916 -1 Z M 300.912 0 C 301.188 0 301.412 -0.224 301.412 -0.5 C 301.412 -0.776 301.188 -1 300.912 -1 L 300.912 0 Z M 302.908 -1 C 302.632 -1 302.408 -0.776 302.408 -0.5 C 302.408 -0.224 302.632 0 302.908 0 L 302.908 -1 Z M 304.904 0 C 305.18 0 305.404 -0.224 305.404 -0.5 C 305.404 -0.776 305.18 -1 304.904 -1 L 304.904 0 Z M 306.9 -1 C 306.624 -1 306.4 -0.776 306.4 -0.5 C 306.4 -0.224 306.624 0 306.9 0 L 306.9 -1 Z M 308.896 0 C 309.173 0 309.396 -0.224 309.396 -0.5 C 309.396 -0.776 309.173 -1 308.896 -1 L 308.896 0 Z M 310.893 -1 C 310.616 -1 310.393 -0.776 310.393 -0.5 C 310.393 -0.224 310.616 0 310.893 0 L 310.893 -1 Z M 312.889 0 C 313.165 0 313.389 -0.224 313.389 -0.5 C 313.389 -0.776 313.165 -1 312.889 -1 L 312.889 0 Z M 314.885 -1 C 314.609 -1 314.385 -0.776 314.385 -0.5 C 314.385 -0.224 314.609 0 314.885 0 L 314.885 -1 Z M 316.881 0 C 317.157 0 317.381 -0.224 317.381 -0.5 C 317.381 -0.776 317.157 -1 316.881 -1 L 316.881 0 Z M 318.877 -1 C 318.601 -1 318.377 -0.776 318.377 -0.5 C 318.377 -0.224 318.601 0 318.877 0 L 318.877 -1 Z M 320.873 0 C 321.149 0 321.373 -0.224 321.373 -0.5 C 321.373 -0.776 321.149 -1 320.873 -1 L 320.873 0 Z M 322.869 -1 C 322.593 -1 322.369 -0.776 322.369 -0.5 C 322.369 -0.224 322.593 0 322.869 0 L 322.869 -1 Z M 324.865 0 C 325.141 0 325.365 -0.224 325.365 -0.5 C 325.365 -0.776 325.141 -1 324.865 -1 L 324.865 0 Z M 326.861 -1 C 326.585 -1 326.361 -0.776 326.361 -0.5 C 326.361 -0.224 326.585 0 326.861 0 L 326.861 -1 Z M 328.857 0 C 329.134 0 329.357 -0.224 329.357 -0.5 C 329.357 -0.776 329.134 -1 328.857 -1 L 328.857 0 Z M 330.854 -1 C 330.577 -1 330.354 -0.776 330.354 -0.5 C 330.354 -0.224 330.577 0 330.854 0 L 330.854 -1 Z M 332.85 0 C 333.126 0 333.35 -0.224 333.35 -0.5 C 333.35 -0.776 333.126 -1 332.85 -1 L 332.85 0 Z M 334.846 -1 C 334.57 -1 334.346 -0.776 334.346 -0.5 C 334.346 -0.224 334.57 0 334.846 0 L 334.846 -1 Z M 336.842 0 C 337.118 0 337.342 -0.224 337.342 -0.5 C 337.342 -0.776 337.118 -1 336.842 -1 L 336.842 0 Z M 338.838 -1 C 338.562 -1 338.338 -0.776 338.338 -0.5 C 338.338 -0.224 338.562 0 338.838 0 L 338.838 -1 Z M 340.834 0 C 341.11 0 341.334 -0.224 341.334 -0.5 C 341.334 -0.776 341.11 -1 340.834 -1 L 340.834 0 Z M 342.83 -1 C 342.554 -1 342.33 -0.776 342.33 -0.5 C 342.33 -0.224 342.554 0 342.83 0 L 342.83 -1 Z M 344.826 0 C 345.102 0 345.326 -0.224 345.326 -0.5 C 345.326 -0.776 345.102 -1 344.826 -1 L 344.826 0 Z M 346.822 -1 C 346.546 -1 346.322 -0.776 346.322 -0.5 C 346.322 -0.224 346.546 0 346.822 0 L 346.822 -1 Z M 348.818 0 C 349.095 0 349.318 -0.224 349.318 -0.5 C 349.318 -0.776 349.095 -1 348.818 -1 L 348.818 0 Z M 350.814 -1 C 350.538 -1 350.314 -0.776 350.314 -0.5 C 350.314 -0.224 350.538 0 350.814 0 L 350.814 -1 Z M 352.811 0 C 353.087 0 353.311 -0.224 353.311 -0.5 C 353.311 -0.776 353.087 -1 352.811 -1 L 352.811 0 Z M 354.807 -1 C 354.53 -1 354.307 -0.776 354.307 -0.5 C 354.307 -0.224 354.53 0 354.807 0 L 354.807 -1 Z M 356.803 0 C 357.079 0 357.303 -0.224 357.303 -0.5 C 357.303 -0.776 357.079 -1 356.803 -1 L 356.803 0 Z M 358.799 -1 C 358.523 -1 358.299 -0.776 358.299 -0.5 C 358.299 -0.224 358.523 0 358.799 0 L 358.799 -1 Z M 360.795 0 C 361.071 0 361.295 -0.224 361.295 -0.5 C 361.295 -0.776 361.071 -1 360.795 -1 L 360.795 0 Z M 362.791 -1 C 362.515 -1 362.291 -0.776 362.291 -0.5 C 362.291 -0.224 362.515 0 362.791 0 L 362.791 -1 Z M 364.787 0 C 365.063 0 365.287 -0.224 365.287 -0.5 C 365.287 -0.776 365.063 -1 364.787 -1 L 364.787 0 Z M 366.783 -1 C 366.507 -1 366.283 -0.776 366.283 -0.5 C 366.283 -0.224 366.507 0 366.783 0 L 366.783 -1 Z M 368.779 0 C 369.055 0 369.279 -0.224 369.279 -0.5 C 369.279 -0.776 369.055 -1 368.779 -1 L 368.779 0 Z M 370.775 -1 C 370.499 -1 370.275 -0.776 370.275 -0.5 C 370.275 -0.224 370.499 0 370.775 0 L 370.775 -1 Z M 372.771 0 C 373.048 0 373.271 -0.224 373.271 -0.5 C 373.271 -0.776 373.048 -1 372.771 -1 L 372.771 0 Z M 374.768 -1 C 374.491 -1 374.268 -0.776 374.268 -0.5 C 374.268 -0.224 374.491 0 374.768 0 L 374.768 -1 Z M 376.764 0 C 377.04 0 377.264 -0.224 377.264 -0.5 C 377.264 -0.776 377.04 -1 376.764 -1 L 376.764 0 Z M 378.76 -1 C 378.484 -1 378.26 -0.776 378.26 -0.5 C 378.26 -0.224 378.484 0 378.76 0 L 378.76 -1 Z M 380.756 0 C 381.032 0 381.256 -0.224 381.256 -0.5 C 381.256 -0.776 381.032 -1 380.756 -1 L 380.756 0 Z M 382.752 -1 C 382.476 -1 382.252 -0.776 382.252 -0.5 C 382.252 -0.224 382.476 0 382.752 0 L 382.752 -1 Z M 384.748 0 C 385.024 0 385.248 -0.224 385.248 -0.5 C 385.248 -0.776 385.024 -1 384.748 -1 L 384.748 0 Z M 386.744 -1 C 386.468 -1 386.244 -0.776 386.244 -0.5 C 386.244 -0.224 386.468 0 386.744 0 L 386.744 -1 Z M 388.74 0 C 389.016 0 389.24 -0.224 389.24 -0.5 C 389.24 -0.776 389.016 -1 388.74 -1 L 388.74 0 Z M 390.736 -1 C 390.46 -1 390.236 -0.776 390.236 -0.5 C 390.236 -0.224 390.46 0 390.736 0 L 390.736 -1 Z M 392.732 0 C 393.009 0 393.232 -0.224 393.232 -0.5 C 393.232 -0.776 393.009 -1 392.732 -1 L 392.732 0 Z M 394.729 -1 C 394.452 -1 394.229 -0.776 394.229 -0.5 C 394.229 -0.224 394.452 0 394.729 0 L 394.729 -1 Z M 396.725 0 C 397.001 0 397.225 -0.224 397.225 -0.5 C 397.225 -0.776 397.001 -1 396.725 -1 L 396.725 0 Z M 398.721 -1 C 398.445 -1 398.221 -0.776 398.221 -0.5 C 398.221 -0.224 398.445 0 398.721 0 L 398.721 -1 Z M 400.717 0 C 400.993 0 401.217 -0.224 401.217 -0.5 C 401.217 -0.776 400.993 -1 400.717 -1 L 400.717 0 Z M 402.713 -1 C 402.437 -1 402.213 -0.776 402.213 -0.5 C 402.213 -0.224 402.437 0 402.713 0 L 402.713 -1 Z M 404.709 0 C 404.985 0 405.209 -0.224 405.209 -0.5 C 405.209 -0.776 404.985 -1 404.709 -1 L 404.709 0 Z M 406.705 -1 C 406.429 -1 406.205 -0.776 406.205 -0.5 C 406.205 -0.224 406.429 0 406.705 0 L 406.705 -1 Z M 408.701 0 C 408.977 0 409.201 -0.224 409.201 -0.5 C 409.201 -0.776 408.977 -1 408.701 -1 L 408.701 0 Z M 410.697 -1 C 410.421 -1 410.197 -0.776 410.197 -0.5 C 410.197 -0.224 410.421 0 410.697 0 L 410.697 -1 Z M 412.693 0 C 412.97 0 413.193 -0.224 413.193 -0.5 C 413.193 -0.776 412.97 -1 412.693 -1 L 412.693 0 Z M 414.689 -1 C 414.413 -1 414.189 -0.776 414.189 -0.5 C 414.189 -0.224 414.413 0 414.689 0 L 414.689 -1 Z M 416.686 0 C 416.962 0 417.186 -0.224 417.186 -0.5 C 417.186 -0.776 416.962 -1 416.686 -1 L 416.686 0 Z M 418.682 -1 C 418.405 -1 418.182 -0.776 418.182 -0.5 C 418.182 -0.224 418.405 0 418.682 0 L 418.682 -1 Z M 420.678 0 C 420.954 0 421.178 -0.224 421.178 -0.5 C 421.178 -0.776 420.954 -1 420.678 -1 L 420.678 0 Z M 422.674 -1 C 422.398 -1 422.174 -0.776 422.174 -0.5 C 422.174 -0.224 422.398 0 422.674 0 L 422.674 -1 Z M 424.67 0 C 424.946 0 425.17 -0.224 425.17 -0.5 C 425.17 -0.776 424.946 -1 424.67 -1 L 424.67 0 Z M 426.666 -1 C 426.39 -1 426.166 -0.776 426.166 -0.5 C 426.166 -0.224 426.39 0 426.666 0 L 426.666 -1 Z M 428.662 0 C 428.938 0 429.162 -0.224 429.162 -0.5 C 429.162 -0.776 428.938 -1 428.662 -1 L 428.662 0 Z M 430.658 -1 C 430.382 -1 430.158 -0.776 430.158 -0.5 C 430.158 -0.224 430.382 0 430.658 0 L 430.658 -1 Z M 432.654 0 C 432.93 0 433.154 -0.224 433.154 -0.5 C 433.154 -0.776 432.93 -1 432.654 -1 L 432.654 0 Z M 434.65 -1 C 434.374 -1 434.15 -0.776 434.15 -0.5 C 434.15 -0.224 434.374 0 434.65 0 L 434.65 -1 Z M 436.646 0 C 436.923 0 437.146 -0.224 437.146 -0.5 C 437.146 -0.776 436.923 -1 436.646 -1 L 436.646 0 Z M 438.643 -1 C 438.366 -1 438.143 -0.776 438.143 -0.5 C 438.143 -0.224 438.366 0 438.643 0 L 438.643 -1 Z M 440.639 0 C 440.915 0 441.139 -0.224 441.139 -0.5 C 441.139 -0.776 440.915 -1 440.639 -1 L 440.639 0 Z M 442.635 -1 C 442.359 -1 442.135 -0.776 442.135 -0.5 C 442.135 -0.224 442.359 0 442.635 0 L 442.635 -1 Z M 444.631 0 C 444.907 0 445.131 -0.224 445.131 -0.5 C 445.131 -0.776 444.907 -1 444.631 -1 L 444.631 0 Z M 446.627 -1 C 446.351 -1 446.127 -0.776 446.127 -0.5 C 446.127 -0.224 446.351 0 446.627 0 L 446.627 -1 Z M 448.623 0 C 448.899 0 449.123 -0.224 449.123 -0.5 C 449.123 -0.776 448.899 -1 448.623 -1 L 448.623 0 Z M 450.619 -1 C 450.343 -1 450.119 -0.776 450.119 -0.5 C 450.119 -0.224 450.343 0 450.619 0 L 450.619 -1 Z M 452.615 0 C 452.891 0 453.115 -0.224 453.115 -0.5 C 453.115 -0.776 452.891 -1 452.615 -1 L 452.615 0 Z M 454.611 -1 C 454.335 -1 454.111 -0.776 454.111 -0.5 C 454.111 -0.224 454.335 0 454.611 0 L 454.611 -1 Z M 456.607 0 C 456.884 0 457.107 -0.224 457.107 -0.5 C 457.107 -0.776 456.884 -1 456.607 -1 L 456.607 0 Z M 458.604 -1 C 458.327 -1 458.104 -0.776 458.104 -0.5 C 458.104 -0.224 458.327 0 458.604 0 L 458.604 -1 Z M 460.6 0 C 460.876 0 461.1 -0.224 461.1 -0.5 C 461.1 -0.776 460.876 -1 460.6 -1 L 460.6 0 Z M 462.596 -1 C 462.32 -1 462.096 -0.776 462.096 -0.5 C 462.096 -0.224 462.32 0 462.596 0 L 462.596 -1 Z M 464.592 0 C 464.868 0 465.092 -0.224 465.092 -0.5 C 465.092 -0.776 464.868 -1 464.592 -1 L 464.592 0 Z M 466.588 -1 C 466.312 -1 466.088 -0.776 466.088 -0.5 C 466.088 -0.224 466.312 0 466.588 0 L 466.588 -1 Z M 468.584 0 C 468.86 0 469.084 -0.224 469.084 -0.5 C 469.084 -0.776 468.86 -1 468.584 -1 L 468.584 0 Z M 470.58 -1 C 470.304 -1 470.08 -0.776 470.08 -0.5 C 470.08 -0.224 470.304 0 470.58 0 L 470.58 -1 Z M 472.576 0 C 472.852 0 473.076 -0.224 473.076 -0.5 C 473.076 -0.776 472.852 -1 472.576 -1 L 472.576 0 Z M 474.572 -1 C 474.296 -1 474.072 -0.776 474.072 -0.5 C 474.072 -0.224 474.296 0 474.572 0 L 474.572 -1 Z M 476.568 0 C 476.845 0 477.068 -0.224 477.068 -0.5 C 477.068 -0.776 476.845 -1 476.568 -1 L 476.568 0 Z M 478.564 -1 C 478.288 -1 478.064 -0.776 478.064 -0.5 C 478.064 -0.224 478.288 0 478.564 0 L 478.564 -1 Z M 480.561 0 C 480.837 0 481.061 -0.224 481.061 -0.5 C 481.061 -0.776 480.837 -1 480.561 -1 L 480.561 0 Z M 482.557 -1 C 482.28 -1 482.057 -0.776 482.057 -0.5 C 482.057 -0.224 482.28 0 482.557 0 L 482.557 -1 Z M 484.553 0 C 484.829 0 485.053 -0.224 485.053 -0.5 C 485.053 -0.776 484.829 -1 484.553 -1 L 484.553 0 Z M 486.549 -1 C 486.273 -1 486.049 -0.776 486.049 -0.5 C 486.049 -0.224 486.273 0 486.549 0 L 486.549 -1 Z M 488.545 0 C 488.821 0 489.045 -0.224 489.045 -0.5 C 489.045 -0.776 488.821 -1 488.545 -1 L 488.545 0 Z M 490.541 -1 C 490.265 -1 490.041 -0.776 490.041 -0.5 C 490.041 -0.224 490.265 0 490.541 0 L 490.541 -1 Z M 492.537 0 C 492.813 0 493.037 -0.224 493.037 -0.5 C 493.037 -0.776 492.813 -1 492.537 -1 L 492.537 0 Z M 494.533 -1 C 494.257 -1 494.033 -0.776 494.033 -0.5 C 494.033 -0.224 494.257 0 494.533 0 L 494.533 -1 Z M 496.529 0 C 496.805 0 497.029 -0.224 497.029 -0.5 C 497.029 -0.776 496.805 -1 496.529 -1 L 496.529 0 Z M 498.525 -1 C 498.249 -1 498.025 -0.776 498.025 -0.5 C 498.025 -0.224 498.249 0 498.525 0 L 498.525 -1 Z M 500.521 0 C 500.798 0 501.021 -0.224 501.021 -0.5 C 501.021 -0.776 500.798 -1 500.521 -1 L 500.521 0 Z M 502.518 -1 C 502.241 -1 502.018 -0.776 502.018 -0.5 C 502.018 -0.224 502.241 0 502.518 0 L 502.518 -1 Z M 504.514 0 C 504.79 0 505.014 -0.224 505.014 -0.5 C 505.014 -0.776 504.79 -1 504.514 -1 L 504.514 0 Z M 506.51 -1 C 506.234 -1 506.01 -0.776 506.01 -0.5 C 506.01 -0.224 506.234 0 506.51 0 L 506.51 -1 Z M 508.506 0 C 508.782 0 509.006 -0.224 509.006 -0.5 C 509.006 -0.776 508.782 -1 508.506 -1 L 508.506 0 Z M 510.502 -1 C 510.226 -1 510.002 -0.776 510.002 -0.5 C 510.002 -0.224 510.226 0 510.502 0 L 510.502 -1 Z M 0.5 0 L 1.498 0 L 1.498 -1 L 0.5 -1 L 0.5 0 Z M 3.494 0 L 5.49 0 L 5.49 -1 L 3.494 -1 L 3.494 0 Z M 7.486 0 L 9.482 0 L 9.482 -1 L 7.486 -1 L 7.486 0 Z M 11.479 0 L 13.475 0 L 13.475 -1 L 11.479 -1 L 11.479 0 Z M 15.471 0 L 17.467 0 L 17.467 -1 L 15.471 -1 L 15.471 0 Z M 19.463 0 L 21.459 0 L 21.459 -1 L 19.463 -1 L 19.463 0 Z M 23.455 0 L 25.451 0 L 25.451 -1 L 23.455 -1 L 23.455 0 Z M 27.447 0 L 29.443 0 L 29.443 -1 L 27.447 -1 L 27.447 0 Z M 31.439 0 L 33.436 0 L 33.436 -1 L 31.439 -1 L 31.439 0 Z M 35.432 0 L 37.428 0 L 37.428 -1 L 35.432 -1 L 35.432 0 Z M 39.424 0 L 41.42 0 L 41.42 -1 L 39.424 -1 L 39.424 0 Z M 43.416 0 L 45.412 0 L 45.412 -1 L 43.416 -1 L 43.416 0 Z M 47.408 0 L 49.404 0 L 49.404 -1 L 47.408 -1 L 47.408 0 Z M 51.4 0 L 53.396 0 L 53.396 -1 L 51.4 -1 L 51.4 0 Z M 55.393 0 L 57.389 0 L 57.389 -1 L 55.393 -1 L 55.393 0 Z M 59.385 0 L 61.381 0 L 61.381 -1 L 59.385 -1 L 59.385 0 Z M 63.377 0 L 65.373 0 L 65.373 -1 L 63.377 -1 L 63.377 0 Z M 67.369 0 L 69.365 0 L 69.365 -1 L 67.369 -1 L 67.369 0 Z M 71.361 0 L 73.357 0 L 73.357 -1 L 71.361 -1 L 71.361 0 Z M 75.354 0 L 77.35 0 L 77.35 -1 L 75.354 -1 L 75.354 0 Z M 79.346 0 L 81.342 0 L 81.342 -1 L 79.346 -1 L 79.346 0 Z M 83.338 0 L 85.334 0 L 85.334 -1 L 83.338 -1 L 83.338 0 Z M 87.33 0 L 89.326 0 L 89.326 -1 L 87.33 -1 L 87.33 0 Z M 91.322 0 L 93.318 0 L 93.318 -1 L 91.322 -1 L 91.322 0 Z M 95.314 0 L 97.311 0 L 97.311 -1 L 95.314 -1 L 95.314 0 Z M 99.307 0 L 101.303 0 L 101.303 -1 L 99.307 -1 L 99.307 0 Z M 103.299 0 L 105.295 0 L 105.295 -1 L 103.299 -1 L 103.299 0 Z M 107.291 0 L 109.287 0 L 109.287 -1 L 107.291 -1 L 107.291 0 Z M 111.283 0 L 113.279 0 L 113.279 -1 L 111.283 -1 L 111.283 0 Z M 115.275 0 L 117.271 0 L 117.271 -1 L 115.275 -1 L 115.275 0 Z M 119.268 0 L 121.264 0 L 121.264 -1 L 119.268 -1 L 119.268 0 Z M 123.26 0 L 125.256 0 L 125.256 -1 L 123.26 -1 L 123.26 0 Z M 127.252 0 L 129.248 0 L 129.248 -1 L 127.252 -1 L 127.252 0 Z M 131.244 0 L 133.24 0 L 133.24 -1 L 131.244 -1 L 131.244 0 Z M 135.236 0 L 137.232 0 L 137.232 -1 L 135.236 -1 L 135.236 0 Z M 139.229 0 L 141.225 0 L 141.225 -1 L 139.229 -1 L 139.229 0 Z M 143.221 0 L 145.217 0 L 145.217 -1 L 143.221 -1 L 143.221 0 Z M 147.213 0 L 149.209 0 L 149.209 -1 L 147.213 -1 L 147.213 0 Z M 151.205 0 L 153.201 0 L 153.201 -1 L 151.205 -1 L 151.205 0 Z M 155.197 0 L 157.193 0 L 157.193 -1 L 155.197 -1 L 155.197 0 Z M 159.189 0 L 161.186 0 L 161.186 -1 L 159.189 -1 L 159.189 0 Z M 163.182 0 L 165.178 0 L 165.178 -1 L 163.182 -1 L 163.182 0 Z M 167.174 0 L 169.17 0 L 169.17 -1 L 167.174 -1 L 167.174 0 Z M 171.166 0 L 173.162 0 L 173.162 -1 L 171.166 -1 L 171.166 0 Z M 175.158 0 L 177.154 0 L 177.154 -1 L 175.158 -1 L 175.158 0 Z M 179.15 0 L 181.146 0 L 181.146 -1 L 179.15 -1 L 179.15 0 Z M 183.143 0 L 185.139 0 L 185.139 -1 L 183.143 -1 L 183.143 0 Z M 187.135 0 L 189.131 0 L 189.131 -1 L 187.135 -1 L 187.135 0 Z M 191.127 0 L 193.123 0 L 193.123 -1 L 191.127 -1 L 191.127 0 Z M 195.119 0 L 197.115 0 L 197.115 -1 L 195.119 -1 L 195.119 0 Z M 199.111 0 L 201.107 0 L 201.107 -1 L 199.111 -1 L 199.111 0 Z M 203.104 0 L 205.1 0 L 205.1 -1 L 203.104 -1 L 203.104 0 Z M 207.096 0 L 209.092 0 L 209.092 -1 L 207.096 -1 L 207.096 0 Z M 211.088 0 L 213.084 0 L 213.084 -1 L 211.088 -1 L 211.088 0 Z M 215.08 0 L 217.076 0 L 217.076 -1 L 215.08 -1 L 215.08 0 Z M 219.072 0 L 221.068 0 L 221.068 -1 L 219.072 -1 L 219.072 0 Z M 223.064 0 L 225.061 0 L 225.061 -1 L 223.064 -1 L 223.064 0 Z M 227.057 0 L 229.053 0 L 229.053 -1 L 227.057 -1 L 227.057 0 Z M 231.049 0 L 233.045 0 L 233.045 -1 L 231.049 -1 L 231.049 0 Z M 235.041 0 L 237.037 0 L 237.037 -1 L 235.041 -1 L 235.041 0 Z M 239.033 0 L 241.029 0 L 241.029 -1 L 239.033 -1 L 239.033 0 Z M 243.025 0 L 245.021 0 L 245.021 -1 L 243.025 -1 L 243.025 0 Z M 247.018 0 L 249.014 0 L 249.014 -1 L 247.018 -1 L 247.018 0 Z M 251.01 0 L 253.006 0 L 253.006 -1 L 251.01 -1 L 251.01 0 Z M 255.002 0 L 256.998 0 L 256.998 -1 L 255.002 -1 L 255.002 0 Z M 258.994 0 L 260.99 0 L 260.99 -1 L 258.994 -1 L 258.994 0 Z M 262.986 0 L 264.982 0 L 264.982 -1 L 262.986 -1 L 262.986 0 Z M 266.979 0 L 268.975 0 L 268.975 -1 L 266.979 -1 L 266.979 0 Z M 270.971 0 L 272.967 0 L 272.967 -1 L 270.971 -1 L 270.971 0 Z M 274.963 0 L 276.959 0 L 276.959 -1 L 274.963 -1 L 274.963 0 Z M 278.955 0 L 280.951 0 L 280.951 -1 L 278.955 -1 L 278.955 0 Z M 282.947 0 L 284.943 0 L 284.943 -1 L 282.947 -1 L 282.947 0 Z M 286.939 0 L 288.936 0 L 288.936 -1 L 286.939 -1 L 286.939 0 Z M 290.932 0 L 292.928 0 L 292.928 -1 L 290.932 -1 L 290.932 0 Z M 294.924 0 L 296.92 0 L 296.92 -1 L 294.924 -1 L 294.924 0 Z M 298.916 0 L 300.912 0 L 300.912 -1 L 298.916 -1 L 298.916 0 Z M 302.908 0 L 304.904 0 L 304.904 -1 L 302.908 -1 L 302.908 0 Z M 306.9 0 L 308.896 0 L 308.896 -1 L 306.9 -1 L 306.9 0 Z M 310.893 0 L 312.889 0 L 312.889 -1 L 310.893 -1 L 310.893 0 Z M 314.885 0 L 316.881 0 L 316.881 -1 L 314.885 -1 L 314.885 0 Z M 318.877 0 L 320.873 0 L 320.873 -1 L 318.877 -1 L 318.877 0 Z M 322.869 0 L 324.865 0 L 324.865 -1 L 322.869 -1 L 322.869 0 Z M 326.861 0 L 328.857 0 L 328.857 -1 L 326.861 -1 L 326.861 0 Z M 330.854 0 L 332.85 0 L 332.85 -1 L 330.854 -1 L 330.854 0 Z M 334.846 0 L 336.842 0 L 336.842 -1 L 334.846 -1 L 334.846 0 Z M 338.838 0 L 340.834 0 L 340.834 -1 L 338.838 -1 L 338.838 0 Z M 342.83 0 L 344.826 0 L 344.826 -1 L 342.83 -1 L 342.83 0 Z M 346.822 0 L 348.818 0 L 348.818 -1 L 346.822 -1 L 346.822 0 Z M 350.814 0 L 352.811 0 L 352.811 -1 L 350.814 -1 L 350.814 0 Z M 354.807 0 L 356.803 0 L 356.803 -1 L 354.807 -1 L 354.807 0 Z M 358.799 0 L 360.795 0 L 360.795 -1 L 358.799 -1 L 358.799 0 Z M 362.791 0 L 364.787 0 L 364.787 -1 L 362.791 -1 L 362.791 0 Z M 366.783 0 L 368.779 0 L 368.779 -1 L 366.783 -1 L 366.783 0 Z M 370.775 0 L 372.771 0 L 372.771 -1 L 370.775 -1 L 370.775 0 Z M 374.768 0 L 376.764 0 L 376.764 -1 L 374.768 -1 L 374.768 0 Z M 378.76 0 L 380.756 0 L 380.756 -1 L 378.76 -1 L 378.76 0 Z M 382.752 0 L 384.748 0 L 384.748 -1 L 382.752 -1 L 382.752 0 Z M 386.744 0 L 388.74 0 L 388.74 -1 L 386.744 -1 L 386.744 0 Z M 390.736 0 L 392.732 0 L 392.732 -1 L 390.736 -1 L 390.736 0 Z M 394.729 0 L 396.725 0 L 396.725 -1 L 394.729 -1 L 394.729 0 Z M 398.721 0 L 400.717 0 L 400.717 -1 L 398.721 -1 L 398.721 0 Z M 402.713 0 L 404.709 0 L 404.709 -1 L 402.713 -1 L 402.713 0 Z M 406.705 0 L 408.701 0 L 408.701 -1 L 406.705 -1 L 406.705 0 Z M 410.697 0 L 412.693 0 L 412.693 -1 L 410.697 -1 L 410.697 0 Z M 414.689 0 L 416.686 0 L 416.686 -1 L 414.689 -1 L 414.689 0 Z M 418.682 0 L 420.678 0 L 420.678 -1 L 418.682 -1 L 418.682 0 Z M 422.674 0 L 424.67 0 L 424.67 -1 L 422.674 -1 L 422.674 0 Z M 426.666 0 L 428.662 0 L 428.662 -1 L 426.666 -1 L 426.666 0 Z M 430.658 0 L 432.654 0 L 432.654 -1 L 430.658 -1 L 430.658 0 Z M 434.65 0 L 436.646 0 L 436.646 -1 L 434.65 -1 L 434.65 0 Z M 438.643 0 L 440.639 0 L 440.639 -1 L 438.643 -1 L 438.643 0 Z M 442.635 0 L 444.631 0 L 444.631 -1 L 442.635 -1 L 442.635 0 Z M 446.627 0 L 448.623 0 L 448.623 -1 L 446.627 -1 L 446.627 0 Z M 450.619 0 L 452.615 0 L 452.615 -1 L 450.619 -1 L 450.619 0 Z M 454.611 0 L 456.607 0 L 456.607 -1 L 454.611 -1 L 454.611 0 Z M 458.604 0 L 460.6 0 L 460.6 -1 L 458.604 -1 L 458.604 0 Z M 462.596 0 L 464.592 0 L 464.592 -1 L 462.596 -1 L 462.596 0 Z M 466.588 0 L 468.584 0 L 468.584 -1 L 466.588 -1 L 466.588 0 Z M 470.58 0 L 472.576 0 L 472.576 -1 L 470.58 -1 L 470.58 0 Z M 474.572 0 L 476.568 0 L 476.568 -1 L 474.572 -1 L 474.572 0 Z M 478.564 0 L 480.561 0 L 480.561 -1 L 478.564 -1 L 478.564 0 Z M 482.557 0 L 484.553 0 L 484.553 -1 L 482.557 -1 L 482.557 0 Z M 486.549 0 L 488.545 0 L 488.545 -1 L 486.549 -1 L 486.549 0 Z M 490.541 0 L 492.537 0 L 492.537 -1 L 490.541 -1 L 490.541 0 Z M 494.533 0 L 496.529 0 L 496.529 -1 L 494.533 -1 L 494.533 0 Z M 498.525 0 L 500.521 0 L 500.521 -1 L 498.525 -1 L 498.525 0 Z M 502.518 0 L 504.514 0 L 504.514 -1 L 502.518 -1 L 502.518 0 Z M 506.51 0 L 508.506 0 L 508.506 -1 L 506.51 -1 L 506.51 0 Z M 510.502 0 L 511.5 0 L 511.5 -1 L 510.502 -1 L 510.502 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 512,
    height: 1,
    viewBox: "0 -0.500 512 1",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "matrix(-1,0,0,-1,512,125.562)",
      transformOrigin: "0 0",
      width: 512,
      height: 1,
      opacity: 0.32
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.5 -1 C 0.224 -1 0 -0.776 0 -0.5 C 0 -0.224 0.224 0 0.5 0 L 0.5 -1 Z M 511.5 0 C 511.776 0 512 -0.224 512 -0.5 C 512 -0.776 511.776 -1 511.5 -1 L 511.5 0 Z M 1.498 0 C 1.774 0 1.998 -0.224 1.998 -0.5 C 1.998 -0.776 1.774 -1 1.498 -1 L 1.498 0 Z M 3.494 -1 C 3.218 -1 2.994 -0.776 2.994 -0.5 C 2.994 -0.224 3.218 0 3.494 0 L 3.494 -1 Z M 5.49 0 C 5.766 0 5.99 -0.224 5.99 -0.5 C 5.99 -0.776 5.766 -1 5.49 -1 L 5.49 0 Z M 7.486 -1 C 7.21 -1 6.986 -0.776 6.986 -0.5 C 6.986 -0.224 7.21 0 7.486 0 L 7.486 -1 Z M 9.482 0 C 9.759 0 9.982 -0.224 9.982 -0.5 C 9.982 -0.776 9.759 -1 9.482 -1 L 9.482 0 Z M 11.479 -1 C 11.202 -1 10.979 -0.776 10.979 -0.5 C 10.979 -0.224 11.202 0 11.479 0 L 11.479 -1 Z M 13.475 0 C 13.751 0 13.975 -0.224 13.975 -0.5 C 13.975 -0.776 13.751 -1 13.475 -1 L 13.475 0 Z M 15.471 -1 C 15.195 -1 14.971 -0.776 14.971 -0.5 C 14.971 -0.224 15.195 0 15.471 0 L 15.471 -1 Z M 17.467 0 C 17.743 0 17.967 -0.224 17.967 -0.5 C 17.967 -0.776 17.743 -1 17.467 -1 L 17.467 0 Z M 19.463 -1 C 19.187 -1 18.963 -0.776 18.963 -0.5 C 18.963 -0.224 19.187 0 19.463 0 L 19.463 -1 Z M 21.459 0 C 21.735 0 21.959 -0.224 21.959 -0.5 C 21.959 -0.776 21.735 -1 21.459 -1 L 21.459 0 Z M 23.455 -1 C 23.179 -1 22.955 -0.776 22.955 -0.5 C 22.955 -0.224 23.179 0 23.455 0 L 23.455 -1 Z M 25.451 0 C 25.727 0 25.951 -0.224 25.951 -0.5 C 25.951 -0.776 25.727 -1 25.451 -1 L 25.451 0 Z M 27.447 -1 C 27.171 -1 26.947 -0.776 26.947 -0.5 C 26.947 -0.224 27.171 0 27.447 0 L 27.447 -1 Z M 29.443 0 C 29.72 0 29.943 -0.224 29.943 -0.5 C 29.943 -0.776 29.72 -1 29.443 -1 L 29.443 0 Z M 31.439 -1 C 31.163 -1 30.939 -0.776 30.939 -0.5 C 30.939 -0.224 31.163 0 31.439 0 L 31.439 -1 Z M 33.436 0 C 33.712 0 33.936 -0.224 33.936 -0.5 C 33.936 -0.776 33.712 -1 33.436 -1 L 33.436 0 Z M 35.432 -1 C 35.155 -1 34.932 -0.776 34.932 -0.5 C 34.932 -0.224 35.155 0 35.432 0 L 35.432 -1 Z M 37.428 0 C 37.704 0 37.928 -0.224 37.928 -0.5 C 37.928 -0.776 37.704 -1 37.428 -1 L 37.428 0 Z M 39.424 -1 C 39.148 -1 38.924 -0.776 38.924 -0.5 C 38.924 -0.224 39.148 0 39.424 0 L 39.424 -1 Z M 41.42 0 C 41.696 0 41.92 -0.224 41.92 -0.5 C 41.92 -0.776 41.696 -1 41.42 -1 L 41.42 0 Z M 43.416 -1 C 43.14 -1 42.916 -0.776 42.916 -0.5 C 42.916 -0.224 43.14 0 43.416 0 L 43.416 -1 Z M 45.412 0 C 45.688 0 45.912 -0.224 45.912 -0.5 C 45.912 -0.776 45.688 -1 45.412 -1 L 45.412 0 Z M 47.408 -1 C 47.132 -1 46.908 -0.776 46.908 -0.5 C 46.908 -0.224 47.132 0 47.408 0 L 47.408 -1 Z M 49.404 0 C 49.68 0 49.904 -0.224 49.904 -0.5 C 49.904 -0.776 49.68 -1 49.404 -1 L 49.404 0 Z M 51.4 -1 C 51.124 -1 50.9 -0.776 50.9 -0.5 C 50.9 -0.224 51.124 0 51.4 0 L 51.4 -1 Z M 53.396 0 C 53.673 0 53.896 -0.224 53.896 -0.5 C 53.896 -0.776 53.673 -1 53.396 -1 L 53.396 0 Z M 55.393 -1 C 55.116 -1 54.893 -0.776 54.893 -0.5 C 54.893 -0.224 55.116 0 55.393 0 L 55.393 -1 Z M 57.389 0 C 57.665 0 57.889 -0.224 57.889 -0.5 C 57.889 -0.776 57.665 -1 57.389 -1 L 57.389 0 Z M 59.385 -1 C 59.109 -1 58.885 -0.776 58.885 -0.5 C 58.885 -0.224 59.109 0 59.385 0 L 59.385 -1 Z M 61.381 0 C 61.657 0 61.881 -0.224 61.881 -0.5 C 61.881 -0.776 61.657 -1 61.381 -1 L 61.381 0 Z M 63.377 -1 C 63.101 -1 62.877 -0.776 62.877 -0.5 C 62.877 -0.224 63.101 0 63.377 0 L 63.377 -1 Z M 65.373 0 C 65.649 0 65.873 -0.224 65.873 -0.5 C 65.873 -0.776 65.649 -1 65.373 -1 L 65.373 0 Z M 67.369 -1 C 67.093 -1 66.869 -0.776 66.869 -0.5 C 66.869 -0.224 67.093 0 67.369 0 L 67.369 -1 Z M 69.365 0 C 69.641 0 69.865 -0.224 69.865 -0.5 C 69.865 -0.776 69.641 -1 69.365 -1 L 69.365 0 Z M 71.361 -1 C 71.085 -1 70.861 -0.776 70.861 -0.5 C 70.861 -0.224 71.085 0 71.361 0 L 71.361 -1 Z M 73.357 0 C 73.634 0 73.857 -0.224 73.857 -0.5 C 73.857 -0.776 73.634 -1 73.357 -1 L 73.357 0 Z M 75.354 -1 C 75.077 -1 74.854 -0.776 74.854 -0.5 C 74.854 -0.224 75.077 0 75.354 0 L 75.354 -1 Z M 77.35 0 C 77.626 0 77.85 -0.224 77.85 -0.5 C 77.85 -0.776 77.626 -1 77.35 -1 L 77.35 0 Z M 79.346 -1 C 79.07 -1 78.846 -0.776 78.846 -0.5 C 78.846 -0.224 79.07 0 79.346 0 L 79.346 -1 Z M 81.342 0 C 81.618 0 81.842 -0.224 81.842 -0.5 C 81.842 -0.776 81.618 -1 81.342 -1 L 81.342 0 Z M 83.338 -1 C 83.062 -1 82.838 -0.776 82.838 -0.5 C 82.838 -0.224 83.062 0 83.338 0 L 83.338 -1 Z M 85.334 0 C 85.61 0 85.834 -0.224 85.834 -0.5 C 85.834 -0.776 85.61 -1 85.334 -1 L 85.334 0 Z M 87.33 -1 C 87.054 -1 86.83 -0.776 86.83 -0.5 C 86.83 -0.224 87.054 0 87.33 0 L 87.33 -1 Z M 89.326 0 C 89.602 0 89.826 -0.224 89.826 -0.5 C 89.826 -0.776 89.602 -1 89.326 -1 L 89.326 0 Z M 91.322 -1 C 91.046 -1 90.822 -0.776 90.822 -0.5 C 90.822 -0.224 91.046 0 91.322 0 L 91.322 -1 Z M 93.318 0 C 93.595 0 93.818 -0.224 93.818 -0.5 C 93.818 -0.776 93.595 -1 93.318 -1 L 93.318 0 Z M 95.314 -1 C 95.038 -1 94.814 -0.776 94.814 -0.5 C 94.814 -0.224 95.038 0 95.314 0 L 95.314 -1 Z M 97.311 0 C 97.587 0 97.811 -0.224 97.811 -0.5 C 97.811 -0.776 97.587 -1 97.311 -1 L 97.311 0 Z M 99.307 -1 C 99.03 -1 98.807 -0.776 98.807 -0.5 C 98.807 -0.224 99.03 0 99.307 0 L 99.307 -1 Z M 101.303 0 C 101.579 0 101.803 -0.224 101.803 -0.5 C 101.803 -0.776 101.579 -1 101.303 -1 L 101.303 0 Z M 103.299 -1 C 103.023 -1 102.799 -0.776 102.799 -0.5 C 102.799 -0.224 103.023 0 103.299 0 L 103.299 -1 Z M 105.295 0 C 105.571 0 105.795 -0.224 105.795 -0.5 C 105.795 -0.776 105.571 -1 105.295 -1 L 105.295 0 Z M 107.291 -1 C 107.015 -1 106.791 -0.776 106.791 -0.5 C 106.791 -0.224 107.015 0 107.291 0 L 107.291 -1 Z M 109.287 0 C 109.563 0 109.787 -0.224 109.787 -0.5 C 109.787 -0.776 109.563 -1 109.287 -1 L 109.287 0 Z M 111.283 -1 C 111.007 -1 110.783 -0.776 110.783 -0.5 C 110.783 -0.224 111.007 0 111.283 0 L 111.283 -1 Z M 113.279 0 C 113.555 0 113.779 -0.224 113.779 -0.5 C 113.779 -0.776 113.555 -1 113.279 -1 L 113.279 0 Z M 115.275 -1 C 114.999 -1 114.775 -0.776 114.775 -0.5 C 114.775 -0.224 114.999 0 115.275 0 L 115.275 -1 Z M 117.271 0 C 117.548 0 117.771 -0.224 117.771 -0.5 C 117.771 -0.776 117.548 -1 117.271 -1 L 117.271 0 Z M 119.268 -1 C 118.991 -1 118.768 -0.776 118.768 -0.5 C 118.768 -0.224 118.991 0 119.268 0 L 119.268 -1 Z M 121.264 0 C 121.54 0 121.764 -0.224 121.764 -0.5 C 121.764 -0.776 121.54 -1 121.264 -1 L 121.264 0 Z M 123.26 -1 C 122.984 -1 122.76 -0.776 122.76 -0.5 C 122.76 -0.224 122.984 0 123.26 0 L 123.26 -1 Z M 125.256 0 C 125.532 0 125.756 -0.224 125.756 -0.5 C 125.756 -0.776 125.532 -1 125.256 -1 L 125.256 0 Z M 127.252 -1 C 126.976 -1 126.752 -0.776 126.752 -0.5 C 126.752 -0.224 126.976 0 127.252 0 L 127.252 -1 Z M 129.248 0 C 129.524 0 129.748 -0.224 129.748 -0.5 C 129.748 -0.776 129.524 -1 129.248 -1 L 129.248 0 Z M 131.244 -1 C 130.968 -1 130.744 -0.776 130.744 -0.5 C 130.744 -0.224 130.968 0 131.244 0 L 131.244 -1 Z M 133.24 0 C 133.516 0 133.74 -0.224 133.74 -0.5 C 133.74 -0.776 133.516 -1 133.24 -1 L 133.24 0 Z M 135.236 -1 C 134.96 -1 134.736 -0.776 134.736 -0.5 C 134.736 -0.224 134.96 0 135.236 0 L 135.236 -1 Z M 137.232 0 C 137.509 0 137.732 -0.224 137.732 -0.5 C 137.732 -0.776 137.509 -1 137.232 -1 L 137.232 0 Z M 139.229 -1 C 138.952 -1 138.729 -0.776 138.729 -0.5 C 138.729 -0.224 138.952 0 139.229 0 L 139.229 -1 Z M 141.225 0 C 141.501 0 141.725 -0.224 141.725 -0.5 C 141.725 -0.776 141.501 -1 141.225 -1 L 141.225 0 Z M 143.221 -1 C 142.945 -1 142.721 -0.776 142.721 -0.5 C 142.721 -0.224 142.945 0 143.221 0 L 143.221 -1 Z M 145.217 0 C 145.493 0 145.717 -0.224 145.717 -0.5 C 145.717 -0.776 145.493 -1 145.217 -1 L 145.217 0 Z M 147.213 -1 C 146.937 -1 146.713 -0.776 146.713 -0.5 C 146.713 -0.224 146.937 0 147.213 0 L 147.213 -1 Z M 149.209 0 C 149.485 0 149.709 -0.224 149.709 -0.5 C 149.709 -0.776 149.485 -1 149.209 -1 L 149.209 0 Z M 151.205 -1 C 150.929 -1 150.705 -0.776 150.705 -0.5 C 150.705 -0.224 150.929 0 151.205 0 L 151.205 -1 Z M 153.201 0 C 153.477 0 153.701 -0.224 153.701 -0.5 C 153.701 -0.776 153.477 -1 153.201 -1 L 153.201 0 Z M 155.197 -1 C 154.921 -1 154.697 -0.776 154.697 -0.5 C 154.697 -0.224 154.921 0 155.197 0 L 155.197 -1 Z M 157.193 0 C 157.469 0 157.693 -0.224 157.693 -0.5 C 157.693 -0.776 157.469 -1 157.193 -1 L 157.193 0 Z M 159.189 -1 C 158.913 -1 158.689 -0.776 158.689 -0.5 C 158.689 -0.224 158.913 0 159.189 0 L 159.189 -1 Z M 161.186 0 C 161.462 0 161.686 -0.224 161.686 -0.5 C 161.686 -0.776 161.462 -1 161.186 -1 L 161.186 0 Z M 163.182 -1 C 162.906 -1 162.682 -0.776 162.682 -0.5 C 162.682 -0.224 162.906 0 163.182 0 L 163.182 -1 Z M 165.178 0 C 165.454 0 165.678 -0.224 165.678 -0.5 C 165.678 -0.776 165.454 -1 165.178 -1 L 165.178 0 Z M 167.174 -1 C 166.898 -1 166.674 -0.776 166.674 -0.5 C 166.674 -0.224 166.898 0 167.174 0 L 167.174 -1 Z M 169.17 0 C 169.446 0 169.67 -0.224 169.67 -0.5 C 169.67 -0.776 169.446 -1 169.17 -1 L 169.17 0 Z M 171.166 -1 C 170.89 -1 170.666 -0.776 170.666 -0.5 C 170.666 -0.224 170.89 0 171.166 0 L 171.166 -1 Z M 173.162 0 C 173.438 0 173.662 -0.224 173.662 -0.5 C 173.662 -0.776 173.438 -1 173.162 -1 L 173.162 0 Z M 175.158 -1 C 174.882 -1 174.658 -0.776 174.658 -0.5 C 174.658 -0.224 174.882 0 175.158 0 L 175.158 -1 Z M 177.154 0 C 177.43 0 177.654 -0.224 177.654 -0.5 C 177.654 -0.776 177.43 -1 177.154 -1 L 177.154 0 Z M 179.15 -1 C 178.874 -1 178.65 -0.776 178.65 -0.5 C 178.65 -0.224 178.874 0 179.15 0 L 179.15 -1 Z M 181.146 0 C 181.423 0 181.646 -0.224 181.646 -0.5 C 181.646 -0.776 181.423 -1 181.146 -1 L 181.146 0 Z M 183.143 -1 C 182.866 -1 182.643 -0.776 182.643 -0.5 C 182.643 -0.224 182.866 0 183.143 0 L 183.143 -1 Z M 185.139 0 C 185.415 0 185.639 -0.224 185.639 -0.5 C 185.639 -0.776 185.415 -1 185.139 -1 L 185.139 0 Z M 187.135 -1 C 186.859 -1 186.635 -0.776 186.635 -0.5 C 186.635 -0.224 186.859 0 187.135 0 L 187.135 -1 Z M 189.131 0 C 189.407 0 189.631 -0.224 189.631 -0.5 C 189.631 -0.776 189.407 -1 189.131 -1 L 189.131 0 Z M 191.127 -1 C 190.851 -1 190.627 -0.776 190.627 -0.5 C 190.627 -0.224 190.851 0 191.127 0 L 191.127 -1 Z M 193.123 0 C 193.399 0 193.623 -0.224 193.623 -0.5 C 193.623 -0.776 193.399 -1 193.123 -1 L 193.123 0 Z M 195.119 -1 C 194.843 -1 194.619 -0.776 194.619 -0.5 C 194.619 -0.224 194.843 0 195.119 0 L 195.119 -1 Z M 197.115 0 C 197.391 0 197.615 -0.224 197.615 -0.5 C 197.615 -0.776 197.391 -1 197.115 -1 L 197.115 0 Z M 199.111 -1 C 198.835 -1 198.611 -0.776 198.611 -0.5 C 198.611 -0.224 198.835 0 199.111 0 L 199.111 -1 Z M 201.107 0 C 201.384 0 201.607 -0.224 201.607 -0.5 C 201.607 -0.776 201.384 -1 201.107 -1 L 201.107 0 Z M 203.104 -1 C 202.827 -1 202.604 -0.776 202.604 -0.5 C 202.604 -0.224 202.827 0 203.104 0 L 203.104 -1 Z M 205.1 0 C 205.376 0 205.6 -0.224 205.6 -0.5 C 205.6 -0.776 205.376 -1 205.1 -1 L 205.1 0 Z M 207.096 -1 C 206.82 -1 206.596 -0.776 206.596 -0.5 C 206.596 -0.224 206.82 0 207.096 0 L 207.096 -1 Z M 209.092 0 C 209.368 0 209.592 -0.224 209.592 -0.5 C 209.592 -0.776 209.368 -1 209.092 -1 L 209.092 0 Z M 211.088 -1 C 210.812 -1 210.588 -0.776 210.588 -0.5 C 210.588 -0.224 210.812 0 211.088 0 L 211.088 -1 Z M 213.084 0 C 213.36 0 213.584 -0.224 213.584 -0.5 C 213.584 -0.776 213.36 -1 213.084 -1 L 213.084 0 Z M 215.08 -1 C 214.804 -1 214.58 -0.776 214.58 -0.5 C 214.58 -0.224 214.804 0 215.08 0 L 215.08 -1 Z M 217.076 0 C 217.352 0 217.576 -0.224 217.576 -0.5 C 217.576 -0.776 217.352 -1 217.076 -1 L 217.076 0 Z M 219.072 -1 C 218.796 -1 218.572 -0.776 218.572 -0.5 C 218.572 -0.224 218.796 0 219.072 0 L 219.072 -1 Z M 221.068 0 C 221.344 0 221.568 -0.224 221.568 -0.5 C 221.568 -0.776 221.344 -1 221.068 -1 L 221.068 0 Z M 223.064 -1 C 222.788 -1 222.564 -0.776 222.564 -0.5 C 222.564 -0.224 222.788 0 223.064 0 L 223.064 -1 Z M 225.061 0 C 225.337 0 225.561 -0.224 225.561 -0.5 C 225.561 -0.776 225.337 -1 225.061 -1 L 225.061 0 Z M 227.057 -1 C 226.781 -1 226.557 -0.776 226.557 -0.5 C 226.557 -0.224 226.781 0 227.057 0 L 227.057 -1 Z M 229.053 0 C 229.329 0 229.553 -0.224 229.553 -0.5 C 229.553 -0.776 229.329 -1 229.053 -1 L 229.053 0 Z M 231.049 -1 C 230.773 -1 230.549 -0.776 230.549 -0.5 C 230.549 -0.224 230.773 0 231.049 0 L 231.049 -1 Z M 233.045 0 C 233.321 0 233.545 -0.224 233.545 -0.5 C 233.545 -0.776 233.321 -1 233.045 -1 L 233.045 0 Z M 235.041 -1 C 234.765 -1 234.541 -0.776 234.541 -0.5 C 234.541 -0.224 234.765 0 235.041 0 L 235.041 -1 Z M 237.037 0 C 237.313 0 237.537 -0.224 237.537 -0.5 C 237.537 -0.776 237.313 -1 237.037 -1 L 237.037 0 Z M 239.033 -1 C 238.757 -1 238.533 -0.776 238.533 -0.5 C 238.533 -0.224 238.757 0 239.033 0 L 239.033 -1 Z M 241.029 0 C 241.305 0 241.529 -0.224 241.529 -0.5 C 241.529 -0.776 241.305 -1 241.029 -1 L 241.029 0 Z M 243.025 -1 C 242.749 -1 242.525 -0.776 242.525 -0.5 C 242.525 -0.224 242.749 0 243.025 0 L 243.025 -1 Z M 245.021 0 C 245.298 0 245.521 -0.224 245.521 -0.5 C 245.521 -0.776 245.298 -1 245.021 -1 L 245.021 0 Z M 247.018 -1 C 246.741 -1 246.518 -0.776 246.518 -0.5 C 246.518 -0.224 246.741 0 247.018 0 L 247.018 -1 Z M 249.014 0 C 249.29 0 249.514 -0.224 249.514 -0.5 C 249.514 -0.776 249.29 -1 249.014 -1 L 249.014 0 Z M 251.01 -1 C 250.734 -1 250.51 -0.776 250.51 -0.5 C 250.51 -0.224 250.734 0 251.01 0 L 251.01 -1 Z M 253.006 0 C 253.282 0 253.506 -0.224 253.506 -0.5 C 253.506 -0.776 253.282 -1 253.006 -1 L 253.006 0 Z M 255.002 -1 C 254.726 -1 254.502 -0.776 254.502 -0.5 C 254.502 -0.224 254.726 0 255.002 0 L 255.002 -1 Z M 256.998 0 C 257.274 0 257.498 -0.224 257.498 -0.5 C 257.498 -0.776 257.274 -1 256.998 -1 L 256.998 0 Z M 258.994 -1 C 258.718 -1 258.494 -0.776 258.494 -0.5 C 258.494 -0.224 258.718 0 258.994 0 L 258.994 -1 Z M 260.99 0 C 261.266 0 261.49 -0.224 261.49 -0.5 C 261.49 -0.776 261.266 -1 260.99 -1 L 260.99 0 Z M 262.986 -1 C 262.71 -1 262.486 -0.776 262.486 -0.5 C 262.486 -0.224 262.71 0 262.986 0 L 262.986 -1 Z M 264.982 0 C 265.259 0 265.482 -0.224 265.482 -0.5 C 265.482 -0.776 265.259 -1 264.982 -1 L 264.982 0 Z M 266.979 -1 C 266.702 -1 266.479 -0.776 266.479 -0.5 C 266.479 -0.224 266.702 0 266.979 0 L 266.979 -1 Z M 268.975 0 C 269.251 0 269.475 -0.224 269.475 -0.5 C 269.475 -0.776 269.251 -1 268.975 -1 L 268.975 0 Z M 270.971 -1 C 270.695 -1 270.471 -0.776 270.471 -0.5 C 270.471 -0.224 270.695 0 270.971 0 L 270.971 -1 Z M 272.967 0 C 273.243 0 273.467 -0.224 273.467 -0.5 C 273.467 -0.776 273.243 -1 272.967 -1 L 272.967 0 Z M 274.963 -1 C 274.687 -1 274.463 -0.776 274.463 -0.5 C 274.463 -0.224 274.687 0 274.963 0 L 274.963 -1 Z M 276.959 0 C 277.235 0 277.459 -0.224 277.459 -0.5 C 277.459 -0.776 277.235 -1 276.959 -1 L 276.959 0 Z M 278.955 -1 C 278.679 -1 278.455 -0.776 278.455 -0.5 C 278.455 -0.224 278.679 0 278.955 0 L 278.955 -1 Z M 280.951 0 C 281.227 0 281.451 -0.224 281.451 -0.5 C 281.451 -0.776 281.227 -1 280.951 -1 L 280.951 0 Z M 282.947 -1 C 282.671 -1 282.447 -0.776 282.447 -0.5 C 282.447 -0.224 282.671 0 282.947 0 L 282.947 -1 Z M 284.943 0 C 285.22 0 285.443 -0.224 285.443 -0.5 C 285.443 -0.776 285.22 -1 284.943 -1 L 284.943 0 Z M 286.939 -1 C 286.663 -1 286.439 -0.776 286.439 -0.5 C 286.439 -0.224 286.663 0 286.939 0 L 286.939 -1 Z M 288.936 0 C 289.212 0 289.436 -0.224 289.436 -0.5 C 289.436 -0.776 289.212 -1 288.936 -1 L 288.936 0 Z M 290.932 -1 C 290.655 -1 290.432 -0.776 290.432 -0.5 C 290.432 -0.224 290.655 0 290.932 0 L 290.932 -1 Z M 292.928 0 C 293.204 0 293.428 -0.224 293.428 -0.5 C 293.428 -0.776 293.204 -1 292.928 -1 L 292.928 0 Z M 294.924 -1 C 294.648 -1 294.424 -0.776 294.424 -0.5 C 294.424 -0.224 294.648 0 294.924 0 L 294.924 -1 Z M 296.92 0 C 297.196 0 297.42 -0.224 297.42 -0.5 C 297.42 -0.776 297.196 -1 296.92 -1 L 296.92 0 Z M 298.916 -1 C 298.64 -1 298.416 -0.776 298.416 -0.5 C 298.416 -0.224 298.64 0 298.916 0 L 298.916 -1 Z M 300.912 0 C 301.188 0 301.412 -0.224 301.412 -0.5 C 301.412 -0.776 301.188 -1 300.912 -1 L 300.912 0 Z M 302.908 -1 C 302.632 -1 302.408 -0.776 302.408 -0.5 C 302.408 -0.224 302.632 0 302.908 0 L 302.908 -1 Z M 304.904 0 C 305.18 0 305.404 -0.224 305.404 -0.5 C 305.404 -0.776 305.18 -1 304.904 -1 L 304.904 0 Z M 306.9 -1 C 306.624 -1 306.4 -0.776 306.4 -0.5 C 306.4 -0.224 306.624 0 306.9 0 L 306.9 -1 Z M 308.896 0 C 309.173 0 309.396 -0.224 309.396 -0.5 C 309.396 -0.776 309.173 -1 308.896 -1 L 308.896 0 Z M 310.893 -1 C 310.616 -1 310.393 -0.776 310.393 -0.5 C 310.393 -0.224 310.616 0 310.893 0 L 310.893 -1 Z M 312.889 0 C 313.165 0 313.389 -0.224 313.389 -0.5 C 313.389 -0.776 313.165 -1 312.889 -1 L 312.889 0 Z M 314.885 -1 C 314.609 -1 314.385 -0.776 314.385 -0.5 C 314.385 -0.224 314.609 0 314.885 0 L 314.885 -1 Z M 316.881 0 C 317.157 0 317.381 -0.224 317.381 -0.5 C 317.381 -0.776 317.157 -1 316.881 -1 L 316.881 0 Z M 318.877 -1 C 318.601 -1 318.377 -0.776 318.377 -0.5 C 318.377 -0.224 318.601 0 318.877 0 L 318.877 -1 Z M 320.873 0 C 321.149 0 321.373 -0.224 321.373 -0.5 C 321.373 -0.776 321.149 -1 320.873 -1 L 320.873 0 Z M 322.869 -1 C 322.593 -1 322.369 -0.776 322.369 -0.5 C 322.369 -0.224 322.593 0 322.869 0 L 322.869 -1 Z M 324.865 0 C 325.141 0 325.365 -0.224 325.365 -0.5 C 325.365 -0.776 325.141 -1 324.865 -1 L 324.865 0 Z M 326.861 -1 C 326.585 -1 326.361 -0.776 326.361 -0.5 C 326.361 -0.224 326.585 0 326.861 0 L 326.861 -1 Z M 328.857 0 C 329.134 0 329.357 -0.224 329.357 -0.5 C 329.357 -0.776 329.134 -1 328.857 -1 L 328.857 0 Z M 330.854 -1 C 330.577 -1 330.354 -0.776 330.354 -0.5 C 330.354 -0.224 330.577 0 330.854 0 L 330.854 -1 Z M 332.85 0 C 333.126 0 333.35 -0.224 333.35 -0.5 C 333.35 -0.776 333.126 -1 332.85 -1 L 332.85 0 Z M 334.846 -1 C 334.57 -1 334.346 -0.776 334.346 -0.5 C 334.346 -0.224 334.57 0 334.846 0 L 334.846 -1 Z M 336.842 0 C 337.118 0 337.342 -0.224 337.342 -0.5 C 337.342 -0.776 337.118 -1 336.842 -1 L 336.842 0 Z M 338.838 -1 C 338.562 -1 338.338 -0.776 338.338 -0.5 C 338.338 -0.224 338.562 0 338.838 0 L 338.838 -1 Z M 340.834 0 C 341.11 0 341.334 -0.224 341.334 -0.5 C 341.334 -0.776 341.11 -1 340.834 -1 L 340.834 0 Z M 342.83 -1 C 342.554 -1 342.33 -0.776 342.33 -0.5 C 342.33 -0.224 342.554 0 342.83 0 L 342.83 -1 Z M 344.826 0 C 345.102 0 345.326 -0.224 345.326 -0.5 C 345.326 -0.776 345.102 -1 344.826 -1 L 344.826 0 Z M 346.822 -1 C 346.546 -1 346.322 -0.776 346.322 -0.5 C 346.322 -0.224 346.546 0 346.822 0 L 346.822 -1 Z M 348.818 0 C 349.095 0 349.318 -0.224 349.318 -0.5 C 349.318 -0.776 349.095 -1 348.818 -1 L 348.818 0 Z M 350.814 -1 C 350.538 -1 350.314 -0.776 350.314 -0.5 C 350.314 -0.224 350.538 0 350.814 0 L 350.814 -1 Z M 352.811 0 C 353.087 0 353.311 -0.224 353.311 -0.5 C 353.311 -0.776 353.087 -1 352.811 -1 L 352.811 0 Z M 354.807 -1 C 354.53 -1 354.307 -0.776 354.307 -0.5 C 354.307 -0.224 354.53 0 354.807 0 L 354.807 -1 Z M 356.803 0 C 357.079 0 357.303 -0.224 357.303 -0.5 C 357.303 -0.776 357.079 -1 356.803 -1 L 356.803 0 Z M 358.799 -1 C 358.523 -1 358.299 -0.776 358.299 -0.5 C 358.299 -0.224 358.523 0 358.799 0 L 358.799 -1 Z M 360.795 0 C 361.071 0 361.295 -0.224 361.295 -0.5 C 361.295 -0.776 361.071 -1 360.795 -1 L 360.795 0 Z M 362.791 -1 C 362.515 -1 362.291 -0.776 362.291 -0.5 C 362.291 -0.224 362.515 0 362.791 0 L 362.791 -1 Z M 364.787 0 C 365.063 0 365.287 -0.224 365.287 -0.5 C 365.287 -0.776 365.063 -1 364.787 -1 L 364.787 0 Z M 366.783 -1 C 366.507 -1 366.283 -0.776 366.283 -0.5 C 366.283 -0.224 366.507 0 366.783 0 L 366.783 -1 Z M 368.779 0 C 369.055 0 369.279 -0.224 369.279 -0.5 C 369.279 -0.776 369.055 -1 368.779 -1 L 368.779 0 Z M 370.775 -1 C 370.499 -1 370.275 -0.776 370.275 -0.5 C 370.275 -0.224 370.499 0 370.775 0 L 370.775 -1 Z M 372.771 0 C 373.048 0 373.271 -0.224 373.271 -0.5 C 373.271 -0.776 373.048 -1 372.771 -1 L 372.771 0 Z M 374.768 -1 C 374.491 -1 374.268 -0.776 374.268 -0.5 C 374.268 -0.224 374.491 0 374.768 0 L 374.768 -1 Z M 376.764 0 C 377.04 0 377.264 -0.224 377.264 -0.5 C 377.264 -0.776 377.04 -1 376.764 -1 L 376.764 0 Z M 378.76 -1 C 378.484 -1 378.26 -0.776 378.26 -0.5 C 378.26 -0.224 378.484 0 378.76 0 L 378.76 -1 Z M 380.756 0 C 381.032 0 381.256 -0.224 381.256 -0.5 C 381.256 -0.776 381.032 -1 380.756 -1 L 380.756 0 Z M 382.752 -1 C 382.476 -1 382.252 -0.776 382.252 -0.5 C 382.252 -0.224 382.476 0 382.752 0 L 382.752 -1 Z M 384.748 0 C 385.024 0 385.248 -0.224 385.248 -0.5 C 385.248 -0.776 385.024 -1 384.748 -1 L 384.748 0 Z M 386.744 -1 C 386.468 -1 386.244 -0.776 386.244 -0.5 C 386.244 -0.224 386.468 0 386.744 0 L 386.744 -1 Z M 388.74 0 C 389.016 0 389.24 -0.224 389.24 -0.5 C 389.24 -0.776 389.016 -1 388.74 -1 L 388.74 0 Z M 390.736 -1 C 390.46 -1 390.236 -0.776 390.236 -0.5 C 390.236 -0.224 390.46 0 390.736 0 L 390.736 -1 Z M 392.732 0 C 393.009 0 393.232 -0.224 393.232 -0.5 C 393.232 -0.776 393.009 -1 392.732 -1 L 392.732 0 Z M 394.729 -1 C 394.452 -1 394.229 -0.776 394.229 -0.5 C 394.229 -0.224 394.452 0 394.729 0 L 394.729 -1 Z M 396.725 0 C 397.001 0 397.225 -0.224 397.225 -0.5 C 397.225 -0.776 397.001 -1 396.725 -1 L 396.725 0 Z M 398.721 -1 C 398.445 -1 398.221 -0.776 398.221 -0.5 C 398.221 -0.224 398.445 0 398.721 0 L 398.721 -1 Z M 400.717 0 C 400.993 0 401.217 -0.224 401.217 -0.5 C 401.217 -0.776 400.993 -1 400.717 -1 L 400.717 0 Z M 402.713 -1 C 402.437 -1 402.213 -0.776 402.213 -0.5 C 402.213 -0.224 402.437 0 402.713 0 L 402.713 -1 Z M 404.709 0 C 404.985 0 405.209 -0.224 405.209 -0.5 C 405.209 -0.776 404.985 -1 404.709 -1 L 404.709 0 Z M 406.705 -1 C 406.429 -1 406.205 -0.776 406.205 -0.5 C 406.205 -0.224 406.429 0 406.705 0 L 406.705 -1 Z M 408.701 0 C 408.977 0 409.201 -0.224 409.201 -0.5 C 409.201 -0.776 408.977 -1 408.701 -1 L 408.701 0 Z M 410.697 -1 C 410.421 -1 410.197 -0.776 410.197 -0.5 C 410.197 -0.224 410.421 0 410.697 0 L 410.697 -1 Z M 412.693 0 C 412.97 0 413.193 -0.224 413.193 -0.5 C 413.193 -0.776 412.97 -1 412.693 -1 L 412.693 0 Z M 414.689 -1 C 414.413 -1 414.189 -0.776 414.189 -0.5 C 414.189 -0.224 414.413 0 414.689 0 L 414.689 -1 Z M 416.686 0 C 416.962 0 417.186 -0.224 417.186 -0.5 C 417.186 -0.776 416.962 -1 416.686 -1 L 416.686 0 Z M 418.682 -1 C 418.405 -1 418.182 -0.776 418.182 -0.5 C 418.182 -0.224 418.405 0 418.682 0 L 418.682 -1 Z M 420.678 0 C 420.954 0 421.178 -0.224 421.178 -0.5 C 421.178 -0.776 420.954 -1 420.678 -1 L 420.678 0 Z M 422.674 -1 C 422.398 -1 422.174 -0.776 422.174 -0.5 C 422.174 -0.224 422.398 0 422.674 0 L 422.674 -1 Z M 424.67 0 C 424.946 0 425.17 -0.224 425.17 -0.5 C 425.17 -0.776 424.946 -1 424.67 -1 L 424.67 0 Z M 426.666 -1 C 426.39 -1 426.166 -0.776 426.166 -0.5 C 426.166 -0.224 426.39 0 426.666 0 L 426.666 -1 Z M 428.662 0 C 428.938 0 429.162 -0.224 429.162 -0.5 C 429.162 -0.776 428.938 -1 428.662 -1 L 428.662 0 Z M 430.658 -1 C 430.382 -1 430.158 -0.776 430.158 -0.5 C 430.158 -0.224 430.382 0 430.658 0 L 430.658 -1 Z M 432.654 0 C 432.93 0 433.154 -0.224 433.154 -0.5 C 433.154 -0.776 432.93 -1 432.654 -1 L 432.654 0 Z M 434.65 -1 C 434.374 -1 434.15 -0.776 434.15 -0.5 C 434.15 -0.224 434.374 0 434.65 0 L 434.65 -1 Z M 436.646 0 C 436.923 0 437.146 -0.224 437.146 -0.5 C 437.146 -0.776 436.923 -1 436.646 -1 L 436.646 0 Z M 438.643 -1 C 438.366 -1 438.143 -0.776 438.143 -0.5 C 438.143 -0.224 438.366 0 438.643 0 L 438.643 -1 Z M 440.639 0 C 440.915 0 441.139 -0.224 441.139 -0.5 C 441.139 -0.776 440.915 -1 440.639 -1 L 440.639 0 Z M 442.635 -1 C 442.359 -1 442.135 -0.776 442.135 -0.5 C 442.135 -0.224 442.359 0 442.635 0 L 442.635 -1 Z M 444.631 0 C 444.907 0 445.131 -0.224 445.131 -0.5 C 445.131 -0.776 444.907 -1 444.631 -1 L 444.631 0 Z M 446.627 -1 C 446.351 -1 446.127 -0.776 446.127 -0.5 C 446.127 -0.224 446.351 0 446.627 0 L 446.627 -1 Z M 448.623 0 C 448.899 0 449.123 -0.224 449.123 -0.5 C 449.123 -0.776 448.899 -1 448.623 -1 L 448.623 0 Z M 450.619 -1 C 450.343 -1 450.119 -0.776 450.119 -0.5 C 450.119 -0.224 450.343 0 450.619 0 L 450.619 -1 Z M 452.615 0 C 452.891 0 453.115 -0.224 453.115 -0.5 C 453.115 -0.776 452.891 -1 452.615 -1 L 452.615 0 Z M 454.611 -1 C 454.335 -1 454.111 -0.776 454.111 -0.5 C 454.111 -0.224 454.335 0 454.611 0 L 454.611 -1 Z M 456.607 0 C 456.884 0 457.107 -0.224 457.107 -0.5 C 457.107 -0.776 456.884 -1 456.607 -1 L 456.607 0 Z M 458.604 -1 C 458.327 -1 458.104 -0.776 458.104 -0.5 C 458.104 -0.224 458.327 0 458.604 0 L 458.604 -1 Z M 460.6 0 C 460.876 0 461.1 -0.224 461.1 -0.5 C 461.1 -0.776 460.876 -1 460.6 -1 L 460.6 0 Z M 462.596 -1 C 462.32 -1 462.096 -0.776 462.096 -0.5 C 462.096 -0.224 462.32 0 462.596 0 L 462.596 -1 Z M 464.592 0 C 464.868 0 465.092 -0.224 465.092 -0.5 C 465.092 -0.776 464.868 -1 464.592 -1 L 464.592 0 Z M 466.588 -1 C 466.312 -1 466.088 -0.776 466.088 -0.5 C 466.088 -0.224 466.312 0 466.588 0 L 466.588 -1 Z M 468.584 0 C 468.86 0 469.084 -0.224 469.084 -0.5 C 469.084 -0.776 468.86 -1 468.584 -1 L 468.584 0 Z M 470.58 -1 C 470.304 -1 470.08 -0.776 470.08 -0.5 C 470.08 -0.224 470.304 0 470.58 0 L 470.58 -1 Z M 472.576 0 C 472.852 0 473.076 -0.224 473.076 -0.5 C 473.076 -0.776 472.852 -1 472.576 -1 L 472.576 0 Z M 474.572 -1 C 474.296 -1 474.072 -0.776 474.072 -0.5 C 474.072 -0.224 474.296 0 474.572 0 L 474.572 -1 Z M 476.568 0 C 476.845 0 477.068 -0.224 477.068 -0.5 C 477.068 -0.776 476.845 -1 476.568 -1 L 476.568 0 Z M 478.564 -1 C 478.288 -1 478.064 -0.776 478.064 -0.5 C 478.064 -0.224 478.288 0 478.564 0 L 478.564 -1 Z M 480.561 0 C 480.837 0 481.061 -0.224 481.061 -0.5 C 481.061 -0.776 480.837 -1 480.561 -1 L 480.561 0 Z M 482.557 -1 C 482.28 -1 482.057 -0.776 482.057 -0.5 C 482.057 -0.224 482.28 0 482.557 0 L 482.557 -1 Z M 484.553 0 C 484.829 0 485.053 -0.224 485.053 -0.5 C 485.053 -0.776 484.829 -1 484.553 -1 L 484.553 0 Z M 486.549 -1 C 486.273 -1 486.049 -0.776 486.049 -0.5 C 486.049 -0.224 486.273 0 486.549 0 L 486.549 -1 Z M 488.545 0 C 488.821 0 489.045 -0.224 489.045 -0.5 C 489.045 -0.776 488.821 -1 488.545 -1 L 488.545 0 Z M 490.541 -1 C 490.265 -1 490.041 -0.776 490.041 -0.5 C 490.041 -0.224 490.265 0 490.541 0 L 490.541 -1 Z M 492.537 0 C 492.813 0 493.037 -0.224 493.037 -0.5 C 493.037 -0.776 492.813 -1 492.537 -1 L 492.537 0 Z M 494.533 -1 C 494.257 -1 494.033 -0.776 494.033 -0.5 C 494.033 -0.224 494.257 0 494.533 0 L 494.533 -1 Z M 496.529 0 C 496.805 0 497.029 -0.224 497.029 -0.5 C 497.029 -0.776 496.805 -1 496.529 -1 L 496.529 0 Z M 498.525 -1 C 498.249 -1 498.025 -0.776 498.025 -0.5 C 498.025 -0.224 498.249 0 498.525 0 L 498.525 -1 Z M 500.521 0 C 500.798 0 501.021 -0.224 501.021 -0.5 C 501.021 -0.776 500.798 -1 500.521 -1 L 500.521 0 Z M 502.518 -1 C 502.241 -1 502.018 -0.776 502.018 -0.5 C 502.018 -0.224 502.241 0 502.518 0 L 502.518 -1 Z M 504.514 0 C 504.79 0 505.014 -0.224 505.014 -0.5 C 505.014 -0.776 504.79 -1 504.514 -1 L 504.514 0 Z M 506.51 -1 C 506.234 -1 506.01 -0.776 506.01 -0.5 C 506.01 -0.224 506.234 0 506.51 0 L 506.51 -1 Z M 508.506 0 C 508.782 0 509.006 -0.224 509.006 -0.5 C 509.006 -0.776 508.782 -1 508.506 -1 L 508.506 0 Z M 510.502 -1 C 510.226 -1 510.002 -0.776 510.002 -0.5 C 510.002 -0.224 510.226 0 510.502 0 L 510.502 -1 Z M 0.5 0 L 1.498 0 L 1.498 -1 L 0.5 -1 L 0.5 0 Z M 3.494 0 L 5.49 0 L 5.49 -1 L 3.494 -1 L 3.494 0 Z M 7.486 0 L 9.482 0 L 9.482 -1 L 7.486 -1 L 7.486 0 Z M 11.479 0 L 13.475 0 L 13.475 -1 L 11.479 -1 L 11.479 0 Z M 15.471 0 L 17.467 0 L 17.467 -1 L 15.471 -1 L 15.471 0 Z M 19.463 0 L 21.459 0 L 21.459 -1 L 19.463 -1 L 19.463 0 Z M 23.455 0 L 25.451 0 L 25.451 -1 L 23.455 -1 L 23.455 0 Z M 27.447 0 L 29.443 0 L 29.443 -1 L 27.447 -1 L 27.447 0 Z M 31.439 0 L 33.436 0 L 33.436 -1 L 31.439 -1 L 31.439 0 Z M 35.432 0 L 37.428 0 L 37.428 -1 L 35.432 -1 L 35.432 0 Z M 39.424 0 L 41.42 0 L 41.42 -1 L 39.424 -1 L 39.424 0 Z M 43.416 0 L 45.412 0 L 45.412 -1 L 43.416 -1 L 43.416 0 Z M 47.408 0 L 49.404 0 L 49.404 -1 L 47.408 -1 L 47.408 0 Z M 51.4 0 L 53.396 0 L 53.396 -1 L 51.4 -1 L 51.4 0 Z M 55.393 0 L 57.389 0 L 57.389 -1 L 55.393 -1 L 55.393 0 Z M 59.385 0 L 61.381 0 L 61.381 -1 L 59.385 -1 L 59.385 0 Z M 63.377 0 L 65.373 0 L 65.373 -1 L 63.377 -1 L 63.377 0 Z M 67.369 0 L 69.365 0 L 69.365 -1 L 67.369 -1 L 67.369 0 Z M 71.361 0 L 73.357 0 L 73.357 -1 L 71.361 -1 L 71.361 0 Z M 75.354 0 L 77.35 0 L 77.35 -1 L 75.354 -1 L 75.354 0 Z M 79.346 0 L 81.342 0 L 81.342 -1 L 79.346 -1 L 79.346 0 Z M 83.338 0 L 85.334 0 L 85.334 -1 L 83.338 -1 L 83.338 0 Z M 87.33 0 L 89.326 0 L 89.326 -1 L 87.33 -1 L 87.33 0 Z M 91.322 0 L 93.318 0 L 93.318 -1 L 91.322 -1 L 91.322 0 Z M 95.314 0 L 97.311 0 L 97.311 -1 L 95.314 -1 L 95.314 0 Z M 99.307 0 L 101.303 0 L 101.303 -1 L 99.307 -1 L 99.307 0 Z M 103.299 0 L 105.295 0 L 105.295 -1 L 103.299 -1 L 103.299 0 Z M 107.291 0 L 109.287 0 L 109.287 -1 L 107.291 -1 L 107.291 0 Z M 111.283 0 L 113.279 0 L 113.279 -1 L 111.283 -1 L 111.283 0 Z M 115.275 0 L 117.271 0 L 117.271 -1 L 115.275 -1 L 115.275 0 Z M 119.268 0 L 121.264 0 L 121.264 -1 L 119.268 -1 L 119.268 0 Z M 123.26 0 L 125.256 0 L 125.256 -1 L 123.26 -1 L 123.26 0 Z M 127.252 0 L 129.248 0 L 129.248 -1 L 127.252 -1 L 127.252 0 Z M 131.244 0 L 133.24 0 L 133.24 -1 L 131.244 -1 L 131.244 0 Z M 135.236 0 L 137.232 0 L 137.232 -1 L 135.236 -1 L 135.236 0 Z M 139.229 0 L 141.225 0 L 141.225 -1 L 139.229 -1 L 139.229 0 Z M 143.221 0 L 145.217 0 L 145.217 -1 L 143.221 -1 L 143.221 0 Z M 147.213 0 L 149.209 0 L 149.209 -1 L 147.213 -1 L 147.213 0 Z M 151.205 0 L 153.201 0 L 153.201 -1 L 151.205 -1 L 151.205 0 Z M 155.197 0 L 157.193 0 L 157.193 -1 L 155.197 -1 L 155.197 0 Z M 159.189 0 L 161.186 0 L 161.186 -1 L 159.189 -1 L 159.189 0 Z M 163.182 0 L 165.178 0 L 165.178 -1 L 163.182 -1 L 163.182 0 Z M 167.174 0 L 169.17 0 L 169.17 -1 L 167.174 -1 L 167.174 0 Z M 171.166 0 L 173.162 0 L 173.162 -1 L 171.166 -1 L 171.166 0 Z M 175.158 0 L 177.154 0 L 177.154 -1 L 175.158 -1 L 175.158 0 Z M 179.15 0 L 181.146 0 L 181.146 -1 L 179.15 -1 L 179.15 0 Z M 183.143 0 L 185.139 0 L 185.139 -1 L 183.143 -1 L 183.143 0 Z M 187.135 0 L 189.131 0 L 189.131 -1 L 187.135 -1 L 187.135 0 Z M 191.127 0 L 193.123 0 L 193.123 -1 L 191.127 -1 L 191.127 0 Z M 195.119 0 L 197.115 0 L 197.115 -1 L 195.119 -1 L 195.119 0 Z M 199.111 0 L 201.107 0 L 201.107 -1 L 199.111 -1 L 199.111 0 Z M 203.104 0 L 205.1 0 L 205.1 -1 L 203.104 -1 L 203.104 0 Z M 207.096 0 L 209.092 0 L 209.092 -1 L 207.096 -1 L 207.096 0 Z M 211.088 0 L 213.084 0 L 213.084 -1 L 211.088 -1 L 211.088 0 Z M 215.08 0 L 217.076 0 L 217.076 -1 L 215.08 -1 L 215.08 0 Z M 219.072 0 L 221.068 0 L 221.068 -1 L 219.072 -1 L 219.072 0 Z M 223.064 0 L 225.061 0 L 225.061 -1 L 223.064 -1 L 223.064 0 Z M 227.057 0 L 229.053 0 L 229.053 -1 L 227.057 -1 L 227.057 0 Z M 231.049 0 L 233.045 0 L 233.045 -1 L 231.049 -1 L 231.049 0 Z M 235.041 0 L 237.037 0 L 237.037 -1 L 235.041 -1 L 235.041 0 Z M 239.033 0 L 241.029 0 L 241.029 -1 L 239.033 -1 L 239.033 0 Z M 243.025 0 L 245.021 0 L 245.021 -1 L 243.025 -1 L 243.025 0 Z M 247.018 0 L 249.014 0 L 249.014 -1 L 247.018 -1 L 247.018 0 Z M 251.01 0 L 253.006 0 L 253.006 -1 L 251.01 -1 L 251.01 0 Z M 255.002 0 L 256.998 0 L 256.998 -1 L 255.002 -1 L 255.002 0 Z M 258.994 0 L 260.99 0 L 260.99 -1 L 258.994 -1 L 258.994 0 Z M 262.986 0 L 264.982 0 L 264.982 -1 L 262.986 -1 L 262.986 0 Z M 266.979 0 L 268.975 0 L 268.975 -1 L 266.979 -1 L 266.979 0 Z M 270.971 0 L 272.967 0 L 272.967 -1 L 270.971 -1 L 270.971 0 Z M 274.963 0 L 276.959 0 L 276.959 -1 L 274.963 -1 L 274.963 0 Z M 278.955 0 L 280.951 0 L 280.951 -1 L 278.955 -1 L 278.955 0 Z M 282.947 0 L 284.943 0 L 284.943 -1 L 282.947 -1 L 282.947 0 Z M 286.939 0 L 288.936 0 L 288.936 -1 L 286.939 -1 L 286.939 0 Z M 290.932 0 L 292.928 0 L 292.928 -1 L 290.932 -1 L 290.932 0 Z M 294.924 0 L 296.92 0 L 296.92 -1 L 294.924 -1 L 294.924 0 Z M 298.916 0 L 300.912 0 L 300.912 -1 L 298.916 -1 L 298.916 0 Z M 302.908 0 L 304.904 0 L 304.904 -1 L 302.908 -1 L 302.908 0 Z M 306.9 0 L 308.896 0 L 308.896 -1 L 306.9 -1 L 306.9 0 Z M 310.893 0 L 312.889 0 L 312.889 -1 L 310.893 -1 L 310.893 0 Z M 314.885 0 L 316.881 0 L 316.881 -1 L 314.885 -1 L 314.885 0 Z M 318.877 0 L 320.873 0 L 320.873 -1 L 318.877 -1 L 318.877 0 Z M 322.869 0 L 324.865 0 L 324.865 -1 L 322.869 -1 L 322.869 0 Z M 326.861 0 L 328.857 0 L 328.857 -1 L 326.861 -1 L 326.861 0 Z M 330.854 0 L 332.85 0 L 332.85 -1 L 330.854 -1 L 330.854 0 Z M 334.846 0 L 336.842 0 L 336.842 -1 L 334.846 -1 L 334.846 0 Z M 338.838 0 L 340.834 0 L 340.834 -1 L 338.838 -1 L 338.838 0 Z M 342.83 0 L 344.826 0 L 344.826 -1 L 342.83 -1 L 342.83 0 Z M 346.822 0 L 348.818 0 L 348.818 -1 L 346.822 -1 L 346.822 0 Z M 350.814 0 L 352.811 0 L 352.811 -1 L 350.814 -1 L 350.814 0 Z M 354.807 0 L 356.803 0 L 356.803 -1 L 354.807 -1 L 354.807 0 Z M 358.799 0 L 360.795 0 L 360.795 -1 L 358.799 -1 L 358.799 0 Z M 362.791 0 L 364.787 0 L 364.787 -1 L 362.791 -1 L 362.791 0 Z M 366.783 0 L 368.779 0 L 368.779 -1 L 366.783 -1 L 366.783 0 Z M 370.775 0 L 372.771 0 L 372.771 -1 L 370.775 -1 L 370.775 0 Z M 374.768 0 L 376.764 0 L 376.764 -1 L 374.768 -1 L 374.768 0 Z M 378.76 0 L 380.756 0 L 380.756 -1 L 378.76 -1 L 378.76 0 Z M 382.752 0 L 384.748 0 L 384.748 -1 L 382.752 -1 L 382.752 0 Z M 386.744 0 L 388.74 0 L 388.74 -1 L 386.744 -1 L 386.744 0 Z M 390.736 0 L 392.732 0 L 392.732 -1 L 390.736 -1 L 390.736 0 Z M 394.729 0 L 396.725 0 L 396.725 -1 L 394.729 -1 L 394.729 0 Z M 398.721 0 L 400.717 0 L 400.717 -1 L 398.721 -1 L 398.721 0 Z M 402.713 0 L 404.709 0 L 404.709 -1 L 402.713 -1 L 402.713 0 Z M 406.705 0 L 408.701 0 L 408.701 -1 L 406.705 -1 L 406.705 0 Z M 410.697 0 L 412.693 0 L 412.693 -1 L 410.697 -1 L 410.697 0 Z M 414.689 0 L 416.686 0 L 416.686 -1 L 414.689 -1 L 414.689 0 Z M 418.682 0 L 420.678 0 L 420.678 -1 L 418.682 -1 L 418.682 0 Z M 422.674 0 L 424.67 0 L 424.67 -1 L 422.674 -1 L 422.674 0 Z M 426.666 0 L 428.662 0 L 428.662 -1 L 426.666 -1 L 426.666 0 Z M 430.658 0 L 432.654 0 L 432.654 -1 L 430.658 -1 L 430.658 0 Z M 434.65 0 L 436.646 0 L 436.646 -1 L 434.65 -1 L 434.65 0 Z M 438.643 0 L 440.639 0 L 440.639 -1 L 438.643 -1 L 438.643 0 Z M 442.635 0 L 444.631 0 L 444.631 -1 L 442.635 -1 L 442.635 0 Z M 446.627 0 L 448.623 0 L 448.623 -1 L 446.627 -1 L 446.627 0 Z M 450.619 0 L 452.615 0 L 452.615 -1 L 450.619 -1 L 450.619 0 Z M 454.611 0 L 456.607 0 L 456.607 -1 L 454.611 -1 L 454.611 0 Z M 458.604 0 L 460.6 0 L 460.6 -1 L 458.604 -1 L 458.604 0 Z M 462.596 0 L 464.592 0 L 464.592 -1 L 462.596 -1 L 462.596 0 Z M 466.588 0 L 468.584 0 L 468.584 -1 L 466.588 -1 L 466.588 0 Z M 470.58 0 L 472.576 0 L 472.576 -1 L 470.58 -1 L 470.58 0 Z M 474.572 0 L 476.568 0 L 476.568 -1 L 474.572 -1 L 474.572 0 Z M 478.564 0 L 480.561 0 L 480.561 -1 L 478.564 -1 L 478.564 0 Z M 482.557 0 L 484.553 0 L 484.553 -1 L 482.557 -1 L 482.557 0 Z M 486.549 0 L 488.545 0 L 488.545 -1 L 486.549 -1 L 486.549 0 Z M 490.541 0 L 492.537 0 L 492.537 -1 L 490.541 -1 L 490.541 0 Z M 494.533 0 L 496.529 0 L 496.529 -1 L 494.533 -1 L 494.533 0 Z M 498.525 0 L 500.521 0 L 500.521 -1 L 498.525 -1 L 498.525 0 Z M 502.518 0 L 504.514 0 L 504.514 -1 L 502.518 -1 L 502.518 0 Z M 506.51 0 L 508.506 0 L 508.506 -1 L 506.51 -1 L 506.51 0 Z M 510.502 0 L 511.5 0 L 511.5 -1 L 510.502 -1 L 510.502 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 5,
      top: 16.221,
      width: 36.046,
      height: 36.046,
      opacity: 0.32,
      backgroundColor: "rgba(242,243,247,0.2)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 469.998,
      top: 16.221,
      width: 36.046,
      height: 36.046,
      opacity: 0.32,
      backgroundColor: "rgba(242,243,247,0.2)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 5,
      top: 106.337,
      width: 36.046,
      height: 36.046,
      opacity: 0.32,
      backgroundColor: "rgba(242,243,247,0.2)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 469.998,
      top: 106.337,
      width: 36.046,
      height: 36.046,
      opacity: 0.32,
      backgroundColor: "rgba(242,243,247,0.2)"
    }
  })))));
  const __impls = {
    // figma: Property 1=Default
    "property1=default": __body0,
    // figma: Property 1=Variant2
    "property1=variant2": __body1
  };
  return (__impls[__vkey(props)] ?? __body0)();
}
Object.assign(__ds_scope, { LogoGridHover, __ds_default_components_LogoGridHover_1y402ut: LogoGridHover });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/LogoGridHover.jsx", error: String((e && e.message) || e) }); }

// components/Name.jsx
try { (() => {
// figma node: 101:14757 Name
function Name(_p = {}) {
  const props = _p;
  return /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
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
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "fig-asset-50bf8335ed36576c",
    style: {
      position: "relative",
      width: 24,
      borderRadius: 4,
      boxShadow: "inset 0 0 0 1px rgba(0,0,0,0.1)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 16,
      lineHeight: "100%",
      color: "rgba(63,87,133,0.5)",
      flexShrink: 0,
      whiteSpace: "nowrap"
    }
  }, props.text1 ?? "Polnac Team"));
}
Object.assign(__ds_scope, { Name, __ds_default_components_Name_182cddn: Name });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/Name.jsx", error: String((e && e.message) || e) }); }

// components/Scribble2.jsx
try { (() => {
// figma node: 278:6691 Scribble
function Scribble2(_p = {}) {
  const props = _p;
  return /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 240,
      height: 240,
      overflow: "hidden",
      position: "relative",
      color: "rgb(0,0,0)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 22.786,
      top: 74.028,
      width: 194.37,
      height: 92.026,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 194.370,
    height: 92.026,
    viewBox: "0 0 194.370 92.026",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 194.37,
      height: 92.026
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 165.714 30.763 C 160.672 33.638 156.464 36.18 152.13 38.472 C 144.797 42.388 137.38 45.93 128.839 46.513 C 120.172 47.097 113.38 43.805 109.297 36.347 C 106.797 31.763 105.547 26.513 103.922 21.513 C 103.297 19.555 103.214 17.388 102.714 14.347 C 100.214 18.18 98.297 21.222 96.255 24.18 C 91.297 31.43 86.63 38.888 81.214 45.763 C 73.839 55.222 64.547 56.013 55.297 48.263 C 51.672 45.222 48.755 41.263 45.547 37.68 C 44.589 36.597 43.797 35.388 42.755 34.013 C 40.88 42.138 39.214 49.888 37.255 57.513 C 32.672 75.305 18.422 74.68 8.297 66.888 C 5.589 64.805 3.339 62.013 1.13 59.347 C -0.286 57.513 -0.578 55.138 1.464 53.597 C 3.297 52.18 5.214 53.18 6.797 54.68 C 8.38 56.138 9.88 57.722 11.589 58.972 C 13.589 60.43 15.63 61.888 17.88 62.93 C 24.214 65.847 28.464 64.347 31.047 57.847 C 32.88 53.263 34.047 48.388 35.255 43.597 C 36.38 39.138 37.297 34.597 38.214 30.055 C 38.714 27.722 39.297 25.388 41.839 24.597 C 44.755 23.68 46.505 25.722 48.13 27.597 C 50.214 29.972 51.922 32.638 54.13 34.888 C 56.88 37.763 59.714 40.597 62.839 42.972 C 67.089 46.18 70.172 46.013 73.922 42.222 C 77.505 38.597 80.964 34.68 83.922 30.513 C 90.214 21.555 96.172 12.43 102.13 3.263 C 103.547 1.097 105.089 -0.403 107.714 0.097 C 110.214 0.555 111.005 2.597 111.339 4.888 C 111.922 8.972 112.339 13.138 113.13 17.18 C 113.839 20.722 114.63 24.347 115.964 27.68 C 119.505 36.597 125.005 39.43 134.422 37.805 C 141.505 36.597 148.13 34.055 154.422 30.68 C 158.964 28.263 163.339 25.555 167.755 22.972 C 170.089 21.597 172.505 20.18 175.089 22.222 C 177.505 24.18 177.089 26.93 176.547 29.597 C 176.297 30.722 175.88 31.805 175.505 32.888 C 174.714 35.055 174.047 37.305 173.047 39.388 C 165.714 54.93 170.839 67.722 181.88 79.055 C 183.922 81.138 186.63 82.597 189.089 84.263 C 190.297 85.097 191.797 85.597 192.88 86.555 C 193.672 87.222 194.547 88.555 194.339 89.347 C 194.13 90.222 192.797 91.055 191.922 91.472 C 190.005 92.347 187.422 92.097 185.589 91.347 C 181.964 89.847 178.297 88.055 175.297 85.597 C 168.63 80.18 164.005 73.097 160.63 65.18 C 157.755 58.43 158.13 51.555 160.339 44.763 C 161.839 40.347 163.672 36.097 165.714 30.763 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))));
}
Object.assign(__ds_scope, { Scribble2, __ds_default_components_Scribble2_4ani6q: Scribble2 });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/Scribble2.jsx", error: String((e && e.message) || e) }); }

// components/Scribble.jsx
try { (() => {
// figma node: 278:6689 Scribble
function Scribble(_p = {}) {
  const props = _p;
  return /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 240,
      height: 240,
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Scribble2, {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 240,
      height: 240
    }
  }));
}
Object.assign(__ds_scope, { Scribble, __ds_default_components_Scribble_pyjn34: Scribble });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/Scribble.jsx", error: String((e && e.message) || e) }); }

// components/SectionAgradecimiento.jsx
try { (() => {
// figma node: 2987:164 Section-agradecimiento (3 variants)
const __venc = v => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = p => "property1=" + __venc(p.property1);
function SectionAgradecimiento(_p = {}) {
  const props = {
    ..._p,
    property1: _p.property1 ?? "default"
  };
  const __body0 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 1280,
      height: 669,
      borderRadius: 8,
      background: "radial-gradient(588.910px 368.065px at 92.61% 75.40%, rgba(45,201,216,0.3) 0.00%, rgba(45,201,216,0) 100.00%), radial-gradient(685.798px 457.429px at 16.28% 10.88%, rgba(174,127,226,0.5) 0.00%, rgba(174,127,226,0) 100.00%), linear-gradient(rgb(72,101,232),rgb(72,101,232)), linear-gradient(rgb(255,255,255),rgb(255,255,255))",
      boxShadow: "0px 16px 32px -4px rgba(12,12,13,0.1), 0px 4px 4px -4px rgba(12,12,13,0.05)",
      display: "flex",
      flexDirection: "row",
      gap: 16,
      padding: "40px 80px 40px 80px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 16,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 552,
      height: 153,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 34,
      top: 18,
      width: 518,
      height: 113,
      fontFamily: "\"Red Hat Display\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 55,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(246,251,253)"
    }
  }, props.text1 ?? "¡Gracias por contactarnos!"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 552,
      height: 153
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 7,
      top: 7,
      width: 536,
      height: 137,
      boxShadow: "inset 0 0 0 1.500px rgb(0,193,211), 0 0 0 1.500px rgb(0,193,211)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 135,
      width: 18,
      height: 18,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1.500px rgb(0,193,211), 0 0 0 1.500px rgb(0,193,211)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 534,
      top: 135,
      width: 18,
      height: 18,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1.500px rgb(0,193,211), 0 0 0 1.500px rgb(0,193,211)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 18,
      height: 18,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1.500px rgb(0,193,211), 0 0 0 1.500px rgb(0,193,211)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 534,
      top: 0,
      width: 18,
      height: 18,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1.500px rgb(0,193,211), 0 0 0 1.500px rgb(0,193,211)"
    }
  }))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Red Hat Display\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 900,
      fontSize: 24,
      lineHeight: "100%",
      color: "rgb(235,243,252)",
      flexShrink: 0,
      alignSelf: "stretch",
      whiteSpace: "pre-wrap"
    }
  }, "Hemos recibido tu solicitud y ", /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 900
    }
  }, "estamos emocionados de ayudarte a llevar tu proyecto al siguiente nivel."), " Pronto nos pondremos en contacto contigo."), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      borderRadius: 100,
      backgroundColor: "rgb(0,193,211)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "16px 24px 16px 24px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 24,
      height: 24,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 14,
    height: 2,
    viewBox: "0 -1 14 2",
    fill: "none",
    style: {
      position: "absolute",
      left: 5,
      top: 12,
      width: 14,
      height: 2,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 14 1 C 14.552 1 15 0.552 15 0 C 15 -0.552 14.552 -1 14 -1 L 14 1 Z M 0 -1 C -0.552 -1 -1 -0.552 -1 0 C -1 0.552 -0.552 1 0 1 L 0 -1 Z M 14 -1 L 0 -1 L 0 1 L 14 1 L 14 -1 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 7,
    height: 14,
    viewBox: "0 0 7 14",
    fill: "none",
    style: {
      position: "absolute",
      left: 5,
      top: 5,
      width: 7,
      height: 14,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 6.293 14.707 C 6.683 15.098 7.317 15.098 7.707 14.707 C 8.098 14.317 8.098 13.683 7.707 13.293 L 6.293 14.707 Z M 0 7 L -0.707 6.293 C -1.098 6.683 -1.098 7.317 -0.707 7.707 L 0 7 Z M 7.707 0.707 C 8.098 0.317 8.098 -0.317 7.707 -0.707 C 7.317 -1.098 6.683 -1.098 6.293 -0.707 L 7.707 0.707 Z M 7.707 13.293 L 0.707 6.293 L -0.707 7.707 L 6.293 14.707 L 7.707 13.293 Z M 0.707 7.707 L 7.707 0.707 L 6.293 -0.707 L -0.707 6.293 L 0.707 7.707 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Red Hat Display\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 16,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(255,255,255)",
      flexShrink: 0
    }
  }, props.text2 ?? "Mandar otro mensaje"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 1032,
      top: 451,
      width: 25,
      height: 31,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 25,
    height: 31,
    viewBox: "0 0 25 31",
    fill: "none",
    style: {
      position: "relative",
      width: 25,
      height: 31,
      flexShrink: 0,
      filter: "drop-shadow(0px 2px 2px rgba(0,0,0,0.2))",
      color: "rgb(230,70,242)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0 L 5.556 31 L 12.963 18.788 L 25 15.03 L 0 0 Z",
    fill: "rgb(230,70,242)",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 5.556 31 L 4.424 31.203 L 4.961 34.196 L 6.538 31.596 L 5.556 31 Z M 0 0 L 0.592 -0.985 L -1.578 -2.29 L -1.131 0.203 L 0 0 Z M 25 15.03 L 25.342 16.127 L 27.786 15.364 L 25.592 14.045 L 25 15.03 Z M 12.963 18.788 L 12.621 17.691 L 12.206 17.82 L 11.98 18.192 L 12.963 18.788 Z M 6.687 30.797 L 1.131 -0.203 L -1.131 0.203 L 4.424 31.203 L 6.687 30.797 Z M -0.592 0.985 L 24.408 16.015 L 25.592 14.045 L 0.592 -0.985 L -0.592 0.985 Z M 24.658 13.933 L 12.621 17.691 L 13.305 19.885 L 25.342 16.127 L 24.658 13.933 Z M 11.98 18.192 L 4.573 30.404 L 6.538 31.596 L 13.946 19.384 L 11.98 18.192 Z",
    fill: "rgb(255,255,255)",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 27,
      top: 37,
      borderRadius: "3px 28px 28px 28px",
      backgroundColor: "rgb(230,70,242)",
      boxShadow: "inset 0 0 0 2px rgb(172,23,224), 0px 1px 10px 0px rgba(230,70,242,0.5)",
      display: "flex",
      flexDirection: "column",
      gap: 2,
      padding: "11px 20px 11px 20px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      opacity: 0.8,
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 13,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(255,254,255)",
      flexShrink: 0
    }
  }, props.text3 ?? "Pink Pixel"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 24,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(255,254,255)",
      flexShrink: 0
    }
  }, props.text4 ?? "Hablemos pronto")))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 759,
      top: 162,
      width: 298,
      height: 210.914,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 15.809,
      top: 15.809,
      width: 134.525,
      height: 134.424,
      backgroundColor: "rgb(0,193,211)",
      boxShadow: "0px 1px 10px 0px rgba(0,193,211,0.5)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 32.513,
      top: 54.451,
      width: 100.688,
      height: 57.964,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 100.688,
      height: 15.676,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 24.162,
    height: 10.176,
    viewBox: "0 0 24.162 10.176",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "matrix(-0.971,-0.240,0.240,-0.971,98.248,15.676)",
      transformOrigin: "0 0",
      width: 24.162,
      height: 10.176,
      color: "rgb(211,255,136)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 22.879 0.686 C 21.372 -0.833 17.138 0.644 17.138 0.644 C 17.138 0.644 9.583 1.784 7.165 0.741 C 4.748 -0.302 1.546 -0.512 0.38 2.645 C -0.429 4.788 0.204 6.354 0.877 7.292 C 2.293 9.265 5.104 10.176 9.881 10.176 C 10.483 10.176 11.116 10.161 11.781 10.133 C 18.149 9.861 21.705 8.774 23.31 6.613 C 23.918 5.791 24.216 4.804 24.154 3.875 C 24.127 2.282 23.453 1.265 22.879 0.686 Z",
    fill: "currentColor",
    fillRule: "evenodd"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 22.890,
    height: 10.176,
    viewBox: "0 0 22.890 10.176",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "matrix(0.969,-0.247,-0.247,-0.969,2.512,15.514)",
      transformOrigin: "0 0",
      width: 22.89,
      height: 10.176,
      color: "rgb(211,255,136)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 21.675 0.686 C 20.247 -0.833 16.236 0.644 16.236 0.644 C 16.236 0.644 9.079 1.784 6.788 0.741 C 4.498 -0.302 1.465 -0.512 0.36 2.645 C -0.406 4.788 0.194 6.354 0.831 7.292 C 2.172 9.265 4.835 10.176 9.361 10.176 C 9.931 10.176 10.531 10.161 11.161 10.133 C 17.194 9.861 20.563 8.774 22.083 6.613 C 22.659 5.791 22.942 4.804 22.883 3.875 C 22.857 2.282 22.219 1.265 21.675 0.686 Z",
    fill: "currentColor",
    fillRule: "evenodd"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 9.349,
      top: 25.242,
      width: 82.271,
      height: 11.219,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 11.219,
    height: 11.219,
    viewBox: "0 0 11.219 11.219",
    fill: "none",
    style: {
      position: "absolute",
      left: 71.052,
      top: 0,
      width: 11.219,
      height: 11.219,
      color: "rgb(50,50,50)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 5.616 C 0 2.499 2.499 0 5.617 0 C 8.709 0 11.219 2.499 11.219 5.616 C 11.219 8.696 8.709 11.219 5.617 11.219 C 2.499 11.219 0 8.696 0 5.616",
    fill: "currentColor",
    fillRule: "evenodd"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 11.219,
    height: 11.219,
    viewBox: "0 0 11.219 11.219",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 11.219,
      height: 11.219,
      color: "rgb(50,50,50)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 5.616 C 0 2.499 2.528 0 5.623 0 C 8.716 0 11.219 2.499 11.219 5.616 C 11.219 8.696 8.716 11.219 5.623 11.219 C 2.528 11.219 0 8.696 0 5.616",
    fill: "currentColor",
    fillRule: "evenodd"
  }))), /*#__PURE__*/React.createElement("svg", {
    width: 29.917,
    height: 20.568,
    viewBox: "0 0 29.917 20.568",
    fill: "none",
    style: {
      position: "absolute",
      left: 37.396,
      top: 37.396,
      width: 29.917,
      height: 20.568,
      color: "rgb(0,86,121)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.002 1.435 C 0.002 1.435 13.644 -1.793 29.915 1.435 C 29.915 1.435 30.408 20.568 14.959 20.568 C -0.545 20.568 0.002 1.435 0.002 1.435 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("svg", {
    width: 24.591,
    height: 24.591,
    viewBox: "0 0 24.591 24.591",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 24.591,
      height: 24.591,
      color: "rgb(0,0,0)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0 L 0 24.591 L 24.591 0 L 0 0 Z",
    fill: "rgb(0,0,0)",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 0 24.591 L -1.149 24.591 L -1.149 27.365 L 0.813 25.403 L 0 24.591 Z M 0 0 L 0 -1.149 L -1.149 -1.149 L -1.149 0 L 0 0 Z M 24.591 0 L 25.403 0.813 L 27.365 -1.149 L 24.591 -1.149 L 24.591 0 Z M 1.149 24.591 L 1.149 0 L -1.149 0 L -1.149 24.591 L 1.149 24.591 Z M 0 1.149 L 24.591 1.149 L 24.591 -1.149 L 0 -1.149 L 0 1.149 Z M 23.778 -0.813 L -0.813 23.778 L 0.813 25.403 L 25.403 0.813 L 23.778 -0.813 Z",
    fill: "rgb(255,255,255)",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 140.96,
      top: 159.332,
      width: 157.04,
      height: 51.582,
      borderRadius: 12,
      backgroundColor: "rgb(0,193,211)",
      boxShadow: "0px 1px 10px 0px rgba(0,193,211,0.5)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "8px 12px 8px 12px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 24,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(255,254,255)",
      flexShrink: 0
    }
  }, "Blue Pixel"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 1084,
      top: 162,
      width: 25,
      height: 31,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 25,
    height: 31,
    viewBox: "0 0 25 31",
    fill: "none",
    style: {
      position: "relative",
      width: 25,
      height: 31,
      flexShrink: 0,
      filter: "drop-shadow(0px 2px 2px rgba(0,0,0,0.2))",
      color: "rgb(121,189,11)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0 L 5.556 31 L 12.963 18.788 L 25 15.03 L 0 0 Z",
    fill: "rgb(121,189,11)",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 5.556 31 L 4.424 31.203 L 4.961 34.196 L 6.538 31.596 L 5.556 31 Z M 0 0 L 0.592 -0.985 L -1.578 -2.29 L -1.131 0.203 L 0 0 Z M 25 15.03 L 25.342 16.127 L 27.786 15.364 L 25.592 14.045 L 25 15.03 Z M 12.963 18.788 L 12.621 17.691 L 12.206 17.82 L 11.98 18.192 L 12.963 18.788 Z M 6.687 30.797 L 1.131 -0.203 L -1.131 0.203 L 4.424 31.203 L 6.687 30.797 Z M -0.592 0.985 L 24.408 16.015 L 25.592 14.045 L 0.592 -0.985 L -0.592 0.985 Z M 24.658 13.933 L 12.621 17.691 L 13.305 19.885 L 25.342 16.127 L 24.658 13.933 Z M 11.98 18.192 L 4.573 30.404 L 6.538 31.596 L 13.946 19.384 L 11.98 18.192 Z",
    fill: "rgb(255,255,255)",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 27,
      top: 37,
      borderRadius: "3px 28px 28px 28px",
      backgroundColor: "rgb(121,189,11)",
      boxShadow: "inset 0 0 0 2px rgb(65,150,12), 0px 1px 10px 0px rgba(121,189,11,0.5)",
      display: "flex",
      flexDirection: "column",
      gap: 2,
      padding: "11px 20px 11px 20px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      opacity: 0.8,
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 13,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(255,254,255)",
      flexShrink: 0
    }
  }, "Green Pixel"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 24,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(255,254,255)",
      flexShrink: 0
    }
  }, "Gracias!!")))));
  const __body1 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 1280,
      height: 669,
      borderRadius: 8,
      background: "radial-gradient(588.910px 368.065px at 92.61% 75.40%, rgba(45,201,216,0.3) 0.00%, rgba(45,201,216,0) 100.00%), radial-gradient(685.798px 457.429px at 16.28% 10.88%, rgba(174,127,226,0.5) 0.00%, rgba(174,127,226,0) 100.00%), linear-gradient(rgb(72,101,232),rgb(72,101,232)), linear-gradient(rgb(255,255,255),rgb(255,255,255))",
      boxShadow: "0px 16px 32px -4px rgba(12,12,13,0.1), 0px 4px 4px -4px rgba(12,12,13,0.05)",
      display: "flex",
      flexDirection: "row",
      gap: 16,
      padding: "40px 80px 40px 80px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 16,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 552,
      height: 153,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 34,
      top: 18,
      width: 518,
      height: 113,
      fontFamily: "\"Red Hat Display\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 55,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(246,251,253)"
    }
  }, props.text1 ?? "¡Gracias por contactarnos!"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 552,
      height: 153
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 7,
      top: 7,
      width: 536,
      height: 137,
      boxShadow: "inset 0 0 0 1.500px rgb(0,193,211), 0 0 0 1.500px rgb(0,193,211)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 135,
      width: 18,
      height: 18,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1.500px rgb(0,193,211), 0 0 0 1.500px rgb(0,193,211)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 534,
      top: 135,
      width: 18,
      height: 18,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1.500px rgb(0,193,211), 0 0 0 1.500px rgb(0,193,211)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 18,
      height: 18,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1.500px rgb(0,193,211), 0 0 0 1.500px rgb(0,193,211)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 534,
      top: 0,
      width: 18,
      height: 18,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1.500px rgb(0,193,211), 0 0 0 1.500px rgb(0,193,211)"
    }
  }))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Red Hat Display\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 900,
      fontSize: 24,
      lineHeight: "100%",
      color: "rgb(235,243,252)",
      flexShrink: 0,
      alignSelf: "stretch",
      whiteSpace: "pre-wrap"
    }
  }, "Hemos recibido tu solicitud y ", /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 900
    }
  }, "estamos emocionados de ayudarte a llevar tu proyecto al siguiente nivel."), " Pronto nos pondremos en contacto contigo."), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      borderRadius: 100,
      backgroundColor: "rgb(0,193,211)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "16px 24px 16px 24px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 24,
      height: 24,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 14,
    height: 2,
    viewBox: "0 -1 14 2",
    fill: "none",
    style: {
      position: "absolute",
      left: 5,
      top: 12,
      width: 14,
      height: 2,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 14 1 C 14.552 1 15 0.552 15 0 C 15 -0.552 14.552 -1 14 -1 L 14 1 Z M 0 -1 C -0.552 -1 -1 -0.552 -1 0 C -1 0.552 -0.552 1 0 1 L 0 -1 Z M 14 -1 L 0 -1 L 0 1 L 14 1 L 14 -1 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 7,
    height: 14,
    viewBox: "0 0 7 14",
    fill: "none",
    style: {
      position: "absolute",
      left: 5,
      top: 5,
      width: 7,
      height: 14,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 6.293 14.707 C 6.683 15.098 7.317 15.098 7.707 14.707 C 8.098 14.317 8.098 13.683 7.707 13.293 L 6.293 14.707 Z M 0 7 L -0.707 6.293 C -1.098 6.683 -1.098 7.317 -0.707 7.707 L 0 7 Z M 7.707 0.707 C 8.098 0.317 8.098 -0.317 7.707 -0.707 C 7.317 -1.098 6.683 -1.098 6.293 -0.707 L 7.707 0.707 Z M 7.707 13.293 L 0.707 6.293 L -0.707 7.707 L 6.293 14.707 L 7.707 13.293 Z M 0.707 7.707 L 7.707 0.707 L 6.293 -0.707 L -0.707 6.293 L 0.707 7.707 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Red Hat Display\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 16,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(255,255,255)",
      flexShrink: 0
    }
  }, props.text2 ?? "Mandar otro mensaje"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 957,
      top: 519,
      width: 25,
      height: 31,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 25,
    height: 31,
    viewBox: "0 0 25 31",
    fill: "none",
    style: {
      position: "relative",
      width: 25,
      height: 31,
      flexShrink: 0,
      filter: "drop-shadow(0px 2px 2px rgba(0,0,0,0.2))",
      color: "rgb(230,70,242)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0 L 5.556 31 L 12.963 18.788 L 25 15.03 L 0 0 Z",
    fill: "rgb(230,70,242)",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 5.556 31 L 4.424 31.203 L 4.961 34.196 L 6.538 31.596 L 5.556 31 Z M 0 0 L 0.592 -0.985 L -1.578 -2.29 L -1.131 0.203 L 0 0 Z M 25 15.03 L 25.342 16.127 L 27.786 15.364 L 25.592 14.045 L 25 15.03 Z M 12.963 18.788 L 12.621 17.691 L 12.206 17.82 L 11.98 18.192 L 12.963 18.788 Z M 6.687 30.797 L 1.131 -0.203 L -1.131 0.203 L 4.424 31.203 L 6.687 30.797 Z M -0.592 0.985 L 24.408 16.015 L 25.592 14.045 L 0.592 -0.985 L -0.592 0.985 Z M 24.658 13.933 L 12.621 17.691 L 13.305 19.885 L 25.342 16.127 L 24.658 13.933 Z M 11.98 18.192 L 4.573 30.404 L 6.538 31.596 L 13.946 19.384 L 11.98 18.192 Z",
    fill: "rgb(255,255,255)",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 27,
      top: 37,
      borderRadius: "3px 28px 28px 28px",
      backgroundColor: "rgb(230,70,242)",
      boxShadow: "inset 0 0 0 2px rgb(172,23,224), 0px 1px 10px 0px rgba(230,70,242,0.5)",
      display: "flex",
      flexDirection: "column",
      gap: 2,
      padding: "11px 20px 11px 20px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      opacity: 0.8,
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 13,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(255,254,255)",
      flexShrink: 0
    }
  }, props.text3 ?? "Pink Pixel"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 24,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(255,254,255)",
      flexShrink: 0
    }
  }, props.text4 ?? "Hablemos pronto")))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 833,
      top: 208,
      width: 298,
      height: 210.914,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 15.809,
      top: 15.809,
      width: 134.525,
      height: 134.424,
      backgroundColor: "rgb(0,193,211)",
      boxShadow: "0px 1px 10px 0px rgba(0,193,211,0.5)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 32.513,
      top: 54.451,
      width: 100.688,
      height: 57.964,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 100.688,
      height: 15.676,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 24.162,
    height: 10.176,
    viewBox: "0 0 24.162 10.176",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "matrix(-0.971,-0.240,0.240,-0.971,98.248,15.676)",
      transformOrigin: "0 0",
      width: 24.162,
      height: 10.176,
      color: "rgb(211,255,136)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 22.879 0.686 C 21.372 -0.833 17.138 0.644 17.138 0.644 C 17.138 0.644 9.583 1.784 7.165 0.741 C 4.748 -0.302 1.546 -0.512 0.38 2.645 C -0.429 4.788 0.204 6.354 0.877 7.292 C 2.293 9.265 5.104 10.176 9.881 10.176 C 10.483 10.176 11.116 10.161 11.781 10.133 C 18.149 9.861 21.705 8.774 23.31 6.613 C 23.918 5.791 24.216 4.804 24.154 3.875 C 24.127 2.282 23.453 1.265 22.879 0.686 Z",
    fill: "currentColor",
    fillRule: "evenodd"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 22.890,
    height: 10.176,
    viewBox: "0 0 22.890 10.176",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "matrix(0.969,-0.247,-0.247,-0.969,2.512,15.514)",
      transformOrigin: "0 0",
      width: 22.89,
      height: 10.176,
      color: "rgb(211,255,136)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 21.675 0.686 C 20.247 -0.833 16.236 0.644 16.236 0.644 C 16.236 0.644 9.079 1.784 6.788 0.741 C 4.498 -0.302 1.465 -0.512 0.36 2.645 C -0.406 4.788 0.194 6.354 0.831 7.292 C 2.172 9.265 4.835 10.176 9.361 10.176 C 9.931 10.176 10.531 10.161 11.161 10.133 C 17.194 9.861 20.563 8.774 22.083 6.613 C 22.659 5.791 22.942 4.804 22.883 3.875 C 22.857 2.282 22.219 1.265 21.675 0.686 Z",
    fill: "currentColor",
    fillRule: "evenodd"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 9.349,
      top: 25.242,
      width: 82.271,
      height: 11.219,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 11.219,
    height: 11.219,
    viewBox: "0 0 11.219 11.219",
    fill: "none",
    style: {
      position: "absolute",
      left: 71.052,
      top: 0,
      width: 11.219,
      height: 11.219,
      color: "rgb(50,50,50)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 5.616 C 0 2.499 2.499 0 5.617 0 C 8.709 0 11.219 2.499 11.219 5.616 C 11.219 8.696 8.709 11.219 5.617 11.219 C 2.499 11.219 0 8.696 0 5.616",
    fill: "currentColor",
    fillRule: "evenodd"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 11.219,
    height: 11.219,
    viewBox: "0 0 11.219 11.219",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 11.219,
      height: 11.219,
      color: "rgb(50,50,50)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 5.616 C 0 2.499 2.528 0 5.623 0 C 8.716 0 11.219 2.499 11.219 5.616 C 11.219 8.696 8.716 11.219 5.623 11.219 C 2.528 11.219 0 8.696 0 5.616",
    fill: "currentColor",
    fillRule: "evenodd"
  }))), /*#__PURE__*/React.createElement("svg", {
    width: 29.917,
    height: 20.568,
    viewBox: "0 0 29.917 20.568",
    fill: "none",
    style: {
      position: "absolute",
      left: 37.396,
      top: 37.396,
      width: 29.917,
      height: 20.568,
      color: "rgb(0,86,121)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.002 1.435 C 0.002 1.435 13.644 -1.793 29.915 1.435 C 29.915 1.435 30.408 20.568 14.959 20.568 C -0.545 20.568 0.002 1.435 0.002 1.435 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("svg", {
    width: 24.591,
    height: 24.591,
    viewBox: "0 0 24.591 24.591",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 24.591,
      height: 24.591,
      color: "rgb(0,0,0)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0 L 0 24.591 L 24.591 0 L 0 0 Z",
    fill: "rgb(0,0,0)",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 0 24.591 L -1.149 24.591 L -1.149 27.365 L 0.813 25.403 L 0 24.591 Z M 0 0 L 0 -1.149 L -1.149 -1.149 L -1.149 0 L 0 0 Z M 24.591 0 L 25.403 0.813 L 27.365 -1.149 L 24.591 -1.149 L 24.591 0 Z M 1.149 24.591 L 1.149 0 L -1.149 0 L -1.149 24.591 L 1.149 24.591 Z M 0 1.149 L 24.591 1.149 L 24.591 -1.149 L 0 -1.149 L 0 1.149 Z M 23.778 -0.813 L -0.813 23.778 L 0.813 25.403 L 25.403 0.813 L 23.778 -0.813 Z",
    fill: "rgb(255,255,255)",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 140.96,
      top: 159.332,
      width: 157.04,
      height: 51.582,
      borderRadius: 12,
      backgroundColor: "rgb(0,193,211)",
      boxShadow: "0px 1px 10px 0px rgba(0,193,211,0.5)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "8px 12px 8px 12px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 24,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(255,254,255)",
      flexShrink: 0
    }
  }, "Blue Pixel"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 1039,
      top: 100,
      width: 25,
      height: 31,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 25,
    height: 31,
    viewBox: "0 0 25 31",
    fill: "none",
    style: {
      position: "relative",
      width: 25,
      height: 31,
      flexShrink: 0,
      filter: "drop-shadow(0px 2px 2px rgba(0,0,0,0.2))",
      color: "rgb(121,189,11)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0 L 5.556 31 L 12.963 18.788 L 25 15.03 L 0 0 Z",
    fill: "rgb(121,189,11)",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 5.556 31 L 4.424 31.203 L 4.961 34.196 L 6.538 31.596 L 5.556 31 Z M 0 0 L 0.592 -0.985 L -1.578 -2.29 L -1.131 0.203 L 0 0 Z M 25 15.03 L 25.342 16.127 L 27.786 15.364 L 25.592 14.045 L 25 15.03 Z M 12.963 18.788 L 12.621 17.691 L 12.206 17.82 L 11.98 18.192 L 12.963 18.788 Z M 6.687 30.797 L 1.131 -0.203 L -1.131 0.203 L 4.424 31.203 L 6.687 30.797 Z M -0.592 0.985 L 24.408 16.015 L 25.592 14.045 L 0.592 -0.985 L -0.592 0.985 Z M 24.658 13.933 L 12.621 17.691 L 13.305 19.885 L 25.342 16.127 L 24.658 13.933 Z M 11.98 18.192 L 4.573 30.404 L 6.538 31.596 L 13.946 19.384 L 11.98 18.192 Z",
    fill: "rgb(255,255,255)",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 27,
      top: 37,
      borderRadius: "3px 28px 28px 28px",
      backgroundColor: "rgb(121,189,11)",
      boxShadow: "inset 0 0 0 2px rgb(65,150,12), 0px 1px 10px 0px rgba(121,189,11,0.5)",
      display: "flex",
      flexDirection: "column",
      gap: 2,
      padding: "11px 20px 11px 20px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      opacity: 0.8,
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 13,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(255,254,255)",
      flexShrink: 0
    }
  }, "Green Pixel"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 24,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(255,254,255)",
      flexShrink: 0
    }
  }, "Gracias!!")))));
  const __body2 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 1280,
      height: 669,
      borderRadius: 8,
      background: "radial-gradient(588.910px 368.065px at 92.61% 75.40%, rgba(45,201,216,0.3) 0.00%, rgba(45,201,216,0) 100.00%), radial-gradient(685.798px 457.429px at 16.28% 10.88%, rgba(174,127,226,0.5) 0.00%, rgba(174,127,226,0) 100.00%), linear-gradient(rgb(72,101,232),rgb(72,101,232)), linear-gradient(rgb(255,255,255),rgb(255,255,255))",
      boxShadow: "0px 16px 32px -4px rgba(12,12,13,0.1), 0px 4px 4px -4px rgba(12,12,13,0.05)",
      display: "flex",
      flexDirection: "row",
      gap: 16,
      padding: "40px 80px 40px 80px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 16,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 552,
      height: 153,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 34,
      top: 18,
      width: 518,
      height: 113,
      fontFamily: "\"Red Hat Display\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 55,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(246,251,253)"
    }
  }, props.text1 ?? "¡Gracias por contactarnos!"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 552,
      height: 153
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 7,
      top: 7,
      width: 536,
      height: 137,
      boxShadow: "inset 0 0 0 1.500px rgb(0,193,211), 0 0 0 1.500px rgb(0,193,211)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 135,
      width: 18,
      height: 18,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1.500px rgb(0,193,211), 0 0 0 1.500px rgb(0,193,211)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 534,
      top: 135,
      width: 18,
      height: 18,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1.500px rgb(0,193,211), 0 0 0 1.500px rgb(0,193,211)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 18,
      height: 18,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1.500px rgb(0,193,211), 0 0 0 1.500px rgb(0,193,211)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 534,
      top: 0,
      width: 18,
      height: 18,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1.500px rgb(0,193,211), 0 0 0 1.500px rgb(0,193,211)"
    }
  }))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Red Hat Display\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 900,
      fontSize: 24,
      lineHeight: "100%",
      color: "rgb(235,243,252)",
      flexShrink: 0,
      alignSelf: "stretch",
      whiteSpace: "pre-wrap"
    }
  }, "Hemos recibido tu solicitud y ", /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 900
    }
  }, "estamos emocionados de ayudarte a llevar tu proyecto al siguiente nivel."), " Pronto nos pondremos en contacto contigo."), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      borderRadius: 100,
      backgroundColor: "rgb(0,193,211)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "16px 24px 16px 24px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 24,
      height: 24,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 14,
    height: 2,
    viewBox: "0 -1 14 2",
    fill: "none",
    style: {
      position: "absolute",
      left: 5,
      top: 12,
      width: 14,
      height: 2,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 14 1 C 14.552 1 15 0.552 15 0 C 15 -0.552 14.552 -1 14 -1 L 14 1 Z M 0 -1 C -0.552 -1 -1 -0.552 -1 0 C -1 0.552 -0.552 1 0 1 L 0 -1 Z M 14 -1 L 0 -1 L 0 1 L 14 1 L 14 -1 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 7,
    height: 14,
    viewBox: "0 0 7 14",
    fill: "none",
    style: {
      position: "absolute",
      left: 5,
      top: 5,
      width: 7,
      height: 14,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 6.293 14.707 C 6.683 15.098 7.317 15.098 7.707 14.707 C 8.098 14.317 8.098 13.683 7.707 13.293 L 6.293 14.707 Z M 0 7 L -0.707 6.293 C -1.098 6.683 -1.098 7.317 -0.707 7.707 L 0 7 Z M 7.707 0.707 C 8.098 0.317 8.098 -0.317 7.707 -0.707 C 7.317 -1.098 6.683 -1.098 6.293 -0.707 L 7.707 0.707 Z M 7.707 13.293 L 0.707 6.293 L -0.707 7.707 L 6.293 14.707 L 7.707 13.293 Z M 0.707 7.707 L 7.707 0.707 L 6.293 -0.707 L -0.707 6.293 L 0.707 7.707 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Red Hat Display\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 16,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(255,255,255)",
      flexShrink: 0
    }
  }, props.text2 ?? "Mandar otro mensaje"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 1014,
      top: 472,
      width: 25,
      height: 31,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 25,
    height: 31,
    viewBox: "0 0 25 31",
    fill: "none",
    style: {
      position: "relative",
      width: 25,
      height: 31,
      flexShrink: 0,
      filter: "drop-shadow(0px 2px 2px rgba(0,0,0,0.2))",
      color: "rgb(230,70,242)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0 L 5.556 31 L 12.963 18.788 L 25 15.03 L 0 0 Z",
    fill: "rgb(230,70,242)",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 5.556 31 L 4.424 31.203 L 4.961 34.196 L 6.538 31.596 L 5.556 31 Z M 0 0 L 0.592 -0.985 L -1.578 -2.29 L -1.131 0.203 L 0 0 Z M 25 15.03 L 25.342 16.127 L 27.786 15.364 L 25.592 14.045 L 25 15.03 Z M 12.963 18.788 L 12.621 17.691 L 12.206 17.82 L 11.98 18.192 L 12.963 18.788 Z M 6.687 30.797 L 1.131 -0.203 L -1.131 0.203 L 4.424 31.203 L 6.687 30.797 Z M -0.592 0.985 L 24.408 16.015 L 25.592 14.045 L 0.592 -0.985 L -0.592 0.985 Z M 24.658 13.933 L 12.621 17.691 L 13.305 19.885 L 25.342 16.127 L 24.658 13.933 Z M 11.98 18.192 L 4.573 30.404 L 6.538 31.596 L 13.946 19.384 L 11.98 18.192 Z",
    fill: "rgb(255,255,255)",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 27,
      top: 37,
      borderRadius: "3px 28px 28px 28px",
      backgroundColor: "rgb(230,70,242)",
      boxShadow: "inset 0 0 0 2px rgb(172,23,224), 0px 1px 10px 0px rgba(230,70,242,0.5)",
      display: "flex",
      flexDirection: "column",
      gap: 2,
      padding: "11px 20px 11px 20px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      opacity: 0.8,
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 13,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(255,254,255)",
      flexShrink: 0
    }
  }, props.text3 ?? "Pink Pixel"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 24,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(255,254,255)",
      flexShrink: 0
    }
  }, props.text4 ?? "Hablemos pronto")))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 878,
      top: 230,
      width: 298,
      height: 210.914,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 15.809,
      top: 15.809,
      width: 134.525,
      height: 134.424,
      backgroundColor: "rgb(0,193,211)",
      boxShadow: "0px 1px 10px 0px rgba(0,193,211,0.5)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 32.513,
      top: 54.451,
      width: 100.688,
      height: 57.964,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 100.688,
      height: 15.676,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 24.162,
    height: 10.176,
    viewBox: "0 0 24.162 10.176",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "matrix(-0.971,-0.240,0.240,-0.971,98.248,15.676)",
      transformOrigin: "0 0",
      width: 24.162,
      height: 10.176,
      color: "rgb(211,255,136)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 22.879 0.686 C 21.372 -0.833 17.138 0.644 17.138 0.644 C 17.138 0.644 9.583 1.784 7.165 0.741 C 4.748 -0.302 1.546 -0.512 0.38 2.645 C -0.429 4.788 0.204 6.354 0.877 7.292 C 2.293 9.265 5.104 10.176 9.881 10.176 C 10.483 10.176 11.116 10.161 11.781 10.133 C 18.149 9.861 21.705 8.774 23.31 6.613 C 23.918 5.791 24.216 4.804 24.154 3.875 C 24.127 2.282 23.453 1.265 22.879 0.686 Z",
    fill: "currentColor",
    fillRule: "evenodd"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 22.890,
    height: 10.176,
    viewBox: "0 0 22.890 10.176",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "matrix(0.969,-0.247,-0.247,-0.969,2.512,15.514)",
      transformOrigin: "0 0",
      width: 22.89,
      height: 10.176,
      color: "rgb(211,255,136)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 21.675 0.686 C 20.247 -0.833 16.236 0.644 16.236 0.644 C 16.236 0.644 9.079 1.784 6.788 0.741 C 4.498 -0.302 1.465 -0.512 0.36 2.645 C -0.406 4.788 0.194 6.354 0.831 7.292 C 2.172 9.265 4.835 10.176 9.361 10.176 C 9.931 10.176 10.531 10.161 11.161 10.133 C 17.194 9.861 20.563 8.774 22.083 6.613 C 22.659 5.791 22.942 4.804 22.883 3.875 C 22.857 2.282 22.219 1.265 21.675 0.686 Z",
    fill: "currentColor",
    fillRule: "evenodd"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 9.349,
      top: 25.242,
      width: 82.271,
      height: 11.219,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 11.219,
    height: 11.219,
    viewBox: "0 0 11.219 11.219",
    fill: "none",
    style: {
      position: "absolute",
      left: 71.052,
      top: 0,
      width: 11.219,
      height: 11.219,
      color: "rgb(50,50,50)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 5.616 C 0 2.499 2.499 0 5.617 0 C 8.709 0 11.219 2.499 11.219 5.616 C 11.219 8.696 8.709 11.219 5.617 11.219 C 2.499 11.219 0 8.696 0 5.616",
    fill: "currentColor",
    fillRule: "evenodd"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 11.219,
    height: 11.219,
    viewBox: "0 0 11.219 11.219",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 11.219,
      height: 11.219,
      color: "rgb(50,50,50)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 5.616 C 0 2.499 2.528 0 5.623 0 C 8.716 0 11.219 2.499 11.219 5.616 C 11.219 8.696 8.716 11.219 5.623 11.219 C 2.528 11.219 0 8.696 0 5.616",
    fill: "currentColor",
    fillRule: "evenodd"
  }))), /*#__PURE__*/React.createElement("svg", {
    width: 29.917,
    height: 20.568,
    viewBox: "0 0 29.917 20.568",
    fill: "none",
    style: {
      position: "absolute",
      left: 37.396,
      top: 37.396,
      width: 29.917,
      height: 20.568,
      color: "rgb(0,86,121)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.002 1.435 C 0.002 1.435 13.644 -1.793 29.915 1.435 C 29.915 1.435 30.408 20.568 14.959 20.568 C -0.545 20.568 0.002 1.435 0.002 1.435 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("svg", {
    width: 24.591,
    height: 24.591,
    viewBox: "0 0 24.591 24.591",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 24.591,
      height: 24.591,
      color: "rgb(0,0,0)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0 L 0 24.591 L 24.591 0 L 0 0 Z",
    fill: "rgb(0,0,0)",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 0 24.591 L -1.149 24.591 L -1.149 27.365 L 0.813 25.403 L 0 24.591 Z M 0 0 L 0 -1.149 L -1.149 -1.149 L -1.149 0 L 0 0 Z M 24.591 0 L 25.403 0.813 L 27.365 -1.149 L 24.591 -1.149 L 24.591 0 Z M 1.149 24.591 L 1.149 0 L -1.149 0 L -1.149 24.591 L 1.149 24.591 Z M 0 1.149 L 24.591 1.149 L 24.591 -1.149 L 0 -1.149 L 0 1.149 Z M 23.778 -0.813 L -0.813 23.778 L 0.813 25.403 L 25.403 0.813 L 23.778 -0.813 Z",
    fill: "rgb(255,255,255)",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 140.96,
      top: 159.332,
      width: 157.04,
      height: 51.582,
      borderRadius: 12,
      backgroundColor: "rgb(0,193,211)",
      boxShadow: "0px 1px 10px 0px rgba(0,193,211,0.5)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "8px 12px 8px 12px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 24,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(255,254,255)",
      flexShrink: 0
    }
  }, "Blue Pixel"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 1091,
      top: 87,
      width: 25,
      height: 31,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 25,
    height: 31,
    viewBox: "0 0 25 31",
    fill: "none",
    style: {
      position: "relative",
      width: 25,
      height: 31,
      flexShrink: 0,
      filter: "drop-shadow(0px 2px 2px rgba(0,0,0,0.2))",
      color: "rgb(121,189,11)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0 L 5.556 31 L 12.963 18.788 L 25 15.03 L 0 0 Z",
    fill: "rgb(121,189,11)",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 5.556 31 L 4.424 31.203 L 4.961 34.196 L 6.538 31.596 L 5.556 31 Z M 0 0 L 0.592 -0.985 L -1.578 -2.29 L -1.131 0.203 L 0 0 Z M 25 15.03 L 25.342 16.127 L 27.786 15.364 L 25.592 14.045 L 25 15.03 Z M 12.963 18.788 L 12.621 17.691 L 12.206 17.82 L 11.98 18.192 L 12.963 18.788 Z M 6.687 30.797 L 1.131 -0.203 L -1.131 0.203 L 4.424 31.203 L 6.687 30.797 Z M -0.592 0.985 L 24.408 16.015 L 25.592 14.045 L 0.592 -0.985 L -0.592 0.985 Z M 24.658 13.933 L 12.621 17.691 L 13.305 19.885 L 25.342 16.127 L 24.658 13.933 Z M 11.98 18.192 L 4.573 30.404 L 6.538 31.596 L 13.946 19.384 L 11.98 18.192 Z",
    fill: "rgb(255,255,255)",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 27,
      top: 37,
      borderRadius: "3px 28px 28px 28px",
      backgroundColor: "rgb(121,189,11)",
      boxShadow: "inset 0 0 0 2px rgb(65,150,12), 0px 1px 10px 0px rgba(121,189,11,0.5)",
      display: "flex",
      flexDirection: "column",
      gap: 2,
      padding: "11px 20px 11px 20px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      opacity: 0.8,
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 13,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(255,254,255)",
      flexShrink: 0
    }
  }, "Green Pixel"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 24,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(255,254,255)",
      flexShrink: 0
    }
  }, "Gracias!!")))));
  const __impls = {
    // figma: Property 1=Default
    "property1=default": __body0,
    // figma: Property 1=Variant2
    "property1=variant2": __body1,
    // figma: Property 1=Variant3
    "property1=variant3": __body2
  };
  return (__impls[__vkey(props)] ?? __body0)();
}
Object.assign(__ds_scope, { SectionAgradecimiento, __ds_default_components_SectionAgradecimiento_1ocp7yj: SectionAgradecimiento });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/SectionAgradecimiento.jsx", error: String((e && e.message) || e) }); }

// components/SideNavBar.jsx
try { (() => {
// figma node: 101:14389 Side nav bar
function SideNavBar(_p = {}) {
  const props = _p;
  return /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 236,
      height: 928,
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 236,
      height: 928,
      opacity: 0.5,
      backgroundColor: "rgb(214,227,255)"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 24,
      top: 32,
      width: 155,
      height: 24,
      fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 24,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(30,43,71)"
    }
  }, props.text1 ?? "Settings"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 124,
      width: 236,
      height: 48,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 24,
      top: 12,
      width: 180,
      height: 24,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 180,
      height: 24,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 180,
      height: 24,
      display: "flex",
      flexDirection: "row",
      gap: 8,
      alignItems: "flex-start",
      flexWrap: "nowrap"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 159,
      display: "flex",
      flexDirection: "row",
      gap: 8,
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 16,
      lineHeight: "100%",
      color: "rgb(63,84,130)",
      flexShrink: 0,
      whiteSpace: "nowrap"
    }
  }, props.text2 ?? "Organization")))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 72,
      width: 236,
      height: 48,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 24,
      top: 12,
      width: 188,
      height: 24,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 188,
      display: "flex",
      flexDirection: "row",
      gap: 8,
      alignItems: "center",
      flexWrap: "nowrap"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 159,
      height: 24,
      display: "flex",
      flexDirection: "row",
      gap: 8,
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 16,
      lineHeight: "100%",
      color: "rgb(63,84,130)",
      flexShrink: 0,
      whiteSpace: "nowrap"
    }
  }, props.text3 ?? "My Settings"))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 424,
      width: 236,
      height: 48,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 24,
      top: 12,
      width: 188,
      height: 19,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 188,
      display: "flex",
      flexDirection: "row",
      gap: 8,
      alignItems: "center",
      flexWrap: "nowrap"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 159,
      display: "flex",
      flexDirection: "row",
      gap: 8,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 16,
      lineHeight: "100%",
      color: "rgb(63,84,130)",
      flexShrink: 0,
      whiteSpace: "nowrap"
    }
  }, props.text4 ?? "Organizational Units"))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 528,
      width: 236,
      height: 48,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 24,
      top: 12,
      width: 188,
      height: 19,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 188,
      display: "flex",
      flexDirection: "row",
      gap: 8,
      alignItems: "center",
      flexWrap: "nowrap"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 159,
      display: "flex",
      flexDirection: "row",
      gap: 8,
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      width: 127,
      fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 16,
      lineHeight: "100%",
      color: "rgb(63,84,130)",
      flexShrink: 0
    }
  }, "Job Titles"))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 476,
      width: 236,
      height: 48,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 24,
      top: 12,
      width: 188,
      height: 19,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 188,
      display: "flex",
      flexDirection: "row",
      gap: 8,
      alignItems: "center",
      flexWrap: "nowrap"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 159,
      display: "flex",
      flexDirection: "row",
      gap: 8,
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      width: 127,
      fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 16,
      lineHeight: "100%",
      color: "rgb(63,84,130)",
      flexShrink: 0
    }
  }, "General Units"))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 580,
      width: 236,
      height: 48,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 24,
      top: 12,
      width: 188,
      height: 19,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 188,
      display: "flex",
      flexDirection: "row",
      gap: 8,
      alignItems: "center",
      flexWrap: "nowrap"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 159,
      display: "flex",
      flexDirection: "row",
      gap: 8,
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      width: 127,
      fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 16,
      lineHeight: "100%",
      color: "rgb(63,84,130)",
      flexShrink: 0
    }
  }, "Users"))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 176,
      width: 236,
      height: 48,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 24,
      top: 12,
      width: 188,
      height: 24,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 188,
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      flexWrap: "nowrap"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 159,
      display: "flex",
      flexDirection: "row",
      gap: 8,
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      width: 127,
      fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 16,
      lineHeight: "100%",
      color: "rgb(63,84,130)",
      flexShrink: 0
    }
  }, "Business Units")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 24,
      height: 24,
      transform: "matrix(-1,0,0,-1,0,0)",
      flexShrink: 0,
      color: "rgb(255,255,255)"
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(__ds_scope.KeyboardArrowDownFilled, null))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 256,
      width: 236,
      height: 32,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 32,
      top: 4,
      width: 156,
      height: 24,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 156,
      height: 24,
      display: "flex",
      flexDirection: "row",
      gap: 8,
      alignItems: "center",
      flexWrap: "nowrap"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 16,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(30,43,71)",
      flexShrink: 0
    }
  }, "General"))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 224,
      width: 236,
      height: 32,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 32,
      top: 4,
      width: 156,
      height: 24,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 156,
      height: 24,
      display: "flex",
      flexDirection: "row",
      gap: 8,
      alignItems: "center",
      flexWrap: "nowrap"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 16,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(30,43,71)",
      flexShrink: 0
    }
  }, "View All"))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 288,
      width: 236,
      height: 32,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 32,
      top: 4,
      width: 156,
      height: 24,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 156,
      height: 24,
      display: "flex",
      flexDirection: "row",
      gap: 8,
      alignItems: "center",
      flexWrap: "nowrap"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 16,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(30,43,71)",
      flexShrink: 0
    }
  }, "Branding"))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 320,
      width: 236,
      height: 32,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 32,
      top: 4,
      width: 156,
      height: 24,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 156,
      height: 24,
      display: "flex",
      flexDirection: "row",
      gap: 8,
      alignItems: "center",
      flexWrap: "nowrap"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 16,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(30,43,71)",
      flexShrink: 0
    }
  }, "Calendars"))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 352,
      width: 236,
      height: 32,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 32,
      top: 4,
      width: 156,
      height: 24,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 156,
      height: 24,
      display: "flex",
      flexDirection: "row",
      gap: 8,
      alignItems: "center",
      flexWrap: "nowrap"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 16,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(30,43,71)",
      flexShrink: 0
    }
  }, "Products"))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 388,
      width: 236,
      height: 32,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 32,
      top: 4,
      width: 156,
      height: 24,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 156,
      height: 24,
      display: "flex",
      flexDirection: "row",
      gap: 8,
      alignItems: "center",
      flexWrap: "nowrap"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 16,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(30,43,71)",
      flexShrink: 0
    }
  }, "Related Users"))))));
}
Object.assign(__ds_scope, { SideNavBar, __ds_default_components_SideNavBar_tv45cp: SideNavBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/SideNavBar.jsx", error: String((e && e.message) || e) }); }

// components/Speaker.jsx
try { (() => {
// figma node: 101:125 Speaker
function Speaker(_p = {}) {
  const props = _p;
  return /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 77,
      height: 6,
      position: "relative",
      color: "rgb(38,44,45)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 77,
    height: 6,
    viewBox: "0 0 77 6",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 77,
      height: 6,
      borderRadius: 100
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 3 C 0 1.343 1.343 0 3 0 L 74 0 C 75.657 0 77 1.343 77 3 L 77 3 C 77 4.657 75.657 6 74 6 L 3 6 C 1.343 6 0 4.657 0 3 L 0 3 Z",
    fill: "currentColor",
    fillRule: "evenodd"
  })));
}
Object.assign(__ds_scope, { Speaker, __ds_default_components_Speaker_1du5kx1: Speaker });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/Speaker.jsx", error: String((e && e.message) || e) }); }

// components/DevicesAppleIPhone12ProMax.jsx
try { (() => {
// figma node: 101:100 Devices / Apple / iPhone 12 Pro Max
function DevicesAppleIPhone12ProMax(_p = {}) {
  const props = _p;
  return /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 423,
      height: 858,
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 165,
      width: 423,
      height: 188,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 3,
    height: 93,
    viewBox: "0 0 3 93",
    fill: "none",
    style: {
      position: "absolute",
      left: 420,
      top: 75,
      width: 3,
      height: 93,
      color: "rgb(33,55,68)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0 L 1.5 0 C 2.328 0 3 0.672 3 1.5 L 3 91.5 C 3 92.328 2.328 93 1.5 93 L 0 93 L 0 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 3,
    height: 59,
    viewBox: "0 0 3 59",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "matrix(-1,0,0,-1,3,188)",
      transformOrigin: "0 0",
      width: 3,
      height: 59,
      color: "rgb(33,55,68)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0 L 1.5 0 C 2.328 0 3 0.672 3 1.5 L 3 57.5 C 3 58.328 2.328 59 1.5 59 L 0 59 L 0 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 3,
    height: 59,
    viewBox: "0 0 3 59",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "matrix(-1,0,0,-1,3,113)",
      transformOrigin: "0 0",
      width: 3,
      height: 59,
      color: "rgb(33,55,68)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0 L 1.5 0 C 2.328 0 3 0.672 3 1.5 L 3 57.5 C 3 58.328 2.328 59 1.5 59 L 0 59 L 0 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 3,
    height: 28,
    viewBox: "0 0 3 28",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "matrix(-1,0,0,-1,3,28)",
      transformOrigin: "0 0",
      width: 3,
      height: 28,
      color: "rgb(33,55,68)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0 L 1.5 0 C 2.328 0 3 0.672 3 1.5 L 3 26.5 C 3 27.328 2.328 28 1.5 28 L 0 28 L 0 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("svg", {
    width: 417,
    height: 858,
    viewBox: "0 0 417 858",
    fill: "none",
    style: {
      position: "absolute",
      left: 3,
      top: 0,
      width: 417,
      height: 858,
      color: "rgb(33,55,68)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 91 C 0 66.803 0 54.705 3.181 44.914 C 9.611 25.125 25.125 9.611 44.914 3.181 C 54.705 0 66.803 0 91 0 L 326 0 C 350.197 0 362.295 0 372.086 3.181 C 391.875 9.611 407.389 25.125 413.819 44.914 C 417 54.705 417 66.803 417 91 L 417 767 C 417 791.197 417 803.295 413.819 813.086 C 407.389 832.875 391.875 848.389 372.086 854.819 C 362.295 858 350.197 858 326 858 L 91 858 C 66.803 858 54.705 858 44.914 854.819 C 25.125 848.389 9.611 832.875 3.181 813.086 C 0 803.295 0 791.197 0 767 L 0 91 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 415,
    height: 856,
    viewBox: "0 0 415 856",
    fill: "none",
    style: {
      position: "absolute",
      left: 4,
      top: 1,
      width: 415,
      height: 856,
      color: "rgb(142,173,193)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 325.4 1 L 89.6 1 C 65.698 1 53.984 1.012 44.532 4.083 C 25.352 10.315 10.315 25.352 4.083 44.532 C 1.012 53.984 1 65.698 1 89.6 L 1 766.4 C 1 790.302 1.012 802.016 4.083 811.468 C 10.315 830.648 25.352 845.685 44.532 851.917 C 53.984 854.988 65.698 855 89.6 855 L 325.4 855 C 349.302 855 361.016 854.988 370.468 851.917 C 389.648 845.685 404.685 830.648 410.917 811.468 C 413.988 802.016 414 790.302 414 766.4 L 414 89.6 C 414 65.698 413.988 53.984 410.917 44.532 C 404.685 25.352 389.648 10.315 370.468 4.083 C 361.016 1.012 349.302 1 325.4 1 Z M 3.132 44.223 C 0 53.863 0 65.776 0 89.6 L 0 766.4 C 0 790.224 0 802.137 3.132 811.777 C 9.463 831.261 24.739 846.537 44.223 852.868 C 53.863 856 65.776 856 89.6 856 L 325.4 856 C 349.224 856 361.137 856 370.777 852.868 C 390.261 846.537 405.537 831.261 411.868 811.777 C 415 802.137 415 790.224 415 766.4 L 415 89.6 C 415 65.776 415 53.863 411.868 44.223 C 405.537 24.739 390.261 9.463 370.777 3.132 C 361.137 0 349.224 0 325.4 0 L 89.6 0 C 65.776 0 53.863 0 44.223 3.132 C 24.739 9.463 9.463 24.739 3.132 44.223 Z",
    fill: "currentColor",
    fillRule: "evenodd"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 407,
    height: 848,
    viewBox: "0 0 407 848",
    fill: "none",
    style: {
      position: "absolute",
      left: 8,
      top: 5,
      width: 407,
      height: 848,
      color: "rgb(18,21,21)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 84 C 0 61.665 0 50.497 2.937 41.459 C 8.872 23.193 23.193 8.872 41.459 2.937 C 50.497 0 61.665 0 84 0 L 323 0 C 345.335 0 356.503 0 365.541 2.937 C 383.807 8.872 398.128 23.193 404.063 41.459 C 407 50.497 407 61.665 407 84 L 407 764 C 407 786.335 407 797.503 404.063 806.541 C 398.128 824.807 383.807 839.128 365.541 845.063 C 356.503 848 345.335 848 323 848 L 84 848 C 61.665 848 50.497 848 41.459 845.063 C 23.193 839.128 8.872 824.807 2.937 806.541 C 0 797.503 0 786.335 0 764 L 0 84 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 3,
      top: 0,
      width: 417,
      height: 858,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 6,
    height: 5,
    viewBox: "0 0 6 5",
    fill: "none",
    style: {
      position: "absolute",
      left: 328,
      top: 0,
      width: 6,
      height: 5,
      color: "rgb(54,69,76)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0 L 6 0 L 6 5 L 0 5 L 0 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 5,
    height: 6,
    viewBox: "0 0 5 6",
    fill: "none",
    style: {
      position: "absolute",
      left: 412,
      top: 86,
      width: 5,
      height: 6,
      color: "rgb(54,69,76)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0 L 5 0 L 5 6 L 0 6 L 0 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 5,
    height: 6,
    viewBox: "0 0 5 6",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 86,
      width: 5,
      height: 6,
      color: "rgb(54,69,76)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0 L 5 0 L 5 6 L 0 6 L 0 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 5,
    height: 6,
    viewBox: "0 0 5 6",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 766,
      width: 5,
      height: 6,
      color: "rgb(54,69,76)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0 L 5 0 L 5 6 L 0 6 L 0 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 5,
    height: 6,
    viewBox: "0 0 5 6",
    fill: "none",
    style: {
      position: "absolute",
      left: 412,
      top: 766,
      width: 5,
      height: 6,
      color: "rgb(54,69,76)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0 L 5 0 L 5 6 L 0 6 L 0 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 6,
    height: 5,
    viewBox: "0 0 6 5",
    fill: "none",
    style: {
      position: "absolute",
      left: 83,
      top: 853,
      width: 6,
      height: 5,
      color: "rgb(54,69,76)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0 L 6 0 L 6 5 L 0 5 L 0 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 22,
      top: 19,
      width: 379,
      height: 820,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 379,
      height: 820,
      clipPath: "inset(0px 0px 0px 0px)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "fig-asset-bd345757f0eba7a6",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 379,
      height: 820
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 243,
      top: 23,
      width: 14,
      height: 14
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(__ds_scope.Camera, {
    style: {
      transform: "scale(0.875, 0.875)",
      transformOrigin: "0 0"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 190,
      top: 27,
      width: 43,
      height: 6
    }
  }, props.icon2 ?? /*#__PURE__*/React.createElement(__ds_scope.Speaker, {
    style: {
      transform: "scale(0.558, 1)",
      transformOrigin: "0 0"
    }
  })));
}
Object.assign(__ds_scope, { DevicesAppleIPhone12ProMax, __ds_default_components_DevicesAppleIPhone12ProMax_34ewcs: DevicesAppleIPhone12ProMax });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/DevicesAppleIPhone12ProMax.jsx", error: String((e && e.message) || e) }); }

// components/Star.jsx
try { (() => {
// figma node: 101:14341 Star
function Star(_p = {}) {
  const props = _p;
  return /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      overflow: "hidden",
      position: "relative",
      color: "rgba(0,0,0,0.54)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 20,
    height: 19,
    viewBox: "0 0 20 19",
    fill: "none",
    style: {
      position: "absolute",
      left: 2,
      top: 2,
      width: 20,
      height: 19
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 10 15.27 L 16.18 19 L 14.54 11.97 L 20 7.24 L 12.81 6.63 L 10 0 L 7.19 6.63 L 0 7.24 L 5.46 11.97 L 3.82 19 L 10 15.27 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
}
Object.assign(__ds_scope, { Star, __ds_default_components_Star_182gnp0: Star });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/Star.jsx", error: String((e && e.message) || e) }); }

// components/Icon.jsx
try { (() => {
// figma node: 101:14334 Icon (3 variants)
const __venc = v => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = p => "size=" + __venc(p.size);
function Icon(_p = {}) {
  const props = {
    ..._p,
    size: _p.size ?? "md"
  };
  const __body0 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 24,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(__ds_scope.Star, null)));
  const __body1 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 35,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(__ds_scope.Star, null)));
  const __body2 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 20,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(__ds_scope.Star, null)));
  const __impls = {
    // figma: Size=Medium
    "size=md": __body0,
    // figma: Size=Large
    "size=lg": __body1,
    // figma: Size=Small
    "size=sm": __body2
  };
  return (__impls[__vkey(props)] ?? __body0)();
}
Object.assign(__ds_scope, { Icon, __ds_default_components_Icon_1828kgz: Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/Icon.jsx", error: String((e && e.message) || e) }); }

// components/Avatar.jsx
try { (() => {
// figma node: 101:14273 Avatar (18 variants)
const __venc = v => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = p => "variant=" + __venc(p.variant) + '|' + "badge=" + __venc(p.badge) + '|' + "icon=" + __venc(p.icon) + '|' + "image=" + __venc(p.image);
function Avatar(_p = {}) {
  const props = {
    ..._p,
    variant: _p.variant ?? "circle",
    badge: _p.badge ?? false,
    icon: _p.icon ?? false,
    image: _p.image ?? false
  };
  const __body0 = () => /*#__PURE__*/React.createElement("div", {
    className: "fig-asset-2e5f78f44b20ef67 " + (props.className || ''),
    style: {
      width: 40,
      height: 40,
      borderRadius: 64,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style
    }
  });
  const __body1 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
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
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
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
      alignSelf: "stretch"
    }
  }, props.text1 ?? "OP"));
  const __body2 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
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
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    size: "md"
  })));
  const __body3 = () => /*#__PURE__*/React.createElement("div", {
    className: "fig-asset-2e5f78f44b20ef67 " + (props.className || ''),
    style: {
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
      ...props.style
    }
  });
  const __body4 = () => /*#__PURE__*/React.createElement("div", {
    className: "fig-asset-2e5f78f44b20ef67 " + (props.className || ''),
    style: {
      width: 40,
      height: 40,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style
    }
  });
  const __body5 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
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
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
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
      alignSelf: "stretch"
    }
  }, props.text1 ?? "OP"));
  const __body6 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
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
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
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
      alignSelf: "stretch"
    }
  }, props.text1 ?? "OP"));
  const __body7 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
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
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    size: "md"
  })));
  const __body8 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
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
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    size: "md"
  })));
  const __body9 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
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
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      flexGrow: 1,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 40,
      height: 40
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(Avatar, {
    variant: "circle",
    badge: false,
    icon: false,
    image: true
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 28,
      top: 28,
      width: 12,
      height: 12,
      borderRadius: 64,
      backgroundColor: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 2,
      top: 2.001,
      width: 8,
      height: 8
    }
  }, props.icon2 ?? /*#__PURE__*/React.createElement(__ds_scope.Badge, {
    variant: "dot",
    color: "primary"
  })))));
  const __body10 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
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
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      flexGrow: 1,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 40,
      height: 40
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(Avatar, {
    variant: "square",
    badge: false,
    icon: false,
    image: true
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 32,
      top: 32,
      width: 12,
      height: 12,
      borderRadius: 64,
      backgroundColor: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 2,
      top: 2.001,
      width: 8,
      height: 8
    }
  }, props.icon2 ?? /*#__PURE__*/React.createElement(__ds_scope.Badge, {
    variant: "dot",
    color: "primary"
  })))));
  const __body11 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
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
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      flexGrow: 1,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 40,
      height: 40
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(Avatar, {
    variant: "rounded",
    badge: false,
    icon: false,
    image: true
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 32,
      top: 32,
      width: 12,
      height: 12,
      borderRadius: 64,
      backgroundColor: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 2,
      top: 2.001,
      width: 8,
      height: 8
    }
  }, props.icon2 ?? /*#__PURE__*/React.createElement(__ds_scope.Badge, {
    variant: "dot",
    color: "primary"
  })))));
  const __body12 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
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
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      flexGrow: 1,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 40,
      height: 40
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(Avatar, {
    variant: "circle",
    badge: false,
    icon: false,
    image: false
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 28,
      top: 28,
      width: 12,
      height: 12,
      borderRadius: 64,
      backgroundColor: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 2,
      top: 2.001,
      width: 8,
      height: 8
    }
  }, props.icon2 ?? /*#__PURE__*/React.createElement(__ds_scope.Badge, {
    variant: "dot",
    color: "primary"
  })))));
  const __body13 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
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
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      flexGrow: 1,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 40,
      height: 40
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(Avatar, {
    variant: "square",
    badge: false,
    icon: false,
    image: false
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 32,
      top: 32,
      width: 12,
      height: 12,
      borderRadius: 64,
      backgroundColor: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 2,
      top: 2.001,
      width: 8,
      height: 8
    }
  }, props.icon2 ?? /*#__PURE__*/React.createElement(__ds_scope.Badge, {
    variant: "dot",
    color: "primary"
  })))));
  const __body14 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
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
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      flexGrow: 1,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 40,
      height: 40
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(Avatar, {
    variant: "rounded",
    badge: false,
    icon: false,
    image: false
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 32,
      top: 32,
      width: 12,
      height: 12,
      borderRadius: 64,
      backgroundColor: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 2,
      top: 2.001,
      width: 8,
      height: 8
    }
  }, props.icon2 ?? /*#__PURE__*/React.createElement(__ds_scope.Badge, {
    variant: "dot",
    color: "primary"
  })))));
  const __body15 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
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
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      flexGrow: 1,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 40,
      height: 40
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(Avatar, {
    variant: "circle",
    badge: false,
    icon: true,
    image: false
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 28,
      top: 28,
      width: 12,
      height: 12,
      borderRadius: 64,
      backgroundColor: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 2,
      top: 2.001,
      width: 8,
      height: 8
    }
  }, props.icon2 ?? /*#__PURE__*/React.createElement(__ds_scope.Badge, {
    variant: "dot",
    color: "primary"
  })))));
  const __body16 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
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
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      flexGrow: 1,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 40,
      height: 40
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(Avatar, {
    variant: "square",
    badge: false,
    icon: true,
    image: false
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 32,
      top: 32,
      width: 12,
      height: 12,
      borderRadius: 64,
      backgroundColor: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 2,
      top: 2.001,
      width: 8,
      height: 8
    }
  }, props.icon2 ?? /*#__PURE__*/React.createElement(__ds_scope.Badge, {
    variant: "dot",
    color: "primary"
  })))));
  const __body17 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
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
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      flexGrow: 1,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 40,
      height: 40
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(Avatar, {
    variant: "rounded",
    badge: false,
    icon: true,
    image: false
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 32,
      top: 32,
      width: 12,
      height: 12,
      borderRadius: 64,
      backgroundColor: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 2,
      top: 2.001,
      width: 8,
      height: 8
    }
  }, props.icon2 ?? /*#__PURE__*/React.createElement(__ds_scope.Badge, {
    variant: "dot",
    color: "primary"
  })))));
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
    "variant=rounded|badge=true|icon=true|image=false": __body17
  };
  return (__impls[__vkey(props)] ?? __body1)();
}
Object.assign(__ds_scope, { Avatar, __ds_default_components_Avatar_x0w55l: Avatar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/Avatar.jsx", error: String((e && e.message) || e) }); }

// components/ValueFaster.jsx
try { (() => {
// figma node: 1615:138 value-faster
function ValueFaster(_p = {}) {
  const props = _p;
  return /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 100,
      height: 100,
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "fig-asset-3b312b5b966e925b",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 100,
      height: 100
    }
  }));
}
Object.assign(__ds_scope, { ValueFaster, __ds_default_components_ValueFaster_r4kvzw: ValueFaster });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/ValueFaster.jsx", error: String((e && e.message) || e) }); }

// components/Value.jsx
try { (() => {
// figma node: 1615:151 Value (2 variants)
const __venc = v => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = p => "property1=" + __venc(p.property1);
function Value(_p = {}) {
  const props = {
    ..._p,
    property1: _p.property1 ?? "default"
  };
  const __body0 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
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
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 44,
      height: 44,
      flexShrink: 0
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(__ds_scope.ValueFaster, {
    style: {
      transform: "scale(0.440, 0.440)",
      transformOrigin: "0 0"
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Red Hat Display\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 24,
      lineHeight: "100%",
      color: "rgb(33,37,41)",
      flexShrink: 0,
      alignSelf: "stretch",
      whiteSpace: "nowrap"
    }
  }, props.text1 ?? "We elevate each other"));
  const __body1 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
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
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 44,
      height: 44,
      flexShrink: 0
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(__ds_scope.ValueFaster, {
    style: {
      transform: "scale(0.440, 0.440)",
      transformOrigin: "0 0"
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Red Hat Display\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 24,
      lineHeight: "100%",
      color: "rgb(255,255,255)",
      flexShrink: 0,
      alignSelf: "stretch",
      whiteSpace: "nowrap"
    }
  }, props.text1 ?? "We elevate each other"));
  const __impls = {
    // figma: Property 1=Default
    "property1=default": __body0,
    // figma: Property 1=Hover
    "property1=hover": __body1
  };
  return (__impls[__vkey(props)] ?? __body0)();
}
Object.assign(__ds_scope, { Value, __ds_default_components_Value_xoqi53: Value });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/Value.jsx", error: String((e && e.message) || e) }); }

// components/Wow.jsx
try { (() => {
// figma node: 334:6362 Wow
function Wow(_p = {}) {
  const props = _p;
  return /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 180,
      height: 177.91,
      overflow: "hidden",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: -0.024,
      top: 0.003,
      width: 180.024,
      height: 177.904,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 180.024,
      height: 177.904,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 171.137,
    height: 171.138,
    viewBox: "0 0 171.137 171.138",
    fill: "none",
    style: {
      position: "absolute",
      left: 8.887,
      top: 6.766,
      width: 171.137,
      height: 171.138,
      color: "rgb(0,0,0)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 171.137 85.571 C 171.145 87.399 170.72 89.204 169.898 90.837 C 169.076 92.471 167.88 93.887 166.407 94.971 L 149.707 107.321 C 148.44 108.25 147.452 109.508 146.849 110.959 C 146.246 112.409 146.052 113.997 146.287 115.551 L 149.367 136.101 C 149.633 137.902 149.475 139.74 148.905 141.469 C 148.335 143.198 147.369 144.771 146.084 146.06 C 144.799 147.35 143.231 148.322 141.504 148.898 C 139.777 149.475 137.939 149.64 136.137 149.381 L 115.587 146.301 C 114.036 146.066 112.451 146.26 111.002 146.861 C 109.554 147.462 108.297 148.447 107.367 149.711 L 94.997 166.411 C 93.91 167.877 92.494 169.068 90.863 169.889 C 89.233 170.71 87.433 171.138 85.607 171.138 C 83.781 171.138 81.981 170.71 80.351 169.889 C 78.72 169.068 77.304 167.877 76.217 166.411 L 63.867 149.711 C 62.935 148.447 61.676 147.462 60.226 146.862 C 58.776 146.261 57.189 146.067 55.637 146.301 L 35.037 149.381 C 33.231 149.647 31.389 149.486 29.656 148.913 C 27.924 148.34 26.349 147.369 25.059 146.079 C 23.768 144.788 22.798 143.214 22.224 141.481 C 21.651 139.749 21.491 137.906 21.757 136.101 L 24.837 115.551 C 25.073 113.998 24.88 112.411 24.279 110.96 C 23.678 109.51 22.692 108.251 21.427 107.321 L 4.727 94.971 C 3.261 93.883 2.069 92.468 1.248 90.837 C 0.428 89.206 0 87.406 0 85.581 C 0 83.755 0.428 81.955 1.248 80.324 C 2.069 78.694 3.261 77.278 4.727 76.191 L 21.427 63.821 C 22.692 62.892 23.678 61.636 24.279 60.187 C 24.881 58.738 25.073 57.151 24.837 55.601 L 21.757 35.051 C 21.489 33.245 21.647 31.401 22.22 29.668 C 22.793 27.934 23.763 26.359 25.054 25.068 C 26.345 23.777 27.92 22.806 29.654 22.234 C 31.388 21.661 33.231 21.502 35.037 21.771 L 55.587 24.851 C 57.14 25.086 58.728 24.891 60.179 24.288 C 61.63 23.685 62.888 22.697 63.817 21.431 L 76.137 4.741 C 77.222 3.271 78.637 2.076 80.268 1.252 C 81.898 0.429 83.7 0 85.527 0 C 87.354 0 89.155 0.429 90.786 1.252 C 92.417 2.076 93.832 3.271 94.917 4.741 L 107.317 21.431 C 108.245 22.696 109.501 23.684 110.95 24.287 C 112.399 24.89 113.985 25.085 115.537 24.851 L 136.137 21.771 C 137.943 21.502 139.786 21.661 141.52 22.234 C 143.253 22.806 144.829 23.777 146.12 25.068 C 147.411 26.359 148.381 27.934 148.954 29.668 C 149.526 31.401 149.685 33.245 149.417 35.051 L 146.337 55.601 C 146.103 57.152 146.298 58.739 146.9 60.188 C 147.503 61.637 148.491 62.893 149.757 63.821 L 166.407 76.231 C 167.874 77.306 169.067 78.712 169.889 80.335 C 170.711 81.958 171.138 83.752 171.137 85.571 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 168.108,
    height: 168.108,
    viewBox: "0 0 168.108 168.108",
    fill: "none",
    style: {
      position: "absolute",
      left: 1.537,
      top: 1.51,
      width: 168.108,
      height: 168.108,
      color: "rgb(242,78,30)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 92.227 4.127 L 104.587 20.827 C 105.685 22.308 107.165 23.462 108.868 24.166 C 110.572 24.871 112.434 25.099 114.257 24.827 L 134.807 21.747 C 136.379 21.512 137.984 21.649 139.494 22.147 C 141.003 22.645 142.374 23.49 143.498 24.614 C 144.621 25.739 145.465 27.111 145.962 28.621 C 146.458 30.13 146.594 31.736 146.357 33.307 L 143.287 53.867 C 143.012 55.69 143.239 57.554 143.943 59.258 C 144.648 60.962 145.804 62.441 147.287 63.537 L 163.987 75.887 C 165.265 76.832 166.304 78.063 167.019 79.482 C 167.735 80.901 168.108 82.468 168.108 84.057 C 168.108 85.646 167.735 87.213 167.019 88.632 C 166.304 90.051 165.265 91.283 163.987 92.227 L 147.287 104.587 C 145.804 105.683 144.648 107.162 143.943 108.866 C 143.239 110.57 143.012 112.434 143.287 114.257 L 146.357 134.807 C 146.594 136.379 146.458 137.984 145.962 139.494 C 145.465 141.004 144.621 142.376 143.498 143.5 C 142.374 144.624 141.003 145.47 139.494 145.968 C 137.984 146.465 136.379 146.602 134.807 146.367 L 114.257 143.287 C 112.434 143.011 110.57 143.237 108.866 143.942 C 107.162 144.647 105.682 145.803 104.587 147.287 L 92.227 163.987 C 91.283 165.265 90.051 166.304 88.632 167.019 C 87.213 167.735 85.646 168.108 84.057 168.108 C 82.468 168.108 80.901 167.735 79.482 167.019 C 78.063 166.304 76.832 165.265 75.887 163.987 L 63.537 147.287 C 62.44 145.803 60.959 144.647 59.253 143.942 C 57.547 143.237 55.682 143.011 53.857 143.287 L 33.317 146.367 C 31.745 146.602 30.14 146.465 28.63 145.967 C 27.12 145.469 25.749 144.624 24.625 143.5 C 23.5 142.376 22.656 141.004 22.158 139.494 C 21.66 137.985 21.523 136.379 21.757 134.807 L 24.837 114.257 C 25.108 112.434 24.879 110.572 24.175 108.869 C 23.47 107.166 22.317 105.686 20.837 104.587 L 4.127 92.227 C 2.847 91.284 1.807 90.053 1.09 88.634 C 0.373 87.215 0 85.647 0 84.057 C 0 82.467 0.373 80.9 1.09 79.481 C 1.807 78.061 2.847 76.831 4.127 75.887 L 20.827 63.537 C 22.306 62.438 23.459 60.958 24.163 59.255 C 24.868 57.552 25.097 55.69 24.827 53.867 L 21.757 33.317 C 21.523 31.745 21.66 30.14 22.158 28.63 C 22.656 27.12 23.5 25.749 24.625 24.625 C 25.749 23.5 27.12 22.656 28.63 22.158 C 30.14 21.66 31.745 21.523 33.317 21.757 L 53.857 24.837 C 55.682 25.109 57.546 24.881 59.25 24.176 C 60.955 23.472 62.437 22.318 63.537 20.837 L 75.887 4.127 C 76.831 2.847 78.061 1.807 79.481 1.09 C 80.9 0.373 82.467 0 84.057 0 C 85.647 0 87.215 0.373 88.634 1.09 C 90.053 1.807 91.284 2.847 92.227 4.127 L 92.227 4.127 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 97.206,
    height: 43.507,
    viewBox: "0 0 97.206 43.507",
    fill: "none",
    style: {
      position: "absolute",
      left: 36.986,
      top: 107.497,
      width: 97.206,
      height: 43.507,
      color: "rgb(199,185,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 97.118 17.58 C 97.303 18.804 97.197 20.055 96.81 21.231 C 96.423 22.407 95.765 23.476 94.89 24.351 C 94.014 25.227 92.945 25.885 91.769 26.272 C 90.593 26.659 89.343 26.764 88.118 26.58 L 72.118 24.19 C 70.698 23.975 69.245 24.15 67.916 24.698 C 66.588 25.246 65.434 26.146 64.578 27.3 L 54.958 40.3 C 54.224 41.295 53.266 42.103 52.162 42.66 C 51.059 43.217 49.84 43.507 48.603 43.507 C 47.367 43.507 46.148 43.217 45.044 42.66 C 43.94 42.103 42.983 41.295 42.248 40.3 L 32.628 27.3 C 31.772 26.146 30.618 25.248 29.289 24.7 C 27.961 24.152 26.509 23.976 25.088 24.19 L 9.088 26.58 C 7.864 26.764 6.613 26.659 5.437 26.272 C 4.261 25.885 3.192 25.227 2.317 24.351 C 1.441 23.476 0.784 22.407 0.396 21.231 C 0.009 20.055 -0.096 18.804 0.088 17.58 L 2.478 1.58 C 2.565 1.058 2.591 0.528 2.558 0 C 3.427 0.109 4.302 0.162 5.178 0.16 L 15.388 0.16 L 14.538 5.82 C 14.41 6.678 14.485 7.555 14.756 8.379 C 15.028 9.203 15.489 9.952 16.103 10.566 C 16.716 11.179 17.465 11.64 18.289 11.912 C 19.114 12.184 19.99 12.258 20.848 12.13 L 32.088 10.5 C 33.086 10.351 34.105 10.476 35.037 10.862 C 35.969 11.248 36.778 11.88 37.378 12.69 L 44.138 21.83 C 44.657 22.527 45.331 23.093 46.107 23.483 C 46.883 23.874 47.74 24.077 48.608 24.077 C 49.477 24.077 50.334 23.874 51.11 23.483 C 51.886 23.093 52.56 22.527 53.078 21.83 L 59.838 12.69 C 60.438 11.88 61.248 11.248 62.18 10.862 C 63.112 10.476 64.131 10.351 65.128 10.5 L 76.358 12.18 C 77.217 12.31 78.095 12.237 78.92 11.966 C 79.746 11.695 80.496 11.234 81.111 10.62 C 81.726 10.006 82.188 9.257 82.46 8.432 C 82.732 7.607 82.807 6.729 82.678 5.87 L 81.828 0.21 L 92.038 0.21 C 92.917 0.212 93.796 0.159 94.668 0.05 C 94.637 0.578 94.66 1.107 94.738 1.63 L 97.118 17.58 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 97.210,
    height: 43.507,
    viewBox: "0 0 97.210 43.507",
    fill: "none",
    style: {
      position: "absolute",
      left: 37.004,
      top: 20.12,
      width: 97.21,
      height: 43.507,
      color: "rgb(199,185,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.09 25.937 C -0.096 24.712 0.008 23.461 0.394 22.284 C 0.78 21.107 1.438 20.037 2.314 19.161 C 3.19 18.285 4.26 17.627 5.437 17.241 C 6.614 16.854 7.865 16.75 9.09 16.937 L 25.09 19.327 C 26.512 19.539 27.964 19.361 29.292 18.811 C 30.62 18.262 31.774 17.362 32.63 16.207 L 42.25 3.207 C 42.985 2.212 43.942 1.404 45.046 0.847 C 46.15 0.29 47.369 0 48.605 0 C 49.842 0 51.061 0.29 52.164 0.847 C 53.268 1.404 54.226 2.212 54.96 3.207 L 64.58 16.207 C 65.435 17.363 66.588 18.265 67.917 18.814 C 69.245 19.364 70.698 19.541 72.12 19.327 L 88.12 16.937 C 89.345 16.75 90.596 16.854 91.774 17.241 C 92.951 17.627 94.02 18.285 94.896 19.161 C 95.773 20.037 96.43 21.107 96.817 22.284 C 97.203 23.461 97.307 24.712 97.12 25.937 L 94.72 41.937 C 94.642 42.457 94.619 42.983 94.65 43.507 C 93.778 43.398 92.899 43.345 92.02 43.347 L 81.82 43.347 L 82.66 37.707 C 82.79 36.847 82.717 35.968 82.445 35.141 C 82.174 34.315 81.712 33.563 81.097 32.947 C 80.483 32.332 79.732 31.869 78.906 31.596 C 78.079 31.323 77.201 31.248 76.34 31.377 L 65.11 33.057 C 64.113 33.211 63.094 33.089 62.161 32.704 C 61.229 32.32 60.419 31.688 59.82 30.877 L 53.02 21.747 C 52.504 21.046 51.831 20.477 51.055 20.084 C 50.278 19.691 49.42 19.487 48.55 19.487 C 47.68 19.487 46.822 19.691 46.046 20.084 C 45.269 20.477 44.596 21.046 44.08 21.747 L 37.36 30.877 C 36.761 31.688 35.951 32.32 35.019 32.704 C 34.087 33.089 33.067 33.211 32.07 33.057 L 20.83 31.377 C 19.97 31.25 19.093 31.326 18.268 31.6 C 17.443 31.873 16.694 32.337 16.08 32.952 C 15.467 33.568 15.006 34.318 14.735 35.144 C 14.464 35.97 14.39 36.848 14.52 37.707 L 15.36 43.347 L 5.18 43.347 C 4.304 43.345 3.429 43.398 2.56 43.507 C 2.593 42.982 2.566 42.456 2.48 41.937 L 0.09 25.937 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 131.030,
    height: 91.927,
    viewBox: "0 0 131.030 91.927",
    fill: "none",
    style: {
      position: "absolute",
      left: 20.084,
      top: 39.607,
      width: 131.03,
      height: 91.927,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 131.03 45.96 C 131.027 51.821 128.698 57.441 124.554 61.585 C 120.41 65.728 114.79 68.058 108.93 68.06 L 98.73 68.06 L 99.58 73.72 C 99.711 74.579 99.637 75.456 99.367 76.282 C 99.096 77.107 98.634 77.857 98.02 78.471 C 97.406 79.085 96.656 79.546 95.831 79.817 C 95.006 80.088 94.129 80.161 93.27 80.03 L 82.03 78.39 C 81.033 78.242 80.014 78.368 79.082 78.754 C 78.15 79.139 77.341 79.771 76.74 80.58 L 69.94 89.68 C 69.422 90.377 68.748 90.944 67.971 91.334 C 67.195 91.724 66.339 91.927 65.47 91.927 C 64.601 91.927 63.745 91.724 62.969 91.334 C 62.192 90.944 61.518 90.377 61 89.68 L 54.25 80.54 C 53.648 79.745 52.843 79.125 51.919 78.747 C 50.996 78.369 49.987 78.246 49 78.39 L 37.76 80.07 C 36.901 80.201 36.024 80.128 35.199 79.857 C 34.374 79.586 33.624 79.125 33.01 78.511 C 32.396 77.897 31.934 77.147 31.663 76.322 C 31.393 75.496 31.319 74.619 31.45 73.76 L 32.3 68.1 L 22.1 68.1 C 16.239 68.1 10.617 65.772 6.473 61.627 C 2.328 57.483 0 51.862 0 46 C 0 40.139 2.328 34.518 6.473 30.373 C 10.617 26.229 16.239 23.9 22.1 23.9 L 32.29 23.9 L 31.45 18.26 C 31.318 17.401 31.39 16.522 31.66 15.695 C 31.93 14.868 32.391 14.117 33.005 13.501 C 33.619 12.885 34.37 12.422 35.195 12.149 C 36.021 11.876 36.9 11.801 37.76 11.93 L 49 13.61 C 50 13.758 51.022 13.63 51.955 13.238 C 52.887 12.847 53.695 12.208 54.29 11.39 L 61.04 2.26 C 61.556 1.56 62.229 0.99 63.005 0.597 C 63.782 0.205 64.64 0 65.51 0 C 66.38 0 67.238 0.205 68.015 0.597 C 68.791 0.99 69.464 1.56 69.98 2.26 L 76.74 11.39 C 77.34 12.201 78.15 12.832 79.082 13.216 C 80.014 13.6 81.033 13.723 82.03 13.57 L 93.27 11.89 C 94.13 11.761 95.009 11.836 95.835 12.109 C 96.66 12.382 97.411 12.845 98.025 13.461 C 98.639 14.077 99.1 14.828 99.37 15.655 C 99.64 16.482 99.712 17.361 99.58 18.22 L 98.74 23.86 L 108.94 23.86 C 114.799 23.866 120.416 26.196 124.558 30.34 C 128.699 34.483 131.027 40.102 131.03 45.96 L 131.03 45.96 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 171.175,
    height: 171.148,
    viewBox: "0 0 171.175 171.148",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 171.175,
      height: 171.148,
      color: "rgb(0,0,0)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 166.434 76.177 L 149.734 63.827 C 148.471 62.895 147.486 61.636 146.885 60.186 C 146.284 58.736 146.09 57.149 146.324 55.597 L 149.404 35.047 C 149.672 33.241 149.514 31.398 148.941 29.664 C 148.368 27.93 147.398 26.355 146.107 25.064 C 144.816 23.773 143.241 22.803 141.507 22.23 C 139.773 21.657 137.93 21.499 136.124 21.767 L 115.574 24.847 C 114.022 25.079 112.436 24.884 110.986 24.283 C 109.537 23.682 108.277 22.698 107.344 21.437 L 95.024 4.727 C 93.937 3.261 92.521 2.069 90.89 1.248 C 89.26 0.428 87.46 0 85.634 0 C 83.808 0 82.008 0.428 80.378 1.248 C 78.747 2.069 77.331 3.261 76.244 4.727 L 63.854 21.437 C 62.92 22.698 61.661 23.681 60.211 24.281 C 58.762 24.882 57.176 25.077 55.624 24.847 L 35.074 21.767 C 33.268 21.497 31.423 21.654 29.689 22.225 C 27.954 22.797 26.378 23.768 25.086 25.059 C 23.795 26.351 22.824 27.927 22.253 29.662 C 21.681 31.396 21.524 33.241 21.794 35.047 L 24.874 55.597 C 25.105 57.149 24.909 58.734 24.308 60.184 C 23.708 61.634 22.725 62.893 21.464 63.827 L 4.754 76.177 C 3.28 77.263 2.082 78.681 1.256 80.316 C 0.43 81.95 0 83.756 0 85.587 C 0 87.418 0.43 89.224 1.256 90.858 C 2.082 92.493 3.28 93.91 4.754 94.997 L 21.464 107.357 C 22.725 108.29 23.709 109.549 24.31 110.999 C 24.911 112.449 25.106 114.035 24.874 115.587 L 21.794 136.097 C 21.524 137.903 21.681 139.748 22.253 141.482 C 22.824 143.217 23.795 144.793 25.086 146.085 C 26.378 147.376 27.954 148.347 29.689 148.918 C 31.423 149.49 33.268 149.647 35.074 149.377 L 55.624 146.297 C 57.176 146.063 58.763 146.257 60.213 146.858 C 61.663 147.459 62.922 148.444 63.854 149.707 L 76.204 166.407 C 77.289 167.877 78.704 169.072 80.335 169.895 C 81.966 170.719 83.767 171.148 85.594 171.148 C 87.421 171.148 89.222 170.719 90.853 169.895 C 92.484 169.072 93.899 167.877 94.984 166.407 L 107.344 149.707 C 108.275 148.443 109.534 147.457 110.984 146.856 C 112.435 146.255 114.022 146.062 115.574 146.297 L 136.124 149.377 C 137.929 149.643 139.772 149.483 141.505 148.909 C 143.237 148.336 144.812 147.365 146.102 146.075 C 147.392 144.785 148.363 143.21 148.936 141.478 C 149.51 139.745 149.67 137.902 149.404 136.097 L 146.324 115.547 C 146.09 113.995 146.284 112.408 146.885 110.958 C 147.486 109.508 148.471 108.249 149.734 107.317 L 166.434 94.997 C 167.904 93.912 169.099 92.497 169.922 90.866 C 170.746 89.235 171.175 87.434 171.175 85.607 C 171.175 83.78 170.746 81.978 169.922 80.348 C 169.099 78.717 167.904 77.302 166.434 76.217 L 166.434 76.177 Z M 164.634 92.517 L 147.924 104.877 C 146.218 106.136 144.888 107.837 144.077 109.797 C 143.266 111.757 143.006 113.9 143.324 115.997 L 146.394 136.547 C 146.595 137.883 146.48 139.247 146.058 140.531 C 145.636 141.814 144.918 142.98 143.963 143.936 C 143.007 144.891 141.841 145.609 140.558 146.031 C 139.274 146.453 137.91 146.568 136.574 146.367 L 116.024 143.297 C 113.927 142.98 111.784 143.241 109.825 144.052 C 107.865 144.862 106.164 146.192 104.904 147.897 L 92.544 164.607 C 91.739 165.693 90.692 166.575 89.485 167.183 C 88.278 167.791 86.945 168.107 85.594 168.107 C 84.243 168.107 82.91 167.791 81.703 167.183 C 80.496 166.575 79.449 165.693 78.644 164.607 L 66.294 147.897 C 65.209 146.431 63.795 145.239 62.166 144.418 C 60.537 143.597 58.738 143.168 56.914 143.167 C 56.332 143.165 55.75 143.209 55.174 143.297 L 34.624 146.367 C 33.288 146.568 31.923 146.453 30.639 146.03 C 29.356 145.608 28.189 144.891 27.233 143.936 C 26.277 142.98 25.558 141.815 25.135 140.531 C 24.711 139.248 24.594 137.883 24.794 136.547 L 27.874 115.997 C 28.19 113.899 27.927 111.755 27.115 109.796 C 26.303 107.837 24.971 106.136 23.264 104.877 L 6.564 92.517 C 5.476 91.714 4.592 90.666 3.983 89.459 C 3.374 88.252 3.057 86.919 3.057 85.567 C 3.057 84.215 3.374 82.882 3.983 81.675 C 4.592 80.467 5.476 79.42 6.564 78.617 L 23.264 66.267 C 24.97 65.007 26.301 63.306 27.113 61.347 C 27.926 59.388 28.189 57.244 27.874 55.147 L 24.794 34.597 C 24.595 33.26 24.712 31.895 25.135 30.612 C 25.559 29.328 26.277 28.162 27.233 27.206 C 28.189 26.25 29.355 25.532 30.639 25.108 C 31.922 24.685 33.287 24.568 34.624 24.767 L 55.174 27.847 C 57.271 28.162 59.415 27.899 61.374 27.086 C 63.334 26.274 65.034 24.943 66.294 23.237 L 78.644 6.537 C 79.447 5.449 80.495 4.565 81.702 3.956 C 82.909 3.347 84.242 3.03 85.594 3.03 C 86.946 3.03 88.279 3.347 89.486 3.956 C 90.693 4.565 91.741 5.449 92.544 6.537 L 104.904 23.237 C 106.163 24.944 107.864 26.276 109.823 27.088 C 111.783 27.9 113.926 28.163 116.024 27.847 L 136.574 24.767 C 137.91 24.567 139.275 24.684 140.558 25.108 C 141.842 25.531 143.008 26.25 143.963 27.206 C 144.918 28.162 145.635 29.329 146.057 30.612 C 146.48 31.896 146.595 33.261 146.394 34.597 L 143.324 55.147 C 143.008 57.243 143.27 59.386 144.08 61.346 C 144.891 63.305 146.219 65.006 147.924 66.267 L 164.634 78.617 C 165.72 79.421 166.602 80.469 167.21 81.676 C 167.818 82.883 168.134 84.216 168.134 85.567 C 168.134 86.918 167.818 88.251 167.21 89.458 C 166.602 90.665 165.72 91.712 164.634 92.517 L 164.634 92.517 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 134.077,
    height: 133.778,
    viewBox: "0 0 134.077 133.778",
    fill: "none",
    style: {
      position: "absolute",
      left: 18.547,
      top: 18.657,
      width: 134.077,
      height: 133.778,
      color: "rgb(0,0,0)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 114.657 43.67 L 117.057 27.67 C 117.274 26.212 117.147 24.724 116.686 23.324 C 116.224 21.924 115.44 20.651 114.398 19.609 C 113.356 18.566 112.083 17.783 110.683 17.321 C 109.283 16.86 107.795 16.733 106.337 16.95 L 90.337 19.34 C 89.188 19.516 88.014 19.373 86.94 18.929 C 85.867 18.485 84.935 17.756 84.247 16.82 L 74.627 3.82 C 73.751 2.636 72.609 1.673 71.293 1.009 C 69.978 0.346 68.525 0 67.052 0 C 65.578 0 64.125 0.346 62.81 1.009 C 61.494 1.673 60.352 2.636 59.477 3.82 L 49.857 16.82 C 49.164 17.752 48.232 18.478 47.16 18.922 C 46.087 19.365 44.915 19.51 43.767 19.34 L 27.767 16.95 C 26.312 16.732 24.826 16.857 23.429 17.316 C 22.031 17.775 20.761 18.554 19.719 19.592 C 18.677 20.631 17.892 21.898 17.428 23.294 C 16.964 24.69 16.833 26.175 17.047 27.63 L 19.447 43.63 C 13.994 44.607 9.058 47.47 5.503 51.719 C 1.948 55.967 0 61.331 0 66.87 C 0 72.41 1.948 77.773 5.503 82.022 C 9.058 86.27 13.994 89.133 19.447 90.11 L 17.057 106.11 C 16.836 107.569 16.962 109.058 17.423 110.46 C 17.884 111.861 18.667 113.134 19.71 114.177 C 20.753 115.22 22.026 116.003 23.427 116.464 C 24.828 116.925 26.318 117.05 27.777 116.83 L 43.777 114.44 C 44.924 114.266 46.097 114.408 47.17 114.85 C 48.243 115.292 49.175 116.018 49.867 116.95 L 59.487 129.95 C 60.361 131.137 61.502 132.102 62.818 132.766 C 64.134 133.431 65.587 133.778 67.062 133.778 C 68.536 133.778 69.989 133.431 71.305 132.766 C 72.621 132.102 73.762 131.137 74.637 129.95 L 84.257 116.95 C 84.947 116.017 85.879 115.289 86.952 114.847 C 88.025 114.405 89.199 114.264 90.347 114.44 L 106.347 116.83 C 107.805 117.05 109.295 116.925 110.696 116.464 C 112.097 116.003 113.37 115.22 114.413 114.177 C 115.456 113.134 116.239 111.861 116.7 110.46 C 117.161 109.058 117.287 107.569 117.067 106.11 L 114.667 90.11 C 120.103 89.122 125.022 86.259 128.568 82.021 C 132.114 77.783 134.063 72.436 134.077 66.91 C 134.07 61.377 132.123 56.02 128.574 51.774 C 125.026 47.528 120.101 44.66 114.657 43.67 L 114.657 43.67 Z M 22.477 43.18 L 20.077 27.18 C 19.928 26.191 20.013 25.181 20.326 24.231 C 20.638 23.281 21.17 22.418 21.877 21.711 C 22.584 21.004 23.447 20.472 24.397 20.16 C 25.347 19.847 26.358 19.762 27.347 19.91 L 43.347 22.3 C 45.043 22.561 46.779 22.353 48.366 21.697 C 49.952 21.041 51.329 19.963 52.347 18.58 L 61.967 5.58 C 62.558 4.774 63.331 4.119 64.224 3.667 C 65.116 3.215 66.102 2.98 67.102 2.98 C 68.102 2.98 69.087 3.215 69.98 3.667 C 70.872 4.119 71.645 4.774 72.237 5.58 L 81.857 18.58 C 82.873 19.964 84.25 21.042 85.837 21.698 C 87.423 22.354 89.16 22.562 90.857 22.3 L 106.857 19.91 C 107.846 19.762 108.856 19.847 109.806 20.16 C 110.756 20.472 111.619 21.004 112.326 21.711 C 113.033 22.418 113.565 23.281 113.877 24.231 C 114.19 25.181 114.275 26.191 114.127 27.18 L 111.727 43.18 C 111.727 43.23 111.727 43.28 111.727 43.33 C 111.337 43.33 110.937 43.33 110.547 43.33 L 102.117 43.33 L 102.697 39.43 C 102.852 38.344 102.752 37.236 102.405 36.194 C 102.058 35.153 101.473 34.206 100.697 33.43 C 99.921 32.654 98.974 32.069 97.933 31.722 C 96.891 31.375 95.783 31.275 94.697 31.43 L 83.467 33.11 C 82.711 33.244 81.934 33.157 81.226 32.861 C 80.519 32.565 79.912 32.072 79.477 31.44 L 72.737 22.34 C 72.078 21.451 71.22 20.729 70.232 20.231 C 69.244 19.733 68.153 19.473 67.047 19.473 C 65.94 19.473 64.849 19.733 63.861 20.231 C 62.873 20.729 62.015 21.451 61.357 22.34 L 54.597 31.44 C 54.162 32.03 53.575 32.489 52.898 32.768 C 52.22 33.046 51.48 33.134 50.757 33.02 L 39.477 31.34 C 38.389 31.183 37.28 31.281 36.238 31.627 C 35.195 31.974 34.248 32.558 33.471 33.335 C 32.695 34.112 32.11 35.059 31.763 36.102 C 31.417 37.144 31.319 38.253 31.477 39.34 L 32.057 43.24 L 23.637 43.24 C 23.237 43.24 22.847 43.24 22.457 43.24 C 22.462 43.22 22.469 43.2 22.477 43.18 L 22.477 43.18 Z M 111.687 90.65 L 114.087 106.65 C 114.235 107.639 114.15 108.649 113.837 109.599 C 113.525 110.549 112.993 111.413 112.286 112.12 C 111.579 112.827 110.716 113.359 109.766 113.671 C 108.816 113.984 107.806 114.069 106.817 113.92 L 90.817 111.53 C 89.121 111.267 87.385 111.474 85.798 112.128 C 84.212 112.782 82.834 113.859 81.817 115.24 L 72.197 128.24 C 71.602 129.043 70.828 129.695 69.936 130.144 C 69.045 130.593 68.06 130.827 67.062 130.827 C 66.063 130.827 65.078 130.593 64.187 130.144 C 63.295 129.695 62.521 129.043 61.927 128.24 L 52.297 115.24 C 51.274 113.864 49.896 112.792 48.311 112.14 C 46.725 111.488 44.991 111.281 43.297 111.54 L 27.297 113.93 C 26.308 114.079 25.297 113.994 24.347 113.681 C 23.397 113.368 22.534 112.837 21.827 112.13 C 21.12 111.423 20.588 110.559 20.276 109.609 C 19.963 108.659 19.878 107.649 20.027 106.66 L 22.417 90.66 C 22.417 90.66 22.417 90.55 22.417 90.5 C 22.807 90.5 23.197 90.5 23.597 90.5 L 32.027 90.5 L 31.477 94.44 C 31.319 95.528 31.417 96.636 31.763 97.679 C 32.11 98.722 32.695 99.669 33.471 100.446 C 34.248 101.222 35.195 101.807 36.238 102.153 C 37.28 102.5 38.389 102.598 39.477 102.44 L 50.717 100.76 C 51.443 100.647 52.187 100.737 52.866 101.019 C 53.546 101.301 54.134 101.765 54.567 102.36 L 61.317 111.49 C 61.975 112.38 62.833 113.102 63.821 113.6 C 64.809 114.098 65.9 114.357 67.007 114.357 C 68.113 114.357 69.204 114.098 70.192 113.6 C 71.18 113.102 72.038 112.38 72.697 111.49 L 79.477 102.4 C 79.909 101.805 80.497 101.341 81.177 101.059 C 81.856 100.777 82.6 100.687 83.327 100.8 L 94.557 102.48 C 95.644 102.638 96.753 102.54 97.795 102.193 C 98.838 101.847 99.785 101.262 100.562 100.486 C 101.339 99.709 101.923 98.762 102.27 97.719 C 102.616 96.676 102.714 95.568 102.557 94.48 L 101.967 90.57 L 110.477 90.57 C 110.867 90.57 111.267 90.57 111.657 90.57 C 111.655 90.597 111.655 90.624 111.657 90.65 L 111.687 90.65 Z M 125.047 81.47 C 123.139 83.384 120.871 84.899 118.373 85.929 C 115.875 86.959 113.198 87.483 110.497 87.47 L 98.477 87.47 L 99.587 94.86 C 99.688 95.486 99.64 96.127 99.445 96.731 C 99.25 97.334 98.915 97.882 98.467 98.331 C 98.018 98.779 97.47 99.114 96.867 99.309 C 96.263 99.504 95.622 99.552 94.997 99.45 L 83.757 97.77 C 82.487 97.581 81.19 97.74 80.004 98.232 C 78.819 98.723 77.789 99.528 77.027 100.56 L 70.277 109.7 C 69.897 110.205 69.406 110.615 68.841 110.898 C 68.276 111.18 67.653 111.327 67.022 111.327 C 66.39 111.327 65.767 111.18 65.202 110.898 C 64.637 110.615 64.146 110.205 63.767 109.7 L 57.017 100.57 C 56.365 99.675 55.51 98.948 54.523 98.447 C 53.536 97.946 52.444 97.687 51.337 97.69 C 50.982 97.693 50.628 97.719 50.277 97.77 L 39.037 99.45 C 38.416 99.546 37.782 99.493 37.185 99.298 C 36.588 99.102 36.046 98.769 35.602 98.325 C 35.158 97.881 34.825 97.339 34.629 96.742 C 34.434 96.145 34.381 95.511 34.477 94.89 L 35.587 87.5 L 23.587 87.5 C 18.206 87.382 13.085 85.161 9.321 81.313 C 5.558 77.466 3.45 72.298 3.45 66.915 C 3.45 61.533 5.558 56.365 9.321 52.517 C 13.085 48.67 18.206 46.449 23.587 46.33 L 35.577 46.33 L 34.477 38.94 C 34.373 38.314 34.42 37.672 34.614 37.067 C 34.808 36.462 35.143 35.912 35.592 35.463 C 36.04 35.013 36.589 34.677 37.193 34.482 C 37.798 34.287 38.44 34.238 39.067 34.34 L 50.307 36.01 C 51.577 36.211 52.878 36.058 54.067 35.567 C 55.256 35.077 56.287 34.268 57.047 33.23 L 63.797 24.1 C 64.167 23.584 64.655 23.164 65.22 22.874 C 65.785 22.584 66.411 22.432 67.047 22.432 C 67.682 22.432 68.308 22.584 68.873 22.874 C 69.438 23.164 69.926 23.584 70.297 24.1 L 77.057 33.23 C 77.815 34.267 78.845 35.074 80.032 35.564 C 81.219 36.055 82.518 36.209 83.787 36.01 L 95.027 34.34 C 95.652 34.239 96.293 34.287 96.897 34.482 C 97.5 34.676 98.048 35.012 98.497 35.46 C 98.945 35.908 99.28 36.457 99.475 37.06 C 99.67 37.664 99.718 38.305 99.617 38.93 L 98.477 46.34 L 110.477 46.34 C 114.548 46.339 118.529 47.546 121.915 49.808 C 125.3 52.07 127.939 55.285 129.497 59.047 C 131.054 62.809 131.461 66.949 130.665 70.942 C 129.87 74.935 127.907 78.603 125.027 81.48 L 125.047 81.47 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 35.470,
    height: 27.610,
    viewBox: "0 0 35.470 27.610",
    fill: "none",
    style: {
      position: "absolute",
      left: 32.024,
      top: 71.487,
      width: 35.47,
      height: 27.61,
      color: "rgb(0,0,0)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 9.45 27.61 L 0 4.99 L 6.85 3.99 L 9.29 10.62 C 10.436 14.406 11.213 18.294 11.61 22.23 L 13.76 21.93 C 13.184 18.546 12.986 15.108 13.17 11.68 L 14.09 2.96 L 21.64 1.9 L 25 10.02 C 26.139 13.257 26.913 16.611 27.31 20.02 L 29.42 19.73 C 28.758 15.875 28.423 11.971 28.42 8.06 L 29 0.91 L 35.47 0 L 32.83 24.31 L 25.45 25.31 L 21.82 16.31 C 20.725 13.271 20.016 10.106 19.71 6.89 L 17.56 7.19 C 18.134 10.369 18.316 13.607 18.1 16.83 L 17 26.51 L 9.45 27.61 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 26,
    height: 43.630,
    viewBox: "0 0 26 43.630",
    fill: "none",
    style: {
      position: "absolute",
      left: 72.574,
      top: 63.767,
      width: 26,
      height: 43.63,
      color: "rgb(0,0,0)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 22 C 0 13.15 2.1 0 13 0 C 23.9 0 26 14 26 22 C 26 30 23 43.63 13 43.63 C 3 43.63 0 30.85 0 22 Z M 19.27 21.93 C 19.27 13.75 17.07 5.14 13.04 5.14 C 9.01 5.14 6.77 13.75 6.77 21.93 C 6.77 30.11 9.01 38.47 13.04 38.47 C 17.07 38.47 19.27 30.05 19.27 21.93 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 35.390,
    height: 27.640,
    viewBox: "0 0 35.390 27.640",
    fill: "none",
    style: {
      position: "absolute",
      left: 103.744,
      top: 71.927,
      width: 35.39,
      height: 27.64,
      color: "rgb(0,0,0)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 2.8 24.34 L 0 0 L 6.85 1 L 7.36 8 C 7.412 11.957 7.077 15.909 6.36 19.8 L 8.5 20.1 C 8.887 16.693 9.648 13.34 10.77 10.1 L 14.07 1.98 L 21.64 3.07 L 22.64 11.76 C 22.832 15.208 22.63 18.667 22.04 22.07 L 24.16 22.37 C 24.58 18.481 25.34 14.637 26.43 10.88 L 28.92 4.07 L 35.39 4.98 L 26.18 27.64 L 18.8 26.64 L 17.8 16.99 C 17.59 13.765 17.781 10.527 18.37 7.35 L 16.22 7.05 C 15.897 10.264 15.175 13.425 14.07 16.46 L 10.34 25.46 L 2.8 24.34 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))));
}
Object.assign(__ds_scope, { Wow, __ds_default_components_Wow_1gzsmuv: Wow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/Wow.jsx", error: String((e && e.message) || e) }); }

// components/icons/icon-data.js
try { (() => {
// Generated by fig_materialize (moduleFormat: 'icon-data') — 13 icon(s)
// as { viewBox, body } SVG-markup entries. Render via the sibling Icon.jsx
// (<Icon name="AlertCircle" />), or consume the path data directly.
let __ds_default_components_icons_icon_data_12stud1;
try {
  __ds_default_components_icons_icon_data_12stud1 = {
    "AlertCircle": {
      viewBox: "0 0 24 24",
      body: "<path d=\"M 11 10 C 11 10.552 10.552 11 10 11 L 10 11 C 9.448 11 9 10.552 9 10 L 9 6 C 9 5.448 9.448 5 10 5 L 10 5 C 10.552 5 11 5.448 11 6 L 11 10 Z M 11 14 C 11 14.552 10.552 15 10 15 L 10 15 C 9.448 15 9 14.552 9 14 L 9 14 C 9 13.448 9.448 13 10 13 L 10 13 C 10.552 13 11 13.448 11 14 L 11 14 Z M 10 0 C 8.687 0 7.386 0.259 6.173 0.761 C 4.96 1.264 3.858 2 2.929 2.929 C 1.054 4.804 0 7.348 0 10 C 0 12.652 1.054 15.196 2.929 17.071 C 3.858 18 4.96 18.736 6.173 19.239 C 7.386 19.741 8.687 20 10 20 C 12.652 20 15.196 18.946 17.071 17.071 C 18.946 15.196 20 12.652 20 10 C 20 8.687 19.741 7.386 19.239 6.173 C 18.736 4.96 18 3.858 17.071 2.929 C 16.142 2 15.04 1.264 13.827 0.761 C 12.614 0.259 11.313 0 10 0 Z\" fill=\"currentColor\" fill-rule=\"nonzero\" transform=\"matrix(1 0 0 1 2 2)\"/>"
    },
    "Camera": {
      viewBox: "0 0 16 16",
      body: "<path d=\"M 8 16 C 12.418 16 16 12.418 16 8 C 16 3.582 12.418 0 8 0 C 3.582 0 0 3.582 0 8 C 0 12.418 3.582 16 8 16 Z\" fill=\"rgb(38,44,45)\" fill-rule=\"evenodd\"/><path d=\"M 5 10 C 7.761 10 10 7.761 10 5 C 10 2.239 7.761 0 5 0 C 2.239 0 0 2.239 0 5 C 0 7.761 2.239 10 5 10 Z\" fill=\"rgb(18,21,21)\" fill-rule=\"evenodd\" transform=\"matrix(1 0 0 1 3 3)\"/><path d=\"M 1 2 C 1.552 2 2 1.552 2 1 C 2 0.448 1.552 0 1 0 C 0.448 0 0 0.448 0 1 C 0 1.552 0.448 2 1 2 Z\" fill=\"rgb(99,111,115)\" fill-rule=\"evenodd\" transform=\"matrix(1 0 0 1 7 5)\"/>"
    },
    "FeatherArrowLeft": {
      viewBox: "0 0 24 24",
      body: "<path d=\"M 14 1 C 14.552 1 15 0.552 15 0 C 15 -0.552 14.552 -1 14 -1 L 14 1 Z M 0 -1 C -0.552 -1 -1 -0.552 -1 0 C -1 0.552 -0.552 1 0 1 L 0 -1 Z M 14 -1 L 0 -1 L 0 1 L 14 1 L 14 -1 Z\" fill=\"currentColor\" fill-rule=\"nonzero\" transform=\"matrix(1 0 0 1 5 5) matrix(1 0 0 1 0 7)\"/><path d=\"M 6.293 14.707 C 6.683 15.098 7.317 15.098 7.707 14.707 C 8.098 14.317 8.098 13.683 7.707 13.293 L 6.293 14.707 Z M 0 7 L -0.707 6.293 C -1.098 6.683 -1.098 7.317 -0.707 7.707 L 0 7 Z M 7.707 0.707 C 8.098 0.317 8.098 -0.317 7.707 -0.707 C 7.317 -1.098 6.683 -1.098 6.293 -0.707 L 7.707 0.707 Z M 7.707 13.293 L 0.707 6.293 L -0.707 7.707 L 6.293 14.707 L 7.707 13.293 Z M 0.707 7.707 L 7.707 0.707 L 6.293 -0.707 L -0.707 6.293 L 0.707 7.707 Z\" fill=\"currentColor\" fill-rule=\"nonzero\" transform=\"matrix(1 0 0 1 5 5)\"/>"
    },
    "FeatherChevronRight": {
      viewBox: "0 0 24 24",
      body: "<path d=\"M -0.707 11.293 C -1.098 11.683 -1.098 12.317 -0.707 12.707 C -0.317 13.098 0.317 13.098 0.707 12.707 L -0.707 11.293 Z M 6 6 L 6.707 6.707 C 7.098 6.317 7.098 5.683 6.707 5.293 L 6 6 Z M 0.707 -0.707 C 0.317 -1.098 -0.317 -1.098 -0.707 -0.707 C -1.098 -0.317 -1.098 0.317 -0.707 0.707 L 0.707 -0.707 Z M 0.707 12.707 L 6.707 6.707 L 5.293 5.293 L -0.707 11.293 L 0.707 12.707 Z M 6.707 5.293 L 0.707 -0.707 L -0.707 0.707 L 5.293 6.707 L 6.707 5.293 Z\" fill=\"currentColor\" fill-rule=\"nonzero\" transform=\"matrix(1 0 0 1 9 6)\"/>"
    },
    "FeatherPlus": {
      viewBox: "0 0 24 24",
      body: "<path d=\"M 1 0 C 1 -0.552 0.552 -1 0 -1 C -0.552 -1 -1 -0.552 -1 0 L 1 0 Z M -1 14 C -1 14.552 -0.552 15 0 15 C 0.552 15 1 14.552 1 14 L -1 14 Z M -1 0 L -1 14 L 1 14 L 1 0 L -1 0 Z\" fill=\"currentColor\" fill-rule=\"nonzero\" transform=\"matrix(1 0 0 1 5 5) matrix(1 0 0 1 7 0)\"/><path d=\"M 0 -1 C -0.552 -1 -1 -0.552 -1 0 C -1 0.552 -0.552 1 0 1 L 0 -1 Z M 14 1 C 14.552 1 15 0.552 15 0 C 15 -0.552 14.552 -1 14 -1 L 14 1 Z M 0 1 L 14 1 L 14 -1 L 0 -1 L 0 1 Z\" fill=\"currentColor\" fill-rule=\"nonzero\" transform=\"matrix(1 0 0 1 5 5) matrix(1 0 0 1 0 7)\"/>"
    },
    "HelpOutlineFilled": {
      viewBox: "0 0 24 24",
      body: "<path d=\"M 9 16 L 11 16 L 11 14 L 9 14 L 9 16 Z M 10 0 C 4.48 0 0 4.48 0 10 C 0 15.52 4.48 20 10 20 C 15.52 20 20 15.52 20 10 C 20 4.48 15.52 0 10 0 Z M 10 18 C 5.59 18 2 14.41 2 10 C 2 5.59 5.59 2 10 2 C 14.41 2 18 5.59 18 10 C 18 14.41 14.41 18 10 18 Z M 10 4 C 7.79 4 6 5.79 6 8 L 8 8 C 8 6.9 8.9 6 10 6 C 11.1 6 12 6.9 12 8 C 12 10 9 9.75 9 13 L 11 13 C 11 10.75 14 10.5 14 8 C 14 5.79 12.21 4 10 4 Z\" fill=\"currentColor\" fill-rule=\"nonzero\" transform=\"matrix(1 0 0 1 2 2)\"/>"
    },
    "KeyboardArrowDownFilled": {
      viewBox: "0 0 24 24",
      body: "<path d=\"M 1.41 0 L 6 4.58 L 10.59 0 L 12 1.41 L 6 7.41 L 0 1.41 L 1.41 0 Z\" fill=\"currentColor\" fill-rule=\"nonzero\" transform=\"matrix(1 0 0 1 6 8.590)\"/>"
    },
    "NotificationsFilled": {
      viewBox: "0 0 24 24",
      body: "<path d=\"M 8 19.5 C 9.1 19.5 10 18.6 10 17.5 L 6 17.5 C 6 18.6 6.89 19.5 8 19.5 Z M 14 13.5 L 14 8.5 C 14 5.43 12.36 2.86 9.5 2.18 L 9.5 1.5 C 9.5 0.67 8.83 0 8 0 C 7.17 0 6.5 0.67 6.5 1.5 L 6.5 2.18 C 3.63 2.86 2 5.42 2 8.5 L 2 13.5 L 0 15.5 L 0 16.5 L 16 16.5 L 16 15.5 L 14 13.5 Z\" fill=\"currentColor\" fill-rule=\"nonzero\" transform=\"matrix(1 0 0 1 4 2.500)\"/>"
    },
    "SearchFilled": {
      viewBox: "0 0 24 24",
      body: "<path d=\"M 12.5 11 L 11.71 11 L 11.43 10.73 C 12.41 9.59 13 8.11 13 6.5 C 13 2.91 10.09 0 6.5 0 C 2.91 0 0 2.91 0 6.5 C 0 10.09 2.91 13 6.5 13 C 8.11 13 9.59 12.41 10.73 11.43 L 11 11.71 L 11 12.5 L 16 17.49 L 17.49 16 L 12.5 11 Z M 6.5 11 C 4.01 11 2 8.99 2 6.5 C 2 4.01 4.01 2 6.5 2 C 8.99 2 11 4.01 11 6.5 C 11 8.99 8.99 11 6.5 11 Z\" fill=\"currentColor\" fill-rule=\"nonzero\" transform=\"matrix(1 0 0 1 3 3)\"/>"
    },
    "SettingsFilled": {
      viewBox: "0 0 24 24",
      body: "<path d=\"M 16.478 10.54 C 16.518 10.24 16.538 9.93 16.538 9.6 C 16.538 9.28 16.518 8.96 16.468 8.66 L 18.498 7.08 C 18.678 6.94 18.728 6.67 18.618 6.47 L 16.698 3.15 C 16.578 2.93 16.328 2.86 16.108 2.93 L 13.718 3.89 C 13.218 3.51 12.688 3.19 12.098 2.95 L 11.738 0.41 C 11.698 0.17 11.498 0 11.258 0 L 7.418 0 C 7.178 0 6.988 0.17 6.948 0.41 L 6.588 2.95 C 5.998 3.19 5.458 3.52 4.968 3.89 L 2.578 2.93 C 2.358 2.85 2.108 2.93 1.988 3.15 L 0.078 6.47 C -0.042 6.68 -0.002 6.94 0.198 7.08 L 2.228 8.66 C 2.178 8.96 2.138 9.29 2.138 9.6 C 2.138 9.91 2.158 10.24 2.208 10.54 L 0.178 12.12 C -0.002 12.26 -0.052 12.53 0.058 12.73 L 1.978 16.05 C 2.098 16.27 2.348 16.34 2.568 16.27 L 4.958 15.31 C 5.458 15.69 5.988 16.01 6.578 16.25 L 6.938 18.79 C 6.988 19.03 7.178 19.2 7.418 19.2 L 11.258 19.2 C 11.498 19.2 11.698 19.03 11.728 18.79 L 12.088 16.25 C 12.678 16.01 13.218 15.69 13.708 15.31 L 16.098 16.27 C 16.318 16.35 16.568 16.27 16.688 16.05 L 18.608 12.73 C 18.728 12.51 18.678 12.26 18.488 12.12 L 16.478 10.54 Z M 9.338 13.2 C 7.358 13.2 5.738 11.58 5.738 9.6 C 5.738 7.62 7.358 6 9.338 6 C 11.318 6 12.938 7.62 12.938 9.6 C 12.938 11.58 11.318 13.2 9.338 13.2 Z\" fill=\"currentColor\" fill-rule=\"nonzero\" transform=\"matrix(1 0 0 1 2.662 2.400)\"/>"
    },
    "ShoppingCartFilled": {
      viewBox: "0 0 24 24",
      body: "<path d=\"M 6 16 C 4.9 16 4.01 16.9 4.01 18 C 4.01 19.1 4.9 20 6 20 C 7.1 20 8 19.1 8 18 C 8 16.9 7.1 16 6 16 Z M 0 0 L 0 2 L 2 2 L 5.6 9.59 L 4.25 12.04 C 4.09 12.32 4 12.65 4 13 C 4 14.1 4.9 15 6 15 L 18 15 L 18 13 L 6.42 13 C 6.28 13 6.17 12.89 6.17 12.75 L 6.2 12.63 L 7.1 11 L 14.55 11 C 15.3 11 15.96 10.59 16.3 9.97 L 19.88 3.48 C 19.96 3.34 20 3.17 20 3 C 20 2.45 19.55 2 19 2 L 4.21 2 L 3.27 0 L 0 0 Z M 16 16 C 14.9 16 14.01 16.9 14.01 18 C 14.01 19.1 14.9 20 16 20 C 17.1 20 18 19.1 18 18 C 18 16.9 17.1 16 16 16 Z\" fill=\"currentColor\" fill-rule=\"nonzero\" transform=\"matrix(1 0 0 1 1 2)\"/>"
    },
    "Speaker": {
      viewBox: "0 0 77 6",
      body: "<path d=\"M 0 3 C 0 1.343 1.343 0 3 0 L 74 0 C 75.657 0 77 1.343 77 3 L 77 3 C 77 4.657 75.657 6 74 6 L 3 6 C 1.343 6 0 4.657 0 3 L 0 3 Z\" fill=\"currentColor\" fill-rule=\"evenodd\"/>"
    },
    "TrashCanOutline": {
      viewBox: "0 0 24 24",
      body: "<path d=\"M 5.5 0 C 5.224 0 5 0.224 5 0.5 L 5 0.5 C 5 0.776 4.776 1 4.5 1 L 1 1 C 0.448 1 0 1.448 0 2 L 0 2.5 C 0 2.776 0.224 3 0.5 3 L 0.5 3 C 0.776 3 1 3.224 1 3.5 L 1 16 C 1 16.53 1.211 17.039 1.586 17.414 C 1.961 17.789 2.47 18 3 18 L 13 18 C 13.53 18 14.039 17.789 14.414 17.414 C 14.789 17.039 15 16.53 15 16 L 15 3.5 C 15 3.224 15.224 3 15.5 3 L 15.5 3 C 15.776 3 16 2.776 16 2.5 L 16 2 C 16 1.448 15.552 1 15 1 L 11.5 1 C 11.224 1 11 0.776 11 0.5 L 11 0.5 C 11 0.224 10.776 0 10.5 0 L 5.5 0 Z M 3 4 C 3 3.448 3.448 3 4 3 L 12 3 C 12.552 3 13 3.448 13 4 L 13 15 C 13 15.552 12.552 16 12 16 L 4 16 C 3.448 16 3 15.552 3 15 L 3 4 Z M 6 5 C 5.448 5 5 5.448 5 6 L 5 13 C 5 13.552 5.448 14 6 14 L 6 14 C 6.552 14 7 13.552 7 13 L 7 6 C 7 5.448 6.552 5 6 5 L 6 5 Z M 10 5 C 9.448 5 9 5.448 9 6 L 9 13 C 9 13.552 9.448 14 10 14 L 10 14 C 10.552 14 11 13.552 11 13 L 11 6 C 11 5.448 10.552 5 10 5 L 10 5 Z\" fill=\"currentColor\" fill-rule=\"nonzero\" transform=\"matrix(1 0 0 1 4 3)\"/>"
    }
  };
} catch {}
Object.assign(__ds_scope, { __ds_default_components_icons_icon_data_12stud1 });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/icons/icon-data.js", error: String((e && e.message) || e) }); }

// doc-page.js
try { (() => {
// @ds-adherence-ignore -- omelette starter scaffold (raw elements/hex/px by design)
// Copied omelette starter. Re-running copy_starter_component with this kind overwrites this file with the latest version (page content is unaffected).
/* BEGIN USAGE */
/**
 * <doc-page> — paged-document shell for printable HTML.
 *
 * FIRST, decide how the document paginates — up front, before building:
 *
 * - FLOWING document (the default): write the whole document as one
 *   normal HTML flow inside <doc-page>; the browser's print engine
 *   splits it onto pages at export. Use for long-form documents with a
 *   single text flow: reports, memos, letters, essays.
 * - EXPLICIT pagination: a fixed set of pre-paginated pages, one
 *   <section class="page"> child per page. Use when the user asks for a
 *   specific page count, or the design implies one: a one-page resume, a
 *   two-sided flier, a poster, a certificate, a brochure — any richly
 *   laid-out document without a single text flow.
 * - If in doubt, ask the user as part of the build.
 *
 * PAGE SIZING — paper differs by country (letter vs A4), so the printed
 * sheet is not one fixed truth:
 * - FLOWING documents pin NO paper size: the print engine paginates
 *   onto the user's real paper, and the content reflows to it.
 * - EXPLICITLY PAGINATED documents print each page at a FIXED page box
 *   with overflow hidden — letter by default, size="a4" for a clearly
 *   metric user, the user's chosen paper when they export. Design each
 *   page to FILL that box, fitting letter and A4 alike without overlap.
 * - width/height pin an explicit fixed size, ONLY when the user gives
 *   one.
 * Never write your own @page rule or hard-code paper dimensions in the
 * content.
 *
 * Sizing modes (attributes):
 *   (none)                      — portrait: flowing docs use the user's
 *           paper; explicitly paginated pages use the named size box
 *           (letter unless size="a4")
 *   orientation="landscape"     — the same, landscape
 *   width / height              — explicit fixed size, ONLY when the user
 *           gives one (e.g. width="22in" height="30in" for a 22×30
 *           poster): the page IS the design's size, printed at true
 *           dimensions (or scaled onto the user's paper at print time).
 *           Any absolute CSS length: px/in/mm/cm/pt/pc.
 * The component announces the chosen mode to the host app at runtime (a
 * meta tag it injects), so the print path can inject the user's true
 * paper size.
 *
 * On screen the document renders on a desk background: a flowing
 * document as one tall scrolling sheet (Google Docs' pageless view);
 * explicitly paginated documents as one card per page.
 *
 * EXPLICIT pagination usage:
 *   <style>doc-page:not(:defined){visibility:hidden}</style>
 *   <doc-page>
 *     <section class="page" id="p1">…one page's design…</section>
 *     <section class="page" id="p2">…</section>
 *   </doc-page>
 *   <script src="doc-page.js"></script>
 * How the page box works, concretely: each .page prints as ONE full-bleed
 * sheet at a FIXED physical size — letter by default (set size="a4" for
 * a clearly metric user), the user's chosen paper when they export —
 * with overflow hidden. Nothing scrolls and nothing reflows onto a next
 * sheet: content that misses the box is CLIPPED. Design each page to
 * FILL that page box, and to fit it — letter and A4 alike — without
 * overlap. Each page is a size container; don't size anything in
 * viewport units (they track the window, not the page), and never set
 * width or height on the .page section itself (the component sizes the
 * page box; an authored height like 100% is meaningless at print and is
 * overridden). The component owns the page box, the screen card chrome,
 * and the page breaks (never add your own break-before/after). Don't mix
 * .page sections with flowing content or header/footer slots in the same
 * document.
 *
 * FLOWING usage:
 *   <style>doc-page:not(:defined){visibility:hidden}</style>
 *   <doc-page margin="0.75in">
 *     <h1>Title</h1>
 *     <p>…body…</p>
 *   </doc-page>
 *   <script src="doc-page.js"></script>
 * There is no manual page-splitting — the browser's print engine
 * paginates at export. Standard break-hygiene rules (`break-inside:
 * avoid` on figures, code blocks, images and table rows; `orphans/
 * widows: 3`) are applied so paragraphs and groups split cleanly. On
 * screen and at print, headings default to `text-wrap: balance` and
 * body text to `text-wrap: pretty`; the defaults have zero specificity,
 * so any text-wrap you declare wins.
 *
 * Other attributes:
 *   size    — letter | a4 | legal (default letter). Flowing documents:
 *           preview proportion only — it does NOT pin their printed
 *           paper (the print dialog's paper governs); leave it alone
 *           there. Explicitly paginated documents: it sets the page box
 *           the cards and the pinned @page share (the export dialog's
 *           choice overrides both at print) — set size="a4" for a
 *           clearly metric user. Scaled-fit: names the sheet the fit is
 *           computed against, same a4-for-metric-users advice.
 *   content-width / content-height — the design's own fixed dimensions
 *           (CSS lengths), for scaling a fixed-size design ONTO the
 *           named sheet: content lays out at exactly this size, and the
 *           component scales it to fit that sheet's printable area
 *           (centered horizontally, top-aligned; the export dialog
 *           re-fits to the user's actual paper choice where available).
 *           Both must be set; they do not change the page box. For pages
 *           WITHOUT running header/footer slots.
 *   margin  — printable inset on every page of a FLOWING document
 *           (default 0.75in); margin="0" makes pages full-bleed.
 *           Explicitly paginated pages are always full-bleed.
 *
 * Running header/footer (flowing documents only): give an element
 * `slot="header"` or `slot="footer"` and it repeats on every printed
 * page via `position: fixed`. To keep body text from sliding under it,
 * the component prints inside a single-cell table whose <thead>/<tfoot>
 * are spacers sized to the header/footer height — browsers repeat
 * thead/tfoot on every page, so each sheet's content starts below the
 * header and ends above the footer. On screen the header/footer render
 * once at the top/bottom of the sheet.
 *
 * At print the component injects `@page { margin: 0 }` (which leaves
 * Chrome no margin box to draw its date/URL/page-count header in) and
 * moves the visual margin onto the sheet's own padding. It also marks
 * the document as owning its print CSS (a
 * `meta[name="omelette-owns-print"]` it injects at runtime), so the
 * PDF export never injects page-geometry CSS of its own on top.
 *
 * Print best practices for the content you author:
 * - Multi-column text: use CSS columns (`column-count` +
 *   `column-gap`), never side-by-side flex/grid columns — only real
 *   CSS columns flow and break across pages. `column-span: all` lets
 *   a heading span the columns; `hyphens: auto` (needs `lang` on
 *   the html element) keeps narrow columns readable.
 * - Page breaks in flowing documents: `break-before: page` on an
 *   element that must start a new page (a chapter, an appendix). Add
 *   your own kept-together blocks (callouts, stat tiles, cards) to a
 *   `break-inside: avoid` rule, and keep each one shorter than a page.
 * - Extend `orphans: 3; widows: 3` to any custom text blocks you add
 *   (p and li are covered by default).
 * - Give long tables a <thead> — browsers repeat it on every printed
 *   page.
 * - No `position: fixed`/`sticky` and no viewport units in content:
 *   fixed elements stamp every printed page (running headers/footers go
 *   in the component's slots) and `100vh` mis-sizes at print.
 *
 * Author content as static HTML so the user can click-to-edit any text
 * directly. Do not set width/padding/background on the document body —
 * the component owns the sheet box.
 */
/* END USAGE */

(() => {
  const PAPER = {
    letter: ['8.5in', '11in'],
    a4: ['210mm', '297mm'],
    legal: ['8.5in', '14in']
  };
  const CSS_LENGTH = /^\d+(\.\d+)?(px|in|mm|cm|pt|pc)$/;
  // Unitless "0" is a valid CSS length and the natural way to write
  // margin="0"; normalise it to 0px so max()/calc() (which reject a bare
  // number) keep working.
  const safeLen = (v, fb) => {
    v = (v || '').trim();
    return v === '0' ? '0px' : CSS_LENGTH.test(v) ? v : fb;
  };
  // WebKit (Safari and every iOS browser shell) never repeats a table's
  // thead/tfoot on printed pages (WebKit bug 17205), so the spacer-borne
  // vertical margins of a FLOWING document reach only the first page
  // there. Engine check, not browser check: vendor is 'Apple Computer,
  // Inc.' exactly for WebKit and 'Google Inc.' for Blink.
  const WK_PRINT = /apple/i.test(navigator.vendor || '');
  // CSS length → px number (CSS absolute units are exact: 1in = 96px).
  // Returns NaN for anything safeLen would reject — callers gate on it.
  const PX_PER = {
    px: 1,
    in: 96,
    mm: 96 / 25.4,
    cm: 96 / 2.54,
    pt: 96 / 72,
    pc: 16
  };
  const toPx = v => {
    const m = /^(\d+(?:\.\d+)?)(px|in|mm|cm|pt|pc)$/.exec((v || '').trim());
    return m ? parseFloat(m[1]) * PX_PER[m[2]] : NaN;
  };
  const stylesheet = `
    :host {
      position: relative;
      display: block;
      /* When the viewport is narrower than the page, grow to wrap the
       * sheet (plus this padding) instead of staying viewport-width, so
       * the desk background and right margin reach the sheet's far edge
       * in the horizontal scroll. */
      min-width: max-content;
      min-height: 100vh;
      background: #f5f5f4;
      padding: 48px 24px;
      box-sizing: border-box;
      font-family: -apple-system, BlinkMacSystemFont, "Helvetica Neue", Arial, sans-serif;
      --doc-page-w: 8.5in;
      --doc-page-h: 11in;
      --doc-page-margin: 0.75in;
      --doc-hdr-h: 0px;
      --doc-ftr-h: 0px;
      --doc-hdr-pad: 0px;
      --doc-ftr-pad: 0px;
    }
    .sheet {
      width: var(--doc-page-w);
      margin: 0 auto;
      background: #fff;
      box-shadow: 0 2px 10px rgba(20, 20, 19, 0.12);
      border-radius: 7px;
      box-sizing: border-box;
      padding: var(--doc-page-margin);
    }
    .frame { width: 100%; border-collapse: collapse; }
    /* Scaled-fit mode (content-width/content-height): the inner .fit box
     * lays the content out at its authored fixed size and scales it onto
     * the printable area; .fit-box reserves the scaled footprint in flow
     * (transforms don't affect layout) and centers it. Without the mode,
     * both divs are unstyled block pass-throughs. */
    /* Explicit pagination: direct .page children are the pages. The sheet
     * becomes a transparent stack and each page carries the card look on
     * screen; at print each page is exactly one full-bleed sheet. The
     * ::slotted defaults are deliberately weak (document CSS wins), so
     * authored page styling can override any of this. */
    .sheet.paginated {
      background: transparent;
      box-shadow: none;
      border-radius: 0;
      padding: 0;
    }
    .paginated ::slotted(.page) {
      position: relative;
      display: block;
      width: 100%;
      aspect-ratio: var(--doc-page-ar);
      container-type: size;
      overflow: hidden;
      box-sizing: border-box;
      background: #fff;
      border-radius: 7px;
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.25);
      print-color-adjust: exact;
      -webkit-print-color-adjust: exact;
      break-inside: avoid;
    }
    .paginated ::slotted(.page:not(:first-child)) { margin-top: 1rem; }
    @media print {
      .sheet.paginated { padding: 0; }
      /* The flowing-document vertical inset lives on the repeating
       * thead/tfoot spacers, not the sheet padding — they must go too,
       * or each full-sheet .page is pushed ~margin down and spills onto
       * a second sheet. Paginated pages are full-bleed by definition
       * (content owns its insets). */
      .sheet.paginated .hdr-space,
      .sheet.paginated .ftr-space { height: 0; }
      .paginated ::slotted(.page) {
        border-radius: 0 !important;
        box-shadow: none !important;
        margin: 0 !important;
        /* Physical page-box sizing, no viewport units: Safari resolves
         * 100vh against the window, not the page box, so a vh-sized card
         * paginates wrong there. --doc-page-w/h are the named size by
         * default and are overridden to the user's chosen paper by the
         * export path, so every card is exactly one sheet either way.
         * Width + height (same source values as @page size) rather than
         * width + aspect-ratio: the ratio is a 6-decimal rounding of the
         * same division, and a few millionths of overflow would spill a
         * blank sheet after every page. The screen-only aspect-ratio
         * (preview proportions) must not leak into print. cqh typography
         * tracks the same box.
         *
         * Every declaration is !important: per CSS Scoping, unimportant
         * shadow ::slotted rules LOSE to the document context, so a page
         * section's authored inline style would silently beat this print
         * geometry. A model-authored height:100% did exactly that — the
         * percentage resolves as auto in the all-auto print ancestry, the
         * base rule's size containment turns auto into ZERO, and
         * overflow:hidden then paints nothing: a blank PDF with perfect
         * page boxes. At print the component's geometry is the design's
         * whole contract, so it must win over any authored sizing. */
        aspect-ratio: auto !important;
        width: var(--doc-page-w) !important;
        height: var(--doc-page-h) !important;
        overflow: hidden !important;
      }
      .paginated ::slotted(.page:not(:first-child)) {
        break-before: page !important;
        margin-top: 0 !important;
      }
    }
    .fit-mode .fit-box {
      width: calc(var(--doc-fit-w) * var(--doc-fit-scale));
      height: calc(var(--doc-fit-h) * var(--doc-fit-scale));
      margin: 0 auto;
      break-inside: avoid;
    }
    .fit-mode .fit {
      width: var(--doc-fit-w);
      height: var(--doc-fit-h);
      transform: scale(var(--doc-fit-scale));
      transform-origin: top left;
    }
    .frame td, .frame th { padding: 0; text-align: left; font-weight: inherit; }
    .hdr-space { height: var(--doc-hdr-h); }
    .ftr-space { height: var(--doc-ftr-h); }
    ::slotted([slot="header"]),
    ::slotted([slot="footer"]) { display: block; box-sizing: border-box; }
    @media print {
      :host { background: none; padding: 0; min-width: 0; min-height: 0; }
      .sheet {
        width: auto; margin: 0; box-shadow: none; border-radius: 0;
        padding: 0 var(--doc-page-margin);
      }
      /* The thead/tfoot spacers repeat on every page, so they carry the
       * vertical page margin (which the sheet's own padding cannot, since
       * that padding is consumed once on the first/last page). The running
       * header/footer are fixed inside that band. */
      /* The 0.35in is breathing room between a running header/footer and
       * the body; without one the spacer is exactly the page margin, so a
       * margin="0" full-bleed document gets truly full-bleed pages. */
      .hdr-space { height: max(var(--doc-page-margin), calc(var(--doc-hdr-h) + var(--doc-hdr-pad))); }
      .ftr-space { height: max(var(--doc-page-margin), calc(var(--doc-ftr-h) + var(--doc-ftr-pad))); }
      /* WebKit flowing documents: @page carries the vertical margin (see
       * _syncPrintPageRule), so the spacers keep only whatever a running
       * header/footer needs BEYOND it — page 1 would otherwise double its
       * top inset. Paginated sheets already zero their spacers above. */
      .sheet.wk-print:not(.paginated) .hdr-space { height: max(0px, calc(max(var(--doc-page-margin), calc(var(--doc-hdr-h) + var(--doc-hdr-pad))) - var(--doc-page-margin))); }
      .sheet.wk-print:not(.paginated) .ftr-space { height: max(0px, calc(max(var(--doc-page-margin), calc(var(--doc-ftr-h) + var(--doc-ftr-pad))) - var(--doc-page-margin))); }
      ::slotted([slot="header"]) {
        position: fixed; top: 0; left: 0; right: 0; margin: 0;
        padding: calc(var(--doc-page-margin) * 0.45) var(--doc-page-margin) 0;
      }
      ::slotted([slot="footer"]) {
        position: fixed; bottom: 0; left: 0; right: 0; margin: 0;
        padding: 0 var(--doc-page-margin) calc(var(--doc-page-margin) * 0.45);
      }
    }
  `;
  class DocPage extends HTMLElement {
    static get observedAttributes() {
      return ['size', 'width', 'height', 'margin', 'orientation', 'content-width', 'content-height'];
    }
    constructor() {
      super();
      this._root = this.attachShadow({
        mode: 'open'
      });
      this._mo = typeof MutationObserver === 'function' ? new MutationObserver(() => this._scheduleMeasure()) : null;
    }

    /** The named paper's [w, h], swapped when orientation="landscape".
     *  Only the named size swaps — explicit width/height are exact values
     *  the author already oriented. */
    _paperSize() {
      const named = PAPER[(this.getAttribute('size') || '').toLowerCase()] || PAPER.letter;
      const landscape = (this.getAttribute('orientation') || '').trim().toLowerCase() === 'landscape';
      return landscape ? [named[1], named[0]] : named;
    }
    get pageWidth() {
      return safeLen(this.getAttribute('width'), this._paperSize()[0]);
    }
    get pageHeight() {
      return safeLen(this.getAttribute('height'), this._paperSize()[1]);
    }
    get pageMargin() {
      return safeLen(this.getAttribute('margin'), '0.75in');
    }

    /** Scaled-fit mode's content box [w, h] as CSS lengths, or null when
     *  the mode is off (either attribute missing/invalid/zero — a partial
     *  declaration falls back to normal flow rather than guessing). */
    _contentFit() {
      const w = safeLen(this.getAttribute('content-width'), null);
      const h = safeLen(this.getAttribute('content-height'), null);
      if (!w || !h) return null;
      const wPx = toPx(w),
        hPx = toPx(h);
      return wPx > 0 && hPx > 0 ? [w, h, wPx, hPx] : null;
    }
    connectedCallback() {
      if (!this._sheet) this._render();
      this._syncSize();
      this._syncPrintPageRule();
      this._ensureTextWrapDefaults();
      this._ensureOwnsPrintMeta();
      this._syncFixedSizeMeta();
      this._syncPrintSizingMeta();
      if (this._mo) this._mo.observe(this, {
        subtree: true,
        childList: true,
        characterData: true,
        attributes: true
      });
      this._onResize = () => this._scheduleMeasure();
      window.addEventListener('resize', this._onResize);
      if (document.fonts && document.fonts.ready) {
        document.fonts.ready.then(() => this._scheduleMeasure());
      }
      this._scheduleMeasure();
    }
    disconnectedCallback() {
      window.removeEventListener('resize', this._onResize);
      if (this._mo) this._mo.disconnect();
      if (this._raf) {
        cancelAnimationFrame(this._raf);
        this._raf = null;
      }
      // Drop the head rules when the last doc-page leaves, so a deleted
      // document's @page geometry and text-wrap defaults can't apply to
      // whatever replaces it.
      const survivor = document.querySelector('doc-page');
      if (!survivor) {
        ['doc-page-print', 'doc-page-text-wrap', 'doc-page-owns-print', 'doc-page-fixed-size', 'doc-page-print-sizing'].forEach(id => {
          const tag = document.getElementById(id);
          if (tag) tag.remove();
        });
        // A live deck-stage deferred its own print-sizing meta to ours —
        // hand the page-global meta over so the deck isn't left unmarked.
        const deck = document.querySelector('deck-stage');
        if (deck && typeof deck._ensurePrintSizingMeta === 'function') {
          deck._ensurePrintSizingMeta();
        }
      } else {
        // A departed owner hands each page-global meta to whatever
        // doc-page remains (or it's removed).
        if (typeof survivor._syncFixedSizeMeta === 'function') {
          survivor._syncFixedSizeMeta();
        }
        if (typeof survivor._syncPrintSizingMeta === 'function') {
          survivor._syncPrintSizingMeta();
        }
      }
    }
    attributeChangedCallback() {
      if (!this._sheet) return;
      this._syncSize();
      this._syncPrintPageRule();
      this._syncFixedSizeMeta();
      this._syncPrintSizingMeta();
      this._scheduleMeasure();
    }
    _render() {
      this._root.innerHTML = `
        <style>${stylesheet}</style>
        <style id="vars"></style>
        <div class="sheet" data-screen-label="Document">
          <table class="frame" role="presentation">
            <thead><tr><th><div class="hdr-space"><slot name="header"></slot></div></th></tr></thead>
            <tbody><tr><td class="body"><div class="fit-box"><div class="fit"><slot></slot></div></div></td></tr></tbody>
            <tfoot><tr><td><div class="ftr-space"><slot name="footer"></slot></div></td></tr></tfoot>
          </table>
        </div>`;
      this._sheet = this._root.querySelector('.sheet');
      this._vars = this._root.getElementById('vars');
    }

    /** Runtime sizing lives in a shadow <style> :host rule, never on the
     *  light-DOM host element, so serialize-persist can't write it back. */
    _syncSize(hdrH, ftrH) {
      // Scaled-fit mode: content at its authored size, scaled onto the
      // printable area (page minus margins on both axes). The factor is a
      // plain number var so calc(length * number) stays valid; 4 decimals
      // keeps the shadow style stable across re-measures. Upscaling is
      // allowed — print transforms are vector, so text and CSS stay crisp
      // (raster images soften, which the catalog bullet warns about).
      const fit = this._contentFit();
      let fitVars = '';
      if (fit) {
        const marginPx = toPx(this.pageMargin) || 0;
        const availW = toPx(this.pageWidth) - 2 * marginPx;
        const availH = toPx(this.pageHeight) - 2 * marginPx;
        const scale = Math.min(availW / fit[2], availH / fit[3]);
        if (scale > 0 && Number.isFinite(scale)) {
          fitVars = '--doc-fit-w:' + fit[0] + ';' + '--doc-fit-h:' + fit[1] + ';' + '--doc-fit-scale:' + scale.toFixed(4) + ';';
        }
      }
      this._sheet.classList.toggle('fit-mode', !!fitVars);
      // Numeric w/h ratio for the paginated page cards' aspect-ratio —
      // aspect-ratio takes a number, not a length ratio, so compute it
      // here (CSS length division isn't portable). 6 decimals keeps the
      // shadow style stable across re-syncs.
      const arW = toPx(this.pageWidth);
      const arH = toPx(this.pageHeight);
      const ar = arW > 0 && arH > 0 ? (arW / arH).toFixed(6) : '0.772727';
      this._vars.textContent = ':host{' + fitVars + '--doc-page-ar:' + ar + ';' + '--doc-page-w:' + this.pageWidth + ';' + '--doc-page-h:' + this.pageHeight + ';' + '--doc-page-margin:' + this.pageMargin + ';' + '--doc-hdr-h:' + (hdrH || 0) + 'px;' + '--doc-ftr-h:' + (ftrH || 0) + 'px;' + '--doc-hdr-pad:' + (hdrH ? '0.35in' : '0px') + ';' + '--doc-ftr-pad:' + (ftrH ? '0.35in' : '0px') + '}';
    }

    /** @page is a no-op inside shadow DOM, so the rule lives in <head>.
     *  Re-appended on every sync so it stays last in source order — the
     *  @page cascade is source-order per descriptor, so this rule wins
     *  over any other @page rule in the document.
     *
     *  The @page SIZE is pinned where the page box IS part of the design:
     *  explicit-fixed-size mode (width + height authored), scaled-fit
     *  mode (the named sheet the fit targets), and explicit pagination
     *  (the named size the cards share — so card and sheet agree on
     *  every print path, and the export path's chosen paper overrides
     *  BOTH with one later rule). For FLOWING documents no paper size is
     *  emitted at all — the true size comes from the user's preference,
     *  injected by the export path or chosen in the print dialog — so a
     *  flowing document never fights the paper it lands on.
     *  margin: 0 is emitted in every mode: it leaves Chrome no margin box
     *  to draw its date/URL/page-count header in, and the visual margin
     *  lives on the sheet's own padding. */
    _syncPrintPageRule() {
      const id = 'doc-page-print';
      let tag = document.getElementById(id);
      if (!tag) {
        tag = document.createElement('style');
        tag.id = id;
      }
      document.head.appendChild(tag);
      // Three print-geometry regimes:
      // - true-size: the page IS the design — pin its exact size.
      // - scaled-fit (content-width/height): the fit factor is computed
      //   against the NAMED paper's printable area, so that paper must
      //   stay pinned or the scaled content overflows a smaller sheet
      //   (the export path re-fits and re-pins at print time on top).
      // - default modes: no paper size — but landscape still needs the
      //   paper-agnostic 'size: landscape' keyword, because the size
      //   descriptor is what carries orientation; without it a landscape
      //   document prints portrait whenever nothing injects a size.
      const landscape = (this.getAttribute('orientation') || '').trim().toLowerCase() === 'landscape';
      // Explicit pagination pins the page box to the SAME values that
      // size the cards (the named size by default, the export path's
      // chosen paper when its later rule overrides both) — card and
      // sheet agree on every print path, and a mismatched real paper
      // shrinks-to-fit in the dialog instead of clipping a Letter card
      // on A4. Declared before the paginated read below so both derive
      // from one check.
      const paginatedNow = this.querySelector(':scope > .page') !== null;
      const sizeDescriptor = this._trueSizePx() ? 'size: ' + this.pageWidth + ' ' + this.pageHeight + '; ' : this._contentFit() ? 'size: ' + this.pageWidth + ' ' + this.pageHeight + '; ' : paginatedNow ? 'size: ' + this.pageWidth + ' ' + this.pageHeight + '; ' : landscape ? 'size: landscape; ' : '';
      // WebKit never repeats the thead/tfoot spacers that carry a flowing
      // document's vertical page margins (see WK_PRINT above), so pages
      // after the first print edge-to-edge there. Carry the VERTICAL
      // margins on @page for WebKit instead, and the shadow print CSS
      // trims the first-page spacers by the same amount (.sheet.wk-print
      // rules). Horizontal inset stays on the sheet's own padding in
      // every engine. Blink keeps margin: 0 (a nonzero margin there
      // re-opens the box Chrome draws its header furniture in). One cost,
      // learned in testing: Safari's own date/URL headers are a USER
      // dialog setting ("Print headers and footers") that renders in the
      // margin area when room exists — margin: 0 only suppressed it by
      // leaving no room, and no CSS controls it. The export dialog's
      // Safari guide teaches turning the setting off for flowing
      // documents. Explicitly paginated and fixed-size documents keep
      // margin: 0 everywhere: their pages ARE the sheet.
      const wkFlowing = WK_PRINT && !paginatedNow && !this._trueSizePx() && !this._contentFit();
      const marginDescriptor = wkFlowing ? 'margin: ' + this.pageMargin + ' 0; ' : 'margin: 0; ';
      // Shadow-internal marker (never serialized), kept in lockstep with
      // the @page decision above: the print CSS trims the first-page
      // spacers ONLY while @page actually carries the margins — a
      // true-size or scaled-fit sheet keeps margin: 0 and must keep its
      // spacers too. Re-synced here so attribute changes and pagination
      // flips move both together.
      if (this._sheet) this._sheet.classList.toggle('wk-print', wkFlowing);
      tag.textContent = '@page { ' + sizeDescriptor + marginDescriptor + '} ' + '@media print { html, body { margin: 0 !important; padding: 0 !important; background: none !important; height: auto !important; overflow: visible !important; } ' + 'h1,h2,h3,h4,h5,h6 { break-after: avoid; } ' + 'figure,pre,blockquote,img,svg,tr { break-inside: avoid; } ' + 'p,li { orphans: 3; widows: 3; } ' + '* { -webkit-print-color-adjust: exact; print-color-adjust: exact; ' + 'backdrop-filter: none !important; -webkit-backdrop-filter: none !important; } ' + '*, *::before, *::after { animation-delay: -99s !important; animation-duration: .001s !important; ' + 'animation-iteration-count: 1 !important; animation-fill-mode: both !important; ' + 'animation-play-state: running !important; transition-duration: 0s !important; } }';
    }

    /** Typographic defaults for document text: balance headings, avoid
     *  widowed/orphaned words in body copy (browsers without text-wrap
     *  support drop the declarations). Zero-specificity via :where() so
     *  any text-wrap authored on those elements wins; document-level so the
     *  rules reach the slotted (light DOM) content — shadow styles can't.
     *  data-omelette-injected marks the tag for the host editor to strip
     *  at serialize, so it is never written back as authored source. */
    _ensureTextWrapDefaults() {
      if (document.getElementById('doc-page-text-wrap')) return;
      const tag = document.createElement('style');
      tag.id = 'doc-page-text-wrap';
      tag.setAttribute('data-omelette-injected', '');
      tag.textContent = ':where(h1,h2,h3,h4,h5,h6){text-wrap:balance}' + ':where(p,li,blockquote,figcaption){text-wrap:pretty}';
      document.head.appendChild(tag);
    }

    /** Declares that this document owns its print CSS. The instant-PDF
     *  export checks for the meta by NAME PRESENCE alone (content is
     *  ignored) and skips its automatic print-CSS injections, so the
     *  component's @page geometry is never overridden by a heuristic.
     *  data-omelette-injected keeps it out of serialized source. */
    _ensureOwnsPrintMeta() {
      if (document.getElementById('doc-page-owns-print')) return;
      const tag = document.createElement('meta');
      tag.id = 'doc-page-owns-print';
      tag.name = 'omelette-owns-print';
      tag.content = 'true';
      tag.setAttribute('data-omelette-injected', '');
      document.head.appendChild(tag);
    }

    /** This page's valid true-size page box (explicit width AND height)
     *  as [w, h] px ints, or null when the mode is off. */
    _trueSizePx() {
      if (!safeLen(this.getAttribute('width'), null) || !safeLen(this.getAttribute('height'), null)) return null;
      const w = Math.round(toPx(this.pageWidth));
      const h = Math.round(toPx(this.pageHeight));
      return w > 0 && h > 0 ? [w, h] : null;
    }

    /** True-size pages (explicit width AND height) also declare the page
     *  box as the preview size: the in-app preview reads
     *  meta[name="omelette-fixed-size"] (content "W,H" in px ints) and
     *  scales the sheet into view — without it an 18in poster previews at
     *  true size with scrollbars. Never overrides an author-set meta
     *  (only the component's own id is managed). The meta is page-global
     *  while doc-page instances are not, so every sync recomputes the
     *  page-wide owner — the first connected true-size doc-page — and a
     *  non-true-size sibling's sync can never delete the owner's meta.
     *  Removed when no true-size page remains (the owner's disconnect
     *  re-syncs via any survivor) or when an author-set meta exists. */
    _syncFixedSizeMeta() {
      const id = 'doc-page-fixed-size';
      const own = document.getElementById(id);
      const authored = document.querySelector('meta[name="omelette-fixed-size"]:not([data-omelette-injected])');
      // The page-wide owner, not this instance: an upgraded true-size page
      // anywhere in the document keeps the meta alive and sized.
      let box = null;
      for (const el of document.querySelectorAll('doc-page')) {
        box = typeof el._trueSizePx === 'function' ? el._trueSizePx() : null;
        if (box) break;
      }
      if (!box || authored) {
        if (own) own.remove();
        return;
      }
      const tag = own || document.createElement('meta');
      tag.id = id;
      tag.name = 'omelette-fixed-size';
      tag.content = box[0] + ',' + box[1];
      tag.setAttribute('data-omelette-injected', '');
      if (!own) document.head.appendChild(tag);
    }

    /** This page's print-sizing mode: 'fixed' when an explicit width AND
     *  height are authored (the page is the design's own size), else the
     *  default paper in the authored orientation. */
    _printSizingMode() {
      if (this._trueSizePx()) return 'fixed';
      const landscape = (this.getAttribute('orientation') || '').trim().toLowerCase() === 'landscape';
      return landscape ? 'default-landscape' : 'default-portrait';
    }

    /** Announces the print-sizing mode to the host app:
     *  meta[name="omelette-print-sizing"] with content 'default-portrait',
     *  'default-landscape', or 'fixed' (fixed pages also carry the
     *  omelette-fixed-size meta with the page box in px). The export path
     *  probes it to decide what true paper size to inject at print time —
     *  in the default modes the component emits no paper size of its own.
     *  Same page-global ownership rules as the fixed-size meta above:
     *  first connected doc-page owns it, an authored meta is never
     *  overridden, removed when no doc-page remains. */
    _syncPrintSizingMeta() {
      const id = 'doc-page-print-sizing';
      const own = document.getElementById(id);
      const authored = document.querySelector('meta[name="omelette-print-sizing"]:not([data-omelette-injected])');
      // A fixed page wins outright (mirroring the fixed-size loop above,
      // so the two metas can never contradict each other in a mixed
      // multi-page document); otherwise the first page's mode holds.
      let mode = null;
      for (const el of document.querySelectorAll('doc-page')) {
        if (typeof el._printSizingMode !== 'function') continue;
        const m = el._printSizingMode();
        if (m === 'fixed') {
          mode = m;
          break;
        }
        if (mode === null) mode = m;
      }
      if (!mode || authored) {
        if (own) own.remove();
        return;
      }
      // A deck-stage that connected first injected its own meta and
      // defers to any existing one — take it over, or the document ends
      // up with two conflicting injected metas (a doc-page page is the
      // document; the deck re-ensures its meta if every doc-page leaves).
      const deckMeta = document.getElementById('deck-stage-print-sizing');
      if (deckMeta) deckMeta.remove();
      const tag = own || document.createElement('meta');
      tag.id = id;
      tag.name = 'omelette-print-sizing';
      tag.content = mode;
      tag.setAttribute('data-omelette-injected', '');
      if (!own) document.head.appendChild(tag);
    }
    _scheduleMeasure() {
      if (this._raf) return;
      this._raf = requestAnimationFrame(() => {
        this._raf = null;
        this._measure();
      });
    }

    /** Slot heights feed the print spacers (--doc-hdr-h / --doc-ftr-h), so
     *  they re-measure on content mutation, resize, and font load. The
     *  same pass detects explicit pagination (direct .page children) and
     *  toggles the sheet between the flowing-document card and the
     *  page-per-card stack — content edits can add or remove pages at any
     *  time, so this tracks the same mutations the measurement does. */
    _measure() {
      const hdr = this.querySelector(':scope > [slot="header"]');
      const ftr = this.querySelector(':scope > [slot="footer"]');
      const wasPaginated = this._sheet.classList.contains('paginated');
      this._sheet.classList.toggle('paginated', this.querySelector(':scope > .page') !== null);
      // The WebKit @page margin is flowing-only, so a pagination flip
      // must re-emit the rule (content edits can add or remove .page
      // sections at any time).
      if (this._sheet.classList.contains('paginated') !== wasPaginated) {
        this._syncPrintPageRule();
      }
      this._syncSize(hdr ? hdr.offsetHeight : 0, ftr ? ftr.offsetHeight : 0);
    }
  }
  if (!customElements.get('doc-page')) {
    customElements.define('doc-page', DocPage);
  }
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "doc-page.js", error: String((e && e.message) || e) }); }

// ui_kits/website/parts.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* BluePixel marketing site — UI kit parts. Namespaced on window.BPSite.
   Uses design-system tokens (var(--bp-*)) + the Logo component from the bundle. */
const {
  useState
} = React;
const DS = window.BluePixelDesignSystem_ced77e || {};
const Logo = DS.Logo || (() => /*#__PURE__*/React.createElement("b", {
  style: {
    fontFamily: 'var(--bp-font-title)',
    fontWeight: 700
  }
}, "BLUEPIXEL"));
const Glyph = DS.Glyph || (() => null);
const Pixelio = window.Group43768 || (() => null);
const PixelMark = ({
  size = 30
}) => /*#__PURE__*/React.createElement("div", {
  style: {
    width: size,
    height: size,
    background: 'var(--bp-blue)',
    flex: 'none'
  }
});

/* ─── Button ─── */
function Btn({
  children,
  kind = 'primary',
  href = '#',
  onClick
}) {
  const [h, setH] = useState(false);
  const base = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: 8,
    fontFamily: 'var(--bp-font-body)',
    fontWeight: 700,
    fontSize: 15,
    padding: '13px 24px',
    borderRadius: 'var(--bp-radius-md)',
    cursor: 'pointer',
    transition: 'all var(--bp-dur) var(--bp-ease)',
    border: '2px solid transparent',
    textDecoration: 'none'
  };
  const styles = kind === 'primary' ? {
    ...base,
    background: h ? 'var(--bp-blue-600)' : 'var(--bp-blue)',
    color: '#fff',
    boxShadow: h ? 'var(--bp-shadow-blue)' : 'none',
    transform: h ? 'translateY(-1px)' : 'none'
  } : kind === 'ghost-dark' ? {
    ...base,
    background: 'transparent',
    color: '#fff',
    borderColor: h ? '#fff' : 'rgba(255,255,255,.35)'
  } : {
    ...base,
    background: 'transparent',
    color: 'var(--bp-ink)',
    borderColor: h ? 'var(--bp-blue)' : 'var(--bp-border)'
  };
  return /*#__PURE__*/React.createElement("a", {
    href: href,
    onClick: onClick,
    style: styles,
    onMouseEnter: () => setH(true),
    onMouseLeave: () => setH(false)
  }, children);
}

/* ─── Nav ─── */
function Nav() {
  const [lang, setLang] = useState('Eng');
  const links = ['About', 'Services', 'Capabilities', 'Work'];
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 50,
      background: 'rgba(255,255,255,.86)',
      backdropFilter: 'blur(14px)',
      borderBottom: '1px solid var(--bp-border)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap",
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 32,
      height: 76
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#top",
    style: {
      display: 'flex',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    property1: "dark",
    style: {
      transform: 'scale(.92)',
      transformOrigin: 'left center'
    }
  })), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      gap: 28,
      marginLeft: 20
    }
  }, links.map((l, i) => /*#__PURE__*/React.createElement(NavLink, {
    key: l,
    label: l,
    active: i === 0
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginLeft: 'auto',
      display: 'flex',
      alignItems: 'center',
      gap: 18
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      border: '1px solid var(--bp-border)',
      borderRadius: 'var(--bp-radius-pill)',
      overflow: 'hidden',
      fontSize: 13,
      fontWeight: 700
    }
  }, ['Eng', 'Esp'].map(x => /*#__PURE__*/React.createElement("button", {
    key: x,
    onClick: () => setLang(x),
    style: {
      border: 0,
      cursor: 'pointer',
      padding: '6px 14px',
      background: lang === x ? 'var(--bp-blue)' : 'transparent',
      color: lang === x ? '#fff' : 'var(--bp-ink-soft)',
      fontFamily: 'var(--bp-font-body)',
      fontWeight: 700
    }
  }, x))), /*#__PURE__*/React.createElement(Btn, {
    kind: "primary",
    href: "#contact"
  }, "Contact"))));
}
function NavLink({
  label,
  active
}) {
  const [h, setH] = useState(false);
  return /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      fontSize: 15,
      fontWeight: active ? 700 : 500,
      color: active || h ? 'var(--bp-blue)' : 'var(--bp-ink)',
      position: 'relative',
      paddingBottom: 2
    },
    onMouseEnter: () => setH(true),
    onMouseLeave: () => setH(false)
  }, label, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      left: 0,
      bottom: -4,
      height: 2,
      width: active || h ? '100%' : 0,
      background: 'var(--bp-blue)',
      transition: 'width var(--bp-dur) var(--bp-ease)'
    }
  }));
}

/* ─── Hero ─── */
function Hero() {
  return /*#__PURE__*/React.createElement("section", {
    id: "top",
    style: {
      background: 'var(--bp-gradient-cover)',
      color: '#fff',
      position: 'relative',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    "aria-hidden": true,
    style: {
      position: 'absolute',
      inset: 0,
      pointerEvents: 'none'
    }
  }, [['8%', '22%', 'var(--bp-cyan)', 14], ['90%', '30%', 'var(--bp-lime)', 18], ['82%', '70%', 'var(--bp-magenta)', 12], ['14%', '72%', 'var(--bp-purple)', 16], ['50%', '12%', 'var(--bp-green)', 10]].map((p, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      position: 'absolute',
      left: p[0],
      top: p[1],
      width: p[3],
      height: p[3],
      background: p[2],
      opacity: .85,
      transform: `rotate(${i * 18}deg)`
    }
  }))), /*#__PURE__*/React.createElement("div", {
    className: "wrap",
    style: {
      padding: '110px 40px 120px',
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      gap: 40
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 640,
      flex: '1 1 auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow",
    style: {
      color: 'var(--bp-cyan)'
    }
  }, "Digital Evolution Partner"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: 60,
      fontWeight: 800,
      marginTop: 20
    }
  }, "We Build, Evolve, and Scale ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--bp-cyan)'
    }
  }, "AI-Powered"), " Digital Platforms"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 20,
      lineHeight: 1.5,
      color: 'rgba(255,255,255,.82)',
      marginTop: 24,
      maxWidth: 620
    }
  }, "A long-term technology partner for companies investing in digital products, data, and AI."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 14,
      marginTop: 36,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Btn, {
    kind: "primary",
    href: "#model"
  }, "Explore our model"), /*#__PURE__*/React.createElement(Btn, {
    kind: "ghost-dark",
    href: "#contact"
  }, "Talk to our team"))), /*#__PURE__*/React.createElement("div", {
    "aria-hidden": true,
    style: {
      flex: '0 0 300px',
      height: 300,
      overflow: 'hidden',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      transform: 'scale(.52)',
      transformOrigin: 'center'
    }
  }, /*#__PURE__*/React.createElement(Pixelio, null)))));
}

/* ─── Client logos strip (wordmark placeholders) ─── */
function Logos() {
  const names = ['Bimbo', 'LATAM', 'Sanborns', 'Grupo Bimbo', 'Nutresa', 'Cemex'];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--bp-surface)',
      borderBottom: '1px solid var(--bp-border)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap",
    style: {
      padding: '32px 40px',
      display: 'flex',
      alignItems: 'center',
      gap: 40,
      flexWrap: 'wrap',
      justifyContent: 'center'
    }
  }, names.map(n => /*#__PURE__*/React.createElement("span", {
    key: n,
    style: {
      fontFamily: 'var(--bp-font-title)',
      fontWeight: 700,
      fontSize: 22,
      color: 'var(--bp-ink)',
      opacity: .32
    }
  }, n))));
}

/* ─── Capabilities ─── */
const CAPS = [{
  t: 'Custom Software Development',
  c: 'var(--bp-blue)',
  pts: ['Scalable web and mobile platforms', 'Cloud-native and modular architecture', 'API integrations with existing systems', 'CI/CD pipelines and deployment automation']
}, {
  t: 'UX Research & Product Strategy',
  c: 'var(--bp-magenta)',
  pts: ['Business-driven product strategy', 'User research and behavioral insights', 'User-centered platform design', 'Digital twins, UX audits & friction analysis']
}, {
  t: 'Data & Analytics',
  c: 'var(--bp-green)',
  pts: ['AI-ready data architecture', 'Executive & operational dashboards', 'Real-time business intelligence', 'Conversational interfaces on live data']
}, {
  t: 'AI Agents & Automation',
  c: 'var(--bp-purple)',
  pts: ['AI agents trained on real business data', 'Workflow & process automation', 'AI copilots for critical operations', 'Embedded AI within digital platforms']
}];
function Capabilities() {
  const [open, setOpen] = useState(0);
  return /*#__PURE__*/React.createElement("section", {
    id: "capabilities",
    style: {
      padding: '96px 0',
      background: 'var(--bp-surface-alt)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow"
  }, "Capabilities"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 40,
      fontWeight: 800,
      marginTop: 14,
      maxWidth: 760
    }
  }, "Everything your platform needs to launch, scale, and evolve intelligently."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 44,
      display: 'grid',
      gridTemplateColumns: '1fr',
      gap: 14
    }
  }, CAPS.map((cap, i) => /*#__PURE__*/React.createElement("div", {
    key: cap.t,
    onClick: () => setOpen(open === i ? -1 : i),
    style: {
      background: '#fff',
      borderRadius: 'var(--bp-radius-lg)',
      padding: '26px 30px',
      cursor: 'pointer',
      boxShadow: open === i ? 'var(--bp-shadow-md)' : 'var(--bp-shadow-sm)',
      transition: 'box-shadow var(--bp-dur) var(--bp-ease)',
      borderLeft: `5px solid ${cap.c}`
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: 24,
      fontWeight: 700,
      flex: 1
    }
  }, cap.t), /*#__PURE__*/React.createElement("span", {
    style: {
      color: cap.c,
      fontSize: 26,
      transition: 'transform var(--bp-dur)',
      transform: open === i ? 'rotate(45deg)' : 'none'
    }
  }, "+")), /*#__PURE__*/React.createElement("div", {
    style: {
      maxHeight: open === i ? 260 : 0,
      overflow: 'hidden',
      transition: 'max-height var(--bp-dur-slow) var(--bp-ease)'
    }
  }, /*#__PURE__*/React.createElement("ul", {
    style: {
      margin: '18px 0 4px',
      paddingLeft: 0,
      listStyle: 'none',
      columns: 2,
      columnGap: 40
    }
  }, cap.pts.map(p => /*#__PURE__*/React.createElement("li", {
    key: p,
    style: {
      fontSize: 15,
      color: 'var(--bp-ink-soft)',
      padding: '6px 0 6px 20px',
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      left: 0,
      top: 12,
      width: 7,
      height: 7,
      background: cap.c
    }
  }), p)))))))));
}

/* ─── Service model ─── */
const MODEL = [{
  k: '01',
  t: 'Build',
  s: 'Platform Development',
  d: 'We design and build scalable digital platforms, validated with real users and engineered to integrate AI agents from day one.'
}, {
  k: '02',
  t: 'Futureproof',
  s: 'Continuous Evolution',
  d: 'This is where the real work begins. We continuously evolve, measure, and amplify your platform’s impact through real-world data and a living roadmap.'
}, {
  k: '03',
  t: 'Agentic',
  s: 'Operational Intelligence',
  d: 'Every platform we build is agentic—powered by integrated AI that learns from user behavior and automates operational workflows.'
}];
function ServiceModel() {
  return /*#__PURE__*/React.createElement("section", {
    id: "model",
    style: {
      padding: '100px 0',
      background: 'var(--bp-navy)',
      color: '#fff'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow",
    style: {
      color: 'var(--bp-cyan)'
    }
  }, "Our Service Model"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 40,
      fontWeight: 800,
      marginTop: 14
    }
  }, "One partner across the whole lifecycle"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 52,
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 24
    }
  }, MODEL.map(m => /*#__PURE__*/React.createElement("div", {
    key: m.k,
    style: {
      background: 'linear-gradient(160deg, rgba(45,201,216,.10), rgba(72,101,232,.06))',
      border: '1px solid rgba(255,255,255,.12)',
      borderRadius: 'var(--bp-radius-xl)',
      padding: '32px 30px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--bp-font-display)',
      fontSize: 34,
      color: 'var(--bp-cyan)'
    }
  }, m.k), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: 26,
      fontWeight: 800,
      marginTop: 22,
      textTransform: 'uppercase',
      letterSpacing: '.02em'
    }
  }, m.t), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 15,
      fontWeight: 700,
      color: 'var(--bp-cyan)',
      marginTop: 4
    }
  }, m.s), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 15,
      lineHeight: 1.55,
      color: 'rgba(255,255,255,.78)',
      marginTop: 16
    }
  }, m.d))))));
}

/* ─── Featured work ─── */
const WORK = [{
  t: 'Data-driven platforms for a global consumer goods leader',
  tags: 'UX/UI • Data & Analytics • Branding',
  c: 'var(--bp-blue)'
}, {
  t: 'Optimizing one of LATAM’s leading loyalty platforms',
  tags: 'UX/UI • Web Development • Responsive',
  c: 'var(--bp-magenta)'
}, {
  t: 'Reinventing digital commerce for an iconic retail brand',
  tags: 'UX/UI • Mobile App • Web Development',
  c: 'var(--bp-purple)'
}];
function Work() {
  return /*#__PURE__*/React.createElement("section", {
    id: "work",
    style: {
      padding: '96px 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow"
  }, "Our featured work"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 40,
      fontWeight: 800,
      marginTop: 14,
      maxWidth: 820
    }
  }, "Platforms that deliver measurable business impact \u2014 not just great interfaces."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 44,
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 24
    }
  }, WORK.map(w => /*#__PURE__*/React.createElement(WorkCard, _extends({
    key: w.t
  }, w))))));
}
function WorkCard({
  t,
  tags,
  c
}) {
  const [h, setH] = useState(false);
  return /*#__PURE__*/React.createElement("a", {
    href: "#",
    onMouseEnter: () => setH(true),
    onMouseLeave: () => setH(false),
    style: {
      display: 'block',
      borderRadius: 'var(--bp-radius-lg)',
      overflow: 'hidden',
      border: '1px solid var(--bp-border)',
      background: '#fff',
      boxShadow: h ? 'var(--bp-shadow-lg)' : 'var(--bp-shadow-sm)',
      transform: h ? 'translateY(-4px)' : 'none',
      transition: 'all var(--bp-dur) var(--bp-ease)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: 180,
      background: `linear-gradient(150deg, ${c}, var(--bp-navy))`,
      position: 'relative',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      right: -20,
      bottom: -20,
      width: 120,
      height: 120,
      background: 'rgba(255,255,255,.12)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 24,
      top: 24,
      width: 26,
      height: 26,
      background: '#fff'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '22px 24px'
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: 19,
      fontWeight: 700,
      lineHeight: 1.25
    }
  }, t), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      fontWeight: 700,
      color: 'var(--bp-ink-soft)',
      marginTop: 14,
      letterSpacing: '.02em'
    }
  }, tags)));
}

/* ─── Contact CTA ─── */
function Contact() {
  return /*#__PURE__*/React.createElement("section", {
    id: "contact",
    style: {
      padding: '90px 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--bp-gradient-cover)',
      borderRadius: 'var(--bp-radius-xl)',
      padding: '64px 56px',
      color: '#fff',
      display: 'flex',
      alignItems: 'center',
      gap: 40,
      flexWrap: 'wrap',
      position: 'relative',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: '1 1 380px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow",
    style: {
      color: 'var(--bp-cyan)'
    }
  }, "Let\u2019s talk"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 38,
      fontWeight: 800,
      marginTop: 14
    }
  }, "Do you want to start a project together?"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 17,
      color: 'rgba(255,255,255,.8)',
      marginTop: 14
    }
  }, "Fill out the form and we\u2019ll get back to you within 24 hours.")), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: '0 0 auto',
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(Btn, {
    kind: "primary",
    href: "mailto:hello@bluepixel.mx"
  }, "hello@bluepixel.mx"), /*#__PURE__*/React.createElement(Btn, {
    kind: "ghost-dark",
    href: "#"
  }, "Book a call")))));
}

/* ─── Footer ─── */
function Footer() {
  const cols = [['Capabilities', ['Custom Software', 'UX Research & Strategy', 'Data & Analytics', 'AI Agents & Automation']], ['Services', ['Build', 'Futureproof', 'Agentic']], ['Company', ['About Us', 'Case Studies', 'Careers', 'Blog']]];
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: 'var(--bp-navy-deep)',
      color: 'rgba(255,255,255,.7)',
      padding: '64px 0 40px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap",
    style: {
      display: 'grid',
      gridTemplateColumns: '1.5fr 1fr 1fr 1fr',
      gap: 40
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Logo, {
    property1: "white",
    style: {
      transform: 'scale(.92)',
      transformOrigin: 'left center'
    }
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 18,
      fontSize: 14,
      maxWidth: 240
    }
  }, "Software that Feels Right. A UX/UI & software consultancy building AI-powered platforms."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 14,
      marginTop: 20,
      fontSize: 13,
      fontWeight: 700
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      color: 'var(--bp-cyan)'
    }
  }, "LinkedIn"), /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      color: 'var(--bp-cyan)'
    }
  }, "Instagram"), /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      color: 'var(--bp-cyan)'
    }
  }, "Facebook"))), cols.map(([h, items]) => /*#__PURE__*/React.createElement("div", {
    key: h
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--bp-font-title)',
      fontWeight: 700,
      color: '#fff',
      fontSize: 14,
      textTransform: 'uppercase',
      letterSpacing: '.12em'
    }
  }, h), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10,
      marginTop: 16
    }
  }, items.map(x => /*#__PURE__*/React.createElement("a", {
    key: x,
    href: "#",
    style: {
      fontSize: 14
    }
  }, x)))))), /*#__PURE__*/React.createElement("div", {
    className: "wrap",
    style: {
      marginTop: 48,
      paddingTop: 24,
      borderTop: '1px solid rgba(255,255,255,.12)',
      fontSize: 13,
      display: 'flex',
      justifyContent: 'space-between',
      flexWrap: 'wrap',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("span", null, "\xA9 2026 BluePixel. All rights reserved."), /*#__PURE__*/React.createElement("span", null, "hello@bluepixel.mx \xB7 Privacy \xB7 Terms")));
}
window.BPSite = {
  Nav,
  Hero,
  Logos,
  Capabilities,
  ServiceModel,
  Work,
  Contact,
  Footer,
  Btn
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/parts.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Avatar = __ds_scope.Avatar;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Camera = __ds_scope.Camera;

__ds_ns.Confetti = __ds_scope.Confetti;

__ds_ns.DevicesAppleIPadAir4 = __ds_scope.DevicesAppleIPadAir4;

__ds_ns.DevicesAppleIPhone12ProMax = __ds_scope.DevicesAppleIPhone12ProMax;

__ds_ns.FormatoDePag = __ds_scope.FormatoDePag;

__ds_ns.Gif = __ds_scope.Gif;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.KeyboardArrowDownFilled = __ds_scope.KeyboardArrowDownFilled;

__ds_ns.Logo = __ds_scope.Logo;

__ds_ns.LogoGridHover = __ds_scope.LogoGridHover;

__ds_ns.Name = __ds_scope.Name;

__ds_ns.Scribble = __ds_scope.Scribble;

__ds_ns.Scribble2 = __ds_scope.Scribble2;

__ds_ns.SectionAgradecimiento = __ds_scope.SectionAgradecimiento;

__ds_ns.SideNavBar = __ds_scope.SideNavBar;

__ds_ns.Speaker = __ds_scope.Speaker;

__ds_ns.Star = __ds_scope.Star;

__ds_ns.Value = __ds_scope.Value;

__ds_ns.ValueFaster = __ds_scope.ValueFaster;

__ds_ns.Wow = __ds_scope.Wow;

})();
