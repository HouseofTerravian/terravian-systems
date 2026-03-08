import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About — Terravian Systems",
  description:
    "Terravian Systems is a software infrastructure company building and operating digital platforms across distinct verticals.",
  openGraph: {
    title: "About — Terravian Systems",
    description:
      "Terravian Systems is a software infrastructure company building and operating digital platforms across distinct verticals.",
    url: "https://terravian.systems/about",
    siteName: "Terravian Systems",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About — Terravian Systems",
    description:
      "Terravian Systems is a software infrastructure company building and operating digital platforms across distinct verticals.",
  },
};

const sections = [
  {
    title: "Mission",
    body: "To build durable software infrastructure that powers real outcomes. We do not build for trends. We build systems designed to operate, scale, and endure.",
  },
  {
    title: "Platform Philosophy",
    body: "Every platform under Terravian Systems is designed around a defined user need and a clear operational model. We do not build speculative products. Each system exists because a problem exists.",
  },
  {
    title: "Infrastructure-First",
    body: "Infrastructure is not a feature. It is the foundation. Every product we build is treated as a system layer—one that must perform reliably, integrate cleanly, and be maintainable over time.",
  },
  {
    title: "Build Vision",
    body: "Terravian Systems operates on a long-term timeline. The goal is not a rapid exit or a single product moment. The goal is a structured portfolio of software platforms that generate sustainable operational value.",
  },
  {
    title: "Founding",
    body: "Terravian Systems was founded and is operated by Chude Muonelo under the Toravian Dynasty Trust and MCM Enterprises. This company is privately held. It is not a movement, a creator brand, or an experiment. It is a software infrastructure operation.",
  },
];

export default function About() {
  return (
    <>
      {/* Page header */}
      <section
        style={{
          backgroundColor: "#FFFFFF",
          padding: "104px 24px 72px",
          borderBottom: "1px solid #E8E8E8",
        }}
      >
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
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
              color: "#0B0B0B",
              lineHeight: "1.08",
              letterSpacing: "-0.025em",
              marginBottom: "28px",
            }}
          >
            About
          </h1>
          <p
            style={{
              fontSize: "18px",
              color: "#555",
              lineHeight: "1.8",
              maxWidth: "580px",
            }}
          >
            Terravian Systems is a software infrastructure company. We build
            and operate digital platforms across distinct verticals—productivity,
            performance, identity, and competition.
          </p>
        </div>
      </section>

      {/* Content */}
      <section style={{ backgroundColor: "#FFFFFF", padding: "80px 24px 100px" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          {sections.map((section, i) => (
            <div
              key={section.title}
              style={{
                marginBottom: "60px",
                paddingBottom: "60px",
                borderBottom:
                  i < sections.length - 1 ? "1px solid #EBEBEB" : "none",
              }}
            >
              <h2
                style={{
                  fontSize: "10px",
                  fontWeight: 700,
                  letterSpacing: "0.16em",
                  textTransform: "uppercase",
                  color: "#B11226",
                  marginBottom: "18px",
                }}
              >
                {section.title}
              </h2>
              <p
                style={{
                  fontSize: "17px",
                  color: "#2A2A2A",
                  lineHeight: "1.9",
                  maxWidth: "640px",
                }}
              >
                {section.body}
              </p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
