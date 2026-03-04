import { BarChart3 } from "lucide-react";
import { Card } from "@geenius-ui/react-css";

export default function StatsPage() {
  const stats = [{ l: "Total Documents", v: "142" }, { l: "Vector Chunks", v: "18,492" }, { l: "Searches (30d)", v: "3,204" }, { l: "Storage Used", v: "1.2 GB" }];
  return (<div style={{ padding: "var(--space-8)", maxWidth: 1000 }}>
    <h1 style={{ fontSize: "var(--font-size-2xl)", fontFamily: "var(--font-serif)", marginBottom: "var(--space-6)" }}><BarChart3 size={24} style={{ display: "inline", marginRight: 12, verticalAlign: "middle", color: "var(--color-accent-primary)" }} /> Usage Statistics</h1>
    <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: "var(--space-4)", marginBottom: "var(--space-6)" }}>
      {stats.map(s => (<Card key={s.l} padding="lg">
        <span style={{ display: "block", fontSize: "var(--font-size-xs)", color: "var(--color-text-secondary)", marginBottom: 8 }}>{s.l}</span>
        <span style={{ fontSize: "var(--font-size-2xl)", fontWeight: 700 }}>{s.v}</span>
      </Card>))}
    </div>
  </div>);
}
