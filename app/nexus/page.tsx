import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Nexus™ — Terravian Systems",
  description:
    "Platform orchestrator for digital infrastructure. Govern routing, billing, identity, and AI access from a single control layer.",
  openGraph: {
    title: "Nexus™ — Terravian Systems",
    description:
      "Platform orchestrator for digital infrastructure. Govern routing, billing, identity, and AI access from a single control layer.",
    url: "https://terravian.systems/nexus",
    siteName: "Terravian Systems",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nexus™ — Terravian Systems",
    description:
      "Platform orchestrator for digital infrastructure. Govern routing, billing, identity, and AI access from a single control layer.",
  },
};

// ─── Design Tokens ────────────────────────────────────────────────────────────
const C = {
  bg: "#0B0B0D",
  bgCard: "#111115",
  bgCardHover: "#16161B",
  gold: "#C9A84C",
  goldBorder: "#2C2415",
  goldDim: "#7A6030",
  textPrimary: "#F0EDE6",
  textSecondary: "#888",
  textMuted: "#444",
  border: "#1A1A1E",
  borderStrong: "#242428",
} as const;

// ─── Feature Cards ─────────────────────────────────────────────────────────
const features = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke={C.gold} strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="10" cy="10" r="3" />
        <circle cx="10" cy="3" r="1.5" />
        <circle cx="10" cy="17" r="1.5" />
        <circle cx="3" cy="10" r="1.5" />
        <circle cx="17" cy="10" r="1.5" />
        <line x1="10" y1="4.5" x2="10" y2="7" />
        <line x1="10" y1="13" x2="10" y2="15.5" />
        <line x1="4.5" y1="10" x2="7" y2="10" />
        <line x1="13" y1="10" x2="15.5" y2="10" />
      </svg>
    ),
    label: "AI Routing Control",
    desc: "Define and enforce routing rules across AI endpoints. Set priorities, fallbacks, and usage caps per model or provider. Routing logic lives at the infrastructure level — not in application code.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke={C.gold} strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="8" cy="8" r="4" />
        <line x1="11.5" y1="11.5" x2="17" y2="17" />
        <line x1="13" y1="17" x2="17" y2="17" />
        <line x1="17" y1="13" x2="17" y2="17" />
      </svg>
    ),
    label: "API Key Governance",
    desc: "Issue, rotate, and revoke API keys with scoped permissions. Every key interaction produces a timestamped audit record. Expiry, rate limits, and scope restrictions enforced automatically.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke={C.gold} strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round">
        <rect x="5" y="9" width="10" height="9" rx="1" />
        <path d="M7 9V6.5a3 3 0 016 0V9" />
        <circle cx="10" cy="13.5" r="1" fill={C.gold} stroke="none" />
      </svg>
    ),
    label: "Stripe-Gated Access",
    desc: "Payment verification built directly into the access layer. No active subscription, no access. Billing events propagate in real time — no manual review, no edge cases.",
  },
];

// ─── Architecture Steps ────────────────────────────────────────────────────
const archSteps = [
  { label: "Auth", sub: "Identity verified" },
  { label: "API Key", sub: "Scope checked" },
  { label: "Routing", sub: "Rule evaluated" },
  { label: "Usage Log", sub: "Event recorded" },
  { label: "Billing Sync", sub: "State updated" },
];

