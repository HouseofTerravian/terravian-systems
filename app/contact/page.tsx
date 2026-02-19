import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact — Terravian Systems",
  description:
    "Platform inquiries, partnership interest, or general correspondence.",
};

export default function Contact() {
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
            Contact
          </h1>
          <p
            style={{
              fontSize: "16px",
              color: "#555",
              lineHeight: "1.8",
              maxWidth: "480px",
            }}
          >
            For platform inquiries, partnership interest, or general
            correspondence. Response time is typically within 3 business days.
          </p>
        </div>
      </section>

      {/* Body */}
      <section style={{ backgroundColor: "#FFFFFF", padding: "80px 24px 120px" }}>
        <div
          style={{
            maxWidth: "900px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "1fr 1.6fr",
            gap: "80px",
          }}
        >
          {/* Direct contact */}
          <div>
            <h2
              style={{
                fontSize: "10px",
                fontWeight: 700,
                letterSpacing: "0.16em",
                textTransform: "uppercase",
                color: "#B11226",
                marginBottom: "28px",
              }}
            >
              Direct
            </h2>

            <p
              style={{
                fontSize: "11px",
                fontWeight: 600,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "#999",
                marginBottom: "6px",
              }}
            >
              General
            </p>
            <a
              href="mailto:contact@terravian.systems"
              style={{
                display: "block",
                fontSize: "15px",
                color: "#0B0B0B",
                textDecoration: "none",
                fontWeight: 500,
                marginBottom: "32px",
              }}
            >
              contact@terravian.systems
            </a>

            <p
              style={{
                fontSize: "11px",
                fontWeight: 600,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "#999",
                marginBottom: "6px",
              }}
            >
              Legal
            </p>
            <a
              href="mailto:legal@terravian.systems"
              style={{
                display: "block",
                fontSize: "15px",
                color: "#0B0B0B",
                textDecoration: "none",
                fontWeight: 500,
              }}
            >
              legal@terravian.systems
            </a>
          </div>

          {/* Form */}
          <div>
            <h2
              style={{
                fontSize: "10px",
                fontWeight: 700,
                letterSpacing: "0.16em",
                textTransform: "uppercase",
                color: "#B11226",
                marginBottom: "28px",
              }}
            >
              Message
            </h2>

            <form
              style={{ display: "flex", flexDirection: "column", gap: "22px" }}
            >
              {[
                { label: "Name", type: "text", name: "name" },
                { label: "Email", type: "email", name: "email" },
                { label: "Subject", type: "text", name: "subject" },
              ].map((field) => (
                <div key={field.name}>
                  <label
                    htmlFor={field.name}
                    style={{
                      display: "block",
                      fontSize: "10px",
                      fontWeight: 700,
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                      color: "#888",
                      marginBottom: "8px",
                    }}
                  >
                    {field.label}
                  </label>
                  <input
                    id={field.name}
                    type={field.type}
                    name={field.name}
                    required
                    style={{
                      width: "100%",
                      padding: "12px 16px",
                      border: "1px solid #D8D8D8",
                      backgroundColor: "#FFFFFF",
                      fontSize: "14px",
                      color: "#0B0B0B",
                      outline: "none",
                      fontFamily: "inherit",
                    }}
                  />
                </div>
              ))}

              <div>
                <label
                  htmlFor="message"
                  style={{
                    display: "block",
                    fontSize: "10px",
                    fontWeight: 700,
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    color: "#888",
                    marginBottom: "8px",
                  }}
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  style={{
                    width: "100%",
                    padding: "12px 16px",
                    border: "1px solid #D8D8D8",
                    backgroundColor: "#FFFFFF",
                    fontSize: "14px",
                    color: "#0B0B0B",
                    outline: "none",
                    resize: "vertical",
                    fontFamily: "inherit",
                  }}
                />
              </div>

              <div>
                <button
                  type="submit"
                  style={{
                    padding: "14px 36px",
                    backgroundColor: "#0B0B0B",
                    color: "#FFFFFF",
                    border: "none",
                    fontSize: "11px",
                    fontWeight: 700,
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    cursor: "pointer",
                    fontFamily: "inherit",
                  }}
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
