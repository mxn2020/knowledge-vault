import { Link, useLocation } from "react-router-dom";
import { Library, UploadCloud, Search, BarChart3, Settings } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
export default function Sidebar() {
  const loc = useLocation();
  const links = [
    { to: "/", icon: Library, label: "Documents" },
    { to: "/upload", icon: UploadCloud, label: "Upload & Index" },
    { to: "/search", icon: Search, label: "Vector Search" },
    { to: "/stats", icon: BarChart3, label: "Usage Stats" },
    { to: "/settings", icon: Settings, label: "Settings" }
  ];
  return (<aside style={{width:"var(--sidebar-width)",background:"var(--color-bg-card)",borderRight:"1px solid var(--color-border)",height:"100vh",position:"fixed",display:"flex",flexDirection:"column"}}>
    <div style={{padding:"var(--space-5)",display:"flex",alignItems:"center",gap:"var(--space-3)",borderBottom:"1px solid var(--color-border)"}}>
      <Library size={24} style={{color:"var(--color-accent-primary)"}}/><strong style={{fontSize:"var(--font-size-lg)",fontFamily:"var(--font-serif)"}}>Knowledge Vault</strong>
    </div>
    <nav style={{padding:"var(--space-4)",flex:1,display:"flex",flexDirection:"column",gap:"var(--space-1)"}}>
      {links.map(l=><Link key={l.to} to={l.to} style={{display:"flex",alignItems:"center",gap:"var(--space-3)",padding:"var(--space-3)",borderRadius:"var(--radius-sm)",color:loc.pathname===l.to?"var(--color-accent-primary)":"var(--color-text-secondary)",background:loc.pathname===l.to?"var(--color-accent-soft)":"transparent",fontWeight:500,fontSize:"var(--font-size-sm)",transition:"all var(--transition-fast)"}}><l.icon size={18}/>{l.label}</Link>)}
    </nav>
    <div style={{padding:"var(--space-4)",borderTop:"1px solid var(--color-border)",display:"flex",justifyContent:"flex-end"}}><ThemeToggle /></div>
  </aside>);
}