// ─── Page ──────────────────────────────────────────────────────────────────
export default function Nexus() {
  const checkoutUrl = process.env.NEXUS_CHECKOUT_URL ?? null;

  return (
    <div style={{ backgroundColor: C.bg, minHeight: "100vh" }}>

      {/* ── Hero ── */}
      <section
        style={{
          backgroundColor: C.bg,
          padding: "140px 24px 120px",
          borderBottom: `1px solid ${C.border}`,
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Subtle gold horizontal rule above heading */}
        <div
          style={{
            width: "48px",
            height: "1px",
            backgroundColor: C.gold,
            margin: "0 auto 48px",
            opacity: 0.6,
          }}
        />

        {/* Eyebrow */}
        <div
          style={{
            fontSize: "10px",
            fontWeight: 600,
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            color: C.goldDim,
            marginBottom: "28px",
          }}
        >
          Terravian Systems
        </div>

        {/* Primary heading */}
        <h1
          style={{
            fontSize: "clamp(72px, 12vw, 128px)",
            fontWeight: 700,
            color: C.textPrimary,
            lineHeight: "0.95",
            letterSpacing: "-0.04em",
            marginBottom: "0",
          }}
        >
          NEXUS
          <span style={{ color: C.gold, fontSize: "0.45em", verticalAlign: "super", letterSpacing: "0", fontWeight: 500 }}>™</span>
        </h1>

        {/* Gold rule under heading */}
        <div
          style={{
            width: "80px",
            height: "1px",
            backgroundColor: C.gold,
            margin: "28px auto 36px",
            opacity: 0.5,
          }}
        />

        {/* Subheading */}
        <p
          style={{
            fontSize: "clamp(16px, 2vw, 20px)",
            color: C.textSecondary,
            fontWeight: 400,
            letterSpacing: "0.04em",
            textTransform: "uppercase",
            marginBottom: "28px",
          }}
        >
          Platform Orchestrator for Digital Infrastructure
        </p>

        {/* Body */}
        <p
          style={{
            fontSize: "15px",
            color: C.textMuted,
            maxWidth: "480px",
            margin: "0 auto 56px",
            lineHeight: "1.95",
            letterSpacing: "0.01em",
          }}
        >
          Govern routing, billing, identity, and AI access from a single
          control layer.
        </p>

        {/* CTAs */}
        <div
          style={{
            display: "flex",
            gap: "16px",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          {checkoutUrl ? (
            <a
              href={checkoutUrl}
              style={{
                display: "inline-block",
                padding: "14px 44px",
                backgroundColor: C.gold,
                color: "#0B0B0D",
                textDecoration: "none",
                fontSize: "11px",
                fontWeight: 700,
                letterSpacing: "0.16em",
                textTransform: "uppercase",
              }}
            >
              Get Early Access
            </a>
          ) : (
            <button
              disabled
              style={{
                display: "inline-block",
                padding: "14px 44px",
                backgroundColor: C.goldBorder,
                color: C.goldDim,
                border: "none",
                cursor: "not-allowed",
                fontSize: "11px",
                fontWeight: 700,
                letterSpacing: "0.16em",
                textTransform: "uppercase",
              }}
            >
              Get Early Access
            </button>
          )}
          <a
            href="#architecture"
            style={{
              display: "inline-block",
              padding: "14px 44px",
              backgroundColor: "transparent",
              color: C.textSecondary,
              textDecoration: "none",
              fontSize: "11px",
              fontWeight: 600,
              letterSpacing: "0.16em",
              textTransform: "uppercase",
              border: `1px solid ${C.borderStrong}`,
            }}
          >
            View Architecture
          </a>
        </div>
      </section>

      {/* ── Features ── */}
      <section
        style={{
          backgroundColor: C.bg,
          padding: "100px 24px",
          borderBottom: `1px solid ${C.border}`,
        }}
      >
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          {/* Section label */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "16px",
              marginBottom: "64px",
            }}
          >
            <div
              style={{
                fontSize: "10px",
                fontWeight: 600,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: C.textMuted,
              }}
            >
              Core Capabilities
            </div>
            <div
              style={{
                flex: 1,
                height: "1px",
                backgroundColor: C.border,
              }}
            />
          </div>

          {/* 3-column grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "1px",
              backgroundColor: C.border,
              border: `1px solid ${C.border}`,
            }}
          >
            {features.map((f) => (
              <div
                key={f.label}
                style={{
                  backgroundColor: C.bgCard,
                  padding: "48px 40px",
                  borderTop: `1px solid ${C.goldBorder}`,
                  display: "flex",
                  flexDirection: "column",
                  gap: "20px",
                }}
              >
                {/* Icon */}
                <div>{f.icon}</div>

                {/* Label */}
                <div
                  style={{
                    color: C.textPrimary,
                    fontSize: "13px",
                    fontWeight: 600,
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                  }}
                >
                  {f.label}
                </div>

                {/* Description */}
                <p
                  style={{
                    color: C.textSecondary,
                    fontSize: "13px",
                    lineHeight: "1.9",
                  }}
                >
                  {f.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Architecture ── */}
      <section
        id="architecture"
        style={{
          backgroundColor: "#0D0D11",
          padding: "100px 24px",
          borderBottom: `1px solid ${C.border}`,
        }}
      >
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          {/* Section label */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "16px",
              marginBottom: "64px",
            }}
          >
            <div
              style={{
                fontSize: "10px",
                fontWeight: 600,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: C.textMuted,
              }}
            >
              Request Pipeline
            </div>
            <div
              style={{
                flex: 1,
                height: "1px",
                backgroundColor: C.border,
              }}
            />
          </div>

          {/* Horizontal flow diagram */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "0",
              overflowX: "auto",
              padding: "8px 0",
            }}
          >
            {archSteps.map((step, i) => (
              <div
                key={step.label}
                style={{
                  display: "flex",
                  alignItems: "center",
                  flex: 1,
                }}
              >
                {/* Step block */}
                <div
                  style={{
                    flex: "0 0 auto",
                    backgroundColor: C.bgCard,
                    border: `1px solid ${C.borderStrong}`,
                    borderTop: `1px solid ${C.goldBorder}`,
                    padding: "24px 20px 20px",
                    minWidth: "140px",
                    textAlign: "center",
                  }}
                >
                  {/* Step number */}
                  <div
                    style={{
                      fontSize: "9px",
                      fontWeight: 600,
                      letterSpacing: "0.14em",
                      color: C.goldDim,
                      textTransform: "uppercase",
                      marginBottom: "10px",
                    }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  {/* Label */}
                  <div
                    style={{
                      color: C.textPrimary,
                      fontSize: "12px",
                      fontWeight: 600,
                      letterSpacing: "0.06em",
                      textTransform: "uppercase",
                      marginBottom: "8px",
                    }}
                  >
                    {step.label}
                  </div>
                  {/* Sub */}
                  <div
                    style={{
                      color: C.textMuted,
                      fontSize: "11px",
                      letterSpacing: "0.02em",
                    }}
                  >
                    {step.sub}
                  </div>
                </div>

                {/* Arrow connector (not after last) */}
                {i < archSteps.length - 1 && (
                  <div
                    style={{
                      flex: 1,
                      display: "flex",
                      alignItems: "center",
                      padding: "0 4px",
                      minWidth: "24px",
                    }}
                  >
                    <div
                      style={{
                        flex: 1,
                        height: "1px",
                        backgroundColor: C.goldBorder,
                      }}
                    />
                    <svg
                      width="6"
                      height="10"
                      viewBox="0 0 6 10"
                      fill="none"
                    >
                      <polyline
                        points="1,1 5,5 1,9"
                        stroke={C.goldDim}
                        strokeWidth="1"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Diagram note */}
          <div
            style={{
              marginTop: "32px",
              fontSize: "11px",
              color: C.textMuted,
              letterSpacing: "0.04em",
            }}
          >
            Every inbound request traverses this pipeline. No step is skippable.
          </div>
        </div>
      </section>

      {/* ── Access Block ── */}
      <section
        style={{
          backgroundColor: C.bg,
          padding: "100px 24px",
          borderBottom: `1px solid ${C.border}`,
        }}
      >
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div
            style={{
              maxWidth: "520px",
              margin: "0 auto",
              textAlign: "center",
            }}
          >
            {/* Section label */}
            <div
              style={{
                fontSize: "10px",
                fontWeight: 600,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: C.textMuted,
                marginBottom: "48px",
              }}
            >
              Early Digital Access
            </div>

            {/* Access card */}
            <div
              style={{
                backgroundColor: C.bgCard,
                border: `1px solid ${C.borderStrong}`,
                borderTop: `2px solid ${C.gold}`,
                padding: "56px 48px",
              }}
            >
              {/* Tier label */}
              <div
                style={{
                  fontSize: "10px",
                  fontWeight: 600,
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: C.goldDim,
                  marginBottom: "20px",
                }}
              >
                Early Digital Access — One-Time
              </div>

              {/* Price */}
              <div
                style={{
                  fontSize: "72px",
                  fontWeight: 700,
                  color: C.textPrimary,
                  lineHeight: 1,
                  letterSpacing: "-0.04em",
                  marginBottom: "8px",
                }}
              >
                $1
              </div>

              <p
                style={{
                  fontSize: "13px",
                  color: C.textMuted,
                  lineHeight: "1.85",
                  marginBottom: "40px",
                }}
              >
                Secured access to the Nexus early deployment environment.
                One payment. No subscription. Access confirmed on checkout.
              </p>

              {/* Divider */}
              <div
                style={{
                  height: "1px",
                  backgroundColor: C.border,
                  marginBottom: "40px",
                }}
              />

              {/* Feature list */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "12px",
                  textAlign: "left",
                  marginBottom: "44px",
                }}
              >
                {[
                  "Early access to core platform layer",
                  "API key provisioning on activation",
                  "Access to architecture documentation",
                  "Priority status for future tier migration",
                ].map((item) => (
                  <div
                    key={item}
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "12px",
                    }}
                  >
                    <div
                      style={{
                        marginTop: "4px",
                        width: "4px",
                        height: "4px",
                        backgroundColor: C.gold,
                        flexShrink: 0,
                      }}
                    />
                    <span
                      style={{
                        fontSize: "13px",
                        color: C.textSecondary,
                        lineHeight: "1.6",
                      }}
                    >
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              {/* CTA */}
              {checkoutUrl ? (
                <a
                  href={checkoutUrl}
                  style={{
                    display: "block",
                    padding: "16px 24px",
                    backgroundColor: C.gold,
                    color: "#0B0B0D",
                    textDecoration: "none",
                    fontSize: "11px",
                    fontWeight: 700,
                    letterSpacing: "0.18em",
                    textTransform: "uppercase",
                    textAlign: "center",
                  }}
                >
                  Secure Access
                </a>
              ) : (
                <button
                  disabled
                  style={{
                    display: "block",
                    width: "100%",
                    padding: "16px 24px",
                    backgroundColor: C.goldBorder,
                    color: C.goldDim,
                    border: "none",
                    cursor: "not-allowed",
                    fontSize: "11px",
                    fontWeight: 700,
                    letterSpacing: "0.18em",
                    textTransform: "uppercase",
                  }}
                >
                  Secure Access
                </button>
              )}
            </div>

            {/* Trust note */}
            <p
              style={{
                marginTop: "24px",
                fontSize: "11px",
                color: C.textMuted,
                letterSpacing: "0.04em",
              }}
            >
              Checkout secured by Stripe. No account required.
            </p>
          </div>
        </div>
      </section>

      {/* ── Pre-footer CTA strip ── */}
      <section
        style={{
          backgroundColor: "#0D0D11",
          padding: "72px 24px",
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
                fontSize: "18px",
                fontWeight: 600,
                color: C.textPrimary,
                letterSpacing: "-0.01em",
                marginBottom: "8px",
              }}
            >
              Enterprise or partnership inquiry?
            </p>
            <p style={{ fontSize: "13px", color: C.textMuted }}>
              Nexus supports custom tier structures for operators and platform partners.
            </p>
          </div>
          <Link
            href="/contact"
            style={{
              display: "inline-block",
              padding: "13px 36px",
              backgroundColor: "transparent",
              color: C.gold,
              textDecoration: "none",
              fontSize: "11px",
              fontWeight: 600,
              letterSpacing: "0.16em",
              textTransform: "uppercase",
              border: `1px solid ${C.goldBorder}`,
            }}
          >
            Contact
          </Link>
        </div>
      </section>

    </div>
  );
}
