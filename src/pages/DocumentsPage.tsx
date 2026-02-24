import { FileText, MoreHorizontal } from "lucide-react";
const docs = [
  { id: "1", title: "Q3 Financial Report 2025.pdf", chunks: 142, size: "2.4 MB", date: "Oct 12, 2025", status: "Indexed" },
  { id: "2", title: "Employee Handbook v4.docx", chunks: 320, size: "4.1 MB", date: "Sep 28, 2025", status: "Indexed" },
  { id: "3", title: "API Integration Guidelines.md", chunks: 45, size: "120 KB", date: "Sep 15, 2025", status: "Indexed" },
];
export default function DocumentsPage() {
  return (<div style={{padding:"var(--space-8)",maxWidth:1000}}>
    <h1 style={{fontSize:"var(--font-size-2xl)",fontFamily:"var(--font-serif)",marginBottom:"var(--space-6)"}}>Document Library</h1>
    <div style={{display:"grid",gap:"var(--space-4)"}}>{docs.map(doc=>(<div key={doc.id} className="card" style={{padding:"var(--space-4) var(--space-5)",display:"flex",alignItems:"center",gap:"var(--space-4)"}}>
      <div style={{padding:12,background:"var(--color-accent-soft)",borderRadius:"var(--radius-md)",color:"var(--color-accent-primary)"}}><FileText size={20}/></div>
      <div style={{flex:1}}>
        <h3 style={{fontWeight:600,marginBottom:4}}>{doc.title}</h3>
        <div style={{display:"flex",gap:"var(--space-4)",fontSize:"var(--font-size-xs)",color:"var(--color-text-secondary)"}}>
          <span>{doc.size}</span><span>{doc.chunks} vector chunks</span><span>Added {doc.date}</span>
        </div>
      </div>
      <span className="badge badge-green">{doc.status}</span>
      <button className="btn btn-ghost btn-icon"><MoreHorizontal size={16}/></button>
    </div>))}</div>
  </div>);
}
