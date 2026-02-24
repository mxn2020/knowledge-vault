import { Settings } from "lucide-react";
export default function SettingsPage() {
  return (<div style={{padding:"var(--space-8)",maxWidth:600}}>
    <h1 style={{fontSize:"var(--font-size-2xl)",fontFamily:"var(--font-serif)",marginBottom:"var(--space-6)"}}><Settings size={28} style={{display:"inline",marginRight:12,verticalAlign:"middle",color:"var(--color-accent-primary)"}}/> Vault Settings</h1>
    <div className="card" style={{padding:"var(--space-6)"}}>
      <h3 style={{fontSize:"var(--font-size-base)",fontWeight:600,marginBottom:"var(--space-4)"}}>Vector Database Connection</h3>
      <div style={{display:"flex",flexDirection:"column",gap:"var(--space-4)"}}>
        <div><label style={{fontSize:"12px",fontWeight:600,marginBottom:4,display:"block"}}>Pinecone API Key</label><input type="password" placeholder="pcsk_..." className="input" /></div>
        <div><label style={{fontSize:"12px",fontWeight:600,marginBottom:4,display:"block"}}>Pinecone Environment</label><input type="text" placeholder="gcp-starter" className="input" /></div>
        <div><label style={{fontSize:"12px",fontWeight:600,marginBottom:4,display:"block"}}>Pinecone Index Name</label><input type="text" placeholder="knowledge-vault-prod" className="input" /></div>
        <button className="btn btn-primary" style={{alignSelf:"flex-start",marginTop:8}}>Save Database Settings</button>
      </div>
    </div>
  </div>);
}
