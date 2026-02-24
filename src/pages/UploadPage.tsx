import { UploadCloud, Settings2 } from "lucide-react";
export default function UploadPage() {
  return (<div style={{padding:"var(--space-8)",maxWidth:800}}>
    <h1 style={{fontSize:"var(--font-size-2xl)",fontFamily:"var(--font-serif)",marginBottom:"var(--space-6)"}}>Upload & Index</h1>
    <div className="card" style={{padding:"var(--space-8)",borderStyle:"dashed",borderWidth:2,textAlign:"center",marginBottom:"var(--space-6)",cursor:"pointer"}}>
      <UploadCloud size={48} style={{color:"var(--color-accent-primary)",margin:"0 auto var(--space-4)"}}/>
      <h3 style={{fontSize:"var(--font-size-lg)",fontWeight:600,marginBottom:"var(--space-2)"}}>Drag and drop files here</h3>
      <p style={{color:"var(--color-text-secondary)",fontSize:"var(--font-size-sm)",marginBottom:"var(--space-4)"}}>Supports PDF, DOCX, TXT, CSV, MD (Max 50MB)</p>
      <button className="btn btn-primary">Browse Files</button>
    </div>
    <div className="card" style={{padding:"var(--space-5)"}}>
      <h3 style={{fontSize:"var(--font-size-base)",fontWeight:600,marginBottom:"var(--space-4)",display:"flex",alignItems:"center",gap:"var(--space-2)"}}><Settings2 size={18}/> Indexing Strategy</h3>
      <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"var(--space-4)"}}>
        <div><label style={{display:"block",fontSize:"var(--font-size-xs)",fontWeight:600,marginBottom:4}}>Chunk Size (tokens)</label><input type="number" className="input" defaultValue={1000} /></div>
        <div><label style={{display:"block",fontSize:"var(--font-size-xs)",fontWeight:600,marginBottom:4}}>Chunk Overlap (tokens)</label><input type="number" className="input" defaultValue={200} /></div>
        <div style={{gridColumn:"1/-1"}}><label style={{display:"block",fontSize:"var(--font-size-xs)",fontWeight:600,marginBottom:4}}>Embedding Model</label><select className="input"><option>text-embedding-3-large (OpenAI)</option><option>text-embedding-3-small (OpenAI)</option></select></div>
      </div>
    </div>
  </div>);
}
