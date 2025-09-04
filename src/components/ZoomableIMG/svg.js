import React, { useEffect, useRef } from "react";
import svgPanZoom from "svg-pan-zoom";

export default function ZoomableSVG({ src, alt, height = "500px" }) {
  const containerRef = useRef(null);

  useEffect(() => {
    let panZoomInstance;

    if (containerRef.current) {
      const objectEl = containerRef.current;

      objectEl.addEventListener("load", () => {
        const svgDoc = objectEl.contentDocument;
        const svgEl = svgDoc.querySelector("svg");

        if (svgEl) {
          // 🔒 Force light theme inside SVG
          const style = document.createElement("style");
          style.textContent = `
            * {
              color-scheme: light !important;
              forced-color-adjust: none !important;
            }
            svg {
              background-color: white !important;
              color: black !important;
            }
          `;
          svgEl.insertBefore(style, svgEl.firstChild);

          // Enable zoom/pan
          panZoomInstance = svgPanZoom(svgEl, {
            zoomEnabled: true,
            controlIconsEnabled: true,
            fit: true,
            center: true,
          });
        }
      });
    }

    return () => {
      if (panZoomInstance) {
        panZoomInstance.destroy();
      }
    };
  }, []);

  return (
    <object
      ref={containerRef}
      type="image/svg+xml"
      data={src}
      aria-label={alt}
      style={{ width: "100%", height }}
    />
  );
}
