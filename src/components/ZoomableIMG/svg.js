import React, { useEffect, useRef } from "react";

export default function ZoomableSVG({ src, alt, height = "500px" }) {
  const containerRef = useRef(null);

  useEffect(() => {
    let panZoomInstance;

    async function init() {
      const { default: svgPanZoom } = await import("svg-pan-zoom"); // ← import here

      if (containerRef.current) {
        const objectEl = containerRef.current;

        objectEl.addEventListener("load", () => {
          const svgDoc = objectEl.contentDocument;
          const svgEl = svgDoc.querySelector("svg");

          if (svgEl) {
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

            panZoomInstance = svgPanZoom(svgEl, {
              zoomEnabled: true,
              controlIconsEnabled: true,
              fit: true,
              center: true,
            });
          }
        });
      }
    }

    init();

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
