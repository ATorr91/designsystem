import { KeyboardArrowDownFilled } from './KeyboardArrowDownFilled.jsx';

// figma node: 101:14389 Side nav bar
export function SideNavBar(_p = {}) {
  const props = _p;
  return (
    <div className={props.className} style={{
      width: 236,
      height: 928,
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 236,
        height: 928,
        opacity: 0.5,
        backgroundColor: "rgb(214,227,255)",
      }} />
      <span style={{
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
        color: "rgb(30,43,71)",
      }}>{props.text1 ?? "Settings"}</span>
      <div style={{
        position: "absolute",
        left: 0,
        top: 124,
        width: 236,
        height: 48,
        overflow: "hidden",
      }}>
        <div style={{
          position: "absolute",
          left: 24,
          top: 12,
          width: 180,
          height: 24,
          overflow: "hidden",
        }}>
          <div style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: 180,
            height: 24,
            overflow: "hidden",
          }}>
            <div style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: 180,
              height: 24,
              display: "flex",
              flexDirection: "row",
              gap: 8,
              alignItems: "flex-start",
              flexWrap: "nowrap",
            }}>
              <div style={{
                position: "relative",
                width: 159,
                display: "flex",
                flexDirection: "row",
                gap: 8,
                alignItems: "center",
                flexWrap: "nowrap",
                flexShrink: 0,
                alignSelf: "stretch",
              }}>
                <span style={{
                  position: "relative",
                  fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                  fontWeight: 400,
                  fontSize: 16,
                  lineHeight: "100%",
                  color: "rgb(63,84,130)",
                  flexShrink: 0,
                  whiteSpace: "nowrap",
                }}>{props.text2 ?? "Organization"}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div style={{
        position: "absolute",
        left: 0,
        top: 72,
        width: 236,
        height: 48,
        overflow: "hidden",
      }}>
        <div style={{
          position: "absolute",
          left: 24,
          top: 12,
          width: 188,
          height: 24,
          overflow: "hidden",
        }}>
          <div style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: 188,
            display: "flex",
            flexDirection: "row",
            gap: 8,
            alignItems: "center",
            flexWrap: "nowrap",
          }}>
            <div style={{
              position: "relative",
              width: 159,
              height: 24,
              display: "flex",
              flexDirection: "row",
              gap: 8,
              alignItems: "center",
              flexWrap: "nowrap",
              flexShrink: 0,
            }}>
              <span style={{
                position: "relative",
                fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 400,
                fontSize: 16,
                lineHeight: "100%",
                color: "rgb(63,84,130)",
                flexShrink: 0,
                whiteSpace: "nowrap",
              }}>{props.text3 ?? "My Settings"}</span>
            </div>
          </div>
        </div>
      </div>
      <div style={{
        position: "absolute",
        left: 0,
        top: 424,
        width: 236,
        height: 48,
        overflow: "hidden",
      }}>
        <div style={{
          position: "absolute",
          left: 24,
          top: 12,
          width: 188,
          height: 19,
          overflow: "hidden",
        }}>
          <div style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: 188,
            display: "flex",
            flexDirection: "row",
            gap: 8,
            alignItems: "center",
            flexWrap: "nowrap",
          }}>
            <div style={{
              position: "relative",
              width: 159,
              display: "flex",
              flexDirection: "row",
              gap: 8,
              alignItems: "flex-start",
              flexWrap: "nowrap",
              flexShrink: 0,
            }}>
              <span style={{
                position: "relative",
                fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 400,
                fontSize: 16,
                lineHeight: "100%",
                color: "rgb(63,84,130)",
                flexShrink: 0,
                whiteSpace: "nowrap",
              }}>{props.text4 ?? "Organizational Units"}</span>
            </div>
          </div>
        </div>
      </div>
      <div style={{
        position: "absolute",
        left: 0,
        top: 528,
        width: 236,
        height: 48,
        overflow: "hidden",
      }}>
        <div style={{
          position: "absolute",
          left: 24,
          top: 12,
          width: 188,
          height: 19,
          overflow: "hidden",
        }}>
          <div style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: 188,
            display: "flex",
            flexDirection: "row",
            gap: 8,
            alignItems: "center",
            flexWrap: "nowrap",
          }}>
            <div style={{
              position: "relative",
              width: 159,
              display: "flex",
              flexDirection: "row",
              gap: 8,
              alignItems: "center",
              flexWrap: "nowrap",
              flexShrink: 0,
            }}>
              <span style={{
                position: "relative",
                width: 127,
                fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 400,
                fontSize: 16,
                lineHeight: "100%",
                color: "rgb(63,84,130)",
                flexShrink: 0,
              }}>Job Titles</span>
            </div>
          </div>
        </div>
      </div>
      <div style={{
        position: "absolute",
        left: 0,
        top: 476,
        width: 236,
        height: 48,
        overflow: "hidden",
      }}>
        <div style={{
          position: "absolute",
          left: 24,
          top: 12,
          width: 188,
          height: 19,
          overflow: "hidden",
        }}>
          <div style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: 188,
            display: "flex",
            flexDirection: "row",
            gap: 8,
            alignItems: "center",
            flexWrap: "nowrap",
          }}>
            <div style={{
              position: "relative",
              width: 159,
              display: "flex",
              flexDirection: "row",
              gap: 8,
              alignItems: "center",
              flexWrap: "nowrap",
              flexShrink: 0,
            }}>
              <span style={{
                position: "relative",
                width: 127,
                fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 400,
                fontSize: 16,
                lineHeight: "100%",
                color: "rgb(63,84,130)",
                flexShrink: 0,
              }}>General Units</span>
            </div>
          </div>
        </div>
      </div>
      <div style={{
        position: "absolute",
        left: 0,
        top: 580,
        width: 236,
        height: 48,
        overflow: "hidden",
      }}>
        <div style={{
          position: "absolute",
          left: 24,
          top: 12,
          width: 188,
          height: 19,
          overflow: "hidden",
        }}>
          <div style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: 188,
            display: "flex",
            flexDirection: "row",
            gap: 8,
            alignItems: "center",
            flexWrap: "nowrap",
          }}>
            <div style={{
              position: "relative",
              width: 159,
              display: "flex",
              flexDirection: "row",
              gap: 8,
              alignItems: "center",
              flexWrap: "nowrap",
              flexShrink: 0,
            }}>
              <span style={{
                position: "relative",
                width: 127,
                fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 400,
                fontSize: 16,
                lineHeight: "100%",
                color: "rgb(63,84,130)",
                flexShrink: 0,
              }}>Users</span>
            </div>
          </div>
        </div>
      </div>
      <div style={{
        position: "absolute",
        left: 0,
        top: 176,
        width: 236,
        height: 48,
        overflow: "hidden",
      }}>
        <div style={{
          position: "absolute",
          left: 24,
          top: 12,
          width: 188,
          height: 24,
          overflow: "hidden",
        }}>
          <div style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: 188,
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "nowrap",
          }}>
            <div style={{
              position: "relative",
              width: 159,
              display: "flex",
              flexDirection: "row",
              gap: 8,
              alignItems: "center",
              flexWrap: "nowrap",
              flexShrink: 0,
            }}>
              <span style={{
                position: "relative",
                width: 127,
                fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 400,
                fontSize: 16,
                lineHeight: "100%",
                color: "rgb(63,84,130)",
                flexShrink: 0,
              }}>Business Units</span>
            </div>
            <div style={{
                position: "relative",
                width: 24,
                height: 24,
                transform: "matrix(-1,0,0,-1,0,0)",
                flexShrink: 0,
                color: "rgb(255,255,255)",
              }}>{props.icon1 ?? <KeyboardArrowDownFilled />}</div>
          </div>
        </div>
      </div>
      <div style={{
        position: "absolute",
        left: 0,
        top: 256,
        width: 236,
        height: 32,
        overflow: "hidden",
      }}>
        <div style={{
          position: "absolute",
          left: 32,
          top: 4,
          width: 156,
          height: 24,
          overflow: "hidden",
        }}>
          <div style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: 156,
            height: 24,
            display: "flex",
            flexDirection: "row",
            gap: 8,
            alignItems: "center",
            flexWrap: "nowrap",
          }}>
            <div style={{
              position: "relative",
              display: "flex",
              flexDirection: "row",
              gap: 8,
              alignItems: "center",
              flexWrap: "nowrap",
              flexShrink: 0,
            }}>
              <span style={{
                position: "relative",
                fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 400,
                fontSize: 16,
                whiteSpace: "nowrap",
                lineHeight: "100%",
                color: "rgb(30,43,71)",
                flexShrink: 0,
              }}>General</span>
            </div>
          </div>
        </div>
      </div>
      <div style={{
        position: "absolute",
        left: 0,
        top: 224,
        width: 236,
        height: 32,
        overflow: "hidden",
      }}>
        <div style={{
          position: "absolute",
          left: 32,
          top: 4,
          width: 156,
          height: 24,
          overflow: "hidden",
        }}>
          <div style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: 156,
            height: 24,
            display: "flex",
            flexDirection: "row",
            gap: 8,
            alignItems: "center",
            flexWrap: "nowrap",
          }}>
            <div style={{
              position: "relative",
              display: "flex",
              flexDirection: "row",
              gap: 8,
              alignItems: "center",
              flexWrap: "nowrap",
              flexShrink: 0,
            }}>
              <span style={{
                position: "relative",
                fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 400,
                fontSize: 16,
                whiteSpace: "nowrap",
                lineHeight: "100%",
                color: "rgb(30,43,71)",
                flexShrink: 0,
              }}>View All</span>
            </div>
          </div>
        </div>
      </div>
      <div style={{
        position: "absolute",
        left: 0,
        top: 288,
        width: 236,
        height: 32,
        overflow: "hidden",
      }}>
        <div style={{
          position: "absolute",
          left: 32,
          top: 4,
          width: 156,
          height: 24,
          overflow: "hidden",
        }}>
          <div style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: 156,
            height: 24,
            display: "flex",
            flexDirection: "row",
            gap: 8,
            alignItems: "center",
            flexWrap: "nowrap",
          }}>
            <div style={{
              position: "relative",
              display: "flex",
              flexDirection: "row",
              gap: 8,
              alignItems: "center",
              flexWrap: "nowrap",
              flexShrink: 0,
            }}>
              <span style={{
                position: "relative",
                fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 400,
                fontSize: 16,
                whiteSpace: "nowrap",
                lineHeight: "100%",
                color: "rgb(30,43,71)",
                flexShrink: 0,
              }}>Branding</span>
            </div>
          </div>
        </div>
      </div>
      <div style={{
        position: "absolute",
        left: 0,
        top: 320,
        width: 236,
        height: 32,
        overflow: "hidden",
      }}>
        <div style={{
          position: "absolute",
          left: 32,
          top: 4,
          width: 156,
          height: 24,
          overflow: "hidden",
        }}>
          <div style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: 156,
            height: 24,
            display: "flex",
            flexDirection: "row",
            gap: 8,
            alignItems: "center",
            flexWrap: "nowrap",
          }}>
            <div style={{
              position: "relative",
              display: "flex",
              flexDirection: "row",
              gap: 8,
              alignItems: "center",
              flexWrap: "nowrap",
              flexShrink: 0,
            }}>
              <span style={{
                position: "relative",
                fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 400,
                fontSize: 16,
                whiteSpace: "nowrap",
                lineHeight: "100%",
                color: "rgb(30,43,71)",
                flexShrink: 0,
              }}>Calendars</span>
            </div>
          </div>
        </div>
      </div>
      <div style={{
        position: "absolute",
        left: 0,
        top: 352,
        width: 236,
        height: 32,
        overflow: "hidden",
      }}>
        <div style={{
          position: "absolute",
          left: 32,
          top: 4,
          width: 156,
          height: 24,
          overflow: "hidden",
        }}>
          <div style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: 156,
            height: 24,
            display: "flex",
            flexDirection: "row",
            gap: 8,
            alignItems: "center",
            flexWrap: "nowrap",
          }}>
            <div style={{
              position: "relative",
              display: "flex",
              flexDirection: "row",
              gap: 8,
              alignItems: "center",
              flexWrap: "nowrap",
              flexShrink: 0,
            }}>
              <span style={{
                position: "relative",
                fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 400,
                fontSize: 16,
                whiteSpace: "nowrap",
                lineHeight: "100%",
                color: "rgb(30,43,71)",
                flexShrink: 0,
              }}>Products</span>
            </div>
          </div>
        </div>
      </div>
      <div style={{
        position: "absolute",
        left: 0,
        top: 388,
        width: 236,
        height: 32,
        overflow: "hidden",
      }}>
        <div style={{
          position: "absolute",
          left: 32,
          top: 4,
          width: 156,
          height: 24,
          overflow: "hidden",
        }}>
          <div style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: 156,
            height: 24,
            display: "flex",
            flexDirection: "row",
            gap: 8,
            alignItems: "center",
            flexWrap: "nowrap",
          }}>
            <div style={{
              position: "relative",
              display: "flex",
              flexDirection: "row",
              gap: 8,
              alignItems: "center",
              flexWrap: "nowrap",
              flexShrink: 0,
            }}>
              <span style={{
                position: "relative",
                fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 400,
                fontSize: 16,
                whiteSpace: "nowrap",
                lineHeight: "100%",
                color: "rgb(30,43,71)",
                flexShrink: 0,
              }}>Related Users</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default SideNavBar;
