import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Nexus™ Subscription Confirmed | Terravian Systems",
  description: "Your Nexus™ subscription has been successfully activated.",
};

// ─── Design Tokens (matches /nexus) ──────────────────────────────────────────
const C = {
  bg: "#0B0B0D",
  bgCard: "#111115",
  gold: "#C9A84C",
  goldBorder: "#2C2415",
  goldDim: "#7A6030",
  textPrimary: "#F0EDE6",
  textSecondary: "#888",
  textMuted: "#444",
  border: "#1A1A1E",
  borderStrong: "#242428",
} as const;

// ─── Future auth wiring points ────────────────────────────────────────────────
// TODO: Verify Clerk session — import { auth } from "@clerk/nextjs/server"
// TODO: Fetch Stripe customer ID via stripe.customers.retrieve()
// TODO: Attach subscription to organization via Supabase or internal API
// TODO: Redirect authenticated users directly to /nexus/dashboard

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function NexusSuccess() {
  return (
    <div style={{ backgroundColor: C.bg, minHeight: "100vh" }}>

      {/* ── Section 1: Confirmation Header ── */}
      <section
        style={{
          backgroundColor: C.bg,
          padding: "140px 24px 100px",
          borderBottom: `1px solid ${C.border}`,
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: "640px", margin: "0 auto" }}>

          {/* Gold checkmark icon */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginBottom: "40px",
            }}
          >
            <svg
              width="56"
              height="56"
              viewBox="0 0 56 56"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="28"
                cy="28"
                r="27"
                stroke={C.goldBorder}
                strokeWidth="1"
              />
              <circle
                cx="28"
                cy="28"
                r="27"
                stroke={C.gold}
                strokeWidth="1"
                strokeOpacity="0.4"
              />
              <polyline
                points="18,28 25,35 38,20"
                stroke={C.gold}
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          {/* Thin gold rule */}
          <div
            style={{
              width: "40px",
              height: "1px",
              backgroundColor: C.gold,
              margin: "0 auto 40px",
              opacity: 0.5,
            }}
          />

          {/* Heading */}
          <h1
            style={{
              fontSize: "clamp(32px, 5vw, 52px)",
              fontWeight: 700,
              color: C.textPrimary,
              lineHeight: "1.08",
              letterSpacing: "-0.03em",
              marginBottom: "20px",
            }}
          >
            Subscription Confirmed
          </h1>

          {/* Subheading */}
          <p
            style={{
              fontSize: "16px",
              color: C.gold,
              fontWeight: 500,
              letterSpacing: "0.04em",
              marginBottom: "24px",
              opacity: 0.85,
            }}
          >
            Your Nexus™ platform access is active.
          </p>

          {/* Body */}
          <p
            style={{
              fontSize: "14px",
              color: C.textSecondary,
              lineHeight: "1.9",
              maxWidth: "480px",
              margin: "0 auto",
            }}
          >
            Thank you for subscribing. Your account has been registered with our
            billing system. You will receive a receipt via email from Stripe.
          </p>
        </div>
      </section>

      {/* ── Section 2: Next Steps ── */}
      <section
        style={{
          backgroundColor: C.bg,
          padding: "88px 24px",
          borderBottom: `1px solid ${C.border}`,
        }}
      >
        <div style={{ maxWidth: "640px", margin: "0 auto" }}>

          {/* Card */}
          <div
            style={{
              backgroundColor: C.bgCard,
              border: `1px solid ${C.borderStrong}`,
              borderTop: `2px solid ${C.gold}`,
              padding: "52px 48px",
            }}
          >
            {/* Card title */}
            <div
              style={{
                fontSize: "10px",
                fontWeight: 600,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: C.goldDim,
                marginBottom: "32px",
              }}
            >
              Next Steps
            </div>

            {/* Step list */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "20px",
                marginBottom: "44px",
              }}
            >
              {[
                {
                  label: "Log in to access your Nexus dashboard",
                  sub: "Use your registered email to authenticate and enter the platform.",
                },
                {
                  label: "Manage billing through your Stripe receipt link",
                  sub: "Your receipt email contains a direct link to your Stripe billing portal.",
                },
                {
                  label: "Contact enterprise@terravian.systems for organizational access",
                  sub: "For team provisioning, API key issuance, or partner-level configurations.",
                },
              ].map((step) => (
                <div
                  key={step.label}
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "16px",
                    paddingBottom: "20px",
                    borderBottom: `1px solid ${C.border}`,
                  }}
                >
                  {/* Gold marker */}
                  <div
                    style={{
                      marginTop: "6px",
                      width: "4px",
                      height: "4px",
                      backgroundColor: C.gold,
                      flexShrink: 0,
                    }}
                  />
                  <div>
                    <div
                      style={{
                        fontSize: "13px",
                        fontWeight: 600,
                        color: C.textPrimary,
                        letterSpacing: "0.01em",
                        marginBottom: "6px",
                      }}
                    >
                      {step.label}
                    </div>
                    <div
                      style={{
                        fontSize: "12px",
                        color: C.textMuted,
                        lineHeight: "1.75",
                      }}
                    >
                      {step.sub}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            {/* TODO: Replace href with /nexus/dashboard once auth is wired */}
            <Link
              href="/nexus"
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
              Access Nexus
            </Link>
          </div>
        </div>
      </section>

      {/* ── Section 3: Billing Notice ── */}
      <section
        style={{
          backgroundColor: "#0D0D11",
          padding: "64px 24px",
        }}
      >
        <div
          style={{
            maxWidth: "640px",
            margin: "0 auto",
            textAlign: "center",
          }}
        >
          {/* Thin rule */}
          <div
            style={{
              width: "32px",
              height: "1px",
              backgroundColor: C.border,
              margin: "0 auto 32px",
            }}
          />

          <p
            style={{
              fontSize: "12px",
              color: C.textMuted,
              lineHeight: "1.95",
              maxWidth: "520px",
              margin: "0 auto",
              letterSpacing: "0.02em",
            }}
          >
            Billing is processed securely by Stripe. Subscriptions renew monthly
            unless canceled. You may manage or cancel your subscription at any
            time through your Stripe billing portal.
          </p>

          {/* Back link */}
          <div style={{ marginTop: "32px" }}>
            <Link
              href="/"
              style={{
                fontSize: "11px",
                color: C.goldDim,
                textDecoration: "none",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                fontWeight: 500,
              }}
            >
              Return to Terravian Systems
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
