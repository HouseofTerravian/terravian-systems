import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Legal — Terravian Systems",
  description:
    "Governing policies for use of Terravian Systems platforms and services.",
  openGraph: {
    title: "Legal — Terravian Systems",
    description:
      "Governing policies for use of Terravian Systems platforms and services.",
    url: "https://terravian.systems/legal",
    siteName: "Terravian Systems",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Legal — Terravian Systems",
    description:
      "Governing policies for use of Terravian Systems platforms and services.",
  },
};

const policies = [
  {
    id: "terms",
    title: "Terms of Service",
    body: "By accessing any Terravian Systems platform, you agree to comply with all applicable platform-specific terms, usage policies, and conduct standards. Unauthorized use, reverse engineering, or distribution of platform content is prohibited. All terms are subject to change without notice. Continued use of any platform following a change in terms constitutes acceptance of the revised terms.",
  },
  {
    id: "privacy",
    title: "Privacy Policy",
    body: "Terravian Systems collects only the data necessary to operate its platforms and services. We do not sell user data to third parties. Data may be retained as required by applicable law or to fulfill contractual obligations. All platforms operate in compliance with applicable data protection regulations. Users may submit requests to access or delete their data by contacting us directly.",
  },
  {
    id: "refund",
    title: "Refund Policy",
    body: "All purchases and subscriptions on Terravian Systems platforms are final unless otherwise stated in platform-specific terms. Refund requests may be submitted to the contact address listed below and will be reviewed on a case-by-case basis within 10 business days. Terravian Systems reserves the right to deny any refund request that does not meet applicable criteria.",
  },
];

export default function Legal() {
  return (
    <>
      {/* Header */}
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
              marginBottom: "24px",
            }}
          >
            Legal
          </h1>
          <p style={{ fontSize: "16px", color: "#555", lineHeight: "1.8" }}>
            Governing policies for use of Terravian Systems platforms and
            services.
          </p>
        </div>
      </section>

      {/* Policies */}
      <section style={{ backgroundColor: "#FFFFFF", padding: "80px 24px 100px" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          {policies.map((policy, i) => (
            <div
              key={policy.id}
              id={policy.id}
              style={{
                marginBottom: "60px",
                paddingBottom: "60px",
                borderBottom:
                  i < policies.length - 1 ? "1px solid #EBEBEB" : "none",
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
                {policy.title}
              </h2>
              <p
                style={{
                  fontSize: "16px",
                  color: "#2A2A2A",
                  lineHeight: "1.9",
                  maxWidth: "640px",
                }}
              >
                {policy.body}
              </p>
            </div>
          ))}

          {/* Entity disclosure */}
          <div
            style={{
              padding: "32px 36px",
              backgroundColor: "#F6F6F6",
              borderLeft: "2px solid #B11226",
            }}
          >
            <p
              style={{
                fontSize: "13px",
                color: "#444",
                lineHeight: "2",
              }}
            >
              Legal inquiries:{" "}
              <a
                href="mailto:legal@terravian.systems"
                style={{ color: "#B11226", textDecoration: "none" }}
              >
                legal@terravian.systems
              </a>
              <br />
              Entity: Toravian Dynasty Trust / MCM Enterprises
              <br />
              All rights reserved. &copy; {new Date().getFullYear()} Terravian
              Systems.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
