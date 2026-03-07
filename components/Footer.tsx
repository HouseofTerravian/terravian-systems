"use client";

import Link from "next/link";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Apps", href: "/apps" },
  { label: "Contact", href: "/contact" },
];

const legalLinks = [
  { label: "Terms of Service", href: "/legal#terms" },
  { label: "Privacy Policy", href: "/legal#privacy" },
  { label: "Refund Policy", href: "/legal#refund" },
];

export default function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "#0B0B0B",
        borderTop: "2px solid #B11226",
        padding: "64px 24px 40px",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "2fr 1fr 1fr",
          gap: "48px",
        }}
      >
        {/* Brand column */}
        <div>
          <div
            style={{
              color: "#FFFFFF",
              fontSize: "15px",
              fontWeight: 600,
              letterSpacing: "0.07em",
              textTransform: "uppercase",
              marginBottom: "16px",
            }}
          >
            Terravian<span style={{ color: "#B11226" }}>.</span>Systems
          </div>
          <p
            style={{
              color: "#555",
              fontSize: "13px",
              lineHeight: "1.9",
              maxWidth: "280px",
            }}
          >
            Infrastructure for Digital Platforms. Building and operating
            software systems across productivity, performance, identity,
            and competition.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <div
            style={{
              color: "#444",
              fontSize: "10px",
              fontWeight: 600,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              marginBottom: "20px",
            }}
          >
            Navigation
          </div>
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              style={{
                display: "block",
                color: "#666",
                textDecoration: "none",
                fontSize: "13px",
                marginBottom: "10px",
                transition: "color 0.15s",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.color = "#FFFFFF")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = "#666")
              }
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Legal */}
        <div>
          <div
            style={{
              color: "#444",
              fontSize: "10px",
              fontWeight: 600,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              marginBottom: "20px",
            }}
          >
            Legal
          </div>
          {legalLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              style={{
                display: "block",
                color: "#666",
                textDecoration: "none",
                fontSize: "13px",
                marginBottom: "10px",
                transition: "color 0.15s",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.color = "#FFFFFF")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = "#666")
              }
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div
        style={{
          maxWidth: "1200px",
          margin: "48px auto 0",
          paddingTop: "24px",
          borderTop: "1px solid #1C1C1C",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "12px",
        }}
      >
        <p style={{ color: "#3A3A3A", fontSize: "12px" }}>
          &copy; {new Date().getFullYear()} Terravian Systems. All rights
          reserved.
        </p>
        <p style={{ color: "#3A3A3A", fontSize: "12px" }}>
          Toravian Dynasty Trust &nbsp;&middot;&nbsp; MCM Enterprises
        </p>
      </div>
      <div
        style={{
          maxWidth: "1200px",
          margin: "16px auto 0",
          paddingTop: "16px",
          borderTop: "1px solid #1C1C1C",
        }}
      >
        <p style={{ color: "#2A2A2A", fontSize: "11px" }}>
          All brand names and marks are trademarks of House of Terravian.
        </p>
      </div>
    </footer>
  );
}
