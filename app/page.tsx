import Link from "next/link";

const pillars = [
  {
    label: "Productivity",
    desc: "Systems that reclaim time and create operational clarity.",
  },
  {
    label: "Performance",
    desc: "Platforms built for athletes, competitors, and high performers.",
  },
  {
    label: "Identity",
    desc: "Infrastructure that supports personal brand and digital presence.",
  },
  {
    label: "Competition",
    desc: "Tooling for structured league and NIL ecosystem management.",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section
        style={{
          backgroundColor: "#FFFFFF",
          padding: "128px 24px 104px",
          borderBottom: "1px solid #E8E8E8",
        }}
      >
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div
            style={{
              width: "40px",
              height: "2px",
              backgroundColor: "#B11226",
              marginBottom: "48px",
            }}
          />
          <h1
            style={{
              fontSize: "clamp(52px, 8vw, 96px)",
              fontWeight: 700,
              color: "#0B0B0B",
              lineHeight: "1.02",
              letterSpacing: "-0.03em",
              marginBottom: "0",
            }}
          >
            Terravian Systems
          </h1>
          <div
            style={{
              width: "200px",
              height: "3px",
              backgroundColor: "#B11226",
              margin: "20px 0 36px",
            }}
          />
          <p
            style={{
              fontSize: "clamp(20px, 2.5vw, 26px)",
              color: "#333",
              fontWeight: 400,
              marginBottom: "16px",
              maxWidth: "640px",
              lineHeight: "1.4",
              letterSpacing: "-0.01em",
            }}
          >
            Infrastructure for Digital Platforms.
          </p>
          <p
            style={{
              fontSize: "16px",
              color: "#666",
              maxWidth: "560px",
              lineHeight: "1.85",
              marginBottom: "60px",
            }}
          >
            Building and operating software systems across productivity,
            performance, identity, and competition.
          </p>
          <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
            <Link
              href="/apps"
              style={{
                display: "inline-block",
                padding: "14px 36px",
                backgroundColor: "#0B0B0B",
                color: "#FFFFFF",
                textDecoration: "none",
                fontSize: "12px",
                fontWeight: 600,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
              }}
            >
              View Apps
            </Link>
            <Link
              href="/about"
              style={{
                display: "inline-block",
                padding: "14px 36px",
                backgroundColor: "transparent",
                color: "#0B0B0B",
                textDecoration: "none",
                fontSize: "12px",
                fontWeight: 600,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                border: "1px solid #B11226",
              }}
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Pillars */}
      <section
        style={{
          backgroundColor: "#0B0B0B",
          padding: "80px 24px",
        }}
      >
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div
            style={{
              fontSize: "10px",
              fontWeight: 600,
              letterSpacing: "0.16em",
              textTransform: "uppercase",
              color: "#444",
              marginBottom: "40px",
            }}
          >
            Platform Focus
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
              gap: "1px",
              backgroundColor: "#1C1C1C",
              border: "1px solid #1C1C1C",
            }}
          >
            {pillars.map((item) => (
              <div
                key={item.label}
                style={{
                  backgroundColor: "#0B0B0B",
                  padding: "44px 32px",
                  borderLeft: "2px solid #B11226",
                }}
              >
                <div
                  style={{
                    color: "#FFFFFF",
                    fontSize: "14px",
                    fontWeight: 600,
                    letterSpacing: "0.06em",
                    textTransform: "uppercase",
                    marginBottom: "14px",
                  }}
                >
                  {item.label}
                </div>
                <p
                  style={{
                    color: "#666",
                    fontSize: "13px",
                    lineHeight: "1.8",
                  }}
                >
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA strip */}
      <section
        style={{
          backgroundColor: "#FFFFFF",
          borderTop: "1px solid #E8E8E8",
          padding: "80px 24px",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "32px",
          }}
        >
          <div>
            <p
              style={{
                fontSize: "22px",
                fontWeight: 600,
                color: "#0B0B0B",
                letterSpacing: "-0.01em",
                marginBottom: "8px",
              }}
            >
              Ready to engage?
            </p>
            <p style={{ fontSize: "14px", color: "#666" }}>
              Platform inquiries, partnership interest, or general
              correspondence.
            </p>
          </div>
          <Link
            href="/contact"
            style={{
              display: "inline-block",
              padding: "14px 36px",
              backgroundColor: "#B11226",
              color: "#FFFFFF",
              textDecoration: "none",
              fontSize: "12px",
              fontWeight: 600,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
            }}
          >
            Contact
          </Link>
        </div>
      </section>
    </>
  );
}
