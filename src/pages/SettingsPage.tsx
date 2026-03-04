import { Settings } from "lucide-react";
import { Button, Card, Input, Label } from "@geenius-ui/react-css";

export default function SettingsPage() {
  return (<div style={{ padding: "var(--space-8)", maxWidth: 600 }}>
    <h1 style={{ fontSize: "var(--font-size-2xl)", fontFamily: "var(--font-serif)", marginBottom: "var(--space-6)" }}><Settings size={28} style={{ display: "inline", marginRight: 12, verticalAlign: "middle", color: "var(--color-accent-primary)" }} /> Vault Settings</h1>
    <Card padding="lg">
      <h3 style={{ fontSize: "var(--font-size-base)", fontWeight: 600, marginBottom: "var(--space-4)" }}>Vector Database Connection</h3>
      <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-4)" }}>
        <div><Label style={{ marginBottom: 4 }}>Pinecone API Key</Label><Input type="password" placeholder="pcsk_..." /></div>
        <div><Label style={{ marginBottom: 4 }}>Pinecone Environment</Label><Input type="text" placeholder="gcp-starter" /></div>
        <div><Label style={{ marginBottom: 4 }}>Pinecone Index Name</Label><Input type="text" placeholder="knowledge-vault-prod" /></div>
        <Button variant="primary" style={{ alignSelf: "flex-start", marginTop: 8 }}>Save Database Settings</Button>
      </div>
    </Card>
  </div>);
}
