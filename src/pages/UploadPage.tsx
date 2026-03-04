import { UploadCloud, Settings2 } from "lucide-react";
import { Button, Card, Input, Label, Select, SelectItem } from "@geenius-ui/react-css";

export default function UploadPage() {
  return (<div style={{ padding: "var(--space-8)", maxWidth: 800 }}>
    <h1 style={{ fontSize: "var(--font-size-2xl)", fontFamily: "var(--font-serif)", marginBottom: "var(--space-6)" }}>Upload & Index</h1>
    <Card padding="lg" className="upload-dropzone">
      <div style={{ textAlign: "center", borderStyle: "dashed", borderWidth: 2, borderColor: "var(--color-border)", borderRadius: "var(--radius-md)", padding: "var(--space-8)", cursor: "pointer" }}>
        <UploadCloud size={48} style={{ color: "var(--color-accent-primary)", margin: "0 auto var(--space-4)" }} />
        <h3 style={{ fontSize: "var(--font-size-lg)", fontWeight: 600, marginBottom: "var(--space-2)" }}>Drag and drop files here</h3>
        <p style={{ color: "var(--color-text-secondary)", fontSize: "var(--font-size-sm)", marginBottom: "var(--space-4)" }}>Supports PDF, DOCX, TXT, CSV, MD (Max 50MB)</p>
        <Button variant="primary">Browse Files</Button>
      </div>
    </Card>
    <div style={{ marginTop: "var(--space-6)" }}>
      <Card padding="lg">
        <h3 style={{ fontSize: "var(--font-size-base)", fontWeight: 600, marginBottom: "var(--space-4)", display: "flex", alignItems: "center", gap: "var(--space-2)" }}><Settings2 size={18} /> Indexing Strategy</h3>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "var(--space-4)" }}>
          <div><Label style={{ marginBottom: 4 }}>Chunk Size (tokens)</Label><Input type="number" defaultValue={1000} /></div>
          <div><Label style={{ marginBottom: 4 }}>Chunk Overlap (tokens)</Label><Input type="number" defaultValue={200} /></div>
          <div style={{ gridColumn: "1/-1" }}><Label style={{ marginBottom: 4 }}>Embedding Model</Label>
            <Select defaultValue="text-embedding-3-large">
              <SelectItem value="text-embedding-3-large">text-embedding-3-large (OpenAI)</SelectItem>
              <SelectItem value="text-embedding-3-small">text-embedding-3-small (OpenAI)</SelectItem>
            </Select>
          </div>
        </div>
      </Card>
    </div>
  </div>);
}
