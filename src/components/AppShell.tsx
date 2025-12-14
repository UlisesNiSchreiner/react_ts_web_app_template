import React from "react";

export const AppShell: React.FC = () => {
  return (
    <div
      style={{
        minHeight: "100vh",
        fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
        background:
          "radial-gradient(circle at top left, #1e293b 0, #020617 45%, #000000 100%)",
        color: "#e5e7eb",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "2rem",
      }}
    >
      <div
        style={{
          maxWidth: 640,
          width: "100%",
          borderRadius: 24,
          border: "1px solid rgba(148,163,184,0.35)",
          background:
            "linear-gradient(135deg, rgba(15,23,42,0.92), rgba(15,23,42,0.9))",
          boxShadow:
            "0 18px 45px rgba(15,23,42,0.9), 0 0 0 1px rgba(15,23,42,0.9)",
          padding: "2.25rem 2rem",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1rem" }}>
          <div
            style={{
              width: 36,
              height: 36,
              borderRadius: 12,
              background:
                "conic-gradient(from 140deg at 50% 50%, #38bdf8, #8b5cf6, #f97316, #22c55e, #38bdf8)",
              padding: 2,
            }}
          >
            <div
              style={{
                width: "100%",
                height: "100%",
                borderRadius: 10,
                backgroundColor: "#020617",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 20,
                fontWeight: 700,
                color: "#e5e7eb",
              }}
            >
              R
            </div>
          </div>
          <div>
            <div style={{ fontSize: 14, textTransform: "uppercase", letterSpacing: "0.12em", color: "#64748b" }}>
              React + TypeScript Template
            </div>
            <div style={{ fontSize: 18, fontWeight: 600 }}>Production-ready SPA</div>
          </div>
        </div>

        <p style={{ fontSize: 15, lineHeight: 1.6, color: "#cbd5f5", marginBottom: "1.5rem" }}>
          Este template está optimizado para construir aplicaciones React + TypeScript listas para
          producción, con Vite, testing, linting, formateo, CI/CD y Docker para correr detrás de un
          load balancer (por ejemplo, en DigitalOcean).
        </p>

        <ul
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "0.75rem",
            listStyle: "none",
            padding: 0,
            margin: 0,
          }}
        >
          <li
            style={{
              backgroundColor: "rgba(15,23,42,0.9)",
              borderRadius: 16,
              padding: "0.75rem 0.9rem",
              border: "1px solid rgba(51,65,85,0.9)",
              fontSize: 13,
            }}
          >
            ⚡ Vite + React + TS
          </li>
          <li
            style={{
              backgroundColor: "rgba(15,23,42,0.9)",
              borderRadius: 16,
              padding: "0.75rem 0.9rem",
              border: "1px solid rgba(51,65,85,0.9)",
              fontSize: 13,
            }}
          >
            ✅ Vitest + Testing Library
          </li>
          <li
            style={{
              backgroundColor: "rgba(15,23,42,0.9)",
              borderRadius: 16,
              padding: "0.75rem 0.9rem",
              border: "1px solid rgba(51,65,85,0.9)",
              fontSize: 13,
            }}
          >
            🧹 ESLint + Prettier + Husky
          </li>
          <li
            style={{
              backgroundColor: "rgba(15,23,42,0.9)",
              borderRadius: 16,
              padding: "0.75rem 0.9rem",
              border: "1px solid rgba(51,65,85,0.9)",
              fontSize: 13,
            }}
          >
            📦 Docker + Nginx ready
          </li>
        </ul>
      </div>
    </div>
  );
};