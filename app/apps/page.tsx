import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Apps — Terravian Systems",
  description:
    "Software products developed and operated under Terravian Systems infrastructure.",
};

const apps = [
  {
    name: "Nexus",
    description:
      "Central command infrastructure for platform management and internal operations across the Terravian Systems portfolio.",
    href: "#",
    active: true,
  },
  {
    name: "Win The Hour",
    description:
      "Productivity and time-accountability platform built for high-performance individuals who operate on structured daily systems.",
    href: "https://winthehour.app",
    active: true,
  },
  {
    name: "Crownstrike",
    description:
      "Competitive performance tracking and analytics system for structured competition environments.",
    href: "https://app.crownstrikeofficial.com",
    active: true,
  },
  {
    name: "NILGenius",
    description:
      "NIL deal management and athlete brand infrastructure for the modern collegiate ecosystem.",
    href: "#",
    active: true,
  },
  {
    name: "StepLeague",
    description:
      "League operations and bracket management platform for competitive step programs and performance organizations.",
    href: "#",
    active: true,
  },
  {
    name: null,
    description: "Reserved for future platform development.",
    href: null,
    active: false,
  },
];

export default function Apps() {
  return (
    <>
      {/* Header */}
      <section
        style={{
          backgroundColor: "#0B0B0B",
          padding: "104px 24px 72px",
        }}
      >
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div
            style={{
              width: "32px",
              height: "2px",
              backgroundColor: "#B11226",
              marginBottom: "36px",
            }}
          />
          <h1
            style={{
              fontSize: "clamp(40px, 5vw, 64px)",
              fontWeight: 700,
              color: "#FFFFFF",
              lineHeight: "1.08",
              letterSpacing: "-0.025em",
              marginBottom: "20px",
            }}
          >
            Platforms
          </h1>
          <p
            style={{
              fontSize: "16px",
              color: "#666",
              lineHeight: "1.8",
              maxWidth: "500px",
            }}
          >
            Software products developed and operated under Terravian Systems
            infrastructure.
          </p>
        </div>
      </section>

      {/* Grid */}
      <section
        style={{
          backgroundColor: "#0B0B0B",
          padding: "0 24px 100px",
        }}
      >
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))",
              gap: "1px",
              backgroundColor: "#1C1C1C",
              border: "1px solid #1C1C1C",
            }}
          >
            {apps.map((app, i) => (
              <div
                key={app.name ?? `placeholder-${i}`}
                style={{
                  backgroundColor: "#0F0F0F",
                  padding: "44px 36px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  minHeight: "220px",
                  borderTop: `2px solid ${app.active ? "#B11226" : "#1C1C1C"}`,
                }}
              >
                <div>
                  <div
                    style={{
                      color: app.active ? "#FFFFFF" : "#2A2A2A",
                      fontSize: "22px",
                      fontWeight: 600,
                      letterSpacing: "-0.01em",
                      marginBottom: "14px",
                    }}
                  >
                    {app.name ?? "—"}
                  </div>
                  <p
                    style={{
                      color: app.active ? "#777" : "#2A2A2A",
                      fontSize: "13px",
                      lineHeight: "1.85",
                      marginBottom: "32px",
                    }}
                  >
                    {app.description}
                  </p>
                </div>
                {app.href && app.active && (
                  <a
                    href={app.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: "inline-block",
                      padding: "10px 24px",
                      border: "1px solid #B11226",
                      color: "#FFFFFF",
                      textDecoration: "none",
                      fontSize: "11px",
                      fontWeight: 600,
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      alignSelf: "flex-start",
                    }}
                  >
                    Access
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
