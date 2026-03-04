import { Search, Sparkles } from "lucide-react";
import { Button, Card, Input } from "@geenius-ui/react-css";

export default function SearchPage() {
  return (<div style={{ height: "100vh", display: "flex", flexDirection: "column" }}>
    <div style={{ padding: "var(--space-6)", borderBottom: "1px solid var(--color-border)" }}>
      <h1 style={{ fontSize: "var(--font-size-2xl)", fontFamily: "var(--font-serif)", marginBottom: "var(--space-4)" }}>Vector Search</h1>
      <div style={{ display: "flex", gap: "var(--space-2)" }}>
        <Input type="text" placeholder="Ask a question across all documents..." style={{ fontSize: "var(--font-size-base)" }} />
        <Button variant="primary" icon={<Search size={20} />} />
      </div>
    </div>
    <div style={{ flex: 1, padding: "var(--space-6)", overflowY: "auto", background: "var(--color-bg-secondary)" }}>
      <Card padding="lg" className="ai-answer-card">
        <div style={{ display: "flex", alignItems: "center", gap: "var(--space-2)", color: "var(--color-accent-primary)", marginBottom: "var(--space-3)", fontWeight: 600 }}><Sparkles size={18} /> AI Synthesized Answer</div>
        <p style={{ lineHeight: 1.6 }}>Based on the Q3 Financial Report and Employee Handbook, the new travel expense policy takes effect on <strong>November 1st, 2025</strong>. Employees must use the Concur system for all flights, and the per diem meal allowance has been increased to $75/day domestically.</p>
      </Card>
      <h3 style={{ fontSize: "var(--font-size-sm)", fontWeight: 600, color: "var(--color-text-secondary)", marginBottom: "var(--space-4)", marginTop: "var(--space-4)", textTransform: "uppercase" }}>3 Source Chunks Found</h3>
      <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-3)" }}>
        {[1, 2, 3].map(i => (<Card key={i} padding="md">
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "var(--space-2)", fontSize: "var(--font-size-xs)", color: "var(--color-text-tertiary)" }}>
            <strong>Employee Handbook v4.docx</strong><span>Relevance Score: {0.92 - i * 0.05}</span>
          </div>
          <p style={{ fontSize: "var(--font-size-sm)", lineHeight: 1.5 }}>...effective November 1st, 2025, all employee travel must be booked through the new Concur portal. The per diem allowance for domestic travel meals is hereby adjusted to $75 per day, requiring receipts for any single purchase over $25...</p>
        </Card>))}
      </div>
    </div>
  </div>);
}
